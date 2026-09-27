import { a as __require, n as __esmMin, t as __commonJSMin } from "../_runtime.mjs";
import { A as aoutput$1, B as wrapConstructor, C as isLE$1, D as abytes$1, E as wrapConstructor$1, F as byteSwap32, G as init__assert, H as aexists, I as init_utils, L as isLE, O as aexists$1, P as Hash, R as toBytes, S as init_utils$1, T as u32$1, U as anumber, V as abytes, W as aoutput, a as init_utils$2, b as Hash$1, c as u32$2, d as aexists$2, f as anumber$2, i as byteSwap32$2, j as init__assert$1, k as anumber$1, l as wrapConstructor$2, m as init__assert$2, o as isLE$2, p as aoutput$2, r as Hash$2, s as toBytes$2, u as abytes$2, w as toBytes$1, x as byteSwap32$1, z as u32 } from "./noble__curves+noble__hashes.mjs";
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/_u64.js
function fromBig$2(n, le = false) {
	if (le) return {
		h: Number(n & U32_MASK64$2),
		l: Number(n >> _32n$2 & U32_MASK64$2)
	};
	return {
		h: Number(n >> _32n$2 & U32_MASK64$2) | 0,
		l: Number(n & U32_MASK64$2) | 0
	};
}
function split$2(lst, le = false) {
	let Ah = new Uint32Array(lst.length);
	let Al = new Uint32Array(lst.length);
	for (let i = 0; i < lst.length; i++) {
		const { h, l } = fromBig$2(lst[i], le);
		[Ah[i], Al[i]] = [h, l];
	}
	return [Ah, Al];
}
var U32_MASK64$2, _32n$2, rotlSH$2, rotlSL$2, rotlBH$2, rotlBL$2;
var init__u64$2 = __esmMin((() => {
	U32_MASK64$2 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
	_32n$2 = /* @__PURE__ */ BigInt(32);
	rotlSH$2 = (h, l, s) => h << s | l >>> 32 - s;
	rotlSL$2 = (h, l, s) => l << s | h >>> 32 - s;
	rotlBH$2 = (h, l, s) => l << s - 32 | h >>> 64 - s;
	rotlBL$2 = (h, l, s) => h << s - 32 | l >>> 64 - s;
}));
//#endregion
//#region node_modules/@reown/appkit-controllers/node_modules/@noble/hashes/esm/sha3.js
/** `keccakf1600` internal function, additionally allows to adjust round count. */
function keccakP$2(s, rounds = 24) {
	const B = /* @__PURE__ */ new Uint32Array(10);
	for (let round = 24 - rounds; round < 24; round++) {
		for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
		for (let x = 0; x < 10; x += 2) {
			const idx1 = (x + 8) % 10;
			const idx0 = (x + 2) % 10;
			const B0 = B[idx0];
			const B1 = B[idx0 + 1];
			const Th = rotlH$2(B0, B1, 1) ^ B[idx1];
			const Tl = rotlL$2(B0, B1, 1) ^ B[idx1 + 1];
			for (let y = 0; y < 50; y += 10) {
				s[x + y] ^= Th;
				s[x + y + 1] ^= Tl;
			}
		}
		let curH = s[2];
		let curL = s[3];
		for (let t = 0; t < 24; t++) {
			const shift = SHA3_ROTL$2[t];
			const Th = rotlH$2(curH, curL, shift);
			const Tl = rotlL$2(curH, curL, shift);
			const PI = SHA3_PI$2[t];
			curH = s[PI];
			curL = s[PI + 1];
			s[PI] = Th;
			s[PI + 1] = Tl;
		}
		for (let y = 0; y < 50; y += 10) {
			for (let x = 0; x < 10; x++) B[x] = s[y + x];
			for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
		}
		s[0] ^= SHA3_IOTA_H$2[round];
		s[1] ^= SHA3_IOTA_L$2[round];
	}
	B.fill(0);
}
var SHA3_PI$2, SHA3_ROTL$2, _SHA3_IOTA$2, _0n$2, _1n$2, _2n$2, _7n$2, _256n$2, _0x71n$2, SHA3_IOTA_H$2, SHA3_IOTA_L$2, rotlH$2, rotlL$2, Keccak$2, gen$2, keccak_256$2;
var init_sha3$2 = __esmMin((() => {
	init__assert();
	init__u64$2();
	init_utils();
	SHA3_PI$2 = [];
	SHA3_ROTL$2 = [];
	_SHA3_IOTA$2 = [];
	_0n$2 = /* @__PURE__ */ BigInt(0);
	_1n$2 = /* @__PURE__ */ BigInt(1);
	_2n$2 = /* @__PURE__ */ BigInt(2);
	_7n$2 = /* @__PURE__ */ BigInt(7);
	_256n$2 = /* @__PURE__ */ BigInt(256);
	_0x71n$2 = /* @__PURE__ */ BigInt(113);
	for (let round = 0, R = _1n$2, x = 1, y = 0; round < 24; round++) {
		[x, y] = [y, (2 * x + 3 * y) % 5];
		SHA3_PI$2.push(2 * (5 * y + x));
		SHA3_ROTL$2.push((round + 1) * (round + 2) / 2 % 64);
		let t = _0n$2;
		for (let j = 0; j < 7; j++) {
			R = (R << _1n$2 ^ (R >> _7n$2) * _0x71n$2) % _256n$2;
			if (R & _2n$2) t ^= _1n$2 << (_1n$2 << /* @__PURE__ */ BigInt(j)) - _1n$2;
		}
		_SHA3_IOTA$2.push(t);
	}
	[SHA3_IOTA_H$2, SHA3_IOTA_L$2] = /* @__PURE__ */ split$2(_SHA3_IOTA$2, true);
	rotlH$2 = (h, l, s) => s > 32 ? rotlBH$2(h, l, s) : rotlSH$2(h, l, s);
	rotlL$2 = (h, l, s) => s > 32 ? rotlBL$2(h, l, s) : rotlSL$2(h, l, s);
	Keccak$2 = class Keccak$2 extends Hash {
		constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
			super();
			this.blockLen = blockLen;
			this.suffix = suffix;
			this.outputLen = outputLen;
			this.enableXOF = enableXOF;
			this.rounds = rounds;
			this.pos = 0;
			this.posOut = 0;
			this.finished = false;
			this.destroyed = false;
			anumber(outputLen);
			if (0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
			this.state = /* @__PURE__ */ new Uint8Array(200);
			this.state32 = u32(this.state);
		}
		keccak() {
			if (!isLE) byteSwap32(this.state32);
			keccakP$2(this.state32, this.rounds);
			if (!isLE) byteSwap32(this.state32);
			this.posOut = 0;
			this.pos = 0;
		}
		update(data) {
			aexists(this);
			const { blockLen, state } = this;
			data = toBytes(data);
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
				if (this.pos === blockLen) this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = true;
			const { state, suffix, pos, blockLen } = this;
			state[pos] ^= suffix;
			if ((suffix & 128) !== 0 && pos === blockLen - 1) this.keccak();
			state[blockLen - 1] ^= 128;
			this.keccak();
		}
		writeInto(out) {
			aexists(this, false);
			abytes(out);
			this.finish();
			const bufferOut = this.state;
			const { blockLen } = this;
			for (let pos = 0, len = out.length; pos < len;) {
				if (this.posOut >= blockLen) this.keccak();
				const take = Math.min(blockLen - this.posOut, len - pos);
				out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
				this.posOut += take;
				pos += take;
			}
			return out;
		}
		xofInto(out) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(out);
		}
		xof(bytes) {
			anumber(bytes);
			return this.xofInto(new Uint8Array(bytes));
		}
		digestInto(out) {
			aoutput(out, this);
			if (this.finished) throw new Error("digest() was already called");
			this.writeInto(out);
			this.destroy();
			return out;
		}
		digest() {
			return this.digestInto(new Uint8Array(this.outputLen));
		}
		destroy() {
			this.destroyed = true;
			this.state.fill(0);
		}
		_cloneInto(to) {
			const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
			to || (to = new Keccak$2(blockLen, suffix, outputLen, enableXOF, rounds));
			to.state32.set(this.state32);
			to.pos = this.pos;
			to.posOut = this.posOut;
			to.finished = this.finished;
			to.rounds = rounds;
			to.suffix = suffix;
			to.outputLen = outputLen;
			to.enableXOF = enableXOF;
			to.destroyed = this.destroyed;
			return to;
		}
	};
	gen$2 = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak$2(blockLen, suffix, outputLen));
	keccak_256$2 = /* @__PURE__ */ gen$2(1, 136, 32);
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/_u64.js
function fromBig$1(n, le = false) {
	if (le) return {
		h: Number(n & U32_MASK64$1),
		l: Number(n >> _32n$1 & U32_MASK64$1)
	};
	return {
		h: Number(n >> _32n$1 & U32_MASK64$1) | 0,
		l: Number(n & U32_MASK64$1) | 0
	};
}
function split$1(lst, le = false) {
	let Ah = new Uint32Array(lst.length);
	let Al = new Uint32Array(lst.length);
	for (let i = 0; i < lst.length; i++) {
		const { h, l } = fromBig$1(lst[i], le);
		[Ah[i], Al[i]] = [h, l];
	}
	return [Ah, Al];
}
var U32_MASK64$1, _32n$1, rotlSH$1, rotlSL$1, rotlBH$1, rotlBL$1;
var init__u64$1 = __esmMin((() => {
	U32_MASK64$1 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
	_32n$1 = /* @__PURE__ */ BigInt(32);
	rotlSH$1 = (h, l, s) => h << s | l >>> 32 - s;
	rotlSL$1 = (h, l, s) => l << s | h >>> 32 - s;
	rotlBH$1 = (h, l, s) => l << s - 32 | h >>> 64 - s;
	rotlBL$1 = (h, l, s) => h << s - 32 | l >>> 64 - s;
}));
//#endregion
//#region node_modules/@reown/appkit/node_modules/@noble/hashes/esm/sha3.js
/** `keccakf1600` internal function, additionally allows to adjust round count. */
function keccakP$1(s, rounds = 24) {
	const B = /* @__PURE__ */ new Uint32Array(10);
	for (let round = 24 - rounds; round < 24; round++) {
		for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
		for (let x = 0; x < 10; x += 2) {
			const idx1 = (x + 8) % 10;
			const idx0 = (x + 2) % 10;
			const B0 = B[idx0];
			const B1 = B[idx0 + 1];
			const Th = rotlH$1(B0, B1, 1) ^ B[idx1];
			const Tl = rotlL$1(B0, B1, 1) ^ B[idx1 + 1];
			for (let y = 0; y < 50; y += 10) {
				s[x + y] ^= Th;
				s[x + y + 1] ^= Tl;
			}
		}
		let curH = s[2];
		let curL = s[3];
		for (let t = 0; t < 24; t++) {
			const shift = SHA3_ROTL$1[t];
			const Th = rotlH$1(curH, curL, shift);
			const Tl = rotlL$1(curH, curL, shift);
			const PI = SHA3_PI$1[t];
			curH = s[PI];
			curL = s[PI + 1];
			s[PI] = Th;
			s[PI + 1] = Tl;
		}
		for (let y = 0; y < 50; y += 10) {
			for (let x = 0; x < 10; x++) B[x] = s[y + x];
			for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
		}
		s[0] ^= SHA3_IOTA_H$1[round];
		s[1] ^= SHA3_IOTA_L$1[round];
	}
	B.fill(0);
}
var SHA3_PI$1, SHA3_ROTL$1, _SHA3_IOTA$1, _0n$1, _1n$1, _2n$1, _7n$1, _256n$1, _0x71n$1, SHA3_IOTA_H$1, SHA3_IOTA_L$1, rotlH$1, rotlL$1, Keccak$1, gen$1, keccak_256$1;
var init_sha3$1 = __esmMin((() => {
	init__assert$1();
	init__u64$1();
	init_utils$1();
	SHA3_PI$1 = [];
	SHA3_ROTL$1 = [];
	_SHA3_IOTA$1 = [];
	_0n$1 = /* @__PURE__ */ BigInt(0);
	_1n$1 = /* @__PURE__ */ BigInt(1);
	_2n$1 = /* @__PURE__ */ BigInt(2);
	_7n$1 = /* @__PURE__ */ BigInt(7);
	_256n$1 = /* @__PURE__ */ BigInt(256);
	_0x71n$1 = /* @__PURE__ */ BigInt(113);
	for (let round = 0, R = _1n$1, x = 1, y = 0; round < 24; round++) {
		[x, y] = [y, (2 * x + 3 * y) % 5];
		SHA3_PI$1.push(2 * (5 * y + x));
		SHA3_ROTL$1.push((round + 1) * (round + 2) / 2 % 64);
		let t = _0n$1;
		for (let j = 0; j < 7; j++) {
			R = (R << _1n$1 ^ (R >> _7n$1) * _0x71n$1) % _256n$1;
			if (R & _2n$1) t ^= _1n$1 << (_1n$1 << /* @__PURE__ */ BigInt(j)) - _1n$1;
		}
		_SHA3_IOTA$1.push(t);
	}
	[SHA3_IOTA_H$1, SHA3_IOTA_L$1] = /* @__PURE__ */ split$1(_SHA3_IOTA$1, true);
	rotlH$1 = (h, l, s) => s > 32 ? rotlBH$1(h, l, s) : rotlSH$1(h, l, s);
	rotlL$1 = (h, l, s) => s > 32 ? rotlBL$1(h, l, s) : rotlSL$1(h, l, s);
	Keccak$1 = class Keccak$1 extends Hash$1 {
		constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
			super();
			this.blockLen = blockLen;
			this.suffix = suffix;
			this.outputLen = outputLen;
			this.enableXOF = enableXOF;
			this.rounds = rounds;
			this.pos = 0;
			this.posOut = 0;
			this.finished = false;
			this.destroyed = false;
			anumber$1(outputLen);
			if (0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
			this.state = /* @__PURE__ */ new Uint8Array(200);
			this.state32 = u32$1(this.state);
		}
		keccak() {
			if (!isLE$1) byteSwap32$1(this.state32);
			keccakP$1(this.state32, this.rounds);
			if (!isLE$1) byteSwap32$1(this.state32);
			this.posOut = 0;
			this.pos = 0;
		}
		update(data) {
			aexists$1(this);
			const { blockLen, state } = this;
			data = toBytes$1(data);
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
				if (this.pos === blockLen) this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = true;
			const { state, suffix, pos, blockLen } = this;
			state[pos] ^= suffix;
			if ((suffix & 128) !== 0 && pos === blockLen - 1) this.keccak();
			state[blockLen - 1] ^= 128;
			this.keccak();
		}
		writeInto(out) {
			aexists$1(this, false);
			abytes$1(out);
			this.finish();
			const bufferOut = this.state;
			const { blockLen } = this;
			for (let pos = 0, len = out.length; pos < len;) {
				if (this.posOut >= blockLen) this.keccak();
				const take = Math.min(blockLen - this.posOut, len - pos);
				out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
				this.posOut += take;
				pos += take;
			}
			return out;
		}
		xofInto(out) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(out);
		}
		xof(bytes) {
			anumber$1(bytes);
			return this.xofInto(new Uint8Array(bytes));
		}
		digestInto(out) {
			aoutput$1(out, this);
			if (this.finished) throw new Error("digest() was already called");
			this.writeInto(out);
			this.destroy();
			return out;
		}
		digest() {
			return this.digestInto(new Uint8Array(this.outputLen));
		}
		destroy() {
			this.destroyed = true;
			this.state.fill(0);
		}
		_cloneInto(to) {
			const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
			to || (to = new Keccak$1(blockLen, suffix, outputLen, enableXOF, rounds));
			to.state32.set(this.state32);
			to.pos = this.pos;
			to.posOut = this.posOut;
			to.finished = this.finished;
			to.rounds = rounds;
			to.suffix = suffix;
			to.outputLen = outputLen;
			to.enableXOF = enableXOF;
			to.destroyed = this.destroyed;
			return to;
		}
	};
	gen$1 = (suffix, blockLen, outputLen) => wrapConstructor$1(() => new Keccak$1(blockLen, suffix, outputLen));
	keccak_256$1 = /* @__PURE__ */ gen$1(1, 136, 32);
}));
//#endregion
//#region node_modules/viem/node_modules/@noble/hashes/_u64.js
var require__u64$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#region node_modules/viem/node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.crypto = void 0;
	/**
	* Internal webcrypto alias.
	* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
	* Falls back to Node.js built-in crypto for Node.js <=v14.
	* See utils.ts for details.
	* @module
	*/
	var nc$3 = __require("node:crypto");
	exports.crypto = nc$3 && typeof nc$3 === "object" && "webcrypto" in nc$3 ? nc$3.webcrypto : nc$3 && typeof nc$3 === "object" && "randomBytes" in nc$3 ? nc$3 : void 0;
}));
//#endregion
//#region node_modules/viem/node_modules/@noble/hashes/utils.js
var require_utils$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
	var crypto_1 = require_cryptoNode$3();
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
//#region node_modules/viem/node_modules/@noble/hashes/sha3.js
var require_sha3$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
	exports.keccakP = keccakP;
	/**
	* SHA3 (keccak) hash function, based on a new "Sponge function" design.
	* Different from older hashes, the internal state is bigger than output size.
	*
	* Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
	* [Website](https://keccak.team/keccak.html),
	* [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
	*
	* Check out `sha3-addons` module for cSHAKE, k12, and others.
	* @module
	*/
	var _u64_ts_1 = require__u64$3();
	var utils_ts_1 = require_utils$3();
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	var _2n = BigInt(2);
	var _7n = BigInt(7);
	var _256n = BigInt(256);
	var _0x71n = BigInt(113);
	var SHA3_PI = [];
	var SHA3_ROTL = [];
	var _SHA3_IOTA = [];
	for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
		[x, y] = [y, (2 * x + 3 * y) % 5];
		SHA3_PI.push(2 * (5 * y + x));
		SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
		let t = _0n;
		for (let j = 0; j < 7; j++) {
			R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
			if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
		}
		_SHA3_IOTA.push(t);
	}
	var IOTAS = (0, _u64_ts_1.split)(_SHA3_IOTA, true);
	var SHA3_IOTA_H = IOTAS[0];
	var SHA3_IOTA_L = IOTAS[1];
	var rotlH = (h, l, s) => s > 32 ? (0, _u64_ts_1.rotlBH)(h, l, s) : (0, _u64_ts_1.rotlSH)(h, l, s);
	var rotlL = (h, l, s) => s > 32 ? (0, _u64_ts_1.rotlBL)(h, l, s) : (0, _u64_ts_1.rotlSL)(h, l, s);
	/** `keccakf1600` internal function, additionally allows to adjust round count. */
	function keccakP(s, rounds = 24) {
		const B = /* @__PURE__ */ new Uint32Array(10);
		for (let round = 24 - rounds; round < 24; round++) {
			for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
			for (let x = 0; x < 10; x += 2) {
				const idx1 = (x + 8) % 10;
				const idx0 = (x + 2) % 10;
				const B0 = B[idx0];
				const B1 = B[idx0 + 1];
				const Th = rotlH(B0, B1, 1) ^ B[idx1];
				const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
				for (let y = 0; y < 50; y += 10) {
					s[x + y] ^= Th;
					s[x + y + 1] ^= Tl;
				}
			}
			let curH = s[2];
			let curL = s[3];
			for (let t = 0; t < 24; t++) {
				const shift = SHA3_ROTL[t];
				const Th = rotlH(curH, curL, shift);
				const Tl = rotlL(curH, curL, shift);
				const PI = SHA3_PI[t];
				curH = s[PI];
				curL = s[PI + 1];
				s[PI] = Th;
				s[PI + 1] = Tl;
			}
			for (let y = 0; y < 50; y += 10) {
				for (let x = 0; x < 10; x++) B[x] = s[y + x];
				for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
			}
			s[0] ^= SHA3_IOTA_H[round];
			s[1] ^= SHA3_IOTA_L[round];
		}
		(0, utils_ts_1.clean)(B);
	}
	/** Keccak sponge function. */
	var Keccak = class Keccak extends utils_ts_1.Hash {
		constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
			super();
			this.pos = 0;
			this.posOut = 0;
			this.finished = false;
			this.destroyed = false;
			this.enableXOF = false;
			this.blockLen = blockLen;
			this.suffix = suffix;
			this.outputLen = outputLen;
			this.enableXOF = enableXOF;
			this.rounds = rounds;
			(0, utils_ts_1.anumber)(outputLen);
			if (!(0 < blockLen && blockLen < 200)) throw new Error("only keccak-f1600 function is supported");
			this.state = /* @__PURE__ */ new Uint8Array(200);
			this.state32 = (0, utils_ts_1.u32)(this.state);
		}
		clone() {
			return this._cloneInto();
		}
		keccak() {
			(0, utils_ts_1.swap32IfBE)(this.state32);
			keccakP(this.state32, this.rounds);
			(0, utils_ts_1.swap32IfBE)(this.state32);
			this.posOut = 0;
			this.pos = 0;
		}
		update(data) {
			(0, utils_ts_1.aexists)(this);
			data = (0, utils_ts_1.toBytes)(data);
			(0, utils_ts_1.abytes)(data);
			const { blockLen, state } = this;
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
				if (this.pos === blockLen) this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = true;
			const { state, suffix, pos, blockLen } = this;
			state[pos] ^= suffix;
			if ((suffix & 128) !== 0 && pos === blockLen - 1) this.keccak();
			state[blockLen - 1] ^= 128;
			this.keccak();
		}
		writeInto(out) {
			(0, utils_ts_1.aexists)(this, false);
			(0, utils_ts_1.abytes)(out);
			this.finish();
			const bufferOut = this.state;
			const { blockLen } = this;
			for (let pos = 0, len = out.length; pos < len;) {
				if (this.posOut >= blockLen) this.keccak();
				const take = Math.min(blockLen - this.posOut, len - pos);
				out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
				this.posOut += take;
				pos += take;
			}
			return out;
		}
		xofInto(out) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(out);
		}
		xof(bytes) {
			(0, utils_ts_1.anumber)(bytes);
			return this.xofInto(new Uint8Array(bytes));
		}
		digestInto(out) {
			(0, utils_ts_1.aoutput)(out, this);
			if (this.finished) throw new Error("digest() was already called");
			this.writeInto(out);
			this.destroy();
			return out;
		}
		digest() {
			return this.digestInto(new Uint8Array(this.outputLen));
		}
		destroy() {
			this.destroyed = true;
			(0, utils_ts_1.clean)(this.state);
		}
		_cloneInto(to) {
			const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
			to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
			to.state32.set(this.state32);
			to.pos = this.pos;
			to.posOut = this.posOut;
			to.finished = this.finished;
			to.rounds = rounds;
			to.suffix = suffix;
			to.outputLen = outputLen;
			to.enableXOF = enableXOF;
			to.destroyed = this.destroyed;
			return to;
		}
	};
	exports.Keccak = Keccak;
	var gen = (suffix, blockLen, outputLen) => (0, utils_ts_1.createHasher)(() => new Keccak(blockLen, suffix, outputLen));
	/** SHA3-224 hash function. */
	exports.sha3_224 = (() => gen(6, 144, 28))();
	/** SHA3-256 hash function. Different from keccak-256. */
	exports.sha3_256 = (() => gen(6, 136, 32))();
	/** SHA3-384 hash function. */
	exports.sha3_384 = (() => gen(6, 104, 48))();
	/** SHA3-512 hash function. */
	exports.sha3_512 = (() => gen(6, 72, 64))();
	/** keccak-224 hash function. */
	exports.keccak_224 = (() => gen(1, 144, 28))();
	/** keccak-256 hash function. Different from SHA3-256. */
	exports.keccak_256 = (() => gen(1, 136, 32))();
	/** keccak-384 hash function. */
	exports.keccak_384 = (() => gen(1, 104, 48))();
	/** keccak-512 hash function. */
	exports.keccak_512 = (() => gen(1, 72, 64))();
	var genShake = (suffix, blockLen, outputLen) => (0, utils_ts_1.createXOFer)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
	/** SHAKE128 XOF with 128-bit security. */
	exports.shake128 = (() => genShake(31, 168, 16))();
	/** SHAKE256 XOF with 256-bit security. */
	exports.shake256 = (() => genShake(31, 136, 32))();
}));
//#endregion
//#region node_modules/viem/node_modules/@noble/hashes/_md.js
var require__md$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SHA512_IV = exports.SHA384_IV = exports.SHA224_IV = exports.SHA256_IV = exports.HashMD = void 0;
	exports.setBigUint64 = setBigUint64;
	exports.Chi = Chi;
	exports.Maj = Maj;
	/**
	* Internal Merkle-Damgard hash utils.
	* @module
	*/
	var utils_ts_1 = require_utils$3();
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
//#region node_modules/viem/node_modules/@noble/hashes/sha2.js
var require_sha2$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sha512_224 = exports.sha512_256 = exports.sha384 = exports.sha512 = exports.sha224 = exports.sha256 = exports.SHA512_256 = exports.SHA512_224 = exports.SHA384 = exports.SHA512 = exports.SHA224 = exports.SHA256 = void 0;
	/**
	* SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
	* SHA256 is the fastest hash implementable in JS, even faster than Blake3.
	* Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
	* [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
	* @module
	*/
	var _md_ts_1 = require__md$3();
	var u64 = require__u64$3();
	var utils_ts_1 = require_utils$3();
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
//#region node_modules/viem/node_modules/@noble/hashes/sha256.js
var require_sha256$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sha224 = exports.SHA224 = exports.sha256 = exports.SHA256 = void 0;
	/**
	* SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
	*
	* To break sha256 using birthday attack, attackers need to try 2^128 hashes.
	* BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
	*
	* Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
	* @module
	* @deprecated
	*/
	var sha2_ts_1 = require_sha2$3();
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.SHA256 = sha2_ts_1.SHA256;
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.sha256 = sha2_ts_1.sha256;
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.SHA224 = sha2_ts_1.SHA224;
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.sha224 = sha2_ts_1.sha224;
}));
//#endregion
//#region node_modules/viem/node_modules/@noble/hashes/legacy.js
var require_legacy$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ripemd160 = exports.RIPEMD160 = exports.md5 = exports.MD5 = exports.sha1 = exports.SHA1 = void 0;
	/**
	
	SHA1 (RFC 3174), MD5 (RFC 1321) and RIPEMD160 (RFC 2286) legacy, weak hash functions.
	Don't use them in a new protocol. What "weak" means:
	
	- Collisions can be made with 2^18 effort in MD5, 2^60 in SHA1, 2^80 in RIPEMD160.
	- No practical pre-image attacks (only theoretical, 2^123.4)
	- HMAC seems kinda ok: https://datatracker.ietf.org/doc/html/rfc6151
	* @module
	*/
	var _md_ts_1 = require__md$3();
	var utils_ts_1 = require_utils$3();
	/** Initial SHA1 state */
	var SHA1_IV = /* @__PURE__ */ Uint32Array.from([
		1732584193,
		4023233417,
		2562383102,
		271733878,
		3285377520
	]);
	var SHA1_W = /* @__PURE__ */ new Uint32Array(80);
	/** SHA1 legacy hash class. */
	var SHA1 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 20, 8, false);
			this.A = SHA1_IV[0] | 0;
			this.B = SHA1_IV[1] | 0;
			this.C = SHA1_IV[2] | 0;
			this.D = SHA1_IV[3] | 0;
			this.E = SHA1_IV[4] | 0;
		}
		get() {
			const { A, B, C, D, E } = this;
			return [
				A,
				B,
				C,
				D,
				E
			];
		}
		set(A, B, C, D, E) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA1_W[i] = view.getUint32(offset, false);
			for (let i = 16; i < 80; i++) SHA1_W[i] = (0, utils_ts_1.rotl)(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
			let { A, B, C, D, E } = this;
			for (let i = 0; i < 80; i++) {
				let F, K;
				if (i < 20) {
					F = (0, _md_ts_1.Chi)(B, C, D);
					K = 1518500249;
				} else if (i < 40) {
					F = B ^ C ^ D;
					K = 1859775393;
				} else if (i < 60) {
					F = (0, _md_ts_1.Maj)(B, C, D);
					K = 2400959708;
				} else {
					F = B ^ C ^ D;
					K = 3395469782;
				}
				const T = (0, utils_ts_1.rotl)(A, 5) + F + E + K + SHA1_W[i] | 0;
				E = D;
				D = C;
				C = (0, utils_ts_1.rotl)(B, 30);
				B = A;
				A = T;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			this.set(A, B, C, D, E);
		}
		roundClean() {
			(0, utils_ts_1.clean)(SHA1_W);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.SHA1 = SHA1;
	/** SHA1 (RFC 3174) legacy hash function. It was cryptographically broken. */
	exports.sha1 = (0, utils_ts_1.createHasher)(() => new SHA1());
	/** Per-round constants */
	var p32 = /* @__PURE__ */ Math.pow(2, 32);
	var K = /* @__PURE__ */ Array.from({ length: 64 }, (_, i) => Math.floor(p32 * Math.abs(Math.sin(i + 1))));
	/** md5 initial state: same as sha1, but 4 u32 instead of 5. */
	var MD5_IV = /* @__PURE__ */ SHA1_IV.slice(0, 4);
	var MD5_W = /* @__PURE__ */ new Uint32Array(16);
	/** MD5 legacy hash class. */
	var MD5 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 16, 8, true);
			this.A = MD5_IV[0] | 0;
			this.B = MD5_IV[1] | 0;
			this.C = MD5_IV[2] | 0;
			this.D = MD5_IV[3] | 0;
		}
		get() {
			const { A, B, C, D } = this;
			return [
				A,
				B,
				C,
				D
			];
		}
		set(A, B, C, D) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) MD5_W[i] = view.getUint32(offset, true);
			let { A, B, C, D } = this;
			for (let i = 0; i < 64; i++) {
				let F, g, s;
				if (i < 16) {
					F = (0, _md_ts_1.Chi)(B, C, D);
					g = i;
					s = [
						7,
						12,
						17,
						22
					];
				} else if (i < 32) {
					F = (0, _md_ts_1.Chi)(D, B, C);
					g = (5 * i + 1) % 16;
					s = [
						5,
						9,
						14,
						20
					];
				} else if (i < 48) {
					F = B ^ C ^ D;
					g = (3 * i + 5) % 16;
					s = [
						4,
						11,
						16,
						23
					];
				} else {
					F = C ^ (B | ~D);
					g = 7 * i % 16;
					s = [
						6,
						10,
						15,
						21
					];
				}
				F = F + A + K[i] + MD5_W[g];
				A = D;
				D = C;
				C = B;
				B = B + (0, utils_ts_1.rotl)(F, s[i % 4]);
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			this.set(A, B, C, D);
		}
		roundClean() {
			(0, utils_ts_1.clean)(MD5_W);
		}
		destroy() {
			this.set(0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.MD5 = MD5;
	/**
	* MD5 (RFC 1321) legacy hash function. It was cryptographically broken.
	* MD5 architecture is similar to SHA1, with some differences:
	* - Reduced output length: 16 bytes (128 bit) instead of 20
	* - 64 rounds, instead of 80
	* - Little-endian: could be faster, but will require more code
	* - Non-linear index selection: huge speed-up for unroll
	* - Per round constants: more memory accesses, additional speed-up for unroll
	*/
	exports.md5 = (0, utils_ts_1.createHasher)(() => new MD5());
	var Rho160 = /* @__PURE__ */ Uint8Array.from([
		7,
		4,
		13,
		1,
		10,
		6,
		15,
		3,
		12,
		0,
		9,
		5,
		2,
		14,
		11,
		8
	]);
	var Id160 = /* @__PURE__ */ (() => Uint8Array.from(new Array(16).fill(0).map((_, i) => i)))();
	var Pi160 = /* @__PURE__ */ (() => Id160.map((i) => (9 * i + 5) % 16))();
	var idxLR = /* @__PURE__ */ (() => {
		const res = [[Id160], [Pi160]];
		for (let i = 0; i < 4; i++) for (let j of res) j.push(j[i].map((k) => Rho160[k]));
		return res;
	})();
	var idxL = /* @__PURE__ */ (() => idxLR[0])();
	var idxR = /* @__PURE__ */ (() => idxLR[1])();
	var shifts160 = /* @__PURE__ */ [
		[
			11,
			14,
			15,
			12,
			5,
			8,
			7,
			9,
			11,
			13,
			14,
			15,
			6,
			7,
			9,
			8
		],
		[
			12,
			13,
			11,
			15,
			6,
			9,
			9,
			7,
			12,
			15,
			11,
			13,
			7,
			8,
			7,
			7
		],
		[
			13,
			15,
			14,
			11,
			7,
			7,
			6,
			8,
			13,
			14,
			13,
			12,
			5,
			5,
			6,
			9
		],
		[
			14,
			11,
			12,
			14,
			8,
			6,
			5,
			5,
			15,
			12,
			15,
			14,
			9,
			9,
			8,
			6
		],
		[
			15,
			12,
			13,
			13,
			9,
			5,
			8,
			6,
			14,
			11,
			12,
			11,
			8,
			6,
			5,
			5
		]
	].map((i) => Uint8Array.from(i));
	var shiftsL160 = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts160[i][j]));
	var shiftsR160 = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts160[i][j]));
	var Kl160 = /* @__PURE__ */ Uint32Array.from([
		0,
		1518500249,
		1859775393,
		2400959708,
		2840853838
	]);
	var Kr160 = /* @__PURE__ */ Uint32Array.from([
		1352829926,
		1548603684,
		1836072691,
		2053994217,
		0
	]);
	function ripemd_f(group, x, y, z) {
		if (group === 0) return x ^ y ^ z;
		if (group === 1) return x & y | ~x & z;
		if (group === 2) return (x | ~y) ^ z;
		if (group === 3) return x & z | y & ~z;
		return x ^ (y | ~z);
	}
	var BUF_160 = /* @__PURE__ */ new Uint32Array(16);
	var RIPEMD160 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 20, 8, true);
			this.h0 = 1732584193;
			this.h1 = -271733879;
			this.h2 = -1732584194;
			this.h3 = 271733878;
			this.h4 = -1009589776;
		}
		get() {
			const { h0, h1, h2, h3, h4 } = this;
			return [
				h0,
				h1,
				h2,
				h3,
				h4
			];
		}
		set(h0, h1, h2, h3, h4) {
			this.h0 = h0 | 0;
			this.h1 = h1 | 0;
			this.h2 = h2 | 0;
			this.h3 = h3 | 0;
			this.h4 = h4 | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) BUF_160[i] = view.getUint32(offset, true);
			let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
			for (let group = 0; group < 5; group++) {
				const rGroup = 4 - group;
				const hbl = Kl160[group], hbr = Kr160[group];
				const rl = idxL[group], rr = idxR[group];
				const sl = shiftsL160[group], sr = shiftsR160[group];
				for (let i = 0; i < 16; i++) {
					const tl = (0, utils_ts_1.rotl)(al + ripemd_f(group, bl, cl, dl) + BUF_160[rl[i]] + hbl, sl[i]) + el | 0;
					al = el, el = dl, dl = (0, utils_ts_1.rotl)(cl, 10) | 0, cl = bl, bl = tl;
				}
				for (let i = 0; i < 16; i++) {
					const tr = (0, utils_ts_1.rotl)(ar + ripemd_f(rGroup, br, cr, dr) + BUF_160[rr[i]] + hbr, sr[i]) + er | 0;
					ar = er, er = dr, dr = (0, utils_ts_1.rotl)(cr, 10) | 0, cr = br, br = tr;
				}
			}
			this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
		}
		roundClean() {
			(0, utils_ts_1.clean)(BUF_160);
		}
		destroy() {
			this.destroyed = true;
			(0, utils_ts_1.clean)(this.buffer);
			this.set(0, 0, 0, 0, 0);
		}
	};
	exports.RIPEMD160 = RIPEMD160;
	/**
	* RIPEMD-160 - a legacy hash function from 1990s.
	* * https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
	* * https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
	*/
	exports.ripemd160 = (0, utils_ts_1.createHasher)(() => new RIPEMD160());
}));
//#endregion
//#region node_modules/viem/node_modules/@noble/hashes/ripemd160.js
var require_ripemd160$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ripemd160 = exports.RIPEMD160 = void 0;
	/**
	* RIPEMD-160 legacy hash function.
	* https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
	* https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
	* @module
	* @deprecated
	*/
	var legacy_ts_1 = require_legacy$2();
	/** @deprecated Use import from `noble/hashes/legacy` module */
	exports.RIPEMD160 = legacy_ts_1.RIPEMD160;
	/** @deprecated Use import from `noble/hashes/legacy` module */
	exports.ripemd160 = legacy_ts_1.ripemd160;
}));
//#endregion
//#region node_modules/ox/node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.crypto = void 0;
	/**
	* Internal webcrypto alias.
	* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
	* Falls back to Node.js built-in crypto for Node.js <=v14.
	* See utils.ts for details.
	* @module
	*/
	var nc$2 = __require("node:crypto");
	exports.crypto = nc$2 && typeof nc$2 === "object" && "webcrypto" in nc$2 ? nc$2.webcrypto : nc$2 && typeof nc$2 === "object" && "randomBytes" in nc$2 ? nc$2 : void 0;
}));
//#endregion
//#region node_modules/ox/node_modules/@noble/hashes/utils.js
var require_utils$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
	var crypto_1 = require_cryptoNode$2();
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
//#region node_modules/ox/node_modules/@noble/hashes/hmac.js
var require_hmac$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hmac = exports.HMAC = void 0;
	/**
	* HMAC: RFC2104 message authentication code.
	* @module
	*/
	var utils_ts_1 = require_utils$2();
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
//#region node_modules/ox/node_modules/@noble/hashes/_md.js
var require__md$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SHA512_IV = exports.SHA384_IV = exports.SHA224_IV = exports.SHA256_IV = exports.HashMD = void 0;
	exports.setBigUint64 = setBigUint64;
	exports.Chi = Chi;
	exports.Maj = Maj;
	/**
	* Internal Merkle-Damgard hash utils.
	* @module
	*/
	var utils_ts_1 = require_utils$2();
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
//#region node_modules/ox/node_modules/@noble/hashes/legacy.js
var require_legacy$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ripemd160 = exports.RIPEMD160 = exports.md5 = exports.MD5 = exports.sha1 = exports.SHA1 = void 0;
	/**
	
	SHA1 (RFC 3174), MD5 (RFC 1321) and RIPEMD160 (RFC 2286) legacy, weak hash functions.
	Don't use them in a new protocol. What "weak" means:
	
	- Collisions can be made with 2^18 effort in MD5, 2^60 in SHA1, 2^80 in RIPEMD160.
	- No practical pre-image attacks (only theoretical, 2^123.4)
	- HMAC seems kinda ok: https://datatracker.ietf.org/doc/html/rfc6151
	* @module
	*/
	var _md_ts_1 = require__md$2();
	var utils_ts_1 = require_utils$2();
	/** Initial SHA1 state */
	var SHA1_IV = /* @__PURE__ */ Uint32Array.from([
		1732584193,
		4023233417,
		2562383102,
		271733878,
		3285377520
	]);
	var SHA1_W = /* @__PURE__ */ new Uint32Array(80);
	/** SHA1 legacy hash class. */
	var SHA1 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 20, 8, false);
			this.A = SHA1_IV[0] | 0;
			this.B = SHA1_IV[1] | 0;
			this.C = SHA1_IV[2] | 0;
			this.D = SHA1_IV[3] | 0;
			this.E = SHA1_IV[4] | 0;
		}
		get() {
			const { A, B, C, D, E } = this;
			return [
				A,
				B,
				C,
				D,
				E
			];
		}
		set(A, B, C, D, E) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA1_W[i] = view.getUint32(offset, false);
			for (let i = 16; i < 80; i++) SHA1_W[i] = (0, utils_ts_1.rotl)(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
			let { A, B, C, D, E } = this;
			for (let i = 0; i < 80; i++) {
				let F, K;
				if (i < 20) {
					F = (0, _md_ts_1.Chi)(B, C, D);
					K = 1518500249;
				} else if (i < 40) {
					F = B ^ C ^ D;
					K = 1859775393;
				} else if (i < 60) {
					F = (0, _md_ts_1.Maj)(B, C, D);
					K = 2400959708;
				} else {
					F = B ^ C ^ D;
					K = 3395469782;
				}
				const T = (0, utils_ts_1.rotl)(A, 5) + F + E + K + SHA1_W[i] | 0;
				E = D;
				D = C;
				C = (0, utils_ts_1.rotl)(B, 30);
				B = A;
				A = T;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			this.set(A, B, C, D, E);
		}
		roundClean() {
			(0, utils_ts_1.clean)(SHA1_W);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.SHA1 = SHA1;
	/** SHA1 (RFC 3174) legacy hash function. It was cryptographically broken. */
	exports.sha1 = (0, utils_ts_1.createHasher)(() => new SHA1());
	/** Per-round constants */
	var p32 = /* @__PURE__ */ Math.pow(2, 32);
	var K = /* @__PURE__ */ Array.from({ length: 64 }, (_, i) => Math.floor(p32 * Math.abs(Math.sin(i + 1))));
	/** md5 initial state: same as sha1, but 4 u32 instead of 5. */
	var MD5_IV = /* @__PURE__ */ SHA1_IV.slice(0, 4);
	var MD5_W = /* @__PURE__ */ new Uint32Array(16);
	/** MD5 legacy hash class. */
	var MD5 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 16, 8, true);
			this.A = MD5_IV[0] | 0;
			this.B = MD5_IV[1] | 0;
			this.C = MD5_IV[2] | 0;
			this.D = MD5_IV[3] | 0;
		}
		get() {
			const { A, B, C, D } = this;
			return [
				A,
				B,
				C,
				D
			];
		}
		set(A, B, C, D) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) MD5_W[i] = view.getUint32(offset, true);
			let { A, B, C, D } = this;
			for (let i = 0; i < 64; i++) {
				let F, g, s;
				if (i < 16) {
					F = (0, _md_ts_1.Chi)(B, C, D);
					g = i;
					s = [
						7,
						12,
						17,
						22
					];
				} else if (i < 32) {
					F = (0, _md_ts_1.Chi)(D, B, C);
					g = (5 * i + 1) % 16;
					s = [
						5,
						9,
						14,
						20
					];
				} else if (i < 48) {
					F = B ^ C ^ D;
					g = (3 * i + 5) % 16;
					s = [
						4,
						11,
						16,
						23
					];
				} else {
					F = C ^ (B | ~D);
					g = 7 * i % 16;
					s = [
						6,
						10,
						15,
						21
					];
				}
				F = F + A + K[i] + MD5_W[g];
				A = D;
				D = C;
				C = B;
				B = B + (0, utils_ts_1.rotl)(F, s[i % 4]);
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			this.set(A, B, C, D);
		}
		roundClean() {
			(0, utils_ts_1.clean)(MD5_W);
		}
		destroy() {
			this.set(0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.MD5 = MD5;
	/**
	* MD5 (RFC 1321) legacy hash function. It was cryptographically broken.
	* MD5 architecture is similar to SHA1, with some differences:
	* - Reduced output length: 16 bytes (128 bit) instead of 20
	* - 64 rounds, instead of 80
	* - Little-endian: could be faster, but will require more code
	* - Non-linear index selection: huge speed-up for unroll
	* - Per round constants: more memory accesses, additional speed-up for unroll
	*/
	exports.md5 = (0, utils_ts_1.createHasher)(() => new MD5());
	var Rho160 = /* @__PURE__ */ Uint8Array.from([
		7,
		4,
		13,
		1,
		10,
		6,
		15,
		3,
		12,
		0,
		9,
		5,
		2,
		14,
		11,
		8
	]);
	var Id160 = /* @__PURE__ */ (() => Uint8Array.from(new Array(16).fill(0).map((_, i) => i)))();
	var Pi160 = /* @__PURE__ */ (() => Id160.map((i) => (9 * i + 5) % 16))();
	var idxLR = /* @__PURE__ */ (() => {
		const res = [[Id160], [Pi160]];
		for (let i = 0; i < 4; i++) for (let j of res) j.push(j[i].map((k) => Rho160[k]));
		return res;
	})();
	var idxL = /* @__PURE__ */ (() => idxLR[0])();
	var idxR = /* @__PURE__ */ (() => idxLR[1])();
	var shifts160 = /* @__PURE__ */ [
		[
			11,
			14,
			15,
			12,
			5,
			8,
			7,
			9,
			11,
			13,
			14,
			15,
			6,
			7,
			9,
			8
		],
		[
			12,
			13,
			11,
			15,
			6,
			9,
			9,
			7,
			12,
			15,
			11,
			13,
			7,
			8,
			7,
			7
		],
		[
			13,
			15,
			14,
			11,
			7,
			7,
			6,
			8,
			13,
			14,
			13,
			12,
			5,
			5,
			6,
			9
		],
		[
			14,
			11,
			12,
			14,
			8,
			6,
			5,
			5,
			15,
			12,
			15,
			14,
			9,
			9,
			8,
			6
		],
		[
			15,
			12,
			13,
			13,
			9,
			5,
			8,
			6,
			14,
			11,
			12,
			11,
			8,
			6,
			5,
			5
		]
	].map((i) => Uint8Array.from(i));
	var shiftsL160 = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts160[i][j]));
	var shiftsR160 = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts160[i][j]));
	var Kl160 = /* @__PURE__ */ Uint32Array.from([
		0,
		1518500249,
		1859775393,
		2400959708,
		2840853838
	]);
	var Kr160 = /* @__PURE__ */ Uint32Array.from([
		1352829926,
		1548603684,
		1836072691,
		2053994217,
		0
	]);
	function ripemd_f(group, x, y, z) {
		if (group === 0) return x ^ y ^ z;
		if (group === 1) return x & y | ~x & z;
		if (group === 2) return (x | ~y) ^ z;
		if (group === 3) return x & z | y & ~z;
		return x ^ (y | ~z);
	}
	var BUF_160 = /* @__PURE__ */ new Uint32Array(16);
	var RIPEMD160 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 20, 8, true);
			this.h0 = 1732584193;
			this.h1 = -271733879;
			this.h2 = -1732584194;
			this.h3 = 271733878;
			this.h4 = -1009589776;
		}
		get() {
			const { h0, h1, h2, h3, h4 } = this;
			return [
				h0,
				h1,
				h2,
				h3,
				h4
			];
		}
		set(h0, h1, h2, h3, h4) {
			this.h0 = h0 | 0;
			this.h1 = h1 | 0;
			this.h2 = h2 | 0;
			this.h3 = h3 | 0;
			this.h4 = h4 | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) BUF_160[i] = view.getUint32(offset, true);
			let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
			for (let group = 0; group < 5; group++) {
				const rGroup = 4 - group;
				const hbl = Kl160[group], hbr = Kr160[group];
				const rl = idxL[group], rr = idxR[group];
				const sl = shiftsL160[group], sr = shiftsR160[group];
				for (let i = 0; i < 16; i++) {
					const tl = (0, utils_ts_1.rotl)(al + ripemd_f(group, bl, cl, dl) + BUF_160[rl[i]] + hbl, sl[i]) + el | 0;
					al = el, el = dl, dl = (0, utils_ts_1.rotl)(cl, 10) | 0, cl = bl, bl = tl;
				}
				for (let i = 0; i < 16; i++) {
					const tr = (0, utils_ts_1.rotl)(ar + ripemd_f(rGroup, br, cr, dr) + BUF_160[rr[i]] + hbr, sr[i]) + er | 0;
					ar = er, er = dr, dr = (0, utils_ts_1.rotl)(cr, 10) | 0, cr = br, br = tr;
				}
			}
			this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
		}
		roundClean() {
			(0, utils_ts_1.clean)(BUF_160);
		}
		destroy() {
			this.destroyed = true;
			(0, utils_ts_1.clean)(this.buffer);
			this.set(0, 0, 0, 0, 0);
		}
	};
	exports.RIPEMD160 = RIPEMD160;
	/**
	* RIPEMD-160 - a legacy hash function from 1990s.
	* * https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
	* * https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
	*/
	exports.ripemd160 = (0, utils_ts_1.createHasher)(() => new RIPEMD160());
}));
//#endregion
//#region node_modules/ox/node_modules/@noble/hashes/ripemd160.js
var require_ripemd160 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ripemd160 = exports.RIPEMD160 = void 0;
	/**
	* RIPEMD-160 legacy hash function.
	* https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
	* https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
	* @module
	* @deprecated
	*/
	var legacy_ts_1 = require_legacy$1();
	/** @deprecated Use import from `noble/hashes/legacy` module */
	exports.RIPEMD160 = legacy_ts_1.RIPEMD160;
	/** @deprecated Use import from `noble/hashes/legacy` module */
	exports.ripemd160 = legacy_ts_1.ripemd160;
}));
//#endregion
//#region node_modules/ox/node_modules/@noble/hashes/_u64.js
var require__u64$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#region node_modules/ox/node_modules/@noble/hashes/sha3.js
var require_sha3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = void 0;
	exports.keccakP = keccakP;
	/**
	* SHA3 (keccak) hash function, based on a new "Sponge function" design.
	* Different from older hashes, the internal state is bigger than output size.
	*
	* Check out [FIPS-202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf),
	* [Website](https://keccak.team/keccak.html),
	* [the differences between SHA-3 and Keccak](https://crypto.stackexchange.com/questions/15727/what-are-the-key-differences-between-the-draft-sha-3-standard-and-the-keccak-sub).
	*
	* Check out `sha3-addons` module for cSHAKE, k12, and others.
	* @module
	*/
	var _u64_ts_1 = require__u64$2();
	var utils_ts_1 = require_utils$2();
	var _0n = BigInt(0);
	var _1n = BigInt(1);
	var _2n = BigInt(2);
	var _7n = BigInt(7);
	var _256n = BigInt(256);
	var _0x71n = BigInt(113);
	var SHA3_PI = [];
	var SHA3_ROTL = [];
	var _SHA3_IOTA = [];
	for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
		[x, y] = [y, (2 * x + 3 * y) % 5];
		SHA3_PI.push(2 * (5 * y + x));
		SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
		let t = _0n;
		for (let j = 0; j < 7; j++) {
			R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
			if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
		}
		_SHA3_IOTA.push(t);
	}
	var IOTAS = (0, _u64_ts_1.split)(_SHA3_IOTA, true);
	var SHA3_IOTA_H = IOTAS[0];
	var SHA3_IOTA_L = IOTAS[1];
	var rotlH = (h, l, s) => s > 32 ? (0, _u64_ts_1.rotlBH)(h, l, s) : (0, _u64_ts_1.rotlSH)(h, l, s);
	var rotlL = (h, l, s) => s > 32 ? (0, _u64_ts_1.rotlBL)(h, l, s) : (0, _u64_ts_1.rotlSL)(h, l, s);
	/** `keccakf1600` internal function, additionally allows to adjust round count. */
	function keccakP(s, rounds = 24) {
		const B = /* @__PURE__ */ new Uint32Array(10);
		for (let round = 24 - rounds; round < 24; round++) {
			for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
			for (let x = 0; x < 10; x += 2) {
				const idx1 = (x + 8) % 10;
				const idx0 = (x + 2) % 10;
				const B0 = B[idx0];
				const B1 = B[idx0 + 1];
				const Th = rotlH(B0, B1, 1) ^ B[idx1];
				const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
				for (let y = 0; y < 50; y += 10) {
					s[x + y] ^= Th;
					s[x + y + 1] ^= Tl;
				}
			}
			let curH = s[2];
			let curL = s[3];
			for (let t = 0; t < 24; t++) {
				const shift = SHA3_ROTL[t];
				const Th = rotlH(curH, curL, shift);
				const Tl = rotlL(curH, curL, shift);
				const PI = SHA3_PI[t];
				curH = s[PI];
				curL = s[PI + 1];
				s[PI] = Th;
				s[PI + 1] = Tl;
			}
			for (let y = 0; y < 50; y += 10) {
				for (let x = 0; x < 10; x++) B[x] = s[y + x];
				for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
			}
			s[0] ^= SHA3_IOTA_H[round];
			s[1] ^= SHA3_IOTA_L[round];
		}
		(0, utils_ts_1.clean)(B);
	}
	/** Keccak sponge function. */
	var Keccak = class Keccak extends utils_ts_1.Hash {
		constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
			super();
			this.pos = 0;
			this.posOut = 0;
			this.finished = false;
			this.destroyed = false;
			this.enableXOF = false;
			this.blockLen = blockLen;
			this.suffix = suffix;
			this.outputLen = outputLen;
			this.enableXOF = enableXOF;
			this.rounds = rounds;
			(0, utils_ts_1.anumber)(outputLen);
			if (!(0 < blockLen && blockLen < 200)) throw new Error("only keccak-f1600 function is supported");
			this.state = /* @__PURE__ */ new Uint8Array(200);
			this.state32 = (0, utils_ts_1.u32)(this.state);
		}
		clone() {
			return this._cloneInto();
		}
		keccak() {
			(0, utils_ts_1.swap32IfBE)(this.state32);
			keccakP(this.state32, this.rounds);
			(0, utils_ts_1.swap32IfBE)(this.state32);
			this.posOut = 0;
			this.pos = 0;
		}
		update(data) {
			(0, utils_ts_1.aexists)(this);
			data = (0, utils_ts_1.toBytes)(data);
			(0, utils_ts_1.abytes)(data);
			const { blockLen, state } = this;
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
				if (this.pos === blockLen) this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = true;
			const { state, suffix, pos, blockLen } = this;
			state[pos] ^= suffix;
			if ((suffix & 128) !== 0 && pos === blockLen - 1) this.keccak();
			state[blockLen - 1] ^= 128;
			this.keccak();
		}
		writeInto(out) {
			(0, utils_ts_1.aexists)(this, false);
			(0, utils_ts_1.abytes)(out);
			this.finish();
			const bufferOut = this.state;
			const { blockLen } = this;
			for (let pos = 0, len = out.length; pos < len;) {
				if (this.posOut >= blockLen) this.keccak();
				const take = Math.min(blockLen - this.posOut, len - pos);
				out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
				this.posOut += take;
				pos += take;
			}
			return out;
		}
		xofInto(out) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(out);
		}
		xof(bytes) {
			(0, utils_ts_1.anumber)(bytes);
			return this.xofInto(new Uint8Array(bytes));
		}
		digestInto(out) {
			(0, utils_ts_1.aoutput)(out, this);
			if (this.finished) throw new Error("digest() was already called");
			this.writeInto(out);
			this.destroy();
			return out;
		}
		digest() {
			return this.digestInto(new Uint8Array(this.outputLen));
		}
		destroy() {
			this.destroyed = true;
			(0, utils_ts_1.clean)(this.state);
		}
		_cloneInto(to) {
			const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
			to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
			to.state32.set(this.state32);
			to.pos = this.pos;
			to.posOut = this.posOut;
			to.finished = this.finished;
			to.rounds = rounds;
			to.suffix = suffix;
			to.outputLen = outputLen;
			to.enableXOF = enableXOF;
			to.destroyed = this.destroyed;
			return to;
		}
	};
	exports.Keccak = Keccak;
	var gen = (suffix, blockLen, outputLen) => (0, utils_ts_1.createHasher)(() => new Keccak(blockLen, suffix, outputLen));
	/** SHA3-224 hash function. */
	exports.sha3_224 = (() => gen(6, 144, 28))();
	/** SHA3-256 hash function. Different from keccak-256. */
	exports.sha3_256 = (() => gen(6, 136, 32))();
	/** SHA3-384 hash function. */
	exports.sha3_384 = (() => gen(6, 104, 48))();
	/** SHA3-512 hash function. */
	exports.sha3_512 = (() => gen(6, 72, 64))();
	/** keccak-224 hash function. */
	exports.keccak_224 = (() => gen(1, 144, 28))();
	/** keccak-256 hash function. Different from SHA3-256. */
	exports.keccak_256 = (() => gen(1, 136, 32))();
	/** keccak-384 hash function. */
	exports.keccak_384 = (() => gen(1, 104, 48))();
	/** keccak-512 hash function. */
	exports.keccak_512 = (() => gen(1, 72, 64))();
	var genShake = (suffix, blockLen, outputLen) => (0, utils_ts_1.createXOFer)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
	/** SHAKE128 XOF with 128-bit security. */
	exports.shake128 = (() => genShake(31, 168, 16))();
	/** SHAKE256 XOF with 256-bit security. */
	exports.shake256 = (() => genShake(31, 136, 32))();
}));
//#endregion
//#region node_modules/ox/node_modules/@noble/hashes/sha2.js
var require_sha2$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sha512_224 = exports.sha512_256 = exports.sha384 = exports.sha512 = exports.sha224 = exports.sha256 = exports.SHA512_256 = exports.SHA512_224 = exports.SHA384 = exports.SHA512 = exports.SHA224 = exports.SHA256 = void 0;
	/**
	* SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
	* SHA256 is the fastest hash implementable in JS, even faster than Blake3.
	* Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
	* [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
	* @module
	*/
	var _md_ts_1 = require__md$2();
	var u64 = require__u64$2();
	var utils_ts_1 = require_utils$2();
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
//#region node_modules/ox/node_modules/@noble/hashes/sha256.js
var require_sha256 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sha224 = exports.SHA224 = exports.sha256 = exports.SHA256 = void 0;
	/**
	* SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
	*
	* To break sha256 using birthday attack, attackers need to try 2^128 hashes.
	* BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
	*
	* Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
	* @module
	* @deprecated
	*/
	var sha2_ts_1 = require_sha2$2();
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.SHA256 = sha2_ts_1.SHA256;
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.sha256 = sha2_ts_1.sha256;
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.SHA224 = sha2_ts_1.SHA224;
	/** @deprecated Use import from `noble/hashes/sha2` module */
	exports.sha224 = sha2_ts_1.sha224;
}));
//#endregion
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.crypto = void 0;
	/**
	* Internal webcrypto alias.
	* We prefer WebCrypto aka globalThis.crypto, which exists in node.js 16+.
	* Falls back to Node.js built-in crypto for Node.js <=v14.
	* See utils.ts for details.
	* @module
	*/
	var nc$1 = __require("node:crypto");
	exports.crypto = nc$1 && typeof nc$1 === "object" && "webcrypto" in nc$1 ? nc$1.webcrypto : nc$1 && typeof nc$1 === "object" && "randomBytes" in nc$1 ? nc$1 : void 0;
}));
//#endregion
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/utils.js
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
	var crypto_1 = require_cryptoNode$1();
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
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/hmac.js
var require_hmac$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/_md.js
var require__md$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/legacy.js
var require_legacy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ripemd160 = exports.RIPEMD160 = exports.md5 = exports.MD5 = exports.sha1 = exports.SHA1 = void 0;
	/**
	
	SHA1 (RFC 3174), MD5 (RFC 1321) and RIPEMD160 (RFC 2286) legacy, weak hash functions.
	Don't use them in a new protocol. What "weak" means:
	
	- Collisions can be made with 2^18 effort in MD5, 2^60 in SHA1, 2^80 in RIPEMD160.
	- No practical pre-image attacks (only theoretical, 2^123.4)
	- HMAC seems kinda ok: https://datatracker.ietf.org/doc/html/rfc6151
	* @module
	*/
	var _md_ts_1 = require__md$1();
	var utils_ts_1 = require_utils$1();
	/** Initial SHA1 state */
	var SHA1_IV = /* @__PURE__ */ Uint32Array.from([
		1732584193,
		4023233417,
		2562383102,
		271733878,
		3285377520
	]);
	var SHA1_W = /* @__PURE__ */ new Uint32Array(80);
	/** SHA1 legacy hash class. */
	var SHA1 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 20, 8, false);
			this.A = SHA1_IV[0] | 0;
			this.B = SHA1_IV[1] | 0;
			this.C = SHA1_IV[2] | 0;
			this.D = SHA1_IV[3] | 0;
			this.E = SHA1_IV[4] | 0;
		}
		get() {
			const { A, B, C, D, E } = this;
			return [
				A,
				B,
				C,
				D,
				E
			];
		}
		set(A, B, C, D, E) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
			this.E = E | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) SHA1_W[i] = view.getUint32(offset, false);
			for (let i = 16; i < 80; i++) SHA1_W[i] = (0, utils_ts_1.rotl)(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
			let { A, B, C, D, E } = this;
			for (let i = 0; i < 80; i++) {
				let F, K;
				if (i < 20) {
					F = (0, _md_ts_1.Chi)(B, C, D);
					K = 1518500249;
				} else if (i < 40) {
					F = B ^ C ^ D;
					K = 1859775393;
				} else if (i < 60) {
					F = (0, _md_ts_1.Maj)(B, C, D);
					K = 2400959708;
				} else {
					F = B ^ C ^ D;
					K = 3395469782;
				}
				const T = (0, utils_ts_1.rotl)(A, 5) + F + E + K + SHA1_W[i] | 0;
				E = D;
				D = C;
				C = (0, utils_ts_1.rotl)(B, 30);
				B = A;
				A = T;
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			E = E + this.E | 0;
			this.set(A, B, C, D, E);
		}
		roundClean() {
			(0, utils_ts_1.clean)(SHA1_W);
		}
		destroy() {
			this.set(0, 0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.SHA1 = SHA1;
	/** SHA1 (RFC 3174) legacy hash function. It was cryptographically broken. */
	exports.sha1 = (0, utils_ts_1.createHasher)(() => new SHA1());
	/** Per-round constants */
	var p32 = /* @__PURE__ */ Math.pow(2, 32);
	var K = /* @__PURE__ */ Array.from({ length: 64 }, (_, i) => Math.floor(p32 * Math.abs(Math.sin(i + 1))));
	/** md5 initial state: same as sha1, but 4 u32 instead of 5. */
	var MD5_IV = /* @__PURE__ */ SHA1_IV.slice(0, 4);
	var MD5_W = /* @__PURE__ */ new Uint32Array(16);
	/** MD5 legacy hash class. */
	var MD5 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 16, 8, true);
			this.A = MD5_IV[0] | 0;
			this.B = MD5_IV[1] | 0;
			this.C = MD5_IV[2] | 0;
			this.D = MD5_IV[3] | 0;
		}
		get() {
			const { A, B, C, D } = this;
			return [
				A,
				B,
				C,
				D
			];
		}
		set(A, B, C, D) {
			this.A = A | 0;
			this.B = B | 0;
			this.C = C | 0;
			this.D = D | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) MD5_W[i] = view.getUint32(offset, true);
			let { A, B, C, D } = this;
			for (let i = 0; i < 64; i++) {
				let F, g, s;
				if (i < 16) {
					F = (0, _md_ts_1.Chi)(B, C, D);
					g = i;
					s = [
						7,
						12,
						17,
						22
					];
				} else if (i < 32) {
					F = (0, _md_ts_1.Chi)(D, B, C);
					g = (5 * i + 1) % 16;
					s = [
						5,
						9,
						14,
						20
					];
				} else if (i < 48) {
					F = B ^ C ^ D;
					g = (3 * i + 5) % 16;
					s = [
						4,
						11,
						16,
						23
					];
				} else {
					F = C ^ (B | ~D);
					g = 7 * i % 16;
					s = [
						6,
						10,
						15,
						21
					];
				}
				F = F + A + K[i] + MD5_W[g];
				A = D;
				D = C;
				C = B;
				B = B + (0, utils_ts_1.rotl)(F, s[i % 4]);
			}
			A = A + this.A | 0;
			B = B + this.B | 0;
			C = C + this.C | 0;
			D = D + this.D | 0;
			this.set(A, B, C, D);
		}
		roundClean() {
			(0, utils_ts_1.clean)(MD5_W);
		}
		destroy() {
			this.set(0, 0, 0, 0);
			(0, utils_ts_1.clean)(this.buffer);
		}
	};
	exports.MD5 = MD5;
	/**
	* MD5 (RFC 1321) legacy hash function. It was cryptographically broken.
	* MD5 architecture is similar to SHA1, with some differences:
	* - Reduced output length: 16 bytes (128 bit) instead of 20
	* - 64 rounds, instead of 80
	* - Little-endian: could be faster, but will require more code
	* - Non-linear index selection: huge speed-up for unroll
	* - Per round constants: more memory accesses, additional speed-up for unroll
	*/
	exports.md5 = (0, utils_ts_1.createHasher)(() => new MD5());
	var Rho160 = /* @__PURE__ */ Uint8Array.from([
		7,
		4,
		13,
		1,
		10,
		6,
		15,
		3,
		12,
		0,
		9,
		5,
		2,
		14,
		11,
		8
	]);
	var Id160 = /* @__PURE__ */ (() => Uint8Array.from(new Array(16).fill(0).map((_, i) => i)))();
	var Pi160 = /* @__PURE__ */ (() => Id160.map((i) => (9 * i + 5) % 16))();
	var idxLR = /* @__PURE__ */ (() => {
		const res = [[Id160], [Pi160]];
		for (let i = 0; i < 4; i++) for (let j of res) j.push(j[i].map((k) => Rho160[k]));
		return res;
	})();
	var idxL = /* @__PURE__ */ (() => idxLR[0])();
	var idxR = /* @__PURE__ */ (() => idxLR[1])();
	var shifts160 = /* @__PURE__ */ [
		[
			11,
			14,
			15,
			12,
			5,
			8,
			7,
			9,
			11,
			13,
			14,
			15,
			6,
			7,
			9,
			8
		],
		[
			12,
			13,
			11,
			15,
			6,
			9,
			9,
			7,
			12,
			15,
			11,
			13,
			7,
			8,
			7,
			7
		],
		[
			13,
			15,
			14,
			11,
			7,
			7,
			6,
			8,
			13,
			14,
			13,
			12,
			5,
			5,
			6,
			9
		],
		[
			14,
			11,
			12,
			14,
			8,
			6,
			5,
			5,
			15,
			12,
			15,
			14,
			9,
			9,
			8,
			6
		],
		[
			15,
			12,
			13,
			13,
			9,
			5,
			8,
			6,
			14,
			11,
			12,
			11,
			8,
			6,
			5,
			5
		]
	].map((i) => Uint8Array.from(i));
	var shiftsL160 = /* @__PURE__ */ idxL.map((idx, i) => idx.map((j) => shifts160[i][j]));
	var shiftsR160 = /* @__PURE__ */ idxR.map((idx, i) => idx.map((j) => shifts160[i][j]));
	var Kl160 = /* @__PURE__ */ Uint32Array.from([
		0,
		1518500249,
		1859775393,
		2400959708,
		2840853838
	]);
	var Kr160 = /* @__PURE__ */ Uint32Array.from([
		1352829926,
		1548603684,
		1836072691,
		2053994217,
		0
	]);
	function ripemd_f(group, x, y, z) {
		if (group === 0) return x ^ y ^ z;
		if (group === 1) return x & y | ~x & z;
		if (group === 2) return (x | ~y) ^ z;
		if (group === 3) return x & z | y & ~z;
		return x ^ (y | ~z);
	}
	var BUF_160 = /* @__PURE__ */ new Uint32Array(16);
	var RIPEMD160 = class extends _md_ts_1.HashMD {
		constructor() {
			super(64, 20, 8, true);
			this.h0 = 1732584193;
			this.h1 = -271733879;
			this.h2 = -1732584194;
			this.h3 = 271733878;
			this.h4 = -1009589776;
		}
		get() {
			const { h0, h1, h2, h3, h4 } = this;
			return [
				h0,
				h1,
				h2,
				h3,
				h4
			];
		}
		set(h0, h1, h2, h3, h4) {
			this.h0 = h0 | 0;
			this.h1 = h1 | 0;
			this.h2 = h2 | 0;
			this.h3 = h3 | 0;
			this.h4 = h4 | 0;
		}
		process(view, offset) {
			for (let i = 0; i < 16; i++, offset += 4) BUF_160[i] = view.getUint32(offset, true);
			let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
			for (let group = 0; group < 5; group++) {
				const rGroup = 4 - group;
				const hbl = Kl160[group], hbr = Kr160[group];
				const rl = idxL[group], rr = idxR[group];
				const sl = shiftsL160[group], sr = shiftsR160[group];
				for (let i = 0; i < 16; i++) {
					const tl = (0, utils_ts_1.rotl)(al + ripemd_f(group, bl, cl, dl) + BUF_160[rl[i]] + hbl, sl[i]) + el | 0;
					al = el, el = dl, dl = (0, utils_ts_1.rotl)(cl, 10) | 0, cl = bl, bl = tl;
				}
				for (let i = 0; i < 16; i++) {
					const tr = (0, utils_ts_1.rotl)(ar + ripemd_f(rGroup, br, cr, dr) + BUF_160[rr[i]] + hbr, sr[i]) + er | 0;
					ar = er, er = dr, dr = (0, utils_ts_1.rotl)(cr, 10) | 0, cr = br, br = tr;
				}
			}
			this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
		}
		roundClean() {
			(0, utils_ts_1.clean)(BUF_160);
		}
		destroy() {
			this.destroyed = true;
			(0, utils_ts_1.clean)(this.buffer);
			this.set(0, 0, 0, 0, 0);
		}
	};
	exports.RIPEMD160 = RIPEMD160;
	/**
	* RIPEMD-160 - a legacy hash function from 1990s.
	* * https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
	* * https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
	*/
	exports.ripemd160 = (0, utils_ts_1.createHasher)(() => new RIPEMD160());
}));
//#endregion
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/_u64.js
var require__u64$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#region node_modules/@scure/bip32/node_modules/@noble/hashes/sha2.js
var require_sha2$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sha512_224 = exports.sha512_256 = exports.sha384 = exports.sha512 = exports.sha224 = exports.sha256 = exports.SHA512_256 = exports.SHA512_224 = exports.SHA384 = exports.SHA512 = exports.SHA224 = exports.SHA256 = void 0;
	/**
	* SHA2 hash function. A.k.a. sha256, sha384, sha512, sha512_224, sha512_256.
	* SHA256 is the fastest hash implementable in JS, even faster than Blake3.
	* Check out [RFC 4634](https://datatracker.ietf.org/doc/html/rfc4634) and
	* [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
	* @module
	*/
	var _md_ts_1 = require__md$1();
	var u64 = require__u64$1();
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
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/cryptoNode.js
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
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
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
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/hmac.js
var require_hmac = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hmac = exports.HMAC = void 0;
	/**
	* HMAC: RFC2104 message authentication code.
	* @module
	*/
	var utils_ts_1 = require_utils();
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
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/pbkdf2.js
var require_pbkdf2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.pbkdf2 = pbkdf2;
	exports.pbkdf2Async = pbkdf2Async;
	/**
	* PBKDF (RFC 2898). Can be used to create a key from password and salt.
	* @module
	*/
	var hmac_ts_1 = require_hmac();
	var utils_ts_1 = require_utils();
	function pbkdf2Init(hash, _password, _salt, _opts) {
		(0, utils_ts_1.ahash)(hash);
		const { c, dkLen, asyncTick } = (0, utils_ts_1.checkOpts)({
			dkLen: 32,
			asyncTick: 10
		}, _opts);
		(0, utils_ts_1.anumber)(c);
		(0, utils_ts_1.anumber)(dkLen);
		(0, utils_ts_1.anumber)(asyncTick);
		if (c < 1) throw new Error("iterations (c) should be >= 1");
		const password = (0, utils_ts_1.kdfInputToBytes)(_password);
		const salt = (0, utils_ts_1.kdfInputToBytes)(_salt);
		const DK = new Uint8Array(dkLen);
		const PRF = hmac_ts_1.hmac.create(hash, password);
		return {
			c,
			dkLen,
			asyncTick,
			DK,
			PRF,
			PRFSalt: PRF._cloneInto().update(salt)
		};
	}
	function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
		PRF.destroy();
		PRFSalt.destroy();
		if (prfW) prfW.destroy();
		(0, utils_ts_1.clean)(u);
		return DK;
	}
	/**
	* PBKDF2-HMAC: RFC 2898 key derivation function
	* @param hash - hash function that would be used e.g. sha256
	* @param password - password from which a derived key is generated
	* @param salt - cryptographic salt
	* @param opts - {c, dkLen} where c is work factor and dkLen is output message size
	* @example
	* const key = pbkdf2(sha256, 'password', 'salt', { dkLen: 32, c: Math.pow(2, 18) });
	*/
	function pbkdf2(hash, password, salt, opts) {
		const { c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
		let prfW;
		const arr = /* @__PURE__ */ new Uint8Array(4);
		const view = (0, utils_ts_1.createView)(arr);
		const u = new Uint8Array(PRF.outputLen);
		for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
			const Ti = DK.subarray(pos, pos + PRF.outputLen);
			view.setInt32(0, ti, false);
			(prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
			Ti.set(u.subarray(0, Ti.length));
			for (let ui = 1; ui < c; ui++) {
				PRF._cloneInto(prfW).update(u).digestInto(u);
				for (let i = 0; i < Ti.length; i++) Ti[i] ^= u[i];
			}
		}
		return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
	}
	/**
	* PBKDF2-HMAC: RFC 2898 key derivation function. Async version.
	* @example
	* await pbkdf2Async(sha256, 'password', 'salt', { dkLen: 32, c: 500_000 });
	*/
	async function pbkdf2Async(hash, password, salt, opts) {
		const { c, dkLen, asyncTick, DK, PRF, PRFSalt } = pbkdf2Init(hash, password, salt, opts);
		let prfW;
		const arr = /* @__PURE__ */ new Uint8Array(4);
		const view = (0, utils_ts_1.createView)(arr);
		const u = new Uint8Array(PRF.outputLen);
		for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
			const Ti = DK.subarray(pos, pos + PRF.outputLen);
			view.setInt32(0, ti, false);
			(prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
			Ti.set(u.subarray(0, Ti.length));
			await (0, utils_ts_1.asyncLoop)(c - 1, asyncTick, () => {
				PRF._cloneInto(prfW).update(u).digestInto(u);
				for (let i = 0; i < Ti.length; i++) Ti[i] ^= u[i];
			});
		}
		return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
	}
}));
//#endregion
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/_md.js
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
	var utils_ts_1 = require_utils();
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
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/_u64.js
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
//#region node_modules/@scure/bip39/node_modules/@noble/hashes/sha2.js
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
	var utils_ts_1 = require_utils();
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
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js
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
	let Ah = new Uint32Array(lst.length);
	let Al = new Uint32Array(lst.length);
	for (let i = 0; i < lst.length; i++) {
		const { h, l } = fromBig(lst[i], le);
		[Ah[i], Al[i]] = [h, l];
	}
	return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init__u64 = __esmMin((() => {
	U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
	_32n = /* @__PURE__ */ BigInt(32);
	rotlSH = (h, l, s) => h << s | l >>> 32 - s;
	rotlSL = (h, l, s) => l << s | h >>> 32 - s;
	rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
	rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
}));
//#endregion
//#region node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha3.js
/** `keccakf1600` internal function, additionally allows to adjust round count. */
function keccakP(s, rounds = 24) {
	const B = /* @__PURE__ */ new Uint32Array(10);
	for (let round = 24 - rounds; round < 24; round++) {
		for (let x = 0; x < 10; x++) B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
		for (let x = 0; x < 10; x += 2) {
			const idx1 = (x + 8) % 10;
			const idx0 = (x + 2) % 10;
			const B0 = B[idx0];
			const B1 = B[idx0 + 1];
			const Th = rotlH(B0, B1, 1) ^ B[idx1];
			const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
			for (let y = 0; y < 50; y += 10) {
				s[x + y] ^= Th;
				s[x + y + 1] ^= Tl;
			}
		}
		let curH = s[2];
		let curL = s[3];
		for (let t = 0; t < 24; t++) {
			const shift = SHA3_ROTL[t];
			const Th = rotlH(curH, curL, shift);
			const Tl = rotlL(curH, curL, shift);
			const PI = SHA3_PI[t];
			curH = s[PI];
			curL = s[PI + 1];
			s[PI] = Th;
			s[PI + 1] = Tl;
		}
		for (let y = 0; y < 50; y += 10) {
			for (let x = 0; x < 10; x++) B[x] = s[y + x];
			for (let x = 0; x < 10; x++) s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
		}
		s[0] ^= SHA3_IOTA_H[round];
		s[1] ^= SHA3_IOTA_L[round];
	}
	B.fill(0);
}
var SHA3_PI, SHA3_ROTL, _SHA3_IOTA, _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, keccak_256;
var init_sha3 = __esmMin((() => {
	init__assert$2();
	init__u64();
	init_utils$2();
	SHA3_PI = [];
	SHA3_ROTL = [];
	_SHA3_IOTA = [];
	_0n = /* @__PURE__ */ BigInt(0);
	_1n = /* @__PURE__ */ BigInt(1);
	_2n = /* @__PURE__ */ BigInt(2);
	_7n = /* @__PURE__ */ BigInt(7);
	_256n = /* @__PURE__ */ BigInt(256);
	_0x71n = /* @__PURE__ */ BigInt(113);
	for (let round = 0, R = _1n, x = 1, y = 0; round < 24; round++) {
		[x, y] = [y, (2 * x + 3 * y) % 5];
		SHA3_PI.push(2 * (5 * y + x));
		SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
		let t = _0n;
		for (let j = 0; j < 7; j++) {
			R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
			if (R & _2n) t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
		}
		_SHA3_IOTA.push(t);
	}
	[SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
	rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s);
	rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s);
	Keccak = class Keccak extends Hash$2 {
		constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
			super();
			this.blockLen = blockLen;
			this.suffix = suffix;
			this.outputLen = outputLen;
			this.enableXOF = enableXOF;
			this.rounds = rounds;
			this.pos = 0;
			this.posOut = 0;
			this.finished = false;
			this.destroyed = false;
			anumber$2(outputLen);
			if (0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
			this.state = /* @__PURE__ */ new Uint8Array(200);
			this.state32 = u32$2(this.state);
		}
		keccak() {
			if (!isLE$2) byteSwap32$2(this.state32);
			keccakP(this.state32, this.rounds);
			if (!isLE$2) byteSwap32$2(this.state32);
			this.posOut = 0;
			this.pos = 0;
		}
		update(data) {
			aexists$2(this);
			const { blockLen, state } = this;
			data = toBytes$2(data);
			const len = data.length;
			for (let pos = 0; pos < len;) {
				const take = Math.min(blockLen - this.pos, len - pos);
				for (let i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
				if (this.pos === blockLen) this.keccak();
			}
			return this;
		}
		finish() {
			if (this.finished) return;
			this.finished = true;
			const { state, suffix, pos, blockLen } = this;
			state[pos] ^= suffix;
			if ((suffix & 128) !== 0 && pos === blockLen - 1) this.keccak();
			state[blockLen - 1] ^= 128;
			this.keccak();
		}
		writeInto(out) {
			aexists$2(this, false);
			abytes$2(out);
			this.finish();
			const bufferOut = this.state;
			const { blockLen } = this;
			for (let pos = 0, len = out.length; pos < len;) {
				if (this.posOut >= blockLen) this.keccak();
				const take = Math.min(blockLen - this.posOut, len - pos);
				out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
				this.posOut += take;
				pos += take;
			}
			return out;
		}
		xofInto(out) {
			if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
			return this.writeInto(out);
		}
		xof(bytes) {
			anumber$2(bytes);
			return this.xofInto(new Uint8Array(bytes));
		}
		digestInto(out) {
			aoutput$2(out, this);
			if (this.finished) throw new Error("digest() was already called");
			this.writeInto(out);
			this.destroy();
			return out;
		}
		digest() {
			return this.digestInto(new Uint8Array(this.outputLen));
		}
		destroy() {
			this.destroyed = true;
			this.state.fill(0);
		}
		_cloneInto(to) {
			const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
			to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
			to.state32.set(this.state32);
			to.pos = this.pos;
			to.posOut = this.posOut;
			to.finished = this.finished;
			to.rounds = rounds;
			to.suffix = suffix;
			to.outputLen = outputLen;
			to.enableXOF = enableXOF;
			to.destroyed = this.destroyed;
			return to;
		}
	};
	gen = (suffix, blockLen, outputLen) => wrapConstructor$2(() => new Keccak(blockLen, suffix, outputLen));
	keccak_256 = /* @__PURE__ */ gen(1, 136, 32);
}));
//#endregion
export { init_sha3$1 as _, require_utils as a, keccak_256$2 as b, require_hmac$1 as c, require_sha3 as d, require_ripemd160 as f, require_sha3$1 as g, require_sha256$1 as h, require_pbkdf2 as i, require_utils$1 as l, require_ripemd160$1 as m, keccak_256 as n, require_sha2$1 as o, require_hmac$2 as p, require_sha2 as r, require_legacy as s, init_sha3 as t, require_sha256 as u, keccak_256$1 as v, init_sha3$2 as y };
