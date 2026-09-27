import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as cn, t as Button } from "./button-C3nr00Jv.mjs";
import { _ as Plus, j as Gem } from "../_libs/lucide-react.mjs";
import { c as useI18n, i as Route$6 } from "./router-BST_wReC.mjs";
import { a as useCurrentUser } from "./probly-wordmark-C-y93pX3.mjs";
import { t as Layout } from "./Layout-BoSazKKI.mjs";
import { n as NftCard } from "./NftCard-BMGvAoRM.mjs";
import { i as useNftList } from "./nft-query-GynIs63Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nfts-CVY1iUWy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NftHome() {
	const initial = Route$6.useLoaderData();
	const data = useNftList().data ?? initial;
	const [tab, setTab] = (0, import_react.useState)("pump_dump");
	const user = useCurrentUser();
	const { t } = useI18n();
	const markets = tab === "pump_dump" ? data.pump : data.mint;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-primary",
						children: t("nft.kicker")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mb-2 text-3xl font-bold md:text-4xl",
					children: t("nft.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-lg text-muted-foreground",
					children: t("nft.subtitle")
				})
			] }), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/nft/new",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), t("nft.create")]
				})
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-2",
			children: [["pump_dump", t("nft.tabPump")], ["sell_out", t("nft.tabMint")]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTab(id),
				className: cn("comic-tab min-h-11 shrink-0 rounded-lg px-4 text-sm font-extrabold transition-transform", tab === id ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground hover:bg-secondary"),
				children: label
			}, id))
		}),
		markets.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface rounded-2xl border border-border/50 px-6 py-16 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-lg font-semibold",
				children: t("nft.empty")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("nft.emptyBody")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: markets.map((market) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NftCard, { market }, market.id))
		})
	] });
}
//#endregion
export { NftHome as component };
