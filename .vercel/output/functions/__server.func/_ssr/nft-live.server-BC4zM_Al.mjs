//#region node_modules/.nitro/vite/services/ssr/assets/nft-live.server-BC4zM_Al.js
var PUMPS = [
	{
		id: "pudgy-penguins",
		name: "Pudgy Penguins",
		primitive: "native_https"
	},
	{
		id: "bored-ape-yacht-club",
		name: "Bored Ape Yacht Club",
		primitive: "conditional_tx"
	},
	{
		id: "cryptopunks",
		name: "CryptoPunks",
		primitive: "async_await"
	},
	{
		id: "azuki",
		name: "Azuki",
		primitive: "rex"
	},
	{
		id: "mutant-ape-yacht-club",
		name: "Mutant Ape Yacht Club",
		primitive: "native_https"
	},
	{
		id: "degods",
		name: "DeGods",
		primitive: "conditional_tx"
	}
];
var LAUNCHPAD_OWNER = "CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb";
var RPCS = ["https://solana-rpc.publicnode.com", "https://api.mainnet-beta.solana.com"];
function clampPrice(n) {
	return +Math.max(.05, Math.min(.95, n)).toFixed(3);
}
function stripHtml(value) {
	return value.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}
function httpImage(url) {
	if (!url) return null;
	if (url.startsWith("ipfs://")) return `https://ipfs.io/ipfs/${url.slice(7)}`;
	if (url.startsWith("http://") || url.startsWith("https://")) return url;
	return null;
}
async function fetchJson(url, ms = 8e3) {
	const ctrl = new AbortController();
	const timer = setTimeout(() => ctrl.abort(), ms);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			headers: {
				accept: "application/json",
				"user-agent": "Probly/1.0"
			}
		});
		if (!res.ok) return null;
		return await res.json();
	} catch {
		return null;
	} finally {
		clearTimeout(timer);
	}
}
function pumpOdds(chg7d) {
	if (chg7d == null || !Number.isFinite(chg7d)) return .5;
	return clampPrice(.5 + Math.max(-.22, Math.min(.22, chg7d / 80)));
}
function mintOdds(minted, supply) {
	if (!(supply > 0)) return .42;
	const ratio = Math.max(0, Math.min(1, minted / supply));
	if (supply > 1e5) return clampPrice(.12 + ratio * .2);
	return clampPrice(.22 + ratio * .62);
}
async function upsertPump(sql, row) {
	const deadline = new Date(Date.now() + 6048e5).toISOString();
	const yes = pumpOdds(row.chg7);
	const no = clampPrice(1 - yes);
	const description = row.description || `Will the ${row.name} floor finish above its open print? Settles against the live floor when the deadline hits.`;
	await sql`
    insert into nft_markets (
      id, kind, source, external_key, name, image_url, chain, currency, description,
      floor_native, floor_usd, chg_24h, chg_7d, chg_14d, chg_30d, chg_60d,
      open_floor, deadline, liquidity, yes_price, no_price, primitive, quote_source, quote_updated_at
    ) values (
      ${row.id}, ${"pump_dump"}, ${"live"}, ${row.externalKey}, ${row.name}, ${row.image},
      ${row.chain}, ${row.currency}, ${description.slice(0, 700)},
      ${row.floor}, ${row.floorUsd}, ${row.chg24}, ${row.chg7}, ${row.chg14}, ${row.chg30}, ${row.chg60},
      ${row.floor}, ${deadline}, ${400}, ${yes}, ${no}, ${row.primitive}, ${row.quoteSource}, now()
    )
    on conflict (id) do update set
      name = excluded.name,
      image_url = coalesce(excluded.image_url, nft_markets.image_url),
      chain = excluded.chain,
      currency = excluded.currency,
      description = excluded.description,
      floor_native = coalesce(excluded.floor_native, nft_markets.floor_native),
      floor_usd = excluded.floor_usd,
      chg_24h = excluded.chg_24h,
      chg_7d = excluded.chg_7d,
      chg_14d = excluded.chg_14d,
      chg_30d = excluded.chg_30d,
      chg_60d = excluded.chg_60d,
      open_floor = coalesce(nft_markets.open_floor, excluded.open_floor),
      yes_price = case when nft_markets.quote_source = 'pending' then excluded.yes_price else nft_markets.yes_price end,
      no_price = case when nft_markets.quote_source = 'pending' then excluded.no_price else nft_markets.no_price end,
      quote_source = excluded.quote_source,
      quote_updated_at = now()
  `;
	if (row.floor != null) await sql`
      insert into nft_floor_snaps (market_id, price, ts)
      values (${row.id}, ${row.floor}, now())
    `;
	await sql`
    insert into price_history (market_id, outcome, price, ts)
    select ${row.id}, ${"yes"}, yes_price, created_at from nft_markets where id = ${row.id}
    and not exists (select 1 from price_history where market_id = ${row.id})
  `;
	await sql`
    insert into price_history (market_id, outcome, price, ts)
    select ${row.id}, ${"no"}, no_price, created_at from nft_markets where id = ${row.id}
    and not exists (select 1 from price_history where market_id = ${row.id} and outcome = ${"no"})
  `;
}
function numOrNull(value) {
	const n = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
	return Number.isFinite(n) ? n : null;
}
async function refreshPumps(sql, onlyMissing = false) {
	for (const item of PUMPS) await sql`
      insert into nft_markets (
        id, kind, source, external_key, name, chain, currency, description,
        deadline, liquidity, yes_price, no_price, primitive, quote_source
      ) values (
        ${`nft-pd-${item.id}`}, ${"pump_dump"}, ${"live"}, ${item.id}, ${item.name}, ${"ethereum"}, ${"ETH"},
        ${`Will the ${item.name} floor finish above its open print?`},
        ${new Date(Date.now() + 6048e5).toISOString()},
        ${400}, ${.5}, ${.5}, ${item.primitive}, ${"pending"}
      )
      on conflict (id) do nothing
    `;
	const have = onlyMissing ? await sql`
        select external_key from nft_markets
        where kind = 'pump_dump' and source = 'live' and floor_native is not null and quote_source <> 'pending'
      ` : [];
	const haveSet = new Set(have.map((row) => row.external_key));
	const todo = PUMPS.filter((item) => !haveSet.has(item.id));
	const quotes = [];
	for (const item of todo) {
		let data = await fetchJson(`https://api.coingecko.com/api/v3/nfts/${item.id}`);
		if (!data?.floor_price) {
			await new Promise((resolve) => setTimeout(resolve, 900));
			data = await fetchJson(`https://api.coingecko.com/api/v3/nfts/${item.id}`);
		}
		quotes.push({
			item,
			data
		});
		await new Promise((resolve) => setTimeout(resolve, 350));
	}
	for (const { item, data } of quotes) {
		if (!data?.floor_price) continue;
		const floor = numOrNull(data.floor_price.native_currency);
		const chg = (key) => {
			const block = data[key];
			return numOrNull(block?.native_currency);
		};
		const blurb = data.description ? stripHtml(data.description).slice(0, 280).replace(/\s+\S*$/, "") : "";
		await upsertPump(sql, {
			id: `nft-pd-${item.id}`,
			externalKey: item.id,
			name: data.name?.trim() || item.name,
			image: httpImage(data.image?.small),
			chain: data.asset_platform_id || "ethereum",
			currency: data.native_currency_symbol || "ETH",
			description: blurb ? `${blurb}… Predict whether the floor pumps or dumps versus the open print.` : `Will the ${item.name} floor finish above its open print?`,
			floor,
			floorUsd: numOrNull(data.floor_price.usd),
			chg24: chg("floor_price_24h_percentage_change"),
			chg7: chg("floor_price_7d_percentage_change"),
			chg14: chg("floor_price_14d_percentage_change"),
			chg30: chg("floor_price_30d_percentage_change"),
			chg60: chg("floor_price_60d_percentage_change"),
			primitive: item.primitive,
			quoteSource: "coingecko"
		});
	}
}
async function rpcAccount(address) {
	for (const rpc of RPCS) {
		const ctrl = new AbortController();
		const timer = setTimeout(() => ctrl.abort(), 8e3);
		try {
			const res = await fetch(rpc, {
				method: "POST",
				signal: ctrl.signal,
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					jsonrpc: "2.0",
					id: 1,
					method: "getAccountInfo",
					params: [address, { encoding: "base64" }]
				})
			});
			if (!res.ok) continue;
			const value = (await res.json()).result?.value;
			if (!value?.data?.[0]) continue;
			return value;
		} catch {
			continue;
		} finally {
			clearTimeout(timer);
		}
	}
	return null;
}
function parseMintAccount(dataB64, owner) {
	if (owner && owner !== LAUNCHPAD_OWNER) return null;
	const buf = Buffer.from(dataB64, "base64");
	if (buf.length < 142) return null;
	const minted = buf.readUInt32LE(104);
	const supply = buf.readUInt32LE(138);
	if (supply <= 0 || supply > 5e9) return null;
	if (minted > supply) return null;
	return {
		minted,
		supply
	};
}
async function readMint(address) {
	const account = await rpcAccount(address);
	if (!account?.data?.[0]) return null;
	return parseMintAccount(account.data[0], account.owner);
}
async function refreshMints(sql) {
	const rows = await fetchJson("https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=60");
	if (!rows?.length) return;
	const finite = rows.filter((row) => row.chainId === "solana" && row.symbol && row.contractAddress && typeof row.size === "number" && row.size > 0);
	const partial = [];
	for (let i = 0; i < finite.length && i < 18 && partial.filter((p) => p.finite).length < 4; i += 3) {
		const slice = finite.slice(i, i + 3);
		const stats = await Promise.all(slice.map((row) => readMint(row.contractAddress)));
		slice.forEach((row, index) => {
			const stat = stats[index];
			if (!stat) return;
			if (stat.minted >= stat.supply) return;
			const isFinite = stat.supply < 1e5;
			if (!isFinite && partial.filter((p) => !p.finite).length >= 2) return;
			partial.push({
				row,
				minted: stat.minted,
				supply: stat.supply,
				finite: isFinite
			});
		});
	}
	const chosen = [...partial.filter((p) => p.finite), ...partial.filter((p) => !p.finite)].slice(0, 6);
	for (const item of chosen) {
		const symbol = item.row.symbol;
		const id = `nft-so-${symbol.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 48)}`;
		const yes = mintOdds(item.minted, item.supply);
		const no = clampPrice(1 - yes);
		const primitive = item.finite ? "async_await" : "native_https";
		const deadline = new Date(Date.now() + 2592e5).toISOString();
		const image = httpImage(item.row.image);
		const description = `Will ${item.row.name || symbol} sell out before the deadline? Minted ${item.minted.toLocaleString("en-US")} of ${item.supply.toLocaleString("en-US")}. Progress is read from the collection account.`;
		await sql`
      insert into nft_markets (
        id, kind, source, external_key, name, image_url, chain, currency, description,
        minted, supply, mint_price, open_minted, deadline, liquidity, yes_price, no_price,
        primitive, quote_source, quote_updated_at
      ) values (
        ${id}, ${"sell_out"}, ${"live"}, ${symbol}, ${item.row.name || symbol}, ${image},
        ${"solana"}, ${"SOL"}, ${description},
        ${item.minted}, ${item.supply}, ${item.row.price ?? null}, ${item.minted},
        ${deadline}, ${400}, ${yes}, ${no}, ${primitive}, ${"chain"}, now()
      )
      on conflict (id) do update set
        name = excluded.name,
        image_url = coalesce(excluded.image_url, nft_markets.image_url),
        description = excluded.description,
        minted = excluded.minted,
        supply = excluded.supply,
        mint_price = coalesce(excluded.mint_price, nft_markets.mint_price),
        open_minted = coalesce(nft_markets.open_minted, excluded.open_minted),
        yes_price = case when nft_markets.quote_source = 'pending' or nft_markets.volume = 0 then excluded.yes_price else nft_markets.yes_price end,
        no_price = case when nft_markets.quote_source = 'pending' or nft_markets.volume = 0 then excluded.no_price else nft_markets.no_price end,
        quote_source = excluded.quote_source,
        quote_updated_at = now()
    `;
		await sql`
      insert into price_history (market_id, outcome, price, ts)
      select ${id}, ${"yes"}, yes_price, created_at from nft_markets where id = ${id}
      and not exists (select 1 from price_history where market_id = ${id})
    `;
		await sql`
      insert into price_history (market_id, outcome, price, ts)
      select ${id}, ${"no"}, no_price, created_at from nft_markets where id = ${id}
      and not exists (select 1 from price_history where market_id = ${id} and outcome = ${"no"})
    `;
	}
}
var g = globalThis;
async function refreshLiveNft(sql) {
	const age = g.__nftRefreshAt ? Date.now() - g.__nftRefreshAt : Number.POSITIVE_INFINITY;
	if (age < 12e3) return;
	if (g.__nftRefreshP) {
		await g.__nftRefreshP;
		return;
	}
	const pending = await sql`
    select count(*)::int as n from nft_markets
    where source = 'live' and kind = 'pump_dump' and (floor_native is null or quote_source = 'pending')
  `;
	const mints = await sql`
    select count(*)::int as n from nft_markets where source = 'live' and kind = 'sell_out'
  `;
	const missingFloors = (pending[0]?.n ?? 0) > 0;
	const missingMints = (mints[0]?.n ?? 0) === 0;
	if (age < 48e4 && !missingFloors && !missingMints) return;
	g.__nftRefreshP = (async () => {
		if (missingFloors || age >= 48e4) await refreshPumps(sql, missingFloors && age < 48e4);
		if (missingMints || age >= 48e4) await refreshMints(sql);
		g.__nftRefreshAt = Date.now();
	})().finally(() => {
		g.__nftRefreshP = null;
	});
	await g.__nftRefreshP;
}
async function quotePumpLookup(lookup) {
	const key = lookup.trim().toLowerCase();
	const cg = await fetchJson(`https://api.coingecko.com/api/v3/nfts/${encodeURIComponent(key)}`);
	if (cg?.floor_price && numOrNull(cg.floor_price.native_currency) != null) {
		const chg = (block) => numOrNull(block?.native_currency);
		return {
			name: cg.name?.trim() || key,
			image: httpImage(cg.image?.small),
			chain: cg.asset_platform_id || "ethereum",
			currency: cg.native_currency_symbol || "ETH",
			floor: numOrNull(cg.floor_price.native_currency),
			floorUsd: numOrNull(cg.floor_price.usd),
			chg24: chg(cg.floor_price_24h_percentage_change),
			chg7: chg(cg.floor_price_7d_percentage_change),
			chg14: chg(cg.floor_price_14d_percentage_change),
			chg30: chg(cg.floor_price_30d_percentage_change),
			chg60: chg(cg.floor_price_60d_percentage_change),
			quoteSource: "coingecko",
			externalKey: key
		};
	}
	const raw = numOrNull((await fetchJson(`https://api-mainnet.magiceden.dev/v2/collections/${encodeURIComponent(lookup.trim())}/stats`))?.floorPrice);
	if (raw == null) return null;
	const floor = raw > 1e3 ? raw / 1e9 : raw;
	return {
		name: lookup.trim(),
		image: null,
		chain: "solana",
		currency: "SOL",
		floor,
		floorUsd: null,
		chg24: null,
		chg7: null,
		chg14: null,
		chg30: null,
		chg60: null,
		quoteSource: "magiceden",
		externalKey: lookup.trim()
	};
}
async function quoteMintLookup(lookup) {
	const key = lookup.trim();
	const match = (await fetchJson("https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=200"))?.find((row) => row.symbol?.toLowerCase() === key.toLowerCase() || row.contractAddress === key || row.name?.toLowerCase() === key.toLowerCase());
	const address = match?.contractAddress || (key.length >= 32 && key.length <= 48 ? key : null);
	if (!address) return match ? {
		name: match.name || key,
		image: httpImage(match.image),
		chain: "solana",
		supply: typeof match.size === "number" ? match.size : null,
		minted: null,
		mintPrice: typeof match.price === "number" ? match.price : null,
		externalKey: match.symbol || key,
		quoteSource: "magiceden"
	} : null;
	const stat = await readMint(address);
	return {
		name: match?.name || key,
		image: httpImage(match?.image),
		chain: "solana",
		supply: stat?.supply ?? (typeof match?.size === "number" ? match.size : null),
		minted: stat?.minted ?? null,
		mintPrice: typeof match?.price === "number" ? match.price : null,
		externalKey: match?.symbol || address,
		quoteSource: stat ? "chain" : "magiceden"
	};
}
//#endregion
export { httpImage, quoteMintLookup, quotePumpLookup, refreshLiveNft };
