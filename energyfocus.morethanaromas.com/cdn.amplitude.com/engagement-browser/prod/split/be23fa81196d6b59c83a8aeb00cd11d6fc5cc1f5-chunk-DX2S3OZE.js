import {
    aa as i,
    ca as e
} from "./be23fa81196d6b59c83a8aeb00cd11d6fc5cc1f5-chunk-727OAI4D.js";
var o = () => i("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px 0",
            flex: 1
        }
    }, [0, 1, 2].map(t => i("div", {
        key: t,
        css: e({
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "currentColor",
            opacity: .4,
            animation: `pulse 1.5s infinite ${t*.2}s`,
            "@keyframes pulse": {
                "0%, 80%, 100%": {
                    opacity: .4
                },
                "40%": {
                    opacity: 1
                }
            }
        })
    }))),
    a = o;
export {
    a
};