import {
    a as H,
    c as J,
    e as B
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var de = H(fe => {
    "use strict";
    var D = B();

    function mn(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var vn = typeof Object.is == "function" ? Object.is : mn,
        _n = D.useState,
        Sn = D.useEffect,
        wn = D.useLayoutEffect,
        xn = D.useDebugValue;

    function bn(e, t) {
        var n = t(),
            s = _n({
                inst: {
                    value: n,
                    getSnapshot: t
                }
            }),
            r = s[0].inst,
            i = s[1];
        return wn(function() {
            r.value = n, r.getSnapshot = t, $t(r) && i({
                inst: r
            })
        }, [e, n, t]), Sn(function() {
            return $t(r) && i({
                inst: r
            }), e(function() {
                $t(r) && i({
                    inst: r
                })
            })
        }, [e]), xn(n), n
    }

    function $t(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !vn(e, n)
        } catch (s) {
            return !0
        }
    }

    function En(e, t) {
        return t()
    }
    var Tn = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? En : bn;
    fe.useSyncExternalStore = D.useSyncExternalStore !== void 0 ? D.useSyncExternalStore : Tn
});
var Ot = H((ws, he) => {
    "use strict";
    he.exports = de()
});
var pe = H(le => {
    "use strict";
    var ot = B(),
        An = Ot();

    function In(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var kn = typeof Object.is == "function" ? Object.is : In,
        $n = An.useSyncExternalStore,
        On = ot.useRef,
        Rn = ot.useEffect,
        Cn = ot.useMemo,
        Mn = ot.useDebugValue;
    le.useSyncExternalStoreWithSelector = function(e, t, n, s, r) {
        var i = On(null);
        if (i.current === null) {
            var o = {
                hasValue: !1,
                value: null
            };
            i.current = o
        } else o = i.current;
        i = Cn(function() {
            function a(d) {
                if (!u) {
                    if (u = !0, l = d, d = s(d), r !== void 0 && o.hasValue) {
                        var h = o.value;
                        if (r(h, d)) return f = h
                    }
                    return f = d
                }
                if (h = f, kn(l, d)) return h;
                var p = s(d);
                return r !== void 0 && r(h, p) ? h : (l = d, f = p)
            }
            var u = !1,
                l, f, y = n === void 0 ? null : n;
            return [function() {
                return a(t())
            }, y === null ? void 0 : function() {
                return a(y())
            }]
        }, [t, n, s, r]);
        var c = $n(e, i[0], i[1]);
        return Rn(function() {
            o.hasValue = !0, o.value = c
        }, [c]), Mn(c), c
    }
});
var ge = H((bs, ye) => {
    "use strict";
    ye.exports = pe()
});
var L = J(B()),
    A = J(B());
var Rt = J(B()),
    Se = Rt.useLayoutEffect,
    Ct = Se;

function we() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u" || typeof window < "u") return window
}

function xe() {
    let e = we();
    if (e.__xstate__) return e.__xstate__
}
var Mt = e => {
    if (typeof window > "u") return;
    let t = xe();
    t && t.register(e)
};
var F = class {
        constructor(t) {
            this._process = t, this._active = !1, this._current = null, this._last = null
        }
        start() {
            this._active = !0, this.flush()
        }
        clear() {
            this._current && (this._current.next = null, this._last = this._current)
        }
        enqueue(t) {
            let n = {
                value: t,
                next: null
            };
            if (this._current) {
                this._last.next = n, this._last = n;
                return
            }
            this._current = n, this._last = n, this._active && this.flush()
        }
        flush() {
            for (; this._current;) {
                let t = this._current;
                this._process(t.value), this._current = t.next
            }
            this._last = null
        }
    },
    ht = ".",
    be = "",
    lt = "",
    Ee = "#",
    Te = "*",
    Jt = "xstate.init",
    Bt = "xstate.error",
    W = "xstate.stop";

function Ae(e, t) {
    return {
        type: `xstate.after.${e}.${t}`
    }
}

function ut(e, t) {
    return {
        type: `xstate.done.state.${e}`,
        output: t
    }
}

function Ie(e, t) {
    return {
        type: `xstate.done.actor.${e}`,
        output: t,
        actorId: e
    }
}

function pt(e, t) {
    return {
        type: `xstate.error.actor.${e}`,
        error: t,
        actorId: e
    }
}

function yt(e) {
    return {
        type: Jt,
        input: e
    }
}

function S(e) {
    setTimeout(() => {
        throw e
    })
}
var ke = typeof Symbol == "function" && Symbol.observable || "@@observable";

function gt(e, t) {
    let n = jt(e),
        s = jt(t);
    return typeof s == "string" ? typeof n == "string" ? s === n : !1 : typeof n == "string" ? n in s : Object.keys(n).every(r => r in s ? gt(n[r], s[r]) : !1)
}

function tt(e) {
    if (Xt(e)) return e;
    let t = [],
        n = "";
    for (let s = 0; s < e.length; s++) {
        switch (e.charCodeAt(s)) {
            case 92:
                n += e[s + 1], s++;
                continue;
            case 46:
                t.push(n), n = "";
                continue
        }
        n += e[s]
    }
    return t.push(n), t
}

function jt(e) {
    if (re(e)) return e.value;
    if (typeof e != "string") return e;
    let t = tt(e);
    return Wt(t)
}

function Wt(e) {
    if (e.length === 1) return e[0];
    let t = {},
        n = t;
    for (let s = 0; s < e.length - 1; s++)
        if (s === e.length - 2) n[e[s]] = e[s + 1];
        else {
            let r = n;
            n = {}, r[e[s]] = n
        }
    return t
}

function mt(e, t) {
    let n = {},
        s = Object.keys(e);
    for (let r = 0; r < s.length; r++) {
        let i = s[r];
        n[i] = t(e[i], i, e, r)
    }
    return n
}

function zt(e) {
    return Xt(e) ? e : [e]
}

function w(e) {
    return e === void 0 ? [] : zt(e)
}

function ft(e, t, n, s) {
    return typeof e == "function" ? e({
        context: t,
        event: n,
        self: s
    }) : e
}

function Xt(e) {
    return Array.isArray(e)
}

function $e(e) {
    return e.type.startsWith("xstate.error.actor")
}

function I(e) {
    return zt(e).map(t => typeof t > "u" || typeof t == "string" ? {
        target: t
    } : t)
}

function Gt(e) {
    if (!(e === void 0 || e === be)) return w(e)
}

function R(e, t, n) {
    var i, o, c;
    let s = typeof e == "object",
        r = s ? e : void 0;
    return {
        next: (i = s ? e.next : e) == null ? void 0 : i.bind(r),
        error: (o = s ? e.error : t) == null ? void 0 : o.bind(r),
        complete: (c = s ? e.complete : n) == null ? void 0 : c.bind(r)
    }
}

function vt(e, t) {
    return `${t}.${e}`
}

function X(e, t) {
    let n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!n) return e.implementations.actors[t];
    let [, s, r] = n, o = e.getStateNodeById(r).config.invoke;
    return (Array.isArray(o) ? o[s] : o).src
}

function Pt(e, t) {
    return `${e.sessionId}.${t}`
}
var Oe = 0;

