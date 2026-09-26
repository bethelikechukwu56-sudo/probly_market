import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as LoaderCircle, Q as ArrowLeft, T as LogIn } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as createNftMarket, l as useI18n } from "./router-CjktFH-W.mjs";
import { i as cn, t as Button, u as useCurrentUserState } from "./probly-wordmark-CIsrYnV3.mjs";
import { o as useMyPulse, t as Layout } from "./Layout-CTGOUCKk.mjs";
import { t as Input } from "./input-DolaK5uO.mjs";
import { t as Label } from "./label-AUizY74A.mjs";
import { t as useInvalidateNft } from "./nft-query-BL6oHx4Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nft.new-DpnmqDmU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CreateNftPage() {
	const { user, isPending } = useCurrentUserState();
	const { t } = useI18n();
	const me = useMyPulse();
	const navigate = useNavigate();
	const invalidate = useInvalidateNft();
	const [kind, setKind] = (0, import_react.useState)("pump_dump");
	const [name, setName] = (0, import_react.useState)("");
	const [lookup, setLookup] = (0, import_react.useState)("");
	const [imageUrl, setImageUrl] = (0, import_react.useState)("");
	const [deadline, setDeadline] = (0, import_react.useState)("");
	const [liquidity, setLiquidity] = (0, import_react.useState)("50");
	const [manualFloor, setManualFloor] = (0, import_react.useState)("");
	const [currency, setCurrency] = (0, import_react.useState)("ETH");
	const [supply, setSupply] = (0, import_react.useState)("");
	const [minted, setMinted] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-2xl bg-secondary" }) });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mb-4 h-10 w-10 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-2xl font-bold",
				children: t("create.signInTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 max-w-md text-muted-foreground",
				children: t("nft.signInBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: t("nav.signIn") })
			})
		]
	}) });
	const submit = async () => {
		const end = new Date(deadline);
		if (!name.trim() || !deadline || Number.isNaN(end.getTime())) {
			toast.error(t("create.missing"), { description: t("create.missingBody") });
			return;
		}
		setPending(true);
		try {
			const result = await createNftMarket({ data: {
				kind,
				name: name.trim(),
				lookup: lookup.trim() || void 0,
				imageUrl: imageUrl.trim() || void 0,
				deadline: end.toISOString(),
				primitive: "native_https",
				liquidity: Number(liquidity) || 0,
				manualFloor: manualFloor ? Number(manualFloor) : void 0,
				currency: currency.trim() || void 0,
				supply: supply ? Number(supply) : void 0,
				minted: minted ? Number(minted) : void 0
			} });
			if (!result.ok || !result.id) {
				toast.error(t("create.failed"), { description: result.message });
				return;
			}
			toast.success(t("create.success"));
			invalidate(result.id);
			navigate({
				to: "/nft/$id",
				params: { id: result.id }
			});
		} catch {
			toast.error(t("create.signInError"));
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/nfts",
		className: "mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("nft.back")]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-3xl font-bold",
				children: t("nft.createTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-muted-foreground",
				children: t("nft.createSubtitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-surface space-y-5 rounded-2xl border border-border/50 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [["pump_dump", t("nft.tabPump")], ["sell_out", t("nft.tabMint")]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setKind(id),
							className: cn("comic-tab min-h-12 rounded-xl px-3 text-sm font-extrabold", kind === id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("nft.collectionName"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							onChange: (event) => setName(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: kind === "pump_dump" ? t("nft.lookupPump") : t("nft.lookupMint"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: lookup,
							onChange: (event) => setLookup(event.target.value),
							placeholder: kind === "pump_dump" ? "pudgy-penguins" : "collection symbol or address"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("create.image"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: imageUrl,
							onChange: (event) => setImageUrl(event.target.value),
							placeholder: "https://"
						})
					}),
					kind === "pump_dump" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("nft.floorManual"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: manualFloor,
								onChange: (event) => setManualFloor(event.target.value),
								inputMode: "decimal"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("nft.currency"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: currency,
								onChange: (event) => setCurrency(event.target.value)
							})
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("nft.supply"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: supply,
								onChange: (event) => setSupply(event.target.value),
								inputMode: "numeric"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("nft.mintedNow"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: minted,
								onChange: (event) => setMinted(event.target.value),
								inputMode: "numeric"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("create.endDate"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "datetime-local",
								value: deadline,
								onChange: (event) => setDeadline(event.target.value)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("create.liquidity"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: liquidity,
								onChange: (event) => setLiquidity(event.target.value),
								inputMode: "decimal"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: t("create.balance", { balance: (me.data?.wallet?.balance ?? 0).toFixed(2) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "w-full",
						disabled: pending,
						onClick: () => void submit(),
						children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, pending ? t("create.creating") : t("nft.submit")]
					})
				]
			})
		]
	})] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
//#endregion
export { CreateNftPage as component };
