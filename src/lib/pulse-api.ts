import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql, type Sql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";
import { seedBots, seedMarkets, seedPriceHistory } from "@/data/seed";
import type {
  Category,
  Challenge,
  Comment,
  Market,
  Position,
  PricePoint,
  ReactionKind,
  Trade,
  Trader,
  UserPulseStats,
  WalletInfo,
} from "@/types/market";

const STARTING_BALANCE = 1_000;
const FAUCET_AMOUNT = 100;
const FAUCET_COOLDOWN_MS = 24 * 60 * 60 * 1000;
const CHALLENGE_TARGET = 3;
const CHALLENGE_BONUS = 50;

type MarketRow = {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string | null;
  end_date: unknown;
  volume: unknown;
  liquidity: unknown;
  yes_price: unknown;
  no_price: unknown;
  yes_change: unknown;
  status: string;
  created_at: unknown;
  creator_id: string | null;
  resolution_source: string | null;
};

let seedLock: Promise<void> | null = null;

function num(v: unknown): number {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

function iso(v: unknown): string {
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "string") return v;
  return new Date().toISOString();
}

function clampPrice(n: number) {
  return +Math.max(0.02, Math.min(0.98, n)).toFixed(3);
}

function newId(prefix: string) {
  return `${prefix}-${crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`;
}

function walletAddressFor(userId: string) {
  let x = 2166136261;
  for (let i = 0; i < userId.length; i++) {
    x ^= userId.charCodeAt(i);
    x = Math.imul(x, 16777619);
  }
  const hex: string[] = [];
  for (let i = 0; i < 40; i++) {
    x = (Math.imul(x >>> 0, 1664525) + 1013904223) >>> 0;
    hex.push((x % 16).toString(16));
  }
  return `0x${hex.join("")}`;
}

function txHash() {
  return `0x${crypto.randomUUID().replace(/-/g, "")}${crypto.randomUUID().replace(/-/g, "").slice(0, 8)}`;
}

function mondayUtc(d = new Date()) {
  const copy = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = copy.getUTCDay();
  const diff = day === 0 ? 6 : day - 1;
  copy.setUTCDate(copy.getUTCDate() - diff);
  return copy.toISOString().slice(0, 10);
}

function emptyReactions() {
  return { fire: 0, eyes: 0, skull: 0 };
}

function mapMarket(
  row: MarketRow,
  reactions: Market["reactions"],
  volume24h: number,
): Market {
  const yesPrice = num(row.yes_price);
  const noPrice = num(row.no_price);
  const yesChange = num(row.yes_change);
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    category: row.category as Category,
    imageUrl: row.image_url ?? undefined,
    endDate: iso(row.end_date),
    volume: num(row.volume),
    liquidity: num(row.liquidity),
    yesPrice,
    noPrice,
    outcomes: [
      { id: `${row.id}-yes`, name: "Yes", price: yesPrice, change24h: yesChange },
      { id: `${row.id}-no`, name: "No", price: noPrice, change24h: -yesChange },
    ],
    status: (row.status as Market["status"]) || "active",
    createdAt: iso(row.created_at),
    creatorId: row.creator_id ?? undefined,
    resolutionSource: row.resolution_source ?? undefined,
    reactions,
    volume24h,
  };
}

async function insertChunks(sql: Sql, statement: string, rows: unknown[][], width: number) {
  const size = 40;
  for (let i = 0; i < rows.length; i += size) {
    const part = rows.slice(i, i + size);
    const params: unknown[] = [];
    const values = part.map((row) => {
      const start = params.length;
      params.push(...row);
      return `(${Array.from({ length: width }, (_, j) => `$${start + j + 1}`).join(",")})`;
    });
    await sql.query(`${statement} ${values.join(",")}`, params);
  }
}

async function reactionMap(sql: Sql) {
  const rows = await sql<{ market_id: string; kind: string; n: number }>`
    select market_id, kind, count(*)::int as n from reactions group by market_id, kind
  `;
  const map = new Map<string, Market["reactions"]>();
  for (const row of rows) {
    const current = map.get(row.market_id) ?? emptyReactions();
    if (row.kind === "fire" || row.kind === "eyes" || row.kind === "skull") {
      current[row.kind] = num(row.n);
    }
    map.set(row.market_id, current);
  }
  return map;
}

