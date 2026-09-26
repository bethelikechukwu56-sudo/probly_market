import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  braveWallet,
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";

/**
 * WalletConnect Cloud requires a project id. Override with
 * VITE_WALLETCONNECT_PROJECT_ID when the platform provides one. Injected
 * wallets (MetaMask, Coinbase, Rabby, Phantom, Brave) do not need it.
 */
const FALLBACK_PROJECT_ID = "3fcc6bba6f1de962d911bb5b5c3dba68";

const projectId =
  (import.meta.env.VITE_WALLETCONNECT_PROJECT_ID as string | undefined)?.trim() || FALLBACK_PROJECT_ID;

const chains = [mainnet, base, polygon, arbitrum, optimism] as const;

export const wagmiConfig = createConfig({
  chains,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
  },
  connectors: connectorsForWallets(
    [
      {
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
          injectedWallet,
        ],
      },
    ],
    {
      appName: "Probly",
      appDescription: "Probly prediction markets",
      appUrl: typeof window !== "undefined" ? window.location.origin : "https://probly.local",
      projectId,
    },
  ),
});
