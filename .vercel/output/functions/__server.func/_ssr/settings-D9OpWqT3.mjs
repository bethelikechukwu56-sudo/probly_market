import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as authClient } from "./client-B40BzJxt.mjs";
import { D as LoaderCircle, Q as ArrowLeft, T as LogIn } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { h as saveProfile, l as useI18n } from "./router-CjktFH-W.mjs";
import { t as Button, u as useCurrentUserState } from "./probly-wordmark-CIsrYnV3.mjs";
import { t as Layout } from "./Layout-CTGOUCKk.mjs";
import { t as Input } from "./input-DolaK5uO.mjs";
import { t as Label } from "./label-AUizY74A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-D9OpWqT3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const { user, isPending } = useCurrentUserState();
	const { t } = useI18n();
	const [name, setName] = (0, import_react.useState)("");
	const [image, setImage] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		setName(user.displayName ?? "");
		setImage(user.profileImageUrl);
		setReady(true);
	}, [
		user?.id,
		user?.displayName,
		user?.profileImageUrl
	]);
	if (isPending || user && !ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-2xl bg-secondary" }) });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mb-4 h-10 w-10 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-2xl font-bold",
				children: t("settings.signInTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-muted-foreground",
				children: t("settings.signInBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: t("nav.signIn") })
			})
		]
	}) });
	const onFile = async (file) => {
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error(t("settings.photoError"));
			return;
		}
		const bitmap = await createImageBitmap(file);
		const size = 128;
		const canvas = document.createElement("canvas");
		canvas.width = size;
		canvas.height = size;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const scale = Math.max(size / bitmap.width, size / bitmap.height);
		const w = bitmap.width * scale;
		const h = bitmap.height * scale;
		ctx.drawImage(bitmap, (size - w) / 2, (size - h) / 2, w, h);
		setImage(canvas.toDataURL("image/jpeg", .72));
	};
	const save = async () => {
		if (name.trim().length < 2) {
			toast.error(t("settings.nameError"));
			return;
		}
		setPending(true);
		try {
			const result = await saveProfile({ data: {
				name: name.trim(),
				image
			} });
			if (!result.ok) {
				toast.error(result.message);
				return;
			}
			try {
				await authClient.updateUser({
					name: name.trim(),
					image
				});
			} catch {}
			await authClient.getSession({ query: { disableCookieCache: true } });
			toast.success(t("settings.saved"));
		} catch {
			toast.error(t("settings.failed"));
		} finally {
			setPending(false);
		}
	};
	const initial = (name.trim() || user.primaryEmail || "?").slice(0, 1).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("market.back")]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-3xl font-bold",
				children: t("settings.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xl text-muted-foreground",
				children: t("settings.subtitle")
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface space-y-6 rounded-2xl border border-border/50 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "username",
							children: t("settings.username")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "username",
							value: name,
							maxLength: 32,
							onChange: (event) => setName(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "photo",
								children: t("settings.photo")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t("settings.photoHint")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "photo",
								type: "file",
								accept: "image/png,image/jpeg,image/webp",
								onChange: (event) => void onFile(event.target.files?.[0])
							}),
							image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								onClick: () => setImage(null),
								children: t("settings.removePhoto")
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						disabled: pending,
						onClick: () => void save(),
						children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, pending ? t("settings.saving") : t("settings.save")]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "card-surface sticky top-24 rounded-2xl border border-border/50 p-6 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs font-medium tracking-wide text-muted-foreground uppercase",
					children: t("settings.preview")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: "",
						className: "h-16 w-16 rounded-full object-cover transition-all"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-16 w-16 place-items-center rounded-full bg-secondary text-xl font-semibold transition-all",
						children: initial
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-lg font-semibold transition-all",
							children: name.trim() || t("settings.username")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted-foreground",
							children: user.primaryEmail
						})]
					})]
				})]
			})]
		})
	] });
}
//#endregion
export { SettingsPage as component };
