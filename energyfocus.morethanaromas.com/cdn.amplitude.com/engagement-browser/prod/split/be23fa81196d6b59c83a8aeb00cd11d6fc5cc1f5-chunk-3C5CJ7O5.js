import {
    a as er,
    b as xt,
    c as zt,
    e as ur,
    f as dr,
    g as Er,
    h as Ir,
    i as qe,
    j as Lr,
    k as Hr,
    l as Pr,
    n as Vr,
    o as Br,
    p as qt,
    q as Or,
    r as et,
    s as _t,
    u as To,
    v as Hi
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-4UYE3ASQ.js";
import {
    a as Dr
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-6B5OP34Y.js";
import {
    a as Fr,
    b as ge,
    c as zr,
    d as Nr,
    e as Kr,
    f as Ur,
    g as qr,
    h as pt,
    i as Wt,
    j as ft,
    k as Wr,
    l as $t,
    m as $r,
    n as ko,
    o as Qr,
    p as Qt,
    q as Gr,
    r as De,
    s as Pe,
    t as Gt,
    u as Yr,
    w as Xr,
    x as Zr,
    y as Yt,
    z as Jr
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-4EB7EJYW.js";
import {
    A as mr,
    D as ze,
    E as xe,
    F as Ne,
    G as Ar,
    J as Mt,
    K as We,
    d as Re,
    p as sr,
    t as ar,
    w as dt,
    x as lr,
    y as cr
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-7B2P2PNW.js";
import {
    $c as mt,
    Ad as xr,
    Bd as wo,
    Cd as _r,
    Dc as ir,
    Gc as Je,
    Gd as Mr,
    Kc as je,
    Ob as _,
    Qb as So,
    Sc as k,
    Td as rt,
    Uc as Ce,
    Xa as nr,
    Xc as pr,
    Zc as Nt,
    aa as s,
    ad as fr,
    bd as gr,
    c as x,
    ca as N,
    d as Zo,
    e as E,
    ed as hr,
    f as Jo,
    fd as Kt,
    g as jo,
    gb as Ot,
    ha as V,
    hd as yr,
    id as vr,
    jd as br,
    ka as Ue,
    kd as Cr,
    la as tr,
    nd as Sr,
    oa as ut,
    pa as Vt,
    q as Te,
    s as ke,
    sa as Bt,
    sb as Ft,
    td as wr,
    ud as Tr,
    v as Oe,
    wd as kr,
    xa as or,
    yd as Ut,
    za as rr,
    zd as Rr
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var ue = x(E()),
    Ii = x(Jo());
var ye = x(E());
var en = ({
    resizeElement: e,
    minHeight: t = 100,
    minWidth: r = 350,
    setHeight: i,
    setWidth: a
}) => {
    let l = ye.default.useRef(!1),
        n = ye.default.useRef(!1),
        o = ye.default.useRef(440),
        d = ye.default.useRef(440),
        u = ye.default.useRef(440),
        p = ye.default.useRef(440),
        c = ye.default.useRef(Math.max(window.innerHeight - 100, e.getBoundingClientRect().height)),
        m = ye.default.useRef(Math.max(window.innerWidth - 100, e.getBoundingClientRect().width)),
        f = g => {
            l.current = !0, o.current = e.getBoundingClientRect().height, u.current = g.clientY
        },
        v = g => {
            n.current = !0, d.current = e.getBoundingClientRect().width, p.current = g.clientX
        },
        h = g => {
            f(g), v(g)
        };
    return ye.default.useEffect(() => {
        let g = y => {
            if (y.stopPropagation(), l.current) {
                let T = o.current - (y.clientY - u.current);
                T > t && T < c.current && i(T)
            }
            if (n.current) {
                let T = d.current - (y.clientX - p.current);
                T > r && T < m.current && a(T)
            }
        };
        return document.addEventListener("mousemove", g), () => {
            document.removeEventListener("mousemove", g)
        }
    }, []), ye.default.useEffect(() => {
        let g = () => {
            l.current = !1, n.current = !1
        };
        return document.addEventListener("mouseup", g), () => {
            document.removeEventListener("mouseup", g)
        }
    }, []), ye.default.createElement(ye.default.Fragment, null, ye.default.createElement("div", {
        role: "button",
        tabIndex: -1,
        onMouseDown: f,
        "aria-label": "Resize top",
        style: {
            height: "5px",
            cursor: "ns-resize",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            zIndex: Ue.Z_DRAGGERS,
            backgroundColor: "transparent",
            margin: "0px 11px"
        }
    }), ye.default.createElement("div", {
        role: "button",
        tabIndex: -1,
        onMouseDown: v,
        "aria-label": "Resize left",
        style: {
            width: "5px",
            cursor: "ew-resize",
            padding: "4px 0 0",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: Ue.Z_DRAGGERS,
            backgroundColor: "transparent",
            margin: "11px 0px"
        }
    }), ye.default.createElement("div", {
        role: "button",
        tabIndex: -1,
        onMouseDown: h,
        "aria-label": "Resize top left",
        style: {
            width: "11px",
            height: "11px",
            cursor: "nwse-resize",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: Ue.Z_DRAGGERS,
            backgroundColor: "transparent"
        }
    }))
};
var Lt = x(E());
var _e = x(E());
var Xt = x(E()),
    Di = e => {
        let [t, r] = (0, Xt.useState)(!1);
        return (0, Xt.useEffect)(() => {
            let i = () => r(!0);
            return e.current && e.current.addEventListener("scroll", i), () => {
                if (e.current) return e.current.removeEventListener("scroll", i)
            }
        }, [t]), {
            hasScrolled: t
        }
    },
    tn = Di;
var nt = x(E()),
    on = e => {
        let [t, r] = nt.default.useState(null), [i, a] = nt.default.useState(0), l = nt.default.useRef({});
        return nt.default.useEffect(() => {
            if (!t) return;
            let n = new MutationObserver(() => {
                a(o => o + 1)
            });
            return n.observe(t, {
                subtree: !0,
                childList: !0
            }), () => {
                n.disconnect()
            }
        }, [t]), nt.default.useEffect(() => {
            if (!t) return;
            let n = t.querySelectorAll("a"),
                o = t.querySelectorAll("video"),
                d = [];
            return n.forEach(u => {
                u.addEventListener("click", e.anchorClickHandler), d.push(() => u.removeEventListener("click", e.anchorClickHandler))
            }), o.forEach((u, p) => {
                let c = () => {
                    l.current[`video-${p}`] = Date.now(), e.videoPlayHandler()
                };
                if (u.addEventListener("play", c), d.push(() => u.removeEventListener("play", c)), e.videoPauseHandler) {
                    let m = () => {
                        var f;
                        (f = e.videoPauseHandler) == null || f.call(e)
                    };
                    u.addEventListener("pause", m), d.push(() => u.removeEventListener("pause", m))
                }
                if (e.videoCloseHandler) {
                    let m = () => {
                        let f = l.current[`video-${p}`];
                        if (f && e.videoCloseHandler) {
                            let v = Date.now() - f;
                            e.videoCloseHandler(v), delete l.current[`video-${p}`]
                        }
                    };
                    u.addEventListener("ended", m), d.push(() => u.removeEventListener("ended", m))
                }
            }), () => {
                d.forEach(u => u())
            }
        }, [t, i, e.videoCloseHandler, e.videoPauseHandler]), nt.default.createElement("div", {
            ref: r,
            style: {
                height: "100%"
            }
        }, e.children)
    };
var rn = x(mr()),
    Zt = e => {
        let t = String(e != null ? e : "").trim();
        if (!t.startsWith("https://")) return !1;
        try {
            return new URL(t).protocol === "https:"
        } catch (r) {
            return !1
        }
    },
    Ro = null,
    Pi = () => {
        if (Ro) return Ro;
        let e = (0, rn.default)();
        return e.addHook("uponSanitizeAttribute", (t, r) => {
            if (/^on/i.test(r.attrName) && (r.keepAttr = !1), r.tagName && r.tagName.toLowerCase() === "iframe") {
                let i = r.attrName.toLowerCase();
                if (i === "src" || i === "data-hsv-src") {
                    let a = String(r.attrValue || "");
                    Zt(a) || (r.keepAttr = !1)
                }
            }
        }), e.addHook("afterSanitizeAttributes", t => {
            if (!t.tagName || t.tagName.toLowerCase() !== "iframe") return;
            let r = t.getAttribute("src") || "";
            r && !Zt(r) && (t.removeAttribute("src"), r = "");
            let i = t.getAttribute("data-hsv-src") || "";
            i && !Zt(i) && t.removeAttribute("data-hsv-src");
            let a = t.getAttribute("data-hsv-src") || "";
            Zt(a) && !r && t.setAttribute("src", a.trim()), t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-presentation")
        }), Ro = e, e
    },
    nn = e => {
        if (!e) return "";
        try {
            return Pi().sanitize(e, {
                ADD_TAGS: ["iframe"],
                ADD_ATTR: ["src", "title", "allow", "allowfullscreen", "frameborder", "height", "width", "referrerpolicy", "sandbox", "data-hsv-src"],
                FORBID_TAGS: ["object", "embed"]
            })
        } catch (t) {
            return ""
        }
    };
var sn = x(E());
var an = k.div `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0px 0px var(--layout-radius-card) var(--layout-radius-card);
  background: var(--background-primary);

  z-index: ${Ue.Z_RESOURCE_CENTER};
`,
    Vi = k(an)
`
  background: linear-gradient(var(--form-control-active-background) 20%, var(--background-primary) 40%);
`, Bi = sn.default.forwardRef(({
    fading: e,
    children: t,
    ...r
}, i) => e ? s(Vi, {
    ref: i,
    ...r
}, t) : s(an, {
    ref: i,
    ...r
}, t)), Jt = Bi;
var ln = x(E());
var Oi = k.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--layout-padding);
  gap: var(--layout-gap);
  flex: 1 0 0;
  align-self: stretch;
  overflow: auto;

  /* ResourceCenter/Paragraph - apply to both parent and p tags */
  &,
  p {
    font-family: var(--font-font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-regular);
    line-height: var(--font-line-height-normal);
    color: var(--content-secondary);
  }
`,
    Fi = ln.default.forwardRef(({
        children: e,
        ...t
    }, r) => s(Oi, {
        ref: r,
        ...t
    }, e)),
    cn = Fi;
var un = x(E());
var zi = k.div `
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  color: var(--content-primary);

  /* ResourceCenter/H1 */
  font-family: var(--font-font-family);
  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-bold);
  line-height: var(--font-line-height-tight);
`,
    Ni = un.default.forwardRef(({
        children: e,
        ...t
    }, r) => s(zi, {
        ref: r,
        ...t
    }, e)),
    dn = Ni;
var Ki = k.div `
  width: 100%;

  img {
    all: unset;
    display: block;
    max-width: 100%;
    height: auto;
    box-shadow: var(--form-control-shadow) var(--form-control-shadow-color);
    border: 1px solid var(--border-primary);
    margin: var(--layout-gap) auto;
  }
  mark {
    padding: 0;
    color: var(--content-secondary);
    border-radius: 2px;
    background-color: var(--highlight-color);
  }
  p:empty {
    display: none;
  }
  ol,
  ul {
    padding-inline-start: var(--form-control-padding-x);
    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
  }
  li {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-base);
    line-height: var(--font-line-height-normal);
    color: var(--content-primary);

    text-align: left;
    padding-left: 0.5em;
    margin-left: 1em;
  }
  a {
    all: unset;
    color: var(--content-link);
    text-decoration: underline;
    cursor: pointer;
    border-radius: 2px;
  }
  a:visited {
    color: var(--content-link-visited);
  }
  a:hover {
    color: var(--content-link-hover);
  }
  a:focus {
    box-shadow: 0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color);
    color: var(--content-link-hover);
    outline: none;
  }
  a:focus-visible {
    outline: none;
  }
  p {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-base);
    line-height: var(--font-line-height-normal);
    color: var(--content-primary);

    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
  }
  span {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-regular);
    font-size: var(--font-size-base);
    line-height: var(--font-line-height-normal);
    color: inherit;
  }
  strong {
    font-weight: var(--font-weight-bold);
  }
  b {
    font-weight: var(--font-weight-bold);
  }
  h1 {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-extra-large);
    line-height: var(--font-line-height-tight);
    color: var(--content-primary);

    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
    text-align: left;
  }
  h2 {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-large);
    line-height: var(--font-line-height-tight);
    color: var(--content-primary);

    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
    text-align: left;
  }
  h3 {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-base);
    line-height: var(--font-line-height-normal);
    color: var(--content-primary);

    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
    text-align: left;
  }
  h4 {
    font-family: var(--font-font-family);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-base);
    line-height: var(--font-line-height-normal);
    color: var(--content-primary);

    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
    text-align: left;
  }
  iframe {
    max-width: 100%;
    width: 100% !important;
    height: auto;
  }
  video {
    all: unset;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
  table {
    border-collapse: collapse;
  }
  table:not(:has(th:not(:empty), td:not(:empty))) {
    display: none;
  }
  thead {
    p {
      margin-block-start: 0.2em;
      margin-block-end: 0.2em;
    }
    th {
      border: 1px solid var(--border-primary);
    }
    tr {
      border: 1px solid var(--border-primary);
    }
  }
  td {
    border: 1px solid var(--border-primary);
    padding: 0px 5px;
  }
  tbody {
    vertical-align: top;
    p {
      margin-block-start: 0.1em;
      margin-block-end: 0.1em;
    }
  }
  div {
    margin-block-start: var(--layout-gap);
    margin-block-end: var(--layout-gap);
  }

  // Do not add extra margin to divs nested > 3 levels deep
  // Otherwise, there is too much whitespace in e.g. Notion docs
  div div div div {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: var(--background-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--layout-radius-button);
    padding: var(--form-control-padding-x);
    margin: var(--layout-gap) 0;
    overflow-x: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-normal);
    color: var(--content-primary);
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: var(--font-size-small);
    background-color: var(--background-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--layout-radius-button);
    color: var(--content-primary);
    padding: 1px 3px;
    word-break: break-word;
  }

  pre code {
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: inherit;
    white-space: pre;
    word-break: normal;
    overflow-wrap: normal;
    display: block;
    width: 100%;
  }

  /* Handle markdown code blocks specifically */
  pre > code {
    display: block;
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
    border-radius: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre;
    background-color: var(--background-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--layout-radius-button);
    padding: var(--form-control-padding-x);
    margin: var(--layout-gap) 0;
    overflow-x: auto;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-normal);
    color: var(--content-primary);
  }

  code {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: var(--font-size-small);
    background-color: var(--background-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--layout-radius-button);
    color: var(--content-primary);
    padding: 1px 3px;
  }

  pre code {
    background-color: transparent;
    border: none;
    padding: 0;
    font-size: inherit;
  }

  /* Style for fenced code blocks with language identifiers */
  pre[class*='language-'],
  pre[class*='lang-'] {
    position: relative;
  }

  /* Ensure proper spacing and layout for code blocks */
  .code-block,
  .highlight {
    margin: var(--layout-gap) 0;
  }

  .code-block pre,
  .highlight pre {
    margin: 0;
  }

  button {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: transparent solid 2px;
    outline-offset: 2px;
    line-height: var(--font-line-height-tight);
    border-radius: var(--layout-radius-button);
    font-weight: var(--font-weight-medium);
    transition-property: background-color, color, transform;
    height: var(--form-control-height);
    min-width: var(--form-control-width);
    font-size: var(--font-size-base);
    padding-inline-start: var(--form-control-padding-x);
    padding-inline-end: 0.75em;
    background-color: var(--button-primary-background);
    color: var(--button-primary-content);
    &:hover {
      background-color: var(--button-primary-background-hover);
    }
  }