function Re(e, t) {
    var y;
    let n = new Map,
        s = new Map,
        r = new WeakMap,
        i = new Set,
        o = {},
        {
            clock: c,
            logger: a
        } = t,
        u = {
            schedule: (d, h, p, g, _ = Math.random().toString(36).slice(2)) => {
                let q = {
                        source: d,
                        target: h,
                        event: p,
                        delay: g,
                        id: _,
                        startedAt: Date.now()
                    },
                    x = Pt(d, _);
                f._snapshot._scheduledEvents[x] = q;
                let _e = c.setTimeout(() => {
                    delete o[x], delete f._snapshot._scheduledEvents[x], f._relay(d, h, p)
                }, g);
                o[x] = _e
            },
            cancel: (d, h) => {
                let p = Pt(d, h),
                    g = o[p];
                delete o[p], delete f._snapshot._scheduledEvents[p], g !== void 0 && c.clearTimeout(g)
            },
            cancelAll: d => {
                for (let h in f._snapshot._scheduledEvents) {
                    let p = f._snapshot._scheduledEvents[h];
                    p.source === d && u.cancel(d, p.id)
                }
            }
        },
        l = d => {
            if (!i.size) return;
            let h = { ...d,
                rootId: e.sessionId
            };
            i.forEach(p => {
                var g;
                return (g = p.next) == null ? void 0 : g.call(p, h)
            })
        },
        f = {
            _snapshot: {
                _scheduledEvents: (y = (t == null ? void 0 : t.snapshot) && t.snapshot.scheduler) != null ? y : {}
            },
            _bookId: () => `x:${Oe++}`,
            _register: (d, h) => (n.set(d, h), d),
            _unregister: d => {
                n.delete(d.sessionId);
                let h = r.get(d);
                h !== void 0 && (s.delete(h), r.delete(d))
            },
            get: d => s.get(d),
            _set: (d, h) => {
                let p = s.get(d);
                if (p && p !== h) throw new Error(`Actor with system ID '${d}' already exists.`);
                s.set(d, h), r.set(h, d)
            },
            inspect: d => {
                let h = R(d);
                return i.add(h), {
                    unsubscribe() {
                        i.delete(h)
                    }
                }
            },
            _sendInspectionEvent: l,
            _relay: (d, h, p) => {
                f._sendInspectionEvent({
                    type: "@xstate.event",
                    sourceRef: d,
                    actorRef: h,
                    event: p
                }), h._send(p)
            },
            scheduler: u,
            getSnapshot: () => ({
                _scheduledEvents: { ...f._snapshot._scheduledEvents
                }
            }),
            start: () => {
                let d = f._snapshot._scheduledEvents;
                f._snapshot._scheduledEvents = {};
                for (let h in d) {
                    let {
                        source: p,
                        target: g,
                        event: _,
                        delay: q,
                        id: x
                    } = d[h];
                    u.schedule(p, g, _, q, x)
                }
            },
            _clock: c,
            _logger: a
        };
    return f
}
var ct = !1,
    et = 1,
    m = function(e) {
        return e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped", e
    }({}),
    Ce = {
        clock: {
            setTimeout: (e, t) => setTimeout(e, t),
            clearTimeout: e => clearTimeout(e)
        },
        logger: console.log.bind(console),
        devTools: !1
    },
    Z = class {
        constructor(t, n) {
            var f, y, d, h;
            this.logic = t, this._snapshot = void 0, this.clock = void 0, this.options = void 0, this.id = void 0, this.mailbox = new F(this._process.bind(this)), this.observers = new Set, this.eventListeners = new Map, this.logger = void 0, this._processingStatus = m.NotStarted, this._parent = void 0, this._syncSnapshot = void 0, this.ref = void 0, this._actorScope = void 0, this._systemId = void 0, this.sessionId = void 0, this.system = void 0, this._doneEvent = void 0, this.src = void 0, this._deferred = [];
            let s = { ...Ce,
                    ...n
                },
                {
                    clock: r,
                    logger: i,
                    parent: o,
                    syncSnapshot: c,
                    id: a,
                    systemId: u,
                    inspect: l
                } = s;
            this.system = o ? o.system : Re(this, {
                clock: r,
                logger: i
            }), l && !o && this.system.inspect(R(l)), this.sessionId = this.system._bookId(), this.id = a != null ? a : this.sessionId, this.logger = (f = n == null ? void 0 : n.logger) != null ? f : this.system._logger, this.clock = (y = n == null ? void 0 : n.clock) != null ? y : this.system._clock, this._parent = o, this._syncSnapshot = c, this.options = s, this.src = (d = s.src) != null ? d : t, this.ref = this, this._actorScope = {
                self: this,
                id: this.id,
                sessionId: this.sessionId,
                logger: this.logger,
                defer: p => {
                    this._deferred.push(p)
                },
                system: this.system,
                stopChild: p => {
                    if (p._parent !== this) throw new Error(`Cannot stop child actor ${p.id} of ${this.id} because it is not a child`);
                    p._stop()
                },
                emit: p => {
                    let g = this.eventListeners.get(p.type),
                        _ = this.eventListeners.get("*");
                    if (!g && !_) return;
                    let q = [...g ? g.values() : [], ..._ ? _.values() : []];
                    for (let x of q) x(p)
                },
                actionExecutor: p => {
                    let g = () => {
                        if (this._actorScope.system._sendInspectionEvent({
                                type: "@xstate.action",
                                actorRef: this,
                                action: {
                                    type: p.type,
                                    params: p.params
                                }
                            }), !p.exec) return;
                        let _ = ct;
                        try {
                            ct = !0, p.exec(p.info, p.params)
                        } finally {
                            ct = _
                        }
                    };
                    this._processingStatus === m.Running ? g() : this._deferred.push(g)
                }
            }, this.send = this.send.bind(this), this.system._sendInspectionEvent({
                type: "@xstate.actor",
                actorRef: this
            }), u && (this._systemId = u, this.system._set(u, this)), this._initState((h = n == null ? void 0 : n.snapshot) != null ? h : n == null ? void 0 : n.state), u && this._snapshot.status !== "active" && this.system._unregister(this)
        }
        _initState(t) {
            var n;
            try {
                this._snapshot = t ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(t, this._actorScope) : t : this.logic.getInitialSnapshot(this._actorScope, (n = this.options) == null ? void 0 : n.input)
            } catch (s) {
                this._snapshot = {
                    status: "error",
                    output: void 0,
                    error: s
                }
            }
        }
        update(t, n) {
            var r, i;
            this._snapshot = t;
            let s;
            for (; s = this._deferred.shift();) try {
                s()
            } catch (o) {
                this._deferred.length = 0, this._snapshot = { ...t,
                    status: "error",
                    error: o
                }
            }
            switch (this._snapshot.status) {
                case "active":
                    for (let o of this.observers) try {
                        (r = o.next) == null || r.call(o, t)
                    } catch (c) {
                        S(c)
                    }
                    break;
                case "done":
                    for (let o of this.observers) try {
                        (i = o.next) == null || i.call(o, t)
                    } catch (c) {
                        S(c)
                    }
                    this._stopProcedure(), this._complete(), this._doneEvent = Ie(this.id, this._snapshot.output), this._parent && this.system._relay(this, this._parent, this._doneEvent);
                    break;
                case "error":
                    this._error(this._snapshot.error);
                    break
            }
            this.system._sendInspectionEvent({
                type: "@xstate.snapshot",
                actorRef: this,
                event: n,
                snapshot: t
            })
        }
        subscribe(t, n, s) {
            var i;
            let r = R(t, n, s);
            if (this._processingStatus !== m.Stopped) this.observers.add(r);
            else switch (this._snapshot.status) {
                case "done":
                    try {
                        (i = r.complete) == null || i.call(r)
                    } catch (o) {
                        S(o)
                    }
                    break;
                case "error":
                    {
                        let o = this._snapshot.error;
                        if (!r.error) S(o);
                        else try {
                            r.error(o)
                        } catch (c) {
                            S(c)
                        }
                        break
                    }
            }
            return {
                unsubscribe: () => {
                    this.observers.delete(r)
                }
            }
        }
        on(t, n) {
            let s = this.eventListeners.get(t);
            s || (s = new Set, this.eventListeners.set(t, s));
            let r = n.bind(void 0);
            return s.add(r), {
                unsubscribe: () => {
                    s.delete(r)
                }
            }
        }
        start() {
            if (this._processingStatus === m.Running) return this;
            this._syncSnapshot && this.subscribe({
                next: s => {
                    s.status === "active" && this.system._relay(this, this._parent, {
                        type: `xstate.snapshot.${this.id}`,
                        snapshot: s
                    })
                },
                error: () => {}
            }), this.system._register(this.sessionId, this), this._systemId && this.system._set(this._systemId, this), this._processingStatus = m.Running;
            let t = yt(this.options.input);
            switch (this.system._sendInspectionEvent({
                type: "@xstate.event",
                sourceRef: this._parent,
                actorRef: this,
                event: t
            }), this._snapshot.status) {
                case "done":
                    return this.update(this._snapshot, t), this;
                case "error":
                    return this._error(this._snapshot.error), this
            }
            if (this._parent || this.system.start(), this.logic.start) try {
                this.logic.start(this._snapshot, this._actorScope)
            } catch (s) {
                return this._snapshot = { ...this._snapshot,
                    status: "error",
                    error: s
                }, this._error(s), this
            }
            return this.update(this._snapshot, t), this.options.devTools && this.attachDevTools(), this.mailbox.start(), this
        }
        _process(t) {
            let n, s;
            try {
                n = this.logic.transition(this._snapshot, t, this._actorScope)
            } catch (r) {
                s = {
                    err: r
                }
            }
            if (s) {
                let {
                    err: r
                } = s;
                this._snapshot = { ...this._snapshot,
                    status: "error",
                    error: r
                }, this._error(r);
                return
            }
            this.update(n, t), t.type === W && (this._stopProcedure(), this._complete())
        }
        _stop() {
            return this._processingStatus === m.Stopped ? this : (this.mailbox.clear(), this._processingStatus === m.NotStarted ? (this._processingStatus = m.Stopped, this) : (this.mailbox.enqueue({
                type: W
            }), this))
        }
        stop() {
            if (this._parent) throw new Error("A non-root actor cannot be stopped directly.");
            return this._stop()
        }
        _complete() {
            var t;
            for (let n of this.observers) try {
                (t = n.complete) == null || t.call(n)
            } catch (s) {
                S(s)
            }
            this.observers.clear()
        }
        _reportError(t) {
            if (!this.observers.size) {
                this._parent || S(t);
                return
            }
            let n = !1;
            for (let s of this.observers) {
                let r = s.error;
                n || (n = !r);
                try {
                    r == null || r(t)
                } catch (i) {
                    S(i)
                }
            }
            this.observers.clear(), n && S(t)
        }
        _error(t) {
            this._stopProcedure(), this._reportError(t), this._parent && this.system._relay(this, this._parent, pt(this.id, t))
        }
        _stopProcedure() {
            return this._processingStatus !== m.Running ? this : (this.system.scheduler.cancelAll(this), this.mailbox.clear(), this.mailbox = new F(this._process.bind(this)), this._processingStatus = m.Stopped, this.system._unregister(this), this)
        }
        _send(t) {
            this._processingStatus !== m.Stopped && this.mailbox.enqueue(t)
        }
        send(t) {
            this.system._relay(void 0, this, t)
        }
        attachDevTools() {
            let {
                devTools: t
            } = this.options;
            t && (typeof t == "function" ? t : Mt)(this)
        }
        toJSON() {
            return {
                xstate$$type: et,
                id: this.id
            }
        }
        getPersistedSnapshot(t) {
            return this.logic.getPersistedSnapshot(this._snapshot, t)
        }[ke]() {
            return this
        }
        getSnapshot() {
            return this._snapshot
        }
    };

