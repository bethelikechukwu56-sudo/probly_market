import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as LoaderCircle, H as Clock, Q as ArrowLeft, d as Trash2, g as Send, m as Share2, q as ChartColumn, r as Wallet, x as MessageSquare } from "../_libs/lucide-react.mjs";
import { t as formatDistanceToNow } from "../_libs/date-fns.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as addComment, l as useI18n, n as Route$2, s as useTheme, u as buyNft, x as deleteComment } from "./router-CjktFH-W.mjs";
import { i as cn, l as useCurrentUser, o as formatDate, s as formatVolume, t as Button, u as useCurrentUserState } from "./probly-wordmark-CIsrYnV3.mjs";
import { o as useMyPulse, t as Layout } from "./Layout-CTGOUCKk.mjs";
import { t as Input } from "./input-DolaK5uO.mjs";
import { t as Textarea } from "./textarea-CoCwR3oo.mjs";
import { t as Badge } from "./badge-1QAKYnWz.mjs";
import { a as Tooltip, i as Area, n as YAxis, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { n as shareNftResult, t as PriceChart } from "./share-card-BN9kviEb.mjs";
import { r as formatFloor, t as Countdown } from "./NftCard-BILUTs73.mjs";
import { n as useMyNftStake, r as useNftDetail, t as useInvalidateNft } from "./nft-query-BL6oHx4Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nft._id-CAsTgoDH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChartFrame({ children }) {
	const ref = (0, import_react.useRef)(null);
	const [size, setSize] = (0, import_react.useState)({
		w: 0,
		h: 224
	});
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const update = () => {
			const w = Math.floor(el.clientWidth);
			const h = Math.floor(el.clientHeight);
			setSize((prev) => prev.w === w && prev.h === h ? prev : {
				w,
				h
			});
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "h-56 w-full overflow-hidden",
		children: size.w > 0 ? children(size) : null
	});
}
function readCssVar(name, fallback) {
	if (typeof window === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function FloorChart({ points, currency }) {
	const { t, intlTag } = useI18n();
	const { theme } = useTheme();
	const colors = (0, import_react.useMemo)(() => ({
		muted: readCssVar("--chart-muted", "hsl(45 10% 62%)"),
		tooltipBg: readCssVar("--chart-tooltip-bg", "hsl(20 10% 11%)"),
		tooltipBorder: readCssVar("--chart-tooltip-border", "hsl(20 10% 20%)"),
		tooltipFg: readCssVar("--chart-tooltip-fg", "hsl(45 20% 95%)")
	}), [theme]);
	if (points.length < 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-8 text-center text-sm text-muted-foreground",
		children: t("chart.empty")
	});
	const data = points.map((point) => ({
		t: new Date(point.timestamp).toLocaleDateString(intlTag, {
			month: "short",
			day: "numeric"
		}),
		price: point.price
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: ({ w, h }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
		width: w,
		height: h,
		data,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "t",
				tick: {
					fill: colors.muted,
					fontSize: 12
				},
				axisLine: false,
				tickLine: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				domain: ["auto", "auto"],
				tick: {
					fill: colors.muted,
					fontSize: 12
				},
				axisLine: false,
				tickLine: false,
				width: 64
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				contentStyle: {
					background: colors.tooltipBg,
					border: `1px solid ${colors.tooltipBorder}`,
					color: colors.tooltipFg,
					borderRadius: 12
				},
				formatter: (value) => [`${Number(value).toLocaleString(intlTag, { maximumFractionDigits: 4 })} ${currency}`, t("nft.floor")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				type: "monotone",
				dataKey: "price",
				stroke: "var(--color-primary, #9dc9bf)",
				fill: "rgba(157,201,191,0.18)",
				strokeWidth: 2
			})
		]
	}) });
}
function NftComments({ marketId, comments }) {
	const [text, setText] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const user = useCurrentUser();
	const invalidate = useInvalidateNft();
	const { t, dateLocale } = useI18n();
	const submit = async () => {
		if (!text.trim()) return;
		setPending(true);
		try {
			await addComment({ data: {
				marketId,
				content: text.trim()
			} });
			setText("");
			invalidate(marketId);
		} catch {
			toast.error(t("comments.signInError"));
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface rounded-2xl border border-border/50 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-4 flex items-center gap-2 font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4" }), t("comments.title")]
			}),
			user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: text,
					onChange: (event) => setText(event.target.value),
					placeholder: t("comments.placeholder"),
					maxLength: 500
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					disabled: pending || !text.trim(),
					onClick: () => void submit(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), t("comments.post")]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-primary",
						children: t("comments.signIn")
					}),
					" ",
					t("comments.join")
				]
			}),
			comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("comments.empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border/50 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-center justify-between gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: comment.username
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDistanceToNow(new Date(comment.createdAt), {
								addSuffix: true,
								locale: dateLocale
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: comment.content
						}),
						user?.id === comment.userId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-danger",
							onClick: () => {
								deleteComment({ data: { id: comment.id } }).then(() => invalidate(marketId)).catch(() => toast.error(t("comments.deleteError")));
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" }), t("comments.delete")]
						}) : null
					]
				}, comment.id))
			})
		]
	});
}
function NftTradePanel({ market }) {
	const [side, setSide] = (0, import_react.useState)("yes");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const me = useMyPulse();
	const invalidate = useInvalidateNft();
	const { t } = useI18n();
	const pump = market.kind === "pump_dump";
	const yesLabel = pump ? t("nft.pump") : t("nft.sellOut");
	const noLabel = pump ? t("nft.dump") : t("nft.wont");
	const price = side === "yes" ? market.yesPrice : market.noPrice;
	const parsed = parseFloat(amount);
	const shares = Number.isFinite(parsed) && parsed > 0 ? parsed / price : 0;
	const wallet = me.data?.wallet;
	const closed = market.status !== "active" || new Date(market.deadline).getTime() <= Date.now();
	const trade = async () => {
		if (isPending) return;
		if (!user) {
			navigate({ to: "/login" });
			return;
		}
		if (!Number.isFinite(parsed) || parsed <= 0) {
			toast.error(t("trade.invalid"), { description: t("trade.invalidBody") });
			return;
		}
		setPending(true);
		try {
			const result = await buyNft({ data: {
				marketId: market.id,
				outcome: side,
				amount: parsed
			} });
			if (!result.ok) {
				toast.error(t("trade.failed"), { description: result.message });
				return;
			}
			toast.success(t("trade.executed"), { description: result.message });
			setAmount("");
			invalidate(market.id);
		} catch {
			toast.error(t("trade.signIn"));
			navigate({ to: "/login" });
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface sticky top-24 rounded-2xl border border-border/50 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display mb-4 text-lg font-semibold",
			children: t("trade.title")
		}), closed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: market.outcome ? t("nft.resolvedAs", { outcome: outcomeLabel(market.outcome, t) }) : t("nft.ended")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSide("yes"),
					className: cn("min-h-12 flex-1 rounded-xl px-3 text-sm font-semibold transition-colors", side === "yes" ? "bg-success text-success-foreground" : "border border-success/30 bg-success/10 text-success hover:bg-success/20"),
					children: [
						yesLabel,
						" ",
						(market.yesPrice * 100).toFixed(0),
						"¢"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSide("no"),
					className: cn("min-h-12 flex-1 rounded-xl px-3 text-sm font-semibold transition-colors", side === "no" ? "bg-danger text-danger-foreground" : "border border-danger/30 bg-danger/10 text-danger hover:bg-danger/20"),
					children: [
						noLabel,
						" ",
						(market.noPrice * 100).toFixed(0),
						"¢"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mb-2 block text-sm text-muted-foreground",
				children: t("trade.amount")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: amount,
				onChange: (event) => setAmount(event.target.value),
				inputMode: "decimal",
				placeholder: "50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-1 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("trade.shares") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-foreground",
						children: shares.toFixed(2)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("trade.return") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums text-foreground",
						children: [shares.toFixed(2), " RIA"]
					})]
				})]
			}),
			wallet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-3.5 w-3.5" }), t("trade.wallet", { balance: wallet.balance.toFixed(2) })]
			}) : user ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-primary",
						children: t("nav.signIn")
					}),
					" ",
					t("trade.signInWallet")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-4 w-full",
				disabled: pending,
				onClick: () => void trade(),
				children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, t("trade.buy", { side: side === "yes" ? yesLabel : noLabel })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: t("trade.disclaimer")
			})
		] })]
	});
}
function outcomeLabel(outcome, t) {
	if (outcome === "pump") return t("nft.pump");
	if (outcome === "dump") return t("nft.dump");
	if (outcome === "sell_out") return t("nft.sellOut");
	if (outcome === "miss") return t("nft.wont");
	return t("nft.void");
}
function NftDetailPage() {
	const { id } = Route$2.useParams();
	const initial = Route$2.useLoaderData();
	const data = useNftDetail(id).data ?? initial;
	const market = data.market;
	const stake = useMyNftStake(id);
	const { t, intlTag } = useI18n();
	if (!market) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-4 text-2xl font-bold",
			children: t("nft.notFound")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/nfts",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("nft.back")]
			})
		})]
	}) });
	const pump = market.kind === "pump_dump";
	const yesLabel = pump ? t("nft.pump") : t("nft.sellOut");
	const noLabel = pump ? t("nft.dump") : t("nft.wont");
	const detailLine = pump && market.floorNative != null ? `${t("nft.floor")} ${formatFloor(market.floorNative, market.currency)}` : market.minted != null && market.supply != null ? `${Math.round(market.minted).toLocaleString(intlTag)} / ${Math.round(market.supply).toLocaleString(intlTag)}` : market.name;
	const my = stake.data;
	const result = market.outcome ? t("nft.resolvedAs", { outcome: labelOutcome(market.outcome, yesLabel, noLabel, t("nft.void")) }) : my ? `${my.outcome === "yes" ? yesLabel : noLabel} @ ${Math.round(my.avgPrice * 100)}¢` : void 0;
	const share = async () => {
		try {
			const mode = await shareNftResult({
				title: market.name,
				eyebrow: pump ? t("nft.tabPump") : t("nft.tabMint"),
				leftLabel: yesLabel,
				rightLabel: noLabel,
				leftPrice: market.yesPrice,
				rightPrice: market.noPrice,
				detail: detailLine,
				result,
				url: window.location.href
			});
			toast.success(mode === "shared" ? t("market.shared") : t("market.downloaded"));
		} catch {
			toast.error(t("market.shareError"));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/nfts",
		className: "mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("nft.back")]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-8 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-start gap-4",
						children: [market.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: market.imageUrl,
							alt: "",
							referrerPolicy: "no-referrer",
							className: "h-16 w-16 rounded-xl bg-secondary object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-16 w-16 items-center justify-center rounded-xl bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-8 w-8 text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										children: pump ? t("nft.tabPump") : t("nft.tabMint")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										children: market.status === "active" ? t("market.active") : t("nft.resolved")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display mb-2 text-2xl font-bold",
									children: market.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { deadline: market.deadline })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: market.chain })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2",
							onClick: () => void share(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), t("nft.share")]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold",
						children: pump ? t("nft.floorChart") : t("nft.mintProgress")
					}), pump ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-3xl font-bold tabular-nums",
							children: market.floorNative != null ? formatFloor(market.floorNative, market.currency) : t("nft.awaiting")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorChart, {
							points: market.floorHistory,
							currency: market.currency
						}),
						market.quoteSource === "coingecko" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: t("nft.floorNote")
						}) : null
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MintBlock, {
						minted: market.minted,
						supply: market.supply,
						mintPrice: market.mintPrice,
						currency: market.currency
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 font-semibold",
							children: t("market.sentiment")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-success/20 bg-success/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-sm text-muted-foreground",
									children: yesLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-3xl font-bold text-success tabular-nums",
									children: [(market.yesPrice * 100).toFixed(0), "¢"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-danger/20 bg-danger/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-sm text-muted-foreground",
									children: noLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-3xl font-bold text-danger tabular-nums",
									children: [(market.noPrice * 100).toFixed(0), "¢"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChart, {
							yesHistory: data.yesHistory,
							noHistory: data.noHistory,
							yesLabel,
							noLabel
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold",
						children: t("market.resolution")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-relaxed text-muted-foreground",
						children: market.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold",
						children: t("market.stats")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("market.volume"),
								value: formatVolume(market.volume)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("market.activity24h"),
								value: formatVolume(market.volume24h)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("nft.openPrint"),
								value: pump && market.openFloor != null ? formatFloor(market.openFloor, market.currency) : market.openMinted != null ? String(Math.round(market.openMinted)) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("market.endDate"),
								value: formatDate(market.deadline, void 0, intlTag)
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NftComments, {
					marketId: market.id,
					comments: data.comments
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NftTradePanel, { market })
		})]
	})] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-1 text-xs text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-semibold tabular-nums",
		children: value
	})] });
}
function MintBlock({ minted, supply, mintPrice, currency }) {
	const { t, intlTag } = useI18n();
	const ratio = minted != null && supply ? Math.min(1, minted / supply) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-3xl font-bold tabular-nums",
			children: minted != null && supply != null ? `${Math.round(minted).toLocaleString(intlTag)} / ${Math.round(supply).toLocaleString(intlTag)}` : t("nft.awaiting")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 h-2 overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-primary",
				style: { width: `${ratio * 100}%` }
			})
		}),
		mintPrice != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				t("nft.mintPrice"),
				" ",
				formatFloor(mintPrice, currency)
			]
		}) : null
	] });
}
function labelOutcome(outcome, yes, no, voided) {
	if (outcome === "pump" || outcome === "sell_out") return yes;
	if (outcome === "dump" || outcome === "miss") return no;
	return voided;
}
//#endregion
export { NftDetailPage as component };
