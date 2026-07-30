import {
    D as Ht,
    F as Kt,
    J as ke,
    K as le,
    x as Ut,
    y as Lt
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-7B2P2PNW.js";
import {
    Dc as Dt,
    Hc as qt,
    Mc as kt,
    Ob as B,
    Oc as It,
    Pc as Ft,
    Qc as Qt,
    Sc as Nt,
    a as Et,
    aa as ie,
    c as ne,
    ca as qe,
    da as _t,
    e as oe,
    g as Be,
    ga as Pt,
    ma as ut,
    na as Ot,
    oa as At,
    q as De,
    s as at,
    sa as Mt,
    v as xt
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var sr = Et(rr => {
    "use strict";
    var we = oe();

    function Zr(r, e) {
        return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e
    }
    var es = typeof Object.is == "function" ? Object.is : Zr,
        ts = we.useState,
        rs = we.useEffect,
        ss = we.useLayoutEffect,
        ns = we.useDebugValue;

    function os(r, e) {
        var t = e(),
            s = ts({
                inst: {
                    value: t,
                    getSnapshot: e
                }
            }),
            n = s[0].inst,
            o = s[1];
        return ss(function() {
            n.value = t, n.getSnapshot = e, bt(n) && o({
                inst: n
            })
        }, [r, t, e]), rs(function() {
            return bt(n) && o({
                inst: n
            }), r(function() {
                bt(n) && o({
                    inst: n
                })
            })
        }, [r]), ns(t), t
    }

    function bt(r) {
        var e = r.getSnapshot;
        r = r.value;
        try {
            var t = e();
            return !es(r, t)
        } catch (s) {
            return !0
        }
    }

    function is(r, e) {
        return e()
    }
    var as = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? is : os;
    rr.useSyncExternalStore = we.useSyncExternalStore !== void 0 ? we.useSyncExternalStore : as
});
var or = Et((Vn, nr) => {
    "use strict";
    nr.exports = sr()
});
var G = ne(oe());
var jt = G.default.createContext(null),
    Bt = G.default.createContext(void 0),
    Nr = () => {
        let r = (0, G.useContext)(Be),
            e = Pt(r);
        return {
            history: kt(e),
            navigate: (t, s) => It(r, t, s),
            back: () => Ft(r),
            setParams: t => Qt(r, t)
        }
    },
    Hr = r => {
        let [e, t] = (0, G.useState)(() => ({
            history: r.map((o, i) => ({ ...o,
                id: r.length - i - 1
            })),
            nextId: r.length
        })), s = o => {
            t(({
                history: i,
                nextId: a
            }) => {
                let c = i[0];
                return c && qt(c, o) ? {
                    history: i,
                    nextId: a
                } : {
                    history: [{ ...o,
                        id: a
                    }, ...i],
                    nextId: a + 1
                }
            })
        }, n = () => {
            t(({
                history: o,
                ...i
            }) => ({
                history: o.length > 1 ? o.slice(1) : o,
                ...i
            }))
        };
        return {
            history: e.history,
            navigate: (o, i) => {
                i != null && i.replace && n(), s(o)
            },
            back: n,
            setParams: o => {
                t(({
                    history: i,
                    ...a
                }) => {
                    let [c, ...p] = i;
                    return c ? {
                        history: [{ ...c,
                            params: o
                        }, ...p],
                        ...a
                    } : {
                        history: i,
                        ...a
                    }
                })
            }
        }
    },
    xs = ({
        initialEntries: r,
        children: e
    }) => {
        let t = Hr(r);
        return G.default.createElement(jt.Provider, {
            value: t
        }, e)
    },
    Kr = () => {
        let r = (0, G.useContext)(jt),
            e = Nr();
        return r != null ? r : e
    },
    _s = () => (0, G.useContext)(Bt),
    Ps = ({
        pages: r
    }) => {
        let {
            history: e
        } = Kr(), t = e.map((s, n) => {
            let o = r.find(a => s.page === a.page);
            if (!o) return null;
            let i = o.element;
            return G.default.createElement("div", {
                key: s.id,
                style: n === 0 ? {
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0
                } : {
                    display: "none"
                }
            }, G.default.createElement(Bt.Provider, {
                value: s.params
            }, G.default.createElement(i, null)))
        });
        return G.default.createElement(G.default.Fragment, null, t)
    };
var jr = _t `
  100% {
    transform: translateX(100%);
  }
`,
    Br = ({
        style: r,
        children: e,
        dataTestId: t
    }) => ie("div", {
        "data-testid": t,
        css: qe `
        background: #e0e0e0;
        padding: var(--layout-padding);
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: ${jr} 1.5s infinite;
        }
      `,
        style: r
    }, e),
    $t = Br;
var $r = ({
        src: r,
        alt: e = "Assistant",
        size: t = "large",
        isLoading: s
    }) => {
        let n = t === "small" ? "24px" : "36px",
            o = t === "small" ? "6px" : "10px";
        return s ? ie($t, {
            style: {
                width: n,
                height: n,
                borderRadius: o,
                flexShrink: 0,
                padding: 0
            }
        }) : ie("div", {
            css: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: o,
                width: n,
                height: n,
                backgroundColor: r ? "transparent" : "var(--base-accent)",
                flexShrink: 0
            }
        }, r ? ie("img", {
            src: r,
            alt: e,
            css: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: o
            }
        }) : ie("div", {
            css: {
                width: t === "small" ? "12px" : "18px",
                height: t === "small" ? "12px" : "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--button-primary-content)",
                fontFamily: "var(--font-font-family)",
                fontWeight: "var(--font-weight-medium)",
                fontSize: "var(--font-size-base)"
            }
        }, "A"))
    },
    ks = $r;
