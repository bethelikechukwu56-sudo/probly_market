import type { ReactNode } from "react";
import { useConnectWalletSlot } from "@/lib/auth/wallet-slot";
import { useI18n } from "@/lib/i18n";

/**
 * RainbowKit is loaded only in the client wallet provider. Until that mounts,
 * render a skeleton so the server HTML matches the first client paint.
 */
export function ConnectWalletButton({
  size = "sm",
  label,
}: {
  size?: "sm" | "lg";
  label?: string;
}): ReactNode {
  const render = useConnectWalletSlot();
  const { t } = useI18n();
  if (!render) {
    return (
      <div
        className={
          size === "lg"
            ? "h-12 w-full animate-pulse rounded-xl bg-secondary"
            : "h-11 w-36 animate-pulse rounded-lg bg-secondary"
        }
      />
    );
  }
  return render({ size, label: label ?? t("nav.signIn") });
}
