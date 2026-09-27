import { a as __require, n as __esmMin, r as __exportAll, t as __commonJSMin } from "../_runtime.mjs";
import * as nc$1 from "node:crypto";
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/_assert.js
/**
* Internal assertion helpers.
* @module
*/
/** Asserts something is positive integer. */
function anumber$2(n) {
	if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, got " + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */
function isBytes$5(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
/** Asserts something is Uint8Array. */
function abytes$5(b, ...lengths) {
	if (!isBytes$5(b)) throw new Error("Uint8Array expected");
	if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
/** Asserts something is hash */
function ahash$2(h) {
	if (typeof h !== "function" || typeof h.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
	anumber$2(h.outputLen);
	anumber$2(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists$2(instance, checkFinished = true) {
	if (instance.destroyed) throw new Error("Hash instance has been destroyed");
	if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
/** Asserts output is properly-sized byte array */
function aoutput$2(out, instance) {
	abytes$5(out);
	const min = instance.outputLen;
	if (out.length < min) throw new Error("digestInto() expects output buffer of length at least " + min);
}
var init__assert$2 = __esmMin((() => {}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/cryptoNode.js
/**
* Internal webcrypto alias.
* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
* Falls back to Node.js built-in crypto for Node.js <=v14.
* See utils.ts for details.
* @module
*/
var crypto$2;
var init_cryptoNode$2 = __esmMin((() => {
	crypto$2 = nc$1 && typeof nc$1 === "object" && "webcrypto" in nc$1 ? nc$1.webcrypto : nc$1 && typeof nc$1 === "object" && "randomBytes" in nc$1 ? nc$1 : void 0;
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/utils.js
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function u32$2(arr) {
	return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView$2(arr) {
	return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr$2(word, shift) {
	return word << 32 - shift | word >>> shift;
}
function byteSwap$2(word) {
	return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
/** In place byte swap for Uint32Array */
function byteSwap32$2(arr) {
	for (let i = 0; i < arr.length; i++) arr[i] = byteSwap$2(arr[i]);
}
/**
* Convert JS string to byte array.
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes$5(str) {
	if (typeof str !== "string") throw new Error("utf8ToBytes expected string, got " + typeof str);
	return new Uint8Array(new TextEncoder().encode(str));
}
/**
* Normalizes (non-hex) string or Uint8Array to Uint8Array.
* Warning: when Uint8Array is passed, it would NOT get copied.
* Keep in mind for future mutable operations.
*/
function toBytes$2(data) {
	if (typeof data === "string") data = utf8ToBytes$5(data);
	abytes$5(data);
	return data;
}
/**
* Copies several Uint8Arrays into one.
*/
function concatBytes$5(...arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		const a = arrays[i];
		abytes$5(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i = 0, pad = 0; i < arrays.length; i++) {
		const a = arrays[i];
		res.set(a, pad);
		pad += a.length;
	}
	return res;
}
/** Wraps hash function, creating an interface on top of it */
function wrapConstructor$2(hashCons) {
	const hashC = (msg) => hashCons().update(toBytes$2(msg)).digest();
	const tmp = hashCons();
	hashC.outputLen = tmp.outputLen;
	hashC.blockLen = tmp.blockLen;
	hashC.create = () => hashCons();
	return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes$3(bytesLength = 32) {
	if (crypto$2 && typeof crypto$2.getRandomValues === "function") return crypto$2.getRandomValues(new Uint8Array(bytesLength));
	if (crypto$2 && typeof crypto$2.randomBytes === "function") return crypto$2.randomBytes(bytesLength);
	throw new Error("crypto.getRandomValues must be defined");
}
var isLE$2, Hash$2;
var init_utils$5 = __esmMin((() => {
	init_cryptoNode$2();
	init__assert$2();
	isLE$2 = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
	Hash$2 = class {
		clone() {
			return this._cloneInto();
		}
	};
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/_md.js
/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
function setBigUint64$2(view, byteOffset, value, isLE) {
	if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
	const _32n = BigInt(32);
	const _u32_max = BigInt(4294967295);
	const wh = Number(value >> _32n & _u32_max);
	const wl = Number(value & _u32_max);
	const h = isLE ? 4 : 0;
	const l = isLE ? 0 : 4;
	view.setUint32(byteOffset + h, wh, isLE);
	view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */
function Chi$2(a, b, c) {
	return a & b ^ ~a & c;
}
/** Majority function, true if any two inputs is true. */
function Maj$2(a, b, c) {
	return a & b ^ a & c ^ b & c;
}
var HashMD$2;
var init__md$2 = __esmMin((() => {
	init__assert$2();
	init_utils$5();
	HashMD$2 = class extends Hash$2 {
		constructor(blockLen, outputLen, padOffset, isLE) {
			super();
			this.blockLen = blockLen;
			this.outputLen = outputLen;
			this.padOffset = padOffset;
			this.isLE = isLE;
			this.finished = false;
			this.length = 0;
			this.pos = 0;
			this.destroyed = false;
			this.buffer = new Uint8Array(blockLen);
			this.view = createView$2(this.buffer);
		}
		update(data) {
			aexists$2(this);
			const { view, buffer, blockLen } = this;
			data = toBytes$2(data);
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				if (take === blockLen) {
					const dataView = createView$2(data);
					for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
					continue;
				}
				buffer.set(data.subarray(pos, pos + take), this.pos);
				this.pos += take;
				pos += take;
				if (this.pos === blockLen) {
					this.process(view, 0);
					this.pos = 0;
				}
			}
			this.length += data.length;
			this.roundClean();
			return this;
		}
		digestInto(out) {
			aexists$2(this);
			aoutput$2(out, this);
			this.finished = true;
			const { buffer, view, blockLen, isLE } = this;
			let { pos } = this;
			buffer[pos++] = 128;
			this.buffer.subarray(pos).fill(0);
			if (this.padOffset > blockLen - pos) {
				this.process(view, 0);
				pos = 0;
			}
			for (let i = pos; i < blockLen; i++) buffer[i] = 0;
			setBigUint64$2(view, blockLen - 8, BigInt(this.length * 8), isLE);
			this.process(view, 0);
			const oview = createView$2(out);
			const len = this.outputLen;
			if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
			const outLen = len / 4;
			const state = this.get();
			if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
			for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
		}
		digest() {
			const { buffer, outputLen } = this;
			this.digestInto(buffer);
			const res = buffer.slice(0, outputLen);
			this.destroy();
			return res;
		}
		_cloneInto(to) {
			to || (to = new this.constructor());
			to.set(...this.get());
			const { blockLen, buffer, length, finished, destroyed, pos } = this;
			to.length = length;
			to.pos = pos;
			to.finished = finished;
			to.destroyed = destroyed;
			if (length % blockLen) to.buffer.set(buffer);
			return to;
		}
	};
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K$2, SHA256_IV$2, SHA256_W$2, SHA256$2, sha256$2;
var init_sha256$2 = __esmMin((() => {
	init__md$2();
	init_utils$5();
	SHA256_K$2 = /* @__PURE__ */ new Uint32Array([
		1116352408,
		1899447441,
		3049323471,
		3921009573,
		961987163,
		1508970993,
		2453635748,
		2870763221,
		3624381080,
		310598401,
		607225278,
		1426881987,
		1925078388,
		2162078206,
		2614888103,
		3248222580,
		3835390401,
		4022224774,
		264347078,
		604807628,
		770255983,
		1249150122,
		1555081692,
		1996064986,
		2554220882,
		2821834349,
		2952996808,
		3210313671,
		3336571891,
		3584528711,
		113926993,
		338241895,
		666307205,
		773529912,
		1294757372,
		1396182291,
		1695183700,
		1986661051,
		2177026350,
		2456956037,
		2730485921,
		2820302411,
		3259730800,
		3345764771,
		3516065817,
		3600352804,
		4094571909,
		275423344,
		430227734,
		506948616,
		659060556,
		883997877,
		958139571,
		1322822218,
		1537002063,
		1747873779,
		1955562222,
		2024104815,
		2227730452,
		2361852424,
		2428436474,
		2756734187,
		3204031479,
		3329325298
	]);
	SHA256_IV$2 = /* @__PURE__ */ new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	SHA256_W$2 = /* @__PURE__ */ new Uint32Array(64);
	SHA256$2 = class extends HashMD$2 {
		constructor() {
			super(64, 32, 8, false);
			this.A = SHA256_IV$2[0] | 0;
			this.B = SHA256_IV$2[1] | 0;
			this.C = SHA256_IV$2[2] | 0;
			this.D = SHA256_IV$2[3] | 0;
			this.E = SHA256_IV$2[4] | 0;
			this.F = SHA256_IV$2[5] | 0;
			this.G = SHA256_IV$2[6] | 0;
			this.H = SHA256_IV$2[7] | 0;
		}
		get() {
			const { A, B, C, D, E, F, G, H } = this;
			return [
				A,
				B,
				C,
				D,
				E,
				F,
				G,
				H
			];
		}
		set(A, B, C, D, E, F, G, H) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
			this.F = F | 0;
			this.G = G | 0;
			this.H = H | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA256_W$2[i] = view.getUint32(offset, false);
			for (let i = 16; i < 64; i++) {
				const W15 = SHA256_W$2[i - 15];
				const W2 = SHA256_W$2[i - 2];
				const s0 = rotr$2(W15, 7) ^ rotr$2(W15, 18) ^ W15 >>> 3;
				const s1 = rotr$2(W2, 17) ^ rotr$2(W2, 19) ^ W2 >>> 10;
				SHA256_W$2[i] = s1 + SHA256_W$2[i - 7] + s0 + SHA256_W$2[i - 16] | 0;
			}
			let { A, B, C, D, E, F, G, H } = this;
			for (let i = 0; i < 64; i++) {
				const sigma1 = rotr$2(E, 6) ^ rotr$2(E, 11) ^ rotr$2(E, 25);
				const T1 = H + sigma1 + Chi$2(E, F, G) + SHA256_K$2[i] + SHA256_W$2[i] | 0;
				const T2 = (rotr$2(A, 2) ^ rotr$2(A, 13) ^ rotr$2(A, 22)) + Maj$2(A, B, C) | 0;
				H = G;
				G = F;
				F = E;
				E = D + T1 | 0;
				D = C;
				C = B;
				B = A;
				A = T1 + T2 | 0;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			F = F + this.F | 0;
			G = G + this.G | 0;
			H = H + this.H | 0;
			this.set(A, B, C, D, E, F, G, H);
		}
		roundClean() {
			SHA256_W$2.fill(0);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0);
			this.buffer.fill(0);
		}
	};
	sha256$2 = /* @__PURE__ */ wrapConstructor$2(() => new SHA256$2());
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/hmac.js
var HMAC$2, hmac$2;
var init_hmac$2 = __esmMin((() => {
	init__assert$2();
	init_utils$5();
	HMAC$2 = class extends Hash$2 {
		constructor(hash, _key) {
			super();
			this.finished = false;
			this.destroyed = false;
			ahash$2(hash);
			const key = toBytes$2(_key);
			this.iHash = hash.create();
			if (typeof this.iHash.update !== "function") throw new Error("Expected instance of class which extends utils.Hash");
			this.blockLen = this.iHash.blockLen;
			this.outputLen = this.iHash.outputLen;
			const blockLen = this.blockLen;
			const pad = new Uint8Array(blockLen);
			pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
			for (let i = 0; i < pad.length; i++) pad[i] ^= 54;
			this.iHash.update(pad);
			this.oHash = hash.create();
			for (let i = 0; i < pad.length; i++) pad[i] ^= 106;
			this.oHash.update(pad);
			pad.fill(0);
		}
		update(buf) {
			aexists$2(this);
			this.iHash.update(buf);
			return this;
		}
		digestInto(out) {
			aexists$2(this);
			abytes$5(out, this.outputLen);
			this.finished = true;
			this.iHash.digestInto(out);
			this.oHash.update(out);
			this.oHash.digestInto(out);
			this.destroy();
		}
		digest() {
			const out = new Uint8Array(this.oHash.outputLen);
			this.digestInto(out);
			return out;
		}
		_cloneInto(to) {
			to || (to = Object.create(Object.getPrototypeOf(this), {}));
			const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
			to = to;
			to.finished = finished;
			to.destroyed = destroyed;
			to.blockLen = blockLen;
			to.outputLen = outputLen;
			to.oHash = oHash._cloneInto(to.oHash);
			to.iHash = iHash._cloneInto(to.iHash);
			return to;
		}
		destroy() {
			this.destroyed = true;
			this.oHash.destroy();
			this.iHash.destroy();
		}
	};
	hmac$2 = (hash, key, message) => new HMAC$2(hash, key).update(message).digest();
	hmac$2.create = (hash, key) => new HMAC$2(hash, key);
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports$2 = /* @__PURE__ */ __exportAll({
	aInRange: () => aInRange$2,
	abool: () => abool$2,
	abytes: () => abytes$4,
	bitGet: () => bitGet$2,
	bitLen: () => bitLen$2,
	bitMask: () => bitMask$2,
	bitSet: () => bitSet$2,
	bytesToHex: () => bytesToHex$2,
	bytesToNumberBE: () => bytesToNumberBE$2,
	bytesToNumberLE: () => bytesToNumberLE$2,
	concatBytes: () => concatBytes$4,
	createHmacDrbg: () => createHmacDrbg$2,
	ensureBytes: () => ensureBytes$2,
	equalBytes: () => equalBytes$2,
	hexToBytes: () => hexToBytes$2,
	hexToNumber: () => hexToNumber$2,
	inRange: () => inRange$2,
	isBytes: () => isBytes$4,
	memoized: () => memoized$2,
	notImplemented: () => notImplemented$2,
	numberToBytesBE: () => numberToBytesBE$2,
	numberToBytesLE: () => numberToBytesLE$2,
	numberToHexUnpadded: () => numberToHexUnpadded$2,
	numberToVarBytesBE: () => numberToVarBytesBE$2,
	utf8ToBytes: () => utf8ToBytes$4,
	validateObject: () => validateObject$2
});
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function isBytes$4(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes$4(item) {
	if (!isBytes$4(item)) throw new Error("Uint8Array expected");
}
function abool$2(title, value) {
	if (typeof value !== "boolean") throw new Error(title + " boolean expected, got " + value);
}
/**
* @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
*/
function bytesToHex$2(bytes) {
	abytes$4(bytes);
	let hex = "";
	for (let i = 0; i < bytes.length; i++) hex += hexes$2[bytes[i]];
	return hex;
}
function numberToHexUnpadded$2(num) {
	const hex = num.toString(16);
	return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber$2(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	return hex === "" ? _0n$11 : BigInt("0x" + hex);
}
function asciiToBase16$2(ch) {
	if (ch >= asciis$2._0 && ch <= asciis$2._9) return ch - asciis$2._0;
	if (ch >= asciis$2.A && ch <= asciis$2.F) return ch - (asciis$2.A - 10);
	if (ch >= asciis$2.a && ch <= asciis$2.f) return ch - (asciis$2.a - 10);
}
/**
* @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
*/
function hexToBytes$2(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	const hl = hex.length;
	const al = hl / 2;
	if (hl % 2) throw new Error("hex string expected, got unpadded hex of length " + hl);
	const array = new Uint8Array(al);
	for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
		const n1 = asciiToBase16$2(hex.charCodeAt(hi));
		const n2 = asciiToBase16$2(hex.charCodeAt(hi + 1));
		if (n1 === void 0 || n2 === void 0) {
			const char = hex[hi] + hex[hi + 1];
			throw new Error("hex string expected, got non-hex character \"" + char + "\" at index " + hi);
		}
		array[ai] = n1 * 16 + n2;
	}
	return array;
}
function bytesToNumberBE$2(bytes) {
	return hexToNumber$2(bytesToHex$2(bytes));
}
function bytesToNumberLE$2(bytes) {
	abytes$4(bytes);
	return hexToNumber$2(bytesToHex$2(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE$2(n, len) {
	return hexToBytes$2(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE$2(n, len) {
	return numberToBytesBE$2(n, len).reverse();
}
function numberToVarBytesBE$2(n) {
	return hexToBytes$2(numberToHexUnpadded$2(n));
}
/**
* Takes hex string or Uint8Array, converts to Uint8Array.
* Validates output length.
* Will throw error for other types.
* @param title descriptive title for an error e.g. 'private key'
* @param hex hex string or Uint8Array
* @param expectedLength optional, will compare to result array's length
* @returns
*/
function ensureBytes$2(title, hex, expectedLength) {
	let res;
	if (typeof hex === "string") try {
		res = hexToBytes$2(hex);
	} catch (e) {
		throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
	}
	else if (isBytes$4(hex)) res = Uint8Array.from(hex);
	else throw new Error(title + " must be hex string or Uint8Array");
	const len = res.length;
	if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(title + " of length " + expectedLength + " expected, got " + len);
	return res;
}
/**
* Copies several Uint8Arrays into one.
*/
function concatBytes$4(...arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		const a = arrays[i];
		abytes$4(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i = 0, pad = 0; i < arrays.length; i++) {
		const a = arrays[i];
		res.set(a, pad);
		pad += a.length;
	}
	return res;
}
function equalBytes$2(a, b) {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
	return diff === 0;
}
/**
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes$4(str) {
	if (typeof str !== "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(str));
}
function inRange$2(n, min, max) {
	return isPosBig$2(n) && isPosBig$2(min) && isPosBig$2(max) && min <= n && n < max;
}
/**
* Asserts min <= n < max. NOTE: It's < max and not <= max.
* @example
* aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
*/
function aInRange$2(title, n, min, max) {
	if (!inRange$2(n, min, max)) throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
/**
* Calculates amount of bits in a bigint.
* Same as `n.toString(2).length`
*/
function bitLen$2(n) {
	let len = 0;
	for (; n > _0n$11; n >>= _1n$14, len += 1);
	return len;
}
/**
* Gets single bit at position.
* NOTE: first bit position is 0 (same as arrays)
* Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
*/
function bitGet$2(n, pos) {
	return n >> BigInt(pos) & _1n$14;
}
/**
* Sets single bit at position.
*/
function bitSet$2(n, pos, value) {
	return n | (value ? _1n$14 : _0n$11) << BigInt(pos);
}
/**
* Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
* @returns function that will call DRBG until 2nd arg returns something meaningful
* @example
*   const drbg = createHmacDRBG<Key>(32, 32, hmac);
*   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
*/
function createHmacDrbg$2(hashLen, qByteLen, hmacFn) {
	if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
	if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
	if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
	let v = u8n$2(hashLen);
	let k = u8n$2(hashLen);
	let i = 0;
	const reset = () => {
		v.fill(1);
		k.fill(0);
		i = 0;
	};
	const h = (...b) => hmacFn(k, v, ...b);
	const reseed = (seed = u8n$2()) => {
		k = h(u8fr$2([0]), seed);
		v = h();
		if (seed.length === 0) return;
		k = h(u8fr$2([1]), seed);
		v = h();
	};
	const gen = () => {
		if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
		let len = 0;
		const out = [];
		while (len < qByteLen) {
			v = h();
			const sl = v.slice();
			out.push(sl);
			len += v.length;
		}
		return concatBytes$4(...out);
	};
	const genUntil = (seed, pred) => {
		reset();
		reseed(seed);
		let res = void 0;
		while (!(res = pred(gen()))) reseed();
		reset();
		return res;
	};
	return genUntil;
}
function validateObject$2(object, validators, optValidators = {}) {
	const checkField = (fieldName, type, isOptional) => {
		const checkVal = validatorFns$2[type];
		if (typeof checkVal !== "function") throw new Error("invalid validator function");
		const val = object[fieldName];
		if (isOptional && val === void 0) return;
		if (!checkVal(val, object)) throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
	};
	for (const [fieldName, type] of Object.entries(validators)) checkField(fieldName, type, false);
	for (const [fieldName, type] of Object.entries(optValidators)) checkField(fieldName, type, true);
	return object;
}
/**
* Memoizes (caches) computation result.
* Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
*/
function memoized$2(fn) {
	const map = /* @__PURE__ */ new WeakMap();
	return (arg, ...args) => {
		const val = map.get(arg);
		if (val !== void 0) return val;
		const computed = fn(arg, ...args);
		map.set(arg, computed);
		return computed;
	};
}
var _0n$11, _1n$14, _2n$8, hexes$2, asciis$2, isPosBig$2, bitMask$2, u8n$2, u8fr$2, validatorFns$2, notImplemented$2;
var init_utils$4 = __esmMin((() => {
	_0n$11 = /* @__PURE__ */ BigInt(0);
	_1n$14 = /* @__PURE__ */ BigInt(1);
	_2n$8 = /* @__PURE__ */ BigInt(2);
	hexes$2 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
	asciis$2 = {
		_0: 48,
		_9: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
	isPosBig$2 = (n) => typeof n === "bigint" && _0n$11 <= n;
	bitMask$2 = (n) => (_2n$8 << BigInt(n - 1)) - _1n$14;
	u8n$2 = (data) => new Uint8Array(data);
	u8fr$2 = (arr) => Uint8Array.from(arr);
	validatorFns$2 = {
		bigint: (val) => typeof val === "bigint",
		function: (val) => typeof val === "function",
		boolean: (val) => typeof val === "boolean",
		string: (val) => typeof val === "string",
		stringOrUint8Array: (val) => typeof val === "string" || isBytes$4(val),
		isSafeInteger: (val) => Number.isSafeInteger(val),
		array: (val) => Array.isArray(val),
		field: (val, object) => object.Fp.isValid(val),
		hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
	};
	notImplemented$2 = () => {
		throw new Error("not implemented");
	};
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/curves/esm/abstract/modular.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function mod$2(a, b) {
	const result = a % b;
	return result >= _0n$10 ? result : b + result;
}
/**
* Efficiently raise num to power and do modular division.
* Unsafe in some contexts: uses ladder, so can expose bigint bits.
* @todo use field version && remove
* @example
* pow(2n, 6n, 11n) // 64n % 11n == 9n
*/
function pow$2(num, power, modulo) {
	if (power < _0n$10) throw new Error("invalid exponent, negatives unsupported");
	if (modulo <= _0n$10) throw new Error("invalid modulus");
	if (modulo === _1n$13) return _0n$10;
	let res = _1n$13;
	while (power > _0n$10) {
		if (power & _1n$13) res = res * num % modulo;
		num = num * num % modulo;
		power >>= _1n$13;
	}
	return res;
}
/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
function pow2$2(x, power, modulo) {
	let res = x;
	while (power-- > _0n$10) {
		res *= res;
		res %= modulo;
	}
	return res;
}
/**
* Inverses number over modulo.
* Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
*/
function invert$2(number, modulo) {
	if (number === _0n$10) throw new Error("invert: expected non-zero number");
	if (modulo <= _0n$10) throw new Error("invert: expected positive modulus, got " + modulo);
	let a = mod$2(number, modulo);
	let b = modulo;
	let x = _0n$10, y = _1n$13, u = _1n$13, v = _0n$10;
	while (a !== _0n$10) {
		const q = b / a;
		const r = b % a;
		const m = x - u * q;
		const n = y - v * q;
		b = a, a = r, x = u, y = v, u = m, v = n;
	}
	if (b !== _1n$13) throw new Error("invert: does not exist");
	return mod$2(x, modulo);
}
/**
* Tonelli-Shanks square root search algorithm.
* 1. https://eprint.iacr.org/2012/685.pdf (page 12)
* 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
* Will start an infinite loop if field order P is not prime.
* @param P field order
* @returns function that takes field Fp (created from P) and number n
*/
function tonelliShanks$2(P) {
	const legendreC = (P - _1n$13) / _2n$7;
	let Q, S, Z;
	for (Q = P - _1n$13, S = 0; Q % _2n$7 === _0n$10; Q /= _2n$7, S++);
	for (Z = _2n$7; Z < P && pow$2(Z, legendreC, P) !== P - _1n$13; Z++) if (Z > 1e3) throw new Error("Cannot find square root: likely non-prime P");
	if (S === 1) {
		const p1div4 = (P + _1n$13) / _4n$2;
		return function tonelliFast(Fp, n) {
			const root = Fp.pow(n, p1div4);
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	const Q1div2 = (Q + _1n$13) / _2n$7;
	return function tonelliSlow(Fp, n) {
		if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error("Cannot find square root");
		let r = S;
		let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
		let x = Fp.pow(n, Q1div2);
		let b = Fp.pow(n, Q);
		while (!Fp.eql(b, Fp.ONE)) {
			if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO;
			let m = 1;
			for (let t2 = Fp.sqr(b); m < r; m++) {
				if (Fp.eql(t2, Fp.ONE)) break;
				t2 = Fp.sqr(t2);
			}
			const ge = Fp.pow(g, _1n$13 << BigInt(r - m - 1));
			g = Fp.sqr(ge);
			x = Fp.mul(x, ge);
			b = Fp.mul(b, g);
			r = m;
		}
		return x;
	};
}
/**
* Square root for a finite field. It will try to check if optimizations are applicable and fall back to 4:
*
* 1. P ≡ 3 (mod 4)
* 2. P ≡ 5 (mod 8)
* 3. P ≡ 9 (mod 16)
* 4. Tonelli-Shanks algorithm
*
* Different algorithms can give different roots, it is up to user to decide which one they want.
* For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
*/
function FpSqrt$2(P) {
	if (P % _4n$2 === _3n$5) {
		const p1div4 = (P + _1n$13) / _4n$2;
		return function sqrt3mod4(Fp, n) {
			const root = Fp.pow(n, p1div4);
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	if (P % _8n$2 === _5n$2) {
		const c1 = (P - _5n$2) / _8n$2;
		return function sqrt5mod8(Fp, n) {
			const n2 = Fp.mul(n, _2n$7);
			const v = Fp.pow(n2, c1);
			const nv = Fp.mul(n, v);
			const i = Fp.mul(Fp.mul(nv, _2n$7), v);
			const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	if (P % _16n$2 === _9n$2) {}
	return tonelliShanks$2(P);
}
function validateField$2(field) {
	return validateObject$2(field, FIELD_FIELDS$2.reduce((map, val) => {
		map[val] = "function";
		return map;
	}, {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "isSafeInteger",
		BITS: "isSafeInteger"
	}));
}
/**
* Same as `pow` but for Fp: non-constant-time.
* Unsafe in some contexts: uses ladder, so can expose bigint bits.
*/
function FpPow$2(f, num, power) {
	if (power < _0n$10) throw new Error("invalid exponent, negatives unsupported");
	if (power === _0n$10) return f.ONE;
	if (power === _1n$13) return num;
	let p = f.ONE;
	let d = num;
	while (power > _0n$10) {
		if (power & _1n$13) p = f.mul(p, d);
		d = f.sqr(d);
		power >>= _1n$13;
	}
	return p;
}
/**
* Efficiently invert an array of Field elements.
* `inv(0)` will return `undefined` here: make sure to throw an error.
*/
function FpInvertBatch$2(f, nums) {
	const tmp = new Array(nums.length);
	const lastMultiplied = nums.reduce((acc, num, i) => {
		if (f.is0(num)) return acc;
		tmp[i] = acc;
		return f.mul(acc, num);
	}, f.ONE);
	const inverted = f.inv(lastMultiplied);
	nums.reduceRight((acc, num, i) => {
		if (f.is0(num)) return acc;
		tmp[i] = f.mul(acc, tmp[i]);
		return f.mul(acc, num);
	}, inverted);
	return tmp;
}
function nLength$2(n, nBitLength) {
	const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
	return {
		nBitLength: _nBitLength,
		nByteLength: Math.ceil(_nBitLength / 8)
	};
}
/**
* Initializes a finite field over prime.
* Major performance optimizations:
* * a) denormalized operations like mulN instead of mul
* * b) same object shape: never add or remove keys
* * c) Object.freeze
* Fragile: always run a benchmark on a change.
* Security note: operations don't check 'isValid' for all elements for performance reasons,
* it is caller responsibility to check this.
* This is low-level code, please make sure you know what you're doing.
* @param ORDER prime positive bigint
* @param bitLen how many bits the field consumes
* @param isLE (def: false) if encoding / decoding should be in little-endian
* @param redef optional faster redefinitions of sqrt and other methods
*/
function Field$2(ORDER, bitLen, isLE = false, redef = {}) {
	if (ORDER <= _0n$10) throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
	const { nBitLength: BITS, nByteLength: BYTES } = nLength$2(ORDER, bitLen);
	if (BYTES > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let sqrtP;
	const f = Object.freeze({
		ORDER,
		isLE,
		BITS,
		BYTES,
		MASK: bitMask$2(BITS),
		ZERO: _0n$10,
		ONE: _1n$13,
		create: (num) => mod$2(num, ORDER),
		isValid: (num) => {
			if (typeof num !== "bigint") throw new Error("invalid field element: expected bigint, got " + typeof num);
			return _0n$10 <= num && num < ORDER;
		},
		is0: (num) => num === _0n$10,
		isOdd: (num) => (num & _1n$13) === _1n$13,
		neg: (num) => mod$2(-num, ORDER),
		eql: (lhs, rhs) => lhs === rhs,
		sqr: (num) => mod$2(num * num, ORDER),
		add: (lhs, rhs) => mod$2(lhs + rhs, ORDER),
		sub: (lhs, rhs) => mod$2(lhs - rhs, ORDER),
		mul: (lhs, rhs) => mod$2(lhs * rhs, ORDER),
		pow: (num, power) => FpPow$2(f, num, power),
		div: (lhs, rhs) => mod$2(lhs * invert$2(rhs, ORDER), ORDER),
		sqrN: (num) => num * num,
		addN: (lhs, rhs) => lhs + rhs,
		subN: (lhs, rhs) => lhs - rhs,
		mulN: (lhs, rhs) => lhs * rhs,
		inv: (num) => invert$2(num, ORDER),
		sqrt: redef.sqrt || ((n) => {
			if (!sqrtP) sqrtP = FpSqrt$2(ORDER);
			return sqrtP(f, n);
		}),
		invertBatch: (lst) => FpInvertBatch$2(f, lst),
		cmov: (a, b, c) => c ? b : a,
		toBytes: (num) => isLE ? numberToBytesLE$2(num, BYTES) : numberToBytesBE$2(num, BYTES),
		fromBytes: (bytes) => {
			if (bytes.length !== BYTES) throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
			return isLE ? bytesToNumberLE$2(bytes) : bytesToNumberBE$2(bytes);
		}
	});
	return Object.freeze(f);
}
/**
* Returns total number of bytes consumed by the field element.
* For example, 32 bytes for usual 256-bit weierstrass curve.
* @param fieldOrder number of field elements, usually CURVE.n
* @returns byte length of field
*/
function getFieldBytesLength$2(fieldOrder) {
	if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
	const bitLength = fieldOrder.toString(2).length;
	return Math.ceil(bitLength / 8);
}
/**
* Returns minimal amount of bytes that can be safely reduced
* by field order.
* Should be 2^-128 for 128-bit curve such as P256.
* @param fieldOrder number of field elements, usually CURVE.n
* @returns byte length of target hash
*/
function getMinHashLength$2(fieldOrder) {
	const length = getFieldBytesLength$2(fieldOrder);
	return length + Math.ceil(length / 2);
}
/**
* "Constant-time" private key generation utility.
* Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
* and convert them into private scalar, with the modulo bias being negligible.
* Needs at least 48 bytes of input for 32-byte private key.
* https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
* FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
* RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
* @param hash hash output from SHA3 or a similar function
* @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
* @param isLE interpret hash bytes as LE num
* @returns valid private scalar
*/
function mapHashToField$2(key, fieldOrder, isLE = false) {
	const len = key.length;
	const fieldLen = getFieldBytesLength$2(fieldOrder);
	const minLen = getMinHashLength$2(fieldOrder);
	if (len < 16 || len < minLen || len > 1024) throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
	const reduced = mod$2(isLE ? bytesToNumberLE$2(key) : bytesToNumberBE$2(key), fieldOrder - _1n$13) + _1n$13;
	return isLE ? numberToBytesLE$2(reduced, fieldLen) : numberToBytesBE$2(reduced, fieldLen);
}
var _0n$10, _1n$13, _2n$7, _3n$5, _4n$2, _5n$2, _8n$2, _9n$2, _16n$2, FIELD_FIELDS$2;
var init_modular$2 = __esmMin((() => {
	init_utils$4();
	_0n$10 = BigInt(0);
	_1n$13 = BigInt(1);
	_2n$7 = /* @__PURE__ */ BigInt(2);
	_3n$5 = /* @__PURE__ */ BigInt(3);
	_4n$2 = /* @__PURE__ */ BigInt(4);
	_5n$2 = /* @__PURE__ */ BigInt(5);
	_8n$2 = /* @__PURE__ */ BigInt(8);
	_9n$2 = /* @__PURE__ */ BigInt(9);
	_16n$2 = /* @__PURE__ */ BigInt(16);
	FIELD_FIELDS$2 = [
		"create",
		"isValid",
		"is0",
		"neg",
		"inv",
		"sqrt",
		"sqr",
		"eql",
		"add",
		"sub",
		"mul",
		"pow",
		"div",
		"addN",
		"subN",
		"mulN",
		"sqrN"
	];
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/curves/esm/abstract/curve.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function constTimeNegate$2(condition, item) {
	const neg = item.negate();
	return condition ? neg : item;
}
function validateW$2(W, bits) {
	if (!Number.isSafeInteger(W) || W <= 0 || W > bits) throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts$2(W, bits) {
	validateW$2(W, bits);
	return {
		windows: Math.ceil(bits / W) + 1,
		windowSize: 2 ** (W - 1)
	};
}
function validateMSMPoints$2(points, c) {
	if (!Array.isArray(points)) throw new Error("array expected");
	points.forEach((p, i) => {
		if (!(p instanceof c)) throw new Error("invalid point at index " + i);
	});
}
function validateMSMScalars$2(scalars, field) {
	if (!Array.isArray(scalars)) throw new Error("array of scalars expected");
	scalars.forEach((s, i) => {
		if (!field.isValid(s)) throw new Error("invalid scalar at index " + i);
	});
}
function getW$2(P) {
	return pointWindowSizes$2.get(P) || 1;
}
/**
* Elliptic curve multiplication of Point by scalar. Fragile.
* Scalars should always be less than curve order: this should be checked inside of a curve itself.
* Creates precomputation tables for fast multiplication:
* - private scalar is split by fixed size windows of W bits
* - every window point is collected from window's table & added to accumulator
* - since windows are different, same point inside tables won't be accessed more than once per calc
* - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
* - +1 window is neccessary for wNAF
* - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
*
* @todo Research returning 2d JS array of windows, instead of a single window.
* This would allow windows to be in different memory locations
*/
function wNAF$2(c, bits) {
	return {
		constTimeNegate: constTimeNegate$2,
		hasPrecomputes(elm) {
			return getW$2(elm) !== 1;
		},
		unsafeLadder(elm, n, p = c.ZERO) {
			let d = elm;
			while (n > _0n$9) {
				if (n & _1n$12) p = p.add(d);
				d = d.double();
				n >>= _1n$12;
			}
			return p;
		},
		/**
		* Creates a wNAF precomputation window. Used for caching.
		* Default window size is set by `utils.precompute()` and is equal to 8.
		* Number of precomputed points depends on the curve size:
		* 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
		* - 𝑊 is the window size
		* - 𝑛 is the bitlength of the curve order.
		* For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
		* @param elm Point instance
		* @param W window size
		* @returns precomputed point tables flattened to a single array
		*/
		precomputeWindow(elm, W) {
			const { windows, windowSize } = calcWOpts$2(W, bits);
			const points = [];
			let p = elm;
			let base = p;
			for (let window = 0; window < windows; window++) {
				base = p;
				points.push(base);
				for (let i = 1; i < windowSize; i++) {
					base = base.add(p);
					points.push(base);
				}
				p = base.double();
			}
			return points;
		},
		/**
		* Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
		* @param W window size
		* @param precomputes precomputed tables
		* @param n scalar (we don't check here, but should be less than curve order)
		* @returns real and fake (for const-time) points
		*/
		wNAF(W, precomputes, n) {
			const { windows, windowSize } = calcWOpts$2(W, bits);
			let p = c.ZERO;
			let f = c.BASE;
			const mask = BigInt(2 ** W - 1);
			const maxNumber = 2 ** W;
			const shiftBy = BigInt(W);
			for (let window = 0; window < windows; window++) {
				const offset = window * windowSize;
				let wbits = Number(n & mask);
				n >>= shiftBy;
				if (wbits > windowSize) {
					wbits -= maxNumber;
					n += _1n$12;
				}
				const offset1 = offset;
				const offset2 = offset + Math.abs(wbits) - 1;
				const cond1 = window % 2 !== 0;
				const cond2 = wbits < 0;
				if (wbits === 0) f = f.add(constTimeNegate$2(cond1, precomputes[offset1]));
				else p = p.add(constTimeNegate$2(cond2, precomputes[offset2]));
			}
			return {
				p,
				f
			};
		},
		/**
		* Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
		* @param W window size
		* @param precomputes precomputed tables
		* @param n scalar (we don't check here, but should be less than curve order)
		* @param acc accumulator point to add result of multiplication
		* @returns point
		*/
		wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
			const { windows, windowSize } = calcWOpts$2(W, bits);
			const mask = BigInt(2 ** W - 1);
			const maxNumber = 2 ** W;
			const shiftBy = BigInt(W);
			for (let window = 0; window < windows; window++) {
				const offset = window * windowSize;
				if (n === _0n$9) break;
				let wbits = Number(n & mask);
				n >>= shiftBy;
				if (wbits > windowSize) {
					wbits -= maxNumber;
					n += _1n$12;
				}
				if (wbits === 0) continue;
				let curr = precomputes[offset + Math.abs(wbits) - 1];
				if (wbits < 0) curr = curr.negate();
				acc = acc.add(curr);
			}
			return acc;
		},
		getPrecomputes(W, P, transform) {
			let comp = pointPrecomputes$2.get(P);
			if (!comp) {
				comp = this.precomputeWindow(P, W);
				if (W !== 1) pointPrecomputes$2.set(P, transform(comp));
			}
			return comp;
		},
		wNAFCached(P, n, transform) {
			const W = getW$2(P);
			return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
		},
		wNAFCachedUnsafe(P, n, transform, prev) {
			const W = getW$2(P);
			if (W === 1) return this.unsafeLadder(P, n, prev);
			return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
		},
		setWindowSize(P, W) {
			validateW$2(W, bits);
			pointWindowSizes$2.set(P, W);
			pointPrecomputes$2.delete(P);
		}
	};
}
/**
* Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
* 30x faster vs naive addition on L=4096, 10x faster with precomputes.
* For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
* Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
* @param c Curve Point constructor
* @param fieldN field over CURVE.N - important that it's not over CURVE.P
* @param points array of L curve points
* @param scalars array of L scalars (aka private keys / bigints)
*/
function pippenger$2(c, fieldN, points, scalars) {
	validateMSMPoints$2(points, c);
	validateMSMScalars$2(scalars, fieldN);
	if (points.length !== scalars.length) throw new Error("arrays of points and scalars must have equal length");
	const zero = c.ZERO;
	const wbits = bitLen$2(BigInt(points.length));
	const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1;
	const MASK = (1 << windowSize) - 1;
	const buckets = new Array(MASK + 1).fill(zero);
	const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
	let sum = zero;
	for (let i = lastBits; i >= 0; i -= windowSize) {
		buckets.fill(zero);
		for (let j = 0; j < scalars.length; j++) {
			const scalar = scalars[j];
			const wbits = Number(scalar >> BigInt(i) & BigInt(MASK));
			buckets[wbits] = buckets[wbits].add(points[j]);
		}
		let resI = zero;
		for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
			sumI = sumI.add(buckets[j]);
			resI = resI.add(sumI);
		}
		sum = sum.add(resI);
		if (i !== 0) for (let j = 0; j < windowSize; j++) sum = sum.double();
	}
	return sum;
}
function validateBasic$2(curve) {
	validateField$2(curve.Fp);
	validateObject$2(curve, {
		n: "bigint",
		h: "bigint",
		Gx: "field",
		Gy: "field"
	}, {
		nBitLength: "isSafeInteger",
		nByteLength: "isSafeInteger"
	});
	return Object.freeze({
		...nLength$2(curve.n, curve.nBitLength),
		...curve,
		p: curve.Fp.ORDER
	});
}
var _0n$9, _1n$12, pointPrecomputes$2, pointWindowSizes$2;
var init_curve$2 = __esmMin((() => {
	init_modular$2();
	init_utils$4();
	_0n$9 = BigInt(0);
	_1n$12 = BigInt(1);
	pointPrecomputes$2 = /* @__PURE__ */ new WeakMap();
	pointWindowSizes$2 = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/curves/esm/abstract/weierstrass.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function validateSigVerOpts$2(opts) {
	if (opts.lowS !== void 0) abool$2("lowS", opts.lowS);
	if (opts.prehash !== void 0) abool$2("prehash", opts.prehash);
}
function validatePointOpts$2(curve) {
	const opts = validateBasic$2(curve);
	validateObject$2(opts, {
		a: "field",
		b: "field"
	}, {
		allowedPrivateKeyLengths: "array",
		wrapPrivateKey: "boolean",
		isTorsionFree: "function",
		clearCofactor: "function",
		allowInfinityPoint: "boolean",
		fromBytes: "function",
		toBytes: "function"
	});
	const { endo, Fp, a } = opts;
	if (endo) {
		if (!Fp.eql(a, Fp.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
		if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
	}
	return Object.freeze({ ...opts });
}
function weierstrassPoints$2(opts) {
	const CURVE = validatePointOpts$2(opts);
	const { Fp } = CURVE;
	const Fn = Field$2(CURVE.n, CURVE.nBitLength);
	const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
		const a = point.toAffine();
		return concatBytes$4(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
	});
	const fromBytes = CURVE.fromBytes || ((bytes) => {
		const tail = bytes.subarray(1);
		return {
			x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
			y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
		};
	});
	/**
	* y² = x³ + ax + b: Short weierstrass curve formula
	* @returns y²
	*/
	function weierstrassEquation(x) {
		const { a, b } = CURVE;
		const x2 = Fp.sqr(x);
		const x3 = Fp.mul(x2, x);
		return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
	}
	if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx))) throw new Error("bad generator point: equation left != right");
	function isWithinCurveOrder(num) {
		return inRange$2(num, _1n$11, CURVE.n);
	}
	function normPrivateKeyToScalar(key) {
		const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
		if (lengths && typeof key !== "bigint") {
			if (isBytes$4(key)) key = bytesToHex$2(key);
			if (typeof key !== "string" || !lengths.includes(key.length)) throw new Error("invalid private key");
			key = key.padStart(nByteLength * 2, "0");
		}
		let num;
		try {
			num = typeof key === "bigint" ? key : bytesToNumberBE$2(ensureBytes$2("private key", key, nByteLength));
		} catch (error) {
			throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
		}
		if (wrapPrivateKey) num = mod$2(num, N);
		aInRange$2("private key", num, _1n$11, N);
		return num;
	}
	function assertPrjPoint(other) {
		if (!(other instanceof Point)) throw new Error("ProjectivePoint expected");
	}
	const toAffineMemo = memoized$2((p, iz) => {
		const { px: x, py: y, pz: z } = p;
		if (Fp.eql(z, Fp.ONE)) return {
			x,
			y
		};
		const is0 = p.is0();
		if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
		const ax = Fp.mul(x, iz);
		const ay = Fp.mul(y, iz);
		const zz = Fp.mul(z, iz);
		if (is0) return {
			x: Fp.ZERO,
			y: Fp.ZERO
		};
		if (!Fp.eql(zz, Fp.ONE)) throw new Error("invZ was invalid");
		return {
			x: ax,
			y: ay
		};
	});
	const assertValidMemo = memoized$2((p) => {
		if (p.is0()) {
			if (CURVE.allowInfinityPoint && !Fp.is0(p.py)) return;
			throw new Error("bad point: ZERO");
		}
		const { x, y } = p.toAffine();
		if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error("bad point: x or y not FE");
		const left = Fp.sqr(y);
		const right = weierstrassEquation(x);
		if (!Fp.eql(left, right)) throw new Error("bad point: equation left != right");
		if (!p.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
		return true;
	});
	/**
	* Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
	* Default Point works in 2d / affine coordinates: (x, y)
	* We're doing calculations in projective, because its operations don't require costly inversion.
	*/
	class Point {
		constructor(px, py, pz) {
			this.px = px;
			this.py = py;
			this.pz = pz;
			if (px == null || !Fp.isValid(px)) throw new Error("x required");
			if (py == null || !Fp.isValid(py)) throw new Error("y required");
			if (pz == null || !Fp.isValid(pz)) throw new Error("z required");
			Object.freeze(this);
		}
		static fromAffine(p) {
			const { x, y } = p || {};
			if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error("invalid affine point");
			if (p instanceof Point) throw new Error("projective point not allowed");
			const is0 = (i) => Fp.eql(i, Fp.ZERO);
			if (is0(x) && is0(y)) return Point.ZERO;
			return new Point(x, y, Fp.ONE);
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		/**
		* Takes a bunch of Projective Points but executes only one
		* inversion on all of them. Inversion is very slow operation,
		* so this improves performance massively.
		* Optimization: converts a list of projective points to a list of identical points with Z=1.
		*/
		static normalizeZ(points) {
			const toInv = Fp.invertBatch(points.map((p) => p.pz));
			return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
		}
		/**
		* Converts hash string or Uint8Array to Point.
		* @param hex short/long ECDSA hex
		*/
		static fromHex(hex) {
			const P = Point.fromAffine(fromBytes(ensureBytes$2("pointHex", hex)));
			P.assertValidity();
			return P;
		}
		static fromPrivateKey(privateKey) {
			return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
		}
		static msm(points, scalars) {
			return pippenger$2(Point, Fn, points, scalars);
		}
		_setWindowSize(windowSize) {
			wnaf.setWindowSize(this, windowSize);
		}
		assertValidity() {
			assertValidMemo(this);
		}
		hasEvenY() {
			const { y } = this.toAffine();
			if (Fp.isOdd) return !Fp.isOdd(y);
			throw new Error("Field doesn't support isOdd");
		}
		/**
		* Compare one point to another.
		*/
		equals(other) {
			assertPrjPoint(other);
			const { px: X1, py: Y1, pz: Z1 } = this;
			const { px: X2, py: Y2, pz: Z2 } = other;
			const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
			const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
			return U1 && U2;
		}
		/**
		* Flips point to one corresponding to (x, -y) in Affine coordinates.
		*/
		negate() {
			return new Point(this.px, Fp.neg(this.py), this.pz);
		}
		double() {
			const { a, b } = CURVE;
			const b3 = Fp.mul(b, _3n$4);
			const { px: X1, py: Y1, pz: Z1 } = this;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			let t0 = Fp.mul(X1, X1);
			let t1 = Fp.mul(Y1, Y1);
			let t2 = Fp.mul(Z1, Z1);
			let t3 = Fp.mul(X1, Y1);
			t3 = Fp.add(t3, t3);
			Z3 = Fp.mul(X1, Z1);
			Z3 = Fp.add(Z3, Z3);
			X3 = Fp.mul(a, Z3);
			Y3 = Fp.mul(b3, t2);
			Y3 = Fp.add(X3, Y3);
			X3 = Fp.sub(t1, Y3);
			Y3 = Fp.add(t1, Y3);
			Y3 = Fp.mul(X3, Y3);
			X3 = Fp.mul(t3, X3);
			Z3 = Fp.mul(b3, Z3);
			t2 = Fp.mul(a, t2);
			t3 = Fp.sub(t0, t2);
			t3 = Fp.mul(a, t3);
			t3 = Fp.add(t3, Z3);
			Z3 = Fp.add(t0, t0);
			t0 = Fp.add(Z3, t0);
			t0 = Fp.add(t0, t2);
			t0 = Fp.mul(t0, t3);
			Y3 = Fp.add(Y3, t0);
			t2 = Fp.mul(Y1, Z1);
			t2 = Fp.add(t2, t2);
			t0 = Fp.mul(t2, t3);
			X3 = Fp.sub(X3, t0);
			Z3 = Fp.mul(t2, t1);
			Z3 = Fp.add(Z3, Z3);
			Z3 = Fp.add(Z3, Z3);
			return new Point(X3, Y3, Z3);
		}
		add(other) {
			assertPrjPoint(other);
			const { px: X1, py: Y1, pz: Z1 } = this;
			const { px: X2, py: Y2, pz: Z2 } = other;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			const a = CURVE.a;
			const b3 = Fp.mul(CURVE.b, _3n$4);
			let t0 = Fp.mul(X1, X2);
			let t1 = Fp.mul(Y1, Y2);
			let t2 = Fp.mul(Z1, Z2);
			let t3 = Fp.add(X1, Y1);
			let t4 = Fp.add(X2, Y2);
			t3 = Fp.mul(t3, t4);
			t4 = Fp.add(t0, t1);
			t3 = Fp.sub(t3, t4);
			t4 = Fp.add(X1, Z1);
			let t5 = Fp.add(X2, Z2);
			t4 = Fp.mul(t4, t5);
			t5 = Fp.add(t0, t2);
			t4 = Fp.sub(t4, t5);
			t5 = Fp.add(Y1, Z1);
			X3 = Fp.add(Y2, Z2);
			t5 = Fp.mul(t5, X3);
			X3 = Fp.add(t1, t2);
			t5 = Fp.sub(t5, X3);
			Z3 = Fp.mul(a, t4);
			X3 = Fp.mul(b3, t2);
			Z3 = Fp.add(X3, Z3);
			X3 = Fp.sub(t1, Z3);
			Z3 = Fp.add(t1, Z3);
			Y3 = Fp.mul(X3, Z3);
			t1 = Fp.add(t0, t0);
			t1 = Fp.add(t1, t0);
			t2 = Fp.mul(a, t2);
			t4 = Fp.mul(b3, t4);
			t1 = Fp.add(t1, t2);
			t2 = Fp.sub(t0, t2);
			t2 = Fp.mul(a, t2);
			t4 = Fp.add(t4, t2);
			t0 = Fp.mul(t1, t4);
			Y3 = Fp.add(Y3, t0);
			t0 = Fp.mul(t5, t4);
			X3 = Fp.mul(t3, X3);
			X3 = Fp.sub(X3, t0);
			t0 = Fp.mul(t3, t1);
			Z3 = Fp.mul(t5, Z3);
			Z3 = Fp.add(Z3, t0);
			return new Point(X3, Y3, Z3);
		}
		subtract(other) {
			return this.add(other.negate());
		}
		is0() {
			return this.equals(Point.ZERO);
		}
		wNAF(n) {
			return wnaf.wNAFCached(this, n, Point.normalizeZ);
		}
		/**
		* Non-constant-time multiplication. Uses double-and-add algorithm.
		* It's faster, but should only be used when you don't care about
		* an exposed private key e.g. sig verification, which works over *public* keys.
		*/
		multiplyUnsafe(sc) {
			const { endo, n: N } = CURVE;
			aInRange$2("scalar", sc, _0n$8, N);
			const I = Point.ZERO;
			if (sc === _0n$8) return I;
			if (this.is0() || sc === _1n$11) return this;
			if (!endo || wnaf.hasPrecomputes(this)) return wnaf.wNAFCachedUnsafe(this, sc, Point.normalizeZ);
			let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
			let k1p = I;
			let k2p = I;
			let d = this;
			while (k1 > _0n$8 || k2 > _0n$8) {
				if (k1 & _1n$11) k1p = k1p.add(d);
				if (k2 & _1n$11) k2p = k2p.add(d);
				d = d.double();
				k1 >>= _1n$11;
				k2 >>= _1n$11;
			}
			if (k1neg) k1p = k1p.negate();
			if (k2neg) k2p = k2p.negate();
			k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
			return k1p.add(k2p);
		}
		/**
		* Constant time multiplication.
		* Uses wNAF method. Windowed method may be 10% faster,
		* but takes 2x longer to generate and consumes 2x memory.
		* Uses precomputes when available.
		* Uses endomorphism for Koblitz curves.
		* @param scalar by which the point would be multiplied
		* @returns New point
		*/
		multiply(scalar) {
			const { endo, n: N } = CURVE;
			aInRange$2("scalar", scalar, _1n$11, N);
			let point, fake;
			if (endo) {
				const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
				let { p: k1p, f: f1p } = this.wNAF(k1);
				let { p: k2p, f: f2p } = this.wNAF(k2);
				k1p = wnaf.constTimeNegate(k1neg, k1p);
				k2p = wnaf.constTimeNegate(k2neg, k2p);
				k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
				point = k1p.add(k2p);
				fake = f1p.add(f2p);
			} else {
				const { p, f } = this.wNAF(scalar);
				point = p;
				fake = f;
			}
			return Point.normalizeZ([point, fake])[0];
		}
		/**
		* Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
		* Not using Strauss-Shamir trick: precomputation tables are faster.
		* The trick could be useful if both P and Q are not G (not in our case).
		* @returns non-zero affine point
		*/
		multiplyAndAddUnsafe(Q, a, b) {
			const G = Point.BASE;
			const mul = (P, a) => a === _0n$8 || a === _1n$11 || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
			const sum = mul(this, a).add(mul(Q, b));
			return sum.is0() ? void 0 : sum;
		}
		toAffine(iz) {
			return toAffineMemo(this, iz);
		}
		isTorsionFree() {
			const { h: cofactor, isTorsionFree } = CURVE;
			if (cofactor === _1n$11) return true;
			if (isTorsionFree) return isTorsionFree(Point, this);
			throw new Error("isTorsionFree() has not been declared for the elliptic curve");
		}
		clearCofactor() {
			const { h: cofactor, clearCofactor } = CURVE;
			if (cofactor === _1n$11) return this;
			if (clearCofactor) return clearCofactor(Point, this);
			return this.multiplyUnsafe(CURVE.h);
		}
		toRawBytes(isCompressed = true) {
			abool$2("isCompressed", isCompressed);
			this.assertValidity();
			return toBytes(Point, this, isCompressed);
		}
		toHex(isCompressed = true) {
			abool$2("isCompressed", isCompressed);
			return bytesToHex$2(this.toRawBytes(isCompressed));
		}
	}
	Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
	Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
	const _bits = CURVE.nBitLength;
	const wnaf = wNAF$2(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
	return {
		CURVE,
		ProjectivePoint: Point,
		normPrivateKeyToScalar,
		weierstrassEquation,
		isWithinCurveOrder
	};
}
function validateOpts$2(curve) {
	const opts = validateBasic$2(curve);
	validateObject$2(opts, {
		hash: "hash",
		hmac: "function",
		randomBytes: "function"
	}, {
		bits2int: "function",
		bits2int_modN: "function",
		lowS: "boolean"
	});
	return Object.freeze({
		lowS: true,
		...opts
	});
}
/**
* Creates short weierstrass curve and ECDSA signature methods for it.
* @example
* import { Field } from '@noble/curves/abstract/modular';
* // Before that, define BigInt-s: a, b, p, n, Gx, Gy
* const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
*/
function weierstrass$2(curveDef) {
	const CURVE = validateOpts$2(curveDef);
	const { Fp, n: CURVE_ORDER } = CURVE;
	const compressedLen = Fp.BYTES + 1;
	const uncompressedLen = 2 * Fp.BYTES + 1;
	function modN(a) {
		return mod$2(a, CURVE_ORDER);
	}
	function invN(a) {
		return invert$2(a, CURVE_ORDER);
	}
	const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints$2({
		...CURVE,
		toBytes(_c, point, isCompressed) {
			const a = point.toAffine();
			const x = Fp.toBytes(a.x);
			const cat = concatBytes$4;
			abool$2("isCompressed", isCompressed);
			if (isCompressed) return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
			else return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
		},
		fromBytes(bytes) {
			const len = bytes.length;
			const head = bytes[0];
			const tail = bytes.subarray(1);
			if (len === compressedLen && (head === 2 || head === 3)) {
				const x = bytesToNumberBE$2(tail);
				if (!inRange$2(x, _1n$11, Fp.ORDER)) throw new Error("Point is not on curve");
				const y2 = weierstrassEquation(x);
				let y;
				try {
					y = Fp.sqrt(y2);
				} catch (sqrtError) {
					const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
					throw new Error("Point is not on curve" + suffix);
				}
				const isYOdd = (y & _1n$11) === _1n$11;
				if ((head & 1) === 1 !== isYOdd) y = Fp.neg(y);
				return {
					x,
					y
				};
			} else if (len === uncompressedLen && head === 4) return {
				x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
				y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
			};
			else {
				const cl = compressedLen;
				const ul = uncompressedLen;
				throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
			}
		}
	});
	const numToNByteStr = (num) => bytesToHex$2(numberToBytesBE$2(num, CURVE.nByteLength));
	function isBiggerThanHalfOrder(number) {
		return number > CURVE_ORDER >> _1n$11;
	}
	function normalizeS(s) {
		return isBiggerThanHalfOrder(s) ? modN(-s) : s;
	}
	const slcNum = (b, from, to) => bytesToNumberBE$2(b.slice(from, to));
	/**
	* ECDSA signature with its (r, s) properties. Supports DER & compact representations.
	*/
	class Signature {
		constructor(r, s, recovery) {
			this.r = r;
			this.s = s;
			this.recovery = recovery;
			this.assertValidity();
		}
		static fromCompact(hex) {
			const l = CURVE.nByteLength;
			hex = ensureBytes$2("compactSignature", hex, l * 2);
			return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
		}
		static fromDER(hex) {
			const { r, s } = DER$2.toSig(ensureBytes$2("DER", hex));
			return new Signature(r, s);
		}
		assertValidity() {
			aInRange$2("r", this.r, _1n$11, CURVE_ORDER);
			aInRange$2("s", this.s, _1n$11, CURVE_ORDER);
		}
		addRecoveryBit(recovery) {
			return new Signature(this.r, this.s, recovery);
		}
		recoverPublicKey(msgHash) {
			const { r, s, recovery: rec } = this;
			const h = bits2int_modN(ensureBytes$2("msgHash", msgHash));
			if (rec == null || ![
				0,
				1,
				2,
				3
			].includes(rec)) throw new Error("recovery id invalid");
			const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
			if (radj >= Fp.ORDER) throw new Error("recovery id 2 or 3 invalid");
			const prefix = (rec & 1) === 0 ? "02" : "03";
			const R = Point.fromHex(prefix + numToNByteStr(radj));
			const ir = invN(radj);
			const u1 = modN(-h * ir);
			const u2 = modN(s * ir);
			const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
			if (!Q) throw new Error("point at infinify");
			Q.assertValidity();
			return Q;
		}
		hasHighS() {
			return isBiggerThanHalfOrder(this.s);
		}
		normalizeS() {
			return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return hexToBytes$2(this.toDERHex());
		}
		toDERHex() {
			return DER$2.hexFromSig({
				r: this.r,
				s: this.s
			});
		}
		toCompactRawBytes() {
			return hexToBytes$2(this.toCompactHex());
		}
		toCompactHex() {
			return numToNByteStr(this.r) + numToNByteStr(this.s);
		}
	}
	const utils = {
		isValidPrivateKey(privateKey) {
			try {
				normPrivateKeyToScalar(privateKey);
				return true;
			} catch (error) {
				return false;
			}
		},
		normPrivateKeyToScalar,
		/**
		* Produces cryptographically secure private key from random of size
		* (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
		*/
		randomPrivateKey: () => {
			const length = getMinHashLength$2(CURVE.n);
			return mapHashToField$2(CURVE.randomBytes(length), CURVE.n);
		},
		/**
		* Creates precompute table for an arbitrary EC point. Makes point "cached".
		* Allows to massively speed-up `point.multiply(scalar)`.
		* @returns cached point
		* @example
		* const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
		* fast.multiply(privKey); // much faster ECDH now
		*/
		precompute(windowSize = 8, point = Point.BASE) {
			point._setWindowSize(windowSize);
			point.multiply(BigInt(3));
			return point;
		}
	};
	/**
	* Computes public key for a private key. Checks for validity of the private key.
	* @param privateKey private key
	* @param isCompressed whether to return compact (default), or full key
	* @returns Public key, full when isCompressed=false; short when isCompressed=true
	*/
	function getPublicKey(privateKey, isCompressed = true) {
		return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
	}
	/**
	* Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
	*/
	function isProbPub(item) {
		const arr = isBytes$4(item);
		const str = typeof item === "string";
		const len = (arr || str) && item.length;
		if (arr) return len === compressedLen || len === uncompressedLen;
		if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
		if (item instanceof Point) return true;
		return false;
	}
	/**
	* ECDH (Elliptic Curve Diffie Hellman).
	* Computes shared public key from private key and public key.
	* Checks: 1) private key validity 2) shared key is on-curve.
	* Does NOT hash the result.
	* @param privateA private key
	* @param publicB different public key
	* @param isCompressed whether to return compact (default), or full key
	* @returns shared public key
	*/
	function getSharedSecret(privateA, publicB, isCompressed = true) {
		if (isProbPub(privateA)) throw new Error("first arg must be private key");
		if (!isProbPub(publicB)) throw new Error("second arg must be public key");
		return Point.fromHex(publicB).multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
	}
	const bits2int = CURVE.bits2int || function(bytes) {
		if (bytes.length > 8192) throw new Error("input is too large");
		const num = bytesToNumberBE$2(bytes);
		const delta = bytes.length * 8 - CURVE.nBitLength;
		return delta > 0 ? num >> BigInt(delta) : num;
	};
	const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
		return modN(bits2int(bytes));
	};
	const ORDER_MASK = bitMask$2(CURVE.nBitLength);
	/**
	* Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
	*/
	function int2octets(num) {
		aInRange$2("num < 2^" + CURVE.nBitLength, num, _0n$8, ORDER_MASK);
		return numberToBytesBE$2(num, CURVE.nByteLength);
	}
	function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
		if (["recovered", "canonical"].some((k) => k in opts)) throw new Error("sign() legacy options not supported");
		const { hash, randomBytes } = CURVE;
		let { lowS, prehash, extraEntropy: ent } = opts;
		if (lowS == null) lowS = true;
		msgHash = ensureBytes$2("msgHash", msgHash);
		validateSigVerOpts$2(opts);
		if (prehash) msgHash = ensureBytes$2("prehashed msgHash", hash(msgHash));
		const h1int = bits2int_modN(msgHash);
		const d = normPrivateKeyToScalar(privateKey);
		const seedArgs = [int2octets(d), int2octets(h1int)];
		if (ent != null && ent !== false) {
			const e = ent === true ? randomBytes(Fp.BYTES) : ent;
			seedArgs.push(ensureBytes$2("extraEntropy", e));
		}
		const seed = concatBytes$4(...seedArgs);
		const m = h1int;
		function k2sig(kBytes) {
			const k = bits2int(kBytes);
			if (!isWithinCurveOrder(k)) return;
			const ik = invN(k);
			const q = Point.BASE.multiply(k).toAffine();
			const r = modN(q.x);
			if (r === _0n$8) return;
			const s = modN(ik * modN(m + r * d));
			if (s === _0n$8) return;
			let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$11);
			let normS = s;
			if (lowS && isBiggerThanHalfOrder(s)) {
				normS = normalizeS(s);
				recovery ^= 1;
			}
			return new Signature(r, normS, recovery);
		}
		return {
			seed,
			k2sig
		};
	}
	const defaultSigOpts = {
		lowS: CURVE.lowS,
		prehash: false
	};
	const defaultVerOpts = {
		lowS: CURVE.lowS,
		prehash: false
	};
	/**
	* Signs message hash with a private key.
	* ```
	* sign(m, d, k) where
	*   (x, y) = G × k
	*   r = x mod n
	*   s = (m + dr)/k mod n
	* ```
	* @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
	* @param privKey private key
	* @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
	* @returns signature with recovery param
	*/
	function sign(msgHash, privKey, opts = defaultSigOpts) {
		const { seed, k2sig } = prepSig(msgHash, privKey, opts);
		const C = CURVE;
		return createHmacDrbg$2(C.hash.outputLen, C.nByteLength, C.hmac)(seed, k2sig);
	}
	Point.BASE._setWindowSize(8);
	/**
	* Verifies a signature against message hash and public key.
	* Rejects lowS signatures by default: to override,
	* specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
	*
	* ```
	* verify(r, s, h, P) where
	*   U1 = hs^-1 mod n
	*   U2 = rs^-1 mod n
	*   R = U1⋅G - U2⋅P
	*   mod(R.x, n) == r
	* ```
	*/
	function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
		const sg = signature;
		msgHash = ensureBytes$2("msgHash", msgHash);
		publicKey = ensureBytes$2("publicKey", publicKey);
		const { lowS, prehash, format } = opts;
		validateSigVerOpts$2(opts);
		if ("strict" in opts) throw new Error("options.strict was renamed to lowS");
		if (format !== void 0 && format !== "compact" && format !== "der") throw new Error("format must be compact or der");
		const isHex = typeof sg === "string" || isBytes$4(sg);
		const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
		if (!isHex && !isObj) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
		let _sig = void 0;
		let P;
		try {
			if (isObj) _sig = new Signature(sg.r, sg.s);
			if (isHex) {
				try {
					if (format !== "compact") _sig = Signature.fromDER(sg);
				} catch (derError) {
					if (!(derError instanceof DER$2.Err)) throw derError;
				}
				if (!_sig && format !== "der") _sig = Signature.fromCompact(sg);
			}
			P = Point.fromHex(publicKey);
		} catch (error) {
			return false;
		}
		if (!_sig) return false;
		if (lowS && _sig.hasHighS()) return false;
		if (prehash) msgHash = CURVE.hash(msgHash);
		const { r, s } = _sig;
		const h = bits2int_modN(msgHash);
		const is = invN(s);
		const u1 = modN(h * is);
		const u2 = modN(r * is);
		const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
		if (!R) return false;
		return modN(R.x) === r;
	}
	return {
		CURVE,
		getPublicKey,
		getSharedSecret,
		sign,
		verify,
		ProjectivePoint: Point,
		Signature,
		utils
	};
}
var b2n$2, h2b$2, DERErr$2, DER$2, _0n$8, _1n$11, _3n$4;
var init_weierstrass$2 = __esmMin((() => {
	init_curve$2();
	init_modular$2();
	init_utils$4();
	({bytesToNumberBE: b2n$2, hexToBytes: h2b$2} = utils_exports$2);
	DERErr$2 = class extends Error {
		constructor(m = "") {
			super(m);
		}
	};
	DER$2 = {
		Err: DERErr$2,
		_tlv: {
			encode: (tag, data) => {
				const { Err: E } = DER$2;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length & 1) throw new E("tlv.encode: unpadded data");
				const dataLen = data.length / 2;
				const len = numberToHexUnpadded$2(dataLen);
				if (len.length / 2 & 128) throw new E("tlv.encode: long form length too big");
				const lenLen = dataLen > 127 ? numberToHexUnpadded$2(len.length / 2 | 128) : "";
				return numberToHexUnpadded$2(tag) + lenLen + len + data;
			},
			decode(tag, data) {
				const { Err: E } = DER$2;
				let pos = 0;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length < 2 || data[pos++] !== tag) throw new E("tlv.decode: wrong tlv");
				const first = data[pos++];
				const isLong = !!(first & 128);
				let length = 0;
				if (!isLong) length = first;
				else {
					const lenLen = first & 127;
					if (!lenLen) throw new E("tlv.decode(long): indefinite length not supported");
					if (lenLen > 4) throw new E("tlv.decode(long): byte length is too big");
					const lengthBytes = data.subarray(pos, pos + lenLen);
					if (lengthBytes.length !== lenLen) throw new E("tlv.decode: length bytes not complete");
					if (lengthBytes[0] === 0) throw new E("tlv.decode(long): zero leftmost byte");
					for (const b of lengthBytes) length = length << 8 | b;
					pos += lenLen;
					if (length < 128) throw new E("tlv.decode(long): not minimal encoding");
				}
				const v = data.subarray(pos, pos + length);
				if (v.length !== length) throw new E("tlv.decode: wrong value length");
				return {
					v,
					l: data.subarray(pos + length)
				};
			}
		},
		_int: {
			encode(num) {
				const { Err: E } = DER$2;
				if (num < _0n$8) throw new E("integer: negative integers are not allowed");
				let hex = numberToHexUnpadded$2(num);
				if (Number.parseInt(hex[0], 16) & 8) hex = "00" + hex;
				if (hex.length & 1) throw new E("unexpected DER parsing assertion: unpadded hex");
				return hex;
			},
			decode(data) {
				const { Err: E } = DER$2;
				if (data[0] & 128) throw new E("invalid signature integer: negative");
				if (data[0] === 0 && !(data[1] & 128)) throw new E("invalid signature integer: unnecessary leading zero");
				return b2n$2(data);
			}
		},
		toSig(hex) {
			const { Err: E, _int: int, _tlv: tlv } = DER$2;
			const data = typeof hex === "string" ? h2b$2(hex) : hex;
			abytes$4(data);
			const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
			if (seqLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
			const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
			if (sLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			return {
				r: int.decode(rBytes),
				s: int.decode(sBytes)
			};
		},
		hexFromSig(sig) {
			const { _tlv: tlv, _int: int } = DER$2;
			const seq = tlv.encode(2, int.encode(sig.r)) + tlv.encode(2, int.encode(sig.s));
			return tlv.encode(48, seq);
		}
	};
	_0n$8 = BigInt(0);
	_1n$11 = BigInt(1);
	_3n$4 = BigInt(3);
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/curves/esm/_shortw_utils.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/** connects noble-curves to noble-hashes */
function getHash$2(hash) {
	return {
		hash,
		hmac: (key, ...msgs) => hmac$2(hash, key, concatBytes$5(...msgs)),
		randomBytes: randomBytes$3
	};
}
function createCurve$2(curveDef, defHash) {
	const create = (hash) => weierstrass$2({
		...curveDef,
		...getHash$2(hash)
	});
	return {
		...create(defHash),
		create
	};
}
var init__shortw_utils$2 = __esmMin((() => {
	init_hmac$2();
	init_utils$5();
	init_weierstrass$2();
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_exports$2 = /* @__PURE__ */ __exportAll({ secp256k1: () => secp256k1$2 });
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/**
* √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
* (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
*/
function sqrtMod$2(y) {
	const P = secp256k1P$2;
	const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
	const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
	const b2 = y * y * y % P;
	const b3 = b2 * b2 * y % P;
	const b11 = pow2$2(pow2$2(pow2$2(b3, _3n, P) * b3 % P, _3n, P) * b3 % P, _2n$6, P) * b2 % P;
	const b22 = pow2$2(b11, _11n, P) * b11 % P;
	const b44 = pow2$2(b22, _22n, P) * b22 % P;
	const b88 = pow2$2(b44, _44n, P) * b44 % P;
	const root = pow2$2(pow2$2(pow2$2(pow2$2(pow2$2(pow2$2(b88, _88n, P) * b88 % P, _44n, P) * b44 % P, _3n, P) * b3 % P, _23n, P) * b22 % P, _6n, P) * b2 % P, _2n$6, P);
	if (!Fpk1$2.eql(Fpk1$2.sqr(root), y)) throw new Error("Cannot find square root");
	return root;
}
var secp256k1P$2, secp256k1N$2, _1n$10, _2n$6, divNearest$2, Fpk1$2, secp256k1$2;
var init_secp256k1$2 = __esmMin((() => {
	init_sha256$2();
	init__shortw_utils$2();
	init_modular$2();
	secp256k1P$2 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
	secp256k1N$2 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
	_1n$10 = BigInt(1);
	_2n$6 = BigInt(2);
	divNearest$2 = (a, b) => (a + b / _2n$6) / b;
	Fpk1$2 = Field$2(secp256k1P$2, void 0, void 0, { sqrt: sqrtMod$2 });
	secp256k1$2 = createCurve$2({
		a: BigInt(0),
		b: BigInt(7),
		Fp: Fpk1$2,
		n: secp256k1N$2,
		Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
		Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
		h: BigInt(1),
		lowS: true,
		endo: {
			beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
			splitScalar: (k) => {
				const n = secp256k1N$2;
				const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
				const b1 = -_1n$10 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
				const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
				const b2 = a1;
				const POW_2_128 = BigInt("0x100000000000000000000000000000000");
				const c1 = divNearest$2(b2 * k, n);
				const c2 = divNearest$2(-b1 * k, n);
				let k1 = mod$2(k - c1 * a1 - c2 * a2, n);
				let k2 = mod$2(-c1 * b1 - c2 * b2, n);
				const k1neg = k1 > POW_2_128;
				const k2neg = k2 > POW_2_128;
				if (k1neg) k1 = n - k1;
				if (k2neg) k2 = n - k2;
				if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalar: Endomorphism failed, k=" + k);
				return {
					k1neg,
					k1,
					k2neg,
					k2
				};
			}
		}
	}, sha256$2);
	secp256k1$2.ProjectivePoint;
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/_assert.js
/**
* Internal assertion helpers.
* @module
*/
/** Asserts something is positive integer. */
function anumber$1(n) {
	if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, got " + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */
function isBytes$3(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
/** Asserts something is Uint8Array. */
function abytes$3(b, ...lengths) {
	if (!isBytes$3(b)) throw new Error("Uint8Array expected");
	if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
/** Asserts something is hash */
function ahash$1(h) {
	if (typeof h !== "function" || typeof h.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
	anumber$1(h.outputLen);
	anumber$1(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists$1(instance, checkFinished = true) {
	if (instance.destroyed) throw new Error("Hash instance has been destroyed");
	if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
/** Asserts output is properly-sized byte array */
function aoutput$1(out, instance) {
	abytes$3(out);
	const min = instance.outputLen;
	if (out.length < min) throw new Error("digestInto() expects output buffer of length at least " + min);
}
var init__assert$1 = __esmMin((() => {}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/cryptoNode.js
/**
* Internal webcrypto alias.
* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
* Falls back to Node.js built-in crypto for Node.js <=v14.
* See utils.ts for details.
* @module
*/
var crypto$1;
var init_cryptoNode$1 = __esmMin((() => {
	crypto$1 = nc$1 && typeof nc$1 === "object" && "webcrypto" in nc$1 ? nc$1.webcrypto : nc$1 && typeof nc$1 === "object" && "randomBytes" in nc$1 ? nc$1 : void 0;
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/utils.js
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function u32$1(arr) {
	return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView$1(arr) {
	return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr$1(word, shift) {
	return word << 32 - shift | word >>> shift;
}
function byteSwap$1(word) {
	return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
/** In place byte swap for Uint32Array */
function byteSwap32$1(arr) {
	for (let i = 0; i < arr.length; i++) arr[i] = byteSwap$1(arr[i]);
}
/**
* Convert JS string to byte array.
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes$3(str) {
	if (typeof str !== "string") throw new Error("utf8ToBytes expected string, got " + typeof str);
	return new Uint8Array(new TextEncoder().encode(str));
}
/**
* Normalizes (non-hex) string or Uint8Array to Uint8Array.
* Warning: when Uint8Array is passed, it would NOT get copied.
* Keep in mind for future mutable operations.
*/
function toBytes$1(data) {
	if (typeof data === "string") data = utf8ToBytes$3(data);
	abytes$3(data);
	return data;
}
/**
* Copies several Uint8Arrays into one.
*/
function concatBytes$3(...arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		const a = arrays[i];
		abytes$3(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i = 0, pad = 0; i < arrays.length; i++) {
		const a = arrays[i];
		res.set(a, pad);
		pad += a.length;
	}
	return res;
}
/** Wraps hash function, creating an interface on top of it */
function wrapConstructor$1(hashCons) {
	const hashC = (msg) => hashCons().update(toBytes$1(msg)).digest();
	const tmp = hashCons();
	hashC.outputLen = tmp.outputLen;
	hashC.blockLen = tmp.blockLen;
	hashC.create = () => hashCons();
	return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes$2(bytesLength = 32) {
	if (crypto$1 && typeof crypto$1.getRandomValues === "function") return crypto$1.getRandomValues(new Uint8Array(bytesLength));
	if (crypto$1 && typeof crypto$1.randomBytes === "function") return crypto$1.randomBytes(bytesLength);
	throw new Error("crypto.getRandomValues must be defined");
}
var isLE$1, Hash$1;
var init_utils$3 = __esmMin((() => {
	init_cryptoNode$1();
	init__assert$1();
	isLE$1 = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
	Hash$1 = class {
		clone() {
			return this._cloneInto();
		}
	};
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/_md.js
/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
function setBigUint64$1(view, byteOffset, value, isLE) {
	if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
	const _32n = BigInt(32);
	const _u32_max = BigInt(4294967295);
	const wh = Number(value >> _32n & _u32_max);
	const wl = Number(value & _u32_max);
	const h = isLE ? 4 : 0;
	const l = isLE ? 0 : 4;
	view.setUint32(byteOffset + h, wh, isLE);
	view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */
function Chi$1(a, b, c) {
	return a & b ^ ~a & c;
}
/** Majority function, true if any two inputs is true. */
function Maj$1(a, b, c) {
	return a & b ^ a & c ^ b & c;
}
var HashMD$1;
var init__md$1 = __esmMin((() => {
	init__assert$1();
	init_utils$3();
	HashMD$1 = class extends Hash$1 {
		constructor(blockLen, outputLen, padOffset, isLE) {
			super();
			this.blockLen = blockLen;
			this.outputLen = outputLen;
			this.padOffset = padOffset;
			this.isLE = isLE;
			this.finished = false;
			this.length = 0;
			this.pos = 0;
			this.destroyed = false;
			this.buffer = new Uint8Array(blockLen);
			this.view = createView$1(this.buffer);
		}
		update(data) {
			aexists$1(this);
			const { view, buffer, blockLen } = this;
			data = toBytes$1(data);
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				if (take === blockLen) {
					const dataView = createView$1(data);
					for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
					continue;
				}
				buffer.set(data.subarray(pos, pos + take), this.pos);
				this.pos += take;
				pos += take;
				if (this.pos === blockLen) {
					this.process(view, 0);
					this.pos = 0;
				}
			}
			this.length += data.length;
			this.roundClean();
			return this;
		}
		digestInto(out) {
			aexists$1(this);
			aoutput$1(out, this);
			this.finished = true;
			const { buffer, view, blockLen, isLE } = this;
			let { pos } = this;
			buffer[pos++] = 128;
			this.buffer.subarray(pos).fill(0);
			if (this.padOffset > blockLen - pos) {
				this.process(view, 0);
				pos = 0;
			}
			for (let i = pos; i < blockLen; i++) buffer[i] = 0;
			setBigUint64$1(view, blockLen - 8, BigInt(this.length * 8), isLE);
			this.process(view, 0);
			const oview = createView$1(out);
			const len = this.outputLen;
			if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
			const outLen = len / 4;
			const state = this.get();
			if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
			for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
		}
		digest() {
			const { buffer, outputLen } = this;
			this.digestInto(buffer);
			const res = buffer.slice(0, outputLen);
			this.destroy();
			return res;
		}
		_cloneInto(to) {
			to || (to = new this.constructor());
			to.set(...this.get());
			const { blockLen, buffer, length, finished, destroyed, pos } = this;
			to.length = length;
			to.pos = pos;
			to.finished = finished;
			to.destroyed = destroyed;
			if (length % blockLen) to.buffer.set(buffer);
			return to;
		}
	};
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K$1, SHA256_IV$1, SHA256_W$1, SHA256$1, sha256$1;
var init_sha256$1 = __esmMin((() => {
	init__md$1();
	init_utils$3();
	SHA256_K$1 = /* @__PURE__ */ new Uint32Array([
		1116352408,
		1899447441,
		3049323471,
		3921009573,
		961987163,
		1508970993,
		2453635748,
		2870763221,
		3624381080,
		310598401,
		607225278,
		1426881987,
		1925078388,
		2162078206,
		2614888103,
		3248222580,
		3835390401,
		4022224774,
		264347078,
		604807628,
		770255983,
		1249150122,
		1555081692,
		1996064986,
		2554220882,
		2821834349,
		2952996808,
		3210313671,
		3336571891,
		3584528711,
		113926993,
		338241895,
		666307205,
		773529912,
		1294757372,
		1396182291,
		1695183700,
		1986661051,
		2177026350,
		2456956037,
		2730485921,
		2820302411,
		3259730800,
		3345764771,
		3516065817,
		3600352804,
		4094571909,
		275423344,
		430227734,
		506948616,
		659060556,
		883997877,
		958139571,
		1322822218,
		1537002063,
		1747873779,
		1955562222,
		2024104815,
		2227730452,
		2361852424,
		2428436474,
		2756734187,
		3204031479,
		3329325298
	]);
	SHA256_IV$1 = /* @__PURE__ */ new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	SHA256_W$1 = /* @__PURE__ */ new Uint32Array(64);
	SHA256$1 = class extends HashMD$1 {
		constructor() {
			super(64, 32, 8, false);
			this.A = SHA256_IV$1[0] | 0;
			this.B = SHA256_IV$1[1] | 0;
			this.C = SHA256_IV$1[2] | 0;
			this.D = SHA256_IV$1[3] | 0;
			this.E = SHA256_IV$1[4] | 0;
			this.F = SHA256_IV$1[5] | 0;
			this.G = SHA256_IV$1[6] | 0;
			this.H = SHA256_IV$1[7] | 0;
		}
		get() {
			const { A, B, C, D, E, F, G, H } = this;
			return [
				A,
				B,
				C,
				D,
				E,
				F,
				G,
				H
			];
		}
		set(A, B, C, D, E, F, G, H) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
			this.F = F | 0;
			this.G = G | 0;
			this.H = H | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA256_W$1[i] = view.getUint32(offset, false);
			for (let i = 16; i < 64; i++) {
				const W15 = SHA256_W$1[i - 15];
				const W2 = SHA256_W$1[i - 2];
				const s0 = rotr$1(W15, 7) ^ rotr$1(W15, 18) ^ W15 >>> 3;
				const s1 = rotr$1(W2, 17) ^ rotr$1(W2, 19) ^ W2 >>> 10;
				SHA256_W$1[i] = s1 + SHA256_W$1[i - 7] + s0 + SHA256_W$1[i - 16] | 0;
			}
			let { A, B, C, D, E, F, G, H } = this;
			for (let i = 0; i < 64; i++) {
				const sigma1 = rotr$1(E, 6) ^ rotr$1(E, 11) ^ rotr$1(E, 25);
				const T1 = H + sigma1 + Chi$1(E, F, G) + SHA256_K$1[i] + SHA256_W$1[i] | 0;
				const T2 = (rotr$1(A, 2) ^ rotr$1(A, 13) ^ rotr$1(A, 22)) + Maj$1(A, B, C) | 0;
				H = G;
				G = F;
				F = E;
				E = D + T1 | 0;
				D = C;
				C = B;
				B = A;
				A = T1 + T2 | 0;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			F = F + this.F | 0;
			G = G + this.G | 0;
			H = H + this.H | 0;
			this.set(A, B, C, D, E, F, G, H);
		}
		roundClean() {
			SHA256_W$1.fill(0);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0);
			this.buffer.fill(0);
		}
	};
	sha256$1 = /* @__PURE__ */ wrapConstructor$1(() => new SHA256$1());
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/hmac.js
var HMAC$1, hmac$1;
var init_hmac$1 = __esmMin((() => {
	init__assert$1();
	init_utils$3();
	HMAC$1 = class extends Hash$1 {
		constructor(hash, _key) {
			super();
			this.finished = false;
			this.destroyed = false;
			ahash$1(hash);
			const key = toBytes$1(_key);
			this.iHash = hash.create();
			if (typeof this.iHash.update !== "function") throw new Error("Expected instance of class which extends utils.Hash");
			this.blockLen = this.iHash.blockLen;
			this.outputLen = this.iHash.outputLen;
			const blockLen = this.blockLen;
			const pad = new Uint8Array(blockLen);
			pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
			for (let i = 0; i < pad.length; i++) pad[i] ^= 54;
			this.iHash.update(pad);
			this.oHash = hash.create();
			for (let i = 0; i < pad.length; i++) pad[i] ^= 106;
			this.oHash.update(pad);
			pad.fill(0);
		}
		update(buf) {
			aexists$1(this);
			this.iHash.update(buf);
			return this;
		}
		digestInto(out) {
			aexists$1(this);
			abytes$3(out, this.outputLen);
			this.finished = true;
			this.iHash.digestInto(out);
			this.oHash.update(out);
			this.oHash.digestInto(out);
			this.destroy();
		}
		digest() {
			const out = new Uint8Array(this.oHash.outputLen);
			this.digestInto(out);
			return out;
		}
		_cloneInto(to) {
			to || (to = Object.create(Object.getPrototypeOf(this), {}));
			const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
			to = to;
			to.finished = finished;
			to.destroyed = destroyed;
			to.blockLen = blockLen;
			to.outputLen = outputLen;
			to.oHash = oHash._cloneInto(to.oHash);
			to.iHash = iHash._cloneInto(to.iHash);
			return to;
		}
		destroy() {
			this.destroyed = true;
			this.oHash.destroy();
			this.iHash.destroy();
		}
	};
	hmac$1 = (hash, key, message) => new HMAC$1(hash, key).update(message).digest();
	hmac$1.create = (hash, key) => new HMAC$1(hash, key);
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports$1 = /* @__PURE__ */ __exportAll({
	aInRange: () => aInRange$1,
	abool: () => abool$1,
	abytes: () => abytes$2,
	bitGet: () => bitGet$1,
	bitLen: () => bitLen$1,
	bitMask: () => bitMask$1,
	bitSet: () => bitSet$1,
	bytesToHex: () => bytesToHex$1,
	bytesToNumberBE: () => bytesToNumberBE$1,
	bytesToNumberLE: () => bytesToNumberLE$1,
	concatBytes: () => concatBytes$2,
	createHmacDrbg: () => createHmacDrbg$1,
	ensureBytes: () => ensureBytes$1,
	equalBytes: () => equalBytes$1,
	hexToBytes: () => hexToBytes$1,
	hexToNumber: () => hexToNumber$1,
	inRange: () => inRange$1,
	isBytes: () => isBytes$2,
	memoized: () => memoized$1,
	notImplemented: () => notImplemented$1,
	numberToBytesBE: () => numberToBytesBE$1,
	numberToBytesLE: () => numberToBytesLE$1,
	numberToHexUnpadded: () => numberToHexUnpadded$1,
	numberToVarBytesBE: () => numberToVarBytesBE$1,
	utf8ToBytes: () => utf8ToBytes$2,
	validateObject: () => validateObject$1
});
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function isBytes$2(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes$2(item) {
	if (!isBytes$2(item)) throw new Error("Uint8Array expected");
}
function abool$1(title, value) {
	if (typeof value !== "boolean") throw new Error(title + " boolean expected, got " + value);
}
/**
* @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
*/
function bytesToHex$1(bytes) {
	abytes$2(bytes);
	let hex = "";
	for (let i = 0; i < bytes.length; i++) hex += hexes$1[bytes[i]];
	return hex;
}
function numberToHexUnpadded$1(num) {
	const hex = num.toString(16);
	return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber$1(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	return hex === "" ? _0n$7 : BigInt("0x" + hex);
}
function asciiToBase16$1(ch) {
	if (ch >= asciis$1._0 && ch <= asciis$1._9) return ch - asciis$1._0;
	if (ch >= asciis$1.A && ch <= asciis$1.F) return ch - (asciis$1.A - 10);
	if (ch >= asciis$1.a && ch <= asciis$1.f) return ch - (asciis$1.a - 10);
}
/**
* @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
*/
function hexToBytes$1(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	const hl = hex.length;
	const al = hl / 2;
	if (hl % 2) throw new Error("hex string expected, got unpadded hex of length " + hl);
	const array = new Uint8Array(al);
	for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
		const n1 = asciiToBase16$1(hex.charCodeAt(hi));
		const n2 = asciiToBase16$1(hex.charCodeAt(hi + 1));
		if (n1 === void 0 || n2 === void 0) {
			const char = hex[hi] + hex[hi + 1];
			throw new Error("hex string expected, got non-hex character \"" + char + "\" at index " + hi);
		}
		array[ai] = n1 * 16 + n2;
	}
	return array;
}
function bytesToNumberBE$1(bytes) {
	return hexToNumber$1(bytesToHex$1(bytes));
}
function bytesToNumberLE$1(bytes) {
	abytes$2(bytes);
	return hexToNumber$1(bytesToHex$1(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE$1(n, len) {
	return hexToBytes$1(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE$1(n, len) {
	return numberToBytesBE$1(n, len).reverse();
}
function numberToVarBytesBE$1(n) {
	return hexToBytes$1(numberToHexUnpadded$1(n));
}
/**
* Takes hex string or Uint8Array, converts to Uint8Array.
* Validates output length.
* Will throw error for other types.
* @param title descriptive title for an error e.g. 'private key'
* @param hex hex string or Uint8Array
* @param expectedLength optional, will compare to result array's length
* @returns
*/
function ensureBytes$1(title, hex, expectedLength) {
	let res;
	if (typeof hex === "string") try {
		res = hexToBytes$1(hex);
	} catch (e) {
		throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
	}
	else if (isBytes$2(hex)) res = Uint8Array.from(hex);
	else throw new Error(title + " must be hex string or Uint8Array");
	const len = res.length;
	if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(title + " of length " + expectedLength + " expected, got " + len);
	return res;
}
/**
* Copies several Uint8Arrays into one.
*/
function concatBytes$2(...arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		const a = arrays[i];
		abytes$2(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i = 0, pad = 0; i < arrays.length; i++) {
		const a = arrays[i];
		res.set(a, pad);
		pad += a.length;
	}
	return res;
}
function equalBytes$1(a, b) {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
	return diff === 0;
}
/**
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes$2(str) {
	if (typeof str !== "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(str));
}
function inRange$1(n, min, max) {
	return isPosBig$1(n) && isPosBig$1(min) && isPosBig$1(max) && min <= n && n < max;
}
/**
* Asserts min <= n < max. NOTE: It's < max and not <= max.
* @example
* aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
*/
function aInRange$1(title, n, min, max) {
	if (!inRange$1(n, min, max)) throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
/**
* Calculates amount of bits in a bigint.
* Same as `n.toString(2).length`
*/
function bitLen$1(n) {
	let len = 0;
	for (; n > _0n$7; n >>= _1n$9, len += 1);
	return len;
}
/**
* Gets single bit at position.
* NOTE: first bit position is 0 (same as arrays)
* Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
*/
function bitGet$1(n, pos) {
	return n >> BigInt(pos) & _1n$9;
}
/**
* Sets single bit at position.
*/
function bitSet$1(n, pos, value) {
	return n | (value ? _1n$9 : _0n$7) << BigInt(pos);
}
/**
* Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
* @returns function that will call DRBG until 2nd arg returns something meaningful
* @example
*   const drbg = createHmacDRBG<Key>(32, 32, hmac);
*   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
*/
function createHmacDrbg$1(hashLen, qByteLen, hmacFn) {
	if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
	if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
	if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
	let v = u8n$1(hashLen);
	let k = u8n$1(hashLen);
	let i = 0;
	const reset = () => {
		v.fill(1);
		k.fill(0);
		i = 0;
	};
	const h = (...b) => hmacFn(k, v, ...b);
	const reseed = (seed = u8n$1()) => {
		k = h(u8fr$1([0]), seed);
		v = h();
		if (seed.length === 0) return;
		k = h(u8fr$1([1]), seed);
		v = h();
	};
	const gen = () => {
		if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
		let len = 0;
		const out = [];
		while (len < qByteLen) {
			v = h();
			const sl = v.slice();
			out.push(sl);
			len += v.length;
		}
		return concatBytes$2(...out);
	};
	const genUntil = (seed, pred) => {
		reset();
		reseed(seed);
		let res = void 0;
		while (!(res = pred(gen()))) reseed();
		reset();
		return res;
	};
	return genUntil;
}
function validateObject$1(object, validators, optValidators = {}) {
	const checkField = (fieldName, type, isOptional) => {
		const checkVal = validatorFns$1[type];
		if (typeof checkVal !== "function") throw new Error("invalid validator function");
		const val = object[fieldName];
		if (isOptional && val === void 0) return;
		if (!checkVal(val, object)) throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
	};
	for (const [fieldName, type] of Object.entries(validators)) checkField(fieldName, type, false);
	for (const [fieldName, type] of Object.entries(optValidators)) checkField(fieldName, type, true);
	return object;
}
/**
* Memoizes (caches) computation result.
* Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
*/
function memoized$1(fn) {
	const map = /* @__PURE__ */ new WeakMap();
	return (arg, ...args) => {
		const val = map.get(arg);
		if (val !== void 0) return val;
		const computed = fn(arg, ...args);
		map.set(arg, computed);
		return computed;
	};
}
var _0n$7, _1n$9, _2n$5, hexes$1, asciis$1, isPosBig$1, bitMask$1, u8n$1, u8fr$1, validatorFns$1, notImplemented$1;
var init_utils$2 = __esmMin((() => {
	_0n$7 = /* @__PURE__ */ BigInt(0);
	_1n$9 = /* @__PURE__ */ BigInt(1);
	_2n$5 = /* @__PURE__ */ BigInt(2);
	hexes$1 = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
	asciis$1 = {
		_0: 48,
		_9: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
	isPosBig$1 = (n) => typeof n === "bigint" && _0n$7 <= n;
	bitMask$1 = (n) => (_2n$5 << BigInt(n - 1)) - _1n$9;
	u8n$1 = (data) => new Uint8Array(data);
	u8fr$1 = (arr) => Uint8Array.from(arr);
	validatorFns$1 = {
		bigint: (val) => typeof val === "bigint",
		function: (val) => typeof val === "function",
		boolean: (val) => typeof val === "boolean",
		string: (val) => typeof val === "string",
		stringOrUint8Array: (val) => typeof val === "string" || isBytes$2(val),
		isSafeInteger: (val) => Number.isSafeInteger(val),
		array: (val) => Array.isArray(val),
		field: (val, object) => object.Fp.isValid(val),
		hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
	};
	notImplemented$1 = () => {
		throw new Error("not implemented");
	};
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/curves/esm/abstract/modular.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function mod$1(a, b) {
	const result = a % b;
	return result >= _0n$6 ? result : b + result;
}
/**
* Efficiently raise num to power and do modular division.
* Unsafe in some contexts: uses ladder, so can expose bigint bits.
* @todo use field version && remove
* @example
* pow(2n, 6n, 11n) // 64n % 11n == 9n
*/
function pow$1(num, power, modulo) {
	if (power < _0n$6) throw new Error("invalid exponent, negatives unsupported");
	if (modulo <= _0n$6) throw new Error("invalid modulus");
	if (modulo === _1n$8) return _0n$6;
	let res = _1n$8;
	while (power > _0n$6) {
		if (power & _1n$8) res = res * num % modulo;
		num = num * num % modulo;
		power >>= _1n$8;
	}
	return res;
}
/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
function pow2$1(x, power, modulo) {
	let res = x;
	while (power-- > _0n$6) {
		res *= res;
		res %= modulo;
	}
	return res;
}
/**
* Inverses number over modulo.
* Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
*/
function invert$1(number, modulo) {
	if (number === _0n$6) throw new Error("invert: expected non-zero number");
	if (modulo <= _0n$6) throw new Error("invert: expected positive modulus, got " + modulo);
	let a = mod$1(number, modulo);
	let b = modulo;
	let x = _0n$6, y = _1n$8, u = _1n$8, v = _0n$6;
	while (a !== _0n$6) {
		const q = b / a;
		const r = b % a;
		const m = x - u * q;
		const n = y - v * q;
		b = a, a = r, x = u, y = v, u = m, v = n;
	}
	if (b !== _1n$8) throw new Error("invert: does not exist");
	return mod$1(x, modulo);
}
/**
* Tonelli-Shanks square root search algorithm.
* 1. https://eprint.iacr.org/2012/685.pdf (page 12)
* 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
* Will start an infinite loop if field order P is not prime.
* @param P field order
* @returns function that takes field Fp (created from P) and number n
*/
function tonelliShanks$1(P) {
	const legendreC = (P - _1n$8) / _2n$4;
	let Q, S, Z;
	for (Q = P - _1n$8, S = 0; Q % _2n$4 === _0n$6; Q /= _2n$4, S++);
	for (Z = _2n$4; Z < P && pow$1(Z, legendreC, P) !== P - _1n$8; Z++) if (Z > 1e3) throw new Error("Cannot find square root: likely non-prime P");
	if (S === 1) {
		const p1div4 = (P + _1n$8) / _4n$1;
		return function tonelliFast(Fp, n) {
			const root = Fp.pow(n, p1div4);
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	const Q1div2 = (Q + _1n$8) / _2n$4;
	return function tonelliSlow(Fp, n) {
		if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error("Cannot find square root");
		let r = S;
		let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
		let x = Fp.pow(n, Q1div2);
		let b = Fp.pow(n, Q);
		while (!Fp.eql(b, Fp.ONE)) {
			if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO;
			let m = 1;
			for (let t2 = Fp.sqr(b); m < r; m++) {
				if (Fp.eql(t2, Fp.ONE)) break;
				t2 = Fp.sqr(t2);
			}
			const ge = Fp.pow(g, _1n$8 << BigInt(r - m - 1));
			g = Fp.sqr(ge);
			x = Fp.mul(x, ge);
			b = Fp.mul(b, g);
			r = m;
		}
		return x;
	};
}
/**
* Square root for a finite field. It will try to check if optimizations are applicable and fall back to 4:
*
* 1. P ≡ 3 (mod 4)
* 2. P ≡ 5 (mod 8)
* 3. P ≡ 9 (mod 16)
* 4. Tonelli-Shanks algorithm
*
* Different algorithms can give different roots, it is up to user to decide which one they want.
* For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
*/
function FpSqrt$1(P) {
	if (P % _4n$1 === _3n$3) {
		const p1div4 = (P + _1n$8) / _4n$1;
		return function sqrt3mod4(Fp, n) {
			const root = Fp.pow(n, p1div4);
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	if (P % _8n$1 === _5n$1) {
		const c1 = (P - _5n$1) / _8n$1;
		return function sqrt5mod8(Fp, n) {
			const n2 = Fp.mul(n, _2n$4);
			const v = Fp.pow(n2, c1);
			const nv = Fp.mul(n, v);
			const i = Fp.mul(Fp.mul(nv, _2n$4), v);
			const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	if (P % _16n$1 === _9n$1) {}
	return tonelliShanks$1(P);
}
function validateField$1(field) {
	return validateObject$1(field, FIELD_FIELDS$1.reduce((map, val) => {
		map[val] = "function";
		return map;
	}, {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "isSafeInteger",
		BITS: "isSafeInteger"
	}));
}
/**
* Same as `pow` but for Fp: non-constant-time.
* Unsafe in some contexts: uses ladder, so can expose bigint bits.
*/
function FpPow$1(f, num, power) {
	if (power < _0n$6) throw new Error("invalid exponent, negatives unsupported");
	if (power === _0n$6) return f.ONE;
	if (power === _1n$8) return num;
	let p = f.ONE;
	let d = num;
	while (power > _0n$6) {
		if (power & _1n$8) p = f.mul(p, d);
		d = f.sqr(d);
		power >>= _1n$8;
	}
	return p;
}
/**
* Efficiently invert an array of Field elements.
* `inv(0)` will return `undefined` here: make sure to throw an error.
*/
function FpInvertBatch$1(f, nums) {
	const tmp = new Array(nums.length);
	const lastMultiplied = nums.reduce((acc, num, i) => {
		if (f.is0(num)) return acc;
		tmp[i] = acc;
		return f.mul(acc, num);
	}, f.ONE);
	const inverted = f.inv(lastMultiplied);
	nums.reduceRight((acc, num, i) => {
		if (f.is0(num)) return acc;
		tmp[i] = f.mul(acc, tmp[i]);
		return f.mul(acc, num);
	}, inverted);
	return tmp;
}
function nLength$1(n, nBitLength) {
	const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
	return {
		nBitLength: _nBitLength,
		nByteLength: Math.ceil(_nBitLength / 8)
	};
}
/**
* Initializes a finite field over prime.
* Major performance optimizations:
* * a) denormalized operations like mulN instead of mul
* * b) same object shape: never add or remove keys
* * c) Object.freeze
* Fragile: always run a benchmark on a change.
* Security note: operations don't check 'isValid' for all elements for performance reasons,
* it is caller responsibility to check this.
* This is low-level code, please make sure you know what you're doing.
* @param ORDER prime positive bigint
* @param bitLen how many bits the field consumes
* @param isLE (def: false) if encoding / decoding should be in little-endian
* @param redef optional faster redefinitions of sqrt and other methods
*/
function Field$1(ORDER, bitLen, isLE = false, redef = {}) {
	if (ORDER <= _0n$6) throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
	const { nBitLength: BITS, nByteLength: BYTES } = nLength$1(ORDER, bitLen);
	if (BYTES > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let sqrtP;
	const f = Object.freeze({
		ORDER,
		isLE,
		BITS,
		BYTES,
		MASK: bitMask$1(BITS),
		ZERO: _0n$6,
		ONE: _1n$8,
		create: (num) => mod$1(num, ORDER),
		isValid: (num) => {
			if (typeof num !== "bigint") throw new Error("invalid field element: expected bigint, got " + typeof num);
			return _0n$6 <= num && num < ORDER;
		},
		is0: (num) => num === _0n$6,
		isOdd: (num) => (num & _1n$8) === _1n$8,
		neg: (num) => mod$1(-num, ORDER),
		eql: (lhs, rhs) => lhs === rhs,
		sqr: (num) => mod$1(num * num, ORDER),
		add: (lhs, rhs) => mod$1(lhs + rhs, ORDER),
		sub: (lhs, rhs) => mod$1(lhs - rhs, ORDER),
		mul: (lhs, rhs) => mod$1(lhs * rhs, ORDER),
		pow: (num, power) => FpPow$1(f, num, power),
		div: (lhs, rhs) => mod$1(lhs * invert$1(rhs, ORDER), ORDER),
		sqrN: (num) => num * num,
		addN: (lhs, rhs) => lhs + rhs,
		subN: (lhs, rhs) => lhs - rhs,
		mulN: (lhs, rhs) => lhs * rhs,
		inv: (num) => invert$1(num, ORDER),
		sqrt: redef.sqrt || ((n) => {
			if (!sqrtP) sqrtP = FpSqrt$1(ORDER);
			return sqrtP(f, n);
		}),
		invertBatch: (lst) => FpInvertBatch$1(f, lst),
		cmov: (a, b, c) => c ? b : a,
		toBytes: (num) => isLE ? numberToBytesLE$1(num, BYTES) : numberToBytesBE$1(num, BYTES),
		fromBytes: (bytes) => {
			if (bytes.length !== BYTES) throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
			return isLE ? bytesToNumberLE$1(bytes) : bytesToNumberBE$1(bytes);
		}
	});
	return Object.freeze(f);
}
/**
* Returns total number of bytes consumed by the field element.
* For example, 32 bytes for usual 256-bit weierstrass curve.
* @param fieldOrder number of field elements, usually CURVE.n
* @returns byte length of field
*/
function getFieldBytesLength$1(fieldOrder) {
	if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
	const bitLength = fieldOrder.toString(2).length;
	return Math.ceil(bitLength / 8);
}
/**
* Returns minimal amount of bytes that can be safely reduced
* by field order.
* Should be 2^-128 for 128-bit curve such as P256.
* @param fieldOrder number of field elements, usually CURVE.n
* @returns byte length of target hash
*/
function getMinHashLength$1(fieldOrder) {
	const length = getFieldBytesLength$1(fieldOrder);
	return length + Math.ceil(length / 2);
}
/**
* "Constant-time" private key generation utility.
* Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
* and convert them into private scalar, with the modulo bias being negligible.
* Needs at least 48 bytes of input for 32-byte private key.
* https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
* FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
* RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
* @param hash hash output from SHA3 or a similar function
* @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
* @param isLE interpret hash bytes as LE num
* @returns valid private scalar
*/
function mapHashToField$1(key, fieldOrder, isLE = false) {
	const len = key.length;
	const fieldLen = getFieldBytesLength$1(fieldOrder);
	const minLen = getMinHashLength$1(fieldOrder);
	if (len < 16 || len < minLen || len > 1024) throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
	const reduced = mod$1(isLE ? bytesToNumberLE$1(key) : bytesToNumberBE$1(key), fieldOrder - _1n$8) + _1n$8;
	return isLE ? numberToBytesLE$1(reduced, fieldLen) : numberToBytesBE$1(reduced, fieldLen);
}
var _0n$6, _1n$8, _2n$4, _3n$3, _4n$1, _5n$1, _8n$1, _9n$1, _16n$1, FIELD_FIELDS$1;
var init_modular$1 = __esmMin((() => {
	init_utils$2();
	_0n$6 = BigInt(0);
	_1n$8 = BigInt(1);
	_2n$4 = /* @__PURE__ */ BigInt(2);
	_3n$3 = /* @__PURE__ */ BigInt(3);
	_4n$1 = /* @__PURE__ */ BigInt(4);
	_5n$1 = /* @__PURE__ */ BigInt(5);
	_8n$1 = /* @__PURE__ */ BigInt(8);
	_9n$1 = /* @__PURE__ */ BigInt(9);
	_16n$1 = /* @__PURE__ */ BigInt(16);
	FIELD_FIELDS$1 = [
		"create",
		"isValid",
		"is0",
		"neg",
		"inv",
		"sqrt",
		"sqr",
		"eql",
		"add",
		"sub",
		"mul",
		"pow",
		"div",
		"addN",
		"subN",
		"mulN",
		"sqrN"
	];
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/curves/esm/abstract/curve.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function constTimeNegate$1(condition, item) {
	const neg = item.negate();
	return condition ? neg : item;
}
function validateW$1(W, bits) {
	if (!Number.isSafeInteger(W) || W <= 0 || W > bits) throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts$1(W, bits) {
	validateW$1(W, bits);
	return {
		windows: Math.ceil(bits / W) + 1,
		windowSize: 2 ** (W - 1)
	};
}
function validateMSMPoints$1(points, c) {
	if (!Array.isArray(points)) throw new Error("array expected");
	points.forEach((p, i) => {
		if (!(p instanceof c)) throw new Error("invalid point at index " + i);
	});
}
function validateMSMScalars$1(scalars, field) {
	if (!Array.isArray(scalars)) throw new Error("array of scalars expected");
	scalars.forEach((s, i) => {
		if (!field.isValid(s)) throw new Error("invalid scalar at index " + i);
	});
}
function getW$1(P) {
	return pointWindowSizes$1.get(P) || 1;
}
/**
* Elliptic curve multiplication of Point by scalar. Fragile.
* Scalars should always be less than curve order: this should be checked inside of a curve itself.
* Creates precomputation tables for fast multiplication:
* - private scalar is split by fixed size windows of W bits
* - every window point is collected from window's table & added to accumulator
* - since windows are different, same point inside tables won't be accessed more than once per calc
* - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
* - +1 window is neccessary for wNAF
* - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
*
* @todo Research returning 2d JS array of windows, instead of a single window.
* This would allow windows to be in different memory locations
*/
function wNAF$1(c, bits) {
	return {
		constTimeNegate: constTimeNegate$1,
		hasPrecomputes(elm) {
			return getW$1(elm) !== 1;
		},
		unsafeLadder(elm, n, p = c.ZERO) {
			let d = elm;
			while (n > _0n$5) {
				if (n & _1n$7) p = p.add(d);
				d = d.double();
				n >>= _1n$7;
			}
			return p;
		},
		/**
		* Creates a wNAF precomputation window. Used for caching.
		* Default window size is set by `utils.precompute()` and is equal to 8.
		* Number of precomputed points depends on the curve size:
		* 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
		* - 𝑊 is the window size
		* - 𝑛 is the bitlength of the curve order.
		* For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
		* @param elm Point instance
		* @param W window size
		* @returns precomputed point tables flattened to a single array
		*/
		precomputeWindow(elm, W) {
			const { windows, windowSize } = calcWOpts$1(W, bits);
			const points = [];
			let p = elm;
			let base = p;
			for (let window = 0; window < windows; window++) {
				base = p;
				points.push(base);
				for (let i = 1; i < windowSize; i++) {
					base = base.add(p);
					points.push(base);
				}
				p = base.double();
			}
			return points;
		},
		/**
		* Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
		* @param W window size
		* @param precomputes precomputed tables
		* @param n scalar (we don't check here, but should be less than curve order)
		* @returns real and fake (for const-time) points
		*/
		wNAF(W, precomputes, n) {
			const { windows, windowSize } = calcWOpts$1(W, bits);
			let p = c.ZERO;
			let f = c.BASE;
			const mask = BigInt(2 ** W - 1);
			const maxNumber = 2 ** W;
			const shiftBy = BigInt(W);
			for (let window = 0; window < windows; window++) {
				const offset = window * windowSize;
				let wbits = Number(n & mask);
				n >>= shiftBy;
				if (wbits > windowSize) {
					wbits -= maxNumber;
					n += _1n$7;
				}
				const offset1 = offset;
				const offset2 = offset + Math.abs(wbits) - 1;
				const cond1 = window % 2 !== 0;
				const cond2 = wbits < 0;
				if (wbits === 0) f = f.add(constTimeNegate$1(cond1, precomputes[offset1]));
				else p = p.add(constTimeNegate$1(cond2, precomputes[offset2]));
			}
			return {
				p,
				f
			};
		},
		/**
		* Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
		* @param W window size
		* @param precomputes precomputed tables
		* @param n scalar (we don't check here, but should be less than curve order)
		* @param acc accumulator point to add result of multiplication
		* @returns point
		*/
		wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
			const { windows, windowSize } = calcWOpts$1(W, bits);
			const mask = BigInt(2 ** W - 1);
			const maxNumber = 2 ** W;
			const shiftBy = BigInt(W);
			for (let window = 0; window < windows; window++) {
				const offset = window * windowSize;
				if (n === _0n$5) break;
				let wbits = Number(n & mask);
				n >>= shiftBy;
				if (wbits > windowSize) {
					wbits -= maxNumber;
					n += _1n$7;
				}
				if (wbits === 0) continue;
				let curr = precomputes[offset + Math.abs(wbits) - 1];
				if (wbits < 0) curr = curr.negate();
				acc = acc.add(curr);
			}
			return acc;
		},
		getPrecomputes(W, P, transform) {
			let comp = pointPrecomputes$1.get(P);
			if (!comp) {
				comp = this.precomputeWindow(P, W);
				if (W !== 1) pointPrecomputes$1.set(P, transform(comp));
			}
			return comp;
		},
		wNAFCached(P, n, transform) {
			const W = getW$1(P);
			return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
		},
		wNAFCachedUnsafe(P, n, transform, prev) {
			const W = getW$1(P);
			if (W === 1) return this.unsafeLadder(P, n, prev);
			return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
		},
		setWindowSize(P, W) {
			validateW$1(W, bits);
			pointWindowSizes$1.set(P, W);
			pointPrecomputes$1.delete(P);
		}
	};
}
/**
* Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
* 30x faster vs naive addition on L=4096, 10x faster with precomputes.
* For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
* Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
* @param c Curve Point constructor
* @param fieldN field over CURVE.N - important that it's not over CURVE.P
* @param points array of L curve points
* @param scalars array of L scalars (aka private keys / bigints)
*/
function pippenger$1(c, fieldN, points, scalars) {
	validateMSMPoints$1(points, c);
	validateMSMScalars$1(scalars, fieldN);
	if (points.length !== scalars.length) throw new Error("arrays of points and scalars must have equal length");
	const zero = c.ZERO;
	const wbits = bitLen$1(BigInt(points.length));
	const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1;
	const MASK = (1 << windowSize) - 1;
	const buckets = new Array(MASK + 1).fill(zero);
	const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
	let sum = zero;
	for (let i = lastBits; i >= 0; i -= windowSize) {
		buckets.fill(zero);
		for (let j = 0; j < scalars.length; j++) {
			const scalar = scalars[j];
			const wbits = Number(scalar >> BigInt(i) & BigInt(MASK));
			buckets[wbits] = buckets[wbits].add(points[j]);
		}
		let resI = zero;
		for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
			sumI = sumI.add(buckets[j]);
			resI = resI.add(sumI);
		}
		sum = sum.add(resI);
		if (i !== 0) for (let j = 0; j < windowSize; j++) sum = sum.double();
	}
	return sum;
}
function validateBasic$1(curve) {
	validateField$1(curve.Fp);
	validateObject$1(curve, {
		n: "bigint",
		h: "bigint",
		Gx: "field",
		Gy: "field"
	}, {
		nBitLength: "isSafeInteger",
		nByteLength: "isSafeInteger"
	});
	return Object.freeze({
		...nLength$1(curve.n, curve.nBitLength),
		...curve,
		p: curve.Fp.ORDER
	});
}
var _0n$5, _1n$7, pointPrecomputes$1, pointWindowSizes$1;
var init_curve$1 = __esmMin((() => {
	init_modular$1();
	init_utils$2();
	_0n$5 = BigInt(0);
	_1n$7 = BigInt(1);
	pointPrecomputes$1 = /* @__PURE__ */ new WeakMap();
	pointWindowSizes$1 = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/curves/esm/abstract/weierstrass.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function validateSigVerOpts$1(opts) {
	if (opts.lowS !== void 0) abool$1("lowS", opts.lowS);
	if (opts.prehash !== void 0) abool$1("prehash", opts.prehash);
}
function validatePointOpts$1(curve) {
	const opts = validateBasic$1(curve);
	validateObject$1(opts, {
		a: "field",
		b: "field"
	}, {
		allowedPrivateKeyLengths: "array",
		wrapPrivateKey: "boolean",
		isTorsionFree: "function",
		clearCofactor: "function",
		allowInfinityPoint: "boolean",
		fromBytes: "function",
		toBytes: "function"
	});
	const { endo, Fp, a } = opts;
	if (endo) {
		if (!Fp.eql(a, Fp.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
		if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
	}
	return Object.freeze({ ...opts });
}
function weierstrassPoints$1(opts) {
	const CURVE = validatePointOpts$1(opts);
	const { Fp } = CURVE;
	const Fn = Field$1(CURVE.n, CURVE.nBitLength);
	const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
		const a = point.toAffine();
		return concatBytes$2(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
	});
	const fromBytes = CURVE.fromBytes || ((bytes) => {
		const tail = bytes.subarray(1);
		return {
			x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
			y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
		};
	});
	/**
	* y² = x³ + ax + b: Short weierstrass curve formula
	* @returns y²
	*/
	function weierstrassEquation(x) {
		const { a, b } = CURVE;
		const x2 = Fp.sqr(x);
		const x3 = Fp.mul(x2, x);
		return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
	}
	if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx))) throw new Error("bad generator point: equation left != right");
	function isWithinCurveOrder(num) {
		return inRange$1(num, _1n$6, CURVE.n);
	}
	function normPrivateKeyToScalar(key) {
		const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
		if (lengths && typeof key !== "bigint") {
			if (isBytes$2(key)) key = bytesToHex$1(key);
			if (typeof key !== "string" || !lengths.includes(key.length)) throw new Error("invalid private key");
			key = key.padStart(nByteLength * 2, "0");
		}
		let num;
		try {
			num = typeof key === "bigint" ? key : bytesToNumberBE$1(ensureBytes$1("private key", key, nByteLength));
		} catch (error) {
			throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
		}
		if (wrapPrivateKey) num = mod$1(num, N);
		aInRange$1("private key", num, _1n$6, N);
		return num;
	}
	function assertPrjPoint(other) {
		if (!(other instanceof Point)) throw new Error("ProjectivePoint expected");
	}
	const toAffineMemo = memoized$1((p, iz) => {
		const { px: x, py: y, pz: z } = p;
		if (Fp.eql(z, Fp.ONE)) return {
			x,
			y
		};
		const is0 = p.is0();
		if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
		const ax = Fp.mul(x, iz);
		const ay = Fp.mul(y, iz);
		const zz = Fp.mul(z, iz);
		if (is0) return {
			x: Fp.ZERO,
			y: Fp.ZERO
		};
		if (!Fp.eql(zz, Fp.ONE)) throw new Error("invZ was invalid");
		return {
			x: ax,
			y: ay
		};
	});
	const assertValidMemo = memoized$1((p) => {
		if (p.is0()) {
			if (CURVE.allowInfinityPoint && !Fp.is0(p.py)) return;
			throw new Error("bad point: ZERO");
		}
		const { x, y } = p.toAffine();
		if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error("bad point: x or y not FE");
		const left = Fp.sqr(y);
		const right = weierstrassEquation(x);
		if (!Fp.eql(left, right)) throw new Error("bad point: equation left != right");
		if (!p.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
		return true;
	});
	/**
	* Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
	* Default Point works in 2d / affine coordinates: (x, y)
	* We're doing calculations in projective, because its operations don't require costly inversion.
	*/
	class Point {
		constructor(px, py, pz) {
			this.px = px;
			this.py = py;
			this.pz = pz;
			if (px == null || !Fp.isValid(px)) throw new Error("x required");
			if (py == null || !Fp.isValid(py)) throw new Error("y required");
			if (pz == null || !Fp.isValid(pz)) throw new Error("z required");
			Object.freeze(this);
		}
		static fromAffine(p) {
			const { x, y } = p || {};
			if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error("invalid affine point");
			if (p instanceof Point) throw new Error("projective point not allowed");
			const is0 = (i) => Fp.eql(i, Fp.ZERO);
			if (is0(x) && is0(y)) return Point.ZERO;
			return new Point(x, y, Fp.ONE);
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		/**
		* Takes a bunch of Projective Points but executes only one
		* inversion on all of them. Inversion is very slow operation,
		* so this improves performance massively.
		* Optimization: converts a list of projective points to a list of identical points with Z=1.
		*/
		static normalizeZ(points) {
			const toInv = Fp.invertBatch(points.map((p) => p.pz));
			return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
		}
		/**
		* Converts hash string or Uint8Array to Point.
		* @param hex short/long ECDSA hex
		*/
		static fromHex(hex) {
			const P = Point.fromAffine(fromBytes(ensureBytes$1("pointHex", hex)));
			P.assertValidity();
			return P;
		}
		static fromPrivateKey(privateKey) {
			return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
		}
		static msm(points, scalars) {
			return pippenger$1(Point, Fn, points, scalars);
		}
		_setWindowSize(windowSize) {
			wnaf.setWindowSize(this, windowSize);
		}
		assertValidity() {
			assertValidMemo(this);
		}
		hasEvenY() {
			const { y } = this.toAffine();
			if (Fp.isOdd) return !Fp.isOdd(y);
			throw new Error("Field doesn't support isOdd");
		}
		/**
		* Compare one point to another.
		*/
		equals(other) {
			assertPrjPoint(other);
			const { px: X1, py: Y1, pz: Z1 } = this;
			const { px: X2, py: Y2, pz: Z2 } = other;
			const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
			const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
			return U1 && U2;
		}
		/**
		* Flips point to one corresponding to (x, -y) in Affine coordinates.
		*/
		negate() {
			return new Point(this.px, Fp.neg(this.py), this.pz);
		}
		double() {
			const { a, b } = CURVE;
			const b3 = Fp.mul(b, _3n$2);
			const { px: X1, py: Y1, pz: Z1 } = this;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			let t0 = Fp.mul(X1, X1);
			let t1 = Fp.mul(Y1, Y1);
			let t2 = Fp.mul(Z1, Z1);
			let t3 = Fp.mul(X1, Y1);
			t3 = Fp.add(t3, t3);
			Z3 = Fp.mul(X1, Z1);
			Z3 = Fp.add(Z3, Z3);
			X3 = Fp.mul(a, Z3);
			Y3 = Fp.mul(b3, t2);
			Y3 = Fp.add(X3, Y3);
			X3 = Fp.sub(t1, Y3);
			Y3 = Fp.add(t1, Y3);
			Y3 = Fp.mul(X3, Y3);
			X3 = Fp.mul(t3, X3);
			Z3 = Fp.mul(b3, Z3);
			t2 = Fp.mul(a, t2);
			t3 = Fp.sub(t0, t2);
			t3 = Fp.mul(a, t3);
			t3 = Fp.add(t3, Z3);
			Z3 = Fp.add(t0, t0);
			t0 = Fp.add(Z3, t0);
			t0 = Fp.add(t0, t2);
			t0 = Fp.mul(t0, t3);
			Y3 = Fp.add(Y3, t0);
			t2 = Fp.mul(Y1, Z1);
			t2 = Fp.add(t2, t2);
			t0 = Fp.mul(t2, t3);
			X3 = Fp.sub(X3, t0);
			Z3 = Fp.mul(t2, t1);
			Z3 = Fp.add(Z3, Z3);
			Z3 = Fp.add(Z3, Z3);
			return new Point(X3, Y3, Z3);
		}
		add(other) {
			assertPrjPoint(other);
			const { px: X1, py: Y1, pz: Z1 } = this;
			const { px: X2, py: Y2, pz: Z2 } = other;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			const a = CURVE.a;
			const b3 = Fp.mul(CURVE.b, _3n$2);
			let t0 = Fp.mul(X1, X2);
			let t1 = Fp.mul(Y1, Y2);
			let t2 = Fp.mul(Z1, Z2);
			let t3 = Fp.add(X1, Y1);
			let t4 = Fp.add(X2, Y2);
			t3 = Fp.mul(t3, t4);
			t4 = Fp.add(t0, t1);
			t3 = Fp.sub(t3, t4);
			t4 = Fp.add(X1, Z1);
			let t5 = Fp.add(X2, Z2);
			t4 = Fp.mul(t4, t5);
			t5 = Fp.add(t0, t2);
			t4 = Fp.sub(t4, t5);
			t5 = Fp.add(Y1, Z1);
			X3 = Fp.add(Y2, Z2);
			t5 = Fp.mul(t5, X3);
			X3 = Fp.add(t1, t2);
			t5 = Fp.sub(t5, X3);
			Z3 = Fp.mul(a, t4);
			X3 = Fp.mul(b3, t2);
			Z3 = Fp.add(X3, Z3);
			X3 = Fp.sub(t1, Z3);
			Z3 = Fp.add(t1, Z3);
			Y3 = Fp.mul(X3, Z3);
			t1 = Fp.add(t0, t0);
			t1 = Fp.add(t1, t0);
			t2 = Fp.mul(a, t2);
			t4 = Fp.mul(b3, t4);
			t1 = Fp.add(t1, t2);
			t2 = Fp.sub(t0, t2);
			t2 = Fp.mul(a, t2);
			t4 = Fp.add(t4, t2);
			t0 = Fp.mul(t1, t4);
			Y3 = Fp.add(Y3, t0);
			t0 = Fp.mul(t5, t4);
			X3 = Fp.mul(t3, X3);
			X3 = Fp.sub(X3, t0);
			t0 = Fp.mul(t3, t1);
			Z3 = Fp.mul(t5, Z3);
			Z3 = Fp.add(Z3, t0);
			return new Point(X3, Y3, Z3);
		}
		subtract(other) {
			return this.add(other.negate());
		}
		is0() {
			return this.equals(Point.ZERO);
		}
		wNAF(n) {
			return wnaf.wNAFCached(this, n, Point.normalizeZ);
		}
		/**
		* Non-constant-time multiplication. Uses double-and-add algorithm.
		* It's faster, but should only be used when you don't care about
		* an exposed private key e.g. sig verification, which works over *public* keys.
		*/
		multiplyUnsafe(sc) {
			const { endo, n: N } = CURVE;
			aInRange$1("scalar", sc, _0n$4, N);
			const I = Point.ZERO;
			if (sc === _0n$4) return I;
			if (this.is0() || sc === _1n$6) return this;
			if (!endo || wnaf.hasPrecomputes(this)) return wnaf.wNAFCachedUnsafe(this, sc, Point.normalizeZ);
			let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
			let k1p = I;
			let k2p = I;
			let d = this;
			while (k1 > _0n$4 || k2 > _0n$4) {
				if (k1 & _1n$6) k1p = k1p.add(d);
				if (k2 & _1n$6) k2p = k2p.add(d);
				d = d.double();
				k1 >>= _1n$6;
				k2 >>= _1n$6;
			}
			if (k1neg) k1p = k1p.negate();
			if (k2neg) k2p = k2p.negate();
			k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
			return k1p.add(k2p);
		}
		/**
		* Constant time multiplication.
		* Uses wNAF method. Windowed method may be 10% faster,
		* but takes 2x longer to generate and consumes 2x memory.
		* Uses precomputes when available.
		* Uses endomorphism for Koblitz curves.
		* @param scalar by which the point would be multiplied
		* @returns New point
		*/
		multiply(scalar) {
			const { endo, n: N } = CURVE;
			aInRange$1("scalar", scalar, _1n$6, N);
			let point, fake;
			if (endo) {
				const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
				let { p: k1p, f: f1p } = this.wNAF(k1);
				let { p: k2p, f: f2p } = this.wNAF(k2);
				k1p = wnaf.constTimeNegate(k1neg, k1p);
				k2p = wnaf.constTimeNegate(k2neg, k2p);
				k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
				point = k1p.add(k2p);
				fake = f1p.add(f2p);
			} else {
				const { p, f } = this.wNAF(scalar);
				point = p;
				fake = f;
			}
			return Point.normalizeZ([point, fake])[0];
		}
		/**
		* Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
		* Not using Strauss-Shamir trick: precomputation tables are faster.
		* The trick could be useful if both P and Q are not G (not in our case).
		* @returns non-zero affine point
		*/
		multiplyAndAddUnsafe(Q, a, b) {
			const G = Point.BASE;
			const mul = (P, a) => a === _0n$4 || a === _1n$6 || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
			const sum = mul(this, a).add(mul(Q, b));
			return sum.is0() ? void 0 : sum;
		}
		toAffine(iz) {
			return toAffineMemo(this, iz);
		}
		isTorsionFree() {
			const { h: cofactor, isTorsionFree } = CURVE;
			if (cofactor === _1n$6) return true;
			if (isTorsionFree) return isTorsionFree(Point, this);
			throw new Error("isTorsionFree() has not been declared for the elliptic curve");
		}
		clearCofactor() {
			const { h: cofactor, clearCofactor } = CURVE;
			if (cofactor === _1n$6) return this;
			if (clearCofactor) return clearCofactor(Point, this);
			return this.multiplyUnsafe(CURVE.h);
		}
		toRawBytes(isCompressed = true) {
			abool$1("isCompressed", isCompressed);
			this.assertValidity();
			return toBytes(Point, this, isCompressed);
		}
		toHex(isCompressed = true) {
			abool$1("isCompressed", isCompressed);
			return bytesToHex$1(this.toRawBytes(isCompressed));
		}
	}
	Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
	Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
	const _bits = CURVE.nBitLength;
	const wnaf = wNAF$1(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
	return {
		CURVE,
		ProjectivePoint: Point,
		normPrivateKeyToScalar,
		weierstrassEquation,
		isWithinCurveOrder
	};
}
function validateOpts$1(curve) {
	const opts = validateBasic$1(curve);
	validateObject$1(opts, {
		hash: "hash",
		hmac: "function",
		randomBytes: "function"
	}, {
		bits2int: "function",
		bits2int_modN: "function",
		lowS: "boolean"
	});
	return Object.freeze({
		lowS: true,
		...opts
	});
}
/**
* Creates short weierstrass curve and ECDSA signature methods for it.
* @example
* import { Field } from '@noble/curves/abstract/modular';
* // Before that, define BigInt-s: a, b, p, n, Gx, Gy
* const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
*/
function weierstrass$1(curveDef) {
	const CURVE = validateOpts$1(curveDef);
	const { Fp, n: CURVE_ORDER } = CURVE;
	const compressedLen = Fp.BYTES + 1;
	const uncompressedLen = 2 * Fp.BYTES + 1;
	function modN(a) {
		return mod$1(a, CURVE_ORDER);
	}
	function invN(a) {
		return invert$1(a, CURVE_ORDER);
	}
	const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints$1({
		...CURVE,
		toBytes(_c, point, isCompressed) {
			const a = point.toAffine();
			const x = Fp.toBytes(a.x);
			const cat = concatBytes$2;
			abool$1("isCompressed", isCompressed);
			if (isCompressed) return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
			else return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
		},
		fromBytes(bytes) {
			const len = bytes.length;
			const head = bytes[0];
			const tail = bytes.subarray(1);
			if (len === compressedLen && (head === 2 || head === 3)) {
				const x = bytesToNumberBE$1(tail);
				if (!inRange$1(x, _1n$6, Fp.ORDER)) throw new Error("Point is not on curve");
				const y2 = weierstrassEquation(x);
				let y;
				try {
					y = Fp.sqrt(y2);
				} catch (sqrtError) {
					const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
					throw new Error("Point is not on curve" + suffix);
				}
				const isYOdd = (y & _1n$6) === _1n$6;
				if ((head & 1) === 1 !== isYOdd) y = Fp.neg(y);
				return {
					x,
					y
				};
			} else if (len === uncompressedLen && head === 4) return {
				x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
				y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
			};
			else {
				const cl = compressedLen;
				const ul = uncompressedLen;
				throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
			}
		}
	});
	const numToNByteStr = (num) => bytesToHex$1(numberToBytesBE$1(num, CURVE.nByteLength));
	function isBiggerThanHalfOrder(number) {
		return number > CURVE_ORDER >> _1n$6;
	}
	function normalizeS(s) {
		return isBiggerThanHalfOrder(s) ? modN(-s) : s;
	}
	const slcNum = (b, from, to) => bytesToNumberBE$1(b.slice(from, to));
	/**
	* ECDSA signature with its (r, s) properties. Supports DER & compact representations.
	*/
	class Signature {
		constructor(r, s, recovery) {
			this.r = r;
			this.s = s;
			this.recovery = recovery;
			this.assertValidity();
		}
		static fromCompact(hex) {
			const l = CURVE.nByteLength;
			hex = ensureBytes$1("compactSignature", hex, l * 2);
			return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
		}
		static fromDER(hex) {
			const { r, s } = DER$1.toSig(ensureBytes$1("DER", hex));
			return new Signature(r, s);
		}
		assertValidity() {
			aInRange$1("r", this.r, _1n$6, CURVE_ORDER);
			aInRange$1("s", this.s, _1n$6, CURVE_ORDER);
		}
		addRecoveryBit(recovery) {
			return new Signature(this.r, this.s, recovery);
		}
		recoverPublicKey(msgHash) {
			const { r, s, recovery: rec } = this;
			const h = bits2int_modN(ensureBytes$1("msgHash", msgHash));
			if (rec == null || ![
				0,
				1,
				2,
				3
			].includes(rec)) throw new Error("recovery id invalid");
			const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
			if (radj >= Fp.ORDER) throw new Error("recovery id 2 or 3 invalid");
			const prefix = (rec & 1) === 0 ? "02" : "03";
			const R = Point.fromHex(prefix + numToNByteStr(radj));
			const ir = invN(radj);
			const u1 = modN(-h * ir);
			const u2 = modN(s * ir);
			const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
			if (!Q) throw new Error("point at infinify");
			Q.assertValidity();
			return Q;
		}
		hasHighS() {
			return isBiggerThanHalfOrder(this.s);
		}
		normalizeS() {
			return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return hexToBytes$1(this.toDERHex());
		}
		toDERHex() {
			return DER$1.hexFromSig({
				r: this.r,
				s: this.s
			});
		}
		toCompactRawBytes() {
			return hexToBytes$1(this.toCompactHex());
		}
		toCompactHex() {
			return numToNByteStr(this.r) + numToNByteStr(this.s);
		}
	}
	const utils = {
		isValidPrivateKey(privateKey) {
			try {
				normPrivateKeyToScalar(privateKey);
				return true;
			} catch (error) {
				return false;
			}
		},
		normPrivateKeyToScalar,
		/**
		* Produces cryptographically secure private key from random of size
		* (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
		*/
		randomPrivateKey: () => {
			const length = getMinHashLength$1(CURVE.n);
			return mapHashToField$1(CURVE.randomBytes(length), CURVE.n);
		},
		/**
		* Creates precompute table for an arbitrary EC point. Makes point "cached".
		* Allows to massively speed-up `point.multiply(scalar)`.
		* @returns cached point
		* @example
		* const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
		* fast.multiply(privKey); // much faster ECDH now
		*/
		precompute(windowSize = 8, point = Point.BASE) {
			point._setWindowSize(windowSize);
			point.multiply(BigInt(3));
			return point;
		}
	};
	/**
	* Computes public key for a private key. Checks for validity of the private key.
	* @param privateKey private key
	* @param isCompressed whether to return compact (default), or full key
	* @returns Public key, full when isCompressed=false; short when isCompressed=true
	*/
	function getPublicKey(privateKey, isCompressed = true) {
		return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
	}
	/**
	* Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
	*/
	function isProbPub(item) {
		const arr = isBytes$2(item);
		const str = typeof item === "string";
		const len = (arr || str) && item.length;
		if (arr) return len === compressedLen || len === uncompressedLen;
		if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
		if (item instanceof Point) return true;
		return false;
	}
	/**
	* ECDH (Elliptic Curve Diffie Hellman).
	* Computes shared public key from private key and public key.
	* Checks: 1) private key validity 2) shared key is on-curve.
	* Does NOT hash the result.
	* @param privateA private key
	* @param publicB different public key
	* @param isCompressed whether to return compact (default), or full key
	* @returns shared public key
	*/
	function getSharedSecret(privateA, publicB, isCompressed = true) {
		if (isProbPub(privateA)) throw new Error("first arg must be private key");
		if (!isProbPub(publicB)) throw new Error("second arg must be public key");
		return Point.fromHex(publicB).multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
	}
	const bits2int = CURVE.bits2int || function(bytes) {
		if (bytes.length > 8192) throw new Error("input is too large");
		const num = bytesToNumberBE$1(bytes);
		const delta = bytes.length * 8 - CURVE.nBitLength;
		return delta > 0 ? num >> BigInt(delta) : num;
	};
	const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
		return modN(bits2int(bytes));
	};
	const ORDER_MASK = bitMask$1(CURVE.nBitLength);
	/**
	* Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
	*/
	function int2octets(num) {
		aInRange$1("num < 2^" + CURVE.nBitLength, num, _0n$4, ORDER_MASK);
		return numberToBytesBE$1(num, CURVE.nByteLength);
	}
	function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
		if (["recovered", "canonical"].some((k) => k in opts)) throw new Error("sign() legacy options not supported");
		const { hash, randomBytes } = CURVE;
		let { lowS, prehash, extraEntropy: ent } = opts;
		if (lowS == null) lowS = true;
		msgHash = ensureBytes$1("msgHash", msgHash);
		validateSigVerOpts$1(opts);
		if (prehash) msgHash = ensureBytes$1("prehashed msgHash", hash(msgHash));
		const h1int = bits2int_modN(msgHash);
		const d = normPrivateKeyToScalar(privateKey);
		const seedArgs = [int2octets(d), int2octets(h1int)];
		if (ent != null && ent !== false) {
			const e = ent === true ? randomBytes(Fp.BYTES) : ent;
			seedArgs.push(ensureBytes$1("extraEntropy", e));
		}
		const seed = concatBytes$2(...seedArgs);
		const m = h1int;
		function k2sig(kBytes) {
			const k = bits2int(kBytes);
			if (!isWithinCurveOrder(k)) return;
			const ik = invN(k);
			const q = Point.BASE.multiply(k).toAffine();
			const r = modN(q.x);
			if (r === _0n$4) return;
			const s = modN(ik * modN(m + r * d));
			if (s === _0n$4) return;
			let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$6);
			let normS = s;
			if (lowS && isBiggerThanHalfOrder(s)) {
				normS = normalizeS(s);
				recovery ^= 1;
			}
			return new Signature(r, normS, recovery);
		}
		return {
			seed,
			k2sig
		};
	}
	const defaultSigOpts = {
		lowS: CURVE.lowS,
		prehash: false
	};
	const defaultVerOpts = {
		lowS: CURVE.lowS,
		prehash: false
	};
	/**
	* Signs message hash with a private key.
	* ```
	* sign(m, d, k) where
	*   (x, y) = G × k
	*   r = x mod n
	*   s = (m + dr)/k mod n
	* ```
	* @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
	* @param privKey private key
	* @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
	* @returns signature with recovery param
	*/
	function sign(msgHash, privKey, opts = defaultSigOpts) {
		const { seed, k2sig } = prepSig(msgHash, privKey, opts);
		const C = CURVE;
		return createHmacDrbg$1(C.hash.outputLen, C.nByteLength, C.hmac)(seed, k2sig);
	}
	Point.BASE._setWindowSize(8);
	/**
	* Verifies a signature against message hash and public key.
	* Rejects lowS signatures by default: to override,
	* specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
	*
	* ```
	* verify(r, s, h, P) where
	*   U1 = hs^-1 mod n
	*   U2 = rs^-1 mod n
	*   R = U1⋅G - U2⋅P
	*   mod(R.x, n) == r
	* ```
	*/
	function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
		const sg = signature;
		msgHash = ensureBytes$1("msgHash", msgHash);
		publicKey = ensureBytes$1("publicKey", publicKey);
		const { lowS, prehash, format } = opts;
		validateSigVerOpts$1(opts);
		if ("strict" in opts) throw new Error("options.strict was renamed to lowS");
		if (format !== void 0 && format !== "compact" && format !== "der") throw new Error("format must be compact or der");
		const isHex = typeof sg === "string" || isBytes$2(sg);
		const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
		if (!isHex && !isObj) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
		let _sig = void 0;
		let P;
		try {
			if (isObj) _sig = new Signature(sg.r, sg.s);
			if (isHex) {
				try {
					if (format !== "compact") _sig = Signature.fromDER(sg);
				} catch (derError) {
					if (!(derError instanceof DER$1.Err)) throw derError;
				}
				if (!_sig && format !== "der") _sig = Signature.fromCompact(sg);
			}
			P = Point.fromHex(publicKey);
		} catch (error) {
			return false;
		}
		if (!_sig) return false;
		if (lowS && _sig.hasHighS()) return false;
		if (prehash) msgHash = CURVE.hash(msgHash);
		const { r, s } = _sig;
		const h = bits2int_modN(msgHash);
		const is = invN(s);
		const u1 = modN(h * is);
		const u2 = modN(r * is);
		const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
		if (!R) return false;
		return modN(R.x) === r;
	}
	return {
		CURVE,
		getPublicKey,
		getSharedSecret,
		sign,
		verify,
		ProjectivePoint: Point,
		Signature,
		utils
	};
}
var b2n$1, h2b$1, DERErr$1, DER$1, _0n$4, _1n$6, _3n$2;
var init_weierstrass$1 = __esmMin((() => {
	init_curve$1();
	init_modular$1();
	init_utils$2();
	({bytesToNumberBE: b2n$1, hexToBytes: h2b$1} = utils_exports$1);
	DERErr$1 = class extends Error {
		constructor(m = "") {
			super(m);
		}
	};
	DER$1 = {
		Err: DERErr$1,
		_tlv: {
			encode: (tag, data) => {
				const { Err: E } = DER$1;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length & 1) throw new E("tlv.encode: unpadded data");
				const dataLen = data.length / 2;
				const len = numberToHexUnpadded$1(dataLen);
				if (len.length / 2 & 128) throw new E("tlv.encode: long form length too big");
				const lenLen = dataLen > 127 ? numberToHexUnpadded$1(len.length / 2 | 128) : "";
				return numberToHexUnpadded$1(tag) + lenLen + len + data;
			},
			decode(tag, data) {
				const { Err: E } = DER$1;
				let pos = 0;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length < 2 || data[pos++] !== tag) throw new E("tlv.decode: wrong tlv");
				const first = data[pos++];
				const isLong = !!(first & 128);
				let length = 0;
				if (!isLong) length = first;
				else {
					const lenLen = first & 127;
					if (!lenLen) throw new E("tlv.decode(long): indefinite length not supported");
					if (lenLen > 4) throw new E("tlv.decode(long): byte length is too big");
					const lengthBytes = data.subarray(pos, pos + lenLen);
					if (lengthBytes.length !== lenLen) throw new E("tlv.decode: length bytes not complete");
					if (lengthBytes[0] === 0) throw new E("tlv.decode(long): zero leftmost byte");
					for (const b of lengthBytes) length = length << 8 | b;
					pos += lenLen;
					if (length < 128) throw new E("tlv.decode(long): not minimal encoding");
				}
				const v = data.subarray(pos, pos + length);
				if (v.length !== length) throw new E("tlv.decode: wrong value length");
				return {
					v,
					l: data.subarray(pos + length)
				};
			}
		},
		_int: {
			encode(num) {
				const { Err: E } = DER$1;
				if (num < _0n$4) throw new E("integer: negative integers are not allowed");
				let hex = numberToHexUnpadded$1(num);
				if (Number.parseInt(hex[0], 16) & 8) hex = "00" + hex;
				if (hex.length & 1) throw new E("unexpected DER parsing assertion: unpadded hex");
				return hex;
			},
			decode(data) {
				const { Err: E } = DER$1;
				if (data[0] & 128) throw new E("invalid signature integer: negative");
				if (data[0] === 0 && !(data[1] & 128)) throw new E("invalid signature integer: unnecessary leading zero");
				return b2n$1(data);
			}
		},
		toSig(hex) {
			const { Err: E, _int: int, _tlv: tlv } = DER$1;
			const data = typeof hex === "string" ? h2b$1(hex) : hex;
			abytes$2(data);
			const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
			if (seqLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
			const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
			if (sLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			return {
				r: int.decode(rBytes),
				s: int.decode(sBytes)
			};
		},
		hexFromSig(sig) {
			const { _tlv: tlv, _int: int } = DER$1;
			const seq = tlv.encode(2, int.encode(sig.r)) + tlv.encode(2, int.encode(sig.s));
			return tlv.encode(48, seq);
		}
	};
	_0n$4 = BigInt(0);
	_1n$6 = BigInt(1);
	_3n$2 = BigInt(3);
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/curves/esm/_shortw_utils.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/** connects noble-curves to noble-hashes */
function getHash$1(hash) {
	return {
		hash,
		hmac: (key, ...msgs) => hmac$1(hash, key, concatBytes$3(...msgs)),
		randomBytes: randomBytes$2
	};
}
function createCurve$1(curveDef, defHash) {
	const create = (hash) => weierstrass$1({
		...curveDef,
		...getHash$1(hash)
	});
	return {
		...create(defHash),
		create
	};
}
var init__shortw_utils$1 = __esmMin((() => {
	init_hmac$1();
	init_utils$3();
	init_weierstrass$1();
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_exports$1 = /* @__PURE__ */ __exportAll({ secp256k1: () => secp256k1$1 });
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/**
* √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
* (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
*/
function sqrtMod$1(y) {
	const P = secp256k1P$1;
	const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
	const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
	const b2 = y * y * y % P;
	const b3 = b2 * b2 * y % P;
	const b11 = pow2$1(pow2$1(pow2$1(b3, _3n, P) * b3 % P, _3n, P) * b3 % P, _2n$3, P) * b2 % P;
	const b22 = pow2$1(b11, _11n, P) * b11 % P;
	const b44 = pow2$1(b22, _22n, P) * b22 % P;
	const b88 = pow2$1(b44, _44n, P) * b44 % P;
	const root = pow2$1(pow2$1(pow2$1(pow2$1(pow2$1(pow2$1(b88, _88n, P) * b88 % P, _44n, P) * b44 % P, _3n, P) * b3 % P, _23n, P) * b22 % P, _6n, P) * b2 % P, _2n$3, P);
	if (!Fpk1$1.eql(Fpk1$1.sqr(root), y)) throw new Error("Cannot find square root");
	return root;
}
var secp256k1P$1, secp256k1N$1, _1n$5, _2n$3, divNearest$1, Fpk1$1, secp256k1$1;
var init_secp256k1$1 = __esmMin((() => {
	init_sha256$1();
	init__shortw_utils$1();
	init_modular$1();
	secp256k1P$1 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
	secp256k1N$1 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
	_1n$5 = BigInt(1);
	_2n$3 = BigInt(2);
	divNearest$1 = (a, b) => (a + b / _2n$3) / b;
	Fpk1$1 = Field$1(secp256k1P$1, void 0, void 0, { sqrt: sqrtMod$1 });
	secp256k1$1 = createCurve$1({
		a: BigInt(0),
		b: BigInt(7),
		Fp: Fpk1$1,
		n: secp256k1N$1,
		Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
		Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
		h: BigInt(1),
		lowS: true,
		endo: {
			beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
			splitScalar: (k) => {
				const n = secp256k1N$1;
				const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
				const b1 = -_1n$5 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
				const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
				const b2 = a1;
				const POW_2_128 = BigInt("0x100000000000000000000000000000000");
				const c1 = divNearest$1(b2 * k, n);
				const c2 = divNearest$1(-b1 * k, n);
				let k1 = mod$1(k - c1 * a1 - c2 * a2, n);
				let k2 = mod$1(-c1 * b1 - c2 * b2, n);
				const k1neg = k1 > POW_2_128;
				const k2neg = k2 > POW_2_128;
				if (k1neg) k1 = n - k1;
				if (k2neg) k2 = n - k2;
				if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalar: Endomorphism failed, k=" + k);
				return {
					k1neg,
					k1,
					k2neg,
					k2
				};
			}
		}
	}, sha256$1);
	secp256k1$1.ProjectivePoint;
}));
//#endregion
//#region node_modules/@noble/curves/node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.crypto = void 0;
	/**
	* Internal webcrypto alias.
	* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
	* Falls back to Node.js built-in crypto for Node.js <=v14.
	* See utils.ts for details.
	* @module
	*/
	var nc = __require("node:crypto");
	exports.crypto = nc && typeof nc === "object" && "webcrypto" in nc ? nc.webcrypto : nc && typeof nc === "object" && "randomBytes" in nc ? nc : void 0;
}));
//#endregion
//#region node_modules/@noble/curves/node_modules/@noble/hashes/utils.js
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Utilities for hex, bytes, CSPRNG.
	* @module
	*/
	/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.Hash = exports.nextTick = exports.swap32IfBE = exports.byteSwapIfBE = exports.swap8IfBE = exports.isLE = void 0;
	exports.isBytes = isBytes;
	exports.anumber = anumber;
	exports.abytes = abytes;
	exports.ahash = ahash;
	exports.aexists = aexists;
	exports.aoutput = aoutput;
	exports.u8 = u8;
	exports.u32 = u32;
	exports.clean = clean;
	exports.createView = createView;
	exports.rotr = rotr;
	exports.rotl = rotl;
	exports.byteSwap = byteSwap;
	exports.byteSwap32 = byteSwap32;
	exports.bytesToHex = bytesToHex;
	exports.hexToBytes = hexToBytes;
	exports.asyncLoop = asyncLoop;
	exports.utf8ToBytes = utf8ToBytes;
	exports.bytesToUtf8 = bytesToUtf8;
	exports.toBytes = toBytes;
	exports.kdfInputToBytes = kdfInputToBytes;
	exports.concatBytes = concatBytes;
	exports.checkOpts = checkOpts;
	exports.createHasher = createHasher;
	exports.createOptHasher = createOptHasher;
	exports.createXOFer = createXOFer;
	exports.randomBytes = randomBytes;
	var crypto_1 = require_cryptoNode();
	/** Checks if something is Uint8Array. Be careful: nodejs Buffer will return true. */
	function isBytes(a) {
		return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
	}
	/** Asserts something is positive integer. */
	function anumber(n) {
		if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, got " + n);
	}
	/** Asserts something is Uint8Array. */
	function abytes(b, ...lengths) {
		if (!isBytes(b)) throw new Error("Uint8Array expected");
		if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
	}
	/** Asserts something is hash */
	function ahash(h) {
		if (typeof h !== "function" || typeof h.create !== "function") throw new Error("Hash should be wrapped by utils.createHasher");
		anumber(h.outputLen);
		anumber(h.blockLen);
	}
	/** Asserts a hash instance has not been destroyed / finished */
	function aexists(instance, checkFinished = true) {
		if (instance.destroyed) throw new Error("Hash instance has been destroyed");
		if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
	}
	/** Asserts output is properly-sized byte array */
	function aoutput(out, instance) {
		abytes(out);
		const min = instance.outputLen;
		if (out.length < min) throw new Error("digestInto() expects output buffer of length at least " + min);
	}
	/** Cast u8 / u16 / u32 to u8. */
	function u8(arr) {
		return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
	}
	/** Cast u8 / u16 / u32 to u32. */
	function u32(arr) {
		return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
	}
	/** Zeroize a byte array. Warning: JS provides no guarantees. */
	function clean(...arrays) {
		for (let i = 0; i < arrays.length; i++) arrays[i].fill(0);
	}
	/** Create DataView of an array for easy byte-level manipulation. */
	function createView(arr) {
		return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
	}
	/** The rotate right (circular right shift) operation for uint32 */
	function rotr(word, shift) {
		return word << 32 - shift | word >>> shift;
	}
	/** The rotate left (circular left shift) operation for uint32 */
	function rotl(word, shift) {
		return word << shift | word >>> 32 - shift >>> 0;
	}
	/** Is current platform little-endian? Most are. Big-Endian platform: IBM */
	exports.isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
	/** The byte swap operation for uint32 */
	function byteSwap(word) {
		return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
	}
	/** Conditionally byte swap if on a big-endian platform */
	exports.swap8IfBE = exports.isLE ? (n) => n : (n) => byteSwap(n);
	/** @deprecated */
	exports.byteSwapIfBE = exports.swap8IfBE;
	/** In place byte swap for Uint32Array */
	function byteSwap32(arr) {
		for (let i = 0; i < arr.length; i++) arr[i] = byteSwap(arr[i]);
		return arr;
	}
	exports.swap32IfBE = exports.isLE ? (u) => u : byteSwap32;
	var hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")();
	var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
	/**
	* Convert byte array to hex string. Uses built-in function, when available.
	* @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
	*/
	function bytesToHex(bytes) {
		abytes(bytes);
		if (hasHexBuiltin) return bytes.toHex();
		let hex = "";
		for (let i = 0; i < bytes.length; i++) hex += hexes[bytes[i]];
		return hex;
	}
	var asciis = {
		_0: 48,
		_9: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
	function asciiToBase16(ch) {
		if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0;
		if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10);
		if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10);
	}
	/**
	* Convert hex string to byte array. Uses built-in function, when available.
	* @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
	*/
	function hexToBytes(hex) {
		if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
		if (hasHexBuiltin) return Uint8Array.fromHex(hex);
		const hl = hex.length;
		const al = hl / 2;
		if (hl % 2) throw new Error("hex string expected, got unpadded hex of length " + hl);
		const array = new Uint8Array(al);
		for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
			const n1 = asciiToBase16(hex.charCodeAt(hi));
			const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
			if (n1 === void 0 || n2 === void 0) {
				const char = hex[hi] + hex[hi + 1];
				throw new Error("hex string expected, got non-hex character \"" + char + "\" at index " + hi);
			}
			array[ai] = n1 * 16 + n2;
		}
		return array;
	}
	/**
	* There is no setImmediate in browser and setTimeout is slow.
	* Call of async fn will return Promise, which will be fullfiled only on
	* next scheduler queue processing step and this is exactly what we need.
	*/
	var nextTick = async () => {};
	exports.nextTick = nextTick;
	/** Returns control to thread each 'tick' ms to avoid blocking. */
	async function asyncLoop(iters, tick, cb) {
		let ts = Date.now();
		for (let i = 0; i < iters; i++) {
			cb(i);
			const diff = Date.now() - ts;
			if (diff >= 0 && diff < tick) continue;
			await (0, exports.nextTick)();
			ts += diff;
		}
	}
	/**
	* Converts string to bytes using UTF8 encoding.
	* @example utf8ToBytes('abc') // Uint8Array.from([97, 98, 99])
	*/
	function utf8ToBytes(str) {
		if (typeof str !== "string") throw new Error("string expected");
		return new Uint8Array(new TextEncoder().encode(str));
	}
	/**
	* Converts bytes to string using UTF8 encoding.
	* @example bytesToUtf8(Uint8Array.from([97, 98, 99])) // 'abc'
	*/
	function bytesToUtf8(bytes) {
		return new TextDecoder().decode(bytes);
	}
	/**
	* Normalizes (non-hex) string or Uint8Array to Uint8Array.
	* Warning: when Uint8Array is passed, it would NOT get copied.
	* Keep in mind for future mutable operations.
	*/
	function toBytes(data) {
		if (typeof data === "string") data = utf8ToBytes(data);
		abytes(data);
		return data;
	}
	/**
	* Helper for KDFs: consumes uint8array or string.
	* When string is passed, does utf8 decoding, using TextDecoder.
	*/
	function kdfInputToBytes(data) {
		if (typeof data === "string") data = utf8ToBytes(data);
		abytes(data);
		return data;
	}
	/** Copies several Uint8Arrays into one. */
	function concatBytes(...arrays) {
		let sum = 0;
		for (let i = 0; i < arrays.length; i++) {
			const a = arrays[i];
			abytes(a);
			sum += a.length;
		}
		const res = new Uint8Array(sum);
		for (let i = 0, pad = 0; i < arrays.length; i++) {
			const a = arrays[i];
			res.set(a, pad);
			pad += a.length;
		}
		return res;
	}
	function checkOpts(defaults, opts) {
		if (opts !== void 0 && {}.toString.call(opts) !== "[object Object]") throw new Error("options should be object or undefined");
		return Object.assign(defaults, opts);
	}
	/** For runtime check if class implements interface */
	var Hash = class {};
	exports.Hash = Hash;
	/** Wraps hash function, creating an interface on top of it */
	function createHasher(hashCons) {
		const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
		const tmp = hashCons();
		hashC.outputLen = tmp.outputLen;
		hashC.blockLen = tmp.blockLen;
		hashC.create = () => hashCons();
		return hashC;
	}
	function createOptHasher(hashCons) {
		const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
		const tmp = hashCons({});
		hashC.outputLen = tmp.outputLen;
		hashC.blockLen = tmp.blockLen;
		hashC.create = (opts) => hashCons(opts);
		return hashC;
	}
	function createXOFer(hashCons) {
		const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
		const tmp = hashCons({});
		hashC.outputLen = tmp.outputLen;
		hashC.blockLen = tmp.blockLen;
		hashC.create = (opts) => hashCons(opts);
		return hashC;
	}
	exports.wrapConstructor = createHasher;
	exports.wrapConstructorWithOpts = createOptHasher;
	exports.wrapXOFConstructorWithOpts = createXOFer;
	/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
	function randomBytes(bytesLength = 32) {
		if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
		if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === "function") return Uint8Array.from(crypto_1.crypto.randomBytes(bytesLength));
		throw new Error("crypto.getRandomValues must be defined");
	}
}));
//#endregion
//#region node_modules/@noble/curves/node_modules/@noble/hashes/_md.js
var require__md = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SHA512_IV = exports.SHA384_IV = exports.SHA224_IV = exports.SHA256_IV = exports.HashMD = void 0;
	exports.setBigUint64 = setBigUint64;
	exports.Chi = Chi;
	exports.Maj = Maj;
	/**
	* Internal Merkle-Damgard hash utils.
	* @module
	*/
	var utils_ts_1 = require_utils$1();
	/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
	function setBigUint64(view, byteOffset, value, isLE) {
		if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
		const _32n = BigInt(32);
		const _u32_max = BigInt(4294967295);
		const wh = Number(value >> _32n & _u32_max);
		const wl = Number(value & _u32_max);
		const h = isLE ? 4 : 0;
		const l = isLE ? 0 : 4;
		view.setUint32(byteOffset + h, wh, isLE);
		view.setUint32(byteOffset + l, wl, isLE);
	}
	/** Choice: a ? b : c */
	function Chi(a, b, c) {
		return a & b ^ ~a & c;
	}
	/** Majority function, true if any two inputs is true. */
	function Maj(a, b, c) {
		return a & b ^ a & c ^ b & c;
	}
	/**
	* Merkle-Damgard hash construction base class.
	* Could be used to create MD5, RIPEMD, SHA1, SHA2.
	*/
	var HashMD = class extends utils_ts_1.Hash {
		constructor(blockLen, outputLen, padOffset, isLE) {
			super();
			this.finished = false;
			this.length = 0;
			this.pos = 0;
			this.destroyed = false;
			this.blockLen = blockLen;
			this.outputLen = outputLen;
			this.padOffset = padOffset;
			this.isLE = isLE;
			this.buffer = new Uint8Array(blockLen);
			this.view = (0, utils_ts_1.createView)(this.buffer);
		}
		update(data) {
			(0, utils_ts_1.aexists)(this);
			data = (0, utils_ts_1.toBytes)(data);
			(0, utils_ts_1.abytes)(data);
			const { view, buffer, blockLen } = this;
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				if (take === blockLen) {
					const dataView = (0, utils_ts_1.createView)(data);
					for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
					continue;
				}
				buffer.set(data.subarray(pos, pos + take), this.pos);
				this.pos += take;
				pos += take;
				if (this.pos === blockLen) {
					this.process(view, 0);
					this.pos = 0;
				}
			}
			this.length += data.length;
			this.roundClean();
			return this;
		}
		digestInto(out) {
			(0, utils_ts_1.aexists)(this);
			(0, utils_ts_1.aoutput)(out, this);
			this.finished = true;
			const { buffer, view, blockLen, isLE } = this;
			let { pos } = this;
			buffer[pos++] = 128;
			(0, utils_ts_1.clean)(this.buffer.subarray(pos));
			if (this.padOffset > blockLen - pos) {
				this.process(view, 0);
				pos = 0;
			}
			for (let i = pos; i < blockLen; i++) buffer[i] = 0;
			setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
			this.process(view, 0);
			const oview = (0, utils_ts_1.createView)(out);
			const len = this.outputLen;
			if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
			const outLen = len / 4;
			const state = this.get();
			if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
			for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
		}
		digest() {
			const { buffer, outputLen } = this;
			this.digestInto(buffer);
			const res = buffer.slice(0, outputLen);
			this.destroy();
			return res;
		}
		_cloneInto(to) {
			to || (to = new this.constructor());
			to.set(...this.get());
			const { blockLen, buffer, length, finished, destroyed, pos } = this;
			to.destroyed = destroyed;
			to.finished = finished;
			to.length = length;
			to.pos = pos;
			if (length % blockLen) to.buffer.set(buffer);
			return to;
		}
		clone() {
			return this._cloneInto();
		}
	};
	exports.HashMD = HashMD;
	/**
	* Initial SHA-2 state: fractional parts of square roots of first 16 primes 2..53.
	* Check out `test/misc/sha2-gen-iv.js` for recomputation guide.
	*/
	/** Initial SHA256 state. Bits 0..32 of frac part of sqrt of primes 2..19 */
	exports.SHA256_IV = Uint32Array.from([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	/** Initial SHA224 state. Bits 32..64 of frac part of sqrt of primes 23..53 */
	exports.SHA224_IV = Uint32Array.from([
		3238371032,
		914150663,
		812702999,
		4144912697,
		4290775857,
		1750603025,
		1694076839,
		3204075428
	]);
	/** Initial SHA384 state. Bits 0..64 of frac part of sqrt of primes 23..53 */
	exports.SHA384_IV = Uint32Array.from([
		3418070365,
		3238371032,
		1654270250,
		914150663,
		2438529370,
		812702999,
		355462360,
		4144912697,
		1731405415,
		4290775857,
		2394180231,
		1750603025,
		3675008525,
		1694076839,
		1203062813,
		3204075428
	]);
	/** Initial SHA512 state. Bits 0..64 of frac part of sqrt of primes 2..19 */
	exports.SHA512_IV = Uint32Array.from([
		1779033703,
		4089235720,
		3144134277,
		2227873595,
		1013904242,
		4271175723,
		2773480762,
		1595750129,
		1359893119,
		2917565137,
		2600822924,
		725511199,
		528734635,
		4215389547,
		1541459225,
		327033209
	]);
}));
//#endregion
//#region node_modules/@noble/curves/node_modules/@noble/hashes/_u64.js
var require__u64 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.toBig = exports.shrSL = exports.shrSH = exports.rotrSL = exports.rotrSH = exports.rotrBL = exports.rotrBH = exports.rotr32L = exports.rotr32H = exports.rotlSL = exports.rotlSH = exports.rotlBL = exports.rotlBH = exports.add5L = exports.add5H = exports.add4L = exports.add4H = exports.add3L = exports.add3H = void 0;
	exports.add = add;
	exports.fromBig = fromBig;
	exports.split = split;
	/**
	* Internal helpers for u64. BigUint64Array is too slow as per 2025, so we implement it using Uint32Array.
	* @todo re-check https://issues.chromium.org/issues/42212588
	* @module
	*/
	var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
	var _32n = /* @__PURE__ */ BigInt(32);
	function fromBig(n, le = false) {
		if (le) return {
			h: Number(n & U32_MASK64),
			l: Number(n >> _32n & U32_MASK64)
		};
		return {
			h: Number(n >> _32n & U32_MASK64) | 0,
			l: Number(n & U32_MASK64) | 0
		};
	}
	function split(lst, le = false) {
		const len = lst.length;
		let Ah = new Uint32Array(len);
		let Al = new Uint32Array(len);
		for (let i = 0; i < len; i++) {
			const { h, l } = fromBig(lst[i], le);
			[Ah[i], Al[i]] = [h, l];
		}
		return [Ah, Al];
	}
	var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
	exports.toBig = toBig;
	var shrSH = (h, _l, s) => h >>> s;
	exports.shrSH = shrSH;
	var shrSL = (h, l, s) => h << 32 - s | l >>> s;
	exports.shrSL = shrSL;
	var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
	exports.rotrSH = rotrSH;
	var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
	exports.rotrSL = rotrSL;
	var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
	exports.rotrBH = rotrBH;
	var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
	exports.rotrBL = rotrBL;
	var rotr32H = (_h, l) => l;
	exports.rotr32H = rotr32H;
	var rotr32L = (h, _l) => h;
	exports.rotr32L = rotr32L;
	var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
	exports.rotlSH = rotlSH;
	var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
	exports.rotlSL = rotlSL;
	var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
	exports.rotlBH = rotlBH;
	var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
	exports.rotlBL = rotlBL;
	function add(Ah, Al, Bh, Bl) {
		const l = (Al >>> 0) + (Bl >>> 0);
		return {
			h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
			l: l | 0
		};
	}
	var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
	exports.add3L = add3L;
	var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
	exports.add3H = add3H;
	var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
	exports.add4L = add4L;
	var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
	exports.add4H = add4H;
	var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
	exports.add5L = add5L;
	var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
	exports.add5H = add5H;
	exports.default = {
		fromBig,
		split,
		toBig,
		shrSH,
		shrSL,
		rotrSH,
		rotrSL,
		rotrBH,
		rotrBL,
		rotr32H,
		rotr32L,
		rotlSH,
		rotlSL,
		rotlBH,
		rotlBL,
		add,
		add3L,
		add3H,
		add4L,
		add4H,
		add5H,
		add5L
	};
}));
//#endregion
//#region node_modules/@noble/curves/node_modules/@noble/hashes/sha2.js
var require_sha2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sha512_224 = exports.sha512_256 = exports.sha384 = exports.sha512 = exports.sha224 = exports.sha256 = exports.SHA512_256 = exports.SHA512_224 = exports.SHA384 = exports.SHA512 = exports.SHA224 = exports.SHA256 = void 0;
	/**
	* SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
	* SHA256 is the fastest hash implementable in JS, even faster than Blake3.
	* Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
	* [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
	* @module
	*/
	var _md_ts_1 = require__md();
	var u64 = require__u64();
	var utils_ts_1 = require_utils$1();
	/**
	* Round constants:
	* First 32 bits of fractional parts of the cube roots of the first 64 primes 2..311)
	*/
	var SHA256_K = /* @__PURE__ */ Uint32Array.from([
		1116352408,
		1899447441,
		3049323471,
		3921009573,
		961987163,
		1508970993,
		2453635748,
		2870763221,
		3624381080,
		310598401,
		607225278,
		1426881987,
		1925078388,
		2162078206,
		2614888103,
		3248222580,
		3835390401,
		4022224774,
		264347078,
		604807628,
		770255983,
		1249150122,
		1555081692,
		1996064986,
		2554220882,
		2821834349,
		2952996808,
		3210313671,
		3336571891,
		3584528711,
		113926993,
		338241895,
		666307205,
		773529912,
		1294757372,
		1396182291,
		1695183700,
		1986661051,
		2177026350,
		2456956037,
		2730485921,
		2820302411,
		3259730800,
		3345764771,
		3516065817,
		3600352804,
		4094571909,
		275423344,
		430227734,
		506948616,
		659060556,
		883997877,
		958139571,
		1322822218,
		1537002063,
		1747873779,
		1955562222,
		2024104815,
		2227730452,
		2361852424,
		2428436474,
		2756734187,
		3204031479,
		3329325298
	]);
	/** Reusable temporary buffer. "W" comes straight from spec. */
	var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
	var SHA256 = class extends _md_ts_1.HashMD {
		constructor(outputLen = 32) {
			super(64, outputLen, 8, false);
			this.A = _md_ts_1.SHA256_IV[0] | 0;
			this.B = _md_ts_1.SHA256_IV[1] | 0;
			this.C = _md_ts_1.SHA256_IV[2] | 0;
			this.D = _md_ts_1.SHA256_IV[3] | 0;
			this.E = _md_ts_1.SHA256_IV[4] | 0;
			this.F = _md_ts_1.SHA256_IV[5] | 0;
			this.G = _md_ts_1.SHA256_IV[6] | 0;
			this.H = _md_ts_1.SHA256_IV[7] | 0;
		}
		get() {
			const { A, B, C, D, E, F, G, H } = this;
			return [
				A,
				B,
				C,
				D,
				E,
				F,
				G,
				H
			];
		}
		set(A, B, C, D, E, F, G, H) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
			this.F = F | 0;
			this.G = G | 0;
			this.H = H | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA256_W[i] = view.getUint32(offset, false);
			for (let i = 16; i < 64; i++) {
				const W15 = SHA256_W[i - 15];
				const W2 = SHA256_W[i - 2];
				const s0 = (0, utils_ts_1.rotr)(W15, 7) ^ (0, utils_ts_1.rotr)(W15, 18) ^ W15 >>> 3;
				const s1 = (0, utils_ts_1.rotr)(W2, 17) ^ (0, utils_ts_1.rotr)(W2, 19) ^ W2 >>> 10;
				SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
			}
			let { A, B, C, D, E, F, G, H } = this;
			for (let i = 0; i < 64; i++) {
				const sigma1 = (0, utils_ts_1.rotr)(E, 6) ^ (0, utils_ts_1.rotr)(E, 11) ^ (0, utils_ts_1.rotr)(E, 25);
				const T1 = H + sigma1 + (0, _md_ts_1.Chi)(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
				const T2 = ((0, utils_ts_1.rotr)(A, 2) ^ (0, utils_ts_1.rotr)(A, 13) ^ (0, utils_ts_1.rotr)(A, 22)) + (0, _md_ts_1.Maj)(A, B, C) | 0;
				H = G;
				G = F;
				F = E;
				E = D + T1 | 0;
				D = C;
				C = B;
				B = A;
				A = T1 + T2 | 0;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			F = F + this.F | 0;
			G = G + this.G | 0;
			H = H + this.H | 0;
			this.set(A, B, C, D, E, F, G, H);
		}
		roundClean() {
			(0, utils_ts_1.clean)(SHA256_W);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.SHA256 = SHA256;
	var SHA224 = class extends SHA256 {
		constructor() {
			super(28);
			this.A = _md_ts_1.SHA224_IV[0] | 0;
			this.B = _md_ts_1.SHA224_IV[1] | 0;
			this.C = _md_ts_1.SHA224_IV[2] | 0;
			this.D = _md_ts_1.SHA224_IV[3] | 0;
			this.E = _md_ts_1.SHA224_IV[4] | 0;
			this.F = _md_ts_1.SHA224_IV[5] | 0;
			this.G = _md_ts_1.SHA224_IV[6] | 0;
			this.H = _md_ts_1.SHA224_IV[7] | 0;
		}
	};
	exports.SHA224 = SHA224;
	var K512 = /* @__PURE__ */ (() => u64.split([
		"0x428a2f98d728ae22",
		"0x7137449123ef65cd",
		"0xb5c0fbcfec4d3b2f",
		"0xe9b5dba58189dbbc",
		"0x3956c25bf348b538",
		"0x59f111f1b605d019",
		"0x923f82a4af194f9b",
		"0xab1c5ed5da6d8118",
		"0xd807aa98a3030242",
		"0x12835b0145706fbe",
		"0x243185be4ee4b28c",
		"0x550c7dc3d5ffb4e2",
		"0x72be5d74f27b896f",
		"0x80deb1fe3b1696b1",
		"0x9bdc06a725c71235",
		"0xc19bf174cf692694",
		"0xe49b69c19ef14ad2",
		"0xefbe4786384f25e3",
		"0x0fc19dc68b8cd5b5",
		"0x240ca1cc77ac9c65",
		"0x2de92c6f592b0275",
		"0x4a7484aa6ea6e483",
		"0x5cb0a9dcbd41fbd4",
		"0x76f988da831153b5",
		"0x983e5152ee66dfab",
		"0xa831c66d2db43210",
		"0xb00327c898fb213f",
		"0xbf597fc7beef0ee4",
		"0xc6e00bf33da88fc2",
		"0xd5a79147930aa725",
		"0x06ca6351e003826f",
		"0x142929670a0e6e70",
		"0x27b70a8546d22ffc",
		"0x2e1b21385c26c926",
		"0x4d2c6dfc5ac42aed",
		"0x53380d139d95b3df",
		"0x650a73548baf63de",
		"0x766a0abb3c77b2a8",
		"0x81c2c92e47edaee6",
		"0x92722c851482353b",
		"0xa2bfe8a14cf10364",
		"0xa81a664bbc423001",
		"0xc24b8b70d0f89791",
		"0xc76c51a30654be30",
		"0xd192e819d6ef5218",
		"0xd69906245565a910",
		"0xf40e35855771202a",
		"0x106aa07032bbd1b8",
		"0x19a4c116b8d2d0c8",
		"0x1e376c085141ab53",
		"0x2748774cdf8eeb99",
		"0x34b0bcb5e19b48a8",
		"0x391c0cb3c5c95a63",
		"0x4ed8aa4ae3418acb",
		"0x5b9cca4f7763e373",
		"0x682e6ff3d6b2b8a3",
		"0x748f82ee5defb2fc",
		"0x78a5636f43172f60",
		"0x84c87814a1f0ab72",
		"0x8cc702081a6439ec",
		"0x90befffa23631e28",
		"0xa4506cebde82bde9",
		"0xbef9a3f7b2c67915",
		"0xc67178f2e372532b",
		"0xca273eceea26619c",
		"0xd186b8c721c0c207",
		"0xeada7dd6cde0eb1e",
		"0xf57d4f7fee6ed178",
		"0x06f067aa72176fba",
		"0x0a637dc5a2c898a6",
		"0x113f9804bef90dae",
		"0x1b710b35131c471b",
		"0x28db77f523047d84",
		"0x32caab7b40c72493",
		"0x3c9ebe0a15c9bebc",
		"0x431d67c49c100d4c",
		"0x4cc5d4becb3e42b6",
		"0x597f299cfc657e2a",
		"0x5fcb6fab3ad6faec",
		"0x6c44198c4a475817"
	].map((n) => BigInt(n))))();
	var SHA512_Kh = /* @__PURE__ */ (() => K512[0])();
	var SHA512_Kl = /* @__PURE__ */ (() => K512[1])();
	var SHA512_W_H = /* @__PURE__ */ new Uint32Array(80);
	var SHA512_W_L = /* @__PURE__ */ new Uint32Array(80);
	var SHA512 = class extends _md_ts_1.HashMD {
		constructor(outputLen = 64) {
			super(128, outputLen, 16, false);
			this.Ah = _md_ts_1.SHA512_IV[0] | 0;
			this.Al = _md_ts_1.SHA512_IV[1] | 0;
			this.Bh = _md_ts_1.SHA512_IV[2] | 0;
			this.Bl = _md_ts_1.SHA512_IV[3] | 0;
			this.Ch = _md_ts_1.SHA512_IV[4] | 0;
			this.Cl = _md_ts_1.SHA512_IV[5] | 0;
			this.Dh = _md_ts_1.SHA512_IV[6] | 0;
			this.Dl = _md_ts_1.SHA512_IV[7] | 0;
			this.Eh = _md_ts_1.SHA512_IV[8] | 0;
			this.El = _md_ts_1.SHA512_IV[9] | 0;
			this.Fh = _md_ts_1.SHA512_IV[10] | 0;
			this.Fl = _md_ts_1.SHA512_IV[11] | 0;
			this.Gh = _md_ts_1.SHA512_IV[12] | 0;
			this.Gl = _md_ts_1.SHA512_IV[13] | 0;
			this.Hh = _md_ts_1.SHA512_IV[14] | 0;
			this.Hl = _md_ts_1.SHA512_IV[15] | 0;
		}
		get() {
			const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
			return [
				Ah,
				Al,
				Bh,
				Bl,
				Ch,
				Cl,
				Dh,
				Dl,
				Eh,
				El,
				Fh,
				Fl,
				Gh,
				Gl,
				Hh,
				Hl
			];
		}
		set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
			this.Ah = Ah | 0;
			this.Al = Al | 0;
			this.Bh = Bh | 0;
			this.Bl = Bl | 0;
			this.Ch = Ch | 0;
			this.Cl = Cl | 0;
			this.Dh = Dh | 0;
			this.Dl = Dl | 0;
			this.Eh = Eh | 0;
			this.El = El | 0;
			this.Fh = Fh | 0;
			this.Fl = Fl | 0;
			this.Gh = Gh | 0;
			this.Gl = Gl | 0;
			this.Hh = Hh | 0;
			this.Hl = Hl | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) {
				SHA512_W_H[i] = view.getUint32(offset);
				SHA512_W_L[i] = view.getUint32(offset += 4);
			}
			for (let i = 16; i < 80; i++) {
				const W15h = SHA512_W_H[i - 15] | 0;
				const W15l = SHA512_W_L[i - 15] | 0;
				const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
				const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
				const W2h = SHA512_W_H[i - 2] | 0;
				const W2l = SHA512_W_L[i - 2] | 0;
				const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
				const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
				const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
				const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
				SHA512_W_H[i] = SUMh | 0;
				SHA512_W_L[i] = SUMl | 0;
			}
			let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
			for (let i = 0; i < 80; i++) {
				const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
				const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
				const CHIh = Eh & Fh ^ ~Eh & Gh;
				const CHIl = El & Fl ^ ~El & Gl;
				const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
				const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
				const T1l = T1ll | 0;
				const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
				const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
				const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
				const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
				Hh = Gh | 0;
				Hl = Gl | 0;
				Gh = Fh | 0;
				Gl = Fl | 0;
				Fh = Eh | 0;
				Fl = El | 0;
				({h: Eh, l: El} = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
				Dh = Ch | 0;
				Dl = Cl | 0;
				Ch = Bh | 0;
				Cl = Bl | 0;
				Bh = Ah | 0;
				Bl = Al | 0;
				const All = u64.add3L(T1l, sigma0l, MAJl);
				Ah = u64.add3H(All, T1h, sigma0h, MAJh);
				Al = All | 0;
			}
			({h: Ah, l: Al} = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
			({h: Bh, l: Bl} = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
			({h: Ch, l: Cl} = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
			({h: Dh, l: Dl} = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
			({h: Eh, l: El} = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
			({h: Fh, l: Fl} = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
			({h: Gh, l: Gl} = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
			({h: Hh, l: Hl} = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
			this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
		}
		roundClean() {
			(0, utils_ts_1.clean)(SHA512_W_H, SHA512_W_L);
		}
		destroy() {
			(0, utils_ts_1.clean)(this.buffer);
			this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		}
	};
	exports.SHA512 = SHA512;
	var SHA384 = class extends SHA512 {
		constructor() {
			super(48);
			this.Ah = _md_ts_1.SHA384_IV[0] | 0;
			this.Al = _md_ts_1.SHA384_IV[1] | 0;
			this.Bh = _md_ts_1.SHA384_IV[2] | 0;
			this.Bl = _md_ts_1.SHA384_IV[3] | 0;
			this.Ch = _md_ts_1.SHA384_IV[4] | 0;
			this.Cl = _md_ts_1.SHA384_IV[5] | 0;
			this.Dh = _md_ts_1.SHA384_IV[6] | 0;
			this.Dl = _md_ts_1.SHA384_IV[7] | 0;
			this.Eh = _md_ts_1.SHA384_IV[8] | 0;
			this.El = _md_ts_1.SHA384_IV[9] | 0;
			this.Fh = _md_ts_1.SHA384_IV[10] | 0;
			this.Fl = _md_ts_1.SHA384_IV[11] | 0;
			this.Gh = _md_ts_1.SHA384_IV[12] | 0;
			this.Gl = _md_ts_1.SHA384_IV[13] | 0;
			this.Hh = _md_ts_1.SHA384_IV[14] | 0;
			this.Hl = _md_ts_1.SHA384_IV[15] | 0;
		}
	};
	exports.SHA384 = SHA384;
	/**
	* Truncated SHA512/256 and SHA512/224.
	* SHA512_IV is XORed with 0xa5a5a5a5a5a5a5a5, then used as "intermediary" IV of SHA512/t.
	* Then t hashes string to produce result IV.
	* See `test/misc/sha2-gen-iv.js`.
	*/
	/** SHA512/224 IV */
	var T224_IV = /* @__PURE__ */ Uint32Array.from([
		2352822216,
		424955298,
		1944164710,
		2312950998,
		502970286,
		855612546,
		1738396948,
		1479516111,
		258812777,
		2077511080,
		2011393907,
		79989058,
		1067287976,
		1780299464,
		286451373,
		2446758561
	]);
	/** SHA512/256 IV */
	var T256_IV = /* @__PURE__ */ Uint32Array.from([
		573645204,
		4230739756,
		2673172387,
		3360449730,
		596883563,
		1867755857,
		2520282905,
		1497426621,
		2519219938,
		2827943907,
		3193839141,
		1401305490,
		721525244,
		746961066,
		246885852,
		2177182882
	]);
	var SHA512_224 = class extends SHA512 {
		constructor() {
			super(28);
			this.Ah = T224_IV[0] | 0;
			this.Al = T224_IV[1] | 0;
			this.Bh = T224_IV[2] | 0;
			this.Bl = T224_IV[3] | 0;
			this.Ch = T224_IV[4] | 0;
			this.Cl = T224_IV[5] | 0;
			this.Dh = T224_IV[6] | 0;
			this.Dl = T224_IV[7] | 0;
			this.Eh = T224_IV[8] | 0;
			this.El = T224_IV[9] | 0;
			this.Fh = T224_IV[10] | 0;
			this.Fl = T224_IV[11] | 0;
			this.Gh = T224_IV[12] | 0;
			this.Gl = T224_IV[13] | 0;
			this.Hh = T224_IV[14] | 0;
			this.Hl = T224_IV[15] | 0;
		}
	};
	exports.SHA512_224 = SHA512_224;
	var SHA512_256 = class extends SHA512 {
		constructor() {
			super(32);
			this.Ah = T256_IV[0] | 0;
			this.Al = T256_IV[1] | 0;
			this.Bh = T256_IV[2] | 0;
			this.Bl = T256_IV[3] | 0;
			this.Ch = T256_IV[4] | 0;
			this.Cl = T256_IV[5] | 0;
			this.Dh = T256_IV[6] | 0;
			this.Dl = T256_IV[7] | 0;
			this.Eh = T256_IV[8] | 0;
			this.El = T256_IV[9] | 0;
			this.Fh = T256_IV[10] | 0;
			this.Fl = T256_IV[11] | 0;
			this.Gh = T256_IV[12] | 0;
			this.Gl = T256_IV[13] | 0;
			this.Hh = T256_IV[14] | 0;
			this.Hl = T256_IV[15] | 0;
		}
	};
	exports.SHA512_256 = SHA512_256;
	/**
	* SHA2-256 hash function from RFC 4634.
	*
	* It is the fastest JS hash, even faster than Blake3.
	* To break sha256 using birthday attack, attackers need to try 2^128 hashes.
	* BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
	*/
	exports.sha256 = (0, utils_ts_1.createHasher)(() => new SHA256());
	/** SHA2-224 hash function from RFC 4634 */
	exports.sha224 = (0, utils_ts_1.createHasher)(() => new SHA224());
	/** SHA2-512 hash function from RFC 4634. */
	exports.sha512 = (0, utils_ts_1.createHasher)(() => new SHA512());
	/** SHA2-384 hash function from RFC 4634. */
	exports.sha384 = (0, utils_ts_1.createHasher)(() => new SHA384());
	/**
	* SHA2-512/256 "truncated" hash function, with improved resistance to length extension attacks.
	* See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
	*/
	exports.sha512_256 = (0, utils_ts_1.createHasher)(() => new SHA512_256());
	/**
	* SHA2-512/224 "truncated" hash function, with improved resistance to length extension attacks.
	* See the paper on [truncated SHA512](https://eprint.iacr.org/2010/548.pdf).
	*/
	exports.sha512_224 = (0, utils_ts_1.createHasher)(() => new SHA512_224());
}));
//#endregion
//#region node_modules/@noble/curves/node_modules/@noble/hashes/hmac.js
var require_hmac = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hmac = exports.HMAC = void 0;
	/**
	* HMAC: RFC2104 message authentication code.
	* @module
	*/
	var utils_ts_1 = require_utils$1();
	var HMAC = class extends utils_ts_1.Hash {
		constructor(hash, _key) {
			super();
			this.finished = false;
			this.destroyed = false;
			(0, utils_ts_1.ahash)(hash);
			const key = (0, utils_ts_1.toBytes)(_key);
			this.iHash = hash.create();
			if (typeof this.iHash.update !== "function") throw new Error("Expected instance of class which extends utils.Hash");
			this.blockLen = this.iHash.blockLen;
			this.outputLen = this.iHash.outputLen;
			const blockLen = this.blockLen;
			const pad = new Uint8Array(blockLen);
			pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
			for (let i = 0; i < pad.length; i++) pad[i] ^= 54;
			this.iHash.update(pad);
			this.oHash = hash.create();
			for (let i = 0; i < pad.length; i++) pad[i] ^= 106;
			this.oHash.update(pad);
			(0, utils_ts_1.clean)(pad);
		}
		update(buf) {
			(0, utils_ts_1.aexists)(this);
			this.iHash.update(buf);
			return this;
		}
		digestInto(out) {
			(0, utils_ts_1.aexists)(this);
			(0, utils_ts_1.abytes)(out, this.outputLen);
			this.finished = true;
			this.iHash.digestInto(out);
			this.oHash.update(out);
			this.oHash.digestInto(out);
			this.destroy();
		}
		digest() {
			const out = new Uint8Array(this.oHash.outputLen);
			this.digestInto(out);
			return out;
		}
		_cloneInto(to) {
			to || (to = Object.create(Object.getPrototypeOf(this), {}));
			const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
			to = to;
			to.finished = finished;
			to.destroyed = destroyed;
			to.blockLen = blockLen;
			to.outputLen = outputLen;
			to.oHash = oHash._cloneInto(to.oHash);
			to.iHash = iHash._cloneInto(to.iHash);
			return to;
		}
		clone() {
			return this._cloneInto();
		}
		destroy() {
			this.destroyed = true;
			this.oHash.destroy();
			this.iHash.destroy();
		}
	};
	exports.HMAC = HMAC;
	/**
	* HMAC: RFC2104 message authentication code.
	* @param hash - function that would be used e.g. sha256
	* @param key - message key
	* @param message - message data
	* @example
	* import { hmac } from '@noble/hashes/hmac';
	* import { sha256 } from '@noble/hashes/sha2';
	* const mac1 = hmac(sha256, 'key', 'message');
	*/
	var hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
	exports.hmac = hmac;
	exports.hmac.create = (hash, key) => new HMAC(hash, key);
}));
//#endregion
//#region node_modules/@noble/curves/abstract/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Hex, bytes and number utilities.
	* @module
	*/
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.notImplemented = exports.bitMask = void 0;
	exports.isBytes = isBytes;
	exports.abytes = abytes;
	exports.abool = abool;
	exports.numberToHexUnpadded = numberToHexUnpadded;
	exports.hexToNumber = hexToNumber;
	exports.bytesToHex = bytesToHex;
	exports.hexToBytes = hexToBytes;
	exports.bytesToNumberBE = bytesToNumberBE;
	exports.bytesToNumberLE = bytesToNumberLE;
	exports.numberToBytesBE = numberToBytesBE;
	exports.numberToBytesLE = numberToBytesLE;
	exports.numberToVarBytesBE = numberToVarBytesBE;
	exports.ensureBytes = ensureBytes;
	exports.concatBytes = concatBytes;
	exports.equalBytes = equalBytes;
	exports.utf8ToBytes = utf8ToBytes;
	exports.inRange = inRange;
	exports.aInRange = aInRange;
	exports.bitLen = bitLen;
	exports.bitGet = bitGet;
	exports.bitSet = bitSet;
	exports.createHmacDrbg = createHmacDrbg;
	exports.validateObject = validateObject;
	exports.memoized = memoized;
	var _0n = /* @__PURE__ */ BigInt(0);
	var _1n = /* @__PURE__ */ BigInt(1);
	function isBytes(a) {
		return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
	}
	function abytes(item) {
		if (!isBytes(item)) throw new Error("Uint8Array expected");
	}
	function abool(title, value) {
		if (typeof value !== "boolean") throw new Error(title + " boolean expected, got " + value);
	}
	function numberToHexUnpadded(num) {
		const hex = num.toString(16);
		return hex.length & 1 ? "0" + hex : hex;
	}
	function hexToNumber(hex) {
		if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
		return hex === "" ? _0n : BigInt("0x" + hex);
	}
	var hasHexBuiltin = typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function";
	var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
	/**
	* Convert byte array to hex string. Uses built-in function, when available.
	* @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
	*/
	function bytesToHex(bytes) {
		abytes(bytes);
		if (hasHexBuiltin) return bytes.toHex();
		let hex = "";
		for (let i = 0; i < bytes.length; i++) hex += hexes[bytes[i]];
		return hex;
	}
	var asciis = {
		_0: 48,
		_9: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
	function asciiToBase16(ch) {
		if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0;
		if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10);
		if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10);
	}
	/**
	* Convert hex string to byte array. Uses built-in function, when available.
	* @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
	*/
	function hexToBytes(hex) {
		if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
		if (hasHexBuiltin) return Uint8Array.fromHex(hex);
		const hl = hex.length;
		const al = hl / 2;
		if (hl % 2) throw new Error("hex string expected, got unpadded hex of length " + hl);
		const array = new Uint8Array(al);
		for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
			const n1 = asciiToBase16(hex.charCodeAt(hi));
			const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
			if (n1 === void 0 || n2 === void 0) {
				const char = hex[hi] + hex[hi + 1];
				throw new Error("hex string expected, got non-hex character \"" + char + "\" at index " + hi);
			}
			array[ai] = n1 * 16 + n2;
		}
		return array;
	}
	function bytesToNumberBE(bytes) {
		return hexToNumber(bytesToHex(bytes));
	}
	function bytesToNumberLE(bytes) {
		abytes(bytes);
		return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
	}
	function numberToBytesBE(n, len) {
		return hexToBytes(n.toString(16).padStart(len * 2, "0"));
	}
	function numberToBytesLE(n, len) {
		return numberToBytesBE(n, len).reverse();
	}
	function numberToVarBytesBE(n) {
		return hexToBytes(numberToHexUnpadded(n));
	}
	/**
	* Takes hex string or Uint8Array, converts to Uint8Array.
	* Validates output length.
	* Will throw error for other types.
	* @param title descriptive title for an error e.g. 'private key'
	* @param hex hex string or Uint8Array
	* @param expectedLength optional, will compare to result array's length
	* @returns
	*/
	function ensureBytes(title, hex, expectedLength) {
		let res;
		if (typeof hex === "string") try {
			res = hexToBytes(hex);
		} catch (e) {
			throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
		}
		else if (isBytes(hex)) res = Uint8Array.from(hex);
		else throw new Error(title + " must be hex string or Uint8Array");
		const len = res.length;
		if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(title + " of length " + expectedLength + " expected, got " + len);
		return res;
	}
	/**
	* Copies several Uint8Arrays into one.
	*/
	function concatBytes(...arrays) {
		let sum = 0;
		for (let i = 0; i < arrays.length; i++) {
			const a = arrays[i];
			abytes(a);
			sum += a.length;
		}
		const res = new Uint8Array(sum);
		for (let i = 0, pad = 0; i < arrays.length; i++) {
			const a = arrays[i];
			res.set(a, pad);
			pad += a.length;
		}
		return res;
	}
	function equalBytes(a, b) {
		if (a.length !== b.length) return false;
		let diff = 0;
		for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
		return diff === 0;
	}
	/**
	* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
	*/
	function utf8ToBytes(str) {
		if (typeof str !== "string") throw new Error("string expected");
		return new Uint8Array(new TextEncoder().encode(str));
	}
	var isPosBig = (n) => typeof n === "bigint" && _0n <= n;
	function inRange(n, min, max) {
		return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
	}
	/**
	* Asserts min <= n < max. NOTE: It's < max and not <= max.
	* @example
	* aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
	*/
	function aInRange(title, n, min, max) {
		if (!inRange(n, min, max)) throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
	}
	/**
	* Calculates amount of bits in a bigint.
	* Same as `n.toString(2).length`
	* TODO: merge with nLength in modular
	*/
	function bitLen(n) {
		let len = 0;
		for (; n > _0n; n >>= _1n, len += 1);
		return len;
	}
	/**
	* Gets single bit at position.
	* NOTE: first bit position is 0 (same as arrays)
	* Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
	*/
	function bitGet(n, pos) {
		return n >> BigInt(pos) & _1n;
	}
	/**
	* Sets single bit at position.
	*/
	function bitSet(n, pos, value) {
		return n | (value ? _1n : _0n) << BigInt(pos);
	}
	/**
	* Calculate mask for N bits. Not using ** operator with bigints because of old engines.
	* Same as BigInt(`0b${Array(i).fill('1').join('')}`)
	*/
	var bitMask = (n) => (_1n << BigInt(n)) - _1n;
	exports.bitMask = bitMask;
	var u8n = (len) => new Uint8Array(len);
	var u8fr = (arr) => Uint8Array.from(arr);
	/**
	* Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
	* @returns function that will call DRBG until 2nd arg returns something meaningful
	* @example
	*   const drbg = createHmacDRBG<Key>(32, 32, hmac);
	*   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
	*/
	function createHmacDrbg(hashLen, qByteLen, hmacFn) {
		if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
		if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
		if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
		let v = u8n(hashLen);
		let k = u8n(hashLen);
		let i = 0;
		const reset = () => {
			v.fill(1);
			k.fill(0);
			i = 0;
		};
		const h = (...b) => hmacFn(k, v, ...b);
		const reseed = (seed = u8n(0)) => {
			k = h(u8fr([0]), seed);
			v = h();
			if (seed.length === 0) return;
			k = h(u8fr([1]), seed);
			v = h();
		};
		const gen = () => {
			if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
			let len = 0;
			const out = [];
			while (len < qByteLen) {
				v = h();
				const sl = v.slice();
				out.push(sl);
				len += v.length;
			}
			return concatBytes(...out);
		};
		const genUntil = (seed, pred) => {
			reset();
			reseed(seed);
			let res = void 0;
			while (!(res = pred(gen()))) reseed();
			reset();
			return res;
		};
		return genUntil;
	}
	var validatorFns = {
		bigint: (val) => typeof val === "bigint",
		function: (val) => typeof val === "function",
		boolean: (val) => typeof val === "boolean",
		string: (val) => typeof val === "string",
		stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
		isSafeInteger: (val) => Number.isSafeInteger(val),
		array: (val) => Array.isArray(val),
		field: (val, object) => object.Fp.isValid(val),
		hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
	};
	function validateObject(object, validators, optValidators = {}) {
		const checkField = (fieldName, type, isOptional) => {
			const checkVal = validatorFns[type];
			if (typeof checkVal !== "function") throw new Error("invalid validator function");
			const val = object[fieldName];
			if (isOptional && val === void 0) return;
			if (!checkVal(val, object)) throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
		};
		for (const [fieldName, type] of Object.entries(validators)) checkField(fieldName, type, false);
		for (const [fieldName, type] of Object.entries(optValidators)) checkField(fieldName, type, true);
		return object;
	}
	/**
	* throws not implemented error
	*/
	var notImplemented = () => {
		throw new Error("not implemented");
	};
	exports.notImplemented = notImplemented;
	/**
	* Memoizes (caches) computation result.
	* Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
	*/
	function memoized(fn) {
		const map = /* @__PURE__ */ new WeakMap();
		return (arg, ...args) => {
			const val = map.get(arg);
			if (val !== void 0) return val;
			const computed = fn(arg, ...args);
			map.set(arg, computed);
			return computed;
		};
	}
}));
//#endregion
//#region node_modules/@noble/curves/abstract/modular.js
var require_modular = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isNegativeLE = void 0;
	exports.mod = mod;
	exports.pow = pow;
	exports.pow2 = pow2;
	exports.invert = invert;
	exports.tonelliShanks = tonelliShanks;
	exports.FpSqrt = FpSqrt;
	exports.validateField = validateField;
	exports.FpPow = FpPow;
	exports.FpInvertBatch = FpInvertBatch;
	exports.FpDiv = FpDiv;
	exports.FpLegendre = FpLegendre;
	exports.FpIsSquare = FpIsSquare;
	exports.nLength = nLength;
	exports.Field = Field;
	exports.FpSqrtOdd = FpSqrtOdd;
	exports.FpSqrtEven = FpSqrtEven;
	exports.hashToPrivateScalar = hashToPrivateScalar;
	exports.getFieldBytesLength = getFieldBytesLength;
	exports.getMinHashLength = getMinHashLength;
	exports.mapHashToField = mapHashToField;
	/**
	* Utils for modular division and finite fields.
	* A finite field over 11 is integer number operations `mod 11`.
	* There is no division: it is replaced by modular multiplicative inverse.
	* @module
	*/
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	var utils_1 = require_utils$1();
	var utils_ts_1 = require_utils();
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	var _2n = /* @__PURE__ */ BigInt(2);
	var _3n = /* @__PURE__ */ BigInt(3);
	var _4n = /* @__PURE__ */ BigInt(4);
	var _5n = /* @__PURE__ */ BigInt(5);
	var _8n = /* @__PURE__ */ BigInt(8);
	function mod(a, b) {
		const result = a % b;
		return result >= _0n ? result : b + result;
	}
	/**
	* Efficiently raise num to power and do modular division.
	* Unsafe in some contexts: uses ladder, so can expose bigint bits.
	* TODO: remove.
	* @example
	* pow(2n, 6n, 11n) // 64n % 11n == 9n
	*/
	function pow(num, power, modulo) {
		return FpPow(Field(modulo), num, power);
	}
	/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
	function pow2(x, power, modulo) {
		let res = x;
		while (power-- > _0n) {
			res *= res;
			res %= modulo;
		}
		return res;
	}
	/**
	* Inverses number over modulo.
	* Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
	*/
	function invert(number, modulo) {
		if (number === _0n) throw new Error("invert: expected non-zero number");
		if (modulo <= _0n) throw new Error("invert: expected positive modulus, got " + modulo);
		let a = mod(number, modulo);
		let b = modulo;
		let x = _0n, y = _1n, u = _1n, v = _0n;
		while (a !== _0n) {
			const q = b / a;
			const r = b % a;
			const m = x - u * q;
			const n = y - v * q;
			b = a, a = r, x = u, y = v, u = m, v = n;
		}
		if (b !== _1n) throw new Error("invert: does not exist");
		return mod(x, modulo);
	}
	function sqrt3mod4(Fp, n) {
		const p1div4 = (Fp.ORDER + _1n) / _4n;
		const root = Fp.pow(n, p1div4);
		if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
		return root;
	}
	function sqrt5mod8(Fp, n) {
		const p5div8 = (Fp.ORDER - _5n) / _8n;
		const n2 = Fp.mul(n, _2n);
		const v = Fp.pow(n2, p5div8);
		const nv = Fp.mul(n, v);
		const i = Fp.mul(Fp.mul(nv, _2n), v);
		const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
		if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
		return root;
	}
	/**
	* Tonelli-Shanks square root search algorithm.
	* 1. https://eprint.iacr.org/2012/685.pdf (page 12)
	* 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
	* @param P field order
	* @returns function that takes field Fp (created from P) and number n
	*/
	function tonelliShanks(P) {
		if (P < BigInt(3)) throw new Error("sqrt is not defined for small field");
		let Q = P - _1n;
		let S = 0;
		while (Q % _2n === _0n) {
			Q /= _2n;
			S++;
		}
		let Z = _2n;
		const _Fp = Field(P);
		while (FpLegendre(_Fp, Z) === 1) if (Z++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
		if (S === 1) return sqrt3mod4;
		let cc = _Fp.pow(Z, Q);
		const Q1div2 = (Q + _1n) / _2n;
		return function tonelliSlow(Fp, n) {
			if (Fp.is0(n)) return n;
			if (FpLegendre(Fp, n) !== 1) throw new Error("Cannot find square root");
			let M = S;
			let c = Fp.mul(Fp.ONE, cc);
			let t = Fp.pow(n, Q);
			let R = Fp.pow(n, Q1div2);
			while (!Fp.eql(t, Fp.ONE)) {
				if (Fp.is0(t)) return Fp.ZERO;
				let i = 1;
				let t_tmp = Fp.sqr(t);
				while (!Fp.eql(t_tmp, Fp.ONE)) {
					i++;
					t_tmp = Fp.sqr(t_tmp);
					if (i === M) throw new Error("Cannot find square root");
				}
				const exponent = _1n << BigInt(M - i - 1);
				const b = Fp.pow(c, exponent);
				M = i;
				c = Fp.sqr(b);
				t = Fp.mul(t, c);
				R = Fp.mul(R, b);
			}
			return R;
		};
	}
	/**
	* Square root for a finite field. Will try optimized versions first:
	*
	* 1. P ≡ 3 (mod 4)
	* 2. P ≡ 5 (mod 8)
	* 3. Tonelli-Shanks algorithm
	*
	* Different algorithms can give different roots, it is up to user to decide which one they want.
	* For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
	*/
	function FpSqrt(P) {
		if (P % _4n === _3n) return sqrt3mod4;
		if (P % _8n === _5n) return sqrt5mod8;
		return tonelliShanks(P);
	}
	var isNegativeLE = (num, modulo) => (mod(num, modulo) & _1n) === _1n;
	exports.isNegativeLE = isNegativeLE;
	var FIELD_FIELDS = [
		"create",
		"isValid",
		"is0",
		"neg",
		"inv",
		"sqrt",
		"sqr",
		"eql",
		"add",
		"sub",
		"mul",
		"pow",
		"div",
		"addN",
		"subN",
		"mulN",
		"sqrN"
	];
	function validateField(field) {
		const opts = FIELD_FIELDS.reduce((map, val) => {
			map[val] = "function";
			return map;
		}, {
			ORDER: "bigint",
			MASK: "bigint",
			BYTES: "isSafeInteger",
			BITS: "isSafeInteger"
		});
		return (0, utils_ts_1.validateObject)(field, opts);
	}
	/**
	* Same as `pow` but for Fp: non-constant-time.
	* Unsafe in some contexts: uses ladder, so can expose bigint bits.
	*/
	function FpPow(Fp, num, power) {
		if (power < _0n) throw new Error("invalid exponent, negatives unsupported");
		if (power === _0n) return Fp.ONE;
		if (power === _1n) return num;
		let p = Fp.ONE;
		let d = num;
		while (power > _0n) {
			if (power & _1n) p = Fp.mul(p, d);
			d = Fp.sqr(d);
			power >>= _1n;
		}
		return p;
	}
	/**
	* Efficiently invert an array of Field elements.
	* Exception-free. Will return `undefined` for 0 elements.
	* @param passZero map 0 to 0 (instead of undefined)
	*/
	function FpInvertBatch(Fp, nums, passZero = false) {
		const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
		const multipliedAcc = nums.reduce((acc, num, i) => {
			if (Fp.is0(num)) return acc;
			inverted[i] = acc;
			return Fp.mul(acc, num);
		}, Fp.ONE);
		const invertedAcc = Fp.inv(multipliedAcc);
		nums.reduceRight((acc, num, i) => {
			if (Fp.is0(num)) return acc;
			inverted[i] = Fp.mul(acc, inverted[i]);
			return Fp.mul(acc, num);
		}, invertedAcc);
		return inverted;
	}
	function FpDiv(Fp, lhs, rhs) {
		return Fp.mul(lhs, typeof rhs === "bigint" ? invert(rhs, Fp.ORDER) : Fp.inv(rhs));
	}
	/**
	* Legendre symbol.
	* Legendre constant is used to calculate Legendre symbol (a | p)
	* which denotes the value of a^((p-1)/2) (mod p).
	*
	* * (a | p) ≡ 1    if a is a square (mod p), quadratic residue
	* * (a | p) ≡ -1   if a is not a square (mod p), quadratic non residue
	* * (a | p) ≡ 0    if a ≡ 0 (mod p)
	*/
	function FpLegendre(Fp, n) {
		const p1mod2 = (Fp.ORDER - _1n) / _2n;
		const powered = Fp.pow(n, p1mod2);
		const yes = Fp.eql(powered, Fp.ONE);
		const zero = Fp.eql(powered, Fp.ZERO);
		const no = Fp.eql(powered, Fp.neg(Fp.ONE));
		if (!yes && !zero && !no) throw new Error("invalid Legendre symbol result");
		return yes ? 1 : zero ? 0 : -1;
	}
	function FpIsSquare(Fp, n) {
		return FpLegendre(Fp, n) === 1;
	}
	function nLength(n, nBitLength) {
		if (nBitLength !== void 0) (0, utils_1.anumber)(nBitLength);
		const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
		return {
			nBitLength: _nBitLength,
			nByteLength: Math.ceil(_nBitLength / 8)
		};
	}
	/**
	* Initializes a finite field over prime.
	* Major performance optimizations:
	* * a) denormalized operations like mulN instead of mul
	* * b) same object shape: never add or remove keys
	* * c) Object.freeze
	* Fragile: always run a benchmark on a change.
	* Security note: operations don't check 'isValid' for all elements for performance reasons,
	* it is caller responsibility to check this.
	* This is low-level code, please make sure you know what you're doing.
	* @param ORDER prime positive bigint
	* @param bitLen how many bits the field consumes
	* @param isLE (def: false) if encoding / decoding should be in little-endian
	* @param redef optional faster redefinitions of sqrt and other methods
	*/
	function Field(ORDER, bitLen, isLE = false, redef = {}) {
		if (ORDER <= _0n) throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
		const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
		if (BYTES > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
		let sqrtP;
		const f = Object.freeze({
			ORDER,
			isLE,
			BITS,
			BYTES,
			MASK: (0, utils_ts_1.bitMask)(BITS),
			ZERO: _0n,
			ONE: _1n,
			create: (num) => mod(num, ORDER),
			isValid: (num) => {
				if (typeof num !== "bigint") throw new Error("invalid field element: expected bigint, got " + typeof num);
				return _0n <= num && num < ORDER;
			},
			is0: (num) => num === _0n,
			isOdd: (num) => (num & _1n) === _1n,
			neg: (num) => mod(-num, ORDER),
			eql: (lhs, rhs) => lhs === rhs,
			sqr: (num) => mod(num * num, ORDER),
			add: (lhs, rhs) => mod(lhs + rhs, ORDER),
			sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
			mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
			pow: (num, power) => FpPow(f, num, power),
			div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
			sqrN: (num) => num * num,
			addN: (lhs, rhs) => lhs + rhs,
			subN: (lhs, rhs) => lhs - rhs,
			mulN: (lhs, rhs) => lhs * rhs,
			inv: (num) => invert(num, ORDER),
			sqrt: redef.sqrt || ((n) => {
				if (!sqrtP) sqrtP = FpSqrt(ORDER);
				return sqrtP(f, n);
			}),
			toBytes: (num) => isLE ? (0, utils_ts_1.numberToBytesLE)(num, BYTES) : (0, utils_ts_1.numberToBytesBE)(num, BYTES),
			fromBytes: (bytes) => {
				if (bytes.length !== BYTES) throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
				return isLE ? (0, utils_ts_1.bytesToNumberLE)(bytes) : (0, utils_ts_1.bytesToNumberBE)(bytes);
			},
			invertBatch: (lst) => FpInvertBatch(f, lst),
			cmov: (a, b, c) => c ? b : a
		});
		return Object.freeze(f);
	}
	function FpSqrtOdd(Fp, elm) {
		if (!Fp.isOdd) throw new Error("Field doesn't have isOdd");
		const root = Fp.sqrt(elm);
		return Fp.isOdd(root) ? root : Fp.neg(root);
	}
	function FpSqrtEven(Fp, elm) {
		if (!Fp.isOdd) throw new Error("Field doesn't have isOdd");
		const root = Fp.sqrt(elm);
		return Fp.isOdd(root) ? Fp.neg(root) : root;
	}
	/**
	* "Constant-time" private key generation utility.
	* Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
	* Which makes it slightly more biased, less secure.
	* @deprecated use `mapKeyToField` instead
	*/
	function hashToPrivateScalar(hash, groupOrder, isLE = false) {
		hash = (0, utils_ts_1.ensureBytes)("privateHash", hash);
		const hashLen = hash.length;
		const minLen = nLength(groupOrder).nByteLength + 8;
		if (minLen < 24 || hashLen < minLen || hashLen > 1024) throw new Error("hashToPrivateScalar: expected " + minLen + "-1024 bytes of input, got " + hashLen);
		return mod(isLE ? (0, utils_ts_1.bytesToNumberLE)(hash) : (0, utils_ts_1.bytesToNumberBE)(hash), groupOrder - _1n) + _1n;
	}
	/**
	* Returns total number of bytes consumed by the field element.
	* For example, 32 bytes for usual 256-bit weierstrass curve.
	* @param fieldOrder number of field elements, usually CURVE.n
	* @returns byte length of field
	*/
	function getFieldBytesLength(fieldOrder) {
		if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
		const bitLength = fieldOrder.toString(2).length;
		return Math.ceil(bitLength / 8);
	}
	/**
	* Returns minimal amount of bytes that can be safely reduced
	* by field order.
	* Should be 2^-128 for 128-bit curve such as P256.
	* @param fieldOrder number of field elements, usually CURVE.n
	* @returns byte length of target hash
	*/
	function getMinHashLength(fieldOrder) {
		const length = getFieldBytesLength(fieldOrder);
		return length + Math.ceil(length / 2);
	}
	/**
	* "Constant-time" private key generation utility.
	* Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
	* and convert them into private scalar, with the modulo bias being negligible.
	* Needs at least 48 bytes of input for 32-byte private key.
	* https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
	* FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
	* RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
	* @param hash hash output from SHA3 or a similar function
	* @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
	* @param isLE interpret hash bytes as LE num
	* @returns valid private scalar
	*/
	function mapHashToField(key, fieldOrder, isLE = false) {
		const len = key.length;
		const fieldLen = getFieldBytesLength(fieldOrder);
		const minLen = getMinHashLength(fieldOrder);
		if (len < 16 || len < minLen || len > 1024) throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
		const reduced = mod(isLE ? (0, utils_ts_1.bytesToNumberLE)(key) : (0, utils_ts_1.bytesToNumberBE)(key), fieldOrder - _1n) + _1n;
		return isLE ? (0, utils_ts_1.numberToBytesLE)(reduced, fieldLen) : (0, utils_ts_1.numberToBytesBE)(reduced, fieldLen);
	}
}));
//#endregion
//#region node_modules/@noble/curves/abstract/curve.js
var require_curve = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wNAF = wNAF;
	exports.pippenger = pippenger;
	exports.precomputeMSMUnsafe = precomputeMSMUnsafe;
	exports.validateBasic = validateBasic;
	/**
	* Methods for elliptic curve multiplication by scalars.
	* Contains wNAF, pippenger
	* @module
	*/
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	var modular_ts_1 = require_modular();
	var utils_ts_1 = require_utils();
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	function constTimeNegate(condition, item) {
		const neg = item.negate();
		return condition ? neg : item;
	}
	function validateW(W, bits) {
		if (!Number.isSafeInteger(W) || W <= 0 || W > bits) throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
	}
	function calcWOpts(W, scalarBits) {
		validateW(W, scalarBits);
		const windows = Math.ceil(scalarBits / W) + 1;
		const windowSize = 2 ** (W - 1);
		const maxNumber = 2 ** W;
		return {
			windows,
			windowSize,
			mask: (0, utils_ts_1.bitMask)(W),
			maxNumber,
			shiftBy: BigInt(W)
		};
	}
	function calcOffsets(n, window, wOpts) {
		const { windowSize, mask, maxNumber, shiftBy } = wOpts;
		let wbits = Number(n & mask);
		let nextN = n >> shiftBy;
		if (wbits > windowSize) {
			wbits -= maxNumber;
			nextN += _1n;
		}
		const offsetStart = window * windowSize;
		const offset = offsetStart + Math.abs(wbits) - 1;
		const isZero = wbits === 0;
		const isNeg = wbits < 0;
		const isNegF = window % 2 !== 0;
		return {
			nextN,
			offset,
			isZero,
			isNeg,
			isNegF,
			offsetF: offsetStart
		};
	}
	function validateMSMPoints(points, c) {
		if (!Array.isArray(points)) throw new Error("array expected");
		points.forEach((p, i) => {
			if (!(p instanceof c)) throw new Error("invalid point at index " + i);
		});
	}
	function validateMSMScalars(scalars, field) {
		if (!Array.isArray(scalars)) throw new Error("array of scalars expected");
		scalars.forEach((s, i) => {
			if (!field.isValid(s)) throw new Error("invalid scalar at index " + i);
		});
	}
	var pointPrecomputes = /* @__PURE__ */ new WeakMap();
	var pointWindowSizes = /* @__PURE__ */ new WeakMap();
	function getW(P) {
		return pointWindowSizes.get(P) || 1;
	}
	/**
	* Elliptic curve multiplication of Point by scalar. Fragile.
	* Scalars should always be less than curve order: this should be checked inside of a curve itself.
	* Creates precomputation tables for fast multiplication:
	* - private scalar is split by fixed size windows of W bits
	* - every window point is collected from window's table & added to accumulator
	* - since windows are different, same point inside tables won't be accessed more than once per calc
	* - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
	* - +1 window is neccessary for wNAF
	* - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
	*
	* @todo Research returning 2d JS array of windows, instead of a single window.
	* This would allow windows to be in different memory locations
	*/
	function wNAF(c, bits) {
		return {
			constTimeNegate,
			hasPrecomputes(elm) {
				return getW(elm) !== 1;
			},
			unsafeLadder(elm, n, p = c.ZERO) {
				let d = elm;
				while (n > _0n) {
					if (n & _1n) p = p.add(d);
					d = d.double();
					n >>= _1n;
				}
				return p;
			},
			/**
			* Creates a wNAF precomputation window. Used for caching.
			* Default window size is set by `utils.precompute()` and is equal to 8.
			* Number of precomputed points depends on the curve size:
			* 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
			* - 𝑊 is the window size
			* - 𝑛 is the bitlength of the curve order.
			* For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
			* @param elm Point instance
			* @param W window size
			* @returns precomputed point tables flattened to a single array
			*/
			precomputeWindow(elm, W) {
				const { windows, windowSize } = calcWOpts(W, bits);
				const points = [];
				let p = elm;
				let base = p;
				for (let window = 0; window < windows; window++) {
					base = p;
					points.push(base);
					for (let i = 1; i < windowSize; i++) {
						base = base.add(p);
						points.push(base);
					}
					p = base.double();
				}
				return points;
			},
			/**
			* Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
			* @param W window size
			* @param precomputes precomputed tables
			* @param n scalar (we don't check here, but should be less than curve order)
			* @returns real and fake (for const-time) points
			*/
			wNAF(W, precomputes, n) {
				let p = c.ZERO;
				let f = c.BASE;
				const wo = calcWOpts(W, bits);
				for (let window = 0; window < wo.windows; window++) {
					const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n, window, wo);
					n = nextN;
					if (isZero) f = f.add(constTimeNegate(isNegF, precomputes[offsetF]));
					else p = p.add(constTimeNegate(isNeg, precomputes[offset]));
				}
				return {
					p,
					f
				};
			},
			/**
			* Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
			* @param W window size
			* @param precomputes precomputed tables
			* @param n scalar (we don't check here, but should be less than curve order)
			* @param acc accumulator point to add result of multiplication
			* @returns point
			*/
			wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
				const wo = calcWOpts(W, bits);
				for (let window = 0; window < wo.windows; window++) {
					if (n === _0n) break;
					const { nextN, offset, isZero, isNeg } = calcOffsets(n, window, wo);
					n = nextN;
					if (isZero) continue;
					else {
						const item = precomputes[offset];
						acc = acc.add(isNeg ? item.negate() : item);
					}
				}
				return acc;
			},
			getPrecomputes(W, P, transform) {
				let comp = pointPrecomputes.get(P);
				if (!comp) {
					comp = this.precomputeWindow(P, W);
					if (W !== 1) pointPrecomputes.set(P, transform(comp));
				}
				return comp;
			},
			wNAFCached(P, n, transform) {
				const W = getW(P);
				return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
			},
			wNAFCachedUnsafe(P, n, transform, prev) {
				const W = getW(P);
				if (W === 1) return this.unsafeLadder(P, n, prev);
				return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
			},
			setWindowSize(P, W) {
				validateW(W, bits);
				pointWindowSizes.set(P, W);
				pointPrecomputes.delete(P);
			}
		};
	}
	/**
	* Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
	* 30x faster vs naive addition on L=4096, 10x faster than precomputes.
	* For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
	* Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
	* @param c Curve Point constructor
	* @param fieldN field over CURVE.N - important that it's not over CURVE.P
	* @param points array of L curve points
	* @param scalars array of L scalars (aka private keys / bigints)
	*/
	function pippenger(c, fieldN, points, scalars) {
		validateMSMPoints(points, c);
		validateMSMScalars(scalars, fieldN);
		const plength = points.length;
		const slength = scalars.length;
		if (plength !== slength) throw new Error("arrays of points and scalars must have equal length");
		const zero = c.ZERO;
		const wbits = (0, utils_ts_1.bitLen)(BigInt(plength));
		let windowSize = 1;
		if (wbits > 12) windowSize = wbits - 3;
		else if (wbits > 4) windowSize = wbits - 2;
		else if (wbits > 0) windowSize = 2;
		const MASK = (0, utils_ts_1.bitMask)(windowSize);
		const buckets = new Array(Number(MASK) + 1).fill(zero);
		const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
		let sum = zero;
		for (let i = lastBits; i >= 0; i -= windowSize) {
			buckets.fill(zero);
			for (let j = 0; j < slength; j++) {
				const scalar = scalars[j];
				const wbits = Number(scalar >> BigInt(i) & MASK);
				buckets[wbits] = buckets[wbits].add(points[j]);
			}
			let resI = zero;
			for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
				sumI = sumI.add(buckets[j]);
				resI = resI.add(sumI);
			}
			sum = sum.add(resI);
			if (i !== 0) for (let j = 0; j < windowSize; j++) sum = sum.double();
		}
		return sum;
	}
	/**
	* Precomputed multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
	* @param c Curve Point constructor
	* @param fieldN field over CURVE.N - important that it's not over CURVE.P
	* @param points array of L curve points
	* @returns function which multiplies points with scaars
	*/
	function precomputeMSMUnsafe(c, fieldN, points, windowSize) {
		/**
		* Performance Analysis of Window-based Precomputation
		*
		* Base Case (256-bit scalar, 8-bit window):
		* - Standard precomputation requires:
		*   - 31 additions per scalar × 256 scalars = 7,936 ops
		*   - Plus 255 summary additions = 8,191 total ops
		*   Note: Summary additions can be optimized via accumulator
		*
		* Chunked Precomputation Analysis:
		* - Using 32 chunks requires:
		*   - 255 additions per chunk
		*   - 256 doublings
		*   - Total: (255 × 32) + 256 = 8,416 ops
		*
		* Memory Usage Comparison:
		* Window Size | Standard Points | Chunked Points
		* ------------|-----------------|---------------
		*     4-bit   |     520         |      15
		*     8-bit   |    4,224        |     255
		*    10-bit   |   13,824        |   1,023
		*    16-bit   |  557,056        |  65,535
		*
		* Key Advantages:
		* 1. Enables larger window sizes due to reduced memory overhead
		* 2. More efficient for smaller scalar counts:
		*    - 16 chunks: (16 × 255) + 256 = 4,336 ops
		*    - ~2x faster than standard 8,191 ops
		*
		* Limitations:
		* - Not suitable for plain precomputes (requires 256 constant doublings)
		* - Performance degrades with larger scalar counts:
		*   - Optimal for ~256 scalars
		*   - Less efficient for 4096+ scalars (Pippenger preferred)
		*/
		validateW(windowSize, fieldN.BITS);
		validateMSMPoints(points, c);
		const zero = c.ZERO;
		const tableSize = 2 ** windowSize - 1;
		const chunks = Math.ceil(fieldN.BITS / windowSize);
		const MASK = (0, utils_ts_1.bitMask)(windowSize);
		const tables = points.map((p) => {
			const res = [];
			for (let i = 0, acc = p; i < tableSize; i++) {
				res.push(acc);
				acc = acc.add(p);
			}
			return res;
		});
		return (scalars) => {
			validateMSMScalars(scalars, fieldN);
			if (scalars.length > points.length) throw new Error("array of scalars must be smaller than array of points");
			let res = zero;
			for (let i = 0; i < chunks; i++) {
				if (res !== zero) for (let j = 0; j < windowSize; j++) res = res.double();
				const shiftBy = BigInt(chunks * windowSize - (i + 1) * windowSize);
				for (let j = 0; j < scalars.length; j++) {
					const n = scalars[j];
					const curr = Number(n >> shiftBy & MASK);
					if (!curr) continue;
					res = res.add(tables[j][curr - 1]);
				}
			}
			return res;
		};
	}
	function validateBasic(curve) {
		(0, modular_ts_1.validateField)(curve.Fp);
		(0, utils_ts_1.validateObject)(curve, {
			n: "bigint",
			h: "bigint",
			Gx: "field",
			Gy: "field"
		}, {
			nBitLength: "isSafeInteger",
			nByteLength: "isSafeInteger"
		});
		return Object.freeze({
			...(0, modular_ts_1.nLength)(curve.n, curve.nBitLength),
			...curve,
			p: curve.Fp.ORDER
		});
	}
}));
//#endregion
//#region node_modules/@noble/curves/abstract/weierstrass.js
var require_weierstrass = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DER = exports.DERErr = void 0;
	exports.weierstrassPoints = weierstrassPoints;
	exports.weierstrass = weierstrass;
	exports.SWUFpSqrtRatio = SWUFpSqrtRatio;
	exports.mapToCurveSimpleSWU = mapToCurveSimpleSWU;
	/**
	* Short Weierstrass curve methods. The formula is: y² = x³ + ax + b.
	*
	* ### Parameters
	*
	* To initialize a weierstrass curve, one needs to pass following params:
	*
	* * a: formula param
	* * b: formula param
	* * Fp: finite field of prime characteristic P; may be complex (Fp2). Arithmetics is done in field
	* * n: order of prime subgroup a.k.a total amount of valid curve points
	* * Gx: Base point (x, y) aka generator point. Gx = x coordinate
	* * Gy: ...y coordinate
	* * h: cofactor, usually 1. h*n = curve group order (n is only subgroup order)
	* * lowS: whether to enable (default) or disable "low-s" non-malleable signatures
	*
	* ### Design rationale for types
	*
	* * Interaction between classes from different curves should fail:
	*   `k256.Point.BASE.add(p256.Point.BASE)`
	* * For this purpose we want to use `instanceof` operator, which is fast and works during runtime
	* * Different calls of `curve()` would return different classes -
	*   `curve(params) !== curve(params)`: if somebody decided to monkey-patch their curve,
	*   it won't affect others
	*
	* TypeScript can't infer types for classes created inside a function. Classes is one instance
	* of nominative types in TypeScript and interfaces only check for shape, so it's hard to create
	* unique type for every function call.
	*
	* We can use generic types via some param, like curve opts, but that would:
	*     1. Enable interaction between `curve(params)` and `curve(params)` (curves of same params)
	*     which is hard to debug.
	*     2. Params can be generic and we can't enforce them to be constant value:
	*     if somebody creates curve from non-constant params,
	*     it would be allowed to interact with other curves with non-constant params
	*
	* @todo https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol
	* @module
	*/
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	var curve_ts_1 = require_curve();
	var modular_ts_1 = require_modular();
	var utils_ts_1 = require_utils();
	function validateSigVerOpts(opts) {
		if (opts.lowS !== void 0) (0, utils_ts_1.abool)("lowS", opts.lowS);
		if (opts.prehash !== void 0) (0, utils_ts_1.abool)("prehash", opts.prehash);
	}
	function validatePointOpts(curve) {
		const opts = (0, curve_ts_1.validateBasic)(curve);
		(0, utils_ts_1.validateObject)(opts, {
			a: "field",
			b: "field"
		}, {
			allowInfinityPoint: "boolean",
			allowedPrivateKeyLengths: "array",
			clearCofactor: "function",
			fromBytes: "function",
			isTorsionFree: "function",
			toBytes: "function",
			wrapPrivateKey: "boolean"
		});
		const { endo, Fp, a } = opts;
		if (endo) {
			if (!Fp.eql(a, Fp.ZERO)) throw new Error("invalid endo: CURVE.a must be 0");
			if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") throw new Error("invalid endo: expected \"beta\": bigint and \"splitScalar\": function");
		}
		return Object.freeze({ ...opts });
	}
	var DERErr = class extends Error {
		constructor(m = "") {
			super(m);
		}
	};
	exports.DERErr = DERErr;
	/**
	* ASN.1 DER encoding utilities. ASN is very complex & fragile. Format:
	*
	*     [0x30 (SEQUENCE), bytelength, 0x02 (INTEGER), intLength, R, 0x02 (INTEGER), intLength, S]
	*
	* Docs: https://letsencrypt.org/docs/a-warm-welcome-to-asn1-and-der/, https://luca.ntop.org/Teaching/Appunti/asn1.html
	*/
	exports.DER = {
		Err: DERErr,
		_tlv: {
			encode: (tag, data) => {
				const { Err: E } = exports.DER;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length & 1) throw new E("tlv.encode: unpadded data");
				const dataLen = data.length / 2;
				const len = (0, utils_ts_1.numberToHexUnpadded)(dataLen);
				if (len.length / 2 & 128) throw new E("tlv.encode: long form length too big");
				const lenLen = dataLen > 127 ? (0, utils_ts_1.numberToHexUnpadded)(len.length / 2 | 128) : "";
				return (0, utils_ts_1.numberToHexUnpadded)(tag) + lenLen + len + data;
			},
			decode(tag, data) {
				const { Err: E } = exports.DER;
				let pos = 0;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length < 2 || data[pos++] !== tag) throw new E("tlv.decode: wrong tlv");
				const first = data[pos++];
				const isLong = !!(first & 128);
				let length = 0;
				if (!isLong) length = first;
				else {
					const lenLen = first & 127;
					if (!lenLen) throw new E("tlv.decode(long): indefinite length not supported");
					if (lenLen > 4) throw new E("tlv.decode(long): byte length is too big");
					const lengthBytes = data.subarray(pos, pos + lenLen);
					if (lengthBytes.length !== lenLen) throw new E("tlv.decode: length bytes not complete");
					if (lengthBytes[0] === 0) throw new E("tlv.decode(long): zero leftmost byte");
					for (const b of lengthBytes) length = length << 8 | b;
					pos += lenLen;
					if (length < 128) throw new E("tlv.decode(long): not minimal encoding");
				}
				const v = data.subarray(pos, pos + length);
				if (v.length !== length) throw new E("tlv.decode: wrong value length");
				return {
					v,
					l: data.subarray(pos + length)
				};
			}
		},
		_int: {
			encode(num) {
				const { Err: E } = exports.DER;
				if (num < _0n) throw new E("integer: negative integers are not allowed");
				let hex = (0, utils_ts_1.numberToHexUnpadded)(num);
				if (Number.parseInt(hex[0], 16) & 8) hex = "00" + hex;
				if (hex.length & 1) throw new E("unexpected DER parsing assertion: unpadded hex");
				return hex;
			},
			decode(data) {
				const { Err: E } = exports.DER;
				if (data[0] & 128) throw new E("invalid signature integer: negative");
				if (data[0] === 0 && !(data[1] & 128)) throw new E("invalid signature integer: unnecessary leading zero");
				return (0, utils_ts_1.bytesToNumberBE)(data);
			}
		},
		toSig(hex) {
			const { Err: E, _int: int, _tlv: tlv } = exports.DER;
			const data = (0, utils_ts_1.ensureBytes)("signature", hex);
			const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
			if (seqLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
			const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
			if (sLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			return {
				r: int.decode(rBytes),
				s: int.decode(sBytes)
			};
		},
		hexFromSig(sig) {
			const { _tlv: tlv, _int: int } = exports.DER;
			const seq = tlv.encode(2, int.encode(sig.r)) + tlv.encode(2, int.encode(sig.s));
			return tlv.encode(48, seq);
		}
	};
	function numToSizedHex(num, size) {
		return (0, utils_ts_1.bytesToHex)((0, utils_ts_1.numberToBytesBE)(num, size));
	}
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	var _2n = BigInt(2);
	var _3n = BigInt(3);
	var _4n = BigInt(4);
	function weierstrassPoints(opts) {
		const CURVE = validatePointOpts(opts);
		const { Fp } = CURVE;
		const Fn = (0, modular_ts_1.Field)(CURVE.n, CURVE.nBitLength);
		const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
			const a = point.toAffine();
			return (0, utils_ts_1.concatBytes)(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
		});
		const fromBytes = CURVE.fromBytes || ((bytes) => {
			const tail = bytes.subarray(1);
			return {
				x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
				y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
			};
		});
		/**
		* y² = x³ + ax + b: Short weierstrass curve formula. Takes x, returns y².
		* @returns y²
		*/
		function weierstrassEquation(x) {
			const { a, b } = CURVE;
			const x2 = Fp.sqr(x);
			const x3 = Fp.mul(x2, x);
			return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
		}
		function isValidXY(x, y) {
			const left = Fp.sqr(y);
			const right = weierstrassEquation(x);
			return Fp.eql(left, right);
		}
		if (!isValidXY(CURVE.Gx, CURVE.Gy)) throw new Error("bad curve params: generator point");
		const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n), _4n);
		const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
		if (Fp.is0(Fp.add(_4a3, _27b2))) throw new Error("bad curve params: a or b");
		function isWithinCurveOrder(num) {
			return (0, utils_ts_1.inRange)(num, _1n, CURVE.n);
		}
		function normPrivateKeyToScalar(key) {
			const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
			if (lengths && typeof key !== "bigint") {
				if ((0, utils_ts_1.isBytes)(key)) key = (0, utils_ts_1.bytesToHex)(key);
				if (typeof key !== "string" || !lengths.includes(key.length)) throw new Error("invalid private key");
				key = key.padStart(nByteLength * 2, "0");
			}
			let num;
			try {
				num = typeof key === "bigint" ? key : (0, utils_ts_1.bytesToNumberBE)((0, utils_ts_1.ensureBytes)("private key", key, nByteLength));
			} catch (error) {
				throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
			}
			if (wrapPrivateKey) num = (0, modular_ts_1.mod)(num, N);
			(0, utils_ts_1.aInRange)("private key", num, _1n, N);
			return num;
		}
		function aprjpoint(other) {
			if (!(other instanceof Point)) throw new Error("ProjectivePoint expected");
		}
		const toAffineMemo = (0, utils_ts_1.memoized)((p, iz) => {
			const { px: x, py: y, pz: z } = p;
			if (Fp.eql(z, Fp.ONE)) return {
				x,
				y
			};
			const is0 = p.is0();
			if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
			const ax = Fp.mul(x, iz);
			const ay = Fp.mul(y, iz);
			const zz = Fp.mul(z, iz);
			if (is0) return {
				x: Fp.ZERO,
				y: Fp.ZERO
			};
			if (!Fp.eql(zz, Fp.ONE)) throw new Error("invZ was invalid");
			return {
				x: ax,
				y: ay
			};
		});
		const assertValidMemo = (0, utils_ts_1.memoized)((p) => {
			if (p.is0()) {
				if (CURVE.allowInfinityPoint && !Fp.is0(p.py)) return;
				throw new Error("bad point: ZERO");
			}
			const { x, y } = p.toAffine();
			if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error("bad point: x or y not FE");
			if (!isValidXY(x, y)) throw new Error("bad point: equation left != right");
			if (!p.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
			return true;
		});
		/**
		* Projective Point works in 3d / projective (homogeneous) coordinates: (X, Y, Z) ∋ (x=X/Z, y=Y/Z)
		* Default Point works in 2d / affine coordinates: (x, y)
		* We're doing calculations in projective, because its operations don't require costly inversion.
		*/
		class Point {
			constructor(px, py, pz) {
				if (px == null || !Fp.isValid(px)) throw new Error("x required");
				if (py == null || !Fp.isValid(py) || Fp.is0(py)) throw new Error("y required");
				if (pz == null || !Fp.isValid(pz)) throw new Error("z required");
				this.px = px;
				this.py = py;
				this.pz = pz;
				Object.freeze(this);
			}
			static fromAffine(p) {
				const { x, y } = p || {};
				if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error("invalid affine point");
				if (p instanceof Point) throw new Error("projective point not allowed");
				const is0 = (i) => Fp.eql(i, Fp.ZERO);
				if (is0(x) && is0(y)) return Point.ZERO;
				return new Point(x, y, Fp.ONE);
			}
			get x() {
				return this.toAffine().x;
			}
			get y() {
				return this.toAffine().y;
			}
			/**
			* Takes a bunch of Projective Points but executes only one
			* inversion on all of them. Inversion is very slow operation,
			* so this improves performance massively.
			* Optimization: converts a list of projective points to a list of identical points with Z=1.
			*/
			static normalizeZ(points) {
				const toInv = (0, modular_ts_1.FpInvertBatch)(Fp, points.map((p) => p.pz));
				return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
			}
			/**
			* Converts hash string or Uint8Array to Point.
			* @param hex short/long ECDSA hex
			*/
			static fromHex(hex) {
				const P = Point.fromAffine(fromBytes((0, utils_ts_1.ensureBytes)("pointHex", hex)));
				P.assertValidity();
				return P;
			}
			static fromPrivateKey(privateKey) {
				return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
			}
			static msm(points, scalars) {
				return (0, curve_ts_1.pippenger)(Point, Fn, points, scalars);
			}
			_setWindowSize(windowSize) {
				wnaf.setWindowSize(this, windowSize);
			}
			assertValidity() {
				assertValidMemo(this);
			}
			hasEvenY() {
				const { y } = this.toAffine();
				if (Fp.isOdd) return !Fp.isOdd(y);
				throw new Error("Field doesn't support isOdd");
			}
			/**
			* Compare one point to another.
			*/
			equals(other) {
				aprjpoint(other);
				const { px: X1, py: Y1, pz: Z1 } = this;
				const { px: X2, py: Y2, pz: Z2 } = other;
				const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
				const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
				return U1 && U2;
			}
			/**
			* Flips point to one corresponding to (x, -y) in Affine coordinates.
			*/
			negate() {
				return new Point(this.px, Fp.neg(this.py), this.pz);
			}
			double() {
				const { a, b } = CURVE;
				const b3 = Fp.mul(b, _3n);
				const { px: X1, py: Y1, pz: Z1 } = this;
				let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
				let t0 = Fp.mul(X1, X1);
				let t1 = Fp.mul(Y1, Y1);
				let t2 = Fp.mul(Z1, Z1);
				let t3 = Fp.mul(X1, Y1);
				t3 = Fp.add(t3, t3);
				Z3 = Fp.mul(X1, Z1);
				Z3 = Fp.add(Z3, Z3);
				X3 = Fp.mul(a, Z3);
				Y3 = Fp.mul(b3, t2);
				Y3 = Fp.add(X3, Y3);
				X3 = Fp.sub(t1, Y3);
				Y3 = Fp.add(t1, Y3);
				Y3 = Fp.mul(X3, Y3);
				X3 = Fp.mul(t3, X3);
				Z3 = Fp.mul(b3, Z3);
				t2 = Fp.mul(a, t2);
				t3 = Fp.sub(t0, t2);
				t3 = Fp.mul(a, t3);
				t3 = Fp.add(t3, Z3);
				Z3 = Fp.add(t0, t0);
				t0 = Fp.add(Z3, t0);
				t0 = Fp.add(t0, t2);
				t0 = Fp.mul(t0, t3);
				Y3 = Fp.add(Y3, t0);
				t2 = Fp.mul(Y1, Z1);
				t2 = Fp.add(t2, t2);
				t0 = Fp.mul(t2, t3);
				X3 = Fp.sub(X3, t0);
				Z3 = Fp.mul(t2, t1);
				Z3 = Fp.add(Z3, Z3);
				Z3 = Fp.add(Z3, Z3);
				return new Point(X3, Y3, Z3);
			}
			add(other) {
				aprjpoint(other);
				const { px: X1, py: Y1, pz: Z1 } = this;
				const { px: X2, py: Y2, pz: Z2 } = other;
				let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
				const a = CURVE.a;
				const b3 = Fp.mul(CURVE.b, _3n);
				let t0 = Fp.mul(X1, X2);
				let t1 = Fp.mul(Y1, Y2);
				let t2 = Fp.mul(Z1, Z2);
				let t3 = Fp.add(X1, Y1);
				let t4 = Fp.add(X2, Y2);
				t3 = Fp.mul(t3, t4);
				t4 = Fp.add(t0, t1);
				t3 = Fp.sub(t3, t4);
				t4 = Fp.add(X1, Z1);
				let t5 = Fp.add(X2, Z2);
				t4 = Fp.mul(t4, t5);
				t5 = Fp.add(t0, t2);
				t4 = Fp.sub(t4, t5);
				t5 = Fp.add(Y1, Z1);
				X3 = Fp.add(Y2, Z2);
				t5 = Fp.mul(t5, X3);
				X3 = Fp.add(t1, t2);
				t5 = Fp.sub(t5, X3);
				Z3 = Fp.mul(a, t4);
				X3 = Fp.mul(b3, t2);
				Z3 = Fp.add(X3, Z3);
				X3 = Fp.sub(t1, Z3);
				Z3 = Fp.add(t1, Z3);
				Y3 = Fp.mul(X3, Z3);
				t1 = Fp.add(t0, t0);
				t1 = Fp.add(t1, t0);
				t2 = Fp.mul(a, t2);
				t4 = Fp.mul(b3, t4);
				t1 = Fp.add(t1, t2);
				t2 = Fp.sub(t0, t2);
				t2 = Fp.mul(a, t2);
				t4 = Fp.add(t4, t2);
				t0 = Fp.mul(t1, t4);
				Y3 = Fp.add(Y3, t0);
				t0 = Fp.mul(t5, t4);
				X3 = Fp.mul(t3, X3);
				X3 = Fp.sub(X3, t0);
				t0 = Fp.mul(t3, t1);
				Z3 = Fp.mul(t5, Z3);
				Z3 = Fp.add(Z3, t0);
				return new Point(X3, Y3, Z3);
			}
			subtract(other) {
				return this.add(other.negate());
			}
			is0() {
				return this.equals(Point.ZERO);
			}
			wNAF(n) {
				return wnaf.wNAFCached(this, n, Point.normalizeZ);
			}
			/**
			* Non-constant-time multiplication. Uses double-and-add algorithm.
			* It's faster, but should only be used when you don't care about
			* an exposed private key e.g. sig verification, which works over *public* keys.
			*/
			multiplyUnsafe(sc) {
				const { endo, n: N } = CURVE;
				(0, utils_ts_1.aInRange)("scalar", sc, _0n, N);
				const I = Point.ZERO;
				if (sc === _0n) return I;
				if (this.is0() || sc === _1n) return this;
				if (!endo || wnaf.hasPrecomputes(this)) return wnaf.wNAFCachedUnsafe(this, sc, Point.normalizeZ);
				/** See docs for {@link EndomorphismOpts} */
				let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
				let k1p = I;
				let k2p = I;
				let d = this;
				while (k1 > _0n || k2 > _0n) {
					if (k1 & _1n) k1p = k1p.add(d);
					if (k2 & _1n) k2p = k2p.add(d);
					d = d.double();
					k1 >>= _1n;
					k2 >>= _1n;
				}
				if (k1neg) k1p = k1p.negate();
				if (k2neg) k2p = k2p.negate();
				k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
				return k1p.add(k2p);
			}
			/**
			* Constant time multiplication.
			* Uses wNAF method. Windowed method may be 10% faster,
			* but takes 2x longer to generate and consumes 2x memory.
			* Uses precomputes when available.
			* Uses endomorphism for Koblitz curves.
			* @param scalar by which the point would be multiplied
			* @returns New point
			*/
			multiply(scalar) {
				const { endo, n: N } = CURVE;
				(0, utils_ts_1.aInRange)("scalar", scalar, _1n, N);
				let point, fake;
				/** See docs for {@link EndomorphismOpts} */
				if (endo) {
					const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
					let { p: k1p, f: f1p } = this.wNAF(k1);
					let { p: k2p, f: f2p } = this.wNAF(k2);
					k1p = wnaf.constTimeNegate(k1neg, k1p);
					k2p = wnaf.constTimeNegate(k2neg, k2p);
					k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
					point = k1p.add(k2p);
					fake = f1p.add(f2p);
				} else {
					const { p, f } = this.wNAF(scalar);
					point = p;
					fake = f;
				}
				return Point.normalizeZ([point, fake])[0];
			}
			/**
			* Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
			* Not using Strauss-Shamir trick: precomputation tables are faster.
			* The trick could be useful if both P and Q are not G (not in our case).
			* @returns non-zero affine point
			*/
			multiplyAndAddUnsafe(Q, a, b) {
				const G = Point.BASE;
				const mul = (P, a) => a === _0n || a === _1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
				const sum = mul(this, a).add(mul(Q, b));
				return sum.is0() ? void 0 : sum;
			}
			toAffine(iz) {
				return toAffineMemo(this, iz);
			}
			isTorsionFree() {
				const { h: cofactor, isTorsionFree } = CURVE;
				if (cofactor === _1n) return true;
				if (isTorsionFree) return isTorsionFree(Point, this);
				throw new Error("isTorsionFree() has not been declared for the elliptic curve");
			}
			clearCofactor() {
				const { h: cofactor, clearCofactor } = CURVE;
				if (cofactor === _1n) return this;
				if (clearCofactor) return clearCofactor(Point, this);
				return this.multiplyUnsafe(CURVE.h);
			}
			toRawBytes(isCompressed = true) {
				(0, utils_ts_1.abool)("isCompressed", isCompressed);
				this.assertValidity();
				return toBytes(Point, this, isCompressed);
			}
			toHex(isCompressed = true) {
				(0, utils_ts_1.abool)("isCompressed", isCompressed);
				return (0, utils_ts_1.bytesToHex)(this.toRawBytes(isCompressed));
			}
		}
		Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
		Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
		const { endo, nBitLength } = CURVE;
		const wnaf = (0, curve_ts_1.wNAF)(Point, endo ? Math.ceil(nBitLength / 2) : nBitLength);
		return {
			CURVE,
			ProjectivePoint: Point,
			normPrivateKeyToScalar,
			weierstrassEquation,
			isWithinCurveOrder
		};
	}
	function validateOpts(curve) {
		const opts = (0, curve_ts_1.validateBasic)(curve);
		(0, utils_ts_1.validateObject)(opts, {
			hash: "hash",
			hmac: "function",
			randomBytes: "function"
		}, {
			bits2int: "function",
			bits2int_modN: "function",
			lowS: "boolean"
		});
		return Object.freeze({
			lowS: true,
			...opts
		});
	}
	/**
	* Creates short weierstrass curve and ECDSA signature methods for it.
	* @example
	* import { Field } from '@noble/curves/abstract/modular';
	* // Before that, define BigInt-s: a, b, p, n, Gx, Gy
	* const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
	*/
	function weierstrass(curveDef) {
		const CURVE = validateOpts(curveDef);
		const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
		const compressedLen = Fp.BYTES + 1;
		const uncompressedLen = 2 * Fp.BYTES + 1;
		function modN(a) {
			return (0, modular_ts_1.mod)(a, CURVE_ORDER);
		}
		function invN(a) {
			return (0, modular_ts_1.invert)(a, CURVE_ORDER);
		}
		const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
			...CURVE,
			toBytes(_c, point, isCompressed) {
				const a = point.toAffine();
				const x = Fp.toBytes(a.x);
				const cat = utils_ts_1.concatBytes;
				(0, utils_ts_1.abool)("isCompressed", isCompressed);
				if (isCompressed) return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
				else return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
			},
			fromBytes(bytes) {
				const len = bytes.length;
				const head = bytes[0];
				const tail = bytes.subarray(1);
				if (len === compressedLen && (head === 2 || head === 3)) {
					const x = (0, utils_ts_1.bytesToNumberBE)(tail);
					if (!(0, utils_ts_1.inRange)(x, _1n, Fp.ORDER)) throw new Error("Point is not on curve");
					const y2 = weierstrassEquation(x);
					let y;
					try {
						y = Fp.sqrt(y2);
					} catch (sqrtError) {
						const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
						throw new Error("Point is not on curve" + suffix);
					}
					const isYOdd = (y & _1n) === _1n;
					if ((head & 1) === 1 !== isYOdd) y = Fp.neg(y);
					return {
						x,
						y
					};
				} else if (len === uncompressedLen && head === 4) return {
					x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
					y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
				};
				else {
					const cl = compressedLen;
					const ul = uncompressedLen;
					throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
				}
			}
		});
		function isBiggerThanHalfOrder(number) {
			return number > CURVE_ORDER >> _1n;
		}
		function normalizeS(s) {
			return isBiggerThanHalfOrder(s) ? modN(-s) : s;
		}
		const slcNum = (b, from, to) => (0, utils_ts_1.bytesToNumberBE)(b.slice(from, to));
		/**
		* ECDSA signature with its (r, s) properties. Supports DER & compact representations.
		*/
		class Signature {
			constructor(r, s, recovery) {
				(0, utils_ts_1.aInRange)("r", r, _1n, CURVE_ORDER);
				(0, utils_ts_1.aInRange)("s", s, _1n, CURVE_ORDER);
				this.r = r;
				this.s = s;
				if (recovery != null) this.recovery = recovery;
				Object.freeze(this);
			}
			static fromCompact(hex) {
				const l = nByteLength;
				hex = (0, utils_ts_1.ensureBytes)("compactSignature", hex, l * 2);
				return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
			}
			static fromDER(hex) {
				const { r, s } = exports.DER.toSig((0, utils_ts_1.ensureBytes)("DER", hex));
				return new Signature(r, s);
			}
			/**
			* @todo remove
			* @deprecated
			*/
			assertValidity() {}
			addRecoveryBit(recovery) {
				return new Signature(this.r, this.s, recovery);
			}
			recoverPublicKey(msgHash) {
				const { r, s, recovery: rec } = this;
				const h = bits2int_modN((0, utils_ts_1.ensureBytes)("msgHash", msgHash));
				if (rec == null || ![
					0,
					1,
					2,
					3
				].includes(rec)) throw new Error("recovery id invalid");
				const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
				if (radj >= Fp.ORDER) throw new Error("recovery id 2 or 3 invalid");
				const prefix = (rec & 1) === 0 ? "02" : "03";
				const R = Point.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
				const ir = invN(radj);
				const u1 = modN(-h * ir);
				const u2 = modN(s * ir);
				const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
				if (!Q) throw new Error("point at infinify");
				Q.assertValidity();
				return Q;
			}
			hasHighS() {
				return isBiggerThanHalfOrder(this.s);
			}
			normalizeS() {
				return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
			}
			toDERRawBytes() {
				return (0, utils_ts_1.hexToBytes)(this.toDERHex());
			}
			toDERHex() {
				return exports.DER.hexFromSig(this);
			}
			toCompactRawBytes() {
				return (0, utils_ts_1.hexToBytes)(this.toCompactHex());
			}
			toCompactHex() {
				const l = nByteLength;
				return numToSizedHex(this.r, l) + numToSizedHex(this.s, l);
			}
		}
		const utils = {
			isValidPrivateKey(privateKey) {
				try {
					normPrivateKeyToScalar(privateKey);
					return true;
				} catch (error) {
					return false;
				}
			},
			normPrivateKeyToScalar,
			/**
			* Produces cryptographically secure private key from random of size
			* (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
			*/
			randomPrivateKey: () => {
				const length = (0, modular_ts_1.getMinHashLength)(CURVE.n);
				return (0, modular_ts_1.mapHashToField)(CURVE.randomBytes(length), CURVE.n);
			},
			/**
			* Creates precompute table for an arbitrary EC point. Makes point "cached".
			* Allows to massively speed-up `point.multiply(scalar)`.
			* @returns cached point
			* @example
			* const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
			* fast.multiply(privKey); // much faster ECDH now
			*/
			precompute(windowSize = 8, point = Point.BASE) {
				point._setWindowSize(windowSize);
				point.multiply(BigInt(3));
				return point;
			}
		};
		/**
		* Computes public key for a private key. Checks for validity of the private key.
		* @param privateKey private key
		* @param isCompressed whether to return compact (default), or full key
		* @returns Public key, full when isCompressed=false; short when isCompressed=true
		*/
		function getPublicKey(privateKey, isCompressed = true) {
			return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
		}
		/**
		* Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
		*/
		function isProbPub(item) {
			if (typeof item === "bigint") return false;
			if (item instanceof Point) return true;
			const len = (0, utils_ts_1.ensureBytes)("key", item).length;
			const fpl = Fp.BYTES;
			const compLen = fpl + 1;
			const uncompLen = 2 * fpl + 1;
			if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) return;
			else return len === compLen || len === uncompLen;
		}
		/**
		* ECDH (Elliptic Curve Diffie Hellman).
		* Computes shared public key from private key and public key.
		* Checks: 1) private key validity 2) shared key is on-curve.
		* Does NOT hash the result.
		* @param privateA private key
		* @param publicB different public key
		* @param isCompressed whether to return compact (default), or full key
		* @returns shared public key
		*/
		function getSharedSecret(privateA, publicB, isCompressed = true) {
			if (isProbPub(privateA) === true) throw new Error("first arg must be private key");
			if (isProbPub(publicB) === false) throw new Error("second arg must be public key");
			return Point.fromHex(publicB).multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
		}
		const bits2int = CURVE.bits2int || function(bytes) {
			if (bytes.length > 8192) throw new Error("input is too large");
			const num = (0, utils_ts_1.bytesToNumberBE)(bytes);
			const delta = bytes.length * 8 - nBitLength;
			return delta > 0 ? num >> BigInt(delta) : num;
		};
		const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
			return modN(bits2int(bytes));
		};
		const ORDER_MASK = (0, utils_ts_1.bitMask)(nBitLength);
		/**
		* Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
		*/
		function int2octets(num) {
			(0, utils_ts_1.aInRange)("num < 2^" + nBitLength, num, _0n, ORDER_MASK);
			return (0, utils_ts_1.numberToBytesBE)(num, nByteLength);
		}
		function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
			if (["recovered", "canonical"].some((k) => k in opts)) throw new Error("sign() legacy options not supported");
			const { hash, randomBytes } = CURVE;
			let { lowS, prehash, extraEntropy: ent } = opts;
			if (lowS == null) lowS = true;
			msgHash = (0, utils_ts_1.ensureBytes)("msgHash", msgHash);
			validateSigVerOpts(opts);
			if (prehash) msgHash = (0, utils_ts_1.ensureBytes)("prehashed msgHash", hash(msgHash));
			const h1int = bits2int_modN(msgHash);
			const d = normPrivateKeyToScalar(privateKey);
			const seedArgs = [int2octets(d), int2octets(h1int)];
			if (ent != null && ent !== false) {
				const e = ent === true ? randomBytes(Fp.BYTES) : ent;
				seedArgs.push((0, utils_ts_1.ensureBytes)("extraEntropy", e));
			}
			const seed = (0, utils_ts_1.concatBytes)(...seedArgs);
			const m = h1int;
			function k2sig(kBytes) {
				const k = bits2int(kBytes);
				if (!isWithinCurveOrder(k)) return;
				const ik = invN(k);
				const q = Point.BASE.multiply(k).toAffine();
				const r = modN(q.x);
				if (r === _0n) return;
				const s = modN(ik * modN(m + r * d));
				if (s === _0n) return;
				let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n);
				let normS = s;
				if (lowS && isBiggerThanHalfOrder(s)) {
					normS = normalizeS(s);
					recovery ^= 1;
				}
				return new Signature(r, normS, recovery);
			}
			return {
				seed,
				k2sig
			};
		}
		const defaultSigOpts = {
			lowS: CURVE.lowS,
			prehash: false
		};
		const defaultVerOpts = {
			lowS: CURVE.lowS,
			prehash: false
		};
		/**
		* Signs message hash with a private key.
		* ```
		* sign(m, d, k) where
		*   (x, y) = G × k
		*   r = x mod n
		*   s = (m + dr)/k mod n
		* ```
		* @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
		* @param privKey private key
		* @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
		* @returns signature with recovery param
		*/
		function sign(msgHash, privKey, opts = defaultSigOpts) {
			const { seed, k2sig } = prepSig(msgHash, privKey, opts);
			const C = CURVE;
			return (0, utils_ts_1.createHmacDrbg)(C.hash.outputLen, C.nByteLength, C.hmac)(seed, k2sig);
		}
		Point.BASE._setWindowSize(8);
		/**
		* Verifies a signature against message hash and public key.
		* Rejects lowS signatures by default: to override,
		* specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
		*
		* ```
		* verify(r, s, h, P) where
		*   U1 = hs^-1 mod n
		*   U2 = rs^-1 mod n
		*   R = U1⋅G - U2⋅P
		*   mod(R.x, n) == r
		* ```
		*/
		function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
			const sg = signature;
			msgHash = (0, utils_ts_1.ensureBytes)("msgHash", msgHash);
			publicKey = (0, utils_ts_1.ensureBytes)("publicKey", publicKey);
			const { lowS, prehash, format } = opts;
			validateSigVerOpts(opts);
			if ("strict" in opts) throw new Error("options.strict was renamed to lowS");
			if (format !== void 0 && format !== "compact" && format !== "der") throw new Error("format must be compact or der");
			const isHex = typeof sg === "string" || (0, utils_ts_1.isBytes)(sg);
			const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
			if (!isHex && !isObj) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
			let _sig = void 0;
			let P;
			try {
				if (isObj) _sig = new Signature(sg.r, sg.s);
				if (isHex) {
					try {
						if (format !== "compact") _sig = Signature.fromDER(sg);
					} catch (derError) {
						if (!(derError instanceof exports.DER.Err)) throw derError;
					}
					if (!_sig && format !== "der") _sig = Signature.fromCompact(sg);
				}
				P = Point.fromHex(publicKey);
			} catch (error) {
				return false;
			}
			if (!_sig) return false;
			if (lowS && _sig.hasHighS()) return false;
			if (prehash) msgHash = CURVE.hash(msgHash);
			const { r, s } = _sig;
			const h = bits2int_modN(msgHash);
			const is = invN(s);
			const u1 = modN(h * is);
			const u2 = modN(r * is);
			const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
			if (!R) return false;
			return modN(R.x) === r;
		}
		return {
			CURVE,
			getPublicKey,
			getSharedSecret,
			sign,
			verify,
			ProjectivePoint: Point,
			Signature,
			utils
		};
	}
	/**
	* Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
	* TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
	* b = True and y = sqrt(u / v) if (u / v) is square in F, and
	* b = False and y = sqrt(Z * (u / v)) otherwise.
	* @param Fp
	* @param Z
	* @returns
	*/
	function SWUFpSqrtRatio(Fp, Z) {
		const q = Fp.ORDER;
		let l = _0n;
		for (let o = q - _1n; o % _2n === _0n; o /= _2n) l += _1n;
		const c1 = l;
		const _2n_pow_c1_1 = _2n << c1 - _1n - _1n;
		const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
		const c2 = (q - _1n) / _2n_pow_c1;
		const c3 = (c2 - _1n) / _2n;
		const c4 = _2n_pow_c1 - _1n;
		const c5 = _2n_pow_c1_1;
		const c6 = Fp.pow(Z, c2);
		const c7 = Fp.pow(Z, (c2 + _1n) / _2n);
		let sqrtRatio = (u, v) => {
			let tv1 = c6;
			let tv2 = Fp.pow(v, c4);
			let tv3 = Fp.sqr(tv2);
			tv3 = Fp.mul(tv3, v);
			let tv5 = Fp.mul(u, tv3);
			tv5 = Fp.pow(tv5, c3);
			tv5 = Fp.mul(tv5, tv2);
			tv2 = Fp.mul(tv5, v);
			tv3 = Fp.mul(tv5, u);
			let tv4 = Fp.mul(tv3, tv2);
			tv5 = Fp.pow(tv4, c5);
			let isQR = Fp.eql(tv5, Fp.ONE);
			tv2 = Fp.mul(tv3, c7);
			tv5 = Fp.mul(tv4, tv1);
			tv3 = Fp.cmov(tv2, tv3, isQR);
			tv4 = Fp.cmov(tv5, tv4, isQR);
			for (let i = c1; i > _1n; i--) {
				let tv5 = i - _2n;
				tv5 = _2n << tv5 - _1n;
				let tvv5 = Fp.pow(tv4, tv5);
				const e1 = Fp.eql(tvv5, Fp.ONE);
				tv2 = Fp.mul(tv3, tv1);
				tv1 = Fp.mul(tv1, tv1);
				tvv5 = Fp.mul(tv4, tv1);
				tv3 = Fp.cmov(tv2, tv3, e1);
				tv4 = Fp.cmov(tvv5, tv4, e1);
			}
			return {
				isValid: isQR,
				value: tv3
			};
		};
		if (Fp.ORDER % _4n === _3n) {
			const c1 = (Fp.ORDER - _3n) / _4n;
			const c2 = Fp.sqrt(Fp.neg(Z));
			sqrtRatio = (u, v) => {
				let tv1 = Fp.sqr(v);
				const tv2 = Fp.mul(u, v);
				tv1 = Fp.mul(tv1, tv2);
				let y1 = Fp.pow(tv1, c1);
				y1 = Fp.mul(y1, tv2);
				const y2 = Fp.mul(y1, c2);
				const tv3 = Fp.mul(Fp.sqr(y1), v);
				const isQR = Fp.eql(tv3, u);
				return {
					isValid: isQR,
					value: Fp.cmov(y2, y1, isQR)
				};
			};
		}
		return sqrtRatio;
	}
	/**
	* Simplified Shallue-van de Woestijne-Ulas Method
	* https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
	*/
	function mapToCurveSimpleSWU(Fp, opts) {
		(0, modular_ts_1.validateField)(Fp);
		if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
		const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
		if (!Fp.isOdd) throw new Error("Fp.isOdd is not implemented!");
		return (u) => {
			let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
			tv1 = Fp.sqr(u);
			tv1 = Fp.mul(tv1, opts.Z);
			tv2 = Fp.sqr(tv1);
			tv2 = Fp.add(tv2, tv1);
			tv3 = Fp.add(tv2, Fp.ONE);
			tv3 = Fp.mul(tv3, opts.B);
			tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
			tv4 = Fp.mul(tv4, opts.A);
			tv2 = Fp.sqr(tv3);
			tv6 = Fp.sqr(tv4);
			tv5 = Fp.mul(tv6, opts.A);
			tv2 = Fp.add(tv2, tv5);
			tv2 = Fp.mul(tv2, tv3);
			tv6 = Fp.mul(tv6, tv4);
			tv5 = Fp.mul(tv6, opts.B);
			tv2 = Fp.add(tv2, tv5);
			x = Fp.mul(tv1, tv3);
			const { isValid, value } = sqrtRatio(tv2, tv6);
			y = Fp.mul(tv1, u);
			y = Fp.mul(y, value);
			x = Fp.cmov(x, tv3, isValid);
			y = Fp.cmov(y, value, isValid);
			const e1 = Fp.isOdd(u) === Fp.isOdd(y);
			y = Fp.cmov(Fp.neg(y), y, e1);
			const tv4_inv = (0, modular_ts_1.FpInvertBatch)(Fp, [tv4], true)[0];
			x = Fp.mul(x, tv4_inv);
			return {
				x,
				y
			};
		};
	}
}));
//#endregion
//#region node_modules/@noble/curves/_shortw_utils.js
var require__shortw_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getHash = getHash;
	exports.createCurve = createCurve;
	/**
	* Utilities for short weierstrass curves, combined with noble-hashes.
	* @module
	*/
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	var hmac_1 = require_hmac();
	var utils_1 = require_utils$1();
	var weierstrass_ts_1 = require_weierstrass();
	/** connects noble-curves to noble-hashes */
	function getHash(hash) {
		return {
			hash,
			hmac: (key, ...msgs) => (0, hmac_1.hmac)(hash, key, (0, utils_1.concatBytes)(...msgs)),
			randomBytes: utils_1.randomBytes
		};
	}
	function createCurve(curveDef, defHash) {
		const create = (hash) => (0, weierstrass_ts_1.weierstrass)({
			...curveDef,
			...getHash(hash)
		});
		return {
			...create(defHash),
			create
		};
	}
}));
//#endregion
//#region node_modules/@noble/curves/abstract/hash-to-curve.js
var require_hash_to_curve = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.expand_message_xmd = expand_message_xmd;
	exports.expand_message_xof = expand_message_xof;
	exports.hash_to_field = hash_to_field;
	exports.isogenyMap = isogenyMap;
	exports.createHasher = createHasher;
	var modular_ts_1 = require_modular();
	var utils_ts_1 = require_utils();
	var os2ip = utils_ts_1.bytesToNumberBE;
	function i2osp(value, length) {
		anum(value);
		anum(length);
		if (value < 0 || value >= 1 << 8 * length) throw new Error("invalid I2OSP input: " + value);
		const res = Array.from({ length }).fill(0);
		for (let i = length - 1; i >= 0; i--) {
			res[i] = value & 255;
			value >>>= 8;
		}
		return new Uint8Array(res);
	}
	function strxor(a, b) {
		const arr = new Uint8Array(a.length);
		for (let i = 0; i < a.length; i++) arr[i] = a[i] ^ b[i];
		return arr;
	}
	function anum(item) {
		if (!Number.isSafeInteger(item)) throw new Error("number expected");
	}
	/**
	* Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits.
	* [RFC 9380 5.3.1](https://www.rfc-editor.org/rfc/rfc9380#section-5.3.1).
	*/
	function expand_message_xmd(msg, DST, lenInBytes, H) {
		(0, utils_ts_1.abytes)(msg);
		(0, utils_ts_1.abytes)(DST);
		anum(lenInBytes);
		if (DST.length > 255) DST = H((0, utils_ts_1.concatBytes)((0, utils_ts_1.utf8ToBytes)("H2C-OVERSIZE-DST-"), DST));
		const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
		const ell = Math.ceil(lenInBytes / b_in_bytes);
		if (lenInBytes > 65535 || ell > 255) throw new Error("expand_message_xmd: invalid lenInBytes");
		const DST_prime = (0, utils_ts_1.concatBytes)(DST, i2osp(DST.length, 1));
		const Z_pad = i2osp(0, r_in_bytes);
		const l_i_b_str = i2osp(lenInBytes, 2);
		const b = new Array(ell);
		const b_0 = H((0, utils_ts_1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
		b[0] = H((0, utils_ts_1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
		for (let i = 1; i <= ell; i++) {
			const args = [
				strxor(b_0, b[i - 1]),
				i2osp(i + 1, 1),
				DST_prime
			];
			b[i] = H((0, utils_ts_1.concatBytes)(...args));
		}
		return (0, utils_ts_1.concatBytes)(...b).slice(0, lenInBytes);
	}
	/**
	* Produces a uniformly random byte string using an extendable-output function (XOF) H.
	* 1. The collision resistance of H MUST be at least k bits.
	* 2. H MUST be an XOF that has been proved indifferentiable from
	*    a random oracle under a reasonable cryptographic assumption.
	* [RFC 9380 5.3.2](https://www.rfc-editor.org/rfc/rfc9380#section-5.3.2).
	*/
	function expand_message_xof(msg, DST, lenInBytes, k, H) {
		(0, utils_ts_1.abytes)(msg);
		(0, utils_ts_1.abytes)(DST);
		anum(lenInBytes);
		if (DST.length > 255) {
			const dkLen = Math.ceil(2 * k / 8);
			DST = H.create({ dkLen }).update((0, utils_ts_1.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(DST).digest();
		}
		if (lenInBytes > 65535 || DST.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
		return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
	}
	/**
	* Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F.
	* [RFC 9380 5.2](https://www.rfc-editor.org/rfc/rfc9380#section-5.2).
	* @param msg a byte string containing the message to hash
	* @param count the number of elements of F to output
	* @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
	* @returns [u_0, ..., u_(count - 1)], a list of field elements.
	*/
	function hash_to_field(msg, count, options) {
		(0, utils_ts_1.validateObject)(options, {
			DST: "stringOrUint8Array",
			p: "bigint",
			m: "isSafeInteger",
			k: "isSafeInteger",
			hash: "hash"
		});
		const { p, k, m, hash, expand, DST: _DST } = options;
		(0, utils_ts_1.abytes)(msg);
		anum(count);
		const DST = typeof _DST === "string" ? (0, utils_ts_1.utf8ToBytes)(_DST) : _DST;
		const log2p = p.toString(2).length;
		const L = Math.ceil((log2p + k) / 8);
		const len_in_bytes = count * m * L;
		let prb;
		if (expand === "xmd") prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
		else if (expand === "xof") prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
		else if (expand === "_internal_pass") prb = msg;
		else throw new Error("expand must be \"xmd\" or \"xof\"");
		const u = new Array(count);
		for (let i = 0; i < count; i++) {
			const e = new Array(m);
			for (let j = 0; j < m; j++) {
				const elm_offset = L * (j + i * m);
				const tv = prb.subarray(elm_offset, elm_offset + L);
				e[j] = (0, modular_ts_1.mod)(os2ip(tv), p);
			}
			u[i] = e;
		}
		return u;
	}
	function isogenyMap(field, map) {
		const coeff = map.map((i) => Array.from(i).reverse());
		return (x, y) => {
			const [xn, xd, yn, yd] = coeff.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
			const [xd_inv, yd_inv] = (0, modular_ts_1.FpInvertBatch)(field, [xd, yd], true);
			x = field.mul(xn, xd_inv);
			y = field.mul(y, field.mul(yn, yd_inv));
			return {
				x,
				y
			};
		};
	}
	/** Creates hash-to-curve methods from EC Point and mapToCurve function. */
	function createHasher(Point, mapToCurve, defaults) {
		if (typeof mapToCurve !== "function") throw new Error("mapToCurve() must be defined");
		function map(num) {
			return Point.fromAffine(mapToCurve(num));
		}
		function clear(initial) {
			const P = initial.clearCofactor();
			if (P.equals(Point.ZERO)) return Point.ZERO;
			P.assertValidity();
			return P;
		}
		return {
			defaults,
			hashToCurve(msg, options) {
				const u = hash_to_field(msg, 2, {
					...defaults,
					DST: defaults.DST,
					...options
				});
				const u0 = map(u[0]);
				const u1 = map(u[1]);
				return clear(u0.add(u1));
			},
			encodeToCurve(msg, options) {
				return clear(map(hash_to_field(msg, 1, {
					...defaults,
					DST: defaults.encodeDST,
					...options
				})[0]));
			},
			mapToCurve(scalars) {
				if (!Array.isArray(scalars)) throw new Error("expected array of bigints");
				for (const i of scalars) if (typeof i !== "bigint") throw new Error("expected array of bigints");
				return clear(map(scalars));
			}
		};
	}
}));
//#endregion
//#region node_modules/@noble/curves/secp256k1.js
var require_secp256k1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.encodeToCurve = exports.hashToCurve = exports.secp256k1_hasher = exports.schnorr = exports.secp256k1 = void 0;
	/**
	* NIST secp256k1. See [pdf](https://www.secg.org/sec2-v2.pdf).
	*
	* Seems to be rigid (not backdoored)
	* [as per discussion](https://bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975).
	*
	* secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
	* Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
	* For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
	* [See explanation](https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066).
	* @module
	*/
	/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	var sha2_1 = require_sha2();
	var utils_1 = require_utils$1();
	var _shortw_utils_ts_1 = require__shortw_utils();
	var hash_to_curve_ts_1 = require_hash_to_curve();
	var modular_ts_1 = require_modular();
	var utils_ts_1 = require_utils();
	var weierstrass_ts_1 = require_weierstrass();
	var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
	var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	var _2n = BigInt(2);
	var divNearest = (a, b) => (a + b / _2n) / b;
	/**
	* √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
	* (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
	*/
	function sqrtMod(y) {
		const P = secp256k1P;
		const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
		const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
		const b2 = y * y * y % P;
		const b3 = b2 * b2 * y % P;
		const b6 = (0, modular_ts_1.pow2)(b3, _3n, P) * b3 % P;
		const b9 = (0, modular_ts_1.pow2)(b6, _3n, P) * b3 % P;
		const b11 = (0, modular_ts_1.pow2)(b9, _2n, P) * b2 % P;
		const b22 = (0, modular_ts_1.pow2)(b11, _11n, P) * b11 % P;
		const b44 = (0, modular_ts_1.pow2)(b22, _22n, P) * b22 % P;
		const b88 = (0, modular_ts_1.pow2)(b44, _44n, P) * b44 % P;
		const b176 = (0, modular_ts_1.pow2)(b88, _88n, P) * b88 % P;
		const b220 = (0, modular_ts_1.pow2)(b176, _44n, P) * b44 % P;
		const b223 = (0, modular_ts_1.pow2)(b220, _3n, P) * b3 % P;
		const t1 = (0, modular_ts_1.pow2)(b223, _23n, P) * b22 % P;
		const t2 = (0, modular_ts_1.pow2)(t1, _6n, P) * b2 % P;
		const root = (0, modular_ts_1.pow2)(t2, _2n, P);
		if (!Fpk1.eql(Fpk1.sqr(root), y)) throw new Error("Cannot find square root");
		return root;
	}
	var Fpk1 = (0, modular_ts_1.Field)(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
	/**
	* secp256k1 curve, ECDSA and ECDH methods.
	*
	* Field: `2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n`
	*
	* @example
	* ```js
	* import { secp256k1 } from '@noble/curves/secp256k1';
	* const priv = secp256k1.utils.randomPrivateKey();
	* const pub = secp256k1.getPublicKey(priv);
	* const msg = new Uint8Array(32).fill(1); // message hash (not message) in ecdsa
	* const sig = secp256k1.sign(msg, priv); // `{prehash: true}` option is available
	* const isValid = secp256k1.verify(sig, msg, pub) === true;
	* ```
	*/
	exports.secp256k1 = (0, _shortw_utils_ts_1.createCurve)({
		a: _0n,
		b: BigInt(7),
		Fp: Fpk1,
		n: secp256k1N,
		Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
		Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
		h: BigInt(1),
		lowS: true,
		endo: {
			beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
			splitScalar: (k) => {
				const n = secp256k1N;
				const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
				const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
				const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
				const b2 = a1;
				const POW_2_128 = BigInt("0x100000000000000000000000000000000");
				const c1 = divNearest(b2 * k, n);
				const c2 = divNearest(-b1 * k, n);
				let k1 = (0, modular_ts_1.mod)(k - c1 * a1 - c2 * a2, n);
				let k2 = (0, modular_ts_1.mod)(-c1 * b1 - c2 * b2, n);
				const k1neg = k1 > POW_2_128;
				const k2neg = k2 > POW_2_128;
				if (k1neg) k1 = n - k1;
				if (k2neg) k2 = n - k2;
				if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalar: Endomorphism failed, k=" + k);
				return {
					k1neg,
					k1,
					k2neg,
					k2
				};
			}
		}
	}, sha2_1.sha256);
	/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
	var TAGGED_HASH_PREFIXES = {};
	function taggedHash(tag, ...messages) {
		let tagP = TAGGED_HASH_PREFIXES[tag];
		if (tagP === void 0) {
			const tagH = (0, sha2_1.sha256)(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
			tagP = (0, utils_ts_1.concatBytes)(tagH, tagH);
			TAGGED_HASH_PREFIXES[tag] = tagP;
		}
		return (0, sha2_1.sha256)((0, utils_ts_1.concatBytes)(tagP, ...messages));
	}
	var pointToBytes = (point) => point.toRawBytes(true).slice(1);
	var numTo32b = (n) => (0, utils_ts_1.numberToBytesBE)(n, 32);
	var modP = (x) => (0, modular_ts_1.mod)(x, secp256k1P);
	var modN = (x) => (0, modular_ts_1.mod)(x, secp256k1N);
	var Point = /* @__PURE__ */ (() => exports.secp256k1.ProjectivePoint)();
	var GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
	function schnorrGetExtPubKey(priv) {
		let d_ = exports.secp256k1.utils.normPrivateKeyToScalar(priv);
		let p = Point.fromPrivateKey(d_);
		return {
			scalar: p.hasEvenY() ? d_ : modN(-d_),
			bytes: pointToBytes(p)
		};
	}
	/**
	* lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
	* @returns valid point checked for being on-curve
	*/
	function lift_x(x) {
		(0, utils_ts_1.aInRange)("x", x, _1n, secp256k1P);
		let y = sqrtMod(modP(modP(x * x) * x + BigInt(7)));
		if (y % _2n !== _0n) y = modP(-y);
		const p = new Point(x, y, _1n);
		p.assertValidity();
		return p;
	}
	var num = utils_ts_1.bytesToNumberBE;
	/**
	* Create tagged hash, convert it to bigint, reduce modulo-n.
	*/
	function challenge(...args) {
		return modN(num(taggedHash("BIP0340/challenge", ...args)));
	}
	/**
	* Schnorr public key is just `x` coordinate of Point as per BIP340.
	*/
	function schnorrGetPublicKey(privateKey) {
		return schnorrGetExtPubKey(privateKey).bytes;
	}
	/**
	* Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
	* auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
	*/
	function schnorrSign(message, privateKey, auxRand = (0, utils_1.randomBytes)(32)) {
		const m = (0, utils_ts_1.ensureBytes)("message", message);
		const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
		const k_ = modN(num(taggedHash("BIP0340/nonce", numTo32b(d ^ num(taggedHash("BIP0340/aux", (0, utils_ts_1.ensureBytes)("auxRand", auxRand, 32)))), px, m)));
		if (k_ === _0n) throw new Error("sign failed: k is zero");
		const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
		const e = challenge(rx, px, m);
		const sig = /* @__PURE__ */ new Uint8Array(64);
		sig.set(rx, 0);
		sig.set(numTo32b(modN(k + e * d)), 32);
		if (!schnorrVerify(sig, m, px)) throw new Error("sign: Invalid signature produced");
		return sig;
	}
	/**
	* Verifies Schnorr signature.
	* Will swallow errors & return false except for initial type validation of arguments.
	*/
	function schnorrVerify(signature, message, publicKey) {
		const sig = (0, utils_ts_1.ensureBytes)("signature", signature, 64);
		const m = (0, utils_ts_1.ensureBytes)("message", message);
		const pub = (0, utils_ts_1.ensureBytes)("publicKey", publicKey, 32);
		try {
			const P = lift_x(num(pub));
			const r = num(sig.subarray(0, 32));
			if (!(0, utils_ts_1.inRange)(r, _1n, secp256k1P)) return false;
			const s = num(sig.subarray(32, 64));
			if (!(0, utils_ts_1.inRange)(s, _1n, secp256k1N)) return false;
			const R = GmulAdd(P, s, modN(-challenge(numTo32b(r), pointToBytes(P), m)));
			if (!R || !R.hasEvenY() || R.toAffine().x !== r) return false;
			return true;
		} catch (error) {
			return false;
		}
	}
	/**
	* Schnorr signatures over secp256k1.
	* https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
	* @example
	* ```js
	* import { schnorr } from '@noble/curves/secp256k1';
	* const priv = schnorr.utils.randomPrivateKey();
	* const pub = schnorr.getPublicKey(priv);
	* const msg = new TextEncoder().encode('hello');
	* const sig = schnorr.sign(msg, priv);
	* const isValid = schnorr.verify(sig, msg, pub);
	* ```
	*/
	exports.schnorr = (() => ({
		getPublicKey: schnorrGetPublicKey,
		sign: schnorrSign,
		verify: schnorrVerify,
		utils: {
			randomPrivateKey: exports.secp256k1.utils.randomPrivateKey,
			lift_x,
			pointToBytes,
			numberToBytesBE: utils_ts_1.numberToBytesBE,
			bytesToNumberBE: utils_ts_1.bytesToNumberBE,
			taggedHash,
			mod: modular_ts_1.mod
		}
	}))();
	var isoMap = /* @__PURE__ */ (() => (0, hash_to_curve_ts_1.isogenyMap)(Fpk1, [
		[
			"0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
			"0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
			"0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
			"0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
		],
		[
			"0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
			"0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
			"0x0000000000000000000000000000000000000000000000000000000000000001"
		],
		[
			"0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
			"0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
			"0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
			"0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
		],
		[
			"0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
			"0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
			"0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
			"0x0000000000000000000000000000000000000000000000000000000000000001"
		]
	].map((i) => i.map((j) => BigInt(j)))))();
	var mapSWU = /* @__PURE__ */ (() => (0, weierstrass_ts_1.mapToCurveSimpleSWU)(Fpk1, {
		A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
		B: BigInt("1771"),
		Z: Fpk1.create(BigInt("-11"))
	}))();
	/** Hashing / encoding to secp256k1 points / field. RFC 9380 methods. */
	exports.secp256k1_hasher = (() => (0, hash_to_curve_ts_1.createHasher)(exports.secp256k1.ProjectivePoint, (scalars) => {
		const { x, y } = mapSWU(Fpk1.create(scalars[0]));
		return isoMap(x, y);
	}, {
		DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
		encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
		p: Fpk1.ORDER,
		m: 1,
		k: 128,
		expand: "xmd",
		hash: sha2_1.sha256
	}))();
	exports.hashToCurve = (() => exports.secp256k1_hasher.hashToCurve)();
	exports.encodeToCurve = (() => exports.secp256k1_hasher.encodeToCurve)();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_assert.js
/**
* Internal assertion helpers.
* @module
*/
/** Asserts something is positive integer. */
function anumber(n) {
	if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, got " + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */
function isBytes$1(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
/** Asserts something is Uint8Array. */
function abytes$1(b, ...lengths) {
	if (!isBytes$1(b)) throw new Error("Uint8Array expected");
	if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
/** Asserts something is hash */
function ahash(h) {
	if (typeof h !== "function" || typeof h.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
	anumber(h.outputLen);
	anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */
function aexists(instance, checkFinished = true) {
	if (instance.destroyed) throw new Error("Hash instance has been destroyed");
	if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
/** Asserts output is properly-sized byte array */
function aoutput(out, instance) {
	abytes$1(out);
	const min = instance.outputLen;
	if (out.length < min) throw new Error("digestInto() expects output buffer of length at least " + min);
}
var init__assert = __esmMin((() => {}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/cryptoNode.js
/**
* Internal webcrypto alias.
* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
* Falls back to Node.js built-in crypto for Node.js <=v14.
* See utils.ts for details.
* @module
*/
var crypto;
var init_cryptoNode = __esmMin((() => {
	crypto = nc$1 && typeof nc$1 === "object" && "webcrypto" in nc$1 ? nc$1.webcrypto : nc$1 && typeof nc$1 === "object" && "randomBytes" in nc$1 ? nc$1 : void 0;
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function u32(arr) {
	return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView(arr) {
	return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */
function rotr(word, shift) {
	return word << 32 - shift | word >>> shift;
}
function byteSwap(word) {
	return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
/** In place byte swap for Uint32Array */
function byteSwap32(arr) {
	for (let i = 0; i < arr.length; i++) arr[i] = byteSwap(arr[i]);
}
/**
* Convert JS string to byte array.
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes$1(str) {
	if (typeof str !== "string") throw new Error("utf8ToBytes expected string, got " + typeof str);
	return new Uint8Array(new TextEncoder().encode(str));
}
/**
* Normalizes (non-hex) string or Uint8Array to Uint8Array.
* Warning: when Uint8Array is passed, it would NOT get copied.
* Keep in mind for future mutable operations.
*/
function toBytes(data) {
	if (typeof data === "string") data = utf8ToBytes$1(data);
	abytes$1(data);
	return data;
}
/**
* Copies several Uint8Arrays into one.
*/
function concatBytes$1(...arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		const a = arrays[i];
		abytes$1(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i = 0, pad = 0; i < arrays.length; i++) {
		const a = arrays[i];
		res.set(a, pad);
		pad += a.length;
	}
	return res;
}
/** Wraps hash function, creating an interface on top of it */
function wrapConstructor(hashCons) {
	const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
	const tmp = hashCons();
	hashC.outputLen = tmp.outputLen;
	hashC.blockLen = tmp.blockLen;
	hashC.create = () => hashCons();
	return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */
function randomBytes$1(bytesLength = 32) {
	if (crypto && typeof crypto.getRandomValues === "function") return crypto.getRandomValues(new Uint8Array(bytesLength));
	if (crypto && typeof crypto.randomBytes === "function") return crypto.randomBytes(bytesLength);
	throw new Error("crypto.getRandomValues must be defined");
}
var isLE, Hash;
var init_utils$1 = __esmMin((() => {
	init_cryptoNode();
	init__assert();
	isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
	Hash = class {
		clone() {
			return this._cloneInto();
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_md.js
/** Polyfill for Safari 14. https://caniuse.com/mdn-javascript_builtins_dataview_setbiguint64 */
function setBigUint64(view, byteOffset, value, isLE) {
	if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
	const _32n = BigInt(32);
	const _u32_max = BigInt(4294967295);
	const wh = Number(value >> _32n & _u32_max);
	const wl = Number(value & _u32_max);
	const h = isLE ? 4 : 0;
	const l = isLE ? 0 : 4;
	view.setUint32(byteOffset + h, wh, isLE);
	view.setUint32(byteOffset + l, wl, isLE);
}
/** Choice: a ? b : c */
function Chi(a, b, c) {
	return a & b ^ ~a & c;
}
/** Majority function, true if any two inputs is true. */
function Maj(a, b, c) {
	return a & b ^ a & c ^ b & c;
}
var HashMD;
var init__md = __esmMin((() => {
	init__assert();
	init_utils$1();
	HashMD = class extends Hash {
		constructor(blockLen, outputLen, padOffset, isLE) {
			super();
			this.blockLen = blockLen;
			this.outputLen = outputLen;
			this.padOffset = padOffset;
			this.isLE = isLE;
			this.finished = false;
			this.length = 0;
			this.pos = 0;
			this.destroyed = false;
			this.buffer = new Uint8Array(blockLen);
			this.view = createView(this.buffer);
		}
		update(data) {
			aexists(this);
			const { view, buffer, blockLen } = this;
			data = toBytes(data);
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				if (take === blockLen) {
					const dataView = createView(data);
					for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
					continue;
				}
				buffer.set(data.subarray(pos, pos + take), this.pos);
				this.pos += take;
				pos += take;
				if (this.pos === blockLen) {
					this.process(view, 0);
					this.pos = 0;
				}
			}
			this.length += data.length;
			this.roundClean();
			return this;
		}
		digestInto(out) {
			aexists(this);
			aoutput(out, this);
			this.finished = true;
			const { buffer, view, blockLen, isLE } = this;
			let { pos } = this;
			buffer[pos++] = 128;
			this.buffer.subarray(pos).fill(0);
			if (this.padOffset > blockLen - pos) {
				this.process(view, 0);
				pos = 0;
			}
			for (let i = pos; i < blockLen; i++) buffer[i] = 0;
			setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
			this.process(view, 0);
			const oview = createView(out);
			const len = this.outputLen;
			if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
			const outLen = len / 4;
			const state = this.get();
			if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
			for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
		}
		digest() {
			const { buffer, outputLen } = this;
			this.digestInto(buffer);
			const res = buffer.slice(0, outputLen);
			this.destroy();
			return res;
		}
		_cloneInto(to) {
			to || (to = new this.constructor());
			to.set(...this.get());
			const { blockLen, buffer, length, finished, destroyed, pos } = this;
			to.length = length;
			to.pos = pos;
			to.finished = finished;
			to.destroyed = destroyed;
			if (length % blockLen) to.buffer.set(buffer);
			return to;
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha256.js
var SHA256_K, SHA256_IV, SHA256_W, SHA256, sha256;
var init_sha256 = __esmMin((() => {
	init__md();
	init_utils$1();
	SHA256_K = /* @__PURE__ */ new Uint32Array([
		1116352408,
		1899447441,
		3049323471,
		3921009573,
		961987163,
		1508970993,
		2453635748,
		2870763221,
		3624381080,
		310598401,
		607225278,
		1426881987,
		1925078388,
		2162078206,
		2614888103,
		3248222580,
		3835390401,
		4022224774,
		264347078,
		604807628,
		770255983,
		1249150122,
		1555081692,
		1996064986,
		2554220882,
		2821834349,
		2952996808,
		3210313671,
		3336571891,
		3584528711,
		113926993,
		338241895,
		666307205,
		773529912,
		1294757372,
		1396182291,
		1695183700,
		1986661051,
		2177026350,
		2456956037,
		2730485921,
		2820302411,
		3259730800,
		3345764771,
		3516065817,
		3600352804,
		4094571909,
		275423344,
		430227734,
		506948616,
		659060556,
		883997877,
		958139571,
		1322822218,
		1537002063,
		1747873779,
		1955562222,
		2024104815,
		2227730452,
		2361852424,
		2428436474,
		2756734187,
		3204031479,
		3329325298
	]);
	SHA256_IV = /* @__PURE__ */ new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	SHA256_W = /* @__PURE__ */ new Uint32Array(64);
	SHA256 = class extends HashMD {
		constructor() {
			super(64, 32, 8, false);
			this.A = SHA256_IV[0] | 0;
			this.B = SHA256_IV[1] | 0;
			this.C = SHA256_IV[2] | 0;
			this.D = SHA256_IV[3] | 0;
			this.E = SHA256_IV[4] | 0;
			this.F = SHA256_IV[5] | 0;
			this.G = SHA256_IV[6] | 0;
			this.H = SHA256_IV[7] | 0;
		}
		get() {
			const { A, B, C, D, E, F, G, H } = this;
			return [
				A,
				B,
				C,
				D,
				E,
				F,
				G,
				H
			];
		}
		set(A, B, C, D, E, F, G, H) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
			this.F = F | 0;
			this.G = G | 0;
			this.H = H | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA256_W[i] = view.getUint32(offset, false);
			for (let i = 16; i < 64; i++) {
				const W15 = SHA256_W[i - 15];
				const W2 = SHA256_W[i - 2];
				const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
				const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
				SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
			}
			let { A, B, C, D, E, F, G, H } = this;
			for (let i = 0; i < 64; i++) {
				const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
				const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
				const T2 = (rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22)) + Maj(A, B, C) | 0;
				H = G;
				G = F;
				F = E;
				E = D + T1 | 0;
				D = C;
				C = B;
				B = A;
				A = T1 + T2 | 0;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			F = F + this.F | 0;
			G = G + this.G | 0;
			H = H + this.H | 0;
			this.set(A, B, C, D, E, F, G, H);
		}
		roundClean() {
			SHA256_W.fill(0);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0);
			this.buffer.fill(0);
		}
	};
	sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256());
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/curves/esm/abstract/utils.js
var utils_exports = /* @__PURE__ */ __exportAll({
	aInRange: () => aInRange,
	abool: () => abool,
	abytes: () => abytes,
	bitGet: () => bitGet,
	bitLen: () => bitLen,
	bitMask: () => bitMask,
	bitSet: () => bitSet,
	bytesToHex: () => bytesToHex,
	bytesToNumberBE: () => bytesToNumberBE,
	bytesToNumberLE: () => bytesToNumberLE,
	concatBytes: () => concatBytes,
	createHmacDrbg: () => createHmacDrbg,
	ensureBytes: () => ensureBytes,
	equalBytes: () => equalBytes,
	hexToBytes: () => hexToBytes,
	hexToNumber: () => hexToNumber,
	inRange: () => inRange,
	isBytes: () => isBytes,
	memoized: () => memoized,
	notImplemented: () => notImplemented,
	numberToBytesBE: () => numberToBytesBE,
	numberToBytesLE: () => numberToBytesLE,
	numberToHexUnpadded: () => numberToHexUnpadded,
	numberToVarBytesBE: () => numberToVarBytesBE,
	utf8ToBytes: () => utf8ToBytes,
	validateObject: () => validateObject
});
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function isBytes(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes(item) {
	if (!isBytes(item)) throw new Error("Uint8Array expected");
}
function abool(title, value) {
	if (typeof value !== "boolean") throw new Error(title + " boolean expected, got " + value);
}
/**
* @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
*/
function bytesToHex(bytes) {
	abytes(bytes);
	let hex = "";
	for (let i = 0; i < bytes.length; i++) hex += hexes[bytes[i]];
	return hex;
}
function numberToHexUnpadded(num) {
	const hex = num.toString(16);
	return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	return hex === "" ? _0n$3 : BigInt("0x" + hex);
}
function asciiToBase16(ch) {
	if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0;
	if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10);
	if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10);
}
/**
* @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
*/
function hexToBytes(hex) {
	if (typeof hex !== "string") throw new Error("hex string expected, got " + typeof hex);
	const hl = hex.length;
	const al = hl / 2;
	if (hl % 2) throw new Error("hex string expected, got unpadded hex of length " + hl);
	const array = new Uint8Array(al);
	for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
		const n1 = asciiToBase16(hex.charCodeAt(hi));
		const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
		if (n1 === void 0 || n2 === void 0) {
			const char = hex[hi] + hex[hi + 1];
			throw new Error("hex string expected, got non-hex character \"" + char + "\" at index " + hi);
		}
		array[ai] = n1 * 16 + n2;
	}
	return array;
}
function bytesToNumberBE(bytes) {
	return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
	abytes(bytes);
	return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
	return hexToBytes(n.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n, len) {
	return numberToBytesBE(n, len).reverse();
}
function numberToVarBytesBE(n) {
	return hexToBytes(numberToHexUnpadded(n));
}
/**
* Takes hex string or Uint8Array, converts to Uint8Array.
* Validates output length.
* Will throw error for other types.
* @param title descriptive title for an error e.g. 'private key'
* @param hex hex string or Uint8Array
* @param expectedLength optional, will compare to result array's length
* @returns
*/
function ensureBytes(title, hex, expectedLength) {
	let res;
	if (typeof hex === "string") try {
		res = hexToBytes(hex);
	} catch (e) {
		throw new Error(title + " must be hex string or Uint8Array, cause: " + e);
	}
	else if (isBytes(hex)) res = Uint8Array.from(hex);
	else throw new Error(title + " must be hex string or Uint8Array");
	const len = res.length;
	if (typeof expectedLength === "number" && len !== expectedLength) throw new Error(title + " of length " + expectedLength + " expected, got " + len);
	return res;
}
/**
* Copies several Uint8Arrays into one.
*/
function concatBytes(...arrays) {
	let sum = 0;
	for (let i = 0; i < arrays.length; i++) {
		const a = arrays[i];
		abytes(a);
		sum += a.length;
	}
	const res = new Uint8Array(sum);
	for (let i = 0, pad = 0; i < arrays.length; i++) {
		const a = arrays[i];
		res.set(a, pad);
		pad += a.length;
	}
	return res;
}
function equalBytes(a, b) {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
	return diff === 0;
}
/**
* @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
*/
function utf8ToBytes(str) {
	if (typeof str !== "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(str));
}
function inRange(n, min, max) {
	return isPosBig(n) && isPosBig(min) && isPosBig(max) && min <= n && n < max;
}
/**
* Asserts min <= n < max. NOTE: It's < max and not <= max.
* @example
* aInRange('x', x, 1n, 256n); // would assume x is in (1n..255n)
*/
function aInRange(title, n, min, max) {
	if (!inRange(n, min, max)) throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n);
}
/**
* Calculates amount of bits in a bigint.
* Same as `n.toString(2).length`
*/
function bitLen(n) {
	let len = 0;
	for (; n > _0n$3; n >>= _1n$4, len += 1);
	return len;
}
/**
* Gets single bit at position.
* NOTE: first bit position is 0 (same as arrays)
* Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
*/
function bitGet(n, pos) {
	return n >> BigInt(pos) & _1n$4;
}
/**
* Sets single bit at position.
*/
function bitSet(n, pos, value) {
	return n | (value ? _1n$4 : _0n$3) << BigInt(pos);
}
/**
* Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
* @returns function that will call DRBG until 2nd arg returns something meaningful
* @example
*   const drbg = createHmacDRBG<Key>(32, 32, hmac);
*   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
*/
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
	if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
	if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
	if (typeof hmacFn !== "function") throw new Error("hmacFn must be a function");
	let v = u8n(hashLen);
	let k = u8n(hashLen);
	let i = 0;
	const reset = () => {
		v.fill(1);
		k.fill(0);
		i = 0;
	};
	const h = (...b) => hmacFn(k, v, ...b);
	const reseed = (seed = u8n()) => {
		k = h(u8fr([0]), seed);
		v = h();
		if (seed.length === 0) return;
		k = h(u8fr([1]), seed);
		v = h();
	};
	const gen = () => {
		if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
		let len = 0;
		const out = [];
		while (len < qByteLen) {
			v = h();
			const sl = v.slice();
			out.push(sl);
			len += v.length;
		}
		return concatBytes(...out);
	};
	const genUntil = (seed, pred) => {
		reset();
		reseed(seed);
		let res = void 0;
		while (!(res = pred(gen()))) reseed();
		reset();
		return res;
	};
	return genUntil;
}
function validateObject(object, validators, optValidators = {}) {
	const checkField = (fieldName, type, isOptional) => {
		const checkVal = validatorFns[type];
		if (typeof checkVal !== "function") throw new Error("invalid validator function");
		const val = object[fieldName];
		if (isOptional && val === void 0) return;
		if (!checkVal(val, object)) throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
	};
	for (const [fieldName, type] of Object.entries(validators)) checkField(fieldName, type, false);
	for (const [fieldName, type] of Object.entries(optValidators)) checkField(fieldName, type, true);
	return object;
}
/**
* Memoizes (caches) computation result.
* Uses WeakMap: the value is going auto-cleaned by GC after last reference is removed.
*/
function memoized(fn) {
	const map = /* @__PURE__ */ new WeakMap();
	return (arg, ...args) => {
		const val = map.get(arg);
		if (val !== void 0) return val;
		const computed = fn(arg, ...args);
		map.set(arg, computed);
		return computed;
	};
}
var _0n$3, _1n$4, _2n$2, hexes, asciis, isPosBig, bitMask, u8n, u8fr, validatorFns, notImplemented;
var init_utils = __esmMin((() => {
	_0n$3 = /* @__PURE__ */ BigInt(0);
	_1n$4 = /* @__PURE__ */ BigInt(1);
	_2n$2 = /* @__PURE__ */ BigInt(2);
	hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
	asciis = {
		_0: 48,
		_9: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
	isPosBig = (n) => typeof n === "bigint" && _0n$3 <= n;
	bitMask = (n) => (_2n$2 << BigInt(n - 1)) - _1n$4;
	u8n = (data) => new Uint8Array(data);
	u8fr = (arr) => Uint8Array.from(arr);
	validatorFns = {
		bigint: (val) => typeof val === "bigint",
		function: (val) => typeof val === "function",
		boolean: (val) => typeof val === "boolean",
		string: (val) => typeof val === "string",
		stringOrUint8Array: (val) => typeof val === "string" || isBytes(val),
		isSafeInteger: (val) => Number.isSafeInteger(val),
		array: (val) => Array.isArray(val),
		field: (val, object) => object.Fp.isValid(val),
		hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
	};
	notImplemented = () => {
		throw new Error("not implemented");
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/hmac.js
var HMAC, hmac;
var init_hmac = __esmMin((() => {
	init__assert();
	init_utils$1();
	HMAC = class extends Hash {
		constructor(hash, _key) {
			super();
			this.finished = false;
			this.destroyed = false;
			ahash(hash);
			const key = toBytes(_key);
			this.iHash = hash.create();
			if (typeof this.iHash.update !== "function") throw new Error("Expected instance of class which extends utils.Hash");
			this.blockLen = this.iHash.blockLen;
			this.outputLen = this.iHash.outputLen;
			const blockLen = this.blockLen;
			const pad = new Uint8Array(blockLen);
			pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
			for (let i = 0; i < pad.length; i++) pad[i] ^= 54;
			this.iHash.update(pad);
			this.oHash = hash.create();
			for (let i = 0; i < pad.length; i++) pad[i] ^= 106;
			this.oHash.update(pad);
			pad.fill(0);
		}
		update(buf) {
			aexists(this);
			this.iHash.update(buf);
			return this;
		}
		digestInto(out) {
			aexists(this);
			abytes$1(out, this.outputLen);
			this.finished = true;
			this.iHash.digestInto(out);
			this.oHash.update(out);
			this.oHash.digestInto(out);
			this.destroy();
		}
		digest() {
			const out = new Uint8Array(this.oHash.outputLen);
			this.digestInto(out);
			return out;
		}
		_cloneInto(to) {
			to || (to = Object.create(Object.getPrototypeOf(this), {}));
			const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
			to = to;
			to.finished = finished;
			to.destroyed = destroyed;
			to.blockLen = blockLen;
			to.outputLen = outputLen;
			to.oHash = oHash._cloneInto(to.oHash);
			to.iHash = iHash._cloneInto(to.iHash);
			return to;
		}
		destroy() {
			this.destroyed = true;
			this.oHash.destroy();
			this.iHash.destroy();
		}
	};
	hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
	hmac.create = (hash, key) => new HMAC(hash, key);
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/curves/esm/abstract/modular.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function mod(a, b) {
	const result = a % b;
	return result >= _0n$2 ? result : b + result;
}
/**
* Efficiently raise num to power and do modular division.
* Unsafe in some contexts: uses ladder, so can expose bigint bits.
* @todo use field version && remove
* @example
* pow(2n, 6n, 11n) // 64n % 11n == 9n
*/
function pow(num, power, modulo) {
	if (power < _0n$2) throw new Error("invalid exponent, negatives unsupported");
	if (modulo <= _0n$2) throw new Error("invalid modulus");
	if (modulo === _1n$3) return _0n$2;
	let res = _1n$3;
	while (power > _0n$2) {
		if (power & _1n$3) res = res * num % modulo;
		num = num * num % modulo;
		power >>= _1n$3;
	}
	return res;
}
/** Does `x^(2^power)` mod p. `pow2(30, 4)` == `30^(2^4)` */
function pow2(x, power, modulo) {
	let res = x;
	while (power-- > _0n$2) {
		res *= res;
		res %= modulo;
	}
	return res;
}
/**
* Inverses number over modulo.
* Implemented using [Euclidean GCD](https://brilliant.org/wiki/extended-euclidean-algorithm/).
*/
function invert(number, modulo) {
	if (number === _0n$2) throw new Error("invert: expected non-zero number");
	if (modulo <= _0n$2) throw new Error("invert: expected positive modulus, got " + modulo);
	let a = mod(number, modulo);
	let b = modulo;
	let x = _0n$2, y = _1n$3, u = _1n$3, v = _0n$2;
	while (a !== _0n$2) {
		const q = b / a;
		const r = b % a;
		const m = x - u * q;
		const n = y - v * q;
		b = a, a = r, x = u, y = v, u = m, v = n;
	}
	if (b !== _1n$3) throw new Error("invert: does not exist");
	return mod(x, modulo);
}
/**
* Tonelli-Shanks square root search algorithm.
* 1. https://eprint.iacr.org/2012/685.pdf (page 12)
* 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
* Will start an infinite loop if field order P is not prime.
* @param P field order
* @returns function that takes field Fp (created from P) and number n
*/
function tonelliShanks(P) {
	const legendreC = (P - _1n$3) / _2n$1;
	let Q, S, Z;
	for (Q = P - _1n$3, S = 0; Q % _2n$1 === _0n$2; Q /= _2n$1, S++);
	for (Z = _2n$1; Z < P && pow(Z, legendreC, P) !== P - _1n$3; Z++) if (Z > 1e3) throw new Error("Cannot find square root: likely non-prime P");
	if (S === 1) {
		const p1div4 = (P + _1n$3) / _4n;
		return function tonelliFast(Fp, n) {
			const root = Fp.pow(n, p1div4);
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	const Q1div2 = (Q + _1n$3) / _2n$1;
	return function tonelliSlow(Fp, n) {
		if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error("Cannot find square root");
		let r = S;
		let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
		let x = Fp.pow(n, Q1div2);
		let b = Fp.pow(n, Q);
		while (!Fp.eql(b, Fp.ONE)) {
			if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO;
			let m = 1;
			for (let t2 = Fp.sqr(b); m < r; m++) {
				if (Fp.eql(t2, Fp.ONE)) break;
				t2 = Fp.sqr(t2);
			}
			const ge = Fp.pow(g, _1n$3 << BigInt(r - m - 1));
			g = Fp.sqr(ge);
			x = Fp.mul(x, ge);
			b = Fp.mul(b, g);
			r = m;
		}
		return x;
	};
}
/**
* Square root for a finite field. It will try to check if optimizations are applicable and fall back to 4:
*
* 1. P ≡ 3 (mod 4)
* 2. P ≡ 5 (mod 8)
* 3. P ≡ 9 (mod 16)
* 4. Tonelli-Shanks algorithm
*
* Different algorithms can give different roots, it is up to user to decide which one they want.
* For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
*/
function FpSqrt(P) {
	if (P % _4n === _3n$1) {
		const p1div4 = (P + _1n$3) / _4n;
		return function sqrt3mod4(Fp, n) {
			const root = Fp.pow(n, p1div4);
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	if (P % _8n === _5n) {
		const c1 = (P - _5n) / _8n;
		return function sqrt5mod8(Fp, n) {
			const n2 = Fp.mul(n, _2n$1);
			const v = Fp.pow(n2, c1);
			const nv = Fp.mul(n, v);
			const i = Fp.mul(Fp.mul(nv, _2n$1), v);
			const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
			if (!Fp.eql(Fp.sqr(root), n)) throw new Error("Cannot find square root");
			return root;
		};
	}
	if (P % _16n === _9n) {}
	return tonelliShanks(P);
}
function validateField(field) {
	return validateObject(field, FIELD_FIELDS.reduce((map, val) => {
		map[val] = "function";
		return map;
	}, {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "isSafeInteger",
		BITS: "isSafeInteger"
	}));
}
/**
* Same as `pow` but for Fp: non-constant-time.
* Unsafe in some contexts: uses ladder, so can expose bigint bits.
*/
function FpPow(f, num, power) {
	if (power < _0n$2) throw new Error("invalid exponent, negatives unsupported");
	if (power === _0n$2) return f.ONE;
	if (power === _1n$3) return num;
	let p = f.ONE;
	let d = num;
	while (power > _0n$2) {
		if (power & _1n$3) p = f.mul(p, d);
		d = f.sqr(d);
		power >>= _1n$3;
	}
	return p;
}
/**
* Efficiently invert an array of Field elements.
* `inv(0)` will return `undefined` here: make sure to throw an error.
*/
function FpInvertBatch(f, nums) {
	const tmp = new Array(nums.length);
	const lastMultiplied = nums.reduce((acc, num, i) => {
		if (f.is0(num)) return acc;
		tmp[i] = acc;
		return f.mul(acc, num);
	}, f.ONE);
	const inverted = f.inv(lastMultiplied);
	nums.reduceRight((acc, num, i) => {
		if (f.is0(num)) return acc;
		tmp[i] = f.mul(acc, tmp[i]);
		return f.mul(acc, num);
	}, inverted);
	return tmp;
}
function nLength(n, nBitLength) {
	const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
	return {
		nBitLength: _nBitLength,
		nByteLength: Math.ceil(_nBitLength / 8)
	};
}
/**
* Initializes a finite field over prime.
* Major performance optimizations:
* * a) denormalized operations like mulN instead of mul
* * b) same object shape: never add or remove keys
* * c) Object.freeze
* Fragile: always run a benchmark on a change.
* Security note: operations don't check 'isValid' for all elements for performance reasons,
* it is caller responsibility to check this.
* This is low-level code, please make sure you know what you're doing.
* @param ORDER prime positive bigint
* @param bitLen how many bits the field consumes
* @param isLE (def: false) if encoding / decoding should be in little-endian
* @param redef optional faster redefinitions of sqrt and other methods
*/
function Field(ORDER, bitLen, isLE = false, redef = {}) {
	if (ORDER <= _0n$2) throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
	const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
	if (BYTES > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let sqrtP;
	const f = Object.freeze({
		ORDER,
		isLE,
		BITS,
		BYTES,
		MASK: bitMask(BITS),
		ZERO: _0n$2,
		ONE: _1n$3,
		create: (num) => mod(num, ORDER),
		isValid: (num) => {
			if (typeof num !== "bigint") throw new Error("invalid field element: expected bigint, got " + typeof num);
			return _0n$2 <= num && num < ORDER;
		},
		is0: (num) => num === _0n$2,
		isOdd: (num) => (num & _1n$3) === _1n$3,
		neg: (num) => mod(-num, ORDER),
		eql: (lhs, rhs) => lhs === rhs,
		sqr: (num) => mod(num * num, ORDER),
		add: (lhs, rhs) => mod(lhs + rhs, ORDER),
		sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
		mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
		pow: (num, power) => FpPow(f, num, power),
		div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
		sqrN: (num) => num * num,
		addN: (lhs, rhs) => lhs + rhs,
		subN: (lhs, rhs) => lhs - rhs,
		mulN: (lhs, rhs) => lhs * rhs,
		inv: (num) => invert(num, ORDER),
		sqrt: redef.sqrt || ((n) => {
			if (!sqrtP) sqrtP = FpSqrt(ORDER);
			return sqrtP(f, n);
		}),
		invertBatch: (lst) => FpInvertBatch(f, lst),
		cmov: (a, b, c) => c ? b : a,
		toBytes: (num) => isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
		fromBytes: (bytes) => {
			if (bytes.length !== BYTES) throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
			return isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
		}
	});
	return Object.freeze(f);
}
/**
* Returns total number of bytes consumed by the field element.
* For example, 32 bytes for usual 256-bit weierstrass curve.
* @param fieldOrder number of field elements, usually CURVE.n
* @returns byte length of field
*/
function getFieldBytesLength(fieldOrder) {
	if (typeof fieldOrder !== "bigint") throw new Error("field order must be bigint");
	const bitLength = fieldOrder.toString(2).length;
	return Math.ceil(bitLength / 8);
}
/**
* Returns minimal amount of bytes that can be safely reduced
* by field order.
* Should be 2^-128 for 128-bit curve such as P256.
* @param fieldOrder number of field elements, usually CURVE.n
* @returns byte length of target hash
*/
function getMinHashLength(fieldOrder) {
	const length = getFieldBytesLength(fieldOrder);
	return length + Math.ceil(length / 2);
}
/**
* "Constant-time" private key generation utility.
* Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
* and convert them into private scalar, with the modulo bias being negligible.
* Needs at least 48 bytes of input for 32-byte private key.
* https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
* FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
* RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
* @param hash hash output from SHA3 or a similar function
* @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
* @param isLE interpret hash bytes as LE num
* @returns valid private scalar
*/
function mapHashToField(key, fieldOrder, isLE = false) {
	const len = key.length;
	const fieldLen = getFieldBytesLength(fieldOrder);
	const minLen = getMinHashLength(fieldOrder);
	if (len < 16 || len < minLen || len > 1024) throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
	const reduced = mod(isLE ? bytesToNumberLE(key) : bytesToNumberBE(key), fieldOrder - _1n$3) + _1n$3;
	return isLE ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
var _0n$2, _1n$3, _2n$1, _3n$1, _4n, _5n, _8n, _9n, _16n, FIELD_FIELDS;
var init_modular = __esmMin((() => {
	init_utils();
	_0n$2 = BigInt(0);
	_1n$3 = BigInt(1);
	_2n$1 = /* @__PURE__ */ BigInt(2);
	_3n$1 = /* @__PURE__ */ BigInt(3);
	_4n = /* @__PURE__ */ BigInt(4);
	_5n = /* @__PURE__ */ BigInt(5);
	_8n = /* @__PURE__ */ BigInt(8);
	_9n = /* @__PURE__ */ BigInt(9);
	_16n = /* @__PURE__ */ BigInt(16);
	FIELD_FIELDS = [
		"create",
		"isValid",
		"is0",
		"neg",
		"inv",
		"sqrt",
		"sqr",
		"eql",
		"add",
		"sub",
		"mul",
		"pow",
		"div",
		"addN",
		"subN",
		"mulN",
		"sqrN"
	];
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/curves/esm/abstract/curve.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function constTimeNegate(condition, item) {
	const neg = item.negate();
	return condition ? neg : item;
}
function validateW(W, bits) {
	if (!Number.isSafeInteger(W) || W <= 0 || W > bits) throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W);
}
function calcWOpts(W, bits) {
	validateW(W, bits);
	return {
		windows: Math.ceil(bits / W) + 1,
		windowSize: 2 ** (W - 1)
	};
}
function validateMSMPoints(points, c) {
	if (!Array.isArray(points)) throw new Error("array expected");
	points.forEach((p, i) => {
		if (!(p instanceof c)) throw new Error("invalid point at index " + i);
	});
}
function validateMSMScalars(scalars, field) {
	if (!Array.isArray(scalars)) throw new Error("array of scalars expected");
	scalars.forEach((s, i) => {
		if (!field.isValid(s)) throw new Error("invalid scalar at index " + i);
	});
}
function getW(P) {
	return pointWindowSizes.get(P) || 1;
}
/**
* Elliptic curve multiplication of Point by scalar. Fragile.
* Scalars should always be less than curve order: this should be checked inside of a curve itself.
* Creates precomputation tables for fast multiplication:
* - private scalar is split by fixed size windows of W bits
* - every window point is collected from window's table & added to accumulator
* - since windows are different, same point inside tables won't be accessed more than once per calc
* - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
* - +1 window is neccessary for wNAF
* - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
*
* @todo Research returning 2d JS array of windows, instead of a single window.
* This would allow windows to be in different memory locations
*/
function wNAF(c, bits) {
	return {
		constTimeNegate,
		hasPrecomputes(elm) {
			return getW(elm) !== 1;
		},
		unsafeLadder(elm, n, p = c.ZERO) {
			let d = elm;
			while (n > _0n$1) {
				if (n & _1n$2) p = p.add(d);
				d = d.double();
				n >>= _1n$2;
			}
			return p;
		},
		/**
		* Creates a wNAF precomputation window. Used for caching.
		* Default window size is set by `utils.precompute()` and is equal to 8.
		* Number of precomputed points depends on the curve size:
		* 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
		* - 𝑊 is the window size
		* - 𝑛 is the bitlength of the curve order.
		* For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
		* @param elm Point instance
		* @param W window size
		* @returns precomputed point tables flattened to a single array
		*/
		precomputeWindow(elm, W) {
			const { windows, windowSize } = calcWOpts(W, bits);
			const points = [];
			let p = elm;
			let base = p;
			for (let window = 0; window < windows; window++) {
				base = p;
				points.push(base);
				for (let i = 1; i < windowSize; i++) {
					base = base.add(p);
					points.push(base);
				}
				p = base.double();
			}
			return points;
		},
		/**
		* Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
		* @param W window size
		* @param precomputes precomputed tables
		* @param n scalar (we don't check here, but should be less than curve order)
		* @returns real and fake (for const-time) points
		*/
		wNAF(W, precomputes, n) {
			const { windows, windowSize } = calcWOpts(W, bits);
			let p = c.ZERO;
			let f = c.BASE;
			const mask = BigInt(2 ** W - 1);
			const maxNumber = 2 ** W;
			const shiftBy = BigInt(W);
			for (let window = 0; window < windows; window++) {
				const offset = window * windowSize;
				let wbits = Number(n & mask);
				n >>= shiftBy;
				if (wbits > windowSize) {
					wbits -= maxNumber;
					n += _1n$2;
				}
				const offset1 = offset;
				const offset2 = offset + Math.abs(wbits) - 1;
				const cond1 = window % 2 !== 0;
				const cond2 = wbits < 0;
				if (wbits === 0) f = f.add(constTimeNegate(cond1, precomputes[offset1]));
				else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
			}
			return {
				p,
				f
			};
		},
		/**
		* Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
		* @param W window size
		* @param precomputes precomputed tables
		* @param n scalar (we don't check here, but should be less than curve order)
		* @param acc accumulator point to add result of multiplication
		* @returns point
		*/
		wNAFUnsafe(W, precomputes, n, acc = c.ZERO) {
			const { windows, windowSize } = calcWOpts(W, bits);
			const mask = BigInt(2 ** W - 1);
			const maxNumber = 2 ** W;
			const shiftBy = BigInt(W);
			for (let window = 0; window < windows; window++) {
				const offset = window * windowSize;
				if (n === _0n$1) break;
				let wbits = Number(n & mask);
				n >>= shiftBy;
				if (wbits > windowSize) {
					wbits -= maxNumber;
					n += _1n$2;
				}
				if (wbits === 0) continue;
				let curr = precomputes[offset + Math.abs(wbits) - 1];
				if (wbits < 0) curr = curr.negate();
				acc = acc.add(curr);
			}
			return acc;
		},
		getPrecomputes(W, P, transform) {
			let comp = pointPrecomputes.get(P);
			if (!comp) {
				comp = this.precomputeWindow(P, W);
				if (W !== 1) pointPrecomputes.set(P, transform(comp));
			}
			return comp;
		},
		wNAFCached(P, n, transform) {
			const W = getW(P);
			return this.wNAF(W, this.getPrecomputes(W, P, transform), n);
		},
		wNAFCachedUnsafe(P, n, transform, prev) {
			const W = getW(P);
			if (W === 1) return this.unsafeLadder(P, n, prev);
			return this.wNAFUnsafe(W, this.getPrecomputes(W, P, transform), n, prev);
		},
		setWindowSize(P, W) {
			validateW(W, bits);
			pointWindowSizes.set(P, W);
			pointPrecomputes.delete(P);
		}
	};
}
/**
* Pippenger algorithm for multi-scalar multiplication (MSM, Pa + Qb + Rc + ...).
* 30x faster vs naive addition on L=4096, 10x faster with precomputes.
* For N=254bit, L=1, it does: 1024 ADD + 254 DBL. For L=5: 1536 ADD + 254 DBL.
* Algorithmically constant-time (for same L), even when 1 point + scalar, or when scalar = 0.
* @param c Curve Point constructor
* @param fieldN field over CURVE.N - important that it's not over CURVE.P
* @param points array of L curve points
* @param scalars array of L scalars (aka private keys / bigints)
*/
function pippenger(c, fieldN, points, scalars) {
	validateMSMPoints(points, c);
	validateMSMScalars(scalars, fieldN);
	if (points.length !== scalars.length) throw new Error("arrays of points and scalars must have equal length");
	const zero = c.ZERO;
	const wbits = bitLen(BigInt(points.length));
	const windowSize = wbits > 12 ? wbits - 3 : wbits > 4 ? wbits - 2 : wbits ? 2 : 1;
	const MASK = (1 << windowSize) - 1;
	const buckets = new Array(MASK + 1).fill(zero);
	const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
	let sum = zero;
	for (let i = lastBits; i >= 0; i -= windowSize) {
		buckets.fill(zero);
		for (let j = 0; j < scalars.length; j++) {
			const scalar = scalars[j];
			const wbits = Number(scalar >> BigInt(i) & BigInt(MASK));
			buckets[wbits] = buckets[wbits].add(points[j]);
		}
		let resI = zero;
		for (let j = buckets.length - 1, sumI = zero; j > 0; j--) {
			sumI = sumI.add(buckets[j]);
			resI = resI.add(sumI);
		}
		sum = sum.add(resI);
		if (i !== 0) for (let j = 0; j < windowSize; j++) sum = sum.double();
	}
	return sum;
}
function validateBasic(curve) {
	validateField(curve.Fp);
	validateObject(curve, {
		n: "bigint",
		h: "bigint",
		Gx: "field",
		Gy: "field"
	}, {
		nBitLength: "isSafeInteger",
		nByteLength: "isSafeInteger"
	});
	return Object.freeze({
		...nLength(curve.n, curve.nBitLength),
		...curve,
		p: curve.Fp.ORDER
	});
}
var _0n$1, _1n$2, pointPrecomputes, pointWindowSizes;
var init_curve = __esmMin((() => {
	init_modular();
	init_utils();
	_0n$1 = BigInt(0);
	_1n$2 = BigInt(1);
	pointPrecomputes = /* @__PURE__ */ new WeakMap();
	pointWindowSizes = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/curves/esm/abstract/weierstrass.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function validateSigVerOpts(opts) {
	if (opts.lowS !== void 0) abool("lowS", opts.lowS);
	if (opts.prehash !== void 0) abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
	const opts = validateBasic(curve);
	validateObject(opts, {
		a: "field",
		b: "field"
	}, {
		allowedPrivateKeyLengths: "array",
		wrapPrivateKey: "boolean",
		isTorsionFree: "function",
		clearCofactor: "function",
		allowInfinityPoint: "boolean",
		fromBytes: "function",
		toBytes: "function"
	});
	const { endo, Fp, a } = opts;
	if (endo) {
		if (!Fp.eql(a, Fp.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
		if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
	}
	return Object.freeze({ ...opts });
}
function weierstrassPoints(opts) {
	const CURVE = validatePointOpts(opts);
	const { Fp } = CURVE;
	const Fn = Field(CURVE.n, CURVE.nBitLength);
	const toBytes = CURVE.toBytes || ((_c, point, _isCompressed) => {
		const a = point.toAffine();
		return concatBytes(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
	});
	const fromBytes = CURVE.fromBytes || ((bytes) => {
		const tail = bytes.subarray(1);
		return {
			x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
			y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
		};
	});
	/**
	* y² = x³ + ax + b: Short weierstrass curve formula
	* @returns y²
	*/
	function weierstrassEquation(x) {
		const { a, b } = CURVE;
		const x2 = Fp.sqr(x);
		const x3 = Fp.mul(x2, x);
		return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
	}
	if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx))) throw new Error("bad generator point: equation left != right");
	function isWithinCurveOrder(num) {
		return inRange(num, _1n$1, CURVE.n);
	}
	function normPrivateKeyToScalar(key) {
		const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N } = CURVE;
		if (lengths && typeof key !== "bigint") {
			if (isBytes(key)) key = bytesToHex(key);
			if (typeof key !== "string" || !lengths.includes(key.length)) throw new Error("invalid private key");
			key = key.padStart(nByteLength * 2, "0");
		}
		let num;
		try {
			num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
		} catch (error) {
			throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
		}
		if (wrapPrivateKey) num = mod(num, N);
		aInRange("private key", num, _1n$1, N);
		return num;
	}
	function assertPrjPoint(other) {
		if (!(other instanceof Point)) throw new Error("ProjectivePoint expected");
	}
	const toAffineMemo = memoized((p, iz) => {
		const { px: x, py: y, pz: z } = p;
		if (Fp.eql(z, Fp.ONE)) return {
			x,
			y
		};
		const is0 = p.is0();
		if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
		const ax = Fp.mul(x, iz);
		const ay = Fp.mul(y, iz);
		const zz = Fp.mul(z, iz);
		if (is0) return {
			x: Fp.ZERO,
			y: Fp.ZERO
		};
		if (!Fp.eql(zz, Fp.ONE)) throw new Error("invZ was invalid");
		return {
			x: ax,
			y: ay
		};
	});
	const assertValidMemo = memoized((p) => {
		if (p.is0()) {
			if (CURVE.allowInfinityPoint && !Fp.is0(p.py)) return;
			throw new Error("bad point: ZERO");
		}
		const { x, y } = p.toAffine();
		if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error("bad point: x or y not FE");
		const left = Fp.sqr(y);
		const right = weierstrassEquation(x);
		if (!Fp.eql(left, right)) throw new Error("bad point: equation left != right");
		if (!p.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
		return true;
	});
	/**
	* Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
	* Default Point works in 2d / affine coordinates: (x, y)
	* We're doing calculations in projective, because its operations don't require costly inversion.
	*/
	class Point {
		constructor(px, py, pz) {
			this.px = px;
			this.py = py;
			this.pz = pz;
			if (px == null || !Fp.isValid(px)) throw new Error("x required");
			if (py == null || !Fp.isValid(py)) throw new Error("y required");
			if (pz == null || !Fp.isValid(pz)) throw new Error("z required");
			Object.freeze(this);
		}
		static fromAffine(p) {
			const { x, y } = p || {};
			if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error("invalid affine point");
			if (p instanceof Point) throw new Error("projective point not allowed");
			const is0 = (i) => Fp.eql(i, Fp.ZERO);
			if (is0(x) && is0(y)) return Point.ZERO;
			return new Point(x, y, Fp.ONE);
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		/**
		* Takes a bunch of Projective Points but executes only one
		* inversion on all of them. Inversion is very slow operation,
		* so this improves performance massively.
		* Optimization: converts a list of projective points to a list of identical points with Z=1.
		*/
		static normalizeZ(points) {
			const toInv = Fp.invertBatch(points.map((p) => p.pz));
			return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
		}
		/**
		* Converts hash string or Uint8Array to Point.
		* @param hex short/long ECDSA hex
		*/
		static fromHex(hex) {
			const P = Point.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
			P.assertValidity();
			return P;
		}
		static fromPrivateKey(privateKey) {
			return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
		}
		static msm(points, scalars) {
			return pippenger(Point, Fn, points, scalars);
		}
		_setWindowSize(windowSize) {
			wnaf.setWindowSize(this, windowSize);
		}
		assertValidity() {
			assertValidMemo(this);
		}
		hasEvenY() {
			const { y } = this.toAffine();
			if (Fp.isOdd) return !Fp.isOdd(y);
			throw new Error("Field doesn't support isOdd");
		}
		/**
		* Compare one point to another.
		*/
		equals(other) {
			assertPrjPoint(other);
			const { px: X1, py: Y1, pz: Z1 } = this;
			const { px: X2, py: Y2, pz: Z2 } = other;
			const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
			const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
			return U1 && U2;
		}
		/**
		* Flips point to one corresponding to (x, -y) in Affine coordinates.
		*/
		negate() {
			return new Point(this.px, Fp.neg(this.py), this.pz);
		}
		double() {
			const { a, b } = CURVE;
			const b3 = Fp.mul(b, _3n);
			const { px: X1, py: Y1, pz: Z1 } = this;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			let t0 = Fp.mul(X1, X1);
			let t1 = Fp.mul(Y1, Y1);
			let t2 = Fp.mul(Z1, Z1);
			let t3 = Fp.mul(X1, Y1);
			t3 = Fp.add(t3, t3);
			Z3 = Fp.mul(X1, Z1);
			Z3 = Fp.add(Z3, Z3);
			X3 = Fp.mul(a, Z3);
			Y3 = Fp.mul(b3, t2);
			Y3 = Fp.add(X3, Y3);
			X3 = Fp.sub(t1, Y3);
			Y3 = Fp.add(t1, Y3);
			Y3 = Fp.mul(X3, Y3);
			X3 = Fp.mul(t3, X3);
			Z3 = Fp.mul(b3, Z3);
			t2 = Fp.mul(a, t2);
			t3 = Fp.sub(t0, t2);
			t3 = Fp.mul(a, t3);
			t3 = Fp.add(t3, Z3);
			Z3 = Fp.add(t0, t0);
			t0 = Fp.add(Z3, t0);
			t0 = Fp.add(t0, t2);
			t0 = Fp.mul(t0, t3);
			Y3 = Fp.add(Y3, t0);
			t2 = Fp.mul(Y1, Z1);
			t2 = Fp.add(t2, t2);
			t0 = Fp.mul(t2, t3);
			X3 = Fp.sub(X3, t0);
			Z3 = Fp.mul(t2, t1);
			Z3 = Fp.add(Z3, Z3);
			Z3 = Fp.add(Z3, Z3);
			return new Point(X3, Y3, Z3);
		}
		add(other) {
			assertPrjPoint(other);
			const { px: X1, py: Y1, pz: Z1 } = this;
			const { px: X2, py: Y2, pz: Z2 } = other;
			let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
			const a = CURVE.a;
			const b3 = Fp.mul(CURVE.b, _3n);
			let t0 = Fp.mul(X1, X2);
			let t1 = Fp.mul(Y1, Y2);
			let t2 = Fp.mul(Z1, Z2);
			let t3 = Fp.add(X1, Y1);
			let t4 = Fp.add(X2, Y2);
			t3 = Fp.mul(t3, t4);
			t4 = Fp.add(t0, t1);
			t3 = Fp.sub(t3, t4);
			t4 = Fp.add(X1, Z1);
			let t5 = Fp.add(X2, Z2);
			t4 = Fp.mul(t4, t5);
			t5 = Fp.add(t0, t2);
			t4 = Fp.sub(t4, t5);
			t5 = Fp.add(Y1, Z1);
			X3 = Fp.add(Y2, Z2);
			t5 = Fp.mul(t5, X3);
			X3 = Fp.add(t1, t2);
			t5 = Fp.sub(t5, X3);
			Z3 = Fp.mul(a, t4);
			X3 = Fp.mul(b3, t2);
			Z3 = Fp.add(X3, Z3);
			X3 = Fp.sub(t1, Z3);
			Z3 = Fp.add(t1, Z3);
			Y3 = Fp.mul(X3, Z3);
			t1 = Fp.add(t0, t0);
			t1 = Fp.add(t1, t0);
			t2 = Fp.mul(a, t2);
			t4 = Fp.mul(b3, t4);
			t1 = Fp.add(t1, t2);
			t2 = Fp.sub(t0, t2);
			t2 = Fp.mul(a, t2);
			t4 = Fp.add(t4, t2);
			t0 = Fp.mul(t1, t4);
			Y3 = Fp.add(Y3, t0);
			t0 = Fp.mul(t5, t4);
			X3 = Fp.mul(t3, X3);
			X3 = Fp.sub(X3, t0);
			t0 = Fp.mul(t3, t1);
			Z3 = Fp.mul(t5, Z3);
			Z3 = Fp.add(Z3, t0);
			return new Point(X3, Y3, Z3);
		}
		subtract(other) {
			return this.add(other.negate());
		}
		is0() {
			return this.equals(Point.ZERO);
		}
		wNAF(n) {
			return wnaf.wNAFCached(this, n, Point.normalizeZ);
		}
		/**
		* Non-constant-time multiplication. Uses double-and-add algorithm.
		* It's faster, but should only be used when you don't care about
		* an exposed private key e.g. sig verification, which works over *public* keys.
		*/
		multiplyUnsafe(sc) {
			const { endo, n: N } = CURVE;
			aInRange("scalar", sc, _0n, N);
			const I = Point.ZERO;
			if (sc === _0n) return I;
			if (this.is0() || sc === _1n$1) return this;
			if (!endo || wnaf.hasPrecomputes(this)) return wnaf.wNAFCachedUnsafe(this, sc, Point.normalizeZ);
			let { k1neg, k1, k2neg, k2 } = endo.splitScalar(sc);
			let k1p = I;
			let k2p = I;
			let d = this;
			while (k1 > _0n || k2 > _0n) {
				if (k1 & _1n$1) k1p = k1p.add(d);
				if (k2 & _1n$1) k2p = k2p.add(d);
				d = d.double();
				k1 >>= _1n$1;
				k2 >>= _1n$1;
			}
			if (k1neg) k1p = k1p.negate();
			if (k2neg) k2p = k2p.negate();
			k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
			return k1p.add(k2p);
		}
		/**
		* Constant time multiplication.
		* Uses wNAF method. Windowed method may be 10% faster,
		* but takes 2x longer to generate and consumes 2x memory.
		* Uses precomputes when available.
		* Uses endomorphism for Koblitz curves.
		* @param scalar by which the point would be multiplied
		* @returns New point
		*/
		multiply(scalar) {
			const { endo, n: N } = CURVE;
			aInRange("scalar", scalar, _1n$1, N);
			let point, fake;
			if (endo) {
				const { k1neg, k1, k2neg, k2 } = endo.splitScalar(scalar);
				let { p: k1p, f: f1p } = this.wNAF(k1);
				let { p: k2p, f: f2p } = this.wNAF(k2);
				k1p = wnaf.constTimeNegate(k1neg, k1p);
				k2p = wnaf.constTimeNegate(k2neg, k2p);
				k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
				point = k1p.add(k2p);
				fake = f1p.add(f2p);
			} else {
				const { p, f } = this.wNAF(scalar);
				point = p;
				fake = f;
			}
			return Point.normalizeZ([point, fake])[0];
		}
		/**
		* Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
		* Not using Strauss-Shamir trick: precomputation tables are faster.
		* The trick could be useful if both P and Q are not G (not in our case).
		* @returns non-zero affine point
		*/
		multiplyAndAddUnsafe(Q, a, b) {
			const G = Point.BASE;
			const mul = (P, a) => a === _0n || a === _1n$1 || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
			const sum = mul(this, a).add(mul(Q, b));
			return sum.is0() ? void 0 : sum;
		}
		toAffine(iz) {
			return toAffineMemo(this, iz);
		}
		isTorsionFree() {
			const { h: cofactor, isTorsionFree } = CURVE;
			if (cofactor === _1n$1) return true;
			if (isTorsionFree) return isTorsionFree(Point, this);
			throw new Error("isTorsionFree() has not been declared for the elliptic curve");
		}
		clearCofactor() {
			const { h: cofactor, clearCofactor } = CURVE;
			if (cofactor === _1n$1) return this;
			if (clearCofactor) return clearCofactor(Point, this);
			return this.multiplyUnsafe(CURVE.h);
		}
		toRawBytes(isCompressed = true) {
			abool("isCompressed", isCompressed);
			this.assertValidity();
			return toBytes(Point, this, isCompressed);
		}
		toHex(isCompressed = true) {
			abool("isCompressed", isCompressed);
			return bytesToHex(this.toRawBytes(isCompressed));
		}
	}
	Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
	Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
	const _bits = CURVE.nBitLength;
	const wnaf = wNAF(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
	return {
		CURVE,
		ProjectivePoint: Point,
		normPrivateKeyToScalar,
		weierstrassEquation,
		isWithinCurveOrder
	};
}
function validateOpts(curve) {
	const opts = validateBasic(curve);
	validateObject(opts, {
		hash: "hash",
		hmac: "function",
		randomBytes: "function"
	}, {
		bits2int: "function",
		bits2int_modN: "function",
		lowS: "boolean"
	});
	return Object.freeze({
		lowS: true,
		...opts
	});
}
/**
* Creates short weierstrass curve and ECDSA signature methods for it.
* @example
* import { Field } from '@noble/curves/abstract/modular';
* // Before that, define BigInt-s: a, b, p, n, Gx, Gy
* const curve = weierstrass({ a, b, Fp: Field(p), n, Gx, Gy, h: 1n })
*/
function weierstrass(curveDef) {
	const CURVE = validateOpts(curveDef);
	const { Fp, n: CURVE_ORDER } = CURVE;
	const compressedLen = Fp.BYTES + 1;
	const uncompressedLen = 2 * Fp.BYTES + 1;
	function modN(a) {
		return mod(a, CURVE_ORDER);
	}
	function invN(a) {
		return invert(a, CURVE_ORDER);
	}
	const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
		...CURVE,
		toBytes(_c, point, isCompressed) {
			const a = point.toAffine();
			const x = Fp.toBytes(a.x);
			const cat = concatBytes;
			abool("isCompressed", isCompressed);
			if (isCompressed) return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
			else return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
		},
		fromBytes(bytes) {
			const len = bytes.length;
			const head = bytes[0];
			const tail = bytes.subarray(1);
			if (len === compressedLen && (head === 2 || head === 3)) {
				const x = bytesToNumberBE(tail);
				if (!inRange(x, _1n$1, Fp.ORDER)) throw new Error("Point is not on curve");
				const y2 = weierstrassEquation(x);
				let y;
				try {
					y = Fp.sqrt(y2);
				} catch (sqrtError) {
					const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
					throw new Error("Point is not on curve" + suffix);
				}
				const isYOdd = (y & _1n$1) === _1n$1;
				if ((head & 1) === 1 !== isYOdd) y = Fp.neg(y);
				return {
					x,
					y
				};
			} else if (len === uncompressedLen && head === 4) return {
				x: Fp.fromBytes(tail.subarray(0, Fp.BYTES)),
				y: Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES))
			};
			else {
				const cl = compressedLen;
				const ul = uncompressedLen;
				throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
			}
		}
	});
	const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
	function isBiggerThanHalfOrder(number) {
		return number > CURVE_ORDER >> _1n$1;
	}
	function normalizeS(s) {
		return isBiggerThanHalfOrder(s) ? modN(-s) : s;
	}
	const slcNum = (b, from, to) => bytesToNumberBE(b.slice(from, to));
	/**
	* ECDSA signature with its (r, s) properties. Supports DER & compact representations.
	*/
	class Signature {
		constructor(r, s, recovery) {
			this.r = r;
			this.s = s;
			this.recovery = recovery;
			this.assertValidity();
		}
		static fromCompact(hex) {
			const l = CURVE.nByteLength;
			hex = ensureBytes("compactSignature", hex, l * 2);
			return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
		}
		static fromDER(hex) {
			const { r, s } = DER.toSig(ensureBytes("DER", hex));
			return new Signature(r, s);
		}
		assertValidity() {
			aInRange("r", this.r, _1n$1, CURVE_ORDER);
			aInRange("s", this.s, _1n$1, CURVE_ORDER);
		}
		addRecoveryBit(recovery) {
			return new Signature(this.r, this.s, recovery);
		}
		recoverPublicKey(msgHash) {
			const { r, s, recovery: rec } = this;
			const h = bits2int_modN(ensureBytes("msgHash", msgHash));
			if (rec == null || ![
				0,
				1,
				2,
				3
			].includes(rec)) throw new Error("recovery id invalid");
			const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
			if (radj >= Fp.ORDER) throw new Error("recovery id 2 or 3 invalid");
			const prefix = (rec & 1) === 0 ? "02" : "03";
			const R = Point.fromHex(prefix + numToNByteStr(radj));
			const ir = invN(radj);
			const u1 = modN(-h * ir);
			const u2 = modN(s * ir);
			const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
			if (!Q) throw new Error("point at infinify");
			Q.assertValidity();
			return Q;
		}
		hasHighS() {
			return isBiggerThanHalfOrder(this.s);
		}
		normalizeS() {
			return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return hexToBytes(this.toDERHex());
		}
		toDERHex() {
			return DER.hexFromSig({
				r: this.r,
				s: this.s
			});
		}
		toCompactRawBytes() {
			return hexToBytes(this.toCompactHex());
		}
		toCompactHex() {
			return numToNByteStr(this.r) + numToNByteStr(this.s);
		}
	}
	const utils = {
		isValidPrivateKey(privateKey) {
			try {
				normPrivateKeyToScalar(privateKey);
				return true;
			} catch (error) {
				return false;
			}
		},
		normPrivateKeyToScalar,
		/**
		* Produces cryptographically secure private key from random of size
		* (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
		*/
		randomPrivateKey: () => {
			const length = getMinHashLength(CURVE.n);
			return mapHashToField(CURVE.randomBytes(length), CURVE.n);
		},
		/**
		* Creates precompute table for an arbitrary EC point. Makes point "cached".
		* Allows to massively speed-up `point.multiply(scalar)`.
		* @returns cached point
		* @example
		* const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
		* fast.multiply(privKey); // much faster ECDH now
		*/
		precompute(windowSize = 8, point = Point.BASE) {
			point._setWindowSize(windowSize);
			point.multiply(BigInt(3));
			return point;
		}
	};
	/**
	* Computes public key for a private key. Checks for validity of the private key.
	* @param privateKey private key
	* @param isCompressed whether to return compact (default), or full key
	* @returns Public key, full when isCompressed=false; short when isCompressed=true
	*/
	function getPublicKey(privateKey, isCompressed = true) {
		return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
	}
	/**
	* Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
	*/
	function isProbPub(item) {
		const arr = isBytes(item);
		const str = typeof item === "string";
		const len = (arr || str) && item.length;
		if (arr) return len === compressedLen || len === uncompressedLen;
		if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
		if (item instanceof Point) return true;
		return false;
	}
	/**
	* ECDH (Elliptic Curve Diffie Hellman).
	* Computes shared public key from private key and public key.
	* Checks: 1) private key validity 2) shared key is on-curve.
	* Does NOT hash the result.
	* @param privateA private key
	* @param publicB different public key
	* @param isCompressed whether to return compact (default), or full key
	* @returns shared public key
	*/
	function getSharedSecret(privateA, publicB, isCompressed = true) {
		if (isProbPub(privateA)) throw new Error("first arg must be private key");
		if (!isProbPub(publicB)) throw new Error("second arg must be public key");
		return Point.fromHex(publicB).multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
	}
	const bits2int = CURVE.bits2int || function(bytes) {
		if (bytes.length > 8192) throw new Error("input is too large");
		const num = bytesToNumberBE(bytes);
		const delta = bytes.length * 8 - CURVE.nBitLength;
		return delta > 0 ? num >> BigInt(delta) : num;
	};
	const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
		return modN(bits2int(bytes));
	};
	const ORDER_MASK = bitMask(CURVE.nBitLength);
	/**
	* Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
	*/
	function int2octets(num) {
		aInRange("num < 2^" + CURVE.nBitLength, num, _0n, ORDER_MASK);
		return numberToBytesBE(num, CURVE.nByteLength);
	}
	function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
		if (["recovered", "canonical"].some((k) => k in opts)) throw new Error("sign() legacy options not supported");
		const { hash, randomBytes } = CURVE;
		let { lowS, prehash, extraEntropy: ent } = opts;
		if (lowS == null) lowS = true;
		msgHash = ensureBytes("msgHash", msgHash);
		validateSigVerOpts(opts);
		if (prehash) msgHash = ensureBytes("prehashed msgHash", hash(msgHash));
		const h1int = bits2int_modN(msgHash);
		const d = normPrivateKeyToScalar(privateKey);
		const seedArgs = [int2octets(d), int2octets(h1int)];
		if (ent != null && ent !== false) {
			const e = ent === true ? randomBytes(Fp.BYTES) : ent;
			seedArgs.push(ensureBytes("extraEntropy", e));
		}
		const seed = concatBytes(...seedArgs);
		const m = h1int;
		function k2sig(kBytes) {
			const k = bits2int(kBytes);
			if (!isWithinCurveOrder(k)) return;
			const ik = invN(k);
			const q = Point.BASE.multiply(k).toAffine();
			const r = modN(q.x);
			if (r === _0n) return;
			const s = modN(ik * modN(m + r * d));
			if (s === _0n) return;
			let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$1);
			let normS = s;
			if (lowS && isBiggerThanHalfOrder(s)) {
				normS = normalizeS(s);
				recovery ^= 1;
			}
			return new Signature(r, normS, recovery);
		}
		return {
			seed,
			k2sig
		};
	}
	const defaultSigOpts = {
		lowS: CURVE.lowS,
		prehash: false
	};
	const defaultVerOpts = {
		lowS: CURVE.lowS,
		prehash: false
	};
	/**
	* Signs message hash with a private key.
	* ```
	* sign(m, d, k) where
	*   (x, y) = G × k
	*   r = x mod n
	*   s = (m + dr)/k mod n
	* ```
	* @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
	* @param privKey private key
	* @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
	* @returns signature with recovery param
	*/
	function sign(msgHash, privKey, opts = defaultSigOpts) {
		const { seed, k2sig } = prepSig(msgHash, privKey, opts);
		const C = CURVE;
		return createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac)(seed, k2sig);
	}
	Point.BASE._setWindowSize(8);
	/**
	* Verifies a signature against message hash and public key.
	* Rejects lowS signatures by default: to override,
	* specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
	*
	* ```
	* verify(r, s, h, P) where
	*   U1 = hs^-1 mod n
	*   U2 = rs^-1 mod n
	*   R = U1⋅G - U2⋅P
	*   mod(R.x, n) == r
	* ```
	*/
	function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
		const sg = signature;
		msgHash = ensureBytes("msgHash", msgHash);
		publicKey = ensureBytes("publicKey", publicKey);
		const { lowS, prehash, format } = opts;
		validateSigVerOpts(opts);
		if ("strict" in opts) throw new Error("options.strict was renamed to lowS");
		if (format !== void 0 && format !== "compact" && format !== "der") throw new Error("format must be compact or der");
		const isHex = typeof sg === "string" || isBytes(sg);
		const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
		if (!isHex && !isObj) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
		let _sig = void 0;
		let P;
		try {
			if (isObj) _sig = new Signature(sg.r, sg.s);
			if (isHex) {
				try {
					if (format !== "compact") _sig = Signature.fromDER(sg);
				} catch (derError) {
					if (!(derError instanceof DER.Err)) throw derError;
				}
				if (!_sig && format !== "der") _sig = Signature.fromCompact(sg);
			}
			P = Point.fromHex(publicKey);
		} catch (error) {
			return false;
		}
		if (!_sig) return false;
		if (lowS && _sig.hasHighS()) return false;
		if (prehash) msgHash = CURVE.hash(msgHash);
		const { r, s } = _sig;
		const h = bits2int_modN(msgHash);
		const is = invN(s);
		const u1 = modN(h * is);
		const u2 = modN(r * is);
		const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
		if (!R) return false;
		return modN(R.x) === r;
	}
	return {
		CURVE,
		getPublicKey,
		getSharedSecret,
		sign,
		verify,
		ProjectivePoint: Point,
		Signature,
		utils
	};
}
var b2n, h2b, DERErr, DER, _0n, _1n$1, _3n;
var init_weierstrass = __esmMin((() => {
	init_curve();
	init_modular();
	init_utils();
	({bytesToNumberBE: b2n, hexToBytes: h2b} = utils_exports);
	DERErr = class extends Error {
		constructor(m = "") {
			super(m);
		}
	};
	DER = {
		Err: DERErr,
		_tlv: {
			encode: (tag, data) => {
				const { Err: E } = DER;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length & 1) throw new E("tlv.encode: unpadded data");
				const dataLen = data.length / 2;
				const len = numberToHexUnpadded(dataLen);
				if (len.length / 2 & 128) throw new E("tlv.encode: long form length too big");
				const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
				return numberToHexUnpadded(tag) + lenLen + len + data;
			},
			decode(tag, data) {
				const { Err: E } = DER;
				let pos = 0;
				if (tag < 0 || tag > 256) throw new E("tlv.encode: wrong tag");
				if (data.length < 2 || data[pos++] !== tag) throw new E("tlv.decode: wrong tlv");
				const first = data[pos++];
				const isLong = !!(first & 128);
				let length = 0;
				if (!isLong) length = first;
				else {
					const lenLen = first & 127;
					if (!lenLen) throw new E("tlv.decode(long): indefinite length not supported");
					if (lenLen > 4) throw new E("tlv.decode(long): byte length is too big");
					const lengthBytes = data.subarray(pos, pos + lenLen);
					if (lengthBytes.length !== lenLen) throw new E("tlv.decode: length bytes not complete");
					if (lengthBytes[0] === 0) throw new E("tlv.decode(long): zero leftmost byte");
					for (const b of lengthBytes) length = length << 8 | b;
					pos += lenLen;
					if (length < 128) throw new E("tlv.decode(long): not minimal encoding");
				}
				const v = data.subarray(pos, pos + length);
				if (v.length !== length) throw new E("tlv.decode: wrong value length");
				return {
					v,
					l: data.subarray(pos + length)
				};
			}
		},
		_int: {
			encode(num) {
				const { Err: E } = DER;
				if (num < _0n) throw new E("integer: negative integers are not allowed");
				let hex = numberToHexUnpadded(num);
				if (Number.parseInt(hex[0], 16) & 8) hex = "00" + hex;
				if (hex.length & 1) throw new E("unexpected DER parsing assertion: unpadded hex");
				return hex;
			},
			decode(data) {
				const { Err: E } = DER;
				if (data[0] & 128) throw new E("invalid signature integer: negative");
				if (data[0] === 0 && !(data[1] & 128)) throw new E("invalid signature integer: unnecessary leading zero");
				return b2n(data);
			}
		},
		toSig(hex) {
			const { Err: E, _int: int, _tlv: tlv } = DER;
			const data = typeof hex === "string" ? h2b(hex) : hex;
			abytes(data);
			const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
			if (seqLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
			const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
			if (sLeftBytes.length) throw new E("invalid signature: left bytes after parsing");
			return {
				r: int.decode(rBytes),
				s: int.decode(sBytes)
			};
		},
		hexFromSig(sig) {
			const { _tlv: tlv, _int: int } = DER;
			const seq = tlv.encode(2, int.encode(sig.r)) + tlv.encode(2, int.encode(sig.s));
			return tlv.encode(48, seq);
		}
	};
	_0n = BigInt(0);
	_1n$1 = BigInt(1);
	_3n = BigInt(3);
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/curves/esm/_shortw_utils.js
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/** connects noble-curves to noble-hashes */
function getHash(hash) {
	return {
		hash,
		hmac: (key, ...msgs) => hmac(hash, key, concatBytes$1(...msgs)),
		randomBytes: randomBytes$1
	};
}
function createCurve(curveDef, defHash) {
	const create = (hash) => weierstrass({
		...curveDef,
		...getHash(hash)
	});
	return {
		...create(defHash),
		create
	};
}
var init__shortw_utils = __esmMin((() => {
	init_hmac();
	init_utils$1();
	init_weierstrass();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_exports = /* @__PURE__ */ __exportAll({ secp256k1: () => secp256k1 });
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/**
* √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
* (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
*/
function sqrtMod(y) {
	const P = secp256k1P;
	const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
	const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
	const b2 = y * y * y % P;
	const b3 = b2 * b2 * y % P;
	const b11 = pow2(pow2(pow2(b3, _3n, P) * b3 % P, _3n, P) * b3 % P, _2n, P) * b2 % P;
	const b22 = pow2(b11, _11n, P) * b11 % P;
	const b44 = pow2(b22, _22n, P) * b22 % P;
	const b88 = pow2(b44, _44n, P) * b44 % P;
	const root = pow2(pow2(pow2(pow2(pow2(pow2(b88, _88n, P) * b88 % P, _44n, P) * b44 % P, _3n, P) * b3 % P, _23n, P) * b22 % P, _6n, P) * b2 % P, _2n, P);
	if (!Fpk1.eql(Fpk1.sqr(root), y)) throw new Error("Cannot find square root");
	return root;
}
var secp256k1P, secp256k1N, _1n, _2n, divNearest, Fpk1, secp256k1;
var init_secp256k1 = __esmMin((() => {
	init_sha256();
	init__shortw_utils();
	init_modular();
	secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
	secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
	_1n = BigInt(1);
	_2n = BigInt(2);
	divNearest = (a, b) => (a + b / _2n) / b;
	Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
	secp256k1 = createCurve({
		a: BigInt(0),
		b: BigInt(7),
		Fp: Fpk1,
		n: secp256k1N,
		Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
		Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
		h: BigInt(1),
		lowS: true,
		endo: {
			beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
			splitScalar: (k) => {
				const n = secp256k1N;
				const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
				const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
				const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
				const b2 = a1;
				const POW_2_128 = BigInt("0x100000000000000000000000000000000");
				const c1 = divNearest(b2 * k, n);
				const c2 = divNearest(-b1 * k, n);
				let k1 = mod(k - c1 * a1 - c2 * a2, n);
				let k2 = mod(-c1 * b1 - c2 * b2, n);
				const k1neg = k1 > POW_2_128;
				const k2neg = k2 > POW_2_128;
				if (k1neg) k1 = n - k1;
				if (k2neg) k2 = n - k2;
				if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalar: Endomorphism failed, k=" + k);
				return {
					k1neg,
					k1,
					k2neg,
					k2
				};
			}
		}
	}, sha256);
	secp256k1.ProjectivePoint;
}));
//#endregion
export { aoutput$1 as A, wrapConstructor$2 as B, isLE$1 as C, abytes$3 as D, wrapConstructor$1 as E, byteSwap32$2 as F, init__assert$2 as G, aexists$2 as H, init_utils$5 as I, isLE$2 as L, init_secp256k1$2 as M, secp256k1_exports$2 as N, aexists$1 as O, Hash$2 as P, toBytes$2 as R, init_utils$3 as S, u32$1 as T, anumber$2 as U, abytes$5 as V, aoutput$2 as W, require_utils as _, init_utils$1 as a, Hash$1 as b, u32 as c, aexists as d, anumber as f, require_modular as g, require_secp256k1 as h, byteSwap32 as i, init__assert$1 as j, anumber$1 as k, wrapConstructor as l, init__assert as m, secp256k1_exports as n, isLE as o, aoutput as p, Hash as r, toBytes as s, init_secp256k1 as t, abytes$1 as u, init_secp256k1$1 as v, toBytes$1 as w, byteSwap32$1 as x, secp256k1_exports$1 as y, u32$2 as z };