function v(e, ...[t]) {
    return new Z(e, t)
}

function Me(e, t, n, s, {
    sendId: r
}) {
    let i = typeof r == "function" ? r(n, s) : r;
    return [t, {
        sendId: i
    }, void 0]
}

function je(e, t) {
    e.defer(() => {
        e.system.scheduler.cancel(e.self, t.sendId)
    })
}

function _t(e) {
    function t(n, s) {}
    return t.type = "xstate.cancel", t.sendId = e, t.resolve = Me, t.execute = je, t
}

function Pe(e, t, n, s, {
    id: r,
    systemId: i,
    src: o,
    input: c,
    syncSnapshot: a
}) {
    let u = typeof o == "string" ? X(t.machine, o) : o,
        l = typeof r == "function" ? r(n) : r,
        f, y;
    return u && (y = typeof c == "function" ? c({
        context: t.context,
        event: n.event,
        self: e.self
    }) : c, f = v(u, {
        id: l,
        src: o,
        parent: e.self,
        syncSnapshot: a,
        systemId: i,
        input: y
    })), [T(t, {
        children: { ...t.children,
            [l]: f
        }
    }), {
        id: r,
        systemId: i,
        actorRef: f,
        src: o,
        input: y
    }, void 0]
}

function De(e, {
    actorRef: t
}) {
    t && e.defer(() => {
        t._processingStatus !== m.Stopped && t.start()
    })
}

function St(...[e, {
    id: t,
    systemId: n,
    input: s,
    syncSnapshot: r = !1
} = {}]) {
    function i(o, c) {}
    return i.type = "xstate.spawnChild", i.id = t, i.systemId = n, i.src = e, i.input = s, i.syncSnapshot = r, i.resolve = Pe, i.execute = De, i
}

function Le(e, t, n, s, {
    actorRef: r
}) {
    let i = typeof r == "function" ? r(n, s) : r,
        o = typeof i == "string" ? t.children[i] : i,
        c = t.children;
    return o && (c = { ...c
    }, delete c[o.id]), [T(t, {
        children: c
    }), o, void 0]
}

function qe(e, t) {
    if (t) {
        if (e.system._unregister(t), t._processingStatus !== m.Running) {
            e.stopChild(t);
            return
        }
        e.defer(() => {
            e.stopChild(t)
        })
    }
}

function nt(e) {
    function t(n, s) {}
    return t.type = "xstate.stopChild", t.actorRef = e, t.resolve = Le, t.execute = qe, t
}

function G(e, t, n, s) {
    let {
        machine: r
    } = s, i = typeof e == "function", o = i ? e : r.implementations.guards[typeof e == "string" ? e : e.type];
    if (!i && !o) throw new Error(`Guard '${typeof e=="string"?e:e.type}' is not implemented.'.`);
    if (typeof o != "function") return G(o, t, n, s);
    let c = {
            context: t,
            event: n
        },
        a = i || typeof e == "string" ? void 0 : "params" in e ? typeof e.params == "function" ? e.params({
            context: t,
            event: n
        }) : e.params : void 0;
    return "check" in o ? o.check(s, c, o) : o(c, a)
}
var wt = e => e.type === "atomic" || e.type === "final";

function C(e) {
    return Object.values(e.states).filter(t => t.type !== "history")
}

function U(e, t) {
    let n = [];
    if (t === e) return n;
    let s = e.parent;
    for (; s && s !== t;) n.push(s), s = s.parent;
    return n
}

function V(e) {
    let t = new Set(e),
        n = Vt(t);
    for (let s of t)
        if (s.type === "compound" && (!n.get(s) || !n.get(s).length)) Dt(s).forEach(r => t.add(r));
        else if (s.type === "parallel") {
        for (let r of C(s))
            if (r.type !== "history" && !t.has(r)) {
                let i = Dt(r);
                for (let o of i) t.add(o)
            }
    }
    for (let s of t) {
        let r = s.parent;
        for (; r;) t.add(r), r = r.parent
    }
    return t
}

function Ut(e, t) {
    let n = t.get(e);
    if (!n) return {};
    if (e.type === "compound") {
        let r = n[0];
        if (r) {
            if (wt(r)) return r.key
        } else return {}
    }
    let s = {};
    for (let r of n) s[r.key] = Ut(r, t);
    return s
}

