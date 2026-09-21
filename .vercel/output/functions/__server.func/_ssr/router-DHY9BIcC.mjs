import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRoute, b as useRouter, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DHY9BIcC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function outcome(marketId, yes, change) {
	return [{
		id: `${marketId}-yes`,
		name: "Yes",
		price: yes,
		change24h: change
	}, {
		id: `${marketId}-no`,
		name: "No",
		price: +(1 - yes).toFixed(2),
		change24h: -change
	}];
}
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
		outcomes: outcome("m-btc", .42, 3.2),
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
		outcomes: outcome("m-rialo", .67, 5.8),
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
		outcomes: outcome("m-turing", .55, 1.2),
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
		outcomes: outcome("m-fed", .73, 2.1),
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
		outcomes: outcome("m-starship", .81, .5),
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
		outcomes: outcome("m-eth", .38, -1.8),
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
		outcomes: outcome("m-vision", .45, 4.2),
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
		outcomes: outcome("m-swift", .72, .9),
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
		outcomes: outcome("m-election", .51, -.6),
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
		outcomes: outcome("m-ucl", .34, 2.4),
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
		outcomes: outcome("m-oscars", .29, -2.1),
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
		outcomes: outcome("m-fusion", .22, 1.1),
		status: "active",
		createdAt: "2026-03-22"
	}
];
var seedTraders = [
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
	const history = {};
	const now = Date.parse("2026-09-20T00:00:00.000Z");
	for (const market of markets) for (const outcome of market.outcomes) {
		const rand = mulberry32(hash(outcome.id));
		const points = [];
		let price = Math.max(.08, Math.min(.92, outcome.price - .08));
		for (let i = 30; i >= 0; i--) {
			price = Math.max(.04, Math.min(.96, price + (rand() - .48) * .04));
			if (i === 0) price = outcome.price;
			points.push({
				timestamp: (/* @__PURE__ */ new Date(now - i * 24 * 60 * 60 * 1e3)).toISOString(),
				price: +price.toFixed(3)
			});
		}
		history[outcome.id] = points;
	}
	return history;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatVolume(volume) {
	const sign = volume < 0 ? "-" : "";
	const abs = Math.abs(volume);
	if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(1)}M`;
	if (abs >= 1e3) return `${sign}$${(abs / 1e3).toFixed(0)}K`;
	return `${sign}$${abs.toFixed(0)}`;
}
function formatDate(dateString, opts) {
	return new Date(dateString).toLocaleDateString("en-US", opts ?? {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function generateId(prefix = "id") {
	return `${prefix}-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}
