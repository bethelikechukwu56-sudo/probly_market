//#region node_modules/.nitro/vite/services/ssr/assets/wallet-session-BxdB0qxU.js
var STORAGE_KEY = "probly.wallet-session";
var listeners = /* @__PURE__ */ new Set();
var disconnectImpl = null;
var cachedRaw = null;
var cachedSession = null;
function emit() {
	for (const listener of listeners) listener();
}
function subscribeWalletSession(listener) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}
function readWalletSession() {
	if (typeof window === "undefined") return null;
	let raw = null;
	try {
		raw = window.localStorage.getItem(STORAGE_KEY);
	} catch {
		return cachedSession;
	}
	if (raw === cachedRaw) return cachedSession;
	cachedRaw = raw;
	if (!raw) {
		cachedSession = null;
		return null;
	}
	try {
		const parsed = JSON.parse(raw);
		if (!parsed.token || !parsed.id) {
			cachedSession = null;
			return null;
		}
		cachedSession = {
			token: parsed.token,
			id: parsed.id,
			name: parsed.name?.trim() || parsed.id,
			image: parsed.image ?? null
		};
		return cachedSession;
	} catch {
		cachedSession = null;
		return null;
	}
}
function applyWalletSession(session) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
	emit();
}
function clearWalletSession() {
	if (typeof window === "undefined") return;
	window.localStorage.removeItem(STORAGE_KEY);
	emit();
}
/** Session token forwarded by auth middleware. Null on the server and when signed out. */
function getBearerToken() {
	return readWalletSession()?.token ?? null;
}
function registerWalletDisconnect(fn) {
	disconnectImpl = fn;
	return () => {
		if (disconnectImpl === fn) disconnectImpl = null;
	};
}
async function disconnectExternalWallet() {
	await disconnectImpl?.();
}
//#endregion
export { readWalletSession as a, getBearerToken as i, clearWalletSession as n, registerWalletDisconnect as o, disconnectExternalWallet as r, subscribeWalletSession as s, applyWalletSession as t };
