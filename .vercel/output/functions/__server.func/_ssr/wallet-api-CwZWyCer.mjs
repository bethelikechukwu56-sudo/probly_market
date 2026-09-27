import { n as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-BlkH4MvN.mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
import { D as createSsrRpc } from "./router-BST_wReC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wallet-api-CwZWyCer.js
var issueWalletNonce = createServerFn({ method: "POST" }).handler(createSsrRpc("7f44c78183da91deb03e5d1ceac985061f2d6ab526b906bac61cfebabf3caf69"));
var verifyWalletSignature = createServerFn({ method: "POST" }).validator(object({
	message: string().min(20).max(2e3),
	signature: string().regex(/^0x[0-9a-fA-F]+$/)
})).handler(createSsrRpc("eafc8284f64a52aed0d160ba3445400d66af0093a1458fc04cdb240efecc0870"));
/** Re-read the profile row and mint a fresh token after settings are saved. */
var refreshWalletProfile = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("cba86e693930674a119dd6ab3f35b6f251a2499f68ebbe0f42fcca9f0a4f0370"));
//#endregion
export { refreshWalletProfile as n, verifyWalletSignature as r, issueWalletNonce as t };
