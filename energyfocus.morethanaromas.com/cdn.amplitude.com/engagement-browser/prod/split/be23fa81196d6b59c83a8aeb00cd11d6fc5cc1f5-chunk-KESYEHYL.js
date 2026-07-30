import {
    c as g,
    e as i,
    i as t,
    o as r
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var e = g(i());
var o = (0, e.createContext)({
        instanceName: t,
        containerId: "engagement-container",
        isDefaultInstance: !0
    }),
    m = ({
        instanceName: n,
        apiKey: a,
        children: s
    }) => {
        let c = (0, e.useMemo)(() => ({
            instanceName: n,
            containerId: r(n),
            isDefaultInstance: n === t,
            apiKey: a
        }), [n, a]);
        return e.default.createElement(o.Provider, {
            value: c
        }, s)
    },
    u = () => (0, e.useContext)(o);
export {
    m as a, u as b
};