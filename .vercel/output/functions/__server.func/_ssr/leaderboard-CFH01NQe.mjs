import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as formatAddress, o as formatVolume, r as cn } from "./button-C3nr00Jv.mjs";
import { S as Medal, W as ChartColumn, c as TrendingUp, o as Trophy } from "../_libs/lucide-react.mjs";
import { a as Route$8, c as useI18n } from "./router-BST_wReC.mjs";
import { a as useCurrentUser } from "./probly-wordmark-C-y93pX3.mjs";
import { i as useLeaderboard, t as Layout } from "./Layout-BoSazKKI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leaderboard-CFH01NQe.js
var import_jsx_runtime = require_jsx_runtime();
function LeaderboardPage() {
	const initial = Route$8.useLoaderData();
	const ranked = useLeaderboard().data ?? initial;
	const user = useCurrentUser();
	const { t } = useI18n();
	const getRankIcon = (rank) => {
		if (rank === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-accent" });
		if (rank === 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-5 w-5 text-muted-foreground" });
		if (rank === 3) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-5 w-5 text-primary" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-5 w-5 items-center justify-center text-sm text-muted-foreground",
			children: rank
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold md:text-4xl",
					children: t("leaderboard.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg text-muted-foreground",
				children: t("leaderboard.subtitle")
			})]
		}),
		ranked.length >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 grid grid-cols-3 gap-3 md:gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface order-1 rounded-2xl border border-border/50 p-4 text-center md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted md:h-16 md:w-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-6 w-6 text-muted-foreground md:h-8 md:w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-semibold",
							children: ranked[1].username
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-bold text-success",
							children: ["+", formatVolume(ranked[1].totalProfit)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t("leaderboard.tradesCount", { n: ranked[1].totalTrades })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface order-0 -mt-2 rounded-2xl border border-primary/30 p-4 text-center md:order-1 md:-mt-4 md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 md:h-20 md:w-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-8 w-8 text-primary md:h-10 md:w-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-lg font-semibold",
							children: ranked[0].username
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xl font-bold text-success",
							children: ["+", formatVolume(ranked[0].totalProfit)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t("leaderboard.tradesCount", { n: ranked[0].totalTrades })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-surface order-2 rounded-2xl border border-border/50 p-4 text-center md:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 md:h-16 md:w-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Medal, { className: "h-6 w-6 text-primary md:h-8 md:w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-semibold",
							children: ranked[2].username
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-bold text-success",
							children: ["+", formatVolume(ranked[2].totalProfit)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t("leaderboard.tradesCount", { n: ranked[2].totalTrades })
						})
					]
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-surface overflow-hidden rounded-2xl border border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden grid-cols-12 gap-4 border-b border-border/50 p-4 text-sm font-medium text-muted-foreground md:grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1",
						children: t("leaderboard.rank")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-4",
						children: t("leaderboard.trader")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 text-right",
						children: t("leaderboard.volume")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 text-right",
						children: t("leaderboard.profit")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 text-right",
						children: t("leaderboard.trades")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right",
						children: t("leaderboard.win")
					})
				]
			}), ranked.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/30",
				children: ranked.map((trader) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("grid grid-cols-6 items-center gap-2 p-4 md:grid-cols-12 md:gap-4", user?.id === trader.id ? "bg-primary/5" : ""),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-1",
							children: getRankIcon(trader.rank)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-3 flex min-w-0 items-center gap-3 md:col-span-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium",
								children: trader.username[0]?.toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: trader.username
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden truncate text-xs text-muted-foreground sm:block",
									children: formatAddress(trader.walletAddress)
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2 hidden text-right md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center justify-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3 w-3 text-muted-foreground" }), formatVolume(trader.totalVolume)]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2 text-right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("font-semibold tabular-nums", trader.totalProfit >= 0 ? "text-success" : "text-danger"),
								children: [trader.totalProfit >= 0 ? "+" : "", formatVolume(trader.totalProfit)]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-2 hidden text-right tabular-nums md:block",
							children: trader.totalTrades
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "col-span-1 hidden text-right md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("text-sm tabular-nums", trader.winRate >= 50 ? "text-success" : "text-muted-foreground"),
								children: [trader.winRate.toFixed(0), "%"]
							})
						})
					]
				}, trader.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-12 text-center text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "mx-auto mb-4 h-12 w-12 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("leaderboard.empty") })]
			})]
		})
	] });
}
//#endregion
export { LeaderboardPage as component };
