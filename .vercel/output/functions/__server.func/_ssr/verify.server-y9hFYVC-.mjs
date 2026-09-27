import { a as getRequest } from "./ssr.mjs";
import { readWalletToken } from "./wallet-session.server-CQBuU6ez.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify.server-y9hFYVC-.js
function env(key) {
	return process.env[key]?.trim() || void 0;
}
function gateIdentityEnabled() {
	return env("VITE_AUTH_ENABLED") !== "false";
}
/**
* Server-side session resolution (server-only).
*
* Sign-in is an external wallet (RainbowKit). The account id is the checksummed
* wallet address, carried as a signed bearer token. The live preview forwards
* that token because iframe cookies are partitioned. Never trust a client-supplied
* user id — only a token this server issued.
*/
/** True when a real database is configured server-side. */
var databaseConfigured = Boolean(process.env.DATABASE_URL?.trim());
/** Wallet sign-in is on unless the platform explicitly disables auth. */
var authConfigured = process.env.VITE_AUTH_ENABLED !== "false";
if (databaseConfigured && !authConfigured) console.error("[auth] DATABASE_URL is set but auth is disabled (VITE_AUTH_ENABLED=false) — requireUserId() will reject every request (fail closed) rather than share one dev user on a real database.");
/** Dev fallback user id, used only when auth is disabled (VITE_AUTH_ENABLED=false). */
var DEV_USER_ID = "dev-user";
/**
* Thrown by `requireUserId` when the caller has no valid session. Carries
* `status: 401`; the message is a stable contract — match
* `err.message === "Unauthorized"` client-side to send the visitor to sign-in.
*/
var UnauthorizedError = class extends Error {
	status = 401;
	constructor() {
		super("Unauthorized");
		this.name = "UnauthorizedError";
	}
};
function tokenFromRequest(bearerToken) {
	if (bearerToken?.trim()) return bearerToken.trim();
	const header = getRequest()?.headers.get("authorization");
	if (header?.toLowerCase().startsWith("bearer ")) return header.slice(7).trim();
	return null;
}
/**
* Resolve the signed-in wallet from the bearer token, or `null` when auth isn't
* configured / nobody is signed in.
*/
async function getSessionUser(bearerToken) {
	if (!authConfigured && !gateIdentityEnabled()) return null;
	const token = tokenFromRequest(bearerToken);
	if (!token) return null;
	const session = readWalletToken(token);
	if (!session) return null;
	return {
		id: session.sub,
		email: null
	};
}
/**
* Resolve the current user id for a server function, or throw when unauthorized.
* The id is the checksummed external wallet address.
*/
async function requireUserId(bearerToken) {
	if (!authConfigured && !gateIdentityEnabled()) {
		if (databaseConfigured) throw new Error("Auth is disabled (VITE_AUTH_ENABLED=false) but DATABASE_URL is set — refusing to fall back to the shared dev user against a real database.");
		return DEV_USER_ID;
	}
	const user = await getSessionUser(bearerToken);
	if (!user) throw new UnauthorizedError();
	return user.id;
}
//#endregion
export { requireUserId };