async function volume24hMap(sql: Sql) {
  const rows = await sql<{ market_id: string; vol: unknown }>`
    select market_id, sum(total) as vol
    from trades
    where created_at > now() - interval '24 hours'
    group by market_id
  `;
  const map = new Map<string, number>();
  for (const row of rows) map.set(row.market_id, num(row.vol));
  return map;
}

async function hydrateMarkets(sql: Sql, rows: MarketRow[]): Promise<Market[]> {
  const [reactions, volumes] = await Promise.all([reactionMap(sql), volume24hMap(sql)]);
  return rows.map((row) =>
    mapMarket(row, reactions.get(row.id) ?? emptyReactions(), volumes.get(row.id) ?? 0),
  );
}

async function usernameFor(sql: Sql, userId: string) {
  const rows = await sql<{ name: string; email: string }>`
    select "name", "email" from "user" where "id" = ${userId} limit 1
  `;
  const row = rows[0];
  if (row?.name?.trim()) return row.name.trim().slice(0, 24);
  if (row?.email) return row.email.split("@")[0].slice(0, 24);
  return `trader-${userId.slice(0, 6)}`;
}

async function ensureChallenge(sql: Sql) {
  const week = mondayUtc();
  const id = `wk-${week}`;
  const existing = await sql<{ id: string }>`select id from challenges where id = ${id} limit 1`;
  if (!existing[0]) {
    await sql`
      insert into challenges (id, title, description, week_start, bonus_ria, target_trades)
      values (
        ${id},
        ${"Three predictions this week"},
        ${"Place 3 trades before the week ends and claim bonus RIA."},
        ${week},
        ${CHALLENGE_BONUS},
        ${CHALLENGE_TARGET}
      )
    `;
  }
  return id;
}

async function seedOnce(sql: Sql) {
  const existing = await sql<{ id: string }>`select id from markets limit 1`;
  if (!existing[0]) {
    await insertChunks(
      sql,
      `insert into markets (
        id, title, description, category, image_url, end_date, volume, liquidity,
        yes_price, no_price, yes_change, status, created_at, resolution_source
      ) values`,
      seedMarkets.map((m) => [
        m.id,
        m.title,
        m.description,
        m.category,
        m.imageUrl ?? null,
        m.endDate,
        m.volume,
        m.liquidity,
        m.yesPrice,
        m.noPrice,
        m.yesChange,
        m.status,
        m.createdAt,
        m.resolutionSource ?? null,
      ]),
      14,
    );

    const history = seedPriceHistory(seedMarkets);
    await insertChunks(
      sql,
      `insert into price_history (market_id, outcome, price, ts) values`,
      history.map((h) => [h.marketId, h.outcome, h.price, h.ts]),
      4,
    );

    await insertChunks(
      sql,
      `insert into user_stats (
        user_id, username, total_volume, total_profit, total_trades, wins, streak_days, best_category
      ) values`,
      seedBots.map((b) => [
        b.id,
        b.username,
        b.totalVolume,
        b.totalProfit,
        b.totalTrades,
        Math.round((b.winRate / 100) * b.totalTrades),
        0,
        "crypto",
      ]),
      8,
    );

    const now = Date.now();
    const botTrades: unknown[][] = [];
    seedMarkets.forEach((m, mi) => {
      const count = 4 + (mi % 6);
      for (let i = 0; i < count; i++) {
        const bot = seedBots[(mi + i) % seedBots.length];
        const outcome = i % 2 === 0 ? "yes" : "no";
        const price = outcome === "yes" ? m.yesPrice : m.noPrice;
        const total = 80 + ((mi * 17 + i * 31) % 420);
        const shares = total / price;
        botTrades.push([
          `seed-${m.id}-${i}`,
          bot.id,
          m.id,
          m.title,
          outcome,
          "buy",
          shares,
          price,
          total,
          txHash(),
          new Date(now - ((i * 97 + mi * 13) % 20) * 60 * 60 * 1000).toISOString(),
        ]);
      }
    });
    await insertChunks(
      sql,
      `insert into trades (
        id, user_id, market_id, market_title, outcome, side, shares, price, total, tx_hash, created_at
      ) values`,
      botTrades,
      11,
    );

    const comments: unknown[][] = [
      [
        "c-btc-1",
        "m-btc",
        "t-aria",
        "aria.markets",
        "150k is the consensus target once ETF flows seasonally pick up. Still buying Yes on dips.",
        new Date(now - 6 * 3600_000).toISOString(),
      ],
      [
        "c-rialo-1",
        "m-rialo",
        "t-keel",
        "keel",
        "Mainnet in Q1 is aggressive. Watch testnet stability more than the date.",
        new Date(now - 3 * 3600_000).toISOString(),
      ],
      [
        "c-fed-1",
        "m-fed",
        "t-nova",
        "novalabs",
        "Cut looks baked in. Pricing 73¢ feels right unless CPI surprises.",
        new Date(now - 90 * 60_000).toISOString(),
      ],
    ];
    await insertChunks(
      sql,
      `insert into comments (id, market_id, user_id, username, content, created_at) values`,
      comments,
      6,
    );

    const reacts: unknown[][] = [];
    const kinds: ReactionKind[] = ["fire", "eyes", "skull"];
    seedMarkets.forEach((m, mi) => {
      seedBots.forEach((bot, bi) => {
        if ((mi + bi) % 3 === 0) {
          reacts.push([m.id, bot.id, kinds[(mi + bi) % 3], new Date(now - bi * 3600_000).toISOString()]);
        }
      });
    });
    if (reacts.length) {
      await insertChunks(
        sql,
        `insert into reactions (market_id, user_id, kind, created_at) values`,
        reacts,
        4,
      );
    }
  }
  await ensureChallenge(sql);
}

