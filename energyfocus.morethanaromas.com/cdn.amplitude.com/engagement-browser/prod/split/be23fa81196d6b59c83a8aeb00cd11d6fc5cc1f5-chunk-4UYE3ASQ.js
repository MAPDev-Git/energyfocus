import {
    b as I,
    c as X,
    e as Fe,
    g as Te,
    h as St,
    i as Et,
    j as ue,
    l as b,
    m as me,
    n as Re,
    x as xe
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-3RCTDKHL.js";
import {
    B as Tt,
    D as fe,
    E as At,
    F as Nt,
    H as Mt,
    c as $e,
    d as gt,
    t as He,
    w as bt,
    z as Ct
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-7B2P2PNW.js";
import {
    Gc as Ve,
    Lc as Be,
    Nc as ht,
    Ob as L,
    Rd as xt,
    Sb as yt,
    Sc as U,
    Td as wt,
    Vc as Rt,
    _ as k,
    a as _,
    aa as B,
    c as h,
    ca as G,
    da as ie,
    e as E,
    f as vo,
    ha as vt,
    t as We,
    v as F
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var Qe = _((Zi, Ht) => {
    function Mo(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }
    Ht.exports = Mo
});
var Kt = _((Ji, Ft) => {
    var Io = typeof window == "object" && window && window.Object === Object && window;
    Ft.exports = Io
});
var Ge = _((ea, jt) => {
    var Po = Kt(),
        Oo = typeof self == "object" && self && self.Object === Object && self,
        Do = Po || Oo || Function("return this")();
    jt.exports = Do
});
var Yt = _((ta, zt) => {
    var _o = Ge(),
        ko = function() {
            return _o.Date.now()
        };
    zt.exports = ko
});
var Qt = _((ra, qt) => {
    var Lo = /\s/;

    function Uo(e) {
        for (var t = e.length; t-- && Lo.test(e.charAt(t)););
        return t
    }
    qt.exports = Uo
});
var Xt = _((oa, Gt) => {
    var Wo = Qt(),
        $o = /^\s+/;

    function Vo(e) {
        return e && e.slice(0, Wo(e) + 1).replace($o, "")
    }
    Gt.exports = Vo
});
var Xe = _((na, Zt) => {
    var Bo = Ge(),
        Ho = Bo.Symbol;
    Zt.exports = Ho
});
var rr = _((ia, tr) => {
    var Jt = Xe(),
        er = Object.prototype,
        Fo = er.hasOwnProperty,
        Ko = er.toString,
        pe = Jt ? Jt.toStringTag : void 0;

    function jo(e) {
        var t = Fo.call(e, pe),
            r = e[pe];
        try {
            e[pe] = void 0;
            var o = !0
        } catch (i) {}
        var n = Ko.call(e);
        return o && (t ? e[pe] = r : delete e[pe]), n
    }
    tr.exports = jo
});
var nr = _((aa, or) => {
    var zo = Object.prototype,
        Yo = zo.toString;

    function qo(e) {
        return Yo.call(e)
    }
    or.exports = qo
});
var cr = _((sa, sr) => {
    var ir = Xe(),
        Qo = rr(),
        Go = nr(),
        Xo = "[object Null]",
        Zo = "[object Undefined]",
        ar = ir ? ir.toStringTag : void 0;

    function Jo(e) {
        return e == null ? e === void 0 ? Zo : Xo : ar && ar in Object(e) ? Qo(e) : Go(e)
    }
    sr.exports = Jo
});
var dr = _((ca, lr) => {
    function en(e) {
        return e != null && typeof e == "object"
    }
    lr.exports = en
});
var mr = _((la, ur) => {
    var tn = cr(),
        rn = dr(),
        on = "[object Symbol]";

    function nn(e) {
        return typeof e == "symbol" || rn(e) && tn(e) == on
    }
    ur.exports = nn
});
var gr = _((da, vr) => {
    var an = Xt(),
        fr = Qe(),
        sn = mr(),
        pr = NaN,
        cn = /^[-+]0x[0-9a-f]+$/i,
        ln = /^0b[01]+$/i,
        dn = /^0o[0-7]+$/i,
        un = parseInt;

    function mn(e) {
        if (typeof e == "number") return e;
        if (sn(e)) return pr;
        if (fr(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = fr(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = an(e);
        var r = ln.test(e);
        return r || dn.test(e) ? un(e.slice(2), r ? 2 : 8) : cn.test(e) ? pr : +e
    }
    vr.exports = mn
});
var hn = _((ua, hr) => {
    var fn = Qe(),
        Ze = Yt(),
        yr = gr(),
        pn = "Expected a function",
        vn = Math.max,
        gn = Math.min;

    function yn(e, t, r) {
        var o, n, i, a, c, s, l = 0,
            m = !1,
            f = !1,
            p = !0;
        if (typeof e != "function") throw new TypeError(pn);
        t = yr(t) || 0, fn(r) && (m = !!r.leading, f = "maxWait" in r, i = f ? vn(yr(r.maxWait) || 0, t) : i, p = "trailing" in r ? !!r.trailing : p);

        function y(d) {
            var g = o,
                M = n;
            return o = n = void 0, l = d, a = e.apply(M, g), a
        }

        function v(d) {
            return l = d, c = setTimeout(w, t), m ? y(d) : a
        }

        function T(d) {
            var g = d - s,
                M = d - l,
                W = t - g;
            return f ? gn(W, i - M) : W
        }

        function C(d) {
            var g = d - s,
                M = d - l;
            return s === void 0 || g >= t || g < 0 || f && M >= i
        }

        function w() {
            var d = Ze();
            if (C(d)) return D(d);
            c = setTimeout(w, T(d))
        }

        function D(d) {
            return c = void 0, p && o ? y(d) : (o = n = void 0, a)
        }

        function R() {
            c !== void 0 && clearTimeout(c), l = 0, o = s = n = c = void 0
        }

        function S() {
            return c === void 0 ? a : D(Ze())
        }

        function A() {
            var d = Ze(),
                g = C(d);
            if (o = arguments, n = this, s = d, g) {
                if (c === void 0) return v(s);
                if (f) return clearTimeout(c), c = setTimeout(w, t), y(s)
            }
            return c === void 0 && (c = setTimeout(w, t)), a
        }
        return A.cancel = R, A.flush = S, A
    }
    hr.exports = yn
});
var P = h(E());
var Ae = h(E());
var go = (e, t = 260) => {
        let r = parseFloat(t.toString()) * (/\ds$/.test(t.toString()) ? 1e3 : 1);
        if (e) {
            let o = parseFloat(e.toString()) * (/\ds$/.test(e.toString()) ? 1e3 : 1);
            if (!isNaN(o)) return o
        }
        return r
    },
    Pt = e => {
        let t = `--${e}-anim-transition-property`,
            r = `--${e}-anim-transition-timing`,
            o = `--${e}-anim-transition-duration`;
        return {
            transitionProperty: t,
            transitionTiming: r,
            transitionDuration: o
        }
    },
    Ot = e => {
        let t = `--anim-transition-property--${e}`,
            r = `--anim-transition-timing--${e}`,
            o = `--anim-transform-initial--${e}`,
            n = `--anim-transform-animated--${e}`;
        return {
            transitionProperty: t,
            transitionTiming: r,
            transformInitial: o,
            transformAnimated: n
        }
    },
    yo = (e, t, r = "lightMode") => {
        var c, s, l;
        let o = Pt(e),
            n = t ? (c = t[r]) == null ? void 0 : c.varOverrides[o.transitionProperty] : void 0,
            i = t ? (s = t[r]) == null ? void 0 : s.varOverrides[o.transitionTiming] : void 0;
        return (l = ["instant", "fade", "spring", "scale"].find(m => {
            let f = Ot(m);
            return t && n === Ke(t, r, f.transitionProperty) && i === Ke(t, r, f.transitionTiming)
        })) != null ? l : "instant"
    },
    It = e => {
        if (e.includes("-")) {
            let [t, r] = e.split("-");
            return `${r} ${t}`
        }
        switch (e) {
            case "center":
                return "center center";
            case "bottomRight":
                return "bottom right";
            case "bottomLeft":
                return "bottom left"
        }
        return e
    },
    ho = (e, t, r, o) => {
        let n = {
            transformOrigin: "center"
        };
        if (r !== "scale") return n;
        switch (t) {
            case "modal":
                n.transformOrigin = "center center";
                break;
            case "popover":
                n.transformOrigin = It(o != null ? o : "center");
                break;
            case "helphub":
            case "checklist":
                n.transformOrigin = It(o != null ? o : "bottomRight");
                break
        }
        return n
    },
    we = (e, t, r) => {
        var o, n, i;
        return (i = (o = e == null ? void 0 : e[t].varOverrides[r]) != null ? o : e == null ? void 0 : e[t].varDefaults[r]) != null ? i : (n = $e) == null ? void 0 : n[t].varDefaults[r]
    },
    Ke = (e, t, r) => {
        var o, n;
        return (n = e == null ? void 0 : e[t].varDefaults[r]) != null ? n : (o = $e) == null ? void 0 : o[t].varDefaults[r]
    },
    Dt = (e, t, r, o = "lightMode", n) => {
        let i = yo(t, r, o),
            a = Pt(t),
            c = Ot(i),
            s = ho(e, t, i, n),
            l = go(we(r, o, a.transitionDuration), Ke(r, o, "--anim-transition-duration"));
        return {
            type: i,
            vars: a,
            presetVars: c,
            additional: s,
            durationMS: l
        }
    };
var _t = (e, t) => {
    let r = vt(),
        o = gt(),
        n = Dt(r, e, o.theme, o.mode, t == null ? void 0 : t.position),
        i = (0, Ae.useMemo)(() => !!window.matchMedia("(prefers-reduced-motion: reduce)").matches, []),
        a = n.durationMS,
        c = n.type !== "instant" && !i,
        s = (0, Ae.useMemo)(() => we(o.theme, o.mode, n.presetVars.transformInitial), [o]),
        l = (0, Ae.useMemo)(() => we(o.theme, o.mode, n.presetVars.transformAnimated), [o]),
        m = c ? {
            opacity: 0,
            transform: s ? `var(${n.presetVars.transformInitial})` : void 0,
            transitionProperty: `var(${n.vars.transitionProperty})`,
            transitionTimingFunction: `var(${n.vars.transitionTiming})`,
            transitionDuration: `var(${n.vars.transitionDuration})`,
            transformOrigin: n.additional.transformOrigin
        } : {};
    return {
        animated: c ? { ...m,
            opacity: 1,
            transform: l ? `var(${n.presetVars.transformAnimated})` : void 0
        } : {},
        initial: m,
        type: n.type,
        durationMS: a,
        isWidgetAnimated: c
    }
};
var ae = h(E()),
    ze = (e, t) => {
        let [r, o] = (0, ae.useState)(!1);
        return (0, ae.useEffect)(() => {
            let n;
            if (e) o(!0);
            else {
                if (t === 0) {
                    o(!1);
                    return
                }
                n = setTimeout(() => o(!1), t)
            }
            return () => clearTimeout(n)
        }, [e, t]), r
    },
    je = {
        timingFunction: "ease",
        durationMs: 300
    },
    kt = e => {
        if (e) {
            let t = `${e.durationMs||je.durationMs}ms forwards`,
                r = e.timingFunction || je.timingFunction;
            return G `
      animation: ${e.keyframes} ${t} ${r};
    `
        }
    },
    si = e => {
        let {
            children: t,
            entry: r,
            exit: o,
            isMounted: n
        } = e, i = o ? o.durationMs || je.durationMs : 0, a = ze(n, i), c = n ? kt(r) : a ? kt(o) : void 0;
        return B(ae.default.Fragment, null, a && B("div", {
            css: c,
            style: e.style
        }, t))
    },
    bo = ie `
0% {
  opacity: 0;
  transform: translateY(10px);
  scale: 0.85;

}
100% {
  opacity: 1;
  transform: translateY(0px);
  scale: 1;
}
`,
    Co = ie `
0% {
  opacity: 0;
  transform: translateY(10px);
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`,
    So = ie `
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,
    Eo = ie `
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`,
    To = e => ie `
0% {
  transform: translateY(${e}px);
}
100% {
  transform: translateY(0px);
}
`,
    ci = {
        fadeInSlideDown: Co,
        fadeOut: Eo,
        slideUp: To,
        fadeIn: So,
        fadeInSlideDownExpand: bo
    };
var Lt = (0, P.createContext)({
        animStyles: {},
        durationMS: 0,
        setMounted: () => {
            F.error("No AnimatedWidgetContext.Provider wrapper found")
        },
        setOpen: () => {
            F.error("No AnimatedWidgetContext.Provider wrapper found")
        },
        isAnimatedWidget: !1,
        animType: "instant"
    }),
    vi = ({
        children: e,
        widget: t,
        isMounted: r,
        keepMounted: o,
        isOpenByDefault: n,
        enterDelay: i,
        position: a,
        defaultExitAction: c
    }) => {
        let [s, l] = (0, P.useState)(!!r || !!o), [m, f] = (0, P.useState)(!!n), p = _t(t, {
            position: a
        }), y = ze(!!o || !!s, p.durationMS), [v, T] = (0, P.useState)(p.initial), C = !o && s || o && m;
        return (0, P.useEffect)(() => {
            let w;
            return C ? C && y && (i ? w = setTimeout(() => {
                T(p.animated)
            }, i) : T(p.animated)) : T(p.initial), () => {
                w && clearTimeout(w)
            }
        }, [C, y, i]), (0, P.useEffect)(() => {
            l(!!r)
        }, [r]), P.default.createElement(Lt.Provider, {
            value: {
                animStyles: v,
                durationMS: p.durationMS,
                setMounted: l,
                setOpen: f,
                keepMounted: o,
                isAnimatedWidget: p.isWidgetAnimated,
                animType: p.type,
                defaultExitAction: c
            }
        }, y && P.default.createElement(P.default.Fragment, null, e))
    },
    gi = () => {
        let e = (0, P.useContext)(Lt),
            t = o => {
                let n = () => {
                    var a;
                    o ? o(e.defaultExitAction) : (a = e.defaultExitAction) == null || a.call(e)
                };
                if (!e.isAnimatedWidget) {
                    n();
                    return
                }
                e.keepMounted ? e.setOpen(!1) : e.setMounted(!1);
                let i = setTimeout(() => {
                    clearTimeout(i), n()
                }, e.durationMS)
            },
            r = () => {
                if (!e.isAnimatedWidget) return;
                let o = setTimeout(() => {
                    e.keepMounted ? e.setOpen(!0) : e.setMounted(!0), clearTimeout(o)
                }, 10)
            };
        return {
            animStyles: e.animStyles,
            onExit: t,
            onEnter: r,
            isAnimatedWidget: e.isAnimatedWidget
        }
    };
var Ye = h(E());
var Ro = U.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;

  color: var(--content-secondary);

  & svg {
    fill: var(--content-secondary);
  }

  /* label/sm/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
`,
    xo = ({
        onClick: e
    }) => Ye.default.createElement(Ro, {
        onClick: e
    }, Ye.default.createElement(Rt, null), "Powered by Amplitude"),
    Ci = xo;
var Ei = () => {
    window.open("https://app.amplitude.com/guides-surveys", "_blank")
};
var Ne = h(E()),
    Ri = (e = !1) => {
        let t = (0, Ne.useRef)(e),
            r = n => {
                t.current && n.touches.length > 1 && n.preventDefault()
            };
        return (0, Ne.useEffect)(() => (document.addEventListener("touchmove", r, {
            passive: !1
        }), () => {
            document.removeEventListener("touchmove", r)
        }), []), {
            setZoomDisabled: n => {
                t.current = n
            }
        }
    };
var Z = h(E());
var wo = (e, t = !0, r = !0) => {
        let {
            isMobileDevice: o
        } = bt(), n = (0, Z.useRef)(!1), i = (0, Z.useRef)(!1), a = (0, Z.useRef)(), c = (0, Z.useRef)(), s = (0, Z.useRef)();
        (0, Z.useEffect)(() => {
            if (o || !e) return;
            let l = null,
                m, f = () => {
                    let y = e.querySelector('[data-draggable="drag-zone"]'),
                        v = y instanceof HTMLElement ? y : null;
                    if (v === l || (m == null || m(), m = void 0, l = v, !v)) return;
                    let T = R => {
                            var A, d, g, M;
                            a.current = [R.pageX, R.pageY], s.current = e.getBoundingClientRect();
                            let S = (d = (A = window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/)) == null ? void 0 : A[1]) == null ? void 0 : d.split(", ");
                            c.current = [Number((g = S == null ? void 0 : S[4]) != null ? g : 0), Number((M = S == null ? void 0 : S[5]) != null ? M : 0)], n.current = !0
                        },
                        C = R => {
                            if (n.current && a.current && c.current && s.current) {
                                v.style.setProperty("cursor", "grabbing"), e.style.opacity = "0.9";
                                let [S, A] = a.current, [d, g] = c.current, M = window.scrollY + s.current.top, W = window.scrollX + s.current.left, J = document.documentElement.clientWidth - e.clientWidth - W, $ = document.documentElement.clientHeight - e.clientHeight - M, V = t ? Math.min(Math.max(window.scrollX + R.clientX - S + d, -W + d + window.scrollX), J + d + window.scrollX) : 0, Y = r ? Math.min(Math.max(window.scrollY + R.clientY - A + g, -M + g + window.scrollY), $ + g + window.scrollY) : 0;
                                (Math.abs(V) > 5 || Math.abs(Y) > 5) && (i.current = !0), e.style.setProperty("transform", `translate(${V}px, ${Y}px)`)
                            }
                        },
                        w = () => {
                            n.current && a.current && (n.current = !1, v.style.setProperty("cursor", "move"), e.style.opacity = "1")
                        },
                        D = R => {
                            if (i.current) return i.current = !1, R.stopPropagation(), !1
                        };
                    v.addEventListener("mousedown", T), document.addEventListener("mousemove", C), document.addEventListener("mouseup", w), v.addEventListener("click", D), m = () => {
                        v.removeEventListener("mousedown", T), v.removeEventListener("click", D), document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", w)
                    }
                };
            f();
            let p = new MutationObserver(() => {
                f()
            });
            return p.observe(e, {
                childList: !0,
                subtree: !0
            }), () => {
                p.disconnect(), m == null || m()
            }
        }, [e, o, t, r])
    },
    Ai = wo;
var Ii = async e => {
        try {
            await navigator.clipboard.writeText(e)
        } catch (t) {
            F.warn(t)
        }
    },
    Pi = (e, t) => {
        let r = new URL(window.location.href),
            o = r.searchParams;
        return o.set("resource_center_id", encodeURIComponent(e)), t ? o.set("resource_center_query", encodeURIComponent(t)) : o.delete("resource_center_query"), r.toString()
    },
    Ut = () => {
        let e = new URL(window.location.href),
            t = e.searchParams;
        t.delete("resource_center_id"), t.delete("resource_center_query"), window.history.replaceState({}, "", e)
    };
var Wt = e => !0;
var Vt = (e, t) => {
        e.resourceCenter.query = t
    },
    qi = (e, t, r, o, n = "resource_center_recommendation") => {
        if (e.isEditorPreview && (r.type === "nudge" || r.type === "open_chat" || r.type === "link" || r.type === "click" || r.type === "callback")) {
            Mt(e, r);
            return
        }
        if (!e.isEditorPreview && Ct(r, "ResourceCenter")) return;
        (r.closeWidgetOnClick != null ? r.closeWidgetOnClick : r.type === "open_chat" || r.type === "nudge") && (e.resourceCenter.visible = !1), yt(e, r, 123)
    },
    $t = {
        overflow: ""
    },
    Bt = (e, t) => {
        t ? ($t.overflow = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = $t.overflow || ""
    },
    Ao = (e, t) => {
        var r;
        return typeof t == "string" ? t : (r = ht(e)) != null ? r : Be(e)
    },
    qe = (e, t) => Ao(e, t) === Ve.Assistant,
    Qi = (e, t) => {
        let r = qe(e, t);
        if (e.resourceCenter.visible) {
            if (e.isEditorPreview) return;
            r ? L.chat.closed() : L.resourceCenter.closed()
        } else r ? L.chat.opened() : L.resourceCenter.opened();
        e.resourceCenter.visible = !e.resourceCenter.visible, He() && Bt(e, e.resourceCenter.visible), Vt(e, ""), e.resourceCenter.visible || (Ut(), e.services.setCurrentContentId(e, null), We.set("copilot.open", !1))
    },
    Gi = (e, t, r, o) => {
        if (!Wt(e)) return;
        let n = e.resourceCenter.visible;
        if (n === t) return;
        let i = qe(e, o);
        t && e.resourceCenter.minimized && No(e, !1, o), e.resourceCenter.visible = t, He() && Bt(e, e.resourceCenter.visible), !n && t ? i ? L.chat.opened() : L.resourceCenter.opened() : n && !t && (i ? L.chat.closed() : L.resourceCenter.closed()), Vt(e, (r == null ? void 0 : r.query) || "")
    },
    No = (e, t, r) => {
        if (e.isEditorPreview) return;
        let o = e.resourceCenter.minimized;
        if (e.resourceCenter.minimized = t, We.set("copilot.minimized", t), o === t) return;
        if (qe(e, r)) {
            t ? L.chat.minimized() : L.chat.maximized();
            return
        }
        t ? L.resourceCenter.minimized() : L.resourceCenter.maximized()
    };
var br = h(E()),
    bn = {
        maxRetries: 3,
        delays: [500, 1500, 3e3]
    },
    fa = (e, t, r = {}) => {
        let {
            maxRetries: o,
            delays: n
        } = { ...bn,
            ...r
        };
        return (0, br.lazy)(() => new Promise((i, a) => {
            let c = Date.now(),
                s = (l = 0) => {
                    e().then(m => {
                        if (l > 0) {
                            let f = Date.now() - c;
                            F.log(`${t} loaded after retry (attempt ${l}, took ${f}ms)`)
                        }
                        i(m)
                    }).catch(m => {
                        if (l < o) {
                            let f = n[l] || n[n.length - 1];
                            F.warn(`${t} chunk load failed, retrying in ${f}ms (attempt ${l}/${o})`), setTimeout(() => {
                                s(l + 1)
                            }, f)
                        } else m instanceof Error && F.error(`${t} chunk load failed after ${o+1} attempts`, m.message), a(m)
                    })
                };
            s()
        }))
    };
var Cr = {
        display: "flex",
        width: "var(--form-control-height)",
        height: "var(--form-control-height)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--form-control-gap)",
        color: "var(--button-tertiary-content)",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--button-tertiary-border-color)",
        background: "var(--button-tertiary-background)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        userSelect: "none",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-semibold)",
        lineHeight: "var(--font-line-height-normal)",
        "&:hover": {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "var(--button-tertiary-border-color-hover)",
            background: "var(--button-tertiary-background-hover)",
            color: "var(--button-tertiary-content-hover)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            background: "var(--button-tertiary-background-hover)"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&:disabled": {
            cursor: "not-allowed",
            borderColor: "var(--button-tertiary-border-color)",
            background: "var(--button-tertiary-background)",
            color: "var(--button-tertiary-content)"
        }
    },
    Sr = "tertiaryIconButton",
    ve = ({
        theme: e,
        children: t,
        ...r
    }) => {
        let {
            overrides: o
        } = fe(Sr, e);
        return B(Nt, {
            css: [o, G(Cr)],
            ...r
        }, B(At, null, t))
    };
ve.styles = Cr;
ve.slug = Sr;
ve.renderMock = (e, t) => B(ve, {
    "aria-label": "close",
    theme: {
        theme: e,
        mode: t
    }
}, B(wt, null));
var Sa = ve;
var O = h(E());
var Cn = "credentialless",
    ge = ({
        src: e,
        title: t,
        allow: r
    }) => `
    <iframe
      ${Cn}
      src="${e}"
      title="${t}"
      frameborder="0"${r?`
      allow="${r}"`:""}
      allowfullscreen
    ></iframe>
  `,
    Je = (e, t = !0) => {
        let r = new URL(e).searchParams.get("v");
        if (r) return ge({
            src: `https://www.youtube.com/embed/${r}?autoplay=${t?1:0}`,
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        })
    },
    Er = e => {
        let t = new URL(e).pathname.split("/").slice(-1)[0];
        if (t) return ge({
            src: `https://www.loom.com/embed/${t}`,
            title: "Loom video player"
        })
    },
    et = (e, t = !0) => {
        let r = new URL(e).pathname;
        if (r) return ge({
            src: `https://player.vimeo.com/video${r}?autoplay=${t?1:0}`,
            title: "Vimeo video player"
        })
    },
    Tr = e => {
        let t = new URL(e).pathname.split("/").slice(-1)[0];
        if (t) return ge({
            src: `https://play.vidyard.com/${t}`,
            title: "VidyardPlayer video player"
        })
    },
    Rr = (e, t = !0) => {
        let r = e.split("/").pop();
        if (r) return ge({
            src: `https://fast.wistia.net/embed/iframe/${r}?autoplay=${t?1:0}`,
            title: "Wistia video player",
            allow: "autoplay; fullscreen"
        })
    };
var Sn = (e, t) => {
        try {
            let {
                hostname: r
            } = new URL(e);
            switch (r) {
                case "www.youtube.com":
                    return e.includes("shorts") && (e = e.replace("shorts/", "watch?v=")), Je(e, t);
                case "youtu.be":
                    return e = `https://www.youtube.com/watch?v=${e.split("/").pop()}`, Je(e, t);
                case "www.loom.com":
                    return Er(e);
                case "vimeo.com":
                    return et(e, t);
                case "player.vimeo.com":
                    return e = `https://vimeo.com/${e.split("/").pop()}`, et(e, t);
                case "share.vidyard.com":
                case "play.vidyard.com":
                case "video.vidyard.com":
                    return Tr(e);
                default:
                    return r.includes("wistia.com") ? Rr(e, t) : void 0
            }
        } catch (r) {
            F.warn(r);
            return
        }
    },
    tt = Sn;
var xr = U.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))
    var(--nudge-block-padding, var(--layout-padding));
`,
    ye = U.div `
  width: 100%;
  padding: 0;
  border-radius: var(--layout-radius-button);
  overflow: hidden;
`,
    En = U(ye)
`
  border-radius: 0;
`, Tn = U(ye)
`
  height: 100%;
  border-radius: calc(var(--layout-radius-card) - 1px) 0 0 calc(var(--layout-radius-card) - 1px);
`, Rn = U(ye)
`
  height: 100%;
  border-radius: 0 calc(var(--layout-radius-card) - 1px) calc(var(--layout-radius-card) - 1px) 0;
`, xn = U.video `
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 100%;
  display: block;
`, wn = U.div `
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  display: block;

  & > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }
`, An = U.div `
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #f7f4ff 0%, #d5caff 100%);
`, Nn = {
    "top-block": {
        OuterContainer: O.default.Fragment,
        Container: En
    },
    "full-height-left": {
        OuterContainer: O.default.Fragment,
        Container: Tn
    },
    "full-height-right": {
        OuterContainer: O.default.Fragment,
        Container: Rn
    },
    tall: {
        OuterContainer: xr,
        Container: ye
    },
    default: {
        OuterContainer: xr,
        Container: ye
    }
}, Mn = (e, t = !1) => {
    try {
        t && !e.includes("://") && e.includes(".") && (e = "https://" + e);
        let r = new URL(e);
        return r.protocol === "http:" || r.protocol === "https:"
    } catch (r) {
        return !1
    }
}, Da = ({
    src: e,
    variant: t = "default"
}) => {
    let {
        OuterContainer: r,
        Container: o
    } = Nn[t], n = !Mn(e) || tt(e), i = O.default.useMemo(() => {
        let a = tt(e, !1) || e;
        return Tt(a)
    }, [e]);
    return e.length === 0 ? O.default.createElement(r, null, O.default.createElement(o, {
        "data-testid": "engagement-video",
        style: {
            height: "168px",
            padding: t === "full-height-left" || t === "full-height-right" ? 0 : void 0
        }
    }, O.default.createElement(An, {
        "data-testid": "engagement-nudge-video-placeholder"
    }, O.default.createElement(xt, {
        width: "24px",
        height: "24px"
    })))) : O.default.createElement(r, {
        className: "amplitude-engagement-video"
    }, O.default.createElement(o, {
        "data-testid": "engagement-video"
    }, n ? O.default.createElement(wn, {
        dangerouslySetInnerHTML: {
            __html: i
        }
    }) : O.default.createElement(xn, {
        controls: !0
    }, O.default.createElement("source", {
        src: e,
        type: "video/mp4"
    }), O.default.createElement("track", {
        src: "captions_en.vtt",
        kind: "captions",
        label: "english_captions"
    }), "Your browser does not support HTML video.")))
};
var wr = h(E());
var rt = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        gap: "var(--layout-gap)",
        color: "var(--content-primary)",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        height: "var(--form-control-height)",
        padding: "var(--form-control-padding-x)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-medium)",
        lineHeight: "var(--font-line-height-normal)",
        "&:hover": {
            borderColor: "var(--form-control-border-color-hover)",
            background: "var(--form-control-background-hover)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            borderColor: "var(--base-accent)",
            background: "var(--form-control-background)",
            outline: "none"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&::placeholder": {
            color: "var(--content-secondary)"
        }
    },
    ot = "input",
    Ar = U.input `
  all: unset;
  box-sizing: border-box;
`,
    In = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    Pn = Object.assign(wr.default.forwardRef(({
        theme: e,
        hasError: t,
        ...r
    }, o) => {
        let {
            overrides: n
        } = fe(ot, e), {
            className: i,
            ...a
        } = r;
        return B(Ar, {
            css: [n, G(rt), t && G(In)],
            ref: o,
            ...a,
            className: `amplitude-engagement-input${i?` ${i}`:""}`
        })
    }), {
        slug: ot,
        styles: rt,
        renderMock: (e, t) => B(On, {
            theme: e,
            mode: t
        })
    }),
    On = ({
        theme: e,
        mode: t
    }) => {
        let {
            overrides: r
        } = fe(ot, {
            theme: e,
            mode: t
        });
        return B(Ar, {
            css: [r, G(rt)],
            placeholder: "Input",
            className: "amplitude-engagement-input"
        })
    },
    Wa = Pn;
var H = h(E()),
    Br = h(vo());
var Nr = h(E()),
    Dn = Nr.createContext(null),
    Me = Dn;
var te = h(E());
var Mr = [];

function nt(e, t) {
    var r = te.useState(function() {
            if (!X()) return null;
            var v = document.createElement("div");
            return v
        }),
        o = I(r, 1),
        n = o[0],
        i = te.useRef(!1),
        a = te.useContext(Me),
        c = te.useState(Mr),
        s = I(c, 2),
        l = s[0],
        m = s[1],
        f = a || (i.current ? void 0 : function(v) {
            m(function(T) {
                var C = [v].concat(Et(T));
                return C
            })
        });

    function p() {
        n.parentElement || document.body.appendChild(n), i.current = !0
    }

    function y() {
        var v;
        (v = n.parentElement) === null || v === void 0 || v.removeChild(n), i.current = !1
    }
    return ue(function() {
        return e ? a ? a(p) : p() : y(), y
    }, [e]), ue(function() {
        l.length && (l.forEach(function(v) {
            return v()
        }), m(Mr))
    }, [l]), [n, f]
}
var Wr = h(E());
var Ir = "data-rc-order",
    Pr = "data-rc-priority",
    _n = "rc-util-key",
    it = new Map;

function Or() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.mark;
    return t ? t.startsWith("data-") ? t : "data-".concat(t) : _n
}

function Ie(e) {
    if (e.attachTo) return e.attachTo;
    var t = document.querySelector("head");
    return t || document.body
}

function kn(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append"
}

function at(e) {
    return Array.from((it.get(e) || e).children).filter(function(t) {
        return t.tagName === "STYLE"
    })
}

function Dr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!X()) return null;
    var r = t.csp,
        o = t.prepend,
        n = t.priority,
        i = n === void 0 ? 0 : n,
        a = kn(o),
        c = a === "prependQueue",
        s = document.createElement("style");
    s.setAttribute(Ir, a), c && i && s.setAttribute(Pr, "".concat(i)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
    var l = Ie(t),
        m = l.firstChild;
    if (o) {
        if (c) {
            var f = (t.styles || at(l)).filter(function(p) {
                if (!["prepend", "prependQueue"].includes(p.getAttribute(Ir))) return !1;
                var y = Number(p.getAttribute(Pr) || 0);
                return i >= y
            });
            if (f.length) return l.insertBefore(s, f[f.length - 1].nextSibling), s
        }
        l.insertBefore(s, m)
    } else l.appendChild(s);
    return s
}

function _r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = Ie(t);
    return (t.styles || at(r)).find(function(o) {
        return o.getAttribute(Or(t)) === e
    })
}

function he(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = _r(e, t);
    if (r) {
        var o = Ie(t);
        o.removeChild(r)
    }
}

function Ln(e, t) {
    var r = it.get(e);
    if (!r || !me(document, r)) {
        var o = Dr("", t),
            n = o.parentNode;
        it.set(e, n), e.removeChild(o)
    }
}

function Pe(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        o = Ie(r),
        n = at(o),
        i = b(b({}, r), {}, {
            styles: n
        });
    Ln(o, i);
    var a = _r(t, i);
    if (a) {
        var c, s;
        if ((c = i.csp) !== null && c !== void 0 && c.nonce && a.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)) {
            var l;
            a.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce
        }
        return a.innerHTML !== e && (a.innerHTML = e), a
    }
    var m = Dr(e, i);
    return m.setAttribute(Or(i), t), m
}

function Un(e) {
    var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),
        r = document.createElement("div");
    r.id = t;
    var o = r.style;
    o.position = "absolute", o.left = "0", o.top = "0", o.width = "100px", o.height = "100px", o.overflow = "scroll";
    var n, i;
    if (e) {
        var a = getComputedStyle(e);
        o.scrollbarColor = a.scrollbarColor, o.scrollbarWidth = a.scrollbarWidth;
        var c = getComputedStyle(e, "::-webkit-scrollbar"),
            s = parseInt(c.width, 10),
            l = parseInt(c.height, 10);
        try {
            var m = s ? "width: ".concat(c.width, ";") : "",
                f = l ? "height: ".concat(c.height, ";") : "";
            Pe(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(m, `
`).concat(f, `
}`), t)
        } catch (v) {
            console.error(v), n = s, i = l
        }
    }
    document.body.appendChild(r);
    var p = e && n && !isNaN(n) ? n : r.offsetWidth - r.clientWidth,
        y = e && i && !isNaN(i) ? i : r.offsetHeight - r.clientHeight;
    return document.body.removeChild(r), he(t), {
        width: p,
        height: y
    }
}

function kr(e) {
    return typeof document > "u" || !e || !(e instanceof Element) ? {
        width: 0,
        height: 0
    } : Un(e)
}

function Lr() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth
}
var Wn = "rc-util-locker-".concat(Date.now()),
    Ur = 0;

function st(e) {
    var t = !!e,
        r = Wr.useState(function() {
            return Ur += 1, "".concat(Wn, "_").concat(Ur)
        }),
        o = I(r, 1),
        n = o[0];
    ue(function() {
        if (t) {
            var i = kr(document.body).width,
                a = Lr();
            Pe(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), n)
        } else he(n);
        return function() {
            he(n)
        }
    }, [t, n])
}
var $r = !1;

function ct(e) {
    return typeof e == "boolean" && ($r = e), $r
}
var Vr = function(t) {
        return t === !1 ? !1 : !X() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t
    },
    $n = H.forwardRef(function(e, t) {
        var r = e.open,
            o = e.autoLock,
            n = e.getContainer,
            i = e.debug,
            a = e.autoDestroy,
            c = a === void 0 ? !0 : a,
            s = e.children,
            l = H.useState(r),
            m = I(l, 2),
            f = m[0],
            p = m[1],
            y = f || r;
        H.useEffect(function() {
            (c || r) && p(r)
        }, [r, c]);
        var v = H.useState(function() {
                return Vr(n)
            }),
            T = I(v, 2),
            C = T[0],
            w = T[1];
        H.useEffect(function() {
            var V = Vr(n);
            w(V != null ? V : null)
        });
        var D = nt(y && !C, i),
            R = I(D, 2),
            S = R[0],
            A = R[1],
            d = C != null ? C : S;
        st(o && r && X() && (d === S || d === document.body));
        var g = null;
        if (s && St(s) && t) {
            var M = s;
            g = M.ref
        }
        var W = Te(g, t);
        if (!y || !X() || C === void 0) return null;
        var J = d === !1 || ct(),
            $ = s;
        return t && ($ = H.cloneElement(s, {
            ref: W
        })), H.createElement(Me.Provider, {
            value: A
        }, J ? $ : (0, Br.createPortal)($, d))
    }),
    Hr = $n;
var Fr = Hr;
var K = h(E());
var Kr = h(E()),
    Oe = Kr.createContext({});
var ft = h(Re());
var be = h(E());

function Vn() {
    var e = b({}, be);
    return e.useId
}
var jr = 0;
var zr = Vn(),
    Yr = zr ? function(t) {
        var r = zr();
        return t || r
    } : function(t) {
        var r = be.useState("ssr-id"),
            o = I(r, 2),
            n = o[0],
            i = o[1];
        return be.useEffect(function() {
            var a = jr;
            jr += 1, i("rc_unique_".concat(a))
        }, []), t || n
    };
var u = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function(t) {
            var r = t.keyCode;
            if (t.altKey && !t.ctrlKey || t.metaKey || r >= u.F1 && r <= u.F12) return !1;
            switch (r) {
                case u.ALT:
                case u.CAPS_LOCK:
                case u.CONTEXT_MENU:
                case u.CTRL:
                case u.DOWN:
                case u.END:
                case u.ESC:
                case u.HOME:
                case u.INSERT:
                case u.LEFT:
                case u.MAC_FF_META:
                case u.META:
                case u.NUMLOCK:
                case u.NUM_CENTER:
                case u.PAGE_DOWN:
                case u.PAGE_UP:
                case u.PAUSE:
                case u.PRINT_SCREEN:
                case u.RIGHT:
                case u.SHIFT:
                case u.UP:
                case u.WIN_KEY:
                case u.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0
            }
        },
        isCharacterKey: function(t) {
            if (t >= u.ZERO && t <= u.NINE || t >= u.NUM_ZERO && t <= u.NUM_MULTIPLY || t >= u.A && t <= u.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0) return !0;
            switch (t) {
                case u.SPACE:
                case u.QUESTION_MARK:
                case u.NUM_PLUS:
                case u.NUM_MINUS:
                case u.NUM_PERIOD:
                case u.NUM_DIVISION:
                case u.SEMICOLON:
                case u.DASH:
                case u.EQUALS:
                case u.COMMA:
                case u.PERIOD:
                case u.SLASH:
                case u.APOSTROPHE:
                case u.SINGLE_QUOTE:
                case u.OPEN_SQUARE_BRACKET:
                case u.BACKSLASH:
                case u.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
            }
        }
    },
    lt = u;
var Bn = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
    Hn = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
    Fn = "".concat(Bn, " ").concat(Hn).split(/[\s\n]+/),
    Kn = "aria-",
    jn = "data-";

function qr(e, t) {
    return e.indexOf(t) === 0
}

function Ce(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r;
    t === !1 ? r = {
        aria: !0,
        data: !0,
        attr: !0
    } : t === !0 ? r = {
        aria: !0
    } : r = b({}, t);
    var o = {};
    return Object.keys(e).forEach(function(n) {
        (r.aria && (n === "role" || qr(n, Kn)) || r.data && qr(n, jn) || r.attr && Fn.includes(n)) && (o[n] = e[n])
    }), o
}
var oe = h(E()),
    z = h(E());

function dt(e, t, r) {
    var o = t;
    return !o && r && (o = "".concat(e, "-").concat(r)), o
}

function Qr(e, t) {
    var r = e["page".concat(t ? "Y" : "X", "Offset")],
        o = "scroll".concat(t ? "Top" : "Left");
    if (typeof r != "number") {
        var n = e.document;
        r = n.documentElement[o], typeof r != "number" && (r = n.body[o])
    }
    return r
}

function Gr(e) {
    var t = e.getBoundingClientRect(),
        r = {
            left: t.left,
            top: t.top
        },
        o = e.ownerDocument,
        n = o.defaultView || o.parentWindow;
    return r.left += Qr(n), r.top += Qr(n, !0), r
}
var re = h(E()),
    Jr = h(E()),
    eo = h(Re());
var se = h(Re());
var x = h(E());
var Xr = h(E()),
    Zr = Xr.memo(function(e) {
        var t = e.children;
        return t
    }, function(e, t) {
        var r = t.shouldUpdate;
        return !r
    });
var zn = {
        width: 0,
        height: 0,
        overflow: "hidden",
        outline: "none"
    },
    Yn = {
        outline: "none"
    },
    qn = x.default.forwardRef(function(e, t) {
        var r = e.prefixCls,
            o = e.className,
            n = e.style,
            i = e.title,
            a = e.ariaId,
            c = e.footer,
            s = e.closable,
            l = e.closeIcon,
            m = e.onClose,
            f = e.children,
            p = e.bodyStyle,
            y = e.bodyProps,
            v = e.modalRender,
            T = e.onMouseDown,
            C = e.onMouseUp,
            w = e.holderRef,
            D = e.visible,
            R = e.forceRender,
            S = e.width,
            A = e.height,
            d = e.classNames,
            g = e.styles,
            M = x.default.useContext(Oe),
            W = M.panel,
            J = Te(w, W),
            $ = (0, x.useRef)(),
            V = (0, x.useRef)();
        x.default.useImperativeHandle(t, function() {
            return {
                focus: function() {
                    var j;
                    (j = $.current) === null || j === void 0 || j.focus({
                        preventScroll: !0
                    })
                },
                changeActive: function(j) {
                    var _e = document,
                        Se = _e.activeElement;
                    j && Se === V.current ? $.current.focus({
                        preventScroll: !0
                    }) : !j && Se === $.current && V.current.focus({
                        preventScroll: !0
                    })
                }
            }
        });
        var Y = {};
        S !== void 0 && (Y.width = S), A !== void 0 && (Y.height = A);
        var q = c ? x.default.createElement("div", {
                className: (0, se.default)("".concat(r, "-footer"), d == null ? void 0 : d.footer),
                style: b({}, g == null ? void 0 : g.footer)
            }, c) : null,
            Q = i ? x.default.createElement("div", {
                className: (0, se.default)("".concat(r, "-header"), d == null ? void 0 : d.header),
                style: b({}, g == null ? void 0 : g.header)
            }, x.default.createElement("div", {
                className: "".concat(r, "-title"),
                id: a
            }, i)) : null,
            ee = (0, x.useMemo)(function() {
                return Fe(s) === "object" && s !== null ? s : s ? {
                    closeIcon: l != null ? l : x.default.createElement("span", {
                        className: "".concat(r, "-close-x")
                    })
                } : {}
            }, [s, l, r]),
            ne = Ce(ee, !0),
            ce = Fe(s) === "object" && s.disabled,
            De = s ? x.default.createElement("button", k({
                type: "button",
                onClick: m,
                "aria-label": "Close"
            }, ne, {
                className: "".concat(r, "-close"),
                disabled: ce
            }), ee.closeIcon) : null,
            le = x.default.createElement("div", {
                className: (0, se.default)("".concat(r, "-content"), d == null ? void 0 : d.content),
                style: g == null ? void 0 : g.content
            }, De, Q, x.default.createElement("div", k({
                className: (0, se.default)("".concat(r, "-body"), d == null ? void 0 : d.body),
                style: b(b({}, p), g == null ? void 0 : g.body)
            }, y), f), q);
        return x.default.createElement("div", {
            key: "dialog-element",
            role: "dialog",
            "aria-labelledby": i ? a : null,
            "aria-modal": "true",
            ref: J,
            style: b(b({}, n), Y),
            className: (0, se.default)(r, o),
            onMouseDown: T,
            onMouseUp: C
        }, x.default.createElement("div", {
            ref: $,
            tabIndex: 0,
            style: Yn
        }, x.default.createElement(Zr, {
            shouldUpdate: D || R
        }, v ? v(le) : le)), x.default.createElement("div", {
            tabIndex: 0,
            ref: V,
            style: zn
        }))
    }),
    ut = qn;
var to = re.forwardRef(function(e, t) {
    var r = e.prefixCls,
        o = e.title,
        n = e.style,
        i = e.className,
        a = e.visible,
        c = e.forceRender,
        s = e.destroyOnClose,
        l = e.motionName,
        m = e.ariaId,
        f = e.onVisibleChanged,
        p = e.mousePosition,
        y = (0, Jr.useRef)(),
        v = re.useState(),
        T = I(v, 2),
        C = T[0],
        w = T[1],
        D = {};
    C && (D.transformOrigin = C);

    function R() {
        var S = Gr(y.current);
        w(p && (p.x || p.y) ? "".concat(p.x - S.left, "px ").concat(p.y - S.top, "px") : "")
    }
    return re.createElement(xe, {
        visible: a,
        onVisibleChanged: f,
        onAppearPrepare: R,
        onEnterPrepare: R,
        forceRender: c,
        motionName: l,
        removeOnLeave: s,
        ref: y
    }, function(S, A) {
        var d = S.className,
            g = S.style;
        return re.createElement(ut, k({}, e, {
            ref: t,
            title: o,
            ariaId: m,
            prefixCls: r,
            holderRef: A,
            style: b(b(b({}, g), n), D),
            className: (0, eo.default)(i, d)
        }))
    })
});
to.displayName = "Content";
var ro = to;
var mt = h(E()),
    oo = h(Re());
var Qn = function(t) {
        var r = t.prefixCls,
            o = t.style,
            n = t.visible,
            i = t.maskProps,
            a = t.motionName,
            c = t.className;
        return mt.createElement(xe, {
            key: "mask",
            visible: n,
            motionName: a,
            leavedClassName: "".concat(r, "-mask-hidden")
        }, function(s, l) {
            var m = s.className,
                f = s.style;
            return mt.createElement("div", k({
                ref: l,
                style: b(b({}, f), o),
                className: (0, oo.default)("".concat(r, "-mask"), m, c)
            }, i))
        })
    },
    no = Qn;
var Gn = function(t) {
        var r = t.prefixCls,
            o = r === void 0 ? "rc-dialog" : r,
            n = t.zIndex,
            i = t.visible,
            a = i === void 0 ? !1 : i,
            c = t.keyboard,
            s = c === void 0 ? !0 : c,
            l = t.focusTriggerAfterClose,
            m = l === void 0 ? !0 : l,
            f = t.wrapStyle,
            p = t.wrapClassName,
            y = t.wrapProps,
            v = t.onClose,
            T = t.afterOpenChange,
            C = t.afterClose,
            w = t.transitionName,
            D = t.animation,
            R = t.closable,
            S = R === void 0 ? !0 : R,
            A = t.mask,
            d = A === void 0 ? !0 : A,
            g = t.maskTransitionName,
            M = t.maskAnimation,
            W = t.maskClosable,
            J = W === void 0 ? !0 : W,
            $ = t.maskStyle,
            V = t.maskProps,
            Y = t.rootClassName,
            q = t.classNames,
            Q = t.styles,
            ee = (0, z.useRef)(),
            ne = (0, z.useRef)(),
            ce = (0, z.useRef)(),
            De = oe.useState(a),
            le = I(De, 2),
            de = le[0],
            j = le[1],
            _e = Yr();

        function Se() {
            me(ne.current, document.activeElement) || (ee.current = document.activeElement)
        }

        function co() {
            if (!me(ne.current, document.activeElement)) {
                var N;
                (N = ce.current) === null || N === void 0 || N.focus()
            }
        }

        function lo(N) {
            if (N) co();
            else {
                if (j(!1), d && ee.current && m) {
                    try {
                        ee.current.focus({
                            preventScroll: !0
                        })
                    } catch (Ue) {}
                    ee.current = null
                }
                de && (C == null || C())
            }
            T == null || T(N)
        }

        function ke(N) {
            v == null || v(N)
        }
        var Ee = (0, z.useRef)(!1),
            Le = (0, z.useRef)(),
            uo = function() {
                clearTimeout(Le.current), Ee.current = !0
            },
            mo = function() {
                Le.current = setTimeout(function() {
                    Ee.current = !1
                })
            },
            pt = null;
        J && (pt = function(Ue) {
            Ee.current ? Ee.current = !1 : ne.current === Ue.target && ke(Ue)
        });

        function fo(N) {
            if (s && N.keyCode === lt.ESC) {
                N.stopPropagation(), ke(N);
                return
            }
            a && N.keyCode === lt.TAB && ce.current.changeActive(!N.shiftKey)
        }(0, z.useEffect)(function() {
            a && (j(!0), Se())
        }, [a]), (0, z.useEffect)(function() {
            return function() {
                clearTimeout(Le.current)
            }
        }, []);
        var po = b(b(b({
            zIndex: n
        }, f), Q == null ? void 0 : Q.wrapper), {}, {
            display: de ? null : "none"
        });
        return oe.createElement("div", k({
            className: (0, ft.default)("".concat(o, "-root"), Y)
        }, Ce(t, {
            data: !0
        })), oe.createElement(no, {
            prefixCls: o,
            visible: d && a,
            motionName: dt(o, g, M),
            style: b(b({
                zIndex: n
            }, $), Q == null ? void 0 : Q.mask),
            maskProps: V,
            className: q == null ? void 0 : q.mask
        }), oe.createElement("div", k({
            tabIndex: -1,
            onKeyDown: fo,
            className: (0, ft.default)("".concat(o, "-wrap"), p, q == null ? void 0 : q.wrapper),
            ref: ne,
            onClick: pt,
            style: po
        }, y), oe.createElement(ro, k({}, t, {
            onMouseDown: uo,
            onMouseUp: mo,
            ref: ce,
            closable: S,
            ariaId: _e,
            prefixCls: o,
            visible: a && de,
            onClose: ke,
            onVisibleChanged: lo,
            motionName: dt(o, w, D)
        }))))
    },
    io = Gn;
var ao = function(t) {
    var r = t.visible,
        o = t.getContainer,
        n = t.forceRender,
        i = t.destroyOnClose,
        a = i === void 0 ? !1 : i,
        c = t.afterClose,
        s = t.panelRef,
        l = K.useState(r),
        m = I(l, 2),
        f = m[0],
        p = m[1],
        y = K.useMemo(function() {
            return {
                panel: s
            }
        }, [s]);
    return K.useEffect(function() {
        r && p(!0)
    }, [r]), !n && a && !f ? null : K.createElement(Oe.Provider, {
        value: y
    }, K.createElement(Fr, {
        open: r || n || f,
        autoDestroy: !1,
        getContainer: o,
        autoLock: r || f
    }, K.createElement(io, k({}, t, {
        destroyOnClose: a,
        afterClose: function() {
            c == null || c(), p(!1)
        }
    }))))
};
ao.displayName = "Dialog";
var so = ao;
var vc = so;
export {
    fa as a, si as b, ci as c, vi as d, gi as e, vc as f, Ci as g, Ei as h, Sa as i, Wa as j, Da as k, Ri as l, Ai as m, Ii as n, Pi as o, Ut as p, Vt as q, qi as r, Qi as s, Gi as t, No as u, hn as v
};