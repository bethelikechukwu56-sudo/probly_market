import { useEffect, useState, type ComponentType, type ReactNode } from "react";

/**
 * Mounts RainbowKit on the client only. The server render stays a passthrough
 * so wagmi never runs during SSR (the live preview iframe still hydrates the
 * connect button immediately after).
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [WalletProvider, setWalletProvider] = useState<ComponentType<{ children: ReactNode }> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("./wallet-provider").then((mod) => {
      if (!cancelled) setWalletProvider(() => mod.WalletProvider);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!WalletProvider) return <>{children}</>;
  return <WalletProvider>{children}</WalletProvider>;
}