`,
    Ui = ({
        children: e
    }) => s(Ki, null, e),
    mn = Ui;
var xo = x(E());
var tt = x(E());
var pn = {
        display: "flex",
        width: "var(--form-control-height)",
        height: "var(--form-control-height)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--form-control-gap)",
        color: "var(--button-secondary-content)",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--button-secondary-border-color)",
        background: "var(--button-secondary-background)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        userSelect: "none",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-semibold)",
        lineHeight: "var(--font-line-height-normal)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "&:hover": {
            borderColor: "var(--button-secondary-border-color-hover)",
            background: "var(--button-secondary-background-hover)",
            color: "var(--button-secondary-content-hover)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            background: "var(--button-secondary-background-hover)"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&:disabled": {
            cursor: "not-allowed",
            borderColor: "var(--button-secondary-border-color)",
            background: "var(--button-secondary-background)",
            color: "var(--button-secondary-content)"
        }
    },
    fn = "secondaryIconButton",
    Et = ({
        children: e,
        theme: t,
        ...r
    }) => {
        let {
            overrides: i
        } = ze(fn, t);
        return s(Ne, {
            css: [i, N(pn)],
            ...r
        }, s(xe, null, e))
    };
Et.styles = pn;
Et.slug = fn;
Et.renderMock = (e, t) => s(Et, {
    theme: {
        theme: e,
        mode: t
    }
}, s(hr, null));
var gn = Et;
var qi = ({
        theme: e,
        src: t,
        visible: r,
        onClose: i
    }) => {
        let [a, l] = (0, tt.useState)({
            width: 0,
            height: 0
        }), [n, o] = (0, tt.useState)({
            width: 0,
            height: 0
        }), d = (0, tt.useCallback)(() => {
            let m = ar() ? 56 : 80;
            o({
                width: window.innerWidth - m,
                height: window.innerHeight - m
            })
        }, []);
        (0, tt.useEffect)(() => (d(), window.addEventListener("resize", d), () => window.removeEventListener("resize", d)), [d]), (0, tt.useEffect)(() => {
            let m = new Image;
            m.onload = () => {
                l({
                    width: m.width,
                    height: m.height
                })
            }, m.src = t
        }, [t]);
        let u = () => {
                let m = a.width / a.height,
                    f = a.width,
                    v = a.height;
                return f > n.width && (f = n.width, v = f / m), v > n.height && (v = n.height, f = v * m), {
                    width: f,
                    height: v
                }
            },
            {
                width: p,
                height: c
            } = u();
        return s(dr, {
            visible: r,
            onClose: i,
            "aria-modal": "true",
            classNames: {
                wrapper: `engagement-nudge-modal ${e.generatedCSSClassname}`
            },
            bodyStyle: {
                background: "var(--background-primary)",
                borderRadius: "0px",
                padding: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            style: {
                background: "var(--background-primary)",
                border: "none",
                borderRadius: "0px",
                margin: "var(--layout-padding)",
                width: `${p}px`,
                height: `${c}px`,
                maxWidth: "100%",
                maxHeight: "100%"
            },
            styles: {
                mask: {
                    zIndex: Ue.Z_MASK
                }
            },
            css: N `
        .rc-dialog-close {
          opacity: 1;
        }
        .rc-dialog-content {
          background: var(--background-primary);
          border-radius: 0;
          height: 100%;
        }
      `,
            closeIcon: s(gn, {
                style: {
                    position: "fixed",
                    top: "var(--layout-padding)",
                    right: "var(--layout-padding)",
                    color: "var(--content-primary)"
                },
                theme: e,
                onClick: i
            }, s(rt, null))
        }, s("img", {
            style: {
                width: "100%",
                height: "100%",
                objectFit: "contain"
            },
            src: t,
            alt: t
        }))
    },
    hn = qi;
var Wi = {
        cursor: "pointer",
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    $i = ({
        imgElement: e,
        theme: t
    }) => {
        let [r, i] = xo.default.useState(!1), a = () => i(!0), l = n => {
            n.key === "Enter" && a()
        };
        return s(xo.default.Fragment, null, s("div", {
            onClick: a,
            onKeyDown: l,
            css: N(Wi),
            tabIndex: 0,
            role: "button"
        }, s("img", {
            src: e.src,
            alt: e.alt
        })), s(hn, {
            theme: t,
            src: e.src,
            visible: r,
            onClose: () => i(!1)
        }))
    },
    yn = $i;
var ot = x(E()),
    _o = x(Jo()),
    vn = ({
        html: e
    }) => {
        let t = (0, ot.useRef)(null),
            r = Re();
        return (0, ot.useEffect)(() => {
            let i = t.current;
            i && (i.innerHTML = e)
        }, [e]), (0, ot.useEffect)(() => {
            let i = t.current;
            if (!i) return;
            let a = i.querySelectorAll("img");
            return a.forEach(l => {
                var o;
                let n = document.createElement("div");
                (o = l.parentNode) == null || o.replaceChild(n, l), _o.default.render(ot.default.createElement(yn, {
                    theme: r,
                    imgElement: l
                }), n)
            }), () => {
                a.forEach(l => {
                    let n = l.parentElement;
                    n && _o.default.unmountComponentAtNode(n)
                })
            }
        }, [e, r]), ot.default.createElement("div", {
            ref: t
        })
    };
var Cn = x(E());
var Qi = {
    id: -1,
    title: "",
    url: "",
    content: "",
    contentType: "document",
    showViewArticleButton: !1,
    showCopyLinkButton: !1
};

function bn({
    apiKey: e,
    urls: t
}) {
    let r = Ur(),
        i = t.map(a => Wt(a, e));
    return pt({
        queryKey: ["contentItems", e, [...i].sort()],
        queryFn: async () => {
            if (!i.length) return {
                totalUrls: 0,
                fetchedUrls: 0,
                cached: !0
            };
            let a = i.filter(n => !r.getQueryData(["contentItem", e, n]));
            if (a.length === 0) return {
                totalUrls: i.length,
                fetchedUrls: 0,
                cached: !0
            };
            let l = a.map(async n => {
                let o = null;
                try {
                    o = (await ut(`/sdk/resource_center/v1/contentitem_by_url?target_url=${n}`, {
                        headers: {
                            Authorization: `Api-Key ${e}`
                        }
                    })).data
                } catch (d) {
                    console.warn(`Failed to fetch content item for URL: ${n}`, d)
                }
                r.setQueryData(["contentItem", e, n], o != null ? o : Qi), o != null && o.id && r.setQueryData(["contentItem", e, o.id], o)
            });
            return await Promise.all(l), {
                totalUrls: i.length,
                fetchedUrls: a.length,
                cached: !0
            }
        },
        enabled: !!e && i.length > 0
    })
}
var Gi = e => {
        let i = new DOMParser().parseFromString(e, "text/html").querySelectorAll("a[href]");
        return Array.from(i).map(a => {
            var l;
            return {
                href: a.getAttribute("href"),
                text: (l = a.textContent) == null ? void 0 : l.trim(),
                element: a
            }
        })
    },
    Sn = e => {
        var i;
        let t = (0, Cn.useMemo)(() => e ? Gi(e) : [], [e]),
            r = (i = Te()) == null ? void 0 : i[ke].apiKey;
        bn({
            apiKey: r,
            urls: t.map(a => a.href).filter(a => a !== null)
        })
    };
var Yi = [12, 8, 5],
    Xi = e => {
        var f, v, h, g, y, T;
        let t = new DOMParser().parseFromString(e, "text/html"),
            r = t.createTreeWalker(t.body, NodeFilter.SHOW_TEXT),
            i = [],
            a;
        for (; a = r.nextNode();) {
            let b = !!(a.parentElement && a.parentElement.closest("mark")),
                S = a.data;
            for (let O = 0; O < S.length; O++) i.push({
                char: S.charAt(O),
                marked: b
            })
        }
        let l = "",
            n = [],
            o = !1;
        for (let {
                char: b,
                marked: S
            } of i) {
            if (/\s/.test(b)) {
                o = l.length > 0;
                continue
            }
            if (o) {
                let O = (f = n[n.length - 1]) != null ? f : !1;
                l += " ", n.push(O && S), o = !1
            }
            l += b, n.push(S)
        }
        let d = (h = (v = l.match(/^[\s.…]+/)) == null ? void 0 : v[0].length) != null ? h : 0,
            u = (y = (g = l.match(/[\s.…]+$/)) == null ? void 0 : g[0].length) != null ? y : 0;
        l = l.slice(d, l.length - u);
        let p = n.slice(d, d + l.length),
            c = [],
            m = -1;
        for (let b = 0; b <= p.length; b++) {
            let S = (T = p[b]) != null ? T : !1;
            S && m === -1 ? m = b : !S && m !== -1 && (c.push({
                start: m,
                end: b
            }), m = -1)
        }
        return {
            text: l,
            termRanges: c
        }
    };
var Zi = e => {
        let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
            r = [],
            i;
        for (; i = t.nextNode();) r.push(i);
        return r
    },
    Ji = e => {
        let t = "",
            r = [],
            i = !1;
        for (let a of e) {
            let l = a.data;
            for (let n = 0; n < l.length; n++) {
                let o = l.charAt(n);
                if (/\s/.test(o)) {
                    i = t.length > 0;
                    continue
                }
                i && (t += " ", r.push({
                    node: a,
                    offset: n
                }), i = !1), t += o.toLowerCase(), r.push({
                    node: a,
                    offset: n
                })
            }
        }
        return {
            text: t,
            sources: r
        }
    },
    ji = e => {
        let t = e.split(" "),
            r = [e];
        for (let i of Yi) t.length > i && r.push(t.slice(0, i).join(" "));
        return r.filter(i => i.length >= 12)
    },
    es = (e, t, r) => {
        var l, n;
        let i = [],
            a = t;
        for (; a <= r;) {
            let o = e[a];
            if (!o) break;
            let d = o.node,
                u = a;
            for (; u + 1 <= r && ((l = e[u + 1]) == null ? void 0 : l.node) === d;) u++;
            let p = (n = e[u]) != null ? n : o,
                c = document.createRange();
            c.setStart(d, o.offset), c.setEnd(d, p.offset + 1);
            let m = document.createElement("mark");
            c.surroundContents(m), i.push(m), a = u + 1
        }
        return i
    },
    wn = (e, t) => {
        var o;
        let {
            text: r,
            termRanges: i
        } = Xi(t), a = r.toLowerCase();
        if (i.length === 0 || a.length < 12) return null;
        let {
            text: l,
            sources: n
        } = Ji(Zi(e));
        for (let d of ji(a)) {
            let u = l.indexOf(d);
            if (u === -1) continue;
            let p = i.map(({
                start: c,
                end: m
            }) => ({
                start: c,
                end: Math.min(m, d.length)
            })).filter(({
                start: c,
                end: m
            }) => c < d.length && m > c);
            if (p.length === 0) return null;
            try {
                let c = [];
                for (let m of [...p].reverse()) c.unshift(...es(n, u + m.start, u + m.end - 1));
                return (o = c[0]) != null ? o : null
            } catch (c) {
                return null
            }
        }
        return null
    };
var ts = () => {
        var W;
        let {
            back: e,
            navigate: t
        } = ge(), r = zr(), {
            docId: i,
            docUrl: a,
            excerpt: l
        } = r, n = (W = Te()) == null ? void 0 : W[ke].apiKey, {
            data: o,
            isError: d,
            isFetching: u
        } = ft({
            apiKey: n,
            id: i,
            url: a
        });
        Sn(o == null ? void 0 : o.content);
        let p = (0, _e.useRef)(!1),
            c = (0, _e.useRef)(0),
            m = (0, _e.useRef)(null),
            {
                hasScrolled: f
            } = tn(m),
            v = R => {
                let B = R.querySelector("mark");
                return B ? (B.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                }), !0) : !1
            },
            h = () => {
                setTimeout(() => {
                    m.current && !p.current && (l && wn(m.current, l), v(m.current) && (p.current = !0))
                }, 150)
            },
            g = (0, _e.useCallback)(R => {
                m.current = R, h()
            }, []);
        _e.default.useEffect(() => {
            f && o && _.resourceCenter.articleScrolled(o.title, o.url, null)
        }, [f, o]), _e.default.useEffect(() => {
            if (o) {
                if (c.current = Date.now(), o.contentType === "video" ? _.resourceCenter.videoViewed(o.title, o.url, null) : _.resourceCenter.articleViewed(o.title, o.url, null), m.current) {
                    let R = m.current.querySelector("h1");
                    R && R.innerText === (o == null ? void 0 : o.content) && (R.style.display = "none")
                }
                return () => {
                    let R = Date.now() - c.current;
                    o.contentType === "video" ? _.resourceCenter.videoClosed(o.title, o.url, null, R) : _.resourceCenter.articleClosed(o.title, o.url, null, R)
                }
            }
        }, [o]), _e.default.useEffect(() => {
            let R = B => {
                B.key === "Enter" && B.shiftKey && (B.preventDefault(), B.stopPropagation(), qt())
            };
            return document.addEventListener("keydown", R), () => {
                document.removeEventListener("keydown", R)
            }
        }, []);
        let y = R => {
                if (m.current && R.length > 1) {
                    let B = document.evaluate(R, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    if (B) return B.innerHTML = `<mark>${B.textContent}</mark>`, B.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    }), !0
                }
                return !1
            },
            T = R => {
                if (R.length > 1) {
                    let B = `//*[(self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6 or self::a) and @id='${R}']`;
                    if (y(B)) return !0;
                    let H = `//*[(self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6 or self::a) and translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ', 'abcdefghijklmnopqrstuvwxyz-')='${R}']`;
                    return y(H)
                }
                return !1
            },
            b = R => {
                var D;
                if (R.metaKey || R.ctrlKey) return;
                R.stopPropagation(), R.preventDefault();
                let B = (D = R == null ? void 0 : R.currentTarget) == null ? void 0 : D.getAttribute("href"),
                    [H, F] = B ? B.split("#") : [],
                    Q = H && Wt(H, n);
                if (o && B && _.resourceCenter.articleLinkClicked(o.title, o.url, null, B), !Q) return F ? T(F) : void 0;
                let w = o == null ? void 0 : o.url;
                if (w && Q === w) return F ? T(F) : void 0;
                t({
                    page: "docs",
                    params: {
                        docUrl: H
                    }
                })
            },
            S = () => {
                o && _.resourceCenter.videoPlayed(o.title, o.url, null)
            },
            O = () => {
                o && _.resourceCenter.videoPaused(o.title, o.url, null)
            },
            re = R => {
                o && _.resourceCenter.videoClosed(o.title, o.url, null, R)
            },
            Y = (0, _e.useMemo)(() => nn(o == null ? void 0 : o.content), [o]);
        return (0, _e.useEffect)(() => {
            if (!a || u) return;
            ((o == null ? void 0 : o.id) === -1 || d) && (e(), window.open(a, "_blank"))
        }, [o, d, u, e, a]), s(on, {
            anchorClickHandler: b,
            videoPlayHandler: S,
            videoPauseHandler: O,
            videoCloseHandler: re
        }, s(Jt, null, o && s(cn, {
            ref: g
        }, s(dn, {
            "data-testid": "resource-center-article-title"
        }, o.title), o.contentType === "video" && s("div", {
            style: {
                width: "100%"
            }
        }, s("div", null, o.content), s(Hr, {
            src: o.url,
            variant: "tall"
        })), !!o.content && s(mn, null, s(vn, {
            html: Y
        })))))
    },
    Tn = ts;
var Qe = x(E()),
    ai = x(Hi());
