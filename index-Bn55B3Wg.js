var e, t, n = Object.defineProperty, i = (e, t, i) => ( (e, t, i) => t in e ? n(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : e[t] = i)(e, "symbol" != typeof t ? t + "" : t, i);
import {r as s, a as r, R as o, b as a, g as l, c} from "../../vendor-DEMbo5Hz.js";
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
var u = {
    exports: {}
}
  , d = {}
  , h = s
  , p = Symbol.for("react.element")
  , m = Symbol.for("react.fragment")
  , f = Object.prototype.hasOwnProperty
  , g = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , v = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function y(e, t, n) {
    var i, s = {}, r = null, o = null;
    for (i in void 0 !== n && (r = "" + n),
    void 0 !== t.key && (r = "" + t.key),
    void 0 !== t.ref && (o = t.ref),
    t)
        f.call(t, i) && !v.hasOwnProperty(i) && (s[i] = t[i]);
    if (e && e.defaultProps)
        for (i in t = e.defaultProps)
            void 0 === s[i] && (s[i] = t[i]);
    return {
        $$typeof: p,
        type: e,
        key: r,
        ref: o,
        props: s,
        _owner: g.current
    }
}
d.Fragment = m,
d.jsx = y,
d.jsxs = y,
u.exports = d;
var x, b = u.exports, w = r;
function S(...e) {
    return t => e.forEach((e => function(e, t) {
        "function" == typeof e ? e(t) : null != e && (e.current = t)
    }(e, t)))
}
function C(...e) {
    return s.useCallback(S(...e), e)
}
x = w.createRoot,
w.hydrateRoot;
var E = s.forwardRef(( (e, t) => {
    const {children: n, ...i} = e
      , r = s.Children.toArray(n)
      , o = r.find(k);
    if (o) {
        const e = o.props.children
          , n = r.map((t => t === o ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t));
        return b.jsx(j, {
            ...i,
            ref: t,
            children: s.isValidElement(e) ? s.cloneElement(e, void 0, n) : null
        })
    }
    return b.jsx(j, {
        ...i,
        ref: t,
        children: n
    })
}
));
E.displayName = "Slot";
var j = s.forwardRef(( (e, t) => {
    const {children: n, ...i} = e;
    if (s.isValidElement(n)) {
        const e = function(e) {
            var t, n;
            let i = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get
              , s = i && "isReactWarning"in i && i.isReactWarning;
            if (s)
                return e.ref;
            if (i = null == (n = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : n.get,
            s = i && "isReactWarning"in i && i.isReactWarning,
            s)
                return e.props.ref;
            return e.props.ref || e.ref
        }(n);
        return s.cloneElement(n, {
            ...P(i, n.props),
            ref: t ? S(t, e) : e
        })
    }
    return s.Children.count(n) > 1 ? s.Children.only(null) : null
}
));
j.displayName = "SlotClone";
var T = ({children: e}) => b.jsx(b.Fragment, {
    children: e
});
function k(e) {
    return s.isValidElement(e) && e.type === T
}
function P(e, t) {
    const n = {
        ...t
    };
    for (const i in t) {
        const s = e[i]
          , r = t[i];
        /^on[A-Z]/.test(i) ? s && r ? n[i] = (...e) => {
            r(...e),
            s(...e)
        }
        : s && (n[i] = s) : "style" === i ? n[i] = {
            ...s,
            ...r
        } : "className" === i && (n[i] = [s, r].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function R(e) {
    var t, n, i = "";
    if ("string" == typeof e || "number" == typeof e)
        i += e;
    else if ("object" == typeof e)
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = R(e[t])) && (i && (i += " "),
                i += n);
        else
            for (t in e)
                e[t] && (i && (i += " "),
                i += t);
    return i
}
const M = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e
  , N = function() {
    for (var e, t, n = 0, i = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = R(e)) && (i && (i += " "),
        i += t);
    return i
}
  , A = (e, t) => n => {
    var i;
    if (null == (null == t ? void 0 : t.variants))
        return N(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    const {variants: s, defaultVariants: r} = t
      , o = Object.keys(s).map((e => {
        const t = null == n ? void 0 : n[e]
          , i = null == r ? void 0 : r[e];
        if (null === t)
            return null;
        const o = M(t) || M(i);
        return s[e][o]
    }
    ))
      , a = n && Object.entries(n).reduce(( (e, t) => {
        let[n,i] = t;
        return void 0 === i || (e[n] = i),
        e
    }
    ), {})
      , l = null == t || null === (i = t.compoundVariants) || void 0 === i ? void 0 : i.reduce(( (e, t) => {
        let {class: n, className: i, ...s} = t;
        return Object.entries(s).every((e => {
            let[t,n] = e;
            return Array.isArray(n) ? n.includes({
                ...r,
                ...a
            }[t]) : {
                ...r,
                ...a
            }[t] === n
        }
        )) ? [...e, n, i] : e
    }
    ), []);
    return N(e, o, l, null == n ? void 0 : n.class, null == n ? void 0 : n.className)
}
;
function L(e) {
    var t, n, i = "";
    if ("string" == typeof e || "number" == typeof e)
        i += e;
    else if ("object" == typeof e)
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++)
                e[t] && (n = L(e[t])) && (i && (i += " "),
                i += n)
        } else
            for (n in e)
                e[n] && (i && (i += " "),
                i += n);
    return i
}
const D = e => {
    const t = F(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: i} = e;
    return {
        getClassGroupId: e => {
            const n = e.split("-");
            return "" === n[0] && 1 !== n.length && n.shift(),
            I(n, t) || V(e)
        }
        ,
        getConflictingClassGroupIds: (e, t) => {
            const s = n[e] || [];
            return t && i[e] ? [...s, ...i[e]] : s
        }
    }
}
  , I = (e, t) => {
    var n;
    if (0 === e.length)
        return t.classGroupId;
    const i = e[0]
      , s = t.nextPart.get(i)
      , r = s ? I(e.slice(1), s) : void 0;
    if (r)
        return r;
    if (0 === t.validators.length)
        return;
    const o = e.join("-");
    return null == (n = t.validators.find(( ({validator: e}) => e(o)))) ? void 0 : n.classGroupId
}
  , O = /^\[(.+)\]$/
  , V = e => {
    if (O.test(e)) {
        const t = O.exec(e)[1]
          , n = null == t ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , F = e => {
    const {theme: t, prefix: n} = e
      , i = {
        nextPart: new Map,
        validators: []
    };
    return W(Object.entries(e.classGroups), n).forEach(( ([e,n]) => {
        z(n, i, e, t)
    }
    )),
    i
}
  , z = (e, t, n, i) => {
    e.forEach((e => {
        if ("string" != typeof e) {
            if ("function" == typeof e)
                return _(e) ? void z(e(i), t, n, i) : void t.validators.push({
                    validator: e,
                    classGroupId: n
                });
            Object.entries(e).forEach(( ([e,s]) => {
                z(s, B(t, e), n, i)
            }
            ))
        } else {
            ("" === e ? t : B(t, e)).classGroupId = n
        }
    }
    ))
}
  , B = (e, t) => {
    let n = e;
    return t.split("-").forEach((e => {
        n.nextPart.has(e) || n.nextPart.set(e, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(e)
    }
    )),
    n
}
  , _ = e => e.isThemeGetter
  , W = (e, t) => t ? e.map(( ([e,n]) => [e, n.map((e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(( ([e,n]) => [t + e, n]))) : e))])) : e
  , H = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , i = new Map;
    const s = (s, r) => {
        n.set(s, r),
        t++,
        t > e && (t = 0,
        i = n,
        n = new Map)
    }
    ;
    return {
        get(e) {
            let t = n.get(e);
            return void 0 !== t ? t : void 0 !== (t = i.get(e)) ? (s(e, t),
            t) : void 0
        },
        set(e, t) {
            n.has(e) ? n.set(e, t) : s(e, t)
        }
    }
}
  , $ = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , i = 1 === t.length
      , s = t[0]
      , r = t.length
      , o = e => {
        const n = [];
        let o, a = 0, l = 0;
        for (let d = 0; d < e.length; d++) {
            let c = e[d];
            if (0 === a) {
                if (c === s && (i || e.slice(d, d + r) === t)) {
                    n.push(e.slice(l, d)),
                    l = d + r;
                    continue
                }
                if ("/" === c) {
                    o = d;
                    continue
                }
            }
            "[" === c ? a++ : "]" === c && a--
        }
        const c = 0 === n.length ? e : e.substring(l)
          , u = c.startsWith("!");
        return {
            modifiers: n,
            hasImportantModifier: u,
            baseClassName: u ? c.substring(1) : c,
            maybePostfixModifierPosition: o && o > l ? o - l : void 0
        }
    }
    ;
    return n ? e => n({
        className: e,
        parseClassName: o
    }) : o
}
  , U = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach((e => {
        "[" === e[0] ? (t.push(...n.sort(), e),
        n = []) : n.push(e)
    }
    )),
    t.push(...n.sort()),
    t
}
  , q = /\s+/;
function G() {
    let e, t, n = 0, i = "";
    for (; n < arguments.length; )
        (e = arguments[n++]) && (t = Y(e)) && (i && (i += " "),
        i += t);
    return i
}
const Y = e => {
    if ("string" == typeof e)
        return e;
    let t, n = "";
    for (let i = 0; i < e.length; i++)
        e[i] && (t = Y(e[i])) && (n && (n += " "),
        n += t);
    return n
}
;
function Z(e, ...t) {
    let n, i, s, r = function(a) {
        const l = t.reduce(( (e, t) => t(e)), e());
        return n = (e => ({
            cache: H(e.cacheSize),
            parseClassName: $(e),
            ...D(e)
        }))(l),
        i = n.cache.get,
        s = n.cache.set,
        r = o,
        o(a)
    };
    function o(e) {
        const t = i(e);
        if (t)
            return t;
        const r = ( (e, t) => {
            const {parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: s} = t
              , r = []
              , o = e.trim().split(q);
            let a = "";
            for (let l = o.length - 1; l >= 0; l -= 1) {
                const e = o[l]
                  , {modifiers: t, hasImportantModifier: c, baseClassName: u, maybePostfixModifierPosition: d} = n(e);
                let h = Boolean(d)
                  , p = i(h ? u.substring(0, d) : u);
                if (!p) {
                    if (!h) {
                        a = e + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    if (p = i(u),
                    !p) {
                        a = e + (a.length > 0 ? " " + a : a);
                        continue
                    }
                    h = !1
                }
                const m = U(t).join(":")
                  , f = c ? m + "!" : m
                  , g = f + p;
                if (r.includes(g))
                    continue;
                r.push(g);
                const v = s(p, h);
                for (let n = 0; n < v.length; ++n) {
                    const e = v[n];
                    r.push(f + e)
                }
                a = e + (a.length > 0 ? " " + a : a)
            }
            return a
        }
        )(e, n);
        return s(e, r),
        r
    }
    return function() {
        return r(G.apply(null, arguments))
    }
}
const X = e => {
    const t = t => t[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , K = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Q = /^\d+\/\d+$/
  , J = new Set(["px", "full", "screen"])
  , ee = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , te = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , ne = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , ie = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , se = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , re = e => ae(e) || J.has(e) || Q.test(e)
  , oe = e => be(e, "length", we)
  , ae = e => Boolean(e) && !Number.isNaN(Number(e))
  , le = e => be(e, "number", ae)
  , ce = e => Boolean(e) && Number.isInteger(Number(e))
  , ue = e => e.endsWith("%") && ae(e.slice(0, -1))
  , de = e => K.test(e)
  , he = e => ee.test(e)
  , pe = new Set(["length", "size", "percentage"])
  , me = e => be(e, pe, Se)
  , fe = e => be(e, "position", Se)
  , ge = new Set(["image", "url"])
  , ve = e => be(e, ge, Ee)
  , ye = e => be(e, "", Ce)
  , xe = () => !0
  , be = (e, t, n) => {
    const i = K.exec(e);
    return !!i && (i[1] ? "string" == typeof t ? i[1] === t : t.has(i[1]) : n(i[2]))
}
  , we = e => te.test(e) && !ne.test(e)
  , Se = () => !1
  , Ce = e => ie.test(e)
  , Ee = e => se.test(e)
  , je = Z(( () => {
    const e = X("colors")
      , t = X("spacing")
      , n = X("blur")
      , i = X("brightness")
      , s = X("borderColor")
      , r = X("borderRadius")
      , o = X("borderSpacing")
      , a = X("borderWidth")
      , l = X("contrast")
      , c = X("grayscale")
      , u = X("hueRotate")
      , d = X("invert")
      , h = X("gap")
      , p = X("gradientColorStops")
      , m = X("gradientColorStopPositions")
      , f = X("inset")
      , g = X("margin")
      , v = X("opacity")
      , y = X("padding")
      , x = X("saturate")
      , b = X("scale")
      , w = X("sepia")
      , S = X("skew")
      , C = X("space")
      , E = X("translate")
      , j = () => ["auto", de, t]
      , T = () => [de, t]
      , k = () => ["", re, oe]
      , P = () => ["auto", ae, de]
      , R = () => ["", "0", de]
      , M = () => [ae, de];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xe],
            spacing: [re, oe],
            blur: ["none", "", he, de],
            brightness: M(),
            borderColor: [e],
            borderRadius: ["none", "", "full", he, de],
            borderSpacing: T(),
            borderWidth: k(),
            contrast: M(),
            grayscale: R(),
            hueRotate: M(),
            invert: R(),
            gap: T(),
            gradientColorStops: [e],
            gradientColorStopPositions: [ue, oe],
            inset: j(),
            margin: j(),
            opacity: M(),
            padding: T(),
            saturate: M(),
            scale: M(),
            sepia: R(),
            skew: M(),
            space: T(),
            translate: T()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", de]
            }],
            container: ["container"],
            columns: [{
                columns: [he]
            }],
            "break-after": [{
                "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }],
            "break-before": [{
                "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", de]
            }],
            overflow: [{
                overflow: ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            "overflow-x": [{
                "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            "overflow-y": [{
                "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
            }],
            overscroll: [{
                overscroll: ["auto", "contain", "none"]
            }],
            "overscroll-x": [{
                "overscroll-x": ["auto", "contain", "none"]
            }],
            "overscroll-y": [{
                "overscroll-y": ["auto", "contain", "none"]
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [f]
            }],
            "inset-x": [{
                "inset-x": [f]
            }],
            "inset-y": [{
                "inset-y": [f]
            }],
            start: [{
                start: [f]
            }],
            end: [{
                end: [f]
            }],
            top: [{
                top: [f]
            }],
            right: [{
                right: [f]
            }],
            bottom: [{
                bottom: [f]
            }],
            left: [{
                left: [f]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ce, de]
            }],
            basis: [{
                basis: j()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", de]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", ce, de]
            }],
            "grid-cols": [{
                "grid-cols": [xe]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ce, de]
                }, de]
            }],
            "col-start": [{
                "col-start": P()
            }],
            "col-end": [{
                "col-end": P()
            }],
            "grid-rows": [{
                "grid-rows": [xe]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ce, de]
                }, de]
            }],
            "row-start": [{
                "row-start": P()
            }],
            "row-end": [{
                "row-end": P()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", de]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", de]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [y]
            }],
            px: [{
                px: [y]
            }],
            py: [{
                py: [y]
            }],
            ps: [{
                ps: [y]
            }],
            pe: [{
                pe: [y]
            }],
            pt: [{
                pt: [y]
            }],
            pr: [{
                pr: [y]
            }],
            pb: [{
                pb: [y]
            }],
            pl: [{
                pl: [y]
            }],
            m: [{
                m: [g]
            }],
            mx: [{
                mx: [g]
            }],
            my: [{
                my: [g]
            }],
            ms: [{
                ms: [g]
            }],
            me: [{
                me: [g]
            }],
            mt: [{
                mt: [g]
            }],
            mr: [{
                mr: [g]
            }],
            mb: [{
                mb: [g]
            }],
            ml: [{
                ml: [g]
            }],
            "space-x": [{
                "space-x": [C]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [C]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, t]
            }],
            "min-w": [{
                "min-w": [de, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [de, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [he]
                }, he]
            }],
            h: [{
                h: [de, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [de, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", he, oe]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", le]
            }],
            "font-family": [{
                font: [xe]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", de]
            }],
            "line-clamp": [{
                "line-clamp": ["none", ae, le]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", re, de]
            }],
            "list-image": [{
                "list-image": ["none", de]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", de]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", re, oe]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", re, de]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: T()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", de]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", fe]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", me]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, ve]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [m]
            }],
            "gradient-via-pos": [{
                via: [m]
            }],
            "gradient-to-pos": [{
                to: [m]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [r]
            }],
            "rounded-s": [{
                "rounded-s": [r]
            }],
            "rounded-e": [{
                "rounded-e": [r]
            }],
            "rounded-t": [{
                "rounded-t": [r]
            }],
            "rounded-r": [{
                "rounded-r": [r]
            }],
            "rounded-b": [{
                "rounded-b": [r]
            }],
            "rounded-l": [{
                "rounded-l": [r]
            }],
            "rounded-ss": [{
                "rounded-ss": [r]
            }],
            "rounded-se": [{
                "rounded-se": [r]
            }],
            "rounded-ee": [{
                "rounded-ee": [r]
            }],
            "rounded-es": [{
                "rounded-es": [r]
            }],
            "rounded-tl": [{
                "rounded-tl": [r]
            }],
            "rounded-tr": [{
                "rounded-tr": [r]
            }],
            "rounded-br": [{
                "rounded-br": [r]
            }],
            "rounded-bl": [{
                "rounded-bl": [r]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: ["solid", "dashed", "dotted", "double", "none", "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: ["solid", "dashed", "dotted", "double", "none"]
            }],
            "border-color": [{
                border: [s]
            }],
            "border-color-x": [{
                "border-x": [s]
            }],
            "border-color-y": [{
                "border-y": [s]
            }],
            "border-color-s": [{
                "border-s": [s]
            }],
            "border-color-e": [{
                "border-e": [s]
            }],
            "border-color-t": [{
                "border-t": [s]
            }],
            "border-color-r": [{
                "border-r": [s]
            }],
            "border-color-b": [{
                "border-b": [s]
            }],
            "border-color-l": [{
                "border-l": [s]
            }],
            "divide-color": [{
                divide: [s]
            }],
            "outline-style": [{
                outline: ["", "solid", "dashed", "dotted", "double", "none"]
            }],
            "outline-offset": [{
                "outline-offset": [re, de]
            }],
            "outline-w": [{
                outline: [re, oe]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: k()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [re, oe]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", he, ye]
            }],
            "shadow-color": [{
                shadow: [xe]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [i]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", he, de]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [u]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [w]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [i]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [u]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [w]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", de]
            }],
            duration: [{
                duration: M()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", de]
            }],
            delay: [{
                delay: M()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", de]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [ce, de]
            }],
            "translate-x": [{
                "translate-x": [E]
            }],
            "translate-y": [{
                "translate-y": [E]
            }],
            "skew-x": [{
                "skew-x": [S]
            }],
            "skew-y": [{
                "skew-y": [S]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", de]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": T()
            }],
            "scroll-mx": [{
                "scroll-mx": T()
            }],
            "scroll-my": [{
                "scroll-my": T()
            }],
            "scroll-ms": [{
                "scroll-ms": T()
            }],
            "scroll-me": [{
                "scroll-me": T()
            }],
            "scroll-mt": [{
                "scroll-mt": T()
            }],
            "scroll-mr": [{
                "scroll-mr": T()
            }],
            "scroll-mb": [{
                "scroll-mb": T()
            }],
            "scroll-ml": [{
                "scroll-ml": T()
            }],
            "scroll-p": [{
                "scroll-p": T()
            }],
            "scroll-px": [{
                "scroll-px": T()
            }],
            "scroll-py": [{
                "scroll-py": T()
            }],
            "scroll-ps": [{
                "scroll-ps": T()
            }],
            "scroll-pe": [{
                "scroll-pe": T()
            }],
            "scroll-pt": [{
                "scroll-pt": T()
            }],
            "scroll-pr": [{
                "scroll-pr": T()
            }],
            "scroll-pb": [{
                "scroll-pb": T()
            }],
            "scroll-pl": [{
                "scroll-pl": T()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", de]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [re, oe, le]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
));
function Te(...e) {
    return je(function() {
        for (var e, t, n = 0, i = "", s = arguments.length; n < s; n++)
            (e = arguments[n]) && (t = L(e)) && (i && (i += " "),
            i += t);
        return i
    }(e))
}
function ke(e, t) {
    let n = !1;
    return function(...i) {
        n || (e.apply(this, i),
        n = !0,
        setTimeout(( () => n = !1), t))
    }
}
const Pe = A("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Re = s.forwardRef(( ({className: e, variant: t, size: n, asChild: i=!1, ...s}, r) => {
    const o = i ? E : "button";
    return b.jsx(o, {
        className: Te(Pe({
            variant: t,
            size: n,
            className: e
        })),
        ref: r,
        ...s
    })
}
));
Re.displayName = "Button";
const Me = (...e) => e.filter(( (e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)).join(" ").trim();
var Ne = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const Ae = s.forwardRef(( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: i, className: r="", children: o, iconNode: a, ...l}, c) => s.createElement("svg", {
    ref: c,
    ...Ne,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: i ? 24 * Number(n) / Number(t) : n,
    className: Me("lucide", r),
    ...l
}, [...a.map(( ([e,t]) => s.createElement(e, t))), ...Array.isArray(o) ? o : [o]])))
  , Le = (e, t) => {
    const n = s.forwardRef(( ({className: n, ...i}, r) => {
        return s.createElement(Ae, {
            ref: r,
            iconNode: t,
            className: Me(`lucide-${o = e,
            o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, n),
            ...i
        });
        var o
    }
    ));
    return n.displayName = `${e}`,
    n
}
  , De = Le("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]])
  , Ie = Le("ArrowUpRight", [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]])
  , Oe = Le("Asterisk", [["path", {
    d: "M12 6v12",
    key: "1vza4d"
}], ["path", {
    d: "M17.196 9 6.804 15",
    key: "1ah31z"
}], ["path", {
    d: "m6.804 9 10.392 6",
    key: "1b6pxd"
}]])
  , Ve = Le("ChevronLeft", [["path", {
    d: "m15 18-6-6 6-6",
    key: "1wnfg3"
}]])
  , Fe = Le("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]])
  , ze = Le("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]])
  , Be = Le("Github", [["path", {
    d: "M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
    ,transform:"scale(0.022)"
    ,fill:"currentColor"
    ,key: "tonef"
    
}],]),
    
 
 _e = Le("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]])
  , We = Le("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]])
  , He = Le("MoveRight", [["path", {
    d: "M18 8L22 12L18 16",
    key: "1r0oui"
}], ["path", {
    d: "M2 12H22",
    key: "1m8cig"
}]])
  , $e = Le("MoveUpRight", [["path", {
    d: "M13 5H19V11",
    key: "1n1gyv"
}], ["path", {
    d: "M19 5L5 19",
    key: "72u4yj"
}]])
  , Ue = Le("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]])
  , qe = Le("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function Ge(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (null == e || e(i),
        !1 === n || !i.defaultPrevented)
            return null == t ? void 0 : t(i)
    }
}
function Ye(...e) {
    const t = e[0];
    if (1 === e.length)
        return t;
    const n = () => {
        const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
        })));
        return function(e) {
            const i = n.reduce(( (t, {useScope: n, scopeName: i}) => ({
                ...t,
                ...n(e)[`__scope${i}`]
            })), {});
            return s.useMemo(( () => ({
                [`__scope${t.scopeName}`]: i
            })), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
var Ze = Boolean(null == globalThis ? void 0 : globalThis.document) ? s.useLayoutEffect : () => {}
  , Xe = o["useId".toString()] || ( () => {}
)
  , Ke = 0;
function Qe(e) {
    const [t,n] = s.useState(Xe());
    return Ze(( () => {
        e || n((e => e ?? String(Ke++)))
    }
    ), [e]),
    e || (t ? `radix-${t}` : "")
}
function Je(e) {
    const t = s.useRef(e);
    return s.useEffect(( () => {
        t.current = e
    }
    )),
    s.useMemo(( () => (...e) => {
        var n;
        return null == (n = t.current) ? void 0 : n.call(t, ...e)
    }
    ), [])
}
function et({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [i,r] = function({defaultProp: e, onChange: t}) {
        const n = s.useState(e)
          , [i] = n
          , r = s.useRef(i)
          , o = Je(t);
        return s.useEffect(( () => {
            r.current !== i && (o(i),
            r.current = i)
        }
        ), [i, r, o]),
        n
    }({
        defaultProp: t,
        onChange: n
    })
      , o = void 0 !== e
      , a = o ? e : i
      , l = Je(n);
    return [a, s.useCallback((t => {
        if (o) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
        } else
            r(t)
    }
    ), [o, e, r, l])]
}
var tt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(( (e, t) => {
    const n = s.forwardRef(( (e, n) => {
        const {asChild: i, ...s} = e
          , r = i ? E : t;
        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
        b.jsx(r, {
            ...s,
            ref: n
        })
    }
    ));
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
), {});
var nt, it = "dismissableLayer.update", st = "dismissableLayer.pointerDownOutside", rt = "dismissableLayer.focusOutside", ot = s.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), at = s.forwardRef(( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: i, onPointerDownOutside: r, onFocusOutside: o, onInteractOutside: a, onDismiss: l, ...c} = e
      , u = s.useContext(ot)
      , [d,h] = s.useState(null)
      , p = (null == d ? void 0 : d.ownerDocument) ?? (null == globalThis ? void 0 : globalThis.document)
      , [,m] = s.useState({})
      , f = C(t, (e => h(e)))
      , g = Array.from(u.layers)
      , [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = g.indexOf(v)
      , x = d ? g.indexOf(d) : -1
      , w = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = x >= y
      , E = function(e, t=(null == globalThis ? void 0 : globalThis.document)) {
        const n = Je(e)
          , i = s.useRef(!1)
          , r = s.useRef(( () => {}
        ));
        return s.useEffect(( () => {
            const e = e => {
                if (e.target && !i.current) {
                    let i = function() {
                        ct(st, n, s, {
                            discrete: !0
                        })
                    };
                    const s = {
                        originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", r.current),
                    r.current = i,
                    t.addEventListener("click", r.current, {
                        once: !0
                    })) : i()
                } else
                    t.removeEventListener("click", r.current);
                i.current = !1
            }
              , s = window.setTimeout(( () => {
                t.addEventListener("pointerdown", e)
            }
            ), 0);
            return () => {
                window.clearTimeout(s),
                t.removeEventListener("pointerdown", e),
                t.removeEventListener("click", r.current)
            }
        }
        ), [t, n]),
        {
            onPointerDownCapture: () => i.current = !0
        }
    }((e => {
        const t = e.target
          , n = [...u.branches].some((e => e.contains(t)));
        S && !n && (null == r || r(e),
        null == a || a(e),
        e.defaultPrevented || null == l || l())
    }
    ), p)
      , j = function(e, t=(null == globalThis ? void 0 : globalThis.document)) {
        const n = Je(e)
          , i = s.useRef(!1);
        return s.useEffect(( () => {
            const e = e => {
                if (e.target && !i.current) {
                    ct(rt, n, {
                        originalEvent: e
                    }, {
                        discrete: !1
                    })
                }
            }
            ;
            return t.addEventListener("focusin", e),
            () => t.removeEventListener("focusin", e)
        }
        ), [t, n]),
        {
            onFocusCapture: () => i.current = !0,
            onBlurCapture: () => i.current = !1
        }
    }((e => {
        const t = e.target;
        [...u.branches].some((e => e.contains(t))) || (null == o || o(e),
        null == a || a(e),
        e.defaultPrevented || null == l || l())
    }
    ), p);
    return function(e, t=(null == globalThis ? void 0 : globalThis.document)) {
        const n = Je(e);
        s.useEffect(( () => {
            const e = e => {
                "Escape" === e.key && n(e)
            }
            ;
            return t.addEventListener("keydown", e, {
                capture: !0
            }),
            () => t.removeEventListener("keydown", e, {
                capture: !0
            })
        }
        ), [n, t])
    }((e => {
        x === u.layers.size - 1 && (null == i || i(e),
        !e.defaultPrevented && l && (e.preventDefault(),
        l()))
    }
    ), p),
    s.useEffect(( () => {
        if (d)
            return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (nt = p.body.style.pointerEvents,
            p.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            lt(),
            () => {
                n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = nt)
            }
    }
    ), [d, p, n, u]),
    s.useEffect(( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        lt())
    }
    ), [d, u]),
    s.useEffect(( () => {
        const e = () => m({});
        return document.addEventListener(it, e),
        () => document.removeEventListener(it, e)
    }
    ), []),
    b.jsx(tt.div, {
        ...c,
        ref: f,
        style: {
            pointerEvents: w ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Ge(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: Ge(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: Ge(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
));
at.displayName = "DismissableLayer";
function lt() {
    const e = new CustomEvent(it);
    document.dispatchEvent(e)
}
function ct(e, t, n, {discrete: i}) {
    const s = n.originalEvent.target
      , o = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && s.addEventListener(e, t, {
        once: !0
    }),
    i ? function(e, t) {
        e && r.flushSync(( () => e.dispatchEvent(t)))
    }(s, o) : s.dispatchEvent(o)
}
s.forwardRef(( (e, t) => {
    const n = s.useContext(ot)
      , i = s.useRef(null)
      , r = C(t, i);
    return s.useEffect(( () => {
        const e = i.current;
        if (e)
            return n.branches.add(e),
            () => {
                n.branches.delete(e)
            }
    }
    ), [n.branches]),
    b.jsx(tt.div, {
        ...e,
        ref: r
    })
}
)).displayName = "DismissableLayerBranch";
var ut = "focusScope.autoFocusOnMount"
  , dt = "focusScope.autoFocusOnUnmount"
  , ht = {
    bubbles: !1,
    cancelable: !0
}
  , pt = s.forwardRef(( (e, t) => {
    const {loop: n=!1, trapped: i=!1, onMountAutoFocus: r, onUnmountAutoFocus: o, ...a} = e
      , [l,c] = s.useState(null)
      , u = Je(r)
      , d = Je(o)
      , h = s.useRef(null)
      , p = C(t, (e => c(e)))
      , m = s.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    s.useEffect(( () => {
        if (i) {
            let e = function(e) {
                if (m.paused || !l)
                    return;
                const t = e.target;
                l.contains(t) ? h.current = t : vt(h.current, {
                    select: !0
                })
            }
              , t = function(e) {
                if (m.paused || !l)
                    return;
                const t = e.relatedTarget;
                null !== t && (l.contains(t) || vt(h.current, {
                    select: !0
                }))
            }
              , n = function(e) {
                if (document.activeElement === document.body)
                    for (const t of e)
                        t.removedNodes.length > 0 && vt(l)
            };
            document.addEventListener("focusin", e),
            document.addEventListener("focusout", t);
            const i = new MutationObserver(n);
            return l && i.observe(l, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", e),
                document.removeEventListener("focusout", t),
                i.disconnect()
            }
        }
    }
    ), [i, l, m.paused]),
    s.useEffect(( () => {
        if (l) {
            yt.add(m);
            const t = document.activeElement;
            if (!l.contains(t)) {
                const n = new CustomEvent(ut,ht);
                l.addEventListener(ut, u),
                l.dispatchEvent(n),
                n.defaultPrevented || (!function(e, {select: t=!1}={}) {
                    const n = document.activeElement;
                    for (const i of e)
                        if (vt(i, {
                            select: t
                        }),
                        document.activeElement !== n)
                            return
                }((e = mt(l),
                e.filter((e => "A" !== e.tagName))), {
                    select: !0
                }),
                document.activeElement === t && vt(l))
            }
            return () => {
                l.removeEventListener(ut, u),
                setTimeout(( () => {
                    const e = new CustomEvent(dt,ht);
                    l.addEventListener(dt, d),
                    l.dispatchEvent(e),
                    e.defaultPrevented || vt(t ?? document.body, {
                        select: !0
                    }),
                    l.removeEventListener(dt, d),
                    yt.remove(m)
                }
                ), 0)
            }
        }
        var e
    }
    ), [l, u, d, m]);
    const f = s.useCallback((e => {
        if (!n && !i)
            return;
        if (m.paused)
            return;
        const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
          , s = document.activeElement;
        if (t && s) {
            const t = e.currentTarget
              , [i,r] = function(e) {
                const t = mt(e)
                  , n = ft(t, e)
                  , i = ft(t.reverse(), e);
                return [n, i]
            }(t);
            i && r ? e.shiftKey || s !== r ? e.shiftKey && s === i && (e.preventDefault(),
            n && vt(r, {
                select: !0
            })) : (e.preventDefault(),
            n && vt(i, {
                select: !0
            })) : s === t && e.preventDefault()
        }
    }
    ), [n, i, m.paused]);
    return b.jsx(tt.div, {
        tabIndex: -1,
        ...a,
        ref: p,
        onKeyDown: f
    })
}
));
function mt(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: e => {
            const t = "INPUT" === e.tagName && "hidden" === e.type;
            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ft(e, t) {
    for (const n of e)
        if (!gt(n, {
            upTo: t
        }))
            return n
}
function gt(e, {upTo: t}) {
    if ("hidden" === getComputedStyle(e).visibility)
        return !0;
    for (; e; ) {
        if (void 0 !== t && e === t)
            return !1;
        if ("none" === getComputedStyle(e).display)
            return !0;
        e = e.parentElement
    }
    return !1
}
function vt(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && function(e) {
            return e instanceof HTMLInputElement && "select"in e
        }(e) && t && e.select()
    }
}
pt.displayName = "FocusScope";
var yt = function() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (null == n || n.pause()),
            e = xt(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = xt(e, t),
            null == (n = e[0]) || n.resume()
        }
    }
}();
function xt(e, t) {
    const n = [...e]
      , i = n.indexOf(t);
    return -1 !== i && n.splice(i, 1),
    n
}
var bt = s.forwardRef(( (e, t) => {
    var n;
    const {container: i, ...r} = e
      , [o,l] = s.useState(!1);
    Ze(( () => l(!0)), []);
    const c = i || o && (null == (n = null == globalThis ? void 0 : globalThis.document) ? void 0 : n.body);
    return c ? a.createPortal(b.jsx(tt.div, {
        ...r,
        ref: t
    }), c) : null
}
));
bt.displayName = "Portal";
var wt = e => {
    const {present: t, children: n} = e
      , i = function(e) {
        const [t,n] = s.useState()
          , i = s.useRef({})
          , r = s.useRef(e)
          , o = s.useRef("none")
          , a = e ? "mounted" : "unmounted"
          , [l,c] = function(e, t) {
            return s.useReducer(( (e, n) => t[e][n] ?? e), e)
        }(a, {
            mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
            },
            unmounted: {
                MOUNT: "mounted"
            }
        });
        return s.useEffect(( () => {
            const e = St(i.current);
            o.current = "mounted" === l ? e : "none"
        }
        ), [l]),
        Ze(( () => {
            const t = i.current
              , n = r.current;
            if (n !== e) {
                const i = o.current
                  , s = St(t);
                if (e)
                    c("MOUNT");
                else if ("none" === s || "none" === (null == t ? void 0 : t.display))
                    c("UNMOUNT");
                else {
                    c(n && i !== s ? "ANIMATION_OUT" : "UNMOUNT")
                }
                r.current = e
            }
        }
        ), [e, c]),
        Ze(( () => {
            if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window
                  , s = s => {
                    const o = St(i.current).includes(s.animationName);
                    if (s.target === t && o && (c("ANIMATION_END"),
                    !r.current)) {
                        const i = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards",
                        e = n.setTimeout(( () => {
                            "forwards" === t.style.animationFillMode && (t.style.animationFillMode = i)
                        }
                        ))
                    }
                }
                  , a = e => {
                    e.target === t && (o.current = St(i.current))
                }
                ;
                return t.addEventListener("animationstart", a),
                t.addEventListener("animationcancel", s),
                t.addEventListener("animationend", s),
                () => {
                    n.clearTimeout(e),
                    t.removeEventListener("animationstart", a),
                    t.removeEventListener("animationcancel", s),
                    t.removeEventListener("animationend", s)
                }
            }
            c("ANIMATION_END")
        }
        ), [t, c]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
                e && (i.current = getComputedStyle(e)),
                n(e)
            }
            ), [])
        }
    }(t)
      , r = "function" == typeof n ? n({
        present: i.isPresent
    }) : s.Children.only(n)
      , o = C(i.ref, function(e) {
        var t, n;
        let i = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get
          , s = i && "isReactWarning"in i && i.isReactWarning;
        if (s)
            return e.ref;
        if (i = null == (n = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : n.get,
        s = i && "isReactWarning"in i && i.isReactWarning,
        s)
            return e.props.ref;
        return e.props.ref || e.ref
    }(r));
    return "function" == typeof n || i.isPresent ? s.cloneElement(r, {
        ref: o
    }) : null
}
;
function St(e) {
    return (null == e ? void 0 : e.animationName) || "none"
}
wt.displayName = "Presence";
var Ct = 0;
function Et() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var jt = function() {
    return jt = Object.assign || function(e) {
        for (var t, n = 1, i = arguments.length; n < i; n++)
            for (var s in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        return e
    }
    ,
    jt.apply(this, arguments)
};
function Tt(e, t) {
    var n = {};
    for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var s = 0;
        for (i = Object.getOwnPropertySymbols(e); s < i.length; s++)
            t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]])
    }
    return n
}
"function" == typeof SuppressedError && SuppressedError;
var kt = "right-scroll-bar-position"
  , Pt = "width-before-scroll-bar";
function Rt(e, t) {
    return "function" == typeof e ? e(t) : e && (e.current = t),
    e
}
var Mt = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect
  , Nt = new WeakMap;
function At(e, t) {
    var n, i, r, o = (n = null,
    i = function(t) {
        return e.forEach((function(e) {
            return Rt(e, t)
        }
        ))
    }
    ,
    (r = s.useState((function() {
        return {
            value: n,
            callback: i,
            facade: {
                get current() {
                    return r.value
                },
                set current(e) {
                    var t = r.value;
                    t !== e && (r.value = e,
                    r.callback(e, t))
                }
            }
        }
    }
    ))[0]).callback = i,
    r.facade);
    return Mt((function() {
        var t = Nt.get(o);
        if (t) {
            var n = new Set(t)
              , i = new Set(e)
              , s = o.current;
            n.forEach((function(e) {
                i.has(e) || Rt(e, null)
            }
            )),
            i.forEach((function(e) {
                n.has(e) || Rt(e, s)
            }
            ))
        }
        Nt.set(o, e)
    }
    ), [e]),
    o
}
function Lt(e) {
    return e
}
var Dt = function(e) {
    var t = e.sideCar
      , n = Tt(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var i = t.read();
    if (!i)
        throw new Error("Sidecar medium not found");
    return s.createElement(i, jt({}, n))
};
Dt.isSideCarExport = !0;
var It = function(e) {
    void 0 === e && (e = {});
    var t = function(e, t) {
        void 0 === t && (t = Lt);
        var n = []
          , i = !1;
        return {
            read: function() {
                if (i)
                    throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(e) {
                var s = t(e, i);
                return n.push(s),
                function() {
                    n = n.filter((function(e) {
                        return e !== s
                    }
                    ))
                }
            },
            assignSyncMedium: function(e) {
                for (i = !0; n.length; ) {
                    var t = n;
                    n = [],
                    t.forEach(e)
                }
                n = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(e) {
                i = !0;
                var t = [];
                if (n.length) {
                    var s = n;
                    n = [],
                    s.forEach(e),
                    t = n
                }
                var r = function() {
                    var n = t;
                    t = [],
                    n.forEach(e)
                }
                  , o = function() {
                    return Promise.resolve().then(r)
                };
                o(),
                n = {
                    push: function(e) {
                        t.push(e),
                        o()
                    },
                    filter: function(e) {
                        return t = t.filter(e),
                        n
                    }
                }
            }
        }
    }(null);
    return t.options = jt({
        async: !0,
        ssr: !1
    }, e),
    t
}()
  , Ot = function() {}
  , Vt = s.forwardRef((function(e, t) {
    var n = s.useRef(null)
      , i = s.useState({
        onScrollCapture: Ot,
        onWheelCapture: Ot,
        onTouchMoveCapture: Ot
    })
      , r = i[0]
      , o = i[1]
      , a = e.forwardProps
      , l = e.children
      , c = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , h = e.shards
      , p = e.sideCar
      , m = e.noIsolation
      , f = e.inert
      , g = e.allowPinchZoom
      , v = e.as
      , y = void 0 === v ? "div" : v
      , x = e.gapMode
      , b = Tt(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , w = p
      , S = At([n, t])
      , C = jt(jt({}, b), r);
    return s.createElement(s.Fragment, null, d && s.createElement(w, {
        sideCar: It,
        removeScrollBar: u,
        shards: h,
        noIsolation: m,
        inert: f,
        setCallbacks: o,
        allowPinchZoom: !!g,
        lockRef: n,
        gapMode: x
    }), a ? s.cloneElement(s.Children.only(l), jt(jt({}, C), {
        ref: S
    })) : s.createElement(y, jt({}, C, {
        className: c,
        ref: S
    }), l))
}
));
Vt.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
},
Vt.classNames = {
    fullWidth: Pt,
    zeroRight: kt
};
function Ft() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = function() {
        if ("undefined" != typeof __webpack_nonce__)
            return __webpack_nonce__
    }();
    return t && e.setAttribute("nonce", t),
    e
}
var zt = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            var i, s;
            0 == e && (t = Ft()) && (s = n,
            (i = t).styleSheet ? i.styleSheet.cssText = s : i.appendChild(document.createTextNode(s)),
            function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(t)),
            e++
        },
        remove: function() {
            !--e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , Bt = function() {
    var e, t = (e = zt(),
    function(t, n) {
        s.useEffect((function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }
        ), [t && n])
    }
    );
    return function(e) {
        var n = e.styles
          , i = e.dynamic;
        return t(n, i),
        null
    }
}
  , _t = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Wt = function(e) {
    return parseInt(e || "", 10) || 0
}
  , Ht = function(e) {
    if (void 0 === e && (e = "margin"),
    "undefined" == typeof window)
        return _t;
    var t = function(e) {
        var t = window.getComputedStyle(document.body)
          , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
          , i = t["padding" === e ? "paddingTop" : "marginTop"]
          , s = t["padding" === e ? "paddingRight" : "marginRight"];
        return [Wt(n), Wt(i), Wt(s)]
    }(e)
      , n = document.documentElement.clientWidth
      , i = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, i - n + t[2] - t[0])
    }
}
  , $t = Bt()
  , Ut = "data-scroll-locked"
  , qt = function(e, t, n, i) {
    var s = e.left
      , r = e.top
      , o = e.right
      , a = e.gap;
    return void 0 === n && (n = "margin"),
    "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(i, ";\n   padding-right: ").concat(a, "px ").concat(i, ";\n  }\n  body[").concat(Ut, "] {\n    overflow: hidden ").concat(i, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(i, ";"), "margin" === n && "\n    padding-left: ".concat(s, "px;\n    padding-top: ").concat(r, "px;\n    padding-right: ").concat(o, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(i, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(i, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(kt, " {\n    right: ").concat(a, "px ").concat(i, ";\n  }\n  \n  .").concat(Pt, " {\n    margin-right: ").concat(a, "px ").concat(i, ";\n  }\n  \n  .").concat(kt, " .").concat(kt, " {\n    right: 0 ").concat(i, ";\n  }\n  \n  .").concat(Pt, " .").concat(Pt, " {\n    margin-right: 0 ").concat(i, ";\n  }\n  \n  body[").concat(Ut, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
}
  , Gt = function() {
    var e = parseInt(document.body.getAttribute(Ut) || "0", 10);
    return isFinite(e) ? e : 0
}
  , Yt = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , i = e.gapMode
      , r = void 0 === i ? "margin" : i;
    s.useEffect((function() {
        return document.body.setAttribute(Ut, (Gt() + 1).toString()),
        function() {
            var e = Gt() - 1;
            e <= 0 ? document.body.removeAttribute(Ut) : document.body.setAttribute(Ut, e.toString())
        }
    }
    ), []);
    var o = s.useMemo((function() {
        return Ht(r)
    }
    ), [r]);
    return s.createElement($t, {
        styles: qt(o, !t, r, n ? "" : "!important")
    })
}
  , Zt = !1;
if ("undefined" != typeof window)
    try {
        var Xt = Object.defineProperty({}, "passive", {
            get: function() {
                return Zt = !0,
                !0
            }
        });
        window.addEventListener("test", Xt, Xt),
        window.removeEventListener("test", Xt, Xt)
    } catch (gf) {
        Zt = !1
    }
var Kt = !!Zt && {
    passive: !1
}
  , Qt = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && !function(e) {
        return "TEXTAREA" === e.tagName
    }(e) && "visible" === n[t])
}
  , Jt = function(e, t) {
    var n = t.ownerDocument
      , i = t;
    do {
        if ("undefined" != typeof ShadowRoot && i instanceof ShadowRoot && (i = i.host),
        en(e, i)) {
            var s = tn(e, i);
            if (s[1] > s[2])
                return !0
        }
        i = i.parentNode
    } while (i && i !== n.body);
    return !1
}
  , en = function(e, t) {
    return "v" === e ? function(e) {
        return Qt(e, "overflowY")
    }(t) : function(e) {
        return Qt(e, "overflowX")
    }(t)
}
  , tn = function(e, t) {
    return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth]
    }(t);
    var n
}
  , nn = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , sn = function(e) {
    return [e.deltaX, e.deltaY]
}
  , rn = function(e) {
    return e && "current"in e ? e.current : e
}
  , on = function(e) {
    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
}
  , an = 0
  , ln = [];
function cn(e) {
    for (var t = null; null !== e; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const un = (dn = function(e) {
    var t = s.useRef([])
      , n = s.useRef([0, 0])
      , i = s.useRef()
      , r = s.useState(an++)[0]
      , o = s.useState(Bt)[0]
      , a = s.useRef(e);
    s.useEffect((function() {
        a.current = e
    }
    ), [e]),
    s.useEffect((function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(r));
            var t = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var i, s = 0, r = t.length; s < r; s++)
                        !i && s in t || (i || (i = Array.prototype.slice.call(t, 0, s)),
                        i[s] = t[s]);
                return e.concat(i || Array.prototype.slice.call(t))
            }([e.lockRef.current], (e.shards || []).map(rn), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(r))
            }
            )),
            function() {
                document.body.classList.remove("block-interactivity-".concat(r)),
                t.forEach((function(e) {
                    return e.classList.remove("allow-interactivity-".concat(r))
                }
                ))
            }
        }
    }
    ), [e.inert, e.lockRef.current, e.shards]);
    var l = s.useCallback((function(e, t) {
        if ("touches"in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
            return !a.current.allowPinchZoom;
        var s, r = nn(e), o = n.current, l = "deltaX"in e ? e.deltaX : o[0] - r[0], c = "deltaY"in e ? e.deltaY : o[1] - r[1], u = e.target, d = Math.abs(l) > Math.abs(c) ? "h" : "v";
        if ("touches"in e && "h" === d && "range" === u.type)
            return !1;
        var h = Jt(d, u);
        if (!h)
            return !0;
        if (h ? s = d : (s = "v" === d ? "h" : "v",
        h = Jt(d, u)),
        !h)
            return !1;
        if (!i.current && "changedTouches"in e && (l || c) && (i.current = s),
        !s)
            return !0;
        var p = i.current || s;
        return function(e, t, n, i, s) {
            var r = function(e, t) {
                return "h" === e && "rtl" === t ? -1 : 1
            }(e, window.getComputedStyle(t).direction)
              , o = r * i
              , a = n.target
              , l = t.contains(a)
              , c = !1
              , u = o > 0
              , d = 0
              , h = 0;
            do {
                var p = tn(e, a)
                  , m = p[0]
                  , f = p[1] - p[2] - r * m;
                (m || f) && en(e, a) && (d += f,
                h += m),
                a = a instanceof ShadowRoot ? a.host : a.parentNode
            } while (!l && a !== document.body || l && (t.contains(a) || t === a));
            return u && (Math.abs(d) < 1 || !s) ? c = !0 : u || !(Math.abs(h) < 1) && s || (c = !0),
            c
        }(p, t, e, "h" === p ? l : c, !0)
    }
    ), [])
      , c = s.useCallback((function(e) {
        var n = e;
        if (ln.length && ln[ln.length - 1] === o) {
            var i = "deltaY"in n ? sn(n) : nn(n)
              , s = t.current.filter((function(e) {
                return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta,
                s = i,
                t[0] === s[0] && t[1] === s[1]);
                var t, s
            }
            ))[0];
            if (s && s.should)
                n.cancelable && n.preventDefault();
            else if (!s) {
                var r = (a.current.shards || []).map(rn).filter(Boolean).filter((function(e) {
                    return e.contains(n.target)
                }
                ));
                (r.length > 0 ? l(n, r[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault()
            }
        }
    }
    ), [])
      , u = s.useCallback((function(e, n, i, s) {
        var r = {
            name: e,
            delta: n,
            target: i,
            should: s,
            shadowParent: cn(i)
        };
        t.current.push(r),
        setTimeout((function() {
            t.current = t.current.filter((function(e) {
                return e !== r
            }
            ))
        }
        ), 1)
    }
    ), [])
      , d = s.useCallback((function(e) {
        n.current = nn(e),
        i.current = void 0
    }
    ), [])
      , h = s.useCallback((function(t) {
        u(t.type, sn(t), t.target, l(t, e.lockRef.current))
    }
    ), [])
      , p = s.useCallback((function(t) {
        u(t.type, nn(t), t.target, l(t, e.lockRef.current))
    }
    ), []);
    s.useEffect((function() {
        return ln.push(o),
        e.setCallbacks({
            onScrollCapture: h,
            onWheelCapture: h,
            onTouchMoveCapture: p
        }),
        document.addEventListener("wheel", c, Kt),
        document.addEventListener("touchmove", c, Kt),
        document.addEventListener("touchstart", d, Kt),
        function() {
            ln = ln.filter((function(e) {
                return e !== o
            }
            )),
            document.removeEventListener("wheel", c, Kt),
            document.removeEventListener("touchmove", c, Kt),
            document.removeEventListener("touchstart", d, Kt)
        }
    }
    ), []);
    var m = e.removeScrollBar
      , f = e.inert;
    return s.createElement(s.Fragment, null, f ? s.createElement(o, {
        styles: on(r)
    }) : null, m ? s.createElement(Yt, {
        gapMode: e.gapMode
    }) : null)
}
,
It.useMedium(dn),
Dt);
var dn, hn = s.forwardRef((function(e, t) {
    return s.createElement(Vt, jt({}, e, {
        ref: t,
        sideCar: un
    }))
}
));
hn.classNames = Vt.classNames;
var pn = new WeakMap
  , mn = new WeakMap
  , fn = {}
  , gn = 0
  , vn = function(e) {
    return e && (e.host || vn(e.parentNode))
}
  , yn = function(e, t, n, i) {
    var s = function(e, t) {
        return t.map((function(t) {
            if (e.contains(t))
                return t;
            var n = vn(t);
            return n && e.contains(n) ? n : null
        }
        )).filter((function(e) {
            return Boolean(e)
        }
        ))
    }(t, Array.isArray(e) ? e : [e]);
    fn[n] || (fn[n] = new WeakMap);
    var r = fn[n]
      , o = []
      , a = new Set
      , l = new Set(s)
      , c = function(e) {
        e && !a.has(e) && (a.add(e),
        c(e.parentNode))
    };
    s.forEach(c);
    var u = function(e) {
        e && !l.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
            if (a.has(e))
                u(e);
            else
                try {
                    var t = e.getAttribute(i)
                      , s = null !== t && "false" !== t
                      , l = (pn.get(e) || 0) + 1
                      , c = (r.get(e) || 0) + 1;
                    pn.set(e, l),
                    r.set(e, c),
                    o.push(e),
                    1 === l && s && mn.set(e, !0),
                    1 === c && e.setAttribute(n, "true"),
                    s || e.setAttribute(i, "true")
                } catch (d) {}
        }
        ))
    };
    return u(t),
    a.clear(),
    gn++,
    function() {
        o.forEach((function(e) {
            var t = pn.get(e) - 1
              , s = r.get(e) - 1;
            pn.set(e, t),
            r.set(e, s),
            t || (mn.has(e) || e.removeAttribute(i),
            mn.delete(e)),
            s || e.removeAttribute(n)
        }
        )),
        --gn || (pn = new WeakMap,
        pn = new WeakMap,
        mn = new WeakMap,
        fn = {})
    }
}
  , xn = function(e, t, n) {
    void 0 === n && (n = "data-aria-hidden");
    var i = Array.from(Array.isArray(e) ? e : [e])
      , s = function(e) {
        return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
    }(e);
    return s ? (i.push.apply(i, Array.from(s.querySelectorAll("[aria-live]"))),
    yn(i, s, n, "aria-hidden")) : function() {
        return null
    }
}
  , bn = "Dialog"
  , [wn,Sn] = function(e, t=[]) {
    let n = [];
    const i = () => {
        const t = n.map((e => s.createContext(e)));
        return function(n) {
            const i = (null == n ? void 0 : n[e]) || t;
            return s.useMemo(( () => ({
                [`__scope${e}`]: {
                    ...n,
                    [e]: i
                }
            })), [n, i])
        }
    }
    ;
    return i.scopeName = e,
    [function(t, i) {
        const r = s.createContext(i)
          , o = n.length;
        n = [...n, i];
        const a = t => {
            var n;
            const {scope: i, children: a, ...l} = t
              , c = (null == (n = null == i ? void 0 : i[e]) ? void 0 : n[o]) || r
              , u = s.useMemo(( () => l), Object.values(l));
            return b.jsx(c.Provider, {
                value: u,
                children: a
            })
        }
        ;
        return a.displayName = t + "Provider",
        [a, function(n, a) {
            var l;
            const c = (null == (l = null == a ? void 0 : a[e]) ? void 0 : l[o]) || r
              , u = s.useContext(c);
            if (u)
                return u;
            if (void 0 !== i)
                return i;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
        }
        ]
    }
    , Ye(i, ...t)]
}(bn)
  , [Cn,En] = wn(bn)
  , jn = e => {
    const {__scopeDialog: t, children: n, open: i, defaultOpen: r, onOpenChange: o, modal: a=!0} = e
      , l = s.useRef(null)
      , c = s.useRef(null)
      , [u=!1,d] = et({
        prop: i,
        defaultProp: r,
        onChange: o
    });
    return b.jsx(Cn, {
        scope: t,
        triggerRef: l,
        contentRef: c,
        contentId: Qe(),
        titleId: Qe(),
        descriptionId: Qe(),
        open: u,
        onOpenChange: d,
        onOpenToggle: s.useCallback(( () => d((e => !e))), [d]),
        modal: a,
        children: n
    })
}
;
jn.displayName = bn;
var Tn = "DialogTrigger"
  , kn = s.forwardRef(( (e, t) => {
    const {__scopeDialog: n, ...i} = e
      , s = En(Tn, n)
      , r = C(t, s.triggerRef);
    return b.jsx(tt.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": qn(s.open),
        ...i,
        ref: r,
        onClick: Ge(e.onClick, s.onOpenToggle)
    })
}
));
kn.displayName = Tn;
var Pn = "DialogPortal"
  , [Rn,Mn] = wn(Pn, {
    forceMount: void 0
})
  , Nn = e => {
    const {__scopeDialog: t, forceMount: n, children: i, container: r} = e
      , o = En(Pn, t);
    return b.jsx(Rn, {
        scope: t,
        forceMount: n,
        children: s.Children.map(i, (e => b.jsx(wt, {
            present: n || o.open,
            children: b.jsx(bt, {
                asChild: !0,
                container: r,
                children: e
            })
        })))
    })
}
;
Nn.displayName = Pn;
var An = "DialogOverlay"
  , Ln = s.forwardRef(( (e, t) => {
    const n = Mn(An, e.__scopeDialog)
      , {forceMount: i=n.forceMount, ...s} = e
      , r = En(An, e.__scopeDialog);
    return r.modal ? b.jsx(wt, {
        present: i || r.open,
        children: b.jsx(Dn, {
            ...s,
            ref: t
        })
    }) : null
}
));
Ln.displayName = An;
var Dn = s.forwardRef(( (e, t) => {
    const {__scopeDialog: n, ...i} = e
      , s = En(An, n);
    return b.jsx(hn, {
        as: E,
        allowPinchZoom: !0,
        shards: [s.contentRef],
        children: b.jsx(tt.div, {
            "data-state": qn(s.open),
            ...i,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...i.style
            }
        })
    })
}
))
  , In = "DialogContent"
  , On = s.forwardRef(( (e, t) => {
    const n = Mn(In, e.__scopeDialog)
      , {forceMount: i=n.forceMount, ...s} = e
      , r = En(In, e.__scopeDialog);
    return b.jsx(wt, {
        present: i || r.open,
        children: r.modal ? b.jsx(Vn, {
            ...s,
            ref: t
        }) : b.jsx(Fn, {
            ...s,
            ref: t
        })
    })
}
));
On.displayName = In;
var Vn = s.forwardRef(( (e, t) => {
    const n = En(In, e.__scopeDialog)
      , i = s.useRef(null)
      , r = C(t, n.contentRef, i);
    return s.useEffect(( () => {
        const e = i.current;
        if (e)
            return xn(e)
    }
    ), []),
    b.jsx(zn, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ge(e.onCloseAutoFocus, (e => {
            var t;
            e.preventDefault(),
            null == (t = n.triggerRef.current) || t.focus()
        }
        )),
        onPointerDownOutside: Ge(e.onPointerDownOutside, (e => {
            const t = e.detail.originalEvent
              , n = 0 === t.button && !0 === t.ctrlKey;
            (2 === t.button || n) && e.preventDefault()
        }
        )),
        onFocusOutside: Ge(e.onFocusOutside, (e => e.preventDefault()))
    })
}
))
  , Fn = s.forwardRef(( (e, t) => {
    const n = En(In, e.__scopeDialog)
      , i = s.useRef(!1)
      , r = s.useRef(!1);
    return b.jsx(zn, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: t => {
            var s, o;
            null == (s = e.onCloseAutoFocus) || s.call(e, t),
            t.defaultPrevented || (i.current || null == (o = n.triggerRef.current) || o.focus(),
            t.preventDefault()),
            i.current = !1,
            r.current = !1
        }
        ,
        onInteractOutside: t => {
            var s, o;
            null == (s = e.onInteractOutside) || s.call(e, t),
            t.defaultPrevented || (i.current = !0,
            "pointerdown" === t.detail.originalEvent.type && (r.current = !0));
            const a = t.target;
            (null == (o = n.triggerRef.current) ? void 0 : o.contains(a)) && t.preventDefault(),
            "focusin" === t.detail.originalEvent.type && r.current && t.preventDefault()
        }
    })
}
))
  , zn = s.forwardRef(( (e, t) => {
    const {__scopeDialog: n, trapFocus: i, onOpenAutoFocus: r, onCloseAutoFocus: o, ...a} = e
      , l = En(In, n)
      , c = s.useRef(null)
      , u = C(t, c);
    return s.useEffect(( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Et()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Et()),
        Ct++,
        () => {
            1 === Ct && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())),
            Ct--
        }
    }
    ), []),
    b.jsxs(b.Fragment, {
        children: [b.jsx(pt, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: r,
            onUnmountAutoFocus: o,
            children: b.jsx(at, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": qn(l.open),
                ...a,
                ref: u,
                onDismiss: () => l.onOpenChange(!1)
            })
        }), b.jsxs(b.Fragment, {
            children: [b.jsx(Xn, {
                titleId: l.titleId
            }), b.jsx(Kn, {
                contentRef: c,
                descriptionId: l.descriptionId
            })]
        })]
    })
}
))
  , Bn = "DialogTitle"
  , _n = s.forwardRef(( (e, t) => {
    const {__scopeDialog: n, ...i} = e
      , s = En(Bn, n);
    return b.jsx(tt.h2, {
        id: s.titleId,
        ...i,
        ref: t
    })
}
));
_n.displayName = Bn;
var Wn = "DialogDescription"
  , Hn = s.forwardRef(( (e, t) => {
    const {__scopeDialog: n, ...i} = e
      , s = En(Wn, n);
    return b.jsx(tt.p, {
        id: s.descriptionId,
        ...i,
        ref: t
    })
}
));
Hn.displayName = Wn;
var $n = "DialogClose"
  , Un = s.forwardRef(( (e, t) => {
    const {__scopeDialog: n, ...i} = e
      , s = En($n, n);
    return b.jsx(tt.button, {
        type: "button",
        ...i,
        ref: t,
        onClick: Ge(e.onClick, ( () => s.onOpenChange(!1)))
    })
}
));
function qn(e) {
    return e ? "open" : "closed"
}
Un.displayName = $n;
var Gn = "DialogTitleWarning"
  , [Yn,Zn] = function(e, t) {
    const n = s.createContext(t)
      , i = e => {
        const {children: t, ...i} = e
          , r = s.useMemo(( () => i), Object.values(i));
        return b.jsx(n.Provider, {
            value: r,
            children: t
        })
    }
    ;
    return i.displayName = e + "Provider",
    [i, function(i) {
        const r = s.useContext(n);
        if (r)
            return r;
        if (void 0 !== t)
            return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    ]
}(Gn, {
    contentName: In,
    titleName: Bn,
    docsSlug: "dialog"
})
  , Xn = ({titleId: e}) => {
    const t = Zn(Gn)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return s.useEffect(( () => {
        if (e) {
            document.getElementById(e)
        }
    }
    ), [n, e]),
    null
}
  , Kn = ({contentRef: e, descriptionId: t}) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zn("DialogDescriptionWarning").contentName}}.`;
    return s.useEffect(( () => {
        var n;
        const i = null == (n = e.current) ? void 0 : n.getAttribute("aria-describedby");
        if (t && i) {
            document.getElementById(t)
        }
    }
    ), [n, e, t]),
    null
}
  , Qn = Ln
  , Jn = On
  , ei = _n
  , ti = Hn
  , ni = Un;
const ii = jn
  , si = kn
  , ri = Nn
  , oi = s.forwardRef(( ({className: e, ...t}, n) => b.jsx(Qn, {
    className: Te("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t,
    ref: n
})));
oi.displayName = Qn.displayName;
const ai = A("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
})
  , li = s.forwardRef(( ({side: e="right", className: t, children: n, ...i}, s) => b.jsxs(ri, {
    children: [b.jsx(oi, {}), b.jsxs(Jn, {
        ref: s,
        className: Te(ai({
            side: e
        }), t),
        ...i,
        children: [b.jsxs(ni, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [b.jsx(qe, {
                className: "h-4 w-4 text-[#C4FF00]"
            }), b.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        }), n]
    })]
})));
li.displayName = Jn.displayName;
const ci = ({className: e, ...t}) => b.jsx("div", {
    className: Te("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
});
ci.displayName = "SheetHeader";
const ui = s.forwardRef(( ({className: e, ...t}, n) => b.jsx(ei, {
    ref: n,
    className: Te("text-lg font-semibold text-foreground", e),
    ...t
})));
ui.displayName = ei.displayName;
function di() {
    return di = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    di.apply(this, arguments)
}
var hi, pi;
s.forwardRef(( ({className: e, ...t}, n) => b.jsx(ti, {
    ref: n,
    className: Te("text-sm text-muted-foreground", e),
    ...t
}))).displayName = ti.displayName,
(pi = hi || (hi = {})).Pop = "POP",
pi.Push = "PUSH",
pi.Replace = "REPLACE";
const mi = "popstate";
function fi(e) {
    return void 0 === e && (e = {}),
    function(e, t, n, i) {
        void 0 === i && (i = {});
        let {window: s=document.defaultView, v5Compat: r=!1} = i
          , o = s.history
          , a = hi.Pop
          , l = null
          , c = u();
        null == c && (c = 0,
        o.replaceState(di({}, o.state, {
            idx: c
        }), ""));
        function u() {
            return (o.state || {
                idx: null
            }).idx
        }
        function d() {
            a = hi.Pop;
            let e = u()
              , t = null == e ? null : e - c;
            c = e,
            l && l({
                action: a,
                location: f.location,
                delta: t
            })
        }
        function h(e, t) {
            a = hi.Push;
            let n = xi(f.location, e, t);
            c = u() + 1;
            let i = yi(n, c)
              , d = f.createHref(n);
            try {
                o.pushState(i, "", d)
            } catch (h) {
                if (h instanceof DOMException && "DataCloneError" === h.name)
                    throw h;
                s.location.assign(d)
            }
            r && l && l({
                action: a,
                location: f.location,
                delta: 1
            })
        }
        function p(e, t) {
            a = hi.Replace;
            let n = xi(f.location, e, t);
            c = u();
            let i = yi(n, c)
              , s = f.createHref(n);
            o.replaceState(i, "", s),
            r && l && l({
                action: a,
                location: f.location,
                delta: 0
            })
        }
        function m(e) {
            let t = "null" !== s.location.origin ? s.location.origin : s.location.href
              , n = "string" == typeof e ? e : bi(e);
            return n = n.replace(/ $/, "%20"),
            gi(t, "No window.location.(origin|href) available to create URL for href: " + n),
            new URL(n,t)
        }
        let f = {
            get action() {
                return a
            },
            get location() {
                return e(s, o)
            },
            listen(e) {
                if (l)
                    throw new Error("A history only accepts one active listener");
                return s.addEventListener(mi, d),
                l = e,
                () => {
                    s.removeEventListener(mi, d),
                    l = null
                }
            },
            createHref: e => t(s, e),
            createURL: m,
            encodeLocation(e) {
                let t = m(e);
                return {
                    pathname: t.pathname,
                    search: t.search,
                    hash: t.hash
                }
            },
            push: h,
            replace: p,
            go: e => o.go(e)
        };
        return f
    }((function(e, t) {
        let {pathname: n, search: i, hash: s} = e.location;
        return xi("", {
            pathname: n,
            search: i,
            hash: s
        }, t.state && t.state.usr || null, t.state && t.state.key || "default")
    }
    ), (function(e, t) {
        return "string" == typeof t ? t : bi(t)
    }
    ), 0, e)
}
function gi(e, t) {
    if (!1 === e || null == e)
        throw new Error(t)
}
function vi(e, t) {
    if (!e)
        try {
            throw new Error(t)
        } catch (n) {}
}
function yi(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function xi(e, t, n, i) {
    return void 0 === n && (n = null),
    di({
        pathname: "string" == typeof e ? e : e.pathname,
        search: "",
        hash: ""
    }, "string" == typeof t ? wi(t) : t, {
        state: n,
        key: t && t.key || i || Math.random().toString(36).substr(2, 8)
    })
}
function bi(e) {
    let {pathname: t="/", search: n="", hash: i=""} = e;
    return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
    i && "#" !== i && (t += "#" === i.charAt(0) ? i : "#" + i),
    t
}
function wi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let i = e.indexOf("?");
        i >= 0 && (t.search = e.substr(i),
        e = e.substr(0, i)),
        e && (t.pathname = e)
    }
    return t
}
var Si, Ci;
function Ei(e, t, n) {
    return void 0 === n && (n = "/"),
    function(e, t, n, i) {
        let s = "string" == typeof t ? wi(t) : t
          , r = Fi(s.pathname || "/", n);
        if (null == r)
            return null;
        let o = ji(e);
        !function(e) {
            e.sort(( (e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                let n = e.length === t.length && e.slice(0, -1).every(( (e, n) => e === t[n]));
                return n ? e[e.length - 1] - t[t.length - 1] : 0
            }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
        }(o);
        let a = null;
        for (let l = 0; null == a && l < o.length; ++l) {
            let e = Vi(r);
            a = Ii(o[l], e, i)
        }
        return a
    }(e, t, n, !1)
}
function ji(e, t, n, i) {
    void 0 === t && (t = []),
    void 0 === n && (n = []),
    void 0 === i && (i = "");
    let s = (e, s, r) => {
        let o = {
            relativePath: void 0 === r ? e.path || "" : r,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: s,
            route: e
        };
        o.relativePath.startsWith("/") && (gi(o.relativePath.startsWith(i), 'Absolute route path "' + o.relativePath + '" nested under path "' + i + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),
        o.relativePath = o.relativePath.slice(i.length));
        let a = Wi([i, o.relativePath])
          , l = n.concat(o);
        e.children && e.children.length > 0 && (gi(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + a + '".'),
        ji(e.children, t, l, a)),
        (null != e.path || e.index) && t.push({
            path: a,
            score: Di(a, e.index),
            routesMeta: l
        })
    }
    ;
    return e.forEach(( (e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
            for (let i of Ti(e.path))
                s(e, t, i);
        else
            s(e, t)
    }
    )),
    t
}
function Ti(e) {
    let t = e.split("/");
    if (0 === t.length)
        return [];
    let[n,...i] = t
      , s = n.endsWith("?")
      , r = n.replace(/\?$/, "");
    if (0 === i.length)
        return s ? [r, ""] : [r];
    let o = Ti(i.join("/"))
      , a = [];
    return a.push(...o.map((e => "" === e ? r : [r, e].join("/")))),
    s && a.push(...o),
    a.map((t => e.startsWith("/") && "" === t ? "/" : t))
}
(Ci = Si || (Si = {})).data = "data",
Ci.deferred = "deferred",
Ci.redirect = "redirect",
Ci.error = "error";
const ki = /^:[\w-]+$/
  , Pi = 3
  , Ri = 2
  , Mi = 1
  , Ni = 10
  , Ai = -2
  , Li = e => "*" === e;
function Di(e, t) {
    let n = e.split("/")
      , i = n.length;
    return n.some(Li) && (i += Ai),
    t && (i += Ri),
    n.filter((e => !Li(e))).reduce(( (e, t) => e + (ki.test(t) ? Pi : "" === t ? Mi : Ni)), i)
}
function Ii(e, t, n) {
    let {routesMeta: i} = e
      , s = {}
      , r = "/"
      , o = [];
    for (let a = 0; a < i.length; ++a) {
        let e = i[a]
          , l = a === i.length - 1
          , c = "/" === r ? t : t.slice(r.length) || "/"
          , u = Oi({
            path: e.relativePath,
            caseSensitive: e.caseSensitive,
            end: l
        }, c)
          , d = e.route;
        if (!u && l && n && !i[i.length - 1].route.index && (u = Oi({
            path: e.relativePath,
            caseSensitive: e.caseSensitive,
            end: !1
        }, c)),
        !u)
            return null;
        Object.assign(s, u.params),
        o.push({
            params: s,
            pathname: Wi([r, u.pathname]),
            pathnameBase: Hi(Wi([r, u.pathnameBase])),
            route: d
        }),
        "/" !== u.pathnameBase && (r = Wi([r, u.pathnameBase]))
    }
    return o
}
function Oi(e, t) {
    "string" == typeof e && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,i] = function(e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        vi("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
        let i = []
          , s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ( (e, t, n) => (i.push({
            paramName: t,
            isOptional: null != n
        }),
        n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
        e.endsWith("*") ? (i.push({
            paramName: "*"
        }),
        s += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : "" !== e && "/" !== e && (s += "(?:(?=\\/|$))");
        let r = new RegExp(s,t ? void 0 : "i");
        return [r, i]
    }(e.path, e.caseSensitive, e.end)
      , s = t.match(n);
    if (!s)
        return null;
    let r = s[0]
      , o = r.replace(/(.)\/+$/, "$1")
      , a = s.slice(1);
    return {
        params: i.reduce(( (e, t, n) => {
            let {paramName: i, isOptional: s} = t;
            if ("*" === i) {
                let e = a[n] || "";
                o = r.slice(0, r.length - e.length).replace(/(.)\/+$/, "$1")
            }
            const l = a[n];
            return e[i] = s && !l ? void 0 : (l || "").replace(/%2F/g, "/"),
            e
        }
        ), {}),
        pathname: r,
        pathnameBase: o,
        pattern: e
    }
}
function Vi(e) {
    try {
        return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
    } catch (t) {
        return vi(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."),
        e
    }
}
function Fi(e, t) {
    if ("/" === t)
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , i = e.charAt(n);
    return i && "/" !== i ? null : e.slice(n) || "/"
}
function zi(e, t, n, i) {
    return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(i) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
}
function Bi(e, t) {
    let n = function(e) {
        return e.filter(( (e, t) => 0 === t || e.route.path && e.route.path.length > 0))
    }(e);
    return t ? n.map(( (e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e => e.pathnameBase))
}
function _i(e, t, n, i) {
    let s;
    void 0 === i && (i = !1),
    "string" == typeof e ? s = wi(e) : (s = di({}, e),
    gi(!s.pathname || !s.pathname.includes("?"), zi("?", "pathname", "search", s)),
    gi(!s.pathname || !s.pathname.includes("#"), zi("#", "pathname", "hash", s)),
    gi(!s.search || !s.search.includes("#"), zi("#", "search", "hash", s)));
    let r, o = "" === e || "" === s.pathname, a = o ? "/" : s.pathname;
    if (null == a)
        r = n;
    else {
        let e = t.length - 1;
        if (!i && a.startsWith("..")) {
            let t = a.split("/");
            for (; ".." === t[0]; )
                t.shift(),
                e -= 1;
            s.pathname = t.join("/")
        }
        r = e >= 0 ? t[e] : "/"
    }
    let l = function(e, t) {
        void 0 === t && (t = "/");
        let {pathname: n, search: i="", hash: s=""} = "string" == typeof e ? wi(e) : e
          , r = n ? n.startsWith("/") ? n : function(e, t) {
            let n = t.replace(/\/+$/, "").split("/");
            return e.split("/").forEach((e => {
                ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
            }
            )),
            n.length > 1 ? n.join("/") : "/"
        }(n, t) : t;
        return {
            pathname: r,
            search: $i(i),
            hash: Ui(s)
        }
    }(s, r)
      , c = a && "/" !== a && a.endsWith("/")
      , u = (o || "." === a) && n.endsWith("/");
    return l.pathname.endsWith("/") || !c && !u || (l.pathname += "/"),
    l
}
const Wi = e => e.join("/").replace(/\/\/+/g, "/")
  , Hi = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , $i = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
  , Ui = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
const qi = ["post", "put", "patch", "delete"];
new Set(qi);
const Gi = ["get", ...qi];
function Yi() {
    return Yi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    Yi.apply(this, arguments)
}
new Set(Gi);
const Zi = s.createContext(null)
  , Xi = s.createContext(null)
  , Ki = s.createContext(null)
  , Qi = s.createContext(null)
  , Ji = s.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , es = s.createContext(null);
function ts() {
    return null != s.useContext(Qi)
}
function ns() {
    return ts() || gi(!1),
    s.useContext(Qi).location
}
function is(e) {
    s.useContext(Ki).static || s.useLayoutEffect(e)
}
function ss() {
    let {isDataRoute: e} = s.useContext(Ji);
    return e ? function() {
        let {router: e} = function() {
            let e = s.useContext(Zi);
            return e || gi(!1),
            e
        }(hs.UseNavigateStable)
          , t = ms(ps.UseNavigateStable)
          , n = s.useRef(!1);
        is(( () => {
            n.current = !0
        }
        ));
        let i = s.useCallback((function(i, s) {
            void 0 === s && (s = {}),
            n.current && ("number" == typeof i ? e.navigate(i) : e.navigate(i, Yi({
                fromRouteId: t
            }, s)))
        }
        ), [e, t]);
        return i
    }() : function() {
        ts() || gi(!1);
        let e = s.useContext(Zi)
          , {basename: t, future: n, navigator: i} = s.useContext(Ki)
          , {matches: r} = s.useContext(Ji)
          , {pathname: o} = ns()
          , a = JSON.stringify(Bi(r, n.v7_relativeSplatPath))
          , l = s.useRef(!1);
        is(( () => {
            l.current = !0
        }
        ));
        let c = s.useCallback((function(n, s) {
            if (void 0 === s && (s = {}),
            !l.current)
                return;
            if ("number" == typeof n)
                return void i.go(n);
            let r = _i(n, JSON.parse(a), o, "path" === s.relative);
            null == e && "/" !== t && (r.pathname = "/" === r.pathname ? t : Wi([t, r.pathname])),
            (s.replace ? i.replace : i.push)(r, s.state, s)
        }
        ), [t, i, a, o, e]);
        return c
    }()
}
function rs() {
    let {matches: e} = s.useContext(Ji)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function os(e, t) {
    let {relative: n} = void 0 === t ? {} : t
      , {future: i} = s.useContext(Ki)
      , {matches: r} = s.useContext(Ji)
      , {pathname: o} = ns()
      , a = JSON.stringify(Bi(r, i.v7_relativeSplatPath));
    return s.useMemo(( () => _i(e, JSON.parse(a), o, "path" === n)), [e, a, o, n])
}
function as(e, t) {
    return function(e, t, n, i) {
        ts() || gi(!1);
        let {navigator: r} = s.useContext(Ki)
          , {matches: o} = s.useContext(Ji)
          , a = o[o.length - 1]
          , l = a ? a.params : {};
        !a || a.pathname;
        let c = a ? a.pathnameBase : "/";
        a && a.route;
        let u, d = ns();
        if (t) {
            var h;
            let e = "string" == typeof t ? wi(t) : t;
            "/" === c || (null == (h = e.pathname) ? void 0 : h.startsWith(c)) || gi(!1),
            u = e
        } else
            u = d;
        let p = u.pathname || "/"
          , m = p;
        if ("/" !== c) {
            let e = c.replace(/^\//, "").split("/");
            m = "/" + p.replace(/^\//, "").split("/").slice(e.length).join("/")
        }
        let f = Ei(e, {
            pathname: m
        })
          , g = function(e, t, n, i) {
            var r;
            void 0 === t && (t = []);
            void 0 === n && (n = null);
            void 0 === i && (i = null);
            if (null == e) {
                var o;
                if (!n)
                    return null;
                if (n.errors)
                    e = n.matches;
                else {
                    if (!(null != (o = i) && o.v7_partialHydration && 0 === t.length && !n.initialized && n.matches.length > 0))
                        return null;
                    e = n.matches
                }
            }
            let a = e
              , l = null == (r = n) ? void 0 : r.errors;
            if (null != l) {
                let e = a.findIndex((e => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])));
                e >= 0 || gi(!1),
                a = a.slice(0, Math.min(a.length, e + 1))
            }
            let c = !1
              , u = -1;
            if (n && i && i.v7_partialHydration)
                for (let s = 0; s < a.length; s++) {
                    let e = a[s];
                    if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (u = s),
                    e.route.id) {
                        let {loaderData: t, errors: i} = n
                          , s = e.route.loader && void 0 === t[e.route.id] && (!i || void 0 === i[e.route.id]);
                        if (e.route.lazy || s) {
                            c = !0,
                            a = u >= 0 ? a.slice(0, u + 1) : [a[0]];
                            break
                        }
                    }
                }
            return a.reduceRight(( (e, i, r) => {
                let o, d = !1, h = null, p = null;
                n && (o = l && i.route.id ? l[i.route.id] : void 0,
                h = i.route.errorElement || cs,
                c && (u < 0 && 0 === r ? (d = !0,
                p = null) : u === r && (d = !0,
                p = i.route.hydrateFallbackElement || null)));
                let m = t.concat(a.slice(0, r + 1))
                  , f = () => {
                    let t;
                    return t = o ? h : d ? p : i.route.Component ? s.createElement(i.route.Component, null) : i.route.element ? i.route.element : e,
                    s.createElement(ds, {
                        match: i,
                        routeContext: {
                            outlet: e,
                            matches: m,
                            isDataRoute: null != n
                        },
                        children: t
                    })
                }
                ;
                return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === r) ? s.createElement(us, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: h,
                    error: o,
                    children: f(),
                    routeContext: {
                        outlet: null,
                        matches: m,
                        isDataRoute: !0
                    }
                }) : f()
            }
            ), null)
        }(f && f.map((e => Object.assign({}, e, {
            params: Object.assign({}, l, e.params),
            pathname: Wi([c, r.encodeLocation ? r.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: "/" === e.pathnameBase ? c : Wi([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
        }))), o, n, i);
        if (t && g)
            return s.createElement(Qi.Provider, {
                value: {
                    location: Yi({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, u),
                    navigationType: hi.Pop
                }
            }, g);
        return g
    }(e, t)
}
function ls() {
    let e = function() {
        var e;
        let t = s.useContext(es)
          , n = function() {
            let e = s.useContext(Xi);
            return e || gi(!1),
            e
        }(ps.UseRouteError)
          , i = ms(ps.UseRouteError);
        if (void 0 !== t)
            return t;
        return null == (e = n.errors) ? void 0 : e[i]
    }()
      , t = function(e) {
        return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data"in e
    }(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return s.createElement(s.Fragment, null, s.createElement("h2", null, "Unexpected Application Error!"), s.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? s.createElement("pre", {
        style: i
    }, n) : null, null)
}
const cs = s.createElement(ls, null);
class us extends s.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {}
    render() {
        return void 0 !== this.state.error ? s.createElement(Ji.Provider, {
            value: this.props.routeContext
        }, s.createElement(es.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function ds(e) {
    let {routeContext: t, match: n, children: i} = e
      , r = s.useContext(Zi);
    return r && r.static && r.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    s.createElement(Ji.Provider, {
        value: t
    }, i)
}
var hs = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(hs || {})
  , ps = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(ps || {});
function ms(e) {
    let t = function() {
        let e = s.useContext(Ji);
        return e || gi(!1),
        e
    }()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || gi(!1),
    n.route.id
}
const fs = {};
const gs = (e, t, n) => {
    var i;
    fs[i = "⚠️ React Router Future Flag Warning: " + t + ". You can use the `" + e + "` future flag to opt-in early. For more information, see " + n + "."] || (fs[i] = !0)
}
;
function vs(e) {
    gi(!1)
}
function ys(e) {
    let {basename: t="/", children: n=null, location: i, navigationType: r=hi.Pop, navigator: o, static: a=!1, future: l} = e;
    ts() && gi(!1);
    let c = t.replace(/^\/*/, "/")
      , u = s.useMemo(( () => ({
        basename: c,
        navigator: o,
        static: a,
        future: Yi({
            v7_relativeSplatPath: !1
        }, l)
    })), [c, l, o, a]);
    "string" == typeof i && (i = wi(i));
    let {pathname: d="/", search: h="", hash: p="", state: m=null, key: f="default"} = i
      , g = s.useMemo(( () => {
        let e = Fi(d, c);
        return null == e ? null : {
            location: {
                pathname: e,
                search: h,
                hash: p,
                state: m,
                key: f
            },
            navigationType: r
        }
    }
    ), [c, d, h, p, m, f, r]);
    return null == g ? null : s.createElement(Ki.Provider, {
        value: u
    }, s.createElement(Qi.Provider, {
        children: n,
        value: g
    }))
}
function xs(e) {
    let {children: t, location: n} = e;
    return as(bs(t), n)
}
function bs(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return s.Children.forEach(e, ( (e, i) => {
        if (!s.isValidElement(e))
            return;
        let r = [...t, i];
        if (e.type === s.Fragment)
            return void n.push.apply(n, bs(e.props.children, r));
        e.type !== vs && gi(!1),
        e.props.index && e.props.children && gi(!1);
        let o = {
            id: e.props.id || r.join("-"),
            caseSensitive: e.props.caseSensitive,
            element: e.props.element,
            Component: e.props.Component,
            index: e.props.index,
            path: e.props.path,
            loader: e.props.loader,
            action: e.props.action,
            errorElement: e.props.errorElement,
            ErrorBoundary: e.props.ErrorBoundary,
            hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
            shouldRevalidate: e.props.shouldRevalidate,
            handle: e.props.handle,
            lazy: e.props.lazy
        };
        e.props.children && (o.children = bs(e.props.children, r)),
        n.push(o)
    }
    )),
    n
}
function ws() {
    return ws = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    ws.apply(this, arguments)
}
new Promise(( () => {}
));
const Ss = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
try {
    window.__reactRouterVersion = "6"
} catch (vf) {}
const Cs = o.startTransition;
function Es(e) {
    let {basename: t, children: n, future: i, window: r} = e
      , o = s.useRef();
    null == o.current && (o.current = fi({
        window: r,
        v5Compat: !0
    }));
    let a = o.current
      , [l,c] = s.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = i || {}
      , d = s.useCallback((e => {
        u && Cs ? Cs(( () => c(e))) : c(e)
    }
    ), [c, u]);
    return s.useLayoutEffect(( () => a.listen(d)), [a, d]),
    s.useEffect(( () => {
        return null != (e = i) && e.v7_startTransition || gs("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
        void (null != e && e.v7_relativeSplatPath || t || gs("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"));
        var e, t
    }
    ), [i]),
    s.createElement(ys, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: a,
        future: i
    })
}
const js = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement
  , Ts = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ks = s.forwardRef((function(e, t) {
    let n, {onClick: i, relative: r, reloadDocument: o, replace: a, state: l, target: c, to: u, preventScrollReset: d, viewTransition: h} = e, p = function(e, t) {
        if (null == e)
            return {};
        var n, i, s = {}, r = Object.keys(e);
        for (i = 0; i < r.length; i++)
            n = r[i],
            t.indexOf(n) >= 0 || (s[n] = e[n]);
        return s
    }(e, Ss), {basename: m} = s.useContext(Ki), f = !1;
    if ("string" == typeof u && Ts.test(u) && (n = u,
    js))
        try {
            let e = new URL(window.location.href)
              , t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u)
              , n = Fi(t.pathname, m);
            t.origin === e.origin && null != n ? u = n + t.search + t.hash : f = !0
        } catch (vf) {}
    let g = function(e, t) {
        let {relative: n} = void 0 === t ? {} : t;
        ts() || gi(!1);
        let {basename: i, navigator: r} = s.useContext(Ki)
          , {hash: o, pathname: a, search: l} = os(e, {
            relative: n
        })
          , c = a;
        return "/" !== i && (c = "/" === a ? i : Wi([i, a])),
        r.createHref({
            pathname: c,
            search: l,
            hash: o
        })
    }(u, {
        relative: r
    })
      , v = function(e, t) {
        let {target: n, replace: i, state: r, preventScrollReset: o, relative: a, viewTransition: l} = void 0 === t ? {} : t
          , c = ss()
          , u = ns()
          , d = os(e, {
            relative: a
        });
        return s.useCallback((t => {
            if (function(e, t) {
                return !(0 !== e.button || t && "_self" !== t || function(e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                }(e))
            }(t, n)) {
                t.preventDefault();
                let n = void 0 !== i ? i : bi(u) === bi(d);
                c(e, {
                    replace: n,
                    state: r,
                    preventScrollReset: o,
                    relative: a,
                    viewTransition: l
                })
            }
        }
        ), [u, c, d, i, r, n, e, o, a, l])
    }(u, {
        replace: a,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: r,
        viewTransition: h
    });
    return s.createElement("a", ws({}, p, {
        href: n || g,
        onClick: f || o ? i : function(e) {
            i && i(e),
            e.defaultPrevented || v(e)
        }
        ,
        ref: t,
        target: c
    }))
}
));
var Ps, Rs, Ms, Ns;
(Rs = Ps || (Ps = {})).UseScrollRestoration = "useScrollRestoration",
Rs.UseSubmit = "useSubmit",
Rs.UseSubmitFetcher = "useSubmitFetcher",
Rs.UseFetcher = "useFetcher",
Rs.useViewTransitionState = "useViewTransitionState",
(Ns = Ms || (Ms = {})).UseFetcher = "useFetcher",
Ns.UseFetchers = "useFetchers",
Ns.UseScrollRestoration = "useScrollRestoration";
const As = [{
    id: "01",
    name: "Home",
    href: "/"
}, {
    id: "02",
    name: "Projects",
    href: "/projects"
}, {
    id: "03",
    name: "Blogs",
    href: "/blogs"
}, {
    id: "04",
    name: "About",
    href: "/about"
}, {
    id: "06",
    name: "Contact",
    href: "/contact"
}];
function Ls({activeSection: e}) {
    const [t,n] = s.useState(!1)
      , [i,r] = s.useState(!1)
      , o = () => {
        new Audio("/src/assets/sfx/click.wav").play()
    }
    ;
    return s.useEffect(( () => {
        const e = () => {
            n(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", e),
        () => window.removeEventListener("scroll", e)
    }
    ), []),
    b.jsx("header", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 \n        " + (t ? "backdrop-blur-md" : "bg-transparent"),
        children: b.jsx("nav", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: b.jsxs("div", {
                className: "flex items-center justify-between py-4 rounded-lg",
                children: [b.jsxs("div", {
                    className: "flex items-center",
                    children: [b.jsx(ks, {
                        to: "/",
                        children: b.jsx("div", {
                            className: "flex-shrink-0 bg-[#C4FF00] rounded-full ",
                            children: b.jsx(Oe, {
                                size: 40,
                                className: "text-secondary text-gray-800"
                            })
                        })
                    }), b.jsx("div", {
                        className: "hidden md:block ml-10",
                        children: b.jsx("div", {
                            className: "flex items-baseline space-x-4",
                            children: As.map((t => b.jsx(ks, {
                                to: t.href,
                                children: b.jsx(Re, {
                                    variant: "ghost",
                                    className: "text-sm transition-all duration-300 font-medium "  + ("aboutus" === e ? "text-gray-900" : "projects" === e ? "text-[#C4FF00]" : "skills" === e ? "text-white" : "text-gray-900"),
                                    onClick: o,
                                    children: t.name
                                })
                            }, t.name)))
                        })
                    })]
                }), b.jsxs("div", {
                    className: "flex items-center",
                    children: [b.jsx(ks, {
                        to: "https://www.linkedin.com/in/ameer-hamza-81383025b/",
                        children: b.jsx(Re, {
                            variant: "ghost",
                            size: "icon",
                            className: "mr-2 bg-[#C4FF00] text-gray-800 transition-all duration-300" ,
                            children: b.jsx(Be, {
                                className: "h-5 w-5 text-gray-800"
                            })
                        })
                    }), b.jsxs(ii, {
                        open: i,
                        onOpenChange: r,
                        children: [b.jsx(si, {
                            asChild: !0,
                            children: b.jsx(Re, {
                                variant: "ghost",
                                size: "icon",
                                className: "md:hidden " + ("aboutus" === e ? "text-gray-900" : "projects" === e ? "bg-[#505050]" : "skills" === e ? "bg-white" : "bg-[#C4FF00]"),
                                children: b.jsx(We, {
                                    className: "h-5 w-5 text-gray-800"
                                })
                            })
                        }), b.jsxs(li, {
                            side: "right",
                            className: "w-full sm:w-[300px] bg-\[\#161719\] ",
                            children: [b.jsx(ci, {
                                className: "border-b border-[#C4FF00] pb-4",
                                children: b.jsx(ui, {
                                    className: "text-left text-[#C4FF00]",
                                    children: "Navigation"
                                })
                            }), b.jsx("nav", {
                                className: "flex flex-col space-y-4 mt-8 text-[#C4FF00]",
                                children: As.map((e => b.jsx(ks, {
                                    to: e.href,
                                    onClick: () => {
                                        r(!1),
                                        o()
                                    }
                                    ,
                                    children: b.jsxs("div", {
                                        className: "flex items-center space-x-4 px-2 py-2 rounded-md transition-colors  ",
                                        children: [b.jsx("span", {
                                            className: "text-sm text-[#C4FF00]",
                                            children: e.id
                                        }), b.jsx("span", {
                                            className: "text-base font-bold text-[#C4FF00]",
                                            children: e.name
                                        })]
                                    })
                                }, e.name)))
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
function Ds(e, t, n) {
    return Math.max(e, Math.min(t, n))
}
let Is = class {
    constructor() {
        this.isRunning = !1,
        this.value = 0,
        this.from = 0,
        this.to = 0,
        this.duration = 0,
        this.currentTime = 0
    }
    advance(e) {
        var t;
        if (!this.isRunning)
            return;
        let n = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            const t = Ds(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            const i = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * i
        } else
            this.lerp ? (this.value = (i = this.value,
            s = this.to,
            r = 60 * this.lerp,
            o = e,
            a = i,
            l = s,
            (1 - (c = 1 - Math.exp(-r * o))) * a + c * l),
            Math.round(this.value) === this.to && (this.value = this.to,
            n = !0)) : (this.value = this.to,
            n = !0);
        var i, s, r, o, a, l, c;
        n && this.stop(),
        null === (t = this.onUpdate) || void 0 === t || t.call(this, this.value, n)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {lerp: n, duration: i, easing: s, onStart: r, onUpdate: o}) {
        this.from = this.value = e,
        this.to = t,
        this.lerp = n,
        this.duration = i,
        this.easing = s,
        this.currentTime = 0,
        this.isRunning = !0,
        null == r || r(),
        this.onUpdate = o
    }
}
  , Os = class {
    constructor({wrapper: e, content: t, autoResize: n=!0, debounce: i=250}={}) {
        this.width = 0,
        this.height = 0,
        this.scrollWidth = 0,
        this.scrollHeight = 0,
        this.resize = () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        ,
        this.onWrapperResize = () => {
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        ,
        this.onContentResize = () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight,
            this.scrollWidth = this.wrapper.scrollWidth)
        }
        ,
        this.wrapper = e,
        this.content = t,
        n && (this.debouncedResize = function(e, t) {
            let n;
            return function() {
                let i = arguments
                  , s = this;
                clearTimeout(n),
                n = setTimeout((function() {
                    e.apply(s, i)
                }
                ), t)
            }
        }(this.resize, i),
        this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        var e, t;
        null === (e = this.wrapperResizeObserver) || void 0 === e || e.disconnect(),
        null === (t = this.contentResizeObserver) || void 0 === t || t.disconnect(),
        window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
  , Vs = class {
    constructor() {
        this.events = {}
    }
    emit(e, ...t) {
        let n = this.events[e] || [];
        for (let i = 0, s = n.length; i < s; i++)
            n[i](...t)
    }
    on(e, t) {
        var n;
        return (null === (n = this.events[e]) || void 0 === n ? void 0 : n.push(t)) || (this.events[e] = [t]),
        () => {
            var n;
            this.events[e] = null === (n = this.events[e]) || void 0 === n ? void 0 : n.filter((e => t !== e))
        }
    }
    off(e, t) {
        var n;
        this.events[e] = null === (n = this.events[e]) || void 0 === n ? void 0 : n.filter((e => t !== e))
    }
    destroy() {
        this.events = {}
    }
}
;
const Fs = 100 / 6;
let zs = class {
    constructor(e, {wheelMultiplier: t=1, touchMultiplier: n=1}) {
        this.lastDelta = {
            x: 0,
            y: 0
        },
        this.windowWidth = 0,
        this.windowHeight = 0,
        this.onTouchStart = e => {
            const {clientX: t, clientY: n} = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        }
        ,
        this.onTouchMove = e => {
            var t, n, i, s;
            const {clientX: r, clientY: o} = e.targetTouches ? e.targetTouches[0] : e
              , a = -(r - (null !== (n = null === (t = this.touchStart) || void 0 === t ? void 0 : t.x) && void 0 !== n ? n : 0)) * this.touchMultiplier
              , l = -(o - (null !== (s = null === (i = this.touchStart) || void 0 === i ? void 0 : i.y) && void 0 !== s ? s : 0)) * this.touchMultiplier;
            this.touchStart.x = r,
            this.touchStart.y = o,
            this.lastDelta = {
                x: a,
                y: l
            },
            this.emitter.emit("scroll", {
                deltaX: a,
                deltaY: l,
                event: e
            })
        }
        ,
        this.onTouchEnd = e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        }
        ,
        this.onWheel = e => {
            let {deltaX: t, deltaY: n, deltaMode: i} = e;
            t *= 1 === i ? Fs : 2 === i ? this.windowWidth : 1,
            n *= 1 === i ? Fs : 2 === i ? this.windowHeight : 1,
            t *= this.wheelMultiplier,
            n *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: n,
                event: e
            })
        }
        ,
        this.onWindowResize = () => {
            this.windowWidth = window.innerWidth,
            this.windowHeight = window.innerHeight
        }
        ,
        this.element = e,
        this.wheelMultiplier = t,
        this.touchMultiplier = n,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new Vs,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel),
        this.element.removeEventListener("touchstart", this.onTouchStart),
        this.element.removeEventListener("touchmove", this.onTouchMove),
        this.element.removeEventListener("touchend", this.onTouchEnd)
    }
}
  , Bs = class {
    constructor({wrapper: e=window, content: t=document.documentElement, wheelEventsTarget: n=e, eventsTarget: i=n, smoothWheel: s=!0, syncTouch: r=!1, syncTouchLerp: o=.075, touchInertiaMultiplier: a=35, duration: l, easing: c=e => Math.min(1, 1.001 - Math.pow(2, -10 * e)), lerp: u=.1, infinite: d=!1, orientation: h="vertical", gestureOrientation: p="vertical", touchMultiplier: m=1, wheelMultiplier: f=1, autoResize: g=!0, prevent: v, virtualScroll: y, __experimental__naiveDimensions: x=!1}={}) {
        this.__isScrolling = !1,
        this.__isStopped = !1,
        this.__isLocked = !1,
        this.userData = {},
        this.lastVelocity = 0,
        this.velocity = 0,
        this.direction = 0,
        this.onPointerDown = e => {
            1 === e.button && this.reset()
        }
        ,
        this.onVirtualScroll = e => {
            if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e))
                return;
            const {deltaX: t, deltaY: n, event: i} = e;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: n,
                event: i
            }),
            i.ctrlKey)
                return;
            const s = i.type.includes("touch")
              , r = i.type.includes("wheel");
            if (this.isTouching = "touchstart" === i.type || "touchmove" === i.type,
            this.options.syncTouch && s && "touchstart" === i.type && !this.isStopped && !this.isLocked)
                return void this.reset();
            const o = 0 === t && 0 === n
              , a = "vertical" === this.options.gestureOrientation && 0 === n || "horizontal" === this.options.gestureOrientation && 0 === t;
            if (o || a)
                return;
            let l = i.composedPath();
            l = l.slice(0, l.indexOf(this.rootElement));
            const c = this.options.prevent;
            if (l.find((e => {
                var t, n, i, o, a;
                return e instanceof Element && ("function" == typeof c && (null == c ? void 0 : c(e)) || (null === (t = e.hasAttribute) || void 0 === t ? void 0 : t.call(e, "data-lenis-prevent")) || s && (null === (n = e.hasAttribute) || void 0 === n ? void 0 : n.call(e, "data-lenis-prevent-touch")) || r && (null === (i = e.hasAttribute) || void 0 === i ? void 0 : i.call(e, "data-lenis-prevent-wheel")) || (null === (o = e.classList) || void 0 === o ? void 0 : o.contains("lenis")) && !(null === (a = e.classList) || void 0 === a ? void 0 : a.contains("lenis-stopped")))
            }
            )))
                return;
            if (this.isStopped || this.isLocked)
                return void i.preventDefault();
            if (!(this.options.syncTouch && s || this.options.smoothWheel && r))
                return this.isScrolling = "native",
                void this.animate.stop();
            i.preventDefault();
            let u = n;
            "both" === this.options.gestureOrientation ? u = Math.abs(n) > Math.abs(t) ? n : t : "horizontal" === this.options.gestureOrientation && (u = t);
            const d = s && this.options.syncTouch
              , h = s && "touchend" === i.type && Math.abs(u) > 5;
            h && (u = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + u, Object.assign({
                programmatic: !1
            }, d ? {
                lerp: h ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }
        ,
        this.onNativeScroll = () => {
            if (clearTimeout(this.__resetVelocityTimeout),
            delete this.__resetVelocityTimeout,
            this.__preventNextNativeScrollEvent)
                delete this.__preventNextNativeScrollEvent;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                const e = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity,
                this.velocity = this.animatedScroll - e,
                this.direction = Math.sign(this.animatedScroll - e),
                this.isScrolling = "native",
                this.emit(),
                0 !== this.velocity && (this.__resetVelocityTimeout = setTimeout(( () => {
                    this.lastVelocity = this.velocity,
                    this.velocity = 0,
                    this.isScrolling = !1,
                    this.emit()
                }
                ), 400))
            }
        }
        ,
        window.lenisVersion = "1.1.9",
        e && e !== document.documentElement && e !== document.body || (e = window),
        this.options = {
            wrapper: e,
            content: t,
            wheelEventsTarget: n,
            eventsTarget: i,
            smoothWheel: s,
            syncTouch: r,
            syncTouchLerp: o,
            touchInertiaMultiplier: a,
            duration: l,
            easing: c,
            lerp: u,
            infinite: d,
            gestureOrientation: p,
            orientation: h,
            touchMultiplier: m,
            wheelMultiplier: f,
            autoResize: g,
            prevent: v,
            virtualScroll: y,
            __experimental__naiveDimensions: x
        },
        this.animate = new Is,
        this.emitter = new Vs,
        this.dimensions = new Os({
            wrapper: e,
            content: t,
            autoResize: g
        }),
        this.updateClassName(),
        this.userData = {},
        this.time = 0,
        this.velocity = this.lastVelocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll = new zs(i,{
            touchMultiplier: m,
            wheelMultiplier: f
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName()
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    off(e, t) {
        return this.emitter.off(e, t)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
        this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
        this.animate.stop(),
        this.reset())
    }
    raf(e) {
        const t = e - (this.time || e);
        this.time = e,
        this.animate.advance(.001 * t)
    }
    scrollTo(e, {offset: t=0, immediate: n=!1, lock: i=!1, duration: s=this.options.duration, easing: r=this.options.easing, lerp: o=this.options.lerp, onStart: a, onComplete: l, force: c=!1, programmatic: u=!0, userData: d={}}={}) {
        if (!this.isStopped && !this.isLocked || c) {
            if ("string" == typeof e && ["top", "left", "start"].includes(e))
                e = 0;
            else if ("string" == typeof e && ["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                let n;
                if ("string" == typeof e ? n = document.querySelector(e) : e instanceof HTMLElement && (null == e ? void 0 : e.nodeType) && (n = e),
                n) {
                    if (this.options.wrapper !== window) {
                        const e = this.rootElement.getBoundingClientRect();
                        t -= this.isHorizontal ? e.left : e.top
                    }
                    const i = n.getBoundingClientRect();
                    e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll
                }
            }
            if ("number" == typeof e && (e += t,
            e = Math.round(e),
            this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : e = Ds(0, e, this.limit),
            e !== this.targetScroll)) {
                if (this.userData = d,
                n)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    null == l || l(this),
                    void (this.userData = {});
                u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: s,
                    easing: r,
                    lerp: o,
                    onStart: () => {
                        i && (this.isLocked = !0),
                        this.isScrolling = "smooth",
                        null == a || a(this)
                    }
                    ,
                    onUpdate: (e, t) => {
                        this.isScrolling = "smooth",
                        this.lastVelocity = this.velocity,
                        this.velocity = e - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = e,
                        this.setScroll(this.scroll),
                        u && (this.targetScroll = e),
                        t || this.emit(),
                        t && (this.reset(),
                        this.emit(),
                        null == l || l(this),
                        this.userData = {},
                        this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
    }
    preventNextNativeScrollEvent() {
        this.__preventNextNativeScrollEvent = !0,
        requestAnimationFrame(( () => {
            delete this.__preventNextNativeScrollEvent
        }
        ))
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (e = this.animatedScroll,
        t = this.limit,
        (e % t + t) % t) : this.animatedScroll;
        var e, t
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e,
        this.updateClassName())
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e,
        this.updateClassName())
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e,
        this.updateClassName())
    }
    get isSmooth() {
        return "smooth" === this.isScrolling
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        "smooth" === this.isScrolling && (e += " lenis-smooth"),
        e
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
;
function _s() {
    return _s = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                ({}).hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    _s.apply(null, arguments)
}
class Ws {
    constructor({scrollElements: e, rootMargin: t="-1px -1px -1px -1px", IORaf: n}) {
        this.scrollElements = void 0,
        this.rootMargin = void 0,
        this.IORaf = void 0,
        this.observer = void 0,
        this.scrollElements = e,
        this.rootMargin = t,
        this.IORaf = n,
        this._init()
    }
    _init() {
        this.observer = new IntersectionObserver((e => {
            e.forEach((e => {
                const t = this.scrollElements.find((t => t.$el === e.target));
                e.isIntersecting ? (t && (t.isAlreadyIntersected = !0),
                this._setInview(e)) : t && t.isAlreadyIntersected && this._setOutOfView(e)
            }
            ))
        }
        ),{
            rootMargin: this.rootMargin
        });
        for (const e of this.scrollElements)
            this.observe(e.$el)
    }
    destroy() {
        this.observer.disconnect()
    }
    observe(e) {
        e && this.observer.observe(e)
    }
    unobserve(e) {
        e && this.observer.unobserve(e)
    }
    _setInview(e) {
        const t = this.scrollElements.find((t => t.$el === e.target));
        this.IORaf && (null == t || t.setInteractivityOn()),
        !this.IORaf && (null == t || t.setInview())
    }
    _setOutOfView(e) {
        const t = this.scrollElements.find((t => t.$el === e.target));
        this.IORaf && (null == t || t.setInteractivityOff()),
        !this.IORaf && (null == t || t.setOutOfView()),
        null != t && t.attributes.scrollRepeat || this.IORaf || this.unobserve(e.target)
    }
}
function Hs(e, t, n, i, s) {
    return n + ((s - e) / (t - e) * (i - n) || 0)
}
function $s(e, t) {
    return e.reduce(( (e, n) => Math.abs(n - t) < Math.abs(e - t) ? n : e))
}
class Us {
    constructor({$el: e, id: t, modularInstance: n, subscribeElementUpdateFn: i, unsubscribeElementUpdateFn: s, needRaf: r, scrollOrientation: o}) {
        var a, l, c, u, d;
        this.$el = void 0,
        this.id = void 0,
        this.needRaf = void 0,
        this.attributes = void 0,
        this.scrollOrientation = void 0,
        this.isAlreadyIntersected = void 0,
        this.intersection = void 0,
        this.metrics = void 0,
        this.currentScroll = void 0,
        this.translateValue = void 0,
        this.progress = void 0,
        this.lastProgress = void 0,
        this.modularInstance = void 0,
        this.progressModularModules = void 0,
        this.isInview = void 0,
        this.isInteractive = void 0,
        this.isInFold = void 0,
        this.isFirstResize = void 0,
        this.subscribeElementUpdateFn = void 0,
        this.unsubscribeElementUpdateFn = void 0,
        this.$el = e,
        this.id = t,
        this.needRaf = r,
        this.scrollOrientation = o,
        this.modularInstance = n,
        this.subscribeElementUpdateFn = i,
        this.unsubscribeElementUpdateFn = s,
        this.attributes = {
            scrollClass: null != (a = this.$el.dataset.scrollClass) ? a : "is-inview",
            scrollOffset: null != (l = this.$el.dataset.scrollOffset) ? l : "0,0",
            scrollPosition: null != (c = this.$el.dataset.scrollPosition) ? c : "start,end",
            scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress,
            scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
            scrollEventProgress: null != (u = this.$el.dataset.scrollEventProgress) ? u : null,
            scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null,
            scrollRepeat: null != this.$el.dataset.scrollRepeat,
            scrollCall: null != (d = this.$el.dataset.scrollCall) ? d : null,
            scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
            scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
            scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed
        },
        this.intersection = {
            start: 0,
            end: 0
        },
        this.metrics = {
            offsetStart: 0,
            offsetEnd: 0,
            bcr: {}
        },
        this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX,
        this.translateValue = 0,
        this.progress = 0,
        this.lastProgress = null,
        this.progressModularModules = [],
        this.isInview = !1,
        this.isInteractive = !1,
        this.isAlreadyIntersected = !1,
        this.isInFold = !1,
        this.isFirstResize = !0,
        this._init()
    }
    _init() {
        this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(),
        this._resize())
    }
    onResize({currentScroll: e}) {
        this.currentScroll = e,
        this._resize()
    }
    onRender({currentScroll: e, smooth: t}) {
        const n = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
        if (this.currentScroll = e,
        this._computeProgress(),
        this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
            if (this.attributes.scrollEnableTouchSpeed || t) {
                if (this.isInFold) {
                    const e = Math.max(0, this.progress);
                    this.translateValue = e * n * this.attributes.scrollSpeed * -1
                } else {
                    const e = Hs(0, 1, -1, 1, this.progress);
                    this.translateValue = e * n * this.attributes.scrollSpeed * -1
                }
                this.$el.style.transform = "vertical" === this.scrollOrientation ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`
            } else
                this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"),
                this.translateValue = 0
    }
    setInview() {
        if (this.isInview)
            return;
        this.isInview = !0,
        this.$el.classList.add(this.attributes.scrollClass);
        const e = this._getScrollCallFrom();
        this.attributes.scrollCall && this._dispatchCall("enter", e)
    }
    setOutOfView() {
        if (!this.isInview || !this.attributes.scrollRepeat)
            return;
        this.isInview = !1,
        this.$el.classList.remove(this.attributes.scrollClass);
        const e = this._getScrollCallFrom();
        this.attributes.scrollCall && this._dispatchCall("leave", e)
    }
    setInteractivityOn() {
        this.isInteractive || (this.isInteractive = !0,
        this.subscribeElementUpdateFn(this))
    }
    setInteractivityOff() {
        this.isInteractive && (this.isInteractive = !1,
        this.unsubscribeElementUpdateFn(this),
        null != this.lastProgress && this._computeProgress($s([0, 1], this.lastProgress)))
    }
    _resize() {
        this.metrics.bcr = this.$el.getBoundingClientRect(),
        this._computeMetrics(),
        this._computeIntersection(),
        this.isFirstResize && (this.isFirstResize = !1,
        this.isInFold && this.setInview())
    }
    _computeMetrics() {
        const {top: e, left: t, height: n, width: i} = this.metrics.bcr
          , s = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth
          , r = "vertical" === this.scrollOrientation ? n : i;
        this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? e : t) - this.translateValue,
        this.metrics.offsetEnd = this.metrics.offsetStart + r,
        this.isInFold = this.metrics.offsetStart < s && !this.attributes.scrollIgnoreFold
    }
    _computeIntersection() {
        const e = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth
          , t = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width
          , n = this.attributes.scrollOffset.split(",")
          , i = null != n[0] ? n[0].trim() : "0"
          , s = null != n[1] ? n[1].trim() : "0"
          , r = this.attributes.scrollPosition.split(",");
        let o = null != r[0] ? r[0].trim() : "start";
        const a = null != r[1] ? r[1].trim() : "end"
          , l = i.includes("%") ? e * parseInt(i.replace("%", "").trim()) * .01 : parseInt(i)
          , c = s.includes("%") ? e * parseInt(s.replace("%", "").trim()) * .01 : parseInt(s);
        switch (this.isInFold && (o = "fold"),
        o) {
        case "start":
        default:
            this.intersection.start = this.metrics.offsetStart - e + l;
            break;
        case "middle":
            this.intersection.start = this.metrics.offsetStart - e + l + .5 * t;
            break;
        case "end":
            this.intersection.start = this.metrics.offsetStart - e + l + t;
            break;
        case "fold":
            this.intersection.start = 0
        }
        switch (a) {
        case "start":
            this.intersection.end = this.metrics.offsetStart - c;
            break;
        case "middle":
            this.intersection.end = this.metrics.offsetStart - c + .5 * t;
            break;
        default:
            this.intersection.end = this.metrics.offsetStart - c + t
        }
        if (this.intersection.end <= this.intersection.start)
            switch (a) {
            case "start":
            default:
                this.intersection.end = this.intersection.start + 1;
                break;
            case "middle":
                this.intersection.end = this.intersection.start + .5 * t;
                break;
            case "end":
                this.intersection.end = this.intersection.start + t
            }
    }
    _computeProgress(e) {
        const t = null != e ? e : (n = Hs(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : n > 1 ? 1 : n;
        var n;
        if (this.progress = t,
        t != this.lastProgress) {
            if (this.lastProgress = t,
            this.attributes.scrollCssProgress && this._setCssProgress(t),
            this.attributes.scrollEventProgress && this._setCustomEventProgress(t),
            this.attributes.scrollModuleProgress)
                for (const e of this.progressModularModules)
                    this.modularInstance && this.modularInstance.call("onScrollProgress", t, e.moduleName, e.moduleId);
            t > 0 && t < 1 && this.setInview(),
            0 === t && this.setOutOfView(),
            1 === t && this.setOutOfView()
        }
    }
    _setCssProgress(e=0) {
        this.$el.style.setProperty("--progress", e.toString())
    }
    _setCustomEventProgress(e=0) {
        const t = this.attributes.scrollEventProgress;
        if (!t)
            return;
        const n = new CustomEvent(t,{
            detail: {
                target: this.$el,
                progress: e
            }
        });
        window.dispatchEvent(n)
    }
    _getProgressModularModules() {
        if (!this.modularInstance)
            return;
        const e = Object.keys(this.$el.dataset).filter((e => e.includes("module")))
          , t = Object.entries(this.modularInstance.modules);
        if (e.length)
            for (const n of e) {
                const e = this.$el.dataset[n];
                if (!e)
                    return;
                for (const n of t) {
                    const [t,i] = n;
                    e in i && this.progressModularModules.push({
                        moduleName: t,
                        moduleId: e
                    })
                }
            }
    }
    _getScrollCallFrom() {
        const e = $s([this.intersection.start, this.intersection.end], this.currentScroll);
        return this.intersection.start === e ? "start" : "end"
    }
    _dispatchCall(e, t) {
        var n, i;
        const s = null == (n = this.attributes.scrollCall) ? void 0 : n.split(",")
          , r = null == (i = this.attributes) ? void 0 : i.scrollCallSelf;
        if (s && s.length > 1) {
            var o;
            const [n,i,a] = s;
            let l;
            l = r ? this.$el.dataset[`module${i.trim()}`] : a,
            this.modularInstance && this.modularInstance.call(n.trim(), {
                target: this.$el,
                way: e,
                from: t
            }, i.trim(), null == (o = l) ? void 0 : o.trim())
        } else if (s) {
            const [n] = s
              , i = new CustomEvent(n,{
                detail: {
                    target: this.$el,
                    way: e,
                    from: t
                }
            });
            window.dispatchEvent(i)
        }
    }
}
const qs = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"];
class Gs {
    constructor({$el: e, modularInstance: t, triggerRootMargin: n, rafRootMargin: i, scrollOrientation: s}) {
        this.$scrollContainer = void 0,
        this.modularInstance = void 0,
        this.triggerRootMargin = void 0,
        this.rafRootMargin = void 0,
        this.scrollElements = void 0,
        this.triggeredScrollElements = void 0,
        this.RAFScrollElements = void 0,
        this.scrollElementsToUpdate = void 0,
        this.IOTriggerInstance = void 0,
        this.IORafInstance = void 0,
        this.scrollOrientation = void 0,
        e && (this.$scrollContainer = e,
        this.modularInstance = t,
        this.scrollOrientation = s,
        this.triggerRootMargin = null != n ? n : "-1px -1px -1px -1px",
        this.rafRootMargin = null != i ? i : "100% 100% 100% 100%",
        this.scrollElements = [],
        this.triggeredScrollElements = [],
        this.RAFScrollElements = [],
        this.scrollElementsToUpdate = [],
        this._init())
    }
    _init() {
        const e = this.$scrollContainer.querySelectorAll("[data-scroll]")
          , t = Array.from(e);
        this._subscribeScrollElements(t),
        this.IOTriggerInstance = new Ws({
            scrollElements: [...this.triggeredScrollElements],
            rootMargin: this.triggerRootMargin,
            IORaf: !1
        }),
        this.IORafInstance = new Ws({
            scrollElements: [...this.RAFScrollElements],
            rootMargin: this.rafRootMargin,
            IORaf: !0
        })
    }
    destroy() {
        this.IOTriggerInstance.destroy(),
        this.IORafInstance.destroy(),
        this._unsubscribeAllScrollElements()
    }
    onResize({currentScroll: e}) {
        for (const t of this.RAFScrollElements)
            t.onResize({
                currentScroll: e
            })
    }
    onRender({currentScroll: e, smooth: t}) {
        for (const n of this.scrollElementsToUpdate)
            n.onRender({
                currentScroll: e,
                smooth: t
            })
    }
    removeScrollElements(e) {
        const t = e.querySelectorAll("[data-scroll]");
        if (t.length) {
            for (let e = 0; e < this.triggeredScrollElements.length; e++) {
                const n = this.triggeredScrollElements[e];
                Array.from(t).indexOf(n.$el) > -1 && (this.IOTriggerInstance.unobserve(n.$el),
                this.triggeredScrollElements.splice(e, 1))
            }
            for (let e = 0; e < this.RAFScrollElements.length; e++) {
                const n = this.RAFScrollElements[e];
                Array.from(t).indexOf(n.$el) > -1 && (this.IORafInstance.unobserve(n.$el),
                this.RAFScrollElements.splice(e, 1))
            }
            t.forEach((e => {
                const t = this.scrollElementsToUpdate.find((t => t.$el === e))
                  , n = this.scrollElements.find((t => t.$el === e));
                t && this._unsubscribeElementUpdate(t),
                n && (this.scrollElements = this.scrollElements.filter((e => e.id != n.id)))
            }
            ))
        }
    }
    addScrollElements(e) {
        const t = e.querySelectorAll("[data-scroll]")
          , n = [];
        this.scrollElements.forEach((e => {
            n.push(e.id)
        }
        ));
        const i = Math.max(...n, 0) + 1
          , s = Array.from(t);
        this._subscribeScrollElements(s, i, !0)
    }
    _subscribeScrollElements(e, t=0, n=!1) {
        for (let i = 0; i < e.length; i++) {
            const s = e[i]
              , r = this._checkRafNeeded(s)
              , o = new Us({
                $el: s,
                id: t + i,
                scrollOrientation: this.scrollOrientation,
                modularInstance: this.modularInstance,
                subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                needRaf: r
            });
            this.scrollElements.push(o),
            r ? (this.RAFScrollElements.push(o),
            n && (this.IORafInstance.scrollElements.push(o),
            this.IORafInstance.observe(o.$el))) : (this.triggeredScrollElements.push(o),
            n && (this.IOTriggerInstance.scrollElements.push(o),
            this.IOTriggerInstance.observe(o.$el)))
        }
    }
    _unsubscribeAllScrollElements() {
        this.scrollElements = [],
        this.RAFScrollElements = [],
        this.triggeredScrollElements = [],
        this.scrollElementsToUpdate = []
    }
    _subscribeElementUpdate(e) {
        this.scrollElementsToUpdate.push(e)
    }
    _unsubscribeElementUpdate(e) {
        this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter((t => t.id != e.id))
    }
    _checkRafNeeded(e) {
        let t = [...qs];
        const n = e => {
            t = t.filter((t => t != e))
        }
        ;
        if (e.dataset.scrollOffset) {
            if ("0,0" != e.dataset.scrollOffset.split(",").map((e => e.replace("%", "").trim())).join(","))
                return !0;
            n("scrollOffset")
        } else
            n("scrollOffset");
        if (e.dataset.scrollPosition) {
            if ("top,bottom" != e.dataset.scrollPosition.trim())
                return !0;
            n("scrollPosition")
        } else
            n("scrollPosition");
        if (e.dataset.scrollSpeed && !isNaN(parseFloat(e.dataset.scrollSpeed)))
            return !0;
        n("scrollSpeed");
        for (const i of t)
            if (i in e.dataset)
                return !0;
        return !1
    }
}
class Ys {
    constructor({resizeElements: e, resizeCallback: t= () => {}
    }) {
        this.$resizeElements = void 0,
        this.isFirstObserve = void 0,
        this.observer = void 0,
        this.resizeCallback = void 0,
        this.$resizeElements = e,
        this.resizeCallback = t,
        this.isFirstObserve = !0,
        this._init()
    }
    _init() {
        this.observer = new ResizeObserver((e => {
            var t;
            !this.isFirstObserve && (null == (t = this.resizeCallback) || t.call(this)),
            this.isFirstObserve = !1
        }
        ));
        for (const e of this.$resizeElements)
            this.observer.observe(e)
    }
    destroy() {
        this.observer.disconnect()
    }
}
class Zs {
    constructor({lenisOptions: e={}, modularInstance: t, triggerRootMargin: n, rafRootMargin: i, autoResize: s=!0, autoStart: r=!0, scrollCallback: o= () => {}
    , initCustomTicker: a, destroyCustomTicker: l}={}) {
        this.rafPlaying = void 0,
        this.lenisInstance = void 0,
        this.coreInstance = void 0,
        this.lenisOptions = void 0,
        this.modularInstance = void 0,
        this.triggerRootMargin = void 0,
        this.rafRootMargin = void 0,
        this.rafInstance = void 0,
        this.autoResize = void 0,
        this.autoStart = void 0,
        this.ROInstance = void 0,
        this.initCustomTicker = void 0,
        this.destroyCustomTicker = void 0,
        this._onRenderBind = void 0,
        this._onResizeBind = void 0,
        this._onScrollToBind = void 0;
        for (const [c] of Object.entries(e))
            ["wrapper", "content", "infinite"].includes(c);
        Object.assign(this, {
            lenisOptions: e,
            modularInstance: t,
            triggerRootMargin: n,
            rafRootMargin: i,
            autoResize: s,
            autoStart: r,
            scrollCallback: o,
            initCustomTicker: a,
            destroyCustomTicker: l
        }),
        this._onRenderBind = this._onRender.bind(this),
        this._onScrollToBind = this._onScrollTo.bind(this),
        this._onResizeBind = this._onResize.bind(this),
        this.rafPlaying = !1,
        this._init()
    }
    _init() {
        var e;
        this.lenisInstance = new Bs(_s({}, this.lenisOptions, {
            wrapper: window,
            content: document.documentElement,
            infinite: !1
        })),
        null == (e = this.lenisInstance) || e.on("scroll", this.scrollCallback),
        document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation),
        requestAnimationFrame(( () => {
            this.coreInstance = new Gs({
                $el: this.lenisInstance.rootElement,
                modularInstance: this.modularInstance,
                triggerRootMargin: this.triggerRootMargin,
                rafRootMargin: this.rafRootMargin,
                scrollOrientation: this.lenisInstance.options.orientation
            }),
            this._bindEvents(),
            this.initCustomTicker && !this.destroyCustomTicker || !this.initCustomTicker && this.destroyCustomTicker,
            this.autoStart && this.start()
        }
        ))
    }
    destroy() {
        var e;
        this.stop(),
        this._unbindEvents(),
        this.lenisInstance.destroy(),
        null == (e = this.coreInstance) || e.destroy(),
        requestAnimationFrame(( () => {
            var e;
            null == (e = this.coreInstance) || e.destroy()
        }
        ))
    }
    _bindEvents() {
        this._bindScrollToEvents(),
        this.autoResize && ("ResizeObserver"in window ? this.ROInstance = new Ys({
            resizeElements: [document.body],
            resizeCallback: this._onResizeBind
        }) : window.addEventListener("resize", this._onResizeBind))
    }
    _unbindEvents() {
        this._unbindScrollToEvents(),
        this.autoResize && ("ResizeObserver"in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind))
    }
    _bindScrollToEvents(e) {
        const t = e || this.lenisInstance.rootElement
          , n = null == t ? void 0 : t.querySelectorAll("[data-scroll-to]");
        (null == n ? void 0 : n.length) && n.forEach((e => {
            e.addEventListener("click", this._onScrollToBind, !1)
        }
        ))
    }
    _unbindScrollToEvents(e) {
        const t = e || this.lenisInstance.rootElement
          , n = null == t ? void 0 : t.querySelectorAll("[data-scroll-to]");
        (null == n ? void 0 : n.length) && n.forEach((e => {
            e.removeEventListener("click", this._onScrollToBind, !1)
        }
        ))
    }
    _onResize() {
        requestAnimationFrame(( () => {
            var e;
            null == (e = this.coreInstance) || e.onResize({
                currentScroll: this.lenisInstance.scroll
            })
        }
        ))
    }
    _onRender() {
        var e, t;
        null == (e = this.lenisInstance) || e.raf(Date.now()),
        null == (t = this.coreInstance) || t.onRender({
            currentScroll: this.lenisInstance.scroll,
            smooth: this.lenisInstance.options.smoothWheel
        })
    }
    _onScrollTo(e) {
        var t;
        e.preventDefault();
        const n = null != (t = e.currentTarget) ? t : null;
        if (!n)
            return;
        const i = n.getAttribute("data-scroll-to-href") || n.getAttribute("href")
          , s = n.getAttribute("data-scroll-to-offset") || 0
          , r = n.getAttribute("data-scroll-to-duration") || this.lenisInstance.options.duration;
        i && this.scrollTo(i, {
            offset: "string" == typeof s ? parseInt(s) : s,
            duration: "string" == typeof r ? parseInt(r) : r
        })
    }
    start() {
        var e;
        this.rafPlaying || (null == (e = this.lenisInstance) || e.start(),
        this.rafPlaying = !0,
        this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf())
    }
    stop() {
        var e;
        this.rafPlaying && (null == (e = this.lenisInstance) || e.stop(),
        this.rafPlaying = !1,
        this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance))
    }
    removeScrollElements(e) {
        var t;
        e && (this._unbindScrollToEvents(e),
        null == (t = this.coreInstance) || t.removeScrollElements(e))
    }
    addScrollElements(e) {
        var t;
        e && (null == (t = this.coreInstance) || t.addScrollElements(e),
        requestAnimationFrame(( () => {
            this._bindScrollToEvents(e)
        }
        )))
    }
    resize() {
        this._onResizeBind()
    }
    scrollTo(e, t) {
        var n;
        null == (n = this.lenisInstance) || n.scrollTo(e, {
            offset: null == t ? void 0 : t.offset,
            lerp: null == t ? void 0 : t.lerp,
            duration: null == t ? void 0 : t.duration,
            immediate: null == t ? void 0 : t.immediate,
            lock: null == t ? void 0 : t.lock,
            force: null == t ? void 0 : t.force,
            easing: null == t ? void 0 : t.easing,
            onComplete: null == t ? void 0 : t.onComplete
        })
    }
    _raf() {
        this._onRenderBind(),
        this.rafInstance = requestAnimationFrame(( () => this._raf()))
    }
}
function Xs(e) {
    if ("undefined" == typeof Proxy)
        return e;
    const t = new Map;
    return new Proxy(( (...t) => e(...t)),{
        get: (n, i) => "create" === i ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
function Ks(e) {
    return null !== e && "object" == typeof e && "function" == typeof e.start
}
const Qs = e => Array.isArray(e);
function Js(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (t[i] !== e[i])
            return !1;
    return !0
}
function er(e) {
    return "string" == typeof e || Array.isArray(e)
}
function tr(e) {
    const t = [{}, {}];
    return null == e || e.values.forEach(( (e, n) => {
        t[0][n] = e.get(),
        t[1][n] = e.getVelocity()
    }
    )),
    t
}
function nr(e, t, n, i) {
    if ("function" == typeof t) {
        const [s,r] = tr(i);
        t = t(void 0 !== n ? n : e.custom, s, r)
    }
    if ("string" == typeof t && (t = e.variants && e.variants[t]),
    "function" == typeof t) {
        const [s,r] = tr(i);
        t = t(void 0 !== n ? n : e.custom, s, r)
    }
    return t
}
function ir(e, t, n) {
    const i = e.getProps();
    return nr(i, t, void 0 !== n ? n : i.custom, e)
}
const sr = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , rr = ["initial", ...sr]
  , or = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ar = new Set(or)
  , lr = e => 1e3 * e
  , cr = e => e / 1e3
  , ur = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , dr = {
    type: "keyframes",
    duration: .8
}
  , hr = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , pr = (e, {keyframes: t}) => t.length > 2 ? dr : ar.has(e) ? e.startsWith("scale") ? {
    type: "spring",
    stiffness: 550,
    damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
} : ur : hr;
function mr(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const fr = !1
  , gr = e => null !== e;
function vr(e, {repeat: t, repeatType: n="loop"}, i) {
    const s = e.filter(gr)
      , r = t && "loop" !== n && t % 2 == 1 ? 0 : s.length - 1;
    return r && void 0 !== i ? i : s[r]
}
const yr = e => e;
const xr = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
function br(e, t) {
    let n = !1
      , i = !0;
    const s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , r = () => n = !0
      , o = xr.reduce(( (e, t) => (e[t] = function(e) {
        let t = new Set
          , n = new Set
          , i = !1
          , s = !1;
        const r = new WeakSet;
        let o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        };
        function a(t) {
            r.has(t) && (l.schedule(t),
            e()),
            t(o)
        }
        const l = {
            schedule: (e, s=!1, o=!1) => {
                const a = o && i ? t : n;
                return s && r.add(e),
                a.has(e) || a.add(e),
                e
            }
            ,
            cancel: e => {
                n.delete(e),
                r.delete(e)
            }
            ,
            process: e => {
                o = e,
                i ? s = !0 : (i = !0,
                [t,n] = [n, t],
                n.clear(),
                t.forEach(a),
                i = !1,
                s && (s = !1,
                l.process(e)))
            }
        };
        return l
    }(r),
    e)), {})
      , {read: a, resolveKeyframes: l, update: c, preRender: u, render: d, postRender: h} = o
      , p = () => {
        const r = performance.now();
        n = !1,
        s.delta = i ? 1e3 / 60 : Math.max(Math.min(r - s.timestamp, 40), 1),
        s.timestamp = r,
        s.isProcessing = !0,
        a.process(s),
        l.process(s),
        c.process(s),
        u.process(s),
        d.process(s),
        h.process(s),
        s.isProcessing = !1,
        n && t && (i = !1,
        e(p))
    }
    ;
    return {
        schedule: xr.reduce(( (t, r) => {
            const a = o[r];
            return t[r] = (t, r=!1, o=!1) => (n || (n = !0,
            i = !0,
            s.isProcessing || e(p)),
            a.schedule(t, r, o)),
            t
        }
        ), {}),
        cancel: e => {
            for (let t = 0; t < xr.length; t++)
                o[xr[t]].cancel(e)
        }
        ,
        state: s,
        steps: o
    }
}
const {schedule: wr, cancel: Sr, state: Cr, steps: Er} = br("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : yr, !0)
  , jr = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
function Tr(e, t, n, i) {
    if (e === t && n === i)
        return yr;
    const s = t => function(e, t, n, i, s) {
        let r, o, a = 0;
        do {
            o = t + (n - t) / 2,
            r = jr(o, i, s) - e,
            r > 0 ? n = o : t = o
        } while (Math.abs(r) > 1e-7 && ++a < 12);
        return o
    }(t, 0, 1, e, n);
    return e => 0 === e || 1 === e ? e : jr(s(e), t, i)
}
const kr = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Pr = e => t => 1 - e(1 - t)
  , Rr = Tr(.33, 1.53, .69, .99)
  , Mr = Pr(Rr)
  , Nr = kr(Mr)
  , Ar = e => (e *= 2) < 1 ? .5 * Mr(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Lr = e => 1 - Math.sin(Math.acos(e))
  , Dr = Pr(Lr)
  , Ir = kr(Lr)
  , Or = e => /^0[^.\s]+$/u.test(e);
let Vr = yr
  , Fr = yr;
const zr = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Br = e => t => "string" == typeof t && t.startsWith(e)
  , _r = Br("--")
  , Wr = Br("var(--")
  , Hr = e => !!Wr(e) && $r.test(e.split("/*")[0].trim())
  , $r = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Ur = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function qr(e, t, n=1) {
    const [i,s] = function(e) {
        const t = Ur.exec(e);
        if (!t)
            return [, ];
        const [,n,i,s] = t;
        return [`--${null != n ? n : i}`, s]
    }(e);
    if (!i)
        return;
    const r = window.getComputedStyle(t).getPropertyValue(i);
    if (r) {
        const e = r.trim();
        return zr(e) ? parseFloat(e) : e
    }
    return Hr(s) ? qr(s, t, n + 1) : s
}
const Gr = (e, t, n) => n > t ? t : n < e ? e : n
  , Yr = {
    test: e => "number" == typeof e,
    parse: parseFloat,
    transform: e => e
}
  , Zr = {
    ...Yr,
    transform: e => Gr(0, 1, e)
}
  , Xr = {
    ...Yr,
    default: 1
}
  , Kr = e => ({
    test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Qr = Kr("deg")
  , Jr = Kr("%")
  , eo = Kr("px")
  , to = Kr("vh")
  , no = Kr("vw")
  , io = {
    ...Jr,
    parse: e => Jr.parse(e) / 100,
    transform: e => Jr.transform(100 * e)
}
  , so = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , ro = e => e === Yr || e === eo
  , oo = (e, t) => parseFloat(e.split(", ")[t])
  , ao = (e, t) => (n, {transform: i}) => {
    if ("none" === i || !i)
        return 0;
    const s = i.match(/^matrix3d\((.+)\)$/u);
    if (s)
        return oo(s[1], t);
    {
        const t = i.match(/^matrix\((.+)\)$/u);
        return t ? oo(t[1], e) : 0
    }
}
  , lo = new Set(["x", "y", "z"])
  , co = or.filter((e => !lo.has(e)));
const uo = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: ao(4, 13),
    y: ao(5, 14)
};
uo.translateX = uo.x,
uo.translateY = uo.y;
const ho = e => t => t.test(e)
  , po = [Yr, eo, Jr, Qr, no, to, {
    test: e => "auto" === e,
    parse: e => e
}]
  , mo = e => po.find(ho(e))
  , fo = new Set;
let go = !1
  , vo = !1;
function yo() {
    if (vo) {
        const e = Array.from(fo).filter((e => e.needsMeasurement))
          , t = new Set(e.map((e => e.element)))
          , n = new Map;
        t.forEach((e => {
            const t = function(e) {
                const t = [];
                return co.forEach((n => {
                    const i = e.getValue(n);
                    void 0 !== i && (t.push([n, i.get()]),
                    i.set(n.startsWith("scale") ? 1 : 0))
                }
                )),
                t
            }(e);
            t.length && (n.set(e, t),
            e.render())
        }
        )),
        e.forEach((e => e.measureInitialState())),
        t.forEach((e => {
            e.render();
            const t = n.get(e);
            t && t.forEach(( ([t,n]) => {
                var i;
                null === (i = e.getValue(t)) || void 0 === i || i.set(n)
            }
            ))
        }
        )),
        e.forEach((e => e.measureEndState())),
        e.forEach((e => {
            void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
        }
        ))
    }
    vo = !1,
    go = !1,
    fo.forEach((e => e.complete())),
    fo.clear()
}
function xo() {
    fo.forEach((e => {
        e.readKeyframes(),
        e.needsMeasurement && (vo = !0)
    }
    ))
}
class bo {
    constructor(e, t, n, i, s, r=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = t,
        this.name = n,
        this.motionValue = i,
        this.element = s,
        this.isAsync = r
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (fo.add(this),
        go || (go = !0,
        wr.read(xo),
        wr.resolveKeyframes(yo))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: t, element: n, motionValue: i} = this;
        for (let s = 0; s < e.length; s++)
            if (null === e[s])
                if (0 === s) {
                    const s = null == i ? void 0 : i.get()
                      , r = e[e.length - 1];
                    if (void 0 !== s)
                        e[0] = s;
                    else if (n && t) {
                        const i = n.readValue(t, r);
                        null != i && (e[0] = i)
                    }
                    void 0 === e[0] && (e[0] = r),
                    i && void 0 === s && i.set(e[0])
                } else
                    e[s] = e[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        fo.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        fo.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const wo = e => Math.round(1e5 * e) / 1e5
  , So = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
const Co = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Eo = (e, t) => n => Boolean("string" == typeof n && Co.test(n) && n.startsWith(e) || t && !function(e) {
    return null == e
}(n) && Object.prototype.hasOwnProperty.call(n, t))
  , jo = (e, t, n) => i => {
    if ("string" != typeof i)
        return i;
    const [s,r,o,a] = i.match(So);
    return {
        [e]: parseFloat(s),
        [t]: parseFloat(r),
        [n]: parseFloat(o),
        alpha: void 0 !== a ? parseFloat(a) : 1
    }
}
  , To = {
    ...Yr,
    transform: e => Math.round((e => Gr(0, 255, e))(e))
}
  , ko = {
    test: Eo("rgb", "red"),
    parse: jo("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: i=1}) => "rgba(" + To.transform(e) + ", " + To.transform(t) + ", " + To.transform(n) + ", " + wo(Zr.transform(i)) + ")"
};
const Po = {
    test: Eo("#"),
    parse: function(e) {
        let t = ""
          , n = ""
          , i = ""
          , s = "";
        return e.length > 5 ? (t = e.substring(1, 3),
        n = e.substring(3, 5),
        i = e.substring(5, 7),
        s = e.substring(7, 9)) : (t = e.substring(1, 2),
        n = e.substring(2, 3),
        i = e.substring(3, 4),
        s = e.substring(4, 5),
        t += t,
        n += n,
        i += i,
        s += s),
        {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1
        }
    },
    transform: ko.transform
}
  , Ro = {
    test: Eo("hsl", "hue"),
    parse: jo("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: i=1}) => "hsla(" + Math.round(e) + ", " + Jr.transform(wo(t)) + ", " + Jr.transform(wo(n)) + ", " + wo(Zr.transform(i)) + ")"
}
  , Mo = {
    test: e => ko.test(e) || Po.test(e) || Ro.test(e),
    parse: e => ko.test(e) ? ko.parse(e) : Ro.test(e) ? Ro.parse(e) : Po.parse(e),
    transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? ko.transform(e) : Ro.transform(e)
}
  , No = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
const Ao = "number"
  , Lo = "color"
  , Do = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Io(e) {
    const t = e.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , s = [];
    let r = 0;
    const o = t.replace(Do, (e => (Mo.test(e) ? (i.color.push(r),
    s.push(Lo),
    n.push(Mo.parse(e))) : e.startsWith("var(") ? (i.var.push(r),
    s.push("var"),
    n.push(e)) : (i.number.push(r),
    s.push(Ao),
    n.push(parseFloat(e))),
    ++r,
    "${}"))).split("${}");
    return {
        values: n,
        split: o,
        indexes: i,
        types: s
    }
}
function Oo(e) {
    return Io(e).values
}
function Vo(e) {
    const {split: t, types: n} = Io(e)
      , i = t.length;
    return e => {
        let s = "";
        for (let r = 0; r < i; r++)
            if (s += t[r],
            void 0 !== e[r]) {
                const t = n[r];
                s += t === Ao ? wo(e[r]) : t === Lo ? Mo.transform(e[r]) : e[r]
            }
        return s
    }
}
const Fo = e => "number" == typeof e ? 0 : e;
const zo = {
    test: function(e) {
        var t, n;
        return isNaN(e) && "string" == typeof e && ((null === (t = e.match(So)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(No)) || void 0 === n ? void 0 : n.length) || 0) > 0
    },
    parse: Oo,
    createTransformer: Vo,
    getAnimatableNone: function(e) {
        const t = Oo(e);
        return Vo(e)(t.map(Fo))
    }
}
  , Bo = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _o(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if ("drop-shadow" === t)
        return e;
    const [i] = n.match(So) || [];
    if (!i)
        return e;
    const s = n.replace(i, "");
    let r = Bo.has(t) ? 1 : 0;
    return i !== n && (r *= 100),
    t + "(" + r + s + ")"
}
const Wo = /\b([a-z-]*)\(.*?\)/gu
  , Ho = {
    ...zo,
    getAnimatableNone: e => {
        const t = e.match(Wo);
        return t ? t.map(_o).join(" ") : e
    }
}
  , $o = {
    borderWidth: eo,
    borderTopWidth: eo,
    borderRightWidth: eo,
    borderBottomWidth: eo,
    borderLeftWidth: eo,
    borderRadius: eo,
    radius: eo,
    borderTopLeftRadius: eo,
    borderTopRightRadius: eo,
    borderBottomRightRadius: eo,
    borderBottomLeftRadius: eo,
    width: eo,
    maxWidth: eo,
    height: eo,
    maxHeight: eo,
    top: eo,
    right: eo,
    bottom: eo,
    left: eo,
    padding: eo,
    paddingTop: eo,
    paddingRight: eo,
    paddingBottom: eo,
    paddingLeft: eo,
    margin: eo,
    marginTop: eo,
    marginRight: eo,
    marginBottom: eo,
    marginLeft: eo,
    backgroundPositionX: eo,
    backgroundPositionY: eo
}
  , Uo = {
    rotate: Qr,
    rotateX: Qr,
    rotateY: Qr,
    rotateZ: Qr,
    scale: Xr,
    scaleX: Xr,
    scaleY: Xr,
    scaleZ: Xr,
    skew: Qr,
    skewX: Qr,
    skewY: Qr,
    distance: eo,
    translateX: eo,
    translateY: eo,
    translateZ: eo,
    x: eo,
    y: eo,
    z: eo,
    perspective: eo,
    transformPerspective: eo,
    opacity: Zr,
    originX: io,
    originY: io,
    originZ: eo
}
  , qo = {
    ...Yr,
    transform: Math.round
}
  , Go = {
    ...$o,
    ...Uo,
    zIndex: qo,
    size: eo,
    fillOpacity: Zr,
    strokeOpacity: Zr,
    numOctaves: qo
}
  , Yo = {
    ...Go,
    color: Mo,
    backgroundColor: Mo,
    outlineColor: Mo,
    fill: Mo,
    stroke: Mo,
    borderColor: Mo,
    borderTopColor: Mo,
    borderRightColor: Mo,
    borderBottomColor: Mo,
    borderLeftColor: Mo,
    filter: Ho,
    WebkitFilter: Ho
}
  , Zo = e => Yo[e];
function Xo(e, t) {
    let n = Zo(e);
    return n !== Ho && (n = zo),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Ko = new Set(["auto", "none", "0"]);
class Qo extends bo {
    constructor(e, t, n, i, s) {
        super(e, t, n, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: t, name: n} = this;
        if (!t || !t.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < e.length; a++) {
            let n = e[a];
            if ("string" == typeof n && (n = n.trim(),
            Hr(n))) {
                const i = qr(n, t.current);
                void 0 !== i && (e[a] = i),
                a === e.length - 1 && (this.finalKeyframe = n)
            }
        }
        if (this.resolveNoneKeyframes(),
        !so.has(n) || 2 !== e.length)
            return;
        const [i,s] = e
          , r = mo(i)
          , o = mo(s);
        if (r !== o)
            if (ro(r) && ro(o))
                for (let a = 0; a < e.length; a++) {
                    const t = e[a];
                    "string" == typeof t && (e[a] = parseFloat(t))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: t} = this
          , n = [];
        for (let s = 0; s < e.length; s++)
            ("number" == typeof (i = e[s]) ? 0 === i : null === i || "none" === i || "0" === i || Or(i)) && n.push(s);
        var i;
        n.length && function(e, t, n) {
            let i, s = 0;
            for (; s < e.length && !i; ) {
                const t = e[s];
                "string" == typeof t && !Ko.has(t) && Io(t).values.length && (i = e[s]),
                s++
            }
            if (i && n)
                for (const r of t)
                    e[r] = Xo(n, i)
        }(e, n, t)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: t, name: n} = this;
        if (!e || !e.current)
            return;
        "height" === n && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = uo[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
        t[0] = this.measuredOrigin;
        const i = t[t.length - 1];
        void 0 !== i && e.getValue(n, i).jump(i, !1)
    }
    measureEndState() {
        var e;
        const {element: t, name: n, unresolvedKeyframes: i} = this;
        if (!t || !t.current)
            return;
        const s = t.getValue(n);
        s && s.jump(this.measuredOrigin, !1);
        const r = i.length - 1
          , o = i[r];
        i[r] = uo[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
        (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach(( ([e,n]) => {
            t.getValue(e).set(n)
        }
        )),
        this.resolveNoneKeyframes()
    }
}
function Jo(e) {
    return "function" == typeof e
}
let ea;
function ta() {
    ea = void 0
}
const na = {
    now: () => (void 0 === ea && na.set(Cr.isProcessing || fr ? Cr.timestamp : performance.now()),
    ea),
    set: e => {
        ea = e,
        queueMicrotask(ta)
    }
}
  , ia = (e, t) => "zIndex" !== t && (!("number" != typeof e && !Array.isArray(e)) || !("string" != typeof e || !zo.test(e) && "0" !== e || e.startsWith("url(")));
class sa {
    constructor({autoplay: e=!0, delay: t=0, type: n="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: r="loop", ...o}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = na.now(),
        this.options = {
            autoplay: e,
            delay: t,
            type: n,
            repeat: i,
            repeatDelay: s,
            repeatType: r,
            ...o
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
    }
    get resolved() {
        return this._resolved || this.hasAttemptedResolve || (xo(),
        yo()),
        this._resolved
    }
    onKeyframesResolved(e, t) {
        this.resolvedAt = na.now(),
        this.hasAttemptedResolve = !0;
        const {name: n, type: i, velocity: s, delay: r, onComplete: o, onUpdate: a, isGenerator: l} = this.options;
        if (!l && !function(e, t, n, i) {
            const s = e[0];
            if (null === s)
                return !1;
            if ("display" === t || "visibility" === t)
                return !0;
            const r = e[e.length - 1]
              , o = ia(s, t)
              , a = ia(r, t);
            return !(!o || !a) && (function(e) {
                const t = e[0];
                if (1 === e.length)
                    return !0;
                for (let n = 0; n < e.length; n++)
                    if (e[n] !== t)
                        return !0
            }(e) || ("spring" === n || Jo(n)) && i)
        }(e, n, i, s)) {
            if (!r)
                return null == a || a(vr(e, this.options, t)),
                null == o || o(),
                void this.resolveFinishedPromise();
            this.options.duration = 0
        }
        const c = this.initPlayback(e, t);
        !1 !== c && (this._resolved = {
            keyframes: e,
            finalKeyframe: t,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, t) {
        return this.currentFinishedPromise.then(e, t)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((e => {
            this.resolveFinishedPromise = e
        }
        ))
    }
}
function ra(e, t) {
    return t ? e * (1e3 / t) : 0
}
function oa(e, t, n) {
    const i = Math.max(t - 5, 0);
    return ra(n - e(i), t - i)
}
const aa = .001;
function la({duration: e=800, bounce: t=.25, velocity: n=0, mass: i=1}) {
    let s, r, o = 1 - t;
    o = Gr(.05, 1, o),
    e = Gr(.01, 10, cr(e)),
    o < 1 ? (s = t => {
        const i = t * o
          , s = i * e
          , r = i - n
          , a = ua(t, o)
          , l = Math.exp(-s);
        return aa - r / a * l
    }
    ,
    r = t => {
        const i = t * o * e
          , r = i * n + n
          , a = Math.pow(o, 2) * Math.pow(t, 2) * e
          , l = Math.exp(-i)
          , c = ua(Math.pow(t, 2), o);
        return (-s(t) + aa > 0 ? -1 : 1) * ((r - a) * l) / c
    }
    ) : (s = t => Math.exp(-t * e) * ((t - n) * e + 1) - .001,
    r = t => Math.exp(-t * e) * (e * e * (n - t)));
    const a = function(e, t, n) {
        let i = n;
        for (let s = 1; s < ca; s++)
            i -= e(i) / t(i);
        return i
    }(s, r, 5 / e);
    if (e = lr(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const t = Math.pow(a, 2) * i;
        return {
            stiffness: t,
            damping: 2 * o * Math.sqrt(i * t),
            duration: e
        }
    }
}
const ca = 12;
function ua(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const da = ["duration", "bounce"]
  , ha = ["stiffness", "damping", "mass"];
function pa(e, t) {
    return t.some((t => void 0 !== e[t]))
}
function ma({keyframes: e, restDelta: t, restSpeed: n, ...i}) {
    const s = e[0]
      , r = e[e.length - 1]
      , o = {
        done: !1,
        value: s
    }
      , {stiffness: a, damping: l, mass: c, duration: u, velocity: d, isResolvedFromDuration: h} = function(e) {
        let t = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...e
        };
        if (!pa(e, ha) && pa(e, da)) {
            const n = la(e);
            t = {
                ...t,
                ...n,
                mass: 1
            },
            t.isResolvedFromDuration = !0
        }
        return t
    }({
        ...i,
        velocity: -cr(i.velocity || 0)
    })
      , p = d || 0
      , m = l / (2 * Math.sqrt(a * c))
      , f = r - s
      , g = cr(Math.sqrt(a / c))
      , v = Math.abs(f) < 5;
    let y;
    if (n || (n = v ? .01 : 2),
    t || (t = v ? .005 : .5),
    m < 1) {
        const e = ua(g, m);
        y = t => {
            const n = Math.exp(-m * g * t);
            return r - n * ((p + m * g * f) / e * Math.sin(e * t) + f * Math.cos(e * t))
        }
    } else if (1 === m)
        y = e => r - Math.exp(-g * e) * (f + (p + g * f) * e);
    else {
        const e = g * Math.sqrt(m * m - 1);
        y = t => {
            const n = Math.exp(-m * g * t)
              , i = Math.min(e * t, 300);
            return r - n * ((p + m * g * f) * Math.sinh(i) + e * f * Math.cosh(i)) / e
        }
    }
    return {
        calculatedDuration: h && u || null,
        next: e => {
            const i = y(e);
            if (h)
                o.done = e >= u;
            else {
                let s = 0;
                m < 1 && (s = 0 === e ? lr(p) : oa(y, e, i));
                const a = Math.abs(s) <= n
                  , l = Math.abs(r - i) <= t;
                o.done = a && l
            }
            return o.value = o.done ? r : i,
            o
        }
    }
}
function fa({keyframes: e, velocity: t=0, power: n=.8, timeConstant: i=325, bounceDamping: s=10, bounceStiffness: r=500, modifyTarget: o, min: a, max: l, restDelta: c=.5, restSpeed: u}) {
    const d = e[0]
      , h = {
        done: !1,
        value: d
    }
      , p = e => void 0 === a ? l : void 0 === l || Math.abs(a - e) < Math.abs(l - e) ? a : l;
    let m = n * t;
    const f = d + m
      , g = void 0 === o ? f : o(f);
    g !== f && (m = g - d);
    const v = e => -m * Math.exp(-e / i)
      , y = e => g + v(e)
      , x = e => {
        const t = v(e)
          , n = y(e);
        h.done = Math.abs(t) <= c,
        h.value = h.done ? g : n
    }
    ;
    let b, w;
    const S = e => {
        var t;
        (t = h.value,
        void 0 !== a && t < a || void 0 !== l && t > l) && (b = e,
        w = ma({
            keyframes: [h.value, p(h.value)],
            velocity: oa(y, e, h.value),
            damping: s,
            stiffness: r,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return S(0),
    {
        calculatedDuration: null,
        next: e => {
            let t = !1;
            return w || void 0 !== b || (t = !0,
            x(e),
            S(e)),
            void 0 !== b && e >= b ? w.next(e - b) : (!t && x(e),
            h)
        }
    }
}
const ga = Tr(.42, 0, 1, 1)
  , va = Tr(0, 0, .58, 1)
  , ya = Tr(.42, 0, .58, 1)
  , xa = e => Array.isArray(e) && "number" == typeof e[0]
  , ba = {
    linear: yr,
    easeIn: ga,
    easeInOut: ya,
    easeOut: va,
    circIn: Lr,
    circInOut: Ir,
    circOut: Dr,
    backIn: Mr,
    backInOut: Nr,
    backOut: Rr,
    anticipate: Ar
}
  , wa = e => {
    if (xa(e)) {
        Fr(4 === e.length);
        const [t,n,i,s] = e;
        return Tr(t, n, i, s)
    }
    return "string" == typeof e ? (Fr(void 0 !== ba[e]),
    ba[e]) : e
}
  , Sa = (e, t) => n => t(e(n))
  , Ca = (...e) => e.reduce(Sa)
  , Ea = (e, t, n) => {
    const i = t - e;
    return 0 === i ? 1 : (n - e) / i
}
  , ja = (e, t, n) => e + (t - e) * n;
function Ta(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function ka(e, t) {
    return n => n > 0 ? t : e
}
const Pa = (e, t, n) => {
    const i = e * e
      , s = n * (t * t - i) + i;
    return s < 0 ? 0 : Math.sqrt(s)
}
  , Ra = [Po, ko, Ro];
function Ma(e) {
    const t = (n = e,
    Ra.find((e => e.test(n))));
    var n;
    if (!Boolean(t))
        return !1;
    let i = t.parse(e);
    return t === Ro && (i = function({hue: e, saturation: t, lightness: n, alpha: i}) {
        e /= 360,
        n /= 100;
        let s = 0
          , r = 0
          , o = 0;
        if (t /= 100) {
            const i = n < .5 ? n * (1 + t) : n + t - n * t
              , a = 2 * n - i;
            s = Ta(a, i, e + 1 / 3),
            r = Ta(a, i, e),
            o = Ta(a, i, e - 1 / 3)
        } else
            s = r = o = n;
        return {
            red: Math.round(255 * s),
            green: Math.round(255 * r),
            blue: Math.round(255 * o),
            alpha: i
        }
    }(i)),
    i
}
const Na = (e, t) => {
    const n = Ma(e)
      , i = Ma(t);
    if (!n || !i)
        return ka(e, t);
    const s = {
        ...n
    };
    return e => (s.red = Pa(n.red, i.red, e),
    s.green = Pa(n.green, i.green, e),
    s.blue = Pa(n.blue, i.blue, e),
    s.alpha = ja(n.alpha, i.alpha, e),
    ko.transform(s))
}
  , Aa = new Set(["none", "hidden"]);
function La(e, t) {
    return n => ja(e, t, n)
}
function Da(e) {
    return "number" == typeof e ? La : "string" == typeof e ? Hr(e) ? ka : Mo.test(e) ? Na : Va : Array.isArray(e) ? Ia : "object" == typeof e ? Mo.test(e) ? Na : Oa : ka
}
function Ia(e, t) {
    const n = [...e]
      , i = n.length
      , s = e.map(( (e, n) => Da(e)(e, t[n])));
    return e => {
        for (let t = 0; t < i; t++)
            n[t] = s[t](e);
        return n
    }
}
function Oa(e, t) {
    const n = {
        ...e,
        ...t
    }
      , i = {};
    for (const s in n)
        void 0 !== e[s] && void 0 !== t[s] && (i[s] = Da(e[s])(e[s], t[s]));
    return e => {
        for (const t in i)
            n[t] = i[t](e);
        return n
    }
}
const Va = (e, t) => {
    const n = zo.createTransformer(t)
      , i = Io(e)
      , s = Io(t);
    return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? Aa.has(e) && !s.values.length || Aa.has(t) && !i.values.length ? function(e, t) {
        return Aa.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
    }(e, t) : Ca(Ia(function(e, t) {
        var n;
        const i = []
          , s = {
            color: 0,
            var: 0,
            number: 0
        };
        for (let r = 0; r < t.values.length; r++) {
            const o = t.types[r]
              , a = e.indexes[o][s[o]]
              , l = null !== (n = e.values[a]) && void 0 !== n ? n : 0;
            i[r] = l,
            s[o]++
        }
        return i
    }(i, s), s.values), n) : ka(e, t)
}
;
function Fa(e, t, n) {
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n)
        return ja(e, t, n);
    return Da(e)(e, t)
}
function za(e, t, {clamp: n=!0, ease: i, mixer: s}={}) {
    const r = e.length;
    if (Fr(r === t.length),
    1 === r)
        return () => t[0];
    if (2 === r && e[0] === e[1])
        return () => t[1];
    e[0] > e[r - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const o = function(e, t, n) {
        const i = []
          , s = n || Fa
          , r = e.length - 1;
        for (let o = 0; o < r; o++) {
            let n = s(e[o], e[o + 1]);
            if (t) {
                const e = Array.isArray(t) ? t[o] || yr : t;
                n = Ca(e, n)
            }
            i.push(n)
        }
        return i
    }(t, i, s)
      , a = o.length
      , l = t => {
        let n = 0;
        if (a > 1)
            for (; n < e.length - 2 && !(t < e[n + 1]); n++)
                ;
        const i = Ea(e[n], e[n + 1], t);
        return o[n](i)
    }
    ;
    return n ? t => l(Gr(e[0], e[r - 1], t)) : l
}
function Ba(e) {
    const t = [0];
    return function(e, t) {
        const n = e[e.length - 1];
        for (let i = 1; i <= t; i++) {
            const s = Ea(0, t, i);
            e.push(ja(n, 1, s))
        }
    }(t, e.length - 1),
    t
}
function _a({duration: e=300, keyframes: t, times: n, ease: i="easeInOut"}) {
    const s = (e => Array.isArray(e) && "number" != typeof e[0])(i) ? i.map(wa) : wa(i)
      , r = {
        done: !1,
        value: t[0]
    }
      , o = function(e, t) {
        return e.map((e => e * t))
    }(n && n.length === t.length ? n : Ba(t), e)
      , a = za(o, t, {
        ease: Array.isArray(s) ? s : (l = t,
        c = s,
        l.map(( () => c || ya)).splice(0, l.length - 1))
    });
    var l, c;
    return {
        calculatedDuration: e,
        next: t => (r.value = a(t),
        r.done = t >= e,
        r)
    }
}
const Wa = e => {
    const t = ({timestamp: t}) => e(t);
    return {
        start: () => wr.update(t, !0),
        stop: () => Sr(t),
        now: () => Cr.isProcessing ? Cr.timestamp : na.now()
    }
}
  , Ha = {
    decay: fa,
    inertia: fa,
    tween: _a,
    keyframes: _a,
    spring: ma
}
  , $a = e => e / 100;
class Ua extends sa {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            "idle" === this.state)
                return;
            this.teardown();
            const {onStop: e} = this.options;
            e && e()
        }
        ;
        const {name: t, motionValue: n, element: i, keyframes: s} = this.options
          , r = (null == i ? void 0 : i.KeyframeResolver) || bo;
        this.resolver = new r(s,( (e, t) => this.onKeyframesResolved(e, t)),t,n,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(e) {
        const {type: t="keyframes", repeat: n=0, repeatDelay: i=0, repeatType: s, velocity: r=0} = this.options
          , o = Jo(t) ? t : Ha[t] || _a;
        let a, l;
        o !== _a && "number" != typeof e[0] && (a = Ca($a, Fa(e[0], e[1])),
        e = [0, 100]);
        const c = o({
            ...this.options,
            keyframes: e
        });
        "mirror" === s && (l = o({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -r
        })),
        null === c.calculatedDuration && (c.calculatedDuration = function(e) {
            let t = 0
              , n = e.next(t);
            for (; !n.done && t < 2e4; )
                t += 50,
                n = e.next(t);
            return t >= 2e4 ? 1 / 0 : t
        }(c));
        const {calculatedDuration: u} = c
          , d = u + i;
        return {
            generator: c,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - i
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
    }
    tick(e, t=!1) {
        const {resolved: n} = this;
        if (!n) {
            const {keyframes: e} = this.options;
            return {
                done: !0,
                value: e[e.length - 1]
            }
        }
        const {finalKeyframe: i, generator: s, mirroredGenerator: r, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: c, resolvedDuration: u} = n;
        if (null === this.startTime)
            return s.next(0);
        const {delay: d, repeat: h, repeatType: p, repeatDelay: m, onUpdate: f} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , v = this.speed >= 0 ? g < 0 : g > c;
        this.currentTime = Math.max(g, 0),
        "finished" === this.state && null === this.holdTime && (this.currentTime = c);
        let y = this.currentTime
          , x = s;
        if (h) {
            const e = Math.min(this.currentTime, c) / u;
            let t = Math.floor(e)
              , n = e % 1;
            !n && e >= 1 && (n = 1),
            1 === n && t--,
            t = Math.min(t, h + 1);
            Boolean(t % 2) && ("reverse" === p ? (n = 1 - n,
            m && (n -= m / u)) : "mirror" === p && (x = r)),
            y = Gr(0, 1, n) * u
        }
        const b = v ? {
            done: !1,
            value: a[0]
        } : x.next(y);
        o && (b.value = o(b.value));
        let {done: w} = b;
        v || null === l || (w = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const S = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
        return S && void 0 !== i && (b.value = vr(a, this.options, i)),
        f && f(b.value),
        S && this.finish(),
        b
    }
    get duration() {
        const {resolved: e} = this;
        return e ? cr(e.calculatedDuration) : 0
    }
    get time() {
        return cr(this.currentTime)
    }
    set time(e) {
        e = lr(e),
        this.currentTime = e,
        null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const t = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        t && (this.time = cr(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved)
            return void (this.pendingPlayState = "running");
        if (this.isStopped)
            return;
        const {driver: e=Wa, onPlay: t, startTime: n} = this.options;
        this.driver || (this.driver = e((e => this.tick(e)))),
        t && t();
        const i = this.driver.now();
        null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = i) : this.startTime = null != n ? n : this.calcStartTime(),
        "finished" === this.state && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        this._resolved ? (this.state = "paused",
        this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0) : this.pendingPlayState = "paused"
    }
    complete() {
        "running" !== this.state && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        null !== this.cancelTime && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const qa = new Set(["opacity", "clipPath", "filter", "transform"]);
function Ga(e) {
    let t;
    return () => (void 0 === t && (t = e()),
    t)
}
const Ya = {
    linearEasing: void 0
};
function Za(e, t) {
    const n = Ga(e);
    return () => {
        var e;
        return null !== (e = Ya[t]) && void 0 !== e ? e : n()
    }
}
const Xa = Za(( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch (vf) {
        return !1
    }
    return !0
}
), "linearEasing");
function Ka(e) {
    return Boolean("function" == typeof e && Xa() || !e || "string" == typeof e && (e in Ja || Xa()) || xa(e) || Array.isArray(e) && e.every(Ka))
}
const Qa = ([e,t,n,i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`
  , Ja = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Qa([0, .65, .55, 1]),
    circOut: Qa([.55, 0, 1, .45]),
    backIn: Qa([.31, .01, .66, -.59]),
    backOut: Qa([.33, 1.53, .69, .99])
};
function el(e, t) {
    return e ? "function" == typeof e && Xa() ? ( (e, t) => {
        let n = "";
        const i = Math.max(Math.round(t / 10), 2);
        for (let s = 0; s < i; s++)
            n += e(Ea(0, i - 1, s)) + ", ";
        return `linear(${n.substring(0, n.length - 2)})`
    }
    )(e, t) : xa(e) ? Qa(e) : Array.isArray(e) ? e.map((e => el(e, t) || Ja.easeOut)) : Ja[e] : void 0
}
function tl(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const nl = Ga(( () => Object.hasOwnProperty.call(Element.prototype, "animate")));
const il = {
    anticipate: Ar,
    backInOut: Nr,
    circInOut: Ir
};
class sl extends sa {
    constructor(e) {
        super(e);
        const {name: t, motionValue: n, element: i, keyframes: s} = this.options;
        this.resolver = new Qo(s,( (e, t) => this.onKeyframesResolved(e, t)),t,n,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, t) {
        var n;
        let {duration: i=300, times: s, ease: r, type: o, motionValue: a, name: l, startTime: c} = this.options;
        if (!(null === (n = a.owner) || void 0 === n ? void 0 : n.current))
            return !1;
        if ("string" == typeof r && Xa() && r in il && (r = il[r]),
        function(e) {
            return Jo(e.type) || "spring" === e.type || !Ka(e.ease)
        }(this.options)) {
            const {onComplete: t, onUpdate: n, motionValue: a, element: l, ...c} = this.options
              , u = function(e, t) {
                const n = new Ua({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0
                });
                let i = {
                    done: !1,
                    value: e[0]
                };
                const s = [];
                let r = 0;
                for (; !i.done && r < 2e4; )
                    i = n.sample(r),
                    s.push(i.value),
                    r += 10;
                return {
                    times: void 0,
                    keyframes: s,
                    duration: r - 10,
                    ease: "linear"
                }
            }(e, c);
            1 === (e = u.keyframes).length && (e[1] = e[0]),
            i = u.duration,
            s = u.times,
            r = u.ease,
            o = "keyframes"
        }
        const u = function(e, t, n, {delay: i=0, duration: s=300, repeat: r=0, repeatType: o="loop", ease: a, times: l}={}) {
            const c = {
                [t]: n
            };
            l && (c.offset = l);
            const u = el(a, s);
            return Array.isArray(u) && (c.easing = u),
            e.animate(c, {
                delay: i,
                duration: s,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal"
            })
        }(a.owner.current, l, e, {
            ...this.options,
            duration: i,
            times: s,
            ease: r
        });
        return u.startTime = null != c ? c : this.calcStartTime(),
        this.pendingTimeline ? (tl(u, this.pendingTimeline),
        this.pendingTimeline = void 0) : u.onfinish = () => {
            const {onComplete: n} = this.options;
            a.set(vr(e, this.options, t)),
            n && n(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: u,
            duration: i,
            times: s,
            type: o,
            ease: r,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: t} = e;
        return cr(t)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: t} = e;
        return cr(t.currentTime || 0)
    }
    set time(e) {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.currentTime = lr(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: t} = e;
        return t.playbackRate
    }
    set speed(e) {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: t} = e;
        return t.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: t} = e;
        return t.startTime
    }
    attachTimeline(e) {
        if (this._resolved) {
            const {resolved: t} = this;
            if (!t)
                return yr;
            const {animation: n} = t;
            tl(n, e)
        } else
            this.pendingTimeline = e;
        return yr
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: t} = e;
        "finished" === t.playState && this.updateFinishedPromise(),
        t.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: t} = e;
        t.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        "idle" === this.state)
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: t, keyframes: n, duration: i, type: s, ease: r, times: o} = e;
        if ("idle" === t.playState || "finished" === t.playState)
            return;
        if (this.time) {
            const {motionValue: e, onUpdate: t, onComplete: a, element: l, ...c} = this.options
              , u = new Ua({
                ...c,
                keyframes: n,
                duration: i,
                type: s,
                ease: r,
                times: o,
                isGenerator: !0
            })
              , d = lr(this.time);
            e.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: t, name: n, repeatDelay: i, repeatType: s, damping: r, type: o} = e;
        return nl() && n && qa.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !i && "mirror" !== s && 0 !== r && "inertia" !== o
    }
}
const rl = Ga(( () => void 0 !== window.ScrollTimeline));
class ol {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    then(e, t) {
        return Promise.all(this.animations).then(e).catch(t)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, t) {
        for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t
    }
    attachTimeline(e, t) {
        const n = this.animations.map((n => rl() && n.attachTimeline ? n.attachTimeline(e) : t(n)));
        return () => {
            n.forEach(( (e, t) => {
                e && e(),
                this.animations[t].stop()
            }
            ))
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach((t => t[e]()))
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
const al = (e, t, n, i={}, s, r) => o => {
    const a = mr(i, e) || {}
      , l = a.delay || i.delay || 0;
    let {elapsed: c=0} = i;
    c -= lr(l);
    let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: e => {
            t.set(e),
            a.onUpdate && a.onUpdate(e)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: r ? void 0 : s
    };
    (function({when: e, delay: t, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u}) {
        return !!Object.keys(u).length
    }
    )(a) || (u = {
        ...u,
        ...pr(e, u)
    }),
    u.duration && (u.duration = lr(u.duration)),
    u.repeatDelay && (u.repeatDelay = lr(u.repeatDelay)),
    void 0 !== u.from && (u.keyframes[0] = u.from);
    let d = !1;
    if ((!1 === u.type || 0 === u.duration && !u.repeatDelay) && (u.duration = 0,
    0 === u.delay && (d = !0)),
    d && !r && void 0 !== t.get()) {
        const e = vr(u.keyframes, a);
        if (void 0 !== e)
            return wr.update(( () => {
                u.onUpdate(e),
                u.onComplete()
            }
            )),
            new ol([])
    }
    return !r && sl.supports(u) ? new sl(u) : new Ua(u)
}
;
function ll(e, t) {
    -1 === e.indexOf(t) && e.push(t)
}
function cl(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class ul {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return ll(this.subscriptions, e),
        () => cl(this.subscriptions, e)
    }
    notify(e, t, n) {
        const i = this.subscriptions.length;
        if (i)
            if (1 === i)
                this.subscriptions[0](e, t, n);
            else
                for (let s = 0; s < i; s++) {
                    const i = this.subscriptions[s];
                    i && i(e, t, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const dl = {
    current: void 0
};
class hl {
    constructor(e, t={}) {
        this.version = "11.11.11",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (e, t=!0) => {
            const n = na.now();
            this.updatedAt !== n && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(e),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = t.owner
    }
    setCurrent(e) {
        var t;
        this.current = e,
        this.updatedAt = na.now(),
        null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = (t = this.current,
        !isNaN(parseFloat(t))))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, t) {
        this.events[e] || (this.events[e] = new ul);
        const n = this.events[e].add(t);
        return "change" === e ? () => {
            n(),
            wr.read(( () => {
                this.events.change.getSize() || this.stop()
            }
            ))
        }
        : n
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, t) {
        this.passiveEffect = e,
        this.stopPassiveEffect = t
    }
    set(e, t=!0) {
        t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
    }
    setWithVelocity(e, t, n) {
        this.set(t),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - n
    }
    jump(e, t=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return dl.current && dl.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = na.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30)
            return 0;
        const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return ra(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }
    start(e) {
        return this.stop(),
        new Promise((t => {
            this.hasAnimated = !0,
            this.animation = e(t),
            this.events.animationStart && this.events.animationStart.notify()
        }
        )).then(( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        ))
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function pl(e, t) {
    return new hl(e,t)
}
function ml(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pl(n))
}
const fl = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , gl = "data-" + fl("framerAppearId");
function vl(e) {
    return e.props[gl]
}
const yl = e => Boolean(e && e.getVelocity);
function xl(e, t) {
    const n = e.getValue("willChange");
    if (i = n,
    Boolean(yl(i) && i.add))
        return n.add(t);
    var i
}
function bl({protectedKeys: e, needsAnimating: t}, n) {
    const i = e.hasOwnProperty(n) && !0 !== t[n];
    return t[n] = !1,
    i
}
function wl(e, t, {delay: n=0, transitionOverride: i, type: s}={}) {
    var r;
    let {transition: o=e.getDefaultTransition(), transitionEnd: a, ...l} = t;
    i && (o = i);
    const c = []
      , u = s && e.animationState && e.animationState.getState()[s];
    for (const d in l) {
        const t = e.getValue(d, null !== (r = e.latestValues[d]) && void 0 !== r ? r : null)
          , i = l[d];
        if (void 0 === i || u && bl(u, d))
            continue;
        const s = {
            delay: n,
            ...mr(o || {}, d)
        };
        let a = !1;
        if (window.MotionHandoffAnimation) {
            const t = vl(e);
            if (t) {
                const e = window.MotionHandoffAnimation(t, d, wr);
                null !== e && (s.startTime = e,
                a = !0)
            }
        }
        xl(e, d),
        t.start(al(d, t, i, e.shouldReduceMotion && ar.has(d) ? {
            type: !1
        } : s, e, a));
        const h = t.animation;
        h && c.push(h)
    }
    return a && Promise.all(c).then(( () => {
        wr.update(( () => {
            a && function(e, t) {
                const n = ir(e, t);
                let {transitionEnd: i={}, transition: s={}, ...r} = n || {};
                r = {
                    ...r,
                    ...i
                };
                for (const a in r)
                    ml(e, a, (o = r[a],
                    Qs(o) ? o[o.length - 1] || 0 : o));
                var o
            }(e, a)
        }
        ))
    }
    )),
    c
}
function Sl(e, t, n={}) {
    var i;
    const s = ir(e, t, "exit" === n.type ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
    let {transition: r=e.getDefaultTransition() || {}} = s || {};
    n.transitionOverride && (r = n.transitionOverride);
    const o = s ? () => Promise.all(wl(e, s, n)) : () => Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (i=0) => {
        const {delayChildren: s=0, staggerChildren: o, staggerDirection: a} = r;
        return function(e, t, n=0, i=0, s=1, r) {
            const o = []
              , a = (e.variantChildren.size - 1) * i
              , l = 1 === s ? (e=0) => e * i : (e=0) => a - e * i;
            return Array.from(e.variantChildren).sort(Cl).forEach(( (e, i) => {
                e.notify("AnimationStart", t),
                o.push(Sl(e, t, {
                    ...r,
                    delay: n + l(i)
                }).then(( () => e.notify("AnimationComplete", t))))
            }
            )),
            Promise.all(o)
        }(e, t, s + i, o, a, n)
    }
    : () => Promise.resolve()
      , {when: l} = r;
    if (l) {
        const [e,t] = "beforeChildren" === l ? [o, a] : [a, o];
        return e().then(( () => t()))
    }
    return Promise.all([o(), a(n.delay)])
}
function Cl(e, t) {
    return e.sortNodePosition(t)
}
const El = rr.length;
function jl(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const t = e.parent && jl(e.parent) || {};
        return void 0 !== e.props.initial && (t.initial = e.props.initial),
        t
    }
    const t = {};
    for (let n = 0; n < El; n++) {
        const i = rr[n]
          , s = e.props[i];
        (er(s) || !1 === s) && (t[i] = s)
    }
    return t
}
const Tl = [...sr].reverse()
  , kl = sr.length;
function Pl(e) {
    return t => Promise.all(t.map(( ({animation: t, options: n}) => function(e, t, n={}) {
        let i;
        if (e.notify("AnimationStart", t),
        Array.isArray(t)) {
            const s = t.map((t => Sl(e, t, n)));
            i = Promise.all(s)
        } else if ("string" == typeof t)
            i = Sl(e, t, n);
        else {
            const s = "function" == typeof t ? ir(e, t, n.custom) : t;
            i = Promise.all(wl(e, s, n))
        }
        return i.then(( () => {
            e.notify("AnimationComplete", t)
        }
        ))
    }(e, t, n))))
}
function Rl(e) {
    let t = Pl(e)
      , n = Al()
      , i = !0;
    const s = t => (n, i) => {
        var s;
        const r = ir(e, i, "exit" === t ? null === (s = e.presenceContext) || void 0 === s ? void 0 : s.custom : void 0);
        if (r) {
            const {transition: e, transitionEnd: t, ...i} = r;
            n = {
                ...n,
                ...i,
                ...t
            }
        }
        return n
    }
    ;
    function r(r) {
        const {props: o} = e
          , a = jl(e.parent) || {}
          , l = []
          , c = new Set;
        let u = {}
          , d = 1 / 0;
        for (let t = 0; t < kl; t++) {
            const h = Tl[t]
              , p = n[h]
              , m = void 0 !== o[h] ? o[h] : a[h]
              , f = er(m)
              , g = h === r ? p.isActive : null;
            !1 === g && (d = t);
            let v = m === a[h] && m !== o[h] && f;
            if (v && i && e.manuallyAnimateOnMount && (v = !1),
            p.protectedKeys = {
                ...u
            },
            !p.isActive && null === g || !m && !p.prevProp || Ks(m) || "boolean" == typeof m)
                continue;
            const y = Ml(p.prevProp, m);
            let x = y || h === r && p.isActive && !v && f || t > d && f
              , b = !1;
            const w = Array.isArray(m) ? m : [m];
            let S = w.reduce(s(h), {});
            !1 === g && (S = {});
            const {prevResolvedValues: C={}} = p
              , E = {
                ...C,
                ...S
            }
              , j = t => {
                x = !0,
                c.has(t) && (b = !0,
                c.delete(t)),
                p.needsAnimating[t] = !0;
                const n = e.getValue(t);
                n && (n.liveStyle = !1)
            }
            ;
            for (const e in E) {
                const t = S[e]
                  , n = C[e];
                if (u.hasOwnProperty(e))
                    continue;
                let i = !1;
                i = Qs(t) && Qs(n) ? !Js(t, n) : t !== n,
                i ? null != t ? j(e) : c.add(e) : void 0 !== t && c.has(e) ? j(e) : p.protectedKeys[e] = !0
            }
            p.prevProp = m,
            p.prevResolvedValues = S,
            p.isActive && (u = {
                ...u,
                ...S
            }),
            i && e.blockInitialAnimation && (x = !1);
            x && (!(v && y) || b) && l.push(...w.map((e => ({
                animation: e,
                options: {
                    type: h
                }
            }))))
        }
        if (c.size) {
            const t = {};
            c.forEach((n => {
                const i = e.getBaseTarget(n)
                  , s = e.getValue(n);
                s && (s.liveStyle = !0),
                t[n] = null != i ? i : null
            }
            )),
            l.push({
                animation: t
            })
        }
        let h = Boolean(l.length);
        return !i || !1 !== o.initial && o.initial !== o.animate || e.manuallyAnimateOnMount || (h = !1),
        i = !1,
        h ? t(l) : Promise.resolve()
    }
    return {
        animateChanges: r,
        setActive: function(t, i) {
            var s;
            if (n[t].isActive === i)
                return Promise.resolve();
            null === (s = e.variantChildren) || void 0 === s || s.forEach((e => {
                var n;
                return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, i)
            }
            )),
            n[t].isActive = i;
            const o = r(t);
            for (const e in n)
                n[e].protectedKeys = {};
            return o
        },
        setAnimateFunction: function(n) {
            t = n(e)
        },
        getState: () => n,
        reset: () => {
            n = Al(),
            i = !0
        }
    }
}
function Ml(e, t) {
    return "string" == typeof t ? t !== e : !!Array.isArray(t) && !Js(t, e)
}
function Nl(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Al() {
    return {
        animate: Nl(!0),
        whileInView: Nl(),
        whileHover: Nl(),
        whileTap: Nl(),
        whileDrag: Nl(),
        whileFocus: Nl(),
        exit: Nl()
    }
}
class Ll {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
let Dl = 0;
const Il = {
    animation: {
        Feature: class extends Ll {
            constructor(e) {
                super(e),
                e.animationState || (e.animationState = Rl(e))
            }
            updateAnimationControlsSubscription() {
                const {animate: e} = this.node.getProps();
                Ks(e) && (this.unmountControls = e.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                const {animate: e} = this.node.getProps()
                  , {animate: t} = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var e;
                this.node.animationState.reset(),
                null === (e = this.unmountControls) || void 0 === e || e.call(this)
            }
        }
    },
    exit: {
        Feature: class extends Ll {
            constructor() {
                super(...arguments),
                this.id = Dl++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                const {isPresent: e, onExitComplete: t} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n)
                    return;
                const i = this.node.animationState.setActive("exit", !e);
                t && !e && i.then(( () => t(this.id)))
            }
            mount() {
                const {register: e} = this.node.presenceContext || {};
                e && (this.unmount = e(this.id))
            }
            unmount() {}
        }
    }
}
  , Ol = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
function Vl(e, t="page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
function Fl(e, t, n, i={
    passive: !0
}) {
    return e.addEventListener(t, n, i),
    () => e.removeEventListener(t, n)
}
function zl(e, t, n, i) {
    return Fl(e, t, (e => t => Ol(t) && e(t, Vl(t)))(n), i)
}
const Bl = (e, t) => Math.abs(e - t);
class _l {
    constructor(e, t, {transformPagePoint: n, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                return;
            const e = $l(this.lastMoveEventInfo, this.history)
              , t = null !== this.startEvent
              , n = function(e, t) {
                const n = Bl(e.x, t.x)
                  , i = Bl(e.y, t.y);
                return Math.sqrt(n ** 2 + i ** 2)
            }(e.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!t && !n)
                return;
            const {point: i} = e
              , {timestamp: s} = Cr;
            this.history.push({
                ...i,
                timestamp: s
            });
            const {onStart: r, onMove: o} = this.handlers;
            t || (r && r(this.lastMoveEvent, e),
            this.startEvent = this.lastMoveEvent),
            o && o(this.lastMoveEvent, e)
        }
        ,
        this.handlePointerMove = (e, t) => {
            this.lastMoveEvent = e,
            this.lastMoveEventInfo = Wl(t, this.transformPagePoint),
            wr.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (e, t) => {
            this.end();
            const {onEnd: n, onSessionEnd: i, resumeAnimation: s} = this.handlers;
            if (this.dragSnapToOrigin && s && s(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
                return;
            const r = $l("pointercancel" === e.type ? this.lastMoveEventInfo : Wl(t, this.transformPagePoint), this.history);
            this.startEvent && n && n(e, r),
            i && i(e, r)
        }
        ,
        !Ol(e))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = t,
        this.transformPagePoint = n,
        this.contextWindow = i || window;
        const r = Wl(Vl(e), this.transformPagePoint)
          , {point: o} = r
          , {timestamp: a} = Cr;
        this.history = [{
            ...o,
            timestamp: a
        }];
        const {onSessionStart: l} = t;
        l && l(e, $l(r, this.history)),
        this.removeListeners = Ca(zl(this.contextWindow, "pointermove", this.handlePointerMove), zl(this.contextWindow, "pointerup", this.handlePointerUp), zl(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Sr(this.updatePoint)
    }
}
function Wl(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Hl(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function $l({point: e}, t) {
    return {
        point: e,
        delta: Hl(e, ql(t)),
        offset: Hl(e, Ul(t)),
        velocity: Gl(t, .1)
    }
}
function Ul(e) {
    return e[0]
}
function ql(e) {
    return e[e.length - 1]
}
function Gl(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , i = null;
    const s = ql(e);
    for (; n >= 0 && (i = e[n],
    !(s.timestamp - i.timestamp > lr(t))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const r = cr(s.timestamp - i.timestamp);
    if (0 === r)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (s.x - i.x) / r,
        y: (s.y - i.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function Yl(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return null === t && (t = e,
        n)
    }
}
const Zl = Yl("dragHorizontal")
  , Xl = Yl("dragVertical");
function Kl(e) {
    let t = !1;
    if ("y" === e)
        t = Xl();
    else if ("x" === e)
        t = Zl();
    else {
        const e = Zl()
          , n = Xl();
        e && n ? t = () => {
            e(),
            n()
        }
        : (e && e(),
        n && n())
    }
    return t
}
function Ql() {
    const e = Kl(!0);
    return !e || (e(),
    !1)
}
function Jl(e) {
    return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
}
function ec(e) {
    return e.max - e.min
}
function tc(e, t, n, i=.5) {
    e.origin = i,
    e.originPoint = ja(t.min, t.max, e.origin),
    e.scale = ec(n) / ec(t),
    e.translate = ja(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
}
function nc(e, t, n, i) {
    tc(e.x, t.x, n.x, i ? i.originX : void 0),
    tc(e.y, t.y, n.y, i ? i.originY : void 0)
}
function ic(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + ec(t)
}
function sc(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + ec(t)
}
function rc(e, t, n) {
    sc(e.x, t.x, n.x),
    sc(e.y, t.y, n.y)
}
function oc(e, t, n) {
    return {
        min: void 0 !== t ? e.min + t : void 0,
        max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
    }
}
function ac(e, t) {
    let n = t.min - e.min
      , i = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
const lc = .35;
function cc(e, t, n) {
    return {
        min: uc(e, t),
        max: uc(e, n)
    }
}
function uc(e, t) {
    return "number" == typeof e ? e : e[t] || 0
}
const dc = () => ({
    x: {
        min: 0,
        max: 0
    },
    y: {
        min: 0,
        max: 0
    }
});
function hc(e) {
    return [e("x"), e("y")]
}
function pc({top: e, left: t, right: n, bottom: i}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: i
        }
    }
}
function mc(e) {
    return void 0 === e || 1 === e
}
function fc({scale: e, scaleX: t, scaleY: n}) {
    return !mc(e) || !mc(t) || !mc(n)
}
function gc(e) {
    return fc(e) || vc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function vc(e) {
    return yc(e.x) || yc(e.y)
}
function yc(e) {
    return e && "0%" !== e
}
function xc(e, t, n) {
    return n + t * (e - n)
}
function bc(e, t, n, i, s) {
    return void 0 !== s && (e = xc(e, s, i)),
    xc(e, n, i) + t
}
function wc(e, t=0, n=1, i, s) {
    e.min = bc(e.min, t, n, i, s),
    e.max = bc(e.max, t, n, i, s)
}
function Sc(e, {x: t, y: n}) {
    wc(e.x, t.translate, t.scale, t.originPoint),
    wc(e.y, n.translate, n.scale, n.originPoint)
}
const Cc = .999999999999
  , Ec = 1.0000000000001;
function jc(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Tc(e, t, n, i, s=.5) {
    wc(e, t, n, ja(e.min, e.max, s), i)
}
function kc(e, t) {
    Tc(e.x, t.x, t.scaleX, t.scale, t.originX),
    Tc(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Pc(e, t) {
    return pc(function(e, t) {
        if (!t)
            return e;
        const n = t({
            x: e.left,
            y: e.top
        })
          , i = t({
            x: e.right,
            y: e.bottom
        });
        return {
            top: n.y,
            left: n.x,
            bottom: i.y,
            right: i.x
        }
    }(e.getBoundingClientRect(), t))
}
const Rc = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Mc = new WeakMap;
class Nc {
    constructor(e) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        },
        this.visualElement = e
    }
    start(e, {snapToCursor: t=!1}={}) {
        const {presenceContext: n} = this.visualElement;
        if (n && !1 === n.isPresent)
            return;
        const {dragSnapToOrigin: i} = this.getProps();
        this.panSession = new _l(e,{
            onSessionStart: e => {
                const {dragSnapToOrigin: n} = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                t && this.snapToCursor(Vl(e, "page").point)
            }
            ,
            onStart: (e, t) => {
                const {drag: n, dragPropagation: i, onDragStart: s} = this.getProps();
                if (n && !i && (this.openGlobalLock && this.openGlobalLock(),
                this.openGlobalLock = Kl(n),
                !this.openGlobalLock))
                    return;
                this.isDragging = !0,
                this.currentDirection = null,
                this.resolveConstraints(),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                this.visualElement.projection.target = void 0),
                hc((e => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (Jr.test(t)) {
                        const {projection: n} = this.visualElement;
                        if (n && n.layout) {
                            const i = n.layout.layoutBox[e];
                            if (i) {
                                t = ec(i) * (parseFloat(t) / 100)
                            }
                        }
                    }
                    this.originPoint[e] = t
                }
                )),
                s && wr.postRender(( () => s(e, t))),
                xl(this.visualElement, "transform");
                const {animationState: r} = this.visualElement;
                r && r.setActive("whileDrag", !0)
            }
            ,
            onMove: (e, t) => {
                const {dragPropagation: n, dragDirectionLock: i, onDirectionLock: s, onDrag: r} = this.getProps();
                if (!n && !this.openGlobalLock)
                    return;
                const {offset: o} = t;
                if (i && null === this.currentDirection)
                    return this.currentDirection = function(e, t=10) {
                        let n = null;
                        Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                        return n
                    }(o),
                    void (null !== this.currentDirection && s && s(this.currentDirection));
                this.updateAxis("x", t.point, o),
                this.updateAxis("y", t.point, o),
                this.visualElement.render(),
                r && r(e, t)
            }
            ,
            onSessionEnd: (e, t) => this.stop(e, t),
            resumeAnimation: () => hc((e => {
                var t;
                return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
            }
            ))
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: i,
            contextWindow: Rc(this.visualElement)
        })
    }
    stop(e, t) {
        const n = this.isDragging;
        if (this.cancel(),
        !n)
            return;
        const {velocity: i} = t;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && wr.postRender(( () => s(e, t)))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: t} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        t && t.setActive("whileDrag", !1)
    }
    updateAxis(e, t, n) {
        const {drag: i} = this.getProps();
        if (!n || !Ac(e, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + n[e];
        this.constraints && this.constraints[e] && (r = function(e, {min: t, max: n}, i) {
            return void 0 !== t && e < t ? e = i ? ja(t, e, i.min) : Math.max(e, t) : void 0 !== n && e > n && (e = i ? ja(n, e, i.max) : Math.min(e, n)),
            e
        }(r, this.constraints[e], this.elastic[e])),
        s.set(r)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout
          , s = this.constraints;
        t && Jl(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !i) && function(e, {top: t, left: n, bottom: i, right: s}) {
            return {
                x: oc(e.x, n, s),
                y: oc(e.y, t, i)
            }
        }(i.layoutBox, t),
        this.elastic = function(e=lc) {
            return !1 === e ? e = 0 : !0 === e && (e = lc),
            {
                x: cc(e, "left", "right"),
                y: cc(e, "top", "bottom")
            }
        }(n),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && hc((e => {
            !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                const n = {};
                return void 0 !== t.min && (n.min = t.min - e.min),
                void 0 !== t.max && (n.max = t.max - e.min),
                n
            }(i.layoutBox[e], this.constraints[e]))
        }
        ))
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
        if (!e || !Jl(e))
            return !1;
        const n = e.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = function(e, t, n) {
            const i = Pc(e, n)
              , {scroll: s} = t;
            return s && (jc(i.x, s.offset.x),
            jc(i.y, s.offset.y)),
            i
        }(n, i.root, this.visualElement.getTransformPagePoint());
        let r = function(e, t) {
            return {
                x: ac(e.x, t.x),
                y: ac(e.y, t.y)
            }
        }(i.layout.layoutBox, s);
        if (t) {
            const e = t(function({x: e, y: t}) {
                return {
                    top: t.min,
                    right: e.max,
                    bottom: t.max,
                    left: e.min
                }
            }(r));
            this.hasMutatedConstraints = !!e,
            e && (r = pc(e))
        }
        return r
    }
    startAnimation(e) {
        const {drag: t, dragMomentum: n, dragElastic: i, dragTransition: s, dragSnapToOrigin: r, onDragTransitionEnd: o} = this.getProps()
          , a = this.constraints || {}
          , l = hc((o => {
            if (!Ac(o, t, this.currentDirection))
                return;
            let l = a && a[o] || {};
            r && (l = {
                min: 0,
                max: 0
            });
            const c = i ? 200 : 1e6
              , u = i ? 40 : 1e7
              , d = {
                type: "inertia",
                velocity: n ? e[o] : 0,
                bounceStiffness: c,
                bounceDamping: u,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l
            };
            return this.startAxisValueAnimation(o, d)
        }
        ));
        return Promise.all(l).then(o)
    }
    startAxisValueAnimation(e, t) {
        const n = this.getAxisMotionValue(e);
        return xl(this.visualElement, e),
        n.start(al(e, n, 0, t, this.visualElement, !1))
    }
    stopAnimation() {
        hc((e => this.getAxisMotionValue(e).stop()))
    }
    pauseAnimation() {
        hc((e => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
        }
        ))
    }
    getAnimationState(e) {
        var t;
        return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
    }
    getAxisMotionValue(e) {
        const t = `_drag${e.toUpperCase()}`
          , n = this.visualElement.getProps()
          , i = n[t];
        return i || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        hc((t => {
            const {drag: n} = this.getProps();
            if (!Ac(t, n, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(t);
            if (i && i.layout) {
                const {min: n, max: r} = i.layout.layoutBox[t];
                s.set(e[t] - ja(n, r, .5))
            }
        }
        ))
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: t} = this.getProps()
          , {projection: n} = this.visualElement;
        if (!Jl(t) || !n || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        hc((e => {
            const t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
                const n = t.get();
                i[e] = function(e, t) {
                    let n = .5;
                    const i = ec(e)
                      , s = ec(t);
                    return s > i ? n = Ea(t.min, t.max - i, e.min) : i > s && (n = Ea(e.min, e.max - s, t.min)),
                    Gr(0, 1, n)
                }({
                    min: n,
                    max: n
                }, this.constraints[e])
            }
        }
        ));
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        hc((t => {
            if (!Ac(t, e, null))
                return;
            const n = this.getAxisMotionValue(t)
              , {min: s, max: r} = this.constraints[t];
            n.set(ja(s, r, i[t]))
        }
        ))
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Mc.set(this.visualElement, this);
        const e = zl(this.visualElement.current, "pointerdown", (e => {
            const {drag: t, dragListener: n=!0} = this.getProps();
            t && n && this.start(e)
        }
        ))
          , t = () => {
            const {dragConstraints: e} = this.getProps();
            Jl(e) && e.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: n} = this.visualElement
          , i = n.addEventListener("measure", t);
        n && !n.layout && (n.root && n.root.updateScroll(),
        n.updateLayout()),
        wr.read(t);
        const s = Fl(window, "resize", ( () => this.scalePositionWithinConstraints()))
          , r = n.addEventListener("didUpdate", ( ({delta: e, hasLayoutChanged: t}) => {
            this.isDragging && t && (hc((t => {
                const n = this.getAxisMotionValue(t);
                n && (this.originPoint[t] += e[t].translate,
                n.set(n.get() + e[t].translate))
            }
            )),
            this.visualElement.render())
        }
        ));
        return () => {
            s(),
            e(),
            i(),
            r && r()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: t=!1, dragDirectionLock: n=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: r=lc, dragMomentum: o=!0} = e;
        return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o
        }
    }
}
function Ac(e, t, n) {
    return !(!0 !== t && t !== e || null !== n && n !== e)
}
const Lc = e => (t, n) => {
    e && wr.postRender(( () => e(t, n)))
}
;
const Dc = s.createContext(null);
const Ic = s.createContext({})
  , Oc = s.createContext({})
  , Vc = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Fc(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const zc = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if ("string" == typeof e) {
            if (!eo.test(e))
                return e;
            e = parseFloat(e)
        }
        return `${Fc(e, t.target.x)}% ${Fc(e, t.target.y)}%`
    }
}
  , Bc = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const i = e
          , s = zo.parse(e);
        if (s.length > 5)
            return i;
        const r = zo.createTransformer(e)
          , o = "number" != typeof s[0] ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        s[0 + o] /= a,
        s[1 + o] /= l;
        const c = ja(a, l, .5);
        return "number" == typeof s[2 + o] && (s[2 + o] /= c),
        "number" == typeof s[3 + o] && (s[3 + o] /= c),
        r(s)
    }
}
  , _c = {};
const {schedule: Wc, cancel: Hc} = br(queueMicrotask, !1);
class $c extends s.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: i} = this.props
          , {projection: s} = e;
        var r;
        r = qc,
        Object.assign(_c, r),
        s && (t.group && t.group.add(s),
        n && n.register && i && n.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", ( () => {
            this.safeToRemove()
        }
        )),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Vc.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: t, visualElement: n, drag: i, isPresent: s} = this.props
          , r = n.projection;
        return r ? (r.isPresent = s,
        i || e.layoutDependency !== t || void 0 === t ? r.willUpdate() : this.safeToRemove(),
        e.isPresent !== s && (s ? r.promote() : r.relegate() || wr.postRender(( () => {
            const e = r.getStack();
            e && e.members.length || this.safeToRemove()
        }
        ))),
        null) : null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        Wc.postRender(( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        )))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props
          , {projection: i} = e;
        i && (i.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(i),
        n && n.deregister && n.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function Uc(e) {
    const [t,n] = function() {
        const e = s.useContext(Dc);
        if (null === e)
            return [!0, null];
        const {isPresent: t, onExitComplete: n, register: i} = e
          , r = s.useId();
        s.useEffect(( () => i(r)), []);
        const o = s.useCallback(( () => n && n(r)), [r, n]);
        return !t && n ? [!1, o] : [!0]
    }()
      , i = s.useContext(Ic);
    return b.jsx($c, {
        ...e,
        layoutGroup: i,
        switchLayoutGroup: s.useContext(Oc),
        isPresent: t,
        safeToRemove: n
    })
}
const qc = {
    borderRadius: {
        ...zc,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: zc,
    borderTopRightRadius: zc,
    borderBottomLeftRadius: zc,
    borderBottomRightRadius: zc,
    boxShadow: Bc
}
  , Gc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Yc = Gc.length
  , Zc = e => "string" == typeof e ? parseFloat(e) : e
  , Xc = e => "number" == typeof e || eo.test(e);
function Kc(e, t) {
    return void 0 !== e[t] ? e[t] : e.borderRadius
}
const Qc = eu(0, .5, Dr)
  , Jc = eu(.5, .95, yr);
function eu(e, t, n) {
    return i => i < e ? 0 : i > t ? 1 : n(Ea(e, t, i))
}
function tu(e, t) {
    e.min = t.min,
    e.max = t.max
}
function nu(e, t) {
    tu(e.x, t.x),
    tu(e.y, t.y)
}
function iu(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function su(e, t, n, i, s) {
    return e = xc(e -= t, 1 / n, i),
    void 0 !== s && (e = xc(e, 1 / s, i)),
    e
}
function ru(e, t, [n,i,s], r, o) {
    !function(e, t=0, n=1, i=.5, s, r=e, o=e) {
        Jr.test(t) && (t = parseFloat(t),
        t = ja(o.min, o.max, t / 100) - o.min);
        if ("number" != typeof t)
            return;
        let a = ja(r.min, r.max, i);
        e === r && (a -= t),
        e.min = su(e.min, t, n, a, s),
        e.max = su(e.max, t, n, a, s)
    }(e, t[n], t[i], t[s], t.scale, r, o)
}
const ou = ["x", "scaleX", "originX"]
  , au = ["y", "scaleY", "originY"];
function lu(e, t, n, i) {
    ru(e.x, t, ou, n ? n.x : void 0, i ? i.x : void 0),
    ru(e.y, t, au, n ? n.y : void 0, i ? i.y : void 0)
}
function cu(e) {
    return 0 === e.translate && 1 === e.scale
}
function uu(e) {
    return cu(e.x) && cu(e.y)
}
function du(e, t) {
    return e.min === t.min && e.max === t.max
}
function hu(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function pu(e, t) {
    return hu(e.x, t.x) && hu(e.y, t.y)
}
function mu(e) {
    return ec(e.x) / ec(e.y)
}
function fu(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class gu {
    constructor() {
        this.members = []
    }
    add(e) {
        ll(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (cl(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const e = this.members[this.members.length - 1];
            e && this.promote(e)
        }
    }
    relegate(e) {
        const t = this.members.findIndex((t => e === t));
        if (0 === t)
            return !1;
        let n;
        for (let i = t; i >= 0; i--) {
            const e = this.members[i];
            if (!1 !== e.isPresent) {
                n = e;
                break
            }
        }
        return !!n && (this.promote(n),
        !0)
    }
    promote(e, t) {
        const n = this.lead;
        if (e !== n && (this.prevLead = n,
        this.lead = e,
        e.show(),
        n)) {
            n.instance && n.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = n,
            t && (e.resumeFrom.preserveOpacity = !0),
            n.snapshot && (e.snapshot = n.snapshot,
            e.snapshot.latestValues = n.animationValues || n.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: i} = e.options;
            !1 === i && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach((e => {
            const {options: t, resumingFrom: n} = e;
            t.onExitComplete && t.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete()
        }
        ))
    }
    scheduleRender() {
        this.members.forEach((e => {
            e.instance && e.scheduleRender(!1)
        }
        ))
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const vu = (e, t) => e.depth - t.depth;
class yu {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        ll(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        cl(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(vu),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function xu(e) {
    const t = yl(e) ? e.get() : e;
    return n = t,
    Boolean(n && "object" == typeof n && n.mix && n.toValue) ? t.toValue() : t;
    var n
}
const bu = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , wu = "undefined" != typeof window && void 0 !== window.MotionDebug
  , Su = ["", "X", "Y", "Z"]
  , Cu = {
    visibility: "hidden"
};
let Eu = 0;
function ju(e, t, n, i) {
    const {latestValues: s} = t;
    s[e] && (n[e] = s[e],
    t.setStaticValue(e, 0),
    i && (i[e] = 0))
}
function Tu(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = vl(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: t, layoutId: i} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", wr, !(t || i))
    }
    const {parent: i} = e;
    i && !i.hasCheckedOptimisedAppear && Tu(i)
}
function ku({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: i, resetTransform: s}) {
    return class {
        constructor(e={}, n=(null == t ? void 0 : t())) {
            this.id = Eu++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                wu && (bu.totalNodes = bu.resolvedTargetDeltas = bu.recalculatedProjection = 0),
                this.nodes.forEach(Mu),
                this.nodes.forEach(Vu),
                this.nodes.forEach(Fu),
                this.nodes.forEach(Nu),
                wu && window.MotionDebug.record(bu)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = e,
            this.root = n ? n.root || n : this,
            this.path = n ? [...n.path, n] : [],
            this.parent = n,
            this.depth = n ? n.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++)
                this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new yu)
        }
        addEventListener(e, t) {
            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new ul),
            this.eventHandlers.get(e).add(t)
        }
        notifyListeners(e, ...t) {
            const n = this.eventHandlers.get(e);
            n && n.notify(...t)
        }
        hasListeners(e) {
            return this.eventHandlers.has(e)
        }
        mount(t, n=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            var i;
            this.isSVG = (i = t)instanceof SVGElement && "svg" !== i.tagName,
            this.instance = t;
            const {layoutId: s, layout: r, visualElement: o} = this.options;
            if (o && !o.current && o.mount(t),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            n && (r || s) && (this.isLayoutDirty = !0),
            e) {
                let n;
                const i = () => this.root.updateBlockedByResize = !1;
                e(t, ( () => {
                    this.root.updateBlockedByResize = !0,
                    n && n(),
                    n = function(e, t) {
                        const n = na.now()
                          , i = ({timestamp: s}) => {
                            const r = s - n;
                            r >= t && (Sr(i),
                            e(r - t))
                        }
                        ;
                        return wr.read(i, !0),
                        () => Sr(i)
                    }(i, 250),
                    Vc.hasAnimatedSinceResize && (Vc.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ou))
                }
                ))
            }
            s && this.root.registerSharedNode(s, this),
            !1 !== this.options.animate && o && (s || r) && this.addEventListener("didUpdate", ( ({delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: i}) => {
                if (this.isTreeAnimationBlocked())
                    return this.target = void 0,
                    void (this.relativeTarget = void 0);
                const s = this.options.transition || o.getDefaultTransition() || $u
                  , {onLayoutAnimationStart: r, onLayoutAnimationComplete: a} = o.getProps()
                  , l = !this.targetLayout || !pu(this.targetLayout, i) || n
                  , c = !t && n;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || c || t && (l || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(e, c);
                    const t = {
                        ...mr(s, "layout"),
                        onPlay: r,
                        onComplete: a
                    };
                    (o.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0,
                    t.type = !1),
                    this.startAnimation(t)
                } else
                    t || Ou(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = i
            }
            ))
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const e = this.getStack();
            e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Sr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(zu),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: e} = this.options;
            return e && e.getProps().transformTemplate
        }
        willUpdate(e=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked())
                return void (this.options.onExitComplete && this.options.onExitComplete());
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tu(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let s = 0; s < this.path.length; s++) {
                const e = this.path[s];
                e.shouldResetTransform = !0,
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1)
            }
            const {layoutId: t, layout: n} = this.options;
            if (void 0 === t && !n)
                return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            e && this.notifyListeners("willUpdate")
        }
        update() {
            this.updateScheduled = !1;
            if (this.isUpdateBlocked())
                return this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(Lu);
            this.isUpdating || this.nodes.forEach(Du),
            this.isUpdating = !1,
            this.nodes.forEach(Iu),
            this.nodes.forEach(Pu),
            this.nodes.forEach(Ru),
            this.clearAllSnapshots();
            const e = na.now();
            Cr.delta = Gr(0, 1e3 / 60, e - Cr.timestamp),
            Cr.timestamp = e,
            Cr.isProcessing = !0,
            Er.update.process(Cr),
            Er.preRender.process(Cr),
            Er.render.process(Cr),
            Cr.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Wc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Au),
            this.sharedNodes.forEach(Bu)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            wr.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            wr.postRender(( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            ))
        }
        updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance)
                return;
            if (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let n = 0; n < this.path.length; n++) {
                    this.path[n].updateScroll()
                }
            const e = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            },
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: t} = this.options;
            t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
        }
        updateScroll(e="measure") {
            let t = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
            t) {
                const t = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: e,
                    isRoot: t,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : t
                }
            }
        }
        resetTransform() {
            if (!s)
                return;
            const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , t = this.projectionDelta && !uu(this.projectionDelta)
              , n = this.getTransformTemplate()
              , i = n ? n(this.latestValues, "") : void 0
              , r = i !== this.prevTransformTemplateValue;
            e && (t || gc(this.latestValues) || r) && (s(this.instance, i),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(e=!0) {
            const t = this.measurePageBox();
            let n = this.removeElementScroll(t);
            var i;
            return e && (n = this.removeTransform(n)),
            Gu((i = n).x),
            Gu(i.y),
            {
                animationId: this.root.animationId,
                measuredBox: t,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var e;
            const {visualElement: t} = this.options;
            if (!t)
                return {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
            const n = t.measureViewportBox();
            if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(Zu))) {
                const {scroll: e} = this.root;
                e && (jc(n.x, e.offset.x),
                jc(n.y, e.offset.y))
            }
            return n
        }
        removeElementScroll(e) {
            var t;
            const n = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            if (nu(n, e),
            null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
                return n;
            for (let i = 0; i < this.path.length; i++) {
                const t = this.path[i]
                  , {scroll: s, options: r} = t;
                t !== this.root && s && r.layoutScroll && (s.wasRoot && nu(n, e),
                jc(n.x, s.offset.x),
                jc(n.y, s.offset.y))
            }
            return n
        }
        applyTransform(e, t=!1) {
            const n = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            nu(n, e);
            for (let i = 0; i < this.path.length; i++) {
                const e = this.path[i];
                !t && e.options.layoutScroll && e.scroll && e !== e.root && kc(n, {
                    x: -e.scroll.offset.x,
                    y: -e.scroll.offset.y
                }),
                gc(e.latestValues) && kc(n, e.latestValues)
            }
            return gc(this.latestValues) && kc(n, this.latestValues),
            n
        }
        removeTransform(e) {
            const t = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            nu(t, e);
            for (let n = 0; n < this.path.length; n++) {
                const e = this.path[n];
                if (!e.instance)
                    continue;
                if (!gc(e.latestValues))
                    continue;
                fc(e.latestValues) && e.updateSnapshot();
                const i = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
                nu(i, e.measurePageBox()),
                lu(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, i)
            }
            return gc(this.latestValues) && lu(t, this.latestValues),
            t
        }
        setTargetDelta(e) {
            this.targetDelta = e,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(e) {
            this.options = {
                ...this.options,
                ...e,
                crossfade: void 0 === e.crossfade || e.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Cr.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(e=!1) {
            var t;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const i = Boolean(this.resumingFrom) || this !== n;
            if (!(e || i && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: s, layoutId: r} = this.options;
            if (this.layout && (s || r)) {
                if (this.resolvedRelativeTargetAt = Cr.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const e = this.getClosestProjectingParent();
                    e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    rc(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                    nu(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (this.relativeTarget || this.targetDelta) {
                    var o, a, l;
                    if (this.target || (this.target = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.targetWithTransforms = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    o = this.target,
                    a = this.relativeTarget,
                    l = this.relativeParent.target,
                    ic(o.x, a.x, l.x),
                    ic(o.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : nu(this.target, this.layout.layoutBox),
                    Sc(this.target, this.targetDelta)) : nu(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const e = this.getClosestProjectingParent();
                        e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        rc(this.relativeTargetOrigin, this.target, e.target),
                        nu(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    wu && bu.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (this.parent && !fc(this.parent.latestValues) && !vc(this.parent.latestValues))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var e;
            const t = this.getLead()
              , n = Boolean(this.resumingFrom) || this !== t;
            let i = !0;
            if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (i = !1),
            n && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
            this.resolvedRelativeTargetAt === Cr.timestamp && (i = !1),
            i)
                return;
            const {layout: s, layoutId: r} = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !s && !r)
                return;
            nu(this.layoutCorrected, this.layout.layoutBox);
            const o = this.treeScale.x
              , a = this.treeScale.y;
            !function(e, t, n, i=!1) {
                const s = n.length;
                if (!s)
                    return;
                let r, o;
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                    r = n[a],
                    o = r.projectionDelta;
                    const {visualElement: s} = r.options;
                    s && s.props.style && "contents" === s.props.style.display || (i && r.options.layoutScroll && r.scroll && r !== r.root && kc(e, {
                        x: -r.scroll.offset.x,
                        y: -r.scroll.offset.y
                    }),
                    o && (t.x *= o.x.scale,
                    t.y *= o.y.scale,
                    Sc(e, o)),
                    i && gc(r.latestValues) && kc(e, r.latestValues))
                }
                t.x < Ec && t.x > Cc && (t.x = 1),
                t.y < Ec && t.y > Cc && (t.y = 1)
            }(this.layoutCorrected, this.treeScale, this.path, n),
            !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox,
            t.targetWithTransforms = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            });
            const {target: l} = t;
            l ? (this.projectionDelta && this.prevProjectionDelta ? (iu(this.prevProjectionDelta.x, this.projectionDelta.x),
            iu(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
            nc(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
            this.treeScale.x === o && this.treeScale.y === a && fu(this.projectionDelta.x, this.prevProjectionDelta.x) && fu(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", l)),
            wu && bu.recalculatedProjection++) : this.prevProjectionDelta && (this.createProjectionDeltas(),
            this.scheduleRender())
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(e=!0) {
            var t;
            if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(),
            e) {
                const e = this.getStack();
                e && e.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            },
            this.projectionDelta = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            },
            this.projectionDeltaWithTransform = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            }
        }
        setAnimationOrigin(e, t=!1) {
            const n = this.snapshot
              , i = n ? n.latestValues : {}
              , s = {
                ...this.latestValues
            }
              , r = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !t;
            const o = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }
              , a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
              , l = this.getStack()
              , c = !l || l.members.length <= 1
              , u = Boolean(a && !c && !0 === this.options.crossfade && !this.path.some(Hu));
            let d;
            this.animationProgress = 0,
            this.mixTargetDelta = t => {
                const n = t / 1e3;
                var l, h, p, m, f, g;
                _u(r.x, e.x, n),
                _u(r.y, e.y, n),
                this.setTargetDelta(r),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (rc(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                p = this.relativeTarget,
                m = this.relativeTargetOrigin,
                f = o,
                g = n,
                Wu(p.x, m.x, f.x, g),
                Wu(p.y, m.y, f.y, g),
                d && (l = this.relativeTarget,
                h = d,
                du(l.x, h.x) && du(l.y, h.y)) && (this.isProjectionDirty = !1),
                d || (d = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }),
                nu(d, this.relativeTarget)),
                a && (this.animationValues = s,
                function(e, t, n, i, s, r) {
                    s ? (e.opacity = ja(0, void 0 !== n.opacity ? n.opacity : 1, Qc(i)),
                    e.opacityExit = ja(void 0 !== t.opacity ? t.opacity : 1, 0, Jc(i))) : r && (e.opacity = ja(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                    for (let o = 0; o < Yc; o++) {
                        const s = `border${Gc[o]}Radius`;
                        let r = Kc(t, s)
                          , a = Kc(n, s);
                        void 0 === r && void 0 === a || (r || (r = 0),
                        a || (a = 0),
                        0 === r || 0 === a || Xc(r) === Xc(a) ? (e[s] = Math.max(ja(Zc(r), Zc(a), i), 0),
                        (Jr.test(a) || Jr.test(r)) && (e[s] += "%")) : e[s] = a)
                    }
                    (t.rotate || n.rotate) && (e.rotate = ja(t.rotate || 0, n.rotate || 0, i))
                }(s, i, this.latestValues, n, u, c)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = n
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(e) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Sr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = wr.update(( () => {
                Vc.hasAnimatedSinceResize = !0,
                this.currentAnimation = function(e, t, n) {
                    const i = yl(e) ? e : pl(e);
                    return i.start(al("", i, t, n)),
                    i.animation
                }(0, 1e3, {
                    ...e,
                    onUpdate: t => {
                        this.mixTargetDelta(t),
                        e.onUpdate && e.onUpdate(t)
                    }
                    ,
                    onComplete: () => {
                        e.onComplete && e.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            ))
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const e = this.getStack();
            e && e.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const e = this.getLead();
            let {targetWithTransforms: t, target: n, layout: i, latestValues: s} = e;
            if (t && n && i) {
                if (this !== e && this.layout && i && Yu(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                    n = this.target || {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    const t = ec(this.layout.layoutBox.x);
                    n.x.min = e.target.x.min,
                    n.x.max = n.x.min + t;
                    const i = ec(this.layout.layoutBox.y);
                    n.y.min = e.target.y.min,
                    n.y.max = n.y.min + i
                }
                nu(t, n),
                kc(t, s),
                nc(this.projectionDeltaWithTransform, this.layoutCorrected, t, s)
            }
        }
        registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new gu);
            this.sharedNodes.get(e).add(t);
            const n = t.options.initialPromotionConfig;
            t.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
            })
        }
        isLead() {
            const e = this.getStack();
            return !e || e.lead === this
        }
        getLead() {
            var e;
            const {layoutId: t} = this.options;
            return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
        }
        getPrevLead() {
            var e;
            const {layoutId: t} = this.options;
            return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
        }
        getStack() {
            const {layoutId: e} = this.options;
            if (e)
                return this.root.sharedNodes.get(e)
        }
        promote({needsReset: e, transition: t, preserveFollowOpacity: n}={}) {
            const i = this.getStack();
            i && i.promote(this, n),
            e && (this.projectionDelta = void 0,
            this.needsReset = !0),
            t && this.setOptions({
                transition: t
            })
        }
        relegate() {
            const e = this.getStack();
            return !!e && e.relegate(this)
        }
        resetSkewAndRotation() {
            const {visualElement: e} = this.options;
            if (!e)
                return;
            let t = !1;
            const {latestValues: n} = e;
            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0),
            !t)
                return;
            const i = {};
            n.z && ju("z", e, i, this.animationValues);
            for (let s = 0; s < Su.length; s++)
                ju(`rotate${Su[s]}`, e, i, this.animationValues),
                ju(`skew${Su[s]}`, e, i, this.animationValues);
            e.render();
            for (const s in i)
                e.setStaticValue(s, i[s]),
                this.animationValues && (this.animationValues[s] = i[s]);
            e.scheduleRender()
        }
        getProjectionStyles(e) {
            var t, n;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Cu;
            const i = {
                visibility: ""
            }
              , s = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                i.opacity = "",
                i.pointerEvents = xu(null == e ? void 0 : e.pointerEvents) || "",
                i.transform = s ? s(this.latestValues, "") : "none",
                i;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                const t = {};
                return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                t.pointerEvents = xu(null == e ? void 0 : e.pointerEvents) || ""),
                this.hasProjected && !gc(this.latestValues) && (t.transform = s ? s({}, "") : "none",
                this.hasProjected = !1),
                t
            }
            const o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
            i.transform = function(e, t, n) {
                let i = "";
                const s = e.x.translate / t.x
                  , r = e.y.translate / t.y
                  , o = (null == n ? void 0 : n.z) || 0;
                if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `),
                1 === t.x && 1 === t.y || (i += `scale(${1 / t.x}, ${1 / t.y}) `),
                n) {
                    const {transformPerspective: e, rotate: t, rotateX: s, rotateY: r, skewX: o, skewY: a} = n;
                    e && (i = `perspective(${e}px) ${i}`),
                    t && (i += `rotate(${t}deg) `),
                    s && (i += `rotateX(${s}deg) `),
                    r && (i += `rotateY(${r}deg) `),
                    o && (i += `skewX(${o}deg) `),
                    a && (i += `skewY(${a}deg) `)
                }
                const a = e.x.scale * t.x
                  , l = e.y.scale * t.y;
                return 1 === a && 1 === l || (i += `scale(${a}, ${l})`),
                i || "none"
            }(this.projectionDeltaWithTransform, this.treeScale, o),
            s && (i.transform = s(o, i.transform));
            const {x: a, y: l} = this.projectionDelta;
            i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
            r.animationValues ? i.opacity = r === this ? null !== (n = null !== (t = o.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : i.opacity = r === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const c in _c) {
                if (void 0 === o[c])
                    continue;
                const {correct: e, applyTo: t} = _c[c]
                  , n = "none" === i.transform ? o[c] : e(o[c], r);
                if (t) {
                    const e = t.length;
                    for (let s = 0; s < e; s++)
                        i[t[s]] = n
                } else
                    i[c] = n
            }
            return this.options.layoutId && (i.pointerEvents = r === this ? xu(null == e ? void 0 : e.pointerEvents) || "" : "none"),
            i
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach((e => {
                var t;
                return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
            }
            )),
            this.root.nodes.forEach(Lu),
            this.root.sharedNodes.clear()
        }
    }
}
function Pu(e) {
    e.updateLayout()
}
function Ru(e) {
    var t;
    const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: t, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , r = n.source !== e.layout.source;
        "size" === s ? hc((e => {
            const i = r ? n.measuredBox[e] : n.layoutBox[e]
              , s = ec(i);
            i.min = t[e].min,
            i.max = i.min + s
        }
        )) : Yu(s, n.layoutBox, t) && hc((i => {
            const s = r ? n.measuredBox[i] : n.layoutBox[i]
              , o = ec(t[i]);
            s.max = s.min + o,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[i].max = e.relativeTarget[i].min + o)
        }
        ));
        const o = {
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        };
        nc(o, t, n.layoutBox);
        const a = {
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        };
        r ? nc(a, e.applyTransform(i, !0), n.measuredBox) : nc(a, t, n.layoutBox);
        const l = !uu(o);
        let c = !1;
        if (!e.resumeFrom) {
            const i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
                const {snapshot: s, layout: r} = i;
                if (s && r) {
                    const o = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    rc(o, n.layoutBox, s.layoutBox);
                    const a = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    rc(a, t, r.layoutBox),
                    pu(o, a) || (c = !0),
                    i.options.layoutRoot && (e.relativeTarget = a,
                    e.relativeTargetOrigin = o,
                    e.relativeParent = i)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: n,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: t} = e.options;
        t && t()
    }
    e.options.transition = void 0
}
function Mu(e) {
    wu && bu.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Nu(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Au(e) {
    e.clearSnapshot()
}
function Lu(e) {
    e.clearMeasurements()
}
function Du(e) {
    e.isLayoutDirty = !1
}
function Iu(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ou(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Vu(e) {
    e.resolveTargetDelta()
}
function Fu(e) {
    e.calcProjection()
}
function zu(e) {
    e.resetSkewAndRotation()
}
function Bu(e) {
    e.removeLeadSnapshot()
}
function _u(e, t, n) {
    e.translate = ja(t.translate, 0, n),
    e.scale = ja(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Wu(e, t, n, i) {
    e.min = ja(t.min, n.min, i),
    e.max = ja(t.max, n.max, i)
}
function Hu(e) {
    return e.animationValues && void 0 !== e.animationValues.opacityExit
}
const $u = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Uu = e => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , qu = Uu("applewebkit/") && !Uu("chrome/") ? Math.round : yr;
function Gu(e) {
    e.min = qu(e.min),
    e.max = qu(e.max)
}
function Yu(e, t, n) {
    return "position" === e || "preserve-aspect" === e && (i = mu(t),
    s = mu(n),
    r = .2,
    !(Math.abs(i - s) <= r));
    var i, s, r
}
function Zu(e) {
    var t;
    return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
}
const Xu = ku({
    attachResizeListener: (e, t) => Fl(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Ku = {
    current: void 0
}
  , Qu = ku({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Ku.current) {
            const e = new Xu({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Ku.current = e
        }
        return Ku.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = void 0 !== t ? t : "none"
    }
    ,
    checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
})
  , Ju = {
    pan: {
        Feature: class extends Ll {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = yr
            }
            onPointerDown(e) {
                this.session = new _l(e,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: Rc(this.node)
                })
            }
            createPanHandlers() {
                const {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: i} = this.node.getProps();
                return {
                    onSessionStart: Lc(e),
                    onStart: Lc(t),
                    onMove: n,
                    onEnd: (e, t) => {
                        delete this.session,
                        i && wr.postRender(( () => i(e, t)))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = zl(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
    },
    drag: {
        Feature: class extends Ll {
            constructor(e) {
                super(e),
                this.removeGroupControls = yr,
                this.removeListeners = yr,
                this.controls = new Nc(e)
            }
            mount() {
                const {dragControls: e} = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || yr
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        ,
        ProjectionNode: Qu,
        MeasureLayout: Uc
    }
};
function ed(e, t) {
    const n = t ? "pointerenter" : "pointerleave"
      , i = t ? "onHoverStart" : "onHoverEnd";
    return zl(e.current, n, ( (n, s) => {
        if ("touch" === n.pointerType || Ql())
            return;
        const r = e.getProps();
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", t);
        const o = r[i];
        o && wr.postRender(( () => o(n, s)))
    }
    ), {
        passive: !e.getProps()[i]
    })
}
const td = (e, t) => !!t && (e === t || td(e, t.parentElement));
function nd(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Vl(n))
}
const id = new WeakMap
  , sd = new WeakMap
  , rd = e => {
    const t = id.get(e.target);
    t && t(e)
}
  , od = e => {
    e.forEach(rd)
}
;
function ad(e, t, n) {
    const i = function({root: e, ...t}) {
        const n = e || document;
        sd.has(n) || sd.set(n, {});
        const i = sd.get(n)
          , s = JSON.stringify(t);
        return i[s] || (i[s] = new IntersectionObserver(od,{
            root: e,
            ...t
        })),
        i[s]
    }(t);
    return id.set(e, n),
    i.observe(e),
    () => {
        id.delete(e),
        i.unobserve(e)
    }
}
const ld = {
    some: 0,
    all: 1
};
const cd = {
    inView: {
        Feature: class extends Ll {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                const {viewport: e={}} = this.node.getProps()
                  , {root: t, margin: n, amount: i="some", once: s} = e
                  , r = {
                    root: t ? t.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof i ? i : ld[i]
                };
                return ad(this.node.current, r, (e => {
                    const {isIntersecting: t} = e;
                    if (this.isInView === t)
                        return;
                    if (this.isInView = t,
                    s && !t && this.hasEnteredView)
                        return;
                    t && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", t);
                    const {onViewportEnter: n, onViewportLeave: i} = this.node.getProps()
                      , r = t ? n : i;
                    r && r(e)
                }
                ))
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                const {props: e, prevProps: t} = this.node;
                ["amount", "margin", "root"].some(function({viewport: e={}}, {viewport: t={}}={}) {
                    return n => e[n] !== t[n]
                }(e, t)) && this.startObserver()
            }
            unmount() {}
        }
    },
    tap: {
        Feature: class extends Ll {
            constructor() {
                super(...arguments),
                this.removeStartListeners = yr,
                this.removeEndListeners = yr,
                this.removeAccessibleListeners = yr,
                this.startPointerPress = (e, t) => {
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    const n = this.node.getProps()
                      , i = zl(window, "pointerup", ( (e, t) => {
                        if (!this.checkPressEnd())
                            return;
                        const {onTap: n, onTapCancel: i, globalTapTarget: s} = this.node.getProps()
                          , r = s || td(this.node.current, e.target) ? n : i;
                        r && wr.update(( () => r(e, t)))
                    }
                    ), {
                        passive: !(n.onTap || n.onPointerUp)
                    })
                      , s = zl(window, "pointercancel", ( (e, t) => this.cancelPress(e, t)), {
                        passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                    this.removeEndListeners = Ca(i, s),
                    this.startPress(e, t)
                }
                ,
                this.startAccessiblePress = () => {
                    const e = Fl(this.node.current, "keydown", (e => {
                        if ("Enter" !== e.key || this.isPressing)
                            return;
                        this.removeEndListeners(),
                        this.removeEndListeners = Fl(this.node.current, "keyup", (e => {
                            "Enter" === e.key && this.checkPressEnd() && nd("up", ( (e, t) => {
                                const {onTap: n} = this.node.getProps();
                                n && wr.postRender(( () => n(e, t)))
                            }
                            ))
                        }
                        )),
                        nd("down", ( (e, t) => {
                            this.startPress(e, t)
                        }
                        ))
                    }
                    ))
                      , t = Fl(this.node.current, "blur", ( () => {
                        this.isPressing && nd("cancel", ( (e, t) => this.cancelPress(e, t)))
                    }
                    ));
                    this.removeAccessibleListeners = Ca(e, t)
                }
            }
            startPress(e, t) {
                this.isPressing = !0;
                const {onTapStart: n, whileTap: i} = this.node.getProps();
                i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                n && wr.postRender(( () => n(e, t)))
            }
            checkPressEnd() {
                this.removeEndListeners(),
                this.isPressing = !1;
                return this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !Ql()
            }
            cancelPress(e, t) {
                if (!this.checkPressEnd())
                    return;
                const {onTapCancel: n} = this.node.getProps();
                n && wr.postRender(( () => n(e, t)))
            }
            mount() {
                const e = this.node.getProps()
                  , t = zl(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(e.onTapStart || e.onPointerStart)
                })
                  , n = Fl(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = Ca(t, n)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
    },
    focus: {
        Feature: class extends Ll {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let e = !1;
                try {
                    e = this.node.current.matches(":focus-visible")
                } catch (vf) {
                    e = !0
                }
                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = Ca(Fl(this.node.current, "focus", ( () => this.onFocus())), Fl(this.node.current, "blur", ( () => this.onBlur())))
            }
            unmount() {}
        }
    },
    hover: {
        Feature: class extends Ll {
            mount() {
                this.unmount = Ca(ed(this.node, !0), ed(this.node, !1))
            }
            unmount() {}
        }
    }
}
  , ud = {
    layout: {
        ProjectionNode: Qu,
        MeasureLayout: Uc
    }
}
  , dd = s.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , hd = s.createContext({})
  , pd = "undefined" != typeof window
  , md = pd ? s.useLayoutEffect : s.useEffect
  , fd = s.createContext({
    strict: !1
});
function gd(e, t, n, i, r) {
    var o, a;
    const {visualElement: l} = s.useContext(hd)
      , c = s.useContext(fd)
      , u = s.useContext(Dc)
      , d = s.useContext(dd).reducedMotion
      , h = s.useRef();
    i = i || c.renderer,
    !h.current && i && (h.current = i(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: !!u && !1 === u.initial,
        reducedMotionConfig: d
    }));
    const p = h.current
      , m = s.useContext(Oc);
    !p || p.projection || !r || "html" !== p.type && "svg" !== p.type || function(e, t, n, i) {
        const {layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: c} = t;
        e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : vd(e.parent)),
        e.projection.setOptions({
            layoutId: s,
            layout: r,
            alwaysMeasureLayout: Boolean(o) || a && Jl(a),
            visualElement: e,
            animationType: "string" == typeof r ? r : "both",
            initialPromotionConfig: i,
            layoutScroll: l,
            layoutRoot: c
        })
    }(h.current, n, r, m);
    const f = s.useRef(!1);
    s.useInsertionEffect(( () => {
        p && f.current && p.update(n, u)
    }
    ));
    const g = n[gl]
      , v = s.useRef(Boolean(g) && !(null === (o = window.MotionHandoffIsComplete) || void 0 === o ? void 0 : o.call(window, g)) && (null === (a = window.MotionHasOptimisedAnimation) || void 0 === a ? void 0 : a.call(window, g)));
    return md(( () => {
        p && (f.current = !0,
        window.MotionIsMounted = !0,
        p.updateFeatures(),
        Wc.render(p.render),
        v.current && p.animationState && p.animationState.animateChanges())
    }
    )),
    s.useEffect(( () => {
        p && (!v.current && p.animationState && p.animationState.animateChanges(),
        v.current && (queueMicrotask(( () => {
            var e;
            null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, g)
        }
        )),
        v.current = !1))
    }
    )),
    p
}
function vd(e) {
    if (e)
        return !1 !== e.options.allowProjection ? e.projection : vd(e.parent)
}
function yd(e, t, n) {
    return s.useCallback((i => {
        i && e.mount && e.mount(i),
        t && (i ? t.mount(i) : t.unmount()),
        n && ("function" == typeof n ? n(i) : Jl(n) && (n.current = i))
    }
    ), [t])
}
function xd(e) {
    return Ks(e.animate) || rr.some((t => er(e[t])))
}
function bd(e) {
    return Boolean(xd(e) || e.variants)
}
function wd(e) {
    const {initial: t, animate: n} = function(e, t) {
        if (xd(e)) {
            const {initial: t, animate: n} = e;
            return {
                initial: !1 === t || er(t) ? t : void 0,
                animate: er(n) ? n : void 0
            }
        }
        return !1 !== e.inherit ? t : {}
    }(e, s.useContext(hd));
    return s.useMemo(( () => ({
        initial: t,
        animate: n
    })), [Sd(t), Sd(n)])
}
function Sd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Cd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ed = {};
for (const xf in Cd)
    Ed[xf] = {
        isEnabled: e => Cd[xf].some((t => !!e[t]))
    };
const jd = Symbol.for("motionComponentSymbol");
function Td({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: i, Component: r}) {
    e && function(e) {
        for (const t in e)
            Ed[t] = {
                ...Ed[t],
                ...e[t]
            }
    }(e);
    const o = s.forwardRef((function(e, o) {
        let a;
        const l = {
            ...s.useContext(dd),
            ...e,
            layoutId: kd(e)
        }
          , {isStatic: c} = l
          , u = wd(e)
          , d = i(e, c);
        if (!c && pd) {
            s.useContext(fd).strict;
            const e = function(e) {
                const {drag: t, layout: n} = Ed;
                if (!t && !n)
                    return {};
                const i = {
                    ...t,
                    ...n
                };
                return {
                    MeasureLayout: (null == t ? void 0 : t.isEnabled(e)) || (null == n ? void 0 : n.isEnabled(e)) ? i.MeasureLayout : void 0,
                    ProjectionNode: i.ProjectionNode
                }
            }(l);
            a = e.MeasureLayout,
            u.visualElement = gd(r, d, l, t, e.ProjectionNode)
        }
        return b.jsxs(hd.Provider, {
            value: u,
            children: [a && u.visualElement ? b.jsx(a, {
                visualElement: u.visualElement,
                ...l
            }) : null, n(r, e, yd(d, u.visualElement, o), d, c, u.visualElement)]
        })
    }
    ));
    return o[jd] = r,
    o
}
function kd({layoutId: e}) {
    const t = s.useContext(Ic).id;
    return t && void 0 !== e ? t + "-" + e : e
}
const Pd = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Rd(e) {
    return "string" == typeof e && !e.includes("-") && !!(Pd.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Md(e, {style: t, vars: n}, i, s) {
    Object.assign(e.style, t, s && s.getProjectionStyles(i));
    for (const r in n)
        e.style.setProperty(r, n[r])
}
const Nd = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Ad(e, t, n, i) {
    Md(e, t, void 0, i);
    for (const s in t.attrs)
        e.setAttribute(Nd.has(s) ? s : fl(s), t.attrs[s])
}
function Ld(e, {layout: t, layoutId: n}) {
    return ar.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!_c[e] || "opacity" === e)
}
function Dd(e, t, n) {
    var i;
    const {style: s} = e
      , r = {};
    for (const o in s)
        (yl(s[o]) || t.style && yl(t.style[o]) || Ld(o, e) || void 0 !== (null === (i = null == n ? void 0 : n.getValue(o)) || void 0 === i ? void 0 : i.liveStyle)) && (r[o] = s[o]);
    return r
}
function Id(e, t, n) {
    const i = Dd(e, t, n);
    for (const s in e)
        if (yl(e[s]) || yl(t[s])) {
            i[-1 !== or.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = e[s]
        }
    return i
}
function Od(e) {
    const t = s.useRef(null);
    return null === t.current && (t.current = e()),
    t.current
}
const Vd = e => (t, n) => {
    const i = s.useContext(hd)
      , r = s.useContext(Dc)
      , o = () => function({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, i, s, r) {
        const o = {
            latestValues: Fd(i, s, r, e),
            renderState: t()
        };
        return n && (o.mount = e => n(i, e, o)),
        o
    }(e, t, i, r);
    return n ? o() : Od(o)
}
;
function Fd(e, t, n, i) {
    const s = {}
      , r = i(e, {});
    for (const h in r)
        s[h] = xu(r[h]);
    let {initial: o, animate: a} = e;
    const l = xd(e)
      , c = bd(e);
    t && c && !l && !1 !== e.inherit && (void 0 === o && (o = t.initial),
    void 0 === a && (a = t.animate));
    let u = !!n && !1 === n.initial;
    u = u || !1 === o;
    const d = u ? a : o;
    if (d && "boolean" != typeof d && !Ks(d)) {
        const t = Array.isArray(d) ? d : [d];
        for (let n = 0; n < t.length; n++) {
            const i = nr(e, t[n]);
            if (i) {
                const {transitionEnd: e, transition: t, ...n} = i;
                for (const i in n) {
                    let e = n[i];
                    if (Array.isArray(e)) {
                        e = e[u ? e.length - 1 : 0]
                    }
                    null !== e && (s[i] = e)
                }
                for (const i in e)
                    s[i] = e[i]
            }
        }
    }
    return s
}
const zd = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Bd = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
    attrs: {}
})
  , _d = (e, t) => t && "number" == typeof e ? t.transform(e) : e
  , Wd = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Hd = or.length;
function $d(e, t, n) {
    const {style: i, vars: s, transformOrigin: r} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const e = t[l];
        if (ar.has(l))
            o = !0;
        else if (_r(l))
            s[l] = e;
        else {
            const t = _d(e, Go[l]);
            l.startsWith("origin") ? (a = !0,
            r[l] = t) : i[l] = t
        }
    }
    if (t.transform || (o || n ? i.transform = function(e, t, n) {
        let i = ""
          , s = !0;
        for (let r = 0; r < Hd; r++) {
            const o = or[r]
              , a = e[o];
            if (void 0 === a)
                continue;
            let l = !0;
            if (l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a),
            !l || n) {
                const e = _d(a, Go[o]);
                l || (s = !1,
                i += `${Wd[o] || o}(${e}) `),
                n && (t[o] = e)
            }
        }
        return i = i.trim(),
        n ? i = n(t, s ? "" : i) : s && (i = "none"),
        i
    }(t, e.transform, n) : i.transform && (i.transform = "none")),
    a) {
        const {originX: e="50%", originY: t="50%", originZ: n=0} = r;
        i.transformOrigin = `${e} ${t} ${n}`
    }
}
function Ud(e, t, n) {
    return "string" == typeof e ? e : eo.transform(t + n * e)
}
const qd = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Gd = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Yd(e, {attrX: t, attrY: n, attrScale: i, originX: s, originY: r, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...c}, u, d) {
    if ($d(e, c, d),
    u)
        return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: p, dimensions: m} = e;
    h.transform && (m && (p.transform = h.transform),
    delete h.transform),
    m && (void 0 !== s || void 0 !== r || p.transform) && (p.transformOrigin = function(e, t, n) {
        return `${Ud(t, e.x, e.width)} ${Ud(n, e.y, e.height)}`
    }(m, void 0 !== s ? s : .5, void 0 !== r ? r : .5)),
    void 0 !== t && (h.x = t),
    void 0 !== n && (h.y = n),
    void 0 !== i && (h.scale = i),
    void 0 !== o && function(e, t, n=1, i=0, s=!0) {
        e.pathLength = 1;
        const r = s ? qd : Gd;
        e[r.offset] = eo.transform(-i);
        const o = eo.transform(t)
          , a = eo.transform(n);
        e[r.array] = `${o} ${a}`
    }(h, o, a, l, !1)
}
const Zd = e => "string" == typeof e && "svg" === e.toLowerCase()
  , Xd = {
    useVisualState: Vd({
        scrapeMotionValuesFromProps: Id,
        createRenderState: Bd,
        onMount: (e, t, {renderState: n, latestValues: i}) => {
            wr.read(( () => {
                try {
                    n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                } catch (vf) {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            )),
            wr.render(( () => {
                Yd(n, i, Zd(t.tagName), e.transformTemplate),
                Ad(t, n)
            }
            ))
        }
    })
}
  , Kd = {
    useVisualState: Vd({
        scrapeMotionValuesFromProps: Dd,
        createRenderState: zd
    })
};
function Qd(e, t, n) {
    for (const i in t)
        yl(t[i]) || Ld(i, n) || (e[i] = t[i])
}
function Jd(e, t) {
    const n = {};
    return Qd(n, e.style || {}, e),
    Object.assign(n, function({transformTemplate: e}, t) {
        return s.useMemo(( () => {
            const n = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            };
            return $d(n, t, e),
            Object.assign({}, n.vars, n.style)
        }
        ), [t])
    }(e, t)),
    n
}
function eh(e, t) {
    const n = {}
      , i = Jd(e, t);
    return e.drag && !1 !== e.dragListener && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x")),
    void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
const th = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function nh(e) {
    return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || th.has(e)
}
let ih = e => !nh(e);
function sh(e) {
    e && (ih = t => t.startsWith("on") ? !nh(t) : e(t))
}
try {
    sh(require("@emotion/is-prop-valid").default)
} catch (yf) {}
function rh(e, t, n, i) {
    const r = s.useMemo(( () => {
        const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
        };
        return Yd(n, t, Zd(i), e.transformTemplate),
        {
            ...n.attrs,
            style: {
                ...n.style
            }
        }
    }
    ), [t]);
    if (e.style) {
        const t = {};
        Qd(t, e.style, e),
        r.style = {
            ...t,
            ...r.style
        }
    }
    return r
}
function oh(e=!1) {
    return (t, n, i, {latestValues: r}, o) => {
        const a = (Rd(t) ? rh : eh)(n, r, o, t)
          , l = function(e, t, n) {
            const i = {};
            for (const s in e)
                "values" === s && "object" == typeof e.values || (ih(s) || !0 === n && nh(s) || !t && !nh(s) || e.draggable && s.startsWith("onDrag")) && (i[s] = e[s]);
            return i
        }(n, "string" == typeof t, e)
          , c = t !== s.Fragment ? {
            ...l,
            ...a,
            ref: i
        } : {}
          , {children: u} = n
          , d = s.useMemo(( () => yl(u) ? u.get() : u), [u]);
        return s.createElement(t, {
            ...c,
            children: d
        })
    }
}
function ah(e, t) {
    return function(n, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        return Td({
            ...Rd(n) ? Xd : Kd,
            preloadedFeatures: e,
            useRender: oh(i),
            createVisualElement: t,
            Component: n
        })
    }
}
const lh = {
    current: null
}
  , ch = {
    current: !1
};
const uh = new WeakMap
  , dh = [...po, Mo, zo]
  , hh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class ph {
    scrapeMotionValuesFromProps(e, t, n) {
        return {}
    }
    constructor({parent: e, props: t, presenceContext: n, reducedMotionConfig: i, blockInitialAnimation: s, visualState: r}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = bo,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const e = na.now();
            this.renderScheduledAt < e && (this.renderScheduledAt = e,
            wr.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: l} = r;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = t.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = e,
        this.props = t,
        this.presenceContext = n,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.blockInitialAnimation = Boolean(s),
        this.isControllingVariants = xd(t),
        this.isVariantNode = bd(t),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = Boolean(e && e.current);
        const {willChange: c, ...u} = this.scrapeMotionValuesFromProps(t, {}, this);
        for (const d in u) {
            const e = u[d];
            void 0 !== a[d] && yl(e) && e.set(a[d], !1)
        }
    }
    mount(e) {
        this.current = e,
        uh.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach(( (e, t) => this.bindToMotionValue(t, e))),
        ch.current || function() {
            if (ch.current = !0,
            pd)
                if (window.matchMedia) {
                    const e = window.matchMedia("(prefers-reduced-motion)")
                      , t = () => lh.current = e.matches;
                    e.addListener(t),
                    t()
                } else
                    lh.current = !1
        }(),
        this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || lh.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        uh.delete(this.current),
        this.projection && this.projection.unmount(),
        Sr(this.notifyUpdate),
        Sr(this.render),
        this.valueSubscriptions.forEach((e => e())),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const t = this.features[e];
            t && (t.unmount(),
            t.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, t) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const n = ar.has(e)
          , i = t.on("change", (t => {
            this.latestValues[e] = t,
            this.props.onUpdate && wr.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }
        ))
          , s = t.on("renderRequest", this.scheduleRender);
        let r;
        window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, ( () => {
            i(),
            s(),
            r && r(),
            t.owner && t.stop()
        }
        ))
    }
    sortNodePosition(e) {
        return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
    }
    updateFeatures() {
        let e = "animation";
        for (e in Ed) {
            const t = Ed[e];
            if (!t)
                continue;
            const {isEnabled: n, Feature: i} = t;
            if (!this.features[e] && i && n(this.props) && (this.features[e] = new i(this)),
            this.features[e]) {
                const t = this.features[e];
                t.isMounted ? t.update() : (t.mount(),
                t.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        }
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, t) {
        this.latestValues[e] = t
    }
    update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = t;
        for (let n = 0; n < hh.length; n++) {
            const t = hh[n];
            this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](),
            delete this.propEventSubscriptions[t]);
            const i = e["on" + t];
            i && (this.propEventSubscriptions[t] = this.on(t, i))
        }
        this.prevMotionValues = function(e, t, n) {
            for (const i in t) {
                const s = t[i]
                  , r = n[i];
                if (yl(s))
                    e.addValue(i, s);
                else if (yl(r))
                    e.addValue(i, pl(s, {
                        owner: e
                    }));
                else if (r !== s)
                    if (e.hasValue(i)) {
                        const t = e.getValue(i);
                        !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s)
                    } else {
                        const t = e.getStaticValue(i);
                        e.addValue(i, pl(void 0 !== t ? t : s, {
                            owner: e
                        }))
                    }
            }
            for (const i in n)
                void 0 === t[i] && e.removeValue(i);
            return t
        }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const t = this.getClosestVariantNode();
        if (t)
            return t.variantChildren && t.variantChildren.add(e),
            () => t.variantChildren.delete(e)
    }
    addValue(e, t) {
        const n = this.values.get(e);
        t !== n && (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        this.latestValues[e] = t.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const t = this.valueSubscriptions.get(e);
        t && (t(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, t) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let n = this.values.get(e);
        return void 0 === n && void 0 !== t && (n = pl(null === t ? void 0 : t, {
            owner: this
        }),
        this.addValue(e, n)),
        n
    }
    readValue(e, t) {
        var n;
        let i = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
        var s;
        return null != i && ("string" == typeof i && (zr(i) || Or(i)) ? i = parseFloat(i) : (s = i,
        !dh.find(ho(s)) && zo.test(t) && (i = Xo(e, t))),
        this.setBaseTarget(e, yl(i) ? i.get() : i)),
        yl(i) ? i.get() : i
    }
    setBaseTarget(e, t) {
        this.baseTarget[e] = t
    }
    getBaseTarget(e) {
        var t;
        const {initial: n} = this.props;
        let i;
        if ("string" == typeof n || "object" == typeof n) {
            const s = nr(this.props, n, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
            s && (i = s[e])
        }
        if (n && void 0 !== i)
            return i;
        const s = this.getBaseTargetFromProps(this.props, e);
        return void 0 === s || yl(s) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : s
    }
    on(e, t) {
        return this.events[e] || (this.events[e] = new ul),
        this.events[e].add(t)
    }
    notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t)
    }
}
class mh extends ph {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Qo
    }
    sortInstanceNodePosition(e, t) {
        return 2 & e.compareDocumentPosition(t) ? 1 : -1
    }
    getBaseTargetFromProps(e, t) {
        return e.style ? e.style[t] : void 0
    }
    removeValueFromRenderState(e, {vars: t, style: n}) {
        delete t[e],
        delete n[e]
    }
}
class fh extends mh {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Md
    }
    readValueFromInstance(e, t) {
        if (ar.has(t)) {
            const e = Zo(t);
            return e && e.default || 0
        }
        {
            const i = (n = e,
            window.getComputedStyle(n))
              , s = (_r(t) ? i.getPropertyValue(t) : i[t]) || 0;
            return "string" == typeof s ? s.trim() : s
        }
        var n
    }
    measureInstanceViewportBox(e, {transformPagePoint: t}) {
        return Pc(e, t)
    }
    build(e, t, n) {
        $d(e, t, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return Dd(e, t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        yl(e) && (this.childSubscription = e.on("change", (e => {
            this.current && (this.current.textContent = `${e}`)
        }
        )))
    }
}
class gh extends mh {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = dc
    }
    getBaseTargetFromProps(e, t) {
        return e[t]
    }
    readValueFromInstance(e, t) {
        if (ar.has(t)) {
            const e = Zo(t);
            return e && e.default || 0
        }
        return t = Nd.has(t) ? t : fl(t),
        e.getAttribute(t)
    }
    scrapeMotionValuesFromProps(e, t, n) {
        return Id(e, t, n)
    }
    build(e, t, n) {
        Yd(e, t, this.isSVGTag, n.transformTemplate)
    }
    renderInstance(e, t, n, i) {
        Ad(e, t, 0, i)
    }
    mount(e) {
        this.isSVGTag = Zd(e.tagName),
        super.mount(e)
    }
}
const vh = (e, t) => Rd(e) ? new gh(t) : new fh(t,{
    allowProjection: e !== s.Fragment
})
  , yh = Xs(ah({
    ...Il,
    ...cd,
    ...Ju,
    ...ud
}, vh));
class xh extends s.Component {
    getSnapshotBeforeUpdate(e) {
        const t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
            const e = this.props.sizeRef.current;
            e.height = t.offsetHeight || 0,
            e.width = t.offsetWidth || 0,
            e.top = t.offsetTop,
            e.left = t.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function bh({children: e, isPresent: t}) {
    const n = s.useId()
      , i = s.useRef(null)
      , r = s.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = s.useContext(dd);
    return s.useInsertionEffect(( () => {
        const {width: e, height: s, top: a, left: l} = r.current;
        if (t || !i.current || !e || !s)
            return;
        i.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet && c.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${s}px !important;\n            top: ${a}px !important;\n            left: ${l}px !important;\n          }\n        `),
        () => {
            document.head.removeChild(c)
        }
    }
    ), [t]),
    b.jsx(xh, {
        isPresent: t,
        childRef: i,
        sizeRef: r,
        children: s.cloneElement(e, {
            ref: i
        })
    })
}
const wh = ({children: e, initial: t, isPresent: n, onExitComplete: i, custom: r, presenceAffectsLayout: o, mode: a}) => {
    const l = Od(Sh)
      , c = s.useId()
      , u = s.useCallback((e => {
        l.set(e, !0);
        for (const t of l.values())
            if (!t)
                return;
        i && i()
    }
    ), [l, i])
      , d = s.useMemo(( () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: r,
        onExitComplete: u,
        register: e => (l.set(e, !1),
        () => l.delete(e))
    })), o ? [Math.random(), u] : [n, u]);
    return s.useMemo(( () => {
        l.forEach(( (e, t) => l.set(t, !1)))
    }
    ), [n]),
    s.useEffect(( () => {
        !n && !l.size && i && i()
    }
    ), [n]),
    "popLayout" === a && (e = b.jsx(bh, {
        isPresent: n,
        children: e
    })),
    b.jsx(Dc.Provider, {
        value: d,
        children: e
    })
}
;
function Sh() {
    return new Map
}
const Ch = e => e.key || "";
function Eh(e) {
    const t = [];
    return s.Children.forEach(e, (e => {
        s.isValidElement(e) && t.push(e)
    }
    )),
    t
}
const jh = ({children: e, exitBeforeEnter: t, custom: n, initial: i=!0, onExitComplete: r, presenceAffectsLayout: o=!0, mode: a="sync"}) => {
    const l = s.useMemo(( () => Eh(e)), [e])
      , c = l.map(Ch)
      , u = s.useRef(!0)
      , d = s.useRef(l)
      , h = Od(( () => new Map))
      , [p,m] = s.useState(l)
      , [f,g] = s.useState(l);
    md(( () => {
        u.current = !1,
        d.current = l;
        for (let e = 0; e < f.length; e++) {
            const t = Ch(f[e]);
            c.includes(t) ? h.delete(t) : !0 !== h.get(t) && h.set(t, !1)
        }
    }
    ), [f, c.length, c.join("-")]);
    const v = [];
    if (l !== p) {
        let e = [...l];
        for (let t = 0; t < f.length; t++) {
            const n = f[t]
              , i = Ch(n);
            c.includes(i) || (e.splice(t, 0, n),
            v.push(n))
        }
        return "wait" === a && v.length && (e = v),
        g(Eh(e)),
        void m(l)
    }
    const {forceRender: y} = s.useContext(Ic);
    return b.jsx(b.Fragment, {
        children: f.map((e => {
            const t = Ch(e)
              , s = l === f || c.includes(t);
            return b.jsx(wh, {
                isPresent: s,
                initial: !(u.current && !i) && void 0,
                custom: s ? void 0 : n,
                presenceAffectsLayout: o,
                mode: a,
                onExitComplete: s ? void 0 : () => {
                    if (!h.has(t))
                        return;
                    h.set(t, !0);
                    let e = !0;
                    h.forEach((t => {
                        t || (e = !1)
                    }
                    )),
                    e && (null == y || y(),
                    g(d.current),
                    r && r())
                }
                ,
                children: e
            }, t)
        }
        ))
    })
}
;
function Th({children: e, isValidProp: t, ...n}) {
    t && sh(t),
    (n = {
        ...s.useContext(dd),
        ...n
    }).isStatic = Od(( () => n.isStatic));
    const i = s.useMemo(( () => n), [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return b.jsx(dd.Provider, {
        value: i,
        children: e
    })
}
function kh(e, t) {
    const n = function(e) {
        const t = Od(( () => pl(e)))
          , {isStatic: n} = s.useContext(dd);
        if (n) {
            const [,n] = s.useState(e);
            s.useEffect(( () => t.on("change", n)), [])
        }
        return t
    }(t())
      , i = () => n.set(t());
    return i(),
    md(( () => {
        const t = () => wr.preRender(i, !1, !0)
          , n = e.map((e => e.on("change", t)));
        return () => {
            n.forEach((e => e())),
            Sr(i)
        }
    }
    )),
    n
}
function Ph(e, t, n, i) {
    if ("function" == typeof e)
        return function(e) {
            dl.current = [],
            e();
            const t = kh(dl.current, e);
            return dl.current = void 0,
            t
        }(e);
    const s = "function" == typeof t ? t : function(...e) {
        const t = !Array.isArray(e[0])
          , n = t ? 0 : -1
          , i = e[0 + n]
          , s = e[1 + n]
          , r = e[2 + n]
          , o = e[3 + n]
          , a = za(s, r, {
            mixer: (l = r[0],
            (e => e && "object" == typeof e && e.mix)(l) ? l.mix : void 0),
            ...o
        });
        var l;
        return t ? a(i) : a
    }(t, n, i);
    return Array.isArray(e) ? Rh(e, s) : Rh([e], ( ([e]) => s(e)))
}
function Rh(e, t) {
    const n = Od(( () => []));
    return kh(e, ( () => {
        n.length = 0;
        const i = e.length;
        for (let t = 0; t < i; t++)
            n[t] = e[t].get();
        return t(n)
    }
    ))
}
function Mh(e, t, n) {
    if ("string" == typeof e) {
        e = document.querySelectorAll(e)
    } else
        e instanceof Element && (e = [e]);
    return Array.from(e || [])
}
const Nh = new WeakMap;
let Ah;
function Lh({target: e, contentRect: t, borderBoxSize: n}) {
    var i;
    null === (i = Nh.get(e)) || void 0 === i || i.forEach((i => {
        i({
            target: e,
            contentSize: t,
            get size() {
                return function(e, t) {
                    if (t) {
                        const {inlineSize: e, blockSize: n} = t[0];
                        return {
                            width: e,
                            height: n
                        }
                    }
                    return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }
                }(e, n)
            }
        })
    }
    ))
}
function Dh(e) {
    e.forEach(Lh)
}
function Ih(e, t) {
    Ah || "undefined" != typeof ResizeObserver && (Ah = new ResizeObserver(Dh));
    const n = Mh(e);
    return n.forEach((e => {
        let n = Nh.get(e);
        n || (n = new Set,
        Nh.set(e, n)),
        n.add(t),
        null == Ah || Ah.observe(e)
    }
    )),
    () => {
        n.forEach((e => {
            const n = Nh.get(e);
            null == n || n.delete(t),
            (null == n ? void 0 : n.size) || null == Ah || Ah.unobserve(e)
        }
        ))
    }
}
const Oh = new Set;
let Vh;
function Fh(e) {
    return Oh.add(e),
    Vh || (Vh = () => {
        const e = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , t = {
            target: window,
            size: e,
            contentSize: e
        };
        Oh.forEach((e => e(t)))
    }
    ,
    window.addEventListener("resize", Vh)),
    () => {
        Oh.delete(e),
        !Oh.size && Vh && (Vh = void 0)
    }
}
const zh = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function Bh(e, t, n, i) {
    const s = n[t]
      , {length: r, position: o} = zh[t]
      , a = s.current
      , l = n.time;
    s.current = e[`scroll${o}`],
    s.scrollLength = e[`scroll${r}`] - e[`client${r}`],
    s.offset.length = 0,
    s.offset[0] = 0,
    s.offset[1] = s.scrollLength,
    s.progress = Ea(0, s.scrollLength, s.current);
    const c = i - l;
    s.velocity = c > 50 ? 0 : ra(s.current - a, c)
}
const _h = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , Wh = {
    start: 0,
    center: .5,
    end: 1
};
function Hh(e, t, n=0) {
    let i = 0;
    if (e in Wh && (e = Wh[e]),
    "string" == typeof e) {
        const t = parseFloat(e);
        e.endsWith("px") ? i = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? i = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? i = t / 100 * document.documentElement.clientHeight : e = t
    }
    return "number" == typeof e && (i = t * e),
    n + i
}
const $h = [0, 0];
function Uh(e, t, n, i) {
    let s = Array.isArray(e) ? e : $h
      , r = 0
      , o = 0;
    return "number" == typeof e ? s = [e, e] : "string" == typeof e && (s = (e = e.trim()).includes(" ") ? e.split(" ") : [e, Wh[e] ? e : "0"]),
    r = Hh(s[0], n, i),
    o = Hh(s[1], t),
    r - o
}
const qh = {
    x: 0,
    y: 0
};
function Gh(e, t, n) {
    const {offset: i=_h.All} = n
      , {target: s=e, axis: r="y"} = n
      , o = "y" === r ? "height" : "width"
      , a = s !== e ? function(e, t) {
        const n = {
            x: 0,
            y: 0
        };
        let i = e;
        for (; i && i !== t; )
            if (i instanceof HTMLElement)
                n.x += i.offsetLeft,
                n.y += i.offsetTop,
                i = i.offsetParent;
            else if ("svg" === i.tagName) {
                const e = i.getBoundingClientRect();
                i = i.parentElement;
                const t = i.getBoundingClientRect();
                n.x += e.left - t.left,
                n.y += e.top - t.top
            } else {
                if (!(i instanceof SVGGraphicsElement))
                    break;
                {
                    const {x: e, y: t} = i.getBBox();
                    n.x += e,
                    n.y += t;
                    let s = null
                      , r = i.parentNode;
                    for (; !s; )
                        "svg" === r.tagName && (s = r),
                        r = i.parentNode;
                    i = s
                }
            }
        return n
    }(s, e) : qh
      , l = s === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : function(e) {
        return "getBBox"in e && "svg" !== e.tagName ? e.getBBox() : {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }(s)
      , c = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[r].offset.length = 0;
    let u = !t[r].interpolate;
    const d = i.length;
    for (let h = 0; h < d; h++) {
        const e = Uh(i[h], c[o], l[o], a[r]);
        u || e === t[r].interpolatorOffsets[h] || (u = !0),
        t[r].offset[h] = e
    }
    u && (t[r].interpolate = za(t[r].offset, Ba(i)),
    t[r].interpolatorOffsets = [...t[r].offset]),
    t[r].progress = t[r].interpolate(t[r].current)
}
function Yh(e, t, n, i={}) {
    return {
        measure: () => function(e, t=e, n) {
            if (n.x.targetOffset = 0,
            n.y.targetOffset = 0,
            t !== e) {
                let i = t;
                for (; i && i !== e; )
                    n.x.targetOffset += i.offsetLeft,
                    n.y.targetOffset += i.offsetTop,
                    i = i.offsetParent
            }
            n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
            n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
            n.x.containerLength = e.clientWidth,
            n.y.containerLength = e.clientHeight
        }(e, i.target, n),
        update: t => {
            !function(e, t, n) {
                Bh(e, "x", t, n),
                Bh(e, "y", t, n),
                t.time = n
            }(e, n, t),
            (i.offset || i.target) && Gh(e, n, i)
        }
        ,
        notify: () => t(n)
    }
}
const Zh = new WeakMap
  , Xh = new WeakMap
  , Kh = new WeakMap
  , Qh = e => e === document.documentElement ? window : e;
function Jh(e, {container: t=document.documentElement, ...n}={}) {
    let i = Kh.get(t);
    i || (i = new Set,
    Kh.set(t, i));
    const s = Yh(t, e, {
        time: 0,
        x: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        },
        y: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }
    }, n);
    if (i.add(s),
    !Zh.has(t)) {
        const e = () => {
            for (const e of i)
                e.measure()
        }
          , n = () => {
            for (const e of i)
                e.update(Cr.timestamp)
        }
          , s = () => {
            for (const e of i)
                e.notify()
        }
          , a = () => {
            wr.read(e, !1, !0),
            wr.read(n, !1, !0),
            wr.update(s, !1, !0)
        }
        ;
        Zh.set(t, a);
        const l = Qh(t);
        window.addEventListener("resize", a, {
            passive: !0
        }),
        t !== document.documentElement && Xh.set(t, (o = a,
        "function" == typeof (r = t) ? Fh(r) : Ih(r, o))),
        l.addEventListener("scroll", a, {
            passive: !0
        })
    }
    var r, o;
    const a = Zh.get(t);
    return wr.read(a, !1, !0),
    () => {
        var e;
        Sr(a);
        const n = Kh.get(t);
        if (!n)
            return;
        if (n.delete(s),
        n.size)
            return;
        const i = Zh.get(t);
        Zh.delete(t),
        i && (Qh(t).removeEventListener("scroll", i),
        null === (e = Xh.get(t)) || void 0 === e || e(),
        window.removeEventListener("resize", i))
    }
}
function ep(e, t) {
    let n;
    const i = () => {
        const {currentTime: i} = t
          , s = (null === i ? 0 : i.value) / 100;
        n !== s && e(s),
        n = s
    }
    ;
    return wr.update(i, !0),
    () => Sr(i)
}
const tp = new Map;
function np({source: e, container: t=document.documentElement, axis: n="y"}={}) {
    e && (t = e),
    tp.has(t) || tp.set(t, {});
    const i = tp.get(t);
    return i[n] || (i[n] = rl() ? new ScrollTimeline({
        source: t,
        axis: n
    }) : function({source: e, container: t, axis: n="y"}) {
        e && (t = e);
        const i = {
            value: 0
        }
          , s = Jh((e => {
            i.value = 100 * e[n].progress
        }
        ), {
            container: t,
            axis: n
        });
        return {
            currentTime: i,
            cancel: s
        }
    }({
        source: t,
        axis: n
    })),
    i[n]
}
function ip(e) {
    return e && (e.target || e.offset)
}
function sp(e, {axis: t="y", ...n}={}) {
    const i = {
        axis: t,
        ...n
    };
    return "function" == typeof e ? function(e, t) {
        return function(e) {
            return 2 === e.length
        }(e) || ip(t) ? Jh((n => {
            e(n[t.axis].progress, n)
        }
        ), t) : ep(e, np(t))
    }(e, i) : function(e, t) {
        if (ip(t))
            return e.pause(),
            Jh((n => {
                e.time = e.duration * n[t.axis].progress
            }
            ), t);
        {
            const n = np(t);
            return e.attachTimeline(n, (e => (e.pause(),
            ep((t => {
                e.time = e.duration * t
            }
            ), n))))
        }
    }(e, i)
}
function rp(e, t) {
    Vr(Boolean(!t || t.current))
}
const op = () => ({
    scrollX: pl(0),
    scrollY: pl(0),
    scrollXProgress: pl(0),
    scrollYProgress: pl(0)
});
function ap({container: e, target: t, layoutEffect: n=!0, ...i}={}) {
    const r = Od(op);
    return (n ? md : s.useEffect)(( () => (rp(0, t),
    rp(0, e),
    sp(( (e, {x: t, y: n}) => {
        r.scrollX.set(t.current),
        r.scrollXProgress.set(t.progress),
        r.scrollY.set(n.current),
        r.scrollYProgress.set(n.progress)
    }
    ), {
        ...i,
        container: (null == e ? void 0 : e.current) || void 0,
        target: (null == t ? void 0 : t.current) || void 0
    }))), [e, t, JSON.stringify(i.offset)]),
    r
}
const lp = {
    some: 0,
    all: 1
};
function cp(e, {root: t, margin: n, amount: i, once: r=!1}={}) {
    const [o,a] = s.useState(!1);
    return s.useEffect(( () => {
        if (!e.current || r && o)
            return;
        const s = {
            root: t && t.current || void 0,
            margin: n,
            amount: i
        };
        return function(e, t, {root: n, margin: i, amount: s="some"}={}) {
            const r = Mh(e)
              , o = new WeakMap
              , a = new IntersectionObserver((e => {
                e.forEach((e => {
                    const n = o.get(e.target);
                    if (e.isIntersecting !== Boolean(n))
                        if (e.isIntersecting) {
                            const n = t(e);
                            "function" == typeof n ? o.set(e.target, n) : a.unobserve(e.target)
                        } else
                            n && (n(e),
                            o.delete(e.target))
                }
                ))
            }
            ),{
                root: n,
                rootMargin: i,
                threshold: "number" == typeof s ? s : lp[s]
            });
            return r.forEach((e => a.observe(e))),
            () => a.disconnect()
        }(e.current, ( () => (a(!0),
        r ? void 0 : () => a(!1))), s)
    }
    ), [t, e, n, r, i]),
    o
}
function up({items: e, children: t, className: n, maxNumberOfImages: i=5, imgClass: r="w-40 h-48", distance: o=20, fadeAnimation: a=!1}) {
    const l = s.useRef(null)
      , c = s.useRef(e.map(( () => s.createRef())))
      , u = s.useRef(1);
    let d = 0
      , h = {
        x: 0,
        y: 0
    };
    const p = e => {
        var t, n, s;
        if (n = e.clientX,
        s = e.clientY,
        Math.hypot(n - h.x, s - h.y) > window.innerWidth / o) {
            const n = c.current[d % c.current.length].current
              , s = null == (t = c.current[(d - i) % c.current.length]) ? void 0 : t.current;
            n && ( (e, t, n) => {
                var i;
                const s = null == (i = l.current) ? void 0 : i.getBoundingClientRect()
                  , r = t - s.left
                  , o = n - s.top;
                e.style.left = `${r}px`,
                e.style.top = `${o}px`,
                u.current > 40 && (u.current = 1),
                e.style.zIndex = String(u.current),
                u.current++,
                e.dataset.status = "active",
                a && setTimeout(( () => {
                    e.dataset.status = "inactive"
                }
                ), 1500),
                h = {
                    x: t,
                    y: n
                }
            }
            )(n, e.clientX, e.clientY),
            s && (s.dataset.status = "inactive"),
            d++
        }
    }
    ;
    return b.jsxs("section", {
        onMouseMove: p,
        onTouchMove: e => p(e.touches[0]),
        ref: l,
        className: Te("grid place-content-center h-screen w-full bg-white relative overflow-hidden text-slate-900", n),
        children: [e.map(( (e, t) => b.jsx(b.Fragment, {
            children: b.jsx("img", {
                className: Te("object-cover  scale-0 opacity:0 data-[status='active']:scale-100  data-[status='active']:opacity-100 transition-transform data-[status='active']:duration-500 duration-300 data-[status='active']:ease-out-expo  absolute   -translate-y-[50%] -translate-x-[50%] ", r),
                "data-index": t,
                "data-status": "inactive",
                src: e,
                alt: `image-${t}`,
                ref: c.current[t]
            }, t)
        }))), b.jsx("article", {
            className: "relative z-40 ",
            children: t
        })]
    })
}
const dp = ({words: e, duration: t=3e3, className: n}) => {
    const [i,r] = s.useState(e[0])
      , [o,a] = s.useState(!1)
      , l = s.useCallback(( () => {
        const t = e[e.indexOf(i) + 1] || e[0];
        r(t),
        a(!0)
    }
    ), [i, e]);
    return s.useEffect(( () => {
        o || setTimeout(( () => {
            l()
        }
        ), t)
    }
    ), [o, t, l]),
    b.jsx(jh, {
        onExitComplete: () => {
            a(!1)
        }
        ,
        children: b.jsx(yh.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            },
            exit: {
                opacity: 0,
                y: -40,
                x: 40,
                filter: "blur(8px)",
                scale: 2,
                position: "absolute"
            },
            className: Te("z-10 inline-block relative text-left text-gray-800 dark:text-gray-800 px-2", n),
            children: i.split(" ").map(( (e, t) => b.jsxs(yh.span, {
                initial: {
                    opacity: 0,
                    y: 10,
                    filter: "blur(8px)"
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                },
                transition: {
                    delay: .3 * t,
                    duration: .3
                },
                className: "inline-block whitespace-nowrap",
                children: [e.split("").map(( (n, i) => b.jsx(yh.span, {
                    initial: {
                        opacity: 0,
                        y: 10,
                        filter: "blur(8px)"
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    },
                    transition: {
                        delay: .3 * t + .05 * i,
                        duration: .2
                    },
                    className: "inline-block",
                    children: n
                }, e + i))), b.jsx("span", {
                    className: "inline-block",
                    children: " "
                })]
            }, e + t)))
        }, i)
    })
}
  , hp = ["https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format", "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format"];
function pp() {
    const {scrollY: e} = ap()
      , t = Ph(e, [0, 200], [1, 0])
      , n = Ph(e, [0, 200], [0, 100]);
    return b.jsxs("div", {
        className: "relative min-h-[90vh] flex items-center",
        children: [b.jsx(up, {
            items: hp,
            maxNumberOfImages: 5,
            distance: 25,
            imgClass: "sm:w-40 w-28 sm:h-48 h-36",
            children: b.jsx(yh.div, {
                style: {
                    opacity: t,
                    y: n
                },
                className: "container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8",
                children: b.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: b.jsx(yh.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "space-y-8",
                        children: b.jsxs("div", {
                            className: "space-y-4",
                            children: [b.jsx(yh.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    delay: .2
                                },
                                className: "inline-block px-4 py-1.5 rounded-full bg-[#C4FF00]/50 text-primary text-sm font-medium",
                                children: "🎉 | Available for freelance work"
                            }), b.jsxs(yh.h1, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .3
                                },
                                className: "text-4xl font-bold  text-primary sm:text-5xl lg:text-6xl ",
                                children: ["Hi, I'm Ameer Hamza", b.jsx("span", {
                                    className: "text-[#C4FF00]",
                                    children: "."
                                })]
                            }), b.jsxs(yh.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: .4
                                },
                                className: "text-2xl sm:text-3xl lg:text-4xl text-black font-medium",
                                children: ["I build", " ", b.jsx(dp, {
                                    className: "bg-gradient-to-r from-[#C4FF00] to-[#dcff36] text-gray-800 px-4 py-2 rounded-xl shadow-lg",
                                    words: ["creative", "interactive", "beautiful", "modern", "responsive", "high quality", "elegant"]
                                }), " ", b.jsx("span", {
                                    className: "block sm:inline text-black",
                                    children: "Shopify themes."
                                })]
                            })]
                        })
                    })
                })
            })
        }), b.jsx("div", {
            className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40"
        }), b.jsx("div", {
            className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80"
        }), b.jsx("div", {
            className: "absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-950 dark:[background:radial-gradient(#1a1a1a_1px,transparent_1px)]"
        })]
    })
}
function mp(e, t, n) {
    return Math.max(e, Math.min(t, n))
}
var fp = class {
    constructor() {
        i(this, "isRunning", !1),
        i(this, "value", 0),
        i(this, "from", 0),
        i(this, "to", 0),
        i(this, "currentTime", 0),
        i(this, "lerp"),
        i(this, "duration"),
        i(this, "easing"),
        i(this, "onUpdate")
    }
    advance(e) {
        var t;
        if (!this.isRunning)
            return;
        let n = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            const t = mp(0, this.currentTime / this.duration, 1);
            n = t >= 1;
            const i = n ? 1 : this.easing(t);
            this.value = this.from + (this.to - this.from) * i
        } else
            this.lerp ? (this.value = function(e, t, n, i) {
                return function(e, t, n) {
                    return (1 - n) * e + n * t
                }(e, t, 1 - Math.exp(-n * i))
            }(this.value, this.to, 60 * this.lerp, e),
            Math.round(this.value) === this.to && (this.value = this.to,
            n = !0)) : (this.value = this.to,
            n = !0);
        n && this.stop(),
        null == (t = this.onUpdate) || t.call(this, this.value, n)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {lerp: n, duration: i, easing: s, onStart: r, onUpdate: o}) {
        this.from = this.value = e,
        this.to = t,
        this.lerp = n,
        this.duration = i,
        this.easing = s,
        this.currentTime = 0,
        this.isRunning = !0,
        null == r || r(),
        this.onUpdate = o
    }
}
;
var gp = class {
    constructor(e, t, {autoResize: n=!0, debounce: s=250}={}) {
        i(this, "width", 0),
        i(this, "height", 0),
        i(this, "scrollHeight", 0),
        i(this, "scrollWidth", 0),
        i(this, "debouncedResize"),
        i(this, "wrapperResizeObserver"),
        i(this, "contentResizeObserver"),
        i(this, "resize", ( () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        )),
        i(this, "onWrapperResize", ( () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        )),
        i(this, "onContentResize", ( () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
            this.scrollWidth = this.wrapper.scrollWidth)
        }
        )),
        this.wrapper = e,
        this.content = t,
        n && (this.debouncedResize = function(e, t) {
            let n;
            return function(...i) {
                let s = this;
                clearTimeout(n),
                n = setTimeout(( () => {
                    n = void 0,
                    e.apply(s, i)
                }
                ), t)
            }
        }(this.resize, s),
        this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        var e, t;
        null == (e = this.wrapperResizeObserver) || e.disconnect(),
        null == (t = this.contentResizeObserver) || t.disconnect(),
        this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
  , vp = class {
    constructor() {
        i(this, "events", {})
    }
    emit(e, ...t) {
        var n;
        let i = this.events[e] || [];
        for (let s = 0, r = i.length; s < r; s++)
            null == (n = i[s]) || n.call(i, ...t)
    }
    on(e, t) {
        var n;
        return (null == (n = this.events[e]) ? void 0 : n.push(t)) || (this.events[e] = [t]),
        () => {
            var n;
            this.events[e] = null == (n = this.events[e]) ? void 0 : n.filter((e => t !== e))
        }
    }
    off(e, t) {
        var n;
        this.events[e] = null == (n = this.events[e]) ? void 0 : n.filter((e => t !== e))
    }
    destroy() {
        this.events = {}
    }
}
  , yp = 100 / 6
  , xp = {
    passive: !1
}
  , bp = class {
    constructor(e, t={
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        i(this, "touchStart", {
            x: 0,
            y: 0
        }),
        i(this, "lastDelta", {
            x: 0,
            y: 0
        }),
        i(this, "window", {
            width: 0,
            height: 0
        }),
        i(this, "emitter", new vp),
        i(this, "onTouchStart", (e => {
            const {clientX: t, clientY: n} = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        }
        )),
        i(this, "onTouchMove", (e => {
            const {clientX: t, clientY: n} = e.targetTouches ? e.targetTouches[0] : e
              , i = -(t - this.touchStart.x) * this.options.touchMultiplier
              , s = -(n - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: i,
                y: s
            },
            this.emitter.emit("scroll", {
                deltaX: i,
                deltaY: s,
                event: e
            })
        }
        )),
        i(this, "onTouchEnd", (e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        }
        )),
        i(this, "onWheel", (e => {
            let {deltaX: t, deltaY: n, deltaMode: i} = e;
            t *= 1 === i ? yp : 2 === i ? this.window.width : 1,
            n *= 1 === i ? yp : 2 === i ? this.window.height : 1,
            t *= this.options.wheelMultiplier,
            n *= this.options.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: n,
                event: e
            })
        }
        )),
        i(this, "onWindowResize", ( () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        )),
        this.element = e,
        this.options = t,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, xp),
        this.element.addEventListener("touchstart", this.onTouchStart, xp),
        this.element.addEventListener("touchmove", this.onTouchMove, xp),
        this.element.addEventListener("touchend", this.onTouchEnd, xp)
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, xp),
        this.element.removeEventListener("touchstart", this.onTouchStart, xp),
        this.element.removeEventListener("touchmove", this.onTouchMove, xp),
        this.element.removeEventListener("touchend", this.onTouchEnd, xp)
    }
}
  , wp = class {
    constructor({wrapper: e=window, content: t=document.documentElement, eventsTarget: n=e, smoothWheel: s=!0, syncTouch: r=!1, syncTouchLerp: o=.075, touchInertiaMultiplier: a=35, duration: l, easing: c=e => Math.min(1, 1.001 - Math.pow(2, -10 * e)), lerp: u=.1, infinite: d=!1, orientation: h="vertical", gestureOrientation: p="vertical", touchMultiplier: m=1, wheelMultiplier: f=1, autoResize: g=!0, prevent: v, virtualScroll: y, overscroll: x=!0, autoRaf: b=!1, __experimental__naiveDimensions: w=!1}={}) {
        i(this, "_isScrolling", !1),
        i(this, "_isStopped", !1),
        i(this, "_isLocked", !1),
        i(this, "_preventNextNativeScrollEvent", !1),
        i(this, "_resetVelocityTimeout", null),
        i(this, "__rafID", null),
        i(this, "isTouching"),
        i(this, "time", 0),
        i(this, "userData", {}),
        i(this, "lastVelocity", 0),
        i(this, "velocity", 0),
        i(this, "direction", 0),
        i(this, "options"),
        i(this, "targetScroll"),
        i(this, "animatedScroll"),
        i(this, "animate", new fp),
        i(this, "emitter", new vp),
        i(this, "dimensions"),
        i(this, "virtualScroll"),
        i(this, "onPointerDown", (e => {
            1 === e.button && this.reset()
        }
        )),
        i(this, "onVirtualScroll", (e => {
            if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e))
                return;
            const {deltaX: t, deltaY: n, event: i} = e;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: n,
                event: i
            }),
            i.ctrlKey)
                return;
            if (i.lenisStopPropagation)
                return;
            const s = i.type.includes("touch")
              , r = i.type.includes("wheel");
            this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
            if (this.options.syncTouch && s && "touchstart" === i.type && !this.isStopped && !this.isLocked)
                return void this.reset();
            const o = 0 === t && 0 === n
              , a = "vertical" === this.options.gestureOrientation && 0 === n || "horizontal" === this.options.gestureOrientation && 0 === t;
            if (o || a)
                return;
            let l = i.composedPath();
            l = l.slice(0, l.indexOf(this.rootElement));
            const c = this.options.prevent;
            if (l.find((e => {
                var t, n, i;
                return e instanceof HTMLElement && ("function" == typeof c && (null == c ? void 0 : c(e)) || (null == (t = e.hasAttribute) ? void 0 : t.call(e, "data-lenis-prevent")) || s && (null == (n = e.hasAttribute) ? void 0 : n.call(e, "data-lenis-prevent-touch")) || r && (null == (i = e.hasAttribute) ? void 0 : i.call(e, "data-lenis-prevent-wheel")))
            }
            )))
                return;
            if (this.isStopped || this.isLocked)
                return void i.preventDefault();
            if (!(this.options.syncTouch && s || this.options.smoothWheel && r))
                return this.isScrolling = "native",
                this.animate.stop(),
                void (i.lenisStopPropagation = !0);
            let u = n;
            "both" === this.options.gestureOrientation ? u = Math.abs(n) > Math.abs(t) ? n : t : "horizontal" === this.options.gestureOrientation && (u = t),
            (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && n > 0 || this.animatedScroll === this.limit && n < 0)) && (i.lenisStopPropagation = !0),
            i.preventDefault();
            const d = s && this.options.syncTouch
              , h = s && "touchend" === i.type && Math.abs(u) > 5;
            h && (u = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + u, {
                programmatic: !1,
                ...d ? {
                    lerp: h ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        }
        )),
        i(this, "onNativeScroll", ( () => {
            if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout),
            this._resetVelocityTimeout = null),
            this._preventNextNativeScrollEvent)
                this._preventNextNativeScrollEvent = !1;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                const e = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity,
                this.velocity = this.animatedScroll - e,
                this.direction = Math.sign(this.animatedScroll - e),
                this.isScrolling = "native",
                this.emit(),
                0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(( () => {
                    this.lastVelocity = this.velocity,
                    this.velocity = 0,
                    this.isScrolling = !1,
                    this.emit()
                }
                ), 400))
            }
        }
        )),
        i(this, "raf", (e => {
            const t = e - (this.time || e);
            this.time = e,
            this.animate.advance(.001 * t),
            this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        }
        )),
        window.lenisVersion = "1.1.16",
        e && e !== document.documentElement && e !== document.body || (e = window),
        this.options = {
            wrapper: e,
            content: t,
            eventsTarget: n,
            smoothWheel: s,
            syncTouch: r,
            syncTouchLerp: o,
            touchInertiaMultiplier: a,
            duration: l,
            easing: c,
            lerp: u,
            infinite: d,
            gestureOrientation: p,
            orientation: h,
            touchMultiplier: m,
            wheelMultiplier: f,
            autoResize: g,
            prevent: v,
            virtualScroll: y,
            overscroll: x,
            autoRaf: b,
            __experimental__naiveDimensions: w
        },
        this.dimensions = new gp(e,t,{
            autoResize: g
        }),
        this.updateClassName(),
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll = new bp(n,{
            touchMultiplier: m,
            wheelMultiplier: f
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll),
        this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this.__rafID && cancelAnimationFrame(this.__rafID)
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    off(e, t) {
        return this.emitter.off(e, t)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize(),
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.emit()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
        this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
        this.animate.stop(),
        this.reset())
    }
    scrollTo(e, {offset: t=0, immediate: n=!1, lock: i=!1, duration: s=this.options.duration, easing: r=this.options.easing, lerp: o=this.options.lerp, onStart: a, onComplete: l, force: c=!1, programmatic: u=!0, userData: d}={}) {
        if (!this.isStopped && !this.isLocked || c) {
            if ("string" == typeof e && ["top", "left", "start"].includes(e))
                e = 0;
            else if ("string" == typeof e && ["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                let n;
                if ("string" == typeof e ? n = document.querySelector(e) : e instanceof HTMLElement && (null == e ? void 0 : e.nodeType) && (n = e),
                n) {
                    if (this.options.wrapper !== window) {
                        const e = this.rootElement.getBoundingClientRect();
                        t -= this.isHorizontal ? e.left : e.top
                    }
                    const i = n.getBoundingClientRect();
                    e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll
                }
            }
            if ("number" == typeof e) {
                if (e += t,
                e = Math.round(e),
                this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : e = mp(0, e, this.limit),
                e === this.targetScroll)
                    return null == a || a(this),
                    void (null == l || l(this));
                if (this.userData = d ?? {},
                n)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    null == l || l(this),
                    void (this.userData = {});
                u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: s,
                    easing: r,
                    lerp: o,
                    onStart: () => {
                        i && (this.isLocked = !0),
                        this.isScrolling = "smooth",
                        null == a || a(this)
                    }
                    ,
                    onUpdate: (e, t) => {
                        this.isScrolling = "smooth",
                        this.lastVelocity = this.velocity,
                        this.velocity = e - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = e,
                        this.setScroll(this.scroll),
                        u && (this.targetScroll = e),
                        t || this.emit(),
                        t && (this.reset(),
                        this.emit(),
                        null == l || l(this),
                        this.userData = {},
                        this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
    }
    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0,
        requestAnimationFrame(( () => {
            this._preventNextNativeScrollEvent = !1
        }
        ))
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (e = this.animatedScroll,
        t = this.limit,
        (e % t + t) % t) : this.animatedScroll;
        var e, t
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this._isScrolling
    }
    set isScrolling(e) {
        this._isScrolling !== e && (this._isScrolling = e,
        this.updateClassName())
    }
    get isStopped() {
        return this._isStopped
    }
    set isStopped(e) {
        this._isStopped !== e && (this._isStopped = e,
        this.updateClassName())
    }
    get isLocked() {
        return this._isLocked
    }
    set isLocked(e) {
        this._isLocked !== e && (this._isLocked = e,
        this.updateClassName())
    }
    get isSmooth() {
        return "smooth" === this.isScrolling
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        "smooth" === this.isScrolling && (e += " lenis-smooth"),
        e
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
  , Sp = s.createContext(null)
  , Cp = new class {
    constructor(e) {
        i(this, "listeners", []),
        this.state = e
    }
    set(e) {
        this.state = e;
        for (let t of this.listeners)
            t(this.state)
    }
    subscribe(e) {
        return this.listeners = [...this.listeners, e],
        () => {
            this.listeners = this.listeners.filter((t => t !== e))
        }
    }
    get() {
        return this.state
    }
}
(null)
  , Ep = s.forwardRef(( ({children: e, root: t=!1, options: n={}, className: i, autoRaf: r=!0, props: o}, a) => {
    const l = s.useRef(null)
      , c = s.useRef(null)
      , [u,d] = s.useState(void 0);
    s.useImperativeHandle(a, ( () => ({
        wrapper: l.current,
        content: c.current,
        lenis: u
    })), [u]),
    s.useEffect(( () => {
        const e = new wp({
            ...n,
            ...!t && {
                wrapper: l.current,
                content: c.current
            },
            autoRaf: (null == n ? void 0 : n.autoRaf) ?? r
        });
        return d(e),
        () => {
            e.destroy(),
            d(void 0)
        }
    }
    ), [t, JSON.stringify(n)]);
    const h = s.useRef([])
      , p = s.useCallback(( (e, t) => {
        h.current.push({
            callback: e,
            priority: t
        }),
        h.current.sort(( (e, t) => e.priority - t.priority))
    }
    ), [])
      , m = s.useCallback((e => {
        h.current = h.current.filter((t => t.callback !== e))
    }
    ), []);
    return s.useEffect(( () => {
        if (t && u)
            return Cp.set({
                lenis: u,
                addCallback: p,
                removeCallback: m
            }),
            () => Cp.set(null)
    }
    ), [t, u, p, m]),
    s.useEffect(( () => {
        if (!u)
            return;
        const e = e => {
            var t;
            for (let n = 0; n < h.current.length; n++)
                null == (t = h.current[n]) || t.callback(e)
        }
        ;
        return u.on("scroll", e),
        () => {
            u.off("scroll", e)
        }
    }
    ), [u]),
    b.jsx(Sp.Provider, {
        value: {
            lenis: u,
            addCallback: p,
            removeCallback: m
        },
        children: t ? e : b.jsx("div", {
            ref: l,
            className: i,
            ...o,
            children: b.jsx("div", {
                ref: c,
                children: e
            })
        })
    })
}
));
function jp() {
    return b.jsx("section", {
        className: "w-full min-h-screen bg-[#EFEFEF] flex items-center justify-center rounded-tl-[40px] md:rounded-tl-[80px] px-4 py-24",
        children: b.jsxs("div", {
            className: "max-w-6xl mx-auto w-full  flex flex-col-reverse items-center justify-between md:flex-row gap-12 mt-4",
            children: [b.jsx("div", {
                className: "w-full md:w-1/2",
                children: b.jsx("div", {
                    className: "relative w-full aspect-square rounded-2xl overflow-hidden",
                    children: b.jsx("img", {
                        src: "/assets/img/self-Bsv3AQWc.svg",
                        alt: "Developer portrait",
                        className: "w-full h-full object-cover object-center ",
                        loading: "lazy"
                    })
                })
            }), b.jsxs("div", {
                className: "w-full md:w-1/2 grid gap-8 ",
                children: [b.jsxs(yh.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "space-y-2",
                    children: [b.jsx("p", {
                        className: "text-sm",
                        children: "Overview"
                    }), b.jsx("p", {
                        className: "text-gray-800",
                        children: "Who am I"
                    })]
                }), b.jsx(yh.h1, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    className: "text-2xl md:text-4xl lg:text-4xl font-medium leading-tight tracking-tight lg:leading-[1.2] max-w-3xl",
                    children: "I'm a Shopify theme developer passionate about crafting high-performance eCommerce stores and seamless shopping experiences."
                }), b.jsx(yh.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .4
                    },

                    className: "space-y-1",
                    children: [b.jsx("p", {
                        className: "text-sm",
                        children: "I specialize in building custom Shopify themes that are fast, responsive, and conversion-focused."
                    })]
                }), b.jsx(yh.h1, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    className: "pt-4",
                    children: b.jsx(Re, {
                        variant: "link",
                        className: "group px-4 text-gray-800 rounded-full hover:border-2 border-gray-800",
                        asChild: !0,
                        children: b.jsxs(ks, {
                            
                            className: "flex items-center",
                            to: "/contact",
                            children: ["Know More", b.jsx(yh.div, {
                                whileHover: {
                                    x: 4
                                },
                                transition: {
                                    duration: .2
                                },
                                className: "inline-flex items-center",
                                children: b.jsx(De, {
                                    className: "ml-2 h-4 w-4"
                                })
                            })]
                        })
                    })
                })]
            })]
        })
    })
}
const Tp = "/assets/img/Prolonlife-full-page.png"
  , kp = "/assets/img/Moxielash-full-page.png"
  , Pp = "/assets/img/L-Nutura-Health-full-page.png"
  , Rp = [{
    id: 1,
    src: kp,
    thumbnail: "./assets/img/MOX.png",
    alt: "Moxielash",
    description: "Moxielash - E-commerce Store",
    slug: "moxielash-ecommerce-store"
}, {
    id: 2,
    src: Pp,
    thumbnail: "./assets/img/LN.png",
    alt: "L-Nutura-Health",
    description: "L-Nutura-Health - E-commerce Store",
    slug: "l-nutura-health-ecommerce-store"
}, {
    id: 3,
    src: Tp,
    thumbnail: "./assets/img/pro.png",
    alt: "Prolonlife",
    description: "Prolonlife - E-commerce Store",
    slug: "prolonlife-ecommerce-store"
}];
function Mp() {
    const [e,t] = s.useState(null)
      , [n,i] = s.useState({
        x: 0,
        y: 0
    })
      , r = s.useRef(null)
      , o = s.useRef({
        x: 0,
        y: 0
    })
      , a = s.useCallback((e => {
        const {clientX: t, clientY: n} = e
          , s = t - o.current.x
          , r = n - o.current.y
          , a = o.current.x + .15 * s
          , l = o.current.y + .15 * r;
        i({
            x: a,
            y: l
        }),
        o.current = {
            x: a,
            y: l
        }
    }
    ), []);
    s.useEffect(( () => {
        const e = e => {
            r.current || (r.current = requestAnimationFrame(( () => {
                a(e),
                r.current = null
            }
            )))
        }
        ;
        return window.addEventListener("mousemove", e),
        () => {
            window.removeEventListener("mousemove", e),
            r.current && cancelAnimationFrame(r.current)
        }
    }
    ), [a]);
    const l = s.useCallback((e => {
        t(e)
    }
    ), [])
      , c = s.useCallback(( () => {
        t(null)
    }
    ), []);
    return b.jsxs("div", {
        className: "w-full min-h-screen bg-[#161719] text-white px-4 py-24 rounded-tr-[80px]",
        children: [b.jsxs("div", {
            className: "max-w-6xl mx-auto flex flex-col items-center justify-center",
            children: [b.jsxs(yh.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                className: "mb-10 flex items-center justify-between w-full",
                children: [b.jsxs("div", {
                    className: "w-[60%]",
                    children: [b.jsx("h2", {
                        className: "text-[#C4FF00] text-4xl font-bold",
                        children: "FEATURED PROJECTS"
                    }), b.jsx("p", {
                        className: "text-gray-400 text-lg",
                        children: "Selected Works"
                    })]
                }), b.jsxs(ks, {
                    className: "flex gap-2 hover:border-b  border-[#C4FF00] hover:text-[#C4FF00]",
                    to: "/projects",
                    children: ["See All Projects", b.jsx(yh.div, {
                        whileHover: {
                            x: 5
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: b.jsx(He, {})
                    })]
                })]
            }), b.jsx("div", {
                className: "space-y-8 w-full h-full relative",
                onMouseLeave: c,
                children: Rp.map(( (e, t) => b.jsxs(yh.div, {
                    className: "cursor-pointer flex flex-col md:flex-row items-start justify-between gap-2 group",
                    onMouseEnter: () => l(e),
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .2 * t
                    },
                    whileHover: {
                        scale: 1.02
                    },
                    children: [b.jsxs("div", {
                        className: "space-y-2 min-w-40 ",
                        children: [b.jsxs("span", {
                            className: "text-sm text-gray-500",
                            children: ["0", t + 1]
                        }), b.jsx("h3", {
                            className: "text-sm font-medium",
                            children: e.alt
                        })]
                    }), b.jsxs("div", {
                        className: "flex items-center justify-between w-[90%] border-b pb-4 transition-colors duration-300",
                        children: [b.jsx("h2", {
                            className: "text-xl md:text-3xl lg:text-3xl font-light group-hover:text-[#C4FF00] transition-colors duration-300",
                            children: e.description
                        }), b.jsxs(ks, {
                            to: `/projects/${e.slug}`,
                            className: "inline-flex items-center text-[#C4FF00] hover:text-white transition-colors",
                            whileHover: {
                                x: 5
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            },
                            children: [b.jsx("span", {
                                className: "",
                                children: "View Project"
                            }), " ", b.jsx(De, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })]
                    })]
                }, e.id)))
            })]
        }), b.jsx(jh, {
            children: e && b.jsx(yh.img, {
                src: e.thumbnail,
                alt: e.alt,
                className: "fixed border-4 border-[#C4FF00]  object-cover pointer-events-none z-10 w-96 rounded-lg shadow-lg",
                style: {
                    left: `${n.x}px`,
                    top: `${n.y}px`,
                    transform: "translate(-50%, -50%)"
                },
                initial: {
                    opacity: 0,
                    scale: .5
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .5
                },
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                }
            }, e.id)
        })]
    })
}
const Np = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6789%2015.9759C18.6789%2014.5415%2017.4796%2013.3785%2016%2013.3785C14.5206%2013.3785%2013.3211%2014.5415%2013.3211%2015.9759C13.3211%2017.4105%2014.5206%2018.5734%2016%2018.5734C17.4796%2018.5734%2018.6789%2017.4105%2018.6789%2015.9759Z'%20fill='%2353C1DE'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.7004%2011.1537C25.2661%208.92478%2025.9772%204.79148%2023.4704%203.39016C20.9753%201.99495%2017.7284%204.66843%2016.0139%206.27318C14.3044%204.68442%2010.9663%202.02237%208.46163%203.42814C5.96751%204.82803%206.73664%208.8928%207.3149%2011.1357C4.98831%2011.7764%201%2013.1564%201%2015.9759C1%2018.7874%204.98416%2020.2888%207.29698%2020.9289C6.71658%2023.1842%205.98596%2027.1909%208.48327%2028.5877C10.9973%2029.9932%2014.325%2027.3945%2016.0554%2025.7722C17.7809%2027.3864%2020.9966%2030.0021%2023.4922%2028.6014C25.9956%2027.1963%2025.3436%2023.1184%2024.7653%2020.8625C27.0073%2020.221%2031%2018.7523%2031%2015.9759C31%2013.1835%2026.9903%2011.7923%2024.7004%2011.1537ZM24.4162%2019.667C24.0365%2018.5016%2023.524%2017.2623%2022.8971%2015.9821C23.4955%2014.7321%2023.9881%2013.5088%2024.3572%2012.3509C26.0359%2012.8228%2029.7185%2013.9013%2029.7185%2015.9759C29.7185%2018.07%2026.1846%2019.1587%2024.4162%2019.667ZM22.85%2027.526C20.988%2028.571%2018.2221%2026.0696%2016.9478%2024.8809C17.7932%2023.9844%2018.638%2022.9422%2019.4625%2021.7849C20.9129%2021.6602%2022.283%2021.4562%2023.5256%2021.1777C23.9326%2022.7734%2024.7202%2026.4763%2022.85%2027.526ZM9.12362%2027.5111C7.26143%2026.47%208.11258%2022.8946%208.53957%2021.2333C9.76834%2021.4969%2011.1286%2021.6865%2012.5824%2021.8008C13.4123%2022.9332%2014.2816%2023.9741%2015.1576%2024.8857C14.0753%2025.9008%2010.9945%2028.557%209.12362%2027.5111ZM2.28149%2015.9759C2.28149%2013.874%205.94207%2012.8033%207.65904%2012.3326C8.03451%2013.5165%208.52695%2014.7544%209.12123%2016.0062C8.51925%2017.2766%208.01977%2018.5341%207.64085%2019.732C6.00369%2019.2776%202.28149%2018.0791%202.28149%2015.9759ZM9.1037%204.50354C10.9735%203.45416%2013.8747%206.00983%2015.1159%207.16013C14.2444%208.06754%2013.3831%209.1006%2012.5603%2010.2265C11.1494%2010.3533%209.79875%2010.5569%208.55709%2010.8297C8.09125%209.02071%207.23592%205.55179%209.1037%204.50354ZM20.3793%2011.5771C21.3365%2011.6942%2022.2536%2011.85%2023.1147%2012.0406C22.8562%2012.844%2022.534%2013.6841%2022.1545%2014.5453C21.6044%2013.5333%2021.0139%2012.5416%2020.3793%2011.5771ZM16.0143%208.0481C16.6054%208.66897%2017.1974%209.3623%2017.7798%2010.1145C16.5985%2010.0603%2015.4153%2010.0601%2014.234%2010.1137C14.8169%209.36848%2015.414%208.67618%2016.0143%208.0481ZM9.8565%2014.5444C9.48329%2013.6862%209.16398%2012.8424%208.90322%2012.0275C9.75918%2011.8418%2010.672%2011.69%2011.623%2011.5748C10.9866%2012.5372%2010.3971%2013.5285%209.8565%2014.5444ZM11.6503%2020.4657C10.6679%2020.3594%209.74126%2020.2153%208.88556%2020.0347C9.15044%2019.2055%209.47678%2018.3435%209.85796%2017.4668C10.406%2018.4933%2011.0045%2019.4942%2011.6503%2020.4657ZM16.0498%2023.9915C15.4424%2023.356%2014.8365%2022.6531%2014.2448%2021.8971C15.4328%2021.9423%2016.6231%2021.9424%2017.811%2021.891C17.2268%2022.6608%2016.6369%2023.3647%2016.0498%2023.9915ZM22.1667%2017.4222C22.5677%2018.3084%2022.9057%2019.1657%2023.1742%2019.9809C22.3043%2020.1734%2021.3652%2020.3284%2020.3757%2020.4435C21.015%2019.4607%2021.6149%2018.4536%2022.1667%2017.4222ZM18.7473%2020.5941C16.9301%2020.72%2015.1016%2020.7186%2013.2838%2020.6044C12.2509%2019.1415%2011.3314%2017.603%2010.5377%2016.0058C11.3276%2014.4119%2012.2404%2012.8764%2013.2684%2011.4158C15.0875%2011.2825%2016.9178%2011.2821%2018.7369%2011.4166C19.7561%2012.8771%2020.6675%2014.4086%2021.4757%2015.9881C20.6771%2017.5812%2019.7595%2019.1198%2018.7473%2020.5941ZM22.8303%204.4666C24.7006%205.51254%2023.8681%209.22726%2023.4595%2010.8426C22.2149%2010.5641%2020.8633%2010.3569%2019.4483%2010.2281C18.6239%209.09004%2017.7698%208.05518%2016.9124%207.15949C18.1695%205.98441%2020.9781%203.43089%2022.8303%204.4666Z'%20fill='%2353C1DE'/%3e%3c/svg%3e"
  , Ap = "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%200C7.175%200%200%207.175%200%2016C0%2024.825%207.175%2032%2016%2032C18.8%2032%2021.425%2031.275%2023.7%2030.025L12.1%2013.825V22.975H10.4V10.45H12.1L24.725%2029.4C29.1%2026.55%2032%2021.625%2032%2016C32%207.175%2024.825%200%2016%200ZM21.525%2021.15L19.65%2018.325V10.45H21.525V21.15Z'%20fill='white'/%3e%3c/svg%3e"
  , Lp = [{
    name: "HTML",
    url: "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%2028L4%203H28L26%2028L16%2031L6%2028Z'%20fill='%23E44D26'/%3e%3cpath%20d='M26%205H16V29.5L24%2027L26%205Z'%20fill='%23F16529'/%3e%3cpath%20d='M9.5%2017.5L8.5%208H24L23.5%2011H11.5L12%2014.5H23L22%2024L16%2026L10%2024L9.5%2019H12.5L13%2021.5L16%2022.5L19%2021.5L19.5%2017.5H9.5Z'%20fill='white'/%3e%3c/svg%3e"
}, {
    name: "CSS",
    url: "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='css_3'%3e%3cpath%20id='vector'%20d='M6%2028L4%203H28L26%2028L16%2031L6%2028Z'%20fill='%231172B8'/%3e%3cpath%20id='vector_2'%20d='M26%205H16V29.5L24%2027L26%205Z'%20fill='%2333AADD'/%3e%3cpath%20id='vector_3'%20d='M19.5%2017.5H9.5L9%2014L17%2011.5H9L8.5%208.5H24L23.5%2012L17%2014.5H23L22%2024L16%2026L10%2024L9.5%2019H12.5L13%2021.5L16%2022.5L19%2021.5L19.5%2017.5Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e"
}, {
    name: "JS",
    url: "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='28'%20height='28'%20fill='%23FFCA28'/%3e%3cpath%20d='M19%2025.2877L21.0615%2023.9236C21.2231%2024.4311%2022.2462%2025.6366%2023.5385%2025.6366C24.8308%2025.6366%2025.4308%2024.9308%2025.4308%2024.4629C25.4308%2023.1877%2024.1112%2022.7381%2023.4774%2022.5221C23.374%2022.4869%2023.289%2022.4579%2023.2308%2022.4326C23.2009%2022.4196%2023.1558%2022.4023%2023.0979%2022.3802C22.393%2022.1109%2019.7923%2021.1173%2019.7923%2018.2372C19.7923%2015.0648%2022.8538%2014.7%2023.5462%2014.7C23.9991%2014.7%2026.1769%2014.7555%2027.2615%2016.7938L25.2615%2018.1896C24.8231%2017.3013%2024.0946%2017.0079%2023.6462%2017.0079C22.5385%2017.0079%2022.3077%2017.82%2022.3077%2018.1896C22.3077%2019.2268%2023.5112%2019.6917%2024.5273%2020.0842C24.7932%2020.1869%2025.0462%2020.2847%2025.2615%2020.3864C26.3692%2020.9099%2028%2021.7664%2028%2024.4629C28%2025.8134%2026.8672%2028%2024.0154%2028C20.1846%2028%2019.1692%2025.7001%2019%2025.2877Z'%20fill='%233E3E3E'/%3e%3cpath%20d='M9%2025.5586L11.1487%2024.1951C11.317%2024.7025%2011.9713%2025.6378%2012.9205%2025.6378C13.8698%2025.6378%2014.3557%2024.6628%2014.3557%2024.1951V15H16.9982V24.1951C17.041%2025.4634%2016.3376%2028%2013.2332%2028C10.379%2028%209.19242%2026.3037%209%2025.5586Z'%20fill='%233E3E3E'/%3e%3c/svg%3e"
},  {
    name: "Tailwind",
    url: "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.001%206.40051C11.7342%206.40051%209.06848%208.53301%208.00098%2012.7998C9.60048%2010.667%2011.4677%209.86726%2013.6005%2010.4005C14.8182%2010.704%2015.6885%2011.587%2016.6522%2012.5655C18.2207%2014.1573%2020.0362%2016%2024.001%2016C28.2675%2016%2030.9335%2013.8673%2032.001%209.59951C30.4012%2011.7335%2028.5342%2012.5333%2026.4012%2012C25.1837%2011.6963%2024.3145%2010.8135%2023.3495%209.83501C21.782%208.24326%2019.967%206.40051%2016.001%206.40051V6.40051ZM8.00098%2016C3.73448%2016%201.06848%2018.1328%200.000976562%2022.4005C1.60048%2020.2665%203.46748%2019.4668%205.60048%2020C6.81823%2020.3038%207.68848%2021.1865%208.65223%2022.165C10.2207%2023.7568%2012.0362%2025.5995%2016.001%2025.5995C20.2675%2025.5995%2022.9335%2023.467%2024.001%2019.2003C22.4012%2021.333%2020.5342%2022.1328%2018.4012%2021.5995C17.1837%2021.296%2016.3145%2020.413%2015.3495%2019.4345C13.782%2017.8428%2011.967%2016%208.00098%2016Z'%20fill='%2338B2AC'/%3e%3c/svg%3e"
}, 
{
    name: "Shopify",
    url: "data:image/svg+xml,%3Csvg class='bg-%5B%2395BF47%5D bg-opacity-25 rounded-%5B5px%5D px-%5B7px%5D py-%5B7px%5D' xmlns='http://www.w3.org/2000/svg' width='53' height='53' viewBox='0 0 33 38' fill='none'%3E%3Cpath d='M28.9082 7.20891C28.886 7.00992 28.7091 6.92148 28.5764 6.89937C28.4437 6.87726 25.7895 6.85515 25.7895 6.85515C25.7895 6.85515 23.5556 4.68839 23.3344 4.46729C23.1133 4.24619 22.693 4.31252 22.5161 4.35674C22.5161 4.35674 22.0958 4.4894 21.3881 4.7105C21.2775 4.33463 21.1005 3.87033 20.8572 3.40602C20.061 1.88044 18.9108 1.08449 17.4953 1.08449C17.4068 1.08449 17.2962 1.08449 17.2078 1.1066C17.1635 1.06238 17.1193 1.01816 17.0751 0.951827C16.4558 0.288532 15.6816 -0.0210052 14.7527 0.00110467C12.939 0.0453243 11.1474 1.3498 9.66554 3.69345C8.626 5.32957 7.85187 7.38579 7.63069 8.9777C5.5516 9.61888 4.09182 10.0611 4.0697 10.0832C3.03016 10.4148 2.98592 10.4369 2.85321 11.4319C2.74263 12.1615 0 33.4091 0 33.4091L23.0248 37.3888L33 34.9125C33 34.9125 28.9303 7.38579 28.9082 7.20891ZM20.2379 5.06426C19.7071 5.21903 19.1099 5.41801 18.4464 5.617C18.4242 4.7105 18.3137 3.42813 17.8934 2.32264C19.2868 2.58796 19.9504 4.13564 20.2379 5.06426ZM17.252 5.99287C16.0355 6.36874 14.7306 6.76671 13.4035 7.1868C13.7795 5.77177 14.4873 4.35674 15.3499 3.42813C15.6816 3.07437 16.124 2.6985 16.6548 2.47741C17.1635 3.51657 17.252 4.99793 17.252 5.99287ZM14.7748 1.21715C15.195 1.21715 15.5489 1.30558 15.8586 1.50457C15.372 1.74778 14.8854 2.12365 14.443 2.61006C13.2929 3.84822 12.4082 5.74966 12.0543 7.60689C10.9484 7.93854 9.88672 8.27018 8.89141 8.57972C9.55495 5.66122 11.9879 1.30558 14.7748 1.21715Z' fill='%2395BF47' /%3E%3Cpath d='M28.5764 6.89842C28.4437 6.87631 25.7895 6.8542 25.7895 6.8542C25.7895 6.8542 23.5556 4.68744 23.3344 4.46634C23.246 4.3779 23.1354 4.33368 23.0248 4.33368V37.3879L33 34.9116C33 34.9116 28.9303 7.40695 28.9082 7.20796C28.8639 7.00897 28.7091 6.92053 28.5764 6.89842Z' fill='%235E8E3E' /%3E%3Cpath d='M17.4953 12.0292L16.3452 16.3627C16.3452 16.3627 15.0624 15.7657 13.5141 15.8763C11.2581 16.0089 11.236 17.424 11.2581 17.7998C11.3908 19.7455 16.4779 20.1656 16.7654 24.6981C16.9866 28.2799 14.8633 30.712 11.811 30.911C8.13944 31.1321 6.12671 28.9874 6.12671 28.9874L6.90084 25.693C6.90084 25.693 8.93569 27.2186 10.5503 27.1302C11.612 27.0639 11.988 26.2016 11.9437 25.5825C11.7889 23.062 7.63073 23.1946 7.36531 19.0601C7.14413 15.5667 9.4444 12.0292 14.5094 11.6975C16.5 11.5206 17.4953 12.0292 17.4953 12.0292Z' fill='white' /%3E%3C/svg%3E"
  },
  
  {
    name: "Liquid",
    url: "data:image/svg+xml,%3Csvg class='bg-%5B%23FFFFFF%5D bg-opacity-25 rounded-%5B5px%5D px-%5B7px%5D py-%5B7px%5D' xmlns='http://www.w3.org/2000/svg' width='53' height='53' viewBox='0 0 41 41' fill='none'%3E%3Ccircle cx='20.5' cy='20.5' r='20' fill='%23D9D9D9' stroke='%23003272' /%3E%3Cpath d='M10.68 22.695V23.919H6.54V18.222H7.98V22.695H10.68ZM12.7525 23.919H11.3125V18.222H12.7525V23.919ZM13.6549 21.066C13.6549 20.34 13.7359 19.764 13.8979 19.338C14.0659 18.912 14.3509 18.606 14.7529 18.42C15.1609 18.234 15.7279 18.141 16.4539 18.141C16.9999 18.141 17.4529 18.192 17.8129 18.294C18.1729 18.396 18.4579 18.561 18.6679 18.789C18.8779 19.017 19.0249 19.32 19.1089 19.698C19.1989 20.07 19.2439 20.526 19.2439 21.066C19.2439 21.618 19.1989 22.083 19.1089 22.461C19.0189 22.833 18.8689 23.133 18.6589 23.361C18.4489 23.589 18.1579 23.754 17.7859 23.856V23.901C17.9659 24.099 18.1279 24.303 18.2719 24.513C18.4219 24.723 18.5509 24.924 18.6589 25.116V25.143H17.0209L16.3819 24C15.6739 23.994 15.1219 23.898 14.7259 23.712C14.3299 23.52 14.0509 23.211 13.8889 22.785C13.7329 22.359 13.6549 21.786 13.6549 21.066ZM16.4539 22.74C16.8379 22.74 17.1259 22.692 17.3179 22.596C17.5099 22.5 17.6389 22.332 17.7049 22.092C17.7709 21.846 17.8039 21.504 17.8039 21.066C17.8039 20.634 17.7709 20.298 17.7049 20.058C17.6389 19.818 17.5099 19.65 17.3179 19.554C17.1259 19.452 16.8379 19.401 16.4539 19.401C16.0759 19.401 15.7879 19.452 15.5899 19.554C15.3979 19.65 15.2659 19.818 15.1939 20.058C15.1279 20.298 15.0949 20.634 15.0949 21.066C15.0949 21.504 15.1279 21.846 15.1939 22.092C15.2659 22.332 15.3979 22.5 15.5899 22.596C15.7879 22.692 16.0759 22.74 16.4539 22.74ZM25.0775 18.222V21.579C25.0775 22.167 25.0055 22.638 24.8615 22.992C24.7235 23.346 24.4805 23.604 24.1325 23.766C23.7845 23.922 23.2925 24 22.6565 24C21.9965 24 21.4835 23.922 21.1175 23.766C20.7575 23.604 20.5055 23.346 20.3615 22.992C20.2175 22.638 20.1455 22.167 20.1455 21.579V18.222H21.5855V21.552C21.5855 21.858 21.6155 22.098 21.6755 22.272C21.7355 22.446 21.8435 22.569 21.9995 22.641C22.1555 22.707 22.3745 22.74 22.6565 22.74C22.9205 22.74 23.1215 22.707 23.2595 22.641C23.4035 22.569 23.5025 22.446 23.5565 22.272C23.6105 22.098 23.6375 21.858 23.6375 21.552V18.222H25.0775ZM27.5972 23.919H26.1572V18.222H27.5972V23.919ZM28.6796 23.919V18.222H31.1726C31.6706 18.222 32.0876 18.264 32.4236 18.348C32.7596 18.426 33.0296 18.567 33.2336 18.771C33.4376 18.975 33.5846 19.26 33.6746 19.626C33.7646 19.986 33.8096 20.451 33.8096 21.021C33.8096 21.615 33.7646 22.101 33.6746 22.479C33.5846 22.857 33.4376 23.151 33.2336 23.361C33.0296 23.571 32.7596 23.718 32.4236 23.802C32.0876 23.88 31.6706 23.919 31.1726 23.919H28.6796ZM30.9656 19.437H30.1196V22.704H30.9656C31.3136 22.704 31.5866 22.665 31.7846 22.587C31.9886 22.509 32.1326 22.35 32.2166 22.11C32.3066 21.87 32.3516 21.507 32.3516 21.021C32.3516 20.559 32.3066 20.217 32.2166 19.995C32.1326 19.767 31.9886 19.617 31.7846 19.545C31.5866 19.473 31.3136 19.437 30.9656 19.437Z' fill='%23003272' /%3E%3C/svg%3E"
}

];
function Dp() {
    const e = s.useRef(null)
      , t = cp(e, {
        once: !1,
        margin: "-100px"
    })
      , n = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: [.4, .02, .2, .97]
            }
        }
    };
    return b.jsx(b.Fragment, {
        children: b.jsxs(yh.section, {
            ref: e,
            initial: "hidden",
            animate: t ? "visible" : "hidden",
            variants: {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .2,
                        delayChildren: .2
                    }
                }
            },
            className: "w-full mx-auto min-h-screen bg-[#0F1012]  rounded-t-[80px] flex items-center justify-center flex-col overflow-hidden",
            children: [b.jsx("div", {
                className: "flex justify-center items-center h-full px-14",
                children: b.jsxs("div", {
                    className: "grid gap-8 w-full mx-auto",
                    children: [b.jsxs(yh.div, {
                        variants: n,
                        className: "space-y-2 text-center",
                        children: [b.jsx("p", {
                            className: "text-2xl sm:text-4xl font-bold text-[#C4FF00]",
                            children: "🎉SUPERPOWER🎉"
                        }), b.jsx("p", {
                            className: "text-sm font-bold text-[#bababb]",
                            children: "which I have"
                        })]
                    }), b.jsx(yh.h1, {
                        variants: n,
                        className: "text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight lg:leading-[1.2]  text-white text-center",
                        children: "Crafting high-converting, user-focused Shopify stores through creative, high-performance theme development and smart e-commerce strategy."
                    })]
                })
            }), b.jsx("div", {
                className: "group relative mt-16 flex gap-6 overflow-hidden p-2",
                style: {
                    maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"
                },
                children: Array(5).fill(null).map((e => b.jsx("div", {
                    className: "flex shrink-0 animate-logo-cloud flex-row justify-around gap-6",
                    children: Lp.map(( (e, t) => b.jsx("img", {
                        src: e.url,
                        className: "h-10 w-28 px-2 ",
                        alt: `${e.name}`
                    }, t)))
                }, e)))
            })]
        })
    })
}
const Markloops="./assets/img/markloops_logo-Photoroom.png", ConversionsKing="./assets/img/conversions_king_logo-Photoroom.png", InfinityCreatives="./assets/img/infinity_creative_logo-Photoroom.png"
,Ip = [{
    title: "Shopify Developer",
    company: "Markloops Creative Agency",
    description: "At Markloops, I craft fully customizable Shopify solutions with editable sections that empower brands to manage content and layout effortlessly. I develop advanced features like bundle builders, quizzes, and smart cart upsells to enhance UX and boost conversions. My work focuses on modular, scalable, and high-performing components.",
    icon: Markloops,
    technologies: ["Shopify","Theme Development", "Liquid",  "JavaScript","CRO", "Problem Solving"],
    duration: "Feb 2025 - Present"
}, {
    title: "Shopify Developer",
    company: "Conversions King",
    description: "At Conversions King, I focused on building custom Shopify sections and reusable UI components that store owners could easily manage. I supported theme design enhancements and implemented lightweight custom features to improve functionality. My approach combined clean layouts with CRO tactics to boost performance and user experience.",
    icon: ConversionsKing,
    technologies: ["Shopify","Theme Development", "Liquid",  "JavaScript","CRO", "Problem Solving"],
    duration: "Aug 2024 – Feb 2025"
},
{
    title: "Shopify Developer",
    company: "Infinity Creatives",
    description: "At Infinity Creatives, I started my Shopify journey by building and customizing themes with clean, editable sections that store owners could manage easily. I focused on front-end performance and gained a solid foundation in theme development best practices. This role shaped my coding approach and introduced me to CRO fundamentals.",
    icon: InfinityCreatives,
    technologies: ["Shopify","Theme Development", "Liquid",  "JavaScript","CRO", "Problem Solving"],
    duration: "Mar 2023 - Jun 2024"
}
];
function Op() {
    return b.jsx("section", {
        className: "min-h-screen bg-[#F2F2F4] py-24 px-4 sm:px-6 lg:px-8 rounded-t-[80px]",
        children: b.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [b.jsx(yh.h2, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                className: "text-4xl font-bold text-[#302F2F]  mb-10 tracking-wider",
                children: "EXPERIENCE"
            }), b.jsx("div", {
                className: "",
                children: Ip.map(( (e, t) => b.jsxs(yh.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .2 * t
                    },
                    className: "group",
                    children: [b.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                        children: [b.jsx("div", {
                            className: "lg:col-span-4 ",
                            children: b.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [b.jsx("div", {
                                    className: "flex h-12 w-12 items-center justify-center rounded-[7px] bg-gray-200 text-black transition-colors duration-300",
                                    children: b.jsx("img", {
                                        src: e.icon,
                                        alt: ""
                                    })
                                }), b.jsxs("div", {
                                    children: [b.jsx("h3", {
                                        className: "text-2xl font- ",
                                        children: e.title
                                    }), b.jsx("p", {
                                        className: " mt-1",
                                        children: e.company
                                    }), b.jsx("p", {
                                        className: " text-sm mt-1",
                                        children: e.duration
                                    })]
                                })]
                            })
                        }), b.jsxs("div", {
                            className: "lg:col-span-8 space-y-2",
                            children: [b.jsx("p", {
                                className: " leading-relaxed text-gray-600",
                                children: e.description
                            }), b.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: e.technologies.map(( (e, t) => b.jsx("span", {
                                    className: "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold text-white hover:text-gray-800 bg-[#302F2F] hover:bg-gray-300 cursor-pointer transition-colors duration-300",
                                    children: e
                                }, t)))
                            })]
                        })]
                    }), t !== Ip.length - 1 && b.jsx("div", {
                        className: "w-full h-px bg-gray-300 my-8"
                    })]
                }, t)))
            })]
        })
    })
}
const Vp = () => b.jsxs("section", {
    className: "grid place-content-center gap-2 bg-[#161719] px-8 py-24 text-[#C4FF00] rounded-t-[80px]",
    children: [b.jsx(Fp, {
        href: "https://www.linkedin.com/in/ameer-hamza-81383025b/",
        children: "Linkedin"
    }), b.jsx(Fp, {
        href: "https://www.instagram.com/humza.dev/",
        children: "Instagram"
    })]
})
  , Fp = ({children: e, href: t}) => b.jsxs(yh.a, {
    initial: "initial",
    whileHover: "hovered",
    href: t,
    className: "relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl",
    style: {
        lineHeight: .75
    },
    children: [b.jsx("div", {
        children: e.split("").map(( (e, t) => b.jsx(yh.span, {
            variants: {
                initial: {
                    y: 0
                },
                hovered: {
                    y: "-100%"
                }
            },
            transition: {
                duration: .25,
                ease: "easeInOut",
                delay: .025 * t
            },
            className: "inline-block",
            children: e
        }, t)))
    }), b.jsx("div", {
        className: "absolute inset-0",
        children: e.split("").map(( (e, t) => b.jsx(yh.span, {
            variants: {
                initial: {
                    y: "100%"
                },
                hovered: {
                    y: 0
                }
            },
            transition: {
                duration: .25,
                ease: "easeInOut",
                delay: .025 * t
            },
            className: "inline-block",
            children: e
        }, t)))
    })]
});
function zp({onSectionChange: e}) {
    return s.useEffect(( () => {
        const t = () => {
            document.querySelectorAll("section").forEach((t => {
                const n = t.offsetTop
                  , i = t.offsetHeight;
                if (window.scrollY >= n - 50 && window.scrollY < n + i) {
                    const n = t.getAttribute("id");
                    e(n)
                }
            }
            ))
        }
        ;
        return window.addEventListener("scroll", t),
        () => window.removeEventListener("scroll", t)
    }
    ), [e]),
    b.jsx(Ep, {
        root: !0,
        className: "max-w-[1440px]",
        children: b.jsx("main", {
            children: b.jsxs("article", {
                children: [b.jsx("section", {
                    className: "h-screen sticky top-0",
                    id: "aboutus",
                    children: b.jsx(jp, {})
                }), b.jsx("section", {
                    className: "h-screen sticky top-0",
                    id: "projects",
                    children: b.jsx(Mp, {})
                }), b.jsx("section", {
                    className: "h-screen sticky top-0",
                    id: "skills",
                    children: b.jsx(Dp, {})
                }), b.jsx("section", {
                    className: "h-auto lg:h-screen  w-full sticky -top-32 lg:-top-[30vh]  md:mb-[270px] sm:mb-[220px] mb-[180px] lg:mb-0 ",
                    id: "experience",
                    children: b.jsx(Op, {})
                }), b.jsx("section", {
                    className: "bg-[#C4FF00] rounded-t-[80px]  sticky top-10 md:top-0",
                    id: "links",
                    children: b.jsx(Vp, {})
                })]
            })
        })
    })
}
var Bp = "undefined" != typeof Element
  , _p = "function" == typeof Map
  , Wp = "function" == typeof Set
  , Hp = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
function $p(e, t) {
    if (e === t)
        return !0;
    if (e && t && "object" == typeof e && "object" == typeof t) {
        if (e.constructor !== t.constructor)
            return !1;
        var n, i, s, r;
        if (Array.isArray(e)) {
            if ((n = e.length) != t.length)
                return !1;
            for (i = n; 0 != i--; )
                if (!$p(e[i], t[i]))
                    return !1;
            return !0
        }
        if (_p && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (r = e.entries(); !(i = r.next()).done; )
                if (!t.has(i.value[0]))
                    return !1;
            for (r = e.entries(); !(i = r.next()).done; )
                if (!$p(i.value[1], t.get(i.value[0])))
                    return !1;
            return !0
        }
        if (Wp && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (r = e.entries(); !(i = r.next()).done; )
                if (!t.has(i.value[0]))
                    return !1;
            return !0
        }
        if (Hp && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if ((n = e.length) != t.length)
                return !1;
            for (i = n; 0 != i--; )
                if (e[i] !== t[i])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof t.valueOf)
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof t.toString)
            return e.toString() === t.toString();
        if ((n = (s = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
        for (i = n; 0 != i--; )
            if (!Object.prototype.hasOwnProperty.call(t, s[i]))
                return !1;
        if (Bp && e instanceof Element)
            return !1;
        for (i = n; 0 != i--; )
            if (("_owner" !== s[i] && "__v" !== s[i] && "__o" !== s[i] || !e.$$typeof) && !$p(e[s[i]], t[s[i]]))
                return !1;
        return !0
    }
    return e != e && t != t
}
const Up = l((function(e, t) {
    try {
        return $p(e, t)
    } catch (n) {
        if ((n.message || "").match(/stack|recursion/i))
            return !1;
        throw n
    }
}
));
const qp = l((function(e, t, n, i, s, r, o, a) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var c = [n, i, s, r, o, a]
              , u = 0;
            (l = new Error(t.replace(/%s/g, (function() {
                return c[u++]
            }
            )))).name = "Invariant Violation"
        }
        throw l.framesToPop = 1,
        l
    }
}
));
const Gp = l((function(e, t, n, i) {
    var s = n ? n.call(i, e, t) : void 0;
    if (void 0 !== s)
        return !!s;
    if (e === t)
        return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t)
        return !1;
    var r = Object.keys(e)
      , o = Object.keys(t);
    if (r.length !== o.length)
        return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), l = 0; l < r.length; l++) {
        var c = r[l];
        if (!a(c))
            return !1;
        var u = e[c]
          , d = t[c];
        if (!1 === (s = n ? n.call(i, u, d, c) : void 0) || void 0 === s && u !== d)
            return !1
    }
    return !0
}
));
var Yp = (e => (e.BASE = "base",
e.BODY = "body",
e.HEAD = "head",
e.HTML = "html",
e.LINK = "link",
e.META = "meta",
e.NOSCRIPT = "noscript",
e.SCRIPT = "script",
e.STYLE = "style",
e.TITLE = "title",
e.FRAGMENT = "Symbol(react.fragment)",
e))(Yp || {})
  , Zp = {
    rel: ["amphtml", "canonical", "alternate"]
}
  , Xp = {
    type: ["application/ld+json"]
}
  , Kp = {
    charset: "",
    name: ["generator", "robots", "description"],
    property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
}
  , Qp = Object.values(Yp)
  , Jp = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
}
  , em = Object.entries(Jp).reduce(( (e, [t,n]) => (e[n] = t,
e)), {})
  , tm = "data-rh"
  , nm = "defaultTitle"
  , im = "defer"
  , sm = "encodeSpecialCharacters"
  , rm = "onChangeClientState"
  , om = "titleTemplate"
  , am = "prioritizeSeoTags"
  , lm = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
        const i = e[n];
        if (Object.prototype.hasOwnProperty.call(i, t))
            return i[t]
    }
    return null
}
  , cm = e => {
    let t = lm(e, "title");
    const n = lm(e, om);
    if (Array.isArray(t) && (t = t.join("")),
    n && t)
        return n.replace(/%s/g, ( () => t));
    const i = lm(e, nm);
    return t || i || void 0
}
  , um = e => lm(e, rm) || ( () => {}
)
  , dm = (e, t) => t.filter((t => void 0 !== t[e])).map((t => t[e])).reduce(( (e, t) => ({
    ...e,
    ...t
})), {})
  , hm = (e, t) => t.filter((e => void 0 !== e.base)).map((e => e.base)).reverse().reduce(( (t, n) => {
    if (!t.length) {
        const i = Object.keys(n);
        for (let s = 0; s < i.length; s += 1) {
            const r = i[s].toLowerCase();
            if (-1 !== e.indexOf(r) && n[r])
                return t.concat(n)
        }
    }
    return t
}
), [])
  , pm = (e, t, n) => {
    const i = {};
    return n.filter((t => !!Array.isArray(t[e]) || (void 0 !== t[e] && (t[e],
    console && console.warn),
    !1))).map((t => t[e])).reverse().reduce(( (e, n) => {
        const s = {};
        n.filter((e => {
            let n;
            const r = Object.keys(e);
            for (let i = 0; i < r.length; i += 1) {
                const s = r[i]
                  , o = s.toLowerCase();
                -1 === t.indexOf(o) || "rel" === n && "canonical" === e[n].toLowerCase() || "rel" === o && "stylesheet" === e[o].toLowerCase() || (n = o),
                -1 === t.indexOf(s) || "innerHTML" !== s && "cssText" !== s && "itemprop" !== s || (n = s)
            }
            if (!n || !e[n])
                return !1;
            const o = e[n].toLowerCase();
            return i[n] || (i[n] = {}),
            s[n] || (s[n] = {}),
            !i[n][o] && (s[n][o] = !0,
            !0)
        }
        )).reverse().forEach((t => e.push(t)));
        const r = Object.keys(s);
        for (let t = 0; t < r.length; t += 1) {
            const e = r[t]
              , n = {
                ...i[e],
                ...s[e]
            };
            i[e] = n
        }
        return e
    }
    ), []).reverse()
}
  , mm = (e, t) => {
    if (Array.isArray(e) && e.length)
        for (let n = 0; n < e.length; n += 1) {
            if (e[n][t])
                return !0
        }
    return !1
}
  , fm = e => Array.isArray(e) ? e.join("") : e
  , gm = (e, t) => Array.isArray(e) ? e.reduce(( (e, n) => (( (e, t) => {
    const n = Object.keys(e);
    for (let i = 0; i < n.length; i += 1)
        if (t[n[i]] && t[n[i]].includes(e[n[i]]))
            return !0;
    return !1
}
)(n, t) ? e.priority.push(n) : e.default.push(n),
e)), {
    priority: [],
    default: []
}) : {
    default: e,
    priority: []
}
  , vm = (e, t) => ({
    ...e,
    [t]: void 0
})
  , ym = ["noscript", "script", "style"]
  , xm = (e, t=!0) => !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
  , bm = e => Object.keys(e).reduce(( (t, n) => {
    const i = void 0 !== e[n] ? `${n}="${e[n]}"` : `${n}`;
    return t ? `${t} ${i}` : i
}
), "")
  , wm = (e, t={}) => Object.keys(e).reduce(( (t, n) => (t[Jp[n] || n] = e[n],
t)), t)
  , Sm = (e, t) => t.map(( (t, n) => {
    const i = {
        key: n,
        [tm]: !0
    };
    return Object.keys(t).forEach((e => {
        const n = Jp[e] || e;
        if ("innerHTML" === n || "cssText" === n) {
            const e = t.innerHTML || t.cssText;
            i.dangerouslySetInnerHTML = {
                __html: e
            }
        } else
            i[n] = t[e]
    }
    )),
    c.createElement(e, i)
}
))
  , Cm = (e, t, n=!0) => {
    switch (e) {
    case "title":
        return {
            toComponent: () => ( (e, t, n) => {
                const i = wm(n, {
                    key: t,
                    [tm]: !0
                });
                return [c.createElement("title", i, t)]
            }
            )(0, t.title, t.titleAttributes),
            toString: () => ( (e, t, n, i) => {
                const s = bm(n)
                  , r = fm(t);
                return s ? `<${e} ${tm}="true" ${s}>${xm(r, i)}</${e}>` : `<${e} ${tm}="true">${xm(r, i)}</${e}>`
            }
            )(e, t.title, t.titleAttributes, n)
        };
    case "bodyAttributes":
    case "htmlAttributes":
        return {
            toComponent: () => wm(t),
            toString: () => bm(t)
        };
    default:
        return {
            toComponent: () => Sm(e, t),
            toString: () => ( (e, t, n=!0) => t.reduce(( (t, i) => {
                const s = i
                  , r = Object.keys(s).filter((e => !("innerHTML" === e || "cssText" === e))).reduce(( (e, t) => {
                    const i = void 0 === s[t] ? t : `${t}="${xm(s[t], n)}"`;
                    return e ? `${e} ${i}` : i
                }
                ), "")
                  , o = s.innerHTML || s.cssText || ""
                  , a = -1 === ym.indexOf(e);
                return `${t}<${e} ${tm}="true" ${r}${a ? "/>" : `>${o}</${e}>`}`
            }
            ), ""))(e, t, n)
        }
    }
}
  , Em = e => {
    const {baseTag: t, bodyAttributes: n, encode: i=!0, htmlAttributes: s, noscriptTags: r, styleTags: o, title: a="", titleAttributes: l, prioritizeSeoTags: c} = e;
    let {linkTags: u, metaTags: d, scriptTags: h} = e
      , p = {
        toComponent: () => {}
        ,
        toString: () => ""
    };
    return c && ({priorityMethods: p, linkTags: u, metaTags: d, scriptTags: h} = ( ({metaTags: e, linkTags: t, scriptTags: n, encode: i}) => {
        const s = gm(e, Kp)
          , r = gm(t, Zp)
          , o = gm(n, Xp);
        return {
            priorityMethods: {
                toComponent: () => [...Sm("meta", s.priority), ...Sm("link", r.priority), ...Sm("script", o.priority)],
                toString: () => `${Cm("meta", s.priority, i)} ${Cm("link", r.priority, i)} ${Cm("script", o.priority, i)}`
            },
            metaTags: s.default,
            linkTags: r.default,
            scriptTags: o.default
        }
    }
    )(e)),
    {
        priority: p,
        base: Cm("base", t, i),
        bodyAttributes: Cm("bodyAttributes", n, i),
        htmlAttributes: Cm("htmlAttributes", s, i),
        link: Cm("link", u, i),
        meta: Cm("meta", d, i),
        noscript: Cm("noscript", r, i),
        script: Cm("script", h, i),
        style: Cm("style", o, i),
        title: Cm("title", {
            title: a,
            titleAttributes: l
        }, i)
    }
}
  , jm = []
  , Tm = !("undefined" == typeof window || !window.document || !window.document.createElement)
  , km = class {
    constructor(e, t) {
        i(this, "instances", []),
        i(this, "canUseDOM", Tm),
        i(this, "context"),
        i(this, "value", {
            setHelmet: e => {
                this.context.helmet = e
            }
            ,
            helmetInstances: {
                get: () => this.canUseDOM ? jm : this.instances,
                add: e => {
                    (this.canUseDOM ? jm : this.instances).push(e)
                }
                ,
                remove: e => {
                    const t = (this.canUseDOM ? jm : this.instances).indexOf(e);
                    (this.canUseDOM ? jm : this.instances).splice(t, 1)
                }
            }
        }),
        this.context = e,
        this.canUseDOM = t || !1,
        t || (e.helmet = Em({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        }))
    }
}
  , Pm = c.createContext({})
  , Rm = (e = class extends s.Component {
    constructor(t) {
        super(t),
        i(this, "helmetData"),
        this.helmetData = new km(this.props.context || {},e.canUseDOM)
    }
    render() {
        return c.createElement(Pm.Provider, {
            value: this.helmetData.value
        }, this.props.children)
    }
}
,
i(e, "canUseDOM", Tm),
e)
  , Mm = (e, t) => {
    const n = document.head || document.querySelector("head")
      , i = n.querySelectorAll(`${e}[${tm}]`)
      , s = [].slice.call(i)
      , r = [];
    let o;
    return t && t.length && t.forEach((t => {
        const n = document.createElement(e);
        for (const e in t)
            if (Object.prototype.hasOwnProperty.call(t, e))
                if ("innerHTML" === e)
                    n.innerHTML = t.innerHTML;
                else if ("cssText" === e)
                    n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                else {
                    const i = e
                      , s = void 0 === t[i] ? "" : t[i];
                    n.setAttribute(e, s)
                }
        n.setAttribute(tm, "true"),
        s.some(( (e, t) => (o = t,
        n.isEqualNode(e)))) ? s.splice(o, 1) : r.push(n)
    }
    )),
    s.forEach((e => {
        var t;
        return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
    }
    )),
    r.forEach((e => n.appendChild(e))),
    {
        oldTags: s,
        newTags: r
    }
}
  , Nm = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n)
        return;
    const i = n.getAttribute(tm)
      , s = i ? i.split(",") : []
      , r = [...s]
      , o = Object.keys(t);
    for (const a of o) {
        const e = t[a] || "";
        n.getAttribute(a) !== e && n.setAttribute(a, e),
        -1 === s.indexOf(a) && s.push(a);
        const i = r.indexOf(a);
        -1 !== i && r.splice(i, 1)
    }
    for (let a = r.length - 1; a >= 0; a -= 1)
        n.removeAttribute(r[a]);
    s.length === r.length ? n.removeAttribute(tm) : n.getAttribute(tm) !== o.join(",") && n.setAttribute(tm, o.join(","))
}
  , Am = (e, t) => {
    const {baseTag: n, bodyAttributes: i, htmlAttributes: s, linkTags: r, metaTags: o, noscriptTags: a, onChangeClientState: l, scriptTags: c, styleTags: u, title: d, titleAttributes: h} = e;
    Nm("body", i),
    Nm("html", s),
    ( (e, t) => {
        void 0 !== e && document.title !== e && (document.title = fm(e)),
        Nm("title", t)
    }
    )(d, h);
    const p = {
        baseTag: Mm("base", n),
        linkTags: Mm("link", r),
        metaTags: Mm("meta", o),
        noscriptTags: Mm("noscript", a),
        scriptTags: Mm("script", c),
        styleTags: Mm("style", u)
    }
      , m = {}
      , f = {};
    Object.keys(p).forEach((e => {
        const {newTags: t, oldTags: n} = p[e];
        t.length && (m[e] = t),
        n.length && (f[e] = p[e].oldTags)
    }
    )),
    t && t(),
    l(e, m, f)
}
  , Lm = null
  , Dm = e => {
    Lm && cancelAnimationFrame(Lm),
    e.defer ? Lm = requestAnimationFrame(( () => {
        Am(e, ( () => {
            Lm = null
        }
        ))
    }
    )) : (Am(e),
    Lm = null)
}
  , Im = class extends s.Component {
    constructor() {
        super(...arguments),
        i(this, "rendered", !1)
    }
    shouldComponentUpdate(e) {
        return !Gp(e, this.props)
    }
    componentDidUpdate() {
        this.emitChange()
    }
    componentWillUnmount() {
        const {helmetInstances: e} = this.props.context;
        e.remove(this),
        this.emitChange()
    }
    emitChange() {
        const {helmetInstances: e, setHelmet: t} = this.props.context;
        let n = null;
        const i = (s = e.get().map((e => {
            const t = {
                ...e.props
            };
            return delete t.context,
            t
        }
        )),
        {
            baseTag: hm(["href"], s),
            bodyAttributes: dm("bodyAttributes", s),
            defer: lm(s, im),
            encode: lm(s, sm),
            htmlAttributes: dm("htmlAttributes", s),
            linkTags: pm("link", ["rel", "href"], s),
            metaTags: pm("meta", ["name", "charset", "http-equiv", "property", "itemprop"], s),
            noscriptTags: pm("noscript", ["innerHTML"], s),
            onChangeClientState: um(s),
            scriptTags: pm("script", ["src", "innerHTML"], s),
            styleTags: pm("style", ["cssText"], s),
            title: cm(s),
            titleAttributes: dm("titleAttributes", s),
            prioritizeSeoTags: mm(s, am)
        });
        var s;
        Rm.canUseDOM ? Dm(i) : Em && (n = Em(i)),
        t(n)
    }
    init() {
        if (this.rendered)
            return;
        this.rendered = !0;
        const {helmetInstances: e} = this.props.context;
        e.add(this),
        this.emitChange()
    }
    render() {
        return this.init(),
        null
    }
}
  , Om = (t = class extends s.Component {
    shouldComponentUpdate(e) {
        return !Up(vm(this.props, "helmetData"), vm(e, "helmetData"))
    }
    mapNestedChildrenToProps(e, t) {
        if (!t)
            return null;
        switch (e.type) {
        case "script":
        case "noscript":
            return {
                innerHTML: t
            };
        case "style":
            return {
                cssText: t
            };
        default:
            throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
        }
    }
    flattenArrayTypeChildren(e, t, n, i) {
        return {
            ...t,
            [e.type]: [...t[e.type] || [], {
                ...n,
                ...this.mapNestedChildrenToProps(e, i)
            }]
        }
    }
    mapObjectTypeChildren(e, t, n, i) {
        switch (e.type) {
        case "title":
            return {
                ...t,
                [e.type]: i,
                titleAttributes: {
                    ...n
                }
            };
        case "body":
            return {
                ...t,
                bodyAttributes: {
                    ...n
                }
            };
        case "html":
            return {
                ...t,
                htmlAttributes: {
                    ...n
                }
            };
        default:
            return {
                ...t,
                [e.type]: {
                    ...n
                }
            }
        }
    }
    mapArrayTypeChildrenToProps(e, t) {
        let n = {
            ...t
        };
        return Object.keys(e).forEach((t => {
            n = {
                ...n,
                [t]: e[t]
            }
        }
        )),
        n
    }
    warnOnInvalidChildren(e, t) {
        return qp(Qp.some((t => e.type === t)), "function" == typeof e.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Qp.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),
        qp(!t || "string" == typeof t || Array.isArray(t) && !t.some((e => "string" != typeof e)), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),
        !0
    }
    mapChildrenToProps(e, t) {
        let n = {};
        return c.Children.forEach(e, (e => {
            if (!e || !e.props)
                return;
            const {children: i, ...s} = e.props
              , r = Object.keys(s).reduce(( (e, t) => (e[em[t] || t] = s[t],
            e)), {});
            let {type: o} = e;
            switch ("symbol" == typeof o ? o = o.toString() : this.warnOnInvalidChildren(e, i),
            o) {
            case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(i, t);
                break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
                n = this.flattenArrayTypeChildren(e, n, r, i);
                break;
            default:
                t = this.mapObjectTypeChildren(e, t, r, i)
            }
        }
        )),
        this.mapArrayTypeChildrenToProps(n, t)
    }
    render() {
        const {children: e, ...t} = this.props;
        let n = {
            ...t
        }
          , {helmetData: i} = t;
        if (e && (n = this.mapChildrenToProps(e, n)),
        i && !(i instanceof km)) {
            i = new km(i.context,!0),
            delete n.helmetData
        }
        return i ? c.createElement(Im, {
            ...n,
            context: i.value
        }) : c.createElement(Pm.Consumer, null, (e => c.createElement(Im, {
            ...n,
            context: e
        })))
    }
}
,
i(t, "defaultProps", {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1
}),
t);
const Vm = ({title: e, description: t, path: n}) => {
    const i = "https://ameerhamza.com";
    return b.jsxs(Om, {
        children: [b.jsx("title", {
            children: e
        }), b.jsx("meta", {
            name: "description",
            content: t
        }), b.jsx("link", {
            rel: "canonical",
            href: `${i}${n}`
        }), b.jsx("meta", {
            property: "og:title",
            content: e
        }), b.jsx("meta", {
            property: "og:description",
            content: t
        }), b.jsx("meta", {
            property: "og:url",
            content: `${i}${n}`
        })]
    })
}
  , Fm = ({className: e, ...t}) => b.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: e,
    ...t,
    children: [b.jsx("path", {
        d: "M18 6 6 18"
    }), b.jsx("path", {
        d: "m6 6 12 12"
    })]
});
function zm() {
    const [e,t] = s.useState(!0);
    return b.jsxs(b.Fragment, {
        children: [b.jsx("div", {
            className: "absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out " + (e ? "translate-y-0" : "-translate-y-full"),
            children: b.jsxs("div", {
                className: "flex w-full items-center gap-x-6 bg-[#C4FF00] px-6 py-4 sm:px-3.5 sm:before:flex-1",
                children: [b.jsxs("div", {
                    className: "flex items-center text-sm font-medium leading-6 text-white",
                    children: [b.jsx("p", {
                        className: "font-bold text-gray-800",
                        children: "Crafting Beautiful Shopify Experiences!"
                    }), b.jsx(ks, {
                        to: "/projects",
                        className: "ml-3 flex-none rounded-lg bg-\[\#161719\] px-3 py-1 text-xs text-white shadow-sm hover:bg-gray-900/80",
                        children: "See My Work"
                    })]
                }), b.jsx("div", {
                    className: "flex flex-1 justify-end",
                    children: b.jsx("button", {
                        type: "button",
                        onClick: () => t(!1),
                        "aria-label": "Dismiss",
                        children: b.jsx(Fm, {
                            className: "h-5 w-5 text-gray-800"
                        })
                    })
                })]
            })
        }), e && b.jsx("div", {
            className: "h-[52px]"
        })]
    })
}
const Bm = ({setActiveSection: e}) => b.jsxs("div", {
    children: [b.jsx(Vm, {
        title: "Ameer Hamza - Shopify Developer",
        description: "Welcome to my portfolio website. I'm a Full Stack Developer specializing in modern web technologies.",
        path: "/"
    }), b.jsx(zm, {}), b.jsx(pp, {}), b.jsx(zp, {
        onSectionChange: e
    })]
})
  , _m = [{
    brand: "Moxielash",
  name: "Moxielash - Custom Shopify Store Development",
  slug: "moxielash-ecommerce-store",
  description: "Worked on the full development of the Moxielash Shopify store with a strong focus on CRO (Conversion Rate Optimization), user experience, and customizability. The goal was to create a performance-optimized storefront that not only looked premium but also converted visitors into customers efficiently. The design was built from scratch with responsiveness in mind, and a scalable, editable architecture tailored for the brand’s internal team.",
  features: [
    "Custom editable sections tailored for the Shopify Theme Customizer",
"Dynamic bundle cart and in-cart experiences",
"Advanced product card logic",
"Interactive product pages with variant logic and upsell opportunities",
"Responsive layout optimized for all screen sizes",
"Chat integration for improved support and user flow",
"Sticky cart features and smooth page transitions",
"Hamburger menu and advanced mega menu",
"User journey optimization focused on engagement and retention",
"Scalable, high-performance storefront with improved sales metrics"
  ],
  techStack: [
"Shopify", "Liquid", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Shopify Theme Customizer", "Third-party Chat Integration"  ],
  liveLink: "https://www.moxielash.com/",
  image: kp,
  thumbnail:"./assets/imag/MOX.png",
  startDate: "Apr 2023",
  endDate: "Aug 2024"
}
,
{
    brand: "ProlonLife",
  name: "ProlonLife - Custom Shopify Store Development",
  slug: "prolonlife-ecommerce-store",
  description: "Built a high-performance, fully custom Shopify store for the beauty brand Moxielash, focused on both front-end design and conversion-optimized functionality. The project emphasized fast page loads, clean architecture, and a user experience optimized for both desktop and mobile.",
  features: [
    "Custom Liquid sections styled for maximum flexibility and fast performance",
"Fully responsive layout with a smooth hamburger menu and advanced mega menu",
"Dynamic product card components for enhanced visual interaction",
"Fully custom bundle cart experience",
"Interactive product pages with variant logic",
"Chat integration for improved customer support",
"Editable sections via the Shopify Theme Customizer for easy content updates",
"Custom JavaScript-based interactions to enhance user experience and engagement",
"Built with scalability, performance, and clean UX in mind"
  ],
  techStack: [
    "Shopify", "Liquid", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Shopify Theme Customizer", "Third-party chat integration"
  ],
  liveLink: "https://prolon.eu/",
  image: Tp,
  thumbnail:"./assets/imag/pro.png",
  startDate: "Jul 2023",
  endDate: "Feb 2025"
}



, {
    brand: "L-Nutura-Health",
  name: "L-Nutura-Health - Custom Shopify Store Development",
  slug: "l-nutura-health-ecommerce-store",
  description: "Built a custom Shopify store for L-Nutura-Health with a strong Conversion Rate Optimization (CRO) focus. Designed custom sections, a tailored product page, and a clear, responsive UI to maximize sales and enhance user experience. The store is fully editable through Shopify customizer, allowing the team to easily update content without needing a developer.",
  features: [
    "Custom design tailored to L-Nutura-Health's branding",
    "Full CRO focus to maximize conversions",
    "Custom sections and tailored product page",
    "Responsive and performance-optimized for all devices",
    "Completely editable through Shopify customizer"
  ],
  techStack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Liquid",
    "Shopify",
    "Tailwind CSS"
  ],
  liveLink: "",
  image: Pp,
  thumbnail:"./assets/imag/LN.png",
  startDate: "Jan 2024",
  endDate: "Apr 2025"
}
];
const Wm = {
    variants: {
        full: {
            backgroundColor: "#fff"
        },
        partial: {
            backgroundColor: "#fff"
        }
    },
    initial: "partial",
    whileInView: "full",
    viewport: {
        amount: 1,
        once: !1
    }
};
function Hm() {
    const e = s.useRef(null)
      , t = s.useRef(null)
      , {position: n} = function(e) {
        const [t,n] = s.useState([0, 0]);
        return s.useEffect(( () => {
            if (!e || !e.current)
                return;
            const t = document.body.scrollHeight
              , i = e.current.offsetTop
              , s = i + e.current.offsetHeight;
            n([i / t, s / t])
        }
        ), []),
        {
            position: t
        }
    }(e)
      , [i,r] = s.useState(0)
      , {scrollYProgress: o, scrollY: a} = ap()
      , l = Ph(o, n, [0, i]);
    var c, u, d;
    return c = a,
    u = "change",
    d = e => {}
    ,
    s.useInsertionEffect(( () => c.on(u, d)), [c, u, d]),
    s.useEffect(( () => {
        window.scrollTo(0, 0)
    }
    ), []),
    s.useEffect(( () => {
        window.addEventListener("scroll", ( () => {}
        ))
    }
    ), []),
    s.useEffect(( () => {
        if (!t || !t.current)
            return;
        const e = t.current.parentElement
          , n = window.innerWidth - document.documentElement.clientWidth
          , i = () => {
            if (t && t.current) {
                const i = t.current.clientWidth - window.innerWidth + n + 2 * e.offsetLeft;
                r(-i)
            }
        }
        ;
        i();
        const s = ke(i, 10);
        return window.addEventListener("resize", s),
        () => window.removeEventListener("resize", s)
    }
    ), []),
    b.jsxs(b.Fragment, {
        children: [b.jsx(Vm, {
            title: "Projects",
            description: "Welcome to my portfolio website. I'm a Full Stack Developer specializing in modern web technologies.",
            path: "/projects"
        }), b.jsx("section", {
            className: "relative grid min-h-screen w-full place-content-center overflow-hidden ",
            children: b.jsxs("h2", {
                className: "relative z-0 text-[14vw] font-black text-neutral-800 md:text-[200px]",
                children: ["PROJECTS", b.jsx("span", {
                    className: "text-[#C4FF00]",
                    children: "."
                })]
            })
        }), b.jsx("section", {
            ref: e,
            children: b.jsx("div", {
                className: "w-full mx-auto",
                style: {
                    height: "300vh"
                },
                children: b.jsx("div", {
                    className: "sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden",
                    children: b.jsx(yh.div, {
                        ref: t,
                        className: "flex gap-10",
                        style: {
                            x: l
                        },
                        children: _m.map(( (e, t) => s.createElement(yh.div, {
                            ...Wm,
                            key: e.id,
                            className: "group relative  w-[300px] md:w-[500px] overflow-hidden "
                        }, b.jsxs(ks, {
                            to: e.slug,
                            children: [b.jsx(yh.img, {
                                className: "w-full flex-shrink-0 h-full object-cover rounded-3xl",
                                src: null == e ? void 0 : e.image,
                                alt: "img"
                            }, e.id), b.jsx("div", {
                                className: "absolute top-4 right-4 bg-\[\#161719\] p-2 text-[#C4FF00] rounded-3xl",
                                children: b.jsx($e, {})
                            })]
                        }))))
                    })
                })
            })
        }), b.jsxs("footer", {
            className: "group ",
            children: [b.jsx("h1", {
                className: "text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear"
            }), b.jsx("section", {
                className: "rounded-tr-full rounded-tl-full",
                children: b.jsx(Vp, {})
            })]
        })]
    })
}
const $m = {
    blogs: [{
  slug: "custom-shopify-theme-development-from-scratch",
  title: "Custom Shopify Theme Development From Scratch",
  author: "Ameer Hamza",
  date: "2025-06-14",
  readingTime: "7 min",
  topic: "SHOPIFY DEVELOPMENT",
    thumbnail:"./assets/img/Custom Theme.png",
  image: "https://i.ibb.co/JR0ns1Qr/Custom-Theme.png",
  content: "Creating a custom Shopify theme from scratch gives you complete control over your store’s look, feel, and functionality. Unlike pre-built themes that often come with unnecessary code, limitations, or difficult-to-edit structures, building from scratch allows you to design a clean, efficient, and fully tailored solution. You can implement exactly what your client needs — lightweight pages, fast loading times, SEO-friendly structure, and full alignment with their brand. By leveraging Shopify’s powerful tools like Liquid, Sections, Snippets, and Schema, developers can create flexible, reusable components that streamline future development and give merchants an intuitive editing experience. From organizing your file structure and using Shopify CLI to building your first custom Section with editable settings, every part of the process is designed to offer more control and better performance. Liquid enables you to combine static HTML with dynamic content, while Schema lets you define merchant-editable options directly in the theme editor. Writing clean, modular, and DRY code not only improves maintainability but also helps optimize performance and SEO. The final result is a future-proof Shopify theme — fast, scalable, customizable, and aligned with the specific needs of your client — delivering a smooth customer experience and a store that stands out from the rest.",
  publishDate: "14 june, 2025",
  metaTitle: "Custom Shopify Theme Development: A Step-by-step Guide",
  metaDescription: "Learn how to develop a custom Shopify theme from scratch with Liquid, Sections, Snippets, and Schema. Build lightweight, scalable, SEO-optimized stores tailored to your clients.",
  summary: "",
  tags: [
    "Liquid",
    "Shopify CLI",
    "Custom Theme Development",
    "Web Development"
  ],
  categories: [
    "Technology",
    "Web Development"
  ]
}
, {
  slug: "cro-for-shopify-stores",
  title: "How Conversion Rate Optimization (CRO) Boosts Your Shopify Store’s Success",
  author: "Ameer Hamza",
  date: "2025-06-14",
  readingTime: "7 min",
  topic: "SHOPIFY DEVELOPMENT",
    thumbnail:"./assets/img/CRO.png",
  image: "https://i.ibb.co/wFT99dx5/CRO.png",
  content: "Your Shopify store’s success isn’t just about attracting traffic — it’s about converting that traffic into paying customers. That’s where Conversion Rate Optimization (CRO) comes in. CRO focuses on improving every stage of the customer journey, from the moment a visitor lands on your homepage to the final “Buy Now” click. By optimizing key areas like call-to-action buttons, product pages, and the checkout process, you can reduce friction and guide users toward completing their purchase. Adding trust-building elements such as reviews, ratings, and testimonials (social proof) also helps influence decisions. Beyond content, performance plays a crucial role — fast-loading pages, responsive design, and custom-built sections tailored to user behavior can significantly enhance the overall shopping experience. When executed properly, CRO strategies boost your store’s revenue by making the most of your existing traffic — no extra ad spend required.",
  publishDate: "14 june, 2025",
  metaTitle: "How Conversion Rate Optimization (CRO) Boosts Your Shopify Success",
  metaDescription: "Learn how CRO techniques can maximize conversions in your Shopify store. From clear calls to action to fast-loading components, discover strategies to grow your revenue.",
  tags: [
    "CRO",
    "Shopify",
    "Conversions",
    "Design",
    "E-commerce"
  ],
  categories: [
    "Technology",
    "Web Development"
  ]
}
,{
  slug: "shopify-speed-optimization-techniques",
  title: "Shopify Speed Optimization Techniques That Actually Work",
  author: "Ameer Hamza",
  date: "2025-06-14",
  readingTime: "6 min",
  topic: "SHOPIFY DEVELOPMENT",
    thumbnail:"./assets/img/Speed.png",
  image: "https://i.ibb.co/pjJG5mfw/Speed.png",
  content: "Slow-loading Shopify stores often face high bounce rates, lower SEO rankings, and poor user experiences — all of which directly impact sales. Whether you’re building a custom theme from scratch or fine-tuning an existing one, optimizing performance is crucial. There are several practical techniques to significantly reduce load times and improve responsiveness. These include minimizing and combining CSS and JavaScript files, enabling lazy loading for images, compressing assets, and removing unused code. Efficient use of Liquid can also cut down on unnecessary rendering and speed up page loads. Additionally, implementing code-splitting, leveraging content delivery networks (CDNs), and using proper caching strategies can ensure content is delivered faster across all regions. Each of these improvements may seem small on its own, but together they create a fast, seamless shopping experience that keeps users engaged, improves conversion rates, and boosts your store’s visibility in search engine results. In our full guide, we’ll break down these techniques step by step, with actionable code examples and best practices to help you optimize your Shopify theme for performance.", 
  publishDate: "14 june, 2025",
  metaTitle: "Shopify Speed Optimization Techniques That Actually Work",
  metaDescription: "Learn actionable techniques to cut loading speeds and boost performance for your Shopify store. Compress assets, employ lazy loading, use Liquid efficiently, and more!",
  tags: [
    "Page Speed",
    "Lazy Loading",
    "Liquid Optimization",
    "Shopify Performance"
  ],
  categories: [
    "Technology",
    "Web Development"
  ]
}

, {
  slug: "seo-best-practices-for-shopify-developers",
  title: "5 Must-Know SEO Best Practices for Shopify Developers",
  author: "Ameer Hamza",
  date: "2025-06-14",
  readingTime: "7 min",
  topic: "SHOPIFY DEVELOPMENT",
    thumbnail:"./assets/img/SEO.png",
  image: "https://i.ibb.co/ynvWr9vK/SEO.png",
  content: "Improving a Shopify store’s search visibility starts right at the code level. As a developer, you have the power to influence critical SEO factors directly through your theme’s Liquid files. By implementing semantic HTML, clean and descriptive URL structures, canonical tags, and rich snippets, you lay a strong foundation for search engines to understand and rank your site effectively. In this guide, we’ll walk through how to add meaningful title and meta description tags, set up canonical URLs to prevent duplicate content issues, and use Product Schema for enhanced search results with rich snippets like price and availability. We’ll also cover best practices for handling pagination to ensure that category and collection pages are indexed properly. Whether you’re building a custom theme or modifying an existing one, applying these SEO techniques will help your store gain better visibility, attract more organic traffic, and ultimately convert more visitors into customers.",
  publishDate: "14 june, 2025",
  metaTitle: "5 Must-Know SEO Best Practices for Shopify Developers",
  metaDescription: "Boost your Shopify store's search visibility by applying these SEO best practices directly in your Liquid files — from rich snippets to pagination and canonical URLs.",
  tags: [
    "SEO",
    "Liquid",
    "Structured Data",
    "Page Title",
    "Canonical URL"
  ],
  categories: [
    "Technology",
    "Web Development"
  ]
}

,{
  slug: "custom-vs-prebuilt-shopify-themes",
  title: "Custom vs. Pre-Built Shopify Themes: Which Should You Develop?",
  author: "Ameer Hamza",
  date: "2025-06-14",
  readingTime: "7 min",
  topic: "SHOPIFY DEVELOPMENT",
thumbnail:"./assets/img/Custom VS Pre-Built.png",
  image: "https://i.ibb.co/FLXcM8cL/Custom-VS-Pre-Built.png",
  content: "When designing a Shopify store, deciding between a custom theme and a pre-built one can be a crucial and sometimes challenging choice. Custom themes provide full control over both design and functionality, making them ideal for creating storefronts that are not only visually unique but also scalable and optimized for performance. Built from the ground up, they ensure clean, maintainable code, faster load times, and long-term adaptability to evolving business needs. On the other hand, pre-built themes are typically more affordable and quicker to launch, offering a variety of built-in design presets and customization options. However, they often come with bloated code, unnecessary features, and limited flexibility — which can become a hurdle when more advanced or brand-specific customization is needed",
  publishDate: "14 june, 2025",
  metaTitle: "Custom vs. Pre-Built Shopify Themes: Which Should You Develop?",
  metaDescription: "Discover the pros and cons of custom vs. pre-built Shopify themes. Learn pricing implications, maintenance, and when it's worth choosing custom over a pre-built solution.",
  tags: [
    "Custom Themes",
    "Pre-Built Themes",
    "Shopify Development",
    "Design Choices"
  ],
  categories: [
    "Technology",
    "Web Development"
  ]
},


{
  slug: "schema-snippets-liquid-blog-seo",
  title: "Schema, Snippets, and Liquid — Making Your Shopify Blog SEO-Friendly",
  author: "Ameer Hamza",
  date: "2025-06-14",
  readingTime: "7 min",
  topic: "SHOPIFY DEVELOPMENT",
  thumbnail:"./assets/img/BLOG.png",
  image: "https://i.ibb.co/JRLNt4Mx/BLOG.png",
  content: "Your Shopify blog has the potential to be a powerful driver of organic traffic — if optimized correctly. Implementing Blog Schema, using custom snippets for rich results, and ensuring SEO-friendly pagination can significantly boost your content’s visibility in search engines. Adding related blog posts not only improves internal linking but also keeps readers engaged longer, reducing bounce rates. With the right use of Liquid and structured Schema markup, you can enhance how your blog content appears in search results — including rich snippets like article titles, publish dates, and author names. In this guide, we’ll walk you through actionable steps to make your Shopify blogs more SEO-friendly and ensure they perform as well as your products in attracting new visitors.", publishDate: "14 june, 2025",
  metaTitle: "Schema, Snippets, and Liquid — Making Your Shopify Blog SEO-Friendly",
  metaDescription: "Learn how to add Blog Schema, custom snippets, SEO pagination, and related blogs to maximize SEO benefits for your Shopify blogs.",
  tags: [
    "Liquid",
    "Schema",
    "Blog SEO",
    "Structured Data"
  ],
  categories: [
    "Technology",
    "Web Development"
  ]
}
]
};
s.forwardRef(( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: Te("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}))).displayName = "Card";
s.forwardRef(( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: Te("flex flex-col space-y-1.5 p-6", e),
    ...t
}))).displayName = "CardHeader";
s.forwardRef(( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: Te("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}))).displayName = "CardTitle";
s.forwardRef(( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: Te("text-sm text-muted-foreground", e),
    ...t
}))).displayName = "CardDescription";
s.forwardRef(( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: Te("p-6 pt-0", e),
    ...t
}))).displayName = "CardContent";
s.forwardRef(( ({className: e, ...t}, n) => b.jsx("div", {
    ref: n,
    className: Te("flex items-center p-6 pt-0", e),
    ...t
}))).displayName = "CardFooter";
const Um = {
    variants: {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    },
    initial: "hidden",
    whileInView: "visible",
    viewport: {
        once: !0
    },
    transition: {
        duration: .5,
        ease: "easeOut"
    }
};
function qm() {
    var e;
    const t = s.useRef(null)
      , n = s.useRef(null)
      , {position: i} = function(e) {
        const [t,n] = s.useState([0, 0]);
        return s.useEffect(( () => {
            if (!e || !e.current)
                return;
            const t = document.body.scrollHeight
              , i = e.current.offsetTop
              , s = i + e.current.offsetHeight;
            n([i / t, s / t])
        }
        ), []),
        {
            position: t
        }
    }(t)
      , [r,o] = s.useState(0)
      , {scrollYProgress: a} = ap()
      , l = Ph(a, i, [0, r]);
    return s.useEffect(( () => {
        window.scrollTo(0, 0)
    }
    ), []),
    s.useEffect(( () => {
        if (!n || !n.current)
            return;
        const e = n.current.parentElement
          , t = window.innerWidth - document.documentElement.clientWidth
          , i = () => {
            if (n && n.current) {
                const i = n.current.clientWidth - window.innerWidth + t + 2 * e.offsetLeft;
                o(-i)
            }
        }
        ;
        i();
        const s = ke(i, 10);
        return window.addEventListener("resize", s),
        () => window.removeEventListener("resize", s)
    }
    ), []),
    b.jsxs(b.Fragment, {
        children: [b.jsx(Vm, {
            title: "Blogs",
            description: "Welcome to my portfolio website. I'm a Full Stack Developer specializing in modern web technologies.",
            path: "/blogs"
        }), b.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [b.jsx("section", {
                className: "relative grid min-h-screen w-full place-content-center overflow-hidden bg-background",
                children: b.jsxs(yh.h1, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1
                    },
                    className: "relative z-0 text-[14vw] font-black text-foreground md:text-[200px] text-center",
                    children: ["BLOGS", b.jsx("span", {
                        className: "text-[#C4FF00]",
                        children: "."
                    })]
                })
            }), b.jsx("section", {
                ref: t,
                children: b.jsx("div", {
                    className: "w-full mx-auto",
                    style: {
                        height: "300vh"
                    },
                    children: b.jsx("div", {
                        className: "sticky top-0 h-screen w-full flex flex-col items-start justify-center overflow-hidden",
                        children: b.jsx(yh.div, {
                            ref: n,
                            className: "flex gap-6",
                            style: {
                                x: l
                            },
                            children: null == (e = null == $m ? void 0 : $m.blogs) ? void 0 : e.map(( (e, t) => s.createElement(yh.div, {
                                ...Um,
                                key: t,
                                className: "group relative h-[400px] w-[300px] md:w-[350px] "
                            }, b.jsx("img", {
                                className: "h-full w-full object-cover rounded-3xl transition-transform ",
                                src: null == e ? void 0 : e.thumbnail,
                                alt: e.title
                            }), b.jsx("div", {
                                className: "p-4",
                                children: b.jsxs(ks, {
                                    to: e.slug,
                                    children: [b.jsx("h2", {
                                        className: "text-xl font-semibold line-clamp-2 mb-2",
                                        children: e.title
                                    }), b.jsxs("div", {
                                        className: "flex hover:border-2 p-3 absolute bottom-3 bg-\[\#161719\] rounded-2xl border-gray-900 text-white items-center gap-2" ,
                                        children: [b.jsx("p", {
                                            className: "font-semibold text-[14px]",
                                            children: "Read More"
                                        }), " ", b.jsx(Ie, {
                                            className: "text-[12px]"
                                        })]
                                    })]
                                })
                            }))))
                        })
                    })
                })
            }), b.jsx(Vp, {})]
        })]
    })
}
const Gm = {
    amount: .3,
    margin: "0px 0px -200px 0px"
};
function Ym({children: e, className: t, variants: n, viewport: i=Gm, delay: s=0, direction: r="down", ...o}) {
    const a = n || (e => {
        const t = "left" === e || "right" === e ? "x" : "y"
          , n = "right" === e || "down" === e ? 100 : -100;
        return {
            hidden: {
                filter: "blur(10px)",
                opacity: 0,
                [t]: n
            },
            visible: {
                filter: "blur(0px)",
                opacity: 1,
                [t]: 0,
                transition: {
                    duration: .5,
                    ease: "easeOut"
                }
            }
        }
    }
    )(r)
      , l = {
        hidden: a.hidden,
        visible: {
            ...a.visible,
            transition: {
                ...a.visible.transition,
                delay: s
            }
        }
    };
    return b.jsx(yh.div, {
        whileInView: "visible",
        initial: "hidden",
        variants: l,
        viewport: i,
        className: Te(t),
        ...o,
        children: e
    })
}
const Zm = () => (s.useEffect(( () => {
    window.scrollTo(0, 0)
}
), []),
b.jsxs(b.Fragment, {
    children: [b.jsx(Vm, {
        title: "About Us",
        description: "Welcome to my portfolio website. I'm a Shopify Developer",
        path: "/about"
    }), b.jsxs("section", {
        className: "relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#fff]]",
        children: [b.jsxs("h2", {
            className: "relative z-0 text-[14vw] font-black text-neutral-800 md:text-[200px]",
            children: ["Hamza", b.jsx("span", {
                className: "text-[#C4FF00]",
                children: "."
            })]
        }), b.jsx(Xm, {})]
    }), b.jsx("div", {
        className: "overflow-hidden min-h-screen",
        children: b.jsxs("div", {
            className: "max-w-4xl mx-auto px-4 py-20 space-y-32",
            children: [b.jsx(Ym, {
                direction: "top",
                viewport: {
                    amount: .3,
                    margin: "0px 0px 0px 0px"
                },
                className: "flex flex-col items-start",
                children: b.jsxs("div", {
                    className: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 p-8",
                    children: ["I'm Ameer Hamza,", " ", b.jsx(dp, {
                        className: "bg-gradient-to-r from-[#C4FF00] to-[#dcff36] text-white px-4 py-2 rounded-xl shadow-lg",
                        words: ["Creative", "Innovative", "Dynamic", "Interactive", "Visionary", "Passionate", "Adaptive", "Tech-Savvy", "Problem-Solving", "Skilled", "Experienced", "Efficient", "Impactful", "Curious", "Collaborative", "Frontend", "Backend", "Full-Stack", "Freelance", "Pixel-Perfect", "Cutting-Edge", "Scalable", "Empathetic", "Versatile", "Growth-Focused"]
                    }), " ", b.jsx("span", {
                        className: "block mt-4",
                        children: "Developer based in Pakistan, focused on crafting digital experiences that are simple, impactful, and user-first."
                    })]
                })
            }), b.jsx(Ym, {
                direction: "top",
                viewport: {
                    amount: .3,
                    margin: "0px 0px 0px 0px"
                },
                children: b.jsx("div", {
                    className: "p-8 rounded-2xl transition-all duration-500",
                    children: b.jsxs("p", {
                        className: "text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800",
                        children: ["I’m a Shopify Developer with over", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "2 years of experience"
                        }), " ", "helping eCommerce brands build fast, clean, and conversion-focused storefronts. My main focus is on", 
                        " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "custom Shopify theme development"
                        }), " ", "and", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "conversion rate optimization (CRO)"
                        }), ". I build stores that aren’t just good-looking — they’re designed to load fast, guide users smoothly, and turn clicks into real sales.",]
                    })
                })
            }), b.jsx(Ym, {
                direction: "top",
                viewport: {
                    amount: .3,
                    margin: "0px 0px 0px 0px"
                },
                className: "group",
                children: b.jsx("div", {
                    className: "p-8 rounded-2xl",
                    children: b.jsxs("p", {
                        className: "text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800",
                        children: ["Most stores", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "lose customers"
                        }), ", not because of bad products, but because of poor shopping experience. That’s where I come in. I develop custom sections that are fully editable, optimize mobile layouts, reduce page bloat, and build features like bundle carts, in-cart upsells, product quizzes, and smart navigation — all built from scratch using Liquid, JS, and CSS."]
                    })
                })

            }), b.jsx(Ym, {
                direction: "top",
                viewport: {
                    amount: .3,
                    margin: "0px 0px 0px 0px"
                },
                className: "group",
                children: b.jsx("div", {
                    className: "p-8 rounded-2xl",
                    children: b.jsxs("p", {
                        className: "text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800",
                        children: ["I’ve worked with agencies and brands across different countries, and I know how to handle tight deadlines and shifting requirements without sacrificing quality. Every decision I make is backed by how users behave on a store — whether it’s simplifying the layout or improving the flow to checkout. My code is", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "clean, scalable"
                        }), ",", "and", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "built to support real growth"
                        }), ", not just", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "design trends"
                        }),"."]
                    })
                })
            })
        
        , b.jsx(Ym, {
                direction: "top",
                viewport: {
                    amount: .3,
                    margin: "0px 0px 0px 0px"
                },
                className: "group",
                children: b.jsx("div", {
                    className: "p-8 rounded-2xl",
                    children: b.jsxs("p", {
                        className: "text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800",
                        children: ["Right now, I’m open to remote opportunities with international brands or agencies that want a developer who understands both tech and strategy. If your store is", " ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "getting traffic but not converting"
                        }), " ", " — it’s not the product. It’s the experience. ", b.jsx("span", {
                            className: "font-semibold text-[#C4FF00]   ",
                            children: "Let’s fix that"
                        }), "."]
                    })
                })
            })]
        })
    }), b.jsx(Vp, {})]
})), 
Xm = () => {
    const e = s.useRef(null);
    return b.jsxs("div", {
        className: "absolute inset-0 z-10",
        ref: e,
        children: [b.jsx(Km, {
            containerRef: e,
            src: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1732010010~exp=1732013610~hmac=3ef2636b2eaf24e10a7bc147f6c002db9b91ec4656abb7ab76cfe7c50685a49b&w=826",
            alt: "Example image",
            rotate: "6deg",
            top: "20%",
            left: "25%",
            className: "w-36 md:w-56"
        }), b.jsx(Km, {
            containerRef: e,
            src: "https://img.freepik.com/free-photo/computer-scientist-designing-developing-software-applications_482257-103751.jpg?t=st=1732009403~exp=1732013003~hmac=6adbed6baa607bb09df44b22a87d06495bb03307b91ff9b702e28ae0481e759c&w=360",
            alt: "Example image",
            rotate: "12deg",
            top: "45%",
            left: "60%",
            className: "w-24 md:w-48"
        }), b.jsx(Km, {
            containerRef: e,
            src: "https://img.freepik.com/free-photo/support-staff_1048-5016.jpg?t=st=1732009550~exp=1732013150~hmac=1fc3e64ef6b652cb9b53a562b73f35f79ff120b703e56e70888e8682fa9d84cc&w=740",
            alt: "Example image",
            rotate: "-6deg",
            top: "20%",
            left: "40%",
            className: "w-52 md:w-80"
        }), b.jsx(Km, {
            containerRef: e,
            src: "https://img.freepik.com/free-photo/programming-background-concept_23-2150170158.jpg?t=st=1732009968~exp=1732013568~hmac=fb21f8da801f2328e29df6c7f5d385b4266e95b6952f7f161a96d7e09df2b86a&w=826",
            alt: "Example image",
            rotate: "8deg",
            top: "50%",
            left: "40%",
            className: "w-48 md:w-72"
        }), b.jsx(Km, {
            containerRef: e,
            src: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1732010010~exp=1732013610~hmac=3ef2636b2eaf24e10a7bc147f6c002db9b91ec4656abb7ab76cfe7c50685a49b&w=826",
            alt: "Example image",
            rotate: "18deg",
            top: "20%",
            left: "65%",
            className: "w-40 md:w-64"
        }), b.jsx(Km, {
            containerRef: e,
            src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Example image",
            rotate: "-3deg",
            top: "35%",
            left: "55%",
            className: "w-24 md:w-48"
        })]
    })
}
  , Km = ({containerRef: e, src: t, alt: n, top: i, left: r, rotate: o, className: a}) => {
    const [l,c] = s.useState(0);
    return b.jsx(yh.img, {
        onMouseDown: () => {
            const e = document.querySelectorAll(".drag-elements");
            let t = -1 / 0;
            e.forEach((e => {
                let n = parseInt(window.getComputedStyle(e).getPropertyValue("z-index"));
                !isNaN(n) && n > t && (t = n)
            }
            )),
            c(t + 1)
        }
        ,
        style: {
            top: i,
            left: r,
            rotate: o,
            zIndex: l
        },
        className: je("drag-elements absolute w-48 bg-neutral-200 p-1 pb-4", a),
        src: t,
        alt: n,
        drag: !0,
        dragConstraints: e,
        dragElastic: .65
    })
}
  , Qm = () => (s.useEffect(( () => {
    window.scrollTo(0, 0)
}
), []),
b.jsxs(b.Fragment, {
    children: [b.jsx(Vm, {
        title: "Contact",
        description: "Welcome to my portfolio website. I'm a Full Stack Developer specializing in modern web technologies.",
        path: "/contact"
    }), b.jsxs(Ep, {
        root: !0,
        children: [b.jsx("section", {
            className: je("sticky top-0 grid min-h-screen w-full place-content-center overflow-hidden bg-[#f5f5f5]", "lenis-section"),
            children: b.jsxs("h2", {
                className: "relative z-0 text-[14vw] font-black text-neutral-800 md:text-[200px]",
                children: ["Contact", b.jsx("span", {
                    className: "text-[#C4FF00]",
                    children: "."
                })]
            })
        }), b.jsx("section", {
            className: je("sticky top-0 min-h-screen w-full place-content-center overflow-hidden bg-[#e8e2e2] rounded-t-3xl", "lenis-section"),
            children: b.jsxs("div", {
                className: "",
                children: [b.jsx("div", {
                    className: "w-40 rounded-full bg-[#d4d4d4] mx-auto",
                    children: b.jsx("img", {
                        src: "/assets/img/shakehands-Kg0DP_dG.svg",
                        alt: "hand shake image",
                        className: "w-40 mx-auto"
                    })
                }), b.jsx("h3", {
                    className: "text-6xl max-w-xl mx-auto text-center font-bold my-4 text-[#333]",
                    children: "Tell me about your next project"
                }), b.jsxs("div", {
                    className: "flex justify-center space-x-4",
                    children: [b.jsxs(ks, {
                        to: "mailto:mr.hamza.8383@gmail.com",
                        className: je("bg-[#333] flex gap-2 text-white px-6 py-3 rounded-full hover:bg-[#4d4d4d] font-semibold transition-colors", "lenis-link"),
                        children: [b.jsx(_e, {}), "Email Me"]
                    }), b.jsx(ks, {
                        to: "https://api.whatsapp.com/send?phone=923142090844&text=Hello%20there!",
                        className: je("bg-[#C4FF00] text-gray-800 px-6 py-3 rounded-full hover:bg-[#dcff36] font-semibold transition-colors", "lenis-link"),
                        children: "WhatsApp"
                    })]
                })]
            })
        }), b.jsx("section", {
            className: je("sticky top-0  place-content-center overflow-hidden", "lenis-section"),
            children: b.jsx(Vp, {})
        })]
    })]
}))
  , Jm = () => b.jsx(yh.div, {
    initial: {
        transform: "translateX(-10%) translateY(-10%)"
    },
    animate: {
        transform: "translateX(10%) translateY(10%)"
    },
    transition: {
        repeat: 1 / 0,
        duration: .2,
        ease: "linear",
        repeatType: "mirror"
    },
    style: {
        backgroundImage: "url(/assets/img/black-noise-_49Fh98r.png)"
    },
    className: "pointer-events-none absolute -inset-[100%] opacity-[15%] "
})
  , ef = () => {
    const {slug: e} = rs()
      , t = _m.find((t => t.slug === e));
    s.useEffect(( () => {
        window.scrollTo(0, 0)
    }
    ), []);
    const n = s.useRef(null)
      , i = s.useRef(null)
      , r = s.useRef(null)
      , o = s.useRef(null)
      , a = cp(n, {
        once: !0
    })
      , l = cp(i, {
        once: !0
    })
      , c = cp(r, {
        once: !0
    })
      , u = cp(o, {
        once: !0
    });
    return b.jsxs(b.Fragment, {
        children: [b.jsx(Vm, {
            title: t.name,
            description: t.name,
            path: `/projects/${t.slug}`
        }), b.jsxs("div", {
            className: "bg-gray-50",
            children: [b.jsxs("div", {
                className: "relative overflow-hidden rounded-b-[80px]",
                children: [b.jsx("section", {
                    className: "relative grid h-[70vh] w-full place-content-center overflow-hidden bg-[#fff]",
                    children: b.jsxs(yh.h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8
                        },
                        className: "relative text-center z-0 text-[10vw] font-black text-neutral-800 md:text-[60px]",
                        children: [t.name, b.jsx("span", {
                            className: "text-[#C4FF00]",
                            children: "."
                        })]
                    })
                }), b.jsx(Jm, {})]
            }), b.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 py-16",
                children: [b.jsx(yh.div, {
                    ref: n,
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: a ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16",
                    children: [{
                        value: "Multiple",
                        label: "Elements created"
                    }, {
                        value: "Thousands",
                        label: "Lines of code"
                    }, {
                        value: t.startDate,
                        label: "Project Start Date"
                    },{
                        value: t.endDate,
                        label: "Project End Date"
                    }
                ].map(( (e, t) => b.jsxs("div", {
                        className: "text-center",
                        children: [b.jsx("h3", {
                            className: "text-2xl font-bold text-gray-800 mb-2",
                            children: e.value
                        }), b.jsx("p", {
                            className: "text-gray-600",
                            children: e.label
                        })]
                    }, t)))
                }), b.jsxs("div", {
                    className: "flex flex-col md:flex-row gap-16",
                    children: [b.jsxs(yh.div, {
                        ref: i,
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        animate: l ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .6
                        },
                        className: "md:w-1/3",
                        children: [b.jsxs("div", {
                            className: "mb-12",
                            children: [b.jsx("h3", {
                                className: "text-xl font-semibold mb-4",
                                children: "Project Info"
                            }), b.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [b.jsxs("div", {
                                    children: [b.jsx("h4", {
                                        className: "font-semibold",
                                        children: "BRAND"
                                    }), b.jsx("p", {
                                        children: t.brand
                                    })]
                                }), b.jsxs("div", {
                                    children: [b.jsx("h4", {
                                        className: "font-semibold",
                                        children: "TYPE"
                                    }), b.jsx("p", {
                                        children: "eCommerce Store"
                                    })]
                                }), b.jsxs("div", {
                                    className: "col-span-2",
                                    children: [b.jsx("h4", {
                                        className: "font-semibold",
                                        children: "TECHNOLOGY"
                                    }), b.jsx("ul", {
                                        className: "flex flex-wrap gap-2",
                                        children: t.techStack.map(( (e, t) => b.jsx("li", {
                                            className: "bg-[#C4FF00] text-gray-800 p-1 rounded-lg px-2 ",
                                            children: e
                                        }, t)))
                                    })]
                                })]
                            })]
                        }), b.jsxs("div", {
                            children: [b.jsx("h3", {
                                className: "text-xl font-semibold mb-4",
                                children: "Services"
                            }), b.jsxs("ul", {
                                className: "list-disc list-inside space-y-2",
                                children: [b.jsx("li", {
                                    children: "Custom Store Development"
                                }), b.jsx("li", {
                                    children: "Performance Optimization"
                                }), b.jsx("li", {
                                    children: "CRO"
                                }), b.jsx("li", {
                                    children: "Custom Feature Development"
                                })]
                            })]
                        })]
                    }), b.jsxs(yh.div, {
                        ref: r,
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: c ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .6
                        },
                        className: "md:w-2/3",
                        children: [b.jsxs("div", {
                            className: "mb-12",
                            children: [b.jsx("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: "Project Description"
                            }), b.jsx("p", {
                                className: "text-gray-700 leading-relaxed",
                                children: t.description
                            })]
                        }), b.jsxs("div", {
                            className: "mb-12",
                            children: [b.jsx("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: "Features"
                            }), b.jsx("ul", {
                                className: "list-disc list-inside space-y-2",
                                children: t.features.map(( (e, t) => b.jsx("li", {
                                    className: "text-gray-700",
                                    children: e
                                }, t)))
                            })]
                        }), b.jsxs("div", {
                            children: [b.jsx("h2", {
                                className: "text-3xl font-bold mb-4",
                                children: "Links"
                            }), b.jsx("a", {
                                href: `https://${t.liveLink}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-block bg-[#C4FF00] text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-[#dcff36] transition-colors",
                                children: "Visit Website"
                            })]
                        })]
                    })]
                }), b.jsx(yh.div, {
                    ref: o,
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: u ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "mt-16 mx-auto flex justify-center",
                    children: b.jsx("img", {
                        src: t.image,
                        alt: t.name,
                        width: 600,
                        height: 400,
                        className: "w-70% h-auto rounded-lg shadow-2xl"
                    })
                })]
            })]
        })]
    })
}
  , tf = ({src: e}) => b.jsx(b.Fragment, {
    children: b.jsx("section", {
        className: "relative max-w-6xl mx-auto",
        style: {
            aspectRatio: "1080/720",
            backgroundColor: "tomato",
            maskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
            WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain"
        },
        children: b.jsx("img", {
            src: e,
            className: "w-full   h-full object-cover  aspect-square hover:scale-105 transition-all duration-300"
        })
    })
});
function nf() {
    const {slug: e} = rs()
      , [t,n] = s.useState(null)
      , [i,r] = s.useState(null)
      , [o,a] = s.useState(null)
      , {scrollYProgress: l} = ap()
      , c = Ph(l, [.1, .2], [1, 0])
      , u = Ph(l, [.1, .2], [1, .95]);
    return s.useEffect(( () => {
        window.scrollTo(0, 0)
    }
    ), []),
    s.useEffect(( () => {
        var t;
        const i = null == (t = null == $m ? void 0 : $m.blogs) ? void 0 : t.findIndex((t => t.slug === e));
        -1 !== i && (n($m.blogs[i]),
        r($m.blogs[i + 1] || null),
        a($m.blogs[i - 1] || null))
    }
    ), [e]),
    t ? b.jsxs(b.Fragment, {
        children: [b.jsx(Vm, {
            title: t.metaTitle,
            description: t.metaDescription,
            path: `/blogs/${t.slug}`
        }), b.jsxs("div", {
            className: "relative bg-gradient-to-b from-orange-50 to-white min-h-screen",
            children: [b.jsxs(yh.section, {
                style: {
                    opacity: c,
                    scale: u
                },
                className: "relative grid min-h-[50vh] md:min-h-screen w-full place-content-center overflow-hidden px-4 py-12 md:py-0",
                children: [b.jsxs("h2", {
                    className: "relative text-center max-w-4xl mx-auto z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-800",
                    children: [t.title, b.jsx("span", {
                        className: "text-[#C4FF00]",
                        children: "."
                    })]
                }), b.jsx("p", {
                    className: "mt-4 text-center text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto",
                    children: t.summary
                })]
            }), b.jsx(tf, {
                src: t.image
            }), b.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-8 md:py-16",
                children: [b.jsx(yh.div, {
                    className: "prose prose-lg max-w-none order-2 lg:order-1",
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2,
                        ease: "easeOut"
                    },
                    children: b.jsx("div", {
                        className: "rounded-2xl p-6 md:p-8 ",
                        children: b.jsx("p", {
                            className: "text-lg md:text-xl leading-relaxed text-neutral-700",
                            children: t.content
                        })
                    })
                }), b.jsx(yh.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        ease: "easeOut"
                    },
                    className: "order-1 lg:order-2",
                    children: b.jsxs("div", {
                        className: "rounded-2xl p-6 md:p-8 ",
                        children: [b.jsxs("div", {
                            className: "grid grid-cols-2 gap-6 md:gap-8",
                            children: [b.jsxs("div", {
                                children: [b.jsx("p", {
                                    className: "mb-2 text-gray-900 font-medium font-semibold",
                                    children: "TOPIC NAME"
                                }), b.jsx("p", {
                                    className: "font-medium text-neutral-800",
                                    children: t.topic
                                })]
                            }), b.jsxs("div", {
                                children: [b.jsx("p", {
                                    className: "mb-2 text-gray-900 font-medium font-semibold",
                                    children: "READING TIME"
                                }), b.jsx("p", {
                                    className: "font-medium text-neutral-800",
                                    children: t.readingTime
                                })]
                            }), b.jsxs("div", {
                                children: [b.jsx("p", {
                                    className: "mb-2 text-gray-900 font-medium font-semibold",
                                    children: "PUBLISH DATE"
                                }), b.jsx("p", {
                                    className: "font-medium text-neutral-800",
                                    children: t.publishDate || t.date
                                })]
                            }), b.jsxs("div", {
                                children: [b.jsx("p", {
                                    className: "mb-2 text-gray-900 font-medium font-semibold",
                                    children: "CATEGORIES"
                                }), t.categories.map(( (e, t) => b.jsx("p", {
                                    className: "font-medium text-neutral-800",
                                    children: e
                                }, t)))]
                            })]
                        }), b.jsx(yh.div, {
                            className: "mt-8 flex flex-wrap gap-2",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8,
                                delay: .2,
                                ease: "easeOut"
                            },
                            children: t.tags.map(( (e, t) => b.jsx("span", {
                                className: "rounded-full bg-gradient-to-r from-[#C4FF00] to-[#C4FF00] px-4 py-1.5 text-sm text-gray-800 font-medium",
                                children: e
                            }, t)))
                        })]
                    })
                })]
            }), b.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 py-8 md:py-12 flex  sm:flex-row justify-between items-center gap-4",
                children: [o && b.jsxs(ks, {
                    to: `/blogs/${o.slug}`,
                    className: "flex w-full sm:w-auto items-center justify-center sm:justify-start px-6 py-3 hover:bg-[#dcff36] bg-[#C4FF00] rounded-full text-gray-800  transition-colors duration-300 ease-in-out",
                    children: [b.jsx(Ve, {
                        className: "w-5 h-5 mr-2 flex-shrink-0"
                    }), b.jsx("span", {
                        className: "truncate",
                        children: "Previous"
                    })]
                }), i && b.jsxs(ks, {
                    to: `/blogs/${i.slug}`,
                    className: "flex w-full sm:w-auto items-center justify-center sm:justify-end px-6 py-3 hover:bg-[#dcff36] bg-[#C4FF00] rounded-full text-gray-800  transition-colors duration-300 ease-in-out",
                    children: [b.jsx("span", {
                        className: "truncate",
                        children: "Next"
                    }), b.jsx(Fe, {
                        className: "w-5 h-5 ml-2 flex-shrink-0"
                    })]
                })]
            }), b.jsx(Vp, {})]
        })]
    }) : null
}
function sf(e, t, n) {
    var i, s, r, o, a;
    function l() {
        var c = Date.now() - o;
        c < t && c >= 0 ? i = setTimeout(l, t - c) : (i = null,
        n || (a = e.apply(r, s),
        r = s = null))
    }
    null == t && (t = 100);
    var c = function() {
        r = this,
        s = arguments,
        o = Date.now();
        var c = n && !i;
        return i || (i = setTimeout(l, t)),
        c && (a = e.apply(r, s),
        r = s = null),
        a
    };
    return c.clear = function() {
        i && (clearTimeout(i),
        i = null)
    }
    ,
    c.flush = function() {
        i && (a = e.apply(r, s),
        r = s = null,
        clearTimeout(i),
        i = null)
    }
    ,
    c
}
sf.debounce = sf;
const rf = l(sf);
function of(e) {
    let {debounce: t, scroll: n, polyfill: i, offsetSize: r} = {
        debounce: 0,
        scroll: !1,
        offsetSize: !1
    };
    const o = i || ("undefined" == typeof window ? class {
    }
    : window.ResizeObserver);
    if (!o)
        throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [a,l] = s.useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    })
      , c = s.useRef({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: a
    })
      , u = t ? "number" == typeof t ? t : t.scroll : null
      , d = t ? "number" == typeof t ? t : t.resize : null
      , h = s.useRef(!1);
    s.useEffect(( () => (h.current = !0,
    () => {
        h.current = !1
    }
    )));
    const [p,m,f] = s.useMemo(( () => {
        const e = () => {
            if (!c.current.element)
                return;
            const {left: e, top: t, width: n, height: i, bottom: s, right: o, x: a, y: u} = c.current.element.getBoundingClientRect()
              , d = {
                left: e,
                top: t,
                width: n,
                height: i,
                bottom: s,
                right: o,
                x: a,
                y: u
            };
            c.current.element instanceof HTMLElement && r && (d.height = c.current.element.offsetHeight,
            d.width = c.current.element.offsetWidth),
            Object.freeze(d),
            h.current && !cf(c.current.lastBounds, d) && l(c.current.lastBounds = d)
        }
        ;
        return [e, d ? rf(e, d) : e, u ? rf(e, u) : e]
    }
    ), [l, r, u, d]);
    function g() {
        c.current.scrollContainers && (c.current.scrollContainers.forEach((e => e.removeEventListener("scroll", f, !0))),
        c.current.scrollContainers = null),
        c.current.resizeObserver && (c.current.resizeObserver.disconnect(),
        c.current.resizeObserver = null)
    }
    function v() {
        c.current.element && (c.current.resizeObserver = new o(f),
        c.current.resizeObserver.observe(c.current.element),
        n && c.current.scrollContainers && c.current.scrollContainers.forEach((e => e.addEventListener("scroll", f, {
            capture: !0,
            passive: !0
        }))))
    }
    var y, x, b;
    return y = f,
    x = Boolean(n),
    s.useEffect(( () => {
        if (x) {
            const e = y;
            return window.addEventListener("scroll", e, {
                capture: !0,
                passive: !0
            }),
            () => {
                window.removeEventListener("scroll", e, !0)
            }
        }
    }
    ), [y, x]),
    b = m,
    s.useEffect(( () => {
        const e = b;
        return window.addEventListener("resize", e),
        () => {
            window.removeEventListener("resize", e)
        }
    }
    ), [b]),
    s.useEffect(( () => {
        g(),
        v()
    }
    ), [n, f, m]),
    s.useEffect(( () => g), []),
    [e => {
        e && e !== c.current.element && (g(),
        c.current.element = e,
        c.current.scrollContainers = af(e),
        v())
    }
    , a, p]
}
function af(e) {
    const t = [];
    if (!e || e === document.body)
        return t;
    const {overflow: n, overflowX: i, overflowY: s} = window.getComputedStyle(e);
    return [n, i, s].some((e => "auto" === e || "scroll" === e)) && t.push(e),
    [...t, ...af(e.parentElement)]
}
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Compares two objects to determine if they have the same values for the properties
 * specified in the `lf` array.
 *
 * @param {Object} e - The first object to compare.
 * @param {Object} t - The second object to compare.
 * @returns {boolean} - Returns true if all specified properties have equal values in both objects, false otherwise.
 */

/*******  18424822-d2aa-4a0f-95e2-247a7e70c89a  *******/
const lf = ["x", "y", "top", "bottom", "left", "right", "width", "height"]
  , cf = (e, t) => lf.every((n => e[n] === t[n]))
  , uf = ({children: e}) => {
    const [t,n] = s.useState(!1);
    return b.jsx("div", {
        className: Te("rounded-[24px] border border-black/10  shadow-sm dark:border-yellow-400/20", "bg-gradient-to-b  from-neutral-900 to-black", t ? "w-[204px] bg-gradient-to-b dark:from-stone-900 dark:to-neutral-900/80" : "dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-b"),
        children: b.jsx("div", {
            className: "rounded-[23px] border   border-black/10 ",
            children: b.jsx("div", {
                className: "rounded-[22px] border  dark:border-stone-800 border-white/50 ",
                children: b.jsx("div", {
                    className: "rounded-[21px] border    border-neutral-950/20   flex items-center justify-center ",
                    children: b.jsx(df, {
                        isExpanded: t,
                        toggleExpand: () => {
                            new Audio("/src/assets/sfx/click.wav").play(),
                            n(!t)
                        }
                        ,
                        children: t ? b.jsx(yh.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                transition: {
                                    delay: .3,
                                    duration: .4,
                                    ease: "easeOut"
                                }
                            },
                            children: e
                        }) : null
                    })
                })
            })
        })
    })
}
  , df = ({isExpanded: e, toggleExpand: t, children: n}) => b.jsxs(yh.div, {
    className: Te("relative   border-white/10 border shadow-lg flex flex-col space-y-1  items-center  text-white  cursor-pointer z-10", e ? "" : "bg-gradient-to-b from-neutral-900 to-stone-900 dark:from-stone-700 dark:to-neutral-800/80"),
    layoutRoot: !0,
    layout: !0,
    initial: {
        borderRadius: 21,
        width: "4rem",
        height: "4rem"
    },
    animate: e ? {
        borderRadius: 20,
        width: 200,
        height: 250,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 400,
            when: "beforeChildren"
        }
    } : {
        borderRadius: 21,
        width: "4rem",
        height: "4rem"
    },
    children: [n, b.jsx(yh.div, {
        className: "absolute  ",
        initial: {
            x: "-50%"
        },
        animate: {
            x: e ? "0%" : "-50%",
            transition: {
                type: "tween",
                ease: "easeOut",
                duration: .3
            }
        },
        style: {
            left: e ? "" : "50%",
            bottom: 6
        },
        children: e ? b.jsx(yh.div, {
            className: "p-[10px] group bg-neutral-800/50 dark:bg-black/50 border border-cyan-100/30 hover:border-neutral-200 text-orange-50 rounded-full shadow-2xl transition-colors duration-300 ",
            onClick: t,
            layoutId: "expand-toggle",
            initial: !1,
            animate: {
                rotate: -360,
                transition: {
                    duration: .4
                }
            },
            children: b.jsx(qe, {
                className: Te("h-7 w-7 text-cyan-100/30 dark:text-neutral-400/80 group-hover:text-neutral-500 transition-colors duration-200 ")
            })
        }) : b.jsx(yh.div, {
            className: Te("p-[10px] group bg-[#C4FF00] dark:bg-[#C4FF00] text-cyan-50 border border-cyan-100/10  shadow-2xl transition-colors duration-200"),
            style: {
                borderRadius: 24
            },
            onClick: t,
            layoutId: "expand-toggle",
            initial: {
                rotate: 180
            },
            animate: {
                rotate: -180,
                transition: {
                    duration: .4
                }
            },
            children: b.jsx(Ue, {
                className: "h-7 w-7 text-black dark:text-neutral-900"
            })
        })
    })]
});
function hf() {
    return b.jsx("div", {
        className: "fixed bottom-4 right-4 z-[100]",
        children: b.jsx(uf, {
            children: b.jsx(mf, {})
        })
    })
}
const pf = [{
    id: 0,
    label: "Download"
}];
function mf() {
    const [e,t] = s.useState(0)
      , [n,i] = s.useState(0)
      , [r,o] = s.useState(!1)
      , [a,l] = s.useState(!1)
      , [c,u] = s.useState(!1)
      , [d,h] = of()
      , p = s.useRef(null)
      , m = () => {
        try {
            window.open("https://drive.google.com/uc?export=download&id=13q_6wpIteM4lI6H__BFf5omoefybhxjY", "_blank")
        } catch (e) {
            alert("Sorry, there was an error downloading the resume. Please try again later.")
        }
    }
    ;
    s.useEffect(( () => () => {
        window.speechSynthesis && window.speechSynthesis.cancel()
    }
    ), []);
    const f = s.useMemo(( () => 0 === e ? b.jsx("button", {
        onClick: m,
        className: "flex items-center justify-center p-2 rounded-full hover:bg-neutral-600 transition-colors",
        "aria-label": "Download Resume",
        children: b.jsx(ze, {
            size: 32,
            className: "text-white"
        })
    }) : null), [e, a, c]);
    s.useEffect(( () => () => {
        p.current && (p.current.pause(),
        p.current.removeEventListener("ended", ( () => {
            l(!1)
        }
        )))
    }
    ), []);
    return b.jsxs("div", {
        className: "flex flex-col items-center pt-4 text-white",
        children: [b.jsx("div", {
            className: "flex space-x-1 border border-none rounded-[8px] cursor-pointer bg-neutral-700 px-[3px] py-[3.2px] shadow-inner-shadow",
            children: pf.map(( (n, s) => b.jsxs("button", {
                onClick: () => {
                    var s;
                    (s = n.id) === e || r || (i(s > e ? 1 : -1),
                    t(s),
                    playClickSound())
                }
                ,
                className: (e === n.id ? "text-white" : "hover:text-white-300/60") + " relative rounded-[5px] px-3 py-1.5 text-xs sm:text-sm font-medium text-white-600 transition focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-blue-light focus-visible:outline-none",
                style: {
                    WebkitTapHighlightColor: "transparent"
                },
                children: [e === n.id && b.jsx(yh.span, {
                    layoutId: "resume-action-bubble",
                    className: "absolute inset-0 z-10 bg-neutral-800 mix-blend-difference shadow-inner-shadow",
                    style: {
                        borderRadius: 5
                    },
                    transition: {
                        type: "spring",
                        bounce: .19,
                        duration: .4
                    }
                }), n.label]
            }, `${n.id}-i-${s}`)))
        }), b.jsx(Th, {
            transition: {
                duration: .4,
                type: "spring",
                bounce: .2
            },
            children: b.jsx(yh.div, {
                className: "relative mx-auto my-[10px] w-[60px] md:w-[150px] overflow-hidden",
                initial: !1,
                animate: {
                    height: h.height
                },
                children: b.jsx("div", {
                    className: "md:p-6 p-2",
                    ref: d,
                    children: b.jsx(jh, {
                        custom: n,
                        mode: "popLayout",
                        onExitComplete: () => o(!1),
                        children: b.jsx(yh.div, {
                            variants: {
                                initial: e => ({
                                    x: 300 * e,
                                    opacity: 0,
                                    filter: "blur(4px)"
                                }),
                                active: {
                                    x: 0,
                                    opacity: 1,
                                    filter: "blur(0px)"
                                },
                                exit: e => ({
                                    x: -300 * e,
                                    opacity: 0,
                                    filter: "blur(4px)"
                                })
                            },
                            initial: "initial",
                            animate: "active",
                            exit: "exit",
                            custom: n,
                            onAnimationStart: () => o(!0),
                            onAnimationComplete: () => o(!1),
                            className: "flex items-center justify-center",
                            children: f
                        }, e)
                    })
                })
            })
        })]
    })
}
function ff() {
    s.useEffect(( () => {
        const e = new Zs({
            el: document.querySelector("[data-scroll-container]"),
            smooth: !0
        });
        return () => e.destroy()
    }
    ), []);
    const [e,t] = s.useState("");
    return b.jsxs(b.Fragment, {
        children: [b.jsx(Ls, {
            activeSection: e
        }), b.jsxs(xs, {
            children: [b.jsx(vs, {
                path: "/",
                element: b.jsx(Bm, {
                    setActiveSection: t
                })
            }), b.jsx(vs, {
                path: "/projects",
                element: b.jsx(Hm, {})
            }), b.jsx(vs, {
                path: "/projects/:slug",
                element: b.jsx(ef, {})
            }), b.jsx(vs, {
                path: "/blogs",
                element: b.jsx(qm, {})
            }), b.jsx(vs, {
                path: "/blogs/:slug",
                element: b.jsx(nf, {})
            }), b.jsx(vs, {
                path: "/about",
                element: b.jsx(Zm, {})
            }), b.jsx(vs, {
                path: "/contact",
                element: b.jsx(Qm, {})
            })]
        }), b.jsx(hf, {})]
    })
}
x(document.getElementById("root")).render(b.jsx(s.StrictMode, {
    children: b.jsx(Rm, {
        children: b.jsx(Es, {
            children: b.jsx(ff, {})
        })
    })
}));
