import { Et as getAddress, l as init__esm } from "../_libs/@coinbase/wallet-sdk+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wallet-message-DmlzR0SL.js
init__esm();
/** Personal-sign payload. Bound to one address so a signature cannot be reused for another account. */
function buildSignInMessage(address, nonce) {
	return [
		"Probly",
		"Sign in with this wallet. No transaction is sent, and your in-app RIA balance is not touched.",
		`Address: ${getAddress(address)}`,
		`Nonce: ${nonce}`
	].join("\n");
}
function parseSignInMessage(message) {
	const lines = message.split("\n");
	if (lines.length !== 4 || lines[0] !== "Probly") return null;
	if (!lines[1]?.startsWith("Sign in with this wallet.")) return null;
	const addressLine = lines[2] ?? "";
	const nonceLine = lines[3] ?? "";
	if (!addressLine.startsWith("Address: ") || !nonceLine.startsWith("Nonce: ")) return null;
	const nonce = nonceLine.slice(7).trim();
	if (!nonce) return null;
	try {
		return {
			address: getAddress(addressLine.slice(9).trim()),
			nonce
		};
	} catch {
		return null;
	}
}
//#endregion
export { parseSignInMessage as n, buildSignInMessage as t };
