(function() {
    const W = document.createElement("link").relList;
    if (W && W.supports && W.supports("modulepreload"))
        return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
        R(g);
    new MutationObserver(g=>{
        for (const e of g)
            if (e.type === "childList")
                for (const f of e.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && R(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function B(g) {
        const e = {};
        return g.integrity && (e.integrity = g.integrity),
        g.referrerPolicy && (e.referrerPolicy = g.referrerPolicy),
        g.crossOrigin === "use-credentials" ? e.credentials = "include" : g.crossOrigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin",
        e
    }
    function R(g) {
        if (g.ep)
            return;
        g.ep = !0;
        const e = B(g);
        fetch(g.href, e)
    }
}
)();
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , ge = {
    exports: {}
};
/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(K, W) {
    (function(R, g) {
        K.exports = g()
    }
    )(re, function() {
        return function(B) {
            var R = {};
            function g(e) {
                if (R[e])
                    return R[e].exports;
                var f = R[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return B[e].call(f.exports, f, f.exports, g),
                f.l = !0,
                f.exports
            }
            return g.m = B,
            g.c = R,
            g.d = function(e, f, s) {
                g.o(e, f) || Object.defineProperty(e, f, {
                    enumerable: !0,
                    get: s
                })
            }
            ,
            g.r = function(e) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
            ,
            g.t = function(e, f) {
                if (f & 1 && (e = g(e)),
                f & 8 || f & 4 && typeof e == "object" && e && e.__esModule)
                    return e;
                var s = Object.create(null);
                if (g.r(s),
                Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: e
                }),
                f & 2 && typeof e != "string")
                    for (var a in e)
                        g.d(s, a, (function(c) {
                            return e[c]
                        }
                        ).bind(null, a));
                return s
            }
            ,
            g.n = function(e) {
                var f = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return g.d(f, "a", f),
                f
            }
            ,
            g.o = function(e, f) {
                return Object.prototype.hasOwnProperty.call(e, f)
            }
            ,
            g.p = "",
            g(g.s = 20)
        }([function(B, R) {
            var g = {};
            B.exports = g,
            function() {
                g._baseDelta = 1e3 / 60,
                g._nextId = 0,
                g._seed = 0,
                g._nowStartTime = +new Date,
                g._warnedOnce = {},
                g._decomp = null,
                g.extend = function(f, s) {
                    var a, c;
                    typeof s == "boolean" ? (a = 2,
                    c = s) : (a = 1,
                    c = !0);
                    for (var o = a; o < arguments.length; o++) {
                        var u = arguments[o];
                        if (u)
                            for (var r in u)
                                c && u[r] && u[r].constructor === Object && (!f[r] || f[r].constructor === Object) ? (f[r] = f[r] || {},
                                g.extend(f[r], c, u[r])) : f[r] = u[r]
                    }
                    return f
                }
                ,
                g.clone = function(f, s) {
                    return g.extend({}, s, f)
                }
                ,
                g.keys = function(f) {
                    if (Object.keys)
                        return Object.keys(f);
                    var s = [];
                    for (var a in f)
                        s.push(a);
                    return s
                }
                ,
                g.values = function(f) {
                    var s = [];
                    if (Object.keys) {
                        for (var a = Object.keys(f), c = 0; c < a.length; c++)
                            s.push(f[a[c]]);
                        return s
                    }
                    for (var o in f)
                        s.push(f[o]);
                    return s
                }
                ,
                g.get = function(f, s, a, c) {
                    s = s.split(".").slice(a, c);
                    for (var o = 0; o < s.length; o += 1)
                        f = f[s[o]];
                    return f
                }
                ,
                g.set = function(f, s, a, c, o) {
                    var u = s.split(".").slice(c, o);
                    return g.get(f, s, 0, -1)[u[u.length - 1]] = a,
                    a
                }
                ,
                g.shuffle = function(f) {
                    for (var s = f.length - 1; s > 0; s--) {
                        var a = Math.floor(g.random() * (s + 1))
                          , c = f[s];
                        f[s] = f[a],
                        f[a] = c
                    }
                    return f
                }
                ,
                g.choose = function(f) {
                    return f[Math.floor(g.random() * f.length)]
                }
                ,
                g.isElement = function(f) {
                    return typeof HTMLElement < "u" ? f instanceof HTMLElement : !!(f && f.nodeType && f.nodeName)
                }
                ,
                g.isArray = function(f) {
                    return Object.prototype.toString.call(f) === "[object Array]"
                }
                ,
                g.isFunction = function(f) {
                    return typeof f == "function"
                }
                ,
                g.isPlainObject = function(f) {
                    return typeof f == "object" && f.constructor === Object
                }
                ,
                g.isString = function(f) {
                    return toString.call(f) === "[object String]"
                }
                ,
                g.clamp = function(f, s, a) {
                    return f < s ? s : f > a ? a : f
                }
                ,
                g.sign = function(f) {
                    return f < 0 ? -1 : 1
                }
                ,
                g.now = function() {
                    if (typeof window < "u" && window.performance) {
                        if (window.performance.now)
                            return window.performance.now();
                        if (window.performance.webkitNow)
                            return window.performance.webkitNow()
                    }
                    return Date.now ? Date.now() : new Date - g._nowStartTime
                }
                ,
                g.random = function(f, s) {
                    return f = typeof f < "u" ? f : 0,
                    s = typeof s < "u" ? s : 1,
                    f + e() * (s - f)
                }
                ;
                var e = function() {
                    return g._seed = (g._seed * 9301 + 49297) % 233280,
                    g._seed / 233280
                };
                g.colorToNumber = function(f) {
                    return f = f.replace("#", ""),
                    f.length == 3 && (f = f.charAt(0) + f.charAt(0) + f.charAt(1) + f.charAt(1) + f.charAt(2) + f.charAt(2)),
                    parseInt(f, 16)
                }
                ,
                g.logLevel = 1,
                g.log = function() {
                    console && g.logLevel > 0 && g.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                }
                ,
                g.info = function() {
                    console && g.logLevel > 0 && g.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                }
                ,
                g.warn = function() {
                    console && g.logLevel > 0 && g.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                }
                ,
                g.warnOnce = function() {
                    var f = Array.prototype.slice.call(arguments).join(" ");
                    g._warnedOnce[f] || (g.warn(f),
                    g._warnedOnce[f] = !0)
                }
                ,
                g.deprecated = function(f, s, a) {
                    f[s] = g.chain(function() {
                        g.warnOnce("🔅 deprecated 🔅", a)
                    }, f[s])
                }
                ,
                g.nextId = function() {
                    return g._nextId++
                }
                ,
                g.indexOf = function(f, s) {
                    if (f.indexOf)
                        return f.indexOf(s);
                    for (var a = 0; a < f.length; a++)
                        if (f[a] === s)
                            return a;
                    return -1
                }
                ,
                g.map = function(f, s) {
                    if (f.map)
                        return f.map(s);
                    for (var a = [], c = 0; c < f.length; c += 1)
                        a.push(s(f[c]));
                    return a
                }
                ,
                g.topologicalSort = function(f) {
                    var s = []
                      , a = []
                      , c = [];
                    for (var o in f)
                        !a[o] && !c[o] && g._topologicalSort(o, a, c, f, s);
                    return s
                }
                ,
                g._topologicalSort = function(f, s, a, c, o) {
                    var u = c[f] || [];
                    a[f] = !0;
                    for (var r = 0; r < u.length; r += 1) {
                        var t = u[r];
                        a[t] || s[t] || g._topologicalSort(t, s, a, c, o)
                    }
                    a[f] = !1,
                    s[f] = !0,
                    o.push(f)
                }
                ,
                g.chain = function() {
                    for (var f = [], s = 0; s < arguments.length; s += 1) {
                        var a = arguments[s];
                        a._chained ? f.push.apply(f, a._chained) : f.push(a)
                    }
                    var c = function() {
                        for (var o, u = new Array(arguments.length), r = 0, t = arguments.length; r < t; r++)
                            u[r] = arguments[r];
                        for (r = 0; r < f.length; r += 1) {
                            var n = f[r].apply(o, u);
                            typeof n < "u" && (o = n)
                        }
                        return o
                    };
                    return c._chained = f,
                    c
                }
                ,
                g.chainPathBefore = function(f, s, a) {
                    return g.set(f, s, g.chain(a, g.get(f, s)))
                }
                ,
                g.chainPathAfter = function(f, s, a) {
                    return g.set(f, s, g.chain(g.get(f, s), a))
                }
                ,
                g.setDecomp = function(f) {
                    g._decomp = f
                }
                ,
                g.getDecomp = function() {
                    var f = g._decomp;
                    try {
                        !f && typeof window < "u" && (f = window.decomp),
                        !f && typeof re < "u" && (f = re.decomp)
                    } catch {
                        f = null
                    }
                    return f
                }
            }()
        }
        , function(B, R) {
            var g = {};
            B.exports = g,
            function() {
                g.create = function(e) {
                    var f = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    };
                    return e && g.update(f, e),
                    f
                }
                ,
                g.update = function(e, f, s) {
                    e.min.x = 1 / 0,
                    e.max.x = -1 / 0,
                    e.min.y = 1 / 0,
                    e.max.y = -1 / 0;
                    for (var a = 0; a < f.length; a++) {
                        var c = f[a];
                        c.x > e.max.x && (e.max.x = c.x),
                        c.x < e.min.x && (e.min.x = c.x),
                        c.y > e.max.y && (e.max.y = c.y),
                        c.y < e.min.y && (e.min.y = c.y)
                    }
                    s && (s.x > 0 ? e.max.x += s.x : e.min.x += s.x,
                    s.y > 0 ? e.max.y += s.y : e.min.y += s.y)
                }
                ,
                g.contains = function(e, f) {
                    return f.x >= e.min.x && f.x <= e.max.x && f.y >= e.min.y && f.y <= e.max.y
                }
                ,
                g.overlaps = function(e, f) {
                    return e.min.x <= f.max.x && e.max.x >= f.min.x && e.max.y >= f.min.y && e.min.y <= f.max.y
                }
                ,
                g.translate = function(e, f) {
                    e.min.x += f.x,
                    e.max.x += f.x,
                    e.min.y += f.y,
                    e.max.y += f.y
                }
                ,
                g.shift = function(e, f) {
                    var s = e.max.x - e.min.x
                      , a = e.max.y - e.min.y;
                    e.min.x = f.x,
                    e.max.x = f.x + s,
                    e.min.y = f.y,
                    e.max.y = f.y + a
                }
            }()
        }
        , function(B, R) {
            var g = {};
            B.exports = g,
            function() {
                g.create = function(e, f) {
                    return {
                        x: e || 0,
                        y: f || 0
                    }
                }
                ,
                g.clone = function(e) {
                    return {
                        x: e.x,
                        y: e.y
                    }
                }
                ,
                g.magnitude = function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y)
                }
                ,
                g.magnitudeSquared = function(e) {
                    return e.x * e.x + e.y * e.y
                }
                ,
                g.rotate = function(e, f, s) {
                    var a = Math.cos(f)
                      , c = Math.sin(f);
                    s || (s = {});
                    var o = e.x * a - e.y * c;
                    return s.y = e.x * c + e.y * a,
                    s.x = o,
                    s
                }
                ,
                g.rotateAbout = function(e, f, s, a) {
                    var c = Math.cos(f)
                      , o = Math.sin(f);
                    a || (a = {});
                    var u = s.x + ((e.x - s.x) * c - (e.y - s.y) * o);
                    return a.y = s.y + ((e.x - s.x) * o + (e.y - s.y) * c),
                    a.x = u,
                    a
                }
                ,
                g.normalise = function(e) {
                    var f = g.magnitude(e);
                    return f === 0 ? {
                        x: 0,
                        y: 0
                    } : {
                        x: e.x / f,
                        y: e.y / f
                    }
                }
                ,
                g.dot = function(e, f) {
                    return e.x * f.x + e.y * f.y
                }
                ,
                g.cross = function(e, f) {
                    return e.x * f.y - e.y * f.x
                }
                ,
                g.cross3 = function(e, f, s) {
                    return (f.x - e.x) * (s.y - e.y) - (f.y - e.y) * (s.x - e.x)
                }
                ,
                g.add = function(e, f, s) {
                    return s || (s = {}),
                    s.x = e.x + f.x,
                    s.y = e.y + f.y,
                    s
                }
                ,
                g.sub = function(e, f, s) {
                    return s || (s = {}),
                    s.x = e.x - f.x,
                    s.y = e.y - f.y,
                    s
                }
                ,
                g.mult = function(e, f) {
                    return {
                        x: e.x * f,
                        y: e.y * f
                    }
                }
                ,
                g.div = function(e, f) {
                    return {
                        x: e.x / f,
                        y: e.y / f
                    }
                }
                ,
                g.perp = function(e, f) {
                    return f = f === !0 ? -1 : 1,
                    {
                        x: f * -e.y,
                        y: f * e.x
                    }
                }
                ,
                g.neg = function(e) {
                    return {
                        x: -e.x,
                        y: -e.y
                    }
                }
                ,
                g.angle = function(e, f) {
                    return Math.atan2(f.y - e.y, f.x - e.x)
                }
                ,
                g._temp = [g.create(), g.create(), g.create(), g.create(), g.create(), g.create()]
            }()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(2)
              , s = g(0);
            (function() {
                e.create = function(a, c) {
                    for (var o = [], u = 0; u < a.length; u++) {
                        var r = a[u]
                          , t = {
                            x: r.x,
                            y: r.y,
                            index: u,
                            body: c,
                            isInternal: !1
                        };
                        o.push(t)
                    }
                    return o
                }
                ,
                e.fromPath = function(a, c) {
                    var o = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig
                      , u = [];
                    return a.replace(o, function(r, t, n) {
                        u.push({
                            x: parseFloat(t),
                            y: parseFloat(n)
                        })
                    }),
                    e.create(u, c)
                }
                ,
                e.centre = function(a) {
                    for (var c = e.area(a, !0), o = {
                        x: 0,
                        y: 0
                    }, u, r, t, n = 0; n < a.length; n++)
                        t = (n + 1) % a.length,
                        u = f.cross(a[n], a[t]),
                        r = f.mult(f.add(a[n], a[t]), u),
                        o = f.add(o, r);
                    return f.div(o, 6 * c)
                }
                ,
                e.mean = function(a) {
                    for (var c = {
                        x: 0,
                        y: 0
                    }, o = 0; o < a.length; o++)
                        c.x += a[o].x,
                        c.y += a[o].y;
                    return f.div(c, a.length)
                }
                ,
                e.area = function(a, c) {
                    for (var o = 0, u = a.length - 1, r = 0; r < a.length; r++)
                        o += (a[u].x - a[r].x) * (a[u].y + a[r].y),
                        u = r;
                    return c ? o / 2 : Math.abs(o) / 2
                }
                ,
                e.inertia = function(a, c) {
                    for (var o = 0, u = 0, r = a, t, n, i = 0; i < r.length; i++)
                        n = (i + 1) % r.length,
                        t = Math.abs(f.cross(r[n], r[i])),
                        o += t * (f.dot(r[n], r[n]) + f.dot(r[n], r[i]) + f.dot(r[i], r[i])),
                        u += t;
                    return c / 6 * (o / u)
                }
                ,
                e.translate = function(a, c, o) {
                    o = typeof o < "u" ? o : 1;
                    var u = a.length, r = c.x * o, t = c.y * o, n;
                    for (n = 0; n < u; n++)
                        a[n].x += r,
                        a[n].y += t;
                    return a
                }
                ,
                e.rotate = function(a, c, o) {
                    if (c !== 0) {
                        var u = Math.cos(c), r = Math.sin(c), t = o.x, n = o.y, i = a.length, l, x, y, P;
                        for (P = 0; P < i; P++)
                            l = a[P],
                            x = l.x - t,
                            y = l.y - n,
                            l.x = t + (x * u - y * r),
                            l.y = n + (x * r + y * u);
                        return a
                    }
                }
                ,
                e.contains = function(a, c) {
                    for (var o = c.x, u = c.y, r = a.length, t = a[r - 1], n, i = 0; i < r; i++) {
                        if (n = a[i],
                        (o - t.x) * (n.y - t.y) + (u - t.y) * (t.x - n.x) > 0)
                            return !1;
                        t = n
                    }
                    return !0
                }
                ,
                e.scale = function(a, c, o, u) {
                    if (c === 1 && o === 1)
                        return a;
                    u = u || e.centre(a);
                    for (var r, t, n = 0; n < a.length; n++)
                        r = a[n],
                        t = f.sub(r, u),
                        a[n].x = u.x + t.x * c,
                        a[n].y = u.y + t.y * o;
                    return a
                }
                ,
                e.chamfer = function(a, c, o, u, r) {
                    typeof c == "number" ? c = [c] : c = c || [8],
                    o = typeof o < "u" ? o : -1,
                    u = u || 2,
                    r = r || 14;
                    for (var t = [], n = 0; n < a.length; n++) {
                        var i = a[n - 1 >= 0 ? n - 1 : a.length - 1]
                          , l = a[n]
                          , x = a[(n + 1) % a.length]
                          , y = c[n < c.length ? n : c.length - 1];
                        if (y === 0) {
                            t.push(l);
                            continue
                        }
                        var P = f.normalise({
                            x: l.y - i.y,
                            y: i.x - l.x
                        })
                          , w = f.normalise({
                            x: x.y - l.y,
                            y: l.x - x.x
                        })
                          , v = Math.sqrt(2 * Math.pow(y, 2))
                          , p = f.mult(s.clone(P), y)
                          , m = f.normalise(f.mult(f.add(P, w), .5))
                          , h = f.sub(l, f.mult(m, v))
                          , S = o;
                        o === -1 && (S = Math.pow(y, .32) * 1.75),
                        S = s.clamp(S, u, r),
                        S % 2 === 1 && (S += 1);
                        for (var d = Math.acos(f.dot(P, w)), M = d / S, C = 0; C < S; C++)
                            t.push(f.add(f.rotate(p, M * C), h))
                    }
                    return t
                }
                ,
                e.clockwiseSort = function(a) {
                    var c = e.mean(a);
                    return a.sort(function(o, u) {
                        return f.angle(c, o) - f.angle(c, u)
                    }),
                    a
                }
                ,
                e.isConvex = function(a) {
                    var c = 0, o = a.length, u, r, t, n;
                    if (o < 3)
                        return null;
                    for (u = 0; u < o; u++)
                        if (r = (u + 1) % o,
                        t = (u + 2) % o,
                        n = (a[r].x - a[u].x) * (a[t].y - a[r].y),
                        n -= (a[r].y - a[u].y) * (a[t].x - a[r].x),
                        n < 0 ? c |= 1 : n > 0 && (c |= 2),
                        c === 3)
                            return !1;
                    return c !== 0 ? !0 : null
                }
                ,
                e.hull = function(a) {
                    var c = [], o = [], u, r;
                    for (a = a.slice(0),
                    a.sort(function(t, n) {
                        var i = t.x - n.x;
                        return i !== 0 ? i : t.y - n.y
                    }),
                    r = 0; r < a.length; r += 1) {
                        for (u = a[r]; o.length >= 2 && f.cross3(o[o.length - 2], o[o.length - 1], u) <= 0; )
                            o.pop();
                        o.push(u)
                    }
                    for (r = a.length - 1; r >= 0; r -= 1) {
                        for (u = a[r]; c.length >= 2 && f.cross3(c[c.length - 2], c[c.length - 1], u) <= 0; )
                            c.pop();
                        c.push(u)
                    }
                    return c.pop(),
                    o.pop(),
                    c.concat(o)
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(3)
              , s = g(2)
              , a = g(7)
              , c = g(0)
              , o = g(1)
              , u = g(11);
            (function() {
                e._timeCorrection = !0,
                e._inertiaScale = 4,
                e._nextCollidingGroupId = 1,
                e._nextNonCollidingGroupId = -1,
                e._nextCategory = 1,
                e._baseDelta = 1e3 / 60,
                e.create = function(t) {
                    var n = {
                        id: c.nextId(),
                        type: "body",
                        label: "Body",
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: f.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                        position: {
                            x: 0,
                            y: 0
                        },
                        force: {
                            x: 0,
                            y: 0
                        },
                        torque: 0,
                        positionImpulse: {
                            x: 0,
                            y: 0
                        },
                        constraintImpulse: {
                            x: 0,
                            y: 0,
                            angle: 0
                        },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: .001,
                        restitution: 0,
                        friction: .1,
                        frictionStatic: .5,
                        frictionAir: .01,
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        },
                        slop: .05,
                        timeScale: 1,
                        render: {
                            visible: !0,
                            opacity: 1,
                            strokeStyle: null,
                            fillStyle: null,
                            lineWidth: null,
                            sprite: {
                                xScale: 1,
                                yScale: 1,
                                xOffset: 0,
                                yOffset: 0
                            }
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 16.666666666666668,
                        _original: null
                    }
                      , i = c.extend(n, t);
                    return r(i, t),
                    i
                }
                ,
                e.nextGroup = function(t) {
                    return t ? e._nextNonCollidingGroupId-- : e._nextCollidingGroupId++
                }
                ,
                e.nextCategory = function() {
                    return e._nextCategory = e._nextCategory << 1,
                    e._nextCategory
                }
                ;
                var r = function(t, n) {
                    n = n || {},
                    e.set(t, {
                        bounds: t.bounds || o.create(t.vertices),
                        positionPrev: t.positionPrev || s.clone(t.position),
                        anglePrev: t.anglePrev || t.angle,
                        vertices: t.vertices,
                        parts: t.parts || [t],
                        isStatic: t.isStatic,
                        isSleeping: t.isSleeping,
                        parent: t.parent || t
                    }),
                    f.rotate(t.vertices, t.angle, t.position),
                    u.rotate(t.axes, t.angle),
                    o.update(t.bounds, t.vertices, t.velocity),
                    e.set(t, {
                        axes: n.axes || t.axes,
                        area: n.area || t.area,
                        mass: n.mass || t.mass,
                        inertia: n.inertia || t.inertia
                    });
                    var i = t.isStatic ? "#14151f" : c.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"])
                      , l = t.isStatic ? "#555" : "#ccc"
                      , x = t.isStatic && t.render.fillStyle === null ? 1 : 0;
                    t.render.fillStyle = t.render.fillStyle || i,
                    t.render.strokeStyle = t.render.strokeStyle || l,
                    t.render.lineWidth = t.render.lineWidth || x,
                    t.render.sprite.xOffset += -(t.bounds.min.x - t.position.x) / (t.bounds.max.x - t.bounds.min.x),
                    t.render.sprite.yOffset += -(t.bounds.min.y - t.position.y) / (t.bounds.max.y - t.bounds.min.y)
                };
                e.set = function(t, n, i) {
                    var l;
                    typeof n == "string" && (l = n,
                    n = {},
                    n[l] = i);
                    for (l in n)
                        if (Object.prototype.hasOwnProperty.call(n, l))
                            switch (i = n[l],
                            l) {
                            case "isStatic":
                                e.setStatic(t, i);
                                break;
                            case "isSleeping":
                                a.set(t, i);
                                break;
                            case "mass":
                                e.setMass(t, i);
                                break;
                            case "density":
                                e.setDensity(t, i);
                                break;
                            case "inertia":
                                e.setInertia(t, i);
                                break;
                            case "vertices":
                                e.setVertices(t, i);
                                break;
                            case "position":
                                e.setPosition(t, i);
                                break;
                            case "angle":
                                e.setAngle(t, i);
                                break;
                            case "velocity":
                                e.setVelocity(t, i);
                                break;
                            case "angularVelocity":
                                e.setAngularVelocity(t, i);
                                break;
                            case "speed":
                                e.setSpeed(t, i);
                                break;
                            case "angularSpeed":
                                e.setAngularSpeed(t, i);
                                break;
                            case "parts":
                                e.setParts(t, i);
                                break;
                            case "centre":
                                e.setCentre(t, i);
                                break;
                            default:
                                t[l] = i
                            }
                }
                ,
                e.setStatic = function(t, n) {
                    for (var i = 0; i < t.parts.length; i++) {
                        var l = t.parts[i];
                        l.isStatic = n,
                        n ? (l._original = {
                            restitution: l.restitution,
                            friction: l.friction,
                            mass: l.mass,
                            inertia: l.inertia,
                            density: l.density,
                            inverseMass: l.inverseMass,
                            inverseInertia: l.inverseInertia
                        },
                        l.restitution = 0,
                        l.friction = 1,
                        l.mass = l.inertia = l.density = 1 / 0,
                        l.inverseMass = l.inverseInertia = 0,
                        l.positionPrev.x = l.position.x,
                        l.positionPrev.y = l.position.y,
                        l.anglePrev = l.angle,
                        l.angularVelocity = 0,
                        l.speed = 0,
                        l.angularSpeed = 0,
                        l.motion = 0) : l._original && (l.restitution = l._original.restitution,
                        l.friction = l._original.friction,
                        l.mass = l._original.mass,
                        l.inertia = l._original.inertia,
                        l.density = l._original.density,
                        l.inverseMass = l._original.inverseMass,
                        l.inverseInertia = l._original.inverseInertia,
                        l._original = null)
                    }
                }
                ,
                e.setMass = function(t, n) {
                    var i = t.inertia / (t.mass / 6);
                    t.inertia = i * (n / 6),
                    t.inverseInertia = 1 / t.inertia,
                    t.mass = n,
                    t.inverseMass = 1 / t.mass,
                    t.density = t.mass / t.area
                }
                ,
                e.setDensity = function(t, n) {
                    e.setMass(t, n * t.area),
                    t.density = n
                }
                ,
                e.setInertia = function(t, n) {
                    t.inertia = n,
                    t.inverseInertia = 1 / t.inertia
                }
                ,
                e.setVertices = function(t, n) {
                    n[0].body === t ? t.vertices = n : t.vertices = f.create(n, t),
                    t.axes = u.fromVertices(t.vertices),
                    t.area = f.area(t.vertices),
                    e.setMass(t, t.density * t.area);
                    var i = f.centre(t.vertices);
                    f.translate(t.vertices, i, -1),
                    e.setInertia(t, e._inertiaScale * f.inertia(t.vertices, t.mass)),
                    f.translate(t.vertices, t.position),
                    o.update(t.bounds, t.vertices, t.velocity)
                }
                ,
                e.setParts = function(t, n, i) {
                    var l;
                    for (n = n.slice(0),
                    t.parts.length = 0,
                    t.parts.push(t),
                    t.parent = t,
                    l = 0; l < n.length; l++) {
                        var x = n[l];
                        x !== t && (x.parent = t,
                        t.parts.push(x))
                    }
                    if (t.parts.length !== 1) {
                        if (i = typeof i < "u" ? i : !0,
                        i) {
                            var y = [];
                            for (l = 0; l < n.length; l++)
                                y = y.concat(n[l].vertices);
                            f.clockwiseSort(y);
                            var P = f.hull(y)
                              , w = f.centre(P);
                            e.setVertices(t, P),
                            f.translate(t.vertices, w)
                        }
                        var v = e._totalProperties(t);
                        t.area = v.area,
                        t.parent = t,
                        t.position.x = v.centre.x,
                        t.position.y = v.centre.y,
                        t.positionPrev.x = v.centre.x,
                        t.positionPrev.y = v.centre.y,
                        e.setMass(t, v.mass),
                        e.setInertia(t, v.inertia),
                        e.setPosition(t, v.centre)
                    }
                }
                ,
                e.setCentre = function(t, n, i) {
                    i ? (t.positionPrev.x += n.x,
                    t.positionPrev.y += n.y,
                    t.position.x += n.x,
                    t.position.y += n.y) : (t.positionPrev.x = n.x - (t.position.x - t.positionPrev.x),
                    t.positionPrev.y = n.y - (t.position.y - t.positionPrev.y),
                    t.position.x = n.x,
                    t.position.y = n.y)
                }
                ,
                e.setPosition = function(t, n, i) {
                    var l = s.sub(n, t.position);
                    i ? (t.positionPrev.x = t.position.x,
                    t.positionPrev.y = t.position.y,
                    t.velocity.x = l.x,
                    t.velocity.y = l.y,
                    t.speed = s.magnitude(l)) : (t.positionPrev.x += l.x,
                    t.positionPrev.y += l.y);
                    for (var x = 0; x < t.parts.length; x++) {
                        var y = t.parts[x];
                        y.position.x += l.x,
                        y.position.y += l.y,
                        f.translate(y.vertices, l),
                        o.update(y.bounds, y.vertices, t.velocity)
                    }
                }
                ,
                e.setAngle = function(t, n, i) {
                    var l = n - t.angle;
                    i ? (t.anglePrev = t.angle,
                    t.angularVelocity = l,
                    t.angularSpeed = Math.abs(l)) : t.anglePrev += l;
                    for (var x = 0; x < t.parts.length; x++) {
                        var y = t.parts[x];
                        y.angle += l,
                        f.rotate(y.vertices, l, t.position),
                        u.rotate(y.axes, l),
                        o.update(y.bounds, y.vertices, t.velocity),
                        x > 0 && s.rotateAbout(y.position, l, t.position, y.position)
                    }
                }
                ,
                e.setVelocity = function(t, n) {
                    var i = t.deltaTime / e._baseDelta;
                    t.positionPrev.x = t.position.x - n.x * i,
                    t.positionPrev.y = t.position.y - n.y * i,
                    t.velocity.x = (t.position.x - t.positionPrev.x) / i,
                    t.velocity.y = (t.position.y - t.positionPrev.y) / i,
                    t.speed = s.magnitude(t.velocity)
                }
                ,
                e.getVelocity = function(t) {
                    var n = e._baseDelta / t.deltaTime;
                    return {
                        x: (t.position.x - t.positionPrev.x) * n,
                        y: (t.position.y - t.positionPrev.y) * n
                    }
                }
                ,
                e.getSpeed = function(t) {
                    return s.magnitude(e.getVelocity(t))
                }
                ,
                e.setSpeed = function(t, n) {
                    e.setVelocity(t, s.mult(s.normalise(e.getVelocity(t)), n))
                }
                ,
                e.setAngularVelocity = function(t, n) {
                    var i = t.deltaTime / e._baseDelta;
                    t.anglePrev = t.angle - n * i,
                    t.angularVelocity = (t.angle - t.anglePrev) / i,
                    t.angularSpeed = Math.abs(t.angularVelocity)
                }
                ,
                e.getAngularVelocity = function(t) {
                    return (t.angle - t.anglePrev) * e._baseDelta / t.deltaTime
                }
                ,
                e.getAngularSpeed = function(t) {
                    return Math.abs(e.getAngularVelocity(t))
                }
                ,
                e.setAngularSpeed = function(t, n) {
                    e.setAngularVelocity(t, c.sign(e.getAngularVelocity(t)) * n)
                }
                ,
                e.translate = function(t, n, i) {
                    e.setPosition(t, s.add(t.position, n), i)
                }
                ,
                e.rotate = function(t, n, i, l) {
                    if (!i)
                        e.setAngle(t, t.angle + n, l);
                    else {
                        var x = Math.cos(n)
                          , y = Math.sin(n)
                          , P = t.position.x - i.x
                          , w = t.position.y - i.y;
                        e.setPosition(t, {
                            x: i.x + (P * x - w * y),
                            y: i.y + (P * y + w * x)
                        }, l),
                        e.setAngle(t, t.angle + n, l)
                    }
                }
                ,
                e.scale = function(t, n, i, l) {
                    var x = 0
                      , y = 0;
                    l = l || t.position;
                    for (var P = 0; P < t.parts.length; P++) {
                        var w = t.parts[P];
                        f.scale(w.vertices, n, i, l),
                        w.axes = u.fromVertices(w.vertices),
                        w.area = f.area(w.vertices),
                        e.setMass(w, t.density * w.area),
                        f.translate(w.vertices, {
                            x: -w.position.x,
                            y: -w.position.y
                        }),
                        e.setInertia(w, e._inertiaScale * f.inertia(w.vertices, w.mass)),
                        f.translate(w.vertices, {
                            x: w.position.x,
                            y: w.position.y
                        }),
                        P > 0 && (x += w.area,
                        y += w.inertia),
                        w.position.x = l.x + (w.position.x - l.x) * n,
                        w.position.y = l.y + (w.position.y - l.y) * i,
                        o.update(w.bounds, w.vertices, t.velocity)
                    }
                    t.parts.length > 1 && (t.area = x,
                    t.isStatic || (e.setMass(t, t.density * x),
                    e.setInertia(t, y))),
                    t.circleRadius && (n === i ? t.circleRadius *= n : t.circleRadius = null)
                }
                ,
                e.update = function(t, n) {
                    n = (typeof n < "u" ? n : 1e3 / 60) * t.timeScale;
                    var i = n * n
                      , l = e._timeCorrection ? n / (t.deltaTime || n) : 1
                      , x = 1 - t.frictionAir * (n / c._baseDelta)
                      , y = (t.position.x - t.positionPrev.x) * l
                      , P = (t.position.y - t.positionPrev.y) * l;
                    t.velocity.x = y * x + t.force.x / t.mass * i,
                    t.velocity.y = P * x + t.force.y / t.mass * i,
                    t.positionPrev.x = t.position.x,
                    t.positionPrev.y = t.position.y,
                    t.position.x += t.velocity.x,
                    t.position.y += t.velocity.y,
                    t.deltaTime = n,
                    t.angularVelocity = (t.angle - t.anglePrev) * x * l + t.torque / t.inertia * i,
                    t.anglePrev = t.angle,
                    t.angle += t.angularVelocity;
                    for (var w = 0; w < t.parts.length; w++) {
                        var v = t.parts[w];
                        f.translate(v.vertices, t.velocity),
                        w > 0 && (v.position.x += t.velocity.x,
                        v.position.y += t.velocity.y),
                        t.angularVelocity !== 0 && (f.rotate(v.vertices, t.angularVelocity, t.position),
                        u.rotate(v.axes, t.angularVelocity),
                        w > 0 && s.rotateAbout(v.position, t.angularVelocity, t.position, v.position)),
                        o.update(v.bounds, v.vertices, t.velocity)
                    }
                }
                ,
                e.updateVelocities = function(t) {
                    var n = e._baseDelta / t.deltaTime
                      , i = t.velocity;
                    i.x = (t.position.x - t.positionPrev.x) * n,
                    i.y = (t.position.y - t.positionPrev.y) * n,
                    t.speed = Math.sqrt(i.x * i.x + i.y * i.y),
                    t.angularVelocity = (t.angle - t.anglePrev) * n,
                    t.angularSpeed = Math.abs(t.angularVelocity)
                }
                ,
                e.applyForce = function(t, n, i) {
                    var l = {
                        x: n.x - t.position.x,
                        y: n.y - t.position.y
                    };
                    t.force.x += i.x,
                    t.force.y += i.y,
                    t.torque += l.x * i.y - l.y * i.x
                }
                ,
                e._totalProperties = function(t) {
                    for (var n = {
                        mass: 0,
                        area: 0,
                        inertia: 0,
                        centre: {
                            x: 0,
                            y: 0
                        }
                    }, i = t.parts.length === 1 ? 0 : 1; i < t.parts.length; i++) {
                        var l = t.parts[i]
                          , x = l.mass !== 1 / 0 ? l.mass : 1;
                        n.mass += x,
                        n.area += l.area,
                        n.inertia += l.inertia,
                        n.centre = s.add(n.centre, s.mult(l.position, x))
                    }
                    return n.centre = s.div(n.centre, n.mass),
                    n
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(0);
            (function() {
                e.on = function(s, a, c) {
                    for (var o = a.split(" "), u, r = 0; r < o.length; r++)
                        u = o[r],
                        s.events = s.events || {},
                        s.events[u] = s.events[u] || [],
                        s.events[u].push(c);
                    return c
                }
                ,
                e.off = function(s, a, c) {
                    if (!a) {
                        s.events = {};
                        return
                    }
                    typeof a == "function" && (c = a,
                    a = f.keys(s.events).join(" "));
                    for (var o = a.split(" "), u = 0; u < o.length; u++) {
                        var r = s.events[o[u]]
                          , t = [];
                        if (c && r)
                            for (var n = 0; n < r.length; n++)
                                r[n] !== c && t.push(r[n]);
                        s.events[o[u]] = t
                    }
                }
                ,
                e.trigger = function(s, a, c) {
                    var o, u, r, t, n = s.events;
                    if (n && f.keys(n).length > 0) {
                        c || (c = {}),
                        o = a.split(" ");
                        for (var i = 0; i < o.length; i++)
                            if (u = o[i],
                            r = n[u],
                            r) {
                                t = f.clone(c, !1),
                                t.name = u,
                                t.source = s;
                                for (var l = 0; l < r.length; l++)
                                    r[l].apply(s, [t])
                            }
                    }
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(5)
              , s = g(0)
              , a = g(1)
              , c = g(4);
            (function() {
                e.create = function(o) {
                    return s.extend({
                        id: s.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {},
                        cache: {
                            allBodies: null,
                            allConstraints: null,
                            allComposites: null
                        }
                    }, o)
                }
                ,
                e.setModified = function(o, u, r, t) {
                    if (o.isModified = u,
                    u && o.cache && (o.cache.allBodies = null,
                    o.cache.allConstraints = null,
                    o.cache.allComposites = null),
                    r && o.parent && e.setModified(o.parent, u, r, t),
                    t)
                        for (var n = 0; n < o.composites.length; n++) {
                            var i = o.composites[n];
                            e.setModified(i, u, r, t)
                        }
                }
                ,
                e.add = function(o, u) {
                    var r = [].concat(u);
                    f.trigger(o, "beforeAdd", {
                        object: u
                    });
                    for (var t = 0; t < r.length; t++) {
                        var n = r[t];
                        switch (n.type) {
                        case "body":
                            if (n.parent !== n) {
                                s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                break
                            }
                            e.addBody(o, n);
                            break;
                        case "constraint":
                            e.addConstraint(o, n);
                            break;
                        case "composite":
                            e.addComposite(o, n);
                            break;
                        case "mouseConstraint":
                            e.addConstraint(o, n.constraint);
                            break
                        }
                    }
                    return f.trigger(o, "afterAdd", {
                        object: u
                    }),
                    o
                }
                ,
                e.remove = function(o, u, r) {
                    var t = [].concat(u);
                    f.trigger(o, "beforeRemove", {
                        object: u
                    });
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        switch (i.type) {
                        case "body":
                            e.removeBody(o, i, r);
                            break;
                        case "constraint":
                            e.removeConstraint(o, i, r);
                            break;
                        case "composite":
                            e.removeComposite(o, i, r);
                            break;
                        case "mouseConstraint":
                            e.removeConstraint(o, i.constraint);
                            break
                        }
                    }
                    return f.trigger(o, "afterRemove", {
                        object: u
                    }),
                    o
                }
                ,
                e.addComposite = function(o, u) {
                    return o.composites.push(u),
                    u.parent = o,
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.removeComposite = function(o, u, r) {
                    var t = s.indexOf(o.composites, u);
                    if (t !== -1 && e.removeCompositeAt(o, t),
                    r)
                        for (var n = 0; n < o.composites.length; n++)
                            e.removeComposite(o.composites[n], u, !0);
                    return o
                }
                ,
                e.removeCompositeAt = function(o, u) {
                    return o.composites.splice(u, 1),
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.addBody = function(o, u) {
                    return o.bodies.push(u),
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.removeBody = function(o, u, r) {
                    var t = s.indexOf(o.bodies, u);
                    if (t !== -1 && e.removeBodyAt(o, t),
                    r)
                        for (var n = 0; n < o.composites.length; n++)
                            e.removeBody(o.composites[n], u, !0);
                    return o
                }
                ,
                e.removeBodyAt = function(o, u) {
                    return o.bodies.splice(u, 1),
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.addConstraint = function(o, u) {
                    return o.constraints.push(u),
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.removeConstraint = function(o, u, r) {
                    var t = s.indexOf(o.constraints, u);
                    if (t !== -1 && e.removeConstraintAt(o, t),
                    r)
                        for (var n = 0; n < o.composites.length; n++)
                            e.removeConstraint(o.composites[n], u, !0);
                    return o
                }
                ,
                e.removeConstraintAt = function(o, u) {
                    return o.constraints.splice(u, 1),
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.clear = function(o, u, r) {
                    if (r)
                        for (var t = 0; t < o.composites.length; t++)
                            e.clear(o.composites[t], u, !0);
                    return u ? o.bodies = o.bodies.filter(function(n) {
                        return n.isStatic
                    }) : o.bodies.length = 0,
                    o.constraints.length = 0,
                    o.composites.length = 0,
                    e.setModified(o, !0, !0, !1),
                    o
                }
                ,
                e.allBodies = function(o) {
                    if (o.cache && o.cache.allBodies)
                        return o.cache.allBodies;
                    for (var u = [].concat(o.bodies), r = 0; r < o.composites.length; r++)
                        u = u.concat(e.allBodies(o.composites[r]));
                    return o.cache && (o.cache.allBodies = u),
                    u
                }
                ,
                e.allConstraints = function(o) {
                    if (o.cache && o.cache.allConstraints)
                        return o.cache.allConstraints;
                    for (var u = [].concat(o.constraints), r = 0; r < o.composites.length; r++)
                        u = u.concat(e.allConstraints(o.composites[r]));
                    return o.cache && (o.cache.allConstraints = u),
                    u
                }
                ,
                e.allComposites = function(o) {
                    if (o.cache && o.cache.allComposites)
                        return o.cache.allComposites;
                    for (var u = [].concat(o.composites), r = 0; r < o.composites.length; r++)
                        u = u.concat(e.allComposites(o.composites[r]));
                    return o.cache && (o.cache.allComposites = u),
                    u
                }
                ,
                e.get = function(o, u, r) {
                    var t, n;
                    switch (r) {
                    case "body":
                        t = e.allBodies(o);
                        break;
                    case "constraint":
                        t = e.allConstraints(o);
                        break;
                    case "composite":
                        t = e.allComposites(o).concat(o);
                        break
                    }
                    return t ? (n = t.filter(function(i) {
                        return i.id.toString() === u.toString()
                    }),
                    n.length === 0 ? null : n[0]) : null
                }
                ,
                e.move = function(o, u, r) {
                    return e.remove(o, u),
                    e.add(r, u),
                    o
                }
                ,
                e.rebase = function(o) {
                    for (var u = e.allBodies(o).concat(e.allConstraints(o)).concat(e.allComposites(o)), r = 0; r < u.length; r++)
                        u[r].id = s.nextId();
                    return o
                }
                ,
                e.translate = function(o, u, r) {
                    for (var t = r ? e.allBodies(o) : o.bodies, n = 0; n < t.length; n++)
                        c.translate(t[n], u);
                    return o
                }
                ,
                e.rotate = function(o, u, r, t) {
                    for (var n = Math.cos(u), i = Math.sin(u), l = t ? e.allBodies(o) : o.bodies, x = 0; x < l.length; x++) {
                        var y = l[x]
                          , P = y.position.x - r.x
                          , w = y.position.y - r.y;
                        c.setPosition(y, {
                            x: r.x + (P * n - w * i),
                            y: r.y + (P * i + w * n)
                        }),
                        c.rotate(y, u)
                    }
                    return o
                }
                ,
                e.scale = function(o, u, r, t, n) {
                    for (var i = n ? e.allBodies(o) : o.bodies, l = 0; l < i.length; l++) {
                        var x = i[l]
                          , y = x.position.x - t.x
                          , P = x.position.y - t.y;
                        c.setPosition(x, {
                            x: t.x + y * u,
                            y: t.y + P * r
                        }),
                        c.scale(x, u, r)
                    }
                    return o
                }
                ,
                e.bounds = function(o) {
                    for (var u = e.allBodies(o), r = [], t = 0; t < u.length; t += 1) {
                        var n = u[t];
                        r.push(n.bounds.min, n.bounds.max)
                    }
                    return a.create(r)
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(4)
              , s = g(5)
              , a = g(0);
            (function() {
                e._motionWakeThreshold = .18,
                e._motionSleepThreshold = .08,
                e._minBias = .9,
                e.update = function(c, o) {
                    for (var u = o / a._baseDelta, r = e._motionSleepThreshold, t = 0; t < c.length; t++) {
                        var n = c[t]
                          , i = f.getSpeed(n)
                          , l = f.getAngularSpeed(n)
                          , x = i * i + l * l;
                        if (n.force.x !== 0 || n.force.y !== 0) {
                            e.set(n, !1);
                            continue
                        }
                        var y = Math.min(n.motion, x)
                          , P = Math.max(n.motion, x);
                        n.motion = e._minBias * y + (1 - e._minBias) * P,
                        n.sleepThreshold > 0 && n.motion < r ? (n.sleepCounter += 1,
                        n.sleepCounter >= n.sleepThreshold / u && e.set(n, !0)) : n.sleepCounter > 0 && (n.sleepCounter -= 1)
                    }
                }
                ,
                e.afterCollisions = function(c) {
                    for (var o = e._motionSleepThreshold, u = 0; u < c.length; u++) {
                        var r = c[u];
                        if (r.isActive) {
                            var t = r.collision
                              , n = t.bodyA.parent
                              , i = t.bodyB.parent;
                            if (!(n.isSleeping && i.isSleeping || n.isStatic || i.isStatic) && (n.isSleeping || i.isSleeping)) {
                                var l = n.isSleeping && !n.isStatic ? n : i
                                  , x = l === n ? i : n;
                                !l.isStatic && x.motion > o && e.set(l, !1)
                            }
                        }
                    }
                }
                ,
                e.set = function(c, o) {
                    var u = c.isSleeping;
                    o ? (c.isSleeping = !0,
                    c.sleepCounter = c.sleepThreshold,
                    c.positionImpulse.x = 0,
                    c.positionImpulse.y = 0,
                    c.positionPrev.x = c.position.x,
                    c.positionPrev.y = c.position.y,
                    c.anglePrev = c.angle,
                    c.speed = 0,
                    c.angularSpeed = 0,
                    c.motion = 0,
                    u || s.trigger(c, "sleepStart")) : (c.isSleeping = !1,
                    c.sleepCounter = 0,
                    u && s.trigger(c, "sleepEnd"))
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(3)
              , s = g(9);
            (function() {
                var a = []
                  , c = {
                    overlap: 0,
                    axis: null
                }
                  , o = {
                    overlap: 0,
                    axis: null
                };
                e.create = function(u, r) {
                    return {
                        pair: null,
                        collided: !1,
                        bodyA: u,
                        bodyB: r,
                        parentA: u.parent,
                        parentB: r.parent,
                        depth: 0,
                        normal: {
                            x: 0,
                            y: 0
                        },
                        tangent: {
                            x: 0,
                            y: 0
                        },
                        penetration: {
                            x: 0,
                            y: 0
                        },
                        supports: []
                    }
                }
                ,
                e.collides = function(u, r, t) {
                    if (e._overlapAxes(c, u.vertices, r.vertices, u.axes),
                    c.overlap <= 0 || (e._overlapAxes(o, r.vertices, u.vertices, r.axes),
                    o.overlap <= 0))
                        return null;
                    var n = t && t.table[s.id(u, r)], i;
                    n ? i = n.collision : (i = e.create(u, r),
                    i.collided = !0,
                    i.bodyA = u.id < r.id ? u : r,
                    i.bodyB = u.id < r.id ? r : u,
                    i.parentA = i.bodyA.parent,
                    i.parentB = i.bodyB.parent),
                    u = i.bodyA,
                    r = i.bodyB;
                    var l;
                    c.overlap < o.overlap ? l = c : l = o;
                    var x = i.normal
                      , y = i.supports
                      , P = l.axis
                      , w = P.x
                      , v = P.y;
                    w * (r.position.x - u.position.x) + v * (r.position.y - u.position.y) < 0 ? (x.x = w,
                    x.y = v) : (x.x = -w,
                    x.y = -v),
                    i.tangent.x = -x.y,
                    i.tangent.y = x.x,
                    i.depth = l.overlap,
                    i.penetration.x = x.x * i.depth,
                    i.penetration.y = x.y * i.depth;
                    var p = e._findSupports(u, r, x, 1)
                      , m = 0;
                    if (f.contains(u.vertices, p[0]) && (y[m++] = p[0]),
                    f.contains(u.vertices, p[1]) && (y[m++] = p[1]),
                    m < 2) {
                        var h = e._findSupports(r, u, x, -1);
                        f.contains(r.vertices, h[0]) && (y[m++] = h[0]),
                        m < 2 && f.contains(r.vertices, h[1]) && (y[m++] = h[1])
                    }
                    return m === 0 && (y[m++] = p[0]),
                    y.length = m,
                    i
                }
                ,
                e._overlapAxes = function(u, r, t, n) {
                    var i = r.length, l = t.length, x = r[0].x, y = r[0].y, P = t[0].x, w = t[0].y, v = n.length, p = Number.MAX_VALUE, m = 0, h, S, d, M, C, A;
                    for (C = 0; C < v; C++) {
                        var T = n[C]
                          , I = T.x
                          , L = T.y
                          , E = x * I + y * L
                          , F = P * I + w * L
                          , V = E
                          , O = F;
                        for (A = 1; A < i; A += 1)
                            M = r[A].x * I + r[A].y * L,
                            M > V ? V = M : M < E && (E = M);
                        for (A = 1; A < l; A += 1)
                            M = t[A].x * I + t[A].y * L,
                            M > O ? O = M : M < F && (F = M);
                        if (S = V - F,
                        d = O - E,
                        h = S < d ? S : d,
                        h < p && (p = h,
                        m = C,
                        h <= 0))
                            break
                    }
                    u.axis = n[m],
                    u.overlap = p
                }
                ,
                e._projectToAxis = function(u, r, t) {
                    for (var n = r[0].x * t.x + r[0].y * t.y, i = n, l = 1; l < r.length; l += 1) {
                        var x = r[l].x * t.x + r[l].y * t.y;
                        x > i ? i = x : x < n && (n = x)
                    }
                    u.min = n,
                    u.max = i
                }
                ,
                e._findSupports = function(u, r, t, n) {
                    var i = r.vertices, l = i.length, x = u.position.x, y = u.position.y, P = t.x * n, w = t.y * n, v = Number.MAX_VALUE, p, m, h, S, d;
                    for (d = 0; d < l; d += 1)
                        m = i[d],
                        S = P * (x - m.x) + w * (y - m.y),
                        S < v && (v = S,
                        p = m);
                    return h = i[(l + p.index - 1) % l],
                    v = P * (x - h.x) + w * (y - h.y),
                    m = i[(p.index + 1) % l],
                    P * (x - m.x) + w * (y - m.y) < v ? (a[0] = p,
                    a[1] = m,
                    a) : (a[0] = p,
                    a[1] = h,
                    a)
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(16);
            (function() {
                e.create = function(s, a) {
                    var c = s.bodyA
                      , o = s.bodyB
                      , u = {
                        id: e.id(c, o),
                        bodyA: c,
                        bodyB: o,
                        collision: s,
                        contacts: [],
                        activeContacts: [],
                        separation: 0,
                        isActive: !0,
                        confirmedActive: !0,
                        isSensor: c.isSensor || o.isSensor,
                        timeCreated: a,
                        timeUpdated: a,
                        inverseMass: 0,
                        friction: 0,
                        frictionStatic: 0,
                        restitution: 0,
                        slop: 0
                    };
                    return e.update(u, s, a),
                    u
                }
                ,
                e.update = function(s, a, c) {
                    var o = s.contacts
                      , u = a.supports
                      , r = s.activeContacts
                      , t = a.parentA
                      , n = a.parentB
                      , i = t.vertices.length;
                    s.isActive = !0,
                    s.timeUpdated = c,
                    s.collision = a,
                    s.separation = a.depth,
                    s.inverseMass = t.inverseMass + n.inverseMass,
                    s.friction = t.friction < n.friction ? t.friction : n.friction,
                    s.frictionStatic = t.frictionStatic > n.frictionStatic ? t.frictionStatic : n.frictionStatic,
                    s.restitution = t.restitution > n.restitution ? t.restitution : n.restitution,
                    s.slop = t.slop > n.slop ? t.slop : n.slop,
                    a.pair = s,
                    r.length = 0;
                    for (var l = 0; l < u.length; l++) {
                        var x = u[l]
                          , y = x.body === t ? x.index : i + x.index
                          , P = o[y];
                        P ? r.push(P) : r.push(o[y] = f.create(x))
                    }
                }
                ,
                e.setActive = function(s, a, c) {
                    a ? (s.isActive = !0,
                    s.timeUpdated = c) : (s.isActive = !1,
                    s.activeContacts.length = 0)
                }
                ,
                e.id = function(s, a) {
                    return s.id < a.id ? "A" + s.id + "B" + a.id : "A" + a.id + "B" + s.id
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(3)
              , s = g(2)
              , a = g(7)
              , c = g(1)
              , o = g(11)
              , u = g(0);
            (function() {
                e._warming = .4,
                e._torqueDampen = 1,
                e._minLength = 1e-6,
                e.create = function(r) {
                    var t = r;
                    t.bodyA && !t.pointA && (t.pointA = {
                        x: 0,
                        y: 0
                    }),
                    t.bodyB && !t.pointB && (t.pointB = {
                        x: 0,
                        y: 0
                    });
                    var n = t.bodyA ? s.add(t.bodyA.position, t.pointA) : t.pointA
                      , i = t.bodyB ? s.add(t.bodyB.position, t.pointB) : t.pointB
                      , l = s.magnitude(s.sub(n, i));
                    t.length = typeof t.length < "u" ? t.length : l,
                    t.id = t.id || u.nextId(),
                    t.label = t.label || "Constraint",
                    t.type = "constraint",
                    t.stiffness = t.stiffness || (t.length > 0 ? 1 : .7),
                    t.damping = t.damping || 0,
                    t.angularStiffness = t.angularStiffness || 0,
                    t.angleA = t.bodyA ? t.bodyA.angle : t.angleA,
                    t.angleB = t.bodyB ? t.bodyB.angle : t.angleB,
                    t.plugin = {};
                    var x = {
                        visible: !0,
                        lineWidth: 2,
                        strokeStyle: "#ffffff",
                        type: "line",
                        anchors: !0
                    };
                    return t.length === 0 && t.stiffness > .1 ? (x.type = "pin",
                    x.anchors = !1) : t.stiffness < .9 && (x.type = "spring"),
                    t.render = u.extend(x, t.render),
                    t
                }
                ,
                e.preSolveAll = function(r) {
                    for (var t = 0; t < r.length; t += 1) {
                        var n = r[t]
                          , i = n.constraintImpulse;
                        n.isStatic || i.x === 0 && i.y === 0 && i.angle === 0 || (n.position.x += i.x,
                        n.position.y += i.y,
                        n.angle += i.angle)
                    }
                }
                ,
                e.solveAll = function(r, t) {
                    for (var n = u.clamp(t / u._baseDelta, 0, 1), i = 0; i < r.length; i += 1) {
                        var l = r[i]
                          , x = !l.bodyA || l.bodyA && l.bodyA.isStatic
                          , y = !l.bodyB || l.bodyB && l.bodyB.isStatic;
                        (x || y) && e.solve(r[i], n)
                    }
                    for (i = 0; i < r.length; i += 1)
                        l = r[i],
                        x = !l.bodyA || l.bodyA && l.bodyA.isStatic,
                        y = !l.bodyB || l.bodyB && l.bodyB.isStatic,
                        !x && !y && e.solve(r[i], n)
                }
                ,
                e.solve = function(r, t) {
                    var n = r.bodyA
                      , i = r.bodyB
                      , l = r.pointA
                      , x = r.pointB;
                    if (!(!n && !i)) {
                        n && !n.isStatic && (s.rotate(l, n.angle - r.angleA, l),
                        r.angleA = n.angle),
                        i && !i.isStatic && (s.rotate(x, i.angle - r.angleB, x),
                        r.angleB = i.angle);
                        var y = l
                          , P = x;
                        if (n && (y = s.add(n.position, l)),
                        i && (P = s.add(i.position, x)),
                        !(!y || !P)) {
                            var w = s.sub(y, P)
                              , v = s.magnitude(w);
                            v < e._minLength && (v = e._minLength);
                            var p = (v - r.length) / v, m = r.stiffness >= 1 || r.length === 0, h = m ? r.stiffness * t : r.stiffness * t * t, S = r.damping * t, d = s.mult(w, p * h), M = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0), C = (n ? n.inverseInertia : 0) + (i ? i.inverseInertia : 0), A = M + C, T, I, L, E, F;
                            if (S > 0) {
                                var V = s.create();
                                L = s.div(w, v),
                                F = s.sub(i && s.sub(i.position, i.positionPrev) || V, n && s.sub(n.position, n.positionPrev) || V),
                                E = s.dot(L, F)
                            }
                            n && !n.isStatic && (I = n.inverseMass / M,
                            n.constraintImpulse.x -= d.x * I,
                            n.constraintImpulse.y -= d.y * I,
                            n.position.x -= d.x * I,
                            n.position.y -= d.y * I,
                            S > 0 && (n.positionPrev.x -= S * L.x * E * I,
                            n.positionPrev.y -= S * L.y * E * I),
                            T = s.cross(l, d) / A * e._torqueDampen * n.inverseInertia * (1 - r.angularStiffness),
                            n.constraintImpulse.angle -= T,
                            n.angle -= T),
                            i && !i.isStatic && (I = i.inverseMass / M,
                            i.constraintImpulse.x += d.x * I,
                            i.constraintImpulse.y += d.y * I,
                            i.position.x += d.x * I,
                            i.position.y += d.y * I,
                            S > 0 && (i.positionPrev.x += S * L.x * E * I,
                            i.positionPrev.y += S * L.y * E * I),
                            T = s.cross(x, d) / A * e._torqueDampen * i.inverseInertia * (1 - r.angularStiffness),
                            i.constraintImpulse.angle += T,
                            i.angle += T)
                        }
                    }
                }
                ,
                e.postSolveAll = function(r) {
                    for (var t = 0; t < r.length; t++) {
                        var n = r[t]
                          , i = n.constraintImpulse;
                        if (!(n.isStatic || i.x === 0 && i.y === 0 && i.angle === 0)) {
                            a.set(n, !1);
                            for (var l = 0; l < n.parts.length; l++) {
                                var x = n.parts[l];
                                f.translate(x.vertices, i),
                                l > 0 && (x.position.x += i.x,
                                x.position.y += i.y),
                                i.angle !== 0 && (f.rotate(x.vertices, i.angle, n.position),
                                o.rotate(x.axes, i.angle),
                                l > 0 && s.rotateAbout(x.position, i.angle, n.position, x.position)),
                                c.update(x.bounds, x.vertices, n.velocity)
                            }
                            i.angle *= e._warming,
                            i.x *= e._warming,
                            i.y *= e._warming
                        }
                    }
                }
                ,
                e.pointAWorld = function(r) {
                    return {
                        x: (r.bodyA ? r.bodyA.position.x : 0) + (r.pointA ? r.pointA.x : 0),
                        y: (r.bodyA ? r.bodyA.position.y : 0) + (r.pointA ? r.pointA.y : 0)
                    }
                }
                ,
                e.pointBWorld = function(r) {
                    return {
                        x: (r.bodyB ? r.bodyB.position.x : 0) + (r.pointB ? r.pointB.x : 0),
                        y: (r.bodyB ? r.bodyB.position.y : 0) + (r.pointB ? r.pointB.y : 0)
                    }
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(2)
              , s = g(0);
            (function() {
                e.fromVertices = function(a) {
                    for (var c = {}, o = 0; o < a.length; o++) {
                        var u = (o + 1) % a.length
                          , r = f.normalise({
                            x: a[u].y - a[o].y,
                            y: a[o].x - a[u].x
                        })
                          , t = r.y === 0 ? 1 / 0 : r.x / r.y;
                        t = t.toFixed(3).toString(),
                        c[t] = r
                    }
                    return s.values(c)
                }
                ,
                e.rotate = function(a, c) {
                    if (c !== 0)
                        for (var o = Math.cos(c), u = Math.sin(c), r = 0; r < a.length; r++) {
                            var t = a[r], n;
                            n = t.x * o - t.y * u,
                            t.y = t.x * u + t.y * o,
                            t.x = n
                        }
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(3)
              , s = g(0)
              , a = g(4)
              , c = g(1)
              , o = g(2);
            (function() {
                e.rectangle = function(u, r, t, n, i) {
                    i = i || {};
                    var l = {
                        label: "Rectangle Body",
                        position: {
                            x: u,
                            y: r
                        },
                        vertices: f.fromPath("L 0 0 L " + t + " 0 L " + t + " " + n + " L 0 " + n)
                    };
                    if (i.chamfer) {
                        var x = i.chamfer;
                        l.vertices = f.chamfer(l.vertices, x.radius, x.quality, x.qualityMin, x.qualityMax),
                        delete i.chamfer
                    }
                    return a.create(s.extend({}, l, i))
                }
                ,
                e.trapezoid = function(u, r, t, n, i, l) {
                    l = l || {},
                    i *= .5;
                    var x = (1 - i * 2) * t, y = t * i, P = y + x, w = P + y, v;
                    i < .5 ? v = "L 0 0 L " + y + " " + -n + " L " + P + " " + -n + " L " + w + " 0" : v = "L 0 0 L " + P + " " + -n + " L " + w + " 0";
                    var p = {
                        label: "Trapezoid Body",
                        position: {
                            x: u,
                            y: r
                        },
                        vertices: f.fromPath(v)
                    };
                    if (l.chamfer) {
                        var m = l.chamfer;
                        p.vertices = f.chamfer(p.vertices, m.radius, m.quality, m.qualityMin, m.qualityMax),
                        delete l.chamfer
                    }
                    return a.create(s.extend({}, p, l))
                }
                ,
                e.circle = function(u, r, t, n, i) {
                    n = n || {};
                    var l = {
                        label: "Circle Body",
                        circleRadius: t
                    };
                    i = i || 25;
                    var x = Math.ceil(Math.max(10, Math.min(i, t)));
                    return x % 2 === 1 && (x += 1),
                    e.polygon(u, r, x, t, s.extend({}, l, n))
                }
                ,
                e.polygon = function(u, r, t, n, i) {
                    if (i = i || {},
                    t < 3)
                        return e.circle(u, r, n, i);
                    for (var l = 2 * Math.PI / t, x = "", y = l * .5, P = 0; P < t; P += 1) {
                        var w = y + P * l
                          , v = Math.cos(w) * n
                          , p = Math.sin(w) * n;
                        x += "L " + v.toFixed(3) + " " + p.toFixed(3) + " "
                    }
                    var m = {
                        label: "Polygon Body",
                        position: {
                            x: u,
                            y: r
                        },
                        vertices: f.fromPath(x)
                    };
                    if (i.chamfer) {
                        var h = i.chamfer;
                        m.vertices = f.chamfer(m.vertices, h.radius, h.quality, h.qualityMin, h.qualityMax),
                        delete i.chamfer
                    }
                    return a.create(s.extend({}, m, i))
                }
                ,
                e.fromVertices = function(u, r, t, n, i, l, x, y) {
                    var P = s.getDecomp(), w, v, p, m, h, S, d, M, C, A, T;
                    for (w = !!(P && P.quickDecomp),
                    n = n || {},
                    p = [],
                    i = typeof i < "u" ? i : !1,
                    l = typeof l < "u" ? l : .01,
                    x = typeof x < "u" ? x : 10,
                    y = typeof y < "u" ? y : .01,
                    s.isArray(t[0]) || (t = [t]),
                    A = 0; A < t.length; A += 1)
                        if (S = t[A],
                        m = f.isConvex(S),
                        h = !m,
                        h && !w && s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),
                        m || !w)
                            m ? S = f.clockwiseSort(S) : S = f.hull(S),
                            p.push({
                                position: {
                                    x: u,
                                    y: r
                                },
                                vertices: S
                            });
                        else {
                            var I = S.map(function(H) {
                                return [H.x, H.y]
                            });
                            P.makeCCW(I),
                            l !== !1 && P.removeCollinearPoints(I, l),
                            y !== !1 && P.removeDuplicatePoints && P.removeDuplicatePoints(I, y);
                            var L = P.quickDecomp(I);
                            for (d = 0; d < L.length; d++) {
                                var E = L[d]
                                  , F = E.map(function(H) {
                                    return {
                                        x: H[0],
                                        y: H[1]
                                    }
                                });
                                x > 0 && f.area(F) < x || p.push({
                                    position: f.centre(F),
                                    vertices: F
                                })
                            }
                        }
                    for (d = 0; d < p.length; d++)
                        p[d] = a.create(s.extend(p[d], n));
                    if (i) {
                        var V = 5;
                        for (d = 0; d < p.length; d++) {
                            var O = p[d];
                            for (M = d + 1; M < p.length; M++) {
                                var N = p[M];
                                if (c.overlaps(O.bounds, N.bounds)) {
                                    var D = O.vertices
                                      , G = N.vertices;
                                    for (C = 0; C < O.vertices.length; C++)
                                        for (T = 0; T < N.vertices.length; T++) {
                                            var k = o.magnitudeSquared(o.sub(D[(C + 1) % D.length], G[T]))
                                              , Q = o.magnitudeSquared(o.sub(D[C], G[(T + 1) % G.length]));
                                            k < V && Q < V && (D[C].isInternal = !0,
                                            G[T].isInternal = !0)
                                        }
                                }
                            }
                        }
                    }
                    return p.length > 1 ? (v = a.create(s.extend({
                        parts: p.slice(0)
                    }, n)),
                    a.setPosition(v, {
                        x: u,
                        y: r
                    }),
                    v) : p[0]
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(0)
              , s = g(8);
            (function() {
                e.create = function(a) {
                    var c = {
                        bodies: [],
                        pairs: null
                    };
                    return f.extend(c, a)
                }
                ,
                e.setBodies = function(a, c) {
                    a.bodies = c.slice(0)
                }
                ,
                e.clear = function(a) {
                    a.bodies = []
                }
                ,
                e.collisions = function(a) {
                    var c = [], o = a.pairs, u = a.bodies, r = u.length, t = e.canCollide, n = s.collides, i, l;
                    for (u.sort(e._compareBoundsX),
                    i = 0; i < r; i++) {
                        var x = u[i]
                          , y = x.bounds
                          , P = x.bounds.max.x
                          , w = x.bounds.max.y
                          , v = x.bounds.min.y
                          , p = x.isStatic || x.isSleeping
                          , m = x.parts.length
                          , h = m === 1;
                        for (l = i + 1; l < r; l++) {
                            var S = u[l]
                              , d = S.bounds;
                            if (d.min.x > P)
                                break;
                            if (!(w < d.min.y || v > d.max.y) && !(p && (S.isStatic || S.isSleeping)) && t(x.collisionFilter, S.collisionFilter)) {
                                var M = S.parts.length;
                                if (h && M === 1) {
                                    var C = n(x, S, o);
                                    C && c.push(C)
                                } else
                                    for (var A = m > 1 ? 1 : 0, T = M > 1 ? 1 : 0, I = A; I < m; I++)
                                        for (var L = x.parts[I], y = L.bounds, E = T; E < M; E++) {
                                            var F = S.parts[E]
                                              , d = F.bounds;
                                            if (!(y.min.x > d.max.x || y.max.x < d.min.x || y.max.y < d.min.y || y.min.y > d.max.y)) {
                                                var C = n(L, F, o);
                                                C && c.push(C)
                                            }
                                        }
                            }
                        }
                    }
                    return c
                }
                ,
                e.canCollide = function(a, c) {
                    return a.group === c.group && a.group !== 0 ? a.group > 0 : (a.mask & c.category) !== 0 && (c.mask & a.category) !== 0
                }
                ,
                e._compareBoundsX = function(a, c) {
                    return a.bounds.min.x - c.bounds.min.x
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(0);
            (function() {
                e.create = function(s) {
                    var a = {};
                    return s || f.log("Mouse.create: element was undefined, defaulting to document.body", "warn"),
                    a.element = s || document.body,
                    a.absolute = {
                        x: 0,
                        y: 0
                    },
                    a.position = {
                        x: 0,
                        y: 0
                    },
                    a.mousedownPosition = {
                        x: 0,
                        y: 0
                    },
                    a.mouseupPosition = {
                        x: 0,
                        y: 0
                    },
                    a.offset = {
                        x: 0,
                        y: 0
                    },
                    a.scale = {
                        x: 1,
                        y: 1
                    },
                    a.wheelDelta = 0,
                    a.button = -1,
                    a.pixelRatio = parseInt(a.element.getAttribute("data-pixel-ratio"), 10) || 1,
                    a.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    },
                    a.mousemove = function(c) {
                        var o = e._getRelativeMousePosition(c, a.element, a.pixelRatio)
                          , u = c.changedTouches;
                        u && (a.button = 0,
                        c.preventDefault()),
                        a.absolute.x = o.x,
                        a.absolute.y = o.y,
                        a.position.x = a.absolute.x * a.scale.x + a.offset.x,
                        a.position.y = a.absolute.y * a.scale.y + a.offset.y,
                        a.sourceEvents.mousemove = c
                    }
                    ,
                    a.mousedown = function(c) {
                        var o = e._getRelativeMousePosition(c, a.element, a.pixelRatio)
                          , u = c.changedTouches;
                        u ? (a.button = 0,
                        c.preventDefault()) : a.button = c.button,
                        a.absolute.x = o.x,
                        a.absolute.y = o.y,
                        a.position.x = a.absolute.x * a.scale.x + a.offset.x,
                        a.position.y = a.absolute.y * a.scale.y + a.offset.y,
                        a.mousedownPosition.x = a.position.x,
                        a.mousedownPosition.y = a.position.y,
                        a.sourceEvents.mousedown = c
                    }
                    ,
                    a.mouseup = function(c) {
                        var o = e._getRelativeMousePosition(c, a.element, a.pixelRatio)
                          , u = c.changedTouches;
                        u && c.preventDefault(),
                        a.button = -1,
                        a.absolute.x = o.x,
                        a.absolute.y = o.y,
                        a.position.x = a.absolute.x * a.scale.x + a.offset.x,
                        a.position.y = a.absolute.y * a.scale.y + a.offset.y,
                        a.mouseupPosition.x = a.position.x,
                        a.mouseupPosition.y = a.position.y,
                        a.sourceEvents.mouseup = c
                    }
                    ,
                    a.mousewheel = function(c) {
                        a.wheelDelta = Math.max(-1, Math.min(1, c.wheelDelta || -c.detail)),
                        c.preventDefault()
                    }
                    ,
                    e.setElement(a, a.element),
                    a
                }
                ,
                e.setElement = function(s, a) {
                    s.element = a,
                    a.addEventListener("mousemove", s.mousemove),
                    a.addEventListener("mousedown", s.mousedown),
                    a.addEventListener("mouseup", s.mouseup),
                    a.addEventListener("mousewheel", s.mousewheel),
                    a.addEventListener("DOMMouseScroll", s.mousewheel),
                    a.addEventListener("touchmove", s.mousemove),
                    a.addEventListener("touchstart", s.mousedown),
                    a.addEventListener("touchend", s.mouseup)
                }
                ,
                e.clearSourceEvents = function(s) {
                    s.sourceEvents.mousemove = null,
                    s.sourceEvents.mousedown = null,
                    s.sourceEvents.mouseup = null,
                    s.sourceEvents.mousewheel = null,
                    s.wheelDelta = 0
                }
                ,
                e.setOffset = function(s, a) {
                    s.offset.x = a.x,
                    s.offset.y = a.y,
                    s.position.x = s.absolute.x * s.scale.x + s.offset.x,
                    s.position.y = s.absolute.y * s.scale.y + s.offset.y
                }
                ,
                e.setScale = function(s, a) {
                    s.scale.x = a.x,
                    s.scale.y = a.y,
                    s.position.x = s.absolute.x * s.scale.x + s.offset.x,
                    s.position.y = s.absolute.y * s.scale.y + s.offset.y
                }
                ,
                e._getRelativeMousePosition = function(s, a, c) {
                    var o = a.getBoundingClientRect(), u = document.documentElement || document.body.parentNode || document.body, r = window.pageXOffset !== void 0 ? window.pageXOffset : u.scrollLeft, t = window.pageYOffset !== void 0 ? window.pageYOffset : u.scrollTop, n = s.changedTouches, i, l;
                    return n ? (i = n[0].pageX - o.left - r,
                    l = n[0].pageY - o.top - t) : (i = s.pageX - o.left - r,
                    l = s.pageY - o.top - t),
                    {
                        x: i / (a.clientWidth / (a.width || a.clientWidth) * c),
                        y: l / (a.clientHeight / (a.height || a.clientHeight) * c)
                    }
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(0);
            (function() {
                e._registry = {},
                e.register = function(s) {
                    if (e.isPlugin(s) || f.warn("Plugin.register:", e.toString(s), "does not implement all required fields."),
                    s.name in e._registry) {
                        var a = e._registry[s.name]
                          , c = e.versionParse(s.version).number
                          , o = e.versionParse(a.version).number;
                        c > o ? (f.warn("Plugin.register:", e.toString(a), "was upgraded to", e.toString(s)),
                        e._registry[s.name] = s) : c < o ? f.warn("Plugin.register:", e.toString(a), "can not be downgraded to", e.toString(s)) : s !== a && f.warn("Plugin.register:", e.toString(s), "is already registered to different plugin object")
                    } else
                        e._registry[s.name] = s;
                    return s
                }
                ,
                e.resolve = function(s) {
                    return e._registry[e.dependencyParse(s).name]
                }
                ,
                e.toString = function(s) {
                    return typeof s == "string" ? s : (s.name || "anonymous") + "@" + (s.version || s.range || "0.0.0")
                }
                ,
                e.isPlugin = function(s) {
                    return s && s.name && s.version && s.install
                }
                ,
                e.isUsed = function(s, a) {
                    return s.used.indexOf(a) > -1
                }
                ,
                e.isFor = function(s, a) {
                    var c = s.for && e.dependencyParse(s.for);
                    return !s.for || a.name === c.name && e.versionSatisfies(a.version, c.range)
                }
                ,
                e.use = function(s, a) {
                    if (s.uses = (s.uses || []).concat(a || []),
                    s.uses.length === 0) {
                        f.warn("Plugin.use:", e.toString(s), "does not specify any dependencies to install.");
                        return
                    }
                    for (var c = e.dependencies(s), o = f.topologicalSort(c), u = [], r = 0; r < o.length; r += 1)
                        if (o[r] !== s.name) {
                            var t = e.resolve(o[r]);
                            if (!t) {
                                u.push("❌ " + o[r]);
                                continue
                            }
                            e.isUsed(s, t.name) || (e.isFor(t, s) || (f.warn("Plugin.use:", e.toString(t), "is for", t.for, "but installed on", e.toString(s) + "."),
                            t._warned = !0),
                            t.install ? t.install(s) : (f.warn("Plugin.use:", e.toString(t), "does not specify an install function."),
                            t._warned = !0),
                            t._warned ? (u.push("🔶 " + e.toString(t)),
                            delete t._warned) : u.push("✅ " + e.toString(t)),
                            s.used.push(t.name))
                        }
                    u.length > 0 && f.info(u.join("  "))
                }
                ,
                e.dependencies = function(s, a) {
                    var c = e.dependencyParse(s)
                      , o = c.name;
                    if (a = a || {},
                    !(o in a)) {
                        s = e.resolve(s) || s,
                        a[o] = f.map(s.uses || [], function(r) {
                            e.isPlugin(r) && e.register(r);
                            var t = e.dependencyParse(r)
                              , n = e.resolve(r);
                            return n && !e.versionSatisfies(n.version, t.range) ? (f.warn("Plugin.dependencies:", e.toString(n), "does not satisfy", e.toString(t), "used by", e.toString(c) + "."),
                            n._warned = !0,
                            s._warned = !0) : n || (f.warn("Plugin.dependencies:", e.toString(r), "used by", e.toString(c), "could not be resolved."),
                            s._warned = !0),
                            t.name
                        });
                        for (var u = 0; u < a[o].length; u += 1)
                            e.dependencies(a[o][u], a);
                        return a
                    }
                }
                ,
                e.dependencyParse = function(s) {
                    if (f.isString(s)) {
                        var a = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                        return a.test(s) || f.warn("Plugin.dependencyParse:", s, "is not a valid dependency string."),
                        {
                            name: s.split("@")[0],
                            range: s.split("@")[1] || "*"
                        }
                    }
                    return {
                        name: s.name,
                        range: s.range || s.version
                    }
                }
                ,
                e.versionParse = function(s) {
                    var a = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    a.test(s) || f.warn("Plugin.versionParse:", s, "is not a valid version or range.");
                    var c = a.exec(s)
                      , o = Number(c[4])
                      , u = Number(c[5])
                      , r = Number(c[6]);
                    return {
                        isRange: !!(c[1] || c[2]),
                        version: c[3],
                        range: s,
                        operator: c[1] || c[2] || "",
                        major: o,
                        minor: u,
                        patch: r,
                        parts: [o, u, r],
                        prerelease: c[7],
                        number: o * 1e8 + u * 1e4 + r
                    }
                }
                ,
                e.versionSatisfies = function(s, a) {
                    a = a || "*";
                    var c = e.versionParse(a)
                      , o = e.versionParse(s);
                    if (c.isRange) {
                        if (c.operator === "*" || s === "*")
                            return !0;
                        if (c.operator === ">")
                            return o.number > c.number;
                        if (c.operator === ">=")
                            return o.number >= c.number;
                        if (c.operator === "~")
                            return o.major === c.major && o.minor === c.minor && o.patch >= c.patch;
                        if (c.operator === "^")
                            return c.major > 0 ? o.major === c.major && o.number >= c.number : c.minor > 0 ? o.minor === c.minor && o.patch >= c.patch : o.patch === c.patch
                    }
                    return s === a || s === "*"
                }
            }
            )()
        }
        , function(B, R) {
            var g = {};
            B.exports = g,
            function() {
                g.create = function(e) {
                    return {
                        vertex: e,
                        normalImpulse: 0,
                        tangentImpulse: 0
                    }
                }
            }()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(7)
              , s = g(18)
              , a = g(13)
              , c = g(19)
              , o = g(5)
              , u = g(6)
              , r = g(10)
              , t = g(0)
              , n = g(4);
            (function() {
                e.create = function(i) {
                    i = i || {};
                    var l = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        gravity: {
                            x: 0,
                            y: 1,
                            scale: .001
                        },
                        timing: {
                            timestamp: 0,
                            timeScale: 1,
                            lastDelta: 0,
                            lastElapsed: 0
                        }
                    }
                      , x = t.extend(l, i);
                    return x.world = i.world || u.create({
                        label: "World"
                    }),
                    x.pairs = i.pairs || c.create(),
                    x.detector = i.detector || a.create(),
                    x.grid = {
                        buckets: []
                    },
                    x.world.gravity = x.gravity,
                    x.broadphase = x.grid,
                    x.metrics = {},
                    x
                }
                ,
                e.update = function(i, l) {
                    var x = t.now(), y = i.world, P = i.detector, w = i.pairs, v = i.timing, p = v.timestamp, m;
                    l = typeof l < "u" ? l : t._baseDelta,
                    l *= v.timeScale,
                    v.timestamp += l,
                    v.lastDelta = l;
                    var h = {
                        timestamp: v.timestamp,
                        delta: l
                    };
                    o.trigger(i, "beforeUpdate", h);
                    var S = u.allBodies(y)
                      , d = u.allConstraints(y);
                    for (y.isModified && (a.setBodies(P, S),
                    u.setModified(y, !1, !1, !0)),
                    i.enableSleeping && f.update(S, l),
                    e._bodiesApplyGravity(S, i.gravity),
                    l > 0 && e._bodiesUpdate(S, l),
                    r.preSolveAll(S),
                    m = 0; m < i.constraintIterations; m++)
                        r.solveAll(d, l);
                    r.postSolveAll(S),
                    P.pairs = i.pairs;
                    var M = a.collisions(P);
                    c.update(w, M, p),
                    i.enableSleeping && f.afterCollisions(w.list),
                    w.collisionStart.length > 0 && o.trigger(i, "collisionStart", {
                        pairs: w.collisionStart
                    });
                    var C = t.clamp(20 / i.positionIterations, 0, 1);
                    for (s.preSolvePosition(w.list),
                    m = 0; m < i.positionIterations; m++)
                        s.solvePosition(w.list, l, C);
                    for (s.postSolvePosition(S),
                    r.preSolveAll(S),
                    m = 0; m < i.constraintIterations; m++)
                        r.solveAll(d, l);
                    for (r.postSolveAll(S),
                    s.preSolveVelocity(w.list),
                    m = 0; m < i.velocityIterations; m++)
                        s.solveVelocity(w.list, l);
                    return e._bodiesUpdateVelocities(S),
                    w.collisionActive.length > 0 && o.trigger(i, "collisionActive", {
                        pairs: w.collisionActive
                    }),
                    w.collisionEnd.length > 0 && o.trigger(i, "collisionEnd", {
                        pairs: w.collisionEnd
                    }),
                    e._bodiesClearForces(S),
                    o.trigger(i, "afterUpdate", h),
                    i.timing.lastElapsed = t.now() - x,
                    i
                }
                ,
                e.merge = function(i, l) {
                    if (t.extend(i, l),
                    l.world) {
                        i.world = l.world,
                        e.clear(i);
                        for (var x = u.allBodies(i.world), y = 0; y < x.length; y++) {
                            var P = x[y];
                            f.set(P, !1),
                            P.id = t.nextId()
                        }
                    }
                }
                ,
                e.clear = function(i) {
                    c.clear(i.pairs),
                    a.clear(i.detector)
                }
                ,
                e._bodiesClearForces = function(i) {
                    for (var l = i.length, x = 0; x < l; x++) {
                        var y = i[x];
                        y.force.x = 0,
                        y.force.y = 0,
                        y.torque = 0
                    }
                }
                ,
                e._bodiesApplyGravity = function(i, l) {
                    var x = typeof l.scale < "u" ? l.scale : .001
                      , y = i.length;
                    if (!(l.x === 0 && l.y === 0 || x === 0))
                        for (var P = 0; P < y; P++) {
                            var w = i[P];
                            w.isStatic || w.isSleeping || (w.force.y += w.mass * l.y * x,
                            w.force.x += w.mass * l.x * x)
                        }
                }
                ,
                e._bodiesUpdate = function(i, l) {
                    for (var x = i.length, y = 0; y < x; y++) {
                        var P = i[y];
                        P.isStatic || P.isSleeping || n.update(P, l)
                    }
                }
                ,
                e._bodiesUpdateVelocities = function(i) {
                    for (var l = i.length, x = 0; x < l; x++)
                        n.updateVelocities(i[x])
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(3)
              , s = g(0)
              , a = g(1);
            (function() {
                e._restingThresh = 2,
                e._restingThreshTangent = Math.sqrt(6),
                e._positionDampen = .9,
                e._positionWarming = .8,
                e._frictionNormalMultiplier = 5,
                e._frictionMaxStatic = Number.MAX_VALUE,
                e.preSolvePosition = function(c) {
                    var o, u, r, t = c.length;
                    for (o = 0; o < t; o++)
                        u = c[o],
                        u.isActive && (r = u.activeContacts.length,
                        u.collision.parentA.totalContacts += r,
                        u.collision.parentB.totalContacts += r)
                }
                ,
                e.solvePosition = function(c, o, u) {
                    var r, t, n, i, l, x, y, P, w = e._positionDampen * (u || 1), v = s.clamp(o / s._baseDelta, 0, 1), p = c.length;
                    for (r = 0; r < p; r++)
                        t = c[r],
                        !(!t.isActive || t.isSensor) && (n = t.collision,
                        i = n.parentA,
                        l = n.parentB,
                        x = n.normal,
                        t.separation = x.x * (l.positionImpulse.x + n.penetration.x - i.positionImpulse.x) + x.y * (l.positionImpulse.y + n.penetration.y - i.positionImpulse.y));
                    for (r = 0; r < p; r++)
                        t = c[r],
                        !(!t.isActive || t.isSensor) && (n = t.collision,
                        i = n.parentA,
                        l = n.parentB,
                        x = n.normal,
                        P = t.separation - t.slop * v,
                        (i.isStatic || l.isStatic) && (P *= 2),
                        i.isStatic || i.isSleeping || (y = w / i.totalContacts,
                        i.positionImpulse.x += x.x * P * y,
                        i.positionImpulse.y += x.y * P * y),
                        l.isStatic || l.isSleeping || (y = w / l.totalContacts,
                        l.positionImpulse.x -= x.x * P * y,
                        l.positionImpulse.y -= x.y * P * y))
                }
                ,
                e.postSolvePosition = function(c) {
                    for (var o = e._positionWarming, u = c.length, r = f.translate, t = a.update, n = 0; n < u; n++) {
                        var i = c[n]
                          , l = i.positionImpulse
                          , x = l.x
                          , y = l.y
                          , P = i.velocity;
                        if (i.totalContacts = 0,
                        x !== 0 || y !== 0) {
                            for (var w = 0; w < i.parts.length; w++) {
                                var v = i.parts[w];
                                r(v.vertices, l),
                                t(v.bounds, v.vertices, P),
                                v.position.x += x,
                                v.position.y += y
                            }
                            i.positionPrev.x += x,
                            i.positionPrev.y += y,
                            x * P.x + y * P.y < 0 ? (l.x = 0,
                            l.y = 0) : (l.x *= o,
                            l.y *= o)
                        }
                    }
                }
                ,
                e.preSolveVelocity = function(c) {
                    var o = c.length, u, r;
                    for (u = 0; u < o; u++) {
                        var t = c[u];
                        if (!(!t.isActive || t.isSensor)) {
                            var n = t.activeContacts
                              , i = n.length
                              , l = t.collision
                              , x = l.parentA
                              , y = l.parentB
                              , P = l.normal
                              , w = l.tangent;
                            for (r = 0; r < i; r++) {
                                var v = n[r]
                                  , p = v.vertex
                                  , m = v.normalImpulse
                                  , h = v.tangentImpulse;
                                if (m !== 0 || h !== 0) {
                                    var S = P.x * m + w.x * h
                                      , d = P.y * m + w.y * h;
                                    x.isStatic || x.isSleeping || (x.positionPrev.x += S * x.inverseMass,
                                    x.positionPrev.y += d * x.inverseMass,
                                    x.anglePrev += x.inverseInertia * ((p.x - x.position.x) * d - (p.y - x.position.y) * S)),
                                    y.isStatic || y.isSleeping || (y.positionPrev.x -= S * y.inverseMass,
                                    y.positionPrev.y -= d * y.inverseMass,
                                    y.anglePrev -= y.inverseInertia * ((p.x - y.position.x) * d - (p.y - y.position.y) * S))
                                }
                            }
                        }
                    }
                }
                ,
                e.solveVelocity = function(c, o) {
                    var u = o / s._baseDelta, r = u * u, t = r * u, n = -e._restingThresh * u, i = e._restingThreshTangent, l = e._frictionNormalMultiplier * u, x = e._frictionMaxStatic, y = c.length, P, w, v, p;
                    for (v = 0; v < y; v++) {
                        var m = c[v];
                        if (!(!m.isActive || m.isSensor)) {
                            var h = m.collision
                              , S = h.parentA
                              , d = h.parentB
                              , M = S.velocity
                              , C = d.velocity
                              , A = h.normal.x
                              , T = h.normal.y
                              , I = h.tangent.x
                              , L = h.tangent.y
                              , E = m.activeContacts
                              , F = E.length
                              , V = 1 / F
                              , O = S.inverseMass + d.inverseMass
                              , N = m.friction * m.frictionStatic * l;
                            for (M.x = S.position.x - S.positionPrev.x,
                            M.y = S.position.y - S.positionPrev.y,
                            C.x = d.position.x - d.positionPrev.x,
                            C.y = d.position.y - d.positionPrev.y,
                            S.angularVelocity = S.angle - S.anglePrev,
                            d.angularVelocity = d.angle - d.anglePrev,
                            p = 0; p < F; p++) {
                                var D = E[p]
                                  , G = D.vertex
                                  , k = G.x - S.position.x
                                  , Q = G.y - S.position.y
                                  , H = G.x - d.position.x
                                  , Z = G.y - d.position.y
                                  , z = M.x - Q * S.angularVelocity
                                  , pe = M.y + k * S.angularVelocity
                                  , me = C.x - Z * d.angularVelocity
                                  , de = C.y + H * d.angularVelocity
                                  , se = z - me
                                  , oe = pe - de
                                  , ne = A * se + T * oe
                                  , J = I * se + L * oe
                                  , le = m.separation + ne
                                  , ie = Math.min(le, 1);
                                ie = le < 0 ? 0 : ie;
                                var fe = ie * N;
                                J < -fe || J > fe ? (w = J > 0 ? J : -J,
                                P = m.friction * (J > 0 ? 1 : -1) * t,
                                P < -w ? P = -w : P > w && (P = w)) : (P = J,
                                w = x);
                                var ue = k * T - Q * A
                                  , ce = H * T - Z * A
                                  , ve = V / (O + S.inverseInertia * ue * ue + d.inverseInertia * ce * ce)
                                  , j = (1 + m.restitution) * ne * ve;
                                if (P *= ve,
                                ne < n)
                                    D.normalImpulse = 0;
                                else {
                                    var ye = D.normalImpulse;
                                    D.normalImpulse += j,
                                    D.normalImpulse > 0 && (D.normalImpulse = 0),
                                    j = D.normalImpulse - ye
                                }
                                if (J < -i || J > i)
                                    D.tangentImpulse = 0;
                                else {
                                    var Se = D.tangentImpulse;
                                    D.tangentImpulse += P,
                                    D.tangentImpulse < -w && (D.tangentImpulse = -w),
                                    D.tangentImpulse > w && (D.tangentImpulse = w),
                                    P = D.tangentImpulse - Se
                                }
                                var q = A * j + I * P
                                  , b = T * j + L * P;
                                S.isStatic || S.isSleeping || (S.positionPrev.x += q * S.inverseMass,
                                S.positionPrev.y += b * S.inverseMass,
                                S.anglePrev += (k * b - Q * q) * S.inverseInertia),
                                d.isStatic || d.isSleeping || (d.positionPrev.x -= q * d.inverseMass,
                                d.positionPrev.y -= b * d.inverseMass,
                                d.anglePrev -= (H * b - Z * q) * d.inverseInertia)
                            }
                        }
                    }
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(9)
              , s = g(0);
            (function() {
                e.create = function(a) {
                    return s.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, a)
                }
                ,
                e.update = function(a, c, o) {
                    var u = a.list, r = u.length, t = a.table, n = c.length, i = a.collisionStart, l = a.collisionEnd, x = a.collisionActive, y, P, w, v;
                    for (i.length = 0,
                    l.length = 0,
                    x.length = 0,
                    v = 0; v < r; v++)
                        u[v].confirmedActive = !1;
                    for (v = 0; v < n; v++)
                        y = c[v],
                        w = y.pair,
                        w ? (w.isActive ? x.push(w) : i.push(w),
                        f.update(w, y, o),
                        w.confirmedActive = !0) : (w = f.create(y, o),
                        t[w.id] = w,
                        i.push(w),
                        u.push(w));
                    var p = [];
                    for (r = u.length,
                    v = 0; v < r; v++)
                        w = u[v],
                        w.confirmedActive || (f.setActive(w, !1, o),
                        l.push(w),
                        !w.collision.bodyA.isSleeping && !w.collision.bodyB.isSleeping && p.push(v));
                    for (v = 0; v < p.length; v++)
                        P = p[v] - v,
                        w = u[P],
                        u.splice(P, 1),
                        delete t[w.id]
                }
                ,
                e.clear = function(a) {
                    return a.table = {},
                    a.list.length = 0,
                    a.collisionStart.length = 0,
                    a.collisionActive.length = 0,
                    a.collisionEnd.length = 0,
                    a
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = B.exports = g(21);
            e.Axes = g(11),
            e.Bodies = g(12),
            e.Body = g(4),
            e.Bounds = g(1),
            e.Collision = g(8),
            e.Common = g(0),
            e.Composite = g(6),
            e.Composites = g(22),
            e.Constraint = g(10),
            e.Contact = g(16),
            e.Detector = g(13),
            e.Engine = g(17),
            e.Events = g(5),
            e.Grid = g(23),
            e.Mouse = g(14),
            e.MouseConstraint = g(24),
            e.Pair = g(9),
            e.Pairs = g(19),
            e.Plugin = g(15),
            e.Query = g(25),
            e.Render = g(26),
            e.Resolver = g(18),
            e.Runner = g(27),
            e.SAT = g(28),
            e.Sleeping = g(7),
            e.Svg = g(29),
            e.Vector = g(2),
            e.Vertices = g(3),
            e.World = g(30),
            e.Engine.run = e.Runner.run,
            e.Common.deprecated(e.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead")
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(15)
              , s = g(0);
            (function() {
                e.name = "matter-js",
                e.version = "0.19.0",
                e.uses = [],
                e.used = [],
                e.use = function() {
                    f.use(e, Array.prototype.slice.call(arguments))
                }
                ,
                e.before = function(a, c) {
                    return a = a.replace(/^Matter./, ""),
                    s.chainPathBefore(e, a, c)
                }
                ,
                e.after = function(a, c) {
                    return a = a.replace(/^Matter./, ""),
                    s.chainPathAfter(e, a, c)
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(6)
              , s = g(10)
              , a = g(0)
              , c = g(4)
              , o = g(12)
              , u = a.deprecated;
            (function() {
                e.stack = function(r, t, n, i, l, x, y) {
                    for (var P = f.create({
                        label: "Stack"
                    }), w = r, v = t, p, m = 0, h = 0; h < i; h++) {
                        for (var S = 0, d = 0; d < n; d++) {
                            var M = y(w, v, d, h, p, m);
                            if (M) {
                                var C = M.bounds.max.y - M.bounds.min.y
                                  , A = M.bounds.max.x - M.bounds.min.x;
                                C > S && (S = C),
                                c.translate(M, {
                                    x: A * .5,
                                    y: C * .5
                                }),
                                w = M.bounds.max.x + l,
                                f.addBody(P, M),
                                p = M,
                                m += 1
                            } else
                                w += l
                        }
                        v += S + x,
                        w = r
                    }
                    return P
                }
                ,
                e.chain = function(r, t, n, i, l, x) {
                    for (var y = r.bodies, P = 1; P < y.length; P++) {
                        var w = y[P - 1]
                          , v = y[P]
                          , p = w.bounds.max.y - w.bounds.min.y
                          , m = w.bounds.max.x - w.bounds.min.x
                          , h = v.bounds.max.y - v.bounds.min.y
                          , S = v.bounds.max.x - v.bounds.min.x
                          , d = {
                            bodyA: w,
                            pointA: {
                                x: m * t,
                                y: p * n
                            },
                            bodyB: v,
                            pointB: {
                                x: S * i,
                                y: h * l
                            }
                        }
                          , M = a.extend(d, x);
                        f.addConstraint(r, s.create(M))
                    }
                    return r.label += " Chain",
                    r
                }
                ,
                e.mesh = function(r, t, n, i, l) {
                    var x = r.bodies, y, P, w, v, p;
                    for (y = 0; y < n; y++) {
                        for (P = 1; P < t; P++)
                            w = x[P - 1 + y * t],
                            v = x[P + y * t],
                            f.addConstraint(r, s.create(a.extend({
                                bodyA: w,
                                bodyB: v
                            }, l)));
                        if (y > 0)
                            for (P = 0; P < t; P++)
                                w = x[P + (y - 1) * t],
                                v = x[P + y * t],
                                f.addConstraint(r, s.create(a.extend({
                                    bodyA: w,
                                    bodyB: v
                                }, l))),
                                i && P > 0 && (p = x[P - 1 + (y - 1) * t],
                                f.addConstraint(r, s.create(a.extend({
                                    bodyA: p,
                                    bodyB: v
                                }, l)))),
                                i && P < t - 1 && (p = x[P + 1 + (y - 1) * t],
                                f.addConstraint(r, s.create(a.extend({
                                    bodyA: p,
                                    bodyB: v
                                }, l))))
                    }
                    return r.label += " Mesh",
                    r
                }
                ,
                e.pyramid = function(r, t, n, i, l, x, y) {
                    return e.stack(r, t, n, i, l, x, function(P, w, v, p, m, h) {
                        var S = Math.min(i, Math.ceil(n / 2))
                          , d = m ? m.bounds.max.x - m.bounds.min.x : 0;
                        if (!(p > S)) {
                            p = S - p;
                            var M = p
                              , C = n - 1 - p;
                            if (!(v < M || v > C)) {
                                h === 1 && c.translate(m, {
                                    x: (v + (n % 2 === 1 ? 1 : -1)) * d,
                                    y: 0
                                });
                                var A = m ? v * d : 0;
                                return y(r + A + v * l, w, v, p, m, h)
                            }
                        }
                    })
                }
                ,
                e.newtonsCradle = function(r, t, n, i, l) {
                    for (var x = f.create({
                        label: "Newtons Cradle"
                    }), y = 0; y < n; y++) {
                        var P = 1.9
                          , w = o.circle(r + y * (i * P), t + l, i, {
                            inertia: 1 / 0,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 1e-4,
                            slop: 1
                        })
                          , v = s.create({
                            pointA: {
                                x: r + y * (i * P),
                                y: t
                            },
                            bodyB: w
                        });
                        f.addBody(x, w),
                        f.addConstraint(x, v)
                    }
                    return x
                }
                ,
                u(e, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"),
                e.car = function(r, t, n, i, l) {
                    var x = c.nextGroup(!0)
                      , y = 20
                      , P = -n * .5 + y
                      , w = n * .5 - y
                      , v = 0
                      , p = f.create({
                        label: "Car"
                    })
                      , m = o.rectangle(r, t, n, i, {
                        collisionFilter: {
                            group: x
                        },
                        chamfer: {
                            radius: i * .5
                        },
                        density: 2e-4
                    })
                      , h = o.circle(r + P, t + v, l, {
                        collisionFilter: {
                            group: x
                        },
                        friction: .8
                    })
                      , S = o.circle(r + w, t + v, l, {
                        collisionFilter: {
                            group: x
                        },
                        friction: .8
                    })
                      , d = s.create({
                        bodyB: m,
                        pointB: {
                            x: P,
                            y: v
                        },
                        bodyA: h,
                        stiffness: 1,
                        length: 0
                    })
                      , M = s.create({
                        bodyB: m,
                        pointB: {
                            x: w,
                            y: v
                        },
                        bodyA: S,
                        stiffness: 1,
                        length: 0
                    });
                    return f.addBody(p, m),
                    f.addBody(p, h),
                    f.addBody(p, S),
                    f.addConstraint(p, d),
                    f.addConstraint(p, M),
                    p
                }
                ,
                u(e, "car", "Composites.car ➤ moved to car example"),
                e.softBody = function(r, t, n, i, l, x, y, P, w, v) {
                    w = a.extend({
                        inertia: 1 / 0
                    }, w),
                    v = a.extend({
                        stiffness: .2,
                        render: {
                            type: "line",
                            anchors: !1
                        }
                    }, v);
                    var p = e.stack(r, t, n, i, l, x, function(m, h) {
                        return o.circle(m, h, P, w)
                    });
                    return e.mesh(p, n, i, y, v),
                    p.label = "Soft Body",
                    p
                }
                ,
                u(e, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples")
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(9)
              , s = g(0)
              , a = s.deprecated;
            (function() {
                e.create = function(c) {
                    var o = {
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    };
                    return s.extend(o, c)
                }
                ,
                e.update = function(c, o, u, r) {
                    var t, n, i, l = u.world, x = c.buckets, y, P, w = !1;
                    for (t = 0; t < o.length; t++) {
                        var v = o[t];
                        if (!(v.isSleeping && !r) && !(l.bounds && (v.bounds.max.x < l.bounds.min.x || v.bounds.min.x > l.bounds.max.x || v.bounds.max.y < l.bounds.min.y || v.bounds.min.y > l.bounds.max.y))) {
                            var p = e._getRegion(c, v);
                            if (!v.region || p.id !== v.region.id || r) {
                                (!v.region || r) && (v.region = p);
                                var m = e._regionUnion(p, v.region);
                                for (n = m.startCol; n <= m.endCol; n++)
                                    for (i = m.startRow; i <= m.endRow; i++) {
                                        P = e._getBucketId(n, i),
                                        y = x[P];
                                        var h = n >= p.startCol && n <= p.endCol && i >= p.startRow && i <= p.endRow
                                          , S = n >= v.region.startCol && n <= v.region.endCol && i >= v.region.startRow && i <= v.region.endRow;
                                        !h && S && S && y && e._bucketRemoveBody(c, y, v),
                                        (v.region === p || h && !S || r) && (y || (y = e._createBucket(x, P)),
                                        e._bucketAddBody(c, y, v))
                                    }
                                v.region = p,
                                w = !0
                            }
                        }
                    }
                    w && (c.pairsList = e._createActivePairsList(c))
                }
                ,
                a(e, "update", "Grid.update ➤ replaced by Matter.Detector"),
                e.clear = function(c) {
                    c.buckets = {},
                    c.pairs = {},
                    c.pairsList = []
                }
                ,
                a(e, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
                e._regionUnion = function(c, o) {
                    var u = Math.min(c.startCol, o.startCol)
                      , r = Math.max(c.endCol, o.endCol)
                      , t = Math.min(c.startRow, o.startRow)
                      , n = Math.max(c.endRow, o.endRow);
                    return e._createRegion(u, r, t, n)
                }
                ,
                e._getRegion = function(c, o) {
                    var u = o.bounds
                      , r = Math.floor(u.min.x / c.bucketWidth)
                      , t = Math.floor(u.max.x / c.bucketWidth)
                      , n = Math.floor(u.min.y / c.bucketHeight)
                      , i = Math.floor(u.max.y / c.bucketHeight);
                    return e._createRegion(r, t, n, i)
                }
                ,
                e._createRegion = function(c, o, u, r) {
                    return {
                        id: c + "," + o + "," + u + "," + r,
                        startCol: c,
                        endCol: o,
                        startRow: u,
                        endRow: r
                    }
                }
                ,
                e._getBucketId = function(c, o) {
                    return "C" + c + "R" + o
                }
                ,
                e._createBucket = function(c, o) {
                    var u = c[o] = [];
                    return u
                }
                ,
                e._bucketAddBody = function(c, o, u) {
                    var r = c.pairs, t = f.id, n = o.length, i;
                    for (i = 0; i < n; i++) {
                        var l = o[i];
                        if (!(u.id === l.id || u.isStatic && l.isStatic)) {
                            var x = t(u, l)
                              , y = r[x];
                            y ? y[2] += 1 : r[x] = [u, l, 1]
                        }
                    }
                    o.push(u)
                }
                ,
                e._bucketRemoveBody = function(c, o, u) {
                    var r = c.pairs, t = f.id, n;
                    o.splice(s.indexOf(o, u), 1);
                    var i = o.length;
                    for (n = 0; n < i; n++) {
                        var l = r[t(u, o[n])];
                        l && (l[2] -= 1)
                    }
                }
                ,
                e._createActivePairsList = function(c) {
                    var o, u = c.pairs, r = s.keys(u), t = r.length, n = [], i;
                    for (i = 0; i < t; i++)
                        o = u[r[i]],
                        o[2] > 0 ? n.push(o) : delete u[r[i]];
                    return n
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(3)
              , s = g(7)
              , a = g(14)
              , c = g(5)
              , o = g(13)
              , u = g(10)
              , r = g(6)
              , t = g(0)
              , n = g(1);
            (function() {
                e.create = function(i, l) {
                    var x = (i ? i.mouse : null) || (l ? l.mouse : null);
                    x || (i && i.render && i.render.canvas ? x = a.create(i.render.canvas) : l && l.element ? x = a.create(l.element) : (x = a.create(),
                    t.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                    var y = u.create({
                        label: "Mouse Constraint",
                        pointA: x.position,
                        pointB: {
                            x: 0,
                            y: 0
                        },
                        length: .01,
                        stiffness: .1,
                        angularStiffness: 1,
                        render: {
                            strokeStyle: "#90EE90",
                            lineWidth: 3
                        }
                    })
                      , P = {
                        type: "mouseConstraint",
                        mouse: x,
                        element: null,
                        body: null,
                        constraint: y,
                        collisionFilter: {
                            category: 1,
                            mask: 4294967295,
                            group: 0
                        }
                    }
                      , w = t.extend(P, l);
                    return c.on(i, "beforeUpdate", function() {
                        var v = r.allBodies(i.world);
                        e.update(w, v),
                        e._triggerEvents(w)
                    }),
                    w
                }
                ,
                e.update = function(i, l) {
                    var x = i.mouse
                      , y = i.constraint
                      , P = i.body;
                    if (x.button === 0) {
                        if (y.bodyB)
                            s.set(y.bodyB, !1),
                            y.pointA = x.position;
                        else
                            for (var w = 0; w < l.length; w++)
                                if (P = l[w],
                                n.contains(P.bounds, x.position) && o.canCollide(P.collisionFilter, i.collisionFilter))
                                    for (var v = P.parts.length > 1 ? 1 : 0; v < P.parts.length; v++) {
                                        var p = P.parts[v];
                                        if (f.contains(p.vertices, x.position)) {
                                            y.pointA = x.position,
                                            y.bodyB = i.body = P,
                                            y.pointB = {
                                                x: x.position.x - P.position.x,
                                                y: x.position.y - P.position.y
                                            },
                                            y.angleB = P.angle,
                                            s.set(P, !1),
                                            c.trigger(i, "startdrag", {
                                                mouse: x,
                                                body: P
                                            });
                                            break
                                        }
                                    }
                    } else
                        y.bodyB = i.body = null,
                        y.pointB = null,
                        P && c.trigger(i, "enddrag", {
                            mouse: x,
                            body: P
                        })
                }
                ,
                e._triggerEvents = function(i) {
                    var l = i.mouse
                      , x = l.sourceEvents;
                    x.mousemove && c.trigger(i, "mousemove", {
                        mouse: l
                    }),
                    x.mousedown && c.trigger(i, "mousedown", {
                        mouse: l
                    }),
                    x.mouseup && c.trigger(i, "mouseup", {
                        mouse: l
                    }),
                    a.clearSourceEvents(l)
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(2)
              , s = g(8)
              , a = g(1)
              , c = g(12)
              , o = g(3);
            (function() {
                e.collides = function(u, r) {
                    for (var t = [], n = r.length, i = u.bounds, l = s.collides, x = a.overlaps, y = 0; y < n; y++) {
                        var P = r[y]
                          , w = P.parts.length
                          , v = w === 1 ? 0 : 1;
                        if (x(P.bounds, i))
                            for (var p = v; p < w; p++) {
                                var m = P.parts[p];
                                if (x(m.bounds, i)) {
                                    var h = l(m, u);
                                    if (h) {
                                        t.push(h);
                                        break
                                    }
                                }
                            }
                    }
                    return t
                }
                ,
                e.ray = function(u, r, t, n) {
                    n = n || 1e-100;
                    for (var i = f.angle(r, t), l = f.magnitude(f.sub(r, t)), x = (t.x + r.x) * .5, y = (t.y + r.y) * .5, P = c.rectangle(x, y, l, n, {
                        angle: i
                    }), w = e.collides(P, u), v = 0; v < w.length; v += 1) {
                        var p = w[v];
                        p.body = p.bodyB = p.bodyA
                    }
                    return w
                }
                ,
                e.region = function(u, r, t) {
                    for (var n = [], i = 0; i < u.length; i++) {
                        var l = u[i]
                          , x = a.overlaps(l.bounds, r);
                        (x && !t || !x && t) && n.push(l)
                    }
                    return n
                }
                ,
                e.point = function(u, r) {
                    for (var t = [], n = 0; n < u.length; n++) {
                        var i = u[n];
                        if (a.contains(i.bounds, r))
                            for (var l = i.parts.length === 1 ? 0 : 1; l < i.parts.length; l++) {
                                var x = i.parts[l];
                                if (a.contains(x.bounds, r) && o.contains(x.vertices, r)) {
                                    t.push(i);
                                    break
                                }
                            }
                    }
                    return t
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(4)
              , s = g(0)
              , a = g(6)
              , c = g(1)
              , o = g(5)
              , u = g(2)
              , r = g(14);
            (function() {
                var t, n;
                typeof window < "u" && (t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(v) {
                    window.setTimeout(function() {
                        v(s.now())
                    }, 1e3 / 60)
                }
                ,
                n = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                e._goodFps = 30,
                e._goodDelta = 1e3 / 60,
                e.create = function(v) {
                    var p = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                            historySize: 60,
                            delta: 0,
                            deltaHistory: [],
                            lastTime: 0,
                            lastTimestamp: 0,
                            lastElapsed: 0,
                            timestampElapsed: 0,
                            timestampElapsedHistory: [],
                            engineDeltaHistory: [],
                            engineElapsedHistory: [],
                            elapsedHistory: []
                        },
                        options: {
                            width: 800,
                            height: 600,
                            pixelRatio: 1,
                            background: "#14151f",
                            wireframeBackground: "#14151f",
                            hasBounds: !!v.bounds,
                            enabled: !0,
                            wireframes: !0,
                            showSleeping: !0,
                            showDebug: !1,
                            showStats: !1,
                            showPerformance: !1,
                            showBounds: !1,
                            showVelocity: !1,
                            showCollisions: !1,
                            showSeparations: !1,
                            showAxes: !1,
                            showPositions: !1,
                            showAngleIndicator: !1,
                            showIds: !1,
                            showVertexNumbers: !1,
                            showConvexHulls: !1,
                            showInternalEdges: !1,
                            showMousePosition: !1
                        }
                    }
                      , m = s.extend(p, v);
                    return m.canvas && (m.canvas.width = m.options.width || m.canvas.width,
                    m.canvas.height = m.options.height || m.canvas.height),
                    m.mouse = v.mouse,
                    m.engine = v.engine,
                    m.canvas = m.canvas || x(m.options.width, m.options.height),
                    m.context = m.canvas.getContext("2d"),
                    m.textures = {},
                    m.bounds = m.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: m.canvas.width,
                            y: m.canvas.height
                        }
                    },
                    m.controller = e,
                    m.options.showBroadphase = !1,
                    m.options.pixelRatio !== 1 && e.setPixelRatio(m, m.options.pixelRatio),
                    s.isElement(m.element) && m.element.appendChild(m.canvas),
                    m
                }
                ,
                e.run = function(v) {
                    (function p(m) {
                        v.frameRequestId = t(p),
                        i(v, m),
                        e.world(v, m),
                        (v.options.showStats || v.options.showDebug) && e.stats(v, v.context, m),
                        (v.options.showPerformance || v.options.showDebug) && e.performance(v, v.context, m)
                    }
                    )()
                }
                ,
                e.stop = function(v) {
                    n(v.frameRequestId)
                }
                ,
                e.setPixelRatio = function(v, p) {
                    var m = v.options
                      , h = v.canvas;
                    p === "auto" && (p = y(h)),
                    m.pixelRatio = p,
                    h.setAttribute("data-pixel-ratio", p),
                    h.width = m.width * p,
                    h.height = m.height * p,
                    h.style.width = m.width + "px",
                    h.style.height = m.height + "px"
                }
                ,
                e.lookAt = function(v, p, m, h) {
                    h = typeof h < "u" ? h : !0,
                    p = s.isArray(p) ? p : [p],
                    m = m || {
                        x: 0,
                        y: 0
                    };
                    for (var S = {
                        min: {
                            x: 1 / 0,
                            y: 1 / 0
                        },
                        max: {
                            x: -1 / 0,
                            y: -1 / 0
                        }
                    }, d = 0; d < p.length; d += 1) {
                        var M = p[d]
                          , C = M.bounds ? M.bounds.min : M.min || M.position || M
                          , A = M.bounds ? M.bounds.max : M.max || M.position || M;
                        C && A && (C.x < S.min.x && (S.min.x = C.x),
                        A.x > S.max.x && (S.max.x = A.x),
                        C.y < S.min.y && (S.min.y = C.y),
                        A.y > S.max.y && (S.max.y = A.y))
                    }
                    var T = S.max.x - S.min.x + 2 * m.x
                      , I = S.max.y - S.min.y + 2 * m.y
                      , L = v.canvas.height
                      , E = v.canvas.width
                      , F = E / L
                      , V = T / I
                      , O = 1
                      , N = 1;
                    V > F ? N = V / F : O = F / V,
                    v.options.hasBounds = !0,
                    v.bounds.min.x = S.min.x,
                    v.bounds.max.x = S.min.x + T * O,
                    v.bounds.min.y = S.min.y,
                    v.bounds.max.y = S.min.y + I * N,
                    h && (v.bounds.min.x += T * .5 - T * O * .5,
                    v.bounds.max.x += T * .5 - T * O * .5,
                    v.bounds.min.y += I * .5 - I * N * .5,
                    v.bounds.max.y += I * .5 - I * N * .5),
                    v.bounds.min.x -= m.x,
                    v.bounds.max.x -= m.x,
                    v.bounds.min.y -= m.y,
                    v.bounds.max.y -= m.y,
                    v.mouse && (r.setScale(v.mouse, {
                        x: (v.bounds.max.x - v.bounds.min.x) / v.canvas.width,
                        y: (v.bounds.max.y - v.bounds.min.y) / v.canvas.height
                    }),
                    r.setOffset(v.mouse, v.bounds.min))
                }
                ,
                e.startViewTransform = function(v) {
                    var p = v.bounds.max.x - v.bounds.min.x
                      , m = v.bounds.max.y - v.bounds.min.y
                      , h = p / v.options.width
                      , S = m / v.options.height;
                    v.context.setTransform(v.options.pixelRatio / h, 0, 0, v.options.pixelRatio / S, 0, 0),
                    v.context.translate(-v.bounds.min.x, -v.bounds.min.y)
                }
                ,
                e.endViewTransform = function(v) {
                    v.context.setTransform(v.options.pixelRatio, 0, 0, v.options.pixelRatio, 0, 0)
                }
                ,
                e.world = function(v, p) {
                    var m = s.now(), h = v.engine, S = h.world, d = v.canvas, M = v.context, C = v.options, A = v.timing, T = a.allBodies(S), I = a.allConstraints(S), L = C.wireframes ? C.wireframeBackground : C.background, E = [], F = [], V, O = {
                        timestamp: h.timing.timestamp
                    };
                    if (o.trigger(v, "beforeRender", O),
                    v.currentBackground !== L && w(v, L),
                    M.globalCompositeOperation = "source-in",
                    M.fillStyle = "transparent",
                    M.fillRect(0, 0, d.width, d.height),
                    M.globalCompositeOperation = "source-over",
                    C.hasBounds) {
                        for (V = 0; V < T.length; V++) {
                            var N = T[V];
                            c.overlaps(N.bounds, v.bounds) && E.push(N)
                        }
                        for (V = 0; V < I.length; V++) {
                            var D = I[V]
                              , G = D.bodyA
                              , k = D.bodyB
                              , Q = D.pointA
                              , H = D.pointB;
                            G && (Q = u.add(G.position, D.pointA)),
                            k && (H = u.add(k.position, D.pointB)),
                            !(!Q || !H) && (c.contains(v.bounds, Q) || c.contains(v.bounds, H)) && F.push(D)
                        }
                        e.startViewTransform(v),
                        v.mouse && (r.setScale(v.mouse, {
                            x: (v.bounds.max.x - v.bounds.min.x) / v.options.width,
                            y: (v.bounds.max.y - v.bounds.min.y) / v.options.height
                        }),
                        r.setOffset(v.mouse, v.bounds.min))
                    } else
                        F = I,
                        E = T,
                        v.options.pixelRatio !== 1 && v.context.setTransform(v.options.pixelRatio, 0, 0, v.options.pixelRatio, 0, 0);
                    !C.wireframes || h.enableSleeping && C.showSleeping ? e.bodies(v, E, M) : (C.showConvexHulls && e.bodyConvexHulls(v, E, M),
                    e.bodyWireframes(v, E, M)),
                    C.showBounds && e.bodyBounds(v, E, M),
                    (C.showAxes || C.showAngleIndicator) && e.bodyAxes(v, E, M),
                    C.showPositions && e.bodyPositions(v, E, M),
                    C.showVelocity && e.bodyVelocity(v, E, M),
                    C.showIds && e.bodyIds(v, E, M),
                    C.showSeparations && e.separations(v, h.pairs.list, M),
                    C.showCollisions && e.collisions(v, h.pairs.list, M),
                    C.showVertexNumbers && e.vertexNumbers(v, E, M),
                    C.showMousePosition && e.mousePosition(v, v.mouse, M),
                    e.constraints(F, M),
                    C.hasBounds && e.endViewTransform(v),
                    o.trigger(v, "afterRender", O),
                    A.lastElapsed = s.now() - m
                }
                ,
                e.stats = function(v, p, m) {
                    for (var h = v.engine, S = h.world, d = a.allBodies(S), M = 0, C = 55, A = 44, T = 0, I = 0, L = 0; L < d.length; L += 1)
                        M += d[L].parts.length;
                    var E = {
                        Part: M,
                        Body: d.length,
                        Cons: a.allConstraints(S).length,
                        Comp: a.allComposites(S).length,
                        Pair: h.pairs.list.length
                    };
                    p.fillStyle = "#0e0f19",
                    p.fillRect(T, I, C * 5.5, A),
                    p.font = "12px Arial",
                    p.textBaseline = "top",
                    p.textAlign = "right";
                    for (var F in E) {
                        var V = E[F];
                        p.fillStyle = "#aaa",
                        p.fillText(F, T + C, I + 8),
                        p.fillStyle = "#eee",
                        p.fillText(V, T + C, I + 26),
                        T += C
                    }
                }
                ,
                e.performance = function(v, p) {
                    var m = v.engine
                      , h = v.timing
                      , S = h.deltaHistory
                      , d = h.elapsedHistory
                      , M = h.timestampElapsedHistory
                      , C = h.engineDeltaHistory
                      , A = h.engineElapsedHistory
                      , T = m.timing.lastDelta
                      , I = l(S)
                      , L = l(d)
                      , E = l(C)
                      , F = l(A)
                      , V = l(M)
                      , O = V / I || 0
                      , N = 1e3 / I || 0
                      , D = 4
                      , G = 12
                      , k = 60
                      , Q = 34
                      , H = 10
                      , Z = 69;
                    p.fillStyle = "#0e0f19",
                    p.fillRect(0, 50, G * 4 + k * 5 + 22, Q),
                    e.status(p, H, Z, k, D, S.length, Math.round(N) + " fps", N / e._goodFps, function(z) {
                        return S[z] / I - 1
                    }),
                    e.status(p, H + G + k, Z, k, D, C.length, T.toFixed(2) + " dt", e._goodDelta / T, function(z) {
                        return C[z] / E - 1
                    }),
                    e.status(p, H + (G + k) * 2, Z, k, D, A.length, F.toFixed(2) + " ut", 1 - F / e._goodFps, function(z) {
                        return A[z] / F - 1
                    }),
                    e.status(p, H + (G + k) * 3, Z, k, D, d.length, L.toFixed(2) + " rt", 1 - L / e._goodFps, function(z) {
                        return d[z] / L - 1
                    }),
                    e.status(p, H + (G + k) * 4, Z, k, D, M.length, O.toFixed(2) + " x", O * O * O, function(z) {
                        return (M[z] / S[z] / O || 0) - 1
                    })
                }
                ,
                e.status = function(v, p, m, h, S, d, M, C, A) {
                    v.strokeStyle = "#888",
                    v.fillStyle = "#444",
                    v.lineWidth = 1,
                    v.fillRect(p, m + 7, h, 1),
                    v.beginPath(),
                    v.moveTo(p, m + 7 - S * s.clamp(.4 * A(0), -2, 2));
                    for (var T = 0; T < h; T += 1)
                        v.lineTo(p + T, m + 7 - (T < d ? S * s.clamp(.4 * A(T), -2, 2) : 0));
                    v.stroke(),
                    v.fillStyle = "hsl(" + s.clamp(25 + 95 * C, 0, 120) + ",100%,60%)",
                    v.fillRect(p, m - 7, 4, 4),
                    v.font = "12px Arial",
                    v.textBaseline = "middle",
                    v.textAlign = "right",
                    v.fillStyle = "#eee",
                    v.fillText(M, p + h, m - 5)
                }
                ,
                e.constraints = function(v, p) {
                    for (var m = p, h = 0; h < v.length; h++) {
                        var S = v[h];
                        if (!(!S.render.visible || !S.pointA || !S.pointB)) {
                            var d = S.bodyA, M = S.bodyB, C, A;
                            if (d ? C = u.add(d.position, S.pointA) : C = S.pointA,
                            S.render.type === "pin")
                                m.beginPath(),
                                m.arc(C.x, C.y, 3, 0, 2 * Math.PI),
                                m.closePath();
                            else {
                                if (M ? A = u.add(M.position, S.pointB) : A = S.pointB,
                                m.beginPath(),
                                m.moveTo(C.x, C.y),
                                S.render.type === "spring")
                                    for (var T = u.sub(A, C), I = u.perp(u.normalise(T)), L = Math.ceil(s.clamp(S.length / 5, 12, 20)), E, F = 1; F < L; F += 1)
                                        E = F % 2 === 0 ? 1 : -1,
                                        m.lineTo(C.x + T.x * (F / L) + I.x * E * 4, C.y + T.y * (F / L) + I.y * E * 4);
                                m.lineTo(A.x, A.y)
                            }
                            S.render.lineWidth && (m.lineWidth = S.render.lineWidth,
                            m.strokeStyle = S.render.strokeStyle,
                            m.stroke()),
                            S.render.anchors && (m.fillStyle = S.render.strokeStyle,
                            m.beginPath(),
                            m.arc(C.x, C.y, 3, 0, 2 * Math.PI),
                            m.arc(A.x, A.y, 3, 0, 2 * Math.PI),
                            m.closePath(),
                            m.fill())
                        }
                    }
                }
                ,
                e.bodies = function(v, p, m) {
                    var h = m;
                    v.engine;
                    var S = v.options, d = S.showInternalEdges || !S.wireframes, M, C, A, T;
                    for (A = 0; A < p.length; A++)
                        if (M = p[A],
                        !!M.render.visible) {
                            for (T = M.parts.length > 1 ? 1 : 0; T < M.parts.length; T++)
                                if (C = M.parts[T],
                                !!C.render.visible) {
                                    if (S.showSleeping && M.isSleeping ? h.globalAlpha = .5 * C.render.opacity : C.render.opacity !== 1 && (h.globalAlpha = C.render.opacity),
                                    C.render.sprite && C.render.sprite.texture && !S.wireframes) {
                                        var I = C.render.sprite
                                          , L = P(v, I.texture);
                                        h.translate(C.position.x, C.position.y),
                                        h.rotate(C.angle),
                                        h.drawImage(L, L.width * -I.xOffset * I.xScale, L.height * -I.yOffset * I.yScale, L.width * I.xScale, L.height * I.yScale),
                                        h.rotate(-C.angle),
                                        h.translate(-C.position.x, -C.position.y)
                                    } else {
                                        if (C.circleRadius)
                                            h.beginPath(),
                                            h.arc(C.position.x, C.position.y, C.circleRadius, 0, 2 * Math.PI);
                                        else {
                                            h.beginPath(),
                                            h.moveTo(C.vertices[0].x, C.vertices[0].y);
                                            for (var E = 1; E < C.vertices.length; E++)
                                                !C.vertices[E - 1].isInternal || d ? h.lineTo(C.vertices[E].x, C.vertices[E].y) : h.moveTo(C.vertices[E].x, C.vertices[E].y),
                                                C.vertices[E].isInternal && !d && h.moveTo(C.vertices[(E + 1) % C.vertices.length].x, C.vertices[(E + 1) % C.vertices.length].y);
                                            h.lineTo(C.vertices[0].x, C.vertices[0].y),
                                            h.closePath()
                                        }
                                        S.wireframes ? (h.lineWidth = 1,
                                        h.strokeStyle = "#bbb",
                                        h.stroke()) : (h.fillStyle = C.render.fillStyle,
                                        C.render.lineWidth && (h.lineWidth = C.render.lineWidth,
                                        h.strokeStyle = C.render.strokeStyle,
                                        h.stroke()),
                                        h.fill())
                                    }
                                    h.globalAlpha = 1
                                }
                        }
                }
                ,
                e.bodyWireframes = function(v, p, m) {
                    var h = m, S = v.options.showInternalEdges, d, M, C, A, T;
                    for (h.beginPath(),
                    C = 0; C < p.length; C++)
                        if (d = p[C],
                        !!d.render.visible)
                            for (T = d.parts.length > 1 ? 1 : 0; T < d.parts.length; T++) {
                                for (M = d.parts[T],
                                h.moveTo(M.vertices[0].x, M.vertices[0].y),
                                A = 1; A < M.vertices.length; A++)
                                    !M.vertices[A - 1].isInternal || S ? h.lineTo(M.vertices[A].x, M.vertices[A].y) : h.moveTo(M.vertices[A].x, M.vertices[A].y),
                                    M.vertices[A].isInternal && !S && h.moveTo(M.vertices[(A + 1) % M.vertices.length].x, M.vertices[(A + 1) % M.vertices.length].y);
                                h.lineTo(M.vertices[0].x, M.vertices[0].y)
                            }
                    h.lineWidth = 1,
                    h.strokeStyle = "#bbb",
                    h.stroke()
                }
                ,
                e.bodyConvexHulls = function(v, p, m) {
                    var h = m, S, d, M;
                    for (h.beginPath(),
                    d = 0; d < p.length; d++)
                        if (S = p[d],
                        !(!S.render.visible || S.parts.length === 1)) {
                            for (h.moveTo(S.vertices[0].x, S.vertices[0].y),
                            M = 1; M < S.vertices.length; M++)
                                h.lineTo(S.vertices[M].x, S.vertices[M].y);
                            h.lineTo(S.vertices[0].x, S.vertices[0].y)
                        }
                    h.lineWidth = 1,
                    h.strokeStyle = "rgba(255,255,255,0.2)",
                    h.stroke()
                }
                ,
                e.vertexNumbers = function(v, p, m) {
                    var h = m, S, d, M;
                    for (S = 0; S < p.length; S++) {
                        var C = p[S].parts;
                        for (M = C.length > 1 ? 1 : 0; M < C.length; M++) {
                            var A = C[M];
                            for (d = 0; d < A.vertices.length; d++)
                                h.fillStyle = "rgba(255,255,255,0.2)",
                                h.fillText(S + "_" + d, A.position.x + (A.vertices[d].x - A.position.x) * .8, A.position.y + (A.vertices[d].y - A.position.y) * .8)
                        }
                    }
                }
                ,
                e.mousePosition = function(v, p, m) {
                    var h = m;
                    h.fillStyle = "rgba(255,255,255,0.8)",
                    h.fillText(p.position.x + "  " + p.position.y, p.position.x + 5, p.position.y - 5)
                }
                ,
                e.bodyBounds = function(v, p, m) {
                    var h = m;
                    v.engine;
                    var S = v.options;
                    h.beginPath();
                    for (var d = 0; d < p.length; d++) {
                        var M = p[d];
                        if (M.render.visible)
                            for (var C = p[d].parts, A = C.length > 1 ? 1 : 0; A < C.length; A++) {
                                var T = C[A];
                                h.rect(T.bounds.min.x, T.bounds.min.y, T.bounds.max.x - T.bounds.min.x, T.bounds.max.y - T.bounds.min.y)
                            }
                    }
                    S.wireframes ? h.strokeStyle = "rgba(255,255,255,0.08)" : h.strokeStyle = "rgba(0,0,0,0.1)",
                    h.lineWidth = 1,
                    h.stroke()
                }
                ,
                e.bodyAxes = function(v, p, m) {
                    var h = m;
                    v.engine;
                    var S = v.options, d, M, C, A;
                    for (h.beginPath(),
                    M = 0; M < p.length; M++) {
                        var T = p[M]
                          , I = T.parts;
                        if (T.render.visible)
                            if (S.showAxes)
                                for (C = I.length > 1 ? 1 : 0; C < I.length; C++)
                                    for (d = I[C],
                                    A = 0; A < d.axes.length; A++) {
                                        var L = d.axes[A];
                                        h.moveTo(d.position.x, d.position.y),
                                        h.lineTo(d.position.x + L.x * 20, d.position.y + L.y * 20)
                                    }
                            else
                                for (C = I.length > 1 ? 1 : 0; C < I.length; C++)
                                    for (d = I[C],
                                    A = 0; A < d.axes.length; A++)
                                        h.moveTo(d.position.x, d.position.y),
                                        h.lineTo((d.vertices[0].x + d.vertices[d.vertices.length - 1].x) / 2, (d.vertices[0].y + d.vertices[d.vertices.length - 1].y) / 2)
                    }
                    S.wireframes ? (h.strokeStyle = "indianred",
                    h.lineWidth = 1) : (h.strokeStyle = "rgba(255, 255, 255, 0.4)",
                    h.globalCompositeOperation = "overlay",
                    h.lineWidth = 2),
                    h.stroke(),
                    h.globalCompositeOperation = "source-over"
                }
                ,
                e.bodyPositions = function(v, p, m) {
                    var h = m;
                    v.engine;
                    var S = v.options, d, M, C, A;
                    for (h.beginPath(),
                    C = 0; C < p.length; C++)
                        if (d = p[C],
                        !!d.render.visible)
                            for (A = 0; A < d.parts.length; A++)
                                M = d.parts[A],
                                h.arc(M.position.x, M.position.y, 3, 0, 2 * Math.PI, !1),
                                h.closePath();
                    for (S.wireframes ? h.fillStyle = "indianred" : h.fillStyle = "rgba(0,0,0,0.5)",
                    h.fill(),
                    h.beginPath(),
                    C = 0; C < p.length; C++)
                        d = p[C],
                        d.render.visible && (h.arc(d.positionPrev.x, d.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                        h.closePath());
                    h.fillStyle = "rgba(255,165,0,0.8)",
                    h.fill()
                }
                ,
                e.bodyVelocity = function(v, p, m) {
                    var h = m;
                    h.beginPath();
                    for (var S = 0; S < p.length; S++) {
                        var d = p[S];
                        if (d.render.visible) {
                            var M = f.getVelocity(d);
                            h.moveTo(d.position.x, d.position.y),
                            h.lineTo(d.position.x + M.x, d.position.y + M.y)
                        }
                    }
                    h.lineWidth = 3,
                    h.strokeStyle = "cornflowerblue",
                    h.stroke()
                }
                ,
                e.bodyIds = function(v, p, m) {
                    var h = m, S, d;
                    for (S = 0; S < p.length; S++)
                        if (p[S].render.visible) {
                            var M = p[S].parts;
                            for (d = M.length > 1 ? 1 : 0; d < M.length; d++) {
                                var C = M[d];
                                h.font = "12px Arial",
                                h.fillStyle = "rgba(255,255,255,0.5)",
                                h.fillText(C.id, C.position.x + 10, C.position.y - 10)
                            }
                        }
                }
                ,
                e.collisions = function(v, p, m) {
                    var h = m, S = v.options, d, M, C, A;
                    for (h.beginPath(),
                    C = 0; C < p.length; C++)
                        if (d = p[C],
                        !!d.isActive)
                            for (M = d.collision,
                            A = 0; A < d.activeContacts.length; A++) {
                                var T = d.activeContacts[A]
                                  , I = T.vertex;
                                h.rect(I.x - 1.5, I.y - 1.5, 3.5, 3.5)
                            }
                    for (S.wireframes ? h.fillStyle = "rgba(255,255,255,0.7)" : h.fillStyle = "orange",
                    h.fill(),
                    h.beginPath(),
                    C = 0; C < p.length; C++)
                        if (d = p[C],
                        !!d.isActive && (M = d.collision,
                        d.activeContacts.length > 0)) {
                            var L = d.activeContacts[0].vertex.x
                              , E = d.activeContacts[0].vertex.y;
                            d.activeContacts.length === 2 && (L = (d.activeContacts[0].vertex.x + d.activeContacts[1].vertex.x) / 2,
                            E = (d.activeContacts[0].vertex.y + d.activeContacts[1].vertex.y) / 2),
                            M.bodyB === M.supports[0].body || M.bodyA.isStatic === !0 ? h.moveTo(L - M.normal.x * 8, E - M.normal.y * 8) : h.moveTo(L + M.normal.x * 8, E + M.normal.y * 8),
                            h.lineTo(L, E)
                        }
                    S.wireframes ? h.strokeStyle = "rgba(255,165,0,0.7)" : h.strokeStyle = "orange",
                    h.lineWidth = 1,
                    h.stroke()
                }
                ,
                e.separations = function(v, p, m) {
                    var h = m, S = v.options, d, M, C, A, T;
                    for (h.beginPath(),
                    T = 0; T < p.length; T++)
                        if (d = p[T],
                        !!d.isActive) {
                            M = d.collision,
                            C = M.bodyA,
                            A = M.bodyB;
                            var I = 1;
                            !A.isStatic && !C.isStatic && (I = .5),
                            A.isStatic && (I = 0),
                            h.moveTo(A.position.x, A.position.y),
                            h.lineTo(A.position.x - M.penetration.x * I, A.position.y - M.penetration.y * I),
                            I = 1,
                            !A.isStatic && !C.isStatic && (I = .5),
                            C.isStatic && (I = 0),
                            h.moveTo(C.position.x, C.position.y),
                            h.lineTo(C.position.x + M.penetration.x * I, C.position.y + M.penetration.y * I)
                        }
                    S.wireframes ? h.strokeStyle = "rgba(255,165,0,0.5)" : h.strokeStyle = "orange",
                    h.stroke()
                }
                ,
                e.inspector = function(v, p) {
                    v.engine;
                    var m = v.selected, h = v.render, S = h.options, d;
                    if (S.hasBounds) {
                        var M = h.bounds.max.x - h.bounds.min.x
                          , C = h.bounds.max.y - h.bounds.min.y
                          , A = M / h.options.width
                          , T = C / h.options.height;
                        p.scale(1 / A, 1 / T),
                        p.translate(-h.bounds.min.x, -h.bounds.min.y)
                    }
                    for (var I = 0; I < m.length; I++) {
                        var L = m[I].data;
                        switch (p.translate(.5, .5),
                        p.lineWidth = 1,
                        p.strokeStyle = "rgba(255,165,0,0.9)",
                        p.setLineDash([1, 2]),
                        L.type) {
                        case "body":
                            d = L.bounds,
                            p.beginPath(),
                            p.rect(Math.floor(d.min.x - 3), Math.floor(d.min.y - 3), Math.floor(d.max.x - d.min.x + 6), Math.floor(d.max.y - d.min.y + 6)),
                            p.closePath(),
                            p.stroke();
                            break;
                        case "constraint":
                            var E = L.pointA;
                            L.bodyA && (E = L.pointB),
                            p.beginPath(),
                            p.arc(E.x, E.y, 10, 0, 2 * Math.PI),
                            p.closePath(),
                            p.stroke();
                            break
                        }
                        p.setLineDash([]),
                        p.translate(-.5, -.5)
                    }
                    v.selectStart !== null && (p.translate(.5, .5),
                    p.lineWidth = 1,
                    p.strokeStyle = "rgba(255,165,0,0.6)",
                    p.fillStyle = "rgba(255,165,0,0.1)",
                    d = v.selectBounds,
                    p.beginPath(),
                    p.rect(Math.floor(d.min.x), Math.floor(d.min.y), Math.floor(d.max.x - d.min.x), Math.floor(d.max.y - d.min.y)),
                    p.closePath(),
                    p.stroke(),
                    p.fill(),
                    p.translate(-.5, -.5)),
                    S.hasBounds && p.setTransform(1, 0, 0, 1, 0, 0)
                }
                ;
                var i = function(v, p) {
                    var m = v.engine
                      , h = v.timing
                      , S = h.historySize
                      , d = m.timing.timestamp;
                    h.delta = p - h.lastTime || e._goodDelta,
                    h.lastTime = p,
                    h.timestampElapsed = d - h.lastTimestamp || 0,
                    h.lastTimestamp = d,
                    h.deltaHistory.unshift(h.delta),
                    h.deltaHistory.length = Math.min(h.deltaHistory.length, S),
                    h.engineDeltaHistory.unshift(m.timing.lastDelta),
                    h.engineDeltaHistory.length = Math.min(h.engineDeltaHistory.length, S),
                    h.timestampElapsedHistory.unshift(h.timestampElapsed),
                    h.timestampElapsedHistory.length = Math.min(h.timestampElapsedHistory.length, S),
                    h.engineElapsedHistory.unshift(m.timing.lastElapsed),
                    h.engineElapsedHistory.length = Math.min(h.engineElapsedHistory.length, S),
                    h.elapsedHistory.unshift(h.lastElapsed),
                    h.elapsedHistory.length = Math.min(h.elapsedHistory.length, S)
                }
                  , l = function(v) {
                    for (var p = 0, m = 0; m < v.length; m += 1)
                        p += v[m];
                    return p / v.length || 0
                }
                  , x = function(v, p) {
                    var m = document.createElement("canvas");
                    return m.width = v,
                    m.height = p,
                    m.oncontextmenu = function() {
                        return !1
                    }
                    ,
                    m.onselectstart = function() {
                        return !1
                    }
                    ,
                    m
                }
                  , y = function(v) {
                    var p = v.getContext("2d")
                      , m = window.devicePixelRatio || 1
                      , h = p.webkitBackingStorePixelRatio || p.mozBackingStorePixelRatio || p.msBackingStorePixelRatio || p.oBackingStorePixelRatio || p.backingStorePixelRatio || 1;
                    return m / h
                }
                  , P = function(v, p) {
                    var m = v.textures[p];
                    return m || (m = v.textures[p] = new Image,
                    m.src = p,
                    m)
                }
                  , w = function(v, p) {
                    var m = p;
                    /(jpg|gif|png)$/.test(p) && (m = "url(" + p + ")"),
                    v.canvas.style.background = m,
                    v.canvas.style.backgroundSize = "contain",
                    v.currentBackground = p
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(5)
              , s = g(17)
              , a = g(0);
            (function() {
                var c, o;
                if (typeof window < "u" && (c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
                o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                !c) {
                    var u;
                    c = function(r) {
                        u = setTimeout(function() {
                            r(a.now())
                        }, 1e3 / 60)
                    }
                    ,
                    o = function() {
                        clearTimeout(u)
                    }
                }
                e.create = function(r) {
                    var t = {
                        fps: 60,
                        deltaSampleSize: 60,
                        counterTimestamp: 0,
                        frameCounter: 0,
                        deltaHistory: [],
                        timePrev: null,
                        frameRequestId: null,
                        isFixed: !1,
                        enabled: !0
                    }
                      , n = a.extend(t, r);
                    return n.delta = n.delta || 1e3 / n.fps,
                    n.deltaMin = n.deltaMin || 1e3 / n.fps,
                    n.deltaMax = n.deltaMax || 1e3 / (n.fps * .5),
                    n.fps = 1e3 / n.delta,
                    n
                }
                ,
                e.run = function(r, t) {
                    return typeof r.positionIterations < "u" && (t = r,
                    r = e.create()),
                    function n(i) {
                        r.frameRequestId = c(n),
                        i && r.enabled && e.tick(r, t, i)
                    }(),
                    r
                }
                ,
                e.tick = function(r, t, n) {
                    var i = t.timing, l;
                    r.isFixed ? l = r.delta : (l = n - r.timePrev || r.delta,
                    r.timePrev = n,
                    r.deltaHistory.push(l),
                    r.deltaHistory = r.deltaHistory.slice(-r.deltaSampleSize),
                    l = Math.min.apply(null, r.deltaHistory),
                    l = l < r.deltaMin ? r.deltaMin : l,
                    l = l > r.deltaMax ? r.deltaMax : l,
                    r.delta = l);
                    var x = {
                        timestamp: i.timestamp
                    };
                    f.trigger(r, "beforeTick", x),
                    r.frameCounter += 1,
                    n - r.counterTimestamp >= 1e3 && (r.fps = r.frameCounter * ((n - r.counterTimestamp) / 1e3),
                    r.counterTimestamp = n,
                    r.frameCounter = 0),
                    f.trigger(r, "tick", x),
                    f.trigger(r, "beforeUpdate", x),
                    s.update(t, l),
                    f.trigger(r, "afterUpdate", x),
                    f.trigger(r, "afterTick", x)
                }
                ,
                e.stop = function(r) {
                    o(r.frameRequestId)
                }
                ,
                e.start = function(r, t) {
                    e.run(r, t)
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(8)
              , s = g(0)
              , a = s.deprecated;
            (function() {
                e.collides = function(c, o) {
                    return f.collides(c, o)
                }
                ,
                a(e, "collides", "SAT.collides ➤ replaced by Collision.collides")
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e,
            g(1);
            var f = g(0);
            (function() {
                e.pathToVertices = function(s, a) {
                    typeof window < "u" && !("SVGPathSeg"in window) && f.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                    var c, o, u, r, t, n, i, l, x, y, P = [], w, v, p = 0, m = 0, h = 0;
                    a = a || 15;
                    var S = function(M, C, A) {
                        var T = A % 2 === 1 && A > 1;
                        if (!x || M != x.x || C != x.y) {
                            x && T ? (w = x.x,
                            v = x.y) : (w = 0,
                            v = 0);
                            var I = {
                                x: w + M,
                                y: v + C
                            };
                            (T || !x) && (x = I),
                            P.push(I),
                            m = w + M,
                            h = v + C
                        }
                    }
                      , d = function(M) {
                        var C = M.pathSegTypeAsLetter.toUpperCase();
                        if (C !== "Z") {
                            switch (C) {
                            case "M":
                            case "L":
                            case "T":
                            case "C":
                            case "S":
                            case "Q":
                                m = M.x,
                                h = M.y;
                                break;
                            case "H":
                                m = M.x;
                                break;
                            case "V":
                                h = M.y;
                                break
                            }
                            S(m, h, M.pathSegType)
                        }
                    };
                    for (e._svgPathToAbsolute(s),
                    u = s.getTotalLength(),
                    n = [],
                    c = 0; c < s.pathSegList.numberOfItems; c += 1)
                        n.push(s.pathSegList.getItem(c));
                    for (i = n.concat(); p < u; ) {
                        if (y = s.getPathSegAtLength(p),
                        t = n[y],
                        t != l) {
                            for (; i.length && i[0] != t; )
                                d(i.shift());
                            l = t
                        }
                        switch (t.pathSegTypeAsLetter.toUpperCase()) {
                        case "C":
                        case "T":
                        case "S":
                        case "Q":
                        case "A":
                            r = s.getPointAtLength(p),
                            S(r.x, r.y, 0);
                            break
                        }
                        p += a
                    }
                    for (c = 0,
                    o = i.length; c < o; ++c)
                        d(i[c]);
                    return P
                }
                ,
                e._svgPathToAbsolute = function(s) {
                    for (var a, c, o, u, r, t, n = s.pathSegList, i = 0, l = 0, x = n.numberOfItems, y = 0; y < x; ++y) {
                        var P = n.getItem(y)
                          , w = P.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(w))
                            "x"in P && (i = P.x),
                            "y"in P && (l = P.y);
                        else
                            switch ("x1"in P && (o = i + P.x1),
                            "x2"in P && (r = i + P.x2),
                            "y1"in P && (u = l + P.y1),
                            "y2"in P && (t = l + P.y2),
                            "x"in P && (i += P.x),
                            "y"in P && (l += P.y),
                            w) {
                            case "m":
                                n.replaceItem(s.createSVGPathSegMovetoAbs(i, l), y);
                                break;
                            case "l":
                                n.replaceItem(s.createSVGPathSegLinetoAbs(i, l), y);
                                break;
                            case "h":
                                n.replaceItem(s.createSVGPathSegLinetoHorizontalAbs(i), y);
                                break;
                            case "v":
                                n.replaceItem(s.createSVGPathSegLinetoVerticalAbs(l), y);
                                break;
                            case "c":
                                n.replaceItem(s.createSVGPathSegCurvetoCubicAbs(i, l, o, u, r, t), y);
                                break;
                            case "s":
                                n.replaceItem(s.createSVGPathSegCurvetoCubicSmoothAbs(i, l, r, t), y);
                                break;
                            case "q":
                                n.replaceItem(s.createSVGPathSegCurvetoQuadraticAbs(i, l, o, u), y);
                                break;
                            case "t":
                                n.replaceItem(s.createSVGPathSegCurvetoQuadraticSmoothAbs(i, l), y);
                                break;
                            case "a":
                                n.replaceItem(s.createSVGPathSegArcAbs(i, l, P.r1, P.r2, P.angle, P.largeArcFlag, P.sweepFlag), y);
                                break;
                            case "z":
                            case "Z":
                                i = a,
                                l = c;
                                break
                            }
                        (w == "M" || w == "m") && (a = i,
                        c = l)
                    }
                }
            }
            )()
        }
        , function(B, R, g) {
            var e = {};
            B.exports = e;
            var f = g(6);
            g(0),
            function() {
                e.create = f.create,
                e.add = f.add,
                e.remove = f.remove,
                e.clear = f.clear,
                e.addComposite = f.addComposite,
                e.addBody = f.addBody,
                e.addConstraint = f.addConstraint
            }()
        }
        ])
    })
}
)(ge);
var U = ge.exports;
const xe = [{
    name: "00_jeonghwan",
    radius: 33 / 2
}, {
    name: "01_daeyeon",
    radius: 48 / 2
}, {
    name: "02_seojun",
    radius: 61 / 2
}, {
    name: "03_jiwoong",
    radius: 69 / 2
}, {
    name: "04_wanseok",
    radius: 89 / 2
}, {
    name: "05_daesik",
    radius: 114 / 2
}, {
    name: "06_jinyeong",
    radius: 129 / 2
}, {
    name: "07_sungeon",
    radius: 156 / 2
}, {
    name: "08_yunhaeng",
    radius: 177 / 2
}, {
    name: "09_gury",
    radius: 220 / 2
}, {
    name: "10_jolee",
    radius: 259 / 2
}];
var Y=xe
const te = U.Engine.create()
  , Ce = U.Render.create({
    engine: te,
    element: document.body,
    options: {
        wireframes: !1,
        background: "#EEFBFB",
        width: 820,
        height: 850
    }
})
  , ee = te.world
  , background = U.Bodies.rectangle(400, 425, 620, 850, {
    isStatic: !0,
    isSensor: !0,
    render: {
        sprite: {texture: "/suika_hanggul/public/background.png"}
    }
})
  , Me = U.Bodies.rectangle(115, 395, 30, 790, {
    isStatic: !0,
    render: {
        fillStyle: "#98A9FD"
    }
})
  , Ae = U.Bodies.rectangle(705, 395, 30, 790, {
    isStatic: !0,
    render: {
        fillStyle: "#98A9FD"
    }
})
  , Ie = U.Bodies.rectangle(410, 820, 620, 60, {
    isStatic: !0,
    render: {
        fillStyle: "#98A9FD"
    }
})
  , Te = U.Bodies.rectangle(410, 150, 620, 2, {
    name: "topLine",
    isStatic: !0,
    isSensor: !0,
    render: {
        fillStyle: "#98A9FD"
    }
})
  , graph = U.Bodies.rectangle(50, 400, 100, 800, {
    isSensor: !0,
    isStatic: !0,
    render: {sprite: {texture: "/suika_hanggul/public/graph.png"}}
})
  , nextText = U.Bodies.rectangle(770, 30, 10, 10, {
    isStatic: !0,
    isSensor: !0,
    render: {
        sprite: {texture: createImage("next:")},
        xScale: 1,
        yScale: 1
    }
});



U.World.add(ee, [background, Me, Ae, Ie, Te, graph, nextText]);
U.Render.run(Ce);
U.Runner.run(te);
let $ = null
  , ae = null
  , _ = !1
  , X = null
  , endpoint = 0
  , score = 0
  , currentLine = null
  , currentScore = null
  , nextIndex = null
  , nextBody = null;
function he(curindex) {
    const K = Math.floor(Math.random() * 5)
      , W = Y[curindex]
      , C = Y[K]
      , N = U.Bodies.circle(770, 80, C.radius, {
        index: K,
        isSensor: !0,
        isSleeping: !0,
        render: {
            sprite: {
                texture: `/suika_hanggul/public/${C.name}.png`
            }
        },
        restitution: .2
      })
      , B = U.Bodies.circle(400, 50, W.radius, {
        index: curindex,
        isSleeping: !0,
        render: {
            sprite: {
                texture: `/suika_hanggul/public/${W.name}.png`
            }
        },
        restitution: .2
      });
    if (nextBody){
        U.World.remove(ee, nextBody)
    }

    $ = B,
    ae = W,
    nextIndex = K,
    nextBody = N;
    U.World.add(ee, [B, N])
}
function addLine() {
    const line = U.Bodies.rectangle(400, 455, 5, 600, {
        isSensor: !0,
        isSleeping: !0,
        render: {
            sprite: {texture: '/suika_hanggul/public/line.png'}
        }
    });
    currentLine = line,
    U.World.add(ee, line)
}
function scoreLogic(i) {
    var temp_score = 0;
    for (var step = 0; step <= i+1; step++) {
        temp_score = temp_score + step
    }
    return temp_score;
};
function createImage($string) {
    let drawing = document.createElement("canvas");

    drawing.width = '150'
    drawing.height = '50'

    let ctx = drawing.getContext("2d");

    ctx.fillStyle= "blue"
    ctx.beginPath();
    ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = '#98A9FD';
    ctx.font = "20pt sans-serif";
    ctx.textAlign = 'center'
    ctx.fillText($string, 75, 25);

    return drawing.toDataURL("image/png");
};
function addScore(i) {
    const score_board = U.Bodies.rectangle(400, 200, 150, 50, {
        isStatic: !0,
        isSensor: !0,
        render: {
            sprite: {texture: createImage(i)},
            xScale: 1,
            yScale: 1
        },
    });

    currentScore = score_board;
    U.World.add(ee, score_board)
}
window.onkeydown = K=>{
    if (!_)
        switch (K.code) {
        case "KeyA":
            if (X)
                return;
            X = setInterval(()=>{
                if ($.position.x - ae.radius > 130) {
                    U.Body.setPosition($, {
                        x: $.position.x - 1,
                        y: $.position.y
                    });
                    U.Body.setPosition(currentLine, {
                        x: currentLine.position.x - 1,
                        y: currentLine.position.y
                    });
                }
            }
            , 5);
            break;
        case "KeyD":
            if (X)
                return;
            X = setInterval(()=>{
                if ($.position.x + ae.radius < 690) {
                    U.Body.setPosition($, {
                        x: $.position.x + 1,
                        y: $.position.y
                    });
                    U.Body.setPosition(currentLine, {
                        x: currentLine.position.x + 1,
                        y: currentLine.position.y
                    })
                }
            }
            , 5);
            break;
        case "KeyS":
            U.World.remove(ee, currentLine)
            $.isSleeping = !1,
            _ = !0,
            setTimeout(()=>{
                he(nextIndex),
                addLine(),
                _ = !1
            }
            , 1e3);
            break
        }
}
;
window.onkeyup = K=>{
    switch (K.code) {
    case "KeyA":
    case "KeyD":
        clearInterval(X),
        X = null
    }
}
;
U.Events.on(te, "collisionStart", K=>{
    K.pairs.forEach(W=>{
        if (W.bodyA.index === W.bodyB.index) {
            const B = W.bodyA.index;
            if (B == Y.length - 2)
                endpoint++;
            if (B === Y.length - 1)
                return;
            score = score + scoreLogic(B);
            U.World.remove(ee, [W.bodyA, W.bodyB]);
            const R = Y[B + 1]
              , g = U.Bodies.circle(W.collision.supports[0].x, W.collision.supports[0].y, R.radius, {
                render: {
                    sprite: {
                        texture: `/suika_hanggul/public/${R.name}.png`
                    }
                },
                index: B + 1
            });
            U.World.add(ee, g)
            U.World.remove(ee, currentScore)
            addScore(score)
        }
        if (!_ && (W.bodyA.name === "topLine" || W.bodyB.name === "topLine")){
            alert(`Game over\nscore: ${score}`);
            U.World.remove(ee, currentScore);
            score=0;
            addScore(0);
            U.World.clear(ee, true);
        }
        setTimeout(() => {
            if (endpoint == 2) {
                alert(`you win \n score: ${score}`);
                endpoint=0;
                U.World.remove(ee, currentScore);
                score=0;
                addScore(0);
                U.World.clear(ee, true);
            }
        }, 1000)
    }
    )
}
);
addLine();
he(0);
addScore(0);
