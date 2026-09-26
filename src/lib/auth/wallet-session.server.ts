import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { getAddress, verifyMessage, type Hex } from "viem";
import { getSql } from "../db";
import { parseSignInMessage } from "./wallet-message";

const NONCE_TTL_MS = 10 * 60 * 1000;
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

type GlobalAuth = typeof globalThis & { __problyWalletAuthSecret__?: string };

function secret(): string {
  const fromEnv = process.env.BETTER_AUTH_SECRET?.trim() || process.env.WALLET_AUTH_SECRET?.trim();
  if (fromEnv) return fromEnv;
  const g = globalThis as GlobalAuth;
  g.__problyWalletAuthSecret__ ??= randomBytes(32).toString("hex");
  return g.__problyWalletAuthSecret__;
}

function hmac(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function createWalletNonce(): string {
  const body = Buffer.from(
    JSON.stringify({ t: Date.now(), r: randomBytes(16).toString("hex") }),
  ).toString("base64url");
  return `${body}.${hmac(body)}`;
}

export function walletNonceFresh(nonce: string): boolean {
  const dot = nonce.lastIndexOf(".");
  if (dot <= 0) return false;
  const body = nonce.slice(0, dot);
  const sig = nonce.slice(dot + 1);
  if (!safeEqual(hmac(body), sig)) return false;
  try {
    const parsed = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as { t?: number };
    if (typeof parsed.t !== "number") return false;
    const age = Date.now() - parsed.t;
    return age >= -60_000 && age <= NONCE_TTL_MS;
  } catch {
    return false;
  }
}

type TokenPayload = { sub: string; exp: number };

export function issueWalletToken(address: string): string {
  const payload: TokenPayload = {
    sub: getAddress(address),
    exp: Date.now() + SESSION_TTL_MS,
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `v1.${body}.${hmac(body)}`;
}

export function readWalletToken(token: string): TokenPayload | null {
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "v1") return null;
  const body = parts[1] ?? "";
  const sig = parts[2] ?? "";
  if (!body || !sig || !safeEqual(hmac(body), sig)) return null;
  try {
    const parsed = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as TokenPayload;
    if (!parsed.sub || typeof parsed.exp !== "number") return null;
    if (parsed.exp < Date.now()) return null;
    return { sub: getAddress(parsed.sub), exp: parsed.exp };
  } catch {
    return null;
  }
}

function shortAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export async function ensureWalletUser(address: string): Promise<{ id: string; name: string; image: string | null }> {
  const id = getAddress(address);
  const email = `${id.toLowerCase()}@wallet.probly`;
  const sql = await getSql();
  await sql`
    insert into "user" ("id", "name", "email", "emailVerified", "image", "createdAt", "updatedAt")
    values (${id}, ${shortAddress(id)}, ${email}, true, null, now(), now())
    on conflict ("id") do nothing
  `;
  const rows = await sql<{ name: string; image: string | null }>`
    select "name", "image" from "user" where "id" = ${id} limit 1
  `;
  const row = rows[0];
  return {
    id,
    name: row?.name?.trim() || shortAddress(id),
    image: row?.image ?? null,
  };
}

export async function verifyWalletLogin(message: string, signature: string): Promise<
  | { ok: true; token: string; id: string; name: string; image: string | null }
  | { ok: false; message: string }
> {
  const parsed = parseSignInMessage(message);
  if (!parsed) return { ok: false, message: "Unrecognized sign-in message." };
  if (!walletNonceFresh(parsed.nonce)) return { ok: false, message: "Sign-in expired. Try again." };
  let valid = false;
  try {
    valid = await verifyMessage({
      address: parsed.address,
      message,
      signature: signature as Hex,
    });
  } catch {
    valid = false;
  }
  if (!valid) return { ok: false, message: "Signature does not match this wallet." };
  const user = await ensureWalletUser(parsed.address);
  return { ok: true, token: issueWalletToken(user.id), ...user };
}
