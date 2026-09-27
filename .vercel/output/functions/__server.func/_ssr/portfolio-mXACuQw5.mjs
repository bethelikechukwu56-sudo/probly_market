import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as formatAddress, r as cn, t as Button } from "./button-C3nr00Jv.mjs";
import { C as LogIn, D as Layers, N as Flame, O as History, R as Compass, U as ChartPie, c as TrendingUp, l as TrendingDown, q as Award, r as Wallet, v as Percent } from "../_libs/lucide-react.mjs";
import { c as useI18n } from "./router-BST_wReC.mjs";
import { o as useCurrentUserState } from "./probly-wordmark-C-y93pX3.mjs";
import { o as useMyPulse, t as Layout } from "./Layout-BoSazKKI.mjs";
import { t as ChallengeBanner } from "./ChallengeBanner-BnCqX9KS.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-mXACuQw5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PositionCard({ position }) {
	const isProfit = position.pnl >= 0;
	const { t } = useI18n();
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
						children: position.outcome === "yes" ? t("yes") : t("no")
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
						children: t("position.shares")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold tabular-nums",
						children: position.shares.toFixed(2)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: t("position.avg")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold tabular-nums",
						children: [(position.avgPrice * 100).toFixed(1), "¢"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: t("position.current")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold tabular-nums",
						children: [(position.currentPrice * 100).toFixed(1), "¢"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs text-muted-foreground",
						children: t("position.pnl")
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
	const { t, intlTag } = useI18n();
	if (trades.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-8 text-center text-muted-foreground",
		children: t("history.empty")
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
						children: new Date(trade.timestamp).toLocaleString(intlTag, {
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
						children: trade.outcome === "yes" ? t("yes") : t("no")
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground tabular-nums",
					children: [
						trade.shares.toFixed(2),
						" ",
						t("trade.shares").toLowerCase(),
						" @ ",
						(trade.price * 100).toFixed(1),
						"¢"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold tabular-nums",
					children: [
						"$",
						trade.total.toFixed(2),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ms-2 text-xs font-normal text-muted-foreground",
							children: formatAddress(trade.txHash)
						})
					]
				})]
			})]
		}, trade.id))
	});
}
var BADGE_KEYS = {
	first_prediction: {
		title: "badge.first",
		blurb: "badge.firstBlurb"
	},
	ten_wins: {
		title: "badge.ten",
		blurb: "badge.tenBlurb"
	},
	top_ten: {
		title: "badge.top",
		blurb: "badge.topBlurb"
	}
};
function StatsDashboard() {
	const me = useMyPulse();
	const { t } = useI18n();
	const stats = me.data?.stats;
	if (!stats) return null;
	const items = [
		{
			icon: Percent,
			label: t("stats.winRate"),
			value: `${stats.winRate.toFixed(0)}%`
		},
		{
			icon: Layers,
			label: t("stats.predictions"),
			value: String(stats.totalTrades)
		},
		{
			icon: Compass,
			label: t("stats.bestCategory"),
			value: stats.bestCategory ? t(`category.${stats.bestCategory}`) : "—"
		},
		{
			icon: Flame,
			label: t("stats.streak"),
			value: `${stats.streakDays}d`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: t("stats.title")
					}),
					stats.rank ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: t("stats.rank", { n: stats.rank })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 grid grid-cols-2 gap-3 md:grid-cols-4",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 text-primary" }), item.label]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold capitalize tabular-nums",
						children: item.value
					})]
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: Object.entries(BADGE_KEYS).map(([id, meta]) => {
					const earned = stats.badges.includes(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-xl border px-3 py-2 text-sm ${earned ? "border-primary/40 bg-primary/10 text-foreground" : "border-border/50 text-muted-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t(meta.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs",
							children: earned ? t(meta.blurb) : t("stats.locked")
						})]
					}, id);
				})
			})
		]
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
	const { user, isPending } = useCurrentUserState();
	const me = useMyPulse();
	const { t } = useI18n();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-2xl bg-secondary" }) });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-10 w-10 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-2xl font-bold",
				children: t("portfolio.signInTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 max-w-md text-muted-foreground",
				children: t("portfolio.signInBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "wallet",
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }), t("nav.signIn")]
				})
			})
		]
	}) });
	const wallet = me.data?.wallet;
	const positions = me.data?.positions ?? [];
	const trades = me.data?.trades ?? [];
	const totalValue = positions.reduce((sum, pos) => sum + pos.shares * pos.currentPrice, 0);
	const totalPnl = positions.reduce((sum, pos) => sum + pos.pnl, 0);
	const cost = totalValue - totalPnl;
	const pnlPercent = cost > 0 ? totalPnl / cost * 100 : 0;
	const isProfitable = totalPnl >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mb-2 text-3xl font-bold md:text-4xl",
				children: t("portfolio.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: t("portfolio.subtitle")
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsDashboard, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 grid grid-cols-1 gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface rounded-2xl border border-border/50 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5 text-primary" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: t("portfolio.wallet")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-3xl font-bold tabular-nums",
							children: [(wallet?.balance ?? 0).toFixed(2), " RIA"]
						}),
						wallet ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-muted-foreground",
							children: wallet.address
						}) : null
					]
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
							children: t("portfolio.value")
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
							children: t("portfolio.pnl")
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, { className: "h-4 w-4" }), t("portfolio.positions")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: "history",
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-4 w-4" }), t("portfolio.history")]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "positions",
					children: positions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-12 text-center text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("portfolio.noPositions") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "mt-2 inline-block text-sm text-primary hover:underline",
							children: t("portfolio.browse")
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
