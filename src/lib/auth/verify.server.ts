import { getRequest } from "@tanstack/react-start/server";
import { gateIdentityEnabled } from "./gate-identity.server";
import { readWalletToken } from "./wallet-session.server";

/**
 * Server-side session resolution (server-only).
 *
 * Sign-in is an external wallet (RainbowKit). The account id is the checksummed
 * wallet address, carried as a signed bearer token. The live preview forwards
 * that token because iframe cookies are partitioned. Never trust a client-supplied
 * user id — only a token this server issued.
 */

/** True when a real database is configured server-side. */
const databaseConfigured = Boolean(process.env.DATABASE_URL?.trim());

/** Wallet sign-in is on unless the platform explicitly disables auth. */
export const authConfigured = process.env.VITE_AUTH_ENABLED !== "false";

if (databaseConfigured && !authConfigured) {
  console.error(
    "[auth] DATABASE_URL is set but auth is disabled (VITE_AUTH_ENABLED=false) " +
      "— requireUserId() will reject every request (fail closed) rather than " +
      "share one dev user on a real database.",
  );
}

/** Dev fallback user id, used only when auth is disabled (VITE_AUTH_ENABLED=false). */
export const DEV_USER_ID = "dev-user";

/**
 * Thrown by `requireUserId` when the caller has no valid session. Carries
 * `status: 401`; the message is a stable contract — match
 * `err.message === "Unauthorized"` client-side to send the visitor to sign-in.
 */
export class UnauthorizedError extends Error {
  readonly status = 401;
  constructor() {
    super("Unauthorized");
    this.name = "UnauthorizedError";
  }
}

export type VerifiedUser = { id: string; email: string | null };

function tokenFromRequest(bearerToken?: string): string | null {
  if (bearerToken?.trim()) return bearerToken.trim();
  const request = getRequest();
  const header = request?.headers.get("authorization");
  if (header?.toLowerCase().startsWith("bearer ")) return header.slice(7).trim();
  return null;
}

/**
 * Resolve the signed-in wallet from the bearer token, or `null` when auth isn't
 * configured / nobody is signed in.
 */
export async function getSessionUser(bearerToken?: string): Promise<VerifiedUser | null> {
  if (!authConfigured && !gateIdentityEnabled()) return null;
  const token = tokenFromRequest(bearerToken);
  if (!token) return null;
  const session = readWalletToken(token);
  if (!session) return null;
  return { id: session.sub, email: null };
}

/**
 * Resolve the current user id for a server function, or throw when unauthorized.
 * The id is the checksummed external wallet address.
 */
export async function requireUserId(bearerToken?: string): Promise<string> {
  if (!authConfigured && !gateIdentityEnabled()) {
    if (databaseConfigured) {
      throw new Error(
        "Auth is disabled (VITE_AUTH_ENABLED=false) but DATABASE_URL is set — " +
          "refusing to fall back to the shared dev user against a real database.",
      );
    }
    return DEV_USER_ID;
  }
  const user = await getSessionUser(bearerToken);
  if (!user) throw new UnauthorizedError();
  return user.id;
}