function Vt(e) {
    let t = new Map;
    for (let n of e) t.has(n) || t.set(n, []), n.parent && (t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n));
    return t
}

function Nt(e, t) {
    let n = V(t);
    return Ut(e, Vt(n))
}

function st(e, t) {
    return t.type === "compound" ? C(t).some(n => n.type === "final" && e.has(n)) : t.type === "parallel" ? C(t).every(n => st(e, n)) : t.type === "final"
}
var N = e => e[0] === Ee;

function Yt(e, t) {
    return e.transitions.get(t) || [...e.transitions.keys()].filter(s => {
        if (s === Te) return !0;
        if (!s.endsWith(".*")) return !1;
        let r = s.split("."),
            i = t.split(".");
        for (let o = 0; o < r.length; o++) {
            let c = r[o],
                a = i[o];
            if (c === "*") return o === r.length - 1;
            if (c !== a) return !1
        }
        return !0
    }).sort((s, r) => r.length - s.length).flatMap(s => e.transitions.get(s))
}

function Kt(e) {
    let t = e.config.after;
    if (!t) return [];
    let n = r => {
        let i = Ae(r, e.id),
            o = i.type;
        return e.entry.push(Et(i, {
            id: o,
            delay: r
        })), e.exit.push(_t(o)), o
    };
    return Object.keys(t).flatMap(r => {
        let i = t[r],
            o = typeof i == "string" ? {
                target: i
            } : i,
            c = Number.isNaN(+r) ? r : +r,
            a = n(c);
        return w(o).map(u => ({ ...u,
            event: a,
            delay: c
        }))
    }).map(r => {
        let {
            delay: i
        } = r;
        return { ...b(e, r.event, r),
            delay: i
        }
    })
}

function b(e, t, n) {
    var c;
    let s = Gt(n.target),
        r = (c = n.reenter) != null ? c : !1,
        i = Je(e, s),
        o = { ...n,
            actions: w(n.actions),
            guard: n.guard,
            target: i,
            source: e,
            reenter: r,
            eventType: t,
            toJSON: () => ({ ...o,
                source: `#${e.id}`,
                target: i ? i.map(a => `#${a.id}`) : void 0
            })
        };
    return o
}

function Ht(e) {
    let t = new Map;
    if (e.config.on)
        for (let n of Object.keys(e.config.on)) {
            if (n === lt) throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');
            let s = e.config.on[n];
            t.set(n, I(s).map(r => b(e, n, r)))
        }
    if (e.config.onDone) {
        let n = `xstate.done.state.${e.id}`;
        t.set(n, I(e.config.onDone).map(s => b(e, n, s)))
    }
    for (let n of e.invoke) {
        if (n.onDone) {
            let s = `xstate.done.actor.${n.id}`;
            t.set(s, I(n.onDone).map(r => b(e, s, r)))
        }
        if (n.onError) {
            let s = `xstate.error.actor.${n.id}`;
            t.set(s, I(n.onError).map(r => b(e, s, r)))
        }
        if (n.onSnapshot) {
            let s = `xstate.snapshot.${n.id}`;
            t.set(s, I(n.onSnapshot).map(r => b(e, s, r)))
        }
    }
    for (let n of e.after) {
        let s = t.get(n.eventType);
        s || (s = [], t.set(n.eventType, s)), s.push(n)
    }
    return t
}

function Ft(e, t) {
    let n = typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
    if (!n && t) throw new Error(`Initial state node "${t}" not found on parent state node #${e.id}`);
    let s = {
        source: e,
        actions: !t || typeof t == "string" ? [] : w(t.actions),
        eventType: null,
        reenter: !1,
        target: n ? [n] : [],
        toJSON: () => ({ ...s,
            source: `#${e.id}`,
            target: n ? [`#${n.id}`] : []
        })
    };
    return s
}

function Je(e, t) {
    if (t !== void 0) return t.map(n => {
        if (typeof n != "string") return n;
        if (N(n)) return e.machine.getStateNodeById(n);
        let s = n[0] === ht;
        if (s && !e.parent) return z(e, n.slice(1));
        let r = s ? e.key + n : n;
        if (e.parent) try {
            return z(e.parent, r)
        } catch (i) {
            throw new Error(`Invalid transition definition for state node '${e.id}':
${i.message}`)
        } else throw new Error(`Invalid target: "${n}" is not a valid target from the root node. Did you mean ".${n}"?`)
    })
}

function Zt(e) {
    let t = Gt(e.config.target);
    return t ? {
        target: t.map(n => typeof n == "string" ? z(e.parent, n) : n)
    } : e.parent.initial
}

function k(e) {
    return e.type === "history"
}

function Dt(e) {
    let t = xt(e);
    for (let n of t)
        for (let s of U(n, e)) t.add(s);
    return t
}

function xt(e) {
    let t = new Set;

    function n(s) {
        if (!t.has(s)) {
            if (t.add(s), s.type === "compound") n(s.initial.target[0]);
            else if (s.type === "parallel")
                for (let r of C(s)) n(r)
        }
    }
    return n(e), t
}

function M(e, t) {
    if (N(t)) return e.machine.getStateNodeById(t);
    if (!e.states) throw new Error(`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`);
    let n = e.states[t];
    if (!n) throw new Error(`Child state '${t}' does not exist on '${e.id}'`);
    return n
}

function z(e, t) {
    if (typeof t == "string" && N(t)) try {
        return e.machine.getStateNodeById(t)
    } catch (r) {}
    let n = tt(t).slice(),
        s = e;
    for (; n.length;) {
        let r = n.shift();
        if (!r.length) break;
        s = M(s, r)
    }
    return s
}

function j(e, t) {
    if (typeof t == "string") {
        let r = e.states[t];
        if (!r) throw new Error(`State '${t}' does not exist on '${e.id}'`);
        return [e, r]
    }
    let n = Object.keys(t),
        s = n.map(r => M(e, r)).filter(Boolean);
    return [e.machine.root, e].concat(s, n.reduce((r, i) => {
        let o = M(e, i);
        if (!o) return r;
        let c = j(o, t[i]);
        return r.concat(c)
    }, []))
}

function Be(e, t, n, s) {
    let i = M(e, t).next(n, s);
    return !i || !i.length ? e.next(n, s) : i
}

function We(e, t, n, s) {
    let r = Object.keys(t),
        i = M(e, r[0]),
        o = rt(i, t[r[0]], n, s);
    return !o || !o.length ? e.next(n, s) : o
}

function ze(e, t, n, s) {
    let r = [];
    for (let i of Object.keys(t)) {
        let o = t[i];
        if (!o) continue;
        let c = M(e, i),
            a = rt(c, o, n, s);
        a && r.push(...a)
    }
    return r.length ? r : e.next(n, s)
}

function rt(e, t, n, s) {
    return typeof t == "string" ? Be(e, t, n, s) : Object.keys(t).length === 1 ? We(e, t, n, s) : ze(e, t, n, s)
}

function Xe(e) {
    return Object.keys(e.states).map(t => e.states[t]).filter(t => t.type === "history")
}

function E(e, t) {
    let n = e;
    for (; n.parent && n.parent !== t;) n = n.parent;
    return n.parent === t
}

function Ge(e, t) {
    let n = new Set(e),
        s = new Set(t);
    for (let r of n)
        if (s.has(r)) return !0;
    for (let r of s)
        if (n.has(r)) return !0;
    return !1
}

function Qt(e, t, n) {
    let s = new Set;
    for (let r of e) {
        let i = !1,
            o = new Set;
        for (let c of s)
            if (Ge(dt([r], t, n), dt([c], t, n)))
                if (E(r.source, c.source)) o.add(c);
                else {
                    i = !0;
                    break
                }
        if (!i) {
            for (let c of o) s.delete(c);
            s.add(r)
        }
    }
    return Array.from(s)
}

