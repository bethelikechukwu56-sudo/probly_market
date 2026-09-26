import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as signIn, t as authClient } from "./client-B40BzJxt.mjs";
import { t as GROK_PROVIDERS } from "./server-Baxeom4R.mjs";
import { D as LoaderCircle, E as Lock, Z as ArrowRight, o as User, w as Mail } from "../_libs/lucide-react.mjs";
import { l as useI18n } from "./router-CjktFH-W.mjs";
import { c as probly_wordmark_default, n as LanguageSelect, r as ThemeToggle, t as Button, u as useCurrentUserState } from "./probly-wordmark-CIsrYnV3.mjs";
import { t as Input } from "./input-DolaK5uO.mjs";
import { t as Label } from "./label-AUizY74A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DmiBy1xe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [username, setUsername] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const { t } = useI18n();
	const onProvider = async (providerId) => {
		setError(null);
		setLoading(providerId.includes("google") ? "google" : "x");
		try {
			await signIn(providerId, {
				callbackURL: "/",
				errorCallbackURL: "/login"
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : t("trade.signIn"));
			setLoading(null);
		}
	};
	const onEmail = async (e) => {
		e.preventDefault();
		setError(null);
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError(t("login.invalidEmail"));
			return;
		}
		if (password.length < 8) {
			setError(t("login.shortPassword"));
			return;
		}
		setLoading("email");
		try {
			if (mode === "signup") {
				const name = (username || email.split("@")[0] || "trader").slice(0, 24);
				const { error: signUpError } = await authClient.signUp.email({
					email,
					password,
					name
				});
				if (signUpError) throw new Error(signUpError.message || t("create.failed"));
			} else {
				const { error: signInError } = await authClient.signIn.email({
					email,
					password
				});
				if (signInError) throw new Error(signInError.message || t("trade.signIn"));
			}
			await authClient.getSession();
			window.location.href = "/";
		} catch (err) {
			setError(err instanceof Error ? err.message : t("trade.signIn"));
			setLoading(null);
		}
	};
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
						children: mode === "signin" ? t("login.welcome") : t("login.create")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6 text-center text-sm text-muted-foreground",
						children: mode === "signin" ? t("login.signinHint") : t("login.signupHint")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 grid gap-2",
						children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "h-12 w-full",
							disabled: loading !== null,
							onClick: () => void onProvider(p.providerId),
							children: [loading === (p.label === "Google" ? "google" : "x") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, t("login.continueWith", { provider: p.label })]
						}, p.providerId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-3 text-xs tracking-wide text-muted-foreground uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							t("login.orEmail"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => void onEmail(e),
						className: "space-y-4",
						children: [
							mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "username",
									children: t("login.username")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "username",
										value: username,
										onChange: (e) => setUsername(e.target.value),
										placeholder: "satoshi",
										className: "ps-10",
										autoComplete: "username"
									})]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: t("login.email")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "you@example.com",
										className: "ps-10",
										autoComplete: "email",
										required: true
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: t("login.password")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute top-1/2 start-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										type: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: t("login.passwordHint"),
										className: "ps-10",
										autoComplete: mode === "signup" ? "new-password" : "current-password",
										required: true
									})]
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-destructive",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								className: "w-full",
								size: "lg",
								disabled: loading !== null,
								children: [loading === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), mode === "signin" ? t("login.submitIn") : t("login.submitUp")]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-6 w-full text-center text-sm text-muted-foreground hover:text-primary",
						onClick: () => {
							setMode(mode === "signin" ? "signup" : "signin");
							setError(null);
						},
						children: mode === "signin" ? t("login.noAccount") : t("login.hasAccount")
					})
				]
			})]
		})]
	});
}
//#endregion
export { Login as component };
