import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as authClient } from "./client-B40BzJxt.mjs";
import { M as Globe, b as Moon, f as Sun } from "../_libs/lucide-react.mjs";
import { c as LOCALES, l as useI18n, s as useTheme } from "./router-CjktFH-W.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/probly-wordmark-CIsrYnV3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
function formatDate(dateString, opts, locale = "en-US") {
	return new Date(dateString).toLocaleDateString(locale, opts ?? {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function formatAddress(address) {
	if (!address) return "";
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-extrabold ring-offset-background transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "comic-press bg-primary text-primary-foreground",
			destructive: "comic-press bg-destructive text-destructive-foreground",
			outline: "comic-press bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
			secondary: "comic-press bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
			ghost: "border-2 border-transparent hover:border-ink hover:bg-accent hover:text-accent-foreground",
			link: "font-extrabold text-primary underline-offset-4 hover:underline",
			yes: "comic-press bg-success/15 text-success hover:bg-success hover:text-success-foreground",
			no: "comic-press bg-danger/15 text-danger hover:bg-danger hover:text-danger-foreground",
			yesActive: "comic-press bg-success text-success-foreground",
			noActive: "comic-press bg-danger text-danger-foreground",
			hero: "comic-press bg-primary text-primary-foreground",
			heroOutline: "comic-press bg-card text-primary",
			wallet: "comic-press bg-primary text-primary-foreground"
		},
		size: {
			default: "h-11 min-h-11 px-4 py-2",
			sm: "h-11 min-h-11 rounded-lg px-3",
			lg: "h-12 min-h-12 rounded-xl px-8",
			xl: "h-12 min-h-12 rounded-xl px-10 text-base",
			icon: "h-11 w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
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
export { formatAddress as a, probly_wordmark_default as c, cn as i, useCurrentUser as l, LanguageSelect as n, formatDate as o, ThemeToggle as r, formatVolume as s, Button as t, useCurrentUserState as u };