function Ue(e) {
    let [t, ...n] = e;
    for (let s of U(t, void 0))
        if (n.every(r => E(r, s))) return s
}

function bt(e, t) {
    if (!e.target) return [];
    let n = new Set;
    for (let s of e.target)
        if (k(s))
            if (t[s.id])
                for (let r of t[s.id]) n.add(r);
            else
                for (let r of bt(Zt(s), t)) n.add(r);
    else n.add(s);
    return [...n]
}

function te(e, t) {
    let n = bt(e, t);
    if (!n) return;
    if (!e.reenter && n.every(r => r === e.source || E(r, e.source))) return e.source;
    let s = Ue(n.concat(e.source));
    if (s) return s;
    if (!e.reenter) return e.source.machine.root
}

function dt(e, t, n) {
    var r;
    let s = new Set;
    for (let i of e)
        if ((r = i.target) != null && r.length) {
            let o = te(i, n);
            i.reenter && i.source === o && s.add(o);
            for (let c of t) E(c, o) && s.add(c)
        }
    return [...s]
}

function Ve(e, t) {
    if (e.length !== t.size) return !1;
    for (let n of e)
        if (!t.has(n)) return !1;
    return !0
}

function Q(e, t, n, s, r, i) {
    if (!e.length) return t;
    let o = new Set(t._nodes),
        c = t.historyValue,
        a = Qt(e, o, c),
        u = t;
    r || ([u, c] = He(u, s, n, a, o, c, i, n.actionExecutor)), u = $(u, s, n, a.flatMap(f => f.actions), i, void 0), u = Ye(u, s, n, a, o, i, c, r);
    let l = [...o];
    u.status === "done" && (u = $(u, s, n, l.sort((f, y) => y.order - f.order).flatMap(f => f.exit), i, void 0));
    try {
        return c === t.historyValue && Ve(t._nodes, o) ? u : T(u, {
            _nodes: l,
            historyValue: c
        })
    } catch (f) {
        throw f
    }
}

function Ne(e, t, n, s, r) {
    if (s.output === void 0) return;
    let i = ut(r.id, r.output !== void 0 && r.parent ? ft(r.output, e.context, t, n.self) : void 0);
    return ft(s.output, e.context, i, n.self)
}

function Ye(e, t, n, s, r, i, o, c) {
    let a = e,
        u = new Set,
        l = new Set;
    Ke(s, o, l, u), c && l.add(e.machine.root);
    let f = new Set;
    for (let y of [...u].sort((d, h) => d.order - h.order)) {
        r.add(y);
        let d = [];
        d.push(...y.entry);
        for (let h of y.invoke) d.push(St(h.src, { ...h,
            syncSnapshot: !!h.onSnapshot
        }));
        if (l.has(y)) {
            let h = y.initial.actions;
            d.push(...h)
        }
        if (a = $(a, t, n, d, i, y.invoke.map(h => h.id)), y.type === "final") {
            let h = y.parent,
                p = (h == null ? void 0 : h.type) === "parallel" ? h : h == null ? void 0 : h.parent,
                g = p || y;
            for ((h == null ? void 0 : h.type) === "compound" && i.push(ut(h.id, y.output !== void 0 ? ft(y.output, a.context, t, n.self) : void 0));
                (p == null ? void 0 : p.type) === "parallel" && !f.has(p) && st(r, p);) f.add(p), i.push(ut(p.id)), g = p, p = p.parent;
            if (p) continue;
            a = T(a, {
                status: "done",
                output: Ne(a, t, n, a.machine.root, g)
            })
        }
    }
    return a
}

function Ke(e, t, n, s) {
    for (let r of e) {
        let i = te(r, t);
        for (let c of r.target || []) !k(c) && (r.source !== c || r.source !== i || r.reenter) && (s.add(c), n.add(c)), O(c, t, n, s);
        let o = bt(r, t);
        for (let c of o) {
            let a = U(c, i);
            (i == null ? void 0 : i.type) === "parallel" && a.push(i), ee(s, t, n, a, !r.source.parent && r.reenter ? void 0 : i)
        }
    }
}

function O(e, t, n, s) {
    var r;
    if (k(e))
        if (t[e.id]) {
            let i = t[e.id];
            for (let o of i) s.add(o), O(o, t, n, s);
            for (let o of i) at(o, e.parent, s, t, n)
        } else {
            let i = Zt(e);
            for (let o of i.target) s.add(o), i === ((r = e.parent) == null ? void 0 : r.initial) && n.add(e.parent), O(o, t, n, s);
            for (let o of i.target) at(o, e.parent, s, t, n)
        }
    else if (e.type === "compound") {
        let [i] = e.initial.target;
        k(i) || (s.add(i), n.add(i)), O(i, t, n, s), at(i, e, s, t, n)
    } else if (e.type === "parallel")
        for (let i of C(e).filter(o => !k(o)))[...s].some(o => E(o, i)) || (k(i) || (s.add(i), n.add(i)), O(i, t, n, s))
}

function ee(e, t, n, s, r) {
    for (let i of s)
        if ((!r || E(i, r)) && e.add(i), i.type === "parallel")
            for (let o of C(i).filter(c => !k(c)))[...e].some(c => E(c, o)) || (e.add(o), O(o, t, n, e))
}

function at(e, t, n, s, r) {
    ee(n, s, r, U(e, t))
}

function He(e, t, n, s, r, i, o, c) {
    let a = e,
        u = dt(s, r, i);
    u.sort((f, y) => y.order - f.order);
    let l;
    for (let f of u)
        for (let y of Xe(f)) {
            let d;
            y.history === "deep" ? d = h => wt(h) && E(h, f) : d = h => h.parent === f, l != null || (l = { ...i
            }), l[y.id] = Array.from(r).filter(d)
        }
    for (let f of u) a = $(a, t, n, [...f.exit, ...f.invoke.map(y => nt(y.id))], o, void 0), r.delete(f);
    return [a, l || i]
}

function Fe(e, t) {
    return e.implementations.actions[t]
}

function ne(e, t, n, s, r, i) {
    let {
        machine: o
    } = e, c = e;
    for (let a of s) {
        let u = typeof a == "function",
            l = u ? a : Fe(o, typeof a == "string" ? a : a.type),
            f = {
                context: c.context,
                event: t,
                self: n.self,
                system: n.system
            },
            y = u || typeof a == "string" ? void 0 : "params" in a ? typeof a.params == "function" ? a.params({
                context: c.context,
                event: t
            }) : a.params : void 0;
        if (!l || !("resolve" in l)) {
            n.actionExecutor({
                type: typeof a == "string" ? a : typeof a == "object" ? a.type : a.name || "(anonymous)",
                info: f,
                params: y,
                exec: l
            });
            continue
        }
        let d = l,
            [h, p, g] = d.resolve(n, c, f, y, l, r);
        c = h, "retryResolve" in d && (i == null || i.push([d, p])), "execute" in d && n.actionExecutor({
            type: d.type,
            info: f,
            params: p,
            exec: d.execute.bind(null, n, p)
        }), g && (c = ne(c, t, n, g, r, i))
    }
    return c
}

function $(e, t, n, s, r, i) {
    let o = i ? [] : void 0,
        c = ne(e, t, n, s, {
            internalQueue: r,
            deferredActorIds: i
        }, o);
    return o == null || o.forEach(([a, u]) => {
        a.retryResolve(n, c, u)
    }), c
}