async function ensureSeeded() {
  if (!seedLock) {
    seedLock = (async () => {
      const sql = await getSql();
      await seedOnce(sql);
    })().catch((err) => {
      seedLock = null;
      throw err;
    });
  }
  await seedLock;
}

async function loadMarkets(sql: Sql, ids?: string[]) {
  const rows = ids?.length
    ? await sql.query<MarketRow>(
        `select * from markets where id = any($1::text[]) order by volume desc`,
        [ids],
      )
    : await sql<MarketRow>`select * from markets order by volume desc`;
  return hydrateMarkets(sql, rows);
}

async function grantBadges(
  sql: Sql,
  userId: string,
  stats: { totalTrades: number; wins: number; rank: number | null },
) {
  const earned: string[] = [];
  if (stats.totalTrades >= 1) earned.push("first_prediction");
  if (stats.wins >= 10) earned.push("ten_wins");
  if (stats.rank !== null && stats.rank <= 10 && stats.totalTrades >= 1) earned.push("top_ten");
  for (const badge of earned) {
    await sql`
      insert into badges (user_id, badge_id) values (${userId}, ${badge})
      on conflict do nothing
    `;
  }
}

async function ensureWallet(sql: Sql, userId: string) {
  const existing = await sql<{
    user_id: string;
    address: string;
    balance: unknown;
    faucet_claimed_at: unknown;
  }>`select * from wallets where user_id = ${userId} limit 1`;
  if (!existing[0]) {
    const address = walletAddressFor(userId);
    await sql`
      insert into wallets (user_id, address, balance)
      values (${userId}, ${address}, ${STARTING_BALANCE})
    `;
    const username = await usernameFor(sql, userId);
    await sql`
      insert into user_stats (user_id, username)
      values (${userId}, ${username})
      on conflict (user_id) do nothing
    `;
    return {
      user_id: userId,
      address,
      balance: STARTING_BALANCE,
      faucet_claimed_at: null as unknown,
    };
  }
  return existing[0];
}

function walletInfo(row: {
  address: string;
  balance: unknown;
  faucet_claimed_at: unknown;
}): WalletInfo {
  const claimed = row.faucet_claimed_at ? new Date(iso(row.faucet_claimed_at)).getTime() : 0;
  return {
    address: row.address,
    balance: num(row.balance),
    faucetReady: !claimed || Date.now() - claimed >= FAUCET_COOLDOWN_MS,
  };
}

