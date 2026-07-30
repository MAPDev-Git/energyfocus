import {
    a as U
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-CQTLPAT4.js";
import {
    a as B
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-3C5CJ7O5.js";
import {
    d as O,
    m as Y,
    t as w,
    u as N
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-4UYE3ASQ.js";
import "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-6B5OP34Y.js";
import "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-EJSVZAN3.js";
import "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-3RCTDKHL.js";
import "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-4EB7EJYW.js";
import {
    A as ce,
    D as H,
    F as W,
    L as X,
    d as T,
    g as V,
    w as F
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-7B2P2PNW.js";
import {
    $c as z,
    Gc as D,
    Oc as G,
    Tc as _,
    Uc as m,
    Xa as A,
    aa as b,
    c as l,
    ca as x,
    e as d,
    ha as C,
    ka as M,
    q as k,
    v as y
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var R = l(d());
var S = l(d()),
    ae = r => {
        let [e, n] = S.useState(r.offsetX), [t, s] = S.useState(r.offsetY);
        S.useEffect(() => {
            n(r.offsetX), s(r.offsetY)
        }, [r.offsetX, r.offsetY]);
        let i = 35 + e,
            o = 35 + t,
            a = {
                zIndex: r.zIndex,
                position: "fixed",
                userSelect: "none"
            },
            c = {};
        switch (r.position) {
            case "topRight":
                c = {
                    top: o,
                    right: i
                };
                break;
            case "topLeft":
                c = {
                    top: o,
                    left: i
                };
                break;
            case "bottomRight":
                c = {
                    bottom: o,
                    right: i
                };
                break;
            case "bottomLeft":
                c = {
                    bottom: o,
                    left: i
                };
                break
        }
        return { ...a,
            ...c
        }
    },
    $ = ae;
var K = l(d());
var le = ({
        anchor: r
    }) => {
        let e = U(r),
            n = _(),
            t = m(w),
            s = m(N);
        return (0, K.useEffect)(() => {
            if (e) {
                let i = () => {
                    n.resourceCenter.visible ? n.resourceCenter.minimized ? s(!1) : t(!1) : t(!0)
                };
                return e.addEventListener("click", i), () => {
                    e.removeEventListener("click", i)
                }
            }
        }, [e, n, t, s]), null
    },
    Z = le;
var j = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "var(--resource-center-launcher-height)",
        width: "var(--resource-center-launcher-width)",
        padding: "var(--form-control-padding-x)",
        color: "var(--button-primary-content)",
        borderColor: "var(--button-primary-border-color)",
        background: "var(--button-primary-background)",
        borderRadius: "var(--layout-radius-button)",
        cursor: "pointer",
        overflow: "hidden",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "&:hover": {
            borderColor: "var(--button-primary-border-color-hover)",
            background: "var(--button-primary-background-hover)",
            color: "var(--button-primary-content-hover)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            background: "var(--button-primary-background-hover)",
            borderColor: "var(--button-primary-border-color-hover)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    q = "resourceCenterLauncher",
    v = ({
        theme: r,
        children: e,
        ...n
    }) => {
        let {
            overrides: t
        } = H(q, r);
        return b(W, {
            css: [t, x(j)],
            ...n
        }, e)
    };
v.styles = j;
v.slug = q;
v.renderMock = (r, e) => b(v, {
    theme: {
        theme: r,
        mode: e
    }
}, b(z, null));
var Q = v;
var u = l(d()),
    J = l(ce()),
    me = ({
        src: r,
        className: e = "",
        fallback: n = null,
        ...t
    }) => {
        let [s, i] = (0, u.useState)(null), [o, a] = (0, u.useState)(""), [c, h] = (0, u.useState)(!1);
        return (0, u.useEffect)(() => {
            if (!r) return;
            let g = !1;
            return (async () => {
                try {
                    let f = await fetch(r);
                    if (!f.ok) throw new Error(`Failed to fetch SVG: ${f.status}`);
                    let se = await f.text(),
                        ie = J.default.sanitize(se, {
                            USE_PROFILES: {
                                svg: !0,
                                svgFilters: !0
                            }
                        }),
                        L = new DOMParser().parseFromString(ie, "image/svg+xml").documentElement;
                    if (L.nodeName.toLowerCase() !== "svg") throw new Error("No <svg> element found after parsing.");
                    let I = {};
                    if (Array.from(L.attributes).forEach(E => {
                            I[E.name] = E.value
                        }), g) return;
                    i(I), a(L.innerHTML)
                } catch (f) {
                    console.error(f), g || h(!0)
                }
            })(), () => {
                g = !0
            }
        }, [r]), c ? u.default.createElement(u.default.Fragment, null, n) : s ? u.default.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-hidden": "true",
            dangerouslySetInnerHTML: {
                __html: o
            },
            className: `inline-block ${e}`,
            ...s,
            ...t
        }) : null
    },
    ee = me;
var pe = ({
        show: r = !0,
        config: e
    }) => {
        let n = T(),
            t = C(),
            s = $(e),
            i = m(o => {
                o.services.showResourceCenter(o, !t.resourceCenter.visible)
            }, [t.resourceCenter.visible]);
        if (e.type === "anchorElement") return e.anchorElement ? R.default.createElement(Z, {
            anchor: e.anchorElement
        }) : (y.error("Resource center has an 'anchorElement' launcher with no target element"), null);
        if (!r) return null;
        switch (e.type) {
            case "none":
                return null;
            case "customIcon":
            case "builtInIcon":
                {
                    if (!e.iconSrc) return y.error(`Resource center has a '${e.type}' launcher with no icon src`), null;
                    let o = /\.svg$/.test(e.iconSrc);
                    return R.default.createElement("div", {
                        style: s,
                        "data-testid": "resource-center-launcher"
                    }, R.default.createElement(Q, {
                        theme: n,
                        onClick: i
                    }, o ? R.default.createElement(ee, {
                        src: e.iconSrc,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : R.default.createElement("img", {
                        src: e.iconSrc,
                        width: "100%",
                        height: "100%",
                        alt: ""
                    })))
                }
            default:
                return y.error(`Unsupported resource center icon type '${e.type}'`), null
        }
    },
    re = pe;
var p = l(d());
var te = l(d());
var fe = ({
        windowPosition: r
    }) => {
        let [e, n] = te.default.useState(null), {
            isMobileDevice: t
        } = F();
        return Y(t ? null : e), b(B, {
            parentCallbackRef: n,
            windowPosition: r
        })
    },
    oe = fe;
var de = ({
        windowPosition: r
    }) => {
        let e = m(w),
            n = m(G),
            t = C(),
            {
                organization: s
            } = t,
            i = (0, p.useRef)(!1);
        return (0, p.useEffect)(() => {
            let o = k();
            o && !o._isProxy && !o.assistant && (o.assistant = X)
        }, []), (0, p.useEffect)(() => {
            var h;
            if (!s || i.current) return;
            let o = new URLSearchParams(window.location.search),
                a = o.get("resource_center_id"),
                c = decodeURIComponent((h = o.get("resource_center_query")) != null ? h : "");
            a ? (i.current = !0, n({
                page: D.Docs,
                params: {
                    docId: a
                }
            }), e(!0, {
                query: c
            })) : c && (i.current = !0, e(!0, {
                query: c
            }))
        }, [s, n, e]), p.default.createElement(O, {
            widget: "helphub",
            isMounted: t.resourceCenter.visible
        }, p.default.createElement(oe, {
            key: t.resourceCenter.key,
            windowPosition: r
        }))
    },
    ne = de;
var P = l(d()),
    he = ({
        isEnabled: r,
        isLauncherEnabled: e,
        isVisible: n,
        isPreviewPane: t,
        launcher: s,
        windowPosition: i
    }) => {
        let o = C(),
            a = s || {
                type: "builtInIcon",
                position: "bottomRight",
                offsetX: 0,
                offsetY: 0,
                iconSrc: "https://cdn.amplitude.com/resource-center/static/icons/help-circle.svg",
                zIndex: M.Z_LAUNCHER
            },
            c = s == null ? void 0 : s.pageTargeting,
            h = !c || A(o, c.configs || [], c.conditions),
            g = !(t || n) && h,
            f = a.type === "builtInIcon" || a.type === "customIcon";
        return r || t ? P.default.createElement(V, null, P.default.createElement(re, {
            show: f ? e && g : g,
            config: a
        }), P.default.createElement(ne, {
            windowPosition: i
        })) : null
    },
    cr = he;
export {
    he as ResourceCenterRoot, cr as
    default
};