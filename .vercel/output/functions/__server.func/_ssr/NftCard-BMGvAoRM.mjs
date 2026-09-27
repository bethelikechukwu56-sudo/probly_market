import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as formatVolume, t as Button } from "./button-C3nr00Jv.mjs";
import { z as Clock } from "../_libs/lucide-react.mjs";
import { c as useI18n } from "./router-BST_wReC.mjs";
import { t as Badge } from "./badge-C8UARlUg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/NftCard-BMGvAoRM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function parts(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	return {
		days: Math.floor(total / 86400),
		hours: Math.floor(total % 86400 / 3600),
		minutes: Math.floor(total % 3600 / 60),
		seconds: total % 60
	};
}
function Countdown({ deadline }) {
	const { t } = useI18n();
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const timer = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	if (now == null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums text-muted-foreground",
		children: t("nft.countdown")
	});
	const left = new Date(deadline).getTime() - now;
	if (left <= 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-danger",
		children: t("nft.ended")
	});
	const { days, hours, minutes, seconds } = parts(left);
	const clock = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums",
		suppressHydrationWarning: true,
		children: days > 0 ? `${days}d ${clock}` : clock
	});
}
function formatQty(value) {
	if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
	if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
	if (value >= 1e3) return value.toLocaleString("en-US");
	return value.toLocaleString("en-US", { maximumFractionDigits: 4 });
}
function formatFloor(value, currency) {
	const digits = value >= 100 ? 2 : value >= 1 ? 3 : 4;
	return `${value.toLocaleString("en-US", { maximumFractionDigits: digits })} ${currency}`;
}
function Sparkline({ points }) {
	if (points.length < 2) return null;
	const w = 320;
	const h = 56;
	const prices = points.map((point) => point.price);
	const min = Math.min(...prices);
	const span = Math.max(...prices) - min || min * .02 || 1;
	const d = prices.map((price, index) => {
		const x = index / (prices.length - 1) * w;
		const y = h - (price - min) / span * 50 - 3;
		return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
	}).join(" ");
	const up = prices[prices.length - 1] >= prices[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: `h-14 w-full ${up ? "text-success" : "text-danger"}`,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.5",
			strokeLinejoin: "round",
			strokeLinecap: "round"
		})
	});
}
function NftCard({ market }) {
	const { t } = useI18n();
	const pump = market.kind === "pump_dump";
	const minted = market.minted ?? 0;
	const supply = market.supply ?? 0;
	const ratio = supply > 0 ? Math.min(1, minted / supply) : 0;
	const live = market.quoteSource === "coingecko" || market.quoteSource === "magiceden" || market.quoteSource === "chain";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/nft/$id",
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
						referrerPolicy: "no-referrer",
						className: "h-12 w-12 rounded-lg bg-secondary object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-muted-foreground",
						children: market.name.slice(0, 1)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-1 line-clamp-2 leading-tight font-semibold transition-colors group-hover:text-primary",
							children: market.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								children: pump ? t("nft.tabPump") : t("nft.tabMint")
							})
						})]
					})]
				}),
				pump ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: t("nft.floor")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums",
								children: market.floorNative != null ? formatFloor(market.floorNative, market.currency) : t("nft.awaiting")
							})]
						}),
						market.floorChange24h != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: `mb-1 text-xs tabular-nums ${market.floorChange24h >= 0 ? "text-success" : "text-danger"}`,
							children: [
								market.floorChange24h >= 0 ? "+" : "",
								market.floorChange24h.toFixed(2),
								"% 24h"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, { points: market.floorHistory })
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t("nft.mintProgress")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tabular-nums",
								children: market.minted != null && market.supply != null ? `${formatQty(market.minted)} / ${formatQty(market.supply)}` : t("nft.awaiting")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 overflow-hidden rounded-full bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary",
								style: { width: `${Math.max(ratio * 100, ratio > 0 ? 2 : 0)}%` }
							})
						}),
						market.mintPrice != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								t("nft.mintPrice"),
								" ",
								formatFloor(market.mintPrice, market.currency)
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { deadline: market.deadline }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ms-auto",
							children: live ? t("nft.live") : t("nft.manual")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: pump ? t("nft.pump") : t("nft.sellOut")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-success tabular-nums",
									children: [(market.yesPrice * 100).toFixed(0), "¢"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-success",
									style: { width: `${market.yesPrice * 100}%` }
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: pump ? t("nft.dump") : t("nft.wont")
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "yes",
								className: "flex-1",
								size: "sm",
								tabIndex: -1,
								children: [
									pump ? t("nft.predictPump") : t("nft.predictSell"),
									" ",
									(market.yesPrice * 100).toFixed(0),
									"¢"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "no",
								className: "flex-1",
								size: "sm",
								tabIndex: -1,
								children: [
									pump ? t("nft.predictDump") : t("nft.predictWont"),
									" ",
									(market.noPrice * 100).toFixed(0),
									"¢"
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 border-t border-border/50 pt-2 text-xs text-muted-foreground",
					children: [
						formatVolume(market.volume),
						" ",
						t("vol"),
						market.volume24h > 0 ? ` · ${formatVolume(market.volume24h)} 24h` : ""
					]
				})
			]
		})
	});
}
//#endregion
export { NftCard as n, formatFloor as r, Countdown as t };
