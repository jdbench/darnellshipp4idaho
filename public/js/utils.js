export async function createFooterYear() {
    let t = new Date
      , e = (String(t.getDate()).padStart(2, "0"),
    String(t.getMonth() + 1),
    t.getFullYear());
    document.getElementById("year").innerHTML = e
}
export function createFooter() {
    document.getElementById("main-footer").innerHTML = '<div class="contact-info">\n    <h2 class="learn">Contact Information</h2>\n    <span class="contact-link"><i class="fa fa-envelope"></i><a href="mailto:darnellshipp4idaho@gmail.com">darnellshipp4idaho@gmail.com</a></span>\n    <span class="contact-link"><i class="fa fa-phone"></i><a href="tel:+12082069487">+1(208)206-9487</a></span>\n</div>\n<div class="social-media">\n    <span class="social-link"><i class="fa fa-facebook"></i><a href="https://www.facebook.com/DarnellShipp4Idaho-110510968201345">DarnellShipp4Idaho</a></span>\n</div>\n<div class="footer-info">\n    <p>&copy;<span id="year"></span> | Darnell R. Shipp | Idaho\n</div>'
}
export function createHeader() {
    document.getElementById("main-header").innerHTML = '<picture>\n    <source media="(max-width:600px)" srcset="/images/main-small-logo.png">\n    <source media="(max-width:960px)" srcset="/images/main-medium-logo.png">\n    <img src="/images/main-logo.png" alt="Darnell Shipp\'s web campaign logo" width="600" height="450">\n</picture>'
}
export function burger() {
    document.querySelector("#nav-icon").addEventListener("click", function() {
        this.classList.toggle("open"),
        document.querySelector(".main-nav").classList.toggle("flex")
    })
}
export async function dropdownText(t) {
    t.addEventListener("click", function() {
        this.parentNode.getElementsByTagName("div")[1].classList.toggle("expanded"),
        this.parentNode.getElementsByTagName("div")[1].classList.toggle("value-info"),
        this.querySelector("span").classList.toggle("rotated-caret")
    })
}
export function onReadyStateChange(element) {
    var state = document.readyState
    if (state == 'interactive') {
        element.style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
        document.getElementById('load').style.visibility="hidden";
        element.style.visibility="visible";
        },1000);
    }
}
export function docReady(t) {
    "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(t, 1) : document.addEventListener("DOMContentLoaded", t)
}
export async function fontAwesome() {
    var t;
    window.FontAwesomeKitConfig = {
        asyncLoading: {
            enabled: !1
        },
        autoA11y: {
            enabled: !0
        },
        baseUrl: "https://ka-f.fontawesome.com",
        baseUrlKit: "https://kit.fontawesome.com",
        detectConflictsUntil: null,
        iconUploads: {},
        id: 121972814,
        license: "free",
        method: "css",
        minify: {
            enabled: !0
        },
        token: "4472a98fb0",
        v4FontFaceShim: {
            enabled: !0
        },
        v4shim: {
            enabled: !0
        },
        v5FontFaceShim: {
            enabled: !1
        },
        version: "5.15.4"
    },
    t = function() {
        "use strict";
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(e)
        }
        function e(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function n(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })),
                n.push.apply(n, o)
            }
            return n
        }
        function o(t) {
            for (var o = 1; o < arguments.length; o++) {
                var r = null != arguments[o] ? arguments[o] : {};
                o % 2 ? n(Object(r), !0).forEach(function(n) {
                    e(t, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }
        function r(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = []
                      , o = !0
                      , r = !1
                      , i = void 0;
                    try {
                        for (var a, c = t[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value),
                        !e || n.length !== e); o = !0)
                            ;
                    } catch (t) {
                        r = !0,
                        i = t
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (r)
                                throw i
                        }
                    }
                    return n
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t)
                        return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function i(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++)
                o[n] = t[n];
            return o
        }
        function a(t, e) {
            var n = e && e.addOn || ""
              , o = e && e.baseFilename || t.license + n
              , r = e && e.minify ? ".min" : ""
              , i = e && e.fileSuffix || t.method
              , a = e && e.subdir || t.method;
            return t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/" + a + "/" + o + r + "." + i
        }
        function c(t, e) {
            var n = e || ["fa"]
              , o = "." + Array.prototype.join.call(n, ",.")
              , r = t.querySelectorAll(o);
            Array.prototype.forEach.call(r, function(e) {
                var n = e.getAttribute("title");
                e.setAttribute("aria-hidden", "true");
                var o = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only");
                if (n && o) {
                    var r = t.createElement("span");
                    r.innerHTML = n,
                    r.classList.add("sr-only"),
                    e.parentNode.insertBefore(r, e.nextSibling)
                }
            })
        }
        var s, u = function() {}, d = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit, f = "undefined" == typeof setImmediate ? setTimeout : setImmediate, l = [];
        function m() {
            for (var t = 0; t < l.length; t++)
                l[t][0](l[t][1]);
            l = [],
            s = !1
        }
        function h(t, e) {
            l.push([t, e]),
            s || (s = !0,
            f(m, 0))
        }
        function p(t) {
            var e = t.owner
              , n = e._state
              , o = e._data
              , r = t[n]
              , i = t.then;
            if ("function" == typeof r) {
                n = "fulfilled";
                try {
                    o = r(o)
                } catch (t) {
                    g(i, t)
                }
            }
            v(i, o) || ("fulfilled" === n && y(i, o),
            "rejected" === n && g(i, o))
        }
        function v(e, n) {
            var o;
            try {
                if (e === n)
                    throw new TypeError("A promises callback cannot return that same promise.");
                if (n && ("function" == typeof n || "object" === t(n))) {
                    var r = n.then;
                    if ("function" == typeof r)
                        return r.call(n, function(t) {
                            o || (o = !0,
                            n === t ? b(e, t) : y(e, t))
                        }, function(t) {
                            o || (o = !0,
                            g(e, t))
                        }),
                        !0
                }
            } catch (t) {
                return o || g(e, t),
                !0
            }
            return !1
        }
        function y(t, e) {
            t !== e && v(t, e) || b(t, e)
        }
        function b(t, e) {
            "pending" === t._state && (t._state = "settled",
            t._data = e,
            h(A, t))
        }
        function g(t, e) {
            "pending" === t._state && (t._state = "settled",
            t._data = e,
            h(S, t))
        }
        function w(t) {
            t._then = t._then.forEach(p)
        }
        function A(t) {
            t._state = "fulfilled",
            w(t)
        }
        function S(t) {
            t._state = "rejected",
            w(t),
            !t._handled && d && global.process.emit("unhandledRejection", t._data, t)
        }
        function E(t) {
            global.process.emit("rejectionHandled", t)
        }
        function O(t) {
            if ("function" != typeof t)
                throw new TypeError("Promise resolver " + t + " is not a function");
            if (this instanceof O == 0)
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._then = [],
            function(t, e) {
                function n(t) {
                    g(e, t)
                }
                try {
                    t(function(t) {
                        y(e, t)
                    }, n)
                } catch (t) {
                    n(t)
                }
            }(t, this)
        }
        O.prototype = {
            constructor: O,
            _state: "pending",
            _then: null,
            _data: void 0,
            _handled: !1,
            then: function(t, e) {
                var n = {
                    owner: this,
                    then: new this.constructor(u),
                    fulfilled: t,
                    rejected: e
                };
                return !e && !t || this._handled || (this._handled = !0,
                "rejected" === this._state && d && h(E, this)),
                "fulfilled" === this._state || "rejected" === this._state ? h(p, n) : this._then.push(n),
                n.then
            },
            catch: function(t) {
                return this.then(null, t)
            }
        },
        O.all = function(t) {
            if (!Array.isArray(t))
                throw new TypeError("You must pass an array to Promise.all().");
            return new O(function(e, n) {
                var o = []
                  , r = 0;
                function i(t) {
                    return r++,
                    function(n) {
                        o[t] = n,
                        --r || e(o)
                    }
                }
                for (var a, c = 0; c < t.length; c++)
                    (a = t[c]) && "function" == typeof a.then ? a.then(i(c), n) : o[c] = a;
                r || e(o)
            }
            )
        }
        ,
        O.race = function(t) {
            if (!Array.isArray(t))
                throw new TypeError("You must pass an array to Promise.race().");
            return new O(function(e, n) {
                for (var o, r = 0; r < t.length; r++)
                    (o = t[r]) && "function" == typeof o.then ? o.then(e, n) : e(o)
            }
            )
        }
        ,
        O.resolve = function(e) {
            return e && "object" === t(e) && e.constructor === O ? e : new O(function(t) {
                t(e)
            }
            )
        }
        ,
        O.reject = function(t) {
            return new O(function(e, n) {
                n(t)
            }
            )
        }
        ;
        var j = "function" == typeof Promise ? Promise : O;
        function F(t, e) {
            var n = e.fetch
              , o = e.XMLHttpRequest
              , r = e.token
              , i = t;
            return "URLSearchParams"in window ? (i = new URL(t)).searchParams.set("token", r) : i = i + "?token=" + encodeURIComponent(r),
            i = i.toString(),
            new j(function(t, e) {
                if ("function" == typeof n)
                    n(i, {
                        mode: "cors",
                        cache: "default"
                    }).then(function(t) {
                        if (t.ok)
                            return t.text();
                        throw new Error("")
                    }).then(function(e) {
                        t(e)
                    }).catch(e);
                else if ("function" == typeof o) {
                    var r = new o;
                    r.addEventListener("loadend", function() {
                        this.responseText ? t(this.responseText) : e(new Error(""))
                    }),
                    ["abort", "error", "timeout"].map(function(t) {
                        r.addEventListener(t, function() {
                            e(new Error(""))
                        })
                    }),
                    r.open("GET", i),
                    r.send()
                } else
                    e(new Error(""))
            }
            )
        }
        function L(t, e, n) {
            var o = t;
            return [[/(url\("?)\.\.\/\.\.\/\.\./g, function(t, n) {
                return "".concat(n).concat(e)
            }
            ], [/(url\("?)\.\.\/webfonts/g, function(t, o) {
                return "".concat(o).concat(e, "/releases/v").concat(n, "/webfonts")
            }
            ], [/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g, function(t, n) {
                return "".concat(n).concat(e)
            }
            ]].forEach(function(t) {
                var e = r(t, 2)
                  , n = e[0]
                  , i = e[1];
                o = o.replace(n, i)
            }),
            o
        }
        function x(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
              , r = e.document || r
              , i = c.bind(c, r, ["fa", "fab", "fas", "far", "fal", "fad", "fak"])
              , s = Object.keys(t.iconUploads || {}).length > 0;
            t.autoA11y.enabled && n(i);
            var u = [{
                id: "fa-main",
                addOn: void 0
            }];
            t.v4shim && t.v4shim.enabled && u.push({
                id: "fa-v4-shims",
                addOn: "-v4-shims"
            }),
            t.v5FontFaceShim && t.v5FontFaceShim.enabled && u.push({
                id: "fa-v5-font-face",
                addOn: "-v5-font-face"
            }),
            t.v4FontFaceShim && t.v4FontFaceShim.enabled && u.push({
                id: "fa-v4-font-face",
                addOn: "-v4-font-face"
            }),
            s && u.push({
                id: "fa-kit-upload",
                customCss: !0
            });
            var d = u.map(function(n) {
                return new j(function(r, i) {
                    F(n.customCss ? function(t) {
                        return t.baseUrlKit + "/" + t.token + "/" + t.id + "/kit-upload.css"
                    }(t) : a(t, {
                        addOn: n.addOn,
                        minify: t.minify.enabled
                    }), e).then(function(i) {
                        r(function(t, e) {
                            var n = e.contentFilter || function(t, e) {
                                return t
                            }
                              , o = document.createElement("style")
                              , r = document.createTextNode(n(t, e));
                            return o.appendChild(r),
                            o.media = "all",
                            e.id && o.setAttribute("id", e.id),
                            e && e.detectingConflicts && e.detectionIgnoreAttr && o.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
                            o
                        }(i, o(o({}, e), {}, {
                            baseUrl: t.baseUrl,
                            version: t.version,
                            id: n.id,
                            contentFilter: function(t, e) {
                                return L(t, e.baseUrl, e.version)
                            }
                        })))
                    }).catch(i)
                }
                )
            });
            return j.all(d)
        }
        function k(t, e) {
            var n = document.createElement("SCRIPT")
              , o = document.createTextNode(t);
            return n.appendChild(o),
            n.referrerPolicy = "strict-origin",
            e.id && n.setAttribute("id", e.id),
            e && e.detectingConflicts && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
            n
        }
        function _(t) {
            var e, n = [], o = document, r = (o.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
            r || o.addEventListener("DOMContentLoaded", e = function() {
                for (o.removeEventListener("DOMContentLoaded", e),
                r = 1; e = n.shift(); )
                    e()
            }
            ),
            r ? setTimeout(t, 0) : n.push(t)
        }
        try {
            if (window.FontAwesomeKitConfig) {
                var C = window.FontAwesomeKitConfig
                  , I = {
                    detectingConflicts: C.detectConflictsUntil && new Date <= new Date(C.detectConflictsUntil),
                    detectionIgnoreAttr: "data-fa-detection-ignore",
                    fetch: window.fetch,
                    token: C.token,
                    XMLHttpRequest: window.XMLHttpRequest,
                    document: document
                }
                  , T = document.currentScript
                  , P = T ? T.parentElement : document.head;
                (function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "js" === t.method ? function(t, e) {
                        e.autoA11y = t.autoA11y.enabled,
                        "pro" === t.license && (e.autoFetchSvg = !0,
                        e.fetchSvgFrom = t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/svgs",
                        e.fetchUploadedSvgFrom = t.uploadsUrl);
                        var n = [];
                        return t.v4shim.enabled && n.push(new j(function(n, r) {
                            F(a(t, {
                                addOn: "-v4-shims",
                                minify: t.minify.enabled
                            }), e).then(function(t) {
                                n(k(t, o(o({}, e), {}, {
                                    id: "fa-v4-shims"
                                })))
                            }).catch(r)
                        }
                        )),
                        n.push(new j(function(n, r) {
                            F(a(t, {
                                minify: t.minify.enabled
                            }), e).then(function(t) {
                                var r = k(t, o(o({}, e), {}, {
                                    id: "fa-main"
                                }));
                                n(function(t, e) {
                                    var n = e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0
                                      , o = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
                                    return void 0 !== o && t.setAttribute("data-auto-a11y", o ? "true" : "false"),
                                    n && (t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),
                                    t.setAttribute("data-fetch-svg-from", e.fetchSvgFrom),
                                    t.setAttribute("data-fetch-uploaded-svg-from", e.fetchUploadedSvgFrom)),
                                    t
                                }(r, e))
                            }).catch(r)
                        }
                        )),
                        j.all(n)
                    }(t, e) : "css" === t.method ? x(t, e, function(t) {
                        _(t),
                        function(t) {
                            "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, {
                                childList: !0,
                                subtree: !0
                            })
                        }(t)
                    }) : void 0
                }
                )(C, I).then(function(t) {
                    t.map(function(t) {
                        try {
                            P.insertBefore(t, T ? T.nextSibling : null)
                        } catch (e) {
                            P.appendChild(t)
                        }
                    }),
                    I.detectingConflicts && T && _(function() {
                        T.setAttributeNode(document.createAttribute(I.detectionIgnoreAttr));
                        var t = function(t, e) {
                            var n = document.createElement("script");
                            return e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),
                            n.src = a(t, {
                                baseFilename: "conflict-detection",
                                fileSuffix: "js",
                                subdir: "js",
                                minify: t.minify.enabled
                            }),
                            n
                        }(C, I);
                        document.body.appendChild(t)
                    })
                }).catch(function(t) {
                    console.error("".concat("Font Awesome Kit:", " ").concat(t))
                })
            }
        } catch (t) {
            console.error("".concat("Font Awesome Kit:", " ").concat(t))
        }
    }
    ,
    "function" == typeof define && define.amd ? define("kit-loader", t) : t()
}
