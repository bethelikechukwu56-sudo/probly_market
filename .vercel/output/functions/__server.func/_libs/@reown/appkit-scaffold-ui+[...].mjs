import { a as __require, n as __esmMin, r as __exportAll, s as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { $t as AssetController, Dt as TooltipController, Ft as ConnectionController, Gt as ApiController, Lt as SnackController, Nt as ChainController, S as SIWXUtil, Ut as RouterController, Vt as ThemeController, Yt as AlertController, Zt as AssetUtil, _ as initializeTheming, _n as T, a as WalletUtil, an as StorageUtil, b as ModalUtil, bn as init_lit_html, c as init_ConstantsUtil$3, d as init_WebComponentsUtil, f as UiHelperUtil, fn as init_lit, g as init_ThemeUtil, gn as E, h as elementStyles, hn as A, i as init_ConnectorUtil, jt as AccountController, kt as ModalController, l as init_exports$1, ln as init_esm, m as colorStyles, o as init_WalletUtil, p as init_UiHelperUtil, pn as i$3, qt as EventsController, r as ConnectorUtil, rn as CoreHelperUtil, s as ConstantsUtil$2, sn as ConstantsUtil$1, tn as OptionsController, u as customElement, un as ConstantsUtil, v as resetStyles, vn as Z, y as init_exports, yn as b, zt as ConnectorController } from "./appkit+[...].mjs";
import { a as init_query, c as r$2, d as init_custom_element, i as init_query_all, l as init_property, m as i$4, n as init_query_assigned_elements, o as init_event_options, r as init_query_async, s as init_state, t as init_query_assigned_nodes, u as n$4 } from "../lit__reactive-element.mjs";
//#region node_modules/lit/decorators.js
var init_decorators = __esmMin((() => {
	init_custom_element();
	init_property();
	init_state();
	init_event_options();
	init_query();
	init_query_all();
	init_query_async();
	init_query_assigned_elements();
	init_query_assigned_nodes();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/styles.js
var styles_default$44;
var init_styles$44 = __esmMin((() => {
	init_lit();
	styles_default$44 = i$4`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-flex/index.js
var __decorate$64, WuiFlex;
var init_wui_flex$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_ThemeUtil();
	init_UiHelperUtil();
	init_WebComponentsUtil();
	init_styles$44();
	__decorate$64 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiFlex = class WuiFlex extends i$3 {
		render() {
			this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
			return T`<slot></slot>`;
		}
	};
	WuiFlex.styles = [resetStyles, styles_default$44];
	__decorate$64([n$4()], WuiFlex.prototype, "flexDirection", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "flexWrap", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "flexBasis", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "flexGrow", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "flexShrink", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "alignItems", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "justifyContent", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "columnGap", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "rowGap", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "gap", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "padding", void 0);
	__decorate$64([n$4()], WuiFlex.prototype, "margin", void 0);
	WuiFlex = __decorate$64([customElement("wui-flex")], WuiFlex);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-flex.js
var init_wui_flex = __esmMin((() => {
	init_wui_flex$1();
}));
//#endregion
//#region node_modules/lit-html/node/directives/if-defined.js
var o$2;
var init_if_defined$1 = __esmMin((() => {
	init_lit_html();
	o$2 = (o) => o ?? A;
})), init_if_defined = __esmMin((() => {
	/**
	* @license
	* Copyright 2018 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
	init_if_defined$1();
})), t$1, n$3, r$1;
var init_directive_helpers = __esmMin((() => {
	init_lit_html();
	({I: t$1} = Z), n$3 = (o) => null === o || "object" != typeof o && "function" != typeof o, r$1 = (o) => void 0 === o.strings;
	/**
	* @license
	* Copyright 2020 Google LLC
	* SPDX-License-Identifier: BSD-3-Clause
	*/
}));
//#endregion
//#region node_modules/lit-html/node/directive.js
var t, e$2, i$1;
var init_directive = __esmMin((() => {
	t = {
		ATTRIBUTE: 1,
		CHILD: 2,
		PROPERTY: 3,
		BOOLEAN_ATTRIBUTE: 4,
		EVENT: 5,
		ELEMENT: 6
	};
	e$2 = (t) => (...e) => ({
		_$litDirective$: t,
		values: e
	});
	i$1 = class {
		constructor(t) {
			/**
			* @license
			* Copyright 2017 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AT(t, e, i) {
			this._$Ct = t, this._$AM = e, this._$Ci = i;
		}
		_$AS(t, e) {
			return this.update(t, e);
		}
		update(t, e) {
			return this.render(...e);
		}
	};
}));
//#endregion
//#region node_modules/lit-html/node/async-directive.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function h$2(i) {
	void 0 !== this._$AN ? (o$1(this), this._$AM = i, r(this)) : this._$AM = i;
}
function n$2(i, t = !1, e = 0) {
	const r = this._$AH, h = this._$AN;
	if (void 0 !== h && 0 !== h.size) if (t) if (Array.isArray(r)) for (let i = e; i < r.length; i++) s$1(r[i], !1), o$1(r[i]);
	else null != r && (s$1(r, !1), o$1(r));
	else s$1(this, i);
}
var s$1, o$1, r, c$1, f;
var init_async_directive = __esmMin((() => {
	init_directive_helpers();
	init_directive();
	s$1 = (i, t) => {
		const e = i._$AN;
		if (void 0 === e) return !1;
		for (const i of e) i._$AO?.(t, !1), s$1(i, t);
		return !0;
	};
	o$1 = (i) => {
		let t, e;
		do {
			if (void 0 === (t = i._$AM)) break;
			e = t._$AN, e.delete(i), i = t;
		} while (0 === e?.size);
	};
	r = (i) => {
		for (let t; t = i._$AM; i = t) {
			let e = t._$AN;
			if (void 0 === e) t._$AN = e = /* @__PURE__ */ new Set();
			else if (e.has(i)) break;
			e.add(i), c$1(t);
		}
	};
	c$1 = (i) => {
		i.type == t.CHILD && (i._$AP ??= n$2, i._$AQ ??= h$2);
	};
	f = class extends i$1 {
		constructor() {
			super(...arguments), this._$AN = void 0;
		}
		_$AT(i, t, e) {
			super._$AT(i, t, e), r(this), this.isConnected = i._$AU;
		}
		_$AO(i, t = !0) {
			i !== this.isConnected && (this.isConnected = i, i ? this.reconnected?.() : this.disconnected?.()), t && (s$1(this, i), o$1(this));
		}
		setValue(t) {
			if (r$1(this._$Ct)) this._$Ct._$AI(t, this);
			else {
				const i = [...this._$Ct._$AH];
				i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
			}
		}
		disconnected() {}
		reconnected() {}
	};
}));
//#endregion
//#region node_modules/lit-html/node/directives/private-async-helpers.js
var s, i;
var init_private_async_helpers = __esmMin((() => {
	s = class {
		constructor(t) {
			/**
			* @license
			* Copyright 2021 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			this.G = t;
		}
		disconnect() {
			this.G = void 0;
		}
		reconnect(t) {
			this.G = t;
		}
		deref() {
			return this.G;
		}
	};
	i = class {
		constructor() {
			this.Y = void 0, this.Z = void 0;
		}
		get() {
			return this.Y;
		}
		pause() {
			this.Y ??= new Promise((t) => this.Z = t);
		}
		resume() {
			this.Z?.(), this.Y = this.Z = void 0;
		}
	};
}));
//#endregion
//#region node_modules/lit-html/node/directives/until.js
var n$1, h$1, c, m;
var init_until$1 = __esmMin((() => {
	init_lit_html();
	init_directive_helpers();
	init_async_directive();
	init_private_async_helpers();
	init_directive();
	n$1 = (t) => !n$3(t) && "function" == typeof t.then;
	h$1 = 1073741823;
	c = class extends f {
		constructor() {
			/**
			* @license
			* Copyright 2017 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			super(...arguments), this._$Cwt = h$1, this._$Cbt = [], this._$CK = new s(this), this._$CX = new i();
		}
		render(...s) {
			return s.find((t) => !n$1(t)) ?? E;
		}
		update(s, i) {
			const e = this._$Cbt;
			let r = e.length;
			this._$Cbt = i;
			const o = this._$CK, c = this._$CX;
			this.isConnected || this.disconnected();
			for (let t = 0; t < i.length && !(t > this._$Cwt); t++) {
				const s = i[t];
				if (!n$1(s)) return this._$Cwt = t, s;
				t < r && s === e[t] || (this._$Cwt = h$1, r = 0, Promise.resolve(s).then(async (t) => {
					for (; c.get();) await c.get();
					const i = o.deref();
					if (void 0 !== i) {
						const e = i._$Cbt.indexOf(s);
						e > -1 && e < i._$Cwt && (i._$Cwt = e, i.setValue(t));
					}
				}));
			}
			return E;
		}
		disconnected() {
			this._$CK.disconnect(), this._$CX.pause();
		}
		reconnected() {
			this._$CK.reconnect(this), this._$CX.resume();
		}
	};
	m = e$2(c);
}));
//#endregion
//#region node_modules/lit/directives/until.js
var init_until = __esmMin((() => {
	init_until$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/utils/CacheUtil.js
var CacheUtil, globalSvgCache;
var init_CacheUtil = __esmMin((() => {
	CacheUtil = class {
		constructor() {
			this.cache = /* @__PURE__ */ new Map();
		}
		set(key, value) {
			this.cache.set(key, value);
		}
		get(key) {
			return this.cache.get(key);
		}
		has(key) {
			return this.cache.has(key);
		}
		delete(key) {
			this.cache.delete(key);
		}
		clear() {
			this.cache.clear();
		}
	};
	globalSvgCache = new CacheUtil();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/styles.js
var styles_default$43;
var init_styles$43 = __esmMin((() => {
	init_lit();
	styles_default$43 = i$4`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-icon/index.js
async function getSvg(name) {
	if (globalSvgCache.has(name)) return globalSvgCache.get(name);
	const svgPromise = (ICONS[name] ?? ICONS.copy)();
	globalSvgCache.set(name, svgPromise);
	return svgPromise;
}
var __decorate$63, ICONS, WuiIcon;
var init_wui_icon$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_until();
	init_CacheUtil();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$43();
	__decorate$63 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	ICONS = {
		add: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Bn(), n.zn))).addSvg,
		allWallets: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Rn(), n.Ln))).allWalletsSvg,
		arrowBottomCircle: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Mn(), n.jn))).arrowBottomCircleSvg,
		appStore: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.In(), n.Fn))).appStoreSvg,
		apple: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Pn(), n.Nn))).appleSvg,
		arrowBottom: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.An(), n.kn))).arrowBottomSvg,
		arrowLeft: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.On(), n.Dn))).arrowLeftSvg,
		arrowRight: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.En(), n.Tn))).arrowRightSvg,
		arrowTop: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.wn(), n.Cn))).arrowTopSvg,
		bank: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Sn(), n.xn))).bankSvg,
		browser: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.bn(), n.yn))).browserSvg,
		card: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.vn(), n._n))).cardSvg,
		checkmark: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.mn(), n.pn))).checkmarkSvg,
		checkmarkBold: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.gn(), n.hn))).checkmarkBoldSvg,
		chevronBottom: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.fn(), n.dn))).chevronBottomSvg,
		chevronLeft: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.un(), n.ln))).chevronLeftSvg,
		chevronRight: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.cn(), n.sn))).chevronRightSvg,
		chevronTop: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.on(), n.an))).chevronTopSvg,
		chromeStore: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.in(), n.rn))).chromeStoreSvg,
		clock: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.nn(), n.tn))).clockSvg,
		close: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.en(), n.$t))).closeSvg,
		compass: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Xt(), n.Yt))).compassSvg,
		coinPlaceholder: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Qt(), n.Zt))).coinPlaceholderSvg,
		copy: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Jt(), n.qt))).copySvg,
		cursor: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Wt(), n.Ut))).cursorSvg,
		cursorTransparent: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Kt(), n.Gt))).cursorTransparentSvg,
		desktop: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Ht(), n.Vt))).desktopSvg,
		disconnect: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Bt(), n.zt))).disconnectSvg,
		discord: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Rt(), n.Lt))).discordSvg,
		etherscan: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.It(), n.Ft))).etherscanSvg,
		extension: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Mt(), n.jt))).extensionSvg,
		externalLink: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.At(), n.kt))).externalLinkSvg,
		facebook: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Ot(), n.Dt))).facebookSvg,
		farcaster: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Et(), n.Tt))).farcasterSvg,
		filters: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.wt(), n.Ct))).filtersSvg,
		github: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.St(), n.xt))).githubSvg,
		google: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.bt(), n.yt))).googleSvg,
		helpCircle: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.vt(), n._t))).helpCircleSvg,
		image: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.mt(), n.pt))).imageSvg,
		id: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.gt(), n.ht))).idSvg,
		infoCircle: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.ft(), n.dt))).infoCircleSvg,
		lightbulb: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.st(), n.ct))).lightbulbSvg,
		mail: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.at(), n.ot))).mailSvg,
		mobile: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.rt(), n.it))).mobileSvg,
		more: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.tt(), n.nt))).moreSvg,
		networkPlaceholder: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.$(), n.et))).networkPlaceholderSvg,
		nftPlaceholder: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Z(), n.Q))).nftPlaceholderSvg,
		off: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Y(), n.X))).offSvg,
		playStore: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.q(), n.J))).playStoreSvg,
		plus: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.G(), n.K))).plusSvg,
		qrCode: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.U(), n.W))).qrCodeIcon,
		recycleHorizontal: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.V(), n.H))).recycleHorizontalSvg,
		refresh: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.z(), n.B))).refreshSvg,
		search: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.F(), n.I))).searchSvg,
		send: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.N(), n.P))).sendSvg,
		swapHorizontal: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.j(), n.M))).swapHorizontalSvg,
		swapHorizontalMedium: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.D(), n.O))).swapHorizontalMediumSvg,
		swapHorizontalBold: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.k(), n.A))).swapHorizontalBoldSvg,
		swapHorizontalRoundedBold: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.T(), n.E))).swapHorizontalRoundedBoldSvg,
		swapVertical: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.C(), n.w))).swapVerticalSvg,
		telegram: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.x(), n.S))).telegramSvg,
		threeDots: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.y(), n.b))).threeDotsSvg,
		twitch: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n._(), n.v))).twitchSvg,
		twitter: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.t(), n.n))).xSvg,
		twitterIcon: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.h(), n.g))).twitterIconSvg,
		verify: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.d(), n.f))).verifySvg,
		verifyFilled: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.p(), n.m))).verifyFilledSvg,
		wallet: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.s(), n.c))).walletSvg,
		walletConnect: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.a(), n.o))).walletConnectSvg,
		walletConnectLightBrown: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.a(), n.o))).walletConnectLightBrownSvg,
		walletConnectBrown: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.a(), n.o))).walletConnectBrownSvg,
		walletPlaceholder: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.l(), n.u))).walletPlaceholderSvg,
		warningCircle: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.r(), n.i))).warningCircleSvg,
		x: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.t(), n.n))).xSvg,
		info: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.ut(), n.lt))).infoSvg,
		exclamationTriangle: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.Pt(), n.Nt))).exclamationTriangleSvg,
		reown: async () => (await import("../reown__appkit-ui.mjs").then((n) => (n.L(), n.R))).reownSvg
	};
	WuiIcon = class WuiIcon extends i$3 {
		constructor() {
			super(...arguments);
			this.size = "md";
			this.name = "copy";
			this.color = "fg-300";
			this.aspectRatio = "1 / 1";
		}
		render() {
			this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `;
			return T`${m(getSvg(this.name), T`<div class="fallback"></div>`)}`;
		}
	};
	WuiIcon.styles = [
		resetStyles,
		colorStyles,
		styles_default$43
	];
	__decorate$63([n$4()], WuiIcon.prototype, "size", void 0);
	__decorate$63([n$4()], WuiIcon.prototype, "name", void 0);
	__decorate$63([n$4()], WuiIcon.prototype, "color", void 0);
	__decorate$63([n$4()], WuiIcon.prototype, "aspectRatio", void 0);
	WuiIcon = __decorate$63([customElement("wui-icon")], WuiIcon);
}));
//#endregion
//#region node_modules/lit-html/node/directives/class-map.js
var e$1;
var init_class_map$1 = __esmMin((() => {
	init_lit_html();
	init_directive();
	e$1 = e$2(class extends i$1 {
		constructor(t$2) {
			/**
			* @license
			* Copyright 2018 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			if (super(t$2), t$2.type !== t.ATTRIBUTE || "class" !== t$2.name || t$2.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
		}
		render(t) {
			return " " + Object.keys(t).filter((s) => t[s]).join(" ") + " ";
		}
		update(s, [i]) {
			if (void 0 === this.st) {
				this.st = /* @__PURE__ */ new Set(), void 0 !== s.strings && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((t) => "" !== t)));
				for (const t in i) i[t] && !this.nt?.has(t) && this.st.add(t);
				return this.render(i);
			}
			const r = s.element.classList;
			for (const t of this.st) t in i || (r.remove(t), this.st.delete(t));
			for (const t in i) {
				const s = !!i[t];
				s === this.st.has(t) || this.nt?.has(t) || (s ? (r.add(t), this.st.add(t)) : (r.remove(t), this.st.delete(t)));
			}
			return E;
		}
	});
}));
//#endregion
//#region node_modules/lit/directives/class-map.js
var init_class_map = __esmMin((() => {
	init_class_map$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/styles.js
var styles_default$42;
var init_styles$42 = __esmMin((() => {
	init_lit();
	styles_default$42 = i$4`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-text/index.js
var __decorate$62, WuiText;
var init_wui_text$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_class_map();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$42();
	__decorate$62 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiText = class WuiText extends i$3 {
		constructor() {
			super(...arguments);
			this.variant = "paragraph-500";
			this.color = "fg-300";
			this.align = "left";
			this.lineClamp = void 0;
		}
		render() {
			const classes = {
				[`wui-font-${this.variant}`]: true,
				[`wui-color-${this.color}`]: true,
				[`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
			};
			this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `;
			return T`<slot class=${e$1(classes)}></slot>`;
		}
	};
	WuiText.styles = [resetStyles, styles_default$42];
	__decorate$62([n$4()], WuiText.prototype, "variant", void 0);
	__decorate$62([n$4()], WuiText.prototype, "color", void 0);
	__decorate$62([n$4()], WuiText.prototype, "align", void 0);
	__decorate$62([n$4()], WuiText.prototype, "lineClamp", void 0);
	WuiText = __decorate$62([customElement("wui-text")], WuiText);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/styles.js
var styles_default$41;
var init_styles$41 = __esmMin((() => {
	init_lit();
	styles_default$41 = i$4`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-box/index.js
var __decorate$61, WuiIconBox;
var init_wui_icon_box$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$41();
	__decorate$61 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiIconBox = class WuiIconBox extends i$3 {
		constructor() {
			super(...arguments);
			this.size = "md";
			this.backgroundColor = "accent-100";
			this.iconColor = "accent-100";
			this.background = "transparent";
			this.border = false;
			this.borderColor = "wui-color-bg-125";
			this.icon = "copy";
		}
		render() {
			const iconSize = this.iconSize || this.size;
			const isLg = this.size === "lg";
			const isXl = this.size === "xl";
			const bgMix = isLg ? "12%" : "16%";
			const borderRadius = isLg ? "xxs" : isXl ? "s" : "3xl";
			const isGray = this.background === "gray";
			const isOpaque = this.background === "opaque";
			const isColorChange = this.backgroundColor === "accent-100" && isOpaque || this.backgroundColor === "success-100" && isOpaque || this.backgroundColor === "error-100" && isOpaque || this.backgroundColor === "inverse-100" && isOpaque;
			let bgValueVariable = `var(--wui-color-${this.backgroundColor})`;
			if (isColorChange) bgValueVariable = `var(--wui-icon-box-bg-${this.backgroundColor})`;
			else if (isGray) bgValueVariable = `var(--wui-color-gray-${this.backgroundColor})`;
			this.style.cssText = `
       --local-bg-value: ${bgValueVariable};
       --local-bg-mix: ${isColorChange || isGray ? `100%` : bgMix};
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === "wui-color-bg-125" ? `2px` : `1px`} solid ${this.border ? `var(--${this.borderColor})` : `transparent`}
   `;
			return T` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `;
		}
	};
	WuiIconBox.styles = [
		resetStyles,
		elementStyles,
		styles_default$41
	];
	__decorate$61([n$4()], WuiIconBox.prototype, "size", void 0);
	__decorate$61([n$4()], WuiIconBox.prototype, "backgroundColor", void 0);
	__decorate$61([n$4()], WuiIconBox.prototype, "iconColor", void 0);
	__decorate$61([n$4()], WuiIconBox.prototype, "iconSize", void 0);
	__decorate$61([n$4()], WuiIconBox.prototype, "background", void 0);
	__decorate$61([n$4({ type: Boolean })], WuiIconBox.prototype, "border", void 0);
	__decorate$61([n$4()], WuiIconBox.prototype, "borderColor", void 0);
	__decorate$61([n$4()], WuiIconBox.prototype, "icon", void 0);
	WuiIconBox = __decorate$61([customElement("wui-icon-box")], WuiIconBox);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/styles.js
var styles_default$40;
var init_styles$40 = __esmMin((() => {
	init_lit();
	styles_default$40 = i$4`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-image/index.js
var __decorate$60, WuiImage;
var init_wui_image = __esmMin((() => {
	init_lit();
	init_decorators();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$40();
	__decorate$60 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiImage = class WuiImage extends i$3 {
		constructor() {
			super(...arguments);
			this.src = "./path/to/image.jpg";
			this.alt = "Image";
			this.size = void 0;
		}
		render() {
			this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : "100%"};
      `;
			return T`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
		}
		handleImageError() {
			this.dispatchEvent(new CustomEvent("onLoadError", {
				bubbles: true,
				composed: true
			}));
		}
	};
	WuiImage.styles = [
		resetStyles,
		colorStyles,
		styles_default$40
	];
	__decorate$60([n$4()], WuiImage.prototype, "src", void 0);
	__decorate$60([n$4()], WuiImage.prototype, "alt", void 0);
	__decorate$60([n$4()], WuiImage.prototype, "size", void 0);
	WuiImage = __decorate$60([customElement("wui-image")], WuiImage);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/styles.js
var styles_default$39;
var init_styles$39 = __esmMin((() => {
	init_lit();
	styles_default$39 = i$4`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-wallet-image/index.js
var __decorate$59, WuiWalletImage;
var init_wui_wallet_image$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_wui_image();
	init_wui_flex$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_icon_box$1();
	init_styles$39();
	__decorate$59 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiWalletImage = class WuiWalletImage extends i$3 {
		constructor() {
			super(...arguments);
			this.size = "md";
			this.name = "";
			this.installed = false;
			this.badgeSize = "xs";
		}
		render() {
			let borderRadius = "xxs";
			if (this.size === "lg") borderRadius = "m";
			else if (this.size === "md") borderRadius = "xs";
			else borderRadius = "xxs";
			this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `;
			if (this.walletIcon) this.dataset["walletIcon"] = this.walletIcon;
			return T`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `;
		}
		templateVisual() {
			if (this.imageSrc) return T`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`;
			else if (this.walletIcon) return T`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`;
			return T`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`;
		}
	};
	WuiWalletImage.styles = [
		elementStyles,
		resetStyles,
		styles_default$39
	];
	__decorate$59([n$4()], WuiWalletImage.prototype, "size", void 0);
	__decorate$59([n$4()], WuiWalletImage.prototype, "name", void 0);
	__decorate$59([n$4()], WuiWalletImage.prototype, "imageSrc", void 0);
	__decorate$59([n$4()], WuiWalletImage.prototype, "walletIcon", void 0);
	__decorate$59([n$4({ type: Boolean })], WuiWalletImage.prototype, "installed", void 0);
	__decorate$59([n$4()], WuiWalletImage.prototype, "badgeSize", void 0);
	WuiWalletImage = __decorate$59([customElement("wui-wallet-image")], WuiWalletImage);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-all-wallets-image/styles.js
var styles_default$38;
var init_styles$38 = __esmMin((() => {
	init_lit();
	styles_default$38 = i$4`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-all-wallets-image/index.js
var __decorate$58, TOTAL_IMAGES, WuiAllWalletsImage;
var init_wui_all_wallets_image = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_wui_flex$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_icon_box$1();
	init_wui_wallet_image$1();
	init_styles$38();
	__decorate$58 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	TOTAL_IMAGES = 4;
	WuiAllWalletsImage = class WuiAllWalletsImage extends i$3 {
		constructor() {
			super(...arguments);
			this.walletImages = [];
		}
		render() {
			const isPlaceholders = this.walletImages.length < TOTAL_IMAGES;
			return T`${this.walletImages.slice(0, TOTAL_IMAGES).map(({ src, walletName }) => T`
            <wui-wallet-image
              size="inherit"
              imageSrc=${src}
              name=${o$2(walletName)}
            ></wui-wallet-image>
          `)}
      ${isPlaceholders ? [...Array(TOTAL_IMAGES - this.walletImages.length)].map(() => T` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`) : null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`;
		}
	};
	WuiAllWalletsImage.styles = [resetStyles, styles_default$38];
	__decorate$58([n$4({ type: Array })], WuiAllWalletsImage.prototype, "walletImages", void 0);
	WuiAllWalletsImage = __decorate$58([customElement("wui-all-wallets-image")], WuiAllWalletsImage);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/styles.js
var styles_default$37;
var init_styles$37 = __esmMin((() => {
	init_lit();
	styles_default$37 = i$4`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tag/index.js
var __decorate$57, WuiTag;
var init_wui_tag$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_text$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$37();
	__decorate$57 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiTag = class WuiTag extends i$3 {
		constructor() {
			super(...arguments);
			this.variant = "main";
			this.size = "lg";
		}
		render() {
			this.dataset["variant"] = this.variant;
			this.dataset["size"] = this.size;
			const textVariant = this.size === "md" ? "mini-700" : "micro-700";
			return T`
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
		}
	};
	WuiTag.styles = [resetStyles, styles_default$37];
	__decorate$57([n$4()], WuiTag.prototype, "variant", void 0);
	__decorate$57([n$4()], WuiTag.prototype, "size", void 0);
	WuiTag = __decorate$57([customElement("wui-tag")], WuiTag);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-wallet/styles.js
var styles_default$36;
var init_styles$36 = __esmMin((() => {
	init_lit();
	styles_default$36 = i$4`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-wallet/index.js
var __decorate$56, WuiListWallet;
var init_wui_list_wallet$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_wui_icon$1();
	init_wui_text$1();
	init_wui_icon_box$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_all_wallets_image();
	init_wui_tag$1();
	init_wui_wallet_image$1();
	init_styles$36();
	__decorate$56 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiListWallet = class WuiListWallet extends i$3 {
		constructor() {
			super(...arguments);
			this.walletImages = [];
			this.imageSrc = "";
			this.name = "";
			this.tabIdx = void 0;
			this.installed = false;
			this.disabled = false;
			this.showAllWallets = false;
			this.loading = false;
			this.loadingSpinnerColor = "accent-100";
		}
		render() {
			return T`
      <button ?disabled=${this.disabled} tabindex=${o$2(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `;
		}
		templateAllWallets() {
			if (this.showAllWallets && this.imageSrc) return T` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `;
			else if (this.showAllWallets && this.walletIcon) return T` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `;
			return null;
		}
		templateWalletImage() {
			if (!this.showAllWallets && this.imageSrc) return T`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`;
			else if (!this.showAllWallets && !this.imageSrc) return T`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`;
			return null;
		}
		templateStatus() {
			if (this.loading) return T`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`;
			else if (this.tagLabel && this.tagVariant) return T`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`;
			else if (this.icon) return T`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`;
			return null;
		}
	};
	WuiListWallet.styles = [
		resetStyles,
		elementStyles,
		styles_default$36
	];
	__decorate$56([n$4({ type: Array })], WuiListWallet.prototype, "walletImages", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "imageSrc", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "name", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "tagLabel", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "tagVariant", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "icon", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "walletIcon", void 0);
	__decorate$56([n$4()], WuiListWallet.prototype, "tabIdx", void 0);
	__decorate$56([n$4({ type: Boolean })], WuiListWallet.prototype, "installed", void 0);
	__decorate$56([n$4({ type: Boolean })], WuiListWallet.prototype, "disabled", void 0);
	__decorate$56([n$4({ type: Boolean })], WuiListWallet.prototype, "showAllWallets", void 0);
	__decorate$56([n$4({ type: Boolean })], WuiListWallet.prototype, "loading", void 0);
	__decorate$56([n$4({ type: String })], WuiListWallet.prototype, "loadingSpinnerColor", void 0);
	WuiListWallet = __decorate$56([customElement("wui-list-wallet")], WuiListWallet);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-wallet.js
var init_wui_list_wallet = __esmMin((() => {
	init_wui_list_wallet$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-widget/index.js
var __decorate$55, W3mAllWalletsWidget;
var init_w3m_all_wallets_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_list_wallet();
	__decorate$55 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mAllWalletsWidget = class W3mAllWalletsWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.count = ApiController.state.count;
			this.filteredCount = ApiController.state.filteredWallets.length;
			this.isFetchingRecommendedWallets = ApiController.state.isFetchingRecommendedWallets;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("count", (val) => this.count = val), ApiController.subscribeKey("filteredWallets", (val) => this.filteredCount = val.length), ApiController.subscribeKey("isFetchingRecommendedWallets", (val) => this.isFetchingRecommendedWallets = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const wcConnector = this.connectors.find((c) => c.id === "walletConnect");
			const { allWallets } = OptionsController.state;
			if (!wcConnector || allWallets === "HIDE") return null;
			if (allWallets === "ONLY_MOBILE" && !CoreHelperUtil.isMobile()) return null;
			const featuredCount = ApiController.state.featured.length;
			const rawCount = this.count + featuredCount;
			const roundedCount = rawCount < 10 ? rawCount : Math.floor(rawCount / 10) * 10;
			const count = this.filteredCount > 0 ? this.filteredCount : roundedCount;
			let tagLabel = `${count}`;
			if (this.filteredCount > 0) tagLabel = `${this.filteredCount}`;
			else if (count < rawCount) tagLabel = `${count}+`;
			return T`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${tagLabel}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${o$2(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets ? "fg-300" : "accent-100"}
      ></wui-list-wallet>
    `;
		}
		onAllWallets() {
			EventsController.sendEvent({
				type: "track",
				event: "CLICK_ALL_WALLETS"
			});
			RouterController.push("AllWallets");
		}
	};
	__decorate$55([n$4()], W3mAllWalletsWidget.prototype, "tabIdx", void 0);
	__decorate$55([r$2()], W3mAllWalletsWidget.prototype, "connectors", void 0);
	__decorate$55([r$2()], W3mAllWalletsWidget.prototype, "count", void 0);
	__decorate$55([r$2()], W3mAllWalletsWidget.prototype, "filteredCount", void 0);
	__decorate$55([r$2()], W3mAllWalletsWidget.prototype, "isFetchingRecommendedWallets", void 0);
	W3mAllWalletsWidget = __decorate$55([customElement("w3m-all-wallets-widget")], W3mAllWalletsWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-announced-widget/index.js
var __decorate$54, W3mConnectAnnouncedWidget;
var init_w3m_connect_announced_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	init_ConnectorUtil();
	__decorate$54 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectAnnouncedWidget = class W3mConnectAnnouncedWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const announcedConnectors = this.connectors.filter((connector) => connector.type === "ANNOUNCED");
			if (!announcedConnectors?.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${announcedConnectors.filter(ConnectorUtil.showConnector).map((connector) => T`
              <wui-list-wallet
                imageSrc=${o$2(AssetUtil.getConnectorImage(connector))}
                name=${connector.name ?? "Unknown"}
                @click=${() => this.onConnector(connector)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${connector.id}`}
                .installed=${true}
                tabIdx=${o$2(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `;
		}
		onConnector(connector) {
			if (connector.id === "walletConnect") {
				if (CoreHelperUtil.isMobile()) RouterController.push("AllWallets");
				else RouterController.push("ConnectingWalletConnect");
			} else RouterController.push("ConnectingExternal", { connector });
		}
	};
	__decorate$54([n$4()], W3mConnectAnnouncedWidget.prototype, "tabIdx", void 0);
	__decorate$54([r$2()], W3mConnectAnnouncedWidget.prototype, "connectors", void 0);
	W3mConnectAnnouncedWidget = __decorate$54([customElement("w3m-connect-announced-widget")], W3mConnectAnnouncedWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-custom-widget/index.js
var __decorate$53, W3mConnectCustomWidget;
var init_w3m_connect_custom_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	__decorate$53 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectCustomWidget = class W3mConnectCustomWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.loading = false;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
			if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
				this.loading = !ConnectionController.state.wcUri;
				this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loading = !val));
			}
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const { customWallets } = OptionsController.state;
			if (!customWallets?.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			const wallets = this.filterOutDuplicateWallets(customWallets);
			return T`<wui-flex flexDirection="column" gap="xs">
      ${wallets.map((wallet) => T`
          <wui-list-wallet
            imageSrc=${o$2(AssetUtil.getWalletImage(wallet))}
            name=${wallet.name ?? "Unknown"}
            @click=${() => this.onConnectWallet(wallet)}
            data-testid=${`wallet-selector-${wallet.id}`}
            tabIdx=${o$2(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`;
		}
		filterOutDuplicateWallets(wallets) {
			const recent = StorageUtil.getRecentWallets();
			const connectorRDNSs = this.connectors.map((connector) => connector.info?.rdns).filter(Boolean);
			const recentRDNSs = recent.map((wallet) => wallet.rdns).filter(Boolean);
			const allRDNSs = connectorRDNSs.concat(recentRDNSs);
			if (allRDNSs.includes("io.metamask.mobile") && CoreHelperUtil.isMobile()) {
				const index = allRDNSs.indexOf("io.metamask.mobile");
				allRDNSs[index] = "io.metamask";
			}
			return wallets.filter((wallet) => !allRDNSs.includes(String(wallet?.rdns)));
		}
		onConnectWallet(wallet) {
			if (this.loading) return;
			RouterController.push("ConnectingWalletConnect", { wallet });
		}
	};
	__decorate$53([n$4()], W3mConnectCustomWidget.prototype, "tabIdx", void 0);
	__decorate$53([r$2()], W3mConnectCustomWidget.prototype, "connectors", void 0);
	__decorate$53([r$2()], W3mConnectCustomWidget.prototype, "loading", void 0);
	W3mConnectCustomWidget = __decorate$53([customElement("w3m-connect-custom-widget")], W3mConnectCustomWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-external-widget/index.js
var __decorate$52, W3mConnectExternalWidget;
var init_w3m_connect_external_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_esm();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	init_ConnectorUtil();
	__decorate$52 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectExternalWidget = class W3mConnectExternalWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const filteredOutCoinbaseConnectors = this.connectors.filter((connector) => connector.type === "EXTERNAL").filter(ConnectorUtil.showConnector).filter((connector) => connector.id !== ConstantsUtil.CONNECTOR_ID.COINBASE_SDK);
			if (!filteredOutCoinbaseConnectors?.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${filteredOutCoinbaseConnectors.map((connector) => T`
            <wui-list-wallet
              imageSrc=${o$2(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              data-testid=${`wallet-selector-external-${connector.id}`}
              @click=${() => this.onConnector(connector)}
              tabIdx=${o$2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
		}
		onConnector(connector) {
			RouterController.push("ConnectingExternal", { connector });
		}
	};
	__decorate$52([n$4()], W3mConnectExternalWidget.prototype, "tabIdx", void 0);
	__decorate$52([r$2()], W3mConnectExternalWidget.prototype, "connectors", void 0);
	W3mConnectExternalWidget = __decorate$52([customElement("w3m-connect-external-widget")], W3mConnectExternalWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-featured-widget/index.js
var __decorate$51, W3mConnectFeaturedWidget;
var init_w3m_connect_featured_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	__decorate$51 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectFeaturedWidget = class W3mConnectFeaturedWidget extends i$3 {
		constructor() {
			super(...arguments);
			this.tabIdx = void 0;
			this.wallets = [];
		}
		render() {
			if (!this.wallets.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((wallet) => T`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${wallet.id}`}
              imageSrc=${o$2(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tabIdx=${o$2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
		}
		onConnectWallet(wallet) {
			ConnectorController.selectWalletConnector(wallet);
		}
	};
	__decorate$51([n$4()], W3mConnectFeaturedWidget.prototype, "tabIdx", void 0);
	__decorate$51([n$4()], W3mConnectFeaturedWidget.prototype, "wallets", void 0);
	W3mConnectFeaturedWidget = __decorate$51([customElement("w3m-connect-featured-widget")], W3mConnectFeaturedWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-injected-widget/index.js
var __decorate$50, W3mConnectInjectedWidget;
var init_w3m_connect_injected_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	init_ConnectorUtil();
	__decorate$50 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectInjectedWidget = class W3mConnectInjectedWidget extends i$3 {
		constructor() {
			super(...arguments);
			this.tabIdx = void 0;
			this.connectors = [];
		}
		render() {
			const injectedConnectors = this.connectors.filter(ConnectorUtil.showConnector);
			if (injectedConnectors.length === 0) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${injectedConnectors.map((connector) => T`
            <wui-list-wallet
              imageSrc=${o$2(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${() => this.onConnector(connector)}
              tabIdx=${o$2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
		}
		onConnector(connector) {
			ConnectorController.setActiveConnector(connector);
			RouterController.push("ConnectingExternal", { connector });
		}
	};
	__decorate$50([n$4()], W3mConnectInjectedWidget.prototype, "tabIdx", void 0);
	__decorate$50([n$4()], W3mConnectInjectedWidget.prototype, "connectors", void 0);
	W3mConnectInjectedWidget = __decorate$50([customElement("w3m-connect-injected-widget")], W3mConnectInjectedWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-multi-chain-widget/index.js
var __decorate$49, W3mConnectMultiChainWidget;
var init_w3m_connect_multi_chain_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	__decorate$49 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectMultiChainWidget = class W3mConnectMultiChainWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const multiChainConnectors = this.connectors.filter((connector) => connector.type === "MULTI_CHAIN" && connector.name !== "WalletConnect");
			if (!multiChainConnectors?.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${multiChainConnectors.map((connector) => T`
            <wui-list-wallet
              imageSrc=${o$2(AssetUtil.getConnectorImage(connector))}
              .installed=${true}
              name=${connector.name ?? "Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${connector.id}`}
              @click=${() => this.onConnector(connector)}
              tabIdx=${o$2(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
		}
		onConnector(connector) {
			ConnectorController.setActiveConnector(connector);
			RouterController.push("ConnectingMultiChain");
		}
	};
	__decorate$49([n$4()], W3mConnectMultiChainWidget.prototype, "tabIdx", void 0);
	__decorate$49([r$2()], W3mConnectMultiChainWidget.prototype, "connectors", void 0);
	W3mConnectMultiChainWidget = __decorate$49([customElement("w3m-connect-multi-chain-widget")], W3mConnectMultiChainWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recent-widget/index.js
var __decorate$48, W3mConnectRecentWidget;
var init_w3m_connect_recent_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	init_WalletUtil();
	__decorate$48 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectRecentWidget = class W3mConnectRecentWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.loading = false;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
			if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
				this.loading = !ConnectionController.state.wcUri;
				this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loading = !val));
			}
		}
		render() {
			const filteredRecentWallets = StorageUtil.getRecentWallets().filter((wallet) => !WalletUtil.isExcluded(wallet)).filter((wallet) => !this.hasWalletConnector(wallet)).filter((wallet) => this.isWalletCompatibleWithCurrentChain(wallet));
			if (!filteredRecentWallets.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${filteredRecentWallets.map((wallet) => T`
            <wui-list-wallet
              imageSrc=${o$2(AssetUtil.getWalletImage(wallet))}
              name=${wallet.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${o$2(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
		}
		onConnectWallet(wallet) {
			if (this.loading) return;
			ConnectorController.selectWalletConnector(wallet);
		}
		hasWalletConnector(wallet) {
			return this.connectors.some((connector) => connector.id === wallet.id || connector.name === wallet.name);
		}
		isWalletCompatibleWithCurrentChain(wallet) {
			const currentNamespace = ChainController.state.activeChain;
			if (currentNamespace && wallet.chains) return wallet.chains.some((c) => {
				const chainNamespace = c.split(":")[0];
				return currentNamespace === chainNamespace;
			});
			return true;
		}
	};
	__decorate$48([n$4()], W3mConnectRecentWidget.prototype, "tabIdx", void 0);
	__decorate$48([r$2()], W3mConnectRecentWidget.prototype, "connectors", void 0);
	__decorate$48([r$2()], W3mConnectRecentWidget.prototype, "loading", void 0);
	W3mConnectRecentWidget = __decorate$48([customElement("w3m-connect-recent-widget")], W3mConnectRecentWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-recommended-widget/index.js
var __decorate$47, W3mConnectRecommendedWidget;
var init_w3m_connect_recommended_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_wallet();
	init_WalletUtil();
	__decorate$47 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectRecommendedWidget = class W3mConnectRecommendedWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.wallets = [];
			this.loading = false;
			if (CoreHelperUtil.isTelegram() && CoreHelperUtil.isIos()) {
				this.loading = !ConnectionController.state.wcUri;
				this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", (val) => this.loading = !val));
			}
		}
		render() {
			const { connectors } = ConnectorController.state;
			const { customWallets, featuredWalletIds } = OptionsController.state;
			const recentWallets = StorageUtil.getRecentWallets();
			const wcConnector = connectors.find((c) => c.id === "walletConnect");
			const injectedWallets = connectors.filter((c) => c.type === "INJECTED" || c.type === "ANNOUNCED" || c.type === "MULTI_CHAIN").filter((i) => i.name !== "Browser Wallet");
			if (!wcConnector) return null;
			if (featuredWalletIds || customWallets || !this.wallets.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			const overrideLength = injectedWallets.length + recentWallets.length;
			const maxRecommended = Math.max(0, 2 - overrideLength);
			const wallets = WalletUtil.filterOutDuplicateWallets(this.wallets).slice(0, maxRecommended);
			if (!wallets.length) {
				this.style.cssText = `display: none`;
				return null;
			}
			return T`
      <wui-flex flexDirection="column" gap="xs">
        ${wallets.map((wallet) => T`
            <wui-list-wallet
              imageSrc=${o$2(AssetUtil.getWalletImage(wallet))}
              name=${wallet?.name ?? "Unknown"}
              @click=${() => this.onConnectWallet(wallet)}
              tabIdx=${o$2(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `;
		}
		onConnectWallet(wallet) {
			if (this.loading) return;
			const connector = ConnectorController.getConnector(wallet.id, wallet.rdns);
			if (connector) RouterController.push("ConnectingExternal", { connector });
			else RouterController.push("ConnectingWalletConnect", { wallet });
		}
	};
	__decorate$47([n$4()], W3mConnectRecommendedWidget.prototype, "tabIdx", void 0);
	__decorate$47([n$4()], W3mConnectRecommendedWidget.prototype, "wallets", void 0);
	__decorate$47([r$2()], W3mConnectRecommendedWidget.prototype, "loading", void 0);
	W3mConnectRecommendedWidget = __decorate$47([customElement("w3m-connect-recommended-widget")], W3mConnectRecommendedWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connect-walletconnect-widget/index.js
var __decorate$46, W3mConnectWalletConnectWidget;
var init_w3m_connect_walletconnect_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_list_wallet();
	__decorate$46 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectWalletConnectWidget = class W3mConnectWalletConnectWidget extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.connectorImages = AssetController.state.connectorImages;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), AssetController.subscribeKey("connectorImages", (val) => this.connectorImages = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			if (CoreHelperUtil.isMobile()) {
				this.style.cssText = `display: none`;
				return null;
			}
			const connector = this.connectors.find((c) => c.id === "walletConnect");
			if (!connector) {
				this.style.cssText = `display: none`;
				return null;
			}
			const connectorImage = connector.imageUrl || this.connectorImages[connector?.imageId ?? ""];
			return T`
      <wui-list-wallet
        imageSrc=${o$2(connectorImage)}
        name=${connector.name ?? "Unknown"}
        @click=${() => this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${o$2(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `;
		}
		onConnector(connector) {
			ConnectorController.setActiveConnector(connector);
			RouterController.push("ConnectingWalletConnect");
		}
	};
	__decorate$46([n$4()], W3mConnectWalletConnectWidget.prototype, "tabIdx", void 0);
	__decorate$46([r$2()], W3mConnectWalletConnectWidget.prototype, "connectors", void 0);
	__decorate$46([r$2()], W3mConnectWalletConnectWidget.prototype, "connectorImages", void 0);
	W3mConnectWalletConnectWidget = __decorate$46([customElement("w3m-connect-walletconnect-widget")], W3mConnectWalletConnectWidget);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/styles.js
var styles_default$35;
var init_styles$35 = __esmMin((() => {
	init_lit();
	styles_default$35 = i$4`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connector-list/index.js
var __decorate$45, W3mConnectorList;
var init_w3m_connector_list = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_w3m_connect_announced_widget();
	init_w3m_connect_custom_widget();
	init_w3m_connect_external_widget();
	init_w3m_connect_featured_widget();
	init_w3m_connect_injected_widget();
	init_w3m_connect_multi_chain_widget();
	init_w3m_connect_recent_widget();
	init_w3m_connect_recommended_widget();
	init_w3m_connect_walletconnect_widget();
	init_ConnectorUtil();
	init_styles$35();
	__decorate$45 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectorList = class W3mConnectorList extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.tabIdx = void 0;
			this.connectors = ConnectorController.state.connectors;
			this.recommended = ApiController.state.recommended;
			this.featured = ApiController.state.featured;
			this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val), ApiController.subscribeKey("recommended", (val) => this.recommended = val), ApiController.subscribeKey("featured", (val) => this.featured = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			return T`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `;
		}
		connectorListTemplate() {
			const { custom, recent, announced, injected, multiChain, recommended, featured, external } = ConnectorUtil.getConnectorsByType(this.connectors, this.recommended, this.featured);
			return ConnectorUtil.getConnectorTypeOrder({
				custom,
				recent,
				announced,
				injected,
				multiChain,
				recommended,
				featured,
				external
			}).map((type) => {
				switch (type) {
					case "injected": return T`
            ${multiChain.length ? T`<w3m-connect-multi-chain-widget
                  tabIdx=${o$2(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>` : null}
            ${announced.length ? T`<w3m-connect-announced-widget
                  tabIdx=${o$2(this.tabIdx)}
                ></w3m-connect-announced-widget>` : null}
            ${injected.length ? T`<w3m-connect-injected-widget
                  .connectors=${injected}
                  tabIdx=${o$2(this.tabIdx)}
                ></w3m-connect-injected-widget>` : null}
          `;
					case "walletConnect": return T`<w3m-connect-walletconnect-widget
            tabIdx=${o$2(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;
					case "recent": return T`<w3m-connect-recent-widget
            tabIdx=${o$2(this.tabIdx)}
          ></w3m-connect-recent-widget>`;
					case "featured": return T`<w3m-connect-featured-widget
            .wallets=${featured}
            tabIdx=${o$2(this.tabIdx)}
          ></w3m-connect-featured-widget>`;
					case "custom": return T`<w3m-connect-custom-widget
            tabIdx=${o$2(this.tabIdx)}
          ></w3m-connect-custom-widget>`;
					case "external": return T`<w3m-connect-external-widget
            tabIdx=${o$2(this.tabIdx)}
          ></w3m-connect-external-widget>`;
					case "recommended": return T`<w3m-connect-recommended-widget
            .wallets=${recommended}
            tabIdx=${o$2(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;
					default:
						console.warn(`Unknown connector type: ${type}`);
						return null;
				}
			});
		}
	};
	W3mConnectorList.styles = styles_default$35;
	__decorate$45([n$4()], W3mConnectorList.prototype, "tabIdx", void 0);
	__decorate$45([r$2()], W3mConnectorList.prototype, "connectors", void 0);
	__decorate$45([r$2()], W3mConnectorList.prototype, "recommended", void 0);
	__decorate$45([r$2()], W3mConnectorList.prototype, "featured", void 0);
	W3mConnectorList = __decorate$45([customElement("w3m-connector-list")], W3mConnectorList);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/styles.js
var styles_default$34;
var init_styles$34 = __esmMin((() => {
	init_lit();
	styles_default$34 = i$4`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-tabs/index.js
var __decorate$44, WuiTabs;
var init_wui_tabs$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_wui_text$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$34();
	__decorate$44 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiTabs = class WuiTabs extends i$3 {
		constructor() {
			super(...arguments);
			this.tabs = [];
			this.onTabChange = () => null;
			this.buttons = [];
			this.disabled = false;
			this.localTabWidth = "100px";
			this.activeTab = 0;
			this.isDense = false;
		}
		render() {
			this.isDense = this.tabs.length > 3;
			this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `;
			this.dataset["type"] = this.isDense ? "flex" : "block";
			return this.tabs.map((tab, index) => {
				const isActive = index === this.activeTab;
				return T`
        <button
          ?disabled=${this.disabled}
          @click=${() => this.onTabClick(index)}
          data-active=${isActive}
          data-testid="tab-${tab.label?.toLowerCase()}"
        >
          ${this.iconTemplate(tab)}
          <wui-text variant="small-600" color="inherit"> ${tab.label} </wui-text>
        </button>
      `;
			});
		}
		firstUpdated() {
			if (this.shadowRoot && this.isDense) {
				this.buttons = [...this.shadowRoot.querySelectorAll("button")];
				setTimeout(() => {
					this.animateTabs(0, true);
				}, 0);
			}
		}
		iconTemplate(tab) {
			if (tab.icon) return T`<wui-icon size="xs" color="inherit" name=${tab.icon}></wui-icon>`;
			return null;
		}
		onTabClick(index) {
			if (this.buttons) this.animateTabs(index, false);
			this.activeTab = index;
			this.onTabChange(index);
		}
		animateTabs(index, initialAnimation) {
			const passiveBtn = this.buttons[this.activeTab];
			const activeBtn = this.buttons[index];
			const passiveBtnText = passiveBtn?.querySelector("wui-text");
			const activeBtnText = activeBtn?.querySelector("wui-text");
			const activeBtnBounds = activeBtn?.getBoundingClientRect();
			const activeBtnTextBounds = activeBtnText?.getBoundingClientRect();
			if (passiveBtn && passiveBtnText && !initialAnimation && index !== this.activeTab) {
				passiveBtnText.animate([{ opacity: 0 }], {
					duration: 50,
					easing: "ease",
					fill: "forwards"
				});
				passiveBtn.animate([{ width: `34px` }], {
					duration: 500,
					easing: "ease",
					fill: "forwards"
				});
			}
			if (activeBtn && activeBtnBounds && activeBtnTextBounds && activeBtnText) {
				if (index !== this.activeTab || initialAnimation) {
					this.localTabWidth = `${Math.round(activeBtnBounds.width + activeBtnTextBounds.width) + 6}px`;
					activeBtn.animate([{ width: `${activeBtnBounds.width + activeBtnTextBounds.width}px` }], {
						duration: initialAnimation ? 0 : 500,
						fill: "forwards",
						easing: "ease"
					});
					activeBtnText.animate([{ opacity: 1 }], {
						duration: initialAnimation ? 0 : 125,
						delay: initialAnimation ? 0 : 200,
						fill: "forwards",
						easing: "ease"
					});
				}
			}
		}
	};
	WuiTabs.styles = [
		resetStyles,
		elementStyles,
		styles_default$34
	];
	__decorate$44([n$4({ type: Array })], WuiTabs.prototype, "tabs", void 0);
	__decorate$44([n$4()], WuiTabs.prototype, "onTabChange", void 0);
	__decorate$44([n$4({ type: Array })], WuiTabs.prototype, "buttons", void 0);
	__decorate$44([n$4({ type: Boolean })], WuiTabs.prototype, "disabled", void 0);
	__decorate$44([n$4()], WuiTabs.prototype, "localTabWidth", void 0);
	__decorate$44([r$2()], WuiTabs.prototype, "activeTab", void 0);
	__decorate$44([r$2()], WuiTabs.prototype, "isDense", void 0);
	WuiTabs = __decorate$44([customElement("wui-tabs")], WuiTabs);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-tabs.js
var init_wui_tabs = __esmMin((() => {
	init_wui_tabs$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-header/index.js
var __decorate$43, W3mConnectingHeader;
var init_w3m_connecting_header = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports$1();
	init_wui_flex();
	init_wui_tabs();
	__decorate$43 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingHeader = class W3mConnectingHeader extends i$3 {
		constructor() {
			super(...arguments);
			this.platformTabs = [];
			this.unsubscribe = [];
			this.platforms = [];
			this.onSelectPlatfrom = void 0;
		}
		disconnectCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const tabs = this.generateTabs();
			return T`
      <wui-flex justifyContent="center" .padding=${[
				"0",
				"0",
				"l",
				"0"
			]}>
        <wui-tabs .tabs=${tabs} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `;
		}
		generateTabs() {
			const tabs = this.platforms.map((platform) => {
				if (platform === "browser") return {
					label: "Browser",
					icon: "extension",
					platform: "browser"
				};
				else if (platform === "mobile") return {
					label: "Mobile",
					icon: "mobile",
					platform: "mobile"
				};
				else if (platform === "qrcode") return {
					label: "Mobile",
					icon: "mobile",
					platform: "qrcode"
				};
				else if (platform === "web") return {
					label: "Webapp",
					icon: "browser",
					platform: "web"
				};
				else if (platform === "desktop") return {
					label: "Desktop",
					icon: "desktop",
					platform: "desktop"
				};
				return {
					label: "Browser",
					icon: "extension",
					platform: "unsupported"
				};
			});
			this.platformTabs = tabs.map(({ platform }) => platform);
			return tabs;
		}
		onTabChange(index) {
			const tab = this.platformTabs[index];
			if (tab) this.onSelectPlatfrom?.(tab);
		}
	};
	__decorate$43([n$4({ type: Array })], W3mConnectingHeader.prototype, "platforms", void 0);
	__decorate$43([n$4()], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
	W3mConnectingHeader = __decorate$43([customElement("w3m-connecting-header")], W3mConnectingHeader);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/styles.js
var styles_default$33;
var init_styles$33 = __esmMin((() => {
	init_lit();
	styles_default$33 = i$4`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-spinner/index.js
var __decorate$42, WuiLoadingSpinner;
var init_wui_loading_spinner$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$33();
	__decorate$42 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiLoadingSpinner = class WuiLoadingSpinner extends i$3 {
		constructor() {
			super(...arguments);
			this.color = "accent-100";
			this.size = "lg";
		}
		render() {
			this.style.cssText = `--local-color: ${this.color === "inherit" ? "inherit" : `var(--wui-color-${this.color})`}`;
			this.dataset["size"] = this.size;
			return T`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
		}
	};
	WuiLoadingSpinner.styles = [resetStyles, styles_default$33];
	__decorate$42([n$4()], WuiLoadingSpinner.prototype, "color", void 0);
	__decorate$42([n$4()], WuiLoadingSpinner.prototype, "size", void 0);
	WuiLoadingSpinner = __decorate$42([customElement("wui-loading-spinner")], WuiLoadingSpinner);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/styles.js
var styles_default$32;
var init_styles$32 = __esmMin((() => {
	init_lit();
	styles_default$32 = i$4`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-button/index.js
var __decorate$41, SPINNER_COLOR_BY_VARIANT, TEXT_VARIANT_BY_SIZE, SPINNER_SIZE_BY_SIZE, WuiButton;
var init_wui_button$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_loading_spinner$1();
	init_wui_text$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$32();
	__decorate$41 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	SPINNER_COLOR_BY_VARIANT = {
		main: "inverse-100",
		inverse: "inverse-000",
		accent: "accent-100",
		"accent-error": "error-100",
		"accent-success": "success-100",
		neutral: "fg-100",
		disabled: "gray-glass-020"
	};
	TEXT_VARIANT_BY_SIZE = {
		lg: "paragraph-600",
		md: "small-600"
	};
	SPINNER_SIZE_BY_SIZE = {
		lg: "md",
		md: "md"
	};
	WuiButton = class WuiButton extends i$3 {
		constructor() {
			super(...arguments);
			this.size = "lg";
			this.disabled = false;
			this.fullWidth = false;
			this.loading = false;
			this.variant = "main";
			this.hasIconLeft = false;
			this.hasIconRight = false;
			this.borderRadius = "m";
		}
		render() {
			this.style.cssText = `
    --local-width: ${this.fullWidth ? "100%" : "auto"};
    --local-opacity-100: ${this.loading ? 0 : 1};
    --local-opacity-000: ${this.loading ? 1 : 0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;
			const textVariant = this.textVariant ?? TEXT_VARIANT_BY_SIZE[this.size];
			return T`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${() => this.handleSlotLeftChange()}></slot>
        <wui-text variant=${textVariant} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${() => this.handleSlotRightChange()}></slot>
      </button>
    `;
		}
		handleSlotLeftChange() {
			this.hasIconLeft = true;
		}
		handleSlotRightChange() {
			this.hasIconRight = true;
		}
		loadingTemplate() {
			if (this.loading) {
				const size = SPINNER_SIZE_BY_SIZE[this.size];
				const color = this.disabled ? SPINNER_COLOR_BY_VARIANT["disabled"] : SPINNER_COLOR_BY_VARIANT[this.variant];
				return T`<wui-loading-spinner color=${color} size=${size}></wui-loading-spinner>`;
			}
			return T``;
		}
	};
	WuiButton.styles = [
		resetStyles,
		elementStyles,
		styles_default$32
	];
	__decorate$41([n$4()], WuiButton.prototype, "size", void 0);
	__decorate$41([n$4({ type: Boolean })], WuiButton.prototype, "disabled", void 0);
	__decorate$41([n$4({ type: Boolean })], WuiButton.prototype, "fullWidth", void 0);
	__decorate$41([n$4({ type: Boolean })], WuiButton.prototype, "loading", void 0);
	__decorate$41([n$4()], WuiButton.prototype, "variant", void 0);
	__decorate$41([n$4({ type: Boolean })], WuiButton.prototype, "hasIconLeft", void 0);
	__decorate$41([n$4({ type: Boolean })], WuiButton.prototype, "hasIconRight", void 0);
	__decorate$41([n$4()], WuiButton.prototype, "borderRadius", void 0);
	__decorate$41([n$4()], WuiButton.prototype, "textVariant", void 0);
	WuiButton = __decorate$41([customElement("wui-button")], WuiButton);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-button.js
var init_wui_button = __esmMin((() => {
	init_wui_button$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon.js
var init_wui_icon = __esmMin((() => {
	init_wui_icon$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-box.js
var init_wui_icon_box = __esmMin((() => {
	init_wui_icon_box$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-link/styles.js
var styles_default$31;
var init_styles$31 = __esmMin((() => {
	init_lit();
	styles_default$31 = i$4`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-link/index.js
var __decorate$40, WuiLink;
var init_wui_link$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_wui_text$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$31();
	__decorate$40 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiLink = class WuiLink extends i$3 {
		constructor() {
			super(...arguments);
			this.tabIdx = void 0;
			this.disabled = false;
			this.color = "inherit";
		}
		render() {
			return T`
      <button ?disabled=${this.disabled} tabindex=${o$2(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `;
		}
	};
	WuiLink.styles = [
		resetStyles,
		elementStyles,
		styles_default$31
	];
	__decorate$40([n$4()], WuiLink.prototype, "tabIdx", void 0);
	__decorate$40([n$4({ type: Boolean })], WuiLink.prototype, "disabled", void 0);
	__decorate$40([n$4()], WuiLink.prototype, "color", void 0);
	WuiLink = __decorate$40([customElement("wui-link")], WuiLink);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-link.js
var init_wui_link = __esmMin((() => {
	init_wui_link$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/styles.js
var styles_default$30;
var init_styles$30 = __esmMin((() => {
	init_lit();
	styles_default$30 = i$4`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-loading-thumbnail/index.js
var __decorate$39, WuiLoadingThumbnail;
var init_wui_loading_thumbnail$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$30();
	__decorate$39 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiLoadingThumbnail = class WuiLoadingThumbnail extends i$3 {
		constructor() {
			super(...arguments);
			this.radius = 36;
		}
		render() {
			return this.svgLoaderTemplate();
		}
		svgLoaderTemplate() {
			const radius = this.radius > 50 ? 50 : this.radius;
			const radiusFactor = 36 - radius;
			const dashArrayStart = 116 + radiusFactor;
			const dashArrayEnd = 245 + radiusFactor;
			const dashOffset = 360 + radiusFactor * 1.75;
			return T`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${radius}
          stroke-dasharray="${dashArrayStart} ${dashArrayEnd}"
          stroke-dashoffset=${dashOffset}
        />
      </svg>
    `;
		}
	};
	WuiLoadingThumbnail.styles = [resetStyles, styles_default$30];
	__decorate$39([n$4({ type: Number })], WuiLoadingThumbnail.prototype, "radius", void 0);
	WuiLoadingThumbnail = __decorate$39([customElement("wui-loading-thumbnail")], WuiLoadingThumbnail);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-thumbnail.js
var init_wui_loading_thumbnail = __esmMin((() => {
	init_wui_loading_thumbnail$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-text.js
var init_wui_text = __esmMin((() => {
	init_wui_text$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-wallet-image.js
var init_wui_wallet_image = __esmMin((() => {
	init_wui_wallet_image$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-chip-button/styles.js
var styles_default$29;
var init_styles$29 = __esmMin((() => {
	init_lit();
	styles_default$29 = i$4`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-chip-button/index.js
var __decorate$38, WuiChipButton;
var init_wui_chip_button = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_wui_image();
	init_wui_text$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$29();
	__decorate$38 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiChipButton = class WuiChipButton extends i$3 {
		constructor() {
			super(...arguments);
			this.variant = "accent";
			this.imageSrc = "";
			this.disabled = false;
			this.icon = "externalLink";
			this.size = "md";
			this.text = "";
		}
		render() {
			const textVariant = this.size === "sm" ? "small-600" : "paragraph-600";
			return T`
      <button
        class=${this.disabled ? "disabled" : ""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc ? T`<wui-image src=${this.imageSrc}></wui-image>` : null}
        <wui-text variant=${textVariant} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `;
		}
	};
	WuiChipButton.styles = [
		resetStyles,
		elementStyles,
		styles_default$29
	];
	__decorate$38([n$4()], WuiChipButton.prototype, "variant", void 0);
	__decorate$38([n$4()], WuiChipButton.prototype, "imageSrc", void 0);
	__decorate$38([n$4({ type: Boolean })], WuiChipButton.prototype, "disabled", void 0);
	__decorate$38([n$4()], WuiChipButton.prototype, "icon", void 0);
	__decorate$38([n$4()], WuiChipButton.prototype, "size", void 0);
	__decorate$38([n$4()], WuiChipButton.prototype, "text", void 0);
	WuiChipButton = __decorate$38([customElement("wui-chip-button")], WuiChipButton);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/styles.js
var styles_default$28;
var init_styles$28 = __esmMin((() => {
	init_lit();
	styles_default$28 = i$4`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-cta-button/index.js
var __decorate$37, WuiCtaButton;
var init_wui_cta_button$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_text$1();
	init_wui_chip_button();
	init_wui_flex$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$28();
	__decorate$37 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiCtaButton = class WuiCtaButton extends i$3 {
		constructor() {
			super(...arguments);
			this.disabled = false;
			this.label = "";
			this.buttonLabel = "";
		}
		render() {
			return T`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${[
				"1xs",
				"2l",
				"1xs",
				"2l"
			]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `;
		}
	};
	WuiCtaButton.styles = [
		resetStyles,
		elementStyles,
		styles_default$28
	];
	__decorate$37([n$4({ type: Boolean })], WuiCtaButton.prototype, "disabled", void 0);
	__decorate$37([n$4()], WuiCtaButton.prototype, "label", void 0);
	__decorate$37([n$4()], WuiCtaButton.prototype, "buttonLabel", void 0);
	WuiCtaButton = __decorate$37([customElement("wui-cta-button")], WuiCtaButton);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-cta-button.js
var init_wui_cta_button = __esmMin((() => {
	init_wui_cta_button$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/styles.js
var styles_default$27;
var init_styles$27 = __esmMin((() => {
	init_lit();
	styles_default$27 = i$4`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-mobile-download-links/index.js
var __decorate$36, W3mMobileDownloadLinks;
var init_w3m_mobile_download_links = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_wui_cta_button();
	init_styles$27();
	__decorate$36 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mMobileDownloadLinks = class W3mMobileDownloadLinks extends i$3 {
		constructor() {
			super(...arguments);
			this.wallet = void 0;
		}
		render() {
			if (!this.wallet) {
				this.style.display = "none";
				return null;
			}
			const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
			const isMobile = CoreHelperUtil.isMobile();
			const isIos = CoreHelperUtil.isIos();
			const isAndroid = CoreHelperUtil.isAndroid();
			const isMultiple = [
				app_store,
				play_store,
				homepage,
				chrome_store
			].filter(Boolean).length > 1;
			const shortName = UiHelperUtil.getTruncateString({
				string: name,
				charsStart: 12,
				charsEnd: 0,
				truncate: "end"
			});
			if (isMultiple && !isMobile) return T`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
			if (!isMultiple && homepage) return T`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
			if (app_store && isIos) return T`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
			if (play_store && isAndroid) return T`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
			this.style.display = "none";
			return null;
		}
		onAppStore() {
			if (this.wallet?.app_store) CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
		}
		onPlayStore() {
			if (this.wallet?.play_store) CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
		}
		onHomePage() {
			if (this.wallet?.homepage) CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
		}
	};
	W3mMobileDownloadLinks.styles = [styles_default$27];
	__decorate$36([n$4({ type: Object })], W3mMobileDownloadLinks.prototype, "wallet", void 0);
	W3mMobileDownloadLinks = __decorate$36([customElement("w3m-mobile-download-links")], W3mMobileDownloadLinks);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/styles.js
var styles_default$26;
var init_styles$26 = __esmMin((() => {
	init_lit();
	styles_default$26 = i$4`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/utils/w3m-connecting-widget/index.js
var __decorate$35, W3mConnectingWidget;
var init_w3m_connecting_widget = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_wui_button();
	init_wui_flex();
	init_wui_icon();
	init_wui_icon_box();
	init_wui_link();
	init_wui_loading_thumbnail();
	init_wui_text();
	init_wui_wallet_image();
	init_w3m_mobile_download_links();
	init_styles$26();
	__decorate$35 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWidget = class extends i$3 {
		constructor() {
			super();
			this.wallet = RouterController.state.data?.wallet;
			this.connector = RouterController.state.data?.connector;
			this.timeout = void 0;
			this.secondaryBtnIcon = "refresh";
			this.onConnect = void 0;
			this.onRender = void 0;
			this.onAutoConnect = void 0;
			this.isWalletConnect = true;
			this.unsubscribe = [];
			this.imageSrc = AssetUtil.getWalletImage(this.wallet) ?? AssetUtil.getConnectorImage(this.connector);
			this.name = this.wallet?.name ?? this.connector?.name ?? "Wallet";
			this.isRetrying = false;
			this.uri = ConnectionController.state.wcUri;
			this.error = ConnectionController.state.wcError;
			this.ready = false;
			this.showRetry = false;
			this.secondaryBtnLabel = "Try again";
			this.secondaryLabel = "Accept connection request in the wallet";
			this.isLoading = false;
			this.isMobile = false;
			this.onRetry = void 0;
			this.unsubscribe.push(...[ConnectionController.subscribeKey("wcUri", (val) => {
				this.uri = val;
				if (this.isRetrying && this.onRetry) {
					this.isRetrying = false;
					this.onConnect?.();
				}
			}), ConnectionController.subscribeKey("wcError", (val) => this.error = val)]);
			if ((CoreHelperUtil.isTelegram() || CoreHelperUtil.isSafari()) && CoreHelperUtil.isIos() && ConnectionController.state.wcUri) this.onConnect?.();
		}
		firstUpdated() {
			this.onAutoConnect?.();
			this.showRetry = !this.onAutoConnect;
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
			ConnectionController.setWcError(false);
			clearTimeout(this.timeout);
		}
		render() {
			this.onRender?.();
			this.onShowRetry();
			const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
			let label = `Continue in ${this.name}`;
			if (this.error) label = "Connection declined";
			return T`
      <wui-flex
        data-error=${o$2(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[
				"3xl",
				"xl",
				"xl",
				"xl"
			]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${o$2(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel ? T`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying || this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            ` : null}
      </wui-flex>

      ${this.isWalletConnect ? T`
            <wui-flex .padding=${[
				"0",
				"xl",
				"xl",
				"xl"
			]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
		}
		onShowRetry() {
			if (this.error && !this.showRetry) {
				this.showRetry = true;
				(this.shadowRoot?.querySelector("wui-button"))?.animate([{ opacity: 0 }, { opacity: 1 }], {
					fill: "forwards",
					easing: "ease"
				});
			}
		}
		onTryAgain() {
			ConnectionController.setWcError(false);
			if (this.onRetry) {
				this.isRetrying = true;
				this.onRetry?.();
			} else this.onConnect?.();
		}
		loaderTemplate() {
			const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
			const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
			return T`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
		}
		onCopyUri() {
			try {
				if (this.uri) {
					CoreHelperUtil.copyToClopboard(this.uri);
					SnackController.showSuccess("Link copied");
				}
			} catch {
				SnackController.showError("Failed to copy");
			}
		}
	};
	W3mConnectingWidget.styles = styles_default$26;
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "isRetrying", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "uri", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "error", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "ready", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "showRetry", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "secondaryBtnLabel", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "secondaryLabel", void 0);
	__decorate$35([r$2()], W3mConnectingWidget.prototype, "isLoading", void 0);
	__decorate$35([n$4({ type: Boolean })], W3mConnectingWidget.prototype, "isMobile", void 0);
	__decorate$35([n$4()], W3mConnectingWidget.prototype, "onRetry", void 0);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var __decorate$34, W3mConnectingWcBrowser;
var init_w3m_connecting_wc_browser = __esmMin((() => {
	init_exports();
	init_exports$1();
	init_w3m_connecting_widget();
	__decorate$34 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcBrowser = class W3mConnectingWcBrowser extends W3mConnectingWidget {
		constructor() {
			super();
			if (!this.wallet) throw new Error("w3m-connecting-wc-browser: No wallet provided");
			this.onConnect = this.onConnectProxy.bind(this);
			this.onAutoConnect = this.onConnectProxy.bind(this);
			EventsController.sendEvent({
				type: "track",
				event: "SELECT_WALLET",
				properties: {
					name: this.wallet.name,
					platform: "browser"
				}
			});
		}
		async onConnectProxy() {
			try {
				this.error = false;
				const { connectors } = ConnectorController.state;
				const connector = connectors.find((c) => c.type === "ANNOUNCED" && c.info?.rdns === this.wallet?.rdns || c.type === "INJECTED" || c.name === this.wallet?.name);
				if (connector) await ConnectionController.connectExternal(connector, connector.chain);
				else throw new Error("w3m-connecting-wc-browser: No connector found");
				ModalController.close();
				EventsController.sendEvent({
					type: "track",
					event: "CONNECT_SUCCESS",
					properties: {
						method: "browser",
						name: this.wallet?.name || "Unknown"
					}
				});
			} catch (error) {
				EventsController.sendEvent({
					type: "track",
					event: "CONNECT_ERROR",
					properties: { message: error?.message ?? "Unknown" }
				});
				this.error = true;
			}
		}
	};
	W3mConnectingWcBrowser = __decorate$34([customElement("w3m-connecting-wc-browser")], W3mConnectingWcBrowser);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var __decorate$33, W3mConnectingWcDesktop;
var init_w3m_connecting_wc_desktop = __esmMin((() => {
	init_exports();
	init_exports$1();
	init_w3m_connecting_widget();
	__decorate$33 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcDesktop = class W3mConnectingWcDesktop extends W3mConnectingWidget {
		constructor() {
			super();
			if (!this.wallet) throw new Error("w3m-connecting-wc-desktop: No wallet provided");
			this.onConnect = this.onConnectProxy.bind(this);
			this.onRender = this.onRenderProxy.bind(this);
			EventsController.sendEvent({
				type: "track",
				event: "SELECT_WALLET",
				properties: {
					name: this.wallet.name,
					platform: "desktop"
				}
			});
		}
		onRenderProxy() {
			if (!this.ready && this.uri) {
				this.ready = true;
				this.onConnect?.();
			}
		}
		onConnectProxy() {
			if (this.wallet?.desktop_link && this.uri) try {
				this.error = false;
				const { desktop_link, name } = this.wallet;
				const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
				ConnectionController.setWcLinking({
					name,
					href
				});
				ConnectionController.setRecentWallet(this.wallet);
				CoreHelperUtil.openHref(redirect, "_blank");
			} catch {
				this.error = true;
			}
		}
	};
	W3mConnectingWcDesktop = __decorate$33([customElement("w3m-connecting-wc-desktop")], W3mConnectingWcDesktop);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var __decorate$32, W3mConnectingWcMobile;
var init_w3m_connecting_wc_mobile = __esmMin((() => {
	init_decorators();
	init_exports();
	init_exports$1();
	init_w3m_connecting_widget();
	__decorate$32 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcMobile = class W3mConnectingWcMobile extends W3mConnectingWidget {
		constructor() {
			super();
			this.btnLabelTimeout = void 0;
			this.redirectDeeplink = void 0;
			this.redirectUniversalLink = void 0;
			this.target = void 0;
			this.preferUniversalLinks = OptionsController.state.experimental_preferUniversalLinks;
			this.isLoading = true;
			this.onConnect = () => {
				if (this.wallet?.mobile_link && this.uri) try {
					this.error = false;
					const { mobile_link, link_mode, name } = this.wallet;
					const { redirect, redirectUniversalLink, href } = CoreHelperUtil.formatNativeUrl(mobile_link, this.uri, link_mode);
					this.redirectDeeplink = redirect;
					this.redirectUniversalLink = redirectUniversalLink;
					this.target = CoreHelperUtil.isIframe() ? "_top" : "_self";
					ConnectionController.setWcLinking({
						name,
						href
					});
					ConnectionController.setRecentWallet(this.wallet);
					if (this.preferUniversalLinks && this.redirectUniversalLink) CoreHelperUtil.openHref(this.redirectUniversalLink, this.target);
					else CoreHelperUtil.openHref(this.redirectDeeplink, this.target);
				} catch (e) {
					EventsController.sendEvent({
						type: "track",
						event: "CONNECT_PROXY_ERROR",
						properties: {
							message: e instanceof Error ? e.message : "Error parsing the deeplink",
							uri: this.uri,
							mobile_link: this.wallet.mobile_link,
							name: this.wallet.name
						}
					});
					this.error = true;
				}
			};
			if (!this.wallet) throw new Error("w3m-connecting-wc-mobile: No wallet provided");
			this.secondaryBtnLabel = "Open";
			this.secondaryLabel = ConstantsUtil$1.CONNECT_LABELS.MOBILE;
			this.secondaryBtnIcon = "externalLink";
			this.onHandleURI();
			this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
				this.onHandleURI();
			}));
			EventsController.sendEvent({
				type: "track",
				event: "SELECT_WALLET",
				properties: {
					name: this.wallet.name,
					platform: "mobile"
				}
			});
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			clearTimeout(this.btnLabelTimeout);
		}
		onHandleURI() {
			this.isLoading = !this.uri;
			if (!this.ready && this.uri) {
				this.ready = true;
				this.onConnect?.();
			}
		}
		onTryAgain() {
			ConnectionController.setWcError(false);
			this.onConnect?.();
		}
	};
	__decorate$32([r$2()], W3mConnectingWcMobile.prototype, "redirectDeeplink", void 0);
	__decorate$32([r$2()], W3mConnectingWcMobile.prototype, "redirectUniversalLink", void 0);
	__decorate$32([r$2()], W3mConnectingWcMobile.prototype, "target", void 0);
	__decorate$32([r$2()], W3mConnectingWcMobile.prototype, "preferUniversalLinks", void 0);
	__decorate$32([r$2()], W3mConnectingWcMobile.prototype, "isLoading", void 0);
	W3mConnectingWcMobile = __decorate$32([customElement("w3m-connecting-wc-mobile")], W3mConnectingWcMobile);
}));
//#endregion
//#region node_modules/qrcode/lib/can-promise.js
var require_can_promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {
		return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/utils.js
var require_utils$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var toSJISFunction;
	var CODEWORDS_COUNT = [
		0,
		26,
		44,
		70,
		100,
		134,
		172,
		196,
		242,
		292,
		346,
		404,
		466,
		532,
		581,
		655,
		733,
		815,
		901,
		991,
		1085,
		1156,
		1258,
		1364,
		1474,
		1588,
		1706,
		1828,
		1921,
		2051,
		2185,
		2323,
		2465,
		2611,
		2761,
		2876,
		3034,
		3196,
		3362,
		3532,
		3706
	];
	/**
	* Returns the QR Code size for the specified version
	*
	* @param  {Number} version QR Code version
	* @return {Number}         size of QR code
	*/
	exports.getSymbolSize = function getSymbolSize(version) {
		if (!version) throw new Error("\"version\" cannot be null or undefined");
		if (version < 1 || version > 40) throw new Error("\"version\" should be in range from 1 to 40");
		return version * 4 + 17;
	};
	/**
	* Returns the total number of codewords used to store data and EC information.
	*
	* @param  {Number} version QR Code version
	* @return {Number}         Data length in bits
	*/
	exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
		return CODEWORDS_COUNT[version];
	};
	/**
	* Encode data with Bose-Chaudhuri-Hocquenghem
	*
	* @param  {Number} data Value to encode
	* @return {Number}      Encoded value
	*/
	exports.getBCHDigit = function(data) {
		let digit = 0;
		while (data !== 0) {
			digit++;
			data >>>= 1;
		}
		return digit;
	};
	exports.setToSJISFunction = function setToSJISFunction(f) {
		if (typeof f !== "function") throw new Error("\"toSJISFunc\" is not a valid function.");
		toSJISFunction = f;
	};
	exports.isKanjiModeEnabled = function() {
		return typeof toSJISFunction !== "undefined";
	};
	exports.toSJIS = function toSJIS(kanji) {
		return toSJISFunction(kanji);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.L = { bit: 1 };
	exports.M = { bit: 0 };
	exports.Q = { bit: 3 };
	exports.H = { bit: 2 };
	function fromString(string) {
		if (typeof string !== "string") throw new Error("Param is not a string");
		switch (string.toLowerCase()) {
			case "l":
			case "low": return exports.L;
			case "m":
			case "medium": return exports.M;
			case "q":
			case "quartile": return exports.Q;
			case "h":
			case "high": return exports.H;
			default: throw new Error("Unknown EC Level: " + string);
		}
	}
	exports.isValid = function isValid(level) {
		return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
	};
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) return value;
		try {
			return fromString(value);
		} catch (e) {
			return defaultValue;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function BitBuffer() {
		this.buffer = [];
		this.length = 0;
	}
	BitBuffer.prototype = {
		get: function(index) {
			const bufIndex = Math.floor(index / 8);
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
		},
		put: function(num, length) {
			for (let i = 0; i < length; i++) this.putBit((num >>> length - i - 1 & 1) === 1);
		},
		getLengthInBits: function() {
			return this.length;
		},
		putBit: function(bit) {
			const bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) this.buffer.push(0);
			if (bit) this.buffer[bufIndex] |= 128 >>> this.length % 8;
			this.length++;
		}
	};
	module.exports = BitBuffer;
}));
//#endregion
//#region node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Helper class to handle QR Code symbol modules
	*
	* @param {Number} size Symbol size
	*/
	function BitMatrix(size) {
		if (!size || size < 1) throw new Error("BitMatrix size must be defined and greater than 0");
		this.size = size;
		this.data = new Uint8Array(size * size);
		this.reservedBit = new Uint8Array(size * size);
	}
	/**
	* Set bit value at specified location
	* If reserved flag is set, this bit will be ignored during masking process
	*
	* @param {Number}  row
	* @param {Number}  col
	* @param {Boolean} value
	* @param {Boolean} reserved
	*/
	BitMatrix.prototype.set = function(row, col, value, reserved) {
		const index = row * this.size + col;
		this.data[index] = value;
		if (reserved) this.reservedBit[index] = true;
	};
	/**
	* Returns bit value at specified location
	*
	* @param  {Number}  row
	* @param  {Number}  col
	* @return {Boolean}
	*/
	BitMatrix.prototype.get = function(row, col) {
		return this.data[row * this.size + col];
	};
	/**
	* Applies xor operator at specified location
	* (used during masking process)
	*
	* @param {Number}  row
	* @param {Number}  col
	* @param {Boolean} value
	*/
	BitMatrix.prototype.xor = function(row, col, value) {
		this.data[row * this.size + col] ^= value;
	};
	/**
	* Check if bit at specified location is reserved
	*
	* @param {Number}   row
	* @param {Number}   col
	* @return {Boolean}
	*/
	BitMatrix.prototype.isReserved = function(row, col) {
		return this.reservedBit[row * this.size + col];
	};
	module.exports = BitMatrix;
}));
//#endregion
//#region node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Alignment pattern are fixed reference pattern in defined positions
	* in a matrix symbology, which enables the decode software to re-synchronise
	* the coordinate mapping of the image modules in the event of moderate amounts
	* of distortion of the image.
	*
	* Alignment patterns are present only in QR Code symbols of version 2 or larger
	* and their number depends on the symbol version.
	*/
	var getSymbolSize = require_utils$1().getSymbolSize;
	/**
	* Calculate the row/column coordinates of the center module of each alignment pattern
	* for the specified QR Code version.
	*
	* The alignment patterns are positioned symmetrically on either side of the diagonal
	* running from the top left corner of the symbol to the bottom right corner.
	*
	* Since positions are simmetrical only half of the coordinates are returned.
	* Each item of the array will represent in turn the x and y coordinate.
	* @see {@link getPositions}
	*
	* @param  {Number} version QR Code version
	* @return {Array}          Array of coordinate
	*/
	exports.getRowColCoords = function getRowColCoords(version) {
		if (version === 1) return [];
		const posCount = Math.floor(version / 7) + 2;
		const size = getSymbolSize(version);
		const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
		const positions = [size - 7];
		for (let i = 1; i < posCount - 1; i++) positions[i] = positions[i - 1] - intervals;
		positions.push(6);
		return positions.reverse();
	};
	/**
	* Returns an array containing the positions of each alignment pattern.
	* Each array's element represent the center point of the pattern as (x, y) coordinates
	*
	* Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
	* and filtering out the items that overlaps with finder pattern
	*
	* @example
	* For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
	* The alignment patterns, therefore, are to be centered on (row, column)
	* positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
	* Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
	* and are not therefore used for alignment patterns.
	*
	* let pos = getPositions(7)
	* // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
	*
	* @param  {Number} version QR Code version
	* @return {Array}          Array of coordinates
	*/
	exports.getPositions = function getPositions(version) {
		const coords = [];
		const pos = exports.getRowColCoords(version);
		const posLength = pos.length;
		for (let i = 0; i < posLength; i++) for (let j = 0; j < posLength; j++) {
			if (i === 0 && j === 0 || i === 0 && j === posLength - 1 || i === posLength - 1 && j === 0) continue;
			coords.push([pos[i], pos[j]]);
		}
		return coords;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	var getSymbolSize = require_utils$1().getSymbolSize;
	var FINDER_PATTERN_SIZE = 7;
	/**
	* Returns an array containing the positions of each finder pattern.
	* Each array's element represent the top-left point of the pattern as (x, y) coordinates
	*
	* @param  {Number} version QR Code version
	* @return {Array}          Array of coordinates
	*/
	exports.getPositions = function getPositions(version) {
		const size = getSymbolSize(version);
		return [
			[0, 0],
			[size - FINDER_PATTERN_SIZE, 0],
			[0, size - FINDER_PATTERN_SIZE]
		];
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Data mask pattern reference
	* @type {Object}
	*/
	exports.Patterns = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};
	/**
	* Weighted penalty scores for the undesirable features
	* @type {Object}
	*/
	var PenaltyScores = {
		N1: 3,
		N2: 3,
		N3: 40,
		N4: 10
	};
	/**
	* Check if mask pattern value is valid
	*
	* @param  {Number}  mask    Mask pattern
	* @return {Boolean}         true if valid, false otherwise
	*/
	exports.isValid = function isValid(mask) {
		return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
	};
	/**
	* Returns mask pattern from a value.
	* If value is not valid, returns undefined
	*
	* @param  {Number|String} value        Mask pattern value
	* @return {Number}                     Valid mask pattern or undefined
	*/
	exports.from = function from(value) {
		return exports.isValid(value) ? parseInt(value, 10) : void 0;
	};
	/**
	* Find adjacent modules in row/column with the same color
	* and assign a penalty value.
	*
	* Points: N1 + i
	* i is the amount by which the number of adjacent modules of the same color exceeds 5
	*/
	exports.getPenaltyN1 = function getPenaltyN1(data) {
		const size = data.size;
		let points = 0;
		let sameCountCol = 0;
		let sameCountRow = 0;
		let lastCol = null;
		let lastRow = null;
		for (let row = 0; row < size; row++) {
			sameCountCol = sameCountRow = 0;
			lastCol = lastRow = null;
			for (let col = 0; col < size; col++) {
				let module$1 = data.get(row, col);
				if (module$1 === lastCol) sameCountCol++;
				else {
					if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
					lastCol = module$1;
					sameCountCol = 1;
				}
				module$1 = data.get(col, row);
				if (module$1 === lastRow) sameCountRow++;
				else {
					if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
					lastRow = module$1;
					sameCountRow = 1;
				}
			}
			if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
			if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
		}
		return points;
	};
	/**
	* Find 2x2 blocks with the same color and assign a penalty value
	*
	* Points: N2 * (m - 1) * (n - 1)
	*/
	exports.getPenaltyN2 = function getPenaltyN2(data) {
		const size = data.size;
		let points = 0;
		for (let row = 0; row < size - 1; row++) for (let col = 0; col < size - 1; col++) {
			const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
			if (last === 4 || last === 0) points++;
		}
		return points * PenaltyScores.N2;
	};
	/**
	* Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
	* preceded or followed by light area 4 modules wide
	*
	* Points: N3 * number of pattern found
	*/
	exports.getPenaltyN3 = function getPenaltyN3(data) {
		const size = data.size;
		let points = 0;
		let bitsCol = 0;
		let bitsRow = 0;
		for (let row = 0; row < size; row++) {
			bitsCol = bitsRow = 0;
			for (let col = 0; col < size; col++) {
				bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
				if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
				bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
				if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
			}
		}
		return points * PenaltyScores.N3;
	};
	/**
	* Calculate proportion of dark modules in entire symbol
	*
	* Points: N4 * k
	*
	* k is the rating of the deviation of the proportion of dark modules
	* in the symbol from 50% in steps of 5%
	*/
	exports.getPenaltyN4 = function getPenaltyN4(data) {
		let darkCount = 0;
		const modulesCount = data.data.length;
		for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
		return Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10) * PenaltyScores.N4;
	};
	/**
	* Return mask value at given position
	*
	* @param  {Number} maskPattern Pattern reference value
	* @param  {Number} i           Row
	* @param  {Number} j           Column
	* @return {Boolean}            Mask value
	*/
	function getMaskAt(maskPattern, i, j) {
		switch (maskPattern) {
			case exports.Patterns.PATTERN000: return (i + j) % 2 === 0;
			case exports.Patterns.PATTERN001: return i % 2 === 0;
			case exports.Patterns.PATTERN010: return j % 3 === 0;
			case exports.Patterns.PATTERN011: return (i + j) % 3 === 0;
			case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
			case exports.Patterns.PATTERN101: return i * j % 2 + i * j % 3 === 0;
			case exports.Patterns.PATTERN110: return (i * j % 2 + i * j % 3) % 2 === 0;
			case exports.Patterns.PATTERN111: return (i * j % 3 + (i + j) % 2) % 2 === 0;
			default: throw new Error("bad maskPattern:" + maskPattern);
		}
	}
	/**
	* Apply a mask pattern to a BitMatrix
	*
	* @param  {Number}    pattern Pattern reference number
	* @param  {BitMatrix} data    BitMatrix data
	*/
	exports.applyMask = function applyMask(pattern, data) {
		const size = data.size;
		for (let col = 0; col < size; col++) for (let row = 0; row < size; row++) {
			if (data.isReserved(row, col)) continue;
			data.xor(row, col, getMaskAt(pattern, row, col));
		}
	};
	/**
	* Returns the best mask pattern for data
	*
	* @param  {BitMatrix} data
	* @return {Number} Mask pattern reference number
	*/
	exports.getBestMask = function getBestMask(data, setupFormatFunc) {
		const numPatterns = Object.keys(exports.Patterns).length;
		let bestPattern = 0;
		let lowerPenalty = Infinity;
		for (let p = 0; p < numPatterns; p++) {
			setupFormatFunc(p);
			exports.applyMask(p, data);
			const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
			exports.applyMask(p, data);
			if (penalty < lowerPenalty) {
				lowerPenalty = penalty;
				bestPattern = p;
			}
		}
		return bestPattern;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ECLevel = require_error_correction_level();
	var EC_BLOCKS_TABLE = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		1,
		2,
		2,
		4,
		1,
		2,
		4,
		4,
		2,
		4,
		4,
		4,
		2,
		4,
		6,
		5,
		2,
		4,
		6,
		6,
		2,
		5,
		8,
		8,
		4,
		5,
		8,
		8,
		4,
		5,
		8,
		11,
		4,
		8,
		10,
		11,
		4,
		9,
		12,
		16,
		4,
		9,
		16,
		16,
		6,
		10,
		12,
		18,
		6,
		10,
		17,
		16,
		6,
		11,
		16,
		19,
		6,
		13,
		18,
		21,
		7,
		14,
		21,
		25,
		8,
		16,
		20,
		25,
		8,
		17,
		23,
		25,
		9,
		17,
		23,
		34,
		9,
		18,
		25,
		30,
		10,
		20,
		27,
		32,
		12,
		21,
		29,
		35,
		12,
		23,
		34,
		37,
		12,
		25,
		34,
		40,
		13,
		26,
		35,
		42,
		14,
		28,
		38,
		45,
		15,
		29,
		40,
		48,
		16,
		31,
		43,
		51,
		17,
		33,
		45,
		54,
		18,
		35,
		48,
		57,
		19,
		37,
		51,
		60,
		19,
		38,
		53,
		63,
		20,
		40,
		56,
		66,
		21,
		43,
		59,
		70,
		22,
		45,
		62,
		74,
		24,
		47,
		65,
		77,
		25,
		49,
		68,
		81
	];
	var EC_CODEWORDS_TABLE = [
		7,
		10,
		13,
		17,
		10,
		16,
		22,
		28,
		15,
		26,
		36,
		44,
		20,
		36,
		52,
		64,
		26,
		48,
		72,
		88,
		36,
		64,
		96,
		112,
		40,
		72,
		108,
		130,
		48,
		88,
		132,
		156,
		60,
		110,
		160,
		192,
		72,
		130,
		192,
		224,
		80,
		150,
		224,
		264,
		96,
		176,
		260,
		308,
		104,
		198,
		288,
		352,
		120,
		216,
		320,
		384,
		132,
		240,
		360,
		432,
		144,
		280,
		408,
		480,
		168,
		308,
		448,
		532,
		180,
		338,
		504,
		588,
		196,
		364,
		546,
		650,
		224,
		416,
		600,
		700,
		224,
		442,
		644,
		750,
		252,
		476,
		690,
		816,
		270,
		504,
		750,
		900,
		300,
		560,
		810,
		960,
		312,
		588,
		870,
		1050,
		336,
		644,
		952,
		1110,
		360,
		700,
		1020,
		1200,
		390,
		728,
		1050,
		1260,
		420,
		784,
		1140,
		1350,
		450,
		812,
		1200,
		1440,
		480,
		868,
		1290,
		1530,
		510,
		924,
		1350,
		1620,
		540,
		980,
		1440,
		1710,
		570,
		1036,
		1530,
		1800,
		570,
		1064,
		1590,
		1890,
		600,
		1120,
		1680,
		1980,
		630,
		1204,
		1770,
		2100,
		660,
		1260,
		1860,
		2220,
		720,
		1316,
		1950,
		2310,
		750,
		1372,
		2040,
		2430
	];
	/**
	* Returns the number of error correction block that the QR Code should contain
	* for the specified version and error correction level.
	*
	* @param  {Number} version              QR Code version
	* @param  {Number} errorCorrectionLevel Error correction level
	* @return {Number}                      Number of error correction blocks
	*/
	exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel.L: return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
			case ECLevel.M: return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
			case ECLevel.Q: return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
			case ECLevel.H: return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
			default: return;
		}
	};
	/**
	* Returns the number of error correction codewords to use for the specified
	* version and error correction level.
	*
	* @param  {Number} version              QR Code version
	* @param  {Number} errorCorrectionLevel Error correction level
	* @return {Number}                      Number of error correction codewords
	*/
	exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
		switch (errorCorrectionLevel) {
			case ECLevel.L: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
			case ECLevel.M: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
			case ECLevel.Q: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
			case ECLevel.H: return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
			default: return;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = /* @__PURE__ */ __commonJSMin(((exports) => {
	var EXP_TABLE = /* @__PURE__ */ new Uint8Array(512);
	var LOG_TABLE = /* @__PURE__ */ new Uint8Array(256);
	(function initTables() {
		let x = 1;
		for (let i = 0; i < 255; i++) {
			EXP_TABLE[i] = x;
			LOG_TABLE[x] = i;
			x <<= 1;
			if (x & 256) x ^= 285;
		}
		for (let i = 255; i < 512; i++) EXP_TABLE[i] = EXP_TABLE[i - 255];
	})();
	/**
	* Returns log value of n inside Galois Field
	*
	* @param  {Number} n
	* @return {Number}
	*/
	exports.log = function log(n) {
		if (n < 1) throw new Error("log(" + n + ")");
		return LOG_TABLE[n];
	};
	/**
	* Returns anti-log value of n inside Galois Field
	*
	* @param  {Number} n
	* @return {Number}
	*/
	exports.exp = function exp(n) {
		return EXP_TABLE[n];
	};
	/**
	* Multiplies two number inside Galois Field
	*
	* @param  {Number} x
	* @param  {Number} y
	* @return {Number}
	*/
	exports.mul = function mul(x, y) {
		if (x === 0 || y === 0) return 0;
		return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = /* @__PURE__ */ __commonJSMin(((exports) => {
	var GF = require_galois_field();
	/**
	* Multiplies two polynomials inside Galois Field
	*
	* @param  {Uint8Array} p1 Polynomial
	* @param  {Uint8Array} p2 Polynomial
	* @return {Uint8Array}    Product of p1 and p2
	*/
	exports.mul = function mul(p1, p2) {
		const coeff = new Uint8Array(p1.length + p2.length - 1);
		for (let i = 0; i < p1.length; i++) for (let j = 0; j < p2.length; j++) coeff[i + j] ^= GF.mul(p1[i], p2[j]);
		return coeff;
	};
	/**
	* Calculate the remainder of polynomials division
	*
	* @param  {Uint8Array} divident Polynomial
	* @param  {Uint8Array} divisor  Polynomial
	* @return {Uint8Array}          Remainder
	*/
	exports.mod = function mod(divident, divisor) {
		let result = new Uint8Array(divident);
		while (result.length - divisor.length >= 0) {
			const coeff = result[0];
			for (let i = 0; i < divisor.length; i++) result[i] ^= GF.mul(divisor[i], coeff);
			let offset = 0;
			while (offset < result.length && result[offset] === 0) offset++;
			result = result.slice(offset);
		}
		return result;
	};
	/**
	* Generate an irreducible generator polynomial of specified degree
	* (used by Reed-Solomon encoder)
	*
	* @param  {Number} degree Degree of the generator polynomial
	* @return {Uint8Array}    Buffer containing polynomial coefficients
	*/
	exports.generateECPolynomial = function generateECPolynomial(degree) {
		let poly = new Uint8Array([1]);
		for (let i = 0; i < degree; i++) poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
		return poly;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Polynomial = require_polynomial();
	function ReedSolomonEncoder(degree) {
		this.genPoly = void 0;
		this.degree = degree;
		if (this.degree) this.initialize(this.degree);
	}
	/**
	* Initialize the encoder.
	* The input param should correspond to the number of error correction codewords.
	*
	* @param  {Number} degree
	*/
	ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
		this.degree = degree;
		this.genPoly = Polynomial.generateECPolynomial(this.degree);
	};
	/**
	* Encodes a chunk of data
	*
	* @param  {Uint8Array} data Buffer containing input data
	* @return {Uint8Array}      Buffer containing encoded data
	*/
	ReedSolomonEncoder.prototype.encode = function encode(data) {
		if (!this.genPoly) throw new Error("Encoder not initialized");
		const paddedData = new Uint8Array(data.length + this.degree);
		paddedData.set(data);
		const remainder = Polynomial.mod(paddedData, this.genPoly);
		const start = this.degree - remainder.length;
		if (start > 0) {
			const buff = new Uint8Array(this.degree);
			buff.set(remainder, start);
			return buff;
		}
		return remainder;
	};
	module.exports = ReedSolomonEncoder;
}));
//#endregion
//#region node_modules/qrcode/lib/core/version-check.js
var require_version_check = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Check if QR Code version is valid
	*
	* @param  {Number}  version QR Code version
	* @return {Boolean}         true if valid version, false otherwise
	*/
	exports.isValid = function isValid(version) {
		return !isNaN(version) && version >= 1 && version <= 40;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/regex.js
var require_regex = /* @__PURE__ */ __commonJSMin(((exports) => {
	var numeric = "[0-9]+";
	var alphanumeric = "[A-Z $%*+\\-./:]+";
	var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
	kanji = kanji.replace(/u/g, "\\u");
	var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
	exports.KANJI = new RegExp(kanji, "g");
	exports.BYTE_KANJI = /* @__PURE__ */ new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
	exports.BYTE = new RegExp(byte, "g");
	exports.NUMERIC = new RegExp(numeric, "g");
	exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
	var TEST_KANJI = new RegExp("^" + kanji + "$");
	var TEST_NUMERIC = /* @__PURE__ */ new RegExp("^[0-9]+$");
	var TEST_ALPHANUMERIC = /* @__PURE__ */ new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
	exports.testKanji = function testKanji(str) {
		return TEST_KANJI.test(str);
	};
	exports.testNumeric = function testNumeric(str) {
		return TEST_NUMERIC.test(str);
	};
	exports.testAlphanumeric = function testAlphanumeric(str) {
		return TEST_ALPHANUMERIC.test(str);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/mode.js
var require_mode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var VersionCheck = require_version_check();
	var Regex = require_regex();
	/**
	* Numeric mode encodes data from the decimal digit set (0 - 9)
	* (byte values 30HEX to 39HEX).
	* Normally, 3 data characters are represented by 10 bits.
	*
	* @type {Object}
	*/
	exports.NUMERIC = {
		id: "Numeric",
		bit: 1,
		ccBits: [
			10,
			12,
			14
		]
	};
	/**
	* Alphanumeric mode encodes data from a set of 45 characters,
	* i.e. 10 numeric digits (0 - 9),
	*      26 alphabetic characters (A - Z),
	*   and 9 symbols (SP, $, %, *, +, -, ., /, :).
	* Normally, two input characters are represented by 11 bits.
	*
	* @type {Object}
	*/
	exports.ALPHANUMERIC = {
		id: "Alphanumeric",
		bit: 2,
		ccBits: [
			9,
			11,
			13
		]
	};
	/**
	* In byte mode, data is encoded at 8 bits per character.
	*
	* @type {Object}
	*/
	exports.BYTE = {
		id: "Byte",
		bit: 4,
		ccBits: [
			8,
			16,
			16
		]
	};
	/**
	* The Kanji mode efficiently encodes Kanji characters in accordance with
	* the Shift JIS system based on JIS X 0208.
	* The Shift JIS values are shifted from the JIS X 0208 values.
	* JIS X 0208 gives details of the shift coded representation.
	* Each two-byte character value is compacted to a 13-bit binary codeword.
	*
	* @type {Object}
	*/
	exports.KANJI = {
		id: "Kanji",
		bit: 8,
		ccBits: [
			8,
			10,
			12
		]
	};
	/**
	* Mixed mode will contain a sequences of data in a combination of any of
	* the modes described above
	*
	* @type {Object}
	*/
	exports.MIXED = { bit: -1 };
	/**
	* Returns the number of bits needed to store the data length
	* according to QR Code specifications.
	*
	* @param  {Mode}   mode    Data mode
	* @param  {Number} version QR Code version
	* @return {Number}         Number of bits
	*/
	exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
		if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
		if (!VersionCheck.isValid(version)) throw new Error("Invalid version: " + version);
		if (version >= 1 && version < 10) return mode.ccBits[0];
		else if (version < 27) return mode.ccBits[1];
		return mode.ccBits[2];
	};
	/**
	* Returns the most efficient mode to store the specified data
	*
	* @param  {String} dataStr Input data string
	* @return {Mode}           Best mode
	*/
	exports.getBestModeForData = function getBestModeForData(dataStr) {
		if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
		else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
		else if (Regex.testKanji(dataStr)) return exports.KANJI;
		else return exports.BYTE;
	};
	/**
	* Return mode name as string
	*
	* @param {Mode} mode Mode object
	* @returns {String}  Mode name
	*/
	exports.toString = function toString(mode) {
		if (mode && mode.id) return mode.id;
		throw new Error("Invalid mode");
	};
	/**
	* Check if input param is a valid mode object
	*
	* @param   {Mode}    mode Mode object
	* @returns {Boolean} True if valid mode, false otherwise
	*/
	exports.isValid = function isValid(mode) {
		return mode && mode.bit && mode.ccBits;
	};
	/**
	* Get mode object from its name
	*
	* @param   {String} string Mode name
	* @returns {Mode}          Mode object
	*/
	function fromString(string) {
		if (typeof string !== "string") throw new Error("Param is not a string");
		switch (string.toLowerCase()) {
			case "numeric": return exports.NUMERIC;
			case "alphanumeric": return exports.ALPHANUMERIC;
			case "kanji": return exports.KANJI;
			case "byte": return exports.BYTE;
			default: throw new Error("Unknown mode: " + string);
		}
	}
	/**
	* Returns mode from a value.
	* If value is not a valid mode, returns defaultValue
	*
	* @param  {Mode|String} value        Encoding mode
	* @param  {Mode}        defaultValue Fallback value
	* @return {Mode}                     Encoding mode
	*/
	exports.from = function from(value, defaultValue) {
		if (exports.isValid(value)) return value;
		try {
			return fromString(value);
		} catch (e) {
			return defaultValue;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/version.js
var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils$1();
	var ECCode = require_error_correction_code();
	var ECLevel = require_error_correction_level();
	var Mode = require_mode();
	var VersionCheck = require_version_check();
	var G18 = 7973;
	var G18_BCH = Utils.getBCHDigit(G18);
	function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) return currentVersion;
	}
	function getReservedBitsCount(mode, version) {
		return Mode.getCharCountIndicator(mode, version) + 4;
	}
	function getTotalBitsFromDataArray(segments, version) {
		let totalBits = 0;
		segments.forEach(function(data) {
			const reservedBits = getReservedBitsCount(data.mode, version);
			totalBits += reservedBits + data.getBitsLength();
		});
		return totalBits;
	}
	function getBestVersionForMixedData(segments, errorCorrectionLevel) {
		for (let currentVersion = 1; currentVersion <= 40; currentVersion++) if (getTotalBitsFromDataArray(segments, currentVersion) <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) return currentVersion;
	}
	/**
	* Returns version number from a value.
	* If value is not a valid version, returns defaultValue
	*
	* @param  {Number|String} value        QR Code version
	* @param  {Number}        defaultValue Fallback value
	* @return {Number}                     QR Code version number
	*/
	exports.from = function from(value, defaultValue) {
		if (VersionCheck.isValid(value)) return parseInt(value, 10);
		return defaultValue;
	};
	/**
	* Returns how much data can be stored with the specified QR code version
	* and error correction level
	*
	* @param  {Number} version              QR Code version (1-40)
	* @param  {Number} errorCorrectionLevel Error correction level
	* @param  {Mode}   mode                 Data mode
	* @return {Number}                      Quantity of storable data
	*/
	exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
		if (!VersionCheck.isValid(version)) throw new Error("Invalid QR Code version");
		if (typeof mode === "undefined") mode = Mode.BYTE;
		const dataTotalCodewordsBits = (Utils.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
		if (mode === Mode.MIXED) return dataTotalCodewordsBits;
		const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
		switch (mode) {
			case Mode.NUMERIC: return Math.floor(usableBits / 10 * 3);
			case Mode.ALPHANUMERIC: return Math.floor(usableBits / 11 * 2);
			case Mode.KANJI: return Math.floor(usableBits / 13);
			case Mode.BYTE:
			default: return Math.floor(usableBits / 8);
		}
	};
	/**
	* Returns the minimum version needed to contain the amount of data
	*
	* @param  {Segment} data                    Segment of data
	* @param  {Number} [errorCorrectionLevel=H] Error correction level
	* @param  {Mode} mode                       Data mode
	* @return {Number}                          QR Code version
	*/
	exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
		let seg;
		const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
		if (Array.isArray(data)) {
			if (data.length > 1) return getBestVersionForMixedData(data, ecl);
			if (data.length === 0) return 1;
			seg = data[0];
		} else seg = data;
		return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
	};
	/**
	* Returns version information with relative error correction bits
	*
	* The version information is included in QR Code symbols of version 7 or larger.
	* It consists of an 18-bit sequence containing 6 data bits,
	* with 12 error correction bits calculated using the (18, 6) Golay code.
	*
	* @param  {Number} version QR Code version
	* @return {Number}         Encoded version info bits
	*/
	exports.getEncodedBits = function getEncodedBits(version) {
		if (!VersionCheck.isValid(version) || version < 7) throw new Error("Invalid QR Code version");
		let d = version << 12;
		while (Utils.getBCHDigit(d) - G18_BCH >= 0) d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
		return version << 12 | d;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/format-info.js
var require_format_info = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils$1();
	var G15 = 1335;
	var G15_MASK = 21522;
	var G15_BCH = Utils.getBCHDigit(G15);
	/**
	* Returns format information with relative error correction bits
	*
	* The format information is a 15-bit sequence containing 5 data bits,
	* with 10 error correction bits calculated using the (15, 5) BCH code.
	*
	* @param  {Number} errorCorrectionLevel Error correction level
	* @param  {Number} mask                 Mask pattern
	* @return {Number}                      Encoded format information bits
	*/
	exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
		const data = errorCorrectionLevel.bit << 3 | mask;
		let d = data << 10;
		while (Utils.getBCHDigit(d) - G15_BCH >= 0) d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
		return (data << 10 | d) ^ G15_MASK;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	function NumericData(data) {
		this.mode = Mode.NUMERIC;
		this.data = data.toString();
	}
	NumericData.getBitsLength = function getBitsLength(length) {
		return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
	};
	NumericData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	NumericData.prototype.getBitsLength = function getBitsLength() {
		return NumericData.getBitsLength(this.data.length);
	};
	NumericData.prototype.write = function write(bitBuffer) {
		let i, group, value;
		for (i = 0; i + 3 <= this.data.length; i += 3) {
			group = this.data.substr(i, 3);
			value = parseInt(group, 10);
			bitBuffer.put(value, 10);
		}
		const remainingNum = this.data.length - i;
		if (remainingNum > 0) {
			group = this.data.substr(i);
			value = parseInt(group, 10);
			bitBuffer.put(value, remainingNum * 3 + 1);
		}
	};
	module.exports = NumericData;
}));
//#endregion
//#region node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	/**
	* Array of characters available in alphanumeric mode
	*
	* As per QR Code specification, to each character
	* is assigned a value from 0 to 44 which in this case coincides
	* with the array index
	*
	* @type {Array}
	*/
	var ALPHA_NUM_CHARS = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		" ",
		"$",
		"%",
		"*",
		"+",
		"-",
		".",
		"/",
		":"
	];
	function AlphanumericData(data) {
		this.mode = Mode.ALPHANUMERIC;
		this.data = data;
	}
	AlphanumericData.getBitsLength = function getBitsLength(length) {
		return 11 * Math.floor(length / 2) + 6 * (length % 2);
	};
	AlphanumericData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	AlphanumericData.prototype.getBitsLength = function getBitsLength() {
		return AlphanumericData.getBitsLength(this.data.length);
	};
	AlphanumericData.prototype.write = function write(bitBuffer) {
		let i = 0;
		for (; i + 2 <= this.data.length; i += 2) {
			let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
			value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
			bitBuffer.put(value, 11);
		}
		if (this.data.length % 2) bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
	};
	module.exports = AlphanumericData;
}));
//#endregion
//#region node_modules/encode-utf8/index.js
var require_encode_utf8 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function encodeUtf8(input) {
		var result = [];
		var size = input.length;
		for (var index = 0; index < size; index++) {
			var point = input.charCodeAt(index);
			if (point >= 55296 && point <= 56319 && size > index + 1) {
				var second = input.charCodeAt(index + 1);
				if (second >= 56320 && second <= 57343) {
					point = (point - 55296) * 1024 + second - 56320 + 65536;
					index += 1;
				}
			}
			if (point < 128) {
				result.push(point);
				continue;
			}
			if (point < 2048) {
				result.push(point >> 6 | 192);
				result.push(point & 63 | 128);
				continue;
			}
			if (point < 55296 || point >= 57344 && point < 65536) {
				result.push(point >> 12 | 224);
				result.push(point >> 6 & 63 | 128);
				result.push(point & 63 | 128);
				continue;
			}
			if (point >= 65536 && point <= 1114111) {
				result.push(point >> 18 | 240);
				result.push(point >> 12 & 63 | 128);
				result.push(point >> 6 & 63 | 128);
				result.push(point & 63 | 128);
				continue;
			}
			result.push(239, 191, 189);
		}
		return new Uint8Array(result).buffer;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var encodeUtf8 = require_encode_utf8();
	var Mode = require_mode();
	function ByteData(data) {
		this.mode = Mode.BYTE;
		if (typeof data === "string") data = encodeUtf8(data);
		this.data = new Uint8Array(data);
	}
	ByteData.getBitsLength = function getBitsLength(length) {
		return length * 8;
	};
	ByteData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	ByteData.prototype.getBitsLength = function getBitsLength() {
		return ByteData.getBitsLength(this.data.length);
	};
	ByteData.prototype.write = function(bitBuffer) {
		for (let i = 0, l = this.data.length; i < l; i++) bitBuffer.put(this.data[i], 8);
	};
	module.exports = ByteData;
}));
//#endregion
//#region node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Mode = require_mode();
	var Utils = require_utils$1();
	function KanjiData(data) {
		this.mode = Mode.KANJI;
		this.data = data;
	}
	KanjiData.getBitsLength = function getBitsLength(length) {
		return length * 13;
	};
	KanjiData.prototype.getLength = function getLength() {
		return this.data.length;
	};
	KanjiData.prototype.getBitsLength = function getBitsLength() {
		return KanjiData.getBitsLength(this.data.length);
	};
	KanjiData.prototype.write = function(bitBuffer) {
		let i = 0;
		for (; i < this.data.length; i++) {
			let value = Utils.toSJIS(this.data[i]);
			if (value >= 33088 && value <= 40956) value -= 33088;
			else if (value >= 57408 && value <= 60351) value -= 49472;
			else throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
			value = (value >>> 8 & 255) * 192 + (value & 255);
			bitBuffer.put(value, 13);
		}
	};
	module.exports = KanjiData;
}));
//#endregion
//#region node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/******************************************************************************
	* Created 2008-08-19.
	*
	* Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
	*
	* Copyright (C) 2008
	*   Wyatt Baldwin <self@wyattbaldwin.com>
	*   All rights reserved
	*
	* Licensed under the MIT license.
	*
	*   http://www.opensource.org/licenses/mit-license.php
	*
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	* THE SOFTWARE.
	*****************************************************************************/
	var dijkstra = {
		single_source_shortest_paths: function(graph, s, d) {
			var predecessors = {};
			var costs = {};
			costs[s] = 0;
			var open = dijkstra.PriorityQueue.make();
			open.push(s, 0);
			var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
			while (!open.empty()) {
				closest = open.pop();
				u = closest.value;
				cost_of_s_to_u = closest.cost;
				adjacent_nodes = graph[u] || {};
				for (v in adjacent_nodes) if (adjacent_nodes.hasOwnProperty(v)) {
					cost_of_e = adjacent_nodes[v];
					cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
					cost_of_s_to_v = costs[v];
					first_visit = typeof costs[v] === "undefined";
					if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
						costs[v] = cost_of_s_to_u_plus_cost_of_e;
						open.push(v, cost_of_s_to_u_plus_cost_of_e);
						predecessors[v] = u;
					}
				}
			}
			if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
				var msg = [
					"Could not find a path from ",
					s,
					" to ",
					d,
					"."
				].join("");
				throw new Error(msg);
			}
			return predecessors;
		},
		extract_shortest_path_from_predecessor_list: function(predecessors, d) {
			var nodes = [];
			var u = d;
			while (u) {
				nodes.push(u);
				predecessors[u];
				u = predecessors[u];
			}
			nodes.reverse();
			return nodes;
		},
		find_path: function(graph, s, d) {
			var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
			return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
		},
		/**
		* A very naive priority queue implementation.
		*/
		PriorityQueue: {
			make: function(opts) {
				var T = dijkstra.PriorityQueue, t = {}, key;
				opts = opts || {};
				for (key in T) if (T.hasOwnProperty(key)) t[key] = T[key];
				t.queue = [];
				t.sorter = opts.sorter || T.default_sorter;
				return t;
			},
			default_sorter: function(a, b) {
				return a.cost - b.cost;
			},
			/**
			* Add a new item to the queue and ensure the highest priority element
			* is at the front of the queue.
			*/
			push: function(value, cost) {
				var item = {
					value,
					cost
				};
				this.queue.push(item);
				this.queue.sort(this.sorter);
			},
			/**
			* Return the highest priority element in the queue.
			*/
			pop: function() {
				return this.queue.shift();
			},
			empty: function() {
				return this.queue.length === 0;
			}
		}
	};
	if (typeof module !== "undefined") module.exports = dijkstra;
}));
//#endregion
//#region node_modules/qrcode/lib/core/segments.js
var require_segments = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Mode = require_mode();
	var NumericData = require_numeric_data();
	var AlphanumericData = require_alphanumeric_data();
	var ByteData = require_byte_data();
	var KanjiData = require_kanji_data();
	var Regex = require_regex();
	var Utils = require_utils$1();
	var dijkstra = require_dijkstra();
	/**
	* Returns UTF8 byte length
	*
	* @param  {String} str Input string
	* @return {Number}     Number of byte
	*/
	function getStringByteLength(str) {
		return unescape(encodeURIComponent(str)).length;
	}
	/**
	* Get a list of segments of the specified mode
	* from a string
	*
	* @param  {Mode}   mode Segment mode
	* @param  {String} str  String to process
	* @return {Array}       Array of object with segments data
	*/
	function getSegments(regex, mode, str) {
		const segments = [];
		let result;
		while ((result = regex.exec(str)) !== null) segments.push({
			data: result[0],
			index: result.index,
			mode,
			length: result[0].length
		});
		return segments;
	}
	/**
	* Extracts a series of segments with the appropriate
	* modes from a string
	*
	* @param  {String} dataStr Input string
	* @return {Array}          Array of object with segments data
	*/
	function getSegmentsFromString(dataStr) {
		const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
		const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
		let byteSegs;
		let kanjiSegs;
		if (Utils.isKanjiModeEnabled()) {
			byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
			kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
		} else {
			byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
			kanjiSegs = [];
		}
		return numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs).sort(function(s1, s2) {
			return s1.index - s2.index;
		}).map(function(obj) {
			return {
				data: obj.data,
				mode: obj.mode,
				length: obj.length
			};
		});
	}
	/**
	* Returns how many bits are needed to encode a string of
	* specified length with the specified mode
	*
	* @param  {Number} length String length
	* @param  {Mode} mode     Segment mode
	* @return {Number}        Bit length
	*/
	function getSegmentBitsLength(length, mode) {
		switch (mode) {
			case Mode.NUMERIC: return NumericData.getBitsLength(length);
			case Mode.ALPHANUMERIC: return AlphanumericData.getBitsLength(length);
			case Mode.KANJI: return KanjiData.getBitsLength(length);
			case Mode.BYTE: return ByteData.getBitsLength(length);
		}
	}
	/**
	* Merges adjacent segments which have the same mode
	*
	* @param  {Array} segs Array of object with segments data
	* @return {Array}      Array of object with segments data
	*/
	function mergeSegments(segs) {
		return segs.reduce(function(acc, curr) {
			const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
			if (prevSeg && prevSeg.mode === curr.mode) {
				acc[acc.length - 1].data += curr.data;
				return acc;
			}
			acc.push(curr);
			return acc;
		}, []);
	}
	/**
	* Generates a list of all possible nodes combination which
	* will be used to build a segments graph.
	*
	* Nodes are divided by groups. Each group will contain a list of all the modes
	* in which is possible to encode the given text.
	*
	* For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
	* The group for '12345' will contain then 3 objects, one for each
	* possible encoding mode.
	*
	* Each node represents a possible segment.
	*
	* @param  {Array} segs Array of object with segments data
	* @return {Array}      Array of object with segments data
	*/
	function buildNodes(segs) {
		const nodes = [];
		for (let i = 0; i < segs.length; i++) {
			const seg = segs[i];
			switch (seg.mode) {
				case Mode.NUMERIC:
					nodes.push([
						seg,
						{
							data: seg.data,
							mode: Mode.ALPHANUMERIC,
							length: seg.length
						},
						{
							data: seg.data,
							mode: Mode.BYTE,
							length: seg.length
						}
					]);
					break;
				case Mode.ALPHANUMERIC:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.BYTE,
						length: seg.length
					}]);
					break;
				case Mode.KANJI:
					nodes.push([seg, {
						data: seg.data,
						mode: Mode.BYTE,
						length: getStringByteLength(seg.data)
					}]);
					break;
				case Mode.BYTE: nodes.push([{
					data: seg.data,
					mode: Mode.BYTE,
					length: getStringByteLength(seg.data)
				}]);
			}
		}
		return nodes;
	}
	/**
	* Builds a graph from a list of nodes.
	* All segments in each node group will be connected with all the segments of
	* the next group and so on.
	*
	* At each connection will be assigned a weight depending on the
	* segment's byte length.
	*
	* @param  {Array} nodes    Array of object with segments data
	* @param  {Number} version QR Code version
	* @return {Object}         Graph of all possible segments
	*/
	function buildGraph(nodes, version) {
		const table = {};
		const graph = { start: {} };
		let prevNodeIds = ["start"];
		for (let i = 0; i < nodes.length; i++) {
			const nodeGroup = nodes[i];
			const currentNodeIds = [];
			for (let j = 0; j < nodeGroup.length; j++) {
				const node = nodeGroup[j];
				const key = "" + i + j;
				currentNodeIds.push(key);
				table[key] = {
					node,
					lastCount: 0
				};
				graph[key] = {};
				for (let n = 0; n < prevNodeIds.length; n++) {
					const prevNodeId = prevNodeIds[n];
					if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
						graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
						table[prevNodeId].lastCount += node.length;
					} else {
						if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
						graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
					}
				}
			}
			prevNodeIds = currentNodeIds;
		}
		for (let n = 0; n < prevNodeIds.length; n++) graph[prevNodeIds[n]].end = 0;
		return {
			map: graph,
			table
		};
	}
	/**
	* Builds a segment from a specified data and mode.
	* If a mode is not specified, the more suitable will be used.
	*
	* @param  {String} data             Input data
	* @param  {Mode | String} modesHint Data mode
	* @return {Segment}                 Segment
	*/
	function buildSingleSegment(data, modesHint) {
		let mode;
		const bestMode = Mode.getBestModeForData(data);
		mode = Mode.from(modesHint, bestMode);
		if (mode !== Mode.BYTE && mode.bit < bestMode.bit) throw new Error("\"" + data + "\" cannot be encoded with mode " + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
		if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) mode = Mode.BYTE;
		switch (mode) {
			case Mode.NUMERIC: return new NumericData(data);
			case Mode.ALPHANUMERIC: return new AlphanumericData(data);
			case Mode.KANJI: return new KanjiData(data);
			case Mode.BYTE: return new ByteData(data);
		}
	}
	/**
	* Builds a list of segments from an array.
	* Array can contain Strings or Objects with segment's info.
	*
	* For each item which is a string, will be generated a segment with the given
	* string and the more appropriate encoding mode.
	*
	* For each item which is an object, will be generated a segment with the given
	* data and mode.
	* Objects must contain at least the property "data".
	* If property "mode" is not present, the more suitable mode will be used.
	*
	* @param  {Array} array Array of objects with segments data
	* @return {Array}       Array of Segments
	*/
	exports.fromArray = function fromArray(array) {
		return array.reduce(function(acc, seg) {
			if (typeof seg === "string") acc.push(buildSingleSegment(seg, null));
			else if (seg.data) acc.push(buildSingleSegment(seg.data, seg.mode));
			return acc;
		}, []);
	};
	/**
	* Builds an optimized sequence of segments from a string,
	* which will produce the shortest possible bitstream.
	*
	* @param  {String} data    Input string
	* @param  {Number} version QR Code version
	* @return {Array}          Array of segments
	*/
	exports.fromString = function fromString(data, version) {
		const graph = buildGraph(buildNodes(getSegmentsFromString(data, Utils.isKanjiModeEnabled())), version);
		const path = dijkstra.find_path(graph.map, "start", "end");
		const optimizedSegs = [];
		for (let i = 1; i < path.length - 1; i++) optimizedSegs.push(graph.table[path[i]].node);
		return exports.fromArray(mergeSegments(optimizedSegs));
	};
	/**
	* Splits a string in various segments with the modes which
	* best represent their content.
	* The produced segments are far from being optimized.
	* The output of this function is only used to estimate a QR Code version
	* which may contain the data.
	*
	* @param  {string} data Input string
	* @return {Array}       Array of segments
	*/
	exports.rawSplit = function rawSplit(data) {
		return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
	};
}));
//#endregion
//#region node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils$1();
	var ECLevel = require_error_correction_level();
	var BitBuffer = require_bit_buffer();
	var BitMatrix = require_bit_matrix();
	var AlignmentPattern = require_alignment_pattern();
	var FinderPattern = require_finder_pattern();
	var MaskPattern = require_mask_pattern();
	var ECCode = require_error_correction_code();
	var ReedSolomonEncoder = require_reed_solomon_encoder();
	var Version = require_version();
	var FormatInfo = require_format_info();
	var Mode = require_mode();
	var Segments = require_segments();
	/**
	* QRCode for JavaScript
	*
	* modified by Ryan Day for nodejs support
	* Copyright (c) 2011 Ryan Day
	*
	* Licensed under the MIT license:
	*   http://www.opensource.org/licenses/mit-license.php
	*
	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	*/
	/**
	* Add finder patterns bits to matrix
	*
	* @param  {BitMatrix} matrix  Modules matrix
	* @param  {Number}    version QR Code version
	*/
	function setupFinderPattern(matrix, version) {
		const size = matrix.size;
		const pos = FinderPattern.getPositions(version);
		for (let i = 0; i < pos.length; i++) {
			const row = pos[i][0];
			const col = pos[i][1];
			for (let r = -1; r <= 7; r++) {
				if (row + r <= -1 || size <= row + r) continue;
				for (let c = -1; c <= 7; c++) {
					if (col + c <= -1 || size <= col + c) continue;
					if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) matrix.set(row + r, col + c, true, true);
					else matrix.set(row + r, col + c, false, true);
				}
			}
		}
	}
	/**
	* Add timing pattern bits to matrix
	*
	* Note: this function must be called before {@link setupAlignmentPattern}
	*
	* @param  {BitMatrix} matrix Modules matrix
	*/
	function setupTimingPattern(matrix) {
		const size = matrix.size;
		for (let r = 8; r < size - 8; r++) {
			const value = r % 2 === 0;
			matrix.set(r, 6, value, true);
			matrix.set(6, r, value, true);
		}
	}
	/**
	* Add alignment patterns bits to matrix
	*
	* Note: this function must be called after {@link setupTimingPattern}
	*
	* @param  {BitMatrix} matrix  Modules matrix
	* @param  {Number}    version QR Code version
	*/
	function setupAlignmentPattern(matrix, version) {
		const pos = AlignmentPattern.getPositions(version);
		for (let i = 0; i < pos.length; i++) {
			const row = pos[i][0];
			const col = pos[i][1];
			for (let r = -2; r <= 2; r++) for (let c = -2; c <= 2; c++) if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) matrix.set(row + r, col + c, true, true);
			else matrix.set(row + r, col + c, false, true);
		}
	}
	/**
	* Add version info bits to matrix
	*
	* @param  {BitMatrix} matrix  Modules matrix
	* @param  {Number}    version QR Code version
	*/
	function setupVersionInfo(matrix, version) {
		const size = matrix.size;
		const bits = Version.getEncodedBits(version);
		let row, col, mod;
		for (let i = 0; i < 18; i++) {
			row = Math.floor(i / 3);
			col = i % 3 + size - 8 - 3;
			mod = (bits >> i & 1) === 1;
			matrix.set(row, col, mod, true);
			matrix.set(col, row, mod, true);
		}
	}
	/**
	* Add format info bits to matrix
	*
	* @param  {BitMatrix} matrix               Modules matrix
	* @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
	* @param  {Number}    maskPattern          Mask pattern reference value
	*/
	function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
		const size = matrix.size;
		const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
		let i, mod;
		for (i = 0; i < 15; i++) {
			mod = (bits >> i & 1) === 1;
			if (i < 6) matrix.set(i, 8, mod, true);
			else if (i < 8) matrix.set(i + 1, 8, mod, true);
			else matrix.set(size - 15 + i, 8, mod, true);
			if (i < 8) matrix.set(8, size - i - 1, mod, true);
			else if (i < 9) matrix.set(8, 15 - i - 1 + 1, mod, true);
			else matrix.set(8, 15 - i - 1, mod, true);
		}
		matrix.set(size - 8, 8, 1, true);
	}
	/**
	* Add encoded data bits to matrix
	*
	* @param  {BitMatrix}  matrix Modules matrix
	* @param  {Uint8Array} data   Data codewords
	*/
	function setupData(matrix, data) {
		const size = matrix.size;
		let inc = -1;
		let row = size - 1;
		let bitIndex = 7;
		let byteIndex = 0;
		for (let col = size - 1; col > 0; col -= 2) {
			if (col === 6) col--;
			while (true) {
				for (let c = 0; c < 2; c++) if (!matrix.isReserved(row, col - c)) {
					let dark = false;
					if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) === 1;
					matrix.set(row, col - c, dark);
					bitIndex--;
					if (bitIndex === -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
				row += inc;
				if (row < 0 || size <= row) {
					row -= inc;
					inc = -inc;
					break;
				}
			}
		}
	}
	/**
	* Create encoded codewords from data input
	*
	* @param  {Number}   version              QR Code version
	* @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
	* @param  {ByteData} data                 Data input
	* @return {Uint8Array}                    Buffer containing encoded codewords
	*/
	function createData(version, errorCorrectionLevel, segments) {
		const buffer = new BitBuffer();
		segments.forEach(function(data) {
			buffer.put(data.mode.bit, 4);
			buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
			data.write(buffer);
		});
		const dataTotalCodewordsBits = (Utils.getSymbolTotalCodewords(version) - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)) * 8;
		if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) buffer.put(0, 4);
		while (buffer.getLengthInBits() % 8 !== 0) buffer.putBit(0);
		const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
		for (let i = 0; i < remainingByte; i++) buffer.put(i % 2 ? 17 : 236, 8);
		return createCodewords(buffer, version, errorCorrectionLevel);
	}
	/**
	* Encode input data with Reed-Solomon and return codewords with
	* relative error correction bits
	*
	* @param  {BitBuffer} bitBuffer            Data to encode
	* @param  {Number}    version              QR Code version
	* @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
	* @return {Uint8Array}                     Buffer containing encoded codewords
	*/
	function createCodewords(bitBuffer, version, errorCorrectionLevel) {
		const totalCodewords = Utils.getSymbolTotalCodewords(version);
		const dataTotalCodewords = totalCodewords - ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
		const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
		const blocksInGroup1 = ecTotalBlocks - totalCodewords % ecTotalBlocks;
		const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
		const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
		const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
		const rs = new ReedSolomonEncoder(ecCount);
		let offset = 0;
		const dcData = new Array(ecTotalBlocks);
		const ecData = new Array(ecTotalBlocks);
		let maxDataSize = 0;
		const buffer = new Uint8Array(bitBuffer.buffer);
		for (let b = 0; b < ecTotalBlocks; b++) {
			const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
			dcData[b] = buffer.slice(offset, offset + dataSize);
			ecData[b] = rs.encode(dcData[b]);
			offset += dataSize;
			maxDataSize = Math.max(maxDataSize, dataSize);
		}
		const data = new Uint8Array(totalCodewords);
		let index = 0;
		let i, r;
		for (i = 0; i < maxDataSize; i++) for (r = 0; r < ecTotalBlocks; r++) if (i < dcData[r].length) data[index++] = dcData[r][i];
		for (i = 0; i < ecCount; i++) for (r = 0; r < ecTotalBlocks; r++) data[index++] = ecData[r][i];
		return data;
	}
	/**
	* Build QR Code symbol
	*
	* @param  {String} data                 Input string
	* @param  {Number} version              QR Code version
	* @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
	* @param  {MaskPattern} maskPattern     Mask pattern
	* @return {Object}                      Object containing symbol data
	*/
	function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
		let segments;
		if (Array.isArray(data)) segments = Segments.fromArray(data);
		else if (typeof data === "string") {
			let estimatedVersion = version;
			if (!estimatedVersion) {
				const rawSegments = Segments.rawSplit(data);
				estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
			}
			segments = Segments.fromString(data, estimatedVersion || 40);
		} else throw new Error("Invalid data");
		const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
		if (!bestVersion) throw new Error("The amount of data is too big to be stored in a QR Code");
		if (!version) version = bestVersion;
		else if (version < bestVersion) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
		const dataBits = createData(version, errorCorrectionLevel, segments);
		const modules = new BitMatrix(Utils.getSymbolSize(version));
		setupFinderPattern(modules, version);
		setupTimingPattern(modules);
		setupAlignmentPattern(modules, version);
		setupFormatInfo(modules, errorCorrectionLevel, 0);
		if (version >= 7) setupVersionInfo(modules, version);
		setupData(modules, dataBits);
		if (isNaN(maskPattern)) maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
		MaskPattern.applyMask(maskPattern, modules);
		setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
		return {
			modules,
			version,
			errorCorrectionLevel,
			maskPattern,
			segments
		};
	}
	/**
	* QR Code
	*
	* @param {String | Array} data                 Input data
	* @param {Object} options                      Optional configurations
	* @param {Number} options.version              QR Code version
	* @param {String} options.errorCorrectionLevel Error correction level
	* @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
	*/
	exports.create = function create(data, options) {
		if (typeof data === "undefined" || data === "") throw new Error("No input text");
		let errorCorrectionLevel = ECLevel.M;
		let version;
		let mask;
		if (typeof options !== "undefined") {
			errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
			version = Version.from(options.version);
			mask = MaskPattern.from(options.maskPattern);
			if (options.toSJISFunc) Utils.setToSJISFunction(options.toSJISFunc);
		}
		return createSymbol(data, version, errorCorrectionLevel, mask);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/chunkstream.js
var require_chunkstream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var util$5 = __require("util");
	var Stream$2 = __require("stream");
	var ChunkStream = module.exports = function() {
		Stream$2.call(this);
		this._buffers = [];
		this._buffered = 0;
		this._reads = [];
		this._paused = false;
		this._encoding = "utf8";
		this.writable = true;
	};
	util$5.inherits(ChunkStream, Stream$2);
	ChunkStream.prototype.read = function(length, callback) {
		this._reads.push({
			length: Math.abs(length),
			allowLess: length < 0,
			func: callback
		});
		process.nextTick(function() {
			this._process();
			if (this._paused && this._reads && this._reads.length > 0) {
				this._paused = false;
				this.emit("drain");
			}
		}.bind(this));
	};
	ChunkStream.prototype.write = function(data, encoding) {
		if (!this.writable) {
			this.emit("error", /* @__PURE__ */ new Error("Stream not writable"));
			return false;
		}
		let dataBuffer;
		if (Buffer.isBuffer(data)) dataBuffer = data;
		else dataBuffer = Buffer.from(data, encoding || this._encoding);
		this._buffers.push(dataBuffer);
		this._buffered += dataBuffer.length;
		this._process();
		if (this._reads && this._reads.length === 0) this._paused = true;
		return this.writable && !this._paused;
	};
	ChunkStream.prototype.end = function(data, encoding) {
		if (data) this.write(data, encoding);
		this.writable = false;
		if (!this._buffers) return;
		if (this._buffers.length === 0) this._end();
		else {
			this._buffers.push(null);
			this._process();
		}
	};
	ChunkStream.prototype.destroySoon = ChunkStream.prototype.end;
	ChunkStream.prototype._end = function() {
		if (this._reads.length > 0) this.emit("error", /* @__PURE__ */ new Error("Unexpected end of input"));
		this.destroy();
	};
	ChunkStream.prototype.destroy = function() {
		if (!this._buffers) return;
		this.writable = false;
		this._reads = null;
		this._buffers = null;
		this.emit("close");
	};
	ChunkStream.prototype._processReadAllowingLess = function(read) {
		this._reads.shift();
		let smallerBuf = this._buffers[0];
		if (smallerBuf.length > read.length) {
			this._buffered -= read.length;
			this._buffers[0] = smallerBuf.slice(read.length);
			read.func.call(this, smallerBuf.slice(0, read.length));
		} else {
			this._buffered -= smallerBuf.length;
			this._buffers.shift();
			read.func.call(this, smallerBuf);
		}
	};
	ChunkStream.prototype._processRead = function(read) {
		this._reads.shift();
		let pos = 0;
		let count = 0;
		let data = Buffer.alloc(read.length);
		while (pos < read.length) {
			let buf = this._buffers[count++];
			let len = Math.min(buf.length, read.length - pos);
			buf.copy(data, pos, 0, len);
			pos += len;
			if (len !== buf.length) this._buffers[--count] = buf.slice(len);
		}
		if (count > 0) this._buffers.splice(0, count);
		this._buffered -= read.length;
		read.func.call(this, data);
	};
	ChunkStream.prototype._process = function() {
		try {
			while (this._buffered > 0 && this._reads && this._reads.length > 0) {
				let read = this._reads[0];
				if (read.allowLess) this._processReadAllowingLess(read);
				else if (this._buffered >= read.length) this._processRead(read);
				else break;
			}
			if (this._buffers && !this.writable) this._end();
		} catch (ex) {
			this.emit("error", ex);
		}
	};
}));
//#endregion
//#region node_modules/pngjs/lib/interlace.js
var require_interlace = /* @__PURE__ */ __commonJSMin(((exports) => {
	var imagePasses = [
		{
			x: [0],
			y: [0]
		},
		{
			x: [4],
			y: [0]
		},
		{
			x: [0, 4],
			y: [4]
		},
		{
			x: [2, 6],
			y: [0, 4]
		},
		{
			x: [
				0,
				2,
				4,
				6
			],
			y: [2, 6]
		},
		{
			x: [
				1,
				3,
				5,
				7
			],
			y: [
				0,
				2,
				4,
				6
			]
		},
		{
			x: [
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7
			],
			y: [
				1,
				3,
				5,
				7
			]
		}
	];
	exports.getImagePasses = function(width, height) {
		let images = [];
		let xLeftOver = width % 8;
		let yLeftOver = height % 8;
		let xRepeats = (width - xLeftOver) / 8;
		let yRepeats = (height - yLeftOver) / 8;
		for (let i = 0; i < imagePasses.length; i++) {
			let pass = imagePasses[i];
			let passWidth = xRepeats * pass.x.length;
			let passHeight = yRepeats * pass.y.length;
			for (let j = 0; j < pass.x.length; j++) if (pass.x[j] < xLeftOver) passWidth++;
			else break;
			for (let j = 0; j < pass.y.length; j++) if (pass.y[j] < yLeftOver) passHeight++;
			else break;
			if (passWidth > 0 && passHeight > 0) images.push({
				width: passWidth,
				height: passHeight,
				index: i
			});
		}
		return images;
	};
	exports.getInterlaceIterator = function(width) {
		return function(x, y, pass) {
			let outerXLeftOver = x % imagePasses[pass].x.length;
			let outerX = (x - outerXLeftOver) / imagePasses[pass].x.length * 8 + imagePasses[pass].x[outerXLeftOver];
			let outerYLeftOver = y % imagePasses[pass].y.length;
			let outerY = (y - outerYLeftOver) / imagePasses[pass].y.length * 8 + imagePasses[pass].y[outerYLeftOver];
			return outerX * 4 + outerY * width * 4;
		};
	};
}));
//#endregion
//#region node_modules/pngjs/lib/paeth-predictor.js
var require_paeth_predictor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function paethPredictor(left, above, upLeft) {
		let paeth = left + above - upLeft;
		let pLeft = Math.abs(paeth - left);
		let pAbove = Math.abs(paeth - above);
		let pUpLeft = Math.abs(paeth - upLeft);
		if (pLeft <= pAbove && pLeft <= pUpLeft) return left;
		if (pAbove <= pUpLeft) return above;
		return upLeft;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/filter-parse.js
var require_filter_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var interlaceUtils = require_interlace();
	var paethPredictor = require_paeth_predictor();
	function getByteWidth(width, bpp, depth) {
		let byteWidth = width * bpp;
		if (depth !== 8) byteWidth = Math.ceil(byteWidth / (8 / depth));
		return byteWidth;
	}
	var Filter = module.exports = function(bitmapInfo, dependencies) {
		let width = bitmapInfo.width;
		let height = bitmapInfo.height;
		let interlace = bitmapInfo.interlace;
		let bpp = bitmapInfo.bpp;
		let depth = bitmapInfo.depth;
		this.read = dependencies.read;
		this.write = dependencies.write;
		this.complete = dependencies.complete;
		this._imageIndex = 0;
		this._images = [];
		if (interlace) {
			let passes = interlaceUtils.getImagePasses(width, height);
			for (let i = 0; i < passes.length; i++) this._images.push({
				byteWidth: getByteWidth(passes[i].width, bpp, depth),
				height: passes[i].height,
				lineIndex: 0
			});
		} else this._images.push({
			byteWidth: getByteWidth(width, bpp, depth),
			height,
			lineIndex: 0
		});
		if (depth === 8) this._xComparison = bpp;
		else if (depth === 16) this._xComparison = bpp * 2;
		else this._xComparison = 1;
	};
	Filter.prototype.start = function() {
		this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
	};
	Filter.prototype._unFilterType1 = function(rawData, unfilteredLine, byteWidth) {
		let xComparison = this._xComparison;
		let xBiggerThan = xComparison - 1;
		for (let x = 0; x < byteWidth; x++) {
			let rawByte = rawData[1 + x];
			let f1Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
			unfilteredLine[x] = rawByte + f1Left;
		}
	};
	Filter.prototype._unFilterType2 = function(rawData, unfilteredLine, byteWidth) {
		let lastLine = this._lastLine;
		for (let x = 0; x < byteWidth; x++) {
			let rawByte = rawData[1 + x];
			let f2Up = lastLine ? lastLine[x] : 0;
			unfilteredLine[x] = rawByte + f2Up;
		}
	};
	Filter.prototype._unFilterType3 = function(rawData, unfilteredLine, byteWidth) {
		let xComparison = this._xComparison;
		let xBiggerThan = xComparison - 1;
		let lastLine = this._lastLine;
		for (let x = 0; x < byteWidth; x++) {
			let rawByte = rawData[1 + x];
			let f3Up = lastLine ? lastLine[x] : 0;
			let f3Left = x > xBiggerThan ? unfilteredLine[x - xComparison] : 0;
			let f3Add = Math.floor((f3Left + f3Up) / 2);
			unfilteredLine[x] = rawByte + f3Add;
		}
	};
	Filter.prototype._unFilterType4 = function(rawData, unfilteredLine, byteWidth) {
		let xComparison = this._xComparison;
		let xBiggerThan = xComparison - 1;
		let lastLine = this._lastLine;
		for (let x = 0; x < byteWidth; x++) {
			let rawByte = rawData[1 + x];
			let f4Up = lastLine ? lastLine[x] : 0;
			let f4Add = paethPredictor(x > xBiggerThan ? unfilteredLine[x - xComparison] : 0, f4Up, x > xBiggerThan && lastLine ? lastLine[x - xComparison] : 0);
			unfilteredLine[x] = rawByte + f4Add;
		}
	};
	Filter.prototype._reverseFilterLine = function(rawData) {
		let filter = rawData[0];
		let unfilteredLine;
		let currentImage = this._images[this._imageIndex];
		let byteWidth = currentImage.byteWidth;
		if (filter === 0) unfilteredLine = rawData.slice(1, byteWidth + 1);
		else {
			unfilteredLine = Buffer.alloc(byteWidth);
			switch (filter) {
				case 1:
					this._unFilterType1(rawData, unfilteredLine, byteWidth);
					break;
				case 2:
					this._unFilterType2(rawData, unfilteredLine, byteWidth);
					break;
				case 3:
					this._unFilterType3(rawData, unfilteredLine, byteWidth);
					break;
				case 4:
					this._unFilterType4(rawData, unfilteredLine, byteWidth);
					break;
				default: throw new Error("Unrecognised filter type - " + filter);
			}
		}
		this.write(unfilteredLine);
		currentImage.lineIndex++;
		if (currentImage.lineIndex >= currentImage.height) {
			this._lastLine = null;
			this._imageIndex++;
			currentImage = this._images[this._imageIndex];
		} else this._lastLine = unfilteredLine;
		if (currentImage) this.read(currentImage.byteWidth + 1, this._reverseFilterLine.bind(this));
		else {
			this._lastLine = null;
			this.complete();
		}
	};
}));
//#endregion
//#region node_modules/pngjs/lib/filter-parse-async.js
var require_filter_parse_async = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var util$4 = __require("util");
	var ChunkStream = require_chunkstream();
	var Filter = require_filter_parse();
	var FilterAsync = module.exports = function(bitmapInfo) {
		ChunkStream.call(this);
		let buffers = [];
		let that = this;
		this._filter = new Filter(bitmapInfo, {
			read: this.read.bind(this),
			write: function(buffer) {
				buffers.push(buffer);
			},
			complete: function() {
				that.emit("complete", Buffer.concat(buffers));
			}
		});
		this._filter.start();
	};
	util$4.inherits(FilterAsync, ChunkStream);
}));
//#endregion
//#region node_modules/pngjs/lib/constants.js
var require_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		PNG_SIGNATURE: [
			137,
			80,
			78,
			71,
			13,
			10,
			26,
			10
		],
		TYPE_IHDR: 1229472850,
		TYPE_IEND: 1229278788,
		TYPE_IDAT: 1229209940,
		TYPE_PLTE: 1347179589,
		TYPE_tRNS: 1951551059,
		TYPE_gAMA: 1732332865,
		COLORTYPE_GRAYSCALE: 0,
		COLORTYPE_PALETTE: 1,
		COLORTYPE_COLOR: 2,
		COLORTYPE_ALPHA: 4,
		COLORTYPE_PALETTE_COLOR: 3,
		COLORTYPE_COLOR_ALPHA: 6,
		COLORTYPE_TO_BPP_MAP: {
			0: 1,
			2: 3,
			3: 1,
			4: 2,
			6: 4
		},
		GAMMA_DIVISION: 1e5
	};
}));
//#endregion
//#region node_modules/pngjs/lib/crc.js
var require_crc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var crcTable = [];
	(function() {
		for (let i = 0; i < 256; i++) {
			let currentCrc = i;
			for (let j = 0; j < 8; j++) if (currentCrc & 1) currentCrc = 3988292384 ^ currentCrc >>> 1;
			else currentCrc = currentCrc >>> 1;
			crcTable[i] = currentCrc;
		}
	})();
	var CrcCalculator = module.exports = function() {
		this._crc = -1;
	};
	CrcCalculator.prototype.write = function(data) {
		for (let i = 0; i < data.length; i++) this._crc = crcTable[(this._crc ^ data[i]) & 255] ^ this._crc >>> 8;
		return true;
	};
	CrcCalculator.prototype.crc32 = function() {
		return this._crc ^ -1;
	};
	CrcCalculator.crc32 = function(buf) {
		let crc = -1;
		for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 255] ^ crc >>> 8;
		return crc ^ -1;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/parser.js
var require_parser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constants = require_constants();
	var CrcCalculator = require_crc();
	var Parser = module.exports = function(options, dependencies) {
		this._options = options;
		options.checkCRC = options.checkCRC !== false;
		this._hasIHDR = false;
		this._hasIEND = false;
		this._emittedHeadersFinished = false;
		this._palette = [];
		this._colorType = 0;
		this._chunks = {};
		this._chunks[constants.TYPE_IHDR] = this._handleIHDR.bind(this);
		this._chunks[constants.TYPE_IEND] = this._handleIEND.bind(this);
		this._chunks[constants.TYPE_IDAT] = this._handleIDAT.bind(this);
		this._chunks[constants.TYPE_PLTE] = this._handlePLTE.bind(this);
		this._chunks[constants.TYPE_tRNS] = this._handleTRNS.bind(this);
		this._chunks[constants.TYPE_gAMA] = this._handleGAMA.bind(this);
		this.read = dependencies.read;
		this.error = dependencies.error;
		this.metadata = dependencies.metadata;
		this.gamma = dependencies.gamma;
		this.transColor = dependencies.transColor;
		this.palette = dependencies.palette;
		this.parsed = dependencies.parsed;
		this.inflateData = dependencies.inflateData;
		this.finished = dependencies.finished;
		this.simpleTransparency = dependencies.simpleTransparency;
		this.headersFinished = dependencies.headersFinished || function() {};
	};
	Parser.prototype.start = function() {
		this.read(constants.PNG_SIGNATURE.length, this._parseSignature.bind(this));
	};
	Parser.prototype._parseSignature = function(data) {
		let signature = constants.PNG_SIGNATURE;
		for (let i = 0; i < signature.length; i++) if (data[i] !== signature[i]) {
			this.error(/* @__PURE__ */ new Error("Invalid file signature"));
			return;
		}
		this.read(8, this._parseChunkBegin.bind(this));
	};
	Parser.prototype._parseChunkBegin = function(data) {
		let length = data.readUInt32BE(0);
		let type = data.readUInt32BE(4);
		let name = "";
		for (let i = 4; i < 8; i++) name += String.fromCharCode(data[i]);
		let ancillary = Boolean(data[4] & 32);
		if (!this._hasIHDR && type !== constants.TYPE_IHDR) {
			this.error(/* @__PURE__ */ new Error("Expected IHDR on beggining"));
			return;
		}
		this._crc = new CrcCalculator();
		this._crc.write(Buffer.from(name));
		if (this._chunks[type]) return this._chunks[type](length);
		if (!ancillary) {
			this.error(/* @__PURE__ */ new Error("Unsupported critical chunk type " + name));
			return;
		}
		this.read(length + 4, this._skipChunk.bind(this));
	};
	Parser.prototype._skipChunk = function() {
		this.read(8, this._parseChunkBegin.bind(this));
	};
	Parser.prototype._handleChunkEnd = function() {
		this.read(4, this._parseChunkEnd.bind(this));
	};
	Parser.prototype._parseChunkEnd = function(data) {
		let fileCrc = data.readInt32BE(0);
		let calcCrc = this._crc.crc32();
		if (this._options.checkCRC && calcCrc !== fileCrc) {
			this.error(/* @__PURE__ */ new Error("Crc error - " + fileCrc + " - " + calcCrc));
			return;
		}
		if (!this._hasIEND) this.read(8, this._parseChunkBegin.bind(this));
	};
	Parser.prototype._handleIHDR = function(length) {
		this.read(length, this._parseIHDR.bind(this));
	};
	Parser.prototype._parseIHDR = function(data) {
		this._crc.write(data);
		let width = data.readUInt32BE(0);
		let height = data.readUInt32BE(4);
		let depth = data[8];
		let colorType = data[9];
		let compr = data[10];
		let filter = data[11];
		let interlace = data[12];
		if (depth !== 8 && depth !== 4 && depth !== 2 && depth !== 1 && depth !== 16) {
			this.error(/* @__PURE__ */ new Error("Unsupported bit depth " + depth));
			return;
		}
		if (!(colorType in constants.COLORTYPE_TO_BPP_MAP)) {
			this.error(/* @__PURE__ */ new Error("Unsupported color type"));
			return;
		}
		if (compr !== 0) {
			this.error(/* @__PURE__ */ new Error("Unsupported compression method"));
			return;
		}
		if (filter !== 0) {
			this.error(/* @__PURE__ */ new Error("Unsupported filter method"));
			return;
		}
		if (interlace !== 0 && interlace !== 1) {
			this.error(/* @__PURE__ */ new Error("Unsupported interlace method"));
			return;
		}
		this._colorType = colorType;
		let bpp = constants.COLORTYPE_TO_BPP_MAP[this._colorType];
		this._hasIHDR = true;
		this.metadata({
			width,
			height,
			depth,
			interlace: Boolean(interlace),
			palette: Boolean(colorType & constants.COLORTYPE_PALETTE),
			color: Boolean(colorType & constants.COLORTYPE_COLOR),
			alpha: Boolean(colorType & constants.COLORTYPE_ALPHA),
			bpp,
			colorType
		});
		this._handleChunkEnd();
	};
	Parser.prototype._handlePLTE = function(length) {
		this.read(length, this._parsePLTE.bind(this));
	};
	Parser.prototype._parsePLTE = function(data) {
		this._crc.write(data);
		let entries = Math.floor(data.length / 3);
		for (let i = 0; i < entries; i++) this._palette.push([
			data[i * 3],
			data[i * 3 + 1],
			data[i * 3 + 2],
			255
		]);
		this.palette(this._palette);
		this._handleChunkEnd();
	};
	Parser.prototype._handleTRNS = function(length) {
		this.simpleTransparency();
		this.read(length, this._parseTRNS.bind(this));
	};
	Parser.prototype._parseTRNS = function(data) {
		this._crc.write(data);
		if (this._colorType === constants.COLORTYPE_PALETTE_COLOR) {
			if (this._palette.length === 0) {
				this.error(/* @__PURE__ */ new Error("Transparency chunk must be after palette"));
				return;
			}
			if (data.length > this._palette.length) {
				this.error(/* @__PURE__ */ new Error("More transparent colors than palette size"));
				return;
			}
			for (let i = 0; i < data.length; i++) this._palette[i][3] = data[i];
			this.palette(this._palette);
		}
		if (this._colorType === constants.COLORTYPE_GRAYSCALE) this.transColor([data.readUInt16BE(0)]);
		if (this._colorType === constants.COLORTYPE_COLOR) this.transColor([
			data.readUInt16BE(0),
			data.readUInt16BE(2),
			data.readUInt16BE(4)
		]);
		this._handleChunkEnd();
	};
	Parser.prototype._handleGAMA = function(length) {
		this.read(length, this._parseGAMA.bind(this));
	};
	Parser.prototype._parseGAMA = function(data) {
		this._crc.write(data);
		this.gamma(data.readUInt32BE(0) / constants.GAMMA_DIVISION);
		this._handleChunkEnd();
	};
	Parser.prototype._handleIDAT = function(length) {
		if (!this._emittedHeadersFinished) {
			this._emittedHeadersFinished = true;
			this.headersFinished();
		}
		this.read(-length, this._parseIDAT.bind(this, length));
	};
	Parser.prototype._parseIDAT = function(length, data) {
		this._crc.write(data);
		if (this._colorType === constants.COLORTYPE_PALETTE_COLOR && this._palette.length === 0) throw new Error("Expected palette not found");
		this.inflateData(data);
		let leftOverLength = length - data.length;
		if (leftOverLength > 0) this._handleIDAT(leftOverLength);
		else this._handleChunkEnd();
	};
	Parser.prototype._handleIEND = function(length) {
		this.read(length, this._parseIEND.bind(this));
	};
	Parser.prototype._parseIEND = function(data) {
		this._crc.write(data);
		this._hasIEND = true;
		this._handleChunkEnd();
		if (this.finished) this.finished();
	};
}));
//#endregion
//#region node_modules/pngjs/lib/bitmapper.js
var require_bitmapper = /* @__PURE__ */ __commonJSMin(((exports) => {
	var interlaceUtils = require_interlace();
	var pixelBppMapper = [
		function() {},
		function(pxData, data, pxPos, rawPos) {
			if (rawPos === data.length) throw new Error("Ran out of data");
			let pixel = data[rawPos];
			pxData[pxPos] = pixel;
			pxData[pxPos + 1] = pixel;
			pxData[pxPos + 2] = pixel;
			pxData[pxPos + 3] = 255;
		},
		function(pxData, data, pxPos, rawPos) {
			if (rawPos + 1 >= data.length) throw new Error("Ran out of data");
			let pixel = data[rawPos];
			pxData[pxPos] = pixel;
			pxData[pxPos + 1] = pixel;
			pxData[pxPos + 2] = pixel;
			pxData[pxPos + 3] = data[rawPos + 1];
		},
		function(pxData, data, pxPos, rawPos) {
			if (rawPos + 2 >= data.length) throw new Error("Ran out of data");
			pxData[pxPos] = data[rawPos];
			pxData[pxPos + 1] = data[rawPos + 1];
			pxData[pxPos + 2] = data[rawPos + 2];
			pxData[pxPos + 3] = 255;
		},
		function(pxData, data, pxPos, rawPos) {
			if (rawPos + 3 >= data.length) throw new Error("Ran out of data");
			pxData[pxPos] = data[rawPos];
			pxData[pxPos + 1] = data[rawPos + 1];
			pxData[pxPos + 2] = data[rawPos + 2];
			pxData[pxPos + 3] = data[rawPos + 3];
		}
	];
	var pixelBppCustomMapper = [
		function() {},
		function(pxData, pixelData, pxPos, maxBit) {
			let pixel = pixelData[0];
			pxData[pxPos] = pixel;
			pxData[pxPos + 1] = pixel;
			pxData[pxPos + 2] = pixel;
			pxData[pxPos + 3] = maxBit;
		},
		function(pxData, pixelData, pxPos) {
			let pixel = pixelData[0];
			pxData[pxPos] = pixel;
			pxData[pxPos + 1] = pixel;
			pxData[pxPos + 2] = pixel;
			pxData[pxPos + 3] = pixelData[1];
		},
		function(pxData, pixelData, pxPos, maxBit) {
			pxData[pxPos] = pixelData[0];
			pxData[pxPos + 1] = pixelData[1];
			pxData[pxPos + 2] = pixelData[2];
			pxData[pxPos + 3] = maxBit;
		},
		function(pxData, pixelData, pxPos) {
			pxData[pxPos] = pixelData[0];
			pxData[pxPos + 1] = pixelData[1];
			pxData[pxPos + 2] = pixelData[2];
			pxData[pxPos + 3] = pixelData[3];
		}
	];
	function bitRetriever(data, depth) {
		let leftOver = [];
		let i = 0;
		function split() {
			if (i === data.length) throw new Error("Ran out of data");
			let byte = data[i];
			i++;
			let byte8, byte7, byte6, byte5, byte4, byte3, byte2, byte1;
			switch (depth) {
				default: throw new Error("unrecognised depth");
				case 16:
					byte2 = data[i];
					i++;
					leftOver.push((byte << 8) + byte2);
					break;
				case 4:
					byte2 = byte & 15;
					byte1 = byte >> 4;
					leftOver.push(byte1, byte2);
					break;
				case 2:
					byte4 = byte & 3;
					byte3 = byte >> 2 & 3;
					byte2 = byte >> 4 & 3;
					byte1 = byte >> 6 & 3;
					leftOver.push(byte1, byte2, byte3, byte4);
					break;
				case 1:
					byte8 = byte & 1;
					byte7 = byte >> 1 & 1;
					byte6 = byte >> 2 & 1;
					byte5 = byte >> 3 & 1;
					byte4 = byte >> 4 & 1;
					byte3 = byte >> 5 & 1;
					byte2 = byte >> 6 & 1;
					byte1 = byte >> 7 & 1;
					leftOver.push(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8);
			}
		}
		return {
			get: function(count) {
				while (leftOver.length < count) split();
				let returner = leftOver.slice(0, count);
				leftOver = leftOver.slice(count);
				return returner;
			},
			resetAfterLine: function() {
				leftOver.length = 0;
			},
			end: function() {
				if (i !== data.length) throw new Error("extra data found");
			}
		};
	}
	function mapImage8Bit(image, pxData, getPxPos, bpp, data, rawPos) {
		let imageWidth = image.width;
		let imageHeight = image.height;
		let imagePass = image.index;
		for (let y = 0; y < imageHeight; y++) for (let x = 0; x < imageWidth; x++) {
			let pxPos = getPxPos(x, y, imagePass);
			pixelBppMapper[bpp](pxData, data, pxPos, rawPos);
			rawPos += bpp;
		}
		return rawPos;
	}
	function mapImageCustomBit(image, pxData, getPxPos, bpp, bits, maxBit) {
		let imageWidth = image.width;
		let imageHeight = image.height;
		let imagePass = image.index;
		for (let y = 0; y < imageHeight; y++) {
			for (let x = 0; x < imageWidth; x++) {
				let pixelData = bits.get(bpp);
				let pxPos = getPxPos(x, y, imagePass);
				pixelBppCustomMapper[bpp](pxData, pixelData, pxPos, maxBit);
			}
			bits.resetAfterLine();
		}
	}
	exports.dataToBitMap = function(data, bitmapInfo) {
		let width = bitmapInfo.width;
		let height = bitmapInfo.height;
		let depth = bitmapInfo.depth;
		let bpp = bitmapInfo.bpp;
		let interlace = bitmapInfo.interlace;
		let bits;
		if (depth !== 8) bits = bitRetriever(data, depth);
		let pxData;
		if (depth <= 8) pxData = Buffer.alloc(width * height * 4);
		else pxData = new Uint16Array(width * height * 4);
		let maxBit = Math.pow(2, depth) - 1;
		let rawPos = 0;
		let images;
		let getPxPos;
		if (interlace) {
			images = interlaceUtils.getImagePasses(width, height);
			getPxPos = interlaceUtils.getInterlaceIterator(width, height);
		} else {
			let nonInterlacedPxPos = 0;
			getPxPos = function() {
				let returner = nonInterlacedPxPos;
				nonInterlacedPxPos += 4;
				return returner;
			};
			images = [{
				width,
				height
			}];
		}
		for (let imageIndex = 0; imageIndex < images.length; imageIndex++) if (depth === 8) rawPos = mapImage8Bit(images[imageIndex], pxData, getPxPos, bpp, data, rawPos);
		else mapImageCustomBit(images[imageIndex], pxData, getPxPos, bpp, bits, maxBit);
		if (depth === 8) {
			if (rawPos !== data.length) throw new Error("extra data found");
		} else bits.end();
		return pxData;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/format-normaliser.js
var require_format_normaliser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function dePalette(indata, outdata, width, height, palette) {
		let pxPos = 0;
		for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
			let color = palette[indata[pxPos]];
			if (!color) throw new Error("index " + indata[pxPos] + " not in palette");
			for (let i = 0; i < 4; i++) outdata[pxPos + i] = color[i];
			pxPos += 4;
		}
	}
	function replaceTransparentColor(indata, outdata, width, height, transColor) {
		let pxPos = 0;
		for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
			let makeTrans = false;
			if (transColor.length === 1) {
				if (transColor[0] === indata[pxPos]) makeTrans = true;
			} else if (transColor[0] === indata[pxPos] && transColor[1] === indata[pxPos + 1] && transColor[2] === indata[pxPos + 2]) makeTrans = true;
			if (makeTrans) for (let i = 0; i < 4; i++) outdata[pxPos + i] = 0;
			pxPos += 4;
		}
	}
	function scaleDepth(indata, outdata, width, height, depth) {
		let maxOutSample = 255;
		let maxInSample = Math.pow(2, depth) - 1;
		let pxPos = 0;
		for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
			for (let i = 0; i < 4; i++) outdata[pxPos + i] = Math.floor(indata[pxPos + i] * maxOutSample / maxInSample + .5);
			pxPos += 4;
		}
	}
	module.exports = function(indata, imageData) {
		let depth = imageData.depth;
		let width = imageData.width;
		let height = imageData.height;
		let colorType = imageData.colorType;
		let transColor = imageData.transColor;
		let palette = imageData.palette;
		let outdata = indata;
		if (colorType === 3) dePalette(indata, outdata, width, height, palette);
		else {
			if (transColor) replaceTransparentColor(indata, outdata, width, height, transColor);
			if (depth !== 8) {
				if (depth === 16) outdata = Buffer.alloc(width * height * 4);
				scaleDepth(indata, outdata, width, height, depth);
			}
		}
		return outdata;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/parser-async.js
var require_parser_async = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var util$3 = __require("util");
	var zlib$4 = __require("zlib");
	var ChunkStream = require_chunkstream();
	var FilterAsync = require_filter_parse_async();
	var Parser = require_parser();
	var bitmapper = require_bitmapper();
	var formatNormaliser = require_format_normaliser();
	var ParserAsync = module.exports = function(options) {
		ChunkStream.call(this);
		this._parser = new Parser(options, {
			read: this.read.bind(this),
			error: this._handleError.bind(this),
			metadata: this._handleMetaData.bind(this),
			gamma: this.emit.bind(this, "gamma"),
			palette: this._handlePalette.bind(this),
			transColor: this._handleTransColor.bind(this),
			finished: this._finished.bind(this),
			inflateData: this._inflateData.bind(this),
			simpleTransparency: this._simpleTransparency.bind(this),
			headersFinished: this._headersFinished.bind(this)
		});
		this._options = options;
		this.writable = true;
		this._parser.start();
	};
	util$3.inherits(ParserAsync, ChunkStream);
	ParserAsync.prototype._handleError = function(err) {
		this.emit("error", err);
		this.writable = false;
		this.destroy();
		if (this._inflate && this._inflate.destroy) this._inflate.destroy();
		if (this._filter) {
			this._filter.destroy();
			this._filter.on("error", function() {});
		}
		this.errord = true;
	};
	ParserAsync.prototype._inflateData = function(data) {
		if (!this._inflate) {
			if (this._bitmapInfo.interlace) {
				this._inflate = zlib$4.createInflate();
				this._inflate.on("error", this.emit.bind(this, "error"));
				this._filter.on("complete", this._complete.bind(this));
				this._inflate.pipe(this._filter);
			} else {
				let imageSize = ((this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3) + 1) * this._bitmapInfo.height;
				let chunkSize = Math.max(imageSize, zlib$4.Z_MIN_CHUNK);
				this._inflate = zlib$4.createInflate({ chunkSize });
				let leftToInflate = imageSize;
				let emitError = this.emit.bind(this, "error");
				this._inflate.on("error", function(err) {
					if (!leftToInflate) return;
					emitError(err);
				});
				this._filter.on("complete", this._complete.bind(this));
				let filterWrite = this._filter.write.bind(this._filter);
				this._inflate.on("data", function(chunk) {
					if (!leftToInflate) return;
					if (chunk.length > leftToInflate) chunk = chunk.slice(0, leftToInflate);
					leftToInflate -= chunk.length;
					filterWrite(chunk);
				});
				this._inflate.on("end", this._filter.end.bind(this._filter));
			}
		}
		this._inflate.write(data);
	};
	ParserAsync.prototype._handleMetaData = function(metaData) {
		this._metaData = metaData;
		this._bitmapInfo = Object.create(metaData);
		this._filter = new FilterAsync(this._bitmapInfo);
	};
	ParserAsync.prototype._handleTransColor = function(transColor) {
		this._bitmapInfo.transColor = transColor;
	};
	ParserAsync.prototype._handlePalette = function(palette) {
		this._bitmapInfo.palette = palette;
	};
	ParserAsync.prototype._simpleTransparency = function() {
		this._metaData.alpha = true;
	};
	ParserAsync.prototype._headersFinished = function() {
		this.emit("metadata", this._metaData);
	};
	ParserAsync.prototype._finished = function() {
		if (this.errord) return;
		if (!this._inflate) this.emit("error", "No Inflate block");
		else this._inflate.end();
	};
	ParserAsync.prototype._complete = function(filteredData) {
		if (this.errord) return;
		let normalisedBitmapData;
		try {
			let bitmapData = bitmapper.dataToBitMap(filteredData, this._bitmapInfo);
			normalisedBitmapData = formatNormaliser(bitmapData, this._bitmapInfo);
			bitmapData = null;
		} catch (ex) {
			this._handleError(ex);
			return;
		}
		this.emit("parsed", normalisedBitmapData);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/bitpacker.js
var require_bitpacker = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constants = require_constants();
	module.exports = function(dataIn, width, height, options) {
		let outHasAlpha = [constants.COLORTYPE_COLOR_ALPHA, constants.COLORTYPE_ALPHA].indexOf(options.colorType) !== -1;
		if (options.colorType === options.inputColorType) {
			let bigEndian = (function() {
				let buffer = /* @__PURE__ */ new ArrayBuffer(2);
				new DataView(buffer).setInt16(0, 256, true);
				return new Int16Array(buffer)[0] !== 256;
			})();
			if (options.bitDepth === 8 || options.bitDepth === 16 && bigEndian) return dataIn;
		}
		let data = options.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
		let maxValue = 255;
		let inBpp = constants.COLORTYPE_TO_BPP_MAP[options.inputColorType];
		if (inBpp === 4 && !options.inputHasAlpha) inBpp = 3;
		let outBpp = constants.COLORTYPE_TO_BPP_MAP[options.colorType];
		if (options.bitDepth === 16) {
			maxValue = 65535;
			outBpp *= 2;
		}
		let outData = Buffer.alloc(width * height * outBpp);
		let inIndex = 0;
		let outIndex = 0;
		let bgColor = options.bgColor || {};
		if (bgColor.red === void 0) bgColor.red = maxValue;
		if (bgColor.green === void 0) bgColor.green = maxValue;
		if (bgColor.blue === void 0) bgColor.blue = maxValue;
		function getRGBA() {
			let red;
			let green;
			let blue;
			let alpha = maxValue;
			switch (options.inputColorType) {
				case constants.COLORTYPE_COLOR_ALPHA:
					alpha = data[inIndex + 3];
					red = data[inIndex];
					green = data[inIndex + 1];
					blue = data[inIndex + 2];
					break;
				case constants.COLORTYPE_COLOR:
					red = data[inIndex];
					green = data[inIndex + 1];
					blue = data[inIndex + 2];
					break;
				case constants.COLORTYPE_ALPHA:
					alpha = data[inIndex + 1];
					red = data[inIndex];
					green = red;
					blue = red;
					break;
				case constants.COLORTYPE_GRAYSCALE:
					red = data[inIndex];
					green = red;
					blue = red;
					break;
				default: throw new Error("input color type:" + options.inputColorType + " is not supported at present");
			}
			if (options.inputHasAlpha) {
				if (!outHasAlpha) {
					alpha /= maxValue;
					red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
					green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
					blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
				}
			}
			return {
				red,
				green,
				blue,
				alpha
			};
		}
		for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
			let rgba = getRGBA(data, inIndex);
			switch (options.colorType) {
				case constants.COLORTYPE_COLOR_ALPHA:
				case constants.COLORTYPE_COLOR:
					if (options.bitDepth === 8) {
						outData[outIndex] = rgba.red;
						outData[outIndex + 1] = rgba.green;
						outData[outIndex + 2] = rgba.blue;
						if (outHasAlpha) outData[outIndex + 3] = rgba.alpha;
					} else {
						outData.writeUInt16BE(rgba.red, outIndex);
						outData.writeUInt16BE(rgba.green, outIndex + 2);
						outData.writeUInt16BE(rgba.blue, outIndex + 4);
						if (outHasAlpha) outData.writeUInt16BE(rgba.alpha, outIndex + 6);
					}
					break;
				case constants.COLORTYPE_ALPHA:
				case constants.COLORTYPE_GRAYSCALE: {
					let grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
					if (options.bitDepth === 8) {
						outData[outIndex] = grayscale;
						if (outHasAlpha) outData[outIndex + 1] = rgba.alpha;
					} else {
						outData.writeUInt16BE(grayscale, outIndex);
						if (outHasAlpha) outData.writeUInt16BE(rgba.alpha, outIndex + 2);
					}
					break;
				}
				default: throw new Error("unrecognised color Type " + options.colorType);
			}
			inIndex += inBpp;
			outIndex += outBpp;
		}
		return outData;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/filter-pack.js
var require_filter_pack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var paethPredictor = require_paeth_predictor();
	function filterNone(pxData, pxPos, byteWidth, rawData, rawPos) {
		for (let x = 0; x < byteWidth; x++) rawData[rawPos + x] = pxData[pxPos + x];
	}
	function filterSumNone(pxData, pxPos, byteWidth) {
		let sum = 0;
		let length = pxPos + byteWidth;
		for (let i = pxPos; i < length; i++) sum += Math.abs(pxData[i]);
		return sum;
	}
	function filterSub(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
		for (let x = 0; x < byteWidth; x++) {
			let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
			let val = pxData[pxPos + x] - left;
			rawData[rawPos + x] = val;
		}
	}
	function filterSumSub(pxData, pxPos, byteWidth, bpp) {
		let sum = 0;
		for (let x = 0; x < byteWidth; x++) {
			let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
			let val = pxData[pxPos + x] - left;
			sum += Math.abs(val);
		}
		return sum;
	}
	function filterUp(pxData, pxPos, byteWidth, rawData, rawPos) {
		for (let x = 0; x < byteWidth; x++) {
			let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
			let val = pxData[pxPos + x] - up;
			rawData[rawPos + x] = val;
		}
	}
	function filterSumUp(pxData, pxPos, byteWidth) {
		let sum = 0;
		let length = pxPos + byteWidth;
		for (let x = pxPos; x < length; x++) {
			let up = pxPos > 0 ? pxData[x - byteWidth] : 0;
			let val = pxData[x] - up;
			sum += Math.abs(val);
		}
		return sum;
	}
	function filterAvg(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
		for (let x = 0; x < byteWidth; x++) {
			let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
			let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
			let val = pxData[pxPos + x] - (left + up >> 1);
			rawData[rawPos + x] = val;
		}
	}
	function filterSumAvg(pxData, pxPos, byteWidth, bpp) {
		let sum = 0;
		for (let x = 0; x < byteWidth; x++) {
			let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
			let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
			let val = pxData[pxPos + x] - (left + up >> 1);
			sum += Math.abs(val);
		}
		return sum;
	}
	function filterPaeth(pxData, pxPos, byteWidth, rawData, rawPos, bpp) {
		for (let x = 0; x < byteWidth; x++) {
			let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
			let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
			let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
			let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
			rawData[rawPos + x] = val;
		}
	}
	function filterSumPaeth(pxData, pxPos, byteWidth, bpp) {
		let sum = 0;
		for (let x = 0; x < byteWidth; x++) {
			let left = x >= bpp ? pxData[pxPos + x - bpp] : 0;
			let up = pxPos > 0 ? pxData[pxPos + x - byteWidth] : 0;
			let upleft = pxPos > 0 && x >= bpp ? pxData[pxPos + x - (byteWidth + bpp)] : 0;
			let val = pxData[pxPos + x] - paethPredictor(left, up, upleft);
			sum += Math.abs(val);
		}
		return sum;
	}
	var filters = {
		0: filterNone,
		1: filterSub,
		2: filterUp,
		3: filterAvg,
		4: filterPaeth
	};
	var filterSums = {
		0: filterSumNone,
		1: filterSumSub,
		2: filterSumUp,
		3: filterSumAvg,
		4: filterSumPaeth
	};
	module.exports = function(pxData, width, height, options, bpp) {
		let filterTypes;
		if (!("filterType" in options) || options.filterType === -1) filterTypes = [
			0,
			1,
			2,
			3,
			4
		];
		else if (typeof options.filterType === "number") filterTypes = [options.filterType];
		else throw new Error("unrecognised filter types");
		if (options.bitDepth === 16) bpp *= 2;
		let byteWidth = width * bpp;
		let rawPos = 0;
		let pxPos = 0;
		let rawData = Buffer.alloc((byteWidth + 1) * height);
		let sel = filterTypes[0];
		for (let y = 0; y < height; y++) {
			if (filterTypes.length > 1) {
				let min = Infinity;
				for (let i = 0; i < filterTypes.length; i++) {
					let sum = filterSums[filterTypes[i]](pxData, pxPos, byteWidth, bpp);
					if (sum < min) {
						sel = filterTypes[i];
						min = sum;
					}
				}
			}
			rawData[rawPos] = sel;
			rawPos++;
			filters[sel](pxData, pxPos, byteWidth, rawData, rawPos, bpp);
			rawPos += byteWidth;
			pxPos += byteWidth;
		}
		return rawData;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/packer.js
var require_packer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constants = require_constants();
	var CrcStream = require_crc();
	var bitPacker = require_bitpacker();
	var filter = require_filter_pack();
	var zlib$3 = __require("zlib");
	var Packer = module.exports = function(options) {
		this._options = options;
		options.deflateChunkSize = options.deflateChunkSize || 32768;
		options.deflateLevel = options.deflateLevel != null ? options.deflateLevel : 9;
		options.deflateStrategy = options.deflateStrategy != null ? options.deflateStrategy : 3;
		options.inputHasAlpha = options.inputHasAlpha != null ? options.inputHasAlpha : true;
		options.deflateFactory = options.deflateFactory || zlib$3.createDeflate;
		options.bitDepth = options.bitDepth || 8;
		options.colorType = typeof options.colorType === "number" ? options.colorType : constants.COLORTYPE_COLOR_ALPHA;
		options.inputColorType = typeof options.inputColorType === "number" ? options.inputColorType : constants.COLORTYPE_COLOR_ALPHA;
		if ([
			constants.COLORTYPE_GRAYSCALE,
			constants.COLORTYPE_COLOR,
			constants.COLORTYPE_COLOR_ALPHA,
			constants.COLORTYPE_ALPHA
		].indexOf(options.colorType) === -1) throw new Error("option color type:" + options.colorType + " is not supported at present");
		if ([
			constants.COLORTYPE_GRAYSCALE,
			constants.COLORTYPE_COLOR,
			constants.COLORTYPE_COLOR_ALPHA,
			constants.COLORTYPE_ALPHA
		].indexOf(options.inputColorType) === -1) throw new Error("option input color type:" + options.inputColorType + " is not supported at present");
		if (options.bitDepth !== 8 && options.bitDepth !== 16) throw new Error("option bit depth:" + options.bitDepth + " is not supported at present");
	};
	Packer.prototype.getDeflateOptions = function() {
		return {
			chunkSize: this._options.deflateChunkSize,
			level: this._options.deflateLevel,
			strategy: this._options.deflateStrategy
		};
	};
	Packer.prototype.createDeflate = function() {
		return this._options.deflateFactory(this.getDeflateOptions());
	};
	Packer.prototype.filterData = function(data, width, height) {
		let packedData = bitPacker(data, width, height, this._options);
		let bpp = constants.COLORTYPE_TO_BPP_MAP[this._options.colorType];
		return filter(packedData, width, height, this._options, bpp);
	};
	Packer.prototype._packChunk = function(type, data) {
		let len = data ? data.length : 0;
		let buf = Buffer.alloc(len + 12);
		buf.writeUInt32BE(len, 0);
		buf.writeUInt32BE(type, 4);
		if (data) data.copy(buf, 8);
		buf.writeInt32BE(CrcStream.crc32(buf.slice(4, buf.length - 4)), buf.length - 4);
		return buf;
	};
	Packer.prototype.packGAMA = function(gamma) {
		let buf = Buffer.alloc(4);
		buf.writeUInt32BE(Math.floor(gamma * constants.GAMMA_DIVISION), 0);
		return this._packChunk(constants.TYPE_gAMA, buf);
	};
	Packer.prototype.packIHDR = function(width, height) {
		let buf = Buffer.alloc(13);
		buf.writeUInt32BE(width, 0);
		buf.writeUInt32BE(height, 4);
		buf[8] = this._options.bitDepth;
		buf[9] = this._options.colorType;
		buf[10] = 0;
		buf[11] = 0;
		buf[12] = 0;
		return this._packChunk(constants.TYPE_IHDR, buf);
	};
	Packer.prototype.packIDAT = function(data) {
		return this._packChunk(constants.TYPE_IDAT, data);
	};
	Packer.prototype.packIEND = function() {
		return this._packChunk(constants.TYPE_IEND, null);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/packer-async.js
var require_packer_async = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var util$2 = __require("util");
	var Stream$1 = __require("stream");
	var constants = require_constants();
	var Packer = require_packer();
	var PackerAsync = module.exports = function(opt) {
		Stream$1.call(this);
		let options = opt || {};
		this._packer = new Packer(options);
		this._deflate = this._packer.createDeflate();
		this.readable = true;
	};
	util$2.inherits(PackerAsync, Stream$1);
	PackerAsync.prototype.pack = function(data, width, height, gamma) {
		this.emit("data", Buffer.from(constants.PNG_SIGNATURE));
		this.emit("data", this._packer.packIHDR(width, height));
		if (gamma) this.emit("data", this._packer.packGAMA(gamma));
		let filteredData = this._packer.filterData(data, width, height);
		this._deflate.on("error", this.emit.bind(this, "error"));
		this._deflate.on("data", function(compressedData) {
			this.emit("data", this._packer.packIDAT(compressedData));
		}.bind(this));
		this._deflate.on("end", function() {
			this.emit("data", this._packer.packIEND());
			this.emit("end");
		}.bind(this));
		this._deflate.end(filteredData);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/sync-inflate.js
var require_sync_inflate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assert = __require("assert").ok;
	var zlib$2 = __require("zlib");
	var util$1 = __require("util");
	var kMaxLength = __require("buffer").kMaxLength;
	function Inflate(opts) {
		if (!(this instanceof Inflate)) return new Inflate(opts);
		if (opts && opts.chunkSize < zlib$2.Z_MIN_CHUNK) opts.chunkSize = zlib$2.Z_MIN_CHUNK;
		zlib$2.Inflate.call(this, opts);
		this._offset = this._offset === void 0 ? this._outOffset : this._offset;
		this._buffer = this._buffer || this._outBuffer;
		if (opts && opts.maxLength != null) this._maxLength = opts.maxLength;
	}
	function createInflate(opts) {
		return new Inflate(opts);
	}
	function _close(engine, callback) {
		if (callback) process.nextTick(callback);
		if (!engine._handle) return;
		engine._handle.close();
		engine._handle = null;
	}
	Inflate.prototype._processChunk = function(chunk, flushFlag, asyncCb) {
		if (typeof asyncCb === "function") return zlib$2.Inflate._processChunk.call(this, chunk, flushFlag, asyncCb);
		let self = this;
		let availInBefore = chunk && chunk.length;
		let availOutBefore = this._chunkSize - this._offset;
		let leftToInflate = this._maxLength;
		let inOff = 0;
		let buffers = [];
		let nread = 0;
		let error;
		this.on("error", function(err) {
			error = err;
		});
		function handleChunk(availInAfter, availOutAfter) {
			if (self._hadError) return;
			let have = availOutBefore - availOutAfter;
			assert(have >= 0, "have should not go down");
			if (have > 0) {
				let out = self._buffer.slice(self._offset, self._offset + have);
				self._offset += have;
				if (out.length > leftToInflate) out = out.slice(0, leftToInflate);
				buffers.push(out);
				nread += out.length;
				leftToInflate -= out.length;
				if (leftToInflate === 0) return false;
			}
			if (availOutAfter === 0 || self._offset >= self._chunkSize) {
				availOutBefore = self._chunkSize;
				self._offset = 0;
				self._buffer = Buffer.allocUnsafe(self._chunkSize);
			}
			if (availOutAfter === 0) {
				inOff += availInBefore - availInAfter;
				availInBefore = availInAfter;
				return true;
			}
			return false;
		}
		assert(this._handle, "zlib binding closed");
		let res;
		do {
			res = this._handle.writeSync(flushFlag, chunk, inOff, availInBefore, this._buffer, this._offset, availOutBefore);
			res = res || this._writeState;
		} while (!this._hadError && handleChunk(res[0], res[1]));
		if (this._hadError) throw error;
		if (nread >= kMaxLength) {
			_close(this);
			throw new RangeError("Cannot create final Buffer. It would be larger than 0x" + kMaxLength.toString(16) + " bytes");
		}
		let buf = Buffer.concat(buffers, nread);
		_close(this);
		return buf;
	};
	util$1.inherits(Inflate, zlib$2.Inflate);
	function zlibBufferSync(engine, buffer) {
		if (typeof buffer === "string") buffer = Buffer.from(buffer);
		if (!(buffer instanceof Buffer)) throw new TypeError("Not a string or buffer");
		let flushFlag = engine._finishFlushFlag;
		if (flushFlag == null) flushFlag = zlib$2.Z_FINISH;
		return engine._processChunk(buffer, flushFlag);
	}
	function inflateSync(buffer, opts) {
		return zlibBufferSync(new Inflate(opts), buffer);
	}
	module.exports = exports = inflateSync;
	exports.Inflate = Inflate;
	exports.createInflate = createInflate;
	exports.inflateSync = inflateSync;
}));
//#endregion
//#region node_modules/pngjs/lib/sync-reader.js
var require_sync_reader = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SyncReader = module.exports = function(buffer) {
		this._buffer = buffer;
		this._reads = [];
	};
	SyncReader.prototype.read = function(length, callback) {
		this._reads.push({
			length: Math.abs(length),
			allowLess: length < 0,
			func: callback
		});
	};
	SyncReader.prototype.process = function() {
		while (this._reads.length > 0 && this._buffer.length) {
			let read = this._reads[0];
			if (this._buffer.length && (this._buffer.length >= read.length || read.allowLess)) {
				this._reads.shift();
				let buf = this._buffer;
				this._buffer = buf.slice(read.length);
				read.func.call(this, buf.slice(0, read.length));
			} else break;
		}
		if (this._reads.length > 0) return /* @__PURE__ */ new Error("There are some read requests waitng on finished stream");
		if (this._buffer.length > 0) return /* @__PURE__ */ new Error("unrecognised content at end of stream");
	};
}));
//#endregion
//#region node_modules/pngjs/lib/filter-parse-sync.js
var require_filter_parse_sync = /* @__PURE__ */ __commonJSMin(((exports) => {
	var SyncReader = require_sync_reader();
	var Filter = require_filter_parse();
	exports.process = function(inBuffer, bitmapInfo) {
		let outBuffers = [];
		let reader = new SyncReader(inBuffer);
		new Filter(bitmapInfo, {
			read: reader.read.bind(reader),
			write: function(bufferPart) {
				outBuffers.push(bufferPart);
			},
			complete: function() {}
		}).start();
		reader.process();
		return Buffer.concat(outBuffers);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/parser-sync.js
var require_parser_sync = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasSyncZlib = true;
	var zlib$1 = __require("zlib");
	var inflateSync = require_sync_inflate();
	if (!zlib$1.deflateSync) hasSyncZlib = false;
	var SyncReader = require_sync_reader();
	var FilterSync = require_filter_parse_sync();
	var Parser = require_parser();
	var bitmapper = require_bitmapper();
	var formatNormaliser = require_format_normaliser();
	module.exports = function(buffer, options) {
		if (!hasSyncZlib) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
		let err;
		function handleError(_err_) {
			err = _err_;
		}
		let metaData;
		function handleMetaData(_metaData_) {
			metaData = _metaData_;
		}
		function handleTransColor(transColor) {
			metaData.transColor = transColor;
		}
		function handlePalette(palette) {
			metaData.palette = palette;
		}
		function handleSimpleTransparency() {
			metaData.alpha = true;
		}
		let gamma;
		function handleGamma(_gamma_) {
			gamma = _gamma_;
		}
		let inflateDataList = [];
		function handleInflateData(inflatedData) {
			inflateDataList.push(inflatedData);
		}
		let reader = new SyncReader(buffer);
		new Parser(options, {
			read: reader.read.bind(reader),
			error: handleError,
			metadata: handleMetaData,
			gamma: handleGamma,
			palette: handlePalette,
			transColor: handleTransColor,
			inflateData: handleInflateData,
			simpleTransparency: handleSimpleTransparency
		}).start();
		reader.process();
		if (err) throw err;
		let inflateData = Buffer.concat(inflateDataList);
		inflateDataList.length = 0;
		let inflatedData;
		if (metaData.interlace) inflatedData = zlib$1.inflateSync(inflateData);
		else {
			let imageSize = ((metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1) * metaData.height;
			inflatedData = inflateSync(inflateData, {
				chunkSize: imageSize,
				maxLength: imageSize
			});
		}
		inflateData = null;
		if (!inflatedData || !inflatedData.length) throw new Error("bad png - invalid inflate data response");
		let unfilteredData = FilterSync.process(inflatedData, metaData);
		inflateData = null;
		let bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
		unfilteredData = null;
		let normalisedBitmapData = formatNormaliser(bitmapData, metaData);
		metaData.data = normalisedBitmapData;
		metaData.gamma = gamma || 0;
		return metaData;
	};
}));
//#endregion
//#region node_modules/pngjs/lib/packer-sync.js
var require_packer_sync = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasSyncZlib = true;
	var zlib = __require("zlib");
	if (!zlib.deflateSync) hasSyncZlib = false;
	var constants = require_constants();
	var Packer = require_packer();
	module.exports = function(metaData, opt) {
		if (!hasSyncZlib) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
		let packer = new Packer(opt || {});
		let chunks = [];
		chunks.push(Buffer.from(constants.PNG_SIGNATURE));
		chunks.push(packer.packIHDR(metaData.width, metaData.height));
		if (metaData.gamma) chunks.push(packer.packGAMA(metaData.gamma));
		let filteredData = packer.filterData(metaData.data, metaData.width, metaData.height);
		let compressedData = zlib.deflateSync(filteredData, packer.getDeflateOptions());
		filteredData = null;
		if (!compressedData || !compressedData.length) throw new Error("bad png - invalid compressed data response");
		chunks.push(packer.packIDAT(compressedData));
		chunks.push(packer.packIEND());
		return Buffer.concat(chunks);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/png-sync.js
var require_png_sync = /* @__PURE__ */ __commonJSMin(((exports) => {
	var parse = require_parser_sync();
	var pack = require_packer_sync();
	exports.read = function(buffer, options) {
		return parse(buffer, options || {});
	};
	exports.write = function(png, options) {
		return pack(png, options);
	};
}));
//#endregion
//#region node_modules/pngjs/lib/png.js
var require_png$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var util = __require("util");
	var Stream = __require("stream");
	var Parser = require_parser_async();
	var Packer = require_packer_async();
	var PNGSync = require_png_sync();
	var PNG = exports.PNG = function(options) {
		Stream.call(this);
		options = options || {};
		this.width = options.width | 0;
		this.height = options.height | 0;
		this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null;
		if (options.fill && this.data) this.data.fill(0);
		this.gamma = 0;
		this.readable = this.writable = true;
		this._parser = new Parser(options);
		this._parser.on("error", this.emit.bind(this, "error"));
		this._parser.on("close", this._handleClose.bind(this));
		this._parser.on("metadata", this._metadata.bind(this));
		this._parser.on("gamma", this._gamma.bind(this));
		this._parser.on("parsed", function(data) {
			this.data = data;
			this.emit("parsed", data);
		}.bind(this));
		this._packer = new Packer(options);
		this._packer.on("data", this.emit.bind(this, "data"));
		this._packer.on("end", this.emit.bind(this, "end"));
		this._parser.on("close", this._handleClose.bind(this));
		this._packer.on("error", this.emit.bind(this, "error"));
	};
	util.inherits(PNG, Stream);
	PNG.sync = PNGSync;
	PNG.prototype.pack = function() {
		if (!this.data || !this.data.length) {
			this.emit("error", "No data provided");
			return this;
		}
		process.nextTick(function() {
			this._packer.pack(this.data, this.width, this.height, this.gamma);
		}.bind(this));
		return this;
	};
	PNG.prototype.parse = function(data, callback) {
		if (callback) {
			let onParsed, onError;
			onParsed = function(parsedData) {
				this.removeListener("error", onError);
				this.data = parsedData;
				callback(null, this);
			}.bind(this);
			onError = function(err) {
				this.removeListener("parsed", onParsed);
				callback(err, null);
			}.bind(this);
			this.once("parsed", onParsed);
			this.once("error", onError);
		}
		this.end(data);
		return this;
	};
	PNG.prototype.write = function(data) {
		this._parser.write(data);
		return true;
	};
	PNG.prototype.end = function(data) {
		this._parser.end(data);
	};
	PNG.prototype._metadata = function(metadata) {
		this.width = metadata.width;
		this.height = metadata.height;
		this.emit("metadata", metadata);
	};
	PNG.prototype._gamma = function(gamma) {
		this.gamma = gamma;
	};
	PNG.prototype._handleClose = function() {
		if (!this._parser.writable && !this._packer.readable) this.emit("close");
	};
	PNG.bitblt = function(src, dst, srcX, srcY, width, height, deltaX, deltaY) {
		srcX |= 0;
		srcY |= 0;
		width |= 0;
		height |= 0;
		deltaX |= 0;
		deltaY |= 0;
		if (srcX > src.width || srcY > src.height || srcX + width > src.width || srcY + height > src.height) throw new Error("bitblt reading outside image");
		if (deltaX > dst.width || deltaY > dst.height || deltaX + width > dst.width || deltaY + height > dst.height) throw new Error("bitblt writing outside image");
		for (let y = 0; y < height; y++) src.data.copy(dst.data, (deltaY + y) * dst.width + deltaX << 2, (srcY + y) * src.width + srcX << 2, (srcY + y) * src.width + srcX + width << 2);
	};
	PNG.prototype.bitblt = function(dst, srcX, srcY, width, height, deltaX, deltaY) {
		PNG.bitblt(this, dst, srcX, srcY, width, height, deltaX, deltaY);
		return this;
	};
	PNG.adjustGamma = function(src) {
		if (src.gamma) {
			for (let y = 0; y < src.height; y++) for (let x = 0; x < src.width; x++) {
				let idx = src.width * y + x << 2;
				for (let i = 0; i < 3; i++) {
					let sample = src.data[idx + i] / 255;
					sample = Math.pow(sample, 1 / 2.2 / src.gamma);
					src.data[idx + i] = Math.round(sample * 255);
				}
			}
			src.gamma = 0;
		}
	};
	PNG.prototype.adjustGamma = function() {
		PNG.adjustGamma(this);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	function hex2rgba(hex) {
		if (typeof hex === "number") hex = hex.toString();
		if (typeof hex !== "string") throw new Error("Color should be defined as hex string");
		let hexCode = hex.slice().replace("#", "").split("");
		if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) throw new Error("Invalid hex color: " + hex);
		if (hexCode.length === 3 || hexCode.length === 4) hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
			return [c, c];
		}));
		if (hexCode.length === 6) hexCode.push("F", "F");
		const hexValue = parseInt(hexCode.join(""), 16);
		return {
			r: hexValue >> 24 & 255,
			g: hexValue >> 16 & 255,
			b: hexValue >> 8 & 255,
			a: hexValue & 255,
			hex: "#" + hexCode.slice(0, 6).join("")
		};
	}
	exports.getOptions = function getOptions(options) {
		if (!options) options = {};
		if (!options.color) options.color = {};
		const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
		const width = options.width && options.width >= 21 ? options.width : void 0;
		const scale = options.scale || 4;
		return {
			width,
			scale: width ? 4 : scale,
			margin,
			color: {
				dark: hex2rgba(options.color.dark || "#000000ff"),
				light: hex2rgba(options.color.light || "#ffffffff")
			},
			type: options.type,
			rendererOpts: options.rendererOpts || {}
		};
	};
	exports.getScale = function getScale(qrSize, opts) {
		return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
	};
	exports.getImageWidth = function getImageWidth(qrSize, opts) {
		const scale = exports.getScale(qrSize, opts);
		return Math.floor((qrSize + opts.margin * 2) * scale);
	};
	exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
		const size = qr.modules.size;
		const data = qr.modules.data;
		const scale = exports.getScale(size, opts);
		const symbolSize = Math.floor((size + opts.margin * 2) * scale);
		const scaledMargin = opts.margin * scale;
		const palette = [opts.color.light, opts.color.dark];
		for (let i = 0; i < symbolSize; i++) for (let j = 0; j < symbolSize; j++) {
			let posDst = (i * symbolSize + j) * 4;
			let pxColor = opts.color.light;
			if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
				const iSrc = Math.floor((i - scaledMargin) / scale);
				const jSrc = Math.floor((j - scaledMargin) / scale);
				pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
			}
			imgData[posDst++] = pxColor.r;
			imgData[posDst++] = pxColor.g;
			imgData[posDst++] = pxColor.b;
			imgData[posDst] = pxColor.a;
		}
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/png.js
var require_png = /* @__PURE__ */ __commonJSMin(((exports) => {
	var fs = __require("fs");
	var PNG = require_png$1().PNG;
	var Utils = require_utils();
	exports.render = function render(qrData, options) {
		const opts = Utils.getOptions(options);
		const pngOpts = opts.rendererOpts;
		const size = Utils.getImageWidth(qrData.modules.size, opts);
		pngOpts.width = size;
		pngOpts.height = size;
		const pngImage = new PNG(pngOpts);
		Utils.qrToImageData(pngImage.data, qrData, opts);
		return pngImage;
	};
	exports.renderToDataURL = function renderToDataURL(qrData, options, cb) {
		if (typeof cb === "undefined") {
			cb = options;
			options = void 0;
		}
		exports.renderToBuffer(qrData, options, function(err, output) {
			if (err) cb(err);
			let url = "data:image/png;base64,";
			url += output.toString("base64");
			cb(null, url);
		});
	};
	exports.renderToBuffer = function renderToBuffer(qrData, options, cb) {
		if (typeof cb === "undefined") {
			cb = options;
			options = void 0;
		}
		const png = exports.render(qrData, options);
		const buffer = [];
		png.on("error", cb);
		png.on("data", function(data) {
			buffer.push(data);
		});
		png.on("end", function() {
			cb(null, Buffer.concat(buffer));
		});
		png.pack();
	};
	exports.renderToFile = function renderToFile(path, qrData, options, cb) {
		if (typeof cb === "undefined") {
			cb = options;
			options = void 0;
		}
		let called = false;
		const done = (...args) => {
			if (called) return;
			called = true;
			cb.apply(null, args);
		};
		const stream = fs.createWriteStream(path);
		stream.on("error", done);
		stream.on("close", done);
		exports.renderToFileStream(stream, qrData, options);
	};
	exports.renderToFileStream = function renderToFileStream(stream, qrData, options) {
		exports.render(qrData, options).pack().pipe(stream);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/utf8.js
var require_utf8 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils();
	var BLOCK_CHAR = {
		WW: " ",
		WB: "▄",
		BB: "█",
		BW: "▀"
	};
	var INVERTED_BLOCK_CHAR = {
		BB: " ",
		BW: "▄",
		WW: "█",
		WB: "▀"
	};
	function getBlockChar(top, bottom, blocks) {
		if (top && bottom) return blocks.BB;
		if (top && !bottom) return blocks.BW;
		if (!top && bottom) return blocks.WB;
		return blocks.WW;
	}
	exports.render = function(qrData, options, cb) {
		const opts = Utils.getOptions(options);
		let blocks = BLOCK_CHAR;
		if (opts.color.dark.hex === "#ffffff" || opts.color.light.hex === "#000000") blocks = INVERTED_BLOCK_CHAR;
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		let output = "";
		let hMargin = Array(size + opts.margin * 2 + 1).join(blocks.WW);
		hMargin = Array(opts.margin / 2 + 1).join(hMargin + "\n");
		const vMargin = Array(opts.margin + 1).join(blocks.WW);
		output += hMargin;
		for (let i = 0; i < size; i += 2) {
			output += vMargin;
			for (let j = 0; j < size; j++) {
				const topModule = data[i * size + j];
				const bottomModule = data[(i + 1) * size + j];
				output += getBlockChar(topModule, bottomModule, blocks);
			}
			output += vMargin + "\n";
		}
		output += hMargin.slice(0, -1);
		if (typeof cb === "function") cb(null, output);
		return output;
	};
	exports.renderToFile = function renderToFile(path, qrData, options, cb) {
		if (typeof cb === "undefined") {
			cb = options;
			options = void 0;
		}
		const fs = __require("fs");
		const utf8 = exports.render(qrData, options);
		fs.writeFile(path, utf8, cb);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/terminal/terminal.js
var require_terminal$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.render = function(qrData, options, cb) {
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		const black = "\x1B[40m  \x1B[0m";
		const white = "\x1B[47m  \x1B[0m";
		let output = "";
		const hMargin = Array(size + 3).join(white);
		const vMargin = Array(2).join(white);
		output += hMargin + "\n";
		for (let i = 0; i < size; ++i) {
			output += white;
			for (let j = 0; j < size; j++) output += data[i * size + j] ? black : white;
			output += vMargin + "\n";
		}
		output += hMargin + "\n";
		if (typeof cb === "function") cb(null, output);
		return output;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/terminal/terminal-small.js
var require_terminal_small = /* @__PURE__ */ __commonJSMin(((exports) => {
	var foregroundWhite = "\x1B[37m";
	var foregroundBlack = "\x1B[30m";
	var reset = "\x1B[0m";
	var lineSetupNormal = "\x1B[47m\x1B[30m";
	var lineSetupInverse = "\x1B[40m\x1B[37m";
	var createPalette = function(lineSetup, foregroundWhite, foregroundBlack) {
		return {
			"00": "\x1B[0m " + lineSetup,
			"01": reset + foregroundWhite + "▄" + lineSetup,
			"02": reset + foregroundBlack + "▄" + lineSetup,
			10: reset + foregroundWhite + "▀" + lineSetup,
			11: " ",
			12: "▄",
			20: reset + foregroundBlack + "▀" + lineSetup,
			21: "▀",
			22: "█"
		};
	};
	/**
	* Returns code for QR pixel
	* @param {boolean[][]} modules
	* @param {number} size
	* @param {number} x
	* @param {number} y
	* @return {'0' | '1' | '2'}
	*/
	var mkCodePixel = function(modules, size, x, y) {
		const sizePlus = size + 1;
		if (x >= sizePlus || y >= sizePlus || y < -1 || x < -1) return "0";
		if (x >= size || y >= size || y < 0 || x < 0) return "1";
		return modules[y * size + x] ? "2" : "1";
	};
	/**
	* Returns code for four QR pixels. Suitable as key in palette.
	* @param {boolean[][]} modules
	* @param {number} size
	* @param {number} x
	* @param {number} y
	* @return {keyof palette}
	*/
	var mkCode = function(modules, size, x, y) {
		return mkCodePixel(modules, size, x, y) + mkCodePixel(modules, size, x, y + 1);
	};
	exports.render = function(qrData, options, cb) {
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		const inverse = !!(options && options.inverse);
		const lineSetup = options && options.inverse ? lineSetupInverse : lineSetupNormal;
		const palette = createPalette(lineSetup, inverse ? foregroundBlack : foregroundWhite, inverse ? foregroundWhite : foregroundBlack);
		const newLine = "\x1B[0m\n" + lineSetup;
		let output = lineSetup;
		for (let y = -1; y < size + 1; y += 2) {
			for (let x = -1; x < size; x++) output += palette[mkCode(data, size, x, y)];
			output += palette[mkCode(data, size, size, y)] + newLine;
		}
		output += reset;
		if (typeof cb === "function") cb(null, output);
		return output;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/terminal.js
var require_terminal = /* @__PURE__ */ __commonJSMin(((exports) => {
	var big = require_terminal$1();
	var small = require_terminal_small();
	exports.render = function(qrData, options, cb) {
		if (options && options.small) return small.render(qrData, options, cb);
		return big.render(qrData, options, cb);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils();
	function getColorAttrib(color, attrib) {
		const alpha = color.a / 255;
		const str = attrib + "=\"" + color.hex + "\"";
		return alpha < 1 ? str + " " + attrib + "-opacity=\"" + alpha.toFixed(2).slice(1) + "\"" : str;
	}
	function svgCmd(cmd, x, y) {
		let str = cmd + x;
		if (typeof y !== "undefined") str += " " + y;
		return str;
	}
	function qrToPath(data, size, margin) {
		let path = "";
		let moveBy = 0;
		let newRow = false;
		let lineLength = 0;
		for (let i = 0; i < data.length; i++) {
			const col = Math.floor(i % size);
			const row = Math.floor(i / size);
			if (!col && !newRow) newRow = true;
			if (data[i]) {
				lineLength++;
				if (!(i > 0 && col > 0 && data[i - 1])) {
					path += newRow ? svgCmd("M", col + margin, .5 + row + margin) : svgCmd("m", moveBy, 0);
					moveBy = 0;
					newRow = false;
				}
				if (!(col + 1 < size && data[i + 1])) {
					path += svgCmd("h", lineLength);
					lineLength = 0;
				}
			} else moveBy++;
		}
		return path;
	}
	exports.render = function render(qrData, options, cb) {
		const opts = Utils.getOptions(options);
		const size = qrData.modules.size;
		const data = qrData.modules.data;
		const qrcodesize = size + opts.margin * 2;
		const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + " d=\"M0 0h" + qrcodesize + "v" + qrcodesize + "H0z\"/>";
		const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + " d=\"" + qrToPath(data, size, opts.margin) + "\"/>";
		const viewBox = "viewBox=\"0 0 " + qrcodesize + " " + qrcodesize + "\"";
		const svgTag = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (!opts.width ? "" : "width=\"" + opts.width + "\" height=\"" + opts.width + "\" ") + viewBox + " shape-rendering=\"crispEdges\">" + bg + path + "</svg>\n";
		if (typeof cb === "function") cb(null, svgTag);
		return svgTag;
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/svg.js
var require_svg = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.render = require_svg_tag().render;
	exports.renderToFile = function renderToFile(path, qrData, options, cb) {
		if (typeof cb === "undefined") {
			cb = options;
			options = void 0;
		}
		const fs = __require("fs");
		const xmlStr = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">" + exports.render(qrData, options);
		fs.writeFile(path, xmlStr, cb);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Utils = require_utils();
	function clearCanvas(ctx, canvas, size) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (!canvas.style) canvas.style = {};
		canvas.height = size;
		canvas.width = size;
		canvas.style.height = size + "px";
		canvas.style.width = size + "px";
	}
	function getCanvasElement() {
		try {
			return document.createElement("canvas");
		} catch (e) {
			throw new Error("You need to specify a canvas element");
		}
	}
	exports.render = function render(qrData, canvas, options) {
		let opts = options;
		let canvasEl = canvas;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = void 0;
		}
		if (!canvas) canvasEl = getCanvasElement();
		opts = Utils.getOptions(opts);
		const size = Utils.getImageWidth(qrData.modules.size, opts);
		const ctx = canvasEl.getContext("2d");
		const image = ctx.createImageData(size, size);
		Utils.qrToImageData(image.data, qrData, opts);
		clearCanvas(ctx, canvasEl, size);
		ctx.putImageData(image, 0, 0);
		return canvasEl;
	};
	exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
		let opts = options;
		if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
			opts = canvas;
			canvas = void 0;
		}
		if (!opts) opts = {};
		const canvasEl = exports.render(qrData, canvas, opts);
		const type = opts.type || "image/png";
		const rendererOpts = opts.rendererOpts || {};
		return canvasEl.toDataURL(type, rendererOpts.quality);
	};
}));
//#endregion
//#region node_modules/qrcode/lib/browser.js
var require_browser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var canPromise = require_can_promise();
	var QRCode = require_qrcode();
	var CanvasRenderer = require_canvas();
	var SvgRenderer = require_svg_tag();
	function renderCanvas(renderFunc, canvas, text, opts, cb) {
		const args = [].slice.call(arguments, 1);
		const argsNum = args.length;
		const isLastArgCb = typeof args[argsNum - 1] === "function";
		if (!isLastArgCb && !canPromise()) throw new Error("Callback required as last argument");
		if (isLastArgCb) {
			if (argsNum < 2) throw new Error("Too few arguments provided");
			if (argsNum === 2) {
				cb = text;
				text = canvas;
				canvas = opts = void 0;
			} else if (argsNum === 3) {
				if (canvas.getContext && typeof cb === "undefined") {
					cb = opts;
					opts = void 0;
				} else {
					cb = opts;
					opts = text;
					text = canvas;
					canvas = void 0;
				}
			}
		} else {
			if (argsNum < 1) throw new Error("Too few arguments provided");
			if (argsNum === 1) {
				text = canvas;
				canvas = opts = void 0;
			} else if (argsNum === 2 && !canvas.getContext) {
				opts = text;
				text = canvas;
				canvas = void 0;
			}
			return new Promise(function(resolve, reject) {
				try {
					resolve(renderFunc(QRCode.create(text, opts), canvas, opts));
				} catch (e) {
					reject(e);
				}
			});
		}
		try {
			const data = QRCode.create(text, opts);
			cb(null, renderFunc(data, canvas, opts));
		} catch (e) {
			cb(e);
		}
	}
	exports.create = QRCode.create;
	exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
	exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
	exports.toString = renderCanvas.bind(null, function(data, _, opts) {
		return SvgRenderer.render(data, opts);
	});
}));
//#endregion
//#region node_modules/qrcode/lib/server.js
var require_server = /* @__PURE__ */ __commonJSMin(((exports) => {
	require_can_promise();
	var QRCode = require_qrcode();
	require_png();
	require_utf8();
	require_terminal();
	require_svg();
	exports.create = QRCode.create;
	exports.toCanvas = require_browser().toCanvas;
}));
//#endregion
//#region node_modules/qrcode/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_server();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/utils/QrCode.js
function isAdjecentDots(cy, otherCy, cellSize) {
	if (cy === otherCy) return false;
	return (cy - otherCy < 0 ? otherCy - cy : cy - otherCy) <= cellSize + CONNECTING_ERROR_MARGIN;
}
function getMatrix(value, errorCorrectionLevel) {
	const arr = Array.prototype.slice.call(import_lib.create(value, { errorCorrectionLevel }).modules.data, 0);
	const sqrt = Math.sqrt(arr.length);
	return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
}
var import_lib, CONNECTING_ERROR_MARGIN, CIRCLE_SIZE_MODIFIER, QRCODE_MATRIX_MARGIN, QrCodeUtil;
var init_QrCode = __esmMin((() => {
	import_lib = /* @__PURE__ */ __toESM(require_lib(), 1);
	init_lit();
	CONNECTING_ERROR_MARGIN = .1;
	CIRCLE_SIZE_MODIFIER = 2.5;
	QRCODE_MATRIX_MARGIN = 7;
	QrCodeUtil = { generate({ uri, size, logoSize, dotColor = "#141414" }) {
		const edgeColor = "transparent";
		const strokeWidth = 5;
		const dots = [];
		const matrix = getMatrix(uri, "Q");
		const cellSize = size / matrix.length;
		const qrList = [
			{
				x: 0,
				y: 0
			},
			{
				x: 1,
				y: 0
			},
			{
				x: 0,
				y: 1
			}
		];
		qrList.forEach(({ x, y }) => {
			const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x;
			const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y;
			const borderRadius = .45;
			for (let i = 0; i < qrList.length; i += 1) {
				const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i * 2);
				dots.push(b`
            <rect
              fill=${i === 2 ? dotColor : edgeColor}
              width=${i === 0 ? dotSize - strokeWidth : dotSize}
              rx= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              ry= ${i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
              stroke=${dotColor}
              stroke-width=${i === 0 ? strokeWidth : 0}
              height=${i === 0 ? dotSize - strokeWidth : dotSize}
              x= ${i === 0 ? y1 + cellSize * i + strokeWidth / 2 : y1 + cellSize * i}
              y= ${i === 0 ? x1 + cellSize * i + strokeWidth / 2 : x1 + cellSize * i}
            />
          `);
			}
		});
		const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
		const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
		const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
		const circles = [];
		matrix.forEach((row, i) => {
			row.forEach((_, j) => {
				if (matrix[i][j]) {
					if (!(i < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN || i > matrix.length - 8 && j < QRCODE_MATRIX_MARGIN || i < QRCODE_MATRIX_MARGIN && j > matrix.length - 8)) {
						if (!(i > matrixMiddleStart && i < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd)) {
							const cx = i * cellSize + cellSize / 2;
							const cy = j * cellSize + cellSize / 2;
							circles.push([cx, cy]);
						}
					}
				}
			});
		});
		const circlesToConnect = {};
		circles.forEach(([cx, cy]) => {
			if (circlesToConnect[cx]) circlesToConnect[cx]?.push(cy);
			else circlesToConnect[cx] = [cy];
		});
		Object.entries(circlesToConnect).map(([cx, cys]) => {
			const newCys = cys.filter((cy) => cys.every((otherCy) => !isAdjecentDots(cy, otherCy, cellSize)));
			return [Number(cx), newCys];
		}).forEach(([cx, cys]) => {
			cys.forEach((cy) => {
				dots.push(b`<circle cx=${cx} cy=${cy} fill=${dotColor} r=${cellSize / CIRCLE_SIZE_MODIFIER} />`);
			});
		});
		Object.entries(circlesToConnect).filter(([_, cys]) => cys.length > 1).map(([cx, cys]) => {
			const newCys = cys.filter((cy) => cys.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
			return [Number(cx), newCys];
		}).map(([cx, cys]) => {
			cys.sort((a, b) => a < b ? -1 : 1);
			const groups = [];
			for (const cy of cys) {
				const group = groups.find((item) => item.some((otherCy) => isAdjecentDots(cy, otherCy, cellSize)));
				if (group) group.push(cy);
				else groups.push([cy]);
			}
			return [cx, groups.map((item) => [item[0], item[item.length - 1]])];
		}).forEach(([cx, groups]) => {
			groups.forEach(([y1, y2]) => {
				dots.push(b`
              <line
                x1=${cx}
                x2=${cx}
                y1=${y1}
                y2=${y2}
                stroke=${dotColor}
                stroke-width=${cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
                stroke-linecap="round"
              />
            `);
			});
		});
		return dots;
	} };
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/styles.js
var styles_default$25;
var init_styles$25 = __esmMin((() => {
	init_lit();
	styles_default$25 = i$4`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-qr-code/index.js
var __decorate$31, DEFAULT_ICON_COLOR, WuiQrCode;
var init_wui_qr_code$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_wui_image();
	init_QrCode();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$25();
	__decorate$31 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	DEFAULT_ICON_COLOR = "#3396ff";
	WuiQrCode = class WuiQrCode extends i$3 {
		constructor() {
			super(...arguments);
			this.uri = "";
			this.size = 0;
			this.theme = "dark";
			this.imageSrc = void 0;
			this.alt = void 0;
			this.arenaClear = void 0;
			this.farcaster = void 0;
		}
		render() {
			this.dataset["theme"] = this.theme;
			this.dataset["clear"] = String(this.arenaClear);
			this.style.cssText = `
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color ?? DEFAULT_ICON_COLOR}
    `;
			return T`${this.templateVisual()} ${this.templateSvg()}`;
		}
		templateSvg() {
			const size = this.theme === "light" ? this.size : this.size - 32;
			return b`
      <svg height=${size} width=${size}>
        ${QrCodeUtil.generate({
				uri: this.uri,
				size,
				logoSize: this.arenaClear ? 0 : size / 4,
				dotColor: this.color
			})}
      </svg>
    `;
		}
		templateVisual() {
			if (this.imageSrc) return T`<wui-image src=${this.imageSrc} alt=${this.alt ?? "logo"}></wui-image>`;
			if (this.farcaster) return T`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`;
			return T`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`;
		}
	};
	WuiQrCode.styles = [resetStyles, styles_default$25];
	__decorate$31([n$4()], WuiQrCode.prototype, "uri", void 0);
	__decorate$31([n$4({ type: Number })], WuiQrCode.prototype, "size", void 0);
	__decorate$31([n$4()], WuiQrCode.prototype, "theme", void 0);
	__decorate$31([n$4()], WuiQrCode.prototype, "imageSrc", void 0);
	__decorate$31([n$4()], WuiQrCode.prototype, "alt", void 0);
	__decorate$31([n$4()], WuiQrCode.prototype, "color", void 0);
	__decorate$31([n$4({ type: Boolean })], WuiQrCode.prototype, "arenaClear", void 0);
	__decorate$31([n$4({ type: Boolean })], WuiQrCode.prototype, "farcaster", void 0);
	WuiQrCode = __decorate$31([customElement("wui-qr-code")], WuiQrCode);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-qr-code.js
var init_wui_qr_code = __esmMin((() => {
	init_wui_qr_code$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/styles.js
var styles_default$24;
var init_styles$24 = __esmMin((() => {
	init_lit();
	styles_default$24 = i$4`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-shimmer/index.js
var __decorate$30, WuiShimmer;
var init_wui_shimmer$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_WebComponentsUtil();
	init_styles$24();
	__decorate$30 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiShimmer = class WuiShimmer extends i$3 {
		constructor() {
			super(...arguments);
			this.width = "";
			this.height = "";
			this.borderRadius = "m";
			this.variant = "default";
		}
		render() {
			this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `;
			return T`<slot></slot>`;
		}
	};
	WuiShimmer.styles = [styles_default$24];
	__decorate$30([n$4()], WuiShimmer.prototype, "width", void 0);
	__decorate$30([n$4()], WuiShimmer.prototype, "height", void 0);
	__decorate$30([n$4()], WuiShimmer.prototype, "borderRadius", void 0);
	__decorate$30([n$4()], WuiShimmer.prototype, "variant", void 0);
	WuiShimmer = __decorate$30([customElement("wui-shimmer")], WuiShimmer);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-shimmer.js
var init_wui_shimmer = __esmMin((() => {
	init_wui_shimmer$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/utils/ConstantsUtil.js
var REOWN_URL;
var init_ConstantsUtil = __esmMin((() => {
	REOWN_URL = "https://reown.com";
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ux-by-reown/styles.js
var styles_default$23;
var init_styles$23 = __esmMin((() => {
	init_lit();
	styles_default$23 = i$4`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-ux-by-reown/index.js
var __decorate$29, WuiUxByReown;
var init_wui_ux_by_reown$1 = __esmMin((() => {
	init_lit();
	init_wui_icon$1();
	init_wui_text$1();
	init_wui_flex$1();
	init_ConstantsUtil();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$23();
	__decorate$29 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiUxByReown = class WuiUxByReown extends i$3 {
		render() {
			return T`
      <a
        data-testid="ux-branding-reown"
        href=${REOWN_URL}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${[
				"0",
				"0",
				"l",
				"0"
			]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `;
		}
	};
	WuiUxByReown.styles = [
		resetStyles,
		elementStyles,
		styles_default$23
	];
	WuiUxByReown = __decorate$29([customElement("wui-ux-by-reown")], WuiUxByReown);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-ux-by-reown.js
var init_wui_ux_by_reown = __esmMin((() => {
	init_wui_ux_by_reown$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js
var styles_default$22;
var init_styles$22 = __esmMin((() => {
	init_lit();
	styles_default$22 = i$4`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var __decorate$28, W3mConnectingWcQrcode;
var init_w3m_connecting_wc_qrcode = __esmMin((() => {
	init_lit();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_icon();
	init_wui_link();
	init_wui_qr_code();
	init_wui_shimmer();
	init_wui_text();
	init_wui_ux_by_reown();
	init_w3m_connecting_widget();
	init_w3m_mobile_download_links();
	init_styles$22();
	__decorate$28 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcQrcode = class W3mConnectingWcQrcode extends W3mConnectingWidget {
		constructor() {
			super();
			this.forceUpdate = () => {
				this.requestUpdate();
			};
			window.addEventListener("resize", this.forceUpdate);
			EventsController.sendEvent({
				type: "track",
				event: "SELECT_WALLET",
				properties: {
					name: this.wallet?.name ?? "WalletConnect",
					platform: "qrcode"
				}
			});
		}
		disconnectedCallback() {
			super.disconnectedCallback();
			this.unsubscribe?.forEach((unsub) => unsub());
			window.removeEventListener("resize", this.forceUpdate);
		}
		render() {
			this.onRenderProxy();
			return T`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
				"0",
				"xl",
				"xl",
				"xl"
			]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
		}
		onRenderProxy() {
			if (!this.ready && this.uri) this.timeout = setTimeout(() => {
				this.ready = true;
			}, 200);
		}
		qrCodeTemplate() {
			if (!this.uri || !this.ready) return null;
			const size = this.getBoundingClientRect().width - 40;
			const alt = this.wallet ? this.wallet.name : void 0;
			ConnectionController.setWcLinking(void 0);
			ConnectionController.setRecentWallet(this.wallet);
			return T` <wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${o$2(AssetUtil.getWalletImage(this.wallet))}
      color=${o$2(ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${o$2(alt)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`;
		}
		copyTemplate() {
			const inactive = !this.uri || !this.ready;
			return T`<wui-link
      .disabled=${inactive}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`;
		}
	};
	W3mConnectingWcQrcode.styles = styles_default$22;
	W3mConnectingWcQrcode = __decorate$28([customElement("w3m-connecting-wc-qrcode")], W3mConnectingWcQrcode);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var __decorate$27, W3mConnectingWcUnsupported;
var init_w3m_connecting_wc_unsupported = __esmMin((() => {
	init_lit();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_text();
	init_wui_wallet_image();
	init_w3m_mobile_download_links();
	__decorate$27 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported extends i$3 {
		constructor() {
			super();
			this.wallet = RouterController.state.data?.wallet;
			if (!this.wallet) throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
			EventsController.sendEvent({
				type: "track",
				event: "SELECT_WALLET",
				properties: {
					name: this.wallet.name,
					platform: "browser"
				}
			});
		}
		render() {
			return T`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[
				"3xl",
				"xl",
				"xl",
				"xl"
			]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${o$2(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
		}
	};
	W3mConnectingWcUnsupported = __decorate$27([customElement("w3m-connecting-wc-unsupported")], W3mConnectingWcUnsupported);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var __decorate$26, W3mConnectingWcWeb;
var init_w3m_connecting_wc_web = __esmMin((() => {
	init_decorators();
	init_exports();
	init_exports$1();
	init_w3m_connecting_widget();
	__decorate$26 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcWeb = class W3mConnectingWcWeb extends W3mConnectingWidget {
		constructor() {
			super();
			this.isLoading = true;
			if (!this.wallet) throw new Error("w3m-connecting-wc-web: No wallet provided");
			this.onConnect = this.onConnectProxy.bind(this);
			this.secondaryBtnLabel = "Open";
			this.secondaryLabel = ConstantsUtil$1.CONNECT_LABELS.MOBILE;
			this.secondaryBtnIcon = "externalLink";
			this.updateLoadingState();
			this.unsubscribe.push(ConnectionController.subscribeKey("wcUri", () => {
				this.updateLoadingState();
			}));
			EventsController.sendEvent({
				type: "track",
				event: "SELECT_WALLET",
				properties: {
					name: this.wallet.name,
					platform: "web"
				}
			});
		}
		updateLoadingState() {
			this.isLoading = !this.uri;
		}
		onConnectProxy() {
			if (this.wallet?.webapp_link && this.uri) try {
				this.error = false;
				const { webapp_link, name } = this.wallet;
				const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
				ConnectionController.setWcLinking({
					name,
					href
				});
				ConnectionController.setRecentWallet(this.wallet);
				CoreHelperUtil.openHref(redirect, "_blank");
			} catch {
				this.error = true;
			}
		}
	};
	__decorate$26([r$2()], W3mConnectingWcWeb.prototype, "isLoading", void 0);
	W3mConnectingWcWeb = __decorate$26([customElement("w3m-connecting-wc-web")], W3mConnectingWcWeb);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-view/index.js
var __decorate$25, W3mConnectingWcView;
var init_w3m_connecting_wc_view = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_w3m_connecting_header();
	init_w3m_connecting_wc_browser();
	init_w3m_connecting_wc_desktop();
	init_w3m_connecting_wc_mobile();
	init_w3m_connecting_wc_qrcode();
	init_w3m_connecting_wc_unsupported();
	init_w3m_connecting_wc_web();
	__decorate$25 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcView = class W3mConnectingWcView extends i$3 {
		constructor() {
			super();
			this.wallet = RouterController.state.data?.wallet;
			this.unsubscribe = [];
			this.platform = void 0;
			this.platforms = [];
			this.isSiwxEnabled = Boolean(OptionsController.state.siwx);
			this.remoteFeatures = OptionsController.state.remoteFeatures;
			this.determinePlatforms();
			this.initializeConnection();
			this.unsubscribe.push(OptionsController.subscribeKey("remoteFeatures", (val) => this.remoteFeatures = val));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			return T`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `;
		}
		reownBrandingTemplate() {
			if (!this.remoteFeatures?.reownBranding) return null;
			return T`<wui-ux-by-reown></wui-ux-by-reown>`;
		}
		async initializeConnection(retry = false) {
			if (this.platform === "browser" || OptionsController.state.manualWCControl && !retry) return;
			try {
				const { wcPairingExpiry, status } = ConnectionController.state;
				if (retry || OptionsController.state.enableEmbedded || CoreHelperUtil.isPairingExpired(wcPairingExpiry) || status === "connecting") {
					await ConnectionController.connectWalletConnect();
					if (!this.isSiwxEnabled) ModalController.close();
				}
			} catch (error) {
				EventsController.sendEvent({
					type: "track",
					event: "CONNECT_ERROR",
					properties: { message: error?.message ?? "Unknown" }
				});
				ConnectionController.setWcError(true);
				SnackController.showError(error.message ?? "Connection error");
				ConnectionController.resetWcConnection();
				RouterController.goBack();
			}
		}
		determinePlatforms() {
			if (!this.wallet) {
				this.platforms.push("qrcode");
				this.platform = "qrcode";
				return;
			}
			if (this.platform) return;
			const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
			const injectedIds = injected?.map(({ injected_id }) => injected_id).filter(Boolean);
			const browserIds = [...rdns ? [rdns] : injectedIds ?? []];
			const isBrowser = OptionsController.state.isUniversalProvider ? false : browserIds.length;
			const hasMobileWCLink = mobile_link;
			const isWebWc = webapp_link;
			const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
			const isBrowserWc = isBrowser && isBrowserInstalled;
			const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
			if (isBrowserWc && !ChainController.state.noAdapters) this.platforms.push("browser");
			if (hasMobileWCLink) this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
			if (isWebWc) this.platforms.push("web");
			if (isDesktopWc) this.platforms.push("desktop");
			if (!isBrowserWc && isBrowser && !ChainController.state.noAdapters) this.platforms.push("unsupported");
			this.platform = this.platforms[0];
		}
		platformTemplate() {
			switch (this.platform) {
				case "browser": return T`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
				case "web": return T`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;
				case "desktop": return T`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
				case "mobile": return T`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
				case "qrcode": return T`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
				default: return T`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
			}
		}
		headerTemplate() {
			if (!(this.platforms.length > 1)) return null;
			return T`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
		}
		async onSelectPlatform(platform) {
			const container = this.shadowRoot?.querySelector("div");
			if (container) {
				await container.animate([{ opacity: 1 }, { opacity: 0 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				}).finished;
				this.platform = platform;
				container.animate([{ opacity: 0 }, { opacity: 1 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				});
			}
		}
	};
	__decorate$25([r$2()], W3mConnectingWcView.prototype, "platform", void 0);
	__decorate$25([r$2()], W3mConnectingWcView.prototype, "platforms", void 0);
	__decorate$25([r$2()], W3mConnectingWcView.prototype, "isSiwxEnabled", void 0);
	__decorate$25([r$2()], W3mConnectingWcView.prototype, "remoteFeatures", void 0);
	W3mConnectingWcView = __decorate$25([customElement("w3m-connecting-wc-view")], W3mConnectingWcView);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-connecting-wc-basic-view/index.js
var __decorate$24, W3mConnectingWcBasicView;
var init_w3m_connecting_wc_basic_view = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_w3m_all_wallets_widget();
	init_w3m_connector_list();
	init_w3m_connecting_wc_view();
	__decorate$24 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mConnectingWcBasicView = class W3mConnectingWcBasicView extends i$3 {
		constructor() {
			super(...arguments);
			this.isMobile = CoreHelperUtil.isMobile();
		}
		render() {
			if (this.isMobile) {
				const { featured, recommended } = ApiController.state;
				const { customWallets } = OptionsController.state;
				const recent = StorageUtil.getRecentWallets();
				const showConnectors = featured.length || recommended.length || customWallets?.length || recent.length;
				return T`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${[
					"3xs",
					"s",
					"s",
					"s"
				]}
      >
        ${showConnectors ? T`<w3m-connector-list></w3m-connector-list>` : null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`;
			}
			return T`<wui-flex flexDirection="column" .padding=${[
				"0",
				"0",
				"l",
				"0"
			]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${[
				"0",
				"m",
				"0",
				"m"
			]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`;
		}
	};
	__decorate$24([r$2()], W3mConnectingWcBasicView.prototype, "isMobile", void 0);
	W3mConnectingWcBasicView = __decorate$24([customElement("w3m-connecting-wc-basic-view")], W3mConnectingWcBasicView);
}));
//#endregion
//#region node_modules/lit-html/node/directives/ref.js
var e, h, o, n;
var init_ref$1 = __esmMin((() => {
	init_lit_html();
	init_async_directive();
	init_directive();
	e = () => new h();
	h = class {};
	o = /* @__PURE__ */ new WeakMap();
	n = e$2(class extends f {
		render(i) {
			/**
			* @license
			* Copyright 2020 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			return A;
		}
		update(i, [s]) {
			const e = s !== this.G;
			return e && this.rt(void 0), (e || this.lt !== this.ct) && (this.G = s, this.ht = i.options?.host, this.rt(this.ct = i.element)), A;
		}
		rt(t) {
			if (void 0 !== this.G) if (this.isConnected || (t = void 0), "function" == typeof this.G) {
				const i = this.ht ?? globalThis;
				let s = o.get(i);
				void 0 === s && (s = /* @__PURE__ */ new WeakMap(), o.set(i, s)), void 0 !== s.get(this.G) && this.G.call(this.ht, void 0), s.set(this.G, t), void 0 !== t && this.G.call(this.ht, t);
			} else this.G.value = t;
		}
		get lt() {
			return "function" == typeof this.G ? o.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
		}
		disconnected() {
			this.lt === this.ct && this.rt(void 0);
		}
		reconnected() {
			this.rt(this.ct);
		}
	});
}));
//#endregion
//#region node_modules/lit/directives/ref.js
var init_ref = __esmMin((() => {
	init_ref$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-switch/styles.js
var styles_default$21;
var init_styles$21 = __esmMin((() => {
	init_lit();
	styles_default$21 = i$4`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-switch/index.js
var __decorate$23, WuiSwitch;
var init_wui_switch = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_ref();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$21();
	__decorate$23 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiSwitch = class WuiSwitch extends i$3 {
		constructor() {
			super(...arguments);
			this.inputElementRef = e();
			this.checked = void 0;
		}
		render() {
			return T`
      <label>
        <input
          ${n(this.inputElementRef)}
          type="checkbox"
          ?checked=${o$2(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `;
		}
		dispatchChangeEvent() {
			this.dispatchEvent(new CustomEvent("switchChange", {
				detail: this.inputElementRef.value?.checked,
				bubbles: true,
				composed: true
			}));
		}
	};
	WuiSwitch.styles = [
		resetStyles,
		elementStyles,
		colorStyles,
		styles_default$21
	];
	__decorate$23([n$4({ type: Boolean })], WuiSwitch.prototype, "checked", void 0);
	WuiSwitch = __decorate$23([customElement("wui-switch")], WuiSwitch);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/styles.js
var styles_default$20;
var init_styles$20 = __esmMin((() => {
	init_lit();
	styles_default$20 = i$4`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-certified-switch/index.js
var __decorate$22, WuiCertifiedSwitch;
var init_wui_certified_switch$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_wui_icon$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_switch();
	init_styles$20();
	__decorate$22 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiCertifiedSwitch = class WuiCertifiedSwitch extends i$3 {
		constructor() {
			super(...arguments);
			this.checked = void 0;
		}
		render() {
			return T`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${o$2(this.checked)}></wui-switch>
      </button>
    `;
		}
	};
	WuiCertifiedSwitch.styles = [
		resetStyles,
		elementStyles,
		styles_default$20
	];
	__decorate$22([n$4({ type: Boolean })], WuiCertifiedSwitch.prototype, "checked", void 0);
	WuiCertifiedSwitch = __decorate$22([customElement("wui-certified-switch")], WuiCertifiedSwitch);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-certified-switch.js
var init_wui_certified_switch = __esmMin((() => {
	init_wui_certified_switch$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-element/styles.js
var styles_default$19;
var init_styles$19 = __esmMin((() => {
	init_lit();
	styles_default$19 = i$4`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-element/index.js
var __decorate$21, WuiInputElement;
var init_wui_input_element = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$19();
	__decorate$21 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiInputElement = class WuiInputElement extends i$3 {
		constructor() {
			super(...arguments);
			this.icon = "copy";
		}
		render() {
			return T`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `;
		}
	};
	WuiInputElement.styles = [
		resetStyles,
		elementStyles,
		styles_default$19
	];
	__decorate$21([n$4()], WuiInputElement.prototype, "icon", void 0);
	WuiInputElement = __decorate$21([customElement("wui-input-element")], WuiInputElement);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/styles.js
var styles_default$18;
var init_styles$18 = __esmMin((() => {
	init_lit();
	styles_default$18 = i$4`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-input-text/index.js
var __decorate$20, WuiInputText;
var init_wui_input_text = __esmMin((() => {
	init_lit();
	init_decorators();
	init_class_map();
	init_if_defined();
	init_ref();
	init_wui_icon$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$18();
	__decorate$20 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiInputText = class WuiInputText extends i$3 {
		constructor() {
			super(...arguments);
			this.inputElementRef = e();
			this.size = "md";
			this.disabled = false;
			this.placeholder = "";
			this.type = "text";
			this.value = "";
		}
		render() {
			const inputClass = `wui-padding-right-${this.inputRightPadding}`;
			const classes = {
				[`wui-size-${this.size}`]: true,
				[inputClass]: Boolean(this.inputRightPadding)
			};
			return T`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${n(this.inputElementRef)}
        class=${e$1(classes)}
        type=${this.type}
        enterkeyhint=${o$2(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value || ""}
        tabindex=${o$2(this.tabIdx)}
      />
      <slot></slot>`;
		}
		templateIcon() {
			if (this.icon) return T`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`;
			return null;
		}
		dispatchInputChangeEvent() {
			this.dispatchEvent(new CustomEvent("inputChange", {
				detail: this.inputElementRef.value?.value,
				bubbles: true,
				composed: true
			}));
		}
	};
	WuiInputText.styles = [
		resetStyles,
		elementStyles,
		styles_default$18
	];
	__decorate$20([n$4()], WuiInputText.prototype, "size", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "icon", void 0);
	__decorate$20([n$4({ type: Boolean })], WuiInputText.prototype, "disabled", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "placeholder", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "type", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "keyHint", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "value", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "inputRightPadding", void 0);
	__decorate$20([n$4()], WuiInputText.prototype, "tabIdx", void 0);
	WuiInputText = __decorate$20([customElement("wui-input-text")], WuiInputText);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/styles.js
var styles_default$17;
var init_styles$17 = __esmMin((() => {
	init_lit();
	styles_default$17 = i$4`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-search-bar/index.js
var __decorate$19, WuiSearchBar;
var init_wui_search_bar$1 = __esmMin((() => {
	init_lit();
	init_ref();
	init_wui_input_element();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_input_text();
	init_styles$17();
	__decorate$19 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiSearchBar = class WuiSearchBar extends i$3 {
		constructor() {
			super(...arguments);
			this.inputComponentRef = e();
		}
		render() {
			return T`
      <wui-input-text
        ${n(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `;
		}
		clearValue() {
			const inputElement = this.inputComponentRef.value?.inputElementRef.value;
			if (inputElement) {
				inputElement.value = "";
				inputElement.focus();
				inputElement.dispatchEvent(new Event("input"));
			}
		}
	};
	WuiSearchBar.styles = [resetStyles, styles_default$17];
	WuiSearchBar = __decorate$19([customElement("wui-search-bar")], WuiSearchBar);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-search-bar.js
var init_wui_search_bar = __esmMin((() => {
	init_wui_search_bar$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/assets/svg/networkMd.js
var networkSvgMd;
var init_networkMd = __esmMin((() => {
	init_lit();
	networkSvgMd = b`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/styles.js
var styles_default$16;
var init_styles$16 = __esmMin((() => {
	init_lit();
	styles_default$16 = i$4`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-card-select-loader/index.js
var __decorate$18, WuiCardSelectLoader;
var init_wui_card_select_loader$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_networkMd();
	init_wui_shimmer$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$16();
	__decorate$18 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiCardSelectLoader = class WuiCardSelectLoader extends i$3 {
		constructor() {
			super(...arguments);
			this.type = "wallet";
		}
		render() {
			return T`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `;
		}
		shimmerTemplate() {
			if (this.type === "network") return T` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${networkSvgMd}`;
			return T`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
		}
	};
	WuiCardSelectLoader.styles = [
		resetStyles,
		elementStyles,
		styles_default$16
	];
	__decorate$18([n$4()], WuiCardSelectLoader.prototype, "type", void 0);
	WuiCardSelectLoader = __decorate$18([customElement("wui-card-select-loader")], WuiCardSelectLoader);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-card-select-loader.js
var init_wui_card_select_loader = __esmMin((() => {
	init_wui_card_select_loader$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/styles.js
var styles_default$15;
var init_styles$15 = __esmMin((() => {
	init_lit();
	styles_default$15 = i$4`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/layout/wui-grid/index.js
var __decorate$17, WuiGrid;
var init_wui_grid$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_ThemeUtil();
	init_UiHelperUtil();
	init_WebComponentsUtil();
	init_styles$15();
	__decorate$17 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiGrid = class WuiGrid extends i$3 {
		render() {
			this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
			return T`<slot></slot>`;
		}
	};
	WuiGrid.styles = [resetStyles, styles_default$15];
	__decorate$17([n$4()], WuiGrid.prototype, "gridTemplateRows", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "gridTemplateColumns", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "justifyItems", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "alignItems", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "justifyContent", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "alignContent", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "columnGap", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "rowGap", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "gap", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "padding", void 0);
	__decorate$17([n$4()], WuiGrid.prototype, "margin", void 0);
	WuiGrid = __decorate$17([customElement("wui-grid")], WuiGrid);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-grid.js
var init_wui_grid = __esmMin((() => {
	init_wui_grid$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/styles.js
var styles_default$14;
var init_styles$14 = __esmMin((() => {
	init_lit();
	styles_default$14 = i$4`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list-item/index.js
var __decorate$16, W3mAllWalletsListItem;
var init_w3m_all_wallets_list_item = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_icon();
	init_wui_shimmer();
	init_wui_text();
	init_wui_wallet_image();
	init_styles$14();
	__decorate$16 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mAllWalletsListItem = class W3mAllWalletsListItem extends i$3 {
		constructor() {
			super();
			this.observer = new IntersectionObserver(() => void 0);
			this.visible = false;
			this.imageSrc = void 0;
			this.imageLoading = false;
			this.wallet = void 0;
			this.observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						this.visible = true;
						this.fetchImageSrc();
					} else this.visible = false;
				});
			}, { threshold: .01 });
		}
		firstUpdated() {
			this.observer.observe(this);
		}
		disconnectedCallback() {
			this.observer.disconnect();
		}
		render() {
			const certified = this.wallet?.badge_type === "certified";
			return T`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${o$2(certified ? "certified" : void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${certified ? T`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>` : null}
        </wui-flex>
      </button>
    `;
		}
		imageTemplate() {
			if (!this.visible && !this.imageSrc || this.imageLoading) return this.shimmerTemplate();
			return T`
      <wui-wallet-image
        size="md"
        imageSrc=${o$2(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `;
		}
		shimmerTemplate() {
			return T`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`;
		}
		async fetchImageSrc() {
			if (!this.wallet) return;
			this.imageSrc = AssetUtil.getWalletImage(this.wallet);
			if (this.imageSrc) return;
			this.imageLoading = true;
			this.imageSrc = await AssetUtil.fetchWalletImage(this.wallet.image_id);
			this.imageLoading = false;
		}
	};
	W3mAllWalletsListItem.styles = styles_default$14;
	__decorate$16([r$2()], W3mAllWalletsListItem.prototype, "visible", void 0);
	__decorate$16([r$2()], W3mAllWalletsListItem.prototype, "imageSrc", void 0);
	__decorate$16([r$2()], W3mAllWalletsListItem.prototype, "imageLoading", void 0);
	__decorate$16([n$4()], W3mAllWalletsListItem.prototype, "wallet", void 0);
	W3mAllWalletsListItem = __decorate$16([customElement("w3m-all-wallets-list-item")], W3mAllWalletsListItem);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/styles.js
var styles_default$13;
var init_styles$13 = __esmMin((() => {
	init_lit();
	styles_default$13 = i$4`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-list/index.js
var __decorate$15, PAGINATOR_ID, W3mAllWalletsList;
var init_w3m_all_wallets_list = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_card_select_loader();
	init_wui_grid();
	init_WalletUtil();
	init_w3m_all_wallets_list_item();
	init_styles$13();
	__decorate$15 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	PAGINATOR_ID = "local-paginator";
	W3mAllWalletsList = class W3mAllWalletsList extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.paginationObserver = void 0;
			this.loading = !ApiController.state.wallets.length;
			this.wallets = ApiController.state.wallets;
			this.recommended = ApiController.state.recommended;
			this.featured = ApiController.state.featured;
			this.filteredWallets = ApiController.state.filteredWallets;
			this.unsubscribe.push(...[
				ApiController.subscribeKey("wallets", (val) => this.wallets = val),
				ApiController.subscribeKey("recommended", (val) => this.recommended = val),
				ApiController.subscribeKey("featured", (val) => this.featured = val),
				ApiController.subscribeKey("filteredWallets", (val) => this.filteredWallets = val)
			]);
		}
		firstUpdated() {
			this.initialFetch();
			this.createPaginationObserver();
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
			this.paginationObserver?.disconnect();
		}
		render() {
			return T`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${[
				"0",
				"s",
				"s",
				"s"
			]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
		}
		async initialFetch() {
			this.loading = true;
			const gridEl = this.shadowRoot?.querySelector("wui-grid");
			if (gridEl) {
				await ApiController.fetchWalletsByPage({ page: 1 });
				await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				}).finished;
				this.loading = false;
				gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				});
			}
		}
		shimmerTemplate(items, id) {
			return [...Array(items)].map(() => T`
        <wui-card-select-loader type="wallet" id=${o$2(id)}></wui-card-select-loader>
      `);
		}
		walletsTemplate() {
			const wallets = this.filteredWallets?.length > 0 ? CoreHelperUtil.uniqueBy([
				...this.featured,
				...this.recommended,
				...this.filteredWallets
			], "id") : CoreHelperUtil.uniqueBy([
				...this.featured,
				...this.recommended,
				...this.wallets
			], "id");
			return WalletUtil.markWalletsAsInstalled(wallets).map((wallet) => T`
        <w3m-all-wallets-list-item
          @click=${() => this.onConnectWallet(wallet)}
          .wallet=${wallet}
        ></w3m-all-wallets-list-item>
      `);
		}
		paginationLoaderTemplate() {
			const { wallets, recommended, featured, count } = ApiController.state;
			const columns = window.innerWidth < 352 ? 3 : 4;
			const currentWallets = wallets.length + recommended.length;
			let shimmerCount = Math.ceil(currentWallets / columns) * columns - currentWallets + columns;
			shimmerCount -= wallets.length ? featured.length % columns : 0;
			if (count === 0 && featured.length > 0) return null;
			if (count === 0 || [
				...featured,
				...wallets,
				...recommended
			].length < count) return this.shimmerTemplate(shimmerCount, PAGINATOR_ID);
			return null;
		}
		createPaginationObserver() {
			const loaderEl = this.shadowRoot?.querySelector(`#${PAGINATOR_ID}`);
			if (loaderEl) {
				this.paginationObserver = new IntersectionObserver(([element]) => {
					if (element?.isIntersecting && !this.loading) {
						const { page, count, wallets } = ApiController.state;
						if (wallets.length < count) ApiController.fetchWalletsByPage({ page: page + 1 });
					}
				});
				this.paginationObserver.observe(loaderEl);
			}
		}
		onConnectWallet(wallet) {
			ConnectorController.selectWalletConnector(wallet);
		}
	};
	W3mAllWalletsList.styles = styles_default$13;
	__decorate$15([r$2()], W3mAllWalletsList.prototype, "loading", void 0);
	__decorate$15([r$2()], W3mAllWalletsList.prototype, "wallets", void 0);
	__decorate$15([r$2()], W3mAllWalletsList.prototype, "recommended", void 0);
	__decorate$15([r$2()], W3mAllWalletsList.prototype, "featured", void 0);
	__decorate$15([r$2()], W3mAllWalletsList.prototype, "filteredWallets", void 0);
	W3mAllWalletsList = __decorate$15([customElement("w3m-all-wallets-list")], W3mAllWalletsList);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-loading-spinner.js
var init_wui_loading_spinner = __esmMin((() => {
	init_wui_loading_spinner$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/styles.js
var styles_default$12;
var init_styles$12 = __esmMin((() => {
	init_lit();
	styles_default$12 = i$4`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-all-wallets-search/index.js
var __decorate$14, W3mAllWalletsSearch;
var init_w3m_all_wallets_search = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_grid();
	init_wui_icon_box();
	init_wui_loading_spinner();
	init_wui_text();
	init_WalletUtil();
	init_w3m_all_wallets_list_item();
	init_styles$12();
	__decorate$14 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mAllWalletsSearch = class W3mAllWalletsSearch extends i$3 {
		constructor() {
			super(...arguments);
			this.prevQuery = "";
			this.prevBadge = void 0;
			this.loading = true;
			this.query = "";
		}
		render() {
			this.onSearch();
			return this.loading ? T`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
		}
		async onSearch() {
			if (this.query.trim() !== this.prevQuery.trim() || this.badge !== this.prevBadge) {
				this.prevQuery = this.query;
				this.prevBadge = this.badge;
				this.loading = true;
				await ApiController.searchWallet({
					search: this.query,
					badge: this.badge
				});
				this.loading = false;
			}
		}
		walletsTemplate() {
			const { search } = ApiController.state;
			const wallets = WalletUtil.markWalletsAsInstalled(search);
			if (!search.length) return T`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `;
			return T`
      <wui-grid
        data-testid="wallet-list"
        .padding=${[
				"0",
				"s",
				"s",
				"s"
			]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${wallets.map((wallet) => T`
            <w3m-all-wallets-list-item
              @click=${() => this.onConnectWallet(wallet)}
              .wallet=${wallet}
              data-testid="wallet-search-item-${wallet.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `;
		}
		onConnectWallet(wallet) {
			ConnectorController.selectWalletConnector(wallet);
		}
	};
	W3mAllWalletsSearch.styles = styles_default$12;
	__decorate$14([r$2()], W3mAllWalletsSearch.prototype, "loading", void 0);
	__decorate$14([n$4()], W3mAllWalletsSearch.prototype, "query", void 0);
	__decorate$14([n$4()], W3mAllWalletsSearch.prototype, "badge", void 0);
	W3mAllWalletsSearch = __decorate$14([customElement("w3m-all-wallets-search")], W3mAllWalletsSearch);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-all-wallets-view/index.js
var __decorate$13, W3mAllWalletsView;
var init_w3m_all_wallets_view = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_certified_switch();
	init_wui_flex();
	init_wui_icon_box();
	init_wui_search_bar();
	init_w3m_all_wallets_list();
	init_w3m_all_wallets_search();
	__decorate$13 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mAllWalletsView = class W3mAllWalletsView extends i$3 {
		constructor() {
			super(...arguments);
			this.search = "";
			this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
				this.search = value;
			});
		}
		render() {
			const isSearch = this.search.length >= 2;
			return T`
      <wui-flex .padding=${[
				"0",
				"s",
				"s",
				"s"
			]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch || this.badge ? T`<w3m-all-wallets-search
            query=${this.search}
            badge=${o$2(this.badge)}
          ></w3m-all-wallets-search>` : T`<w3m-all-wallets-list badge=${o$2(this.badge)}></w3m-all-wallets-list>`}
    `;
		}
		onInputChange(event) {
			this.onDebouncedSearch(event.detail);
		}
		onClick() {
			if (this.badge === "certified") {
				this.badge = void 0;
				return;
			}
			this.badge = "certified";
			SnackController.showSvg("Only WalletConnect certified", {
				icon: "walletConnectBrown",
				iconColor: "accent-100"
			});
		}
		qrButtonTemplate() {
			if (CoreHelperUtil.isMobile()) return T`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
			return null;
		}
		onWalletConnectQr() {
			RouterController.push("ConnectingWalletConnect");
		}
	};
	__decorate$13([r$2()], W3mAllWalletsView.prototype, "search", void 0);
	__decorate$13([r$2()], W3mAllWalletsView.prototype, "badge", void 0);
	W3mAllWalletsView = __decorate$13([customElement("w3m-all-wallets-view")], W3mAllWalletsView);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/styles.js
var styles_default$11;
var init_styles$11 = __esmMin((() => {
	init_lit();
	styles_default$11 = i$4`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-list-item/index.js
var __decorate$12, WuiListItem;
var init_wui_list_item$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_wui_icon$1();
	init_wui_image();
	init_wui_loading_spinner$1();
	init_wui_text$1();
	init_wui_flex$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_icon_box$1();
	init_styles$11();
	__decorate$12 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiListItem = class WuiListItem extends i$3 {
		constructor() {
			super(...arguments);
			this.tabIdx = void 0;
			this.variant = "icon";
			this.disabled = false;
			this.imageSrc = void 0;
			this.alt = void 0;
			this.chevron = false;
			this.loading = false;
		}
		render() {
			return T`
      <button
        ?disabled=${this.loading ? true : Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${o$2(this.iconVariant)}
        tabindex=${o$2(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `;
		}
		visualTemplate() {
			if (this.variant === "image" && this.imageSrc) return T`<wui-image src=${this.imageSrc} alt=${this.alt ?? "list item"}></wui-image>`;
			if (this.iconVariant === "square" && this.icon && this.variant === "icon") return T`<wui-icon name=${this.icon}></wui-icon>`;
			if (this.variant === "icon" && this.icon && this.iconVariant) {
				const color = ["blue", "square-blue"].includes(this.iconVariant) ? "accent-100" : "fg-200";
				const size = this.iconVariant === "square-blue" ? "mdl" : "md";
				const iconSize = this.iconSize ? this.iconSize : size;
				return T`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${iconSize}
          background="transparent"
          iconColor=${color}
          backgroundColor=${color}
          size=${size}
        ></wui-icon-box>
      `;
			}
			return null;
		}
		loadingTemplate() {
			if (this.loading) return T`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`;
			return T``;
		}
		chevronTemplate() {
			if (this.chevron) return T`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`;
			return null;
		}
	};
	WuiListItem.styles = [
		resetStyles,
		elementStyles,
		styles_default$11
	];
	__decorate$12([n$4()], WuiListItem.prototype, "icon", void 0);
	__decorate$12([n$4()], WuiListItem.prototype, "iconSize", void 0);
	__decorate$12([n$4()], WuiListItem.prototype, "tabIdx", void 0);
	__decorate$12([n$4()], WuiListItem.prototype, "variant", void 0);
	__decorate$12([n$4()], WuiListItem.prototype, "iconVariant", void 0);
	__decorate$12([n$4({ type: Boolean })], WuiListItem.prototype, "disabled", void 0);
	__decorate$12([n$4()], WuiListItem.prototype, "imageSrc", void 0);
	__decorate$12([n$4()], WuiListItem.prototype, "alt", void 0);
	__decorate$12([n$4({ type: Boolean })], WuiListItem.prototype, "chevron", void 0);
	__decorate$12([n$4({ type: Boolean })], WuiListItem.prototype, "loading", void 0);
	WuiListItem = __decorate$12([customElement("wui-list-item")], WuiListItem);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-list-item.js
var init_wui_list_item = __esmMin((() => {
	init_wui_list_item$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/views/w3m-downloads-view/index.js
var __decorate$11, W3mDownloadsView;
var init_w3m_downloads_view = __esmMin((() => {
	init_lit();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_list_item();
	init_wui_text();
	__decorate$11 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mDownloadsView = class W3mDownloadsView extends i$3 {
		constructor() {
			super(...arguments);
			this.wallet = RouterController.state.data?.wallet;
		}
		render() {
			if (!this.wallet) throw new Error("w3m-downloads-view");
			return T`
      <wui-flex gap="xs" flexDirection="column" .padding=${[
				"s",
				"s",
				"l",
				"s"
			]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
		}
		chromeTemplate() {
			if (!this.wallet?.chrome_store) return null;
			return T`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`;
		}
		iosTemplate() {
			if (!this.wallet?.app_store) return null;
			return T`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`;
		}
		androidTemplate() {
			if (!this.wallet?.play_store) return null;
			return T`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`;
		}
		homepageTemplate() {
			if (!this.wallet?.homepage) return null;
			return T`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `;
		}
		onChromeStore() {
			if (this.wallet?.chrome_store) CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
		}
		onAppStore() {
			if (this.wallet?.app_store) CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
		}
		onPlayStore() {
			if (this.wallet?.play_store) CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
		}
		onHomePage() {
			if (this.wallet?.homepage) CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
		}
	};
	W3mDownloadsView = __decorate$11([customElement("w3m-downloads-view")], W3mDownloadsView);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/basic.js
var basic_exports = /* @__PURE__ */ __exportAll({
	W3mAllWalletsView: () => W3mAllWalletsView,
	W3mConnectingWcBasicView: () => W3mConnectingWcBasicView,
	W3mDownloadsView: () => W3mDownloadsView
});
var init_basic = __esmMin((() => {
	init_w3m_connecting_wc_basic_view();
	init_w3m_all_wallets_view();
	init_w3m_downloads_view();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/styles.js
var styles_default$10;
var init_styles$10 = __esmMin((() => {
	init_lit();
	styles_default$10 = i$4`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/components/wui-card/index.js
var __decorate$10, WuiCard;
var init_wui_card$1 = __esmMin((() => {
	init_lit();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$10();
	__decorate$10 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiCard = class WuiCard extends i$3 {
		render() {
			return T`<slot></slot>`;
		}
	};
	WuiCard.styles = [resetStyles, styles_default$10];
	WuiCard = __decorate$10([customElement("wui-card")], WuiCard);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-card.js
var init_wui_card = __esmMin((() => {
	init_wui_card$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/styles.js
var styles_default$9;
var init_styles$9 = __esmMin((() => {
	init_lit();
	styles_default$9 = i$4`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-alertbar/index.js
var __decorate$9, WuiAlertBar;
var init_wui_alertbar$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_wui_icon$1();
	init_wui_text$1();
	init_wui_flex$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$9();
	__decorate$9 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiAlertBar = class WuiAlertBar extends i$3 {
		constructor() {
			super(...arguments);
			this.message = "";
			this.backgroundColor = "accent-100";
			this.iconColor = "accent-100";
			this.icon = "info";
		}
		render() {
			this.style.cssText = `
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `;
			return T`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `;
		}
		onClose() {
			AlertController.close();
		}
	};
	WuiAlertBar.styles = [resetStyles, styles_default$9];
	__decorate$9([n$4()], WuiAlertBar.prototype, "message", void 0);
	__decorate$9([n$4()], WuiAlertBar.prototype, "backgroundColor", void 0);
	__decorate$9([n$4()], WuiAlertBar.prototype, "iconColor", void 0);
	__decorate$9([n$4()], WuiAlertBar.prototype, "icon", void 0);
	WuiAlertBar = __decorate$9([customElement("wui-alertbar")], WuiAlertBar);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-alertbar.js
var init_wui_alertbar = __esmMin((() => {
	init_wui_alertbar$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/styles.js
var styles_default$8;
var init_styles$8 = __esmMin((() => {
	init_lit();
	styles_default$8 = i$4`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-alertbar/index.js
var __decorate$8, presets$1, W3mAlertBar;
var init_w3m_alertbar = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_wui_alertbar();
	init_styles$8();
	__decorate$8 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	presets$1 = {
		info: {
			backgroundColor: "fg-350",
			iconColor: "fg-325",
			icon: "info"
		},
		success: {
			backgroundColor: "success-glass-reown-020",
			iconColor: "success-125",
			icon: "checkmark"
		},
		warning: {
			backgroundColor: "warning-glass-reown-020",
			iconColor: "warning-100",
			icon: "warningCircle"
		},
		error: {
			backgroundColor: "error-glass-reown-020",
			iconColor: "error-125",
			icon: "exclamationTriangle"
		}
	};
	W3mAlertBar = class W3mAlertBar extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.open = AlertController.state.open;
			this.onOpen(true);
			this.unsubscribe.push(AlertController.subscribeKey("open", (val) => {
				this.open = val;
				this.onOpen(false);
			}));
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const { message, variant } = AlertController.state;
			const preset = presets$1[variant];
			return T`
      <wui-alertbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${preset?.iconColor}
        icon=${preset?.icon}
      ></wui-alertbar>
    `;
		}
		onOpen(isMounted) {
			if (this.open) {
				this.animate([{
					opacity: 0,
					transform: "scale(0.85)"
				}, {
					opacity: 1,
					transform: "scale(1)"
				}], {
					duration: 150,
					fill: "forwards",
					easing: "ease"
				});
				this.style.cssText = `pointer-events: auto`;
			} else if (!isMounted) {
				this.animate([{
					opacity: 1,
					transform: "scale(1)"
				}, {
					opacity: 0,
					transform: "scale(0.85)"
				}], {
					duration: 150,
					fill: "forwards",
					easing: "ease"
				});
				this.style.cssText = `pointer-events: none`;
			}
		}
	};
	W3mAlertBar.styles = styles_default$8;
	__decorate$8([r$2()], W3mAlertBar.prototype, "open", void 0);
	W3mAlertBar = __decorate$8([customElement("w3m-alertbar")], W3mAlertBar);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/styles.js
var styles_default$7;
var init_styles$7 = __esmMin((() => {
	init_lit();
	styles_default$7 = i$4`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-icon-link/index.js
var __decorate$7, WuiIconLink;
var init_wui_icon_link$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$7();
	__decorate$7 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiIconLink = class WuiIconLink extends i$3 {
		constructor() {
			super(...arguments);
			this.size = "md";
			this.disabled = false;
			this.icon = "copy";
			this.iconColor = "inherit";
		}
		render() {
			const borderRadius = this.size === "lg" ? "--wui-border-radius-xs" : "--wui-border-radius-xxs";
			const padding = this.size === "lg" ? "--wui-spacing-1xs" : "--wui-spacing-2xs";
			this.style.cssText = `
    --local-border-radius: var(${borderRadius});
    --local-padding: var(${padding});
`;
			return T`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `;
		}
	};
	WuiIconLink.styles = [
		resetStyles,
		elementStyles,
		colorStyles,
		styles_default$7
	];
	__decorate$7([n$4()], WuiIconLink.prototype, "size", void 0);
	__decorate$7([n$4({ type: Boolean })], WuiIconLink.prototype, "disabled", void 0);
	__decorate$7([n$4()], WuiIconLink.prototype, "icon", void 0);
	__decorate$7([n$4()], WuiIconLink.prototype, "iconColor", void 0);
	WuiIconLink = __decorate$7([customElement("wui-icon-link")], WuiIconLink);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-icon-link.js
var init_wui_icon_link = __esmMin((() => {
	init_wui_icon_link$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/styles.js
var styles_default$6;
var init_styles$6 = __esmMin((() => {
	init_lit();
	styles_default$6 = i$4`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-select/index.js
var __decorate$6, WuiSelect;
var init_wui_select$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_wui_image();
	init_wui_icon_box$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_styles$6();
	__decorate$6 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiSelect = class WuiSelect extends i$3 {
		constructor() {
			super(...arguments);
			this.imageSrc = "";
		}
		render() {
			return T`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`;
		}
		imageTemplate() {
			if (this.imageSrc) return T`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;
			return T`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`;
		}
	};
	WuiSelect.styles = [
		resetStyles,
		elementStyles,
		colorStyles,
		styles_default$6
	];
	__decorate$6([n$4()], WuiSelect.prototype, "imageSrc", void 0);
	WuiSelect = __decorate$6([customElement("wui-select")], WuiSelect);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-select.js
var init_wui_select = __esmMin((() => {
	init_wui_select$1();
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-tag.js
var init_wui_tag = __esmMin((() => {
	init_wui_tag$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/styles.js
var styles_default$5;
var init_styles$5 = __esmMin((() => {
	init_lit();
	styles_default$5 = i$4`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-header/index.js
function headings() {
	const connectorName = RouterController.state.data?.connector?.name;
	const walletName = RouterController.state.data?.wallet?.name;
	const networkName = RouterController.state.data?.network?.name;
	const name = walletName ?? connectorName;
	const connectors = ConnectorController.getConnectors();
	return {
		Connect: `Connect ${connectors.length === 1 && connectors[0]?.id === "w3m-email" ? "Email" : ""} Wallet`,
		Create: "Create Wallet",
		ChooseAccountName: void 0,
		Account: void 0,
		AccountSettings: void 0,
		AllWallets: "All Wallets",
		ApproveTransaction: "Approve Transaction",
		BuyInProgress: "Buy",
		ConnectingExternal: name ?? "Connect Wallet",
		ConnectingWalletConnect: name ?? "WalletConnect",
		ConnectingWalletConnectBasic: "WalletConnect",
		ConnectingSiwe: "Sign In",
		Convert: "Convert",
		ConvertSelectToken: "Select token",
		ConvertPreview: "Preview convert",
		Downloads: name ? `Get ${name}` : "Downloads",
		EmailLogin: "Email Login",
		EmailVerifyOtp: "Confirm Email",
		EmailVerifyDevice: "Register Device",
		GetWallet: "Get a wallet",
		Networks: "Choose Network",
		OnRampProviders: "Choose Provider",
		OnRampActivity: "Activity",
		OnRampTokenSelect: "Select Token",
		OnRampFiatSelect: "Select Currency",
		Pay: "How you pay",
		Profile: void 0,
		SwitchNetwork: networkName ?? "Switch Network",
		SwitchAddress: "Switch Address",
		Transactions: "Activity",
		UnsupportedChain: "Switch Network",
		UpgradeEmailWallet: "Upgrade your Wallet",
		UpdateEmailWallet: "Edit Email",
		UpdateEmailPrimaryOtp: "Confirm Current Email",
		UpdateEmailSecondaryOtp: "Confirm New Email",
		WhatIsABuy: "What is Buy?",
		RegisterAccountName: "Choose name",
		RegisterAccountNameSuccess: "",
		WalletReceive: "Receive",
		WalletCompatibleNetworks: "Compatible Networks",
		Swap: "Swap",
		SwapSelectToken: "Select token",
		SwapPreview: "Preview swap",
		WalletSend: "Send",
		WalletSendPreview: "Review send",
		WalletSendSelectToken: "Select Token",
		WhatIsANetwork: "What is a network?",
		WhatIsAWallet: "What is a wallet?",
		ConnectWallets: "Connect wallet",
		ConnectSocials: "All socials",
		ConnectingSocial: AccountController.state.socialProvider ? AccountController.state.socialProvider : "Connect Social",
		ConnectingMultiChain: "Select chain",
		ConnectingFarcaster: "Farcaster",
		SwitchActiveChain: "Switch chain",
		SmartSessionCreated: void 0,
		SmartSessionList: "Smart Sessions",
		SIWXSignMessage: "Sign In",
		PayLoading: "Payment in progress"
	};
}
var __decorate$5, BETA_SCREENS, W3mHeader;
var init_w3m_header = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_icon_link();
	init_wui_select();
	init_wui_tag();
	init_wui_text();
	init_ConstantsUtil$3();
	init_styles$5();
	__decorate$5 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	BETA_SCREENS = ["SmartSessionList"];
	W3mHeader = class W3mHeader extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.heading = headings()[RouterController.state.view];
			this.network = ChainController.state.activeCaipNetwork;
			this.networkImage = AssetUtil.getNetworkImage(this.network);
			this.showBack = false;
			this.prevHistoryLength = 1;
			this.view = RouterController.state.view;
			this.viewDirection = "";
			this.headerText = headings()[RouterController.state.view];
			this.unsubscribe.push(AssetController.subscribeNetworkImages(() => {
				this.networkImage = AssetUtil.getNetworkImage(this.network);
			}), RouterController.subscribeKey("view", (val) => {
				setTimeout(() => {
					this.view = val;
					this.headerText = headings()[val];
				}, ConstantsUtil$2.ANIMATION_DURATIONS.HeaderText);
				this.onViewChange();
				this.onHistoryChange();
			}), ChainController.subscribeKey("activeCaipNetwork", (val) => {
				this.network = val;
				this.networkImage = AssetUtil.getNetworkImage(this.network);
			}));
		}
		disconnectCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			return T`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `;
		}
		onWalletHelp() {
			EventsController.sendEvent({
				type: "track",
				event: "CLICK_WALLET_HELP"
			});
			RouterController.push("WhatIsAWallet");
		}
		async onClose() {
			await ModalUtil.safeClose();
		}
		rightHeaderTemplate() {
			const isSmartSessionsEnabled = OptionsController?.state?.features?.smartSessions;
			if (RouterController.state.view !== "Account" || !isSmartSessionsEnabled) return this.closeButtonTemplate();
			return T`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${() => RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `;
		}
		closeButtonTemplate() {
			return T`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `;
		}
		titleTemplate() {
			const isBeta = BETA_SCREENS.includes(this.view);
			return T`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${isBeta ? T`<wui-tag variant="main">Beta</wui-tag>` : null}
      </wui-flex>
    `;
		}
		leftHeaderTemplate() {
			const { view } = RouterController.state;
			const isConnectHelp = view === "Connect";
			const isEmbeddedEnable = OptionsController.state.enableEmbedded;
			const isApproveTransaction = view === "ApproveTransaction";
			const isConnectingSIWEView = view === "ConnectingSiwe";
			const isAccountView = view === "Account";
			const enableNetworkSwitch = OptionsController.state.enableNetworkSwitch;
			const shouldHideBack = isApproveTransaction || isConnectingSIWEView || isConnectHelp && isEmbeddedEnable;
			if (isAccountView && enableNetworkSwitch) return T`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${o$2(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${o$2(this.networkImage)}
      ></wui-select>`;
			if (this.showBack && !shouldHideBack) return T`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`;
			return T`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
		}
		onNetworks() {
			if (this.isAllowedNetworkSwitch()) {
				EventsController.sendEvent({
					type: "track",
					event: "CLICK_NETWORKS"
				});
				RouterController.push("Networks");
			}
		}
		isAllowedNetworkSwitch() {
			const requestedCaipNetworks = ChainController.getAllRequestedCaipNetworks();
			const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
			const isValidNetwork = requestedCaipNetworks?.find(({ id }) => id === this.network?.id);
			return isMultiNetwork || !isValidNetwork;
		}
		getPadding() {
			if (this.heading) return [
				"l",
				"2l",
				"l",
				"2l"
			];
			return [
				"0",
				"2l",
				"0",
				"2l"
			];
		}
		onViewChange() {
			const { history } = RouterController.state;
			let direction = ConstantsUtil$2.VIEW_DIRECTION.Next;
			if (history.length < this.prevHistoryLength) direction = ConstantsUtil$2.VIEW_DIRECTION.Prev;
			this.prevHistoryLength = history.length;
			this.viewDirection = direction;
		}
		async onHistoryChange() {
			const { history } = RouterController.state;
			const buttonEl = this.shadowRoot?.querySelector("#dynamic");
			if (history.length > 1 && !this.showBack && buttonEl) {
				await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				}).finished;
				this.showBack = true;
				buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				});
			} else if (history.length <= 1 && this.showBack && buttonEl) {
				await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				}).finished;
				this.showBack = false;
				buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
					duration: 200,
					fill: "forwards",
					easing: "ease"
				});
			}
		}
		onGoBack() {
			RouterController.goBack();
		}
	};
	W3mHeader.styles = styles_default$5;
	__decorate$5([r$2()], W3mHeader.prototype, "heading", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "network", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "networkImage", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "showBack", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "prevHistoryLength", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "view", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "viewDirection", void 0);
	__decorate$5([r$2()], W3mHeader.prototype, "headerText", void 0);
	W3mHeader = __decorate$5([customElement("w3m-header")], W3mHeader);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/styles.js
var styles_default$4;
var init_styles$4 = __esmMin((() => {
	init_lit();
	styles_default$4 = i$4`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/src/composites/wui-snackbar/index.js
var __decorate$4, WuiSnackbar;
var init_wui_snackbar$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_wui_icon$1();
	init_wui_loading_spinner$1();
	init_wui_text$1();
	init_ThemeUtil();
	init_WebComponentsUtil();
	init_wui_icon_box$1();
	init_styles$4();
	__decorate$4 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	WuiSnackbar = class WuiSnackbar extends i$3 {
		constructor() {
			super(...arguments);
			this.backgroundColor = "accent-100";
			this.iconColor = "accent-100";
			this.icon = "checkmark";
			this.message = "";
			this.loading = false;
			this.iconType = "default";
		}
		render() {
			return T`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `;
		}
		templateIcon() {
			if (this.loading) return T`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`;
			if (this.iconType === "default") return T`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`;
			return T`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`;
		}
	};
	WuiSnackbar.styles = [resetStyles, styles_default$4];
	__decorate$4([n$4()], WuiSnackbar.prototype, "backgroundColor", void 0);
	__decorate$4([n$4()], WuiSnackbar.prototype, "iconColor", void 0);
	__decorate$4([n$4()], WuiSnackbar.prototype, "icon", void 0);
	__decorate$4([n$4()], WuiSnackbar.prototype, "message", void 0);
	__decorate$4([n$4()], WuiSnackbar.prototype, "loading", void 0);
	__decorate$4([n$4()], WuiSnackbar.prototype, "iconType", void 0);
	WuiSnackbar = __decorate$4([customElement("wui-snackbar")], WuiSnackbar);
}));
//#endregion
//#region node_modules/@reown/appkit-ui/dist/esm/exports/wui-snackbar.js
var init_wui_snackbar = __esmMin((() => {
	init_wui_snackbar$1();
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/styles.js
var styles_default$3;
var init_styles$3 = __esmMin((() => {
	init_lit();
	styles_default$3 = i$4`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-snackbar/index.js
var __decorate$3, presets, W3mSnackBar;
var init_w3m_snackbar = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_wui_snackbar();
	init_styles$3();
	__decorate$3 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	presets = {
		loading: void 0,
		success: {
			backgroundColor: "success-100",
			iconColor: "success-100",
			icon: "checkmark"
		},
		error: {
			backgroundColor: "error-100",
			iconColor: "error-100",
			icon: "close"
		}
	};
	W3mSnackBar = class W3mSnackBar extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.timeout = void 0;
			this.open = SnackController.state.open;
			this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
				this.open = val;
				this.onOpen();
			}));
		}
		disconnectedCallback() {
			clearTimeout(this.timeout);
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			const { message, variant, svg } = SnackController.state;
			const preset = presets[variant];
			const { icon, iconColor } = svg ?? preset ?? {};
			return T`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset?.backgroundColor}
        iconColor=${iconColor}
        icon=${icon}
        .loading=${variant === "loading"}
      ></wui-snackbar>
    `;
		}
		onOpen() {
			clearTimeout(this.timeout);
			if (this.open) {
				this.animate([{
					opacity: 0,
					transform: "translateX(-50%) scale(0.85)"
				}, {
					opacity: 1,
					transform: "translateX(-50%) scale(1)"
				}], {
					duration: 150,
					fill: "forwards",
					easing: "ease"
				});
				if (this.timeout) clearTimeout(this.timeout);
				if (SnackController.state.autoClose) this.timeout = setTimeout(() => SnackController.hide(), 2500);
			} else this.animate([{
				opacity: 1,
				transform: "translateX(-50%) scale(1)"
			}, {
				opacity: 0,
				transform: "translateX(-50%) scale(0.85)"
			}], {
				duration: 150,
				fill: "forwards",
				easing: "ease"
			});
		}
	};
	W3mSnackBar.styles = styles_default$3;
	__decorate$3([r$2()], W3mSnackBar.prototype, "open", void 0);
	W3mSnackBar = __decorate$3([customElement("w3m-snackbar")], W3mSnackBar);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/styles.js
var styles_default$2;
var init_styles$2 = __esmMin((() => {
	init_lit();
	styles_default$2 = i$4`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/partials/w3m-tooltip/index.js
var __decorate$2, W3mTooltip;
var init_w3m_tooltip = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_wui_flex();
	init_wui_icon();
	init_wui_text();
	init_styles$2();
	__decorate$2 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mTooltip = class W3mTooltip extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.open = TooltipController.state.open;
			this.message = TooltipController.state.message;
			this.triggerRect = TooltipController.state.triggerRect;
			this.variant = TooltipController.state.variant;
			this.unsubscribe.push(...[TooltipController.subscribe((newState) => {
				this.open = newState.open;
				this.message = newState.message;
				this.triggerRect = newState.triggerRect;
				this.variant = newState.variant;
			})]);
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			this.dataset["variant"] = this.variant;
			const topValue = this.triggerRect.top;
			const leftValue = this.triggerRect.left;
			this.style.cssText = `
    --w3m-tooltip-top: ${topValue}px;
    --w3m-tooltip-left: ${leftValue}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width / 2}px;
    --w3m-tooltip-display: ${this.open ? "flex" : "none"};
    --w3m-tooltip-opacity: ${this.open ? 1 : 0};
    `;
			return T`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`;
		}
	};
	W3mTooltip.styles = [styles_default$2];
	__decorate$2([r$2()], W3mTooltip.prototype, "open", void 0);
	__decorate$2([r$2()], W3mTooltip.prototype, "message", void 0);
	__decorate$2([r$2()], W3mTooltip.prototype, "triggerRect", void 0);
	__decorate$2([r$2()], W3mTooltip.prototype, "variant", void 0);
	W3mTooltip = __decorate$2([customElement("w3m-tooltip"), customElement("w3m-tooltip")], W3mTooltip);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/styles.js
var styles_default$1;
var init_styles$1 = __esmMin((() => {
	init_lit();
	styles_default$1 = i$4`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-router/index.js
var __decorate$1, W3mRouter;
var init_w3m_router = __esmMin((() => {
	init_lit();
	init_decorators();
	init_exports();
	init_exports$1();
	init_ConstantsUtil$3();
	init_styles$1();
	__decorate$1 = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	W3mRouter = class W3mRouter extends i$3 {
		constructor() {
			super();
			this.resizeObserver = void 0;
			this.prevHeight = "0px";
			this.prevHistoryLength = 1;
			this.unsubscribe = [];
			this.view = RouterController.state.view;
			this.viewDirection = "";
			this.unsubscribe.push(RouterController.subscribeKey("view", (val) => this.onViewChange(val)));
		}
		firstUpdated() {
			this.resizeObserver = new ResizeObserver(([content]) => {
				const height = `${content?.contentRect.height}px`;
				if (this.prevHeight !== "0px") {
					this.style.setProperty("--prev-height", this.prevHeight);
					this.style.setProperty("--new-height", height);
					this.style.animation = "w3m-view-height 150ms forwards ease";
					this.style.height = "auto";
				}
				setTimeout(() => {
					this.prevHeight = height;
					this.style.animation = "unset";
				}, ConstantsUtil$2.ANIMATION_DURATIONS.ModalHeight);
			});
			this.resizeObserver?.observe(this.getWrapper());
		}
		disconnectedCallback() {
			this.resizeObserver?.unobserve(this.getWrapper());
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
		}
		render() {
			return T`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`;
		}
		viewTemplate() {
			switch (this.view) {
				case "AccountSettings": return T`<w3m-account-settings-view></w3m-account-settings-view>`;
				case "Account": return T`<w3m-account-view></w3m-account-view>`;
				case "AllWallets": return T`<w3m-all-wallets-view></w3m-all-wallets-view>`;
				case "ApproveTransaction": return T`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
				case "BuyInProgress": return T`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;
				case "ChooseAccountName": return T`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;
				case "Connect": return T`<w3m-connect-view></w3m-connect-view>`;
				case "Create": return T`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;
				case "ConnectingWalletConnect": return T`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
				case "ConnectingWalletConnectBasic": return T`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;
				case "ConnectingExternal": return T`<w3m-connecting-external-view></w3m-connecting-external-view>`;
				case "ConnectingSiwe": return T`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
				case "ConnectWallets": return T`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;
				case "ConnectSocials": return T`<w3m-connect-socials-view></w3m-connect-socials-view>`;
				case "ConnectingSocial": return T`<w3m-connecting-social-view></w3m-connecting-social-view>`;
				case "Downloads": return T`<w3m-downloads-view></w3m-downloads-view>`;
				case "EmailLogin": return T`<w3m-email-login-view></w3m-email-login-view>`;
				case "EmailVerifyOtp": return T`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
				case "EmailVerifyDevice": return T`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
				case "GetWallet": return T`<w3m-get-wallet-view></w3m-get-wallet-view>`;
				case "Networks": return T`<w3m-networks-view></w3m-networks-view>`;
				case "SwitchNetwork": return T`<w3m-network-switch-view></w3m-network-switch-view>`;
				case "Profile": return T`<w3m-profile-view></w3m-profile-view>`;
				case "SwitchAddress": return T`<w3m-switch-address-view></w3m-switch-address-view>`;
				case "Transactions": return T`<w3m-transactions-view></w3m-transactions-view>`;
				case "OnRampProviders": return T`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;
				case "OnRampActivity": return T`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;
				case "OnRampTokenSelect": return T`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;
				case "OnRampFiatSelect": return T`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;
				case "UpgradeEmailWallet": return T`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;
				case "UpdateEmailWallet": return T`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;
				case "UpdateEmailPrimaryOtp": return T`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;
				case "UpdateEmailSecondaryOtp": return T`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;
				case "UnsupportedChain": return T`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;
				case "Swap": return T`<w3m-swap-view></w3m-swap-view>`;
				case "SwapSelectToken": return T`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;
				case "SwapPreview": return T`<w3m-swap-preview-view></w3m-swap-preview-view>`;
				case "WalletSend": return T`<w3m-wallet-send-view></w3m-wallet-send-view>`;
				case "WalletSendSelectToken": return T`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;
				case "WalletSendPreview": return T`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;
				case "WhatIsABuy": return T`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;
				case "WalletReceive": return T`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;
				case "WalletCompatibleNetworks": return T`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;
				case "WhatIsAWallet": return T`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
				case "ConnectingMultiChain": return T`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;
				case "WhatIsANetwork": return T`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
				case "ConnectingFarcaster": return T`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;
				case "SwitchActiveChain": return T`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;
				case "RegisterAccountName": return T`<w3m-register-account-name-view></w3m-register-account-name-view>`;
				case "RegisterAccountNameSuccess": return T`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;
				case "SmartSessionCreated": return T`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;
				case "SmartSessionList": return T`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;
				case "SIWXSignMessage": return T`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;
				case "Pay": return T`<w3m-pay-view></w3m-pay-view>`;
				case "PayLoading": return T`<w3m-pay-loading-view></w3m-pay-loading-view>`;
				default: return T`<w3m-connect-view></w3m-connect-view>`;
			}
		}
		onViewChange(newView) {
			TooltipController.hide();
			let direction = ConstantsUtil$2.VIEW_DIRECTION.Next;
			const { history } = RouterController.state;
			if (history.length < this.prevHistoryLength) direction = ConstantsUtil$2.VIEW_DIRECTION.Prev;
			this.prevHistoryLength = history.length;
			this.viewDirection = direction;
			setTimeout(() => {
				this.view = newView;
			}, ConstantsUtil$2.ANIMATION_DURATIONS.ViewTransition);
		}
		getWrapper() {
			return this.shadowRoot?.querySelector("div");
		}
	};
	W3mRouter.styles = styles_default$1;
	__decorate$1([r$2()], W3mRouter.prototype, "view", void 0);
	__decorate$1([r$2()], W3mRouter.prototype, "viewDirection", void 0);
	W3mRouter = __decorate$1([customElement("w3m-router")], W3mRouter);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/styles.js
var styles_default;
var init_styles = __esmMin((() => {
	init_lit();
	styles_default = i$4`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/src/modal/w3m-modal/index.js
var __decorate, SCROLL_LOCK, W3mModalBase, W3mModal, AppKitModal;
var init_w3m_modal$1 = __esmMin((() => {
	init_lit();
	init_decorators();
	init_if_defined();
	init_esm();
	init_exports();
	init_exports$1();
	init_wui_card();
	init_wui_flex();
	init_w3m_alertbar();
	init_w3m_header();
	init_w3m_snackbar();
	init_w3m_tooltip();
	init_w3m_router();
	init_styles();
	__decorate = function(decorators, target, key, desc) {
		var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
		else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
		return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	SCROLL_LOCK = "scroll-lock";
	W3mModalBase = class extends i$3 {
		constructor() {
			super();
			this.unsubscribe = [];
			this.abortController = void 0;
			this.hasPrefetched = false;
			this.enableEmbedded = OptionsController.state.enableEmbedded;
			this.open = ModalController.state.open;
			this.caipAddress = ChainController.state.activeCaipAddress;
			this.caipNetwork = ChainController.state.activeCaipNetwork;
			this.shake = ModalController.state.shake;
			this.filterByNamespace = ConnectorController.state.filterByNamespace;
			this.initializeTheming();
			ApiController.prefetchAnalyticsConfig();
			this.unsubscribe.push(...[
				ModalController.subscribeKey("open", (val) => val ? this.onOpen() : this.onClose()),
				ModalController.subscribeKey("shake", (val) => this.shake = val),
				ChainController.subscribeKey("activeCaipNetwork", (val) => this.onNewNetwork(val)),
				ChainController.subscribeKey("activeCaipAddress", (val) => this.onNewAddress(val)),
				OptionsController.subscribeKey("enableEmbedded", (val) => this.enableEmbedded = val),
				ConnectorController.subscribeKey("filterByNamespace", (val) => {
					if (this.filterByNamespace !== val && !ChainController.getAccountData(val)?.caipAddress) {
						ApiController.fetchRecommendedWallets();
						this.filterByNamespace = val;
					}
				})
			]);
		}
		firstUpdated() {
			if (this.caipAddress) {
				if (this.enableEmbedded) {
					ModalController.close();
					this.prefetch();
					return;
				}
				this.onNewAddress(this.caipAddress);
			}
			if (this.open) this.onOpen();
			if (this.enableEmbedded) this.prefetch();
		}
		disconnectedCallback() {
			this.unsubscribe.forEach((unsubscribe) => unsubscribe());
			this.onRemoveKeyboardListener();
		}
		render() {
			this.style.cssText = `
      --local-border-bottom-mobile-radius: ${this.enableEmbedded ? "clamp(0px, var(--wui-border-radius-l), 44px)" : "0px"};
    `;
			if (this.enableEmbedded) return T`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `;
			return this.open ? T`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        ` : null;
		}
		contentTemplate() {
			return T` <wui-card
      shake="${this.shake}"
      data-embedded="${o$2(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`;
		}
		async onOverlayClick(event) {
			if (event.target === event.currentTarget) await this.handleClose();
		}
		async handleClose() {
			await ModalUtil.safeClose();
		}
		initializeTheming() {
			const { themeVariables, themeMode } = ThemeController.state;
			const defaultThemeMode = UiHelperUtil.getColorTheme(themeMode);
			initializeTheming(themeVariables, defaultThemeMode);
		}
		onClose() {
			this.open = false;
			this.classList.remove("open");
			this.onScrollUnlock();
			SnackController.hide();
			this.onRemoveKeyboardListener();
		}
		onOpen() {
			this.open = true;
			this.classList.add("open");
			this.onScrollLock();
			this.onAddKeyboardListener();
		}
		onScrollLock() {
			const styleTag = document.createElement("style");
			styleTag.dataset["w3m"] = SCROLL_LOCK;
			styleTag.textContent = `
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `;
			document.head.appendChild(styleTag);
		}
		onScrollUnlock() {
			const styleTag = document.head.querySelector(`style[data-w3m="${SCROLL_LOCK}"]`);
			if (styleTag) styleTag.remove();
		}
		onAddKeyboardListener() {
			this.abortController = new AbortController();
			const card = this.shadowRoot?.querySelector("wui-card");
			card?.focus();
			window.addEventListener("keydown", (event) => {
				if (event.key === "Escape") this.handleClose();
				else if (event.key === "Tab") {
					const { tagName } = event.target;
					if (tagName && !tagName.includes("W3M-") && !tagName.includes("WUI-")) card?.focus();
				}
			}, this.abortController);
		}
		onRemoveKeyboardListener() {
			this.abortController?.abort();
			this.abortController = void 0;
		}
		async onNewAddress(caipAddress) {
			const isSwitchingNamespace = ChainController.state.isSwitchingNamespace;
			const nextConnected = CoreHelperUtil.getPlainAddress(caipAddress);
			const isDisconnectedInSameNamespace = !nextConnected && !isSwitchingNamespace;
			const isSwitchingNamespaceAndConnected = isSwitchingNamespace && nextConnected;
			if (isDisconnectedInSameNamespace) ModalController.close();
			else if (isSwitchingNamespaceAndConnected) RouterController.goBack();
			await SIWXUtil.initializeIfEnabled();
			this.caipAddress = caipAddress;
			ChainController.setIsSwitchingNamespace(false);
		}
		onNewNetwork(nextCaipNetwork) {
			const prevCaipNetwork = this.caipNetwork;
			const prevCaipNetworkId = prevCaipNetwork?.caipNetworkId?.toString();
			const prevChainNamespace = prevCaipNetwork?.chainNamespace;
			const nextNetworkId = nextCaipNetwork?.caipNetworkId?.toString();
			const nextChainNamespace = nextCaipNetwork?.chainNamespace;
			const networkIdChanged = prevCaipNetworkId !== nextNetworkId;
			const isNetworkChangedInSameNamespace = networkIdChanged && !(prevChainNamespace !== nextChainNamespace);
			const wasUnsupportedNetwork = prevCaipNetwork?.name === ConstantsUtil.UNSUPPORTED_NETWORK_NAME;
			const isConnectingExternal = RouterController.state.view === "ConnectingExternal";
			const isNotConnected = !ChainController.getAccountData(nextCaipNetwork?.chainNamespace)?.caipAddress;
			const isUnsupportedNetworkScreen = RouterController.state.view === "UnsupportedChain";
			const isModalOpen = ModalController.state.open;
			let shouldGoBack = false;
			if (isModalOpen && !isConnectingExternal) {
				if (isNotConnected) {
					if (networkIdChanged) shouldGoBack = true;
				} else if (isUnsupportedNetworkScreen) shouldGoBack = true;
				else if (isNetworkChangedInSameNamespace && !wasUnsupportedNetwork) shouldGoBack = true;
			}
			if (shouldGoBack && RouterController.state.view !== "SIWXSignMessage") RouterController.goBack();
			this.caipNetwork = nextCaipNetwork;
		}
		prefetch() {
			if (!this.hasPrefetched) {
				ApiController.prefetch();
				ApiController.fetchWalletsByPage({ page: 1 });
				this.hasPrefetched = true;
			}
		}
	};
	W3mModalBase.styles = styles_default;
	__decorate([n$4({ type: Boolean })], W3mModalBase.prototype, "enableEmbedded", void 0);
	__decorate([r$2()], W3mModalBase.prototype, "open", void 0);
	__decorate([r$2()], W3mModalBase.prototype, "caipAddress", void 0);
	__decorate([r$2()], W3mModalBase.prototype, "caipNetwork", void 0);
	__decorate([r$2()], W3mModalBase.prototype, "shake", void 0);
	__decorate([r$2()], W3mModalBase.prototype, "filterByNamespace", void 0);
	W3mModal = class W3mModal extends W3mModalBase {};
	W3mModal = __decorate([customElement("w3m-modal")], W3mModal);
	AppKitModal = class AppKitModal extends W3mModalBase {};
	AppKitModal = __decorate([customElement("appkit-modal")], AppKitModal);
}));
//#endregion
//#region node_modules/@reown/appkit-scaffold-ui/dist/esm/exports/w3m-modal.js
var w3m_modal_exports = /* @__PURE__ */ __exportAll({
	AppKitModal: () => AppKitModal,
	W3mModal: () => W3mModal,
	W3mModalBase: () => W3mModalBase
});
var init_w3m_modal = __esmMin((() => {
	init_w3m_modal$1();
}));
//#endregion
export { init_basic as i, w3m_modal_exports as n, basic_exports as r, init_w3m_modal as t };
