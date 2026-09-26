import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVolume(volume: number): string {
  const sign = volume < 0 ? "-" : "";
  const abs = Math.abs(volume);
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${sign}$${(abs / 1_000).toFixed(0)}K`;
  return `${sign}$${abs.toFixed(0)}`;
}

export function formatUsd(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

export function formatDate(
  dateString: string,
  opts?: Intl.DateTimeFormatOptions,
  locale = "en-US",
): string {
  return new Date(dateString).toLocaleDateString(locale, opts ?? {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function generateId(prefix = "id"): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}

export function generateWalletAddress(): string {
  return (
    "0x" +
    Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
  );
}

export function generateTxHash(): string {
  return (
    "0x" +
    Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
  );
}

export function formatAddress(address: string): string {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
