import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { K as clsx } from "../_libs/@rainbow-me/rainbowkit+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-C3nr00Jv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ConnectWalletSlotContext = (0, import_react.createContext)(null);
function useConnectWalletSlot() {
	return (0, import_react.useContext)(ConnectWalletSlotContext);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatVolume(volume) {
	const sign = volume < 0 ? "-" : "";
	const abs = Math.abs(volume);
	if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(1)}M`;
	if (abs >= 1e3) return `${sign}$${(abs / 1e3).toFixed(0)}K`;
	return `${sign}$${abs.toFixed(0)}`;
}
function formatDate(dateString, opts, locale = "en-US") {
	return new Date(dateString).toLocaleDateString(locale, opts ?? {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function formatAddress(address) {
	if (!address) return "";
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-extrabold ring-offset-background transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "comic-press bg-primary text-primary-foreground",
			destructive: "comic-press bg-destructive text-destructive-foreground",
			outline: "comic-press bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
			secondary: "comic-press bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
			ghost: "border-2 border-transparent hover:border-ink hover:bg-accent hover:text-accent-foreground",
			link: "font-extrabold text-primary underline-offset-4 hover:underline",
			yes: "comic-press bg-success/15 text-success hover:bg-success hover:text-success-foreground",
			no: "comic-press bg-danger/15 text-danger hover:bg-danger hover:text-danger-foreground",
			yesActive: "comic-press bg-success text-success-foreground",
			noActive: "comic-press bg-danger text-danger-foreground",
			hero: "comic-press bg-primary text-primary-foreground",
			heroOutline: "comic-press bg-card text-primary",
			wallet: "comic-press bg-primary text-primary-foreground"
		},
		size: {
			default: "h-11 min-h-11 px-4 py-2",
			sm: "h-11 min-h-11 rounded-lg px-3",
			lg: "h-12 min-h-12 rounded-xl px-8",
			xl: "h-12 min-h-12 rounded-xl px-10 text-base",
			icon: "h-11 w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { formatDate as a, formatAddress as i, ConnectWalletSlotContext as n, formatVolume as o, cn as r, useConnectWalletSlot as s, Button as t };
