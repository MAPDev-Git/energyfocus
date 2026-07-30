import {
    a as Fe,
    b as Gt,
    c as Ya,
    d as $n,
    e as Xr,
    f as Wn
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-L6SA2P5Z.js";
import {
    a as Qo,
    b as Un,
    c as ss
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-E4GD2UF5.js";
import {
    d as Lt,
    e as ie,
    g as Vn,
    h as jn,
    i as vo,
    j as bo,
    k as ls,
    l as cs,
    m as Zn
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-4UYE3ASQ.js";
import {
    e as Ie,
    g as Xa,
    h as Re,
    j as ho
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-EJSVZAN3.js";
import {
    a as Ka
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-3RCTDKHL.js";
import {
    B as Qa,
    C as Se,
    D as de,
    E as De,
    F as at,
    G as Gn,
    d as Y,
    f as At,
    j as Ko,
    k as Va,
    l as ja,
    m as Ga,
    n as Ua,
    o as Za,
    s as qa,
    t as zn,
    w as X
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-7B2P2PNW.js";
import {
    Ac as za,
    Bb as go,
    Bc as $a,
    Cb as Ma,
    Cc as Wa,
    Ga as Pa,
    Ha as _n,
    Ia as Yr,
    Kb as Dn,
    La as Ia,
    Lb as Hn,
    Mb as Na,
    Nb as rt,
    Oa as Rt,
    Ob as ke,
    Pb as Aa,
    Qb as qo,
    Sc as w,
    Ta as mo,
    Td as yo,
    Uc as be,
    _c as Ja,
    a as ot,
    aa as T,
    bb as ve,
    bd as Yo,
    c as A,
    ca as W,
    cd as Xo,
    d as re,
    da as Ea,
    e as O,
    f as Uo,
    fc as it,
    gc as Ra,
    gd as es,
    ha as D,
    i as Kr,
    ic as La,
    jc as Oa,
    ka as Ce,
    lb as _e,
    ld as ts,
    md as os,
    od as ns,
    p as nt,
    pd as rs,
    q as ka,
    rd as is,
    s as Ta,
    td as as,
    uc as Ba,
    v as Pe,
    vb as fo,
    wb as Fn,
    wc as _a,
    xb as Zo,
    xc as Fa,
    yc as Da,
    zc as Ha
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var ps = ot((Zy, qn) => {
    qn.exports = ds;
    qn.exports.addWheelListener = ds;
    qn.exports.removeWheelListener = mu;

    function ds(t, e, o) {
        t.addEventListener("wheel", e, o)
    }

    function mu(t, e, o) {
        t.removeEventListener("wheel", e, o)
    }
});
var ys = ot((qy, hs) => {
    var fu = 4,
        gu = .001,
        hu = 1e-7,
        yu = 10,
        Jo = 11,
        Kn = 1 / (Jo - 1),
        vu = typeof Float32Array == "function";

    function us(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function ms(t, e) {
        return 3 * e - 6 * t
    }

    function fs(t) {
        return 3 * t
    }

    function Yn(t, e, o) {
        return ((us(e, o) * t + ms(e, o)) * t + fs(e)) * t
    }

    function gs(t, e, o) {
        return 3 * us(e, o) * t * t + 2 * ms(e, o) * t + fs(e)
    }

    function bu(t, e, o, n, r) {
        var i, a, s = 0;
        do a = e + (o - e) / 2, i = Yn(a, n, r) - t, i > 0 ? o = a : e = a; while (Math.abs(i) > hu && ++s < yu);
        return a
    }

    function xu(t, e, o, n) {
        for (var r = 0; r < fu; ++r) {
            var i = gs(e, o, n);
            if (i === 0) return e;
            var a = Yn(e, o, n) - t;
            e -= a / i
        }
        return e
    }

    function Su(t) {
        return t
    }
    hs.exports = function(e, o, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        if (e === o && n === r) return Su;
        for (var i = vu ? new Float32Array(Jo) : new Array(Jo), a = 0; a < Jo; ++a) i[a] = Yn(a * Kn, e, n);

        function s(d) {
            for (var l = 0, c = 1, p = Jo - 1; c !== p && i[c] <= d; ++c) l += Kn;
            --c;
            var u = (d - i[c]) / (i[c + 1] - i[c]),
                f = l + u * Kn,
                m = gs(f, e, n);
            return m >= gu ? xu(d, f, e, n) : m === 0 ? f : bu(d, l, l + Kn, e, n)
        }
        return function(l) {
            return l === 0 ? 0 : l === 1 ? 1 : Yn(s(l), o, r)
        }
    }
});
var Ss = ot((Ky, Xn) => {
    var en = ys(),
        vs = {
            ease: en(.25, .1, .25, 1),
            easeIn: en(.42, 0, 1, 1),
            easeOut: en(0, 0, .58, 1),
            easeInOut: en(.42, 0, .58, 1),
            linear: en(0, 0, 1, 1)
        };
    Xn.exports = wu;
    Xn.exports.makeAggregateRaf = xs;
    Xn.exports.sharedScheduler = xs();

    function wu(t, e, o) {
        var n = Object.create(null),
            r = Object.create(null);
        o = o || {};
        var i = typeof o.easing == "function" ? o.easing : vs[o.easing];
        i || (o.easing && console.warn("Unknown easing function in amator: " + o.easing), i = vs.ease);
        var a = typeof o.step == "function" ? o.step : bs,
            s = typeof o.done == "function" ? o.done : bs,
            d = Cu(o.scheduler),
            l = Object.keys(e);
        l.forEach(function(h) {
            n[h] = t[h], r[h] = e[h] - t[h]
        });
        var c = typeof o.duration == "number" ? o.duration : 400,
            p = Math.max(1, c * .06),
            u, f = 0;
        return u = d.next(g), {
            cancel: m
        };

        function m() {
            d.cancel(u), u = 0
        }

        function g() {
            var h = i(f / p);
            f += 1, y(h), f <= p ? (u = d.next(g), a(t)) : (u = 0, setTimeout(function() {
                s(t)
            }, 0))
        }

        function y(h) {
            l.forEach(function(S) {
                t[S] = r[S] * h + n[S]
            })
        }
    }

    function bs() {}

    function Cu(t) {
        if (!t) {
            var e = typeof window < "u" && window.requestAnimationFrame;
            return e ? ku() : Tu()
        }
        if (typeof t.next != "function") throw new Error("Scheduler is supposed to have next(cb) function");
        if (typeof t.cancel != "function") throw new Error("Scheduler is supposed to have cancel(handle) function");
        return t
    }

    function ku() {
        return {
            next: window.requestAnimationFrame.bind(window),
            cancel: window.cancelAnimationFrame.bind(window)
        }
    }

    function Tu() {
        return {
            next: function(t) {
                return setTimeout(t, 1e3 / 60)
            },
            cancel: function(t) {
                return clearTimeout(t)
            }
        }
    }

    function xs() {
        var t = new Set,
            e = new Set,
            o = 0;
        return {
            next: r,
            cancel: r,
            clearAll: n
        };

        function n() {
            t.clear(), e.clear(), cancelAnimationFrame(o), o = 0
        }

        function r(d) {
            e.add(d), i()
        }

        function i() {
            o || (o = requestAnimationFrame(a))
        }

        function a() {
            o = 0;
            var d = e;
            e = t, t = d, t.forEach(function(l) {
                l()
            }), t.clear()
        }

        function s(d) {
            e.delete(d)
        }
    }
});
var Cs = ot((Yy, ws) => {
    ws.exports = function(e) {
        Pu(e);
        var o = Eu(e);
        return e.on = o.on, e.off = o.off, e.fire = o.fire, e
    };

    function Eu(t) {
        var e = Object.create(null);
        return {
            on: function(o, n, r) {
                if (typeof n != "function") throw new Error("callback is expected to be a function");
                var i = e[o];
                return i || (i = e[o] = []), i.push({
                    callback: n,
                    ctx: r
                }), t
            },
            off: function(o, n) {
                var r = typeof o > "u";
                if (r) return e = Object.create(null), t;
                if (e[o]) {
                    var i = typeof n != "function";
                    if (i) delete e[o];
                    else
                        for (var a = e[o], s = 0; s < a.length; ++s) a[s].callback === n && a.splice(s, 1)
                }
                return t
            },
            fire: function(o) {
                var n = e[o];
                if (!n) return t;
                var r;
                arguments.length > 1 && (r = Array.prototype.splice.call(arguments, 1));
                for (var i = 0; i < n.length; ++i) {
                    var a = n[i];
                    a.callback.apply(a.ctx, r)
                }
                return t
            }
        }
    }

    function Pu(t) {
        if (!t) throw new Error("Eventify cannot use falsy object as events subject");
        for (var e = ["on", "fire", "off"], o = 0; o < e.length; ++o)
            if (t.hasOwnProperty(e[o])) throw new Error("Subject cannot be eventified, since it already has property '" + e[o] + "'")
    }
});
var Ts = ot((Xy, ks) => {
    ks.exports = Iu;

    function Iu(t, e, o) {
        typeof o != "object" && (o = {});
        var n = typeof o.minVelocity == "number" ? o.minVelocity : 5,
            r = typeof o.amplitude == "number" ? o.amplitude : .25,
            i = typeof o.cancelAnimationFrame == "function" ? o.cancelAnimationFrame : Mu(),
            a = typeof o.requestAnimationFrame == "function" ? o.requestAnimationFrame : Nu(),
            s, d, l = 342,
            c, p, u, f, m, g, y, h;
        return {
            start: b,
            stop: x,
            cancel: S
        };

        function S() {
            i(c), i(h)
        }

        function b() {
            s = t(), f = y = p = m = 0, d = new Date, i(c), i(h), c = a(M)
        }

        function M() {
            var k = Date.now(),
                E = k - d;
            d = k;
            var P = t(),
                C = P.x - s.x,
                N = P.y - s.y;
            s = P;
            var _ = 1e3 / (1 + E);
            p = .8 * C * _ + .2 * p, m = .8 * N * _ + .2 * m, c = a(M)
        }

        function x() {
            i(c), i(h);
            var k = t();
            u = k.x, g = k.y, d = Date.now(), (p < -n || p > n) && (f = r * p, u += f), (m < -n || m > n) && (y = r * m, g += y), h = a(I)
        }

        function I() {
            var k = Date.now() - d,
                E = !1,
                P = 0,
                C = 0;
            f && (P = -f * Math.exp(-k / l), P > .5 || P < -.5 ? E = !0 : P = f = 0), y && (C = -y * Math.exp(-k / l), C > .5 || C < -.5 ? E = !0 : C = y = 0), E && (e(u + P, g + C), h = a(I))
        }
    }

    function Mu() {
        return typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : clearTimeout
    }

    function Nu() {
        return typeof requestAnimationFrame == "function" ? requestAnimationFrame : function(t) {
            return setTimeout(t, 16)
        }
    }
});
var Ms = ot((Qy, Is) => {
    Is.exports = Au;

    function Au(t) {
        if (t) return {
            capture: Ps,
            release: Ps
        };
        var e, o, n, r = !1;
        return {
            capture: i,
            release: a
        };

        function i(s) {
            r = !0, o = window.document.onselectstart, n = window.document.ondragstart, window.document.onselectstart = Es, e = s, e.ondragstart = Es
        }

        function a() {
            r && (r = !1, window.document.onselectstart = o, e && (e.ondragstart = n))
        }
    }

    function Es(t) {
        return t.stopPropagation(), !1
    }

    function Ps() {}
});
var As = ot((Jy, Ns) => {
    Ns.exports = Ru;

    function Ru() {
        this.x = 0, this.y = 0, this.scale = 1
    }
});
var Ls = ot((ev, Qr) => {
    Qr.exports = Lu;
    Qr.exports.canAttach = Rs;

    function Lu(t, e) {
        if (!Rs(t)) throw new Error("svg element is required for svg.panzoom to work");
        var o = t.ownerSVGElement;
        if (!o) throw new Error("Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element");
        e.disableKeyboardInteraction || o.setAttribute("tabindex", 0);
        var n = {
            getBBox: i,
            getScreenCTM: a,
            getOwner: r,
            applyTransform: d,
            initTransform: s
        };
        return n;

        function r() {
            return o
        }

        function i() {
            var l = t.getBBox();
            return {
                left: l.x,
                top: l.y,
                width: l.width,
                height: l.height
            }
        }

        function a() {
            var l = o.getCTM();
            return l || o.getScreenCTM()
        }

        function s(l) {
            var c = t.getCTM();
            c === null && (c = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix()), l.x = c.e, l.y = c.f, l.scale = c.a, o.removeAttributeNS(null, "viewBox")
        }

        function d(l) {
            t.setAttribute("transform", "matrix(" + l.scale + " 0 0 " + l.scale + " " + l.x + " " + l.y + ")")
        }
    }

    function Rs(t) {
        return t && t.ownerSVGElement && t.getCTM
    }
});
var Bs = ot((tv, Jr) => {
    Jr.exports = Ou;
    Jr.exports.canAttach = Os;

    function Ou(t, e) {
        var o = Os(t);
        if (!o) throw new Error("panzoom requires DOM element to be attached to the DOM tree");
        var n = t.parentElement;
        t.scrollTop = 0, e.disableKeyboardInteraction || n.setAttribute("tabindex", 0);
        var r = {
            getBBox: a,
            getOwner: i,
            applyTransform: s
        };
        return r;

        function i() {
            return n
        }

        function a() {
            return {
                left: 0,
                top: 0,
                width: t.clientWidth,
                height: t.clientHeight
            }
        }

        function s(d) {
            t.style.transformOrigin = "0 0 0", t.style.transform = "matrix(" + d.scale + ", 0, 0, " + d.scale + ", " + d.x + ", " + d.y + ")"
        }
    }

    function Os(t) {
        return t && t.parentElement && t.style
    }
});
var Us = ot((ov, Gs) => {
    "use strict";
    var _s = ps(),
        ei = Ss(),
        Bu = Cs(),
        _u = Ts(),
        Vs = Ms(),
        Fu = Vs(),
        Du = Vs(!0),
        Hu = As(),
        Fs = Ls(),
        Ds = Bs(),
        zu = 1,
        $u = 1.75,
        Hs = 300,
        zs = 200;
    Gs.exports = js;

    function js(t, e) {
        e = e || {};
        var o = e.controller;
        if (o || (Fs.canAttach(t) ? o = Fs(t, e) : Ds.canAttach(t) && (o = Ds(t, e))), !o) throw new Error("Cannot create panzoom for the current type of dom element");
        var n = o.getOwner(),
            r = {
                x: 0,
                y: 0
            },
            i = !1,
            a = new Hu;
        o.initTransform && o.initTransform(a);
        var s = typeof e.filterKey == "function" ? e.filterKey : So,
            d = typeof e.pinchSpeed == "number" ? e.pinchSpeed : 1,
            l = e.bounds,
            c = typeof e.maxZoom == "number" ? e.maxZoom : Number.POSITIVE_INFINITY,
            p = typeof e.minZoom == "number" ? e.minZoom : 0,
            u = typeof e.boundsPadding == "number" ? e.boundsPadding : .05,
            f = typeof e.zoomDoubleClickSpeed == "number" ? e.zoomDoubleClickSpeed : $u,
            m = e.beforeWheel || So,
            g = e.beforeMouseDown || So,
            y = typeof e.zoomSpeed == "number" ? e.zoomSpeed : zu,
            h = $s(e.transformOrigin),
            S = e.enableTextSelection ? Du : Fu;
        Wu(l), e.autocenter && Wp();
        var b, M = 0,
            x = 0,
            I = 0,
            k = null,
            E = new Date,
            P, C = !1,
            N = !1,
            _, B, $, V, z, G;
        "smoothScroll" in e && !e.smoothScroll ? G = Vu() : G = _u(Qp, nu, e.smoothScroll);
        var te, H, q, he = !1;
        ia();
        var Wt = {
            dispose: ru,
            moveBy: co,
            moveTo: Gr,
            smoothMoveTo: ou,
            centerOn: tu,
            zoomTo: On,
            zoomAbs: An,
            smoothZoom: Ln,
            smoothZoomAbs: pu,
            showRectangle: $p,
            pause: Dp,
            resume: Hp,
            isPaused: zp,
            getTransform: Vp,
            getMinZoom: jp,
            setMinZoom: Gp,
            getMaxZoom: Up,
            setMaxZoom: Zp,
            getTransformOrigin: qp,
            setTransformOrigin: Kp,
            getZoomSpeed: Yp,
            setZoomSpeed: Xp
        };
        Bu(Wt);
        var Nn = typeof e.initialX == "number" ? e.initialX : a.x,
            ea = typeof e.initialY == "number" ? e.initialY : a.y,
            ta = typeof e.initialZoom == "number" ? e.initialZoom : a.scale;
        return (Nn != a.x || ea != a.y || ta != a.scale) && An(Nn, ea, ta), Wt;

        function Dp() {
            aa(), he = !0
        }

        function Hp() {
            he && (ia(), he = !1)
        }

        function zp() {
            return he
        }

        function $p(v) {
            var R = n.getBoundingClientRect(),
                L = Vt(R.width, R.height),
                F = v.right - v.left,
                K = v.bottom - v.top;
            if (!Number.isFinite(F) || !Number.isFinite(K)) throw new Error("Invalid rectangle");
            var oe = L.x / F,
                ne = L.y / K,
                ye = Math.min(oe, ne);
            a.x = -(v.left + F / 2) * ye + L.x / 2, a.y = -(v.top + K / 2) * ye + L.y / 2, a.scale = ye
        }

        function Vt(v, R) {
            if (o.getScreenCTM) {
                var L = o.getScreenCTM(),
                    F = L.a,
                    K = L.d,
                    oe = L.e,
                    ne = L.f;
                r.x = v * F - oe, r.y = R * K - ne
            } else r.x = v, r.y = R;
            return r
        }

        function Wp() {
            var v, R, L = 0,
                F = 0,
                K = na();
            if (K) L = K.left, F = K.top, v = K.right - K.left, R = K.bottom - K.top;
            else {
                var oe = n.getBoundingClientRect();
                v = oe.width, R = oe.height
            }
            var ne = o.getBBox();
            if (!(ne.width === 0 || ne.height === 0)) {
                var ye = R / ne.height,
                    uo = v / ne.width,
                    jt = Math.min(uo, ye);
                a.x = -(ne.left + ne.width / 2) * jt + v / 2 + L, a.y = -(ne.top + ne.height / 2) * jt + R / 2 + F, a.scale = jt
            }
        }

        function Vp() {
            return a
        }

        function jp() {
            return p
        }

        function Gp(v) {
            p = v
        }

        function Up() {
            return c
        }

        function Zp(v) {
            c = v
        }

        function qp() {
            return h
        }

        function Kp(v) {
            h = $s(v)
        }

        function Yp() {
            return y
        }

        function Xp(v) {
            if (!Number.isFinite(v)) throw new Error("Zoom speed should be a number");
            y = v
        }

        function Qp() {
            return {
                x: a.x,
                y: a.y
            }
        }

        function Gr(v, R) {
            a.x = v, a.y = R, Ur(), po("pan"), Zr()
        }

        function oa(v, R) {
            Gr(a.x + v, a.y + R)
        }

        function Ur() {
            var v = na();
            if (v) {
                var R = !1,
                    L = Jp(),
                    F = v.left - L.right;
                return F > 0 && (a.x += F, R = !0), F = v.right - L.left, F < 0 && (a.x += F, R = !0), F = v.top - L.bottom, F > 0 && (a.y += F, R = !0), F = v.bottom - L.top, F < 0 && (a.y += F, R = !0), R
            }
        }

        function na() {
            if (l) {
                if (typeof l == "boolean") {
                    var v = n.getBoundingClientRect(),
                        R = v.width,
                        L = v.height;
                    return {
                        left: R * u,
                        top: L * u,
                        right: R * (1 - u),
                        bottom: L * (1 - u)
                    }
                }
                return l
            }
        }

        function Jp() {
            var v = o.getBBox(),
                R = eu(v.left, v.top);
            return {
                left: R.x,
                top: R.y,
                right: v.width * a.scale + R.x,
                bottom: v.height * a.scale + R.y
            }
        }

        function eu(v, R) {
            return {
                x: v * a.scale + a.x,
                y: R * a.scale + a.y
            }
        }

        function Zr() {
            i = !0, b = window.requestAnimationFrame(iu)
        }

        function ra(v, R, L) {
            if (ti(v) || ti(R) || ti(L)) throw new Error("zoom requires valid numbers");
            var F = a.scale * L;
            if (F < p) {
                if (a.scale === p) return;
                L = p / a.scale
            }
            if (F > c) {
                if (a.scale === c) return;
                L = c / a.scale
            }
            var K = Vt(v, R);
            if (a.x = K.x - L * (K.x - a.x), a.y = K.y - L * (K.y - a.y), l && u === 1 && p === 1) a.scale *= L, Ur();
            else {
                var oe = Ur();
                oe || (a.scale *= L)
            }
            po("zoom"), Zr()
        }

        function An(v, R, L) {
            var F = L / a.scale;
            ra(v, R, F)
        }

        function tu(v) {
            var R = v.ownerSVGElement;
            if (!R) throw new Error("ui element is required to be within the scene");
            var L = v.getBoundingClientRect(),
                F = L.left + L.width / 2,
                K = L.top + L.height / 2,
                oe = R.getBoundingClientRect(),
                ne = oe.width / 2 - F,
                ye = oe.height / 2 - K;
            co(ne, ye, !0)
        }

        function ou(v, R) {
            co(v - a.x, R - a.y, !0)
        }

        function co(v, R, L) {
            if (!L) return oa(v, R);
            te && te.cancel();
            var F = {
                    x: 0,
                    y: 0
                },
                K = {
                    x: v,
                    y: R
                },
                oe = 0,
                ne = 0;
            te = ei(F, K, {
                step: function(ye) {
                    oa(ye.x - oe, ye.y - ne), oe = ye.x, ne = ye.y
                }
            })
        }

        function nu(v, R) {
            Bn(), Gr(v, R)
        }

        function ru() {
            aa()
        }

        function ia() {
            n.addEventListener("mousedown", fa, {
                passive: !1
            }), n.addEventListener("dblclick", ma, {
                passive: !1
            }), n.addEventListener("touchstart", la, {
                passive: !1
            }), n.addEventListener("keydown", sa, {
                passive: !1
            }), _s.addWheelListener(n, ba, {
                passive: !1
            }), Zr()
        }

        function aa() {
            _s.removeWheelListener(n, ba), n.removeEventListener("mousedown", fa), n.removeEventListener("keydown", sa), n.removeEventListener("dblclick", ma), n.removeEventListener("touchstart", la), b && (window.cancelAnimationFrame(b), b = 0), G.cancel(), ya(), va(), S.release(), qr()
        }

        function iu() {
            i && au()
        }

        function au() {
            i = !1, o.applyTransform(a), po("transform"), b = 0
        }

        function sa(v) {
            var R = 0,
                L = 0,
                F = 0;
            if (v.keyCode === 38 ? L = 1 : v.keyCode === 40 ? L = -1 : v.keyCode === 37 ? R = 1 : v.keyCode === 39 ? R = -1 : v.keyCode === 189 || v.keyCode === 109 ? F = 1 : (v.keyCode === 187 || v.keyCode === 107) && (F = -1), !s(v, R, L, F)) {
                if (R || L) {
                    v.preventDefault(), v.stopPropagation();
                    var K = n.getBoundingClientRect(),
                        oe = Math.min(K.width, K.height),
                        ne = .05,
                        ye = oe * ne * R,
                        uo = oe * ne * L;
                    co(ye, uo)
                }
                if (F) {
                    var jt = xa(F * 100),
                        oe = h ? Go() : su();
                    On(oe.x, oe.y, jt)
                }
            }
        }

        function su() {
            var v = n.getBoundingClientRect();
            return {
                x: v.width / 2,
                y: v.height / 2
            }
        }

        function la(v) {
            if (lu(v), jo(), v.touches.length === 1) return du(v, v.touches[0]);
            v.touches.length === 2 && (z = ua(v.touches[0], v.touches[1]), q = !0, ca())
        }

        function lu(v) {
            e.onTouch && !e.onTouch(v) || (v.stopPropagation(), v.preventDefault())
        }

        function cu(v) {
            jo(), !(e.onDoubleClick && !e.onDoubleClick(v)) && (v.preventDefault(), v.stopPropagation())
        }

        function du(v) {
            x = new Date;
            var R = v.touches[0],
                L = xt(R);
            P = L;
            var F = Vt(L.x, L.y);
            _ = F.x, B = F.y, $ = _, V = B, G.cancel(), ca()
        }

        function ca() {
            C || (C = !0, document.addEventListener("touchmove", da), document.addEventListener("touchend", Rn), document.addEventListener("touchcancel", Rn))
        }

        function da(v) {
            if (v.touches.length === 1) {
                v.stopPropagation();
                var R = v.touches[0],
                    L = xt(R),
                    F = Vt(L.x, L.y),
                    K = F.x - _,
                    oe = F.y - B;
                K !== 0 && oe !== 0 && Sa(), _ = F.x, B = F.y, co(K, oe)
            } else if (v.touches.length === 2) {
                q = !0;
                var ne = v.touches[0],
                    ye = v.touches[1],
                    uo = ua(ne, ye),
                    jt = 1 + (uo / z - 1) * d,
                    wa = xt(ne),
                    Ca = xt(ye);
                if (_ = (wa.x + Ca.x) / 2, B = (wa.y + Ca.y) / 2, h) {
                    var L = Go();
                    _ = L.x, B = L.y
                }
                On(_, B, jt), z = uo, v.stopPropagation(), v.preventDefault()
            }
        }

        function jo() {
            I && (clearTimeout(I), I = 0)
        }

        function pa(v) {
            if (e.onClick) {
                jo();
                var R = _ - $,
                    L = B - V,
                    F = Math.sqrt(R * R + L * L);
                F > 5 || (I = setTimeout(function() {
                    I = 0, e.onClick(v)
                }, Hs))
            }
        }

        function Rn(v) {
            if (jo(), v.touches.length > 0) {
                var R = xt(v.touches[0]),
                    L = Vt(R.x, R.y);
                _ = L.x, B = L.y
            } else {
                var F = new Date;
                if (F - M < Hs)
                    if (h) {
                        var R = Go();
                        Ln(R.x, R.y, f)
                    } else Ln(P.x, P.y, f);
                else F - x < zs && pa(v);
                M = F, qr(), va()
            }
        }

        function ua(v, R) {
            var L = v.clientX - R.clientX,
                F = v.clientY - R.clientY;
            return Math.sqrt(L * L + F * F)
        }

        function ma(v) {
            cu(v);
            var R = xt(v);
            h && (R = Go()), Ln(R.x, R.y, f)
        }

        function fa(v) {
            if (jo(), !g(v)) {
                if (k = v, E = new Date, C) return v.stopPropagation(), !1;
                var R = v.button === 1 && window.event !== null || v.button === 0;
                if (R) {
                    G.cancel();
                    var L = xt(v),
                        F = Vt(L.x, L.y);
                    return $ = _ = F.x, V = B = F.y, document.addEventListener("mousemove", ga), document.addEventListener("mouseup", ha), S.capture(v.target || v.srcElement), !1
                }
            }
        }

        function ga(v) {
            if (!C) {
                Sa();
                var R = xt(v),
                    L = Vt(R.x, R.y),
                    F = L.x - _,
                    K = L.y - B;
                _ = L.x, B = L.y, co(F, K)
            }
        }

        function ha() {
            var v = new Date;
            v - E < zs && pa(k), S.release(), qr(), ya()
        }

        function ya() {
            document.removeEventListener("mousemove", ga), document.removeEventListener("mouseup", ha), N = !1
        }

        function va() {
            document.removeEventListener("touchmove", da), document.removeEventListener("touchend", Rn), document.removeEventListener("touchcancel", Rn), N = !1, q = !1, C = !1
        }

        function ba(v) {
            if (!m(v)) {
                G.cancel();
                var R = v.deltaY;
                v.deltaMode > 0 && (R *= 100);
                var L = xa(R);
                if (L !== 1) {
                    var F = h ? Go() : xt(v);
                    On(F.x, F.y, L), v.preventDefault()
                }
            }
        }

        function xt(v) {
            var R, L, F = n.getBoundingClientRect();
            return R = v.clientX - F.left, L = v.clientY - F.top, {
                x: R,
                y: L
            }
        }

        function Ln(v, R, L) {
            var F = a.scale,
                K = {
                    scale: F
                },
                oe = {
                    scale: L * F
                };
            G.cancel(), Bn(), H = ei(K, oe, {
                step: function(ne) {
                    An(v, R, ne.scale)
                },
                done: uu
            })
        }

        function pu(v, R, L) {
            var F = a.scale,
                K = {
                    scale: F
                },
                oe = {
                    scale: L
                };
            G.cancel(), Bn(), H = ei(K, oe, {
                step: function(ne) {
                    An(v, R, ne.scale)
                }
            })
        }

        function Go() {
            var v = n.getBoundingClientRect();
            return {
                x: v.width * h.x,
                y: v.height * h.y
            }
        }

        function On(v, R, L) {
            return G.cancel(), Bn(), ra(v, R, L)
        }

        function Bn() {
            H && (H.cancel(), H = null)
        }

        function xa(v) {
            var R = Math.sign(v),
                L = Math.min(.25, Math.abs(y * v / 128));
            return 1 - R * L
        }

        function Sa() {
            N || (po("panstart"), N = !0, G.start())
        }

        function qr() {
            N && (q || G.stop(), po("panend"))
        }

        function uu() {
            po("zoomend")
        }

        function po(v) {
            Wt.fire(v, Wt)
        }
    }

    function $s(t) {
        if (t) {
            if (typeof t == "object") return (!xo(t.x) || !xo(t.y)) && Ws(t), t;
            Ws()
        }
    }

    function Ws(t) {
        throw console.error(t), new Error(["Cannot parse transform origin.", "Some good examples:", '  "center center" can be achieved with {x: 0.5, y: 0.5}', '  "top center" can be achieved with {x: 0.5, y: 0}', '  "bottom right" can be achieved with {x: 1, y: 1}'].join(`
`))
    }

    function So() {}

    function Wu(t) {
        var e = typeof t;
        if (!(e === "undefined" || e === "boolean")) {
            var o = xo(t.left) && xo(t.top) && xo(t.bottom) && xo(t.right);
            if (!o) throw new Error("Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}")
        }
    }

    function xo(t) {
        return Number.isFinite(t)
    }

    function ti(t) {
        return Number.isNaN ? Number.isNaN(t) : t !== t
    }

    function Vu() {
        return {
            start: So,
            stop: So,
            cancel: So
        }
    }

    function ju() {
        if (typeof document > "u") return;
        var t = document.getElementsByTagName("script");
        if (!t) return;
        for (var e, o = 0; o < t.length; ++o) {
            var n = t[o];
            if (n.src && n.src.match(/\bpanzoom(\.min)?\.js/)) {
                e = n;
                break
            }
        }
        if (!e) return;
        var r = e.getAttribute("query");
        if (!r) return;
        var i = e.getAttribute("name") || "pz",
            a = Date.now();
        s();

        function s() {
            var c = document.querySelector(r);
            if (!c) {
                var p = Date.now(),
                    u = p - a;
                if (u < 2e3) {
                    setTimeout(s, 100);
                    return
                }
                console.error("Cannot find the panzoom element", i);
                return
            }
            var f = d(e);
            console.log(f), window[i] = js(c, f)
        }

        function d(c) {
            for (var p = c.attributes, u = {}, f = 0; f < p.length; ++f) {
                var m = p[f],
                    g = l(m);
                g && (u[g.name] = g.value)
            }
            return u
        }

        function l(c) {
            if (c.name) {
                var p = c.name[0] === "p" && c.name[1] === "z" && c.name[2] === "-";
                if (p) {
                    var u = c.name.substr(3),
                        f = JSON.parse(c.value);
                    return {
                        name: u,
                        value: f
                    }
                }
            }
        }
    }
    ju()
});
var U = A(O()),
    Tl = A(Uo());
var oi = A(O());
var Gu = w.div `
  display: flex;
  width: var(--checklist-width);
  flex-direction: column;
  align-items: flex-start;

  border-radius: var(--layout-radius-card);
  border: 1px solid var(--border-primary);
  background: var(--background-primary);

  box-shadow: var(--layout-shadow) var(--layout-shadow-color);
  overflow: hidden;

  z-index: ${Ce.Z_NUDGE};
  position: fixed;

  bottom: 24px;
  right: ${({position:t})=>t==="bottomRight"?"24px":"auto"};
  left: ${({position:t})=>t==="bottomLeft"?"24px":"auto"};
`,
    Uu = oi.default.forwardRef(({
        children: t,
        ...e
    }, o) => oi.default.createElement(Gu, {
        ref: o,
        ...e
    }, t)),
    Zs = Uu;
var qs = A(O());
var Zu = w.div `
  height: 1px;
  align-self: stretch;
  background: var(--border-primary);
`,
    qu = () => qs.default.createElement(Zu, null),
    Qn = qu;
var He = A(O());

function si() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    }
}
var Zt = si();

function el(t) {
    Zt = t
}
var nn = {
    exec: () => null
};

function ee(t, e = "") {
    let o = typeof t == "string" ? t : t.source,
        n = {
            replace: (r, i) => {
                let a = typeof i == "string" ? i : i.source;
                return a = a.replace(Te.caret, "$1"), o = o.replace(r, a), n
            },
            getRegex: () => new RegExp(o, e)
        };
    return n
}
var Te = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceTabs: /^\t+/,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] /,
        listReplaceTask: /^\[[ xX]\] +/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: t => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: t => new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
        hrRegex: t => new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: t => new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: t => new RegExp(`^ {0,${Math.min(3,t-1)}}#`),
        htmlBeginRegex: t => new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`, "i")
    },
    Ku = /^(?:[ \t]*(?:\n|$))+/,
    Yu = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    Xu = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    rn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    Qu = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    li = /(?:[*+-]|\d{1,9}[.)])/,
    tl = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    ol = ee(tl).replace(/bull/g, li).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(),
    Ju = ee(tl).replace(/bull/g, li).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),
    ci = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    em = /^[^\n]+/,
    di = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
    tm = ee(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", di).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
    om = ee(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, li).getRegex(),
    rr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    pi = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    nm = ee("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", pi).replace("tag", rr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
    nl = ee(ci).replace("hr", rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", rr).getRegex(),
    rm = ee(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", nl).getRegex(),
    ui = {
        blockquote: rm,
        code: Yu,
        def: tm,
        fences: Xu,
        heading: Qu,
        hr: rn,
        html: nm,
        lheading: ol,
        list: om,
        newline: Ku,
        paragraph: nl,
        table: nn,
        text: em
    },
    Ks = ee("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", rr).getRegex(),
    im = { ...ui,
        lheading: Ju,
        table: Ks,
        paragraph: ee(ci).replace("hr", rn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ks).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", rr).getRegex()
    },
    am = { ...ui,
        html: ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", pi).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: nn,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: ee(ci).replace("hr", rn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ol).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    },
    sm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    lm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    rl = /^( {2,}|\\)\n(?!\s*$)/,
    cm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    ir = /[\p{P}\p{S}]/u,
    mi = /[\s\p{P}\p{S}]/u,
    il = /[^\s\p{P}\p{S}]/u,
    dm = ee(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, mi).getRegex(),
    al = /(?!~)[\p{P}\p{S}]/u,
    pm = /(?!~)[\s\p{P}\p{S}]/u,
    um = /(?:[^\s\p{P}\p{S}]|~)/u,
    mm = /\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,
    sl = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
    fm = ee(sl, "u").replace(/punct/g, ir).getRegex(),
    gm = ee(sl, "u").replace(/punct/g, al).getRegex(),
    ll = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
    hm = ee(ll, "gu").replace(/notPunctSpace/g, il).replace(/punctSpace/g, mi).replace(/punct/g, ir).getRegex(),
    ym = ee(ll, "gu").replace(/notPunctSpace/g, um).replace(/punctSpace/g, pm).replace(/punct/g, al).getRegex(),
    vm = ee("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, il).replace(/punctSpace/g, mi).replace(/punct/g, ir).getRegex(),
    bm = ee(/\\(punct)/, "gu").replace(/punct/g, ir).getRegex(),
    xm = ee(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
    Sm = ee(pi).replace("(?:-->|$)", "-->").getRegex(),
    wm = ee("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Sm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
    tr = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/,
    Cm = ee(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", tr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
    cl = ee(/^!?\[(label)\]\[(ref)\]/).replace("label", tr).replace("ref", di).getRegex(),
    dl = ee(/^!?\[(ref)\](?:\[\])?/).replace("ref", di).getRegex(),
    km = ee("reflink|nolink(?!\\()", "g").replace("reflink", cl).replace("nolink", dl).getRegex(),
    fi = {
        _backpedal: nn,
        anyPunctuation: bm,
        autolink: xm,
        blockSkip: mm,
        br: rl,
        code: lm,
        del: nn,
        emStrongLDelim: fm,
        emStrongRDelimAst: hm,
        emStrongRDelimUnd: vm,
        escape: sm,
        link: Cm,
        nolink: dl,
        punctuation: dm,
        reflink: cl,
        reflinkSearch: km,
        tag: wm,
        text: cm,
        url: nn
    },
    Tm = { ...fi,
        link: ee(/^!?\[(label)\]\((.*?)\)/).replace("label", tr).getRegex(),
        reflink: ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", tr).getRegex()
    },
    ri = { ...fi,
        emStrongRDelimAst: ym,
        emStrongLDelim: gm,
        url: ee(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    },
    Em = { ...ri,
        br: ee(rl).replace("{2,}", "*").getRegex(),
        text: ee(ri.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    },
    Jn = {
        normal: ui,
        gfm: im,
        pedantic: am
    },
    tn = {
        normal: fi,
        gfm: ri,
        breaks: Em,
        pedantic: Tm
    },
    Pm = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    Ys = t => Pm[t];

function st(t, e) {
    if (e) {
        if (Te.escapeTest.test(t)) return t.replace(Te.escapeReplace, Ys)
    } else if (Te.escapeTestNoEncode.test(t)) return t.replace(Te.escapeReplaceNoEncode, Ys);
    return t
}

function Xs(t) {
    try {
        t = encodeURI(t).replace(Te.percentDecode, "%")
    } catch (e) {
        return null
    }
    return t
}

function Qs(t, e) {
    var i;
    let o = t.replace(Te.findPipe, (a, s, d) => {
            let l = !1,
                c = s;
            for (; --c >= 0 && d[c] === "\\";) l = !l;
            return l ? "|" : " |"
        }),
        n = o.split(Te.splitPipe),
        r = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !((i = n.at(-1)) != null && i.trim()) && n.pop(), e)
        if (n.length > e) n.splice(e);
        else
            for (; n.length < e;) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(Te.slashPipe, "|");
    return n
}

function on(t, e, o) {
    let n = t.length;
    if (n === 0) return "";
    let r = 0;
    for (; r < n;) {
        let i = t.charAt(n - r - 1);
        if (i === e && !o) r++;
        else if (i !== e && o) r++;
        else break
    }
    return t.slice(0, n - r)
}

function Im(t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    let o = 0;
    for (let n = 0; n < t.length; n++)
        if (t[n] === "\\") n++;
        else if (t[n] === e[0]) o++;
    else if (t[n] === e[1] && (o--, o < 0)) return n;
    return o > 0 ? -2 : -1
}

function Js(t, e, o, n, r) {
    let i = e.href,
        a = e.title || null,
        s = t[1].replace(r.other.outputLinkReplace, "$1");
    n.state.inLink = !0;
    let d = {
        type: t[0].charAt(0) === "!" ? "image" : "link",
        raw: o,
        href: i,
        title: a,
        text: s,
        tokens: n.inlineTokens(s)
    };
    return n.state.inLink = !1, d
}

function Mm(t, e, o) {
    let n = t.match(o.other.indentCodeCompensation);
    if (n === null) return e;
    let r = n[1];
    return e.split(`
`).map(i => {
        let a = i.match(o.other.beginningSpace);
        if (a === null) return i;
        let [s] = a;
        return s.length >= r.length ? i.slice(r.length) : i
    }).join(`
`)
}
var or = class {
        constructor(t) {
            re(this, "options");
            re(this, "rules");
            re(this, "lexer");
            this.options = t || Zt
        }
        space(t) {
            let e = this.rules.block.newline.exec(t);
            if (e && e[0].length > 0) return {
                type: "space",
                raw: e[0]
            }
        }
        code(t) {
            let e = this.rules.block.code.exec(t);
            if (e) {
                let o = e[0].replace(this.rules.other.codeRemoveIndent, "");
                return {
                    type: "code",
                    raw: e[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? o : on(o, `
`)
                }
            }
        }
        fences(t) {
            let e = this.rules.block.fences.exec(t);
            if (e) {
                let o = e[0],
                    n = Mm(o, e[3] || "", this.rules);
                return {
                    type: "code",
                    raw: o,
                    lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2],
                    text: n
                }
            }
        }
        heading(t) {
            let e = this.rules.block.heading.exec(t);
            if (e) {
                let o = e[2].trim();
                if (this.rules.other.endingHash.test(o)) {
                    let n = on(o, "#");
                    (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (o = n.trim())
                }
                return {
                    type: "heading",
                    raw: e[0],
                    depth: e[1].length,
                    text: o,
                    tokens: this.lexer.inline(o)
                }
            }
        }
        hr(t) {
            let e = this.rules.block.hr.exec(t);
            if (e) return {
                type: "hr",
                raw: on(e[0], `
`)
            }
        }
        blockquote(t) {
            let e = this.rules.block.blockquote.exec(t);
            if (e) {
                let o = on(e[0], `
`).split(`
`),
                    n = "",
                    r = "",
                    i = [];
                for (; o.length > 0;) {
                    let a = !1,
                        s = [],
                        d;
                    for (d = 0; d < o.length; d++)
                        if (this.rules.other.blockquoteStart.test(o[d])) s.push(o[d]), a = !0;
                        else if (!a) s.push(o[d]);
                    else break;
                    o = o.slice(d);
                    let l = s.join(`
`),
                        c = l.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                    n = n ? `${n}
${l}` : l, r = r ? `${r}
${c}` : c;
                    let p = this.lexer.state.top;
                    if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = p, o.length === 0) break;
                    let u = i.at(-1);
                    if ((u == null ? void 0 : u.type) === "code") break;
                    if ((u == null ? void 0 : u.type) === "blockquote") {
                        let f = u,
                            m = f.raw + `
` + o.join(`
`),
                            g = this.blockquote(m);
                        i[i.length - 1] = g, n = n.substring(0, n.length - f.raw.length) + g.raw, r = r.substring(0, r.length - f.text.length) + g.text;
                        break
                    } else if ((u == null ? void 0 : u.type) === "list") {
                        let f = u,
                            m = f.raw + `
` + o.join(`
`),
                            g = this.list(m);
                        i[i.length - 1] = g, n = n.substring(0, n.length - u.raw.length) + g.raw, r = r.substring(0, r.length - f.raw.length) + g.raw, o = m.substring(i.at(-1).raw.length).split(`
`);
                        continue
                    }
                }
                return {
                    type: "blockquote",
                    raw: n,
                    tokens: i,
                    text: r
                }
            }
        }
        list(t) {
            let e = this.rules.block.list.exec(t);
            if (e) {
                let o = e[1].trim(),
                    n = o.length > 1,
                    r = {
                        type: "list",
                        raw: "",
                        ordered: n,
                        start: n ? +o.slice(0, -1) : "",
                        loose: !1,
                        items: []
                    };
                o = n ? `\\d{1,9}\\${o.slice(-1)}` : `\\${o}`, this.options.pedantic && (o = n ? o : "[*+-]");
                let i = this.rules.other.listItemRegex(o),
                    a = !1;
                for (; t;) {
                    let d = !1,
                        l = "",
                        c = "";
                    if (!(e = i.exec(t)) || this.rules.block.hr.test(t)) break;
                    l = e[0], t = t.substring(l.length);
                    let p = e[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, h => " ".repeat(3 * h.length)),
                        u = t.split(`
`, 1)[0],
                        f = !p.trim(),
                        m = 0;
                    if (this.options.pedantic ? (m = 2, c = p.trimStart()) : f ? m = e[1].length + 1 : (m = e[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, c = p.slice(m), m += e[1].length), f && this.rules.other.blankLine.test(u) && (l += u + `
`, t = t.substring(u.length + 1), d = !0), !d) {
                        let h = this.rules.other.nextBulletRegex(m),
                            S = this.rules.other.hrRegex(m),
                            b = this.rules.other.fencesBeginRegex(m),
                            M = this.rules.other.headingBeginRegex(m),
                            x = this.rules.other.htmlBeginRegex(m);
                        for (; t;) {
                            let I = t.split(`
`, 1)[0],
                                k;
                            if (u = I, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), k = u) : k = u.replace(this.rules.other.tabCharGlobal, "    "), b.test(u) || M.test(u) || x.test(u) || h.test(u) || S.test(u)) break;
                            if (k.search(this.rules.other.nonSpaceChar) >= m || !u.trim()) c += `
` + k.slice(m);
                            else {
                                if (f || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || b.test(p) || M.test(p) || S.test(p)) break;
                                c += `
` + u
                            }!f && !u.trim() && (f = !0), l += I + `
`, t = t.substring(I.length + 1), p = k.slice(m)
                        }
                    }
                    r.loose || (a ? r.loose = !0 : this.rules.other.doubleBlankLine.test(l) && (a = !0));
                    let g = null,
                        y;
                    this.options.gfm && (g = this.rules.other.listIsTask.exec(c), g && (y = g[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
                        type: "list_item",
                        raw: l,
                        task: !!g,
                        checked: y,
                        loose: !1,
                        text: c,
                        tokens: []
                    }), r.raw += l
                }
                let s = r.items.at(-1);
                if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
                else return;
                r.raw = r.raw.trimEnd();
                for (let d = 0; d < r.items.length; d++)
                    if (this.lexer.state.top = !1, r.items[d].tokens = this.lexer.blockTokens(r.items[d].text, []), !r.loose) {
                        let l = r.items[d].tokens.filter(p => p.type === "space"),
                            c = l.length > 0 && l.some(p => this.rules.other.anyLine.test(p.raw));
                        r.loose = c
                    }
                if (r.loose)
                    for (let d = 0; d < r.items.length; d++) r.items[d].loose = !0;
                return r
            }
        }
        html(t) {
            let e = this.rules.block.html.exec(t);
            if (e) return {
                type: "html",
                block: !0,
                raw: e[0],
                pre: e[1] === "pre" || e[1] === "script" || e[1] === "style",
                text: e[0]
            }
        }
        def(t) {
            let e = this.rules.block.def.exec(t);
            if (e) {
                let o = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                    n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                    r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
                return {
                    type: "def",
                    tag: o,
                    raw: e[0],
                    href: n,
                    title: r
                }
            }
        }
        table(t) {
            var a;
            let e = this.rules.block.table.exec(t);
            if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
            let o = Qs(e[1]),
                n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"),
                r = (a = e[3]) != null && a.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
                i = {
                    type: "table",
                    raw: e[0],
                    header: [],
                    align: [],
                    rows: []
                };
            if (o.length === n.length) {
                for (let s of n) this.rules.other.tableAlignRight.test(s) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? i.align.push("left") : i.align.push(null);
                for (let s = 0; s < o.length; s++) i.header.push({
                    text: o[s],
                    tokens: this.lexer.inline(o[s]),
                    header: !0,
                    align: i.align[s]
                });
                for (let s of r) i.rows.push(Qs(s, i.header.length).map((d, l) => ({
                    text: d,
                    tokens: this.lexer.inline(d),
                    header: !1,
                    align: i.align[l]
                })));
                return i
            }
        }
        lheading(t) {
            let e = this.rules.block.lheading.exec(t);
            if (e) return {
                type: "heading",
                raw: e[0],
                depth: e[2].charAt(0) === "=" ? 1 : 2,
                text: e[1],
                tokens: this.lexer.inline(e[1])
            }
        }
        paragraph(t) {
            let e = this.rules.block.paragraph.exec(t);
            if (e) {
                let o = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
                return {
                    type: "paragraph",
                    raw: e[0],
                    text: o,
                    tokens: this.lexer.inline(o)
                }
            }
        }
        text(t) {
            let e = this.rules.block.text.exec(t);
            if (e) return {
                type: "text",
                raw: e[0],
                text: e[0],
                tokens: this.lexer.inline(e[0])
            }
        }
        escape(t) {
            let e = this.rules.inline.escape.exec(t);
            if (e) return {
                type: "escape",
                raw: e[0],
                text: e[1]
            }
        }
        tag(t) {
            let e = this.rules.inline.tag.exec(t);
            if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
                type: "html",
                raw: e[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: e[0]
            }
        }
        link(t) {
            let e = this.rules.inline.link.exec(t);
            if (e) {
                let o = e[2].trim();
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(o)) {
                    if (!this.rules.other.endAngleBracket.test(o)) return;
                    let i = on(o.slice(0, -1), "\\");
                    if ((o.length - i.length) % 2 === 0) return
                } else {
                    let i = Im(e[2], "()");
                    if (i === -2) return;
                    if (i > -1) {
                        let a = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
                        e[2] = e[2].substring(0, i), e[0] = e[0].substring(0, a).trim(), e[3] = ""
                    }
                }
                let n = e[2],
                    r = "";
                if (this.options.pedantic) {
                    let i = this.rules.other.pedanticHrefTitle.exec(n);
                    i && (n = i[1], r = i[3])
                } else r = e[3] ? e[3].slice(1, -1) : "";
                return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(o) ? n = n.slice(1) : n = n.slice(1, -1)), Js(e, {
                    href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
                    title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
                }, e[0], this.lexer, this.rules)
            }
        }
        reflink(t, e) {
            let o;
            if ((o = this.rules.inline.reflink.exec(t)) || (o = this.rules.inline.nolink.exec(t))) {
                let n = (o[2] || o[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
                    r = e[n.toLowerCase()];
                if (!r) {
                    let i = o[0].charAt(0);
                    return {
                        type: "text",
                        raw: i,
                        text: i
                    }
                }
                return Js(o, r, o[0], this.lexer, this.rules)
            }
        }
        emStrong(t, e, o = "") {
            let n = this.rules.inline.emStrongLDelim.exec(t);
            if (!(!n || n[3] && o.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !o || this.rules.inline.punctuation.exec(o))) {
                let r = [...n[0]].length - 1,
                    i, a, s = r,
                    d = 0,
                    l = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (l.lastIndex = 0, e = e.slice(-1 * t.length + r);
                    (n = l.exec(e)) != null;) {
                    if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i) continue;
                    if (a = [...i].length, n[3] || n[4]) {
                        s += a;
                        continue
                    } else if ((n[5] || n[6]) && r % 3 && !((r + a) % 3)) {
                        d += a;
                        continue
                    }
                    if (s -= a, s > 0) continue;
                    a = Math.min(a, a + s + d);
                    let c = [...n[0]][0].length,
                        p = t.slice(0, r + n.index + c + a);
                    if (Math.min(r, a) % 2) {
                        let f = p.slice(1, -1);
                        return {
                            type: "em",
                            raw: p,
                            text: f,
                            tokens: this.lexer.inlineTokens(f)
                        }
                    }
                    let u = p.slice(2, -2);
                    return {
                        type: "strong",
                        raw: p,
                        text: u,
                        tokens: this.lexer.inlineTokens(u)
                    }
                }
            }
        }
        codespan(t) {
            let e = this.rules.inline.code.exec(t);
            if (e) {
                let o = e[2].replace(this.rules.other.newLineCharGlobal, " "),
                    n = this.rules.other.nonSpaceChar.test(o),
                    r = this.rules.other.startingSpaceChar.test(o) && this.rules.other.endingSpaceChar.test(o);
                return n && r && (o = o.substring(1, o.length - 1)), {
                    type: "codespan",
                    raw: e[0],
                    text: o
                }
            }
        }
        br(t) {
            let e = this.rules.inline.br.exec(t);
            if (e) return {
                type: "br",
                raw: e[0]
            }
        }
        del(t) {
            let e = this.rules.inline.del.exec(t);
            if (e) return {
                type: "del",
                raw: e[0],
                text: e[2],
                tokens: this.lexer.inlineTokens(e[2])
            }
        }
        autolink(t) {
            let e = this.rules.inline.autolink.exec(t);
            if (e) {
                let o, n;
                return e[2] === "@" ? (o = e[1], n = "mailto:" + o) : (o = e[1], n = o), {
                    type: "link",
                    raw: e[0],
                    text: o,
                    href: n,
                    tokens: [{
                        type: "text",
                        raw: o,
                        text: o
                    }]
                }
            }
        }
        url(t) {
            var o, n;
            let e;
            if (e = this.rules.inline.url.exec(t)) {
                let r, i;
                if (e[2] === "@") r = e[0], i = "mailto:" + r;
                else {
                    let a;
                    do a = e[0], e[0] = (n = (o = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : o[0]) != null ? n : ""; while (a !== e[0]);
                    r = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0]
                }
                return {
                    type: "link",
                    raw: e[0],
                    text: r,
                    href: i,
                    tokens: [{
                        type: "text",
                        raw: r,
                        text: r
                    }]
                }
            }
        }
        inlineText(t) {
            let e = this.rules.inline.text.exec(t);
            if (e) {
                let o = this.lexer.state.inRawBlock;
                return {
                    type: "text",
                    raw: e[0],
                    text: e[0],
                    escaped: o
                }
            }
        }
    },
    St = class ii {
        constructor(e) {
            re(this, "tokens");
            re(this, "options");
            re(this, "state");
            re(this, "tokenizer");
            re(this, "inlineQueue");
            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Zt, this.options.tokenizer = this.options.tokenizer || new or, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                inLink: !1,
                inRawBlock: !1,
                top: !0
            };
            let o = {
                other: Te,
                block: Jn.normal,
                inline: tn.normal
            };
            this.options.pedantic ? (o.block = Jn.pedantic, o.inline = tn.pedantic) : this.options.gfm && (o.block = Jn.gfm, this.options.breaks ? o.inline = tn.breaks : o.inline = tn.gfm), this.tokenizer.rules = o
        }
        static get rules() {
            return {
                block: Jn,
                inline: tn
            }
        }
        static lex(e, o) {
            return new ii(o).lex(e)
        }
        static lexInline(e, o) {
            return new ii(o).inlineTokens(e)
        }
        lex(e) {
            e = e.replace(Te.carriageReturn, `
`), this.blockTokens(e, this.tokens);
            for (let o = 0; o < this.inlineQueue.length; o++) {
                let n = this.inlineQueue[o];
                this.inlineTokens(n.src, n.tokens)
            }
            return this.inlineQueue = [], this.tokens
        }
        blockTokens(e, o = [], n = !1) {
            var r, i, a;
            for (this.options.pedantic && (e = e.replace(Te.tabCharGlobal, "    ").replace(Te.spaceLine, "")); e;) {
                let s;
                if ((i = (r = this.options.extensions) == null ? void 0 : r.block) != null && i.some(l => (s = l.call({
                        lexer: this
                    }, e, o)) ? (e = e.substring(s.raw.length), o.push(s), !0) : !1)) continue;
                if (s = this.tokenizer.space(e)) {
                    e = e.substring(s.raw.length);
                    let l = o.at(-1);
                    s.raw.length === 1 && l !== void 0 ? l.raw += `
` : o.push(s);
                    continue
                }
                if (s = this.tokenizer.code(e)) {
                    e = e.substring(s.raw.length);
                    let l = o.at(-1);
                    (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.text, this.inlineQueue.at(-1).src = l.text) : o.push(s);
                    continue
                }
                if (s = this.tokenizer.fences(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.heading(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.hr(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.blockquote(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.list(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.html(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.def(e)) {
                    e = e.substring(s.raw.length);
                    let l = o.at(-1);
                    (l == null ? void 0 : l.type) === "paragraph" || (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.raw, this.inlineQueue.at(-1).src = l.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
                        href: s.href,
                        title: s.title
                    }, o.push(s));
                    continue
                }
                if (s = this.tokenizer.table(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                if (s = this.tokenizer.lheading(e)) {
                    e = e.substring(s.raw.length), o.push(s);
                    continue
                }
                let d = e;
                if ((a = this.options.extensions) != null && a.startBlock) {
                    let l = 1 / 0,
                        c = e.slice(1),
                        p;
                    this.options.extensions.startBlock.forEach(u => {
                        p = u.call({
                            lexer: this
                        }, c), typeof p == "number" && p >= 0 && (l = Math.min(l, p))
                    }), l < 1 / 0 && l >= 0 && (d = e.substring(0, l + 1))
                }
                if (this.state.top && (s = this.tokenizer.paragraph(d))) {
                    let l = o.at(-1);
                    n && (l == null ? void 0 : l.type) === "paragraph" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : o.push(s), n = d.length !== e.length, e = e.substring(s.raw.length);
                    continue
                }
                if (s = this.tokenizer.text(e)) {
                    e = e.substring(s.raw.length);
                    let l = o.at(-1);
                    (l == null ? void 0 : l.type) === "text" ? (l.raw += (l.raw.endsWith(`
`) ? "" : `
`) + s.raw, l.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = l.text) : o.push(s);
                    continue
                }
                if (e) {
                    let l = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(l);
                        break
                    } else throw new Error(l)
                }
            }
            return this.state.top = !0, o
        }
        inline(e, o = []) {
            return this.inlineQueue.push({
                src: e,
                tokens: o
            }), o
        }
        inlineTokens(e, o = []) {
            var s, d, l;
            let n = e,
                r = null;
            if (this.tokens.links) {
                let c = Object.keys(this.tokens.links);
                if (c.length > 0)
                    for (;
                        (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
            }
            for (;
                (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (;
                (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            let i = !1,
                a = "";
            for (; e;) {
                i || (a = ""), i = !1;
                let c;
                if ((d = (s = this.options.extensions) == null ? void 0 : s.inline) != null && d.some(u => (c = u.call({
                        lexer: this
                    }, e, o)) ? (e = e.substring(c.raw.length), o.push(c), !0) : !1)) continue;
                if (c = this.tokenizer.escape(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.tag(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.link(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.reflink(e, this.tokens.links)) {
                    e = e.substring(c.raw.length);
                    let u = o.at(-1);
                    c.type === "text" && (u == null ? void 0 : u.type) === "text" ? (u.raw += c.raw, u.text += c.text) : o.push(c);
                    continue
                }
                if (c = this.tokenizer.emStrong(e, n, a)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.codespan(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.br(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.del(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (c = this.tokenizer.autolink(e)) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                if (!this.state.inLink && (c = this.tokenizer.url(e))) {
                    e = e.substring(c.raw.length), o.push(c);
                    continue
                }
                let p = e;
                if ((l = this.options.extensions) != null && l.startInline) {
                    let u = 1 / 0,
                        f = e.slice(1),
                        m;
                    this.options.extensions.startInline.forEach(g => {
                        m = g.call({
                            lexer: this
                        }, f), typeof m == "number" && m >= 0 && (u = Math.min(u, m))
                    }), u < 1 / 0 && u >= 0 && (p = e.substring(0, u + 1))
                }
                if (c = this.tokenizer.inlineText(p)) {
                    e = e.substring(c.raw.length), c.raw.slice(-1) !== "_" && (a = c.raw.slice(-1)), i = !0;
                    let u = o.at(-1);
                    (u == null ? void 0 : u.type) === "text" ? (u.raw += c.raw, u.text += c.text) : o.push(c);
                    continue
                }
                if (e) {
                    let u = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(u);
                        break
                    } else throw new Error(u)
                }
            }
            return o
        }
    },
    nr = class {
        constructor(t) {
            re(this, "options");
            re(this, "parser");
            this.options = t || Zt
        }
        space(t) {
            return ""
        }
        code({
            text: t,
            lang: e,
            escaped: o
        }) {
            var i;
            let n = (i = (e || "").match(Te.notSpaceStart)) == null ? void 0 : i[0],
                r = t.replace(Te.endingNewline, "") + `
`;
            return n ? '<pre><code class="language-' + st(n) + '">' + (o ? r : st(r, !0)) + `</code></pre>
` : "<pre><code>" + (o ? r : st(r, !0)) + `</code></pre>
`
        }
        blockquote({
            tokens: t
        }) {
            return `<blockquote>
${this.parser.parse(t)}</blockquote>
`
        }
        html({
            text: t
        }) {
            return t
        }
        def(t) {
            return ""
        }
        heading({
            tokens: t,
            depth: e
        }) {
            return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`
        }
        hr(t) {
            return `<hr>
`
        }
        list(t) {
            let e = t.ordered,
                o = t.start,
                n = "";
            for (let a = 0; a < t.items.length; a++) {
                let s = t.items[a];
                n += this.listitem(s)
            }
            let r = e ? "ol" : "ul",
                i = e && o !== 1 ? ' start="' + o + '"' : "";
            return "<" + r + i + `>
` + n + "</" + r + `>
`
        }
        listitem(t) {
            var o;
            let e = "";
            if (t.task) {
                let n = this.checkbox({
                    checked: !!t.checked
                });
                t.loose ? ((o = t.tokens[0]) == null ? void 0 : o.type) === "paragraph" ? (t.tokens[0].text = n + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = n + " " + st(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({
                    type: "text",
                    raw: n + " ",
                    text: n + " ",
                    escaped: !0
                }) : e += n + " "
            }
            return e += this.parser.parse(t.tokens, !!t.loose), `<li>${e}</li>
`
        }
        checkbox({
            checked: t
        }) {
            return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
        }
        paragraph({
            tokens: t
        }) {
            return `<p>${this.parser.parseInline(t)}</p>
`
        }
        table(t) {
            let e = "",
                o = "";
            for (let r = 0; r < t.header.length; r++) o += this.tablecell(t.header[r]);
            e += this.tablerow({
                text: o
            });
            let n = "";
            for (let r = 0; r < t.rows.length; r++) {
                let i = t.rows[r];
                o = "";
                for (let a = 0; a < i.length; a++) o += this.tablecell(i[a]);
                n += this.tablerow({
                    text: o
                })
            }
            return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`
        }
        tablerow({
            text: t
        }) {
            return `<tr>
${t}</tr>
`
        }
        tablecell(t) {
            let e = this.parser.parseInline(t.tokens),
                o = t.header ? "th" : "td";
            return (t.align ? `<${o} align="${t.align}">` : `<${o}>`) + e + `</${o}>
`
        }
        strong({
            tokens: t
        }) {
            return `<strong>${this.parser.parseInline(t)}</strong>`
        }
        em({
            tokens: t
        }) {
            return `<em>${this.parser.parseInline(t)}</em>`
        }
        codespan({
            text: t
        }) {
            return `<code>${st(t,!0)}</code>`
        }
        br(t) {
            return "<br>"
        }
        del({
            tokens: t
        }) {
            return `<del>${this.parser.parseInline(t)}</del>`
        }
        link({
            href: t,
            title: e,
            tokens: o
        }) {
            let n = this.parser.parseInline(o),
                r = Xs(t);
            if (r === null) return n;
            t = r;
            let i = '<a href="' + t + '"';
            return e && (i += ' title="' + st(e) + '"'), i += ">" + n + "</a>", i
        }
        image({
            href: t,
            title: e,
            text: o,
            tokens: n
        }) {
            n && (o = this.parser.parseInline(n, this.parser.textRenderer));
            let r = Xs(t);
            if (r === null) return st(o);
            t = r;
            let i = `<img src="${t}" alt="${o}"`;
            return e && (i += ` title="${st(e)}"`), i += ">", i
        }
        text(t) {
            return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : st(t.text)
        }
    },
    gi = class {
        strong({
            text: t
        }) {
            return t
        }
        em({
            text: t
        }) {
            return t
        }
        codespan({
            text: t
        }) {
            return t
        }
        del({
            text: t
        }) {
            return t
        }
        html({
            text: t
        }) {
            return t
        }
        text({
            text: t
        }) {
            return t
        }
        link({
            text: t
        }) {
            return "" + t
        }
        image({
            text: t
        }) {
            return "" + t
        }
        br() {
            return ""
        }
    },
    wt = class ai {
        constructor(e) {
            re(this, "options");
            re(this, "renderer");
            re(this, "textRenderer");
            this.options = e || Zt, this.options.renderer = this.options.renderer || new nr, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new gi
        }
        static parse(e, o) {
            return new ai(o).parse(e)
        }
        static parseInline(e, o) {
            return new ai(o).parseInline(e)
        }
        parse(e, o = !0) {
            var r, i;
            let n = "";
            for (let a = 0; a < e.length; a++) {
                let s = e[a];
                if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[s.type]) {
                    let l = s,
                        c = this.options.extensions.renderers[l.type].call({
                            parser: this
                        }, l);
                    if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(l.type)) {
                        n += c || "";
                        continue
                    }
                }
                let d = s;
                switch (d.type) {
                    case "space":
                        {
                            n += this.renderer.space(d);
                            continue
                        }
                    case "hr":
                        {
                            n += this.renderer.hr(d);
                            continue
                        }
                    case "heading":
                        {
                            n += this.renderer.heading(d);
                            continue
                        }
                    case "code":
                        {
                            n += this.renderer.code(d);
                            continue
                        }
                    case "table":
                        {
                            n += this.renderer.table(d);
                            continue
                        }
                    case "blockquote":
                        {
                            n += this.renderer.blockquote(d);
                            continue
                        }
                    case "list":
                        {
                            n += this.renderer.list(d);
                            continue
                        }
                    case "html":
                        {
                            n += this.renderer.html(d);
                            continue
                        }
                    case "def":
                        {
                            n += this.renderer.def(d);
                            continue
                        }
                    case "paragraph":
                        {
                            n += this.renderer.paragraph(d);
                            continue
                        }
                    case "text":
                        {
                            let l = d,
                                c = this.renderer.text(l);
                            for (; a + 1 < e.length && e[a + 1].type === "text";) l = e[++a],
                            c += `
` + this.renderer.text(l);o ? n += this.renderer.paragraph({
                                type: "paragraph",
                                raw: c,
                                text: c,
                                tokens: [{
                                    type: "text",
                                    raw: c,
                                    text: c,
                                    escaped: !0
                                }]
                            }) : n += c;
                            continue
                        }
                    default:
                        {
                            let l = 'Token with "' + d.type + '" type was not found.';
                            if (this.options.silent) return console.error(l), "";
                            throw new Error(l)
                        }
                }
            }
            return n
        }
        parseInline(e, o = this.renderer) {
            var r, i;
            let n = "";
            for (let a = 0; a < e.length; a++) {
                let s = e[a];
                if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[s.type]) {
                    let l = this.options.extensions.renderers[s.type].call({
                        parser: this
                    }, s);
                    if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
                        n += l || "";
                        continue
                    }
                }
                let d = s;
                switch (d.type) {
                    case "escape":
                        {
                            n += o.text(d);
                            break
                        }
                    case "html":
                        {
                            n += o.html(d);
                            break
                        }
                    case "link":
                        {
                            n += o.link(d);
                            break
                        }
                    case "image":
                        {
                            n += o.image(d);
                            break
                        }
                    case "strong":
                        {
                            n += o.strong(d);
                            break
                        }
                    case "em":
                        {
                            n += o.em(d);
                            break
                        }
                    case "codespan":
                        {
                            n += o.codespan(d);
                            break
                        }
                    case "br":
                        {
                            n += o.br(d);
                            break
                        }
                    case "del":
                        {
                            n += o.del(d);
                            break
                        }
                    case "text":
                        {
                            n += o.text(d);
                            break
                        }
                    default:
                        {
                            let l = 'Token with "' + d.type + '" type was not found.';
                            if (this.options.silent) return console.error(l), "";
                            throw new Error(l)
                        }
                }
            }
            return n
        }
    },
    ni, er = (ni = class {
        constructor(t) {
            re(this, "options");
            re(this, "block");
            this.options = t || Zt
        }
        preprocess(t) {
            return t
        }
        postprocess(t) {
            return t
        }
        processAllTokens(t) {
            return t
        }
        provideLexer() {
            return this.block ? St.lex : St.lexInline
        }
        provideParser() {
            return this.block ? wt.parse : wt.parseInline
        }
    }, re(ni, "passThroughHooks", new Set(["preprocess", "postprocess", "processAllTokens"])), ni),
    Nm = class {
        constructor(...t) {
            re(this, "defaults", si());
            re(this, "options", this.setOptions);
            re(this, "parse", this.parseMarkdown(!0));
            re(this, "parseInline", this.parseMarkdown(!1));
            re(this, "Parser", wt);
            re(this, "Renderer", nr);
            re(this, "TextRenderer", gi);
            re(this, "Lexer", St);
            re(this, "Tokenizer", or);
            re(this, "Hooks", er);
            this.use(...t)
        }
        walkTokens(t, e) {
            var n, r;
            let o = [];
            for (let i of t) switch (o = o.concat(e.call(this, i)), i.type) {
                case "table":
                    {
                        let a = i;
                        for (let s of a.header) o = o.concat(this.walkTokens(s.tokens, e));
                        for (let s of a.rows)
                            for (let d of s) o = o.concat(this.walkTokens(d.tokens, e));
                        break
                    }
                case "list":
                    {
                        let a = i;o = o.concat(this.walkTokens(a.items, e));
                        break
                    }
                default:
                    {
                        let a = i;
                        (r = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && r[a.type] ? this.defaults.extensions.childTokens[a.type].forEach(s => {
                            let d = a[s].flat(1 / 0);
                            o = o.concat(this.walkTokens(d, e))
                        }) : a.tokens && (o = o.concat(this.walkTokens(a.tokens, e)))
                    }
            }
            return o
        }
        use(...t) {
            let e = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            return t.forEach(o => {
                let n = { ...o
                };
                if (n.async = this.defaults.async || n.async || !1, o.extensions && (o.extensions.forEach(r => {
                        if (!r.name) throw new Error("extension name required");
                        if ("renderer" in r) {
                            let i = e.renderers[r.name];
                            i ? e.renderers[r.name] = function(...a) {
                                let s = r.renderer.apply(this, a);
                                return s === !1 && (s = i.apply(this, a)), s
                            } : e.renderers[r.name] = r.renderer
                        }
                        if ("tokenizer" in r) {
                            if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                            let i = e[r.level];
                            i ? i.unshift(r.tokenizer) : e[r.level] = [r.tokenizer], r.start && (r.level === "block" ? e.startBlock ? e.startBlock.push(r.start) : e.startBlock = [r.start] : r.level === "inline" && (e.startInline ? e.startInline.push(r.start) : e.startInline = [r.start]))
                        }
                        "childTokens" in r && r.childTokens && (e.childTokens[r.name] = r.childTokens)
                    }), n.extensions = e), o.renderer) {
                    let r = this.defaults.renderer || new nr(this.defaults);
                    for (let i in o.renderer) {
                        if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
                        if (["options", "parser"].includes(i)) continue;
                        let a = i,
                            s = o.renderer[a],
                            d = r[a];
                        r[a] = (...l) => {
                            let c = s.apply(r, l);
                            return c === !1 && (c = d.apply(r, l)), c || ""
                        }
                    }
                    n.renderer = r
                }
                if (o.tokenizer) {
                    let r = this.defaults.tokenizer || new or(this.defaults);
                    for (let i in o.tokenizer) {
                        if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
                        if (["options", "rules", "lexer"].includes(i)) continue;
                        let a = i,
                            s = o.tokenizer[a],
                            d = r[a];
                        r[a] = (...l) => {
                            let c = s.apply(r, l);
                            return c === !1 && (c = d.apply(r, l)), c
                        }
                    }
                    n.tokenizer = r
                }
                if (o.hooks) {
                    let r = this.defaults.hooks || new er;
                    for (let i in o.hooks) {
                        if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
                        if (["options", "block"].includes(i)) continue;
                        let a = i,
                            s = o.hooks[a],
                            d = r[a];
                        er.passThroughHooks.has(i) ? r[a] = l => {
                            if (this.defaults.async) return Promise.resolve(s.call(r, l)).then(p => d.call(r, p));
                            let c = s.call(r, l);
                            return d.call(r, c)
                        } : r[a] = (...l) => {
                            let c = s.apply(r, l);
                            return c === !1 && (c = d.apply(r, l)), c
                        }
                    }
                    n.hooks = r
                }
                if (o.walkTokens) {
                    let r = this.defaults.walkTokens,
                        i = o.walkTokens;
                    n.walkTokens = function(a) {
                        let s = [];
                        return s.push(i.call(this, a)), r && (s = s.concat(r.call(this, a))), s
                    }
                }
                this.defaults = { ...this.defaults,
                    ...n
                }
            }), this
        }
        setOptions(t) {
            return this.defaults = { ...this.defaults,
                ...t
            }, this
        }
        lexer(t, e) {
            return St.lex(t, e != null ? e : this.defaults)
        }
        parser(t, e) {
            return wt.parse(t, e != null ? e : this.defaults)
        }
        parseMarkdown(t) {
            return (e, o) => {
                let n = { ...o
                    },
                    r = { ...this.defaults,
                        ...n
                    },
                    i = this.onError(!!r.silent, !!r.async);
                if (this.defaults.async === !0 && n.async === !1) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
                if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
                if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
                r.hooks && (r.hooks.options = r, r.hooks.block = t);
                let a = r.hooks ? r.hooks.provideLexer() : t ? St.lex : St.lexInline,
                    s = r.hooks ? r.hooks.provideParser() : t ? wt.parse : wt.parseInline;
                if (r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(e) : e).then(d => a(d, r)).then(d => r.hooks ? r.hooks.processAllTokens(d) : d).then(d => r.walkTokens ? Promise.all(this.walkTokens(d, r.walkTokens)).then(() => d) : d).then(d => s(d, r)).then(d => r.hooks ? r.hooks.postprocess(d) : d).catch(i);
                try {
                    r.hooks && (e = r.hooks.preprocess(e));
                    let d = a(e, r);
                    r.hooks && (d = r.hooks.processAllTokens(d)), r.walkTokens && this.walkTokens(d, r.walkTokens);
                    let l = s(d, r);
                    return r.hooks && (l = r.hooks.postprocess(l)), l
                } catch (d) {
                    return i(d)
                }
            }
        }
        onError(t, e) {
            return o => {
                if (o.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
                    let n = "<p>An error occurred:</p><pre>" + st(o.message + "", !0) + "</pre>";
                    return e ? Promise.resolve(n) : n
                }
                if (e) return Promise.reject(o);
                throw o
            }
        }
    },
    Ut = new Nm;

function J(t, e) {
    return Ut.parse(t, e)
}
J.options = J.setOptions = function(t) {
    return Ut.setOptions(t), J.defaults = Ut.defaults, el(J.defaults), J
};
J.getDefaults = si;
J.defaults = Zt;
J.use = function(...t) {
    return Ut.use(...t), J.defaults = Ut.defaults, el(J.defaults), J
};
J.walkTokens = function(t, e) {
    return Ut.walkTokens(t, e)
};
J.parseInline = Ut.parseInline;
J.Parser = wt;
J.parser = wt.parse;
J.Renderer = nr;
J.TextRenderer = gi;
J.Lexer = St;
J.lexer = St.lex;
J.Tokenizer = or;
J.Hooks = er;
J.parse = J;
var lv = J.options,
    cv = J.setOptions,
    dv = J.use,
    pv = J.walkTokens,
    uv = J.parseInline;
var mv = wt.parse,
    fv = St.lex;
var Am = (t, e = !1) => e ? J.parseInline(t, {
        async: !1
    }) : J.parse(t, {
        async: !1
    }),
    qt = t => t.replace(/<br\s*\/?>/gi, "").replace(/<(?!https?:\/\/|mailto:)(\/?[A-Za-z][^<>]*)>/g, (e, o) => `&lt;${o}&gt;`),
    Ze = (t, e = !1) => {
        let o = Am(t, e).replace(/(<a href="(https?:)?\/\/.*?")>/g, '$1 target="_blank" rel="nofollow">');
        return Qa(o)
    };
var Rm = w.div `
  display: flex;
  flex-direction: column;
  padding: var(--layout-padding);
  align-items: flex-start;
  gap: 4px;

  background: var(--background-secondary);

  &:hover {
    background: var(--background-secondary-hover);
  }

  &:focus {
    box-shadow: 0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color);
    background: var(--form-control-background-hover);
  }

  &:focus-visible {
    outline: none;
  }
`,
    Lm = w.div `
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  justify-content: space-between;
`,
    Om = w.div `
  color: var(--content-primary);

  font-family: var(--font-font-family);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-tight);
`,
    Bm = w.div `
  &,
  p {
    color: var(--content-secondary);
    /* label/base/medium */
    font-family: var(--font-font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    line-height: var(--font-line-height-normal);
  }

  p {
    margin-bottom: 8px;
  }

  p:first-of-type {
    margin-block-start: 0px;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,
    _m = w(De)
`
  color: var(--content-secondary);
`, Fm = ({
    isExpanded: t,
    title: e,
    subtitle: o,
    onClose: n,
    isDismissible: r,
    theme: i,
    onArrowclick: a
}) => He.default.createElement(Rm, {
    "data-draggable": "drag-zone",
    "data-testid": "drag-zone",
    "aria-label": "Drag to move checklist",
    className: "amplitude-engagement-checklist-header"
}, He.default.createElement(Lm, null, He.default.createElement("button", {
    type: "button",
    "data-testid": "checklist-collapse-button",
    "aria-expanded": t,
    "aria-label": t ? "Collapse checklist" : "Expand checklist",
    onClick: a,
    style: {
        all: "unset",
        cursor: "pointer",
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        width: "100%",
        textAlign: "start",
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }
}, He.default.createElement("div", {
    style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
}, He.default.createElement(Om, {
    tabIndex: 0,
    "aria-level": 2,
    "aria-label": e,
    role: "heading",
    className: "amplitude-engagement-checklist-title"
}, e), He.default.createElement(_m, null, t ? He.default.createElement(Xo, {
    "aria-label": "Expand icon"
}) : He.default.createElement(es, {
    "aria-label": "Collapse icon"
}))), !!o && He.default.createElement(Bm, {
    tabIndex: 0,
    dangerouslySetInnerHTML: {
        __html: Ze(o)
    },
    className: "amplitude-engagement-checklist-subtitle"
})), r && He.default.createElement(vo, {
    "data-testid": "checklist-dismiss-button",
    theme: i,
    "aria-label": "Close checklist",
    onClick: n,
    className: "amplitude-engagement-checklist-close-button"
}, He.default.createElement(yo, null)))), pl = Fm;
var sr = A(O());
var ar = w.div `
  align-self: stretch;
  color: var(--content-secondary);

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
  p,
  span,
  strong,
  i,
  u,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // unset user stylesheet
    margin-block-start: unset;
    margin-block-end: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;

    color: inherit;
    font-family: inherit;

    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 8px;
  }
  p:last-child,
  span:last-child,
  li:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  h1 {
    font-size: var(--font-size-extra-large);
    font-weight: var(--font-weight-bold);
  }
  h2 {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-semibold);
  }
  h3 {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
  }

  ol,
  ul,
  li {
    all: revert;
  }

  ol,
  ul {
    padding-inline-start: 32px;
    margin-bottom: 8px;
  }

  /* Fix bulleted lists in centered content */
  &[style*='text-align: center'] ul,
  &[style*='text-align: center'] ol {
    text-align: start;
    display: inline-block;
  }

  /* Fix bulleted lists in end-aligned content */
  &[style*='text-align: end'] ul,
  &[style*='text-align: end'] ol {
    display: inline-block;
  }

  &[style*='text-align: end'] ul li,
  &[style*='text-align: end'] ol li {
    text-align: start;
  }

  img {
    max-width: 100%;
  }

  a {
    color: var(--content-link);
    text-decoration: none;

    &:hover {
      color: var(--content-link-hover);
      text-decoration: underline;
    }
  }
`;
var Dm = w.div `
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  padding-block-start: 4px;
  padding-block-end: var(--layout-padding);
  padding-inline: var(--layout-padding);
  margin-inline-start: calc(20px + var(--layout-gap));

  p:first-of-type {
    margin-block-start: 0px;
  }
`,
    Hm = ar,
    zm = w.div `
  padding-top: 8px;
  display: flex;
  align-items: flex-start;
  gap: var(--layout-gap);
  width: 100%;
`,
    $m = ({
        isExpanded: t,
        content: e,
        children: o
    }) => sr.default.createElement(Dm, {
        style: {
            visibility: t ? "visible" : "hidden"
        },
        className: "amplitude-engagement-checklist-item-body"
    }, !!e && sr.default.createElement(Hm, {
        tabIndex: 0,
        dangerouslySetInnerHTML: {
            __html: Ze(e)
        },
        className: "amplitude-engagement-checklist-item-content"
    }), sr.default.createElement(zm, {
        className: "amplitude-engagement-checklist-item-buttons"
    }, o)),
    ul = $m;
var Le = A(O());
var Wm = w.div `
  display: flex;
  width: var(--checklist-width);
  padding: var(--layout-padding);
  align-items: flex-start;
  gap: var(--layout-gap);
`,
    Vm = w.div `
  display: flex;
  width: var(--checklist-width);
  padding-inline: var(--layout-padding);
  padding-block-start: var(--layout-padding);
  padding-block-end: 0px;
  align-items: flex-start;
  gap: var(--layout-gap);
`,
    ml = w.div `
  color: var(--content-primary);

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
`,
    fl = w(De)
`
  padding: 8px;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid var(--content-secondary);
  opacity: 0.5;
`, gl = w(De)
`
  gap: 8px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--base-accent);
`, hl = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--layout-padding);
  height: var(--layout-padding);
  color: var(--base-white);
`, jm = ({
    isExpanded: t,
    isCompleted: e,
    content: o
}) => t ? Le.default.createElement(Vm, {
    className: "amplitude-engagement-checklist-item-header__expanded"
}, e ? Le.default.createElement(gl, {
    "data-testid": "checklist-step-complete"
}, Le.default.createElement(hl, null, Le.default.createElement(Yo, null))) : Le.default.createElement(fl, null), !!o && Le.default.createElement(ml, {
    tabIndex: 0
}, o)) : Le.default.createElement(Wm, {
    className: "amplitude-engagement-checklist-item-header__collapsed"
}, e ? Le.default.createElement(gl, {
    "data-testid": "checklist-step-complete"
}, Le.default.createElement(hl, null, Le.default.createElement(Yo, null))) : Le.default.createElement(fl, null), !!o && Le.default.createElement(ml, {
    tabIndex: 0,
    className: "amplitude-engagement-checklist-item-content"
}, o)), yl = jm;
var Gm = w.div `
  display: flex;
  padding: var(--layout-padding);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--layout-gap);
  flex-shrink: 0;
`,
    hi = {
        flexGrow: 1,
        height: "var(--form-control-padding-x)",
        borderRadius: "var(--layout-radius-circle)",
        background: "var(--background-secondary)"
    },
    vl = w.div `
  height: var(--form-control-padding-x);
  border-radius: var(--layout-radius-circle);
  background: var(--base-accent);
`,
    Um = w.div `
  color: var(--content-secondary);

  /* label/base/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-normal);
`,
    yi = "checklistProgressBar",
    lr = ({
        theme: t,
        numCompleted: e,
        numTotal: o
    }) => {
        let {
            overrides: n
        } = de(yi, t), r = .04 * 100, i = Math.max(r, Math.round(e * 100 / o));
        return T(Gm, {
            tabIndex: 0,
            className: "amplitude-engagement-checklist-progress"
        }, T(Um, null, `${e}/${o}`), T("div", {
            css: [n, W(hi)]
        }, T(vl, {
            style: {
                width: `${i}%`
            }
        })))
    };
lr.styles = hi;
lr.slug = yi;
lr.renderMock = (t, e) => T(Zm, {
    theme: t,
    mode: e
});
var Zm = ({
        theme: t,
        mode: e
    }) => {
        let {
            overrides: o
        } = de(yi, {
            theme: t,
            mode: e
        });
        return T("div", {
            css: [o, W(hi)],
            style: {
                width: "350px"
            }
        }, T(vl, {
            style: {
                width: "25%"
            }
        }))
    },
    bl = lr;
var xl = A(O());
var qm = w.div `
  display: flex;
  width: 100%;
  padding: var(--layout-padding);
  border-radius: 0px 0px var(--layout-radius-card) var(--layout-radius-card);
  justify-content: space-between;
  align-items: center;
  background: var(--background-secondary);
`,
    Km = ({
        children: t,
        ...e
    }) => xl.default.createElement(qm, { ...e
    }, t),
    cr = Km;
var Sl = A(O());
var Ym = t => {
        let e = D();
        return Sl.default.useCallback(t.bind(null, e), [e])
    },
    wl = Ym;
var pe = A(O());
var Cl = t => {
        let {
            items: e,
            divider: o,
            defaultOpenIdx: n,
            containerStyles: r
        } = t;
        pe.default.useEffect(() => {
            d(a(n))
        }, [n]);
        let i = c => c >= 0 && c < e.length,
            a = c => {
                let p = new Array(e.length).fill(!1);
                return typeof c == "number" && i(c) && (p[c] = !0), p
            },
            [s, d] = pe.default.useState(() => a(n)),
            l = (c, p) => {
                c && d(a(p))
            };
        return pe.default.createElement("div", {
            style: r
        }, e.map(({
            header: c,
            children: p,
            key: u
        }, f) => pe.default.createElement(pe.Fragment, {
            key: u
        }, pe.default.createElement(vi, {
            header: c,
            onChange: m => l(m, f),
            isControlled: !0,
            open: s[f],
            index: f
        }, p), o)))
    },
    vi = t => {
        let [e, o] = pe.default.useState(t.open || t.defaultOpen), [n, r] = pe.default.useState(0), [i, a] = pe.default.useState(), s = pe.default.useCallback(c => {
            a(c)
        }, []);
        (0, pe.useEffect)(() => {
            t.open !== void 0 && o(t.open)
        }, [t.open]), (0, pe.useEffect)(() => {
            if (!e) {
                r(0);
                return
            }
            if (!i) return;
            let c = new ResizeObserver(p => {
                p[0] && r(p[0].contentRect.height)
            });
            return c.observe(i), () => {
                c.disconnect()
            }
        }, [e, i]);
        let d = !!t.isControlled && t.open !== void 0,
            l = e ? `Collapse Checklist${t.isRoot?"":" Step"}` : `Expand Checklist${t.isRoot?"":" Step"}`;
        return pe.default.createElement("div", {
            style: {
                width: "100%",
                display: "flex",
                flexDirection: "column"
            }
        }, t.isRoot ? t.header(e) : pe.default.createElement("button", {
            type: "button",
            "data-testid": `checklist-collapse-step-button-${t.index}`,
            "aria-expanded": e,
            "aria-label": l,
            onClick: () => {
                !d && o(!e), t.onChange && t.onChange(!e)
            },
            style: {
                all: "unset",
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                width: "100%",
                textAlign: "left"
            }
        }, t.header(e)), pe.default.createElement("div", {
            style: {
                height: e ? n : 0,
                overflow: "hidden",
                transition: "height 100ms ease-in-out"
            }
        }, pe.default.createElement("div", {
            ref: s
        }, t.children(e))), e && t.footer)
    };
var bi = A(O()),
    kl = t => bi.createElement("svg", {
        width: 9,
        height: 7,
        viewBox: "0 0 10 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t
    }, bi.createElement("path", {
        d: "M9 1L3.5 6.5L1 4",
        stroke: "currentColor",
        strokeWidth: 1.25,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }));
var Xm = () => {
        var a, s, d, l, c;
        let t = D(),
            e = wl(_a),
            [o, n] = U.default.useState(null);
        Zn(o, !0, !1);
        let r = (0, U.useRef)(null);
        t.activeChecklist && (r.current = t.activeChecklist.nudge);
        let i = r.current;
        return U.default.createElement(At, {
            nudge: i || void 0
        }, U.default.createElement(Lt, {
            widget: "checklist",
            isMounted: !!t.activeChecklist
        }, i && U.default.createElement(Qm, {
            key: i.variantId,
            parentCallbackRef: n,
            checklist: i,
            isStepCompleted: e,
            renderMode: (s = (a = t.activeChecklist) == null ? void 0 : a.renderMode) != null ? s : 1,
            defaultOpenIdx: (d = t.activeChecklist) == null ? void 0 : d.defaultOpenIdx,
            positionOverride: (c = (l = t.activeChecklist) == null ? void 0 : l.overrides) == null ? void 0 : c.position
        })))
    },
    Qm = t => {
        var z, G, te;
        let {
            checklist: e,
            parentCallbackRef: o,
            style: n,
            isStepCompleted: r,
            renderMode: i,
            defaultOpenIdx: a,
            positionOverride: s
        } = t, d = D(), l = Y(), c = U.default.useRef(null), {
            setZoomDisabled: p
        } = cs(), {
            animStyles: u
        } = ie(), f = be(H => $a(H, e), [e.variantId]), m = be(it), g = be(La), y = () => {
            i !== 1 && m(e, i)
        }, h = be((H, q) => Wa(H, e, q), [e.variantId]), S = Fa(d, e), b = U.default.useRef(null), {
            isMobileDevice: M,
            isStudioMobilePreview: x,
            studioMobilePreviewWrapper: I,
            mobileStyles: k
        } = X(), E = be(za);
        (0, U.useEffect)(() => {
            p(!0)
        }, [S]), U.default.useEffect(() => E(e, e.steps), [e.steps, d.endUserStore.data.nudgeInteractions, d.location.pathname]);
        let P = U.default.useMemo(() => e.steps.findIndex(H => !r(e, H)), [e, d.endUserStore.data.nudgeInteractions, r]),
            C = e.steps.length,
            N = e.steps.filter(H => r(e, H)).length,
            _ = H => {
                let q = H.content.find(Nn => Nn.type === "button"),
                    he = go(d, H, {
                        buttonMeta: q == null ? void 0 : q.meta
                    }),
                    Wt = Yr(he);
                Wt && (c.current = Wt.value)
            },
            B = H => {
                h(H)
            },
            $ = () => {
                var q;
                let H = e.steps.some(he => !r(e, he));
                return e.isSnoozable && H ? U.default.createElement("div", null, U.default.createElement(Gn, {
                    theme: l,
                    onClick: () => g(e, e.snoozeDuration)
                }, (q = e.snoozeLabel) != null ? q : "Snooze")) : H ? null : U.default.createElement("div", null, U.default.createElement(Qo, {
                    onClick: f,
                    theme: l,
                    suffixIcon: U.default.createElement(kl, null)
                }, e.doneLabel || "Done"))
            },
            V = U.default.createElement(Zs, {
                role: "region",
                dir: (z = e.dir) != null ? z : "ltr",
                "aria-label": e.displayTitle,
                tabIndex: 0,
                onKeyDown: H => {
                    e.isDismissible && H.key === "Escape" && y()
                },
                ref: H => {
                    o && o(H), b.current = H
                },
                className: "amplitude-engagement-checklist engagement-checklist",
                position: s != null ? s : e.position,
                style: { ...M && k.checklists.container,
                    ...n,
                    ...u,
                    ...Ce.getZIndexStyles(Zo(e, 0), "checklist")
                },
                "data-testid": `engagement-checklist-${e.title}`
            }, U.default.createElement(vi, {
                open: S,
                isControlled: !0,
                footer: U.default.createElement(cr, {
                    style: {
                        justifyContent: ((G = d.organization) == null ? void 0 : G.branding) === "branded" ? "space-between" : "end"
                    }
                }, ((te = d.organization) == null ? void 0 : te.branding) === "branded" && U.default.createElement(Vn, {
                    onClick: () => jn()
                }), $()),
                header: H => U.default.createElement(U.default.Fragment, null, U.default.createElement(pl, {
                    isExpanded: !!H,
                    onArrowclick: () => {
                        B(!S)
                    },
                    title: e.displayTitle || "",
                    subtitle: rt(e.platform) ? qt(e.displayDescription || "") : e.displayDescription || "",
                    isDismissible: e.isDismissible,
                    onClose: q => {
                        q.preventDefault(), q.stopPropagation(), y()
                    },
                    theme: l
                }), U.default.createElement(bl, {
                    numCompleted: N,
                    numTotal: C,
                    theme: l
                })),
                isRoot: !0
            }, () => U.default.createElement(U.default.Fragment, null, U.default.createElement(Qn, null), U.default.createElement(Cl, {
                containerStyles: {
                    maxHeight: "var(--checklist-max-height)",
                    overflow: "hidden auto"
                },
                items: e.steps.map((H, q) => ({
                    header: he => U.default.createElement(Jm, {
                        isExpanded: !!he,
                        item: H,
                        isCompleted: r(e, H),
                        key: `checklist-item-header-${H.id}`
                    }),
                    children: he => U.default.createElement(ef, {
                        platform: e.platform,
                        step: H,
                        stepIndex: q,
                        key: `checklist-item-body-${H.id}`,
                        toggleChecklist: B,
                        isExpanded: !!he,
                        onItemClick: _
                    }),
                    key: H.id,
                    divider: U.default.createElement(Qn, null)
                })),
                defaultOpenIdx: a != null ? a : i === 0 ? P : void 0,
                divider: U.default.createElement(Qn, null)
            }))));
        return x && I ? Tl.default.createPortal(V, I) : V
    },
    Jm = t => {
        let {
            item: e,
            isCompleted: o,
            isExpanded: n
        } = t;
        return U.default.createElement(yl, {
            content: e.title,
            isExpanded: n,
            isCompleted: o
        })
    },
    ef = t => {
        var x, I, k;
        let {
            step: e,
            stepIndex: o,
            isExpanded: n,
            onItemClick: r,
            platform: i
        } = t, a = D(), s = U.default.useRef(e), d = (x = e.content.filter(E => E.type === "markdown")[0]) == null ? void 0 : x.meta.value, l = i !== "web" ? qt(d != null ? d : "") : d, c = e.content.find(E => {
            var P, C;
            return E.type === "button" && (((P = E.meta) == null ? void 0 : P.buttonType) === "primary" || !((C = E.meta) != null && C.buttonType))
        }), p = go(a, e, {
            buttonMeta: c == null ? void 0 : c.meta
        }), u = (I = c == null ? void 0 : c.meta) == null ? void 0 : I.label, f = e.content.find(E => {
            var P;
            return E.type === "button" && ((P = E.meta) == null ? void 0 : P.buttonType) === "secondary"
        }), m = go(a, e, {
            buttonMeta: f == null ? void 0 : f.meta
        }), g = (k = f == null ? void 0 : f.meta) == null ? void 0 : k.label;
        U.default.useEffect(() => {
            s.current = t.step
        }, [t.step]);
        let y = Y(),
            h = be((E, P, C) => {
                P && !Pa(P) && P.type === "dismiss" ? Ha(E, e, o, void 0, {
                    skipped: !0
                }) : Da(E, s.current, P, o, !!C && qa(C))
            }),
            S = (E, P) => {
                h(P, E), r(s.current), Yr(P) && t.toggleChecklist(!1)
            },
            b = E => S(E, p),
            M = E => S(E, m);
        return U.default.createElement(ul, {
            content: l != null ? l : "",
            isExpanded: n
        }, u && U.default.createElement(Qo, {
            onClick: b,
            theme: y,
            style: {
                flex: "unset",
                overflow: "hidden",
                width: "unset"
            },
            className: "amplitude-engagement-checklist-item-button__primary"
        }, u), g && U.default.createElement(Un, {
            theme: y,
            onClick: M,
            style: {
                flex: "unset",
                width: "unset"
            },
            className: "amplitude-engagement-checklist-item-button__secondary"
        }, g))
    },
    Lb = Xm;
var ce = A(O());
var Zi = A(Uo());
var tf = ["engagement-static.amplitude.com", "engagement-static.eu.amplitude.com", "engagement-static.amplitudeengagement.com", "engagement-static.eu.amplitudeengagement.com"],
    of = t => {
        try {
            for (let e of tf) {
                let o = `https://${e}/`;
                if (t.startsWith(o)) return t.slice(o.length - 1)
            }
        } catch (e) {
            Pe.warn(`isAmplitudeHosted#error url=${t}, error=${e}`)
        }
        return null
    },
    dr = (t, e) => {
        var i;
        let o = ka(e),
            n = (i = o == null ? void 0 : o[Ta]) == null ? void 0 : i.mediaUrl;
        if (!n) return t;
        n.endsWith("/") && (n = n.slice(0, -1));
        let r = of (t);
        if (r == null) return t;
        try {
            return n + r
        } catch (a) {
            return Pe.warn("proxyMediaUrl#error -- will keep original url; originalUrl=${originalUrl}, customMediaUrl=${customMediaUrl}, error=${e}"), t
        }
    };
var dt = A(O()),
    ac = A(Uo());
var an = t => {
        let e = window.devicePixelRatio || 1;
        return Math.round(t * e) / e
    },
    xi = t => t.map(e => e.type === "markdown" && e.meta.value ? e.meta.value : void 0).filter(e => !!e).pop();
var El = A(O());
var nf = w.div `
  position: absolute;
  display: flex;
  inset-block-start: ${t=>t.positionStyle==="padded"?"calc(max(var(--layout-padding-v2, var(--layout-padding)) - 8px, 0px))":"4px"};
  inset-inline-end: ${t=>t.shouldMoveLeft?"auto":t.positionStyle==="padded"?"calc(max(var(--layout-padding-v2, var(--layout-padding)) - 8px, 0px))":"4px"};
  inset-inline-start: ${t=>t.shouldMoveLeft?t.positionStyle==="padded"?"calc(max(var(--layout-padding-v2, var(--layout-padding)) - 8px, 0px))":"4px":"auto"};
  max-height: 32px;
  max-width: 32px;
  border-radius: var(--layout-radius-button);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: ${Ce.Z_INDEX_MAX};
`,
    rf = ({
        children: t,
        shouldMoveLeft: e = !1,
        positionStyle: o = "padded"
    }) => El.default.createElement(nf, {
        shouldMoveLeft: e,
        positionStyle: o,
        "data-testid": "dismiss",
        className: "amplitude-engagement-close"
    }, t),
    pr = rf;
var wi = A(O()),
    af = `
  button:not([disabled]),
  [href]:not([tabindex="-1"]),
  input:not([disabled]):not([type="hidden"]),
  select:not([disabled]),
  textarea:not([disabled]),
  [tabindex]:not([tabindex="-1"]),
  audio[controls]:not([tabindex="-1"]),
  video[controls]:not([tabindex="-1"]),
  summary:not([tabindex="-1"]),
  details:not([tabindex="-1"]),
  [contenteditable]:not([tabindex="-1"])
`,
    Si = t => t instanceof HTMLElement || t instanceof SVGElement,
    ur = (t, e = {
        shouldStealFocus: !1,
        delay: 0,
        preventScroll: !1
    }) => {
        (0, wi.useEffect)(() => {
            let o = t == null ? void 0 : t.current;
            if (!o || !e.shouldStealFocus) return;
            let n = document.activeElement,
                r = window.setTimeout(() => {
                    o.focus({
                        preventScroll: e.preventScroll
                    })
                }, e.delay);
            return () => {
                clearTimeout(r), n && Si(n) ? n.focus() : document.body.focus()
            }
        }, [t, e.shouldStealFocus, e.delay]), (0, wi.useEffect)(() => {
            let o = t == null ? void 0 : t.current;
            if (!o) return;
            let n = r => {
                var a, s, d;
                let i = o.querySelectorAll(af);
                if (document.activeElement === o && r.key === "Enter" && ((a = e.onEnterKeyDown) == null || a.call(e), r.preventDefault()), r.key === "Tab") {
                    let l = (s = i[0]) != null ? s : o,
                        c = (d = i[i.length - 1]) != null ? d : o;
                    r.shiftKey ? document.activeElement === l && Si(c) && (c.focus(), r.preventDefault()) : document.activeElement === c && Si(l) && (l.focus(), r.preventDefault())
                }
            };
            return o.addEventListener("keydown", n), () => {
                o.removeEventListener("keydown", n)
            }
        }, [t])
    };
var Pl = A(O());

function sf(t, e) {
    if (t != null) {
        if (typeof t == "function") {
            t(e);
            return
        }
        t.current = e
    }
}

function lf(...t) {
    return e => {
        for (let o of t) sf(o, e)
    }
}

function wo(...t) {
    return (0, Pl.useMemo)(() => lf(...t), t)
}
var Ct = A(O()),
    sn = (0, Ct.forwardRef)(({
        children: t,
        ...e
    }, o) => (0, Ct.isValidElement)(t) ? (0, Ct.cloneElement)(t, { ...e,
        ...t.props,
        ref: o,
        style: { ...e.style,
            ...t.props.style
        }
    }) : (Ct.Children.count(t) > 1 && Ct.Children.only(null), null));
var Ci = ["top", "right", "bottom", "left"],
    Il = ["start", "end"],
    ki = Ci.reduce((t, e) => t.concat(e, e + "-" + Il[0], e + "-" + Il[1]), []),
    ct = Math.min,
    Ee = Math.max,
    dn = Math.round,
    pn = Math.floor,
    qe = t => ({
        x: t,
        y: t
    }),
    cf = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    df = {
        start: "end",
        end: "start"
    };

function mr(t, e, o) {
    return Ee(t, ct(e, o))
}

function kt(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Ke(t) {
    return t.split("-")[0]
}

function ze(t) {
    return t.split("-")[1]
}

function Ti(t) {
    return t === "x" ? "y" : "x"
}

function fr(t) {
    return t === "y" ? "height" : "width"
}

function Ot(t) {
    return ["top", "bottom"].includes(Ke(t)) ? "y" : "x"
}

function gr(t) {
    return Ti(Ot(t))
}

function Ei(t, e, o) {
    o === void 0 && (o = !1);
    let n = ze(t),
        r = gr(t),
        i = fr(r),
        a = r === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return e.reference[i] > e.floating[i] && (a = cn(a)), [a, cn(a)]
}

function Ml(t) {
    let e = cn(t);
    return [ln(t), e, ln(e)]
}

function ln(t) {
    return t.replace(/start|end/g, e => df[e])
}

function pf(t, e, o) {
    let n = ["left", "right"],
        r = ["right", "left"],
        i = ["top", "bottom"],
        a = ["bottom", "top"];
    switch (t) {
        case "top":
        case "bottom":
            return o ? e ? r : n : e ? n : r;
        case "left":
        case "right":
            return e ? i : a;
        default:
            return []
    }
}

function Nl(t, e, o, n) {
    let r = ze(t),
        i = pf(Ke(t), o === "start", n);
    return r && (i = i.map(a => a + "-" + r), e && (i = i.concat(i.map(ln)))), i
}

function cn(t) {
    return t.replace(/left|right|bottom|top/g, e => cf[e])
}

function uf(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function Pi(t) {
    return typeof t != "number" ? uf(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function Kt(t) {
    let {
        x: e,
        y: o,
        width: n,
        height: r
    } = t;
    return {
        width: n,
        height: r,
        top: o,
        left: e,
        right: e + n,
        bottom: o + r,
        x: e,
        y: o
    }
}

function Al(t, e, o) {
    let {
        reference: n,
        floating: r
    } = t, i = Ot(e), a = gr(e), s = fr(a), d = Ke(e), l = i === "y", c = n.x + n.width / 2 - r.width / 2, p = n.y + n.height / 2 - r.height / 2, u = n[s] / 2 - r[s] / 2, f;
    switch (d) {
        case "top":
            f = {
                x: c,
                y: n.y - r.height
            };
            break;
        case "bottom":
            f = {
                x: c,
                y: n.y + n.height
            };
            break;
        case "right":
            f = {
                x: n.x + n.width,
                y: p
            };
            break;
        case "left":
            f = {
                x: n.x - r.width,
                y: p
            };
            break;
        default:
            f = {
                x: n.x,
                y: n.y
            }
    }
    switch (ze(e)) {
        case "start":
            f[a] -= u * (o && l ? -1 : 1);
            break;
        case "end":
            f[a] += u * (o && l ? -1 : 1);
            break
    }
    return f
}
var Ol = async (t, e, o) => {
    let {
        placement: n = "bottom",
        strategy: r = "absolute",
        middleware: i = [],
        platform: a
    } = o, s = i.filter(Boolean), d = await (a.isRTL == null ? void 0 : a.isRTL(e)), l = await a.getElementRects({
        reference: t,
        floating: e,
        strategy: r
    }), {
        x: c,
        y: p
    } = Al(l, n, d), u = n, f = {}, m = 0;
    for (let g = 0; g < s.length; g++) {
        let {
            name: y,
            fn: h
        } = s[g], {
            x: S,
            y: b,
            data: M,
            reset: x
        } = await h({
            x: c,
            y: p,
            initialPlacement: n,
            placement: u,
            strategy: r,
            middlewareData: f,
            rects: l,
            platform: a,
            elements: {
                reference: t,
                floating: e
            }
        });
        c = S != null ? S : c, p = b != null ? b : p, f = { ...f,
            [y]: { ...f[y],
                ...M
            }
        }, x && m <= 50 && (m++, typeof x == "object" && (x.placement && (u = x.placement), x.rects && (l = x.rects === !0 ? await a.getElementRects({
            reference: t,
            floating: e,
            strategy: r
        }) : x.rects), {
            x: c,
            y: p
        } = Al(l, u, d)), g = -1)
    }
    return {
        x: c,
        y: p,
        placement: u,
        strategy: r,
        middlewareData: f
    }
};
async function Bt(t, e) {
    var o;
    e === void 0 && (e = {});
    let {
        x: n,
        y: r,
        platform: i,
        rects: a,
        elements: s,
        strategy: d
    } = t, {
        boundary: l = "clippingAncestors",
        rootBoundary: c = "viewport",
        elementContext: p = "floating",
        altBoundary: u = !1,
        padding: f = 0
    } = kt(e, t), m = Pi(f), y = s[u ? p === "floating" ? "reference" : "floating" : p], h = Kt(await i.getClippingRect({
        element: (o = await (i.isElement == null ? void 0 : i.isElement(y))) == null || o ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: l,
        rootBoundary: c,
        strategy: d
    })), S = p === "floating" ? {
        x: n,
        y: r,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), M = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, x = Kt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: S,
        offsetParent: b,
        strategy: d
    }) : S);
    return {
        top: (h.top - x.top + m.top) / M.y,
        bottom: (x.bottom - h.bottom + m.bottom) / M.y,
        left: (h.left - x.left + m.left) / M.x,
        right: (x.right - h.right + m.right) / M.x
    }
}
var Bl = t => ({
    name: "arrow",
    options: t,
    async fn(e) {
        let {
            x: o,
            y: n,
            placement: r,
            rects: i,
            platform: a,
            elements: s,
            middlewareData: d
        } = e, {
            element: l,
            padding: c = 0
        } = kt(t, e) || {};
        if (l == null) return {};
        let p = Pi(c),
            u = {
                x: o,
                y: n
            },
            f = gr(r),
            m = fr(f),
            g = await a.getDimensions(l),
            y = f === "y",
            h = y ? "top" : "left",
            S = y ? "bottom" : "right",
            b = y ? "clientHeight" : "clientWidth",
            M = i.reference[m] + i.reference[f] - u[f] - i.floating[m],
            x = u[f] - i.reference[f],
            I = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l)),
            k = I ? I[b] : 0;
        (!k || !await (a.isElement == null ? void 0 : a.isElement(I))) && (k = s.floating[b] || i.floating[m]);
        let E = M / 2 - x / 2,
            P = k / 2 - g[m] / 2 - 1,
            C = ct(p[h], P),
            N = ct(p[S], P),
            _ = C,
            B = k - g[m] - N,
            $ = k / 2 - g[m] / 2 + E,
            V = mr(_, $, B),
            z = !d.arrow && ze(r) != null && $ !== V && i.reference[m] / 2 - ($ < _ ? C : N) - g[m] / 2 < 0,
            G = z ? $ < _ ? $ - _ : $ - B : 0;
        return {
            [f]: u[f] + G,
            data: {
                [f]: V,
                centerOffset: $ - V - G,
                ...z && {
                    alignmentOffset: G
                }
            },
            reset: z
        }
    }
});

function mf(t, e, o) {
    return (t ? [...o.filter(r => ze(r) === t), ...o.filter(r => ze(r) !== t)] : o.filter(r => Ke(r) === r)).filter(r => t ? ze(r) === t || (e ? ln(r) !== r : !1) : !0)
}
var _l = function(t) {
        return t === void 0 && (t = {}), {
            name: "autoPlacement",
            options: t,
            async fn(e) {
                var o, n, r;
                let {
                    rects: i,
                    middlewareData: a,
                    placement: s,
                    platform: d,
                    elements: l
                } = e, {
                    crossAxis: c = !1,
                    alignment: p,
                    allowedPlacements: u = ki,
                    autoAlignment: f = !0,
                    ...m
                } = kt(t, e), g = p !== void 0 || u === ki ? mf(p || null, f, u) : u, y = await Bt(e, m), h = ((o = a.autoPlacement) == null ? void 0 : o.index) || 0, S = g[h];
                if (S == null) return {};
                let b = Ei(S, i, await (d.isRTL == null ? void 0 : d.isRTL(l.floating)));
                if (s !== S) return {
                    reset: {
                        placement: g[0]
                    }
                };
                let M = [y[Ke(S)], y[b[0]], y[b[1]]],
                    x = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], {
                        placement: S,
                        overflows: M
                    }],
                    I = g[h + 1];
                if (I) return {
                    data: {
                        index: h + 1,
                        overflows: x
                    },
                    reset: {
                        placement: I
                    }
                };
                let k = x.map(C => {
                        let N = ze(C.placement);
                        return [C.placement, N && c ? C.overflows.slice(0, 2).reduce((_, B) => _ + B, 0) : C.overflows[0], C.overflows]
                    }).sort((C, N) => C[1] - N[1]),
                    P = ((r = k.filter(C => C[2].slice(0, ze(C[0]) ? 2 : 3).every(N => N <= 0))[0]) == null ? void 0 : r[0]) || k[0][0];
                return P !== s ? {
                    data: {
                        index: h + 1,
                        overflows: x
                    },
                    reset: {
                        placement: P
                    }
                } : {}
            }
        }
    },
    Fl = function(t) {
        return t === void 0 && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
                var o, n;
                let {
                    placement: r,
                    middlewareData: i,
                    rects: a,
                    initialPlacement: s,
                    platform: d,
                    elements: l
                } = e, {
                    mainAxis: c = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: u,
                    fallbackStrategy: f = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: g = !0,
                    ...y
                } = kt(t, e);
                if ((o = i.arrow) != null && o.alignmentOffset) return {};
                let h = Ke(r),
                    S = Ot(s),
                    b = Ke(s) === s,
                    M = await (d.isRTL == null ? void 0 : d.isRTL(l.floating)),
                    x = u || (b || !g ? [cn(s)] : Ml(s)),
                    I = m !== "none";
                !u && I && x.push(...Nl(s, g, m, M));
                let k = [s, ...x],
                    E = await Bt(e, y),
                    P = [],
                    C = ((n = i.flip) == null ? void 0 : n.overflows) || [];
                if (c && P.push(E[h]), p) {
                    let $ = Ei(r, a, M);
                    P.push(E[$[0]], E[$[1]])
                }
                if (C = [...C, {
                        placement: r,
                        overflows: P
                    }], !P.every($ => $ <= 0)) {
                    var N, _;
                    let $ = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1,
                        V = k[$];
                    if (V) return {
                        data: {
                            index: $,
                            overflows: C
                        },
                        reset: {
                            placement: V
                        }
                    };
                    let z = (_ = C.filter(G => G.overflows[0] <= 0).sort((G, te) => G.overflows[1] - te.overflows[1])[0]) == null ? void 0 : _.placement;
                    if (!z) switch (f) {
                        case "bestFit":
                            {
                                var B;
                                let G = (B = C.filter(te => {
                                    if (I) {
                                        let H = Ot(te.placement);
                                        return H === S || H === "y"
                                    }
                                    return !0
                                }).map(te => [te.placement, te.overflows.filter(H => H > 0).reduce((H, q) => H + q, 0)]).sort((te, H) => te[1] - H[1])[0]) == null ? void 0 : B[0];G && (z = G);
                                break
                            }
                        case "initialPlacement":
                            z = s;
                            break
                    }
                    if (r !== z) return {
                        reset: {
                            placement: z
                        }
                    }
                }
                return {}
            }
        }
    };

function Rl(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}

function Ll(t) {
    return Ci.some(e => t[e] >= 0)
}
var Dl = function(t) {
    return t === void 0 && (t = {}), {
        name: "hide",
        options: t,
        async fn(e) {
            let {
                rects: o
            } = e, {
                strategy: n = "referenceHidden",
                ...r
            } = kt(t, e);
            switch (n) {
                case "referenceHidden":
                    {
                        let i = await Bt(e, { ...r,
                                elementContext: "reference"
                            }),
                            a = Rl(i, o.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: a,
                                referenceHidden: Ll(a)
                            }
                        }
                    }
                case "escaped":
                    {
                        let i = await Bt(e, { ...r,
                                altBoundary: !0
                            }),
                            a = Rl(i, o.floating);
                        return {
                            data: {
                                escapedOffsets: a,
                                escaped: Ll(a)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function ff(t, e) {
    let {
        placement: o,
        platform: n,
        elements: r
    } = t, i = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), a = Ke(o), s = ze(o), d = Ot(o) === "y", l = ["left", "top"].includes(a) ? -1 : 1, c = i && d ? -1 : 1, p = kt(e, t), {
        mainAxis: u,
        crossAxis: f,
        alignmentAxis: m
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis
    };
    return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), d ? {
        x: f * c,
        y: u * l
    } : {
        x: u * l,
        y: f * c
    }
}
var Hl = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var o, n;
                let {
                    x: r,
                    y: i,
                    placement: a,
                    middlewareData: s
                } = e, d = await ff(e, t);
                return a === ((o = s.offset) == null ? void 0 : o.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
                    x: r + d.x,
                    y: i + d.y,
                    data: { ...d,
                        placement: a
                    }
                }
            }
        }
    },
    zl = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                let {
                    x: o,
                    y: n,
                    placement: r
                } = e, {
                    mainAxis: i = !0,
                    crossAxis: a = !1,
                    limiter: s = {
                        fn: y => {
                            let {
                                x: h,
                                y: S
                            } = y;
                            return {
                                x: h,
                                y: S
                            }
                        }
                    },
                    ...d
                } = kt(t, e), l = {
                    x: o,
                    y: n
                }, c = await Bt(e, d), p = Ot(Ke(r)), u = Ti(p), f = l[u], m = l[p];
                if (i) {
                    let y = u === "y" ? "top" : "left",
                        h = u === "y" ? "bottom" : "right",
                        S = f + c[y],
                        b = f - c[h];
                    f = mr(S, f, b)
                }
                if (a) {
                    let y = p === "y" ? "top" : "left",
                        h = p === "y" ? "bottom" : "right",
                        S = m + c[y],
                        b = m - c[h];
                    m = mr(S, m, b)
                }
                let g = s.fn({ ...e,
                    [u]: f,
                    [p]: m
                });
                return { ...g,
                    data: {
                        x: g.x - o,
                        y: g.y - n,
                        enabled: {
                            [u]: i,
                            [p]: a
                        }
                    }
                }
            }
        }
    };
var $l = function(t) {
    return t === void 0 && (t = {}), {
        name: "size",
        options: t,
        async fn(e) {
            var o, n;
            let {
                placement: r,
                rects: i,
                platform: a,
                elements: s
            } = e, {
                apply: d = () => {},
                ...l
            } = kt(t, e), c = await Bt(e, l), p = Ke(r), u = ze(r), f = Ot(r) === "y", {
                width: m,
                height: g
            } = i.floating, y, h;
            p === "top" || p === "bottom" ? (y = p, h = u === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h = p, y = u === "end" ? "top" : "bottom");
            let S = g - c.top - c.bottom,
                b = m - c.left - c.right,
                M = ct(g - c[y], S),
                x = ct(m - c[h], b),
                I = !e.middlewareData.shift,
                k = M,
                E = x;
            if ((o = e.middlewareData.shift) != null && o.enabled.x && (E = b), (n = e.middlewareData.shift) != null && n.enabled.y && (k = S), I && !u) {
                let C = Ee(c.left, 0),
                    N = Ee(c.right, 0),
                    _ = Ee(c.top, 0),
                    B = Ee(c.bottom, 0);
                f ? E = m - 2 * (C !== 0 || N !== 0 ? C + N : Ee(c.left, c.right)) : k = g - 2 * (_ !== 0 || B !== 0 ? _ + B : Ee(c.top, c.bottom))
            }
            await d({ ...e,
                availableWidth: E,
                availableHeight: k
            });
            let P = await a.getDimensions(s.floating);
            return m !== P.width || g !== P.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};

function hr() {
    return typeof window < "u"
}

function Yt(t) {
    return Vl(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function Me(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function Ye(t) {
    var e;
    return (e = (Vl(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function Vl(t) {
    return hr() ? t instanceof Node || t instanceof Me(t).Node : !1
}

function $e(t) {
    return hr() ? t instanceof Element || t instanceof Me(t).Element : !1
}

function Xe(t) {
    return hr() ? t instanceof HTMLElement || t instanceof Me(t).HTMLElement : !1
}

function Wl(t) {
    return !hr() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Me(t).ShadowRoot
}

function ko(t) {
    let {
        overflow: e,
        overflowX: o,
        overflowY: n,
        display: r
    } = We(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + n + o) && !["inline", "contents"].includes(r)
}

function jl(t) {
    return ["table", "td", "th"].includes(Yt(t))
}

function un(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch (o) {
            return !1
        }
    })
}

function yr(t) {
    let e = vr(),
        o = $e(t) ? We(t) : t;
    return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(n => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some(n => (o.contain || "").includes(n))
}

function Gl(t) {
    let e = Tt(t);
    for (; Xe(e) && !Xt(e);) {
        if (yr(e)) return e;
        if (un(e)) return null;
        e = Tt(e)
    }
    return null
}

function vr() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Xt(t) {
    return ["html", "body", "#document"].includes(Yt(t))
}

function We(t) {
    return Me(t).getComputedStyle(t)
}

function mn(t) {
    return $e(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function Tt(t) {
    if (Yt(t) === "html") return t;
    let e = t.assignedSlot || t.parentNode || Wl(t) && t.host || Ye(t);
    return Wl(e) ? e.host : e
}

function Ul(t) {
    let e = Tt(t);
    return Xt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Xe(e) && ko(e) ? e : Ul(e)
}

function Co(t, e, o) {
    var n;
    e === void 0 && (e = []), o === void 0 && (o = !0);
    let r = Ul(t),
        i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
        a = Me(r);
    if (i) {
        let s = br(a);
        return e.concat(a, a.visualViewport || [], ko(r) ? r : [], s && o ? Co(s) : [])
    }
    return e.concat(r, Co(r, [], o))
}

function br(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function Kl(t) {
    let e = We(t),
        o = parseFloat(e.width) || 0,
        n = parseFloat(e.height) || 0,
        r = Xe(t),
        i = r ? t.offsetWidth : o,
        a = r ? t.offsetHeight : n,
        s = dn(o) !== i || dn(n) !== a;
    return s && (o = i, n = a), {
        width: o,
        height: n,
        $: s
    }
}

function Mi(t) {
    return $e(t) ? t : t.contextElement
}

function To(t) {
    let e = Mi(t);
    if (!Xe(e)) return qe(1);
    let o = e.getBoundingClientRect(),
        {
            width: n,
            height: r,
            $: i
        } = Kl(e),
        a = (i ? dn(o.width) : o.width) / n,
        s = (i ? dn(o.height) : o.height) / r;
    return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: a,
        y: s
    }
}
var gf = qe(0);

function Yl(t) {
    let e = Me(t);
    return !vr() || !e.visualViewport ? gf : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function hf(t, e, o) {
    return e === void 0 && (e = !1), !o || e && o !== Me(t) ? !1 : e
}

function Qt(t, e, o, n) {
    e === void 0 && (e = !1), o === void 0 && (o = !1);
    let r = t.getBoundingClientRect(),
        i = Mi(t),
        a = qe(1);
    e && (n ? $e(n) && (a = To(n)) : a = To(t));
    let s = hf(i, o, n) ? Yl(i) : qe(0),
        d = (r.left + s.x) / a.x,
        l = (r.top + s.y) / a.y,
        c = r.width / a.x,
        p = r.height / a.y;
    if (i) {
        let u = Me(i),
            f = n && $e(n) ? Me(n) : n,
            m = u,
            g = br(m);
        for (; g && n && f !== m;) {
            let y = To(g),
                h = g.getBoundingClientRect(),
                S = We(g),
                b = h.left + (g.clientLeft + parseFloat(S.paddingLeft)) * y.x,
                M = h.top + (g.clientTop + parseFloat(S.paddingTop)) * y.y;
            d *= y.x, l *= y.y, c *= y.x, p *= y.y, d += b, l += M, m = Me(g), g = br(m)
        }
    }
    return Kt({
        width: c,
        height: p,
        x: d,
        y: l
    })
}

function Ni(t, e) {
    let o = mn(t).scrollLeft;
    return e ? e.left + o : Qt(Ye(t)).left + o
}

function Xl(t, e, o) {
    o === void 0 && (o = !1);
    let n = t.getBoundingClientRect(),
        r = n.left + e.scrollLeft - (o ? 0 : Ni(t, n)),
        i = n.top + e.scrollTop;
    return {
        x: r,
        y: i
    }
}

function yf(t) {
    let {
        elements: e,
        rect: o,
        offsetParent: n,
        strategy: r
    } = t, i = r === "fixed", a = Ye(n), s = e ? un(e.floating) : !1;
    if (n === a || s && i) return o;
    let d = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = qe(1),
        c = qe(0),
        p = Xe(n);
    if ((p || !p && !i) && ((Yt(n) !== "body" || ko(a)) && (d = mn(n)), Xe(n))) {
        let f = Qt(n);
        l = To(n), c.x = f.x + n.clientLeft, c.y = f.y + n.clientTop
    }
    let u = a && !p && !i ? Xl(a, d, !0) : qe(0);
    return {
        width: o.width * l.x,
        height: o.height * l.y,
        x: o.x * l.x - d.scrollLeft * l.x + c.x + u.x,
        y: o.y * l.y - d.scrollTop * l.y + c.y + u.y
    }
}

function vf(t) {
    return Array.from(t.getClientRects())
}

function bf(t) {
    let e = Ye(t),
        o = mn(t),
        n = t.ownerDocument.body,
        r = Ee(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
        i = Ee(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
        a = -o.scrollLeft + Ni(t),
        s = -o.scrollTop;
    return We(n).direction === "rtl" && (a += Ee(e.clientWidth, n.clientWidth) - r), {
        width: r,
        height: i,
        x: a,
        y: s
    }
}

function xf(t, e) {
    let o = Me(t),
        n = Ye(t),
        r = o.visualViewport,
        i = n.clientWidth,
        a = n.clientHeight,
        s = 0,
        d = 0;
    if (r) {
        i = r.width, a = r.height;
        let l = vr();
        (!l || l && e === "fixed") && (s = r.offsetLeft, d = r.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: s,
        y: d
    }
}

function Sf(t, e) {
    let o = Qt(t, !0, e === "fixed"),
        n = o.top + t.clientTop,
        r = o.left + t.clientLeft,
        i = Xe(t) ? To(t) : qe(1),
        a = t.clientWidth * i.x,
        s = t.clientHeight * i.y,
        d = r * i.x,
        l = n * i.y;
    return {
        width: a,
        height: s,
        x: d,
        y: l
    }
}

function Zl(t, e, o) {
    let n;
    if (e === "viewport") n = xf(t, o);
    else if (e === "document") n = bf(Ye(t));
    else if ($e(e)) n = Sf(e, o);
    else {
        let r = Yl(t);
        n = {
            x: e.x - r.x,
            y: e.y - r.y,
            width: e.width,
            height: e.height
        }
    }
    return Kt(n)
}

function Ql(t, e) {
    let o = Tt(t);
    return o === e || !$e(o) || Xt(o) ? !1 : We(o).position === "fixed" || Ql(o, e)
}

function wf(t, e) {
    let o = e.get(t);
    if (o) return o;
    let n = Co(t, [], !1).filter(s => $e(s) && Yt(s) !== "body"),
        r = null,
        i = We(t).position === "fixed",
        a = i ? Tt(t) : t;
    for (; $e(a) && !Xt(a);) {
        let s = We(a),
            d = yr(a);
        !d && s.position === "fixed" && (r = null), (i ? !d && !r : !d && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || ko(a) && !d && Ql(t, a)) ? n = n.filter(c => c !== a) : r = s, a = Tt(a)
    }
    return e.set(t, n), n
}

function Cf(t) {
    let {
        element: e,
        boundary: o,
        rootBoundary: n,
        strategy: r
    } = t, a = [...o === "clippingAncestors" ? un(e) ? [] : wf(e, this._c) : [].concat(o), n], s = a[0], d = a.reduce((l, c) => {
        let p = Zl(e, c, r);
        return l.top = Ee(p.top, l.top), l.right = ct(p.right, l.right), l.bottom = ct(p.bottom, l.bottom), l.left = Ee(p.left, l.left), l
    }, Zl(e, s, r));
    return {
        width: d.right - d.left,
        height: d.bottom - d.top,
        x: d.left,
        y: d.top
    }
}

function kf(t) {
    let {
        width: e,
        height: o
    } = Kl(t);
    return {
        width: e,
        height: o
    }
}

function Tf(t, e, o) {
    let n = Xe(e),
        r = Ye(e),
        i = o === "fixed",
        a = Qt(t, !0, i, e),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        d = qe(0);
    if (n || !n && !i)
        if ((Yt(e) !== "body" || ko(r)) && (s = mn(e)), n) {
            let u = Qt(e, !0, i, e);
            d.x = u.x + e.clientLeft, d.y = u.y + e.clientTop
        } else r && (d.x = Ni(r));
    let l = r && !n && !i ? Xl(r, s) : qe(0),
        c = a.left + s.scrollLeft - d.x - l.x,
        p = a.top + s.scrollTop - d.y - l.y;
    return {
        x: c,
        y: p,
        width: a.width,
        height: a.height
    }
}

function Ii(t) {
    return We(t).position === "static"
}

function ql(t, e) {
    if (!Xe(t) || We(t).position === "fixed") return null;
    if (e) return e(t);
    let o = t.offsetParent;
    return Ye(t) === o && (o = o.ownerDocument.body), o
}

function Jl(t, e) {
    let o = Me(t);
    if (un(t)) return o;
    if (!Xe(t)) {
        let r = Tt(t);
        for (; r && !Xt(r);) {
            if ($e(r) && !Ii(r)) return r;
            r = Tt(r)
        }
        return o
    }
    let n = ql(t, e);
    for (; n && jl(n) && Ii(n);) n = ql(n, e);
    return n && Xt(n) && Ii(n) && !yr(n) ? o : n || Gl(t) || o
}
var Ef = async function(t) {
    let e = this.getOffsetParent || Jl,
        o = this.getDimensions,
        n = await o(t.floating);
    return {
        reference: Tf(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};

function Pf(t) {
    return We(t).direction === "rtl"
}
var If = {
    convertOffsetParentRelativeRectToViewportRelativeRect: yf,
    getDocumentElement: Ye,
    getClippingRect: Cf,
    getOffsetParent: Jl,
    getElementRects: Ef,
    getClientRects: vf,
    getDimensions: kf,
    getScale: To,
    isElement: $e,
    isRTL: Pf
};

function Mf(t, e) {
    let o = null,
        n, r = Ye(t);

    function i() {
        var s;
        clearTimeout(n), (s = o) == null || s.disconnect(), o = null
    }

    function a(s, d) {
        s === void 0 && (s = !1), d === void 0 && (d = 1), i();
        let {
            left: l,
            top: c,
            width: p,
            height: u
        } = t.getBoundingClientRect();
        if (s || e(), !p || !u) return;
        let f = pn(c),
            m = pn(r.clientWidth - (l + p)),
            g = pn(r.clientHeight - (c + u)),
            y = pn(l),
            S = {
                rootMargin: -f + "px " + -m + "px " + -g + "px " + -y + "px",
                threshold: Ee(0, ct(1, d)) || 1
            },
            b = !0;

        function M(x) {
            let I = x[0].intersectionRatio;
            if (I !== d) {
                if (!b) return a();
                I ? a(!1, I) : n = setTimeout(() => {
                    a(!1, 1e-7)
                }, 1e3)
            }
            b = !1
        }
        try {
            o = new IntersectionObserver(M, { ...S,
                root: r.ownerDocument
            })
        } catch (x) {
            o = new IntersectionObserver(M, S)
        }
        o.observe(t)
    }
    return a(!0), i
}

function Ve(t, e, o, n) {
    n === void 0 && (n = {});
    let {
        ancestorScroll: r = !0,
        ancestorResize: i = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: d = !1
    } = n, l = Mi(t), c = r || i ? [...l ? Co(l) : [], ...Co(e)] : [];
    c.forEach(h => {
        r && h.addEventListener("scroll", o, {
            passive: !0
        }), i && h.addEventListener("resize", o)
    });
    let p = l && s ? Mf(l, o) : null,
        u = -1,
        f = null;
    a && (f = new ResizeObserver(h => {
        let [S] = h;
        S && S.target === l && f && (f.unobserve(e), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
            var b;
            (b = f) == null || b.observe(e)
        })), o()
    }), l && !d && f.observe(l), f.observe(e));
    let m, g = d ? Qt(t) : null;
    d && y();

    function y() {
        let h = Qt(t);
        g && (h.x !== g.x || h.y !== g.y || h.width !== g.width || h.height !== g.height) && o(), g = h, m = requestAnimationFrame(y)
    }
    return o(), () => {
        var h;
        c.forEach(S => {
            r && S.removeEventListener("scroll", o), i && S.removeEventListener("resize", o)
        }), p == null || p(), (h = f) == null || h.disconnect(), f = null, d && cancelAnimationFrame(m)
    }
}
var Ai = Bt,
    Et = Hl,
    ec = _l,
    Eo = zl,
    tc = Fl,
    oc = $l,
    Jt = Dl,
    xr = Bl;
var Qe = (t, e, o) => {
    let n = new Map,
        r = {
            platform: If,
            ...o
        },
        i = { ...r.platform,
            _c: n
        };
    return Ol(t, e, { ...r,
        platform: i
    })
};
var eo = A(O());
var nc = $n({
        types: {},
        guards: {
            isForcedOpen: () => !1,
            isDefaultOpen: () => !1,
            isHoverTrigger: ({
                context: t
            }) => t.trigger.type === "hover",
            shouldStartWithoutAnimation: () => !1
        },
        actions: {
            updatePosition: Gt(({
                context: t
            }, e) => ({
                content: { ...t.content,
                    position: e.content
                },
                arrow: { ...t.arrow,
                    position: e.arrow
                }
            })),
            updatePlacement: Gt({
                content: ({
                    context: t
                }, e) => ({ ...t.content,
                    placement: e.placement
                })
            }),
            updateTriggerDimensions: Gt({
                trigger: ({
                    context: t
                }, e) => ({ ...t.trigger,
                    dimensions: e.dimensions
                })
            }),
            sendEnableAnimation: ({
                self: t
            }) => {
                t.send({
                    type: "ENABLE_ANIMATION"
                })
            },
            onOpen: () => {},
            onClose: () => {}
        },
        actors: {
            trackTrigger: Fe(() => {})
        },
        delays: {
            offHoverDebounce: 250
        }
    }).createMachine({
        id: "Popover",
        context: ({
            input: t
        }) => ({
            trigger: {
                type: t.triggerType,
                ref: t.refs.trigger,
                dimensions: null
            },
            content: {
                ref: t.refs.content,
                position: null,
                placement: t.placement,
                offset: t.offset
            },
            arrow: {
                ref: t.refs.arrow,
                position: null
            }
        }),
        type: "parallel",
        invoke: {
            id: "trackTrigger",
            src: "trackTrigger"
        },
        states: {
            animation: {
                description: "Controls whether the popover uses animations. When forceOpen or defaultOpen is true, the initial appearance is immediate without animation. All subsequent show/hide actions are animated.",
                initial: "init",
                states: {
                    init: {
                        always: [{
                            target: "disabled",
                            guard: "shouldStartWithoutAnimation"
                        }, {
                            target: "enabled"
                        }]
                    },
                    disabled: {
                        on: {
                            ENABLE_ANIMATION: "enabled"
                        }
                    },
                    enabled: {
                        type: "final"
                    }
                }
            },
            visibility: {
                initial: "closed",
                states: {
                    closed: {
                        on: {
                            OPEN: {
                                target: "open"
                            },
                            POSITION: {
                                target: "open.forced",
                                guard: "isForcedOpen"
                            }
                        },
                        initial: "initial",
                        states: {
                            initial: {
                                on: {
                                    POSITION: {
                                        target: "#Popover.visibility.open",
                                        guard: "isDefaultOpen"
                                    }
                                }
                            },
                            repeat: {}
                        }
                    },
                    open: {
                        initial: "pending",
                        states: {
                            pending: {
                                always: [{
                                    target: "hovering",
                                    guard: "isHoverTrigger"
                                }, {
                                    target: "idle"
                                }]
                            },
                            hovering: {
                                on: {
                                    OFF_HOVER: {
                                        target: "pending close",
                                        reenter: !0
                                    }
                                }
                            },
                            idle: {},
                            forced: {
                                type: "final"
                            },
                            "pending close": {
                                after: {
                                    offHoverDebounce: {
                                        target: "#Popover.visibility.closed.repeat",
                                        reenter: !0
                                    }
                                },
                                on: {
                                    HOLD_OPEN: {
                                        target: "#Popover.visibility.open",
                                        reenter: !0
                                    },
                                    OPEN: {
                                        target: "#Popover.visibility.open",
                                        reenter: !0
                                    }
                                }
                            }
                        },
                        entry: [{
                            type: "onOpen"
                        }],
                        exit: ["onClose", "sendEnableAnimation"],
                        on: {
                            CLOSE: {
                                target: "closed.repeat",
                                reenter: !0
                            }
                        }
                    }
                }
            }
        },
        on: {
            POSITION: {
                actions: [{
                    type: "updatePosition",
                    params: ({
                        event: t
                    }) => ({
                        content: t.content,
                        arrow: t.arrow
                    })
                }]
            },
            PLACE: {
                actions: [{
                    type: "updatePlacement",
                    params: ({
                        event: t
                    }) => ({
                        placement: t.placement
                    })
                }]
            },
            UPDATE_TRIGGER_DIMENSIONS: {
                actions: [{
                    type: "updateTriggerDimensions",
                    params: ({
                        event: t
                    }) => ({
                        dimensions: t.dimensions
                    })
                }, Ya("trackTrigger", {
                    type: "RECONCILE"
                })]
            }
        }
    }),
    Q = Wn(nc),
    Nf = ({
        children: t
    }) => {
        let e = Q.useActorRef(),
            o = Q.useSelector;
        return t(e, o)
    },
    rc = ({
        children: t,
        offset: e,
        triggerType: o,
        placement: n,
        autoPlacement: r,
        flip: i,
        forceOpen: a,
        defaultOpen: s,
        onOpen: d,
        onClose: l
    }) => {
        let c = (0, eo.useRef)(null),
            p = (0, eo.useRef)(null),
            u = (0, eo.useRef)(null),
            f = nc.provide({
                guards: {
                    isForcedOpen: () => a,
                    isDefaultOpen: () => s,
                    shouldStartWithoutAnimation: () => a || s
                },
                actions: {
                    onOpen: d,
                    onClose: l
                },
                actors: {
                    trackTrigger: Fe(({
                        sendBack: m,
                        receive: g
                    }) => {
                        let y, h = null,
                            S = null,
                            b = (x, I) => {
                                let k = u.current;
                                return Ve(x, I, () => {
                                    let P = [Et({
                                        mainAxis: e + (u.current ? u.current.offsetWidth / 2 : 0)
                                    })];
                                    r && P.push(Eo({
                                        padding: e
                                    }), ec({
                                        crossAxis: !0,
                                        allowedPlacements: ["top", "bottom"]
                                    })), i && P.push(tc()), k && P.push(xr({
                                        element: k,
                                        padding: Number.parseFloat(window.getComputedStyle(I).borderRadius)
                                    })), Qe(x, I, {
                                        placement: n,
                                        middleware: P
                                    }).then(({
                                        y: C,
                                        x: N,
                                        placement: _,
                                        middlewareData: B
                                    }) => {
                                        var $, V;
                                        m({
                                            type: "PLACE",
                                            placement: _
                                        }), m({
                                            type: "POSITION",
                                            content: {
                                                x: N,
                                                y: C
                                            },
                                            arrow: {
                                                x: ($ = B.arrow) == null ? void 0 : $.x,
                                                y: (V = B.arrow) == null ? void 0 : V.y
                                            }
                                        })
                                    })
                                })
                            },
                            M = () => {
                                let x = c.current,
                                    I = p.current;
                                if (!x) {
                                    y == null || y(), y = void 0, h = null, S = null;
                                    return
                                }
                                I && (x !== h || I !== S) && (y == null || y(), h = x, S = I, y = b(x, I))
                            };
                        return g(x => {
                            x.type === "RECONCILE" && M()
                        }), M(), () => {
                            y == null || y()
                        }
                    })
                }
            });
        return eo.default.createElement(Q.Provider, {
            logic: f,
            options: {
                input: {
                    triggerType: o,
                    refs: {
                        trigger: c,
                        content: p,
                        arrow: u
                    },
                    offset: e + (u.current ? u.current.offsetWidth / 2 : 0),
                    placement: n,
                    forceOpen: a,
                    defaultOpen: s
                }
            }
        }, eo.default.createElement(Nf, null, t))
    };
var ic = A(O());
var Af = w.div `
  position: absolute;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: ${Ce.Z_TOOLTIPS-2};
  background-color: var(--background-primary);
  border: 1px solid var(--border-primary);
  border-top: none;
  border-right: none;
  transition: all var(--animation-duration-normal) var(--animation-easing-normal);
  transform: rotate(45deg);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
`,
    Rf = (0, ic.forwardRef)(({
        css: t,
        ...e
    }, o) => T(Af, {
        ref: o,
        ...e,
        css: t,
        role: "presentation",
        "aria-hidden": "true"
    })),
    Sr = Rf;
var Lf = (0, dt.forwardRef)(({
        children: t,
        style: e,
        asChild: o,
        ...n
    }, r) => {
        let i = Q.useSelector(({
                context: p
            }) => p.trigger.ref),
            a = Q.useSelector(p => p.matches({
                visibility: "open"
            })),
            {
                send: s
            } = Q.useActorRef(),
            d = (0, dt.useCallback)(p => {
                p !== null && s({
                    type: "UPDATE_TRIGGER_DIMENSIONS",
                    dimensions: p.getBoundingClientRect()
                })
            }, [s]),
            l = wo(i, r, d);
        return T(o ? sn : "button", {
            "data-testid": "popover-click-trigger",
            ...n,
            ref: l,
            "aria-haspopup": "dialog",
            "data-state": a ? "open" : "closed",
            style: {
                cursor: "pointer",
                ...e
            },
            type: "button",
            onClick: p => {
                p.preventDefault(), p.stopPropagation(), s({
                    type: "OPEN"
                })
            }
        }, t)
    }),
    Of = (0, dt.forwardRef)(({
        children: t,
        style: e,
        asChild: o,
        ...n
    }, r) => {
        let i = Q.useSelector(({
                context: p
            }) => p.trigger.ref),
            a = Q.useSelector(p => p.matches({
                visibility: "open"
            })),
            {
                send: s
            } = Q.useActorRef(),
            d = (0, dt.useCallback)(p => {
                p !== null && s({
                    type: "UPDATE_TRIGGER_DIMENSIONS",
                    dimensions: p.getBoundingClientRect()
                })
            }, [s]),
            l = wo(i, r, d);
        return T(o ? sn : "button", {
            "data-testid": "popover-hover-trigger",
            ...n,
            ref: l,
            "data-state": a ? "open" : "closed",
            style: {
                cursor: "default",
                ...e
            },
            tabIndex: -1,
            type: "button",
            onMouseEnter: () => {
                s({
                    type: "OPEN"
                })
            },
            onMouseLeave: () => {
                s({
                    type: "OFF_HOVER"
                })
            }
        }, t)
    }),
    sc = (0, dt.forwardRef)(({
        children: t,
        style: e,
        ...o
    }, n) => {
        let i = Q.useSelector(({
                context: s
            }) => s.trigger.type) === "hover" ? Of : Lf,
            a = {
                zIndex: 1,
                position: "absolute",
                background: "none",
                border: "none",
                padding: 0,
                ...e
            };
        return T(i, { ...o,
            ref: n,
            style: a
        }, t)
    }),
    lc = (t, e, o, n) => o && n ? { ...e,
        opacity: t ? e.opacity : 0,
        visibility: t ? "visible" : "hidden",
        transitionProperty: [e.transitionProperty, "visibility"].filter(Boolean).join(", ")
    } : {
        display: t ? "block" : "none"
    },
    Bf = t => `${t}px`,
    _f = (t, e) => {
        switch (t) {
            case "top-end":
            case "top-start":
            case "top":
                return {
                    bottom: -e,
                    left: 0,
                    height: e
                };
            case "bottom-end":
            case "bottom-start":
            case "bottom":
                return {
                    top: -e,
                    left: 0,
                    height: e
                };
            case "left-end":
            case "left-start":
            case "left":
                return {
                    right: -e,
                    top: 0,
                    width: e
                };
            case "right-end":
            case "right-start":
            case "right":
                return {
                    left: -e,
                    top: 0,
                    width: e
                }
        }
    },
    Ff = (0, dt.forwardRef)(({
        children: t,
        style: e,
        labelledBy: o,
        describedBy: n,
        portalToId: r,
        ...i
    }, a) => {
        var M;
        let {
            send: s
        } = Q.useActorRef(), {
            animStyles: d,
            isAnimatedWidget: l
        } = ie(), c = Q.useSelector(({
            context: x
        }) => x.content.ref), p = Q.useSelector(({
            context: x
        }) => x.content.offset), u = Q.useSelector(x => x.matches({
            visibility: "open"
        })), f = Q.useSelector(({
            context: x
        }) => {
            var I;
            return (I = x.content.position) == null ? void 0 : I.x
        }), m = Q.useSelector(({
            context: x
        }) => {
            var I;
            return (I = x.content.position) == null ? void 0 : I.y
        }), g = Q.useSelector(x => x.matches({
            animation: "enabled"
        })), y = Q.useSelector(({
            context: x
        }) => x.content.placement), h = Object.entries(_f(y, p)).reduce((x, [I, k]) => (x[I] = Bf(k), x), {}), S = wo(c, a), b = { ...i
        };
        return delete b.shouldStealFocus, T("div", {
            "data-testid": "popover-hover-content",
            ...b,
            ref: S,
            "aria-describedby": n,
            "aria-labelledby": o,
            css: {
                "::before": {
                    content: '""',
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    pointerEvents: u ? "auto" : "none",
                    opacity: 0,
                    ...h
                }
            },
            role: "tooltip",
            style: { ...e,
                top: 0,
                left: 0,
                ...lc(u, d, l, g),
                pointerEvents: u ? "auto" : "none",
                transform: `translate(${an(f!=null?f:0)}px, ${an(m!=null?m:0)}px) ${(M=d.transform)!=null?M:""}`
            },
            onMouseEnter: () => {
                s({
                    type: "HOLD_OPEN"
                })
            },
            onMouseLeave: () => {
                s({
                    type: "OFF_HOVER"
                })
            }
        }, t)
    }),
    Df = ({
        children: t,
        style: e,
        labelledBy: o,
        describedBy: n,
        shouldStealFocus: r = !0,
        ...i
    }) => {
        var m;
        let {
            send: a
        } = Q.useActorRef(), s = Q.useSelector(({
            context: g
        }) => g.content.ref), d = Q.useSelector(g => g.matches({
            visibility: "open"
        })), l = Q.useSelector(({
            context: g
        }) => {
            var y;
            return (y = g.content.position) == null ? void 0 : y.x
        }), c = Q.useSelector(({
            context: g
        }) => {
            var y;
            return (y = g.content.position) == null ? void 0 : y.y
        }), p = Q.useSelector(g => g.matches({
            animation: "enabled"
        })), {
            animStyles: u,
            isAnimatedWidget: f
        } = ie();
        return ur(s, {
            shouldStealFocus: r && d,
            preventScroll: !0
        }), T("div", {
            "data-testid": "popover-click-content",
            ...i,
            ref: s,
            "aria-describedby": n,
            "aria-labelledby": o,
            "aria-modal": d,
            role: "dialog",
            style: { ...e,
                top: 0,
                left: 0,
                outline: "none",
                ...lc(d, u, f, p),
                transform: `translate(${an(l!=null?l:0)}px, ${an(c!=null?c:0)}px) ${(m=u.transform)!=null?m:""}`
            },
            tabIndex: -1,
            onKeyDown: g => {
                g.key === "Escape" && a({
                    type: "CLOSE"
                })
            }
        }, t)
    },
    Hf = ({
        className: t
    }) => {
        let e = Q.useSelector(({
                context: a
            }) => a.arrow.ref),
            o = Q.useSelector(({
                context: a
            }) => a.arrow.position),
            n = Q.useSelector(({
                context: a
            }) => a.content.placement),
            [r = ""] = n.split("-"),
            i = a => {
                switch (a) {
                    case "top":
                        return W `
          transform: rotate(315deg);
          bottom: -9px;
        `;
                    case "right":
                        return W `
          transform: rotate(225deg);
          left: -9px;
        `;
                    case "bottom":
                        return W `
          transform: rotate(135deg);
          top: -9px;
        `;
                    case "left":
                    default:
                        return W `
          transform: rotate(45deg);
          right: -9px;
        `
                }
            };
        return T(Sr, {
            "data-testid": "popover-arrow",
            ref: e,
            css: W `
        top: ${o==null?void 0:o.y}px;
        left: ${o==null?void 0:o.x}px;
        ${i(r)}
      `,
            className: t
        })
    },
    cc = (0, dt.forwardRef)(({
        children: t,
        labelledBy: e,
        describedBy: o,
        portalToId: n,
        style: r,
        showArrow: i,
        arrowClassName: a,
        ...s
    }, d) => {
        let c = Q.useSelector(({
                context: f
            }) => f.trigger.type) === "hover" ? Ff : Df,
            p = {
                position: "absolute",
                pointerEvents: "auto",
                zIndex: 0,
                ...r
            },
            u = T(c, {
                describedBy: o,
                labelledBy: e,
                ...s,
                ref: d,
                style: p
            }, t, i && T(Hf, {
                className: a
            }));
        if (n) {
            let f = document.getElementById(n);
            if (f) return (0, ac.createPortal)(u, f)
        }
        return u
    }),
    zf = ({
        children: t,
        shouldMoveLeft: e
    }) => {
        let {
            send: o
        } = Q.useActorRef(), n = Y();
        return T(pr, {
            shouldMoveLeft: e
        }, T(vo, {
            theme: n,
            "data-testid": "popover-close",
            "aria-label": "close",
            onClick: () => {
                o({
                    type: "CLOSE"
                })
            }
        }, t))
    },
    dc = ({
        isDismissible: t,
        children: e,
        shouldMoveLeft: o,
        ...n
    }) => Q.useSelector(({
        context: i
    }) => i.trigger.type) === "click" || t ? T(zf, { ...n,
        shouldMoveLeft: o
    }, e) : null,
    $f = ({
        children: t
    }) => {
        let e = Q.useSelector(({
            context: o
        }) => o.trigger.dimensions);
        return t(e)
    },
    pc = (0, dt.forwardRef)(({
        children: t,
        style: e,
        onOpen: o,
        onClose: n,
        forceOpen: r = !1,
        defaultOpen: i = !1,
        placement: a = "bottom",
        offset: s = 8,
        triggerType: d = "hover",
        autoPlacement: l = !0,
        flip: c = !1,
        ...p
    }, u) => T(rc, {
        forceOpen: r,
        defaultOpen: i,
        offset: s,
        placement: a,
        triggerType: d,
        autoPlacement: l,
        flip: c,
        onOpen: o,
        onClose: n
    }, (f, m) => T($f, null, g => T("div", {
        ref: u,
        ...p,
        style: {
            position: "relative",
            alignSelf: "center",
            opacity: g ? 1 : 0,
            top: a === "top" ? -s : 0,
            width: g == null ? void 0 : g.width,
            height: g == null ? void 0 : g.height,
            ...e
        }
    }, typeof t == "function" ? t(f, m) : t))));
var fn = A(O()),
    uc = fn.default.createContext({
        isStepEffectComplete: !1,
        setStepEffectComplete: () => {},
        contentStyles: {}
    }),
    Po = ({
        children: t
    }) => {
        let [e, o] = fn.default.useState(!1), n = {
            transition: "opacity 0.5s ease-in-out",
            opacity: e ? 1 : 0
        };
        return fn.default.createElement(uc.Provider, {
            value: {
                isStepEffectComplete: e,
                setStepEffectComplete: o,
                contentStyles: n
            }
        }, t)
    },
    we = () => fn.default.useContext(uc);
var Wf = Ea `
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(4);
    opacity: 0;
  }
`,
    mc = {
        position: "relative",
        borderRadius: "var(--layout-radius-circle)",
        width: "var(--height-small)",
        height: "var(--height-small)",
        backgroundColor: "var(--base-accent)",
        pointerEvents: "all",
        zIndex: Ce.Z_NUDGE
    },
    Vf = w.div `
  border-radius: var(--layout-radius-circle);
  width: var(--height-small);
  height: var(--height-small);
  background-color: var(--base-accent);
  position: absolute;
  animation: ${Wf} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
`,
    fc = "beacon",
    gn = ({
        theme: t,
        className: e,
        ...o
    }) => {
        let {
            overrides: n
        } = de(fc, t);
        return T("div", {
            css: [n, W(mc)],
            ...o,
            className: `amplitude-engagement-beacon${e?` ${e}`:""}`
        }, T(Vf, null))
    };
gn.styles = mc;
gn.slug = fc;
gn.renderMock = (t, e) => T(gn, {
    theme: {
        theme: t,
        mode: e
    }
}, "Button");
var wr = gn;
var jf = t => /\d/.test(t),
    ue = t => jf(t) ? Number.parseInt(t, 10) : 0;
var Je = A(O()),
    gc = A(Uo());
var to = "engagement-toast-container",
    Gf = "engagement-nudge-container";
var _t = {
        state: {},
        subscribers: [],
        subscribe: t => (_t.subscribers.push(t), () => {
            _t.subscribers = _t.subscribers.filter(e => e !== t)
        })
    },
    Uf = (t, e) => {
        switch (e.type) {
            case "SHOW":
                return { ...t,
                    [e.id]: e.payload
                };
            case "HIDE":
                {
                    let o = { ...t
                    };
                    return delete o[e.id],
                    o
                }
            case "HIDE_ALL_MATCHING_PATTERN":
                {
                    let o = n => {
                        var r;
                        return !e.instanceName || ((r = n.instanceName) != null ? r : Kr) === e.instanceName
                    };
                    if (e.idPattern) {
                        let n = { ...t
                        };
                        for (let r in n) {
                            let i = n[r];
                            i && r.match(e.idPattern) && o(i) && delete n[r]
                        }
                        return n
                    }
                    if (e.instanceName) {
                        let n = { ...t
                        };
                        for (let r in n) {
                            let i = n[r];
                            i && o(i) && delete n[r]
                        }
                        return n
                    }
                    return {}
                }
            default:
                return t
        }
    },
    Cr = t => {
        let e = Uf(_t.state, t);
        _t.state = e, _t.subscribers.forEach(o => {
            Promise.resolve().then(() => {
                o(e)
            })
        })
    },
    hc = (t, e) => {
        Cr({
            type: "SHOW",
            id: t,
            payload: e
        })
    },
    yc = t => {
        Cr({
            type: "HIDE",
            id: t
        })
    },
    Wx = (t, e) => {
        Cr({
            type: "HIDE_ALL_MATCHING_PATTERN",
            idPattern: t,
            instanceName: e
        })
    },
    Zf = t => {
        Cr({
            type: "HIDE_ALL_MATCHING_PATTERN",
            instanceName: t
        })
    },
    qf = ({
        position: t,
        children: e,
        onEscapeKeyDown: o,
        onEnterKeyDown: n,
        shouldStealFocus: r,
        hasWideContent: i,
        themeProvider: a
    }) => {
        let s = Je.default.useRef(null),
            {
                isMobileDevice: d
            } = X(),
            {
                isEditorPreview: l
            } = D();
        ur(s, {
            shouldStealFocus: r,
            onEnterKeyDown: n
        });
        let c = {
                "top-left": {
                    top: 0,
                    left: 0,
                    right: 0,
                    justifyContent: "flex-start"
                },
                "top-center": {
                    top: 0,
                    left: 0,
                    right: 0,
                    justifyContent: "center"
                },
                "top-right": {
                    top: 0,
                    right: 0,
                    left: 0,
                    justifyContent: "flex-end"
                },
                "right-center": {
                    top: "50vh",
                    right: 0,
                    left: 0,
                    justifyContent: "flex-end",
                    transform: "translate(0, -50%)"
                },
                "bottom-right": {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    justifyContent: "flex-end"
                },
                "bottom-center": {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: "center"
                },
                "bottom-left": {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: "flex-start"
                },
                "left-center": {
                    top: "50vh",
                    left: 0,
                    right: 0,
                    justifyContent: "flex-start",
                    transform: "translate(0, -50%)"
                },
                center: {
                    justifyContent: "center",
                    top: "50vh",
                    transform: "translate(0, -50%)"
                }
            },
            p = Je.default.createElement("div", {
                "data-testid": "engagement-toast",
                style: {
                    display: "flex",
                    position: "absolute",
                    transition: "all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
                    width: "100%",
                    ...t && c[t],
                    ...d && l && t === "center" && {
                        top: "50%",
                        transform: "translateY(-50%)"
                    },
                    ...d && l && t === "right-center" && {
                        top: "50%",
                        transform: "translateY(-50%)"
                    },
                    ...d && l && t === "left-center" && {
                        top: "50%",
                        transform: "translateY(-50%)"
                    }
                }
            }, Je.default.createElement("div", {
                id: "engagement-toast-responsive-inner-div",
                ref: s,
                "aria-labelledby": "engagement-nudge-title",
                "aria-live": "polite",
                style: {
                    width: i ? "unset" : "min(var(--popover-width), 100%)"
                },
                "aria-modal": "true",
                role: "dialog",
                onKeyDown: u => {
                    u.key === "Escape" && (o == null || o())
                }
            }, e));
        return a ? Je.default.createElement(a, null, p) : p
    },
    Vx = ({
        children: t
    }) => {
        let [e, o] = Je.default.useState(_t.state), {
            isStudioMobilePreview: n,
            studioMobilePreviewWrapper: r,
            mobileStyles: i
        } = X(), a = D(), {
            isEditorPreview: s
        } = a;
        Je.default.useEffect(() => {
            let l = _t.subscribe(o);
            return () => {
                l(), Zf(a.instanceName)
            }
        }, [a.instanceName]);
        let d = Je.default.createElement("div", {
            id: nt(Gf, a.instanceName),
            style: n ? i.toast.container : {
                position: "relative"
            }
        }, t, Je.default.createElement("div", {
            id: nt(to, a.instanceName),
            style: n ? i.toast.contentContainer : {
                position: "fixed",
                pointerEvents: "none",
                ...s && {
                    marginTop: Ka
                }
            }
        }, Object.entries(e).filter(([, l]) => {
            var c;
            return ((c = l.instanceName) != null ? c : Kr) === a.instanceName
        }).map(([l, c]) => {
            if (c.asChild) return Je.default.createElement(sn, {
                key: l,
                "data-testid": "engagement-toast",
                id: l
            }, c.element);
            let {
                element: p,
                position: u,
                duration: f,
                onEscapeKeyDown: m,
                onEnterKeyDown: g,
                shouldStealFocus: y,
                hasWideContent: h,
                themeProvider: S
            } = c;
            return Je.default.createElement(qf, {
                key: l,
                duration: f,
                id: l,
                position: u,
                shouldStealFocus: y,
                hasWideContent: h,
                themeProvider: S,
                onEnterKeyDown: g,
                onEscapeKeyDown: m
            }, p)
        })));
        return n && r ? gc.default.createPortal(d, r) : d
    };
var hn = A(O());
var xc = A(Us()),
    oo = A(O());
var me = A(O());
var Kf = w.div `
  height: ${Ko}px;
  position: relative;
  z-index: 50;

  @media screen and (max-height: 820px) {
    transform: scale(0.9);
  }

  @media screen and (max-height: 720px) {
    transform: scale(0.8);
  }

  @media screen and (max-height: 620px) {
    transform: scale(0.7);
  }

  @media screen and (max-height: 560px) {
    transform: scale(0.6);
  }

  @media screen and (max-height: 500px) {
    transform: scale(0.5);
  }

  @media screen and (max-height: 420px) {
    transform: scale(0.4);
  }
`,
    Yf = w.div `
  width: ${Va}px;
  height: ${Ko}px;
  position: relative;
  border-radius: 56px;
  box-shadow: 0px 0px 0px 7.5px #7d7e7d;
  border: 8px solid #000;
  background: linear-gradient(165deg, white, #ebf0ff 45%, #ebf0ff 55%, white);
  outline: 6px solid #2c2c2b;
  padding-top: 60px;
  padding-bottom: 34px;
  overflow: hidden;

  @media screen and (max-width: 670px) {
    height: 790px;
    width: 400px;
  }

  @media screen and (max-width: 580px) {
    height: 720px;
    width: 360px;
  }

  [id^='engagement-nudge-container'] {
    overflow: auto;
  }
`,
    Xf = w.div `
  height: 100%;
  width: 100%;
  position: relative;
`,
    Qf = w.div `
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0px;
  display: flex;
  justify-content: center;
  padding-top: 12px;
`,
    Jf = w.div `
  height: 37px;
  width: 126px;
  border-radius: 24px;
  background-color: #000000;
  transition: height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    height: 45px;
    width: 145px;
  }
`,
    eg = w.div `
  position: absolute;
  width: 100%;
  height: 34px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
`,
    tg = w.div `
  height: 5px;
  width: 154px;
  border-radius: 24px;
  background-color: #000000;
`,
    og = w.div `
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  bottom: 0px;
`,
    vc = w.div `
  position: absolute;
  top: 120px;
  display: flex;
  flex-direction: column;

  &.left {
    left: -12px;
  }

  &.right {
    right: -12px;
    top: 220px;
  }
`,
    kr = w.span `
  background-color: #1d1e1f;
  display: inline-block;
  width: 5px;
  min-height: 62px;
  border-radius: 2px;

  &.power {
    height: 102px;
  }

  &.volume-up {
    margin-top: 29px;
  }
  &.volume-down {
    margin-top: 16px;
  }

  &.lock {
    min-height: 32px;
  }
`,
    ng = () => me.default.createElement(og, null, me.default.createElement(vc, {
        className: "left"
    }, me.default.createElement(kr, {
        className: "lock"
    }), me.default.createElement(kr, {
        className: "volume-up"
    }), me.default.createElement(kr, {
        className: "volume-down"
    })), me.default.createElement(vc, {
        className: "right"
    }, me.default.createElement(kr, {
        className: "power"
    }))),
    rg = () => me.default.createElement(Qf, null, me.default.createElement(Jf, null)),
    bc = ({
        style: t,
        children: e
    }) => {
        let {
            isMobileDevice: o,
            isMobileNativePreview: n
        } = X();
        return me.default.createElement(Kf, {
            style: t,
            "data-testid": "mobile-preview-device"
        }, me.default.createElement(ng, null), me.default.createElement(Yf, {
            isMobileWeb: o && !n
        }, me.default.createElement(rg, null), me.default.createElement(Xf, {
            id: "engagement-mobile-preview-wrapper"
        }, me.default.createElement("div", {
            id: "engagement-mobile-nudge-mock-pin"
        }), e), me.default.createElement(eg, null, me.default.createElement(tg, null))))
    };
var Mo = "engagement-preview-mock-target",
    Tr = 0,
    Io = "10%",
    Sc = t => {
        switch (t) {
            case "top":
                return {
                    top: "",
                    bottom: Io,
                    left: "50%",
                    right: "",
                    transform: "translateX(-50%)"
                };
            case "bottom":
                return {
                    top: Io,
                    bottom: "",
                    left: "50%",
                    right: "",
                    transform: "translateX(-50%)"
                };
            case "left":
                return {
                    top: "50%",
                    bottom: "",
                    left: "",
                    right: Io,
                    transform: "translateY(-50%)"
                };
            case "right":
                return {
                    top: "50%",
                    bottom: "",
                    left: Io,
                    right: "",
                    transform: "translateY(-50%)"
                };
            case "auto":
                return {
                    top: Io,
                    bottom: "",
                    left: Io,
                    right: "",
                    transform: ""
                };
            default:
                return {
                    top: "50%",
                    bottom: "",
                    left: "50%",
                    right: "",
                    transform: "translate(-50%, -50%)"
                }
        }
    },
    Ri = t => {
        let e = document.getElementById(Mo);
        e && Object.assign(e.style, Sc(t))
    },
    ig = t => {
        let e = document.createElement("div");
        e.id = Mo, Object.assign(e.style, {
            position: "fixed",
            ...Sc(t),
            width: "250px",
            minHeight: "48px",
            borderRadius: "8px",
            backgroundColor: "rgba(128, 128, 128, 0.08)",
            border: "1px dashed rgba(128, 128, 128, 0.4)",
            fontFamily: "system-ui, sans-serif",
            zIndex: "1"
        });
        let o = document.createElement("div");
        Object.assign(o.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "48px",
            fontSize: "12px",
            color: "rgba(128, 128, 128, 0.6)",
            pointerEvents: "none",
            userSelect: "none"
        }), o.textContent = "Target element", e.appendChild(o), document.body.appendChild(e)
    },
    Er = t => {
        Tr++, document.getElementById(Mo) ? Ri(t) : ig(t)
    },
    Pr = () => {
        var t;
        Tr--, Tr <= 0 && (Tr = 0, (t = document.getElementById(Mo)) == null || t.remove())
    },
    ag = ({
        children: t
    }) => {
        let e = oo.default.useRef(null),
            {
                widgetTableauSelection: o,
                editorPreviewDevice: n,
                isAssistantPreview: r
            } = D(),
            {
                mode: i
            } = Y(),
            a = oo.default.useCallback(l => {
                if (!l) {
                    e.current && (e.current.dispose(), e.current = null);
                    return
                }
                if (e.current = (0, xc.default)(l, {
                        maxZoom: 1,
                        minZoom: 1,
                        initialZoom: 1,
                        zoomDoubleClickSpeed: 1,
                        smoothScroll: !1,
                        filterKey: function() {
                            return !0
                        }
                    }), e.current.on("pan", function() {
                        document.body.style.cursor = "grab", l.style.pointerEvents = "none"
                    }), e.current.on("panend", function() {
                        document.body.style.cursor = "auto", l.style.removeProperty("pointer-events")
                    }), !!l.children[0]) return l.addEventListener("mousedown", s), l.addEventListener("wheel", d), () => {
                    l.removeEventListener("mousedown", s), l.removeEventListener("wheel", d)
                }
            }, [o]),
            s = l => {
                var u, f;
                let c = l.target;
                (c == null ? void 0 : c.id) === "panzoom-container" ? (u = e.current) == null || u.resume(): (f = e.current) == null || f.pause()
            },
            d = l => {
                var u, f;
                let c = l.target;
                (c == null ? void 0 : c.id) === "panzoom-container" ? (u = e.current) == null || u.resume(): (f = e.current) == null || f.pause()
            };
        return oo.default.createElement("div", {
            style: {
                position: "absolute",
                inset: 0,
                overflow: "clip",
                backgroundColor: r ? "var(--monochrome-minus-4)" : i === "lightMode" ? "#F9F9F9" : "#3F424A",
                backgroundImage: r ? void 0 : "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7dG7DYBADANQJxexAiXSTXw9uyExBih34SOxQhr83Li2ASIiIiIiIvo7QbLW1jms1zijq9puSDaGLxhhuBPaqyKZTFK+/q6AZOJlg8shqv5ccAGZWRnaKiSy9QAAAABJRU5ErkJggg==)"
            }
        }, oo.default.createElement("div", {
            id: "panzoom-container",
            style: {
                width: "100%",
                height: "100%"
            },
            ref: a
        }, t, oo.default.createElement("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
            }
        }, oo.default.createElement(bc, {
            style: {
                visibility: n.startsWith("mobile") ? "visible" : "hidden"
            }
        }))))
    },
    tS = ag;
var Ir = t => {
    let {
        isEditorPreview: e,
        showWidgetTableau: o
    } = D(), n = (0, hn.useRef)(!1), r = e && !o;
    r && !n.current && (n.current = !0, Er(t)), (0, hn.useLayoutEffect)(() => {
        if (!r) {
            n.current && (n.current = !1, Pr());
            return
        }
        return n.current || (n.current = !0, Er(t)), () => {
            n.current = !1, Pr()
        }
    }, [r]), (0, hn.useLayoutEffect)(() => {
        r && Ri(t)
    }, [r, t])
};
var pt = () => {
        var t;
        return (t = document.getElementById(Mo)) != null ? t : void 0
    },
    Li = (t, {
        step: e,
        anchorOverride: o,
        anchorSelectorOverride: n
    }) => {
        var c, p, u;
        let r = ((c = t.nudgeRecorderToolBar.experience) == null ? void 0 : c.field) === "formFactor.anchor",
            a = ((p = t.nudgeRecorderToolBar.experience) == null ? void 0 : p.field) === "formFactor.advanceTrigger" && o != null ? o : e == null ? void 0 : e.formFactor.advanceTrigger,
            s = r && (u = n != null ? n : o) != null ? u : e.formFactor.anchorSelector || e.formFactor.anchor,
            d = a ? Ie(a) : void 0,
            l = s ? Ie(s) : void 0;
        return !l && t.isEditorPreview && !t.showWidgetTableau && (l = pt()), {
            targetElement: l,
            advanceTriggerElement: d
        }
    };
var Cc = A(O());
var wc = t => {
        window.open(t, "_blank")
    },
    Ft = (t, e) => {
        let o = D();
        return (0, Cc.useCallback)(r => {
            let i = o.callbacks["engagement-router"],
                {
                    target: a
                } = r;
            if (a instanceof HTMLAnchorElement && (t(a.href), i)) {
                r.preventDefault();
                try {
                    let {
                        hostname: s,
                        pathname: d,
                        search: l,
                        hash: c
                    } = new URL(a.href);
                    s === window.location.hostname ? (i(d + l + c), e == null || e()) : wc(a.href)
                } catch (s) {
                    Pe.warn(s), wc(a.href)
                }
            }
        }, [o.callbacks["engagement-router"], e])
    };
var le = A(O());
var sg = "ASSISTANCE_PREVIEW_ACTION",
    lg = ({
        nudgeVariantId: t,
        stepIndex: e,
        stepId: o,
        action: n,
        meta: r
    }) => {
        typeof window > "u" || !window.parent || window.parent === window || window.parent.postMessage({
            type: sg,
            payload: {
                nudgeVariantId: t,
                stepIndex: e,
                stepId: o,
                action: n,
                meta: r
            }
        }, "*")
    },
    Mr = ({
        nudgeVariantId: t,
        stepIndex: e,
        stepId: o
    }, n, r) => {
        t === void 0 || e === void 0 || lg({
            nudgeVariantId: t,
            stepIndex: e,
            stepId: o,
            action: n,
            meta: r
        })
    };
var kc = le.default.createContext(void 0),
    Dt = ({
        step: t,
        actor: e,
        renderMode: o,
        nudgeVariantId: n,
        stepIndex: r,
        disableAutoAdvance: i = !1,
        children: a
    }) => {
        var I;
        let s = (I = e == null ? void 0 : e.getSnapshot()) == null ? void 0 : I.context,
            {
                onExit: d
            } = ie(),
            [l, c] = (0, le.useState)((s == null ? void 0 : s.surveyResponses[t.id]) || {}),
            p = (0, le.useMemo)(() => {
                var E;
                return Object.values((E = s == null ? void 0 : s.surveyResponses) != null ? E : {}).reduce((P, C) => ({ ...P,
                    ...C
                }), {})
            }, [s == null ? void 0 : s.surveyResponses]),
            [u, f] = (0, le.useState)(new Set),
            m = (0, le.useRef)(null),
            g = (0, le.useCallback)(k => l[k], [l]),
            y = (0, le.useCallback)(k => {
                c(E => {
                    let P = { ...E
                    };
                    return P[k.blockId] = k, e == null || e.send({
                        type: "UPDATE_SURVEY_RESPONSE",
                        surveyResponse: P
                    }), P
                }), k && !i && !mo(t) && (m.current = setTimeout(() => {
                    d(() => {
                        if (o === 1) {
                            Mr({
                                nudgeVariantId: n,
                                stepIndex: r,
                                stepId: t.id
                            }, null);
                            return
                        }
                        e == null || e.send({
                            type: "ADVANCE"
                        })
                    })
                }, 200))
            }, [e, i, n, d, o, t, r]),
            h = (0, le.useCallback)(k => {
                c(E => {
                    let P = { ...E
                    };
                    return delete P[k], e == null || e.send({
                        type: "UPDATE_SURVEY_RESPONSE",
                        surveyResponse: P
                    }), P
                })
            }, [e]),
            S = (0, le.useCallback)(() => {
                c({}), e == null || e.send({
                    type: "UPDATE_SURVEY_RESPONSE",
                    surveyResponse: {}
                })
            }, [e]),
            b = (0, le.useCallback)(k => {
                f(k)
            }, []),
            M = (0, le.useCallback)(k => {
                f(E => {
                    let P = new Set(E);
                    return P.delete(k), P
                })
            }, []),
            x = (0, le.useCallback)(() => {
                f(new Set)
            }, []);
        return (0, le.useEffect)(() => {
            c((s == null ? void 0 : s.surveyResponses[t.id]) || {})
        }, [t.id, s == null ? void 0 : s.surveyResponses]), (0, le.useEffect)(() => () => {
            m.current && clearTimeout(m.current)
        }, []), le.default.createElement(kc.Provider, {
            value: {
                surveyResponses: l,
                allSurveyResponses: p,
                surveyResponse: g,
                setSurveyResponse: y,
                resetSurveyResponse: h,
                resetAllSurveyResponses: S,
                validationErrors: u,
                setValidationErrors: b,
                clearValidationError: M,
                clearAllValidationErrors: x
            }
        }, a)
    },
    Ne = () => {
        let t = (0, le.useContext)(kc);
        if (!t) throw new Error("useSurveyResponse must be used within a SurveyResponseProvider");
        return t
    };
var Ho = A(O());
var Tc = A(O());
var cg = {
        display: "flex",
        width: "var(--popover-width)",
        flexDirection: "column",
        alignItems: "flex-start",
        pointerEvents: "all",
        maxWidth: "var(--tooltip-max-width)",
        position: "relative",
        padding: "var(--layout-padding-v2, 0px)",
        borderRadius: "var(--layout-radius-card)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--border-primary)",
        background: "var(--background-primary)",
        boxShadow: "var(--layout-shadow) var(--layout-shadow-color)",
        a: {
            color: "var(--content-link)",
            textDecoration: "none",
            "&:hover": {
                color: "var(--content-link-hover)",
                textDecoration: "underline"
            }
        }
    },
    dg = {
        minWidth: "var(--popover-width)",
        width: "unset",
        maxWidth: "unset"
    },
    pg = w.div ``,
    ug = Tc.default.forwardRef(({
        children: t,
        title: e,
        variant: o,
        theme: n,
        ...r
    }, i) => T(pg, {
        ref: i,
        css: [cg, o === "survey" && dg].filter(Boolean),
        ...r
    }, t)),
    Ec = ug;
var fe = A(O());
var Pc = A(O());
var Nr = ({
    stepId: t,
    renderMode: e,
    actor: o,
    nudgeVariantId: n,
    stepIndex: r
}) => {
    let i = D(),
        {
            surveyResponses: a,
            resetAllSurveyResponses: s
        } = Ne(),
        {
            onExit: d
        } = ie(),
        l = (0, Pc.useCallback)((c, p) => {
            e === 1 ? Mr({
                nudgeVariantId: n,
                stepIndex: r,
                stepId: t
            }, c, p) : Ba(i, c, p, e, o), s()
        }, [i, o, n, r, t, a, e, s]);
    return (c, p) => {
        _n(c) === "stay_on_step" ? l(c, p) : d(() => l(c, p))
    }
};
var Oi = A(O());
var Bi = (t, e) => {
        var o;
        return ((o = t.organization) == null ? void 0 : o.branding) === "branded" && Dn(e)
    },
    Ic = ({
        step: t
    }) => {
        let e = D();
        return Bi(e, t) ? Oi.default.createElement(cr, {
            style: {
                justifyContent: "center",
                background: "none",
                padding: "0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))"
            }
        }, Oi.default.createElement(Vn, {
            onClick: () => jn()
        })) : null
    };
var _i = A(O());
var mg = ({ ...t
    }) => T(vo, {
        "aria-label": "Close",
        "data-testid": "nudge-step-close-button",
        ...t
    }, T(yo, null)),
    Ar = mg;
var Mc = t => {
        if (t) {
            if (t.type === "auto") return "auto";
            if (t.type === "full") return "100%";
            if (t.type === "fixed" && t.value != null) return `${t.value}px`
        }
    },
    ut = (t, {
        deviceType: e
    }) => {
        var n, r, i, a;
        let o = Na(t) ? (n = t.formFactor.footerLayout) != null ? n : "classic" : void 0;
        return e === "mobile" && t.formFactor.type !== "banner" ? t.formFactor.layout === "horizontal" ? {
            layout: "horizontal",
            footerLayout: o,
            mediaPosition: (r = t.formFactor.mediaPosition) != null ? r : "right"
        } : t.formFactor.layout === "vertical" || t.formFactor.layout === "showcase" || t.formFactor.layout === "classic" ? {
            layout: t.formFactor.layout,
            footerLayout: o,
            mediaPosition: void 0
        } : {
            layout: "classic",
            footerLayout: o,
            mediaPosition: void 0
        } : t.formFactor.layout === "horizontal" ? {
            layout: "horizontal",
            footerLayout: o,
            mediaPosition: (i = t.formFactor.mediaPosition) != null ? i : "right"
        } : {
            layout: (a = t.formFactor.layout) != null ? a : "classic",
            footerLayout: o
        }
    };
var Nc = ({
    nudge: t,
    step: e
}) => {
    var l, c;
    let o = Y(),
        {
            onExit: n
        } = ie(),
        {
            isMobileDevice: r
        } = X(),
        a = (((l = e.formFactor) == null ? void 0 : l.titleAlignment) || ((c = e.formFactor) == null ? void 0 : c.contentAlignment)) === "end",
        {
            layout: s
        } = ut(e, {
            deviceType: r ? "mobile" : "desktop"
        }),
        d = s === "classic" || s === "showcase" ? "padded" : "tight";
    return fo(t) ? _i.default.createElement(pr, {
        shouldMoveLeft: a,
        positionStyle: d
    }, _i.default.createElement(Ar, {
        "aria-label": `Close ${e.formFactor.type}`,
        style: rt(t.platform) ? {
            paddingRight: 0,
            paddingTop: 0
        } : {},
        theme: o,
        onClick: () => {
            n()
        }
    })) : null
};
var $c = A(O());
var yn = A(O());
var Ht = A(O());
var Ac = ({
    buttons: t,
    stepCounter: e
}) => {
    let {
        contentStyles: o
    } = we(), n = Se([t.primary, t.secondary, t.snooze]), r = !!e;
    if (n.length === 0 && !r) return null;
    if (n.length === 1 && !r) {
        let [i] = n;
        return Ht.default.createElement("div", {
            className: "amplitude-engagement-actions-bar-container actions-bar-layout-centered",
            style: {
                display: "flex",
                width: "100%",
                padding: "0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))"
            }
        }, Ht.default.createElement("div", {
            className: "amplitude-engagement-actions-bar actions-bar-layout-centered",
            style: {
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "var(--layout-gap)",
                justifyContent: "center",
                ...o
            }
        }, i))
    }
    return Ht.default.createElement("div", {
        className: "amplitude-engagement-actions-bar-container actions-bar-layout-centered",
        style: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))"
        }
    }, Ht.default.createElement("div", {
        className: "amplitude-engagement-actions-bar actions-bar-layout-centered",
        style: {
            display: "flex",
            alignItems: "center",
            gap: "var(--layout-gap)",
            width: "100%"
        }
    }, Ht.default.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "start",
            flex: 1,
            ...o
        }
    }, t.secondary), Ht.default.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center"
        }
    }, e), Ht.default.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "end",
            flex: 1,
            gap: "var(--layout-gap)",
            flexWrap: "wrap",
            ...o
        }
    }, t.snooze, t.primary)))
};
var Fi = A(O());
var fg = w.div `
  display: flex;
  flex: none;
  overflow: hidden;
  align-items: center;
  padding-block-start: 0px;
  padding-inline: var(--nudge-block-padding, var(--layout-padding));
  padding-block-end: var(--nudge-block-padding, var(--layout-padding));
  gap: var(--layout-gap);
  width: 100%;
`,
    Rc = fg;
var Di = ({
    buttons: t,
    stepCounter: e,
    wrapButtons: o
}) => {
    let {
        contentStyles: n
    } = we();
    return Se([...Object.values(t), e]).length === 0 ? null : Fi.default.createElement("div", {
        className: "amplitude-engagement-actions-bar-container actions-bar-layout-classic",
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))",
            gap: "var(--layout-gap)"
        }
    }, e, Fi.default.createElement(Rc, {
        "data-testid": "action-bar",
        className: "amplitude-engagement-actions-bar actions-bar-layout-classic",
        style: {
            justifyContent: "end",
            flexWrap: o ? "wrap" : void 0,
            padding: "0px",
            width: "auto",
            flex: "1",
            ...n
        }
    }, t.snooze, t.secondary, t.primary))
};
var Hi = A(O());
var Lc = ({
    buttons: t,
    stepCounter: e
}) => {
    let {
        contentStyles: o
    } = we();
    if (Se([...Object.values(t), e]).length === 0) return null;
    let n = !!(t.primary || t.secondary || t.snooze);
    return Hi.default.createElement("div", {
        className: "amplitude-engagement-actions-bar-container actions-bar-layout-stacked",
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "var(--layout-gap)",
            padding: "0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))"
        }
    }, n && Hi.default.createElement("div", {
        className: "amplitude-engagement-actions-bar actions-bar-layout-stacked",
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: "var(--layout-gap)",
            ...o
        }
    }, t.primary, t.secondary, t.snooze), e)
};
var Oc = ({
    footerLayout: t,
    buttons: e,
    stepCounter: o
}) => {
    var n, r, i, a, s, d, l, c, p, u, f, m;
    switch (t) {
        case "stacked":
            return yn.default.createElement(Lc, {
                stepCounter: o == null ? void 0 : o(),
                buttons: {
                    primary: (n = e.primary) == null ? void 0 : n.call(e),
                    secondary: (r = e.secondary) == null ? void 0 : r.call(e),
                    snooze: (i = e.snooze) == null ? void 0 : i.call(e)
                }
            });
        case "centered":
            return yn.default.createElement(Ac, {
                stepCounter: o == null ? void 0 : o(),
                buttons: {
                    primary: (a = e.primary) == null ? void 0 : a.call(e, {
                        minWidth: void 0,
                        width: void 0
                    }),
                    secondary: (s = e.secondary) == null ? void 0 : s.call(e, {
                        minWidth: void 0,
                        width: void 0
                    }),
                    snooze: (d = e.snooze) == null ? void 0 : d.call(e, {
                        minWidth: void 0,
                        width: void 0
                    })
                }
            });
        case "split":
            return yn.default.createElement(Di, {
                stepCounter: o == null ? void 0 : o(),
                buttons: {
                    primary: (l = e.primary) == null ? void 0 : l.call(e, {
                        minWidth: void 0,
                        width: void 0
                    }),
                    secondary: (c = e.secondary) == null ? void 0 : c.call(e, {
                        minWidth: void 0,
                        width: void 0
                    }),
                    snooze: (p = e.snooze) == null ? void 0 : p.call(e, {
                        minWidth: void 0,
                        width: void 0
                    })
                },
                wrapButtons: !0
            });
        default:
            return yn.default.createElement(Di, {
                wrapButtons: !1,
                stepCounter: o == null ? void 0 : o(),
                buttons: {
                    primary: (u = e.primary) == null ? void 0 : u.call(e),
                    secondary: (f = e.secondary) == null ? void 0 : f.call(e),
                    snooze: (m = e.snooze) == null ? void 0 : m.call(e)
                }
            })
    }
};
var vn = A(O());
var Bc = A(O());
var gg = w.div `
  flex-shrink: 0;
  color: var(--content-secondary);
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-normal);
`,
    hg = ({
        stepCount: t
    }) => Bc.default.createElement(gg, {
        "data-testid": "engagement-nudge-step-counter"
    }, t),
    _c = hg;
var zi = A(O());
var Rr = A(O());
var yg = ({
        children: t,
        buttonType: e,
        ...o
    }) => {
        switch (e) {
            case "secondary":
                return Rr.default.createElement(Gn, { ...o
                }, t);
            case "tertiary":
            case "snooze":
                return Rr.default.createElement(Un, { ...o
                }, t);
            case "primary":
            default:
                return Rr.default.createElement(Qo, { ...o
                }, t)
        }
    },
    Fc = yg;
var No = ({
    step: t,
    block: e,
    execNudgeAction: o,
    onPinGrace: n,
    style: r
}) => {
    var M, x, I, k;
    let i = D(),
        a = Y(),
        {
            contentStyles: s
        } = we(),
        {
            allSurveyResponses: d,
            surveyResponses: l,
            surveyResponse: c,
            setValidationErrors: p,
            clearAllValidationErrors: u
        } = Ne(),
        f = { ...d,
            ...l
        },
        m = go(i, t, {
            buttonMeta: e.meta,
            surveyResponses: f
        }),
        g = _n(m),
        y = g === "step_back",
        h = ((M = e.meta) == null ? void 0 : M.buttonType) === "snooze" || g === "snooze",
        S = t.content.filter(E => {
            var P, C;
            return Ia(E) && !!((C = (P = E.meta.validation) == null ? void 0 : P.required) != null && C.value)
        }),
        b = () => {
            if (y || h) {
                u(), o(m, e.meta);
                return
            }
            let E = S.filter(P => {
                let C = c(P.uuid);
                return typeof(C == null ? void 0 : C.value) > "u"
            }).map(P => P.uuid);
            if (E.length > 0) {
                p(new Set(E));
                return
            }
            u(), o(m, e.meta)
        };
    return zi.default.createElement("div", {
        style: {
            insetBlockStart: 0,
            height: "auto",
            width: "100%",
            border: "none",
            display: "flex",
            minWidth: 0,
            ...r
        }
    }, zi.default.createElement(Fc, {
        theme: a,
        onMouseDown: n,
        onClick: b,
        buttonType: (x = e.meta) == null ? void 0 : x.buttonType,
        style: {
            transitionDelay: "25ms",
            ...s
        },
        className: `amplitude-engagement-cta-button${(I=e.meta)!=null&&I.buttonType?` amplitude-engagement-cta-button__${e.meta.buttonType}`:""}`
    }, (k = e.meta) == null ? void 0 : k.label))
};
var Dc = t => {
        let e = t.content.find(o => {
            var n, r;
            return o.type === "button" && ((n = o.meta) == null ? void 0 : n.buttonType) !== "secondary" && ((r = o.meta) == null ? void 0 : r.buttonType) !== "snooze"
        });
        return e ? (o, n, r) => vn.default.createElement(No, {
            step: t,
            block: e,
            execNudgeAction: o,
            onPinGrace: r,
            style: n
        }) : null
    },
    Hc = t => {
        let e = t.content.find(o => {
            var n;
            return o.type === "button" && ((n = o.meta) == null ? void 0 : n.buttonType) === "secondary"
        });
        return e ? (o, n, r) => vn.default.createElement(No, {
            step: t,
            block: e,
            execNudgeAction: o,
            onPinGrace: r,
            style: n
        }) : null
    },
    zc = (t, e) => {
        let o = Fn(t) && (t.isSnoozableOnAllSteps || e === 0) ? {
            type: "button",
            meta: {
                buttonType: "snooze",
                label: t.snoozeLabel,
                action: {
                    type: "snooze",
                    ...t.snoozeDuration
                }
            }
        } : null;
        return o ? (n, r, i, a) => vn.default.createElement(No, {
            step: n,
            block: o,
            execNudgeAction: r,
            onPinGrace: a,
            style: i
        }) : null
    },
    Lr = (t, e) => {
        if (!(t.showStepCounter && e !== void 0)) return null;
        let n = t.stepCounterFormat === "verbose" ? `${e+1} of ${t.steps.length}` : `${e+1}/${t.steps.length}`;
        return () => vn.default.createElement(_c, {
            stepCount: n
        })
    };
var Wc = ({
    step: t,
    execNudgeAction: e,
    nudge: o,
    stepIndex: n,
    onPinGrace: r,
    hideStepCounter: i
}) => {
    let {
        isMobileDevice: a
    } = X(), s = ut(t, {
        deviceType: a ? "mobile" : "desktop"
    }), d = Dc(t), l = Hc(t), c = zc(o, n), p = Lr(o, n);
    return $c.default.createElement(Oc, {
        buttons: {
            primary: u => d == null ? void 0 : d(e, u, r),
            secondary: u => l == null ? void 0 : l(e, u, r),
            snooze: u => c == null ? void 0 : c(t, e, u, r)
        },
        stepCounter: i ? null : p,
        ...s
    })
};
var se = A(O());
var bn = w.div `
  width: 100%;
  display: flex;
  /* v2 themes zero this out (the shell owns the interior padding);
     legacy themes fall back to --layout-padding. (GSM-1127) */
  padding: var(--nudge-block-padding, var(--layout-padding));
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 2px;
`;
var je = A(O());
var vg = ({
        title: t,
        markdown: e,
        close: o,
        media: n
    }) => je.default.createElement(je.default.Fragment, null, je.default.createElement(bn, null, t, e), o, n),
    bg = ({
        title: t,
        markdown: e,
        close: o,
        media: n
    }) => je.default.createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-gap)"
        }
    }, je.default.createElement("div", {
        style: {
            padding: "var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding)) 0"
        }
    }, t), n, o, je.default.createElement("div", {
        style: {
            padding: "0 var(--nudge-block-padding, var(--layout-padding))"
        }
    }, e)),
    xg = ({
        layout: t,
        ...e
    }) => {
        switch (t) {
            case "showcase":
                return je.default.createElement(bg, { ...e
                });
            case "classic":
            default:
                return je.default.createElement(vg, { ...e
                })
        }
    },
    Vc = ({
        step: t,
        maxContentWidth: e,
        isCarousel: o,
        ...n
    }) => {
        let r = je.default.useMemo(() => {
            if (o) return {
                width: "100%"
            };
            if (t != null && t.content) {
                let i = t.content.find(Rt);
                if (i != null && i.meta && "options" in i.meta) return i.meta.options === 10 ? {
                    maxWidth: "420px",
                    minWidth: e
                } : {
                    maxWidth: e
                }
            }
            return {
                maxWidth: e
            }
        }, [t, e, o]);
        return je.default.createElement("div", {
            style: { ...r,
                display: "var(--nudge-content-display, block)",
                flexDirection: "column",
                gap: "var(--nudge-content-gap, 0px)"
            }
        }, je.default.createElement(xg, { ...n
        }))
    };
var no = "var(--layout-padding-v2, 0px)",
    Pt = "calc(-1 * var(--layout-padding-v2, 0px))",
    jc = ({
        languageDirection: t,
        close: e,
        title: o,
        markdown: n,
        media: r,
        footer: i,
        branding: a,
        maxContentWidth: s,
        maxHeight: d,
        step: l,
        isCarousel: c,
        hasFixedHeight: p,
        contentLayout: u = "classic"
    }) => se.default.createElement("div", {
        dir: t,
        style: {
            width: "100%",
            ...(c || p) && {
                height: "100%"
            },
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-gap)",
            ...!c && {
                maxHeight: d
            },
            pointerEvents: "all"
        }
    }, se.default.createElement("div", {
        style: {
            overflowY: "auto",
            ...p && {
                flex: 1,
                minHeight: 0
            }
        }
    }, se.default.createElement(Vc, {
        layout: u,
        title: o,
        markdown: n,
        close: e,
        media: r,
        isCarousel: c,
        maxContentWidth: s,
        step: l
    })), c && se.default.createElement("div", {
        style: {
            flex: 1
        }
    }), i, a),
    Sg = (t, e) => t === "right" && e === "ltr" || t === "left" && e === "rtl" ? "row" : "row-reverse",
    wg = ({
        languageDirection: t,
        close: e,
        title: o,
        markdown: n,
        media: r,
        footer: i,
        branding: a,
        columnWidth: s,
        mediaPosition: d,
        maxHeight: l,
        hasFixedHeight: c,
        hasFullBleedMedia: p,
        stepCounter: u
    }) => se.default.createElement("div", {
        dir: t,
        style: {
            display: "flex",
            flexDirection: "column",
            maxWidth: "100%",
            gap: "var(--nudge-content-gap, 0px)",
            ...u && {
                height: "100%"
            },
            ...c && {
                height: "100%"
            }
        }
    }, se.default.createElement("div", {
        style: {
            display: "flex",
            alignItems: "stretch",
            flexDirection: Sg(d, t),
            maxHeight: l,
            gap: "var(--nudge-content-gap, 0px)",
            ...c && {
                flex: 1,
                minHeight: 0
            }
        }
    }, se.default.createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: s,
            minWidth: 0,
            gap: "var(--layout-gap)",
            pointerEvents: "all"
        }
    }, se.default.createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            ...c && {
                flex: 1,
                minHeight: 0
            }
        }
    }, se.default.createElement(bn, null, o, n), se.default.createElement("div", {
        style: {
            zIndex: 1
        }
    }, e)), i), se.default.createElement("div", {
        style: {
            width: s,
            minWidth: 0,
            ...p && { ...s !== "auto" && {
                    width: `calc(${s} + ${no})`
                },
                marginTop: Pt,
                [d === "left" ? "marginLeft" : "marginRight"]: Pt,
                ...a == null && {
                    marginBottom: Pt
                }
            },
            ...c && {
                display: "flex",
                flexDirection: "column"
            }
        }
    }, r)), u && se.default.createElement(se.default.Fragment, null, se.default.createElement("div", {
        style: {
            flex: 1
        }
    }), se.default.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            padding: "0px var(--layout-padding-v2, var(--layout-padding)) var(--layout-padding-v2, var(--layout-padding))"
        }
    }, u)), a),
    Cg = ({
        languageDirection: t,
        close: e,
        title: o,
        markdown: n,
        media: r,
        inputs: i,
        footer: a,
        branding: s,
        maxHeight: d,
        hasFixedHeight: l,
        hasFullBleedMedia: c
    }) => se.default.createElement("div", {
        style: {
            borderRadius: "var(--layout-radius-card)",
            overflow: "hidden",
            width: "100%",
            ...l && {
                height: "100%"
            },
            ...c && {
                margin: `${Pt} ${Pt} 0`,
                padding: `${no} ${no} 0`,
                width: `calc(100% + 2 * ${no})`,
                ...l && {
                    height: `calc(100% + ${no})`
                }
            }
        }
    }, se.default.createElement("div", {
        dir: t,
        style: {
            width: "100%",
            ...l && {
                height: "100%"
            },
            display: "flex",
            flexDirection: "column",
            gap: "var(--layout-gap)",
            maxHeight: d,
            pointerEvents: "all"
        }
    }, se.default.createElement("div", {
        style: {
            overflowY: "auto",
            display: "var(--nudge-content-display, block)",
            flexDirection: "column",
            gap: "var(--nudge-content-gap, 0px)",
            ...c && {
                margin: `${Pt} ${Pt} 0`,
                padding: `${no} ${no} 0`
            },
            ...l && {
                flex: 1,
                minHeight: 0
            }
        }
    }, e, c ? se.default.createElement("div", {
        style: {
            margin: `${Pt} ${Pt} 0`,
            display: "var(--nudge-content-display, block)",
            flexDirection: "column",
            gap: "var(--nudge-content-gap, 0px)"
        }
    }, r) : r, se.default.createElement(bn, null, o, n), i), a, s)),
    Gc = ({
        layout: t,
        mediaPosition: e,
        columnWidth: o,
        maxHeight: n,
        languageDirection: r,
        step: i,
        isCarousel: a,
        hasFixedHeight: s,
        stepCounter: d,
        ...l
    }) => {
        let c = !a && !!(i != null && i.content.filter(Rt).some(p => p.type === "image" || p.type === "video"));
        switch (t) {
            case "vertical":
                return se.default.createElement(Cg, {
                    maxHeight: n,
                    languageDirection: r,
                    hasFixedHeight: s,
                    hasFullBleedMedia: c,
                    ...l
                });
            case "horizontal":
                return se.default.createElement(wg, {
                    maxHeight: n,
                    languageDirection: r,
                    columnWidth: o,
                    mediaPosition: e,
                    hasFixedHeight: s,
                    hasFullBleedMedia: c,
                    stepCounter: d,
                    ...l
                });
            case "showcase":
                return se.default.createElement(jc, {
                    maxHeight: n,
                    languageDirection: r,
                    maxContentWidth: o,
                    step: i,
                    isCarousel: a,
                    hasFixedHeight: s,
                    contentLayout: "showcase",
                    ...l
                });
            case "classic":
            default:
                return se.default.createElement(jc, {
                    maxHeight: n,
                    languageDirection: r,
                    maxContentWidth: o,
                    step: i,
                    isCarousel: a,
                    hasFixedHeight: s,
                    contentLayout: "classic",
                    ...l
                })
        }
    };
var $i = A(O());
var mt = A(O());
var It = A(O()),
    kg = 50,
    Uc = ({
        content: t,
        play: e,
        speed: o = kg,
        onComplete: n
    }) => {
        let [r, i] = (0, It.useState)(""), [a, s] = (0, It.useState)(0), [d, l] = (0, It.useState)([]);
        return (0, It.useEffect)(() => {
            if (e) {
                let p = new DOMParser().parseFromString(t, "text/html"),
                    u = g => g instanceof Element ? {
                        type: "element",
                        tagName: g.tagName.toLowerCase(),
                        children: Array.from(g.childNodes).map(u)
                    } : g instanceof Text ? {
                        type: "text",
                        text: g.textContent || ""
                    } : null,
                    f = Array.from(p.body.childNodes).map(u),
                    m = Zc(f);
                l(m)
            }
        }, [e, t]), (0, It.useEffect)(() => {
            let c = () => {
                a < d.length ? (i(p => p + d[a]), s(p => p + 1)) : n && n()
            };
            if (d.length > 0) {
                let p = setTimeout(c, o);
                return () => clearTimeout(p)
            }
        }, [d, a, o, n]), It.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: r
            }
        })
    },
    Zc = t => {
        let e = [];
        return t.forEach(o => {
            (o == null ? void 0 : o.type) === "text" ? e.push(...o.text.split("")): (o == null ? void 0 : o.type) === "element" && (e.push(`<${o.tagName}>`), e.push(...Zc(o.children)), e.push(`</${o.tagName}>`))
        }), e
    };
var ro = ({
        textAnimation: t,
        content: e,
        contentType: o,
        onComplete: n,
        play: r
    }) => {
        let i = (0, mt.useRef)(!1);
        return t === "typewriter" && !i.current ? mt.default.createElement(Uc, {
            content: e,
            play: r,
            onComplete: () => {
                n == null || n(), i.current = !0
            }
        }) : mt.default.createElement(Tg, {
            content: e,
            contentType: o
        })
    },
    Tg = ({
        content: t,
        contentType: e
    }) => {
        let {
            setStepEffectComplete: o
        } = we();
        return (0, mt.useEffect)(() => {
            o(!0)
        }, []), e === "text" ? mt.default.createElement(mt.default.Fragment, null, t) : mt.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: t
            }
        })
    };
var qc = ({
    content: t,
    textAnimation: e,
    handleContentLinkClick: o,
    contentAlignment: n,
    isTitleComplete: r,
    setStepEffectComplete: i
}) => {
    if (!t) return null;
    let a = n || "start";
    return $i.default.createElement(ar, {
        tabIndex: 0,
        role: "group",
        onClick: o,
        style: (() => {
            switch (a) {
                case "center":
                    return {
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    };
                case "end":
                    return {
                        textAlign: "end",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end"
                    };
                case "start":
                default:
                    return {
                        textAlign: "start"
                    }
            }
        })(),
        className: "amplitude-engagement-content"
    }, $i.default.createElement(ro, {
        textAnimation: e,
        content: Ze(t),
        contentType: "html",
        play: r,
        onComplete: () => i(!0)
    }))
};
var Dr = A(O());
var yt = A(O());
var io = A(O());
var Mt = A(O());
var Kc = w.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px var(--nudge-block-padding, var(--layout-padding)) var(--nudge-block-padding, var(--layout-padding))
    var(--nudge-block-padding, var(--layout-padding));
`,
    xn = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  border-radius: var(--layout-radius-button);
  overflow: hidden;
`,
    Eg = w(xn)
`
  border-radius: 0;
`, Pg = w(xn)
`
  height: 100%;
  border-radius: calc(var(--layout-radius-card) - 1px) 0 0 calc(var(--layout-radius-card) - 1px);
`, Ig = w(xn)
`
  height: 100%;
  border-radius: 0 calc(var(--layout-radius-card) - 1px) calc(var(--layout-radius-card) - 1px) 0;
`, Mg = w.img `
  all: unset;
  box-sizing: border-box;
  height: auto;
  width: 100%;
  display: block;
  transform-origin: center;
`, Sn = w.div `
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #f7f4ff 0%, #d5caff 100%);
  transform-origin: center;
`, Ng = w(Sn)
`
  border-radius: 0;
`, Ag = w(Sn)
`
  overflow: hidden;
  border-radius: var(--layout-radius-button) 0 0 var(--layout-radius-button);
`, Rg = w(Sn)
`
  overflow: hidden;
  border-radius: 0 var(--layout-radius-button) var(--layout-radius-button) 0;
`, Lg = {
    "top-block": {
        OuterContainer: Mt.default.Fragment,
        Container: Eg,
        PlaceholderContainer: Ng
    },
    "full-height-left": {
        OuterContainer: Mt.default.Fragment,
        Container: Pg,
        PlaceholderContainer: Ag
    },
    "full-height-right": {
        OuterContainer: Mt.default.Fragment,
        Container: Ig,
        PlaceholderContainer: Rg
    },
    tall: {
        OuterContainer: Kc,
        Container: xn,
        PlaceholderContainer: Sn
    },
    default: {
        OuterContainer: Kc,
        Container: xn,
        PlaceholderContainer: Sn
    }
}, Yc = ({
    src: t,
    altText: e,
    variant: o = "default",
    style: n,
    onClick: r
}) => {
    let {
        OuterContainer: i,
        Container: a,
        PlaceholderContainer: s
    } = Lg[o], d = r ? {
        onClick: r,
        role: "button",
        tabIndex: 0,
        style: {
            cursor: "pointer"
        },
        onKeyDown: p => {
            (p.key === "Enter" || p.key === " ") && (p.preventDefault(), r())
        }
    } : {}, l = () => o === "full-height-left" || o === "full-height-right" ? "100%" : o === "tall" ? "220px" : "168px", c = dr(t);
    return Mt.default.createElement(i, null, Mt.default.createElement(a, {
        className: "amplitude-engagement-image",
        style: n
    }, c.length > 0 ? Mt.default.createElement(Mg, {
        "data-testid": "engagement-nudge-image",
        src: c,
        alt: e,
        ...d
    }) : Mt.default.createElement(s, {
        "data-testid": "engagement-nudge-image-placeholder",
        style: {
            height: l()
        }
    }, Mt.default.createElement(ns, {
        width: "24px",
        height: "24px"
    }))))
};
var cC = async (t, e) => {
        var n;
        let o = () => {};
        switch ((n = e == null ? void 0 : e.meta) == null ? void 0 : n.type) {
            case "intercom":
                o = () => window.Intercom("showNewMessage");
                break;
            case "helpscout":
                o = () => window.Beacon("open");
                break;
            case "freshdesk":
                o = () => window.FreshworksWidget("open");
                break;
            case "freshchat":
                {
                    o = async () => window.fcWidget.open();
                    break
                }
            case "gist":
                o = () => window.gist.chat("open");
                break;
            case "crisp":
                o = () => {
                    window.$crisp.push(["do", "chat:open"]), window.$crisp.push(["do", "chat:show"])
                };
                break;
            case "talkdesk_v2":
                o = () => {
                    window.webchat.open()
                };
                break;
            case "zendesk":
                {
                    o = () => {
                        try {
                            window.zE("messenger", "open")
                        } catch (r) {
                            window.zE("webWidget", "open"), window.zE("webWidget", "show")
                        }
                    };
                    break
                }
            case "liveChat":
                o = () => window.LiveChatWidget.call("maximize");
                break;
            case "olark":
                o = () => window.olark("api.box.expand");
                break;
            case "hubspot":
                o = () => window.HubSpotConversations.widget.open();
                break;
            case "drift":
                o = () => window.drift.api.openChat();
                break;
            case "pylon":
                o = () => window.Pylon("show")
        }
        try {
            await o()
        } catch (r) {
            Pe.warn(r)
        }
    },
    Xc = (t, e, o) => {
        let n = qo(e.value, t, !0);
        if (o) {
            window.open(n, "_blank");
            return
        }
        switch (e.operation) {
            case "router":
                {
                    let r = t.callbacks["engagement-router"];
                    if (r) r(n);
                    else throw new Aa("Link is of router type, but router is not defined.");
                    break
                }
            case "self":
                window.open(n, "_self");
                break;
            case "blank":
                window.open(n, "_blank");
                break;
            default:
                window.open(n, "_blank");
                break
        }
    },
    dC = (t, e) => {};
var Og = 3e3,
    Bg = t => io.default.createElement("div", {
        style: {
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "min(90%, 420px)",
            padding: "10px 14px",
            borderRadius: 8,
            background: "rgba(17, 17, 17, 0.92)",
            color: "#fff",
            fontFamily: '"IBM Plex Sans", Helvetica, Arial, sans-serif',
            fontSize: 13,
            lineHeight: 1.4,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            pointerEvents: "none",
            zIndex: 2147483647,
            overflowWrap: "anywhere"
        }
    }, "This image links to: ", t),
    Qc = ({
        block: t,
        variant: e,
        style: o,
        onLinkClick: n
    }) => {
        var l;
        let r = D(),
            {
                action: i
            } = t.meta,
            a = !!(i != null && i.value),
            s = (0, io.useRef)(),
            d = (0, io.useCallback)(() => {
                if (!(!i || !i.value)) try {
                    if (r.isEditorPreview) {
                        let p = qo(i.value, r);
                        n == null || n(p);
                        let u = `image-link-preview-${r.instanceName}`;
                        hc(u, {
                            asChild: !0,
                            instanceName: r.instanceName,
                            element: Bg(p)
                        }), s.current !== void 0 && window.clearTimeout(s.current), s.current = window.setTimeout(() => yc(u), Og);
                        return
                    }
                    let c = qo(i.value, r, !0);
                    n == null || n(c), Xc(r, i)
                } catch (c) {
                    Pe.warn(c)
                }
            }, [r, i, n]);
        return io.default.createElement(Yc, {
            src: t.meta.src,
            altText: (l = t.meta.altText) != null ? l : "",
            variant: e,
            onClick: a ? d : void 0,
            style: o
        })
    };
var Ge = A(O());
var wn = A(O());
var Jc = w.div `
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: var(--layout-radius-button);
  border: 1px solid var(--form-control-border-color);
  background: var(--form-control-background);

  &:hover {
    border: 1px solid var(--form-control-border-color-hover);
  }
`,
    _g = w(Jc)
`
  background: var(--button-primary-background);
  border: 1px solid var(--button-primary-background);

  &:hover {
    border: 1px solid var(--button-primary-background);
  }
`, Fg = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--layout-padding);
  height: var(--layout-padding);
  color: var(--base-white);
`, Dg = ({
    selected: t
}) => t ? wn.default.createElement(_g, null, wn.default.createElement(Fg, null, wn.default.createElement(Yo, null))) : wn.default.createElement(Jc, null), ed = Dg;
var td = {
        display: "flex",
        width: "100%",
        minHeight: "var(--form-control-height)",
        height: "auto",
        padding: "var(--form-control-padding-x)",
        alignItems: "center",
        gap: "var(--form-control-gap)",
        flexShrink: 0,
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        color: "var(--content-primary)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
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
            borderColor: "var(--form-control-border-color)",
            background: "var(--form-control-background)",
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    od = {
        borderColor: "var(--base-accent)",
        background: "var(--form-control-active-background)",
        fill: "var(--button-primary-background)",
        "&:hover": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        },
        "&:focus": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        }
    },
    Hg = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    nd = "checkboxOption",
    Ao = ({
        theme: t,
        selected: e,
        hasError: o,
        onClick: n,
        children: r
    }) => {
        let {
            overrides: i
        } = de(nd, t);
        return T(at, {
            "data-testid": "survey-option",
            customCss: Se([i, W(td), e && W(od), o && !e && W(Hg)]),
            onClick: n,
            "data-selected": e,
            "aria-checked": e,
            role: "checkbox",
            className: "amplitude-engagement-checkbox-option"
        }, T(ed, {
            selected: e
        }), r)
    };
Ao.slug = nd;
Ao.styles = td;
Ao.activeStyles = od;
Ao.renderMock = (t, e, o, n) => T(Ao, {
    theme: {
        theme: t,
        mode: e
    },
    selected: !!o,
    onClick: n
}, "Checkbox option");
var rd = Ao;
var ao = A(O());
var zg = () => ao.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "6",
        height: "6",
        viewBox: "0 0 6 6",
        fill: "none"
    }, ao.default.createElement("circle", {
        cx: "3",
        cy: "3",
        r: "2.5",
        fill: "white"
    })),
    id = w.div `
  display: flex;
  width: 16px;
  height: 16px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 1000px;
  border: 1px solid var(--form-control-border-color);
  background: var(--form-control-background);

  &:hover {
    border: 1px solid var(--form-control-border-color-hover);
  }
`,
    $g = w(id)
`
  background: var(--button-primary-background);
  border: 1px solid var(--button-primary-background);

  &:hover {
    border: 1px solid var(--button-primary-background);
  }
`, Wg = w(De)
`
  width: var(--layout-padding);
  height: var(--layout-padding);
  color: var(--base-white);
`, Vg = ({
    selected: t
}) => t ? ao.default.createElement($g, null, ao.default.createElement(Wg, null, ao.default.createElement(zg, null))) : ao.default.createElement(id, null), ad = Vg;
var sd = {
        display: "flex",
        width: "100%",
        minHeight: "var(--form-control-height)",
        height: "auto",
        padding: "var(--form-control-padding-x)",
        alignItems: "center",
        gap: "var(--form-control-gap)",
        flexShrink: 0,
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        color: "var(--content-primary)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
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
            borderColor: "var(--form-control-border-color)",
            background: "var(--form-control-background)",
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    ld = {
        borderColor: "var(--base-accent)",
        background: "var(--form-control-active-background)",
        fill: "var(--button-primary-background)",
        "&:hover": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        },
        "&:focus": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        }
    },
    jg = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    cd = "radioOption",
    Ro = ({
        theme: t,
        selected: e,
        hasError: o,
        onClick: n,
        children: r
    }) => {
        let {
            overrides: i
        } = de(cd, t);
        return T(at, {
            "data-testid": "survey-option",
            customCss: Se([i, W(sd), e && W(ld), o && !e && W(jg)]),
            onClick: n,
            "data-selected": e,
            "aria-checked": e,
            role: "checkbox",
            className: "amplitude-engagement-radio-option"
        }, T(ad, {
            selected: e
        }), r)
    };
Ro.slug = cd;
Ro.styles = sd;
Ro.activeStyles = ld;
Ro.renderMock = (t, e, o, n) => T(Ro, {
    theme: {
        theme: t,
        mode: e
    },
    selected: !!o,
    onClick: n
}, "Radio option");
var dd = Ro;
var pd = A(O());
var Gg = w.div `
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--layout-gap);
  align-self: stretch;
  margin-block-start: calc(-1 * var(--form-control-focus-ring-width));
  padding-block-start: var(--form-control-focus-ring-width);
  /* v2 themes zero these out — the content wrapper's flex gap and the shell
     padding own the spacing instead (GSM-1127) */
  padding-block-end: var(--nudge-block-padding, var(--layout-gap));
  padding-inline: var(--nudge-block-padding, var(--layout-padding));

  &:focus {
    box-shadow: 0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color);
  }

  &:focus-visible {
    outline: none;
  }
`,
    Ug = ({
        children: t,
        ...e
    }) => pd.default.createElement(Gg, { ...e
    }, t),
    ft = Ug;
var ud = A(O()),
    Zg = t => {
        let e = [...t];
        for (let o = e.length - 1; o > 0; o--) {
            let n = Math.floor(Math.random() * (o + 1));
            [e[o], e[n]] = [e[n], e[o]]
        }
        return e
    },
    Or = (t, e, o, n) => (0, ud.useMemo)(() => {
        let r = {
                text: n || "Other",
                original_index: t.length
            },
            i = t.map((d, l) => ({
                text: d,
                original_index: l
            })),
            a = e ? Zg(i) : i;
        return o ? [...a, r] : a
    }, [t, e, o]);
var md = A(O());
var qg = w.div `
  display: flex;
  width: 100%;
  align-items: flex-start;
  color: var(--content-secondary);
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-normal);
`,
    Kg = ({
        label: t
    }) => md.default.createElement(qg, {
        className: "amplitude-engagement-survey-prompt"
    }, t),
    gt = Kg;
var et = A(O()),
    zt = ({
        value: t,
        onCommit: e
    }) => {
        let [o, n] = (0, et.useState)(!1), [r, i] = (0, et.useState)(t), a = (0, et.useRef)(!1);
        (0, et.useEffect)(() => {
            a.current || i(t)
        }, [t]);
        let s = (0, et.useCallback)(c => {
                let p = c.currentTarget.value;
                if (a.current) {
                    i(p);
                    return
                }
                e(p)
            }, [e]),
            d = (0, et.useCallback)(c => {
                a.current = !0, n(!0), i(c.currentTarget.value)
            }, []),
            l = (0, et.useCallback)(c => {
                a.current = !1, n(!1);
                let p = c.currentTarget.value;
                i(p), e(p)
            }, [e]);
        return {
            value: o ? r : t,
            onChange: s,
            onCompositionStart: d,
            onCompositionEnd: l
        }
    };
var fd = A(O());
var ht = ({
    message: t
}) => fd.default.createElement("div", {
    style: {
        color: "var(--content-error, #ff3030)",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-small)",
        fontWeight: "var(--font-weight-medium)",
        lineHeight: "var(--font-line-height-snug)",
        marginTop: "-9px"
    },
    "data-testid": "nudge-survey-field-error",
    role: "alert"
}, t);
var gd = ({
    uuid: t,
    handleDropdownInteraction: e,
    isMultiSelect: o,
    options: n,
    isOrderRandom: r,
    otherOption: i,
    hasStepActions: a,
    label: s,
    ariaLabel: d,
    errorMessage: l
}) => {
    var P, C;
    let c = Y(),
        {
            surveyResponse: p,
            setSurveyResponse: u,
            resetSurveyResponse: f,
            validationErrors: m,
            clearValidationError: g
        } = Ne(),
        y = m.has(t),
        h = p(t),
        S = (h == null ? void 0 : h.type) === "string" && (P = h.otherText) != null ? P : "",
        b = (0, Ge.useMemo)(() => {
            let N = h == null ? void 0 : h.value;
            return Array.isArray(N) ? N : N === null ? [] : typeof N == "number" ? [N] : []
        }, [h]),
        M = Or(n, r, (C = i == null ? void 0 : i.enabled) != null ? C : !1, i == null ? void 0 : i.label),
        x = (0, Ge.useCallback)(N => b.includes(N), [b]),
        I = (0, Ge.useCallback)(N => {
            e();
            let _ = M.find((B, $) => $ === N);
            if (_)
                if (o) {
                    let B = x(_.original_index) ? b.filter(V => V !== _.original_index) : [...b, _.original_index],
                        $ = B.map(V => i != null && i.enabled && V === n.length ? i.label : n[V]).filter(V => V !== void 0);
                    B.length > 0 ? (u({
                        blockId: t,
                        type: "string",
                        value: B,
                        stringResponse: $,
                        label: s
                    }), g(t)) : f(t)
                } else u({
                    blockId: t,
                    type: "string",
                    value: _.original_index,
                    stringResponse: _.text,
                    label: s
                }), g(t)
        }, [o, b, u, f, M, t, e, n, i, g, s]),
        k = zt({
            value: S,
            onCommit: N => {
                (h == null ? void 0 : h.type) === "string" && u({ ...h,
                    otherText: N
                })
            }
        }),
        E = b.some(N => N === n.length);
    return Ge.default.createElement(ft, {
        "aria-label": d || "Select an option as survey response",
        "aria-invalid": y,
        className: "amplitude-engagement-list"
    }, s && Ge.default.createElement(gt, {
        label: s
    }), M.map((N, _) => o ? Ge.default.createElement(rd, {
        theme: c,
        key: String(N.original_index),
        selected: x(N.original_index),
        hasError: y,
        onClick: () => I(_)
    }, N.text) : Ge.default.createElement(dd, {
        theme: c,
        key: String(N.original_index),
        selected: x(N.original_index),
        hasError: y,
        onClick: () => I(_)
    }, N.text)), (i == null ? void 0 : i.enabled) && E && a && Ge.default.createElement(bo, {
        "data-testid": "nudge-survey-list-other-text",
        theme: c,
        value: k.value,
        onChange: k.onChange,
        onCompositionStart: k.onCompositionStart,
        onCompositionEnd: k.onCompositionEnd,
        "aria-label": i.placeholderLabel,
        placeholder: i.placeholderLabel,
        onFocus: () => {
            e()
        },
        onClick: N => {
            N.stopPropagation(), e()
        }
    }), y && l && Ge.default.createElement(ht, {
        message: l
    }))
};
var Ae = A(O());
var hd = A(O());
var Wi = {
        appearance: "none",
        display: "flex",
        minHeight: "var(--form-control-height)",
        height: "auto",
        paddingBlock: "0px",
        paddingInline: "var(--form-control-padding-x)",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1 0 0",
        alignSelf: "stretch",
        cursor: "pointer",
        userSelect: "none",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        color: "var(--content-primary)",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-medium)",
        lineHeight: "var(--font-line-height-normal)",
        whiteSpace: "normal",
        "&:hover": {
            background: "var(--form-control-background-hover)",
            borderColor: "var(--form-control-border-color-hover)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            borderColor: "var(--base-accent)",
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            background: "var(--form-control-background-hover)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    yd = w.div `
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,
    vd = w(De)
`
  position: absolute;
  inset-inline-end: var(--form-control-padding-x);
  color: var(--content-secondary);
  pointer-events: none;
`, Vi = "select", bd = w.select `
  all: unset;
  box-sizing: border-box;
  width: 100%;
`, ji = w.option `
  all: unset;
  box-sizing: border-box;
`, Yg = {
    borderColor: "var(--content-error, #ff3030)",
    "&:hover": {
        borderColor: "var(--content-error, #ff3030)"
    }
}, Xg = Object.assign(hd.default.forwardRef(({
    theme: t,
    hasError: e,
    children: o,
    ...n
}, r) => {
    let {
        overrides: i
    } = de(Vi, t);
    return T(yd, {
        css: i,
        className: "amplitude-engagement-select"
    }, T(bd, {
        css: [i, W(Wi), e && W(Yg)],
        ref: r,
        ...n
    }, o), T(vd, null, T(Xo, null)))
}), {
    slug: Vi,
    styles: Wi,
    renderMock: (t, e) => T(Qg, {
        theme: t,
        mode: e
    })
}), Qg = ({
    theme: t,
    mode: e
}) => {
    let {
        overrides: o
    } = de(Vi, {
        theme: t,
        mode: e
    });
    return T(yd, {
        css: o,
        className: "amplitude-engagement-select"
    }, T(bd, {
        css: [o, W(Wi)],
        className: "amplitude-engagement-select-input"
    }, T(ji, {
        key: "select"
    }, "Select option...")), T(vd, null, T(Xo, null)))
}, xd = Xg;
var Sd = ({
    uuid: t,
    handleDropdownInteraction: e,
    hasStepActions: o,
    options: n,
    isOrderRandom: r,
    otherOption: i,
    label: a,
    ariaLabel: s,
    errorMessage: d
}) => {
    var k, E, P;
    let l = Y(),
        {
            surveyResponse: c,
            setSurveyResponse: p,
            validationErrors: u,
            clearValidationError: f
        } = Ne(),
        m = u.has(t),
        g = c(t),
        y = (g == null ? void 0 : g.type) === "string" && (k = g.otherText) != null ? k : "",
        [h, S] = (0, Ae.useState)(null),
        b = (0, Ae.useRef)(null),
        M = Or(n, r, (E = i == null ? void 0 : i.enabled) != null ? E : !1, i == null ? void 0 : i.label),
        x = (0, Ae.useMemo)(() => {
            if (!h) return "-1";
            let C = M.findIndex(N => N.original_index === h.original_index);
            return C !== -1 ? C.toString() : "-1"
        }, [h, M]),
        I = zt({
            value: y,
            onCommit: C => {
                (g == null ? void 0 : g.type) === "string" && p({ ...g,
                    otherText: C
                })
            }
        });
    return Ae.default.createElement(ft, {
        className: "amplitude-engagement-list-dropdown"
    }, a && Ae.default.createElement(gt, {
        label: a
    }), Ae.default.createElement(xd, {
        "data-testid": "nudge-survey-list-dropdown",
        onClick: e,
        onFocus: e,
        value: x,
        theme: l,
        hasError: m,
        ref: b,
        "aria-label": s || "Select an option as survey response",
        "aria-invalid": m,
        "data-selected": (P = h == null ? void 0 : h.text) != null ? P : "",
        onChange: C => {
            var _, B;
            let N = M.find(($, V) => V.toString() === C.target.value);
            p({
                blockId: t,
                type: "string",
                value: (_ = N == null ? void 0 : N.original_index) != null ? _ : -1,
                stringResponse: (B = N == null ? void 0 : N.text) != null ? B : "",
                label: a
            }), S(N), N && f(t)
        }
    }, Ae.default.createElement("option", {
        value: "-1"
    }, "Select..."), M.map((C, N) => Ae.default.createElement(ji, {
        key: C.original_index,
        value: N.toString()
    }, C.text))), (i == null ? void 0 : i.enabled) && (h == null ? void 0 : h.original_index) === n.length && o && Ae.default.createElement(bo, {
        "data-testid": "nudge-survey-list-other-text",
        theme: l,
        value: I.value,
        onChange: I.onChange,
        onCompositionStart: I.onCompositionStart,
        onCompositionEnd: I.onCompositionEnd,
        "aria-label": i.placeholderLabel,
        placeholder: i.placeholderLabel,
        onFocus: () => {
            e()
        },
        onClick: C => {
            C.stopPropagation(), e()
        }
    }), m && d && Ae.default.createElement(ht, {
        message: d
    }))
};
var tt = A(O());
var Cn = W `
  overflow-x: auto;
  padding-block: var(--form-control-focus-ring-width);
  margin-block: calc(-1 * var(--form-control-focus-ring-width));
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* legacy Edge */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`,
    Jg = "calc(1ch + 2 * var(--form-control-padding-x))",
    eh = {
        "--form-control-width": Jg,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(var(--form-control-width), 1fr))",
        gap: "var(--form-control-gap)",
        "&& > button": {
            width: "100%",
            minWidth: "var(--form-control-width)"
        }
    },
    th = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "4px",
        "&& > button": {
            width: "calc((100% - 5 * 4px) / 6)",
            flexShrink: 0,
            padding: "8px 0"
        }
    },
    oh = w.div `
  display: flex;
  align-items: flex-start;
  gap: var(--form-control-gap);
  align-self: stretch;
  width: 100%;
  user-select: none;
  ${Cn}
  ${t=>t.wrapWithinContainer&&W(t.isNPS?th:eh)}
`,
    nh = w.div `
  text-align: center;
`,
    wd = {
        display: "flex",
        height: "var(--form-control-height)",
        width: "var(--form-control-width)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        cursor: "pointer",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        color: "var(--content-primary)",
        "@media (max-width: 400px)": {
            padding: "auto"
        },
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
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    Cd = {
        borderColor: "var(--base-accent)",
        background: "var(--form-control-active-background)",
        "&:hover": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        }
    },
    rh = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    kd = "nudgeRatingNumbers",
    Lo = ({
        theme: t,
        numOptions: e,
        selected: o,
        onClick: n,
        isNPS: r,
        hasError: i,
        wrapWithinContainer: a,
        containerRef: s
    }) => {
        let {
            overrides: d
        } = de(kd, t);
        return T(oh, {
            ref: s,
            className: "amplitude-engagement-rating__numbers",
            wrapWithinContainer: a,
            isNPS: r
        }, [...Array(e)].map((l, c) => T(at, {
            "data-testid": `rating-input-${c+1}`,
            key: c + 1,
            customCss: Se([d, W(wd), o(c) && W(Cd), i && !o(c) && W(rh)]),
            onClick: () => n(c)
        }, T(nh, null, r ? c : c + 1))))
    };
Lo.styles = wd;
Lo.slug = kd;
Lo.activeStyles = Cd;
Lo.renderMock = (t, e, o, n) => T(Lo, {
    theme: {
        theme: t,
        mode: e
    },
    numOptions: 1,
    selected: () => !!o,
    onClick: n
});
var Gi = Lo;
var ih = {
        flexWrap: "wrap",
        justifyContent: "center",
        "&& > button": {
            width: "var(--form-control-height)",
            flexShrink: 0
        }
    },
    ah = w.div `
  display: flex;
  align-items: flex-start;
  gap: var(--form-control-gap);
  align-self: stretch;
  user-select: none;
  ${Cn}
  ${t=>t.wrapWithinContainer&&W(ih)}
`,
    Td = {
        display: "flex",
        height: "var(--form-control-height)",
        width: "var(--form-control-width)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        cursor: "pointer",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "&:hover": {
            borderColor: "var(--form-control-border-color-hover)",
            background: "var(--form-control-background-hover)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    Ed = {
        borderColor: "var(--base-accent)",
        background: "var(--form-control-active-background)",
        "&:hover": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        }
    },
    sh = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    Pd = "nudgeRatingEmojis",
    Oo = ({
        theme: t,
        numOptions: e,
        selected: o,
        onClick: n,
        emojis: r,
        hasError: i,
        wrapWithinContainer: a,
        containerRef: s
    }) => {
        let {
            overrides: d
        } = de(Pd, t);
        return T(ah, {
            ref: s,
            className: "amplitude-engagement-rating__emojis",
            wrapWithinContainer: a
        }, [...Array(e)].map((l, c) => {
            let p = c + 1;
            return T(at, {
                key: p,
                "data-testid": `rating-input-${p}`,
                customCss: Se([d, W(Td), o(p) && W(Ed), i && !o(p) && W(sh)]),
                onClick: () => n(p)
            }, r.length > c ? r[c] : " ")
        }))
    };
Oo.slug = Pd;
Oo.styles = Td;
Oo.activeStyles = Ed;
Oo.renderMock = (t, e, o, n) => T(Oo, {
    theme: {
        theme: t,
        mode: e
    },
    numOptions: 1,
    emojis: ["\u{1F642}"],
    selected: () => !!o,
    onClick: n
});
var Id = Oo;
var lh = {
        flexWrap: "wrap",
        justifyContent: "center",
        "&& > button": {
            width: "var(--form-control-height)",
            flexShrink: 0
        }
    },
    ch = () => T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none"
    }, T("path", {
        d: "M11.3452 3.4533C11.5756 2.98637 11.6909 2.7529 11.8473 2.6783C11.9834 2.6134 12.1416 2.6134 12.2777 2.6783C12.4342 2.7529 12.5494 2.98637 12.7799 3.4533L14.9666 7.88327C15.0346 8.02112 15.0686 8.09005 15.1183 8.14356C15.1624 8.19095 15.2152 8.22934 15.2738 8.25661C15.3401 8.28741 15.4161 8.29853 15.5682 8.32076L20.4595 9.03569C20.9746 9.11098 21.2321 9.14862 21.3513 9.27443C21.455 9.38388 21.5037 9.53428 21.484 9.68376C21.4613 9.85557 21.2749 10.0372 20.902 10.4004L17.3639 13.8464C17.2537 13.9538 17.1985 14.0075 17.1629 14.0715C17.1314 14.128 17.1112 14.1902 17.1034 14.2545C17.0946 14.3271 17.1076 14.403 17.1336 14.5547L17.9685 19.4221C18.0565 19.9355 18.1005 20.1922 18.0178 20.3445C17.9458 20.477 17.8179 20.57 17.6696 20.5975C17.4991 20.6291 17.2686 20.5078 16.8076 20.2654L12.4349 17.9658C12.2986 17.8942 12.2305 17.8583 12.1587 17.8443C12.0952 17.8318 12.0298 17.8318 11.9663 17.8443C11.8945 17.8583 11.8264 17.8942 11.6902 17.9658L7.31742 20.2654C6.85642 20.5078 6.62591 20.6291 6.45547 20.5975C6.30718 20.57 6.17922 20.477 6.10724 20.3445C6.0245 20.1922 6.06853 19.9355 6.15657 19.4221L6.99139 14.5547C7.01741 14.403 7.03043 14.3271 7.02162 14.2545C7.01382 14.1902 6.99361 14.128 6.96211 14.0715C6.92652 14.0075 6.87138 13.9538 6.76109 13.8464L3.22306 10.4004C2.85016 10.0372 2.66371 9.85557 2.64103 9.68376C2.62129 9.53428 2.67005 9.38388 2.77375 9.27443C2.89294 9.14862 3.15047 9.11098 3.66554 9.03569L8.55681 8.32076C8.70892 8.29853 8.78498 8.28741 8.85122 8.25661C8.90986 8.22934 8.96266 8.19095 9.00669 8.14356C9.05641 8.09005 9.09043 8.02112 9.15847 7.88327L11.3452 3.4533Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    dh = w.div `
  display: flex;
  align-items: flex-start;
  gap: var(--form-control-gap);
  align-self: stretch;
  user-select: none;
  ${Cn}
  ${t=>t.wrapWithinContainer&&W(lh)}
`,
    Md = {
        display: "flex",
        height: "var(--form-control-height)",
        width: "var(--form-control-width)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        cursor: "pointer",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "&:hover": {
            borderColor: "var(--form-control-border-color-hover)",
            background: "var(--form-control-background-hover)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    Nd = {
        borderColor: "var(--base-accent)",
        background: "var(--form-control-active-background)",
        "&:hover": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-active-background)"
        },
        "& svg": {
            fill: "var(--nudge-rating-star-color-selected)"
        }
    },
    ph = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    uh = w(De)
`
  color: var(--nudge-rating-star-color);

  &:hover {
    color: var(--nudge-rating-star-color);
  }
`, mh = w(De)
`
  color: var(--nudge-rating-star-color-selected);
`, Ad = "nudgeRatingStars", Bo = ({
    theme: t,
    numOptions: e,
    selected: o,
    onClick: n,
    hasError: r,
    wrapWithinContainer: i,
    containerRef: a
}) => {
    let {
        overrides: s
    } = de(Ad, t);
    return T(dh, {
        ref: a,
        className: "amplitude-engagement-rating__stars",
        wrapWithinContainer: i
    }, [...Array(e)].map((d, l) => {
        let c = l + 1,
            p = o(c),
            u = p ? mh : uh;
        return T(at, {
            "data-testid": `rating-input-${c}`,
            customCss: Se([s, W(Md), p && W(Nd), r && !p && W(ph)]),
            key: c,
            onClick: () => n(c),
            "aria-label": `Rate ${c} out of ${e} stars`
        }, T(u, null, T(ch, null)))
    }))
};
Bo.styles = Md;
Bo.slug = Ad;
Bo.activeStyles = Nd;
Bo.renderMock = (t, e, o, n) => T(Bo, {
    theme: {
        theme: t,
        mode: e
    },
    numOptions: 1,
    selected: () => !!o,
    onClick: n
});
var Rd = Bo;
var Br = A(O());
var fh = w.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;


  &,
  span {
    color: var(--content-secondary);

    /* label/sm/semibold */
    font-family: var(--font-font-family);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-regular);
    line-height: var(--font-line-height-normal);
  },
`,
    gh = ({
        start: t,
        end: e
    }) => Br.default.createElement(fh, {
        className: "amplitude-engagement-rating-label"
    }, t && Br.default.createElement("span", {
        className: "amplitude-engagement-rating-label-start"
    }, t), e && Br.default.createElement("span", {
        className: "amplitude-engagement-rating-label-end",
        style: {
            marginLeft: "auto"
        }
    }, e)),
    _r = gh;
var _o = A(O()),
    hh = () => {
        let [t, e] = (0, _o.useState)(!1), o = (0, _o.useRef)(null), n = i => {
            let a = i.children;
            if (a.length < 2) {
                e(!1);
                return
            }
            let s = a[0].offsetTop,
                d = a[a.length - 1].offsetTop;
            e(d > s)
        };
        return {
            ref: (0, _o.useCallback)(i => {
                if (o.current && o.current.disconnect(), !i) {
                    e(!1);
                    return
                }
                n(i), o.current = new ResizeObserver(() => n(i)), o.current.observe(i)
            }, []),
            isMultiRow: t
        }
    },
    Ld = hh;
var Od = ({
    uuid: t,
    handleRatingSelection: e,
    ratingBlock: o,
    label: n,
    ariaLabel: r,
    errorMessage: i
}) => {
    var k, E, P;
    let a = Y(),
        {
            isMobileDevice: s
        } = X(),
        {
            ref: d,
            isMultiRow: l
        } = Ld(),
        {
            surveyResponse: c,
            setSurveyResponse: p,
            resetSurveyResponse: u,
            validationErrors: f,
            clearValidationError: m
        } = Ne(),
        g = f.has(t),
        y = c(t),
        h = (k = Number(y == null ? void 0 : y.value)) != null ? k : -1,
        S = C => o.type === "emojis" ? o.emojis[C - 1] : o.type === "stars" ? "\u2B50".repeat(C) : void 0,
        b = C => {
            C === h ? u(t) : (p({
                blockId: t,
                type: o.type === "nps" ? "nps" : "number",
                value: C,
                max: o.options,
                stringResponse: S(C),
                label: o.label
            }), m(t))
        },
        M = () => {
            switch (o.type) {
                case "emojis":
                    return tt.default.createElement(Id, {
                        theme: a,
                        numOptions: o.options,
                        selected: C => C === h,
                        onClick: C => {
                            e(), b(C)
                        },
                        emojis: o.emojis,
                        hasError: g,
                        wrapWithinContainer: s,
                        containerRef: d
                    });
                case "stars":
                    return tt.default.createElement(Rd, {
                        theme: a,
                        numOptions: o.options,
                        selected: C => C <= h,
                        onClick: C => {
                            e(), b(C)
                        },
                        hasError: g,
                        wrapWithinContainer: s,
                        containerRef: d
                    });
                case "nps":
                    return tt.default.createElement(Gi, {
                        theme: a,
                        numOptions: o.options + 1,
                        selected: C => C === h,
                        onClick: C => {
                            e(), b(C)
                        },
                        isNPS: !0,
                        hasError: g,
                        wrapWithinContainer: s,
                        containerRef: d
                    });
                default:
                    return tt.default.createElement(Gi, {
                        theme: a,
                        numOptions: o.options,
                        selected: C => C === h - 1,
                        onClick: C => {
                            e(), b(C + 1)
                        },
                        hasError: g,
                        wrapWithinContainer: s,
                        containerRef: d
                    })
            }
        },
        x = ((E = o.lowerLabel) == null ? void 0 : E.trim()) || ((P = o.upperLabel) == null ? void 0 : P.trim()),
        I = s && l;
    return tt.default.createElement(ft, {
        "aria-label": r || "Choose a rating",
        "aria-invalid": g,
        className: "amplitude-engagement-rating"
    }, n && tt.default.createElement(gt, {
        label: n
    }), x && I && tt.default.createElement(_r, {
        start: o.lowerLabel,
        end: void 0
    }), M(), x && !I && tt.default.createElement(_r, {
        start: o.lowerLabel,
        end: o.upperLabel
    }), x && I && tt.default.createElement(_r, {
        start: void 0,
        end: o.upperLabel
    }), g && i && tt.default.createElement(ht, {
        message: i
    }))
};
var kn = A(O());
var Bd = ({
    uuid: t,
    handleInputClick: e,
    placeholder: o,
    label: n,
    ariaLabel: r,
    errorMessage: i
}) => {
    let a = Y(),
        {
            surveyResponse: s,
            setSurveyResponse: d,
            validationErrors: l,
            clearValidationError: c
        } = Ne(),
        p = l.has(t),
        u = s(t),
        f = (u == null ? void 0 : u.value) || "",
        m = zt({
            value: f,
            onCommit: g => {
                d({
                    blockId: t,
                    type: "string",
                    value: g,
                    stringResponse: g,
                    label: n
                }), g && c(t)
            }
        });
    return kn.default.createElement(ft, {
        className: "amplitude-engagement-text-input"
    }, n && kn.default.createElement(gt, {
        label: n
    }), kn.default.createElement(ss, {
        "data-testid": "nudge-survey-text-input",
        theme: a,
        hasError: p,
        value: m.value,
        onChange: m.onChange,
        onCompositionStart: m.onCompositionStart,
        onCompositionEnd: m.onCompositionEnd,
        "aria-label": r || o,
        "aria-invalid": p,
        placeholder: o,
        onFocus: () => {
            e()
        },
        onClick: g => {
            g.stopPropagation(), e()
        },
        rows: 5
    }), p && i && kn.default.createElement(ht, {
        message: i
    }))
};
var so = A(O());
var _d = ({
    uuid: t,
    handleInputClick: e,
    placeholder: o,
    prefillOption: n,
    label: r,
    ariaLabel: i,
    errorMessage: a
}) => {
    let s = Y(),
        {
            user: d
        } = D(),
        {
            surveyResponse: l,
            setSurveyResponse: c,
            validationErrors: p,
            clearValidationError: u
        } = Ne(),
        f = p.has(t),
        m = l(t),
        g = (m == null ? void 0 : m.value) || "";
    (0, so.useEffect)(function() {
        var x;
        if ((m == null ? void 0 : m.value) != null || !n) return;
        let b = (x = d == null ? void 0 : d.user_properties) == null ? void 0 : x[n];
        if (b !== void 0) {
            let I = String(b);
            c({
                blockId: t,
                type: "string",
                value: I,
                stringResponse: I,
                label: r
            }), u(t)
        }
    }, [d, n, t, c, m, u, r]);
    let y = zt({
        value: g,
        onCommit: h => {
            c({
                blockId: t,
                type: "string",
                value: h,
                stringResponse: h,
                label: r
            }), h && u(t)
        }
    });
    return so.default.createElement(ft, {
        className: "amplitude-engagement-short-text-input"
    }, r && so.default.createElement(gt, {
        label: r
    }), so.default.createElement(bo, {
        "data-testid": "nudge-survey-short-text-input",
        theme: s,
        hasError: f,
        value: y.value,
        onChange: y.onChange,
        onCompositionStart: y.onCompositionStart,
        onCompositionEnd: y.onCompositionEnd,
        "aria-label": i || o,
        "aria-invalid": f,
        placeholder: o,
        onFocus: () => {
            e()
        },
        onClick: h => {
            h.stopPropagation(), e()
        }
    }), f && a && so.default.createElement(ht, {
        message: a
    }))
};
var Fo = ({
        layout: t,
        mediaPosition: e
    }) => {
        switch (t) {
            case "vertical":
                return "top-block";
            case "horizontal":
                return e === "left" ? "full-height-left" : "full-height-right";
            default:
                return "default"
        }
    },
    yh = new Set(["survey_text", "survey_text_short", "survey_rating", "survey_list"]),
    vh = (t, e) => {
        if (e === "all" || !t) return !0;
        let o = yh.has(t);
        return e === "inputs" ? o : !o
    },
    Fr = ({
        handleInputFocus: t,
        blocks: e,
        hasStepActions: o,
        variant: n = "default",
        kindFilter: r = "all",
        onImageLinkClick: i
    }) => yt.default.createElement(yt.default.Fragment, null, e.filter(a => vh(a == null ? void 0 : a.type, r)).map((a, s) => {
        var d, l, c, p, u, f, m, g, y, h, S, b, M, x, I;
        switch (a == null ? void 0 : a.type) {
            case "image":
                return yt.default.createElement(Qc, {
                    key: `image-${s}`,
                    block: a,
                    variant: n,
                    onLinkClick: i,
                    style: {
                        width: (d = a.meta.style) == null ? void 0 : d.scale,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }
                });
            case "video":
                return yt.default.createElement(ls, {
                    key: `video-${s}`,
                    src: a.meta.src,
                    variant: n
                });
            case "survey_text":
                return yt.default.createElement(Bd, {
                    uuid: a.uuid,
                    handleInputClick: t,
                    key: `text-${a.uuid||s}`,
                    placeholder: a.meta.prompt,
                    label: a.meta.label,
                    ariaLabel: a.meta.ariaLabel,
                    errorMessage: (c = (l = a.meta.validation) == null ? void 0 : l.required) == null ? void 0 : c.message
                });
            case "survey_text_short":
                return yt.default.createElement(_d, {
                    uuid: a.uuid,
                    prefillOption: (u = (p = a.meta) == null ? void 0 : p.prefill) != null && u.enabled ? (m = (f = a.meta) == null ? void 0 : f.prefill) == null ? void 0 : m.userProperty : void 0,
                    handleInputClick: t,
                    key: `text-short-${a.uuid||s}`,
                    placeholder: a.meta.prompt,
                    label: a.meta.label,
                    ariaLabel: a.meta.ariaLabel,
                    errorMessage: (y = (g = a.meta.validation) == null ? void 0 : g.required) == null ? void 0 : y.message
                });
            case "survey_rating":
                return yt.default.createElement(Od, {
                    uuid: a.uuid,
                    handleRatingSelection: t,
                    key: `rating-${a.uuid||s}`,
                    ratingBlock: a.meta,
                    label: a.meta.label,
                    ariaLabel: a.meta.ariaLabel,
                    errorMessage: (S = (h = a.meta.validation) == null ? void 0 : h.required) == null ? void 0 : S.message
                });
            case "survey_list":
                return a.meta.displayType === "dropdown" ? yt.default.createElement(Sd, {
                    uuid: a.uuid,
                    handleDropdownInteraction: t,
                    key: `list-dropdown-${a.uuid||s}`,
                    isOrderRandom: !!a.meta.isOrderRandom,
                    otherOption: a.meta.otherOption,
                    options: a.meta.options,
                    hasStepActions: o,
                    label: a.meta.label,
                    ariaLabel: a.meta.ariaLabel,
                    errorMessage: (M = (b = a.meta.validation) == null ? void 0 : b.required) == null ? void 0 : M.message
                }) : yt.default.createElement(gd, {
                    uuid: a.uuid,
                    handleDropdownInteraction: t,
                    key: `list-${a.uuid||s}`,
                    options: a.meta.options,
                    isMultiSelect: a.meta.listType === "multiple",
                    isOrderRandom: !!a.meta.isOrderRandom,
                    otherOption: a.meta.otherOption,
                    hasStepActions: o,
                    label: a.meta.label,
                    ariaLabel: a.meta.ariaLabel,
                    errorMessage: (I = (x = a.meta.validation) == null ? void 0 : x.required) == null ? void 0 : I.message
                });
            default:
                return null
        }
    }));
var Ui = ({
    step: t,
    handleInputFocus: e,
    kindFilter: o = "all",
    onImageLinkClick: n
}) => {
    let {
        isMobileDevice: r
    } = X(), i = (0, Dr.useMemo)(() => {
        let a = ut(t, {
            deviceType: r ? "mobile" : "desktop"
        });
        switch (t.formFactor.type) {
            case "modal":
                return r ? t.formFactor.layout === "showcase" ? "default" : t.formFactor.layout === "classic" || !t.formFactor.layout ? "tall" : Fo(a) : t.formFactor.layout === "classic" || !t.formFactor.layout ? "tall" : Fo(a);
            case "popover":
            case "pin":
                return r ? t.formFactor.layout === "classic" || !t.formFactor.layout ? "default" : Fo(a) : Fo(a);
            default:
                return Fo(a)
        }
    }, [t, r]);
    return Dr.default.createElement(Fr, {
        handleInputFocus: e,
        variant: i,
        blocks: t.content.filter(Rt),
        hasStepActions: mo(t),
        kindFilter: o,
        onImageLinkClick: n
    })
};
var lo = A(O());
var bh = w.div `
  height: 12px;
`,
    xh = w.div `
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  color: var(--content-primary);

  /* label/lg/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-snug);

  /* Make links clickable even when drag handle overlay is present */
  a {
    position: relative;
    cursor: pointer;
  }

  /* Ensure child elements of links also get pointer events */
  a * {
    cursor: pointer;
  }
`,
    Sh = () => lo.default.createElement("div", {
        "data-draggable": "drag-zone",
        "data-testid": "drag-zone",
        style: {
            position: "absolute",
            insetBlockStart: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            userSelect: "none",
            cursor: "move"
        }
    }),
    wh = ({
        title: t,
        dismissible: e,
        draggable: o,
        textAnimation: n,
        onTitleComplete: r,
        platform: i,
        titleAlignment: a,
        contentAlignment: s = "start"
    }) => {
        let d = i && rt(i),
            l = a || s;
        return lo.default.createElement(xh, {
            style: (() => {
                let p = {
                    minHeight: e ? "20px" : "0px",
                    position: "relative",
                    alignSelf: "stretch"
                };
                switch (l) {
                    case "center":
                        return { ...p,
                            display: "flex",
                            justifyContent: "center",
                            marginInline: e && !d ? "calc(var(--layout-padding-v2, var(--layout-padding)) + 4px)" : "0px",
                            textAlign: "center"
                        };
                    case "end":
                        return { ...p,
                            display: "flex",
                            justifyContent: "flex-end",
                            marginInlineStart: e && !d ? "calc(var(--layout-padding-v2, var(--layout-padding)) + 20px)" : "0px",
                            textAlign: "end"
                        };
                    case "start":
                    default:
                        return { ...p,
                            display: "flex",
                            justifyContent: "space-between",
                            marginInlineEnd: e && !d ? "calc(var(--layout-padding-v2, var(--layout-padding)) + 20px)" : "0px",
                            textAlign: "start"
                        }
                }
            })(),
            role: "heading",
            "aria-level": 2,
            tabIndex: 0,
            className: "amplitude-engagement-title"
        }, o && lo.default.createElement(Sh, null), lo.default.createElement(ro, {
            textAnimation: n,
            content: Ze(t, !0),
            contentType: "html",
            play: !0,
            onComplete: r
        }))
    },
    Fd = ({
        title: t,
        dismissible: e,
        closeButtonOnText: o,
        textAnimation: n,
        titleAlignment: r,
        contentAlignment: i,
        setStepEffectComplete: a,
        setIsTitleComplete: s,
        platform: d,
        draggable: l,
        content: c
    }) => t ? lo.default.createElement(wh, {
        title: t,
        platform: d,
        dismissible: e,
        draggable: l,
        textAnimation: n,
        titleAlignment: r,
        contentAlignment: i,
        onTitleComplete: () => {
            s(!0), c || a(!0)
        }
    }) : e && o ? lo.default.createElement(bh, null) : null;
var Ch = {
        modal: "var(--modal-max-height, calc(100vh - 40px - calc(var(--layout-padding-v2, 0px)*2)))",
        tooltip: "var(--tooltip-max-height, calc(100vh - 40px - calc(var(--layout-padding-v2, 0px)*2)))",
        popover: "var(--popover-max-height, calc(100vh - 40px - calc(var(--layout-padding-v2, 0px)*2)))",
        pin: "var(--popover-max-height, calc(100vh - 40px - calc(var(--layout-padding-v2, 0px)*2)))",
        banner: "var(--banner-max-height)",
        card: "var(--card-max-height)"
    },
    kh = {
        modal: "var(--modal-max-height)",
        tooltip: "var(--tooltip-max-height)",
        popover: "var(--popover-max-height)",
        pin: "var(--popover-max-height)",
        banner: "var(--banner-max-height)",
        card: "var(--card-max-height)"
    },
    Do = ({
        nudge: t,
        step: e,
        stepIndex: o,
        handleLinkClick: n,
        actor: r,
        renderMode: i,
        overrides: a,
        hasFixedHeight: s = !1
    }) => {
        var N, _, B, $, V;
        let d = D(),
            {
                isMobileDevice: l,
                isStudioMobilePreview: c
            } = X(),
            p = Nr({
                stepId: e.id,
                renderMode: i,
                actor: r,
                nudgeVariantId: t.variantId,
                stepIndex: o
            }),
            u = (0, fe.useCallback)(z => {
                ke.nudge.engaged(t, o, { ...r == null ? void 0 : r.getSnapshot().context,
                    source: {
                        type: "link",
                        url: z
                    },
                    interactionState: _e(d, t.variantId)
                }, d.instanceName)
            }, [d, t, o, r]),
            f = ut(e, {
                deviceType: l ? "mobile" : "desktop"
            }),
            m = t.isCarousel && f.layout === "horizontal" && l,
            g = Lr(t, o),
            y = () => {
                if (!l) return Ch[e.formFactor.type];
                if (c && (e.formFactor.type === "modal" || e.formFactor.type === "popover")) {
                    let z = e.formFactor.type === "modal" ? "--modal-max-height" : "--popover-max-height",
                        G = `calc(${Ko}px - ${2*ja}px - ${Ga}px - ${Ua}px - ${2*Za}px)`;
                    return `var(${z}, ${G})`
                }
                return kh[e.formFactor.type]
            },
            h = () => {
                ke.nudge.engaged(t, o, { ...r == null ? void 0 : r.getSnapshot().context,
                    source: {
                        type: "survey_focused"
                    },
                    interactionState: _e(d, t.variantId)
                }, d.instanceName)
            },
            S = (0, fe.useCallback)(() => {
                if (e.formFactor.type !== "pin" || typeof o != "number") return;
                let z = r != null ? r : ve(d, t.variantId);
                z == null || z.send({
                    type: "PIN_GRACE",
                    until: Date.now() + 5e3,
                    stepIndex: o
                })
            }, [d, r, t.variantId, e.formFactor.type, o]),
            b = f.layout === "classic" || f.layout === "horizontal" && f.mediaPosition === "left",
            M = () => {
                if (f.layout === "horizontal" && l) return "50%";
                switch (e.formFactor.type) {
                    case "modal":
                        return "var(--modal-width)";
                    case "tooltip":
                        return "var(--tooltip-max-width)";
                    case "card":
                        {
                            let z = Mc(e.formFactor.cardWidth);
                            return f.layout === "horizontal" && z === "100%" ? "var(--popover-width)" : z != null ? z : "var(--popover-width)"
                        }
                    default:
                        return "var(--popover-width)"
                }
            },
            x = (0, fe.useMemo)(() => rt(t.platform) ? qt(xi(e.content) || "") : xi(e.content), [t.platform, e.content]),
            I = !!(e.title && e.title.trim().length > 0),
            k = !!(x && x.trim().length > 0),
            {
                setStepEffectComplete: E
            } = we(),
            [P, C] = (0, fe.useState)(!e.title || e.title.length === 0);
        return (0, fe.useEffect)(() => {
            I || k || E(!0)
        }, [I, k, E]), fe.default.createElement(Gc, {
            languageDirection: (N = t.dir) != null ? N : "ltr",
            title: fe.default.createElement(Fd, {
                platform: t.platform,
                title: e.title,
                content: x,
                dismissible: Ma(t) || fo(t),
                textAnimation: e.formFactor.textAnimation,
                draggable: Hn(e),
                titleAlignment: (_ = e.formFactor) == null ? void 0 : _.titleAlignment,
                contentAlignment: (B = e.formFactor) == null ? void 0 : B.contentAlignment,
                closeButtonOnText: b,
                setStepEffectComplete: E,
                setIsTitleComplete: C
            }),
            markdown: fe.default.createElement(qc, {
                content: x,
                handleContentLinkClick: n,
                textAnimation: e.formFactor.textAnimation,
                contentAlignment: ($ = e.formFactor) == null ? void 0 : $.contentAlignment,
                isTitleComplete: P,
                setStepEffectComplete: E
            }),
            close: (V = a == null ? void 0 : a.close) != null ? V : fe.default.createElement(Nc, {
                nudge: t,
                step: e
            }),
            media: fe.default.createElement(Ui, {
                step: e,
                kindFilter: f.layout === "vertical" ? "media" : "all",
                handleInputFocus: h,
                onImageLinkClick: u
            }),
            inputs: f.layout === "vertical" ? fe.default.createElement(Ui, {
                step: e,
                kindFilter: "inputs",
                handleInputFocus: h
            }) : void 0,
            footer: fe.default.createElement(Wc, {
                step: e,
                execNudgeAction: p,
                nudge: t,
                stepIndex: o,
                onPinGrace: S,
                hideStepCounter: m
            }),
            stepCounter: m ? g == null ? void 0 : g() : void 0,
            branding: Bi(d, e) ? fe.default.createElement(Ic, {
                step: e
            }) : void 0,
            columnWidth: M(),
            maxHeight: y(),
            step: e,
            isCarousel: t.isCarousel,
            hasFixedHeight: s,
            ...f
        })
    };
var Dd = ({
    nudge: t,
    step: e,
    renderMode: o,
    handleLinkClick: n,
    stepIndex: r,
    isVisible: i = !0
}) => {
    var f, m;
    let a = D(),
        s = Y(),
        d = o !== 1 ? ve(a, t.variantId) : void 0,
        {
            isMobileDevice: l
        } = X(),
        p = (((f = e.formFactor) == null ? void 0 : f.titleAlignment) || ((m = e.formFactor) == null ? void 0 : m.contentAlignment)) === "end",
        u = Ho.default.createElement(dc, {
            isDismissible: t.isDismissible,
            shouldMoveLeft: p,
            "data-testid": "engagement-nudge-tooltip-close"
        }, Ho.default.createElement(yo, null));
    return Ho.default.createElement(At, {
        nudge: t
    }, Ho.default.createElement(Ec, {
        variant: e.content.find(g => g.type === "survey_rating") ? "survey" : "default",
        key: e.id,
        theme: s,
        style: {
            minHeight: 44,
            pointerEvents: i ? "auto" : "none",
            ...e.formFactor.layout === "horizontal" && !l ? {
                width: "auto",
                maxWidth: "calc(var(--tooltip-max-width) * 2)"
            } : {}
        },
        className: "amplitude-engagement-tooltip-content"
    }, Ho.default.createElement(Do, {
        nudge: t,
        step: e,
        renderMode: o,
        handleLinkClick: n,
        stepIndex: r,
        actor: d,
        overrides: {
            close: u
        }
    })))
};
var Hd = A(O());
var Th = {
        bookClosed: Ja,
        helpCircle: ts,
        helpSquare: os,
        infoCircle: rs,
        lightBulb: is,
        lightning: as
    },
    zd = ({
        type: t,
        size: e = 16
    }) => {
        let o = Th[t];
        return Hd.default.createElement(o, {
            width: e,
            height: e
        })
    };
var Hr = A(O());
var $d = $n({
        types: {},
        guards: {
            shouldCenter: () => !1,
            isInlineAligned: () => !1
        },
        actions: {
            updatePosition: Gt({
                marker: ({
                    context: t
                }, e) => ({ ...t.marker,
                    position: e.position
                })
            }),
            assignInlineWrapper: Gt({
                inlineWrapperElement: (t, e) => e.inlineWrapperElement
            }),
            removeTooltip: () => {},
            trackMarkerInView: () => {},
            handleHide: () => {}
        },
        actors: {
            waitForTargetElement: Fe(() => {}),
            trackTargetElement: Fe(() => {}),
            wrapTargetElement: Fe(() => {}),
            trackMarkerInView: Fe(() => {})
        }
    }).createMachine({
        id: "Tooltip",
        initial: "idle",
        context: ({
            input: t
        }) => ({
            marker: {
                ref: t.markerRef,
                position: null,
                offset: t.offset,
                alignment: t.alignment
            },
            renderMode: t.renderMode,
            anchor: t.anchor
        }),
        states: {
            idle: {
                always: [{
                    target: "centered",
                    guard: "shouldCenter",
                    description: "This is the case when we are editing a step in the studio and the target element is unavailable."
                }, "waiting for target element"]
            },
            centered: {
                type: "final"
            },
            anchoring: {
                initial: "hidden",
                invoke: {
                    src: "trackTargetElement",
                    id: "trackTargetElement",
                    input: ({
                        context: t,
                        event: e
                    }) => ({
                        marker: t.marker,
                        targetElement: "targetElement" in e ? e.targetElement : null
                    })
                },
                states: {
                    shown: {
                        on: {
                            HIDE: {
                                target: "#Tooltip.anchoring.hidden"
                            }
                        },
                        states: {
                            visible: {
                                entry: [{
                                    type: "trackMarkerInView"
                                }],
                                on: {
                                    OUT_OF_VIEW: "hidden"
                                },
                                exit: [{
                                    type: "handleHide"
                                }]
                            },
                            hidden: {
                                on: {
                                    IN_VIEW: "visible"
                                }
                            }
                        },
                        initial: "hidden",
                        invoke: {
                            src: "trackMarkerInView",
                            id: "trackMarkerInView",
                            input: ({
                                context: t
                            }) => ({
                                markerRef: t.marker.ref
                            })
                        }
                    },
                    hidden: {
                        on: {
                            SHOW: "shown"
                        }
                    }
                },
                on: {
                    POSITION: {
                        actions: [{
                            type: "updatePosition",
                            params: ({
                                event: t
                            }) => ({
                                position: t.position
                            })
                        }]
                    },
                    TARGET_ELEMENT_REMOVED: {
                        target: "waiting for target element",
                        actions: [{
                            type: "handleHide"
                        }]
                    }
                }
            },
            inlining: {
                invoke: {
                    src: "wrapTargetElement",
                    id: "wrapTargetElement",
                    input: ({
                        context: t,
                        event: e
                    }) => ({
                        marker: t.marker,
                        targetElement: "targetElement" in e ? e.targetElement : null
                    })
                },
                states: {
                    idle: {
                        on: {
                            ASSIGN_WRAPPER: {
                                target: "inlined",
                                actions: [{
                                    type: "assignInlineWrapper",
                                    params: ({
                                        event: t
                                    }) => ({
                                        inlineWrapperElement: t.inlineWrapperElement
                                    })
                                }]
                            }
                        }
                    },
                    inlined: {
                        states: {
                            hidden: {
                                on: {
                                    IN_VIEW: "visible"
                                }
                            },
                            visible: {
                                entry: [{
                                    type: "trackMarkerInView"
                                }],
                                on: {
                                    OUT_OF_VIEW: "hidden"
                                }
                            }
                        },
                        initial: "hidden",
                        invoke: {
                            src: "trackMarkerInView",
                            id: "trackMarkerInView",
                            input: ({
                                context: t
                            }) => ({
                                markerRef: t.marker.ref
                            })
                        }
                    }
                },
                initial: "idle",
                on: {
                    TARGET_ELEMENT_REMOVED: {
                        target: "waiting for target element",
                        actions: [{
                            type: "handleHide"
                        }]
                    }
                }
            },
            "waiting for target element": {
                on: {
                    TARGET_ELEMENT_FOUND: [{
                        target: "inlining",
                        guard: "isInlineAligned"
                    }, "anchoring"]
                },
                invoke: {
                    src: "waitForTargetElement",
                    id: "waitForTargetElement"
                }
            }
        },
        on: {
            DESTROY: {
                actions: [{
                    type: "removeTooltip"
                }]
            }
        }
    }),
    xe = Wn($d),
    Wd = ({
        variantId: t,
        children: e,
        renderMode: o,
        offset: n,
        alignment: r,
        anchor: i,
        handleDestroy: a,
        onMarkerView: s,
        handleHide: d
    }) => {
        let {
            isEditorPreview: l
        } = D(), {
            showWidgetTableau: c,
            messageBus: p
        } = D(), u = (0, Hr.useRef)(null), f = $d.provide({
            guards: {
                shouldCenter: ({
                    context: m
                }) => !c && l ? !pt() : o === 1 && !Ie(m.anchor),
                isInlineAligned: () => r === "inline_left" || r === "inline_right"
            },
            actions: {
                removeTooltip: a,
                trackMarkerInView: s,
                handleHide: d
            },
            actors: {
                waitForTargetElement: Fe(({
                    sendBack: m
                }) => {
                    let g = () => {
                            var S, b;
                            return l && !c ? (S = pt()) != null ? S : void 0 : (b = Ie(i)) != null ? b : void 0
                        },
                        y = g();
                    if (Re(y)) return m({
                        type: "TARGET_ELEMENT_FOUND",
                        targetElement: y
                    });
                    let h = () => {
                        let S = g();
                        Re(S) && m({
                            type: "TARGET_ELEMENT_FOUND",
                            targetElement: S
                        })
                    };
                    return p.subscribe("dom_mutation", h, `tooltip_wait_for_target_${t}`), () => {
                        p.unsubscribe("dom_mutation", `tooltip_wait_for_target_${t}`)
                    }
                }),
                trackTargetElement: Fe(({
                    sendBack: m,
                    input: g
                }) => {
                    let {
                        marker: y,
                        targetElement: h
                    } = g;
                    if (!h) return;
                    let S = y.ref.current;
                    if (!S) return;
                    let {
                        offset: b,
                        alignment: M
                    } = y, I = Ve(h, S, () => {
                        var k, E, P, C, N, _;
                        if (!document.contains(h)) {
                            m({
                                type: "TARGET_ELEMENT_REMOVED"
                            });
                            return
                        }
                        Qe(h, S, {
                            placement: M === "left" ? "left" : "right",
                            strategy: "fixed",
                            middleware: [Et({
                                mainAxis: ue(b.x),
                                crossAxis: ue(b.y)
                            }), Jt({
                                strategy: "escaped",
                                padding: {
                                    top: ue((k = b == null ? void 0 : b.y) != null ? k : "0"),
                                    bottom: -ue((E = b == null ? void 0 : b.y) != null ? E : "0"),
                                    ...M === "left" ? {
                                        right: -ue((P = b == null ? void 0 : b.x) != null ? P : "0"),
                                        left: ue((C = b == null ? void 0 : b.x) != null ? C : "0")
                                    } : {
                                        right: ue((N = b == null ? void 0 : b.x) != null ? N : "0"),
                                        left: -ue((_ = b == null ? void 0 : b.x) != null ? _ : "0")
                                    }
                                }
                            })]
                        }).then(({
                            y: B,
                            x: $,
                            middlewareData: V
                        }) => {
                            var z;
                            m({
                                type: "POSITION",
                                position: {
                                    x: $,
                                    y: B
                                }
                            }), (z = V.hide) != null && z.escaped ? m({
                                type: "HIDE"
                            }) : m({
                                type: "SHOW"
                            })
                        })
                    });
                    return p.subscribe("dom_mutation", () => {
                        (!document.contains(h) || !Re(h)) && m({
                            type: "TARGET_ELEMENT_REMOVED"
                        })
                    }, `tooltip_check_for_target_removal_${t}`), () => {
                        I(), p.unsubscribe("dom_mutation", `tooltip_check_for_target_removal_${t}`)
                    }
                }),
                wrapTargetElement: Fe(({
                    sendBack: m,
                    input: g
                }) => {
                    var b, M;
                    let {
                        marker: y,
                        targetElement: h
                    } = g;
                    if (!h) return;
                    let S = document.createElement("div");
                    return S.setAttribute("data-testid", "engagement-nudge-tooltip-wrapper"), S.style.position = "relative", S.style.display = "inline-flex", S.style.alignItems = "baseline", S.style.width = "fit-content", S.style.flexDirection = y.alignment === "inline_right" ? "row" : "row-reverse", (b = h.parentNode) == null || b.insertBefore(S, h), (M = h.parentNode) == null || M.removeChild(h), S.appendChild(h), m({
                        type: "ASSIGN_WRAPPER",
                        inlineWrapperElement: S
                    }), p.subscribe("dom_mutation", () => {
                        (!document.contains(h) || !Re(h)) && m({
                            type: "TARGET_ELEMENT_REMOVED"
                        })
                    }, `tooltip_check_for_target_removal_wrap_${t}`), () => {
                        let x = S.parentNode;
                        document.contains(x) && (x == null || x.insertBefore(h, S), x == null || x.removeChild(S)), p.unsubscribe("dom_mutation", `tooltip_check_for_target_removal_wrap_${t}`)
                    }
                }),
                trackMarkerInView: Fe(({
                    sendBack: m,
                    input: g
                }) => {
                    let y = new IntersectionObserver(([h]) => {
                        h && (h.isIntersecting ? m({
                            type: "IN_VIEW"
                        }) : m({
                            type: "OUT_OF_VIEW"
                        }))
                    });
                    return g.markerRef.current && y.observe(g.markerRef.current), () => {
                        y.disconnect()
                    }
                })
            }
        });
        return Hr.default.createElement(xe.Provider, {
            logic: f,
            options: {
                input: {
                    markerRef: u,
                    offset: n,
                    alignment: r,
                    renderMode: o,
                    anchor: i
                }
            }
        }, e)
    };
var Eh = "engagement-tooltip-container-portal",
    Ph = 200;
var Ih = ({
        source: t,
        width: e
    }) => {
        let o = t.startsWith("<svg"),
            n = (0, ce.useRef)(null),
            r = {
                pointerEvents: "auto",
                ...e != null && {
                    width: e,
                    height: e
                }
            },
            i = {
                width: e != null ? "100%" : "auto",
                height: e != null ? "100%" : "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
            };
        (0, ce.useEffect)(() => {
            if (o && n.current) {
                let s = n.current.querySelector("svg");
                s && (e != null ? (s.style.width = "100%", s.style.height = "100%", s.style.maxWidth = "100%", s.style.maxHeight = "100%") : (s.style.width = "auto", s.style.height = "auto", s.style.maxWidth = "none", s.style.maxHeight = "none"))
            }
        }, [o, t, e]);
        let a = o ? t : dr(t);
        return T("div", {
            style: r,
            className: "amplitude-engagement-tooltip-marker__image"
        }, o ? T("div", {
            ref: n,
            dangerouslySetInnerHTML: {
                __html: t
            },
            style: i,
            className: "svg-wrapper"
        }) : T("img", {
            alt: "Tooltip marker",
            src: a,
            style: {
                width: e != null ? "100%" : "auto",
                height: e != null ? "100%" : "auto",
                objectFit: "contain"
            }
        }))
    },
    Mh = W({
        border: "none",
        background: "none",
        display: "flex",
        padding: 0,
        position: "relative",
        pointerEvents: "auto",
        color: "var(--tooltip-icon-color)"
    }),
    Nh = ({
        type: t,
        width: e,
        theme: o
    }) => {
        let {
            overrides: n
        } = de("tooltip-icon", o);
        return T("div", {
            css: [n, Mh],
            className: "amplitude-engagement-tooltip-marker__icon",
            "data-testid": "engagement-nudge-tooltip-icon"
        }, T(zd, {
            type: t,
            size: e != null ? e : void 0
        }))
    },
    Ah = ({
        marker: t,
        className: e
    }) => {
        let o = Y();
        switch (t.type) {
            case "image":
                return t.source ? T(Ih, {
                    source: t.source,
                    width: t.width
                }) : null;
            case "icon":
                return T(Nh, {
                    type: t.icon,
                    width: t.width,
                    theme: o
                });
            case "beacon":
                return T(wr, {
                    theme: o,
                    className: "amplitude-engagement-tooltip-marker__beacon"
                });
            default:
                return null
        }
    },
    Rh = ({
        step: t,
        popoverActor: e,
        onMarkerView: o
    }) => {
        let n = xe.useSelector(({
                context: m
            }) => m.anchor),
            r = t.formFactor.showOn,
            {
                isEditorPreview: i,
                showWidgetTableau: a,
                messageBus: s
            } = D(),
            d = (0, ce.useCallback)(() => {
                var m;
                return i && !a ? (m = pt()) != null ? m : null : Ie(n)
            }, [n, i, a]),
            [l, c] = (0, ce.useState)(() => d());
        (0, ce.useEffect)(() => {
            c(d());
            let m = `element_is_marker_anchor_${t.id}`,
                g = () => {
                    c(y => y && y.isConnected ? y : d())
                };
            return s.subscribe("dom_mutation", g, m), () => {
                s.unsubscribe("dom_mutation", m)
            }
        }, [d, s, t.id]), (0, ce.useLayoutEffect)(() => {
            let m = e.getSnapshot().context.trigger.ref;
            if (!l) {
                e.send({
                    type: "CLOSE"
                }), m.current = null, e.send({
                    type: "UPDATE_TRIGGER_DIMENSIONS",
                    dimensions: null
                });
                return
            }
            m.current = l, e.send({
                type: "UPDATE_TRIGGER_DIMENSIONS",
                dimensions: l.getBoundingClientRect()
            })
        }, [l, e]), (0, ce.useEffect)(() => {
            let m = l;
            if (!m) return;
            let g = m.style.userSelect,
                y = m.style.getPropertyValue("-webkit-user-select"),
                h = m.style.cursor;
            m.style.userSelect = "none", m.style.setProperty("-webkit-user-select", "none"), r === "click" && (m.style.cursor = "pointer");
            let S = () => e.send({
                    type: "OPEN"
                }),
                b = () => e.send({
                    type: "OFF_HOVER"
                }),
                M = x => {
                    x.preventDefault(), x.stopPropagation();
                    let I = e.getSnapshot().matches({
                        visibility: "open"
                    });
                    e.send({
                        type: I ? "CLOSE" : "OPEN"
                    })
                };
            return r === "click" ? m.addEventListener("click", M) : (m.addEventListener("mouseenter", S), m.addEventListener("mouseleave", b)), () => {
                m.style.userSelect = g, y ? m.style.setProperty("-webkit-user-select", y) : m.style.removeProperty("-webkit-user-select"), m.style.cursor = h, r === "click" ? m.removeEventListener("click", M) : (m.removeEventListener("mouseenter", S), m.removeEventListener("mouseleave", b))
            }
        }, [l, r, e]);
        let p = Xr(e, m => m.matches({
                visibility: "open"
            })),
            u = (0, ce.useRef)(o);
        u.current = o;
        let f = (0, ce.useRef)(!1);
        return (0, ce.useEffect)(() => {
            var m;
            p && !f.current && (f.current = !0, (m = u.current) == null || m.call(u))
        }, [p]), (0, ce.useEffect)(() => {
            if (!l) return;
            let m = new IntersectionObserver(([g]) => {
                g && !g.isIntersecting && e.send({
                    type: "CLOSE"
                })
            });
            return m.observe(l), () => {
                m.disconnect()
            }
        }, [l, e]), (0, ce.useEffect)(() => {
            if (!l || !p) return;
            let g = setInterval(() => {
                (!l.isConnected || !Re(l)) && e.send({
                    type: "CLOSE"
                })
            }, Ph);
            return () => {
                clearInterval(g)
            }
        }, [l, p, e]), null
    },
    Lh = ({
        step: t
    }) => {
        let {
            isMobileDevice: e
        } = X(), o = xe.useSelector(m => m.matches({
            anchoring: "shown"
        }) || m.matches("centered")), n = xe.useSelector(({
            context: m
        }) => m.marker.alignment), r = n === "inline_left" || n === "left", i = {
            visibility: o ? "visible" : "hidden",
            top: "calc(40vh - 51px)",
            right: `calc(-${e?r?40:60:r?20:80}vw + 24px)`
        }, a = xe.useSelector(({
            context: m
        }) => {
            var g;
            return (g = m.marker.position) == null ? void 0 : g.y
        }), s = xe.useSelector(({
            context: m
        }) => {
            var g;
            return (g = m.marker.position) == null ? void 0 : g.x
        }), d = {
            visibility: o ? "visible" : "hidden",
            left: s,
            top: a
        }, l = {
            visibility: "visible"
        }, c = xe.useSelector(m => m.matches({
            inlining: "inlined"
        }) && !!m.context.inlineWrapperElement), p = xe.useSelector(m => m.matches("centered")), u = () => c ? l : p ? i : d, f = xe.useSelector(({
            context: m
        }) => m.marker.ref);
        return T(sc, {
            ref: f,
            "data-testid": "engagement-nudge-tooltip-marker",
            style: { ...u(),
                ...c ? {} : {
                    zIndex: Ce.getZIndexStyles(t).zIndex
                }
            }
        }, T(Ah, {
            marker: t.formFactor.marker,
            className: "amplitude-engagement-tooltip-marker"
        }))
    },
    Oh = ({
        nudge: t,
        step: e,
        popoverActor: o,
        onMarkerView: n
    }) => {
        var m, g, y;
        let r = Xr(o, h => h.matches({
                visibility: "open"
            })),
            {
                onExit: i
            } = ie(),
            {
                isStudioMobilePreview: a
            } = X(),
            s = D(),
            d = xe.useSelector(({
                context: h
            }) => h.renderMode),
            l = d !== 1 ? ve(s, t.variantId) : void 0,
            c = (g = (m = l == null ? void 0 : l.getSnapshot()) == null ? void 0 : m.context.stepIndex) != null ? g : 0,
            p = (0, ce.useCallback)(() => i(() => {
                var h, S;
                return (S = (h = l == null ? void 0 : l.getSnapshot()) == null ? void 0 : h.context.popoverActor) == null ? void 0 : S.send({
                    type: "CLOSE"
                })
            }), [l == null ? void 0 : l.getSnapshot, i]),
            u = Ft(h => ke.nudge.engaged(t, c, { ...l == null ? void 0 : l.getSnapshot().context,
                source: {
                    type: "link",
                    url: h
                },
                interactionState: _e(s, t.variantId)
            }, s.instanceName), p),
            f = xe.useSelector(h => h.matches({
                inlining: "inlined"
            }) && !!h.context.inlineWrapperElement);
        return (0, ce.useEffect)(() => {
            l == null || l.send({
                type: "ASSIGN_POPOVER_ACTOR",
                actor: o
            })
        }, [o, l]), (0, ce.useEffect)(() => {
            d === 1 && o.send({
                type: "OPEN"
            })
        }, [d, e]), T(ce.default.Fragment, null, e.formFactor.marker.elementIsMarker ? T(Rh, {
            step: e,
            popoverActor: o,
            onMarkerView: n
        }) : T(Lh, {
            step: e
        }), T(cc, {
            "data-testid": "engagement-nudge-tooltip-content",
            describedBy: "engagement-nudge-tooltip-content",
            labelledBy: "engagement-nudge-title",
            portalToId: a ? "engagement-mobile-preview-wrapper" : f ? nt(to, s.instanceName) : void 0,
            shouldStealFocus: d !== 1,
            showArrow: ((y = e.formFactor.pointer) == null ? void 0 : y.type) === "arrow",
            style: {
                borderRadius: "var(--layout-radius-card)",
                ...Ce.getZIndexStyles(e, "tooltipPopover")
            }
        }, T(Dt, {
            actor: l,
            step: e,
            renderMode: d,
            nudgeVariantId: t.variantId,
            stepIndex: c
        }, T(Po, null, T(Dd, {
            nudge: t,
            step: e,
            renderMode: d,
            stepIndex: c,
            handleLinkClick: u,
            isVisible: r
        })))))
    },
    Bh = ({
        nudge: t,
        step: e,
        onOpen: o,
        onMarkerView: n,
        forceOpen: r = !1,
        autoPlacement: i = !0,
        root: a
    }) => {
        let s = xe.useSelector(({
                context: b
            }) => b.renderMode),
            d = xe.useSelector(b => b.matches("idle")),
            l = xe.useSelector(b => b.matches({
                inlining: "inlined"
            }) && !!b.context.inlineWrapperElement),
            c = xe.useSelector(({
                context: b
            }) => b.inlineWrapperElement),
            p = xe.useSelector(({
                context: b
            }) => b.marker.offset),
            {
                generatedCSSClassname: u
            } = Y(),
            {
                onEnter: f,
                onExit: m
            } = ie();
        if (d) return null;
        let [g, y] = [ue(p.x), ue(p.y)], h = l ? {
            display: "flex",
            position: "relative",
            [e.formFactor.marker.positioning.position === "inline_left" ? "marginRight" : "marginLeft"]: `${g}px`,
            marginTop: `${y}px`,
            zIndex: "auto"
        } : {
            zIndex: "auto",
            height: 0,
            width: 0,
            overflow: "visible"
        };
        if (!a) return null;
        let S = (0, Zi.createPortal)(T(pc, {
            "data-testid": `engagement-tooltip-${t.variantId}-${String(e.id)}${s===1?"-mock":""}`,
            forceOpen: r,
            defaultOpen: s === 1,
            triggerType: e.formFactor.showOn,
            style: h,
            className: u,
            autoPlacement: i,
            onOpen: () => {
                f(), o == null || o()
            },
            onClose: () => {
                m()
            }
        }, b => T(Oh, {
            nudge: t,
            step: e,
            popoverActor: b,
            onMarkerView: n
        })), a);
        return l && c ? (0, Zi.createPortal)(S, c) : S
    },
    aE = ({
        nudge: t,
        step: e,
        renderMode: o,
        forceOpen: n,
        overrides: r,
        onMarkerView: i,
        onOpen: a,
        handleDestroy: s,
        autoPlacement: d
    }) => {
        var u, f, m, g, y, h, S;
        let l = D();
        Ir();
        let c = nt(Eh, l.instanceName),
            p = (0, ce.useRef)(document.getElementById(c));
        return p.current ? T(At, {
            nudge: t
        }, T(Lt, {
            widget: "tooltip",
            keepMounted: !0,
            isOpenByDefault: o === 1
        }, T(Wd, {
            key: `${e.formFactor.marker.elementIsMarker}-${(u=r==null?void 0:r.markerPosition)!=null?u:e.formFactor.marker.positioning.position}-${JSON.stringify((f=r==null?void 0:r.offset)!=null?f:e.formFactor.marker.positioning.offset)}`,
            variantId: t.variantId,
            offset: (m = r == null ? void 0 : r.offset) != null ? m : e.formFactor.marker.positioning.offset,
            renderMode: o,
            alignment: (g = r == null ? void 0 : r.markerPosition) != null ? g : e.formFactor.marker.positioning.position,
            anchor: (S = (h = (y = r == null ? void 0 : r.anchorSelector) != null ? y : r == null ? void 0 : r.anchor) != null ? h : e.formFactor.anchorSelector) != null ? S : e.formFactor.anchor,
            handleDestroy: s,
            onMarkerView: i,
            handleHide: () => {
                var x;
                let b = ve(l, t.variantId),
                    M = (x = b == null ? void 0 : b.getSnapshot()) == null ? void 0 : x.context.popoverActor;
                M != null && M.getSnapshot().matches({
                    visibility: "open"
                }) && M.send({
                    type: "CLOSE"
                })
            }
        }, T(Bh, {
            onOpen: a,
            onMarkerView: i,
            autoPlacement: d,
            forceOpen: n,
            nudge: t,
            step: e,
            root: p.current
        })))) : null
    };
var Nt = A(O());
var jd = A(O());
var zr = (r => (r.Sticky = "engagement-nudges-banner-sticky-container", r.InlineTop = "engagement-nudges-banner-inline-container-top", r.InlineBottom = "engagement-nudges-banner-inline-container-bottom", r.Space = "engagement-nudges-banner-space-container", r))(zr || {}),
    Vd = "66px";

function _h(t) {
    var o;
    return (o = {
        banner: Object.values(zr),
        popover: [to],
        pin: [to],
        card: [to],
        modal: []
    }[t]) != null ? o : []
}

function zo(t) {
    let {
        instanceName: e
    } = D();
    (0, jd.useEffect)(() => {
        if (!t) return;
        let o = t.formFactor.type;
        if (!o) return;
        let n = _h(o);
        if (!n || n.length === 0) return;
        let r = [];
        for (let i of n) {
            let a = nt(i, e),
                s = document.getElementById(a);
            r.push({
                scopedId: a,
                prevZIndex: s == null ? void 0 : s.style.zIndex
            });
            let d = i === "engagement-nudges-banner-space-container";
            if (s) {
                let {
                    zIndex: l
                } = Ce.getZIndexStyles(t, d ? "bannerSpacer" : void 0);
                s.style.zIndex = `${l}`
            }
        }
        return () => {
            for (let {
                    scopedId: i,
                    prevZIndex: a
                } of r) {
                let s = document.getElementById(i);
                s && (s.style.zIndex = a != null ? a : "")
            }
        }
    }, [t, e])
}
var Tn = A(O());
var Gd = A(O());
var Fh = W({
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        pointerEvents: "all",
        position: "relative",
        minHeight: "44px",
        padding: "var(--layout-padding-v2, 0px)",
        borderRadius: "var(--layout-radius-card)",
        border: "1px solid var(--border-primary)",
        background: "var(--background-primary)",
        boxShadow: "var(--layout-shadow) var(--layout-shadow-color)",
        a: {
            color: "var(--content-link)",
            textDecoration: "none",
            "&:hover": {
                color: "var(--content-link-hover)",
                textDecoration: "underline"
            }
        }
    }),
    Dh = W({
        minWidth: "var(--popover-width)",
        width: "unset"
    }),
    Hh = w.div ``,
    zh = Gd.default.forwardRef(({
        survey: t,
        organization: e,
        children: o,
        ...n
    }, r) => T(Hh, {
        ref: r,
        css: [Fh, t && Dh].filter(Boolean),
        ...n
    }, o)),
    Ud = zh;
var Zd = (0, Tn.forwardRef)(({
    nudge: t,
    step: e,
    renderMode: o,
    handleLinkClick: n,
    stepIndex: r
}, i) => {
    let a = D(),
        {
            animStyles: s
        } = ie(),
        {
            isMobileDevice: d,
            mobileStyles: l
        } = X(),
        {
            generatedCSSClassname: c
        } = Y(),
        p = o !== 1 ? ve(a, t.variantId) : void 0,
        u = (() => {
            let m = e.formFactor;
            if (!a.isEditorPreview && m.type === "popover") {
                if (m.position.includes("center")) return "engagement-popover-nudge-center";
                if (m.position.includes("right")) return "engagement-popover-nudge-right"
            }
            return ""
        })(),
        f = () => ({
            width: (() => {
                if (e.formFactor.layout === "horizontal") return "auto";
                if (Dn(e)) return "var(--modal-width)"
            })(),
            maxWidth: e.formFactor.layout === "horizontal" ? "100%" : void 0
        });
    return Tn.default.createElement(Ud, {
        organization: a.organization,
        survey: !!e.content.find(m => m.type.startsWith("survey_")),
        "data-testid": `engagement-popover-${t.variantId}-${String(e.id)}${o===1?"-mock":""}`,
        key: e.id,
        ref: i,
        className: `amplitude-engagement-popover-container ${u} ${c}`,
        style: { ...d ? l.nudges.popover.container : f(),
            ...s
        }
    }, Tn.default.createElement(Do, {
        nudge: t,
        step: e,
        renderMode: o,
        handleLinkClick: n,
        stepIndex: r,
        actor: p
    }))
});
var $h = (0, Nt.forwardRef)(({
        renderMode: t,
        nudge: e,
        stepIndex: o,
        center: n
    }, r) => {
        let i = D(),
            {
                onExit: a
            } = ie(),
            s = be(it),
            d = t !== 1 ? ve(i, e.variantId) : void 0,
            l = Ft(u => ke.nudge.engaged(e, o, { ...d == null ? void 0 : d.getSnapshot().context,
                source: {
                    type: "link",
                    url: u
                },
                interactionState: _e(i, e.variantId)
            }, i.instanceName), () => p(e, t)),
            c = Zo(e, o);
        if (zo(c), !c) return null;
        let p = (u, f) => {
            a(() => s(u, f))
        };
        return Nt.default.createElement(Dt, {
            actor: d,
            step: c,
            renderMode: t,
            nudgeVariantId: e.variantId,
            stepIndex: o
        }, Nt.default.createElement(Po, null, Nt.default.createElement(Zd, {
            ref: r,
            nudge: e,
            step: c,
            renderMode: t,
            handleLinkClick: l,
            stepIndex: o,
            center: n
        })))
    }),
    zE = t => {
        let [e, o] = Nt.default.useState(null), n = be(it);
        Zn(e);
        let r = Zo(t.nudge, t.stepIndex),
            i = Hn(r) ? r.formFactor.position : void 0;
        return Nt.default.createElement(Lt, {
            widget: "popover",
            isMounted: !0,
            enterDelay: 1,
            position: i,
            defaultExitAction: () => {
                t.renderMode !== 1 && n(t.nudge, t.renderMode)
            }
        }, Nt.default.createElement($h, {
            ref: o,
            ...t
        }))
    };
var j = A(O());
var $o = A(O());
var qd = A(O());
var Wh = W({
        position: "absolute",
        display: "flex",
        width: "var(--popover-width)",
        maxWidth: "none",
        flexDirection: "column",
        alignItems: "flex-start",
        pointerEvents: "all",
        padding: "var(--layout-padding-v2, 0px)",
        borderRadius: "var(--layout-radius-card)",
        border: "1px solid var(--border-primary)",
        background: "var(--background-primary)",
        boxShadow: "var(--layout-shadow) var(--layout-shadow-color)",
        a: {
            color: "var(--content-link)",
            textDecoration: "none",
            "&:hover": {
                color: "var(--content-link-hover)",
                textDecoration: "underline"
            }
        }
    }),
    Vh = W({
        minWidth: "var(--popover-width)",
        width: "unset"
    }),
    jh = w.div ``,
    Gh = qd.default.forwardRef(({
        survey: t,
        organization: e,
        children: o,
        ...n
    }, r) => {
        let {
            className: i,
            ...a
        } = n;
        return T(jh, {
            ref: r,
            css: [Wh, t && Vh].filter(Boolean),
            ...a,
            className: `amplitude-engagement-pin${i?` ${i}`:""}`
        }, o)
    }),
    Kd = Gh;
var ip = A(O());
var Uh = ["top", "bottom", "left", "right"],
    Zh = ["bottom", "top", "right", "left"],
    qh = ["left", "right", "top", "bottom"],
    Kh = ["right", "left", "bottom", "top"],
    $r = {
        top: Uh,
        bottom: Zh,
        left: qh,
        right: Kh
    },
    Yd = .5,
    Xd = 24,
    Oe = 16,
    Z = 8,
    Qd = ["left", "right", "center"],
    Jd = ["top", "bottom", "center"],
    Wr = ["left", "right"],
    Pn = ["top", "bottom"],
    ep = {
        top: {
            left: "top-start",
            center: "top",
            right: "top-end",
            bottom: "top-start",
            top: "top-start"
        },
        bottom: {
            left: "bottom-start",
            center: "bottom",
            right: "bottom-end",
            bottom: "bottom-start",
            top: "bottom-start"
        },
        left: {
            top: "top-start",
            center: "left",
            bottom: "bottom-start",
            left: "left-start",
            right: "left-start"
        },
        right: {
            top: "top-end",
            center: "right",
            bottom: "bottom-end",
            left: "right-start",
            right: "right-start"
        }
    },
    tp = {
        top: {
            left: "top-start",
            center: "top",
            right: "top-end",
            bottom: "top-start",
            top: "top-start"
        },
        bottom: {
            left: "bottom-start",
            center: "bottom",
            right: "bottom-end",
            bottom: "bottom-start",
            top: "bottom-start"
        },
        left: {
            top: "left-start",
            center: "left-start",
            bottom: "left-start",
            left: "left-start",
            right: "left-start"
        },
        right: {
            top: "right-start",
            center: "right-start",
            bottom: "right-start",
            left: "right-start",
            right: "right-start"
        }
    },
    op = 8,
    En = 20,
    vt = 15,
    qi = 30,
    np = {
        top: {
            transform: "rotate(315deg)",
            bottom: `${-En/2}px`
        },
        right: {
            transform: "rotate(45deg)",
            left: `${-En/2}px`
        },
        bottom: {
            transform: "rotate(135deg)",
            top: `${-En/2}px`
        },
        left: {
            transform: "rotate(225deg)",
            right: `${-En/2}px`
        }
    },
    In = En / 2,
    rp = {
        top: "bottom center",
        bottom: "top center",
        left: "right center",
        right: "left center",
        "top-start": "bottom left",
        "top-end": "bottom right",
        "bottom-start": "top left",
        "bottom-end": "top right",
        "left-start": "right top",
        "left-end": "right bottom",
        "right-start": "left top",
        "right-end": "left bottom"
    };
var Yh = (t, e = 0) => {
        switch (t) {
            case "top":
                return {
                    bottom: `${-In}px`,
                    left: `${vt+e}px`,
                    transform: "rotate(315deg)"
                };
            case "bottom":
                return {
                    top: `${-In}px`,
                    left: `${vt+e}px`,
                    transform: "rotate(135deg)"
                };
            case "left":
                return {
                    top: `${vt+e}px`,
                    right: `${-In}px`,
                    transform: "rotate(225deg)"
                };
            case "right":
            default:
                return {
                    top: `${vt+e}px`,
                    left: `-${In}px`,
                    transform: "rotate(45deg)"
                }
        }
    },
    ap = () => {
        var s;
        let {
            arrowRef: t,
            shouldRenderUnanchoredMock: e,
            step: o,
            content: n,
            overrides: r
        } = Be(), i = (s = r == null ? void 0 : r.position) != null ? s : o.formFactor.position, a = n.ref.current ? Number.parseFloat(window.getComputedStyle(n.ref.current).borderRadius) : void 0;
        return ip.default.createElement(Sr, {
            ref: t,
            "data-testid": "engagement-nudge-pin-arrow",
            style: e ? Yh(i, a) : {},
            className: "amplitude-engagement-pin-arrow"
        })
    };
var sp = (0, $o.forwardRef)(({
    nudge: t,
    step: e,
    renderMode: o,
    handleLinkClick: n,
    stepIndex: r,
    isOpen: i,
    actor: a
}, s) => {
    var m, g, y;
    let d = D(),
        l = a != null ? a : o !== 1 ? ve(d, t.variantId) : void 0,
        {
            isMobileDevice: c
        } = X(),
        {
            animStyles: p,
            isAnimatedWidget: u
        } = ie(),
        f = ((m = e.formFactor.pointer) == null ? void 0 : m.type) === "arrow";
    return $o.default.createElement(Kd, {
        organization: d.organization,
        survey: !!e.content.find(h => h.type === "survey_rating"),
        "data-testid": "engagement-nudge-pin-content",
        ref: s,
        style: {
            minHeight: ((g = e.formFactor.pointer) == null ? void 0 : g.type) === "arrow" ? "60px" : "44px",
            width: e.formFactor.layout === "horizontal" && !c ? "auto" : void 0,
            ...f && o !== 1 ? {
                visibility: "hidden"
            } : {},
            ...!(u || f) && {
                visibility: i ? "visible" : "hidden"
            },
            ...p
        },
        "aria-labelledby": "engagement-nudge-title",
        className: "amplitude-engagement-pin-content"
    }, $o.default.createElement(Do, {
        nudge: t,
        step: e,
        renderMode: o,
        handleLinkClick: n,
        stepIndex: r,
        actor: l
    }), ((y = e.formFactor.pointer) == null ? void 0 : y.type) === "arrow" && $o.default.createElement(ap, null))
});
var Wo = () => ({
        name: "visibility",
        fn: ({
            elements: t
        }) => {
            let e = window.getComputedStyle(t.reference),
                o = t.reference.getBoundingClientRect();
            return {
                data: {
                    isHidden: e.visibility === "hidden" || e.opacity === "0" || o.width === 0 || o.height === 0
                }
            }
        }
    }),
    lp = () => ({
        name: "targetVisibility",
        fn: async t => {
            let e = await Ai(t, {
                    elementContext: "reference",
                    boundary: "clippingAncestors",
                    rootBoundary: "viewport"
                }),
                {
                    width: o,
                    height: n
                } = t.rects.reference,
                r = Math.max(0, o - Math.max(0, e.left) - Math.max(0, e.right)),
                i = Math.max(0, n - Math.max(0, e.top) - Math.max(0, e.bottom)),
                a = o * n;
            return {
                data: {
                    visibleFraction: a > 0 ? r * i / a : 0
                }
            }
        }
    }),
    cp = () => ({
        name: "overlayPosition",
        fn: ({
            rects: t
        }) => ({
            x: t.reference.x,
            y: t.reference.y
        })
    }),
    Vr = () => ({
        name: "overflow",
        fn: async t => {
            let e = await Ai(t, {
                rootBoundary: "document"
            });
            return {
                data: {
                    overflow: e,
                    isOverflowing: Object.values(e).some(o => o > 0)
                }
            }
        }
    });
var up = async ({
        messageBus: t,
        step: e,
        targetElement: o,
        overrides: n,
        arrowElement: r,
        contentElement: i,
        containerElement: a,
        closePin: s,
        isAnimatedWidget: d,
        onShow: l,
        shouldSuspendHide: c,
        fallbackTargetResolver: p
    }) => {
        var f, m, g;
        let u = !1;
        if (o) {
            let y = {
                    position: (f = n == null ? void 0 : n.position) != null ? f : e.formFactor.position,
                    offset: (g = (m = n == null ? void 0 : n.offset) != null ? m : e.formFactor.offset) != null ? g : {
                        x: "0",
                        y: "0"
                    }
                },
                h = await dp(o, r, i, y),
                S = !1,
                b = async () => {
                    if (o && h) {
                        let {
                            x: N,
                            y: _,
                            middlewareData: B
                        } = await Ki(o, {
                            element: i,
                            positioningConfig: h
                        }), $ = i.style.visibility === "visible", V = mp(B) || B.visibility.isHidden || !S;
                        if (!V && (u && $ || (l(), u = !0)), V && (c != null && c())) return;
                        if (Object.assign(i.style, {
                                top: `${_}px`,
                                left: `${N}px`,
                                visibility: V ? "hidden" : "visible",
                                transformOrigin: rp[h.placement],
                                ...!d && {
                                    opacity: V ? 0 : 1
                                }
                            }), Object.assign(a.style, {
                                visibility: V ? "hidden" : "visible",
                                opacity: V ? 0 : 1
                            }), B.arrow) {
                            let {
                                x: G,
                                y: te
                            } = B.arrow;
                            Object.assign(r.style, {
                                top: te != null ? `${te}px` : "",
                                left: G != null ? `${G}px` : "",
                                ...np[h.placement]
                            })
                        }
                    }
                },
                M = async ([N]) => {
                    if (!(N != null && N.isIntersecting && o)) return;
                    x.disconnect();
                    let _ = o,
                        {
                            middlewareData: B
                        } = await Ki(o, {
                            element: i,
                            positioningConfig: h
                        });
                    if (o === _) {
                        if (fp(B)) {
                            let $ = await dp(o, r, i, y);
                            if (o !== _) return;
                            $.placement !== h.placement && (h = $)
                        }
                        S = !0, await b()
                    }
                },
                x = new IntersectionObserver(M, {
                    threshold: .5
                });
            x.observe(o);
            let I = Ve(o, i, b, {
                    animationFrame: !0
                }),
                k = () => {
                    I(), s()
                },
                E = null,
                P = () => {
                    c != null && c() || (i.style.visibility = "hidden", a.style.visibility = "hidden", E || (E = setTimeout(() => {
                        k()
                    }, 1e3)))
                },
                C = () => {
                    E && (clearTimeout(E), E = null), b()
                };
            return t.subscribe("dom_mutation", () => {
                var B, $, V, z;
                let N = (z = Ie((V = ($ = (B = n == null ? void 0 : n.anchorSelector) != null ? B : n == null ? void 0 : n.anchor) != null ? $ : e.formFactor.anchorSelector) != null ? V : e.formFactor.anchor)) != null ? z : p == null ? void 0 : p();
                if (!N) {
                    o = void 0, P();
                    return
                }
                let _ = N !== o;
                o = N, _ && (S = !1, x.disconnect(), x.observe(N)), Re(N) ? C() : P()
            }, `position_pin_step_${e.id}`), () => {
                x.disconnect(), I(), i.style.visibility = "hidden", a.style.visibility = "hidden", E && (clearTimeout(E), E = null), t.unsubscribe("dom_mutation", `position_pin_step_${e.id}`)
            }
        }
    },
    mp = t => {
        var e, o;
        return ((o = (e = t.targetVisibility) == null ? void 0 : e.visibleFraction) != null ? o : 1) < Yd
    },
    fp = t => mp(t) || t.overflow.isOverflowing || t.visibility.isHidden,
    Xh = t => t > window.innerWidth / 2 ? "left" : "right",
    dp = async (t, e, o, n) => {
        var s, d;
        let r = t.getBoundingClientRect(),
            i = n.position === "auto" ? Xh(ho(r).x) : (s = n.position) != null ? s : "bottom",
            a = $r[i];
        for (let l of a) {
            let c = pp(l, e, n),
                {
                    middlewareData: p
                } = await Ki(t, {
                    element: o,
                    positioningConfig: c
                });
            if (!fp(p)) return c
        }
        return pp((d = a.at(0)) != null ? d : "bottom", e, n)
    },
    Qh = t => Pn.includes(t),
    Jh = t => Wr.includes(t),
    ey = (t, e, o, n) => ({
        top: {
            mainAxis: vt + t.y,
            crossAxis: o / 2 + t.x - e
        },
        bottom: {
            mainAxis: vt + t.y,
            crossAxis: o / 2 + t.x - e
        },
        right: {
            mainAxis: vt + t.x,
            crossAxis: n / 2 - t.y - e
        },
        left: {
            mainAxis: vt + t.x,
            crossAxis: n / 2 - t.y - e
        }
    }),
    pp = (t, e, o) => {
        let n = {
                x: ue(o.offset.x),
                y: ue(o.offset.y)
            },
            r = Qh(t) && Math.abs(n.x) > 0 || Jh(t) && Math.abs(n.y) > 0;
        return {
            placement: t,
            calculateOffset: (i, a) => ey(n, qi, i, a)[t],
            shift: {
                padding: op
            },
            calculateArrow: i => ({
                element: e,
                padding: Number.parseFloat(window.getComputedStyle(i).borderRadius) + (r ? qi / 2 : 2)
            })
        }
    },
    Ki = (t, e) => Qe(t, e.element, {
        placement: zn() ? "bottom-start" : e.positioningConfig.placement,
        middleware: [Et(({
            rects: o
        }) => e.positioningConfig.calculateOffset(o.floating.width, o.floating.height)), Eo(e.positioningConfig.shift), xr(({
            elements: o
        }) => e.positioningConfig.calculateArrow(o.floating)), lp(), Vr(), Wo()]
    });
var yp = async ({
        messageBus: t,
        step: e,
        targetElement: o,
        overrides: n,
        pointerElement: r,
        contentElement: i,
        getIsOpen: a,
        closePin: s,
        isAnimatedWidget: d,
        onShow: l,
        shouldSuspendHide: c,
        fallbackTargetResolver: p
    }) => {
        var m, g, y, h;
        let u, f = !1;
        if (o) {
            let S = Xa(o) ? "referenceHidden" : "escaped",
                b = {
                    position: (m = n == null ? void 0 : n.position) != null ? m : e.formFactor.position,
                    alignment: (g = n == null ? void 0 : n.pinAlignment) != null ? g : e.formFactor.alignment,
                    offset: (h = (y = n == null ? void 0 : n.offset) != null ? y : e.formFactor.offset) != null ? h : {
                        x: "0",
                        y: "0"
                    }
                },
                M = await gp(o, i, r, S, b),
                x = !1,
                I = async () => {
                    var z, G;
                    if (o && M) {
                        let {
                            x: te,
                            y: H,
                            middlewareData: q
                        } = await Yi(o, {
                            element: r,
                            positioningConfig: M.pointer
                        });
                        if (u = !!((z = q.hide) != null && z.referenceHidden) || !!((G = q.hide) != null && G.escaped) || q.visibility.isHidden || !x, u && (c != null && c())) return;
                        Object.assign(r.style, {
                            top: `${H}px`,
                            left: `${te}px`,
                            visibility: u ? "hidden" : "visible",
                            opacity: u ? 0 : 1
                        })
                    }
                },
                k = async () => {
                    var z;
                    if (o && M) {
                        let {
                            x: G,
                            y: te,
                            middlewareData: H
                        } = await Xi(o, {
                            element: i,
                            positioningConfig: M.content
                        }), q = !!((z = H.hide) != null && z.referenceHidden) || u || !x || !a(), he = i.style.visibility === "visible";
                        if (q || f && he || (l(), f = !0), q && (c != null && c())) return;
                        Object.assign(i.style, {
                            top: `${te}px`,
                            left: `${G}px`,
                            visibility: q ? "hidden" : "visible",
                            ...!d && {
                                opacity: q ? 0 : 1
                            }
                        })
                    }
                },
                E = async ([z]) => {
                    if (!(z != null && z.isIntersecting && o)) return;
                    P.disconnect();
                    let G = o,
                        {
                            middlewareData: te
                        } = await Yi(o, {
                            element: r,
                            positioningConfig: M.pointer
                        }),
                        {
                            middlewareData: H
                        } = await Xi(o, {
                            element: i,
                            positioningConfig: M.content
                        });
                    if (o === G) {
                        if (vp(H, te)) {
                            let q = await gp(o, i, r, S, b);
                            if (o !== G) return;
                            q.pointer.placement !== M.pointer.placement && (M = q)
                        }
                        x = !0, await I(), await k()
                    }
                },
                P = new IntersectionObserver(E, {
                    threshold: .5
                });
            P.observe(o);
            let C = Ve(o, r, I, {
                    animationFrame: !0
                }),
                N = Ve(o, i, k, {
                    animationFrame: !0
                }),
                _ = () => {
                    C(), N(), s()
                },
                B = null,
                $ = () => {
                    c != null && c() || (r.style.visibility = "hidden", i.style.visibility = "hidden", B || (B = setTimeout(() => {
                        _()
                    }, 1e3)))
                },
                V = () => {
                    B && (clearTimeout(B), B = null), I(), k()
                };
            return t.subscribe("dom_mutation", () => {
                var te, H, q, he;
                let z = (he = Ie((q = (H = (te = n == null ? void 0 : n.anchorSelector) != null ? te : n == null ? void 0 : n.anchor) != null ? H : e.formFactor.anchorSelector) != null ? q : e.formFactor.anchor)) != null ? he : p == null ? void 0 : p();
                if (!z) {
                    o = void 0, $();
                    return
                }
                let G = z !== o;
                o = z, G && (x = !1, P.disconnect(), P.observe(z)), Re(z) ? V() : $()
            }, `position_pin_step_${e.id}`), {
                cleanup: () => {
                    P.disconnect(), C(), N(), r.style.visibility = "hidden", i.style.visibility = "hidden", B && (clearTimeout(B), B = null), t.unsubscribe("dom_mutation", `position_pin_step_${e.id}`)
                },
                notifyOpenStateChanged: k
            }
        }
    },
    vp = (t, e) => {
        var o, n, r;
        return !!((o = t.hide) != null && o.referenceHidden) || t.overflow.isOverflowing || !!((n = e.hide) != null && n.escaped) || !!((r = e.hide) != null && r.referenceHidden) || e.visibility.isHidden
    },
    ty = t => t > window.innerWidth / 2 ? "left" : "right",
    gp = async (t, e, o, n, r) => {
        var d, l;
        let i = t.getBoundingClientRect(),
            a = r.position === "auto" ? ty(ho(i).x) : (d = r.position) != null ? d : "bottom",
            s = $r[a];
        for (let c of s) {
            let p = hp(c, n, r),
                {
                    middlewareData: u
                } = await Yi(t, {
                    element: o,
                    positioningConfig: p.pointer
                }),
                {
                    middlewareData: f
                } = await Xi(t, {
                    element: e,
                    positioningConfig: p.content
                });
            if (!vp(f, u)) return p
        }
        return hp((l = s.at(0)) != null ? l : "bottom", n, r)
    },
    oy = t => ({
        top: {
            padding: {
                top: -t.y,
                right: -t.x,
                left: t.x,
                bottom: t.y
            }
        },
        bottom: {
            padding: {
                top: -t.y,
                right: -t.x,
                left: t.x,
                bottom: t.y
            }
        },
        right: {
            padding: {
                top: -t.y,
                right: -t.x,
                left: t.x,
                bottom: t.y
            }
        },
        left: {
            padding: {
                top: -t.y,
                right: t.x,
                left: -t.x,
                bottom: t.y
            }
        }
    }),
    ny = t => ({
        top: {
            left: {
                mainAxis: -Z + t.y,
                crossAxis: -Z + t.x
            },
            right: {
                mainAxis: -Z + t.y,
                crossAxis: Z + t.x
            },
            center: {
                mainAxis: -Z + t.y,
                crossAxis: t.x
            },
            bottom: {},
            top: {}
        },
        bottom: {
            left: {
                mainAxis: -Z + t.y,
                crossAxis: -Z + t.x
            },
            right: {
                mainAxis: -Z + t.y,
                crossAxis: Z + t.x
            },
            center: {
                mainAxis: -Z + t.y,
                crossAxis: t.x
            },
            bottom: {},
            top: {}
        },
        right: {
            center: {
                mainAxis: -Z + t.x,
                crossAxis: -t.y
            },
            bottom: {
                mainAxis: -Z - t.y,
                alignmentAxis: -Z - t.x
            },
            top: {
                mainAxis: -Z + t.y,
                alignmentAxis: -Z - t.x
            },
            left: {},
            right: {}
        },
        left: {
            center: {
                mainAxis: -Z + t.x,
                crossAxis: -t.y
            },
            bottom: {
                mainAxis: -Z - t.y,
                alignmentAxis: -Z - t.x
            },
            top: {
                mainAxis: -Z + t.y,
                alignmentAxis: -Z - t.x
            },
            left: {},
            right: {}
        }
    }),
    ry = (t, e, o, n) => ({
        top: {
            left: {
                mainAxis: Oe + Z + t.y,
                alignmentAxis: t.x - e
            },
            right: {
                mainAxis: Oe + Z + t.y,
                crossAxis: o + t.x - e
            },
            center: {
                mainAxis: Oe + Z + t.y,
                crossAxis: o / 2 + t.x - e
            },
            bottom: {},
            top: {}
        },
        bottom: {
            left: {
                mainAxis: Oe + Z + t.y,
                crossAxis: t.x - e
            },
            right: {
                mainAxis: Oe + Z + t.y,
                crossAxis: o + t.x - e
            },
            center: {
                mainAxis: Oe + Z + t.y,
                crossAxis: o / 2 + t.x - e
            },
            bottom: {},
            top: {}
        },
        right: {
            center: {
                mainAxis: Oe + Z + t.x,
                alignmentAxis: n / 2 - t.y - e
            },
            bottom: {
                mainAxis: Oe + Z + t.x,
                alignmentAxis: n - t.y - e
            },
            top: {
                mainAxis: Oe + Z + t.x,
                alignmentAxis: -t.y - e
            },
            left: {},
            right: {}
        },
        left: {
            center: {
                mainAxis: Oe + Z + t.x,
                alignmentAxis: n / 2 - t.y - e
            },
            bottom: {
                mainAxis: Oe + Z + t.x,
                alignmentAxis: n - t.y - e
            },
            top: {
                mainAxis: Oe + Z + t.x,
                alignmentAxis: -t.y - e
            },
            left: {},
            right: {}
        }
    }),
    iy = (t, e) => Pn.includes(t) ? Qd.includes(e) : Jd.includes(e),
    ay = (t, e) => iy(t, e) ? e : Pn.includes(t) ? "left" : Wr.includes(t) ? "top" : "center",
    hp = (t, e, o) => {
        let n = ay(t, o.alignment),
            r = {
                x: ue(o.offset.x),
                y: ue(o.offset.y)
            },
            i = 0;
        return {
            pointer: {
                placement: ep[t][n],
                offset: ny(r)[t][n],
                hide: { ...oy(r)[t],
                    strategy: e,
                    rootBoundary: e === "referenceHidden" ? "viewport" : "document"
                }
            },
            content: {
                placement: tp[t][n],
                calculateOffset: (a, s) => ry(r, i, a, s)[t][n]
            }
        }
    },
    Yi = (t, e) => {
        var o;
        return Qe(t, e.element, {
            placement: e.positioningConfig.placement,
            middleware: [Et(e.positioningConfig.offset), Jt((o = e.positioningConfig.hide) != null ? o : {}), Wo()]
        })
    },
    Xi = (t, e) => Qe(t, e.element, {
        placement: zn() ? "bottom-start" : e.positioningConfig.placement,
        middleware: [Et(({
            rects: o
        }) => e.positioningConfig.calculateOffset(o.floating.width, o.reference.height)), Eo({
            padding: Xd
        }), Jt(), Vr()]
    });
var Ue = A(O());
var bp = ({
        messageBus: t,
        step: e,
        targetElement: o,
        clickBlockerElement: n,
        highlightElement: r,
        anchorOverride: i,
        fallbackTargetResolver: a
    }) => {
        var u;
        let s = o,
            d, l = async () => {
                let {
                    x: f,
                    y: m,
                    middlewareData: g
                } = await Qe(s, r, {
                    placement: "bottom-start",
                    middleware: [cp(), oc({
                        apply: ({
                            rects: b
                        }) => {
                            Object.assign(r.style, {
                                width: `${b.reference.width}px`,
                                height: `${b.reference.height}px`
                            })
                        }
                    }), Jt({
                        strategy: "referenceHidden",
                        rootBoundary: "document"
                    }), Wo()]
                }), y = sy(g), h = ly(s, f, m, y);
                Object.assign(r.style, h);
                let S = cy(s, y);
                Object.assign(n.style, S)
            };
        d = Ve(s, r, l, {
            animationFrame: !0
        });
        let c = (u = i != null ? i : e.formFactor.anchorSelector) != null ? u : e.formFactor.anchor,
            p = `mask_dom_mutation_${e.id}`;
        return t.subscribe("dom_mutation", () => {
            var m;
            if (!c && !a) return;
            let f = (m = c ? Ie(c) : void 0) != null ? m : a == null ? void 0 : a();
            if (!(f && Re(f))) {
                n.style.visibility = "hidden", r.style.visibility = "hidden";
                return
            }
            f !== s && (s = f, d(), d = Ve(s, r, l, {
                animationFrame: !0
            }))
        }, p), () => {
            d(), t.unsubscribe("dom_mutation", p)
        }
    },
    sy = t => {
        var o, n;
        return ((o = t.hide) == null ? void 0 : o.referenceHidden) || ((n = t.visibility) == null ? void 0 : n.isHidden) ? "hidden" : "visible"
    },
    ly = (t, e, o, n) => {
        let r = window.getComputedStyle(t).borderRadius,
            i = Math.max(document.documentElement.scrollHeight, document.documentElement.scrollWidth);
        return {
            left: `${e}px`,
            top: `${o}px`,
            borderRadius: r,
            boxShadow: `0 0 0 ${i}px var(--background-overlay)`,
            visibility: n
        }
    },
    cy = (t, e) => {
        let o = t.getBoundingClientRect(),
            n = document.documentElement.scrollWidth,
            r = document.documentElement.scrollHeight,
            i = o.left + window.scrollX,
            a = o.top + window.scrollY,
            s = i + o.width,
            d = a + o.height;
        return {
            width: `${n}px`,
            height: `${r}px`,
            clipPath: `polygon(0% 0%, 0% 100%, ${i}px 100%, ${i}px ${a}px, ${s}px ${a}px, ${s}px ${d}px, 0% ${d}px, 0% 100%, 100% 100%, 100% 0%)`,
            visibility: e
        }
    };
var dy = {
        pointerEvents: "all",
        position: "absolute",
        top: "-1000px",
        left: "-1000px",
        width: "500vw",
        height: "500vh",
        background: "var(--background-overlay)",
        overflow: "hidden",
        zIndex: -1
    },
    py = {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: -1
    },
    uy = {
        position: "absolute",
        visibility: "hidden"
    },
    my = {
        pointerEvents: "none",
        position: "absolute",
        padding: "4px",
        overflow: "hidden",
        visibility: "hidden"
    },
    fy = () => Ue.default.createElement("div", {
        className: "amplitude-engagement-pin-mask",
        "data-testid": "engagement-nudge-mock-pin-mask",
        style: dy
    }),
    gy = ({
        anchorOverride: t
    }) => {
        let {
            step: e,
            targetElement: o
        } = Be(), {
            messageBus: n,
            isEditorPreview: r,
            showWidgetTableau: i
        } = D(), a = (0, Ue.useRef)(null), s = (0, Ue.useRef)(null);
        return (0, Ue.useEffect)(() => {
            if (a.current && s.current && o) return bp({
                messageBus: n,
                step: e,
                targetElement: o,
                clickBlockerElement: a.current,
                highlightElement: s.current,
                anchorOverride: t,
                fallbackTargetResolver: r && !i ? pt : void 0
            })
        }, [n, e, o, t, r, i]), Ue.default.createElement("div", {
            style: py
        }, Ue.default.createElement("div", {
            ref: a,
            "data-testid": "engagement-nudge-mask",
            style: uy
        }), Ue.default.createElement("div", {
            ref: s,
            "data-testid": "engagement-nudge-mask-inner",
            style: my
        }))
    },
    xp = () => {
        var n;
        let {
            targetElement: t,
            overrides: e,
            shouldRenderUnanchoredMock: o
        } = Be();
        if (o) return Ue.default.createElement(fy, null);
        if (t) {
            let r = (n = e == null ? void 0 : e.anchorSelector) != null ? n : e == null ? void 0 : e.anchor;
            return Ue.default.createElement(gy, {
                anchorOverride: r
            })
        }
        return null
    };
var Sp = A(O());
var $t = 100;

function hy(t, e) {
    if (e) {
        let r = e.getBoundingClientRect();
        return t.bottom < r.top + $t || t.top > r.bottom - $t || t.right < r.left + $t || t.left > r.right - $t
    }
    let o = window.innerWidth || document.documentElement.clientWidth,
        n = window.innerHeight || document.documentElement.clientHeight;
    return t.top > n - $t || t.bottom < $t || t.left > o - $t || t.right < $t
}
var yy = (t, e) => {
        if (!(t instanceof Element)) return Pe.warn("Invalid element provided to findScrollParent.", JSON.stringify({
            flag: e == null ? void 0 : e.flagKey,
            elementType: t ? typeof t : "undefined"
        })), null;
        let o = t.parentElement,
            n = 0,
            r = 30;
        for (; o && n < r;) {
            let i = window.getComputedStyle(o).overflowY,
                a = window.getComputedStyle(o).overflowX,
                s = a !== "visible" && a !== "hidden" || i !== "visible" && i !== "hidden",
                d = o.scrollHeight > o.clientHeight || o.scrollWidth > o.clientWidth;
            if (s && d) return o;
            o = o.parentElement, n++
        }
        return n >= r && Pe.warn("findScrollParent exceeded maximum iteration count", JSON.stringify({
            flag: e == null ? void 0 : e.flagKey,
            elementSelector: t == null ? void 0 : t.tagName
        })), null
    },
    vy = (t, e, o) => {
        let n = e.getBoundingClientRect();
        return {
            x: t.x - (o != null && o.isScrollableContainer ? n.left : 0) - e.clientWidth / 2 + e.scrollLeft,
            y: t.y - (o != null && o.isScrollableContainer ? n.top : 0) - e.clientHeight / 2 + e.scrollTop
        }
    },
    by = (t, e, o) => {
        try {
            t.scrollTo(e)
        } catch (n) {
            o == null || o(n), Pe.warn(n)
        }
    },
    wp = () => {
        let {
            nudge: t,
            step: e,
            stepIndex: o,
            targetElement: n
        } = Be(), {
            instanceName: r
        } = D();
        (0, Sp.useEffect)(() => {
            var i;
            try {
                if (!n) return;
                let a = n.getBoundingClientRect(),
                    s = yy(n, t);
                if (((i = e.formFactor.isOpenByDefault) == null || i) && hy(a, s)) {
                    let d = ho(a),
                        l = s || document.documentElement || window,
                        c = vy(d, l, {
                            isScrollableContainer: !!s
                        }),
                        p = {
                            behavior: "smooth",
                            left: c.x,
                            top: c.y
                        };
                    by(s || window, p, () => {
                        ke.nudge.error(t, o, "scroll_to_target_failed", void 0, r)
                    })
                }
            } catch (a) {
                ke.nudge.error(t, o, "scroll_to_target_failed", void 0, r), Pe.warn(a)
            }
        }, [])
    };
var Vo = 16,
    xy = 300,
    Cp = (0, j.createContext)(void 0),
    Be = () => {
        let t = (0, j.useContext)(Cp);
        if (t == null) throw new Error("Pin components must be wrapped in <PinProvider />");
        return t
    },
    Sy = () => {
        let [{
            width: t,
            height: e
        }, o] = (0, j.useState)({
            width: 0,
            height: 0
        });
        return {
            ref: (0, j.useCallback)(r => {
                if (r !== null) {
                    let {
                        width: i,
                        height: a
                    } = r.getBoundingClientRect();
                    o({
                        width: i,
                        height: a
                    })
                }
            }, []),
            width: t,
            height: e
        }
    },
    wy = ({
        nudge: t,
        step: e,
        renderMode: o,
        stepIndex: n,
        overrides: r,
        children: i
    }) => {
        var P, C;
        let a = D(),
            s = (0, j.useRef)(null),
            d = (0, j.useRef)(null),
            l = (0, j.useRef)(null),
            [c, p] = (0, j.useState)((P = e.formFactor.isOpenByDefault) != null ? P : !0),
            {
                ref: u,
                width: f,
                height: m
            } = Sy(),
            g = wo(d, u),
            {
                targetElement: y,
                advanceTriggerElement: h
            } = Li(a, {
                step: e,
                anchorOverride: r == null ? void 0 : r.anchor,
                anchorSelectorOverride: r == null ? void 0 : r.anchorSelector
            }),
            S = o === 1 && !y,
            b = o === 1 ? void 0 : ve(a, t.variantId);
        zo(e);
        let M = e.formFactor.openOnHover === !0 && !((C = e.formFactor.isOpenByDefault) == null || C),
            x = (0, j.useRef)(null),
            {
                onExit: I
            } = ie(),
            k = (0, j.useRef)(I);
        k.current = I;
        let E = (0, j.useMemo)(() => {
            if (M) return {
                onMouseEnter: () => {
                    x.current && (clearTimeout(x.current), x.current = null), p(!0)
                },
                onMouseLeave: () => {
                    x.current && clearTimeout(x.current), x.current = setTimeout(() => {
                        k.current(() => {}), p(!1)
                    }, xy)
                }
            }
        }, [M]);
        return (0, j.useEffect)(function() {
            let _ = d.current;
            if (!_ || !E) return;
            let {
                onMouseEnter: B,
                onMouseLeave: $
            } = E;
            return _.addEventListener("mouseenter", B), _.addEventListener("mouseleave", $), () => {
                _.removeEventListener("mouseenter", B), _.removeEventListener("mouseleave", $)
            }
        }, [E]), (0, j.useEffect)(function() {
            return () => {
                x.current && clearTimeout(x.current)
            }
        }, []), j.default.createElement(Cp.Provider, {
            value: {
                nudge: t,
                step: e,
                actor: b,
                renderMode: o,
                stepIndex: n,
                shouldRenderUnanchoredMock: S,
                overrides: r,
                targetElement: y,
                advanceTriggerElement: h,
                isOpen: c,
                setIsOpen: p,
                content: {
                    mergedRef: g,
                    ref: d,
                    width: f,
                    height: m
                },
                containerRef: s,
                arrowRef: l,
                hoverHandlers: E
            }
        }, i)
    },
    Cy = t => {
        let {
            step: e,
            targetElement: o,
            overrides: n,
            isOpen: r,
            content: i,
            containerRef: a,
            arrowRef: s,
            shouldRenderUnanchoredMock: d,
            actor: l
        } = Be(), {
            isAnimatedWidget: c
        } = ie(), {
            messageBus: p,
            isEditorPreview: u,
            showWidgetTableau: f
        } = D(), m = (0, j.useRef)(r);
        m.current = r;
        let g = (0, j.useRef)(null);
        (0, j.useEffect)(() => {
            let y = !0,
                h;
            return (async () => {
                var x, I;
                if (!(y && i.ref.current) || d || i.width <= 0) return;
                let b = () => {
                        var C, N, _, B;
                        let k = (C = l == null ? void 0 : l.getSnapshot) == null ? void 0 : C.call(l),
                            E = (N = k == null ? void 0 : k.context) == null ? void 0 : N.pinGraceUntil,
                            P = (_ = k == null ? void 0 : k.context) == null ? void 0 : _.pinGraceStepIndex;
                        return typeof E == "number" && Date.now() < E && typeof P == "number" && P === ((B = k == null ? void 0 : k.context) == null ? void 0 : B.stepIndex)
                    },
                    M = {
                        messageBus: p,
                        step: e,
                        targetElement: o,
                        overrides: n,
                        contentElement: i.ref.current,
                        closePin: () => {
                            b() || t()
                        },
                        isAnimatedWidget: c,
                        shouldSuspendHide: b,
                        onShow: () => {
                            y && (l == null || l.send({
                                type: "STEP_VISIBLE"
                            }))
                        },
                        fallbackTargetResolver: u && !f ? pt : void 0
                    };
                try {
                    let k;
                    if (((x = e.formFactor.pointer) == null ? void 0 : x.type) === "arrow" && s.current && a.current) k = await up({ ...M,
                        arrowElement: s.current,
                        containerElement: a.current
                    });
                    else if (a.current) {
                        let E = await yp({ ...M,
                            getIsOpen: () => m.current,
                            pointerElement: a.current
                        });
                        k = E == null ? void 0 : E.cleanup, g.current = (I = E == null ? void 0 : E.notifyOpenStateChanged) != null ? I : null
                    }
                    y ? h = k : k == null || k()
                } catch (k) {
                    y && console.error("Error during pin positioning:", k)
                }
            })(), () => {
                y = !1, g.current = null, h && h()
            }
        }, [l, s, a, i.ref, i.width, t, c, p, d, e, o, n]), (0, j.useEffect)(function() {
            var h;
            (h = g.current) == null || h.call(g)
        }, [r])
    },
    ky = t => {
        let {
            step: e,
            targetElement: o,
            advanceTriggerElement: n,
            nudge: r
        } = Be(), {
            messageBus: i
        } = D();
        (0, j.useEffect)(() => {
            let a = `pin_target_click_${r.variantId}_${e.id}`;
            return i.subscribe("click", ({
                event: s
            }) => {
                let d = s.target;
                if (d instanceof Node) {
                    if (e.formFactor.advanceTrigger) n != null && n.contains(d) && t();
                    else if (o != null && o.contains(d)) {
                        if (e.formFactor.disableAutoAdvanceOnClick || d instanceof HTMLInputElement || d instanceof HTMLElement && d.isContentEditable) return;
                        t()
                    }
                }
            }, a), () => {
                i.unsubscribe("click", a)
            }
        }, [i, r.variantId, e.id, e.formFactor.advanceTrigger, e.formFactor.disableAutoAdvanceOnClick, o, n, t])
    },
    Qi = (t = "dismiss") => {
        let {
            nudge: e,
            actor: o,
            stepIndex: n,
            overrides: r,
            renderMode: i
        } = Be(), a = D(), {
            onExit: s
        } = ie(), d = be(it), l = be(Ra), c = be(Oa);
        return (0, j.useCallback)(() => {
            s(() => {
                if (a.nudgeRecorderToolBar.visible) c({
                    nudge: e,
                    renderMode: i,
                    stepIndex: n,
                    overrides: r
                });
                else switch (t) {
                    case "advance":
                        {
                            o == null || o.send({
                                type: "ADVANCE"
                            });
                            break
                        }
                    case "dismiss":
                        {
                            d(e, i);
                            break
                        }
                    case "close":
                        {
                            l(e);
                            break
                        }
                }
            })
        }, [a.nudgeRecorderToolBar.visible, e, i, n, r, o])
    },
    Ty = ({
        customStyles: t,
        children: e
    }) => {
        var m;
        let {
            nudge: o,
            step: n,
            renderMode: r,
            containerRef: i,
            shouldRenderUnanchoredMock: a,
            content: s,
            hoverHandlers: d
        } = Be(), {
            isMobileDevice: l,
            mobileStyles: c
        } = X(), p = Qi("close"), u = Qi("advance");
        Cy(p), ky(u), wp();
        let f = (0, j.useMemo)(() => ({
            top: a ? `calc(50vh - ${Vo}px - ${s.height/2}px)` : "0",
            left: `calc(50% + ${Vo}px - ${s.width/2}px)`,
            transform: "translate(-50%, -50%)"
        }), [s.height, s.width, a]);
        return j.default.createElement("div", {
            "data-testid": `engagement-pin-${o.variantId}-${String(n.id)}${r===1?"-mock":""}`,
            ref: i,
            role: "presentation",
            onMouseEnter: d == null ? void 0 : d.onMouseEnter,
            onMouseLeave: d == null ? void 0 : d.onMouseLeave,
            className: `engagement-nudge-pin ${a?"engagement-unanchored-nudge-pin":""}`,
            style: {
                position: "absolute",
                width: "max-content",
                ...f,
                ...a || ((m = n.formFactor.pointer) == null ? void 0 : m.type) === "arrow" ? {} : {
                    left: "-9999px",
                    top: "-9999px",
                    visibility: "hidden",
                    opacity: 0
                },
                ...l ? c.nudges.pin.container : {},
                ...t
            }
        }, e)
    },
    Ey = () => {
        var u, f;
        let {
            isOpen: t,
            setIsOpen: e,
            shouldRenderUnanchoredMock: o,
            step: n,
            content: r,
            overrides: i,
            hoverHandlers: a
        } = Be(), {
            onEnter: s
        } = ie(), d = Y(), l = (u = i == null ? void 0 : i.position) != null ? u : n.formFactor.position, c = (f = r.ref.current) == null ? void 0 : f.getBoundingClientRect(), p = (0, j.useMemo)(() => o ? c ? {
            right: l === "left" ? `-${c.width+Vo}px` : `${2*Vo}px`,
            bottom: l === "top" ? `-${c.height+2*Vo}px` : `${Vo}px`
        } : {
            right: "20px",
            bottom: "20px"
        } : {
            right: `-${Z}px`,
            bottom: `-${Z}px`
        }, [l, c, o]);
        return j.default.createElement(wr, {
            theme: d,
            onClick: () => {
                e(!0), s()
            },
            onMouseEnter: a ? () => {
                a.onMouseEnter(), s()
            } : void 0,
            onMouseLeave: a == null ? void 0 : a.onMouseLeave,
            style: { ...p,
                cursor: t && !a ? "auto" : "pointer",
                pointerEvents: t && !a ? "none" : "all"
            },
            "data-testid": "engagement-nudge-pin-beacon",
            className: "amplitude-engagement-pin-beacon"
        })
    },
    Py = () => {
        let t = D(),
            {
                actor: e,
                isOpen: o,
                nudge: n,
                step: r,
                renderMode: i,
                stepIndex: a,
                content: s
            } = Be(),
            d = Qi("dismiss"),
            l = Ft(c => ke.nudge.engaged(n, a, { ...e == null ? void 0 : e.getSnapshot().context,
                source: {
                    type: "link",
                    url: c
                },
                interactionState: _e(t, n.variantId)
            }, t.instanceName), d);
        return j.default.createElement(Dt, {
            actor: e,
            step: r,
            renderMode: i,
            nudgeVariantId: n.variantId,
            stepIndex: a
        }, j.default.createElement(Po, null, j.default.createElement(sp, {
            ref: s.mergedRef,
            nudge: n,
            step: r,
            handleLinkClick: l,
            isOpen: o,
            renderMode: i,
            stepIndex: a,
            actor: e
        })))
    },
    cI = ({
        nudge: t,
        step: e,
        stepIndex: o,
        renderMode: n,
        overrides: r,
        style: i
    }) => {
        var p, u, f;
        let a = D(),
            s = (p = r == null ? void 0 : r.position) != null ? p : e.formFactor.position;
        Ir(s);
        let d = be(it),
            {
                targetElement: l
            } = Li(a, {
                step: e,
                anchorOverride: r == null ? void 0 : r.anchor,
                anchorSelectorOverride: r == null ? void 0 : r.anchorSelector
            }),
            c = n === 1 && !l;
        return l || c ? j.default.createElement(Lt, {
            widget: "popover",
            keepMounted: !0,
            isOpenByDefault: (u = e.formFactor.isOpenByDefault) != null ? u : !0,
            defaultExitAction: () => {
                n !== 1 && d(t, n)
            }
        }, j.default.createElement(wy, {
            nudge: t,
            step: e,
            renderMode: n,
            stepIndex: o,
            overrides: r
        }, j.default.createElement(Ty, {
            customStyles: i
        }, ((f = e.formFactor.pointer) == null ? void 0 : f.type) !== "arrow" && j.default.createElement(Ey, null), j.default.createElement(Py, null)), n === 1 && e.formFactor.isShowingMask && j.default.createElement(xp, null))) : null
    };
var ge = A(O()),
    Fp = A(Uo());
var kp = A(O());
var Iy = W({
        position: "absolute",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        pointerEvents: "all",
        borderRadius: "var(--layout-radius-card)",
        border: "1px solid var(--border-primary)",
        background: "var(--background-primary)",
        boxShadow: "var(--layout-shadow) var(--layout-shadow-color)"
    }),
    My = w.div ``,
    Ny = kp.default.forwardRef(({
        children: t,
        ...e
    }, o) => T(My, {
        ref: o,
        css: [Iy].filter(Boolean),
        ...e
    }, t)),
    Tp = Ny;
var Ep = A(O());
var Ay = w.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  padding: var(--layout-padding);
  gap: var(--layout-gap);
  flex: 1 1 auto;

  @media (max-width: 641px) {
    justify-content: space-between;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    margin-inline-end: var(--layout-padding);
  }
`,
    Ry = w.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--layout-padding);
  gap: var(--layout-gap);
`,
    Pp = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  max-width: 100%;
`,
    Ly = Ep.default.forwardRef(({
        children: t,
        layout: e = "classic",
        ...o
    }, n) => T(e === "vertical" ? Ry : Ay, {
        ref: n,
        ...o
    }, t)),
    Ip = Ly;
var Ji = A(O());
var Oy = w.div `
  padding: var(--layout-padding);
  flex: 0 0 auto;

  @media (max-width: 375px) {
    position: absolute;
    display: flex;
    inset-inline-end: calc(max(var(--layout-padding) - 12px, 0px));
    inset-block-start: calc(max(var(--layout-padding) - 4px, 0px));
    max-height: 32px;
    max-width: 32px;
    border-radius: var(--layout-radius-button);
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`,
    By = w.div `
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`,
    _y = Ji.default.forwardRef(({
        children: t,
        layout: e = "classic",
        ...o
    }, n) => Ji.default.createElement(e === "vertical" ? By : Oy, {
        ref: n,
        ...o
    }, t)),
    Mp = _y;
var Np = A(O());
var Fy = w.div `
  width: var(--form-control-height);
  height: var(--form-control-height);
  margin: var(--layout-padding);
  flex: 0 0 auto;

  @media (max-width: 641px) {
    display: none;
  }
`,
    Dy = Np.default.forwardRef(({
        children: t,
        ...e
    }, o) => T(Fy, {
        ref: o,
        ...e
    }, t)),
    Ap = Dy;
var bt = A(O());
var Hy = w.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  font-size: 14px;
  gap: 4px;
  justify-content: center;

  @media (max-width: 641px) {
    flex-direction: column;
    font-size: var(--font-size-large);
    line-height: var(--font-line-height-snug);
  }

  @media (max-width: 375px) {
    align-self: flex-inline-start;
  }
`,
    zy = w.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  width: 100%;
`,
    $y = w.div `
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  color: var(--content-primary);

  /* label/lg/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-snug);

  a {
    color: var(--content-link);
    text-decoration: none;

    &:hover {
      color: var(--content-link-hover);
      text-decoration: underline;
    }
  }
`,
    Wy = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--content-primary);
  font-family: var(--font-font-family);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-snug);
  text-align: center;
  width: 100%;

  a {
    color: var(--content-link);
    text-decoration: none;

    &:hover {
      color: var(--content-link-hover);
      text-decoration: underline;
    }
  }
`,
    Vy = w.div `
  align-self: stretch;
  color: var(--content-secondary);

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);

  @media (min-width: 641px) {
    font-size: var(--font-size-large);
    line-height: var(--font-line-height-snug);
  }

  p,
  span,
  strong,
  i,
  u {
    // unset user stylesheet
    margin-block-start: unset;
    margin-block-end: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;

    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  p {
    margin-block-end: 8px;
  }

  p:last-child {
    margin-block-end: 0;
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  ol,
  ul,
  li {
    all: revert;
  }

  img {
    max-width: 100%;
  }

  a {
    color: var(--content-link);
    text-decoration: none;

    &:hover {
      color: var(--content-link-hover);
      text-decoration: underline;
    }
  }
`,
    jy = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--content-secondary);
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
  text-align: center;
  width: 100%;

  @media (min-width: 641px) {
    font-size: var(--font-size-large);
    line-height: var(--font-line-height-snug);
  }

  p,
  span,
  strong,
  i,
  u {
    // unset user stylesheet
    margin-block-start: unset;
    margin-block-end: unset;
    margin-inline-start: unset;
    margin-inline-end: unset;

    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  p {
    margin-block-end: 8px;
    text-align: center;
  }

  p:last-child {
    margin-block-end: 0;
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  a {
    color: var(--content-link);
    text-decoration: none;

    &:hover {
      color: var(--content-link-hover);
      text-decoration: underline;
    }
  }

  ol,
  ul,
  li {
    all: revert;
  }

  img {
    max-width: 100%;
  }
`,
    Gy = ({
        title: t,
        content: e,
        handleContentLinkClick: o,
        textAnimation: n,
        layout: r = "classic",
        ...i
    }) => {
        let {
            setStepEffectComplete: a
        } = we(), [s, d] = (0, bt.useState)(!t || t.length === 0);
        (0, bt.useEffect)(() => {
            e || t || a(!0)
        }, [e]);
        let l = r === "vertical" ? zy : Hy,
            c = r === "vertical" ? Wy : $y,
            p = r === "vertical" ? jy : Vy;
        return bt.default.createElement(l, { ...i
        }, t && bt.default.createElement(c, {
            tabIndex: 0,
            role: "heading",
            style: {
                position: "relative"
            },
            "aria-level": 2,
            className: "amplitude-engagement-banner-title"
        }, bt.default.createElement(ro, {
            textAnimation: n,
            content: Ze(t, !0),
            contentType: "html",
            play: !0,
            onComplete: () => {
                d(!0)
            }
        })), e && bt.default.createElement(p, {
            tabIndex: 0,
            onClick: o,
            className: "amplitude-engagement-banner-content"
        }, bt.default.createElement(ro, {
            textAnimation: n,
            content: e ? Ze(e) : "",
            contentType: "html",
            play: s,
            onComplete: () => {
                a(!0)
            }
        })))
    },
    Rp = Gy;
var Mn = A(O());
var Lp = w.div `
  display: flex;
  flex: none;
  overflow: hidden;
  align-items: center;
  gap: var(--layout-gap);
  width: auto;
  padding: 0px;

  @media (max-width: 375px) {
    width: 100%;
  }
`,
    Op = w.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--layout-gap);
  width: 100%;
  max-width: 280px;
  padding: 0px;

  @media (max-width: 375px) {
    max-width: none;
    width: 100%;
  }
`;
var Bp = ({
    step: t,
    stepIndex: e,
    renderMode: o,
    nudgeVariantId: n,
    snooze: r,
    actor: i,
    layout: a = "classic"
}) => {
    let {
        contentStyles: s
    } = we(), d = Nr({
        stepId: t.id,
        renderMode: o,
        actor: i,
        nudgeVariantId: n,
        stepIndex: e
    }), l = t.content.filter(h => h.type === "button").sort((h, S) => {
        var b;
        return S.type === "button" && ((b = S.meta) == null ? void 0 : b.buttonType) === "secondary" ? 1 : -1
    }), p = (r.enabled && (r.enabledOnAllSteps || e === 0) ? [{
        type: "button",
        meta: {
            buttonType: "snooze",
            label: r.label,
            action: {
                type: "snooze",
                ...r.duration
            }
        }
    }] : []).concat(l).filter(h => {
        var S;
        return (S = h.meta) == null ? void 0 : S.label
    }), {
        isMobileDevice: u,
        mobileStyles: f
    } = X();
    if (p.length === 0) return Mn.default.createElement(Mn.default.Fragment, null);
    let m = a === "vertical" ? Op : Lp,
        g = () => ({ ...u ? f.nudges.banner.actionBar : {},
            ...s
        }),
        y = () => a === "vertical" ? {
            style: {
                flex: "0 1 auto",
                width: "auto",
                minWidth: "80px"
            }
        } : {
            style: {
                flex: "1 1 auto",
                minWidth: "fit-content"
            }
        };
    return Mn.default.createElement(m, {
        "data-testid": "action-bar",
        style: g(),
        className: "amplitude-engagement-banner-actions"
    }, p.map(h => Mn.default.createElement(No, {
        key: t.id,
        step: t,
        block: h,
        execNudgeAction: d,
        ...y()
    })))
};
var jr = A(O());
var _p = ({
    nudge: t,
    stepIndex: e,
    positionOverride: o
}) => {
    let [n] = t.steps, [r, i] = (0, jr.useState)(null), {
        instanceName: a
    } = D(), s = o != null ? o : n.formFactor.position, d = nt("engagement-nudges-banner-space-container", a);
    return (0, jr.useEffect)(() => {
        if (n.formFactor.placement !== "overlay") {
            let l = () => {
                    var g, y;
                    let p = {
                            width: "100%",
                            height: "auto",
                            position: (g = n.formFactor) != null && g.sticky ? "sticky" : "relative",
                            ...((y = n.formFactor) == null ? void 0 : y.sticky) && {
                                [s === "top" ? "top" : "bottom"]: 0
                            }
                        },
                        u = s === "top",
                        f = document.body,
                        m = u ? "afterbegin" : "beforeend";
                    if (f) {
                        let h = document.createElement("div");
                        h.id = d, Object.assign(h.style, p), document.body.insertAdjacentElement(m, h), i(h)
                    }
                },
                c = () => {
                    var u;
                    let p = document.getElementById(d);
                    p && ((u = p.parentNode) == null || u.removeChild(p))
                };
            return l(), c
        }
    }, [t, e, s, d]), {
        portalRootElement: r
    }
};
var Uy = ({
        nudge: t,
        stepIndex: e,
        renderMode: o,
        positionOverride: n
    }) => {
        var C, N, _;
        let r = D(),
            [i] = t.steps,
            a = Y(),
            {
                isStudioMobilePreview: s,
                studioMobilePreviewWrapper: d,
                mobileStyles: l,
                isMobileDevice: c
            } = X(),
            p = B => ve(r, B),
            u = be(it),
            f = Ft(B => ke.nudge.engaged(t, e, { ...m == null ? void 0 : m.getSnapshot().context,
                source: {
                    type: "link",
                    url: B
                },
                interactionState: _e(r, t.variantId)
            }, r.instanceName), () => u(t, o)),
            m = o !== 1 ? p(t.variantId) : void 0,
            {
                portalRootElement: g
            } = _p({
                nudge: t,
                stepIndex: e,
                positionOverride: n
            }),
            y = n != null ? n : (C = i == null ? void 0 : i.formFactor) == null ? void 0 : C.position,
            h = (N = i.formFactor) == null ? void 0 : N.placement,
            S = (_ = i.formFactor) == null ? void 0 : _.sticky,
            b = (0, ge.useRef)(null),
            x = ut(i, {
                deviceType: c ? "mobile" : "desktop"
            }).layout === "vertical" ? "vertical" : "classic",
            I = fo(t);
        zo(i), (0, ge.useEffect)(() => {
            if (!r.isEditorPreview && h !== "overlay") {
                let B = () => {
                    b.current && g && (g.style.height = `${b.current.offsetHeight}px`)
                };
                B();
                let $ = new ResizeObserver(B);
                return b.current && $.observe(b.current), () => {
                    $.disconnect()
                }
            }
        }, [b, g, o]);
        let k = i == null ? void 0 : i.content.map(B => {
                if (B.type === "markdown" && B.meta.value) return rt(t.platform) ? qt(B.meta.value) : B.meta.value
            }).filter(B => !!B).pop(),
            E = i.content.filter(Rt),
            P = () => {
                var B;
                return i ? ge.default.createElement(Dt, {
                    actor: m,
                    step: i,
                    renderMode: o,
                    nudgeVariantId: t.variantId,
                    stepIndex: e
                }, ge.default.createElement(Tp, {
                    role: "region",
                    ref: b,
                    "data-testid": `engagement-banner-${t.variantId}-${String(i==null?void 0:i.id)}${o===1?"-mock":""}`,
                    style: c ? { ...l.nudges.banner.container,
                        [y === "top" ? "top" : "bottom"]: 0
                    } : {
                        position: "absolute",
                        top: y === "top" ? 0 : void 0,
                        bottom: y === "bottom" && S ? 0 : void 0,
                        ...r.isEditorPreview && !r.showWidgetTableau && { ...y === "top" && {
                                top: Vd
                            }
                        }
                    },
                    className: `amplitude-engagement-banner-container ${a.generatedCSSClassname}`
                }, ge.default.createElement("div", {
                    dir: (B = t.dir) != null ? B : "ltr",
                    style: {
                        display: "flex",
                        alignItems: x === "vertical" ? "stretch" : "center",
                        width: "100%",
                        position: "relative"
                    }
                }, x === "classic" && I && ge.default.createElement(Ap, {
                    style: c ? l.nudges.banner.spaceContainer : {}
                }), ge.default.createElement(Ip, {
                    layout: x,
                    style: c ? l.nudges.banner.body : {},
                    className: "amplitude-engagement-banner-body"
                }, ge.default.createElement(Rp, {
                    layout: x,
                    title: i == null ? void 0 : i.title,
                    content: k,
                    handleContentLinkClick: f,
                    style: c ? l.nudges.banner.title : {},
                    textAnimation: i.formFactor.textAnimation
                }), x === "vertical" && E.length > 0 && ge.default.createElement(Pp, null, ge.default.createElement(Fr, {
                    handleInputFocus: () => {
                        ke.nudge.engaged(t, e, { ...m == null ? void 0 : m.getSnapshot().context,
                            source: {
                                type: "survey_focused"
                            },
                            interactionState: _e(r, t.variantId)
                        }, r.instanceName)
                    },
                    blocks: E,
                    hasStepActions: mo(i)
                })), ge.default.createElement(Bp, {
                    step: i,
                    stepIndex: e,
                    renderMode: o,
                    nudgeVariantId: t.variantId,
                    snooze: {
                        enabled: Fn(t),
                        label: t.snoozeLabel,
                        enabledOnAllSteps: t.isSnoozableOnAllSteps,
                        duration: t.snoozeDuration
                    },
                    actor: m,
                    layout: x
                })), I && ge.default.createElement(Mp, {
                    layout: x,
                    style: c ? l.nudges.banner.closeButtonContainer : {},
                    className: "amplitude-engagement-banner-close-button"
                }, ge.default.createElement(Ar, {
                    "data-testid": "nudge-step-close-button",
                    "aria-label": "Close banner",
                    theme: a,
                    onClick: () => {
                        o !== 1 && u(t, o)
                    }
                }))))) : null
            };
        return s && d ? Fp.default.createPortal(P(), d) : i ? P() : null
    },
    uM = t => ge.default.createElement(At, {
        nudge: t.nudge
    }, ge.default.createElement(Uy, { ...t
    }));
export {
    to as a, hc as b, yc as c, Wx as d, Vx as e, Us as f, tS as g, pt as h, Li as i, Ve as j, Et as k, tc as l, Jt as m, Qe as n, bp as o, Po as p, Ft as q, Dt as r, an as s, Mc as t, No as u, qc as v, cC as w, Xc as x, dC as y, Fr as z, Do as A, Qm as B, Lb as C, ue as D, Ir as E, Eh as F, aE as G, zo as H, $h as I, zE as J, Kd as K, yy as L, vy as M, by as N, cI as O, uM as P
};