var Z = class {
    constructor() {
        this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        let t = {
            listener: e
        };
        return this.listeners.add(t), this.onSubscribe(), () => {
            this.listeners.delete(t), this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
var ae = typeof window > "u" || "Deno" in window;

function V() {}

function Wt(r, e) {
    return typeof r == "function" ? r(e) : r
}

function Ie(r) {
    return typeof r == "number" && r >= 0 && r !== 1 / 0
}

function $e(r, e) {
    return Math.max(r + (e || 0) - Date.now(), 0)
}

function pe(r, e, t) {
    return We(r) ? typeof e == "function" ? { ...t,
        queryKey: r,
        queryFn: e
    } : { ...e,
        queryKey: r
    } : r
}

function te(r, e, t) {
    return We(r) ? [{ ...e,
        queryKey: r
    }, t] : [r || {}, e]
}

function Ve(r, e) {
    let {
        type: t = "all",
        exact: s,
        fetchStatus: n,
        predicate: o,
        queryKey: i,
        stale: a
    } = r;
    if (We(i)) {
        if (s) {
            if (e.queryHash !== Fe(i, e.options)) return !1
        } else if (!Qe(e.queryKey, i)) return !1
    }
    if (t !== "all") {
        let c = e.isActive();
        if (t === "active" && !c || t === "inactive" && c) return !1
    }
    return !(typeof a == "boolean" && e.isStale() !== a || typeof n < "u" && n !== e.state.fetchStatus || o && !o(e))
}

function ct(r, e) {
    let {
        exact: t,
        fetching: s,
        predicate: n,
        mutationKey: o
    } = r;
    if (We(o)) {
        if (!e.options.mutationKey) return !1;
        if (t) {
            if (ce(e.options.mutationKey) !== ce(o)) return !1
        } else if (!Qe(e.options.mutationKey, o)) return !1
    }
    return !(typeof s == "boolean" && e.state.status === "loading" !== s || n && !n(e))
}

function Fe(r, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || ce)(r)
}

function ce(r) {
    return JSON.stringify(r, (e, t) => lt(t) ? Object.keys(t).sort().reduce((s, n) => (s[n] = t[n], s), {}) : t)
}

function Qe(r, e) {
    return zt(r, e)
}

function zt(r, e) {
    return r === e ? !0 : typeof r != typeof e ? !1 : r && e && typeof r == "object" && typeof e == "object" ? !Object.keys(e).some(t => !zt(r[t], e[t])) : !1
}

function dt(r, e) {
    if (r === e) return r;
    let t = Vt(r) && Vt(e);
    if (t || lt(r) && lt(e)) {
        let s = t ? r.length : Object.keys(r).length,
            n = t ? e : Object.keys(e),
            o = n.length,
            i = t ? [] : {},
            a = 0;
        for (let c = 0; c < o; c++) {
            let p = t ? c : n[c];
            i[p] = dt(r[p], e[p]), i[p] === r[p] && a++
        }
        return s === o && a === s ? r : i
    }
    return e
}

function Ge(r, e) {
    if (r && !e || e && !r) return !1;
    for (let t in r)
        if (r[t] !== e[t]) return !1;
    return !0
}

function Vt(r) {
    return Array.isArray(r) && r.length === Object.keys(r).length
}

function lt(r) {
    if (!Gt(r)) return !1;
    let e = r.constructor;
    if (typeof e > "u") return !0;
    let t = e.prototype;
    return !(!Gt(t) || !t.hasOwnProperty("isPrototypeOf"))
}

function Gt(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}

function We(r) {
    return Array.isArray(r)
}

function ht(r) {
    return new Promise(e => {
        setTimeout(e, r)
    })
}

function ft(r) {
    ht(0).then(r)
}

function Yt() {
    if (typeof AbortController == "function") return new AbortController
}

function Ue(r, e, t) {
    return t.isDataEqual != null && t.isDataEqual(r, e) ? r : typeof t.structuralSharing == "function" ? t.structuralSharing(r, e) : t.structuralSharing !== !1 ? dt(r, e) : e
}
var pt = class extends Z {
        constructor() {
            super(), this.setup = e => {
                if (!ae && window.addEventListener) {
                    let t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), window.addEventListener("focus", t, !1), () => {
                        window.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
            if (!this.hasListeners()) {
                var e;
                (e = this.cleanup) == null || e.call(this), this.cleanup = void 0
            }
        }
        setEventListener(e) {
            var t;
            this.setup = e, (t = this.cleanup) == null || t.call(this), this.cleanup = e(s => {
                typeof s == "boolean" ? this.setFocused(s) : this.onFocus()
            })
        }
        setFocused(e) {
            this.focused !== e && (this.focused = e, this.onFocus())
        }
        onFocus() {
            this.listeners.forEach(({
                listener: e
            }) => {
                e()
            })
        }
        isFocused() {
            return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
        }
    },
    ge = new pt;
var Jt = ["online", "offline"],
    mt = class extends Z {
        constructor() {
            super(), this.setup = e => {
                if (!ae && window.addEventListener) {
                    let t = () => e();
                    return Jt.forEach(s => {
                        window.addEventListener(s, t, !1)
                    }), () => {
                        Jt.forEach(s => {
                            window.removeEventListener(s, t)
                        })
                    }
                }
            }
        }
        onSubscribe() {
            this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
            if (!this.hasListeners()) {
                var e;
                (e = this.cleanup) == null || e.call(this), this.cleanup = void 0
            }
        }
        setEventListener(e) {
            var t;
            this.setup = e, (t = this.cleanup) == null || t.call(this), this.cleanup = e(s => {
                typeof s == "boolean" ? this.setOnline(s) : this.onOnline()
            })
        }
        setOnline(e) {
            this.online !== e && (this.online = e, this.onOnline())
        }
        onOnline() {
            this.listeners.forEach(({
                listener: e
            }) => {
                e()
            })
        }
        isOnline() {
            return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
        }
    },
    Ce = new mt;

function Vr(r) {
    return Math.min(1e3 * 2 ** r, 3e4)
}

function ve(r) {
    return (r != null ? r : "online") === "online" ? Ce.isOnline() : !0
}
var ze = class {
    constructor(e) {
        this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Re(r) {
    return r instanceof ze
}

function Ye(r) {
    let e = !1,
        t = 0,
        s = !1,
        n, o, i, a = new Promise((h, f) => {
            o = h, i = f
        }),
        c = h => {
            s || (g(new ze(h)), r.abort == null || r.abort())
        },
        p = () => {
            e = !0
        },
        u = () => {
            e = !1
        },
        y = () => !ge.isFocused() || r.networkMode !== "always" && !Ce.isOnline(),
        m = h => {
            s || (s = !0, r.onSuccess == null || r.onSuccess(h), n == null || n(), o(h))
        },
        g = h => {
            s || (s = !0, r.onError == null || r.onError(h), n == null || n(), i(h))
        },
        w = () => new Promise(h => {
            n = f => {
                let Q = s || !y();
                return Q && h(f), Q
            }, r.onPause == null || r.onPause()
        }).then(() => {
            n = void 0, s || r.onContinue == null || r.onContinue()
        }),
        D = () => {
            if (s) return;
            let h;
            try {
                h = r.fn()
            } catch (f) {
                h = Promise.reject(f)
            }
            Promise.resolve(h).then(m).catch(f => {
                var Q, R;
                if (s) return;
                let k = (Q = r.retry) != null ? Q : 3,
                    F = (R = r.retryDelay) != null ? R : Vr,
                    E = typeof F == "function" ? F(t, f) : F,
                    b = k === !0 || typeof k == "number" && t < k || typeof k == "function" && k(t, f);
                if (e || !b) {
                    g(f);
                    return
                }
                t++, r.onFail == null || r.onFail(t, f), ht(E).then(() => {
                    if (y()) return w()
                }).then(() => {
                    e ? g(f) : D()
                })
            })
        };
    return ve(r.networkMode) ? D() : w().then(D), {
        promise: a,
        cancel: c,
        continue: () => (n == null ? void 0 : n()) ? a : Promise.resolve(),
        cancelRetry: p,
        continueRetry: u
    }
}
var Se = console;

function Gr() {
    let r = [],
        e = 0,
        t = u => {
            u()
        },
        s = u => {
            u()
        },
        n = u => {
            let y;
            e++;
            try {
                y = u()
            } finally {
                e--, e || a()
            }
            return y
        },
        o = u => {
            e ? r.push(u) : ft(() => {
                t(u)
            })
        },
        i = u => (...y) => {
            o(() => {
                u(...y)
            })
        },
        a = () => {
            let u = r;
            r = [], u.length && ft(() => {
                s(() => {
                    u.forEach(y => {
                        t(y)
                    })
                })
            })
        };
    return {
        batch: n,
        batchCalls: i,
        schedule: o,
        setNotifyFunction: u => {
            t = u
        },
        setBatchNotifyFunction: u => {
            s = u
        }
    }
}
var L = Gr();
var Te = class {
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(), Ie(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
            this.optionalRemove()
        }, this.cacheTime))
    }
    updateCacheTime(e) {
        this.cacheTime = Math.max(this.cacheTime || 0, e != null ? e : ae ? 1 / 0 : 5 * 60 * 1e3)
    }
    clearGcTimeout() {
        this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
    }
};
var Je = class extends Te {
    constructor(e) {
        super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Se, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || Wr(this.options), this.state = this.initialState, this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    setOptions(e) {
        this.options = { ...this.defaultOptions,
            ...e
        }, this.updateCacheTime(this.options.cacheTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this)
    }
    setData(e, t) {
        let s = Ue(this.state.data, e, this.options);
        return this.dispatch({
            data: s,
            type: "success",
            dataUpdatedAt: t == null ? void 0 : t.updatedAt,
            manual: t == null ? void 0 : t.manual
        }), s
    }
    setState(e, t) {
        this.dispatch({
            type: "setState",
            state: e,
            setStateOptions: t
        })
    }
    cancel(e) {
        var t;
        let s = this.promise;
        return (t = this.retryer) == null || t.cancel(e), s ? s.then(V).catch(V) : Promise.resolve()
    }
    destroy() {
        super.destroy(), this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(), this.setState(this.initialState)
    }
    isActive() {
        return this.observers.some(e => e.options.enabled !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
    }
    isStaleByTime(e = 0) {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !$e(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        var e;
        let t = this.observers.find(s => s.shouldFetchOnWindowFocus());
        t && t.refetch({
            cancelRefetch: !1
        }), (e = this.retryer) == null || e.continue()
    }
    onOnline() {
        var e;
        let t = this.observers.find(s => s.shouldFetchOnReconnect());
        t && t.refetch({
            cancelRefetch: !1
        }), (e = this.retryer) == null || e.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
            revert: !0
        }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.dispatch({
            type: "invalidate"
        })
    }
    fetch(e, t) {
        var s, n;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.dataUpdatedAt && t != null && t.cancelRefetch) this.cancel({
                silent: !0
            });
            else if (this.promise) {
                var o;
                return (o = this.retryer) == null || o.continueRetry(), this.promise
            }
        }
        if (e && this.setOptions(e), !this.options.queryFn) {
            let g = this.observers.find(w => w.options.queryFn);
            g && this.setOptions(g.options)
        }
        let i = Yt(),
            a = {
                queryKey: this.queryKey,
                pageParam: void 0,
                meta: this.meta
            },
            c = g => {
                Object.defineProperty(g, "signal", {
                    enumerable: !0,
                    get: () => {
                        if (i) return this.abortSignalConsumed = !0, i.signal
                    }
                })
            };
        c(a);
        let p = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"),
            u = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: p
            };
        if (c(u), (s = this.options.behavior) == null || s.onFetch(u), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((n = u.fetchOptions) == null ? void 0 : n.meta)) {
            var y;
            this.dispatch({
                type: "fetch",
                meta: (y = u.fetchOptions) == null ? void 0 : y.meta
            })
        }
        let m = g => {
            if (Re(g) && g.silent || this.dispatch({
                    type: "error",
                    error: g
                }), !Re(g)) {
                var w, D, h, f;
                (w = (D = this.cache.config).onError) == null || w.call(D, g, this), (h = (f = this.cache.config).onSettled) == null || h.call(f, this.state.data, g, this)
            }
            this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
        };
        return this.retryer = Ye({
            fn: u.fetchFn,
            abort: i == null ? void 0 : i.abort.bind(i),
            onSuccess: g => {
                var w, D, h, f;
                if (typeof g > "u") {
                    m(new Error(this.queryHash + " data is undefined"));
                    return
                }
                this.setData(g), (w = (D = this.cache.config).onSuccess) == null || w.call(D, g, this), (h = (f = this.cache.config).onSettled) == null || h.call(f, g, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            },
            onError: m,
            onFail: (g, w) => {
                this.dispatch({
                    type: "failed",
                    failureCount: g,
                    error: w
                })
            },
            onPause: () => {
                this.dispatch({
                    type: "pause"
                })
            },
            onContinue: () => {
                this.dispatch({
                    type: "continue"
                })
            },
            retry: u.options.retry,
            retryDelay: u.options.retryDelay,
            networkMode: u.options.networkMode
        }), this.promise = this.retryer.promise, this.promise
    }
    dispatch(e) {
        let t = s => {
            var n, o;
            switch (e.type) {
                case "failed":
                    return { ...s,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...s,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...s,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...s,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: (n = e.meta) != null ? n : null,
                        fetchStatus: ve(this.options.networkMode) ? "fetching" : "paused",
                        ...!s.dataUpdatedAt && {
                            error: null,
                            status: "loading"
                        }
                    };
                case "success":
                    return { ...s,
                        data: e.data,
                        dataUpdateCount: s.dataUpdateCount + 1,
                        dataUpdatedAt: (o = e.dataUpdatedAt) != null ? o : Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    let i = e.error;
                    return Re(i) && i.revert && this.revertState ? { ...this.revertState,
                        fetchStatus: "idle"
                    } : { ...s,
                        error: i,
                        errorUpdateCount: s.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: s.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...s,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...s,
                        ...e.state
                    }
            }
        };
        this.state = t(this.state), L.batch(() => {
            this.observers.forEach(s => {
                s.onQueryUpdate(e)
            }), this.cache.notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }
};

function Wr(r) {
    let e = typeof r.initialData == "function" ? r.initialData() : r.initialData,
        t = typeof e < "u",
        s = t ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: t ? s != null ? s : Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: t ? "success" : "loading",
        fetchStatus: "idle"
    }
}
var Xe = class extends Z {
    constructor(e) {
        super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
    }
    build(e, t, s) {
        var n;
        let o = t.queryKey,
            i = (n = t.queryHash) != null ? n : Fe(o, t),
            a = this.get(i);
        return a || (a = new Je({
            cache: this,
            logger: e.getLogger(),
            queryKey: o,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: s,
            defaultOptions: e.getQueryDefaults(o)
        }), this.add(a)), a
    }
    add(e) {
        this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
            type: "added",
            query: e
        }))
    }
    remove(e) {
        let t = this.queriesMap[e.queryHash];
        t && (e.destroy(), this.queries = this.queries.filter(s => s !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
            type: "removed",
            query: e
        }))
    }
    clear() {
        L.batch(() => {
            this.queries.forEach(e => {
                this.remove(e)
            })
        })
    }
    get(e) {
        return this.queriesMap[e]
    }
    getAll() {
        return this.queries
    }
    find(e, t) {
        let [s] = te(e, t);
        return typeof s.exact > "u" && (s.exact = !0), this.queries.find(n => Ve(s, n))
    }
    findAll(e, t) {
        let [s] = te(e, t);
        return Object.keys(s).length > 0 ? this.queries.filter(n => Ve(s, n)) : this.queries
    }
    notify(e) {
        L.batch(() => {
            this.listeners.forEach(({
                listener: t
            }) => {
                t(e)
            })
        })
    }
    onFocus() {
        L.batch(() => {
            this.queries.forEach(e => {
                e.onFocus()
            })
        })
    }
    onOnline() {
        L.batch(() => {
            this.queries.forEach(e => {
                e.onOnline()
            })
        })
    }
};
var Ze = class extends Te {
    constructor(e) {
        super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Se, this.observers = [], this.state = e.state || zr(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = { ...this.defaultOptions,
            ...e
        }, this.updateCacheTime(this.options.cacheTime)
    }
    get meta() {
        return this.options.meta
    }
    setState(e) {
        this.dispatch({
            type: "setState",
            state: e
        })
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this))
    }
    continue () {
        var e, t;
        return (e = (t = this.retryer) == null ? void 0 : t.continue()) != null ? e : this.execute()
    }
    async execute() {
        let e = () => {
                var b;
                return this.retryer = Ye({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                    onFail: (d, q) => {
                        this.dispatch({
                            type: "failed",
                            failureCount: d,
                            error: q
                        })
                    },
                    onPause: () => {
                        this.dispatch({
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        this.dispatch({
                            type: "continue"
                        })
                    },
                    retry: (b = this.options.retry) != null ? b : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode
                }), this.retryer.promise
            },
            t = this.state.status === "loading";
        try {
            var s, n, o, i, a, c, p, u;
            if (!t) {
                var y, m, g, w;
                this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }), await ((y = (m = this.mutationCache.config).onMutate) == null ? void 0 : y.call(m, this.state.variables, this));
                let d = await ((g = (w = this.options).onMutate) == null ? void 0 : g.call(w, this.state.variables));
                d !== this.state.context && this.dispatch({
                    type: "loading",
                    context: d,
                    variables: this.state.variables
                })
            }
            let b = await e();
            return await ((s = (n = this.mutationCache.config).onSuccess) == null ? void 0 : s.call(n, b, this.state.variables, this.state.context, this)), await ((o = (i = this.options).onSuccess) == null ? void 0 : o.call(i, b, this.state.variables, this.state.context)), await ((a = (c = this.mutationCache.config).onSettled) == null ? void 0 : a.call(c, b, null, this.state.variables, this.state.context, this)), await ((p = (u = this.options).onSettled) == null ? void 0 : p.call(u, b, null, this.state.variables, this.state.context)), this.dispatch({
                type: "success",
                data: b
            }), b
        } catch (b) {
            try {
                var D, h, f, Q, R, k, F, E;
                throw await ((D = (h = this.mutationCache.config).onError) == null ? void 0 : D.call(h, b, this.state.variables, this.state.context, this)), await ((f = (Q = this.options).onError) == null ? void 0 : f.call(Q, b, this.state.variables, this.state.context)), await ((R = (k = this.mutationCache.config).onSettled) == null ? void 0 : R.call(k, void 0, b, this.state.variables, this.state.context, this)), await ((F = (E = this.options).onSettled) == null ? void 0 : F.call(E, void 0, b, this.state.variables, this.state.context)), b
            } finally {
                this.dispatch({
                    type: "error",
                    error: b
                })
            }
        }
    }
    dispatch(e) {
        let t = s => {
            switch (e.type) {
                case "failed":
                    return { ...s,
                        failureCount: e.failureCount,
                        failureReason: e.error
                    };
                case "pause":
                    return { ...s,
                        isPaused: !0
                    };
                case "continue":
                    return { ...s,
                        isPaused: !1
                    };
                case "loading":
                    return { ...s,
                        context: e.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: !ve(this.options.networkMode),
                        status: "loading",
                        variables: e.variables
                    };
                case "success":
                    return { ...s,
                        data: e.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...s,
                        data: void 0,
                        error: e.error,
                        failureCount: s.failureCount + 1,
                        failureReason: e.error,
                        isPaused: !1,
                        status: "error"
                    };
                case "setState":
                    return { ...s,
                        ...e.state
                    }
            }
        };
        this.state = t(this.state), L.batch(() => {
            this.observers.forEach(s => {
                s.onMutationUpdate(e)
            }), this.mutationCache.notify({
                mutation: this,
                type: "updated",
                action: e
            })
        })
    }
};