var st = x(E());
var kn = x(E());
var os = {
        height: "calc(var(--form-control-height) + 2 * var(--form-control-padding-x))",
        borderRadius: "var(--layout-radius-button) var(--layout-radius-button) 0px 0px",
        borderWidth: "0 0 1px 0",
        boxShadow: "none",
        "&:hover": {
            borderWidth: "0 0 1px 0",
            borderColor: "var(--form-control-border-color)",
            background: "var(--form-control-background)",
            color: "var(--content-primary)",
            boxShadow: "none"
        },
        "&:focus": {
            boxShadow: "none",
            borderWidth: "0 0 1px 0",
            borderColor: "var(--form-control-border-color)",
            background: "var(--form-control-background)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    },
    rs = {
        height: "calc(var(--form-control-height) + 2 * var(--form-control-padding-x))"
    },
    ns = kn.default.forwardRef(({
        noFocusStyles: e,
        ...t
    }, r) => s(Lr, {
        css: e ? N(os) : N(rs),
        ref: r,
        ...t
    })),
    Rn = ns;
var is = k.div `
  position: absolute;
  ${({position:e="right"})=>e==="left"?"left: var(--form-control-padding-x);":"right: var(--form-control-padding-x);"}
  top: calc(min(var(--form-control-height) / 2, var(--form-control-padding-x)));
`,
    Mo = is;
var ss = k.div `
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  z-index: 1;
  width: calc(100% - 2 * var(--layout-padding));
`,
    as = N `
  background: var(--background-primary);
  border-radius: var(--layout-radius-button);
  border: 1px solid var(--base-accent);
  box-shadow: 0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color);
`,
    ls = ({
        children: e,
        isFocused: t,
        ...r
    }) => s(ss, {
        css: t ? as : void 0,
        ...r
    }, e),
    xn = ls;
var _n = x(E());
var cs = k.div `
  display: flex;
  align-items: flex-start;
  gap: var(--layout-gap);
`,
    us = ({
        children: e,
        ...t
    }) => _n.default.createElement(cs, { ...t
    }, e),
    it = us;
var gt = x(E()),
    ds = () => {
        var a, l;
        let [e, t] = (0, gt.useState)(null), r = (0, gt.useRef)(null);
        return {
            ref: (0, gt.useCallback)(n => {
                if (r.current && r.current.disconnect(), !n) {
                    t(null);
                    return
                }
                r.current = new ResizeObserver(o => {
                    let [d] = o;
                    if (!d) return;
                    let {
                        width: u,
                        height: p
                    } = d.contentRect, {
                        width: c,
                        height: m
                    } = n.getBoundingClientRect();
                    t({
                        width: u,
                        height: p,
                        boundingWidth: c,
                        boundingHeight: m
                    })
                }), r.current.observe(n)
            }, [t]),
            width: e == null ? void 0 : e.width,
            height: e == null ? void 0 : e.height,
            boundingWidth: (a = e == null ? void 0 : e.boundingWidth) != null ? a : 0,
            boundingHeight: (l = e == null ? void 0 : e.boundingHeight) != null ? l : 0
        }
    },
    Eo = ds;
var jt = x(E());
var ms = (e = sr) => {
        let t = `(max-width: ${e-1}px)`,
            [r, i] = (0, jt.useState)(() => window.matchMedia(t).matches);
        return (0, jt.useEffect)(() => {
            let a = window.matchMedia(t),
                l = n => i(n.matches);
            return a.addEventListener("change", l), i(a.matches), () => a.removeEventListener("change", l)
        }, [t]), r
    },
    Mn = ms;
var ps = () => {
        let {
            isMobileDevice: e
        } = dt(), t = Mn();
        return e || t
    },
    ht = ps;
var fs = ({
        query: e,
        isLoading: t,
        onSubmit: r,
        onEnterKey: i,
        inputPlaceholder: a,
        children: l
    }) => {
        let {
            isEditorPreview: n
        } = V(), o = ht(), d = !n && !o, [u, p] = (0, st.useState)(d), c = Re(), {
            ref: m,
            width: f
        } = Eo(), {
            ref: v,
            width: h
        } = Eo(), g = (0, st.useRef)(null), y = (0, st.useRef)(d), T = u && !e && l;
        return (0, st.useEffect)(() => {
            var b;
            y.current && ((b = g.current) == null || b.focus())
        }, []), s(Wr, {
            id: "resource-center-input-container",
            css: {
                height: "calc(var(--form-control-height) + 2 * var(--form-control-padding-x) + 2 * var(--layout-padding))"
            }
        }, s(xn, {
            isFocused: u
        }, s(Mo, {
            position: "left",
            ref: v
        }, s("div", {
            style: {
                paddingTop: "4px"
            }
        }, s(Mr, {
            height: 20,
            width: 20
        }))), s(Rn, {
            ref: g,
            theme: c,
            style: {
                paddingLeft: (h != null ? h : 0) + 16,
                paddingRight: (f != null ? f : 0) + 8,
                ...!T && {
                    borderWidth: "0px",
                    borderRadius: "var(--layout-radius-button)"
                }
            },
            noFocusStyles: u,
            value: e != null ? e : "",
            onChange: b => r(b.target.value, !0),
            onKeyDown: b => {
                b.key === "Enter" && !b.shiftKey && i && (e != null ? e : "").trim() !== "" && (b.preventDefault(), i())
            },
            "data-testid": "resource-center-input",
            placeholder: a,
            onFocus: () => {
                p(!0)
            },
            onBlur: () => {
                p(!1), r(e != null ? e : "", !1)
            },
            "aria-label": "Search input"
        }), s(Mo, {
            ref: m
        }, s(it, null, !!e && !t && s(qe, {
            "aria-label": "close",
            theme: c,
            onClick: () => r("", !1)
        }, s(rt, null)))), T && s("div", {
            style: {
                width: "100%"
            }
        }, l)))
    },
    En = fs;
var vt = x(E());
var $e = x(E()),
    In = (r => (r.ArrowUp = "ArrowUp", r.ArrowDown = "ArrowDown", r))(In || {});
var gs = e => e in In,
    hs = (e, t) => {
        let [r, i] = (0, $e.useState)(-1), [a, l] = (0, $e.useState)("keyboard"), n = (0, $e.useCallback)(p => {
            p.preventDefault();
            let c = p.key === "ArrowDown" ? 1 : -1,
                m = (e == null ? void 0 : e.length) || 0;
            l("keyboard"), i(f => ((f !== -1 ? f + c : 0) + m) % m)
        }, [e == null ? void 0 : e.length, i]), o = (0, $e.useCallback)(p => {
            if (r !== -1) {
                p.preventDefault();
                let c = e == null ? void 0 : e[r];
                c && t(c)
            }
        }, [t, r, e]);
        return (0, $e.useEffect)(() => {
            i(-1)
        }, [e == null ? void 0 : e.length]), (0, $e.useEffect)(() => {
            let p = c => {
                gs(c.key) ? n(c) : c.key === "Enter" && o(c)
            };
            return document.addEventListener("keydown", p), () => {
                document.removeEventListener("keydown", p)
            }
        }, [n, o]), {
            currentIndex: r,
            selectionMethod: a,
            onMouseMove: p => {
                l("mouse"), i(p)
            },
            onMouseLeave: () => {
                i(-1)
            }
        }
    },
    eo = hs;
var An = x(E());
var ys = k.div `
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--layout-gap);
  align-self: stretch;
`,
    vs = An.default.forwardRef(({
        children: e,
        ...t
    }, r) => s(ys, {
        ref: r,
        ...t
    }, e)),
    to = vs;
var Ln = x(E());
var bs = k.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  overflow-y: auto;

  padding: var(--layout-gap) var(--layout-padding) var(--layout-gap) var(--layout-padding);
  gap: var(--layout-gap);

  flex: 1;
`,
    Cs = Ln.default.forwardRef(({
        children: e,
        ...t
    }, r) => s(bs, {
        ref: r,
        ...t
    }, e)),
    oo = Cs;
var Ss = k.div `
  display: flex;
  justify-content: space-between;
  gap: var(--layout-gap);
  align-items: center;
  align-self: stretch;
`,
    ws = ({
        children: e,
        ...t
    }) => s(Ss, { ...t
    }, e),
    Hn = ws;
var Ts = k.div `
  color: var(--content-secondary);

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
`,
    ks = ({
        children: e,
        ...t
    }) => s(Ts, { ...t
    }, e),
    Io = ks;
var Rs = k.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 56px 8px;
`,
    xs = k.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,
    _s = k.span `
  color: var(--content-primary);

  /* label/lg/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-snug);
`,
    Ms = k.span `
  color: var(--content-secondary);

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
`,
    Es = k.span `
  color: var(--content-secondary);
`,
    Is = () => {
        let e = V();
        return s(Rs, null, s(Es, null, s(Cr, {
            height: "32px",
            width: "32px"
        })), s(xs, null, s(_s, null, e.resourceCenter.textStrings.noResultsTitle), s(Ms, null, e.resourceCenter.textStrings.noResultsDescription)))
    },
    Dn = Is;
var io = x(E()),
    Nn = x(mr());
var Ao = x(E());
var As = e => ({ ...e ? {} : {
            background: "var(--button-primary-background-hover)"
        },
        "&::after": {
            background: "rgba(255, 255, 255, 0.16)"
        },
        border: "1px solid var(--button-primary-border-color-hover)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "--button-primary-content": "var(--button-primary-content-hover)"
    }),
    Lo = e => ({
        position: "relative",
        display: "flex",
        height: "100%",
        padding: "0px 16px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "left",
        flex: "1 0 0",
        maxWidth: "calc(50% - var(--layout-gap) / 2)",
        cursor: "pointer",
        borderRadius: "var(--layout-radius-button)",
        border: "1px solid var(--button-primary-border-color)",
        background: "var(--button-primary-background)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        overflow: "hidden",
        transition: "border-color 120ms ease-out, box-shadow 120ms ease-out",
        "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background: "rgba(255, 255, 255, 0)",
            transition: "background-color 120ms ease-out"
        },
        ...e ? {
            backgroundImage: `url('${encodeURI(e)}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        } : {},
        "&[data-active='true']": As(e),
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:focus-visible": {
            outline: "none"
        }
    }),
    Ls = {
        background: "linear-gradient(89deg, #d9d9d9 13.8%, #c9c9c9 30.92%, #d9d9d9 48.56%)"
    },
    Pn = k.div `
  color: var(--button-primary-content);
  z-index: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  /* label/xl/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-tight);
`,
    Hs = k.div `
  z-index: 1;
  width: min(72%, 280px);
  height: 20px;
  border-radius: 6px;
  background: rgb(255 255 255 / 32%);
`,
    Vn = k.div `
  display: flex;
  z-index: 1;
  width: 32px;
  height: 32px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: absolute;
  right: 12px;
  bottom: 12px;

  border-radius: 100px;
  background: var(--base-black);
`,
    Bn = k(xe)
`
  color: var(--base-white);
`, Ho = "contentGridItem", Ds = Object.assign(Ao.default.forwardRef(({
    children: e,
    label: t,
    loading: r,
    backgroundImage: i,
    icon: a,
    theme: l,
    style: n,
    ...o
}, d) => {
    let {
        overrides: u
    } = ze(Ho, l);
    return s(Ne, {
        customCss: [u, N(Lo(i)), ...r ? [N(Ls)] : []],
        ref: d,
        style: n,
        ...o
    }, r ? s(Hs, {
        "aria-hidden": !0
    }) : s(Ao.default.Fragment, null, s(Pn, null, t), s(Vn, null, s(Bn, null, a))))
}), {
    slug: Ho,
    styles: Lo(),
    renderMock: (e, t) => s(Ps, {
        theme: e,
        mode: t
    })
}), Ps = ({
    theme: e,
    mode: t
}) => {
    let {
        overrides: r
    } = ze(Ho, {
        theme: e,
        mode: t
    });
    return s(Ne, {
        style: {
            height: "150px",
            maxWidth: "150px"
        },
        css: [r, N(Lo())].filter(Boolean)
    }, s(Pn, null, "Grid item title"), s(Vn, null, s(Bn, null, s(mt, null))))
}, On = Ds;
var ro = x(E()),
    Vs = e => ro.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 24 24",
        ...e
    }, ro.createElement("path", {
        fill: "currentColor",
        d: "M20.121 3.879A3 3 0 1 1 15.88 8.12a3 3 0 0 1 4.24-4.24Z",
        opacity: .12
    }), ro.createElement("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M11 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h7.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2V13m.121-9.121A3 3 0 1 1 15.88 8.12a3 3 0 0 1 4.24-4.24Z"
    })),
    Fn = Vs;
var Ke = x(E()),
    no = e => {
        switch (e) {
            case "video":
                return Ke.default.createElement(_r, null);
            case "link":
                return Ke.default.createElement(kr, null);
            case "document":
                return Ke.default.createElement(mt, null);
            case "answer":
                return Ke.default.createElement(fr, null);
            case "click":
                return Ke.default.createElement(vr, null);
            case "open_chat":
                return Ke.default.createElement(Ut, null);
            case "nudge":
                return Ke.default.createElement(Fn, null);
            default:
                return Ke.default.createElement(wr, null)
        }
    },
    zn = e => {
        switch (e) {
            case "link":
                return Ke.default.createElement(Nt, null);
            case "video":
            case "document":
            case "ask-ai":
                return Ke.default.createElement(Kt, null);
            default:
                return null
        }
    };
var Bs = {
        border: "1px solid var(--border-primary-hover)",
        background: "var(--background-primary-hover)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "--content-primary": "var(--content-primary-hover)",
        "--content-secondary": "var(--content-secondary-hover)"
    },
    It = {
        display: "flex",
        minHeight: "64px",
        padding: "var(--layout-padding)",
        alignItems: "center",
        gap: "12px",
        alignSelf: "stretch",
        textAlign: "left",
        cursor: "pointer",
        borderRadius: "var(--layout-radius-button)",
        border: "1px solid var(--border-primary)",
        background: "var(--background-primary)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "&[data-active='true']": Bs,
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            border: "1px solid var(--base-accent)"
        },
        "&:focusVisible": {
            outline: "none"
        },
        mark: {
            padding: 0,
            color: "var(--content-secondary)",
            borderRadius: "2px",
            backgroundColor: "var(--highlight-color)"
        }
    };
var Os = {
        background: "linear-gradient(89deg, #d9d9d9 13.8%, #c9c9c9 30.92%, #d9d9d9 48.56%)"
    },
    Kn = k.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  flex: 1 1 0;

  overflow: hidden;
`,
    Un = k.div `
  color: var(--content-primary);

  /* label/base/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-normal);

  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,
    Po = k.div `
  color: var(--content-secondary);

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);

  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,
    Fs = k(Po)
`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal; /* Override to allow wrapping */
`, zs = k.div `
  width: 195.55px;
  height: 16px;
  border-radius: 4px;
  background: var(--base-white);
`, Ns = k.div `
  width: 289.834px;
  height: 12px;
  border-radius: 4px;
  background: var(--base-white);
`, Ou = k(xe)
`
  color: var(--base-accent);
`, so = k(xe)
`
  color: var(--content-secondary);
`, Do = "contentListItem", Ks = Object.assign(io.default.forwardRef(({
    children: e,
    type: t,
    label: r,
    content: i,
    loading: a,
    featured: l,
    active: n,
    page: o,
    icon: d,
    theme: u,
    ...p
}, c) => {
    let {
        overrides: m
    } = ze(Do, u), f = V(), v = d != null ? d : no(t), h = So(i || "", f), g = io.default.useMemo(() => (0, Nn.default)(), []), y = io.default.useMemo(() => {
        try {
            return g.sanitize(h, {
                ALLOWED_TAGS: ["mark"],
                ALLOWED_ATTR: []
            })
        } catch (b) {
            return ""
        }
    }, [g, h]), T = So(r || "", f);
    return l ? s(On, {
        ref: c,
        loading: !!a,
        label: T,
        icon: v,
        theme: u,
        style: {
            height: "150px"
        },
        "data-active": n ? "true" : void 0,
        ...p
    }) : a ? s(Ne, {
        customCss: [m, N(It), N(Os)]
    }, s(zs, null), o === "search" && s(Ns, null)) : s(Ne, {
        customCss: [m, N(It)],
        ref: c,
        "data-active": n ? "true" : void 0,
        ...p
    }, s(so, null, v), s(Kn, null, s(Un, null, T), o === "search" ? s(Fs, {
        dangerouslySetInnerHTML: {
            __html: y
        }
    }) : s(Po, {
        dangerouslySetInnerHTML: {
            __html: y
        }
    })), s(so, null, n && zn(t)))
}), {
    slug: Do,
    styles: It,
    renderMock: (e, t) => s(Us, {
        theme: e,
        mode: t
    })
}), Us = ({
    theme: e,
    mode: t
}) => {
    let {
        overrides: r
    } = ze(Do, {
        theme: e,
        mode: t
    });
    return s(Ne, {
        customCss: [r, N(It)]
    }, s(so, null, s(mt, null)), s(Kn, null, s(Un, null, "Content item title"), s(Po, null, "Search match or beginning of this content item")), s(so, null, s(Kt, null)))
}, ao = () => s($t, {
    dataTestId: "resource-center-search-loading-skeleton",
    style: { ...It,
        margin: 0,
        display: "flex",
        padding: "var(--layout-padding)"
    }
}, s("div", {
    style: {
        width: "24px",
        height: "24px",
        backgroundColor: "#F0F0F0",
        borderRadius: "4px"
    }
}), s("div", {
    style: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: 1
    }
}, s("div", {
    style: {
        width: "80%",
        height: "16px",
        backgroundColor: "#F0F0F0",
        borderRadius: "var(--layout-radius-card)"
    }
}), s("div", {
    style: {
        width: "100%",
        height: "12px",
        backgroundColor: "#F0F0F0",
        borderRadius: "var(--layout-radius-card)"
    }
}), s("div", {
    style: {
        width: "100%",
        height: "12px",
        backgroundColor: "#F0F0F0",
        borderRadius: "var(--layout-radius-card)"
    }
}))), yt = Ks;
var lo = (e, t) => {
    if (t.type !== "survey" && t.type !== "guide") return !0;
    let r = Number.parseInt(t.id, 10);
    if (Number.isNaN(r)) return !1;
    let i = Ft(e, r);
    return i ? Ot(e, i) : !1
};
var qs = e => {
        switch (e.type) {
            case "video":
                return {
                    type: "video",
                    value: parseInt(e.id)
                };
            case "document":
            case "file":
                return {
                    type: "document",
                    value: parseInt(e.id)
                };
            case "survey":
            case "guide":
                return {
                    type: "nudge",
                    value: parseInt(e.id)
                };
            default:
                return null
        }
    },
    Ws = e => {
        switch (e.type) {
            case "survey":
            case "guide":
                return "nudge";
            case "file":
                return "document";
            default:
                return e.type
        }
    },
    $s = ({
        active: e,
        selectionMethod: t,
        onClick: r,
        onMouseMove: i,
        hit: a,
        theme: l
    }) => {
        let n = (0, vt.useRef)(null),
            o = Ws(a);
        return (0, vt.useEffect)(() => {
            e && t === "keyboard" && n != null && n.current && n.current.scrollIntoView({
                block: "center"
            })
        }, [e, t]), s(yt, {
            role: "listitem",
            page: "search",
            onClick: r,
            onMouseMove: i,
            ref: n,
            key: `${a.type}-${a.id}`,
            "aria-label": o,
            type: o,
            label: a.title,
            content: a.excerpt,
            active: e,
            theme: l
        })
    },
    Qs = ({
        isLoading: e,
        hits: t
    }) => {
        let r = V(),
            {
                navigate: i
            } = ge(),
            a = Re(),
            l = Ce((f, v, h) => {
                et(f, i, v, h, "resource_center_search")
            }),
            n = (f, v) => {
                if (!lo(r, f)) return;
                if (_.resourceCenter.resultClicked(f.title, f.excerpt || "", f.type, null, null, t.findIndex(g => g.id === f.id)), f.type === "document" || f.type === "file") {
                    i({
                        page: "docs",
                        params: {
                            docId: f.id,
                            excerpt: f.excerpt
                        }
                    });
                    return
                }
                let h = qs(f);
                h ? l(h, v) : Oe.error(`Unsupported search result type '${f.type}'`)
            },
            {
                currentIndex: o,
                selectionMethod: d,
                onMouseMove: u,
                onMouseLeave: p
            } = eo(t, n),
            c = r.resourceCenter.textStrings.searchResultsLabel || "Search results",
            m = (r.resourceCenter.textStrings.searchResultsDescription || "{num_results} results found").replace("{num_results}", String(t.length));
        return s(oo, {
            style: {
                background: "var(--background-primary)"
            }
        }, !e && t.length === 0 ? s(Dn, null) : s(vt.default.Fragment, null, s(Hn, null, s(Io, {
            style: {
                fontWeight: "var(--font-weight-semibold)"
            }
        }, c), !e && s(Io, null, m)), s(to, {
            role: "list",
            "aria-label": "Results",
            onMouseLeave: p
        }, e && Array.from({
            length: 4
        }).map((f, v) => s(ao, {
            key: v
        })), !e && t.map((f, v) => {
            let h = o === v;
            return s($s, {
                key: `${f.id}`,
                hit: f,
                onClick: g => n(f, g),
                active: h,
                selectionMethod: d,
                onMouseMove: () => u(v),
                theme: a
            })
        }))))
    },
    qn = Qs;
var go = x(E());
var Qn = x(E());
var A = x(tr());
var Gs = A.type({
        title: A.string,
        action: or,
        sortKey: A.number,
        collectionId: A.number,
        displayType: A.string,
        icon: A.union([A.string, A.null, A.undefined]),
        iconColor: A.union([A.string, A.null, A.undefined])
    }),
    Wn = A.type({
        id: A.number,
        created: A.string,
        modified: A.string,
        name: A.string,
        isDefault: A.boolean,
        priority: A.number,
        items: A.array(Gs),
        flagKey: A.union([A.string, A.null, A.undefined])
    }),
    Ys = A.intersection([Wn, A.type({
        type: A.literal("rec_set"),
        pageTargeting: A.union([rr, A.null, A.undefined])
    })]),
    Xs = A.intersection([Wn, A.type({
        type: A.literal("additional_resources")
    })]),
    Zs = A.union([Ys, Xs]),
    At = class {};
Zo(At, "decode", t => Vt(Zs, t));
var $n = async (e, t, r) => {
    var u, p;
    if (r) return {
        recommendationSets: [],
        additionalResources: []
    };
    let i = "/sdk/v1/collections",
        a = Bt(t),
        l = await ut(i, {
            headers: {
                Authorization: `Api-Key ${e}`,
                "X-Amp-User": a
            }
        }),
        {
            collections: n
        } = l.data || {},
        o = (u = n == null ? void 0 : n.flatMap(c => {
            var m;
            try {
                return [At.decode(c)]
            } catch (f) {
                return f instanceof Error && Oe.error(`Decoding collection: ${(m=c==null?void 0:c.id)!=null?m:"unknown"}

`, `${f}

`, `--------------

`, `Theme: ${JSON.stringify(c)}`), []
            }
        })) != null ? u : [],
        d = (p = o == null ? void 0 : o.sort((c, m) => c.isDefault && !m.isDefault ? 1 : !c.isDefault && m.isDefault ? -1 : m.priority - c.priority)) == null ? void 0 : p.map(c => {
            var m;
            return { ...c,
                items: (m = c.items) == null ? void 0 : m.sort((f, v) => f.sortKey - v.sortKey)
            }
        });
    return {
        recommendationSets: d.filter(c => c.type === "rec_set"),
        additionalResources: d.filter(c => c.type === "additional_resources")
    }
};

function co({
    apiKey: e,
    user: t,
    isEditorPreview: r
}) {
    return pt({
        queryKey: ["collections", e],
        queryFn: async () => $n(e, t, r),
        enabled: !!e && !!t
    })
}
var uo = () => {
    var o, d;
    let e = (o = Te()) == null ? void 0 : o[ke].apiKey,
        t = V().user,
        r = V().isEditorPreview,
        {
            data: i,
            isLoading: a
        } = co({
            apiKey: e,
            user: t,
            isEditorPreview: r
        }),
        l = i == null ? void 0 : i.additionalResources;
    return {
        resources: (d = l == null ? void 0 : l[0]) == null ? void 0 : d.items,
        isLoading: a
    }
};
var mo = () => {
    var n;
    let e = V(),
        {
            navigate: t
        } = ge(),
        {
            resources: r
        } = uo(),
        i = ((n = e.resourceCenter.previewedAdditionalResources) == null ? void 0 : n.items) || r,
        a = (0, Qn.useMemo)(() => {
            var o;
            return (o = i == null ? void 0 : i.filter(d => d.displayType !== "cta")) != null ? o : []
        }, [i]),
        l = Ce((o, d, u, p) => {
            et(o, t, d.action, u, "resource_center_additional_resource"), _.resourceCenter.quickLinkClicked(d.title, d.action.type || "link", d.action.type === "link" ? d.action.value : null, null, null, p || 0, !0)
        });
    return {
        quickLinks: a,
        executeQuickLink: l
    }
};
var po = x(E());
var Js = {
        currentIndex: -1,
        selectionMethod: "keyboard",
        quickLinksStartIndex: 0,
        onItemMouseMove: () => {}
    },
    Oo = (0, po.createContext)(Js),
    Gn = () => (0, po.useContext)(Oo);
var bt = x(E());

function Yn(e, t) {
    var n, o, d;
    let r = (o = (n = Te()) == null ? void 0 : n[ke].apiKey) != null ? o : "",
        i = t && (e.type === "document" || e.type === "video") ? String(e.value) : null,
        {
            data: a,
            isLoading: l
        } = ft({
            apiKey: r,
            id: i
        });
    return {
        thumbnailUrl: (d = a == null ? void 0 : a.thumbnailUrl) != null ? d : void 0,
        isLoading: !!i && l
    }
}
var js = (e, t) => {
        switch (t.action.type) {
            case "click":
                return "Unlabeled click";
            case "nudge":
                return "Unlabeled nudge";
            case "link":
                return t.action.value || "Unlabeled link";
            case "callback":
                return "Unlabeled callback";
            case "document":
                return "Unlabled article";
            case "video":
                return "Unlabled video";
            default:
                return "Recommendation"
        }
    },
    ea = ({
        labeledAction: e,
        active: t,
        selectionMethod: r,
        onClick: i,
        onMouseMove: a,
        grid: l
    }) => {
        let n = Re(),
            o = (0, bt.useRef)(null),
            d = V(),
            {
                thumbnailUrl: u,
                isLoading: p
            } = Yn(e.action, !!l),
            c = (0, bt.useMemo)(() => l && u ? "" : js(d, e), [l, u, e]);
        (0, bt.useEffect)(() => {
            t && r === "keyboard" && o != null && o.current && o.current.scrollIntoView({
                block: "center"
            })
        }, [t, r]);
        let m = e.cta || e.action.type;
        return s(yt, {
            page: "home",
            ref: o,
            key: JSON.stringify(e),
            onClick: i,
            onMouseMove: a,
            "aria-label": m,
            type: e.action.type,
            label: e.cta || c || "",
            loading: p,
            featured: !!l,
            active: t,
            backgroundImage: u,
            theme: n
        })
    },
    Fo = ea;
var Ct = x(E());
var jn = x(E());
var L = x(tr()),
    ta = L.union([L.literal("document"), L.literal("file"), L.literal("video"), L.literal("answer")]),
    Wd = L.intersection([L.type({
        id: L.number,
        contentType: ta,
        url: L.string,
        title: L.string,
        content: L.union([L.string, L.null]),
        showViewArticleButton: L.boolean,
        showCopyLinkButton: L.boolean
    }, "ContentItem"), L.partial({
        thumbnailUrl: L.union([L.string, L.null])
    })]),
    oa = L.type({
        id: L.string,
        title: L.string,
        excerpt: L.union([L.string, L.undefined]),
        type: L.union([L.literal("document"), L.literal("file"), L.literal("video"), L.literal("guide"), L.literal("survey")])
    }),
    Xn = L.type({
        total: L.number,
        hits: L.array(oa)
    });
var Zn = x(E());

function fo({
    apiKey: e,
    user: t,
    query: r,
    limit: i = 10,
    searchType: a = "hybrid",
    filter: l,
    staleTime: n
}) {
    var p;
    let o = V(),
        d = pt({
            queryKey: ["contentItems", e, r, i, a, l],
            queryFn: async () => {
                let c = "/sdk/resource_center/v1/search",
                    m = new URLSearchParams;
                m.set("query", r != null ? r : ""), m.set("limit", i.toString()), m.set("search_type", a), l && m.set("filter", JSON.stringify(l)), c += `?${m.toString()}`;
                let f = Bt(t),
                    v = await ut(c, {
                        headers: {
                            Authorization: `Api-Key ${e}`,
                            "X-Amp-User": f
                        }
                    });
                return Vt(Xn, v.data)
            },
            enabled: !!e && !!r && !!t,
            staleTime: n
        }),
        u = (0, Zn.useMemo)(() => {
            var c;
            return (c = d.data) != null && c.hits ? d.data.hits.filter(m => lo(o, m)) : []
        }, [(p = d.data) == null ? void 0 : p.hits, o]);
    return { ...d,
        data: d.data ? { ...d.data,
            hits: u
        } : void 0
    }
}
var ra = () => {
    try {
        return (typeof document < "u" ? document.title : "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
    } catch (e) {
        return ""
    }
};

function Jn({
    apiKey: e,
    user: t,
    isAutopilotEnabled: r
}) {
    var u;
    let i = V(),
        a = ra(),
        l = i.resourceCenter.customAutopilotKeywords || a,
        {
            data: n,
            isLoading: o
        } = fo({
            apiKey: e,
            user: t,
            query: r ? l : null,
            searchType: "semantic",
            filter: i.resourceCenter.filter,
            staleTime: 1 / 0
        }),
        d = null;
    return r && ((u = n == null ? void 0 : n.hits) != null && u.length) && (d = {
        id: -1,
        created: new Date().toISOString(),
        modified: new Date().toISOString(),
        name: "Autopilot Recommendation Set",
        isDefault: !0,
        priority: 100,
        type: "rec_set",
        pageTargeting: null,
        flagKey: null,
        items: n.hits.map((p, c) => ({
            title: p.title,
            action: {
                type: p.type === "guide" || p.type === "survey" ? "nudge" : p.type === "file" ? "document" : p.type,
                value: parseInt(p.id)
            },
            sortKey: c,
            collectionId: -1,
            displayType: "CARD",
            icon: null,
            iconColor: null
        }))
    }), {
        autopilotRecommendationSet: d,
        isAutopilotLoading: o
    }
}
var na = (e, t) => {
        let {
            action: r
        } = t;
        if (e.isEditorPreview || r.type !== "nudge") return !0;
        let i = r.value;
        if (typeof i != "number") return !1;
        let a = Ft(e, i);
        return a ? Ot(e, a) : !1
    },
    ei = () => {
        var y;
        let e = (y = Te()) == null ? void 0 : y[ke].apiKey,
            t = V(),
            r = t.isEditorPreview,
            {
                data: i,
                isLoading: a
            } = co({
                apiKey: e,
                user: t.user,
                isEditorPreview: r
            }),
            l = (i == null ? void 0 : i.recommendationSets) || [];
        !r && l.length > 0 && (l = l.filter(T => T.type !== "rec_set" || !T.pageTargeting || !T.pageTargeting.conditions ? !0 : nr(t, T.pageTargeting.configs || [], T.pageTargeting.conditions)));
        let n = !r && l.some(T => !T.isDefault),
            o = !!t.resourceCenter.customAutopilotKeywords,
            d = !r || o,
            p = (t.resourceCenter.isAutopilotEnabled || !!t.resourceCenter.customAutopilotKeywords) && !n && d,
            {
                autopilotRecommendationSet: c,
                isAutopilotLoading: m
            } = Jn({
                apiKey: e,
                user: t.user,
                isAutopilotEnabled: p
            });
        c && (l = [c, ...l]);
        let f = p && m,
            v = a || f,
            h = c || t.resourceCenter.previewedRecommendationSet || (l == null ? void 0 : l[0]),
            g = (0, jn.useMemo)(() => {
                if (!h) return null;
                let T = h.items.map(b => ({
                    cta: b.title,
                    action: b.action
                })).filter(b => na(t, b));
                return {
                    name: h.name,
                    flagKey: h.flagKey,
                    isDefault: h.isDefault,
                    items: T
                }
            }, [h, t]);
        if (r && t.resourceCenter.previewedRecommendationSet) {
            if (!o) return {
                recommendationSets: [t.resourceCenter.previewedRecommendationSet],
                isLoading: !1,
                topRecSet: g
            };
            if (!f) return {
                recommendationSets: [c || t.resourceCenter.previewedRecommendationSet],
                isLoading: !1,
                topRecSet: g
            }
        }
        return {
            recommendationSets: l,
            isLoading: v,
            topRecSet: g
        }
    };
var ia = N `
  display: flex;
  gap: var(--layout-gap);
  width: 100%;
  padding: 0 var(--layout-padding);
`,
    sa = N `
  overflow-y: visible;
  flex: none;
`,
    aa = ({
        children: e
    }) => {
        var B;
        let t = V(),
            {
                navigate: r,
                history: i
            } = ge(),
            a = (B = i[0]) == null ? void 0 : B.page,
            {
                isLoading: l,
                topRecSet: n
            } = ei(),
            o = t.resourceCenter.showRecsetHeroCards,
            d = t.resourceCenter.showQuickLinks,
            u = Ct.default.useMemo(() => {
                var H;
                return (H = n == null ? void 0 : n.items) != null ? H : []
            }, [n]),
            p = Ct.default.useMemo(() => o ? u.slice(0, 2) : [], [o, u]),
            c = Ct.default.useMemo(() => o ? u.slice(2) : u, [o, u]),
            m = !l && p.length > 0,
            {
                quickLinks: f,
                executeQuickLink: v
            } = mo(),
            h = Ct.default.useMemo(() => d ? f : [], [d, f]),
            g = p.length,
            y = m ? p.length : 0,
            T = h.length,
            b = Ce((H, F, Q, w, D) => {
                var ne;
                if (n && w) {
                    let se = w.cta || "",
                        ae = F.type,
                        oe = F.type === "link" ? F.value : null,
                        de = (F.type === "nudge" || F.type === "document" || F.type === "video") && ((ne = F.value) == null ? void 0 : ne.toString()) || null,
                        fe = null,
                        X = D || 0,
                        Ye = n.flagKey || null,
                        lt = n.isDefault,
                        Xe = H.resourceCenter.isAutopilotEnabled || !1;
                    _.resourceCenter.recommendationClicked(se, ae, oe, de, fe, X, Ye, lt, Xe)
                }
                et(H, r, F, Q, "resource_center_recommendation")
            }, [n]),
            S = (0, go.useRef)(new Set);
        (0, go.useEffect)(() => {
            if (a === Je.HelpHub && !l && n) {
                let H = `${n.name}-${n.flagKey||"null"}-${n.isDefault}`;
                S.current.has(H) || (S.current.add(H), _.resourceCenter.recommendationSetShown(n.name, n.flagKey || null, n.isDefault))
            }
        }, [a, l, n]);
        let O = Ct.default.useMemo(() => {
                let H = (m ? p : []).map((w, D) => ({
                        activate: () => b(w.action, void 0, w, D)
                    })),
                    F = h.map((w, D) => ({
                        activate: () => v(w, void 0, D)
                    })),
                    Q = (l ? [] : c).map((w, D) => ({
                        activate: () => b(w.action, void 0, w, g + D)
                    }));
                return [...H, ...F, ...Q]
            }, [m, p, h, l, c, g, b, v]),
            {
                currentIndex: re,
                selectionMethod: Y,
                onMouseMove: W,
                onMouseLeave: R
            } = eo(O, H => H == null ? void 0 : H.activate());
        return s(Oo.Provider, {
            value: {
                currentIndex: re,
                selectionMethod: Y,
                quickLinksStartIndex: y,
                onItemMouseMove: W
            }
        }, m && s("div", {
            role: "list",
            css: ia,
            "aria-label": "Hero Cards",
            onMouseLeave: R
        }, p.map((H, F) => s(Fo, {
            key: `hero-${H.cta}-${F}`,
            labeledAction: H,
            active: re === F,
            selectionMethod: Y,
            onClick: Q => b(H.action, Q, H, F),
            onMouseMove: () => W(F),
            grid: !0
        }))), e, s(oo, {
            css: m ? sa : void 0
        }, s(to, {
            role: "list",
            "aria-label": "Recommendations",
            onMouseLeave: R
        }, l && Array.from({
            length: 4
        }).map((H, F) => s(ao, {
            key: F
        })), !l && c.map((H, F) => {
            let Q = y + T + F,
                w = g + F,
                D = re === Q;
            return s(Fo, {
                key: `${H.cta}-${w}`,
                labeledAction: H,
                active: D,
                selectionMethod: Y,
                onClick: ne => b(H.action, ne, H, w),
                onMouseMove: () => W(Q)
            })
        }))))
    },
    ti = aa;
var oi = x(E());
var la = k.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--layout-padding);
  gap: var(--layout-gap);
  flex-shrink: 0;

  background: var(--background-primary);

  border-radius: var(--layout-radius-card);
  border: 1px solid var(--border-primary);
`,
    ca = k.div `
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--content-primary);

  /* label/base/semibold */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-normal);
`,
    ua = k.div `
  display: flex;
  flex-wrap: wrap;
  gap: var(--layout-gap);
  width: 100%;
`,
    da = oi.default.forwardRef(({
        children: e,
        title: t,
        ...r
    }, i) => s(la, {
        ref: i,
        ...r
    }, t && s(ca, null, t), s(ua, null, e))),
    ri = da;
var ma = k.button `
  && {
    all: unset;

    display: flex;
    flex: 0 1 1;
    align-items: center;
    gap: var(--layout-gap);
    align-self: stretch;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: var(--layout-radius-button);
    width: calc(50% - var(--layout-gap) / 2);

    &:focus {
      box-shadow: 0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color);
    }

    &:focus-visible {
      outline: none;
    }

    &:hover {
      #link {
        color: var(--content-link-hover);
      }
    }

    /* Keyboard-navigation highlight (data-active is keyboard-only, so no pill on hover). The
       background + box-shadow spread paints a rounded surface without adding padding. */
    &[data-active='true'] {
      background: var(--background-primary-hover);
      box-shadow: 0px 0px 0px 6px var(--background-primary-hover);

      #link {
        color: var(--content-link-hover);
      }
    }
  }
`,
    pa = k.div `
  color: var(--content-link);
  text-align: left;

  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);

  /* Single line with ellipsis */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
`,
    fa = k(xe)
`
  color: var(--content-link);
`, ga = ({
    icon: e,
    title: t,
    iconColor: r,
    type: i,
    ...a
}) => s(ma, { ...a
}, s(fa, {
    id: "link"
}, no(i)), s(pa, {
    id: "link"
}, t)), ni = ga;
var ha = () => {
        let e = V(),
            {
                quickLinks: t,
                executeQuickLink: r
            } = mo(),
            {
                currentIndex: i,
                selectionMethod: a,
                quickLinksStartIndex: l,
                onItemMouseMove: n
            } = Gn();
        return !t || t.length === 0 ? null : s("div", {
            style: {
                padding: "var(--layout-gap) var(--layout-padding) var(--layout-gap) var(--layout-padding)"
            }
        }, s(ri, {
            title: e.resourceCenter.textStrings.quickLinksLabel
        }, t.map((o, d) => {
            let u = l + d,
                p = i === u && a === "keyboard";
            return s(ni, {
                onClick: c => r(o, c, d),
                onKeyDown: c => {
                    c.key === "Enter" && r(o, void 0, d)
                },
                onMouseMove: () => n(u),
                "data-active": p ? "true" : void 0,
                key: o.title,
                icon: o.icon,
                title: o.title,
                iconColor: o.iconColor,
                type: o.action.type
            })
        })))
    },
    ii = ha;
var Ve = x(E());
var ya = () => Ve.default.createElement("svg", {
        "data-testid": "ask-ai-enter-icon",
        "aria-hidden": "true",
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, Ve.default.createElement("rect", {
        x: 2,
        y: 3,
        width: 16,
        height: 14,
        rx: 3,
        stroke: "currentColor",
        strokeWidth: 1.25,
        opacity: .45
    }), Ve.default.createElement("path", {
        d: "M14 7v2.5a1.5 1.5 0 0 1-1.5 1.5H7m0 0 2-2m-2 2 2 2",
        stroke: "currentColor",
        strokeWidth: 1.4,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })),
    va = ({
        theme: e,
        query: t,
        onClick: r
    }) => {
        let [i, a] = (0, Ve.useState)(!1), l = (0, Ve.useRef)(null), n = V(), {
            data: o
        } = Gt();
        return Ve.default.createElement("div", {
            "data-testid": "ask-ai-button",
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "var(--layout-padding)",
                backgroundColor: "var(--background-primary)",
                position: "relative"
            }
        }, Ve.default.createElement(yt, {
            ref: l,
            role: "listitem",
            page: "search",
            onClick: r,
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            onFocus: () => a(!0),
            onBlur: () => a(!1),
            key: "ask-ai",
            "aria-label": n.resourceCenter.textStrings.askAITabLabel || "Ask AI",
            type: "ask-ai",
            label: `${n.resourceCenter.textStrings.askAITabLabel||"Ask AI"}: "${t}"`,
            active: i,
            icon: Ve.default.createElement($r, {
                size: "small",
                src: o == null ? void 0 : o.avatar_src,
                alt: o == null ? void 0 : o.assistant_name
            }),
            theme: e,
            style: {
                flex: 1,
                minWidth: 0,
                ...i ? null : {
                    paddingRight: "40px"
                }
            }
        }), !i && Ve.default.createElement("div", {
            style: {
                position: "absolute",
                right: "calc(var(--layout-padding) + 12px)",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--content-secondary)",
                display: "flex",
                alignItems: "center",
                pointerEvents: "none"
            }
        }, Ve.default.createElement(ya, null)))
    },
    si = va;
var ba = () => {
        var g, y, T;
        let e = V(),
            t = Re(),
            {
                navigate: r
            } = ge(),
            i = e.resourceCenter.query,
            a = Ce(Or),
            [l, n] = (0, Qe.useState)(i || ""),
            o = Qe.default.useRef(i),
            {
                showAssistantTab: d
            } = je(e),
            u = (g = Te()) == null ? void 0 : g[ke].apiKey,
            p = Qe.default.useCallback(b => {
                o.current = b, a(b)
            }, [a]),
            c = (b, S) => {
                n(b), S ? m(b) : p(b)
            },
            m = Qe.default.useCallback((0, ai.default)(p, 500), [p]);
        (0, Qe.useEffect)(() => {
            i !== o.current && (n(i || ""), o.current = i)
        }, [i]);
        let {
            data: f,
            isLoading: v
        } = fo({
            apiKey: u,
            user: e.user,
            query: i,
            filter: e.resourceCenter.filter
        }), h = () => {
            l.trim() && r({
                page: "assistant",
                params: {
                    query: l,
                    autoSubmit: !0
                }
            })
        };
        return (0, Qe.useEffect)(() => {
            !v && f && i && _.resourceCenter.searchExecuted(i, f.hits.length)
        }, [f, v, i]), e.resourceCenter.minimized ? null : s(Jt, {
            fading: !0
        }, s(xt, {
            isMounted: !0,
            style: {
                width: "100%"
            }
        }, s(En, {
            isLoading: v,
            query: l,
            onSubmit: c,
            onEnterKey: d ? h : void 0,
            inputPlaceholder: (y = e.resourceCenter.textStrings.searchInputPlaceholder) != null ? y : ""
        })), d && s(xt, {
            entry: {
                keyframes: zt.fadeInSlideDown
            },
            isMounted: !!l,
            style: {
                width: "100%"
            }
        }, s(si, {
            theme: t,
            query: l,
            onClick: h
        })), s(xt, {
            entry: {
                keyframes: zt.fadeInSlideDown
            },
            isMounted: !!l,
            style: {
                width: "100%",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                flex: 1
            }
        }, s(qn, {
            isLoading: v || l !== (i != null ? i : ""),
            hits: (T = f == null ? void 0 : f.hits) != null ? T : []
        })), s(xt, {
            entry: {
                keyframes: zt.fadeIn,
                durationMs: 100
            },
            isMounted: !l,
            style: {
                width: "100%",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                flex: 1
            }
        }, s(ti, null, e.resourceCenter.showQuickLinks && s(ii, null))))
    },
    li = ba;
var St = x(E()),
    Ca = () => {
        let {
            navigate: e
        } = ge();
        return St.default.createElement("div", {
            style: {
                padding: "16px",
                color: "#51515C",
                fontSize: "14px"
            }
        }, St.default.createElement("p", {
            style: {
                fontSize: 18,
                fontWeight: 500
            }
        }, "Oops! Something went wrong."), St.default.createElement("p", null, "Sorry about that."), St.default.createElement("p", null, St.default.createElement(Dr, {
            onClick: () => e({
                page: "home",
                params: {}
            })
        }, "Try again?")))
    },
    ci = Ca;
var Sa = er(() =>
        import ("./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-Chat-6OQDJZI5.js"), "Chat"),
    wa = ({
        initialEntries: e,
        header: t,
        footer: r
    }) => {
        let i = V(),
            {
                showAssistantTab: a
            } = je(i),
            l = Lt.default.useMemo(() => {
                let o = [{
                    page: Je.HelpHub,
                    element: li
                }, {
                    page: Je.Docs,
                    element: Tn
                }, {
                    page: Je.Error,
                    element: ci
                }];
                return a && o.push({
                    page: Je.Assistant,
                    element: () => s(Lt.Suspense, {
                        fallback: s("div", null)
                    }, s(Sa, null))
                }), o
            }, [a]),
            n = s(Lt.default.Fragment, null, t, s(Nr, {
                pages: l
            }), r);
        return e ? s(Fr, {
            initialEntries: e
        }, n) : n
    },
    zo = wa;

function ui(e, t, r = !1, i = !1) {
    let a = new CustomEvent(e, {
        detail: t,
        bubbles: r,
        cancelable: i
    });
    return document.dispatchEvent(a), a
}
var di = x(E());
var Ta = k.div `
  position: fixed;
  display: flex;
  width: var(--helphub-width);
  height: var(--helphub-height);
  max-height: 100vh;
  right: 12px;
  bottom: 12px;
  flex-direction: column;
  align-items: flex-start;
  overflow: visible;

  border-radius: var(--layout-radius-card);
  border: 1px solid var(--border-primary);
  background: var(--background-primary);

  box-shadow: var(--layout-shadow) var(--layout-shadow-color);

  z-index: ${Ue.Z_RESOURCE_CENTER};
`,
    ka = ({
        children: e,
        modalRef: t,
        parentCallbackRef: r,
        ...i
    }) => di.default.createElement(Ta, {
        ref: a => {
            t.current = a, r && r(a)
        },
        ...i
    }, e),
    mi = ka;
var pi = x(E());
var No = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
        alignSelf: "stretch",
        background: "var(--form-control-active-background)",
        height: "var(--header-height)",
        color: "var(--content-primary)",
        padding: "var(--layout-padding)",
        borderRadius: "var(--layout-radius-card) var(--layout-radius-card) 0px 0px",
        "--icon-container-size": "var(--header-icon-size)"
    },
    fi = k.div `
  /* label/base/medium */
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
`,
    Ht = {
        width: "var(--header-icon-size)",
        height: "var(--header-icon-size)"
    },
    Ko = "assistanceModalHeader",
    Ra = Object.assign(pi.default.forwardRef(({
        children: e,
        title: t,
        onClose: r,
        onMinimize: i,
        isMinimized: a,
        isFullscreen: l,
        allowHeaderDrag: n,
        theme: o,
        currentView: d,
        leftButtons: u,
        rightButtons: p,
        ...c
    }, m) => {
        let {
            overrides: f
        } = ze(Ko, o);
        return s("div", {
            css: [f, N(No), N(!["home", "help-hub"].includes(d) && {
                background: "transparent"
            })],
            ref: m,
            ...c
        }, s(it, {
            "data-draggable": n ? "drag-zone" : void 0,
            "data-testid": "drag-zone",
            style: {
                flex: 1,
                alignItems: "center"
            }
        }, u, s(fi, null, t)), s(it, null, p, p && s("div", {
            style: {
                height: "var(--form-control-height)",
                width: "1px",
                background: "var(--border-primary)"
            }
        }), !l && s(qe, {
            "aria-label": a ? "expand" : "minimize",
            theme: o,
            onClick: i,
            title: a ? "Expand" : "Minimize"
        }, a ? s(br, {
            style: Ht
        }) : s(wo, {
            style: Ht
        })), !!r && s(qe, {
            "aria-label": "close",
            theme: o,
            onClick: r,
            title: "Close"
        }, s(rt, {
            style: Ht
        }))))
    }), {
        slug: Ko,
        styles: No,
        renderMock: (e, t) => s(xa, {
            theme: e,
            mode: t
        })
    }),
    xa = ({
        theme: e,
        mode: t
    }) => {
        let {
            overrides: r
        } = ze(Ko, {
            theme: e,
            mode: t
        });
        return s("div", {
            css: [r, N(No)],
            style: {
                width: "350px"
            }
        }, s(it, {
            "data-draggable": "drag-zone",
            "data-testid": "drag-zone",
            style: {
                flex: 1
            }
        }, s(fi, null, "Title bar")), s(it, null, s(xe, null, s(wo, {
            style: Ht
        })), s(xe, null, s(rt, {
            style: Ht
        }))))
    },
    gi = Ra;
var G = x(E());
var ho = x(E());
var hi = N `
  position: absolute;
  top: calc(var(--form-control-height) + 4px);
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 4px;
  color: var(--content-primary);

  width: 268px;
  height: fit-content;
  max-height: 296px;

  border-radius: var(--layout-radius-card);
  border: 1px solid var(--border-primary);
  box-shadow: var(--layout-shadow) var(--layout-shadow-color);
  background-color: var(--background-primary);

  overflow-y: auto;
  z-index: 1000;
`,
    _a = N `
  padding: var(--form-control-padding-x);
  cursor: pointer;
  border-radius: var(--layout-radius-card);

  color: var(--content-secondary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
  font-family: var(--font-font-family);

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    color: var(--content-primary);
    background-color: var(--background-primary-hover);
  }
  &:focus {
    color: var(--content-primary);
    background-color: var(--background-primary-hover);
  }
  &:focus-visible {
    outline: none;
  }
`,
    Ma = N `
  display: flex;
  flex-direction: column;
  height: 296px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: var(--layout-padding);
`,
    Ea = N `
  color: var(--content-primary);
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--font-line-height-normal);
`,
    Ia = N `
  color: var(--content-secondary);
  font-family: var(--font-font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-line-height-normal);
`,
    Aa = ({
        show: e,
        handleClose: t
    }) => {
        let r = V(),
            [i, a] = (0, ho.useState)(null),
            {
                restoreSession: l
            } = Yt();
        (0, ho.useEffect)(() => {
            if (!e) return;
            let o = !0;
            return (async () => {
                try {
                    let u = await Pe.getChatSessions();
                    o && a(u)
                } catch (u) {
                    console.error("Failed to load chat sessions:", u)
                }
            })(), () => {
                o = !1
            }
        }, [e]);
        let n = o => {
            Pe.loadChatHistory(o.session_id).then(d => {
                l(o.session_id, d), _.chat.sessionRestored(o.session_id, d.length)
            }).catch(d => {
                console.error("Failed to load session history:", d)
            }), t()
        };
        return e ? (i == null ? void 0 : i.sessions.length) === 0 ? s("div", {
            css: hi
        }, s("div", {
            css: Ma
        }, s(xe, null, s(Ut, null)), s("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                alignItems: "center",
                justifyContent: "center"
            }
        }, s("div", {
            css: Ea
        }, r.resourceCenter.textStrings.noChatHistoryTitle || "No chat history - yet"), s("div", {
            css: Ia
        }, r.resourceCenter.textStrings.noChatHistoryDescription || "Your past chats will appear here")))) : s("div", {
            css: hi
        }, i == null ? void 0 : i.sessions.map(o => s("div", {
            css: _a,
            key: o.session_id,
            onClick: () => {
                n(o)
            },
            onKeyDown: d => {
                (d.key === "Enter" || d.key === " ") && n(o)
            },
            role: "button",
            tabIndex: 0
        }, o.first_user_question))) : null
    },
    yi = Aa;
