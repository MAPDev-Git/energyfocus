var s = (o => (o.Local = "https://local.amplitude.com:3010/", o.Staging = "https://apps.stag2.amplitude.com/", o.Production = "https://app.amplitude.com/", o.ProductionEU = "https://app.eu.amplitude.com/", o))(s || {}),
    r = () => {
        try {
            let e = new URL(document.referrer).origin;
            return Object.values(s).some(t => new URL(t).origin === e)
        } catch (e) {
            return !1
        }
    },
    a = e => {
        if (typeof window < "u" && window.opener)
            for (let t of Object.values(s)) window.opener.postMessage({
                message: e
            }, t)
    };
export {
    r as a, a as b
};