function zr() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}
var et = class extends Z {
    constructor(e) {
        super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
    }
    build(e, t, s) {
        let n = new Ze({
            mutationCache: this,
            logger: e.getLogger(),
            mutationId: ++this.mutationId,
            options: e.defaultMutationOptions(t),
            state: s,
            defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
        });
        return this.add(n), n
    }
    add(e) {
        this.mutations.push(e), this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        this.mutations = this.mutations.filter(t => t !== e), this.notify({
            type: "removed",
            mutation: e
        })
    }
    clear() {
        L.batch(() => {
            this.mutations.forEach(e => {
                this.remove(e)
            })
        })
    }
    getAll() {
        return this.mutations
    }
    find(e) {
        return typeof e.exact > "u" && (e.exact = !0), this.mutations.find(t => ct(e, t))
    }
    findAll(e) {
        return this.mutations.filter(t => ct(e, t))
    }
    notify(e) {
        L.batch(() => {
            this.listeners.forEach(({
                listener: t
            }) => {
                t(e)
            })
        })
    }
    resumePausedMutations() {
        var e;
        return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
            let t = this.mutations.filter(s => s.state.isPaused);
            return L.batch(() => t.reduce((s, n) => s.then(() => n.continue().catch(V)), Promise.resolve()))
        }).then(() => {
            this.resuming = void 0
        }), this.resuming
    }
};

function Zt() {
    return {
        onFetch: r => {
            r.fetchFn = () => {
                var e, t, s, n, o, i;
                let a = (e = r.fetchOptions) == null || (t = e.meta) == null ? void 0 : t.refetchPage,
                    c = (s = r.fetchOptions) == null || (n = s.meta) == null ? void 0 : n.fetchMore,
                    p = c == null ? void 0 : c.pageParam,
                    u = (c == null ? void 0 : c.direction) === "forward",
                    y = (c == null ? void 0 : c.direction) === "backward",
                    m = ((o = r.state.data) == null ? void 0 : o.pages) || [],
                    g = ((i = r.state.data) == null ? void 0 : i.pageParams) || [],
                    w = g,
                    D = !1,
                    h = E => {
                        Object.defineProperty(E, "signal", {
                            enumerable: !0,
                            get: () => {
                                var b;
                                if ((b = r.signal) != null && b.aborted) D = !0;
                                else {
                                    var d;
                                    (d = r.signal) == null || d.addEventListener("abort", () => {
                                        D = !0
                                    })
                                }
                                return r.signal
                            }
                        })
                    },
                    f = r.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + r.options.queryHash + "'")),
                    Q = (E, b, d, q) => (w = q ? [b, ...w] : [...w, b], q ? [d, ...E] : [...E, d]),
                    R = (E, b, d, q) => {
                        if (D) return Promise.reject("Cancelled");
                        if (typeof d > "u" && !b && E.length) return Promise.resolve(E);
                        let O = {
                            queryKey: r.queryKey,
                            pageParam: d,
                            meta: r.options.meta
                        };
                        h(O);
                        let $ = f(O);
                        return Promise.resolve($).then(de => Q(E, d, de, q))
                    },
                    k;
                if (!m.length) k = R([]);
                else if (u) {
                    let E = typeof p < "u",
                        b = E ? p : Xt(r.options, m);
                    k = R(m, E, b)
                } else if (y) {
                    let E = typeof p < "u",
                        b = E ? p : Yr(r.options, m);
                    k = R(m, E, b, !0)
                } else {
                    w = [];
                    let E = typeof r.options.getNextPageParam > "u";
                    k = (a && m[0] ? a(m[0], 0, m) : !0) ? R([], E, g[0]) : Promise.resolve(Q([], g[0], m[0]));
                    for (let d = 1; d < m.length; d++) k = k.then(q => {
                        if (a && m[d] ? a(m[d], d, m) : !0) {
                            let $ = E ? g[d] : Xt(r.options, q);
                            return R(q, E, $)
                        }
                        return Promise.resolve(Q(q, g[d], m[d]))
                    })
                }
                return k.then(E => ({
                    pages: E,
                    pageParams: w
                }))
            }
        }
    }
}

function Xt(r, e) {
    return r.getNextPageParam == null ? void 0 : r.getNextPageParam(e[e.length - 1], e)
}