var wt = {
        width: "var(--header-icon-size)",
        height: "var(--header-icon-size)"
    },
    La = G.default.forwardRef(({
        children: e,
        ...t
    }, r) => {
        var se, ae;
        let i = Re(),
            a = Ce(_t),
            l = Ce(To),
            n = V(),
            {
                resourceCenter: {
                    minimized: o
                }
            } = n,
            d = ht(),
            {
                isMobileDevice: u
            } = dt(),
            {
                data: p,
                isLoading: c
            } = Gt(),
            m = (se = p == null ? void 0 : p.force_identity_verification) != null ? se : !1,
            [f, v] = G.default.useState(!1),
            [h, g] = G.default.useState(!1),
            {
                back: y,
                history: T
            } = ge(),
            b = T[0],
            S = b == null ? void 0 : b.page,
            {
                docId: O,
                docUrl: re
            } = (b == null ? void 0 : b.params) || {},
            Y = (ae = Te()) == null ? void 0 : ae[ke].apiKey,
            {
                data: W
            } = ft({
                apiKey: Y,
                id: O,
                url: re
            }),
            {
                messages: R,
                initializeSession: B,
                cleanup: H,
                clearMessages: F
            } = Yt(),
            Q = G.default.useMemo(() => {
                var oe;
                return S === "assistant" ? c ? "" : (oe = p == null ? void 0 : p.assistant_name) != null ? oe : "Assistant" : S === "help-hub" ? n.resourceCenter.textStrings.headerLabel : ""
            }, [S, n.resourceCenter.textStrings, p == null ? void 0 : p.assistant_name, c]),
            w = G.default.useCallback(async () => {
                let oe = R.length;
                try {
                    H(), F();
                    let de = await B("Resource Center Chat");
                    de && _.chat.sessionRestarted(de, oe)
                } catch (de) {
                    console.error("Failed to restart chat:", de)
                }
            }, [R.length, H, F, B]),
            D = G.default.useMemo(() => {
                if (o) return null;
                if (c && S === "assistant") return G.default.createElement($t, {
                    style: {
                        width: 80,
                        height: 14
                    }
                });
                let {
                    showAssistantTab: oe,
                    showResourceCenterTab: de
                } = je(n), fe = [];
                return oe && de ? fe = ["docs", "assistant"] : de ? fe = ["docs"] : oe && (fe = ["docs"]), fe.includes(S) && T.length > 1 ? G.default.createElement(qe, {
                    theme: i,
                    "data-testid": "resource-center-go-back",
                    onClick: () => {
                        qt(), y()
                    },
                    title: "Go back"
                }, G.default.createElement(pr, {
                    style: wt
                })) : null
            }, [o, i, y, T, S, c, n, n.resourceCenter.chatEnabled, n.resourceCenter.resourceCenterEnabled, n.resourceCenter.defaultTab, n.isEditorPreview, n.isAssistantPreview]),
            ne = G.default.useMemo(() => {
                if (o) return null;
                if (S === "docs") {
                    let oe = n.resourceCenter.query,
                        de = X => {
                            if (n.isEditorPreview) window.open(X, "_blank");
                            else return window.open(X, "_blank")
                        };
                    return (W == null ? void 0 : W.showCopyLinkButton) || (W == null ? void 0 : W.showViewArticleButton) ? G.default.createElement(G.default.Fragment, null, W.showCopyLinkButton && G.default.createElement(G.default.Fragment, null, G.default.createElement(qe, {
                        theme: i,
                        "data-testid": "resource-center-copy-link",
                        disabled: n.isEditorPreview,
                        onClick: async () => {
                            try {
                                let X = Br(W.id, oe);
                                await Vr(X), _.resourceCenter.articleLinkCopied(W.title, X, null), v(!0), setTimeout(() => {
                                    v(!1)
                                }, 2e3)
                            } catch (X) {
                                Oe.warn(X)
                            }
                        },
                        title: "Copy link"
                    }, f ? G.default.createElement(gr, {
                        style: wt
                    }) : G.default.createElement(Tr, {
                        style: wt
                    })), W.showViewArticleButton && W.url && G.default.createElement(qe, {
                        theme: i,
                        onClick: X => {
                            (X.metaKey || X.ctrlKey) && window.open(W.url, "_blank"), de(W.url)
                        },
                        title: "View article"
                    }, G.default.createElement(Nt, {
                        style: { ...wt,
                            flexShrink: "0"
                        }
                    })))) : null
                } else if (S === "assistant") return G.default.createElement(G.default.Fragment, null, G.default.createElement(qe, {
                    theme: i,
                    onClick: w,
                    title: "Restart chat"
                }, G.default.createElement(xr, {
                    style: wt
                })), m && G.default.createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, G.default.createElement(Jr, {
                    theme: i,
                    isSelected: h,
                    onClick: () => {
                        g(oe => !oe)
                    },
                    title: "Chat history"
                }, G.default.createElement(yr, {
                    style: wt
                })), G.default.createElement(yi, {
                    show: h,
                    handleClose: () => g(!1)
                })));
                return null
            }, [o, S, n.resourceCenter.query, n.isEditorPreview, W, i, f, w, h, m]);
        return G.default.createElement(gi, { ...t,
            theme: i,
            title: Q != null ? Q : "",
            ref: r,
            onMinimize: () => {
                n.isEditorPreview || l(!o, S)
            },
            onClose: () => a(S),
            isMinimized: o,
            isFullscreen: d,
            allowHeaderDrag: !u,
            currentView: S,
            leftButtons: D,
            rightButtons: ne
        })
    }),
    Uo = La;
