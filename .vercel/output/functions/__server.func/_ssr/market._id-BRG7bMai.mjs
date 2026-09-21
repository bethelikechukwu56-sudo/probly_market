import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { H as ArrowLeft, N as Clock, R as ChartColumn, V as ArrowRight, _ as MessageSquare, d as Trash2, l as TrendingUp, m as Send, p as Share2, r as Wallet, u as TrendingDown, w as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as cn, n as Route, o as formatDate, r as usePulse, s as formatVolume } from "./router-DHY9BIcC.mjs";
import { n as Layout, t as Button } from "./Layout-8mjeCc1d.mjs";
import { t as Input } from "./input-DKl2dmLE.mjs";
import { t as Textarea } from "./textarea-jkDGQl83.mjs";
import { t as Badge } from "./badge-BEXwimUT.mjs";
import { a as Tooltip, i as Area, n as YAxis, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as formatDistanceToNow } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market._id-BRG7bMai.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TradingPanel({ market }) {
	const [selectedOutcome, setSelectedOutcome] = (0, import_react.useState)("yes");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const session = usePulse((s) => s.session);
	const wallet = usePulse((s) => s.wallet);
	const connectWallet = usePulse((s) => s.connectWallet);
	const buy = usePulse((s) => s.buy);
	const live = usePulse((s) => s.markets.find((m) => m.id === market.id)) ?? market;
	const price = selectedOutcome === "yes" ? live.yesPrice : live.noPrice;
	const parsed = parseFloat(amount);
	const shares = Number.isFinite(parsed) && parsed > 0 ? parsed / price : 0;
	const potentialReturn = shares;
	const potentialProfit = potentialReturn - (parsed || 0);
	const handleTrade = async () => {
		if (!session) {
			navigate({ to: "/auth" });
			return;
		}
		if (!wallet.connected) {
			connectWallet();
			return;
		}
		if (!Number.isFinite(parsed) || parsed <= 0) {
			toast.error("Invalid amount", { description: "Enter a valid amount to trade." });
			return;
		}
		setPending(true);
		await new Promise((r) => setTimeout(r, 700));
		const result = buy({
			marketId: live.id,
			outcome: selectedOutcome,
			amount: parsed
		});
		setPending(false);
		if (!result.ok) {
			toast.error("Trade failed", { description: result.message });
			return;
		}
		toast.success("Trade executed", { description: result.message });
		setAmount("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-surface sticky top-24 rounded-2xl border border-border/50 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mb-4 text-lg font-semibold",
				children: "Trade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelectedOutcome("yes"),
					className: cn("min-h-12 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors", selectedOutcome === "yes" ? "bg-success text-success-foreground" : "border border-success/30 bg-success/10 text-success hover:bg-success/20"),
					children: [
						"Yes ",
						(live.yesPrice * 100).toFixed(0),
						"¢"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelectedOutcome("no"),
					className: cn("min-h-12 flex-1 rounded-xl px-4 text-sm font-semibold transition-colors", selectedOutcome === "no" ? "bg-danger text-danger-foreground" : "border border-danger/30 bg-danger/10 text-danger hover:bg-danger/20"),
					children: [
						"No ",
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
						children: "Amount (RIA)"
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
					wallet.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground tabular-nums",
						children: [
							"Balance: ",
							wallet.balance.toFixed(2),
							" RIA"
						]
					}) : null
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
							children: "Shares"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums",
							children: shares.toFixed(2)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Avg Price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium tabular-nums",
							children: [(price * 100).toFixed(1), "¢"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-t border-border/50 pt-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Potential return"
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
				disabled: pending,
				children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Processing"] }) : !session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" }), "Sign in to trade"] }) : !wallet.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" }), "Connect wallet"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Buy ",
					selectedOutcome.toUpperCase(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted-foreground",
				children: "Trades are final · DYOR"
			})
		]
	});
}
function formatTime(timestamp) {
	return new Date(timestamp).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
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
function PriceChart({ yesHistory, noHistory }) {
	const chartData = (0, import_react.useMemo)(() => {
		const allPoints = /* @__PURE__ */ new Map();
		for (const point of yesHistory) {
			const existing = allPoints.get(point.timestamp) ?? { timestamp: point.timestamp };
			existing.yes = point.price * 100;
			allPoints.set(point.timestamp, existing);
		}
		for (const point of noHistory) {
			const existing = allPoints.get(point.timestamp) ?? { timestamp: point.timestamp };
			existing.no = point.price * 100;
			allPoints.set(point.timestamp, existing);
		}
		return [...allPoints.values()].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
	}, [yesHistory, noHistory]);
	if (chartData.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-56 items-center justify-center text-sm text-muted-foreground",
		children: "No price history yet"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: ({ w, h }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
		data: chartData,
		width: w,
		height: h,
		margin: {
			top: 8,
			right: 8,
			left: 0,
			bottom: 0
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "yesFill",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "hsl(145 50% 42%)",
					stopOpacity: .35
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "hsl(145 50% 42%)",
					stopOpacity: 0
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "noFill",
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "hsl(0 62% 52%)",
					stopOpacity: .28
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "hsl(0 62% 52%)",
					stopOpacity: 0
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "timestamp",
				tickFormatter: formatTime,
				tick: {
					fill: "hsl(45 10% 62%)",
					fontSize: 11
				},
				axisLine: false,
				tickLine: false,
				minTickGap: 28
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				domain: [0, 100],
				tickFormatter: (v) => `${v}¢`,
				tick: {
					fill: "hsl(45 10% 62%)",
					fontSize: 11
				},
				axisLine: false,
				tickLine: false,
				width: 40
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				contentStyle: {
					background: "hsl(20 10% 11%)",
					border: "1px solid hsl(20 10% 20%)",
					borderRadius: 12,
					color: "hsl(45 20% 95%)"
				},
				labelFormatter: (label) => formatTime(String(label)),
				formatter: (value, name) => [`${Number(value).toFixed(1)}¢`, name === "yes" ? "Yes" : "No"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				type: "monotone",
				dataKey: "yes",
				stroke: "hsl(145 50% 42%)",
				fill: "url(#yesFill)",
				strokeWidth: 2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				type: "monotone",
				dataKey: "no",
				stroke: "hsl(0 62% 52%)",
				fill: "url(#noFill)",
				strokeWidth: 2,
				dot: false
			})
		]
	}) });
}
function MarketComments({ marketId }) {
	const [text, setText] = (0, import_react.useState)("");
	const session = usePulse((s) => s.session);
	const comments = usePulse((s) => s.comments).filter((c) => c.marketId === marketId);
	const addComment = usePulse((s) => s.addComment);
	const deleteComment = usePulse((s) => s.deleteComment);
	const submit = () => {
		const result = addComment(marketId, text);
		if (!result.ok) {
			toast.error(result.message);
			return;
		}
		setText("");
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
						children: "Discussion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: comments.length
					})
				]
			}),
			session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					placeholder: "Share your thesis…",
					value: text,
					onChange: (e) => setText(e.target.value),
					rows: 3
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: submit,
						disabled: !text.trim(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), "Post"]
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-sm text-muted-foreground",
				children: "Sign in to join the discussion."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-center text-sm text-muted-foreground",
					children: "No comments yet."
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
								children: formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })
							})] })]
						}), session?.id === comment.userId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => deleteComment(comment.id),
							className: "text-muted-foreground hover:text-danger",
							"aria-label": "Delete comment",
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
var EMPTY_HISTORY = [];
function MarketDetail() {
	const { id } = Route.useParams();
	const market = usePulse((s) => s.markets.find((m) => m.id === id));
	const priceHistory = usePulse((s) => s.priceHistory);
	if (!market) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-4 text-2xl font-bold",
			children: "Market not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to markets"]
			})
		})]
	}) });
	const yesOutcome = market.outcomes.find((o) => o.name === "Yes");
	const noOutcome = market.outcomes.find((o) => o.name === "No");
	const yesHistory = yesOutcome ? priceHistory[yesOutcome.id] ?? EMPTY_HISTORY : EMPTY_HISTORY;
	const noHistory = noOutcome ? priceHistory[noOutcome.id] ?? EMPTY_HISTORY : EMPTY_HISTORY;
	const yesChange = yesOutcome?.change24h ?? 0;
	const isPositive = yesChange >= 0;
	const share = async () => {
		const url = window.location.href;
		try {
			await navigator.clipboard.writeText(url);
			toast.success("Link copied");
		} catch {
			toast.message(url);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "mb-6 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Back to markets"]
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
										className: "capitalize",
										children: market.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "border-primary/30 text-primary",
										children: market.status === "active" ? "Active" : market.status
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
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
											"Ends ",
											formatDate(market.endDate, {
												month: "long",
												day: "numeric",
												year: "numeric"
											})
										]
									})
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: () => void share(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), "Share"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-4 font-semibold",
							children: "Price history"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-success/20 bg-success/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Yes"
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
										children: "No"
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
							children: "Resolution criteria"
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
									children: "Resolution source:"
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
						children: "Market stats"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: "Volume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold tabular-nums",
								children: formatVolume(market.volume)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: "Liquidity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold tabular-nums",
								children: formatVolume(market.liquidity)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: "Created"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: formatDate(market.createdAt)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-xs text-muted-foreground",
								children: "End date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: formatDate(market.endDate)
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketComments, { marketId: market.id })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradingPanel, { market })
		})]
	})] });
}
//#endregion
export { MarketDetail as component };