function Yr(r, e) {
    return r.getPreviousPageParam == null ? void 0 : r.getPreviousPageParam(e[0], e)
}
var yt = class {
    constructor(e = {}) {
        this.queryCache = e.queryCache || new Xe, this.mutationCache = e.mutationCache || new et, this.logger = e.logger || Se, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
    }
    mount() {
        this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = ge.subscribe(() => {
            ge.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
        }), this.unsubscribeOnline = Ce.subscribe(() => {
            Ce.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
        }))
    }
    unmount() {
        var e, t;
        this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (t = this.unsubscribeOnline) == null || t.call(this), this.unsubscribeOnline = void 0)
    }
    isFetching(e, t) {
        let [s] = te(e, t);
        return s.fetchStatus = "fetching", this.queryCache.findAll(s).length
    }
    isMutating(e) {
        return this.mutationCache.findAll({ ...e,
            fetching: !0
        }).length
    }
    getQueryData(e, t) {
        var s;
        return (s = this.queryCache.find(e, t)) == null ? void 0 : s.state.data
    }
    ensureQueryData(e, t, s) {
        let n = pe(e, t, s),
            o = this.getQueryData(n.queryKey);
        return o ? Promise.resolve(o) : this.fetchQuery(n)
    }
    getQueriesData(e) {
        return this.getQueryCache().findAll(e).map(({
            queryKey: t,
            state: s
        }) => {
            let n = s.data;
            return [t, n]
        })
    }
    setQueryData(e, t, s) {
        let n = this.queryCache.find(e),
            o = n == null ? void 0 : n.state.data,
            i = Wt(t, o);
        if (typeof i > "u") return;
        let a = pe(e),
            c = this.defaultQueryOptions(a);
        return this.queryCache.build(this, c).setData(i, { ...s,
            manual: !0
        })
    }
    setQueriesData(e, t, s) {
        return L.batch(() => this.getQueryCache().findAll(e).map(({
            queryKey: n
        }) => [n, this.setQueryData(n, t, s)]))
    }
    getQueryState(e, t) {
        var s;
        return (s = this.queryCache.find(e, t)) == null ? void 0 : s.state
    }
    removeQueries(e, t) {
        let [s] = te(e, t), n = this.queryCache;
        L.batch(() => {
            n.findAll(s).forEach(o => {
                n.remove(o)
            })
        })
    }
    resetQueries(e, t, s) {
        let [n, o] = te(e, t, s), i = this.queryCache, a = {
            type: "active",
            ...n
        };
        return L.batch(() => (i.findAll(n).forEach(c => {
            c.reset()
        }), this.refetchQueries(a, o)))
    }
    cancelQueries(e, t, s) {
        let [n, o = {}] = te(e, t, s);
        typeof o.revert > "u" && (o.revert = !0);
        let i = L.batch(() => this.queryCache.findAll(n).map(a => a.cancel(o)));
        return Promise.all(i).then(V).catch(V)
    }
    invalidateQueries(e, t, s) {
        let [n, o] = te(e, t, s);
        return L.batch(() => {
            var i, a;
            if (this.queryCache.findAll(n).forEach(p => {
                    p.invalidate()
                }), n.refetchType === "none") return Promise.resolve();
            let c = { ...n,
                type: (i = (a = n.refetchType) != null ? a : n.type) != null ? i : "active"
            };
            return this.refetchQueries(c, o)
        })
    }
    refetchQueries(e, t, s) {
        let [n, o] = te(e, t, s), i = L.batch(() => this.queryCache.findAll(n).filter(c => !c.isDisabled()).map(c => {
            var p;
            return c.fetch(void 0, { ...o,
                cancelRefetch: (p = o == null ? void 0 : o.cancelRefetch) != null ? p : !0,
                meta: {
                    refetchPage: n.refetchPage
                }
            })
        })), a = Promise.all(i).then(V);
        return o != null && o.throwOnError || (a = a.catch(V)), a
    }
    fetchQuery(e, t, s) {
        let n = pe(e, t, s),
            o = this.defaultQueryOptions(n);
        typeof o.retry > "u" && (o.retry = !1);
        let i = this.queryCache.build(this, o);
        return i.isStaleByTime(o.staleTime) ? i.fetch(o) : Promise.resolve(i.state.data)
    }
    prefetchQuery(e, t, s) {
        return this.fetchQuery(e, t, s).then(V).catch(V)
    }
    fetchInfiniteQuery(e, t, s) {
        let n = pe(e, t, s);
        return n.behavior = Zt(), this.fetchQuery(n)
    }
    prefetchInfiniteQuery(e, t, s) {
        return this.fetchInfiniteQuery(e, t, s).then(V).catch(V)
    }
    resumePausedMutations() {
        return this.mutationCache.resumePausedMutations()
    }
    getQueryCache() {
        return this.queryCache
    }
    getMutationCache() {
        return this.mutationCache
    }
    getLogger() {
        return this.logger
    }
    getDefaultOptions() {
        return this.defaultOptions
    }
    setDefaultOptions(e) {
        this.defaultOptions = e
    }
    setQueryDefaults(e, t) {
        let s = this.queryDefaults.find(n => ce(e) === ce(n.queryKey));
        s ? s.defaultOptions = t : this.queryDefaults.push({
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        if (!e) return;
        let t = this.queryDefaults.find(s => Qe(e, s.queryKey));
        return t == null ? void 0 : t.defaultOptions
    }
    setMutationDefaults(e, t) {
        let s = this.mutationDefaults.find(n => ce(e) === ce(n.mutationKey));
        s ? s.defaultOptions = t : this.mutationDefaults.push({
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        if (!e) return;
        let t = this.mutationDefaults.find(s => Qe(e, s.mutationKey));
        return t == null ? void 0 : t.defaultOptions
    }
    defaultQueryOptions(e) {
        if (e != null && e._defaulted) return e;
        let t = { ...this.defaultOptions.queries,
            ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
            ...e,
            _defaulted: !0
        };
        return !t.queryHash && t.queryKey && (t.queryHash = Fe(t.queryKey, t)), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.useErrorBoundary > "u" && (t.useErrorBoundary = !!t.suspense), t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : { ...this.defaultOptions.mutations,
            ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.queryCache.clear(), this.mutationCache.clear()
    }
};
var Le = class extends Z {
    constructor(e, t) {
        super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
    }
    bindMethods() {
        this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.currentQuery.addObserver(this), er(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return gt(this.currentQuery, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return gt(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
    }
    setOptions(e, t) {
        let s = this.options,
            n = this.currentQuery;
        if (this.options = this.client.defaultQueryOptions(e), Ge(s, this.options) || this.client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.currentQuery,
                observer: this
            }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = s.queryKey), this.updateQuery();
        let o = this.hasListeners();
        o && tr(this.currentQuery, n, this.options, s) && this.executeFetch(), this.updateResult(t), o && (this.currentQuery !== n || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && this.updateStaleTimeout();
        let i = this.computeRefetchInterval();
        o && (this.currentQuery !== n || this.options.enabled !== s.enabled || i !== this.currentRefetchInterval) && this.updateRefetchInterval(i)
    }
    getOptimisticResult(e) {
        let t = this.client.getQueryCache().build(this.client, e),
            s = this.createResult(t, e);
        return Xr(this, s, e) && (this.currentResult = s, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), s
    }
    getCurrentResult() {
        return this.currentResult
    }
    trackResult(e) {
        let t = {};
        return Object.keys(e).forEach(s => {
            Object.defineProperty(t, s, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(s), e[s])
            })
        }), t
    }
    getCurrentQuery() {
        return this.currentQuery
    }
    remove() {
        this.client.getQueryCache().remove(this.currentQuery)
    }
    refetch({
        refetchPage: e,
        ...t
    } = {}) {
        return this.fetch({ ...t,
            meta: {
                refetchPage: e
            }
        })
    }
    fetchOptimistic(e) {
        let t = this.client.defaultQueryOptions(e),
            s = this.client.getQueryCache().build(this.client, t);
        return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, t))
    }
    fetch(e) {
        var t;
        return this.executeFetch({ ...e,
            cancelRefetch: (t = e.cancelRefetch) != null ? t : !0
        }).then(() => (this.updateResult(), this.currentResult))
    }
    executeFetch(e) {
        this.updateQuery();
        let t = this.currentQuery.fetch(this.options, e);
        return e != null && e.throwOnError || (t = t.catch(V)), t
    }
    updateStaleTimeout() {
        if (this.clearStaleTimeout(), ae || this.currentResult.isStale || !Ie(this.options.staleTime)) return;
        let t = $e(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
        this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult()
        }, t)
    }
    computeRefetchInterval() {
        var e;
        return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1
    }
    updateRefetchInterval(e) {
        this.clearRefetchInterval(), this.currentRefetchInterval = e, !(ae || this.options.enabled === !1 || !Ie(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
            (this.options.refetchIntervalInBackground || ge.isFocused()) && this.executeFetch()
        }, this.currentRefetchInterval))
    }
    updateTimers() {
        this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
    }
    clearStaleTimeout() {
        this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
    }
    clearRefetchInterval() {
        this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
    }
    createResult(e, t) {
        let s = this.currentQuery,
            n = this.options,
            o = this.currentResult,
            i = this.currentResultState,
            a = this.currentResultOptions,
            c = e !== s,
            p = c ? e.state : this.currentQueryInitialState,
            u = c ? this.currentResult : this.previousQueryResult,
            {
                state: y
            } = e,
            {
                dataUpdatedAt: m,
                error: g,
                errorUpdatedAt: w,
                fetchStatus: D,
                status: h
            } = y,
            f = !1,
            Q = !1,
            R;
        if (t._optimisticResults) {
            let d = this.hasListeners(),
                q = !d && er(e, t),
                O = d && tr(e, s, t, n);
            (q || O) && (D = ve(e.options.networkMode) ? "fetching" : "paused", m || (h = "loading")), t._optimisticResults === "isRestoring" && (D = "idle")
        }
        if (t.keepPreviousData && !y.dataUpdatedAt && u != null && u.isSuccess && h !== "error") R = u.data, m = u.dataUpdatedAt, h = u.status, f = !0;
        else if (t.select && typeof y.data < "u")
            if (o && y.data === (i == null ? void 0 : i.data) && t.select === this.selectFn) R = this.selectResult;
            else try {
                this.selectFn = t.select, R = t.select(y.data), R = Ue(o == null ? void 0 : o.data, R, t), this.selectResult = R, this.selectError = null
            } catch (d) {
                this.selectError = d
            } else R = y.data;
        if (typeof t.placeholderData < "u" && typeof R > "u" && h === "loading") {
            let d;
            if (o != null && o.isPlaceholderData && t.placeholderData === (a == null ? void 0 : a.placeholderData)) d = o.data;
            else if (d = typeof t.placeholderData == "function" ? t.placeholderData() : t.placeholderData, t.select && typeof d < "u") try {
                d = t.select(d), this.selectError = null
            } catch (q) {
                this.selectError = q
            }
            typeof d < "u" && (h = "success", R = Ue(o == null ? void 0 : o.data, d, t), Q = !0)
        }
        this.selectError && (g = this.selectError, R = this.selectResult, w = Date.now(), h = "error");
        let k = D === "fetching",
            F = h === "loading",
            E = h === "error";
        return {
            status: h,
            fetchStatus: D,
            isLoading: F,
            isSuccess: h === "success",
            isError: E,
            isInitialLoading: F && k,
            data: R,
            dataUpdatedAt: m,
            error: g,
            errorUpdatedAt: w,
            failureCount: y.fetchFailureCount,
            failureReason: y.fetchFailureReason,
            errorUpdateCount: y.errorUpdateCount,
            isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
            isFetchedAfterMount: y.dataUpdateCount > p.dataUpdateCount || y.errorUpdateCount > p.errorUpdateCount,
            isFetching: k,
            isRefetching: k && !F,
            isLoadingError: E && y.dataUpdatedAt === 0,
            isPaused: D === "paused",
            isPlaceholderData: Q,
            isPreviousData: f,
            isRefetchError: E && y.dataUpdatedAt !== 0,
            isStale: vt(e, t),
            refetch: this.refetch,
            remove: this.remove
        }
    }
    updateResult(e) {
        let t = this.currentResult,
            s = this.createResult(this.currentQuery, this.options);
        if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Ge(s, t)) return;
        this.currentResult = s;
        let n = {
                cache: !0
            },
            o = () => {
                if (!t) return !0;
                let {
                    notifyOnChangeProps: i
                } = this.options, a = typeof i == "function" ? i() : i;
                if (a === "all" || !a && !this.trackedProps.size) return !0;
                let c = new Set(a != null ? a : this.trackedProps);
                return this.options.useErrorBoundary && c.add("error"), Object.keys(this.currentResult).some(p => {
                    let u = p;
                    return this.currentResult[u] !== t[u] && c.has(u)
                })
            };
        (e == null ? void 0 : e.listeners) !== !1 && o() && (n.listeners = !0), this.notify({ ...n,
            ...e
        })
    }
    updateQuery() {
        let e = this.client.getQueryCache().build(this.client, this.options);
        if (e === this.currentQuery) return;
        let t = this.currentQuery;
        this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this))
    }
    onQueryUpdate(e) {
        let t = {};
        e.type === "success" ? t.onSuccess = !e.manual : e.type === "error" && !Re(e.error) && (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
    }
    notify(e) {
        L.batch(() => {
            if (e.onSuccess) {
                var t, s, n, o;
                (t = (s = this.options).onSuccess) == null || t.call(s, this.currentResult.data), (n = (o = this.options).onSettled) == null || n.call(o, this.currentResult.data, null)
            } else if (e.onError) {
                var i, a, c, p;
                (i = (a = this.options).onError) == null || i.call(a, this.currentResult.error), (c = (p = this.options).onSettled) == null || c.call(p, void 0, this.currentResult.error)
            }
            e.listeners && this.listeners.forEach(({
                listener: u
            }) => {
                u(this.currentResult)
            }), e.cache && this.client.getQueryCache().notify({
                query: this.currentQuery,
                type: "observerResultsUpdated"
            })
        })
    }
};

