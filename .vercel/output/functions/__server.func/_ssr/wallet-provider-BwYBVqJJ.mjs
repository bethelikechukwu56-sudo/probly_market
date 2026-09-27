import { s as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as readWalletSession, n as clearWalletSession, o as registerWalletDisconnect, s as subscribeWalletSession, t as applyWalletSession } from "./wallet-session-BxdB0qxU.mjs";
import { D as darkTheme, E as lightTheme, S as WagmiProvider, _ as createAuthenticationAdapter, a as ledgerWallet, b as useDisconnect, c as rainbowWallet, d as safeWallet, f as walletConnectWallet, g as connectorsForWallets, h as RainbowKitProvider, i as metaMaskWallet, l as phantomWallet, m as RainbowKitAuthenticationProvider, n as coinbaseWallet, o as okxWallet, p as ConnectButton, r as injectedWallet, s as rabbyWallet, t as braveWallet, u as trustWallet, v as init_mainnet, x as useAccount, y as mainnet } from "../_libs/@rainbow-me/rainbowkit+[...].mjs";
import { n as ConnectWalletSlotContext, t as Button } from "./button-C3nr00Jv.mjs";
import { l as useTheme } from "./router-DrBwQxAl.mjs";
import { r as verifyWalletSignature, t as issueWalletNonce } from "./wallet-api-CwZWyCer.mjs";
import { Et as getAddress, f as http, l as init__esm, p as init_http } from "../_libs/@coinbase/wallet-sdk+[...].mjs";
import { t as buildSignInMessage } from "./wallet-message-DmlzR0SL.mjs";
import { t as createConfig } from "../_libs/@wagmi/core+[...].mjs";
import { An as init_arbitrum, Cn as init_polygon, Dn as base, En as optimism, On as init_base, Tn as init_optimism, kn as arbitrum, wn as polygon } from "../_libs/@reown/appkit+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wallet-provider-BwYBVqJJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
init__esm();
init_http();
init_arbitrum(), init_base(), init_mainnet(), init_optimism(), init_polygon();
var projectId = "abe617907f5cdd9b9e53d65123873643".trim();
var wagmiConfig = createConfig({
	chains: [
		mainnet,
		base,
		polygon,
		arbitrum,
		optimism
	],
	ssr: true,
	transports: {
		[mainnet.id]: http(),
		[base.id]: http(),
		[polygon.id]: http(),
		[arbitrum.id]: http(),
		[optimism.id]: http()
	},
	connectors: connectorsForWallets([{
		groupName: "Popular",
		wallets: [
			metaMaskWallet,
			coinbaseWallet,
			walletConnectWallet,
			rainbowWallet,
			rabbyWallet,
			trustWallet,
			phantomWallet,
			braveWallet,
			okxWallet,
			ledgerWallet,
			safeWallet,
			injectedWallet
		]
	}], {
		appName: "Probly",
		appDescription: "Probly prediction markets",
		appUrl: typeof window !== "undefined" ? window.location.origin : "https://probly.local",
		projectId
	})
});
var SlotContext = ConnectWalletSlotContext;
function comicTheme(mode) {
	const ink = mode === "dark" ? "#fff6e8" : "#16120a";
	const paper = mode === "dark" ? "#162038" : "#fffaf0";
	const canvas = mode === "dark" ? "#0c1224" : "#f3ecdc";
	const text = mode === "dark" ? "#fff6e8" : "#16120a";
	const base = (mode === "dark" ? darkTheme : lightTheme)({
		accentColor: "#ffe566",
		accentColorForeground: "#16120a",
		borderRadius: "large",
		fontStack: "rounded",
		overlayBlur: "small"
	});
	return {
		...base,
		colors: {
			...base.colors,
			accentColor: "#ffe566",
			accentColorForeground: "#16120a",
			modalBackground: paper,
			modalBorder: ink,
			modalText: text,
			modalTextSecondary: mode === "dark" ? "#d7ccbc" : "#5c5346",
			generalBorder: ink,
			generalBorderDim: ink,
			menuItemBackground: canvas,
			profileForeground: paper,
			connectButtonBackground: "#ffe566",
			connectButtonText: "#16120a",
			closeButton: text,
			closeButtonBackground: canvas
		},
		shadows: {
			...base.shadows,
			dialog: `6px 6px 0 ${ink}`,
			connectButton: `3px 3px 0 ${ink}`,
			profileDetailsAction: `3px 3px 0 ${ink}`,
			selectedOption: `3px 3px 0 ${ink}`,
			selectedWallet: `3px 3px 0 ${ink}`
		}
	};
}
function RainbowConnectSlot({ size, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectButton.Custom, { children: ({ openConnectModal, mounted, authenticationStatus }) => {
		if (!mounted || authenticationStatus === "authenticated") return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: size === "lg" ? "default" : "secondary",
			size: size === "lg" ? "lg" : "sm",
			className: size === "lg" ? "h-12 w-full" : void 0,
			disabled: authenticationStatus === "loading",
			onClick: openConnectModal,
			children: label
		});
	} });
}
function SessionBridges({ onStatus }) {
	const { disconnectAsync } = useDisconnect();
	const { address, status } = useAccount();
	const onStatusRef = (0, import_react.useRef)(onStatus);
	onStatusRef.current = onStatus;
	(0, import_react.useEffect)(() => registerWalletDisconnect(() => disconnectAsync()), [disconnectAsync]);
	(0, import_react.useEffect)(() => {
		return subscribeWalletSession(() => {
			onStatusRef.current(readWalletSession() ? "authenticated" : "unauthenticated");
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (status === "connecting" || status === "reconnecting") return;
		const session = readWalletSession();
		if (!session || !address) return;
		try {
			if (getAddress(address) !== getAddress(session.id)) clearWalletSession();
		} catch {
			clearWalletSession();
		}
	}, [address, status]);
	return null;
}
function WalletProvider({ children }) {
	const { theme } = useTheme();
	const [status, setStatus] = (0, import_react.useState)(() => readWalletSession() ? "authenticated" : "unauthenticated");
	const setStatusRef = (0, import_react.useRef)(setStatus);
	setStatusRef.current = setStatus;
	const adapter = (0, import_react.useMemo)(() => createAuthenticationAdapter({
		getNonce: async () => {
			const { nonce } = await issueWalletNonce();
			return nonce;
		},
		createMessage: ({ nonce, address }) => buildSignInMessage(address, nonce),
		verify: async ({ message, signature }) => {
			const result = await verifyWalletSignature({ data: {
				message,
				signature
			} });
			if (!result.ok) return false;
			applyWalletSession({
				token: result.token,
				id: result.id,
				name: result.name,
				image: result.image
			});
			setStatusRef.current("authenticated");
			return true;
		},
		signOut: async () => {
			clearWalletSession();
			setStatusRef.current("unauthenticated");
		}
	}), []);
	const renderSlot = (0, import_react.useMemo)(() => {
		return (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RainbowConnectSlot, { ...props });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WagmiProvider, {
		config: wagmiConfig,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RainbowKitAuthenticationProvider, {
			adapter,
			status,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RainbowKitProvider, {
				theme: comicTheme(theme),
				modalSize: "compact",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlotContext.Provider, {
					value: renderSlot,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionBridges, { onStatus: setStatus }), children]
				})
			})
		})
	});
}
//#endregion
export { WalletProvider };
