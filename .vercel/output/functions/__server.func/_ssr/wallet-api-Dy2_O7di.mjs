import { n as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-BlkH4MvN.mjs";
import { a as string, i as object } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wallet-api-Dy2_O7di.js
var issueWalletNonce_createServerFn_handler = createServerRpc({
	id: "7f44c78183da91deb03e5d1ceac985061f2d6ab526b906bac61cfebabf3caf69",
	name: "issueWalletNonce",
	filename: "src/lib/auth/wallet-api.ts"
}, (opts) => issueWalletNonce.__executeServer(opts));
var issueWalletNonce = createServerFn({ method: "POST" }).handler(issueWalletNonce_createServerFn_handler, async () => {
	const { createWalletNonce } = await import("./wallet-session.server-CQBuU6ez.mjs");
	return { nonce: createWalletNonce() };
});
var verifyWalletSignature_createServerFn_handler = createServerRpc({
	id: "eafc8284f64a52aed0d160ba3445400d66af0093a1458fc04cdb240efecc0870",
	name: "verifyWalletSignature",
	filename: "src/lib/auth/wallet-api.ts"
}, (opts) => verifyWalletSignature.__executeServer(opts));
var verifyWalletSignature = createServerFn({ method: "POST" }).validator(object({
	message: string().min(20).max(2e3),
	signature: string().regex(/^0x[0-9a-fA-F]+$/)
})).handler(verifyWalletSignature_createServerFn_handler, async ({ data }) => {
	const { verifyWalletLogin } = await import("./wallet-session.server-CQBuU6ez.mjs");
	return verifyWalletLogin(data.message, data.signature);
});
var refreshWalletProfile_createServerFn_handler = createServerRpc({
	id: "cba86e693930674a119dd6ab3f35b6f251a2499f68ebbe0f42fcca9f0a4f0370",
	name: "refreshWalletProfile",
	filename: "src/lib/auth/wallet-api.ts"
}, (opts) => refreshWalletProfile.__executeServer(opts));
var refreshWalletProfile = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(refreshWalletProfile_createServerFn_handler, async ({ context }) => {
	const { ensureWalletUser, issueWalletToken } = await import("./wallet-session.server-CQBuU6ez.mjs");
	const user = await ensureWalletUser(context.userId);
	return {
		token: issueWalletToken(user.id),
		...user
	};
});
//#endregion
export { issueWalletNonce_createServerFn_handler, refreshWalletProfile_createServerFn_handler, verifyWalletSignature_createServerFn_handler };
