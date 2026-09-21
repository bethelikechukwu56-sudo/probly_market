import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { B as Bitcoin, E as LayoutGrid, M as Cpu, N as Clock, O as FlaskConical, R as ChartColumn, a as Users, f as Sparkles, h as SearchX, i as Vote, k as Film, l as TrendingUp, s as Trophy, t as Zap, u as TrendingDown } from "../_libs/lucide-react.mjs";
import { i as cn, o as formatDate, r as usePulse, s as formatVolume } from "./router-DHY9BIcC.mjs";
import { n as Layout, t as Button } from "./Layout-8mjeCc1d.mjs";
import { t as Badge } from "./badge-BEXwimUT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BXxZtgwV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "all",
		label: "All",
		icon: LayoutGrid
	},
	{
		id: "crypto",
		label: "Crypto",
		icon: Bitcoin
	},
	{
		id: "politics",
		label: "Politics",
		icon: Vote
	},
	{
		id: "sports",
		label: "Sports",
		icon: Trophy
	},
	{
		id: "entertainment",
		label: "Entertainment",
		icon: Film
	},
	{
		id: "tech",
		label: "Tech",
		icon: Cpu
	},
	{
		id: "science",
		label: "Science",
		icon: FlaskConical
	},
	{
		id: "economics",
		label: "Economics",
		icon: TrendingUp
	}
];
function CategoryTabs({ activeCategory, onCategoryChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-2",
		children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onCategoryChange(category.id),
			className: cn("flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-medium whitespace-nowrap transition-colors", activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(category.icon, { className: "h-4 w-4" }), category.label]
		}, category.id))
	});
}
function MarketCard({ market }) {
	const yesChange = market.outcomes[0]?.change24h || 0;
	const isPositive = yesChange >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/market/$id",
		params: { id: market.id },
		className: "block h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "card-surface group flex h-full flex-col rounded-2xl border border-border/50 p-5 transition-colors hover:border-primary/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-start gap-4",
					children: [market.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: market.imageUrl,
						alt: "",
						className: "h-12 w-12 rounded-lg bg-secondary object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-lg bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-6 w-6 text-muted-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-1 line-clamp-2 leading-tight font-semibold text-foreground transition-colors group-hover:text-primary",
							children: market.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "capitalize",
								children: market.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), formatDate(market.endDate)]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Yes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-success tabular-nums",
									children: [(market.yesPrice * 100).toFixed(0), "¢"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("flex items-center gap-0.5 text-xs", isPositive ? "text-success" : "text-danger"),
									children: [
										isPositive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-3 w-3" }),
										Math.abs(yesChange).toFixed(1),
										"%"
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-success",
								style: { width: `${market.yesPrice * 100}%` }
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "No"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-danger tabular-nums",
								children: [(market.noPrice * 100).toFixed(0), "¢"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-danger",
								style: { width: `${market.noPrice * 100}%` }
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "yes",
						className: "flex-1",
						size: "sm",
						tabIndex: -1,
						children: "Buy Yes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "no",
						className: "flex-1",
						size: "sm",
						tabIndex: -1,
						children: "Buy No"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3 w-3" }),
							formatVolume(market.volume),
							" Vol"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [formatVolume(market.liquidity), " Liq"] })]
				})
			]
		})
	});
}
function MarketGrid({ markets }) {
	if (markets.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, { className: "h-7 w-7 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 text-lg font-semibold",
				children: "No markets found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Try a different category or check back later."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
		children: markets.map((market) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketCard, { market }, market.id))
	});
}
function StatItem({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold tabular-nums",
			children: value
		})] })]
	});
}
function StatsBar() {
	const markets = usePulse((s) => s.markets);
	const traders = usePulse((s) => s.traders);
	const trades = usePulse((s) => s.trades);
	const totalVolume = markets.reduce((sum, m) => sum + m.volume, 0);
	const activeMarkets = markets.filter((m) => m.status === "active").length;
	const dayAgo = Date.now() - 864e5;
	const trades24h = trades.filter((t) => new Date(t.timestamp).getTime() > dayAgo).length + 128;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 grid grid-cols-2 gap-3 md:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: ChartColumn,
				label: "Total Volume",
				value: formatVolume(totalVolume)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: TrendingUp,
				label: "Active Markets",
				value: String(activeMarkets)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: Users,
				label: "Traders",
				value: String(traders.length)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: Zap,
				label: "Trades (24h)",
				value: String(trades24h)
			})
		]
	});
}
function Home() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const markets = usePulse((s) => s.markets);
	const filtered = (0, import_react.useMemo)(() => {
		if (activeCategory === "all") return markets;
		return markets.filter((m) => m.category === activeCategory);
	}, [activeCategory, markets]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-primary",
						children: "Live markets"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mb-2 text-3xl font-bold md:text-4xl",
					children: "Prediction Markets"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-lg text-muted-foreground",
					children: "Trade on real-world events. Fast, transparent, paper-settled on Rialo."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTabs, {
				activeCategory,
				onCategoryChange: setActiveCategory
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketGrid, { markets: filtered })
	] });
}
//#endregion
export { Home as component };