async function loadPositions(sql: Sql, userId: string): Promise<Position[]> {
  const rows = await sql<{
    id: string;
    market_id: string;
    market_title: string;
    outcome: "yes" | "no";
    shares: unknown;
    avg_price: unknown;
    yes_price: unknown;
    no_price: unknown;
  }>`
    select p.id, p.market_id, p.market_title, p.outcome, p.shares, p.avg_price,
           m.yes_price, m.no_price
    from positions p
    join markets m on m.id = p.market_id
    where p.user_id = ${userId}
  `;
  return rows
    .map((row) => {
      const shares = num(row.shares);
      const avgPrice = num(row.avg_price);
      const currentPrice = row.outcome === "yes" ? num(row.yes_price) : num(row.no_price);
      const pnl = (currentPrice - avgPrice) * shares;
      const cost = avgPrice * shares;
      return {
        id: row.id,
        marketId: row.market_id,
        marketTitle: row.market_title,
        outcome: row.outcome,
        shares,
        avgPrice,
        currentPrice,
        pnl,
        pnlPercent: cost > 0 ? (pnl / cost) * 100 : 0,
      };
    })
    .filter((p) => p.shares > 0.0001);
}

async function loadTrades(sql: Sql, userId: string): Promise<Trade[]> {
  const rows = await sql<{
    id: string;
    market_id: string;
    market_title: string;
    outcome: "yes" | "no";
    side: "buy" | "sell";
    shares: unknown;
    price: unknown;
    total: unknown;
    tx_hash: string;
    created_at: unknown;
  }>`
    select * from trades where user_id = ${userId} order by created_at desc limit 50
  `;
  return rows.map((row) => ({
    id: row.id,
    marketId: row.market_id,
    marketTitle: row.market_title,
    outcome: row.outcome,
    type: row.side,
    shares: num(row.shares),
    price: num(row.price),
    total: num(row.total),
    timestamp: iso(row.created_at),
    txHash: row.tx_hash,
  }));
}

async function loadStats(sql: Sql, userId: string, positions: Position[]): Promise<UserPulseStats> {
  const username = await usernameFor(sql, userId);
  const rows = await sql<{
    total_volume: unknown;
    total_profit: unknown;
    total_trades: unknown;
    wins: unknown;
    streak_days: unknown;
    best_category: string | null;
    username: string;
  }>`select * from user_stats where user_id = ${userId} limit 1`;
  const row = rows[0];
  const totalProfit = positions.reduce((s, p) => s + p.pnl, 0);
  const wins = positions.filter((p) => p.pnl > 0).length;
  const totalTrades = row ? num(row.total_trades) : 0;
  const winRate = positions.length ? (wins / positions.length) * 100 : 0;
  if (row) {
    await sql`
      update user_stats
      set username = ${username},
          total_profit = ${totalProfit},
          wins = ${Math.max(num(row.wins), wins)}
      where user_id = ${userId}
    `;
  }
  const rankRows = await sql<{ rank: number }>`
    select 1 + count(*)::int as rank
    from user_stats
    where total_profit > ${totalProfit}
  `;
  const rank = totalTrades > 0 ? num(rankRows[0]?.rank) : null;
  const badgeRows = await sql<{ badge_id: string }>`
    select badge_id from badges where user_id = ${userId}
  `;
  await grantBadges(sql, userId, {
    totalTrades,
    wins: Math.max(row ? num(row.wins) : 0, wins),
    rank,
  });
  const badges = await sql<{ badge_id: string }>`
    select badge_id from badges where user_id = ${userId}
  `;
  return {
    username,
    totalVolume: row ? num(row.total_volume) : 0,
    totalProfit,
    totalTrades,
    wins: Math.max(row ? num(row.wins) : 0, wins),
    winRate,
    streakDays: row ? num(row.streak_days) : 0,
    bestCategory: row?.best_category ?? null,
    rank,
    badges: (badges.length ? badges : badgeRows).map((b) => b.badge_id),
  };
}

