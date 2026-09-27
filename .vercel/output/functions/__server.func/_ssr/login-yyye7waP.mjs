import { v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as useI18n } from "./router-DrBwQxAl.mjs";
import { i as probly_wordmark_default, n as LanguageSelect, o as useCurrentUserState, r as ThemeToggle, t as ConnectWalletButton } from "./probly-wordmark-Bb7ujiHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-yyye7waP.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-background p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-48 animate-pulse rounded-xl bg-secondary" })
	});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, {});
}
function LoginForm() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative grid min-h-dvh place-items-center bg-background p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute end-4 top-4 flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mb-8 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: probly_wordmark_default,
					alt: "Probly",
					className: "h-16 w-auto invert dark:invert-0 sm:h-[4.5rem]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface rounded-2xl border border-border/50 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mb-2 text-center text-2xl font-bold",
						children: t("login.welcome")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 text-center text-sm text-muted-foreground",
						children: t("login.signinHint")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectWalletButton, { size: "lg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-center text-xs text-muted-foreground",
						children: t("login.signupHint")
					})
				]
			})]
		})]
	});
}
//#endregion
export { Login as component };