var Me = x(E());
var vi = x(E());
var Ha = {
        flex: 1,
        textAlign: "center",
        cursor: "pointer",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-small)",
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--content-secondary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--form-control-gap)",
        padding: "var(--form-control-padding-x)",
        borderRadius: "var(--layout-radius-card)",
        "&:hover": {
            color: "var(--button-primary-background-hover)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            color: "var(--button-primary-background-hover)"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&:disabled": {
            cursor: "not-allowed"
        }
    },
    Da = ({
        onSelect: e,
        icon: t,
        isActive: r,
        isDisabled: i,
        children: a,
        ...l
    }) => {
        let n = (0, vi.useCallback)(() => {
            i || e()
        }, [i, e]);
        return s(Ne, { ...l,
            onClick: n,
            onKeyDown: o => {
                o.key === "Enter" && n()
            },
            css: [N(Ha), r && N({
                color: "var(--base-accent)"
            })],
            disabled: i,
            tabIndex: 0
        }, t, a)
    },
    qo = Da;
var Wo = x(E()),
    Pa = k.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--layout-gap);
  border-top: 1px solid var(--border-primary);
  position: sticky;
  background: var(--background-primary);
  border-radius: 0px 0px var(--layout-radius-card) var(--layout-radius-card);
`,
    Va = Wo.default.forwardRef(({
        children: e,
        ...t
    }, r) => Wo.default.createElement(Pa, {
        ref: r,
        ...t
    }, e)),
    bi = Va;
var Ba = k.div `
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: var(--layout-padding);
  gap: var(--layout-gap);
