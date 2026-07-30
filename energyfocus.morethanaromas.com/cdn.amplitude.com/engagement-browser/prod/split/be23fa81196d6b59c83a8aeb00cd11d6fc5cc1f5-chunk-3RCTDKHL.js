import {
    _ as Dt,
    a as it,
    c as d,
    e as S,
    f as Mr
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var Ft = it((bn, Se) => {
    (function() {
        "use strict";
        var e = {}.hasOwnProperty;

        function t() {
            for (var o = "", a = 0; a < arguments.length; a++) {
                var i = arguments[a];
                i && (o = n(o, r(i)))
            }
            return o
        }

        function r(o) {
            if (typeof o == "string" || typeof o == "number") return o;
            if (typeof o != "object") return "";
            if (Array.isArray(o)) return t.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) return o.toString();
            var a = "";
            for (var i in o) e.call(o, i) && o[i] && (a = n(a, i));
            return a
        }

        function n(o, a) {
            return a ? o ? o + " " + a : o + a : o
        }
        typeof Se < "u" && Se.exports ? (t.default = t, Se.exports = t) : window.classNames = t
    })()
});
var Kt = it(c => {
    "use strict";
    var ut = Symbol.for("react.element"),
        ft = Symbol.for("react.portal"),
        be = Symbol.for("react.fragment"),
        Re = Symbol.for("react.strict_mode"),
        xe = Symbol.for("react.profiler"),
        he = Symbol.for("react.provider"),
        Ae = Symbol.for("react.context"),
        jr = Symbol.for("react.server_context"),
        Pe = Symbol.for("react.forward_ref"),
        _e = Symbol.for("react.suspense"),
        Te = Symbol.for("react.suspense_list"),
        we = Symbol.for("react.memo"),
        Oe = Symbol.for("react.lazy"),
        Lr = Symbol.for("react.offscreen"),
        Wt;
    Wt = Symbol.for("react.module.reference");

    function O(e) {
        if (typeof e == "object" && e !== null) {
            var t = e.$$typeof;
            switch (t) {
                case ut:
                    switch (e = e.type, e) {
                        case be:
                        case xe:
                        case Re:
                        case _e:
                        case Te:
                            return e;
                        default:
                            switch (e = e && e.$$typeof, e) {
                                case jr:
                                case Ae:
                                case Pe:
                                case Oe:
                                case we:
                                case he:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case ft:
                    return t
            }
        }
    }
    c.ContextConsumer = Ae;
    c.ContextProvider = he;
    c.Element = ut;
    c.ForwardRef = Pe;
    c.Fragment = be;
    c.Lazy = Oe;
    c.Memo = we;
    c.Portal = ft;
    c.Profiler = xe;
    c.StrictMode = Re;
    c.Suspense = _e;
    c.SuspenseList = Te;
    c.isAsyncMode = function() {
        return !1
    };
    c.isConcurrentMode = function() {
        return !1
    };
    c.isContextConsumer = function(e) {
        return O(e) === Ae
    };
    c.isContextProvider = function(e) {
        return O(e) === he
    };
    c.isElement = function(e) {
        return typeof e == "object" && e !== null && e.$$typeof === ut
    };
    c.isForwardRef = function(e) {
        return O(e) === Pe
    };
    c.isFragment = function(e) {
        return O(e) === be
    };
    c.isLazy = function(e) {
        return O(e) === Oe
    };
    c.isMemo = function(e) {
        return O(e) === we
    };
    c.isPortal = function(e) {
        return O(e) === ft
    };
    c.isProfiler = function(e) {
        return O(e) === xe
    };
    c.isStrictMode = function(e) {
        return O(e) === Re
    };
    c.isSuspense = function(e) {
        return O(e) === _e
    };
    c.isSuspenseList = function(e) {
        return O(e) === Te
    };
    c.isValidElementType = function(e) {
        return typeof e == "string" || typeof e == "function" || e === be || e === xe || e === Re || e === _e || e === Te || e === Lr || typeof e == "object" && e !== null && (e.$$typeof === Oe || e.$$typeof === we || e.$$typeof === he || e.$$typeof === Ae || e.$$typeof === Pe || e.$$typeof === Wt || e.getModuleId !== void 0)
    };
    c.typeOf = O
});
var Ht = it((Pn, Bt) => {
    "use strict";
    Bt.exports = Kt()
});
var fn = "51px";

function y(e) {
    "@babel/helpers - typeof";
    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, y(e)
}

function Vt(e, t) {
    if (y(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (y(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function ge(e) {
    var t = Vt(e, "string");
    return y(t) == "symbol" ? t : t + ""
}

function E(e, t, r) {
    return (t = ge(t)) in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Ut(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ut(Object(r), !0).forEach(function(n) {
            E(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ut(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function $t(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (t.includes(n)) continue;
            r[n] = e[n]
        }
    return r
}

function Ee(e, t) {
    if (e == null) return {};
    var r, n, o = $t(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
}
var Ce = d(S()),
    X = d(Ht());
var zt = d(S());

function st(e, t, r) {
    var n = zt.useRef({});
    return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value
}
var ct = function(t, r) {
        typeof t == "function" ? t(r) : y(t) === "object" && t && "current" in t && (t.current = r)
    },
    Nr = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var o = r.filter(Boolean);
        return o.length <= 1 ? o[0] : function(a) {
            r.forEach(function(i) {
                ct(i, a)
            })
        }
    },
    kr = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return st(function() {
            return Nr.apply(void 0, r)
        }, r, function(o, a) {
            return o.length !== a.length || o.every(function(i, f) {
                return i !== a[f]
            })
        })
    },
    pt = function(t) {
        var r, n, o = (0, X.isMemo)(t) ? t.type.type : t.type;
        return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== X.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== X.ForwardRef)
    };

function It(e) {
    return (0, Ce.isValidElement)(e) && !(0, X.isFragment)(e)
}
var On = Number(Ce.version.split(".")[0]) >= 19 ? function(e) {
    return It(e) ? e.props.ref : null
} : function(e) {
    return It(e) ? e.ref : null
};

function Dr(e, t) {
    if (!e) return !1;
    if (e.contains) return e.contains(t);
    for (var r = t; r;) {
        if (r === e) return !0;
        r = r.parentNode
    }
    return !1
}
var qt = d(S()),
    lt = d(Mr());

function Qt(e) {
    return e instanceof HTMLElement || e instanceof SVGElement
}

function Vr(e) {
    return e && y(e) === "object" && Qt(e.nativeElement) ? e.nativeElement : Qt(e) ? e : null
}

function mt(e) {
    var t = Vr(e);
    if (t) return t;
    if (e instanceof qt.default.Component) {
        var r;
        return (r = lt.default.findDOMNode) === null || r === void 0 ? void 0 : r.call(lt.default, e)
    }
    return null
}

function Me(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Gt(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ge(n.key), n)
    }
}

function je(e, t, r) {
    return t && Gt(e.prototype, t), r && Gt(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Le(e, t) {
    return Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
        return r.__proto__ = n, r
    }, Le(e, t)
}

function Ne(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Le(e, t)
}

function ie(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function ue(e) {
    return ue = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, ue(e)
}

function vt() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch (t) {}
    return (vt = function() {
        return !!e
    })()
}

function Zt(e, t) {
    if (t && (y(t) == "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ie(e)
}

function ke(e) {
    var t = vt();
    return function() {
        var r, n = ue(e);
        if (t) {
            var o = ue(this).constructor;
            r = Reflect.construct(n, arguments, o)
        } else r = n.apply(this, arguments);
        return Zt(this, r)
    }
}
var Xt = function(t) {
        return +setTimeout(t, 16)
    },
    Yt = function(t) {
        return clearTimeout(t)
    };
typeof window < "u" && "requestAnimationFrame" in window && (Xt = function(t) {
    return window.requestAnimationFrame(t)
}, Yt = function(t) {
    return window.cancelAnimationFrame(t)
});
var Jt = 0,
    dt = new Map;

function er(e) {
    dt.delete(e)
}
var tr = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    Jt += 1;
    var n = Jt;

    function o(a) {
        if (a === 0) er(n), t();
        else {
            var i = Xt(function() {
                o(a - 1)
            });
            dt.set(n, i)
        }
    }
    return o(r), n
};
tr.cancel = function(e) {
    var t = dt.get(e);
    return er(e), Yt(t)
};
var yt = tr;

function gt(e) {
    if (Array.isArray(e)) return e
}

function rr(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, o, a, i, f = [],
            m = !0,
            u = !1;
        try {
            if (a = (r = r.call(e)).next, t === 0) {
                if (Object(r) !== r) return;
                m = !1
            } else
                for (; !(m = (n = a.call(r)).done) && (f.push(n.value), f.length !== t); m = !0);
        } catch (p) {
            u = !0, o = p
        } finally {
            try {
                if (!m && r.return != null && (i = r.return(), Object(i) !== i)) return
            } finally {
                if (u) throw o
            }
        }
        return f
    }
}

function fe(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n
}

function se(e, t) {
    if (e) {
        if (typeof e == "string") return fe(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? fe(e, t) : void 0
    }
}

function St() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function x(e, t) {
    return gt(e) || rr(e, t) || se(e, t) || St()
}

function $() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
var re = d(S());
var nr = $() ? re.useLayoutEffect : re.useEffect,
    Ur = function(t, r) {
        var n = re.useRef(!0);
        nr(function() {
            return t(n.current)
        }, r), nr(function() {
            return n.current = !1,
                function() {
                    n.current = !0
                }
        }, [])
    };
var co = Ur;
var hr = d(Ft());
var _ = d(S()),
    Ot = d(S());
var Et = d(S());
var or = Et.createContext({});
var ar = d(S()),
    Fr = function(e) {
        Ne(r, e);
        var t = ke(r);

        function r() {
            return Me(this, r), t.apply(this, arguments)
        }
        return je(r, [{
            key: "render",
            value: function() {
                return this.props.children
            }
        }]), r
    }(ar.Component),
    ir = Fr;
var De = d(S());

function W(e) {
    var t = De.useRef();
    t.current = e;
    var r = De.useCallback(function() {
        for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a))
    }, []);
    return r
}
var ne = d(S());

function Y(e) {
    var t = ne.useRef(!1),
        r = ne.useState(e),
        n = x(r, 2),
        o = n[0],
        a = n[1];
    ne.useEffect(function() {
        return t.current = !1,
            function() {
                t.current = !0
            }
    }, []);

    function i(f, m) {
        m && t.current || a(f)
    }
    return [o, i]
}

function ur(e) {
    if (Array.isArray(e)) return fe(e)
}

function bt(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function fr() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function $r(e) {
    return ur(e) || bt(e) || se(e) || fr()
}
var Rt = {},
    Kr = [],
    Br = function(t) {
        Kr.push(t)
    };

function Hr(e, t) {
    if (0) var r
}

function zr(e, t) {
    if (0) var r
}

function Ir() {
    Rt = {}
}

function sr(e, t, r) {
    !t && !Rt[r] && (e(!1, r), Rt[r] = !0)
}

function Ve(e, t) {
    sr(Hr, e, t)
}

function Qr(e, t) {
    sr(zr, e, t)
}
Ve.preMessage = Br;
Ve.resetWarned = Ir;
Ve.noteOnce = Qr;
var qr = Ve;
var Ue = d(S());

function xt(e) {
    var t = Ue.useReducer(function(f) {
            return f + 1
        }, 0),
        r = x(t, 2),
        n = r[1],
        o = Ue.useRef(e),
        a = W(function() {
            return o.current
        }),
        i = W(function(f) {
            o.current = typeof f == "function" ? f(o.current) : f, n()
        });
    return [a, i]
}
var Qe = d(S()),
    B = d(S());
var D = "none",
    ce = "appear",
    pe = "enter",
    le = "leave",
    ht = "none",
    P = "prepare",
    V = "start",
    K = "active",
    Fe = "end",
    $e = "prepared";
var yr = d(S()),
    gr = d(S());

function cr(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r
}

function Gr(e, t) {
    var r = {
        animationend: cr("Animation", "AnimationEnd"),
        transitionend: cr("Transition", "TransitionEnd")
    };
    return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r
}
var Zr = Gr($(), typeof window < "u" ? window : {}),
    lr = {};
$() && (pr = document.createElement("div"), lr = pr.style);
var pr, We = {};

function mr(e) {
    if (We[e]) return We[e];
    var t = Zr[e];
    if (t)
        for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
            var a = r[o];
            if (Object.prototype.hasOwnProperty.call(t, a) && a in lr) return We[e] = t[a], We[e]
        }
    return ""
}
var vr = mr("animationend"),
    dr = mr("transitionend"),
    Ke = !!(vr && dr),
    At = vr || "animationend",
    Pt = dr || "transitionend";

function _t(e, t) {
    if (!e) return null;
    if (y(e) === "object") {
        var r = t.replace(/-\w/g, function(n) {
            return n[1].toUpperCase()
        });
        return e[r]
    }
    return "".concat(e, "-").concat(t)
}
var Sr = function(e) {
    var t = (0, gr.useRef)();

    function r(o) {
        o && (o.removeEventListener(Pt, e), o.removeEventListener(At, e))
    }

    function n(o) {
        t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Pt, e), o.addEventListener(At, e), t.current = o)
    }
    return yr.useEffect(function() {
        return function() {
            r(t.current)
        }
    }, []), [n, r]
};
var Be = d(S()),
    Jr = $() ? Be.useLayoutEffect : Be.useEffect,
    He = Jr;
var br = d(S());
var ze = d(S()),
    Er = function() {
        var e = ze.useRef(null);

        function t() {
            yt.cancel(e.current)
        }

        function r(n) {
            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
            t();
            var a = yt(function() {
                o <= 1 ? n({
                    isCanceled: function() {
                        return a !== e.current
                    }
                }) : r(n, o - 1)
            });
            e.current = a
        }
        return ze.useEffect(function() {
            return function() {
                t()
            }
        }, []), [r, t]
    };
var Xr = [P, V, K, Fe],
    Yr = [P, $e],
    Tt = !1,
    Rr = !0;

function Ie(e) {
    return e === K || e === Fe
}
var xr = function(e, t, r) {
    var n = Y(ht),
        o = x(n, 2),
        a = o[0],
        i = o[1],
        f = Er(),
        m = x(f, 2),
        u = m[0],
        p = m[1];

    function l() {
        i(P, !0)
    }
    var v = t ? Yr : Xr;
    return He(function() {
        if (a !== ht && a !== Fe) {
            var g = v.indexOf(a),
                b = v[g + 1],
                C = r(a);
            C === Tt ? i(b, !0) : b && u(function(L) {
                function T() {
                    L.isCanceled() || i(b, !0)
                }
                C === !0 ? T() : Promise.resolve(C).then(T)
            })
        }
    }, [e, a]), br.useEffect(function() {
        return function() {
            p()
        }
    }, []), [l, a]
};

function wt(e, t, r, n) {
    var o = n.motionEnter,
        a = o === void 0 ? !0 : o,
        i = n.motionAppear,
        f = i === void 0 ? !0 : i,
        m = n.motionLeave,
        u = m === void 0 ? !0 : m,
        p = n.motionDeadline,
        l = n.motionLeaveImmediately,
        v = n.onAppearPrepare,
        g = n.onEnterPrepare,
        b = n.onLeavePrepare,
        C = n.onAppearStart,
        L = n.onEnterStart,
        T = n.onLeaveStart,
        H = n.onAppearActive,
        z = n.onEnterActive,
        U = n.onLeaveActive,
        I = n.onAppearEnd,
        M = n.onEnterEnd,
        w = n.onLeaveEnd,
        Q = n.onVisibleChanged,
        et = Y(),
        te = x(et, 2),
        j = te[0],
        q = te[1],
        h = xt(D),
        G = x(h, 2),
        F = G[0],
        Z = G[1],
        tt = Y(null),
        me = x(tt, 2),
        oe = me[0],
        Ct = me[1],
        N = F(),
        rt = (0, B.useRef)(!1),
        nt = (0, B.useRef)(null);

    function ve() {
        return r()
    }
    var Mt = (0, B.useRef)(!1);

    function jt() {
        Z(D), Ct(null, !0)
    }
    var Lt = W(function(A) {
            var R = F();
            if (R !== D) {
                var k = ve();
                if (!(A && !A.deadline && A.target !== k)) {
                    var de = Mt.current,
                        ye;
                    R === ce && de ? ye = I == null ? void 0 : I(k, A) : R === pe && de ? ye = M == null ? void 0 : M(k, A) : R === le && de && (ye = w == null ? void 0 : w(k, A)), de && ye !== !1 && jt()
                }
            }
        }),
        Pr = Sr(Lt),
        _r = x(Pr, 1),
        Tr = _r[0],
        Nt = function(R) {
            switch (R) {
                case ce:
                    return E(E(E({}, P, v), V, C), K, H);
                case pe:
                    return E(E(E({}, P, g), V, L), K, z);
                case le:
                    return E(E(E({}, P, b), V, T), K, U);
                default:
                    return {}
            }
        },
        ae = Qe.useMemo(function() {
            return Nt(N)
        }, [N]),
        wr = xr(N, !e, function(A) {
            if (A === P) {
                var R = ae[P];
                return R ? R(ve()) : Tt
            }
            if (J in ae) {
                var k;
                Ct(((k = ae[J]) === null || k === void 0 ? void 0 : k.call(ae, ve(), null)) || null)
            }
            return J === K && N !== D && (Tr(ve()), p > 0 && (clearTimeout(nt.current), nt.current = setTimeout(function() {
                Lt({
                    deadline: !0
                })
            }, p))), J === $e && jt(), Rr
        }),
        kt = x(wr, 2),
        Or = kt[0],
        J = kt[1],
        Cr = Ie(J);
    Mt.current = Cr, He(function() {
        q(t);
        var A = rt.current;
        rt.current = !0;
        var R;
        !A && t && f && (R = ce), A && t && a && (R = pe), (A && !t && u || !A && l && !t && u) && (R = le);
        var k = Nt(R);
        R && (e || k[P]) ? (Z(R), Or()) : Z(D)
    }, [t]), (0, B.useEffect)(function() {
        (N === ce && !f || N === pe && !a || N === le && !u) && Z(D)
    }, [f, a, u]), (0, B.useEffect)(function() {
        return function() {
            rt.current = !1, clearTimeout(nt.current)
        }
    }, []);
    var ot = Qe.useRef(!1);
    (0, B.useEffect)(function() {
        j && (ot.current = !0), j !== void 0 && N === D && ((ot.current || j) && (Q == null || Q(j)), ot.current = !0)
    }, [j, N]);
    var at = oe;
    return ae[P] && J === V && (at = s({
        transition: "none"
    }, at)), [N, J, at, j != null ? j : t]
}

function en(e) {
    var t = e;
    y(e) === "object" && (t = e.transitionSupport);

    function r(o, a) {
        return !!(o.motionName && t && a !== !1)
    }
    var n = _.forwardRef(function(o, a) {
        var i = o.visible,
            f = i === void 0 ? !0 : i,
            m = o.removeOnLeave,
            u = m === void 0 ? !0 : m,
            p = o.forceRender,
            l = o.children,
            v = o.motionName,
            g = o.leavedClassName,
            b = o.eventProps,
            C = _.useContext(or),
            L = C.motion,
            T = r(o, L),
            H = (0, Ot.useRef)(),
            z = (0, Ot.useRef)();

        function U() {
            try {
                return H.current instanceof HTMLElement ? H.current : mt(z.current)
            } catch (oe) {
                return null
            }
        }
        var I = wt(T, f, U, o),
            M = x(I, 4),
            w = M[0],
            Q = M[1],
            et = M[2],
            te = M[3],
            j = _.useRef(te);
        te && (j.current = !0);
        var q = _.useCallback(function(oe) {
                H.current = oe, ct(a, oe)
            }, [a]),
            h, G = s(s({}, b), {}, {
                visible: f
            });
        if (!l) h = null;
        else if (w === D) te ? h = l(s({}, G), q) : !u && j.current && g ? h = l(s(s({}, G), {}, {
            className: g
        }), q) : p || !u && !g ? h = l(s(s({}, G), {}, {
            style: {
                display: "none"
            }
        }), q) : h = null;
        else {
            var F;
            Q === P ? F = "prepare" : Ie(Q) ? F = "active" : Q === V && (F = "start");
            var Z = _t(v, "".concat(w, "-").concat(F));
            h = l(s(s({}, G), {}, {
                className: (0, hr.default)(_t(v, w), E(E({}, Z, Z && F), v, typeof v == "string")),
                style: et
            }), q)
        }
        if (_.isValidElement(h) && pt(h)) {
            var tt = h,
                me = tt.ref;
            me || (h = _.cloneElement(h, {
                ref: q
            }))
        }
        return _.createElement(ir, {
            ref: z
        }, h)
    });
    return n.displayName = "CSSMotion", n
}
var qe = en(Ke);
var ee = d(S());
var Ge = "add",
    Ze = "keep",
    Je = "remove",
    Ye = "removed";

function tn(e) {
    var t;
    return e && y(e) === "object" && "key" in e ? t = e : t = {
        key: e
    }, s(s({}, t), {}, {
        key: String(t.key)
    })
}

function Xe() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(tn)
}

function Ar() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        r = [],
        n = 0,
        o = t.length,
        a = Xe(e),
        i = Xe(t);
    a.forEach(function(u) {
        for (var p = !1, l = n; l < o; l += 1) {
            var v = i[l];
            if (v.key === u.key) {
                n < l && (r = r.concat(i.slice(n, l).map(function(g) {
                    return s(s({}, g), {}, {
                        status: Ge
                    })
                })), n = l), r.push(s(s({}, v), {}, {
                    status: Ze
                })), n += 1, p = !0;
                break
            }
        }
        p || r.push(s(s({}, u), {}, {
            status: Je
        }))
    }), n < o && (r = r.concat(i.slice(n).map(function(u) {
        return s(s({}, u), {}, {
            status: Ge
        })
    })));
    var f = {};
    r.forEach(function(u) {
        var p = u.key;
        f[p] = (f[p] || 0) + 1
    });
    var m = Object.keys(f).filter(function(u) {
        return f[u] > 1
    });
    return m.forEach(function(u) {
        r = r.filter(function(p) {
            var l = p.key,
                v = p.status;
            return l !== u || v !== Je
        }), r.forEach(function(p) {
            p.key === u && (p.status = Ze)
        })
    }), r
}
var rn = ["component", "children", "onVisibleChanged", "onAllRemoved"],
    nn = ["status"],
    on = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];

function an(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : qe,
        r = function(n) {
            Ne(a, n);
            var o = ke(a);

            function a() {
                var i;
                Me(this, a);
                for (var f = arguments.length, m = new Array(f), u = 0; u < f; u++) m[u] = arguments[u];
                return i = o.call.apply(o, [this].concat(m)), E(ie(i), "state", {
                    keyEntities: []
                }), E(ie(i), "removeKey", function(p) {
                    i.setState(function(l) {
                        var v = l.keyEntities.map(function(g) {
                            return g.key !== p ? g : s(s({}, g), {}, {
                                status: Ye
                            })
                        });
                        return {
                            keyEntities: v
                        }
                    }, function() {
                        var l = i.state.keyEntities,
                            v = l.filter(function(g) {
                                var b = g.status;
                                return b !== Ye
                            }).length;
                        v === 0 && i.props.onAllRemoved && i.props.onAllRemoved()
                    })
                }), i
            }
            return je(a, [{
                key: "render",
                value: function() {
                    var f = this,
                        m = this.state.keyEntities,
                        u = this.props,
                        p = u.component,
                        l = u.children,
                        v = u.onVisibleChanged,
                        g = u.onAllRemoved,
                        b = Ee(u, rn),
                        C = p || ee.Fragment,
                        L = {};
                    return on.forEach(function(T) {
                        L[T] = b[T], delete b[T]
                    }), delete b.keys, ee.createElement(C, b, m.map(function(T, H) {
                        var z = T.status,
                            U = Ee(T, nn),
                            I = z === Ge || z === Ze;
                        return ee.createElement(t, Dt({}, L, {
                            key: U.key,
                            visible: I,
                            eventProps: U,
                            onVisibleChanged: function(w) {
                                v == null || v(w, {
                                    key: U.key
                                }), w || f.removeKey(U.key)
                            }
                        }), function(M, w) {
                            return l(s(s({}, M), {}, {
                                index: H
                            }), w)
                        })
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(f, m) {
                    var u = f.keys,
                        p = m.keyEntities,
                        l = Xe(u),
                        v = Ar(p, l);
                    return {
                        keyEntities: v.filter(function(g) {
                            var b = p.find(function(C) {
                                var L = C.key;
                                return g.key === L
                            });
                            return !(b && b.status === Ye && g.status === Je)
                        })
                    }
                }
            }]), a
        }(ee.Component);
    return E(r, "defaultProps", {
        component: "div"
    }), r
}
var un = an(Ke);
var yi = qe;
export {
    fn as a, x as b, $ as c, qr as d, y as e, Nr as f, kr as g, pt as h, $r as i, co as j, E as k, s as l, Dr as m, Ft as n, mt as o, Ee as p, Me as q, je as r, Ne as s, ie as t, ke as u, Y as v, yt as w, yi as x
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/