async function loadChallenge(sql: Sql, userId: string): Promise<Challenge> {
  const id = await ensureChallenge(sql);
  const rows = await sql<{
    id: string;
    title: string;
    description: string;
    week_start: unknown;
    bonus_ria: unknown;
    target_trades: unknown;
  }>`select * from challenges where id = ${id} limit 1`;
  const progress = await sql<{ trades: unknown; claimed: boolean }>`
    select trades, claimed from challenge_progress
    where challenge_id = ${id} and user_id = ${userId}
    limit 1
  `;
  const row = rows[0];
  return {
    id,
    title: row?.title ?? "Three predictions this week",
    description: row?.description ?? "Place 3 trades this week.",
    weekStart: iso(row?.week_start ?? mondayUtc()).slice(0, 10),
    bonusRia: row ? num(row.bonus_ria) : CHALLENGE_BONUS,
    targetTrades: row ? num(row.target_trades) : CHALLENGE_TARGET,
    progress: progress[0] ? num(progress[0].trades) : 0,
    claimed: progress[0]?.claimed ?? false,
  };
}

async function bestCategoryFor(sql: Sql, userId: string) {
  const rows = await sql<{ category: string; vol: unknown }>`
    select m.category, sum(t.total) as vol
    from trades t
    join markets m on m.id = t.market_id
    where t.user_id = ${userId}
    group by m.category
    order by vol desc
    limit 1
  `;
  return rows[0]?.category ?? null;
}

export const listHome = createServerFn({ method: "GET" }).handler(async () => {
  await ensureSeeded();
  const sql = await getSql();
  const markets = await loadMarkets(sql);
  const hot = [...markets].sort((a, b) => b.volume24h - a.volume24h || b.volume - a.volume).slice(0, 4);
  const traderRows = await sql<{ n: number }>`select count(*)::int as n from user_stats`;
  const tradeRows = await sql<{ n: number }>`
    select count(*)::int as n from trades where created_at > now() - interval '24 hours'
  `;
  return {
    markets,
    hot,
    overview: {
      totalVolume: markets.reduce((s, m) => s + m.volume, 0),
      activeMarkets: markets.filter((m) => m.status === "active").length,
      traders: num(traderRows[0]?.n),
      trades24h: num(tradeRows[0]?.n),
    },
  };
});

export const getMarketDetail = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await ensureSeeded();
    const sql = await getSql();
    const rows = await sql<MarketRow>`select * from markets where id = ${data.id} limit 1`;
    if (!rows[0]) {
      return { market: null as Market | null, yesHistory: [] as PricePoint[], noHistory: [] as PricePoint[], comments: [] as Comment[] };
    }
    const [markets, history, comments] = await Promise.all([
      hydrateMarkets(sql, rows),
      sql<{ outcome: string; price: unknown; ts: unknown }>`
        select outcome, price, ts from price_history
        where market_id = ${data.id}
        order by ts asc
      `,
      sql<{
        id: string;
        market_id: string;
        user_id: string;
        username: string;
        content: string;
        created_at: unknown;
      }>`
        select * from comments where market_id = ${data.id} order by created_at desc
      `,
    ]);
    const yesHistory: PricePoint[] = [];
    const noHistory: PricePoint[] = [];
    for (const point of history) {
      const item = { timestamp: iso(point.ts), price: num(point.price) };
      if (point.outcome === "yes") yesHistory.push(item);
      else noHistory.push(item);
    }
    return {
      market: markets[0] ?? null,
      yesHistory,
      noHistory,
      comments: comments.map((c) => ({
        id: c.id,
        marketId: c.market_id,
        userId: c.user_id,
        username: c.username,
        content: c.content,
        createdAt: iso(c.created_at),
      })),
    };
  });

