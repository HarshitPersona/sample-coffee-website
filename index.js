!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.PersonaAdSDK = e())
    : (t.PersonaAdSDK = e());
})(this, () =>
  (() => {
    "use strict";
    var t = {
        758: (t, e, n) => {
          n.d(e, { r: () => o });
          var r = n(7135),
            i = n(4038),
            s = n(4975);
          function o() {
            (0, i.T)(),
              (0, s.KV)() &&
                (function () {
                  const e = (0, r.cu)();
                  if (!e.__SENTRY__) return;
                  const n = {
                      mongodb: () =>
                        new ((0, s.l$)(t, "./node/integrations/mongo").Mongo)(),
                      mongoose: () =>
                        new ((0, s.l$)(t, "./node/integrations/mongo").Mongo)(),
                      mysql: () =>
                        new ((0, s.l$)(t, "./node/integrations/mysql").Mysql)(),
                      pg: () =>
                        new ((0, s.l$)(
                          t,
                          "./node/integrations/postgres"
                        ).Postgres)(),
                    },
                    i = Object.keys(n)
                      .filter((t) => !!(0, s.$y)(t))
                      .map((t) => {
                        try {
                          return n[t]();
                        } catch (t) {
                          return;
                        }
                      })
                      .filter((t) => t);
                  i.length > 0 &&
                    (e.__SENTRY__.integrations = [
                      ...(e.__SENTRY__.integrations || []),
                      ...i,
                    ]);
                })();
          }
          t = n.hmd(t);
        },
        6528: (t, e, n) => {
          n.d(e, { J: () => r });
          const r = "production";
        },
        7135: (t, e, n) => {
          n.d(e, { Gd: () => b, cu: () => g });
          var r,
            i = n(9554),
            s = n(3809),
            o = n(4121),
            a = n(8380),
            c = n(6528),
            u = n(3793);
          !(function (t) {
            (t[(t.PENDING = 0)] = "PENDING"),
              (t[(t.RESOLVED = 1)] = "RESOLVED"),
              (t[(t.REJECTED = 2)] = "REJECTED");
          })(r || (r = {}));
          class l {
            __init() {
              this._state = r.PENDING;
            }
            __init2() {
              this._handlers = [];
            }
            constructor(t) {
              l.prototype.__init.call(this),
                l.prototype.__init2.call(this),
                l.prototype.__init3.call(this),
                l.prototype.__init4.call(this),
                l.prototype.__init5.call(this),
                l.prototype.__init6.call(this);
              try {
                t(this._resolve, this._reject);
              } catch (t) {
                this._reject(t);
              }
            }
            then(t, e) {
              return new l((n, r) => {
                this._handlers.push([
                  !1,
                  (e) => {
                    if (t)
                      try {
                        n(t(e));
                      } catch (t) {
                        r(t);
                      }
                    else n(e);
                  },
                  (t) => {
                    if (e)
                      try {
                        n(e(t));
                      } catch (t) {
                        r(t);
                      }
                    else r(t);
                  },
                ]),
                  this._executeHandlers();
              });
            }
            catch(t) {
              return this.then((t) => t, t);
            }
            finally(t) {
              return new l((e, n) => {
                let r, i;
                return this.then(
                  (e) => {
                    (i = !1), (r = e), t && t();
                  },
                  (e) => {
                    (i = !0), (r = e), t && t();
                  }
                ).then(() => {
                  i ? n(r) : e(r);
                });
              });
            }
            __init3() {
              this._resolve = (t) => {
                this._setResult(r.RESOLVED, t);
              };
            }
            __init4() {
              this._reject = (t) => {
                this._setResult(r.REJECTED, t);
              };
            }
            __init5() {
              this._setResult = (t, e) => {
                this._state === r.PENDING &&
                  ((0, u.J8)(e)
                    ? e.then(this._resolve, this._reject)
                    : ((this._state = t),
                      (this._value = e),
                      this._executeHandlers()));
              };
            }
            __init6() {
              this._executeHandlers = () => {
                if (this._state === r.PENDING) return;
                const t = this._handlers.slice();
                (this._handlers = []),
                  t.forEach((t) => {
                    t[0] ||
                      (this._state === r.RESOLVED && t[1](this._value),
                      this._state === r.REJECTED && t[2](this._value),
                      (t[0] = !0));
                  });
              };
            }
          }
          var d = n(9040);
          function p(t, e = {}) {
            if (
              (e.user &&
                (!t.ipAddress &&
                  e.user.ip_address &&
                  (t.ipAddress = e.user.ip_address),
                t.did ||
                  e.did ||
                  (t.did = e.user.id || e.user.email || e.user.username)),
              (t.timestamp = e.timestamp || (0, s.ph)()),
              e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
              e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()),
              void 0 !== e.init && (t.init = e.init),
              !t.did && e.did && (t.did = `${e.did}`),
              "number" == typeof e.started && (t.started = e.started),
              t.ignoreDuration)
            )
              t.duration = void 0;
            else if ("number" == typeof e.duration) t.duration = e.duration;
            else {
              const e = t.timestamp - t.started;
              t.duration = e >= 0 ? e : 0;
            }
            e.release && (t.release = e.release),
              e.environment && (t.environment = e.environment),
              !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
              !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
              "number" == typeof e.errors && (t.errors = e.errors),
              e.status && (t.status = e.status);
          }
          class h {
            constructor() {
              (this._notifyingListeners = !1),
                (this._scopeListeners = []),
                (this._eventProcessors = []),
                (this._breadcrumbs = []),
                (this._attachments = []),
                (this._user = {}),
                (this._tags = {}),
                (this._extra = {}),
                (this._contexts = {}),
                (this._sdkProcessingMetadata = {}),
                (this._propagationContext = f());
            }
            static clone(t) {
              const e = new h();
              return (
                t &&
                  ((e._breadcrumbs = [...t._breadcrumbs]),
                  (e._tags = { ...t._tags }),
                  (e._extra = { ...t._extra }),
                  (e._contexts = { ...t._contexts }),
                  (e._user = t._user),
                  (e._level = t._level),
                  (e._span = t._span),
                  (e._session = t._session),
                  (e._transactionName = t._transactionName),
                  (e._fingerprint = t._fingerprint),
                  (e._eventProcessors = [...t._eventProcessors]),
                  (e._requestSession = t._requestSession),
                  (e._attachments = [...t._attachments]),
                  (e._sdkProcessingMetadata = { ...t._sdkProcessingMetadata }),
                  (e._propagationContext = { ...t._propagationContext })),
                e
              );
            }
            addScopeListener(t) {
              this._scopeListeners.push(t);
            }
            addEventProcessor(t) {
              return this._eventProcessors.push(t), this;
            }
            setUser(t) {
              return (
                (this._user = t || {}),
                this._session && p(this._session, { user: t }),
                this._notifyScopeListeners(),
                this
              );
            }
            getUser() {
              return this._user;
            }
            getRequestSession() {
              return this._requestSession;
            }
            setRequestSession(t) {
              return (this._requestSession = t), this;
            }
            setTags(t) {
              return (
                (this._tags = { ...this._tags, ...t }),
                this._notifyScopeListeners(),
                this
              );
            }
            setTag(t, e) {
              return (
                (this._tags = { ...this._tags, [t]: e }),
                this._notifyScopeListeners(),
                this
              );
            }
            setExtras(t) {
              return (
                (this._extra = { ...this._extra, ...t }),
                this._notifyScopeListeners(),
                this
              );
            }
            setExtra(t, e) {
              return (
                (this._extra = { ...this._extra, [t]: e }),
                this._notifyScopeListeners(),
                this
              );
            }
            setFingerprint(t) {
              return (
                (this._fingerprint = t), this._notifyScopeListeners(), this
              );
            }
            setLevel(t) {
              return (this._level = t), this._notifyScopeListeners(), this;
            }
            setTransactionName(t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              );
            }
            setContext(t, e) {
              return (
                null === e ? delete this._contexts[t] : (this._contexts[t] = e),
                this._notifyScopeListeners(),
                this
              );
            }
            setSpan(t) {
              return (this._span = t), this._notifyScopeListeners(), this;
            }
            getSpan() {
              return this._span;
            }
            getTransaction() {
              const t = this.getSpan();
              return t && t.transaction;
            }
            setSession(t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              );
            }
            getSession() {
              return this._session;
            }
            update(t) {
              if (!t) return this;
              if ("function" == typeof t) {
                const e = t(this);
                return e instanceof h ? e : this;
              }
              return (
                t instanceof h
                  ? ((this._tags = { ...this._tags, ...t._tags }),
                    (this._extra = { ...this._extra, ...t._extra }),
                    (this._contexts = { ...this._contexts, ...t._contexts }),
                    t._user &&
                      Object.keys(t._user).length &&
                      (this._user = t._user),
                    t._level && (this._level = t._level),
                    t._fingerprint && (this._fingerprint = t._fingerprint),
                    t._requestSession &&
                      (this._requestSession = t._requestSession),
                    t._propagationContext &&
                      (this._propagationContext = t._propagationContext))
                  : (0, u.PO)(t) &&
                    ((this._tags = { ...this._tags, ...t.tags }),
                    (this._extra = { ...this._extra, ...t.extra }),
                    (this._contexts = { ...this._contexts, ...t.contexts }),
                    t.user && (this._user = t.user),
                    t.level && (this._level = t.level),
                    t.fingerprint && (this._fingerprint = t.fingerprint),
                    t.requestSession &&
                      (this._requestSession = t.requestSession),
                    t.propagationContext &&
                      (this._propagationContext = t.propagationContext)),
                this
              );
            }
            clear() {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                (this._attachments = []),
                (this._propagationContext = f()),
                this
              );
            }
            addBreadcrumb(t, e) {
              const n = "number" == typeof e ? e : 100;
              if (n <= 0) return this;
              const r = { timestamp: (0, s.yW)(), ...t };
              return (
                (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)),
                this._notifyScopeListeners(),
                this
              );
            }
            getLastBreadcrumb() {
              return this._breadcrumbs[this._breadcrumbs.length - 1];
            }
            clearBreadcrumbs() {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              );
            }
            addAttachment(t) {
              return this._attachments.push(t), this;
            }
            getAttachments() {
              return this._attachments;
            }
            clearAttachments() {
              return (this._attachments = []), this;
            }
            applyToEvent(t, e = {}) {
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = { ...this._extra, ...t.extra }),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = { ...this._tags, ...t.tags }),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = { ...this._user, ...t.user }),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = { ...this._contexts, ...t.contexts }),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = {
                  trace: this._span.getTraceContext(),
                  ...t.contexts,
                };
                const e = this._span.transaction;
                if (e) {
                  t.sdkProcessingMetadata = {
                    dynamicSamplingContext: e.getDynamicSamplingContext(),
                    ...t.sdkProcessingMetadata,
                  };
                  const n = e.name;
                  n && (t.tags = { transaction: n, ...t.tags });
                }
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = [
                  ...(t.breadcrumbs || []),
                  ...this._breadcrumbs,
                ]),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                (t.sdkProcessingMetadata = {
                  ...t.sdkProcessingMetadata,
                  ...this._sdkProcessingMetadata,
                  propagationContext: this._propagationContext,
                }),
                this._notifyEventProcessors(
                  [
                    ...(0, a.YO)("globalEventProcessors", () => []),
                    ...this._eventProcessors,
                  ],
                  t,
                  e
                )
              );
            }
            setSDKProcessingMetadata(t) {
              return (
                (this._sdkProcessingMetadata = {
                  ...this._sdkProcessingMetadata,
                  ...t,
                }),
                this
              );
            }
            setPropagationContext(t) {
              return (this._propagationContext = t), this;
            }
            getPropagationContext() {
              return this._propagationContext;
            }
            _notifyEventProcessors(t, e, n, r = 0) {
              return new l((i, s) => {
                const o = t[r];
                if (null === e || "function" != typeof o) i(e);
                else {
                  const a = o({ ...e }, n);
                  (0, u.J8)(a)
                    ? a
                        .then((e) =>
                          this._notifyEventProcessors(t, e, n, r + 1).then(i)
                        )
                        .then(null, s)
                    : this._notifyEventProcessors(t, a, n, r + 1)
                        .then(i)
                        .then(null, s);
                }
              });
            }
            _notifyScopeListeners() {
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach((t) => {
                  t(this);
                }),
                (this._notifyingListeners = !1));
            }
            _applyFingerprint(t) {
              (t.fingerprint = t.fingerprint ? (0, i.lE)(t.fingerprint) : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }
          }
          function f() {
            return {
              traceId: (0, i.DM)(),
              spanId: (0, i.DM)().substring(16),
              sampled: !1,
            };
          }
          const _ = 4,
            v = 100;
          class m {
            constructor(t, e = new h(), n = _) {
              (this._version = n),
                (this._stack = [{ scope: e }]),
                t && this.bindClient(t);
            }
            isOlderThan(t) {
              return this._version < t;
            }
            bindClient(t) {
              (this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations();
            }
            pushScope() {
              const t = h.clone(this.getScope());
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              );
            }
            popScope() {
              return !(this.getStack().length <= 1 || !this.getStack().pop());
            }
            withScope(t) {
              const e = this.pushScope();
              try {
                t(e);
              } finally {
                this.popScope();
              }
            }
            getClient() {
              return this.getStackTop().client;
            }
            getScope() {
              return this.getStackTop().scope;
            }
            getStack() {
              return this._stack;
            }
            getStackTop() {
              return this._stack[this._stack.length - 1];
            }
            captureException(t, e) {
              const n = (this._lastEventId =
                  e && e.event_id ? e.event_id : (0, i.DM)()),
                r = new Error("Sentry syntheticException");
              return (
                this._withClient((i, s) => {
                  i.captureException(
                    t,
                    {
                      originalException: t,
                      syntheticException: r,
                      ...e,
                      event_id: n,
                    },
                    s
                  );
                }),
                n
              );
            }
            captureMessage(t, e, n) {
              const r = (this._lastEventId =
                  n && n.event_id ? n.event_id : (0, i.DM)()),
                s = new Error(t);
              return (
                this._withClient((i, o) => {
                  i.captureMessage(
                    t,
                    e,
                    {
                      originalException: t,
                      syntheticException: s,
                      ...n,
                      event_id: r,
                    },
                    o
                  );
                }),
                r
              );
            }
            captureEvent(t, e) {
              const n = e && e.event_id ? e.event_id : (0, i.DM)();
              return (
                t.type || (this._lastEventId = n),
                this._withClient((r, i) => {
                  r.captureEvent(t, { ...e, event_id: n }, i);
                }),
                n
              );
            }
            lastEventId() {
              return this._lastEventId;
            }
            addBreadcrumb(t, e) {
              const { scope: n, client: r } = this.getStackTop();
              if (!r) return;
              const { beforeBreadcrumb: i = null, maxBreadcrumbs: a = v } =
                (r.getOptions && r.getOptions()) || {};
              if (a <= 0) return;
              const c = { timestamp: (0, s.yW)(), ...t },
                u = i ? (0, o.Cf)(() => i(c, e)) : c;
              null !== u &&
                (r.emit && r.emit("beforeAddBreadcrumb", u, e),
                n.addBreadcrumb(u, a));
            }
            setUser(t) {
              this.getScope().setUser(t);
            }
            setTags(t) {
              this.getScope().setTags(t);
            }
            setExtras(t) {
              this.getScope().setExtras(t);
            }
            setTag(t, e) {
              this.getScope().setTag(t, e);
            }
            setExtra(t, e) {
              this.getScope().setExtra(t, e);
            }
            setContext(t, e) {
              this.getScope().setContext(t, e);
            }
            configureScope(t) {
              const { scope: e, client: n } = this.getStackTop();
              n && t(e);
            }
            run(t) {
              const e = y(this);
              try {
                t(this);
              } finally {
                y(e);
              }
            }
            getIntegration(t) {
              const e = this.getClient();
              if (!e) return null;
              try {
                return e.getIntegration(t);
              } catch (t) {
                return null;
              }
            }
            startTransaction(t, e) {
              return this._callExtensionMethod("startTransaction", t, e);
            }
            traceHeaders() {
              return this._callExtensionMethod("traceHeaders");
            }
            captureSession(t = !1) {
              if (t) return this.endSession();
              this._sendSessionUpdate();
            }
            endSession() {
              const t = this.getStackTop().scope,
                e = t.getSession();
              e &&
                (function (t, e) {
                  let n = {};
                  "ok" === t.status && (n = { status: "exited" }), p(t, n);
                })(e),
                this._sendSessionUpdate(),
                t.setSession();
            }
            startSession(t) {
              const { scope: e, client: n } = this.getStackTop(),
                { release: r, environment: o = c.J } =
                  (n && n.getOptions()) || {},
                { userAgent: u } = a.n2.navigator || {},
                l = (function (t) {
                  const e = (0, s.ph)(),
                    n = {
                      sid: (0, i.DM)(),
                      init: !0,
                      timestamp: e,
                      started: e,
                      duration: 0,
                      status: "ok",
                      errors: 0,
                      ignoreDuration: !1,
                      toJSON: () =>
                        (function (t) {
                          return (0, d.Jr)({
                            sid: `${t.sid}`,
                            init: t.init,
                            started: new Date(1e3 * t.started).toISOString(),
                            timestamp: new Date(
                              1e3 * t.timestamp
                            ).toISOString(),
                            status: t.status,
                            errors: t.errors,
                            did:
                              "number" == typeof t.did ||
                              "string" == typeof t.did
                                ? `${t.did}`
                                : void 0,
                            duration: t.duration,
                            attrs: {
                              release: t.release,
                              environment: t.environment,
                              ip_address: t.ipAddress,
                              user_agent: t.userAgent,
                            },
                          });
                        })(n),
                    };
                  return t && p(n, t), n;
                })({
                  release: r,
                  environment: o,
                  user: e.getUser(),
                  ...(u && { userAgent: u }),
                  ...t,
                }),
                h = e.getSession && e.getSession();
              return (
                h && "ok" === h.status && p(h, { status: "exited" }),
                this.endSession(),
                e.setSession(l),
                l
              );
            }
            shouldSendDefaultPii() {
              const t = this.getClient(),
                e = t && t.getOptions();
              return Boolean(e && e.sendDefaultPii);
            }
            _sendSessionUpdate() {
              const { scope: t, client: e } = this.getStackTop(),
                n = t.getSession();
              n && e && e.captureSession && e.captureSession(n);
            }
            _withClient(t) {
              const { scope: e, client: n } = this.getStackTop();
              n && t(n, e);
            }
            _callExtensionMethod(t, ...e) {
              const n = g().__SENTRY__;
              if (n && n.extensions && "function" == typeof n.extensions[t])
                return n.extensions[t].apply(this, e);
            }
          }
          function g() {
            return (
              (a.n2.__SENTRY__ = a.n2.__SENTRY__ || {
                extensions: {},
                hub: void 0,
              }),
              a.n2
            );
          }
          function y(t) {
            const e = g(),
              n = S(e);
            return E(e, t), n;
          }
          function b() {
            const t = g();
            if (t.__SENTRY__ && t.__SENTRY__.acs) {
              const e = t.__SENTRY__.acs.getCurrentHub();
              if (e) return e;
            }
            return (function (t = g()) {
              return (
                (e = t),
                (!!(e && e.__SENTRY__ && e.__SENTRY__.hub) &&
                  !S(t).isOlderThan(_)) ||
                  E(t, new m()),
                S(t)
              );
              var e;
            })(t);
          }
          function S(t) {
            return (0, a.YO)("hub", () => new m(), t);
          }
          function E(t, e) {
            return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
          }
        },
        3543: (t, e, n) => {
          n.d(e, { _: () => s });
          var r = n(9040),
            i = n(6528);
          function s(t, e, n) {
            const s = e.getOptions(),
              { publicKey: o } = e.getDsn() || {},
              { segment: a } = (n && n.getUser()) || {},
              c = (0, r.Jr)({
                environment: s.environment || i.J,
                release: s.release,
                user_segment: a,
                public_key: o,
                trace_id: t,
              });
            return e.emit && e.emit("createDsc", c), c;
          }
        },
        4038: (t, e, n) => {
          n.d(e, { T: () => v, l: () => _ });
          var r = n(3793),
            i = n(7135),
            s = n(3684),
            o = n(6711),
            a = n(1585);
          let c = !1;
          function u() {
            const t = (0, a.x1)();
            if (t) {
              const e = "internal_error";
              t.setStatus(e);
            }
          }
          u.tag = "sentry_tracingErrorCallback";
          var l = n(2526),
            d = n(4114);
          function p() {
            const t = this.getScope().getSpan();
            return t ? { "sentry-trace": t.toTraceparent() } : {};
          }
          function h(t, e, n) {
            if (!(0, s.z)(e)) return (t.sampled = !1), t;
            if (void 0 !== t.sampled)
              return t.setMetadata({ sampleRate: Number(t.sampled) }), t;
            let i;
            return (
              "function" == typeof e.tracesSampler
                ? ((i = e.tracesSampler(n)),
                  t.setMetadata({ sampleRate: Number(i) }))
                : void 0 !== n.parentSampled
                ? (i = n.parentSampled)
                : void 0 !== e.tracesSampleRate
                ? ((i = e.tracesSampleRate),
                  t.setMetadata({ sampleRate: Number(i) }))
                : ((i = 1), t.setMetadata({ sampleRate: i })),
              (o = i),
              (0, r.i2)(o) ||
              ("number" != typeof o && "boolean" != typeof o) ||
              o < 0 ||
              o > 1 ||
              !i
                ? ((t.sampled = !1), t)
                : ((t.sampled = Math.random() < i), t.sampled, t)
            );
            var o;
          }
          function f(t, e) {
            const n = this.getClient(),
              r = (n && n.getOptions()) || {};
            (r.instrumenter || "sentry") !== (t.instrumenter || "sentry") &&
              (t.sampled = !1);
            let i = new d.Y(t, this);
            return (
              (i = h(i, r, {
                parentSampled: t.parentSampled,
                transactionContext: t,
                ...e,
              })),
              i.sampled &&
                i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
              n && n.emit && n.emit("startTransaction", i),
              i
            );
          }
          function _(t, e, n, r, i, s, o) {
            const a = t.getClient(),
              c = (a && a.getOptions()) || {};
            let u = new l.io(e, t, n, r, o, i);
            return (
              (u = h(u, c, {
                parentSampled: e.parentSampled,
                transactionContext: e,
                ...s,
              })),
              u.sampled &&
                u.initSpanRecorder(c._experiments && c._experiments.maxSpans),
              a && a.emit && a.emit("startTransaction", u),
              u
            );
          }
          function v() {
            const t = (0, i.cu)();
            t.__SENTRY__ &&
              ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
              t.__SENTRY__.extensions.startTransaction ||
                (t.__SENTRY__.extensions.startTransaction = f),
              t.__SENTRY__.extensions.traceHeaders ||
                (t.__SENTRY__.extensions.traceHeaders = p),
              c ||
                ((c = !0),
                (0, o.oq)("error", u),
                (0, o.oq)("unhandledrejection", u)));
          }
        },
        2526: (t, e, n) => {
          n.d(e, { AT: () => o, io: () => u });
          var r = n(3809),
            i = n(5921),
            s = n(4114);
          const o = {
              idleTimeout: 1e3,
              finalTimeout: 3e4,
              heartbeatInterval: 5e3,
            },
            a = [
              "heartbeatFailed",
              "idleTimeout",
              "documentHidden",
              "finalTimeout",
              "externalFinish",
              "cancelled",
            ];
          class c extends i.gB {
            constructor(t, e, n, r) {
              super(r),
                (this._pushActivity = t),
                (this._popActivity = e),
                (this.transactionSpanId = n);
            }
            add(t) {
              t.spanId !== this.transactionSpanId &&
                ((t.finish = (e) => {
                  (t.endTimestamp = "number" == typeof e ? e : (0, r.ph)()),
                    this._popActivity(t.spanId);
                }),
                void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
                super.add(t);
            }
          }
          class u extends s.Y {
            __init() {
              this.activities = {};
            }
            __init2() {
              this._heartbeatCounter = 0;
            }
            __init3() {
              this._finished = !1;
            }
            __init4() {
              this._idleTimeoutCanceledPermanently = !1;
            }
            __init5() {
              this._beforeFinishCallbacks = [];
            }
            __init6() {
              this._finishReason = a[4];
            }
            constructor(
              t,
              e,
              n = o.idleTimeout,
              r = o.finalTimeout,
              i = o.heartbeatInterval,
              s = !1
            ) {
              super(t, e),
                (this._idleHub = e),
                (this._idleTimeout = n),
                (this._finalTimeout = r),
                (this._heartbeatInterval = i),
                (this._onScope = s),
                u.prototype.__init.call(this),
                u.prototype.__init2.call(this),
                u.prototype.__init3.call(this),
                u.prototype.__init4.call(this),
                u.prototype.__init5.call(this),
                u.prototype.__init6.call(this),
                s && e.configureScope((t) => t.setSpan(this)),
                this._restartIdleTimeout(),
                setTimeout(() => {
                  this._finished ||
                    (this.setStatus("deadline_exceeded"),
                    (this._finishReason = a[3]),
                    this.finish());
                }, this._finalTimeout);
            }
            finish(t = (0, r.ph)()) {
              if (
                ((this._finished = !0),
                (this.activities = {}),
                "ui.action.click" === this.op &&
                  this.setTag("finishReason", this._finishReason),
                this.spanRecorder)
              ) {
                for (const e of this._beforeFinishCallbacks) e(this, t);
                this.spanRecorder.spans = this.spanRecorder.spans.filter(
                  (e) => {
                    if (e.spanId === this.spanId) return !0;
                    e.endTimestamp ||
                      ((e.endTimestamp = t), e.setStatus("cancelled"));
                    return e.startTimestamp < t;
                  }
                );
              }
              if (this._onScope) {
                const t = this._idleHub.getScope();
                t.getTransaction() === this && t.setSpan(void 0);
              }
              return super.finish(t);
            }
            registerBeforeFinishCallback(t) {
              this._beforeFinishCallbacks.push(t);
            }
            initSpanRecorder(t) {
              if (!this.spanRecorder) {
                const e = (t) => {
                    this._finished || this._pushActivity(t);
                  },
                  n = (t) => {
                    this._finished || this._popActivity(t);
                  };
                (this.spanRecorder = new c(e, n, this.spanId, t)),
                  this._pingHeartbeat();
              }
              this.spanRecorder.add(this);
            }
            cancelIdleTimeout(
              t,
              { restartOnChildSpanChange: e } = { restartOnChildSpanChange: !0 }
            ) {
              (this._idleTimeoutCanceledPermanently = !1 === e),
                this._idleTimeoutID &&
                  (clearTimeout(this._idleTimeoutID),
                  (this._idleTimeoutID = void 0),
                  0 === Object.keys(this.activities).length &&
                    this._idleTimeoutCanceledPermanently &&
                    ((this._finishReason = a[5]), this.finish(t)));
            }
            setFinishReason(t) {
              this._finishReason = t;
            }
            _restartIdleTimeout(t) {
              this.cancelIdleTimeout(),
                (this._idleTimeoutID = setTimeout(() => {
                  this._finished ||
                    0 !== Object.keys(this.activities).length ||
                    ((this._finishReason = a[1]), this.finish(t));
                }, this._idleTimeout));
            }
            _pushActivity(t) {
              this.cancelIdleTimeout(void 0, {
                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
              }),
                (this.activities[t] = !0);
            }
            _popActivity(t) {
              if (
                (this.activities[t] && delete this.activities[t],
                0 === Object.keys(this.activities).length)
              ) {
                const t = (0, r.ph)();
                this._idleTimeoutCanceledPermanently
                  ? ((this._finishReason = a[5]), this.finish(t))
                  : this._restartIdleTimeout(t + this._idleTimeout / 1e3);
              }
            }
            _beat() {
              if (this._finished) return;
              const t = Object.keys(this.activities).join("");
              t === this._prevHeartbeatString
                ? this._heartbeatCounter++
                : (this._heartbeatCounter = 1),
                (this._prevHeartbeatString = t),
                this._heartbeatCounter >= 3
                  ? (this.setStatus("deadline_exceeded"),
                    (this._finishReason = a[0]),
                    this.finish())
                  : this._pingHeartbeat();
            }
            _pingHeartbeat() {
              setTimeout(() => {
                this._beat();
              }, this._heartbeatInterval);
            }
          }
        },
        5921: (t, e, n) => {
          n.d(e, { Dr: () => c, Zd: () => u, gB: () => a });
          var r = n(9554),
            i = n(3809),
            s = n(2001),
            o = n(9040);
          class a {
            __init() {
              this.spans = [];
            }
            constructor(t = 1e3) {
              a.prototype.__init.call(this), (this._maxlen = t);
            }
            add(t) {
              this.spans.length > this._maxlen
                ? (t.spanRecorder = void 0)
                : this.spans.push(t);
            }
          }
          class c {
            __init2() {
              this.traceId = (0, r.DM)();
            }
            __init3() {
              this.spanId = (0, r.DM)().substring(16);
            }
            __init4() {
              this.startTimestamp = (0, i.ph)();
            }
            __init5() {
              this.tags = {};
            }
            __init6() {
              this.data = {};
            }
            __init7() {
              this.instrumenter = "sentry";
            }
            constructor(t) {
              if (
                (c.prototype.__init2.call(this),
                c.prototype.__init3.call(this),
                c.prototype.__init4.call(this),
                c.prototype.__init5.call(this),
                c.prototype.__init6.call(this),
                c.prototype.__init7.call(this),
                !t)
              )
                return this;
              t.traceId && (this.traceId = t.traceId),
                t.spanId && (this.spanId = t.spanId),
                t.parentSpanId && (this.parentSpanId = t.parentSpanId),
                "sampled" in t && (this.sampled = t.sampled),
                t.op && (this.op = t.op),
                t.description && (this.description = t.description),
                t.data && (this.data = t.data),
                t.tags && (this.tags = t.tags),
                t.status && (this.status = t.status),
                t.startTimestamp && (this.startTimestamp = t.startTimestamp),
                t.endTimestamp && (this.endTimestamp = t.endTimestamp),
                t.instrumenter && (this.instrumenter = t.instrumenter);
            }
            startChild(t) {
              const e = new c({
                ...t,
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId,
              });
              return (
                (e.spanRecorder = this.spanRecorder),
                e.spanRecorder && e.spanRecorder.add(e),
                (e.transaction = this.transaction),
                e
              );
            }
            setTag(t, e) {
              return (this.tags = { ...this.tags, [t]: e }), this;
            }
            setData(t, e) {
              return (this.data = { ...this.data, [t]: e }), this;
            }
            setStatus(t) {
              return (this.status = t), this;
            }
            setHttpStatus(t) {
              this.setTag("http.status_code", String(t)),
                this.setData("http.response.status_code", t);
              const e = u(t);
              return "unknown_error" !== e && this.setStatus(e), this;
            }
            isSuccess() {
              return "ok" === this.status;
            }
            finish(t) {
              this.endTimestamp = "number" == typeof t ? t : (0, i.ph)();
            }
            toTraceparent() {
              return (0, s.$p)(this.traceId, this.spanId, this.sampled);
            }
            toContext() {
              return (0, o.Jr)({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId,
              });
            }
            updateWithContext(t) {
              return (
                (this.data = t.data || {}),
                (this.description = t.description),
                (this.endTimestamp = t.endTimestamp),
                (this.op = t.op),
                (this.parentSpanId = t.parentSpanId),
                (this.sampled = t.sampled),
                (this.spanId = t.spanId || this.spanId),
                (this.startTimestamp = t.startTimestamp || this.startTimestamp),
                (this.status = t.status),
                (this.tags = t.tags || {}),
                (this.traceId = t.traceId || this.traceId),
                this
              );
            }
            getTraceContext() {
              return (0, o.Jr)({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId,
              });
            }
            toJSON() {
              return (0, o.Jr)({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId,
              });
            }
          }
          function u(t) {
            if (t < 400 && t >= 100) return "ok";
            if (t >= 400 && t < 500)
              switch (t) {
                case 401:
                  return "unauthenticated";
                case 403:
                  return "permission_denied";
                case 404:
                  return "not_found";
                case 409:
                  return "already_exists";
                case 413:
                  return "failed_precondition";
                case 429:
                  return "resource_exhausted";
                default:
                  return "invalid_argument";
              }
            if (t >= 500 && t < 600)
              switch (t) {
                case 501:
                  return "unimplemented";
                case 503:
                  return "unavailable";
                case 504:
                  return "deadline_exceeded";
                default:
                  return "internal_error";
              }
            return "unknown_error";
          }
        },
        4114: (t, e, n) => {
          n.d(e, { Y: () => a });
          var r = n(9040),
            i = n(7135),
            s = n(3543),
            o = n(5921);
          class a extends o.Dr {
            __init() {
              this._measurements = {};
            }
            __init2() {
              this._contexts = {};
            }
            __init3() {
              this._frozenDynamicSamplingContext = void 0;
            }
            constructor(t, e) {
              super(t),
                a.prototype.__init.call(this),
                a.prototype.__init2.call(this),
                a.prototype.__init3.call(this),
                (this._hub = e || (0, i.Gd)()),
                (this._name = t.name || ""),
                (this.metadata = {
                  source: "custom",
                  ...t.metadata,
                  spanMetadata: {},
                }),
                (this._trimEnd = t.trimEnd),
                (this.transaction = this);
              const n = this.metadata.dynamicSamplingContext;
              n && (this._frozenDynamicSamplingContext = { ...n });
            }
            get name() {
              return this._name;
            }
            set name(t) {
              this.setName(t);
            }
            setName(t, e = "custom") {
              (this._name = t), (this.metadata.source = e);
            }
            initSpanRecorder(t = 1e3) {
              this.spanRecorder || (this.spanRecorder = new o.gB(t)),
                this.spanRecorder.add(this);
            }
            setContext(t, e) {
              null === e ? delete this._contexts[t] : (this._contexts[t] = e);
            }
            setMeasurement(t, e, n = "") {
              this._measurements[t] = { value: e, unit: n };
            }
            setMetadata(t) {
              this.metadata = { ...this.metadata, ...t };
            }
            finish(t) {
              if (void 0 !== this.endTimestamp) return;
              this.name || (this.name = "<unlabeled transaction>"),
                super.finish(t);
              const e = this._hub.getClient();
              if (
                (e && e.emit && e.emit("finishTransaction", this),
                !0 !== this.sampled)
              )
                return void (
                  e && e.recordDroppedEvent("sample_rate", "transaction")
                );
              const n = this.spanRecorder
                ? this.spanRecorder.spans.filter(
                    (t) => t !== this && t.endTimestamp
                  )
                : [];
              this._trimEnd &&
                n.length > 0 &&
                (this.endTimestamp = n.reduce((t, e) =>
                  t.endTimestamp && e.endTimestamp
                    ? t.endTimestamp > e.endTimestamp
                      ? t
                      : e
                    : t
                ).endTimestamp);
              const r = this.metadata,
                i = {
                  contexts: {
                    ...this._contexts,
                    trace: this.getTraceContext(),
                  },
                  spans: n,
                  start_timestamp: this.startTimestamp,
                  tags: this.tags,
                  timestamp: this.endTimestamp,
                  transaction: this.name,
                  type: "transaction",
                  sdkProcessingMetadata: {
                    ...r,
                    dynamicSamplingContext: this.getDynamicSamplingContext(),
                  },
                  ...(r.source && { transaction_info: { source: r.source } }),
                };
              return (
                Object.keys(this._measurements).length > 0 &&
                  (i.measurements = this._measurements),
                this._hub.captureEvent(i)
              );
            }
            toContext() {
              const t = super.toContext();
              return (0, r.Jr)({
                ...t,
                name: this.name,
                trimEnd: this._trimEnd,
              });
            }
            updateWithContext(t) {
              return (
                super.updateWithContext(t),
                (this.name = t.name || ""),
                (this._trimEnd = t.trimEnd),
                this
              );
            }
            getDynamicSamplingContext() {
              if (this._frozenDynamicSamplingContext)
                return this._frozenDynamicSamplingContext;
              const t = this._hub || (0, i.Gd)(),
                e = t.getClient();
              if (!e) return {};
              const n = t.getScope(),
                r = (0, s._)(this.traceId, e, n),
                o = this.metadata.sampleRate;
              void 0 !== o && (r.sample_rate = `${o}`);
              const a = this.metadata.source;
              return (
                a && "url" !== a && (r.transaction = this.name),
                void 0 !== this.sampled && (r.sampled = String(this.sampled)),
                r
              );
            }
            setHub(t) {
              this._hub = t;
            }
          }
        },
        1585: (t, e, n) => {
          n.d(e, { x1: () => i });
          var r = n(7135);
          function i(t) {
            return (t || (0, r.Gd)()).getScope().getTransaction();
          }
        },
        3684: (t, e, n) => {
          n.d(e, { z: () => i });
          var r = n(7135);
          function i(t) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
              return !1;
            const e = (0, r.Gd)().getClient(),
              n = t || (e && e.getOptions());
            return (
              !!n &&
              (n.enableTracing ||
                "tracesSampleRate" in n ||
                "tracesSampler" in n)
            );
          }
        },
        3855: (t, e, n) => {
          n.d(e, { EN: () => c, IQ: () => u, bU: () => i });
          var r = n(3793);
          const i = "baggage",
            s = "sentry-",
            o = /^sentry-/,
            a = 8192;
          function c(t) {
            if (!(0, r.HD)(t) && !Array.isArray(t)) return;
            let e = {};
            if (Array.isArray(t))
              e = t.reduce((t, e) => ({ ...t, ...l(e) }), {});
            else {
              if (!t) return;
              e = l(t);
            }
            const n = Object.entries(e).reduce(
              (t, [e, n]) => (e.match(o) && (t[e.slice(s.length)] = n), t),
              {}
            );
            return Object.keys(n).length > 0 ? n : void 0;
          }
          function u(t) {
            if (t)
              return (function (t) {
                if (0 !== Object.keys(t).length)
                  return Object.entries(t).reduce((t, [e, n], r) => {
                    const i = `${encodeURIComponent(e)}=${encodeURIComponent(
                        n
                      )}`,
                      s = 0 === r ? i : `${t},${i}`;
                    return s.length > a ? t : s;
                  }, "");
              })(
                Object.entries(t).reduce(
                  (t, [e, n]) => (n && (t[`${s}${e}`] = n), t),
                  {}
                )
              );
          }
          function l(t) {
            return t
              .split(",")
              .map((t) => t.split("=").map((t) => decodeURIComponent(t.trim())))
              .reduce((t, [e, n]) => ((t[e] = n), t), {});
          }
        },
        6711: (t, e, n) => {
          n.d(e, { xU: () => d, oq: () => _ });
          var r = n(3793),
            i = n(4121),
            s = n(9040),
            o = n(8380);
          const a = (0, o.Rf)();
          function c(t) {
            return (
              t &&
              /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(
                t.toString()
              )
            );
          }
          const u = (0, o.Rf)(),
            l = (0, o.Rf)(),
            d = "__sentry_xhr_v2__",
            p = {},
            h = {};
          function f(t) {
            if (!h[t])
              switch (((h[t] = !0), t)) {
                case "console":
                  "console" in l &&
                    i.RU.forEach(function (t) {
                      t in l.console &&
                        (0, s.hl)(l.console, t, function (e) {
                          return function (...n) {
                            v("console", { args: n, level: t }),
                              e && e.apply(l.console, n);
                          };
                        });
                    });
                  break;
                case "dom":
                  !(function () {
                    if (!("document" in l)) return;
                    const t = v.bind(null, "dom"),
                      e = w(t, !0);
                    l.document.addEventListener("click", e, !1),
                      l.document.addEventListener("keypress", e, !1),
                      ["EventTarget", "Node"].forEach((e) => {
                        const n = l[e] && l[e].prototype;
                        n &&
                          n.hasOwnProperty &&
                          n.hasOwnProperty("addEventListener") &&
                          ((0, s.hl)(n, "addEventListener", function (e) {
                            return function (n, r, i) {
                              if ("click" === n || "keypress" == n)
                                try {
                                  const r = this,
                                    s = (r.__sentry_instrumentation_handlers__ =
                                      r.__sentry_instrumentation_handlers__ ||
                                      {}),
                                    o = (s[n] = s[n] || { refCount: 0 });
                                  if (!o.handler) {
                                    const r = w(t);
                                    (o.handler = r), e.call(this, n, r, i);
                                  }
                                  o.refCount++;
                                } catch (t) {}
                              return e.call(this, n, r, i);
                            };
                          }),
                          (0, s.hl)(n, "removeEventListener", function (t) {
                            return function (e, n, r) {
                              if ("click" === e || "keypress" == e)
                                try {
                                  const n = this,
                                    i =
                                      n.__sentry_instrumentation_handlers__ ||
                                      {},
                                    s = i[e];
                                  s &&
                                    (s.refCount--,
                                    s.refCount <= 0 &&
                                      (t.call(this, e, s.handler, r),
                                      (s.handler = void 0),
                                      delete i[e]),
                                    0 === Object.keys(i).length &&
                                      delete n.__sentry_instrumentation_handlers__);
                                } catch (t) {}
                              return t.call(this, e, n, r);
                            };
                          }));
                      });
                  })();
                  break;
                case "xhr":
                  !(function () {
                    if (!("XMLHttpRequest" in l)) return;
                    const t = XMLHttpRequest.prototype;
                    (0, s.hl)(t, "open", function (t) {
                      return function (...e) {
                        const n = e[1],
                          i = (this[d] = {
                            method: (0, r.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                            url: e[1],
                            request_headers: {},
                          });
                        (0, r.HD)(n) &&
                          "POST" === i.method &&
                          n.match(/sentry_key/) &&
                          (this.__sentry_own_request__ = !0);
                        const o = () => {
                          const t = this[d];
                          if (t && 4 === this.readyState) {
                            try {
                              t.status_code = this.status;
                            } catch (t) {}
                            v("xhr", {
                              args: e,
                              endTimestamp: Date.now(),
                              startTimestamp: Date.now(),
                              xhr: this,
                            });
                          }
                        };
                        return (
                          "onreadystatechange" in this &&
                          "function" == typeof this.onreadystatechange
                            ? (0, s.hl)(
                                this,
                                "onreadystatechange",
                                function (t) {
                                  return function (...e) {
                                    return o(), t.apply(this, e);
                                  };
                                }
                              )
                            : this.addEventListener("readystatechange", o),
                          (0, s.hl)(this, "setRequestHeader", function (t) {
                            return function (...e) {
                              const [n, r] = e,
                                i = this[d];
                              return (
                                i && (i.request_headers[n.toLowerCase()] = r),
                                t.apply(this, e)
                              );
                            };
                          }),
                          t.apply(this, e)
                        );
                      };
                    }),
                      (0, s.hl)(t, "send", function (t) {
                        return function (...e) {
                          const n = this[d];
                          return (
                            n && void 0 !== e[0] && (n.body = e[0]),
                            v("xhr", {
                              args: e,
                              startTimestamp: Date.now(),
                              xhr: this,
                            }),
                            t.apply(this, e)
                          );
                        };
                      });
                  })();
                  break;
                case "fetch":
                  (function () {
                    if (
                      !(function () {
                        if (!("fetch" in a)) return !1;
                        try {
                          return (
                            new Headers(),
                            new Request("http://www.example.com"),
                            new Response(),
                            !0
                          );
                        } catch (t) {
                          return !1;
                        }
                      })()
                    )
                      return !1;
                    if (c(a.fetch)) return !0;
                    let t = !1;
                    const e = a.document;
                    if (e && "function" == typeof e.createElement)
                      try {
                        const n = e.createElement("iframe");
                        (n.hidden = !0),
                          e.head.appendChild(n),
                          n.contentWindow &&
                            n.contentWindow.fetch &&
                            (t = c(n.contentWindow.fetch)),
                          e.head.removeChild(n);
                      } catch (t) {}
                    return t;
                  })() &&
                    (0, s.hl)(l, "fetch", function (t) {
                      return function (...e) {
                        const { method: n, url: r } = (function (t) {
                            if (0 === t.length)
                              return { method: "GET", url: "" };
                            if (2 === t.length) {
                              const [e, n] = t;
                              return {
                                url: g(e),
                                method: m(n, "method")
                                  ? String(n.method).toUpperCase()
                                  : "GET",
                              };
                            }
                            const e = t[0];
                            return {
                              url: g(e),
                              method: m(e, "method")
                                ? String(e.method).toUpperCase()
                                : "GET",
                            };
                          })(e),
                          i = {
                            args: e,
                            fetchData: { method: n, url: r },
                            startTimestamp: Date.now(),
                          };
                        return (
                          v("fetch", { ...i }),
                          t.apply(l, e).then(
                            (t) => (
                              v("fetch", {
                                ...i,
                                endTimestamp: Date.now(),
                                response: t,
                              }),
                              t
                            ),
                            (t) => {
                              throw (
                                (v("fetch", {
                                  ...i,
                                  endTimestamp: Date.now(),
                                  error: t,
                                }),
                                t)
                              );
                            }
                          )
                        );
                      };
                    });
                  break;
                case "history":
                  !(function () {
                    if (
                      !(function () {
                        const t = u.chrome,
                          e = t && t.app && t.app.runtime,
                          n =
                            "history" in u &&
                            !!u.history.pushState &&
                            !!u.history.replaceState;
                        return !e && n;
                      })()
                    )
                      return;
                    const t = l.onpopstate;
                    function e(t) {
                      return function (...e) {
                        const n = e.length > 2 ? e[2] : void 0;
                        if (n) {
                          const t = y,
                            e = String(n);
                          (y = e), v("history", { from: t, to: e });
                        }
                        return t.apply(this, e);
                      };
                    }
                    (l.onpopstate = function (...e) {
                      const n = l.location.href,
                        r = y;
                      if (((y = n), v("history", { from: r, to: n }), t))
                        try {
                          return t.apply(this, e);
                        } catch (t) {}
                    }),
                      (0, s.hl)(l.history, "pushState", e),
                      (0, s.hl)(l.history, "replaceState", e);
                  })();
                  break;
                case "error":
                  (x = l.onerror),
                    (l.onerror = function (t, e, n, r, i) {
                      return (
                        v("error", {
                          column: r,
                          error: i,
                          line: n,
                          msg: t,
                          url: e,
                        }),
                        !(!x || x.__SENTRY_LOADER__) && x.apply(this, arguments)
                      );
                    }),
                    (l.onerror.__SENTRY_INSTRUMENTED__ = !0);
                  break;
                case "unhandledrejection":
                  (T = l.onunhandledrejection),
                    (l.onunhandledrejection = function (t) {
                      return (
                        v("unhandledrejection", t),
                        !(T && !T.__SENTRY_LOADER__) || T.apply(this, arguments)
                      );
                    }),
                    (l.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
                  break;
                default:
                  return;
              }
          }
          function _(t, e) {
            (p[t] = p[t] || []), p[t].push(e), f(t);
          }
          function v(t, e) {
            if (t && p[t])
              for (const n of p[t] || [])
                try {
                  n(e);
                } catch (t) {}
          }
          function m(t, e) {
            return !!t && "object" == typeof t && !!t[e];
          }
          function g(t) {
            return "string" == typeof t
              ? t
              : t
              ? m(t, "url")
                ? t.url
                : t.toString
                ? t.toString()
                : ""
              : "";
          }
          let y;
          const b = 1e3;
          let S, E;
          function w(t, e = !1) {
            return (n) => {
              if (!n || E === n) return;
              if (
                (function (t) {
                  if ("keypress" !== t.type) return !1;
                  try {
                    const e = t.target;
                    if (!e || !e.tagName) return !0;
                    if (
                      "INPUT" === e.tagName ||
                      "TEXTAREA" === e.tagName ||
                      e.isContentEditable
                    )
                      return !1;
                  } catch (t) {}
                  return !0;
                })(n)
              )
                return;
              const r = "keypress" === n.type ? "input" : n.type;
              (void 0 === S ||
                (function (t, e) {
                  if (!t) return !0;
                  if (t.type !== e.type) return !0;
                  try {
                    if (t.target !== e.target) return !0;
                  } catch (t) {}
                  return !1;
                })(E, n)) &&
                (t({ event: n, name: r, global: e }), (E = n)),
                clearTimeout(S),
                (S = l.setTimeout(() => {
                  S = void 0;
                }, b));
            };
          }
          let x = null,
            T = null;
        },
        3793: (t, e, n) => {
          n.d(e, {
            HD: () => s,
            J8: () => c,
            Kj: () => a,
            PO: () => o,
            V9: () => l,
            i2: () => u,
          });
          const r = Object.prototype.toString;
          function i(t, e) {
            return r.call(t) === `[object ${e}]`;
          }
          function s(t) {
            return i(t, "String");
          }
          function o(t) {
            return i(t, "Object");
          }
          function a(t) {
            return i(t, "RegExp");
          }
          function c(t) {
            return Boolean(t && t.then && "function" == typeof t.then);
          }
          function u(t) {
            return "number" == typeof t && t != t;
          }
          function l(t, e) {
            try {
              return t instanceof e;
            } catch (t) {
              return !1;
            }
          }
        },
        4121: (t, e, n) => {
          n.d(e, { Cf: () => s, RU: () => i });
          var r = n(8380);
          const i = [
            "debug",
            "info",
            "warn",
            "error",
            "log",
            "assert",
            "trace",
          ];
          function s(t) {
            if (!("console" in r.n2)) return t();
            const e = r.n2.console,
              n = {};
            i.forEach((t) => {
              const r = e[t] && e[t].__sentry_original__;
              t in e && r && ((n[t] = e[t]), (e[t] = r));
            });
            try {
              return t();
            } finally {
              Object.keys(n).forEach((t) => {
                e[t] = n[t];
              });
            }
          }
          let o;
          o = (function () {
            let t = !1;
            const e = {
              enable: () => {
                t = !0;
              },
              disable: () => {
                t = !1;
              },
            };
            return (
              i.forEach((t) => {
                e[t] = () => {};
              }),
              e
            );
          })();
        },
        9554: (t, e, n) => {
          n.d(e, { DM: () => i, lE: () => s });
          var r = n(8380);
          function i() {
            const t = r.n2,
              e = t.crypto || t.msCrypto;
            if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
            const n =
              e && e.getRandomValues
                ? () => e.getRandomValues(new Uint8Array(1))[0]
                : () => 16 * Math.random();
            return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
              (t ^ ((15 & n()) >> (t / 4))).toString(16)
            );
          }
          function s(t) {
            return Array.isArray(t) ? t : [t];
          }
        },
        4975: (t, e, n) => {
          function r() {
            return (
              !(
                "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
                __SENTRY_BROWSER_BUNDLE__
              ) &&
              "[object process]" ===
                Object.prototype.toString.call(
                  "undefined" != typeof process ? process : 0
                )
            );
          }
          function i(t, e) {
            return t.require(e);
          }
          function s(e) {
            let n;
            try {
              n = i(t, e);
            } catch (t) {}
            try {
              const { cwd: r } = i(t, "process");
              n = i(t, `${r()}/node_modules/${e}`);
            } catch (t) {}
            return n;
          }
          n.d(e, { l$: () => i, KV: () => r, $y: () => s }), (t = n.hmd(t));
        },
        9040: (t, e, n) => {
          n.d(e, { Jr: () => o, hl: () => i, xp: () => s });
          var r = n(3793);
          function i(t, e, n) {
            if (!(e in t)) return;
            const r = t[e],
              i = n(r);
            if ("function" == typeof i)
              try {
                !(function (t, e) {
                  const n = e.prototype || {};
                  (t.prototype = e.prototype = n),
                    s(t, "__sentry_original__", e);
                })(i, r);
              } catch (t) {}
            t[e] = i;
          }
          function s(t, e, n) {
            Object.defineProperty(t, e, {
              value: n,
              writable: !0,
              configurable: !0,
            });
          }
          function o(t) {
            return a(t, new Map());
          }
          function a(t, e) {
            if ((0, r.PO)(t)) {
              const n = e.get(t);
              if (void 0 !== n) return n;
              const r = {};
              e.set(t, r);
              for (const n of Object.keys(t))
                void 0 !== t[n] && (r[n] = a(t[n], e));
              return r;
            }
            if (Array.isArray(t)) {
              const n = e.get(t);
              if (void 0 !== n) return n;
              const r = [];
              return (
                e.set(t, r),
                t.forEach((t) => {
                  r.push(a(t, e));
                }),
                r
              );
            }
            return t;
          }
        },
        3809: (t, e, n) => {
          n.d(e, { Z1: () => p, ph: () => l, yW: () => u });
          var r = n(4975),
            i = n(8380);
          t = n.hmd(t);
          const s = (0, i.Rf)(),
            o = { nowSeconds: () => Date.now() / 1e3 },
            a = (0, r.KV)()
              ? (function () {
                  try {
                    return (0, r.l$)(t, "perf_hooks").performance;
                  } catch (t) {
                    return;
                  }
                })()
              : (function () {
                  const { performance: t } = s;
                  if (t && t.now)
                    return {
                      now: () => t.now(),
                      timeOrigin: Date.now() - t.now(),
                    };
                })(),
            c =
              void 0 === a
                ? o
                : { nowSeconds: () => (a.timeOrigin + a.now()) / 1e3 },
            u = o.nowSeconds.bind(o),
            l = c.nowSeconds.bind(c);
          let d;
          const p = (() => {
            const { performance: t } = s;
            if (!t || !t.now) return void (d = "none");
            const e = 36e5,
              n = t.now(),
              r = Date.now(),
              i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
              o = i < e,
              a = t.timing && t.timing.navigationStart,
              c = "number" == typeof a ? Math.abs(a + n - r) : e;
            return o || c < e
              ? i <= c
                ? ((d = "timeOrigin"), t.timeOrigin)
                : ((d = "navigationStart"), a)
              : ((d = "dateNow"), r);
          })();
        },
        2001: (t, e, n) => {
          n.d(e, { $p: () => c, KA: () => a, Ke: () => s, qG: () => o });
          var r = n(3855),
            i = n(9554);
          const s = new RegExp(
            "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
          );
          function o(t) {
            if (!t) return;
            const e = t.match(s);
            if (!e) return;
            let n;
            return (
              "1" === e[3] ? (n = !0) : "0" === e[3] && (n = !1),
              { traceId: e[1], parentSampled: n, parentSpanId: e[2] }
            );
          }
          function a(t, e) {
            const n = o(t),
              s = (0, r.EN)(e),
              { traceId: a, parentSpanId: c, parentSampled: u } = n || {},
              l = {
                traceId: a || (0, i.DM)(),
                spanId: (0, i.DM)().substring(16),
                sampled: void 0 !== u && u,
              };
            return (
              c && (l.parentSpanId = c),
              s && (l.dsc = s),
              {
                traceparentData: n,
                dynamicSamplingContext: s,
                propagationContext: l,
              }
            );
          }
          function c(t = (0, i.DM)(), e = (0, i.DM)().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
          }
        },
        8380: (t, e, n) => {
          function r(t) {
            return t && t.Math == Math ? t : void 0;
          }
          n.d(e, { Rf: () => s, YO: () => o, n2: () => i });
          const i =
            ("object" == typeof globalThis && r(globalThis)) ||
            ("object" == typeof window && r(window)) ||
            ("object" == typeof self && r(self)) ||
            ("object" == typeof n.g && r(n.g)) ||
            (function () {
              return this;
            })() ||
            {};
          function s() {
            return i;
          }
          function o(t, e, n) {
            const r = n || i,
              s = (r.__SENTRY__ = r.__SENTRY__ || {});
            return s[t] || (s[t] = e());
          }
        },
        7906: (t, e, n) => {
          n.r(e),
            n.d(e, {
              Breadcrumbs: () => ke,
              BrowserClient: () => an,
              Dedupe: () => Ue,
              FunctionToString: () => N,
              GlobalHandlers: () => _e,
              HttpContext: () => qe,
              Hub: () => rt,
              InboundFilters: () => M,
              Integrations: () => $n,
              LinkedErrors: () => Me,
              SDK_VERSION: () => lt,
              Scope: () => Z,
              TryCatch: () => Ee,
              addBreadcrumb: () => _t,
              addGlobalEventProcessor: () => tt,
              captureEvent: () => ht,
              captureException: () => dt,
              captureMessage: () => pt,
              chromeStackLineParser: () => _n,
              close: () => Mn,
              configureScope: () => ft,
              createTransport: () => Mt,
              defaultIntegrations: () => In,
              defaultStackLineParsers: () => Tn,
              defaultStackParser: () => On,
              flush: () => Dn,
              forceLoad: () => Pn,
              geckoStackLineParser: () => gn,
              getCurrentHub: () => ot,
              getHubFromCarrier: () => ct,
              init: () => Rn,
              lastEventId: () => Cn,
              makeFetchTransport: () => cn,
              makeMain: () => st,
              makeXHRTransport: () => ln,
              onLoad: () => Nn,
              opera10StackLineParser: () => En,
              opera11StackLineParser: () => xn,
              setContext: () => vt,
              setExtra: () => gt,
              setExtras: () => mt,
              setTag: () => bt,
              setTags: () => yt,
              setUser: () => St,
              showReportDialog: () => kn,
              startTransaction: () => wt,
              winjsStackLineParser: () => bn,
              withScope: () => Et,
              wrap: () => jn,
            });
          var r = {};
          n.r(r),
            n.d(r, { FunctionToString: () => N, InboundFilters: () => M });
          var i = {};
          n.r(i),
            n.d(i, {
              Breadcrumbs: () => ke,
              Dedupe: () => Ue,
              GlobalHandlers: () => _e,
              HttpContext: () => qe,
              LinkedErrors: () => Me,
              TryCatch: () => Ee,
            });
          var s = n(2991),
            o = Object.prototype.toString;
          function a(t) {
            switch (o.call(t)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return v(t, Error);
            }
          }
          function c(t, e) {
            return o.call(t) === `[object ${e}]`;
          }
          function u(t) {
            return c(t, "ErrorEvent");
          }
          function l(t) {
            return c(t, "DOMError");
          }
          function d(t) {
            return c(t, "String");
          }
          function p(t) {
            return (
              null === t || ("object" != typeof t && "function" != typeof t)
            );
          }
          function h(t) {
            return c(t, "Object");
          }
          function f(t) {
            return "undefined" != typeof Event && v(t, Event);
          }
          function _(t) {
            return Boolean(t && t.then && "function" == typeof t.then);
          }
          function v(t, e) {
            try {
              return t instanceof e;
            } catch (t) {
              return !1;
            }
          }
          function m(t, e) {
            try {
              let r = t;
              var n = [];
              let i,
                s = 0,
                o = 0;
              for (
                ;
                r &&
                s++ < 5 &&
                ((i = g(r, e)),
                !(
                  "html" === i ||
                  (s > 1 && o + 3 * n.length + i.length >= 80)
                ));

              )
                n.push(i), (o += i.length), (r = r.parentNode);
              return n.reverse().join(" > ");
            } catch (t) {
              return "<unknown>";
            }
          }
          function g(t, e) {
            var n = t,
              r = [];
            let i, s, o, a, c;
            if (!n || !n.tagName) return "";
            r.push(n.tagName.toLowerCase());
            var u =
              e && e.length
                ? e
                    .filter((t) => n.getAttribute(t))
                    .map((t) => [t, n.getAttribute(t)])
                : null;
            if (u && u.length)
              u.forEach((t) => {
                r.push(`[${t[0]}="${t[1]}"]`);
              });
            else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && d(i)))
              for (s = i.split(/\s+/), c = 0; c < s.length; c++)
                r.push(`.${s[c]}`);
            var l = ["type", "name", "title", "alt"];
            for (c = 0; c < l.length; c++)
              (o = l[c]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`);
            return r.join("");
          }
          function y(t, e = 0) {
            return "string" != typeof t || 0 === e || t.length <= e
              ? t
              : `${t.substr(0, e)}...`;
          }
          function b(t, e) {
            if (!Array.isArray(t)) return "";
            var n = [];
            for (let e = 0; e < t.length; e++) {
              var r = t[e];
              try {
                n.push(String(r));
              } catch (t) {
                n.push("[value cannot be serialized]");
              }
            }
            return n.join(e);
          }
          function S(t, e) {
            return (
              !!d(t) &&
              (c(e, "RegExp")
                ? e.test(t)
                : "string" == typeof e && -1 !== t.indexOf(e))
            );
          }
          function E(t, e, n) {
            if (e in t) {
              var r = t[e],
                i = n(r);
              if ("function" == typeof i)
                try {
                  x(i, r);
                } catch (t) {}
              t[e] = i;
            }
          }
          function w(t, e, n) {
            Object.defineProperty(t, e, {
              value: n,
              writable: !0,
              configurable: !0,
            });
          }
          function x(t, e) {
            var n = e.prototype || {};
            (t.prototype = e.prototype = n), w(t, "__sentry_original__", e);
          }
          function T(t) {
            return t.__sentry_original__;
          }
          function O(t) {
            if (a(t))
              return {
                message: t.message,
                name: t.name,
                stack: t.stack,
                ...I(t),
              };
            if (f(t)) {
              var e = {
                type: t.type,
                target: A(t.target),
                currentTarget: A(t.currentTarget),
                ...I(t),
              };
              return (
                "undefined" != typeof CustomEvent &&
                  v(t, CustomEvent) &&
                  (e.detail = t.detail),
                e
              );
            }
            return t;
          }
          function A(t) {
            try {
              return "undefined" != typeof Element && v(t, Element)
                ? m(t)
                : Object.prototype.toString.call(t);
            } catch (t) {
              return "<unknown>";
            }
          }
          function I(t) {
            if ("object" == typeof t && null !== t) {
              var e = {};
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }
            return {};
          }
          function R(t, e = 40) {
            var n = Object.keys(O(t));
            if ((n.sort(), !n.length)) return "[object has no keys]";
            if (n[0].length >= e) return y(n[0], e);
            for (let t = n.length; t > 0; t--) {
              var r = n.slice(0, t).join(", ");
              if (!(r.length > e)) return t === n.length ? r : y(r, e);
            }
            return "";
          }
          function k(t) {
            return C(t, new Map());
          }
          function C(t, e) {
            if (h(t)) {
              if (void 0 !== (i = e.get(t))) return i;
              var n = {};
              for (var r of (e.set(t, n), Object.keys(t)))
                void 0 !== t[r] && (n[r] = C(t[r], e));
              return n;
            }
            var i;
            return Array.isArray(t)
              ? void 0 !== (i = e.get(t))
                ? i
                : ((n = []),
                  e.set(t, n),
                  t.forEach((t) => {
                    n.push(C(t, e));
                  }),
                  n)
              : t;
          }
          let P;
          class N {
            constructor() {
              N.prototype.__init.call(this);
            }
            static __initStatic() {
              this.id = "FunctionToString";
            }
            __init() {
              this.name = N.id;
            }
            setupOnce() {
              (P = Function.prototype.toString),
                (Function.prototype.toString = function (...t) {
                  var e = T(this) || this;
                  return P.apply(e, t);
                });
            }
          }
          N.__initStatic();
          var D = [
            /^Script error\.?$/,
            /^Javascript error: Script error\.? on line 0$/,
          ];
          class M {
            static __initStatic() {
              this.id = "InboundFilters";
            }
            __init() {
              this.name = M.id;
            }
            constructor(t = {}) {
              (this._options = t), M.prototype.__init.call(this);
            }
            setupOnce(t, e) {
              var n = (t) => {
                var n = e();
                if (n) {
                  var r = n.getIntegration(M);
                  if (r) {
                    var i = n.getClient(),
                      s = i ? i.getOptions() : {},
                      o = (function (t = {}, e = {}) {
                        return {
                          allowUrls: [
                            ...(t.allowUrls || []),
                            ...(e.allowUrls || []),
                          ],
                          denyUrls: [
                            ...(t.denyUrls || []),
                            ...(e.denyUrls || []),
                          ],
                          ignoreErrors: [
                            ...(t.ignoreErrors || []),
                            ...(e.ignoreErrors || []),
                            ...D,
                          ],
                          ignoreInternal:
                            void 0 === t.ignoreInternal || t.ignoreInternal,
                        };
                      })(r._options, s);
                    return (function (t, e) {
                      return (
                        !(
                          !e.ignoreInternal ||
                          !(function (t) {
                            try {
                              return (
                                "SentryError" === t.exception.values[0].type
                              );
                            } catch (t) {}
                            return !1;
                          })(t)
                        ) ||
                        !!(function (t, e) {
                          return (
                            !(!e || !e.length) &&
                            (function (t) {
                              if (t.message) return [t.message];
                              if (t.exception)
                                try {
                                  const { type: e = "", value: n = "" } =
                                    (t.exception.values &&
                                      t.exception.values[0]) ||
                                    {};
                                  return [`${n}`, `${e}: ${n}`];
                                } catch (t) {
                                  return [];
                                }
                              return [];
                            })(t).some((t) => e.some((e) => S(t, e)))
                          );
                        })(t, e.ignoreErrors) ||
                        !!(function (t, e) {
                          if (!e || !e.length) return !1;
                          var n = j(t);
                          return !!n && e.some((t) => S(n, t));
                        })(t, e.denyUrls) ||
                        !(function (t, e) {
                          if (!e || !e.length) return !0;
                          var n = j(t);
                          return !n || e.some((t) => S(n, t));
                        })(t, e.allowUrls)
                      );
                    })(t, o)
                      ? null
                      : t;
                  }
                }
                return t;
              };
              (n.id = this.name), t(n);
            }
          }
          function j(t) {
            try {
              let e;
              try {
                e = t.exception.values[0].stacktrace.frames;
              } catch (t) {}
              return e
                ? (function (t = []) {
                    for (let n = t.length - 1; n >= 0; n--) {
                      var e = t[n];
                      if (
                        e &&
                        "<anonymous>" !== e.filename &&
                        "[native code]" !== e.filename
                      )
                        return e.filename || null;
                    }
                    return null;
                  })(e)
                : null;
            } catch (t) {
              return null;
            }
          }
          function L() {
            var t = (0, s.R)(),
              e = t.crypto || t.msCrypto;
            if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
            var n =
              e && e.getRandomValues
                ? () => e.getRandomValues(new Uint8Array(1))[0]
                : () => 16 * Math.random();
            return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
              (t ^ ((15 & n()) >> (t / 4))).toString(16)
            );
          }
          function q(t) {
            return t.exception && t.exception.values
              ? t.exception.values[0]
              : void 0;
          }
          function U(t) {
            const { message: e, event_id: n } = t;
            if (e) return e;
            var r = q(t);
            return r
              ? r.type && r.value
                ? `${r.type}: ${r.value}`
                : r.type || r.value || n || "<unknown>"
              : n || "<unknown>";
          }
          function $(t, e, n) {
            var r = (t.exception = t.exception || {}),
              i = (r.values = r.values || []),
              s = (i[0] = i[0] || {});
            s.value || (s.value = e || ""), s.type || (s.type = n || "Error");
          }
          function H(t, e) {
            var n = q(t);
            if (n) {
              var r = n.mechanism;
              if (
                ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
                e && "data" in e)
              ) {
                var i = { ...(r && r.data), ...e.data };
                n.mechanism.data = i;
              }
            }
          }
          function B(t) {
            if (t && t.__sentry_captured__) return !0;
            try {
              w(t, "__sentry_captured__", !0);
            } catch (t) {}
            return !1;
          }
          M.__initStatic();
          var F = n(1170),
            G =
              ((0, s.R)(),
              ["debug", "info", "warn", "error", "log", "assert", "trace"]);
          let V;
          V = (function () {
            let t = !1;
            var e = {
              enable: () => {
                t = !0;
              },
              disable: () => {
                t = !1;
              },
            };
            return (
              G.forEach((t) => {
                e[t] = () => {};
              }),
              e
            );
          })();
          var Y,
            W = n(2176);
          function z(t) {
            return new K((e) => {
              e(t);
            });
          }
          function J(t) {
            return new K((e, n) => {
              n(t);
            });
          }
          !(function (t) {
            (t[(t.PENDING = 0)] = "PENDING"),
              (t[(t.RESOLVED = 1)] = "RESOLVED"),
              (t[(t.REJECTED = 2)] = "REJECTED");
          })(Y || (Y = {}));
          class K {
            __init() {
              this._state = Y.PENDING;
            }
            __init2() {
              this._handlers = [];
            }
            constructor(t) {
              K.prototype.__init.call(this),
                K.prototype.__init2.call(this),
                K.prototype.__init3.call(this),
                K.prototype.__init4.call(this),
                K.prototype.__init5.call(this),
                K.prototype.__init6.call(this);
              try {
                t(this._resolve, this._reject);
              } catch (t) {
                this._reject(t);
              }
            }
            then(t, e) {
              return new K((n, r) => {
                this._handlers.push([
                  !1,
                  (e) => {
                    if (t)
                      try {
                        n(t(e));
                      } catch (t) {
                        r(t);
                      }
                    else n(e);
                  },
                  (t) => {
                    if (e)
                      try {
                        n(e(t));
                      } catch (t) {
                        r(t);
                      }
                    else r(t);
                  },
                ]),
                  this._executeHandlers();
              });
            }
            catch(t) {
              return this.then((t) => t, t);
            }
            finally(t) {
              return new K((e, n) => {
                let r, i;
                return this.then(
                  (e) => {
                    (i = !1), (r = e), t && t();
                  },
                  (e) => {
                    (i = !0), (r = e), t && t();
                  }
                ).then(() => {
                  i ? n(r) : e(r);
                });
              });
            }
            __init3() {
              this._resolve = (t) => {
                this._setResult(Y.RESOLVED, t);
              };
            }
            __init4() {
              this._reject = (t) => {
                this._setResult(Y.REJECTED, t);
              };
            }
            __init5() {
              this._setResult = (t, e) => {
                this._state === Y.PENDING &&
                  (_(e)
                    ? e.then(this._resolve, this._reject)
                    : ((this._state = t),
                      (this._value = e),
                      this._executeHandlers()));
              };
            }
            __init6() {
              this._executeHandlers = () => {
                if (this._state !== Y.PENDING) {
                  var t = this._handlers.slice();
                  (this._handlers = []),
                    t.forEach((t) => {
                      t[0] ||
                        (this._state === Y.RESOLVED && t[1](this._value),
                        this._state === Y.REJECTED && t[2](this._value),
                        (t[0] = !0));
                    });
                }
              };
            }
          }
          function X(t, e = {}) {
            if (
              (e.user &&
                (!t.ipAddress &&
                  e.user.ip_address &&
                  (t.ipAddress = e.user.ip_address),
                t.did ||
                  e.did ||
                  (t.did = e.user.id || e.user.email || e.user.username)),
              (t.timestamp = e.timestamp || (0, F.ph)()),
              e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
              e.sid && (t.sid = 32 === e.sid.length ? e.sid : L()),
              void 0 !== e.init && (t.init = e.init),
              !t.did && e.did && (t.did = `${e.did}`),
              "number" == typeof e.started && (t.started = e.started),
              t.ignoreDuration)
            )
              t.duration = void 0;
            else if ("number" == typeof e.duration) t.duration = e.duration;
            else {
              var n = t.timestamp - t.started;
              t.duration = n >= 0 ? n : 0;
            }
            e.release && (t.release = e.release),
              e.environment && (t.environment = e.environment),
              !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
              !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
              "number" == typeof e.errors && (t.errors = e.errors),
              e.status && (t.status = e.status);
          }
          class Z {
            constructor() {
              (this._notifyingListeners = !1),
                (this._scopeListeners = []),
                (this._eventProcessors = []),
                (this._breadcrumbs = []),
                (this._attachments = []),
                (this._user = {}),
                (this._tags = {}),
                (this._extra = {}),
                (this._contexts = {}),
                (this._sdkProcessingMetadata = {});
            }
            static clone(t) {
              var e = new Z();
              return (
                t &&
                  ((e._breadcrumbs = [...t._breadcrumbs]),
                  (e._tags = { ...t._tags }),
                  (e._extra = { ...t._extra }),
                  (e._contexts = { ...t._contexts }),
                  (e._user = t._user),
                  (e._level = t._level),
                  (e._span = t._span),
                  (e._session = t._session),
                  (e._transactionName = t._transactionName),
                  (e._fingerprint = t._fingerprint),
                  (e._eventProcessors = [...t._eventProcessors]),
                  (e._requestSession = t._requestSession),
                  (e._attachments = [...t._attachments])),
                e
              );
            }
            addScopeListener(t) {
              this._scopeListeners.push(t);
            }
            addEventProcessor(t) {
              return this._eventProcessors.push(t), this;
            }
            setUser(t) {
              return (
                (this._user = t || {}),
                this._session && X(this._session, { user: t }),
                this._notifyScopeListeners(),
                this
              );
            }
            getUser() {
              return this._user;
            }
            getRequestSession() {
              return this._requestSession;
            }
            setRequestSession(t) {
              return (this._requestSession = t), this;
            }
            setTags(t) {
              return (
                (this._tags = { ...this._tags, ...t }),
                this._notifyScopeListeners(),
                this
              );
            }
            setTag(t, e) {
              return (
                (this._tags = { ...this._tags, [t]: e }),
                this._notifyScopeListeners(),
                this
              );
            }
            setExtras(t) {
              return (
                (this._extra = { ...this._extra, ...t }),
                this._notifyScopeListeners(),
                this
              );
            }
            setExtra(t, e) {
              return (
                (this._extra = { ...this._extra, [t]: e }),
                this._notifyScopeListeners(),
                this
              );
            }
            setFingerprint(t) {
              return (
                (this._fingerprint = t), this._notifyScopeListeners(), this
              );
            }
            setLevel(t) {
              return (this._level = t), this._notifyScopeListeners(), this;
            }
            setTransactionName(t) {
              return (
                (this._transactionName = t), this._notifyScopeListeners(), this
              );
            }
            setContext(t, e) {
              return (
                null === e
                  ? delete this._contexts[t]
                  : (this._contexts = { ...this._contexts, [t]: e }),
                this._notifyScopeListeners(),
                this
              );
            }
            setSpan(t) {
              return (this._span = t), this._notifyScopeListeners(), this;
            }
            getSpan() {
              return this._span;
            }
            getTransaction() {
              var t = this.getSpan();
              return t && t.transaction;
            }
            setSession(t) {
              return (
                t ? (this._session = t) : delete this._session,
                this._notifyScopeListeners(),
                this
              );
            }
            getSession() {
              return this._session;
            }
            update(t) {
              if (!t) return this;
              if ("function" == typeof t) {
                var e = t(this);
                return e instanceof Z ? e : this;
              }
              return (
                t instanceof Z
                  ? ((this._tags = { ...this._tags, ...t._tags }),
                    (this._extra = { ...this._extra, ...t._extra }),
                    (this._contexts = { ...this._contexts, ...t._contexts }),
                    t._user &&
                      Object.keys(t._user).length &&
                      (this._user = t._user),
                    t._level && (this._level = t._level),
                    t._fingerprint && (this._fingerprint = t._fingerprint),
                    t._requestSession &&
                      (this._requestSession = t._requestSession))
                  : h(t) &&
                    ((this._tags = { ...this._tags, ...t.tags }),
                    (this._extra = { ...this._extra, ...t.extra }),
                    (this._contexts = { ...this._contexts, ...t.contexts }),
                    t.user && (this._user = t.user),
                    t.level && (this._level = t.level),
                    t.fingerprint && (this._fingerprint = t.fingerprint),
                    t.requestSession &&
                      (this._requestSession = t.requestSession)),
                this
              );
            }
            clear() {
              return (
                (this._breadcrumbs = []),
                (this._tags = {}),
                (this._extra = {}),
                (this._user = {}),
                (this._contexts = {}),
                (this._level = void 0),
                (this._transactionName = void 0),
                (this._fingerprint = void 0),
                (this._requestSession = void 0),
                (this._span = void 0),
                (this._session = void 0),
                this._notifyScopeListeners(),
                (this._attachments = []),
                this
              );
            }
            addBreadcrumb(t, e) {
              var n = "number" == typeof e ? Math.min(e, 100) : 100;
              if (n <= 0) return this;
              var r = { timestamp: (0, F.yW)(), ...t };
              return (
                (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)),
                this._notifyScopeListeners(),
                this
              );
            }
            clearBreadcrumbs() {
              return (
                (this._breadcrumbs = []), this._notifyScopeListeners(), this
              );
            }
            addAttachment(t) {
              return this._attachments.push(t), this;
            }
            getAttachments() {
              return this._attachments;
            }
            clearAttachments() {
              return (this._attachments = []), this;
            }
            applyToEvent(t, e = {}) {
              if (
                (this._extra &&
                  Object.keys(this._extra).length &&
                  (t.extra = { ...this._extra, ...t.extra }),
                this._tags &&
                  Object.keys(this._tags).length &&
                  (t.tags = { ...this._tags, ...t.tags }),
                this._user &&
                  Object.keys(this._user).length &&
                  (t.user = { ...this._user, ...t.user }),
                this._contexts &&
                  Object.keys(this._contexts).length &&
                  (t.contexts = { ...this._contexts, ...t.contexts }),
                this._level && (t.level = this._level),
                this._transactionName &&
                  (t.transaction = this._transactionName),
                this._span)
              ) {
                t.contexts = {
                  trace: this._span.getTraceContext(),
                  ...t.contexts,
                };
                var n = this._span.transaction && this._span.transaction.name;
                n && (t.tags = { transaction: n, ...t.tags });
              }
              return (
                this._applyFingerprint(t),
                (t.breadcrumbs = [
                  ...(t.breadcrumbs || []),
                  ...this._breadcrumbs,
                ]),
                (t.breadcrumbs =
                  t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
                (t.sdkProcessingMetadata = {
                  ...t.sdkProcessingMetadata,
                  ...this._sdkProcessingMetadata,
                }),
                this._notifyEventProcessors(
                  [...Q(), ...this._eventProcessors],
                  t,
                  e
                )
              );
            }
            setSDKProcessingMetadata(t) {
              return (
                (this._sdkProcessingMetadata = {
                  ...this._sdkProcessingMetadata,
                  ...t,
                }),
                this
              );
            }
            _notifyEventProcessors(t, e, n, r = 0) {
              return new K((i, s) => {
                var o = t[r];
                if (null === e || "function" != typeof o) i(e);
                else {
                  var a = o({ ...e }, n);
                  _(a)
                    ? a
                        .then((e) =>
                          this._notifyEventProcessors(t, e, n, r + 1).then(i)
                        )
                        .then(null, s)
                    : this._notifyEventProcessors(t, a, n, r + 1)
                        .then(i)
                        .then(null, s);
                }
              });
            }
            _notifyScopeListeners() {
              this._notifyingListeners ||
                ((this._notifyingListeners = !0),
                this._scopeListeners.forEach((t) => {
                  t(this);
                }),
                (this._notifyingListeners = !1));
            }
            _applyFingerprint(t) {
              (t.fingerprint = t.fingerprint
                ? Array.isArray(t.fingerprint)
                  ? t.fingerprint
                  : [t.fingerprint]
                : []),
                this._fingerprint &&
                  (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }
          }
          function Q() {
            return (0, s.Y)("globalEventProcessors", () => []);
          }
          function tt(t) {
            Q().push(t);
          }
          var et = 4,
            nt = 100;
          class rt {
            __init() {
              this._stack = [{}];
            }
            constructor(t, e = new Z(), n = et) {
              (this._version = n),
                rt.prototype.__init.call(this),
                (this.getStackTop().scope = e),
                t && this.bindClient(t);
            }
            isOlderThan(t) {
              return this._version < t;
            }
            bindClient(t) {
              (this.getStackTop().client = t),
                t && t.setupIntegrations && t.setupIntegrations();
            }
            pushScope() {
              var t = Z.clone(this.getScope());
              return (
                this.getStack().push({ client: this.getClient(), scope: t }), t
              );
            }
            popScope() {
              return !(this.getStack().length <= 1 || !this.getStack().pop());
            }
            withScope(t) {
              var e = this.pushScope();
              try {
                t(e);
              } finally {
                this.popScope();
              }
            }
            getClient() {
              return this.getStackTop().client;
            }
            getScope() {
              return this.getStackTop().scope;
            }
            getStack() {
              return this._stack;
            }
            getStackTop() {
              return this._stack[this._stack.length - 1];
            }
            captureException(t, e) {
              var n = (this._lastEventId = e && e.event_id ? e.event_id : L()),
                r = new Error("Sentry syntheticException");
              return (
                this._withClient((i, s) => {
                  i.captureException(
                    t,
                    {
                      originalException: t,
                      syntheticException: r,
                      ...e,
                      event_id: n,
                    },
                    s
                  );
                }),
                n
              );
            }
            captureMessage(t, e, n) {
              var r = (this._lastEventId = n && n.event_id ? n.event_id : L()),
                i = new Error(t);
              return (
                this._withClient((s, o) => {
                  s.captureMessage(
                    t,
                    e,
                    {
                      originalException: t,
                      syntheticException: i,
                      ...n,
                      event_id: r,
                    },
                    o
                  );
                }),
                r
              );
            }
            captureEvent(t, e) {
              var n = e && e.event_id ? e.event_id : L();
              return (
                "transaction" !== t.type && (this._lastEventId = n),
                this._withClient((r, i) => {
                  r.captureEvent(t, { ...e, event_id: n }, i);
                }),
                n
              );
            }
            lastEventId() {
              return this._lastEventId;
            }
            addBreadcrumb(t, e) {
              const { scope: n, client: r } = this.getStackTop();
              if (!n || !r) return;
              const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = nt } =
                (r.getOptions && r.getOptions()) || {};
              if (!(o <= 0)) {
                var a = { timestamp: (0, F.yW)(), ...t },
                  c = i
                    ? (function (t) {
                        var e = (0, s.R)();
                        if (!("console" in e)) return t();
                        var n = e.console,
                          r = {};
                        G.forEach((t) => {
                          var i = n[t] && n[t].__sentry_original__;
                          t in e.console && i && ((r[t] = n[t]), (n[t] = i));
                        });
                        try {
                          return t();
                        } finally {
                          Object.keys(r).forEach((t) => {
                            n[t] = r[t];
                          });
                        }
                      })(() => i(a, e))
                    : a;
                null !== c && n.addBreadcrumb(c, o);
              }
            }
            setUser(t) {
              var e = this.getScope();
              e && e.setUser(t);
            }
            setTags(t) {
              var e = this.getScope();
              e && e.setTags(t);
            }
            setExtras(t) {
              var e = this.getScope();
              e && e.setExtras(t);
            }
            setTag(t, e) {
              var n = this.getScope();
              n && n.setTag(t, e);
            }
            setExtra(t, e) {
              var n = this.getScope();
              n && n.setExtra(t, e);
            }
            setContext(t, e) {
              var n = this.getScope();
              n && n.setContext(t, e);
            }
            configureScope(t) {
              const { scope: e, client: n } = this.getStackTop();
              e && n && t(e);
            }
            run(t) {
              var e = st(this);
              try {
                t(this);
              } finally {
                st(e);
              }
            }
            getIntegration(t) {
              var e = this.getClient();
              if (!e) return null;
              try {
                return e.getIntegration(t);
              } catch (t) {
                return null;
              }
            }
            startTransaction(t, e) {
              return this._callExtensionMethod("startTransaction", t, e);
            }
            traceHeaders() {
              return this._callExtensionMethod("traceHeaders");
            }
            captureSession(t = !1) {
              if (t) return this.endSession();
              this._sendSessionUpdate();
            }
            endSession() {
              var t = this.getStackTop(),
                e = t && t.scope,
                n = e && e.getSession();
              n &&
                (function (t, e) {
                  let n = {};
                  "ok" === t.status && (n = { status: "exited" }), X(t, n);
                })(n),
                this._sendSessionUpdate(),
                e && e.setSession();
            }
            startSession(t) {
              const { scope: e, client: n } = this.getStackTop(),
                { release: r, environment: i } = (n && n.getOptions()) || {};
              var o = (0, s.R)();
              const { userAgent: a } = o.navigator || {};
              var c = (function (t) {
                var e = (0, F.ph)(),
                  n = {
                    sid: L(),
                    init: !0,
                    timestamp: e,
                    started: e,
                    duration: 0,
                    status: "ok",
                    errors: 0,
                    ignoreDuration: !1,
                    toJSON: () =>
                      (function (t) {
                        return k({
                          sid: `${t.sid}`,
                          init: t.init,
                          started: new Date(1e3 * t.started).toISOString(),
                          timestamp: new Date(1e3 * t.timestamp).toISOString(),
                          status: t.status,
                          errors: t.errors,
                          did:
                            "number" == typeof t.did || "string" == typeof t.did
                              ? `${t.did}`
                              : void 0,
                          duration: t.duration,
                          attrs: {
                            release: t.release,
                            environment: t.environment,
                            ip_address: t.ipAddress,
                            user_agent: t.userAgent,
                          },
                        });
                      })(n),
                  };
                return t && X(n, t), n;
              })({
                release: r,
                environment: i,
                ...(e && { user: e.getUser() }),
                ...(a && { userAgent: a }),
                ...t,
              });
              if (e) {
                var u = e.getSession && e.getSession();
                u && "ok" === u.status && X(u, { status: "exited" }),
                  this.endSession(),
                  e.setSession(c);
              }
              return c;
            }
            shouldSendDefaultPii() {
              var t = this.getClient(),
                e = t && t.getOptions();
              return Boolean(e && e.sendDefaultPii);
            }
            _sendSessionUpdate() {
              const { scope: t, client: e } = this.getStackTop();
              if (t) {
                var n = t.getSession();
                n && e && e.captureSession && e.captureSession(n);
              }
            }
            _withClient(t) {
              const { scope: e, client: n } = this.getStackTop();
              n && t(n, e);
            }
            _callExtensionMethod(t, ...e) {
              var n = it().__SENTRY__;
              if (n && n.extensions && "function" == typeof n.extensions[t])
                return n.extensions[t].apply(this, e);
            }
          }
          function it() {
            var t = (0, s.R)();
            return (
              (t.__SENTRY__ = t.__SENTRY__ || { extensions: {}, hub: void 0 }),
              t
            );
          }
          function st(t) {
            var e = it(),
              n = ct(e);
            return ut(e, t), n;
          }
          function ot() {
            var t = it();
            return (
              (at(t) && !ct(t).isOlderThan(et)) || ut(t, new rt()),
              (0, W.KV)()
                ? (function (t) {
                    try {
                      var e = it().__SENTRY__,
                        n =
                          e &&
                          e.extensions &&
                          e.extensions.domain &&
                          e.extensions.domain.active;
                      if (!n) return ct(t);
                      if (!at(n) || ct(n).isOlderThan(et)) {
                        var r = ct(t).getStackTop();
                        ut(n, new rt(r.client, Z.clone(r.scope)));
                      }
                      return ct(n);
                    } catch (e) {
                      return ct(t);
                    }
                  })(t)
                : ct(t)
            );
          }
          function at(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
          }
          function ct(t) {
            return (0, s.Y)("hub", () => new rt(), t);
          }
          function ut(t, e) {
            return !!t && (((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0);
          }
          var lt = "7.11.1";
          function dt(t, e) {
            return ot().captureException(t, { captureContext: e });
          }
          function pt(t, e) {
            var n = "string" == typeof e ? e : void 0,
              r = "string" != typeof e ? { captureContext: e } : void 0;
            return ot().captureMessage(t, n, r);
          }
          function ht(t, e) {
            return ot().captureEvent(t, e);
          }
          function ft(t) {
            ot().configureScope(t);
          }
          function _t(t) {
            ot().addBreadcrumb(t);
          }
          function vt(t, e) {
            ot().setContext(t, e);
          }
          function mt(t) {
            ot().setExtras(t);
          }
          function gt(t, e) {
            ot().setExtra(t, e);
          }
          function yt(t) {
            ot().setTags(t);
          }
          function bt(t, e) {
            ot().setTag(t, e);
          }
          function St(t) {
            ot().setUser(t);
          }
          function Et(t) {
            ot().withScope(t);
          }
          function wt(t, e) {
            return ot().startTransaction(
              { metadata: { source: "custom" }, ...t },
              e
            );
          }
          class xt extends Error {
            constructor(t, e = "warn") {
              super(t),
                (this.message = t),
                (this.name = new.target.prototype.constructor.name),
                Object.setPrototypeOf(this, new.target.prototype),
                (this.logLevel = e);
            }
          }
          function Tt(t, e = []) {
            return [t, e];
          }
          function Ot(t, e) {
            const [n, r] = t;
            return [n, [...r, e]];
          }
          function At(t, e) {
            t[1].forEach((t) => {
              var n = t[0].type;
              e(t, n);
            });
          }
          function It(t, e) {
            return (e || new TextEncoder()).encode(t);
          }
          function Rt(t, e) {
            const [n, r] = t;
            let i = JSON.stringify(n);
            function s(t) {
              "string" == typeof i
                ? (i = "string" == typeof t ? i + t : [It(i, e), t])
                : i.push("string" == typeof t ? It(t, e) : t);
            }
            for (var o of r) {
              const [t, e] = o;
              s(`\n${JSON.stringify(t)}\n`),
                s(
                  "string" == typeof e || e instanceof Uint8Array
                    ? e
                    : JSON.stringify(e)
                );
            }
            return "string" == typeof i
              ? i
              : (function (t) {
                  var e = t.reduce((t, e) => t + e.length, 0),
                    n = new Uint8Array(e);
                  let r = 0;
                  for (var i of t) n.set(i, r), (r += i.length);
                  return n;
                })(i);
          }
          function kt(t, e) {
            var n = "string" == typeof t.data ? It(t.data, e) : t.data;
            return [
              k({
                type: "attachment",
                length: n.length,
                filename: t.filename,
                content_type: t.contentType,
                attachment_type: t.attachmentType,
              }),
              n,
            ];
          }
          var Ct = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
          };
          function Pt(t) {
            return Ct[t];
          }
          var Nt = 6e4;
          var Dt = 30;
          function Mt(
            t,
            e,
            n = (function (t) {
              var e = [];
              function n(t) {
                return e.splice(e.indexOf(t), 1)[0];
              }
              return {
                $: e,
                add: function (r) {
                  if (!(void 0 === t || e.length < t))
                    return J(
                      new xt("Not adding Promise due to buffer limit reached.")
                    );
                  var i = r();
                  return (
                    -1 === e.indexOf(i) && e.push(i),
                    i
                      .then(() => n(i))
                      .then(null, () => n(i).then(null, () => {})),
                    i
                  );
                },
                drain: function (t) {
                  return new K((n, r) => {
                    let i = e.length;
                    if (!i) return n(!0);
                    var s = setTimeout(() => {
                      t && t > 0 && n(!1);
                    }, t);
                    e.forEach((t) => {
                      z(t).then(() => {
                        --i || (clearTimeout(s), n(!0));
                      }, r);
                    });
                  });
                },
              };
            })(t.bufferSize || Dt)
          ) {
            let r = {};
            return {
              send: function (i) {
                var s = [];
                if (
                  (At(i, (e, n) => {
                    var i = Pt(n);
                    !(function (t, e, n = Date.now()) {
                      return (
                        (function (t, e) {
                          return t[e] || t.all || 0;
                        })(t, e) > n
                      );
                    })(r, i)
                      ? s.push(e)
                      : t.recordDroppedEvent("ratelimit_backoff", i);
                  }),
                  0 === s.length)
                )
                  return z();
                var o = Tt(i[0], s),
                  a = (e) => {
                    At(o, (n, r) => {
                      t.recordDroppedEvent(e, Pt(r));
                    });
                  };
                return n
                  .add(() =>
                    e({ body: Rt(o, t.textEncoder) }).then(
                      (t) => {
                        void 0 !== t.statusCode &&
                          (t.statusCode < 200 || t.statusCode),
                          (r = (function (
                            t,
                            { statusCode: e, headers: n },
                            r = Date.now()
                          ) {
                            var i = { ...t },
                              s = n && n["x-sentry-rate-limits"],
                              o = n && n["retry-after"];
                            if (s)
                              for (var a of s.trim().split(",")) {
                                const [t, e] = a.split(":", 2);
                                var c = parseInt(t, 10),
                                  u = 1e3 * (isNaN(c) ? 60 : c);
                                if (e) for (var l of e.split(";")) i[l] = r + u;
                                else i.all = r + u;
                              }
                            else
                              o
                                ? (i.all =
                                    r +
                                    (function (t, e = Date.now()) {
                                      var n = parseInt(`${t}`, 10);
                                      if (!isNaN(n)) return 1e3 * n;
                                      var r = Date.parse(`${t}`);
                                      return isNaN(r) ? Nt : r - e;
                                    })(o, r))
                                : 429 === e && (i.all = r + 6e4);
                            return i;
                          })(r, t));
                      },
                      (t) => {
                        a("network_error");
                      }
                    )
                  )
                  .then(
                    (t) => t,
                    (t) => {
                      if (t instanceof xt) return a("queue_overflow"), z();
                      throw t;
                    }
                  );
              },
              flush: (t) => n.drain(t),
            };
          }
          function jt() {
            if (!("fetch" in (0, s.R)())) return !1;
            try {
              return new Headers(), new Request(""), new Response(), !0;
            } catch (t) {
              return !1;
            }
          }
          function Lt(t) {
            return (
              t &&
              /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(
                t.toString()
              )
            );
          }
          var qt = (0, s.R)(),
            Ut = {},
            $t = {};
          function Ht(t, e) {
            (Ut[t] = Ut[t] || []),
              Ut[t].push(e),
              (function (t) {
                if (!$t[t])
                  switch ((($t[t] = !0), t)) {
                    case "console":
                      "console" in qt &&
                        G.forEach(function (t) {
                          t in qt.console &&
                            E(qt.console, t, function (e) {
                              return function (...n) {
                                Bt("console", { args: n, level: t }),
                                  e && e.apply(qt.console, n);
                              };
                            });
                        });
                      break;
                    case "dom":
                      !(function () {
                        if ("document" in qt) {
                          var t = Bt.bind(null, "dom"),
                            e = Jt(t, !0);
                          qt.document.addEventListener("click", e, !1),
                            qt.document.addEventListener("keypress", e, !1),
                            ["EventTarget", "Node"].forEach((e) => {
                              var n = qt[e] && qt[e].prototype;
                              n &&
                                n.hasOwnProperty &&
                                n.hasOwnProperty("addEventListener") &&
                                (E(n, "addEventListener", function (e) {
                                  return function (n, r, i) {
                                    if ("click" === n || "keypress" == n)
                                      try {
                                        var s =
                                            (this.__sentry_instrumentation_handlers__ =
                                              this
                                                .__sentry_instrumentation_handlers__ ||
                                              {}),
                                          o = (s[n] = s[n] || { refCount: 0 });
                                        if (!o.handler) {
                                          var a = Jt(t);
                                          (o.handler = a),
                                            e.call(this, n, a, i);
                                        }
                                        o.refCount += 1;
                                      } catch (t) {}
                                    return e.call(this, n, r, i);
                                  };
                                }),
                                E(n, "removeEventListener", function (t) {
                                  return function (e, n, r) {
                                    if ("click" === e || "keypress" == e)
                                      try {
                                        var i =
                                            this
                                              .__sentry_instrumentation_handlers__ ||
                                            {},
                                          s = i[e];
                                        s &&
                                          ((s.refCount -= 1),
                                          s.refCount <= 0 &&
                                            (t.call(this, e, s.handler, r),
                                            (s.handler = void 0),
                                            delete i[e]),
                                          0 === Object.keys(i).length &&
                                            delete this
                                              .__sentry_instrumentation_handlers__);
                                      } catch (t) {}
                                    return t.call(this, e, n, r);
                                  };
                                }));
                            });
                        }
                      })();
                      break;
                    case "xhr":
                      !(function () {
                        if ("XMLHttpRequest" in qt) {
                          var t = XMLHttpRequest.prototype;
                          E(t, "open", function (t) {
                            return function (...e) {
                              var n = this,
                                r = e[1],
                                i = (n.__sentry_xhr__ = {
                                  method: d(e[0]) ? e[0].toUpperCase() : e[0],
                                  url: e[1],
                                });
                              d(r) &&
                                "POST" === i.method &&
                                r.match(/sentry_key/) &&
                                (n.__sentry_own_request__ = !0);
                              var s = function () {
                                if (4 === n.readyState) {
                                  try {
                                    i.status_code = n.status;
                                  } catch (t) {}
                                  Bt("xhr", {
                                    args: e,
                                    endTimestamp: Date.now(),
                                    startTimestamp: Date.now(),
                                    xhr: n,
                                  });
                                }
                              };
                              return (
                                "onreadystatechange" in n &&
                                "function" == typeof n.onreadystatechange
                                  ? E(n, "onreadystatechange", function (t) {
                                      return function (...e) {
                                        return s(), t.apply(n, e);
                                      };
                                    })
                                  : n.addEventListener("readystatechange", s),
                                t.apply(n, e)
                              );
                            };
                          }),
                            E(t, "send", function (t) {
                              return function (...e) {
                                return (
                                  this.__sentry_xhr__ &&
                                    void 0 !== e[0] &&
                                    (this.__sentry_xhr__.body = e[0]),
                                  Bt("xhr", {
                                    args: e,
                                    startTimestamp: Date.now(),
                                    xhr: this,
                                  }),
                                  t.apply(this, e)
                                );
                              };
                            });
                        }
                      })();
                      break;
                    case "fetch":
                      (function () {
                        if (!jt()) return !1;
                        var t = (0, s.R)();
                        if (Lt(t.fetch)) return !0;
                        let e = !1;
                        var n = t.document;
                        if (n && "function" == typeof n.createElement)
                          try {
                            var r = n.createElement("iframe");
                            (r.hidden = !0),
                              n.head.appendChild(r),
                              r.contentWindow &&
                                r.contentWindow.fetch &&
                                (e = Lt(r.contentWindow.fetch)),
                              n.head.removeChild(r);
                          } catch (t) {}
                        return e;
                      })() &&
                        E(qt, "fetch", function (t) {
                          return function (...e) {
                            var n = {
                              args: e,
                              fetchData: { method: Ft(e), url: Gt(e) },
                              startTimestamp: Date.now(),
                            };
                            return (
                              Bt("fetch", { ...n }),
                              t.apply(qt, e).then(
                                (t) => (
                                  Bt("fetch", {
                                    ...n,
                                    endTimestamp: Date.now(),
                                    response: t,
                                  }),
                                  t
                                ),
                                (t) => {
                                  throw (
                                    (Bt("fetch", {
                                      ...n,
                                      endTimestamp: Date.now(),
                                      error: t,
                                    }),
                                    t)
                                  );
                                }
                              )
                            );
                          };
                        });
                      break;
                    case "history":
                      !(function () {
                        if (
                          ((n =
                            (e = (t = (0, s.R)()).chrome) &&
                            e.app &&
                            e.app.runtime),
                          (r =
                            "history" in t &&
                            !!t.history.pushState &&
                            !!t.history.replaceState),
                          !n && r)
                        ) {
                          var t,
                            e,
                            n,
                            r,
                            i = qt.onpopstate;
                          (qt.onpopstate = function (...t) {
                            var e = qt.location.href,
                              n = Vt;
                            if (
                              ((Vt = e), Bt("history", { from: n, to: e }), i)
                            )
                              try {
                                return i.apply(this, t);
                              } catch (t) {}
                          }),
                            E(qt.history, "pushState", o),
                            E(qt.history, "replaceState", o);
                        }
                        function o(t) {
                          return function (...e) {
                            var n = e.length > 2 ? e[2] : void 0;
                            if (n) {
                              var r = Vt,
                                i = String(n);
                              (Vt = i), Bt("history", { from: r, to: i });
                            }
                            return t.apply(this, e);
                          };
                        }
                      })();
                      break;
                    case "error":
                      (Kt = qt.onerror),
                        (qt.onerror = function (t, e, n, r, i) {
                          return (
                            Bt("error", {
                              column: r,
                              error: i,
                              line: n,
                              msg: t,
                              url: e,
                            }),
                            !!Kt && Kt.apply(this, arguments)
                          );
                        });
                      break;
                    case "unhandledrejection":
                      (Xt = qt.onunhandledrejection),
                        (qt.onunhandledrejection = function (t) {
                          return (
                            Bt("unhandledrejection", t),
                            !Xt || Xt.apply(this, arguments)
                          );
                        });
                      break;
                    default:
                  }
              })(t);
          }
          function Bt(t, e) {
            if (t && Ut[t])
              for (var n of Ut[t] || [])
                try {
                  n(e);
                } catch (t) {}
          }
          function Ft(t = []) {
            return "Request" in qt && v(t[0], Request) && t[0].method
              ? String(t[0].method).toUpperCase()
              : t[1] && t[1].method
              ? String(t[1].method).toUpperCase()
              : "GET";
          }
          function Gt(t = []) {
            return "string" == typeof t[0]
              ? t[0]
              : "Request" in qt && v(t[0], Request)
              ? t[0].url
              : String(t[0]);
          }
          let Vt;
          var Yt = 1e3;
          let Wt, zt;
          function Jt(t, e = !1) {
            return (n) => {
              if (
                n &&
                zt !== n &&
                !(function (t) {
                  if ("keypress" !== t.type) return !1;
                  try {
                    var e = t.target;
                    if (!e || !e.tagName) return !0;
                    if (
                      "INPUT" === e.tagName ||
                      "TEXTAREA" === e.tagName ||
                      e.isContentEditable
                    )
                      return !1;
                  } catch (t) {}
                  return !0;
                })(n)
              ) {
                var r = "keypress" === n.type ? "input" : n.type;
                (void 0 === Wt ||
                  (function (t, e) {
                    if (!t) return !0;
                    if (t.type !== e.type) return !0;
                    try {
                      if (t.target !== e.target) return !0;
                    } catch (t) {}
                    return !1;
                  })(zt, n)) &&
                  (t({ event: n, name: r, global: e }), (zt = n)),
                  clearTimeout(Wt),
                  (Wt = qt.setTimeout(() => {
                    Wt = void 0;
                  }, Yt));
              }
            };
          }
          let Kt = null,
            Xt = null;
          var Zt = 50;
          function Qt(...t) {
            var e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
            return (t, n = 0) => {
              var r = [];
              for (var i of t.split("\n").slice(n)) {
                var s = i.replace(/\(error: (.*)\)/, "$1");
                for (var o of e) {
                  var a = o(s);
                  if (a) {
                    r.push(a);
                    break;
                  }
                }
              }
              return (function (t) {
                if (!t.length) return [];
                let e = t;
                var n = e[0].function || "",
                  r = e[e.length - 1].function || "";
                return (
                  (-1 === n.indexOf("captureMessage") &&
                    -1 === n.indexOf("captureException")) ||
                    (e = e.slice(1)),
                  -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
                  e
                    .slice(0, Zt)
                    .map((t) => ({
                      ...t,
                      filename: t.filename || e[0].filename,
                      function: t.function || "?",
                    }))
                    .reverse()
                );
              })(r);
            };
          }
          var te = "<anonymous>";
          function ee(t) {
            try {
              return (t && "function" == typeof t && t.name) || te;
            } catch (t) {
              return te;
            }
          }
          function ne(t, e = 1 / 0, n = 1 / 0) {
            try {
              return ie("", t, e, n);
            } catch (t) {
              return { ERROR: `**non-serializable** (${t})` };
            }
          }
          function re(t, e = 3, n = 102400) {
            var r,
              i = ne(t, e);
            return (
              (r = i),
              (function (t) {
                return ~-encodeURI(t).split(/%..|./).length;
              })(JSON.stringify(r)) > n
                ? re(t, e - 1, n)
                : i
            );
          }
          function ie(
            t,
            e,
            r = 1 / 0,
            i = 1 / 0,
            s = (function () {
              var t = "function" == typeof WeakSet,
                e = t ? new WeakSet() : [];
              return [
                function (n) {
                  if (t) return !!e.has(n) || (e.add(n), !1);
                  for (let t = 0; t < e.length; t++) if (e[t] === n) return !0;
                  return e.push(n), !1;
                },
                function (n) {
                  if (t) e.delete(n);
                  else
                    for (let t = 0; t < e.length; t++)
                      if (e[t] === n) {
                        e.splice(t, 1);
                        break;
                      }
                },
              ];
            })()
          ) {
            const [o, a] = s;
            if (
              null === e ||
              (["number", "boolean", "string"].includes(typeof e) &&
                ("number" != typeof (c = e) || c == c))
            )
              return e;
            var c,
              u = (function (t, e) {
                try {
                  return "domain" === t &&
                    e &&
                    "object" == typeof e &&
                    e._events
                    ? "[Domain]"
                    : "domainEmitter" === t
                    ? "[DomainEmitter]"
                    : void 0 !== n.g && e === n.g
                    ? "[Global]"
                    : "undefined" != typeof window && e === window
                    ? "[Window]"
                    : "undefined" != typeof document && e === document
                    ? "[Document]"
                    : (function (t) {
                        return (
                          h(t) &&
                          "nativeEvent" in t &&
                          "preventDefault" in t &&
                          "stopPropagation" in t
                        );
                      })(e)
                    ? "[SyntheticEvent]"
                    : "number" == typeof e && e != e
                    ? "[NaN]"
                    : void 0 === e
                    ? "[undefined]"
                    : "function" == typeof e
                    ? `[Function: ${ee(e)}]`
                    : "symbol" == typeof e
                    ? `[${String(e)}]`
                    : "bigint" == typeof e
                    ? `[BigInt: ${String(e)}]`
                    : `[object ${Object.getPrototypeOf(e).constructor.name}]`;
                } catch (t) {
                  return `**non-serializable** (${t})`;
                }
              })(t, e);
            if (!u.startsWith("[object ")) return u;
            if (e.__sentry_skip_normalization__) return e;
            if (0 === r) return u.replace("object ", "");
            if (o(e)) return "[Circular ~]";
            var l = e;
            if (l && "function" == typeof l.toJSON)
              try {
                return ie("", l.toJSON(), r - 1, i, s);
              } catch (t) {}
            var d = Array.isArray(e) ? [] : {};
            let p = 0;
            var f = O(e);
            for (var _ in f)
              if (Object.prototype.hasOwnProperty.call(f, _)) {
                if (p >= i) {
                  d[_] = "[MaxProperties ~]";
                  break;
                }
                var v = f[_];
                (d[_] = ie(_, v, r - 1, i, s)), (p += 1);
              }
            return a(e), d;
          }
          function se(t, e) {
            var n = ae(t, e),
              r = { type: e && e.name, value: ue(e) };
            return (
              n.length && (r.stacktrace = { frames: n }),
              void 0 === r.type &&
                "" === r.value &&
                (r.value = "Unrecoverable error caught"),
              r
            );
          }
          function oe(t, e) {
            return { exception: { values: [se(t, e)] } };
          }
          function ae(t, e) {
            var n = e.stacktrace || e.stack || "",
              r = (function (t) {
                if (t) {
                  if ("number" == typeof t.framesToPop) return t.framesToPop;
                  if (ce.test(t.message)) return 1;
                }
                return 0;
              })(e);
            try {
              return t(n, r);
            } catch (t) {}
            return [];
          }
          var ce = /Minified React error #\d+;/i;
          function ue(t) {
            var e = t && t.message;
            return e
              ? e.error && "string" == typeof e.error.message
                ? e.error.message
                : e
              : "No error message";
          }
          function le(t, e, n, r, i) {
            let s;
            if (u(e) && e.error) return oe(t, e.error);
            if (l(e) || c(e, "DOMException")) {
              var o = e;
              if ("stack" in e) s = oe(t, e);
              else {
                var d = o.name || (l(o) ? "DOMError" : "DOMException"),
                  p = o.message ? `${d}: ${o.message}` : d;
                (s = de(t, p, n, r)), $(s, p);
              }
              return (
                "code" in o &&
                  (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }),
                s
              );
            }
            return a(e)
              ? oe(t, e)
              : h(e) || f(e)
              ? ((s = (function (t, e, n, r) {
                  var i = {
                    exception: {
                      values: [
                        {
                          type: f(e)
                            ? e.constructor.name
                            : r
                            ? "UnhandledRejection"
                            : "Error",
                          value: `Non-Error ${
                            r ? "promise rejection" : "exception"
                          } captured with keys: ${R(e)}`,
                        },
                      ],
                    },
                    extra: { __serialized__: re(e) },
                  };
                  if (n) {
                    var s = ae(t, n);
                    s.length &&
                      (i.exception.values[0].stacktrace = { frames: s });
                  }
                  return i;
                })(t, e, n, i)),
                H(s, { synthetic: !0 }),
                s)
              : ((s = de(t, e, n, r)),
                $(s, `${e}`, void 0),
                H(s, { synthetic: !0 }),
                s);
          }
          function de(t, e, n, r) {
            var i = { message: e };
            if (r && n) {
              var s = ae(t, n);
              s.length &&
                (i.exception = {
                  values: [{ value: e, stacktrace: { frames: s } }],
                });
            }
            return i;
          }
          let pe = 0;
          function he() {
            return pe > 0;
          }
          function fe(t, e = {}, n) {
            if ("function" != typeof t) return t;
            try {
              var r = t.__sentry_wrapped__;
              if (r) return r;
              if (T(t)) return t;
            } catch (e) {
              return t;
            }
            var i = function () {
              var r = Array.prototype.slice.call(arguments);
              try {
                n && "function" == typeof n && n.apply(this, arguments);
                var i = r.map((t) => fe(t, e));
                return t.apply(this, i);
              } catch (t) {
                throw (
                  ((pe += 1),
                  setTimeout(() => {
                    pe -= 1;
                  }),
                  Et((n) => {
                    n.addEventProcessor(
                      (t) => (
                        e.mechanism &&
                          ($(t, void 0, void 0), H(t, e.mechanism)),
                        (t.extra = { ...t.extra, arguments: r }),
                        t
                      )
                    ),
                      dt(t);
                  }),
                  t)
                );
              }
            };
            try {
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
            } catch (t) {}
            x(i, t), w(t, "__sentry_wrapped__", i);
            try {
              Object.getOwnPropertyDescriptor(i, "name").configurable &&
                Object.defineProperty(i, "name", { get: () => t.name });
            } catch (t) {}
            return i;
          }
          class _e {
            static __initStatic() {
              this.id = "GlobalHandlers";
            }
            __init() {
              this.name = _e.id;
            }
            __init2() {
              this._installFunc = { onerror: ve, onunhandledrejection: me };
            }
            constructor(t) {
              _e.prototype.__init.call(this),
                _e.prototype.__init2.call(this),
                (this._options = {
                  onerror: !0,
                  onunhandledrejection: !0,
                  ...t,
                });
            }
            setupOnce() {
              Error.stackTraceLimit = 50;
              var t = this._options;
              for (var e in t) {
                var n = this._installFunc[e];
                n && t[e] && (n(), (this._installFunc[e] = void 0));
              }
            }
          }
          function ve() {
            Ht("error", (t) => {
              const [e, n, r] = be();
              if (!e.getIntegration(_e)) return;
              const { msg: i, url: s, line: o, column: a, error: c } = t;
              if (!(he() || (c && c.__sentry_own_request__))) {
                var l =
                  void 0 === c && d(i)
                    ? (function (t, e, n, r) {
                        let i = u(t) ? t.message : t,
                          s = "Error";
                        var o = i.match(
                          /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                        );
                        return (
                          o && ((s = o[1]), (i = o[2])),
                          ge(
                            { exception: { values: [{ type: s, value: i }] } },
                            e,
                            n,
                            r
                          )
                        );
                      })(i, s, o, a)
                    : ge(le(n, c || i, void 0, r, !1), s, o, a);
                (l.level = "error"), ye(e, c, l, "onerror");
              }
            });
          }
          function me() {
            Ht("unhandledrejection", (t) => {
              const [e, n, r] = be();
              if (!e.getIntegration(_e)) return;
              let i = t;
              try {
                "reason" in t
                  ? (i = t.reason)
                  : "detail" in t &&
                    "reason" in t.detail &&
                    (i = t.detail.reason);
              } catch (t) {}
              if (he() || (i && i.__sentry_own_request__)) return !0;
              var s = p(i)
                ? {
                    exception: {
                      values: [
                        {
                          type: "UnhandledRejection",
                          value: `Non-Error promise rejection captured with value: ${String(
                            i
                          )}`,
                        },
                      ],
                    },
                  }
                : le(n, i, void 0, r, !0);
              (s.level = "error"), ye(e, i, s, "onunhandledrejection");
            });
          }
          function ge(t, e, n, r) {
            var i = (t.exception = t.exception || {}),
              o = (i.values = i.values || []),
              a = (o[0] = o[0] || {}),
              c = (a.stacktrace = a.stacktrace || {}),
              u = (c.frames = c.frames || []),
              l = isNaN(parseInt(r, 10)) ? void 0 : r,
              p = isNaN(parseInt(n, 10)) ? void 0 : n,
              h =
                d(e) && e.length > 0
                  ? e
                  : (function () {
                      var t = (0, s.R)();
                      try {
                        return t.document.location.href;
                      } catch (t) {
                        return "";
                      }
                    })();
            return (
              0 === u.length &&
                u.push({
                  colno: l,
                  filename: h,
                  function: "?",
                  in_app: !0,
                  lineno: p,
                }),
              t
            );
          }
          function ye(t, e, n, r) {
            H(n, { handled: !1, type: r }),
              t.captureEvent(n, { originalException: e });
          }
          function be() {
            var t = ot(),
              e = t.getClient(),
              n = (e && e.getOptions()) || {
                stackParser: () => [],
                attachStacktrace: !1,
              };
            return [t, n.stackParser, n.attachStacktrace];
          }
          _e.__initStatic();
          var Se = [
            "EventTarget",
            "Window",
            "Node",
            "ApplicationCache",
            "AudioTrackList",
            "ChannelMergerNode",
            "CryptoOperation",
            "EventSource",
            "FileReader",
            "HTMLUnknownElement",
            "IDBDatabase",
            "IDBRequest",
            "IDBTransaction",
            "KeyOperation",
            "MediaController",
            "MessagePort",
            "ModalWindow",
            "Notification",
            "SVGElementInstance",
            "Screen",
            "TextTrack",
            "TextTrackCue",
            "TextTrackList",
            "WebSocket",
            "WebSocketWorker",
            "Worker",
            "XMLHttpRequest",
            "XMLHttpRequestEventTarget",
            "XMLHttpRequestUpload",
          ];
          class Ee {
            static __initStatic() {
              this.id = "TryCatch";
            }
            __init() {
              this.name = Ee.id;
            }
            constructor(t) {
              Ee.prototype.__init.call(this),
                (this._options = {
                  XMLHttpRequest: !0,
                  eventTarget: !0,
                  requestAnimationFrame: !0,
                  setInterval: !0,
                  setTimeout: !0,
                  ...t,
                });
            }
            setupOnce() {
              var t = (0, s.R)();
              this._options.setTimeout && E(t, "setTimeout", we),
                this._options.setInterval && E(t, "setInterval", we),
                this._options.requestAnimationFrame &&
                  E(t, "requestAnimationFrame", xe),
                this._options.XMLHttpRequest &&
                  "XMLHttpRequest" in t &&
                  E(XMLHttpRequest.prototype, "send", Te);
              var e = this._options.eventTarget;
              e && (Array.isArray(e) ? e : Se).forEach(Oe);
            }
          }
          function we(t) {
            return function (...e) {
              var n = e[0];
              return (
                (e[0] = fe(n, {
                  mechanism: {
                    data: { function: ee(t) },
                    handled: !0,
                    type: "instrument",
                  },
                })),
                t.apply(this, e)
              );
            };
          }
          function xe(t) {
            return function (e) {
              return t.apply(this, [
                fe(e, {
                  mechanism: {
                    data: { function: "requestAnimationFrame", handler: ee(t) },
                    handled: !0,
                    type: "instrument",
                  },
                }),
              ]);
            };
          }
          function Te(t) {
            return function (...e) {
              var n = this;
              return (
                [
                  "onload",
                  "onerror",
                  "onprogress",
                  "onreadystatechange",
                ].forEach((t) => {
                  t in n &&
                    "function" == typeof n[t] &&
                    E(n, t, function (e) {
                      var n = {
                          mechanism: {
                            data: { function: t, handler: ee(e) },
                            handled: !0,
                            type: "instrument",
                          },
                        },
                        r = T(e);
                      return r && (n.mechanism.data.handler = ee(r)), fe(e, n);
                    });
                }),
                t.apply(this, e)
              );
            };
          }
          function Oe(t) {
            var e = (0, s.R)(),
              n = e[t] && e[t].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              (E(n, "addEventListener", function (e) {
                return function (n, r, i) {
                  try {
                    "function" == typeof r.handleEvent &&
                      (r.handleEvent = fe(r.handleEvent, {
                        mechanism: {
                          data: {
                            function: "handleEvent",
                            handler: ee(r),
                            target: t,
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      }));
                  } catch (t) {}
                  return e.apply(this, [
                    n,
                    fe(r, {
                      mechanism: {
                        data: {
                          function: "addEventListener",
                          handler: ee(r),
                          target: t,
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    }),
                    i,
                  ]);
                };
              }),
              E(n, "removeEventListener", function (t) {
                return function (e, n, r) {
                  var i = n;
                  try {
                    var s = i && i.__sentry_wrapped__;
                    s && t.call(this, e, s, r);
                  } catch (t) {}
                  return t.call(this, e, i, r);
                };
              }));
          }
          Ee.__initStatic();
          var Ae = ["fatal", "error", "warning", "log", "info", "debug"];
          function Ie(t) {
            if (!t) return {};
            var e = t.match(
              /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
            );
            if (!e) return {};
            var n = e[6] || "",
              r = e[8] || "";
            return {
              host: e[4],
              path: e[5],
              protocol: e[2],
              relative: e[5] + n + r,
            };
          }
          var Re = "Breadcrumbs";
          class ke {
            static __initStatic() {
              this.id = Re;
            }
            __init() {
              this.name = ke.id;
            }
            constructor(t) {
              ke.prototype.__init.call(this),
                (this.options = {
                  console: !0,
                  dom: !0,
                  fetch: !0,
                  history: !0,
                  sentry: !0,
                  xhr: !0,
                  ...t,
                });
            }
            setupOnce() {
              var t;
              this.options.console && Ht("console", Ce),
                this.options.dom &&
                  Ht(
                    "dom",
                    ((t = this.options.dom),
                    function (e) {
                      let n,
                        r =
                          "object" == typeof t ? t.serializeAttribute : void 0;
                      "string" == typeof r && (r = [r]);
                      try {
                        n = e.event.target
                          ? m(e.event.target, r)
                          : m(e.event, r);
                      } catch (t) {
                        n = "<unknown>";
                      }
                      0 !== n.length &&
                        ot().addBreadcrumb(
                          { category: `ui.${e.name}`, message: n },
                          { event: e.event, name: e.name, global: e.global }
                        );
                    })
                  ),
                this.options.xhr && Ht("xhr", Pe),
                this.options.fetch && Ht("fetch", Ne),
                this.options.history && Ht("history", De);
            }
          }
          function Ce(t) {
            var e,
              n = {
                category: "console",
                data: { arguments: t.args, logger: "console" },
                level:
                  ((e = t.level),
                  "warn" === e ? "warning" : Ae.includes(e) ? e : "log"),
                message: b(t.args, " "),
              };
            if ("assert" === t.level) {
              if (!1 !== t.args[0]) return;
              (n.message = `Assertion failed: ${
                b(t.args.slice(1), " ") || "console.assert"
              }`),
                (n.data.arguments = t.args.slice(1));
            }
            ot().addBreadcrumb(n, { input: t.args, level: t.level });
          }
          function Pe(t) {
            if (t.endTimestamp) {
              if (t.xhr.__sentry_own_request__) return;
              const {
                method: e,
                url: n,
                status_code: r,
                body: i,
              } = t.xhr.__sentry_xhr__ || {};
              ot().addBreadcrumb(
                {
                  category: "xhr",
                  data: { method: e, url: n, status_code: r },
                  type: "http",
                },
                { xhr: t.xhr, input: i }
              );
            }
          }
          function Ne(t) {
            t.endTimestamp &&
              ((t.fetchData.url.match(/sentry_key/) &&
                "POST" === t.fetchData.method) ||
                (t.error
                  ? ot().addBreadcrumb(
                      {
                        category: "fetch",
                        data: t.fetchData,
                        level: "error",
                        type: "http",
                      },
                      { data: t.error, input: t.args }
                    )
                  : ot().addBreadcrumb(
                      {
                        category: "fetch",
                        data: {
                          ...t.fetchData,
                          status_code: t.response.status,
                        },
                        type: "http",
                      },
                      { input: t.args, response: t.response }
                    )));
          }
          function De(t) {
            var e = (0, s.R)();
            let n = t.from,
              r = t.to;
            var i = Ie(e.location.href);
            let o = Ie(n);
            var a = Ie(r);
            o.path || (o = i),
              i.protocol === a.protocol &&
                i.host === a.host &&
                (r = a.relative),
              i.protocol === o.protocol &&
                i.host === o.host &&
                (n = o.relative),
              ot().addBreadcrumb({
                category: "navigation",
                data: { from: n, to: r },
              });
          }
          ke.__initStatic();
          class Me {
            static __initStatic() {
              this.id = "LinkedErrors";
            }
            __init() {
              this.name = Me.id;
            }
            constructor(t = {}) {
              Me.prototype.__init.call(this),
                (this._key = t.key || "cause"),
                (this._limit = t.limit || 5);
            }
            setupOnce() {
              var t = ot().getClient();
              t &&
                tt((e, n) => {
                  var r = ot().getIntegration(Me);
                  return r
                    ? (function (t, e, n, r, i) {
                        if (
                          !(
                            r.exception &&
                            r.exception.values &&
                            i &&
                            v(i.originalException, Error)
                          )
                        )
                          return r;
                        var s = je(t, n, i.originalException, e);
                        return (
                          (r.exception.values = [...s, ...r.exception.values]),
                          r
                        );
                      })(t.getOptions().stackParser, r._key, r._limit, e, n)
                    : e;
                });
            }
          }
          function je(t, e, n, r, i = []) {
            if (!v(n[r], Error) || i.length + 1 >= e) return i;
            var s = se(t, n[r]);
            return je(t, e, n[r], r, [s, ...i]);
          }
          Me.__initStatic();
          var Le = (0, s.R)();
          class qe {
            constructor() {
              qe.prototype.__init.call(this);
            }
            static __initStatic() {
              this.id = "HttpContext";
            }
            __init() {
              this.name = qe.id;
            }
            setupOnce() {
              tt((t) => {
                if (ot().getIntegration(qe)) {
                  if (!Le.navigator && !Le.location && !Le.document) return t;
                  var e =
                    (t.request && t.request.url) ||
                    (Le.location && Le.location.href);
                  const { referrer: r } = Le.document || {},
                    { userAgent: i } = Le.navigator || {};
                  var n = {
                    ...(e && { url: e }),
                    headers: {
                      ...(t.request && t.request.headers),
                      ...(r && { Referer: r }),
                      ...(i && { "User-Agent": i }),
                    },
                  };
                  return { ...t, request: n };
                }
                return t;
              });
            }
          }
          qe.__initStatic();
          class Ue {
            constructor() {
              Ue.prototype.__init.call(this);
            }
            static __initStatic() {
              this.id = "Dedupe";
            }
            __init() {
              this.name = Ue.id;
            }
            setupOnce(t, e) {
              var n = (t) => {
                var n = e().getIntegration(Ue);
                if (n) {
                  try {
                    if (
                      (function (t, e) {
                        return (
                          !!e &&
                          (!!(function (t, e) {
                            var n = t.message,
                              r = e.message;
                            return (
                              !(!n && !r) &&
                              !((n && !r) || (!n && r)) &&
                              n === r &&
                              !!He(t, e) &&
                              !!$e(t, e)
                            );
                          })(t, e) ||
                            !!(function (t, e) {
                              var n = Be(e),
                                r = Be(t);
                              return (
                                !(!n || !r) &&
                                n.type === r.type &&
                                n.value === r.value &&
                                !!He(t, e) &&
                                !!$e(t, e)
                              );
                            })(t, e))
                        );
                      })(t, n._previousEvent)
                    )
                      return null;
                  } catch (e) {
                    return (n._previousEvent = t);
                  }
                  return (n._previousEvent = t);
                }
                return t;
              };
              (n.id = this.name), t(n);
            }
          }
          function $e(t, e) {
            let n = Fe(t),
              r = Fe(e);
            if (!n && !r) return !0;
            if ((n && !r) || (!n && r)) return !1;
            if (r.length !== n.length) return !1;
            for (let t = 0; t < r.length; t++) {
              var i = r[t],
                s = n[t];
              if (
                i.filename !== s.filename ||
                i.lineno !== s.lineno ||
                i.colno !== s.colno ||
                i.function !== s.function
              )
                return !1;
            }
            return !0;
          }
          function He(t, e) {
            let n = t.fingerprint,
              r = e.fingerprint;
            if (!n && !r) return !0;
            if ((n && !r) || (!n && r)) return !1;
            try {
              return !(n.join("") !== r.join(""));
            } catch (t) {
              return !1;
            }
          }
          function Be(t) {
            return t.exception && t.exception.values && t.exception.values[0];
          }
          function Fe(t) {
            var e = t.exception;
            if (e)
              try {
                return e.values[0].stacktrace.frames;
              } catch (t) {
                return;
              }
          }
          Ue.__initStatic();
          var Ge =
            /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
          function Ve(t, e = !1) {
            const {
              host: n,
              path: r,
              pass: i,
              port: s,
              projectId: o,
              protocol: a,
              publicKey: c,
            } = t;
            return `${a}://${c}${e && i ? `:${i}` : ""}@${n}${
              s ? `:${s}` : ""
            }/${r ? `${r}/` : r}${o}`;
          }
          function Ye(t) {
            return {
              protocol: t.protocol,
              publicKey: t.publicKey || "",
              pass: t.pass || "",
              host: t.host,
              port: t.port || "",
              path: t.path || "",
              projectId: t.projectId,
            };
          }
          function We(t) {
            return "string" == typeof t
              ? (function (t) {
                  var e = Ge.exec(t);
                  if (!e) throw new xt(`Invalid Sentry Dsn: ${t}`);
                  const [n, r, i = "", s, o = "", a] = e.slice(1);
                  let c = "",
                    u = a;
                  var l = u.split("/");
                  if (
                    (l.length > 1 &&
                      ((c = l.slice(0, -1).join("/")), (u = l.pop())),
                    u)
                  ) {
                    var d = u.match(/^\d+/);
                    d && (u = d[0]);
                  }
                  return Ye({
                    host: s,
                    pass: i,
                    path: c,
                    projectId: u,
                    port: o,
                    protocol: n,
                    publicKey: r,
                  });
                })(t)
              : Ye(t);
          }
          var ze = "7";
          function Je(t) {
            var e = t.protocol ? `${t.protocol}:` : "",
              n = t.port ? `:${t.port}` : "";
            return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
          }
          function Ke(t, e = {}) {
            var n = "string" == typeof e ? e : e.tunnel,
              r =
                "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
            return (
              n ||
              `${(function (t) {
                return `${Je(t)}${t.projectId}/envelope/`;
              })(t)}?${(function (t, e) {
                return (
                  (n = {
                    sentry_key: t.publicKey,
                    sentry_version: ze,
                    ...(e && { sentry_client: `${e.name}/${e.version}` }),
                  }),
                  Object.keys(n)
                    .map(
                      (t) =>
                        `${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`
                    )
                    .join("&")
                );
                var n;
              })(t, r)}`
            );
          }
          function Xe(t) {
            if (!t || !t.sdk) return;
            const { name: e, version: n } = t.sdk;
            return { name: e, version: n };
          }
          var Ze = [];
          function Qe(t) {
            return t.reduce(
              (t, e) => (t.every((t) => e.name !== t.name) && t.push(e), t),
              []
            );
          }
          function tn(t) {
            var e = (t.defaultIntegrations && [...t.defaultIntegrations]) || [],
              n = t.integrations;
            let r = [...Qe(e)];
            Array.isArray(n)
              ? (r = [
                  ...r.filter((t) => n.every((e) => e.name !== t.name)),
                  ...Qe(n),
                ])
              : "function" == typeof n &&
                ((r = n(r)), (r = Array.isArray(r) ? r : [r]));
            var i = r.map((t) => t.name),
              s = "Debug";
            return (
              -1 !== i.indexOf(s) && r.push(...r.splice(i.indexOf(s), 1)), r
            );
          }
          class en {
            __init() {
              this._integrations = {};
            }
            __init2() {
              this._integrationsInitialized = !1;
            }
            __init3() {
              this._numProcessing = 0;
            }
            __init4() {
              this._outcomes = {};
            }
            constructor(t) {
              if (
                (en.prototype.__init.call(this),
                en.prototype.__init2.call(this),
                en.prototype.__init3.call(this),
                en.prototype.__init4.call(this),
                (this._options = t),
                t.dsn)
              ) {
                this._dsn = We(t.dsn);
                var e = Ke(this._dsn, t);
                this._transport = t.transport({
                  recordDroppedEvent: this.recordDroppedEvent.bind(this),
                  ...t.transportOptions,
                  url: e,
                });
              }
            }
            captureException(t, e, n) {
              if (B(t)) return;
              let r = e && e.event_id;
              return (
                this._process(
                  this.eventFromException(t, e)
                    .then((t) => this._captureEvent(t, e, n))
                    .then((t) => {
                      r = t;
                    })
                ),
                r
              );
            }
            captureMessage(t, e, n, r) {
              let i = n && n.event_id;
              var s = p(t)
                ? this.eventFromMessage(String(t), e, n)
                : this.eventFromException(t, n);
              return (
                this._process(
                  s
                    .then((t) => this._captureEvent(t, n, r))
                    .then((t) => {
                      i = t;
                    })
                ),
                i
              );
            }
            captureEvent(t, e, n) {
              if (e && e.originalException && B(e.originalException)) return;
              let r = e && e.event_id;
              return (
                this._process(
                  this._captureEvent(t, e, n).then((t) => {
                    r = t;
                  })
                ),
                r
              );
            }
            captureSession(t) {
              this._isEnabled() &&
                ("string" != typeof t.release ||
                  (this.sendSession(t), X(t, { init: !1 })));
            }
            getDsn() {
              return this._dsn;
            }
            getOptions() {
              return this._options;
            }
            getTransport() {
              return this._transport;
            }
            flush(t) {
              var e = this._transport;
              return e
                ? this._isClientDoneProcessing(t).then((n) =>
                    e.flush(t).then((t) => n && t)
                  )
                : z(!0);
            }
            close(t) {
              return this.flush(t).then(
                (t) => ((this.getOptions().enabled = !1), t)
              );
            }
            setupIntegrations() {
              var t, e;
              this._isEnabled() &&
                !this._integrationsInitialized &&
                ((this._integrations =
                  ((t = this._options.integrations),
                  (e = {}),
                  t.forEach((t) => {
                    (e[t.name] = t),
                      -1 === Ze.indexOf(t.name) &&
                        (t.setupOnce(tt, ot), Ze.push(t.name));
                  }),
                  e)),
                (this._integrationsInitialized = !0));
            }
            getIntegrationById(t) {
              return this._integrations[t];
            }
            getIntegration(t) {
              try {
                return this._integrations[t.id] || null;
              } catch (t) {
                return null;
              }
            }
            sendEvent(t, e = {}) {
              if (this._dsn) {
                let r = (function (t, e, n, r) {
                  var i = Xe(n),
                    s = t.type || "event";
                  const { transactionSampling: o } =
                      t.sdkProcessingMetadata || {},
                    { method: a, rate: c } = o || {};
                  !(function (t, e) {
                    e &&
                      ((t.sdk = t.sdk || {}),
                      (t.sdk.name = t.sdk.name || e.name),
                      (t.sdk.version = t.sdk.version || e.version),
                      (t.sdk.integrations = [
                        ...(t.sdk.integrations || []),
                        ...(e.integrations || []),
                      ]),
                      (t.sdk.packages = [
                        ...(t.sdk.packages || []),
                        ...(e.packages || []),
                      ]));
                  })(t, n && n.sdk);
                  var u = (function (t, e, n, r) {
                    var i =
                        t.sdkProcessingMetadata &&
                        t.sdkProcessingMetadata.baggage,
                      s =
                        i &&
                        (function (t) {
                          return t[0];
                        })(i);
                    return {
                      event_id: t.event_id,
                      sent_at: new Date().toISOString(),
                      ...(e && { sdk: e }),
                      ...(!!n && { dsn: Ve(r) }),
                      ...("transaction" === t.type &&
                        s && { trace: k({ ...s }) }),
                    };
                  })(t, i, r, e);
                  return (
                    delete t.sdkProcessingMetadata,
                    Tt(u, [
                      [{ type: s, sample_rates: [{ id: a, rate: c }] }, t],
                    ])
                  );
                })(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (var n of e.attachments || [])
                  r = Ot(
                    r,
                    kt(
                      n,
                      this._options.transportOptions &&
                        this._options.transportOptions.textEncoder
                    )
                  );
                this._sendEnvelope(r);
              }
            }
            sendSession(t) {
              if (this._dsn) {
                var e = (function (t, e, n, r) {
                  var i = Xe(n);
                  return Tt(
                    {
                      sent_at: new Date().toISOString(),
                      ...(i && { sdk: i }),
                      ...(!!r && { dsn: Ve(e) }),
                    },
                    [
                      "aggregates" in t
                        ? [{ type: "sessions" }, t]
                        : [{ type: "session" }, t],
                    ]
                  );
                })(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e);
              }
            }
            recordDroppedEvent(t, e) {
              if (this._options.sendClientReports) {
                var n = `${t}:${e}`;
                this._outcomes[n] = this._outcomes[n] + 1 || 1;
              }
            }
            _updateSessionFromEvent(t, e) {
              let n = !1,
                r = !1;
              var i = e.exception && e.exception.values;
              if (i)
                for (var s of ((r = !0), i)) {
                  var o = s.mechanism;
                  if (o && !1 === o.handled) {
                    n = !0;
                    break;
                  }
                }
              var a = "ok" === t.status;
              ((a && 0 === t.errors) || (a && n)) &&
                (X(t, {
                  ...(n && { status: "crashed" }),
                  errors: t.errors || Number(r || n),
                }),
                this.captureSession(t));
            }
            _isClientDoneProcessing(t) {
              return new K((e) => {
                let n = 0;
                var r = setInterval(() => {
                  0 == this._numProcessing
                    ? (clearInterval(r), e(!0))
                    : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
                }, 1);
              });
            }
            _isEnabled() {
              return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
            }
            _prepareEvent(t, e, n) {
              const { normalizeDepth: r = 3, normalizeMaxBreadth: i = 1e3 } =
                this.getOptions();
              var s = {
                ...t,
                event_id: t.event_id || e.event_id || L(),
                timestamp: t.timestamp || (0, F.yW)(),
              };
              this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
              let o = n;
              e.captureContext && (o = Z.clone(o).update(e.captureContext));
              let a = z(s);
              if (o) {
                var c = [...(e.attachments || []), ...o.getAttachments()];
                c.length && (e.attachments = c), (a = o.applyToEvent(s, e));
              }
              return a.then((t) =>
                "number" == typeof r && r > 0
                  ? this._normalizeEvent(t, r, i)
                  : t
              );
            }
            _normalizeEvent(t, e, n) {
              if (!t) return null;
              var r = {
                ...t,
                ...(t.breadcrumbs && {
                  breadcrumbs: t.breadcrumbs.map((t) => ({
                    ...t,
                    ...(t.data && { data: ne(t.data, e, n) }),
                  })),
                }),
                ...(t.user && { user: ne(t.user, e, n) }),
                ...(t.contexts && { contexts: ne(t.contexts, e, n) }),
                ...(t.extra && { extra: ne(t.extra, e, n) }),
              };
              return (
                t.contexts &&
                  t.contexts.trace &&
                  r.contexts &&
                  ((r.contexts.trace = t.contexts.trace),
                  t.contexts.trace.data &&
                    (r.contexts.trace.data = ne(t.contexts.trace.data, e, n))),
                t.spans &&
                  (r.spans = t.spans.map(
                    (t) => (t.data && (t.data = ne(t.data, e, n)), t)
                  )),
                r
              );
            }
            _applyClientOptions(t) {
              var e = this.getOptions();
              const {
                environment: n,
                release: r,
                dist: i,
                maxValueLength: s = 250,
              } = e;
              "environment" in t ||
                (t.environment = "environment" in e ? n : "production"),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== i && (t.dist = i),
                t.message && (t.message = y(t.message, s));
              var o =
                t.exception && t.exception.values && t.exception.values[0];
              o && o.value && (o.value = y(o.value, s));
              var a = t.request;
              a && a.url && (a.url = y(a.url, s));
            }
            _applyIntegrationsMetadata(t) {
              var e = Object.keys(this._integrations);
              e.length > 0 &&
                ((t.sdk = t.sdk || {}),
                (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
            }
            _captureEvent(t, e = {}, n) {
              return this._processEvent(t, e, n).then(
                (t) => t.event_id,
                (t) => {}
              );
            }
            _processEvent(t, e, n) {
              const { beforeSend: r, sampleRate: i } = this.getOptions();
              if (!this._isEnabled())
                return J(
                  new xt("SDK not enabled, will not capture event.", "log")
                );
              var s = "transaction" === t.type;
              return !s && "number" == typeof i && Math.random() > i
                ? (this.recordDroppedEvent("sample_rate", "error"),
                  J(
                    new xt(
                      `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                      "log"
                    )
                  ))
                : this._prepareEvent(t, e, n)
                    .then((n) => {
                      if (null === n)
                        throw (
                          (this.recordDroppedEvent(
                            "event_processor",
                            t.type || "error"
                          ),
                          new xt(
                            "An event processor returned null, will not send event.",
                            "log"
                          ))
                        );
                      return (e.data && !0 === e.data.__sentry__) || s || !r
                        ? n
                        : (function (t) {
                            var e =
                              "`beforeSend` method has to return `null` or a valid event.";
                            if (_(t))
                              return t.then(
                                (t) => {
                                  if (!h(t) && null !== t) throw new xt(e);
                                  return t;
                                },
                                (t) => {
                                  throw new xt(`beforeSend rejected with ${t}`);
                                }
                              );
                            if (!h(t) && null !== t) throw new xt(e);
                            return t;
                          })(r(n, e));
                    })
                    .then((r) => {
                      if (null === r)
                        throw (
                          (this.recordDroppedEvent(
                            "before_send",
                            t.type || "error"
                          ),
                          new xt(
                            "`beforeSend` returned `null`, will not send event.",
                            "log"
                          ))
                        );
                      var i = n && n.getSession();
                      return (
                        !s && i && this._updateSessionFromEvent(i, r),
                        this.sendEvent(r, e),
                        r
                      );
                    })
                    .then(null, (t) => {
                      if (t instanceof xt) throw t;
                      throw (
                        (this.captureException(t, {
                          data: { __sentry__: !0 },
                          originalException: t,
                        }),
                        new xt(
                          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`
                        ))
                      );
                    });
            }
            _process(t) {
              (this._numProcessing += 1),
                t.then(
                  (t) => ((this._numProcessing -= 1), t),
                  (t) => ((this._numProcessing -= 1), t)
                );
            }
            _sendEnvelope(t) {
              this._transport &&
                this._dsn &&
                this._transport.send(t).then(null, (t) => {});
            }
            _clearOutcomes() {
              var t = this._outcomes;
              return (
                (this._outcomes = {}),
                Object.keys(t).map((e) => {
                  const [n, r] = e.split(":");
                  return { reason: n, category: r, quantity: t[e] };
                })
              );
            }
          }
          var nn = (0, s.R)();
          let rn;
          function sn() {
            if (rn) return rn;
            if (Lt(nn.fetch)) return (rn = nn.fetch.bind(nn));
            var t = nn.document;
            let e = nn.fetch;
            if (t && "function" == typeof t.createElement)
              try {
                var n = t.createElement("iframe");
                (n.hidden = !0), t.head.appendChild(n);
                var r = n.contentWindow;
                r && r.fetch && (e = r.fetch), t.head.removeChild(n);
              } catch (t) {}
            return (rn = e.bind(nn));
          }
          var on = (0, s.R)();
          class an extends en {
            constructor(t) {
              (t._metadata = t._metadata || {}),
                (t._metadata.sdk = t._metadata.sdk || {
                  name: "sentry.javascript.browser",
                  packages: [{ name: "npm:@sentry/browser", version: lt }],
                  version: lt,
                }),
                super(t),
                t.sendClientReports &&
                  on.document &&
                  on.document.addEventListener("visibilitychange", () => {
                    "hidden" === on.document.visibilityState &&
                      this._flushOutcomes();
                  });
            }
            eventFromException(t, e) {
              return (function (t, e, n, r) {
                var i = le(t, e, (n && n.syntheticException) || void 0, r);
                return (
                  H(i),
                  (i.level = "error"),
                  n && n.event_id && (i.event_id = n.event_id),
                  z(i)
                );
              })(
                this._options.stackParser,
                t,
                e,
                this._options.attachStacktrace
              );
            }
            eventFromMessage(t, e = "info", n) {
              return (function (t, e, n = "info", r, i) {
                var s = de(t, e, (r && r.syntheticException) || void 0, i);
                return (
                  (s.level = n),
                  r && r.event_id && (s.event_id = r.event_id),
                  z(s)
                );
              })(
                this._options.stackParser,
                t,
                e,
                n,
                this._options.attachStacktrace
              );
            }
            sendEvent(t, e) {
              var n = this.getIntegrationById(Re);
              n &&
                n.options &&
                n.options.sentry &&
                ot().addBreadcrumb(
                  {
                    category:
                      "sentry." +
                      ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: U(t),
                  },
                  { event: t }
                ),
                super.sendEvent(t, e);
            }
            _prepareEvent(t, e, n) {
              return (
                (t.platform = t.platform || "javascript"),
                super._prepareEvent(t, e, n)
              );
            }
            _flushOutcomes() {
              var t = this._clearOutcomes();
              if (0 !== t.length && this._dsn) {
                var e,
                  n,
                  r = Ke(this._dsn, this._options),
                  i =
                    ((e = t),
                    Tt(
                      (n = this._options.tunnel && Ve(this._dsn))
                        ? { dsn: n }
                        : {},
                      [
                        [
                          { type: "client_report" },
                          { timestamp: (0, F.yW)(), discarded_events: e },
                        ],
                      ]
                    ));
                try {
                  !(function (t, e) {
                    "[object Navigator]" ===
                      Object.prototype.toString.call(nn && nn.navigator) &&
                    "function" == typeof nn.navigator.sendBeacon
                      ? nn.navigator.sendBeacon.bind(nn.navigator)(t, e)
                      : jt() &&
                        sn()(t, {
                          body: e,
                          method: "POST",
                          credentials: "omit",
                          keepalive: !0,
                        }).then(null, (t) => {});
                  })(r, Rt(i));
                } catch (t) {}
              }
            }
          }
          function cn(t, e = sn()) {
            return Mt(t, function (n) {
              var r = {
                body: n.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                ...t.fetchOptions,
              };
              return e(t.url, r).then((t) => ({
                statusCode: t.status,
                headers: {
                  "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                  "retry-after": t.headers.get("Retry-After"),
                },
              }));
            });
          }
          var un = 4;
          function ln(t) {
            return Mt(t, function (e) {
              return new K((n, r) => {
                var i = new XMLHttpRequest();
                for (var s in ((i.onerror = r),
                (i.onreadystatechange = () => {
                  i.readyState === un &&
                    n({
                      statusCode: i.status,
                      headers: {
                        "x-sentry-rate-limits": i.getResponseHeader(
                          "X-Sentry-Rate-Limits"
                        ),
                        "retry-after": i.getResponseHeader("Retry-After"),
                      },
                    });
                }),
                i.open("POST", t.url),
                t.headers))
                  Object.prototype.hasOwnProperty.call(t.headers, s) &&
                    i.setRequestHeader(s, t.headers[s]);
                i.send(e.body);
              });
            });
          }
          var dn = "?";
          function pn(t, e, n, r) {
            var i = { filename: t, function: e, in_app: !0 };
            return (
              void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
            );
          }
          var hn =
              /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            fn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            _n = [
              30,
              (t) => {
                var e = hn.exec(t);
                if (e) {
                  if (e[2] && 0 === e[2].indexOf("eval")) {
                    var n = fn.exec(e[2]);
                    n && ((e[2] = n[1]), (e[3] = n[2]), (e[4] = n[3]));
                  }
                  const [t, r] = An(e[1] || dn, e[2]);
                  return pn(r, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
                }
              },
            ],
            vn =
              /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            mn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            gn = [
              50,
              (t) => {
                var e = vn.exec(t);
                if (e) {
                  if (e[3] && e[3].indexOf(" > eval") > -1) {
                    var n = mn.exec(e[3]);
                    n &&
                      ((e[1] = e[1] || "eval"),
                      (e[3] = n[1]),
                      (e[4] = n[2]),
                      (e[5] = ""));
                  }
                  let t = e[3],
                    r = e[1] || dn;
                  return (
                    ([r, t] = An(r, t)),
                    pn(t, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                  );
                }
              },
            ],
            yn =
              /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            bn = [
              40,
              (t) => {
                var e = yn.exec(t);
                return e
                  ? pn(e[2], e[1] || dn, +e[3], e[4] ? +e[4] : void 0)
                  : void 0;
              },
            ],
            Sn = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
            En = [
              10,
              (t) => {
                var e = Sn.exec(t);
                return e ? pn(e[2], e[3] || dn, +e[1]) : void 0;
              },
            ],
            wn =
              / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
            xn = [
              20,
              (t) => {
                var e = wn.exec(t);
                return e ? pn(e[5], e[3] || e[4] || dn, +e[1], +e[2]) : void 0;
              },
            ],
            Tn = [_n, gn, bn],
            On = Qt(...Tn),
            An = (t, e) => {
              var n = -1 !== t.indexOf("safari-extension"),
                r = -1 !== t.indexOf("safari-web-extension");
              return n || r
                ? [
                    -1 !== t.indexOf("@") ? t.split("@")[0] : dn,
                    n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
                  ]
                : [t, e];
            },
            In = [
              new M(),
              new N(),
              new Ee(),
              new ke(),
              new _e(),
              new Me(),
              new Ue(),
              new qe(),
            ];
          function Rn(t = {}) {
            if (
              (void 0 === t.defaultIntegrations && (t.defaultIntegrations = In),
              void 0 === t.release)
            ) {
              var e = (0, s.R)();
              e.SENTRY_RELEASE &&
                e.SENTRY_RELEASE.id &&
                (t.release = e.SENTRY_RELEASE.id);
            }
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
              void 0 === t.sendClientReports && (t.sendClientReports = !0);
            var n,
              r = {
                ...t,
                stackParser:
                  ((n = t.stackParser || On), Array.isArray(n) ? Qt(...n) : n),
                integrations: tn(t),
                transport: t.transport || (jt() ? cn : ln),
              };
            !(function (t, e) {
              !0 === e.debug &&
                console.warn(
                  "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
                );
              var n = ot(),
                r = n.getScope();
              r && r.update(e.initialScope);
              var i = new t(e);
              n.bindClient(i);
            })(an, r),
              t.autoSessionTracking &&
                (function () {
                  if (void 0 !== (0, s.R)().document) {
                    var t = ot();
                    t.captureSession &&
                      (Ln(t),
                      Ht("history", ({ from: t, to: e }) => {
                        void 0 !== t && t !== e && Ln(ot());
                      }));
                  }
                })();
          }
          function kn(t = {}, e = ot()) {
            var n = (0, s.R)();
            if (!n.document) return;
            const { client: r, scope: i } = e.getStackTop();
            var o = t.dsn || (r && r.getDsn());
            if (o) {
              i && (t.user = { ...i.getUser(), ...t.user }),
                t.eventId || (t.eventId = e.lastEventId());
              var a = n.document.createElement("script");
              (a.async = !0),
                (a.src = (function (t, e) {
                  var n = We(t),
                    r = `${Je(n)}embed/error-page/`;
                  let i = `dsn=${Ve(n)}`;
                  for (var s in e)
                    if ("dsn" !== s)
                      if ("user" === s) {
                        var o = e.user;
                        if (!o) continue;
                        o.name && (i += `&name=${encodeURIComponent(o.name)}`),
                          o.email &&
                            (i += `&email=${encodeURIComponent(o.email)}`);
                      } else
                        i += `&${encodeURIComponent(s)}=${encodeURIComponent(
                          e[s]
                        )}`;
                  return `${r}?${i}`;
                })(o, t)),
                t.onLoad && (a.onload = t.onLoad);
              var c = n.document.head || n.document.body;
              c && c.appendChild(a);
            }
          }
          function Cn() {
            return ot().lastEventId();
          }
          function Pn() {}
          function Nn(t) {
            t();
          }
          function Dn(t) {
            var e = ot().getClient();
            return e ? e.flush(t) : z(!1);
          }
          function Mn(t) {
            var e = ot().getClient();
            return e ? e.close(t) : z(!1);
          }
          function jn(t) {
            return fe(t)();
          }
          function Ln(t) {
            t.startSession({ ignoreDuration: !0 }), t.captureSession();
          }
          let qn = {};
          var Un = (0, s.R)();
          Un.Sentry && Un.Sentry.Integrations && (qn = Un.Sentry.Integrations);
          var $n = { ...qn, ...r, ...i };
        },
        3525: (t, e, n) => {
          n.r(e),
            n.d(e, {
              BROWSER_TRACING_INTEGRATION_ID: () => xt,
              BrowserTracing: () => mt,
              IdleTransaction: () => Rt,
              Integrations: () => Nt,
              Span: () => wt,
              SpanStatus: () => Pt,
              TRACEPARENT_REGEXP: () => It,
              Transaction: () => Et,
              addExtensionMethods: () => gt,
              defaultRequestInstrumentationOptions: () => Tt,
              extractTraceparentData: () => bt,
              getActiveTransaction: () => yt,
              hasTracingEnabled: () => Ot,
              instrumentOutgoingRequests: () => kt,
              spanStatusfromHttpCode: () => St,
              startIdleTransaction: () => Ct,
              stripUrlQueryAndFragment: () => At,
            });
          var r = n(2526),
            i = n(4038),
            s = n(1585),
            o = n(2001),
            a = n(3793),
            c = n(8380);
          const u = (0, c.Rf)(),
            l = 80;
          function d(t, e = {}) {
            try {
              let n = t;
              const r = 5,
                i = [];
              let s = 0,
                o = 0;
              const a = " > ",
                c = a.length;
              let u;
              const d = Array.isArray(e) ? e : e.keyAttrs,
                h = (!Array.isArray(e) && e.maxStringLength) || l;
              for (
                ;
                n &&
                s++ < r &&
                ((u = p(n, d)),
                !("html" === u || (s > 1 && o + i.length * c + u.length >= h)));

              )
                i.push(u), (o += u.length), (n = n.parentNode);
              return i.reverse().join(a);
            } catch (t) {
              return "<unknown>";
            }
          }
          function p(t, e) {
            const n = t,
              r = [];
            let i, s, o, c, u;
            if (!n || !n.tagName) return "";
            r.push(n.tagName.toLowerCase());
            const l =
              e && e.length
                ? e
                    .filter((t) => n.getAttribute(t))
                    .map((t) => [t, n.getAttribute(t)])
                : null;
            if (l && l.length)
              l.forEach((t) => {
                r.push(`[${t[0]}="${t[1]}"]`);
              });
            else if (
              (n.id && r.push(`#${n.id}`), (i = n.className), i && (0, a.HD)(i))
            )
              for (s = i.split(/\s+/), u = 0; u < s.length; u++)
                r.push(`.${s[u]}`);
            const d = ["aria-label", "type", "name", "title", "alt"];
            for (u = 0; u < d.length; u++)
              (o = d[u]), (c = n.getAttribute(o)), c && r.push(`[${o}="${c}"]`);
            return r.join("");
          }
          const h = c.n2;
          var f = n(3809);
          const _ = (t, e, n) => {
              let r, i;
              return (s) => {
                e.value >= 0 &&
                  (s || n) &&
                  ((i = e.value - (r || 0)),
                  (i || void 0 === r) && ((r = e.value), (e.delta = i), t(e)));
              };
            },
            v = () =>
              h.__WEB_VITALS_POLYFILL__
                ? h.performance &&
                  ((performance.getEntriesByType &&
                    performance.getEntriesByType("navigation")[0]) ||
                    (() => {
                      const t = h.performance.timing,
                        e = h.performance.navigation.type,
                        n = {
                          entryType: "navigation",
                          startTime: 0,
                          type:
                            2 == e
                              ? "back_forward"
                              : 1 === e
                              ? "reload"
                              : "navigate",
                        };
                      for (const e in t)
                        "navigationStart" !== e &&
                          "toJSON" !== e &&
                          (n[e] = Math.max(t[e] - t.navigationStart, 0));
                      return n;
                    })())
                : h.performance &&
                  performance.getEntriesByType &&
                  performance.getEntriesByType("navigation")[0],
            m = () => {
              const t = v();
              return (t && t.activationStart) || 0;
            },
            g = (t, e) => {
              const n = v();
              let r = "navigate";
              return (
                n &&
                  (r =
                    h.document.prerendering || m() > 0
                      ? "prerender"
                      : n.type.replace(/_/g, "-")),
                {
                  name: t,
                  value: void 0 === e ? -1 : e,
                  rating: "good",
                  delta: 0,
                  entries: [],
                  id: `v3-${Date.now()}-${
                    Math.floor(8999999999999 * Math.random()) + 1e12
                  }`,
                  navigationType: r,
                }
              );
            },
            y = (t, e, n) => {
              try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                  const r = new PerformanceObserver((t) => {
                    e(t.getEntries());
                  });
                  return (
                    r.observe(
                      Object.assign({ type: t, buffered: !0 }, n || {})
                    ),
                    r
                  );
                }
              } catch (t) {}
            },
            b = (t, e) => {
              const n = (r) => {
                ("pagehide" !== r.type &&
                  "hidden" !== h.document.visibilityState) ||
                  (t(r),
                  e &&
                    (removeEventListener("visibilitychange", n, !0),
                    removeEventListener("pagehide", n, !0)));
              };
              addEventListener("visibilitychange", n, !0),
                addEventListener("pagehide", n, !0);
            };
          let S = -1;
          const E = () => (
              S < 0 &&
                ((S =
                  "hidden" !== h.document.visibilityState ||
                  h.document.prerendering
                    ? 1 / 0
                    : 0),
                b(({ timeStamp: t }) => {
                  S = t;
                }, !0)),
              {
                get firstHiddenTime() {
                  return S;
                },
              }
            ),
            w = {};
          function x(t) {
            return "number" == typeof t && isFinite(t);
          }
          function T(t, { startTimestamp: e, ...n }) {
            return (
              e && t.startTimestamp > e && (t.startTimestamp = e),
              t.startChild({ startTimestamp: e, ...n })
            );
          }
          function O(t) {
            return t / 1e3;
          }
          function A() {
            return h && h.addEventListener && h.performance;
          }
          let I,
            R,
            k = 0,
            C = {};
          function P() {
            const t = A();
            if (t && f.Z1) {
              t.mark && h.performance.mark("sentry-tracing-init"),
                ((t) => {
                  const e = E(),
                    n = g("FID");
                  let r;
                  const i = (t) => {
                      t.startTime < e.firstHiddenTime &&
                        ((n.value = t.processingStart - t.startTime),
                        n.entries.push(t),
                        r(!0));
                    },
                    s = (t) => {
                      t.forEach(i);
                    },
                    o = y("first-input", s);
                  (r = _(t, n)),
                    o &&
                      b(() => {
                        s(o.takeRecords()), o.disconnect();
                      }, !0);
                })((t) => {
                  const e = t.entries.pop();
                  if (!e) return;
                  const n = O(f.Z1),
                    r = O(e.startTime);
                  (C.fid = { value: t.value, unit: "millisecond" }),
                    (C["mark.fid"] = { value: n + r, unit: "second" });
                });
              const e = ((t) => {
                  const e = g("CLS", 0);
                  let n,
                    r = 0,
                    i = [];
                  const s = (t) => {
                      t.forEach((t) => {
                        if (!t.hadRecentInput) {
                          const s = i[0],
                            o = i[i.length - 1];
                          r &&
                          0 !== i.length &&
                          t.startTime - o.startTime < 1e3 &&
                          t.startTime - s.startTime < 5e3
                            ? ((r += t.value), i.push(t))
                            : ((r = t.value), (i = [t])),
                            r > e.value &&
                              ((e.value = r), (e.entries = i), n && n());
                        }
                      });
                    },
                    o = y("layout-shift", s);
                  if (o) {
                    n = _(t, e);
                    const r = () => {
                      s(o.takeRecords()), n(!0);
                    };
                    return b(r), r;
                  }
                })((t) => {
                  const e = t.entries.pop();
                  e && ((C.cls = { value: t.value, unit: "" }), (R = e));
                }),
                n = ((t) => {
                  const e = E(),
                    n = g("LCP");
                  let r;
                  const i = (t) => {
                      const i = t[t.length - 1];
                      if (i) {
                        const t = Math.max(i.startTime - m(), 0);
                        t < e.firstHiddenTime &&
                          ((n.value = t), (n.entries = [i]), r());
                      }
                    },
                    s = y("largest-contentful-paint", i);
                  if (s) {
                    r = _(t, n);
                    const e = () => {
                      w[n.id] ||
                        (i(s.takeRecords()),
                        s.disconnect(),
                        (w[n.id] = !0),
                        r(!0));
                    };
                    return (
                      ["keydown", "click"].forEach((t) => {
                        addEventListener(t, e, { once: !0, capture: !0 });
                      }),
                      b(e, !0),
                      e
                    );
                  }
                })((t) => {
                  const e = t.entries.pop();
                  e &&
                    ((C.lcp = { value: t.value, unit: "millisecond" }),
                    (I = e));
                });
              return () => {
                e && e(), n && n();
              };
            }
            return () => {};
          }
          function N(t, e, n, r, i, s) {
            const o = s ? e[s] : e[`${n}End`],
              a = e[`${n}Start`];
            a &&
              o &&
              T(t, {
                op: "browser",
                description: i || n,
                startTimestamp: r + O(a),
                endTimestamp: r + O(o),
              });
          }
          var D = n(3684),
            M = n(7135),
            j = n(3543),
            L = n(6711);
          var q = n(3855);
          const U = ["localhost", /^\/(?!\/)/],
            $ = {
              traceFetch: !0,
              traceXHR: !0,
              enableHTTPTimings: !0,
              tracingOrigins: U,
              tracePropagationTargets: U,
            };
          function H(t) {
            const {
                traceFetch: e,
                traceXHR: n,
                tracePropagationTargets: r,
                tracingOrigins: i,
                shouldCreateSpanForRequest: s,
                enableHTTPTimings: c,
              } = { traceFetch: $.traceFetch, traceXHR: $.traceXHR, ...t },
              u = "function" == typeof s ? s : (t) => !0,
              l = (t) =>
                (function (t, e) {
                  return (function (t, e = [], n = !1) {
                    return e.some((e) =>
                      (function (t, e, n = !1) {
                        return (
                          !!(0, a.HD)(t) &&
                          ((0, a.Kj)(e)
                            ? e.test(t)
                            : !!(0, a.HD)(e) && (n ? t === e : t.includes(e)))
                        );
                      })(t, e, n)
                    );
                  })(t, e || U);
                })(t, r || i),
              d = {};
            e &&
              (0, L.oq)("fetch", (t) => {
                const e = (function (t, e, n, r) {
                  if (!(0, D.z)() || !t.fetchData) return;
                  const i = e(t.fetchData.url);
                  if (t.endTimestamp && i) {
                    const e = t.fetchData.__span;
                    if (!e) return;
                    const n = r[e];
                    if (n) {
                      if (t.response) {
                        n.setHttpStatus(t.response.status);
                        const e =
                            t.response &&
                            t.response.headers &&
                            t.response.headers.get("content-length"),
                          r = parseInt(e);
                        r > 0 && n.setData("http.response_content_length", r);
                      } else t.error && n.setStatus("internal_error");
                      n.finish(), delete r[e];
                    }
                    return;
                  }
                  const s = (0, M.Gd)(),
                    c = s.getScope(),
                    u = s.getClient(),
                    l = c.getSpan(),
                    { method: d, url: p } = t.fetchData,
                    h =
                      i && l
                        ? l.startChild({
                            data: { url: p, type: "fetch", "http.method": d },
                            description: `${d} ${p}`,
                            op: "http.client",
                          })
                        : void 0;
                  if (
                    (h && ((t.fetchData.__span = h.spanId), (r[h.spanId] = h)),
                    n(t.fetchData.url) && u)
                  ) {
                    const e = t.args[0];
                    t.args[1] = t.args[1] || {};
                    const n = t.args[1];
                    n.headers = (function (t, e, n, r) {
                      const i = n.getSpan(),
                        s = i && i.transaction,
                        {
                          traceId: c,
                          sampled: u,
                          dsc: l,
                        } = n.getPropagationContext(),
                        d = i ? i.toTraceparent() : (0, o.$p)(c, void 0, u),
                        p = s
                          ? s.getDynamicSamplingContext()
                          : l || (0, j._)(c, e, n),
                        h = (0, q.IQ)(p),
                        f =
                          "undefined" != typeof Request && (0, a.V9)(t, Request)
                            ? t.headers
                            : r.headers;
                      if (f) {
                        if (
                          "undefined" != typeof Headers &&
                          (0, a.V9)(f, Headers)
                        ) {
                          const t = new Headers(f);
                          return (
                            t.append("sentry-trace", d),
                            h && t.append(q.bU, h),
                            t
                          );
                        }
                        if (Array.isArray(f)) {
                          const t = [...f, ["sentry-trace", d]];
                          return h && t.push([q.bU, h]), t;
                        }
                        {
                          const t = "baggage" in f ? f.baggage : void 0,
                            e = [];
                          return (
                            Array.isArray(t) ? e.push(...t) : t && e.push(t),
                            h && e.push(h),
                            {
                              ...f,
                              "sentry-trace": d,
                              baggage: e.length > 0 ? e.join(",") : void 0,
                            }
                          );
                        }
                      }
                      return { "sentry-trace": d, baggage: h };
                    })(e, u, c, n);
                  }
                  return h;
                })(t, u, l, d);
                c && e && B(e);
              }),
              n &&
                (0, L.oq)("xhr", (t) => {
                  const e = (function (t, e, n, r) {
                    const i = t.xhr,
                      s = i && i[L.xU];
                    if (
                      !(0, D.z)() ||
                      (i && i.__sentry_own_request__) ||
                      !i ||
                      !s
                    )
                      return;
                    const a = e(s.url);
                    if (t.endTimestamp && a) {
                      const t = i.__sentry_xhr_span_id__;
                      if (!t) return;
                      const e = r[t];
                      return void (
                        e &&
                        (e.setHttpStatus(s.status_code),
                        e.finish(),
                        delete r[t])
                      );
                    }
                    const c = (0, M.Gd)(),
                      u = c.getScope(),
                      l = u.getSpan(),
                      d =
                        a && l
                          ? l.startChild({
                              data: {
                                ...s.data,
                                type: "xhr",
                                "http.method": s.method,
                                url: s.url,
                              },
                              description: `${s.method} ${s.url}`,
                              op: "http.client",
                            })
                          : void 0;
                    if (
                      (d &&
                        ((i.__sentry_xhr_span_id__ = d.spanId),
                        (r[i.__sentry_xhr_span_id__] = d)),
                      i.setRequestHeader && n(s.url))
                    )
                      if (d) {
                        const t = d && d.transaction,
                          e = t && t.getDynamicSamplingContext(),
                          n = (0, q.IQ)(e);
                        G(i, d.toTraceparent(), n);
                      } else {
                        const t = c.getClient(),
                          {
                            traceId: e,
                            sampled: n,
                            dsc: r,
                          } = u.getPropagationContext(),
                          s = (0, o.$p)(e, void 0, n),
                          a = r || (t ? (0, j._)(e, t, u) : void 0);
                        G(i, s, (0, q.IQ)(a));
                      }
                    return d;
                  })(t, u, l, d);
                  c && e && B(e);
                });
          }
          function B(t) {
            const e = t.data.url,
              n = new PerformanceObserver((r) => {
                r.getEntries().forEach((r) => {
                  ("fetch" !== r.initiatorType &&
                    "xmlhttprequest" !== r.initiatorType) ||
                    !r.name.endsWith(e) ||
                    ((function (t) {
                      const { name: e, version: n } = (function (t) {
                          let e = "unknown",
                            n = "unknown",
                            r = "";
                          for (const i of t) {
                            if ("/" === i) {
                              [e, n] = t.split("/");
                              break;
                            }
                            if (!isNaN(Number(i))) {
                              (e = "h" === r ? "http" : r), (n = t.split(r)[1]);
                              break;
                            }
                            r += i;
                          }
                          return r === t && (e = r), { name: e, version: n };
                        })(t.nextHopProtocol),
                        r = [];
                      return (
                        r.push(
                          ["network.protocol.version", n],
                          ["network.protocol.name", e]
                        ),
                        f.Z1
                          ? [
                              ...r,
                              [
                                "http.request.redirect_start",
                                F(t.redirectStart),
                              ],
                              ["http.request.fetch_start", F(t.fetchStart)],
                              [
                                "http.request.domain_lookup_start",
                                F(t.domainLookupStart),
                              ],
                              [
                                "http.request.domain_lookup_end",
                                F(t.domainLookupEnd),
                              ],
                              ["http.request.connect_start", F(t.connectStart)],
                              [
                                "http.request.secure_connection_start",
                                F(t.secureConnectionStart),
                              ],
                              ["http.request.connection_end", F(t.connectEnd)],
                              ["http.request.request_start", F(t.requestStart)],
                              [
                                "http.request.response_start",
                                F(t.responseStart),
                              ],
                              ["http.request.response_end", F(t.responseEnd)],
                            ]
                          : r
                      );
                    })(r).forEach((e) => t.setData(...e)),
                    n.disconnect());
                });
              });
            n.observe({ entryTypes: ["resource"] });
          }
          function F(t) {
            return ((f.Z1 || performance.timeOrigin) + t) / 1e3;
          }
          function G(t, e, n) {
            try {
              t.setRequestHeader("sentry-trace", e),
                n && t.setRequestHeader(q.bU, n);
            } catch (t) {}
          }
          const V = "BrowserTracing",
            Y = {
              ...r.AT,
              markBackgroundTransactions: !0,
              routingInstrumentation: function (t, e = !0, n = !0) {
                if (!h || !h.location) return;
                let r,
                  i = h.location.href;
                e &&
                  (r = t({
                    name: h.location.pathname,
                    startTimestamp: f.Z1 ? f.Z1 / 1e3 : void 0,
                    op: "pageload",
                    metadata: { source: "url" },
                  })),
                  n &&
                    (0, L.oq)("history", ({ to: e, from: n }) => {
                      void 0 === n && i && -1 !== i.indexOf(e)
                        ? (i = void 0)
                        : n !== e &&
                          ((i = void 0),
                          r && r.finish(),
                          (r = t({
                            name: h.location.pathname,
                            op: "navigation",
                            metadata: { source: "url" },
                          })));
                    });
              },
              startTransactionOnLocationChange: !0,
              startTransactionOnPageLoad: !0,
              enableLongTask: !0,
              _experiments: {},
              ...$,
            };
          class W {
            __init() {
              this.name = V;
            }
            __init2() {
              this._hasSetTracePropagationTargets = !1;
            }
            constructor(t) {
              W.prototype.__init.call(this),
                W.prototype.__init2.call(this),
                (0, i.T)(),
                (this.options = { ...Y, ...t }),
                void 0 !== this.options._experiments.enableLongTask &&
                  (this.options.enableLongTask =
                    this.options._experiments.enableLongTask),
                t &&
                  !t.tracePropagationTargets &&
                  t.tracingOrigins &&
                  (this.options.tracePropagationTargets = t.tracingOrigins),
                (this._collectWebVitals = P()),
                this.options.enableLongTask &&
                  y("longtask", (t) => {
                    for (const e of t) {
                      const t = (0, s.x1)();
                      if (!t) return;
                      const n = O(f.Z1 + e.startTime),
                        r = O(e.duration);
                      t.startChild({
                        description: "Main UI thread blocked",
                        op: "ui.long-task",
                        startTimestamp: n,
                        endTimestamp: n + r,
                      });
                    }
                  }),
                this.options._experiments.enableInteractions &&
                  y(
                    "event",
                    (t) => {
                      for (const e of t) {
                        const t = (0, s.x1)();
                        if (!t) return;
                        if ("click" === e.name) {
                          const n = O(f.Z1 + e.startTime),
                            r = O(e.duration);
                          t.startChild({
                            description: d(e.target),
                            op: `ui.interaction.${e.name}`,
                            startTimestamp: n,
                            endTimestamp: n + r,
                          });
                        }
                      }
                    },
                    { durationThreshold: 0 }
                  );
            }
            setupOnce(t, e) {
              this._getCurrentHub = e;
              const n = e().getClient(),
                r = n && n.getOptions(),
                {
                  routingInstrumentation: i,
                  startTransactionOnLocationChange: o,
                  startTransactionOnPageLoad: a,
                  markBackgroundTransactions: c,
                  traceFetch: u,
                  traceXHR: l,
                  shouldCreateSpanForRequest: d,
                  enableHTTPTimings: p,
                  _experiments: f,
                } = this.options,
                _ =
                  (r && r.tracePropagationTargets) ||
                  this.options.tracePropagationTargets;
              i(
                (t) => {
                  const n = this._createRouteTransaction(t);
                  return (
                    this.options._experiments.onStartRouteTransaction &&
                      this.options._experiments.onStartRouteTransaction(
                        n,
                        t,
                        e
                      ),
                    n
                  );
                },
                a,
                o
              ),
                c &&
                  h &&
                  h.document &&
                  h.document.addEventListener("visibilitychange", () => {
                    const t = (0, s.x1)();
                    if (h.document.hidden && t) {
                      const e = "cancelled";
                      t.status || t.setStatus(e),
                        t.setTag("visibilitychange", "document.hidden"),
                        t.finish();
                    }
                  }),
                f.enableInteractions && this._registerInteractionListener(),
                H({
                  traceFetch: u,
                  traceXHR: l,
                  tracePropagationTargets: _,
                  shouldCreateSpanForRequest: d,
                  enableHTTPTimings: p,
                });
            }
            _createRouteTransaction(t) {
              if (!this._getCurrentHub) return;
              const e = this._getCurrentHub(),
                {
                  beforeNavigate: n,
                  idleTimeout: r,
                  finalTimeout: s,
                  heartbeatInterval: a,
                } = this.options,
                c = "pageload" === t.op,
                u = c ? z("sentry-trace") : "",
                l = c ? z("baggage") : "",
                {
                  traceparentData: p,
                  dynamicSamplingContext: _,
                  propagationContext: v,
                } = (0, o.KA)(u, l),
                m = {
                  ...t,
                  ...p,
                  metadata: {
                    ...t.metadata,
                    dynamicSamplingContext: p && !_ ? {} : _,
                  },
                  trimEnd: !0,
                },
                g = "function" == typeof n ? n(m) : m,
                y = void 0 === g ? { ...m, sampled: !1 } : g;
              (y.metadata =
                y.name !== m.name
                  ? { ...y.metadata, source: "custom" }
                  : y.metadata),
                (this._latestRouteName = y.name),
                (this._latestRouteSource = y.metadata && y.metadata.source),
                y.sampled;
              const { location: b } = h,
                S = (0, i.l)(e, y, r, s, !0, { location: b }, a),
                w = e.getScope();
              return (
                c && p
                  ? w.setPropagationContext(v)
                  : w.setPropagationContext({
                      traceId: S.traceId,
                      spanId: S.spanId,
                      parentSpanId: S.parentSpanId,
                      sampled: !!S.sampled,
                    }),
                S.registerBeforeFinishCallback((t) => {
                  this._collectWebVitals(),
                    (function (t) {
                      const e = A();
                      if (!e || !h.performance.getEntries || !f.Z1) return;
                      const n = O(f.Z1),
                        r = e.getEntries();
                      let i, s;
                      if (
                        (r.slice(k).forEach((e) => {
                          const r = O(e.startTime),
                            o = O(e.duration);
                          if (
                            !("navigation" === t.op && n + r < t.startTimestamp)
                          )
                            switch (e.entryType) {
                              case "navigation":
                                !(function (t, e, n) {
                                  [
                                    "unloadEvent",
                                    "redirect",
                                    "domContentLoadedEvent",
                                    "loadEvent",
                                    "connect",
                                  ].forEach((r) => {
                                    N(t, e, r, n);
                                  }),
                                    N(
                                      t,
                                      e,
                                      "secureConnection",
                                      n,
                                      "TLS/SSL",
                                      "connectEnd"
                                    ),
                                    N(
                                      t,
                                      e,
                                      "fetch",
                                      n,
                                      "cache",
                                      "domainLookupStart"
                                    ),
                                    N(t, e, "domainLookup", n, "DNS"),
                                    (function (t, e, n) {
                                      T(t, {
                                        op: "browser",
                                        description: "request",
                                        startTimestamp: n + O(e.requestStart),
                                        endTimestamp: n + O(e.responseEnd),
                                      }),
                                        T(t, {
                                          op: "browser",
                                          description: "response",
                                          startTimestamp:
                                            n + O(e.responseStart),
                                          endTimestamp: n + O(e.responseEnd),
                                        });
                                    })(t, e, n);
                                })(t, e, n),
                                  (i = n + O(e.responseStart)),
                                  (s = n + O(e.requestStart));
                                break;
                              case "mark":
                              case "paint":
                              case "measure": {
                                !(function (t, e, n, r, i) {
                                  const s = i + n,
                                    o = s + r;
                                  T(t, {
                                    description: e.name,
                                    endTimestamp: o,
                                    op: e.entryType,
                                    startTimestamp: s,
                                  });
                                })(t, e, r, o, n);
                                const i = E(),
                                  s = e.startTime < i.firstHiddenTime;
                                "first-paint" === e.name &&
                                  s &&
                                  (C.fp = {
                                    value: e.startTime,
                                    unit: "millisecond",
                                  }),
                                  "first-contentful-paint" === e.name &&
                                    s &&
                                    (C.fcp = {
                                      value: e.startTime,
                                      unit: "millisecond",
                                    });
                                break;
                              }
                              case "resource": {
                                const i = e.name.replace(h.location.origin, "");
                                !(function (t, e, n, r, i, s) {
                                  if (
                                    "xmlhttprequest" === e.initiatorType ||
                                    "fetch" === e.initiatorType
                                  )
                                    return;
                                  const o = {};
                                  "transferSize" in e &&
                                    (o["http.response_transfer_size"] =
                                      e.transferSize),
                                    "encodedBodySize" in e &&
                                      (o["http.response_content_length"] =
                                        e.encodedBodySize),
                                    "decodedBodySize" in e &&
                                      (o[
                                        "http.decoded_response_content_length"
                                      ] = e.decodedBodySize),
                                    "renderBlockingStatus" in e &&
                                      (o["resource.render_blocking_status"] =
                                        e.renderBlockingStatus);
                                  const a = s + r;
                                  T(t, {
                                    description: n,
                                    endTimestamp: a + i,
                                    op: e.initiatorType
                                      ? `resource.${e.initiatorType}`
                                      : "resource.other",
                                    startTimestamp: a,
                                    data: o,
                                  });
                                })(t, e, i, r, o, n);
                                break;
                              }
                            }
                        }),
                        (k = Math.max(r.length - 1, 0)),
                        (function (t) {
                          const e = h.navigator;
                          if (!e) return;
                          const n = e.connection;
                          n &&
                            (n.effectiveType &&
                              t.setTag(
                                "effectiveConnectionType",
                                n.effectiveType
                              ),
                            n.type && t.setTag("connectionType", n.type),
                            x(n.rtt) &&
                              (C["connection.rtt"] = {
                                value: n.rtt,
                                unit: "millisecond",
                              })),
                            x(e.deviceMemory) &&
                              t.setTag("deviceMemory", `${e.deviceMemory} GB`),
                            x(e.hardwareConcurrency) &&
                              t.setTag(
                                "hardwareConcurrency",
                                String(e.hardwareConcurrency)
                              );
                        })(t),
                        "pageload" === t.op)
                      ) {
                        "number" == typeof i &&
                          ((C.ttfb = {
                            value: 1e3 * (i - t.startTimestamp),
                            unit: "millisecond",
                          }),
                          "number" == typeof s &&
                            s <= i &&
                            (C["ttfb.requestTime"] = {
                              value: 1e3 * (i - s),
                              unit: "millisecond",
                            })),
                          ["fcp", "fp", "lcp"].forEach((e) => {
                            if (!C[e] || n >= t.startTimestamp) return;
                            const r = C[e].value,
                              i = n + O(r),
                              s = Math.abs(1e3 * (i - t.startTimestamp));
                            C[e].value = s;
                          });
                        const e = C["mark.fid"];
                        e &&
                          C.fid &&
                          (T(t, {
                            description: "first input delay",
                            endTimestamp: e.value + O(C.fid.value),
                            op: "ui.action",
                            startTimestamp: e.value,
                          }),
                          delete C["mark.fid"]),
                          "fcp" in C || delete C.cls,
                          Object.keys(C).forEach((e) => {
                            t.setMeasurement(e, C[e].value, C[e].unit);
                          }),
                          (function (t) {
                            I &&
                              (I.element &&
                                t.setTag("lcp.element", d(I.element)),
                              I.id && t.setTag("lcp.id", I.id),
                              I.url &&
                                t.setTag("lcp.url", I.url.trim().slice(0, 200)),
                              t.setTag("lcp.size", I.size)),
                              R &&
                                R.sources &&
                                R.sources.forEach((e, n) =>
                                  t.setTag(`cls.source.${n + 1}`, d(e.node))
                                );
                          })(t);
                      }
                      (I = void 0), (R = void 0), (C = {});
                    })(t);
                }),
                S
              );
            }
            _registerInteractionListener() {
              let t;
              const e = () => {
                const {
                    idleTimeout: e,
                    finalTimeout: n,
                    heartbeatInterval: r,
                  } = this.options,
                  o = (0, s.x1)();
                if (o && o.op && ["navigation", "pageload"].includes(o.op))
                  return;
                if (
                  (t &&
                    (t.setFinishReason("interactionInterrupted"),
                    t.finish(),
                    (t = void 0)),
                  !this._getCurrentHub)
                )
                  return;
                if (!this._latestRouteName) return;
                const a = this._getCurrentHub(),
                  { location: c } = h,
                  u = {
                    name: this._latestRouteName,
                    op: "ui.action.click",
                    trimEnd: !0,
                    metadata: { source: this._latestRouteSource || "url" },
                  };
                t = (0, i.l)(a, u, e, n, !0, { location: c }, r);
              };
              ["click"].forEach((t) => {
                addEventListener(t, e, { once: !1, capture: !0 });
              });
            }
          }
          function z(t) {
            const e =
              ((n = `meta[name=${t}]`),
              u.document && u.document.querySelector
                ? u.document.querySelector(n)
                : null);
            var n;
            return e ? e.getAttribute("content") : void 0;
          }
          var J,
            K = n(758),
            X = n(5921),
            Z = n(4114);
          function Q(t) {
            return t.split(/[\?#]/, 1)[0];
          }
          function tt(t) {
            return t.split(/\\?\//).filter((t) => t.length > 0 && "," !== t)
              .length;
          }
          function et(t) {
            let e,
              n = t[0],
              r = 1;
            for (; r < t.length; ) {
              const i = t[r],
                s = t[r + 1];
              if (
                ((r += 2),
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
              )
                return;
              "access" === i || "optionalAccess" === i
                ? ((e = n), (n = s(n)))
                : ("call" !== i && "optionalCall" !== i) ||
                  ((n = s((...t) => n.call(e, ...t))), (e = void 0));
            }
            return n;
          }
          !(function (t) {
            (t.Ok = "ok"),
              (t.DeadlineExceeded = "deadline_exceeded"),
              (t.Unauthenticated = "unauthenticated"),
              (t.PermissionDenied = "permission_denied"),
              (t.NotFound = "not_found"),
              (t.ResourceExhausted = "resource_exhausted"),
              (t.InvalidArgument = "invalid_argument"),
              (t.Unimplemented = "unimplemented"),
              (t.Unavailable = "unavailable"),
              (t.InternalError = "internal_error"),
              (t.UnknownError = "unknown_error"),
              (t.Cancelled = "cancelled"),
              (t.AlreadyExists = "already_exists"),
              (t.FailedPrecondition = "failed_precondition"),
              (t.Aborted = "aborted"),
              (t.OutOfRange = "out_of_range"),
              (t.DataLoss = "data_loss");
          })(J || (J = {}));
          var nt = n(4975),
            rt = n(9040),
            it = n(9554);
          function st(t) {
            const e = et([
              t,
              "call",
              (t) => t(),
              "access",
              (t) => t.getClient,
              "call",
              (t) => t(),
              "optionalAccess",
              (t) => t.getOptions,
              "call",
              (t) => t(),
            ]);
            return (
              "sentry" !==
              (et([e, "optionalAccess", (t) => t.instrumenter]) || "sentry")
            );
          }
          class ot {
            static __initStatic() {
              this.id = "Apollo";
            }
            __init() {
              this.name = ot.id;
            }
            constructor(t = { useNestjs: !1 }) {
              ot.prototype.__init.call(this), (this._useNest = !!t.useNestjs);
            }
            loadDependency() {
              return (
                this._useNest
                  ? (this._module =
                      this._module || (0, nt.$y)("@nestjs/graphql"))
                  : (this._module =
                      this._module || (0, nt.$y)("apollo-server-core")),
                this._module
              );
            }
            setupOnce(t, e) {
              if (!st(e))
                if (this._useNest) {
                  const t = this.loadDependency();
                  if (!t) return;
                  (0, rt.hl)(
                    t.GraphQLFactory.prototype,
                    "mergeWithSchema",
                    function (t) {
                      return function (...n) {
                        return (
                          (0, rt.hl)(
                            this.resolversExplorerService,
                            "explore",
                            function (t) {
                              return function () {
                                return at((0, it.lE)(t.call(this)), e);
                              };
                            }
                          ),
                          t.call(this, ...n)
                        );
                      };
                    }
                  );
                } else {
                  const t = this.loadDependency();
                  if (!t) return;
                  (0, rt.hl)(
                    t.ApolloServerBase.prototype,
                    "constructSchema",
                    function (t) {
                      return function () {
                        if (!this.config.resolvers) return t.call(this);
                        const n = (0, it.lE)(this.config.resolvers);
                        return (this.config.resolvers = at(n, e)), t.call(this);
                      };
                    }
                  );
                }
            }
          }
          function at(t, e) {
            return t.map(
              (t) => (
                Object.keys(t).forEach((n) => {
                  Object.keys(t[n]).forEach((r) => {
                    "function" == typeof t[n][r] &&
                      (function (t, e, n, r) {
                        (0, rt.hl)(t[e], n, function (t) {
                          return function (...i) {
                            const s = et([
                                r().getScope(),
                                "optionalAccess",
                                (t) => t.getSpan,
                                "call",
                                (t) => t(),
                              ]),
                              o = et([
                                s,
                                "optionalAccess",
                                (t) => t.startChild,
                                "call",
                                (t) =>
                                  t({
                                    description: `${e}.${n}`,
                                    op: "graphql.resolve",
                                  }),
                              ]),
                              c = t.call(this, ...i);
                            return (0, a.J8)(c)
                              ? c.then(
                                  (t) => (
                                    et([
                                      o,
                                      "optionalAccess",
                                      (t) => t.finish,
                                      "call",
                                      (t) => t(),
                                    ]),
                                    t
                                  )
                                )
                              : (et([
                                  o,
                                  "optionalAccess",
                                  (t) => t.finish,
                                  "call",
                                  (t) => t(),
                                ]),
                                c);
                          };
                        });
                      })(t, n, r, e);
                  });
                }),
                t
              )
            );
          }
          ot.__initStatic();
          class ct {
            static __initStatic() {
              this.id = "Express";
            }
            __init() {
              this.name = ct.id;
            }
            constructor(t = {}) {
              ct.prototype.__init.call(this),
                (this._router = t.router || t.app),
                (this._methods = (
                  Array.isArray(t.methods) ? t.methods : []
                ).concat("use"));
            }
            setupOnce(t, e) {
              this._router &&
                (st(e) ||
                  ((function (t, e = []) {
                    e.forEach((e) =>
                      (function (t, e) {
                        const n = t[e];
                        return (
                          (t[e] = function (...t) {
                            return n.call(
                              this,
                              ...(function (t, e) {
                                return t.map((t) =>
                                  "function" == typeof t
                                    ? ut(t, e)
                                    : Array.isArray(t)
                                    ? t.map((t) =>
                                        "function" == typeof t ? ut(t, e) : t
                                      )
                                    : t
                                );
                              })(t, e)
                            );
                          }),
                          t
                        );
                      })(t, e)
                    );
                  })(this._router, this._methods),
                  (function (t) {
                    const e = "settings" in t;
                    e && void 0 === t._router && t.lazyrouter && t.lazyrouter();
                    const n = e ? t._router : t;
                    if (!n) return;
                    const r = Object.getPrototypeOf(n),
                      i = r.process_params;
                    r.process_params = function (t, e, n, r, s) {
                      n._reconstructedRoute || (n._reconstructedRoute = "");
                      const {
                        layerRoutePath: o,
                        isRegex: c,
                        isArray: u,
                        numExtraSegments: l,
                      } = (function (t) {
                        const e = et([
                            t,
                            "access",
                            (t) => t.route,
                            "optionalAccess",
                            (t) => t.path,
                          ]),
                          n = (0, a.Kj)(e),
                          r = Array.isArray(e);
                        if (!e)
                          return {
                            isRegex: n,
                            isArray: r,
                            numExtraSegments: 0,
                          };
                        const i = r
                            ? Math.max(
                                e.reduce((t, e) => t + tt(e.toString()), 0) -
                                  tt(t.path || ""),
                                0
                              )
                            : 0,
                          s = (function (t, e) {
                            return t
                              ? e.map((t) => t.toString()).join(",")
                              : e && e.toString();
                          })(r, e);
                        return {
                          layerRoutePath: s,
                          isRegex: n,
                          isArray: r,
                          numExtraSegments: i,
                        };
                      })(t);
                      (o || c || u) && (n._hasParameters = !0);
                      const d = (o || t.path || "")
                        .split("/")
                        .filter(
                          (t) => t.length > 0 && (c || u || !t.includes("*"))
                        )
                        .join("/");
                      if (
                        (d &&
                          d.length > 0 &&
                          (n._reconstructedRoute += `/${d}${c ? "/" : ""}`),
                        tt(n.originalUrl || "") + l ===
                          tt(n._reconstructedRoute))
                      ) {
                        n._hasParameters ||
                          (n._reconstructedRoute !== n.originalUrl &&
                            (n._reconstructedRoute = n.originalUrl
                              ? Q(n.originalUrl)
                              : n.originalUrl));
                        const t = r.__sentry_transaction;
                        if (t && "custom" !== t.metadata.source) {
                          const e = n._reconstructedRoute || "/";
                          t.setName(
                            ...(function (t, e = {}) {
                              const n = t.method && t.method.toUpperCase();
                              let r = "",
                                i = "url";
                              e.customRoute || t.route
                                ? ((r =
                                    e.customRoute ||
                                    `${t.baseUrl || ""}${
                                      t.route && t.route.path
                                    }`),
                                  (i = "route"))
                                : (t.originalUrl || t.url) &&
                                  (r = Q(t.originalUrl || t.url || ""));
                              let s = "";
                              return (
                                e.method && n && (s += n),
                                e.method && e.path && (s += " "),
                                e.path && r && (s += r),
                                [s, i]
                              );
                            })(n, { path: !0, method: !0, customRoute: e })
                          );
                        }
                      }
                      return i.call(this, t, e, n, r, s);
                    };
                  })(this._router)));
            }
          }
          function ut(t, e) {
            const n = t.length;
            switch (n) {
              case 2:
                return function (n, r) {
                  const i = r.__sentry_transaction;
                  if (i) {
                    const n = i.startChild({
                      description: t.name,
                      op: `middleware.express.${e}`,
                    });
                    r.once("finish", () => {
                      n.finish();
                    });
                  }
                  return t.call(this, n, r);
                };
              case 3:
                return function (n, r, i) {
                  const s = et([
                    r.__sentry_transaction,
                    "optionalAccess",
                    (t) => t.startChild,
                    "call",
                    (n) =>
                      n({ description: t.name, op: `middleware.express.${e}` }),
                  ]);
                  t.call(this, n, r, function (...t) {
                    et([
                      s,
                      "optionalAccess",
                      (t) => t.finish,
                      "call",
                      (t) => t(),
                    ]),
                      i.call(this, ...t);
                  });
                };
              case 4:
                return function (n, r, i, s) {
                  const o = et([
                    i.__sentry_transaction,
                    "optionalAccess",
                    (t) => t.startChild,
                    "call",
                    (n) =>
                      n({ description: t.name, op: `middleware.express.${e}` }),
                  ]);
                  t.call(this, n, r, i, function (...t) {
                    et([
                      o,
                      "optionalAccess",
                      (t) => t.finish,
                      "call",
                      (t) => t(),
                    ]),
                      s.call(this, ...t);
                  });
                };
              default:
                throw new Error(
                  `Express middleware takes 2-4 arguments. Got: ${n}`
                );
            }
          }
          ct.__initStatic();
          class lt {
            constructor() {
              lt.prototype.__init.call(this);
            }
            static __initStatic() {
              this.id = "GraphQL";
            }
            __init() {
              this.name = lt.id;
            }
            loadDependency() {
              return (this._module =
                this._module || (0, nt.$y)("graphql/execution/execute.js"));
            }
            setupOnce(t, e) {
              if (st(e)) return;
              const n = this.loadDependency();
              n &&
                (0, rt.hl)(n, "execute", function (t) {
                  return function (...n) {
                    const r = e().getScope(),
                      i = et([
                        r,
                        "optionalAccess",
                        (t) => t.getSpan,
                        "call",
                        (t) => t(),
                      ]),
                      s = et([
                        i,
                        "optionalAccess",
                        (t) => t.startChild,
                        "call",
                        (t) =>
                          t({ description: "execute", op: "graphql.execute" }),
                      ]);
                    et([
                      r,
                      "optionalAccess",
                      (t) => t.setSpan,
                      "call",
                      (t) => t(s),
                    ]);
                    const o = t.call(this, ...n);
                    return (0, a.J8)(o)
                      ? o.then(
                          (t) => (
                            et([
                              s,
                              "optionalAccess",
                              (t) => t.finish,
                              "call",
                              (t) => t(),
                            ]),
                            et([
                              r,
                              "optionalAccess",
                              (t) => t.setSpan,
                              "call",
                              (t) => t(i),
                            ]),
                            t
                          )
                        )
                      : (et([
                          s,
                          "optionalAccess",
                          (t) => t.finish,
                          "call",
                          (t) => t(),
                        ]),
                        et([
                          r,
                          "optionalAccess",
                          (t) => t.setSpan,
                          "call",
                          (t) => t(i),
                        ]),
                        o);
                  };
                });
            }
          }
          lt.__initStatic();
          const dt = [
              "aggregate",
              "bulkWrite",
              "countDocuments",
              "createIndex",
              "createIndexes",
              "deleteMany",
              "deleteOne",
              "distinct",
              "drop",
              "dropIndex",
              "dropIndexes",
              "estimatedDocumentCount",
              "find",
              "findOne",
              "findOneAndDelete",
              "findOneAndReplace",
              "findOneAndUpdate",
              "indexes",
              "indexExists",
              "indexInformation",
              "initializeOrderedBulkOp",
              "insertMany",
              "insertOne",
              "isCapped",
              "mapReduce",
              "options",
              "parallelCollectionScan",
              "rename",
              "replaceOne",
              "stats",
              "updateMany",
              "updateOne",
            ],
            pt = {
              bulkWrite: ["operations"],
              countDocuments: ["query"],
              createIndex: ["fieldOrSpec"],
              createIndexes: ["indexSpecs"],
              deleteMany: ["filter"],
              deleteOne: ["filter"],
              distinct: ["key", "query"],
              dropIndex: ["indexName"],
              find: ["query"],
              findOne: ["query"],
              findOneAndDelete: ["filter"],
              findOneAndReplace: ["filter", "replacement"],
              findOneAndUpdate: ["filter", "update"],
              indexExists: ["indexes"],
              insertMany: ["docs"],
              insertOne: ["doc"],
              mapReduce: ["map", "reduce"],
              rename: ["newName"],
              replaceOne: ["filter", "doc"],
              updateMany: ["filter", "update"],
              updateOne: ["filter", "update"],
            };
          class ht {
            static __initStatic() {
              this.id = "Mongo";
            }
            __init() {
              this.name = ht.id;
            }
            constructor(t = {}) {
              ht.prototype.__init.call(this),
                (this._operations = Array.isArray(t.operations)
                  ? t.operations
                  : dt),
                (this._describeOperations =
                  !("describeOperations" in t) || t.describeOperations),
                (this._useMongoose = !!t.useMongoose);
            }
            loadDependency() {
              const t = this._useMongoose ? "mongoose" : "mongodb";
              return (this._module = this._module || (0, nt.$y)(t));
            }
            setupOnce(t, e) {
              if (st(e)) return;
              const n = this.loadDependency();
              n
                ? this._instrumentOperations(n.Collection, this._operations, e)
                : this._useMongoose;
            }
            _instrumentOperations(t, e, n) {
              e.forEach((e) => this._patchOperation(t, e, n));
            }
            _patchOperation(t, e, n) {
              if (!(e in t.prototype)) return;
              const r = this._getSpanContextFromOperationArguments.bind(this);
              (0, rt.hl)(t.prototype, e, function (t) {
                return function (...i) {
                  const s = i[i.length - 1],
                    o = et([
                      n().getScope(),
                      "optionalAccess",
                      (t) => t.getSpan,
                      "call",
                      (t) => t(),
                    ]);
                  if (
                    "function" != typeof s ||
                    ("mapReduce" === e && 2 === i.length)
                  ) {
                    const n = et([
                        o,
                        "optionalAccess",
                        (t) => t.startChild,
                        "call",
                        (t) => t(r(this, e, i)),
                      ]),
                      s = t.call(this, ...i);
                    if ((0, a.J8)(s))
                      return s.then(
                        (t) => (
                          et([
                            n,
                            "optionalAccess",
                            (t) => t.finish,
                            "call",
                            (t) => t(),
                          ]),
                          t
                        )
                      );
                    if (
                      (c = s) &&
                      "object" == typeof c &&
                      c.once &&
                      "function" == typeof c.once
                    ) {
                      const t = s;
                      try {
                        t.once("close", () => {
                          et([
                            n,
                            "optionalAccess",
                            (t) => t.finish,
                            "call",
                            (t) => t(),
                          ]);
                        });
                      } catch (t) {
                        et([
                          n,
                          "optionalAccess",
                          (t) => t.finish,
                          "call",
                          (t) => t(),
                        ]);
                      }
                      return t;
                    }
                    return (
                      et([
                        n,
                        "optionalAccess",
                        (t) => t.finish,
                        "call",
                        (t) => t(),
                      ]),
                      s
                    );
                  }
                  var c;
                  const u = et([
                    o,
                    "optionalAccess",
                    (t) => t.startChild,
                    "call",
                    (t) => t(r(this, e, i.slice(0, -1))),
                  ]);
                  return t.call(this, ...i.slice(0, -1), function (t, e) {
                    et([
                      u,
                      "optionalAccess",
                      (t) => t.finish,
                      "call",
                      (t) => t(),
                    ]),
                      s(t, e);
                  });
                };
              });
            }
            _getSpanContextFromOperationArguments(t, e, n) {
              const r = {
                  collectionName: t.collectionName,
                  dbName: t.dbName,
                  namespace: t.namespace,
                  "db.system": "mongodb",
                },
                i = { op: "db", description: e, data: r },
                s = pt[e],
                o = Array.isArray(this._describeOperations)
                  ? this._describeOperations.includes(e)
                  : this._describeOperations;
              if (!s || !o) return i;
              try {
                if ("mapReduce" === e) {
                  const [t, e] = n;
                  (r[s[0]] =
                    "string" == typeof t ? t : t.name || "<anonymous>"),
                    (r[s[1]] =
                      "string" == typeof e ? e : e.name || "<anonymous>");
                } else
                  for (let t = 0; t < s.length; t++)
                    r[s[t]] = JSON.stringify(n[t]);
              } catch (t) {}
              return i;
            }
          }
          ht.__initStatic();
          class ft {
            constructor() {
              ft.prototype.__init.call(this);
            }
            static __initStatic() {
              this.id = "Mysql";
            }
            __init() {
              this.name = ft.id;
            }
            loadDependency() {
              return (this._module =
                this._module || (0, nt.$y)("mysql/lib/Connection.js"));
            }
            setupOnce(t, e) {
              if (st(e)) return;
              const n = this.loadDependency();
              n &&
                (0, rt.hl)(n, "createQuery", function (t) {
                  return function (n, r, i) {
                    const s = et([
                        e().getScope(),
                        "optionalAccess",
                        (t) => t.getSpan,
                        "call",
                        (t) => t(),
                      ]),
                      o = et([
                        s,
                        "optionalAccess",
                        (t) => t.startChild,
                        "call",
                        (t) =>
                          t({
                            description: "string" == typeof n ? n : n.sql,
                            op: "db",
                            data: { "db.system": "mysql" },
                          }),
                      ]);
                    return "function" == typeof i
                      ? t.call(this, n, r, function (t, e, n) {
                          et([
                            o,
                            "optionalAccess",
                            (t) => t.finish,
                            "call",
                            (t) => t(),
                          ]),
                            i(t, e, n);
                        })
                      : "function" == typeof r
                      ? t.call(this, n, function (t, e, n) {
                          et([
                            o,
                            "optionalAccess",
                            (t) => t.finish,
                            "call",
                            (t) => t(),
                          ]),
                            r(t, e, n);
                        })
                      : t.call(this, n, r, i);
                  };
                });
            }
          }
          ft.__initStatic();
          class _t {
            static __initStatic() {
              this.id = "Postgres";
            }
            __init() {
              this.name = _t.id;
            }
            constructor(t = {}) {
              _t.prototype.__init.call(this),
                (this._usePgNative = !!t.usePgNative);
            }
            loadDependency() {
              return (this._module = this._module || (0, nt.$y)("pg"));
            }
            setupOnce(t, e) {
              if (st(e)) return;
              const n = this.loadDependency();
              if (!n) return;
              if (
                this._usePgNative &&
                !et([
                  n,
                  "access",
                  (t) => t.native,
                  "optionalAccess",
                  (t) => t.Client,
                ])
              )
                return;
              const { Client: r } = this._usePgNative ? n.native : n;
              (0, rt.hl)(r.prototype, "query", function (t) {
                return function (n, r, i) {
                  const s = et([
                      e().getScope(),
                      "optionalAccess",
                      (t) => t.getSpan,
                      "call",
                      (t) => t(),
                    ]),
                    o = et([
                      s,
                      "optionalAccess",
                      (t) => t.startChild,
                      "call",
                      (t) =>
                        t({
                          description: "string" == typeof n ? n : n.text,
                          op: "db",
                          data: { "db.system": "postgresql" },
                        }),
                    ]);
                  if ("function" == typeof i)
                    return t.call(this, n, r, function (t, e) {
                      et([
                        o,
                        "optionalAccess",
                        (t) => t.finish,
                        "call",
                        (t) => t(),
                      ]),
                        i(t, e);
                    });
                  if ("function" == typeof r)
                    return t.call(this, n, function (t, e) {
                      et([
                        o,
                        "optionalAccess",
                        (t) => t.finish,
                        "call",
                        (t) => t(),
                      ]),
                        r(t, e);
                    });
                  const c = void 0 !== r ? t.call(this, n, r) : t.call(this, n);
                  return (0, a.J8)(c)
                    ? c.then(
                        (t) => (
                          et([
                            o,
                            "optionalAccess",
                            (t) => t.finish,
                            "call",
                            (t) => t(),
                          ]),
                          t
                        )
                      )
                    : (et([
                        o,
                        "optionalAccess",
                        (t) => t.finish,
                        "call",
                        (t) => t(),
                      ]),
                      c);
                };
              });
            }
          }
          _t.__initStatic();
          class vt {
            static __initStatic() {
              this.id = "Prisma";
            }
            __init() {
              this.name = vt.id;
            }
            constructor(t = {}) {
              var e;
              vt.prototype.__init.call(this),
                (e = t.client) &&
                  e.$use &&
                  !t.client._sentryInstrumented &&
                  ((0, rt.xp)(t.client, "_sentryInstrumented", !0),
                  t.client.$use((t, e) => {
                    if (st(M.Gd)) return e(t);
                    const n = t.action,
                      r = t.model;
                    return (function (t, e, n = () => {}) {
                      const r = { ...t };
                      void 0 !== r.name &&
                        void 0 === r.description &&
                        (r.description = r.name);
                      const i = (0, M.Gd)(),
                        s = i.getScope(),
                        o = s.getSpan(),
                        c = (function () {
                          if ((0, D.z)())
                            return o ? o.startChild(r) : i.startTransaction(r);
                        })();
                      function u() {
                        c && c.finish(), i.getScope().setSpan(o);
                      }
                      let l;
                      s.setSpan(c);
                      try {
                        l = e(c);
                      } catch (t) {
                        throw (
                          (c && c.setStatus("internal_error"), n(t), u(), t)
                        );
                      }
                      return (
                        (0, a.J8)(l)
                          ? Promise.resolve(l).then(
                              () => {
                                u();
                              },
                              (t) => {
                                c && c.setStatus("internal_error"), n(t), u();
                              }
                            )
                          : u(),
                        l
                      );
                    })(
                      {
                        name: r ? `${r} ${n}` : n,
                        op: "db.sql.prisma",
                        data: { "db.system": "prisma" },
                      },
                      () => e(t)
                    );
                  }));
            }
            setupOnce() {}
          }
          vt.__initStatic();
          const mt = W,
            gt = K.r,
            yt = s.x1,
            bt = o.qG,
            St = X.Zd,
            Et = Z.Y,
            wt = X.Dr,
            xt = V,
            Tt = $,
            Ot = D.z,
            At = Q,
            It = o.Ke,
            Rt = r.io,
            kt = H,
            Ct = i.l,
            Pt = J,
            Nt = {
              BrowserTracing: mt,
              Apollo: ot,
              Express: ct,
              GraphQL: lt,
              Mongo: ht,
              Mysql: ft,
              Postgres: _t,
              Prisma: vt,
            };
          ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) &&
            (0, K.r)();
        },
        2991: (t, e, n) => {
          n.d(e, { R: () => s, Y: () => o });
          var r = n(2176),
            i = {};
          function s() {
            return (0, r.KV)()
              ? n.g
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
              ? self
              : i;
          }
          function o(t, e, n) {
            var r = n || s(),
              i = (r.__SENTRY__ = r.__SENTRY__ || {});
            return i[t] || (i[t] = e());
          }
        },
        2176: (t, e, n) => {
          function r() {
            return (
              !(
                "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
                __SENTRY_BROWSER_BUNDLE__
              ) &&
              "[object process]" ===
                Object.prototype.toString.call(
                  "undefined" != typeof process ? process : 0
                )
            );
          }
          function i(t, e) {
            return t.require(e);
          }
          n.d(e, { l$: () => i, KV: () => r }), (t = n.hmd(t));
        },
        1170: (t, e, n) => {
          n.d(e, { ph: () => u, yW: () => c });
          var r = n(2991),
            i = n(2176);
          t = n.hmd(t);
          var s = { nowSeconds: () => Date.now() / 1e3 },
            o = (0, i.KV)()
              ? (function () {
                  try {
                    return (0, i.l$)(t, "perf_hooks").performance;
                  } catch (t) {
                    return;
                  }
                })()
              : (function () {
                  const { performance: t } = (0, r.R)();
                  if (t && t.now)
                    return {
                      now: () => t.now(),
                      timeOrigin: Date.now() - t.now(),
                    };
                })(),
            a =
              void 0 === o
                ? s
                : { nowSeconds: () => (o.timeOrigin + o.now()) / 1e3 },
            c = s.nowSeconds.bind(s),
            u = a.nowSeconds.bind(a);
          let l;
          (() => {
            const { performance: t } = (0, r.R)();
            if (t && t.now) {
              var e = 36e5,
                n = t.now(),
                i = Date.now(),
                s = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e,
                o = s < e,
                a = t.timing && t.timing.navigationStart,
                c = "number" == typeof a ? Math.abs(a + n - i) : e;
              return o || c < e
                ? s <= c
                  ? ((l = "timeOrigin"), t.timeOrigin)
                  : ((l = "navigationStart"), a)
                : ((l = "dateNow"), i);
            }
            l = "none";
          })();
        },
        6679: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.BaseApiServer = void 0);
          var r = n(6455),
            i = (function () {
              function t(t, e) {
                this._xhrClient = this._initXhrClient(t, e);
              }
              return (
                (t.prototype._initXhrClient = function (t, e) {
                  var n = new r.XHRClient(t);
                  return (
                    n.setCustomHeader({ header: "x-api-key", value: e }), n
                  );
                }),
                t
              );
            })();
          e.BaseApiServer = i;
        },
        8987: function (t, e, n) {
          var r,
            i =
              (this && this.__extends) ||
              ((r = function (t, e) {
                return (
                  (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    }),
                  r(t, e)
                );
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                r(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            s =
              (this && this.__assign) ||
              function () {
                return (
                  (s =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i]);
                      return t;
                    }),
                  s.apply(this, arguments)
                );
              },
            o =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              },
            c =
              (this && this.__rest) ||
              function (t, e) {
                var n = {};
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) &&
                    e.indexOf(r) < 0 &&
                    (n[r] = t[r]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var i = 0;
                  for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                    e.indexOf(r[i]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                      (n[r[i]] = t[r[i]]);
                }
                return n;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AdEventServer = void 0);
          var u = n(8239),
            l = n(1230),
            d = n(5928),
            p = (function (t) {
              function e(e, n) {
                var r = this,
                  i = (0, d.getEnvVariable)(n, "AD_EVENT_SERVER_URL");
                return (
                  ((r = t.call(this, "".concat(i), e) || this)._environment =
                    n),
                  r
                );
              }
              return (
                i(e, t),
                (e.prototype._sendEvent = function (t, e) {
                  return o(this, void 0, void 0, function () {
                    var n, r;
                    return a(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (this._environment === l.ENVIRONMENT.STAGING)
                            return [2];
                          (n = e.requestId),
                            (r = c(e, ["requestId"])),
                            (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]),
                            [
                              4,
                              this._xhrClient.post("/events".concat(t), {
                                params: r,
                                headers: { "x-request-id": n },
                                keepalive: !0,
                              }),
                            ]
                          );
                        case 2:
                          return i.sent(), [3, 4];
                        case 3:
                          return (
                            i.sent(), console.log("Error sending event"), [3, 4]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (e.prototype.sendAdRequestEvent = function (t) {
                  this._sendEvent("/ad/request", t);
                }),
                (e.prototype.sendAdRequestCompleteEvent = function (t) {
                  this._sendEvent("/ad/request/complete", t);
                }),
                (e.prototype.sendAdRequestFailEvent = function (t) {
                  var e = t.deviceMetadata,
                    n = c(t, ["deviceMetadata"]),
                    r = s(s({}, n), {
                      userAgent: e.userAgent,
                      os: e.os,
                      browser: e.browser,
                      orientation: e.deviceOrientation,
                      deviceType: e.deviceType,
                      devicePlatform: e.devicePlatform,
                      ipAddress: e.ipAddress,
                    });
                  u.Profiler.captureException(
                    "AD_REQUEST_FAILED",
                    new Map(Object.entries(r))
                  ),
                    this._sendEvent("/ad/request/fail", t);
                }),
                (e.prototype.sendAdLoadCompleteEvent = function (t) {
                  this._sendEvent("/ad/load/complete", t);
                }),
                (e.prototype.sendAdLoadFailEvent = function (t) {
                  var e = t.deviceMetadata,
                    n = c(t, ["deviceMetadata"]),
                    r = s(s({}, n), {
                      userAgent: e.userAgent,
                      os: e.os,
                      browser: e.browser,
                      orientation: e.deviceOrientation,
                      deviceType: e.deviceType,
                      devicePlatform: e.devicePlatform,
                      ipAddress: e.ipAddress,
                    });
                  u.Profiler.captureException(
                    "AD_LOAD_FAILED",
                    new Map(Object.entries(r))
                  ),
                    this._sendEvent("/ad/load/fail", t);
                }),
                (e.prototype.sendAdClickEvent = function (t) {
                  this._sendEvent("/ad/click", t);
                }),
                (e.prototype.sendAdImpressionEvent = function (t) {
                  this._sendEvent("/ad/impression", t);
                }),
                e
              );
            })(n(6679).BaseApiServer);
          e.AdEventServer = p;
        },
        4591: function (t, e, n) {
          var r =
              (this && this.__assign) ||
              function () {
                return (
                  (r =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i]);
                      return t;
                    }),
                  r.apply(this, arguments)
                );
              },
            i =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            s =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AdEventServerController = void 0);
          var o = n(6486),
            a = n(4147),
            c = (function () {
              function t(t) {
                (this._deviceMetadata = {}), (this._eventServer = t);
              }
              return (
                (t.prototype._getDeviceInfo = function () {
                  return i(this, void 0, void 0, function () {
                    var t;
                    return s(this, function (e) {
                      switch (e.label) {
                        case 0:
                          if (Object.keys(this._deviceMetadata).length)
                            return [3, 4];
                          e.label = 1;
                        case 1:
                          return (
                            e.trys.push([1, 3, , 4]),
                            (t = this),
                            [4, (0, o.getDeviceInfo)()]
                          );
                        case 2:
                          return (t._deviceMetadata = e.sent()), [3, 4];
                        case 3:
                          return e.sent(), (this._deviceMetadata = {}), [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  });
                }),
                (t.prototype._getCommonEventProperties = function () {
                  return {
                    currentOrigin: window.location.origin,
                    currentPathname: window.location.pathname,
                    parentOrigin: window.parent.location.origin,
                    parentPathname: window.parent.location.pathname,
                    release: a.version,
                  };
                }),
                (t.prototype.trackOnAdRequested = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            n.sent(),
                            (e = this._getCommonEventProperties()),
                            this._eventServer.sendAdRequestEvent(
                              r(
                                r({ deviceMetadata: this._deviceMetadata }, e),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.trackOnAdRequestComplete = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            n.sent(),
                            (e = this._getCommonEventProperties()),
                            this._eventServer.sendAdRequestCompleteEvent(
                              r(
                                r({ deviceMetadata: this._deviceMetadata }, e),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.trackOnAdRequestFailed = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            n.sent(),
                            (e = this._getCommonEventProperties()),
                            this._eventServer.sendAdRequestFailEvent(
                              r(
                                r({ deviceMetadata: this._deviceMetadata }, e),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.trackOnAdLoadFailed = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            n.sent(),
                            (e = this._getCommonEventProperties()),
                            this._eventServer.sendAdLoadFailEvent(
                              r(
                                r({ deviceMetadata: this._deviceMetadata }, e),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.trackOnAdClick = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            n.sent(),
                            (e = this._getCommonEventProperties()),
                            this._eventServer.sendAdClickEvent(
                              r(
                                r({ deviceMetadata: this._deviceMetadata }, e),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.trackOnAdLoadComplete = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            n.sent(),
                            (e = this._getCommonEventProperties()),
                            this._eventServer.sendAdLoadCompleteEvent(
                              r(
                                r({ deviceMetadata: this._deviceMetadata }, e),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.trackOnAdImpression = function (t) {
                  return i(this, void 0, void 0, function () {
                    var e, n;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this._getDeviceInfo()];
                        case 1:
                          return (
                            i.sent(),
                            (e = new Date().toISOString()),
                            (n = this._getCommonEventProperties()),
                            this._eventServer.sendAdImpressionEvent(
                              r(
                                r(
                                  {
                                    deviceMetadata: this._deviceMetadata,
                                    triggeredAt: e,
                                  },
                                  n
                                ),
                                t
                              )
                            ),
                            [2]
                          );
                      }
                    });
                  });
                }),
                t
              );
            })();
          e.AdEventServerController = c;
        },
        737: function (t, e, n) {
          var r,
            i =
              (this && this.__extends) ||
              ((r = function (t, e) {
                return (
                  (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    }),
                  r(t, e)
                );
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                r(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            s =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            o =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              },
            a =
              (this && this.__rest) ||
              function (t, e) {
                var n = {};
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) &&
                    e.indexOf(r) < 0 &&
                    (n[r] = t[r]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var i = 0;
                  for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                    e.indexOf(r[i]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                      (n[r[i]] = t[r[i]]);
                }
                return n;
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AdServer = void 0);
          var c = n(6679),
            u = n(5928),
            l = (function (t) {
              function e(e, n) {
                var r = (0, u.getEnvVariable)(n, "AD_SERVER_URL");
                return t.call(this, r, e) || this;
              }
              return (
                i(e, t),
                (e.prototype.fetchAd = function (t) {
                  return s(this, void 0, void 0, function () {
                    var e, n, r;
                    return o(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (e = t.requestId),
                            (n = a(t, ["requestId"])),
                            (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]),
                            [
                              4,
                              this._xhrClient.get("/creatives", {
                                params: n,
                                headers: { "x-request-id": e },
                              }),
                            ]
                          );
                        case 2:
                          return (r = i.sent()), [3, 4];
                        case 3:
                          throw i.sent();
                        case 4:
                          return [2, r];
                      }
                    });
                  });
                }),
                e
              );
            })(c.BaseApiServer);
          e.AdServer = l;
        },
        3807: function (t, e) {
          var n =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            r =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AdServerController = void 0);
          var i = (function () {
            function t(t) {
              this._adServer = t;
            }
            return (
              (t.prototype.fetchBannerAd = function (t) {
                return n(this, void 0, void 0, function () {
                  var e, n, i, s, o;
                  return r(this, function (r) {
                    switch (r.label) {
                      case 0:
                        (e = t.placementId),
                          (n = t.walletAddress),
                          (i = t.userEmail),
                          (s = t.requestId),
                          (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          [
                            4,
                            this._adServer.fetchAd({
                              placementId: e,
                              walletAddress: n,
                              userEmail: i,
                              requestId: s,
                            }),
                          ]
                        );
                      case 2:
                        return (o = r.sent()), [3, 4];
                      case 3:
                        throw r.sent();
                      case 4:
                        return [2, o];
                    }
                  });
                });
              }),
              t
            );
          })();
          e.AdServerController = i;
        },
        5601: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.SENTRY_CAPTURED_ERROR_MESSAGES =
              e.SENTRY_TRANSACTION_NAMES =
              e.BANNER_AD_IMPRESSION_CONFIG =
              e.dsn =
              e.ENV =
                void 0),
            (e.ENV = {
              PRODUCTION: {
                AD_SERVER_URL: "https://www.persona3.tech",
                AD_EVENT_SERVER_URL: "https://www.persona3.tech",
              },
              STAGING: {
                AD_SERVER_URL: "https://staging.persona3.tech",
                AD_EVENT_SERVER_URL: "https://staging.persona3.tech",
              },
              DEVELOPMENT: {
                AD_SERVER_URL: "https://dev.persona3.tech",
                AD_EVENT_SERVER_URL: "https://dev.persona3.tech",
              },
            }),
            (e.dsn =
              "https://a3b5ba378c9c4177b3900df1b47f252f@o4505523013353472.ingest.sentry.io/4505550885879808"),
            (e.BANNER_AD_IMPRESSION_CONFIG = {
              THRESHOLD: 0.8,
              DELAY_IN_MS: 1e3,
            }),
            (e.SENTRY_TRANSACTION_NAMES = {
              SHOW_BANNER_AD: "Show Banner Ad Transaction",
            }),
            (e.SENTRY_CAPTURED_ERROR_MESSAGES = {
              AD_REQUEST_FAILED: "Ad Request Failed",
              AD_LOAD_FAILED: "Ad Load Failed",
              IP_SERVER_ERROR: "Could not get user's ip address",
            });
        },
        1219: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AdFactory = void 0);
          var r = n(8987),
            i = n(4591),
            s = n(737),
            o = n(3807),
            a = n(3280),
            c = (function () {
              function t(t, e) {
                (this._adServerController = new o.AdServerController(
                  new s.AdServer(t, e)
                )),
                  (this._adEventServerController =
                    new i.AdEventServerController(new r.AdEventServer(t, e))),
                  (this._environment = e),
                  (this._placementDOMMap = new Map());
              }
              return (
                (t.prototype.createBannerAd = function (t, e, n) {
                  return new a.BannerAd(
                    this._adEventServerController,
                    this._adServerController,
                    t,
                    e,
                    n,
                    this._environment
                  );
                }),
                t
              );
            })();
          e.AdFactory = c;
        },
        3280: function (t, e, n) {
          var r,
            i =
              (this && this.__extends) ||
              ((r = function (t, e) {
                return (
                  (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    }),
                  r(t, e)
                );
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = t;
                }
                r(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            s =
              (this && this.__assign) ||
              function () {
                return (
                  (s =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i]);
                      return t;
                    }),
                  s.apply(this, arguments)
                );
              },
            o =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            a =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.BannerAd = void 0);
          var c = n(1230),
            u = n(5928),
            l = n(3405),
            d = n(5601),
            p = (function (t) {
              function e(e, n, r, i, s, o) {
                var a = t.call(this) || this;
                return (
                  (a._requestId = ""),
                  (a._placementId = r),
                  (a._containerId = i),
                  (a._adConfig = s),
                  (a._adServerController = n),
                  (a._adEventController = e),
                  (a._environment = o),
                  a
                );
              }
              return (
                i(e, t),
                (e.prototype._fetchAd = function (t) {
                  var e, n, r, i, u, l;
                  return o(this, void 0, void 0, function () {
                    var o, d, p, h;
                    return a(this, function (a) {
                      switch (a.label) {
                        case 0:
                          this._adEventController.trackOnAdRequested(
                            s(
                              {
                                requestId: this._requestId,
                                placementId: this._placementId,
                              },
                              t
                            )
                          ),
                            (d =
                              null === (e = this._classTransaction) ||
                              void 0 === e
                                ? void 0
                                : e.startChild({
                                    op: "xhr",
                                    description: "Get /creatives",
                                  })),
                            (a.label = 1);
                        case 1:
                          return (
                            a.trys.push([1, 3, 4, 5]),
                            [
                              4,
                              this._adServerController.fetchBannerAd(
                                s(
                                  {
                                    placementId: this._placementId,
                                    requestId: this._requestId,
                                  },
                                  t
                                )
                              ),
                            ]
                          );
                        case 2:
                          return (o = a.sent()), [3, 5];
                        case 3:
                          return (
                            (p = a.sent()),
                            this._adEventController.trackOnAdRequestFailed(
                              s(
                                {
                                  placementId: this._placementId,
                                  requestId: this._requestId,
                                  errorMessage: null == p ? void 0 : p.message,
                                  errorStatus:
                                    null == p ? void 0 : p.statusCode,
                                },
                                t
                              )
                            ),
                            null == d || d.finish(),
                            null === (n = this._classTransaction) ||
                              void 0 === n ||
                              n.setTag(
                                "error",
                                null !== (r = null == p ? void 0 : p.message) &&
                                  void 0 !== r
                                  ? r
                                  : "Unknown Error while fetching banner ad"
                              ),
                            null === (i = this._classTransaction) ||
                              void 0 === i ||
                              i.finish(),
                            this._environment,
                            c.ENVIRONMENT.PRODUCTION,
                            [2]
                          );
                        case 4:
                          return null == d || d.finish(), [7];
                        case 5:
                          return o &&
                            (null ===
                              (l =
                                null === (u = o.data) || void 0 === u
                                  ? void 0
                                  : u.data) || void 0 === l
                              ? void 0
                              : l.id)
                            ? ((h = o.data),
                              this._adEventController.trackOnAdRequestComplete(
                                s(
                                  {
                                    placementId: this._placementId,
                                    requestId: this._requestId,
                                    creativeId: h.data.id,
                                  },
                                  t
                                )
                              ),
                              [2, h])
                            : (this._adEventController.trackOnAdRequestFailed(
                                s(
                                  {
                                    placementId: this._placementId,
                                    requestId: this._requestId,
                                    errorMessage:
                                      "Response not received or response has no id",
                                    errorStatus: null == o ? void 0 : o.status,
                                  },
                                  t
                                )
                              ),
                              [2]);
                      }
                    });
                  });
                }),
                (e.prototype._renderAd = function (t, e, n) {
                  var r, i, u;
                  return o(this, void 0, void 0, function () {
                    var o,
                      l,
                      p,
                      h,
                      f,
                      _,
                      v,
                      m,
                      g,
                      y,
                      b = this;
                    return a(this, function (a) {
                      return (
                        (o =
                          null === (r = this._classTransaction) || void 0 === r
                            ? void 0
                            : r.startChild({
                                op: "async",
                                description: "Render Ad",
                              })),
                        (l = n.creative),
                        (p = n.clientIdentity),
                        (h =
                          null !== (i = null == l ? void 0 : l.data) &&
                          void 0 !== i
                            ? i
                            : {}),
                        (f = h.dimensions),
                        (_ = h.mediaUrl),
                        (v = h.id),
                        (m = h.ctaUrl),
                        _
                          ? (this._environment === c.ENVIRONMENT.STAGING &&
                              ((g = this._getFallbackAd(f)),
                              (m = g.ctaUrl),
                              (_ = g.mediaUrl)),
                            null === (u = this._classTransaction) ||
                              void 0 === u ||
                              u.setTag("mediaUrl", _),
                            (y = this._generateCreative(e, f, _, m)),
                            e.addEventListener("click", function () {
                              b._adEventController.trackOnAdClick(
                                s(
                                  {
                                    placementId: b._placementId,
                                    requestId: b._requestId,
                                    creativeId: v,
                                  },
                                  p
                                )
                              );
                            }),
                            y.complete
                              ? (null == o || o.finish(),
                                this._getCreativeComputedWidth(t) &&
                                  this._appendBrandWatermark(e),
                                this._registerAdImpressionAndLoad(t, l, p, {
                                  impressionThreshold:
                                    d.BANNER_AD_IMPRESSION_CONFIG.THRESHOLD,
                                  delay:
                                    d.BANNER_AD_IMPRESSION_CONFIG.DELAY_IN_MS,
                                }))
                              : (y.addEventListener("load", function () {
                                  null == o || o.finish(),
                                    b._getCreativeComputedWidth(t) &&
                                      b._appendBrandWatermark(e),
                                    b._registerAdImpressionAndLoad(t, l, p, {
                                      impressionThreshold:
                                        d.BANNER_AD_IMPRESSION_CONFIG.THRESHOLD,
                                      delay:
                                        d.BANNER_AD_IMPRESSION_CONFIG
                                          .DELAY_IN_MS,
                                    });
                                }),
                                y.addEventListener("error", function () {
                                  null == o || o.finish(),
                                    b._handleAdLoadFailed(
                                      e,
                                      l,
                                      "Image failed to load",
                                      p
                                    );
                                })),
                            [2])
                          : (this._handleAdLoadFailed(
                              e,
                              l,
                              "Image URL is undefined",
                              p
                            ),
                            [2])
                      );
                    });
                  });
                }),
                (e.prototype._handleAdLoadFailed = function (t, e, n, r) {
                  var i,
                    o,
                    a,
                    c = null !== (i = e.data) && void 0 !== i ? i : {},
                    u = c.id,
                    l = c.dimensions;
                  null === (o = this._classTransaction) ||
                    void 0 === o ||
                    o.setTag("error", n),
                    this._adEventController.trackOnAdLoadFailed(
                      s(
                        {
                          creativeId: u,
                          placementId: this._placementId,
                          requestId: this._requestId,
                          errorMessage: n,
                        },
                        r
                      )
                    );
                  var d = this._getFallbackAd(l);
                  this._generateCreative(t, l, d.mediaUrl, d.ctaUrl),
                    null === (a = this._classTransaction) ||
                      void 0 === a ||
                      a.finish();
                }),
                (e.prototype._registerAdImpressionAndLoad = function (
                  t,
                  e,
                  n,
                  r
                ) {
                  var i,
                    o,
                    a,
                    c = (null !== (i = e.data) && void 0 !== i ? i : {}).id;
                  this._getCreativeComputedWidth(t)
                    ? (this._adEventController.trackOnAdLoadComplete(
                        s(
                          {
                            placementId: this._placementId,
                            requestId: this._requestId,
                            creativeId: c,
                          },
                          n
                        )
                      ),
                      this._registerAdImpression(t, c, n, {
                        impressionThreshold: 0,
                        delay: 0,
                      }),
                      this._registerAdImpression(t, c, n, r))
                    : (null === (o = this._classTransaction) ||
                        void 0 === o ||
                        o.setTag(
                          "error",
                          "Image has negligible width after loading"
                        ),
                      this._adEventController.trackOnAdLoadFailed(
                        s(
                          {
                            creativeId: c,
                            placementId: this._placementId,
                            requestId: this._requestId,
                            errorMessage:
                              "Image has negligible width after loading",
                          },
                          n
                        )
                      )),
                    null === (a = this._classTransaction) ||
                      void 0 === a ||
                      a.finish();
                }),
                (e.prototype._registerAdImpression = function (t, e, n, r) {
                  var i,
                    o = this,
                    a = r.delay,
                    c = r.impressionThreshold;
                  new IntersectionObserver(
                    function (r, c) {
                      r.forEach(function (r) {
                        r.isIntersecting
                          ? (i = setTimeout(function () {
                              o._adEventController.trackOnAdImpression(
                                s(
                                  {
                                    placementId: o._placementId,
                                    creativeId: e,
                                    requestId: o._requestId,
                                    visiblePercentage:
                                      100 * r.intersectionRatio,
                                  },
                                  n
                                )
                              ),
                                c.unobserve(t);
                            }, a))
                          : clearTimeout(i);
                      });
                    },
                    { threshold: c }
                  ).observe(t);
                }),
                (e.prototype._initRequest = function () {
                  var t;
                  (this._requestId = (0, u.getUniqueId)()),
                    null === (t = this._classTransaction) ||
                      void 0 === t ||
                      t.setTag("requestId", this._requestId);
                }),
                (e.prototype._appendBrandWatermark = function (t) {
                  var e = this._getWatermarkElement();
                  t.appendChild(e);
                }),
                (e.prototype.showAd = function (t) {
                  return o(this, void 0, void 0, function () {
                    var t, e;
                    return a(this, function (n) {
                      if (!(t = document.getElementById(this._containerId))) {
                        if (this._environment !== c.ENVIRONMENT.PRODUCTION)
                          throw new Error(
                            "No element found with given container id - ".concat(
                              this._containerId
                            )
                          );
                        return [2];
                      }
                      return (
                        this._isCreativePresent(t) ||
                          (this._initRequest(),
                          (e = document.createElement("div")).setAttribute(
                            "data-aaad",
                            "true"
                          ),
                          e.setAttribute(
                            "data-aa-adunit",
                            "/22181265/Test_abcd"
                          ),
                          e.setAttribute("data-aa-sizes", "[[970,90]]"),
                          t.appendChild(e),
                          (window.aaw = window.aaw || { cmd: [] }),
                          window.aaw.cmd.push(function () {
                            window.aaw.processAdsOnPage();
                          })),
                        [2]
                      );
                    });
                  });
                }),
                (e.prototype.setClassTransaction = function (t) {
                  var e, n, r, i, s;
                  (this._classTransaction = t),
                    null === (e = this._classTransaction) ||
                      void 0 === e ||
                      e.setTag("userAgent", window.navigator.userAgent),
                    null === (n = this._classTransaction) ||
                      void 0 === n ||
                      n.setTag("currentOrigin", window.location.origin),
                    null === (r = this._classTransaction) ||
                      void 0 === r ||
                      r.setTag("currentPathname", window.location.pathname),
                    null === (i = this._classTransaction) ||
                      void 0 === i ||
                      i.setTag("parentOrigin", window.parent.location.origin),
                    null === (s = this._classTransaction) ||
                      void 0 === s ||
                      s.setTag(
                        "parentPathname",
                        window.parent.location.pathname
                      );
                }),
                e
              );
            })(l.BannerAdHelper);
          e.BannerAd = p;
        },
        3405: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.BannerAdHelper = void 0);
          var r = n(5928),
            i = (function () {
              function t() {}
              return (
                (t.prototype._getFallbackAd = function (t) {
                  return {
                    mediaUrl: (0, r.getFallbackImageUrl)(t),
                    ctaUrl: "https://www.persona3.io",
                  };
                }),
                (t.prototype._generateCreative = function (t, e, n, r) {
                  var i = null != e ? e : {},
                    s = i.width,
                    o = i.height;
                  (t.style.maxWidth = "".concat(s, "px")),
                    (t.style.height = "".concat(o, "px"));
                  var a = document.createElement("a");
                  a.setAttribute("class", "persona-product"),
                    r && a.setAttribute("href", r),
                    a.setAttribute("target", "_blank");
                  var c = document.createElement("img");
                  return (
                    c.setAttribute("fetchpriority", "high"),
                    c.setAttribute("src", n),
                    c.setAttribute("alt", "Image by Persona"),
                    c.setAttribute("style", "width:100%; height:auto"),
                    a.appendChild(c),
                    t.replaceChildren(a),
                    c
                  );
                }),
                (t.prototype._getWatermarkElement = function () {
                  var t = "translateX(calc(100% - ".concat(18, "px))"),
                    e = document.createElement("a");
                  e.setAttribute("data-test", "persona-watermark"),
                    e.setAttribute("href", "https://www.persona3.io"),
                    e.setAttribute("target", "_blank"),
                    e.setAttribute(
                      "style",
                      "position:absolute; right:0; transition: transform 0.3s ease; background: rgba(0, 0, 0, 0.4); padding: 1px; text-decoration:none; transform: ".concat(
                        t,
                        "; font-family: Arial, Helvetica, sans-serif"
                      )
                    ),
                    (e.onclick = function (t) {
                      t.stopPropagation();
                    });
                  var n = document.createElement("div");
                  n.setAttribute(
                    "style",
                    "font-size:10px; display:flex; justify-content:center; align-items:center; gap: 4px; color:white;"
                  );
                  var r = document.createElement("img");
                  r.setAttribute(
                    "src",
                    "https://cdn.persona3.tech/assets/logos/logo-white-small.png"
                  ),
                    r.setAttribute("alt", "Persona"),
                    r.setAttribute(
                      "style",
                      "width:".concat(16, "px; height:").concat(16, "px")
                    );
                  var i = document.createTextNode("Ads By Persona");
                  return (
                    n.appendChild(r),
                    n.appendChild(i),
                    e.addEventListener("mouseover", function () {
                      e.style.transform = "translateX(0px)";
                    }),
                    e.addEventListener("mouseout", function () {
                      e.style.transform = t;
                    }),
                    e.appendChild(n),
                    e
                  );
                }),
                (t.prototype._isCreativePresent = function (t) {
                  return t.hasChildNodes();
                }),
                (t.prototype._getCreativeComputedWidth = function (t) {
                  var e = t.querySelector("div > a.persona-product");
                  return e ? e.offsetWidth : 0;
                }),
                t
              );
            })();
          e.BannerAdHelper = i;
        },
        798: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ClientIdentity = void 0);
          var r = n(5928),
            i = n(8239),
            s = (function () {
              function t() {}
              return (
                (t.prototype.setWalletAddress = function (t) {
                  (this.walletAddress = t), i.Profiler.setClientIdentity(this);
                }),
                (t.prototype.setUserEmail = function (t) {
                  (0, r.isValidEmail)(t) &&
                    ((this.userEmail = t), i.Profiler.setClientIdentity(this));
                }),
                t
              );
            })();
          e.ClientIdentity = s;
        },
        7090: function (t, e, n) {
          var r =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            i =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.SDKClient = void 0);
          var s = n(8239),
            o = n(1230),
            a = n(1219),
            c = n(798),
            u = (function () {
              function t(t) {
                var e = this;
                this.showBannerAd = function (t) {
                  var n = t.adUnitId,
                    o = t.containerId,
                    a = t.adConfig;
                  return r(e, void 0, void 0, function () {
                    var t, e;
                    return i(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (t = s.Profiler.startTransactionProfiling({
                              op: "transaction",
                              key: "SHOW_BANNER_AD",
                            })),
                            (e = this._adFactory.createBannerAd(
                              n,
                              o,
                              a
                            )).setClassTransaction(t),
                            [4, e.showAd(this._clientIdentity)]
                          );
                        case 1:
                          return r.sent(), [2];
                      }
                    });
                  });
                };
                var n = t.apiKey,
                  u = t.environment,
                  l = void 0 === u ? o.ENVIRONMENT.STAGING : u;
                (this._adFactory = new a.AdFactory(n, l)),
                  (this._clientIdentity = new c.ClientIdentity());
              }
              return (
                (t.prototype.setWalletAddress = function (t) {
                  this._clientIdentity.setWalletAddress(t);
                }),
                (t.prototype.setUserEmail = function (t) {
                  this._clientIdentity.setUserEmail(t);
                }),
                t
              );
            })();
          e.SDKClient = u;
        },
        2957: function (t, e) {
          var n,
            r =
              (this && this.__extends) ||
              ((n = function (t, e) {
                return (
                  (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    }),
                  n(t, e)
                );
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null"
                  );
                function r() {
                  this.constructor = t;
                }
                n(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((r.prototype = e.prototype), new r()));
              });
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.HttpError = void 0);
          var i = (function (t) {
            function e(e, n) {
              var r = this.constructor,
                i = t.call(this, "[Personaxyz error] - ".concat(e)) || this;
              return (
                (i.name = "HttpError"),
                Object.setPrototypeOf(i, r.prototype),
                (i.statusCode = n),
                i
              );
            }
            return r(e, t), e;
          })(Error);
          e.HttpError = i;
        },
        8239: function (t, e, n) {
          var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                      for (var i in (e = arguments[n]))
                        Object.prototype.hasOwnProperty.call(e, i) &&
                          (t[i] = e[i]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.Profiler = void 0);
          var i = n(5601),
            s = n(4147),
            o = n(7906);
          n(3525);
          var a = (function () {
            function t(t) {
              (this._sdkConfig = t), this._initProfiler();
            }
            return (
              (t.prototype._initProfiler = function () {
                var t = this._sdkConfig,
                  e = t.apiKey,
                  n = t.environment,
                  r = new o.BrowserClient({
                    integrations: [],
                    transport: o.makeFetchTransport,
                    stackParser: o.defaultStackParser,
                    environment: n,
                    dsn: i.dsn,
                    tracesSampleRate: 1,
                    release: s.version,
                  });
                (0, o.getCurrentHub)().bindClient(r),
                  (0, o.getCurrentHub)().configureScope(function (t) {
                    t.setTags({ apiKey: e });
                  });
              }),
              (t.startTransactionProfiling = function (t) {
                var e = t.op,
                  n = t.key,
                  s = t.data;
                return (0, o.startTransaction)(
                  r(
                    r({ name: i.SENTRY_TRANSACTION_NAMES[n] }, e && { op: e }),
                    s
                  )
                );
              }),
              (t.captureException = function (t, e) {
                var n = i.SENTRY_CAPTURED_ERROR_MESSAGES[t];
                (0, o.captureException)(new Error(n), function (t) {
                  return (
                    null == e ||
                      e.forEach(function (e, n) {
                        t.setTag(n, e);
                      }),
                    t
                  );
                });
              }),
              (t.setClientIdentity = function (t) {
                (0, o.setUser)(r({}, t));
              }),
              t
            );
          })();
          e.Profiler = a;
        },
        6455: function (t, e, n) {
          var r =
              (this && this.__assign) ||
              function () {
                return (
                  (r =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i]);
                      return t;
                    }),
                  r.apply(this, arguments)
                );
              },
            i =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            s =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.XHRClient = void 0);
          var o = n(2957),
            a = (function () {
              function t(t) {
                this._baseUrl = t;
              }
              return (
                (t.prototype.setCustomHeader = function (t) {
                  var e,
                    n = t.header,
                    i = t.value;
                  this._customHeaders = r(
                    r({}, this._customHeaders),
                    (((e = {})[n] = i), e)
                  );
                }),
                (t.prototype._getHeaders = function () {
                  return r(
                    { "Content-Type": "application/json" },
                    this._customHeaders
                  );
                }),
                (t.prototype._buildUrl = function (t, e) {
                  var n = new URL("".concat(this._baseUrl).concat(t));
                  return e
                    ? (Object.entries(e).forEach(function (t) {
                        var e = t[0],
                          r = t[1];
                        n.searchParams.append(e, r);
                      }),
                      n.toString())
                    : n.toString();
                }),
                (t.prototype.get = function (t, e) {
                  return i(this, void 0, void 0, function () {
                    var n, i, a, c, u, l;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          (n = this._getHeaders()), (s.label = 1);
                        case 1:
                          return (
                            s.trys.push([1, 4, , 5]),
                            [
                              4,
                              fetch(
                                this._buildUrl(
                                  t,
                                  null == e ? void 0 : e.params
                                ),
                                r(r({ method: "GET" }, e), {
                                  headers: r(
                                    r({}, n),
                                    null == e ? void 0 : e.headers
                                  ),
                                })
                              ),
                            ]
                          );
                        case 2:
                          return (
                            (i = s.sent()),
                            (a = i.status),
                            [
                              4,
                              i.json().catch(function (t) {
                                throw new o.HttpError(
                                  "Could not parse response body - ".concat(t),
                                  a
                                );
                              }),
                            ]
                          );
                        case 3:
                          if (!(c = s.sent()))
                            throw new o.HttpError(
                              "No response body received",
                              a
                            );
                          if (((u = (null != c ? c : {}).message), !i.ok))
                            throw new o.HttpError(u, a);
                          return [2, { data: c, status: a }];
                        case 4:
                          if ((l = s.sent()) instanceof SyntaxError)
                            throw new o.HttpError(
                              "There was a SyntaxError - ".concat(l.message)
                            );
                          throw l;
                        case 5:
                          return [2];
                      }
                    });
                  });
                }),
                (t.prototype.post = function (t, e) {
                  return i(this, void 0, void 0, function () {
                    var n, i, a, c, u, l;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          (n = this._getHeaders()), (s.label = 1);
                        case 1:
                          return (
                            s.trys.push([1, 4, , 5]),
                            [
                              4,
                              fetch(
                                this._buildUrl(t),
                                r(r({ method: "POST" }, e), {
                                  headers: r(
                                    r({}, n),
                                    null == e ? void 0 : e.headers
                                  ),
                                  body: JSON.stringify(
                                    null == e ? void 0 : e.params
                                  ),
                                })
                              ),
                            ]
                          );
                        case 2:
                          return (
                            (i = s.sent()),
                            (a = i.status),
                            [
                              4,
                              i.json().catch(function (t) {
                                throw new o.HttpError(
                                  "Could not parse response body - ".concat(t),
                                  a
                                );
                              }),
                            ]
                          );
                        case 3:
                          if (!(c = s.sent()))
                            throw new o.HttpError(
                              "No response body received",
                              a
                            );
                          if (((u = (null != c ? c : {}).message), !i.ok))
                            throw new o.HttpError(u, a);
                          return [2, { data: c, status: a }];
                        case 4:
                          if ((l = s.sent()) instanceof SyntaxError)
                            throw new o.HttpError(
                              "There was a SyntaxError - ".concat(l.message)
                            );
                          throw l;
                        case 5:
                          return [2];
                      }
                    });
                  });
                }),
                t
              );
            })();
          e.XHRClient = a;
        },
        1230: (t, e) => {
          var n, r;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AdEventType = e.ENVIRONMENT = void 0),
            ((r = e.ENVIRONMENT || (e.ENVIRONMENT = {})).PRODUCTION =
              "production"),
            (r.STAGING = "staging"),
            (r.DEVELOPMENT = "development"),
            ((n = e.AdEventType || (e.AdEventType = {})).ON_AD_REQUESTED =
              "onAdRequested"),
            (n.ON_AD_REQUEST_COMPLETE = "onAdRequestComplete"),
            (n.ON_AD_REQUEST_FAILED = "onAdRequestFailed"),
            (n.ON_AD_LOAD_COMPLETE = "onAdLoadComplete"),
            (n.ON_AD_LOAD_FAILED = "onAdLoadFailed"),
            (n.ON_AD_CLICK = "onAdClick"),
            (n.ON_AD_IMPRESSION = "onAdImpression");
        },
        6486: function (t, e, n) {
          var r =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            i =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getDeviceInfo = void 0);
          var s = n(5928);
          e.getDeviceInfo = function () {
            return r(void 0, void 0, void 0, function () {
              var t, e, n, r;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, (0, s.getIPAddress)()];
                  case 1:
                    return (
                      (t = i.sent()),
                      (e = o()),
                      (n = c()),
                      (r = a()),
                      [
                        2,
                        {
                          ipAddress: t,
                          userAgent: e,
                          deviceOrientation: r,
                          os: null == n ? void 0 : n.os,
                          browser: null == n ? void 0 : n.browser,
                          deviceType: null == n ? void 0 : n.deviceType,
                          devicePlatform: "web",
                        },
                      ]
                    );
                }
              });
            });
          };
          var o = function () {
              if (
                window &&
                (null === navigator || void 0 === navigator
                  ? void 0
                  : navigator.userAgent)
              )
                return navigator.userAgent;
            },
            a = function () {
              if (window)
                return window.matchMedia("(orientation: portrait)").matches
                  ? "portrait"
                  : "landscape";
            },
            c = function () {
              if (window) {
                var t = navigator.userAgent,
                  e = "",
                  n = "";
                return (
                  navigator.brave
                    ? (e = "Brave")
                    : t.indexOf("Chrome") > -1
                    ? (e = "Google Chrome")
                    : t.indexOf("Firefox") > -1
                    ? (e = "Mozilla Firefox")
                    : t.indexOf("Safari") > -1
                    ? (e = "Apple Safari")
                    : t.indexOf("Opera") > -1 || t.indexOf("OPR") > -1
                    ? (e = "Opera")
                    : t.indexOf("Edge") > -1
                    ? (e = "Microsoft Edge")
                    : t.indexOf("Trident") > -1 && (e = "Internet Explorer"),
                  t.indexOf("Windows") > -1
                    ? (n = "Windows")
                    : t.indexOf("iOS") > -1 ||
                      t.indexOf("iPhone") > -1 ||
                      t.indexOf("iPad") > -1
                    ? (n = "iOS")
                    : t.indexOf("Mac") > -1
                    ? (n = "Macintosh")
                    : t.indexOf("Android") > -1
                    ? (n = "Android")
                    : t.indexOf("Linux") > -1 && (n = "Linux"),
                  {
                    browser: e,
                    os: n,
                    deviceType: /Mobi/i.test(t)
                      ? "Mobile"
                      : /Tablet/i.test(t)
                      ? "Tablet"
                      : "Desktop",
                  }
                );
              }
            };
        },
        5928: function (t, e, n) {
          var r =
              (this && this.__assign) ||
              function () {
                return (
                  (r =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i]);
                      return t;
                    }),
                  r.apply(this, arguments)
                );
              },
            i =
              (this && this.__awaiter) ||
              function (t, e, n, r) {
                return new (n || (n = Promise))(function (i, s) {
                  function o(t) {
                    try {
                      c(r.next(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function a(t) {
                    try {
                      c(r.throw(t));
                    } catch (t) {
                      s(t);
                    }
                  }
                  function c(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof n
                          ? e
                          : new n(function (t) {
                              t(e);
                            })).then(o, a);
                  }
                  c((r = r.apply(t, e || [])).next());
                });
              },
            s =
              (this && this.__generator) ||
              function (t, e) {
                var n,
                  r,
                  i,
                  s,
                  o = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (s = { next: a(0), throw: a(1), return: a(2) }),
                  "function" == typeof Symbol &&
                    (s[Symbol.iterator] = function () {
                      return this;
                    }),
                  s
                );
                function a(a) {
                  return function (c) {
                    return (function (a) {
                      if (n)
                        throw new TypeError("Generator is already executing.");
                      for (; s && ((s = 0), a[0] && (o = 0)), o; )
                        try {
                          if (
                            ((n = 1),
                            r &&
                              (i =
                                2 & a[0]
                                  ? r.return
                                  : a[0]
                                  ? r.throw || ((i = r.return) && i.call(r), 0)
                                  : r.next) &&
                              !(i = i.call(r, a[1])).done)
                          )
                            return i;
                          switch (
                            ((r = 0), i && (a = [2 & a[0], i.value]), a[0])
                          ) {
                            case 0:
                            case 1:
                              i = a;
                              break;
                            case 4:
                              return o.label++, { value: a[1], done: !1 };
                            case 5:
                              o.label++, (r = a[1]), (a = [0]);
                              continue;
                            case 7:
                              (a = o.ops.pop()), o.trys.pop();
                              continue;
                            default:
                              if (
                                !(
                                  (i =
                                    (i = o.trys).length > 0 &&
                                    i[i.length - 1]) ||
                                  (6 !== a[0] && 2 !== a[0])
                                )
                              ) {
                                o = 0;
                                continue;
                              }
                              if (
                                3 === a[0] &&
                                (!i || (a[1] > i[0] && a[1] < i[3]))
                              ) {
                                o.label = a[1];
                                break;
                              }
                              if (6 === a[0] && o.label < i[1]) {
                                (o.label = i[1]), (i = a);
                                break;
                              }
                              if (i && o.label < i[2]) {
                                (o.label = i[2]), o.ops.push(a);
                                break;
                              }
                              i[2] && o.ops.pop(), o.trys.pop();
                              continue;
                          }
                          a = e.call(t, o);
                        } catch (t) {
                          (a = [6, t]), (r = 0);
                        } finally {
                          n = i = 0;
                        }
                      if (5 & a[0]) throw a[1];
                      return { value: a[0] ? a[1] : void 0, done: !0 };
                    })([a, c]);
                  };
                }
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isValidEmail =
              e.getUniqueId =
              e.getFallbackImageUrl =
              e.getEnvVariable =
              e.getAdDimensions =
              e.getIPAddress =
                void 0);
          var o = n(7429),
            a = n(5601),
            c = n(1230),
            u = n(8239);
          (e.getIPAddress = function () {
            return i(void 0, void 0, void 0, function () {
              var t, e, n;
              return s(this, function (r) {
                switch (r.label) {
                  case 0:
                    (t = ""), (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 4, , 5]), [4, fetch("https://jsonip.com")]
                    );
                  case 2:
                    return [4, r.sent().json()];
                  case 3:
                    return (e = r.sent()), (t = e.ip), [3, 5];
                  case 4:
                    return (
                      (n = r.sent()),
                      u.Profiler.captureException(
                        "IP_SERVER_ERROR",
                        new Map([
                          [
                            "errorMessage",
                            "Error Fetching ip - ".concat(n.message),
                          ],
                        ])
                      ),
                      [3, 5]
                    );
                  case 5:
                    return [2, t];
                }
              });
            });
          }),
            (e.getAdDimensions = function (t) {
              var e = t.split("x");
              return { width: e[0], height: e[1] };
            }),
            (e.getEnvVariable = function (t, e) {
              var n, i;
              return null !==
                (i =
                  null ===
                    (n = new Map([
                      [c.ENVIRONMENT.PRODUCTION, r({}, a.ENV.PRODUCTION)],
                      [c.ENVIRONMENT.STAGING, r({}, a.ENV.STAGING)],
                      [c.ENVIRONMENT.DEVELOPMENT, r({}, a.ENV.DEVELOPMENT)],
                    ]).get(t)) || void 0 === n
                    ? void 0
                    : n[e]) && void 0 !== i
                ? i
                : "";
            }),
            (e.getFallbackImageUrl = function (t) {
              var e = t.width,
                n = t.height;
              return "https://storage.googleapis.com/fallback-ad-inventory/"
                .concat(e, "x")
                .concat(n, ".png");
            }),
            (e.getUniqueId = function () {
              return (0, o.v4)();
            }),
            (e.isValidEmail = function (t) {
              var e;
              return Boolean(
                null ===
                  (e = t
                    .toLowerCase()
                    .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) || void 0 === e
                  ? void 0
                  : e.length
              );
            });
        },
        7429: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            Object.defineProperty(e, "NIL", {
              enumerable: !0,
              get: function () {
                return a.default;
              },
            }),
            Object.defineProperty(e, "parse", {
              enumerable: !0,
              get: function () {
                return d.default;
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return l.default;
              },
            }),
            Object.defineProperty(e, "v1", {
              enumerable: !0,
              get: function () {
                return r.default;
              },
            }),
            Object.defineProperty(e, "v3", {
              enumerable: !0,
              get: function () {
                return i.default;
              },
            }),
            Object.defineProperty(e, "v4", {
              enumerable: !0,
              get: function () {
                return s.default;
              },
            }),
            Object.defineProperty(e, "v5", {
              enumerable: !0,
              get: function () {
                return o.default;
              },
            }),
            Object.defineProperty(e, "validate", {
              enumerable: !0,
              get: function () {
                return u.default;
              },
            }),
            Object.defineProperty(e, "version", {
              enumerable: !0,
              get: function () {
                return c.default;
              },
            });
          var r = p(n(3990)),
            i = p(n(8237)),
            s = p(n(5355)),
            o = p(n(3764)),
            a = p(n(6314)),
            c = p(n(8464)),
            u = p(n(6435)),
            l = p(n(4008)),
            d = p(n(8222));
          function p(t) {
            return t && t.__esModule ? t : { default: t };
          }
        },
        4163: (t, e) => {
          function n(t) {
            return 14 + (((t + 64) >>> 9) << 4) + 1;
          }
          function r(t, e) {
            const n = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          function i(t, e, n, i, s, o) {
            return r(
              ((a = r(r(e, t), r(i, o))) << (c = s)) | (a >>> (32 - c)),
              n
            );
            var a, c;
          }
          function s(t, e, n, r, s, o, a) {
            return i((e & n) | (~e & r), t, e, s, o, a);
          }
          function o(t, e, n, r, s, o, a) {
            return i((e & r) | (n & ~r), t, e, s, o, a);
          }
          function a(t, e, n, r, s, o, a) {
            return i(e ^ n ^ r, t, e, s, o, a);
          }
          function c(t, e, n, r, s, o, a) {
            return i(n ^ (e | ~r), t, e, s, o, a);
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          e.default = function (t) {
            if ("string" == typeof t) {
              const e = unescape(encodeURIComponent(t));
              t = new Uint8Array(e.length);
              for (let n = 0; n < e.length; ++n) t[n] = e.charCodeAt(n);
            }
            return (function (t) {
              const e = [],
                n = 32 * t.length,
                r = "0123456789abcdef";
              for (let i = 0; i < n; i += 8) {
                const n = (t[i >> 5] >>> i % 32) & 255,
                  s = parseInt(r.charAt((n >>> 4) & 15) + r.charAt(15 & n), 16);
                e.push(s);
              }
              return e;
            })(
              (function (t, e) {
                (t[e >> 5] |= 128 << e % 32), (t[n(e) - 1] = e);
                let i = 1732584193,
                  u = -271733879,
                  l = -1732584194,
                  d = 271733878;
                for (let e = 0; e < t.length; e += 16) {
                  const n = i,
                    p = u,
                    h = l,
                    f = d;
                  (i = s(i, u, l, d, t[e], 7, -680876936)),
                    (d = s(d, i, u, l, t[e + 1], 12, -389564586)),
                    (l = s(l, d, i, u, t[e + 2], 17, 606105819)),
                    (u = s(u, l, d, i, t[e + 3], 22, -1044525330)),
                    (i = s(i, u, l, d, t[e + 4], 7, -176418897)),
                    (d = s(d, i, u, l, t[e + 5], 12, 1200080426)),
                    (l = s(l, d, i, u, t[e + 6], 17, -1473231341)),
                    (u = s(u, l, d, i, t[e + 7], 22, -45705983)),
                    (i = s(i, u, l, d, t[e + 8], 7, 1770035416)),
                    (d = s(d, i, u, l, t[e + 9], 12, -1958414417)),
                    (l = s(l, d, i, u, t[e + 10], 17, -42063)),
                    (u = s(u, l, d, i, t[e + 11], 22, -1990404162)),
                    (i = s(i, u, l, d, t[e + 12], 7, 1804603682)),
                    (d = s(d, i, u, l, t[e + 13], 12, -40341101)),
                    (l = s(l, d, i, u, t[e + 14], 17, -1502002290)),
                    (u = s(u, l, d, i, t[e + 15], 22, 1236535329)),
                    (i = o(i, u, l, d, t[e + 1], 5, -165796510)),
                    (d = o(d, i, u, l, t[e + 6], 9, -1069501632)),
                    (l = o(l, d, i, u, t[e + 11], 14, 643717713)),
                    (u = o(u, l, d, i, t[e], 20, -373897302)),
                    (i = o(i, u, l, d, t[e + 5], 5, -701558691)),
                    (d = o(d, i, u, l, t[e + 10], 9, 38016083)),
                    (l = o(l, d, i, u, t[e + 15], 14, -660478335)),
                    (u = o(u, l, d, i, t[e + 4], 20, -405537848)),
                    (i = o(i, u, l, d, t[e + 9], 5, 568446438)),
                    (d = o(d, i, u, l, t[e + 14], 9, -1019803690)),
                    (l = o(l, d, i, u, t[e + 3], 14, -187363961)),
                    (u = o(u, l, d, i, t[e + 8], 20, 1163531501)),
                    (i = o(i, u, l, d, t[e + 13], 5, -1444681467)),
                    (d = o(d, i, u, l, t[e + 2], 9, -51403784)),
                    (l = o(l, d, i, u, t[e + 7], 14, 1735328473)),
                    (u = o(u, l, d, i, t[e + 12], 20, -1926607734)),
                    (i = a(i, u, l, d, t[e + 5], 4, -378558)),
                    (d = a(d, i, u, l, t[e + 8], 11, -2022574463)),
                    (l = a(l, d, i, u, t[e + 11], 16, 1839030562)),
                    (u = a(u, l, d, i, t[e + 14], 23, -35309556)),
                    (i = a(i, u, l, d, t[e + 1], 4, -1530992060)),
                    (d = a(d, i, u, l, t[e + 4], 11, 1272893353)),
                    (l = a(l, d, i, u, t[e + 7], 16, -155497632)),
                    (u = a(u, l, d, i, t[e + 10], 23, -1094730640)),
                    (i = a(i, u, l, d, t[e + 13], 4, 681279174)),
                    (d = a(d, i, u, l, t[e], 11, -358537222)),
                    (l = a(l, d, i, u, t[e + 3], 16, -722521979)),
                    (u = a(u, l, d, i, t[e + 6], 23, 76029189)),
                    (i = a(i, u, l, d, t[e + 9], 4, -640364487)),
                    (d = a(d, i, u, l, t[e + 12], 11, -421815835)),
                    (l = a(l, d, i, u, t[e + 15], 16, 530742520)),
                    (u = a(u, l, d, i, t[e + 2], 23, -995338651)),
                    (i = c(i, u, l, d, t[e], 6, -198630844)),
                    (d = c(d, i, u, l, t[e + 7], 10, 1126891415)),
                    (l = c(l, d, i, u, t[e + 14], 15, -1416354905)),
                    (u = c(u, l, d, i, t[e + 5], 21, -57434055)),
                    (i = c(i, u, l, d, t[e + 12], 6, 1700485571)),
                    (d = c(d, i, u, l, t[e + 3], 10, -1894986606)),
                    (l = c(l, d, i, u, t[e + 10], 15, -1051523)),
                    (u = c(u, l, d, i, t[e + 1], 21, -2054922799)),
                    (i = c(i, u, l, d, t[e + 8], 6, 1873313359)),
                    (d = c(d, i, u, l, t[e + 15], 10, -30611744)),
                    (l = c(l, d, i, u, t[e + 6], 15, -1560198380)),
                    (u = c(u, l, d, i, t[e + 13], 21, 1309151649)),
                    (i = c(i, u, l, d, t[e + 4], 6, -145523070)),
                    (d = c(d, i, u, l, t[e + 11], 10, -1120210379)),
                    (l = c(l, d, i, u, t[e + 2], 15, 718787259)),
                    (u = c(u, l, d, i, t[e + 9], 21, -343485551)),
                    (i = r(i, n)),
                    (u = r(u, p)),
                    (l = r(l, h)),
                    (d = r(d, f));
                }
                return [i, u, l, d];
              })(
                (function (t) {
                  if (0 === t.length) return [];
                  const e = 8 * t.length,
                    r = new Uint32Array(n(e));
                  for (let n = 0; n < e; n += 8)
                    r[n >> 5] |= (255 & t[n / 8]) << n % 32;
                  return r;
                })(t),
                8 * t.length
              )
            );
          };
        },
        4790: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var n = {
            randomUUID:
              "undefined" != typeof crypto &&
              crypto.randomUUID &&
              crypto.randomUUID.bind(crypto),
          };
          e.default = n;
        },
        6314: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0),
            (e.default = "00000000-0000-0000-0000-000000000000");
        },
        8222: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r,
            i = (r = n(6435)) && r.__esModule ? r : { default: r };
          e.default = function (t) {
            if (!(0, i.default)(t)) throw TypeError("Invalid UUID");
            let e;
            const n = new Uint8Array(16);
            return (
              (n[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
              (n[1] = (e >>> 16) & 255),
              (n[2] = (e >>> 8) & 255),
              (n[3] = 255 & e),
              (n[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
              (n[5] = 255 & e),
              (n[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
              (n[7] = 255 & e),
              (n[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
              (n[9] = 255 & e),
              (n[10] =
                ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
              (n[11] = (e / 4294967296) & 255),
              (n[12] = (e >>> 24) & 255),
              (n[13] = (e >>> 16) & 255),
              (n[14] = (e >>> 8) & 255),
              (n[15] = 255 & e),
              n
            );
          };
        },
        58: (t, e) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0),
            (e.default =
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
        },
        3319: (t, e) => {
          let n;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function () {
              if (
                !n &&
                ((n =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto)),
                !n)
              )
                throw new Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return n(r);
            });
          const r = new Uint8Array(16);
        },
        3757: (t, e) => {
          function n(t, e, n, r) {
            switch (t) {
              case 0:
                return (e & n) ^ (~e & r);
              case 1:
              case 3:
                return e ^ n ^ r;
              case 2:
                return (e & n) ^ (e & r) ^ (n & r);
            }
          }
          function r(t, e) {
            return (t << e) | (t >>> (32 - e));
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          e.default = function (t) {
            const e = [1518500249, 1859775393, 2400959708, 3395469782],
              i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof t) {
              const e = unescape(encodeURIComponent(t));
              t = [];
              for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
            } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
            t.push(128);
            const s = t.length / 4 + 2,
              o = Math.ceil(s / 16),
              a = new Array(o);
            for (let e = 0; e < o; ++e) {
              const n = new Uint32Array(16);
              for (let r = 0; r < 16; ++r)
                n[r] =
                  (t[64 * e + 4 * r] << 24) |
                  (t[64 * e + 4 * r + 1] << 16) |
                  (t[64 * e + 4 * r + 2] << 8) |
                  t[64 * e + 4 * r + 3];
              a[e] = n;
            }
            (a[o - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
              (a[o - 1][14] = Math.floor(a[o - 1][14])),
              (a[o - 1][15] = (8 * (t.length - 1)) & 4294967295);
            for (let t = 0; t < o; ++t) {
              const s = new Uint32Array(80);
              for (let e = 0; e < 16; ++e) s[e] = a[t][e];
              for (let t = 16; t < 80; ++t)
                s[t] = r(s[t - 3] ^ s[t - 8] ^ s[t - 14] ^ s[t - 16], 1);
              let o = i[0],
                c = i[1],
                u = i[2],
                l = i[3],
                d = i[4];
              for (let t = 0; t < 80; ++t) {
                const i = Math.floor(t / 20),
                  a = (r(o, 5) + n(i, c, u, l) + d + e[i] + s[t]) >>> 0;
                (d = l), (l = u), (u = r(c, 30) >>> 0), (c = o), (o = a);
              }
              (i[0] = (i[0] + o) >>> 0),
                (i[1] = (i[1] + c) >>> 0),
                (i[2] = (i[2] + u) >>> 0),
                (i[3] = (i[3] + l) >>> 0),
                (i[4] = (i[4] + d) >>> 0);
            }
            return [
              (i[0] >> 24) & 255,
              (i[0] >> 16) & 255,
              (i[0] >> 8) & 255,
              255 & i[0],
              (i[1] >> 24) & 255,
              (i[1] >> 16) & 255,
              (i[1] >> 8) & 255,
              255 & i[1],
              (i[2] >> 24) & 255,
              (i[2] >> 16) & 255,
              (i[2] >> 8) & 255,
              255 & i[2],
              (i[3] >> 24) & 255,
              (i[3] >> 16) & 255,
              (i[3] >> 8) & 255,
              255 & i[3],
              (i[4] >> 24) & 255,
              (i[4] >> 16) & 255,
              (i[4] >> 8) & 255,
              255 & i[4],
            ];
          };
        },
        4008: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0),
            (e.unsafeStringify = o);
          var r,
            i = (r = n(6435)) && r.__esModule ? r : { default: r };
          const s = [];
          for (let t = 0; t < 256; ++t) s.push((t + 256).toString(16).slice(1));
          function o(t, e = 0) {
            return (
              s[t[e + 0]] +
              s[t[e + 1]] +
              s[t[e + 2]] +
              s[t[e + 3]] +
              "-" +
              s[t[e + 4]] +
              s[t[e + 5]] +
              "-" +
              s[t[e + 6]] +
              s[t[e + 7]] +
              "-" +
              s[t[e + 8]] +
              s[t[e + 9]] +
              "-" +
              s[t[e + 10]] +
              s[t[e + 11]] +
              s[t[e + 12]] +
              s[t[e + 13]] +
              s[t[e + 14]] +
              s[t[e + 15]]
            ).toLowerCase();
          }
          e.default = function (t, e = 0) {
            const n = o(t, e);
            if (!(0, i.default)(n))
              throw TypeError("Stringified UUID is invalid");
            return n;
          };
        },
        3990: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r,
            i = (r = n(3319)) && r.__esModule ? r : { default: r },
            s = n(4008);
          let o,
            a,
            c = 0,
            u = 0;
          e.default = function (t, e, n) {
            let r = (e && n) || 0;
            const l = e || new Array(16);
            let d = (t = t || {}).node || o,
              p = void 0 !== t.clockseq ? t.clockseq : a;
            if (null == d || null == p) {
              const e = t.random || (t.rng || i.default)();
              null == d && (d = o = [1 | e[0], e[1], e[2], e[3], e[4], e[5]]),
                null == p && (p = a = 16383 & ((e[6] << 8) | e[7]));
            }
            let h = void 0 !== t.msecs ? t.msecs : Date.now(),
              f = void 0 !== t.nsecs ? t.nsecs : u + 1;
            const _ = h - c + (f - u) / 1e4;
            if (
              (_ < 0 && void 0 === t.clockseq && (p = (p + 1) & 16383),
              (_ < 0 || h > c) && void 0 === t.nsecs && (f = 0),
              f >= 1e4)
            )
              throw new Error(
                "uuid.v1(): Can't create more than 10M uuids/sec"
              );
            (c = h), (u = f), (a = p), (h += 122192928e5);
            const v = (1e4 * (268435455 & h) + f) % 4294967296;
            (l[r++] = (v >>> 24) & 255),
              (l[r++] = (v >>> 16) & 255),
              (l[r++] = (v >>> 8) & 255),
              (l[r++] = 255 & v);
            const m = ((h / 4294967296) * 1e4) & 268435455;
            (l[r++] = (m >>> 8) & 255),
              (l[r++] = 255 & m),
              (l[r++] = ((m >>> 24) & 15) | 16),
              (l[r++] = (m >>> 16) & 255),
              (l[r++] = (p >>> 8) | 128),
              (l[r++] = 255 & p);
            for (let t = 0; t < 6; ++t) l[r + t] = d[t];
            return e || (0, s.unsafeStringify)(l);
          };
        },
        8237: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r = s(n(7925)),
            i = s(n(4163));
          function s(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var o = (0, r.default)("v3", 48, i.default);
          e.default = o;
        },
        7925: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.URL = e.DNS = void 0),
            (e.default = function (t, e, n) {
              function r(t, r, o, a) {
                var c;
                if (
                  ("string" == typeof t &&
                    (t = (function (t) {
                      t = unescape(encodeURIComponent(t));
                      const e = [];
                      for (let n = 0; n < t.length; ++n)
                        e.push(t.charCodeAt(n));
                      return e;
                    })(t)),
                  "string" == typeof r && (r = (0, s.default)(r)),
                  16 !== (null === (c = r) || void 0 === c ? void 0 : c.length))
                )
                  throw TypeError(
                    "Namespace must be array-like (16 iterable integer values, 0-255)"
                  );
                let u = new Uint8Array(16 + t.length);
                if (
                  (u.set(r),
                  u.set(t, r.length),
                  (u = n(u)),
                  (u[6] = (15 & u[6]) | e),
                  (u[8] = (63 & u[8]) | 128),
                  o)
                ) {
                  a = a || 0;
                  for (let t = 0; t < 16; ++t) o[a + t] = u[t];
                  return o;
                }
                return (0, i.unsafeStringify)(u);
              }
              try {
                r.name = t;
              } catch (t) {}
              return (r.DNS = o), (r.URL = a), r;
            });
          var r,
            i = n(4008),
            s = (r = n(8222)) && r.__esModule ? r : { default: r };
          const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
          e.DNS = o;
          const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
          e.URL = a;
        },
        5355: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r = o(n(4790)),
            i = o(n(3319)),
            s = n(4008);
          function o(t) {
            return t && t.__esModule ? t : { default: t };
          }
          e.default = function (t, e, n) {
            if (r.default.randomUUID && !e && !t) return r.default.randomUUID();
            const o = (t = t || {}).random || (t.rng || i.default)();
            if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e)) {
              n = n || 0;
              for (let t = 0; t < 16; ++t) e[n + t] = o[t];
              return e;
            }
            return (0, s.unsafeStringify)(o);
          };
        },
        3764: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r = s(n(7925)),
            i = s(n(3757));
          function s(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var o = (0, r.default)("v5", 80, i.default);
          e.default = o;
        },
        6435: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r,
            i = (r = n(58)) && r.__esModule ? r : { default: r };
          e.default = function (t) {
            return "string" == typeof t && i.default.test(t);
          };
        },
        8464: (t, e, n) => {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var r,
            i = (r = n(6435)) && r.__esModule ? r : { default: r };
          e.default = function (t) {
            if (!(0, i.default)(t)) throw TypeError("Invalid UUID");
            return parseInt(t.slice(14, 15), 16);
          };
        },
        4147: (t) => {
          t.exports = JSON.parse(
            '{"name":"@personaxyz/ad-sdk","version":"0.0.12","description":"","main":"dist/index.js","scripts":{"start":"npx tsc","build":"rimraf ./dist && webpack --mode production","prepare":"rimraf ./dist && npm run test && npm run build","test":"jest","test-coverage":"jest --verbose --coverage --coverageReporters=\'text-summary\'"},"keywords":[],"author":"","license":"ISC","devDependencies":{"@types/jest":"^29.5.1","@types/node":"^20.1.2","@types/uuid":"^9.0.1","compression-webpack-plugin":"^10.0.0","jest":"^29.5.0","jest-environment-jsdom":"^29.5.0","jest-fetch-mock":"^3.0.3","rimraf":"^5.0.0","ts-jest":"^29.1.0","ts-loader":"^9.4.2","typescript":"^5.0.4","webpack":"^5.83.1","webpack-bundle-analyzer":"^4.9.0","webpack-cli":"^5.1.1"},"dependencies":{"@sentry/browser":"7.11.1","@sentry/tracing":"7.59.3","@sentry/webpack-plugin":"^2.4.0","uuid":"^9.0.0"}}'
          );
        },
      },
      e = {};
    function n(r) {
      var i = e[r];
      if (void 0 !== i) return i.exports;
      var s = (e[r] = { id: r, loaded: !1, exports: {} });
      return t[r].call(s.exports, s, s.exports, n), (s.loaded = !0), s.exports;
    }
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.hmd = (t) => (
        (t = Object.create(t)).children || (t.children = []),
        Object.defineProperty(t, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                t.id
            );
          },
        }),
        t
      )),
      (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (n.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (() => {
        var t = r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PersonaAdSDK = void 0);
        var e = n(8239),
          i = n(7090),
          s = (function () {
            function t(t) {
              (this._sdkConfig = t), new e.Profiler(t);
            }
            return (
              (t.prototype.getClient = function () {
                var t = new i.SDKClient(this._sdkConfig);
                return this.injectAdapexScript(), this.overridePostAPICall(), t;
              }),
              (t.prototype.injectAdapexScript = function () {
                var t = document.createElement("script");
                (t.async = !0),
                  t.setAttribute("src", "https://cdn.adapex.io/hb/aaw.test.js");
                var e = document.getElementsByTagName("head")[0];
                e ? e.appendChild(t) : (e = document.createElement("head"));
              }),
              (t.prototype.overridePostAPICall = function () {
                var t = new XMLHttpRequest();
                t.open(
                  "POST",
                  "https://adops.ro/testBiddingServer.php?v=2020?cb=54674905",
                  !0
                ),
                  t.setRequestHeader("Content-Type", "application/json"),
                  (t.onreadystatechange = function () {
                    if (4 === t.readyState)
                      if (200 === t.status) {
                        var e = t.responseText;
                        console.log(e);
                      } else console.error("Error:", t.status);
                  });
                var e = JSON.stringify({ key: "value" });
                t.send(e);
              }),
              (t.prototype.overrideAPICall = function () {
                var t = new XMLHttpRequest();
                t.open(
                  "GET",
                  "https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=localhost%3A3000",
                  !0
                ),
                  (t.onreadystatechange = function () {
                    if (4 === t.readyState && 200 === t.status) {
                      var e = t.responseText;
                      console.log(e);
                    }
                  }),
                  t.send();
              }),
              t
            );
          })();
        t.PersonaAdSDK = s;
      })(),
      r
    );
  })()
);