function Jr(r, e) {
    return e.enabled !== !1 && !r.state.dataUpdatedAt && !(r.state.status === "error" && e.retryOnMount === !1)
}

function er(r, e) {
    return Jr(r, e) || r.state.dataUpdatedAt > 0 && gt(r, e, e.refetchOnMount)
}

function gt(r, e, t) {
    if (e.enabled !== !1) {
        let s = typeof t == "function" ? t(r) : t;
        return s === "always" || s !== !1 && vt(r, e)
    }
    return !1
}

function tr(r, e, t, s) {
    return t.enabled !== !1 && (r !== e || s.enabled === !1) && (!t.suspense || r.state.status !== "error") && vt(r, t)
}

function vt(r, e) {
    return r.isStaleByTime(e.staleTime)
}

function Xr(r, e, t) {
    return t.keepPreviousData ? !1 : t.placeholderData !== void 0 ? e.isPlaceholderData : !Ge(r.getCurrentResult(), e)
}
var ir = ne(or(), 1),
    ar = ir.useSyncExternalStore;
var re = ne(oe(), 1),
    Ct = re.createContext(void 0),
    ur = re.createContext(!1);

function lr(r, e) {
    return r || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Ct), window.ReactQueryClientContext) : Ct)
}
var Ne = ({
        context: r
    } = {}) => {
        let e = re.useContext(lr(r, re.useContext(ur)));
        if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return e
    },
    us = ({
        client: r,
        children: e,
        context: t,
        contextSharing: s = !1
    }) => {
        re.useEffect(() => (r.mount(), () => {
            r.unmount()
        }), [r]);
        let n = lr(t, s);
        return re.createElement(ur.Provider, {
            value: !t && s
        }, re.createElement(n.Provider, {
            value: r
        }, e))
    };
var tt = ne(oe(), 1),
    cr = tt.createContext(!1),
    dr = () => tt.useContext(cr),
    zn = cr.Provider;
var Ee = ne(oe(), 1);

function ls() {
    let r = !1;
    return {
        clearReset: () => {
            r = !1
        },
        reset: () => {
            r = !0
        },
        isReset: () => r
    }
}
var cs = Ee.createContext(ls()),
    hr = () => Ee.useContext(cs);
var pr = ne(oe(), 1);

function fr(r, e) {
    return typeof r == "function" ? r(...e) : !!r
}
var mr = (r, e) => {
        (r.suspense || r.useErrorBoundary) && (e.isReset() || (r.retryOnMount = !1))
    },
    yr = r => {
        pr.useEffect(() => {
            r.clearReset()
        }, [r])
    },
    gr = ({
        result: r,
        errorResetBoundary: e,
        useErrorBoundary: t,
        query: s
    }) => r.isError && !e.isReset() && !r.isFetching && fr(t, [r.error, s]);
var vr = r => {
        r.suspense && typeof r.staleTime != "number" && (r.staleTime = 1e3)
    },
    ds = (r, e) => r.isLoading && r.isFetching && !e,
    br = (r, e, t) => (r == null ? void 0 : r.suspense) && ds(e, t),
    Cr = (r, e, t) => e.fetchOptimistic(r).then(({
        data: s
    }) => {
        r.onSuccess == null || r.onSuccess(s), r.onSettled == null || r.onSettled(s, null)
    }).catch(s => {
        t.clearReset(), r.onError == null || r.onError(s), r.onSettled == null || r.onSettled(void 0, s)
    });
var xe = ne(oe(), 1);

function Rr(r, e) {
    let t = Ne({
            context: r.context
        }),
        s = dr(),
        n = hr(),
        o = t.defaultQueryOptions(r);
    o._optimisticResults = s ? "isRestoring" : "optimistic", o.onError && (o.onError = L.batchCalls(o.onError)), o.onSuccess && (o.onSuccess = L.batchCalls(o.onSuccess)), o.onSettled && (o.onSettled = L.batchCalls(o.onSettled)), vr(o), mr(o, n), yr(n);
    let [i] = xe.useState(() => new e(t, o)), a = i.getOptimisticResult(o);
    if (ar(xe.useCallback(c => {
            let p = s ? () => {} : i.subscribe(L.batchCalls(c));
            return i.updateResult(), p
        }, [i, s]), () => i.getCurrentResult(), () => i.getCurrentResult()), xe.useEffect(() => {
            i.setOptions(o, {
                listeners: !1
            })
        }, [o, i]), br(o, a, s)) throw Cr(o, i, n);
    if (gr({
            result: a,
            errorResetBoundary: n,
            useErrorBoundary: o.useErrorBoundary,
            query: i.getCurrentQuery()
        })) throw a.error;
    return o.notifyOnChangeProps ? a : i.trackResult(a)
}

function He(r, e, t) {
    let s = pe(r, e, t);
    return Rr(s, Le)
}
var hs = () => {
        var e, t, s;
        let r = (t = (e = De()) == null ? void 0 : e[at]) == null ? void 0 : t.chatUrl;
        return r || (((s = De()) == null ? void 0 : s[at].serverZone) === "EU" ? "https://houston-chat.prod.eu-central-1.amplitude.com" : "https://houston-chat.prod.us-west-2.amplitude.com")
    },
    _e = hs;
var Pe = async r => {
    let e = Ot();
    if (e) return await e(r);
    let {
        url: t,
        method: s,
        headers: n,
        body: o,
        signal: i,
        keepalive: a
    } = r;
    return fetch(t, {
        method: s,
        headers: n,
        body: o,
        signal: i,
        keepalive: a,
        credentials: "omit"
    })
};
var me = class extends Error {
        constructor(e, t) {
            super(`Request failed with status ${e}`), this.name = "ChatServiceError", this.status = e, this.data = t
        }
    },
    fs = {
        "Content-Type": "application/json",
        accept: "application/json"
    },
    Sr = () => {
        var n, o;
        let r = (n = De) == null ? void 0 : n(),
            e = (o = r == null ? void 0 : r._configuration) == null ? void 0 : o.apiKey,
            t = r == null ? void 0 : r._.user,
            s = {};
        return e && (s.Authorization = `Api-Key ${e}`), t && (s["X-Amp-User"] = Mt(t)), s
    },
    rt = () => ({ ...Sr(),
        ...ut()
    }),
    st = async (r, e, t, s = {}) => {
        let n = e;
        for (; n.startsWith("/");) n = n.slice(1);
        let o = t;
        o !== void 0 && typeof o != "string" && (o = JSON.stringify(o));
        let i = _e(),
            a = await Pe({
                url: `${i}/${n}`,
                method: r,
                headers: { ...fs,
                    ...Sr(),
                    ...s.headers,
                    ...ut()
                },
                body: o,
                signal: s.signal,
                keepalive: s.keepalive
            });
        if (!a.ok) {
            let p = await a.json();
            throw new me(a.status, p)
        }
        return a.status === 204 ? {
            data: void 0,
            status: a.status,
            statusText: a.statusText,
            headers: Object.fromEntries(a.headers.entries())
        } : {
            data: await a.json(),
            status: a.status,
            statusText: a.statusText,
            headers: Object.fromEntries(a.headers.entries())
        }
    },
    nt = (r, e = void 0, t = {}) => st("POST", r, e, t),
    Oe = (r, e = {}) => st("GET", r, void 0, e);
