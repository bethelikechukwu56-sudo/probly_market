import { useSyncExternalStore } from "react";
import { authEnabled } from "./client";
import { readWalletSession, subscribeWalletSession, type WalletSession } from "./wallet-session";

/** Normalized user shape used across the app, auth on or off. */
export type AppUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
  profileImageUrl: string | null;
  /** True when this is the sandbox/dev fallback (auth not configured). */
  isDevFallback: boolean;
};

/**
 * Stable fallback user, used ONLY when auth is disabled
 * (`VITE_AUTH_ENABLED=false`, the shipped default). With auth on, the sandbox
 * live preview does real wallet sign-in. Its id is `"dev-user"` — the SAME id
 * `verify.server.ts` returns server-side — so per-user rows written in that
 * mode belong to one consistent owner.
 */
export const DEV_USER: AppUser = {
  id: "dev-user",
  displayName: "Dev User",
  primaryEmail: "dev@example.com",
  profileImageUrl: null,
  isDevFallback: true,
};

/** `useCurrentUserState()` result: the user plus the session-loading flag. */
export type CurrentUserState = {
  /** The user — `null` BOTH while the session loads and when signed out. */
  user: AppUser | null;
  /** True while the session is still resolving — don't treat `user: null` as signed out yet. */
  isPending: boolean;
};

function sessionToUser(session: WalletSession | null): AppUser | null {
  if (!session) return null;
  return {
    id: session.id,
    displayName: session.name,
    primaryEmail: session.id,
    profileImageUrl: session.image,
    isDevFallback: false,
  };
}

const emptySubscribe = () => () => {};
const serverSnapshot = (): WalletSession | null => null;

/**
 * Current user + loading state.
 * Auth on: the connected wallet, once the client session store has hydrated.
 * Auth off: the shared dev user, never pending.
 */
export function useCurrentUserState(): CurrentUserState {
  const session = useSyncExternalStore(subscribeWalletSession, readWalletSession, serverSnapshot);
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  if (!authEnabled) return { user: DEV_USER, isPending: false };
  if (!hydrated) return { user: null, isPending: true };
  return { user: sessionToUser(session), isPending: false };
}

/**
 * Convenience view of `useCurrentUserState().user` for display (e.g.
 * `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
 * for redirects/guards use `useCurrentUserState()` and check `isPending`.
 */
export function useCurrentUser(): AppUser | null {
  return useCurrentUserState().user;
}