function it(e, t, n, s) {
    let r = e,
        i = [];

    function o(u, l, f) {
        n.system._sendInspectionEvent({
            type: "@xstate.microstep",
            actorRef: n.self,
            event: l,
            snapshot: u,
            _transitions: f
        }), i.push(u)
    }
    if (t.type === W) return r = T(Lt(r, t, n), {
        status: "stopped"
    }), o(r, t, []), {
        snapshot: r,
        microstates: i
    };
    let c = t;
    if (c.type !== Jt) {
        let u = c,
            l = $e(u),
            f = qt(u, r);
        if (l && !f.length) return r = T(e, {
            status: "error",
            error: u.error
        }), o(r, u, []), {
            snapshot: r,
            microstates: i
        };
        r = Q(f, e, n, c, !1, s), o(r, u, f)
    }
    let a = !0;
    for (; r.status === "active";) {
        let u = a ? Ze(r, c) : [],
            l = u.length ? r : void 0;
        if (!u.length) {
            if (!s.length) break;
            c = s.shift(), u = qt(c, r)
        }
        r = Q(u, r, n, c, !1, s), a = r !== l, o(r, c, u)
    }
    return r.status !== "active" && Lt(r, c, n), {
        snapshot: r,
        microstates: i
    }
}

function Lt(e, t, n) {
    return $(e, t, n, Object.values(e.children).map(s => nt(s)), [], void 0)
}

function qt(e, t) {
    return t.machine.getTransitionData(t, e)
}

function Ze(e, t) {
    let n = new Set,
        s = e._nodes.filter(wt);
    for (let r of s) t: for (let i of [r].concat(U(r, void 0)))
        if (i.always) {
            for (let o of i.always)
                if (o.guard === void 0 || G(o.guard, e.context, t, e)) {
                    n.add(o);
                    break t
                }
        }
    return Qt(Array.from(n), new Set(e._nodes), e.historyValue)
}

function se(e, t) {
    let n = V(j(e, t));
    return Nt(e, [...n])
}

function re(e) {
    return !!e && typeof e == "object" && "machine" in e && "value" in e
}
var Qe = function(t) {
        return gt(t, this.value)
    },
    tn = function(t) {
        return this.tags.has(t)
    },
    en = function(t) {
        let n = this.machine.getTransitionData(this, t);
        return !!(n != null && n.length) && n.some(s => s.target !== void 0 || s.actions.length)
    },
    nn = function() {
        let {
            _nodes: t,
            tags: n,
            machine: s,
            getMeta: r,
            toJSON: i,
            can: o,
            hasTag: c,
            matches: a,
            ...u
        } = this;
        return { ...u,
            tags: Array.from(n)
        }
    },
    sn = function() {
        return this._nodes.reduce((t, n) => (n.meta !== void 0 && (t[n.id] = n.meta), t), {})
    };

function Y(e, t) {
    return {
        status: e.status,
        output: e.output,
        error: e.error,
        machine: t,
        context: e.context,
        _nodes: e._nodes,
        value: Nt(t.root, e._nodes),
        tags: new Set(e._nodes.flatMap(n => n.tags)),
        children: e.children,
        historyValue: e.historyValue || {},
        matches: Qe,
        hasTag: tn,
        can: en,
        getMeta: sn,
        toJSON: nn
    }
}

function T(e, t = {}) {
    return Y({ ...e,
        ...t
    }, e.machine)
}

function ie(e, t) {
    let {
        _nodes: n,
        tags: s,
        machine: r,
        children: i,
        context: o,
        can: c,
        hasTag: a,
        matches: u,
        getMeta: l,
        toJSON: f,
        ...y
    } = e, d = {};
    for (let p in i) {
        let g = i[p];
        d[p] = {
            snapshot: g.getPersistedSnapshot(t),
            src: g.src,
            systemId: g._systemId,
            syncSnapshot: g._syncSnapshot
        }
    }
    return { ...y,
        context: oe(o),
        children: d
    }
}

function oe(e) {
    let t;
    for (let n in e) {
        let s = e[n];
        if (s && typeof s == "object")
            if ("sessionId" in s && "send" in s && "ref" in s) t != null || (t = Array.isArray(e) ? e.slice() : { ...e
            }), t[n] = {
                xstate$$type: et,
                id: s.id
            };
            else {
                let r = oe(s);
                r !== s && (t != null || (t = Array.isArray(e) ? e.slice() : { ...e
                }), t[n] = r)
            }
    }
    return t != null ? t : e
}

function rn(e, t, n, s, {
    event: r,
    id: i,
    delay: o
}, {
    internalQueue: c
}) {
    let a = t.machine.implementations.delays;
    if (typeof r == "string") throw new Error(`Only event objects may be used with raise; use raise({ type: "${r}" }) instead`);
    let u = typeof r == "function" ? r(n, s) : r,
        l;
    if (typeof o == "string") {
        let f = a && a[o];
        l = typeof f == "function" ? f(n, s) : f
    } else l = typeof o == "function" ? o(n, s) : o;
    return typeof l != "number" && c.push(u), [t, {
        event: u,
        id: i,
        delay: l
    }, void 0]
}

function on(e, t) {
    let {
        event: n,
        delay: s,
        id: r
    } = t;
    if (typeof s == "number") {
        e.defer(() => {
            let i = e.self;
            e.system.scheduler.schedule(i, i, n, s, r)
        });
        return
    }
}

function Et(e, t) {
    function n(s, r) {}
    return n.type = "xstate.raise", n.event = e, n.id = t == null ? void 0 : t.id, n.delay = t == null ? void 0 : t.delay, n.resolve = rn, n.execute = on, n
}

function ae(e, t) {
    return {
        config: e,
        transition: (n, s, r) => ({ ...n,
            context: e(n.context, s, r)
        }),
        getInitialSnapshot: (n, s) => ({
            status: "active",
            output: void 0,
            error: void 0,
            context: typeof t == "function" ? t({
                input: s
            }) : t
        }),
        getPersistedSnapshot: n => n,
        restoreSnapshot: n => n
    }
}
var ce = new WeakMap;

function cn(e) {
    return {
        config: e,
        start: (n, s) => {
            let {
                self: r,
                system: i,
                emit: o
            } = s, c = {
                receivers: void 0,
                dispose: void 0
            };
            ce.set(r, c), c.dispose = e({
                input: n.input,
                system: i,
                self: r,
                sendBack: a => {
                    r.getSnapshot().status !== "stopped" && r._parent && i._relay(r, r._parent, a)
                },
                receive: a => {
                    var u;
                    (u = c.receivers) != null || (c.receivers = new Set), c.receivers.add(a)
                },
                emit: o
            })
        },
        transition: (n, s, r) => {
            var o, c;
            let i = ce.get(r.self);
            return s.type === W ? (n = { ...n,
                status: "stopped",
                error: void 0
            }, (o = i.dispose) == null || o.call(i), n) : ((c = i.receivers) == null || c.forEach(a => a(s)), n)
        },
        getInitialSnapshot: (n, s) => ({
            status: "active",
            output: void 0,
            error: void 0,
            input: s
        }),
        getPersistedSnapshot: n => n,
        restoreSnapshot: n => n
    }
}
var Vn = ae(e => {}, void 0);

function an(e, {
    machine: t,
    context: n
}, s, r) {
    let i = (o, c = {}) => {
        let {
            systemId: a,
            input: u
        } = c;
        if (typeof o == "string") {
            let l = X(t, o);
            if (!l) throw new Error(`Actor logic '${o}' not implemented in machine '${t.id}'`);
            let f = v(l, {
                id: c.id,
                parent: e.self,
                syncSnapshot: c.syncSnapshot,
                input: typeof u == "function" ? u({
                    context: n,
                    event: s,
                    self: e.self
                }) : u,
                src: o,
                systemId: a
            });
            return r[f.id] = f, f
        } else return v(o, {
            id: c.id,
            parent: e.self,
            syncSnapshot: c.syncSnapshot,
            input: c.input,
            src: o,
            systemId: a
        })
    };
    return (o, c) => {
        let a = i(o, c);
        return r[a.id] = a, e.defer(() => {
            a._processingStatus !== m.Stopped && a.start()
        }), a
    }
}

