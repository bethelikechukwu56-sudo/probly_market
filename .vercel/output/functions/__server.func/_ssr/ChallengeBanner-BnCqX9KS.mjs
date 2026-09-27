import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as Button } from "./button-C3nr00Jv.mjs";
import { A as Gift, N as Flame } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useI18n, v as claimChallenge } from "./router-BST_wReC.mjs";
import { o as useMyPulse, r as useInvalidatePulse } from "./Layout-BoSazKKI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ChallengeBanner-BnCqX9KS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChallengeBanner() {
	const me = useMyPulse();
	const invalidate = useInvalidatePulse();
	const [pending, setPending] = (0, import_react.useState)(false);
	const { t } = useI18n();
	const challenge = me.data?.challenge;
	if (!challenge) return null;
	const pct = Math.min(100, challenge.progress / challenge.targetTrades * 100);
	const ready = challenge.progress >= challenge.targetTrades && !challenge.claimed;
	const claim = async () => {
		setPending(true);
		try {
			const result = await claimChallenge();
			if (!result.ok) toast.error(result.message);
			else {
				toast.success(result.message);
				invalidate();
			}
		} catch {
			toast.error(t("challenge.signIn"));
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface mb-8 rounded-2xl border border-primary/25 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center gap-2 text-sm font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" }), t("challenge.weekly")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: t("challenge.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("challenge.body", {
						n: challenge.targetTrades,
						bonus: challenge.bonusRia
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm tabular-nums text-muted-foreground",
					children: [
						challenge.progress,
						"/",
						challenge.targetTrades
					]
				}), challenge.claimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-success",
					children: t("challenge.claimed")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					disabled: !ready || pending,
					onClick: () => void claim(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4" }), t("challenge.claim", { amount: challenge.bonusRia })]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 h-2 overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-primary",
				style: { width: `${pct}%` }
			})
		})]
	});
}
//#endregion
export { ChallengeBanner as t };
