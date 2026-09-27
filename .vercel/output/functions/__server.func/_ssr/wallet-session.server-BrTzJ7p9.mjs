import { t as getSql } from "./db-CvJFlZzB.mjs";
import { Et as getAddress, O as verifyMessage, l as init__esm } from "../_libs/@coinbase/wallet-sdk+[...].mjs";
import { n as parseSignInMessage } from "./wallet-message-DmlzR0SL.mjs";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/wallet-session.server-BrTzJ7p9.js
init__esm();
var NONCE_TTL_MS = 6e5;
var SESSION_TTL_MS = 6048e5;
function secret() {
	const fromEnv = process.env.BETTER_AUTH_SECRET?.trim() || process.env.WALLET_AUTH_SECRET?.trim();
	if (fromEnv) return fromEnv;
	const g = globalThis;
	g.__problyWalletAuthSecret__ ??= randomBytes(32).toString("hex");
	return g.__problyWalletAuthSecret__;
}
function hmac(value) {
	return createHmac("sha256", secret()).update(value).digest("base64url");
}
function safeEqual(a, b) {
	const left = Buffer.from(a);
	const right = Buffer.from(b);
	if (left.length !== right.length) return false;
	return timingSafeEqual(left, right);
}
function createWalletNonce() {
	const body = Buffer.from(JSON.stringify({
		t: Date.now(),
		r: randomBytes(16).toString("hex")
	})).toString("base64url");
	return `${body}.${hmac(body)}`;
}
function walletNonceFresh(nonce) {
	const dot = nonce.lastIndexOf(".");
	if (dot <= 0) return false;
	const body = nonce.slice(0, dot);
	const sig = nonce.slice(dot + 1);
	if (!safeEqual(hmac(body), sig)) return false;
	try {
		const parsed = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
		if (typeof parsed.t !== "number") return false;
		const age = Date.now() - parsed.t;
		return age >= -6e4 && age <= NONCE_TTL_MS;
	} catch {
		return false;
	}
}
function issueWalletToken(address) {
	const payload = {
		sub: getAddress(address),
		exp: Date.now() + SESSION_TTL_MS
	};
	const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
	return `v1.${body}.${hmac(body)}`;
}
function readWalletToken(token) {
	const parts = token.split(".");
	if (parts.length !== 3 || parts[0] !== "v1") return null;
	const body = parts[1] ?? "";
	const sig = parts[2] ?? "";
	if (!body || !sig || !safeEqual(hmac(body), sig)) return null;
	try {
		const parsed = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
		if (!parsed.sub || typeof parsed.exp !== "number") return null;
		if (parsed.exp < Date.now()) return null;
		return {
			sub: getAddress(parsed.sub),
			exp: parsed.exp
		};
	} catch {
		return null;
	}
}
function shortAddress(address) {
	return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
async function ensureWalletUser(address) {
	const id = getAddress(address);
	const email = `${id.toLowerCase()}@wallet.probly`;
	const sql = await getSql();
	await sql`
    insert into "user" ("id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt")
    values (${id}, ${shortAddress(id)}, ${email}, true, null, now(), now())
    on conflict ("id") do nothing
  `;
	const row = (await sql`
    select "name", "image" from "user" where "id" = ${id} limit 1
  `)[0];
	return {
		id,
		name: row?.name?.trim() || shortAddress(id),
		image: row?.image ?? null
	};
}
async function verifyWalletLogin(message, signature) {
	const parsed = parseSignInMessage(message);
	if (!parsed) return {
		ok: false,
		message: "Unrecognized sign-in message."
	};
	if (!walletNonceFresh(parsed.nonce)) return {
		ok: false,
		message: "Sign-in expired. Try again."
	};
	let valid = false;
	try {
		valid = await verifyMessage({
			address: parsed.address,
			message,
			signature
		});
	} catch {
		valid = false;
	}
	if (!valid) return {
		ok: false,
		message: "Signature does not match this wallet."
	};
	const user = await ensureWalletUser(parsed.address);
	return {
		ok: true,
		token: issueWalletToken(user.id),
		...user
	};
}
//#endregion
export { createWalletNonce, ensureWalletUser, issueWalletToken, readWalletToken, verifyWalletLogin };
