import { n as __esmMin } from "../_runtime.mjs";
import { n as customElements$1, r as init_ssr_dom_shim, t as HTMLElementShimWithRealType } from "./lit-labs__ssr-dom-shim.mjs";
//#region node_modules/@lit/reactive-element/node/css-tag.js
var t, e, s, o$2, n$2, r$3, i, S, c$1;
var init_css_tag = __esmMin((() => {
	t = globalThis;
	e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
	s = Symbol();
	o$2 = /* @__PURE__ */ new WeakMap();
	n$2 = class {
		constructor(t, e, o) {
			/**
			* @license
			* Copyright 2019 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			if (this._$cssResult$ = !0, o !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
			this.cssText = t, this.t = e;
		}
		get styleSheet() {
			let t = this.o;
			const s = this.t;
			if (e && void 0 === t) {
				const e = void 0 !== s && 1 === s.length;
				e && (t = o$2.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$2.set(s, t));
			}
			return t;
		}
		toString() {
			return this.cssText;
		}
	};
	r$3 = (t) => new n$2("string" == typeof t ? t : t + "", void 0, s);
	i = (t, ...e) => {
		const o = 1 === t.length ? t[0] : e.reduce((e, s, o) => e + ((t) => {
			if (!0 === t._$cssResult$) return t.cssText;
			if ("number" == typeof t) return t;
			throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
		})(s) + t[o + 1], t[0]);
		return new n$2(o, t, s);
	};
	S = (s, o) => {
		if (e) s.adoptedStyleSheets = o.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
		else for (const e of o) {
			const o = document.createElement("style"), n = t.litNonce;
			void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
		}
	};
	c$1 = e || void 0 === t.CSSStyleSheet ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((t) => {
		let e = "";
		for (const s of t.cssRules) e += s.cssText;
		return r$3(e);
	})(t) : t;
}));
//#endregion
//#region node_modules/@lit/reactive-element/node/reactive-element.js
var h, r$2, o$1, n$1, a, c, l, p, d, u, f, b, m, y, g;
var init_reactive_element = __esmMin((() => {
	init_ssr_dom_shim();
	init_css_tag();
	({is: h, defineProperty: r$2, getOwnPropertyDescriptor: o$1, getOwnPropertyNames: n$1, getOwnPropertySymbols: a, getPrototypeOf: c} = Object), l = globalThis;
	l.customElements ??= customElements$1;
	p = l.trustedTypes;
	d = p ? p.emptyScript : "";
	u = l.reactiveElementPolyfillSupport;
	f = (t, s) => t;
	b = {
		toAttribute(t, s) {
			switch (s) {
				case Boolean:
					t = t ? d : null;
					break;
				case Object:
				case Array: t = null == t ? t : JSON.stringify(t);
			}
			return t;
		},
		fromAttribute(t, s) {
			let i = t;
			switch (s) {
				case Boolean:
					i = null !== t;
					break;
				case Number:
					i = null === t ? null : Number(t);
					break;
				case Object:
				case Array: try {
					i = JSON.parse(t);
				} catch (t) {
					i = null;
				}
			}
			return i;
		}
	};
	m = (t, s) => !h(t, s);
	y = {
		attribute: !0,
		type: String,
		converter: b,
		reflect: !1,
		useDefault: !1,
		hasChanged: m
	};
	Symbol.metadata ??= Symbol("metadata"), l.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
	g = class extends (globalThis.HTMLElement ?? HTMLElementShimWithRealType) {
		static addInitializer(t) {
			this._$Ei(), (this.l ??= []).push(t);
		}
		static get observedAttributes() {
			return this.finalize(), this._$Eh && [...this._$Eh.keys()];
		}
		static createProperty(t, s = y) {
			if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
				const i = Symbol(), e = this.getPropertyDescriptor(t, i, s);
				void 0 !== e && r$2(this.prototype, t, e);
			}
		}
		static getPropertyDescriptor(t, s, i) {
			const { get: e, set: h } = o$1(this.prototype, t) ?? {
				get() {
					return this[s];
				},
				set(t) {
					this[s] = t;
				}
			};
			return {
				get: e,
				set(s) {
					const r = e?.call(this);
					h?.call(this, s), this.requestUpdate(t, r, i);
				},
				configurable: !0,
				enumerable: !0
			};
		}
		static getPropertyOptions(t) {
			return this.elementProperties.get(t) ?? y;
		}
		static _$Ei() {
			if (this.hasOwnProperty(f("elementProperties"))) return;
			const t = c(this);
			t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
		}
		static finalize() {
			if (this.hasOwnProperty(f("finalized"))) return;
			if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(f("properties"))) {
				const t = this.properties, s = [...n$1(t), ...a(t)];
				for (const i of s) this.createProperty(i, t[i]);
			}
			const t = this[Symbol.metadata];
			if (null !== t) {
				const s = litPropertyMetadata.get(t);
				if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
			}
			this._$Eh = /* @__PURE__ */ new Map();
			for (const [t, s] of this.elementProperties) {
				const i = this._$Eu(t, s);
				void 0 !== i && this._$Eh.set(i, t);
			}
			this.elementStyles = this.finalizeStyles(this.styles);
		}
		static finalizeStyles(t) {
			const s = [];
			if (Array.isArray(t)) {
				const e = new Set(t.flat(1 / 0).reverse());
				for (const t of e) s.unshift(c$1(t));
			} else void 0 !== t && s.push(c$1(t));
			return s;
		}
		static _$Eu(t, s) {
			const i = s.attribute;
			return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
		}
		constructor() {
			super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
		}
		_$Ev() {
			this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
		}
		addController(t) {
			(this._$EO ??= /* @__PURE__ */ new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
		}
		removeController(t) {
			this._$EO?.delete(t);
		}
		_$E_() {
			const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
			for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
			t.size > 0 && (this._$Ep = t);
		}
		createRenderRoot() {
			const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
			return S(t, this.constructor.elementStyles), t;
		}
		connectedCallback() {
			this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
		}
		enableUpdating(t) {}
		disconnectedCallback() {
			this._$EO?.forEach((t) => t.hostDisconnected?.());
		}
		attributeChangedCallback(t, s, i) {
			this._$AK(t, i);
		}
		_$ET(t, s) {
			const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
			if (void 0 !== e && !0 === i.reflect) {
				const h = (void 0 !== i.converter?.toAttribute ? i.converter : b).toAttribute(s, i.type);
				this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
			}
		}
		_$AK(t, s) {
			const i = this.constructor, e = i._$Eh.get(t);
			if (void 0 !== e && this._$Em !== e) {
				const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : b;
				this._$Em = e;
				const r = h.fromAttribute(s, t.type);
				this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
			}
		}
		requestUpdate(t, s, i, e = !1, h) {
			if (void 0 !== t) {
				const r = this.constructor;
				if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? m)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
				this.C(t, s, i);
			}
			!1 === this.isUpdatePending && (this._$ES = this._$EP());
		}
		C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
			i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
		}
		async _$EP() {
			this.isUpdatePending = !0;
			try {
				await this._$ES;
			} catch (t) {
				Promise.reject(t);
			}
			const t = this.scheduleUpdate();
			return null != t && await t, !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			if (!this.isUpdatePending) return;
			if (!this.hasUpdated) {
				if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
					for (const [t, s] of this._$Ep) this[t] = s;
					this._$Ep = void 0;
				}
				const t = this.constructor.elementProperties;
				if (t.size > 0) for (const [s, i] of t) {
					const { wrapped: t } = i, e = this[s];
					!0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
				}
			}
			let t = !1;
			const s = this._$AL;
			try {
				t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t) => t.hostUpdate?.()), this.update(s)) : this._$EM();
			} catch (s) {
				throw t = !1, this._$EM(), s;
			}
			t && this._$AE(s);
		}
		willUpdate(t) {}
		_$AE(t) {
			this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
		}
		_$EM() {
			this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$ES;
		}
		shouldUpdate(t) {
			return !0;
		}
		update(t) {
			this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
		}
		updated(t) {}
		firstUpdated(t) {}
	};
	g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[f("elementProperties")] = /* @__PURE__ */ new Map(), g[f("finalized")] = /* @__PURE__ */ new Map(), u?.({ ReactiveElement: g }), (l.reactiveElementVersions ??= []).push("2.1.2");
}));
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/custom-element.js
var init_custom_element = __esmMin((() => {}));
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/property.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function n(t) {
	return (e, o) => "object" == typeof o ? r$1(t, e, o) : ((t, e, o) => {
		const r = e.hasOwnProperty(o);
		return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
	})(t, e, o);
}
var o, r$1;
var init_property = __esmMin((() => {
	init_reactive_element();
	o = {
		attribute: !0,
		type: String,
		converter: b,
		reflect: !1,
		hasChanged: m
	};
	r$1 = (t = o, e, r) => {
		const { kind: n, metadata: i } = r;
		let s = globalThis.litPropertyMetadata.get(i);
		if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
			const { name: o } = r;
			return {
				set(r) {
					const n = e.get.call(this);
					e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
				},
				init(e) {
					return void 0 !== e && this.C(o, void 0, t, e), e;
				}
			};
		}
		if ("setter" === n) {
			const { name: o } = r;
			return function(r) {
				const n = this[o];
				e.call(this, r), this.requestUpdate(o, n, t, !0, r);
			};
		}
		throw Error("Unsupported decorator location: " + n);
	};
}));
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/state.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function r(r) {
	return n({
		...r,
		state: !0,
		attribute: !1
	});
}
var init_state = __esmMin((() => {
	init_property();
}));
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/event-options.js
var init_event_options = __esmMin((() => {}));
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/query.js
var init_query = __esmMin((() => {}));
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/query-all.js
var init_query_all = __esmMin((() => {}));
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/query-async.js
var init_query_async = __esmMin((() => {}));
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esmMin((() => {}));
/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
//#region node_modules/@lit/reactive-element/node/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esmMin((() => {}));
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
//#endregion
export { init_query as a, r as c, init_custom_element as d, g as f, r$3 as g, init_css_tag as h, init_query_all as i, init_property as l, i as m, init_query_assigned_elements as n, init_event_options as o, init_reactive_element as p, init_query_async as r, init_state as s, init_query_assigned_nodes as t, n as u };
