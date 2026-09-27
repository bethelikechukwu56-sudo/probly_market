import { n as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-BlkH4MvN.mjs";
import { a as string, i as object, r as number, t as _enum } from "../_libs/zod.mjs";
import { t as getSql } from "./db-WSOvPVT6.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nft-api-C871srbn.js
var STARTING_BALANCE = 1e3;
function num(v) {
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string") {
		const n = Number(v);
		return Number.isFinite(n) ? n : 0;
	}
	return 0;
}
function numOrNull(v) {
	if (v == null) return null;
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string" && v.trim() !== "") {
		const n = Number(v);
		return Number.isFinite(n) ? n : null;
	}
	return null;
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
function txHash() {
	return `0x${crypto.randomUUID().replace(/-/g, "")}${crypto.randomUUID().replace(/-/g, "").slice(0, 8)}`;
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
function isPrimitive(value) {
	return value === "native_https" || value === "conditional_tx" || value === "async_await" || value === "rex";
}
function isOutcome(value) {
	return value === "pump" || value === "dump" || value === "sell_out" || value === "miss" || value === "void";
}
function floorSeries(row, snaps) {
	const anchorAt = row.quote_updated_at ? new Date(iso(row.quote_updated_at)).getTime() : Date.now();
	const floor = numOrNull(row.floor_native);
	const points = [];
	const windows = [
		[1440, row.chg_60d],
		[720, row.chg_30d],
		[336, row.chg_14d],
		[168, row.chg_7d],
		[24, row.chg_24h]
	];
	if (floor && floor > 0) {
		for (const [hours, raw] of windows) {
			if (raw == null) continue;
			const denom = 1 + num(raw) / 100;
			if (denom <= .05) continue;
			const past = floor / denom;
			if (past > 0 && Number.isFinite(past)) points.push({
				timestamp: (/* @__PURE__ */ new Date(anchorAt - hours * 36e5)).toISOString(),
				price: past
			});
		}
		points.push({
			timestamp: new Date(anchorAt).toISOString(),
			price: floor
		});
	}
	for (const snap of snaps) {
		const price = num(snap.price);
		if (price > 0) points.push({
			timestamp: iso(snap.ts),
			price
		});
	}
	const unique = /* @__PURE__ */ new Map();
	for (const point of points.sort((a, b) => a.timestamp.localeCompare(b.timestamp))) unique.set(point.timestamp, point);
	const series = [...unique.values()];
	if (series.length === 1) {
		const only = series[0];
		return [{
			timestamp: (/* @__PURE__ */ new Date(new Date(only.timestamp).getTime() - 36e5)).toISOString(),
			price: only.price
		}, only];
	}
	return series;
}
function mapNft(row, reactions, volume24h, snaps) {
	const yesPrice = num(row.yes_price);
	const noPrice = num(row.no_price);
	return {
		id: row.id,
		kind: row.kind === "sell_out" ? "sell_out" : "pump_dump",
		source: row.source === "user" ? "user" : "live",
		name: row.name,
		imageUrl: row.image_url ?? void 0,
		chain: row.chain,
		currency: row.currency,
		description: row.description,
		floorNative: numOrNull(row.floor_native),
		floorUsd: numOrNull(row.floor_usd),
		floorChange24h: numOrNull(row.chg_24h),
		minted: numOrNull(row.minted),
		supply: numOrNull(row.supply),
		mintPrice: numOrNull(row.mint_price),
		openFloor: numOrNull(row.open_floor),
		openMinted: numOrNull(row.open_minted),
		deadline: iso(row.deadline),
		volume: num(row.volume),
		liquidity: num(row.liquidity),
		yesPrice,
		noPrice,
		yesChange: num(row.yes_change),
		status: row.status === "resolved" ? "resolved" : "active",
		outcome: isOutcome(row.outcome) ? row.outcome : null,
		primitive: isPrimitive(row.primitive) ? row.primitive : "native_https",
		quoteSource: row.quote_source,
		quoteUpdatedAt: row.quote_updated_at ? iso(row.quote_updated_at) : null,
		floorHistory: floorSeries(row, snaps),
		reactions,
		volume24h,
		creatorId: row.creator_id ?? void 0
	};
}
async function loadMaps(sql, ids) {
	const reactions = /* @__PURE__ */ new Map();
	const volumes = /* @__PURE__ */ new Map();
	const snaps = /* @__PURE__ */ new Map();
	if (ids.length === 0) return {
		reactions,
		volumes,
		snaps
	};
	const [reactionRows, volumeRows, snapRows] = await Promise.all([
		sql`
      select market_id, kind, count(*)::int as n
      from reactions
      where market_id like 'nft-%'
      group by market_id, kind
    `,
		sql`
      select market_id, sum(total) as vol
      from trades
      where market_id like 'nft-%' and created_at > now() - interval '24 hours'
      group by market_id
    `,
		sql`
      select market_id, price, ts from nft_floor_snaps
      where market_id like 'nft-%'
      order by ts asc
    `
	]);
	for (const row of reactionRows) {
		const current = reactions.get(row.market_id) ?? emptyReactions();
		if (row.kind === "fire" || row.kind === "eyes" || row.kind === "skull") current[row.kind] = num(row.n);
		reactions.set(row.market_id, current);
	}
	for (const row of volumeRows) volumes.set(row.market_id, num(row.vol));
	for (const row of snapRows) {
		const list = snaps.get(row.market_id) ?? [];
		list.push(row);
		snaps.set(row.market_id, list);
	}
	return {
		reactions,
		volumes,
		snaps
	};
}
async function loadNftList(sql) {
	const rows = await sql`select * from nft_markets order by created_at asc`;
	const maps = await loadMaps(sql, rows.map((row) => row.id));
	const markets = rows.map((row) => mapNft(row, maps.reactions.get(row.id) ?? emptyReactions(), maps.volumes.get(row.id) ?? 0, maps.snaps.get(row.id) ?? []));
	return {
		pump: markets.filter((market) => market.kind === "pump_dump"),
		mint: markets.filter((market) => market.kind === "sell_out")
	};
}
async function ensureWallet(sql, userId) {
	const existing = await sql`select balance from wallets where user_id = ${userId} limit 1`;
	if (!existing[0]) {
		await sql`
      insert into wallets (user_id, address, balance)
      values (${userId}, ${walletAddressFor(userId)}, ${STARTING_BALANCE})
    `;
		await sql`
      insert into user_stats (user_id, username) values (${userId}, ${await usernameFor(sql, userId)})
      on conflict (user_id) do nothing
    `;
		return STARTING_BALANCE;
	}
	return num(existing[0].balance);
}
async function usernameFor(sql, userId) {
	const row = (await sql`
    select "name", "email" from "user" where "id" = ${userId} limit 1
  `)[0];
	if (row?.name?.trim()) return row.name.trim().slice(0, 32);
	if (row?.email) return row.email.split("@")[0].slice(0, 32);
	return `trader-${userId.slice(0, 6)}`;
}
async function settleDue(sql) {
	const due = await sql`
    select * from nft_markets where status = 'active' and deadline <= now()
  `;
	for (const row of due) {
		let outcome = "void";
		if (row.kind === "pump_dump") {
			const floor = numOrNull(row.floor_native);
			const open = numOrNull(row.open_floor);
			if (floor && floor > 0 && open && open > 0) outcome = floor >= open ? "pump" : "dump";
		} else {
			const minted = numOrNull(row.minted);
			const supply = numOrNull(row.supply);
			if (minted != null && supply && supply > 0) outcome = minted >= supply * .995 ? "sell_out" : "miss";
		}
		if (!(await sql`
      update nft_markets
      set status = 'resolved', outcome = ${outcome}, settled_at = now()
      where id = ${row.id} and status = 'active'
      returning id
    `)[0]) continue;
		const positions = await sql`
      select id, user_id, outcome, shares, avg_price
      from nft_positions
      where market_id = ${row.id} and settled = false
    `;
		for (const pos of positions) {
			const shares = num(pos.shares);
			const avg = num(pos.avg_price);
			const yesWins = outcome === "pump" || outcome === "sell_out";
			const noWins = outcome === "dump" || outcome === "miss";
			const win = pos.outcome === "yes" && yesWins || pos.outcome === "no" && noWins;
			const credit = outcome === "void" ? shares * avg : win ? shares : 0;
			const pnl = outcome === "void" ? 0 : win ? shares * (1 - avg) : -(shares * avg);
			if (credit > 0) await sql`update wallets set balance = balance + ${credit} where user_id = ${pos.user_id}`;
			if (pnl !== 0) await sql`update user_stats set total_profit = total_profit + ${pnl} where user_id = ${pos.user_id}`;
			await sql`update nft_positions set settled = true where id = ${pos.id}`;
		}
	}
}
async function prepare(sql) {
	const { refreshLiveNft } = await import("./nft-live.server-BC4zM_Al.mjs");
	try {
		await refreshLiveNft(sql);
	} catch (error) {
		console.error("nft refresh failed", error);
	}
	await sql`
    update nft_markets
    set description = 'Will ' || name || ' finish above its open floor print? Settles against the live quote when the deadline hits.'
    where description ilike '%minut Predict%'
       or description ilike '%native https%'
       or description ilike '%conditional transaction%'
       or description ilike '%async await%'
       or description ilike '%resolved with%'
  `;
	await settleDue(sql);
}
var listNfts_createServerFn_handler = createServerRpc({
	id: "7b258fa66f950d4998143502569bbe905ca28182731ab3645da5cc9f374d1fe8",
	name: "listNfts",
	filename: "src/lib/nft-api.ts"
}, (opts) => listNfts.__executeServer(opts));
var listNfts = createServerFn({ method: "GET" }).handler(listNfts_createServerFn_handler, async () => {
	const sql = await getSql();
	await prepare(sql);
	return loadNftList(sql);
});
var getNft_createServerFn_handler = createServerRpc({
	id: "17aab32f558cc2b7b7b52044f1793e0a88b7f607db0c9932f7669b417d17deab",
	name: "getNft",
	filename: "src/lib/nft-api.ts"
}, (opts) => getNft.__executeServer(opts));
var getNft = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(getNft_createServerFn_handler, async ({ data }) => {
	const sql = await getSql();
	await prepare(sql);
	const rows = await sql`select * from nft_markets where id = ${data.id} limit 1`;
	if (!rows[0]) return {
		market: null,
		yesHistory: [],
		noHistory: [],
		comments: []
	};
	const maps = await loadMaps(sql, [data.id]);
	const market = mapNft(rows[0], maps.reactions.get(data.id) ?? emptyReactions(), maps.volumes.get(data.id) ?? 0, maps.snaps.get(data.id) ?? []);
	const [history, comments] = await Promise.all([sql`
        select outcome, price, ts from price_history where market_id = ${data.id} order by ts asc
      `, sql`
        select id, market_id, user_id, username, content, created_at
        from comments where market_id = ${data.id} order by created_at desc
      `]);
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
		market,
		yesHistory,
		noHistory,
		comments: comments.map((comment) => ({
			id: comment.id,
			marketId: comment.market_id,
			userId: comment.user_id,
			username: comment.username,
			content: comment.content,
			createdAt: iso(comment.created_at)
		}))
	};
});
var getMyNftStake_createServerFn_handler = createServerRpc({
	id: "07955909146ecd0ba47a8534ee1a66fa96b86511b9d9db20ab7a3c64aecd11e0",
	name: "getMyNftStake",
	filename: "src/lib/nft-api.ts"
}, (opts) => getMyNftStake.__executeServer(opts));
var getMyNftStake = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator(object({ id: string() })).handler(getMyNftStake_createServerFn_handler, async ({ context, data }) => {
	const row = (await (await getSql())`
      select outcome, shares, avg_price, settled
      from nft_positions
      where user_id = ${context.userId} and market_id = ${data.id}
      order by settled asc
      limit 1
    `)[0];
	if (!row) return null;
	return {
		outcome: row.outcome === "no" ? "no" : "yes",
		shares: num(row.shares),
		avgPrice: num(row.avg_price),
		settled: Boolean(row.settled)
	};
});
async function recordTradeStats(sql, userId, amount, won) {
	const username = await usernameFor(sql, userId);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const stats = await sql`
    select last_predict_date, streak_days, wins, total_trades from user_stats where user_id = ${userId} limit 1
  `;
	let streak = 1;
	if (stats[0]?.last_predict_date) {
		const last = iso(stats[0].last_predict_date).slice(0, 10);
		const yesterday = (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString().slice(0, 10);
		if (last === today) streak = Math.max(1, num(stats[0].streak_days));
		else if (last === yesterday) streak = num(stats[0].streak_days) + 1;
	}
	const nextWins = (stats[0] ? num(stats[0].wins) : 0) + (won ? 1 : 0);
	const totalTrades = (stats[0] ? num(stats[0].total_trades) : 0) + 1;
	await sql`
    insert into user_stats (
      user_id, username, total_volume, total_trades, wins, streak_days, last_predict_date, best_category
    ) values (
      ${userId}, ${username}, ${amount}, 1, ${nextWins}, ${streak}, ${today}, ${"crypto"}
    )
    on conflict (user_id) do update set
      username = excluded.username,
      total_volume = user_stats.total_volume + excluded.total_volume,
      total_trades = user_stats.total_trades + 1,
      wins = ${nextWins},
      streak_days = ${streak},
      last_predict_date = ${today},
      best_category = coalesce(user_stats.best_category, excluded.best_category)
  `;
	const week = mondayUtc();
	const challengeId = `wk-${week}`;
	await sql`
    insert into challenges (id, title, description, week_start, bonus_ria, target_trades)
    values (
      ${challengeId},
      ${"Three predictions this week"},
      ${"Place 3 trades before the week ends and claim bonus RIA."},
      ${week}, ${50}, ${3}
    )
    on conflict (id) do nothing
  `;
	await sql`
    insert into challenge_progress (challenge_id, user_id, trades)
    values (${challengeId}, ${userId}, 1)
    on conflict (challenge_id, user_id) do update set trades = challenge_progress.trades + 1
  `;
	const rankRows = await sql`
    select 1 + count(*)::int as rank from user_stats us
    where us.total_profit > (select coalesce(total_profit, 0) from user_stats where user_id = ${userId})
  `;
	const earned = ["first_prediction"];
	if (nextWins >= 10) earned.push("ten_wins");
	if (num(rankRows[0]?.rank) <= 10) earned.push("top_ten");
	for (const badge of earned) await sql`insert into badges (user_id, badge_id) values (${userId}, ${badge}) on conflict do nothing`;
	return totalTrades;
}
var buyNft_createServerFn_handler = createServerRpc({
	id: "3a8dbfd3f7cf638d198735769db93ebfdb85bc540fcdedba1e997513bd913b42",
	name: "buyNft",
	filename: "src/lib/nft-api.ts"
}, (opts) => buyNft.__executeServer(opts));
var buyNft = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	outcome: _enum(["yes", "no"]),
	amount: number().positive()
})).handler(buyNft_createServerFn_handler, async ({ context, data }) => {
	const sql = await getSql();
	await prepare(sql);
	const balance = await ensureWallet(sql, context.userId);
	if (data.amount > balance) return {
		ok: false,
		message: "Insufficient RIA balance."
	};
	const market = (await sql`select * from nft_markets where id = ${data.marketId} limit 1`)[0];
	if (!market || market.status !== "active") return {
		ok: false,
		message: "Market is not open."
	};
	if (new Date(iso(market.deadline)).getTime() <= Date.now()) return {
		ok: false,
		message: "This market has reached its deadline."
	};
	const price = data.outcome === "yes" ? num(market.yes_price) : num(market.no_price);
	if (!(price > 0)) return {
		ok: false,
		message: "Odds are not available."
	};
	const shares = data.amount / price;
	const liquidity = num(market.liquidity);
	const delta = Math.min(.06, data.amount / (liquidity + data.amount) * .35);
	const yesPrice = data.outcome === "yes" ? clampPrice(num(market.yes_price) + delta) : clampPrice(num(market.yes_price) - delta);
	const noPrice = clampPrice(1 - yesPrice);
	const yesChange = num(market.yes_change) + (data.outcome === "yes" ? delta : -delta) * 100;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const hash = txHash();
	const sideName = market.kind === "sell_out" ? data.outcome === "yes" ? "Sell out" : "Won't sell out" : data.outcome === "yes" ? "Pump" : "Dump";
	await sql`
      update nft_markets
      set yes_price = ${yesPrice}, no_price = ${noPrice},
          volume = ${num(market.volume) + data.amount},
          yes_change = ${+yesChange.toFixed(1)}
      where id = ${data.marketId}
    `;
	await sql`insert into price_history (market_id, outcome, price, ts) values (${data.marketId}, ${"yes"}, ${yesPrice}, ${now})`;
	await sql`insert into price_history (market_id, outcome, price, ts) values (${data.marketId}, ${"no"}, ${noPrice}, ${now})`;
	await sql`update wallets set balance = ${balance - data.amount} where user_id = ${context.userId}`;
	const existing = await sql`
      select id, shares, avg_price from nft_positions
      where user_id = ${context.userId} and market_id = ${data.marketId} and outcome = ${data.outcome} and settled = false
      limit 1
    `;
	if (existing[0]) {
		const newShares = num(existing[0].shares) + shares;
		await sql`update nft_positions set shares = ${newShares}, avg_price = ${(num(existing[0].shares) * num(existing[0].avg_price) + shares * price) / newShares} where id = ${existing[0].id}`;
	} else await sql`
        insert into nft_positions (id, user_id, market_id, outcome, shares, avg_price)
        values (${newId("npos")}, ${context.userId}, ${data.marketId}, ${data.outcome}, ${shares}, ${price})
      `;
	await sql`
      insert into trades (
        id, user_id, market_id, market_title, outcome, side, shares, price, total, tx_hash, created_at
      ) values (
        ${newId("ntx")}, ${context.userId}, ${data.marketId}, ${`${market.name} · ${sideName}`},
        ${data.outcome}, ${"buy"}, ${shares}, ${price}, ${data.amount}, ${hash}, ${now}
      )
    `;
	const immediateWin = (data.outcome === "yes" ? yesPrice : noPrice) >= price;
	await recordTradeStats(sql, context.userId, data.amount, immediateWin);
	return {
		ok: true,
		message: `Bought ${shares.toFixed(2)} ${sideName} shares`,
		txHash: hash
	};
});
var createSchema = object({
	kind: _enum(["pump_dump", "sell_out"]),
	name: string().trim().min(2).max(80),
	imageUrl: string().trim().max(500).optional(),
	lookup: string().trim().max(120).optional(),
	deadline: string(),
	primitive: _enum([
		"native_https",
		"conditional_tx",
		"async_await",
		"rex"
	]),
	liquidity: number().min(10).max(1e5),
	manualFloor: number().positive().max(0xe8d4a51000).optional(),
	currency: string().trim().max(8).optional(),
	supply: number().positive().max(0xe8d4a51000).optional(),
	minted: number().min(0).max(0xe8d4a51000).optional(),
	mintPrice: number().min(0).max(1e9).optional(),
	chain: string().trim().max(32).optional()
});
function cleanImage(value) {
	if (!value) return null;
	if (value.startsWith("https://") || value.startsWith("http://")) return value.slice(0, 500);
	return null;
}
var createNftMarket_createServerFn_handler = createServerRpc({
	id: "3a4f0f94dfafd2bfbd022f9496d5bc5edc7f1dc323ae1ccca9637d5e8449c04e",
	name: "createNftMarket",
	filename: "src/lib/nft-api.ts"
}, (opts) => createNftMarket.__executeServer(opts));
var createNftMarket = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(createSchema).handler(createNftMarket_createServerFn_handler, async ({ context, data }) => {
	const deadlineMs = new Date(data.deadline).getTime();
	if (!Number.isFinite(deadlineMs) || deadlineMs < Date.now() + 18e5) return {
		ok: false,
		message: "Deadline must be at least 30 minutes from now.",
		id: void 0
	};
	if (deadlineMs > Date.now() + 10368e6) return {
		ok: false,
		message: "Deadline must be within 120 days.",
		id: void 0
	};
	const sql = await getSql();
	const balance = await ensureWallet(sql, context.userId);
	if (data.liquidity > balance) return {
		ok: false,
		message: "Insufficient RIA for initial liquidity.",
		id: void 0
	};
	const { quotePumpLookup, quoteMintLookup, httpImage } = await import("./nft-live.server-BC4zM_Al.mjs");
	const lookup = data.lookup?.trim() ?? "";
	let name = data.name;
	let image = cleanImage(data.imageUrl);
	let chain = data.chain?.trim() || (data.kind === "sell_out" ? "solana" : "ethereum");
	let currency = (data.currency?.trim() || (data.kind === "sell_out" ? "SOL" : "ETH")).toUpperCase();
	let floor = null;
	let floorUsd = null;
	let chg24 = null;
	let chg7 = null;
	let chg14 = null;
	let chg30 = null;
	let chg60 = null;
	let minted = data.minted ?? null;
	let supply = data.supply ?? null;
	let mintPrice = data.mintPrice ?? null;
	let quoteSource = "manual";
	let externalKey = lookup || data.name;
	if (data.kind === "pump_dump") {
		if (lookup) {
			const quote = await quotePumpLookup(lookup);
			if (quote) {
				name = data.name || quote.name;
				image = image || quote.image;
				chain = quote.chain || chain;
				currency = quote.currency || currency;
				floor = quote.floor;
				floorUsd = quote.floorUsd;
				chg24 = quote.chg24;
				chg7 = quote.chg7;
				chg14 = quote.chg14;
				chg30 = quote.chg30;
				chg60 = quote.chg60;
				quoteSource = quote.quoteSource;
				externalKey = quote.externalKey;
				if (!data.name) name = quote.name;
				else name = data.name;
				if (quote.name && data.name.trim().length < 2) name = quote.name;
			}
		}
		if (floor == null && data.manualFloor) {
			floor = data.manualFloor;
			quoteSource = lookup ? quoteSource : "manual";
		}
		if (floor == null) return {
			ok: false,
			message: "No live floor for that id. Use a CoinGecko id like pudgy-penguins, a Magic Eden symbol, or enter a floor.",
			id: void 0
		};
	} else if (lookup) {
		const quote = await quoteMintLookup(lookup);
		if (quote) {
			image = image || httpImage(quote.image);
			chain = quote.chain || chain;
			if (quote.supply != null) supply = quote.supply;
			if (quote.minted != null) minted = quote.minted;
			if (quote.mintPrice != null) mintPrice = quote.mintPrice;
			quoteSource = quote.quoteSource;
			externalKey = quote.externalKey;
			if (quote.name && quote.name !== lookup) name = data.name;
		}
	}
	if (data.kind === "sell_out" && (supply == null || supply <= 0)) return {
		ok: false,
		message: "Supply is required when the mint cannot be read live.",
		id: void 0
	};
	const yes = data.kind === "pump_dump" ? clampPrice(.5 + Math.max(-.2, Math.min(.2, (chg7 ?? 0) / 80))) : clampPrice(.22 + (supply ? Math.max(0, Math.min(1, (minted ?? 0) / supply)) : 0) * .62);
	const no = clampPrice(1 - yes);
	const id = newId("nft-u");
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const description = data.kind === "pump_dump" ? `Community market: will ${name} pump or dump versus the open floor of ${floor} ${currency}? Settles against the live floor when the deadline hits.` : `Community market: will ${name} sell out (${minted ?? 0} / ${supply}) before the deadline? Settles against the mint count when the deadline hits.`;
	await sql`
      insert into nft_markets (
        id, kind, source, external_key, name, image_url, chain, currency, description,
        floor_native, floor_usd, chg_24h, chg_7d, chg_14d, chg_30d, chg_60d,
        minted, supply, mint_price, open_floor, open_minted, deadline, volume, liquidity,
        yes_price, no_price, primitive, quote_source, creator_id, created_at, quote_updated_at
      ) values (
        ${id}, ${data.kind}, ${"user"}, ${externalKey}, ${name}, ${image}, ${chain}, ${currency},
        ${description}, ${floor}, ${floorUsd}, ${chg24}, ${chg7}, ${chg14}, ${chg30}, ${chg60},
        ${minted}, ${supply}, ${mintPrice}, ${floor}, ${minted}, ${new Date(deadlineMs).toISOString()},
        0, ${data.liquidity}, ${yes}, ${no}, ${data.primitive}, ${quoteSource}, ${context.userId}, ${now}, now()
      )
    `;
	await sql`insert into price_history (market_id, outcome, price, ts) values (${id}, ${"yes"}, ${yes}, ${now})`;
	await sql`insert into price_history (market_id, outcome, price, ts) values (${id}, ${"no"}, ${no}, ${now})`;
	if (floor != null) await sql`insert into nft_floor_snaps (market_id, price, ts) values (${id}, ${floor}, ${now})`;
	await sql`update wallets set balance = ${balance - data.liquidity} where user_id = ${context.userId}`;
	return {
		ok: true,
		message: "NFT market created",
		id
	};
});
var saveProfile_createServerFn_handler = createServerRpc({
	id: "76e31106f4315a62bb90738fed5fbfccf5de968d5ca55d5736f389a4fe1747c7",
	name: "saveProfile",
	filename: "src/lib/nft-api.ts"
}, (opts) => saveProfile.__executeServer(opts));
var saveProfile = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	name: string().trim().min(2).max(32),
	image: string().max(12e4).nullable()
})).handler(saveProfile_createServerFn_handler, async ({ context, data }) => {
	if (/[\u0000-\u001F]/.test(data.name)) return {
		ok: false,
		message: "Name cannot include control characters."
	};
	let image = data.image;
	if (image) {
		if (!(image.startsWith("data:image/jpeg;base64,") || image.startsWith("data:image/png;base64,") || image.startsWith("https://"))) return {
			ok: false,
			message: "Use a JPEG, PNG, or https image."
		};
	}
	const sql = await getSql();
	if (!(await sql`
      update "user"
      set "name" = ${data.name}, "image" = ${image}, "updatedAt" = now()
      where "id" = ${context.userId}
      returning "id"
    `)[0]) return {
		ok: false,
		message: "Profile not found."
	};
	await sql`
      update user_stats set username = ${data.name.slice(0, 32)} where user_id = ${context.userId}
    `;
	return {
		ok: true,
		message: "Profile saved"
	};
});
//#endregion
export { buyNft_createServerFn_handler, createNftMarket_createServerFn_handler, getMyNftStake_createServerFn_handler, getNft_createServerFn_handler, listNfts_createServerFn_handler, saveProfile_createServerFn_handler };
