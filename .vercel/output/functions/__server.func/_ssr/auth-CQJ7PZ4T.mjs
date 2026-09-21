import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Lock, V as ArrowRight, b as Mail, o as User, w as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as usePulse } from "./router-DHY9BIcC.mjs";
import { n as Layout, t as Button } from "./Layout-8mjeCc1d.mjs";
import { t as Input } from "./input-DKl2dmLE.mjs";
import { t as Label } from "./label-g68JvGnI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-CQJ7PZ4T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const [isLogin, setIsLogin] = (0, import_react.useState)(true);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [username, setUsername] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const signIn = usePulse((s) => s.signIn);
	const session = usePulse((s) => s.session);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (session) navigate({ to: "/" });
	}, [session, navigate]);
	const validate = () => {
		const next = {};
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address";
		if (password.length < 6) next.password = "Password must be at least 6 characters";
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		setLoading(true);
		await new Promise((r) => setTimeout(r, 400));
		signIn(email, username);
		toast.success(isLogin ? "Welcome back" : "Account created", { description: "You can connect a wallet and start trading." });
		setLoading(false);
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface rounded-2xl border border-border/50 p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-bold text-primary-foreground",
									children: "P"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display mb-2 text-2xl font-bold",
								children: isLogin ? "Welcome back" : "Create account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: isLogin ? "Sign in to access your portfolio and trade" : "Join Predictix to start trading on predictions"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => void handleSubmit(e),
						className: "space-y-4",
						children: [
							!isLogin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "username",
									children: "Username"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "username",
										type: "text",
										placeholder: "satoshi",
										value: username,
										onChange: (e) => setUsername(e.target.value),
										className: "pl-10"
									})]
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											placeholder: "you@example.com",
											value: email,
											onChange: (e) => {
												setEmail(e.target.value);
												setErrors((p) => ({
													...p,
													email: void 0
												}));
											},
											className: "pl-10"
										})]
									}),
									errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive",
										children: errors.email
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "password",
										children: "Password"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "password",
											type: "password",
											placeholder: "••••••••",
											value: password,
											onChange: (e) => {
												setPassword(e.target.value);
												setErrors((p) => ({
													...p,
													password: void 0
												}));
											},
											className: "pl-10"
										})]
									}),
									errors.password ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-destructive",
										children: errors.password
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								className: "w-full",
								size: "lg",
								disabled: loading,
								children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), isLogin ? "Sign in" : "Create account"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: "Local demo session only — nothing is sent to a server."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsLogin(!isLogin),
							className: "text-sm text-muted-foreground transition-colors hover:text-primary",
							children: isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"
						})
					})
				]
			})
		})
	}) });
}
//#endregion
export { AuthPage as component };
