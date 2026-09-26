import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ConnectWalletSlotContext, type ConnectWalletSlotProps, type ConnectWalletSlotRenderer } from "./wallet-slot";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  createAuthenticationAdapter,
  darkTheme,
  lightTheme,
  type AuthenticationStatus,
  type Theme,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, WagmiProvider } from "wagmi";
import { getAddress } from "viem";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { issueWalletNonce, verifyWalletSignature } from "./wallet-api";
import { buildSignInMessage } from "./wallet-message";
import {
  applyWalletSession,
  clearWalletSession,
  readWalletSession,
  registerWalletDisconnect,
  subscribeWalletSession,
} from "./wallet-session";
import { wagmiConfig } from "./wallet-config";

type SlotProps = ConnectWalletSlotProps;

const SlotContext = ConnectWalletSlotContext;

function comicTheme(mode: "light" | "dark"): Theme {
  const ink = mode === "dark" ? "#fff6e8" : "#16120a";
  const paper = mode === "dark" ? "#162038" : "#fffaf0";
  const canvas = mode === "dark" ? "#0c1224" : "#f3ecdc";
  const text = mode === "dark" ? "#fff6e8" : "#16120a";
  const base = (mode === "dark" ? darkTheme : lightTheme)({
    accentColor: "#ffe566",
    accentColorForeground: "#16120a",
    borderRadius: "large",
    fontStack: "rounded",
    overlayBlur: "small",
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
      closeButtonBackground: canvas,
    },
    shadows: {
      ...base.shadows,
      dialog: `6px 6px 0 ${ink}`,
      connectButton: `3px 3px 0 ${ink}`,
      profileDetailsAction: `3px 3px 0 ${ink}`,
      selectedOption: `3px 3px 0 ${ink}`,
      selectedWallet: `3px 3px 0 ${ink}`,
    },
  };
}

function RainbowConnectSlot({ size, label }: SlotProps) {
  return (
    <ConnectButton.Custom>
      {({ openConnectModal, mounted, authenticationStatus }) => {
        const signedIn = authenticationStatus === "authenticated";
        if (!mounted || signedIn) return null;
        return (
          <Button
            type="button"
            variant={size === "lg" ? "default" : "secondary"}
            size={size === "lg" ? "lg" : "sm"}
            className={size === "lg" ? "h-12 w-full" : undefined}
            disabled={authenticationStatus === "loading"}
            onClick={openConnectModal}
          >
            {label}
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
}

function SessionBridges({ onStatus }: { onStatus: (status: AuthenticationStatus) => void }) {
  const { disconnectAsync } = useDisconnect();
  const { address, status } = useAccount();
  const onStatusRef = useRef(onStatus);
  onStatusRef.current = onStatus;

  useEffect(() => registerWalletDisconnect(() => disconnectAsync()), [disconnectAsync]);

  useEffect(() => {
    return subscribeWalletSession(() => {
      onStatusRef.current(readWalletSession() ? "authenticated" : "unauthenticated");
    });
  }, []);

  useEffect(() => {
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

export function WalletProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const [status, setStatus] = useState<AuthenticationStatus>(() =>
    readWalletSession() ? "authenticated" : "unauthenticated",
  );
  const setStatusRef = useRef(setStatus);
  setStatusRef.current = setStatus;

  const adapter = useMemo(
    () =>
      createAuthenticationAdapter({
        getNonce: async () => {
          const { nonce } = await issueWalletNonce();
          return nonce;
        },
        createMessage: ({ nonce, address }) => buildSignInMessage(address, nonce),
        verify: async ({ message, signature }) => {
          const result = await verifyWalletSignature({ data: { message, signature } });
          if (!result.ok) return false;
          applyWalletSession({
            token: result.token,
            id: result.id,
            name: result.name,
            image: result.image,
          });
          setStatusRef.current("authenticated");
          return true;
        },
        signOut: async () => {
          clearWalletSession();
          setStatusRef.current("unauthenticated");
        },
      }),
    [],
  );

  const renderSlot = useMemo<ConnectWalletSlotRenderer>(() => {
    return (props) => <RainbowConnectSlot {...props} />;
  }, []);

  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitAuthenticationProvider adapter={adapter} status={status}>
        <RainbowKitProvider theme={comicTheme(theme)} modalSize="compact">
          <SlotContext.Provider value={renderSlot}>
            <SessionBridges onStatus={setStatus} />
            {children}
          </SlotContext.Provider>
        </RainbowKitProvider>
      </RainbowKitAuthenticationProvider>
    </WagmiProvider>
  );
}
