import { s as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { C as injected, T as version, w as ChainNotConfiguredError } from "../@rainbow-me/rainbowkit+[...].mjs";
import { l as init__esm, q as createClient } from "../@coinbase/wallet-sdk+[...].mjs";
//#region node_modules/mipd/dist/esm/utils.js
/**
* Watches for EIP-1193 Providers to be announced.
*/
function requestProviders(listener) {
	if (typeof window === "undefined") return;
	const handler = (event) => listener(event.detail);
	window.addEventListener("eip6963:announceProvider", handler);
	window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
	return () => window.removeEventListener("eip6963:announceProvider", handler);
}
//#endregion
//#region node_modules/mipd/dist/esm/store.js
function createStore$1() {
	const listeners = /* @__PURE__ */ new Set();
	let providerDetails = [];
	const request = () => requestProviders((providerDetail) => {
		if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid)) return;
		providerDetails = [...providerDetails, providerDetail];
		listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));
	});
	let unwatch = request();
	return {
		_listeners() {
			return listeners;
		},
		clear() {
			listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));
			providerDetails = [];
		},
		destroy() {
			this.clear();
			listeners.clear();
			unwatch?.();
		},
		findProvider({ rdns }) {
			return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);
		},
		getProviders() {
			return providerDetails;
		},
		reset() {
			this.clear();
			unwatch?.();
			unwatch = request();
		},
		subscribe(listener, { emitImmediately } = {}) {
			listeners.add(listener);
			if (emitImmediately) listener(providerDetails, { added: providerDetails });
			return () => listeners.delete(listener);
		}
	};
}
//#endregion
//#region node_modules/@wagmi/core/node_modules/zustand/esm/middleware.mjs
init__esm();
var subscribeWithSelectorImpl = (fn) => (set, get, api) => {
	const origSubscribe = api.subscribe;
	api.subscribe = (selector, optListener, options) => {
		let listener = selector;
		if (optListener) {
			const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
			let currentSlice = selector(api.getState());
			listener = (state) => {
				const nextSlice = selector(state);
				if (!equalityFn(currentSlice, nextSlice)) {
					const previousSlice = currentSlice;
					optListener(currentSlice = nextSlice, previousSlice);
				}
			};
			if (options == null ? void 0 : options.fireImmediately) optListener(currentSlice, currentSlice);
		}
		return origSubscribe(listener);
	};
	return fn(set, get, api);
};
var subscribeWithSelector = subscribeWithSelectorImpl;
function createJSONStorage(getStorage, options) {
	let storage;
	try {
		storage = getStorage();
	} catch (e) {
		return;
	}
	return {
		getItem: (name) => {
			var _a;
			const parse = (str2) => {
				if (str2 === null) return null;
				return JSON.parse(str2, options == null ? void 0 : options.reviver);
			};
			const str = (_a = storage.getItem(name)) != null ? _a : null;
			if (str instanceof Promise) return str.then(parse);
			return parse(str);
		},
		setItem: (name, newValue) => storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
		removeItem: (name) => storage.removeItem(name)
	};
}
var toThenable = (fn) => (input) => {
	try {
		const result = fn(input);
		if (result instanceof Promise) return result;
		return {
			then(onFulfilled) {
				return toThenable(onFulfilled)(result);
			},
			catch(_onRejected) {
				return this;
			}
		};
	} catch (e) {
		return {
			then(_onFulfilled) {
				return this;
			},
			catch(onRejected) {
				return toThenable(onRejected)(e);
			}
		};
	}
};
var persistImpl = (config, baseOptions) => (set, get, api) => {
	let options = {
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => state,
		version: 0,
		merge: (persistedState, currentState) => ({
			...currentState,
			...persistedState
		}),
		...baseOptions
	};
	let hasHydrated = false;
	const hydrationListeners = /* @__PURE__ */ new Set();
	const finishHydrationListeners = /* @__PURE__ */ new Set();
	let storage = options.storage;
	if (!storage) return config((...args) => {
		console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
		set(...args);
	}, get, api);
	const setItem = () => {
		const state = options.partialize({ ...get() });
		return storage.setItem(options.name, {
			state,
			version: options.version
		});
	};
	const savedSetState = api.setState;
	api.setState = (state, replace) => {
		savedSetState(state, replace);
		setItem();
	};
	const configResult = config((...args) => {
		set(...args);
		setItem();
	}, get, api);
	api.getInitialState = () => configResult;
	let stateFromStorage;
	const hydrate = () => {
		var _a, _b;
		if (!storage) return;
		hasHydrated = false;
		hydrationListeners.forEach((cb) => {
			var _a2;
			return cb((_a2 = get()) != null ? _a2 : configResult);
		});
		const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
		return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
			if (deserializedStorageValue) {
				if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
					if (options.migrate) return [true, options.migrate(deserializedStorageValue.state, deserializedStorageValue.version)];
					console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
				} else return [false, deserializedStorageValue.state];
			}
			return [false, void 0];
		}).then((migrationResult) => {
			var _a2;
			const [migrated, migratedState] = migrationResult;
			stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
			set(stateFromStorage, true);
			if (migrated) return setItem();
		}).then(() => {
			postRehydrationCallback?.(stateFromStorage, void 0);
			stateFromStorage = get();
			hasHydrated = true;
			finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
		}).catch((e) => {
			postRehydrationCallback?.(void 0, e);
		});
	};
	api.persist = {
		setOptions: (newOptions) => {
			options = {
				...options,
				...newOptions
			};
			if (newOptions.storage) storage = newOptions.storage;
		},
		clearStorage: () => {
			storage?.removeItem(options.name);
		},
		getOptions: () => options,
		rehydrate: () => hydrate(),
		hasHydrated: () => hasHydrated,
		onHydrate: (cb) => {
			hydrationListeners.add(cb);
			return () => {
				hydrationListeners.delete(cb);
			};
		},
		onFinishHydration: (cb) => {
			finishHydrationListeners.add(cb);
			return () => {
				finishHydrationListeners.delete(cb);
			};
		}
	};
	if (!options.skipHydration) hydrate();
	return stateFromStorage || configResult;
};
var persist = persistImpl;
//#endregion
//#region node_modules/@wagmi/core/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
//#endregion
//#region node_modules/@wagmi/core/node_modules/eventemitter3/index.mjs
var import_eventemitter3 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var has = Object.prototype.hasOwnProperty;
	var prefix = "~";
	/**
	* Constructor to create a storage for our `EE` objects.
	* An `Events` instance is a plain object whose properties are event names.
	*
	* @constructor
	* @private
	*/
	function Events() {}
	if (Object.create) {
		Events.prototype = Object.create(null);
		if (!new Events().__proto__) prefix = false;
	}
	/**
	* Representation of a single event listener.
	*
	* @param {Function} fn The listener function.
	* @param {*} context The context to invoke the listener with.
	* @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	* @constructor
	* @private
	*/
	function EE(fn, context, once) {
		this.fn = fn;
		this.context = context;
		this.once = once || false;
	}
	/**
	* Add a listener for a given event.
	*
	* @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	* @param {(String|Symbol)} event The event name.
	* @param {Function} fn The listener function.
	* @param {*} context The context to invoke the listener with.
	* @param {Boolean} once Specify if the listener is a one-time listener.
	* @returns {EventEmitter}
	* @private
	*/
	function addListener(emitter, event, fn, context, once) {
		if (typeof fn !== "function") throw new TypeError("The listener must be a function");
		var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
		if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
		else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
		else emitter._events[evt] = [emitter._events[evt], listener];
		return emitter;
	}
	/**
	* Clear event by name.
	*
	* @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	* @param {(String|Symbol)} evt The Event name.
	* @private
	*/
	function clearEvent(emitter, evt) {
		if (--emitter._eventsCount === 0) emitter._events = new Events();
		else delete emitter._events[evt];
	}
	/**
	* Minimal `EventEmitter` interface that is molded against the Node.js
	* `EventEmitter` interface.
	*
	* @constructor
	* @public
	*/
	function EventEmitter() {
		this._events = new Events();
		this._eventsCount = 0;
	}
	/**
	* Return an array listing the events for which the emitter has registered
	* listeners.
	*
	* @returns {Array}
	* @public
	*/
	EventEmitter.prototype.eventNames = function eventNames() {
		var names = [], events, name;
		if (this._eventsCount === 0) return names;
		for (name in events = this._events) if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
		if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
		return names;
	};
	/**
	* Return the listeners registered for a given event.
	*
	* @param {(String|Symbol)} event The event name.
	* @returns {Array} The registered listeners.
	* @public
	*/
	EventEmitter.prototype.listeners = function listeners(event) {
		var evt = prefix ? prefix + event : event, handlers = this._events[evt];
		if (!handlers) return [];
		if (handlers.fn) return [handlers.fn];
		for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
		return ee;
	};
	/**
	* Return the number of listeners listening to a given event.
	*
	* @param {(String|Symbol)} event The event name.
	* @returns {Number} The number of listeners.
	* @public
	*/
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
		var evt = prefix ? prefix + event : event, listeners = this._events[evt];
		if (!listeners) return 0;
		if (listeners.fn) return 1;
		return listeners.length;
	};
	/**
	* Calls each of the listeners registered for a given event.
	*
	* @param {(String|Symbol)} event The event name.
	* @returns {Boolean} `true` if the event had listeners, else `false`.
	* @public
	*/
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
		var evt = prefix ? prefix + event : event;
		if (!this._events[evt]) return false;
		var listeners = this._events[evt], len = arguments.length, args, i;
		if (listeners.fn) {
			if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
			switch (len) {
				case 1: return listeners.fn.call(listeners.context), true;
				case 2: return listeners.fn.call(listeners.context, a1), true;
				case 3: return listeners.fn.call(listeners.context, a1, a2), true;
				case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
				case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
				case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
			}
			for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
			listeners.fn.apply(listeners.context, args);
		} else {
			var length = listeners.length, j;
			for (i = 0; i < length; i++) {
				if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
				switch (len) {
					case 1:
						listeners[i].fn.call(listeners[i].context);
						break;
					case 2:
						listeners[i].fn.call(listeners[i].context, a1);
						break;
					case 3:
						listeners[i].fn.call(listeners[i].context, a1, a2);
						break;
					case 4:
						listeners[i].fn.call(listeners[i].context, a1, a2, a3);
						break;
					default:
						if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
						listeners[i].fn.apply(listeners[i].context, args);
				}
			}
		}
		return true;
	};
	/**
	* Add a listener for a given event.
	*
	* @param {(String|Symbol)} event The event name.
	* @param {Function} fn The listener function.
	* @param {*} [context=this] The context to invoke the listener with.
	* @returns {EventEmitter} `this`.
	* @public
	*/
	EventEmitter.prototype.on = function on(event, fn, context) {
		return addListener(this, event, fn, context, false);
	};
	/**
	* Add a one-time listener for a given event.
	*
	* @param {(String|Symbol)} event The event name.
	* @param {Function} fn The listener function.
	* @param {*} [context=this] The context to invoke the listener with.
	* @returns {EventEmitter} `this`.
	* @public
	*/
	EventEmitter.prototype.once = function once(event, fn, context) {
		return addListener(this, event, fn, context, true);
	};
	/**
	* Remove the listeners of a given event.
	*
	* @param {(String|Symbol)} event The event name.
	* @param {Function} fn Only remove the listeners that match this function.
	* @param {*} context Only remove the listeners that have this context.
	* @param {Boolean} once Only remove one-time listeners.
	* @returns {EventEmitter} `this`.
	* @public
	*/
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
		var evt = prefix ? prefix + event : event;
		if (!this._events[evt]) return this;
		if (!fn) {
			clearEvent(this, evt);
			return this;
		}
		var listeners = this._events[evt];
		if (listeners.fn) {
			if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
		} else {
			for (var i = 0, events = [], length = listeners.length; i < length; i++) if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
			if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
			else clearEvent(this, evt);
		}
		return this;
	};
	/**
	* Remove all listeners, or those of the specified event.
	*
	* @param {(String|Symbol)} [event] The event name.
	* @returns {EventEmitter} `this`.
	* @public
	*/
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
		var evt;
		if (event) {
			evt = prefix ? prefix + event : event;
			if (this._events[evt]) clearEvent(this, evt);
		} else {
			this._events = new Events();
			this._eventsCount = 0;
		}
		return this;
	};
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	EventEmitter.prefixed = prefix;
	EventEmitter.EventEmitter = EventEmitter;
	if ("undefined" !== typeof module) module.exports = EventEmitter;
})))(), 1);
//#endregion
//#region node_modules/@wagmi/core/dist/esm/createEmitter.js
var Emitter = class {
	constructor(uid) {
		Object.defineProperty(this, "uid", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: uid
		});
		Object.defineProperty(this, "_emitter", {
			enumerable: true,
			configurable: true,
			writable: true,
			value: new import_eventemitter3.default()
		});
	}
	on(eventName, fn) {
		this._emitter.on(eventName, fn);
	}
	once(eventName, fn) {
		this._emitter.once(eventName, fn);
	}
	off(eventName, fn) {
		this._emitter.off(eventName, fn);
	}
	emit(eventName, ...params) {
		const data = params[0];
		this._emitter.emit(eventName, {
			uid: this.uid,
			...data
		});
	}
	listenerCount(eventName) {
		return this._emitter.listenerCount(eventName);
	}
};
function createEmitter(uid) {
	return new Emitter(uid);
}
//#endregion
//#region node_modules/@wagmi/core/dist/esm/utils/deserialize.js
function deserialize(value, reviver) {
	return JSON.parse(value, (key, value_) => {
		let value = value_;
		if (value?.__type === "bigint") value = BigInt(value.value);
		if (value?.__type === "Map") value = new Map(value.value);
		return reviver?.(key, value) ?? value;
	});
}
//#endregion
//#region node_modules/@wagmi/core/dist/esm/utils/serialize.js
/**
* Get the reference key for the circular value
*
* @param keys the keys to build the reference key from
* @param cutoff the maximum number of keys to include
* @returns the reference key
*/
function getReferenceKey(keys, cutoff) {
	return keys.slice(0, cutoff).join(".") || ".";
}
/**
* Faster `Array.prototype.indexOf` implementation build for slicing / splicing
*
* @param array the array to match the value in
* @param value the value to match
* @returns the matching index, or -1
*/
function getCutoff(array, value) {
	const { length } = array;
	for (let index = 0; index < length; ++index) if (array[index] === value) return index + 1;
	return 0;
}
/**
* Create a replacer method that handles circular values
*
* @param [replacer] a custom replacer to use for non-circular values
* @param [circularReplacer] a custom replacer to use for circular methods
* @returns the value to stringify
*/
function createReplacer(replacer, circularReplacer) {
	const hasReplacer = typeof replacer === "function";
	const hasCircularReplacer = typeof circularReplacer === "function";
	const cache = [];
	const keys = [];
	return function replace(key, value) {
		if (typeof value === "object") {
			if (cache.length) {
				const thisCutoff = getCutoff(cache, this);
				if (thisCutoff === 0) cache[cache.length] = this;
				else {
					cache.splice(thisCutoff);
					keys.splice(thisCutoff);
				}
				keys[keys.length] = key;
				const valueCutoff = getCutoff(cache, value);
				if (valueCutoff !== 0) return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
			} else {
				cache[0] = value;
				keys[0] = key;
			}
		}
		return hasReplacer ? replacer.call(this, key, value) : value;
	};
}
/**
* Stringifier that handles circular values
*
* Forked from https://github.com/planttheidea/fast-stringify
*
* @param value to stringify
* @param [replacer] a custom replacer function for handling standard values
* @param [indent] the number of spaces to indent the output by
* @param [circularReplacer] a custom replacer function for handling circular values
* @returns the stringified output
*/
function serialize(value, replacer, indent, circularReplacer) {
	return JSON.stringify(value, createReplacer((key, value_) => {
		let value = value_;
		if (typeof value === "bigint") value = {
			__type: "bigint",
			value: value_.toString()
		};
		if (value instanceof Map) value = {
			__type: "Map",
			value: Array.from(value_.entries())
		};
		return replacer?.(key, value) ?? value;
	}, circularReplacer), indent ?? void 0);
}
//#endregion
//#region node_modules/@wagmi/core/dist/esm/createStorage.js
function createStorage(parameters) {
	const { deserialize: deserialize$1 = deserialize, key: prefix = "wagmi", serialize: serialize$1 = serialize, storage = noopStorage } = parameters;
	function unwrap(value) {
		if (value instanceof Promise) return value.then((x) => x).catch(() => null);
		return value;
	}
	return {
		...storage,
		key: prefix,
		async getItem(key, defaultValue) {
			const unwrapped = await unwrap(storage.getItem(`${prefix}.${key}`));
			if (unwrapped) return deserialize$1(unwrapped) ?? null;
			return defaultValue ?? null;
		},
		async setItem(key, value) {
			const storageKey = `${prefix}.${key}`;
			if (value === null) await unwrap(storage.removeItem(storageKey));
			else await unwrap(storage.setItem(storageKey, serialize$1(value)));
		},
		async removeItem(key) {
			await unwrap(storage.removeItem(`${prefix}.${key}`));
		}
	};
}
var noopStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
function getDefaultStorage() {
	const storage = (() => {
		if (typeof window !== "undefined" && window.localStorage) return window.localStorage;
		return noopStorage;
	})();
	return {
		getItem(key) {
			return storage.getItem(key);
		},
		removeItem(key) {
			storage.removeItem(key);
		},
		setItem(key, value) {
			try {
				storage.setItem(key, value);
			} catch {}
		}
	};
}
//#endregion
//#region node_modules/@wagmi/core/dist/esm/utils/uid.js
var size = 256;
var index = size;
var buffer;
function uid(length = 11) {
	if (!buffer || index + length > size * 2) {
		buffer = "";
		index = 0;
		for (let i = 0; i < size; i++) buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
	}
	return buffer.substring(index, index++ + length);
}
//#endregion
//#region node_modules/@wagmi/core/dist/esm/createConfig.js
function createConfig(parameters) {
	const { multiInjectedProviderDiscovery = true, storage = createStorage({ storage: getDefaultStorage() }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
	const mipd = typeof window !== "undefined" && multiInjectedProviderDiscovery ? createStore$1() : void 0;
	const chains = createStore(() => rest.chains);
	const connectors = createStore(() => {
		const collection = [];
		const rdnsSet = /* @__PURE__ */ new Set();
		for (const connectorFns of rest.connectors ?? []) {
			const connector = setup(connectorFns);
			collection.push(connector);
			if (!ssr && connector.rdns) {
				const rdnsValues = typeof connector.rdns === "string" ? [connector.rdns] : connector.rdns;
				for (const rdns of rdnsValues) rdnsSet.add(rdns);
			}
		}
		if (!ssr && mipd) {
			const providers = mipd.getProviders();
			for (const provider of providers) {
				if (rdnsSet.has(provider.info.rdns)) continue;
				collection.push(setup(providerDetailToConnector(provider)));
			}
		}
		return collection;
	});
	function setup(connectorFn) {
		const emitter = createEmitter(uid());
		const connector = {
			...connectorFn({
				emitter,
				chains: chains.getState(),
				storage,
				transports: rest.transports
			}),
			emitter,
			uid: emitter.uid
		};
		emitter.on("connect", connect);
		connector.setup?.();
		return connector;
	}
	function providerDetailToConnector(providerDetail) {
		const { info } = providerDetail;
		const provider = providerDetail.provider;
		return injected({ target: {
			...info,
			id: info.rdns,
			provider
		} });
	}
	const clients = /* @__PURE__ */ new Map();
	function getClient(config = {}) {
		const chainId = config.chainId ?? store.getState().chainId;
		const chain = chains.getState().find((x) => x.id === chainId);
		if (config.chainId && !chain) throw new ChainNotConfiguredError();
		{
			const client = clients.get(store.getState().chainId);
			if (client && !chain) return client;
			if (!chain) throw new ChainNotConfiguredError();
		}
		{
			const client = clients.get(chainId);
			if (client) return client;
		}
		let client;
		if (rest.client) client = rest.client({ chain });
		else {
			const chainId = chain.id;
			const chainIds = chains.getState().map((x) => x.id);
			const properties = {};
			const entries = Object.entries(rest);
			for (const [key, value] of entries) {
				if (key === "chains" || key === "client" || key === "connectors" || key === "transports") continue;
				if (typeof value === "object") {
					if (chainId in value) properties[key] = value[chainId];
					else {
						if (chainIds.some((x) => x in value)) continue;
						properties[key] = value;
					}
				} else properties[key] = value;
			}
			client = createClient({
				...properties,
				chain,
				batch: properties.batch ?? { multicall: true },
				transport: (parameters) => rest.transports[chainId]({
					...parameters,
					connectors
				})
			});
		}
		clients.set(chainId, client);
		return client;
	}
	function getInitialState() {
		return {
			chainId: chains.getState()[0].id,
			connections: /* @__PURE__ */ new Map(),
			current: null,
			status: "disconnected"
		};
	}
	let currentVersion;
	const prefix = "0.0.0-canary-";
	if ("2.22.1".startsWith(prefix)) currentVersion = Number.parseInt(version.replace(prefix, ""), 10);
	else currentVersion = Number.parseInt("2.22.1".split(".")[0] ?? "0", 10);
	const store = createStore(subscribeWithSelector(storage ? persist(getInitialState, {
		migrate(persistedState, version) {
			if (version === currentVersion) return persistedState;
			const initialState = getInitialState();
			const chainId = validatePersistedChainId(persistedState, initialState.chainId);
			return {
				...initialState,
				chainId
			};
		},
		name: "store",
		partialize(state) {
			return {
				connections: {
					__type: "Map",
					value: Array.from(state.connections.entries()).map(([key, connection]) => {
						const { id, name, type, uid } = connection.connector;
						const connector = {
							id,
							name,
							type,
							uid
						};
						return [key, {
							...connection,
							connector
						}];
					})
				},
				chainId: state.chainId,
				current: state.current
			};
		},
		merge(persistedState, currentState) {
			if (typeof persistedState === "object" && persistedState && "status" in persistedState) delete persistedState.status;
			const chainId = validatePersistedChainId(persistedState, currentState.chainId);
			return {
				...currentState,
				...persistedState,
				chainId
			};
		},
		skipHydration: ssr,
		storage,
		version: currentVersion
	}) : getInitialState));
	store.setState(getInitialState());
	function validatePersistedChainId(persistedState, defaultChainId) {
		return persistedState && typeof persistedState === "object" && "chainId" in persistedState && typeof persistedState.chainId === "number" && chains.getState().some((x) => x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
	}
	if (syncConnectedChain) store.subscribe(({ connections, current }) => current ? connections.get(current)?.chainId : void 0, (chainId) => {
		if (!chains.getState().some((x) => x.id === chainId)) return;
		return store.setState((x) => ({
			...x,
			chainId: chainId ?? x.chainId
		}));
	});
	mipd?.subscribe((providerDetails) => {
		const connectorIdSet = /* @__PURE__ */ new Set();
		const connectorRdnsSet = /* @__PURE__ */ new Set();
		for (const connector of connectors.getState()) {
			connectorIdSet.add(connector.id);
			if (connector.rdns) {
				const rdnsValues = typeof connector.rdns === "string" ? [connector.rdns] : connector.rdns;
				for (const rdns of rdnsValues) connectorRdnsSet.add(rdns);
			}
		}
		const newConnectors = [];
		for (const providerDetail of providerDetails) {
			if (connectorRdnsSet.has(providerDetail.info.rdns)) continue;
			const connector = setup(providerDetailToConnector(providerDetail));
			if (connectorIdSet.has(connector.id)) continue;
			newConnectors.push(connector);
		}
		if (storage && !store.persist.hasHydrated()) return;
		connectors.setState((x) => [...x, ...newConnectors], true);
	});
	function change(data) {
		store.setState((x) => {
			const connection = x.connections.get(data.uid);
			if (!connection) return x;
			return {
				...x,
				connections: new Map(x.connections).set(data.uid, {
					accounts: data.accounts ?? connection.accounts,
					chainId: data.chainId ?? connection.chainId,
					connector: connection.connector
				})
			};
		});
	}
	function connect(data) {
		if (store.getState().status === "connecting" || store.getState().status === "reconnecting") return;
		store.setState((x) => {
			const connector = connectors.getState().find((x) => x.uid === data.uid);
			if (!connector) return x;
			if (connector.emitter.listenerCount("connect")) connector.emitter.off("connect", change);
			if (!connector.emitter.listenerCount("change")) connector.emitter.on("change", change);
			if (!connector.emitter.listenerCount("disconnect")) connector.emitter.on("disconnect", disconnect);
			return {
				...x,
				connections: new Map(x.connections).set(data.uid, {
					accounts: data.accounts,
					chainId: data.chainId,
					connector
				}),
				current: data.uid,
				status: "connected"
			};
		});
	}
	function disconnect(data) {
		store.setState((x) => {
			const connection = x.connections.get(data.uid);
			if (connection) {
				const connector = connection.connector;
				if (connector.emitter.listenerCount("change")) connection.connector.emitter.off("change", change);
				if (connector.emitter.listenerCount("disconnect")) connection.connector.emitter.off("disconnect", disconnect);
				if (!connector.emitter.listenerCount("connect")) connection.connector.emitter.on("connect", connect);
			}
			x.connections.delete(data.uid);
			if (x.connections.size === 0) return {
				...x,
				connections: /* @__PURE__ */ new Map(),
				current: null,
				status: "disconnected"
			};
			const nextConnection = x.connections.values().next().value;
			return {
				...x,
				connections: new Map(x.connections),
				current: nextConnection.connector.uid
			};
		});
	}
	return {
		get chains() {
			return chains.getState();
		},
		get connectors() {
			return connectors.getState();
		},
		storage,
		getClient,
		get state() {
			return store.getState();
		},
		setState(value) {
			let newState;
			if (typeof value === "function") newState = value(store.getState());
			else newState = value;
			const initialState = getInitialState();
			if (typeof newState !== "object") newState = initialState;
			if (Object.keys(initialState).some((x) => !(x in newState))) newState = initialState;
			store.setState(newState, true);
		},
		subscribe(selector, listener, options) {
			return store.subscribe(selector, listener, options ? {
				...options,
				fireImmediately: options.emitImmediately
			} : void 0);
		},
		_internal: {
			mipd,
			async revalidate() {
				const state = store.getState();
				const connections = state.connections;
				let current = state.current;
				for (const [, connection] of connections) {
					const connector = connection.connector;
					if (connector.isAuthorized ? await connector.isAuthorized() : false) continue;
					connections.delete(connector.uid);
					if (current === connector.uid) current = null;
				}
				store.setState((x) => ({
					...x,
					connections,
					current
				}));
			},
			store,
			ssr: Boolean(ssr),
			syncConnectedChain,
			transports: rest.transports,
			chains: {
				setState(value) {
					const nextChains = typeof value === "function" ? value(chains.getState()) : value;
					if (nextChains.length === 0) return;
					return chains.setState(nextChains, true);
				},
				subscribe(listener) {
					return chains.subscribe(listener);
				}
			},
			connectors: {
				providerDetailToConnector,
				setup,
				setState(value) {
					return connectors.setState(typeof value === "function" ? value(connectors.getState()) : value, true);
				},
				subscribe(listener) {
					return connectors.subscribe(listener);
				}
			},
			events: {
				change,
				connect,
				disconnect
			}
		}
	};
}
//#endregion
export { createConfig as t };
