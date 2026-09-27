/**
 * Browser session for wallet sign-in. The bearer token is what the server
 * trusts; name and image are display cache only (never sent as the user id).
 */
export type WalletSession = {
  token: string;
  id: string;
  name: string;
  image: string | null;
};

const STORAGE_KEY = "probly.wallet-session";

type Listener = () => void;
const listeners = new Set<Listener>();

let disconnectImpl: (() => Promise<void> | void) | null = null;
let cachedRaw: string | null = null;
let cachedSession: WalletSession | null = null;

function emit() {
  for (const listener of listeners) listener();
}

export function subscribeWalletSession(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function readWalletSession(): WalletSession | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return cachedSession;
  }
  if (raw === cachedRaw) return cachedSession;
  cachedRaw = raw;
  if (!raw) {
    cachedSession = null;
    return null;
  }
  try {
    const parsed = JSON.parse(raw) as Partial<WalletSession>;
    if (!parsed.token || !parsed.id) {
      cachedSession = null;
      return null;
    }
    cachedSession = {
      token: parsed.token,
      id: parsed.id,
      name: parsed.name?.trim() || parsed.id,
      image: parsed.image ?? null,
    };
    return cachedSession;
  } catch {
    cachedSession = null;
    return null;
  }
}

export function applyWalletSession(session: WalletSession): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  emit();
}

export function clearWalletSession(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  emit();
}

/** Session token forwarded by auth middleware. Null on the server and when signed out. */
export function getBearerToken(): string | null {
  return readWalletSession()?.token ?? null;
}

export function registerWalletDisconnect(fn: () => Promise<void> | void): () => void {
  disconnectImpl = fn;
  return () => {
    if (disconnectImpl === fn) disconnectImpl = null;
  };
}

export async function disconnectExternalWallet(): Promise<void> {
  await disconnectImpl?.();
}