export const getLeaderboard = createServerFn({ method: "GET" }).handler(async () => {
  await ensureSeeded();
  const sql = await getSql();
  const wallets = await sql<{ user_id: string; address: string }>`select user_id, address from wallets`;
  const addr = new Map(wallets.map((w) => [w.user_id, w.address]));
  const rows = await sql<{
    user_id: string;
    username: string;
    total_volume: unknown;
    total_profit: unknown;
    total_trades: unknown;
    wins: unknown;
  }>`
    select user_id, username, total_volume, total_profit, total_trades, wins
    from user_stats
    order by total_profit desc, total_volume desc
    limit 40
  `;
  return rows.map((row, i): Trader => {
    const trades = Math.max(1, num(row.total_trades));
    return {
      id: row.user_id,
      username: row.username,
      walletAddress: addr.get(row.user_id) ?? walletAddressFor(row.user_id),
      totalVolume: num(row.total_volume),
      totalProfit: num(row.total_profit),
      totalTrades: num(row.total_trades),
      winRate: (num(row.wins) / trades) * 100,
      rank: i + 1,
    };
  });
});

export const getMyPulse = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await ensureSeeded();
    const sql = await getSql();
    const walletRow = await ensureWallet(sql, context.userId);
    const [positions, trades, challenge, reactionRows] = await Promise.all([
      loadPositions(sql, context.userId),
      loadTrades(sql, context.userId),
      loadChallenge(sql, context.userId),
      sql<{ market_id: string; kind: ReactionKind }>`
        select market_id, kind from reactions where user_id = ${context.userId}
      `,
    ]);
    const stats = await loadStats(sql, context.userId, positions);
    const myReactions: Record<string, ReactionKind[]> = {};
    for (const row of reactionRows) {
      (myReactions[row.market_id] ??= []).push(row.kind);
    }
    return {
      wallet: walletInfo(walletRow),
      stats,
      challenge,
      positions,
      trades,
      myReactions,
    };
  });