`,
    Oa = ({
        children: e,
        ...t
    }) => s(Ba, { ...t
    }, e),
    $o = Oa;
var Fa = k.div `
  display: flex;
  width: 100%;
  padding: var(--layout-padding);
  border-radius: 0px 0px var(--layout-radius-card) var(--layout-radius-card);
  justify-content: center;
  align-items: center;
  background: var(--background-primary);
`,
    za = ({
        children: e,
        ...t
    }) => s(Fa, { ...t
    }, e),
    Ci = za;
var Qo = Me.default.forwardRef(({
    children: e,
    ...t
}, r) => {
    var re;
    let {
        history: i
    } = ge(), a = i[0], l = a == null ? void 0 : a.page, n = V(), {
        showAssistantTab: o,
        showResourceCenterTab: d
    } = je(n), u = o && d, {
        navigate: p
    } = ge(), c = Re(), {
        resources: m
    } = uo(), f = ((re = n.resourceCenter.previewedAdditionalResources) == null ? void 0 : re.items) || m, v = (0, Me.useMemo)(() => f == null ? void 0 : f.find(Y => Y.displayType === "cta"), [f]), h = () => {
        _.chat.chatViewed(), p({
            page: "assistant",
            params: {}
        })
    }, g = () => {
        _.chat.resourceCenterViewed(), p({
            page: "help-hub",
            params: {}
        })
    }, y = Ce((Y, W, R, B, H) => {
        et(Y, p, W, B, "resource_center_additional_resource"), _.resourceCenter.quickLinkClicked(R.title, R.action.type || "link", R.action.type === "link" ? R.action.value : null, null, null, H || 0, !0)
    }), T = l === "help-hub" && !n.resourceCenter.query && n.resourceCenter.showQuickLinks && v, b = n.resourceCenter.showBranding, S = (T || u || b) && !n.resourceCenter.minimized, O = n.isEditorPreview;
    return S ? Me.default.createElement(bi, {
        ref: r,
        ...t
    }, T && Me.default.createElement($o, {
        style: u || b ? {
            paddingBottom: 0
        } : void 0
    }, Me.default.createElement(Ar, {
        theme: c,
        onClick: Y => y(v.action, v, Y, -1)
    }, v.title)), u && Me.default.createElement($o, {
        style: b ? {
            paddingBottom: 0
        } : void 0
    }, Me.default.createElement(qo, {
        icon: Me.default.createElement(Sr, null),
        onSelect: g,
        isActive: l === "help-hub",
        isDisabled: O
    }, n.resourceCenter.textStrings.homeTabLabel || "Home"), Me.default.createElement(qo, {
        "data-testid": "ask-ai-tab",
        icon: Me.default.createElement(Rr, null),
        onSelect: h,
        isActive: l === "assistant",
        isDisabled: O
    }, n.resourceCenter.textStrings.askAITabLabel || "Ask AI")), b && Me.default.createElement(Ci, null, Me.default.createElement(Er, {
        onClick: () => Ir()
    }))) : null
});
var Ge = x(E());
var K = x(E());
var yo = class extends Error {
    constructor(t, r) {
        super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line
    }
};

function Go(e) {}

function Si(e) {
    if (typeof e == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    let {
        onEvent: t = Go,
        onError: r = Go,
        onRetry: i = Go,
        onComment: a
    } = e, l = "", n = !0, o, d = "", u = "";

    function p(h) {
        let g = n ? h.replace(/^\xEF\xBB\xBF/, "") : h,
            [y, T] = Na(`${l}${g}`);
        for (let b of y) c(b);
        l = T, n = !1
    }

    function c(h) {
        if (h === "") {
            f();
            return
        }
        if (h.startsWith(":")) {
            a && a(h.slice(h.startsWith(": ") ? 2 : 1));
            return
        }
        let g = h.indexOf(":");
        if (g !== -1) {
            let y = h.slice(0, g),
                T = h[g + 1] === " " ? 2 : 1,
                b = h.slice(g + T);
            m(y, b, h);
            return
        }
        m(h, "", h)
    }

    function m(h, g, y) {
        switch (h) {
            case "event":
                u = g;
                break;
            case "data":
                d = `${d}${g}
`;
                break;
            case "id":
                o = g.includes("\0") ? void 0 : g;
                break;
            case "retry":
                /^\d+$/.test(g) ? i(parseInt(g, 10)) : r(new yo(`Invalid \`retry\` value: "${g}"`, {
                    type: "invalid-retry",
                    value: g,
                    line: y
                }));
                break;
            default:
                r(new yo(`Unknown field "${h.length>20?`${h.slice(0,20)}\u2026`:h}"`, {
                    type: "unknown-field",
                    field: h,
                    value: g,
                    line: y
                }));
                break
        }
    }

    function f() {
        d.length > 0 && t({
            id: o,
            event: u || void 0,
            data: d.endsWith(`
`) ? d.slice(0, -1) : d
        }), o = void 0, d = "", u = ""
    }

    function v(h = {}) {
        l && h.consume && c(l), n = !0, o = void 0, d = "", u = "", l = ""
    }
    return {
        feed: p,
        reset: v
    }
}

function Na(e) {
    let t = [],
        r = "",
        i = 0;
    for (; i < e.length;) {
        let a = e.indexOf("\r", i),
            l = e.indexOf(`
`, i),
            n = -1;
        if (a !== -1 && l !== -1 ? n = Math.min(a, l) : a !== -1 ? a === e.length - 1 ? n = -1 : n = a : l !== -1 && (n = l), n === -1) {
            r = e.slice(i);
            break
        } else {
            let o = e.slice(i, n);
            t.push(o), i = n + 1, e[i - 1] === "\r" && e[i] === `
` && i++
        }
    }
    return [t, r]
}

function wi(e) {
    return {
        content: e.result,
        part_kind: "tool-result",
        timestamp: e.executed_at,
        tool_call_id: e.tool_call_id,
        tool_name: e.tool_name
    }
}
var Yo = "/api/v2/chat";
var Ri = () => cr() ? {
        request_source: "mobile_webview",
        supported_action_types: [...lr]
    } : {},
    Tt = class extends Error {},
    at = class extends Error {},
    vo = class extends Error {},
    bo = class extends Error {},
    Co = class {
        constructor(t, r) {
            this.thresholdMs = t;
            this.onStale = r;
            this.timerId = null;
            this.onVisibilityChange = null;
            this.timedOut = !1
        }
        reset() {
            this.timerId !== null && clearTimeout(this.timerId), this.timedOut = !1, this.timerId = setTimeout(() => {
                this.timedOut = !0, this.onStale()
            }, this.thresholdMs)
        }
        start() {
            this.onVisibilityChange = () => {
                document.visibilityState === "visible" && this.reset()
            }, document.addEventListener("visibilitychange", this.onVisibilityChange), this.reset()
        }
        stop() {
            this.timerId !== null && (clearTimeout(this.timerId), this.timerId = null), this.onVisibilityChange && (document.removeEventListener("visibilitychange", this.onVisibilityChange), this.onVisibilityChange = null)
        }
    };

function Wa(e) {
    let t = 1e3 * Math.pow(2, e),
        r = Math.min(t, 5e3),
        i = r * .2 * (Math.random() * 2 - 1);
    return r + i
}
var $a = e => new Promise(t => setTimeout(t, e));

function Qa() {
    return {
        reconnectId: null,
        messageUuid: null,
        lastSeenEventSeq: -1,
        receivedStop: !1,
        receivedNonRetryableError: !1,
        hasReceivedContent: !1
    }
}

function Ga(e, t, r, i) {
    var n, o, d, u, p, c;
    let a = "event_seq" in e ? e.event_seq : void 0,
        l = i && a !== void 0 && a <= r.lastSeenEventSeq;
    switch (a !== void 0 && a > r.lastSeenEventSeq && (r.lastSeenEventSeq = a), e.type) {
        case "stream_start":
            {
                r.reconnectId = e.reconnect_id,
                (n = t.onStreamStart) == null || n.call(t, e.reconnect_id);
                break
            }
        case "user_message_saved":
            {
                r.messageUuid = e.message_uuid,
                l || (o = t.onUserMessageSaved) == null || o.call(t, e.message_id, e.message_uuid);
                break
            }
        case "agent_message_start":
            break;
        case "agent_content_delta":
            {
                r.hasReceivedContent = !0,
                l || t.onContent(e.delta.text);
                break
            }
        case "agent_tool_call_start":
            break;
        case "agent_tool_call_args":
            {
                if (!l) {
                    let m = typeof e.args == "string" ? e.args : JSON.stringify(e.args);
                    (d = t.onToolCall) == null || d.call(t, {
                        name: e.tool_name,
                        arguments: m
                    })
                }
                break
            }
        case "agent_tool_result":
            {
                l || (u = t.onToolResult) == null || u.call(t, wi(e));
                break
            }
        case "agent_reasoning_summary":
            break;
        case "agent_message_stop":
            {
                r.messageUuid = e.message_uuid,
                r.receivedStop = !0,
                l || ((p = t.onAgentMessageStop) == null || p.call(t, e.message_uuid), t.onComplete());
                break
            }
        case "agent_error":
            {
                if (e.retryable && !l) throw new at(e.message);e.retryable || (r.receivedStop = !0, r.receivedNonRetryableError = !0),
                l || t.onError(e.message, "server");
                break
            }
        case "agent_deferred_tool_requests":
            {
                r.messageUuid = e.message_uuid,
                r.receivedStop = !0,
                l || (c = t.onDeferredToolRequests) == null || c.call(t, e.requests, e.message_uuid);
                break
            }
    }
}
async function Ya(e, t, r, i, a, l, n, o, d) {
    let u = await Qr({
        url: e,
        method: "POST",
        signal: r,
        headers: {
            "Content-Type": "application/json",
            Accept: "text/event-stream",
            ...Gr()
        },
        body: t
    });
    if (u.status === 401 || u.status === 403) throw new Tt(`Auth error: ${u.status}`);
    if (u.status === 400) {
        let g = await u.json().catch(() => null),
            y = typeof(g == null ? void 0 : g.detail) == "string" ? g.detail : "Invalid request";
        throw new vo(y)
    }
    if (!u.ok) throw new at(`Server error: ${u.status}`);
    if (!u.body) throw new Tt("No response body");
    let p = u.body.getReader(),
        c = new TextDecoder,
        m = !1,
        f = !1,
        v = Date.now(),
        h = Si({
            onEvent(g) {
                try {
                    let y = JSON.parse(g.data);
                    !m && y.type === "stream_start" && (m = !0, De({
                        events: [{
                            type: "timing",
                            name: "time_to_stream_start",
                            value: Date.now() - v
                        }],
                        tags: {
                            api_version: "v2",
                            endpoint: d,
                            attempt_number: String(o)
                        }
                    })), !f && y.type === "agent_content_delta" && (f = !0, De({
                        events: [{
                            type: "timing",
                            name: "time_to_first_token",
                            value: Date.now() - v
                        }],
                        tags: {
                            api_version: "v2",
                            endpoint: d,
                            attempt_number: String(o)
                        }
                    })), Ga(y, i, a, l)
                } catch (y) {
                    throw y instanceof at || y instanceof Tt ? y : (console.warn("V2 stream: failed to parse event", g.data, y), new bo(y instanceof Error ? y.message : "Failed to parse event"))
                }
            }
        });
    try {
        for (;;) {
            let {
                done: g,
                value: y
            } = await p.read();
            if (g) break;
            n.reset(), h.feed(c.decode(y, {
                stream: !0
            }))
        }
    } finally {
        p.releaseLock()
    }
}
async function xi(e) {
    let {
        sessionId: t,
        buildUrl: r,
        buildBody: i,
        handlers: a,
        ctrl: l,
        watchdog: n,
        emitErrorTelemetry: o,
        emitAbortTelemetry: d
    } = e, u = Qa(), p = r(), c = 0, m = !1, f = Date.now();
    for (; c < 3 && !u.receivedStop && !l.signal.aborted;) {
        let v = c > 0 && u.reconnectId !== null;
        v && (m = !0);
        let h = i(v, u);
        try {
            if (n.start(), await Ya(p, h, l.signal, a, u, v, n, c, e.endpoint), n.stop(), u.receivedStop) break
        } catch (g) {
            if (n.stop(), l.signal.aborted && !n.timedOut) {
                d == null || d(u.hasReceivedContent);
                break
            }
            if (g instanceof vo) {
                Oe.warn("V2 stream validation error", {
                    sessionId: t,
                    endpoint: e.endpoint,
                    message: g.message
                }), o == null || o("server_error", "response", u.hasReceivedContent), a.onError(g.message, "validation");
                break
            }
            if (g instanceof Tt) {
                Oe.warn("V2 stream fatal error", {
                    sessionId: t,
                    endpoint: e.endpoint,
                    message: g.message
                }), o == null || o("server_error", "response", u.hasReceivedContent), a.onError(g.message, "server");
                break
            }
            if (n.timedOut) {
                Oe.warn("V2 stream watchdog timeout", {
                    sessionId: t,
                    endpoint: e.endpoint,
                    attempts: c
                }), De({
                    events: [{
                        type: "increment",
                        name: "watchdog_timeout"
                    }],
                    tags: {
                        api_version: "v2",
                        attempt_number: String(c),
                        endpoint: e.endpoint
                    }
                }), o == null || o("network_error", "timeout", u.hasReceivedContent), a.onError("Connection timed out", "connection");
                break
            }
            if (g instanceof bo) {
                Oe.warn("V2 stream parse error", {
                    sessionId: t,
                    endpoint: e.endpoint,
                    message: g.message
                }), o == null || o("parse_error", "parse", u.hasReceivedContent), a.onError(g.message, "server");
                break
            }
            if (c + 1 >= 3) {
                let y = g instanceof TypeError,
                    T, b;
                g instanceof at ? (T = "stream_error", b = "stream") : y ? (T = "network_error", b = "fetch") : (T = "unknown", b = "fetch");
                let S = y ? "connection" : "server";
                Oe.warn("V2 stream max retries exhausted", {
                    sessionId: t,
                    endpoint: e.endpoint,
                    attempts: c,
                    errorType: T,
                    stage: b
                }), o == null || o(T, b, u.hasReceivedContent), a.onError(g instanceof Error ? g.message : "Stream failed after retries", S);
                break
            }
            await $a(Wa(c)), c++, De({
                events: [{
                    type: "increment",
                    name: "stream_retry"
                }],
                tags: {
                    api_version: "v2",
                    attempt_number: String(c),
                    endpoint: e.endpoint,
                    retry_reason: g instanceof at ? "retriable_error" : g instanceof TypeError ? "network_error" : "unknown",
                    is_reconnect: String(u.reconnectId !== null)
                }
            })
        }
    }
    u.receivedStop && (u.receivedNonRetryableError ? o == null || o("server_error", "stream", u.hasReceivedContent) : (De({
        events: [{
            type: "increment",
            name: "stream_completed"
        }],
        tags: {
            api_version: "v2",
            attempt_number: String(c),
            endpoint: e.endpoint,
            had_reconnect: String(m)
        }
    }), De({
        events: [{
            type: "timing",
            name: "stream_duration",
            value: Date.now() - f
        }],
        tags: {
            api_version: "v2",
            attempt_number: String(c),
            endpoint: e.endpoint
        }
    })))
}
var Xo = class {
        streamChatResponseV2(t, r, i, a) {
            let l = new AbortController,
                n = !1,
                o = "unmount",
                d = (m, f, v) => {
                    n || (n = !0, De({
                        events: [{
                            type: "increment",
                            name: "stream_interrupted"
                        }],
                        tags: {
                            api_version: "v2",
                            endpoint: "stream",
                            error_type: m,
                            error_stage: f,
                            had_content: v ? "true" : "false"
                        }
                    }))
                },
                u = m => {
                    o === "user" && De({
                        events: [{
                            type: "increment",
                            name: "stream_aborted_by_user"
                        }],
                        tags: {
                            api_version: "v2",
                            endpoint: "stream",
                            had_content: m ? "true" : "false"
                        }
                    })
                },
                p = ko(),
                c = new Co(15e3, () => l.abort());
            return De({
                events: [{
                    type: "increment",
                    name: "message_sent"
                }],
                tags: {
                    api_version: "v2",
                    endpoint: "stream"
                }
            }), xi({
                sessionId: t,
                endpoint: "stream",
                buildUrl: () => `${p}${Yo}/${t}/stream`,
                buildBody: (m, f) => {
                    var v, h;
                    return JSON.stringify({
                        message: r,
                        reconnect_id: m ? f.reconnectId : (v = a == null ? void 0 : a.reconnectId) != null ? v : null,
                        ...(h = a == null ? void 0 : a.attachmentIds) != null && h.length ? {
                            attachment_ids: a.attachmentIds
                        } : {},
                        ...a != null && a.filter ? {
                            filter: a.filter
                        } : {},
                        ...Ri()
                    })
                },
                handlers: i,
                ctrl: l,
                watchdog: c,
                emitErrorTelemetry: d,
                emitAbortTelemetry: u
            }).catch(m => {
                (m == null ? void 0 : m.name) !== "AbortError" && console.error("V2 stream unexpected error", m)
            }), m => {
                m && (o = m), c.stop(), l.abort()
            }
        }
        streamAfterToolApprovalV2(t, r, i) {
            let a = new AbortController,
                l = !1,
                n = "unmount",
                o = (c, m, f) => {
                    l || (l = !0, De({
                        events: [{
                            type: "increment",
                            name: "stream_interrupted"
                        }],
                        tags: {
                            api_version: "v2",
                            endpoint: "approve_tools",
                            error_type: c,
                            error_stage: m,
                            had_content: f ? "true" : "false"
                        }
                    }))
                },
                d = c => {
                    n === "user" && De({
                        events: [{
                            type: "increment",
                            name: "stream_aborted_by_user"
                        }],
                        tags: {
                            api_version: "v2",
                            endpoint: "approve_tools",
                            had_content: c ? "true" : "false"
                        }
                    })
                },
                u = ko(),
                p = new Co(15e3, () => a.abort());
            return De({
                events: [{
                    type: "increment",
                    name: "tool_approval_sent"
                }],
                tags: {
                    api_version: "v2",
                    endpoint: "approve_tools"
                }
            }), xi({
                sessionId: t,
                endpoint: "approve_tools",
                buildUrl: () => `${u}${Yo}/${t}/approve_tools`,
                buildBody: () => JSON.stringify({ ...r,
                    ...Ri()
                }),
                handlers: i,
                ctrl: a,
                watchdog: p,
                emitErrorTelemetry: o,
                emitAbortTelemetry: d
            }).catch(c => {
                (c == null ? void 0 : c.name) !== "AbortError" && console.error("V2 approve_tools stream unexpected error", c)
            }), c => {
                c && (n = c), p.stop(), a.abort()
            }
        }
    },
    Dt = new Xo;
