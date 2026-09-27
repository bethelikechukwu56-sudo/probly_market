import { a as __require, n as __esmMin, o as __toCommonJS, r as __exportAll, t as __commonJSMin } from "../../_runtime.mjs";
import { B as formatJsonRpcResult, Et as require_cjs, F as isJsonRpcRequest, I as isJsonRpcResponse, L as isJsonRpcResult, M as init_esm, O as index_es_exports$3, P as isJsonRpcError, R as formatJsonRpcError, T as init_index_es$2, U as payloadId, V as getBigIntRpcId, dt as index_es_exports$1, ft as init_index_es$1, j as esm_exports, k as init_index_es$3, lt as E$1, mt as y, n as init_core, pt as k, t as core_exports, ut as import_pino, w as index_es_exports$2, z as formatJsonRpcRequest } from "../@reown/appkit+[...].mjs";
import { $ as init_index_es$6, A as Nt, B as ba, C as Et$1, D as Ji, E as Io, F as Ra, G as fs$1, H as ca, I as Sa, J as ha, K as ga, L as Si, M as Oe$1, N as Oi, O as Ne, P as Pc, Q as index_es_exports$4, R as Xc, S as Ei, T as Ii, U as dr, V as bi, W as ds, X as hs, Y as hr, Z as ht$1, _ as init_index_es$5, _t as xi, a as Xo, at as oi, b as De$1, c as init_index_es$4, ct as pt$1, d as sr, dt as ua, et as is, f as tr, ft as va, g as V, gt as xe, h as J$1, ht as xa, i as Q, it as nt, j as Oa, k as No, l as ir, lt as qt, m as zi, mt as wa, n as G, nt as ls, o as Y, ot as pa, pt as vi, q as gi, r as M, rt as ma, s as er, st as pe, t as C$1, tt as kc, u as re, ut as se, v as Ai, vt as ya, w as Ia, x as Ea, y as Bo, z as aa } from "./core+[...].mjs";
import n, { EventEmitter } from "events";
//#region node_modules/@walletconnect/sign-client/dist/index.es.js
var index_es_exports = /* @__PURE__ */ __exportAll({
	AUTH_CONTEXT: () => wt,
	AUTH_KEYS_CONTEXT: () => mt,
	AUTH_PAIRING_TOPIC_CONTEXT: () => _t,
	AUTH_PROTOCOL: () => "wc",
	AUTH_PUBLIC_KEY_NAME: () => ce,
	AUTH_REQUEST_CONTEXT: () => Et,
	AUTH_STORAGE_PREFIX: () => ae,
	AUTH_VERSION: () => Rs,
	ENGINE_CONTEXT: () => dt,
	ENGINE_QUEUE_STATES: () => $,
	ENGINE_RPC_OPTS: () => N,
	HISTORY_CONTEXT: () => Es,
	HISTORY_EVENTS: () => _s,
	HISTORY_STORAGE_VERSION: () => "0.3",
	METHODS_TO_VERIFY: () => gt,
	PROPOSAL_CONTEXT: () => pt,
	PROPOSAL_EXPIRY: () => Ss,
	PROPOSAL_EXPIRY_MESSAGE: () => $e,
	REQUEST_CONTEXT: () => ut,
	SESSION_CONTEXT: () => ht,
	SESSION_EXPIRY: () => J,
	SESSION_REQUEST_EXPIRY_BOUNDARIES: () => _e,
	SIGN_CLIENT_CONTEXT: () => ke,
	SIGN_CLIENT_DEFAULT: () => me,
	SIGN_CLIENT_EVENTS: () => ws,
	SIGN_CLIENT_PROTOCOL: () => "wc",
	SIGN_CLIENT_STORAGE_OPTIONS: () => ms,
	SIGN_CLIENT_STORAGE_PREFIX: () => we,
	SIGN_CLIENT_VERSION: () => 2,
	SessionStore: () => $s,
	SignClient: () => Ks,
	TVF_METHODS: () => Ke,
	WALLETCONNECT_DEEPLINK_CHOICE: () => Me,
	default: () => Ee
}), import_cjs, ke, we, me, ws, ms, Me, _s, Es, pt, Ss, $e, ht, J, dt, N, _e, $, Ke, ut, gt, Rs, wt, mt, _t, Et, ae, ce, vs, Is, Ts, ft, qs, Ps, Ue, v, b, c, Ns, Os, St, bs, As, xs, Cs, Vs, Ds, Ge, Ls, ks, Ms, E, Ee, $s, Ks;
var init_index_es = __esmMin((() => {
	init_index_es$4();
	init_index_es$1();
	init_index_es$5();
	import_cjs = require_cjs();
	init_index_es$6();
	init_esm();
	ke = "client";
	we = `wc@2:${ke}:`;
	me = {
		name: ke,
		logger: "error",
		controller: !1,
		relayUrl: "wss://relay.walletconnect.org"
	};
	ws = {
		session_proposal: "session_proposal",
		session_update: "session_update",
		session_extend: "session_extend",
		session_ping: "session_ping",
		session_delete: "session_delete",
		session_expire: "session_expire",
		session_request: "session_request",
		session_request_sent: "session_request_sent",
		session_event: "session_event",
		proposal_expire: "proposal_expire",
		session_authenticate: "session_authenticate",
		session_request_expire: "session_request_expire",
		session_connect: "session_connect"
	};
	ms = { database: ":memory:" };
	Me = "WALLETCONNECT_DEEPLINK_CHOICE";
	_s = {
		created: "history_created",
		updated: "history_updated",
		deleted: "history_deleted",
		sync: "history_sync"
	};
	Es = "history";
	pt = "proposal";
	Ss = import_cjs.THIRTY_DAYS;
	$e = "Proposal expired";
	ht = "session";
	J = import_cjs.SEVEN_DAYS;
	dt = "engine";
	N = {
		wc_sessionPropose: {
			req: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !0,
				tag: 1100
			},
			res: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1101
			},
			reject: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1120
			},
			autoReject: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1121
			}
		},
		wc_sessionSettle: {
			req: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1102
			},
			res: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1103
			}
		},
		wc_sessionUpdate: {
			req: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1104
			},
			res: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1105
			}
		},
		wc_sessionExtend: {
			req: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1106
			},
			res: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1107
			}
		},
		wc_sessionRequest: {
			req: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !0,
				tag: 1108
			},
			res: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1109
			}
		},
		wc_sessionEvent: {
			req: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !0,
				tag: 1110
			},
			res: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1111
			}
		},
		wc_sessionDelete: {
			req: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1112
			},
			res: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1113
			}
		},
		wc_sessionPing: {
			req: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1114
			},
			res: {
				ttl: import_cjs.ONE_DAY,
				prompt: !1,
				tag: 1115
			}
		},
		wc_sessionAuthenticate: {
			req: {
				ttl: import_cjs.ONE_HOUR,
				prompt: !0,
				tag: 1116
			},
			res: {
				ttl: import_cjs.ONE_HOUR,
				prompt: !1,
				tag: 1117
			},
			reject: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1118
			},
			autoReject: {
				ttl: import_cjs.FIVE_MINUTES,
				prompt: !1,
				tag: 1119
			}
		}
	};
	_e = {
		min: import_cjs.FIVE_MINUTES,
		max: import_cjs.SEVEN_DAYS
	};
	$ = {
		idle: "IDLE",
		active: "ACTIVE"
	};
	Ke = {
		eth_sendTransaction: { key: "" },
		eth_sendRawTransaction: { key: "" },
		wallet_sendCalls: { key: "" },
		solana_signTransaction: { key: "signature" },
		solana_signAllTransactions: { key: "transactions" },
		solana_signAndSendTransaction: { key: "signature" }
	};
	ut = "request";
	gt = [
		"wc_sessionPropose",
		"wc_sessionRequest",
		"wc_authRequest",
		"wc_sessionAuthenticate"
	];
	Rs = 1.5;
	wt = "auth";
	mt = "authKeys";
	_t = "pairingTopics";
	Et = "requests";
	ae = `wc@1.5:${wt}:`;
	ce = `${ae}:PUB_KEY`;
	vs = Object.defineProperty;
	Is = Object.defineProperties;
	Ts = Object.getOwnPropertyDescriptors;
	ft = Object.getOwnPropertySymbols;
	qs = Object.prototype.hasOwnProperty;
	Ps = Object.prototype.propertyIsEnumerable;
	Ue = (S, n, e) => n in S ? vs(S, n, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: e
	}) : S[n] = e;
	v = (S, n) => {
		for (var e in n || (n = {})) qs.call(n, e) && Ue(S, e, n[e]);
		if (ft) for (var e of ft(n)) Ps.call(n, e) && Ue(S, e, n[e]);
		return S;
	};
	b = (S, n) => Is(S, Ts(n));
	c = (S, n, e) => Ue(S, typeof n != "symbol" ? n + "" : n, e);
	Ns = class extends V {
		constructor(n$1) {
			super(n$1), c(this, "name", dt), c(this, "events", new n()), c(this, "initialized", !1), c(this, "requestQueue", {
				state: $.idle,
				queue: []
			}), c(this, "sessionRequestQueue", {
				state: $.idle,
				queue: []
			}), c(this, "requestQueueDelay", import_cjs.ONE_SECOND), c(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c(this, "recentlyDeletedLimit", 200), c(this, "relayMessageCache", []), c(this, "pendingSessions", /* @__PURE__ */ new Map()), c(this, "init", async () => {
				this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N) }), this.initialized = !0, setTimeout(async () => {
					await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
				}, (0, import_cjs.toMiliseconds)(this.requestQueueDelay)));
			}), c(this, "connect", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
				const t = b(v({}, e), {
					requiredNamespaces: e.requiredNamespaces || {},
					optionalNamespaces: e.optionalNamespaces || {}
				});
				await this.isValidConnect(t), t.optionalNamespaces = aa(t.requiredNamespaces, t.optionalNamespaces), t.requiredNamespaces = {};
				const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: r, sessionProperties: o, scopedProperties: a, relays: l } = t;
				let p = s, h, u = !1;
				try {
					if (p) {
						const T = this.client.core.pairing.pairings.get(p);
						this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u = T.active;
					}
				} catch (T) {
					throw this.client.logger.error(`connect() -> pairing.get(${p}) failed`), T;
				}
				if (!p || !u) {
					const { topic: T, uri: K } = await this.client.core.pairing.create();
					p = T, h = K;
				}
				if (!p) {
					const { message: T } = ht$1("NO_MATCHING_KEY", `connect() pairing topic: ${p}`);
					throw new Error(T);
				}
				const d = await this.client.core.crypto.generateKeyPair(), w = N.wc_sessionPropose.req.ttl || import_cjs.FIVE_MINUTES, m = Ei(w), f = b(v(v({
					requiredNamespaces: i,
					optionalNamespaces: r,
					relays: l ?? [{ protocol: "irn" }],
					proposer: {
						publicKey: d,
						metadata: this.client.metadata
					},
					expiryTimestamp: m,
					pairingTopic: p
				}, o && { sessionProperties: o }), a && { scopedProperties: a }), { id: payloadId() }), _ = xi("session_connect", f.id), { reject: g, resolve: A, done: D } = gi(w, $e), I = ({ id: T }) => {
					T === f.id && (this.client.events.off("proposal_expire", I), this.pendingSessions.delete(f.id), this.events.emit(_, { error: {
						message: "Proposal expired",
						code: 0
					} }));
				};
				return this.client.events.on("proposal_expire", I), this.events.once(_, ({ error: T, session: K }) => {
					this.client.events.off("proposal_expire", I), T ? g(T) : K && A(K);
				}), await this.sendRequest({
					topic: p,
					method: "wc_sessionPropose",
					params: f,
					throwOnFailedPublish: !0,
					clientRpcId: f.id
				}), await this.setProposal(f.id, f), {
					uri: h,
					approval: D
				};
			}), c(this, "pair", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
				try {
					return await this.client.core.pairing.pair(e);
				} catch (t) {
					throw this.client.logger.error("pair() failed"), t;
				}
			}), c(this, "approve", async (e) => {
				var t, s, i;
				const r = this.client.core.eventClient.createEvent({ properties: {
					topic: (t = e?.id) == null ? void 0 : t.toString(),
					trace: [er.session_approve_started]
				} });
				try {
					this.isInitialized(), await this.confirmOnlineStateOrThrow();
				} catch (q) {
					throw r.setError(tr.no_internet_connection), q;
				}
				try {
					await this.isValidProposalId(e?.id);
				} catch (q) {
					throw this.client.logger.error(`approve() -> proposal.get(${e?.id}) failed`), r.setError(tr.proposal_not_found), q;
				}
				try {
					await this.isValidApprove(e);
				} catch (q) {
					throw this.client.logger.error("approve() -> isValidApprove() failed"), r.setError(tr.session_approve_namespace_validation_failure), q;
				}
				const { id: o, relayProtocol: a, namespaces: l, sessionProperties: p, scopedProperties: h, sessionConfig: u } = e, d = this.client.proposal.get(o);
				this.client.core.eventClient.deleteEvent({ eventId: r.eventId });
				const { pairingTopic: w, proposer: m, requiredNamespaces: f, optionalNamespaces: _ } = d;
				let g = (s = this.client.core.eventClient) == null ? void 0 : s.getEvent({ topic: w });
				g || (g = (i = this.client.core.eventClient) == null ? void 0 : i.createEvent({
					type: er.session_approve_started,
					properties: {
						topic: w,
						trace: [er.session_approve_started, er.session_namespaces_validation_success]
					}
				}));
				const A = await this.client.core.crypto.generateKeyPair(), D = m.publicKey, I = await this.client.core.crypto.generateSharedKey(A, D), T = v(v(v({
					relay: { protocol: a ?? "irn" },
					namespaces: l,
					controller: {
						publicKey: A,
						metadata: this.client.metadata
					},
					expiry: Ei(J)
				}, p && { sessionProperties: p }), h && { scopedProperties: h }), u && { sessionConfig: u }), K = Q.relay;
				g.addTrace(er.subscribing_session_topic);
				try {
					await this.client.core.relayer.subscribe(I, { transportType: K });
				} catch (q) {
					throw g.setError(tr.subscribe_session_topic_failure), q;
				}
				g.addTrace(er.subscribe_session_topic_success);
				const fe = b(v({}, T), {
					topic: I,
					requiredNamespaces: f,
					optionalNamespaces: _,
					pairingTopic: w,
					acknowledged: !1,
					self: T.controller,
					peer: {
						publicKey: m.publicKey,
						metadata: m.metadata
					},
					controller: A,
					transportType: Q.relay
				});
				await this.client.session.set(I, fe), g.addTrace(er.store_session);
				try {
					g.addTrace(er.publishing_session_settle), await this.sendRequest({
						topic: I,
						method: "wc_sessionSettle",
						params: T,
						throwOnFailedPublish: !0
					}).catch((q) => {
						throw g?.setError(tr.session_settle_publish_failure), q;
					}), g.addTrace(er.session_settle_publish_success), g.addTrace(er.publishing_session_approve), await this.sendResult({
						id: o,
						topic: w,
						result: {
							relay: { protocol: a ?? "irn" },
							responderPublicKey: A
						},
						throwOnFailedPublish: !0
					}).catch((q) => {
						throw g?.setError(tr.session_approve_publish_failure), q;
					}), g.addTrace(er.session_approve_publish_success);
				} catch (q) {
					throw this.client.logger.error(q), this.client.session.delete(I, Nt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(I), q;
				}
				return this.client.core.eventClient.deleteEvent({ eventId: g.eventId }), await this.client.core.pairing.updateMetadata({
					topic: w,
					metadata: m.metadata
				}), await this.client.proposal.delete(o, Nt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: w }), await this.setExpiry(I, Ei(J)), {
					topic: I,
					acknowledged: () => Promise.resolve(this.client.session.get(I))
				};
			}), c(this, "reject", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
				try {
					await this.isValidReject(e);
				} catch (r) {
					throw this.client.logger.error("reject() -> isValidReject() failed"), r;
				}
				const { id: t, reason: s } = e;
				let i;
				try {
					i = this.client.proposal.get(t).pairingTopic;
				} catch (r) {
					throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r;
				}
				i && (await this.sendError({
					id: t,
					topic: i,
					error: s,
					rpcOpts: N.wc_sessionPropose.reject
				}), await this.client.proposal.delete(t, Nt("USER_DISCONNECTED")));
			}), c(this, "update", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
				try {
					await this.isValidUpdate(e);
				} catch (h) {
					throw this.client.logger.error("update() -> isValidUpdate() failed"), h;
				}
				const { topic: t, namespaces: s } = e, { done: i, resolve: r, reject: o } = gi(), a = payloadId(), l = getBigIntRpcId().toString(), p = this.client.session.get(t).namespaces;
				return this.events.once(xi("session_update", a), ({ error: h }) => {
					h ? o(h) : r();
				}), await this.client.session.update(t, { namespaces: s }), await this.sendRequest({
					topic: t,
					method: "wc_sessionUpdate",
					params: { namespaces: s },
					throwOnFailedPublish: !0,
					clientRpcId: a,
					relayRpcId: l
				}).catch((h) => {
					this.client.logger.error(h), this.client.session.update(t, { namespaces: p }), o(h);
				}), { acknowledged: i };
			}), c(this, "extend", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
				try {
					await this.isValidExtend(e);
				} catch (a) {
					throw this.client.logger.error("extend() -> isValidExtend() failed"), a;
				}
				const { topic: t } = e, s = payloadId(), { done: i, resolve: r, reject: o } = gi();
				return this.events.once(xi("session_extend", s), ({ error: a }) => {
					a ? o(a) : r();
				}), await this.setExpiry(t, Ei(J)), this.sendRequest({
					topic: t,
					method: "wc_sessionExtend",
					params: {},
					clientRpcId: s,
					throwOnFailedPublish: !0
				}).catch((a) => {
					o(a);
				}), { acknowledged: i };
			}), c(this, "request", async (e) => {
				this.isInitialized();
				try {
					await this.isValidRequest(e);
				} catch (_) {
					throw this.client.logger.error("request() -> isValidRequest() failed"), _;
				}
				const { chainId: t, request: s, topic: i, expiry: r = N.wc_sessionRequest.req.ttl } = e, o = this.client.session.get(i);
				o?.transportType === Q.relay && await this.confirmOnlineStateOrThrow();
				const a = payloadId(), l = getBigIntRpcId().toString(), { done: p, resolve: h, reject: u } = gi(r, "Request expired. Please try again.");
				this.events.once(xi("session_request", a), ({ error: _, result: g }) => {
					_ ? u(_) : h(g);
				});
				const d = "wc_sessionRequest", w = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
				if (w) return await this.sendRequest({
					clientRpcId: a,
					relayRpcId: l,
					topic: i,
					method: d,
					params: {
						request: b(v({}, s), { expiryTimestamp: Ei(r) }),
						chainId: t
					},
					expiry: r,
					throwOnFailedPublish: !0,
					appLink: w
				}).catch((_) => u(_)), this.client.events.emit("session_request_sent", {
					topic: i,
					request: s,
					chainId: t,
					id: a
				}), await p();
				const m = {
					request: b(v({}, s), { expiryTimestamp: Ei(r) }),
					chainId: t
				}, f = this.shouldSetTVF(d, m);
				return await Promise.all([
					new Promise(async (_) => {
						await this.sendRequest(v({
							clientRpcId: a,
							relayRpcId: l,
							topic: i,
							method: d,
							params: m,
							expiry: r,
							throwOnFailedPublish: !0
						}, f && { tvf: this.getTVFParams(a, m) })).catch((g) => u(g)), this.client.events.emit("session_request_sent", {
							topic: i,
							request: s,
							chainId: t,
							id: a
						}), _();
					}),
					new Promise(async (_) => {
						var g;
						if (!((g = o.sessionConfig) != null && g.disableDeepLink)) {
							const A = await Oi(this.client.core.storage, Me);
							await Si({
								id: a,
								topic: i,
								wcDeepLink: A
							});
						}
						_();
					}),
					p()
				]).then((_) => _[2]);
			}), c(this, "respond", async (e) => {
				this.isInitialized(), await this.isValidRespond(e);
				const { topic: t, response: s } = e, { id: i } = s, r = this.client.session.get(t);
				r.transportType === Q.relay && await this.confirmOnlineStateOrThrow();
				const o = this.getAppLinkIfEnabled(r.peer.metadata, r.transportType);
				isJsonRpcResult(s) ? await this.sendResult({
					id: i,
					topic: t,
					result: s.result,
					throwOnFailedPublish: !0,
					appLink: o
				}) : isJsonRpcError(s) && await this.sendError({
					id: i,
					topic: t,
					error: s.error,
					appLink: o
				}), this.cleanupAfterResponse(e);
			}), c(this, "ping", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow();
				try {
					await this.isValidPing(e);
				} catch (s) {
					throw this.client.logger.error("ping() -> isValidPing() failed"), s;
				}
				const { topic: t } = e;
				if (this.client.session.keys.includes(t)) {
					const s = payloadId(), i = getBigIntRpcId().toString(), { done: r, resolve: o, reject: a } = gi();
					this.events.once(xi("session_ping", s), ({ error: l }) => {
						l ? a(l) : o();
					}), await Promise.all([this.sendRequest({
						topic: t,
						method: "wc_sessionPing",
						params: {},
						throwOnFailedPublish: !0,
						clientRpcId: s,
						relayRpcId: i
					}), r()]);
				} else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
			}), c(this, "emit", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e);
				const { topic: t, event: s, chainId: i } = e, r = getBigIntRpcId().toString(), o = payloadId();
				await this.sendRequest({
					topic: t,
					method: "wc_sessionEvent",
					params: {
						event: s,
						chainId: i
					},
					throwOnFailedPublish: !0,
					relayRpcId: r,
					clientRpcId: o
				});
			}), c(this, "disconnect", async (e) => {
				this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e);
				const { topic: t } = e;
				if (this.client.session.keys.includes(t)) await this.sendRequest({
					topic: t,
					method: "wc_sessionDelete",
					params: Nt("USER_DISCONNECTED"),
					throwOnFailedPublish: !0
				}), await this.deleteSession({
					topic: t,
					emitEvent: !1
				});
				else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
				else {
					const { message: s } = ht$1("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
					throw new Error(s);
				}
			}), c(this, "find", (e) => (this.isInitialized(), this.client.session.getAll().filter((t) => ua(t, e)))), c(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c(this, "authenticate", async (e, t) => {
				var s;
				this.isInitialized(), this.isValidAuthenticate(e);
				const i = t && this.client.core.linkModeSupportedApps.includes(t) && ((s = this.client.metadata.redirect) == null ? void 0 : s.linkMode), r = i ? Q.link_mode : Q.relay;
				r === Q.relay && await this.confirmOnlineStateOrThrow();
				const { chains: o, statement: a = "", uri: l, domain: p, nonce: h, type: u, exp: d, nbf: w, methods: m = [], expiry: f } = e, _ = [...e.resources || []], { topic: g, uri: A } = await this.client.core.pairing.create({
					methods: ["wc_sessionAuthenticate"],
					transportType: r
				});
				this.client.logger.info({
					message: "Generated new pairing",
					pairing: {
						topic: g,
						uri: A
					}
				});
				const D = await this.client.core.crypto.generateKeyPair(), I = Pc(D);
				if (await Promise.all([this.client.auth.authKeys.set(ce, {
					responseTopic: I,
					publicKey: D
				}), this.client.auth.pairingTopics.set(I, {
					topic: I,
					pairingTopic: g
				})]), await this.client.core.relayer.subscribe(I, { transportType: r }), this.client.logger.info(`sending request to new pairing topic: ${g}`), m.length > 0) {
					const { namespace: x } = Ne(o[0]);
					let L = fs$1(x, "request", m);
					pe(_) && (L = ls(L, _.pop())), _.push(L);
				}
				const T = f && f > N.wc_sessionAuthenticate.req.ttl ? f : N.wc_sessionAuthenticate.req.ttl, K = {
					authPayload: {
						type: u ?? "caip122",
						chains: o,
						statement: a,
						aud: l,
						domain: p,
						version: "1",
						nonce: h,
						iat: (/* @__PURE__ */ new Date()).toISOString(),
						exp: d,
						nbf: w,
						resources: _
					},
					requester: {
						publicKey: D,
						metadata: this.client.metadata
					},
					expiryTimestamp: Ei(T)
				}, q = {
					requiredNamespaces: {},
					optionalNamespaces: { eip155: {
						chains: o,
						methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m])],
						events: ["chainChanged", "accountsChanged"]
					} },
					relays: [{ protocol: "irn" }],
					pairingTopic: g,
					proposer: {
						publicKey: D,
						metadata: this.client.metadata
					},
					expiryTimestamp: Ei(N.wc_sessionPropose.req.ttl),
					id: payloadId()
				}, { done: Rt, resolve: je, reject: Se } = gi(T, "Request expired"), te = payloadId(), le = xi("session_connect", q.id), Re = xi("session_request", te), pe$1 = async ({ error: x, session: L }) => {
					this.events.off(Re, ve), x ? Se(x) : L && je({ session: L });
				}, ve = async (x) => {
					var L, Fe, Qe;
					if (await this.deletePendingAuthRequest(te, {
						message: "fulfilled",
						code: 0
					}), x.error) {
						const ie = Nt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
						return x.error.code === ie.code ? void 0 : (this.events.off(le, pe$1), Se(x.error.message));
					}
					await this.deleteProposal(q.id), this.events.off(le, pe$1);
					const { cacaos: He, responder: Q$1 } = x.result, Te = [], ze = [];
					for (const ie of He) {
						await is({
							cacao: ie,
							projectId: this.client.core.projectId
						}) || (this.client.logger.error(ie, "Signature verification failed"), Se(Nt("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
						const { p: qe } = ie, Pe = pe(qe.resources), Ye = [dr(qe.iss)], vt = De$1(qe.iss);
						if (Pe) {
							const Ne = ds(Pe), It = hs(Pe);
							Te.push(...Ne), Ye.push(...It);
						}
						for (const Ne of Ye) ze.push(`${Ne}:${vt}`);
					}
					const se = await this.client.core.crypto.generateSharedKey(D, Q$1.publicKey);
					let he;
					Te.length > 0 && (he = {
						topic: se,
						acknowledged: !0,
						self: {
							publicKey: D,
							metadata: this.client.metadata
						},
						peer: Q$1,
						controller: Q$1.publicKey,
						expiry: Ei(J),
						requiredNamespaces: {},
						optionalNamespaces: {},
						relay: { protocol: "irn" },
						pairingTopic: g,
						namespaces: ca([...new Set(Te)], [...new Set(ze)]),
						transportType: r
					}, await this.client.core.relayer.subscribe(se, { transportType: r }), await this.client.session.set(se, he), g && await this.client.core.pairing.updateMetadata({
						topic: g,
						metadata: Q$1.metadata
					}), he = this.client.session.get(se)), (L = this.client.metadata.redirect) != null && L.linkMode && (Fe = Q$1.metadata.redirect) != null && Fe.linkMode && (Qe = Q$1.metadata.redirect) != null && Qe.universal && t && (this.client.core.addLinkModeSupportedApp(Q$1.metadata.redirect.universal), this.client.session.update(se, { transportType: Q.link_mode })), je({
						auths: He,
						session: he
					});
				};
				this.events.once(le, pe$1), this.events.once(Re, ve);
				let Ie;
				try {
					if (i) {
						const x = formatJsonRpcRequest("wc_sessionAuthenticate", K, te);
						this.client.core.history.set(g, x);
						const L = await this.client.core.crypto.encode("", x, {
							type: 2,
							encoding: xe
						});
						Ie = Xc(t, g, L);
					} else await Promise.all([this.sendRequest({
						topic: g,
						method: "wc_sessionAuthenticate",
						params: K,
						expiry: e.expiry,
						throwOnFailedPublish: !0,
						clientRpcId: te
					}), this.sendRequest({
						topic: g,
						method: "wc_sessionPropose",
						params: q,
						expiry: N.wc_sessionPropose.req.ttl,
						throwOnFailedPublish: !0,
						clientRpcId: q.id
					})]);
				} catch (x) {
					throw this.events.off(le, pe$1), this.events.off(Re, ve), x;
				}
				return await this.setProposal(q.id, q), await this.setAuthRequest(te, {
					request: b(v({}, K), { verifyContext: {} }),
					pairingTopic: g,
					transportType: r
				}), {
					uri: Ie ?? A,
					response: Rt
				};
			}), c(this, "approveSessionAuthenticate", async (e) => {
				const { id: t, auths: s } = e, i = this.client.core.eventClient.createEvent({ properties: {
					topic: t.toString(),
					trace: [ir.authenticated_session_approve_started]
				} });
				try {
					this.isInitialized();
				} catch (f) {
					throw i.setError(sr.no_internet_connection), f;
				}
				const r = this.getPendingAuthRequest(t);
				if (!r) throw i.setError(sr.authenticated_session_pending_request_not_found), /* @__PURE__ */ new Error(`Could not find pending auth request with id ${t}`);
				const o = r.transportType || Q.relay;
				o === Q.relay && await this.confirmOnlineStateOrThrow();
				const a = r.requester.publicKey, l = await this.client.core.crypto.generateKeyPair(), p = Pc(a), h = {
					type: 1,
					receiverPublicKey: a,
					senderPublicKey: l
				}, u = [], d = [];
				for (const f of s) {
					if (!await is({
						cacao: f,
						projectId: this.client.core.projectId
					})) {
						i.setError(sr.invalid_cacao);
						const I = Nt("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
						throw await this.sendError({
							id: t,
							topic: p,
							error: I,
							encodeOpts: h
						}), new Error(I.message);
					}
					i.addTrace(ir.cacaos_verified);
					const { p: _ } = f, g = pe(_.resources), A = [dr(_.iss)], D = De$1(_.iss);
					if (g) {
						const I = ds(g), T = hs(g);
						u.push(...I), A.push(...T);
					}
					for (const I of A) d.push(`${I}:${D}`);
				}
				const w = await this.client.core.crypto.generateSharedKey(l, a);
				i.addTrace(ir.create_authenticated_session_topic);
				let m;
				if (u?.length > 0) {
					m = {
						topic: w,
						acknowledged: !0,
						self: {
							publicKey: l,
							metadata: this.client.metadata
						},
						peer: {
							publicKey: a,
							metadata: r.requester.metadata
						},
						controller: a,
						expiry: Ei(J),
						authentication: s,
						requiredNamespaces: {},
						optionalNamespaces: {},
						relay: { protocol: "irn" },
						pairingTopic: r.pairingTopic,
						namespaces: ca([...new Set(u)], [...new Set(d)]),
						transportType: o
					}, i.addTrace(ir.subscribing_authenticated_session_topic);
					try {
						await this.client.core.relayer.subscribe(w, { transportType: o });
					} catch (f) {
						throw i.setError(sr.subscribe_authenticated_session_topic_failure), f;
					}
					i.addTrace(ir.subscribe_authenticated_session_topic_success), await this.client.session.set(w, m), i.addTrace(ir.store_authenticated_session), await this.client.core.pairing.updateMetadata({
						topic: r.pairingTopic,
						metadata: r.requester.metadata
					});
				}
				i.addTrace(ir.publishing_authenticated_session_approve);
				try {
					await this.sendResult({
						topic: p,
						id: t,
						result: {
							cacaos: s,
							responder: {
								publicKey: l,
								metadata: this.client.metadata
							}
						},
						encodeOpts: h,
						throwOnFailedPublish: !0,
						appLink: this.getAppLinkIfEnabled(r.requester.metadata, o)
					});
				} catch (f) {
					throw i.setError(sr.authenticated_session_approve_publish_failure), f;
				}
				return await this.client.auth.requests.delete(t, {
					message: "fulfilled",
					code: 0
				}), await this.client.core.pairing.activate({ topic: r.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i.eventId }), { session: m };
			}), c(this, "rejectSessionAuthenticate", async (e) => {
				this.isInitialized();
				const { id: t, reason: s } = e, i = this.getPendingAuthRequest(t);
				if (!i) throw new Error(`Could not find pending auth request with id ${t}`);
				i.transportType === Q.relay && await this.confirmOnlineStateOrThrow();
				const r = i.requester.publicKey, o = await this.client.core.crypto.generateKeyPair(), a = Pc(r), l = {
					type: 1,
					receiverPublicKey: r,
					senderPublicKey: o
				};
				await this.sendError({
					id: t,
					topic: a,
					error: s,
					encodeOpts: l,
					rpcOpts: N.wc_sessionAuthenticate.reject,
					appLink: this.getAppLinkIfEnabled(i.requester.metadata, i.transportType)
				}), await this.client.auth.requests.delete(t, {
					message: "rejected",
					code: 0
				}), await this.client.proposal.delete(t, Nt("USER_DISCONNECTED"));
			}), c(this, "formatAuthMessage", (e) => {
				this.isInitialized();
				const { request: t, iss: s } = e;
				return hr(t, s);
			}), c(this, "processRelayMessageCache", () => {
				setTimeout(async () => {
					if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0;) try {
						const e = this.relayMessageCache.shift();
						e && await this.onRelayMessage(e);
					} catch (e) {
						this.client.logger.error(e);
					}
				}, 50);
			}), c(this, "cleanupDuplicatePairings", async (e) => {
				if (e.pairingTopic) try {
					const t = this.client.core.pairing.pairings.get(e.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i) => {
						var r, o;
						return ((r = i.peerMetadata) == null ? void 0 : r.url) && ((o = i.peerMetadata) == null ? void 0 : o.url) === e.peer.metadata.url && i.topic && i.topic !== t.topic;
					});
					if (s.length === 0) return;
					this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i) => this.client.core.pairing.disconnect({ topic: i.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
				} catch (t) {
					this.client.logger.error(t);
				}
			}), c(this, "deleteSession", async (e) => {
				var t;
				const { topic: s, expirerHasDeleted: i = !1, emitEvent: r = !0, id: o = 0 } = e, { self: a } = this.client.session.get(s);
				await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, Nt("USER_DISCONNECTED")), this.addToRecentlyDeleted(s, "session"), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), i || this.client.core.expirer.del(s), this.client.core.storage.removeItem(Me).catch((l) => this.client.logger.warn(l)), this.getPendingSessionRequests().forEach((l) => {
					l.topic === s && this.deletePendingSessionRequest(l.id, Nt("USER_DISCONNECTED"));
				}), s === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = $.idle), r && this.client.events.emit("session_delete", {
					id: o,
					topic: s
				});
			}), c(this, "deleteProposal", async (e, t) => {
				if (t) try {
					const s = this.client.proposal.get(e);
					this.client.core.eventClient.getEvent({ topic: s.pairingTopic })?.setError(tr.proposal_expired);
				} catch {}
				await Promise.all([this.client.proposal.delete(e, Nt("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal");
			}), c(this, "deletePendingSessionRequest", async (e, t, s = !1) => {
				await Promise.all([this.client.pendingRequest.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== e), s && (this.sessionRequestQueue.state = $.idle, this.client.events.emit("session_request_expire", { id: e }));
			}), c(this, "deletePendingAuthRequest", async (e, t, s = !1) => {
				await Promise.all([this.client.auth.requests.delete(e, t), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
			}), c(this, "setExpiry", async (e, t) => {
				this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, { expiry: t }));
			}), c(this, "setProposal", async (e, t) => {
				this.client.core.expirer.set(e, Ei(N.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t);
			}), c(this, "setAuthRequest", async (e, t) => {
				const { request: s, pairingTopic: i, transportType: r = Q.relay } = t;
				this.client.core.expirer.set(e, s.expiryTimestamp), await this.client.auth.requests.set(e, {
					authPayload: s.authPayload,
					requester: s.requester,
					expiryTimestamp: s.expiryTimestamp,
					id: e,
					pairingTopic: i,
					verifyContext: s.verifyContext,
					transportType: r
				});
			}), c(this, "setPendingSessionRequest", async (e) => {
				const { id: t, topic: s, params: i, verifyContext: r } = e, o = i.request.expiryTimestamp || Ei(N.wc_sessionRequest.req.ttl);
				this.client.core.expirer.set(t, o), await this.client.pendingRequest.set(t, {
					id: t,
					topic: s,
					params: i,
					verifyContext: r
				});
			}), c(this, "sendRequest", async (e) => {
				const { topic: t, method: s, params: i, expiry: r, relayRpcId: o, clientRpcId: a, throwOnFailedPublish: l, appLink: p, tvf: h } = e, u = formatJsonRpcRequest(s, i, a);
				let d;
				const w = !!p;
				try {
					const _ = w ? xe : qt;
					d = await this.client.core.crypto.encode(t, u, { encoding: _ });
				} catch (_) {
					throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), _;
				}
				let m;
				if (gt.includes(s)) {
					const _ = kc(JSON.stringify(u)), g = kc(d);
					m = await this.client.core.verify.register({
						id: g,
						decryptedId: _
					});
				}
				const f = N[s].req;
				if (f.attestation = m, r && (f.ttl = r), o && (f.id = o), this.client.core.history.set(t, u), w) {
					const _ = Xc(p, t, d);
					await global.Linking.openURL(_, this.client.name);
				} else {
					const _ = N[s].req;
					r && (_.ttl = r), o && (_.id = o), _.tvf = b(v({}, h), { correlationId: u.id }), l ? (_.internal = b(v({}, _.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(t, d, _)) : this.client.core.relayer.publish(t, d, _).catch((g) => this.client.logger.error(g));
				}
				return u.id;
			}), c(this, "sendResult", async (e) => {
				const { id: t, topic: s, result: i, throwOnFailedPublish: r, encodeOpts: o, appLink: a } = e, l = formatJsonRpcResult(t, i);
				let p;
				const h = a && typeof (global == null ? void 0 : global.Linking) < "u";
				try {
					const w = h ? xe : qt;
					p = await this.client.core.crypto.encode(s, l, b(v({}, o || {}), { encoding: w }));
				} catch (w) {
					throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`), w;
				}
				let u, d;
				try {
					u = await this.client.core.history.get(s, t);
					const w = u.request;
					try {
						this.shouldSetTVF(w.method, w.params) && (d = this.getTVFParams(t, w.params, i));
					} catch (m) {
						this.client.logger.warn("sendResult() -> getTVFParams() failed", m);
					}
				} catch (w) {
					throw this.client.logger.error(`sendResult() -> history.get(${s}, ${t}) failed`), w;
				}
				if (h) {
					const w = Xc(a, s, p);
					await global.Linking.openURL(w, this.client.name);
				} else {
					const w = u.request.method, m = N[w].res;
					m.tvf = b(v({}, d), { correlationId: t }), r ? (m.internal = b(v({}, m.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, p, m)) : this.client.core.relayer.publish(s, p, m).catch((f) => this.client.logger.error(f));
				}
				await this.client.core.history.resolve(l);
			}), c(this, "sendError", async (e) => {
				const { id: t, topic: s, error: i, encodeOpts: r, rpcOpts: o, appLink: a } = e, l = formatJsonRpcError(t, i);
				let p;
				const h = a && typeof (global == null ? void 0 : global.Linking) < "u";
				try {
					const d = h ? xe : qt;
					p = await this.client.core.crypto.encode(s, l, b(v({}, r || {}), { encoding: d }));
				} catch (d) {
					throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`), d;
				}
				let u;
				try {
					u = await this.client.core.history.get(s, t);
				} catch (d) {
					throw this.client.logger.error(`sendError() -> history.get(${s}, ${t}) failed`), d;
				}
				if (h) {
					const d = Xc(a, s, p);
					await global.Linking.openURL(d, this.client.name);
				} else {
					const d = u.request.method, w = o || N[d].res;
					this.client.core.relayer.publish(s, p, w);
				}
				await this.client.core.history.resolve(l);
			}), c(this, "cleanup", async () => {
				const e = [], t = [];
				this.client.session.getAll().forEach((s) => {
					let i = !1;
					vi(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && e.push(s.topic);
				}), this.client.proposal.getAll().forEach((s) => {
					vi(s.expiryTimestamp) && t.push(s.id);
				}), await Promise.all([...e.map((s) => this.deleteSession({ topic: s })), ...t.map((s) => this.deleteProposal(s))]);
			}), c(this, "onProviderMessageEvent", async (e) => {
				!this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e) : await this.onRelayMessage(e);
			}), c(this, "onRelayEventRequest", async (e) => {
				this.requestQueue.queue.push(e), await this.processRequestsQueue();
			}), c(this, "processRequestsQueue", async () => {
				if (this.requestQueue.state === $.active) {
					this.client.logger.info("Request queue already active, skipping...");
					return;
				}
				for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
					this.requestQueue.state = $.active;
					const e = this.requestQueue.queue.shift();
					if (e) try {
						await this.processRequest(e);
					} catch (t) {
						this.client.logger.warn(t);
					}
				}
				this.requestQueue.state = $.idle;
			}), c(this, "processRequest", async (e) => {
				const { topic: t, payload: s, attestation: i, transportType: r, encryptedId: o } = e, a = s.method;
				if (!this.shouldIgnorePairingRequest({
					topic: t,
					requestMethod: a
				})) switch (a) {
					case "wc_sessionPropose": return await this.onSessionProposeRequest({
						topic: t,
						payload: s,
						attestation: i,
						encryptedId: o
					});
					case "wc_sessionSettle": return await this.onSessionSettleRequest(t, s);
					case "wc_sessionUpdate": return await this.onSessionUpdateRequest(t, s);
					case "wc_sessionExtend": return await this.onSessionExtendRequest(t, s);
					case "wc_sessionPing": return await this.onSessionPingRequest(t, s);
					case "wc_sessionDelete": return await this.onSessionDeleteRequest(t, s);
					case "wc_sessionRequest": return await this.onSessionRequest({
						topic: t,
						payload: s,
						attestation: i,
						encryptedId: o,
						transportType: r
					});
					case "wc_sessionEvent": return await this.onSessionEventRequest(t, s);
					case "wc_sessionAuthenticate": return await this.onSessionAuthenticateRequest({
						topic: t,
						payload: s,
						attestation: i,
						encryptedId: o,
						transportType: r
					});
					default: return this.client.logger.info(`Unsupported request method ${a}`);
				}
			}), c(this, "onRelayEventResponse", async (e) => {
				const { topic: t, payload: s, transportType: i } = e, r = (await this.client.core.history.get(t, s.id)).request.method;
				switch (r) {
					case "wc_sessionPropose": return this.onSessionProposeResponse(t, s, i);
					case "wc_sessionSettle": return this.onSessionSettleResponse(t, s);
					case "wc_sessionUpdate": return this.onSessionUpdateResponse(t, s);
					case "wc_sessionExtend": return this.onSessionExtendResponse(t, s);
					case "wc_sessionPing": return this.onSessionPingResponse(t, s);
					case "wc_sessionRequest": return this.onSessionRequestResponse(t, s);
					case "wc_sessionAuthenticate": return this.onSessionAuthenticateResponse(t, s);
					default: return this.client.logger.info(`Unsupported response method ${r}`);
				}
			}), c(this, "onRelayEventUnknownPayload", (e) => {
				const { topic: t } = e, { message: s } = ht$1("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
				throw new Error(s);
			}), c(this, "shouldIgnorePairingRequest", (e) => {
				const { topic: t, requestMethod: s } = e, i = this.expectedPairingMethodMap.get(t);
				return !i || i.includes(s) ? !1 : !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
			}), c(this, "onSessionProposeRequest", async (e) => {
				const { topic: t, payload: s, attestation: i, encryptedId: r } = e, { params: o, id: a } = s;
				try {
					const l = this.client.core.eventClient.getEvent({ topic: t });
					this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l?.setError(Y.proposal_listener_not_found)), this.isValidConnect(v({}, s.params));
					const h = v({
						id: a,
						pairingTopic: t,
						expiryTimestamp: o.expiryTimestamp || Ei(N.wc_sessionPropose.req.ttl)
					}, o);
					await this.setProposal(a, h);
					const u = await this.getVerifyContext({
						attestationId: i,
						hash: kc(JSON.stringify(s)),
						encryptedId: r,
						metadata: h.proposer.metadata
					});
					l?.addTrace(G.emit_session_proposal), this.client.events.emit("session_proposal", {
						id: a,
						params: h,
						verifyContext: u
					});
				} catch (l) {
					await this.sendError({
						id: a,
						topic: t,
						error: l,
						rpcOpts: N.wc_sessionPropose.autoReject
					}), this.client.logger.error(l);
				}
			}), c(this, "onSessionProposeResponse", async (e, t, s) => {
				const { id: i } = t;
				if (isJsonRpcResult(t)) {
					const { result: r } = t;
					this.client.logger.trace({
						type: "method",
						method: "onSessionProposeResponse",
						result: r
					});
					const o = this.client.proposal.get(i);
					this.client.logger.trace({
						type: "method",
						method: "onSessionProposeResponse",
						proposal: o
					});
					const a = o.proposer.publicKey;
					this.client.logger.trace({
						type: "method",
						method: "onSessionProposeResponse",
						selfPublicKey: a
					});
					const l = r.responderPublicKey;
					this.client.logger.trace({
						type: "method",
						method: "onSessionProposeResponse",
						peerPublicKey: l
					});
					const p = await this.client.core.crypto.generateSharedKey(a, l);
					this.pendingSessions.set(i, {
						sessionTopic: p,
						pairingTopic: e,
						proposalId: i,
						publicKey: a
					});
					const h = await this.client.core.relayer.subscribe(p, { transportType: s });
					this.client.logger.trace({
						type: "method",
						method: "onSessionProposeResponse",
						subscriptionId: h
					}), await this.client.core.pairing.activate({ topic: e });
				} else if (isJsonRpcError(t)) {
					await this.client.proposal.delete(i, Nt("USER_DISCONNECTED"));
					const r = xi("session_connect", i);
					if (this.events.listenerCount(r) === 0) throw new Error(`emitting ${r} without any listeners, 954`);
					this.events.emit(r, { error: t.error });
				}
			}), c(this, "onSessionSettleRequest", async (e, t) => {
				const { id: s, params: i } = t;
				try {
					this.isValidSessionSettleRequest(i);
					const { relay: r, controller: o, expiry: a, namespaces: l, sessionProperties: p, scopedProperties: h, sessionConfig: u } = t.params, d = [...this.pendingSessions.values()].find((f) => f.sessionTopic === e);
					if (!d) return this.client.logger.error(`Pending session not found for topic ${e}`);
					const w = this.client.proposal.get(d.proposalId), m = b(v(v(v({
						topic: e,
						relay: r,
						expiry: a,
						namespaces: l,
						acknowledged: !0,
						pairingTopic: d.pairingTopic,
						requiredNamespaces: w.requiredNamespaces,
						optionalNamespaces: w.optionalNamespaces,
						controller: o.publicKey,
						self: {
							publicKey: d.publicKey,
							metadata: this.client.metadata
						},
						peer: {
							publicKey: o.publicKey,
							metadata: o.metadata
						}
					}, p && { sessionProperties: p }), h && { scopedProperties: h }), u && { sessionConfig: u }), { transportType: Q.relay });
					await this.client.session.set(m.topic, m), await this.setExpiry(m.topic, m.expiry), await this.client.core.pairing.updateMetadata({
						topic: d.pairingTopic,
						metadata: m.peer.metadata
					}), this.client.events.emit("session_connect", { session: m }), this.events.emit(xi("session_connect", d.proposalId), { session: m }), this.pendingSessions.delete(d.proposalId), this.deleteProposal(d.proposalId, !1), this.cleanupDuplicatePairings(m), await this.sendResult({
						id: t.id,
						topic: e,
						result: !0,
						throwOnFailedPublish: !0
					});
				} catch (r) {
					await this.sendError({
						id: s,
						topic: e,
						error: r
					}), this.client.logger.error(r);
				}
			}), c(this, "onSessionSettleResponse", async (e, t) => {
				const { id: s } = t;
				isJsonRpcResult(t) ? (await this.client.session.update(e, { acknowledged: !0 }), this.events.emit(xi("session_approve", s), {})) : isJsonRpcError(t) && (await this.client.session.delete(e, Nt("USER_DISCONNECTED")), this.events.emit(xi("session_approve", s), { error: t.error }));
			}), c(this, "onSessionUpdateRequest", async (e, t) => {
				const { params: s, id: i } = t;
				try {
					const r = `${e}_session_update`, o = Ra.get(r);
					if (o && this.isRequestOutOfSync(o, i)) {
						this.client.logger.warn(`Discarding out of sync request - ${i}`), this.sendError({
							id: i,
							topic: e,
							error: Nt("INVALID_UPDATE_REQUEST")
						});
						return;
					}
					this.isValidUpdate(v({ topic: e }, s));
					try {
						Ra.set(r, i), await this.client.session.update(e, { namespaces: s.namespaces }), await this.sendResult({
							id: i,
							topic: e,
							result: !0,
							throwOnFailedPublish: !0
						});
					} catch (a) {
						throw Ra.delete(r), a;
					}
					this.client.events.emit("session_update", {
						id: i,
						topic: e,
						params: s
					});
				} catch (r) {
					await this.sendError({
						id: i,
						topic: e,
						error: r
					}), this.client.logger.error(r);
				}
			}), c(this, "isRequestOutOfSync", (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)), c(this, "onSessionUpdateResponse", (e, t) => {
				const { id: s } = t, i = xi("session_update", s);
				if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
				isJsonRpcResult(t) ? this.events.emit(xi("session_update", s), {}) : isJsonRpcError(t) && this.events.emit(xi("session_update", s), { error: t.error });
			}), c(this, "onSessionExtendRequest", async (e, t) => {
				const { id: s } = t;
				try {
					this.isValidExtend({ topic: e }), await this.setExpiry(e, Ei(J)), await this.sendResult({
						id: s,
						topic: e,
						result: !0,
						throwOnFailedPublish: !0
					}), this.client.events.emit("session_extend", {
						id: s,
						topic: e
					});
				} catch (i) {
					await this.sendError({
						id: s,
						topic: e,
						error: i
					}), this.client.logger.error(i);
				}
			}), c(this, "onSessionExtendResponse", (e, t) => {
				const { id: s } = t, i = xi("session_extend", s);
				if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
				isJsonRpcResult(t) ? this.events.emit(xi("session_extend", s), {}) : isJsonRpcError(t) && this.events.emit(xi("session_extend", s), { error: t.error });
			}), c(this, "onSessionPingRequest", async (e, t) => {
				const { id: s } = t;
				try {
					this.isValidPing({ topic: e }), await this.sendResult({
						id: s,
						topic: e,
						result: !0,
						throwOnFailedPublish: !0
					}), this.client.events.emit("session_ping", {
						id: s,
						topic: e
					});
				} catch (i) {
					await this.sendError({
						id: s,
						topic: e,
						error: i
					}), this.client.logger.error(i);
				}
			}), c(this, "onSessionPingResponse", (e, t) => {
				const { id: s } = t, i = xi("session_ping", s);
				setTimeout(() => {
					if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners 2176`);
					isJsonRpcResult(t) ? this.events.emit(xi("session_ping", s), {}) : isJsonRpcError(t) && this.events.emit(xi("session_ping", s), { error: t.error });
				}, 500);
			}), c(this, "onSessionDeleteRequest", async (e, t) => {
				const { id: s } = t;
				try {
					this.isValidDisconnect({
						topic: e,
						reason: t.params
					}), Promise.all([
						new Promise((i) => {
							this.client.core.relayer.once(C$1.publish, async () => {
								i(await this.deleteSession({
									topic: e,
									id: s
								}));
							});
						}),
						this.sendResult({
							id: s,
							topic: e,
							result: !0,
							throwOnFailedPublish: !0
						}),
						this.cleanupPendingSentRequestsForTopic({
							topic: e,
							error: Nt("USER_DISCONNECTED")
						})
					]).catch((i) => this.client.logger.error(i));
				} catch (i) {
					this.client.logger.error(i);
				}
			}), c(this, "onSessionRequest", async (e) => {
				var t, s, i;
				const { topic: r, payload: o, attestation: a, encryptedId: l, transportType: p } = e, { id: h, params: u } = o;
				try {
					await this.isValidRequest(v({ topic: r }, u));
					const d = this.client.session.get(r), m = {
						id: h,
						topic: r,
						params: u,
						verifyContext: await this.getVerifyContext({
							attestationId: a,
							hash: kc(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", u, h))),
							encryptedId: l,
							metadata: d.peer.metadata,
							transportType: p
						})
					};
					await this.setPendingSessionRequest(m), p === Q.link_mode && (t = d.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s = d.peer.metadata.redirect) == null ? void 0 : s.universal), (i = this.client.signConfig) != null && i.disableRequestQueue ? this.emitSessionRequest(m) : (this.addSessionRequestToSessionRequestQueue(m), this.processSessionRequestQueue());
				} catch (d) {
					await this.sendError({
						id: h,
						topic: r,
						error: d
					}), this.client.logger.error(d);
				}
			}), c(this, "onSessionRequestResponse", (e, t) => {
				const { id: s } = t, i = xi("session_request", s);
				if (this.events.listenerCount(i) === 0) throw new Error(`emitting ${i} without any listeners`);
				isJsonRpcResult(t) ? this.events.emit(xi("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit(xi("session_request", s), { error: t.error });
			}), c(this, "onSessionEventRequest", async (e, t) => {
				const { id: s, params: i } = t;
				try {
					const r = `${e}_session_event_${i.event.name}`, o = Ra.get(r);
					if (o && this.isRequestOutOfSync(o, s)) {
						this.client.logger.info(`Discarding out of sync request - ${s}`);
						return;
					}
					this.isValidEmit(v({ topic: e }, i)), this.client.events.emit("session_event", {
						id: s,
						topic: e,
						params: i
					}), Ra.set(r, s);
				} catch (r) {
					await this.sendError({
						id: s,
						topic: e,
						error: r
					}), this.client.logger.error(r);
				}
			}), c(this, "onSessionAuthenticateResponse", (e, t) => {
				const { id: s } = t;
				this.client.logger.trace({
					type: "method",
					method: "onSessionAuthenticateResponse",
					topic: e,
					payload: t
				}), isJsonRpcResult(t) ? this.events.emit(xi("session_request", s), { result: t.result }) : isJsonRpcError(t) && this.events.emit(xi("session_request", s), { error: t.error });
			}), c(this, "onSessionAuthenticateRequest", async (e) => {
				var t;
				const { topic: s, payload: i, attestation: r, encryptedId: o, transportType: a } = e;
				try {
					const { requester: l, authPayload: p, expiryTimestamp: h } = i.params, u = await this.getVerifyContext({
						attestationId: r,
						hash: kc(JSON.stringify(i)),
						encryptedId: o,
						metadata: l.metadata,
						transportType: a
					}), d = {
						requester: l,
						pairingTopic: s,
						id: i.id,
						authPayload: p,
						verifyContext: u,
						expiryTimestamp: h
					};
					await this.setAuthRequest(i.id, {
						request: d,
						pairingTopic: s,
						transportType: a
					}), a === Q.link_mode && (t = l.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal), this.client.events.emit("session_authenticate", {
						topic: s,
						params: i.params,
						id: i.id,
						verifyContext: u
					});
				} catch (l) {
					this.client.logger.error(l);
					const p = i.params.requester.publicKey, h = await this.client.core.crypto.generateKeyPair(), u = this.getAppLinkIfEnabled(i.params.requester.metadata, a), d = {
						type: 1,
						receiverPublicKey: p,
						senderPublicKey: h
					};
					await this.sendError({
						id: i.id,
						topic: s,
						error: l,
						encodeOpts: d,
						rpcOpts: N.wc_sessionAuthenticate.autoReject,
						appLink: u
					});
				}
			}), c(this, "addSessionRequestToSessionRequestQueue", (e) => {
				this.sessionRequestQueue.queue.push(e);
			}), c(this, "cleanupAfterResponse", (e) => {
				this.deletePendingSessionRequest(e.response.id, {
					message: "fulfilled",
					code: 0
				}), setTimeout(() => {
					this.sessionRequestQueue.state = $.idle, this.processSessionRequestQueue();
				}, (0, import_cjs.toMiliseconds)(this.requestQueueDelay));
			}), c(this, "cleanupPendingSentRequestsForTopic", ({ topic: e, error: t }) => {
				const s = this.client.core.history.pending;
				s.length > 0 && s.filter((i) => i.topic === e && i.request.method === "wc_sessionRequest").forEach((i) => {
					const r = i.request.id, o = xi("session_request", r);
					if (this.events.listenerCount(o) === 0) throw new Error(`emitting ${o} without any listeners`);
					this.events.emit(xi("session_request", i.request.id), { error: t });
				});
			}), c(this, "processSessionRequestQueue", () => {
				if (this.sessionRequestQueue.state === $.active) {
					this.client.logger.info("session request queue is already active.");
					return;
				}
				const e = this.sessionRequestQueue.queue[0];
				if (!e) {
					this.client.logger.info("session request queue is empty.");
					return;
				}
				try {
					this.sessionRequestQueue.state = $.active, this.emitSessionRequest(e);
				} catch (t) {
					this.client.logger.error(t);
				}
			}), c(this, "emitSessionRequest", (e) => {
				this.client.events.emit("session_request", e);
			}), c(this, "onPairingCreated", (e) => {
				if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
				const t = this.client.proposal.getAll().find((s) => s.pairingTopic === e.topic);
				t && this.onSessionProposeRequest({
					topic: e.topic,
					payload: formatJsonRpcRequest("wc_sessionPropose", b(v({}, t), {
						requiredNamespaces: t.requiredNamespaces,
						optionalNamespaces: t.optionalNamespaces,
						relays: t.relays,
						proposer: t.proposer,
						sessionProperties: t.sessionProperties,
						scopedProperties: t.scopedProperties
					}), t.id)
				});
			}), c(this, "isValidConnect", async (e) => {
				if (!ma(e)) {
					const { message: l } = ht$1("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
					throw new Error(l);
				}
				const { pairingTopic: t, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: r, scopedProperties: o, relays: a } = e;
				if (Et$1(t) || await this.isValidPairingTopic(t), !ga(a, !0)) {
					const { message: l } = ht$1("MISSING_OR_INVALID", `connect() relays: ${a}`);
					throw new Error(l);
				}
				if (!Et$1(s) && Oe$1(s) !== 0) {
					const l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
					[
						"fatal",
						"error",
						"silent"
					].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l), this.validateNamespaces(s, "requiredNamespaces");
				}
				if (!Et$1(i) && Oe$1(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Et$1(r) || this.validateSessionProps(r, "sessionProperties"), !Et$1(o)) {
					this.validateSessionProps(o, "scopedProperties");
					const l = Object.keys(s || {}).concat(Object.keys(i || {}));
					if (!Object.keys(o).every((p) => l.includes(p))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(o)}, required/optional namespaces: ${JSON.stringify(l)}`);
				}
			}), c(this, "validateNamespaces", (e, t) => {
				const s = pa(e, "connect()", t);
				if (s) throw new Error(s.message);
			}), c(this, "isValidApprove", async (e) => {
				if (!ma(e)) throw new Error(ht$1("MISSING_OR_INVALID", `approve() params: ${e}`).message);
				const { id: t, namespaces: s, relayProtocol: i, sessionProperties: r, scopedProperties: o } = e;
				this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
				const a = this.client.proposal.get(t), l = Bo(s, "approve()");
				if (l) throw new Error(l.message);
				const p = No(a.requiredNamespaces, s, "approve()");
				if (p) throw new Error(p.message);
				if (!nt(i, !0)) {
					const { message: h } = ht$1("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
					throw new Error(h);
				}
				if (Et$1(r) || this.validateSessionProps(r, "sessionProperties"), !Et$1(o)) {
					this.validateSessionProps(o, "scopedProperties");
					const h = new Set(Object.keys(s));
					if (!Object.keys(o).every((u) => h.has(u))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(o)}, approved namespaces: ${Array.from(h).join(", ")}`);
				}
			}), c(this, "isValidReject", async (e) => {
				if (!ma(e)) {
					const { message: i } = ht$1("MISSING_OR_INVALID", `reject() params: ${e}`);
					throw new Error(i);
				}
				const { id: t, reason: s } = e;
				if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !wa(s)) {
					const { message: i } = ht$1("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
					throw new Error(i);
				}
			}), c(this, "isValidSessionSettleRequest", (e) => {
				if (!ma(e)) {
					const { message: l } = ht$1("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
					throw new Error(l);
				}
				const { relay: t, controller: s, namespaces: i, expiry: r } = e;
				if (!Io(t)) {
					const { message: l } = ht$1("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
					throw new Error(l);
				}
				const o = ha(s, "onSessionSettleRequest()");
				if (o) throw new Error(o.message);
				const a = Bo(i, "onSessionSettleRequest()");
				if (a) throw new Error(a.message);
				if (vi(r)) {
					const { message: l } = ht$1("EXPIRED", "onSessionSettleRequest()");
					throw new Error(l);
				}
			}), c(this, "isValidUpdate", async (e) => {
				if (!ma(e)) {
					const { message: a } = ht$1("MISSING_OR_INVALID", `update() params: ${e}`);
					throw new Error(a);
				}
				const { topic: t, namespaces: s } = e;
				this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
				const i = this.client.session.get(t), r = Bo(s, "update()");
				if (r) throw new Error(r.message);
				const o = No(i.requiredNamespaces, s, "update()");
				if (o) throw new Error(o.message);
			}), c(this, "isValidExtend", async (e) => {
				if (!ma(e)) {
					const { message: s } = ht$1("MISSING_OR_INVALID", `extend() params: ${e}`);
					throw new Error(s);
				}
				const { topic: t } = e;
				this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
			}), c(this, "isValidRequest", async (e) => {
				if (!ma(e)) {
					const { message: a } = ht$1("MISSING_OR_INVALID", `request() params: ${e}`);
					throw new Error(a);
				}
				const { topic: t, request: s, chainId: i, expiry: r } = e;
				this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
				const { namespaces: o } = this.client.session.get(t);
				if (!xa(o, i)) {
					const { message: a } = ht$1("MISSING_OR_INVALID", `request() chainId: ${i}`);
					throw new Error(a);
				}
				if (!ba(s)) {
					const { message: a } = ht$1("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
					throw new Error(a);
				}
				if (!Sa(o, i, s.method)) {
					const { message: a } = ht$1("MISSING_OR_INVALID", `request() method: ${s.method}`);
					throw new Error(a);
				}
				if (r && !Ia(r, _e)) {
					const { message: a } = ht$1("MISSING_OR_INVALID", `request() expiry: ${r}. Expiry must be a number (in seconds) between ${_e.min} and ${_e.max}`);
					throw new Error(a);
				}
			}), c(this, "isValidRespond", async (e) => {
				var t;
				if (!ma(e)) {
					const { message: r } = ht$1("MISSING_OR_INVALID", `respond() params: ${e}`);
					throw new Error(r);
				}
				const { topic: s, response: i } = e;
				try {
					await this.isValidSessionTopic(s);
				} catch (r) {
					throw (t = e?.response) != null && t.id && this.cleanupAfterResponse(e), r;
				}
				if (!Ea(i)) {
					const { message: r } = ht$1("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
					throw new Error(r);
				}
			}), c(this, "isValidPing", async (e) => {
				if (!ma(e)) {
					const { message: s } = ht$1("MISSING_OR_INVALID", `ping() params: ${e}`);
					throw new Error(s);
				}
				const { topic: t } = e;
				await this.isValidSessionOrPairingTopic(t);
			}), c(this, "isValidEmit", async (e) => {
				if (!ma(e)) {
					const { message: o } = ht$1("MISSING_OR_INVALID", `emit() params: ${e}`);
					throw new Error(o);
				}
				const { topic: t, event: s, chainId: i } = e;
				await this.isValidSessionTopic(t);
				const { namespaces: r } = this.client.session.get(t);
				if (!xa(r, i)) {
					const { message: o } = ht$1("MISSING_OR_INVALID", `emit() chainId: ${i}`);
					throw new Error(o);
				}
				if (!va(s)) {
					const { message: o } = ht$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
					throw new Error(o);
				}
				if (!Oa(r, i, s.name)) {
					const { message: o } = ht$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
					throw new Error(o);
				}
			}), c(this, "isValidDisconnect", async (e) => {
				if (!ma(e)) {
					const { message: s } = ht$1("MISSING_OR_INVALID", `disconnect() params: ${e}`);
					throw new Error(s);
				}
				const { topic: t } = e;
				await this.isValidSessionOrPairingTopic(t);
			}), c(this, "isValidAuthenticate", (e) => {
				const { chains: t, uri: s, domain: i, nonce: r } = e;
				if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
				if (!nt(s, !1)) throw new Error("uri is required parameter");
				if (!nt(i, !1)) throw new Error("domain is required parameter");
				if (!nt(r, !1)) throw new Error("nonce is required parameter");
				if ([...new Set(t.map((a) => Ne(a).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
				const { namespace: o } = Ne(t[0]);
				if (o !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
			}), c(this, "getVerifyContext", async (e) => {
				const { attestationId: t, hash: s, encryptedId: i, metadata: r, transportType: o } = e, a = { verified: {
					verifyUrl: r.verifyUrl || "https://verify.walletconnect.org",
					validation: "UNKNOWN",
					origin: r.url || ""
				} };
				try {
					if (o === Q.link_mode) {
						const p = this.getAppLinkIfEnabled(r, o);
						return a.verified.validation = p && new URL(p).origin === new URL(r.url).origin ? "VALID" : "INVALID", a;
					}
					const l = await this.client.core.verify.resolve({
						attestationId: t,
						hash: s,
						encryptedId: i,
						verifyUrl: r.verifyUrl
					});
					l && (a.verified.origin = l.origin, a.verified.isScam = l.isScam, a.verified.validation = l.origin === new URL(r.url).origin ? "VALID" : "INVALID");
				} catch (l) {
					this.client.logger.warn(l);
				}
				return this.client.logger.debug(`Verify context: ${JSON.stringify(a)}`), a;
			}), c(this, "validateSessionProps", (e, t) => {
				Object.values(e).forEach((s, i) => {
					if (s == null) {
						const { message: r } = ht$1("MISSING_OR_INVALID", `${t} must contain an existing value for each key. Received: ${s} for key ${Object.keys(e)[i]}`);
						throw new Error(r);
					}
				});
			}), c(this, "getPendingAuthRequest", (e) => {
				const t = this.client.auth.requests.get(e);
				return typeof t == "object" ? t : void 0;
			}), c(this, "addToRecentlyDeleted", (e, t) => {
				if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
					let s = 0;
					const i = this.recentlyDeletedLimit / 2;
					for (const r of this.recentlyDeletedMap.keys()) {
						if (s++ >= i) break;
						this.recentlyDeletedMap.delete(r);
					}
				}
			}), c(this, "checkRecentlyDeleted", (e) => {
				const t = this.recentlyDeletedMap.get(e);
				if (t) {
					const { message: s } = ht$1("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
					throw new Error(s);
				}
			}), c(this, "isLinkModeEnabled", (e, t) => {
				var s, i, r, o, a, l, p, h, u;
				return !e || t !== Q.link_mode ? !1 : ((i = (s = this.client.metadata) == null ? void 0 : s.redirect) == null ? void 0 : i.linkMode) === !0 && ((o = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : o.universal) !== void 0 && ((l = (a = this.client.metadata) == null ? void 0 : a.redirect) == null ? void 0 : l.universal) !== "" && ((p = e?.redirect) == null ? void 0 : p.universal) !== void 0 && ((h = e?.redirect) == null ? void 0 : h.universal) !== "" && ((u = e?.redirect) == null ? void 0 : u.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(e.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
			}), c(this, "getAppLinkIfEnabled", (e, t) => {
				var s;
				return this.isLinkModeEnabled(e, t) ? (s = e?.redirect) == null ? void 0 : s.universal : void 0;
			}), c(this, "handleLinkModeMessage", ({ url: e }) => {
				if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
				const t = Ai(e, "topic") || "", s = decodeURIComponent(Ai(e, "wc_ev") || ""), i = this.client.session.keys.includes(t);
				i && this.client.session.update(t, { transportType: Q.link_mode }), this.client.core.dispatchEnvelope({
					topic: t,
					message: s,
					sessionExists: i
				});
			}), c(this, "registerLinkModeListeners", async () => {
				var e;
				if (Ii() || pt$1() && (e = this.client.metadata.redirect) != null && e.linkMode) {
					const t = global == null ? void 0 : global.Linking;
					if (typeof t < "u") {
						t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
						const s = await t.getInitialURL();
						s && setTimeout(() => {
							this.handleLinkModeMessage({ url: s });
						}, 50);
					}
				}
			}), c(this, "shouldSetTVF", (e, t) => {
				if (!t || e !== "wc_sessionRequest") return !1;
				const { request: s } = t;
				return Object.keys(Ke).includes(s.method);
			}), c(this, "getTVFParams", (e, t, s) => {
				var i, r;
				try {
					const o = t.request.method, a = this.extractTxHashesFromResult(o, s);
					return b(v({
						correlationId: e,
						rpcMethods: [o],
						chainId: t.chainId
					}, this.isValidContractData(t.request.params) && { contractAddresses: [(r = (i = t.request.params) == null ? void 0 : i[0]) == null ? void 0 : r.to] }), { txHashes: a });
				} catch (o) {
					this.client.logger.warn("Error getting TVF params", o);
				}
				return {};
			}), c(this, "isValidContractData", (e) => {
				var t;
				if (!e) return !1;
				try {
					const s = e?.data || ((t = e?.[0]) == null ? void 0 : t.data);
					if (!s.startsWith("0x")) return !1;
					const i = s.slice(2);
					return /^[0-9a-fA-F]*$/.test(i) ? i.length % 2 === 0 : !1;
				} catch {}
				return !1;
			}), c(this, "extractTxHashesFromResult", (e, t) => {
				try {
					const s = Ke[e];
					if (typeof t == "string") return [t];
					const i = t[s.key];
					if (se(i)) return e === "solana_signAllTransactions" ? i.map((r) => Ji(r)) : i;
					if (typeof i == "string") return [i];
				} catch (s) {
					this.client.logger.warn("Error extracting tx hashes from result", s);
				}
				return [];
			});
		}
		async processPendingMessageEvents() {
			try {
				const n = this.client.session.keys, e = this.client.core.relayer.messages.getWithoutAck(n);
				for (const [t, s] of Object.entries(e)) for (const i of s) try {
					await this.onProviderMessageEvent({
						topic: t,
						message: i,
						publishedAt: Date.now()
					});
				} catch {
					this.client.logger.warn(`Error processing pending message event for topic: ${t}, message: ${i}`);
				}
			} catch (n) {
				this.client.logger.warn("processPendingMessageEvents failed", n);
			}
		}
		isInitialized() {
			if (!this.initialized) {
				const { message: n } = ht$1("NOT_INITIALIZED", this.name);
				throw new Error(n);
			}
		}
		async confirmOnlineStateOrThrow() {
			await this.client.core.relayer.confirmOnlineStateOrThrow();
		}
		registerRelayerEvents() {
			this.client.core.relayer.on(C$1.message, (n) => {
				this.onProviderMessageEvent(n);
			});
		}
		async onRelayMessage(n) {
			const { topic: e, message: t, attestation: s, transportType: i } = n, { publicKey: r } = this.client.auth.authKeys.keys.includes(ce) ? this.client.auth.authKeys.get(ce) : {
				responseTopic: void 0,
				publicKey: void 0
			};
			try {
				const o = await this.client.core.crypto.decode(e, t, {
					receiverPublicKey: r,
					encoding: i === Q.link_mode ? xe : qt
				});
				isJsonRpcRequest(o) ? (this.client.core.history.set(e, o), await this.onRelayEventRequest({
					topic: e,
					payload: o,
					attestation: s,
					transportType: i,
					encryptedId: kc(t)
				})) : isJsonRpcResponse(o) ? (await this.client.core.history.resolve(o), await this.onRelayEventResponse({
					topic: e,
					payload: o,
					transportType: i
				}), this.client.core.history.delete(e, o.id)) : await this.onRelayEventUnknownPayload({
					topic: e,
					payload: o,
					transportType: i
				}), await this.client.core.relayer.messages.ack(e, t);
			} catch (o) {
				this.client.logger.error(o);
			}
		}
		registerExpirerEvents() {
			this.client.core.expirer.on(M.expired, async (n) => {
				const { topic: e, id: t } = bi(n.target);
				if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, ht$1("EXPIRED"), !0);
				if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, ht$1("EXPIRED"), !0);
				e ? this.client.session.keys.includes(e) && (await this.deleteSession({
					topic: e,
					expirerHasDeleted: !0
				}), this.client.events.emit("session_expire", { topic: e })) : t && (await this.deleteProposal(t, !0), this.client.events.emit("proposal_expire", { id: t }));
			});
		}
		registerPairingEvents() {
			this.client.core.pairing.events.on(re.create, (n) => this.onPairingCreated(n)), this.client.core.pairing.events.on(re.delete, (n) => {
				this.addToRecentlyDeleted(n.topic, "pairing");
			});
		}
		isValidPairingTopic(n) {
			if (!nt(n, !1)) {
				const { message: e } = ht$1("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
				throw new Error(e);
			}
			if (!this.client.core.pairing.pairings.keys.includes(n)) {
				const { message: e } = ht$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
				throw new Error(e);
			}
			if (vi(this.client.core.pairing.pairings.get(n).expiry)) {
				const { message: e } = ht$1("EXPIRED", `pairing topic: ${n}`);
				throw new Error(e);
			}
		}
		async isValidSessionTopic(n) {
			if (!nt(n, !1)) {
				const { message: e } = ht$1("MISSING_OR_INVALID", `session topic should be a string: ${n}`);
				throw new Error(e);
			}
			if (this.checkRecentlyDeleted(n), !this.client.session.keys.includes(n)) {
				const { message: e } = ht$1("NO_MATCHING_KEY", `session topic doesn't exist: ${n}`);
				throw new Error(e);
			}
			if (vi(this.client.session.get(n).expiry)) {
				await this.deleteSession({ topic: n });
				const { message: e } = ht$1("EXPIRED", `session topic: ${n}`);
				throw new Error(e);
			}
			if (!this.client.core.crypto.keychain.has(n)) {
				const { message: e } = ht$1("MISSING_OR_INVALID", `session topic does not exist in keychain: ${n}`);
				throw await this.deleteSession({ topic: n }), new Error(e);
			}
		}
		async isValidSessionOrPairingTopic(n) {
			if (this.checkRecentlyDeleted(n), this.client.session.keys.includes(n)) await this.isValidSessionTopic(n);
			else if (this.client.core.pairing.pairings.keys.includes(n)) this.isValidPairingTopic(n);
			else if (nt(n, !1)) {
				const { message: e } = ht$1("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${n}`);
				throw new Error(e);
			} else {
				const { message: e } = ht$1("MISSING_OR_INVALID", `session or pairing topic should be a string: ${n}`);
				throw new Error(e);
			}
		}
		async isValidProposalId(n) {
			if (!ya(n)) {
				const { message: e } = ht$1("MISSING_OR_INVALID", `proposal id should be a number: ${n}`);
				throw new Error(e);
			}
			if (!this.client.proposal.keys.includes(n)) {
				const { message: e } = ht$1("NO_MATCHING_KEY", `proposal id doesn't exist: ${n}`);
				throw new Error(e);
			}
			if (vi(this.client.proposal.get(n).expiryTimestamp)) {
				await this.deleteProposal(n);
				const { message: e } = ht$1("EXPIRED", `proposal id: ${n}`);
				throw new Error(e);
			}
		}
	};
	Os = class extends zi {
		constructor(n, e) {
			super(n, e, pt, we), this.core = n, this.logger = e;
		}
	};
	St = class extends zi {
		constructor(n, e) {
			super(n, e, ht, we), this.core = n, this.logger = e;
		}
	};
	bs = class extends zi {
		constructor(n, e) {
			super(n, e, ut, we, (t) => t.id), this.core = n, this.logger = e;
		}
	};
	As = class extends zi {
		constructor(n, e) {
			super(n, e, mt, ae, () => ce), this.core = n, this.logger = e;
		}
	};
	xs = class extends zi {
		constructor(n, e) {
			super(n, e, _t, ae), this.core = n, this.logger = e;
		}
	};
	Cs = class extends zi {
		constructor(n, e) {
			super(n, e, Et, ae, (t) => t.id), this.core = n, this.logger = e;
		}
	};
	Vs = Object.defineProperty;
	Ds = (S, n, e) => n in S ? Vs(S, n, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: e
	}) : S[n] = e;
	Ge = (S, n, e) => Ds(S, typeof n != "symbol" ? n + "" : n, e);
	Ls = class {
		constructor(n, e) {
			this.core = n, this.logger = e, Ge(this, "authKeys"), Ge(this, "pairingTopics"), Ge(this, "requests"), this.authKeys = new As(this.core, this.logger), this.pairingTopics = new xs(this.core, this.logger), this.requests = new Cs(this.core, this.logger);
		}
		async init() {
			await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
		}
	};
	ks = Object.defineProperty;
	Ms = (S, n, e) => n in S ? ks(S, n, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: e
	}) : S[n] = e;
	E = (S, n, e) => Ms(S, typeof n != "symbol" ? n + "" : n, e);
	Ee = class Ee extends J$1 {
		constructor(n) {
			super(n), E(this, "protocol", "wc"), E(this, "version", 2), E(this, "name", me.name), E(this, "metadata"), E(this, "core"), E(this, "logger"), E(this, "events", new EventEmitter()), E(this, "engine"), E(this, "session"), E(this, "proposal"), E(this, "pendingRequest"), E(this, "auth"), E(this, "signConfig"), E(this, "on", (t, s) => this.events.on(t, s)), E(this, "once", (t, s) => this.events.once(t, s)), E(this, "off", (t, s) => this.events.off(t, s)), E(this, "removeListener", (t, s) => this.events.removeListener(t, s)), E(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), E(this, "connect", async (t) => {
				try {
					return await this.engine.connect(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "pair", async (t) => {
				try {
					return await this.engine.pair(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "approve", async (t) => {
				try {
					return await this.engine.approve(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "reject", async (t) => {
				try {
					return await this.engine.reject(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "update", async (t) => {
				try {
					return await this.engine.update(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "extend", async (t) => {
				try {
					return await this.engine.extend(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "request", async (t) => {
				try {
					return await this.engine.request(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "respond", async (t) => {
				try {
					return await this.engine.respond(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "ping", async (t) => {
				try {
					return await this.engine.ping(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "emit", async (t) => {
				try {
					return await this.engine.emit(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "disconnect", async (t) => {
				try {
					return await this.engine.disconnect(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "find", (t) => {
				try {
					return this.engine.find(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "getPendingSessionRequests", () => {
				try {
					return this.engine.getPendingSessionRequests();
				} catch (t) {
					throw this.logger.error(t.message), t;
				}
			}), E(this, "authenticate", async (t, s) => {
				try {
					return await this.engine.authenticate(t, s);
				} catch (i) {
					throw this.logger.error(i.message), i;
				}
			}), E(this, "formatAuthMessage", (t) => {
				try {
					return this.engine.formatAuthMessage(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "approveSessionAuthenticate", async (t) => {
				try {
					return await this.engine.approveSessionAuthenticate(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), E(this, "rejectSessionAuthenticate", async (t) => {
				try {
					return await this.engine.rejectSessionAuthenticate(t);
				} catch (s) {
					throw this.logger.error(s.message), s;
				}
			}), this.name = n?.name || me.name, this.metadata = oi(n?.metadata), this.signConfig = n?.signConfig;
			const e = typeof n?.logger < "u" && typeof n?.logger != "string" ? n.logger : (0, import_pino.default)(k({ level: n?.logger || me.logger }));
			this.core = n?.core || new Xo(n), this.logger = E$1(e, this.name), this.session = new St(this.core, this.logger), this.proposal = new Os(this.core, this.logger), this.pendingRequest = new bs(this.core, this.logger), this.engine = new Ns(this), this.auth = new Ls(this.core, this.logger);
		}
		static async init(n) {
			const e = new Ee(n);
			return await e.initialize(), e;
		}
		get context() {
			return y(this.logger);
		}
		get pairing() {
			return this.core.pairing.pairings;
		}
		async initialize() {
			this.logger.trace("Initialized");
			try {
				await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success"), setTimeout(() => {
					this.engine.processRelayMessageCache();
				}, (0, import_cjs.toMiliseconds)(import_cjs.ONE_SECOND));
			} catch (n) {
				throw this.logger.info("SignClient Initialization Failure"), this.logger.error(n.message), n;
			}
		}
	};
	$s = St;
	Ks = Ee;
}));
//#endregion
//#region node_modules/@walletconnect/universal-provider/dist/index.cjs.js
var require_index_cjs$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: !0 });
	var be = (init_index_es(), __toCommonJS(index_es_exports));
	var p = (init_index_es$6(), __toCommonJS(index_es_exports$4));
	var Y = (init_index_es$1(), __toCommonJS(index_es_exports$1));
	var Q = (init_index_es$2(), __toCommonJS(index_es_exports$2));
	var m = (init_index_es$3(), __toCommonJS(index_es_exports$3));
	var Z = (init_esm(), __toCommonJS(esm_exports));
	var Ie = __require("events");
	function B(s) {
		return s && typeof s == "object" && "default" in s ? s : { default: s };
	}
	var $e = B(be);
	var P = B(Q);
	var Oe = B(Ie);
	var T = "error";
	var Ae = "wss://relay.walletconnect.org";
	var U = `wc@2:universal_provider:`;
	var ee = "https://rpc.walletconnect.org/v1/";
	var $ = "generic";
	var Ee = `${ee}bundler`;
	var l = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
	function Ne() {}
	function G(s) {
		return s == null || typeof s != "object" && typeof s != "function";
	}
	function z(s) {
		return ArrayBuffer.isView(s) && !(s instanceof DataView);
	}
	function Se(s) {
		if (G(s)) return s;
		if (Array.isArray(s) || z(s) || s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer) return s.slice(0);
		const e = Object.getPrototypeOf(s), t = e.constructor;
		if (s instanceof Date || s instanceof Map || s instanceof Set) return new t(s);
		if (s instanceof RegExp) {
			const i = new t(s);
			return i.lastIndex = s.lastIndex, i;
		}
		if (s instanceof DataView) return new t(s.buffer.slice(0));
		if (s instanceof Error) {
			const i = new t(s.message);
			return i.stack = s.stack, i.name = s.name, i.cause = s.cause, i;
		}
		if (typeof File < "u" && s instanceof File) return new t([s], s.name, {
			type: s.type,
			lastModified: s.lastModified
		});
		if (typeof s == "object") {
			const i = Object.create(e);
			return Object.assign(i, s);
		}
		return s;
	}
	function te(s) {
		return typeof s == "object" && s !== null;
	}
	function se(s) {
		return Object.getOwnPropertySymbols(s).filter((e) => Object.prototype.propertyIsEnumerable.call(s, e));
	}
	function ie(s) {
		return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s);
	}
	var qe = "[object RegExp]";
	var re = "[object String]";
	var ne = "[object Number]";
	var ae = "[object Boolean]";
	var ce = "[object Arguments]";
	var De = "[object Symbol]";
	var je = "[object Date]";
	var Re = "[object Map]";
	var _e = "[object Set]";
	var Ue = "[object Array]";
	var Fe = "[object ArrayBuffer]";
	var Le = "[object Object]";
	var Me = "[object DataView]";
	var Je = "[object Uint8Array]";
	var xe = "[object Uint8ClampedArray]";
	var Be = "[object Uint16Array]";
	var Ge = "[object Uint32Array]";
	var ze = "[object Int8Array]";
	var ke = "[object Int16Array]";
	var Ke = "[object Int32Array]";
	var We = "[object Float32Array]";
	var Ve = "[object Float64Array]";
	function Xe(s, e) {
		return O(s, void 0, s, /* @__PURE__ */ new Map(), e);
	}
	function O(s, e, t, i = /* @__PURE__ */ new Map(), n = void 0) {
		const a = n?.(s, e, t, i);
		if (a != null) return a;
		if (G(s)) return s;
		if (i.has(s)) return i.get(s);
		if (Array.isArray(s)) {
			const r = new Array(s.length);
			i.set(s, r);
			for (let c = 0; c < s.length; c++) r[c] = O(s[c], c, t, i, n);
			return Object.hasOwn(s, "index") && (r.index = s.index), Object.hasOwn(s, "input") && (r.input = s.input), r;
		}
		if (s instanceof Date) return new Date(s.getTime());
		if (s instanceof RegExp) {
			const r = new RegExp(s.source, s.flags);
			return r.lastIndex = s.lastIndex, r;
		}
		if (s instanceof Map) {
			const r = /* @__PURE__ */ new Map();
			i.set(s, r);
			for (const [c, o] of s) r.set(c, O(o, c, t, i, n));
			return r;
		}
		if (s instanceof Set) {
			const r = /* @__PURE__ */ new Set();
			i.set(s, r);
			for (const c of s) r.add(O(c, void 0, t, i, n));
			return r;
		}
		if (typeof Buffer < "u" && Buffer.isBuffer(s)) return s.subarray();
		if (z(s)) {
			const r = new (Object.getPrototypeOf(s)).constructor(s.length);
			i.set(s, r);
			for (let c = 0; c < s.length; c++) r[c] = O(s[c], c, t, i, n);
			return r;
		}
		if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer) return s.slice(0);
		if (s instanceof DataView) {
			const r = new DataView(s.buffer.slice(0), s.byteOffset, s.byteLength);
			return i.set(s, r), b(r, s, t, i, n), r;
		}
		if (typeof File < "u" && s instanceof File) {
			const r = new File([s], s.name, { type: s.type });
			return i.set(s, r), b(r, s, t, i, n), r;
		}
		if (s instanceof Blob) {
			const r = new Blob([s], { type: s.type });
			return i.set(s, r), b(r, s, t, i, n), r;
		}
		if (s instanceof Error) {
			const r = new s.constructor();
			return i.set(s, r), r.message = s.message, r.name = s.name, r.stack = s.stack, r.cause = s.cause, b(r, s, t, i, n), r;
		}
		if (typeof s == "object" && Ye(s)) {
			const r = Object.create(Object.getPrototypeOf(s));
			return i.set(s, r), b(r, s, t, i, n), r;
		}
		return s;
	}
	function b(s, e, t = s, i, n) {
		const a = [...Object.keys(e), ...se(e)];
		for (let r = 0; r < a.length; r++) {
			const c = a[r], o = Object.getOwnPropertyDescriptor(s, c);
			(o == null || o.writable) && (s[c] = O(e[c], c, t, i, n));
		}
	}
	function Ye(s) {
		switch (ie(s)) {
			case ce:
			case Ue:
			case Fe:
			case Me:
			case ae:
			case je:
			case We:
			case Ve:
			case ze:
			case ke:
			case Ke:
			case Re:
			case ne:
			case Le:
			case qe:
			case _e:
			case re:
			case De:
			case Je:
			case xe:
			case Be:
			case Ge: return !0;
			default: return !1;
		}
	}
	function Qe(s, e) {
		return Xe(s, (t, i, n, a) => {
			const r = e?.(t, i, n, a);
			if (r != null) return r;
			if (typeof s == "object") switch (Object.prototype.toString.call(s)) {
				case ne:
				case re:
				case ae: {
					const c = new s.constructor(s?.valueOf());
					return b(c, s), c;
				}
				case ce: {
					const c = {};
					return b(c, s), c.length = s.length, c[Symbol.iterator] = s[Symbol.iterator], c;
				}
				default: return;
			}
		});
	}
	function oe(s) {
		return Qe(s);
	}
	function he(s) {
		return s !== null && typeof s == "object" && ie(s) === "[object Arguments]";
	}
	function Ze(s) {
		return z(s);
	}
	function Te(s) {
		if (typeof s != "object" || s == null) return !1;
		if (Object.getPrototypeOf(s) === null) return !0;
		if (Object.prototype.toString.call(s) !== "[object Object]") {
			const t = s[Symbol.toStringTag];
			return t == null || !Object.getOwnPropertyDescriptor(s, Symbol.toStringTag)?.writable ? !1 : s.toString() === `[object ${t}]`;
		}
		let e = s;
		for (; Object.getPrototypeOf(e) !== null;) e = Object.getPrototypeOf(e);
		return Object.getPrototypeOf(s) === e;
	}
	function et(s, ...e) {
		const t = e.slice(0, -1), i = e[e.length - 1];
		let n = s;
		for (let a = 0; a < t.length; a++) {
			const r = t[a];
			n = F(n, r, i, /* @__PURE__ */ new Map());
		}
		return n;
	}
	function F(s, e, t, i) {
		if (G(s) && (s = Object(s)), e == null || typeof e != "object") return s;
		if (i.has(e)) return Se(i.get(e));
		if (i.set(e, s), Array.isArray(e)) {
			e = e.slice();
			for (let a = 0; a < e.length; a++) e[a] = e[a] ?? void 0;
		}
		const n = [...Object.keys(e), ...se(e)];
		for (let a = 0; a < n.length; a++) {
			const r = n[a];
			let c = e[r], o = s[r];
			if (he(c) && (c = { ...c }), he(o) && (o = { ...o }), typeof Buffer < "u" && Buffer.isBuffer(c) && (c = oe(c)), Array.isArray(c)) if (typeof o == "object" && o != null) {
				const y = [], g = Reflect.ownKeys(o);
				for (let w = 0; w < g.length; w++) {
					const d = g[w];
					y[d] = o[d];
				}
				o = y;
			} else o = [];
			const v = t(o, c, r, s, e, i);
			v != null ? s[r] = v : Array.isArray(c) || te(o) && te(c) ? s[r] = F(o, c, t, i) : o == null && Te(c) ? s[r] = F({}, c, t, i) : o == null && Ze(c) ? s[r] = oe(c) : (o === void 0 || c !== void 0) && (s[r] = c);
		}
		return s;
	}
	function tt(s, ...e) {
		return et(s, ...e, Ne);
	}
	var st = Object.defineProperty;
	var it = Object.defineProperties;
	var rt = Object.getOwnPropertyDescriptors;
	var pe = Object.getOwnPropertySymbols;
	var nt = Object.prototype.hasOwnProperty;
	var at = Object.prototype.propertyIsEnumerable;
	var de = (s, e, t) => e in s ? st(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var L = (s, e) => {
		for (var t in e || (e = {})) nt.call(e, t) && de(s, t, e[t]);
		if (pe) for (var t of pe(e)) at.call(e, t) && de(s, t, e[t]);
		return s;
	};
	var ct = (s, e) => it(s, rt(e));
	function u(s, e, t) {
		var i;
		const n = p.parseChainId(s);
		return ((i = e.rpcMap) == null ? void 0 : i[n.reference]) || `${ee}?chainId=${n.namespace}:${n.reference}&projectId=${t}`;
	}
	function I(s) {
		return s.includes(":") ? s.split(":")[1] : s;
	}
	function ue(s) {
		return s.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
	}
	function ot(s, e) {
		const t = Object.keys(e.namespaces).filter((n) => n.includes(s));
		if (!t.length) return [];
		const i = [];
		return t.forEach((n) => {
			const a = e.namespaces[n].accounts;
			i.push(...a);
		}), i;
	}
	function M(s = {}, e = {}) {
		return tt(le(s), le(e));
	}
	function le(s) {
		var e, t, i, n, a;
		const r = {};
		if (!p.isValidObject(s)) return r;
		for (const [c, o] of Object.entries(s)) {
			const v = p.isCaipNamespace(c) ? [c] : o.chains, y = o.methods || [], g = o.events || [], w = o.rpcMap || {}, d = p.parseNamespaceKey(c);
			r[d] = ct(L(L({}, r[d]), o), {
				chains: p.mergeArrays(v, (e = r[d]) == null ? void 0 : e.chains),
				methods: p.mergeArrays(y, (t = r[d]) == null ? void 0 : t.methods),
				events: p.mergeArrays(g, (i = r[d]) == null ? void 0 : i.events)
			}), (p.isValidObject(w) || p.isValidObject(((n = r[d]) == null ? void 0 : n.rpcMap) || {})) && (r[d].rpcMap = L(L({}, w), (a = r[d]) == null ? void 0 : a.rpcMap));
		}
		return r;
	}
	function fe(s) {
		return s.includes(":") ? s.split(":")[2] : s;
	}
	function me(s) {
		const e = {};
		for (const [t, i] of Object.entries(s)) {
			const n = i.methods || [], a = i.events || [], r = i.accounts || [];
			e[t] = {
				chains: p.isCaipNamespace(t) ? [t] : i.chains ? i.chains : ue(i.accounts),
				methods: n,
				events: a,
				accounts: r
			};
		}
		return e;
	}
	function k(s) {
		return typeof s == "number" ? s : s.includes("0x") ? parseInt(s, 16) : (s = s.includes(":") ? s.split(":")[1] : s, isNaN(Number(s)) ? s : Number(s));
	}
	var ve = {};
	var h = (s) => ve[s];
	var K = (s, e) => {
		ve[s] = e;
	};
	var ht = Object.defineProperty;
	var pt = (s, e, t) => e in s ? ht(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var A = (s, e, t) => pt(s, typeof e != "symbol" ? e + "" : e, t);
	var dt = class {
		constructor(e) {
			A(this, "name", "polkadot"), A(this, "client"), A(this, "httpProviders"), A(this, "events"), A(this, "namespace"), A(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				const n = I(t);
				e[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var ut = Object.defineProperty;
	var lt = Object.defineProperties;
	var ft = Object.getOwnPropertyDescriptors;
	var ge = Object.getOwnPropertySymbols;
	var mt = Object.prototype.hasOwnProperty;
	var vt = Object.prototype.propertyIsEnumerable;
	var W = (s, e, t) => e in s ? ut(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var Pe = (s, e) => {
		for (var t in e || (e = {})) mt.call(e, t) && W(s, t, e[t]);
		if (ge) for (var t of ge(e)) vt.call(e, t) && W(s, t, e[t]);
		return s;
	};
	var we = (s, e) => lt(s, ft(e));
	var C = (s, e, t) => W(s, typeof e != "symbol" ? e + "" : e, t);
	var gt = class {
		constructor(e) {
			C(this, "name", "eip155"), C(this, "client"), C(this, "chainId"), C(this, "namespace"), C(this, "httpProviders"), C(this, "events"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
		}
		async request(e) {
			switch (e.request.method) {
				case "eth_requestAccounts": return this.getAccounts();
				case "eth_accounts": return this.getAccounts();
				case "wallet_switchEthereumChain": return await this.handleSwitchChain(e);
				case "eth_chainId": return parseInt(this.getDefaultChain());
				case "wallet_getCapabilities": return await this.getCapabilities(e);
				case "wallet_getCallsStatus": return await this.getCallStatus(e);
			}
			return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId.toString();
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		createHttpProvider(e, t) {
			const i = t || u(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new Q.HttpConnection(i, h("disableProviderPing")));
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				const n = parseInt(I(t));
				e[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		getHttpProvider() {
			const e = this.chainId, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		async handleSwitchChain(e) {
			var t, i;
			let n = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
			n = n.startsWith("0x") ? n : `0x${n}`;
			const a = parseInt(n, 16);
			if (this.isChainApproved(a)) this.setDefaultChain(`${a}`);
			else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
				topic: e.topic,
				request: {
					method: e.request.method,
					params: [{ chainId: n }]
				},
				chainId: (i = this.namespace.chains) == null ? void 0 : i[0]
			}), this.setDefaultChain(`${a}`);
			else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
			return null;
		}
		isChainApproved(e) {
			return this.namespace.chains.includes(`${this.name}:${e}`);
		}
		async getCapabilities(e) {
			var t, i, n, a, r;
			const c = (i = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : i[0], v = `${c}${(((a = (n = e.request) == null ? void 0 : n.params) == null ? void 0 : a[1]) || []).join(",")}`;
			if (!c) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
			const y = this.client.session.get(e.topic), g = ((r = y?.sessionProperties) == null ? void 0 : r.capabilities) || {};
			if (g != null && g[v]) return g?.[v];
			const w = await this.client.request(e);
			try {
				await this.client.session.update(e.topic, { sessionProperties: we(Pe({}, y.sessionProperties || {}), { capabilities: we(Pe({}, g || {}), { [v]: w }) }) });
			} catch (d) {
				console.warn("Failed to update session with capabilities", d);
			}
			return w;
		}
		async getCallStatus(e) {
			var t, i;
			const n = this.client.session.get(e.topic), a = (t = n.sessionProperties) == null ? void 0 : t.bundler_name;
			if (a) {
				const c = this.getBundlerUrl(e.chainId, a);
				try {
					return await this.getUserOperationReceipt(c, e);
				} catch (o) {
					console.warn("Failed to fetch call status from bundler", o, c);
				}
			}
			const r = (i = n.sessionProperties) == null ? void 0 : i.bundler_url;
			if (r) try {
				return await this.getUserOperationReceipt(r, e);
			} catch (c) {
				console.warn("Failed to fetch call status from custom bundler", c, r);
			}
			if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
			throw new Error("Fetching call status not approved by the wallet.");
		}
		async getUserOperationReceipt(e, t) {
			var i;
			const n = new URL(e), a = await fetch(n, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(Z.formatJsonRpcRequest("eth_getUserOperationReceipt", [(i = t.request.params) == null ? void 0 : i[0]]))
			});
			if (!a.ok) throw new Error(`Failed to fetch user operation receipt - ${a.status}`);
			return await a.json();
		}
		getBundlerUrl(e, t) {
			return `${Ee}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
		}
	};
	var Pt = Object.defineProperty;
	var wt = (s, e, t) => e in s ? Pt(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var H = (s, e, t) => wt(s, typeof e != "symbol" ? e + "" : e, t);
	var yt = class {
		constructor(e) {
			H(this, "name", "solana"), H(this, "client"), H(this, "httpProviders"), H(this, "events"), H(this, "namespace"), H(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				const n = I(t);
				e[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var bt = Object.defineProperty;
	var It = (s, e, t) => e in s ? bt(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var E = (s, e, t) => It(s, typeof e != "symbol" ? e + "" : e, t);
	var $t = class {
		constructor(e) {
			E(this, "name", "cosmos"), E(this, "client"), E(this, "httpProviders"), E(this, "events"), E(this, "namespace"), E(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				const n = I(t);
				e[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var Ot = Object.defineProperty;
	var At = (s, e, t) => e in s ? Ot(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var N = (s, e, t) => At(s, typeof e != "symbol" ? e + "" : e, t);
	var Ct = class {
		constructor(e) {
			N(this, "name", "algorand"), N(this, "client"), N(this, "httpProviders"), N(this, "events"), N(this, "namespace"), N(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			if (!this.httpProviders[e]) {
				const i = t || u(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
				if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
				this.setHttpProvider(e, i);
			}
			this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			return typeof i > "u" ? void 0 : new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var Ht = Object.defineProperty;
	var Et = (s, e, t) => e in s ? Ht(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var S = (s, e, t) => Et(s, typeof e != "symbol" ? e + "" : e, t);
	var Nt = class {
		constructor(e) {
			S(this, "name", "cip34"), S(this, "client"), S(this, "httpProviders"), S(this, "events"), S(this, "namespace"), S(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				const i = this.getCardanoRPCUrl(t), n = I(t);
				e[n] = this.createHttpProvider(n, i);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		getCardanoRPCUrl(e) {
			const t = this.namespace.rpcMap;
			if (t) return t[e];
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || this.getCardanoRPCUrl(e);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var St = Object.defineProperty;
	var qt = (s, e, t) => e in s ? St(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var q = (s, e, t) => qt(s, typeof e != "symbol" ? e + "" : e, t);
	var Dt = class {
		constructor(e) {
			q(this, "name", "elrond"), q(this, "client"), q(this, "httpProviders"), q(this, "events"), q(this, "namespace"), q(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				const n = I(t);
				e[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var jt = Object.defineProperty;
	var Rt = (s, e, t) => e in s ? jt(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var D = (s, e, t) => Rt(s, typeof e != "symbol" ? e + "" : e, t);
	var _t = class {
		constructor(e) {
			D(this, "name", "multiversx"), D(this, "client"), D(this, "httpProviders"), D(this, "events"), D(this, "namespace"), D(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				const n = I(t);
				e[n] = this.createHttpProvider(n, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var Ut = Object.defineProperty;
	var Ft = (s, e, t) => e in s ? Ut(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var j = (s, e, t) => Ft(s, typeof e != "symbol" ? e + "" : e, t);
	var Lt = class {
		constructor(e) {
			j(this, "name", "near"), j(this, "client"), j(this, "httpProviders"), j(this, "events"), j(this, "namespace"), j(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			if (this.chainId = e, !this.httpProviders[e]) {
				const i = t || u(`${this.name}:${e}`, this.namespace);
				if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
				this.setHttpProvider(e, i);
			}
			this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				var i;
				e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t]);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace);
			return typeof i > "u" ? void 0 : new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var Mt = Object.defineProperty;
	var Jt = (s, e, t) => e in s ? Mt(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var R = (s, e, t) => Jt(s, typeof e != "symbol" ? e + "" : e, t);
	var xt = class {
		constructor(e) {
			R(this, "name", "tezos"), R(this, "client"), R(this, "httpProviders"), R(this, "events"), R(this, "namespace"), R(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace = Object.assign(this.namespace, e);
		}
		requestAccounts() {
			return this.getAccounts();
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request);
		}
		setDefaultChain(e, t) {
			if (this.chainId = e, !this.httpProviders[e]) {
				const i = t || u(`${this.name}:${e}`, this.namespace);
				if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
				this.setHttpProvider(e, i);
			}
			this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]) || [] : [];
		}
		createHttpProviders() {
			const e = {};
			return this.namespace.chains.forEach((t) => {
				e[t] = this.createHttpProvider(t);
			}), e;
		}
		getHttpProvider() {
			const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace);
			return typeof i > "u" ? void 0 : new m.JsonRpcProvider(new P.default(i));
		}
	};
	var Bt = Object.defineProperty;
	var Gt = (s, e, t) => e in s ? Bt(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var _ = (s, e, t) => Gt(s, typeof e != "symbol" ? e + "" : e, t);
	var zt = class {
		constructor(e) {
			_(this, "name", $), _(this, "client"), _(this, "httpProviders"), _(this, "events"), _(this, "namespace"), _(this, "chainId"), this.namespace = e.namespace, this.events = h("events"), this.client = h("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
		}
		updateNamespace(e) {
			this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))], this.httpProviders = this.createHttpProviders();
		}
		requestAccounts() {
			return this.getAccounts();
		}
		request(e) {
			return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
		}
		setDefaultChain(e, t) {
			this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(l.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
		}
		getDefaultChain() {
			if (this.chainId) return this.chainId;
			if (this.namespace.defaultChain) return this.namespace.defaultChain;
			const e = this.namespace.chains[0];
			if (!e) throw new Error("ChainId not found");
			return e.split(":")[1];
		}
		getAccounts() {
			const e = this.namespace.accounts;
			return e ? [...new Set(e.filter((t) => t.split(":")[1] === this.chainId.toString()).map((t) => t.split(":")[2]))] : [];
		}
		createHttpProviders() {
			var e, t;
			const i = {};
			return (t = (e = this.namespace) == null ? void 0 : e.accounts) == null || t.forEach((n) => {
				const a = p.parseChainId(n);
				i[`${a.namespace}:${a.reference}`] = this.createHttpProvider(n);
			}), i;
		}
		getHttpProvider(e) {
			const t = this.httpProviders[e];
			if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
			return t;
		}
		setHttpProvider(e, t) {
			const i = this.createHttpProvider(e, t);
			i && (this.httpProviders[e] = i);
		}
		createHttpProvider(e, t) {
			const i = t || u(e, this.namespace, this.client.core.projectId);
			if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
			return new m.JsonRpcProvider(new P.default(i, h("disableProviderPing")));
		}
	};
	var kt = Object.defineProperty;
	var Kt = Object.defineProperties;
	var Wt = Object.getOwnPropertyDescriptors;
	var ye = Object.getOwnPropertySymbols;
	var Vt = Object.prototype.hasOwnProperty;
	var Xt = Object.prototype.propertyIsEnumerable;
	var V = (s, e, t) => e in s ? kt(s, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: t
	}) : s[e] = t;
	var J = (s, e) => {
		for (var t in e || (e = {})) Vt.call(e, t) && V(s, t, e[t]);
		if (ye) for (var t of ye(e)) Xt.call(e, t) && V(s, t, e[t]);
		return s;
	};
	var X = (s, e) => Kt(s, Wt(e));
	var f = (s, e, t) => V(s, typeof e != "symbol" ? e + "" : e, t);
	var x = class x {
		constructor(e) {
			f(this, "client"), f(this, "namespaces"), f(this, "optionalNamespaces"), f(this, "sessionProperties"), f(this, "scopedProperties"), f(this, "events", new Oe.default()), f(this, "rpcProviders", {}), f(this, "session"), f(this, "providerOpts"), f(this, "logger"), f(this, "uri"), f(this, "disableProviderPing", !1), this.providerOpts = e, this.logger = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : Y.pino(Y.getDefaultLoggerOptions({ level: e?.logger || T })), this.disableProviderPing = e?.disableProviderPing || !1;
		}
		static async init(e) {
			const t = new x(e);
			return await t.initialize(), t;
		}
		async request(e, t, i) {
			const [n, a] = this.validateChain(t);
			if (!this.session) throw new Error("Please call connect() before request()");
			return await this.getProvider(n).request({
				request: J({}, e),
				chainId: `${n}:${a}`,
				topic: this.session.topic,
				expiry: i
			});
		}
		sendAsync(e, t, i, n) {
			const a = (/* @__PURE__ */ new Date()).getTime();
			this.request(e, i, n).then((r) => t(null, Z.formatJsonRpcResult(a, r))).catch((r) => t(r, void 0));
		}
		async enable() {
			if (!this.client) throw new Error("Sign Client not initialized");
			return this.session || await this.connect({
				namespaces: this.namespaces,
				optionalNamespaces: this.optionalNamespaces,
				sessionProperties: this.sessionProperties,
				scopedProperties: this.scopedProperties
			}), await this.requestAccounts();
		}
		async disconnect() {
			var e;
			if (!this.session) throw new Error("Please call connect() before enable()");
			await this.client.disconnect({
				topic: (e = this.session) == null ? void 0 : e.topic,
				reason: p.getSdkError("USER_DISCONNECTED")
			}), await this.cleanup();
		}
		async connect(e) {
			if (!this.client) throw new Error("Sign Client not initialized");
			if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
		}
		async authenticate(e, t) {
			if (!this.client) throw new Error("Sign Client not initialized");
			this.setNamespaces(e), await this.cleanupPendingPairings();
			const { uri: i, response: n } = await this.client.authenticate(e, t);
			i && (this.uri = i, this.events.emit("display_uri", i));
			const a = await n();
			if (this.session = a.session, this.session) {
				const r = me(this.session.namespaces);
				this.namespaces = M(this.namespaces, r), await this.persist("namespaces", this.namespaces), this.onConnect();
			}
			return a;
		}
		on(e, t) {
			this.events.on(e, t);
		}
		once(e, t) {
			this.events.once(e, t);
		}
		removeListener(e, t) {
			this.events.removeListener(e, t);
		}
		off(e, t) {
			this.events.off(e, t);
		}
		get isWalletConnect() {
			return !0;
		}
		async pair(e) {
			const { uri: t, approval: i } = await this.client.connect({
				pairingTopic: e,
				requiredNamespaces: this.namespaces,
				optionalNamespaces: this.optionalNamespaces,
				sessionProperties: this.sessionProperties,
				scopedProperties: this.scopedProperties
			});
			t && (this.uri = t, this.events.emit("display_uri", t));
			const n = await i();
			this.session = n;
			const a = me(n.namespaces);
			return this.namespaces = M(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
		}
		setDefaultChain(e, t) {
			try {
				if (!this.session) return;
				const [i, n] = this.validateChain(e), a = this.getProvider(i);
				a.name === $ ? a.setDefaultChain(`${i}:${n}`, t) : a.setDefaultChain(n, t);
			} catch (i) {
				if (!/Please call connect/.test(i.message)) throw i;
			}
		}
		async cleanupPendingPairings(e = {}) {
			this.logger.info("Cleaning up inactive pairings...");
			const t = this.client.pairing.getAll();
			if (p.isValidArray(t)) {
				for (const i of t) e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
				this.logger.info(`Inactive pairings cleared: ${t.length}`);
			}
		}
		abortPairingAttempt() {
			this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
		}
		async checkStorage() {
			this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
		}
		async initialize() {
			this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
		}
		async createClient() {
			var e, t;
			if (this.client = this.providerOpts.client || await $e.default.init({
				core: this.providerOpts.core,
				logger: this.providerOpts.logger || T,
				relayUrl: this.providerOpts.relayUrl || Ae,
				projectId: this.providerOpts.projectId,
				metadata: this.providerOpts.metadata,
				storageOptions: this.providerOpts.storageOptions,
				storage: this.providerOpts.storage,
				name: this.providerOpts.name,
				customStoragePrefix: this.providerOpts.customStoragePrefix,
				telemetryEnabled: this.providerOpts.telemetryEnabled
			}), this.providerOpts.session) try {
				this.session = this.client.session.get(this.providerOpts.session.topic);
			} catch (i) {
				throw this.logger.error("Failed to get session", i), /* @__PURE__ */ new Error(`The provided session: ${(t = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : t.topic} doesn't exist in the Sign client`);
			}
			else {
				const i = this.client.session.getAll();
				this.session = i[0];
			}
			this.logger.trace("SignClient Initialized");
		}
		createProviders() {
			if (!this.client) throw new Error("Sign Client not initialized");
			if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
			const e = [...new Set(Object.keys(this.session.namespaces).map((t) => p.parseNamespaceKey(t)))];
			K("client", this.client), K("events", this.events), K("disableProviderPing", this.disableProviderPing), e.forEach((t) => {
				if (!this.session) return;
				const i = ot(t, this.session), n = ue(i), r = X(J({}, M(this.namespaces, this.optionalNamespaces)[t]), {
					accounts: i,
					chains: n
				});
				switch (t) {
					case "eip155":
						this.rpcProviders[t] = new gt({ namespace: r });
						break;
					case "algorand":
						this.rpcProviders[t] = new Ct({ namespace: r });
						break;
					case "solana":
						this.rpcProviders[t] = new yt({ namespace: r });
						break;
					case "cosmos":
						this.rpcProviders[t] = new $t({ namespace: r });
						break;
					case "polkadot":
						this.rpcProviders[t] = new dt({ namespace: r });
						break;
					case "cip34":
						this.rpcProviders[t] = new Nt({ namespace: r });
						break;
					case "elrond":
						this.rpcProviders[t] = new Dt({ namespace: r });
						break;
					case "multiversx":
						this.rpcProviders[t] = new _t({ namespace: r });
						break;
					case "near":
						this.rpcProviders[t] = new Lt({ namespace: r });
						break;
					case "tezos":
						this.rpcProviders[t] = new xt({ namespace: r });
						break;
					default: this.rpcProviders[$] ? this.rpcProviders[$].updateNamespace(r) : this.rpcProviders[$] = new zt({ namespace: r });
				}
			});
		}
		registerEventListeners() {
			if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
			this.client.on("session_ping", (e) => {
				var t;
				const { topic: i } = e;
				i === ((t = this.session) == null ? void 0 : t.topic) && this.events.emit("session_ping", e);
			}), this.client.on("session_event", (e) => {
				var t;
				const { params: i, topic: n } = e;
				if (n !== ((t = this.session) == null ? void 0 : t.topic)) return;
				const { event: a } = i;
				if (a.name === "accountsChanged") {
					const r = a.data;
					r && p.isValidArray(r) && this.events.emit("accountsChanged", r.map(fe));
				} else if (a.name === "chainChanged") {
					const r = i.chainId, c = i.event.data, o = p.parseNamespaceKey(r), v = k(r) !== k(c) ? `${o}:${k(c)}` : r;
					this.onChainChanged(v);
				} else this.events.emit(a.name, a.data);
				this.events.emit("session_event", e);
			}), this.client.on("session_update", ({ topic: e, params: t }) => {
				var i, n;
				if (e !== ((i = this.session) == null ? void 0 : i.topic)) return;
				const { namespaces: a } = t, r = (n = this.client) == null ? void 0 : n.session.get(e);
				this.session = X(J({}, r), { namespaces: a }), this.onSessionUpdate(), this.events.emit("session_update", {
					topic: e,
					params: t
				});
			}), this.client.on("session_delete", async (e) => {
				var t;
				e.topic === ((t = this.session) == null ? void 0 : t.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", X(J({}, p.getSdkError("USER_DISCONNECTED")), { data: e.topic })));
			}), this.on(l.DEFAULT_CHAIN_CHANGED, (e) => {
				this.onChainChanged(e, !0);
			});
		}
		getProvider(e) {
			return this.rpcProviders[e] || this.rpcProviders[$];
		}
		onSessionUpdate() {
			Object.keys(this.rpcProviders).forEach((e) => {
				var t;
				this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e]);
			});
		}
		setNamespaces(e) {
			const { namespaces: t = {}, optionalNamespaces: i = {}, sessionProperties: n, scopedProperties: a } = e;
			this.optionalNamespaces = M(t, i), this.sessionProperties = n, this.scopedProperties = a;
		}
		validateChain(e) {
			const [t, i] = e?.split(":") || ["", ""];
			if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i];
			if (t && !Object.keys(this.namespaces || {}).map((r) => p.parseNamespaceKey(r)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
			if (t && i) return [t, i];
			const n = p.parseNamespaceKey(Object.keys(this.namespaces)[0]);
			return [n, this.rpcProviders[n].getDefaultChain()];
		}
		async requestAccounts() {
			const [e] = this.validateChain();
			return await this.getProvider(e).requestAccounts();
		}
		async onChainChanged(e, t = !1) {
			if (!this.namespaces) return;
			const [i, n] = this.validateChain(e);
			if (!n) return;
			this.updateNamespaceChain(i, n), this.events.emit("chainChanged", n);
			const a = this.getProvider(i).getDefaultChain();
			t || this.getProvider(i).setDefaultChain(n), this.emitAccountsChangedOnChainChange({
				namespace: i,
				previousChainId: a,
				newChainId: e
			}), await this.persist("namespaces", this.namespaces);
		}
		emitAccountsChangedOnChainChange({ namespace: e, previousChainId: t, newChainId: i }) {
			var n, a;
			try {
				if (t === i) return;
				const r = (a = (n = this.session) == null ? void 0 : n.namespaces[e]) == null ? void 0 : a.accounts;
				if (!r) return;
				const c = r.filter((o) => o.includes(`${i}:`)).map(fe);
				if (!p.isValidArray(c)) return;
				this.events.emit("accountsChanged", c);
			} catch (r) {
				this.logger.warn("Failed to emit accountsChanged on chain change", r);
			}
		}
		updateNamespaceChain(e, t) {
			if (!this.namespaces) return;
			const i = this.namespaces[e] ? e : `${e}:${t}`, n = {
				chains: [],
				methods: [],
				events: [],
				defaultChain: t
			};
			this.namespaces[i] ? this.namespaces[i] && (this.namespaces[i].defaultChain = t) : this.namespaces[i] = n;
		}
		onConnect() {
			this.createProviders(), this.events.emit("connect", { session: this.session });
		}
		async cleanup() {
			this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: !0 }), await this.cleanupStorage();
		}
		async persist(e, t) {
			var i;
			const n = ((i = this.session) == null ? void 0 : i.topic) || "";
			await this.client.core.storage.setItem(`${U}/${e}${n}`, t);
		}
		async getFromStore(e) {
			var t;
			const i = ((t = this.session) == null ? void 0 : t.topic) || "";
			return await this.client.core.storage.getItem(`${U}/${e}${i}`);
		}
		async deleteFromStore(e) {
			var t;
			const i = ((t = this.session) == null ? void 0 : t.topic) || "";
			await this.client.core.storage.removeItem(`${U}/${e}${i}`);
		}
		async cleanupStorage() {
			var e;
			try {
				if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
				const t = await this.client.core.storage.getKeys();
				for (const i of t) i.startsWith(U) && await this.client.core.storage.removeItem(i);
			} catch (t) {
				this.logger.warn("Failed to cleanup storage", t);
			}
		}
	};
	exports.UniversalProvider = x, exports.default = x;
}));
//#endregion
//#region node_modules/@walletconnect/ethereum-provider/dist/index.cjs.js
var require_index_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: !0 });
	var j = __require("events");
	var w = (init_index_es$6(), __toCommonJS(index_es_exports$4));
	var N = require_index_cjs$1();
	function W(n) {
		if (n && n.__esModule) return n;
		var t = Object.create(null);
		return n && Object.keys(n).forEach(function(e) {
			if (e !== "default") {
				var s = Object.getOwnPropertyDescriptor(n, e);
				Object.defineProperty(t, e, s.get ? s : {
					enumerable: !0,
					get: function() {
						return n[e];
					}
				});
			}
		}), t.default = n, Object.freeze(t);
	}
	var q = `wc@2:ethereum_provider:`;
	var D = "https://rpc.walletconnect.org/v1/";
	var I = ["eth_sendTransaction", "personal_sign"];
	var _ = [
		"eth_accounts",
		"eth_requestAccounts",
		"eth_sendRawTransaction",
		"eth_sign",
		"eth_signTransaction",
		"eth_signTypedData",
		"eth_signTypedData_v3",
		"eth_signTypedData_v4",
		"eth_sendTransaction",
		"personal_sign",
		"wallet_switchEthereumChain",
		"wallet_addEthereumChain",
		"wallet_getPermissions",
		"wallet_requestPermissions",
		"wallet_registerOnboarding",
		"wallet_watchAsset",
		"wallet_scanQRCode",
		"wallet_sendCalls",
		"wallet_getCapabilities",
		"wallet_getCallsStatus",
		"wallet_showCallsStatus"
	];
	var C = ["chainChanged", "accountsChanged"];
	var P = [
		"chainChanged",
		"accountsChanged",
		"message",
		"disconnect",
		"connect"
	];
	var U = async () => {
		const { createAppKit: n } = await Promise.resolve().then(function() {
			return W((init_core(), __toCommonJS(core_exports)));
		});
		return n;
	};
	var k = Object.defineProperty;
	var z = Object.defineProperties;
	var L = Object.getOwnPropertyDescriptors;
	var A = Object.getOwnPropertySymbols;
	var Q = Object.prototype.hasOwnProperty;
	var K = Object.prototype.propertyIsEnumerable;
	var O = (n, t, e) => t in n ? k(n, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: e
	}) : n[t] = e;
	var v = (n, t) => {
		for (var e in t || (t = {})) Q.call(t, e) && O(n, e, t[e]);
		if (A) for (var e of A(t)) K.call(t, e) && O(n, e, t[e]);
		return n;
	};
	var f = (n, t) => z(n, L(t));
	var p = (n, t, e) => O(n, typeof t != "symbol" ? t + "" : t, e);
	function E(n) {
		return Number(n[0].split(":")[1]);
	}
	function b(n) {
		return `0x${n.toString(16)}`;
	}
	function V(n) {
		const { chains: t, optionalChains: e, methods: s, optionalMethods: i, events: a, optionalEvents: o, rpcMap: u } = n;
		if (!w.isValidArray(t)) throw new Error("Invalid chains");
		const c = {
			chains: t,
			methods: s || I,
			events: a || C,
			rpcMap: v({}, t.length ? { [E(t)]: u[E(t)] } : {})
		}, l = a?.filter((d) => !C.includes(d)), r = s?.filter((d) => !I.includes(d));
		if (!e && !o && !i && !(l != null && l.length) && !(r != null && r.length)) return { required: t.length ? c : void 0 };
		const m = l?.length && r?.length || !e, h = {
			chains: [...new Set(m ? c.chains.concat(e || []) : e)],
			methods: [...new Set(c.methods.concat(i != null && i.length ? i : _))],
			events: [...new Set(c.events.concat(o != null && o.length ? o : P))],
			rpcMap: u
		};
		return {
			required: t.length ? c : void 0,
			optional: e.length ? h : void 0
		};
	}
	var y = class y {
		constructor() {
			p(this, "events", new j.EventEmitter()), p(this, "namespace", "eip155"), p(this, "accounts", []), p(this, "signer"), p(this, "chainId", 1), p(this, "modal"), p(this, "rpc"), p(this, "STORAGE_KEY", q), p(this, "on", (t, e) => (this.events.on(t, e), this)), p(this, "once", (t, e) => (this.events.once(t, e), this)), p(this, "removeListener", (t, e) => (this.events.removeListener(t, e), this)), p(this, "off", (t, e) => (this.events.off(t, e), this)), p(this, "parseAccount", (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t), this.signer = {}, this.rpc = {};
		}
		static async init(t) {
			const e = new y();
			return await e.initialize(t), e;
		}
		async request(t, e) {
			return await this.signer.request(t, this.formatChainId(this.chainId), e);
		}
		sendAsync(t, e, s) {
			this.signer.sendAsync(t, e, this.formatChainId(this.chainId), s);
		}
		get connected() {
			return this.signer.client ? this.signer.client.core.relayer.connected : !1;
		}
		get connecting() {
			return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
		}
		async enable() {
			return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
		}
		async connect(t) {
			var e;
			if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
			this.loadConnectOpts(t);
			const { required: s, optional: i } = V(this.rpc);
			try {
				const a = await new Promise(async (u, c) => {
					var l, r;
					this.rpc.showQrModal && ((l = this.modal) == null || l.open(), (r = this.modal) == null || r.subscribeState((h) => {
						!h.open && !this.signer.session && (this.signer.abortPairingAttempt(), c(/* @__PURE__ */ new Error("Connection request reset. Please try again.")));
					}));
					const m = t != null && t.scopedProperties ? { [this.namespace]: t.scopedProperties } : void 0;
					await this.signer.connect(f(v({ namespaces: v({}, s && { [this.namespace]: s }) }, i && { optionalNamespaces: { [this.namespace]: i } }), {
						pairingTopic: t?.pairingTopic,
						scopedProperties: m
					})).then((h) => {
						u(h);
					}).catch((h) => {
						var d;
						(d = this.modal) == null || d.showErrorMessage("Unable to connect"), c(new Error(h.message));
					});
				});
				if (!a) return;
				const o = w.getAccountsFromNamespaces(a.namespaces, [this.namespace]);
				this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: b(this.chainId) });
			} catch (a) {
				throw this.signer.logger.error(a), a;
			} finally {
				(e = this.modal) == null || e.close();
			}
		}
		async authenticate(t, e) {
			var s;
			if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
			this.loadConnectOpts({ chains: t?.chains });
			try {
				const i = await new Promise(async (o, u) => {
					var c, l;
					this.rpc.showQrModal && ((c = this.modal) == null || c.open(), (l = this.modal) == null || l.subscribeState((r) => {
						!r.open && !this.signer.session && (this.signer.abortPairingAttempt(), u(/* @__PURE__ */ new Error("Connection request reset. Please try again.")));
					})), await this.signer.authenticate(f(v({}, t), { chains: this.rpc.chains }), e).then((r) => {
						o(r);
					}).catch((r) => {
						var m;
						(m = this.modal) == null || m.showErrorMessage("Unable to connect"), u(new Error(r.message));
					});
				}), a = i.session;
				if (a) {
					const o = w.getAccountsFromNamespaces(a.namespaces, [this.namespace]);
					this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o), this.setAccounts(o), this.events.emit("connect", { chainId: b(this.chainId) });
				}
				return i;
			} catch (i) {
				throw this.signer.logger.error(i), i;
			} finally {
				(s = this.modal) == null || s.close();
			}
		}
		async disconnect() {
			this.session && await this.signer.disconnect(), this.reset();
		}
		get isWalletConnect() {
			return !0;
		}
		get session() {
			return this.signer.session;
		}
		registerEventListeners() {
			this.signer.on("session_event", (t) => {
				const { params: e } = t, { event: s } = e;
				s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", t);
			}), this.signer.on("accountsChanged", (t) => {
				this.accounts = this.parseAccounts(t), this.events.emit("accountsChanged", this.accounts);
			}), this.signer.on("chainChanged", (t) => {
				const e = parseInt(t);
				this.chainId = e, this.events.emit("chainChanged", b(this.chainId)), this.persist();
			}), this.signer.on("session_update", (t) => {
				this.events.emit("session_update", t);
			}), this.signer.on("session_delete", (t) => {
				this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", f(v({}, w.getSdkError("USER_DISCONNECTED")), {
					data: t.topic,
					name: "USER_DISCONNECTED"
				}));
			}), this.signer.on("display_uri", (t) => {
				this.events.emit("display_uri", t);
			});
		}
		switchEthereumChain(t) {
			this.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: t.toString(16) }]
			});
		}
		isCompatibleChainId(t) {
			return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
		}
		formatChainId(t) {
			return `${this.namespace}:${t}`;
		}
		parseChainId(t) {
			return Number(t.split(":")[1]);
		}
		setChainIds(t) {
			const e = t.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
			e.length && (this.chainId = e[0], this.events.emit("chainChanged", b(this.chainId)), this.persist());
		}
		setChainId(t) {
			if (this.isCompatibleChainId(t)) {
				const e = this.parseChainId(t);
				this.chainId = e, this.switchEthereumChain(e);
			}
		}
		parseAccountId(t) {
			const [e, s, i] = t.split(":");
			return {
				chainId: `${e}:${s}`,
				address: i
			};
		}
		setAccounts(t) {
			this.accounts = t.filter((e) => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map((e) => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts);
		}
		getRpcConfig(t) {
			var e, s;
			const i = (e = t?.chains) != null ? e : [], a = (s = t?.optionalChains) != null ? s : [], o = i.concat(a);
			if (!o.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
			const u = i.length ? t?.methods || I : [], c = i.length ? t?.events || C : [], l = t?.optionalMethods || [], r = t?.optionalEvents || [], m = t?.rpcMap || this.buildRpcMap(o, t.projectId), h = t?.qrModalOptions || void 0;
			return {
				chains: i?.map((d) => this.formatChainId(d)),
				optionalChains: a.map((d) => this.formatChainId(d)),
				methods: u,
				events: c,
				optionalMethods: l,
				optionalEvents: r,
				rpcMap: m,
				showQrModal: !!(t != null && t.showQrModal),
				qrModalOptions: h,
				projectId: t.projectId,
				metadata: t.metadata
			};
		}
		buildRpcMap(t, e) {
			const s = {};
			return t.forEach((i) => {
				s[i] = this.getRpcUrl(i, e);
			}), s;
		}
		async initialize(t) {
			if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? E(this.rpc.chains) : E(this.rpc.optionalChains), this.signer = await N.UniversalProvider.init({
				projectId: this.rpc.projectId,
				metadata: this.rpc.metadata,
				disableProviderPing: t.disableProviderPing,
				relayUrl: t.relayUrl,
				storage: t.storage,
				storageOptions: t.storageOptions,
				customStoragePrefix: t.customStoragePrefix,
				telemetryEnabled: t.telemetryEnabled,
				logger: t.logger
			}), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
				let e;
				try {
					const s = await U(), { convertWCMToAppKitOptions: i } = await Promise.resolve().then(function() {
						return nt;
					}), a = i(f(v({}, this.rpc.qrModalOptions), {
						chains: [.../* @__PURE__ */ new Set([...this.rpc.chains, ...this.rpc.optionalChains])],
						metadata: this.rpc.metadata,
						projectId: this.rpc.projectId
					}));
					if (!a.networks.length) throw new Error("No networks found for WalletConnect·");
					e = s(f(v({}, a), {
						universalProvider: this.signer,
						manualWCControl: !0
					}));
				} catch (s) {
					throw console.warn(s), /* @__PURE__ */ new Error("To use QR modal, please install @reown/appkit package");
				}
				if (e) try {
					this.modal = e;
				} catch (s) {
					throw this.signer.logger.error(s), /* @__PURE__ */ new Error("Could not generate WalletConnectModal Instance");
				}
			}
		}
		loadConnectOpts(t) {
			if (!t) return;
			const { chains: e, optionalChains: s, rpcMap: i } = t;
			e && w.isValidArray(e) && (this.rpc.chains = e.map((a) => this.formatChainId(a)), e.forEach((a) => {
				this.rpc.rpcMap[a] = i?.[a] || this.getRpcUrl(a);
			})), s && w.isValidArray(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s?.map((a) => this.formatChainId(a)), s.forEach((a) => {
				this.rpc.rpcMap[a] = i?.[a] || this.getRpcUrl(a);
			}));
		}
		getRpcUrl(t, e) {
			var s;
			return ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) || `${D}?chainId=eip155:${t}&projectId=${e || this.rpc.projectId}`;
		}
		async loadPersistedSession() {
			if (this.session) try {
				const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
				this.setChainIds(t ? [this.formatChainId(t)] : e?.accounts), this.setAccounts(e?.accounts);
			} catch (t) {
				this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((e) => this.signer.logger.warn(e));
			}
		}
		reset() {
			this.chainId = 1, this.accounts = [];
		}
		persist() {
			this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
		}
		parseAccounts(t) {
			return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((e) => this.parseAccount(e));
		}
	};
	var H = y;
	var G = Object.defineProperty;
	var Y = Object.defineProperties;
	var F = Object.getOwnPropertyDescriptors;
	var M = Object.getOwnPropertySymbols;
	var B = Object.prototype.hasOwnProperty;
	var X = Object.prototype.propertyIsEnumerable;
	var T = (n, t, e) => t in n ? G(n, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: e
	}) : n[t] = e;
	var S = (n, t) => {
		for (var e in t || (t = {})) B.call(t, e) && T(n, e, t[e]);
		if (M) for (var e of M(t)) X.call(t, e) && T(n, e, t[e]);
		return n;
	};
	var J = (n, t) => Y(n, F(t));
	function Z(n) {
		if (n) return {
			"--w3m-font-family": n["--wcm-font-family"],
			"--w3m-accent": n["--wcm-accent-color"],
			"--w3m-color-mix": n["--wcm-background-color"],
			"--w3m-z-index": n["--wcm-z-index"] ? Number(n["--wcm-z-index"]) : void 0,
			"--w3m-qr-color": n["--wcm-accent-color"],
			"--w3m-font-size-master": n["--wcm-text-medium-regular-size"],
			"--w3m-border-radius-master": n["--wcm-container-border-radius"],
			"--w3m-color-mix-strength": 0
		};
	}
	var tt = (n) => {
		const [t, e] = n.split(":");
		return R({
			id: e,
			caipNetworkId: n,
			chainNamespace: t,
			name: "",
			nativeCurrency: {
				name: "",
				symbol: "",
				decimals: 8
			},
			rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } }
		});
	};
	function et(n) {
		var t, e, s, i, a, o, u;
		const c = (t = n.chains) == null ? void 0 : t.map(tt).filter(Boolean);
		if (c.length === 0) throw new Error("At least one chain must be specified");
		const l = c.find((m) => {
			var h;
			return m.id === ((h = n.defaultChain) == null ? void 0 : h.id);
		}), r = {
			projectId: n.projectId,
			networks: c,
			themeMode: n.themeMode,
			themeVariables: Z(n.themeVariables),
			chainImages: n.chainImages,
			connectorImages: n.walletImages,
			defaultNetwork: l,
			metadata: J(S({}, n.metadata), {
				name: ((e = n.metadata) == null ? void 0 : e.name) || "WalletConnect",
				description: ((s = n.metadata) == null ? void 0 : s.description) || "Connect to WalletConnect-compatible wallets",
				url: ((i = n.metadata) == null ? void 0 : i.url) || "https://walletconnect.org",
				icons: ((a = n.metadata) == null ? void 0 : a.icons) || ["https://walletconnect.org/walletconnect-logo.png"]
			}),
			showWallets: !0,
			featuredWalletIds: n.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(n.explorerRecommendedWalletIds) ? n.explorerRecommendedWalletIds : [],
			excludeWalletIds: n.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(n.explorerExcludedWalletIds) ? n.explorerExcludedWalletIds : [],
			enableEIP6963: !1,
			enableInjected: !1,
			enableCoinbase: !0,
			enableWalletConnect: !0,
			features: {
				email: !1,
				socials: !1
			}
		};
		if ((o = n.mobileWallets) != null && o.length || (u = n.desktopWallets) != null && u.length) {
			const m = [...(n.mobileWallets || []).map((g) => ({
				id: g.id,
				name: g.name,
				links: g.links
			})), ...(n.desktopWallets || []).map((g) => ({
				id: g.id,
				name: g.name,
				links: {
					native: g.links.native,
					universal: g.links.universal
				}
			}))], h = [...r.featuredWalletIds || [], ...r.excludeWalletIds || []], d = m.filter((g) => !h.includes(g.id));
			d.length && (r.customWallets = d);
		}
		return r;
	}
	function R(n) {
		return S({
			formatters: void 0,
			fees: void 0,
			serializers: void 0
		}, n);
	}
	var nt = Object.freeze({
		__proto__: null,
		convertWCMToAppKitOptions: et,
		defineChain: R
	});
	exports.EthereumProvider = H, exports.OPTIONAL_EVENTS = P, exports.OPTIONAL_METHODS = _, exports.REQUIRED_EVENTS = C, exports.REQUIRED_METHODS = I, exports.default = y;
}));
//#endregion
export { require_index_cjs as t };