export const buyShares = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      marketId: z.string(),
      outcome: z.enum(["yes", "no"]),
      amount: z.number().positive(),
    }),
  )
  .handler(async ({ context, data }) => {
    await ensureSeeded();
    const sql = await getSql();
    const walletRow = await ensureWallet(sql, context.userId);
    const balance = num(walletRow.balance);
    if (data.amount > balance) {
      return { ok: false as const, message: "Insufficient RIA balance." };
    }
    const markets = await sql<MarketRow>`select * from markets where id = ${data.marketId} limit 1`;
    const market = markets[0];
    if (!market || market.status !== "active") {
      return { ok: false as const, message: "Market is not available." };
    }
    const price = data.outcome === "yes" ? num(market.yes_price) : num(market.no_price);
    const shares = data.amount / price;
    const liquidity = num(market.liquidity);
    const delta = Math.min(0.04, (data.amount / (liquidity + data.amount)) * 0.12);
    const yesPrice =
      data.outcome === "yes"
        ? clampPrice(num(market.yes_price) + delta)
        : clampPrice(num(market.yes_price) - delta);
    const noPrice = clampPrice(1 - yesPrice);
    const yesChange = num(market.yes_change) + (data.outcome === "yes" ? delta : -delta) * 100;
    const now = new Date().toISOString();
    const hash = txHash();

    await sql`
      update markets
      set yes_price = ${yesPrice},
          no_price = ${noPrice},
          volume = ${num(market.volume) + data.amount},
          yes_change = ${+yesChange.toFixed(1)}
      where id = ${data.marketId}
    `;
    await sql`
      insert into price_history (market_id, outcome, price, ts)
      values (${data.marketId}, ${"yes"}, ${yesPrice}, ${now})
    `;
    await sql`
      insert into price_history (market_id, outcome, price, ts)
      values (${data.marketId}, ${"no"}, ${noPrice}, ${now})
    `;
    await sql`update wallets set balance = ${balance - data.amount} where user_id = ${context.userId}`;

    const existing = await sql<{ id: string; shares: unknown; avg_price: unknown }>`
      select id, shares, avg_price from positions
      where user_id = ${context.userId} and market_id = ${data.marketId} and outcome = ${data.outcome}
      limit 1
    `;
    if (existing[0]) {
      const newShares = num(existing[0].shares) + shares;
      const avgPrice = (num(existing[0].shares) * num(existing[0].avg_price) + shares * price) / newShares;
      await sql`
        update positions set shares = ${newShares}, avg_price = ${avgPrice} where id = ${existing[0].id}
      `;
    } else {
      await sql`
        insert into positions (id, user_id, market_id, market_title, outcome, shares, avg_price)
        values (${newId("pos")}, ${context.userId}, ${data.marketId}, ${market.title}, ${data.outcome}, ${shares}, ${price})
      `;
    }

    await sql`
      insert into trades (
        id, user_id, market_id, market_title, outcome, side, shares, price, total, tx_hash, created_at
      ) values (
        ${newId("tx")}, ${context.userId}, ${data.marketId}, ${market.title}, ${data.outcome},
        ${"buy"}, ${shares}, ${price}, ${data.amount}, ${hash}, ${now}
      )
    `;

    const username = await usernameFor(sql, context.userId);
    const today = now.slice(0, 10);
    const stats = await sql<{ last_predict_date: unknown; streak_days: unknown; wins: unknown }>`
      select last_predict_date, streak_days, wins from user_stats where user_id = ${context.userId} limit 1
    `;
    let streak = 1;
    if (stats[0]?.last_predict_date) {
      const last = iso(stats[0].last_predict_date).slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (last === today) streak = Math.max(1, num(stats[0].streak_days));
      else if (last === yesterday) streak = num(stats[0].streak_days) + 1;
    }
    const immediateWin = (data.outcome === "yes" ? yesPrice : noPrice) >= price;
    const nextWins = (stats[0] ? num(stats[0].wins) : 0) + (immediateWin ? 1 : 0);
    const category = await bestCategoryFor(sql, context.userId);
    await sql`
      insert into user_stats (
        user_id, username, total_volume, total_trades, wins, streak_days, last_predict_date, best_category
      ) values (
        ${context.userId}, ${username}, ${data.amount}, 1, ${nextWins}, ${streak}, ${today}, ${category}
      )
      on conflict (user_id) do update set
        username = excluded.username,
        total_volume = user_stats.total_volume + excluded.total_volume,
        total_trades = user_stats.total_trades + 1,
        wins = ${nextWins},
        streak_days = ${streak},
        last_predict_date = ${today},
        best_category = ${category}
    `;

    const challengeId = await ensureChallenge(sql);
    await sql`
      insert into challenge_progress (challenge_id, user_id, trades)
      values (${challengeId}, ${context.userId}, 1)
      on conflict (challenge_id, user_id) do update set
        trades = challenge_progress.trades + 1
    `;

    const rankRows = await sql<{ rank: number }>`
      select 1 + count(*)::int as rank
      from user_stats us
      where us.total_profit > (
        select coalesce(total_profit, 0) from user_stats where user_id = ${context.userId}
      )
    `;
    await grantBadges(sql, context.userId, {
      totalTrades: (stats[0] ? 1 : 0) + 1,
      wins: nextWins,
      rank: num(rankRows[0]?.rank),
    });

    return {
      ok: true as const,
      message: `Bought ${shares.toFixed(2)} ${data.outcome.toUpperCase()} shares`,
      txHash: hash,
      shares,
    };
  });

export const claimFaucet = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await ensureSeeded();
    const sql = await getSql();
    const walletRow = await ensureWallet(sql, context.userId);
    const claimed = walletRow.faucet_claimed_at
      ? new Date(iso(walletRow.faucet_claimed_at)).getTime()
      : 0;
    if (claimed && Date.now() - claimed < FAUCET_COOLDOWN_MS) {
      return { ok: false as const, message: "Faucet already claimed today." };
    }
    const now = new Date().toISOString();
    await sql`
      update wallets
      set balance = ${num(walletRow.balance) + FAUCET_AMOUNT}, faucet_claimed_at = ${now}
      where user_id = ${context.userId}
    `;
    return { ok: true as const, message: `${FAUCET_AMOUNT} RIA sent to your inbuilt wallet.` };
  });