async function Ke(r) {
    try {
        await st("POST", "/api/telemetry", r)
    } catch (e) {
        xt.warn("Failed to submit telemetry:", e)
    }
}
var Tr = () => Lt() ? {
        request_source: "mobile_webview",
        supported_action_types: [...Ut]
    } : {},
    wr = r => {
        var e, t, s, n, o;
        return {
            id: (t = (e = r == null ? void 0 : r.id) != null ? e : r == null ? void 0 : r.attachment_id) != null ? t : "",
            content_type: (s = r == null ? void 0 : r.content_type) != null ? s : "image/png",
            size_bytes: (n = r == null ? void 0 : r.size_bytes) != null ? n : 0,
            url: r == null ? void 0 : r.url,
            filename: (o = r == null ? void 0 : r.filename) != null ? o : r == null ? void 0 : r.original_filename,
            preview_url: r == null ? void 0 : r.preview_url
        }
    },
    Er = (r, e, t, s) => {
        let n = "",
            o = !1,
            i = () => r.read().then(({
                done: a,
                value: c
            }) => {
                var k, F;
                let {
                    onContent: p,
                    onComplete: u,
                    onError: y,
                    onToolCall: m,
                    onToolResult: g,
                    onMessageSaved: w,
                    onDeferredToolRequests: D,
                    clearStreamTimeout: h,
                    onStreamError: f
                } = t;
                if (a) return h == null || h(), (!(s != null && s.skipCompleteIfDeferredTools) || !o) && u(), Promise.resolve();
                let Q = e.decode(c, {
                    stream: !0
                });
                n += Q;
                let R = n.split(`
`);
                n = R.pop() || "";
                for (let E of R)
                    if (E.startsWith("data: ")) {
                        let b = E.slice(6).trim();
                        if (b === "[DONE]") return h == null || h(), (!(s != null && s.skipCompleteIfDeferredTools) || !o) && u(), Promise.resolve();
                        if (b && b !== "") try {
                            let d = JSON.parse(b);
                            if (d.type === "deferred_tool_requests" && d.requests) {
                                o = !0, D && D(d.requests);
                                continue
                            }
                            if (d.type === "tool_call") {
                                let q = (k = d.event) == null ? void 0 : k.part;
                                m && (q != null && q.tool_name) && (q != null && q.args) && m({
                                    name: q.tool_name,
                                    arguments: q.args
                                })
                            } else if (d.type === "tool_result") {
                                let q = (F = d.event) == null ? void 0 : F.result;
                                g && q && g(q)
                            } else if (d.type === "text" && d.content) p(d.content);
                            else if (d.type === "text_delta" && d.content) p(d.content);
                            else if (d.type === "message_saved" && d.message_id !== void 0) w && w(d.message_id, d.role || "assistant", d.hide_feedback);
                            else {
                                if (d.type === "error") return h == null || h(), f == null || f(), y(d.message || d.error || "Unknown error occurred"), Promise.resolve();
                                if (d.type === "done") return h == null || h(), u(), Promise.resolve()
                            }
                        } catch (d) {
                            console.warn("Failed to parse streaming response:", b != null ? b : "(empty)", d)
                        }
                    }
                return i()
            });
        return i
    },
    Rt = class {
        constructor() {
            this.baseUrl = "/api/chat"
        }
        async createSession(e) {
            try {
                let t = e ? {
                        title: e
                    } : {},
                    s = await nt(`${this.baseUrl}/session`, t);
                if (!s.data || !s.data.session_id) throw new Error("Invalid response format: missing session_id");
                return s.data
            } catch (t) {
                throw console.error("ChatService: Failed to create session:", t), t
            }
        }
        async getChatHistory(e) {
            return (await Oe(`${this.baseUrl}/${e}/history`)).data
        }
        async abortMessage(e, t) {
            let s = {
                message_id: t
            };
            await nt(`${this.baseUrl}/${e}/abort`, s)
        }
        async recordUserAction(e, t) {
            return (await nt(`${this.baseUrl}/${e}/action`, t, {
                keepalive: !0
            })).data
        }
        streamRequest(e, t, s, n, o, i, a, c, p) {
            let u = new AbortController,
                y = 3e4,
                m = null,
                g = !1,
                w = !1,
                D = !1,
                h = !1,
                f = "unmount",
                Q = Date.now(),
                R = () => {
                    m && (clearTimeout(m), m = null)
                },
                k = (O, $, ye) => {
                    if (D) return;
                    D = !0;
                    let de = {
                        api_version: "v1",
                        endpoint: "stream",
                        error_type: O,
                        error_stage: $,
                        had_content: g ? "true" : "false"
                    };
                    ye !== void 0 && (de.http_status = String(ye)), Ke({
                        events: [{
                            type: "increment",
                            name: "stream_interrupted"
                        }],
                        tags: de
                    })
                },
                F = () => {
                    h || (h = !0, Ke({
                        events: [{
                            type: "timing",
                            name: "time_to_first_token",
                            value: Date.now() - Q
                        }],
                        tags: {
                            api_version: "v1",
                            endpoint: "stream"
                        }
                    }))
                };
            (() => {
                R(), m = setTimeout(() => {
                    g || (w = !0, k("network_error", "timeout"), u.abort(), o("Request timed out. Please try again.", "timeout"))
                }, y)
            })();
            let b = O => {
                    g || (g = !0, R(), F()), s(O)
                },
                d = O => {
                    k("stream_error", "stream"), o(O, "server")
                },
                q = _e();
            return Pe({
                url: `${q}${this.baseUrl}/${e}/stream`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "text/event-stream",
                    ...rt()
                },
                body: JSON.stringify(t),
                signal: u.signal
            }).then(O => {
                if (!O.ok) {
                    if (R(), k(O.status >= 500 ? "server_error" : "unknown", "response", O.status), O.status === 400) return O.json().catch(() => null).then(ee => {
                        let je = typeof(ee == null ? void 0 : ee.detail) == "string" ? ee.detail : "Invalid request";
                        o(je, "validation")
                    });
                    throw new Error(`HTTP error! status: ${O.status}`)
                }
                if (!O.body) throw R(), k("stream_error", "no_body"), new Error("No response body");
                let $ = O.body.getReader(),
                    ye = new TextDecoder;
                return Er($, ye, {
                    onContent: b,
                    onComplete: n,
                    onError: d,
                    onToolCall: i,
                    onToolResult: a,
                    onMessageSaved: c,
                    onDeferredToolRequests: p,
                    clearStreamTimeout: R,
                    onStreamError: () => k("stream_error", "stream")
                }, {
                    skipCompleteIfDeferredTools: !0
                })()
            }).catch(O => {
                if (R(), w) return;
                if ((O == null ? void 0 : O.name) === "AbortError") {
                    f === "user" && Ke({
                        events: [{
                            type: "increment",
                            name: "stream_aborted_by_user"
                        }],
                        tags: {
                            api_version: "v1",
                            endpoint: "stream",
                            had_content: g ? "true" : "false"
                        }
                    });
                    return
                }
                let $ = O instanceof TypeError ? "network_error" : "unknown";
                k($, "fetch"), o(O.message || "Failed to start streaming", "connection")
            }), O => {
                O && (f = O), R(), u.abort()
            }
        }
        streamChatResponse(e, t, s, n, o, i, a, c, p, u, y) {
            let m = {
                messages: t,
                stream: (y == null ? void 0 : y.includeStreamParam) === !1 ? void 0 : !0,
                ...u && u.length > 0 ? {
                    attachment_ids: u
                } : {},
                ...y != null && y.filter ? {
                    filter: y.filter
                } : {},
                ...Tr()
            };
            return (y == null ? void 0 : y.trackMessageSentTelemetry) !== !1 && Ke({
                events: [{
                    type: "increment",
                    name: "message_sent"
                }],
                tags: {
                    api_version: "v1",
                    endpoint: "stream"
                }
            }), this.streamRequest(e, m, s, n, o, i, a, c, p)
        }
        streamAfterToolApproval(e, t, s, n, o, i, a, c, p) {
            let u = new AbortController,
                y = _e();
            return Pe({
                url: `${y}${this.baseUrl}/${e}/approve_tools`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "text/event-stream",
                    ...rt()
                },
                body: JSON.stringify({ ...t,
                    ...Tr()
                }),
                signal: u.signal
            }).then(m => {
                if (!m.ok) throw new Error(`HTTP error! status: ${m.status}`);
                if (!m.body) throw new Error("No response body");
                let g = m.body.getReader(),
                    w = new TextDecoder;
                return Er(g, w, {
                    onContent: s,
                    onComplete: n,
                    onError: o,
                    onToolCall: i,
                    onToolResult: a,
                    onMessageSaved: c,
                    onDeferredToolRequests: p
                }, {
                    skipCompleteIfDeferredTools: !0
                })()
            }).catch(m => {
                m.name !== "AbortError" && o(m.message || "Failed to submit tool approval")
            }), () => {
                u.abort()
            }
        }
        streamFeedbackResponse(e, t, s, n, o, i, a, c) {
            return this.streamChatResponse(e, [t], s, n, o, void 0, i, a, void 0, void 0, {
                includeStreamParam: !1,
                trackMessageSentTelemetry: !1,
                filter: c
            })
        }
        async loadChatHistory(e) {
            return (await this.getChatHistory(e)).messages.map(s => {
                var n, o;
                return { ...s,
                    attachments: (o = (n = s.attachments) == null ? void 0 : n.map(i => wr(i))) != null ? o : []
                }
            })
        }
        async uploadAttachment(e, t) {
            let s = _e(),
                n = new FormData;
            n.append("file", t);
            let o = await Pe({
                url: `${s}${this.baseUrl}/${e}/attachments`,
                method: "POST",
                headers: { ...rt()
                },
                body: n
            });
            if (!o.ok) {
                let a = await o.json();
                return Promise.reject(a)
            }
            let i = await o.json();
            return { ...wr(i),
                url: i == null ? void 0 : i.url
            }
        }
        async refreshAttachmentUrl(e, t) {
            return (await Oe(`${this.baseUrl}/${e}/attachments/${t}`)).data
        }
        async getChatSessions() {
            return (await Oe(`${this.baseUrl}/sessions`)).data
        }
        async getChatSettings() {
            return (await Oe(`${this.baseUrl}/settings`)).data
        }
        async getChatFeatures() {
            return (await Oe(`${this.baseUrl}/features`)).data
        }
    },
    W = new Rt;

function jo() {
    return He({
        queryKey: ["assistant-settings"],
        queryFn: async () => await W.getChatSettings()
    })
}
var J = ne(oe());
var _ = ne(oe());
var St = /【([^】]+)】/g,
    $o = (r, e, t) => {
        if (!e || !Array.isArray(e)) return r;
        let s = e.filter(n => t.includes(n.type)).map(n => n.content_item_id);
        return r.replace(St, (n, o) => !/^\d+$/.test(o) || s.includes(o) ? "" : n)
    };
