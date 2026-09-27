import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as formatDate, o as formatVolume, r as cn, t as Button } from "./button-C3nr00Jv.mjs";
import { E as LayoutGrid, K as Bitcoin, L as Cpu, M as FlaskConical, N as Flame, P as Film, W as ChartColumn, a as Users, c as TrendingUp, f as Sparkles, g as SearchX, i as Vote, l as TrendingDown, o as Trophy, t as Zap, z as Clock } from "../_libs/lucide-react.mjs";
import { c as useI18n, o as Route$11 } from "./router-DrBwQxAl.mjs";
import { a as useCurrentUser } from "./probly-wordmark-Bb7ujiHC.mjs";
import { n as useHomePulse, t as Layout } from "./Layout-CvmlRB21.mjs";
import { t as Badge } from "./badge-C8UARlUg.mjs";
import { t as ReactionBar } from "./ReactionBar-3bJ1WIIT.mjs";
import { t as ChallengeBanner } from "./ChallengeBanner-CApwEklO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_1aTkvM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "all",
		icon: LayoutGrid
	},
	{
		id: "crypto",
		icon: Bitcoin
	},
	{
		id: "politics",
		icon: Vote
	},
	{
		id: "sports",
		icon: Trophy
	},
	{
		id: "entertainment",
		icon: Film
	},
	{
		id: "tech",
		icon: Cpu
	},
	{
		id: "science",
		icon: FlaskConical
	},
	{
		id: "economics",
		icon: TrendingUp
	}
];
function CategoryTabs({ activeCategory, onCategoryChange }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-2",
		children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onCategoryChange(category.id),
			className: cn("comic-tab flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 text-sm font-extrabold whitespace-nowrap transition-transform", activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(category.icon, { className: "h-4 w-4" }), t(`category.${category.id}`)]
		}, category.id))
	});
}
function MarketCard({ market }) {
	const { t, intlTag } = useI18n();
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
								children: t(`category.${market.category}`)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), formatDate(market.endDate, void 0, intlTag)]
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
								children: t("yes")
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
								children: t("no")
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
						children: t("buyYes")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "no",
						className: "flex-1",
						size: "sm",
						tabIndex: -1,
						children: t("buyNo")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between border-t border-border/50 pt-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3 w-3" }),
							formatVolume(market.volume),
							" ",
							t("vol")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionBar, {
						market,
						compact: true
					})]
				})
			]
		})
	});
}
function MarketGrid({ markets }) {
	const { t } = useI18n();
	if (markets.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchX, { className: "h-7 w-7 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 text-lg font-semibold",
				children: t("grid.emptyTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("grid.emptyBody")
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
		className: "card-surface flex items-center gap-3 rounded-xl px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink bg-accent text-accent-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold tabular-nums",
			children: value
		})] })]
	});
}
function StatsBar({ totalVolume, activeMarkets, traders, trades24h }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 grid grid-cols-2 gap-3 md:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: ChartColumn,
				label: t("stats.volume"),
				value: formatVolume(totalVolume)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: TrendingUp,
				label: t("stats.active"),
				value: String(activeMarkets)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: Users,
				label: t("stats.traders"),
				value: String(traders)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatItem, {
				icon: Zap,
				label: t("stats.trades24h"),
				value: String(trades24h)
			})
		]
	});
}
function HotMarkets({ markets }) {
	const { t } = useI18n();
	const hot = markets.filter((m) => m.volume24h > 0).slice(0, 4);
	if (hot.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "comic-tab mb-3 inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1 text-accent-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg",
				children: t("hot.title")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: hot.map((market, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/market/$id",
				params: { id: market.id },
				className: "card-surface rounded-2xl border border-border/50 p-4 transition-colors hover:border-primary/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(`category.${market.category}`) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-primary",
							children: ["#", i + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 line-clamp-2 text-sm font-semibold leading-snug",
						children: market.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-success tabular-nums",
							children: [
								(market.yesPrice * 100).toFixed(0),
								"¢ ",
								t("yes")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground tabular-nums",
							children: [formatVolume(market.volume24h), " 24h"]
						})]
					})
				]
			}, market.id))
		})]
	});
}
function Home() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const initial = Route$11.useLoaderData();
	const data = useHomePulse().data ?? initial;
	const user = useCurrentUser();
	const { t } = useI18n();
	const markets = data.markets;
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
						children: t("home.live")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mb-2 text-3xl font-bold md:text-4xl",
					children: t("home.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-lg text-muted-foreground",
					children: t("home.subtitle")
				})
			]
		}),
		user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChallengeBanner, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBar, { ...data.overview }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotMarkets, { markets: data.hot }),
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
