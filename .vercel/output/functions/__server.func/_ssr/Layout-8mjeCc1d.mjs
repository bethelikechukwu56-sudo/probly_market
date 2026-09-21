import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { A as Droplets, E as LayoutGrid, I as Check, g as Plus, l as TrendingUp, n as X, r as Wallet, s as Trophy, v as Menu, w as LoaderCircle, x as LogOut } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as formatAddress, i as cn, r as usePulse } from "./router-DHY9BIcC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-8mjeCc1d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-secondary hover:text-secondary-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			yes: "bg-success/20 text-success border border-success/30 hover:bg-success/30 font-semibold",
			no: "bg-danger/20 text-danger border border-danger/30 hover:bg-danger/30 font-semibold",
			yesActive: "bg-success text-success-foreground hover:bg-success/90 font-semibold shadow-lg",
			noActive: "bg-danger text-danger-foreground hover:bg-danger/90 font-semibold shadow-lg",
			hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold",
			heroOutline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 font-semibold",
			wallet: "bg-gradient-to-r from-primary/80 to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
		},
		size: {
			default: "h-11 min-h-11 px-4 py-2",
			sm: "h-11 min-h-11 rounded-md px-3",
			lg: "h-12 min-h-12 rounded-lg px-8",
			xl: "h-12 min-h-12 rounded-lg px-10 text-base",
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
function FaucetButton() {
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const wallet = usePulse((s) => s.wallet);
	const claimFaucet = usePulse((s) => s.claimFaucet);
	const claimed = !!wallet.faucetClaimedAt && Date.now() - wallet.faucetClaimedAt < 864e5;
	if (!wallet.connected) return null;
	const handleClaim = async () => {
		setIsLoading(true);
		await new Promise((r) => setTimeout(r, 600));
		const result = claimFaucet();
		if (result.ok) toast.success("Faucet claimed", { description: result.message });
		else toast.error("Claim failed", { description: result.message });
		setIsLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "sm",
		onClick: handleClaim,
		disabled: isLoading || claimed,
		className: "hidden gap-2 border-primary/30 text-primary hover:bg-primary/10 sm:inline-flex",
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Claiming"] }) : claimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), "Claimed"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "h-4 w-4" }), "Faucet"] })
	});
}
var predictix_logo_default = "/assets/predictix-logo-Ddickw_Z.png";
var navItems = [
	{
		to: "/",
		label: "Markets",
		icon: LayoutGrid
	},
	{
		to: "/portfolio",
		label: "Portfolio",
		icon: TrendingUp
	},
	{
		to: "/leaderboard",
		label: "Leaderboard",
		icon: Trophy
	}
];
function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const session = usePulse((s) => s.session);
	const wallet = usePulse((s) => s.wallet);
	const connectWallet = usePulse((s) => s.connectWallet);
	const disconnectWallet = usePulse((s) => s.disconnectWallet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/60 glass-bar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: predictix_logo_default,
						alt: "Predictix",
						className: "h-9 w-9 rounded-xl transition-transform group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display hidden text-xl font-bold sm:block",
						children: ["Predict", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "ix"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: navItems.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors", active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaucetButton, {}),
						session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/create",
							className: "hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: "gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Create"]
							})
						}) : null,
						wallet.connected && wallet.address ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "hidden gap-2 sm:inline-flex",
							onClick: disconnectWallet,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4 text-primary" }),
								formatAddress(wallet.address),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5 text-muted-foreground" })
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "wallet",
							size: "sm",
							onClick: connectWallet,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" }), "Connect"]
						}),
						!session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "sm",
								children: "Sign in"
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							onClick: () => setMobileMenuOpen((v) => !v),
							"aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/50 bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 p-4",
				children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					onClick: () => setMobileMenuOpen(false),
					className: cn("flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium", pathname === item.to ? "bg-secondary text-foreground" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" }), item.label]
				}, item.to)), session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/create",
					onClick: () => setMobileMenuOpen(false),
					className: "flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5" }), "Create Market"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/auth",
					onClick: () => setMobileMenuOpen(false),
					className: "flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground",
					children: "Sign in"
				})]
			})
		}) : null]
	});
}
function Layout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-7xl flex-1 px-4 py-6",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-12 border-t border-border/50 py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								className: "h-3 w-3",
								stroke: "currentColor",
								strokeWidth: "2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 17l10 5 10-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12l10 5 10-5" })
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Predictix — prediction markets" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Paper trading on Rialo testnet · DYOR" })]
				})
			})
		]
	});
}
//#endregion
export { Layout as n, Button as t };
