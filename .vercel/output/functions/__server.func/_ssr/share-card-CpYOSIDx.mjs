import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as useI18n, l as useTheme } from "./router-BO0wqGQQ.mjs";
import { i as probly_wordmark_default } from "./probly-wordmark-D3WF-xkE.mjs";
import { a as Tooltip, i as Area, n as YAxis, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/share-card-CpYOSIDx.js
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
function PriceChart({ yesHistory, noHistory, yesLabel, noLabel }) {
	const { t, intlTag } = useI18n();
	const { theme } = useTheme();
	const colors = (0, import_react.useMemo)(() => ({
		muted: readCssVar("--chart-muted", "hsl(45 10% 62%)"),
		tooltipBg: readCssVar("--chart-tooltip-bg", "hsl(20 10% 11%)"),
		tooltipBorder: readCssVar("--chart-tooltip-border", "hsl(20 10% 20%)"),
		tooltipFg: readCssVar("--chart-tooltip-fg", "hsl(45 20% 95%)")
	}), [theme]);
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
	const formatTime = (timestamp) => new Date(timestamp).toLocaleDateString(intlTag, {
		month: "short",
		day: "numeric"
	});
	if (chartData.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-56 items-center justify-center text-sm text-muted-foreground",
		children: t("chart.empty")
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
					fill: colors.muted,
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
					fill: colors.muted,
					fontSize: 11
				},
				axisLine: false,
				tickLine: false,
				width: 40
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				contentStyle: {
					background: colors.tooltipBg,
					border: `1px solid ${colors.tooltipBorder}`,
					borderRadius: 12,
					color: colors.tooltipFg
				},
				labelFormatter: (label) => formatTime(String(label)),
				formatter: (value, name) => [`${Number(value).toFixed(1)}¢`, name === "yes" ? yesLabel ?? t("yes") : noLabel ?? t("no")]
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
function wrapText(ctx, text, maxWidth) {
	const words = text.split(" ");
	const lines = [];
	let line = "";
	for (const word of words) {
		const next = line ? `${line} ${word}` : word;
		if (ctx.measureText(next).width > maxWidth && line) {
			lines.push(line);
			line = word;
		} else line = next;
	}
	if (line) lines.push(line);
	return lines.slice(0, 3);
}
function roundRect(ctx, x, y, w, h, r, fill) {
	ctx.beginPath();
	ctx.moveTo(x + r, y);
	ctx.arcTo(x + w, y, x + w, y + h, r);
	ctx.arcTo(x + w, y + h, x, y + h, r);
	ctx.arcTo(x, y + h, x, y, r);
	ctx.arcTo(x, y, x + w, y, r);
	ctx.closePath();
	ctx.fillStyle = fill;
	ctx.fill();
}
var wordmarkPromise = null;
function loadWordmark() {
	if (!wordmarkPromise) wordmarkPromise = new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error("logo"));
		img.src = probly_wordmark_default;
	});
	return wordmarkPromise;
}
async function paintBrand(ctx) {
	try {
		const img = await loadWordmark();
		const height = 86;
		const width = img.width / img.height * height;
		ctx.drawImage(img, 56, 28, width, height);
	} catch {
		ctx.font = "400 36px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
		ctx.fillStyle = "#fff6e8";
		ctx.fillText("Probly", 64, 88);
	}
}
async function renderPredictionCard(opts) {
	const w = 1200;
	const h = 630;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Canvas unavailable");
	ctx.fillStyle = "#0c1224";
	ctx.fillRect(0, 0, w, h);
	const g = ctx.createLinearGradient(0, 0, w, h);
	g.addColorStop(0, "#162038");
	g.addColorStop(1, "#0c1224");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, w, h);
	ctx.fillStyle = "#ffe566";
	ctx.fillRect(0, 0, 18, h);
	await paintBrand(ctx);
	ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#d7ccbc";
	ctx.fillText(opts.category.toUpperCase(), 64, 156);
	ctx.font = "400 52px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#fff6e8";
	wrapText(ctx, opts.title, 1070).forEach((line, i) => ctx.fillText(line, 64, 228 + i * 60));
	const yes = `${Math.round(opts.yesPrice * 100)}¢`;
	const no = `${Math.round(opts.noPrice * 100)}¢`;
	const boxY = 430;
	roundRect(ctx, 64, boxY, 500, 130, 18, "#3ddc84");
	roundRect(ctx, 636, boxY, 500, 130, 18, "#ff6b6b");
	ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#052113";
	ctx.fillText("YES", 96, 472);
	ctx.fillStyle = "#2a0707";
	ctx.fillText("NO", 668, 472);
	ctx.font = "400 56px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#052113";
	ctx.fillText(yes, 96, 538);
	ctx.fillStyle = "#2a0707";
	ctx.fillText(no, 668, 538);
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (!blob) reject(/* @__PURE__ */ new Error("Could not render card"));
			else resolve(blob);
		}, "image/png");
	});
}
async function sharePrediction(opts) {
	const blob = await renderPredictionCard(opts);
	const file = new File([blob], "probly-card.png", { type: "image/png" });
	const text = `I'm ${Math.round(opts.yesPrice * 100)}¢ YES on "${opts.title}" — trading it on Probly`;
	if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
		await navigator.share({
			files: [file],
			text,
			title: "Probly"
		});
		return "shared";
	}
	const objectUrl = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = objectUrl;
	a.download = "probly-card.png";
	a.click();
	window.setTimeout(() => URL.revokeObjectURL(objectUrl), 4e3);
	const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(opts.url)}`;
	window.open(intent, "_blank", "noopener,noreferrer");
	return "tweet";
}
async function renderResultCard(opts) {
	const w = 1200;
	const h = 630;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Canvas unavailable");
	ctx.fillStyle = "#0c1224";
	ctx.fillRect(0, 0, w, h);
	const g = ctx.createLinearGradient(0, 0, w, h);
	g.addColorStop(0, "#162038");
	g.addColorStop(1, "#0c1224");
	ctx.fillStyle = g;
	ctx.fillRect(0, 0, w, h);
	ctx.fillStyle = "#ffe566";
	ctx.fillRect(0, 0, 18, h);
	await paintBrand(ctx);
	ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#d7ccbc";
	ctx.fillText(opts.eyebrow.toUpperCase(), 64, 156);
	ctx.font = "400 48px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#fff6e8";
	wrapText(ctx, opts.title, 1070).forEach((line, i) => ctx.fillText(line, 64, 214 + i * 52));
	ctx.font = "700 24px Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#d7ccbc";
	ctx.fillText(opts.detail.slice(0, 90), 64, 390);
	if (opts.result) {
		ctx.fillStyle = "#ffe566";
		ctx.fillText(opts.result.slice(0, 90), 64, 428);
	}
	const boxY = 470;
	roundRect(ctx, 64, boxY, 500, 120, 18, "#3ddc84");
	roundRect(ctx, 636, boxY, 500, 120, 18, "#ff6b6b");
	ctx.font = "800 22px Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#052113";
	ctx.fillText(opts.leftLabel.toUpperCase(), 96, 510);
	ctx.fillStyle = "#2a0707";
	ctx.fillText(opts.rightLabel.toUpperCase(), 668, 510);
	ctx.font = "400 48px 'Lilita One', Nunito, ui-sans-serif, system-ui, sans-serif";
	ctx.fillStyle = "#052113";
	ctx.fillText(`${Math.round(opts.leftPrice * 100)}¢`, 96, 566);
	ctx.fillStyle = "#2a0707";
	ctx.fillText(`${Math.round(opts.rightPrice * 100)}¢`, 668, 566);
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (!blob) reject(/* @__PURE__ */ new Error("Could not render card"));
			else resolve(blob);
		}, "image/png");
	});
}
async function shareNftResult(opts) {
	const blob = await renderResultCard(opts);
	const file = new File([blob], "probly-nft.png", { type: "image/png" });
	const text = opts.result ? `${opts.result} — ${opts.title} on Probly` : `${opts.leftLabel} ${Math.round(opts.leftPrice * 100)}¢ on ${opts.title} — Probly`;
	if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
		await navigator.share({
			files: [file],
			text,
			title: "Probly"
		});
		return "shared";
	}
	const objectUrl = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = objectUrl;
	a.download = "probly-nft.png";
	a.click();
	window.setTimeout(() => URL.revokeObjectURL(objectUrl), 4e3);
	const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(opts.url)}`;
	window.open(intent, "_blank", "noopener,noreferrer");
	return "tweet";
}
//#endregion
export { shareNftResult as n, sharePrediction as r, PriceChart as t };