function un(e, t, n, s, {
    assignment: r
}) {
    if (!t.context) throw new Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
    let i = {},
        o = {
            context: t.context,
            event: n.event,
            spawn: an(e, t, n.event, i),
            self: e.self,
            system: e.system
        },
        c = {};
    if (typeof r == "function") c = r(o, s);
    else
        for (let u of Object.keys(r)) {
            let l = r[u];
            c[u] = typeof l == "function" ? l(o, s) : l
        }
    let a = Object.assign({}, t.context, c);
    return [T(t, {
        context: a,
        children: Object.keys(i).length ? { ...t.children,
            ...i
        } : t.children
    }), void 0, void 0]
}

function At(e) {
    function t(n, s) {}
    return t.type = "xstate.assign", t.assignment = e, t.resolve = un, t
}
var Tt = function(e) {
    return e.Parent = "#_parent", e.Internal = "#_internal", e
}({});

function fn(e, t, n, s, {
    to: r,
    event: i,
    id: o,
    delay: c
}, a) {
    var h;
    let u = t.machine.implementations.delays;
    if (typeof i == "string") throw new Error(`Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`);
    let l = typeof i == "function" ? i(n, s) : i,
        f;
    if (typeof c == "string") {
        let p = u && u[c];
        f = typeof p == "function" ? p(n, s) : p
    } else f = typeof c == "function" ? c(n, s) : c;
    let y = typeof r == "function" ? r(n, s) : r,
        d;
    if (typeof y == "string") {
        if (y === Tt.Parent ? d = e.self._parent : y === Tt.Internal ? d = e.self : y.startsWith("#_") ? d = t.children[y.slice(2)] : d = (h = a.deferredActorIds) != null && h.includes(y) ? y : t.children[y], !d) throw new Error(`Unable to send event to actor '${y}' from machine '${t.machine.id}'.`)
    } else d = y || e.self;
    return [t, {
        to: d,
        targetId: typeof y == "string" ? y : void 0,
        event: l,
        id: o,
        delay: f
    }, void 0]
}

function dn(e, t, n) {
    typeof n.to == "string" && (n.to = t.children[n.to])
}

function hn(e, t) {
    e.defer(() => {
        let {
            to: n,
            event: s,
            delay: r,
            id: i
        } = t;
        if (typeof r == "number") {
            e.system.scheduler.schedule(e.self, n, s, r, i);
            return
        }
        e.system._relay(e.self, n, s.type === Bt ? pt(e.self.id, s.data) : s)
    })
}

function ln(e, t, n) {
    function s(r, i) {}
    return s.type = "xstate.sendTo", s.to = e, s.event = t, s.id = n == null ? void 0 : n.id, s.delay = n == null ? void 0 : n.delay, s.resolve = fn, s.retryResolve = dn, s.execute = hn, s
}
var ue = new WeakMap;

function P(e, t, n) {
    let s = ue.get(e);
    return s ? t in s || (s[t] = n()) : (s = {
        [t]: n()
    }, ue.set(e, s)), s[t]
}
var pn = {},
    K = e => typeof e == "string" ? {
        type: e
    } : typeof e == "function" ? "resolve" in e ? {
        type: e.type
    } : {
        type: e.name
    } : e,
    It = class e {
        constructor(t, n) {
            if (this.config = t, this.key = void 0, this.id = void 0, this.type = void 0, this.path = void 0, this.states = void 0, this.history = void 0, this.entry = void 0, this.exit = void 0, this.parent = void 0, this.machine = void 0, this.meta = void 0, this.output = void 0, this.order = -1, this.description = void 0, this.tags = [], this.transitions = void 0, this.always = void 0, this.parent = n._parent, this.key = n._key, this.machine = n._machine, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.id = this.config.id || [this.machine.id, ...this.path].join(ht), this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.description = this.config.description, this.order = this.machine.idMap.size, this.machine.idMap.set(this.id, this), this.states = this.config.states ? mt(this.config.states, (s, r) => new e(s, {
                    _parent: this,
                    _key: r,
                    _machine: this.machine
                })) : pn, this.type === "compound" && !this.config.initial) throw new Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
            this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this.entry = w(this.config.entry).slice(), this.exit = w(this.config.exit).slice(), this.meta = this.config.meta, this.output = this.type === "final" || !this.parent ? this.config.output : void 0, this.tags = w(t.tags).slice()
        }
        _initialize() {
            this.transitions = Ht(this), this.config.always && (this.always = I(this.config.always).map(t => b(this, lt, t))), Object.keys(this.states).forEach(t => {
                this.states[t]._initialize()
            })
        }
        get definition() {
            return {
                id: this.id,
                key: this.key,
                version: this.machine.version,
                type: this.type,
                initial: this.initial ? {
                    target: this.initial.target,
                    source: this,
                    actions: this.initial.actions.map(K),
                    eventType: null,
                    reenter: !1,
                    toJSON: () => ({
                        target: this.initial.target.map(t => `#${t.id}`),
                        source: `#${this.id}`,
                        actions: this.initial.actions.map(K),
                        eventType: null
                    })
                } : void 0,
                history: this.history,
                states: mt(this.states, t => t.definition),
                on: this.on,
                transitions: [...this.transitions.values()].flat().map(t => ({ ...t,
                    actions: t.actions.map(K)
                })),
                entry: this.entry.map(K),
                exit: this.exit.map(K),
                meta: this.meta,
                order: this.order || -1,
                output: this.output,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags
            }
        }
        toJSON() {
            return this.definition
        }
        get invoke() {
            return P(this, "invoke", () => w(this.config.invoke).map((t, n) => {
                var c;
                let {
                    src: s,
                    systemId: r
                } = t, i = (c = t.id) != null ? c : vt(this.id, n), o = typeof s == "string" ? s : `xstate.invoke.${vt(this.id,n)}`;
                return { ...t,
                    src: o,
                    id: i,
                    systemId: r,
                    toJSON() {
                        let {
                            onDone: a,
                            onError: u,
                            ...l
                        } = t;
                        return { ...l,
                            type: "xstate.invoke",
                            src: o,
                            id: i
                        }
                    }
                }
            }))
        }
        get on() {
            return P(this, "on", () => [...this.transitions].flatMap(([n, s]) => s.map(r => [n, r])).reduce((n, [s, r]) => (n[s] = n[s] || [], n[s].push(r), n), {}))
        }
        get after() {
            return P(this, "delayedTransitions", () => Kt(this))
        }
        get initial() {
            return P(this, "initial", () => Ft(this, this.config.initial))
        }
        next(t, n) {
            let s = n.type,
                r = [],
                i, o = P(this, `candidates-${s}`, () => Yt(this, s));
            for (let c of o) {
                let {
                    guard: a
                } = c, u = t.context, l = !1;
                try {
                    l = !a || G(a, u, n, t)
                } catch (f) {
                    let y = typeof a == "string" ? a : typeof a == "object" ? a.type : void 0;
                    throw new Error(`Unable to evaluate guard ${y?`'${y}' `:""}in transition for event '${s}' in state node '${this.id}':
${f.message}`)
                }
                if (l) {
                    r.push(...c.actions), i = c;
                    break
                }
            }
            return i ? [i] : void 0
        }
        get events() {
            return P(this, "events", () => {
                let {
                    states: t
                } = this, n = new Set(this.ownEvents);
                if (t)
                    for (let s of Object.keys(t)) {
                        let r = t[s];
                        if (r.states)
                            for (let i of r.events) n.add(`${i}`)
                    }
                return Array.from(n)
            })
        }
        get ownEvents() {
            let t = new Set([...this.transitions.keys()].filter(n => this.transitions.get(n).some(s => !(!s.target && !s.actions.length && !s.reenter))));
            return Array.from(t)
        }
    },
    yn = "#",
    kt = class e {
        constructor(t, n) {
            var s, r, i, o;
            this.config = t, this.version = void 0, this.schemas = void 0, this.implementations = void 0, this.__xstatenode = !0, this.idMap = new Map, this.root = void 0, this.id = void 0, this.states = void 0, this.events = void 0, this.id = t.id || "(machine)", this.implementations = {
                actors: (s = n == null ? void 0 : n.actors) != null ? s : {},
                actions: (r = n == null ? void 0 : n.actions) != null ? r : {},
                delays: (i = n == null ? void 0 : n.delays) != null ? i : {},
                guards: (o = n == null ? void 0 : n.guards) != null ? o : {}
            }, this.version = this.config.version, this.schemas = this.config.schemas, this.transition = this.transition.bind(this), this.getInitialSnapshot = this.getInitialSnapshot.bind(this), this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this), this.restoreSnapshot = this.restoreSnapshot.bind(this), this.start = this.start.bind(this), this.root = new It(t, {
                _key: this.id,
                _machine: this
            }), this.root._initialize(), this.states = this.root.states, this.events = this.root.events
        }
        provide(t) {
            let {
                actions: n,
                guards: s,
                actors: r,
                delays: i
            } = this.implementations;
            return new e(this.config, {
                actions: { ...n,
                    ...t.actions
                },
                guards: { ...s,
                    ...t.guards
                },
                actors: { ...r,
                    ...t.actors
                },
                delays: { ...i,
                    ...t.delays
                }
            })
        }
        resolveState(t) {
            let n = se(this.root, t.value),
                s = V(j(this.root, n));
            return Y({
                _nodes: [...s],
                context: t.context || {},
                children: {},
                status: st(s, this.root) ? "done" : t.status || "active",
                output: t.output,
                error: t.error,
                historyValue: t.historyValue
            }, this)
        }
        transition(t, n, s) {
            return it(t, n, s, []).snapshot
        }
        microstep(t, n, s) {
            return it(t, n, s, []).microstates
        }
        getTransitionData(t, n) {
            return rt(this.root, t.value, t, n) || []
        }
        getPreInitialState(t, n, s) {
            let {
                context: r
            } = this.config, i = Y({
                context: typeof r != "function" && r ? r : {},
                _nodes: [this.root],
                children: {},
                status: "active"
            }, this);
            return typeof r == "function" ? $(i, n, t, [At(({
                spawn: c,
                event: a,
                self: u
            }) => r({
                spawn: c,
                input: a.input,
                self: u
            }))], s, void 0) : i
        }
        getInitialSnapshot(t, n) {
            let s = yt(n),
                r = [],
                i = this.getPreInitialState(t, s, r),
                o = Q([{
                    target: [...xt(this.root)],
                    source: this.root,
                    reenter: !0,
                    actions: [],
                    eventType: null,
                    toJSON: null
                }], i, t, s, !0, r),
                {
                    snapshot: c
                } = it(o, s, t, r);
            return c
        }
        start(t) {
            Object.values(t.children).forEach(n => {
                n.getSnapshot().status === "active" && n.start()
            })
        }
        getStateNodeById(t) {
            let n = tt(t),
                s = n.slice(1),
                r = N(n[0]) ? n[0].slice(yn.length) : n[0],
                i = this.idMap.get(r);
            if (!i) throw new Error(`Child state node '#${r}' does not exist on machine '${this.id}'`);
            return z(i, s)
        }
        get definition() {
            return this.root.definition
        }
        toJSON() {
            return this.definition
        }
        getPersistedSnapshot(t, n) {
            return ie(t, n)
        }
        restoreSnapshot(t, n) {
            let s = {},
                r = t.children;
            Object.keys(r).forEach(a => {
                let u = r[a],
                    l = u.snapshot,
                    f = u.src,
                    y = typeof f == "string" ? X(this, f) : f;
                if (!y) return;
                let d = v(y, {
                    id: a,
                    parent: n.self,
                    syncSnapshot: u.syncSnapshot,
                    snapshot: l,
                    src: f,
                    systemId: u.systemId
                });
                s[a] = d
            });
            let i = Y({ ...t,
                    children: s,
                    _nodes: Array.from(V(j(this.root, t.value)))
                }, this),
                o = new Set;

            function c(a, u) {
                if (!o.has(a)) {
                    o.add(a);
                    for (let l in a) {
                        let f = a[l];
                        if (f && typeof f == "object") {
                            if ("xstate$$type" in f && f.xstate$$type === et) {
                                a[l] = u[f.id];
                                continue
                            }
                            c(f, u)
                        }
                    }
                }
            }
            return c(i.context, s), i
        }
    };

