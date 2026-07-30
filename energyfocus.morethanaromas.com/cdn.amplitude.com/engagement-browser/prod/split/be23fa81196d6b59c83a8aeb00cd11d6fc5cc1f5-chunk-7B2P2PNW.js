import {
    Dc as Hr,
    Ec as Br,
    Ic as Gr,
    Jc as zr,
    Rc as Wr,
    Sb as Fr,
    Sc as Ye,
    U as Cr,
    V as Nr,
    W as Or,
    X as Ir,
    Ya as It,
    Z as Mr,
    a as Ie,
    aa as ye,
    c as Q,
    ca as le,
    d as Ot,
    e as re,
    ea as kr,
    ha as ne,
    i as wr,
    ja as Dr,
    ka as Y,
    q as Rr,
    ra as Go,
    ua as Lr,
    v as Me,
    va as Pr,
    wa as Ur
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var On = Ie(Nn => {
    "use strict";
    var Te = re();

    function _a(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var xa = typeof Object.is == "function" ? Object.is : _a,
        wa = Te.useState,
        Ra = Te.useEffect,
        Ca = Te.useLayoutEffect,
        Na = Te.useDebugValue;

    function Oa(t, e) {
        var r = e(),
            n = wa({
                inst: {
                    value: r,
                    getSnapshot: e
                }
            }),
            o = n[0].inst,
            a = n[1];
        return Ca(function() {
            o.value = r, o.getSnapshot = e, $t(o) && a({
                inst: o
            })
        }, [t, r, e]), Ra(function() {
            return $t(o) && a({
                inst: o
            }), t(function() {
                $t(o) && a({
                    inst: o
                })
            })
        }, [t]), Na(r), r
    }

    function $t(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var r = e();
            return !xa(t, r)
        } catch (n) {
            return !0
        }
    }

    function Ia(t, e) {
        return e()
    }
    var Ma = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Ia : Oa;
    Nn.useSyncExternalStore = Te.useSyncExternalStore !== void 0 ? Te.useSyncExternalStore : Ma
});
var Mn = Ie((es, In) => {
    "use strict";
    In.exports = On()
});
var Dn = Ie(kn => {
    "use strict";
    var rt = re(),
        ka = Mn();

    function Da(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var La = typeof Object.is == "function" ? Object.is : Da,
        Pa = ka.useSyncExternalStore,
        Ua = rt.useRef,
        Fa = rt.useEffect,
        Ha = rt.useMemo,
        Ba = rt.useDebugValue;
    kn.useSyncExternalStoreWithSelector = function(t, e, r, n, o) {
        var a = Ua(null);
        if (a.current === null) {
            var s = {
                hasValue: !1,
                value: null
            };
            a.current = s
        } else s = a.current;
        a = Ha(function() {
            function v(_) {
                if (!u) {
                    if (u = !0, d = _, _ = n(_), o !== void 0 && s.hasValue) {
                        var C = s.value;
                        if (o(C, _)) return A = C
                    }
                    return A = _
                }
                if (C = A, La(d, _)) return C;
                var E = n(_);
                return o !== void 0 && o(C, E) ? (d = _, C) : (d = _, A = E)
            }
            var u = !1,
                d, A, x = r === void 0 ? null : r;
            return [function() {
                return v(e())
            }, x === null ? void 0 : function() {
                return v(x())
            }]
        }, [e, r, n, o]);
        var c = Pa(t, a[0], a[1]);
        return Fa(function() {
            s.hasValue = !0, s.value = c
        }, [c]), Ba(c), c
    }
});
var Pn = Ie((rs, Ln) => {
    "use strict";
    Ln.exports = Dn()
});
var jn = Ie((Xt, Yt) => {
    (function(t, e) {
        typeof Xt == "object" && typeof Yt < "u" ? Yt.exports = e() : (t = typeof globalThis < "u" ? globalThis : t || self, t.DOMPurify = e())
    })(Xt, function() {
        "use strict";

        function t(p) {
            "@babel/helpers - typeof";
            return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
                return typeof m
            } : function(m) {
                return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m
            }, t(p)
        }

        function e(p, m) {
            return e = Object.setPrototypeOf || function(S, N) {
                return S.__proto__ = N, S
            }, e(p, m)
        }

        function r() {
            if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
            if (typeof Proxy == "function") return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (p) {
                return !1
            }
        }

        function n(p, m, y) {
            return r() ? n = Reflect.construct : n = function(N, z, B) {
                var q = [null];
                q.push.apply(q, z);
                var ae = Function.bind.apply(N, q),
                    Re = new ae;
                return B && e(Re, B.prototype), Re
            }, n.apply(null, arguments)
        }

        function o(p) {
            return a(p) || s(p) || c(p) || u()
        }

        function a(p) {
            if (Array.isArray(p)) return v(p)
        }

        function s(p) {
            if (typeof Symbol < "u" && p[Symbol.iterator] != null || p["@@iterator"] != null) return Array.from(p)
        }

        function c(p, m) {
            if (p) {
                if (typeof p == "string") return v(p, m);
                var y = Object.prototype.toString.call(p).slice(8, -1);
                if (y === "Object" && p.constructor && (y = p.constructor.name), y === "Map" || y === "Set") return Array.from(p);
                if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return v(p, m)
            }
        }

        function v(p, m) {
            (m == null || m > p.length) && (m = p.length);
            for (var y = 0, S = new Array(m); y < m; y++) S[y] = p[y];
            return S
        }

        function u() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
        }
        var d = Object.hasOwnProperty,
            A = Object.setPrototypeOf,
            x = Object.isFrozen,
            _ = Object.getPrototypeOf,
            C = Object.getOwnPropertyDescriptor,
            E = Object.freeze,
            w = Object.seal,
            J = Object.create,
            ee = typeof Reflect < "u" && Reflect,
            te = ee.apply,
            xe = ee.construct;
        te || (te = function(m, y, S) {
            return m.apply(y, S)
        }), E || (E = function(m) {
            return m
        }), w || (w = function(m) {
            return m
        }), xe || (xe = function(m, y) {
            return n(m, o(y))
        });
        var nt = G(Array.prototype.forEach),
            de = G(Array.prototype.pop),
            we = G(Array.prototype.push),
            Pe = G(String.prototype.toLowerCase),
            ot = G(String.prototype.toString),
            Kt = G(String.prototype.match),
            j = G(String.prototype.replace),
            eo = G(String.prototype.indexOf),
            to = G(String.prototype.trim),
            L = G(RegExp.prototype.test),
            at = ro(TypeError);

        function G(p) {
            return function(m) {
                for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), N = 1; N < y; N++) S[N - 1] = arguments[N];
                return te(p, m, S)
            }
        }

        function ro(p) {
            return function() {
                for (var m = arguments.length, y = new Array(m), S = 0; S < m; S++) y[S] = arguments[S];
                return xe(p, y)
            }
        }

        function b(p, m, y) {
            var S;
            y = (S = y) !== null && S !== void 0 ? S : Pe, A && A(p, null);
            for (var N = m.length; N--;) {
                var z = m[N];
                if (typeof z == "string") {
                    var B = y(z);
                    B !== z && (x(m) || (m[N] = B), z = B)
                }
                p[z] = !0
            }
            return p
        }

        function oe(p) {
            var m = J(null),
                y;
            for (y in p) te(d, p, [y]) === !0 && (m[y] = p[y]);
            return m
        }

        function Ue(p, m) {
            for (; p !== null;) {
                var y = C(p, m);
                if (y) {
                    if (y.get) return G(y.get);
                    if (typeof y.value == "function") return G(y.value)
                }
                p = _(p)
            }

            function S(N) {
                return console.warn("fallback value for", N), null
            }
            return S
        }
        var Zt = E(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            it = E(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            st = E(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            no = E(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            ct = E(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            oo = E(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            Qt = E(["#text"]),
            Jt = E(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
            lt = E(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            er = E(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            Fe = E(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            ao = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            io = w(/<%[\w\W]*|[\w\W]*%>/gm),
            so = w(/\${[\w\W]*}/gm),
            co = w(/^data-[\-\w.\u00B7-\uFFFF]/),
            lo = w(/^aria-[\-\w]+$/),
            uo = w(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            fo = w(/^(?:\w+script|data):/i),
            po = w(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            mo = w(/^html$/i),
            ho = w(/^[a-z][.\w]*(-[.\w]+)+$/i),
            vo = function() {
                return typeof window > "u" ? null : window
            },
            go = function(m, y) {
                if (t(m) !== "object" || typeof m.createPolicy != "function") return null;
                var S = null,
                    N = "data-tt-policy-suffix";
                y.currentScript && y.currentScript.hasAttribute(N) && (S = y.currentScript.getAttribute(N));
                var z = "dompurify" + (S ? "#" + S : "");
                try {
                    return m.createPolicy(z, {
                        createHTML: function(q) {
                            return q
                        },
                        createScriptURL: function(q) {
                            return q
                        }
                    })
                } catch (B) {
                    return console.warn("TrustedTypes policy " + z + " could not be created."), null
                }
            };

        function tr() {
            var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vo(),
                m = function(i) {
                    return tr(i)
                };
            if (m.version = "2.5.7", m.removed = [], !p || !p.document || p.document.nodeType !== 9) return m.isSupported = !1, m;
            var y = p.document,
                S = p.document,
                N = p.DocumentFragment,
                z = p.HTMLTemplateElement,
                B = p.Node,
                q = p.Element,
                ae = p.NodeFilter,
                Re = p.NamedNodeMap,
                bo = Re === void 0 ? p.NamedNodeMap || p.MozNamedAttrMap : Re,
                So = p.HTMLFormElement,
                Eo = p.DOMParser,
                He = p.trustedTypes,
                Be = q.prototype,
                To = Ue(Be, "cloneNode"),
                Ao = Ue(Be, "nextSibling"),
                _o = Ue(Be, "childNodes"),
                ut = Ue(Be, "parentNode");
            if (typeof z == "function") {
                var dt = S.createElement("template");
                dt.content && dt.content.ownerDocument && (S = dt.content.ownerDocument)
            }
            var $ = go(He, y),
                ft = $ ? $.createHTML("") : "",
                Ge = S,
                pt = Ge.implementation,
                xo = Ge.createNodeIterator,
                wo = Ge.createDocumentFragment,
                Ro = Ge.getElementsByTagName,
                Co = y.importNode,
                rr = {};
            try {
                rr = oe(S).documentMode ? S.documentMode : {}
            } catch (g) {}
            var X = {};
            m.isSupported = typeof ut == "function" && pt && pt.createHTMLDocument !== void 0 && rr !== 9;
            var mt = ao,
                ht = io,
                vt = so,
                No = co,
                Oo = lo,
                Io = fo,
                nr = po,
                Mo = ho,
                gt = uo,
                M = null,
                or = b({}, [].concat(o(Zt), o(it), o(st), o(ct), o(Qt))),
                k = null,
                ar = b({}, [].concat(o(Jt), o(lt), o(er), o(Fe))),
                R = Object.seal(Object.create(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                })),
                Ce = null,
                yt = null,
                ir = !0,
                bt = !0,
                sr = !1,
                cr = !0,
                fe = !1,
                St = !0,
                ie = !1,
                Et = !1,
                Tt = !1,
                pe = !1,
                ze = !1,
                We = !1,
                lr = !0,
                ur = !1,
                ko = "user-content-",
                At = !0,
                Ne = !1,
                me = {},
                he = null,
                dr = b({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                fr = null,
                pr = b({}, ["audio", "video", "img", "source", "image", "track"]),
                _t = null,
                mr = b({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                je = "http://www.w3.org/1998/Math/MathML",
                $e = "http://www.w3.org/2000/svg",
                K = "http://www.w3.org/1999/xhtml",
                ve = K,
                xt = !1,
                wt = null,
                Do = b({}, [je, $e, K], ot),
                se, Lo = ["application/xhtml+xml", "text/html"],
                Po = "text/html",
                D, ge = null,
                Uo = S.createElement("form"),
                hr = function(i) {
                    return i instanceof RegExp || i instanceof Function
                },
                Rt = function(i) {
                    ge && ge === i || ((!i || t(i) !== "object") && (i = {}), i = oe(i), se = Lo.indexOf(i.PARSER_MEDIA_TYPE) === -1 ? se = Po : se = i.PARSER_MEDIA_TYPE, D = se === "application/xhtml+xml" ? ot : Pe, M = "ALLOWED_TAGS" in i ? b({}, i.ALLOWED_TAGS, D) : or, k = "ALLOWED_ATTR" in i ? b({}, i.ALLOWED_ATTR, D) : ar, wt = "ALLOWED_NAMESPACES" in i ? b({}, i.ALLOWED_NAMESPACES, ot) : Do, _t = "ADD_URI_SAFE_ATTR" in i ? b(oe(mr), i.ADD_URI_SAFE_ATTR, D) : mr, fr = "ADD_DATA_URI_TAGS" in i ? b(oe(pr), i.ADD_DATA_URI_TAGS, D) : pr, he = "FORBID_CONTENTS" in i ? b({}, i.FORBID_CONTENTS, D) : dr, Ce = "FORBID_TAGS" in i ? b({}, i.FORBID_TAGS, D) : {}, yt = "FORBID_ATTR" in i ? b({}, i.FORBID_ATTR, D) : {}, me = "USE_PROFILES" in i ? i.USE_PROFILES : !1, ir = i.ALLOW_ARIA_ATTR !== !1, bt = i.ALLOW_DATA_ATTR !== !1, sr = i.ALLOW_UNKNOWN_PROTOCOLS || !1, cr = i.ALLOW_SELF_CLOSE_IN_ATTR !== !1, fe = i.SAFE_FOR_TEMPLATES || !1, St = i.SAFE_FOR_XML !== !1, ie = i.WHOLE_DOCUMENT || !1, pe = i.RETURN_DOM || !1, ze = i.RETURN_DOM_FRAGMENT || !1, We = i.RETURN_TRUSTED_TYPE || !1, Tt = i.FORCE_BODY || !1, lr = i.SANITIZE_DOM !== !1, ur = i.SANITIZE_NAMED_PROPS || !1, At = i.KEEP_CONTENT !== !1, Ne = i.IN_PLACE || !1, gt = i.ALLOWED_URI_REGEXP || gt, ve = i.NAMESPACE || K, R = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && hr(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (R.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && hr(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (R.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), fe && (bt = !1), ze && (pe = !0), me && (M = b({}, o(Qt)), k = [], me.html === !0 && (b(M, Zt), b(k, Jt)), me.svg === !0 && (b(M, it), b(k, lt), b(k, Fe)), me.svgFilters === !0 && (b(M, st), b(k, lt), b(k, Fe)), me.mathMl === !0 && (b(M, ct), b(k, er), b(k, Fe))), i.ADD_TAGS && (M === or && (M = oe(M)), b(M, i.ADD_TAGS, D)), i.ADD_ATTR && (k === ar && (k = oe(k)), b(k, i.ADD_ATTR, D)), i.ADD_URI_SAFE_ATTR && b(_t, i.ADD_URI_SAFE_ATTR, D), i.FORBID_CONTENTS && (he === dr && (he = oe(he)), b(he, i.FORBID_CONTENTS, D)), At && (M["#text"] = !0), ie && b(M, ["html", "head", "body"]), M.table && (b(M, ["tbody"]), delete Ce.tbody), E && E(i), ge = i)
                },
                vr = b({}, ["mi", "mo", "mn", "ms", "mtext"]),
                gr = b({}, ["annotation-xml"]),
                Fo = b({}, ["title", "style", "font", "a", "script"]),
                qe = b({}, it);
            b(qe, st), b(qe, no);
            var Ct = b({}, ct);
            b(Ct, oo);
            var Ho = function(i) {
                    var l = ut(i);
                    (!l || !l.tagName) && (l = {
                        namespaceURI: ve,
                        tagName: "template"
                    });
                    var f = Pe(i.tagName),
                        T = Pe(l.tagName);
                    return wt[i.namespaceURI] ? i.namespaceURI === $e ? l.namespaceURI === K ? f === "svg" : l.namespaceURI === je ? f === "svg" && (T === "annotation-xml" || vr[T]) : !!qe[f] : i.namespaceURI === je ? l.namespaceURI === K ? f === "math" : l.namespaceURI === $e ? f === "math" && gr[T] : !!Ct[f] : i.namespaceURI === K ? l.namespaceURI === $e && !gr[T] || l.namespaceURI === je && !vr[T] ? !1 : !Ct[f] && (Fo[f] || !qe[f]) : !!(se === "application/xhtml+xml" && wt[i.namespaceURI]) : !1
                },
                W = function(i) {
                    we(m.removed, {
                        element: i
                    });
                    try {
                        i.parentNode.removeChild(i)
                    } catch (l) {
                        try {
                            i.outerHTML = ft
                        } catch (f) {
                            i.remove()
                        }
                    }
                },
                Xe = function(i, l) {
                    try {
                        we(m.removed, {
                            attribute: l.getAttributeNode(i),
                            from: l
                        })
                    } catch (f) {
                        we(m.removed, {
                            attribute: null,
                            from: l
                        })
                    }
                    if (l.removeAttribute(i), i === "is" && !k[i])
                        if (pe || ze) try {
                            W(l)
                        } catch (f) {} else try {
                            l.setAttribute(i, "")
                        } catch (f) {}
                },
                yr = function(i) {
                    var l, f;
                    if (Tt) i = "<remove></remove>" + i;
                    else {
                        var T = Kt(i, /^[\r\n\t ]+/);
                        f = T && T[0]
                    }
                    se === "application/xhtml+xml" && ve === K && (i = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + i + "</body></html>");
                    var H = $ ? $.createHTML(i) : i;
                    if (ve === K) try {
                        l = new Eo().parseFromString(H, se)
                    } catch (P) {}
                    if (!l || !l.documentElement) {
                        l = pt.createDocument(ve, "template", null);
                        try {
                            l.documentElement.innerHTML = xt ? ft : H
                        } catch (P) {}
                    }
                    var F = l.body || l.documentElement;
                    return i && f && F.insertBefore(S.createTextNode(f), F.childNodes[0] || null), ve === K ? Ro.call(l, ie ? "html" : "body")[0] : ie ? l.documentElement : F
                },
                br = function(i) {
                    return xo.call(i.ownerDocument || i, i, ae.SHOW_ELEMENT | ae.SHOW_COMMENT | ae.SHOW_TEXT | ae.SHOW_PROCESSING_INSTRUCTION | ae.SHOW_CDATA_SECTION, null, !1)
                },
                Sr = function(i) {
                    return i instanceof So && (typeof i.nodeName != "string" || typeof i.textContent != "string" || typeof i.removeChild != "function" || !(i.attributes instanceof bo) || typeof i.removeAttribute != "function" || typeof i.setAttribute != "function" || typeof i.namespaceURI != "string" || typeof i.insertBefore != "function" || typeof i.hasChildNodes != "function")
                },
                Oe = function(i) {
                    return t(B) === "object" ? i instanceof B : i && t(i) === "object" && typeof i.nodeType == "number" && typeof i.nodeName == "string"
                },
                Z = function(i, l, f) {
                    X[i] && nt(X[i], function(T) {
                        T.call(m, l, f, ge)
                    })
                },
                Er = function(i) {
                    var l;
                    if (Z("beforeSanitizeElements", i, null), Sr(i) || L(/[\u0080-\uFFFF]/, i.nodeName)) return W(i), !0;
                    var f = D(i.nodeName);
                    if (Z("uponSanitizeElement", i, {
                            tagName: f,
                            allowedTags: M
                        }), i.hasChildNodes() && !Oe(i.firstElementChild) && (!Oe(i.content) || !Oe(i.content.firstElementChild)) && L(/<[/\w]/g, i.innerHTML) && L(/<[/\w]/g, i.textContent) || f === "select" && L(/<template/i, i.innerHTML) || i.nodeType === 7 || St && i.nodeType === 8 && L(/<[/\w]/g, i.data)) return W(i), !0;
                    if (!M[f] || Ce[f]) {
                        if (!Ce[f] && Ar(f) && (R.tagNameCheck instanceof RegExp && L(R.tagNameCheck, f) || R.tagNameCheck instanceof Function && R.tagNameCheck(f))) return !1;
                        if (At && !he[f]) {
                            var T = ut(i) || i.parentNode,
                                H = _o(i) || i.childNodes;
                            if (H && T)
                                for (var F = H.length, P = F - 1; P >= 0; --P) {
                                    var ce = To(H[P], !0);
                                    ce.__removalCount = (i.__removalCount || 0) + 1, T.insertBefore(ce, Ao(i))
                                }
                        }
                        return W(i), !0
                    }
                    return i instanceof q && !Ho(i) || (f === "noscript" || f === "noembed" || f === "noframes") && L(/<\/no(script|embed|frames)/i, i.innerHTML) ? (W(i), !0) : (fe && i.nodeType === 3 && (l = i.textContent, l = j(l, mt, " "), l = j(l, ht, " "), l = j(l, vt, " "), i.textContent !== l && (we(m.removed, {
                        element: i.cloneNode()
                    }), i.textContent = l)), Z("afterSanitizeElements", i, null), !1)
                },
                Tr = function(i, l, f) {
                    if (lr && (l === "id" || l === "name") && (f in S || f in Uo)) return !1;
                    if (!(bt && !yt[l] && L(No, l))) {
                        if (!(ir && L(Oo, l))) {
                            if (!k[l] || yt[l]) {
                                if (!(Ar(i) && (R.tagNameCheck instanceof RegExp && L(R.tagNameCheck, i) || R.tagNameCheck instanceof Function && R.tagNameCheck(i)) && (R.attributeNameCheck instanceof RegExp && L(R.attributeNameCheck, l) || R.attributeNameCheck instanceof Function && R.attributeNameCheck(l)) || l === "is" && R.allowCustomizedBuiltInElements && (R.tagNameCheck instanceof RegExp && L(R.tagNameCheck, f) || R.tagNameCheck instanceof Function && R.tagNameCheck(f)))) return !1
                            } else if (!_t[l]) {
                                if (!L(gt, j(f, nr, ""))) {
                                    if (!((l === "src" || l === "xlink:href" || l === "href") && i !== "script" && eo(f, "data:") === 0 && fr[i])) {
                                        if (!(sr && !L(Io, j(f, nr, "")))) {
                                            if (f) return !1
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return !0
                },
                Ar = function(i) {
                    return i !== "annotation-xml" && Kt(i, Mo)
                },
                _r = function(i) {
                    var l, f, T, H;
                    Z("beforeSanitizeAttributes", i, null);
                    var F = i.attributes;
                    if (F) {
                        var P = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: k
                        };
                        for (H = F.length; H--;) {
                            l = F[H];
                            var ce = l,
                                I = ce.name,
                                Nt = ce.namespaceURI;
                            if (f = I === "value" ? l.value : to(l.value), T = D(I), P.attrName = T, P.attrValue = f, P.keepAttr = !0, P.forceKeepAttr = void 0, Z("uponSanitizeAttribute", i, P), f = P.attrValue, !P.forceKeepAttr && (Xe(I, i), !!P.keepAttr)) {
                                if (!cr && L(/\/>/i, f)) {
                                    Xe(I, i);
                                    continue
                                }
                                fe && (f = j(f, mt, " "), f = j(f, ht, " "), f = j(f, vt, " "));
                                var xr = D(i.nodeName);
                                if (Tr(xr, T, f)) {
                                    if (ur && (T === "id" || T === "name") && (Xe(I, i), f = ko + f), St && L(/((--!?|])>)|<\/(style|title)/i, f)) {
                                        Xe(I, i);
                                        continue
                                    }
                                    if ($ && t(He) === "object" && typeof He.getAttributeType == "function" && !Nt) switch (He.getAttributeType(xr, T)) {
                                        case "TrustedHTML":
                                            {
                                                f = $.createHTML(f);
                                                break
                                            }
                                        case "TrustedScriptURL":
                                            {
                                                f = $.createScriptURL(f);
                                                break
                                            }
                                    }
                                    try {
                                        Nt ? i.setAttributeNS(Nt, I, f) : i.setAttribute(I, f), Sr(i) ? W(i) : de(m.removed)
                                    } catch (ni) {}
                                }
                            }
                        }
                        Z("afterSanitizeAttributes", i, null)
                    }
                },
                Bo = function g(i) {
                    var l, f = br(i);
                    for (Z("beforeSanitizeShadowDOM", i, null); l = f.nextNode();) Z("uponSanitizeShadowNode", l, null), !Er(l) && (l.content instanceof N && g(l.content), _r(l));
                    Z("afterSanitizeShadowDOM", i, null)
                };
            return m.sanitize = function(g) {
                var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    l, f, T, H, F;
                if (xt = !g, xt && (g = "<!-->"), typeof g != "string" && !Oe(g))
                    if (typeof g.toString == "function") {
                        if (g = g.toString(), typeof g != "string") throw at("dirty is not a string, aborting")
                    } else throw at("toString is not a function");
                if (!m.isSupported) {
                    if (t(p.toStaticHTML) === "object" || typeof p.toStaticHTML == "function") {
                        if (typeof g == "string") return p.toStaticHTML(g);
                        if (Oe(g)) return p.toStaticHTML(g.outerHTML)
                    }
                    return g
                }
                if (Et || Rt(i), m.removed = [], typeof g == "string" && (Ne = !1), Ne) {
                    if (g.nodeName) {
                        var P = D(g.nodeName);
                        if (!M[P] || Ce[P]) throw at("root node is forbidden and cannot be sanitized in-place")
                    }
                } else if (g instanceof B) l = yr("<!---->"), f = l.ownerDocument.importNode(g, !0), f.nodeType === 1 && f.nodeName === "BODY" || f.nodeName === "HTML" ? l = f : l.appendChild(f);
                else {
                    if (!pe && !fe && !ie && g.indexOf("<") === -1) return $ && We ? $.createHTML(g) : g;
                    if (l = yr(g), !l) return pe ? null : We ? ft : ""
                }
                l && Tt && W(l.firstChild);
                for (var ce = br(Ne ? g : l); T = ce.nextNode();) T.nodeType === 3 && T === H || Er(T) || (T.content instanceof N && Bo(T.content), _r(T), H = T);
                if (H = null, Ne) return g;
                if (pe) {
                    if (ze)
                        for (F = wo.call(l.ownerDocument); l.firstChild;) F.appendChild(l.firstChild);
                    else F = l;
                    return (k.shadowroot || k.shadowrootmod) && (F = Co.call(y, F, !0)), F
                }
                var I = ie ? l.outerHTML : l.innerHTML;
                return ie && M["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && L(mo, l.ownerDocument.doctype.name) && (I = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + I), fe && (I = j(I, mt, " "), I = j(I, ht, " "), I = j(I, vt, " ")), $ && We ? $.createHTML(I) : I
            }, m.setConfig = function(g) {
                Rt(g), Et = !0
            }, m.clearConfig = function() {
                ge = null, Et = !1
            }, m.isValidAttribute = function(g, i, l) {
                ge || Rt({});
                var f = D(g),
                    T = D(i);
                return Tr(f, T, l)
            }, m.addHook = function(g, i) {
                typeof i == "function" && (X[g] = X[g] || [], we(X[g], i))
            }, m.removeHook = function(g) {
                if (X[g]) return de(X[g])
            }, m.removeHooks = function(g) {
                X[g] && (X[g] = [])
            }, m.removeAllHooks = function() {
                X = {}
            }, m
        }
        var yo = tr();
        return yo
    })
});
var Mt = (t, e) => {
    var o, a;
    let r = t.filter(({
            product: s
        }) => s === e),
        n = (o = r.find(({
            isDefault: s,
            platform: c
        }) => s && (c == null ? void 0 : c.type) === "web")) == null ? void 0 : o.theme;
    return n || ((a = r.find(({
        isDefault: s,
        platform: c
    }) => s && !c)) == null ? void 0 : a.theme)
};
var kt = {
    darkMode: {
        varDefaults: {
            "--base-accent": "rgb(120, 86, 255)",
            "--base-white": "rgb(255, 255, 255)",
            "--base-black": "rgb(0, 0, 0)",
            "--font-font-family": 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            "--font-weight-regular": 400,
            "--font-weight-medium": 500,
            "--font-weight-semibold": 600,
            "--font-weight-bold": 700,
            "--font-size-small": "12px",
            "--font-size-base": "14px",
            "--font-size-large": "16px",
            "--font-size-extra-large": "22px",
            "--font-line-height-none": "1",
            "--font-line-height-tight": "1.2",
            "--font-line-height-snug": "1.375",
            "--font-line-height-normal": "1.5",
            "--content-primary": "rgb(255, 255, 255)",
            "--content-secondary": "rgb(167, 167, 167)",
            "--content-disabled": "rgb(86, 86, 86)",
            "--content-primary-hover": "var(--content-primary)",
            "--content-secondary-hover": "var(--content-secondary)",
            "--content-link": "var(--base-accent)",
            "--content-link-hover": "color-mix(in srgb, var(--content-link) 80%, white)",
            "--content-link-visited": "color-mix(in srgb, var(--content-link) 80%, black)",
            "--border-primary": "rgb(59, 59, 59)",
            "--border-primary-hover": "rgb(71, 71, 71)",
            "--border-primary-disabled": "rgb(54, 54, 54)",
            "--background-primary": "rgb(30, 30, 30)",
            "--background-primary-hover": "rgb(43, 43, 43)",
            "--background-secondary": "rgb(15, 15, 15)",
            "--background-secondary-hover": "rgb(28, 28, 28)",
            "--background-disabled": "var(--background-secondary)",
            "--background-overlay": "rgba(0, 0, 0, 0.1)",
            "--header-height": "40px",
            "--header-icon-size": "16px",
            "--chat-send-icon-size": "16px",
            "--height-small": "16px",
            "--form-control-height": "32px",
            "--form-control-width": "100%",
            "--form-control-padding-x": "8px",
            "--form-control-gap": "8px",
            "--form-control-active-background": "rgb(from var(--base-accent) r g b / .10)",
            "--form-control-focus-ring-color": "rgb(from var(--base-accent) r g b / .24)",
            "--form-control-focus-ring-width": "3px",
            "--layout-radius-button": "6px",
            "--layout-radius-card": "8px",
            "--layout-radius-circle": "100px",
            "--layout-padding": "12px",
            "--layout-gap": "8px",
            "--layout-shadow": "0px 4px 16px 0px",
            "--layout-shadow-color": "rgba(0, 0, 0, 0.08)",
            "--form-control-shadow": "none",
            "--form-control-shadow-color": "rgba(0, 0, 0, 0)",
            "--form-control-background": "var(--background-primary)",
            "--form-control-background-hover": "var(--background-primary-hover)",
            "--form-control-background-disabled": "var(--background-secondary)",
            "--form-control-border-color": "var(--border-primary)",
            "--form-control-border-color-hover": "var(--border-primary-hover)",
            "--form-control-border-color-disabled": "var(--border-primary-disabled)",
            "--tooltip-max-width": "300px",
            "--popover-width": "300px",
            "--modal-width": "360px",
            "--checklist-width": "360px",
            "--checklist-max-height": "500px",
            "--helphub-width": "440px",
            "--helphub-height": "700px",
            "--button-primary-background": "var(--base-accent)",
            "--button-primary-background-hover": "color-mix(in srgb, var(--base-accent) 80%, white)",
            "--button-primary-border-color": "var(--button-primary-background)",
            "--button-primary-border-color-hover": "var(--button-primary-background-hover)",
            "--button-primary-content": "rgb(255, 255, 255)",
            "--button-primary-content-hover": "rgb(255, 255, 255)",
            "--button-secondary-background": "var(--background-primary)",
            "--button-secondary-background-hover": "var(--background-primary-hover)",
            "--button-secondary-border-color": "var(--border-primary)",
            "--button-secondary-border-color-hover": "var(--border-primary-hover)",
            "--button-secondary-content": "var(--content-secondary)",
            "--button-secondary-content-hover": "var(--content-primary)",
            "--button-tertiary-background": "rgba(255, 255, 255, 0)",
            "--button-tertiary-background-hover": "var(--background-primary-hover)",
            "--button-tertiary-border-color": "rgba(255, 255, 255, 0)",
            "--button-tertiary-border-color-hover": "rgba(255, 255, 255, 0)",
            "--button-tertiary-content": "var(--content-secondary)",
            "--button-tertiary-content-hover": "var(--content-primary)",
            "--resource-center-launcher-height": "40px",
            "--resource-center-launcher-width": "40px",
            "--nudge-rating-star-color": "rgb(221, 158, 35)",
            "--nudge-rating-star-color-selected": "var(--nudge-rating-star-color)",
            "--highlight-color": "rgb(240, 233, 187)",
            "--tooltip-icon-color": "var(--content-primary)",
            "--anim-transition-duration": "260ms",
            "--anim-transform-initial--spring": "scale(.85)",
            "--anim-transform-animated--spring": "scale(1)",
            "--anim-transform-initial--scale": "scale(0.85)",
            "--anim-transform-animated--scale": "scale(1)",
            "--anim-transition-property--instant": "none",
            "--anim-transition-property--fade": "opacity",
            "--anim-transition-property--spring": "opacity, transform",
            "--anim-transition-property--scale": "opacity, transform",
            "--anim-transition-timing--instant": "none",
            "--anim-transition-timing--fade": "ease-in-out",
            "--anim-transition-timing--spring": "cubic-bezier(0.33, 1.56, 0.60, 1)",
            "--anim-transition-timing--scale": "cubic-bezier(0.33, 1.25, 0.65, 1)",
            "--modal-anim-transition-property": "var(--anim-transition-property--instant)",
            "--modal-anim-transition-duration": "var(--anim-transition-duration)",
            "--modal-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--popover-anim-transition-property": "var(--anim-transition-property--instant)",
            "--popover-anim-transition-duration": "var(--anim-transition-duration)",
            "--popover-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--tooltip-anim-transition-property": "var(--anim-transition-property--instant)",
            "--tooltip-anim-transition-duration": "var(--anim-transition-duration)",
            "--tooltip-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--card-anim-transition-property": "var(--anim-transition-property--instant)",
            "--card-anim-transition-duration": "var(--anim-transition-duration)",
            "--card-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--helphub-anim-transition-property": "var(--anim-transition-property--instant)",
            "--helphub-anim-transition-duration": "var(--anim-transition-duration)",
            "--helphub-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--checklist-anim-transition-property": "var(--anim-transition-property--instant)",
            "--checklist-anim-transition-duration": "var(--anim-transition-duration)",
            "--checklist-anim-transition-timing": "var(--anim-transition-timing--instant)"
        },
        varOverrides: {},
        componentOverrides: {},
        mobileOverrides: {}
    },
    lightMode: {
        varDefaults: {
            "--base-accent": "rgb(120, 86, 255)",
            "--base-black": "rgb(0, 0, 0)",
            "--base-white": "rgb(255, 255, 255)",
            "--font-font-family": 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            "--font-weight-regular": 400,
            "--font-weight-medium": 500,
            "--font-weight-semibold": 600,
            "--font-weight-bold": 700,
            "--font-size-small": "12px",
            "--font-size-base": "14px",
            "--font-size-large": "16px",
            "--font-size-extra-large": "22px",
            "--font-line-height-none": "1",
            "--font-line-height-tight": "1.2",
            "--font-line-height-snug": "1.375",
            "--font-line-height-normal": "1.5",
            "--content-primary": "rgb(55, 53, 48)",
            "--content-secondary": "rgb(112, 111, 108)",
            "--content-disabled": "rgb(192, 192, 192)",
            "--content-primary-hover": "var(--content-primary)",
            "--content-secondary-hover": "var(--content-secondary)",
            "--content-link": "var(--base-accent)",
            "--content-link-hover": "color-mix(in srgb, var(--content-link) 80%, white)",
            "--content-link-visited": "color-mix(in srgb, var(--content-link) 80%, black)",
            "--border-primary": "rgb(226, 226, 226)",
            "--border-primary-hover": "rgb(201, 201, 201)",
            "--border-primary-disabled": "rgb(232, 232, 232)",
            "--background-primary": "rgb(255, 255, 255)",
            "--background-primary-hover": "rgb(242, 242, 242)",
            "--background-secondary": "rgb(247, 247, 247)",
            "--background-secondary-hover": "rgb(235, 235, 235)",
            "--background-disabled": "var(--background-secondary)",
            "--background-overlay": "rgba(0, 0, 0, 0.1)",
            "--header-height": "40px",
            "--header-icon-size": "16px",
            "--chat-send-icon-size": "16px",
            "--height-small": "16px",
            "--form-control-height": "32px",
            "--form-control-width": "100%",
            "--form-control-padding-x": "8px",
            "--form-control-gap": "8px",
            "--form-control-active-background": "rgb(from var(--base-accent) r g b / .10)",
            "--form-control-focus-ring-color": "rgb(from var(--base-accent) r g b / .24)",
            "--form-control-focus-ring-width": "3px",
            "--layout-radius-button": "6px",
            "--layout-radius-card": "8px",
            "--layout-radius-circle": "100px",
            "--layout-padding": "12px",
            "--layout-gap": "8px",
            "--layout-shadow": "0px 4px 16px 0px",
            "--layout-shadow-color": "rgba(0, 0, 0, 0.08)",
            "--form-control-shadow": "none",
            "--form-control-shadow-color": "rgba(0, 0, 0, 0)",
            "--form-control-background": "var(--background-primary)",
            "--form-control-background-hover": "var(--background-primary-hover)",
            "--form-control-background-disabled": "var(--background-secondary)",
            "--form-control-border-color": "var(--border-primary)",
            "--form-control-border-color-hover": "var(--border-primary-hover)",
            "--form-control-border-color-disabled": "var(--border-primary-disabled)",
            "--tooltip-max-width": "300px",
            "--popover-width": "300px",
            "--modal-width": "360px",
            "--checklist-width": "360px",
            "--checklist-max-height": "500px",
            "--helphub-width": "440px",
            "--helphub-height": "700px",
            "--button-primary-background": "var(--base-accent)",
            "--button-primary-background-hover": "color-mix(in srgb, var(--base-accent) 80%, white)",
            "--button-primary-border-color": "var(--button-primary-background)",
            "--button-primary-border-color-hover": "var(--button-primary-background-hover)",
            "--button-primary-content": "rgb(255, 255, 255)",
            "--button-primary-content-hover": "rgb(255, 255, 255)",
            "--button-secondary-background": "var(--background-primary)",
            "--button-secondary-background-hover": "var(--background-primary-hover)",
            "--button-secondary-border-color": "var(--border-primary)",
            "--button-secondary-border-color-hover": "var(--border-primary-hover)",
            "--button-secondary-content": "var(--content-secondary)",
            "--button-secondary-content-hover": "var(--content-primary)",
            "--button-tertiary-background": "rgba(255, 255, 255, 0)",
            "--button-tertiary-background-hover": "var(--background-primary-hover)",
            "--button-tertiary-border-color": "rgba(255, 255, 255, 0)",
            "--button-tertiary-border-color-hover": "rgba(255, 255, 255, 0)",
            "--button-tertiary-content": "var(--content-secondary)",
            "--button-tertiary-content-hover": "var(--content-primary)",
            "--resource-center-launcher-height": "40px",
            "--resource-center-launcher-width": "40px",
            "--nudge-rating-star-color": "rgb(221, 158, 35)",
            "--nudge-rating-star-color-selected": "var(--nudge-rating-star-color)",
            "--highlight-color": "rgb(240, 233, 187)",
            "--tooltip-icon-color": "var(--content-primary)",
            "--anim-transition-duration": "260ms",
            "--anim-transform-initial--spring": "scale(.85)",
            "--anim-transform-animated--spring": "scale(1)",
            "--anim-transform-initial--scale": "scale(0.85)",
            "--anim-transform-animated--scale": "scale(1)",
            "--anim-transition-property--instant": "none",
            "--anim-transition-property--fade": "opacity",
            "--anim-transition-property--spring": "opacity, transform",
            "--anim-transition-property--scale": "opacity, transform",
            "--anim-transition-timing--instant": "none",
            "--anim-transition-timing--fade": "ease-in-out",
            "--anim-transition-timing--spring": "cubic-bezier(0.33, 1.56, 0.60, 1)",
            "--anim-transition-timing--scale": "cubic-bezier(0.33, 1.25, 0.65, 1)",
            "--modal-anim-transition-property": "var(--anim-transition-property--instant)",
            "--modal-anim-transition-duration": "var(--anim-transition-duration)",
            "--modal-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--popover-anim-transition-property": "var(--anim-transition-property--instant)",
            "--popover-anim-transition-duration": "var(--anim-transition-duration)",
            "--popover-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--tooltip-anim-transition-property": "var(--anim-transition-property--instant)",
            "--tooltip-anim-transition-duration": "var(--anim-transition-duration)",
            "--tooltip-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--card-anim-transition-property": "var(--anim-transition-property--instant)",
            "--card-anim-transition-duration": "var(--anim-transition-duration)",
            "--card-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--helphub-anim-transition-property": "var(--anim-transition-property--instant)",
            "--helphub-anim-transition-duration": "var(--anim-transition-duration)",
            "--helphub-anim-transition-timing": "var(--anim-transition-timing--instant)",
            "--checklist-anim-transition-property": "var(--anim-transition-property--instant)",
            "--checklist-anim-transition-duration": "var(--anim-transition-duration)",
            "--checklist-anim-transition-timing": "var(--anim-transition-timing--instant)"
        },
        varOverrides: {},
        componentOverrides: {},
        mobileOverrides: {}
    }
};
var O = Q(re());
var Yr = Q(re());
var jr = ":is(#engagement-wrapper, .engagement-card-portal-container)",
    $r = t => {
        t.type === "rule" && (Array.isArray(t.props) ? t.props = t.props.map(e => e != null && e.includes(".") ? `${jr} ${e}` : e) : typeof t.props == "string" && t.props.includes(".") && (t.props = `${jr} ${t.props}`))
    },
    zo = [".amplitude-engagement-modal-container", ".amplitude-engagement-popover-container", ".amplitude-engagement-banner-container", ".amplitude-engagement-tooltip-content", ".amplitude-engagement-pin-content", ".engagement-checklist"],
    qr = t => e => {
        if (e.type !== "rule" || !t) return;
        let r = n => {
            if (n != null && n.includes(t)) return n;
            let o = zo.find(a => n.startsWith(a));
            if (o) {
                let a = n.slice(o.length);
                return `${o}.${t}${a}`
            }
            return `.${t} ${n}`
        };
        Array.isArray(e.props) ? e.props = e.props.map(r) : typeof e.props == "string" && (e.props = r(e.props))
    };
var Xr = "data-engagement-custom-css",
    Wo = "data-theme-mode",
    Vr = t => {
        let e = ne(),
            {
                theme: r,
                mode: n
            } = be();
        (0, Yr.useEffect)(() => {
            let o = r == null ? void 0 : r[n].customCss;
            if (!o) return;
            let a = t ? `${t}-${n}` : `global-${n}`,
                s = document.querySelector(`[${Xr}="${a}"]`);
            s && s.remove();
            let c = document.createElement("style");
            c.setAttribute(Xr, a), c.setAttribute(Wo, n);
            let v = () => {
                c.parentNode && c.parentNode.removeChild(c)
            };
            try {
                let u = qr(t || "");
                c.textContent = Nr(Cr(o), Ir([u, $r, Mr, Or]));
                let d = document.getElementById("engagement-wrapper");
                d == null || d.appendChild(c)
            } catch (u) {
                console.warn("[CustomCSSInjector] Error processing custom CSS:", u), v()
            }
            return () => {
                v()
            }
        }, [r, n, t, e.isEditorPreview])
    };
var jo = "engagement-widget-ce80a7eb65",
    Kr = O.default.createContext(void 0),
    be = () => O.default.useContext(Kr),
    $o = ({
        children: t
    }) => {
        let {
            generatedCSSClassname: e
        } = be();
        return Vr(e), O.default.createElement("div", {
            className: e,
            style: {
                display: "contents"
            }
        }, t)
    },
    qo = 0,
    Zr = t => {
        var u, d;
        let e = be(),
            {
                root: r
            } = Dr(),
            {
                isEditorPreview: n
            } = ne(),
            o = (d = (u = t.mode) != null ? u : e.mode) != null ? d : "lightMode",
            {
                theme: a,
                children: s
            } = t,
            c = (0, O.useRef)(null),
            v = c.current;
        return v || (c.current = `${jo}-${qo++}`, v = c.current), (0, O.useEffect)(() => {
            let A = new Set([document, r]),
                x;
            try {
                x = new CSSStyleSheet
            } catch (E) {
                return
            }
            let _ = { ...kt[o].varDefaults,
                ...a == null ? void 0 : a[o].varDefaults,
                ...a == null ? void 0 : a.lightMode.varOverrides,
                ...a == null ? void 0 : a[o].varOverrides
            };
            _["--layout-padding-v2"] != null && (_["--nudge-block-padding"] = "0px", _["--nudge-content-display"] = "flex", _["--nudge-content-gap"] = "var(--layout-gap)");
            let C = Object.entries(_).map(([E, w]) => n && E === "--font-font-family" ? `${E}: ${w}, ${kt.lightMode.varDefaults["--font-font-family"]};` : `${E}: ${w};`).join(`
`);
            return x.insertRule(`.${v} { ${C} }`), A.forEach(E => {
                var w;
                E && (E.adoptedStyleSheets = [...(w = E.adoptedStyleSheets) != null ? w : [], x])
            }), () => {
                A.forEach(E => {
                    var w;
                    E && (E.adoptedStyleSheets = (w = E.adoptedStyleSheets) == null ? void 0 : w.filter(J => J !== x))
                })
            }
        }, [a == null ? void 0 : a[o].varDefaults, a == null ? void 0 : a.lightMode.varOverrides, a == null ? void 0 : a[o].varOverrides, o, r]), O.default.createElement(Kr.Provider, {
            value: {
                theme: a,
                mode: o,
                generatedCSSClassname: v
            }
        }, O.default.createElement($o, null, s))
    },
    gi = t => {
        var a, s, c;
        let e = ne(),
            {
                children: r,
                nudge: n
            } = t;
        if (!n && !((a = e.themeOverride) != null && a.theme)) return O.default.createElement(O.default.Fragment, null, r);
        let o = (s = e.themeOverride) == null ? void 0 : s.theme;
        return (n == null ? void 0 : n.customThemeId) !== void 0 && n.customThemeId !== null && (o = (c = e.themes.find(v => v.id === n.customThemeId)) == null ? void 0 : c.theme), o || (o = Mt(e.themes, "guides-surveys")), o ? O.default.createElement(Zr, {
            theme: o
        }, r) : O.default.createElement(O.default.Fragment, null, r)
    },
    yi = t => {
        var o, a, s;
        let e = ne(),
            {
                children: r
            } = t;
        if (!e.resourceCenter.customTheme && !((o = e.themeOverride) != null && o.theme)) return O.default.createElement(O.default.Fragment, null, r);
        let n = (a = e.themeOverride) == null ? void 0 : a.theme;
        return e.resourceCenter.customTheme !== null && (n = (s = e.themes.find(c => c.id === e.resourceCenter.customTheme)) == null ? void 0 : s.theme), n || (n = Mt(e.themes, "assistant")), n ? O.default.createElement(Zr, {
            theme: n
        }, r) : O.default.createElement(O.default.Fragment, null, r)
    };
var Dt = function(t, e) {
    return Dt = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o])
    }, Dt(t, e)
};

function an(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Dt(t, e);

    function r() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
}
var ue = function() {
    return ue = Object.assign || function(e) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }, ue.apply(this, arguments)
};

function sn(t, e, r, n) {
    function o(a) {
        return a instanceof r ? a : new r(function(s) {
            s(a)
        })
    }
    return new(r || (r = Promise))(function(a, s) {
        function c(d) {
            try {
                u(n.next(d))
            } catch (A) {
                s(A)
            }
        }

        function v(d) {
            try {
                u(n.throw(d))
            } catch (A) {
                s(A)
            }
        }

        function u(d) {
            d.done ? a(d.value) : o(d.value).then(c, v)
        }
        u((n = n.apply(t, e || [])).next())
    })
}

function cn(t, e) {
    var r = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        n, o, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }), s;

    function c(u) {
        return function(d) {
            return v([u, d])
        }
    }

    function v(u) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; s && (s = 0, u[0] && (r = 0)), r;) try {
            if (n = 1, o && (a = u[0] & 2 ? o.return : u[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, u[1])).done) return a;
            switch (o = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
                case 0:
                case 1:
                    a = u;
                    break;
                case 4:
                    return r.label++, {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++, o = u[1], u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = u;
                        break
                    }
                    if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(u);
                        break
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            u = e.call(t, r)
        } catch (d) {
            u = [6, d], o = 0
        } finally {
            n = a = 0
        }
        if (u[0] & 5) throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}

function V(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        r = e && t[e],
        n = 0;
    if (r) return r.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && n >= t.length && (t = void 0), {
                value: t && t[n++],
                done: !t
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Xo(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var n = r.call(t),
        o, a = [],
        s;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(o = n.next()).done;) a.push(o.value)
    } catch (c) {
        s = {
            error: c
        }
    } finally {
        try {
            o && !o.done && (r = n.return) && r.call(n)
        } finally {
            if (s) throw s.error
        }
    }
    return a
}

function Yo(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = e.length, a; n < o; n++)(a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
    return t.concat(a || Array.prototype.slice.call(e))
}
var h = {
        IS: "is",
        IS_NOT: "is not",
        CONTAINS: "contains",
        DOES_NOT_CONTAIN: "does not contain",
        LESS_THAN: "less",
        LESS_THAN_EQUALS: "less or equal",
        GREATER_THAN: "greater",
        GREATER_THAN_EQUALS: "greater or equal",
        VERSION_LESS_THAN: "version less",
        VERSION_LESS_THAN_EQUALS: "version less or equal",
        VERSION_GREATER_THAN: "version greater",
        VERSION_GREATER_THAN_EQUALS: "version greater or equal",
        SET_IS: "set is",
        SET_IS_NOT: "set is not",
        SET_CONTAINS: "set contains",
        SET_DOES_NOT_CONTAIN: "set does not contain",
        SET_CONTAINS_ANY: "set contains any",
        SET_DOES_NOT_CONTAIN_ANY: "set does not contain any",
        REGEX_MATCH: "regex match",
        REGEX_DOES_NOT_MATCH: "regex does not match"
    },
    Vo = function(t) {
        for (var e = [], r = 0, n = 0; n < t.length; n++) {
            var o = t.charCodeAt(n);
            o < 128 ? e[r++] = o : o < 2048 ? (e[r++] = o >> 6 | 192, e[r++] = o & 63 | 128) : (o & 64512) == 55296 && n + 1 < t.length && (t.charCodeAt(n + 1) & 64512) == 56320 ? (o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++n) & 1023), e[r++] = o >> 18 | 240, e[r++] = o >> 12 & 63 | 128, e[r++] = o >> 6 & 63 | 128, e[r++] = o & 63 | 128) : (e[r++] = o >> 12 | 224, e[r++] = o >> 6 & 63 | 128, e[r++] = o & 63 | 128)
        }
        return Uint8Array.from(e)
    },
    Ke = -862048943,
    Ze = 461845907,
    Qe = 15,
    Ko = 13,
    Zo = 5,
    Qo = -430675100,
    Jo = function(t, e) {
        e === void 0 && (e = 0);
        for (var r = Vo(t), n = r.length, o = n >> 2, a = e, s = 0; s < o; s++) {
            var c = s << 2,
                v = ra(r, c);
            a = ea(v, a)
        }
        var u = o << 2,
            d = 0;
        switch (n - u) {
            case 3:
                d ^= r[u + 2] << 16, d ^= r[u + 1] << 8, d ^= r[u], d = Math.imul(d, Ke), d = De(d, Qe), d = Math.imul(d, Ze), a ^= d;
                break;
            case 2:
                d ^= r[u + 1] << 8, d ^= r[u], d = Math.imul(d, Ke), d = De(d, Qe), d = Math.imul(d, Ze), a ^= d;
                break;
            case 1:
                d ^= r[u], d = Math.imul(d, Ke), d = De(d, Qe), d = Math.imul(d, Ze), a ^= d;
                break
        }
        return a ^= n, ta(a) >>> 0
    },
    ea = function(t, e) {
        var r = t,
            n = e;
        return r = Math.imul(r, Ke), r = De(r, Qe), r = Math.imul(r, Ze), n ^= r, n = De(n, Ko), n = Math.imul(n, Zo), n + Qo | 0
    },
    ta = function(t) {
        var e = t;
        return e ^= e >>> 16, e = Math.imul(e, -2048144789), e ^= e >>> 13, e = Math.imul(e, -1028477387), e ^= e >>> 16, e
    },
    De = function(t, e, r) {
        r === void 0 && (r = 32), e > r && (e = e % r);
        var n = 4294967295 << r - e >>> 0,
            o = (t & n) >>> 0 >>> r - e >>> 0;
        return (t << e | o) >>> 0
    },
    ra = function(t, e) {
        e === void 0 && (e = 0);
        var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
        return na(r)
    },
    na = function(t) {
        return (t & -16777216) >>> 24 | (t & 16711680) >>> 8 | (t & 65280) << 8 | (t & 255) << 24
    },
    Qr = function(t, e) {
        var r, n;
        if (!(!e || e.length === 0)) {
            try {
                for (var o = V(e), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value;
                    if (!s || !t || typeof t != "object") return;
                    t = t[s]
                }
            } catch (c) {
                r = {
                    error: c
                }
            } finally {
                try {
                    a && !a.done && (n = o.return) && n.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
            if (t != null) return t
        }
    },
    oa = "(\\d+)\\.(\\d+)",
    aa = "(\\d+)",
    ia = "(-(([-\\w]+\\.?)*))?",
    sa = "^".concat(oa, "(\\.").concat(aa).concat(ia, ")?$"),
    ca = function() {
        function t(e, r, n, o) {
            o === void 0 && (o = void 0), this.major = e, this.minor = r, this.patch = n, this.preRelease = o
        }
        return t.parse = function(e) {
            if (e) {
                var r = new RegExp(sa).exec(e);
                if (r) {
                    var n = Number(r[1]),
                        o = Number(r[2]);
                    if (!(isNaN(n) || isNaN(o))) {
                        var a = Number(r[4]) || 0,
                            s = r[5] || void 0;
                        return new t(n, o, a, s)
                    }
                }
            }
        }, t.prototype.compareTo = function(e) {
            return this.major > e.major ? 1 : this.major < e.major ? -1 : this.minor > e.minor ? 1 : this.minor < e.minor ? -1 : this.patch > e.patch ? 1 : this.patch < e.patch || this.preRelease && !e.preRelease ? -1 : !this.preRelease && e.preRelease ? 1 : this.preRelease && e.preRelease ? this.preRelease > e.preRelease ? 1 : this.preRelease < e.preRelease ? -1 : 0 : 0
        }, t
    }(),
    ln = function() {
        function t() {}
        return t.prototype.evaluate = function(e, r) {
            var n, o, a = {},
                s = {
                    context: e,
                    result: a
                };
            try {
                for (var c = V(r), v = c.next(); !v.done; v = c.next()) {
                    var u = v.value,
                        d = this.evaluateFlag(s, u);
                    d && (a[u.key] = d)
                }
            } catch (A) {
                n = {
                    error: A
                }
            } finally {
                try {
                    v && !v.done && (o = c.return) && o.call(c)
                } finally {
                    if (n) throw n.error
                }
            }
            return a
        }, t.prototype.evaluateFlag = function(e, r) {
            var n, o, a;
            try {
                for (var s = V(r.segments), c = s.next(); !c.done; c = s.next()) {
                    var v = c.value;
                    if (a = this.evaluateSegment(e, r, v), a) {
                        var u = ue(ue(ue({}, r.metadata), v.metadata), a.metadata);
                        a = ue(ue({}, a), {
                            metadata: u
                        });
                        break
                    }
                }
            } catch (d) {
                n = {
                    error: d
                }
            } finally {
                try {
                    c && !c.done && (o = s.return) && o.call(s)
                } finally {
                    if (n) throw n.error
                }
            }
            return a
        }, t.prototype.evaluateSegment = function(e, r, n) {
            if (!n.conditions) {
                var o = this.bucket(e, n);
                return o !== void 0 ? r.variants[o] : void 0
            }
            var a = this.evaluateConditions(e, n.conditions);
            if (a) {
                var o = this.bucket(e, n);
                return o !== void 0 ? r.variants[o] : void 0
            }
        }, t.prototype.evaluateConditions = function(e, r) {
            var n, o, a, s;
            try {
                for (var c = V(r), v = c.next(); !v.done; v = c.next()) {
                    var u = v.value,
                        d = !0;
                    try {
                        for (var A = (a = void 0, V(u)), x = A.next(); !x.done; x = A.next()) {
                            var _ = x.value;
                            if (d = this.matchCondition(e, _), !d) break
                        }
                    } catch (C) {
                        a = {
                            error: C
                        }
                    } finally {
                        try {
                            x && !x.done && (s = A.return) && s.call(A)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    if (d) return !0
                }
            } catch (C) {
                n = {
                    error: C
                }
            } finally {
                try {
                    v && !v.done && (o = c.return) && o.call(c)
                } finally {
                    if (n) throw n.error
                }
            }
            return !1
        }, t.prototype.matchCondition = function(e, r) {
            var n = Qr(e, r.selector);
            if (n == null) return this.matchNull(r.op, r.values);
            if (this.isSetOperator(r.op)) {
                var o = this.coerceStringArray(n);
                return o ? this.matchSet(o, r.op, r.values) : !1
            } else {
                var a = this.coerceString(n);
                return a !== void 0 ? this.matchString(a, r.op, r.values) : !1
            }
        }, t.prototype.getHash = function(e) {
            return Jo(e)
        }, t.prototype.bucket = function(e, r) {
            var n, o, a, s;
            if (!r.bucket) return r.variant;
            var c = this.coerceString(Qr(e, r.bucket.selector));
            if (!c || c.length === 0) return r.variant;
            var v = "".concat(r.bucket.salt, "/").concat(c),
                u = this.getHash(v),
                d = u % 100,
                A = Math.floor(u / 100);
            try {
                for (var x = V(r.bucket.allocations), _ = x.next(); !_.done; _ = x.next()) {
                    var C = _.value,
                        E = C.range[0],
                        w = C.range[1];
                    if (d >= E && d < w) try {
                        for (var J = (a = void 0, V(C.distributions)), ee = J.next(); !ee.done; ee = J.next()) {
                            var te = ee.value,
                                xe = te.range[0],
                                nt = te.range[1];
                            if (A >= xe && A < nt) return te.variant
                        }
                    } catch (de) {
                        a = {
                            error: de
                        }
                    } finally {
                        try {
                            ee && !ee.done && (s = J.return) && s.call(J)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                }
            } catch (de) {
                n = {
                    error: de
                }
            } finally {
                try {
                    _ && !_.done && (o = x.return) && o.call(x)
                } finally {
                    if (n) throw n.error
                }
            }
            return r.variant
        }, t.prototype.matchNull = function(e, r) {
            var n = this.containsNone(r);
            switch (e) {
                case h.IS:
                case h.CONTAINS:
                case h.LESS_THAN:
                case h.LESS_THAN_EQUALS:
                case h.GREATER_THAN:
                case h.GREATER_THAN_EQUALS:
                case h.VERSION_LESS_THAN:
                case h.VERSION_LESS_THAN_EQUALS:
                case h.VERSION_GREATER_THAN:
                case h.VERSION_GREATER_THAN_EQUALS:
                case h.SET_IS:
                case h.SET_CONTAINS:
                case h.SET_CONTAINS_ANY:
                    return n;
                case h.IS_NOT:
                case h.DOES_NOT_CONTAIN:
                case h.SET_DOES_NOT_CONTAIN:
                case h.SET_DOES_NOT_CONTAIN_ANY:
                    return !n;
                default:
                    return !1
            }
        }, t.prototype.matchSet = function(e, r, n) {
            switch (r) {
                case h.SET_IS:
                    return this.setEquals(e, n);
                case h.SET_IS_NOT:
                    return !this.setEquals(e, n);
                case h.SET_CONTAINS:
                    return this.matchesSetContainsAll(e, n);
                case h.SET_DOES_NOT_CONTAIN:
                    return !this.matchesSetContainsAll(e, n);
                case h.SET_CONTAINS_ANY:
                    return this.matchesSetContainsAny(e, n);
                case h.SET_DOES_NOT_CONTAIN_ANY:
                    return !this.matchesSetContainsAny(e, n);
                default:
                    return !1
            }
        }, t.prototype.matchString = function(e, r, n) {
            var o = this;
            switch (r) {
                case h.IS:
                    return this.matchesIs(e, n);
                case h.IS_NOT:
                    return !this.matchesIs(e, n);
                case h.CONTAINS:
                    return this.matchesContains(e, n);
                case h.DOES_NOT_CONTAIN:
                    return !this.matchesContains(e, n);
                case h.LESS_THAN:
                case h.LESS_THAN_EQUALS:
                case h.GREATER_THAN:
                case h.GREATER_THAN_EQUALS:
                    return this.matchesComparable(e, r, n, function(a) {
                        return o.parseNumber(a)
                    }, this.comparator);
                case h.VERSION_LESS_THAN:
                case h.VERSION_LESS_THAN_EQUALS:
                case h.VERSION_GREATER_THAN:
                case h.VERSION_GREATER_THAN_EQUALS:
                    return this.matchesComparable(e, r, n, function(a) {
                        return ca.parse(a)
                    }, this.versionComparator);
                case h.REGEX_MATCH:
                    return this.matchesRegex(e, n);
                case h.REGEX_DOES_NOT_MATCH:
                    return !this.matchesRegex(e, n);
                default:
                    return !1
            }
        }, t.prototype.matchesIs = function(e, r) {
            if (this.containsBooleans(r)) {
                var n = e.toLowerCase();
                if (n === "true" || n === "false") return r.some(function(o) {
                    return o.toLowerCase() === n
                })
            }
            return r.some(function(o) {
                return e === o
            })
        }, t.prototype.matchesContains = function(e, r) {
            var n, o;
            try {
                for (var a = V(r), s = a.next(); !s.done; s = a.next()) {
                    var c = s.value;
                    if (e.toLowerCase().includes(c.toLowerCase())) return !0
                }
            } catch (v) {
                n = {
                    error: v
                }
            } finally {
                try {
                    s && !s.done && (o = a.return) && o.call(a)
                } finally {
                    if (n) throw n.error
                }
            }
            return !1
        }, t.prototype.matchesComparable = function(e, r, n, o, a) {
            var s = this,
                c = o(e),
                v = n.map(function(u) {
                    return o(u)
                }).filter(function(u) {
                    return u !== void 0
                });
            return c === void 0 || v.length === 0 ? n.some(function(u) {
                return s.comparator(e, r, u)
            }) : v.some(function(u) {
                return a(c, r, u)
            })
        }, t.prototype.comparator = function(e, r, n) {
            switch (r) {
                case h.LESS_THAN:
                case h.VERSION_LESS_THAN:
                    return e < n;
                case h.LESS_THAN_EQUALS:
                case h.VERSION_LESS_THAN_EQUALS:
                    return e <= n;
                case h.GREATER_THAN:
                case h.VERSION_GREATER_THAN:
                    return e > n;
                case h.GREATER_THAN_EQUALS:
                case h.VERSION_GREATER_THAN_EQUALS:
                    return e >= n;
                default:
                    return !1
            }
        }, t.prototype.versionComparator = function(e, r, n) {
            var o = e.compareTo(n);
            switch (r) {
                case h.LESS_THAN:
                case h.VERSION_LESS_THAN:
                    return o < 0;
                case h.LESS_THAN_EQUALS:
                case h.VERSION_LESS_THAN_EQUALS:
                    return o <= 0;
                case h.GREATER_THAN:
                case h.VERSION_GREATER_THAN:
                    return o > 0;
                case h.GREATER_THAN_EQUALS:
                case h.VERSION_GREATER_THAN_EQUALS:
                    return o >= 0;
                default:
                    return !1
            }
        }, t.prototype.matchesRegex = function(e, r) {
            return r.some(function(n) {
                return !!new RegExp(n).exec(e)
            })
        }, t.prototype.containsNone = function(e) {
            return e.some(function(r) {
                return r === "(none)"
            })
        }, t.prototype.containsBooleans = function(e) {
            return e.some(function(r) {
                switch (r.toLowerCase()) {
                    case "true":
                    case "false":
                        return !0;
                    default:
                        return !1
                }
            })
        }, t.prototype.parseNumber = function(e) {
            var r;
            return (r = Number(e)) !== null && r !== void 0 ? r : void 0
        }, t.prototype.coerceString = function(e) {
            if (e != null) return typeof e == "object" ? JSON.stringify(e) : String(e)
        }, t.prototype.coerceStringArray = function(e) {
            var r = this;
            if (Array.isArray(e)) {
                var n = e;
                return n.map(function(c) {
                    return r.coerceString(c)
                }).filter(Boolean)
            }
            var o = String(e);
            try {
                var a = JSON.parse(o);
                if (Array.isArray(a)) {
                    var n = e;
                    return n.map(function(v) {
                        return r.coerceString(v)
                    }).filter(Boolean)
                } else {
                    var s = this.coerceString(o);
                    return s ? [s] : void 0
                }
            } catch (c) {
                var s = this.coerceString(o);
                return s ? [s] : void 0
            }
        }, t.prototype.isSetOperator = function(e) {
            switch (e) {
                case h.SET_IS:
                case h.SET_IS_NOT:
                case h.SET_CONTAINS:
                case h.SET_DOES_NOT_CONTAIN:
                case h.SET_CONTAINS_ANY:
                case h.SET_DOES_NOT_CONTAIN_ANY:
                    return !0;
                default:
                    return !1
            }
        }, t.prototype.setEquals = function(e, r) {
            var n = new Set(e),
                o = new Set(r);
            return n.size === o.size && Yo([], Xo(o), !1).every(function(a) {
                return n.has(a)
            })
        }, t.prototype.matchesSetContainsAll = function(e, r) {
            var n, o;
            if (e.length < r.length) return !1;
            try {
                for (var a = V(r), s = a.next(); !s.done; s = a.next()) {
                    var c = s.value;
                    if (!this.matchesIs(c, e)) return !1
                }
            } catch (v) {
                n = {
                    error: v
                }
            } finally {
                try {
                    s && !s.done && (o = a.return) && o.call(a)
                } finally {
                    if (n) throw n.error
                }
            }
            return !0
        }, t.prototype.matchesSetContainsAny = function(e, r) {
            var n, o;
            try {
                for (var a = V(r), s = a.next(); !s.done; s = a.next()) {
                    var c = s.value;
                    if (this.matchesIs(c, e)) return !0
                }
            } catch (v) {
                n = {
                    error: v
                }
            } finally {
                try {
                    s && !s.done && (o = a.return) && o.call(a)
                } finally {
                    if (n) throw n.error
                }
            }
            return !1
        }, t
    }();
var un = "3.7.7",
    la = un,
    Ee = typeof Buffer == "function",
    Jr = typeof TextDecoder == "function" ? new TextDecoder : void 0,
    en = typeof TextEncoder == "function" ? new TextEncoder : void 0,
    ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    ke = Array.prototype.slice.call(ua),
    Ve = (t => {
        let e = {};
        return t.forEach((r, n) => e[r] = n), e
    })(ke),
    da = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    U = String.fromCharCode.bind(String),
    tn = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : t => new Uint8Array(Array.prototype.slice.call(t, 0)),
    dn = t => t.replace(/=/g, "").replace(/[+\/]/g, e => e == "+" ? "-" : "_"),
    fn = t => t.replace(/[^A-Za-z0-9\+\/]/g, ""),
    pn = t => {
        let e, r, n, o, a = "",
            s = t.length % 3;
        for (let c = 0; c < t.length;) {
            if ((r = t.charCodeAt(c++)) > 255 || (n = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) > 255) throw new TypeError("invalid character found");
            e = r << 16 | n << 8 | o, a += ke[e >> 18 & 63] + ke[e >> 12 & 63] + ke[e >> 6 & 63] + ke[e & 63]
        }
        return s ? a.slice(0, s - 3) + "===".substring(s) : a
    },
    Ft = typeof btoa == "function" ? t => btoa(t) : Ee ? t => Buffer.from(t, "binary").toString("base64") : pn,
    Lt = Ee ? t => Buffer.from(t).toString("base64") : t => {
        let r = [];
        for (let n = 0, o = t.length; n < o; n += 4096) r.push(U.apply(null, t.subarray(n, n + 4096)));
        return Ft(r.join(""))
    },
    Je = (t, e = !1) => e ? dn(Lt(t)) : Lt(t),
    fa = t => {
        if (t.length < 2) {
            var e = t.charCodeAt(0);
            return e < 128 ? t : e < 2048 ? U(192 | e >>> 6) + U(128 | e & 63) : U(224 | e >>> 12 & 15) + U(128 | e >>> 6 & 63) + U(128 | e & 63)
        } else {
            var e = 65536 + (t.charCodeAt(0) - 55296) * 1024 + (t.charCodeAt(1) - 56320);
            return U(240 | e >>> 18 & 7) + U(128 | e >>> 12 & 63) + U(128 | e >>> 6 & 63) + U(128 | e & 63)
        }
    },
    pa = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    mn = t => t.replace(pa, fa),
    rn = Ee ? t => Buffer.from(t, "utf8").toString("base64") : en ? t => Lt(en.encode(t)) : t => Ft(mn(t)),
    Se = (t, e = !1) => e ? dn(rn(t)) : rn(t),
    nn = t => Se(t, !0),
    ma = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    ha = t => {
        switch (t.length) {
            case 4:
                var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                    r = e - 65536;
                return U((r >>> 10) + 55296) + U((r & 1023) + 56320);
            case 3:
                return U((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
            default:
                return U((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
        }
    },
    hn = t => t.replace(ma, ha),
    vn = t => {
        if (t = t.replace(/\s+/g, ""), !da.test(t)) throw new TypeError("malformed base64.");
        t += "==".slice(2 - (t.length & 3));
        let e, r = "",
            n, o;
        for (let a = 0; a < t.length;) e = Ve[t.charAt(a++)] << 18 | Ve[t.charAt(a++)] << 12 | (n = Ve[t.charAt(a++)]) << 6 | (o = Ve[t.charAt(a++)]), r += n === 64 ? U(e >> 16 & 255) : o === 64 ? U(e >> 16 & 255, e >> 8 & 255) : U(e >> 16 & 255, e >> 8 & 255, e & 255);
        return r
    },
    Ht = typeof atob == "function" ? t => atob(fn(t)) : Ee ? t => Buffer.from(t, "base64").toString("binary") : vn,
    gn = Ee ? t => tn(Buffer.from(t, "base64")) : t => tn(Ht(t).split("").map(e => e.charCodeAt(0))),
    yn = t => gn(bn(t)),
    va = Ee ? t => Buffer.from(t, "base64").toString("utf8") : Jr ? t => Jr.decode(gn(t)) : t => hn(Ht(t)),
    bn = t => fn(t.replace(/[-_]/g, e => e == "-" ? "+" : "/")),
    Pt = t => va(bn(t)),
    ga = t => {
        if (typeof t != "string") return !1;
        let e = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
        return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e)
    },
    Sn = t => ({
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
    }),
    En = function() {
        let t = (e, r) => Object.defineProperty(String.prototype, e, Sn(r));
        t("fromBase64", function() {
            return Pt(this)
        }), t("toBase64", function(e) {
            return Se(this, e)
        }), t("toBase64URI", function() {
            return Se(this, !0)
        }), t("toBase64URL", function() {
            return Se(this, !0)
        }), t("toUint8Array", function() {
            return yn(this)
        })
    },
    Tn = function() {
        let t = (e, r) => Object.defineProperty(Uint8Array.prototype, e, Sn(r));
        t("toBase64", function(e) {
            return Je(this, e)
        }), t("toBase64URI", function() {
            return Je(this, !0)
        }), t("toBase64URL", function() {
            return Je(this, !0)
        })
    },
    ya = () => {
        En(), Tn()
    },
    Ut = {
        version: un,
        VERSION: la,
        atob: Ht,
        atobPolyfill: vn,
        btoa: Ft,
        btoaPolyfill: pn,
        fromBase64: Pt,
        toBase64: Se,
        encode: Se,
        encodeURI: nn,
        encodeURL: nn,
        utob: mn,
        btou: hn,
        decode: Pt,
        isValid: ga,
        fromUint8Array: Je,
        toUint8Array: yn,
        extendString: En,
        extendUint8Array: Tn,
        extendBuiltins: ya
    },
    ba = function(t) {
        an(e, t);

        function e(r, n) {
            var o = t.call(this, n) || this;
            return o.statusCode = r, Object.setPrototypeOf(o, e.prototype), o
        }
        return e
    }(Error),
    Si = function(t) {
        an(e, t);

        function e(r) {
            var n = t.call(this, r) || this;
            return Object.setPrototypeOf(n, e.prototype), n
        }
        return e
    }(Error),
    Ei = function() {
        function t(e, r, n) {
            this.deploymentKey = e, this.serverUrl = r, this.httpClient = n
        }
        return t.prototype.getVariants = function(e, r) {
            return sn(this, void 0, void 0, function() {
                var n, o, a, s;
                return cn(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return n = Ut.encodeURL(JSON.stringify(e)), o = {
                                Authorization: "Api-Key ".concat(this.deploymentKey),
                                "X-Amp-Exp-User": n
                            }, r != null && r.flagKeys && (o["X-Amp-Exp-Flag-Keys"] = Ut.encodeURL(JSON.stringify(r.flagKeys))), r != null && r.trackingOption && (o["X-Amp-Exp-Track"] = r.trackingOption), r != null && r.exposureTrackingOption && (o["X-Amp-Exp-Exposure-Track"] = r.exposureTrackingOption), a = new URL("".concat(this.serverUrl, "/sdk/v2/vardata?v=0")), r != null && r.evaluationMode && a.searchParams.append("eval_mode", r == null ? void 0 : r.evaluationMode), r != null && r.deliveryMethod && a.searchParams.append("delivery_method", r == null ? void 0 : r.deliveryMethod), [4, this.httpClient.request({
                                requestUrl: a.toString(),
                                method: "GET",
                                headers: o,
                                timeoutMillis: r == null ? void 0 : r.timeoutMillis
                            })];
                        case 1:
                            if (s = c.sent(), s.status != 200) throw new ba(s.status, "Fetch error response: status=".concat(s.status));
                            return [2, JSON.parse(s.body)]
                    }
                })
            })
        }, t
    }(),
    Ti = function() {
        function t(e, r, n) {
            this.deploymentKey = e, this.serverUrl = r, this.httpClient = n
        }
        return t.prototype.getFlags = function(e) {
            return sn(this, void 0, void 0, function() {
                var r, n, o;
                return cn(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return r = {
                                Authorization: "Api-Key ".concat(this.deploymentKey)
                            }, e != null && e.libraryName && (e != null && e.libraryVersion) && (r["X-Amp-Exp-Library"] = "".concat(e.libraryName, "/").concat(e.libraryVersion)), e != null && e.user && (r["X-Amp-Exp-User"] = Ut.encodeURL(JSON.stringify(e.user))), [4, this.httpClient.request({
                                requestUrl: "".concat(this.serverUrl, "/sdk/v2/flags") + (e != null && e.deliveryMethod ? "?delivery_method=".concat(e.deliveryMethod) : ""),
                                method: "GET",
                                headers: r,
                                timeoutMillis: e == null ? void 0 : e.timeoutMillis
                            })];
                        case 1:
                            if (n = a.sent(), n.status != 200) throw Error("Flags error response: status=".concat(n.status));
                            return o = JSON.parse(n.body), [2, o.reduce(function(s, c) {
                                return s[c.key] = c, s
                            }, {})]
                    }
                })
            })
        }, t
    }(),
    on = typeof globalThis < "u" ? globalThis : window || self;
var Ai = function() {
    function t(e, r) {
        this.poller = void 0, this.action = e, this.ms = r
    }
    return t.prototype.start = function() {
        this.poller || (this.poller = on.setInterval(this.action, this.ms), this.action())
    }, t.prototype.stop = function() {
        this.poller && (on.clearInterval(this.poller), this.poller = void 0)
    }, t
}();
var An = Q(Go());
var et = class {
    constructor(e = An.default) {
        Ot(this, "messageToSubscriberGroup");
        Ot(this, "debounce");
        this.messageToSubscriberGroup = new Map, this.debounce = e
    }
    subscribe(e, r, n = void 0, o = void 0) {
        let a = this.messageToSubscriberGroup.get(e);
        a || (a = {
            subscribers: []
        }, this.messageToSubscriberGroup.set(e, a));
        let s = {
            identifier: n,
            callback: r
        };
        o !== void 0 && (s.debouncedCallback = this.debounce(r, o, {
            maxWait: 5e3
        })), a.subscribers.push(s)
    }
    publish(e, r) {
        let n = this.messageToSubscriberGroup.get(e);
        n && n.subscribers.forEach(o => {
            r = r || {};
            try {
                o.debouncedCallback ? o.debouncedCallback(r) : o.callback(r)
            } catch (a) {
                Me.error("Error in message subscriber:", a)
            }
        })
    }
    unsubscribe(e, r) {
        var a;
        let n = this.messageToSubscriberGroup.get(e);
        if (!n) return;
        let o = [];
        for (let s of n.subscribers) s.identifier === r ? (a = s.debouncedCallback) == null || a.cancel() : o.push(s);
        n.subscribers = o
    }
};
var Sa = {
        closeNudgeMock: (...t) => {},
        addClickListener: (...t) => () => {},
        clickElement: (...t) => !1,
        closeAllNudgeMocks: (...t) => {},
        closeStep: (...t) => {},
        onLocationChange: (...t) => () => {},
        renderNudge: (...t) => {},
        openChatExecutable: (...t) => {},
        postMessageToDashboard: (...t) => {},
        linkExecutable: (...t) => {},
        getDefaultUIMode: () => "lightMode",
        isElementVisible: async () => !1,
        matchesSelector: () => !1,
        showResourceCenter: (...t) => {},
        setCurrentContentId: (...t) => {},
        previewRecSet: (...t) => {},
        previewResourceCenter: (...t) => {},
        previewAutopilotKeywords: (...t) => {},
        enrichUser: t => t,
        appReviewExecutable: (...t) => {},
        supportedBreakingFeatures: [],
        matchesAnyElement: () => !1
    },
    Ea = {
        isEditorPreview: !1,
        isAssistantPreview: !1,
        platform: "unknown",
        location: {
            href: "",
            pathname: "",
            search: ""
        },
        services: Sa,
        persistResourceCenter: !0
    },
    _n = "sessionStart",
    Ta = t => {
        let e = It.get(_n, 0, t);
        if (e && typeof e == "number" && e > 0) return e;
        let r = Date.now();
        return It.set(_n, r, t), r
    },
    Bt = t => {
        var s, c;
        let e = { ...Ea,
                ...t
            },
            {
                isEditorPreview: r,
                platform: n,
                isAssistantPreview: o
            } = e,
            a = (s = e.apiKeyPrefix) != null ? s : "";
        return {
            hasBooted: !1,
            instanceName: (c = e.instanceName) != null ? c : wr,
            apiKeyPrefix: a,
            services: e.services,
            location: e.location,
            organization: void 0,
            user: void 0,
            endUserStore: window.Cypress ? new Ur(e.instanceName) : r ? new Pr : new Lr(e.instanceName),
            decide: void 0,
            evalEngine: new ln,
            callbacks: {},
            sessionProperties: {},
            nudgesManager: null,
            effectsSequencer: null,
            currentModalNudge: null,
            lastMockNudge: null,
            activeChecklist: null,
            delayedTriggers: new Set,
            previewRestorationRetryTimer: null,
            platform: n,
            trackedAppEvents: new Set,
            showWidgetTableau: !1,
            widgetTableauSelection: {
                widgets: ["guide", "survey", "resourceCenter", "assistant"]
            },
            themeMode: "lightMode",
            themes: [],
            messageBus: new et,
            nudgeDebugToolBar: {
                visible: !1,
                closeTabWhenToolbarClosed: !1,
                bypassCustomThrottles: !0,
                bypassTargeting: !0,
                position: "bottom",
                originalInitLocale: void 0
            },
            nudgeRecorderToolBar: {
                visible: !1,
                experience: void 0
            },
            editorPreviewDevice: "desktop",
            isEditorPreview: r,
            isAssistantPreview: o,
            sessionStart: Ta(a),
            integrations: [],
            resourceCenter: {
                visible: !1,
                minimized: !1,
                loading: !0,
                query: null,
                recommendationSets: null,
                previewedRecommendationSet: null,
                additionalResources: null,
                previewedAdditionalResources: null,
                navigation: Gr(),
                isAutopilotEnabled: !1,
                textStrings: {},
                showQuickLinks: !1,
                showRecsetHeroCards: !1,
                showNegativeFeedbackDropdown: !0,
                imageUploadEnabled: !0,
                defaultTab: "resource_center",
                isAdditionalResourcesExpanded: !0,
                shouldPersistOnReload: !0,
                filter: null
            },
            callbackToolRegistry: new Map
        }
    },
    Hi = t => {
        var o;
        let e = Br(),
            r = Bt(t),
            n = ((o = t == null ? void 0 : t.persistResourceCenter) != null ? o : !0) && !(t != null && t.isEditorPreview);
        return kr({ ...r,
            resourceCenter: { ...r.resourceCenter,
                shouldPersistOnReload: n,
                ...n ? e : {},
                navigation: zr(n)
            }
        })
    },
    Bi = t => {
        let e = [...Wr(t)];
        return () => e.forEach(r => r())
    };
var Wt = 800,
    jt = 430,
    zi = 8,
    Wi = 60,
    ji = 34,
    $i = 40,
    qi = 640,
    Xi = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "darkMode" : "lightMode",
    Aa = () => {
        let t = window.navigator.userAgent,
            e = window.navigator.platform,
            r = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
            n = ["Win32", "Win64", "Windows", "WinCE"],
            o = ["iPhone", "iPad", "iPod"],
            a = "mac";
        return r.indexOf(e) !== -1 ? a = "mac" : o.indexOf(e) !== -1 ? a = "ios" : n.indexOf(e) !== -1 ? a = "windows" : /Android/.test(t) ? a = "android" : /Linux/.test(e) && (a = "linux"), a
    },
    Yi = t => ["windows", "android", "linux"].includes(Aa()) ? t.ctrlKey : t.metaKey,
    xn = () => !!/Android|webOS|iPhone|iPad|iPod|Mobile Safari|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    tt = [],
    Vi = t => (tt.push(t), () => {
        let e = tt.indexOf(t);
        e > -1 && tt.splice(e, 1)
    }),
    Gt = () => {
        let t = {
            href: window.location.href,
            pathname: window.location.pathname,
            search: window.location.search
        };
        tt.forEach(e => e(t))
    },
    zt = !1,
    Ki = () => {
        if (zt) return () => {};
        zt = !0;
        let t = window.history,
            e = t.pushState,
            r = t.replaceState,
            n = !1,
            o = window.location.href;
        t.pushState = function(...s) {
            e.apply(t, s), !n && o !== window.location.href && (o = window.location.href, Gt())
        }, t.replaceState = function(...s) {
            r.apply(t, s), !n && o !== window.location.href && (o = window.location.href, Gt())
        };
        let a = () => {
            o !== window.location.href && (o = window.location.href, Gt())
        };
        return window.addEventListener("hashchange", a), () => {
            window.removeEventListener("hashchange", a), n = !0, zt = !1
        }
    };
var Rn = {},
    wn = t => {
        let e, r = new Set,
            n = (d, A) => {
                let x = typeof d == "function" ? d(e) : d;
                if (!Object.is(x, e)) {
                    let _ = e;
                    e = (A != null ? A : typeof x != "object" || x === null) ? x : Object.assign({}, e, x), r.forEach(C => C(e, _))
                }
            },
            o = () => e,
            v = {
                setState: n,
                getState: o,
                getInitialState: () => u,
                subscribe: d => (r.add(d), () => r.delete(d)),
                destroy: () => {
                    (Rn.env ? Rn.env.MODE : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                }
            },
            u = e = t(n, o, v);
        return v
    },
    Cn = t => t ? wn(t) : wn;
var Hn = Q(re(), 1),
    Bn = Q(Pn(), 1),
    Fn = {},
    {
        useDebugValue: Ga
    } = Hn.default,
    {
        useSyncExternalStoreWithSelector: za
    } = Bn.default,
    Un = !1,
    Wa = t => t;

function Gn(t, e = Wa, r) {
    (Fn.env ? Fn.env.MODE : void 0) !== "production" && r && !Un && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), Un = !0);
    let n = za(t.subscribe, t.getState, t.getServerState || t.getInitialState, e, r);
    return Ga(n), n
}
var zn = "assistant_sessionId";
var Ae = Cn(t => ({
        sessionId: null,
        messages: [],
        filter: null,
        setSessionId: e => t({
            sessionId: e
        }),
        setMessages: e => t({
            messages: e
        }),
        appendMessage: e => t(r => ({
            messages: [...r.messages, e]
        })),
        updateMessage: (e, r) => t(n => ({
            messages: n.messages.map(o => o.id === e ? { ...o,
                ...r
            } : o)
        })),
        removeMessage: e => t(r => ({
            messages: r.messages.filter(n => n.id !== e)
        })),
        setSession: e => t(e),
        setFilter: e => t({
            filter: e
        })
    })),
    us = t => Gn(Ae, t),
    qt = class {
        show(e) {
            var a;
            let n = ((a = e == null ? void 0 : e.initialPage) != null ? a : "resourceCenter") === "chat" ? "assistant" : "help-hub",
                o = this != null && this.resourceCenterActions ? this : Rr();
            o.resourceCenterActions.navigate({
                page: n,
                params: {}
            }), o.resourceCenterActions.showResourceCenter(!0)
        }
        _startChat(e, r) {
            e && e !== "behavior-settings" && r && r.length > 0 && Ae.getState().setSession({
                sessionId: e,
                messages: r
            })
        }
        _shareCurrentChatSession() {
            let {
                sessionId: e,
                messages: r,
                filter: n
            } = Ae.getState();
            return {
                sessionId: e,
                messages: r,
                filter: n
            }
        }
        setAssistantFilter(e) {
            Ae.getState().setFilter(e)
        }
        clearSession() {
            new Hr().remove(zn), Ae.getState().setSession({
                sessionId: null,
                messages: []
            })
        }
        get store() {
            return Ae
        }
    },
    ds = new qt;
var _e = Q(re());
var bs = t => {
        let e = t ? Bt() : ne(),
            r = e.editorPreviewDevice.startsWith("mobile") && e.isEditorPreview,
            n = (0, _e.useRef)(null),
            [, o] = (0, _e.useReducer)(c => c + 1, 0),
            a = be();
        (0, _e.useEffect)(() => {
            if (!r) return;
            let c = document.getElementById("engagement-mobile-preview-wrapper");
            c !== n.current && (n.current = c, c == null || c.classList.add(a.generatedCSSClassname), o())
        }, [r, a.generatedCSSClassname]);
        let s = {
            checklists: {
                container: {
                    fontFamily: "var(--font-font-family)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0px",
                    margin: "16px",
                    width: "auto",
                    bottom: "0px",
                    right: "0px",
                    left: "0px",
                    overflow: "hidden",
                    zIndex: Y.Z_NUDGE,
                    position: r ? "absolute" : "fixed"
                }
            },
            nudges: {
                modal: {
                    mask: {
                        backgroundColor: "var(--background-overlay)",
                        zIndex: Y.Z_EDITOR - 2,
                        width: "100%",
                        height: "100%",
                        maxWidth: jt,
                        maxHeight: Wt,
                        position: "absolute"
                    },
                    wrap: {
                        width: "100%",
                        height: "100%",
                        maxWidth: jt,
                        maxHeight: Wt,
                        position: "absolute"
                    }
                },
                pin: {
                    container: {
                        position: "absolute",
                        display: "flex",
                        gap: "16px",
                        pointerEvents: "none",
                        zIndex: Y.Z_NUDGE - 2
                    }
                },
                tooltip: {
                    container: {
                        position: "absolute",
                        display: "flex",
                        gap: "16px",
                        pointerEvents: "none",
                        zIndex: Y.Z_NUDGE - 2
                    }
                },
                popover: {
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        background: "var(--background-primary)",
                        borderRadius: "var(--layout-radius-card)",
                        color: "var(--content-primary)",
                        zIndex: Y.Z_NUDGE - 1,
                        fontFamily: "var(--font-font-family)",
                        transition: "opacity 0.15s ease-in-out",
                        pointerEvents: "all",
                        position: "relative"
                    }
                },
                banner: {
                    container: {
                        position: "absolute",
                        display: "flex",
                        gap: "16px",
                        zIndex: Y.Z_NUDGE - 2
                    },
                    body: {
                        flexDirection: "column",
                        marginRight: "var(--layout-padding)",
                        justifyContent: "space-between"
                    },
                    closeButtonContainer: {
                        position: "absolute",
                        display: "flex",
                        top: "calc(max(var(--layout-padding) - 4px, 0px))",
                        right: "calc(max(var(--layout-padding) - 12px, 0px))",
                        maxHeight: "32px",
                        maxWidth: "32px",
                        borderRadius: "var(--layout-radius-button)",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                    },
                    spaceContainer: {
                        display: "none"
                    },
                    title: {
                        flexDirection: "column",
                        fontSize: "var(--font-size-large)",
                        lineHeight: "var(--font-line-height-snug)",
                        alignSelf: "flex-start"
                    },
                    actionBar: {
                        padding: "0px",
                        width: "100%"
                    },
                    stickyContainer: {
                        width: "100%",
                        top: "0px",
                        position: "fixed",
                        pointerEvents: "none",
                        zIndex: Y.Z_NUDGE,
                        height: "100%"
                    },
                    inlineContainer: {
                        width: "100%",
                        zIndex: Y.Z_NUDGE
                    }
                }
            },
            toast: {
                modal: {
                    bottom: "0px"
                },
                container: {
                    position: "relative",
                    width: "100%",
                    height: "100%"
                },
                contentContainer: {
                    position: "absolute",
                    zIndex: Y.Z_INDEX_MAX,
                    pointerEvents: "none"
                }
            }
        };
        return {
            isMobileDevice: xn() || r,
            isStudioMobilePreview: r,
            isMobileNativePreview: e.editorPreviewDevice === "mobileNative",
            studioMobilePreviewWrapper: n.current,
            mobileStyles: s
        }
    },
    ja = ["link", "document", "open_resource_center", "open_ai_assistant"],
    $a = () => typeof window < "u" && window._ampIsWebView === !0,
    qa = t => ja.includes(t.type),
    Xa = () => {
        var t, e, r, n;
        if ((r = (e = (t = window.webkit) == null ? void 0 : t.messageHandlers) == null ? void 0 : e.engagement__onFallbackAction) != null && r.postMessage) return window.webkit.messageHandlers.engagement__onFallbackAction.postMessage.bind(window.webkit.messageHandlers.engagement__onFallbackAction);
        if ((n = window.EngagementAndroidInterface) != null && n.engagement__onFallbackAction) return window.EngagementAndroidInterface.engagement__onFallbackAction.bind(window.EngagementAndroidInterface)
    },
    Wn = (t, e) => {
        if (!$a() || qa(t)) return !1;
        let r = Xa();
        if (!r) return Me.error(`[${e}] Native fallback bridge is missing. Ignoring unsupported Mobile WebView action.`, {
            actionType: t.type
        }), !0;
        try {
            r(JSON.stringify(t))
        } catch (n) {
            Me.error(`[${e}] Failed to forward unsupported action to native host. Ignoring action.`, {
                actionType: t.type,
                error: n
            })
        }
        return !0
    };
var $n = Q(jn()),
    Ya = ["onclick", "id", "class", "style", "allow", "allowfullscreen", "frameborder", "height", "src", "title", "width", "target", "sandbox", "credentialless", "data-citation-id", "data-citation-number", "value"],
    Va = ["iframe"],
    Vt = (0, $n.default)();
Vt.addHook("uponSanitizeAttribute", (t, e) => {
    if (e.attrName === "onclick") {
        let r = e.attrValue;
        if (!/^[A-Za-z0-9._$]+\(\);?$/.test(r)) return e.attrValue = ""
    }
});
Vt.addHook("afterSanitizeAttributes", t => {
    t.tagName === "IFRAME" && t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-presentation")
});
var Ka = (t, e) => Vt.sanitize(t, {
        ADD_TAGS: e || Va,
        ADD_ATTR: Ya,
        FORCE_BODY: !0
    }),
    Es = Ka;
var qn = t => t.filter(e => !!e);
var Za = (t, e) => {
        var o, a, s, c, v, u, d, A;
        let r = (c = (s = (a = (o = e.theme) == null ? void 0 : o.lightMode) == null ? void 0 : a.componentOverrides) == null ? void 0 : s[t]) != null ? c : {},
            n = (A = (d = (u = (v = e.theme) == null ? void 0 : v.darkMode) == null ? void 0 : u.componentOverrides) == null ? void 0 : d[t]) != null ? A : {};
        return {
            overrides: qn([le(r), e.mode === "darkMode" && le(n)]),
            lightModeOverridesObject: r,
            darkModeOverridesObject: n
        }
    },
    Xn = Za;
var Yn = Q(re());
var Qa = le `
  all: unset;
  box-sizing: border-box;
`,
    Ja = Ye.button ``,
    Vn = Yn.default.forwardRef(({
        customCss: t,
        ...e
    }, r) => ye(Ja, {
        css: [Qa, t],
        ref: r,
        ...e
    }));
Vn.displayName = "ButtonWithReset";
var Kn = Vn;
var Zn = {
        display: "flex",
        width: "100%",
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
        flex: "1 1 0",
        cursor: "pointer",
        whiteSpace: "nowrap",
        userSelect: "none",
        span: {
            color: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit"
        },
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
    Qn = "secondaryButton",
    Le = ({
        theme: t,
        prefixIcon: e,
        suffixIcon: r,
        textWrap: n,
        children: o,
        ...a
    }) => {
        let {
            overrides: s
        } = Xn(Qn, t);
        return ye(Kn, {
            css: [s, le(Zn)],
            ...a,
            style: { ...n && {
                    height: "unset",
                    width: "fit-content",
                    whiteSpace: "unset"
                }
            }
        }, e, o && ye("span", {
            style: { ...!n && {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }
            },
            title: typeof o == "string" ? o : void 0
        }, o), r)
    };
Le.styles = Zn;
Le.slug = Qn;
Le.renderMock = (t, e) => ye(Le, {
    theme: {
        theme: t,
        mode: e
    }
}, "Button");
var Ds = Le;
var ei = (t, e) => {
        var n;
        let r = t.callbacks.show_assistant_preview_message;
        if (r) switch (e.type) {
            case "click":
                r(`This would click element: ${e.value}`);
                break;
            case "link":
                r(`This would navigate to: ${e.value}`);
                break;
            case "open_chat":
                {
                    let o = (n = e.meta) != null && n.type ? `${e.meta.type.charAt(0).toUpperCase()}${e.meta.type.slice(1)}` : "chat";r(`This will launch the ${o} chat widget`);
                    break
                }
            case "nudge":
                r("Guide triggered!");
                break;
            case "callback":
                r(`Callback "${e.value}" executed!`);
                break;
            case "document":
                r("Article opened!");
                break;
            case "video":
                r("Video opened!");
                break;
            case "app_review":
                r("App review opened!");
                break;
            default:
                r(`Action "${e.type}" triggered!`)
        }
    },
    Fs = (t, e, r) => {
        !t.isEditorPreview && Wn(e, "Assistant") || (!t.isEditorPreview && (e.type === "open_chat" || e.type === "nudge") && (t.resourceCenter.visible = !1), !(t.isEditorPreview && (ei(t, e), e.type === "nudge" || e.type === "open_chat" || e.type === "link" || e.type === "click" || e.type === "callback")) && Fr(t, e, 123, void 0, r))
    };
var Jn = Q(re());
var ti = Ye.div `
  width: var(--icon-container-size, 20px);
  height: var(--icon-container-size, 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`,
    ri = ({
        children: t,
        ...e
    }) => Jn.default.createElement(ti, { ...e
    }, t),
    Gs = ri;
export {
    $r as a, Mt as b, kt as c, be as d, Zr as e, gi as f, yi as g, Hi as h, Bi as i, Wt as j, jt as k, zi as l, Wi as m, ji as n, $i as o, qi as p, Xi as q, Aa as r, Yi as s, xn as t, Vi as u, Ki as v, bs as w, ja as x, $a as y, Wn as z, jn as A, Es as B, qn as C, Xn as D, Gs as E, Kn as F, Ds as G, ei as H, Fs as I, zn as J, us as K, ds as L
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

dompurify/dist/purify.js:
  (*! @license DOMPurify 2.5.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.7/LICENSE *)
*/