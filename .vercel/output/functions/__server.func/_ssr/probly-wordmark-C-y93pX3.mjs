import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as readWalletSession, s as subscribeWalletSession } from "./wallet-session-BxdB0qxU.mjs";
import { r as cn, s as useConnectWalletSlot, t as Button } from "./button-C3nr00Jv.mjs";
import { d as Sun, k as Globe, y as Moon } from "../_libs/lucide-react.mjs";
import { c as useI18n, l as useTheme, s as LOCALES } from "./router-BST_wReC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/probly-wordmark-C-y93pX3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function sessionToUser(session) {
	if (!session) return null;
	return {
		id: session.id,
		displayName: session.name,
		primaryEmail: session.id,
		profileImageUrl: session.image,
		isDevFallback: false
	};
}
var emptySubscribe = () => () => {};
var serverSnapshot = () => null;
/**
* Current user + loading state.
* Auth on: the connected wallet, once the client session store has hydrated.
* Auth off: the shared dev user, never pending.
*/
function useCurrentUserState() {
	const session = (0, import_react.useSyncExternalStore)(subscribeWalletSession, readWalletSession, serverSnapshot);
	if (!(0, import_react.useSyncExternalStore)(emptySubscribe, () => true, () => false)) return {
		user: null,
		isPending: true
	};
	return {
		user: sessionToUser(session),
		isPending: false
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
/**
* RainbowKit is loaded only in the client wallet provider. Until that mounts,
* render a skeleton so the server HTML matches the first client paint.
*/
function ConnectWalletButton({ size = "sm", label }) {
	const render = useConnectWalletSlot();
	const { t } = useI18n();
	if (!render) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: size === "lg" ? "h-12 w-full animate-pulse rounded-xl bg-secondary" : "h-11 w-36 animate-pulse rounded-lg bg-secondary" });
	return render({
		size,
		label: label ?? t("nav.signIn")
	});
}
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const { t } = useI18n();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon",
		onClick: toggleTheme,
		"aria-label": isDark ? t("theme.toLight") : t("theme.toDark"),
		title: isDark ? t("theme.toLight") : t("theme.toDark"),
		children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
	});
}
function LanguageSelect() {
	const { locale, setLocale, t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const rootRef = (0, import_react.useRef)(null);
	const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[0];
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		};
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "ghost",
			size: "sm",
			className: "min-w-11 gap-2 px-2",
			"aria-label": t("language.label"),
			"aria-expanded": open,
			"aria-haspopup": "listbox",
			onClick: () => setOpen((v) => !v),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-xs font-semibold tracking-wide uppercase sm:inline",
				children: current.id
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "listbox",
			"aria-label": t("language.label"),
			className: "absolute end-0 z-50 mt-1 min-w-44 rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-md",
			children: LOCALES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "option",
				"aria-selected": item.id === locale,
				className: cn("flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-sm", item.id === locale ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"),
				onClick: () => {
					setLocale(item.id);
					setOpen(false);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.native }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase",
					children: item.id
				})]
			}, item.id))
		}) : null]
	});
}
var probly_wordmark_default = "/assets/probly-wordmark-f8nelheZ.png";
//#endregion
export { useCurrentUser as a, probly_wordmark_default as i, LanguageSelect as n, useCurrentUserState as o, ThemeToggle as r, ConnectWalletButton as t };
