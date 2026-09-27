import { n as __esmMin, r as __exportAll } from "../../_runtime.mjs";
import { $ as require_cjs$2, A as o, B as formatJsonRpcResult, Ct as init_esm$1, D as init_index_es$9, E as f$2, Et as require_cjs, F as isJsonRpcRequest, G as init_index_es$4, I as isJsonRpcResponse, J as toString, K as init_src, L as isJsonRpcResult, M as init_esm$3, P as isJsonRpcError, R as formatJsonRpcError, Sn as init_esm, St as r, V as getBigIntRpcId, W as C$1, Y as fromString, Z as concat, _t as init_esm$2, at as Qo$1, bt as i$1, ct as A$1, et as require_cjs$1, ft as init_index_es$7, gt as init_index_es$6, ht as h$1, it as Qe$2, k as init_index_es$8, lt as E$1, mt as y$2, nt as init_es, ot as init_index_es$3, pt as k$2, rt as Po$2, st as sn$2, tt as detect, ut as import_pino, vt as safeJsonParse, wt as IEvents, xn as esm_default, xt as init_index_es$5, yt as safeJsonStringify, z as formatJsonRpcRequest } from "../@reown/appkit+[...].mjs";
import { n as keccak_256, t as init_sha3 } from "../noble__hashes.mjs";
import n, { EventEmitter } from "events";
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
	if (!value) return false;
	if (typeof value !== "string") return false;
	return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esmMin((() => {}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/size.js
/**
* @description Retrieves the size of the value (in bytes).
*
* @param value The value (hex or byte array) to retrieve the size of.
* @returns The size of the value (in bytes).
*/
function size(value) {
	if (isHex(value, { strict: false })) return Math.ceil((value.length - 2) / 2);
	return value.length;
}
var init_size = __esmMin((() => {
	init_isHex();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esmMin((() => {
	version = "2.23.2";
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
	if (fn?.(err)) return err;
	if (err && typeof err === "object" && "cause" in err && err.cause !== void 0) return walk(err.cause, fn);
	return fn ? null : err;
}
var errorConfig, BaseError;
var init_base = __esmMin((() => {
	init_version();
	errorConfig = {
		getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
		version: `viem@${version}`
	};
	BaseError = class BaseError extends Error {
		constructor(shortMessage, args = {}) {
			const details = (() => {
				if (args.cause instanceof BaseError) return args.cause.details;
				if (args.cause?.message) return args.cause.message;
				return args.details;
			})();
			const docsPath = (() => {
				if (args.cause instanceof BaseError) return args.cause.docsPath || args.docsPath;
				return args.docsPath;
			})();
			const docsUrl = errorConfig.getDocsUrl?.({
				...args,
				docsPath
			});
			const message = [
				shortMessage || "An error occurred.",
				"",
				...args.metaMessages ? [...args.metaMessages, ""] : [],
				...docsUrl ? [`Docs: ${docsUrl}`] : [],
				...details ? [`Details: ${details}`] : [],
				...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
			].join("\n");
			super(message, args.cause ? { cause: args.cause } : void 0);
			Object.defineProperty(this, "details", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: void 0
			});
			Object.defineProperty(this, "docsPath", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: void 0
			});
			Object.defineProperty(this, "metaMessages", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: void 0
			});
			Object.defineProperty(this, "shortMessage", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: void 0
			});
			Object.defineProperty(this, "version", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: void 0
			});
			Object.defineProperty(this, "name", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: "BaseError"
			});
			this.details = details;
			this.docsPath = docsPath;
			this.metaMessages = args.metaMessages;
			this.name = args.name ?? this.name;
			this.shortMessage = shortMessage;
			this.version = version;
		}
		walk(fn) {
			return walk(this, fn);
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/data.js
var SizeExceedsPaddingSizeError;
var init_data = __esmMin((() => {
	init_base();
	SizeExceedsPaddingSizeError = class extends BaseError {
		constructor({ size, targetSize, type }) {
			super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size = 32 } = {}) {
	if (typeof hexOrBytes === "string") return padHex(hexOrBytes, {
		dir,
		size
	});
	return padBytes(hexOrBytes, {
		dir,
		size
	});
}
function padHex(hex_, { dir, size = 32 } = {}) {
	if (size === null) return hex_;
	const hex = hex_.replace("0x", "");
	if (hex.length > size * 2) throw new SizeExceedsPaddingSizeError({
		size: Math.ceil(hex.length / 2),
		targetSize: size,
		type: "hex"
	});
	return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size * 2, "0")}`;
}
function padBytes(bytes, { dir, size = 32 } = {}) {
	if (size === null) return bytes;
	if (bytes.length > size) throw new SizeExceedsPaddingSizeError({
		size: bytes.length,
		targetSize: size,
		type: "bytes"
	});
	const paddedBytes = new Uint8Array(size);
	for (let i = 0; i < size; i++) {
		const padEnd = dir === "right";
		paddedBytes[padEnd ? i : size - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
	}
	return paddedBytes;
}
var init_pad = __esmMin((() => {
	init_data();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError;
var init_encoding = __esmMin((() => {
	init_base();
	IntegerOutOfRangeError = class extends BaseError {
		constructor({ max, min, signed, size, value }) {
			super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
		}
	};
	SizeOverflowError = class extends BaseError {
		constructor({ givenSize, maxSize }) {
			super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size$1 }) {
	if (size(hexOrBytes) > size$1) throw new SizeOverflowError({
		givenSize: size(hexOrBytes),
		maxSize: size$1
	});
}
/**
* Decodes a hex value into a bigint.
*
* - Docs: https://viem.sh/docs/utilities/fromHex#hextobigint
*
* @param hex Hex value to decode.
* @param opts Options.
* @returns BigInt value.
*
* @example
* import { hexToBigInt } from 'viem'
* const data = hexToBigInt('0x1a4', { signed: true })
* // 420n
*
* @example
* import { hexToBigInt } from 'viem'
* const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
* // 420n
*/
function hexToBigInt(hex, opts = {}) {
	const { signed } = opts;
	if (opts.size) assertSize(hex, { size: opts.size });
	const value = BigInt(hex);
	if (!signed) return value;
	const size = (hex.length - 2) / 2;
	if (value <= (1n << BigInt(size) * 8n - 1n) - 1n) return value;
	return value - BigInt(`0x${"f".padStart(size * 2, "f")}`) - 1n;
}
/**
* Decodes a hex string into a number.
*
* - Docs: https://viem.sh/docs/utilities/fromHex#hextonumber
*
* @param hex Hex value to decode.
* @param opts Options.
* @returns Number value.
*
* @example
* import { hexToNumber } from 'viem'
* const data = hexToNumber('0x1a4')
* // 420
*
* @example
* import { hexToNumber } from 'viem'
* const data = hexToBigInt('0x00000000000000000000000000000000000000000000000000000000000001a4', { size: 32 })
* // 420
*/
function hexToNumber(hex, opts = {}) {
	return Number(hexToBigInt(hex, opts));
}
var init_fromHex = __esmMin((() => {
	init_encoding();
	init_size();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toHex.js
/**
* Encodes a string, number, bigint, or ByteArray into a hex string
*
* - Docs: https://viem.sh/docs/utilities/toHex
* - Example: https://viem.sh/docs/utilities/toHex#usage
*
* @param value Value to encode.
* @param opts Options.
* @returns Hex value.
*
* @example
* import { toHex } from 'viem'
* const data = toHex('Hello world')
* // '0x48656c6c6f20776f726c6421'
*
* @example
* import { toHex } from 'viem'
* const data = toHex(420)
* // '0x1a4'
*
* @example
* import { toHex } from 'viem'
* const data = toHex('Hello world', { size: 32 })
* // '0x48656c6c6f20776f726c64210000000000000000000000000000000000000000'
*/
function toHex(value, opts = {}) {
	if (typeof value === "number" || typeof value === "bigint") return numberToHex(value, opts);
	if (typeof value === "string") return stringToHex(value, opts);
	if (typeof value === "boolean") return boolToHex(value, opts);
	return bytesToHex(value, opts);
}
/**
* Encodes a boolean into a hex string
*
* - Docs: https://viem.sh/docs/utilities/toHex#booltohex
*
* @param value Value to encode.
* @param opts Options.
* @returns Hex value.
*
* @example
* import { boolToHex } from 'viem'
* const data = boolToHex(true)
* // '0x1'
*
* @example
* import { boolToHex } from 'viem'
* const data = boolToHex(false)
* // '0x0'
*
* @example
* import { boolToHex } from 'viem'
* const data = boolToHex(true, { size: 32 })
* // '0x0000000000000000000000000000000000000000000000000000000000000001'
*/
function boolToHex(value, opts = {}) {
	const hex = `0x${Number(value)}`;
	if (typeof opts.size === "number") {
		assertSize(hex, { size: opts.size });
		return pad(hex, { size: opts.size });
	}
	return hex;
}
/**
* Encodes a bytes array into a hex string
*
* - Docs: https://viem.sh/docs/utilities/toHex#bytestohex
*
* @param value Value to encode.
* @param opts Options.
* @returns Hex value.
*
* @example
* import { bytesToHex } from 'viem'
* const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
* // '0x48656c6c6f20576f726c6421'
*
* @example
* import { bytesToHex } from 'viem'
* const data = bytesToHex(Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]), { size: 32 })
* // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
*/
function bytesToHex(value, opts = {}) {
	let string = "";
	for (let i = 0; i < value.length; i++) string += hexes[value[i]];
	const hex = `0x${string}`;
	if (typeof opts.size === "number") {
		assertSize(hex, { size: opts.size });
		return pad(hex, {
			dir: "right",
			size: opts.size
		});
	}
	return hex;
}
/**
* Encodes a number or bigint into a hex string
*
* - Docs: https://viem.sh/docs/utilities/toHex#numbertohex
*
* @param value Value to encode.
* @param opts Options.
* @returns Hex value.
*
* @example
* import { numberToHex } from 'viem'
* const data = numberToHex(420)
* // '0x1a4'
*
* @example
* import { numberToHex } from 'viem'
* const data = numberToHex(420, { size: 32 })
* // '0x00000000000000000000000000000000000000000000000000000000000001a4'
*/
function numberToHex(value_, opts = {}) {
	const { signed, size } = opts;
	const value = BigInt(value_);
	let maxValue;
	if (size) {
		if (signed) maxValue = (1n << BigInt(size) * 8n - 1n) - 1n;
		else maxValue = 2n ** (BigInt(size) * 8n) - 1n;
	} else if (typeof value_ === "number") maxValue = BigInt(Number.MAX_SAFE_INTEGER);
	const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
	if (maxValue && value > maxValue || value < minValue) {
		const suffix = typeof value_ === "bigint" ? "n" : "";
		throw new IntegerOutOfRangeError({
			max: maxValue ? `${maxValue}${suffix}` : void 0,
			min: `${minValue}${suffix}`,
			signed,
			size,
			value: `${value_}${suffix}`
		});
	}
	const hex = `0x${(signed && value < 0 ? (1n << BigInt(size * 8)) + BigInt(value) : value).toString(16)}`;
	if (size) return pad(hex, { size });
	return hex;
}
/**
* Encodes a UTF-8 string into a hex string
*
* - Docs: https://viem.sh/docs/utilities/toHex#stringtohex
*
* @param value Value to encode.
* @param opts Options.
* @returns Hex value.
*
* @example
* import { stringToHex } from 'viem'
* const data = stringToHex('Hello World!')
* // '0x48656c6c6f20576f726c6421'
*
* @example
* import { stringToHex } from 'viem'
* const data = stringToHex('Hello World!', { size: 32 })
* // '0x48656c6c6f20576f726c64210000000000000000000000000000000000000000'
*/
function stringToHex(value_, opts = {}) {
	return bytesToHex(encoder$1.encode(value_), opts);
}
var hexes, encoder$1;
var init_toHex = __esmMin((() => {
	init_encoding();
	init_pad();
	init_fromHex();
	hexes = /*#__PURE__*/ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
	encoder$1 = /*#__PURE__*/ new TextEncoder();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toBytes.js
/**
* Encodes a UTF-8 string, hex value, bigint, number or boolean to a byte array.
*
* - Docs: https://viem.sh/docs/utilities/toBytes
* - Example: https://viem.sh/docs/utilities/toBytes#usage
*
* @param value Value to encode.
* @param opts Options.
* @returns Byte array value.
*
* @example
* import { toBytes } from 'viem'
* const data = toBytes('Hello world')
* // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
*
* @example
* import { toBytes } from 'viem'
* const data = toBytes(420)
* // Uint8Array([1, 164])
*
* @example
* import { toBytes } from 'viem'
* const data = toBytes(420, { size: 4 })
* // Uint8Array([0, 0, 1, 164])
*/
function toBytes(value, opts = {}) {
	if (typeof value === "number" || typeof value === "bigint") return numberToBytes(value, opts);
	if (typeof value === "boolean") return boolToBytes(value, opts);
	if (isHex(value)) return hexToBytes(value, opts);
	return stringToBytes(value, opts);
}
/**
* Encodes a boolean into a byte array.
*
* - Docs: https://viem.sh/docs/utilities/toBytes#booltobytes
*
* @param value Boolean value to encode.
* @param opts Options.
* @returns Byte array value.
*
* @example
* import { boolToBytes } from 'viem'
* const data = boolToBytes(true)
* // Uint8Array([1])
*
* @example
* import { boolToBytes } from 'viem'
* const data = boolToBytes(true, { size: 32 })
* // Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
*/
function boolToBytes(value, opts = {}) {
	const bytes = /* @__PURE__ */ new Uint8Array(1);
	bytes[0] = Number(value);
	if (typeof opts.size === "number") {
		assertSize(bytes, { size: opts.size });
		return pad(bytes, { size: opts.size });
	}
	return bytes;
}
function charCodeToBase16(char) {
	if (char >= charCodeMap.zero && char <= charCodeMap.nine) return char - charCodeMap.zero;
	if (char >= charCodeMap.A && char <= charCodeMap.F) return char - (charCodeMap.A - 10);
	if (char >= charCodeMap.a && char <= charCodeMap.f) return char - (charCodeMap.a - 10);
}
/**
* Encodes a hex string into a byte array.
*
* - Docs: https://viem.sh/docs/utilities/toBytes#hextobytes
*
* @param hex Hex string to encode.
* @param opts Options.
* @returns Byte array value.
*
* @example
* import { hexToBytes } from 'viem'
* const data = hexToBytes('0x48656c6c6f20776f726c6421')
* // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
*
* @example
* import { hexToBytes } from 'viem'
* const data = hexToBytes('0x48656c6c6f20776f726c6421', { size: 32 })
* // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
*/
function hexToBytes(hex_, opts = {}) {
	let hex = hex_;
	if (opts.size) {
		assertSize(hex, { size: opts.size });
		hex = pad(hex, {
			dir: "right",
			size: opts.size
		});
	}
	let hexString = hex.slice(2);
	if (hexString.length % 2) hexString = `0${hexString}`;
	const length = hexString.length / 2;
	const bytes = new Uint8Array(length);
	for (let index = 0, j = 0; index < length; index++) {
		const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
		const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
		if (nibbleLeft === void 0 || nibbleRight === void 0) throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
		bytes[index] = nibbleLeft * 16 + nibbleRight;
	}
	return bytes;
}
/**
* Encodes a number into a byte array.
*
* - Docs: https://viem.sh/docs/utilities/toBytes#numbertobytes
*
* @param value Number to encode.
* @param opts Options.
* @returns Byte array value.
*
* @example
* import { numberToBytes } from 'viem'
* const data = numberToBytes(420)
* // Uint8Array([1, 164])
*
* @example
* import { numberToBytes } from 'viem'
* const data = numberToBytes(420, { size: 4 })
* // Uint8Array([0, 0, 1, 164])
*/
function numberToBytes(value, opts) {
	return hexToBytes(numberToHex(value, opts));
}
/**
* Encodes a UTF-8 string into a byte array.
*
* - Docs: https://viem.sh/docs/utilities/toBytes#stringtobytes
*
* @param value String to encode.
* @param opts Options.
* @returns Byte array value.
*
* @example
* import { stringToBytes } from 'viem'
* const data = stringToBytes('Hello world!')
* // Uint8Array([72, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 33])
*
* @example
* import { stringToBytes } from 'viem'
* const data = stringToBytes('Hello world!', { size: 32 })
* // Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
*/
function stringToBytes(value, opts = {}) {
	const bytes = encoder.encode(value);
	if (typeof opts.size === "number") {
		assertSize(bytes, { size: opts.size });
		return pad(bytes, {
			dir: "right",
			size: opts.size
		});
	}
	return bytes;
}
var encoder, charCodeMap;
var init_toBytes = __esmMin((() => {
	init_base();
	init_isHex();
	init_pad();
	init_fromHex();
	init_toHex();
	encoder = /*#__PURE__*/ new TextEncoder();
	charCodeMap = {
		zero: 48,
		nine: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
	const to = to_ || "hex";
	const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
	if (to === "bytes") return bytes;
	return toHex(bytes);
}
var init_keccak256 = __esmMin((() => {
	init_sha3();
	init_isHex();
	init_toBytes();
	init_toHex();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esmMin((() => {
	LruMap = class extends Map {
		constructor(size) {
			super();
			Object.defineProperty(this, "maxSize", {
				enumerable: true,
				configurable: true,
				writable: true,
				value: void 0
			});
			this.maxSize = size;
		}
		get(key) {
			const value = super.get(key);
			if (super.has(key) && value !== void 0) {
				this.delete(key);
				super.set(key, value);
			}
			return value;
		}
		set(key, value) {
			super.set(key, value);
			if (this.maxSize && this.size > this.maxSize) {
				const firstKey = this.keys().next().value;
				if (firstKey) this.delete(firstKey);
			}
			return this;
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
	if (checksumAddressCache.has(`${address_}.${chainId}`)) return checksumAddressCache.get(`${address_}.${chainId}`);
	const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
	const hash = keccak256(stringToBytes(hexAddress), "bytes");
	const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
	for (let i = 0; i < 40; i += 2) {
		if (hash[i >> 1] >> 4 >= 8 && address[i]) address[i] = address[i].toUpperCase();
		if ((hash[i >> 1] & 15) >= 8 && address[i + 1]) address[i + 1] = address[i + 1].toUpperCase();
	}
	const result = `0x${address.join("")}`;
	checksumAddressCache.set(`${address_}.${chainId}`, result);
	return result;
}
var checksumAddressCache;
var init_getAddress = __esmMin((() => {
	init_toBytes();
	init_keccak256();
	init_lru();
	checksumAddressCache = /*#__PURE__*/ new LruMap(8192);
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
/**
* @description Converts an ECDSA public key to an address.
*
* @param publicKey The public key to convert.
*
* @returns The address.
*/
function publicKeyToAddress(publicKey) {
	return checksumAddress(`0x${keccak256(`0x${publicKey.substring(4)}`).substring(26)}`);
}
var init_publicKeyToAddress = __esmMin((() => {
	init_getAddress();
	init_keccak256();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverPublicKey.js
async function recoverPublicKey({ hash, signature }) {
	const hashHex = isHex(hash) ? hash : toHex(hash);
	const { secp256k1 } = await import("../noble__curves+noble__hashes.mjs").then((n) => (n.t(), n.n));
	return `0x${(() => {
		if (typeof signature === "object" && "r" in signature && "s" in signature) {
			const { r, s, v, yParity } = signature;
			const recoveryBit = toRecoveryBit(Number(yParity ?? v));
			return new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit);
		}
		const signatureHex = isHex(signature) ? signature : toHex(signature);
		const recoveryBit = toRecoveryBit(hexToNumber(`0x${signatureHex.slice(130)}`));
		return secp256k1.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
	})().recoverPublicKey(hashHex.substring(2)).toHex(false)}`;
}
function toRecoveryBit(yParityOrV) {
	if (yParityOrV === 0 || yParityOrV === 1) return yParityOrV;
	if (yParityOrV === 27) return 0;
	if (yParityOrV === 28) return 1;
	throw new Error("Invalid yParityOrV value");
}
var init_recoverPublicKey = __esmMin((() => {
	init_isHex();
	init_fromHex();
	init_toHex();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
	return publicKeyToAddress(await recoverPublicKey({
		hash,
		signature
	}));
}
var init_recoverAddress = __esmMin((() => {
	init_publicKeyToAddress();
	init_recoverPublicKey();
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/viem/_esm/index.js
var init__esm = __esmMin((() => {
	init_size();
	init_base();
	init_toBytes();
	init_keccak256();
	init_encoding();
	init_lru();
	init_getAddress();
	init_pad();
	init_data();
	init_toHex();
	init_fromHex();
	init_recoverAddress();
	init_publicKeyToAddress();
	init_recoverPublicKey();
}));
//#endregion
//#region node_modules/@walletconnect/utils/dist/index.es.js
var index_es_exports = /* @__PURE__ */ __exportAll({
	BASE10: () => ln$1,
	BASE16: () => G$1,
	BASE64: () => qt$1,
	BASE64URL: () => xe,
	COLON: () => ":",
	DEFAULT_DEPTH: () => 2,
	EMPTY_SPACE: () => " ",
	ENV_MAP: () => Y$1,
	INTERNAL_ERRORS: () => bo$1,
	MemoryStore: () => Ra,
	ONE_THOUSAND: () => ti$1,
	REACT_NATIVE_PRODUCT: () => $n$1,
	RELAYER_DEFAULT_PROTOCOL: () => "irn",
	SDK_ERRORS: () => wo$1,
	SDK_TYPE: () => "js",
	SLASH: () => "/",
	TYPE_0: () => 0,
	TYPE_1: () => 1,
	TYPE_2: () => 2,
	UTF8: () => Kt$1,
	addResourceToRecap: () => Er$1,
	appendToQueryString: () => Cn$1,
	assertType: () => ai$1,
	assignAbilityToActions: () => He$1,
	base64Decode: () => wr$1,
	base64Encode: () => mr$1,
	buildApprovedNamespaces: () => sa,
	buildAuthObject: () => ss,
	buildNamespacesFromAuth: () => ca,
	buildRecapStatement: () => xr$1,
	calcExpiry: () => Ei$1,
	capitalize: () => pi$1,
	capitalizeWord: () => qn$1,
	createDelayedPromise: () => gi$1,
	createEncodedRecap: () => fs,
	createExpiringPromise: () => yi$1,
	createRecap: () => br$1,
	decodeRecap: () => yt,
	decodeTypeByte: () => Bt$1,
	decodeTypeTwoEnvelope: () => Hc,
	decrypt: () => Mc,
	deriveSymKey: () => Cc,
	deserialize: () => Se$1,
	encodeRecap: () => he$1,
	encodeTypeByte: () => pn$1,
	encodeTypeTwoEnvelope: () => Dc,
	encrypt: () => Vc,
	engineEvent: () => xi$1,
	enumify: () => hi$1,
	extractSolanaTransactionId: () => Ji,
	formatAccountId: () => Bn$1,
	formatAccountWithChain: () => Ho$1,
	formatChainId: () => An$1,
	formatDeeplinkUrl: () => Kn$1,
	formatExpirerTarget: () => $e,
	formatIdTarget: () => wi$1,
	formatMessage: () => hr$1,
	formatMessageContext: () => ui$1,
	formatRelayParams: () => uo$1,
	formatRelayRpcUrl: () => si$1,
	formatStatementFromRecap: () => Ke$1,
	formatTopicTarget: () => mi$1,
	formatUA: () => Mn$1,
	formatUri: () => Wc,
	fromBase64: () => je$1,
	generateKeyPair: () => Lc,
	generateRandomBytes32: () => jc,
	getAccountsChains: () => It$1,
	getAccountsFromNamespaces: () => Ko$1,
	getAddressFromAccount: () => In,
	getAddressesFromAccounts: () => qo$1,
	getAppId: () => ri$1,
	getAppMetadata: () => Pn$1,
	getBrowserOnlineStatus: () => To$1,
	getChainFromAccount: () => Nn$1,
	getChainsFromAccounts: () => Un$1,
	getChainsFromNamespace: () => ue$1,
	getChainsFromNamespaces: () => Fo$1,
	getChainsFromRecap: () => hs,
	getChainsFromRequiredNamespaces: () => zo$1,
	getCommonValuesInArrays: () => Le$1,
	getCryptoKeyFromKeyData: () => io$1,
	getDecodedRecapFromResources: () => pr$1,
	getDeepLink: () => Oi$1,
	getDidAddress: () => De,
	getDidAddressSegments: () => de$1,
	getDidChainId: () => lr$1,
	getEnvironment: () => xt$1,
	getHttpUrl: () => ci$1,
	getInternalError: () => ht,
	getJavascriptID: () => Vn$1,
	getJavascriptOS: () => kn$1,
	getLastItems: () => Hn$1,
	getLinkModeURL: () => Xc,
	getMethodsFromRecap: () => ds,
	getNamespacedDidChainId: () => dr$1,
	getNamespacesChains: () => ho$1,
	getNamespacesEventsForChainId: () => go$1,
	getNamespacesFromAccounts: () => mo$1,
	getNamespacesMethodsForChainId: () => po$1,
	getNodeOnlineStatus: () => _o$1,
	getReCapActions: () => yr$1,
	getReactNativeOnlineStatus: () => Ro$1,
	getRecapAbilitiesFromResource: () => us,
	getRecapFromResources: () => pe$1,
	getRecapResource: () => gr$1,
	getRelayClientMetadata: () => ii$1,
	getRelayProtocolApi: () => Yc,
	getRelayProtocolName: () => Zc,
	getRequiredNamespacesFromNamespaces: () => ia,
	getSdkError: () => Nt$1,
	getSearchParamFromURL: () => Ai$1,
	getUniqueValues: () => Te$1,
	handleDeeplinkRedirect: () => Si$1,
	hasOverlap: () => gt,
	hashEthereumMessage: () => Ve$1,
	hashKey: () => Pc,
	hashMessage: () => kc,
	isAndroid: () => ei$1,
	isAppVisible: () => Ta,
	isBrowser: () => Tt$1,
	isCaipNamespace: () => yn$1,
	isConformingNamespaces: () => No$1,
	isExpired: () => vi$1,
	isIframe: () => Zn$1,
	isIos: () => ni$1,
	isNode: () => _e$1,
	isOnline: () => Na,
	isProposalStruct: () => la,
	isReactNative: () => pt,
	isRecap: () => qe$1,
	isSessionCompatible: () => ua,
	isSessionStruct: () => da,
	isTelegram: () => zn$1,
	isTestRun: () => Ii$1,
	isTypeOneEnvelope: () => Kc,
	isTypeTwoEnvelope: () => Fc,
	isUndefined: () => Et$1,
	isValidAccountId: () => Eo$1,
	isValidAccounts: () => So$1,
	isValidActions: () => Ao$1,
	isValidArray: () => se$1,
	isValidChainId: () => ce,
	isValidChains: () => vo$1,
	isValidController: () => ha,
	isValidEip1271Signature: () => cr$1,
	isValidEip191Signature: () => sr$1,
	isValidErrorReason: () => wa,
	isValidEvent: () => va,
	isValidId: () => ya,
	isValidNamespaceAccounts: () => Oo$1,
	isValidNamespaceActions: () => wn$1,
	isValidNamespaceChains: () => xo$1,
	isValidNamespaceMethodsOrEvents: () => mn$1,
	isValidNamespaces: () => Bo$1,
	isValidNamespacesChainId: () => xa,
	isValidNamespacesEvent: () => Oa,
	isValidNamespacesRequest: () => Sa,
	isValidNumber: () => Ae,
	isValidObject: () => Oe,
	isValidParams: () => ma,
	isValidRecap: () => at,
	isValidRelay: () => Io$1,
	isValidRelays: () => ga,
	isValidRequest: () => ba,
	isValidRequestExpiry: () => Ia,
	isValidRequiredNamespaces: () => pa,
	isValidResponse: () => Ea,
	isValidString: () => nt,
	isValidUrl: () => fa,
	mapEntries: () => di$1,
	mapToObj: () => fi$1,
	mergeArrays: () => ot,
	mergeEncodedRecaps: () => ls,
	mergeRecaps: () => vr$1,
	mergeRequiredAndOptionalNamespaces: () => aa,
	normalizeNamespaces: () => ie$1,
	objToMap: () => li$1,
	openDeeplink: () => Fn$1,
	parseAccountId: () => Ue$1,
	parseChainId: () => Ne,
	parseContextNames: () => Dn$1,
	parseExpirerTarget: () => bi$1,
	parseNamespaceKey: () => yo$1,
	parseRelayParams: () => co$1,
	parseTopic: () => ao$1,
	parseUri: () => Gc,
	populateAppMetadata: () => oi$1,
	populateAuthPayload: () => cs$1,
	recapHasResource: () => as,
	serialize: () => gn$1,
	sleep: () => Ni$1,
	subscribeToBrowserNetworkChange: () => $o$1,
	subscribeToNetworkChange: () => Ua,
	subscribeToReactNativeNetworkChange: () => Lo$1,
	toBase64: () => Yn$1,
	uuidv4: () => Bi$1,
	validateDecoding: () => qc,
	validateEncoding: () => oo$1,
	validateSignedCacao: () => is,
	verifyP256Jwt: () => zc,
	verifySignature: () => ir$1
});
function Ne(t) {
	const [e, n] = t.split(ae);
	return {
		namespace: e,
		reference: n
	};
}
function An$1(t) {
	const { namespace: e, reference: n } = t;
	return [e, n].join(ae);
}
function Ue$1(t) {
	const [e, n, r] = t.split(ae);
	return {
		namespace: e,
		reference: n,
		address: r
	};
}
function Bn$1(t) {
	const { namespace: e, reference: n, address: r } = t;
	return [
		e,
		n,
		r
	].join(ae);
}
function Te$1(t, e) {
	const n = [];
	return t.forEach((r) => {
		const o = e(r);
		n.includes(o) || n.push(o);
	}), n;
}
function In(t) {
	const { address: e } = Ue$1(t);
	return e;
}
function Nn$1(t) {
	const { namespace: e, reference: n } = Ue$1(t);
	return An$1({
		namespace: e,
		reference: n
	});
}
function Ho$1(t, e) {
	const { namespace: n, reference: r } = Ne(e);
	return Bn$1({
		namespace: n,
		reference: r,
		address: t
	});
}
function qo$1(t) {
	return Te$1(t, In);
}
function Un$1(t) {
	return Te$1(t, Nn$1);
}
function Ko$1(t, e = []) {
	const n = [];
	return Object.keys(t).forEach((r) => {
		if (e.length && !e.includes(r)) return;
		const o = t[r];
		n.push(...o.accounts);
	}), n;
}
function Fo$1(t, e = []) {
	const n = [];
	return Object.keys(t).forEach((r) => {
		if (e.length && !e.includes(r)) return;
		const o = t[r];
		n.push(...Un$1(o.accounts));
	}), n;
}
function zo$1(t, e = []) {
	const n = [];
	return Object.keys(t).forEach((r) => {
		if (e.length && !e.includes(r)) return;
		const o = t[r];
		n.push(...ue$1(r, o));
	}), n;
}
function ue$1(t, e) {
	return t.includes(":") ? [t] : e.chains || [];
}
function _e$1() {
	return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function pt() {
	return !(0, import_cjs$3.getDocument)() && !!(0, import_cjs$3.getNavigator)() && navigator.product === "ReactNative";
}
function ei$1() {
	return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function ni$1() {
	return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Tt$1() {
	return !_e$1() && !!(0, import_cjs$3.getNavigator)() && !!(0, import_cjs$3.getDocument)();
}
function xt$1() {
	return pt() ? Y$1.reactNative : _e$1() ? Y$1.node : Tt$1() ? Y$1.browser : Y$1.unknown;
}
function ri$1() {
	var t;
	try {
		return pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
	} catch {
		return;
	}
}
function Cn$1(t, e) {
	const n = new URLSearchParams(t);
	for (const r of Object.keys(e).sort()) if (e.hasOwnProperty(r)) {
		const o = e[r];
		o !== void 0 && n.set(r, o);
	}
	return n.toString();
}
function oi$1(t) {
	var e, n;
	const r = Pn$1();
	try {
		return t != null && t.url && r.url && new URL(t.url).host !== new URL(r.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r.url}. This is probably unintended and can lead to issues.`), t.url = r.url), (e = t?.icons) != null && e.length && t.icons.length > 0 && (t.icons = t.icons.filter((o) => o !== "")), Jo$1(_n$1(_n$1({}, r), t), {
			url: t?.url || r.url,
			name: t?.name || r.name,
			description: t?.description || r.description,
			icons: (n = t?.icons) != null && n.length && t.icons.length > 0 ? t.icons : r.icons
		});
	} catch (o) {
		return console.warn("Error populating app metadata", o), t || r;
	}
}
function Pn$1() {
	return (0, import_cjs$4.getWindowMetadata)() || {
		name: "",
		description: "",
		url: "",
		icons: [""]
	};
}
function ii$1(t, e) {
	var n;
	const r = xt$1(), o = {
		protocol: t,
		version: e,
		env: r
	};
	return r === "browser" && (o.host = ((n = (0, import_cjs$3.getLocation)()) == null ? void 0 : n.host) || "unknown"), o;
}
function kn$1() {
	if (xt$1() === Y$1.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
		const { OS: n, Version: r } = global.Platform;
		return [n, r].join("-");
	}
	const t = detect();
	if (t === null) return "unknown";
	const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
	return t.type === "browser" ? [
		e,
		t.name,
		t.version
	].join("-") : [e, t.version].join("-");
}
function Vn$1() {
	var t;
	const e = xt$1();
	return e === Y$1.browser ? [e, ((t = (0, import_cjs$3.getLocation)()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function Mn$1(t, e, n) {
	const r = kn$1(), o = Vn$1();
	return [
		[t, e].join("-"),
		["js", n].join("-"),
		r,
		o
	].join("/");
}
function si$1({ protocol: t, version: e, relayUrl: n, sdkVersion: r, auth: o, projectId: i, useOnCloseEvent: s, bundleId: c, packageName: a }) {
	const u = n.split("?"), f = {
		auth: o,
		ua: Mn$1(t, e, r),
		projectId: i,
		useOnCloseEvent: s || void 0,
		packageName: a || void 0,
		bundleId: c || void 0
	}, h = Cn$1(u[1] || "", f);
	return u[0] + "?" + h;
}
function ci$1(t) {
	let e = (t.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
	const n = typeof e < "u" ? t.split("://")[1] : t;
	return e = e === "wss" ? "https" : "http", [e, n].join("://");
}
function ai$1(t, e, n) {
	if (!t[e] || typeof t[e] !== n) throw new Error(`Missing or invalid "${e}" param`);
}
function Dn$1(t, e = 2) {
	return Hn$1(t.split("/"), e);
}
function ui$1(t) {
	return Dn$1(t).join(" ");
}
function gt(t, e) {
	return t.filter((n) => e.includes(n)).length === t.length;
}
function Hn$1(t, e = 2) {
	return t.slice(Math.max(t.length - e, 0));
}
function fi$1(t) {
	return Object.fromEntries(t.entries());
}
function li$1(t) {
	return new Map(Object.entries(t));
}
function di$1(t, e) {
	const n = {};
	return Object.keys(t).forEach((r) => {
		n[r] = e(t[r]);
	}), n;
}
function qn$1(t) {
	return t.trim().replace(/^\w/, (e) => e.toUpperCase());
}
function pi$1(t) {
	return t.split(" ").map((e) => qn$1(e)).join(" ");
}
function gi$1(t = import_cjs$2.FIVE_MINUTES, e) {
	const n = (0, import_cjs$2.toMiliseconds)(t || import_cjs$2.FIVE_MINUTES);
	let r, o, i, s;
	return {
		resolve: (c) => {
			i && r && (clearTimeout(i), r(c), s = Promise.resolve(c));
		},
		reject: (c) => {
			i && o && (clearTimeout(i), o(c));
		},
		done: () => new Promise((c, a) => {
			if (s) return c(s);
			i = setTimeout(() => {
				const u = new Error(e);
				s = Promise.reject(u), a(u);
			}, n), r = c, o = a;
		})
	};
}
function yi$1(t, e, n) {
	return new Promise(async (r, o) => {
		const i = setTimeout(() => o(new Error(n)), e);
		try {
			r(await t);
		} catch (s) {
			o(s);
		}
		clearTimeout(i);
	});
}
function $e(t, e) {
	if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
	if (t.toLowerCase() === "topic") {
		if (typeof e != "string") throw new Error("Value must be \"string\" for expirer target type: topic");
		return `topic:${e}`;
	} else if (t.toLowerCase() === "id") {
		if (typeof e != "number") throw new Error("Value must be \"number\" for expirer target type: id");
		return `id:${e}`;
	}
	throw new Error(`Unknown expirer target type: ${t}`);
}
function mi$1(t) {
	return $e("topic", t);
}
function wi$1(t) {
	return $e("id", t);
}
function bi$1(t) {
	const [e, n] = t.split(":"), r = {
		id: void 0,
		topic: void 0
	};
	if (e === "topic" && typeof n == "string") r.topic = n;
	else if (e === "id" && Number.isInteger(Number(n))) r.id = Number(n);
	else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${n}`);
	return r;
}
function Ei$1(t, e) {
	return (0, import_cjs$2.fromMiliseconds)((e || Date.now()) + (0, import_cjs$2.toMiliseconds)(t));
}
function vi$1(t) {
	return Date.now() >= (0, import_cjs$2.toMiliseconds)(t);
}
function xi$1(t, e) {
	return `${t}${e ? `:${e}` : ""}`;
}
function ot(t = [], e = []) {
	return [.../* @__PURE__ */ new Set([...t, ...e])];
}
async function Si$1({ id: t, topic: e, wcDeepLink: n }) {
	var r;
	try {
		if (!n) return;
		const i = (typeof n == "string" ? JSON.parse(n) : n)?.href;
		if (typeof i != "string") return;
		const s = Kn$1(i, t, e), c = xt$1();
		if (c === Y$1.browser) {
			if (!((r = (0, import_cjs$3.getDocument)()) != null && r.hasFocus())) {
				console.warn("Document does not have focus, skipping deeplink.");
				return;
			}
			Fn$1(s);
		} else c === Y$1.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
	} catch (o) {
		console.error(o);
	}
}
function Kn$1(t, e, n) {
	const r = `requestId=${e}&sessionTopic=${n}`;
	t.endsWith("/") && (t = t.slice(0, -1));
	let o = `${t}`;
	if (t.startsWith("https://t.me")) {
		const i = t.includes("?") ? "&startapp=" : "?startapp=";
		o = `${o}${i}${Yn$1(r, !0)}`;
	} else o = `${o}/wc?${r}`;
	return o;
}
function Fn$1(t) {
	let e = "_self";
	Zn$1() ? e = "_top" : (zn$1() || t.startsWith("https://") || t.startsWith("http://")) && (e = "_blank"), window.open(t, e, "noreferrer noopener");
}
async function Oi$1(t, e) {
	let n = "";
	try {
		if (Tt$1() && (n = localStorage.getItem(e), n)) return n;
		n = await t.getItem(e);
	} catch (r) {
		console.error(r);
	}
	return n;
}
function Le$1(t, e) {
	return t.filter((n) => e.includes(n));
}
function Ai$1(t, e) {
	if (!t.includes(e)) return null;
	const n = t.split(/([&,?,=])/);
	return n[n.indexOf(e) + 2];
}
function Bi$1() {
	return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
		const e = Math.random() * 16 | 0;
		return (t === "x" ? e : e & 3 | 8).toString(16);
	});
}
function Ii$1() {
	return typeof process < "u" && process.env.IS_VITEST === "true";
}
function zn$1() {
	return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function Zn$1() {
	try {
		return window.self !== window.top;
	} catch {
		return !1;
	}
}
function Yn$1(t, e = !1) {
	const n = Buffer.from(t).toString("base64");
	return e ? n.replace(/[=]/g, "") : n;
}
function je$1(t) {
	return Buffer.from(t, "base64").toString("utf-8");
}
function Ni$1(t) {
	return new Promise((e) => setTimeout(e, t));
}
function Wt$1(t) {
	if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Ui$1(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Xt$1(t, ...e) {
	if (!Ui$1(t)) throw new Error("Uint8Array expected");
	if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Ce$1(t) {
	if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
	Wt$1(t.outputLen), Wt$1(t.blockLen);
}
function Rt$1(t, e = !0) {
	if (t.destroyed) throw new Error("Hash instance has been destroyed");
	if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function Gn$1(t, e) {
	Xt$1(t);
	const n = e.outputLen;
	if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
function Ti$1(t, e = !1) {
	return e ? {
		h: Number(t & le$1),
		l: Number(t >> Wn$1 & le$1)
	} : {
		h: Number(t >> Wn$1 & le$1) | 0,
		l: Number(t & le$1) | 0
	};
}
function Ri$1(t, e = !1) {
	let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
	for (let o = 0; o < t.length; o++) {
		const { h: i, l: s } = Ti$1(t[o], e);
		[n[o], r[o]] = [i, s];
	}
	return [n, r];
}
function Ci$1(t) {
	return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Pe$1(t) {
	return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function ct(t, e) {
	return t << 32 - e | t >>> e;
}
function Pi$1(t) {
	return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
function Jn$1(t) {
	for (let e = 0; e < t.length; e++) t[e] = Pi$1(t[e]);
}
function ki$1(t) {
	if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
	return new Uint8Array(new TextEncoder().encode(t));
}
function $t$1(t) {
	return typeof t == "string" && (t = ki$1(t)), Xt$1(t), t;
}
function Vi$1(...t) {
	let e = 0;
	for (let r = 0; r < t.length; r++) {
		const o = t[r];
		Xt$1(o), e += o.length;
	}
	const n = new Uint8Array(e);
	for (let r = 0, o = 0; r < t.length; r++) {
		const i = t[r];
		n.set(i, o), o += i.length;
	}
	return n;
}
function Qn$1(t) {
	const e = (r) => t().update($t$1(r)).digest(), n = t();
	return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Lt$1(t = 32) {
	if (_t && typeof _t.getRandomValues == "function") return _t.getRandomValues(new Uint8Array(t));
	if (_t && typeof _t.randomBytes == "function") return _t.randomBytes(t);
	throw new Error("crypto.getRandomValues must be defined");
}
function Zi(t, e = 24) {
	const n = /* @__PURE__ */ new Uint32Array(10);
	for (let r = 24 - e; r < 24; r++) {
		for (let s = 0; s < 10; s++) n[s] = t[s] ^ t[s + 10] ^ t[s + 20] ^ t[s + 30] ^ t[s + 40];
		for (let s = 0; s < 10; s += 2) {
			const c = (s + 8) % 10, a = (s + 2) % 10, u = n[a], l = n[a + 1], f = rr$1(u, l, 1) ^ n[c], h = or$1(u, l, 1) ^ n[c + 1];
			for (let y = 0; y < 50; y += 10) t[s + y] ^= f, t[s + y + 1] ^= h;
		}
		let o = t[2], i = t[3];
		for (let s = 0; s < 24; s++) {
			const c = er$1[s], a = rr$1(o, i, c), u = or$1(o, i, c), l = tr$1[s];
			o = t[l], i = t[l + 1], t[l] = a, t[l + 1] = u;
		}
		for (let s = 0; s < 50; s += 10) {
			for (let c = 0; c < 10; c++) n[c] = t[s + c];
			for (let c = 0; c < 10; c++) t[s + c] ^= ~n[(c + 2) % 10] & n[(c + 4) % 10];
		}
		t[0] ^= Fi$1[r], t[1] ^= zi$1[r];
	}
	n.fill(0);
}
function Ve$1(t) {
	const e = `Ethereum Signed Message:
${t.length}`, n = new TextEncoder().encode(e + t);
	return "0x" + Buffer.from(Gi(n)).toString("hex");
}
async function ir$1(t, e, n, r, o, i) {
	switch (n.t) {
		case "eip191": return await sr$1(t, e, n.s);
		case "eip1271": return await cr$1(t, e, n.s, r, o, i);
		default: throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`);
	}
}
async function sr$1(t, e, n) {
	return (await recoverAddress({
		hash: Ve$1(e),
		signature: n
	})).toLowerCase() === t.toLowerCase();
}
async function cr$1(t, e, n, r, o, i) {
	const s = Ne(r);
	if (!s.namespace || !s.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);
	try {
		const c = "0x1626ba7e", l = n.substring(2), h = c + Ve$1(e).substring(2) + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" + l, { result: E } = await (await fetch(`${i || Wi}/?chainId=${r}&projectId=${o}`, {
			method: "POST",
			body: JSON.stringify({
				id: Xi(),
				jsonrpc: "2.0",
				method: "eth_call",
				params: [{
					to: t,
					data: h
				}, "latest"]
			})
		})).json();
		return E ? E.slice(0, 10).toLowerCase() === c.toLowerCase() : !1;
	} catch (c) {
		return console.error("isValidEip1271Signature: ", c), !1;
	}
}
function Xi() {
	return Date.now() + Math.floor(Math.random() * 1e3);
}
function Ji(t) {
	const e = atob(t), n = new Uint8Array(e.length);
	for (let s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
	const r = n[0];
	if (r === 0) throw new Error("No signatures found");
	const o = 1 + r * 64;
	if (n.length < o) throw new Error("Transaction data too short for claimed signature count");
	if (n.length < 100) throw new Error("Transaction too short");
	const i = Buffer.from(t, "base64").slice(1, 65);
	return esm_default.encode(i);
}
async function is(t) {
	const { cacao: e, projectId: n } = t, { s: r, p: o } = e, i = hr$1(o, o.iss);
	return await ir$1(De(o.iss), i, r, dr$1(o.iss), n);
}
function ss(t, e, n) {
	return n.includes("did:pkh:") || (n = `did:pkh:${n}`), {
		h: { t: "caip122" },
		p: {
			iss: n,
			domain: t.domain,
			aud: t.aud,
			version: t.version,
			nonce: t.nonce,
			iat: t.iat,
			statement: t.statement,
			requestId: t.requestId,
			resources: t.resources,
			nbf: t.nbf,
			exp: t.exp
		},
		s: e
	};
}
function cs$1(t) {
	var e;
	const { authPayload: n, chains: r, methods: o } = t, i = n.statement || "";
	if (!(r != null && r.length)) return n;
	const s = n.chains, c = Le$1(s, r);
	if (!(c != null && c.length)) throw new Error("No supported chains");
	const a = pr$1(n.resources);
	if (!a) return n;
	at(a);
	const u = gr$1(a, "eip155");
	let l = n?.resources || [];
	if (u != null && u.length) {
		const f = yr$1(u), h = Le$1(f, o);
		if (!(h != null && h.length)) throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(f)}, supported: ${JSON.stringify(o)}`);
		const E = Er$1(a, "eip155", He$1("request", h, { chains: c }));
		l = ((e = n?.resources) == null ? void 0 : e.slice(0, -1)) || [], l.push(he$1(E));
	}
	return fr$1(Me$1({}, n), {
		statement: xr$1(i, pe$1(l)),
		chains: c,
		resources: n != null && n.resources || l.length > 0 ? l : void 0
	});
}
function pr$1(t) {
	const e = pe$1(t);
	if (e && qe$1(e)) return yt(e);
}
function as(t, e) {
	var n;
	return (n = t?.att) == null ? void 0 : n.hasOwnProperty(e);
}
function gr$1(t, e) {
	var n, r;
	return (n = t?.att) != null && n[e] ? Object.keys((r = t?.att) == null ? void 0 : r[e]) : [];
}
function us(t) {
	return t?.map((e) => Object.keys(e)) || [];
}
function yr$1(t) {
	return t?.map((e) => {
		var n;
		return (n = e.split("/")) == null ? void 0 : n[1];
	}) || [];
}
function mr$1(t) {
	return Buffer.from(JSON.stringify(t)).toString("base64");
}
function wr$1(t) {
	return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function at(t) {
	if (!t) throw new Error("No recap provided, value is undefined");
	if (!t.att) throw new Error("No `att` property found");
	const e = Object.keys(t.att);
	if (!(e != null && e.length)) throw new Error("No resources found in `att` property");
	e.forEach((n) => {
		const r = t.att[n];
		if (Array.isArray(r)) throw new Error(`Resource must be an object: ${n}`);
		if (typeof r != "object") throw new Error(`Resource must be an object: ${n}`);
		if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${n}`);
		Object.keys(r).forEach((o) => {
			const i = r[o];
			if (!Array.isArray(i)) throw new Error(`Ability limits ${o} must be an array of objects, found: ${i}`);
			if (!i.length) throw new Error(`Value of ${o} is empty array, must be an array with objects`);
			i.forEach((s) => {
				if (typeof s != "object") throw new Error(`Ability limits (${o}) must be an array of objects, found: ${s}`);
			});
		});
	});
}
function br$1(t, e, n, r = {}) {
	return n?.sort((o, i) => o.localeCompare(i)), { att: { [t]: He$1(e, n, r) } };
}
function Er$1(t, e, n) {
	var r;
	t.att[e] = Me$1({}, n);
	return ((r = Object.keys(t.att)) == null ? void 0 : r.sort((s, c) => s.localeCompare(c))).reduce((s, c) => (s.att[c] = t.att[c], s), { att: {} });
}
function He$1(t, e, n = {}) {
	e = e?.sort((o, i) => o.localeCompare(i));
	const r = e.map((o) => ({ [`${t}/${o}`]: [n] }));
	return Object.assign({}, ...r);
}
function he$1(t) {
	return at(t), `urn:recap:${mr$1(t).replace(/=/g, "")}`;
}
function yt(t) {
	const e = wr$1(t.replace("urn:recap:", ""));
	return at(e), e;
}
function fs(t, e, n) {
	return he$1(br$1(t, e, n));
}
function qe$1(t) {
	return t && t.includes("urn:recap:");
}
function ls(t, e) {
	return he$1(vr$1(yt(t), yt(e)));
}
function vr$1(t, e) {
	at(t), at(e);
	const n = Object.keys(t.att).concat(Object.keys(e.att)).sort((o, i) => o.localeCompare(i)), r = { att: {} };
	return n.forEach((o) => {
		var i, s;
		Object.keys(((i = t.att) == null ? void 0 : i[o]) || {}).concat(Object.keys(((s = e.att) == null ? void 0 : s[o]) || {})).sort((c, a) => c.localeCompare(a)).forEach((c) => {
			var a, u;
			r.att[o] = fr$1(Me$1({}, r.att[o]), { [c]: ((a = t.att[o]) == null ? void 0 : a[c]) || ((u = e.att[o]) == null ? void 0 : u[c]) });
		});
	}), r;
}
function Ke$1(t = "", e) {
	at(e);
	const n = "I further authorize the stated URI to perform the following actions on my behalf: ";
	if (t.includes(n)) return t;
	const r = [];
	let o = 0;
	Object.keys(e.att).forEach((c) => {
		const a = Object.keys(e.att[c]).map((f) => ({
			ability: f.split("/")[0],
			action: f.split("/")[1]
		}));
		a.sort((f, h) => f.action.localeCompare(h.action));
		const u = {};
		a.forEach((f) => {
			u[f.ability] || (u[f.ability] = []), u[f.ability].push(f.action);
		});
		const l = Object.keys(u).map((f) => (o++, `(${o}) '${f}': '${u[f].join("', '")}' for '${c}'.`));
		r.push(l.join(", ").replace(".,", "."));
	});
	const s = `${n}${r.join(" ")}`;
	return `${t ? t + " " : ""}${s}`;
}
function ds(t) {
	var e;
	const n = yt(t);
	at(n);
	const r = (e = n.att) == null ? void 0 : e.eip155;
	return r ? Object.keys(r).map((o) => o.split("/")[1]) : [];
}
function hs(t) {
	const e = yt(t);
	at(e);
	const n = [];
	return Object.values(e.att).forEach((r) => {
		Object.values(r).forEach((o) => {
			var i;
			(i = o?.[0]) != null && i.chains && n.push(o[0].chains);
		});
	}), [...new Set(n.flat())];
}
function xr$1(t, e) {
	if (!e) return t;
	const n = yt(e);
	return at(n), Ke$1(t, n);
}
function pe$1(t) {
	if (!t) return;
	const e = t?.[t.length - 1];
	return qe$1(e) ? e : void 0;
}
function Fe$1(t) {
	if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function Sr$1(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function tt$1(t, ...e) {
	if (!Sr$1(t)) throw new Error("Uint8Array expected");
	if (e.length > 0 && !e.includes(t.length)) throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length);
}
function Or$1(t, e = !0) {
	if (t.destroyed) throw new Error("Hash instance has been destroyed");
	if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function ps(t, e) {
	tt$1(t);
	const n = e.outputLen;
	if (t.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
function Ar$1(t) {
	if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function ms(t) {
	if (typeof t != "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(t));
}
function ze$1(t) {
	if (typeof t == "string") t = ms(t);
	else if (Sr$1(t)) t = Ze$1(t);
	else throw new Error("Uint8Array expected, got " + typeof t);
	return t;
}
function ws(t, e) {
	if (e == null || typeof e != "object") throw new Error("options must be defined");
	return Object.assign(t, e);
}
function bs(t, e) {
	if (t.length !== e.length) return !1;
	let n = 0;
	for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
	return n === 0;
}
function Br$1(t, e, n = !0) {
	if (e === void 0) return new Uint8Array(t);
	if (e.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e.length);
	if (n && !vs(e)) throw new Error("invalid output, must be aligned");
	return e;
}
function Ir$1(t, e, n, r) {
	if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
	const o = BigInt(32), i = BigInt(4294967295), s = Number(n >> o & i), c = Number(n & i), a = r ? 4 : 0, u = r ? 0 : 4;
	t.setUint32(e + a, s, r), t.setUint32(e + u, c, r);
}
function vs(t) {
	return t.byteOffset % 4 === 0;
}
function Ze$1(t) {
	return Uint8Array.from(t);
}
function jt$1(...t) {
	for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function V$2(t, e) {
	return t << e | t >>> 32 - e;
}
function Ye$1(t) {
	return t.byteOffset % 4 === 0;
}
function Is(t, e, n, r, o, i, s, c) {
	const a = o.length, u = new Uint8Array(ge$1), l = mt(u), f = Ye$1(o) && Ye$1(i), h = f ? mt(o) : Tr$1, y = f ? mt(i) : Tr$1;
	for (let E = 0; E < a; s++) {
		if (t(e, n, r, l, s, c), s >= Ur$1) throw new Error("arx: counter overflow");
		const p = Math.min(ge$1, a - E);
		if (f && p === ge$1) {
			const d = E / 4;
			if (E % 4 !== 0) throw new Error("arx: invalid block position");
			for (let v = 0, m; v < Bs; v++) m = d + v, y[m] = h[m] ^ l[v];
			E += ge$1;
			continue;
		}
		for (let d = 0, v; d < p; d++) v = E + d, i[v] = o[v] ^ u[d];
		E += p;
	}
}
function Ns(t, e) {
	const { allowShortKeys: n, extendNonceFn: r, counterLength: o, counterRight: i, rounds: s } = ws({
		allowShortKeys: !1,
		counterLength: 8,
		counterRight: !1,
		rounds: 20
	}, e);
	if (typeof t != "function") throw new Error("core must be a function");
	return Fe$1(o), Fe$1(s), Ar$1(i), Ar$1(n), (c, a, u, l, f = 0) => {
		tt$1(c), tt$1(a), tt$1(u);
		const h = u.length;
		if (l === void 0 && (l = new Uint8Array(h)), tt$1(l), Fe$1(f), f < 0 || f >= Ur$1) throw new Error("arx: counter overflow");
		if (l.length < h) throw new Error(`arx: output (${l.length}) is shorter than data (${h})`);
		const y = [];
		let E = c.length, p, d;
		if (E === 32) y.push(p = Ze$1(c)), d = As;
		else if (E === 16 && n) p = /* @__PURE__ */ new Uint8Array(32), p.set(c), p.set(c, 16), d = Os, y.push(p);
		else throw new Error(`arx: invalid 32-byte key, got length=${E}`);
		Ye$1(a) || y.push(a = Ze$1(a));
		const v = mt(p);
		if (r) {
			if (a.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
			r(d, v, mt(a.subarray(0, 16)), v), a = a.subarray(16);
		}
		const m = 16 - o;
		if (m !== a.length) throw new Error(`arx: nonce must be ${m} or 16 bytes`);
		if (m !== 12) {
			const N = /* @__PURE__ */ new Uint8Array(12);
			N.set(a, i ? 0 : 12 - a.length), a = N, y.push(a);
		}
		const O = mt(a);
		return Is(t, d, v, O, u, l, f, s), jt$1(...y), l;
	};
}
function Ts(t) {
	const e = (r, o) => t(o).update(ze$1(r)).digest(), n = t(/* @__PURE__ */ new Uint8Array(32));
	return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = (r) => t(r), e;
}
function _s(t, e, n, r, o, i = 20) {
	let s = t[0], c = t[1], a = t[2], u = t[3], l = e[0], f = e[1], h = e[2], y = e[3], E = e[4], p = e[5], d = e[6], v = e[7], m = o, O = n[0], N = n[1], $ = n[2], B = s, A = c, T = a, S = u, L = l, U = f, _ = h, j = y, g = E, w = p, b = d, I = v, R = m, x = O, C = N, P = $;
	for (let M = 0; M < i; M += 2) B = B + L | 0, R = V$2(R ^ B, 16), g = g + R | 0, L = V$2(L ^ g, 12), B = B + L | 0, R = V$2(R ^ B, 8), g = g + R | 0, L = V$2(L ^ g, 7), A = A + U | 0, x = V$2(x ^ A, 16), w = w + x | 0, U = V$2(U ^ w, 12), A = A + U | 0, x = V$2(x ^ A, 8), w = w + x | 0, U = V$2(U ^ w, 7), T = T + _ | 0, C = V$2(C ^ T, 16), b = b + C | 0, _ = V$2(_ ^ b, 12), T = T + _ | 0, C = V$2(C ^ T, 8), b = b + C | 0, _ = V$2(_ ^ b, 7), S = S + j | 0, P = V$2(P ^ S, 16), I = I + P | 0, j = V$2(j ^ I, 12), S = S + j | 0, P = V$2(P ^ S, 8), I = I + P | 0, j = V$2(j ^ I, 7), B = B + U | 0, P = V$2(P ^ B, 16), b = b + P | 0, U = V$2(U ^ b, 12), B = B + U | 0, P = V$2(P ^ B, 8), b = b + P | 0, U = V$2(U ^ b, 7), A = A + _ | 0, R = V$2(R ^ A, 16), I = I + R | 0, _ = V$2(_ ^ I, 12), A = A + _ | 0, R = V$2(R ^ A, 8), I = I + R | 0, _ = V$2(_ ^ I, 7), T = T + j | 0, x = V$2(x ^ T, 16), g = g + x | 0, j = V$2(j ^ g, 12), T = T + j | 0, x = V$2(x ^ T, 8), g = g + x | 0, j = V$2(j ^ g, 7), S = S + L | 0, C = V$2(C ^ S, 16), w = w + C | 0, L = V$2(L ^ w, 12), S = S + L | 0, C = V$2(C ^ S, 8), w = w + C | 0, L = V$2(L ^ w, 7);
	let k = 0;
	r[k++] = s + B | 0, r[k++] = c + A | 0, r[k++] = a + T | 0, r[k++] = u + S | 0, r[k++] = l + L | 0, r[k++] = f + U | 0, r[k++] = h + _ | 0, r[k++] = y + j | 0, r[k++] = E + g | 0, r[k++] = p + w | 0, r[k++] = d + b | 0, r[k++] = v + I | 0, r[k++] = m + R | 0, r[k++] = O + x | 0, r[k++] = N + C | 0, r[k++] = $ + P | 0;
}
function _r$1(t, e, n, r, o) {
	const i = t(e, n, js), s = Rs.create(i);
	o && Rr$1(s, o), Rr$1(s, r);
	const c = /* @__PURE__ */ new Uint8Array(16), a = gs(c);
	Ir$1(a, 0, BigInt(o ? o.length : 0), !0), Ir$1(a, 8, BigInt(r.length), !0), s.update(c);
	const u = s.digest();
	return jt$1(i, c), u;
}
function Ps(t, e, n) {
	return Ce$1(t), n === void 0 && (n = new Uint8Array(t.outputLen)), ye$1(t, $t$1(n), $t$1(e));
}
function ks(t, e, n, r = 32) {
	if (Ce$1(t), Wt$1(r), r > 255 * t.outputLen) throw new Error("Length should be <= 255*HashLen");
	const o = Math.ceil(r / t.outputLen);
	n === void 0 && (n = jr$1);
	const i = new Uint8Array(o * t.outputLen), s = ye$1.create(t, e), c = s._cloneInto(), a = new Uint8Array(s.outputLen);
	for (let u = 0; u < o; u++) Ge$1[0] = u + 1, c.update(u === 0 ? jr$1 : a).update(n).update(Ge$1).digestInto(a), i.set(a, t.outputLen * u), s._cloneInto(c);
	return s.destroy(), c.destroy(), a.fill(0), Ge$1.fill(0), i.slice(0, r);
}
function Ms(t, e, n, r) {
	if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
	const o = BigInt(32), i = BigInt(4294967295), s = Number(n >> o & i), c = Number(n & i), a = r ? 4 : 0, u = r ? 0 : 4;
	t.setUint32(e + a, s, r), t.setUint32(e + u, c, r);
}
function Ds(t, e, n) {
	return t & e ^ ~t & n;
}
function Hs(t, e, n) {
	return t & e ^ t & n ^ e & n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function St$1(t) {
	return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function te(t) {
	if (!St$1(t)) throw new Error("Uint8Array expected");
}
function Ct$1(t, e) {
	if (typeof e != "boolean") throw new Error(t + " boolean expected, got " + e);
}
function Pt$1(t) {
	te(t);
	let e = "";
	for (let n = 0; n < t.length; n++) e += Zs$1[t[n]];
	return e;
}
function kt$1(t) {
	const e = t.toString(16);
	return e.length & 1 ? "0" + e : e;
}
function We$1(t) {
	if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
	return t === "" ? me : BigInt("0x" + t);
}
function Cr$1(t) {
	if (t >= ut._0 && t <= ut._9) return t - ut._0;
	if (t >= ut.A && t <= ut.F) return t - (ut.A - 10);
	if (t >= ut.a && t <= ut.f) return t - (ut.a - 10);
}
function Vt$1(t) {
	if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
	const e = t.length, n = e / 2;
	if (e % 2) throw new Error("hex string expected, got unpadded hex of length " + e);
	const r = new Uint8Array(n);
	for (let o = 0, i = 0; o < n; o++, i += 2) {
		const s = Cr$1(t.charCodeAt(i)), c = Cr$1(t.charCodeAt(i + 1));
		if (s === void 0 || c === void 0) {
			const a = t[i] + t[i + 1];
			throw new Error("hex string expected, got non-hex character \"" + a + "\" at index " + i);
		}
		r[o] = s * 16 + c;
	}
	return r;
}
function Ot$1(t) {
	return We$1(Pt$1(t));
}
function ee(t) {
	return te(t), We$1(Pt$1(Uint8Array.from(t).reverse()));
}
function Mt$1(t, e) {
	return Vt$1(t.toString(16).padStart(e * 2, "0"));
}
function be$1(t, e) {
	return Mt$1(t, e).reverse();
}
function Ys$1(t) {
	return Vt$1(kt$1(t));
}
function et(t, e, n) {
	let r;
	if (typeof e == "string") try {
		r = Vt$1(e);
	} catch (i) {
		throw new Error(t + " must be hex string or Uint8Array, cause: " + i);
	}
	else if (St$1(e)) r = Uint8Array.from(e);
	else throw new Error(t + " must be hex string or Uint8Array");
	const o = r.length;
	if (typeof n == "number" && o !== n) throw new Error(t + " of length " + n + " expected, got " + o);
	return r;
}
function ne$1(...t) {
	let e = 0;
	for (let r = 0; r < t.length; r++) {
		const o = t[r];
		te(o), e += o.length;
	}
	const n = new Uint8Array(e);
	for (let r = 0, o = 0; r < t.length; r++) {
		const i = t[r];
		n.set(i, o), o += i.length;
	}
	return n;
}
function Gs(t, e) {
	if (t.length !== e.length) return !1;
	let n = 0;
	for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
	return n === 0;
}
function Ws(t) {
	if (typeof t != "string") throw new Error("string expected");
	return new Uint8Array(new TextEncoder().encode(t));
}
function Ee$1(t, e, n) {
	return Xe$1(t) && Xe$1(e) && Xe$1(n) && e <= t && t < n;
}
function ft(t, e, n, r) {
	if (!Ee$1(e, n, r)) throw new Error("expected valid " + t + ": " + n + " <= n < " + r + ", got " + e);
}
function Pr$1(t) {
	let e = 0;
	for (; t > me; t >>= we, e += 1);
	return e;
}
function Xs(t, e) {
	return t >> BigInt(e) & we;
}
function Js(t, e, n) {
	return t | (n ? we : me) << BigInt(e);
}
function Vr$1(t, e, n) {
	if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
	if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
	if (typeof n != "function") throw new Error("hmacFn must be a function");
	let r = Qe$1(t), o = Qe$1(t), i = 0;
	const s = () => {
		r.fill(1), o.fill(0), i = 0;
	}, c = (...f) => n(o, r, ...f), a = (f = Qe$1()) => {
		o = c(kr$1([0]), f), r = c(), f.length !== 0 && (o = c(kr$1([1]), f), r = c());
	}, u = () => {
		if (i++ >= 1e3) throw new Error("drbg: tried 1000 values");
		let f = 0;
		const h = [];
		for (; f < e;) {
			r = c();
			const y = r.slice();
			h.push(y), f += r.length;
		}
		return ne$1(...h);
	};
	return (f, h) => {
		s(), a(f);
		let y;
		for (; !(y = h(u()));) a();
		return s(), y;
	};
}
function Dt(t, e, n = {}) {
	const r = (o, i, s) => {
		const c = Qs[i];
		if (typeof c != "function") throw new Error("invalid validator function");
		const a = t[o];
		if (!(s && a === void 0) && !c(a, t)) throw new Error("param " + String(o) + " is invalid. Expected " + i + ", got " + a);
	};
	for (const [o, i] of Object.entries(e)) r(o, i, !1);
	for (const [o, i] of Object.entries(n)) r(o, i, !0);
	return t;
}
function tn$1(t) {
	const e = /* @__PURE__ */ new WeakMap();
	return (n, ...r) => {
		const o = e.get(n);
		if (o !== void 0) return o;
		const i = t(n, ...r);
		return e.set(n, i), i;
	};
}
function X(t, e) {
	const n = t % e;
	return n >= q ? n : e + n;
}
function Hr$1(t, e, n) {
	if (e < q) throw new Error("invalid exponent, negatives unsupported");
	if (n <= q) throw new Error("invalid modulus");
	if (n === H) return q;
	let r = H;
	for (; e > q;) e & H && (r = r * t % n), t = t * t % n, e >>= H;
	return r;
}
function it$1(t, e, n) {
	let r = t;
	for (; e-- > q;) r *= r, r %= n;
	return r;
}
function nn$1(t, e) {
	if (t === q) throw new Error("invert: expected non-zero number");
	if (e <= q) throw new Error("invert: expected positive modulus, got " + e);
	let n = X(t, e), r = e, o = q, i = H;
	for (; n !== q;) {
		const c = r / n, a = r % n, u = o - i * c;
		r = n, n = a, o = i, i = u;
	}
	if (r !== H) throw new Error("invert: does not exist");
	return X(o, e);
}
function rc(t) {
	const e = (t - H) / At$1;
	let n, r, o;
	for (n = t - H, r = 0; n % At$1 === q; n /= At$1, r++);
	for (o = At$1; o < t && Hr$1(o, e, t) !== t - H; o++) if (o > 1e3) throw new Error("Cannot find square root: likely non-prime P");
	if (r === 1) {
		const s = (t + H) / en;
		return function(a, u) {
			const l = a.pow(u, s);
			if (!a.eql(a.sqr(l), u)) throw new Error("Cannot find square root");
			return l;
		};
	}
	const i = (n + H) / At$1;
	return function(c, a) {
		if (c.pow(a, e) === c.neg(c.ONE)) throw new Error("Cannot find square root");
		let u = r, l = c.pow(c.mul(c.ONE, o), n), f = c.pow(a, i), h = c.pow(a, n);
		for (; !c.eql(h, c.ONE);) {
			if (c.eql(h, c.ZERO)) return c.ZERO;
			let y = 1;
			for (let p = c.sqr(h); y < u && !c.eql(p, c.ONE); y++) p = c.sqr(p);
			const E = c.pow(l, H << BigInt(u - y - 1));
			l = c.sqr(E), f = c.mul(f, E), h = c.mul(h, l), u = y;
		}
		return f;
	};
}
function oc(t) {
	if (t % en === nc) {
		const e = (t + H) / en;
		return function(r, o) {
			const i = r.pow(o, e);
			if (!r.eql(r.sqr(i), o)) throw new Error("Cannot find square root");
			return i;
		};
	}
	if (t % Dr$1 === Mr$1) {
		const e = (t - Mr$1) / Dr$1;
		return function(r, o) {
			const i = r.mul(o, At$1), s = r.pow(i, e), c = r.mul(o, s), a = r.mul(r.mul(c, At$1), s), u = r.mul(c, r.sub(a, r.ONE));
			if (!r.eql(r.sqr(u), o)) throw new Error("Cannot find square root");
			return u;
		};
	}
	return rc(t);
}
function sc(t) {
	return Dt(t, ic.reduce((r, o) => (r[o] = "function", r), {
		ORDER: "bigint",
		MASK: "bigint",
		BYTES: "isSafeInteger",
		BITS: "isSafeInteger"
	}));
}
function cc(t, e, n) {
	if (n < q) throw new Error("invalid exponent, negatives unsupported");
	if (n === q) return t.ONE;
	if (n === H) return e;
	let r = t.ONE, o = e;
	for (; n > q;) n & H && (r = t.mul(r, o)), o = t.sqr(o), n >>= H;
	return r;
}
function ac(t, e) {
	const n = new Array(e.length), r = e.reduce((i, s, c) => t.is0(s) ? i : (n[c] = i, t.mul(i, s)), t.ONE), o = t.inv(r);
	return e.reduceRight((i, s, c) => t.is0(s) ? i : (n[c] = t.mul(i, n[c]), t.mul(i, s)), o), n;
}
function qr$1(t, e) {
	const n = e !== void 0 ? e : t.toString(2).length;
	return {
		nBitLength: n,
		nByteLength: Math.ceil(n / 8)
	};
}
function Kr$1(t, e, n = !1, r = {}) {
	if (t <= q) throw new Error("invalid field: expected ORDER > 0, got " + t);
	const { nBitLength: o, nByteLength: i } = qr$1(t, e);
	if (i > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
	let s;
	const c = Object.freeze({
		ORDER: t,
		isLE: n,
		BITS: o,
		BYTES: i,
		MASK: Je$1(o),
		ZERO: q,
		ONE: H,
		create: (a) => X(a, t),
		isValid: (a) => {
			if (typeof a != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof a);
			return q <= a && a < t;
		},
		is0: (a) => a === q,
		isOdd: (a) => (a & H) === H,
		neg: (a) => X(-a, t),
		eql: (a, u) => a === u,
		sqr: (a) => X(a * a, t),
		add: (a, u) => X(a + u, t),
		sub: (a, u) => X(a - u, t),
		mul: (a, u) => X(a * u, t),
		pow: (a, u) => cc(c, a, u),
		div: (a, u) => X(a * nn$1(u, t), t),
		sqrN: (a) => a * a,
		addN: (a, u) => a + u,
		subN: (a, u) => a - u,
		mulN: (a, u) => a * u,
		inv: (a) => nn$1(a, t),
		sqrt: r.sqrt || ((a) => (s || (s = oc(t)), s(c, a))),
		invertBatch: (a) => ac(c, a),
		cmov: (a, u, l) => l ? u : a,
		toBytes: (a) => n ? be$1(a, i) : Mt$1(a, i),
		fromBytes: (a) => {
			if (a.length !== i) throw new Error("Field.fromBytes: expected " + i + " bytes, got " + a.length);
			return n ? ee(a) : Ot$1(a);
		}
	});
	return Object.freeze(c);
}
function Fr$1(t) {
	if (typeof t != "bigint") throw new Error("field order must be bigint");
	const e = t.toString(2).length;
	return Math.ceil(e / 8);
}
function zr$1(t) {
	const e = Fr$1(t);
	return e + Math.ceil(e / 2);
}
function uc(t, e, n = !1) {
	const r = t.length, o = Fr$1(e), i = zr$1(e);
	if (r < 16 || r < i || r > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + r);
	const c = X(n ? ee(t) : Ot$1(t), e - H) + H;
	return n ? be$1(c, o) : Mt$1(c, o);
}
function rn$1(t, e) {
	const n = e.negate();
	return t ? n : e;
}
function Yr$1(t, e) {
	if (!Number.isSafeInteger(t) || t <= 0 || t > e) throw new Error("invalid window size, expected [1.." + e + "], got W=" + t);
}
function on$1(t, e) {
	Yr$1(t, e);
	return {
		windows: Math.ceil(e / t) + 1,
		windowSize: 2 ** (t - 1)
	};
}
function fc(t, e) {
	if (!Array.isArray(t)) throw new Error("array expected");
	t.forEach((n, r) => {
		if (!(n instanceof e)) throw new Error("invalid point at index " + r);
	});
}
function lc(t, e) {
	if (!Array.isArray(t)) throw new Error("array of scalars expected");
	t.forEach((n, r) => {
		if (!e.isValid(n)) throw new Error("invalid scalar at index " + r);
	});
}
function cn$1(t) {
	return Gr$1.get(t) || 1;
}
function dc(t, e) {
	return {
		constTimeNegate: rn$1,
		hasPrecomputes(n) {
			return cn$1(n) !== 1;
		},
		unsafeLadder(n, r, o = t.ZERO) {
			let i = n;
			for (; r > Zr$1;) r & ve && (o = o.add(i)), i = i.double(), r >>= ve;
			return o;
		},
		precomputeWindow(n, r) {
			const { windows: o, windowSize: i } = on$1(r, e), s = [];
			let c = n, a = c;
			for (let u = 0; u < o; u++) {
				a = c, s.push(a);
				for (let l = 1; l < i; l++) a = a.add(c), s.push(a);
				c = a.double();
			}
			return s;
		},
		wNAF(n, r, o) {
			const { windows: i, windowSize: s } = on$1(n, e);
			let c = t.ZERO, a = t.BASE;
			const u = BigInt(2 ** n - 1), l = 2 ** n, f = BigInt(n);
			for (let h = 0; h < i; h++) {
				const y = h * s;
				let E = Number(o & u);
				o >>= f, E > s && (E -= l, o += ve);
				const p = y, d = y + Math.abs(E) - 1, v = h % 2 !== 0, m = E < 0;
				E === 0 ? a = a.add(rn$1(v, r[p])) : c = c.add(rn$1(m, r[d]));
			}
			return {
				p: c,
				f: a
			};
		},
		wNAFUnsafe(n, r, o, i = t.ZERO) {
			const { windows: s, windowSize: c } = on$1(n, e), a = BigInt(2 ** n - 1), u = 2 ** n, l = BigInt(n);
			for (let f = 0; f < s; f++) {
				const h = f * c;
				if (o === Zr$1) break;
				let y = Number(o & a);
				if (o >>= l, y > c && (y -= u, o += ve), y === 0) continue;
				let E = r[h + Math.abs(y) - 1];
				y < 0 && (E = E.negate()), i = i.add(E);
			}
			return i;
		},
		getPrecomputes(n, r, o) {
			let i = sn$1.get(r);
			return i || (i = this.precomputeWindow(r, n), n !== 1 && sn$1.set(r, o(i))), i;
		},
		wNAFCached(n, r, o) {
			const i = cn$1(n);
			return this.wNAF(i, this.getPrecomputes(i, n, o), r);
		},
		wNAFCachedUnsafe(n, r, o, i) {
			const s = cn$1(n);
			return s === 1 ? this.unsafeLadder(n, r, i) : this.wNAFUnsafe(s, this.getPrecomputes(s, n, o), r, i);
		},
		setWindowSize(n, r) {
			Yr$1(r, e), Gr$1.set(n, r), sn$1.delete(n);
		}
	};
}
function hc(t, e, n, r) {
	if (fc(n, t), lc(r, e), n.length !== r.length) throw new Error("arrays of points and scalars must have equal length");
	const o = t.ZERO, i = Pr$1(BigInt(n.length)), s = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1, c = (1 << s) - 1, a = new Array(c + 1).fill(o), u = Math.floor((e.BITS - 1) / s) * s;
	let l = o;
	for (let f = u; f >= 0; f -= s) {
		a.fill(o);
		for (let y = 0; y < r.length; y++) {
			const E = r[y], p = Number(E >> BigInt(f) & BigInt(c));
			a[p] = a[p].add(n[y]);
		}
		let h = o;
		for (let y = a.length - 1, E = o; y > 0; y--) E = E.add(a[y]), h = h.add(E);
		if (l = l.add(h), f !== 0) for (let y = 0; y < s; y++) l = l.double();
	}
	return l;
}
function Wr$1(t) {
	return sc(t.Fp), Dt(t, {
		n: "bigint",
		h: "bigint",
		Gx: "field",
		Gy: "field"
	}, {
		nBitLength: "isSafeInteger",
		nByteLength: "isSafeInteger"
	}), Object.freeze({
		...qr$1(t.n, t.nBitLength),
		...t,
		p: t.Fp.ORDER
	});
}
function pc(t) {
	return Dt(t, { a: "bigint" }, {
		montgomeryBits: "isSafeInteger",
		nByteLength: "isSafeInteger",
		adjustScalarBytes: "function",
		domain: "function",
		powPminus2: "function",
		Gu: "bigint"
	}), Object.freeze({ ...t });
}
function gc(t) {
	const e = pc(t), { P: n } = e, r = (m) => X(m, n), o = e.montgomeryBits, i = Math.ceil(o / 8), s = e.nByteLength, c = e.adjustScalarBytes || ((m) => m), a = e.powPminus2 || ((m) => Hr$1(m, n - BigInt(2), n));
	function u(m, O, N) {
		const $ = r(m * (O - N));
		return O = r(O - $), N = r(N + $), [O, N];
	}
	const l = (e.a - BigInt(2)) / BigInt(4);
	function f(m, O) {
		ft("u", m, Ht$1, n), ft("scalar", O, Ht$1, n);
		const N = O, $ = m;
		let B = an$1, A = Ht$1, T = m, S = an$1, L = Ht$1, U;
		for (let j = BigInt(o - 1); j >= Ht$1; j--) {
			const g = N >> j & an$1;
			L ^= g, U = u(L, B, T), B = U[0], T = U[1], U = u(L, A, S), A = U[0], S = U[1], L = g;
			const w = B + A, b = r(w * w), I = B - A, R = r(I * I), x = b - R, C = T + S, P = T - S, k = r(P * w), M = r(C * I), D = k + M, z = k - M;
			T = r(D * D), S = r($ * r(z * z)), B = r(b * R), A = r(x * (b + r(l * x)));
		}
		U = u(L, B, T), B = U[0], T = U[1], U = u(L, A, S), A = U[0], S = U[1];
		const _ = a(A);
		return r(B * _);
	}
	function h(m) {
		return be$1(r(m), i);
	}
	function y(m) {
		const O = et("u coordinate", m, i);
		return s === 32 && (O[31] &= 127), ee(O);
	}
	function E(m) {
		const O = et("scalar", m), N = O.length;
		if (N !== i && N !== s) {
			let $ = "" + i + " or " + s;
			throw new Error("invalid scalar, expected " + $ + " bytes, got " + N);
		}
		return ee(c(O));
	}
	function p(m, O) {
		const B = f(y(O), E(m));
		if (B === Ht$1) throw new Error("invalid private or public key received");
		return h(B);
	}
	const d = h(e.Gu);
	function v(m) {
		return p(m, d);
	}
	return {
		scalarMult: p,
		scalarMultBase: v,
		getSharedSecret: (m, O) => p(m, O),
		getPublicKey: (m) => v(m),
		utils: { randomPrivateKey: () => e.randomBytes(e.nByteLength) },
		GuBytes: d
	};
}
function bc(t) {
	const e = BigInt(10), n = BigInt(20), r = BigInt(40), o = BigInt(80), i = un$1, c = t * t % i * t % i, u = it$1(it$1(c, Xr$1, i) * c % i, yc, i) * t % i, l = it$1(u, wc, i) * u % i, f = it$1(l, e, i) * l % i, h = it$1(f, n, i) * f % i, y = it$1(h, r, i) * h % i;
	return {
		pow_p_5_8: it$1(it$1(it$1(it$1(y, o, i) * y % i, o, i) * y % i, e, i) * l % i, Xr$1, i) * t % i,
		b2: c
	};
}
function Ec(t) {
	return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function Jr$1(t) {
	t.lowS !== void 0 && Ct$1("lowS", t.lowS), t.prehash !== void 0 && Ct$1("prehash", t.prehash);
}
function vc(t) {
	const e = Wr$1(t);
	Dt(e, {
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
	const { endo: n, Fp: r, a: o } = e;
	if (n) {
		if (!r.eql(o, r.ZERO)) throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
		if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function") throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
	}
	return Object.freeze({ ...e });
}
function Ac(t) {
	const e = vc(t), { Fp: n } = e, r = Kr$1(e.n, e.nBitLength), o = e.toBytes || ((p, d, v) => {
		const m = d.toAffine();
		return ne$1(Uint8Array.from([4]), n.toBytes(m.x), n.toBytes(m.y));
	}), i = e.fromBytes || ((p) => {
		const d = p.subarray(1);
		return {
			x: n.fromBytes(d.subarray(0, n.BYTES)),
			y: n.fromBytes(d.subarray(n.BYTES, 2 * n.BYTES))
		};
	});
	function s(p) {
		const { a: d, b: v } = e, m = n.sqr(p), O = n.mul(m, p);
		return n.add(n.add(O, n.mul(p, d)), v);
	}
	if (!n.eql(n.sqr(e.Gy), s(e.Gx))) throw new Error("bad generator point: equation left != right");
	function c(p) {
		return Ee$1(p, K, e.n);
	}
	function a(p) {
		const { allowedPrivateKeyLengths: d, nByteLength: v, wrapPrivateKey: m, n: O } = e;
		if (d && typeof p != "bigint") {
			if (St$1(p) && (p = Pt$1(p)), typeof p != "string" || !d.includes(p.length)) throw new Error("invalid private key");
			p = p.padStart(v * 2, "0");
		}
		let N;
		try {
			N = typeof p == "bigint" ? p : Ot$1(et("private key", p, v));
		} catch {
			throw new Error("invalid private key, expected hex or " + v + " bytes, got " + typeof p);
		}
		return m && (N = X(N, O)), ft("private key", N, K, O), N;
	}
	function u(p) {
		if (!(p instanceof h)) throw new Error("ProjectivePoint expected");
	}
	const l = tn$1((p, d) => {
		const { px: v, py: m, pz: O } = p;
		if (n.eql(O, n.ONE)) return {
			x: v,
			y: m
		};
		const N = p.is0();
		d ??= N ? n.ONE : n.inv(O);
		const $ = n.mul(v, d), B = n.mul(m, d), A = n.mul(O, d);
		if (N) return {
			x: n.ZERO,
			y: n.ZERO
		};
		if (!n.eql(A, n.ONE)) throw new Error("invZ was invalid");
		return {
			x: $,
			y: B
		};
	}), f = tn$1((p) => {
		if (p.is0()) {
			if (e.allowInfinityPoint && !n.is0(p.py)) return;
			throw new Error("bad point: ZERO");
		}
		const { x: d, y: v } = p.toAffine();
		if (!n.isValid(d) || !n.isValid(v)) throw new Error("bad point: x or y not FE");
		const m = n.sqr(v), O = s(d);
		if (!n.eql(m, O)) throw new Error("bad point: equation left != right");
		if (!p.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
		return !0;
	});
	class h {
		constructor(d, v, m) {
			if (this.px = d, this.py = v, this.pz = m, d == null || !n.isValid(d)) throw new Error("x required");
			if (v == null || !n.isValid(v)) throw new Error("y required");
			if (m == null || !n.isValid(m)) throw new Error("z required");
			Object.freeze(this);
		}
		static fromAffine(d) {
			const { x: v, y: m } = d || {};
			if (!d || !n.isValid(v) || !n.isValid(m)) throw new Error("invalid affine point");
			if (d instanceof h) throw new Error("projective point not allowed");
			const O = (N) => n.eql(N, n.ZERO);
			return O(v) && O(m) ? h.ZERO : new h(v, m, n.ONE);
		}
		get x() {
			return this.toAffine().x;
		}
		get y() {
			return this.toAffine().y;
		}
		static normalizeZ(d) {
			const v = n.invertBatch(d.map((m) => m.pz));
			return d.map((m, O) => m.toAffine(v[O])).map(h.fromAffine);
		}
		static fromHex(d) {
			const v = h.fromAffine(i(et("pointHex", d)));
			return v.assertValidity(), v;
		}
		static fromPrivateKey(d) {
			return h.BASE.multiply(a(d));
		}
		static msm(d, v) {
			return hc(h, r, d, v);
		}
		_setWindowSize(d) {
			E.setWindowSize(this, d);
		}
		assertValidity() {
			f(this);
		}
		hasEvenY() {
			const { y: d } = this.toAffine();
			if (n.isOdd) return !n.isOdd(d);
			throw new Error("Field doesn't support isOdd");
		}
		equals(d) {
			u(d);
			const { px: v, py: m, pz: O } = this, { px: N, py: $, pz: B } = d, A = n.eql(n.mul(v, B), n.mul(N, O)), T = n.eql(n.mul(m, B), n.mul($, O));
			return A && T;
		}
		negate() {
			return new h(this.px, n.neg(this.py), this.pz);
		}
		double() {
			const { a: d, b: v } = e, m = n.mul(v, Qr$1), { px: O, py: N, pz: $ } = this;
			let B = n.ZERO, A = n.ZERO, T = n.ZERO, S = n.mul(O, O), L = n.mul(N, N), U = n.mul($, $), _ = n.mul(O, N);
			return _ = n.add(_, _), T = n.mul(O, $), T = n.add(T, T), B = n.mul(d, T), A = n.mul(m, U), A = n.add(B, A), B = n.sub(L, A), A = n.add(L, A), A = n.mul(B, A), B = n.mul(_, B), T = n.mul(m, T), U = n.mul(d, U), _ = n.sub(S, U), _ = n.mul(d, _), _ = n.add(_, T), T = n.add(S, S), S = n.add(T, S), S = n.add(S, U), S = n.mul(S, _), A = n.add(A, S), U = n.mul(N, $), U = n.add(U, U), S = n.mul(U, _), B = n.sub(B, S), T = n.mul(U, L), T = n.add(T, T), T = n.add(T, T), new h(B, A, T);
		}
		add(d) {
			u(d);
			const { px: v, py: m, pz: O } = this, { px: N, py: $, pz: B } = d;
			let A = n.ZERO, T = n.ZERO, S = n.ZERO;
			const L = e.a, U = n.mul(e.b, Qr$1);
			let _ = n.mul(v, N), j = n.mul(m, $), g = n.mul(O, B), w = n.add(v, m), b = n.add(N, $);
			w = n.mul(w, b), b = n.add(_, j), w = n.sub(w, b), b = n.add(v, O);
			let I = n.add(N, B);
			return b = n.mul(b, I), I = n.add(_, g), b = n.sub(b, I), I = n.add(m, O), A = n.add($, B), I = n.mul(I, A), A = n.add(j, g), I = n.sub(I, A), S = n.mul(L, b), A = n.mul(U, g), S = n.add(A, S), A = n.sub(j, S), S = n.add(j, S), T = n.mul(A, S), j = n.add(_, _), j = n.add(j, _), g = n.mul(L, g), b = n.mul(U, b), j = n.add(j, g), g = n.sub(_, g), g = n.mul(L, g), b = n.add(b, g), _ = n.mul(j, b), T = n.add(T, _), _ = n.mul(I, b), A = n.mul(w, A), A = n.sub(A, _), _ = n.mul(w, j), S = n.mul(I, S), S = n.add(S, _), new h(A, T, S);
		}
		subtract(d) {
			return this.add(d.negate());
		}
		is0() {
			return this.equals(h.ZERO);
		}
		wNAF(d) {
			return E.wNAFCached(this, d, h.normalizeZ);
		}
		multiplyUnsafe(d) {
			const { endo: v, n: m } = e;
			ft("scalar", d, dt, m);
			const O = h.ZERO;
			if (d === dt) return O;
			if (this.is0() || d === K) return this;
			if (!v || E.hasPrecomputes(this)) return E.wNAFCachedUnsafe(this, d, h.normalizeZ);
			let { k1neg: N, k1: $, k2neg: B, k2: A } = v.splitScalar(d), T = O, S = O, L = this;
			for (; $ > dt || A > dt;) $ & K && (T = T.add(L)), A & K && (S = S.add(L)), L = L.double(), $ >>= K, A >>= K;
			return N && (T = T.negate()), B && (S = S.negate()), S = new h(n.mul(S.px, v.beta), S.py, S.pz), T.add(S);
		}
		multiply(d) {
			const { endo: v, n: m } = e;
			ft("scalar", d, K, m);
			let O, N;
			if (v) {
				const { k1neg: $, k1: B, k2neg: A, k2: T } = v.splitScalar(d);
				let { p: S, f: L } = this.wNAF(B), { p: U, f: _ } = this.wNAF(T);
				S = E.constTimeNegate($, S), U = E.constTimeNegate(A, U), U = new h(n.mul(U.px, v.beta), U.py, U.pz), O = S.add(U), N = L.add(_);
			} else {
				const { p: $, f: B } = this.wNAF(d);
				O = $, N = B;
			}
			return h.normalizeZ([O, N])[0];
		}
		multiplyAndAddUnsafe(d, v, m) {
			const O = h.BASE, N = (B, A) => A === dt || A === K || !B.equals(O) ? B.multiplyUnsafe(A) : B.multiply(A), $ = N(this, v).add(N(d, m));
			return $.is0() ? void 0 : $;
		}
		toAffine(d) {
			return l(this, d);
		}
		isTorsionFree() {
			const { h: d, isTorsionFree: v } = e;
			if (d === K) return !0;
			if (v) return v(h, this);
			throw new Error("isTorsionFree() has not been declared for the elliptic curve");
		}
		clearCofactor() {
			const { h: d, clearCofactor: v } = e;
			return d === K ? this : v ? v(h, this) : this.multiplyUnsafe(e.h);
		}
		toRawBytes(d = !0) {
			return Ct$1("isCompressed", d), this.assertValidity(), o(h, this, d);
		}
		toHex(d = !0) {
			return Ct$1("isCompressed", d), Pt$1(this.toRawBytes(d));
		}
	}
	h.BASE = new h(e.Gx, e.Gy, n.ONE), h.ZERO = new h(n.ZERO, n.ONE, n.ZERO);
	const y = e.nBitLength, E = dc(h, e.endo ? Math.ceil(y / 2) : y);
	return {
		CURVE: e,
		ProjectivePoint: h,
		normPrivateKeyToScalar: a,
		weierstrassEquation: s,
		isWithinCurveOrder: c
	};
}
function Bc(t) {
	const e = Wr$1(t);
	return Dt(e, {
		hash: "hash",
		hmac: "function",
		randomBytes: "function"
	}, {
		bits2int: "function",
		bits2int_modN: "function",
		lowS: "boolean"
	}), Object.freeze({
		lowS: !0,
		...e
	});
}
function Ic(t) {
	const e = Bc(t), { Fp: n, n: r } = e, o = n.BYTES + 1, i = 2 * n.BYTES + 1;
	function s(g) {
		return X(g, r);
	}
	function c(g) {
		return nn$1(g, r);
	}
	const { ProjectivePoint: a, normPrivateKeyToScalar: u, weierstrassEquation: l, isWithinCurveOrder: f } = Ac({
		...e,
		toBytes(g, w, b) {
			const I = w.toAffine(), R = n.toBytes(I.x), x = ne$1;
			return Ct$1("isCompressed", b), b ? x(Uint8Array.from([w.hasEvenY() ? 2 : 3]), R) : x(Uint8Array.from([4]), R, n.toBytes(I.y));
		},
		fromBytes(g) {
			const w = g.length, b = g[0], I = g.subarray(1);
			if (w === o && (b === 2 || b === 3)) {
				const R = Ot$1(I);
				if (!Ee$1(R, K, n.ORDER)) throw new Error("Point is not on curve");
				const x = l(R);
				let C;
				try {
					C = n.sqrt(x);
				} catch (M) {
					const D = M instanceof Error ? ": " + M.message : "";
					throw new Error("Point is not on curve" + D);
				}
				const P = (C & K) === K;
				return (b & 1) === 1 !== P && (C = n.neg(C)), {
					x: R,
					y: C
				};
			} else if (w === i && b === 4) return {
				x: n.fromBytes(I.subarray(0, n.BYTES)),
				y: n.fromBytes(I.subarray(n.BYTES, 2 * n.BYTES))
			};
			else {
				const R = o, x = i;
				throw new Error("invalid Point, expected length of " + R + ", or uncompressed " + x + ", got " + w);
			}
		}
	}), h = (g) => Pt$1(Mt$1(g, e.nByteLength));
	function y(g) {
		return g > r >> K;
	}
	function E(g) {
		return y(g) ? s(-g) : g;
	}
	const p = (g, w, b) => Ot$1(g.slice(w, b));
	class d {
		constructor(w, b, I) {
			this.r = w, this.s = b, this.recovery = I, this.assertValidity();
		}
		static fromCompact(w) {
			const b = e.nByteLength;
			return w = et("compactSignature", w, b * 2), new d(p(w, 0, b), p(w, b, 2 * b));
		}
		static fromDER(w) {
			const { r: b, s: I } = lt.toSig(et("DER", w));
			return new d(b, I);
		}
		assertValidity() {
			ft("r", this.r, K, r), ft("s", this.s, K, r);
		}
		addRecoveryBit(w) {
			return new d(this.r, this.s, w);
		}
		recoverPublicKey(w) {
			const { r: b, s: I, recovery: R } = this, x = B(et("msgHash", w));
			if (R == null || ![
				0,
				1,
				2,
				3
			].includes(R)) throw new Error("recovery id invalid");
			const C = R === 2 || R === 3 ? b + e.n : b;
			if (C >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
			const P = (R & 1) === 0 ? "02" : "03", k = a.fromHex(P + h(C)), M = c(C), D = s(-x * M), z = s(I * M), Z = a.BASE.multiplyAndAddUnsafe(k, D, z);
			if (!Z) throw new Error("point at infinify");
			return Z.assertValidity(), Z;
		}
		hasHighS() {
			return y(this.s);
		}
		normalizeS() {
			return this.hasHighS() ? new d(this.r, s(-this.s), this.recovery) : this;
		}
		toDERRawBytes() {
			return Vt$1(this.toDERHex());
		}
		toDERHex() {
			return lt.hexFromSig({
				r: this.r,
				s: this.s
			});
		}
		toCompactRawBytes() {
			return Vt$1(this.toCompactHex());
		}
		toCompactHex() {
			return h(this.r) + h(this.s);
		}
	}
	const v = {
		isValidPrivateKey(g) {
			try {
				return u(g), !0;
			} catch {
				return !1;
			}
		},
		normPrivateKeyToScalar: u,
		randomPrivateKey: () => {
			const g = zr$1(e.n);
			return uc(e.randomBytes(g), e.n);
		},
		precompute(g = 8, w = a.BASE) {
			return w._setWindowSize(g), w.multiply(BigInt(3)), w;
		}
	};
	function m(g, w = !0) {
		return a.fromPrivateKey(g).toRawBytes(w);
	}
	function O(g) {
		const w = St$1(g), b = typeof g == "string", I = (w || b) && g.length;
		return w ? I === o || I === i : b ? I === 2 * o || I === 2 * i : g instanceof a;
	}
	function N(g, w, b = !0) {
		if (O(g)) throw new Error("first arg must be private key");
		if (!O(w)) throw new Error("second arg must be public key");
		return a.fromHex(w).multiply(u(g)).toRawBytes(b);
	}
	const $ = e.bits2int || function(g) {
		if (g.length > 8192) throw new Error("input is too large");
		const w = Ot$1(g), b = g.length * 8 - e.nBitLength;
		return b > 0 ? w >> BigInt(b) : w;
	}, B = e.bits2int_modN || function(g) {
		return s($(g));
	}, A = Je$1(e.nBitLength);
	function T(g) {
		return ft("num < 2^" + e.nBitLength, g, dt, A), Mt$1(g, e.nByteLength);
	}
	function S(g, w, b = L) {
		if (["recovered", "canonical"].some((W) => W in b)) throw new Error("sign() legacy options not supported");
		const { hash: I, randomBytes: R } = e;
		let { lowS: x, prehash: C, extraEntropy: P } = b;
		x ??= !0, g = et("msgHash", g), Jr$1(b), C && (g = et("prehashed msgHash", I(g)));
		const k = B(g), M = u(w), D = [T(M), T(k)];
		if (P != null && P !== !1) {
			const W = P === !0 ? R(n.BYTES) : P;
			D.push(et("extraEntropy", W));
		}
		const z = ne$1(...D), Z = k;
		function st(W) {
			const J = $(W);
			if (!f(J)) return;
			const Be = c(J), zt = a.BASE.multiply(J).toAffine(), vt = s(zt.x);
			if (vt === dt) return;
			const Zt = s(Be * s(Z + vt * M));
			if (Zt === dt) return;
			let Ut = (zt.x === vt ? 0 : 2) | Number(zt.y & K), vn = Zt;
			return x && y(Zt) && (vn = E(Zt), Ut ^= 1), new d(vt, vn, Ut);
		}
		return {
			seed: z,
			k2sig: st
		};
	}
	const L = {
		lowS: e.lowS,
		prehash: !1
	}, U = {
		lowS: e.lowS,
		prehash: !1
	};
	function _(g, w, b = L) {
		const { seed: I, k2sig: R } = S(g, w, b), x = e;
		return Vr$1(x.hash.outputLen, x.nByteLength, x.hmac)(I, R);
	}
	a.BASE._setWindowSize(8);
	function j(g, w, b, I = U) {
		const R = g;
		w = et("msgHash", w), b = et("publicKey", b);
		const { lowS: x, prehash: C, format: P } = I;
		if (Jr$1(I), "strict" in I) throw new Error("options.strict was renamed to lowS");
		if (P !== void 0 && P !== "compact" && P !== "der") throw new Error("format must be compact or der");
		const k = typeof R == "string" || St$1(R), M = !k && !P && typeof R == "object" && R !== null && typeof R.r == "bigint" && typeof R.s == "bigint";
		if (!k && !M) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
		let D, z;
		try {
			if (M && (D = new d(R.r, R.s)), k) {
				try {
					P !== "compact" && (D = d.fromDER(R));
				} catch (Ut) {
					if (!(Ut instanceof lt.Err)) throw Ut;
				}
				!D && P !== "der" && (D = d.fromCompact(R));
			}
			z = a.fromHex(b);
		} catch {
			return !1;
		}
		if (!D || x && D.hasHighS()) return !1;
		C && (w = e.hash(w));
		const { r: Z, s: st } = D, W = B(w), J = c(st), Be = s(W * J), zt = s(Z * J), vt = a.BASE.multiplyAndAddUnsafe(z, Be, zt)?.toAffine();
		return vt ? s(vt.x) === Z : !1;
	}
	return {
		CURVE: e,
		getPublicKey: m,
		getSharedSecret: N,
		sign: _,
		verify: j,
		ProjectivePoint: a,
		Signature: d,
		utils: v
	};
}
function Nc(t) {
	return {
		hash: t,
		hmac: (e, ...n) => ye$1(t, e, Vi$1(...n)),
		randomBytes: Lt$1
	};
}
function Uc(t, e) {
	const n = (r) => Ic({
		...t,
		...Nc(r)
	});
	return {
		...n(e),
		create: n
	};
}
function Lc() {
	const t = fn$1.utils.randomPrivateKey(), e = fn$1.getPublicKey(t);
	return {
		privateKey: toString(t, G$1),
		publicKey: toString(e, G$1)
	};
}
function jc() {
	const t = Lt$1(hn$1);
	return toString(t, G$1);
}
function Cc(t, e) {
	const n = fn$1.getSharedSecret(fromString(t, G$1), fromString(e, G$1)), r = Vs(Qt$1, n, void 0, void 0, hn$1);
	return toString(r, G$1);
}
function Pc(t) {
	const e = Qt$1(fromString(t, G$1));
	return toString(e, G$1);
}
function kc(t) {
	const e = Qt$1(fromString(t, Kt$1));
	return toString(e, G$1);
}
function pn$1(t) {
	return fromString(`${t}`, ln$1);
}
function Bt$1(t) {
	return Number(toString(t, ln$1));
}
function no$1(t) {
	return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ro$1(t) {
	const e = t.replace(/-/g, "+").replace(/_/g, "/"), n = (4 - e.length % 4) % 4;
	return e + "=".repeat(n);
}
function Vc(t) {
	const e = pn$1(typeof t.type < "u" ? t.type : 0);
	if (Bt$1(e) === 1 && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
	const n = typeof t.senderPublicKey < "u" ? fromString(t.senderPublicKey, G$1) : void 0, r = typeof t.iv < "u" ? fromString(t.iv, G$1) : Lt$1(oe), o = fromString(t.symKey, G$1), s = gn$1({
		type: e,
		sealed: $r$1(o, r).encrypt(fromString(t.message, Kt$1)),
		iv: r,
		senderPublicKey: n
	});
	return t.encoding === "base64url" ? no$1(s) : s;
}
function Mc(t) {
	const e = fromString(t.symKey, G$1), { sealed: n, iv: r } = Se$1({
		encoded: t.encoded,
		encoding: t.encoding
	}), o = $r$1(e, r).decrypt(n);
	if (o === null) throw new Error("Failed to decrypt");
	return toString(o, Kt$1);
}
function Dc(t, e) {
	const n = pn$1(2), r = Lt$1(oe), i = gn$1({
		type: n,
		sealed: fromString(t, Kt$1),
		iv: r
	});
	return e === "base64url" ? no$1(i) : i;
}
function Hc(t, e) {
	const { sealed: n } = Se$1({
		encoded: t,
		encoding: e
	});
	return toString(n, Kt$1);
}
function gn$1(t) {
	if (Bt$1(t.type) === 2) return toString(concat([t.type, t.sealed]), qt$1);
	if (Bt$1(t.type) === 1) {
		if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
		return toString(concat([
			t.type,
			t.senderPublicKey,
			t.iv,
			t.sealed
		]), qt$1);
	}
	return toString(concat([
		t.type,
		t.iv,
		t.sealed
	]), qt$1);
}
function Se$1(t) {
	const e = (t.encoding || "base64pad") === "base64url" ? ro$1(t.encoded) : t.encoded, n = fromString(e, qt$1), r = n.slice($c, eo$1), o = eo$1;
	if (Bt$1(r) === 1) {
		const a = 33, u = 45, l = n.slice(o, a), f = n.slice(a, u);
		return {
			type: r,
			sealed: n.slice(u),
			iv: f,
			senderPublicKey: l
		};
	}
	if (Bt$1(r) === 2) return {
		type: r,
		sealed: n.slice(o),
		iv: Lt$1(oe)
	};
	const i = 13, s = n.slice(o, i);
	return {
		type: r,
		sealed: n.slice(i),
		iv: s
	};
}
function qc(t, e) {
	const n = Se$1({
		encoded: t,
		encoding: e?.encoding
	});
	return oo$1({
		type: Bt$1(n.type),
		senderPublicKey: typeof n.senderPublicKey < "u" ? toString(n.senderPublicKey, G$1) : void 0,
		receiverPublicKey: e?.receiverPublicKey
	});
}
function oo$1(t) {
	const e = t?.type || 0;
	if (e === 1) {
		if (typeof t?.senderPublicKey > "u") throw new Error("missing sender public key");
		if (typeof t?.receiverPublicKey > "u") throw new Error("missing receiver public key");
	}
	return {
		type: e,
		senderPublicKey: t?.senderPublicKey,
		receiverPublicKey: t?.receiverPublicKey
	};
}
function Kc(t) {
	return t.type === 1 && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Fc(t) {
	return t.type === 2;
}
function io$1(t) {
	const e = Buffer.from(t.x, "base64"), n = Buffer.from(t.y, "base64");
	return concat([
		new Uint8Array([4]),
		e,
		n
	]);
}
function zc(t, e) {
	const [n, r, o] = t.split("."), i = Buffer.from(ro$1(o), "base64");
	if (i.length !== 64) throw new Error("Invalid signature length");
	const s = i.slice(0, 32), c = i.slice(32, 64), a = `${n}.${r}`, u = Qt$1(a), l = io$1(e);
	if (!_c.verify(concat([s, c]), u, l)) throw new Error("Invalid signature");
	return sn$2(t).payload;
}
function Zc(t) {
	return t?.relay || { protocol: "irn" };
}
function Yc(t) {
	const e = C$1[t];
	if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
	return e;
}
function co$1(t, e = "-") {
	const n = {}, r = "relay" + e;
	return Object.keys(t).forEach((o) => {
		if (o.startsWith(r)) {
			const i = o.replace(r, ""), s = t[o];
			n[i] = s;
		}
	}), n;
}
function Gc(t) {
	if (!t.includes("wc:")) {
		const u = je$1(t);
		u != null && u.includes("wc:") && (t = u);
	}
	t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
	const e = t.indexOf(":"), n = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r = t.substring(0, e), o = t.substring(e + 1, n).split("@"), i = typeof n < "u" ? t.substring(n) : "", s = new URLSearchParams(i), c = {};
	s.forEach((u, l) => {
		c[l] = u;
	});
	const a = typeof c.methods == "string" ? c.methods.split(",") : void 0;
	return {
		protocol: r,
		topic: ao$1(o[0]),
		version: parseInt(o[1], 10),
		symKey: c.symKey,
		relay: co$1(c),
		methods: a,
		expiryTimestamp: c.expiryTimestamp ? parseInt(c.expiryTimestamp, 10) : void 0
	};
}
function ao$1(t) {
	return t.startsWith("//") ? t.substring(2) : t;
}
function uo$1(t, e = "-") {
	const n = "relay", r = {};
	return Object.keys(t).forEach((o) => {
		const i = o, s = n + e + i;
		t[i] && (r[s] = t[i]);
	}), r;
}
function Wc(t) {
	const e = new URLSearchParams(), n = uo$1(t.relay);
	Object.keys(n).sort().forEach((o) => {
		e.set(o, n[o]);
	}), e.set("symKey", t.symKey), t.expiryTimestamp && e.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e.set("methods", t.methods.join(","));
	const r = e.toString();
	return `${t.protocol}:${t.topic}@${t.version}?${r}`;
}
function Xc(t, e, n) {
	return `${t}?wc_ev=${n}&topic=${e}`;
}
function It$1(t) {
	const e = [];
	return t.forEach((n) => {
		const [r, o] = n.split(":");
		e.push(`${r}:${o}`);
	}), e;
}
function ho$1(t) {
	const e = [];
	return Object.values(t).forEach((n) => {
		e.push(...It$1(n.accounts));
	}), e;
}
function po$1(t, e) {
	const n = [];
	return Object.values(t).forEach((r) => {
		It$1(r.accounts).includes(e) && n.push(...r.methods);
	}), n;
}
function go$1(t, e) {
	const n = [];
	return Object.values(t).forEach((r) => {
		It$1(r.accounts).includes(e) && n.push(...r.events);
	}), n;
}
function ia(t, e) {
	const n = Bo$1(t, e);
	if (n) throw new Error(n.message);
	const r = {};
	for (const [o, i] of Object.entries(t)) r[o] = {
		methods: i.methods,
		events: i.events,
		chains: i.accounts.map((s) => `${s.split(":")[0]}:${s.split(":")[1]}`)
	};
	return r;
}
function sa(t) {
	const { proposal: { requiredNamespaces: e, optionalNamespaces: n = {} }, supportedNamespaces: r } = t, o = ie$1(e), i = ie$1(n), s = {};
	Object.keys(r).forEach((u) => {
		const l = r[u].chains, f = r[u].methods, h = r[u].events, y = r[u].accounts;
		l.forEach((E) => {
			if (!y.some((p) => p.includes(E))) throw new Error(`No accounts provided for chain ${E} in namespace ${u}`);
		}), s[u] = {
			chains: l,
			methods: f,
			events: h,
			accounts: y
		};
	});
	const c = No$1(e, s, "approve()");
	if (c) throw new Error(c.message);
	const a = {};
	return !Object.keys(e).length && !Object.keys(n).length ? s : (Object.keys(o).forEach((u) => {
		const l = r[u].chains.filter((E) => {
			var p, d;
			return (d = (p = o[u]) == null ? void 0 : p.chains) == null ? void 0 : d.includes(E);
		}), f = r[u].methods.filter((E) => {
			var p, d;
			return (d = (p = o[u]) == null ? void 0 : p.methods) == null ? void 0 : d.includes(E);
		}), h = r[u].events.filter((E) => {
			var p, d;
			return (d = (p = o[u]) == null ? void 0 : p.events) == null ? void 0 : d.includes(E);
		}), y = l.map((E) => r[u].accounts.filter((p) => p.includes(`${E}:`))).flat();
		a[u] = {
			chains: l,
			methods: f,
			events: h,
			accounts: y
		};
	}), Object.keys(i).forEach((u) => {
		var l, f, h, y, E, p;
		if (!r[u]) return;
		const d = (f = (l = i[u]) == null ? void 0 : l.chains) == null ? void 0 : f.filter((N) => r[u].chains.includes(N)), v = r[u].methods.filter((N) => {
			var $, B;
			return (B = ($ = i[u]) == null ? void 0 : $.methods) == null ? void 0 : B.includes(N);
		}), m = r[u].events.filter((N) => {
			var $, B;
			return (B = ($ = i[u]) == null ? void 0 : $.events) == null ? void 0 : B.includes(N);
		}), O = d?.map((N) => r[u].accounts.filter(($) => $.includes(`${N}:`))).flat();
		a[u] = {
			chains: ot((h = a[u]) == null ? void 0 : h.chains, d),
			methods: ot((y = a[u]) == null ? void 0 : y.methods, v),
			events: ot((E = a[u]) == null ? void 0 : E.events, m),
			accounts: ot((p = a[u]) == null ? void 0 : p.accounts, O)
		};
	}), a);
}
function yn$1(t) {
	return t.includes(":");
}
function yo$1(t) {
	return yn$1(t) ? t.split(":")[0] : t;
}
function ie$1(t) {
	var e, n, r;
	const o = {};
	if (!Oe(t)) return o;
	for (const [i, s] of Object.entries(t)) {
		const c = yn$1(i) ? [i] : s.chains, a = s.methods || [], u = s.events || [], l = yo$1(i);
		o[l] = oa(ra({}, o[l]), {
			chains: ot(c, (e = o[l]) == null ? void 0 : e.chains),
			methods: ot(a, (n = o[l]) == null ? void 0 : n.methods),
			events: ot(u, (r = o[l]) == null ? void 0 : r.events)
		});
	}
	return o;
}
function mo$1(t) {
	const e = {};
	return t?.forEach((n) => {
		var r;
		const [o, i] = n.split(":");
		e[o] || (e[o] = {
			accounts: [],
			chains: [],
			events: [],
			methods: []
		}), e[o].accounts.push(n), (r = e[o].chains) == null || r.push(`${o}:${i}`);
	}), e;
}
function ca(t, e) {
	e = e.map((r) => r.replace("did:pkh:", ""));
	const n = mo$1(e);
	for (const [r, o] of Object.entries(n)) o.methods ? o.methods = ot(o.methods, t) : o.methods = t, o.events = ["chainChanged", "accountsChanged"];
	return n;
}
function aa(t, e) {
	var n, r, o, i, s, c;
	const a = ie$1(t), u = ie$1(e), l = {}, f = Object.keys(a).concat(Object.keys(u));
	for (const h of f) l[h] = {
		chains: ot((n = a[h]) == null ? void 0 : n.chains, (r = u[h]) == null ? void 0 : r.chains),
		methods: ot((o = a[h]) == null ? void 0 : o.methods, (i = u[h]) == null ? void 0 : i.methods),
		events: ot((s = a[h]) == null ? void 0 : s.events, (c = u[h]) == null ? void 0 : c.events)
	};
	return l;
}
function ht(t, e) {
	const { message: n, code: r } = bo$1[t];
	return {
		message: e ? `${n} ${e}` : n,
		code: r
	};
}
function Nt$1(t, e) {
	const { message: n, code: r } = wo$1[t];
	return {
		message: e ? `${n} ${e}` : n,
		code: r
	};
}
function se$1(t, e) {
	return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Oe(t) {
	return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Et$1(t) {
	return typeof t > "u";
}
function nt(t, e) {
	return e && Et$1(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Ae(t, e) {
	return e && Et$1(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function ua(t, e) {
	const { requiredNamespaces: n } = e, r = Object.keys(t.namespaces), o = Object.keys(n);
	let i = !0;
	return gt(o, r) ? (r.forEach((s) => {
		const { accounts: c, methods: a, events: u } = t.namespaces[s], l = It$1(c), f = n[s];
		(!gt(ue$1(s, f), l) || !gt(f.methods, a) || !gt(f.events, u)) && (i = !1);
	}), i) : !1;
}
function ce(t) {
	return nt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function Eo$1(t) {
	if (nt(t, !1) && t.includes(":")) {
		const e = t.split(":");
		if (e.length === 3) {
			const n = e[0] + ":" + e[1];
			return !!e[2] && ce(n);
		}
	}
	return !1;
}
function fa(t) {
	function e(n) {
		try {
			return typeof new URL(n) < "u";
		} catch {
			return !1;
		}
	}
	try {
		if (nt(t, !1)) {
			if (e(t)) return !0;
			return e(je$1(t));
		}
	} catch {}
	return !1;
}
function la(t) {
	var e;
	return (e = t?.proposer) == null ? void 0 : e.publicKey;
}
function da(t) {
	return t?.topic;
}
function ha(t, e) {
	let n = null;
	return nt(t?.publicKey, !1) || (n = ht("MISSING_OR_INVALID", `${e} controller public key should be a string`)), n;
}
function mn$1(t) {
	let e = !0;
	return se$1(t) ? t.length && (e = t.every((n) => nt(n, !1))) : e = !1, e;
}
function vo$1(t, e, n) {
	let r = null;
	return se$1(e) && e.length ? e.forEach((o) => {
		r || ce(o) || (r = Nt$1("UNSUPPORTED_CHAINS", `${n}, chain ${o} should be a string and conform to "namespace:chainId" format`));
	}) : ce(t) || (r = Nt$1("UNSUPPORTED_CHAINS", `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r;
}
function xo$1(t, e, n) {
	let r = null;
	return Object.entries(t).forEach(([o, i]) => {
		if (r) return;
		const s = vo$1(o, ue$1(o, i), `${e} ${n}`);
		s && (r = s);
	}), r;
}
function So$1(t, e) {
	let n = null;
	return se$1(t) ? t.forEach((r) => {
		n || Eo$1(r) || (n = Nt$1("UNSUPPORTED_ACCOUNTS", `${e}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
	}) : n = Nt$1("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n;
}
function Oo$1(t, e) {
	let n = null;
	return Object.values(t).forEach((r) => {
		if (n) return;
		const o = So$1(r?.accounts, `${e} namespace`);
		o && (n = o);
	}), n;
}
function Ao$1(t, e) {
	let n = null;
	return mn$1(t?.methods) ? mn$1(t?.events) || (n = Nt$1("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : n = Nt$1("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), n;
}
function wn$1(t, e) {
	let n = null;
	return Object.values(t).forEach((r) => {
		if (n) return;
		const o = Ao$1(r, `${e}, namespace`);
		o && (n = o);
	}), n;
}
function pa(t, e, n) {
	let r = null;
	if (t && Oe(t)) {
		const o = wn$1(t, e);
		o && (r = o);
		const i = xo$1(t, e, n);
		i && (r = i);
	} else r = ht("MISSING_OR_INVALID", `${e}, ${n} should be an object with data`);
	return r;
}
function Bo$1(t, e) {
	let n = null;
	if (t && Oe(t)) {
		const r = wn$1(t, e);
		r && (n = r);
		const o = Oo$1(t, e);
		o && (n = o);
	} else n = ht("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
	return n;
}
function Io$1(t) {
	return nt(t.protocol, !0);
}
function ga(t, e) {
	let n = !1;
	return e && !t ? n = !0 : t && se$1(t) && t.length && t.forEach((r) => {
		n = Io$1(r);
	}), n;
}
function ya(t) {
	return typeof t == "number";
}
function ma(t) {
	return typeof t < "u" && true;
}
function wa(t) {
	return !(!t || typeof t != "object" || !t.code || !Ae(t.code, !1) || !t.message || !nt(t.message, !1));
}
function ba(t) {
	return !(Et$1(t) || !nt(t.method, !1));
}
function Ea(t) {
	return !(Et$1(t) || Et$1(t.result) && Et$1(t.error) || !Ae(t.id, !1) || !nt(t.jsonrpc, !1));
}
function va(t) {
	return !(Et$1(t) || !nt(t.name, !1));
}
function xa(t, e) {
	return !(!ce(e) || !ho$1(t).includes(e));
}
function Sa(t, e, n) {
	return nt(n, !1) ? po$1(t, e).includes(n) : !1;
}
function Oa(t, e, n) {
	return nt(n, !1) ? go$1(t, e).includes(n) : !1;
}
function No$1(t, e, n) {
	let r = null;
	const o = Aa(t), i = Ba(e), s = Object.keys(o), c = Object.keys(i), a = Uo$1(Object.keys(t)), u = Uo$1(Object.keys(e)), l = a.filter((f) => !u.includes(f));
	return l.length && (r = ht("NON_CONFORMING_NAMESPACES", `${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)), gt(s, c) || (r = ht("NON_CONFORMING_NAMESPACES", `${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach((f) => {
		if (!f.includes(":") || r) return;
		const h = It$1(e[f].accounts);
		h.includes(f) || (r = ht("NON_CONFORMING_NAMESPACES", `${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${h.toString()}`));
	}), s.forEach((f) => {
		r || (gt(o[f].methods, i[f].methods) ? gt(o[f].events, i[f].events) || (r = ht("NON_CONFORMING_NAMESPACES", `${n} namespaces events don't satisfy namespace events for ${f}`)) : r = ht("NON_CONFORMING_NAMESPACES", `${n} namespaces methods don't satisfy namespace methods for ${f}`));
	}), r;
}
function Aa(t) {
	const e = {};
	return Object.keys(t).forEach((n) => {
		var r;
		n.includes(":") ? e[n] = t[n] : (r = t[n].chains) == null || r.forEach((o) => {
			e[o] = {
				methods: t[n].methods,
				events: t[n].events
			};
		});
	}), e;
}
function Uo$1(t) {
	return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Ba(t) {
	const e = {};
	return Object.keys(t).forEach((n) => {
		if (n.includes(":")) e[n] = t[n];
		else It$1(t[n].accounts)?.forEach((o) => {
			e[o] = {
				accounts: t[n].accounts.filter((i) => i.includes(`${o}:`)),
				methods: t[n].methods,
				events: t[n].events
			};
		});
	}), e;
}
function Ia(t, e) {
	return Ae(t, !1) && t <= e.max && t >= e.min;
}
function Na() {
	const t = xt$1();
	return new Promise((e) => {
		switch (t) {
			case Y$1.browser:
				e(To$1());
				break;
			case Y$1.reactNative:
				e(Ro$1());
				break;
			case Y$1.node:
				e(_o$1());
				break;
			default: e(!0);
		}
	});
}
function To$1() {
	return Tt$1() && navigator?.onLine;
}
async function Ro$1() {
	if (pt() && typeof global < "u" && global != null && global.NetInfo) return (await (global == null ? void 0 : global.NetInfo.fetch()))?.isConnected;
	return !0;
}
function _o$1() {
	return !0;
}
function Ua(t) {
	switch (xt$1()) {
		case Y$1.browser:
			$o$1(t);
			break;
		case Y$1.reactNative:
			Lo$1(t);
			break;
		case Y$1.node:
	}
}
function $o$1(t) {
	!pt() && Tt$1() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Lo$1(t) {
	pt() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((e) => t(e?.isConnected));
}
function Ta() {
	var t;
	return Tt$1() && (0, import_cjs$3.getDocument)() ? ((t = (0, import_cjs$3.getDocument)()) == null ? void 0 : t.visibilityState) === "visible" : !0;
}
var import_cjs$2, import_cjs$3, import_cjs$4, ae, Zo, Yo$1, Go$1, Tn$1, Wo$1, Xo$1, Rn$1, _n$1, Jo$1, $n$1, Y$1, ti$1, hi$1, le$1, Wn$1, _i$1, $i$1, Li$1, ji$1, _t, Xn$1, ke$1, tr$1, er$1, nr, Mi$1, Jt$1, Di$1, Hi, qi$1, Ki$1, Fi$1, zi$1, rr$1, or$1, En$1, Yi$1, Gi, Wi, Qi, ts, es, ar$1, ns, rs, ur$1, Me$1, fr$1, os, de$1, lr$1, dr$1, De, hr$1, mt, gs, Es, Nr$1, xs, Ss, Os, As, ge$1, Bs, Ur$1, Tr$1, F$1, Us, Rs, $s, Ls, Rr$1, js, Cs, $r$1, Lr$1, ye$1, Ge$1, jr$1, Vs, qs$1, Ks, wt, bt, Fs, Qt$1, me, we, zs, Zs$1, ut, Xe$1, Je$1, Qe$1, kr$1, Qs, tc, ec, q, H, At$1, nc, en, Mr$1, Dr$1, ic, Zr$1, ve, sn$1, Gr$1, Ht$1, an$1, un$1, yc, Xr$1, mc, wc, fn$1, xc, Sc, Oc, lt, dt, K, Qr$1, to$1, _c, ln$1, G$1, qt$1, xe, Kt$1, $c, eo$1, oe, hn$1, Jc, Qc, ta, fo$1, ea, na, lo$1, ra, oa, wo$1, bo$1, bn, Ra;
var init_index_es$2 = __esmMin((() => {
	init_es();
	import_cjs$2 = require_cjs();
	import_cjs$3 = require_cjs$1();
	import_cjs$4 = require_cjs$2();
	init__esm();
	init_esm();
	init_index_es$3();
	init_src();
	init_index_es$4();
	ae = ":";
	Zo = Object.defineProperty;
	Yo$1 = Object.defineProperties;
	Go$1 = Object.getOwnPropertyDescriptors;
	Tn$1 = Object.getOwnPropertySymbols;
	Wo$1 = Object.prototype.hasOwnProperty;
	Xo$1 = Object.prototype.propertyIsEnumerable;
	Rn$1 = (t, e, n) => e in t ? Zo(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : t[e] = n;
	_n$1 = (t, e) => {
		for (var n in e || (e = {})) Wo$1.call(e, n) && Rn$1(t, n, e[n]);
		if (Tn$1) for (var n of Tn$1(e)) Xo$1.call(e, n) && Rn$1(t, n, e[n]);
		return t;
	};
	Jo$1 = (t, e) => Yo$1(t, Go$1(e));
	$n$1 = "ReactNative";
	Y$1 = {
		reactNative: "react-native",
		node: "node",
		browser: "browser",
		unknown: "unknown"
	};
	ti$1 = 1e3;
	hi$1 = (t) => t;
	le$1 = BigInt(2 ** 32 - 1);
	Wn$1 = BigInt(32);
	_i$1 = (t, e, n) => t << n | e >>> 32 - n;
	$i$1 = (t, e, n) => e << n | t >>> 32 - n;
	Li$1 = (t, e, n) => e << n - 32 | t >>> 64 - n;
	ji$1 = (t, e, n) => t << n - 32 | e >>> 64 - n;
	_t = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
	Xn$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
	ke$1 = class {
		clone() {
			return this._cloneInto();
		}
	};
	tr$1 = [];
	er$1 = [];
	nr = [];
	Mi$1 = BigInt(0);
	Jt$1 = BigInt(1);
	Di$1 = BigInt(2);
	Hi = BigInt(7);
	qi$1 = BigInt(256);
	Ki$1 = BigInt(113);
	for (let t = 0, e = Jt$1, n = 1, r = 0; t < 24; t++) {
		[n, r] = [r, (2 * n + 3 * r) % 5], tr$1.push(2 * (5 * r + n)), er$1.push((t + 1) * (t + 2) / 2 % 64);
		let o = Mi$1;
		for (let i = 0; i < 7; i++) e = (e << Jt$1 ^ (e >> Hi) * Ki$1) % qi$1, e & Di$1 && (o ^= Jt$1 << (Jt$1 << BigInt(i)) - Jt$1);
		nr.push(o);
	}
	[Fi$1, zi$1] = Ri$1(nr, !0), rr$1 = (t, e, n) => n > 32 ? Li$1(t, e, n) : _i$1(t, e, n), or$1 = (t, e, n) => n > 32 ? ji$1(t, e, n) : $i$1(t, e, n);
	En$1 = class En$1 extends ke$1 {
		constructor(e, n, r, o = !1, i = 24) {
			if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Wt$1(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
			this.state = /* @__PURE__ */ new Uint8Array(200), this.state32 = Ci$1(this.state);
		}
		keccak() {
			Xn$1 || Jn$1(this.state32), Zi(this.state32, this.rounds), Xn$1 || Jn$1(this.state32), this.posOut = 0, this.pos = 0;
		}
		update(e) {
			Rt$1(this);
			const { blockLen: n, state: r } = this;
			e = $t$1(e);
			const o = e.length;
			for (let i = 0; i < o;) {
				const s = Math.min(n - this.pos, o - i);
				for (let c = 0; c < s; c++) r[this.pos++] ^= e[i++];
				this.pos === n && this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = !0;
			const { state: e, suffix: n, pos: r, blockLen: o } = this;
			e[r] ^= n, n & 128 && r === o - 1 && this.keccak(), e[o - 1] ^= 128, this.keccak();
		}
		writeInto(e) {
			Rt$1(this, !1), Xt$1(e), this.finish();
			const n = this.state, { blockLen: r } = this;
			for (let o = 0, i = e.length; o < i;) {
				this.posOut >= r && this.keccak();
				const s = Math.min(r - this.posOut, i - o);
				e.set(n.subarray(this.posOut, this.posOut + s), o), this.posOut += s, o += s;
			}
			return e;
		}
		xofInto(e) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(e);
		}
		xof(e) {
			return Wt$1(e), this.xofInto(new Uint8Array(e));
		}
		digestInto(e) {
			if (Gn$1(e, this), this.finished) throw new Error("digest() was already called");
			return this.writeInto(e), this.destroy(), e;
		}
		digest() {
			return this.digestInto(new Uint8Array(this.outputLen));
		}
		destroy() {
			this.destroyed = !0, this.state.fill(0);
		}
		_cloneInto(e) {
			const { blockLen: n, suffix: r, outputLen: o, rounds: i, enableXOF: s } = this;
			return e || (e = new En$1(n, r, o, s, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = r, e.outputLen = o, e.enableXOF = s, e.destroyed = this.destroyed, e;
		}
	};
	Yi$1 = (t, e, n) => Qn$1(() => new En$1(e, t, n));
	Gi = Yi$1(1, 136, 32);
	Wi = "https://rpc.walletconnect.org/v1";
	Qi = Object.defineProperty;
	ts = Object.defineProperties;
	es = Object.getOwnPropertyDescriptors;
	ar$1 = Object.getOwnPropertySymbols;
	ns = Object.prototype.hasOwnProperty;
	rs = Object.prototype.propertyIsEnumerable;
	ur$1 = (t, e, n) => e in t ? Qi(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : t[e] = n;
	Me$1 = (t, e) => {
		for (var n in e || (e = {})) ns.call(e, n) && ur$1(t, n, e[n]);
		if (ar$1) for (var n of ar$1(e)) rs.call(e, n) && ur$1(t, n, e[n]);
		return t;
	};
	fr$1 = (t, e) => ts(t, es(e));
	os = "did:pkh:";
	de$1 = (t) => t?.split(":");
	lr$1 = (t) => {
		const e = t && de$1(t);
		if (e) return t.includes(os) ? e[3] : e[1];
	};
	dr$1 = (t) => {
		const e = t && de$1(t);
		if (e) return e[2] + ":" + e[3];
	};
	De = (t) => {
		const e = t && de$1(t);
		if (e) return e.pop();
	};
	hr$1 = (t, e) => {
		const n = `${t.domain} wants you to sign in with your Ethereum account:`, r = De(e);
		if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
		let o = t.statement || void 0;
		const i = `URI: ${t.aud || t.uri}`, s = `Version: ${t.version}`, c = `Chain ID: ${lr$1(e)}`, a = `Nonce: ${t.nonce}`, u = `Issued At: ${t.iat}`, l = t.exp ? `Expiration Time: ${t.exp}` : void 0, f = t.nbf ? `Not Before: ${t.nbf}` : void 0, h = t.requestId ? `Request ID: ${t.requestId}` : void 0, y = t.resources ? `Resources:${t.resources.map((p) => `
- ${p}`).join("")}` : void 0, E = pe$1(t.resources);
		if (E) {
			const p = yt(E);
			o = Ke$1(o, p);
		}
		return [
			n,
			r,
			"",
			o,
			"",
			i,
			s,
			c,
			a,
			u,
			l,
			f,
			h,
			y
		].filter((p) => p != null).join(`
`);
	};
	mt = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
	gs = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
	if (!(new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)) throw new Error("Non little-endian hardware is not supported");
	Es = (t, e) => {
		function n(r, ...o) {
			if (tt$1(r), t.nonceLength !== void 0) {
				const l = o[0];
				if (!l) throw new Error("nonce / iv required");
				t.varSizeNonce ? tt$1(l) : tt$1(l, t.nonceLength);
			}
			const i = t.tagLength;
			i && o[1] !== void 0 && tt$1(o[1]);
			const s = e(r, ...o), c = (l, f) => {
				if (f !== void 0) {
					if (l !== 2) throw new Error("cipher output not supported");
					tt$1(f);
				}
			};
			let a = !1;
			return {
				encrypt(l, f) {
					if (a) throw new Error("cannot encrypt() twice with same key + nonce");
					return a = !0, tt$1(l), c(s.encrypt.length, f), s.encrypt(l, f);
				},
				decrypt(l, f) {
					if (tt$1(l), i && l.length < i) throw new Error("invalid ciphertext length: smaller than tagLength=" + i);
					return c(s.decrypt.length, f), s.decrypt(l, f);
				}
			};
		}
		return Object.assign(n, t), n;
	};
	Nr$1 = (t) => Uint8Array.from(t.split("").map((e) => e.charCodeAt(0)));
	xs = Nr$1("expand 16-byte k");
	Ss = Nr$1("expand 32-byte k");
	Os = mt(xs);
	As = mt(Ss);
	ge$1 = 64;
	Bs = 16;
	Ur$1 = 2 ** 32 - 1;
	Tr$1 = /* @__PURE__ */ new Uint32Array();
	F$1 = (t, e) => t[e++] & 255 | (t[e++] & 255) << 8;
	Us = class {
		constructor(e) {
			this.blockLen = 16, this.outputLen = 16, this.buffer = /* @__PURE__ */ new Uint8Array(16), this.r = /* @__PURE__ */ new Uint16Array(10), this.h = /* @__PURE__ */ new Uint16Array(10), this.pad = /* @__PURE__ */ new Uint16Array(8), this.pos = 0, this.finished = !1, e = ze$1(e), tt$1(e, 32);
			const n = F$1(e, 0), r = F$1(e, 2), o = F$1(e, 4), i = F$1(e, 6), s = F$1(e, 8), c = F$1(e, 10), a = F$1(e, 12), u = F$1(e, 14);
			this.r[0] = n & 8191, this.r[1] = (n >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | o << 6) & 7939, this.r[3] = (o >>> 7 | i << 9) & 8191, this.r[4] = (i >>> 4 | s << 12) & 255, this.r[5] = s >>> 1 & 8190, this.r[6] = (s >>> 14 | c << 2) & 8191, this.r[7] = (c >>> 11 | a << 5) & 8065, this.r[8] = (a >>> 8 | u << 8) & 8191, this.r[9] = u >>> 5 & 127;
			for (let l = 0; l < 8; l++) this.pad[l] = F$1(e, 16 + 2 * l);
		}
		process(e, n, r = !1) {
			const o = r ? 0 : 2048, { h: i, r: s } = this, c = s[0], a = s[1], u = s[2], l = s[3], f = s[4], h = s[5], y = s[6], E = s[7], p = s[8], d = s[9], v = F$1(e, n + 0), m = F$1(e, n + 2), O = F$1(e, n + 4), N = F$1(e, n + 6), $ = F$1(e, n + 8), B = F$1(e, n + 10), A = F$1(e, n + 12), T = F$1(e, n + 14);
			let S = i[0] + (v & 8191), L = i[1] + ((v >>> 13 | m << 3) & 8191), U = i[2] + ((m >>> 10 | O << 6) & 8191), _ = i[3] + ((O >>> 7 | N << 9) & 8191), j = i[4] + ((N >>> 4 | $ << 12) & 8191), g = i[5] + ($ >>> 1 & 8191), w = i[6] + (($ >>> 14 | B << 2) & 8191), b = i[7] + ((B >>> 11 | A << 5) & 8191), I = i[8] + ((A >>> 8 | T << 8) & 8191), R = i[9] + (T >>> 5 | o), x = 0, C = x + S * c + L * (5 * d) + U * (5 * p) + _ * (5 * E) + j * (5 * y);
			x = C >>> 13, C &= 8191, C += g * (5 * h) + w * (5 * f) + b * (5 * l) + I * (5 * u) + R * (5 * a), x += C >>> 13, C &= 8191;
			let P = x + S * a + L * c + U * (5 * d) + _ * (5 * p) + j * (5 * E);
			x = P >>> 13, P &= 8191, P += g * (5 * y) + w * (5 * h) + b * (5 * f) + I * (5 * l) + R * (5 * u), x += P >>> 13, P &= 8191;
			let k = x + S * u + L * a + U * c + _ * (5 * d) + j * (5 * p);
			x = k >>> 13, k &= 8191, k += g * (5 * E) + w * (5 * y) + b * (5 * h) + I * (5 * f) + R * (5 * l), x += k >>> 13, k &= 8191;
			let M = x + S * l + L * u + U * a + _ * c + j * (5 * d);
			x = M >>> 13, M &= 8191, M += g * (5 * p) + w * (5 * E) + b * (5 * y) + I * (5 * h) + R * (5 * f), x += M >>> 13, M &= 8191;
			let D = x + S * f + L * l + U * u + _ * a + j * c;
			x = D >>> 13, D &= 8191, D += g * (5 * d) + w * (5 * p) + b * (5 * E) + I * (5 * y) + R * (5 * h), x += D >>> 13, D &= 8191;
			let z = x + S * h + L * f + U * l + _ * u + j * a;
			x = z >>> 13, z &= 8191, z += g * c + w * (5 * d) + b * (5 * p) + I * (5 * E) + R * (5 * y), x += z >>> 13, z &= 8191;
			let Z = x + S * y + L * h + U * f + _ * l + j * u;
			x = Z >>> 13, Z &= 8191, Z += g * a + w * c + b * (5 * d) + I * (5 * p) + R * (5 * E), x += Z >>> 13, Z &= 8191;
			let st = x + S * E + L * y + U * h + _ * f + j * l;
			x = st >>> 13, st &= 8191, st += g * u + w * a + b * c + I * (5 * d) + R * (5 * p), x += st >>> 13, st &= 8191;
			let W = x + S * p + L * E + U * y + _ * h + j * f;
			x = W >>> 13, W &= 8191, W += g * l + w * u + b * a + I * c + R * (5 * d), x += W >>> 13, W &= 8191;
			let J = x + S * d + L * p + U * E + _ * y + j * h;
			x = J >>> 13, J &= 8191, J += g * f + w * l + b * u + I * a + R * c, x += J >>> 13, J &= 8191, x = (x << 2) + x | 0, x = x + C | 0, C = x & 8191, x = x >>> 13, P += x, i[0] = C, i[1] = P, i[2] = k, i[3] = M, i[4] = D, i[5] = z, i[6] = Z, i[7] = st, i[8] = W, i[9] = J;
		}
		finalize() {
			const { h: e, pad: n } = this, r = /* @__PURE__ */ new Uint16Array(10);
			let o = e[1] >>> 13;
			e[1] &= 8191;
			for (let c = 2; c < 10; c++) e[c] += o, o = e[c] >>> 13, e[c] &= 8191;
			e[0] += o * 5, o = e[0] >>> 13, e[0] &= 8191, e[1] += o, o = e[1] >>> 13, e[1] &= 8191, e[2] += o, r[0] = e[0] + 5, o = r[0] >>> 13, r[0] &= 8191;
			for (let c = 1; c < 10; c++) r[c] = e[c] + o, o = r[c] >>> 13, r[c] &= 8191;
			r[9] -= 8192;
			let i = (o ^ 1) - 1;
			for (let c = 0; c < 10; c++) r[c] &= i;
			i = ~i;
			for (let c = 0; c < 10; c++) e[c] = e[c] & i | r[c];
			e[0] = (e[0] | e[1] << 13) & 65535, e[1] = (e[1] >>> 3 | e[2] << 10) & 65535, e[2] = (e[2] >>> 6 | e[3] << 7) & 65535, e[3] = (e[3] >>> 9 | e[4] << 4) & 65535, e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535, e[5] = (e[6] >>> 2 | e[7] << 11) & 65535, e[6] = (e[7] >>> 5 | e[8] << 8) & 65535, e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
			let s = e[0] + n[0];
			e[0] = s & 65535;
			for (let c = 1; c < 8; c++) s = (e[c] + n[c] | 0) + (s >>> 16) | 0, e[c] = s & 65535;
			jt$1(r);
		}
		update(e) {
			Or$1(this);
			const { buffer: n, blockLen: r } = this;
			e = ze$1(e);
			const o = e.length;
			for (let i = 0; i < o;) {
				const s = Math.min(r - this.pos, o - i);
				if (s === r) {
					for (; r <= o - i; i += r) this.process(e, i);
					continue;
				}
				n.set(e.subarray(i, i + s), this.pos), this.pos += s, i += s, this.pos === r && (this.process(n, 0, !1), this.pos = 0);
			}
			return this;
		}
		destroy() {
			jt$1(this.h, this.r, this.buffer, this.pad);
		}
		digestInto(e) {
			Or$1(this), ps(e, this), this.finished = !0;
			const { buffer: n, h: r } = this;
			let { pos: o } = this;
			if (o) {
				for (n[o++] = 1; o < 16; o++) n[o] = 0;
				this.process(n, 0, !0);
			}
			this.finalize();
			let i = 0;
			for (let s = 0; s < 8; s++) e[i++] = r[s] >>> 0, e[i++] = r[s] >>> 8;
			return e;
		}
		digest() {
			const { buffer: e, outputLen: n } = this;
			this.digestInto(e);
			const r = e.slice(0, n);
			return this.destroy(), r;
		}
	};
	Rs = Ts((t) => new Us(t));
	$s = Ns(_s, {
		counterRight: !1,
		counterLength: 4,
		allowShortKeys: !1
	});
	Ls = /* @__PURE__ */ new Uint8Array(16);
	Rr$1 = (t, e) => {
		t.update(e);
		const n = e.length % 16;
		n && t.update(Ls.subarray(n));
	};
	js = /* @__PURE__ */ new Uint8Array(32);
	Cs = (t) => (e, n, r) => ({
		encrypt(i, s) {
			const c = i.length;
			s = Br$1(c + 16, s, !1), s.set(i);
			const a = s.subarray(0, -16);
			t(e, n, a, a, 1);
			const u = _r$1(t, e, n, a, r);
			return s.set(u, c), jt$1(u), s;
		},
		decrypt(i, s) {
			s = Br$1(i.length - 16, s, !1);
			const c = i.subarray(0, -16), a = i.subarray(-16), u = _r$1(t, e, n, c, r);
			if (!bs(a, u)) throw new Error("invalid tag");
			return s.set(i.subarray(0, -16)), t(e, n, s, s, 1), jt$1(u), s;
		}
	});
	$r$1 = Es({
		blockSize: 64,
		nonceLength: 12,
		tagLength: 16
	}, Cs($s));
	Lr$1 = class extends ke$1 {
		constructor(e, n) {
			super(), this.finished = !1, this.destroyed = !1, Ce$1(e);
			const r = $t$1(n);
			if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
			this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
			const o = this.blockLen, i = new Uint8Array(o);
			i.set(r.length > o ? e.create().update(r).digest() : r);
			for (let s = 0; s < i.length; s++) i[s] ^= 54;
			this.iHash.update(i), this.oHash = e.create();
			for (let s = 0; s < i.length; s++) i[s] ^= 106;
			this.oHash.update(i), i.fill(0);
		}
		update(e) {
			return Rt$1(this), this.iHash.update(e), this;
		}
		digestInto(e) {
			Rt$1(this), Xt$1(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
		}
		digest() {
			const e = new Uint8Array(this.oHash.outputLen);
			return this.digestInto(e), e;
		}
		_cloneInto(e) {
			e || (e = Object.create(Object.getPrototypeOf(this), {}));
			const { oHash: n, iHash: r, finished: o, destroyed: i, blockLen: s, outputLen: c } = this;
			return e = e, e.finished = o, e.destroyed = i, e.blockLen = s, e.outputLen = c, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
		}
		destroy() {
			this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
		}
	};
	ye$1 = (t, e, n) => new Lr$1(t, e).update(n).digest();
	ye$1.create = (t, e) => new Lr$1(t, e);
	Ge$1 = new Uint8Array([0]);
	jr$1 = /* @__PURE__ */ new Uint8Array();
	Vs = (t, e, n, r, o) => ks(t, Ps(t, e, n), r, o);
	qs$1 = class extends ke$1 {
		constructor(e, n, r, o) {
			super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Pe$1(this.buffer);
		}
		update(e) {
			Rt$1(this);
			const { view: n, buffer: r, blockLen: o } = this;
			e = $t$1(e);
			const i = e.length;
			for (let s = 0; s < i;) {
				const c = Math.min(o - this.pos, i - s);
				if (c === o) {
					const a = Pe$1(e);
					for (; o <= i - s; s += o) this.process(a, s);
					continue;
				}
				r.set(e.subarray(s, s + c), this.pos), this.pos += c, s += c, this.pos === o && (this.process(n, 0), this.pos = 0);
			}
			return this.length += e.length, this.roundClean(), this;
		}
		digestInto(e) {
			Rt$1(this), Gn$1(e, this), this.finished = !0;
			const { buffer: n, view: r, blockLen: o, isLE: i } = this;
			let { pos: s } = this;
			n[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > o - s && (this.process(r, 0), s = 0);
			for (let f = s; f < o; f++) n[f] = 0;
			Ms(r, o - 8, BigInt(this.length * 8), i), this.process(r, 0);
			const c = Pe$1(e), a = this.outputLen;
			if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
			const u = a / 4, l = this.get();
			if (u > l.length) throw new Error("_sha2: outputLen bigger than state");
			for (let f = 0; f < u; f++) c.setUint32(4 * f, l[f], i);
		}
		digest() {
			const { buffer: e, outputLen: n } = this;
			this.digestInto(e);
			const r = e.slice(0, n);
			return this.destroy(), r;
		}
		_cloneInto(e) {
			e || (e = new this.constructor()), e.set(...this.get());
			const { blockLen: n, buffer: r, length: o, finished: i, destroyed: s, pos: c } = this;
			return e.length = o, e.pos = c, e.finished = i, e.destroyed = s, o % n && e.buffer.set(r), e;
		}
	};
	Ks = new Uint32Array([
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
	wt = new Uint32Array([
		1779033703,
		3144134277,
		1013904242,
		2773480762,
		1359893119,
		2600822924,
		528734635,
		1541459225
	]);
	bt = /* @__PURE__ */ new Uint32Array(64);
	Fs = class extends qs$1 {
		constructor() {
			super(64, 32, 8, !1), this.A = wt[0] | 0, this.B = wt[1] | 0, this.C = wt[2] | 0, this.D = wt[3] | 0, this.E = wt[4] | 0, this.F = wt[5] | 0, this.G = wt[6] | 0, this.H = wt[7] | 0;
		}
		get() {
			const { A: e, B: n, C: r, D: o, E: i, F: s, G: c, H: a } = this;
			return [
				e,
				n,
				r,
				o,
				i,
				s,
				c,
				a
			];
		}
		set(e, n, r, o, i, s, c, a) {
			this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = o | 0, this.E = i | 0, this.F = s | 0, this.G = c | 0, this.H = a | 0;
		}
		process(e, n) {
			for (let f = 0; f < 16; f++, n += 4) bt[f] = e.getUint32(n, !1);
			for (let f = 16; f < 64; f++) {
				const h = bt[f - 15], y = bt[f - 2], E = ct(h, 7) ^ ct(h, 18) ^ h >>> 3, p = ct(y, 17) ^ ct(y, 19) ^ y >>> 10;
				bt[f] = p + bt[f - 7] + E + bt[f - 16] | 0;
			}
			let { A: r, B: o, C: i, D: s, E: c, F: a, G: u, H: l } = this;
			for (let f = 0; f < 64; f++) {
				const h = ct(c, 6) ^ ct(c, 11) ^ ct(c, 25), y = l + h + Ds(c, a, u) + Ks[f] + bt[f] | 0, p = (ct(r, 2) ^ ct(r, 13) ^ ct(r, 22)) + Hs(r, o, i) | 0;
				l = u, u = a, a = c, c = s + y | 0, s = i, i = o, o = r, r = y + p | 0;
			}
			r = r + this.A | 0, o = o + this.B | 0, i = i + this.C | 0, s = s + this.D | 0, c = c + this.E | 0, a = a + this.F | 0, u = u + this.G | 0, l = l + this.H | 0, this.set(r, o, i, s, c, a, u, l);
		}
		roundClean() {
			bt.fill(0);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
		}
	};
	Qt$1 = Qn$1(() => new Fs());
	me = BigInt(0);
	we = BigInt(1);
	zs = BigInt(2);
	Zs$1 = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
	ut = {
		_0: 48,
		_9: 57,
		A: 65,
		F: 70,
		a: 97,
		f: 102
	};
	Xe$1 = (t) => typeof t == "bigint" && me <= t;
	Je$1 = (t) => (zs << BigInt(t - 1)) - we;
	Qe$1 = (t) => new Uint8Array(t);
	kr$1 = (t) => Uint8Array.from(t);
	Qs = {
		bigint: (t) => typeof t == "bigint",
		function: (t) => typeof t == "function",
		boolean: (t) => typeof t == "boolean",
		string: (t) => typeof t == "string",
		stringOrUint8Array: (t) => typeof t == "string" || St$1(t),
		isSafeInteger: (t) => Number.isSafeInteger(t),
		array: (t) => Array.isArray(t),
		field: (t, e) => e.Fp.isValid(t),
		hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
	};
	tc = () => {
		throw new Error("not implemented");
	};
	ec = Object.freeze({
		__proto__: null,
		isBytes: St$1,
		abytes: te,
		abool: Ct$1,
		bytesToHex: Pt$1,
		numberToHexUnpadded: kt$1,
		hexToNumber: We$1,
		hexToBytes: Vt$1,
		bytesToNumberBE: Ot$1,
		bytesToNumberLE: ee,
		numberToBytesBE: Mt$1,
		numberToBytesLE: be$1,
		numberToVarBytesBE: Ys$1,
		ensureBytes: et,
		concatBytes: ne$1,
		equalBytes: Gs,
		utf8ToBytes: Ws,
		inRange: Ee$1,
		aInRange: ft,
		bitLen: Pr$1,
		bitGet: Xs,
		bitSet: Js,
		bitMask: Je$1,
		createHmacDrbg: Vr$1,
		validateObject: Dt,
		notImplemented: tc,
		memoized: tn$1
	});
	q = BigInt(0);
	H = BigInt(1);
	At$1 = BigInt(2);
	nc = BigInt(3);
	en = BigInt(4);
	Mr$1 = BigInt(5);
	Dr$1 = BigInt(8);
	ic = [
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
	Zr$1 = BigInt(0);
	ve = BigInt(1);
	sn$1 = /* @__PURE__ */ new WeakMap();
	Gr$1 = /* @__PURE__ */ new WeakMap();
	Ht$1 = BigInt(0);
	an$1 = BigInt(1);
	un$1 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
	yc = BigInt(1);
	Xr$1 = BigInt(2);
	mc = BigInt(3);
	wc = BigInt(5);
	fn$1 = gc({
		P: un$1,
		a: BigInt(486662),
		montgomeryBits: 255,
		nByteLength: 32,
		Gu: BigInt(9),
		powPminus2: (t) => {
			const e = un$1, { pow_p_5_8: n, b2: r } = bc(t);
			return X(it$1(n, mc, e) * r, e);
		},
		adjustScalarBytes: Ec,
		randomBytes: Lt$1
	});
	({bytesToNumberBE: xc, hexToBytes: Sc} = ec);
	Oc = class extends Error {
		constructor(e = "") {
			super(e);
		}
	};
	lt = {
		Err: Oc,
		_tlv: {
			encode: (t, e) => {
				const { Err: n } = lt;
				if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
				if (e.length & 1) throw new n("tlv.encode: unpadded data");
				const r = e.length / 2, o = kt$1(r);
				if (o.length / 2 & 128) throw new n("tlv.encode: long form length too big");
				const i = r > 127 ? kt$1(o.length / 2 | 128) : "";
				return kt$1(t) + i + o + e;
			},
			decode(t, e) {
				const { Err: n } = lt;
				let r = 0;
				if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
				if (e.length < 2 || e[r++] !== t) throw new n("tlv.decode: wrong tlv");
				const o = e[r++], i = !!(o & 128);
				let s = 0;
				if (!i) s = o;
				else {
					const a = o & 127;
					if (!a) throw new n("tlv.decode(long): indefinite length not supported");
					if (a > 4) throw new n("tlv.decode(long): byte length is too big");
					const u = e.subarray(r, r + a);
					if (u.length !== a) throw new n("tlv.decode: length bytes not complete");
					if (u[0] === 0) throw new n("tlv.decode(long): zero leftmost byte");
					for (const l of u) s = s << 8 | l;
					if (r += a, s < 128) throw new n("tlv.decode(long): not minimal encoding");
				}
				const c = e.subarray(r, r + s);
				if (c.length !== s) throw new n("tlv.decode: wrong value length");
				return {
					v: c,
					l: e.subarray(r + s)
				};
			}
		},
		_int: {
			encode(t) {
				const { Err: e } = lt;
				if (t < dt) throw new e("integer: negative integers are not allowed");
				let n = kt$1(t);
				if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1) throw new e("unexpected DER parsing assertion: unpadded hex");
				return n;
			},
			decode(t) {
				const { Err: e } = lt;
				if (t[0] & 128) throw new e("invalid signature integer: negative");
				if (t[0] === 0 && !(t[1] & 128)) throw new e("invalid signature integer: unnecessary leading zero");
				return xc(t);
			}
		},
		toSig(t) {
			const { Err: e, _int: n, _tlv: r } = lt, o = typeof t == "string" ? Sc(t) : t;
			te(o);
			const { v: i, l: s } = r.decode(48, o);
			if (s.length) throw new e("invalid signature: left bytes after parsing");
			const { v: c, l: a } = r.decode(2, i), { v: u, l } = r.decode(2, a);
			if (l.length) throw new e("invalid signature: left bytes after parsing");
			return {
				r: n.decode(c),
				s: n.decode(u)
			};
		},
		hexFromSig(t) {
			const { _tlv: e, _int: n } = lt, i = e.encode(2, n.encode(t.r)) + e.encode(2, n.encode(t.s));
			return e.encode(48, i);
		}
	};
	dt = BigInt(0);
	K = BigInt(1);
	Qr$1 = BigInt(3);
	to$1 = Kr$1(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"));
	_c = Uc({
		a: to$1.create(BigInt("-3")),
		b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),
		Fp: to$1,
		n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
		Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
		Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
		h: BigInt(1),
		lowS: !1
	}, Qt$1);
	ln$1 = "base10";
	G$1 = "base16";
	qt$1 = "base64pad";
	xe = "base64url";
	Kt$1 = "utf8";
	$c = 0;
	eo$1 = 1;
	oe = 12;
	hn$1 = 32;
	Jc = Object.defineProperty;
	Qc = Object.defineProperties;
	ta = Object.getOwnPropertyDescriptors;
	fo$1 = Object.getOwnPropertySymbols;
	ea = Object.prototype.hasOwnProperty;
	na = Object.prototype.propertyIsEnumerable;
	lo$1 = (t, e, n) => e in t ? Jc(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : t[e] = n;
	ra = (t, e) => {
		for (var n in e || (e = {})) ea.call(e, n) && lo$1(t, n, e[n]);
		if (fo$1) for (var n of fo$1(e)) na.call(e, n) && lo$1(t, n, e[n]);
		return t;
	};
	oa = (t, e) => Qc(t, ta(e));
	wo$1 = {
		INVALID_METHOD: {
			message: "Invalid method.",
			code: 1001
		},
		INVALID_EVENT: {
			message: "Invalid event.",
			code: 1002
		},
		INVALID_UPDATE_REQUEST: {
			message: "Invalid update request.",
			code: 1003
		},
		INVALID_EXTEND_REQUEST: {
			message: "Invalid extend request.",
			code: 1004
		},
		INVALID_SESSION_SETTLE_REQUEST: {
			message: "Invalid session settle request.",
			code: 1005
		},
		UNAUTHORIZED_METHOD: {
			message: "Unauthorized method.",
			code: 3001
		},
		UNAUTHORIZED_EVENT: {
			message: "Unauthorized event.",
			code: 3002
		},
		UNAUTHORIZED_UPDATE_REQUEST: {
			message: "Unauthorized update request.",
			code: 3003
		},
		UNAUTHORIZED_EXTEND_REQUEST: {
			message: "Unauthorized extend request.",
			code: 3004
		},
		USER_REJECTED: {
			message: "User rejected.",
			code: 5e3
		},
		USER_REJECTED_CHAINS: {
			message: "User rejected chains.",
			code: 5001
		},
		USER_REJECTED_METHODS: {
			message: "User rejected methods.",
			code: 5002
		},
		USER_REJECTED_EVENTS: {
			message: "User rejected events.",
			code: 5003
		},
		UNSUPPORTED_CHAINS: {
			message: "Unsupported chains.",
			code: 5100
		},
		UNSUPPORTED_METHODS: {
			message: "Unsupported methods.",
			code: 5101
		},
		UNSUPPORTED_EVENTS: {
			message: "Unsupported events.",
			code: 5102
		},
		UNSUPPORTED_ACCOUNTS: {
			message: "Unsupported accounts.",
			code: 5103
		},
		UNSUPPORTED_NAMESPACE_KEY: {
			message: "Unsupported namespace key.",
			code: 5104
		},
		USER_DISCONNECTED: {
			message: "User disconnected.",
			code: 6e3
		},
		SESSION_SETTLEMENT_FAILED: {
			message: "Session settlement failed.",
			code: 7e3
		},
		WC_METHOD_UNSUPPORTED: {
			message: "Unsupported wc_ method.",
			code: 10001
		}
	};
	bo$1 = {
		NOT_INITIALIZED: {
			message: "Not initialized.",
			code: 1
		},
		NO_MATCHING_KEY: {
			message: "No matching key.",
			code: 2
		},
		RESTORE_WILL_OVERRIDE: {
			message: "Restore will override.",
			code: 3
		},
		RESUBSCRIBED: {
			message: "Resubscribed.",
			code: 4
		},
		MISSING_OR_INVALID: {
			message: "Missing or invalid.",
			code: 5
		},
		EXPIRED: {
			message: "Expired.",
			code: 6
		},
		UNKNOWN_TYPE: {
			message: "Unknown type.",
			code: 7
		},
		MISMATCHED_TOPIC: {
			message: "Mismatched topic.",
			code: 8
		},
		NON_CONFORMING_NAMESPACES: {
			message: "Non conforming namespaces.",
			code: 9
		}
	};
	bn = {};
	Ra = class {
		static get(e) {
			return bn[e];
		}
		static set(e, n) {
			bn[e] = n;
		}
		static delete(e) {
			delete bn[e];
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/types/dist/index.es.js
var a, u, c, h, p$1, b, v$1, I, y$1, m, d, f$1, P$1, S$1, M$1, O$1, R$1, T, k$1, i, J, V$1;
var init_index_es$1 = __esmMin((() => {
	init_esm$1();
	a = Object.defineProperty;
	u = (e, s, r) => s in e ? a(e, s, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: r
	}) : e[s] = r;
	c = (e, s, r) => u(e, typeof s != "symbol" ? s + "" : s, r);
	h = class extends IEvents {
		constructor(s) {
			super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
		}
	};
	p$1 = Object.defineProperty;
	b = (e, s, r) => s in e ? p$1(e, s, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: r
	}) : e[s] = r;
	v$1 = (e, s, r) => b(e, typeof s != "symbol" ? s + "" : s, r);
	I = class extends IEvents {
		constructor(s, r) {
			super(), this.core = s, this.logger = r, v$1(this, "records", /* @__PURE__ */ new Map());
		}
	};
	y$1 = class {
		constructor(s, r) {
			this.logger = s, this.core = r;
		}
	};
	m = class extends IEvents {
		constructor(s, r) {
			super(), this.relayer = s, this.logger = r;
		}
	};
	d = class extends IEvents {
		constructor(s) {
			super();
		}
	};
	f$1 = class {
		constructor(s, r, t, q) {
			this.core = s, this.logger = r, this.name = t;
		}
	};
	P$1 = class extends IEvents {
		constructor(s, r) {
			super(), this.relayer = s, this.logger = r;
		}
	};
	S$1 = class extends IEvents {
		constructor(s, r) {
			super(), this.core = s, this.logger = r;
		}
	};
	M$1 = class {
		constructor(s, r, t) {
			this.core = s, this.logger = r, this.store = t;
		}
	};
	O$1 = class {
		constructor(s, r) {
			this.projectId = s, this.logger = r;
		}
	};
	R$1 = class {
		constructor(s, r, t) {
			this.core = s, this.logger = r, this.telemetryEnabled = t;
		}
	};
	T = Object.defineProperty;
	k$1 = (e, s, r) => s in e ? T(e, s, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: r
	}) : e[s] = r;
	i = (e, s, r) => k$1(e, typeof s != "symbol" ? s + "" : s, r);
	J = class {
		constructor(s) {
			this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
		}
	};
	V$1 = class {
		constructor(s) {
			this.client = s;
		}
	};
}));
//#endregion
//#region node_modules/@walletconnect/core/dist/index.es.js
function rr(r, e) {
	if (r.length >= 255) throw new TypeError("Alphabet too long");
	for (var t = /* @__PURE__ */ new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
	for (var s = 0; s < r.length; s++) {
		var n = r.charAt(s), o = n.charCodeAt(0);
		if (t[o] !== 255) throw new TypeError(n + " is ambiguous");
		t[o] = s;
	}
	var a = r.length, c = r.charAt(0), h = Math.log(a) / Math.log(256), l = Math.log(256) / Math.log(a);
	function d(u) {
		if (u instanceof Uint8Array || (ArrayBuffer.isView(u) ? u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength) : Array.isArray(u) && (u = Uint8Array.from(u))), !(u instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
		if (u.length === 0) return "";
		for (var b = 0, x = 0, I = 0, D = u.length; I !== D && u[I] === 0;) I++, b++;
		for (var j = (D - I) * l + 1 >>> 0, T = new Uint8Array(j); I !== D;) {
			for (var q = u[I], J = 0, K = j - 1; (q !== 0 || J < x) && K !== -1; K--, J++) q += 256 * T[K] >>> 0, T[K] = q % a >>> 0, q = q / a >>> 0;
			if (q !== 0) throw new Error("Non-zero carry");
			x = J, I++;
		}
		for (var H = j - x; H !== j && T[H] === 0;) H++;
		for (var me = c.repeat(b); H < j; ++H) me += r.charAt(T[H]);
		return me;
	}
	function g(u) {
		if (typeof u != "string") throw new TypeError("Expected String");
		if (u.length === 0) return /* @__PURE__ */ new Uint8Array();
		var b = 0;
		if (u[b] !== " ") {
			for (var x = 0, I = 0; u[b] === c;) x++, b++;
			for (var D = (u.length - b) * h + 1 >>> 0, j = new Uint8Array(D); u[b];) {
				var T = t[u.charCodeAt(b)];
				if (T === 255) return;
				for (var q = 0, J = D - 1; (T !== 0 || q < I) && J !== -1; J--, q++) T += a * j[J] >>> 0, j[J] = T % 256 >>> 0, T = T / 256 >>> 0;
				if (T !== 0) throw new Error("Non-zero carry");
				I = q, b++;
			}
			if (u[b] !== " ") {
				for (var K = D - I; K !== D && j[K] === 0;) K++;
				for (var H = new Uint8Array(x + (D - K)), me = x; K !== D;) H[me++] = j[K++];
				return H;
			}
		}
	}
	function _(u) {
		var b = g(u);
		if (b) return b;
		throw new Error(`Non-${e} character`);
	}
	return {
		encode: d,
		decodeUnsafe: g,
		decode: _
	};
}
function Yr(r) {
	return r.reduce((e, t) => (e += Wr[t], e), "");
}
function Jr(r) {
	const e = [];
	for (const t of r) {
		const i = Hr[t.codePointAt(0)];
		if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
		e.push(i);
	}
	return new Uint8Array(e);
}
function ai(r, e, t) {
	e = e || [], t = t || 0;
	for (var i = t; r >= sn;) e[t++] = r & 255 | oi, r /= 128;
	for (; r & tn;) e[t++] = r & 255 | oi, r >>>= 7;
	return e[t] = r | 0, ai.bytes = t - i + 1, e;
}
function Me(r, i) {
	var t = 0, i = i || 0, s = 0, n = i, o, a = r.length;
	do {
		if (n >= a) throw Me.bytes = 0, /* @__PURE__ */ new RangeError("Could not decode varint");
		o = r[n++], t += s < 28 ? (o & ci) << s : (o & ci) * Math.pow(2, s), s += 7;
	} while (o >= nn);
	return Me.bytes = n - i, t;
}
function Cn(r = 0) {
	return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(r) : new Uint8Array(r);
}
function mi(r, e, t, i) {
	return {
		name: r,
		prefix: e,
		encoder: {
			name: r,
			prefix: e,
			encode: t
		},
		decoder: { decode: i }
	};
}
function Sn(r, e = "utf8") {
	const t = Pn[e];
	if (!t) throw new Error(`Unsupported encoding "${e}"`);
	return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(r, "utf8") : t.decoder.decode(`${t.prefix}${r}`);
}
function so() {}
function Oi(r) {
	if (!r || typeof r != "object") return !1;
	const e = Object.getPrototypeOf(r);
	return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(r) === "[object Object]" : !1;
}
function Ri(r) {
	return Object.getOwnPropertySymbols(r).filter((e) => Object.prototype.propertyIsEnumerable.call(r, e));
}
function Ai(r) {
	return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
function Oo(r, e) {
	return r === e || Number.isNaN(r) && Number.isNaN(e);
}
function Ro(r, e, t) {
	return pe(r, e, void 0, void 0, void 0, void 0, t);
}
function pe(r, e, t, i, s, n, o) {
	const a = o(r, e, t, i, s, n);
	if (a !== void 0) return a;
	if (typeof r == typeof e) switch (typeof r) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return r === e;
		case "number": return r === e || Object.is(r, e);
		case "function": return r === e;
		case "object": return ye(r, e, n, o);
	}
	return ye(r, e, n, o);
}
function ye(r, e, t, i) {
	if (Object.is(r, e)) return !0;
	let s = Ai(r), n = Ai(e);
	if (s === xi && (s = Je), n === xi && (n = Je), s !== n) return !1;
	switch (s) {
		case no: return r.toString() === e.toString();
		case oo: return Oo(r.valueOf(), e.valueOf());
		case ao:
		case ho:
		case co: return Object.is(r.valueOf(), e.valueOf());
		case ro: return r.source === e.source && r.flags === e.flags;
		case po: return r === e;
	}
	t = t ?? /* @__PURE__ */ new Map();
	const o = t.get(r), a = t.get(e);
	if (o != null && a != null) return o === e;
	t.set(r, e), t.set(e, r);
	try {
		switch (s) {
			case lo:
				if (r.size !== e.size) return !1;
				for (const [c, h] of r.entries()) if (!e.has(c) || !pe(h, e.get(c), c, r, e, t, i)) return !1;
				return !0;
			case uo: {
				if (r.size !== e.size) return !1;
				const c = Array.from(r.values()), h = Array.from(e.values());
				for (let l = 0; l < c.length; l++) {
					const d = c[l], g = h.findIndex((_) => pe(d, _, void 0, r, e, t, i));
					if (g === -1) return !1;
					h.splice(g, 1);
				}
				return !0;
			}
			case go:
			case fo:
			case Do:
			case vo:
			case wo:
			case _o:
			case Eo:
			case Io:
			case To:
			case Co:
			case Po:
			case So:
				if (typeof Buffer < "u" && Buffer.isBuffer(r) !== Buffer.isBuffer(e) || r.length !== e.length) return !1;
				for (let c = 0; c < r.length; c++) if (!pe(r[c], e[c], c, r, e, t, i)) return !1;
				return !0;
			case yo: return r.byteLength !== e.byteLength ? !1 : ye(new Uint8Array(r), new Uint8Array(e), t, i);
			case mo: return r.byteLength !== e.byteLength || r.byteOffset !== e.byteOffset ? !1 : ye(new Uint8Array(r), new Uint8Array(e), t, i);
			case bo: return r.name === e.name && r.message === e.message;
			case Je: {
				if (!(ye(r.constructor, e.constructor, t, i) || Oi(r) && Oi(e))) return !1;
				const h = [...Object.keys(r), ...Ri(r)], l = [...Object.keys(e), ...Ri(e)];
				if (h.length !== l.length) return !1;
				for (let d = 0; d < h.length; d++) {
					const g = h[d], _ = r[g];
					if (!Object.hasOwn(e, g)) return !1;
					const u = e[g];
					if (!pe(_, u, g, r, e, t, i)) return !1;
				}
				return !0;
			}
			default: return !1;
		}
	} finally {
		t.delete(r), t.delete(e);
	}
}
function Ao(r, e) {
	return Ro(r, e, so);
}
var import_cjs, import_cjs$1, he, B, Et, It, Tt, ke, Ct, Pt, Ot, je, At, $t, C, L, _e, Q, le, jt, $, Ut, Mt, se, re, F, Bt, qt, M, Wt, Zs, Ht, ue, Yt, Jt, Xt, Zt, G, Y, er, tr, ir, sr, Qt, ei, ii, or, si, ar, cr, hr, lr, ur, ri, dr, Ee, de, gr, pr, P, yr, br, mr, fr, Dr, vr, wr, _r, Er, Ir, Tr, Cr, Pr, Sr, Or, Rr, Ar, xr, Nr, $r, zr, Lr, kr, jr, Ur, Fr, Mr, Kr, Br, Vr, qr, Gr, ni, Wr, Hr, Xr, Zr, Qr, oi, tn, sn, rn, nn, ci, on, an, cn, hn, ln, un, dn, gn, pn, yn, hi, li, ui, Ke, mn, di, fn, gi, Dn, vn, wn, pi, _n, yi, En, Tn, bi, fi, Be, Pn, On, Rn, W, Di, An, xn, S, vi, Nn, $n, zn, wi, Ln, kn, Ve, jn, Un, k, _i, Fn, Mn, Kn, Ei, Bn, Vn, qe, Ie, Ge, V, qn, Gn, Wn, ne, Hn, Yn, Jn, Xn, Ii, Zn, Qn, We, ge, He, f, Ti, eo, Ci, to, io, Ye, Pi, y, Si, ro, no, oo, ao, xi, co, ho, lo, uo, go, po, yo, Je, bo, mo, fo, Do, vo, wo, _o, Eo, Io, To, Co, Po, So, xo, Ni, No, $o, Xe, $i, z, zi, zo, Lo, p, Li, ko, jo, O, ki, Uo, Fo, A, ji, Mo, Ko, w, Ui, Bo, Vo, Fi, Mi, qo, Ki, Go, Wo, Ze, be, E, Bi, Ho, Vi, Yo, Jo, Qe, qi, v, Te, Xo;
var init_index_es = __esmMin((() => {
	init_index_es$5();
	init_index_es$6();
	init_index_es$7();
	init_index_es$1();
	import_cjs = require_cjs();
	init_esm$2();
	init_index_es$3();
	init_index_es$2();
	init_src();
	init_index_es$8();
	init_esm$3();
	init_index_es$9();
	import_cjs$1 = require_cjs$1();
	he = "core";
	B = `wc@2:${he}:`;
	Et = {
		name: he,
		logger: "error"
	};
	It = { database: ":memory:" };
	Tt = "crypto";
	ke = "client_ed25519_seed";
	Ct = import_cjs.ONE_DAY;
	Pt = "keychain";
	Ot = "messages";
	je = import_cjs.SIX_HOURS;
	At = "publisher";
	$t = "relayer";
	C = {
		message: "relayer_message",
		message_ack: "relayer_message_ack",
		connect: "relayer_connect",
		disconnect: "relayer_disconnect",
		error: "relayer_error",
		connection_stalled: "relayer_connection_stalled",
		transport_closed: "relayer_transport_closed",
		publish: "relayer_publish"
	};
	L = {
		payload: "payload",
		connect: "connect",
		disconnect: "disconnect",
		error: "error"
	};
	_e = "2.21.1";
	Q = {
		link_mode: "link_mode",
		relay: "relay"
	};
	le = {
		inbound: "inbound",
		outbound: "outbound"
	};
	jt = "WALLETCONNECT_CLIENT_ID";
	$ = {
		created: "subscription_created",
		deleted: "subscription_deleted",
		expired: "subscription_expired",
		disabled: "subscription_disabled",
		sync: "subscription_sync",
		resubscribed: "subscription_resubscribed"
	};
	Ut = "subscription";
	import_cjs.FIVE_SECONDS * 1e3;
	Mt = "pairing";
	se = {
		wc_pairingDelete: {
			req: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1e3
			},
			res: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1001
			}
		},
		wc_pairingPing: {
			req: {
				ttl: import_cjs.THIRTY_SECONDS,
				prompt: !1,
				tag: 1002
			},
			res: {
				ttl: import_cjs.THIRTY_SECONDS,
				prompt: !1,
				tag: 1003
			}
		},
		unregistered_method: {
			req: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 0
			},
			res: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 0
			}
		}
	};
	re = {
		create: "pairing_create",
		expire: "pairing_expire",
		delete: "pairing_delete",
		ping: "pairing_ping"
	};
	F = {
		created: "history_created",
		updated: "history_updated",
		deleted: "history_deleted",
		sync: "history_sync"
	};
	Bt = "history";
	qt = "expirer";
	M = {
		created: "expirer_created",
		deleted: "expirer_deleted",
		expired: "expirer_expired",
		sync: "expirer_sync"
	};
	Wt = "verify-api";
	Zs = "https://verify.walletconnect.com";
	Ht = "https://verify.walletconnect.org";
	ue = Ht;
	Yt = `${ue}/v3`;
	Jt = [Zs, Ht];
	Xt = "echo";
	Zt = "https://echo.walletconnect.com";
	G = {
		pairing_started: "pairing_started",
		pairing_uri_validation_success: "pairing_uri_validation_success",
		pairing_uri_not_expired: "pairing_uri_not_expired",
		store_new_pairing: "store_new_pairing",
		subscribing_pairing_topic: "subscribing_pairing_topic",
		subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
		existing_pairing: "existing_pairing",
		pairing_not_expired: "pairing_not_expired",
		emit_inactive_pairing: "emit_inactive_pairing",
		emit_session_proposal: "emit_session_proposal",
		subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
	};
	Y = {
		no_wss_connection: "no_wss_connection",
		no_internet_connection: "no_internet_connection",
		malformed_pairing_uri: "malformed_pairing_uri",
		active_pairing_already_exists: "active_pairing_already_exists",
		subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
		pairing_expired: "pairing_expired",
		proposal_expired: "proposal_expired",
		proposal_listener_not_found: "proposal_listener_not_found"
	};
	er = {
		session_approve_started: "session_approve_started",
		proposal_not_expired: "proposal_not_expired",
		session_namespaces_validation_success: "session_namespaces_validation_success",
		create_session_topic: "create_session_topic",
		subscribing_session_topic: "subscribing_session_topic",
		subscribe_session_topic_success: "subscribe_session_topic_success",
		publishing_session_approve: "publishing_session_approve",
		session_approve_publish_success: "session_approve_publish_success",
		store_session: "store_session",
		publishing_session_settle: "publishing_session_settle",
		session_settle_publish_success: "session_settle_publish_success"
	};
	tr = {
		no_internet_connection: "no_internet_connection",
		no_wss_connection: "no_wss_connection",
		proposal_expired: "proposal_expired",
		subscribe_session_topic_failure: "subscribe_session_topic_failure",
		session_approve_publish_failure: "session_approve_publish_failure",
		session_settle_publish_failure: "session_settle_publish_failure",
		session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
		proposal_not_found: "proposal_not_found"
	};
	ir = {
		authenticated_session_approve_started: "authenticated_session_approve_started",
		authenticated_session_not_expired: "authenticated_session_not_expired",
		chains_caip2_compliant: "chains_caip2_compliant",
		chains_evm_compliant: "chains_evm_compliant",
		create_authenticated_session_topic: "create_authenticated_session_topic",
		cacaos_verified: "cacaos_verified",
		store_authenticated_session: "store_authenticated_session",
		subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
		subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
		publishing_authenticated_session_approve: "publishing_authenticated_session_approve",
		authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success"
	};
	sr = {
		no_internet_connection: "no_internet_connection",
		no_wss_connection: "no_wss_connection",
		missing_session_authenticate_request: "missing_session_authenticate_request",
		session_authenticate_request_expired: "session_authenticate_request_expired",
		chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
		chains_evm_compliant_failure: "chains_evm_compliant_failure",
		invalid_cacao: "invalid_cacao",
		subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
		authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
		authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
	};
	Qt = .1;
	ei = "event-client";
	ii = "https://pulse.walletconnect.org/batch";
	or = rr;
	si = (r) => {
		if (r instanceof Uint8Array && r.constructor.name === "Uint8Array") return r;
		if (r instanceof ArrayBuffer) return new Uint8Array(r);
		if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
		throw new Error("Unknown type, must be binary type");
	};
	ar = (r) => new TextEncoder().encode(r);
	cr = (r) => new TextDecoder().decode(r);
	hr = class {
		constructor(e, t, i) {
			this.name = e, this.prefix = t, this.baseEncode = i;
		}
		encode(e) {
			if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
			throw Error("Unknown type, must be binary type");
		}
	};
	lr = class {
		constructor(e, t, i) {
			if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
			this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
		}
		decode(e) {
			if (typeof e == "string") {
				if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
				return this.baseDecode(e.slice(this.prefix.length));
			} else throw Error("Can only multibase decode strings");
		}
		or(e) {
			return ri(this, e);
		}
	};
	ur = class {
		constructor(e) {
			this.decoders = e;
		}
		or(e) {
			return ri(this, e);
		}
		decode(e) {
			const t = e[0], i = this.decoders[t];
			if (i) return i.decode(e);
			throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
		}
	};
	ri = (r, e) => new ur({
		...r.decoders || { [r.prefix]: r },
		...e.decoders || { [e.prefix]: e }
	});
	dr = class {
		constructor(e, t, i, s) {
			this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new hr(e, t, i), this.decoder = new lr(e, t, s);
		}
		encode(e) {
			return this.encoder.encode(e);
		}
		decode(e) {
			return this.decoder.decode(e);
		}
	};
	Ee = ({ name: r, prefix: e, encode: t, decode: i }) => new dr(r, e, t, i);
	de = ({ prefix: r, name: e, alphabet: t }) => {
		const { encode: i, decode: s } = or(t, e);
		return Ee({
			prefix: r,
			name: e,
			encode: i,
			decode: (n) => si(s(n))
		});
	};
	gr = (r, e, t, i) => {
		const s = {};
		for (let l = 0; l < e.length; ++l) s[e[l]] = l;
		let n = r.length;
		for (; r[n - 1] === "=";) --n;
		const o = new Uint8Array(n * t / 8 | 0);
		let a = 0, c = 0, h = 0;
		for (let l = 0; l < n; ++l) {
			const d = s[r[l]];
			if (d === void 0) throw new SyntaxError(`Non-${i} character`);
			c = c << t | d, a += t, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
		}
		if (a >= t || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
		return o;
	};
	pr = (r, e, t) => {
		const i = e[e.length - 1] === "=", s = (1 << t) - 1;
		let n = "", o = 0, a = 0;
		for (let c = 0; c < r.length; ++c) for (a = a << 8 | r[c], o += 8; o > t;) o -= t, n += e[s & a >> o];
		if (o && (n += e[s & a << t - o]), i) for (; n.length * t & 7;) n += "=";
		return n;
	};
	P = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => Ee({
		prefix: e,
		name: r,
		encode(s) {
			return pr(s, i, t);
		},
		decode(s) {
			return gr(s, i, t, r);
		}
	});
	yr = Ee({
		prefix: "\0",
		name: "identity",
		encode: (r) => cr(r),
		decode: (r) => ar(r)
	});
	br = Object.freeze({
		__proto__: null,
		identity: yr
	});
	mr = P({
		prefix: "0",
		name: "base2",
		alphabet: "01",
		bitsPerChar: 1
	});
	fr = Object.freeze({
		__proto__: null,
		base2: mr
	});
	Dr = P({
		prefix: "7",
		name: "base8",
		alphabet: "01234567",
		bitsPerChar: 3
	});
	vr = Object.freeze({
		__proto__: null,
		base8: Dr
	});
	wr = de({
		prefix: "9",
		name: "base10",
		alphabet: "0123456789"
	});
	_r = Object.freeze({
		__proto__: null,
		base10: wr
	});
	Er = P({
		prefix: "f",
		name: "base16",
		alphabet: "0123456789abcdef",
		bitsPerChar: 4
	});
	Ir = P({
		prefix: "F",
		name: "base16upper",
		alphabet: "0123456789ABCDEF",
		bitsPerChar: 4
	});
	Tr = Object.freeze({
		__proto__: null,
		base16: Er,
		base16upper: Ir
	});
	Cr = P({
		prefix: "b",
		name: "base32",
		alphabet: "abcdefghijklmnopqrstuvwxyz234567",
		bitsPerChar: 5
	});
	Pr = P({
		prefix: "B",
		name: "base32upper",
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
		bitsPerChar: 5
	});
	Sr = P({
		prefix: "c",
		name: "base32pad",
		alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
		bitsPerChar: 5
	});
	Or = P({
		prefix: "C",
		name: "base32padupper",
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
		bitsPerChar: 5
	});
	Rr = P({
		prefix: "v",
		name: "base32hex",
		alphabet: "0123456789abcdefghijklmnopqrstuv",
		bitsPerChar: 5
	});
	Ar = P({
		prefix: "V",
		name: "base32hexupper",
		alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
		bitsPerChar: 5
	});
	xr = P({
		prefix: "t",
		name: "base32hexpad",
		alphabet: "0123456789abcdefghijklmnopqrstuv=",
		bitsPerChar: 5
	});
	Nr = P({
		prefix: "T",
		name: "base32hexpadupper",
		alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
		bitsPerChar: 5
	});
	$r = P({
		prefix: "h",
		name: "base32z",
		alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
		bitsPerChar: 5
	});
	zr = Object.freeze({
		__proto__: null,
		base32: Cr,
		base32upper: Pr,
		base32pad: Sr,
		base32padupper: Or,
		base32hex: Rr,
		base32hexupper: Ar,
		base32hexpad: xr,
		base32hexpadupper: Nr,
		base32z: $r
	});
	Lr = de({
		prefix: "k",
		name: "base36",
		alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
	});
	kr = de({
		prefix: "K",
		name: "base36upper",
		alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	});
	jr = Object.freeze({
		__proto__: null,
		base36: Lr,
		base36upper: kr
	});
	Ur = de({
		name: "base58btc",
		prefix: "z",
		alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
	});
	Fr = de({
		name: "base58flickr",
		prefix: "Z",
		alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
	});
	Mr = Object.freeze({
		__proto__: null,
		base58btc: Ur,
		base58flickr: Fr
	});
	Kr = P({
		prefix: "m",
		name: "base64",
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		bitsPerChar: 6
	});
	Br = P({
		prefix: "M",
		name: "base64pad",
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		bitsPerChar: 6
	});
	Vr = P({
		prefix: "u",
		name: "base64url",
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
		bitsPerChar: 6
	});
	qr = P({
		prefix: "U",
		name: "base64urlpad",
		alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
		bitsPerChar: 6
	});
	Gr = Object.freeze({
		__proto__: null,
		base64: Kr,
		base64pad: Br,
		base64url: Vr,
		base64urlpad: qr
	});
	ni = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
	Wr = ni.reduce((r, e, t) => (r[t] = e, r), []);
	Hr = ni.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
	Xr = Ee({
		prefix: "🚀",
		name: "base256emoji",
		encode: Yr,
		decode: Jr
	});
	Zr = Object.freeze({
		__proto__: null,
		base256emoji: Xr
	});
	Qr = ai;
	oi = 128;
	tn = -128;
	sn = Math.pow(2, 31);
	rn = Me;
	nn = 128;
	ci = 127;
	on = Math.pow(2, 7);
	an = Math.pow(2, 14);
	cn = Math.pow(2, 21);
	hn = Math.pow(2, 28);
	ln = Math.pow(2, 35);
	un = Math.pow(2, 42);
	dn = Math.pow(2, 49);
	gn = Math.pow(2, 56);
	pn = Math.pow(2, 63);
	yn = function(r) {
		return r < on ? 1 : r < an ? 2 : r < cn ? 3 : r < hn ? 4 : r < ln ? 5 : r < un ? 6 : r < dn ? 7 : r < gn ? 8 : r < pn ? 9 : 10;
	};
	hi = {
		encode: Qr,
		decode: rn,
		encodingLength: yn
	};
	li = (r, e, t = 0) => (hi.encode(r, e, t), e);
	ui = (r) => hi.encodingLength(r);
	Ke = (r, e) => {
		const t = e.byteLength, i = ui(r), s = i + ui(t), n = new Uint8Array(s + t);
		return li(r, n, 0), li(t, n, i), n.set(e, s), new mn(r, t, e, n);
	};
	mn = class {
		constructor(e, t, i, s) {
			this.code = e, this.size = t, this.digest = i, this.bytes = s;
		}
	};
	di = ({ name: r, code: e, encode: t }) => new fn(r, e, t);
	fn = class {
		constructor(e, t, i) {
			this.name = e, this.code = t, this.encode = i;
		}
		digest(e) {
			if (e instanceof Uint8Array) {
				const t = this.encode(e);
				return t instanceof Uint8Array ? Ke(this.code, t) : t.then((i) => Ke(this.code, i));
			} else throw Error("Unknown type, must be binary type");
		}
	};
	gi = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e));
	Dn = di({
		name: "sha2-256",
		code: 18,
		encode: gi("SHA-256")
	});
	vn = di({
		name: "sha2-512",
		code: 19,
		encode: gi("SHA-512")
	});
	wn = Object.freeze({
		__proto__: null,
		sha256: Dn,
		sha512: vn
	});
	pi = 0;
	_n = "identity";
	yi = si;
	En = (r) => Ke(pi, yi(r));
	Tn = Object.freeze({
		__proto__: null,
		identity: {
			code: pi,
			name: _n,
			encode: yi,
			digest: En
		}
	});
	new TextEncoder(), new TextDecoder();
	bi = {
		...br,
		...fr,
		...vr,
		..._r,
		...Tr,
		...zr,
		...jr,
		...Mr,
		...Gr,
		...Zr
	};
	({
		...wn,
		...Tn
	});
	fi = mi("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1)));
	Be = mi("ascii", "a", (r) => {
		let e = "a";
		for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
		return e;
	}, (r) => {
		r = r.substring(1);
		const e = Cn(r.length);
		for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
		return e;
	});
	Pn = {
		utf8: fi,
		"utf-8": fi,
		hex: bi.base16,
		latin1: Be,
		ascii: Be,
		binary: Be,
		...bi
	};
	On = Object.defineProperty;
	Rn = (r, e, t) => e in r ? On(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	W = (r, e, t) => Rn(r, typeof e != "symbol" ? e + "" : e, t);
	Di = class {
		constructor(e, t) {
			this.core = e, this.logger = t, W(this, "keychain", /* @__PURE__ */ new Map()), W(this, "name", Pt), W(this, "version", "0.3"), W(this, "initialized", !1), W(this, "storagePrefix", B), W(this, "init", async () => {
				if (!this.initialized) {
					const i = await this.getKeyChain();
					typeof i < "u" && (this.keychain = i), this.initialized = !0;
				}
			}), W(this, "has", (i) => (this.isInitialized(), this.keychain.has(i))), W(this, "set", async (i, s) => {
				this.isInitialized(), this.keychain.set(i, s), await this.persist();
			}), W(this, "get", (i) => {
				this.isInitialized();
				const s = this.keychain.get(i);
				if (typeof s > "u") {
					const { message: n } = ht("NO_MATCHING_KEY", `${this.name}: ${i}`);
					throw new Error(n);
				}
				return s;
			}), W(this, "del", async (i) => {
				this.isInitialized(), this.keychain.delete(i), await this.persist();
			}), this.core = e, this.logger = E$1(t, this.name);
		}
		get context() {
			return y$2(this.logger);
		}
		get storageKey() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
		}
		async setKeyChain(e) {
			await this.core.storage.setItem(this.storageKey, fi$1(e));
		}
		async getKeyChain() {
			const e = await this.core.storage.getItem(this.storageKey);
			return typeof e < "u" ? li$1(e) : void 0;
		}
		async persist() {
			await this.setKeyChain(this.keychain);
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
	};
	An = Object.defineProperty;
	xn = (r, e, t) => e in r ? An(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	S = (r, e, t) => xn(r, typeof e != "symbol" ? e + "" : e, t);
	vi = class {
		constructor(e, t, i) {
			this.core = e, this.logger = t, S(this, "name", Tt), S(this, "keychain"), S(this, "randomSessionIdentifier", jc()), S(this, "initialized", !1), S(this, "init", async () => {
				this.initialized || (await this.keychain.init(), this.initialized = !0);
			}), S(this, "hasKeys", (s) => (this.isInitialized(), this.keychain.has(s))), S(this, "getClientId", async () => {
				this.isInitialized();
				const s = await this.getClientSeed(), n = Po$2(s);
				return Qe$2(n.publicKey);
			}), S(this, "generateKeyPair", () => {
				this.isInitialized();
				const s = Lc();
				return this.setPrivateKey(s.publicKey, s.privateKey);
			}), S(this, "signJWT", async (s) => {
				this.isInitialized();
				const n = await this.getClientSeed(), o = Po$2(n), a = this.randomSessionIdentifier;
				return await Qo$1(a, s, Ct, o);
			}), S(this, "generateSharedKey", (s, n, o) => {
				this.isInitialized();
				const c = Cc(this.getPrivateKey(s), n);
				return this.setSymKey(c, o);
			}), S(this, "setSymKey", async (s, n) => {
				this.isInitialized();
				const o = n || Pc(s);
				return await this.keychain.set(o, s), o;
			}), S(this, "deleteKeyPair", async (s) => {
				this.isInitialized(), await this.keychain.del(s);
			}), S(this, "deleteSymKey", async (s) => {
				this.isInitialized(), await this.keychain.del(s);
			}), S(this, "encode", async (s, n, o) => {
				this.isInitialized();
				const a = oo$1(o), c = safeJsonStringify(n);
				if (Fc(a)) return Dc(c, o?.encoding);
				if (Kc(a)) {
					const g = a.senderPublicKey, _ = a.receiverPublicKey;
					s = await this.generateSharedKey(g, _);
				}
				const h = this.getSymKey(s), { type: l, senderPublicKey: d } = a;
				return Vc({
					type: l,
					symKey: h,
					message: c,
					senderPublicKey: d,
					encoding: o?.encoding
				});
			}), S(this, "decode", async (s, n, o) => {
				this.isInitialized();
				const a = qc(n, o);
				if (Fc(a)) {
					const c = Hc(n, o?.encoding);
					return safeJsonParse(c);
				}
				if (Kc(a)) {
					const c = a.receiverPublicKey, h = a.senderPublicKey;
					s = await this.generateSharedKey(c, h);
				}
				try {
					const h = Mc({
						symKey: this.getSymKey(s),
						encoded: n,
						encoding: o?.encoding
					});
					return safeJsonParse(h);
				} catch (c) {
					this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
				}
			}), S(this, "getPayloadType", (s, n = qt$1) => {
				return Bt$1(Se$1({
					encoded: s,
					encoding: n
				}).type);
			}), S(this, "getPayloadSenderPublicKey", (s, n = qt$1) => {
				const o = Se$1({
					encoded: s,
					encoding: n
				});
				return o.senderPublicKey ? toString(o.senderPublicKey, G$1) : void 0;
			}), this.core = e, this.logger = E$1(t, this.name), this.keychain = i || new Di(this.core, this.logger);
		}
		get context() {
			return y$2(this.logger);
		}
		async setPrivateKey(e, t) {
			return await this.keychain.set(e, t), e;
		}
		getPrivateKey(e) {
			return this.keychain.get(e);
		}
		async getClientSeed() {
			let e = "";
			try {
				e = this.keychain.get(ke);
			} catch {
				e = jc(), await this.keychain.set(ke, e);
			}
			return Sn(e, "base16");
		}
		getSymKey(e) {
			return this.keychain.get(e);
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
	};
	Nn = Object.defineProperty;
	$n = Object.defineProperties;
	zn = Object.getOwnPropertyDescriptors;
	wi = Object.getOwnPropertySymbols;
	Ln = Object.prototype.hasOwnProperty;
	kn = Object.prototype.propertyIsEnumerable;
	Ve = (r, e, t) => e in r ? Nn(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	jn = (r, e) => {
		for (var t in e || (e = {})) Ln.call(e, t) && Ve(r, t, e[t]);
		if (wi) for (var t of wi(e)) kn.call(e, t) && Ve(r, t, e[t]);
		return r;
	};
	Un = (r, e) => $n(r, zn(e));
	k = (r, e, t) => Ve(r, typeof e != "symbol" ? e + "" : e, t);
	_i = class extends y$1 {
		constructor(e, t) {
			super(e, t), this.logger = e, this.core = t, k(this, "messages", /* @__PURE__ */ new Map()), k(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), k(this, "name", Ot), k(this, "version", "0.3"), k(this, "initialized", !1), k(this, "storagePrefix", B), k(this, "init", async () => {
				if (!this.initialized) {
					this.logger.trace("Initialized");
					try {
						const i = await this.getRelayerMessages();
						typeof i < "u" && (this.messages = i);
						const s = await this.getRelayerMessagesWithoutClientAck();
						typeof s < "u" && (this.messagesWithoutClientAck = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
							type: "method",
							method: "restore",
							size: this.messages.size
						});
					} catch (i) {
						this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
					} finally {
						this.initialized = !0;
					}
				}
			}), k(this, "set", async (i, s, n) => {
				this.isInitialized();
				const o = kc(s);
				let a = this.messages.get(i);
				if (typeof a > "u" && (a = {}), typeof a[o] < "u") return o;
				if (a[o] = s, this.messages.set(i, a), n === le.inbound) {
					const c = this.messagesWithoutClientAck.get(i) || {};
					this.messagesWithoutClientAck.set(i, Un(jn({}, c), { [o]: s }));
				}
				return await this.persist(), o;
			}), k(this, "get", (i) => {
				this.isInitialized();
				let s = this.messages.get(i);
				return typeof s > "u" && (s = {}), s;
			}), k(this, "getWithoutAck", (i) => {
				this.isInitialized();
				const s = {};
				for (const n of i) {
					const o = this.messagesWithoutClientAck.get(n) || {};
					s[n] = Object.values(o);
				}
				return s;
			}), k(this, "has", (i, s) => {
				this.isInitialized();
				return typeof this.get(i)[kc(s)] < "u";
			}), k(this, "ack", async (i, s) => {
				this.isInitialized();
				const n = this.messagesWithoutClientAck.get(i);
				if (typeof n > "u") return;
				const o = kc(s);
				delete n[o], Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(i) : this.messagesWithoutClientAck.set(i, n), await this.persist();
			}), k(this, "del", async (i) => {
				this.isInitialized(), this.messages.delete(i), this.messagesWithoutClientAck.delete(i), await this.persist();
			}), this.logger = E$1(e, this.name), this.core = t;
		}
		get context() {
			return y$2(this.logger);
		}
		get storageKey() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
		}
		get storageKeyWithoutClientAck() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
		}
		async setRelayerMessages(e) {
			await this.core.storage.setItem(this.storageKey, fi$1(e));
		}
		async setRelayerMessagesWithoutClientAck(e) {
			await this.core.storage.setItem(this.storageKeyWithoutClientAck, fi$1(e));
		}
		async getRelayerMessages() {
			const e = await this.core.storage.getItem(this.storageKey);
			return typeof e < "u" ? li$1(e) : void 0;
		}
		async getRelayerMessagesWithoutClientAck() {
			const e = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
			return typeof e < "u" ? li$1(e) : void 0;
		}
		async persist() {
			await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
	};
	Fn = Object.defineProperty;
	Mn = Object.defineProperties;
	Kn = Object.getOwnPropertyDescriptors;
	Ei = Object.getOwnPropertySymbols;
	Bn = Object.prototype.hasOwnProperty;
	Vn = Object.prototype.propertyIsEnumerable;
	qe = (r, e, t) => e in r ? Fn(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	Ie = (r, e) => {
		for (var t in e || (e = {})) Bn.call(e, t) && qe(r, t, e[t]);
		if (Ei) for (var t of Ei(e)) Vn.call(e, t) && qe(r, t, e[t]);
		return r;
	};
	Ge = (r, e) => Mn(r, Kn(e));
	V = (r, e, t) => qe(r, typeof e != "symbol" ? e + "" : e, t);
	qn = class extends m {
		constructor(e, t) {
			super(e, t), this.relayer = e, this.logger = t, V(this, "events", new EventEmitter()), V(this, "name", At), V(this, "queue", /* @__PURE__ */ new Map()), V(this, "publishTimeout", (0, import_cjs.toMiliseconds)(import_cjs.ONE_MINUTE)), V(this, "initialPublishTimeout", (0, import_cjs.toMiliseconds)(import_cjs.ONE_SECOND * 15)), V(this, "needsTransportRestart", !1), V(this, "publish", async (i, s, n) => {
				var o;
				this.logger.debug("Publishing Payload"), this.logger.trace({
					type: "method",
					method: "publish",
					params: {
						topic: i,
						message: s,
						opts: n
					}
				});
				const a = n?.ttl || je, c = Zc(n), h = n?.prompt || !1, l = n?.tag || 0, d = n?.id || getBigIntRpcId().toString(), g = {
					topic: i,
					message: s,
					opts: {
						ttl: a,
						relay: c,
						prompt: h,
						tag: l,
						id: d,
						attestation: n?.attestation,
						tvf: n?.tvf
					}
				}, _ = `Failed to publish payload, please try again. id:${d} tag:${l}`;
				try {
					const u = new Promise(async (b) => {
						const x = ({ id: D }) => {
							g.opts.id === D && (this.removeRequestFromQueue(D), this.relayer.events.removeListener(C.publish, x), b(g));
						};
						this.relayer.events.on(C.publish, x);
						const I = yi$1(new Promise((D, j) => {
							this.rpcPublish({
								topic: i,
								message: s,
								ttl: a,
								prompt: h,
								tag: l,
								id: d,
								attestation: n?.attestation,
								tvf: n?.tvf
							}).then(D).catch((T) => {
								this.logger.warn(T, T?.message), j(T);
							});
						}), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d} tag:${l}`);
						try {
							await I, this.events.removeListener(C.publish, x);
						} catch (D) {
							this.queue.set(d, Ge(Ie({}, g), { attempt: 1 })), this.logger.warn(D, D?.message);
						}
					});
					this.logger.trace({
						type: "method",
						method: "publish",
						params: {
							id: d,
							topic: i,
							message: s,
							opts: n
						}
					}), await yi$1(u, this.publishTimeout, _);
				} catch (u) {
					if (this.logger.debug("Failed to Publish Payload"), this.logger.error(u), (o = n?.internal) != null && o.throwOnFailedPublish) throw u;
				} finally {
					this.queue.delete(d);
				}
			}), V(this, "on", (i, s) => {
				this.events.on(i, s);
			}), V(this, "once", (i, s) => {
				this.events.once(i, s);
			}), V(this, "off", (i, s) => {
				this.events.off(i, s);
			}), V(this, "removeListener", (i, s) => {
				this.events.removeListener(i, s);
			}), this.relayer = e, this.logger = E$1(t, this.name), this.registerEventListeners();
		}
		get context() {
			return y$2(this.logger);
		}
		async rpcPublish(e) {
			var t, i, s, n;
			const { topic: o, message: a, ttl: c = je, prompt: h, tag: l, id: d, attestation: g, tvf: _ } = e, u = {
				method: Yc(Zc().protocol).publish,
				params: Ie({
					topic: o,
					message: a,
					ttl: c,
					prompt: h,
					tag: l,
					attestation: g
				}, _),
				id: d
			};
			Et$1((t = u.params) == null ? void 0 : t.prompt) && ((i = u.params) == null || delete i.prompt), Et$1((s = u.params) == null ? void 0 : s.tag) && ((n = u.params) == null || delete n.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
				type: "message",
				direction: "outgoing",
				request: u
			});
			const b = await this.relayer.request(u);
			return this.relayer.events.emit(C.publish, e), this.logger.debug("Successfully Published Payload"), b;
		}
		removeRequestFromQueue(e) {
			this.queue.delete(e);
		}
		checkQueue() {
			this.queue.forEach(async (e, t) => {
				const i = e.attempt + 1;
				this.queue.set(t, Ge(Ie({}, e), { attempt: i }));
				const { topic: s, message: n, opts: o, attestation: a } = e;
				this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`), await this.rpcPublish(Ge(Ie({}, e), {
					topic: s,
					message: n,
					ttl: o.ttl,
					prompt: o.prompt,
					tag: o.tag,
					id: o.id,
					attestation: a,
					tvf: o.tvf
				})), this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
			});
		}
		registerEventListeners() {
			this.relayer.core.heartbeat.on(r.pulse, () => {
				if (this.needsTransportRestart) {
					this.needsTransportRestart = !1, this.relayer.events.emit(C.connection_stalled);
					return;
				}
				this.checkQueue();
			}), this.relayer.on(C.message_ack, (e) => {
				this.removeRequestFromQueue(e.id.toString());
			});
		}
	};
	Gn = Object.defineProperty;
	Wn = (r, e, t) => e in r ? Gn(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	ne = (r, e, t) => Wn(r, typeof e != "symbol" ? e + "" : e, t);
	Hn = class {
		constructor() {
			ne(this, "map", /* @__PURE__ */ new Map()), ne(this, "set", (e, t) => {
				const i = this.get(e);
				this.exists(e, t) || this.map.set(e, [...i, t]);
			}), ne(this, "get", (e) => this.map.get(e) || []), ne(this, "exists", (e, t) => this.get(e).includes(t)), ne(this, "delete", (e, t) => {
				if (typeof t > "u") {
					this.map.delete(e);
					return;
				}
				if (!this.map.has(e)) return;
				const i = this.get(e);
				if (!this.exists(e, t)) return;
				const s = i.filter((n) => n !== t);
				if (!s.length) {
					this.map.delete(e);
					return;
				}
				this.map.set(e, s);
			}), ne(this, "clear", () => {
				this.map.clear();
			});
		}
		get topics() {
			return Array.from(this.map.keys());
		}
	};
	Yn = Object.defineProperty;
	Jn = Object.defineProperties;
	Xn = Object.getOwnPropertyDescriptors;
	Ii = Object.getOwnPropertySymbols;
	Zn = Object.prototype.hasOwnProperty;
	Qn = Object.prototype.propertyIsEnumerable;
	We = (r, e, t) => e in r ? Yn(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	ge = (r, e) => {
		for (var t in e || (e = {})) Zn.call(e, t) && We(r, t, e[t]);
		if (Ii) for (var t of Ii(e)) Qn.call(e, t) && We(r, t, e[t]);
		return r;
	};
	He = (r, e) => Jn(r, Xn(e));
	f = (r, e, t) => We(r, typeof e != "symbol" ? e + "" : e, t);
	Ti = class extends P$1 {
		constructor(e, t) {
			super(e, t), this.relayer = e, this.logger = t, f(this, "subscriptions", /* @__PURE__ */ new Map()), f(this, "topicMap", new Hn()), f(this, "events", new EventEmitter()), f(this, "name", Ut), f(this, "version", "0.3"), f(this, "pending", /* @__PURE__ */ new Map()), f(this, "cached", []), f(this, "initialized", !1), f(this, "storagePrefix", B), f(this, "subscribeTimeout", (0, import_cjs.toMiliseconds)(import_cjs.ONE_MINUTE)), f(this, "initialSubscribeTimeout", (0, import_cjs.toMiliseconds)(import_cjs.ONE_SECOND * 15)), f(this, "clientId"), f(this, "batchSubscribeTopicsLimit", 500), f(this, "init", async () => {
				this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = !0;
			}), f(this, "subscribe", async (i, s) => {
				this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
					type: "method",
					method: "subscribe",
					params: {
						topic: i,
						opts: s
					}
				});
				try {
					const n = Zc(s), o = {
						topic: i,
						relay: n,
						transportType: s?.transportType
					};
					this.pending.set(i, o);
					const a = await this.rpcSubscribe(i, n, s);
					return typeof a == "string" && (this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
						type: "method",
						method: "subscribe",
						params: {
							topic: i,
							opts: s
						}
					})), a;
				} catch (n) {
					throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n;
				}
			}), f(this, "unsubscribe", async (i, s) => {
				this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
			}), f(this, "isSubscribed", (i) => new Promise((s) => {
				s(this.topicMap.topics.includes(i));
			})), f(this, "isKnownTopic", (i) => new Promise((s) => {
				s(this.topicMap.topics.includes(i) || this.pending.has(i) || this.cached.some((n) => n.topic === i));
			})), f(this, "on", (i, s) => {
				this.events.on(i, s);
			}), f(this, "once", (i, s) => {
				this.events.once(i, s);
			}), f(this, "off", (i, s) => {
				this.events.off(i, s);
			}), f(this, "removeListener", (i, s) => {
				this.events.removeListener(i, s);
			}), f(this, "start", async () => {
				await this.onConnect();
			}), f(this, "stop", async () => {
				await this.onDisconnect();
			}), f(this, "restart", async () => {
				await this.restore(), await this.onRestart();
			}), f(this, "checkPending", async () => {
				if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
				const i = [];
				this.pending.forEach((s) => {
					i.push(s);
				}), await this.batchSubscribe(i);
			}), f(this, "registerEventListeners", () => {
				this.relayer.core.heartbeat.on(r.pulse, async () => {
					await this.checkPending();
				}), this.events.on($.created, async (i) => {
					const s = $.created;
					this.logger.info(`Emitting ${s}`), this.logger.debug({
						type: "event",
						event: s,
						data: i
					}), await this.persist();
				}), this.events.on($.deleted, async (i) => {
					const s = $.deleted;
					this.logger.info(`Emitting ${s}`), this.logger.debug({
						type: "event",
						event: s,
						data: i
					}), await this.persist();
				});
			}), this.relayer = e, this.logger = E$1(t, this.name), this.clientId = "";
		}
		get context() {
			return y$2(this.logger);
		}
		get storageKey() {
			return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
		}
		get length() {
			return this.subscriptions.size;
		}
		get ids() {
			return Array.from(this.subscriptions.keys());
		}
		get values() {
			return Array.from(this.subscriptions.values());
		}
		get topics() {
			return this.topicMap.topics;
		}
		get hasAnyTopics() {
			return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
		}
		hasSubscription(e, t) {
			let i = !1;
			try {
				i = this.getSubscription(e).topic === t;
			} catch {}
			return i;
		}
		reset() {
			this.cached = [], this.initialized = !0;
		}
		onDisable() {
			this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
		}
		async unsubscribeByTopic(e, t) {
			const i = this.topicMap.get(e);
			await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
		}
		async unsubscribeById(e, t, i) {
			this.logger.debug("Unsubscribing Topic"), this.logger.trace({
				type: "method",
				method: "unsubscribe",
				params: {
					topic: e,
					id: t,
					opts: i
				}
			});
			try {
				const s = Zc(i);
				await this.restartToComplete({
					topic: e,
					id: t,
					relay: s
				}), await this.rpcUnsubscribe(e, t, s);
				const n = Nt$1("USER_DISCONNECTED", `${this.name}, ${e}`);
				await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
					type: "method",
					method: "unsubscribe",
					params: {
						topic: e,
						id: t,
						opts: i
					}
				});
			} catch (s) {
				throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
			}
		}
		async rpcSubscribe(e, t, i) {
			var s;
			(!i || i?.transportType === Q.relay) && await this.restartToComplete({
				topic: e,
				id: e,
				relay: t
			});
			const n = {
				method: Yc(t.protocol).subscribe,
				params: { topic: e }
			};
			this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
				type: "payload",
				direction: "outgoing",
				request: n
			});
			const o = (s = i?.internal) == null ? void 0 : s.throwOnFailedPublish;
			try {
				const a = await this.getSubscriptionId(e);
				if (i?.transportType === Q.link_mode) return setTimeout(() => {
					(this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch((l) => this.logger.warn(l));
				}, (0, import_cjs.toMiliseconds)(import_cjs.ONE_SECOND)), a;
				const h = await yi$1(new Promise(async (l) => {
					const d = (g) => {
						g.topic === e && (this.events.removeListener($.created, d), l(g.id));
					};
					this.events.on($.created, d);
					try {
						const g = await yi$1(new Promise((_, u) => {
							this.relayer.request(n).catch((b) => {
								this.logger.warn(b, b?.message), u(b);
							}).then(_);
						}), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
						this.events.removeListener($.created, d), l(g);
					} catch {}
				}), this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
				if (!h && o) throw new Error(`Subscribing to ${e} failed, please try again`);
				return h ? a : null;
			} catch (a) {
				if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C.connection_stalled), o) throw a;
			}
			return null;
		}
		async rpcBatchSubscribe(e) {
			if (!e.length) return;
			const t = e[0].relay, i = {
				method: Yc(t.protocol).batchSubscribe,
				params: { topics: e.map((s) => s.topic) }
			};
			this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
				type: "payload",
				direction: "outgoing",
				request: i
			});
			try {
				await await yi$1(new Promise((s) => {
					this.relayer.request(i).catch((n) => this.logger.warn(n)).then(s);
				}), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
			} catch {
				this.relayer.events.emit(C.connection_stalled);
			}
		}
		async rpcBatchFetchMessages(e) {
			if (!e.length) return;
			const t = e[0].relay, i = {
				method: Yc(t.protocol).batchFetchMessages,
				params: { topics: e.map((n) => n.topic) }
			};
			this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
				type: "payload",
				direction: "outgoing",
				request: i
			});
			let s;
			try {
				s = await await yi$1(new Promise((n, o) => {
					this.relayer.request(i).catch((a) => {
						this.logger.warn(a), o(a);
					}).then(n);
				}), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
			} catch {
				this.relayer.events.emit(C.connection_stalled);
			}
			return s;
		}
		rpcUnsubscribe(e, t, i) {
			const s = {
				method: Yc(i.protocol).unsubscribe,
				params: {
					topic: e,
					id: t
				}
			};
			return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
				type: "payload",
				direction: "outgoing",
				request: s
			}), this.relayer.request(s);
		}
		onSubscribe(e, t) {
			this.setSubscription(e, He(ge({}, t), { id: e })), this.pending.delete(t.topic);
		}
		onBatchSubscribe(e) {
			e.length && e.forEach((t) => {
				this.setSubscription(t.id, ge({}, t)), this.pending.delete(t.topic);
			});
		}
		async onUnsubscribe(e, t, i) {
			this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
		}
		async setRelayerSubscriptions(e) {
			await this.relayer.core.storage.setItem(this.storageKey, e);
		}
		async getRelayerSubscriptions() {
			return await this.relayer.core.storage.getItem(this.storageKey);
		}
		setSubscription(e, t) {
			this.logger.debug("Setting subscription"), this.logger.trace({
				type: "method",
				method: "setSubscription",
				id: e,
				subscription: t
			}), this.addSubscription(e, t);
		}
		addSubscription(e, t) {
			this.subscriptions.set(e, ge({}, t)), this.topicMap.set(t.topic, e), this.events.emit($.created, t);
		}
		getSubscription(e) {
			this.logger.debug("Getting subscription"), this.logger.trace({
				type: "method",
				method: "getSubscription",
				id: e
			});
			const t = this.subscriptions.get(e);
			if (!t) {
				const { message: i } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
				throw new Error(i);
			}
			return t;
		}
		deleteSubscription(e, t) {
			this.logger.debug("Deleting subscription"), this.logger.trace({
				type: "method",
				method: "deleteSubscription",
				id: e,
				reason: t
			});
			const i = this.getSubscription(e);
			this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit($.deleted, He(ge({}, i), { reason: t }));
		}
		async persist() {
			await this.setRelayerSubscriptions(this.values), this.events.emit($.sync);
		}
		async onRestart() {
			if (this.cached.length) {
				const e = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
				for (let i = 0; i < t; i++) {
					const s = e.splice(0, this.batchSubscribeTopicsLimit);
					await this.batchSubscribe(s);
				}
			}
			this.events.emit($.resubscribed);
		}
		async restore() {
			try {
				const e = await this.getRelayerSubscriptions();
				if (typeof e > "u" || !e.length) return;
				if (this.subscriptions.size) {
					const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
					throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
				}
				this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
					type: "method",
					method: "restore",
					subscriptions: this.values
				});
			} catch (e) {
				this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
			}
		}
		async batchSubscribe(e) {
			e.length && (await this.rpcBatchSubscribe(e), this.onBatchSubscribe(await Promise.all(e.map(async (t) => He(ge({}, t), { id: await this.getSubscriptionId(t.topic) })))));
		}
		async batchFetchMessages(e) {
			if (!e.length) return;
			this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
			const t = await this.rpcBatchFetchMessages(e);
			t && t.messages && (await Ni$1((0, import_cjs.toMiliseconds)(import_cjs.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
		}
		async onConnect() {
			await this.restart(), this.reset();
		}
		onDisconnect() {
			this.onDisable();
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
		async restartToComplete(e) {
			!this.relayer.connected && !this.relayer.connecting && (this.cached.push(e), await this.relayer.transportOpen());
		}
		async getClientId() {
			return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
		}
		async getSubscriptionId(e) {
			return kc(e + await this.getClientId());
		}
	};
	eo = Object.defineProperty;
	Ci = Object.getOwnPropertySymbols;
	to = Object.prototype.hasOwnProperty;
	io = Object.prototype.propertyIsEnumerable;
	Ye = (r, e, t) => e in r ? eo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	Pi = (r, e) => {
		for (var t in e || (e = {})) to.call(e, t) && Ye(r, t, e[t]);
		if (Ci) for (var t of Ci(e)) io.call(e, t) && Ye(r, t, e[t]);
		return r;
	};
	y = (r, e, t) => Ye(r, typeof e != "symbol" ? e + "" : e, t);
	Si = class extends d {
		constructor(e) {
			super(e), y(this, "protocol", "wc"), y(this, "version", 2), y(this, "core"), y(this, "logger"), y(this, "events", new EventEmitter()), y(this, "provider"), y(this, "messages"), y(this, "subscriber"), y(this, "publisher"), y(this, "name", $t), y(this, "transportExplicitlyClosed", !1), y(this, "initialized", !1), y(this, "connectionAttemptInProgress", !1), y(this, "relayUrl"), y(this, "projectId"), y(this, "packageName"), y(this, "bundleId"), y(this, "hasExperiencedNetworkDisruption", !1), y(this, "pingTimeout"), y(this, "heartBeatTimeout", (0, import_cjs.toMiliseconds)(import_cjs.THIRTY_SECONDS + import_cjs.FIVE_SECONDS)), y(this, "reconnectTimeout"), y(this, "connectPromise"), y(this, "reconnectInProgress", !1), y(this, "requestsInFlight", []), y(this, "connectTimeout", (0, import_cjs.toMiliseconds)(import_cjs.ONE_SECOND * 15)), y(this, "request", async (t) => {
				var i, s;
				this.logger.debug("Publishing Request Payload");
				const n = t.id || getBigIntRpcId().toString();
				await this.toEstablishConnection();
				try {
					this.logger.trace({
						id: n,
						method: t.method,
						topic: (i = t.params) == null ? void 0 : i.topic
					}, "relayer.request - publishing...");
					const o = `${n}:${((s = t.params) == null ? void 0 : s.tag) || ""}`;
					this.requestsInFlight.push(o);
					const a = await this.provider.request(t);
					return this.requestsInFlight = this.requestsInFlight.filter((c) => c !== o), a;
				} catch (o) {
					throw this.logger.debug(`Failed to Publish Request: ${n}`), o;
				}
			}), y(this, "resetPingTimeout", () => {
				_e$1() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
					var t, i, s, n;
					try {
						this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n = (s = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null ? void 0 : s.terminate) == null || n.call(s);
					} catch (o) {
						this.logger.warn(o, o?.message);
					}
				}, this.heartBeatTimeout));
			}), y(this, "onPayloadHandler", (t) => {
				this.onProviderPayload(t), this.resetPingTimeout();
			}), y(this, "onConnectHandler", () => {
				this.logger.warn({}, "Relayer connected 🛜"), this.startPingTimeout(), this.events.emit(C.connect);
			}), y(this, "onDisconnectHandler", () => {
				this.logger.warn({}, "Relayer disconnected 🛑"), this.requestsInFlight = [], this.onProviderDisconnect();
			}), y(this, "onProviderErrorHandler", (t) => {
				this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(C.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
			}), y(this, "registerProviderListeners", () => {
				this.provider.on(L.payload, this.onPayloadHandler), this.provider.on(L.connect, this.onConnectHandler), this.provider.on(L.disconnect, this.onDisconnectHandler), this.provider.on(L.error, this.onProviderErrorHandler);
			}), this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? E$1(e.logger, this.name) : (0, import_pino.default)(k$2({ level: e.logger || "error" })), this.messages = new _i(this.logger, e.core), this.subscriber = new Ti(this, this.logger), this.publisher = new qn(this, this.logger), this.relayUrl = e?.relayUrl || "wss://relay.walletconnect.org", this.projectId = e.projectId, ei$1() ? this.packageName = ri$1() : ni$1() && (this.bundleId = ri$1()), this.provider = {};
		}
		async init() {
			if (this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = !0, this.subscriber.hasAnyTopics) try {
				await this.transportOpen();
			} catch (e) {
				this.logger.warn(e, e?.message);
			}
		}
		get context() {
			return y$2(this.logger);
		}
		get connected() {
			var e, t, i;
			return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1 || !1;
		}
		get connecting() {
			var e, t, i;
			return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0 || this.connectPromise !== void 0 || !1;
		}
		async publish(e, t, i) {
			this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({
				topic: e,
				message: t,
				publishedAt: Date.now(),
				transportType: Q.relay
			}, le.outbound);
		}
		async subscribe(e, t) {
			var i, s, n;
			this.isInitialized(), (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
			const o = typeof ((i = t?.internal) == null ? void 0 : i.throwOnFailedPublish) > "u" ? !0 : (s = t?.internal) == null ? void 0 : s.throwOnFailedPublish;
			let a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c;
			const h = (l) => {
				l.topic === e && (this.subscriber.off($.created, h), c());
			};
			return await Promise.all([new Promise((l) => {
				c = l, this.subscriber.on($.created, h);
			}), new Promise(async (l, d) => {
				a = await this.subscriber.subscribe(e, Pi({ internal: { throwOnFailedPublish: o } }, t)).catch((g) => {
					o && d(g);
				}) || a, l();
			})]), a;
		}
		async unsubscribe(e, t) {
			this.isInitialized(), await this.subscriber.unsubscribe(e, t);
		}
		on(e, t) {
			this.events.on(e, t);
		}
		once(e, t) {
			this.events.once(e, t);
		}
		off(e, t) {
			this.events.off(e, t);
		}
		removeListener(e, t) {
			this.events.removeListener(e, t);
		}
		async transportDisconnect() {
			this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await yi$1(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
		}
		async transportClose() {
			this.transportExplicitlyClosed = !0, await this.transportDisconnect();
		}
		async transportOpen(e) {
			if (!this.subscriber.hasAnyTopics) {
				this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
				return;
			}
			if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i) => {
				await this.connect(e).then(t).catch(i).finally(() => {
					this.connectPromise = void 0;
				});
			}), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
		}
		async restartTransport(e) {
			this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
		}
		async confirmOnlineStateOrThrow() {
			if (!await Na()) throw new Error("No internet connection detected. Please restart your network and try again.");
		}
		async handleBatchMessageEvents(e) {
			if (e?.length === 0) {
				this.logger.trace("Batch message events is empty. Ignoring...");
				return;
			}
			const t = e.sort((i, s) => i.publishedAt - s.publishedAt);
			this.logger.debug(`Batch of ${t.length} message events sorted`);
			for (const i of t) try {
				await this.onMessageEvent(i);
			} catch (s) {
				this.logger.warn(s, "Error while processing batch message event: " + s?.message);
			}
			this.logger.trace(`Batch of ${t.length} message events processed`);
		}
		async onLinkMessageEvent(e, t) {
			const { topic: i } = e;
			if (!t.sessionExists) {
				const n = {
					topic: i,
					expiry: Ei$1(import_cjs.FIVE_MINUTES),
					relay: { protocol: "irn" },
					active: !1
				};
				await this.core.pairing.pairings.set(i, n);
			}
			this.events.emit(C.message, e), await this.recordMessageEvent(e, le.inbound);
		}
		async connect(e) {
			await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
			let t = 1;
			for (; t < 6;) {
				try {
					if (this.transportExplicitlyClosed) break;
					this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i, s) => {
						const n = () => {
							s(/* @__PURE__ */ new Error("Connection interrupted while trying to subscribe"));
						};
						this.provider.once(L.disconnect, n), await yi$1(new Promise((o, a) => {
							this.provider.connect().then(o).catch(a);
						}), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o) => {
							s(o);
						}).finally(() => {
							this.provider.off(L.disconnect, n), clearTimeout(this.reconnectTimeout);
						}), await new Promise(async (o, a) => {
							const c = () => {
								a(/* @__PURE__ */ new Error("Connection interrupted while trying to subscribe"));
							};
							this.provider.once(L.disconnect, c), await this.subscriber.start().then(o).catch(a).finally(() => {
								this.provider.off(L.disconnect, c);
							});
						}), this.hasExperiencedNetworkDisruption = !1, i();
					});
				} catch (i) {
					await this.subscriber.stop();
					const s = i;
					this.logger.warn({}, s.message), this.hasExperiencedNetworkDisruption = !0;
				} finally {
					this.connectionAttemptInProgress = !1;
				}
				if (this.connected) {
					this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
					break;
				}
				await new Promise((i) => setTimeout(i, (0, import_cjs.toMiliseconds)(t * 1))), t++;
			}
		}
		startPingTimeout() {
			var e, t, i, s, n;
			if (_e$1()) try {
				(t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((n = (s = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : s.socket) == null || n.on("ping", () => {
					this.resetPingTimeout();
				})), this.resetPingTimeout();
			} catch (o) {
				this.logger.warn(o, o?.message);
			}
		}
		async createProvider() {
			this.provider.connection && this.unregisterProviderListeners();
			const e = await this.core.crypto.signJWT(this.relayUrl);
			this.provider = new o(new f$2(si$1({
				sdkVersion: _e,
				protocol: this.protocol,
				version: this.version,
				relayUrl: this.relayUrl,
				projectId: this.projectId,
				auth: e,
				useOnCloseEvent: !0,
				bundleId: this.bundleId,
				packageName: this.packageName
			}))), this.registerProviderListeners();
		}
		async recordMessageEvent(e, t) {
			const { topic: i, message: s } = e;
			await this.messages.set(i, s, t);
		}
		async shouldIgnoreMessageEvent(e) {
			const { topic: t, message: i } = e;
			if (!i || i.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i}`), !0;
			if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), !0;
			const s = this.messages.has(t, i);
			return s && this.logger.warn(`Ignoring duplicate message: ${i}`), s;
		}
		async onProviderPayload(e) {
			if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
				type: "payload",
				direction: "incoming",
				payload: e
			}), isJsonRpcRequest(e)) {
				if (!e.method.endsWith("_subscription")) return;
				const t = e.params, { topic: i, message: s, publishedAt: n, attestation: o } = t.data, a = {
					topic: i,
					message: s,
					publishedAt: n,
					transportType: Q.relay,
					attestation: o
				};
				this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Pi({
					type: "event",
					event: t.id
				}, a)), this.events.emit(t.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
			} else isJsonRpcResponse(e) && this.events.emit(C.message_ack, e);
		}
		async onMessageEvent(e) {
			await this.shouldIgnoreMessageEvent(e) || (await this.recordMessageEvent(e, le.inbound), this.events.emit(C.message, e));
		}
		async acknowledgePayload(e) {
			const t = formatJsonRpcResult(e.id, !0);
			await this.provider.connection.send(t);
		}
		unregisterProviderListeners() {
			this.provider.off(L.payload, this.onPayloadHandler), this.provider.off(L.connect, this.onConnectHandler), this.provider.off(L.disconnect, this.onDisconnectHandler), this.provider.off(L.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
		}
		async registerEventListeners() {
			let e = await Na();
			Ua(async (t) => {
				e !== t && (e = t, t ? await this.transportOpen().catch((i) => this.logger.error(i, i?.message)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1));
			}), this.core.heartbeat.on(r.pulse, async () => {
				if (!this.transportExplicitlyClosed && !this.connected && Ta()) try {
					await this.confirmOnlineStateOrThrow(), await this.transportOpen();
				} catch (t) {
					this.logger.warn(t, t?.message);
				}
			});
		}
		async onProviderDisconnect() {
			clearTimeout(this.pingTimeout), this.events.emit(C.disconnect), this.connectionAttemptInProgress = !1, !this.reconnectInProgress && (this.reconnectInProgress = !0, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
				await this.transportOpen().catch((e) => this.logger.error(e, e?.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = !1;
			}, (0, import_cjs.toMiliseconds)(.1)))));
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
		async toEstablishConnection() {
			if (await this.confirmOnlineStateOrThrow(), !this.connected) {
				if (this.connectPromise) {
					await this.connectPromise;
					return;
				}
				await this.connect();
			}
		}
	};
	ro = "[object RegExp]";
	no = "[object String]";
	oo = "[object Number]";
	ao = "[object Boolean]";
	xi = "[object Arguments]";
	co = "[object Symbol]";
	ho = "[object Date]";
	lo = "[object Map]";
	uo = "[object Set]";
	go = "[object Array]";
	po = "[object Function]";
	yo = "[object ArrayBuffer]";
	Je = "[object Object]";
	bo = "[object Error]";
	mo = "[object DataView]";
	fo = "[object Uint8Array]";
	Do = "[object Uint8ClampedArray]";
	vo = "[object Uint16Array]";
	wo = "[object Uint32Array]";
	_o = "[object BigUint64Array]";
	Eo = "[object Int8Array]";
	Io = "[object Int16Array]";
	To = "[object Int32Array]";
	Co = "[object BigInt64Array]";
	Po = "[object Float32Array]";
	So = "[object Float64Array]";
	xo = Object.defineProperty;
	Ni = Object.getOwnPropertySymbols;
	No = Object.prototype.hasOwnProperty;
	$o = Object.prototype.propertyIsEnumerable;
	Xe = (r, e, t) => e in r ? xo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	$i = (r, e) => {
		for (var t in e || (e = {})) No.call(e, t) && Xe(r, t, e[t]);
		if (Ni) for (var t of Ni(e)) $o.call(e, t) && Xe(r, t, e[t]);
		return r;
	};
	z = (r, e, t) => Xe(r, typeof e != "symbol" ? e + "" : e, t);
	zi = class extends f$1 {
		constructor(e, t, i, s = B, n = void 0) {
			super(e, t, i, s), this.core = e, this.logger = t, this.name = i, z(this, "map", /* @__PURE__ */ new Map()), z(this, "version", "0.3"), z(this, "cached", []), z(this, "initialized", !1), z(this, "getKey"), z(this, "storagePrefix", B), z(this, "recentlyDeleted", []), z(this, "recentlyDeletedLimit", 200), z(this, "init", async () => {
				this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
					this.getKey && o !== null && !Et$1(o) ? this.map.set(this.getKey(o), o) : la(o) ? this.map.set(o.id, o) : da(o) && this.map.set(o.topic, o);
				}), this.cached = [], this.initialized = !0);
			}), z(this, "set", async (o, a) => {
				this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({
					type: "method",
					method: "set",
					key: o,
					value: a
				}), this.map.set(o, a), await this.persist());
			}), z(this, "get", (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
				type: "method",
				method: "get",
				key: o
			}), this.getData(o))), z(this, "getAll", (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((c) => Ao(a[c], o[c]))) : this.values)), z(this, "update", async (o, a) => {
				this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
					type: "method",
					method: "update",
					key: o,
					update: a
				});
				const c = $i($i({}, this.getData(o)), a);
				this.map.set(o, c), await this.persist();
			}), z(this, "delete", async (o, a) => {
				this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({
					type: "method",
					method: "delete",
					key: o,
					reason: a
				}), this.map.delete(o), this.addToRecentlyDeleted(o), await this.persist());
			}), this.logger = E$1(t, this.name), this.storagePrefix = s, this.getKey = n;
		}
		get context() {
			return y$2(this.logger);
		}
		get storageKey() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
		}
		get length() {
			return this.map.size;
		}
		get keys() {
			return Array.from(this.map.keys());
		}
		get values() {
			return Array.from(this.map.values());
		}
		addToRecentlyDeleted(e) {
			this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
		}
		async setDataStore(e) {
			await this.core.storage.setItem(this.storageKey, e);
		}
		async getDataStore() {
			return await this.core.storage.getItem(this.storageKey);
		}
		getData(e) {
			const t = this.map.get(e);
			if (!t) {
				if (this.recentlyDeleted.includes(e)) {
					const { message: s } = ht("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
					throw this.logger.error(s), new Error(s);
				}
				const { message: i } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
				throw this.logger.error(i), new Error(i);
			}
			return t;
		}
		async persist() {
			await this.setDataStore(this.values);
		}
		async restore() {
			try {
				const e = await this.getDataStore();
				if (typeof e > "u" || !e.length) return;
				if (this.map.size) {
					const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
					throw this.logger.error(t), new Error(t);
				}
				this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
					type: "method",
					method: "restore",
					value: this.values
				});
			} catch (e) {
				this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
			}
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
	};
	zo = Object.defineProperty;
	Lo = (r, e, t) => e in r ? zo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	p = (r, e, t) => Lo(r, typeof e != "symbol" ? e + "" : e, t);
	Li = class {
		constructor(e, t) {
			this.core = e, this.logger = t, p(this, "name", Mt), p(this, "version", "0.3"), p(this, "events", new n()), p(this, "pairings"), p(this, "initialized", !1), p(this, "storagePrefix", B), p(this, "ignoredPayloadTypes", [1]), p(this, "registeredMethods", []), p(this, "init", async () => {
				this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
			}), p(this, "register", ({ methods: i }) => {
				this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
			}), p(this, "create", async (i) => {
				this.isInitialized();
				const s = jc(), n = await this.core.crypto.setSymKey(s), o = Ei$1(import_cjs.FIVE_MINUTES), a = { protocol: "irn" }, c = {
					topic: n,
					expiry: o,
					relay: a,
					active: !1,
					methods: i?.methods
				}, h = Wc({
					protocol: this.core.protocol,
					version: this.core.version,
					topic: n,
					symKey: s,
					relay: a,
					expiryTimestamp: o,
					methods: i?.methods
				});
				return this.events.emit(re.create, c), this.core.expirer.set(n, o), await this.pairings.set(n, c), await this.core.relayer.subscribe(n, { transportType: i?.transportType }), {
					topic: n,
					uri: h
				};
			}), p(this, "pair", async (i) => {
				this.isInitialized();
				const s = this.core.eventClient.createEvent({ properties: {
					topic: i?.uri,
					trace: [G.pairing_started]
				} });
				this.isValidPair(i, s);
				const { topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h } = Gc(i.uri);
				s.props.properties.topic = n, s.addTrace(G.pairing_uri_validation_success), s.addTrace(G.pairing_uri_not_expired);
				let l;
				if (this.pairings.keys.includes(n)) {
					if (l = this.pairings.get(n), s.addTrace(G.existing_pairing), l.active) throw s.setError(Y.active_pairing_already_exists), /* @__PURE__ */ new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
					s.addTrace(G.pairing_not_expired);
				}
				const d = c || Ei$1(import_cjs.FIVE_MINUTES), g = {
					topic: n,
					relay: a,
					expiry: d,
					active: !1,
					methods: h
				};
				this.core.expirer.set(n, d), await this.pairings.set(n, g), s.addTrace(G.store_new_pairing), i.activatePairing && await this.activate({ topic: n }), this.events.emit(re.create, g), s.addTrace(G.emit_inactive_pairing), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(o, n), s.addTrace(G.subscribing_pairing_topic);
				try {
					await this.core.relayer.confirmOnlineStateOrThrow();
				} catch {
					s.setError(Y.no_internet_connection);
				}
				try {
					await this.core.relayer.subscribe(n, { relay: a });
				} catch (_) {
					throw s.setError(Y.subscribe_pairing_topic_failure), _;
				}
				return s.addTrace(G.subscribe_pairing_topic_success), g;
			}), p(this, "activate", async ({ topic: i }) => {
				this.isInitialized();
				const s = Ei$1(import_cjs.FIVE_MINUTES);
				this.core.expirer.set(i, s), await this.pairings.update(i, {
					active: !0,
					expiry: s
				});
			}), p(this, "ping", async (i) => {
				this.isInitialized(), await this.isValidPing(i), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
				const { topic: s } = i;
				if (this.pairings.keys.includes(s)) {
					const n = await this.sendRequest(s, "wc_pairingPing", {}), { done: o, resolve: a, reject: c } = gi$1();
					this.events.once(xi$1("pairing_ping", n), ({ error: h }) => {
						h ? c(h) : a();
					}), await o();
				}
			}), p(this, "updateExpiry", async ({ topic: i, expiry: s }) => {
				this.isInitialized(), await this.pairings.update(i, { expiry: s });
			}), p(this, "updateMetadata", async ({ topic: i, metadata: s }) => {
				this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
			}), p(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), p(this, "disconnect", async (i) => {
				this.isInitialized(), await this.isValidDisconnect(i);
				const { topic: s } = i;
				this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", Nt$1("USER_DISCONNECTED")), await this.deletePairing(s));
			}), p(this, "formatUriFromPairing", (i) => {
				this.isInitialized();
				const { topic: s, relay: n, expiry: o, methods: a } = i, c = this.core.crypto.keychain.get(s);
				return Wc({
					protocol: this.core.protocol,
					version: this.core.version,
					topic: s,
					symKey: c,
					relay: n,
					expiryTimestamp: o,
					methods: a
				});
			}), p(this, "sendRequest", async (i, s, n) => {
				const o = formatJsonRpcRequest(s, n), a = await this.core.crypto.encode(i, o), c = se[s].req;
				return this.core.history.set(i, o), this.core.relayer.publish(i, a, c), o.id;
			}), p(this, "sendResult", async (i, s, n) => {
				const o = formatJsonRpcResult(i, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, i)).request.method, h = se[c].res;
				await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
			}), p(this, "sendError", async (i, s, n) => {
				const o = formatJsonRpcError(i, n), a = await this.core.crypto.encode(s, o), c = (await this.core.history.get(s, i)).request.method, h = se[c] ? se[c].res : se.unregistered_method.res;
				await this.core.relayer.publish(s, a, h), await this.core.history.resolve(o);
			}), p(this, "deletePairing", async (i, s) => {
				await this.core.relayer.unsubscribe(i), await Promise.all([
					this.pairings.delete(i, Nt$1("USER_DISCONNECTED")),
					this.core.crypto.deleteSymKey(i),
					s ? Promise.resolve() : this.core.expirer.del(i)
				]);
			}), p(this, "cleanup", async () => {
				const i = this.pairings.getAll().filter((s) => vi$1(s.expiry));
				await Promise.all(i.map((s) => this.deletePairing(s.topic)));
			}), p(this, "onRelayEventRequest", async (i) => {
				const { topic: s, payload: n } = i;
				switch (n.method) {
					case "wc_pairingPing": return await this.onPairingPingRequest(s, n);
					case "wc_pairingDelete": return await this.onPairingDeleteRequest(s, n);
					default: return await this.onUnknownRpcMethodRequest(s, n);
				}
			}), p(this, "onRelayEventResponse", async (i) => {
				const { topic: s, payload: n } = i, o = (await this.core.history.get(s, n.id)).request.method;
				switch (o) {
					case "wc_pairingPing": return this.onPairingPingResponse(s, n);
					default: return this.onUnknownRpcMethodResponse(o);
				}
			}), p(this, "onPairingPingRequest", async (i, s) => {
				const { id: n } = s;
				try {
					this.isValidPing({ topic: i }), await this.sendResult(n, i, !0), this.events.emit(re.ping, {
						id: n,
						topic: i
					});
				} catch (o) {
					await this.sendError(n, i, o), this.logger.error(o);
				}
			}), p(this, "onPairingPingResponse", (i, s) => {
				const { id: n } = s;
				setTimeout(() => {
					isJsonRpcResult(s) ? this.events.emit(xi$1("pairing_ping", n), {}) : isJsonRpcError(s) && this.events.emit(xi$1("pairing_ping", n), { error: s.error });
				}, 500);
			}), p(this, "onPairingDeleteRequest", async (i, s) => {
				const { id: n } = s;
				try {
					this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit(re.delete, {
						id: n,
						topic: i
					});
				} catch (o) {
					await this.sendError(n, i, o), this.logger.error(o);
				}
			}), p(this, "onUnknownRpcMethodRequest", async (i, s) => {
				const { id: n, method: o } = s;
				try {
					if (this.registeredMethods.includes(o)) return;
					const a = Nt$1("WC_METHOD_UNSUPPORTED", o);
					await this.sendError(n, i, a), this.logger.error(a);
				} catch (a) {
					await this.sendError(n, i, a), this.logger.error(a);
				}
			}), p(this, "onUnknownRpcMethodResponse", (i) => {
				this.registeredMethods.includes(i) || this.logger.error(Nt$1("WC_METHOD_UNSUPPORTED", i));
			}), p(this, "isValidPair", (i, s) => {
				var n;
				if (!ma(i)) {
					const { message: a } = ht("MISSING_OR_INVALID", `pair() params: ${i}`);
					throw s.setError(Y.malformed_pairing_uri), new Error(a);
				}
				if (!fa(i.uri)) {
					const { message: a } = ht("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
					throw s.setError(Y.malformed_pairing_uri), new Error(a);
				}
				const o = Gc(i?.uri);
				if (!((n = o?.relay) != null && n.protocol)) {
					const { message: a } = ht("MISSING_OR_INVALID", "pair() uri#relay-protocol");
					throw s.setError(Y.malformed_pairing_uri), new Error(a);
				}
				if (!(o != null && o.symKey)) {
					const { message: a } = ht("MISSING_OR_INVALID", "pair() uri#symKey");
					throw s.setError(Y.malformed_pairing_uri), new Error(a);
				}
				if (o != null && o.expiryTimestamp && (0, import_cjs.toMiliseconds)(o?.expiryTimestamp) < Date.now()) {
					s.setError(Y.pairing_expired);
					const { message: a } = ht("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
					throw new Error(a);
				}
			}), p(this, "isValidPing", async (i) => {
				if (!ma(i)) {
					const { message: n } = ht("MISSING_OR_INVALID", `ping() params: ${i}`);
					throw new Error(n);
				}
				const { topic: s } = i;
				await this.isValidPairingTopic(s);
			}), p(this, "isValidDisconnect", async (i) => {
				if (!ma(i)) {
					const { message: n } = ht("MISSING_OR_INVALID", `disconnect() params: ${i}`);
					throw new Error(n);
				}
				const { topic: s } = i;
				await this.isValidPairingTopic(s);
			}), p(this, "isValidPairingTopic", async (i) => {
				if (!nt(i, !1)) {
					const { message: s } = ht("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
					throw new Error(s);
				}
				if (!this.pairings.keys.includes(i)) {
					const { message: s } = ht("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
					throw new Error(s);
				}
				if (vi$1(this.pairings.get(i).expiry)) {
					await this.deletePairing(i);
					const { message: s } = ht("EXPIRED", `pairing topic: ${i}`);
					throw new Error(s);
				}
			}), this.core = e, this.logger = E$1(t, this.name), this.pairings = new zi(this.core, this.logger, this.name, this.storagePrefix);
		}
		get context() {
			return y$2(this.logger);
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
		registerRelayerEvents() {
			this.core.relayer.on(C.message, async (e) => {
				const { topic: t, message: i, transportType: s } = e;
				if (this.pairings.keys.includes(t) && s !== Q.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) try {
					const n = await this.core.crypto.decode(t, i);
					isJsonRpcRequest(n) ? (this.core.history.set(t, n), await this.onRelayEventRequest({
						topic: t,
						payload: n
					})) : isJsonRpcResponse(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
						topic: t,
						payload: n
					}), this.core.history.delete(t, n.id)), await this.core.relayer.messages.ack(t, i);
				} catch (n) {
					this.logger.error(n);
				}
			});
		}
		registerExpirerEvents() {
			this.core.expirer.on(M.expired, async (e) => {
				const { topic: t } = bi$1(e.target);
				t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(re.expire, { topic: t }));
			});
		}
	};
	ko = Object.defineProperty;
	jo = (r, e, t) => e in r ? ko(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	O = (r, e, t) => jo(r, typeof e != "symbol" ? e + "" : e, t);
	ki = class extends I {
		constructor(e, t) {
			super(e, t), this.core = e, this.logger = t, O(this, "records", /* @__PURE__ */ new Map()), O(this, "events", new EventEmitter()), O(this, "name", Bt), O(this, "version", "0.3"), O(this, "cached", []), O(this, "initialized", !1), O(this, "storagePrefix", B), O(this, "init", async () => {
				this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
			}), O(this, "set", (i, s, n) => {
				if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
					type: "method",
					method: "set",
					topic: i,
					request: s,
					chainId: n
				}), this.records.has(s.id)) return;
				const o = {
					id: s.id,
					topic: i,
					request: {
						method: s.method,
						params: s.params || null
					},
					chainId: n,
					expiry: Ei$1(import_cjs.THIRTY_DAYS)
				};
				this.records.set(o.id, o), this.persist(), this.events.emit(F.created, o);
			}), O(this, "resolve", async (i) => {
				if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
					type: "method",
					method: "update",
					response: i
				}), !this.records.has(i.id)) return;
				const s = await this.getRecord(i.id);
				typeof s.response > "u" && (s.response = isJsonRpcError(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.persist(), this.events.emit(F.updated, s));
			}), O(this, "get", async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
				type: "method",
				method: "get",
				topic: i,
				id: s
			}), await this.getRecord(s))), O(this, "delete", (i, s) => {
				this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
					type: "method",
					method: "delete",
					id: s
				}), this.values.forEach((n) => {
					if (n.topic === i) {
						if (typeof s < "u" && n.id !== s) return;
						this.records.delete(n.id), this.events.emit(F.deleted, n);
					}
				}), this.persist();
			}), O(this, "exists", async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : !1)), O(this, "on", (i, s) => {
				this.events.on(i, s);
			}), O(this, "once", (i, s) => {
				this.events.once(i, s);
			}), O(this, "off", (i, s) => {
				this.events.off(i, s);
			}), O(this, "removeListener", (i, s) => {
				this.events.removeListener(i, s);
			}), this.logger = E$1(t, this.name);
		}
		get context() {
			return y$2(this.logger);
		}
		get storageKey() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
		}
		get size() {
			return this.records.size;
		}
		get keys() {
			return Array.from(this.records.keys());
		}
		get values() {
			return Array.from(this.records.values());
		}
		get pending() {
			const e = [];
			return this.values.forEach((t) => {
				if (typeof t.response < "u") return;
				const i = {
					topic: t.topic,
					request: formatJsonRpcRequest(t.request.method, t.request.params, t.id),
					chainId: t.chainId
				};
				return e.push(i);
			}), e;
		}
		async setJsonRpcRecords(e) {
			await this.core.storage.setItem(this.storageKey, e);
		}
		async getJsonRpcRecords() {
			return await this.core.storage.getItem(this.storageKey);
		}
		getRecord(e) {
			this.isInitialized();
			const t = this.records.get(e);
			if (!t) {
				const { message: i } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
				throw new Error(i);
			}
			return t;
		}
		async persist() {
			await this.setJsonRpcRecords(this.values), this.events.emit(F.sync);
		}
		async restore() {
			try {
				const e = await this.getJsonRpcRecords();
				if (typeof e > "u" || !e.length) return;
				if (this.records.size) {
					const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
					throw this.logger.error(t), new Error(t);
				}
				this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
					type: "method",
					method: "restore",
					records: this.values
				});
			} catch (e) {
				this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
			}
		}
		registerEventListeners() {
			this.events.on(F.created, (e) => {
				const t = F.created;
				this.logger.info(`Emitting ${t}`), this.logger.debug({
					type: "event",
					event: t,
					record: e
				});
			}), this.events.on(F.updated, (e) => {
				const t = F.updated;
				this.logger.info(`Emitting ${t}`), this.logger.debug({
					type: "event",
					event: t,
					record: e
				});
			}), this.events.on(F.deleted, (e) => {
				const t = F.deleted;
				this.logger.info(`Emitting ${t}`), this.logger.debug({
					type: "event",
					event: t,
					record: e
				});
			}), this.core.heartbeat.on(r.pulse, () => {
				this.cleanup();
			});
		}
		cleanup() {
			try {
				this.isInitialized();
				let e = !1;
				this.records.forEach((t) => {
					(0, import_cjs.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(F.deleted, t, !1), e = !0);
				}), e && this.persist();
			} catch (e) {
				this.logger.warn(e);
			}
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
	};
	Uo = Object.defineProperty;
	Fo = (r, e, t) => e in r ? Uo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	A = (r, e, t) => Fo(r, typeof e != "symbol" ? e + "" : e, t);
	ji = class extends S$1 {
		constructor(e, t) {
			super(e, t), this.core = e, this.logger = t, A(this, "expirations", /* @__PURE__ */ new Map()), A(this, "events", new EventEmitter()), A(this, "name", qt), A(this, "version", "0.3"), A(this, "cached", []), A(this, "initialized", !1), A(this, "storagePrefix", B), A(this, "init", async () => {
				this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
			}), A(this, "has", (i) => {
				try {
					const s = this.formatTarget(i);
					return typeof this.getExpiration(s) < "u";
				} catch {
					return !1;
				}
			}), A(this, "set", (i, s) => {
				this.isInitialized();
				const n = this.formatTarget(i), o = {
					target: n,
					expiry: s
				};
				this.expirations.set(n, o), this.checkExpiry(n, o), this.events.emit(M.created, {
					target: n,
					expiration: o
				});
			}), A(this, "get", (i) => {
				this.isInitialized();
				const s = this.formatTarget(i);
				return this.getExpiration(s);
			}), A(this, "del", (i) => {
				if (this.isInitialized(), this.has(i)) {
					const s = this.formatTarget(i), n = this.getExpiration(s);
					this.expirations.delete(s), this.events.emit(M.deleted, {
						target: s,
						expiration: n
					});
				}
			}), A(this, "on", (i, s) => {
				this.events.on(i, s);
			}), A(this, "once", (i, s) => {
				this.events.once(i, s);
			}), A(this, "off", (i, s) => {
				this.events.off(i, s);
			}), A(this, "removeListener", (i, s) => {
				this.events.removeListener(i, s);
			}), this.logger = E$1(t, this.name);
		}
		get context() {
			return y$2(this.logger);
		}
		get storageKey() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
		}
		get length() {
			return this.expirations.size;
		}
		get keys() {
			return Array.from(this.expirations.keys());
		}
		get values() {
			return Array.from(this.expirations.values());
		}
		formatTarget(e) {
			if (typeof e == "string") return mi$1(e);
			if (typeof e == "number") return wi$1(e);
			const { message: t } = ht("UNKNOWN_TYPE", `Target type: ${typeof e}`);
			throw new Error(t);
		}
		async setExpirations(e) {
			await this.core.storage.setItem(this.storageKey, e);
		}
		async getExpirations() {
			return await this.core.storage.getItem(this.storageKey);
		}
		async persist() {
			await this.setExpirations(this.values), this.events.emit(M.sync);
		}
		async restore() {
			try {
				const e = await this.getExpirations();
				if (typeof e > "u" || !e.length) return;
				if (this.expirations.size) {
					const { message: t } = ht("RESTORE_WILL_OVERRIDE", this.name);
					throw this.logger.error(t), new Error(t);
				}
				this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
					type: "method",
					method: "restore",
					expirations: this.values
				});
			} catch (e) {
				this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
			}
		}
		getExpiration(e) {
			const t = this.expirations.get(e);
			if (!t) {
				const { message: i } = ht("NO_MATCHING_KEY", `${this.name}: ${e}`);
				throw this.logger.warn(i), new Error(i);
			}
			return t;
		}
		checkExpiry(e, t) {
			const { expiry: i } = t;
			(0, import_cjs.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
		}
		expire(e, t) {
			this.expirations.delete(e), this.events.emit(M.expired, {
				target: e,
				expiration: t
			});
		}
		checkExpirations() {
			this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
		}
		registerEventListeners() {
			this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(M.created, (e) => {
				const t = M.created;
				this.logger.info(`Emitting ${t}`), this.logger.debug({
					type: "event",
					event: t,
					data: e
				}), this.persist();
			}), this.events.on(M.expired, (e) => {
				const t = M.expired;
				this.logger.info(`Emitting ${t}`), this.logger.debug({
					type: "event",
					event: t,
					data: e
				}), this.persist();
			}), this.events.on(M.deleted, (e) => {
				const t = M.deleted;
				this.logger.info(`Emitting ${t}`), this.logger.debug({
					type: "event",
					event: t,
					data: e
				}), this.persist();
			});
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: e } = ht("NOT_INITIALIZED", this.name);
				throw new Error(e);
			}
		}
	};
	Mo = Object.defineProperty;
	Ko = (r, e, t) => e in r ? Mo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	w = (r, e, t) => Ko(r, typeof e != "symbol" ? e + "" : e, t);
	Ui = class extends M$1 {
		constructor(e, t, i) {
			super(e, t, i), this.core = e, this.logger = t, this.store = i, w(this, "name", Wt), w(this, "abortController"), w(this, "isDevEnv"), w(this, "verifyUrlV3", Yt), w(this, "storagePrefix", B), w(this, "version", 2), w(this, "publicKey"), w(this, "fetchPromise"), w(this, "init", async () => {
				var s;
				this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_cjs.toMiliseconds)((s = this.publicKey) == null ? void 0 : s.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
			}), w(this, "register", async (s) => {
				if (!Tt$1() || this.isDevEnv) return;
				const n = window.location.origin, { id: o, decryptedId: a } = s, c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
				try {
					const h = (0, import_cjs$1.getDocument)(), l = this.startAbortTimer(import_cjs.ONE_SECOND * 5), d = await new Promise((g, _) => {
						const u = () => {
							window.removeEventListener("message", x), h.body.removeChild(b), _("attestation aborted");
						};
						this.abortController.signal.addEventListener("abort", u);
						const b = h.createElement("iframe");
						b.src = c, b.style.display = "none", b.addEventListener("error", u, { signal: this.abortController.signal });
						const x = (I) => {
							if (I.data && typeof I.data == "string") try {
								const D = JSON.parse(I.data);
								if (D.type === "verify_attestation") {
									if (sn$2(D.attestation).payload.id !== o) return;
									clearInterval(l), h.body.removeChild(b), this.abortController.signal.removeEventListener("abort", u), window.removeEventListener("message", x), g(D.attestation === null ? "" : D.attestation);
								}
							} catch (D) {
								this.logger.warn(D);
							}
						};
						h.body.appendChild(b), window.addEventListener("message", x, { signal: this.abortController.signal });
					});
					return this.logger.debug("jwt attestation", d), d;
				} catch (h) {
					this.logger.warn(h);
				}
				return "";
			}), w(this, "resolve", async (s) => {
				if (this.isDevEnv) return "";
				const { attestationId: n, hash: o, encryptedId: a } = s;
				if (n === "") {
					this.logger.debug("resolve: attestationId is empty, skipping");
					return;
				}
				if (n) {
					if (sn$2(n).payload.id !== a) return;
					const h = await this.isValidJwtAttestation(n);
					if (h) {
						if (!h.isVerified) {
							this.logger.warn("resolve: jwt attestation: origin url not verified");
							return;
						}
						return h;
					}
				}
				if (!o) return;
				const c = this.getVerifyUrl(s?.verifyUrl);
				return this.fetchAttestation(o, c);
			}), w(this, "fetchAttestation", async (s, n) => {
				this.logger.debug(`resolving attestation: ${s} from url: ${n}`);
				const o = this.startAbortTimer(import_cjs.ONE_SECOND * 5), a = await fetch(`${n}/attestation/${s}?v2Supported=true`, { signal: this.abortController.signal });
				return clearTimeout(o), a.status === 200 ? await a.json() : void 0;
			}), w(this, "getVerifyUrl", (s) => {
				let n = s || "https://verify.walletconnect.org";
				return Jt.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: https://verify.walletconnect.org`), n = "https://verify.walletconnect.org"), n;
			}), w(this, "fetchPublicKey", async () => {
				try {
					this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
					const s = this.startAbortTimer(import_cjs.FIVE_SECONDS), n = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
					return clearTimeout(s), await n.json();
				} catch (s) {
					this.logger.warn(s);
				}
			}), w(this, "persistPublicKey", async (s) => {
				this.logger.debug("persisting public key to local storage", s), await this.store.setItem(this.storeKey, s), this.publicKey = s;
			}), w(this, "removePublicKey", async () => {
				this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
			}), w(this, "isValidJwtAttestation", async (s) => {
				const n = await this.getPublicKey();
				try {
					if (n) return this.validateAttestation(s, n);
				} catch (a) {
					this.logger.error(a), this.logger.warn("error validating attestation");
				}
				const o = await this.fetchAndPersistPublicKey();
				try {
					if (o) return this.validateAttestation(s, o);
				} catch (a) {
					this.logger.error(a), this.logger.warn("error validating attestation");
				}
			}), w(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), w(this, "fetchAndPersistPublicKey", async () => {
				if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
				this.fetchPromise = new Promise(async (n) => {
					const o = await this.fetchPublicKey();
					o && (await this.persistPublicKey(o), n(o));
				});
				const s = await this.fetchPromise;
				return this.fetchPromise = void 0, s;
			}), w(this, "validateAttestation", (s, n) => {
				const o = zc(s, n.publicKey), a = {
					hasExpired: (0, import_cjs.toMiliseconds)(o.exp) < Date.now(),
					payload: o
				};
				if (a.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), /* @__PURE__ */ new Error("JWT attestation expired");
				return {
					origin: a.payload.origin,
					isScam: a.payload.isScam,
					isVerified: a.payload.isVerified
				};
			}), this.logger = E$1(t, this.name), this.abortController = new AbortController(), this.isDevEnv = Ii$1(), this.init();
		}
		get storeKey() {
			return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
		}
		get context() {
			return y$2(this.logger);
		}
		startAbortTimer(e) {
			return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_cjs.toMiliseconds)(e));
		}
	};
	Bo = Object.defineProperty;
	Vo = (r, e, t) => e in r ? Bo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	Fi = (r, e, t) => Vo(r, typeof e != "symbol" ? e + "" : e, t);
	Mi = class extends O$1 {
		constructor(e, t) {
			super(e, t), this.projectId = e, this.logger = t, Fi(this, "context", Xt), Fi(this, "registerDeviceToken", async (i) => {
				const { clientId: s, token: n, notificationType: o, enableEncrypted: a = !1 } = i, c = `${Zt}/${this.projectId}/clients`;
				await fetch(c, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						client_id: s,
						type: o,
						token: n,
						always_raw: a
					})
				});
			}), this.logger = E$1(t, this.context);
		}
	};
	qo = Object.defineProperty;
	Ki = Object.getOwnPropertySymbols;
	Go = Object.prototype.hasOwnProperty;
	Wo = Object.prototype.propertyIsEnumerable;
	Ze = (r, e, t) => e in r ? qo(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	be = (r, e) => {
		for (var t in e || (e = {})) Go.call(e, t) && Ze(r, t, e[t]);
		if (Ki) for (var t of Ki(e)) Wo.call(e, t) && Ze(r, t, e[t]);
		return r;
	};
	E = (r, e, t) => Ze(r, typeof e != "symbol" ? e + "" : e, t);
	Bi = class extends R$1 {
		constructor(e, t, i = !0) {
			super(e, t, i), this.core = e, this.logger = t, E(this, "context", ei), E(this, "storagePrefix", B), E(this, "storageVersion", Qt), E(this, "events", /* @__PURE__ */ new Map()), E(this, "shouldPersist", !1), E(this, "init", async () => {
				if (!Ii$1()) try {
					const s = {
						eventId: Bi$1(),
						timestamp: Date.now(),
						domain: this.getAppDomain(),
						props: {
							event: "INIT",
							type: "",
							properties: {
								client_id: await this.core.crypto.getClientId(),
								user_agent: Mn$1(this.core.relayer.protocol, this.core.relayer.version, _e)
							}
						}
					};
					await this.sendEvent([s]);
				} catch (s) {
					this.logger.warn(s);
				}
			}), E(this, "createEvent", (s) => {
				const { event: n = "ERROR", type: o = "", properties: { topic: a, trace: c } } = s, h = Bi$1(), l = this.core.projectId || "", g = be({
					eventId: h,
					timestamp: Date.now(),
					props: {
						event: n,
						type: o,
						properties: {
							topic: a,
							trace: c
						}
					},
					bundleId: l,
					domain: this.getAppDomain()
				}, this.setMethods(h));
				return this.telemetryEnabled && (this.events.set(h, g), this.shouldPersist = !0), g;
			}), E(this, "getEvent", (s) => {
				const { eventId: n, topic: o } = s;
				if (n) return this.events.get(n);
				const a = Array.from(this.events.values()).find((c) => c.props.properties.topic === o);
				if (a) return be(be({}, a), this.setMethods(a.eventId));
			}), E(this, "deleteEvent", (s) => {
				const { eventId: n } = s;
				this.events.delete(n), this.shouldPersist = !0;
			}), E(this, "setEventListeners", () => {
				this.core.heartbeat.on(r.pulse, async () => {
					this.shouldPersist && await this.persist(), this.events.forEach((s) => {
						(0, import_cjs.fromMiliseconds)(Date.now()) - (0, import_cjs.fromMiliseconds)(s.timestamp) > 86400 && (this.events.delete(s.eventId), this.shouldPersist = !0);
					});
				});
			}), E(this, "setMethods", (s) => ({
				addTrace: (n) => this.addTrace(s, n),
				setError: (n) => this.setError(s, n)
			})), E(this, "addTrace", (s, n) => {
				const o = this.events.get(s);
				o && (o.props.properties.trace.push(n), this.events.set(s, o), this.shouldPersist = !0);
			}), E(this, "setError", (s, n) => {
				const o = this.events.get(s);
				o && (o.props.type = n, o.timestamp = Date.now(), this.events.set(s, o), this.shouldPersist = !0);
			}), E(this, "persist", async () => {
				await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = !1;
			}), E(this, "restore", async () => {
				try {
					const s = await this.core.storage.getItem(this.storageKey) || [];
					if (!s.length) return;
					s.forEach((n) => {
						this.events.set(n.eventId, be(be({}, n), this.setMethods(n.eventId)));
					});
				} catch (s) {
					this.logger.warn(s);
				}
			}), E(this, "submit", async () => {
				if (!this.telemetryEnabled || this.events.size === 0) return;
				const s = [];
				for (const [n, o] of this.events) o.props.type && s.push(o);
				if (s.length !== 0) try {
					if ((await this.sendEvent(s)).ok) for (const n of s) this.events.delete(n.eventId), this.shouldPersist = !0;
				} catch (n) {
					this.logger.warn(n);
				}
			}), E(this, "sendEvent", async (s) => {
				const n = this.getAppDomain() ? "" : "&sp=desktop";
				return await fetch(`${ii}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${_e}${n}`, {
					method: "POST",
					body: JSON.stringify(s)
				});
			}), E(this, "getAppDomain", () => Pn$1().url), this.logger = E$1(t, this.context), this.telemetryEnabled = i, i ? this.restore().then(async () => {
				await this.submit(), this.setEventListeners();
			}) : this.persist();
		}
		get storageKey() {
			return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
		}
	};
	Ho = Object.defineProperty;
	Vi = Object.getOwnPropertySymbols;
	Yo = Object.prototype.hasOwnProperty;
	Jo = Object.prototype.propertyIsEnumerable;
	Qe = (r, e, t) => e in r ? Ho(r, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : r[e] = t;
	qi = (r, e) => {
		for (var t in e || (e = {})) Yo.call(e, t) && Qe(r, t, e[t]);
		if (Vi) for (var t of Vi(e)) Jo.call(e, t) && Qe(r, t, e[t]);
		return r;
	};
	v = (r, e, t) => Qe(r, typeof e != "symbol" ? e + "" : e, t);
	Te = class Te extends h {
		constructor(e) {
			var t;
			super(e), v(this, "protocol", "wc"), v(this, "version", 2), v(this, "name", he), v(this, "relayUrl"), v(this, "projectId"), v(this, "customStoragePrefix"), v(this, "events", new EventEmitter()), v(this, "logger"), v(this, "heartbeat"), v(this, "relayer"), v(this, "crypto"), v(this, "storage"), v(this, "history"), v(this, "expirer"), v(this, "pairing"), v(this, "verify"), v(this, "echoClient"), v(this, "linkModeSupportedApps"), v(this, "eventClient"), v(this, "initialized", !1), v(this, "logChunkController"), v(this, "on", (a, c) => this.events.on(a, c)), v(this, "once", (a, c) => this.events.once(a, c)), v(this, "off", (a, c) => this.events.off(a, c)), v(this, "removeListener", (a, c) => this.events.removeListener(a, c)), v(this, "dispatchEnvelope", ({ topic: a, message: c, sessionExists: h }) => {
				if (!a || !c) return;
				const l = {
					topic: a,
					message: c,
					publishedAt: Date.now(),
					transportType: Q.link_mode
				};
				this.relayer.onLinkMessageEvent(l, { sessionExists: h });
			});
			const i = this.getGlobalCore(e?.customStoragePrefix);
			if (i) try {
				return this.customStoragePrefix = i.customStoragePrefix, this.logger = i.logger, this.heartbeat = i.heartbeat, this.crypto = i.crypto, this.history = i.history, this.expirer = i.expirer, this.storage = i.storage, this.relayer = i.relayer, this.pairing = i.pairing, this.verify = i.verify, this.echoClient = i.echoClient, this.linkModeSupportedApps = i.linkModeSupportedApps, this.eventClient = i.eventClient, this.initialized = i.initialized, this.logChunkController = i.logChunkController, i;
			} catch (a) {
				console.warn("Failed to copy global core", a);
			}
			this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || "wss://relay.walletconnect.org", this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
			const s = k$2({
				level: typeof e?.logger == "string" && e.logger ? e.logger : Et.logger,
				name: he
			}), { logger: n, chunkLoggerController: o } = A$1({
				opts: s,
				maxSizeInBytes: e?.maxLogBlobSizeInBytes,
				loggerOverride: e?.logger
			});
			this.logChunkController = o, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
				var a, c;
				(a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
			}), this.logger = E$1(n, this.name), this.heartbeat = new i$1(), this.crypto = new vi(this, this.logger, e?.keychain), this.history = new ki(this, this.logger), this.expirer = new ji(this, this.logger), this.storage = e != null && e.storage ? e.storage : new h$1(qi(qi({}, It), e?.storageOptions)), this.relayer = new Si({
				core: this,
				logger: this.logger,
				relayUrl: this.relayUrl,
				projectId: this.projectId
			}), this.pairing = new Li(this, this.logger), this.verify = new Ui(this, this.logger, this.storage), this.echoClient = new Mi(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Bi(this, this.logger, e?.telemetryEnabled), this.setGlobalCore(this);
		}
		static async init(e) {
			const t = new Te(e);
			await t.initialize();
			const i = await t.crypto.getClientId();
			return await t.storage.setItem(jt, i), t;
		}
		get context() {
			return y$2(this.logger);
		}
		async start() {
			this.initialized || await this.initialize();
		}
		async getLogsBlob() {
			var e;
			return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({ clientId: await this.crypto.getClientId() });
		}
		async addLinkModeSupportedApp(e) {
			this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e), await this.storage.setItem("WALLETCONNECT_LINK_MODE_APPS", this.linkModeSupportedApps));
		}
		async initialize() {
			this.logger.trace("Initialized");
			try {
				await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem("WALLETCONNECT_LINK_MODE_APPS") || [], this.initialized = !0, this.logger.info("Core Initialization Success");
			} catch (e) {
				throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
			}
		}
		getGlobalCore(e = "") {
			try {
				if (this.isGlobalCoreDisabled()) return;
				const t = `_walletConnectCore_${e}`, i = `${t}_count`;
				return globalThis[i] = (globalThis[i] || 0) + 1, globalThis[i] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`), globalThis[t];
			} catch (t) {
				console.warn("Failed to get global WalletConnect core", t);
				return;
			}
		}
		setGlobalCore(e) {
			var t;
			try {
				if (this.isGlobalCoreDisabled()) return;
				const i = `_walletConnectCore_${((t = e.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
				globalThis[i] = e;
			} catch (i) {
				console.warn("Failed to set global WalletConnect core", i);
			}
		}
		isGlobalCoreDisabled() {
			try {
				return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
			} catch {
				return !0;
			}
		}
	};
	Xo = Te;
}));
//#endregion
export { init_index_es$2 as $, Nt$1 as A, ba as B, Et$1 as C, Ji as D, Io$1 as E, Ra as F, fs as G, ca as H, Sa as I, ha as J, ga as K, Si$1 as L, Oe as M, Oi$1 as N, Ne as O, Pc as P, index_es_exports as Q, Xc as R, Ei$1 as S, Ii$1 as T, dr$1 as U, bi$1 as V, ds as W, hs as X, hr$1 as Y, ht as Z, init_index_es$1 as _, xi$1 as _t, Xo as a, oi$1 as at, De as b, init_index_es as c, pt as ct, sr as d, ua as dt, is as et, tr as f, va as ft, V$1 as g, xe as gt, J as h, xa as ht, Q as i, nt as it, Oa as j, No$1 as k, ir as l, qt$1 as lt, zi as m, wa as mt, G as n, ls as nt, Y as o, pa as ot, ue as p, vi$1 as pt, gi$1 as q, M as r, ma as rt, er as s, pe$1 as st, C as t, kc as tt, re as u, se$1 as ut, Ai$1 as v, ya as vt, Ia as w, Ea as x, Bo$1 as y, aa as z };
