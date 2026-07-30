import {
    D as d,
    F as s
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-7B2P2PNW.js";
import {
    Sc as f,
    aa as e,
    c as S,
    ca as n,
    e as k
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var b = {
        display: "flex",
        width: "100%",
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
        flex: "1 1 0",
        cursor: "pointer",
        whiteSpace: "nowrap",
        userSelect: "none",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-semibold)",
        lineHeight: "var(--font-line-height-normal)",
        span: {
            color: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit"
        },
        "&:hover": {
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
    p = "tertiaryButton",
    l = ({
        theme: o,
        prefixIcon: r,
        suffixIcon: a,
        children: t,
        ...i
    }) => {
        let {
            overrides: m
        } = d(p, o);
        return e(s, {
            css: [m, n(b)],
            ...i
        }, r, e("span", {
            style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            },
            title: typeof t == "string" ? t : void 0
        }, t), a)
    };
l.styles = b;
l.slug = p;
l.renderMock = (o, r) => e(l, {
    theme: {
        theme: o,
        mode: r
    }
}, "Button");
var O = l;
var v = {
        display: "flex",
        width: "100%",
        height: "var(--form-control-height)",
        padding: "var(--form-control-padding-x)",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--form-control-gap)",
        color: "var(--button-primary-content)",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--button-primary-border-color)",
        background: "var(--button-primary-background)",
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
            borderColor: "var(--button-primary-border-color-hover)",
            background: "var(--button-primary-background-hover)",
            color: "var(--button-primary-content-hover)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)",
            background: "var(--button-primary-background-hover)"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&:disabled": {
            cursor: "not-allowed",
            borderColor: "var(--button-primary-border-color)",
            background: "var(--button-primary-background)",
            color: "var(--button-primary-content)"
        }
    },
    g = "primaryButton",
    c = ({
        theme: o,
        prefixIcon: r,
        suffixIcon: a,
        textWrap: t,
        children: i,
        ...m
    }) => {
        let {
            overrides: x
        } = d(g, o);
        return e(s, {
            customCss: [x, n(v)],
            ...m,
            style: { ...t && {
                    height: "unset",
                    width: "fit-content",
                    whiteSpace: "unset"
                }
            }
        }, r, e("span", {
            style: { ...!t && {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }
            },
            title: typeof i == "string" ? i : void 0
        }, i), a)
    };
c.styles = v;
c.slug = g;
c.renderMock = (o, r) => e(c, {
    theme: {
        theme: o,
        mode: r
    }
}, "Button");
var L = c;
var y = S(k());
var u = {
        display: "flex",
        width: "100%",
        minHeight: "48px",
        padding: "var(--form-control-padding-x)",
        alignItems: "flex-start",
        gap: "var(--layout-gap)",
        color: "var(--content-primary)",
        whiteSpace: "pre-wrap",
        fontFamily: "var(--font-font-family)",
        fontSize: "var(--font-size-base)",
        fontWeight: "var(--font-weight-medium)",
        lineHeight: "var(--font-line-height-normal)",
        borderRadius: "var(--layout-radius-button)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--form-control-border-color)",
        background: "var(--form-control-background)",
        boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)",
        "&:hover": {
            borderColor: "var(--form-control-border-color-hover)",
            background: "var(--form-control-background-hover)",
            color: "var(--content-primary)",
            boxShadow: "var(--form-control-shadow) var(--form-control-shadow-color)"
        },
        "&:focus": {
            borderColor: "var(--base-accent)",
            background: "var(--form-control-background)",
            boxShadow: "0px 0px 0px var(--form-control-focus-ring-width) var(--form-control-focus-ring-color)"
        },
        "&:disabled": {
            borderColor: "var(--form-control-border-color-disabled)",
            background: "var(--form-control-background-disabled)",
            color: "var(--content-disabled)"
        },
        "&:focus-visible": {
            outline: "none"
        },
        "&::placeholder": {
            color: "var(--content-secondary)"
        }
    },
    h = "textarea",
    w = f.textarea `
  all: initial;
  box-sizing: border-box;
`,
    T = {
        borderColor: "var(--content-error, #ff3030)",
        "&:hover": {
            borderColor: "var(--content-error, #ff3030)"
        }
    },
    C = Object.assign(y.default.forwardRef(({
        theme: o,
        hasError: r,
        ...a
    }, t) => {
        let {
            overrides: i
        } = d(h, o);
        return e(w, {
            ref: t,
            css: [i, n(u), r && n(T)],
            ...a
        })
    }), {
        slug: h,
        styles: u,
        renderMock: (o, r) => e(M, {
            theme: o,
            mode: r
        })
    }),
    M = ({
        theme: o,
        mode: r
    }) => {
        let {
            overrides: a
        } = d(h, {
            theme: o,
            mode: r
        });
        return e(w, {
            css: [a, n(u)],
            style: {
                maxHeight: "400px"
            },
            placeholder: "Text area"
        })
    },
    D = C;
export {
    L as a, O as b, D as c
};