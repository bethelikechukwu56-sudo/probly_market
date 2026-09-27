import { r as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
import { i as getBearerToken, n as clearWalletSession, r as disconnectExternalWallet } from "./wallet-session-BxdB0qxU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-CD8zttoW.js
var client_CD8zttoW_exports = /* @__PURE__ */ __exportAll({
	n: () => signOut,
	t: () => client_exports
});
var client_exports = /* @__PURE__ */ __exportAll$1({
	authEnabled: () => true,
	getBearerToken: () => getBearerToken,
	signOut: () => signOut
});
/**
* End the wallet session and disconnect RainbowKit. Redirects so server
* functions stop attaching the old bearer token.
*/
async function signOut(redirectTo = "/") {
	clearWalletSession();
	try {
		await disconnectExternalWallet();
	} catch {}
	if (typeof window !== "undefined") window.location.href = redirectTo;
}
//#endregion
export { signOut as n, client_CD8zttoW_exports as t };