var ps = 1e3,
    ms = 3e4,
    ys = r => new Promise(e => setTimeout(e, r)),
    xr = () => {
        let r = le(l => l.sessionId),
            e = le(l => l.messages),
            t = le(l => l.filter),
            s = le(l => l.setSessionId),
            n = le(l => l.setMessages),
            o = le(l => l.appendMessage),
            i = le(l => l.updateMessage),
            a = le(l => l.removeMessage),
            c = (0, _.useCallback)((l, v) => {
                s(l), n(v)
            }, [s, n]),
            [p, u] = (0, _.useState)(!1),
            [y, m] = (0, _.useState)(null),
            [g, w] = (0, _.useState)(null),
            [D, h] = (0, _.useState)(!1),
            f = (0, _.useRef)(null),
            Q = (0, _.useRef)(null),
            R = (0, _.useRef)(0),
            [k, F] = (0, _.useState)(() => r !== null),
            [E, b] = (0, _.useState)(null),
            d = (0, _.useRef)(e);
        d.current = e;
        let q = (0, _.useRef)({}),
            O = _.default.useContext(Be),
            $ = (0, _.useCallback)(l => {
                l.filter(C => {
                    var S;
                    return ((S = C.deferred_tool_approval) == null ? void 0 : S.status) === "pending"
                }).forEach(C => {
                    var N;
                    let S = (N = C.function_calls) == null ? void 0 : N.filter(x => x.approval_status === "pending");
                    S && S.length > 0 && b(x => ({ ...x,
                        approvals: S.map(U => ({
                            tool_call_id: U.tool_call_id,
                            tool_name: U.function.name,
                            args: U.function.arguments
                        }))
                    }))
                })
            }, []),
            ye = (0, _.useCallback)(() => {
                F(!0)
            }, []),
            de = (0, _.useCallback)(async ({
                targetSessionId: l,
                userContent: v,
                attachmentCount: C,
                isActive: S
            }) => {
                let N = Date.now() + ms;
                for (; Date.now() < N && S();) {
                    try {
                        let x = await W.loadChatHistory(l),
                            U = [...x].reverse().find(A => {
                                var T, P;
                                return !(A.role !== "user" || A.content !== v || ((P = (T = A.attachments) == null ? void 0 : T.length) != null ? P : 0) !== C)
                            });
                        if (!U) return !1;
                        if (S() && n(x), (() => {
                                let A = U.message_id;
                                if (A !== void 0) return x.some(P => P.role !== "user" && P.parent_message_id === A);
                                let T = x.findIndex(P => P.id === U.id);
                                return T >= 0 && x.slice(T + 1).some(P => P.role !== "user")
                            })()) return !0
                    } catch (x) {}
                    await ys(ps)
                }
                return !1
            }, [n]),
            ee = (0, _.useCallback)((l, v) => {
                let {
                    sessionId: C,
                    aiMessageId: S,
                    userMessageLocalId: N,
                    toolTrackingCount: x,
                    responseMessageCount: U,
                    responseStartTime: K,
                    isActiveAttempt: A
                } = v;
                return {
                    onContent: T => {
                        A && !A() || (l.aiContent += T, i(S, {
                            content: l.aiContent,
                            tool_calls: l.currentToolCalls,
                            tool_results: l.currentToolResults,
                            cited_sources: Array.from(l.aiContent.matchAll(St), P => P[1]).filter(P => P !== void 0) || []
                        }))
                    },
                    onComplete: () => {
                        if (A && !A()) return;
                        u(!1), f.current = null, N && i(N, {
                            is_response_generating: !1
                        }), l.aiContent || F(!0);
                        let T = l.currentToolCalls.some(z => z.name === "fallback_cant_answer"),
                            P = l.currentToolCalls.some(z => z.name === "fallback_escalate_to_human"),
                            se = Date.now() - K,
                            he = l.currentToolCalls.length > 0,
                            X = T ? "fallback" : P ? "escalation" : "response";
                        !T && !P && B.chat.responseGenerated(C, S, l.aiContent.length, U), B.chat.responseReceivedGenerated(C, S, l.aiContent.length, se, U), B.chat.messageReceived(C, S, l.aiContent.length, se, U, he, X)
                    },
                    onToolCall: T => {
                        A && !A() || (l.currentToolCalls = [...l.currentToolCalls, T], i(S, {
                            content: l.aiContent,
                            tool_calls: l.currentToolCalls,
                            tool_results: l.currentToolResults
                        }), B.chat.toolCallExecuted(C, S, `${T.name}-${l.currentToolCalls.length}`, T.name, x), T.name === "fallback_cant_answer" && B.chat.fallbackTriggered(C, S, T.name, x), T.name === "fallback_escalate_to_human" && B.chat.escalationTriggered(C, S, T.name, x))
                    },
                    onToolResult: T => {
                        if (A && !A()) return;
                        l.currentToolResults = [...l.currentToolResults, T], i(S, {
                            content: l.aiContent,
                            tool_calls: l.currentToolCalls,
                            tool_results: l.currentToolResults
                        });
                        let P = l.currentToolCalls[l.currentToolResults.length - 1];
                        P && B.chat.toolResultDisplayed(C, S, `${P.name}-${l.currentToolResults.length}`, P.name, "success", x)
                    }
                }
            }, [i]),
            je = (0, _.useRef)(),
            be = (0, _.useCallback)(l => {
                let {
                    placeholderId: v,
                    onMessageSaved: C,
                    isActiveAttempt: S,
                    toolTrackingCount: N,
                    responseMessageCount: x,
                    responseStartTime: U
                } = l;
                return K => {
                    var he, X;
                    if (!S()) return;
                    let A = (he = K.calls) != null ? he : [],
                        T = (X = K.approvals) != null ? X : [],
                        P = () => {
                            let z = T.map(I => I.approval_string).filter(I => I != null && I !== ""),
                                M = (z.length > 0 ? z : ["Your approval is required to continue."]).map((I, j) => ({
                                    id: `tool-approval-${Date.now()}-${j}`,
                                    role: "assistant",
                                    content: I,
                                    created_at: new Date().toISOString(),
                                    deferred_tool_approval: {
                                        status: "pending"
                                    },
                                    function_calls: T.map(ue => ({
                                        tool_call_id: ue.tool_call_id,
                                        function: {
                                            name: ue.tool_name,
                                            arguments: ue.args
                                        }
                                    }))
                                }));
                            n(d.current.filter(I => I.id !== v).concat(M)), b(K), f.current = null, u(!1)
                        },
                        se = O == null ? void 0 : O.callbackToolRegistry;
                    if (A.length > 0 && se) {
                        let z = A.map(async H => {
                            var fe;
                            let M = H.tool_name,
                                I = (fe = H.callback_name) != null ? fe : M,
                                j = se.get(I);
                            if (!j) return B.chat.callbackToolNoHandler(M, I), [H.tool_call_id, {
                                status: "ok"
                            }];
                            B.chat.callbackToolDispatched(M, I);
                            let ue = Date.now();
                            try {
                                let Y = {};
                                if (H.args) try {
                                    Y = typeof H.args == "string" ? JSON.parse(H.args) : H.args
                                } catch (Ss) {
                                    Y = {}
                                }
                                let Me = await j(Y);
                                return B.chat.callbackToolSucceeded(M, Date.now() - ue), [H.tool_call_id, Me]
                            } catch (Y) {
                                let Me = Y instanceof Error ? Y.message : String(Y);
                                return B.chat.callbackToolFailed(M, Me), console.error("[Chat] Callback tool execution failed", {
                                    tool_name: M,
                                    error: Y
                                }), [H.tool_call_id, {
                                    error: "Callback tool execution failed"
                                }]
                            }
                        });
                        if (T.length === 0) {
                            Promise.all(z).then(H => {
                                var fe;
                                if (!S()) return;
                                let M = {};
                                for (let [Y, Me] of H) Y != null && (M[Y] = Me);
                                let j = ee({
                                    aiContent: "",
                                    currentToolCalls: [],
                                    currentToolResults: []
                                }, {
                                    sessionId: r != null ? r : "",
                                    aiMessageId: v,
                                    userMessageLocalId: void 0,
                                    toolTrackingCount: N,
                                    responseMessageCount: x,
                                    responseStartTime: U,
                                    isActiveAttempt: S
                                });
                                f.current && f.current();
                                let ue = ((fe = je.current) != null ? fe : be)({
                                    placeholderId: v,
                                    onMessageSaved: C,
                                    isActiveAttempt: S,
                                    toolTrackingCount: N,
                                    responseMessageCount: x,
                                    responseStartTime: U
                                });
                                f.current = W.streamAfterToolApproval(r != null ? r : "", {
                                    approvals: {},
                                    callback_results: M
                                }, j.onContent, j.onComplete, Y => {
                                    S() && (u(!1), m(Y), F(!0), f.current = null)
                                }, j.onToolCall, j.onToolResult, C, ue)
                            });
                            return
                        }
                        Promise.all(z).then(H => {
                            if (!S()) return;
                            let M = {};
                            for (let [I, j] of H) I != null && (M[I] = j);
                            q.current = M, P()
                        });
                        return
                    }
                    P()
                }
            }, [r, ee, n, O]);
        je.current = be;
        let wt = (0, _.useCallback)(({
                requestMessages: l,
                aiMessageBase: v,
                toolTrackingCount: C,
                responseMessageCount: S,
                onErrorCleanup: N,
                userMessageLocalId: x,
                attachmentIds: U,
                userContent: K
            }) => {
                if (!r) return;
                q.current = {};
                let A = ++R.current,
                    T = () => R.current === A,
                    P = v.id,
                    se = Date.now(),
                    X = ee({
                        aiContent: "",
                        currentToolCalls: [],
                        currentToolResults: []
                    }, {
                        sessionId: r,
                        aiMessageId: P,
                        userMessageLocalId: x,
                        toolTrackingCount: C,
                        responseMessageCount: S,
                        responseStartTime: se,
                        isActiveAttempt: T
                    }),
                    H = be({
                        placeholderId: P,
                        onMessageSaved: (M, I, j) => {
                            T() && I === "assistant" && i(P, {
                                message_id: M,
                                ...j !== void 0 ? {
                                    hide_feedback: j
                                } : {}
                            })
                        },
                        isActiveAttempt: T,
                        toolTrackingCount: C,
                        responseMessageCount: S,
                        responseStartTime: se
                    });
                f.current && f.current(), f.current = W.streamChatResponse(r, l, X.onContent, X.onComplete, (M, I) => {
                    if (!T()) return;
                    if (f.current = null, !(I === "connection" || I === "timeout")) {
                        u(!1), F(!0), w({
                            type: I,
                            message: M,
                            failedContent: K
                        }), N();
                        return
                    }(async () => {
                        var fe;
                        let ue = await de({
                            targetSessionId: r,
                            userContent: K,
                            attachmentCount: (fe = U == null ? void 0 : U.length) != null ? fe : 0,
                            isActive: T
                        });
                        T() && (u(!1), F(!0), !ue && (w({
                            type: I,
                            message: M,
                            failedContent: K
                        }), N()))
                    })()
                }, X.onToolCall, X.onToolResult, (M, I, j) => {
                    T() && (I === "assistant" ? i(P, {
                        message_id: M,
                        ...j !== void 0 ? {
                            hide_feedback: j
                        } : {}
                    }) : I === "user" && x && (i(x, {
                        message_id: M
                    }), i(P, {
                        parent_message_id: M
                    })))
                }, H, U, {
                    filter: t
                })
            }, [de, r, ee, be, t, i]),
            Dr = (0, _.useCallback)((l, v) => {
                var X, z;
                let C = v ? "approved" : "denied";
                u(!0), F(!1);
                let S = `assistant-${Date.now()}`,
                    N = {
                        id: S,
                        content: "",
                        role: "assistant",
                        created_at: new Date().toISOString()
                    };
                n([...d.current.map(H => H.message_id === l.message_id ? { ...H,
                    deferred_tool_approval: {
                        status: C
                    }
                } : H), N]);
                let x = {};
                if (E) {
                    let H = (z = (X = l.function_calls) == null ? void 0 : X.map(M => M.tool_call_id)) != null ? z : [];
                    for (let M of E.approvals) H.includes(M.tool_call_id) && (x[M.tool_call_id] = v);
                    b(M => M ? { ...M,
                        approvals: M.approvals.filter(I => !H.includes(I.tool_call_id))
                    } : null)
                }
                let U = ++R.current,
                    K = () => R.current === U,
                    T = ee({
                        aiContent: "",
                        currentToolCalls: [],
                        currentToolResults: []
                    }, {
                        sessionId: r != null ? r : "",
                        aiMessageId: S,
                        userMessageLocalId: void 0,
                        toolTrackingCount: e.length + 1,
                        responseMessageCount: e.length + 2,
                        responseStartTime: Date.now(),
                        isActiveAttempt: K
                    }),
                    P = (H, M, I) => {
                        K() && M === "assistant" && i(S, {
                            message_id: H,
                            ...I !== void 0 ? {
                                hide_feedback: I
                            } : {}
                        })
                    },
                    se = be({
                        placeholderId: S,
                        onMessageSaved: P,
                        isActiveAttempt: K,
                        toolTrackingCount: e.length,
                        responseMessageCount: e.length + 1,
                        responseStartTime: Date.now()
                    });
                f.current && f.current();
                let he = q.current;
                q.current = {}, f.current = W.streamAfterToolApproval(r != null ? r : "", {
                    approvals: x,
                    ...Object.keys(he).length > 0 ? {
                        callback_results: he
                    } : {}
                }, T.onContent, T.onComplete, H => {
                    K() && (u(!1), m(H), f.current = null)
                }, T.onToolCall, T.onToolResult, P, se)
            }, [r, E, ee, be, e, n, i]),
            qr = (0, _.useCallback)(async l => {
                if (D) return r;
                h(!0), m(null);
                try {
                    let v = await W.createSession(l);
                    s(v.session_id), n([]), B.chat.sessionStarted(v.session_id, l);
                    try {
                        let C = await W.loadChatHistory(v.session_id);
                        n(C), c(v.session_id, C), $(C), C.length === 0 && !p && f.current === null && F(!0)
                    } catch (C) {
                        console.error("[Chat] initializeSession: failed to load initial history", C), !p && f.current === null && F(!0)
                    }
                    return v.session_id
                } catch (v) {
                    throw console.error("Failed to initialize session:", v), m(v instanceof Error ? v.message : "Failed to create session"), v
                } finally {
                    h(!1)
                }
            }, [D, s, n, c, r, p, $]),
            kr = (0, _.useCallback)(async (l, v) => {
                m(null), s(l), n(v), F(!0), $(v)
            }, [s, n, $]),
            Ir = (0, _.useCallback)(async l => {
                try {
                    m(null), s(l);
                    let v = await W.loadChatHistory(l);
                    n(v), F(!0), $(v)
                } catch (v) {
                    if (v instanceof me && v.status === 404) {
                        console.warn("[Chat] Session not found, clearing state to allow fresh session"), s(null), n([]);
                        return
                    }
                    m(v instanceof Error ? v.message : "Failed to load chat history")
                }
            }, [s, n, $]),
            ot = (0, _.useCallback)(async (l, v) => {
                let C = l.trim(),
                    S = !!(v && v.length > 0);
                if (!r || p || !C && !S) return;
                u(!0), m(null), w(null), F(!1);
                let N = {
                    id: `user-${Date.now()}`,
                    content: C,
                    role: "user",
                    created_at: new Date().toISOString(),
                    is_response_generating: !0,
                    ...S ? {
                        attachments: v
                    } : {}
                };
                o(N), B.chat.messageSent(r, N.id, C.length, e.length + 1);
                try {
                    let x = [...e, N],
                        U = `assistant-${Date.now()}`,
                        K = {
                            id: U,
                            content: "",
                            role: "assistant",
                            created_at: new Date().toISOString()
                        };
                    o(K), wt({
                        requestMessages: x,
                        aiMessageBase: K,
                        toolTrackingCount: x.length,
                        responseMessageCount: x.length + 1,
                        onErrorCleanup: () => {
                            a(U), i(N.id, {
                                is_response_generating: !1
                            })
                        },
                        userMessageLocalId: N.id,
                        attachmentIds: S ? v == null ? void 0 : v.map(A => A.id) : void 0,
                        userContent: C
                    })
                } catch (x) {
                    u(!1), m(x instanceof Error ? x.message : "Failed to send message"), i(N.id, {
                        is_response_generating: !1
                    })
                }
            }, [r, p, e, wt, o, i, a]),
            Fr = (0, _.useCallback)(() => {
                if (!g) return;
                let l = g.failedContent;
                w(null), ot(l)
            }, [g, ot]),
            Qr = (0, _.useCallback)(async (l, v, C) => {
                if (!r) return;
                Q.current && (Q.current(), Q.current = null);
                let S = {
                        id: `feedback-${Date.now()}`,
                        content: C,
                        role: "feedback",
                        created_at: new Date().toISOString(),
                        feedback: {
                            score: v,
                            reason: C,
                            ...typeof l == "number" ? {
                                target_message_id: l
                            } : {
                                target_message_uuid: l
                            }
                        }
                    },
                    N = null,
                    x = "",
                    U = [],
                    K = A => {
                        if (!N) {
                            N = `assistant-feedback-${Date.now()}`;
                            let T = {
                                id: N,
                                content: "",
                                role: "assistant",
                                created_at: new Date().toISOString(),
                                ...A
                            };
                            o(T);
                            return
                        }
                        i(N, A)
                    };
                Q.current = W.streamFeedbackResponse(r, S, A => {
                    x += A, K({
                        content: x,
                        tool_results: U
                    })
                }, () => {
                    Q.current = null
                }, A => {
                    console.error("Failed to stream feedback response:", A), Q.current = null
                }, A => {
                    U = [...U, A], K({
                        content: x,
                        tool_results: U
                    })
                }, (A, T, P) => {
                    T === "assistant" && K({
                        message_id: A,
                        ...P !== void 0 ? {
                            hide_feedback: P
                        } : {}
                    })
                }, t)
            }, [o, r, i, t]),
            it = (0, _.useCallback)(() => {
                f.current && (f.current(), f.current = null), R.current += 1, Q.current && (Q.current(), Q.current = null), u(!1)
            }, []),
            Ur = (0, _.useCallback)(() => {
                let l = [...e].reverse().find(C => C.role === "user" && C.is_response_generating && C.message_id !== void 0);
                r && (l == null ? void 0 : l.message_id) !== void 0 && W.abortMessage(r, l.message_id).catch(C => {
                    console.warn("Failed to abort message generation:", C)
                }), r && B.chat.messageStopped(r, e.length), f.current && (f.current("user"), f.current = null), R.current += 1, u(!1), F(!0);
                let v = [...e].reverse().find(C => C.role === "user" && C.is_response_generating);
                v && i(v.id, {
                    is_response_generating: !1
                })
            }, [e, r, i]),
            Lr = (0, _.useCallback)(() => {
                R.current += 1, n([]), s(null), F(!1)
            }, [n, s]);
        return (0, _.useEffect)(() => it, [it]), {
            sessionId: r,
            messages: e,
            isLoading: p,
            error: y,
            chatError: g,
            isInitializing: D,
            initializeSession: qr,
            loadChatHistory: Ir,
            sendMessage: ot,
            sendFeedback: Qr,
            cleanup: it,
            stopStreaming: Ur,
            clearMessages: Lr,
            restoreSession: kr,
            allMessagesStreamed: k,
            finishStreaming: ye,
            retryLastMessage: Fr,
            submitToolApproval: Dr
        }
    };
