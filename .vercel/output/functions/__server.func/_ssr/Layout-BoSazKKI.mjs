import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as signOut } from "./client-CD8zttoW.mjs";
import { G as useQueryClient, O as useQuery } from "../_libs/@rainbow-me/rainbowkit+[...].mjs";
import { i as formatAddress, r as cn, t as Button } from "./button-C3nr00Jv.mjs";
import { E as LayoutGrid, F as Droplets, H as Check, _ as Plus, c as TrendingUp, j as Gem, m as Settings, n as X, o as Trophy, r as Wallet, w as LoaderCircle, x as Menu } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as getMarketDetail, S as getLeaderboard, T as listHome, c as useI18n, w as getMyPulse, y as claimFaucet } from "./router-BST_wReC.mjs";
import { a as useCurrentUser, i as probly_wordmark_default, n as LanguageSelect, o as useCurrentUserState, r as ThemeToggle, t as ConnectWalletButton } from "./probly-wordmark-C-y93pX3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-BoSazKKI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pulseKeys = {
	home: ["pulse", "home"],
	market: (id) => [
		"pulse",
		"market",
		id
	],
	me: ["pulse", "me"],
	leaderboard: ["pulse", "leaderboard"]
};
function useHomePulse() {
	return useQuery({
		queryKey: pulseKeys.home,
		queryFn: () => listHome()
	});
}
function useMarketDetail(id) {
	return useQuery({
		queryKey: pulseKeys.market(id),
		queryFn: () => getMarketDetail({ data: { id } }),
		enabled: Boolean(id)
	});
}
function useMyPulse() {
	const { user, isPending } = useCurrentUserState();
	return useQuery({
		queryKey: pulseKeys.me,
		queryFn: () => getMyPulse(),
		enabled: !isPending && Boolean(user)
	});
}
function useLeaderboard() {
	return useQuery({
		queryKey: pulseKeys.leaderboard,
		queryFn: () => getLeaderboard()
	});
}
function useInvalidatePulse() {
	const qc = useQueryClient();
	return (marketId) => {
		qc.invalidateQueries({ queryKey: pulseKeys.home });
		qc.invalidateQueries({ queryKey: pulseKeys.me });
		qc.invalidateQueries({ queryKey: pulseKeys.leaderboard });
		if (marketId) qc.invalidateQueries({ queryKey: pulseKeys.market(marketId) });
		else qc.invalidateQueries({ queryKey: ["pulse", "market"] });
	};
}
function FaucetButton() {
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const me = useMyPulse();
	const invalidate = useInvalidatePulse();
	const { t } = useI18n();
	const wallet = me.data?.wallet;
	if (!wallet) return null;
	const handleClaim = async () => {
		setIsLoading(true);
		try {
			const result = await claimFaucet();
			if (result.ok) {
				toast.success(t("faucet.claimed"), { description: result.message });
				invalidate();
			} else toast.error(result.message);
		} catch {
			toast.error(t("trade.signIn"));
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		size: "sm",
		onClick: () => void handleClaim(),
		disabled: isLoading || !wallet.faucetReady,
		className: "hidden gap-2 border-primary/30 text-primary hover:bg-primary/10 sm:inline-flex",
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), t("faucet.claiming")] }) : !wallet.faucetReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), t("faucet.claimed")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "h-4 w-4" }), t("faucet.label")] })
	});
}
/**
* Client-readable marker for gate-materialized sessions ("Sign in with Grok"
* zero-click sessions minted by `gate-session.server.ts`). Signing out of a
* gate session is a no-op — the next request re-materializes it from
* `x-grok-identity` — so `UserButton` uses this to hide its sign-out control.
* `__Host-` prefixed like the other auth cookies: browsers reject a `__Host-`
* cookie carrying a `Domain`, so an untrusted sibling `*.grok.me` app cannot
* plant a parent-domain copy that the host-only clear could never expire.
* Client-safe: no server imports.
*/
var GATE_SESSION_MARKER_COOKIE = "__Host-grok_gate_session";
function hasGateSessionMarker() {
	if (typeof document === "undefined") return false;
	return document.cookie.split(";").some((pair) => pair.trim().startsWith(`${GATE_SESSION_MARKER_COOKIE}=`));
}
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-9 w-9 rounded-full border-2 border-ink object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-accent text-sm font-extrabold text-accent-foreground",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
function AuthSlot() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-11 w-24 animate-pulse rounded-lg bg-secondary" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectWalletButton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletChip, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden max-w-[220px] sm:block [&>div>span.text-sm.font-medium]:max-w-[7rem] [&>div>span.text-sm.font-medium]:truncate",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
		})]
	});
}
function WalletChip() {
	const me = useMyPulse();
	const { t } = useI18n();
	const wallet = me.data?.wallet;
	if (!wallet) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-11 w-28 animate-pulse rounded-lg bg-secondary sm:block" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "hidden min-h-11 items-center gap-2 rounded-lg border border-primary/30 px-3 text-sm sm:inline-flex",
		onClick: () => {
			navigator.clipboard.writeText(wallet.address);
			toast.success(t("faucet.copied"));
		},
		title: wallet.address,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums",
				children: [wallet.balance.toFixed(2), " RIA"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-xs text-muted-foreground lg:inline",
				children: formatAddress(wallet.address)
			})
		]
	});
}
function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { user, isPending } = useCurrentUserState();
	const { t } = useI18n();
	const navItems = [
		{
			to: "/",
			label: t("nav.markets"),
			icon: LayoutGrid
		},
		{
			to: "/nfts",
			label: t("nav.nfts"),
			icon: Gem
		},
		{
			to: "/portfolio",
			label: t("nav.portfolio"),
			icon: TrendingUp
		},
		{
			to: "/leaderboard",
			label: t("nav.leaderboard"),
			icon: Trophy
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 w-full border-b border-border/60 glass-bar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: probly_wordmark_default,
						alt: "Probly",
						className: "h-9 w-auto invert transition-transform group-hover:scale-[1.03] dark:invert-0 sm:h-10"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: navItems.map((item) => {
						const active = item.to === "/" ? pathname === "/" : item.to === "/nfts" ? pathname === "/nfts" || pathname.startsWith("/nft/") : pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-extrabold transition-transform", active ? "comic-tab bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaucetButton, {}),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/create",
							className: "hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: "gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), t("nav.create")]
							})
						}) : null,
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/settings",
							className: "hidden md:block",
							"aria-label": t("nav.settings"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-4 w-4" })
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "md:hidden",
							onClick: () => setMobileMenuOpen((v) => !v),
							"aria-label": mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu"),
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/50 bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 p-4",
				children: [
					navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						onClick: () => setMobileMenuOpen(false),
						className: cn("comic-tab flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-extrabold", pathname === item.to || item.to === "/nfts" && pathname.startsWith("/nft/") ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-5 w-5" }), item.label]
					}, item.to)),
					user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/create",
						onClick: () => setMobileMenuOpen(false),
						className: "flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-5 w-5" }), t("nav.createMarket")]
					}) : !isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectWalletButton, {})
					}) : null,
					user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/settings",
						onClick: () => setMobileMenuOpen(false),
						className: "flex min-h-11 items-center gap-3 rounded-lg px-4 text-sm font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-5 w-5" }), t("nav.settings")]
					}) : null,
					user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
					}) : null
				]
			})
		}) : null]
	});
}
var probly_mark_default = "/assets/probly-mark-DGDletds.png";
function Layout({ children }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-7xl flex-1 px-4 py-6",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-12 border-t-[3px] border-ink py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: probly_mark_default,
							alt: "",
							className: "h-6 w-6 invert dark:invert-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("footer.tagline") })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("footer.disclaimer") })]
				})
			})
		]
	});
}
//#endregion
export { useMarketDetail as a, useLeaderboard as i, useHomePulse as n, useMyPulse as o, useInvalidatePulse as r, Layout as t };
