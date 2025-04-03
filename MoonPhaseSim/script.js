!(function (t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var s = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var s in t)
                    i.d(
                        n,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return n;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ""),
        i((i.s = 26));
})([
    function (t, e, i) {
        "use strict";
        t.exports = function (t) {
            var e = [];
            return (
                (e.toString = function () {
                    return this.map(function (e) {
                        var i = (function (t, e) {
                            var i = t[1] || "",
                                n = t[3];
                            if (!n) return i;
                            if (e && "function" == typeof btoa) {
                                var s = ((a = n), (o = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (h = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o)), "/*# ".concat(h, " */")),
                                    r = n.sources.map(function (t) {
                                        return "/*# sourceURL=".concat(n.sourceRoot).concat(t, " */");
                                    });
                                return [i].concat(r).concat([s]).join("\n");
                            }
                            var a, o, h;
                            return [i].join("\n");
                        })(e, t);
                        return e[2] ? "@media ".concat(e[2], "{").concat(i, "}") : i;
                    }).join("");
                }),
                (e.i = function (t, i) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var n = {}, s = 0; s < this.length; s++) {
                        var r = this[s][0];
                        null != r && (n[r] = !0);
                    }
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a];
                        (null != o[0] && n[o[0]]) || (i && !o[2] ? (o[2] = i) : i && (o[2] = "(".concat(o[2], ") and (").concat(i, ")")), e.push(o));
                    }
                }),
                e
            );
        };
    },
    function (t, e, i) {
        var n,
            s,
            r = {},
            a =
                ((n = function () {
                    return window && document && document.all && !window.atob;
                }),
                function () {
                    return void 0 === s && (s = n.apply(this, arguments)), s;
                }),
            o = function (t, e) {
                return e ? e.querySelector(t) : document.querySelector(t);
            },
            h = (function (t) {
                var e = {};
                return function (t, i) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var n = o.call(this, t, i);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (t) {
                                n = null;
                            }
                        e[t] = n;
                    }
                    return e[t];
                };
            })(),
            d = null,
            l = 0,
            c = [],
            _ = i(17);
        function u(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i],
                    s = r[n.id];
                if (s) {
                    s.refs++;
                    for (var a = 0; a < s.parts.length; a++) s.parts[a](n.parts[a]);
                    for (; a < n.parts.length; a++) s.parts.push(f(n.parts[a], e));
                } else {
                    var o = [];
                    for (a = 0; a < n.parts.length; a++) o.push(f(n.parts[a], e));
                    r[n.id] = { id: n.id, refs: 1, parts: o };
                }
            }
        }
        function m(t, e) {
            for (var i = [], n = {}, s = 0; s < t.length; s++) {
                var r = t[s],
                    a = e.base ? r[0] + e.base : r[0],
                    o = { css: r[1], media: r[2], sourceMap: r[3] };
                n[a] ? n[a].parts.push(o) : i.push((n[a] = { id: a, parts: [o] }));
            }
            return i;
        }
        function g(t, e) {
            var i = h(t.insertInto);
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = c[c.length - 1];
            if ("top" === t.insertAt) n ? (n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e)) : i.insertBefore(e, i.firstChild), c.push(e);
            else if ("bottom" === t.insertAt) i.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var s = h(t.insertAt.before, i);
                i.insertBefore(e, s);
            }
        }
        function p(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = c.indexOf(t);
            e >= 0 && c.splice(e, 1);
        }
        function b(t) {
            var e = document.createElement("style");
            if ((void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce)) {
                var n = (function () {
                    0;
                    return i.nc;
                })();
                n && (t.attrs.nonce = n);
            }
            return w(e, t.attrs), g(t, e), e;
        }
        function w(t, e) {
            Object.keys(e).forEach(function (i) {
                t.setAttribute(i, e[i]);
            });
        }
        function f(t, e) {
            var i, n, s, r;
            if (e.transform && t.css) {
                if (!(r = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
                t.css = r;
            }
            if (e.singleton) {
                var a = l++;
                (i = d || (d = b(e))), (n = v.bind(null, i, a, !1)), (s = v.bind(null, i, a, !0));
            } else
                t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((i = (function (t) {
                          var e = document.createElement("link");
                          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), (t.attrs.rel = "stylesheet"), w(e, t.attrs), g(t, e), e;
                      })(e)),
                      (n = E.bind(null, i, e)),
                      (s = function () {
                          p(i), i.href && URL.revokeObjectURL(i.href);
                      }))
                    : ((i = b(e)),
                      (n = C.bind(null, i)),
                      (s = function () {
                          p(i);
                      }));
            return (
                n(t),
                function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        n((t = e));
                    } else s();
                }
            );
        }
        t.exports = function (t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}), e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var i = m(t, e);
            return (
                u(i, e),
                function (t) {
                    for (var n = [], s = 0; s < i.length; s++) {
                        var a = i[s];
                        (o = r[a.id]).refs--, n.push(o);
                    }
                    t && u(m(t, e), e);
                    for (s = 0; s < n.length; s++) {
                        var o;
                        if (0 === (o = n[s]).refs) {
                            for (var h = 0; h < o.parts.length; h++) o.parts[h]();
                            delete r[o.id];
                        }
                    }
                }
            );
        };
        var y,
            A =
                ((y = []),
                function (t, e) {
                    return (y[t] = e), y.filter(Boolean).join("\n");
                });
        function v(t, e, i, n) {
            var s = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = A(e, s);
            else {
                var r = document.createTextNode(s),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
            }
        }
        function C(t, e) {
            var i = e.css,
                n = e.media;
            if ((n && t.setAttribute("media", n), t.styleSheet)) t.styleSheet.cssText = i;
            else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i));
            }
        }
        function E(t, e, i) {
            var n = i.css,
                s = i.sourceMap,
                r = void 0 === e.convertToAbsoluteUrls && s;
            (e.convertToAbsoluteUrls || r) && (n = _(n)), s && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */");
            var a = new Blob([n], { type: "text/css" }),
                o = t.href;
            (t.href = URL.createObjectURL(a)), o && URL.revokeObjectURL(o);
        }
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/Boston2_v2-modified_sun.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/Boston2_v2-modified_sun-gradient.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/time-tickmarks-2.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/Boston2_v1_moon-fixed.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/Boston2_v6_earth-snowcap-fixed.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/Boston2_v5b-modified_stickfigure-extraextrawide.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/play-icons_v2_play.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/play-icons_v2_pause.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/double-back-white.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/back-white.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/double-forward-white.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/forward-white.svg";
    },
    function (t, e, i) {
        t.exports = i.p + "LunarPhasesAsset3_v1-1-0/fullmoon.png";
    },
    function (t, e, i) {
        var n = i(16);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var s = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, s);
        n.locals && (t.exports = n.locals);
    },
    function (t, e, i) {
        (t.exports = i(0)(!1)).push([
            t.i,
            '/*\ncss/Asset3.css\nwgbh-asset3\nastro.unl.edu\n2020-05-28\n*/\n\n/*\nThe sim takes over control of the entire viewport.\n*/\n\nhtml {\n\twidth: 100%;\n\theight: 100%;\n}\n\nbody {\n  touch-action: none;\n\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground-color: rgb(15, 15, 15);\n\n\t/* overflow may be overridden in media queries. */ \n\toverflow: hidden;\n}\n\n\n/*\n=== Upper-Level Containers ===\n\n- root\n + - inner\n\t\t+ - primary (contains the orbit diagram)\n\t\t\t- secondary (contains control panel (incl. info), and moon phase panel)\nIn portrait layout, primary is at top and secondary is at bottom.\nIn landscape, primary is at left and secondary is at right.\n*/\n\n.wgbh-asset3-root {\n\t--text-color: rgb(220, 220, 220);\n\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n\toverflow: visible;\n\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n}\n\n.wgbh-asset3-inner {\n\tposition: relative;\n\tmargin: 0 auto;\n\tpadding: 0;\n\tborder: 0;\n\tbackground-color: rgb(24, 24, 24);/*black;*/\n\n\twidth: 100%;\n\theight: 100%;\n\t\n\t/* min dimensions and flex direction set in media queries. */\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n.wgbh-asset3-primary {\n\tflex-shrink: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n}\n\n.wgbh-asset3-secondary {\n\tflex-shrink: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\t\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n\n/*\n=== Orbit Diagram ===\n*/\n\n.wgbh-asset3-orbit-diagram {\n\tmargin: 0 !important;\n}\n\n\n/*\n=== Control Panel ===\n*/\n\n.wgbh-asset3-control-panel {\n\tposition: relative;\n\tflex: 0 0 65%;\n\n\twidth: 65%;\n\t\n\toverflow: hidden;\n\n\tmax-width: 50rem;\n\tmax-height: 100%;\n\t\n\tdisplay: inline-block;\n\tmargin: 0;\n\tmargin-bottom: calc(0.2rem + 0.04*var(--vertical-scaling-range));\n\n\tpadding: 0;\n\tborder: 0;\t\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\t\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n.wgbh-asset3-control-panel-section {\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n.wgbh-asset3-control-panel-readout {\n\tflex: 1 0 auto;\n\tmin-width: 9em;\n\tmargin: calc(0.2rem + 0.04*var(--vertical-scaling-range)) 0 0 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-family: sans-serif;\t\n\tcolor: var(--text-color);\n}\n\n.wgbh-asset3-control-panel-readout-label {\n\twidth: 100%;\n\tmargin: 0 0 0.3rem 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 0.75em;\n\twhite-space: nowrap;\n}\n\n.wgbh-asset3-control-panel-readout-value {\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 1em;\n\twhite-space: nowrap;\n}\n\n.wgbh-asset3-control-buttons {\n\twidth: 100%;\n\tmargin: calc(0rem + 0.04*var(--vertical-scaling-range)) 0 0 0;\n\tpadding: 0;\n\ttext-align: center;\n}\n\n.wgbh-asset3-control-buttons-top {\n\tdisplay: block;\n\tmargin: 0; \n\tpadding: 0;\n}\n\n.wgbh-asset3-control-buttons-left {\n\tdisplay: inline-block;\n\tmargin: 0 auto;\n\tpadding: 0;\n}\n\n.wgbh-asset3-control-buttons-right {\n\tdirection: rtl;\n\tdisplay: inline-block;\n\tmargin: 0 auto;\n\tpadding: 0;\n}\n\n.wgbh-asset3-control-panel-readout {\n\tfont-size: calc(0.7rem + 0.03*var(--secondary-width-range)) !important;\n}\n\n.wgbh-asset3-phase-readout {\n\tfont-size: calc(0.7rem + 0.03*var(--secondary-width-range)) !important;\n}\n\n.wgbh-asset3-root .wgbh-checkbox {\n\tfont-size: calc(0.7rem + 0.025*var(--secondary-width-range)) !important;\n}\n\n.wgbh-asset3-play-pause {\n  background-color: #ffe61e !important;\n\tbox-shadow: 0 4px 0 0 #ffba09 !important;\n\n\tfont-size: calc(1rem + 0.025*var(--secondary-width-range)) !important;\n\tpadding: calc(0.2rem + 0.01*var(--secondary-width-range)) !important;\n\theight: calc(1.8rem + 0.025*var(--secondary-width-range)) !important;\n\twidth: calc(6rem + 0.05*var(--secondary-width-range)) !important;\n\tmargin: 0.5em 0.3em !important;\n}\n\n.wgbh-asset3-skip {\n\tcolor: white !important;\n  background-color: #484848 !important;\n\tbox-shadow: 0 4px 0 0 #181818 !important;\n\tborder: 1px solid white !important;\n\n\tfont-size: calc(1rem + 0.01*var(--secondary-width-range)) !important;\n\tpadding: 0.2rem !important;\n\theight: calc(1.7rem + 0.015*var(--secondary-width-range)) !important;\n\twidth: calc(6rem + 0.05*var(--secondary-width-range)) !important;\n\tmargin: 0.5em 0.3em !important;\n}\n\n.wgbh-asset3-control-panel .wgbh-checkbox label {\n\tcolor: var(--text-color);\n}\n\n.wgbh-asset3-control-panel .wgbh-checkbox-indicator {\n\tborder-color: var(--text-color);\n}\n\n.wgbh-asset3-control-panel .wgbh-checkbox-indicator:after {\n\tborder-color: var(--text-color);\n}\n\n.wgbh-asset3-moon-rise {\n\tcolor: rgb(200, 200, 255) !important;\n}\n\n.wgbh-asset3-moon-set {\n\tcolor: rgb(255, 200, 200) !important;\n}\n\n\n/*\n=== Phase Panel ===\n*/\n\n.wgbh-asset3-phase-panel {\n\tflex: 0 0 35%;\n\tposition: relative;\n\tdisplay: inline-block;\n\n\twidth: 35%;\n\n\tmax-width: 20rem;\n\tmax-height: 100%;\n\tmargin: 0;\n\tmargin-bottom: calc(0.5rem + 0.04*var(--vertical-scaling-range));\n\n\tpadding: 0;\n\tborder: 0;\t\n\tbox-sizing: border-box;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n}\n\n.wgbh-asset3-phase-readout {\n\tmargin: 0 auto;\n\tpadding: 0;\n\tborder: 0;\n\tfont-family: sans-serif;\t\n\tcolor: var(--text-color);\n\n}\n\n.wgbh-asset3-phase-readout-value {\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0 0.25em;\n\tborder: 0;\n\tfont-size: 1em;\n\twhite-space: normal;\n\tline-height: 1.3;\n}\n\n.wgbh-asset3-phase-panel .wgbh-moon-phase-image {\n\tposition: relative;\n\twidth: 90% !important;\n}\n\n\n/*\n=== Control Panel Buttons Arrangement ===\n\nThere are two distinct CSS-level arrangments for the buttons:\n\tNarrow: The play/pause buttons appear on top of the left and right sets\n\t\t\t\t\tof skip buttons.\n\t  Wide:\tThe play/pause buttons and the skip button sets are in a row.\nIn both arrangements the left and right sets of skip buttons may be\nside-by-side or they may be stacked (this is deteremined by CSS).\n*/\n\n/* Default: use wide control buttons arrangement. */\n\n.wgbh-asset3-control-buttons {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.wgbh-asset3-control-buttons-left {\n\tflex: 1 1 30%;\n\torder: 1;\n}\n\n.wgbh-asset3-control-buttons-top {\n\tflex: 1 1 20%;\n\torder: 2;\n}\n\n.wgbh-asset3-control-buttons-right {\n\tflex: 1 1 30%;\n\torder: 3;\n}\n\n\n/*\nDO NOT CHANGE the aspect ratio threshold (which appears in multiple places) without also\n\tchanging the value in the window.matchMedia call in LunarPhasesAsset3.js.\n\nViewport aspect ratios equal to or greater than the threshold are called "landscape" and\n\teverything else is called "portrait".\n*/\n\n\n/*\n=== Portrait Layout (aspect ratio < 1.60) ===\n*/\n\n@media (max-aspect-ratio: 160/100) {\n\t.wgbh-asset3-inner {\n\t\tmin-width: 20rem;\n\t\tmin-height: 33rem;\n\t\tflex-direction: column;\n\t}\n\t.wgbh-asset3-secondary {\n\t\twidth: 100%;\n\t}\n}\n\n/* Portrait scrollbars. */\n@media (max-aspect-ratio: 160/100) and (max-width: 20rem) {\n\tbody {\n\t\toverflow-x: scroll;\n\t}\n}\n@media (max-aspect-ratio: 160/100) and (max-height: 33rem) {\n\tbody {\n\t\toverflow-y: scroll;\n\t}\n}\n\n/* Portrait vertical scaling. */\n@media (max-aspect-ratio: 160/100) and (max-height: 35rem) {\n\t.wgbh-asset3-root {\n\t\t--vertical-scaling-range: 0rem;\n\t}\n}\n@media (max-aspect-ratio: 160/100) and (min-height: 35rem) and (max-height: 60rem) {\n\t.wgbh-asset3-root {\n\t\t--vertical-scaling-range: calc(100vh - 35rem);\n\t}\n}\n@media (max-aspect-ratio: 160/100) and (min-height: 60rem) {\n\t.wgbh-asset3-root {\n\t\t--vertical-scaling-range: 25rem;\n\t}\n}\n\n/* Portrait 1: width < 20rem */\n@media (max-aspect-ratio: 160/100) and (max-width: 20rem) {\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: 0rem;\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/* Portrait 2: 20rem <= width < 40rem */\n@media (max-aspect-ratio: 160/100) and (min-width: 20rem) and (max-width: 40rem) {\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: calc(100vw - 20rem);\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/* Portrait 3: 40rem <= width */\n@media (max-aspect-ratio: 160/100) and (min-width: 40rem) {\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: 20rem;\n\t}\n}\n\n\n/*\n=== Landscape Layout (aspect ratio >= 1.60) ===\n\nDue to CSS pecularities and the fact that a wide control buttons arrangement is\n\tassumed as the default, a narrow control buttons arrangement may used when not expected\n\twhen width is exactly at a transition point (e.g. Landscape 7 when width = 80rem).\n\tThis is not a problem.\n*/\n\n@media (min-aspect-ratio: 160/100) {\n\t.wgbh-asset3-inner {\n\t\tmin-width: 33rem;\n\t\tmin-height: 20rem;\n\t\tflex-direction: row;\n\t}\n}\n\n/* Landscape scrolling. */\n@media (min-aspect-ratio: 160/100) and (max-width: 33rem) {\n\tbody {\n\t\toverflow-x: scroll;\n\t}\n}\n@media (min-aspect-ratio: 160/100) and (max-height: 20rem) {\n\tbody {\n\t\toverflow-y: scroll;\n\t}\n}\n\n/* Landscape vertical scaling. */\n@media (min-aspect-ratio: 160/100) and (max-height: 35rem) {\n\t.wgbh-asset3-root {\n\t\t--vertical-scaling-range: 0rem;\n\t}\n}\n@media (min-aspect-ratio: 160/100) and (min-height: 35rem) and (max-height: 60rem) {\n\t.wgbh-asset3-root {\n\t\t--vertical-scaling-range: calc(100vh - 35rem);\n\t}\n}\n@media (min-aspect-ratio: 160/100) and (min-height: 60rem) {\n\t.wgbh-asset3-root {\n\t\t--vertical-scaling-range: 25rem;\n\t}\n}\n\n/* Landscape 1: width < 33rem, all heights -- moon at left */\n@media (min-aspect-ratio: 160/100) and (max-width: 33rem) {\n\t.wgbh-asset3-secondary {\n/*\t\tbackground-color: rgba(255, 255, 255, 0.5);*/\n\t\twidth: 20rem;\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: 0rem;\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/* Landscape 2: 33rem <= width < 60rem, all heights -- moon at left */\n@media (min-aspect-ratio: 160/100) and (min-width: 33rem) and (max-width: 60rem) {\n\t.wgbh-asset3-secondary {\n/*\t\tbackground-color: rgba(0, 255, 0, 0.5);*/\n\t\twidth: calc(20rem + 0.4255*(100vw - 33rem));\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: calc(0.4255*(100vw - 33rem));\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/*\nDO NOT CHANGE the moon-at-left / moon-on-top height threshold (used in multiple locations)\n\twithout updating the value used in the window.matchMedia call in LunarPhasesAsset3.js.\n*/\n\n/* Landscape 3: 60rem <= width < 80rem, height < 34rem -- moon at left */\n@media (min-aspect-ratio: 160/100) and (min-width: 60rem) and (max-width: 80rem) and (max-height: 34rem) {\n\t.wgbh-asset3-secondary {\n/*\t\tbackground-color: rgba(255, 0, 0, 0.5);*/\n\t\twidth: calc(20rem + 0.4255*(100vw - 33rem));\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: calc(0.4255*(100vw - 33rem));\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/* Landscape 4: 80rem <= width, height < 34rem -- moon at left. */\n@media (min-aspect-ratio: 160/100) and (min-width: 80rem) and (max-height: 34rem) {\n\t.wgbh-asset3-secondary {\n/*\t\tbackground-color: rgba(0, 0, 255, 0.5);*/\n\t\twidth: 40rem;\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: 20rem;\n\t}\n}\n\n/* Landscape 5: 60rem <= width < 68rem, height >= 34rem -- moon on top\n\tNote: secondary-with-range is intentionally out of sync with width to make the text larger. */\n@media (min-aspect-ratio: 160/100) and (min-width: 60rem) and (max-width: 68rem) and (min-height: 34rem) {\n\t.wgbh-asset3-secondary {\n\t\tflex-direction: column;\n/*\t\tbackground-color: rgba(255, 255, 0, 0.5);*/\n\t\twidth: 20rem;\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: 12rem;\n\t}\n\t.wgbh-asset3-control-panel {\n\t\twidth: 100%;\n\t}\n\t.wgbh-asset3-phase-panel {\n\t\twidth: 100%;\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/* Landscape 6: 68rem <= width < 80rem, height >= 34rem -- moon on top\n\tNote: secondary-with-range is intentionally out of sync with width to make the text larger. */\n@media (min-aspect-ratio: 160/100) and (min-width: 68rem) and (max-width: 80rem) and (min-height: 34rem) {\n\t.wgbh-asset3-secondary {\n\t\tflex-direction: column;\n/*\t\tbackground-color: rgba(255, 0, 255, 0.5);*/\n\t\twidth: calc(20rem + 0.4545*(100vw - 68rem));\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: calc(12rem + 0.3636*(100vw - 68rem));\n\t}\n\t.wgbh-asset3-control-panel {\n\t\twidth: 100%;\n\t}\n\t.wgbh-asset3-phase-panel {\n\t\twidth: 100%;\n\t}\n\t/* Use narrow control buttons arragement */\n\t.wgbh-asset3-control-buttons {\n\t\tdisplay: block;\n\t}\n\t.wgbh-asset3-control-buttons-top {\n\t\twidth: 100%;\t\n\t}\n\t.wgbh-asset3-control-buttons-left {\n\t\twidth: 50%;\n\t}\n\t.wgbh-asset3-control-buttons-right {\n\t\twidth: 50%;\n\t}\n}\n\n/* Landscape 7: 80rem <= width < 90rem, height >= 34rem -- moon on top\n\tNote: secondary-with-range is intentionally out of sync with width to make the text larger. */\n@media (min-aspect-ratio: 160/100) and (min-width: 80rem) and (max-width: 90rem) and (min-height: 34rem) {\n\t.wgbh-asset3-secondary {\n\t\tflex-direction: column;\n/*\t\tbackground-color: rgba(255, 128, 0, 0.5);*/\n\t\twidth: calc(20rem + 0.4545*(100vw - 68rem));\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: calc(12rem + 0.3636*(100vw - 68rem));\n\t}\n\t.wgbh-asset3-control-panel {\n\t\twidth: 100%;\n\t}\n\t.wgbh-asset3-phase-panel {\n\t\twidth: 100%;\n\t}\n}\n\n/* Landscape 8: 90 <= width, height >= 34rem -- moon on top */\n@media (min-aspect-ratio: 160/100) and (min-width: 90rem) and (min-height: 34rem) {\n\t.wgbh-asset3-secondary {\n\t\tflex-direction: column;\n/*\t\tbackground-color: rgba(0, 255, 255, 0.5);*/\n\t\twidth: 30rem;\n\t}\n\t.wgbh-asset3-root {\n\t\t--secondary-width-range: 20rem;\n\t}\n\t.wgbh-asset3-control-panel {\n\t\twidth: 100%;\n\t}\n\t.wgbh-asset3-phase-panel {\n\t\twidth: 100%;\n\t}\n}\n\n\n',
            "",
        ]);
    },
    function (t, e) {
        t.exports = function (t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var i = e.protocol + "//" + e.host,
                n = i + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                var s,
                    r = e
                        .trim()
                        .replace(/^"(.*)"$/, function (t, e) {
                            return e;
                        })
                        .replace(/^'(.*)'$/, function (t, e) {
                            return e;
                        });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : ((s = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? i + r : n + r.replace(/^\.\//, "")), "url(" + JSON.stringify(s) + ")");
            });
        };
    },
    function (t, e, i) {
        var n = i(19);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var s = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, s);
        n.locals && (t.exports = n.locals);
    },
    function (t, e, i) {
        (t.exports = i(0)(!1)).push([
            t.i,
            "/*\nOrbitDiagram.css\nwgbh-orbit-diagram\nastro.unl.edu\n2019-08-14\n*/\n\n\n.wgbh-orbit-diagram-root {\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n\tbackground-color: black;\n\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\n\tposition: relative;\n\n\toverflow: hidden;\n\n\ttext-align: center;\n}\n\n.wgbh-orbit-diagram-svg {\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n}\n\n.wgbh-orbit-diagram-note {\n\tmargin: 0 0.2rem 0.2rem 0;\n\tfont-size: 0.8rem;\n\tpadding: 0;\n\tborder: 0;\n\tposition: absolute;\n\tcolor: white;\n\tfont-family: sans-serif;\n\tfont-style: italic;\n\tright: 0;\n\tbottom: 0;\n\ttext-align: center;\n}\n\n.wgbh-orbit-diagram-element-focusarea:focus {\n\toutline: none;\n\tborder: 0;\n}\n\n.wgbh-orbit-diagram-element-focusarea::-moz-focus-inner {\n\tborder: 0;\n}\n\n.wgbh-orbit-diagram-init-message-text {\n\twidth: 12.5em;\n\tpadding: 0.9em 1.1em;\n\tposition: absolute;\n\tdisplay: block;\n\tbackground-color: white;\n\tborder: 3px solid rgba(190, 190, 190, 1);\n\tborder-radius: 0.9em;\n\tcolor: black;\n\tfont-family: sans-serif;\n\tfont-size: 1em;\n\ttransform: translateX(-50%);\n}\n\n.wgbh-orbit-diagram-dismissed {\n\tvisibility: hidden;\n\topacity: 0;\n\ttransition: visibility 0s 0.5s, opacity 0.5s linear;\t\n}\n\n.wgbh-orbit-diagram-shown {\n\tvisibility: visible;\n\topacity: 1;\n}\n\n.wgbh-orbit-diagram-not-shown {\n\tvisibility: hidden;\n\topacity: 0;\n}\n\n.wgbh-orbit-diagram-rem-sampler {\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n\twidth: 1rem;\n\theight: 1rem;\n\tposition: absolute;\n\ttop: -9999px;\n\tleft: -9999px;\n}\n\n\n",
            "",
        ]);
    },
    function (t, e, i) {
        var n = i(21);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var s = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, s);
        n.locals && (t.exports = n.locals);
    },
    function (t, e, i) {
        (t.exports = i(0)(!1)).push([
            t.i,
            "/*\ncss/Button.css\nwgbh-ui\nastro.unl.edu\n2019-08-21\n*/\n\n\n.wgbh-button {\n\tfont-family: sans-serif;\n\tfont-weight: 600;\n\tdirection: ltr;\n\tdisplay: inline-block;\n\tcolor: black;\n\tcursor: pointer;\n\tborder: none;\n  border-radius: 14px;\n\tbackground-color: rgb(235, 235, 235);\n}\n\n.wgbh-button div {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\tline-height: 1;\n}\n\n.wgbh-button img {\n\tdisplay: inline-block;\n\tmargin: 0;\n\theight: 0.8em;\n}\n\t\n.wgbh-button span {\n\tpadding: 0.1em 0 0 0;\n\tmargin: 0;\n}\n\n.wgbh-button img + span {\n\tmargin-left: 0.5rem;\n}\n\n.wgbh-button:not([disabled]):active {\n\ttransform: translateY(4px);\n\tbox-shadow: none;\n}\n\n.wgbh-button:disabled {\n\topacity: 0.6;\n\tcursor: default;\n}\n\n.wgbh-button:focus {\n\toutline: 6px solid white;\n\toutline-offset: 3px;\n\tborder: none;\n}\n\n.wgbh-button::-moz-focus-inner {\n\tborder: none;\n}\n\n\n",
            "",
        ]);
    },
    function (t, e, i) {
        var n = i(23);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var s = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, s);
        n.locals && (t.exports = n.locals);
    },
    function (t, e, i) {
        (t.exports = i(0)(!1)).push([
            t.i,
            "/*\ncss/Checkbox.css\nwgbh-ui\nastro.unl.edu\n2019-08-13\n*/\n\n.wgbh-checkbox {\n\tfont-family: sans-serif;\n\tfont-weight: 500;\n\tdirection: ltr;\n\twhite-space: nowrap;\n\tfont-size: 1.2rem;\n\tdisplay: inline-block;\n\tpadding: 0;\n\tmargin: 9px 1.5em 0 1.5em;\n\theight: 1.5em;\n\tborder: 0;\n\ttext-align: left;\n}\n\n.wgbh-checkbox-focused {\n\toutline: 6px solid white;\n\toutline-offset: 3px;\n\tborder: none;\n}\n\n.wgbh-checkbox label {\n\tposition: relative;\n\tcolor: white;\n\tmargin: 0 0.2rem;\n\tpadding: 0;\n}\n\n.wgbh-checkbox label span {\n\tvertical-align: middle;\n}\n\n.wgbh-checkbox input {\n\tposition: absolute;\n\topacity: 0;\n\tz-index: -1;\n}\n\n.wgbh-checkbox-indicator {\n\tposition: relative;\n\tvertical-align: middle;\n\tdisplay: inline-block;\n\tmargin: 0 0.5rem 0 0;\n\theight: 1em;\n\twidth: 1em;\n\n\tbox-sizing: border-box;\n\tborder: 2px solid white;\n\tborder-radius: 4px;\n}\n\n.wgbh-checkbox-indicator:after {\n\tcontent: '';\n\tdisplay: none;\n}\n\n.wgbh-checkbox input:checked ~ .wgbh-checkbox-indicator:after {\n\tdisplay: block;\n}\n\n.wgbh-checkbox-indicator:after {\n\tposition: relative;\n  left: 0.22em;\n  top: 0.01em;\n  width: 0.2em;\n  height: 0.5em;\n  border: solid #fff;\n  border-width: 0 0.17em 0.17em 0;\n  transform: rotate(45deg);\n}\n\n",
            "",
        ]);
    },
    function (t, e, i) {
        var n = i(25);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var s = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, s);
        n.locals && (t.exports = n.locals);
    },
    function (t, e, i) {
        (t.exports = i(0)(!1)).push([
            t.i,
            "/*\ncss/MoonPhaseImage.css\nwgbh-moon-phase-image\nastro.unl.edu\n2019-08-27\n*/\n\n\n.wgbh-moon-phase-image {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 0;\n\tborder: 0;\n\toverflow: hidden;\n}\n\n.wgbh-moon-phase-image-svg {\n\tposition: relative;\n\tdisplay: block;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n\tmargin: 0;\n\tpadding: 0;\n\tborder: none;\n\toverflow: hidden;\n}\n\n",
            "",
        ]);
    },
    function (t, e, i) {
        "use strict";
        i.r(e);
        i(15);
        console.info("WGBH Lunar Timekeeper (version: 1.0)");
        class n {
            constructor(t) {
                if (((this._CALENDAR_PERIOD_IN_DAYS = 30), (this._SYNODIC_PERIOD_IN_DAYS = this._CALENDAR_PERIOD_IN_DAYS), "object" == typeof t)) {
                    if (t.hasOwnProperty("calendarPeriodInDays"))
                        if (Number.isFinite(t.calendarPeriodInDays)) {
                            let e = Math.floor(t.calendarPeriodInDays);
                            e >= 28 && e <= 31
                                ? ((this._CALENDAR_PERIOD_IN_DAYS = e), e !== t.calendarPeriodInDays && console.error("calendarPeriodInDays must be an integer. The fractional part was ignored."))
                                : console.error("calendarPeriodInDays must be an integer between 28 and 31 days. The provided value will be ignored.");
                        } else console.error("calendarPeriodInDays must be an integer between 28 and 31 days. The provided value will be ignored.");
                    if (((this._SYNODIC_PERIOD_IN_DAYS = this._CALENDAR_PERIOD_IN_DAYS), t.hasOwnProperty("synodicPeriodInDays")))
                        if (Number.isFinite(t.synodicPeriodInDays)) {
                            let e = t.synodicPeriodInDays;
                            e >= 28 && e <= 31 ? (this._SYNODIC_PERIOD_IN_DAYS = e) : console.error("synodicPeriodInDays must be a number beween 28 and 31. The provided value will be ignored.");
                        } else console.error("synodicPeriodInDays must be a number beween 28 and 31. The provided value will be ignored.");
                }
                if (
                    ((this._ATU_PER_MINUTE = 60),
                    (this._ATU_PER_HOUR = 60 * this._ATU_PER_MINUTE),
                    (this._ATU_PER_DAY = 24 * this._ATU_PER_HOUR),
                    (this._CALENDAR_PERIOD = this._CALENDAR_PERIOD_IN_DAYS * this._ATU_PER_DAY),
                    (this._SYNODIC_PERIOD = Math.round(this._SYNODIC_PERIOD_IN_DAYS * this._ATU_PER_DAY)),
                    (this._SYNODIC_OFFSET = 12 * this._ATU_PER_HOUR),
                    (this._TIME_CYCLE = this._SYNODIC_PERIOD * this._CALENDAR_PERIOD),
                    2 * this._TIME_CYCLE > Number.MAX_SAFE_INTEGER)
                )
                    throw new Error("TIME_CYCLE is greater than MAX_SAFE_INTEGER. Correct timekeeping is not possible.");
                (this._changeCallback = null),
                    (this._minTransitionDurationMS = 250),
                    (this._maxTransitionDurationMS = 1e3),
                    (this._secondsPerCalendarPeriod = 180),
                    (this._hasTimeChanged = !0),
                    (this._hasAnimationStateChanged = !0),
                    (this._isPlaying = !1),
                    (this._animFrameId = null),
                    (this._animFrameHandler = this._animFrameHandler.bind(this)),
                    this._setTime(0);
            }
            setChangeCallback(t) {
                this._changeCallback = "function" == typeof t ? t : null;
            }
            setSecondsPerCalendarPeriod(t) {
                if (!Number.isFinite(t)) return void console.error("secondsPerCalendarPeriod must be a valid number.");
                t < 20
                    ? (console.error("secondsPerCalendarPeriod was too low. It will be set to the allowed minimum."), (t = 20))
                    : t > 2e3 && (console.error("secondsPerCalendarPeriod was too high. It will be set to the allowed maximum."), (t = 2e3)),
                    (this._secondsPerCalendarPeriod = t),
                    this._recalcAnimPlayingParams();
            }
            clearFlags() {
                (this._hasTimeChanged = !1), (this._hasAnimationStateChanged = !1);
            }
            getHasTimeChanged() {
                return this._hasTimeChanged;
            }
            getHasAnimationStateChanged() {
                return this._hasAnimationStateChanged;
            }
            getAnimationState() {
                return null === this._animFrameId ? this.IDLE : this._isPlaying ? this.PLAYING : this.TRANSITIONING;
            }
            getIsAnimating() {
                return null !== this._animFrameId;
            }
            getTime() {
                return {
                    calendarDay: this._calendarDay,
                    fractionalTimeOfDay: this._fractionalTimeOfDay,
                    moonPhase: this._moonPhase,
                    hour: this._hour,
                    minute: this._minute,
                    opaqueTime: this._time,
                    daysSinceNew: this._daysSinceNew,
                    hoursSinceNew: this._hoursSinceNew,
                };
            }
            setTime(t) {
                if (null !== this._animFrameId) return void console.error("Can not set time while animating.");
                if ("object" != typeof t) return void console.error("setTime requires an object argument.");
                let e = 1;
                t.hasOwnProperty("calendarDay") && (Number.isFinite(t.calendarDay) ? (e = t.calendarDay) : console.error("The calendarDay property provided to setTime must be a finite number."));
                let i = (((Math.round(e) - 1) % this._CALENDAR_PERIOD_IN_DAYS) + this._CALENDAR_PERIOD_IN_DAYS) % this._CALENDAR_PERIOD_IN_DAYS,
                    n = 0.5;
                t.hasOwnProperty("fractionalTimeOfDay") && (Number.isFinite(t.fractionalTimeOfDay) ? (n = t.fractionalTimeOfDay) : console.error("The fractionalTimeOfDay property provided to setTime must be a finite number.")),
                    (n = ((n % 1) + 1) % 1);
                let s = Math.round((i + n) * this._ATU_PER_DAY);
                this._setTime(s);
            }
            setTimeByDelta(t) {
                if (null !== this._animFrameId) return void console.error("Can not set time while animating.");
                if ("object" != typeof t) return void console.error("setTimeByDelta requires an object argument.");
                let e = !1,
                    i = 0;
                t.hasOwnProperty("hour") && (Number.isFinite(t.hour) ? ((i = Math.round(t.hour)), (e = !0)) : console.error("The hour property provided to setTimeByDelta must be a valid number."));
                let n = 0;
                t.hasOwnProperty("day") && (Number.isFinite(t.day) ? ((n = Math.round(t.day)), (e = !0)) : console.error("The day property provided to setTimeByDelta must be a valid number."));
                let s = null;
                t.hasOwnProperty("fractionalSynodicPeriods") &&
                    (Number.isFinite(t.fractionalSynodicPeriods) ? (s = t.fractionalSynodicPeriods) : console.error("The fractionalSynodicPeriods property provided to setTimeByDelta must be a valid number."));
                let r = null;
                t.hasOwnProperty("fractionalDays") && (Number.isFinite(t.fractionalDays) ? (r = t.fractionalDays) : console.error("The fractionalDays property provided to setTimeByDelta must be a valid number."));
                let a = this._time;
                if (t.hasOwnProperty("baseOpaqueTime"))
                    if (Number.isFinite(t.baseOpaqueTime)) {
                        let e = Math.floor(t.baseOpaqueTime);
                        (t.baseOpaqueTime >= this._TIME_CYCLE || t.baseOpaqueTime < 0 || t.baseOpaqueTime !== e) && console.error("The baseOpaqueTime provided to setTimeByDelta is not as expected. Behavior will be undefined"),
                            (a = t.baseOpaqueTime);
                    } else console.error("The baseOpaqueTime provided to setTimeByDelta must be a valid number.");
                let o = !0;
                t.hasOwnProperty("doAnimation") && (o = Boolean(t.doAnimation));
                let h = 0;
                e
                    ? (h = n * this._ATU_PER_DAY + i * this._ATU_PER_HOUR)
                    : null !== s
                    ? (h = Math.round(s * this._SYNODIC_PERIOD))
                    : null !== r
                    ? (h = Math.round(r * this._ATU_PER_DAY))
                    : console.error("setTimeByDelta was called with no recognized time setting properties."),
                    (h %= this._TIME_CYCLE),
                    o ? this._startAnimatedTransition(a, h) : this._setTime(a + h);
            }
            _startAnimatedTransition(t, e) {
                null === this._animFrameId
                    ? ((this._animTransitionInitTime = t),
                      (this._animTransitionInitSysClock = null),
                      (this._animTransitionTimeDelta = e),
                      (this._animTransitionFinalTime = t + e),
                      Math.abs(e) < 12 * this._ATU_PER_HOUR ? (this._animTransitionDurationMS = this._minTransitionDurationMS) : (this._animTransitionDurationMS = this._maxTransitionDurationMS),
                      (this._animFrameId = window.requestAnimationFrame(this._animFrameHandler)),
                      (this._hasAnimationStateChanged = !0),
                      this._makeChangeCallback())
                    : console.error("Can not start animated transition while animating.");
            }
            _makeChangeCallback() {
                null !== this._changeCallback && this._changeCallback();
            }
            getIsPlaying() {
                return this._isPlaying;
            }
            setIsPlaying(t) {
                (t = Boolean(t)) !== this._isPlaying &&
                    (t && null !== this._animFrameId
                        ? console.error("Can not start playing while animating (either playing or transitioning).")
                        : ((this._isPlaying = t),
                          this._isPlaying ? (this._recalcAnimPlayingParams(), (this._animFrameId = window.requestAnimationFrame(this._animFrameHandler))) : (window.cancelAnimationFrame(this._animFrameId), (this._animFrameId = null)),
                          (this._hasAnimationStateChanged = !0),
                          this._makeChangeCallback()));
            }
            _setTime(t) {
                if (!Number.isFinite(t)) return void console.error("Invalid argument passed to internal _setTime method.");
                (t = Math.floor(t)),
                    Number.isSafeInteger(t) || console.error("The time passed to the internal _setTime function is outside the safe integer range. Behavior will be undefined."),
                    (this._time = ((t % this._TIME_CYCLE) + this._TIME_CYCLE) % this._TIME_CYCLE),
                    (this._moonPhase = ((((this._time - this._SYNODIC_OFFSET) / this._SYNODIC_PERIOD) % 1) + 1) % 1);
                let e = (((this._time - this._SYNODIC_OFFSET) % this._SYNODIC_PERIOD) + this._SYNODIC_PERIOD) % this._SYNODIC_PERIOD;
                (this._daysSinceNew = Math.floor(e / this._ATU_PER_DAY)), (this._hoursSinceNew = Math.floor((e - this._daysSinceNew * this._ATU_PER_DAY) / this._ATU_PER_HOUR));
                let i = Math.floor(this._time / this._ATU_PER_DAY),
                    n = this._time - i * this._ATU_PER_DAY;
                (this._calendarDay = 1 + (((i % this._CALENDAR_PERIOD_IN_DAYS) + this._CALENDAR_PERIOD_IN_DAYS) % this._CALENDAR_PERIOD_IN_DAYS)),
                    (this._fractionalTimeOfDay = n / this._ATU_PER_DAY),
                    (this._hour = Math.floor(n / this._ATU_PER_HOUR)),
                    (this._minute = Math.floor((n - this._hour * this._ATU_PER_HOUR) / this._ATU_PER_MINUTE)),
                    (this._hasTimeChanged = !0),
                    this._makeChangeCallback();
            }
            _animFrameHandler(t) {
                if (this._isPlaying) {
                    null === this._animPlayingInitSysClock && (this._animPlayingInitSysClock = t), (this._animFrameId = window.requestAnimationFrame(this._animFrameHandler));
                    let e = (t - this._animPlayingInitSysClock) % this._animPlayingMSPerTimeCycle,
                        i = Math.round(e * this._animPlayingATUPerMS) % this._TIME_CYCLE;
                    this._setTime(this._animPlayingInitTime + i);
                } else {
                    null === this._animTransitionInitSysClock && (this._animTransitionInitSysClock = t);
                    let e = (t - this._animTransitionInitSysClock) / this._animTransitionDurationMS;
                    if (e < 1) {
                        this._animFrameId = window.requestAnimationFrame(this._animFrameHandler);
                        let t = e * e * (3 * (1 - e) + e) * this._animTransitionTimeDelta;
                        this._setTime(this._animTransitionInitTime + t);
                    } else (this._animFrameId = null), (this._hasAnimationStateChanged = !0), this._setTime(this._animTransitionFinalTime);
                }
            }
            _recalcAnimPlayingParams() {
                this._isPlaying &&
                    ((this._animPlayingInitTime = this._time),
                    (this._animPlayingInitSysClock = null),
                    (this._animPlayingATUPerMS = this._CALENDAR_PERIOD / (1e3 * this._secondsPerCalendarPeriod)),
                    (this._animPlayingMSPerTimeCycle = this._TIME_CYCLE / this._animPlayingATUPerMS));
            }
        }
        (n.prototype.IDLE = "idle"), (n.prototype.PLAYING = "playing"), (n.prototype.TRANSITIONING = "transitioning");
        i(18);
        var s = i(2),
            r = i.n(s),
            a = i(3),
            o = i.n(a),
            h = i(4),
            d = i.n(h),
            l = i(5),
            c = i.n(l);
        class _ {
            constructor() {
                (this._r = 100),
                    (this._cx = 0),
                    (this._cy = 0),
                    (this._startAngle = 0),
                    (this._endAngle = 0.5),
                    (this._isClockwise = !0),
                    (this._bodyWidth = 10),
                    (this._tailRoundedness = 1),
                    (this._headLength = 1.3),
                    (this._headSize = 1.3),
                    (this._headBevel = 0.3);
            }
            setParams(t) {
                let e = ["r", "cx", "cy", "startAngle", "endAngle", "isClockwise", "bodyWidth", "tailRoundedness", "headLength", "headSize", "headBevel"];
                for (const i of e) t.hasOwnProperty(i) && (this["_" + i] = t[i]);
            }
            getPathData() {
                const t = this._isClockwise ? 1 : -1,
                    e = this._isClockwise ? 1 : 0,
                    i = this._isClockwise ? 0 : 1,
                    n = Math.cos(this._startAngle),
                    s = Math.sin(this._startAngle),
                    r = Math.cos(this._endAngle),
                    a = Math.sin(this._endAngle),
                    o = (this._cx, this._r, this._cy, this._r, 0.5 * this._bodyWidth),
                    h = this._r + o,
                    d = this._r - o,
                    l = this._tailRoundedness * o,
                    c = l / this._r,
                    _ = this._startAngle + t * c,
                    u = Math.cos(_),
                    m = Math.sin(_),
                    g = this._cx + d * u,
                    p = this._cy + d * m,
                    b = this._cx + h * u,
                    w = this._cy + h * m,
                    f = this._headLength * this._bodyWidth,
                    y = this._endAngle - t * (f / this._r),
                    A = Math.cos(y),
                    v = Math.sin(y),
                    C = this._headSize * this._bodyWidth,
                    E = this._r + C,
                    k = this._r - C,
                    D = this._cx + E * A,
                    P = this._cy + E * v,
                    T = this._cx + k * A,
                    I = this._cy + k * v,
                    S = y + t * ((f * this._headBevel) / this._r),
                    L = Math.cos(S),
                    x = Math.sin(S),
                    M = this._cx + this._r * L,
                    B = this._cy + this._r * x,
                    O = this._getU(h, D, P, M, B),
                    R = D + O * (M - D),
                    N = P + O * (B - P),
                    F = this._getU(d, T, I, M, B),
                    H = T + F * (M - T),
                    U = I + F * (B - I),
                    W = -this._r * x,
                    G = this._r * L,
                    Y = (t * f) / Math.sqrt(W * W + G * G),
                    j = this._cx + this._r * L + Y * W,
                    z = this._cy + this._r * x + Y * G;
                let q = "M " + g + " " + p + " A " + o + " " + l + " " + _ + " 1 " + e + " " + b + " " + w;
                return (
                    (q += " A " + h + " " + h + " 0 0 " + e + " " + R + " " + N),
                    (q += " L " + D + " " + P + " " + 0.5 * (this._cx + this._r * r + j) + " " + 0.5 * (this._cy + this._r * a + z) + " " + T + " " + I + " " + H + " " + U),
                    (q += " A " + d + " " + d + " 0 0 " + i + " " + g + " " + p + " Z"),
                    q
                );
            }
            _getU(t, e, i, n, s) {
                const r = n - e,
                    a = s - i,
                    o = r * r + a * a,
                    h = 2 * r * (e - this._cx) + 2 * a * (i - this._cy),
                    d = e - this._cx,
                    l = i - this._cy,
                    c = h * h - 4 * o * (d * d + l * l - t * t);
                if (c <= 0) return console.error("Invalid discriminant in _getU."), 0;
                const _ = Math.sqrt(c);
                let u = (-h + _) / (2 * o);
                if (u > 0 && u < 1) return u;
                let m = (-h - _) / (2 * o);
                return m > 0 && m < 1 ? m : (console.error("Did not find valid u in _getU."), 0);
            }
        }
        const u = "http://www.w3.org/2000/svg";
        class m {
            constructor(t) {
                (this._orbitDiagram = t),
                    (this.TYPE_MOUSE = "mouse"),
                    (this.TYPE_TOUCH = "touch"),
                    (this.TYPE_NONE = "none"),
                    (this._hintArcLength = 40),
                    (this._hintArcWidth = 8),
                    (this._hintArcFill = "white"),
                    (this._hintArcStroke = "rgba(190, 190, 190, 1)"),
                    (this._hintArcStrokeWidth = 0),
                    (this._focusStroke = "white"),
                    (this._focusStrokeWidth = 6),
                    (this._focusStrokeOffset = 6),
                    (this._highlightFill = "rgba(255, 255, 255, 0.5)"),
                    (this._alwaysShowArrows = !0),
                    (this._showArrows = !0),
                    (this._NEVER_SHOW_FOCUS_RING = !0),
                    (this._isMouseOver = !1),
                    (this._touchHitAreaFill = "rgba(255, 0, 255, 0)"),
                    (this._mouseHitAreaFill = "rgba(0, 255, 0, 0)"),
                    (this._DEFAULT_IMAGE_RADIUS = 0),
                    (this._MIN_TOUCH_RADIUS = 24),
                    (this._MAX_BACKUP_TOUCH_DISTANCE = 80),
                    (this._scale = 1),
                    (this._rotationDegrees = 0),
                    (this._radius = 0),
                    (this._x = 0),
                    (this._y = 0),
                    (this._unshadowedBehind = document.createElementNS(u, "g")),
                    (this._unshadowed = document.createElementNS(u, "g")),
                    (this._unshadowedAndUnscaled = document.createElementNS(u, "g")),
                    (this._noTransforms = document.createElementNS(u, "g"));
            }
            _initAs(t) {
                (this._identity = t),
                    (this._onMouseEnter = this._onMouseEnter.bind(this)),
                    (this._onMouseLeaveLocal = this._onMouseLeaveLocal.bind(this)),
                    (this._onMouseDown = this._onMouseDown.bind(this)),
                    (this._onMouseMove = this._onMouseMove.bind(this)),
                    (this._onMouseFinished = this._onMouseFinished.bind(this)),
                    (this._onTouchStart = this._onTouchStart.bind(this)),
                    (this._onTouchMove = this._onTouchMove.bind(this)),
                    (this._onTouchFinished = this._onTouchFinished.bind(this)),
                    (this._outerGroup = document.createElementNS(u, "g")),
                    (this._innerGroup = document.createElementNS(u, "g")),
                    (this._innerGroupInteractive = document.createElementNS(u, "g"));
                let e = document.createElementNS(u, "filter");
                e.setAttribute("id", t + "-highlight-filter"), e.setAttribute("x", "-30%"), e.setAttribute("y", "-30%"), e.setAttribute("width", "160%"), e.setAttribute("height", "160%");
                let i = document.createElementNS(u, "feGaussianBlur");
                i.setAttribute("in", "SourceGraphic"),
                    i.setAttribute("stdDeviation", 5),
                    e.appendChild(i),
                    this._outerGroup.appendChild(e),
                    this._outerGroup.appendChild(this._highlight),
                    this._highlight.setAttribute("filter", "url(#" + t + "-highlight-filter)"),
                    (this._shadowed = document.createElementNS(u, "g")),
                    (this._shadowedMask = document.createElementNS(u, "mask")),
                    this._shadowedMask.setAttribute("id", t + "-shadowed-mask"),
                    this._innerGroup.appendChild(this._shadowedMask),
                    (this._shadowedMaskCircle = document.createElementNS(u, "circle")),
                    this._shadowedMaskCircle.setAttribute("cx", 0),
                    this._shadowedMaskCircle.setAttribute("cy", 0),
                    this._shadowedMaskCircle.setAttribute("r", this._DEFAULT_IMAGE_RADIUS),
                    this._shadowedMaskCircle.setAttribute("fill", "white"),
                    this._shadowedMask.appendChild(this._shadowedMaskCircle),
                    this._shadowed.setAttribute("mask", "url(#" + t + "-shadowed-mask)"),
                    this._innerGroup.appendChild(this._unshadowedBehind),
                    this._innerGroup.appendChild(this._shadowed),
                    this._innerGroup.appendChild(this._unshadowed),
                    (this._interactive = document.createElementNS(u, "g")),
                    this._innerGroupInteractive.appendChild(this._interactive),
                    this._outerGroup.appendChild(this._innerGroup),
                    this._outerGroup.appendChild(this._unshadowedAndUnscaled),
                    this._outerGroup.appendChild(this._noTransforms),
                    this._outerGroup.appendChild(this._innerGroupInteractive),
                    this._NEVER_SHOW_FOCUS_RING || this._outerGroup.appendChild(this._focus),
                    this._interactive.appendChild(this._touchHitArea),
                    this._interactive.appendChild(this._mouseHitArea),
                    (this._cursor = null),
                    (this._showHighlight = !0),
                    this._highlight.setAttribute("visibility", "visible"),
                    this._createImage(),
                    this._createShadow(),
                    this._shadowed.appendChild(this._image),
                    this._shadowed.appendChild(this._shadow),
                    this._mouseHitArea.addEventListener("mouseenter", this._onMouseEnter, { passive: !1 }),
                    this._mouseHitArea.addEventListener("mouseleave", this._onMouseLeaveLocal, { passive: !1 }),
                    this._mouseHitArea.addEventListener("mousedown", this._onMouseDown, { passive: !1 }),
                    this._interactive.addEventListener("touchstart", this._onTouchStart, { passive: !1 }),
                    this._outerGroup.classList.add("wgbh-orbit-diagram-element-focusarea"),
                    (this._isTabable = null),
                    (this._isFocused = !1),
                    (this._showFocusRing = null),
                    (this._onFocus = this._onFocus.bind(this)),
                    (this._onBlur = this._onBlur.bind(this)),
                    (this._onKeyDown = this._onKeyDown.bind(this)),
                    this._outerGroup.addEventListener("focusin", this._onFocus, { passive: !1 }),
                    this._outerGroup.addEventListener("focusout", this._onBlur, { passive: !1 }),
                    this.updateAppearance();
            }
            _onKeyDown(t) {
                if (!this._isFocused) return void console.error("Key down detected for an orbit diagram element that is not focused.");
                if (!this._orbitDiagram._getIsDraggingAllowed()) return void console.error("Key down detected for an orbit diagram element when interactivity is not allowed.");
                if (this._orbitDiagram._getIsDraggingInProgress()) return;
                let e = this._getDeltaObjForKey(t.key);
                null !== e && (t.preventDefault(), (e.doAnimation = !1), this._orbitDiagram._timekeeper.setTimeByDelta(e));
            }
            _onFocus(t) {
                this._orbitDiagram._getIsDraggingAllowed()
                    ? ((this._isFocused = !0), this._outerGroup.addEventListener("keydown", this._onKeyDown, { passive: !1 }), this.updateAppearance())
                    : (t.preventDefault(), t.relatedTarget ? t.relatedTarget.focus() : t.currentTarget.blur());
            }
            _onBlur(t) {
                (this._isFocused = !1), this._outerGroup.removeEventListener("keydown", this._onKeyDown), this.updateAppearance();
            }
            makeFocused() {
                this._isFocused || this._outerGroup.focus();
            }
            removeFocus() {
                this._isFocused && this._outerGroup.blur();
            }
            _createShadow() {
                let t = this._DEFAULT_IMAGE_RADIUS + 5;
                (this._shadow = document.createElementNS(u, "rect")),
                    this._shadow.setAttribute("fill", "rgba(0, 0, 0, 0.6)"),
                    this._shadow.setAttribute("x", 0),
                    this._shadow.setAttribute("y", -t),
                    this._shadow.setAttribute("rx", 0),
                    this._shadow.setAttribute("ry", 0),
                    this._shadow.setAttribute("width", t),
                    this._shadow.setAttribute("height", 2 * t);
            }
            _createImage() {
                (this._image = document.createElementNS(u, "image")),
                    this._image.setAttribute("width", 2 * this._DEFAULT_IMAGE_RADIUS),
                    this._image.setAttribute("height", 2 * this._DEFAULT_IMAGE_RADIUS),
                    this._image.setAttribute("x", -this._DEFAULT_IMAGE_RADIUS),
                    this._image.setAttribute("y", -this._DEFAULT_IMAGE_RADIUS),
                    this._image.setAttributeNS("http://www.w3.org/1999/xlink", "href", this._imageURL);
            }
            getElement() {
                return this._outerGroup;
            }
            setScale(t) {
                (this._scale = t), (this._radius = this._scale * this._DEFAULT_IMAGE_RADIUS), this._redrawHitAreas(), this._updateInnerTransforms();
            }
            setPosition(t, e) {
                (this._x = t), (this._y = e), this._outerGroup.setAttribute("transform", "translate(" + t + ", " + e + ")");
            }
            setRotation(t) {
                (this._rotationDegrees = t), this._updateInnerTransforms();
            }
            _updateInnerTransforms() {
                let t = "rotate(" + this._rotationDegrees + ", 0, 0)",
                    e = "scale(" + this._scale + ")";
                this._image.setAttribute("transform", t),
                    this._interactive.setAttribute("transform", t),
                    this._unshadowedBehind.setAttribute("transform", t),
                    this._unshadowed.setAttribute("transform", t),
                    this._unshadowedAndUnscaled.setAttribute("transform", t),
                    this._focus.setAttribute("transform", t),
                    this._highlight.setAttribute("transform", t),
                    this._innerGroup.setAttribute("transform", e),
                    this._innerGroupInteractive.setAttribute("transform", e);
            }
            cancelDragging() {
                this._stopDragging();
            }
            _startDragging(t, e) {
                if (e === this.TYPE_MOUSE)
                    document.addEventListener("mousemove", this._onMouseMove, { passive: !1 }),
                        document.addEventListener("mouseup", this._onMouseFinished, { passive: !1 }),
                        document.addEventListener("mouseleave", this._onMouseFinished, { passive: !1 });
                else {
                    if (e !== this.TYPE_TOUCH) return void console.error("Unknown drag type.");
                    document.addEventListener("touchmove", this._onTouchMove, { passive: !1 }),
                        document.addEventListener("touchend", this._onTouchFinished, { passive: !1 }),
                        document.addEventListener("touchcancel", this._onTouchFinished, { passive: !1 });
                }
                (this._backupTouches = []),
                    (this._dragType = e),
                    (this._dragRotations = 0),
                    (this._dragInitOpaqueTime = this._orbitDiagram._timekeeper.getTime().opaqueTime),
                    this._calcDragAngleOffset(t),
                    this._orbitDiagram._onDragBegin(this),
                    this.updateAppearance(),
                    this._otherElement.updateAppearance();
            }
            _calcDragAngleOffset(t) {
                this._dragAngleOffset = this._getCurrAngle() - this._getAngleForClientPt(t);
            }
            _updateDragging(t) {
                let e = (this._getAngleForClientPt(t) + this._dragAngleOffset - this._getCurrAngle()) / (2 * Math.PI);
                (e = ((e % 1) + 1) % 1), e > 0.5 && (e -= 1), (this._dragRotations += e);
                let i = this._getDeltaObjForRotations(this._dragRotations);
                (i.baseOpaqueTime = this._dragInitOpaqueTime), (i.doAnimation = !1), this._orbitDiagram._timekeeper.setTimeByDelta(i);
            }
            _stopDragging() {
                let t = !1;
                this._dragType === this.TYPE_MOUSE
                    ? (document.removeEventListener("mousemove", this._onMouseMove), document.removeEventListener("mouseup", this._onMouseFinished), document.removeEventListener("mouseleave", this._onMouseFinished), (t = !0))
                    : this._dragType === this.TYPE_TOUCH &&
                      (document.removeEventListener("touchmove", this._onTouchMove), document.removeEventListener("touchend", this._onTouchFinished), document.removeEventListener("touchcancel", this._onTouchFinished), (t = !0)),
                    (this._dragType = this.TYPE_NONE),
                    t && (this._orbitDiagram._onDragEnd(this), this.updateCursor(), this.updateHighlight(), this._otherElement.updateCursor(), this._otherElement.updateHighlight());
            }
            getIsBeingDragged() {
                return this._dragType === this.TYPE_MOUSE || this._dragType === this.TYPE_TOUCH;
            }
            _getDragInitScore(t, e) {
                if (!this._orbitDiagram._getCanDragInitOnElement(this)) return Number.POSITIVE_INFINITY;
                if (e === this.TYPE_MOUSE) {
                    if (this.getIsBeingDragged()) return Number.POSITIVE_INFINITY;
                } else if (e !== this.TYPE_TOUCH) return console.error("Unknown type."), Number.POSITIVE_INFINITY;
                return this._getDistanceOfClientPt(t);
            }
            _onMouseDown(t) {
                let e = { x: t.clientX, y: t.clientY },
                    i = this._getDragInitScore(e, this.TYPE_MOUSE);
                Number.isFinite(i) && (t.preventDefault(), this.makeFocused(), this._startDragging(e, this.TYPE_MOUSE));
            }
            _onMouseMove(t) {
                t.preventDefault(), this._updateDragging({ x: t.clientX, y: t.clientY });
            }
            _onMouseFinished(t) {
                t.preventDefault(), this._stopDragging();
            }
            _onTouchStart(t) {
                let e = [],
                    i = Number.POSITIVE_INFINITY,
                    n = null,
                    s = -1;
                for (let r of t.changedTouches) {
                    let t = { x: r.clientX, y: r.clientY },
                        a = this._getDragInitScore(t, this.TYPE_TOUCH);
                    if (Number.isFinite(a)) {
                        let o = { id: r.identifier, clientPt: t },
                            h = e.push(o);
                        a < i && ((i = a), (n = o), (s = h));
                    }
                }
                0 !== e.length && (this.getIsBeingDragged() || (t.preventDefault(), (this._activeTouchId = n.id), this._startDragging(n.clientPt, this.TYPE_TOUCH), e.splice(s, 1)), Array.prototype.push.apply(this._backupTouches, e));
            }
            _onTouchMove(t) {
                this._updateAnyBackupTouches(t.changedTouches);
                let e = this._findActiveTouch(t.changedTouches);
                null !== e && (t.preventDefault(), this._updateDragging(e.clientPt));
            }
            _onTouchFinished(t) {
                if ((this._stopTrackingAnyBackupTouches(t.changedTouches), null !== this._findActiveTouch(t.changedTouches))) {
                    this._switchToBackupTouch() || this._stopDragging();
                }
            }
            _switchToBackupTouch() {
                let t = Number.POSITIVE_INFINITY,
                    e = null,
                    i = -1;
                for (let n = 0; n < this._backupTouches.length; ++n) {
                    let s = this._backupTouches[n],
                        r = this._getDistanceOfClientPt(s.clientPt);
                    r <= this._MAX_BACKUP_TOUCH_DISTANCE && r < t && ((t = r), (e = s), (i = n));
                }
                return null !== e && (this._backupTouches.splice(i, 1), (this._activeTouchId = e.id), this._calcDragAngleOffset(e.clientPt), !0);
            }
            _stopTrackingAnyBackupTouches(t) {
                for (let e = this._backupTouches.length - 1; e >= 0; --e) {
                    let i = this._backupTouches[e].id;
                    for (let n of t)
                        if (n.identifier === i) {
                            this._backupTouches.splice(e, 1);
                            break;
                        }
                }
            }
            _updateAnyBackupTouches(t) {
                for (let e of t)
                    for (let t of this._backupTouches)
                        if (e.identifier === t.id) {
                            t.clientPt = { x: e.clientX, y: e.clientY };
                            break;
                        }
            }
            _findActiveTouch(t) {
                for (let e of t) if (e.identifier === this._activeTouchId) return { id: this._activeTouchId, clientPt: { x: e.clientX, y: e.clientY } };
                return null;
            }
            getIsMouseOver() {
                return this._isMouseOver;
            }
            _onMouseEnter() {
                (this._isMouseOver = !0), this.updateCursor(), this.updateHighlight();
            }
            _onMouseLeaveLocal() {
                (this._isMouseOver = !1), this.updateCursor(), this.updateHighlight();
            }
            updateAppearance() {
                this.updateFocus(), this.updateHighlight(), this.updateCursor(), this.updateArrows();
            }
            updateCursor() {
                let t = null;
                this._dragType === this.TYPE_MOUSE ? (t = "grabbing") : this._isMouseOver && this._orbitDiagram._getCanDragStartOnElement(this) && (t = "grab"),
                    t !== this._cursor && ((this._cursor = t), this._orbitDiagram._setCursor(this._identity, t));
            }
            updateHighlight() {
                let t = !1;
                (this.getIsBeingDragged() || (this._isMouseOver && this._orbitDiagram._getCanDragStartOnElement(this))) && (t = !0),
                    this._showFocusRing && (t = !1),
                    t !== this._showHighlight && ((this._showHighlight = t), this._showHighlight ? this._highlight.setAttribute("visibility", "visible") : this._highlight.setAttribute("visibility", "hidden"));
            }
            updateFocus() {
                let t = this._orbitDiagram._getIsDraggingAllowed(),
                    e = this._isFocused;
                this._NEVER_SHOW_FOCUS_RING && (e = !1),
                    t !== this._isTabable && ((this._isTabable = t), this._isTabable ? (this._outerGroup.tabIndex = 0) : (this._outerGroup.tabIndex = -1)),
                    e !== this._showFocusRing && ((this._showFocusRing = e), this._showFocusRing ? this._focus.setAttribute("visibility", "visible") : this._focus.setAttribute("visibility", "hidden"));
            }
            updateArrows() {
                let t = this._alwaysShowArrows | this._isFocused;
                if (t !== this._showArrows) {
                    this._showArrows = t;
                    const e = "wgbh-orbit-diagram-shown",
                        i = "wgbh-orbit-diagram-not-shown",
                        n = "wgbh-orbit-diagram-dismissed";
                    this._showArrows ? (this._hint.classList.add(e), this._hint.classList.remove(i, n)) : (this._hint.classList.remove(e), this._flag_dismissInitHint ? this._hint.classList.add(n) : this._hint.classList.add(i));
                }
                this._flag_dismissInitHint = !1;
            }
            dismissInitHint() {
                this._alwaysShowArrows && ((this._alwaysShowArrows = !1), (this._flag_dismissInitHint = !0), this.updateArrows());
            }
        }
        const g = "http://www.w3.org/2000/svg";
        class p extends m {
            constructor(t) {
                super(t),
                    (this._DEFAULT_IMAGE_RADIUS = 14),
                    (this._touchHitArea = document.createElementNS(g, "circle")),
                    (this._mouseHitArea = document.createElementNS(g, "circle")),
                    (this._imageURL = c.a),
                    (this._focus = document.createElementNS(g, "g")),
                    (this._focusRing = document.createElementNS(g, "circle")),
                    this._focusRing.setAttribute("cx", 0),
                    this._focusRing.setAttribute("cy", 0),
                    this._focusRing.setAttribute("stroke", this._focusStroke),
                    this._focusRing.setAttribute("stroke-width", this._focusStrokeWidth),
                    this._focusRing.setAttribute("fill", "none"),
                    this._focus.appendChild(this._focusRing),
                    (this._highlight = document.createElementNS(g, "g")),
                    (this._highlightDisc = document.createElementNS(g, "circle")),
                    this._highlightDisc.setAttribute("fill", this._highlightFill),
                    this._highlight.appendChild(this._highlightDisc),
                    (this._hint = document.createElementNS(g, "g")),
                    (this._hintCWPath = document.createElementNS(g, "path")),
                    this._hintCWPath.setAttribute("fill", this._hintArcFill),
                    this._hintCWPath.setAttribute("stroke", this._hintArcStroke),
                    this._hintCWPath.setAttribute("stroke-width", this._hintArcStrokeWidth),
                    this._hintCWPath.setAttribute("stroke-linejoin", "round"),
                    this._hintCWPath.setAttribute("stroke-linecap", "round"),
                    this._hint.appendChild(this._hintCWPath),
                    (this._hintCCWPath = document.createElementNS(g, "path")),
                    this._hintCCWPath.setAttribute("fill", this._hintArcFill),
                    this._hintCCWPath.setAttribute("stroke", this._hintArcStroke),
                    this._hintCCWPath.setAttribute("stroke-width", this._hintArcStrokeWidth),
                    this._hintCCWPath.setAttribute("stroke-linejoin", "round"),
                    this._hintCCWPath.setAttribute("stroke-linecap", "round"),
                    this._hint.appendChild(this._hintCCWPath),
                    (this._hintCWArrow = new _()),
                    (this._hintCCWArrow = new _()),
                    this._unshadowedAndUnscaled.appendChild(this._hint);
                const e = 0.2 * this._DEFAULT_IMAGE_RADIUS,
                    i = 3.5 * e;
                (this._landmark = document.createElementNS(g, "rect")),
                    this._landmark.setAttribute("x", 0),
                    this._landmark.setAttribute("y", -e),
                    this._landmark.setAttribute("width", this._DEFAULT_IMAGE_RADIUS + i),
                    this._landmark.setAttribute("height", 2 * e),
                    this._landmark.setAttribute("stroke", "none"),
                    this._landmark.setAttribute("fill", "rgb(255, 100, 255)"),
                    this._landmark.setAttribute("visibility", "hidden"),
                    this._unshadowedBehind.appendChild(this._landmark),
                    super._initAs("moon");
            }
            setShowLandmark(t) {
                t ? this._landmark.setAttribute("visibility", "visible") : this._landmark.setAttribute("visibility", "hidden");
            }
            _redrawHitAreas() {
                this._touchHitArea.setAttribute("fill", this._touchHitAreaFill), this._mouseHitArea.setAttribute("fill", this._mouseHitAreaFill);
                let t = this._radius;
                t < this._MIN_TOUCH_RADIUS && (t = this._MIN_TOUCH_RADIUS),
                    this._touchHitArea.setAttribute("r", t),
                    this._touchHitArea.setAttribute("cx", 0),
                    this._touchHitArea.setAttribute("cy", 0),
                    this._mouseHitArea.setAttribute("r", this._DEFAULT_IMAGE_RADIUS),
                    this._mouseHitArea.setAttribute("cx", 0),
                    this._mouseHitArea.setAttribute("cy", 0),
                    (this._maxTouchHitAreaDistance = t),
                    (this._maxMouseHitAreaDistance = this._DEFAULT_IMAGE_RADIUS),
                    this._moreRedrawing();
            }
            _moreRedrawing() {
                let t = this._radius + this._focusStrokeOffset;
                this._focusRing.setAttribute("r", t), this._highlightDisc.setAttribute("r", t), this._redrawHint();
            }
            _redrawHint() {
                let t = this._orbitDiagram._orbitRadiusPx,
                    e = (1.5 * this._radius + this._hintArcWidth) / t,
                    i = this._hintArcLength / t,
                    n = Math.PI + e;
                this._hintCWArrow.setParams({ r: t, cx: t, bodyWidth: this._hintArcWidth, startAngle: n, endAngle: n + i }), this._hintCWPath.setAttribute("d", this._hintCWArrow.getPathData());
                let s = Math.PI - e;
                this._hintCCWArrow.setParams({ isClockwise: !1, r: t, cx: t, bodyWidth: this._hintArcWidth, startAngle: s, endAngle: s - i }), this._hintCCWPath.setAttribute("d", this._hintCCWArrow.getPathData());
            }
            getHotspotPosition() {
                return { x: this._x, y: this._y };
            }
            _getDistanceOfClientPt(t) {
                let e = this._orbitDiagram.getDiagramPtForClientPt(t),
                    i = e.x - this._x,
                    n = e.y - this._y;
                return Math.sqrt(i * i + n * n);
            }
            _getAngleForClientPt(t) {
                let e = this._orbitDiagram.getOrbitPtForClientPt(t),
                    i = Math.atan2(e.y, e.x);
                return Math.PI - i;
            }
            _getCurrAngle() {
                let t = this._orbitDiagram._timekeeper.getTime();
                return 2 * Math.PI * t.moonPhase;
            }
            _getDeltaObjForRotations(t) {
                return { fractionalSynodicPeriods: t };
            }
            _getDeltaObjForKey(t) {
                return "ArrowDown" === t || "ArrowLeft" === t ? { fractionalDays: -0.08 } : "ArrowUp" === t || "ArrowRight" === t ? { fractionalDays: 0.08 } : null;
            }
        }
        var b = i(6),
            w = i.n(b),
            f = i(7),
            y = i.n(f);
        const A = "http://www.w3.org/2000/svg";
        class v extends m {
            constructor(t) {
                super(t),
                    (this._DEFAULT_IMAGE_RADIUS = 50),
                    (this._moonRiseBisectorColor = "rgba(200, 200, 255, 1)"),
                    (this._moonSetBisectorColor = "rgba(255, 200, 200, 1)"),
                    (this._bisectorWidth = 3),
                    (this._filter = document.createElementNS(A, "filter")),
                    this._filter.setAttribute("id", "stickfigure-filter"),
                    (this._filterMatrix = document.createElementNS(A, "feColorMatrix")),
                    this._filterMatrix.setAttribute("in", "SourceGraphic"),
                    this._filterMatrix.setAttribute("type", "matrix");
                this._filterMatrix.setAttribute("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"),
                    this._filter.appendChild(this._filterMatrix),
                    this._unshadowed.appendChild(this._filter),
                    (this._stickfigure = document.createElementNS(A, "image")),
                    this._stickfigure.setAttribute("width", 130),
                    this._stickfigure.setAttribute("height", 150),
                    this._stickfigure.setAttribute("x", -65),
                    this._stickfigure.setAttribute("y", -85),
                    this._stickfigure.setAttributeNS("http://www.w3.org/1999/xlink", "href", y.a),
                    this._stickfigure.setAttribute("filter", "url(#stickfigure-filter)"),
                    this._unshadowed.appendChild(this._stickfigure),
                    (this._hint = document.createElementNS(A, "g")),
                    (this._hintCWPath = document.createElementNS(A, "path")),
                    this._hintCWPath.setAttribute("fill", this._hintArcFill),
                    this._hintCWPath.setAttribute("stroke", this._hintArcStroke),
                    this._hintCWPath.setAttribute("stroke-width", this._hintArcStrokeWidth),
                    this._hintCWPath.setAttribute("stroke-linejoin", "round"),
                    this._hintCWPath.setAttribute("stroke-linecap", "round"),
                    this._hint.appendChild(this._hintCWPath),
                    (this._hintCCWPath = document.createElementNS(A, "path")),
                    this._hintCCWPath.setAttribute("fill", this._hintArcFill),
                    this._hintCCWPath.setAttribute("stroke", this._hintArcStroke),
                    this._hintCCWPath.setAttribute("stroke-width", this._hintArcStrokeWidth),
                    this._hintCCWPath.setAttribute("stroke-linejoin", "round"),
                    this._hintCCWPath.setAttribute("stroke-linecap", "round"),
                    this._hint.appendChild(this._hintCCWPath),
                    (this._hintCWArrow = new _()),
                    (this._hintCCWArrow = new _()),
                    this._unshadowedAndUnscaled.appendChild(this._hint),
                    (this._touchHitArea = document.createElementNS(A, "path")),
                    (this._mouseHitArea = document.createElementNS(A, "path")),
                    (this._imageURL = w.a),
                    (this._focus = document.createElementNS(A, "g")),
                    (this._focusRing = document.createElementNS(A, "path")),
                    this._focusRing.setAttribute("stroke", this._focusStroke),
                    this._focusRing.setAttribute("stroke-width", this._focusStrokeWidth),
                    this._focusRing.setAttribute("fill", "none"),
                    this._focus.appendChild(this._focusRing),
                    (this._highlight = document.createElementNS(A, "g")),
                    (this._highlightArea = document.createElementNS(A, "path")),
                    this._highlightArea.setAttribute("fill", this._highlightFill),
                    this._highlight.appendChild(this._highlightArea),
                    (this._moonRiseBisector = document.createElementNS(A, "path")),
                    this._moonRiseBisector.setAttribute("stroke", this._moonRiseBisectorColor),
                    this._moonRiseBisector.setAttribute("stroke-width", this._bisectorWidth),
                    this._moonRiseBisector.setAttribute("visibility", "hidden"),
                    this._noTransforms.appendChild(this._moonRiseBisector),
                    (this._moonRiseBisectorIndicator = document.createElementNS(A, "path")),
                    this._moonRiseBisectorIndicator.setAttribute("fill", "none"),
                    this._moonRiseBisectorIndicator.setAttribute("stroke", this._moonRiseBisectorColor),
                    this._moonRiseBisectorIndicator.setAttribute("stroke-width", this._bisectorWidth),
                    this._moonRiseBisectorIndicator.setAttribute("visibility", "hidden"),
                    this._noTransforms.appendChild(this._moonRiseBisectorIndicator),
                    (this._moonSetBisector = document.createElementNS(A, "path")),
                    this._moonSetBisector.setAttribute("stroke", this._moonSetBisectorColor),
                    this._moonSetBisector.setAttribute("stroke-width", this._bisectorWidth),
                    this._moonSetBisector.setAttribute("visibility", "hidden"),
                    this._noTransforms.appendChild(this._moonSetBisector),
                    (this._moonSetBisectorIndicator = document.createElementNS(A, "path")),
                    this._moonSetBisectorIndicator.setAttribute("fill", "none"),
                    this._moonSetBisectorIndicator.setAttribute("stroke", this._moonSetBisectorColor),
                    this._moonSetBisectorIndicator.setAttribute("stroke-width", this._bisectorWidth),
                    this._moonSetBisectorIndicator.setAttribute("visibility", "hidden"),
                    this._noTransforms.appendChild(this._moonSetBisectorIndicator),
                    (this._moonAnomaly = 0),
                    super._initAs("earth");
            }
            _redrawHint() {
                let t = 1.2 * (this._radius + this._hintArcWidth),
                    e = (this._hintArcWidth / t) * 2.7,
                    i = this._hintArcLength / t,
                    n = 1.5 * Math.PI + e;
                this._hintCWArrow.setParams({ r: t, bodyWidth: this._hintArcWidth, startAngle: n, endAngle: n + i }), this._hintCWPath.setAttribute("d", this._hintCWArrow.getPathData());
                let s = 1.5 * Math.PI - e;
                this._hintCCWArrow.setParams({ isClockwise: !1, r: t, bodyWidth: this._hintArcWidth, startAngle: s, endAngle: s - i }), this._hintCCWPath.setAttribute("d", this._hintCCWArrow.getPathData());
            }
            setMoonAnomaly(t) {
                (this._moonAnomaly = t), this._redrawBisector();
            }
            setShowBisector(t) {
                t
                    ? (this._moonRiseBisector.setAttribute("visibility", "visible"),
                      this._moonRiseBisectorIndicator.setAttribute("visibility", "visible"),
                      this._moonSetBisector.setAttribute("visibility", "visible"),
                      this._moonSetBisectorIndicator.setAttribute("visibility", "visible"))
                    : (this._moonRiseBisector.setAttribute("visibility", "hidden"),
                      this._moonRiseBisectorIndicator.setAttribute("visibility", "hidden"),
                      this._moonSetBisector.setAttribute("visibility", "hidden"),
                      this._moonSetBisectorIndicator.setAttribute("visibility", "hidden"));
            }
            setRotation(t) {
                super.setRotation(t);
                let e = this._orbitDiagram._timekeeper.getTime().fractionalTimeOfDay,
                    i = 0;
                i = e < 0.22 ? 0 : e < 0.28 ? (e - 0.22) / (0.28 - 0.22) : e < 0.72 ? 1 : e < 0.78 ? 1 - (e - 0.72) / (0.78 - 0.72) : 0;
                let n = (0.2 + 0.7 * Math.pow(i, 3)).toString();
                this._filterMatrix.setAttribute("values", n + " 0 0 0 0  0 " + n + " 0 0 0  0 0 " + n + " 0 0  0 0 0 1 0");
            }
            _redrawHitAreas() {
                this._touchHitArea.setAttribute("fill", this._touchHitAreaFill), this._mouseHitArea.setAttribute("fill", this._mouseHitAreaFill);
                let t = (15 / 360) * 2 * Math.PI,
                    e = this._DEFAULT_IMAGE_RADIUS,
                    i = e * Math.cos(0.5 * Math.PI + t),
                    n = -e * Math.sin(0.5 * Math.PI + t),
                    s = e * Math.cos(0.5 * Math.PI - t),
                    r = -e * Math.sin(0.5 * Math.PI - t),
                    a = 1 * e * Math.sin(t),
                    o = -75,
                    h = 0,
                    d = -75,
                    l = "M " + i + " " + n;
                (l += " A 50 50 0 1 0 " + s + " " + r), (l += " Q " + a + " " + o + " " + h + " " + d), (l += " T " + i + " " + n), this._mouseHitArea.setAttribute("d", l);
                let c = this._radius,
                    _ = e,
                    u = t,
                    m = 75;
                if ((c < this._MIN_TOUCH_RADIUS && ((c = this._MIN_TOUCH_RADIUS), (_ = c / this._scale)), c * Math.sin(u) < this._MIN_TOUCH_RADIUS)) {
                    let t = this._MIN_TOUCH_RADIUS / c;
                    t > 1 && (t = 1), (u = Math.asin(t));
                }
                (m = (75 * this._scale + 0.5001 * this._MIN_TOUCH_RADIUS) / this._scale),
                    this._scale * (m - e) < this._MIN_TOUCH_RADIUS && (m = this._MIN_TOUCH_RADIUS / this._scale + e),
                    (i = _ * Math.cos(0.5 * Math.PI + u)),
                    (n = -_ * Math.sin(0.5 * Math.PI + u)),
                    (s = _ * Math.cos(0.5 * Math.PI - u)),
                    (r = -_ * Math.sin(0.5 * Math.PI - u)),
                    (a = 1 * _ * Math.sin(u)),
                    (o = -m),
                    (h = 0),
                    (d = -m),
                    (l = "M " + i + " " + n),
                    (l += " A 50 50 0 1 0 " + s + " " + r),
                    (l += " Q " + a + " " + o + " " + h + " " + d),
                    (l += " T " + i + " " + n),
                    this._touchHitArea.setAttribute("d", l),
                    (this._maxTouchHitAreaDistance = this._scale * m),
                    (this._maxMouseHitAreaDistance = 75 * this._scale),
                    this._redrawOtherStuff(),
                    this._redrawBisector();
            }
            _redrawBisector() {
                const t = -this._moonAnomaly + 0.5 * Math.PI,
                    e = 2.04 * this._radius,
                    i = Math.cos(t),
                    n = Math.sin(t),
                    s = 0.8 * e,
                    r = e * i,
                    a = e * n,
                    o = s * i,
                    h = s * n,
                    d = r - o,
                    l = a - h,
                    c = " M " + r + " " + a + " L " + (0.5 * d + 0.866 * l + o) + " " + (-0.866 * d + 0.5 * l + h) + " " + o + " " + h + " Z",
                    _ = 0.8 * e,
                    u = -_ * i,
                    m = -_ * n,
                    g = -e * i,
                    p = -e * n,
                    b = 0.5 * (u + g),
                    w = 0.5 * (m + p),
                    f = 1.2 * (u - b),
                    y = 1.2 * (m - w),
                    A = " M " + u + " " + m + " L " + (y + b) + " " + (-f + w) + " " + g + " " + p + " " + (-y + b) + " " + (f + w) + " Z";
                this._moonRiseBisector.setAttribute("d", "M " + o + " " + h + " L 0 0"),
                    this._moonRiseBisectorIndicator.setAttribute("d", c),
                    this._moonSetBisector.setAttribute("d", "M 0 0 L " + u + " " + m),
                    this._moonSetBisectorIndicator.setAttribute("d", A);
            }
            _redrawOtherStuff() {
                const t = 75 * this._scale;
                let e = (15 / 360) * 2 * Math.PI,
                    i = this._radius + this._focusStrokeOffset,
                    n = i * Math.cos(0.5 * Math.PI + e),
                    s = -i * Math.sin(0.5 * Math.PI + e),
                    r = "M " + n + " " + s;
                (r += " A " + i + " " + i + " 0 1 0 " + i * Math.cos(0.5 * Math.PI - e) + " " + -i * Math.sin(0.5 * Math.PI - e)),
                    (r += " Q " + 1 * i * Math.sin(e) + " " + (-t - this._focusStrokeOffset) + " 0 " + (-t - this._focusStrokeOffset)),
                    (r += " T " + n + " " + s + " Z"),
                    this._focusRing.setAttribute("d", r),
                    this._highlightArea.setAttribute("d", r),
                    this._redrawHint();
            }
            getHotspotPosition() {
                let t = (this._rotationDegrees * Math.PI) / 180;
                return { x: this._x + this._radius * Math.sin(t), y: this._y - this._radius * Math.cos(t) };
            }
            _getDistanceOfClientPt(t) {
                let e = this._orbitDiagram.getDiagramPtForClientPt(t),
                    i = this.getHotspotPosition(),
                    n = e.x - i.x,
                    s = e.y - i.y;
                return Math.sqrt(n * n + s * s);
            }
            _getAngleForClientPt(t) {
                let e = this._orbitDiagram.getOrbitPtForClientPt(t),
                    i = Math.atan2(e.y, e.x);
                return 1.5 * Math.PI - i;
            }
            _getCurrAngle() {
                let t = this._orbitDiagram._timekeeper.getTime();
                return 2 * Math.PI * t.fractionalTimeOfDay;
            }
            _getDeltaObjForRotations(t) {
                return { fractionalDays: t };
            }
            _getDeltaObjForKey(t) {
                return "ArrowDown" === t || "ArrowLeft" === t ? { fractionalDays: -0.003 } : "ArrowUp" === t || "ArrowRight" === t ? { fractionalDays: 0.003 } : null;
            }
        }
        class C {
            constructor() {
                (this._element = document.createElement("div")),
                    this._element.classList.add("wgbh-orbit-diagram-init-message"),
                    (this._text = document.createElement("div")),
                    this._text.classList.add("wgbh-orbit-diagram-init-message-text"),
                    (this._text.textContent = "Drag Earth or the Moon to change the time."),
                    this._element.appendChild(this._text),
                    (this._isDismissed = !1);
            }
            getElement() {
                return this._element;
            }
            getImg() {
                return this._img;
            }
            setScale(t) {
                this._element.style.fontSize = 0.8 + 0.4 * t + "rem";
            }
            setPosition(t, e) {
                (this._text.style.left = t + "px"), (this._text.style.top = e + "px");
            }
            dismiss() {
                (this._isDismissed = !0), this._element.classList.add("wgbh-orbit-diagram-dismissed");
            }
        }
        console.info("WGBH Orbit Diagram (version: 0.13)");
        const E = "http://www.w3.org/2000/svg";
        class k {
            constructor(t) {
                if (((this._timekeeper = null), "object" == typeof t && t.hasOwnProperty("timekeeper") && (this._timekeeper = t.timekeeper), null === this._timekeeper)) throw new Error("Orbit diagram requires a lunar timekeeper object.");
                (this._isDraggingAllowed = !0),
                    (this._isDraggingInProgress = !1),
                    (this._dragElement = null),
                    (this._root = document.createElement("div")),
                    this._root.classList.add("wgbh-orbit-diagram-root"),
                    (this._note = document.createElement("div")),
                    this._note.classList.add("wgbh-orbit-diagram-note"),
                    (this._note.textContent = "not to scale"),
                    this._root.appendChild(this._note),
                    (this._svg = document.createElementNS(E, "svg")),
                    this._svg.classList.add("wgbh-orbit-diagram-svg"),
                    this._root.appendChild(this._svg),
                    (this._initMessage = new C()),
                    this._root.appendChild(this._initMessage.getElement()),
                    (this._sunGradientGroup = document.createElementNS(E, "g")),
                    this._svg.appendChild(this._sunGradientGroup),
                    (this._sunGradient = document.createElementNS(E, "image")),
                    this._sunGradient.setAttribute("preserveAspectRatio", "none"),
                    this._sunGradient.setAttribute("width", 200),
                    this._sunGradient.setAttribute("height", 400),
                    this._sunGradient.setAttribute("x", 0),
                    this._sunGradient.setAttribute("y", -200),
                    this._sunGradient.setAttributeNS("http://www.w3.org/1999/xlink", "href", o.a),
                    this._sunGradientGroup.appendChild(this._sunGradient),
                    (this._timeTickmarksGroup = document.createElementNS(E, "g")),
                    this._timeTickmarksGroup.setAttribute("visibility", "hidden"),
                    this._svg.appendChild(this._timeTickmarksGroup),
                    (this._timeTickmarks = document.createElementNS(E, "image")),
                    this._timeTickmarks.setAttribute("width", 340),
                    this._timeTickmarks.setAttribute("height", 340),
                    this._timeTickmarks.setAttribute("x", -170),
                    this._timeTickmarks.setAttribute("y", -170),
                    this._timeTickmarks.setAttributeNS("http://www.w3.org/1999/xlink", "href", d.a),
                    this._timeTickmarksGroup.appendChild(this._timeTickmarks),
                    (this._sunGroup = document.createElementNS(E, "g")),
                    this._svg.appendChild(this._sunGroup),
                    (this._sun = document.createElementNS(E, "image")),
                    this._sun.setAttribute("width", 200),
                    this._sun.setAttribute("height", 400),
                    this._sun.setAttribute("x", 0),
                    this._sun.setAttribute("y", -200),
                    this._sun.setAttributeNS("http://www.w3.org/1999/xlink", "href", r.a),
                    this._sunGroup.appendChild(this._sun),
                    (this._remSampler = document.createElement("div")),
                    this._remSampler.classList.add("wgbh-orbit-diagram-rem-sampler"),
                    this._root.appendChild(this._remSampler),
                    (this._margin = 0.05),
                    (this._earthSize = 0.2),
                    (this._orbitWidth = 2),
                    (this._orbitColor = "rgb(180, 180, 180)"),
                    (this._orbitStyle = "dotted"),
                    (this._orbit = document.createElementNS(E, "circle")),
                    this._orbit.setAttribute("fill", "none"),
                    this._svg.appendChild(this._orbit),
                    (this._earthMoonLineColor = "rgba(220, 220, 220, 1)"),
                    (this._earthMoonLineWidth = 3),
                    (this._earthMoonLine = document.createElementNS(E, "path")),
                    this._earthMoonLine.setAttribute("stroke", this._earthMoonLineColor),
                    this._earthMoonLine.setAttribute("stroke-width", 0.6 * this._earthMoonLineWidth),
                    this._earthMoonLine.setAttribute("visibility", "hidden"),
                    this._svg.appendChild(this._earthMoonLine),
                    (this._earth = new v(this)),
                    this._svg.appendChild(this._earth.getElement()),
                    (this._moon = new p(this)),
                    this._svg.appendChild(this._moon.getElement()),
                    (this._moon._otherElement = this._earth),
                    (this._earth._otherElement = this._moon),
                    (this._cursorRequests = {}),
                    (this._DEFAULT_CURSOR = "auto"),
                    (this._nextCursorPriority = 1),
                    (this._areHintsShown = !0),
                    (this._needs_redoLayout = !0);
            }
            dismissHints() {
                this._areHintsShown && (this._initMessage.dismiss(), this._moon.dismissInitHint(), this._earth.dismissInitHint(), (this._areHintsShown = !1));
            }
            getElement() {
                return this._root;
            }
            setParams(t) {
                t.hasOwnProperty("margin") && ((this._margin = t.margin), (this._needs_redoLayout = !0)),
                    t.hasOwnProperty("earthSize") && ((this._earthSize = t.earthSize), (this._needs_redoLayout = !0)),
                    t.hasOwnProperty("width") && ((this._width = t.width), (this._needs_redoLayout = !0)),
                    t.hasOwnProperty("height") && ((this._height = t.height), (this._needs_redoLayout = !0)),
                    t.hasOwnProperty("needsRedoLayout") && (this._needs_redoLayout = !0),
                    t.hasOwnProperty("showLunarLandmark") && this._moon.setShowLandmark(t.showLunarLandmark),
                    t.hasOwnProperty("showTimeTickmarks") && (t.showTimeTickmarks ? this._timeTickmarksGroup.setAttribute("visibility", "visible") : this._timeTickmarksGroup.setAttribute("visibility", "hidden")),
                    t.hasOwnProperty("showEarthBisector") && this._earth.setShowBisector(t.showEarthBisector),
                    t.hasOwnProperty("showEarthMoonLine") && (t.showEarthMoonLine ? this._earthMoonLine.setAttribute("visibility", "visible") : this._earthMoonLine.setAttribute("visibility", "hidden"));
            }
            update() {
                if ((this._needs_redoLayout && this._redoLayout(), this._needs_redrawOrbit && this._redrawOrbit(), this._timekeeper.getHasAnimationStateChanged())) {
                    let t = this._timekeeper.getAnimationState();
                    t === this._timekeeper.IDLE ? this._setIsDraggingAllowed(!0) : t === this._timekeeper.PLAYING || t === this._timekeeper.TRANSITIONING ? this._setIsDraggingAllowed(!1) : console.error("Unknown animation state.");
                }
                (this._timekeeper.getHasTimeChanged() || this._needs_updateEarthAndMoon) && this._updateEarthAndMoon();
            }
            _updateEarthAndMoon() {
                let t = this._timekeeper.getTime(),
                    e = 90 - 360 * t.fractionalTimeOfDay;
                this._earth.setRotation(e);
                let i = -360 * t.moonPhase;
                this._moon.setRotation(i);
                let n = Math.PI + 2 * Math.PI * t.moonPhase,
                    s = this._orbitCenterX + this._orbitRadiusPx * Math.cos(n),
                    r = this._orbitCenterY - this._orbitRadiusPx * Math.sin(n);
                this._moon.setPosition(s, r), this._earth.setMoonAnomaly(n), this._earthMoonLine.setAttribute("d", "M " + this._orbitCenterX + " " + this._orbitCenterY + " L " + s + " " + r), (this._needs_updateEarthAndMoon = !1);
            }
            getDiagramPtForClientPt(t) {
                let e = this._svg.getBoundingClientRect();
                return { x: t.x - e.left, y: t.y - e.top };
            }
            getOrbitPtForClientPt(t) {
                let e = this._svg.getBoundingClientRect(),
                    i = e.left + this._orbitCenterX,
                    n = e.top + this._orbitCenterY;
                return { x: t.x - i, y: t.y - n };
            }
            _redoLayout() {
                (this._needs_redrawOrbit = !0), (this._needs_updateEarthAndMoon = !0);
                const t = this._remSampler.getBoundingClientRect().width,
                    e = (this._width / t - 20) / 40,
                    i = (this._height / t - 10) / 20,
                    n = Math.min(1, Math.max(0, e, i));
                (this._root.style.width = this._width + "px"),
                    (this._root.style.height = this._height + "px"),
                    (this._svg.style.width = this._width + "px"),
                    (this._svg.style.height = this._height + "px"),
                    this._svg.setAttribute("viewBox", "0 0 " + this._width + " " + this._height),
                    (this._earthRadiusPx = 0.5 * this._earthSize * this._height),
                    (this._moonRadiusPx = 0.28 * this._earthRadiusPx),
                    (this._orbitRadiusPx = 0.5 * this._height - this._margin * this._height - this._moonRadiusPx),
                    (this._orbitCenterY = 0.5 * this._height),
                    (this._orbitCenterX = this._width - this._orbitCenterY);
                let s = "translate(" + this._orbitCenterX + ", " + this._orbitCenterY + ")";
                (s += " scale(" + this._earthRadiusPx / 50 + ")"),
                    this._timeTickmarksGroup.setAttribute("transform", s),
                    (this._moonScale = this._moonRadiusPx / 14),
                    (this._earthScale = this._earthRadiusPx / 50),
                    this._earth.setPosition(this._orbitCenterX, this._orbitCenterY),
                    this._earth.setScale(this._earthScale),
                    this._moon.setScale(this._moonScale);
                let r = this._height / 400;
                this._sunGroup.setAttribute("transform", "translate(0, " + this._height / 2 + ") scale(" + r + ")");
                let a = (this._orbitCenterX - 0.5 * this._orbitRadiusPx) / 200;
                this._sunGradient.setAttribute("transform", "translate(0, " + this._height / 2 + ") scale(" + a + ", " + r + ")"),
                    this._earth._maxMouseHitAreaDistance + this._moon._maxMouseHitAreaDistance > this._orbitRadiusPx && console.warn("The earth's and moon's mouse hit areas will overlap."),
                    this._earth._maxTouchHitAreaDistance + this._moon._maxTouchHitAreaDistance > this._orbitRadiusPx && console.warn("The earth's and moon's touch hit areas will overlap."),
                    this._initMessage.setPosition(this._width / 2, this._orbitCenterY - this._orbitRadiusPx),
                    this._initMessage.setScale(n);
                const o = 0.2 + 0.8 * n;
                (this._note.style.margin = "0 " + o + "rem " + o + "rem 0"), (this._note.style.fontSize = 0.6 + 0.4 * n + "rem"), (this._needs_redoLayout = !1);
            }
            _redrawOrbit() {
                if (
                    (this._orbit.setAttribute("cx", this._orbitCenterX),
                    this._orbit.setAttribute("cy", this._orbitCenterY),
                    this._orbit.setAttribute("r", this._orbitRadiusPx),
                    this._orbit.setAttribute("stroke-width", this._orbitWidth),
                    this._orbit.setAttribute("stroke", this._orbitColor),
                    "dotted" === this._orbitStyle)
                ) {
                    const t = 4 * this._orbitWidth,
                        e = 2 * Math.PI * this._orbitRadiusPx,
                        i = e / Math.ceil(e / t);
                    this._orbit.setAttribute("stroke-linecap", "round"), this._orbit.setAttribute("stroke-dasharray", "0 " + i);
                } else this._orbit.setAttribute("stroke-dasharray", "none");
                this._needs_redrawOrbit = !1;
            }
            _cancelDragging() {
                this._moon.cancelDragging(), this._earth.cancelDragging();
            }
            _setIsDraggingAllowed(t) {
                (this._isDraggingAllowed = Boolean(t)), this._isDraggingAllowed || this._cancelDragging(), this._updateEarthMoonAppearances();
            }
            _getIsDraggingAllowed() {
                return this._isDraggingAllowed;
            }
            _getIsDraggingInProgress() {
                return null !== this._dragElement;
            }
            _onDragBegin(t) {
                this._dragElement = t;
            }
            _onDragEnd(t) {
                this._dragElement = null;
            }
            _getCanDragInitOnElement(t) {
                return this._isDraggingAllowed && (null === this._dragElement || this._dragElement === t);
            }
            _getCanDragStartOnElement(t) {
                return this._isDraggingAllowed && null === this._dragElement;
            }
            _setCursor(t, e) {
                "string" != typeof e
                    ? this._cursorRequests.hasOwnProperty(t)
                        ? delete this._cursorRequests[t]
                        : console.error("_setCursor called with unknown key.")
                    : this._cursorRequests.hasOwnProperty(t)
                    ? ((this._cursorRequests[t].priority = this._nextCursorPriority++), (this._cursorRequests[t].cursor = e))
                    : (this._cursorRequests[t] = { priority: this._nextCursorPriority++, cursor: e });
                let i = this._DEFAULT_CURSOR,
                    n = Number.NEGATIVE_INFINITY;
                for (let t in this._cursorRequests) {
                    let e = this._cursorRequests[t];
                    e.priority >= n && ((n = e.priority), (i = e.cursor));
                }
                i !== this._cursor && ((this._cursor = i), (document.body.style.cursor = this._cursor));
            }
            _updateEarthMoonAppearances() {
                this._earth.updateAppearance(), this._moon.updateAppearance();
            }
        }
        var D = {
                playButton: { label: "Play", desc: "play" },
                pauseButton: { label: "Pause", desc: "pause" },
                incrementHourButton: { label: "1 Hour", desc: "go forward one hour" },
                incrementDayButton: { label: "1 Day", desc: "go forward one day" },
                decrementHourButton: { label: "1 Hour", desc: "go back one hour" },
                decrementDayButton: { label: "1 Day", desc: "go back one day" },
                goToDay1Button: { label: "Go to Day 1", desc: "go to day 1" },
                dayLabel: "Day",
                newMoon: "New Moon",
                waxingCrescent: "Waxing Crescent",
                firstQuarter: "First Quarter",
                waxingGibbous: "Waxing Gibbous",
                fullMoon: "Full Moon",
                waningGibbous: "Waning Gibbous",
                thirdQuarter: "Third Quarter",
                waningCrescent: "Waning Crescent",
                newMoon: "New Moon",
            },
            P = i(8),
            T = i.n(P),
            I = i(9),
            S = i.n(I),
            L = i(10),
            x = i.n(L),
            M = i(11),
            B = i.n(M),
            O = i(12),
            R = i.n(O),
            N = i(13),
            F = i.n(N);
        i(20);
        class H {
            constructor(t) {
                (this._isVisible = !0),
                    (this._button = document.createElement("button")),
                    this._button.classList.add("wgbh-button"),
                    (this._buttonStyle = window.getComputedStyle(this._button)),
                    this._button.setAttribute("aria-label", t.desc),
                    this._button.setAttribute("title", t.desc),
                    t.hasOwnProperty("specificClass") && this._button.classList.add(t.specificClass),
                    (this._contents = document.createElement("div")),
                    this._button.appendChild(this._contents),
                    t.hasOwnProperty("iconSrc") && ((this._icon = document.createElement("img")), (this._icon.src = t.iconSrc), this._contents.appendChild(this._icon)),
                    (this._label = null),
                    t.hasOwnProperty("label") && "" !== t.label && ((this._label = document.createElement("span")), (this._label.textContent = t.label), this._contents.appendChild(this._label)),
                    (this._isFocused = !1),
                    (this._isEnabled = !0),
                    (this._onFocus = this._onFocus.bind(this)),
                    (this._onBlur = this._onBlur.bind(this)),
                    this._button.addEventListener("focusin", this._onFocus),
                    this._button.addEventListener("focusout", this._onBlur);
            }
            toString() {
                return null !== this._label ? "Button (" + this._label.textContent + ")" : "Button (no label)";
            }
            _onFocus(t) {
                this._isFocused = !0;
            }
            _onBlur(t) {
                this._isFocused = !1;
            }
            getIsFocused() {
                return this._isFocused;
            }
            setIsFocused(t) {
                (t = Boolean(t)) !== this._isFocused && ((this._isFocused = t), this._isFocused ? this._button.focus() : this._button.blur());
            }
            getElement() {
                return this._button;
            }
            updateWithParams(t) {
                this._button.setAttribute("aria-label", t.desc), this._button.setAttribute("title", t.desc), null !== this._label && (this._label.textContent = t.label);
            }
            addHandler(t) {
                this._button.addEventListener("click", (e) => {
                    e.preventDefault(), t();
                });
            }
            setEnabled(t) {
                (t = Boolean(t)) !== this._isEnabled && ((this._isEnabled = t), (this._button.disabled = !this._isEnabled));
            }
            getIsVisible() {
                return this._isVisible;
            }
            setIsVisible(t) {
                (t = Boolean(t)) !== this._isVisible &&
                    ((this._isVisible = t),
                    this._isVisible
                        ? "string" == typeof this._originalDisplay
                            ? (this._button.style.display = this._originalDisplay)
                            : (this._button.style.display = "inline-block")
                        : ((this._originalDisplay = this._buttonStyle.getPropertyValue("display")), (this._button.style.display = "none")));
            }
        }
        i(22);
        class U {
            static getUniqueID() {
                let t = "wgbh-checkbox-" + U.prototype.__checkboxNum;
                return (U.prototype.__checkboxNum += 1), t;
            }
            constructor(t) {
                (this._onCheckChange = this._onCheckChange.bind(this)), (this._onFocusIn = this._onFocusIn.bind(this)), (this._onFocusOut = this._onFocusOut.bind(this));
                let e = "Checkbox";
                (this._isChecked = !0),
                    (this._callback = null),
                    (this._text = null),
                    "object" == typeof t &&
                        (t.hasOwnProperty("label") && (e = t.label),
                        t.hasOwnProperty("isChecked") && (this._isChecked = Boolean(t.isChecked)),
                        t.hasOwnProperty("callback") && (this._callback = t.callback),
                        t.hasOwnProperty("textElement") && (this._text = t.textElement));
                let i = U.getUniqueID();
                (this._element = document.createElement("div")),
                    this._element.classList.add("wgbh-checkbox"),
                    (this._check = document.createElement("input")),
                    this._check.classList.add("wgbh-checkbox-input"),
                    (this._check.type = "checkbox"),
                    (this._check.id = i),
                    (this._check.name = e),
                    (this._check.checked = this._isChecked),
                    this._check.addEventListener("change", this._onCheckChange),
                    (this._label = document.createElement("label")),
                    (this._label.htmlFor = i),
                    this._element.appendChild(this._label),
                    this._label.appendChild(this._check),
                    (this._indicator = document.createElement("div")),
                    this._indicator.classList.add("wgbh-checkbox-indicator"),
                    this._label.appendChild(this._indicator),
                    null === this._text && ((this._text = document.createElement("span")), (this._text.textContent = e)),
                    this._label.appendChild(this._text),
                    this._element.addEventListener("focusin", this._onFocusIn),
                    this._element.addEventListener("focusout", this._onFocusOut);
            }
            getElement() {
                return this._element;
            }
            setLabel(t) {
                (this._check.name = t), (this._labelText.textContent = t);
            }
            getIsChecked() {
                return this._isChecked;
            }
            setIsChecked(t) {
                (t = Boolean(t)), this._isChecked !== t && ((this._isChecked = t), (this._check.checked = this._isChecked));
            }
            _onCheckChange() {
                (this._isChecked = this._check.checked), null !== this._callback && this._callback(this, this._isChecked);
            }
            _onFocusIn(t) {
                this._element.classList.add("wgbh-checkbox-focused");
            }
            _onFocusOut(t) {
                this._element.classList.remove("wgbh-checkbox-focused");
            }
        }
        U.prototype.__checkboxNum = 1;
        class W {
            constructor(t) {
                (this._readout = document.createElement("div")),
                    this._readout.classList.add("wgbh-asset3-control-panel-readout"),
                    (this._label = document.createElement("div")),
                    this._label.classList.add("wgbh-asset3-control-panel-readout-label"),
                    (this._label.textContent = "."),
                    this._readout.appendChild(this._label),
                    (this._value = document.createElement("div")),
                    this._value.classList.add("wgbh-asset3-control-panel-readout-value"),
                    (this._value.textContent = "."),
                    this._readout.appendChild(this._value);
            }
            getElement() {
                return this._readout;
            }
            setLabel(t) {
                this._label.textContent = t;
            }
            setValue(t) {
                this._value.textContent = t;
            }
        }
        class G {
            constructor(t) {
                (this.MODE_ALL_DISABLED = 1), (this.MODE_PAUSE_ENABLED = 2), (this.MODE_ALL_ENABLED = 3), (this._parent = t), (this._element = document.createElement("div")), this._element.classList.add("wgbh-asset3-control-panel");
                let e = document.createElement("div");
                e.classList.add("wgbh-asset3-control-panel-section"), this._element.appendChild(e);
                let i = document.createElement("div");
                i.classList.add("wgbh-asset3-control-buttons"), this._element.appendChild(i);
                let n = document.createElement("div");
                n.classList.add("wgbh-asset3-control-panel-section"),
                    (n.style.marginBottom = "9px"),
                    this._element.appendChild(n),
                    (this._timerReadout = new W()),
                    e.appendChild(this._timerReadout.getElement()),
                    (this._timeOfDayReadout = new W()),
                    e.appendChild(this._timeOfDayReadout.getElement()),
                    this._timerReadout.setLabel("Time since new Moon:"),
                    this._timeOfDayReadout.setLabel("Observer's current time:");
                let s = this._parent._currLocalizations;
                const r = document.createElement("div");
                r.classList.add("wgbh-asset3-control-buttons-top"), i.appendChild(r);
                const a = document.createElement("div");
                a.classList.add("wgbh-asset3-control-buttons-left"), i.appendChild(a);
                const o = document.createElement("div");
                o.classList.add("wgbh-asset3-control-buttons-right"),
                    i.appendChild(o),
                    (this._decrementHourButton = new H({ desc: s.decrementHourButton.desc, label: s.decrementHourButton.label, iconSrc: B.a, specificClass: "wgbh-asset3-skip" })),
                    this._decrementHourButton.addHandler(this._parent.decrementHour),
                    a.appendChild(this._decrementHourButton.getElement()),
                    (this._decrementDayButton = new H({ desc: s.decrementDayButton.desc, label: s.decrementDayButton.label, iconSrc: x.a, specificClass: "wgbh-asset3-skip" })),
                    this._decrementDayButton.addHandler(this._parent.decrementDay),
                    a.appendChild(this._decrementDayButton.getElement()),
                    (this._playButton = new H({ desc: s.playButton.desc, label: "", iconSrc: T.a, specificClass: "wgbh-asset3-play-pause" })),
                    this._playButton.addHandler(this._parent.play),
                    r.appendChild(this._playButton.getElement()),
                    (this._pauseButton = new H({ desc: s.pauseButton.desc, label: "", iconSrc: S.a, specificClass: "wgbh-asset3-play-pause" })),
                    this._pauseButton.addHandler(this._parent.pause),
                    r.appendChild(this._pauseButton.getElement()),
                    (this._incrementHourButton = new H({ desc: s.incrementHourButton.desc, label: s.incrementHourButton.label, iconSrc: F.a, specificClass: "wgbh-asset3-skip" })),
                    this._incrementHourButton.addHandler(this._parent.incrementHour),
                    o.appendChild(this._incrementHourButton.getElement()),
                    (this._incrementDayButton = new H({ desc: s.incrementDayButton.desc, label: s.incrementDayButton.label, iconSrc: R.a, specificClass: "wgbh-asset3-skip" })),
                    this._incrementDayButton.addHandler(this._parent.incrementDay),
                    o.appendChild(this._incrementDayButton.getElement()),
                    (this._showTimeTickmarksCheck = new U({
                        label: "Show Time Tickmarks",
                        isChecked: this._parent._getShowTimeTickmarks(),
                        callback: (t, e) => {
                            this._parent._setShowTimeTickmarks(e);
                        },
                    })),
                    n.appendChild(this._showTimeTickmarksCheck.getElement()),
                    (this._showLunarLandmarkCheck = new U({
                        label: "Show Lunar Landmark",
                        isChecked: this._parent._getShowLunarLandmark(),
                        callback: (t, e) => {
                            this._parent._setShowLunarLandmark(e);
                        },
                    })),
                    n.appendChild(this._showLunarLandmarkCheck.getElement());
                let h = document.createElement("span"),
                    d = document.createElement("span");
                (d.textContent = "Show "), h.appendChild(d);
                let l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                l.setAttribute("viewBox", "0 0 1 1"), (l.style.height = "0.8em"), (l.style.width = "0.8em"), (l.style.verticalAlign = "middle"), (l.style.margin = "0em"), h.appendChild(l);
                let c = document.createElementNS("http://www.w3.org/2000/svg", "path");
                c.setAttribute("fill", "none"), c.setAttribute("stroke", "rgb(200, 200, 255)"), c.setAttribute("stroke-width", 0.1), c.setAttribute("d", "M 0.5 0.23 L 0.2 0.75 0.8 0.75 Z"), l.appendChild(c);
                let _ = document.createElement("span");
                _.classList.add("wgbh-asset3-moon-rise"), (_.textContent = "Moonrise"), h.appendChild(_);
                let u = document.createElement("span");
                (u.textContent = "/"), (u.style.marginRight = "0.1em"), (u.style.marginLeft = "0.1em"), h.appendChild(u);
                let m = document.createElement("span");
                m.classList.add("wgbh-asset3-moon-set"), (m.textContent = "Moonset"), h.appendChild(m);
                let g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                g.setAttribute("viewBox", "0 0 1 1"), (g.style.height = "0.8em"), (g.style.width = "0.8em"), (g.style.verticalAlign = "middle"), (g.style.margin = "0em"), h.appendChild(g);
                let p = document.createElementNS("http://www.w3.org/2000/svg", "path");
                p.setAttribute("fill", "none"), p.setAttribute("stroke", "rgb(255, 200, 200)"), p.setAttribute("stroke-width", 0.1), p.setAttribute("d", "M 0.5 0.15 L 0.2 0.5 0.5 0.85 0.8 0.5 Z"), g.appendChild(p);
                let b = document.createElement("span");
                (b.textContent = " Line"),
                    h.appendChild(b),
                    (this._showEarthBisectorCheck = new U({
                        label: "Show Moonrise Moonset Line",
                        textElement: h,
                        isChecked: this._parent._getShowEarthBisector(),
                        callback: (t, e) => {
                            this._parent._setShowEarthBisector(e);
                        },
                    })),
                    n.appendChild(this._showEarthBisectorCheck.getElement()),
                    (this._prevFocusedButton = null),
                    this.setMode(this.MODE_ALL_ENABLED);
            }
            getElement() {
                return this._element;
            }
            getHeight() {
                let t = this._element.getBoundingClientRect();
                return Math.ceil(t.height);
            }
            updateWithTime(t) {
                this._timerReadout.setValue(this.getTimeSinceNewMoonString(t)), this._timeOfDayReadout.setValue(this.getTimeAsDigitalTimeString(t));
            }
            getTimeSinceNewMoonString(t) {
                let e = t.daysSinceNew,
                    i = t.hoursSinceNew,
                    n = e.toFixed(0) + " ";
                return (n += 1 === e ? "day, " : "days, "), (n += i.toFixed(0) + " "), (n += 1 === i ? "hour" : "hours"), n;
            }
            getTimeAsDigitalTimeString(t) {
                let e = t.hour;
                e >= 12 && (e -= 12), e < 1 && (e = 12);
                let i = e.toFixed(0) + ":";
                return t.minute < 10 ? (i += "0" + t.minute.toFixed(0) + " ") : (i += t.minute.toFixed(0) + " "), t.hour < 12 ? (i += "AM") : (i += "PM"), i;
            }
            updateLocalizations() {
                let t = this._parent._currLocalizations;
                this._decrementHourButton.updateWithParams(t.decrementHourButton),
                    this._decrementDayButton.updateWithParams(t.decrementDayButton),
                    this._incrementHourButton.updateWithParams(t.incrementHourButton),
                    this._incrementDayButton.updateWithParams(t.incrementDayButton);
            }
            _getCurrentFocusedButton() {
                let t = [this._decrementDayButton, this._decrementHourButton, this._pauseButton, this._playButton, this._incrementHourButton, this._incrementDayButton];
                for (const e of t) if (e.getIsFocused()) return e;
                return null;
            }
            setMode(t) {
                if (t === this.MODE_ALL_DISABLED)
                    (this._prevFocusedButton = this._getCurrentFocusedButton()),
                        this._decrementDayButton.setEnabled(!1),
                        this._decrementHourButton.setEnabled(!1),
                        this._pauseButton.setEnabled(!1),
                        this._playButton.setEnabled(!1),
                        this._incrementHourButton.setEnabled(!1),
                        this._incrementDayButton.setEnabled(!1),
                        null !== this._prevFocusedButton && this._prevFocusedButton.setIsFocused(!1);
                else if (t === this.MODE_PAUSE_ENABLED)
                    (this._prevFocusedButton = this._getCurrentFocusedButton()),
                        this._playButton.setIsVisible(!1),
                        this._pauseButton.setIsVisible(!0),
                        this._decrementDayButton.setEnabled(!1),
                        this._decrementHourButton.setEnabled(!1),
                        this._pauseButton.setEnabled(!0),
                        this._incrementHourButton.setEnabled(!1),
                        this._incrementDayButton.setEnabled(!1),
                        this._prevFocusedButton === this._playButton ? this._pauseButton.setIsFocused(!0) : null !== this._prevFocusedButton && this._prevFocusedButton.setIsFocused(!1);
                else {
                    if (t !== this.MODE_ALL_ENABLED) return (this._prevFocusedButton = null), void console.error("Invalid mode.");
                    this._playButton.setIsVisible(!0),
                        this._pauseButton.setIsVisible(!1),
                        this._decrementDayButton.setEnabled(!0),
                        this._decrementHourButton.setEnabled(!0),
                        this._playButton.setEnabled(!0),
                        this._incrementHourButton.setEnabled(!0),
                        this._incrementDayButton.setEnabled(!0),
                        null !== this._prevFocusedButton && (this._prevFocusedButton.setIsFocused(!0), (this._prevFocusedButton = null));
                }
            }
        }
        class Y {
            constructor(t) {
                (this._sim = t),
                    (this._element = document.createElement("div")),
                    this._element.classList.add("wgbh-asset3-phase-readout"),
                    (this._name = document.createElement("div")),
                    this._name.classList.add("wgbh-asset3-phase-readout-value"),
                    (this._name.style.marginTop = "0.5rem"),
                    this._element.appendChild(this._name),
                    (this._percent = document.createElement("div")),
                    this._percent.classList.add("wgbh-asset3-phase-readout-value"),
                    (this._percent.style.marginBottom = "0.5rem"),
                    this._element.appendChild(this._percent);
            }
            getElement() {
                return this._element;
            }
            getHeight() {
                let t = this._element.getBoundingClientRect();
                return Math.ceil(t.height);
            }
            getDimensions() {
                let t = this._element.getBoundingClientRect();
                return { width: t.width, height: t.height };
            }
            setParams(t) {
                t.hasOwnProperty("phase") && ((this._phase = t.phase), (this._needs_update = !0));
            }
            update() {
                this._needs_update && ((this._name.textContent = this.getMoonPhaseName(this._phase)), (this._percent.textContent = this.getPercentIlluminatedString(this._phase)), (this._needs_update = !1));
            }
            getPercentIlluminatedString(t) {
                return (50 * (1 - Math.cos(2 * t * Math.PI))).toFixed(1) + "% Illuminated Visible";
            }
            getMoonPhaseName(t) {
                return (t = ((t % 1) + 1) % 1) < 0.02
                    ? this._sim._currLocalizations.newMoon
                    : t < 0.23
                    ? this._sim._currLocalizations.waxingCrescent
                    : t < 0.27
                    ? this._sim._currLocalizations.firstQuarter
                    : t < 0.45
                    ? this._sim._currLocalizations.waxingGibbous
                    : t < 0.55
                    ? this._sim._currLocalizations.fullMoon
                    : t < 0.73
                    ? this._sim._currLocalizations.waningGibbous
                    : t < 0.77
                    ? this._sim._currLocalizations.thirdQuarter
                    : t < 0.98
                    ? this._sim._currLocalizations.waningCrescent
                    : this._sim._currLocalizations.newMoon;
            }
        }
        i(24);
        var j = i(14),
            z = i.n(j);
        const q = "http://www.w3.org/2000/svg";
        class V {
            constructor() {
                (this._element = document.createElement("div")),
                    this._element.classList.add("wgbh-moon-phase-image"),
                    (this._svg = document.createElementNS(q, "svg")),
                    this._svg.classList.add("wgbh-moon-phase-image-svg"),
                    this._svg.setAttribute("viewBox", "0 0 100 100"),
                    this._element.appendChild(this._svg),
                    (this._image = document.createElementNS(q, "image")),
                    this._image.setAttributeNS("http://www.w3.org/1999/xlink", "href", z.a),
                    this._image.setAttribute("width", 100),
                    this._image.setAttribute("height", 100),
                    (this._shadow = document.createElementNS(q, "path")),
                    this._shadow.setAttribute("stroke", "none");
                const t = "wgbh-moon-phase-image-mask";
                (this._mask = document.createElementNS(q, "mask")),
                    this._mask.setAttribute("id", t),
                    (this._maskCircle = document.createElementNS(q, "circle")),
                    this._maskCircle.setAttribute("cx", 50),
                    this._maskCircle.setAttribute("cy", 50),
                    this._maskCircle.setAttribute("r", 50),
                    this._maskCircle.setAttribute("stroke", "none"),
                    this._maskCircle.setAttribute("fill", "white"),
                    this._mask.appendChild(this._maskCircle);
                (this._landmark = document.createElementNS(q, "path")), this._landmark.setAttribute("stroke", "none"), this._landmark.setAttribute("fill", "rgb(255, 100, 255)");
                let e = "M 60 50 ";
                (e += "A 10 10 "),
                    (e += "180 1 0 40 50 "),
                    (e += "A 10 10 "),
                    (e += "180 1 0 60 50 Z"),
                    (e += " M 57.5 50 "),
                    (e += "A 7.5 7.5 "),
                    (e += "180 1 1 42.5 50 "),
                    (e += "A 7.5 7.5 "),
                    (e += "180 1 1 57.5 50 Z"),
                    this._landmark.setAttribute("d", "M 60 50 A 10 10 180 1 0 40 50 A 10 10 180 1 0 60 50 Z M 57.5 50 A 7.5 7.5 180 1 1 42.5 50 A 7.5 7.5 180 1 1 57.5 50 Z");
                let i = document.createElementNS(q, "g");
                i.appendChild(this._image),
                    i.appendChild(this._shadow),
                    i.appendChild(this._landmark),
                    i.setAttribute("mask", "url(#" + t + ")"),
                    this._svg.appendChild(this._mask),
                    this._svg.appendChild(i),
                    (this._lastDim = null),
                    (this._dim = -1),
                    this.setParams({ width: null, height: null, phase: 0.7, shadowAlpha: 0.7, showLunarLandmark: !1 });
            }
            getElement() {
                return this._element;
            }
            setParams(t) {
                t.hasOwnProperty("width") && ((this._width = t.width), (this._needs_redoLayout = !0)),
                    t.hasOwnProperty("height") && ((this._height = t.height), (this._needs_redoLayout = !0)),
                    t.hasOwnProperty("phase") && ((this._phase = t.phase), (this._needs_redrawShadow = !0)),
                    t.hasOwnProperty("shadowAlpha") && ((this._shadowAlpha = t.shadowAlpha), (this._needs_setShadowAlpha = !0)),
                    t.hasOwnProperty("showLunarLandmark") && ((this._showLandmark = Boolean(t.showLunarLandmark)), (this._needs_updateLandmark = !0));
            }
            update() {
                let t = this._width,
                    e = this._height;
                if (null === t || null === e) {
                    let i = this._element.getBoundingClientRect();
                    null === t && (t = Math.floor(i.width)), null === e && (e = Math.floor(i.height));
                }
                let i = Math.min(t, e);
                null !== this._width && (this._element.style.width = i + "px"),
                    null !== this._height && (this._element.style.height = i + "px"),
                    this._dim !== i && ((this._dim = i), (this._needs_redoLayout = !0)),
                    this._needs_redoLayout && this._redoLayout(),
                    this._needs_updateLandmark && this._updateLandmark(),
                    this._needs_setShadowAlpha && (this._shadow.setAttribute("fill", "rgba(0, 0, 0, " + this._shadowAlpha + ")"), (this._needs_setShadowAlpha = !1)),
                    this._needs_redrawShadow && this._redrawShadow();
            }
            _redoLayout() {
                (this._svg.style.width = this._dim + "px"), (this._svg.style.height = this._dim + "px"), this._svg.setAttribute("width", this._dim), this._svg.setAttribute("height", this._dim), (this._needs_redoLayout = !1);
            }
            _updateLandmark() {
                this._showLandmark ? this._landmark.setAttribute("visibility", "visible") : this._landmark.setAttribute("visibility", "hidden"), (this._needs_updateLandmark = !1);
            }
            _redrawShadow() {
                const t = ((this._phase % 1) + 1) % 1,
                    e = 2 * Math.PI * t,
                    i = Math.abs(50 * Math.cos(e));
                let n = "";
                0 === t
                    ? (n = "M -10 -10 L 110 -10 110 110 -10 110 -10 -10 Z")
                    : t < 0.25
                    ? (n = "M 50 -10 L 50 0 A " + i + " 50 0 1 1 50 100 L 50 110 -10 110 -10 -10 50 -10 Z")
                    : 0.25 === t
                    ? (n = "M 50 -10 L 50 110 -10 110 -10 -10 50 -10 Z")
                    : t < 0.5
                    ? (n = "M 50 -10 L 50 0 A " + i + " 50 0 1 0 50 100 L 50 110 -10 110 -10 -10 50 -10 Z")
                    : 0.5 === t ||
                      (n =
                          t < 0.75
                              ? "M 50 -10 L 50 0 A " + i + " 50 0 1 1 50 100 L 50 110 110 110 110 -10 50 -10 Z"
                              : 0.75 === t
                              ? "M 50 -10 L 50 110 110 110 110 -10 50 -10 Z"
                              : "M 50 -10 L 50 0 A " + i + " 50 0 1 0 50 100 L 50 110 110 110 110 -10 50 -10 Z"),
                    this._shadow.setAttribute("d", n),
                    (this._needs_redrawShadow = !1);
            }
        }
        const X = V;
        "undefined" != typeof window &&
            (window.hasOwnProperty("WGBH") || (window.WGBH = {}),
            window.WGBH.hasOwnProperty("MoonPhaseImage")
                ? console.warn("The component WGBH.MoonPhaseImage has already been loaded. (This version: 0.4, build: 2019-09-20.)")
                : ((window.WGBH.MoonPhaseImage = X), console.info("Component loaded: WGBH.MoonPhaseImage (version: 0.4, build: 2019-09-20)")));
        class Z {
            constructor(t) {
                (this._sim = t),
                    (this._element = document.createElement("div")),
                    this._element.classList.add("wgbh-asset3-phase-panel"),
                    (this._readout = new Y(this._sim)),
                    this._element.appendChild(this._readout.getElement()),
                    (this._moonImage = new V()),
                    (this._moonImageElement = this._moonImage.getElement()),
                    this._element.appendChild(this._moonImageElement),
                    (this._width = -1),
                    (this._height = -1),
                    (this._defaultMoonPhaseImageMaxHeight = 40),
                    (this._maxHeight = null),
                    (this._needs_redoLayout = !0);
            }
            getElement() {
                return this._element;
            }
            setParams(t) {
                t.hasOwnProperty("maxHeight") && ((this._maxHeight = t.maxHeight), (this._needs_redoLayout = !0)), this._readout.setParams(t), this._moonImage.setParams(t);
            }
            update() {
                let t = this._element.getBoundingClientRect();
                (t.width === this._width && t.height === this._height) || ((this._needs_redoLayout = !0), (this._width = t.width), (this._height = t.height)),
                    this._readout.update(),
                    this._needs_redoLayout && this._redoLayout(),
                    this._moonImage.update();
            }
            _redoLayout() {
                let t = this._readout.getDimensions(),
                    e = this._height;
                null !== this._maxHeight && (e = this._maxHeight);
                let i = e - t.height;
                this._moonImage.setParams({ height: i }), (this._needs_redoLayout = !1);
            }
        }
        i.d(e, "LunarPhasesAsset3", function () {
            return K;
        });
        class K {
            constructor() {
                (this._currLocalizations = D),
                    (this.decrementDay = this.decrementDay.bind(this)),
                    (this.decrementHour = this.decrementHour.bind(this)),
                    (this.incrementDay = this.incrementDay.bind(this)),
                    (this.incrementHour = this.incrementHour.bind(this)),
                    (this.play = this.play.bind(this)),
                    (this.pause = this.pause.bind(this)),
                    (this.update = this.update.bind(this)),
                    (this.dismissHints = this.dismissHints.bind(this)),
                    (this._timekeeper = new n({ synodicPeriodInDays: 29.5 })),
                    this._timekeeper.setTime({ calendarDay: 1, fractionalTimeOfDay: 0.5 }),
                    this._timekeeper.setChangeCallback(this.update),
                    (this._element = document.createElement("div")),
                    this._element.classList.add("wgbh-asset3-root"),
                    (this._inner = document.createElement("div")),
                    this._inner.classList.add("wgbh-asset3-inner"),
                    this._element.appendChild(this._inner),
                    (this._innerStyle = window.getComputedStyle(this._inner));
                let t = document.createElement("div");
                t.classList.add("wgbh-asset3-primary"),
                    this._inner.appendChild(t),
                    (this._orbitDiagram = new k({ timekeeper: this._timekeeper })),
                    this._orbitDiagram.getElement().classList.add("wgbh-asset3-orbit-diagram"),
                    t.appendChild(this._orbitDiagram.getElement()),
                    (this._secondary = document.createElement("div")),
                    this._secondary.classList.add("wgbh-asset3-secondary"),
                    this._inner.appendChild(this._secondary),
                    (this._phasePanel = new Z(this)),
                    this._secondary.appendChild(this._phasePanel.getElement()),
                    (this._controlPanel = new G(this)),
                    this._secondary.appendChild(this._controlPanel.getElement()),
                    (this._phasePanelMaxHeightPct = 0.35),
                    (this._showTimeTickmarks = !1),
                    (this._showLunarLandmark = !1),
                    (this._showEarthBisector = !1),
                    this._calcWindowDim(),
                    (this._needs_redoLayout = !0),
                    (this._onWindowResize = this._onWindowResize.bind(this)),
                    window.addEventListener("resize", this._onWindowResize),
                    (this._hasActiveDismissListeners = !0),
                    (this.dismissHints = this.dismissHints.bind(this)),
                    document.body.addEventListener("focusin", this.dismissHints),
                    document.body.addEventListener("mousedown", this.dismissHints),
                    document.body.addEventListener("touchstart", this.dismissHints, { passive: !1 });
            }
            getElement() {
                return this._element;
            }
            setParams(t) {
                t.hasOwnProperty("needsRedoLayout") && (this._needs_redoLayout = Boolean(t.needsRedoLayout));
            }
            update() {
                if ((this._needs_updateLocalizations && this._controlPanel.updateLocalizations(), this._timekeeper.getHasTimeChanged())) {
                    let t = this._timekeeper.getTime();
                    this._phasePanel.setParams({ phase: t.moonPhase }), this._controlPanel.updateWithTime(t);
                }
                if (this._timekeeper.getHasAnimationStateChanged()) {
                    let t = this._timekeeper.getAnimationState();
                    t === n.prototype.IDLE
                        ? this._controlPanel.setMode(this._controlPanel.MODE_ALL_ENABLED)
                        : t === n.prototype.PLAYING
                        ? this._controlPanel.setMode(this._controlPanel.MODE_PAUSE_ENABLED)
                        : t === n.prototype.TRANSITIONING
                        ? this._controlPanel.setMode(this._controlPanel.MODE_ALL_DISABLED)
                        : console.error("Unknown animation state.");
                }
                this._needs_redoLayout && this._redoLayout1(), this._phasePanel.update(), this._needs_redoLayout && this._redoLayout2(), this._orbitDiagram.update(), this._timekeeper.clearFlags(), (this._needs_updateLocalizations = !1);
            }
            _setShowLunarLandmark(t) {
                (this._showLunarLandmark = t), this._orbitDiagram.setParams({ showLunarLandmark: t }), this._phasePanel.setParams({ showLunarLandmark: t }), this._phasePanel.update();
            }
            _getShowLunarLandmark() {
                return this._showLunarLandmark;
            }
            _setShowTimeTickmarks(t) {
                (this._showTimeTickmarks = t), this._orbitDiagram.setParams({ showTimeTickmarks: t });
            }
            _getShowTimeTickmarks() {
                return this._showTimeTickmarks;
            }
            _setShowEarthBisector(t) {
                (this._showEarthBisector = t), this._orbitDiagram.setParams({ showEarthBisector: t, showEarthMoonLine: t });
            }
            _getShowEarthBisector() {
                return this._showEarthBisector;
            }
            decrementDay() {
                this._timekeeper.setTimeByDelta({ day: -1 });
            }
            decrementHour() {
                this._timekeeper.setTimeByDelta({ hour: -1 });
            }
            incrementHour() {
                this._timekeeper.setTimeByDelta({ hour: 1 });
            }
            incrementDay() {
                this._timekeeper.setTimeByDelta({ day: 1 });
            }
            play() {
                this._timekeeper.setIsPlaying(!0);
            }
            pause() {
                this._timekeeper.setIsPlaying(!1);
            }
            dismissHints() {
                this._hasActiveDismissListeners &&
                    (document.body.removeEventListener("focusin", this.dismissHints),
                    document.body.removeEventListener("mousedown", this.dismissHints),
                    document.body.removeEventListener("touchstart", this.dismissHints),
                    (this._hasActiveDismissListeners = !1)),
                    this._orbitDiagram.dismissHints();
            }
            _onWindowResize() {
                this._calcWindowDim(), (this._needs_redoLayout = !0), this.update();
            }
            _calcWindowDim() {
                (this._windowWidth = window.innerWidth), (this._windowHeight = window.innerHeight);
            }
            _calcFullDim() {
                let t = parseFloat(this._innerStyle.getPropertyValue("min-width"));
                Number.isNaN(t) && (t = 0);
                let e = parseFloat(this._innerStyle.getPropertyValue("min-height"));
                Number.isNaN(e) && (e = 0), (this._width = this._windowWidth > t ? this._windowWidth : t), (this._height = this._windowHeight > e ? this._windowHeight : e);
            }
            _redoLayout1() {
                let t;
                this._calcFullDim(), (this._element.style.width = this._width + "px"), (this._element.style.height = this._height + "px"), (this._isInLandscape = window.matchMedia("(min-aspect-ratio: 160/100)").matches);
                const e = window.matchMedia("(min-height: 34rem)").matches;
                if (this._isInLandscape)
                    if (e) {
                        const e = this._controlPanel.getElement().getBoundingClientRect();
                        t = Math.floor(this._height - e.height);
                    } else t = Math.floor(this._height);
                else t = Math.floor(this._phasePanelMaxHeightPct * this._height);
                this._phasePanel.setParams({ maxHeight: t });
            }
            _redoLayout2() {
                const t = this._secondary.getBoundingClientRect();
                this._phasePanel.getElement().getBoundingClientRect(), this._controlPanel.getElement().getBoundingClientRect();
                let e = {};
                this._isInLandscape ? ((e.width = Math.floor(this._width - t.width)), (e.height = Math.floor(this._height))) : ((e.width = Math.floor(this._width)), (e.height = Math.floor(this._height - t.height))),
                    this._clampByAspectRatio(e, 1.4, 2),
                    this._orbitDiagram.setParams(e),
                    (this._needs_redoLayout = !1);
            }
            _clampByAspectRatio(t, e, i) {
                const n = t.width / t.height;
                n > i ? (t.width = t.height * i) : n < e && (t.height = t.width / e);
            }
        }
        const Q = K;
        "undefined" != typeof window &&
            (window.hasOwnProperty("WGBH") || (window.WGBH = {}),
            window.WGBH.hasOwnProperty("LunarPhasesAsset3")
                ? console.warn("The component WGBH.LunarPhasesAsset3 has already been loaded. (This version: 1.1.0, build: 2020-05-28.)")
                : ((window.WGBH.LunarPhasesAsset3 = Q), console.info("Component loaded: WGBH.LunarPhasesAsset3 (version: 1.1.0, build: 2020-05-28)")));
    },
]);