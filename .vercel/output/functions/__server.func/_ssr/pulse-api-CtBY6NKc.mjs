import { n as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-BlkH4MvN.mjs";
import { a as string, i as object, r as number, t as _enum } from "../_libs/zod.mjs";
import { t as getSql } from "./db-WSOvPVT6.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pulse-api-CtBY6NKc.js
function hash(str) {
	let h = 2166136261;
	for (let i = 0; i < str.length; i++) {
		h ^= str.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function mulberry32(seed) {
	return () => {
		let t = seed += 1831565813;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
var seedMarkets = [
	{
		id: "m-btc",
		title: "Will Bitcoin reach $150K by end of 2026?",
		description: "This market will resolve to Yes if the price of Bitcoin (BTC) reaches or exceeds $150,000 USD on any major exchange before December 31, 2026 11:59 PM UTC.",
		category: "crypto",
		imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
		endDate: "2026-12-31",
		volume: 245e4,
		liquidity: 89e4,
		yesPrice: .42,
		noPrice: .58,
		yesChange: 3.2,
		status: "active",
		createdAt: "2026-01-15",
		resolutionSource: "https://www.coingecko.com/en/coins/bitcoin"
	},
	{
		id: "m-rialo",
		title: "Will Rialo mainnet launch in Q1 2027?",
		description: "This market resolves Yes if Rialo blockchain mainnet goes live before April 1, 2027.",
		category: "crypto",
		endDate: "2027-03-31",
		volume: 125e4,
		liquidity: 45e4,
		yesPrice: .67,
		noPrice: .33,
		yesChange: 5.8,
		status: "active",
		createdAt: "2026-03-01",
		resolutionSource: "Official Rialo announcements"
	},
	{
		id: "m-turing",
		title: "Will AI pass a public Turing Test by 2027?",
		description: "Resolves Yes if a publicly demonstrated AI system passes a standardized Turing Test judged by independent experts before January 1, 2028.",
		category: "tech",
		endDate: "2027-12-31",
		volume: 32e5,
		liquidity: 12e5,
		yesPrice: .55,
		noPrice: .45,
		yesChange: 1.2,
		status: "active",
		createdAt: "2026-02-20"
	},
	{
		id: "m-fed",
		title: "Fed rate cut at the December 2026 FOMC?",
		description: "Will the Federal Reserve cut interest rates at the December 2026 FOMC meeting?",
		category: "economics",
		endDate: "2026-12-18",
		volume: 58e5,
		liquidity: 21e5,
		yesPrice: .73,
		noPrice: .27,
		yesChange: 2.1,
		status: "active",
		createdAt: "2026-06-01",
		resolutionSource: "Federal Reserve FOMC statement"
	},
	{
		id: "m-starship",
		title: "SpaceX Starship fully reusable flight in 2026?",
		description: "Will SpaceX achieve a fully successful Starship orbital flight including controlled return of both stages by end of 2026?",
		category: "science",
		endDate: "2026-12-31",
		volume: 18e5,
		liquidity: 65e4,
		yesPrice: .81,
		noPrice: .19,
		yesChange: .5,
		status: "active",
		createdAt: "2026-04-10"
	},
	{
		id: "m-eth",
		title: "Ethereum ETF AUM over $50B by mid-2027?",
		description: "Will Ethereum spot ETFs have over $50 billion in total assets under management by July 1, 2027?",
		category: "crypto",
		endDate: "2027-07-01",
		volume: 41e5,
		liquidity: 15e5,
		yesPrice: .38,
		noPrice: .62,
		yesChange: -1.8,
		status: "active",
		createdAt: "2026-05-15"
	},
	{
		id: "m-vision",
		title: "Apple Vision Pro 2 ships in 2027?",
		description: "Will Apple release a second-generation Vision Pro headset before December 31, 2027?",
		category: "tech",
		endDate: "2027-12-31",
		volume: 92e4,
		liquidity: 34e4,
		yesPrice: .45,
		noPrice: .55,
		yesChange: 4.2,
		status: "active",
		createdAt: "2026-07-01"
	},
	{
		id: "m-swift",
		title: "Will Taylor Swift tour in Asia in 2027?",
		description: "Will Taylor Swift announce or perform tour dates in Asia during 2027?",
		category: "entertainment",
		endDate: "2027-12-31",
		volume: 68e4,
		liquidity: 25e4,
		yesPrice: .72,
		noPrice: .28,
		yesChange: .9,
		status: "active",
		createdAt: "2026-08-20"
	},
	{
		id: "m-election",
		title: "US midterms: House majority stays with current party?",
		description: "Resolves Yes if the party currently holding the House of Representatives retains a majority after the 2026 midterm elections.",
		category: "politics",
		endDate: "2026-11-04",
		volume: 74e5,
		liquidity: 28e5,
		yesPrice: .51,
		noPrice: .49,
		yesChange: -.6,
		status: "active",
		createdAt: "2026-01-08"
	},
	{
		id: "m-ucl",
		title: "Will a Premier League side win the 2027 Champions League?",
		description: "Resolves Yes if an English Premier League club wins the 2026–27 UEFA Champions League.",
		category: "sports",
		endDate: "2027-06-01",
		volume: 39e5,
		liquidity: 11e5,
		yesPrice: .34,
		noPrice: .66,
		yesChange: 2.4,
		status: "active",
		createdAt: "2026-08-12"
	},
	{
		id: "m-oscars",
		title: "A streaming original wins Best Picture at the 2027 Oscars?",
		description: "Resolves Yes if the Academy Award for Best Picture goes to a film that premiered on a streaming platform.",
		category: "entertainment",
		endDate: "2027-03-15",
		volume: 54e4,
		liquidity: 18e4,
		yesPrice: .29,
		noPrice: .71,
		yesChange: -2.1,
		status: "active",
		createdAt: "2026-09-01"
	},
	{
		id: "m-fusion",
		title: "Net-energy fusion demo announced by 2028?",
		description: "Resolves Yes if a peer-reviewed or government-confirmed net-energy fusion demonstration is publicly announced before January 1, 2028.",
		category: "science",
		endDate: "2027-12-31",
		volume: 11e5,
		liquidity: 42e4,
		yesPrice: .22,
		noPrice: .78,
		yesChange: 1.1,
		status: "active",
		createdAt: "2026-03-22"
	}
];
var seedBots = [
	{
		id: "t-aria",
		username: "aria.markets",
		walletAddress: "0xa11ce0000000000000000000000000000000aria",
		totalVolume: 124e4,
		totalProfit: 186400,
		totalTrades: 412,
		winRate: 61
	},
	{
		id: "t-keel",
		username: "keel",
		walletAddress: "0xkee1000000000000000000000000000000000eel",
		totalVolume: 98e4,
		totalProfit: 142200,
		totalTrades: 301,
		winRate: 58
	},
	{
		id: "t-nova",
		username: "novalabs",
		walletAddress: "0xn0va00000000000000000000000000000000nova",
		totalVolume: 21e5,
		totalProfit: 98750,
		totalTrades: 640,
		winRate: 54
	},
	{
		id: "t-hex",
		username: "hexstack",
		walletAddress: "0xhex0000000000000000000000000000000000hex",
		totalVolume: 61e4,
		totalProfit: 74100,
		totalTrades: 188,
		winRate: 57
	},
	{
		id: "t-mira",
		username: "mira",
		walletAddress: "0xmira000000000000000000000000000000000mira",
		totalVolume: 43e4,
		totalProfit: 41800,
		totalTrades: 155,
		winRate: 52
	},
	{
		id: "t-otto",
		username: "otto.eth",
		walletAddress: "0x0tt000000000000000000000000000000000otto",
		totalVolume: 77e4,
		totalProfit: 22400,
		totalTrades: 209,
		winRate: 49
	},
	{
		id: "t-sage",
		username: "sagebook",
		walletAddress: "0x5age00000000000000000000000000000000sage",
		totalVolume: 29e4,
		totalProfit: 11200,
		totalTrades: 94,
		winRate: 51
	},
	{
		id: "t-rune",
		username: "runemarket",
		walletAddress: "0xrune00000000000000000000000000000000rune",
		totalVolume: 155e3,
		totalProfit: -8400,
		totalTrades: 67,
		winRate: 44
	}
];
function seedPriceHistory(markets) {
	const now = Date.parse("2026-09-20T00:00:00.000Z");
	const rows = [];
	for (const market of markets) for (const side of ["yes", "no"]) {
		const target = side === "yes" ? market.yesPrice : market.noPrice;
		const rand = mulberry32(hash(market.id + side));
		let price = Math.max(.08, Math.min(.92, target - .08));
		for (let i = 30; i >= 0; i--) {
			price = Math.max(.04, Math.min(.96, price + (rand() - .48) * .04));
			if (i === 0) price = target;
			rows.push({
				marketId: market.id,
				outcome: side,
				price: +price.toFixed(3),
				ts: (/* @__PURE__ */ new Date(now - i * 24 * 60 * 60 * 1e3)).toISOString()
			});
		}
	}
	return rows;
}
var STARTING_BALANCE = 1e3;
var FAUCET_AMOUNT = 100;
var FAUCET_COOLDOWN_MS = 864e5;
var CHALLENGE_TARGET = 3;
var CHALLENGE_BONUS = 50;
var seedLock = null;
function num(v) {
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string") {
		const n = Number(v);
		return Number.isFinite(n) ? n : 0;
	}
	return 0;
}
function iso(v) {
	if (v instanceof Date) return v.toISOString();
	if (typeof v === "string") return v;
	return (/* @__PURE__ */ new Date()).toISOString();
}
function clampPrice(n) {
	return +Math.max(.02, Math.min(.98, n)).toFixed(3);
}
function newId(prefix) {
	return `${prefix}-${crypto.randomUUID().replace(/-/g, "").slice(0, 12)}`;
}
function walletAddressFor(userId) {
	let x = 2166136261;
	for (let i = 0; i < userId.length; i++) {
		x ^= userId.charCodeAt(i);
		x = Math.imul(x, 16777619);
	}
	const hex = [];
	for (let i = 0; i < 40; i++) {
		x = Math.imul(x >>> 0, 1664525) + 1013904223 >>> 0;
		hex.push((x % 16).toString(16));
	}
	return `0x${hex.join("")}`;
}
function txHash() {
	return `0x${crypto.randomUUID().replace(/-/g, "")}${crypto.randomUUID().replace(/-/g, "").slice(0, 8)}`;
}
function mondayUtc(d = /* @__PURE__ */ new Date()) {
	const copy = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
	const day = copy.getUTCDay();
	const diff = day === 0 ? 6 : day - 1;
	copy.setUTCDate(copy.getUTCDate() - diff);
	return copy.toISOString().slice(0, 10);
}
function emptyReactions() {
	return {
		fire: 0,
		eyes: 0,
		skull: 0
	};
}
function mapMarket(row, reactions, volume24h) {
	const yesPrice = num(row.yes_price);
	const noPrice = num(row.no_price);
	const yesChange = num(row.yes_change);
	return {
		id: row.id,
		title: row.title,
		description: row.description,
		category: row.category,
		imageUrl: row.image_url ?? void 0,
		endDate: iso(row.end_date),
		volume: num(row.volume),
		liquidity: num(row.liquidity),
		yesPrice,
		noPrice,
		outcomes: [{
			id: `${row.id}-yes`,
			name: "Yes",
			price: yesPrice,
			change24h: yesChange
		}, {
			id: `${row.id}-no`,
			name: "No",
			price: noPrice,
			change24h: -yesChange
		}],
		status: row.status || "active",
		createdAt: iso(row.created_at),
		creatorId: row.creator_id ?? void 0,
		resolutionSource: row.resolution_source ?? void 0,
		reactions,
		volume24h
	};
}
async function insertChunks(sql, statement, rows, width) {
	const size = 40;
	for (let i = 0; i < rows.length; i += size) {
		const part = rows.slice(i, i + size);
		const params = [];
		const values = part.map((row) => {
			const start = params.length;
			params.push(...row);
			return `(${Array.from({ length: width }, (_, j) => `$${start + j + 1}`).join(",")})`;
		});
		await sql.query(`${statement} ${values.join(",")}`, params);
	}
}
async function reactionMap(sql) {
	const rows = await sql`
    select market_id, kind, count(*)::int as n from reactions group by market_id, kind
  `;
	const map = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const current = map.get(row.market_id) ?? emptyReactions();
		if (row.kind === "fire" || row.kind === "eyes" || row.kind === "skull") current[row.kind] = num(row.n);
		map.set(row.market_id, current);
	}
	return map;
}
async function volume24hMap(sql) {
	const rows = await sql`
    select market_id, sum(total) as vol
    from trades
    where created_at > now() - interval '24 hours'
    group by market_id
  `;
	const map = /* @__PURE__ */ new Map();
	for (const row of rows) map.set(row.market_id, num(row.vol));
	return map;
}
async function hydrateMarkets(sql, rows) {
	const [reactions, volumes] = await Promise.all([reactionMap(sql), volume24hMap(sql)]);
	return rows.map((row) => mapMarket(row, reactions.get(row.id) ?? emptyReactions(), volumes.get(row.id) ?? 0));
}
async function usernameFor(sql, userId) {
	const row = (await sql`
    select "name", "email" from "user" where "id" = ${userId} limit 1
  `)[0];
	if (row?.name?.trim()) return row.name.trim().slice(0, 24);
	if (row?.email) return row.email.split("@")[0].slice(0, 24);
	return `trader-${userId.slice(0, 6)}`;
}
async function ensureChallenge(sql) {
	const week = mondayUtc();
	const id = `wk-${week}`;
	if (!(await sql`select id from challenges where id = ${id} limit 1`)[0]) await sql`
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
	return id;
}
async function seedOnce(sql) {
	if (!(await sql`select id from markets limit 1`)[0]) {
		await insertChunks(sql, `insert into markets (
        id, title, description, category, image_url, end_date, volume, liquidity,
        yes_price, no_price, yes_change, status, created_at, resolution_source
      ) values`, seedMarkets.map((m) => [
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
			m.resolutionSource ?? null
		]), 14);
		await insertChunks(sql, `insert into price_history (market_id, outcome, price, ts) values`, seedPriceHistory(seedMarkets).map((h) => [
			h.marketId,
			h.outcome,
			h.price,
			h.ts
		]), 4);
		await insertChunks(sql, `insert into user_stats (
        user_id, username, total_volume, total_profit, total_trades, wins, streak_days, best_category
      ) values`, seedBots.map((b) => [
			b.id,
			b.username,
			b.totalVolume,
			b.totalProfit,
			b.totalTrades,
			Math.round(b.winRate / 100 * b.totalTrades),
			0,
			"crypto"
		]), 8);
		const now = Date.now();
		const botTrades = [];
		seedMarkets.forEach((m, mi) => {
			const count = 4 + mi % 6;
			for (let i = 0; i < count; i++) {
				const bot = seedBots[(mi + i) % seedBots.length];
				const outcome = i % 2 === 0 ? "yes" : "no";
				const price = outcome === "yes" ? m.yesPrice : m.noPrice;
				const total = 80 + (mi * 17 + i * 31) % 420;
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
					(/* @__PURE__ */ new Date(now - (i * 97 + mi * 13) % 20 * 60 * 60 * 1e3)).toISOString()
				]);
			}
		});
		await insertChunks(sql, `insert into trades (
        id, user_id, market_id, market_title, outcome, side, shares, price, total, tx_hash, created_at
      ) values`, botTrades, 11);
		await insertChunks(sql, `insert into comments (id, market_id, user_id, username, content, created_at) values`, [
			[
				"c-btc-1",
				"m-btc",
				"t-aria",
				"aria.markets",
				"150k is the consensus target once ETF flows seasonally pick up. Still buying Yes on dips.",
				(/* @__PURE__ */ new Date(now - 216e5)).toISOString()
			],
			[
				"c-rialo-1",
				"m-rialo",
				"t-keel",
				"keel",
				"Mainnet in Q1 is aggressive. Watch testnet stability more than the date.",
				(/* @__PURE__ */ new Date(now - 108e5)).toISOString()
			],
			[
				"c-fed-1",
				"m-fed",
				"t-nova",
				"novalabs",
				"Cut looks baked in. Pricing 73¢ feels right unless CPI surprises.",
				(/* @__PURE__ */ new Date(now - 54e5)).toISOString()
			]
		], 6);
		const reacts = [];
		const kinds = [
			"fire",
			"eyes",
			"skull"
		];
		seedMarkets.forEach((m, mi) => {
			seedBots.forEach((bot, bi) => {
				if ((mi + bi) % 3 === 0) reacts.push([
					m.id,
					bot.id,
					kinds[(mi + bi) % 3],
					(/* @__PURE__ */ new Date(now - bi * 36e5)).toISOString()
				]);
			});
		});
		if (reacts.length) await insertChunks(sql, `insert into reactions (market_id, user_id, kind, created_at) values`, reacts, 4);
	}
	await ensureChallenge(sql);
}
async function ensureSeeded() {
	if (!seedLock) seedLock = (async () => {
		await seedOnce(await getSql());
	})().catch((err) => {
		seedLock = null;
		throw err;
	});
	await seedLock;
}
async function loadMarkets(sql, ids) {
	return hydrateMarkets(sql, ids?.length ? await sql.query(`select * from markets where id = any($1::text[]) order by volume desc`, [ids]) : await sql`select * from markets order by volume desc`);
}
async function grantBadges(sql, userId, stats) {
	const earned = [];
	if (stats.totalTrades >= 1) earned.push("first_prediction");
	if (stats.wins >= 10) earned.push("ten_wins");
	if (stats.rank !== null && stats.rank <= 10 && stats.totalTrades >= 1) earned.push("top_ten");
	for (const badge of earned) await sql`
      insert into badges (user_id, badge_id) values (${userId}, ${badge})
      on conflict do nothing
    `;
}
async function ensureWallet(sql, userId) {
	const existing = await sql`select * from wallets where user_id = ${userId} limit 1`;
	if (!existing[0]) {
		const address = walletAddressFor(userId);
		await sql`
      insert into wallets (user_id, address, balance)
      values (${userId}, ${address}, ${STARTING_BALANCE})
    `;
		await sql`
      insert into user_stats (user_id, username)
      values (${userId}, ${await usernameFor(sql, userId)})
      on conflict (user_id) do nothing
    `;
		return {
			user_id: userId,
			address,
			balance: STARTING_BALANCE,
			faucet_claimed_at: null
		};
	}
	return existing[0];
}
function walletInfo(row) {
	const claimed = row.faucet_claimed_at ? new Date(iso(row.faucet_claimed_at)).getTime() : 0;
	return {
		address: row.address,
		balance: num(row.balance),
		faucetReady: !claimed || Date.now() - claimed >= FAUCET_COOLDOWN_MS
	};
}
async function loadPositions(sql, userId) {
	return (await sql`
    select p.id, p.market_id, p.market_title, p.outcome, p.shares, p.avg_price,
           m.yes_price, m.no_price
    from positions p
    join markets m on m.id = p.market_id
    where p.user_id = ${userId}
  `).map((row) => {
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
			pnlPercent: cost > 0 ? pnl / cost * 100 : 0
		};
	}).filter((p) => p.shares > 1e-4);
}
async function loadTrades(sql, userId) {
	return (await sql`
    select * from trades where user_id = ${userId} order by created_at desc limit 50
  `).map((row) => ({
		id: row.id,
		marketId: row.market_id,
		marketTitle: row.market_title,
		outcome: row.outcome,
		type: row.side,
		shares: num(row.shares),
		price: num(row.price),
		total: num(row.total),
		timestamp: iso(row.created_at),
		txHash: row.tx_hash
	}));
}
async function loadStats(sql, userId, positions) {
	const username = await usernameFor(sql, userId);
	const row = (await sql`select * from user_stats where user_id = ${userId} limit 1`)[0];
	const totalProfit = positions.reduce((s, p) => s + p.pnl, 0);
	const wins = positions.filter((p) => p.pnl > 0).length;
	const totalTrades = row ? num(row.total_trades) : 0;
	const winRate = positions.length ? wins / positions.length * 100 : 0;
	if (row) await sql`
      update user_stats
      set username = ${username},
          total_profit = ${totalProfit},
          wins = ${Math.max(num(row.wins), wins)}
      where user_id = ${userId}
    `;
	const rankRows = await sql`
    select 1 + count(*)::int as rank
    from user_stats
    where total_profit > ${totalProfit}
  `;
	const rank = totalTrades > 0 ? num(rankRows[0]?.rank) : null;
	const badgeRows = await sql`
    select badge_id from badges where user_id = ${userId}
  `;
	await grantBadges(sql, userId, {
		totalTrades,
		wins: Math.max(row ? num(row.wins) : 0, wins),
		rank
	});
	const badges = await sql`
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
		badges: (badges.length ? badges : badgeRows).map((b) => b.badge_id)
	};
}
async function loadChallenge(sql, userId) {
	const id = await ensureChallenge(sql);
	const rows = await sql`select * from challenges where id = ${id} limit 1`;
	const progress = await sql`
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
		claimed: progress[0]?.claimed ?? false
	};
}
async function bestCategoryFor(sql, userId) {
	return (await sql`
    select m.category, sum(t.total) as vol
    from trades t
    join markets m on m.id = t.market_id
    where t.user_id = ${userId}
    group by m.category
    order by vol desc
    limit 1
  `)[0]?.category ?? null;
}
var listHome_createServerFn_handler = createServerRpc({
	id: "fcd1fc17bed8fd96ddd24672bb4d9c3492b73d45b407b86a1c7c05eb07c0c6e8",
	name: "listHome",
	filename: "src/lib/pulse-api.ts"
}, (opts) => listHome.__executeServer(opts));
var listHome = createServerFn({ method: "GET" }).handler(listHome_createServerFn_handler, async () => {
	await ensureSeeded();
	const sql = await getSql();
	const markets = await loadMarkets(sql);
	const hot = [...markets].sort((a, b) => b.volume24h - a.volume24h || b.volume - a.volume).slice(0, 4);
	const traderRows = await sql`select count(*)::int as n from user_stats`;
	const tradeRows = await sql`
    select count(*)::int as n from trades where created_at > now() - interval '24 hours'
  `;
	return {
		markets,
		hot,
		overview: {
			totalVolume: markets.reduce((s, m) => s + m.volume, 0),
			activeMarkets: markets.filter((m) => m.status === "active").length,
			traders: num(traderRows[0]?.n),
			trades24h: num(tradeRows[0]?.n)
		}
	};
});
var getMarketDetail_createServerFn_handler = createServerRpc({
	id: "0b0aec97d5a653dbeb133a085c3c506d276e26d33e278437c827afc63420f079",
	name: "getMarketDetail",
	filename: "src/lib/pulse-api.ts"
}, (opts) => getMarketDetail.__executeServer(opts));
var getMarketDetail = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(getMarketDetail_createServerFn_handler, async ({ data }) => {
	await ensureSeeded();
	const sql = await getSql();
	const rows = await sql`select * from markets where id = ${data.id} limit 1`;
	if (!rows[0]) return {
		market: null,
		yesHistory: [],
		noHistory: [],
		comments: []
	};
	const [markets, history, comments] = await Promise.all([
		hydrateMarkets(sql, rows),
		sql`
        select outcome, price, ts from price_history
        where market_id = ${data.id}
        order by ts asc
      `,
		sql`
        select * from comments where market_id = ${data.id} order by created_at desc
      `
	]);
	const yesHistory = [];
	const noHistory = [];
	for (const point of history) {
		const item = {
			timestamp: iso(point.ts),
			price: num(point.price)
		};
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
			createdAt: iso(c.created_at)
		}))
	};
});
var getLeaderboard_createServerFn_handler = createServerRpc({
	id: "74500bbd0bf98f52d3a8b42ba9d5991d23b4107ab97a0d866a36dc717b525a5f",
	name: "getLeaderboard",
	filename: "src/lib/pulse-api.ts"
}, (opts) => getLeaderboard.__executeServer(opts));
var getLeaderboard = createServerFn({ method: "GET" }).handler(getLeaderboard_createServerFn_handler, async () => {
	await ensureSeeded();
	const sql = await getSql();
	const wallets = await sql`select user_id, address from wallets`;
	const addr = new Map(wallets.map((w) => [w.user_id, w.address]));
	return (await sql`
    select user_id, username, total_volume, total_profit, total_trades, wins
    from user_stats
    order by total_profit desc, total_volume desc
    limit 40
  `).map((row, i) => {
		const trades = Math.max(1, num(row.total_trades));
		return {
			id: row.user_id,
			username: row.username,
			walletAddress: addr.get(row.user_id) ?? walletAddressFor(row.user_id),
			totalVolume: num(row.total_volume),
			totalProfit: num(row.total_profit),
			totalTrades: num(row.total_trades),
			winRate: num(row.wins) / trades * 100,
			rank: i + 1
		};
	});
});
var getMyPulse_createServerFn_handler = createServerRpc({
	id: "32830cef63d9cabf9a3cd4682acfc9c79d0eb524cd8718faf3f9d2eb0a505336",
	name: "getMyPulse",
	filename: "src/lib/pulse-api.ts"
}, (opts) => getMyPulse.__executeServer(opts));
var getMyPulse = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getMyPulse_createServerFn_handler, async ({ context }) => {
	await ensureSeeded();
	const sql = await getSql();
	const walletRow = await ensureWallet(sql, context.userId);
	const [positions, trades, challenge, reactionRows] = await Promise.all([
		loadPositions(sql, context.userId),
		loadTrades(sql, context.userId),
		loadChallenge(sql, context.userId),
		sql`
        select market_id, kind from reactions where user_id = ${context.userId}
      `
	]);
	const stats = await loadStats(sql, context.userId, positions);
	const myReactions = {};
	for (const row of reactionRows) (myReactions[row.market_id] ??= []).push(row.kind);
	return {
		wallet: walletInfo(walletRow),
		stats,
		challenge,
		positions,
		trades,
		myReactions
	};
});
var buyShares_createServerFn_handler = createServerRpc({
	id: "84e0f1bfba36450f1207986a708e6c11e3699ce97aad7ba54262fdb6c5d63086",
	name: "buyShares",
	filename: "src/lib/pulse-api.ts"
}, (opts) => buyShares.__executeServer(opts));
var buyShares = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	outcome: _enum(["yes", "no"]),
	amount: number().positive()
})).handler(buyShares_createServerFn_handler, async ({ context, data }) => {
	await ensureSeeded();
	const sql = await getSql();
	const balance = num((await ensureWallet(sql, context.userId)).balance);
	if (data.amount > balance) return {
		ok: false,
		message: "Insufficient RIA balance."
	};
	const market = (await sql`select * from markets where id = ${data.marketId} limit 1`)[0];
	if (!market || market.status !== "active") return {
		ok: false,
		message: "Market is not available."
	};
	const price = data.outcome === "yes" ? num(market.yes_price) : num(market.no_price);
	const shares = data.amount / price;
	const liquidity = num(market.liquidity);
	const delta = Math.min(.04, data.amount / (liquidity + data.amount) * .12);
	const yesPrice = data.outcome === "yes" ? clampPrice(num(market.yes_price) + delta) : clampPrice(num(market.yes_price) - delta);
	const noPrice = clampPrice(1 - yesPrice);
	const yesChange = num(market.yes_change) + (data.outcome === "yes" ? delta : -delta) * 100;
	const now = (/* @__PURE__ */ new Date()).toISOString();
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
	const existing = await sql`
      select id, shares, avg_price from positions
      where user_id = ${context.userId} and market_id = ${data.marketId} and outcome = ${data.outcome}
      limit 1
    `;
	if (existing[0]) {
		const newShares = num(existing[0].shares) + shares;
		await sql`
        update positions set shares = ${newShares}, avg_price = ${(num(existing[0].shares) * num(existing[0].avg_price) + shares * price) / newShares} where id = ${existing[0].id}
      `;
	} else await sql`
        insert into positions (id, user_id, market_id, market_title, outcome, shares, avg_price)
        values (${newId("pos")}, ${context.userId}, ${data.marketId}, ${market.title}, ${data.outcome}, ${shares}, ${price})
      `;
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
	const stats = await sql`
      select last_predict_date, streak_days, wins from user_stats where user_id = ${context.userId} limit 1
    `;
	let streak = 1;
	if (stats[0]?.last_predict_date) {
		const last = iso(stats[0].last_predict_date).slice(0, 10);
		const yesterday = (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString().slice(0, 10);
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
	await sql`
      insert into challenge_progress (challenge_id, user_id, trades)
      values (${await ensureChallenge(sql)}, ${context.userId}, 1)
      on conflict (challenge_id, user_id) do update set
        trades = challenge_progress.trades + 1
    `;
	const rankRows = await sql`
      select 1 + count(*)::int as rank
      from user_stats us
      where us.total_profit > (
        select coalesce(total_profit, 0) from user_stats where user_id = ${context.userId}
      )
    `;
	await grantBadges(sql, context.userId, {
		totalTrades: (stats[0] ? 1 : 0) + 1,
		wins: nextWins,
		rank: num(rankRows[0]?.rank)
	});
	return {
		ok: true,
		message: `Bought ${shares.toFixed(2)} ${data.outcome.toUpperCase()} shares`,
		txHash: hash,
		shares
	};
});
var claimFaucet_createServerFn_handler = createServerRpc({
	id: "d24db0423e0bdecda6e4504f310fb015c8262949a897064a936016b7aa1dee5a",
	name: "claimFaucet",
	filename: "src/lib/pulse-api.ts"
}, (opts) => claimFaucet.__executeServer(opts));
var claimFaucet = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(claimFaucet_createServerFn_handler, async ({ context }) => {
	await ensureSeeded();
	const sql = await getSql();
	const walletRow = await ensureWallet(sql, context.userId);
	const claimed = walletRow.faucet_claimed_at ? new Date(iso(walletRow.faucet_claimed_at)).getTime() : 0;
	if (claimed && Date.now() - claimed < FAUCET_COOLDOWN_MS) return {
		ok: false,
		message: "Faucet already claimed today."
	};
	const now = (/* @__PURE__ */ new Date()).toISOString();
	await sql`
      update wallets
      set balance = ${num(walletRow.balance) + FAUCET_AMOUNT}, faucet_claimed_at = ${now}
      where user_id = ${context.userId}
    `;
	return {
		ok: true,
		message: `${FAUCET_AMOUNT} RIA sent to your inbuilt wallet.`
	};
});
var addComment_createServerFn_handler = createServerRpc({
	id: "b963e80f6511844bd72981e92d8d46d13502eb78aa1f669b8ee4fe84caa60b3d",
	name: "addComment",
	filename: "src/lib/pulse-api.ts"
}, (opts) => addComment.__executeServer(opts));
var addComment = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	content: string().trim().min(1).max(500)
})).handler(addComment_createServerFn_handler, async ({ context, data }) => {
	await ensureSeeded();
	const sql = await getSql();
	const username = await usernameFor(sql, context.userId);
	const id = newId("c");
	const createdAt = (/* @__PURE__ */ new Date()).toISOString();
	await sql`
      insert into comments (id, market_id, user_id, username, content, created_at)
      values (${id}, ${data.marketId}, ${context.userId}, ${username}, ${data.content}, ${createdAt})
    `;
	return {
		ok: true,
		comment: {
			id,
			marketId: data.marketId,
			userId: context.userId,
			username,
			content: data.content,
			createdAt
		}
	};
});
var deleteComment_createServerFn_handler = createServerRpc({
	id: "a814f9dce4c4055b8f3f30cbc7f178102a2096894c69d218092c67fe16b69c24",
	name: "deleteComment",
	filename: "src/lib/pulse-api.ts"
}, (opts) => deleteComment.__executeServer(opts));
var deleteComment = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string() })).handler(deleteComment_createServerFn_handler, async ({ context, data }) => {
	await (await getSql())`delete from comments where id = ${data.id} and user_id = ${context.userId}`;
	return { ok: true };
});
var toggleReaction_createServerFn_handler = createServerRpc({
	id: "3f0d434c950e198639dfd246e83a456625da2a14c6b7e7e3bb7f66d10afa5343",
	name: "toggleReaction",
	filename: "src/lib/pulse-api.ts"
}, (opts) => toggleReaction.__executeServer(opts));
var toggleReaction = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	kind: _enum([
		"fire",
		"eyes",
		"skull"
	])
})).handler(toggleReaction_createServerFn_handler, async ({ context, data }) => {
	await ensureSeeded();
	const sql = await getSql();
	await ensureWallet(sql, context.userId);
	if ((await sql`
      select kind from reactions
      where market_id = ${data.marketId} and user_id = ${context.userId} and kind = ${data.kind}
      limit 1
    `)[0]) {
		await sql`
        delete from reactions
        where market_id = ${data.marketId} and user_id = ${context.userId} and kind = ${data.kind}
      `;
		return { on: false };
	}
	await sql`
      insert into reactions (market_id, user_id, kind)
      values (${data.marketId}, ${context.userId}, ${data.kind})
    `;
	return { on: true };
});
var createMarket_createServerFn_handler = createServerRpc({
	id: "2fe7fec4225a5fc22b039ccf2e27fd0fdc77ca29f374b9ee2bd87a8ebde569fa",
	name: "createMarket",
	filename: "src/lib/pulse-api.ts"
}, (opts) => createMarket.__executeServer(opts));
var createMarket = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	title: string().trim().min(8).max(140),
	description: string().trim().min(12).max(2e3),
	category: _enum([
		"crypto",
		"politics",
		"sports",
		"entertainment",
		"tech",
		"science",
		"economics"
	]),
	endDate: string(),
	resolutionSource: string().trim().min(2).max(400),
	imageUrl: string().trim().optional(),
	liquidity: number().min(10)
})).handler(createMarket_createServerFn_handler, async ({ context, data }) => {
	await ensureSeeded();
	const sql = await getSql();
	const walletRow = await ensureWallet(sql, context.userId);
	if (data.liquidity > num(walletRow.balance)) return {
		ok: false,
		message: "Insufficient RIA for initial liquidity.",
		id: void 0
	};
	const id = newId("m");
	const now = (/* @__PURE__ */ new Date()).toISOString();
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
	return {
		ok: true,
		message: "Market is live.",
		id
	};
});
var claimChallenge_createServerFn_handler = createServerRpc({
	id: "61f4dd90ccfd16958ccd6b71cab5b6fabe5e71e35607e095a1ff103024d13ab0",
	name: "claimChallenge",
	filename: "src/lib/pulse-api.ts"
}, (opts) => claimChallenge.__executeServer(opts));
var claimChallenge = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(claimChallenge_createServerFn_handler, async ({ context }) => {
	await ensureSeeded();
	const sql = await getSql();
	const challenge = await loadChallenge(sql, context.userId);
	if (challenge.claimed) return {
		ok: false,
		message: "Bonus already claimed."
	};
	if (challenge.progress < challenge.targetTrades) return {
		ok: false,
		message: "Finish the weekly challenge first."
	};
	await ensureWallet(sql, context.userId);
	await sql`
      update challenge_progress
      set claimed = true
      where challenge_id = ${challenge.id} and user_id = ${context.userId}
    `;
	await sql`
      update wallets set balance = balance + ${challenge.bonusRia} where user_id = ${context.userId}
    `;
	return {
		ok: true,
		message: `+${challenge.bonusRia} RIA weekly bonus.`
	};
});
//#endregion
export { addComment_createServerFn_handler, buyShares_createServerFn_handler, claimChallenge_createServerFn_handler, claimFaucet_createServerFn_handler, createMarket_createServerFn_handler, deleteComment_createServerFn_handler, getLeaderboard_createServerFn_handler, getMarketDetail_createServerFn_handler, getMyPulse_createServerFn_handler, listHome_createServerFn_handler, toggleReaction_createServerFn_handler };
