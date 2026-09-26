import { getAddress, type Address } from "viem";

/** Personal-sign payload. Bound to one address so a signature cannot be reused for another account. */
export function buildSignInMessage(address: string, nonce: string): string {
  const checksum = getAddress(address);
  return [
    "Probly",
    "Sign in with this wallet. No transaction is sent, and your in-app RIA balance is not touched.",
    `Address: ${checksum}`,
    `Nonce: ${nonce}`,
  ].join("\n");
}

export function parseSignInMessage(message: string): { address: Address; nonce: string } | null {
  const lines = message.split("\n");
  if (lines.length !== 4 || lines[0] !== "Probly") return null;
  if (!lines[1]?.startsWith("Sign in with this wallet.")) return null;
  const addressLine = lines[2] ?? "";
  const nonceLine = lines[3] ?? "";
  if (!addressLine.startsWith("Address: ") || !nonceLine.startsWith("Nonce: ")) return null;
  const nonce = nonceLine.slice("Nonce: ".length).trim();
  if (!nonce) return null;
  try {
    return { address: getAddress(addressLine.slice("Address: ".length).trim()), nonce };
  } catch {
    return null;
  }
}