function generateWalletAddress() {
	return "0x" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
}
function generateTxHash() {
	return "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
}
function formatAddress(address) {
	if (!address) return "";
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
var STARTING_BALANCE = 1e3;
var FAUCET_AMOUNT = 100;
var FAUCET_COOLDOWN_MS = 864e5;
function clampPrice(n) {
	return +Math.max(.02, Math.min(.98, n)).toFixed(3);
}
function refreshPositions(positions, markets) {
	return positions.map((pos) => {
		const market = markets.find((m) => m.id === pos.marketId);
		const currentPrice = market ? pos.outcome === "yes" ? market.yesPrice : market.noPrice : pos.currentPrice;
		const pnl = (currentPrice - pos.avgPrice) * pos.shares;
		const cost = pos.avgPrice * pos.shares;
		return {
			...pos,
			currentPrice,
			pnl,
			pnlPercent: cost > 0 ? pnl / cost * 100 : 0
		};
	}).filter((p) => p.shares > 1e-4);
}
var usePulse = create()(persist((set, get) => ({
	hydrated: false,
	session: null,
	wallet: {
		connected: false,
		address: null,
		balance: STARTING_BALANCE,
		faucetClaimedAt: null
	},
	markets: seedMarkets,
	comments: [],
	positions: [],
	trades: [],
	priceHistory: seedPriceHistory(seedMarkets),
	traders: seedTraders,
	signIn: (email, username) => {
		const name = (username || email.split("@")[0] || "trader").slice(0, 24);
		set({ session: {
			id: generateId("user"),
			email,
			username: name
		} });
	},
	signOut: () => set({ session: null }),
	connectWallet: () => {
		const current = get().wallet;
		set({ wallet: {
			...current,
			connected: true,
			address: current.address ?? generateWalletAddress()
		} });
	},
	disconnectWallet: () => set((s) => ({ wallet: {
		...s.wallet,
		connected: false
	} })),
	claimFaucet: () => {
		const { wallet } = get();
		if (!wallet.connected) return {
			ok: false,
			message: "Connect your wallet first."
		};
		if (wallet.faucetClaimedAt && Date.now() - wallet.faucetClaimedAt < FAUCET_COOLDOWN_MS) return {
			ok: false,
			message: "Faucet already claimed today."
		};
		set({ wallet: {
			...wallet,
			balance: wallet.balance + FAUCET_AMOUNT,
			faucetClaimedAt: Date.now()
		} });
		return {
			ok: true,
			message: `${FAUCET_AMOUNT} RIA sent to your wallet.`
		};
	},
	buy: ({ marketId, outcome, amount }) => {
		const { session, wallet, markets, positions, trades, priceHistory, traders } = get();
		if (!session) return {
			ok: false,
			message: "Sign in to trade."
		};
		if (!wallet.connected) return {
			ok: false,
			message: "Connect your wallet."
		};
		if (!Number.isFinite(amount) || amount <= 0) return {
			ok: false,
			message: "Enter a valid amount."
		};
		if (amount > wallet.balance) return {
			ok: false,
			message: "Insufficient RIA balance."
		};
		const market = markets.find((m) => m.id === marketId);
		if (!market || market.status !== "active") return {
			ok: false,
			message: "Market is not available."
		};
		const price = outcome === "yes" ? market.yesPrice : market.noPrice;
		const shares = amount / price;
		const delta = Math.min(.04, amount / (market.liquidity + amount) * .12);
		const yesPrice = outcome === "yes" ? clampPrice(market.yesPrice + delta) : clampPrice(market.yesPrice - delta);
		const noPrice = clampPrice(1 - yesPrice);
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const txHash = generateTxHash();
		const nextMarkets = markets.map((m) => {
			if (m.id !== marketId) return m;
			return {
				...m,
				yesPrice,
				noPrice,
				volume: m.volume + amount,
				outcomes: m.outcomes.map((o) => {
					const isYes = o.name === "Yes";
					const next = isYes ? yesPrice : noPrice;
					return {
						...o,
						price: next,
						change24h: +(o.change24h + (isYes ? delta : -delta) * 100).toFixed(1)
					};
				})
			};
		});
		const existing = positions.find((p) => p.marketId === marketId && p.outcome === outcome);
		let nextPositions;
		if (existing) {
			const newShares = existing.shares + shares;
			const avgPrice = (existing.shares * existing.avgPrice + shares * price) / newShares;
			nextPositions = positions.map((p) => p.id === existing.id ? {
				...p,
				shares: newShares,
				avgPrice
			} : p);
		} else nextPositions = [...positions, {
			id: generateId("pos"),
			marketId,
			marketTitle: market.title,
			outcome,
			shares,
			avgPrice: price,
			currentPrice: price,
			pnl: 0,
			pnlPercent: 0
		}];
		const trade = {
			id: generateId("tx"),
			marketId,
			marketTitle: market.title,
			outcome,
			type: "buy",
			shares,
			price,
			total: amount,
			timestamp: now,
			txHash
		};
		const nextHistory = { ...priceHistory };
		for (const o of nextMarkets.find((m) => m.id === marketId).outcomes) {
			const list = nextHistory[o.id] ? [...nextHistory[o.id]] : [];
			list.push({
				timestamp: now,
				price: o.price
			});
			nextHistory[o.id] = list;
		}
		const userTrader = {
			id: session.id,
			username: session.username,
			walletAddress: wallet.address ?? session.id,
			totalVolume: amount,
			totalProfit: 0,
			totalTrades: 1,
			winRate: 50
		};
		const nextTraders = [...traders];
		const idx = nextTraders.findIndex((t) => t.id === session.id);
		if (idx >= 0) nextTraders[idx] = {
			...nextTraders[idx],
			totalVolume: nextTraders[idx].totalVolume + amount,
			totalTrades: nextTraders[idx].totalTrades + 1
		};
		else nextTraders.push(userTrader);
		set({
			wallet: {
				...wallet,
				balance: wallet.balance - amount
			},
			markets: nextMarkets,
			positions: refreshPositions(nextPositions, nextMarkets),
			trades: [trade, ...trades],
			priceHistory: nextHistory,
			traders: nextTraders
		});
		return {
			ok: true,
			message: `Bought ${shares.toFixed(2)} ${outcome.toUpperCase()} shares`,
			txHash,
			shares
		};
	},
	createMarket: (input) => {
		const { session, wallet, markets, priceHistory } = get();
		if (!session) return {
			ok: false,
			message: "Sign in to create a market."
		};
		if (!wallet.connected) return {
			ok: false,
			message: "Connect your wallet."
		};
		if (input.liquidity < 10) return {
			ok: false,
			message: "Minimum liquidity is 10 RIA."
		};
		if (input.liquidity > wallet.balance) return {
			ok: false,
			message: "Insufficient RIA for initial liquidity."
		};
		const id = generateId("m");
		const market = {
			id,
			title: input.title.trim(),
			description: input.description.trim(),
			category: input.category,
			imageUrl: input.imageUrl || void 0,
			endDate: input.endDate,
			volume: 0,
			liquidity: input.liquidity,
			yesPrice: .5,
			noPrice: .5,
			outcomes: [{
				id: `${id}-yes`,
				name: "Yes",
				price: .5,
				change24h: 0
			}, {
				id: `${id}-no`,
				name: "No",
				price: .5,
				change24h: 0
			}],
			status: "active",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			creatorId: session.id,
			resolutionSource: input.resolutionSource.trim()
		};
		const now = (/* @__PURE__ */ new Date()).toISOString();
		set({
			wallet: {
				...wallet,
				balance: wallet.balance - input.liquidity
			},
			markets: [market, ...markets],
			priceHistory: {
				...priceHistory,
				[`${id}-yes`]: [{
					timestamp: now,
					price: .5
				}],
				[`${id}-no`]: [{
					timestamp: now,
					price: .5
				}]
			}
		});
		return {
			ok: true,
			message: "Market is live.",
			id
		};
	},
	addComment: (marketId, content) => {
		const { session, comments } = get();
		if (!session) return {
			ok: false,
			message: "Sign in to comment."
		};
		const text = content.trim();
		if (!text) return {
			ok: false,
			message: "Write a comment first."
		};
		set({ comments: [{
			id: generateId("c"),
			marketId,
			userId: session.id,
			username: session.username,
			content: text,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		}, ...comments] });
		return {
			ok: true,
			message: "Comment posted."
		};
	},
	deleteComment: (id) => set((s) => ({ comments: s.comments.filter((c) => c.id !== id) }))
}), {
	name: "predictix-pulse",
	skipHydration: true,
	partialize: (state) => ({
		session: state.session,
		wallet: state.wallet,
		markets: state.markets,
		comments: state.comments,
		positions: state.positions,
		trades: state.trades,
		priceHistory: state.priceHistory,
		traders: state.traders
	})
}));
function markPulseHydrated() {
	usePulse.setState({ hydrated: true });
}
function PulseHydrate() {
	(0, import_react.useEffect)(() => {
		usePulse.persist.rehydrate();
		markPulseHydrated();
	}, []);
	return null;
}
var styles_default = "/assets/styles-ClLhbwpQ.css";
var APP_NAME = "Predictix";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Trade on real-world events. Fast, transparent prediction markets."
			},
			{
				name: "theme-color",
				content: "#171412"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-background text-foreground antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseHydrate, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "top-right",
					toastOptions: { className: "bg-card text-foreground border-border" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-BXxZtgwV.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./auth-CQJ7PZ4T.mjs");
var Route$4 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./create-Dq5U5eav.mjs");
var Route$3 = createFileRoute("/create")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./leaderboard-DE3qmxer.mjs");
var Route$2 = createFileRoute("/leaderboard")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./portfolio-Cm6Sg7Pc.mjs");
var Route$1 = createFileRoute("/portfolio")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./market._id-BRG7bMai.mjs");
var Route = createFileRoute("/market/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AuthRoute: Route$4.update({
		id: "/auth",
		path: "/auth",
		getParentRoute: () => Route$6
	}),
	CreateRoute: Route$3.update({
		id: "/create",
		path: "/create",
		getParentRoute: () => Route$6
	}),
	LeaderboardRoute: Route$2.update({
		id: "/leaderboard",
		path: "/leaderboard",
		getParentRoute: () => Route$6
	}),
	PortfolioRoute: Route$1.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$6
	}),
	MarketIdRoute: Route.update({
		id: "/market/$id",
		path: "/market/$id",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { formatAddress as a, cn as i, Route as n, formatDate as o, usePulse as r, formatVolume as s, router_exports as t };