export const addComment = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(z.object({ marketId: z.string(), content: z.string().trim().min(1).max(500) }))
  .handler(async ({ context, data }) => {
    await ensureSeeded();
    const sql = await getSql();
    const username = await usernameFor(sql, context.userId);
    const id = newId("c");
    const createdAt = new Date().toISOString();
    await sql`
      insert into comments (id, market_id, user_id, username, content, created_at)
      values (${id}, ${data.marketId}, ${context.userId}, ${username}, ${data.content}, ${createdAt})
    `;
    const comment: Comment = {
      id,
      marketId: data.marketId,
      userId: context.userId,
      username,
      content: data.content,
      createdAt,
    };
    return { ok: true as const, comment };
  });

export const deleteComment = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(z.object({ id: z.string() }))
  .handler(async ({ context, data }) => {
    const sql = await getSql();
    await sql`delete from comments where id = ${data.id} and user_id = ${context.userId}`;
    return { ok: true as const };
  });

export const toggleReaction = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(z.object({ marketId: z.string(), kind: z.enum(["fire", "eyes", "skull"]) }))
  .handler(async ({ context, data }) => {
    await ensureSeeded();
    const sql = await getSql();
    await ensureWallet(sql, context.userId);
    const existing = await sql<{ kind: string }>`
      select kind from reactions
      where market_id = ${data.marketId} and user_id = ${context.userId} and kind = ${data.kind}
      limit 1
    `;
    if (existing[0]) {
      await sql`
        delete from reactions
        where market_id = ${data.marketId} and user_id = ${context.userId} and kind = ${data.kind}
      `;
      return { on: false as const };
    }
    await sql`
      insert into reactions (market_id, user_id, kind)
      values (${data.marketId}, ${context.userId}, ${data.kind})
    `;
    return { on: true as const };
  });

export const createMarket = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      title: z.string().trim().min(8).max(140),
      description: z.string().trim().min(12).max(2000),
      category: z.enum(["crypto", "politics", "sports", "entertainment", "tech", "science", "economics"]),
      endDate: z.string(),
      resolutionSource: z.string().trim().min(2).max(400),
      imageUrl: z.string().trim().optional(),
      liquidity: z.number().min(10),
    }),
  )
  .handler(async ({ context, data }) => {
    await ensureSeeded();
    const sql = await getSql();
    const walletRow = await ensureWallet(sql, context.userId);
    if (data.liquidity > num(walletRow.balance)) {
      return { ok: false as const, message: "Insufficient RIA for initial liquidity.", id: undefined };
    }
    const id = newId("m");
    const now = new Date().toISOString();
    await sql`
      insert into markets (
        id, title, description, category, image_url, end_date, volume, liquidity,
        yes_price, no_price, yes_change, status, created_at, creator_id, resolution_source
      ) values (
        ${id}, ${data.title}, ${data.description}, ${data.category}, ${data.imageUrl || null},
        ${data.endDate}, 0, ${data.liquidity}, 0.5, 0.5, 0, ${"active"}, ${now},
        ${context.userId}, ${data.resolutionSource}
      )
    `;
    await sql`
      insert into price_history (market_id, outcome, price, ts)
      values (${id}, ${"yes"}, 0.5, ${now})
    `;
    await sql`
      insert into price_history (market_id, outcome, price, ts)
      values (${id}, ${"no"}, 0.5, ${now})
    `;
    await sql`
      update wallets set balance = ${num(walletRow.balance) - data.liquidity}
      where user_id = ${context.userId}
    `;
    return { ok: true as const, message: "Market is live.", id };
  });

export const claimChallenge = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    await ensureSeeded();
    const sql = await getSql();
    const challenge = await loadChallenge(sql, context.userId);
    if (challenge.claimed) return { ok: false as const, message: "Bonus already claimed." };
    if (challenge.progress < challenge.targetTrades) {
      return { ok: false as const, message: "Finish the weekly challenge first." };
    }
    await ensureWallet(sql, context.userId);
    await sql`
      update challenge_progress
      set claimed = true
      where challenge_id = ${challenge.id} and user_id = ${context.userId}
    `;
    await sql`
      update wallets set balance = balance + ${challenge.bonusRia} where user_id = ${context.userId}
    `;
    return { ok: true as const, message: `+${challenge.bonusRia} RIA weekly bonus.` };
  });
