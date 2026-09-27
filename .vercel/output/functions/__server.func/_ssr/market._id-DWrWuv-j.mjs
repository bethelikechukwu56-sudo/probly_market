import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as formatDate, o as formatVolume, r as cn, t as Button } from "./button-C3nr00Jv.mjs";
import { J as ArrowRight, W as ChartColumn, Y as ArrowLeft, b as MessageSquare, c as TrendingUp, h as Send, l as TrendingDown, p as Share2, r as Wallet, u as Trash2, w as LoaderCircle, z as Clock } from "../_libs/lucide-react.mjs";
import { t as formatDistanceToNow } from "../_libs/date-fns.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as buyShares, c as useI18n, g as addComment, r as Route$3, x as deleteComment } from "./router-BO0wqGQQ.mjs";
import { a as useCurrentUser, o as useCurrentUserState } from "./probly-wordmark-D3WF-xkE.mjs";
import { a as useMarketDetail, o as useMyPulse, r as useInvalidatePulse, t as Layout } from "./Layout-Be5XvqIz.mjs";
import { t as Input } from "./input-D6XHUQGU.mjs";
import { t as Textarea } from "./textarea-C_jzKnsU.mjs";
import { t as Badge } from "./badge-C8UARlUg.mjs";
import { t as ReactionBar } from "./ReactionBar-CuiCAJPB.mjs";
import { r as sharePrediction, t as PriceChart } from "./share-card-CpYOSIDx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market._id-DWrWuv-j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TradingPanel({ market }) {
	const [selectedOutcome, setSelectedOutcome] = (0, import_react.useState)("yes");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const { user, isPending } = useCurrentUserState();
	const me = useMyPulse();
	const detail = useMarketDetail(market.id);
	const invalidate = useInvalidatePulse();
	const { t } = useI18n();
	const live = detail.data?.market ?? market;
	const wallet = me.data?.wallet;
	const price = selectedOutcome === "yes" ? live.yesPrice : live.noPrice;
	const parsed = parseFloat(amount);
	const shares = Number.isFinite(parsed) && parsed > 0 ? parsed / price : 0;
	const potentialReturn = shares;
	const potentialProfit = potentialReturn - (parsed || 0);
	const handleTrade = async () => {
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
			const result = await buyShares({ data: {
				marketId: live.id,
				outcome: selectedOutcome,
				amount: parsed
			} });
			if (!result.ok) {
				toast.error(t("trade.failed"), { description: result.message });
				return;
			}
			toast.success(t("trade.executed"), { description: result.message });
			setAmount("");
			invalidate(live.id);
		} catch {
			toast.error(t("trade.signIn"));
			navigate({ to: "/login" });
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface sticky top-24 rounded-2xl border border-border/50 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mb-4 text-lg font-semibold",
				children: t("trade.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelectedOutcome("yes"),
					className: cn("min-h-12 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors", selectedOutcome === "yes" ? "bg-success text-success-foreground" : "border border-success/30 bg-success/10 text-success hover:bg-success/20"),
					children: [
						t("yes"),
						" ",
						(live.yesPrice * 100).toFixed(0),
						"¢"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelectedOutcome("no"),
					className: cn("min-h-12 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors", selectedOutcome === "no" ? "bg-danger text-danger-foreground" : "border border-danger/30 bg-danger/10 text-danger hover:bg-danger/20"),
					children: [
						t("no"),
						" ",
						(live.noPrice * 100).toFixed(0),
						"¢"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-sm text-muted-foreground",
						children: t("trade.amount")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						placeholder: "0.00",
						value: amount,
						onChange: (e) => setAmount(e.target.value),
						className: "text-lg font-semibold",
						disabled: pending,
						min: "0"
					}),
					wallet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground tabular-nums",
						children: t("trade.wallet", { balance: wallet.balance.toFixed(2) })
					}) : user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: t("trade.provisioning")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "text-primary hover:underline",
								children: t("nav.signIn")
							}),
							" ",
							t("trade.signInWallet")
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex gap-2",
				children: [
					10,
					50,
					100,
					250
				].map((val) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setAmount(String(val)),
					disabled: pending,
					className: "min-h-10 flex-1 rounded-lg bg-secondary text-xs font-medium transition-colors hover:bg-secondary/80 disabled:opacity-50",
					children: ["$", val]
				}, val))
			}),
			shares > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 space-y-2 rounded-xl bg-secondary/50 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: t("trade.shares")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums",
							children: shares.toFixed(2)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: t("trade.avgPrice")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium tabular-nums",
							children: [(price * 100).toFixed(1), "¢"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-t border-border/50 pt-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: t("trade.return")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-success tabular-nums",
							children: [
								"$",
								potentialReturn.toFixed(2),
								" (",
								parsed > 0 ? `+${(potentialProfit / parsed * 100).toFixed(0)}%` : "0%",
								")"
							]
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => void handleTrade(),
				className: "w-full",
				variant: selectedOutcome === "yes" ? "yesActive" : "noActive",
				size: "lg",
				disabled: pending || isPending,
				children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), t("trade.processing")] }) : !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" }), t("trade.signIn")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t("trade.buy", { side: selectedOutcome === "yes" ? t("yes") : t("no") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted-foreground",
				children: t("trade.disclaimer")
			})
		]
	});
}
function MarketComments({ marketId, initialComments }) {
	const [text, setText] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const user = useCurrentUser();
	const comments = useMarketDetail(marketId).data?.comments ?? initialComments;
	const invalidate = useInvalidatePulse();
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
	const remove = async (id) => {
		try {
			await deleteComment({ data: { id } });
			invalidate(marketId);
		} catch {
			toast.error(t("comments.deleteError"));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface rounded-2xl border border-border/50 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: t("comments.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: comments.length
					})
				]
			}),
			user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					placeholder: t("comments.placeholder"),
					value: text,
					onChange: (e) => setText(e.target.value),
					rows: 3
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => void submit(),
						disabled: !text.trim() || pending,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), t("comments.post")]
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-6 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "text-primary hover:underline",
						children: t("comments.signIn")
					}),
					" ",
					t("comments.join")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-center text-sm text-muted-foreground",
					children: t("comments.empty")
				}) : comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border/40 bg-secondary/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium",
								children: comment.username[0]?.toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: comment.username
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: formatDistanceToNow(new Date(comment.createdAt), {
									addSuffix: true,
									locale: dateLocale
								})
							})] })]
						}), user?.id === comment.userId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void remove(comment.id),
							className: "text-muted-foreground hover:text-danger",
							"aria-label": t("comments.delete"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-foreground/90",
						children: comment.content
					})]
				}, comment.id))
			})
		]
	});
}
function ShareMarketButton({ market }) {
	const [pending, setPending] = (0, import_react.useState)(false);
	const { t } = useI18n();
	const share = async () => {
		setPending(true);
		try {
			const mode = await sharePrediction({
				title: market.title,
				yesPrice: market.yesPrice,
				noPrice: market.noPrice,
				category: market.category,
				url: window.location.href
			});
			toast.success(mode === "shared" ? t("market.shared") : t("market.downloaded"));
		} catch (err) {
			toast.error(err instanceof Error ? err.message : t("market.shareError"));
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		onClick: () => void share(),
		disabled: pending,
		children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), t("market.share")]
	});
}
var EMPTY_HISTORY = [];
function MarketDetail() {
	const { id } = Route$3.useParams();
	const initial = Route$3.useLoaderData();
	const data = useMarketDetail(id).data ?? initial;
	const market = data.market;
	const { t, intlTag } = useI18n();
	if (!market) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-4 text-2xl font-bold",
			children: t("market.notFound")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("market.back")]
			})
		})]
	}) });
	const yesHistory = data.yesHistory.length ? data.yesHistory : EMPTY_HISTORY;
	const noHistory = data.noHistory.length ? data.noHistory : EMPTY_HISTORY;
	const yesChange = market.outcomes[0]?.change24h ?? 0;
	const isPositive = yesChange >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), t("market.back")]
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
										children: t(`category.${market.category}`)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "border-primary/30 text-primary",
										children: market.status === "active" ? t("market.active") : market.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display mb-2 text-2xl font-bold",
									children: market.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-4 text-sm text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), t("market.ends", { date: formatDate(market.endDate, {
											month: "long",
											day: "numeric",
											year: "numeric"
										}, intlTag) })]
									})
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionBar, { market }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareMarketButton, { market })]
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: t("yes")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("flex items-center gap-1 text-xs", isPositive ? "text-success" : "text-danger"),
										children: [
											isPositive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3" }),
											Math.abs(yesChange).toFixed(1),
											"%"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-3xl font-bold text-success tabular-nums",
									children: [(market.yesPrice * 100).toFixed(0), "¢"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-danger/20 bg-danger/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: t("no")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("flex items-center gap-1 text-xs", !isPositive ? "text-success" : "text-danger"),
										children: [
											!isPositive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3" }),
											Math.abs(yesChange).toFixed(1),
											"%"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-3xl font-bold text-danger tabular-nums",
									children: [(market.noPrice * 100).toFixed(0), "¢"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChart, {
							yesHistory,
							noHistory
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 font-semibold",
							children: t("market.resolution")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed text-muted-foreground",
							children: market.description
						}),
						market.resolutionSource ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: t("market.resolutionSource")
								}),
								" ",
								market.resolutionSource
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold",
						children: t("market.stats")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: t("market.volume")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold tabular-nums",
								children: formatVolume(market.volume)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: t("market.activity24h")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold tabular-nums",
								children: formatVolume(market.volume24h)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: t("market.created")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: formatDate(market.createdAt, void 0, intlTag)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: t("market.endDate")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: formatDate(market.endDate, void 0, intlTag)
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketComments, {
					marketId: market.id,
					initialComments: data.comments
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradingPanel, { market })
		})]
	})] });
}
//#endregion
export { MarketDetail as component };
