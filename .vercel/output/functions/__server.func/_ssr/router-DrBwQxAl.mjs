import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRoute, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { W as QueryClientProvider } from "../_libs/@rainbow-me/rainbowkit+[...].mjs";
import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-BlkH4MvN.mjs";
import { a as string, i as object, n as literal, o as union, r as number, t as _enum } from "../_libs/zod.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { s as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as fr, c as de, i as ja, l as arSA, n as zhCN, o as es, r as pt, s as enUS } from "../_libs/date-fns.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/createSsrRpc-D75-wYbG.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/pulse-api-BsyRKqtC.js
var listHome = createServerFn({ method: "GET" }).handler(createSsrRpc("fcd1fc17bed8fd96ddd24672bb4d9c3492b73d45b407b86a1c7c05eb07c0c6e8"));
var getMarketDetail = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(createSsrRpc("0b0aec97d5a653dbeb133a085c3c506d276e26d33e278437c827afc63420f079"));
var getLeaderboard = createServerFn({ method: "GET" }).handler(createSsrRpc("74500bbd0bf98f52d3a8b42ba9d5991d23b4107ab97a0d866a36dc717b525a5f"));
var getMyPulse = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("32830cef63d9cabf9a3cd4682acfc9c79d0eb524cd8718faf3f9d2eb0a505336"));
var buyShares = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	outcome: _enum(["yes", "no"]),
	amount: number().positive()
})).handler(createSsrRpc("84e0f1bfba36450f1207986a708e6c11e3699ce97aad7ba54262fdb6c5d63086"));
var claimFaucet = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("d24db0423e0bdecda6e4504f310fb015c8262949a897064a936016b7aa1dee5a"));
var addComment = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	content: string().trim().min(1).max(500)
})).handler(createSsrRpc("b963e80f6511844bd72981e92d8d46d13502eb78aa1f669b8ee4fe84caa60b3d"));
var deleteComment = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string() })).handler(createSsrRpc("a814f9dce4c4055b8f3f30cbc7f178102a2096894c69d218092c67fe16b69c24"));
var toggleReaction = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	kind: _enum([
		"fire",
		"eyes",
		"skull"
	])
})).handler(createSsrRpc("3f0d434c950e198639dfd246e83a456625da2a14c6b7e7e3bb7f66d10afa5343"));
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
})).handler(createSsrRpc("2fe7fec4225a5fc22b039ccf2e27fd0fdc77ca29f374b9ee2bd87a8ebde569fa"));
var claimChallenge = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("61f4dd90ccfd16958ccd6b71cab5b6fabe5e71e35607e095a1ff103024d13ab0"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/nft-api-JKM0TDW1.js
var listNfts = createServerFn({ method: "GET" }).handler(createSsrRpc("7b258fa66f950d4998143502569bbe905ca28182731ab3645da5cc9f374d1fe8"));
var getNft = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(createSsrRpc("17aab32f558cc2b7b7b52044f1793e0a88b7f607db0c9932f7669b417d17deab"));
var getMyNftStake = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator(object({ id: string() })).handler(createSsrRpc("07955909146ecd0ba47a8534ee1a66fa96b86511b9d9db20ab7a3c64aecd11e0"));
var buyNft = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	marketId: string(),
	outcome: _enum(["yes", "no"]),
	amount: number().positive()
})).handler(createSsrRpc("3a8dbfd3f7cf638d198735769db93ebfdb85bc540fcdedba1e997513bd913b42"));
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
var createNftMarket = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(createSchema).handler(createSsrRpc("3a4f0f94dfafd2bfbd022f9496d5bc5edc7f1dc323ae1ccca9637d5e8449c04e"));
var saveProfile = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	name: string().trim().min(2).max(32),
	image: string().max(12e4).nullable()
})).handler(createSsrRpc("76e31106f4315a62bb90738fed5fbfccf5de968d5ca55d5736f389a4fe1747c7"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DrBwQxAl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY$1 = "predictix-theme";
var ThemeContext = (0, import_react.createContext)(null);
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	root.classList.add(theme);
	root.style.colorScheme = theme;
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const next = window.localStorage.getItem(STORAGE_KEY$1) === "light" ? "light" : "dark";
		setThemeState(next);
		applyTheme(next);
	}, []);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY$1, next);
		} catch {}
		applyTheme(next);
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => {
		setTheme(theme === "dark" ? "light" : "dark");
	}, [setTheme, theme]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme,
		toggleTheme
	}), [
		theme,
		setTheme,
		toggleTheme
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
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
* Wallet sign-in. Mounts RainbowKit on the client only. The server render stays
* a passthrough so wagmi never runs during SSR (the live preview iframe still
* hydrates the connect button immediately after). Google and email sign-in are
* not used.
*/
function AuthProvider({ children }) {
	const [WalletProvider, setWalletProvider] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		import("./wallet-provider-BwYBVqJJ.mjs").then((mod) => {
			if (!cancelled) setWalletProvider(() => mod.WalletProvider);
		});
		return () => {
			cancelled = true;
		};
	}, []);
	if (!WalletProvider) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletProvider, { children });
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
var LOCALES = [
	{
		id: "en",
		label: "English",
		native: "English",
		dir: "ltr"
	},
	{
		id: "es",
		label: "Spanish",
		native: "Español",
		dir: "ltr"
	},
	{
		id: "fr",
		label: "French",
		native: "Français",
		dir: "ltr"
	},
	{
		id: "pt",
		label: "Portuguese",
		native: "Português",
		dir: "ltr"
	},
	{
		id: "de",
		label: "German",
		native: "Deutsch",
		dir: "ltr"
	},
	{
		id: "zh",
		label: "Chinese",
		native: "中文",
		dir: "ltr"
	},
	{
		id: "ja",
		label: "Japanese",
		native: "日本語",
		dir: "ltr"
	},
	{
		id: "ar",
		label: "Arabic",
		native: "العربية",
		dir: "rtl"
	}
];
var STORAGE_KEY = "predictix-lang";
var DATE_LOCALES = {
	en: enUS,
	es,
	fr,
	pt,
	de,
	zh: zhCN,
	ja,
	ar: arSA
};
var INTL_TAGS = {
	en: "en-US",
	es: "es",
	fr: "fr",
	pt: "pt-BR",
	de: "de",
	zh: "zh-CN",
	ja: "ja",
	ar: "ar"
};
var en = {
	"nav.markets": "Markets",
	"nav.portfolio": "Portfolio",
	"nav.leaderboard": "Leaderboard",
	"nav.create": "Create",
	"nav.createMarket": "Create Market",
	"nav.signIn": "Connect wallet",
	"nav.closeMenu": "Close menu",
	"nav.openMenu": "Open menu",
	"theme.toLight": "Switch to light mode",
	"theme.toDark": "Switch to dark mode",
	"language.label": "Language",
	"faucet.label": "Faucet",
	"faucet.claiming": "Claiming",
	"faucet.claimed": "Claimed",
	"faucet.copied": "Wallet address copied",
	"home.live": "Live markets",
	"home.title": "Prediction Markets",
	"home.subtitle": "Trade on real-world events with an inbuilt RIA wallet. Fast, transparent, paper-settled.",
	"stats.volume": "Total Volume",
	"stats.active": "Active Markets",
	"stats.traders": "Traders",
	"stats.trades24h": "Trades (24h)",
	"hot.title": "Hot in the last 24h",
	"yes": "Yes",
	"no": "No",
	"buyYes": "Buy Yes",
	"buyNo": "Buy No",
	"vol": "Vol",
	"category.all": "All",
	"category.crypto": "Crypto",
	"category.politics": "Politics",
	"category.sports": "Sports",
	"category.entertainment": "Entertainment",
	"category.tech": "Tech",
	"category.science": "Science",
	"category.economics": "Economics",
	"grid.emptyTitle": "No markets found",
	"grid.emptyBody": "Try a different category or check back later.",
	"market.notFound": "Market not found",
	"market.back": "Back to markets",
	"market.active": "Active",
	"market.ends": "Ends {date}",
	"market.sentiment": "Sentiment over time",
	"market.resolution": "Resolution criteria",
	"market.resolutionSource": "Resolution source:",
	"market.stats": "Market stats",
	"market.volume": "Volume",
	"market.activity24h": "24h activity",
	"market.created": "Created",
	"market.endDate": "End date",
	"market.share": "Share card to X",
	"market.shared": "Card ready to post",
	"market.downloaded": "Card downloaded — X is open",
	"market.shareError": "Could not share",
	"comments.title": "Discussion",
	"comments.placeholder": "Share your thesis…",
	"comments.post": "Post",
	"comments.signIn": "Sign in",
	"comments.join": "to join the discussion.",
	"comments.empty": "No comments yet.",
	"comments.delete": "Delete comment",
	"comments.signInError": "Sign in to comment",
	"comments.deleteError": "Could not delete comment",
	"trade.title": "Trade",
	"trade.amount": "Amount (RIA)",
	"trade.wallet": "Inbuilt wallet: {balance} RIA",
	"trade.provisioning": "Provisioning wallet…",
	"trade.signInWallet": "to use your inbuilt wallet.",
	"trade.shares": "Shares",
	"trade.avgPrice": "Avg Price",
	"trade.return": "Potential return",
	"trade.processing": "Processing",
	"trade.signIn": "Sign in to trade",
	"trade.buy": "Buy {side}",
	"trade.disclaimer": "Settled from your inbuilt RIA wallet · DYOR",
	"trade.invalid": "Invalid amount",
	"trade.invalidBody": "Enter a valid amount to trade.",
	"trade.failed": "Trade failed",
	"trade.executed": "Trade executed",
	"challenge.weekly": "Weekly challenge",
	"challenge.title": "Three predictions this week",
	"challenge.body": "Place {n} trades this week to earn a {bonus} RIA bonus.",
	"challenge.claimed": "Bonus claimed",
	"challenge.claim": "Claim {amount} RIA",
	"challenge.signIn": "Sign in to claim the bonus",
	"footer.tagline": "Probly — prediction markets",
	"footer.disclaimer": "Paper trading on Rialo testnet · DYOR",
	"login.welcome": "Connect your wallet",
	"login.create": "Create your account",
	"login.signinHint": "Your wallet address is your Probly account. MetaMask, Coinbase Wallet, WalletConnect, and other major wallets all work.",
	"login.signupHint": "Connecting does not spend crypto. Your in-app RIA wallet, balance, and prediction history stay with this account.",
	"login.continueWith": "Continue with {provider}",
	"login.orEmail": "or email",
	"login.username": "Username",
	"login.email": "Email",
	"login.password": "Password",
	"login.passwordHint": "At least 8 characters",
	"login.submitIn": "Sign in with email",
	"login.submitUp": "Create account",
	"login.noAccount": "Don't have an account? Sign up",
	"login.hasAccount": "Already have an account? Sign in",
	"login.disabled": "Sign-in is disabled.",
	"login.invalidEmail": "Enter a valid email address.",
	"login.shortPassword": "Password must be at least 8 characters.",
	"portfolio.title": "Portfolio",
	"portfolio.subtitle": "Your inbuilt wallet, stats, and open positions",
	"portfolio.signInTitle": "Sign in required",
	"portfolio.signInBody": "Sign in to open your inbuilt wallet, track positions, and see your streak.",
	"portfolio.wallet": "Inbuilt wallet",
	"portfolio.value": "Portfolio value",
	"portfolio.pnl": "Total P&L",
	"portfolio.positions": "Positions",
	"portfolio.history": "History",
	"portfolio.noPositions": "No open positions yet",
	"portfolio.browse": "Browse markets to start trading",
	"leaderboard.title": "Leaderboard",
	"leaderboard.subtitle": "Top traders on Probly ranked by profit",
	"leaderboard.rank": "Rank",
	"leaderboard.trader": "Trader",
	"leaderboard.volume": "Volume",
	"leaderboard.profit": "Profit",
	"leaderboard.trades": "Trades",
	"leaderboard.win": "Win",
	"leaderboard.empty": "No traders yet. Be the first to trade.",
	"leaderboard.tradesCount": "{n} trades",
	"stats.title": "Your stats",
	"stats.winRate": "Win rate",
	"stats.predictions": "Predictions",
	"stats.bestCategory": "Best category",
	"stats.streak": "Streak",
	"stats.rank": "Rank #{n}",
	"stats.locked": "Locked",
	"badge.first": "First Prediction",
	"badge.firstBlurb": "You placed your first trade.",
	"badge.ten": "10 Wins",
	"badge.tenBlurb": "Ten positions in the green.",
	"badge.top": "Top 10 Leaderboard",
	"badge.topBlurb": "You cracked the top ten.",
	"reaction.fire": "Fire",
	"reaction.eyes": "Watching",
	"reaction.skull": "Rekt",
	"create.title": "Create market",
	"create.subtitle": "Launch a yes/no market. Initial liquidity is taken from your inbuilt wallet.",
	"create.question": "Market question",
	"create.criteria": "Resolution criteria",
	"create.category": "Category",
	"create.selectCategory": "Select category",
	"create.endDate": "End date",
	"create.source": "Resolution source",
	"create.image": "Image URL (optional)",
	"create.liquidity": "Initial liquidity (RIA)",
	"create.minLiq": "Minimum 10 RIA.",
	"create.balance": "Balance: {balance} RIA",
	"create.cancel": "Cancel",
	"create.submit": "Create market",
	"create.creating": "Creating",
	"create.missing": "Missing fields",
	"create.missingBody": "Fill in all required fields.",
	"create.failed": "Could not create market",
	"create.success": "Market created",
	"create.signInTitle": "Sign in required",
	"create.signInBody": "You need to be signed in to create a prediction market.",
	"create.continue": "Sign in to continue",
	"create.signInError": "Sign in to create a market",
	"chart.empty": "No price history yet",
	"history.empty": "No trades yet",
	"position.shares": "Shares",
	"position.avg": "Avg Price",
	"position.current": "Current Price",
	"position.pnl": "P&L",
	"nav.nfts": "NFTs",
	"nav.settings": "Settings",
	"nft.kicker": "Live NFT markets",
	"nft.title": "NFT Predictions",
	"nft.subtitle": "Pump or dump a live floor, or call whether a mint sells out. Quotes are pulled from the market, not invented.",
	"nft.tabPump": "Pump or Dump",
	"nft.tabMint": "Sell Out or Not",
	"nft.create": "Create NFT market",
	"nft.empty": "No markets in this section yet",
	"nft.emptyBody": "Live quotes may still be loading, or you can create one.",
	"nft.back": "Back to NFT markets",
	"nft.notFound": "NFT market not found",
	"nft.floor": "Floor",
	"nft.floorChart": "Floor history",
	"nft.mintProgress": "Mint progress",
	"nft.countdown": "Countdown",
	"nft.ended": "Closed",
	"nft.pump": "Pump",
	"nft.dump": "Dump",
	"nft.sellOut": "Sell out",
	"nft.wont": "Won't sell out",
	"nft.predictPump": "Predict Pump",
	"nft.predictDump": "Predict Dump",
	"nft.predictSell": "Predict Sell Out",
	"nft.predictWont": "Predict Won't",
	"nft.primitive.native_https": "Native HTTPS",
	"nft.primitive.conditional_tx": "Conditional Transactions",
	"nft.primitive.async_await": "Async Await",
	"nft.primitive.rex": "REX",
	"nft.hint.native_https": "Live floor and mint reads land onchain over native HTTPS, without an oracle middleman.",
	"nft.hint.conditional_tx": "Payouts are conditional transactions — they only move once the real outcome is in.",
	"nft.hint.async_await": "The market waits across blocks until the deadline. No keeper bot has to poke settlement.",
	"nft.hint.rex": "A sealed pool. Individual stakes stay hidden until the market resolves.",
	"nft.live": "Live",
	"nft.manual": "Manual quote",
	"nft.awaiting": "Awaiting quote",
	"nft.resolved": "Resolved",
	"nft.resolvedAs": "Resolved {outcome}",
	"nft.share": "Share result",
	"nft.floorNote": "Anchors are CoinGecko floor-change windows (24h through 60d), plus quotes saved while this market is open.",
	"nft.rexNote": "Other traders' stake sizes stay off this page until resolution.",
	"nft.openPrint": "Open print",
	"nft.mintPrice": "Mint price",
	"nft.void": "Void",
	"nft.createTitle": "Create an NFT market",
	"nft.createSubtitle": "Pick pump-or-dump or sell-out, point at a collection, and set a deadline. It shows up in that section.",
	"nft.collectionName": "Collection name",
	"nft.lookupPump": "CoinGecko id or Magic Eden symbol",
	"nft.lookupMint": "Launchpad symbol or collection address",
	"nft.floorManual": "Floor if lookup misses",
	"nft.currency": "Currency",
	"nft.supply": "Supply",
	"nft.mintedNow": "Minted so far",
	"nft.submit": "Create NFT market",
	"nft.signInBody": "Sign in to open an NFT prediction for everyone else.",
	"nft.primitive": "Rialo resolution primitive",
	"settings.title": "Settings",
	"settings.subtitle": "Update how you show up. The preview matches what other traders will see.",
	"settings.username": "Username",
	"settings.photo": "Profile picture",
	"settings.photoHint": "Square crop, saved with your account.",
	"settings.save": "Save profile",
	"settings.saving": "Saving",
	"settings.saved": "Profile updated",
	"settings.removePhoto": "Remove photo",
	"settings.preview": "Live preview",
	"settings.signInTitle": "Sign in required",
	"settings.signInBody": "Sign in to edit your username and photo.",
	"settings.photoError": "Choose an image file.",
	"settings.nameError": "Username needs at least 2 characters.",
	"settings.failed": "Could not save profile"
};
var DICTS = {
	en,
	es: {
		"nav.markets": "Mercados",
		"nav.portfolio": "Cartera",
		"nav.leaderboard": "Clasificación",
		"nav.create": "Crear",
		"nav.createMarket": "Crear mercado",
		"nav.signIn": "Iniciar sesión",
		"nav.closeMenu": "Cerrar menú",
		"nav.openMenu": "Abrir menú",
		"theme.toLight": "Cambiar a modo claro",
		"theme.toDark": "Cambiar a modo oscuro",
		"language.label": "Idioma",
		"faucet.label": "Faucet",
		"faucet.claiming": "Reclamando",
		"faucet.claimed": "Reclamado",
		"faucet.copied": "Dirección copiada",
		"home.live": "Mercados en vivo",
		"home.title": "Mercados de predicción",
		"home.subtitle": "Opera sobre eventos reales con una cartera RIA integrada. Rápido, transparente y en papel.",
		"stats.volume": "Volumen total",
		"stats.active": "Mercados activos",
		"stats.traders": "Operadores",
		"stats.trades24h": "Operaciones (24 h)",
		"hot.title": "Populares en las últimas 24 h",
		"yes": "Sí",
		"no": "No",
		"buyYes": "Comprar Sí",
		"buyNo": "Comprar No",
		"vol": "Vol",
		"category.all": "Todos",
		"category.crypto": "Cripto",
		"category.politics": "Política",
		"category.sports": "Deportes",
		"category.entertainment": "Entretenimiento",
		"category.tech": "Tecnología",
		"category.science": "Ciencia",
		"category.economics": "Economía",
		"grid.emptyTitle": "No hay mercados",
		"grid.emptyBody": "Prueba otra categoría o vuelve más tarde.",
		"market.notFound": "Mercado no encontrado",
		"market.back": "Volver a mercados",
		"market.active": "Activo",
		"market.ends": "Termina {date}",
		"market.sentiment": "Sentimiento en el tiempo",
		"market.resolution": "Criterios de resolución",
		"market.resolutionSource": "Fuente de resolución:",
		"market.stats": "Estadísticas",
		"market.volume": "Volumen",
		"market.activity24h": "Actividad 24 h",
		"market.created": "Creado",
		"market.endDate": "Fecha de cierre",
		"market.share": "Compartir tarjeta en X",
		"market.shared": "Tarjeta lista para publicar",
		"market.downloaded": "Tarjeta descargada — X está abierto",
		"market.shareError": "No se pudo compartir",
		"comments.title": "Discusión",
		"comments.placeholder": "Comparte tu tesis…",
		"comments.post": "Publicar",
		"comments.signIn": "Inicia sesión",
		"comments.join": "para unirte a la discusión.",
		"comments.empty": "Aún no hay comentarios.",
		"comments.delete": "Eliminar comentario",
		"comments.signInError": "Inicia sesión para comentar",
		"comments.deleteError": "No se pudo eliminar",
		"trade.title": "Operar",
		"trade.amount": "Cantidad (RIA)",
		"trade.wallet": "Cartera integrada: {balance} RIA",
		"trade.provisioning": "Creando cartera…",
		"trade.signInWallet": "para usar tu cartera integrada.",
		"trade.shares": "Acciones",
		"trade.avgPrice": "Precio medio",
		"trade.return": "Retorno potencial",
		"trade.processing": "Procesando",
		"trade.signIn": "Inicia sesión para operar",
		"trade.buy": "Comprar {side}",
		"trade.disclaimer": "Se liquida desde tu cartera RIA · DYOR",
		"trade.invalid": "Cantidad no válida",
		"trade.invalidBody": "Introduce una cantidad válida.",
		"trade.failed": "Operación fallida",
		"trade.executed": "Operación ejecutada",
		"challenge.weekly": "Reto semanal",
		"challenge.title": "Tres predicciones esta semana",
		"challenge.body": "Haz {n} operaciones esta semana y gana {bonus} RIA.",
		"challenge.claimed": "Bono reclamado",
		"challenge.claim": "Reclamar {amount} RIA",
		"challenge.signIn": "Inicia sesión para reclamar el bono",
		"footer.tagline": "Probly — mercados de predicción",
		"footer.disclaimer": "Trading de papel en testnet Rialo · DYOR",
		"login.welcome": "Bienvenido de nuevo",
		"login.create": "Crea tu cuenta",
		"login.signinHint": "Inicia sesión para operar, comentar y seguir tu racha.",
		"login.signupHint": "Se crea una cartera RIA en el momento de unirte.",
		"login.continueWith": "Continuar con {provider}",
		"login.orEmail": "o email",
		"login.username": "Usuario",
		"login.email": "Email",
		"login.password": "Contraseña",
		"login.passwordHint": "Al menos 8 caracteres",
		"login.submitIn": "Entrar con email",
		"login.submitUp": "Crear cuenta",
		"login.noAccount": "¿No tienes cuenta? Regístrate",
		"login.hasAccount": "¿Ya tienes cuenta? Inicia sesión",
		"login.disabled": "El inicio de sesión está desactivado.",
		"login.invalidEmail": "Introduce un email válido.",
		"login.shortPassword": "La contraseña debe tener al menos 8 caracteres.",
		"portfolio.title": "Cartera",
		"portfolio.subtitle": "Tu cartera integrada, estadísticas y posiciones",
		"portfolio.signInTitle": "Inicia sesión",
		"portfolio.signInBody": "Entra para abrir tu cartera, ver posiciones y tu racha.",
		"portfolio.wallet": "Cartera integrada",
		"portfolio.value": "Valor de la cartera",
		"portfolio.pnl": "P&L total",
		"portfolio.positions": "Posiciones",
		"portfolio.history": "Historial",
		"portfolio.noPositions": "Aún no hay posiciones abiertas",
		"portfolio.browse": "Explora mercados para empezar",
		"leaderboard.title": "Clasificación",
		"leaderboard.subtitle": "Mejores operadores de Probly por beneficio",
		"leaderboard.rank": "Puesto",
		"leaderboard.trader": "Operador",
		"leaderboard.volume": "Volumen",
		"leaderboard.profit": "Beneficio",
		"leaderboard.trades": "Ops.",
		"leaderboard.win": "Acierto",
		"leaderboard.empty": "Aún no hay operadores. Sé el primero.",
		"leaderboard.tradesCount": "{n} operaciones",
		"stats.title": "Tus estadísticas",
		"stats.winRate": "Tasa de acierto",
		"stats.predictions": "Predicciones",
		"stats.bestCategory": "Mejor categoría",
		"stats.streak": "Racha",
		"stats.rank": "Puesto #{n}",
		"stats.locked": "Bloqueada",
		"badge.first": "Primera predicción",
		"badge.firstBlurb": "Hiciste tu primera operación.",
		"badge.ten": "10 aciertos",
		"badge.tenBlurb": "Diez posiciones en verde.",
		"badge.top": "Top 10",
		"badge.topBlurb": "Entraste en el top diez.",
		"reaction.fire": "Fuego",
		"reaction.eyes": "Mirando",
		"reaction.skull": "Rekt",
		"create.title": "Crear mercado",
		"create.subtitle": "Lanza un mercado sí/no. La liquidez inicial sale de tu cartera.",
		"create.question": "Pregunta del mercado",
		"create.criteria": "Criterios de resolución",
		"create.category": "Categoría",
		"create.selectCategory": "Elige categoría",
		"create.endDate": "Fecha de cierre",
		"create.source": "Fuente de resolución",
		"create.image": "URL de imagen (opcional)",
		"create.liquidity": "Liquidez inicial (RIA)",
		"create.minLiq": "Mínimo 10 RIA.",
		"create.balance": "Saldo: {balance} RIA",
		"create.cancel": "Cancelar",
		"create.submit": "Crear mercado",
		"create.creating": "Creando",
		"create.missing": "Faltan campos",
		"create.missingBody": "Completa todos los campos obligatorios.",
		"create.failed": "No se pudo crear el mercado",
		"create.success": "Mercado creado",
		"create.signInTitle": "Inicia sesión",
		"create.signInBody": "Necesitas una cuenta para crear un mercado.",
		"create.continue": "Inicia sesión para continuar",
		"create.signInError": "Inicia sesión para crear un mercado",
		"chart.empty": "Aún no hay historial de precios",
		"history.empty": "Aún no hay operaciones",
		"position.shares": "Acciones",
		"position.avg": "Precio medio",
		"position.current": "Precio actual",
		"position.pnl": "P&L"
	},
	fr: {
		"nav.markets": "Marchés",
		"nav.portfolio": "Portefeuille",
		"nav.leaderboard": "Classement",
		"nav.create": "Créer",
		"nav.createMarket": "Créer un marché",
		"nav.signIn": "Connexion",
		"nav.closeMenu": "Fermer le menu",
		"nav.openMenu": "Ouvrir le menu",
		"theme.toLight": "Passer en mode clair",
		"theme.toDark": "Passer en mode sombre",
		"language.label": "Langue",
		"faucet.label": "Faucet",
		"faucet.claiming": "Réclamation",
		"faucet.claimed": "Réclamé",
		"faucet.copied": "Adresse copiée",
		"home.live": "Marchés en direct",
		"home.title": "Marchés de prédiction",
		"home.subtitle": "Tradez des événements réels avec un portefeuille RIA intégré. Rapide, transparent, papier.",
		"stats.volume": "Volume total",
		"stats.active": "Marchés actifs",
		"stats.traders": "Traders",
		"stats.trades24h": "Trades (24 h)",
		"hot.title": "Populaires sur 24 h",
		"yes": "Oui",
		"no": "Non",
		"buyYes": "Acheter Oui",
		"buyNo": "Acheter Non",
		"vol": "Vol",
		"category.all": "Tous",
		"category.crypto": "Crypto",
		"category.politics": "Politique",
		"category.sports": "Sport",
		"category.entertainment": "Divertissement",
		"category.tech": "Tech",
		"category.science": "Science",
		"category.economics": "Économie",
		"grid.emptyTitle": "Aucun marché",
		"grid.emptyBody": "Essayez une autre catégorie ou revenez plus tard.",
		"market.notFound": "Marché introuvable",
		"market.back": "Retour aux marchés",
		"market.active": "Actif",
		"market.ends": "Fin {date}",
		"market.sentiment": "Sentiment dans le temps",
		"market.resolution": "Critères de résolution",
		"market.resolutionSource": "Source de résolution :",
		"market.stats": "Statistiques",
		"market.volume": "Volume",
		"market.activity24h": "Activité 24 h",
		"market.created": "Créé",
		"market.endDate": "Date de fin",
		"market.share": "Partager la carte sur X",
		"market.shared": "Carte prête à publier",
		"market.downloaded": "Carte téléchargée — X est ouvert",
		"market.shareError": "Partage impossible",
		"comments.title": "Discussion",
		"comments.placeholder": "Partagez votre thèse…",
		"comments.post": "Publier",
		"comments.signIn": "Connectez-vous",
		"comments.join": "pour rejoindre la discussion.",
		"comments.empty": "Pas encore de commentaires.",
		"comments.delete": "Supprimer le commentaire",
		"comments.signInError": "Connectez-vous pour commenter",
		"comments.deleteError": "Suppression impossible",
		"trade.title": "Trader",
		"trade.amount": "Montant (RIA)",
		"trade.wallet": "Portefeuille intégré : {balance} RIA",
		"trade.provisioning": "Création du portefeuille…",
		"trade.signInWallet": "pour utiliser votre portefeuille intégré.",
		"trade.shares": "Parts",
		"trade.avgPrice": "Prix moyen",
		"trade.return": "Rendement potentiel",
		"trade.processing": "Traitement",
		"trade.signIn": "Connectez-vous pour trader",
		"trade.buy": "Acheter {side}",
		"trade.disclaimer": "Réglé depuis votre portefeuille RIA · DYOR",
		"trade.invalid": "Montant invalide",
		"trade.invalidBody": "Entrez un montant valide.",
		"trade.failed": "Trade échoué",
		"trade.executed": "Trade exécuté",
		"challenge.weekly": "Défi hebdo",
		"challenge.title": "Trois prédictions cette semaine",
		"challenge.body": "Placez {n} trades cette semaine pour {bonus} RIA.",
		"challenge.claimed": "Bonus réclamé",
		"challenge.claim": "Réclamer {amount} RIA",
		"challenge.signIn": "Connectez-vous pour réclamer",
		"footer.tagline": "Probly — marchés de prédiction",
		"footer.disclaimer": "Paper trading sur le testnet Rialo · DYOR",
		"login.welcome": "Bon retour",
		"login.create": "Créer un compte",
		"login.signinHint": "Connectez-vous pour trader, commenter et suivre votre série.",
		"login.signupHint": "Un portefeuille RIA est créé dès votre inscription.",
		"login.continueWith": "Continuer avec {provider}",
		"login.orEmail": "ou e-mail",
		"login.username": "Identifiant",
		"login.email": "E-mail",
		"login.password": "Mot de passe",
		"login.passwordHint": "Au moins 8 caractères",
		"login.submitIn": "Connexion par e-mail",
		"login.submitUp": "Créer le compte",
		"login.noAccount": "Pas de compte ? Inscrivez-vous",
		"login.hasAccount": "Déjà un compte ? Connectez-vous",
		"login.disabled": "La connexion est désactivée.",
		"login.invalidEmail": "Entrez un e-mail valide.",
		"login.shortPassword": "Le mot de passe doit faire au moins 8 caractères.",
		"portfolio.title": "Portefeuille",
		"portfolio.subtitle": "Portefeuille intégré, stats et positions",
		"portfolio.signInTitle": "Connexion requise",
		"portfolio.signInBody": "Connectez-vous pour ouvrir votre portefeuille et suivre vos positions.",
		"portfolio.wallet": "Portefeuille intégré",
		"portfolio.value": "Valeur du portefeuille",
		"portfolio.pnl": "P&L total",
		"portfolio.positions": "Positions",
		"portfolio.history": "Historique",
		"portfolio.noPositions": "Aucune position ouverte",
		"portfolio.browse": "Parcourir les marchés",
		"leaderboard.title": "Classement",
		"leaderboard.subtitle": "Meilleurs traders Probly au P&L",
		"leaderboard.rank": "Rang",
		"leaderboard.trader": "Trader",
		"leaderboard.volume": "Volume",
		"leaderboard.profit": "Profit",
		"leaderboard.trades": "Trades",
		"leaderboard.win": "Gain",
		"leaderboard.empty": "Aucun trader. Soyez le premier.",
		"leaderboard.tradesCount": "{n} trades",
		"stats.title": "Vos stats",
		"stats.winRate": "Taux de gain",
		"stats.predictions": "Prédictions",
		"stats.bestCategory": "Meilleure catégorie",
		"stats.streak": "Série",
		"stats.rank": "Rang #{n}",
		"stats.locked": "Verrouillé",
		"badge.first": "Première prédiction",
		"badge.firstBlurb": "Vous avez placé votre premier trade.",
		"badge.ten": "10 victoires",
		"badge.tenBlurb": "Dix positions dans le vert.",
		"badge.top": "Top 10",
		"badge.topBlurb": "Vous êtes dans le top dix.",
		"reaction.fire": "Feu",
		"reaction.eyes": "Je regarde",
		"reaction.skull": "Rekt",
		"create.title": "Créer un marché",
		"create.subtitle": "Lancez un marché oui/non. La liquidité initiale vient de votre portefeuille.",
		"create.question": "Question du marché",
		"create.criteria": "Critères de résolution",
		"create.category": "Catégorie",
		"create.selectCategory": "Choisir une catégorie",
		"create.endDate": "Date de fin",
		"create.source": "Source de résolution",
		"create.image": "URL d’image (optionnel)",
		"create.liquidity": "Liquidité initiale (RIA)",
		"create.minLiq": "Minimum 10 RIA.",
		"create.balance": "Solde : {balance} RIA",
		"create.cancel": "Annuler",
		"create.submit": "Créer le marché",
		"create.creating": "Création",
		"create.missing": "Champs manquants",
		"create.missingBody": "Remplissez tous les champs requis.",
		"create.failed": "Création impossible",
		"create.success": "Marché créé",
		"create.signInTitle": "Connexion requise",
		"create.signInBody": "Connectez-vous pour créer un marché.",
		"create.continue": "Se connecter pour continuer",
		"create.signInError": "Connectez-vous pour créer un marché",
		"chart.empty": "Pas encore d’historique",
		"history.empty": "Pas encore de trades",
		"position.shares": "Parts",
		"position.avg": "Prix moyen",
		"position.current": "Prix actuel",
		"position.pnl": "P&L"
	},
	pt: {
		"nav.markets": "Mercados",
		"nav.portfolio": "Carteira",
		"nav.leaderboard": "Ranking",
		"nav.create": "Criar",
		"nav.createMarket": "Criar mercado",
		"nav.signIn": "Entrar",
		"nav.closeMenu": "Fechar menu",
		"nav.openMenu": "Abrir menu",
		"theme.toLight": "Mudar para modo claro",
		"theme.toDark": "Mudar para modo escuro",
		"language.label": "Idioma",
		"faucet.label": "Faucet",
		"faucet.claiming": "Resgatando",
		"faucet.claimed": "Resgatado",
		"faucet.copied": "Endereço copiado",
		"home.live": "Mercados ao vivo",
		"home.title": "Mercados de previsão",
		"home.subtitle": "Negocie eventos reais com uma carteira RIA integrada. Rápido, transparente e em papel.",
		"stats.volume": "Volume total",
		"stats.active": "Mercados ativos",
		"stats.traders": "Traders",
		"stats.trades24h": "Trades (24 h)",
		"hot.title": "Em alta nas últimas 24 h",
		"yes": "Sim",
		"no": "Não",
		"buyYes": "Comprar Sim",
		"buyNo": "Comprar Não",
		"vol": "Vol",
		"category.all": "Todos",
		"category.crypto": "Cripto",
		"category.politics": "Política",
		"category.sports": "Esportes",
		"category.entertainment": "Entretenimento",
		"category.tech": "Tech",
		"category.science": "Ciência",
		"category.economics": "Economia",
		"grid.emptyTitle": "Nenhum mercado",
		"grid.emptyBody": "Tente outra categoria ou volte mais tarde.",
		"market.notFound": "Mercado não encontrado",
		"market.back": "Voltar aos mercados",
		"market.active": "Ativo",
		"market.ends": "Termina {date}",
		"market.sentiment": "Sentimento ao longo do tempo",
		"market.resolution": "Critérios de resolução",
		"market.resolutionSource": "Fonte de resolução:",
		"market.stats": "Estatísticas",
		"market.volume": "Volume",
		"market.activity24h": "Atividade 24 h",
		"market.created": "Criado",
		"market.endDate": "Data final",
		"market.share": "Compartilhar card no X",
		"market.shared": "Card pronto para postar",
		"market.downloaded": "Card baixado — X está aberto",
		"market.shareError": "Não foi possível compartilhar",
		"comments.title": "Discussão",
		"comments.placeholder": "Compartilhe sua tese…",
		"comments.post": "Publicar",
		"comments.signIn": "Entre",
		"comments.join": "para participar da discussão.",
		"comments.empty": "Ainda não há comentários.",
		"comments.delete": "Excluir comentário",
		"comments.signInError": "Entre para comentar",
		"comments.deleteError": "Não foi possível excluir",
		"trade.title": "Negociar",
		"trade.amount": "Valor (RIA)",
		"trade.wallet": "Carteira integrada: {balance} RIA",
		"trade.provisioning": "Criando carteira…",
		"trade.signInWallet": "para usar sua carteira integrada.",
		"trade.shares": "Cotas",
		"trade.avgPrice": "Preço médio",
		"trade.return": "Retorno potencial",
		"trade.processing": "Processando",
		"trade.signIn": "Entre para negociar",
		"trade.buy": "Comprar {side}",
		"trade.disclaimer": "Liquidado da sua carteira RIA · DYOR",
		"trade.invalid": "Valor inválido",
		"trade.invalidBody": "Digite um valor válido.",
		"trade.failed": "Trade falhou",
		"trade.executed": "Trade executado",
		"challenge.weekly": "Desafio semanal",
		"challenge.title": "Três previsões nesta semana",
		"challenge.body": "Faça {n} trades nesta semana e ganhe {bonus} RIA.",
		"challenge.claimed": "Bônus resgatado",
		"challenge.claim": "Resgatar {amount} RIA",
		"challenge.signIn": "Entre para resgatar o bônus",
		"footer.tagline": "Probly — mercados de previsão",
		"footer.disclaimer": "Paper trading na testnet Rialo · DYOR",
		"login.welcome": "Bem-vindo de volta",
		"login.create": "Crie sua conta",
		"login.signinHint": "Entre para negociar, comentar e acompanhar sua sequência.",
		"login.signupHint": "Uma carteira RIA é criada no momento em que você entra.",
		"login.continueWith": "Continuar com {provider}",
		"login.orEmail": "ou e-mail",
		"login.username": "Usuário",
		"login.email": "E-mail",
		"login.password": "Senha",
		"login.passwordHint": "Pelo menos 8 caracteres",
		"login.submitIn": "Entrar com e-mail",
		"login.submitUp": "Criar conta",
		"login.noAccount": "Não tem conta? Cadastre-se",
		"login.hasAccount": "Já tem conta? Entrar",
		"login.disabled": "O login está desativado.",
		"login.invalidEmail": "Digite um e-mail válido.",
		"login.shortPassword": "A senha deve ter pelo menos 8 caracteres.",
		"portfolio.title": "Carteira",
		"portfolio.subtitle": "Carteira integrada, estatísticas e posições",
		"portfolio.signInTitle": "Login necessário",
		"portfolio.signInBody": "Entre para abrir sua carteira, ver posições e sua sequência.",
		"portfolio.wallet": "Carteira integrada",
		"portfolio.value": "Valor da carteira",
		"portfolio.pnl": "P&L total",
		"portfolio.positions": "Posições",
		"portfolio.history": "Histórico",
		"portfolio.noPositions": "Nenhuma posição aberta",
		"portfolio.browse": "Ver mercados para começar",
		"leaderboard.title": "Ranking",
		"leaderboard.subtitle": "Melhores traders da Probly por lucro",
		"leaderboard.rank": "Posição",
		"leaderboard.trader": "Trader",
		"leaderboard.volume": "Volume",
		"leaderboard.profit": "Lucro",
		"leaderboard.trades": "Trades",
		"leaderboard.win": "Acerto",
		"leaderboard.empty": "Ainda não há traders. Seja o primeiro.",
		"leaderboard.tradesCount": "{n} trades",
		"stats.title": "Suas estatísticas",
		"stats.winRate": "Taxa de acerto",
		"stats.predictions": "Previsões",
		"stats.bestCategory": "Melhor categoria",
		"stats.streak": "Sequência",
		"stats.rank": "Posição #{n}",
		"stats.locked": "Bloqueada",
		"badge.first": "Primeira previsão",
		"badge.firstBlurb": "Você fez o primeiro trade.",
		"badge.ten": "10 vitórias",
		"badge.tenBlurb": "Dez posições no verde.",
		"badge.top": "Top 10",
		"badge.topBlurb": "Você entrou no top dez.",
		"reaction.fire": "Fogo",
		"reaction.eyes": "De olho",
		"reaction.skull": "Rekt",
		"create.title": "Criar mercado",
		"create.subtitle": "Lance um mercado sim/não. A liquidez inicial sai da sua carteira.",
		"create.question": "Pergunta do mercado",
		"create.criteria": "Critérios de resolução",
		"create.category": "Categoria",
		"create.selectCategory": "Selecione a categoria",
		"create.endDate": "Data final",
		"create.source": "Fonte de resolução",
		"create.image": "URL da imagem (opcional)",
		"create.liquidity": "Liquidez inicial (RIA)",
		"create.minLiq": "Mínimo 10 RIA.",
		"create.balance": "Saldo: {balance} RIA",
		"create.cancel": "Cancelar",
		"create.submit": "Criar mercado",
		"create.creating": "Criando",
		"create.missing": "Campos faltando",
		"create.missingBody": "Preencha todos os campos obrigatórios.",
		"create.failed": "Não foi possível criar",
		"create.success": "Mercado criado",
		"create.signInTitle": "Login necessário",
		"create.signInBody": "Você precisa entrar para criar um mercado.",
		"create.continue": "Entrar para continuar",
		"create.signInError": "Entre para criar um mercado",
		"chart.empty": "Ainda sem histórico de preços",
		"history.empty": "Ainda sem trades",
		"position.shares": "Cotas",
		"position.avg": "Preço médio",
		"position.current": "Preço atual",
		"position.pnl": "P&L"
	},
	de: {
		"nav.markets": "Märkte",
		"nav.portfolio": "Portfolio",
		"nav.leaderboard": "Rangliste",
		"nav.create": "Erstellen",
		"nav.createMarket": "Markt erstellen",
		"nav.signIn": "Anmelden",
		"nav.closeMenu": "Menü schließen",
		"nav.openMenu": "Menü öffnen",
		"theme.toLight": "Zum hellen Modus",
		"theme.toDark": "Zum dunklen Modus",
		"language.label": "Sprache",
		"faucet.label": "Faucet",
		"faucet.claiming": "Wird geholt",
		"faucet.claimed": "Geholt",
		"faucet.copied": "Adresse kopiert",
		"home.live": "Live-Märkte",
		"home.title": "Prediction Markets",
		"home.subtitle": "Handle auf reale Ereignisse mit integrierter RIA-Wallet. Schnell, transparent, Paper.",
		"stats.volume": "Gesamtvolumen",
		"stats.active": "Aktive Märkte",
		"stats.traders": "Trader",
		"stats.trades24h": "Trades (24 Std.)",
		"hot.title": "Heiß in den letzten 24 Std.",
		"yes": "Ja",
		"no": "Nein",
		"buyYes": "Ja kaufen",
		"buyNo": "Nein kaufen",
		"vol": "Vol",
		"category.all": "Alle",
		"category.crypto": "Krypto",
		"category.politics": "Politik",
		"category.sports": "Sport",
		"category.entertainment": "Unterhaltung",
		"category.tech": "Tech",
		"category.science": "Wissenschaft",
		"category.economics": "Wirtschaft",
		"grid.emptyTitle": "Keine Märkte",
		"grid.emptyBody": "Andere Kategorie wählen oder später wiederkommen.",
		"market.notFound": "Markt nicht gefunden",
		"market.back": "Zurück zu Märkten",
		"market.active": "Aktiv",
		"market.ends": "Endet {date}",
		"market.sentiment": "Stimmung im Zeitverlauf",
		"market.resolution": "Auflösungskriterien",
		"market.resolutionSource": "Auflösungsquelle:",
		"market.stats": "Marktstatistik",
		"market.volume": "Volumen",
		"market.activity24h": "24-Std.-Aktivität",
		"market.created": "Erstellt",
		"market.endDate": "Enddatum",
		"market.share": "Karte auf X teilen",
		"market.shared": "Karte bereit zum Posten",
		"market.downloaded": "Karte geladen — X ist offen",
		"market.shareError": "Teilen fehlgeschlagen",
		"comments.title": "Diskussion",
		"comments.placeholder": "Teile deine These…",
		"comments.post": "Posten",
		"comments.signIn": "Anmelden",
		"comments.join": "um mitzudiskutieren.",
		"comments.empty": "Noch keine Kommentare.",
		"comments.delete": "Kommentar löschen",
		"comments.signInError": "Zum Kommentieren anmelden",
		"comments.deleteError": "Löschen fehlgeschlagen",
		"trade.title": "Handeln",
		"trade.amount": "Betrag (RIA)",
		"trade.wallet": "Integrierte Wallet: {balance} RIA",
		"trade.provisioning": "Wallet wird erstellt…",
		"trade.signInWallet": "um deine integrierte Wallet zu nutzen.",
		"trade.shares": "Anteile",
		"trade.avgPrice": "Durchschnittspreis",
		"trade.return": "Potenzieller Ertrag",
		"trade.processing": "Wird verarbeitet",
		"trade.signIn": "Zum Handeln anmelden",
		"trade.buy": "{side} kaufen",
		"trade.disclaimer": "Abwicklung über deine RIA-Wallet · DYOR",
		"trade.invalid": "Ungültiger Betrag",
		"trade.invalidBody": "Gib einen gültigen Betrag ein.",
		"trade.failed": "Trade fehlgeschlagen",
		"trade.executed": "Trade ausgeführt",
		"challenge.weekly": "Wochen-Challenge",
		"challenge.title": "Drei Prognosen diese Woche",
		"challenge.body": "Platziere {n} Trades diese Woche für {bonus} RIA.",
		"challenge.claimed": "Bonus geholt",
		"challenge.claim": "{amount} RIA holen",
		"challenge.signIn": "Zum Holen anmelden",
		"footer.tagline": "Probly — Prediction Markets",
		"footer.disclaimer": "Paper Trading auf Rialo-Testnet · DYOR",
		"login.welcome": "Willkommen zurück",
		"login.create": "Konto erstellen",
		"login.signinHint": "Anmelden zum Handeln, Kommentieren und für die Serie.",
		"login.signupHint": "Beim Beitritt wird eine RIA-Wallet angelegt.",
		"login.continueWith": "Weiter mit {provider}",
		"login.orEmail": "oder E-Mail",
		"login.username": "Benutzername",
		"login.email": "E-Mail",
		"login.password": "Passwort",
		"login.passwordHint": "Mindestens 8 Zeichen",
		"login.submitIn": "Mit E-Mail anmelden",
		"login.submitUp": "Konto erstellen",
		"login.noAccount": "Kein Konto? Registrieren",
		"login.hasAccount": "Schon ein Konto? Anmelden",
		"login.disabled": "Anmeldung ist deaktiviert.",
		"login.invalidEmail": "Gültige E-Mail eingeben.",
		"login.shortPassword": "Passwort mindestens 8 Zeichen.",
		"portfolio.title": "Portfolio",
		"portfolio.subtitle": "Integrierte Wallet, Stats und Positionen",
		"portfolio.signInTitle": "Anmeldung nötig",
		"portfolio.signInBody": "Melde dich an, um Wallet, Positionen und Serie zu sehen.",
		"portfolio.wallet": "Integrierte Wallet",
		"portfolio.value": "Portfoliowert",
		"portfolio.pnl": "Gesamt-P&L",
		"portfolio.positions": "Positionen",
		"portfolio.history": "Verlauf",
		"portfolio.noPositions": "Keine offenen Positionen",
		"portfolio.browse": "Märkte durchsuchen",
		"leaderboard.title": "Rangliste",
		"leaderboard.subtitle": "Top-Trader auf Probly nach Gewinn",
		"leaderboard.rank": "Rang",
		"leaderboard.trader": "Trader",
		"leaderboard.volume": "Volumen",
		"leaderboard.profit": "Gewinn",
		"leaderboard.trades": "Trades",
		"leaderboard.win": "Quote",
		"leaderboard.empty": "Noch keine Trader. Sei der Erste.",
		"leaderboard.tradesCount": "{n} Trades",
		"stats.title": "Deine Stats",
		"stats.winRate": "Trefferquote",
		"stats.predictions": "Prognosen",
		"stats.bestCategory": "Beste Kategorie",
		"stats.streak": "Serie",
		"stats.rank": "Rang #{n}",
		"stats.locked": "Gesperrt",
		"badge.first": "Erste Prognose",
		"badge.firstBlurb": "Du hast deinen ersten Trade platziert.",
		"badge.ten": "10 Siege",
		"badge.tenBlurb": "Zehn Positionen im Plus.",
		"badge.top": "Top 10",
		"badge.topBlurb": "Du bist in den Top Ten.",
		"reaction.fire": "Feuer",
		"reaction.eyes": "Beobachte",
		"reaction.skull": "Rekt",
		"create.title": "Markt erstellen",
		"create.subtitle": "Starte einen Ja/Nein-Markt. Startliquidität kommt aus deiner Wallet.",
		"create.question": "Marktfrage",
		"create.criteria": "Auflösungskriterien",
		"create.category": "Kategorie",
		"create.selectCategory": "Kategorie wählen",
		"create.endDate": "Enddatum",
		"create.source": "Auflösungsquelle",
		"create.image": "Bild-URL (optional)",
		"create.liquidity": "Startliquidität (RIA)",
		"create.minLiq": "Mindestens 10 RIA.",
		"create.balance": "Saldo: {balance} RIA",
		"create.cancel": "Abbrechen",
		"create.submit": "Markt erstellen",
		"create.creating": "Wird erstellt",
		"create.missing": "Felder fehlen",
		"create.missingBody": "Bitte alle Pflichtfelder ausfüllen.",
		"create.failed": "Markt konnte nicht erstellt werden",
		"create.success": "Markt erstellt",
		"create.signInTitle": "Anmeldung nötig",
		"create.signInBody": "Zum Erstellen eines Marktes anmelden.",
		"create.continue": "Anmelden und weiter",
		"create.signInError": "Zum Erstellen anmelden",
		"chart.empty": "Noch kein Preisverlauf",
		"history.empty": "Noch keine Trades",
		"position.shares": "Anteile",
		"position.avg": "Durchschnittspreis",
		"position.current": "Aktueller Preis",
		"position.pnl": "P&L"
	},
	zh: {
		"nav.markets": "市场",
		"nav.portfolio": "资产",
		"nav.leaderboard": "排行榜",
		"nav.create": "创建",
		"nav.createMarket": "创建市场",
		"nav.signIn": "登录",
		"nav.closeMenu": "关闭菜单",
		"nav.openMenu": "打开菜单",
		"theme.toLight": "切换到浅色模式",
		"theme.toDark": "切换到深色模式",
		"language.label": "语言",
		"faucet.label": "水龙头",
		"faucet.claiming": "领取中",
		"faucet.claimed": "已领取",
		"faucet.copied": "已复制钱包地址",
		"home.live": "实时市场",
		"home.title": "预测市场",
		"home.subtitle": "用内置 RIA 钱包交易真实事件。快速、透明、纸面结算。",
		"stats.volume": "总成交额",
		"stats.active": "活跃市场",
		"stats.traders": "交易者",
		"stats.trades24h": "24 小时成交",
		"hot.title": "近 24 小时热门",
		"yes": "是",
		"no": "否",
		"buyYes": "买入是",
		"buyNo": "买入否",
		"vol": "成交",
		"category.all": "全部",
		"category.crypto": "加密",
		"category.politics": "政治",
		"category.sports": "体育",
		"category.entertainment": "娱乐",
		"category.tech": "科技",
		"category.science": "科学",
		"category.economics": "经济",
		"grid.emptyTitle": "没有市场",
		"grid.emptyBody": "试试其他分类，或稍后再来。",
		"market.notFound": "未找到市场",
		"market.back": "返回市场",
		"market.active": "进行中",
		"market.ends": "{date} 结束",
		"market.sentiment": "赔率走势",
		"market.resolution": "结算规则",
		"market.resolutionSource": "结算来源：",
		"market.stats": "市场数据",
		"market.volume": "成交额",
		"market.activity24h": "24 小时活跃",
		"market.created": "创建时间",
		"market.endDate": "结束日期",
		"market.share": "分享卡片到 X",
		"market.shared": "卡片已可发布",
		"market.downloaded": "已下载卡片 — X 已打开",
		"market.shareError": "无法分享",
		"comments.title": "讨论",
		"comments.placeholder": "写下你的观点…",
		"comments.post": "发布",
		"comments.signIn": "登录",
		"comments.join": "后参与讨论。",
		"comments.empty": "还没有评论。",
		"comments.delete": "删除评论",
		"comments.signInError": "登录后才能评论",
		"comments.deleteError": "无法删除评论",
		"trade.title": "交易",
		"trade.amount": "金额（RIA）",
		"trade.wallet": "内置钱包：{balance} RIA",
		"trade.provisioning": "正在开通钱包…",
		"trade.signInWallet": "以使用内置钱包。",
		"trade.shares": "份额",
		"trade.avgPrice": "均价",
		"trade.return": "潜在回报",
		"trade.processing": "处理中",
		"trade.signIn": "登录后交易",
		"trade.buy": "买入{side}",
		"trade.disclaimer": "从内置 RIA 钱包结算 · DYOR",
		"trade.invalid": "金额无效",
		"trade.invalidBody": "请输入有效金额。",
		"trade.failed": "交易失败",
		"trade.executed": "交易已成交",
		"challenge.weekly": "每周挑战",
		"challenge.title": "本周完成三次预测",
		"challenge.body": "本周完成 {n} 笔交易即可获得 {bonus} RIA。",
		"challenge.claimed": "奖励已领取",
		"challenge.claim": "领取 {amount} RIA",
		"challenge.signIn": "登录后领取奖励",
		"footer.tagline": "Probly — 预测市场",
		"footer.disclaimer": "Rialo 测试网纸面交易 · DYOR",
		"login.welcome": "欢迎回来",
		"login.create": "创建账户",
		"login.signinHint": "登录后交易、评论并追踪连胜。",
		"login.signupHint": "加入即可自动获得内置 RIA 钱包。",
		"login.continueWith": "使用 {provider} 继续",
		"login.orEmail": "或使用邮箱",
		"login.username": "用户名",
		"login.email": "邮箱",
		"login.password": "密码",
		"login.passwordHint": "至少 8 个字符",
		"login.submitIn": "邮箱登录",
		"login.submitUp": "创建账户",
		"login.noAccount": "没有账户？去注册",
		"login.hasAccount": "已有账户？去登录",
		"login.disabled": "登录已关闭。",
		"login.invalidEmail": "请输入有效邮箱。",
		"login.shortPassword": "密码至少 8 个字符。",
		"portfolio.title": "资产",
		"portfolio.subtitle": "内置钱包、数据和持仓",
		"portfolio.signInTitle": "需要登录",
		"portfolio.signInBody": "登录后查看钱包、持仓和连胜。",
		"portfolio.wallet": "内置钱包",
		"portfolio.value": "组合价值",
		"portfolio.pnl": "总盈亏",
		"portfolio.positions": "持仓",
		"portfolio.history": "历史",
		"portfolio.noPositions": "暂无持仓",
		"portfolio.browse": "去市场开始交易",
		"leaderboard.title": "排行榜",
		"leaderboard.subtitle": "按收益排名的 Probly 交易者",
		"leaderboard.rank": "名次",
		"leaderboard.trader": "交易者",
		"leaderboard.volume": "成交额",
		"leaderboard.profit": "收益",
		"leaderboard.trades": "笔数",
		"leaderboard.win": "胜率",
		"leaderboard.empty": "还没有交易者，来做第一名。",
		"leaderboard.tradesCount": "{n} 笔交易",
		"stats.title": "你的数据",
		"stats.winRate": "胜率",
		"stats.predictions": "预测次数",
		"stats.bestCategory": "最佳分类",
		"stats.streak": "连胜",
		"stats.rank": "第 {n} 名",
		"stats.locked": "未解锁",
		"badge.first": "首次预测",
		"badge.firstBlurb": "完成了第一笔交易。",
		"badge.ten": "10 胜",
		"badge.tenBlurb": "十个持仓处于盈利。",
		"badge.top": "十强",
		"badge.topBlurb": "进入排行榜前十。",
		"reaction.fire": "火",
		"reaction.eyes": "围观",
		"reaction.skull": "翻车",
		"create.title": "创建市场",
		"create.subtitle": "发起是/否市场。初始流动性从内置钱包扣除。",
		"create.question": "市场问题",
		"create.criteria": "结算规则",
		"create.category": "分类",
		"create.selectCategory": "选择分类",
		"create.endDate": "结束时间",
		"create.source": "结算来源",
		"create.image": "图片链接（可选）",
		"create.liquidity": "初始流动性（RIA）",
		"create.minLiq": "最少 10 RIA。",
		"create.balance": "余额：{balance} RIA",
		"create.cancel": "取消",
		"create.submit": "创建市场",
		"create.creating": "创建中",
		"create.missing": "缺少字段",
		"create.missingBody": "请填写所有必填项。",
		"create.failed": "无法创建市场",
		"create.success": "市场已创建",
		"create.signInTitle": "需要登录",
		"create.signInBody": "登录后才能创建预测市场。",
		"create.continue": "登录继续",
		"create.signInError": "登录后创建市场",
		"chart.empty": "暂无价格历史",
		"history.empty": "暂无成交",
		"position.shares": "份额",
		"position.avg": "均价",
		"position.current": "现价",
		"position.pnl": "盈亏"
	},
	ja: {
		"nav.markets": "マーケット",
		"nav.portfolio": "ポートフォリオ",
		"nav.leaderboard": "ランキング",
		"nav.create": "作成",
		"nav.createMarket": "マーケットを作成",
		"nav.signIn": "ログイン",
		"nav.closeMenu": "メニューを閉じる",
		"nav.openMenu": "メニューを開く",
		"theme.toLight": "ライトモードに切替",
		"theme.toDark": "ダークモードに切替",
		"language.label": "言語",
		"faucet.label": "フォーセット",
		"faucet.claiming": "受取中",
		"faucet.claimed": "受取済",
		"faucet.copied": "アドレスをコピーしました",
		"home.live": "ライブマーケット",
		"home.title": "予測マーケット",
		"home.subtitle": "内蔵 RIA ウォレットで現実の出来事に賭ける。速く、透明で、ペーパー決済。",
		"stats.volume": "総出来高",
		"stats.active": "アクティブ",
		"stats.traders": "トレーダー",
		"stats.trades24h": "取引（24時間）",
		"hot.title": "直近24時間の注目",
		"yes": "Yes",
		"no": "No",
		"buyYes": "Yes を買う",
		"buyNo": "No を買う",
		"vol": "出来高",
		"category.all": "すべて",
		"category.crypto": "暗号資産",
		"category.politics": "政治",
		"category.sports": "スポーツ",
		"category.entertainment": "エンタメ",
		"category.tech": "テック",
		"category.science": "科学",
		"category.economics": "経済",
		"grid.emptyTitle": "マーケットがありません",
		"grid.emptyBody": "別のカテゴリを試すか、後でもう一度どうぞ。",
		"market.notFound": "マーケットが見つかりません",
		"market.back": "マーケットに戻る",
		"market.active": "開催中",
		"market.ends": "{date} 終了",
		"market.sentiment": "オッズの推移",
		"market.resolution": "判定基準",
		"market.resolutionSource": "判定ソース:",
		"market.stats": "マーケット統計",
		"market.volume": "出来高",
		"market.activity24h": "24時間の活動",
		"market.created": "作成",
		"market.endDate": "終了日",
		"market.share": "カードを X にシェア",
		"market.shared": "投稿できるカードが用意できました",
		"market.downloaded": "カードを保存しました — X を開きました",
		"market.shareError": "シェアできませんでした",
		"comments.title": "ディスカッション",
		"comments.placeholder": "見解を書いてください…",
		"comments.post": "投稿",
		"comments.signIn": "ログイン",
		"comments.join": "して議論に参加。",
		"comments.empty": "まだコメントはありません。",
		"comments.delete": "コメントを削除",
		"comments.signInError": "ログインしてコメント",
		"comments.deleteError": "削除できませんでした",
		"trade.title": "取引",
		"trade.amount": "金額（RIA）",
		"trade.wallet": "内蔵ウォレット: {balance} RIA",
		"trade.provisioning": "ウォレットを準備中…",
		"trade.signInWallet": "して内蔵ウォレットを使う。",
		"trade.shares": "シェア",
		"trade.avgPrice": "平均価格",
		"trade.return": "想定リターン",
		"trade.processing": "処理中",
		"trade.signIn": "ログインして取引",
		"trade.buy": "{side} を買う",
		"trade.disclaimer": "内蔵 RIA ウォレットから決済 · DYOR",
		"trade.invalid": "無効な金額",
		"trade.invalidBody": "有効な金額を入力してください。",
		"trade.failed": "取引に失敗",
		"trade.executed": "取引が成立",
		"challenge.weekly": "週間チャレンジ",
		"challenge.title": "今週3回予測する",
		"challenge.body": "今週 {n} 回取引すると {bonus} RIA ボーナス。",
		"challenge.claimed": "ボーナス受取済",
		"challenge.claim": "{amount} RIA を受け取る",
		"challenge.signIn": "ログインしてボーナスを受け取る",
		"footer.tagline": "Probly — 予測マーケット",
		"footer.disclaimer": "Rialo テストネットのペーパー取引 · DYOR",
		"login.welcome": "おかえりなさい",
		"login.create": "アカウント作成",
		"login.signinHint": "ログインして取引・コメント・連続記録。",
		"login.signupHint": "参加と同時に RIA ウォレットが作られます。",
		"login.continueWith": "{provider} で続ける",
		"login.orEmail": "またはメール",
		"login.username": "ユーザー名",
		"login.email": "メール",
		"login.password": "パスワード",
		"login.passwordHint": "8文字以上",
		"login.submitIn": "メールでログイン",
		"login.submitUp": "アカウントを作成",
		"login.noAccount": "アカウントがない？登録する",
		"login.hasAccount": "すでにアカウントがある？ログイン",
		"login.disabled": "ログインは無効です。",
		"login.invalidEmail": "有効なメールを入力してください。",
		"login.shortPassword": "パスワードは8文字以上です。",
		"portfolio.title": "ポートフォリオ",
		"portfolio.subtitle": "内蔵ウォレット、統計、ポジション",
		"portfolio.signInTitle": "ログインが必要です",
		"portfolio.signInBody": "ログインしてウォレット、ポジション、連続記録を見る。",
		"portfolio.wallet": "内蔵ウォレット",
		"portfolio.value": "評価額",
		"portfolio.pnl": "合計損益",
		"portfolio.positions": "ポジション",
		"portfolio.history": "履歴",
		"portfolio.noPositions": "オープンポジションはありません",
		"portfolio.browse": "マーケットを見て取引を始める",
		"leaderboard.title": "ランキング",
		"leaderboard.subtitle": "利益順の Probly トレーダー",
		"leaderboard.rank": "順位",
		"leaderboard.trader": "トレーダー",
		"leaderboard.volume": "出来高",
		"leaderboard.profit": "利益",
		"leaderboard.trades": "取引",
		"leaderboard.win": "勝率",
		"leaderboard.empty": "まだトレーダーがいません。最初の一人に。",
		"leaderboard.tradesCount": "{n} 取引",
		"stats.title": "あなたの統計",
		"stats.winRate": "勝率",
		"stats.predictions": "予測回数",
		"stats.bestCategory": "得意カテゴリ",
		"stats.streak": "連続",
		"stats.rank": "{n} 位",
		"stats.locked": "未解除",
		"badge.first": "初予測",
		"badge.firstBlurb": "最初の取引をしました。",
		"badge.ten": "10勝",
		"badge.tenBlurb": "プラスのポジションが10。",
		"badge.top": "トップ10",
		"badge.topBlurb": "ランキング上位10入り。",
		"reaction.fire": "アツい",
		"reaction.eyes": "注目",
		"reaction.skull": "Rekt",
		"create.title": "マーケット作成",
		"create.subtitle": "Yes/No マーケットを開始。初期流動性はウォレットから差し引きます。",
		"create.question": "マーケットの問い",
		"create.criteria": "判定基準",
		"create.category": "カテゴリ",
		"create.selectCategory": "カテゴリを選択",
		"create.endDate": "終了日時",
		"create.source": "判定ソース",
		"create.image": "画像 URL（任意）",
		"create.liquidity": "初期流動性（RIA）",
		"create.minLiq": "最低 10 RIA。",
		"create.balance": "残高: {balance} RIA",
		"create.cancel": "キャンセル",
		"create.submit": "マーケットを作成",
		"create.creating": "作成中",
		"create.missing": "未入力の項目",
		"create.missingBody": "必須項目をすべて入力してください。",
		"create.failed": "作成できませんでした",
		"create.success": "マーケットを作成しました",
		"create.signInTitle": "ログインが必要です",
		"create.signInBody": "マーケット作成にはログインが必要です。",
		"create.continue": "ログインして続ける",
		"create.signInError": "ログインして作成",
		"chart.empty": "価格履歴はまだありません",
		"history.empty": "取引はまだありません",
		"position.shares": "シェア",
		"position.avg": "平均価格",
		"position.current": "現在価格",
		"position.pnl": "損益"
	},
	ar: {
		"nav.markets": "الأسواق",
		"nav.portfolio": "المحفظة",
		"nav.leaderboard": "المتصدرون",
		"nav.create": "إنشاء",
		"nav.createMarket": "إنشاء سوق",
		"nav.signIn": "تسجيل الدخول",
		"nav.closeMenu": "إغلاق القائمة",
		"nav.openMenu": "فتح القائمة",
		"theme.toLight": "التبديل إلى الوضع الفاتح",
		"theme.toDark": "التبديل إلى الوضع الداكن",
		"language.label": "اللغة",
		"faucet.label": "الصنبور",
		"faucet.claiming": "جارٍ الاستلام",
		"faucet.claimed": "تم الاستلام",
		"faucet.copied": "تم نسخ عنوان المحفظة",
		"home.live": "أسواق مباشرة",
		"home.title": "أسواق التنبؤ",
		"home.subtitle": "تداول أحداث العالم الحقيقي بمحفظة RIA مدمجة. سريع وشفاف وتسوية ورقية.",
		"stats.volume": "إجمالي الحجم",
		"stats.active": "أسواق نشطة",
		"stats.traders": "المتداولون",
		"stats.trades24h": "صفقات (24 س)",
		"hot.title": "الأكثر نشاطاً خلال 24 ساعة",
		"yes": "نعم",
		"no": "لا",
		"buyYes": "شراء نعم",
		"buyNo": "شراء لا",
		"vol": "حجم",
		"category.all": "الكل",
		"category.crypto": "عملات",
		"category.politics": "سياسة",
		"category.sports": "رياضة",
		"category.entertainment": "ترفيه",
		"category.tech": "تقنية",
		"category.science": "علوم",
		"category.economics": "اقتصاد",
		"grid.emptyTitle": "لا توجد أسواق",
		"grid.emptyBody": "جرّب فئة أخرى أو عد لاحقاً.",
		"market.notFound": "السوق غير موجود",
		"market.back": "العودة إلى الأسواق",
		"market.active": "نشط",
		"market.ends": "ينتهي {date}",
		"market.sentiment": "تغير الاحتمالات عبر الوقت",
		"market.resolution": "معايير الحسم",
		"market.resolutionSource": "مصدر الحسم:",
		"market.stats": "إحصاءات السوق",
		"market.volume": "الحجم",
		"market.activity24h": "نشاط 24 ساعة",
		"market.created": "أُنشئ",
		"market.endDate": "تاريخ الانتهاء",
		"market.share": "مشاركة البطاقة على X",
		"market.shared": "البطاقة جاهزة للنشر",
		"market.downloaded": "تم تنزيل البطاقة — X مفتوح",
		"market.shareError": "تعذر المشاركة",
		"comments.title": "النقاش",
		"comments.placeholder": "شارك أطروحتك…",
		"comments.post": "نشر",
		"comments.signIn": "سجّل الدخول",
		"comments.join": "للمشاركة في النقاش.",
		"comments.empty": "لا تعليقات بعد.",
		"comments.delete": "حذف التعليق",
		"comments.signInError": "سجّل الدخول للتعليق",
		"comments.deleteError": "تعذر حذف التعليق",
		"trade.title": "تداول",
		"trade.amount": "المبلغ (RIA)",
		"trade.wallet": "المحفظة المدمجة: {balance} RIA",
		"trade.provisioning": "جارٍ إنشاء المحفظة…",
		"trade.signInWallet": "لاستخدام محفظتك المدمجة.",
		"trade.shares": "الحصص",
		"trade.avgPrice": "متوسط السعر",
		"trade.return": "العائد المحتمل",
		"trade.processing": "جارٍ التنفيذ",
		"trade.signIn": "سجّل الدخول للتداول",
		"trade.buy": "شراء {side}",
		"trade.disclaimer": "التسوية من محفظة RIA المدمجة · DYOR",
		"trade.invalid": "مبلغ غير صالح",
		"trade.invalidBody": "أدخل مبلغاً صالحاً.",
		"trade.failed": "فشل التداول",
		"trade.executed": "تم تنفيذ الصفقة",
		"challenge.weekly": "تحدي الأسبوع",
		"challenge.title": "ثلاث توقعات هذا الأسبوع",
		"challenge.body": "نفّذ {n} صفقات هذا الأسبوع لتحصل على {bonus} RIA.",
		"challenge.claimed": "تم استلام المكافأة",
		"challenge.claim": "استلم {amount} RIA",
		"challenge.signIn": "سجّل الدخول لاستلام المكافأة",
		"footer.tagline": "Probly — أسواق التنبؤ",
		"footer.disclaimer": "تداول ورقي على شبكة Rialo التجريبية · DYOR",
		"login.welcome": "مرحباً بعودتك",
		"login.create": "أنشئ حسابك",
		"login.signinHint": "سجّل الدخول للتداول والتعليق وتتبع السلسلة.",
		"login.signupHint": "تُنشأ محفظة RIA فور انضمامك.",
		"login.continueWith": "المتابعة عبر {provider}",
		"login.orEmail": "أو البريد",
		"login.username": "اسم المستخدم",
		"login.email": "البريد",
		"login.password": "كلمة المرور",
		"login.passwordHint": "8 أحرف على الأقل",
		"login.submitIn": "دخول بالبريد",
		"login.submitUp": "إنشاء حساب",
		"login.noAccount": "ليس لديك حساب؟ سجّل",
		"login.hasAccount": "لديك حساب؟ سجّل الدخول",
		"login.disabled": "تسجيل الدخول معطّل.",
		"login.invalidEmail": "أدخل بريداً صالحاً.",
		"login.shortPassword": "كلمة المرور 8 أحرف على الأقل.",
		"portfolio.title": "المحفظة",
		"portfolio.subtitle": "محفظتك المدمجة والإحصاءات والمراكز",
		"portfolio.signInTitle": "يلزم تسجيل الدخول",
		"portfolio.signInBody": "سجّل الدخول لفتح المحفظة وتتبع المراكز والسلسلة.",
		"portfolio.wallet": "المحفظة المدمجة",
		"portfolio.value": "قيمة المحفظة",
		"portfolio.pnl": "إجمالي الربح والخسارة",
		"portfolio.positions": "المراكز",
		"portfolio.history": "السجل",
		"portfolio.noPositions": "لا مراكز مفتوحة بعد",
		"portfolio.browse": "تصفح الأسواق للبدء",
		"leaderboard.title": "المتصدرون",
		"leaderboard.subtitle": "أفضل متداولي Probly حسب الربح",
		"leaderboard.rank": "الترتيب",
		"leaderboard.trader": "المتداول",
		"leaderboard.volume": "الحجم",
		"leaderboard.profit": "الربح",
		"leaderboard.trades": "الصفقات",
		"leaderboard.win": "الفوز",
		"leaderboard.empty": "لا متداولين بعد. كن الأول.",
		"leaderboard.tradesCount": "{n} صفقات",
		"stats.title": "إحصاءاتك",
		"stats.winRate": "نسبة الفوز",
		"stats.predictions": "التوقعات",
		"stats.bestCategory": "أفضل فئة",
		"stats.streak": "السلسلة",
		"stats.rank": "الترتيب #{n}",
		"stats.locked": "مقفل",
		"badge.first": "أول توقع",
		"badge.firstBlurb": "نفّذت أول صفقة.",
		"badge.ten": "10 انتصارات",
		"badge.tenBlurb": "عشرة مراكز في الأخضر.",
		"badge.top": "أفضل 10",
		"badge.topBlurb": "دخلت قائمة العشرة الأوائل.",
		"reaction.fire": "نار",
		"reaction.eyes": "أراقب",
		"reaction.skull": "Rekt",
		"create.title": "إنشاء سوق",
		"create.subtitle": "أطلق سوق نعم/لا. السيولة الأولية تُخصم من محفظتك.",
		"create.question": "سؤال السوق",
		"create.criteria": "معايير الحسم",
		"create.category": "الفئة",
		"create.selectCategory": "اختر فئة",
		"create.endDate": "تاريخ الانتهاء",
		"create.source": "مصدر الحسم",
		"create.image": "رابط الصورة (اختياري)",
		"create.liquidity": "السيولة الأولية (RIA)",
		"create.minLiq": "الحد الأدنى 10 RIA.",
		"create.balance": "الرصيد: {balance} RIA",
		"create.cancel": "إلغاء",
		"create.submit": "إنشاء السوق",
		"create.creating": "جارٍ الإنشاء",
		"create.missing": "حقول ناقصة",
		"create.missingBody": "أكمل كل الحقول المطلوبة.",
		"create.failed": "تعذر إنشاء السوق",
		"create.success": "تم إنشاء السوق",
		"create.signInTitle": "يلزم تسجيل الدخول",
		"create.signInBody": "يلزم تسجيل الدخول لإنشاء سوق تنبؤ.",
		"create.continue": "سجّل الدخول للمتابعة",
		"create.signInError": "سجّل الدخول لإنشاء سوق",
		"chart.empty": "لا يوجد سجل أسعار بعد",
		"history.empty": "لا صفقات بعد",
		"position.shares": "الحصص",
		"position.avg": "متوسط السعر",
		"position.current": "السعر الحالي",
		"position.pnl": "الربح والخسارة"
	}
};
var EXTRA = {
	es: {
		"nav.nfts": "NFTs",
		"nav.settings": "Ajustes",
		"nft.kicker": "Mercados NFT en vivo",
		"nft.title": "Predicciones NFT",
		"nft.subtitle": "Predice si el floor sube o baja, o si un mint se agota. Las cotizaciones salen del mercado.",
		"nft.tabPump": "Pump o Dump",
		"nft.tabMint": "¿Se agota?",
		"nft.create": "Crear mercado NFT",
		"nft.pump": "Pump",
		"nft.dump": "Dump",
		"nft.sellOut": "Se agota",
		"nft.wont": "No se agota",
		"nft.floor": "Floor",
		"nft.mintProgress": "Progreso del mint",
		"nft.share": "Compartir resultado",
		"nft.back": "Volver a NFT",
		"settings.title": "Ajustes",
		"settings.username": "Usuario",
		"settings.photo": "Foto de perfil",
		"settings.save": "Guardar perfil",
		"settings.preview": "Vista previa",
		"settings.saved": "Perfil actualizado"
	},
	fr: {
		"nav.nfts": "NFT",
		"nav.settings": "Réglages",
		"nft.kicker": "Marchés NFT en direct",
		"nft.title": "Prédictions NFT",
		"nft.subtitle": "Pump ou dump sur un floor réel, ou si un mint se vend entièrement.",
		"nft.tabPump": "Pump ou Dump",
		"nft.tabMint": "Sold out ou non",
		"nft.create": "Créer un marché NFT",
		"nft.pump": "Pump",
		"nft.dump": "Dump",
		"nft.sellOut": "Sold out",
		"nft.wont": "Pas sold out",
		"nft.floor": "Floor",
		"nft.mintProgress": "Progression du mint",
		"nft.share": "Partager le résultat",
		"nft.back": "Retour aux NFT",
		"settings.title": "Réglages",
		"settings.username": "Pseudo",
		"settings.photo": "Photo de profil",
		"settings.save": "Enregistrer",
		"settings.preview": "Aperçu",
		"settings.saved": "Profil mis à jour"
	},
	pt: {
		"nav.nfts": "NFTs",
		"nav.settings": "Ajustes",
		"nft.title": "Previsões NFT",
		"nft.tabPump": "Pump ou Dump",
		"nft.tabMint": "Esgota ou não",
		"nft.pump": "Pump",
		"nft.dump": "Dump",
		"nft.sellOut": "Esgota",
		"nft.wont": "Não esgota",
		"nft.floor": "Floor",
		"nft.share": "Compartilhar resultado",
		"nft.back": "Voltar aos NFTs",
		"settings.title": "Ajustes",
		"settings.username": "Usuário",
		"settings.photo": "Foto de perfil",
		"settings.save": "Salvar perfil",
		"settings.preview": "Prévia"
	},
	de: {
		"nav.nfts": "NFTs",
		"nav.settings": "Einstellungen",
		"nft.title": "NFT-Prognosen",
		"nft.tabPump": "Pump oder Dump",
		"nft.tabMint": "Ausverkauft oder nicht",
		"nft.pump": "Pump",
		"nft.dump": "Dump",
		"nft.sellOut": "Ausverkauft",
		"nft.wont": "Nicht ausverkauft",
		"nft.floor": "Floor",
		"nft.share": "Ergebnis teilen",
		"nft.back": "Zurück zu NFTs",
		"settings.title": "Einstellungen",
		"settings.username": "Nutzername",
		"settings.photo": "Profilbild",
		"settings.save": "Profil speichern",
		"settings.preview": "Vorschau"
	},
	zh: {
		"nav.nfts": "NFT",
		"nav.settings": "设置",
		"nft.title": "NFT 预测",
		"nft.tabPump": "涨或跌",
		"nft.tabMint": "是否售罄",
		"nft.pump": "上涨",
		"nft.dump": "下跌",
		"nft.sellOut": "售罄",
		"nft.wont": "不会售罄",
		"nft.floor": "地板价",
		"nft.share": "分享结果",
		"nft.back": "返回 NFT",
		"settings.title": "设置",
		"settings.username": "用户名",
		"settings.photo": "头像",
		"settings.save": "保存资料",
		"settings.preview": "实时预览"
	},
	ja: {
		"nav.nfts": "NFT",
		"nav.settings": "設定",
		"nft.title": "NFT予測",
		"nft.tabPump": "ポンプかダンプ",
		"nft.tabMint": "完売するか",
		"nft.pump": "ポンプ",
		"nft.dump": "ダンプ",
		"nft.sellOut": "完売",
		"nft.wont": "完売しない",
		"nft.floor": "フロア",
		"nft.share": "結果を共有",
		"nft.back": "NFTに戻る",
		"settings.title": "設定",
		"settings.username": "ユーザー名",
		"settings.photo": "プロフィール画像",
		"settings.save": "保存",
		"settings.preview": "プレビュー"
	},
	ar: {
		"nav.nfts": "NFT",
		"nav.settings": "الإعدادات",
		"nft.title": "توقعات NFT",
		"nft.tabPump": "صعود أو هبوط",
		"nft.tabMint": "نفاد أو لا",
		"nft.pump": "صعود",
		"nft.dump": "هبوط",
		"nft.sellOut": "نفاد",
		"nft.wont": "لن ينفد",
		"nft.floor": "السعر الأدنى",
		"nft.share": "مشاركة النتيجة",
		"nft.back": "العودة إلى NFT",
		"settings.title": "الإعدادات",
		"settings.username": "اسم المستخدم",
		"settings.photo": "صورة الملف",
		"settings.save": "حفظ الملف",
		"settings.preview": "معاينة مباشرة"
	}
};
function isLocale(value) {
	return LOCALES.some((item) => item.id === value);
}
function interpolate(template, vars) {
	if (!vars) return template;
	return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] === void 0 ? `{${key}}` : String(vars[key]));
}
function applyLocale(locale) {
	const meta = LOCALES.find((item) => item.id === locale) ?? LOCALES[0];
	document.documentElement.lang = locale;
	document.documentElement.dir = meta.dir;
}
var I18nContext = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const next = isLocale(stored) ? stored : "en";
		setLocaleState(next);
		applyLocale(next);
	}, []);
	const setLocale = (0, import_react.useCallback)((next) => {
		setLocaleState(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {}
		applyLocale(next);
	}, []);
	const t = (0, import_react.useCallback)((key, vars) => interpolate(EXTRA[locale]?.[key] ?? DICTS[locale][key] ?? en[key] ?? key, vars), [locale]);
	const meta = LOCALES.find((item) => item.id === locale) ?? LOCALES[0];
	const value = (0, import_react.useMemo)(() => ({
		locale,
		dir: meta.dir,
		setLocale,
		t,
		dateLocale: DATE_LOCALES[locale],
		intlTag: INTL_TAGS[locale]
	}), [
		locale,
		meta.dir,
		setLocale,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}
var styles_default = "/assets/styles-1scP66b1.css";
var APP_NAME = "Probly";
var PREFS_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("predictix-theme");var theme=t==="light"?"light":"dark";var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(theme);d.style.colorScheme=theme;var l=localStorage.getItem("predictix-lang");if(l){d.lang=l;d.dir=l==="ar"?"rtl":"ltr";}}catch(e){document.documentElement.classList.add("dark");}})();`;
var Route$12 = createRootRoute({
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
				content: "#0c1224"
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
				href: "https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@600;700;800&display=swap"
			}
		]
	}),
	component: RootDocument
});
function ThemedToaster() {
	const { theme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme,
		position: "top-right",
		toastOptions: { className: "bg-card text-foreground border-border" }
	});
}
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: PREFS_BOOTSTRAP } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-background text-foreground antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemedToaster, {})] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-C_1aTkvM.mjs");
var Route$11 = createFileRoute("/")({
	loader: () => listHome(),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./auth-C98mBExH.mjs");
var Route$10 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./create-5bKhnoCQ.mjs");
var Route$9 = createFileRoute("/create")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./leaderboard-CYs0RBR9.mjs");
var Route$8 = createFileRoute("/leaderboard")({
	loader: () => getLeaderboard(),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./login-yyye7waP.mjs");
var Route$7 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./nfts-B0_sNZae.mjs");
var Route$6 = createFileRoute("/nfts")({
	loader: () => listNfts(),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./portfolio-DVlivJ5c.mjs");
var Route$5 = createFileRoute("/portfolio")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./settings-CdFJQZvx.mjs");
var Route$4 = createFileRoute("/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./market._id-J4x-yhH4.mjs");
var Route$3 = createFileRoute("/market/$id")({
	loader: ({ params }) => getMarketDetail({ data: { id: params.id } }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./nft._id-CPdC7b-f.mjs");
var Route$2 = createFileRoute("/nft/$id")({
	loader: ({ params }) => getNft({ data: { id: params.id } }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./nft.new-YCOjp_bQ.mjs");
var Route$1 = createFileRoute("/nft/new")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
/** Google and email sign-in were removed. Accounts are the connected wallet. */
function gone() {
	return new Response(JSON.stringify({ error: "Sign in with the connect-wallet button." }), {
		status: 410,
		headers: { "content-type": "application/json" }
	});
}
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: () => gone(),
	POST: () => gone()
} } });
var rootRouteChildren = {
	IndexRoute: Route$11.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AuthRoute: Route$10.update({
		id: "/auth",
		path: "/auth",
		getParentRoute: () => Route$12
	}),
	CreateRoute: Route$9.update({
		id: "/create",
		path: "/create",
		getParentRoute: () => Route$12
	}),
	LeaderboardRoute: Route$8.update({
		id: "/leaderboard",
		path: "/leaderboard",
		getParentRoute: () => Route$12
	}),
	LoginRoute: Route$7.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$12
	}),
	NftsRoute: Route$6.update({
		id: "/nfts",
		path: "/nfts",
		getParentRoute: () => Route$12
	}),
	PortfolioRoute: Route$5.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$12
	}),
	SettingsRoute: Route$4.update({
		id: "/settings",
		path: "/settings",
		getParentRoute: () => Route$12
	}),
	MarketIdRoute: Route$3.update({
		id: "/market/$id",
		path: "/market/$id",
		getParentRoute: () => Route$12
	}),
	NftIdRoute: Route$2.update({
		id: "/nft/$id",
		path: "/nft/$id",
		getParentRoute: () => Route$12
	}),
	NftNewRoute: Route$1.update({
		id: "/nft/new",
		path: "/nft/new",
		getParentRoute: () => Route$12
	}),
	ApiAuthSplatRoute: Route.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$12
	})
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	const queryClient = new QueryClient({ defaultOptions: { queries: {
		staleTime: 8e3,
		retry: 1,
		refetchOnWindowFocus: false
	} } });
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		Wrap: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
			client: queryClient,
			children
		})
	});
}
//#endregion
export { getMarketDetail as C, createSsrRpc as D, toggleReaction as E, getLeaderboard as S, listHome as T, buyShares as _, Route$8 as a, createMarket as b, useI18n as c, createNftMarket as d, getMyNftStake as f, addComment as g, saveProfile as h, Route$6 as i, useTheme as l, listNfts as m, Route$2 as n, Route$11 as o, getNft as p, Route$3 as r, LOCALES as s, router_exports as t, buyNft as u, claimChallenge as v, getMyPulse as w, deleteComment as x, claimFaucet as y };
