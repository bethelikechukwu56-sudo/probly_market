import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as cn } from "./button-C3nr00Jv.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { E as toggleReaction, c as useI18n } from "./router-BO0wqGQQ.mjs";
import { o as useCurrentUserState } from "./probly-wordmark-D3WF-xkE.mjs";
import { o as useMyPulse, r as useInvalidatePulse } from "./Layout-Be5XvqIz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ReactionBar-CuiCAJPB.js
var import_jsx_runtime = require_jsx_runtime();
var REACTION_META = [
	{
		kind: "fire",
		label: "Fire",
		glyph: "🔥"
	},
	{
		kind: "eyes",
		label: "Watching",
		glyph: "👀"
	},
	{
		kind: "skull",
		label: "Rekt",
		glyph: "💀"
	}
];
function ReactionBar({ market, compact = false }) {
	const { user, isPending } = useCurrentUserState();
	const me = useMyPulse();
	const invalidate = useInvalidatePulse();
	const navigate = useNavigate();
	const { t } = useI18n();
	const mine = me.data?.myReactions[market.id] ?? [];
	const onReact = async (kind, e) => {
		e.preventDefault();
		e.stopPropagation();
		if (isPending) return;
		if (!user) {
			navigate({ to: "/login" });
			return;
		}
		try {
			await toggleReaction({ data: {
				marketId: market.id,
				kind
			} });
			invalidate(market.id);
		} catch {
			toast.error("Could not save reaction");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center gap-1", compact ? "" : "pt-1"),
		children: REACTION_META.map((item) => {
			const count = market.reactions[item.kind];
			const active = mine.includes(item.kind);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-label": t(`reaction.${item.kind}`),
				onClick: (e) => void onReact(item.kind, e),
				className: cn("inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-lg px-2 text-sm transition-colors", active ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: item.glyph
				}), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: count
				}) : null]
			}, item.kind);
		})
	});
}
//#endregion
export { ReactionBar as t };
