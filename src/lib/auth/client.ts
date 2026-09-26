import { disconnectExternalWallet, getBearerToken, clearWalletSession } from "./wallet-session";

/**
 * Wallet sign-in client.
 *
 * RainbowKit proves the visitor controls an external wallet. That address is
 * the account id. The in-app RIA wallet is separate and is created for this
 * account the first time they trade. The bearer token is stored locally because
 * the live-preview iframe partitions cookies.
 */
export const authEnabled = import.meta.env.VITE_AUTH_ENABLED !== "false";

export { getBearerToken };

/**
 * End the wallet session and disconnect RainbowKit. Redirects so server
 * functions stop attaching the old bearer token.
 */
export async function signOut(redirectTo = "/"): Promise<void> {
  clearWalletSession();
  try {
    await disconnectExternalWallet();
  } catch {
    /* still leave the app signed out */
  }
  if (typeof window !== "undefined") window.location.href = redirectTo;
}
