webpackJsonp([ 0 ], {
    0: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }, u = n(1), a = o(u), c = n(165), i = o(c), l = n(195), f = o(l);
        n.p = window.__PUBLIC_PATH__ + "/";
        var d = window.__APP_SETTINGS__ || {}, s = function(e) {
            return new Promise(e).then(function(e) {
                return e["default"] || e;
            });
        }, p = {
            render: function(e, t) {
                console && console.time && void 0;
                var n = a["default"].render(e, t);
                return console && console.timeEnd && void 0, n;
            }
        }, _ = r({}, d, {
            hashType: "hashbang",
            container: "#root",
            context: r({
                preload: {}
            }, d.context, {
                isClient: !0,
                isServer: !1
            }),
            loader: s,
            routes: f["default"],
            viewEngine: p
        }), v = {};
        Array.from(document.querySelectorAll("[data-preload]")).forEach(function(e) {
            var t = e.getAttribute("data-preload"), n = e.textContent;
            v[t] = n;
        }), _.context.preload = v;
        var h = (0, i["default"])(_);
        h.start();
    },
    195: function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(196), u = o(r), a = n(222), c = o(a), i = [ u["default"], c["default"] ];
        t["default"] = i.reduce(function(e, t) {
            return t ? e.concat(t) : e;
        }, []);
    },
    196: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = [ {
            path: "/template",
            controller: n(197)
        }, {
            path: "/template/*",
            controller: n(220)
        } ];
    },
    197: function(e, t, n) {
        e.exports = function(e) {
            n.e(1, function(t) {
                e(n(198));
            });
        };
    },
    220: function(e, t, n) {
        e.exports = function(e) {
            n.e(2, function(t) {
                e(n(221));
            });
        };
    },
    222: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = [];
    }
});