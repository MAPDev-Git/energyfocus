import {
    v as u
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var f = t => t.startsWith("pause") ? "pause" : t.startsWith("blur") ? "blur" : t.substring(0, 2) === "//" ? "xpath" : "css",
    a = (t, e = null, r) => {
        if (typeof t != "string" || t.length === 0) return null;
        e || (e = document);
        try {
            let n = e.evaluate(t, e, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return n.singleNodeValue ? n.singleNodeValue : null
        } catch (n) {
            return r && r(t), null
        }
    },
    $ = (t, e) => {
        if (!t || !e) return !1;
        if (f(e) === "css") try {
            return t.matches(e) || !!t.closest(e)
        } catch (o) {
            return u.error("Error matching CSS selector", {
                selector: e
            }), !1
        }
        let n = i(e);
        return n ? n === t || n.contains(t) : !1
    },
    w = (t, e = null, r) => {
        if (typeof t != "string" || t.length === 0) return null;
        e || (e = document);
        try {
            return e.querySelector(t)
        } catch (n) {
            return r && r(t), null
        }
    },
    z = t => !!i(t),
    T = t => t.hasAttribute("disabled") ? !1 : t instanceof HTMLInputElement ? t.type !== "hidden" : t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement || t.isContentEditable === !0,
    M = t => {
        let e = document.activeElement;
        return !e || e === t || e === document.body ? !0 : !!document.querySelector('[id^="engagement-nudge-container"]')
    };

function B(t) {
    let e = i(t);
    return e ? (e instanceof HTMLElement ? (e.click(), T(e) && e.isConnected && M(e) && e.focus()) : e instanceof SVGElement && e.dispatchEvent(new MouseEvent("click", {
        bubbles: !0
    })), !0) : !1
}
var p = t => /^\[[^,]+(,[^,]+)+\]$/.test(t),
    O = t => t.slice(1, -1).split(","),
    k = (t, e) => {
        var r, n;
        return t instanceof Element ? (n = t.querySelector(e) || ((r = t.shadowRoot) == null ? void 0 : r.querySelector(e))) != null ? n : null : t instanceof Document || t instanceof ShadowRoot ? t.querySelector(e) : null
    },
    h = (t, e = document) => {
        if (t.length === 0) return e;
        let [r] = t;
        if (r === void 0) return e;
        let n = k(e, r);
        if (n) return h(t.slice(1), n)
    },
    V = t => t.selector !== void 0,
    m = (t, e) => {
        if (!t || t.length === 0) return null;
        let r = f(t);
        if (p(t)) {
            let o = O(t),
                l = h(o);
            return l instanceof Element ? l : null
        }
        let n = r === "xpath" ? a(t, e) : w(t, e);
        return n instanceof Element ? n : null
    },
    S = (t, e, r) => {
        if (!t) return null;
        if (e) {
            let l = `//${e}[normalize-space(.) = '${t}']`,
                s = a(l, r);
            if (s instanceof Element) return s
        }
        let n = `//*[normalize-space(text()) = '${t}']`,
            o = a(n, r);
        return o instanceof Element ? o : null
    },
    g = t => t.replace(/\s+/g, " ").trim(),
    R = ({
        selector: t,
        text: e
    }, r) => {
        if (!t) return null;
        let n;
        try {
            n = (r || document).querySelectorAll(t)
        } catch (s) {
            return u.error("Invalid CSS selector in strict strategy", {
                selector: t
            }), null
        }
        let o = n[0];
        if (!o) return null;
        if (!e) return o;
        let l = g(e);
        for (let s of n)
            if (g(s.textContent || "") === l) return s;
        return null
    },
    v = ({
        selector: t,
        tag: e,
        text: r
    }, n) => {
        let o = m(t, n);
        return o || (r ? S(r, e, n) : null)
    },
    P = ({
        selector: t
    }, e) => m(t, e),
    E = {
        strict: R,
        fallback: v,
        selector_only: P
    },
    C = (t, e) => e === "strict" && f(t) === "xpath" ? "fallback" : p(t) ? "selector_only" : e != null ? e : "fallback",
    H = (t, e) => {
        var o;
        let r = C(t.selector, t.strategy);
        return t.selector ? ((o = E[r]) != null ? o : E.fallback)(t, e) : t.text && r === "fallback" ? S(t.text, t.tag, e) : null
    },
    i = (t, e) => {
        if (t) return typeof t == "string" ? m(t, e) || void 0 : H(t, e) || void 0
    },
    W = async t => {
        if (!t) return !1;
        let e = i(t);
        return N(e)
    };
var I = 30,
    L = (t, e = I) => !t || e === 0 ? !1 : window.getComputedStyle(t).position === "absolute" ? !0 : L(t.parentElement, e - 1);
var N = t => {
        if (!t) return !1;
        let e = window.getComputedStyle(t),
            r = l => l.width === 0 && l.height === 0,
            n = (l, s) => {
                let {
                    x: d,
                    y
                } = _(s), c = document.elementsFromPoint(d, y).find(D => !F(D));
                if (!c) return !1;
                let b = c === l,
                    x = l.contains(c);
                return !b && !x
            };
        if (e.display === "none" || e.opacity === "0" || e.visibility === "hidden") return !1;
        let o = t.getBoundingClientRect();
        return !(r(o) || n(t, o))
    },
    F = t => {
        let e = document.getElementById("engagement-wrapper");
        return e && e.contains(t) ? !0 : t instanceof Element ? !!t.closest(".engagement-card-portal-container") : t.parentElement ? !!t.parentElement.closest(".engagement-card-portal-container") : !1
    },
    _ = t => ({
        x: t.left + t.width / 2,
        y: t.top + t.height / 2
    });
export {
    $ as a, z as b, B as c, V as d, i as e, W as f, L as g, N as h, F as i, _ as j
};