function gn(e, t) {
    return new kt(e, t)
}

function ys({
    schemas: e,
    actors: t,
    actions: n,
    guards: s,
    delays: r
}) {
    return {
        createMachine: i => gn({ ...i,
            schemas: e
        }, {
            actors: t,
            actions: n,
            guards: s,
            delays: r
        })
    }
}
var me = J(ge()),
    jn = J(Ot()),
    ve = (e, t) => {
        t(e);
        let n = e.getSnapshot().children;
        n && Object.values(n).forEach(s => {
            ve(s, t)
        })
    };

function Pn(e) {
    var s, r;
    let t = [];
    ve(e, i => {
        t.push([i, i.getSnapshot()]), i.observers = new Set
    });
    let n = (r = (s = e.system).getSnapshot) == null ? void 0 : r.call(s);
    e.stop(), e.system._snapshot = n, t.forEach(([i, o]) => {
        i._processingStatus = 0, i._snapshot = o
    })
}

function Dn(e, ...[t]) {
    let [
        [n, s], r
    ] = (0, A.useState)(() => {
        let i = v(e, t);
        return [e.config, i]
    });
    if (e.config !== n) {
        let i = v(e, { ...t,
            snapshot: s.getPersistedSnapshot({
                __unsafeAllowInlineActors: !0
            })
        });
        r([e.config, i]), s = i
    }
    return Ct(() => {
        s.logic.implementations = e.implementations
    }), s
}

function Ln(e, ...[t, n]) {
    let s = Dn(e, t);
    return (0, A.useEffect)(() => {
        if (!n) return;
        let r = s.subscribe(R(n));
        return () => {
            r.unsubscribe()
        }
    }, [n]), (0, A.useEffect)(() => (s.start(), () => {
        Pn(s)
    }), [s]), s
}

function qn(e, t) {
    return e === t
}

function Jn(e, t, n = qn) {
    let s = (0, A.useCallback)(o => {
            if (!e) return () => {};
            let {
                unsubscribe: c
            } = e.subscribe(o);
            return c
        }, [e]),
        r = (0, A.useCallback)(() => e == null ? void 0 : e.getSnapshot(), [e]);
    return (0, me.useSyncExternalStoreWithSelector)(s, r, r, t, n)
}

function As(e, t) {
    let n = L.createContext(null),
        s = n.Provider;

    function r({
        children: c,
        logic: a = e,
        machine: u,
        options: l
    }) {
        if (u) throw new Error('The "machine" prop has been deprecated. Please use "logic" instead.');
        let f = Ln(a, { ...t,
            ...l
        });
        return L.createElement(s, {
            value: f,
            children: c
        })
    }
    r.displayName = "ActorProvider";

    function i() {
        let c = L.useContext(n);
        if (!c) throw new Error(`You used a hook from "${r.displayName}" but it's not inside a <${r.displayName}> component.`);
        return c
    }

    function o(c, a) {
        let u = i();
        return Jn(u, c, a)
    }
    return {
        Provider: r,
        useActorRef: i,
        useSelector: o
    }
}
export {
    cn as a, At as b, ln as c, ys as d, Jn as e, As as f
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/