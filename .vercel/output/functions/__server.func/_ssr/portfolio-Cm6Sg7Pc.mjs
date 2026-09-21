import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as History, L as ChartPie, S as LogIn, l as TrendingUp, r as Wallet, u as TrendingDown } from "../_libs/lucide-react.mjs";
import { a as formatAddress, i as cn, r as usePulse } from "./router-DHY9BIcC.mjs";
import { n as Layout, t as Button } from "./Layout-8mjeCc1d.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-Cm6Sg7Pc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PositionCard({ position }) {
	const isProfit = position.pnl >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/market/$id",
		params: { id: position.marketId },
		className: "block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 line-clamp-2 leading-tight font-semibold",
						children: position.marketTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("inline-flex items-center rounded px-2 py-1 text-xs font-semibold", position.outcome === "yes" ? "bg-success/20 text-success" : "bg-danger/20 text-danger"),
						children: position.outcome.toUpperCase()
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold", isProfit ? "bg-success/20 text-success" : "bg-danger/20 text-danger"),
					children: [
						isProfit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-4 w-4" }),
						isProfit ? "+" : "",
						position.pnlPercent.toFixed(1),
						"%"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: "Shares"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold tabular-nums",
						children: position.shares.toFixed(2)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: "Avg Price"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold tabular-nums",
						children: [(position.avgPrice * 100).toFixed(1), "¢"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: "Current Price"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold tabular-nums",
						children: [(position.currentPrice * 100).toFixed(1), "¢"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: "P&L"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("font-semibold tabular-nums", isProfit ? "text-success" : "text-danger"),
						children: [
							isProfit ? "+" : "",
							"$",
							position.pnl.toFixed(2)
						]
					})] })
				]
			})]
		})
	});
}
function TradeHistory({ trades }) {
	if (trades.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-8 text-center text-muted-foreground",
		children: "No trades yet"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: trades.map((trade) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border/50 bg-card p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "line-clamp-1 text-sm font-medium",
						children: trade.marketTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: new Date(trade.timestamp).toLocaleString("en-US", {
							month: "short",
							day: "numeric",
							hour: "2-digit",
							minute: "2-digit"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded px-2 py-0.5 text-xs font-semibold", trade.type === "buy" ? "bg-success/20 text-success" : "bg-danger/20 text-danger"),
						children: trade.type.toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded px-2 py-0.5 text-xs font-semibold", trade.outcome === "yes" ? "bg-success/20 text-success" : "bg-danger/20 text-danger"),
						children: trade.outcome.toUpperCase()
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground tabular-nums",
					children: [
						trade.shares.toFixed(2),
						" shares @ ",
						(trade.price * 100).toFixed(1),
						"¢"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold tabular-nums",
					children: [
						"$",
						trade.total.toFixed(2),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-xs font-normal text-muted-foreground",
							children: formatAddress(trade.txHash)
						})
					]
				})]
			})]
		}, trade.id))
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function PortfolioPage() {
	const session = usePulse((s) => s.session);
	const wallet = usePulse((s) => s.wallet);
	const connectWallet = usePulse((s) => s.connectWallet);
	const positions = usePulse((s) => s.positions);
	const trades = usePulse((s) => s.trades);
	const totalValue = positions.reduce((sum, pos) => sum + pos.shares * pos.currentPrice, 0);
	const totalPnl = positions.reduce((sum, pos) => sum + pos.pnl, 0);
	const cost = totalValue - totalPnl;
	const pnlPercent = cost > 0 ? totalPnl / cost * 100 : 0;
	const isProfitable = totalPnl >= 0;
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-10 w-10 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-2xl font-bold",
				children: "Sign in required"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 max-w-md text-muted-foreground",
				children: "Sign in to view your portfolio, track positions, and see your trading history."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "wallet",
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }), "Sign in"]
				})
			})
		]
	}) });
	if (!wallet.connected) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-10 w-10 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-2xl font-bold",
				children: "Connect your wallet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 max-w-md text-muted-foreground",
				children: "Connect a paper wallet to view positions and trading history."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "wallet",
				size: "lg",
				onClick: connectWallet,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" }), "Connect wallet"]
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-3xl font-bold md:text-4xl",
				children: "Portfolio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Track your positions and trading activity"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 grid grid-cols-1 gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Wallet balance"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-3xl font-bold tabular-nums",
						children: [wallet.balance.toFixed(2), " RIA"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, { className: "h-5 w-5 text-primary" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Portfolio value"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-3xl font-bold tabular-nums",
						children: ["$", totalValue.toFixed(2)]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex h-10 w-10 items-center justify-center rounded-lg ${isProfitable ? "bg-success/10" : "bg-danger/10"}`,
							children: isProfitable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-5 w-5 text-danger" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "Total P&L"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `text-3xl font-bold tabular-nums ${isProfitable ? "text-success" : "text-danger"}`,
							children: [
								isProfitable ? "+" : "",
								"$",
								totalPnl.toFixed(2)
							]
						}), totalValue > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `text-sm ${isProfitable ? "text-success" : "text-danger"}`,
							children: [
								isProfitable ? "+" : "",
								pnlPercent.toFixed(1),
								"%"
							]
						}) : null]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "positions",
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "positions",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, { className: "h-4 w-4" }), "Positions"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "history",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-4 w-4" }), "History"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "positions",
					children: positions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No open positions yet" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "mt-2 inline-block text-sm text-primary hover:underline",
							children: "Browse markets to start trading"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 md:grid-cols-2",
						children: positions.map((position) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PositionCard, { position }, position.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "history",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeHistory, { trades })
				})
			]
		})
	] });
}
//#endregion
export { PortfolioPage as component };