var _r = (0, J.createContext)(null),
    ni = ({
        children: r
    }) => {
        let e = xr(),
            t = (0, J.useMemo)(() => new Dt, []),
            [s, n] = (0, J.useState)(() => t.get(ke, "") !== "" && !e.sessionId);
        return (0, J.useEffect)(() => {
            e.sessionId && t.set(ke, e.sessionId)
        }, [e.sessionId, t]), (0, J.useEffect)(() => {
            let o = t.get(ke, "");
            o && !e.sessionId ? W.loadChatHistory(o).then(i => {
                e.restoreSession(o, i), B.chat.sessionRestored(o, i.length)
            }).catch(i => {
                i instanceof me && i.status === 404 && t.remove(ke), console.error("Failed to restore session from storage:", i)
            }).finally(() => {
                n(!1)
            }) : n(!1)
        }, []), s ? null : J.default.createElement(_r.Provider, {
            value: e
        }, r)
    },
    oi = () => {
        let r = (0, J.useContext)(_r);
        if (!r) throw new Error("useChatSessionContext must be used inside ChatSessionProvider");
        return r
    };
var Pr = {
        display: "flex",
        height: "var(--form-control-height)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--form-control-gap)",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--button-tertiary-border-color)",
        background: "var(--button-tertiary-background)",
        color: "var(--button-tertiary-content)",
        cursor: "pointer",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-medium)",
        lineHeight: "var(--font-line-height-normal)",
        "&:hover": {
            borderColor: "var(--button-tertiary-border-color-hover)",
            background: "var(--button-tertiary-background-hover)",
            color: "var(--button-tertiary-content-hover)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&:disabled": {
            cursor: "not-allowed"
        }
    },
    Or = {
        background: "var(--button-primary-background)",
        borderColor: "var(--button-primary-border-color)",
        color: "var(--button-primary-content)",
        "&:hover": {
            background: "var(--button-primary-background)",
            borderColor: "var(--button-primary-border-color)",
            color: "var(--button-primary-content)"
        },
        "&:focus": {
            background: "var(--button-primary-background)"
        }
    },
    Ar = "toggleButton",
    Ae = ({
        theme: r,
        isSelected: e,
        children: t,
        ...s
    }) => {
        let {
            overrides: n
        } = Ht(Ar, r);
        return ie(Kt, {
            css: [n, qe(Pr), e && qe(Or)].filter(Boolean),
            ...s
        }, t)
    };
Ae.slug = Ar;
Ae.styles = Pr;
Ae.activeStyles = Or;
Ae.renderMock = (r, e, t, s) => ie(Ae, {
    theme: {
        theme: r,
        mode: e
    },
    isSelected: !!t,
    onClick: s
}, "All items");
var di = Ae;
var gs = "34c9b06c55315a2b61b4c0dc2f347037",
    vs = "ed7e96fe495ddc8a17b7ece9d62d9b8d",
    bs = /^(\/docs)\/(?:en|ja|ko|es|pt|fr|de)(?:-[a-z]{2,4})?(\/|$)/i,
    Mr = (r, e) => {
        let t = r.trim();
        if (!t) return t;
        let s;
        try {
            s = new URL(t)
        } catch (a) {
            return t
        }
        let n = s.protocol.replace(/:$/, "").toLowerCase(),
            o = s.host.toLowerCase(),
            i = s.pathname.replace(/[/ ]+$/, "");
        return (e === gs || e === vs) && (i = i.replace(bs, "$1$2")), `${n}://${o}${i}`
    };

function gi({
    apiKey: r,
    id: e,
    url: t
}) {
    let s = Ne(),
        n = t && Mr(t, r),
        o = ["contentItem", r, e != null ? e : n],
        i = s.getQueryData(o),
        a = (i == null ? void 0 : i.id) === -1;
    return He({
        queryKey: o,
        queryFn: async () => {
            if (!e && !n) throw new Error("Either id or url is required");
            let c = "/sdk/resource_center/v1/";
            e && e.length > 0 ? c += `contentitem/${e}` : c += `contentitem_by_url?target_url=${n}`;
            let u = (await At(c, {
                headers: {
                    Authorization: `Api-Key ${r}`
                }
            })).data;
            return e && u.url ? s.setQueryData(["contentItem", r, u.url], u) : n && u.id && s.setQueryData(["contentItem", r, u.id], u), u
        },
        enabled: !!r && (!!e || !!n) && !a
    })
}
var Tt = ne(oe());
var Cs = Nt.div `
  position: relative;
  display: flex;
  padding: var(--layout-padding);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--layout-gap);
  align-self: stretch;
`,
    Rs = Tt.default.forwardRef(({
        children: r,
        ...e
    }, t) => Tt.default.createElement(Cs, {
        ref: t,
        ...e
    }, r)),
    Ci = Rs;
export {
    xs as a, Kr as b, _s as c, Ps as d, yt as e, Ne as f, us as g, He as h, Mr as i, gi as j, Ci as k, $t as l, ks as m, _e as n, Pe as o, me as p, rt as q, Ke as r, W as s, jo as t, St as u, $o as v, _r as w, ni as x, oi as y, di as z
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
*/