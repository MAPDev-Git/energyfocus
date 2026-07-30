import {
    d as u,
    e as i
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-EJSVZAN3.js";
import {
    c as E,
    e as g,
    ha as d
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var t = E(g()),
    y = n => {
        let {
            messageBus: m
        } = d(), [a, r] = (0, t.useState)(() => n ? i(n) : void 0), f = (0, t.useMemo)(() => n && u(n) ? JSON.stringify(n) : n, [n]);
        return (0, t.useEffect)(() => {
            if (!n) {
                r(void 0);
                return
            }
            r(e => e && e.isConnected ? e : i(n));
            let s = () => {
                    r(e => e && e.isConnected ? e : i(n))
                },
                o = `card_element_watcher_${u(n)?n.selector:n}`;
            return m.subscribe("dom_mutation", s, o), () => {
                m.unsubscribe("dom_mutation", o)
            }
        }, [f, n, m]), a
    };
export {
    y as a
};