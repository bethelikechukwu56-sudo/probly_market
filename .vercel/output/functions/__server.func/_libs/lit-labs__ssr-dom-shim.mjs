import { n as __esmMin } from "../_runtime.mjs";
//#region node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js
var ElementInternalsShim;
var init_element_internals = __esmMin((() => {
	ElementInternalsShim = class ElementInternals {
		get shadowRoot() {
			/**
			* @license
			* Copyright 2023 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			return this.__host.__shadowRoot;
		}
		constructor(_host) {
			this.ariaActiveDescendantElement = null;
			this.ariaAtomic = "";
			this.ariaAutoComplete = "";
			this.ariaBrailleLabel = "";
			this.ariaBrailleRoleDescription = "";
			this.ariaBusy = "";
			this.ariaChecked = "";
			this.ariaColCount = "";
			this.ariaColIndex = "";
			this.ariaColIndexText = "";
			this.ariaColSpan = "";
			this.ariaControlsElements = null;
			this.ariaCurrent = "";
			this.ariaDescribedByElements = null;
			this.ariaDescription = "";
			this.ariaDetailsElements = null;
			this.ariaDisabled = "";
			this.ariaErrorMessageElements = null;
			this.ariaExpanded = "";
			this.ariaFlowToElements = null;
			this.ariaHasPopup = "";
			this.ariaHidden = "";
			this.ariaInvalid = "";
			this.ariaKeyShortcuts = "";
			this.ariaLabel = "";
			this.ariaLabelledByElements = null;
			this.ariaLevel = "";
			this.ariaLive = "";
			this.ariaModal = "";
			this.ariaMultiLine = "";
			this.ariaMultiSelectable = "";
			this.ariaOrientation = "";
			this.ariaOwnsElements = null;
			this.ariaPlaceholder = "";
			this.ariaPosInSet = "";
			this.ariaPressed = "";
			this.ariaReadOnly = "";
			this.ariaRelevant = "";
			this.ariaRequired = "";
			this.ariaRoleDescription = "";
			this.ariaRowCount = "";
			this.ariaRowIndex = "";
			this.ariaRowIndexText = "";
			this.ariaRowSpan = "";
			this.ariaSelected = "";
			this.ariaSetSize = "";
			this.ariaSort = "";
			this.ariaValueMax = "";
			this.ariaValueMin = "";
			this.ariaValueNow = "";
			this.ariaValueText = "";
			this.role = "";
			this.form = null;
			this.labels = [];
			this.states = /* @__PURE__ */ new Set();
			this.validationMessage = "";
			this.validity = {};
			this.willValidate = true;
			this.__host = _host;
		}
		checkValidity() {
			console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true.");
			return true;
		}
		reportValidity() {
			return true;
		}
		setFormValue() {}
		setValidity() {}
	};
}));
//#endregion
//#region node_modules/@lit-labs/ssr-dom-shim/lib/events.js
var __classPrivateFieldSet, __classPrivateFieldGet, _Event_cancelable, _Event_bubbles, _Event_composed, _Event_defaultPrevented, _Event_timestamp, _Event_propagationStopped, _Event_type, _Event_target, _Event_isBeingDispatched, _a$1, _CustomEvent_detail, _b, NONE, CAPTURING_PHASE, AT_TARGET, BUBBLING_PHASE, enumerableProperty$1, EventShim, CustomEventShim, EventShimWithRealType, CustomEventShimWithRealType;
var init_events = __esmMin((() => {
	__classPrivateFieldSet = function(receiver, state, value, kind, f) {
		/**
		* @license
		* Copyright 2023 Google LLC
		* SPDX-License-Identifier: BSD-3-Clause
		*/
		if (kind === "m") throw new TypeError("Private method is not writable");
		if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
		if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
	};
	__classPrivateFieldGet = function(receiver, state, kind, f) {
		if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
		if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	};
	NONE = 0;
	CAPTURING_PHASE = 1;
	AT_TARGET = 2;
	BUBBLING_PHASE = 3;
	enumerableProperty$1 = { __proto__: null };
	enumerableProperty$1.enumerable = true;
	Object.freeze(enumerableProperty$1);
	EventShim = (_a$1 = class Event {
		constructor(type, options = {}) {
			_Event_cancelable.set(this, false);
			_Event_bubbles.set(this, false);
			_Event_composed.set(this, false);
			_Event_defaultPrevented.set(this, false);
			_Event_timestamp.set(this, Date.now());
			_Event_propagationStopped.set(this, false);
			_Event_type.set(this, void 0);
			_Event_target.set(this, void 0);
			_Event_isBeingDispatched.set(this, void 0);
			this.NONE = NONE;
			this.CAPTURING_PHASE = CAPTURING_PHASE;
			this.AT_TARGET = AT_TARGET;
			this.BUBBLING_PHASE = BUBBLING_PHASE;
			if (arguments.length === 0) throw new Error(`The type argument must be specified`);
			if (typeof options !== "object" || !options) throw new Error(`The "options" argument must be an object`);
			const { bubbles, cancelable, composed } = options;
			__classPrivateFieldSet(this, _Event_cancelable, !!cancelable, "f");
			__classPrivateFieldSet(this, _Event_bubbles, !!bubbles, "f");
			__classPrivateFieldSet(this, _Event_composed, !!composed, "f");
			__classPrivateFieldSet(this, _Event_type, `${type}`, "f");
			__classPrivateFieldSet(this, _Event_target, null, "f");
			__classPrivateFieldSet(this, _Event_isBeingDispatched, false, "f");
		}
		initEvent(_type, _bubbles, _cancelable) {
			throw new Error("Method not implemented.");
		}
		stopImmediatePropagation() {
			this.stopPropagation();
		}
		preventDefault() {
			__classPrivateFieldSet(this, _Event_defaultPrevented, true, "f");
		}
		get target() {
			return __classPrivateFieldGet(this, _Event_target, "f");
		}
		get currentTarget() {
			return __classPrivateFieldGet(this, _Event_target, "f");
		}
		get srcElement() {
			return __classPrivateFieldGet(this, _Event_target, "f");
		}
		get type() {
			return __classPrivateFieldGet(this, _Event_type, "f");
		}
		get cancelable() {
			return __classPrivateFieldGet(this, _Event_cancelable, "f");
		}
		get defaultPrevented() {
			return __classPrivateFieldGet(this, _Event_cancelable, "f") && __classPrivateFieldGet(this, _Event_defaultPrevented, "f");
		}
		get timeStamp() {
			return __classPrivateFieldGet(this, _Event_timestamp, "f");
		}
		composedPath() {
			return __classPrivateFieldGet(this, _Event_isBeingDispatched, "f") ? [__classPrivateFieldGet(this, _Event_target, "f")] : [];
		}
		get returnValue() {
			return !__classPrivateFieldGet(this, _Event_cancelable, "f") || !__classPrivateFieldGet(this, _Event_defaultPrevented, "f");
		}
		get bubbles() {
			return __classPrivateFieldGet(this, _Event_bubbles, "f");
		}
		get composed() {
			return __classPrivateFieldGet(this, _Event_composed, "f");
		}
		get eventPhase() {
			return __classPrivateFieldGet(this, _Event_isBeingDispatched, "f") ? _a$1.AT_TARGET : _a$1.NONE;
		}
		get cancelBubble() {
			return __classPrivateFieldGet(this, _Event_propagationStopped, "f");
		}
		set cancelBubble(value) {
			if (value) __classPrivateFieldSet(this, _Event_propagationStopped, true, "f");
		}
		stopPropagation() {
			__classPrivateFieldSet(this, _Event_propagationStopped, true, "f");
		}
		get isTrusted() {
			return false;
		}
	}, _Event_cancelable = /* @__PURE__ */ new WeakMap(), _Event_bubbles = /* @__PURE__ */ new WeakMap(), _Event_composed = /* @__PURE__ */ new WeakMap(), _Event_defaultPrevented = /* @__PURE__ */ new WeakMap(), _Event_timestamp = /* @__PURE__ */ new WeakMap(), _Event_propagationStopped = /* @__PURE__ */ new WeakMap(), _Event_type = /* @__PURE__ */ new WeakMap(), _Event_target = /* @__PURE__ */ new WeakMap(), _Event_isBeingDispatched = /* @__PURE__ */ new WeakMap(), _a$1.NONE = NONE, _a$1.CAPTURING_PHASE = CAPTURING_PHASE, _a$1.AT_TARGET = AT_TARGET, _a$1.BUBBLING_PHASE = BUBBLING_PHASE, _a$1);
	Object.defineProperties(EventShim.prototype, {
		initEvent: enumerableProperty$1,
		stopImmediatePropagation: enumerableProperty$1,
		preventDefault: enumerableProperty$1,
		target: enumerableProperty$1,
		currentTarget: enumerableProperty$1,
		srcElement: enumerableProperty$1,
		type: enumerableProperty$1,
		cancelable: enumerableProperty$1,
		defaultPrevented: enumerableProperty$1,
		timeStamp: enumerableProperty$1,
		composedPath: enumerableProperty$1,
		returnValue: enumerableProperty$1,
		bubbles: enumerableProperty$1,
		composed: enumerableProperty$1,
		eventPhase: enumerableProperty$1,
		cancelBubble: enumerableProperty$1,
		stopPropagation: enumerableProperty$1,
		isTrusted: enumerableProperty$1
	});
	CustomEventShim = (_b = class CustomEvent extends EventShim {
		constructor(type, options = {}) {
			super(type, options);
			_CustomEvent_detail.set(this, void 0);
			__classPrivateFieldSet(this, _CustomEvent_detail, options?.detail ?? null, "f");
		}
		initCustomEvent(_type, _bubbles, _cancelable, _detail) {
			throw new Error("Method not implemented.");
		}
		get detail() {
			return __classPrivateFieldGet(this, _CustomEvent_detail, "f");
		}
	}, _CustomEvent_detail = /* @__PURE__ */ new WeakMap(), _b);
	Object.defineProperties(CustomEventShim.prototype, { detail: enumerableProperty$1 });
	EventShimWithRealType = EventShim;
	CustomEventShimWithRealType = CustomEventShim;
})), _a;
var init_css = __esmMin((() => {
	_a = class CSSRule {
		constructor() {
			/**
			* @license
			* Copyright 2024 Google LLC
			* SPDX-License-Identifier: BSD-3-Clause
			*/
			this.STYLE_RULE = 1;
			this.CHARSET_RULE = 2;
			this.IMPORT_RULE = 3;
			this.MEDIA_RULE = 4;
			this.FONT_FACE_RULE = 5;
			this.PAGE_RULE = 6;
			this.NAMESPACE_RULE = 10;
			this.KEYFRAMES_RULE = 7;
			this.KEYFRAME_RULE = 8;
			this.SUPPORTS_RULE = 12;
			this.COUNTER_STYLE_RULE = 11;
			this.FONT_FEATURE_VALUES_RULE = 14;
			this.MARGIN_RULE = 9;
			this.__parentStyleSheet = null;
			this.cssText = "";
		}
		get parentRule() {
			return null;
		}
		get parentStyleSheet() {
			return this.__parentStyleSheet;
		}
		get type() {
			return 0;
		}
	}, _a.STYLE_RULE = 1, _a.CHARSET_RULE = 2, _a.IMPORT_RULE = 3, _a.MEDIA_RULE = 4, _a.FONT_FACE_RULE = 5, _a.PAGE_RULE = 6, _a.NAMESPACE_RULE = 10, _a.KEYFRAMES_RULE = 7, _a.KEYFRAME_RULE = 8, _a.SUPPORTS_RULE = 12, _a.COUNTER_STYLE_RULE = 11, _a.FONT_FEATURE_VALUES_RULE = 14, _a.MARGIN_RULE = 9;
}));
//#endregion
//#region node_modules/@lit-labs/ssr-dom-shim/index.js
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function promiseWithResolvers() {
	let resolve;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		}),
		resolve,
		reject
	};
}
var constructionToken, isCaptureEventListener, enumerableProperty, EventTarget, attributes, attributesForElement, NodeShim, DocumentShim, documentShim, document, WindowShim, ElementShim, HTMLElementShim, HTMLElementShimWithRealType, ShadowRootShim, CustomElementRegistry, CustomElementRegistryShimWithRealType, customElements, windowShim;
var init_ssr_dom_shim = __esmMin((() => {
	init_element_internals();
	init_events();
	init_css();
	globalThis.Event ??= EventShimWithRealType;
	globalThis.CustomEvent ??= CustomEventShimWithRealType;
	constructionToken = Symbol();
	isCaptureEventListener = (options) => typeof options === "boolean" ? options : options?.capture ?? false;
	enumerableProperty = { __proto__: null };
	enumerableProperty.enumerable = true;
	Object.freeze(enumerableProperty);
	EventTarget = class {
		constructor() {
			this.__eventListeners = /* @__PURE__ */ new Map();
			this.__captureEventListeners = /* @__PURE__ */ new Map();
		}
		addEventListener(type, callback, options) {
			if (callback === void 0 || callback === null) return;
			const eventListenersMap = isCaptureEventListener(options) ? this.__captureEventListeners : this.__eventListeners;
			let eventListeners = eventListenersMap.get(type);
			if (eventListeners === void 0) {
				eventListeners = /* @__PURE__ */ new Map();
				eventListenersMap.set(type, eventListeners);
			} else if (eventListeners.has(callback)) return;
			const normalizedOptions = typeof options === "object" && options ? options : {};
			normalizedOptions.signal?.addEventListener("abort", () => this.removeEventListener(type, callback, options));
			eventListeners.set(callback, normalizedOptions ?? {});
		}
		removeEventListener(type, callback, options) {
			if (callback === void 0 || callback === null) return;
			const eventListenersMap = isCaptureEventListener(options) ? this.__captureEventListeners : this.__eventListeners;
			const eventListeners = eventListenersMap.get(type);
			if (eventListeners !== void 0) {
				eventListeners.delete(callback);
				if (!eventListeners.size) eventListenersMap.delete(type);
			}
		}
		dispatchEvent(event) {
			let composedPath = this.__resolveFullEventPath();
			if (!event.composed && this.__host) composedPath = composedPath.slice(0, composedPath.indexOf(this.__host));
			let stopPropagation = false;
			let stopImmediatePropagation = false;
			let eventPhase = EventShimWithRealType.NONE;
			let target = null;
			let tmpTarget = null;
			let currentTarget = null;
			const originalStopPropagation = event.stopPropagation;
			const originalStopImmediatePropagation = event.stopImmediatePropagation;
			Object.defineProperties(event, {
				target: {
					get() {
						return target ?? tmpTarget;
					},
					...enumerableProperty
				},
				srcElement: {
					get() {
						return event.target;
					},
					...enumerableProperty
				},
				currentTarget: {
					get() {
						return currentTarget;
					},
					...enumerableProperty
				},
				eventPhase: {
					get() {
						return eventPhase;
					},
					...enumerableProperty
				},
				composedPath: {
					value: () => composedPath,
					...enumerableProperty
				},
				stopPropagation: {
					value: () => {
						stopPropagation = true;
						originalStopPropagation.call(event);
					},
					...enumerableProperty
				},
				stopImmediatePropagation: {
					value: () => {
						stopImmediatePropagation = true;
						originalStopImmediatePropagation.call(event);
					},
					...enumerableProperty
				}
			});
			const invokeEventListener = (listener, options, eventListenerMap) => {
				if (typeof listener === "function") listener(event);
				else if (typeof listener?.handleEvent === "function") listener.handleEvent(event);
				if (options.once) eventListenerMap.delete(listener);
			};
			const finishDispatch = () => {
				currentTarget = null;
				eventPhase = EventShimWithRealType.NONE;
				return !event.defaultPrevented;
			};
			const captureEventPath = composedPath.slice().reverse();
			target = !this.__host || !event.composed ? this : null;
			const retarget = (eventTargets) => {
				tmpTarget = this;
				while (tmpTarget.__host && eventTargets.includes(tmpTarget.__host)) tmpTarget = tmpTarget.__host;
			};
			for (const eventTarget of captureEventPath) {
				if (!target && (!tmpTarget || tmpTarget === eventTarget.__host)) retarget(captureEventPath.slice(captureEventPath.indexOf(eventTarget)));
				currentTarget = eventTarget;
				eventPhase = eventTarget === event.target ? EventShimWithRealType.AT_TARGET : EventShimWithRealType.CAPTURING_PHASE;
				const captureEventListeners = eventTarget.__captureEventListeners.get(event.type);
				if (captureEventListeners) for (const [listener, options] of captureEventListeners) {
					invokeEventListener(listener, options, captureEventListeners);
					if (stopImmediatePropagation) return finishDispatch();
				}
				if (stopPropagation) return finishDispatch();
			}
			const bubbleEventPath = event.bubbles ? composedPath : [this];
			tmpTarget = null;
			for (const eventTarget of bubbleEventPath) {
				if (!target && (!tmpTarget || eventTarget === tmpTarget.__host)) retarget(bubbleEventPath.slice(0, bubbleEventPath.indexOf(eventTarget) + 1));
				currentTarget = eventTarget;
				eventPhase = eventTarget === event.target ? EventShimWithRealType.AT_TARGET : EventShimWithRealType.BUBBLING_PHASE;
				const eventListeners = eventTarget.__eventListeners.get(event.type);
				if (eventListeners) for (const [listener, options] of eventListeners) {
					invokeEventListener(listener, options, eventListeners);
					if (stopImmediatePropagation) return finishDispatch();
				}
				if (stopPropagation) return finishDispatch();
			}
			return finishDispatch();
		}
		__resolveFullEventPath() {
			if (this.__eventPathCache) return this.__eventPathCache;
			else if (!this.__eventTargetParent) return this.__eventPathCache = [
				this,
				documentShim,
				windowShim
			];
			else return this.__eventPathCache = [this, ...this.__eventTargetParent.__resolveFullEventPath()];
		}
	};
	attributes = /* @__PURE__ */ new WeakMap();
	attributesForElement = (element) => {
		let attrs = attributes.get(element);
		if (attrs === void 0) attributes.set(element, attrs = /* @__PURE__ */ new Map());
		return attrs;
	};
	NodeShim = class Node extends EventTarget {
		getRootNode(options) {
			if (options?.composed) return document;
			return this.__host?.__shadowRoot ?? document;
		}
	};
	DocumentShim = class Document extends NodeShim {
		get adoptedStyleSheets() {
			return [];
		}
		createTreeWalker() {
			return {};
		}
		createTextNode() {
			return {};
		}
		createElement() {
			return {};
		}
	};
	documentShim = new DocumentShim();
	document = documentShim;
	WindowShim = class Window extends NodeShim {
		constructor(token) {
			super();
			if (token !== constructionToken) throw new TypeError("Illegal constructor");
			Object.assign(this, globalThis, {
				CustomElementRegistry,
				customElements,
				document,
				Document: DocumentShim,
				Element: ElementShim,
				EventTarget,
				HTMLElement: HTMLElementShim,
				Node: NodeShim,
				ShadowRoot: ShadowRootShim,
				window: this,
				Window: WindowShim
			});
		}
	};
	ElementShim = class Element extends NodeShim {
		constructor() {
			super(...arguments);
			this.__shadowRootMode = null;
			this.__shadowRoot = null;
			this.__internals = null;
		}
		get attributes() {
			return Array.from(attributesForElement(this)).map(([name, value]) => ({
				name,
				value
			}));
		}
		get shadowRoot() {
			if (this.__shadowRootMode === "closed") return null;
			return this.__shadowRoot;
		}
		get localName() {
			return this.constructor.__localName;
		}
		get tagName() {
			return this.localName?.toUpperCase();
		}
		setAttribute(name, value) {
			attributesForElement(this).set(name, String(value));
		}
		removeAttribute(name) {
			attributesForElement(this).delete(name);
		}
		toggleAttribute(name, force) {
			if (this.hasAttribute(name)) {
				if (force === void 0 || !force) {
					this.removeAttribute(name);
					return false;
				}
			} else if (force === void 0 || force) {
				this.setAttribute(name, "");
				return true;
			} else return false;
			return true;
		}
		hasAttribute(name) {
			return attributesForElement(this).has(name);
		}
		attachShadow(init) {
			this.__shadowRootMode = init.mode;
			const shadowRoot = new ShadowRootShim(constructionToken, init);
			shadowRoot.__eventTargetParent = this;
			shadowRoot.__host = this;
			return this.__shadowRoot = shadowRoot;
		}
		attachInternals() {
			if (this.__internals !== null) throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
			const internals = new ElementInternalsShim(this);
			this.__internals = internals;
			return internals;
		}
		getAttribute(name) {
			return attributesForElement(this).get(name) ?? null;
		}
	};
	HTMLElementShim = class HTMLElement extends ElementShim {};
	HTMLElementShimWithRealType = HTMLElementShim;
	ShadowRootShim = class ShadowRoot extends NodeShim {
		get host() {
			return this.__host;
		}
		constructor(constructionToken, init) {
			super();
			if (constructionToken !== constructionToken) throw new TypeError("Illegal constructor");
			this.mode = init.mode;
		}
	};
	globalThis.litServerRoot ??= Object.defineProperty(new HTMLElementShimWithRealType(), "localName", { get() {
		return "lit-server-root";
	} });
	CustomElementRegistry = class {
		constructor() {
			this.__definitions = /* @__PURE__ */ new Map();
			this.__reverseDefinitions = /* @__PURE__ */ new Map();
			this.__pendingWhenDefineds = /* @__PURE__ */ new Map();
		}
		define(name, ctor) {
			if (this.__definitions.has(name)) throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${name}" has already been used with this registry`);
			if (this.__reverseDefinitions.has(ctor)) throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the constructor has already been used with this registry for the tag name ${this.__reverseDefinitions.get(ctor)}`);
			ctor.__localName = name;
			this.__definitions.set(name, {
				ctor,
				observedAttributes: ctor.observedAttributes ?? []
			});
			this.__reverseDefinitions.set(ctor, name);
			this.__pendingWhenDefineds.get(name)?.resolve(ctor);
			this.__pendingWhenDefineds.delete(name);
		}
		get(name) {
			return this.__definitions.get(name)?.ctor;
		}
		getName(ctor) {
			return this.__reverseDefinitions.get(ctor) ?? null;
		}
		initialize(_root) {
			throw new Error("customElements.initialize is not currently supported in SSR. Please file a bug if you need it.");
		}
		upgrade(_element) {
			throw new Error("customElements.upgrade is not currently supported in SSR. Please file a bug if you need it.");
		}
		async whenDefined(name) {
			const definition = this.__definitions.get(name);
			if (definition) return definition.ctor;
			let withResolvers = this.__pendingWhenDefineds.get(name);
			if (!withResolvers) {
				withResolvers = promiseWithResolvers();
				this.__pendingWhenDefineds.set(name, withResolvers);
			}
			return withResolvers.promise;
		}
	};
	CustomElementRegistryShimWithRealType = CustomElementRegistry;
	customElements = new CustomElementRegistryShimWithRealType();
	windowShim = new WindowShim(constructionToken);
}));
//#endregion
export { customElements as n, init_ssr_dom_shim as r, HTMLElementShimWithRealType as t };
