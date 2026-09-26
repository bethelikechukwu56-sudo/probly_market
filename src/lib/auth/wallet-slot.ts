import { createContext, useContext, type ReactNode } from "react";

export type ConnectWalletSlotProps = { size: "sm" | "lg"; label: string };
export type ConnectWalletSlotRenderer = (props: ConnectWalletSlotProps) => ReactNode;

export const ConnectWalletSlotContext = createContext<ConnectWalletSlotRenderer | null>(null);

export function useConnectWalletSlot(): ConnectWalletSlotRenderer | null {
  return useContext(ConnectWalletSlotContext);
}