var _i = () => {
    let e = We(C => C.sessionId),
        t = We(C => C.messages),
        r = We(C => C.filter),
        i = We(C => C.setSessionId),
        a = We(C => C.setMessages),
        l = We(C => C.appendMessage),
        n = We(C => C.updateMessage),
        o = We(C => C.removeMessage),
        [d, u] = (0, K.useState)(!1),
        [p, c] = (0, K.useState)(null),
        [m, f] = (0, K.useState)(null),
        [v, h] = (0, K.useState)(!1),
        [g, y] = (0, K.useState)(() => e !== null),
        [T, b] = (0, K.useState)(null),
        S = (0, K.useRef)(null),
        O = (0, K.useRef)(null),
        re = (0, K.useRef)(null),
        Y = (0, K.useRef)(0),
        W = (0, K.useRef)(0),
        R = (0, K.useRef)(t);
    R.current = t;
    let B = (0, K.useRef)(null),
        H = (0, K.useRef)(null),
        F = (0, K.useRef)({}),
        Q = K.default.useContext(jo),
        w = (0, K.useCallback)((C, I) => {
            i(C), a(I)
        }, [i, a]),
        D = (0, K.useCallback)(C => {
            C.filter(P => {
                var U;
                return ((U = P.deferred_tool_approval) == null ? void 0 : U.status) === "pending"
            }).forEach(P => {
                var Ee;
                let U = (Ee = P.function_calls) == null ? void 0 : Ee.filter(me => me.approval_status === "pending");
                U && U.length > 0 && b(me => ({ ...me,
                    approvals: U.map(J => ({
                        tool_call_id: J.tool_call_id,
                        tool_name: J.function.name,
                        args: J.function.arguments
                    }))
                }))
            })
        }, []),
        ne = (0, K.useCallback)(() => {
            y(!0)
        }, []),
        se = (0, K.useCallback)((C, I) => {
            let {
                sessionId: P,
                aiMessageId: U,
                userMessageLocalId: Ee,
                toolTrackingCount: me,
                responseMessageCount: J,
                responseStartTime: ie,
                isActiveAttempt: pe
            } = I;
            return {
                onContent: M => {
                    pe && !pe() || (C.aiContent += M, n(U, {
                        content: C.aiContent,
                        tool_calls: C.currentToolCalls,
                        tool_results: C.currentToolResults,
                        cited_sources: Array.from(C.aiContent.matchAll(Yr), Se => Se[1]).filter(Se => Se !== void 0) || []
                    }))
                },
                onComplete: () => {
                    if (pe && !pe()) return;
                    u(!1), S.current = null, Ee && n(Ee, {
                        is_response_generating: !1
                    }), C.aiContent || y(!0);
                    let M = C.currentToolCalls.some(Ze => Ze.name === "fallback_cant_answer"),
                        Se = C.currentToolCalls.some(Ze => Ze.name === "fallback_escalate_to_human");
                    !M && !Se && _.chat.responseGenerated(P, U, C.aiContent.length, J);
                    let ve = Date.now() - ie;
                    _.chat.responseReceivedGenerated(P, U, C.aiContent.length, ve, J), _.chat.messageReceived(P, U, C.aiContent.length, ve, J, C.currentToolCalls.length > 0, M ? "fallback" : Se ? "escalation" : "response")
                },
                onToolCall: M => {
                    pe && !pe() || (C.currentToolCalls = [...C.currentToolCalls, M], n(U, {
                        content: C.aiContent,
                        tool_calls: C.currentToolCalls,
                        tool_results: C.currentToolResults
                    }), _.chat.toolCallExecuted(P, U, `${M.name}-${C.currentToolCalls.length}`, M.name, me), M.name === "fallback_cant_answer" && _.chat.fallbackTriggered(P, U, M.name, me), M.name === "fallback_escalate_to_human" && _.chat.escalationTriggered(P, U, M.name, me))
                },
                onToolResult: M => {
                    if (pe && !pe()) return;
                    C.currentToolResults = [...C.currentToolResults, M], n(U, {
                        content: C.aiContent,
                        tool_calls: C.currentToolCalls,
                        tool_results: C.currentToolResults
                    });
                    let Se = C.currentToolCalls[C.currentToolResults.length - 1];
                    Se && _.chat.toolResultDisplayed(P, U, `${Se.name}-${C.currentToolResults.length}`, Se.name, "success", me)
                }
            }
        }, [n]),
        ae = (0, K.useCallback)(async C => {
            if (v) return e;
            h(!0), c(null);
            try {
                let I = await Pe.createSession(C);
                i(I.session_id), a([]), _.chat.sessionStarted(I.session_id, C);
                try {
                    let P = await Pe.loadChatHistory(I.session_id);
                    a(P), w(I.session_id, P), D(P), P.length === 0 && !d && S.current === null && y(!0)
                } catch (P) {
                    console.error("[Chat V2] initializeSession: failed to load initial history", P), !d && S.current === null && y(!0)
                }
                return I.session_id
            } catch (I) {
                throw console.error("Failed to initialize session:", I), c(I instanceof Error ? I.message : "Failed to create session"), I
            } finally {
                h(!1)
            }
        }, [v, i, a, w, e, d, D]),
        oe = (0, K.useCallback)(async (C, I) => {
            c(null), i(C), a(I), y(!0), D(I)
        }, [i, a, D]),
        de = (0, K.useCallback)(async C => {
            try {
                c(null), i(C);
                let I = await Pe.loadChatHistory(C);
                a(I), y(!0), D(I)
            } catch (I) {
                if (I instanceof Qt && I.status === 404) {
                    console.warn("[Chat V2] Session not found, clearing state"), i(null), a([]);
                    return
                }
                c(I instanceof Error ? I.message : "Failed to load chat history")
            }
        }, [i, a, D]),
        fe = (0, K.useCallback)(async (C, I, P) => {
            let U = C.trim(),
                Ee = !!(I && I.length > 0);
            if (!e || d || !U && !Ee) return;
            let me = !!P;
            u(!0), c(null), f(null), y(!1), H.current = P != null ? P : null;
            let J, ie;
            if (me) {
                let q = [...R.current].reverse().find(Be => Be.role === "user" && Be.content === U);
                J = q == null ? void 0 : q.id, J && n(J, {
                    is_response_generating: !0
                });
                let Ie = R.current.find(Be => Be.role === "assistant" && Be.parent_message_id !== void 0 && Be.parent_message_id === (q == null ? void 0 : q.message_id));
                Ie ? ie = Ie.id : (ie = `assistant-${Date.now()}`, l({
                    id: ie,
                    content: "",
                    role: "assistant",
                    created_at: new Date().toISOString()
                }))
            } else {
                B.current = null, F.current = {};
                let q = {
                    id: `user-${Date.now()}`,
                    content: U,
                    role: "user",
                    created_at: new Date().toISOString(),
                    is_response_generating: !0,
                    ...Ee ? {
                        attachments: I
                    } : {}
                };
                l(q), _.chat.messageSent(e, q.id, U.length, t.length + 1), J = q.id, ie = `assistant-${Date.now()}`, l({
                    id: ie,
                    content: "",
                    role: "assistant",
                    created_at: new Date().toISOString()
                })
            }
            W.current = Y.current;
            let pe = ++Y.current,
                M = () => Y.current === pe,
                ve = se({
                    aiContent: "",
                    currentToolCalls: [],
                    currentToolResults: []
                }, {
                    sessionId: e,
                    aiMessageId: ie,
                    userMessageLocalId: J,
                    toolTrackingCount: t.length + 1,
                    responseMessageCount: t.length + 2,
                    responseStartTime: Date.now(),
                    isActiveAttempt: M
                }),
                Ze = q => {
                    M() && q && (B.current = q, n(ie, {
                        message_uuid: q
                    }))
                },
                kt = (q, Ie) => {
                    var he, be;
                    if (!M()) return;
                    B.current = Ie;
                    let Be = (he = q.calls) != null ? he : [],
                        ct = (be = q.approvals) != null ? be : [],
                        z = () => {
                            let Ae = ct.map(ee => ee.approval_string).filter(ee => ee != null && ee !== ""),
                                Z = (Ae.length > 0 ? Ae : ["Your approval is required to continue."]).map((ee, we) => ({
                                    id: `tool-approval-${Date.now()}-${we}`,
                                    role: "assistant",
                                    content: ee,
                                    created_at: new Date().toISOString(),
                                    deferred_tool_approval: {
                                        status: "pending"
                                    },
                                    function_calls: ct.map(te => ({
                                        tool_call_id: te.tool_call_id,
                                        function: {
                                            name: te.tool_name,
                                            arguments: te.args
                                        }
                                    }))
                                }));
                            a(R.current.filter(ee => ee.id !== ie).concat(Z)), b(q), S.current = null, u(!1)
                        },
                        j = Q == null ? void 0 : Q.callbackToolRegistry;
                    if (Be.length > 0 && j) {
                        let Ae = Be.map(async le => {
                            var ce;
                            let Z = le.tool_name,
                                ee = (ce = le.callback_name) != null ? ce : Z,
                                we = j.get(ee);
                            if (!we) return _.chat.callbackToolNoHandler(Z, ee), [le.tool_call_id, {
                                status: "ok"
                            }];
                            _.chat.callbackToolDispatched(Z, ee);
                            let te = Date.now();
                            try {
                                let $ = {};
                                if (le.args) try {
                                    $ = typeof le.args == "string" ? JSON.parse(le.args) : le.args
                                } catch (Fe) {
                                    $ = {}
                                }
                                let Le = await we($);
                                return _.chat.callbackToolSucceeded(Z, Date.now() - te), [le.tool_call_id, Le]
                            } catch ($) {
                                let Le = $ instanceof Error ? $.message : String($);
                                return _.chat.callbackToolFailed(Z, Le), console.error("[Chat V2] Callback tool execution failed", {
                                    tool_name: Z,
                                    error: $
                                }), [le.tool_call_id, {
                                    error: "Callback tool execution failed"
                                }]
                            }
                        });
                        if (ct.length === 0) {
                            Promise.all(Ae).then(le => {
                                let Z = M();
                                if (!Z && pe <= W.current) return;
                                let ee = {};
                                for (let [$, Le] of le) $ != null && (ee[$] = Le);
                                let te = se({
                                    aiContent: "",
                                    currentToolCalls: [],
                                    currentToolResults: []
                                }, {
                                    sessionId: e != null ? e : "",
                                    aiMessageId: ie,
                                    userMessageLocalId: void 0,
                                    toolTrackingCount: t.length,
                                    responseMessageCount: t.length + 1,
                                    responseStartTime: Date.now(),
                                    isActiveAttempt: M
                                });
                                Z && (S.current && (S.current(), S.current = null), O.current && O.current());
                                let ce = Dt.streamAfterToolApprovalV2(e != null ? e : "", {
                                    message_uuid: Ie,
                                    approvals: {},
                                    callback_results: ee
                                }, {
                                    onContent: te.onContent,
                                    onComplete: () => {
                                        O.current = null, te.onComplete()
                                    },
                                    onError: $ => {
                                        O.current = null, M() && (u(!1), c($), y(!0), S.current = null)
                                    },
                                    onToolCall: te.onToolCall,
                                    onToolResult: te.onToolResult,
                                    onAgentMessageStop: Ze,
                                    onDeferredToolRequests: kt
                                });
                                Z && (O.current = ce)
                            });
                            return
                        }
                        Promise.all(Ae).then(le => {
                            if (!M()) return;
                            let Z = {};
                            for (let [ee, we] of le) ee != null && (Z[ee] = we);
                            F.current = Z, z()
                        });
                        return
                    }
                    z()
                };
            S.current && S.current(), S.current = Dt.streamChatResponseV2(e, U, {
                onContent: ve.onContent,
                onComplete: ve.onComplete,
                onError: (q, Ie) => {
                    M() && (S.current = null, u(!1), y(!0), f({
                        type: Ie,
                        message: q,
                        failedContent: U
                    }), o(ie), J && n(J, {
                        is_response_generating: !1
                    }))
                },
                onToolCall: ve.onToolCall,
                onToolResult: ve.onToolResult,
                onStreamStart: q => {
                    H.current = q
                },
                onUserMessageSaved: (q, Ie) => {
                    M() && (B.current = Ie, J && n(J, {
                        message_id: q,
                        message_uuid: Ie
                    }), n(ie, {
                        parent_message_id: q
                    }))
                },
                onAgentMessageStop: q => {
                    M() && q && (B.current = q, n(ie, {
                        message_uuid: q
                    }))
                },
                onDeferredToolRequests: kt
            }, {
                attachmentIds: Ee ? I == null ? void 0 : I.map(q => q.id) : void 0,
                filter: r,
                reconnectId: P
            })
        }, [e, d, t, r, se, l, n, o, a, Q]),
        X = (0, K.useCallback)((C, I) => {
            var Ie, Be, ct;
            let P = I ? "approved" : "denied";
            u(!0), y(!1);
            let U = `assistant-${Date.now()}`,
                Ee = {
                    id: U,
                    content: "",
                    role: "assistant",
                    created_at: new Date().toISOString()
                };
            a([...R.current.map(z => z.id === C.id ? { ...z,
                deferred_tool_approval: {
                    status: P
                }
            } : z), Ee]);
            let me = {},
                J = [],
                ie = async z => {
                    var Ae, le;
                    let j = (Ae = z.callback_name) != null ? Ae : z.tool_name,
                        he = (le = Q == null ? void 0 : Q.callbackToolRegistry) == null ? void 0 : le.get(j);
                    if (!he) return _.chat.callbackToolNoHandler(z.tool_name, j), [z.tool_call_id, {
                        status: "ok"
                    }];
                    _.chat.callbackToolDispatched(z.tool_name, j);
                    let be = Date.now();
                    try {
                        let Z = {};
                        if (z.args) try {
                            Z = typeof z.args == "string" ? JSON.parse(z.args) : z.args
                        } catch (we) {
                            Z = {}
                        }
                        let ee = await he(Z);
                        return _.chat.callbackToolSucceeded(z.tool_name, Date.now() - be), [z.tool_call_id, ee]
                    } catch (Z) {
                        let ee = Z instanceof Error ? Z.message : String(Z);
                        return _.chat.callbackToolFailed(z.tool_name, ee), console.error("[Chat V2] Callback tool execution failed", {
                            tool_name: z.tool_name,
                            error: Z
                        }), [z.tool_call_id, {
                            error: "Callback tool execution failed"
                        }]
                    }
                };
            if (T) {
                let z = (Be = (Ie = C.function_calls) == null ? void 0 : Ie.map(j => j.tool_call_id)) != null ? Be : [];
                for (let j of (ct = T.approvals) != null ? ct : []) z.includes(j.tool_call_id) && (j.tool_type === "callback" && I ? J.push(ie(j)) : me[j.tool_call_id] = I);
                b(j => {
                    var he;
                    return j ? { ...j,
                        approvals: ((he = j.approvals) != null ? he : []).filter(be => !z.includes(be.tool_call_id))
                    } : null
                })
            }
            W.current = Y.current;
            let pe = ++Y.current,
                M = () => Y.current === pe,
                ve = se({
                    aiContent: "",
                    currentToolCalls: [],
                    currentToolResults: []
                }, {
                    sessionId: e != null ? e : "",
                    aiMessageId: U,
                    userMessageLocalId: void 0,
                    toolTrackingCount: t.length + 1,
                    responseMessageCount: t.length + 2,
                    responseStartTime: Date.now(),
                    isActiveAttempt: M
                }),
                Ze = z => {
                    M() && z && (B.current = z, n(U, {
                        message_uuid: z
                    }))
                },
                kt = (z, j) => {
                    var Z, ee;
                    if (!M()) return;
                    B.current = j;
                    let he = (Z = z.calls) != null ? Z : [],
                        be = (ee = z.approvals) != null ? ee : [],
                        Ae = () => {
                            let we = be.map($ => $.approval_string).filter($ => $ != null && $ !== ""),
                                ce = (we.length > 0 ? we : ["Your approval is required to continue."]).map(($, Le) => ({
                                    id: `tool-approval-${Date.now()}-${Le}`,
                                    role: "assistant",
                                    content: $,
                                    created_at: new Date().toISOString(),
                                    deferred_tool_approval: {
                                        status: "pending"
                                    },
                                    function_calls: be.map(Fe => ({
                                        tool_call_id: Fe.tool_call_id,
                                        function: {
                                            name: Fe.tool_name,
                                            arguments: Fe.args
                                        }
                                    }))
                                }));
                            a(R.current.filter($ => $.id !== U).concat(ce)), b(z), S.current = null, u(!1)
                        },
                        le = Q == null ? void 0 : Q.callbackToolRegistry;
                    if (he.length > 0 && le) {
                        let we = he.map(async te => {
                            var Pt;
                            let ce = te.tool_name,
                                $ = (Pt = te.callback_name) != null ? Pt : ce,
                                Le = le.get($);
                            if (!Le) return _.chat.callbackToolNoHandler(ce, $), [te.tool_call_id, {
                                status: "ok"
                            }];
                            _.chat.callbackToolDispatched(ce, $);
                            let Fe = Date.now();
                            try {
                                let He = {};
                                if (te.args) try {
                                    He = typeof te.args == "string" ? JSON.parse(te.args) : te.args
                                } catch (Ja) {
                                    He = {}
                                }
                                let Rt = await Le(He);
                                return _.chat.callbackToolSucceeded(ce, Date.now() - Fe), [te.tool_call_id, Rt]
                            } catch (He) {
                                let Rt = He instanceof Error ? He.message : String(He);
                                return _.chat.callbackToolFailed(ce, Rt), console.error("[Chat V2] Callback tool execution failed", {
                                    tool_name: ce,
                                    error: He
                                }), [te.tool_call_id, {
                                    error: "Callback tool execution failed"
                                }]
                            }
                        });
                        if (be.length === 0) {
                            Promise.all(we).then(te => {
                                let ce = M();
                                if (!ce && pe <= W.current) return;
                                let $ = {};
                                for (let [He, Rt] of te) He != null && ($[He] = Rt);
                                let Fe = se({
                                    aiContent: "",
                                    currentToolCalls: [],
                                    currentToolResults: []
                                }, {
                                    sessionId: e != null ? e : "",
                                    aiMessageId: U,
                                    userMessageLocalId: void 0,
                                    toolTrackingCount: t.length,
                                    responseMessageCount: t.length + 1,
                                    responseStartTime: Date.now(),
                                    isActiveAttempt: M
                                });
                                ce && (S.current && (S.current(), S.current = null), O.current && O.current());
                                let Pt = Dt.streamAfterToolApprovalV2(e != null ? e : "", {
                                    message_uuid: j,
                                    approvals: {},
                                    callback_results: $
                                }, {
                                    onContent: Fe.onContent,
                                    onComplete: () => {
                                        O.current = null, Fe.onComplete()
                                    },
                                    onError: He => {
                                        O.current = null, M() && (u(!1), c(He), y(!0), S.current = null)
                                    },
                                    onToolCall: Fe.onToolCall,
                                    onToolResult: Fe.onToolResult,
                                    onAgentMessageStop: Ze,
                                    onDeferredToolRequests: kt
                                });
                                ce && (O.current = Pt)
                            });
                            return
                        }
                        Promise.all(we).then(te => {
                            if (!M()) return;
                            let ce = {};
                            for (let [$, Le] of te) $ != null && (ce[$] = Le);
                            F.current = ce, Ae()
                        });
                        return
                    }
                    Ae()
                },
                q = z => {
                    var be;
                    let j = F.current;
                    F.current = {};
                    let he = { ...j,
                        ...z
                    };
                    S.current && S.current(), S.current = Dt.streamAfterToolApprovalV2(e != null ? e : "", {
                        message_uuid: (be = B.current) != null ? be : "",
                        approvals: me,
                        ...Object.keys(he).length > 0 ? {
                            callback_results: he
                        } : {}
                    }, {
                        onContent: ve.onContent,
                        onComplete: ve.onComplete,
                        onError: Ae => {
                            M() && (u(!1), c(Ae), y(!0), o(U), S.current = null)
                        },
                        onToolCall: ve.onToolCall,
                        onToolResult: ve.onToolResult,
                        onAgentMessageStop: Ze,
                        onDeferredToolRequests: kt
                    })
                };
            J.length > 0 ? Promise.all(J).then(z => {
                if (!M()) {
                    u(!1), o(U);
                    return
                }
                let j = {};
                for (let [he, be] of z) j[he] = be;
                q(j)
            }) : q({})
        }, [e, T, se, t, a, n, o, Q]),
        Ye = (0, K.useCallback)(() => {
            if (!m) return;
            let C = m.failedContent,
                I = H.current;
            f(null), fe(C, void 0, I)
        }, [m, fe]),
        lt = (0, K.useCallback)(async (C, I, P) => {
            if (!e) return;
            re.current && (re.current(), re.current = null);
            let U = typeof C == "number" ? {
                    score: I,
                    reason: P,
                    target_message_id: C
                } : {
                    score: I,
                    reason: P,
                    target_message_uuid: C
                },
                Ee = {
                    id: `feedback-${Date.now()}`,
                    content: P,
                    role: "feedback",
                    created_at: new Date().toISOString(),
                    feedback: U
                },
                me = null,
                J = "",
                ie = [],
                pe = M => {
                    if (!me) {
                        me = `assistant-feedback-${Date.now()}`, l({
                            id: me,
                            content: "",
                            role: "assistant",
                            created_at: new Date().toISOString(),
                            ...M
                        });
                        return
                    }
                    n(me, M)
                };
            re.current = Pe.streamFeedbackResponse(e, Ee, M => {
                J += M, pe({
                    content: J,
                    tool_results: ie
                })
            }, () => {
                re.current = null
            }, M => {
                console.error("Failed to stream feedback response:", M), re.current = null
            }, M => {
                ie = [...ie, M], pe({
                    content: J,
                    tool_results: ie
                })
            }, (M, Se, ve) => {
                Se === "assistant" && pe({
                    message_id: M,
                    ...ve !== void 0 ? {
                        hide_feedback: ve
                    } : {}
                })
            }, r)
        }, [l, e, n, r]),
        Xe = (0, K.useCallback)(() => {
            S.current && (S.current(), S.current = null), Y.current += 1, re.current && (re.current(), re.current = null), u(!1)
        }, []),
        Ai = (0, K.useCallback)(() => {
            let C = [...t].reverse().find(P => P.role === "user" && P.is_response_generating && P.message_id !== void 0);
            e && (C == null ? void 0 : C.message_id) !== void 0 && Pe.abortMessage(e, C.message_id).catch(P => {
                console.warn("Failed to abort message generation:", P)
            }), e && _.chat.messageStopped(e, t.length), S.current && (S.current("user"), S.current = null), O.current && (O.current("user"), O.current = null), W.current = Y.current, Y.current += 1, u(!1), y(!0);
            let I = [...t].reverse().find(P => P.role === "user" && P.is_response_generating);
            I && n(I.id, {
                is_response_generating: !1
            })
        }, [t, e, n]),
        Li = (0, K.useCallback)(() => {
            O.current && (O.current(), O.current = null), W.current = Y.current, Y.current += 1, a([]), i(null), y(!1)
        }, [a, i]);
    return (0, K.useEffect)(() => Xe, [Xe]), {
        sessionId: e,
        messages: t,
        isLoading: d,
        error: p,
        chatError: m,
        isInitializing: v,
        initializeSession: ae,
        loadChatHistory: de,
        sendMessage: fe,
        sendFeedback: lt,
        cleanup: Xe,
        stopStreaming: Ai,
        clearMessages: Li,
        restoreSession: oe,
        allMessagesStreamed: g,
        finishStreaming: ne,
        retryLastMessage: Ye,
        submitToolApproval: X
    }
};
var Mi = ({
    children: e
}) => {
    let t = _i(),
        r = (0, Ge.useMemo)(() => new ir, []),
        [i, a] = (0, Ge.useState)(() => r.get(Mt, "") !== "" && !t.sessionId);
    return (0, Ge.useEffect)(() => {
        t.sessionId && r.set(Mt, t.sessionId)
    }, [t.sessionId, r]), (0, Ge.useEffect)(() => {
        let l = r.get(Mt, "");
        l && !t.sessionId ? Pe.loadChatHistory(l).then(n => {
            t.restoreSession(l, n), _.chat.sessionRestored(l, n.length)
        }).catch(n => {
            n instanceof Qt && n.status === 404 && r.remove(Mt), console.error("Failed to restore session from storage:", n)
        }).finally(() => {
            a(!1)
        }) : a(!1)
    }, []), i ? null : Ge.default.createElement(Xr.Provider, {
        value: t
    }, e)
};
var Xa = new Kr,
    Ei = "engagement.resourceCenter.minimizedHeaderHeight",
    Za = ({
        parentCallbackRef: e,
        style: t,
        initialEntries: r,
        windowPosition: i
    }) => {
        let a = Ce(_t),
            l = V(),
            {
                resourceCenter: {
                    minimized: n
                },
                showWidgetTableau: o
            } = l,
            {
                isMobileDevice: d,
                isStudioMobilePreview: u,
                studioMobilePreviewWrapper: p
            } = dt(),
            c = ht(),
            {
                animStyles: m
            } = ur(),
            [f, v] = (0, ue.useState)(null);
        (0, ue.useEffect)(() => {
            let w = !1;
            return Pe.getChatFeatures().then(D => {
                var ne;
                w || v((ne = D.stream_v2) != null ? ne : !1)
            }).catch(() => {
                w || v(!1)
            }), () => {
                w = !0
            }
        }, []), Pr(d);
        let h = ue.default.useRef(null),
            g = ue.default.useRef(null),
            y = ue.default.useRef(null),
            T = ue.default.useRef(null),
            [b, S] = ue.default.useState(),
            [O, re] = ue.default.useState(),
            [Y, W] = ue.default.useState(void 0),
            [R, B] = ue.default.useState(() => {
                try {
                    let w = window.localStorage.getItem(Ei),
                        D = w ? Number(w) : NaN;
                    return Number.isFinite(D) && D > 0 ? D : void 0
                } catch (w) {
                    return
                }
            }),
            H = ue.default.useCallback(w => {
                var se;
                if ((se = y.current) == null || se.disconnect(), y.current = null, g.current = w, !w) return;
                let D = () => {
                    let ae = w.offsetHeight;
                    if (ae > 0) {
                        B(ae);
                        try {
                            window.localStorage.setItem(Ei, String(ae))
                        } catch (oe) {}
                    }
                };
                D();
                let ne = new ResizeObserver(D);
                ne.observe(w), y.current = ne
            }, []);
        ue.default.useEffect(() => () => {
            var w;
            (w = y.current) == null || w.disconnect(), y.current = null
        }, []), ue.default.useEffect(() => {
            c && (S(void 0), re(void 0))
        }, [c]);
        let F = (() => {
            let w = {};
            return n && !c ? w = { ...w,
                height: R != null ? R : 0,
                overflow: "hidden",
                ...O && {
                    width: O
                }
            } : l.isEditorPreview && !u && !o ? l.isAssistantPreview ? w = { ...w,
                height: "calc(100vh - 24px)",
                width: "440px",
                inset: 12,
                margin: "auto"
            } : w = { ...w,
                height: "calc(80vh - 24px)",
                inset: 32,
                margin: "auto"
            } : u ? w = { ...w,
                position: "absolute",
                inset: "0px",
                height: "100%",
                width: "100%",
                boxShadow: "none",
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px"
            } : c ? w = { ...w,
                position: "fixed",
                inset: "0px",
                marginBottom: "1px",
                height: "100%",
                width: "auto",
                boxShadow: "none"
            } : w = { ...w,
                ...i === "bottomLeft" ? {
                    left: 12
                } : {
                    right: 12
                }
            }, t && (w = { ...w,
                ...t
            }), !n && !c ? { ...w,
                ...b && {
                    height: b
                },
                ...O && {
                    width: O
                }
            } : w
        })();
        ue.default.useEffect(() => {
            let w = D => {
                D.key === "Escape" && (D.preventDefault(), D.stopPropagation(), a())
            };
            return document.addEventListener("keydown", w), () => {
                document.removeEventListener("keydown", w)
            }
        }, [a]), ue.default.useEffect(() => {
            ui("resource-center-shown", {})
        }, []), ue.default.useEffect(() => {
            if (n && !c) {
                W(void 0);
                return
            }
            let w = 40,
                D = () => {
                    let X = 0;
                    g.current && (X += g.current.offsetHeight), T.current && (X += T.current.offsetHeight);
                    let Ye = document.getElementById("chat-bottom-section");
                    Ye && (X += Ye.offsetHeight, X += w), X > 0 && W(X)
                },
                ne = requestAnimationFrame(D),
                se = new ResizeObserver(D);
            g.current && se.observe(g.current), T.current && se.observe(T.current);
            let ae = null,
                oe = null,
                de = X => {
                    oe = new ResizeObserver(D), oe.observe(X), D(), ae && (ae.disconnect(), ae = null)
                },
                fe = document.getElementById("chat-bottom-section");
            return fe ? de(fe) : (ae = new MutationObserver(X => {
                for (let Ye of X)
                    for (let lt of Array.from(Ye.addedNodes))
                        if (lt.nodeType === Node.ELEMENT_NODE) {
                            let Xe = lt;
                            if (Xe) {
                                de(Xe);
                                break
                            }
                        }
            }), h.current && ae.observe(h.current, {
                childList: !0,
                subtree: !0
            })), () => {
                cancelAnimationFrame(ne), se.disconnect(), ae && ae.disconnect(), oe && oe.disconnect()
            }
        }, [n, c]), ue.default.useEffect(() => {
            var oe, de, fe, X;
            if (!h.current) return;
            if (c) {
                h.current.style.transform = "";
                return
            }
            let w = h.current.getBoundingClientRect();
            if (w.top > 0) return;
            let D = window.getComputedStyle(h.current).getPropertyValue("transform"),
                ne = (de = (oe = /matrix.*\((.+)\)/.exec(D)) == null ? void 0 : oe[1]) == null ? void 0 : de.split(", "),
                se = parseFloat((fe = ne == null ? void 0 : ne[4]) != null ? fe : "0"),
                ae = parseFloat((X = ne == null ? void 0 : ne[5]) != null ? X : "0") - w.top;
            h.current.style.transform = `translate(${se}px, ${ae}px)`
        }, [n, c]);
        let Q = s(qr, {
            client: Xa
        }, s(mi, {
            style: { ...F,
                ...m,
                ...Y && (!n || c) ? {
                    minHeight: `${Y}px`
                } : {}
            },
            id: "resource-center-modal",
            "data-testid": "resource-center-modal",
            className: `resource-center${o?"":"-levelmove"}${!n||c?" expanded":""}`,
            modalRef: h,
            parentCallbackRef: e
        }, h.current && !c && s(en, {
            resizeElement: h.current,
            setHeight: S,
            setWidth: re
        }), f !== null && (f ? s(Mi, null, s(zo, {
            initialEntries: r,
            header: s(Uo, {
                ref: H
            }),
            footer: s(Qo, {
                ref: T
            })
        })) : s(Zr, null, s(zo, {
            initialEntries: r,
            header: s(Uo, {
                ref: H
            }),
            footer: s(Qo, {
                ref: T
            })
        })))));
        return u && p ? Ii.default.createPortal(Q, p) : Q
    },
    Ug = Za;
export {
    Za as a, Ug as b
};