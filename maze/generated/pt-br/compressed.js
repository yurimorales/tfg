// Automatically generated file.  Do not edit!
var g, k = this;

function aa() {}

function ba(a) {
    a.Hb = function() {
        return a.Qg ? a.Qg : a.Qg = new a
    }
}

function ca(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function da(a) {
    return "array" == ca(a)
}

function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function q(a) {
    return "string" == typeof a
}

function fa(a) {
    return "number" == typeof a
}

function ga(a) {
    return "function" == ca(a)
}

function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ia(a) {
    return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ka = 0;

function la(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function na(a, b, c) {
    na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
    return na.apply(null, arguments)
}

function oa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function t(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.v = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.hq = function(a, c, f) {
        for (var h = Array(arguments.length - 2), l = 2; l < arguments.length; l++) h[l - 2] = arguments[l];
        return b.prototype[c].apply(a, h)
    }
};

function pa(a, b) {
    null != a && this.Ya.apply(this, arguments)
}
g = pa.prototype;
g.xc = "";
g.set = function(a) {
    this.xc = "" + a
};
g.Ya = function(a, b, c) {
    this.xc += String(a);
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.xc += arguments[d];
    return this
};
g.clear = function() {
    this.xc = ""
};
g.toString = function() {
    return this.xc
};
var qa;

function ra(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var sa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function ta(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function ua(a) {
    if (!va.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(wa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(xa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ya, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(za, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Aa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ba, "&#0;"));
    return a
}
var wa = /&/g,
    xa = /</g,
    ya = />/g,
    za = /"/g,
    Aa = /'/g,
    Ba = /\x00/g,
    va = /[\x00&<>"']/;

function Ca(a) {
    return -1 != a.indexOf("&") ? "document" in k ? Da(a) : Ea(a) : a
}

function Da(a) {
    var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
        c;
    c = k.document.createElement("div");
    return a.replace(Fa, function(a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (f = String.fromCharCode(h))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Ea(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d)) return String.fromCharCode(d)
                }
                return a
        }
    })
}
var Fa = /&([^;\s<&]+);?/g;

function Ga(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ha() {
    return "background-color".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}

function Ia(a) {
    var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function Ja() {
    this.g = Ka
}
Ja.prototype.zc = !0;
Ja.prototype.$b = function() {
    return ""
};
Ja.prototype.toString = function() {
    return "Const{}"
};

function La(a) {
    return a instanceof Ja && a.constructor === Ja && a.g === Ka ? "" : "type_error:Const"
}
var Ka = {};

function Ma() {
    this.g = "";
    this.h = Na
}
Ma.prototype.zc = !0;
Ma.prototype.$b = function() {
    return this.g
};
Ma.prototype.tf = !0;
Ma.prototype.Rc = function() {
    return 1
};
var Oa = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    Na = {};

function Pa(a) {
    var b = new Ma;
    b.g = a;
    return b
}
Pa("about:blank");
var Qa = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ra = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Sa = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, h = q(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in h) {
                var m = h[l];
                b.call(c, m, l, a) && (e[f++] = m)
            }
        return e
    },
    Ta = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = q(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    Ua = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Va(a, b) {
    return 0 <= Qa(a, b)
}

function Wa(a, b) {
    var c = Qa(a, b),
        d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
}

function Xa(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}

function Ya(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Za(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (ea(d)) {
            var e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (var h = 0; h < f; h++) a[e + h] = d[h]
        } else a.push(d)
    }
}

function $a(a, b, c, d) {
    Array.prototype.splice.apply(a, ab(arguments, 1))
}

function ab(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function bb() {
    this.g = "";
    this.h = cb
}
bb.prototype.zc = !0;
var cb = {};
bb.prototype.$b = function() {
    return this.g
};

function db(a) {
    var b = new bb;
    b.g = a;
    return b
}
var eb = db("");

function fb(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof Ja) d = La(d);
            else if (gb.test(d)) {
                for (var e = !0, f = !0, h = 0; h < d.length; h++) {
                    var l = d.charAt(h);
                    "'" == l && f ? e = !e : '"' == l && e && (f = !f)
                }
                e && f || (d = "zClosurez")
            } else d = "zClosurez";
            b += c + ":" + d + ";"
        }
    }
    return b ? db(b) : eb
}
var gb = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

function hb() {
    this.g = ib
}
hb.prototype.zc = !0;
hb.prototype.$b = function() {
    return ""
};
hb.prototype.tf = !0;
hb.prototype.Rc = function() {
    return 1
};
var ib = {};

function jb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}
var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function lb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < kb.length; f++) c = kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var mb = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var nb;
a: {
    var ob = k.navigator;
    if (ob) {
        var pb = ob.userAgent;
        if (pb) {
            nb = pb;
            break a
        }
    }
    nb = ""
}

function qb(a) {
    return -1 != nb.indexOf(a)
};

function rb() {
    this.g = "";
    this.i = sb;
    this.h = null
}
rb.prototype.tf = !0;
rb.prototype.Rc = function() {
    return this.h
};
rb.prototype.zc = !0;
rb.prototype.$b = function() {
    return this.g
};

function tb(a) {
    if (a instanceof rb && a.constructor === rb && a.i === sb) return a.g;
    ca(a);
    return "type_error:SafeHtml"
}

function ub(a) {
    if (a instanceof rb) return a;
    var b = null;
    a.tf && (b = a.Rc());
    a = ua(a.zc ? a.$b() : String(a));
    return vb(a, b)
}
var wb = /^[a-zA-Z0-9-]+$/,
    xb = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    yb = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function zb(a, b, c) {
    if (!wb.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in yb) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
        e, f = "";
    if (b)
        for (e in b) {
            if (!wb.test(e)) throw Error('Invalid attribute name "' + e + '".');
            var h = b[e];
            if (null != h) {
                var l, m = a;
                l = e;
                if (h instanceof Ja) h = La(h);
                else if ("style" == l.toLowerCase()) {
                    if (!ha(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                    h instanceof bb || (h =
                        fb(h));
                    h instanceof bb && h.constructor === bb && h.h === cb ? h = h.g : (ca(h), h = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + h + '" given.');
                    if (l.toLowerCase() in xb)
                        if (h instanceof hb) h instanceof hb && h.constructor === hb && h.g === ib ? h = "" : (ca(h), h = "type_error:TrustedResourceUrl");
                        else if (h instanceof Ma) h instanceof Ma && h.constructor === Ma && h.h === Na ? h = h.g : (ca(h), h = "type_error:SafeUrl");
                    else if (q(h)) h instanceof Ma || (h = h.zc ? h.$b() : String(h), Oa.test(h) ||
                        (h = "about:invalid#zClosurez"), h = Pa(h)), h = h.$b();
                    else throw Error('Attribute "' + l + '" on tag "' + m + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + h + '" given.');
                }
                h.zc && (h = h.$b());
                l = l + '="' + ua(String(h)) + '"';
                f += " " + l
            }
        }
    e = "<" + a + f;
    null != c ? da(c) || (c = [c]) : c = [];
    !0 === mb[a.toLowerCase()] ? e += ">" : (d = Ab(c), e += ">" + tb(d) + "</" + a + ">", d = d.Rc());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return vb(e, d)
}

function Ab(a) {
    function b(a) {
        da(a) ? Ra(a, b) : (a = ub(a), d += tb(a), a = a.Rc(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    Ra(arguments, b);
    return vb(d, c)
}
var sb = {};

function vb(a, b) {
    var c = new rb;
    c.g = a;
    c.h = b;
    return c
}
vb("<!DOCTYPE html>", 0);
var Bb = vb("", 0),
    Cb = vb("<br>", 0);
var Db = {},
    Eb = {};

function Fb() {
    throw Error("Do not instantiate directly");
}
Fb.prototype.Yd = null;
Fb.prototype.toString = function() {
    return this.content
};
Fb.prototype.Je = function() {
    if (this.Zd === Eb) return ub(this.toString());
    if (this.Zd !== Db) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return vb(this.toString(), this.Yd || null)
};
var Gb = qb("Opera"),
    u = qb("Trident") || qb("MSIE"),
    Hb = qb("Edge"),
    Ib = qb("Gecko") && !(-1 != nb.toLowerCase().indexOf("webkit") && !qb("Edge")) && !(qb("Trident") || qb("MSIE")) && !qb("Edge"),
    v = -1 != nb.toLowerCase().indexOf("webkit") && !qb("Edge"),
    Jb = v && qb("Mobile"),
    Kb = qb("Macintosh"),
    Lb = qb("Android"),
    Mb = qb("iPhone") && !qb("iPod") && !qb("iPad"),
    Nb = qb("iPad");

function Ob() {
    var a = k.document;
    return a ? a.documentMode : void 0
}
var Pb;
a: {
    var Qb = "",
        Rb = function() {
            var a = nb;
            if (Ib) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Hb) return /Edge\/([\d\.]+)/.exec(a);
            if (u) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (v) return /WebKit\/(\S+)/.exec(a);
            if (Gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    Rb && (Qb = Rb ? Rb[1] : "");
    if (u) {
        var Sb = Ob();
        if (null != Sb && Sb > parseFloat(Qb)) {
            Pb = String(Sb);
            break a
        }
    }
    Pb = Qb
}
var Tb = {};

function Ub(a) {
    var b;
    if (!(b = Tb[a])) {
        b = 0;
        for (var c = sa(String(Pb)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                l = d[f] || "",
                m = RegExp("(\\d*)(\\D*)", "g"),
                n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = m.exec(h) || ["", "", ""],
                    r = n.exec(l) || ["", "", ""];
                if (0 == p[0].length && 0 == r[0].length) break;
                b = Ga(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || Ga(0 == p[2].length, 0 == r[2].length) || Ga(p[2], r[2])
            } while (0 == b)
        }
        b = Tb[a] = 0 <= b
    }
    return b
}
var Vb = k.document,
    Wb = Vb && u ? Ob() || ("CSS1Compat" == Vb.compatMode ? parseInt(Pb, 10) : 5) : void 0;

function Yb(a, b) {
    this.width = a;
    this.height = b
}
g = Yb.prototype;
g.clone = function() {
    return new Yb(this.width, this.height)
};
g.Sh = function() {
    return this.width * this.height
};
g.Rg = function() {
    return !this.Sh()
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};

function Zb(a, b) {
    a.innerHTML = tb(b)
};
var $b = !u || 9 <= Number(Wb),
    ac = !Ib && !u || u && 9 <= Number(Wb) || Ib && Ub("1.9.1"),
    bc = u && !Ub("9");

function w(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
g = w.prototype;
g.clone = function() {
    return new w(this.x, this.y)
};

function cc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function dc(a, b) {
    return new w(a.x - b.x, a.y - b.y)
}
g.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), fa(b) && (this.y += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function ec(a) {
    return a ? new fc(gc(a)) : qa || (qa = new fc)
}

function hc(a, b) {
    var c = document,
        c = b || c;
    if (c.querySelectorAll && c.querySelector) return c.querySelectorAll("TBODY" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        for (var c = c.getElementsByClassName(a), d = {}, e = 0, f = 0, h; h = c[f]; f++) "TBODY" == h.nodeName && (d[e++] = h);
        d.length = e;
        return d
    }
    c = c.getElementsByTagName("TBODY");
    if (a) {
        d = {};
        for (f = e = 0; h = c[f]; f++) {
            var l = h.className;
            "function" == typeof l.split && Va(l.split(/\s+/), a) && (d[e++] = h)
        }
        d.length = e;
        return d
    }
    return c
}

function ic(a, b) {
    jb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : jc.hasOwnProperty(d) ? a.setAttribute(jc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var jc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function kc() {
    var a = window.document,
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Yb(a.clientWidth, a.clientHeight)
}

function lc(a) {
    return a.scrollingElement ? a.scrollingElement : v || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function y(a, b, c) {
    return mc(document, arguments)
}

function mc(a, b) {
    var c = b[0],
        d = b[1];
    if (!$b && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', ua(d.name), '"');
        if (d.type) {
            c.push(' type="', ua(d.type), '"');
            var e = {};
            lb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (q(d) ? c.className = d : da(d) ? c.className = d.join(" ") : ic(c, d));
    2 < b.length && nc(a, c, b);
    return c
}

function nc(a, b, c) {
    function d(c) {
        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ea(f) || ha(f) && 0 < f.nodeType ? d(f) : Ra(oc(f) ? Ya(f) : f, d)
    }
}

function pc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function qc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function A(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function rc(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function gc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function sc(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else pc(a), a.appendChild(gc(a).createTextNode(String(b)))
}
var tc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    uc = {
        IMG: " ",
        BR: "\n"
    };

function vc(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function xc(a) {
    a = a.tabIndex;
    return fa(a) && 0 <= a && 32768 > a
}

function yc(a) {
    if (bc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        zc(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    bc || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function Ac(a) {
    var b = [];
    zc(a, b, !1);
    return b.join("")
}

function zc(a, b, c) {
    if (!(a.nodeName in tc))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in uc) b.push(uc[a.nodeName]);
    else
        for (a = a.firstChild; a;) zc(a, b, c), a = a.nextSibling
}

function oc(a) {
    if (a && "number" == typeof a.length) {
        if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ga(a)) return "function" == typeof a.item
    }
    return !1
}

function fc(a) {
    this.g = a || k.document || document
}
g = fc.prototype;
g.C = function(a) {
    return q(a) ? this.g.getElementById(a) : a
};
g.ob = function(a, b, c) {
    return mc(this.g, arguments)
};
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.$g = pc;
g.Zb = function(a) {
    return ac && void 0 != a.children ? a.children : Sa(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
g.contains = rc;
u && Ub(8);

function Bc(a) {
    if (null != a) switch (a.Yd) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Cc() {
    Fb.call(this)
}
t(Cc, Fb);
Cc.prototype.Zd = Db;

function Dc(a) {
    return null != a && a.Zd === Db ? a : Ec(String(String(a)).replace(Fc, Gc), Bc(a))
}

function Hc() {
    Fb.call(this)
}
t(Hc, Fb);
Hc.prototype.Zd = {}.ak;

function Ic(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Yd = d);
        return e
    }
}
var Ec = Ic(Cc);
Ic(Hc);
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Yd = d);
        return e
    }
})(Cc);
var Jc = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Gc(a) {
    return Jc[a]
}
var Fc = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Kc() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};
var Lc = {},
    Mc, Nc, Oc, B, C, D, Pc;

function Qc() {
    for (var a = Rc, b = F, c = Sc, d = '<div style="display: none"><span id="Games_name">Jogos do Blockly</span><span id="Games_puzzle">Quebra-Cabe\u00e7a</span><span id="Games_maze">Labirinto</span><span id="Games_bird">P\u00e1ssaro</span><span id="Games_turtle">Tartaruga</span><span id="Games_movie">Filme</span><span id="Games_pondTutor">Tutor de libras</span><span id="Games_pond">Lagoa</span><span id="Games_linesOfCode1">Voc\u00ea solucionou esse n\u00edvel com uma linha de JavaScript:</span><span id="Games_linesOfCode2">Voc\u00ea solucionou esse n\u00edvel com %1 linhas de JavaScript:</span><span id="Games_nextLevel">Voc\u00ea esta preparado para o n\u00edvel %1?</span><span id="Games_finalLevel">Voc\u00ea esta preparado para o pr\u00f3ximo desafio?</span><span id="Games_linkTooltip">Salvar e ligar aos blocos.</span><span id="Games_runTooltip">Rodar o programa que voc\u00ea escreveu.</span><span id="Games_runProgram">Executar o programa</span><span id="Games_resetTooltip">Parar a execu\u00e7\u00e3o do programa e resetar o nivel.</span><span id="Games_resetProgram">Reiniciar</span><span id="Games_help">Ajuda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00f3gica</span><span id="Games_catLoops">La\u00e7os</span><span id="Games_catMath">Matem\u00e1tica</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Cor</span><span id="Games_catVariables">Vari\u00e1veis</span><span id="Games_catProcedures">Fun\u00e7\u00f5es</span><span id="Games_httpRequestError">Houve um problema com a requisi\u00e7\u00e3o.</span><span id="Games_linkAlert">Compartilhe seus blocos com este link:\n\n%1</span><span id="Games_hashError">Desculpe, \'%1\' n\u00e3o corresponde a um programa salvo.</span><span id="Games_xmlError">N\u00e3o foi poss\u00edvel carregar seu arquivo salvo. Talvez ele tenha sido criado com uma vers\u00e3o diferente do Blockly?</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span></div><div style="display: none"><span id="Maze_moveForward">avan\u00e7ar</span><span id="Maze_turnLeft">vire \u00e0 esquerda</span><span id="Maze_turnRight">vire \u00e0 direita</span><span id="Maze_doCode">fa\u00e7a</span><span id="Maze_elseCode">sen\u00e3o</span><span id="Maze_helpIfElse">Blocos se-sen\u00e3o far\u00e3o uma coisa ou outra.</span><span id="Maze_pathAhead">se caminho \u00e0 frente</span><span id="Maze_pathLeft">se caminho \u00e0 esquerda</span><span id="Maze_pathRight">se caminho \u00e0 direita</span><span id="Maze_repeatUntil">repetir at\u00e9</span><span id="Maze_moveForwardTooltip">Move o jogador um espa\u00e7o para frente.</span><span id="Maze_turnTooltip">Vira o jogador 90 graus para esquerda ou direita.</span><span id="Maze_ifTooltip">Se h\u00e1 um caminho na dire\u00e7\u00e3o especificada, \\nent\u00e3o fa\u00e7a algumas a\u00e7\u00f5es. </span><span id="Maze_ifelseTooltip">Se h\u00e1 um caminho na dire\u00e7\u00e3o especificada, \\nent\u00e3o fa\u00e7a o primeiro bloco de a\u00e7\u00f5es. \\nCaso contr\u00e1rio, fa\u00e7a o segundo bloco de \\na\u00e7\u00f5es. </span><span id="Maze_whileTooltip">Repetir as a\u00e7\u00f5es inclusas at\u00e9 que o ponto final \\nseja alcan\u00e7ado. </span><span id="Maze_capacity0">Restam %0 blocos.</span><span id="Maze_capacity1">Resta %1 bloco.</span><span id="Maze_capacity2">Restam %2 blocos.</span></div><table width="100%"><tr><td><h1>' + ('<span id="title">' +
            (Tc ? '<a href="index.html?lang=' + Dc(a) + '">' : '<a href="./?lang=' + Dc(a) + '">') + "Jogos do Blockly</a> : " + Dc("Labirinto") + "</span>"), c = "&skin=" + Dc(c), e = " &nbsp; ", f = 1; 11 > f; f++) e += " " + (f == b ? '<span class="level_number level_done" id="level' + Dc(f) + '">' + Dc(f) + "</span>" : 10 == f ? '<a class="level_number" id="level' + Dc(f) + '" href="?lang=' + Dc(a) + "&level=" + Dc(f) + Dc(c) + '">' + Dc(f) + "</a>" : '<a class="level_dot" id="level' + Dc(f) + '" href="?lang=' + Dc(a) + "&level=" + Dc(f) + Dc(c) + '"></a>');
    return d + e + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salvar e ligar aos blocos."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Faz o jogador executar o que os blocos dizem."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Coloca o jogador de volta ao in\u00edcio do labirinto."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table>' +
        ('<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + (2 < b ? '<block type="maze_forever"></block>' + (6 == b ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < b ? '<block type="maze_if"></block>' + (8 < b ? '<block type="maze_ifElse"></block>' : "") : "") : "") + "</xml>") + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Parab\u00e9ns!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Este n\u00edvel \u00e9 extremamente dif\u00edcil. Voc\u00ea deseja pul\u00e1-lo e ir ao pr\u00f3ximo jogo? Voc\u00ea sempre pode voltar mais tarde.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">OK</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + Kc() + "</div>") + (1 == b ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Empilhe alguns blocos \'avan\u00e7ar\' juntos para me ajudar a alcan\u00e7ar o objetivo.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Neste n\u00edvel, voc\u00ea deve empilhar todos os blocos na \u00e1rea de trabalho branca.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Execute seu programa para ver o que acontece.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            2 == b ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Seu programa n\u00e3o resolveu o labirinto. Aperte \'Reiniciar\' e tente novamente.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : 3 == b || 4 == b ? (3 == b ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Alcance o fim deste caminho usando apenas dois blocos. Use \'repetir\' para executar um bloco mais de uma vez.</td><td><img src="common/help.png"></td></tr></table></div>' :
                "") + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00ea usou todos os blocos para este n\u00edvel. Para criar um novo bloco, voc\u00ea primeiro deve remover um bloco existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Voc\u00ea pode encaixar mais de um bloco dentro de um bloco \'repetir\'.</td><td><img src="common/help.png"></td></tr></table></div>' :
            5 == b ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Escolha o seu jogador favorito neste menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : 6 == b ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Um bloco \'se\' far\u00e1 alguma coisa apenas se a condi\u00e7\u00e3o for verdadeira. Tente virar \u00e0 esquerda se houver um caminho para a esquerda.</td><td><img src="common/help.png"></td></tr></table></div>' :
            7 == b ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Clique em %1 no bloco \'se\' para mudar sua condi\u00e7\u00e3o.</td><td><img src="common/help.png"></td></tr></table></div>' : 9 == b ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blocos se-sen\u00e3o far\u00e3o uma coisa ou outra.</td><td><img src="common/help.png"></td></tr></table></div>' : 10 == b ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00ea consegue resolver este labirinto complicado? Tente seguir a parede da m\u00e3o esquerda. Apenas para programadores avan\u00e7ados!' +
            Kc() + "</td></tr></table></div>" : "")
};

function Uc() {
    0 != Vc && (Wc[ia(this)] = this);
    this.J = this.J;
    this.H = this.H
}
var Vc = 0,
    Wc = {};
Uc.prototype.J = !1;
Uc.prototype.B = function() {
    if (!this.J && (this.J = !0, this.va(), 0 != Vc)) {
        var a = ia(this);
        delete Wc[a]
    }
};

function Xc(a, b) {
    a.J ? b.call(void 0) : (a.H || (a.H = []), a.H.push(b))
}
Uc.prototype.va = function() {
    if (this.H)
        for (; this.H.length;) this.H.shift()()
};

function Yc(a) {
    a && "function" == typeof a.B && a.B()
};
var Zc = "closure_listenable_" + (1E6 * Math.random() | 0),
    $c = 0;

function ad(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.Wd = !!d;
    this.se = e;
    this.Jg = ++$c;
    this.cd = this.Vd = !1
}

function bd(a) {
    a.cd = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.se = null
};

function cd(a) {
    this.src = a;
    this.g = {};
    this.h = 0
}
cd.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var h = dd(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Vd = !1)) : (b = new ad(b, this.src, f, !!d, e), b.Vd = c, a.push(b));
    return b
};

function ed(a, b) {
    var c = b.type;
    c in a.g && Wa(a.g[c], b) && (bd(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
}

function fd(a, b, c, d, e) {
    a = a.g[b.toString()];
    b = -1;
    a && (b = dd(a, c, d, e));
    return -1 < b ? a[b] : null
}

function dd(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.cd && f.listener == b && f.Wd == !!c && f.se == d) return e
    }
    return -1
};

function gd(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.j = !1;
    this.ah = !0
}
gd.prototype.stopPropagation = function() {
    this.j = !0
};
gd.prototype.preventDefault = function() {
    this.ah = !1
};
var hd = !u || 9 <= Number(Wb),
    id = !u || 9 <= Number(Wb),
    jd = u && !Ub("9");
!v || Ub("528");
Ib && Ub("1.9b") || u && Ub("8") || Gb && Ub("9.5") || v && Ub("528");
Ib && !Ub("8") || u && Ub("9");
var kd = "ontouchstart" in k || !!(k.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!k.navigator || !k.navigator.msMaxTouchPoints);

function ld(a) {
    ld[" "](a);
    return a
}
ld[" "] = aa;

function md(a, b) {
    gd.call(this, a ? a.type : "");
    this.u = this.i = this.target = null;
    this.A = this.g = this.clientY = this.clientX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.F = !1;
    this.h = null;
    a && this.P(a, b)
}
t(md, gd);
var nd = [1, 4, 2];
md.prototype.P = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.i = b;
    var e = a.relatedTarget;
    if (e) {
        if (Ib) {
            var f;
            a: {
                try {
                    ld(e.nodeName);
                    f = !0;
                    break a
                } catch (h) {}
                f = !1
            }
            f || (e = null)
        }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.u = e;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !==
        d.clientY ? d.clientY : d.pageY);
    this.g = a.keyCode || 0;
    this.A = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.F = Kb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && this.preventDefault()
};

function od(a) {
    return hd ? 0 == a.h.button : "click" == a.type ? !0 : !!(a.h.button & nd[0])
}
md.prototype.stopPropagation = function() {
    md.v.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
};
md.prototype.preventDefault = function() {
    md.v.preventDefault.call(this);
    var a = this.h;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, jd) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var pd = "closure_lm_" + (1E6 * Math.random() | 0),
    qd = {},
    rd = 0;

function sd(a, b, c, d, e) {
    if (da(b)) {
        for (var f = 0; f < b.length; f++) sd(a, b[f], c, d, e);
        return null
    }
    c = td(c);
    if (a && a[Zc]) a = a.T(b, c, d, e);
    else {
        if (!b) throw Error("Invalid event type");
        var f = !!d,
            h = ud(a);
        h || (a[pd] = h = new cd(a));
        c = h.add(b, c, !1, d, e);
        if (!c.g) {
            d = vd();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent) a.attachEvent(wd(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            rd++
        }
        a = c
    }
    return a
}

function vd() {
    var a = xd,
        b = id ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function yd(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) yd(a, b[f], c, d, e);
    else c = td(c), a && a[Zc] ? a.vb(b, c, d, e) : a && (a = ud(a)) && (b = fd(a, b, c, !!d, e)) && zd(b)
}

function zd(a) {
    if (!fa(a) && a && !a.cd) {
        var b = a.src;
        if (b && b[Zc]) ed(b.Yb, a);
        else {
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.Wd) : b.detachEvent && b.detachEvent(wd(c), d);
            rd--;
            (c = ud(b)) ? (ed(c, a), 0 == c.h && (c.src = null, b[pd] = null)) : bd(a)
        }
    }
}

function wd(a) {
    return a in qd ? qd[a] : qd[a] = "on" + a
}

function Ad(a, b, c, d) {
    var e = !0;
    if (a = ud(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Wd == c && !f.cd && (f = Bd(f, d), e = e && !1 !== f)
            }
        return e
}

function Bd(a, b) {
    var c = a.listener,
        d = a.se || a.src;
    a.Vd && zd(a);
    return c.call(d, b)
}

function xd(a, b) {
    if (a.cd) return !0;
    if (!id) {
        var c;
        if (!(c = b)) a: {
            c = ["window", "event"];
            for (var d = k, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break a
                }
            c = d
        }
        e = c;
        c = new md(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (m) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = c.i; f; f = f.parentNode) e.push(f);
            for (var f = a.type, h = e.length - 1; !c.j && 0 <= h; h--) {
                c.i = e[h];
                var l = Ad(e[h], f, !0, c),
                    d = d && l
            }
            for (h = 0; !c.j && h < e.length; h++) c.i = e[h],
            l = Ad(e[h],
                f, !1, c),
            d = d && l
        }
        return d
    }
    return Bd(a, new md(b, this))
}

function ud(a) {
    a = a[pd];
    return a instanceof cd ? a : null
}
var Cd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function td(a) {
    if (ga(a)) return a;
    a[Cd] || (a[Cd] = function(b) {
        return a.handleEvent(b)
    });
    return a[Cd]
};

function Dd() {
    Uc.call(this);
    this.Yb = new cd(this);
    this.Rd = this;
    this.pc = null
}
t(Dd, Uc);
Dd.prototype[Zc] = !0;
g = Dd.prototype;
g.oe = function() {
    return this.pc
};
g.He = function(a) {
    this.pc = a
};
g.removeEventListener = function(a, b, c, d) {
    yd(this, a, b, c, d)
};

function Ed(a, b) {
    var c, d = a.oe();
    if (d)
        for (c = []; d; d = d.oe()) c.push(d);
    var d = a.Rd,
        e = b,
        f = e.type || e;
    if (q(e)) e = new gd(e, d);
    else if (e instanceof gd) e.target = e.target || d;
    else {
        var h = e,
            e = new gd(f, d);
        lb(e, h)
    }
    var h = !0,
        l;
    if (c)
        for (var m = c.length - 1; !e.j && 0 <= m; m--) l = e.i = c[m], h = Fd(l, f, !0, e) && h;
    e.j || (l = e.i = d, h = Fd(l, f, !0, e) && h, e.j || (h = Fd(l, f, !1, e) && h));
    if (c)
        for (m = 0; !e.j && m < c.length; m++) l = e.i = c[m], h = Fd(l, f, !1, e) && h;
    return h
}
g.va = function() {
    Dd.v.va.call(this);
    if (this.Yb) {
        var a = this.Yb,
            b = 0,
            c;
        for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) ++b, bd(d[e]);
            delete a.g[c];
            a.h--
        }
    }
    this.pc = null
};
g.T = function(a, b, c, d) {
    return this.Yb.add(String(a), b, !1, c, d)
};
g.vb = function(a, b, c, d) {
    var e;
    e = this.Yb;
    a = String(a).toString();
    if (a in e.g) {
        var f = e.g[a];
        b = dd(f, b, c, d); - 1 < b ? (bd(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
    } else e = !1;
    return e
};

function Fd(a, b, c, d) {
    b = a.Yb.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.cd && h.Wd == c) {
            var l = h.listener,
                m = h.se || h.src;
            h.Vd && ed(a.Yb, h);
            e = !1 !== l.call(m, d) && e
        }
    }
    return e && 0 != d.ah
};

function Gd(a, b, c) {
    if (ga(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
};
// Copyright 2011 Google Inc.  Apache License 2.0
var Hd = {},
    Id, Jd;

function Kd(a, b) {
    this.ma = a;
    this.type = b;
    a.w.W && (this.jb = a.w.W[b], this.od = a.w.W[Ld[b]], this.sf = !this.jb)
}
g = Kd.prototype;
g.M = null;
g.tc = null;
g.Jb = null;
g.ab = 0;
g.qa = 0;
g.ec = !1;
g.jb = null;
g.od = null;
g.sf = null;
g.Xd = function(a) {
    console.log("non-rendered connecting_: " + a);
    var b = this,
        c = b.ma,
        d = a.ma;
    a.M && Md(a);
    if (b.M) {
        var e = G(b),
            f = b.Jb;
        b.Jb = null;
        if (e.i) f = Nd(e), e.B(), e = null;
        else if (1 == b.type) {
            if (!e.K) throw "Orphan block does not have an output connection.";
            var h = Od(d, e);
            h && (e.K.connect(h), e = null)
        } else if (3 == b.type) {
            if (!e.N) throw "Orphan block does not have a previous connection.";
            for (h = d; h.g;)
                if (h.g.M) h = Pd(h);
                else {
                    Qd(e.N, h.g) && (h.g.connect(e.N), e = null);
                    break
                }
        }
        if (e && (Md(b), Rd)) {
            var l = Sd;
            setTimeout(function() {
                e.w &&
                    !e.getParent() && (H(l), e.K ? Td(e.K, b) : e.N && Td(e.N, b), H(!1))
            }, Ud)
        }
        b.Jb = f
    }
    var m;
    0 == I && (m = new Wd(d));
    Xd(b, a);
    d.Ld(c);
    m && (Yd(m), J(m))
};
g.B = function() {
    if (this.M) throw "Disconnect connection before disposing of it.";
    this.ec && Zd(this.jb, this);
    $d == this && ($d = null);
    ae == this && (ae = null);
    this.od = this.jb = null
};

function be(a) {
    return 1 == a.type || 3 == a.type
}

function ce(a, b) {
    if (!b) return 3;
    if (be(a)) var c = a.ma,
        d = b.ma;
    else d = a.ma, c = b.ma;
    return c && c == d ? 1 : b.type != Ld[a.type] ? 2 : c && d && c.w !== d.w ? 5 : Qd(a, b) ? c.i && !d.i ? 6 : 0 : 4
}
g.ye = function(a) {
    var b = ce(this, a);
    if (0 != b && b != Kd.h) return !1;
    if (2 == a.type || 4 == a.type)
        if (a.M || this.M) return !1;
    return 1 == a.type && a.M && !de(G(a)) && !G(a).i || 4 == this.type && a.M && !this.ma.g || -1 != ee.indexOf(a) ? !1 : !0
};
g.connect = function(a) {
    console.log("non-rendered connecting: " + a);
    if (this.M != a) {
        switch (ce(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed.";
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        console.log(a instanceof fe);
        console.log(a instanceof Kd);
        be(this) ? (console.log("sup"), this.Xd(a)) : (console.log("inf"), a.Xd(this))
    }
};

function Xd(a, b) {
    a.M = b;
    b.M = a
}

function ge(a, b) {
    for (var c = !1, d = 0; d < a.h.length; d++) {
        var e = a.h[d].I;
        if (e && 1 == e.type && Qd(b.K, e)) {
            if (c) return null;
            c = e
        }
    }
    return c
}

function Od(a, b) {
    for (var c = a, d; d = ge(c, b);)
        if (c = G(d), !c || c.i) return d;
    return null
}

function Md(a) {
    var b = a.M,
        c, d;
    be(a) ? (c = a.ma, d = b.ma, b = a) : (c = b.ma, d = a.ma);
    a.gf(c, d);
    b.Jf()
}
g.gf = function(a, b) {
    var c;
    0 == I && (c = new Wd(b));
    this.M = this.M.M = null;
    b.Ld(null);
    c && (Yd(c), J(c))
};
g.Jf = function() {
    var a = this.ma,
        b = this.Jb;
    if (a.w && b && Rd)
        if (a = he(b, a.w), a.K) this.connect(a.K);
        else if (a.N) this.connect(a.N);
    else throw "Child block does not have output or previous statement.";
};

function G(a) {
    return a.M ? a.M.ma : null
}

function Qd(a, b) {
    if (!a.tc || !b.tc) return !0;
    for (var c = 0; c < a.tc.length; c++)
        if (-1 != b.tc.indexOf(a.tc[c])) return !0;
    return !1
}

function ie(a, b) {
    b ? (da(b) || (b = [b]), a.tc = b, a.M && !Qd(a, a.M) && (je(be(a) ? G(a) : a.ma), ke(a.ma))) : a.tc = null
};
// Copyright 2016 Google Inc.  Apache License 2.0
function fe(a, b) {
    fe.v.constructor.call(this, a, b);
    this.g = new w(0, 0);
    console.log("rendered connector")
}
t(fe, Kd);

function le(a, b) {
    var c = a.ab - b.ab,
        d = a.qa - b.qa;
    return Math.sqrt(c * c + d * d)
}

function Td(a, b) {
    if (0 == K) {
        var c = me(a.ma);
        if (!c.A) {
            var d = !1;
            if (!de(c)) {
                c = me(b.ma);
                if (!de(c)) return;
                b = a;
                d = !0
            }
            c.m.parentNode.appendChild(c.m);
            var e = b.ab + ne - a.ab,
                f = b.qa + ne - a.qa;
            d && (f = -f);
            c.s && (e = -e);
            c.moveBy(e, f)
        }
    }
}

function oe(a, b, c) {
    a.ec && Zd(a.jb, a);
    a.ab = b;
    a.qa = c;
    a.sf || pe(a.jb, a)
}
g = fe.prototype;
g.moveBy = function(a, b) {
    oe(this, this.ab + a, this.qa + b)
};

function qe(a, b) {
    oe(a, b.x + a.g.x, b.y + a.g.y)
}

function re(a, b, c) {
    a.g.x = b;
    a.g.y = c
}

function se(a) {
    var b = a.M.ab - a.ab,
        c = a.M.qa - a.qa;
    if (0 != b || 0 != c) {
        a = G(a);
        var d = a.m;
        if (!d) throw "block is not rendered.";
        d = te(d);
        a.m.setAttribute("transform", "translate(" + (d.x - b) + "," + (d.y - c) + ")");
        ue(a, -b, -c)
    }
}
g.ue = function() {
    var a;
    a = 1 == this.type || 2 == this.type ? "m 0,0 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.ma.oa();
    Kd.g = L("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.ab - b.x) + "," + (this.qa - b.y) + ")" + (this.ma.s ? " scale(-1 1)" : "")
    }, this.ma.m)
};

function ve(a) {
    we(a, !1);
    var b = [];
    if (1 != a.type && 3 != a.type) return b;
    if (a = G(a)) {
        var c;
        a.j ? (c = [], a.K && c.push(a.K), a.g && c.push(a.g), a.N && c.push(a.N)) : c = a.Gb(!0);
        for (var d = 0; d < c.length; d++) b.push.apply(b, ve(c[d]));
        b.length || (b[0] = a)
    }
    return b
}

function xe() {
    A(Kd.g);
    delete Kd.g
}

function we(a, b) {
    (a.sf = b) && a.ec ? Zd(a.jb, a) : b || a.ec || pe(a.jb, a)
}
g.ye = function(a, b) {
    return le(this, a) > b ? !1 : fe.v.ye.call(this, a)
};
g.gf = function(a, b) {
    fe.v.gf.call(this, a, b);
    a.O && a.U();
    b.O && (ye(b), b.U())
};
g.Jf = function() {
    var a = this.ma,
        b = this.Jb;
    if (a.w && b && Rd) {
        fe.v.Jf.call(this);
        b = G(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.xe();
        b.U(!1);
        a.O && a.U()
    }
};
g.Xd = function(a) {
    console.log("rendered connect");
    fe.v.Xd.call(this, a);
    var b = this.ma;
    a = a.ma;
    b.O && ye(b);
    a.O && ye(a);
    console.log("connecting: " + b + " " + a);
    b.O && a.O && (3 == this.type || 4 == this.type ? (a.U(), console.log("childBlock")) : (b.U(), console.log("parentBlock")))
};

function ze(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = ze.prototype;
g.yb = function() {
    return this.right - this.left
};
g.wc = function() {
    return this.bottom - this.top
};
g.clone = function() {
    return new ze(this.top, this.right, this.bottom, this.left)
};
g.contains = function(a) {
    return this && a ? a instanceof ze ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, fa(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function Ae(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = Ae.prototype;
g.clone = function() {
    return new Ae(this.left, this.top, this.width, this.height)
};
g.contains = function(a) {
    return a instanceof Ae ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.top += a.y) : (this.left += a, fa(b) && (this.top += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
var Be = {};

function Ce(a, b) {
    var c = gc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function De(a, b) {
    return Ce(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Ee() {
    var a = document,
        b = a.body,
        a = a.documentElement;
    return new w(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function Fe(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    u && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function Ge(a) {
    var b = gc(a),
        c = new w(0, 0),
        d;
    d = b ? gc(b) : document;
    d = !u || 9 <= Number(Wb) || "CSS1Compat" == ec(d).g.compatMode ? d.documentElement : d.body;
    if (a == d) return c;
    a = Fe(a);
    d = ec(b).g;
    b = lc(d);
    d = d.parentWindow || d.defaultView;
    b = u && Ub("10") && d.pageYOffset != b.scrollTop ? new w(b.scrollLeft, b.scrollTop) : new w(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function He(a) {
    var b = Ie;
    if ("none" != De(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function Ie(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = v && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = Fe(a), new Yb(a.right - a.left, a.bottom - a.top)) : new Yb(b, c)
}

function Je(a, b) {
    a.style.display = b ? "" : "none"
}
var Ke = Ib ? "MozUserSelect" : v || Hb ? "WebkitUserSelect" : null;

function Le(a, b) {
    var c = b ? null : a.getElementsByTagName("*");
    if (Ke) {
        var d = "none";
        a.style && (a.style[Ke] = d);
        if (c)
            for (var e = 0, f; f = c[e]; e++) f.style && (f.style[Ke] = d)
    } else if (u || Gb)
        if (d = "on", a.setAttribute("unselectable", d), c)
            for (e = 0; f = c[e]; e++) f.setAttribute("unselectable", d)
}
var Me = {
    thin: 2,
    medium: 4,
    thick: 6
};

function Ne(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in Me) d = Me[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};

function Oe(a) {
    Uc.call(this);
    this.h = a;
    this.g = {}
}
t(Oe, Uc);
var Pe = [];
Oe.prototype.T = function(a, b, c, d) {
    da(b) || (b && (Pe[0] = b.toString()), b = Pe);
    for (var e = 0; e < b.length; e++) {
        var f = sd(a, b[e], c || this.handleEvent, d || !1, this.h || this);
        if (!f) break;
        this.g[f.Jg] = f
    }
    return this
};
Oe.prototype.vb = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) this.vb(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.h || this, c = td(c), d = !!d, b = a && a[Zc] ? fd(a.Yb, String(b), c, d, e) : a ? (a = ud(a)) ? fd(a, b, c, d, e) : null : null, b && (zd(b), delete this.g[b.Jg]);
    return this
};

function Qe(a) {
    jb(a.g, function(a, c) {
        this.g.hasOwnProperty(c) && zd(a)
    }, a);
    a.g = {}
}
Oe.prototype.va = function() {
    Oe.v.va.call(this);
    Qe(this)
};
Oe.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function Re() {}
ba(Re);
Re.prototype.g = 0;

function Se(a) {
    Dd.call(this);
    this.i = a || ec();
    this.bb = Te;
    this.Ha = null;
    this.Z = !1;
    this.g = null;
    this.ac = void 0;
    this.F = this.j = this.A = this.Pa = null
}
t(Se, Dd);
Se.prototype.$f = Re.Hb();
var Te = null;

function Ue(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}

function Ve(a) {
    return a.Ha || (a.Ha = ":" + (a.$f.g++).toString(36))
}
g = Se.prototype;
g.C = function() {
    return this.g
};

function We(a) {
    a.ac || (a.ac = new Oe(a));
    return a.ac
}

function Xe(a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.A && a.Ha && Ye(a.A, a.Ha) && a.A != b) throw Error("Unable to set parent component");
    a.A = b;
    Se.v.He.call(a, b)
}
g.getParent = function() {
    return this.A
};
g.He = function(a) {
    if (this.A && this.A != a) throw Error("Method not supported");
    Se.v.He.call(this, a)
};
g.Tc = function() {
    this.g = this.i.g.createElement("DIV")
};
g.U = function(a) {
    Ze(this, a)
};

function Ze(a, b, c) {
    if (a.Z) throw Error("Component already rendered");
    a.g || a.Tc();
    b ? b.insertBefore(a.g, c || null) : a.i.g.body.appendChild(a.g);
    a.A && !a.A.Z || a.Da()
}
g.Da = function() {
    this.Z = !0;
    $e(this, function(a) {
        !a.Z && a.C() && a.Da()
    })
};
g.mb = function() {
    $e(this, function(a) {
        a.Z && a.mb()
    });
    this.ac && Qe(this.ac);
    this.Z = !1
};
g.va = function() {
    this.Z && this.mb();
    this.ac && (this.ac.B(), delete this.ac);
    $e(this, function(a) {
        a.B()
    });
    this.g && A(this.g);
    this.A = this.Pa = this.g = this.F = this.j = null;
    Se.v.va.call(this)
};
g.md = function(a, b) {
    this.Oc(a, af(this), b)
};
g.Oc = function(a, b, c) {
    if (a.Z && (c || !this.Z)) throw Error("Component already rendered");
    if (0 > b || b > af(this)) throw Error("Child component index out of bounds");
    this.F && this.j || (this.F = {}, this.j = []);
    if (a.getParent() == this) {
        var d = Ve(a);
        this.F[d] = a;
        Wa(this.j, a)
    } else {
        var d = this.F,
            e = Ve(a);
        if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
        d[e] = a
    }
    Xe(a, this);
    $a(this.j, b, 0, a);
    a.Z && this.Z && a.getParent() == this ? (c = this.qe(), b = c.childNodes[b] || null, b != a.C() && c.insertBefore(a.C(), b)) : c ? (this.g ||
        this.Tc(), b = bf(this, b + 1), Ze(a, this.qe(), b ? b.g : null)) : this.Z && !a.Z && a.g && a.g.parentNode && 1 == a.g.parentNode.nodeType && a.Da()
};
g.qe = function() {
    return this.g
};

function cf(a) {
    null == a.bb && (a.bb = "rtl" == De(a.Z ? a.g : a.i.g.body, "direction"));
    return a.bb
}
g.Uc = function(a) {
    if (this.Z) throw Error("Component already rendered");
    this.bb = a
};

function df(a) {
    return !!a.j && 0 != a.j.length
}

function af(a) {
    return a.j ? a.j.length : 0
}

function Ye(a, b) {
    var c;
    a.F && b ? (c = a.F, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
    return c
}

function bf(a, b) {
    return a.j ? a.j[b] || null : null
}

function $e(a, b, c) {
    a.j && Ra(a.j, b, c)
}

function ef(a, b) {
    return a.j && b ? Qa(a.j, b) : -1
}
g.removeChild = function(a, b) {
    if (a) {
        var c = q(a) ? a : Ve(a);
        a = Ye(this, c);
        if (c && a) {
            var d = this.F;
            c in d && delete d[c];
            Wa(this.j, a);
            b && (a.mb(), a.g && A(a.g));
            Xe(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
g.$g = function(a) {
    for (var b = []; df(this);) b.push(this.removeChild(bf(this, 0), a));
    return b
};

function ff(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
}

function gf(a, b) {
    return a.classList ? a.classList.contains(b) : Va(ff(a), b)
}

function hf(a, b) {
    a.classList ? a.classList.add(b) : gf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function jf(a, b) {
    if (a.classList) Ra(b, function(b) {
        hf(a, b)
    });
    else {
        var c = {};
        Ra(ff(a), function(a) {
            c[a] = !0
        });
        Ra(b, function(a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
}

function kf(a, b) {
    a.classList ? a.classList.remove(b) : gf(a, b) && (a.className = Sa(ff(a), function(a) {
        return a != b
    }).join(" "))
}

function lf(a, b) {
    a.classList ? Ra(b, function(b) {
        kf(a, b)
    }) : a.className = Sa(ff(a), function(a) {
        return !Va(b, a)
    }).join(" ")
};

function mf(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!ga(b)) throw Error("Invalid decorator function " + b);
}
var nf = {};
var of;

function pf(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function qf(a, b, c) {
    da(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (of || (of = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = of, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}

function rf(a) {
    a.removeAttribute("aria-activedescendant")
}

function sf(a, b) {
    var c = a.getAttribute("aria-" + b);
    return null == c || void 0 == c ? "" : String(c)
};

function tf() {}
var uf;
ba(tf);
var vf = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
g = tf.prototype;
g.Mg = function() {};
g.re = function(a) {
    return a.i.ob("DIV", wf(this, a).join(" "), a.cb)
};
g.Xc = function(a) {
    return a
};

function xf(a, b, c) {
    if (a = a.C ? a.C() : a) {
        var d = [b];
        u && !Ub("7") && (d = yf(ff(a), b), d.push(b));
        (c ? jf : lf)(a, d)
    }
}

function zf(a, b, c) {
    if (a = c || a.Mg()) c = b.getAttribute("role") || null, a != c && pf(b, a)
}

function Af(a, b) {
    a.zb || qf(b, "hidden", !a.zb);
    a.isEnabled() || Bf(b, 1, !a.isEnabled());
    a.Ba & 8 && Bf(b, 8, !!(a.ea & 8));
    a.Ba & 16 && Bf(b, 16, !!(a.ea & 16));
    a.Ba & 64 && Bf(b, 64, !!(a.ea & 64))
}

function Cf(a, b) {
    var c;
    if (a.Ba & 32 && (c = a.C())) {
        if (!b && a.ea & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.ea & 32 && a.Ng()
        }(vc(c) && xc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
}
g.$ = function(a, b) {
    Je(a, b);
    a && qf(a, "hidden", !b)
};

function Bf(a, b, c) {
    uf || (uf = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = uf[b];
    var d = a.getAttribute("role") || null;
    d && (d = vf[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && qf(a, b, c)
}
g.vd = function(a, b) {
    var c = this.Xc(a);
    if (c && (pc(c), b))
        if (q(b)) sc(c, b);
        else {
            var d = function(a) {
                if (a) {
                    var b = gc(c);
                    c.appendChild(q(a) ? b.createTextNode(a) : a)
                }
            };
            da(b) ? Ra(b, d) : !ea(b) || "nodeType" in b ? d(b) : Ra(Ya(b), d)
        }
};
g.ga = function() {
    return "goog-control"
};

function wf(a, b) {
    var c = a.ga(),
        d = [c],
        e = a.ga();
    e != c && d.push(e);
    c = b.ea;
    for (e = []; c;) {
        var f = c & -c;
        e.push(a.ie(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (c = b.Fg) && d.push.apply(d, c);
    u && !Ub("7") && d.push.apply(d, yf(d));
    return d
}

function yf(a, b) {
    var c = [];
    b && (a = Xa(a, [b]));
    Ra([], function(d) {
        !Ua(d, oa(Va, a)) || b && !Va(d, b) || c.push(d.join("_"))
    });
    return c
}
g.ie = function(a) {
    if (!this.g) {
        var b = this.ga();
        b.replace(/\xa0|\s/g, " ");
        this.g = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.g[a]
};

function Df(a, b, c, d, e) {
    if (!(u || Hb || v && Ub("525"))) return !0;
    if (Kb && e) return Ef(a);
    if (e && !d) return !1;
    fa(b) && (b = Ff(b));
    if (!c && (17 == b || 18 == b || Kb && 91 == b)) return !1;
    if ((v || Hb) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (u && d && b == a) return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !(v || Hb)
    }
    return Ef(a)
}

function Ef(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (v || Hb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function Ff(a) {
    if (Ib) a = Gf(a);
    else if (Kb && v) a: switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}

function Gf(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function Hf(a, b) {
    Dd.call(this);
    a && If(this, a, b)
}
t(Hf, Dd);
g = Hf.prototype;
g.Sc = null;
g.ze = null;
g.xf = null;
g.Ae = null;
g.tb = -1;
g.fc = -1;
g.Ue = !1;
var Jf = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Kf = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Lf = u || Hb || v && Ub("525"),
    Mf = Kb && Ib;
g = Hf.prototype;
g.ui = function(a) {
    if (v || Hb)
        if (17 == this.tb && !a.ctrlKey || 18 == this.tb && !a.altKey || Kb && 91 == this.tb && !a.metaKey) this.fc = this.tb = -1; - 1 == this.tb && (a.ctrlKey && 17 != a.g ? this.tb = 17 : a.altKey && 18 != a.g ? this.tb = 18 : a.metaKey && 91 != a.g && (this.tb = 91));
    Lf && !Df(a.g, this.tb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.fc = Ff(a.g), Mf && (this.Ue = a.altKey))
};
g.wi = function(a) {
    this.fc = this.tb = -1;
    this.Ue = a.altKey
};
g.handleEvent = function(a) {
    var b = a.h,
        c, d, e = b.altKey;
    u && "keypress" == a.type ? (c = this.fc, d = 13 != c && 27 != c ? b.keyCode : 0) : (v || Hb) && "keypress" == a.type ? (c = this.fc, d = 0 <= b.charCode && 63232 > b.charCode && Ef(c) ? b.charCode : 0) : Gb && !v ? (c = this.fc, d = Ef(c) ? b.keyCode : 0) : (c = b.keyCode || this.fc, d = b.charCode || 0, Mf && (e = this.Ue), Kb && 63 == d && 224 == c && (c = 191));
    var f = c = Ff(c),
        h = b.keyIdentifier;
    c ? 63232 <= c && c in Jf ? f = Jf[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Kf && (f = Kf[h]);
    this.tb = f;
    a = new Nf(f, d, 0, b);
    a.altKey = e;
    Ed(this, a)
};
g.C = function() {
    return this.Sc
};

function If(a, b, c) {
    a.Ae && Of(a);
    a.Sc = b;
    a.ze = sd(a.Sc, "keypress", a, c);
    a.xf = sd(a.Sc, "keydown", a.ui, c, a);
    a.Ae = sd(a.Sc, "keyup", a.wi, c, a)
}

function Of(a) {
    a.ze && (zd(a.ze), zd(a.xf), zd(a.Ae), a.ze = null, a.xf = null, a.Ae = null);
    a.Sc = null;
    a.tb = -1;
    a.fc = -1
}
g.va = function() {
    Hf.v.va.call(this);
    Of(this)
};

function Nf(a, b, c, d) {
    md.call(this, d);
    this.type = "key";
    this.g = a;
    this.A = b
}
t(Nf, md);

function M(a, b, c) {
    Se.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ia(b);
            if (d = nf[d]) break;
            b = b.v ? b.v.constructor : null
        }
        b = d ? ga(d.Hb) ? d.Hb() : new d : null
    }
    this.h = b;
    this.Ge(void 0 !== a ? a : null)
}
t(M, Se);
g = M.prototype;
g.cb = null;
g.ea = 0;
g.Ba = 39;
g.Xe = 255;
g.Hc = 0;
g.zb = !0;
g.Fg = null;
g.yd = !0;
g.Tc = function() {
    var a = this.h.re(this);
    this.g = a;
    zf(this.h, a, this.pe());
    Le(a, !u && !Gb);
    this.zb || this.h.$(a, !1)
};
g.pe = function() {
    return null
};
g.qe = function() {
    return this.h.Xc(this.C())
};
g.Da = function() {
    M.v.Da.call(this);
    Af(this, this.g);
    var a = this.h;
    if (cf(this)) {
        var b = this.C();
        xf(b, a.ga() + "-rtl", !0)
    }
    this.isEnabled() && Cf(this, this.zb);
    this.Ba & -2 && (this.yd && Pf(this, !0), this.Ba & 32 && (a = this.C())) && (b = this.u || (this.u = new Hf), If(b, a), We(this).T(b, "key", this.rb).T(a, "focus", this.ki).T(a, "blur", this.Ng))
};

function Pf(a, b) {
    var c = We(a),
        d = a.C();
    b ? (c.T(d, "mouseover", a.zd).T(d, "mousedown", a.Tb).T(d, "mouseup", a.Yc).T(d, "mouseout", a.qf), a.xd != aa && c.T(d, "contextmenu", a.xd), u && (Ub(9) || c.T(d, "dblclick", a.Og), a.L || (a.L = new Qf(a), Xc(a, oa(Yc, a.L))))) : (c.vb(d, "mouseover", a.zd).vb(d, "mousedown", a.Tb).vb(d, "mouseup", a.Yc).vb(d, "mouseout", a.qf), a.xd != aa && c.vb(d, "contextmenu", a.xd), u && (Ub(9) || c.vb(d, "dblclick", a.Og), Yc(a.L), a.L = null))
}
g.mb = function() {
    M.v.mb.call(this);
    this.u && Of(this.u);
    this.zb && this.isEnabled() && Cf(this, !1)
};
g.va = function() {
    M.v.va.call(this);
    this.u && (this.u.B(), delete this.u);
    delete this.h;
    this.L = this.Fg = this.cb = null
};
g.Ge = function(a) {
    this.cb = a
};
g.ge = function() {
    var a = this.cb;
    if (!a) return "";
    a = q(a) ? a : da(a) ? Ta(a, Ac).join("") : yc(a);
    return ra(a)
};
g.Uc = function(a) {
    M.v.Uc.call(this, a);
    var b = this.C();
    b && xf(b, this.h.ga() + "-rtl", a)
};
g.$ = function(a, b) {
    if (b || this.zb != a && Ed(this, a ? "show" : "hide")) {
        var c = this.C();
        c && this.h.$(c, a);
        this.isEnabled() && Cf(this, a);
        this.zb = a;
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return !(this.ea & 1)
};
g.Id = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Rf(this, 1, !a) || (a || (Sf(this, !1), this.pb(!1)), this.zb && Cf(this, a), Tf(this, 1, !a, !0))
};
g.pb = function(a) {
    Rf(this, 2, a) && Tf(this, 2, a)
};

function Sf(a, b) {
    Rf(a, 4, b) && Tf(a, 4, b)
}
g.Pf = function(a) {
    Rf(this, 8, a) && Tf(this, 8, a)
};

function Uf(a, b) {
    Rf(a, 16, b) && Tf(a, 16, b)
}

function Vf(a, b) {
    Rf(a, 64, b) && Tf(a, 64, b)
}

function Tf(a, b, c, d) {
    if (!d && 1 == b) a.Id(!c);
    else if (a.Ba & b && c != !!(a.ea & b)) {
        var e = a.h;
        if (d = a.C())(e = e.ie(b)) && xf(a, e, c), Bf(d, b, c);
        a.ea = c ? a.ea | b : a.ea & ~b
    }
}
g.fb = function(a, b) {
    if (this.Z && this.ea & a && !b) throw Error("Component already rendered");
    !b && this.ea & a && Tf(this, a, !1);
    this.Ba = b ? this.Ba | a : this.Ba & ~a
};

function Wf(a, b) {
    return !!(a.Xe & b) && !!(a.Ba & b)
}

function Rf(a, b, c) {
    return !!(a.Ba & b) && !!(a.ea & b) != c && (!(a.Hc & b) || Ed(a, Ue(b, c))) && !a.J
}
g.zd = function(a) {
    !Xf(a, this.C()) && Ed(this, "enter") && this.isEnabled() && Wf(this, 2) && this.pb(!0)
};
g.qf = function(a) {
    !Xf(a, this.C()) && Ed(this, "leave") && (Wf(this, 4) && Sf(this, !1), Wf(this, 2) && this.pb(!1))
};
g.xd = aa;

function Xf(a, b) {
    return !!a.u && rc(b, a.u)
}
g.Tb = function(a) {
    if (this.isEnabled() && (Wf(this, 2) && this.pb(!0), od(a) && !(v && Kb && a.ctrlKey))) {
        Wf(this, 4) && Sf(this, !0);
        var b;
        if (b = this.h) {
            var c;
            b = this.Ba & 32 && (c = this.C()) ? vc(c) && xc(c) : !1
        }
        b && this.C().focus()
    }!od(a) || v && Kb && a.ctrlKey || a.preventDefault()
};
g.Yc = function(a) {
    this.isEnabled() && (Wf(this, 2) && this.pb(!0), this.ea & 4 && this.hc(a) && Wf(this, 4) && Sf(this, !1))
};
g.Og = function(a) {
    this.isEnabled() && this.hc(a)
};
g.hc = function(a) {
    Wf(this, 16) && Uf(this, !(this.ea & 16));
    Wf(this, 8) && this.Pf(!0);
    Wf(this, 64) && Vf(this, !(this.ea & 64));
    var b = new gd("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.F = a.F);
    return Ed(this, b)
};
g.ki = function() {
    Wf(this, 32) && Rf(this, 32, !0) && Tf(this, 32, !0)
};
g.Ng = function() {
    Wf(this, 4) && Sf(this, !1);
    Wf(this, 32) && Rf(this, 32, !1) && Tf(this, 32, !1)
};
g.rb = function(a) {
    return this.zb && this.isEnabled() && this.mf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.mf = function(a) {
    return 13 == a.g && this.hc(a)
};
if (!ga(M)) throw Error("Invalid component class " + M);
if (!ga(tf)) throw Error("Invalid renderer class " + tf);
var Yf = ia(M);
nf[Yf] = tf;
mf("goog-control", function() {
    return new M(null)
});

function Qf(a) {
    Uc.call(this);
    this.h = a;
    this.g = !1;
    this.i = new Oe(this);
    Xc(this, oa(Yc, this.i));
    a = this.h.g;
    this.i.T(a, "mousedown", this.u).T(a, "mouseup", this.A).T(a, "click", this.j)
}
t(Qf, Uc);
var Zf = !u || 9 <= Number(Wb);
Qf.prototype.u = function() {
    this.g = !1
};
Qf.prototype.A = function() {
    this.g = !0
};

function $f(a, b) {
    if (!Zf) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
Qf.prototype.j = function(a) {
    if (this.g) this.g = !1;
    else {
        var b = a.h,
            c = b.button,
            d = b.type,
            e = $f(b, "mousedown");
        this.h.Tb(new md(e, a.i));
        e = $f(b, "mouseup");
        this.h.Yc(new md(e, a.i));
        Zf || (b.button = c, b.type = d)
    }
};
Qf.prototype.va = function() {
    this.h = null;
    Qf.v.va.call(this)
};

function ag() {
    this.h = []
}
t(ag, tf);
ba(ag);

function bg(a, b) {
    var c = a.h[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.ga() + "-highlight";
                break;
            case 1:
                c = a.ga() + "-checkbox";
                break;
            case 2:
                c = a.ga() + "-content"
        }
        a.h[b] = c
    }
    return c
}
g = ag.prototype;
g.Mg = function() {
    return "menuitem"
};
g.re = function(a) {
    var b = a.i.ob("DIV", wf(this, a).join(" "), cg(this, a.cb, a.i));
    dg(this, a, b, !!(a.Ba & 8) || !!(a.Ba & 16));
    return b
};
g.Xc = function(a) {
    return a && a.firstChild
};
g.vd = function(a, b) {
    var c = this.Xc(a),
        d = eg(this, a) ? c.firstChild : null;
    ag.v.vd.call(this, a, b);
    d && !eg(this, a) && c.insertBefore(d, c.firstChild || null)
};

function cg(a, b, c) {
    a = bg(a, 2);
    return c.ob("DIV", a, b)
}

function eg(a, b) {
    var c = a.Xc(b);
    if (c) {
        var c = c.firstChild,
            d = bg(a, 1);
        return !!c && ha(c) && 1 == c.nodeType && gf(c, d)
    }
    return !1
}

function dg(a, b, c, d) {
    zf(a, c, b.pe());
    Af(b, c);
    d != eg(a, c) && (d ? hf(c, "goog-option") : kf(c, "goog-option"), c = a.Xc(c), d ? (a = bg(a, 1), c.insertBefore(b.i.ob("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
g.ie = function(a) {
    switch (a) {
        case 2:
            return bg(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return ag.v.ie.call(this, a)
    }
};
g.ga = function() {
    return "goog-menuitem"
};

function fg(a, b, c, d) {
    M.call(this, a, d || ag.Hb(), c);
    this.Pa = b
}
t(fg, M);
g = fg.prototype;
g.Na = function() {
    var a = this.Pa;
    return null != a ? a : this.ge()
};
g.fb = function(a, b) {
    fg.v.fb.call(this, a, b);
    switch (a) {
        case 8:
            this.ea & 16 && !b && Uf(this, !1);
            var c = this.C();
            c && this && c && dg(this.h, this, c, b);
            break;
        case 16:
            (c = this.C()) && this && c && dg(this.h, this, c, b)
    }
};
g.ge = function() {
    var a = this.cb;
    return da(a) ? (a = Ta(a, function(a) {
        return ha(a) && 1 == a.nodeType && (gf(a, "goog-menuitem-accel") || gf(a, "goog-menuitem-mnemonic-separator")) ? "" : Ac(a)
    }).join(""), ra(a)) : fg.v.ge.call(this)
};
g.Yc = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.h;
        b.h = null;
        if (c && fa(a.clientX) && cc(c, new w(a.clientX, a.clientY))) return
    }
    fg.v.Yc.call(this, a)
};
g.mf = function(a) {
    return a.g == this.Tg && this.hc(a) ? !0 : fg.v.mf.call(this, a)
};
g.ji = function() {
    return this.Tg
};
mf("goog-menuitem", function() {
    return new fg(null)
});
fg.prototype.pe = function() {
    return this.Ba & 16 ? "menuitemcheckbox" : this.Ba & 8 ? "menuitemradio" : fg.v.pe.call(this)
};
fg.prototype.getParent = function() {
    return M.prototype.getParent.call(this)
};
fg.prototype.oe = function() {
    return M.prototype.oe.call(this)
};

function gg(a) {
    this.h = a
}
ba(gg);

function hg(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
gg.prototype.g = function(a) {
    a = a.C();
    Le(a, Ib);
    u && (a.hideFocus = !0);
    var b = this.h;
    b && pf(a, b)
};
gg.prototype.ga = function() {
    return "goog-container"
};

function ig(a, b) {
    var c = a.ga(),
        d = [c, b.bd == jg ? c + "-horizontal" : c + "-vertical"];
    b.isEnabled() || d.push(c + "-disabled");
    return d
};

function kg() {}
t(kg, tf);
ba(kg);
kg.prototype.re = function(a) {
    return a.i.ob("DIV", this.ga())
};
kg.prototype.vd = function() {};
kg.prototype.ga = function() {
    return "goog-menuseparator"
};

function lg(a, b) {
    M.call(this, null, a || kg.Hb(), b);
    this.fb(1, !1);
    this.fb(2, !1);
    this.fb(4, !1);
    this.fb(32, !1);
    this.ea = 1
}
t(lg, M);
lg.prototype.Da = function() {
    lg.v.Da.call(this);
    var a = this.C();
    pf(a, "separator")
};
mf("goog-menuseparator", function() {
    return new lg
});

function mg(a) {
    this.h = a || "menu"
}
t(mg, gg);
ba(mg);
mg.prototype.ga = function() {
    return "goog-menu"
};
mg.prototype.g = function(a) {
    mg.v.g.call(this, a);
    a = a.C();
    qf(a, "haspopup", "true")
};
mf("goog-menuseparator", function() {
    return new lg
});

function ng(a, b, c) {
    Se.call(this, c);
    this.ud = b || gg.Hb();
    this.bd = a || og
}
t(ng, Se);
var jg = "horizontal",
    og = "vertical";
g = ng.prototype;
g.yf = null;
g.yc = null;
g.ud = null;
g.bd = null;
g.bc = !0;
g.vc = !0;
g.Vc = !0;
g.ya = -1;
g.Fa = null;
g.ad = !1;
g.Qb = null;

function pg(a) {
    return a.yf || a.C()
}
g.Tc = function() {
    this.g = this.i.ob("DIV", ig(this.ud, this).join(" "))
};
g.qe = function() {
    return this.C()
};
g.Da = function() {
    ng.v.Da.call(this);
    $e(this, function(a) {
        a.Z && qg(this, a)
    }, this);
    var a = this.C();
    this.ud.g(this);
    this.$(this.bc, !0);
    We(this).T(this, "enter", this.nf).T(this, "highlight", this.ti).T(this, "unhighlight", this.zi).T(this, "open", this.xi).T(this, "close", this.oi).T(a, "mousedown", this.Tb).T(gc(a), "mouseup", this.pi).T(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.ni);
    this.Vc && rg(this, !0)
};

function rg(a, b) {
    var c = We(a),
        d = pg(a);
    b ? c.T(d, "focus", a.Lg).T(d, "blur", a.Kg).T(a.yc || (a.yc = new Hf(pg(a))), "key", a.rb) : c.vb(d, "focus", a.Lg).vb(d, "blur", a.Kg).vb(a.yc || (a.yc = new Hf(pg(a))), "key", a.rb)
}
g.mb = function() {
    this.Wc(-1);
    this.Fa && Vf(this.Fa, !1);
    this.ad = !1;
    ng.v.mb.call(this)
};
g.va = function() {
    ng.v.va.call(this);
    this.yc && (this.yc.B(), this.yc = null);
    this.ud = this.Fa = this.Qb = this.yf = null
};
g.nf = function() {
    return !0
};
g.ti = function(a) {
    var b = ef(this, a.target);
    if (-1 < b && b != this.ya) {
        var c = bf(this, this.ya);
        c && c.pb(!1);
        this.ya = b;
        c = bf(this, this.ya);
        this.ad && Sf(c, !0);
        this.Fa && c != this.Fa && (c.Ba & 64 ? Vf(c, !0) : Vf(this.Fa, !1))
    }
    b = this.C();
    null != a.target.C() && qf(b, "activedescendant", a.target.C().id)
};
g.zi = function(a) {
    a.target == bf(this, this.ya) && (this.ya = -1);
    a = this.C();
    rf(a)
};
g.xi = function(a) {
    (a = a.target) && a != this.Fa && a.getParent() == this && (this.Fa && Vf(this.Fa, !1), this.Fa = a)
};
g.oi = function(a) {
    a.target == this.Fa && (this.Fa = null);
    var b = this.C(),
        c = a.target.C();
    b && a.target.ea & 2 && c && (a = "", c && (a = c.id), qf(b, "activedescendant", a))
};
g.Tb = function(a) {
    this.vc && (this.ad = !0);
    var b = pg(this);
    b && vc(b) && xc(b) ? b.focus() : a.preventDefault()
};
g.pi = function() {
    this.ad = !1
};
g.ni = function(a) {
    var b = sg(this, a.target);
    if (b) switch (a.type) {
        case "mousedown":
            b.Tb(a);
            break;
        case "mouseup":
            b.Yc(a);
            break;
        case "mouseover":
            b.zd(a);
            break;
        case "mouseout":
            b.qf(a);
            break;
        case "contextmenu":
            b.xd(a)
    }
};

function sg(a, b) {
    if (a.Qb)
        for (var c = a.C(); b && b !== c;) {
            var d = b.id;
            if (d in a.Qb) return a.Qb[d];
            b = b.parentNode
        }
    return null
}
g.Lg = function() {};
g.Kg = function() {
    this.Wc(-1);
    this.ad = !1;
    this.Fa && Vf(this.Fa, !1)
};
g.rb = function(a) {
    return this.isEnabled() && this.bc && (0 != af(this) || this.yf) && this.lf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.lf = function(a) {
    var b = bf(this, this.ya);
    if (b && "function" == typeof b.rb && b.rb(a) || this.Fa && this.Fa != b && "function" == typeof this.Fa.rb && this.Fa.rb(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.g) {
        case 27:
            if (this.Vc) pg(this).blur();
            else return !1;
            break;
        case 36:
            tg(this);
            break;
        case 35:
            ug(this);
            break;
        case 38:
            if (this.bd == og) vg(this);
            else return !1;
            break;
        case 37:
            if (this.bd == jg) cf(this) ? wg(this) : vg(this);
            else return !1;
            break;
        case 40:
            if (this.bd == og) wg(this);
            else return !1;
            break;
        case 39:
            if (this.bd ==
                jg) cf(this) ? vg(this) : wg(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function qg(a, b) {
    var c = b.C(),
        c = c.id || (c.id = Ve(b));
    a.Qb || (a.Qb = {});
    a.Qb[c] = b
}
g.md = function(a, b) {
    ng.v.md.call(this, a, b)
};
g.Oc = function(a, b, c) {
    a.Hc |= 2;
    a.Hc |= 64;
    a.fb(32, !1);
    a.Z && 0 != a.yd && Pf(a, !1);
    a.yd = !1;
    var d = a.getParent() == this ? ef(this, a) : -1;
    ng.v.Oc.call(this, a, b, c);
    a.Z && this.Z && qg(this, a);
    a = d; - 1 == a && (a = af(this));
    a == this.ya ? this.ya = Math.min(af(this) - 1, b) : a > this.ya && b <= this.ya ? this.ya++ : a < this.ya && b > this.ya && this.ya--
};
g.removeChild = function(a, b) {
    if (a = q(a) ? Ye(this, a) : a) {
        var c = ef(this, a); - 1 != c && (c == this.ya ? (a.pb(!1), this.ya = -1) : c < this.ya && this.ya--);
        var d = a.C();
        d && d.id && this.Qb && (c = this.Qb, d = d.id, d in c && delete c[d])
    }
    c = a = ng.v.removeChild.call(this, a, b);
    c.Z && 1 != c.yd && Pf(c, !0);
    c.yd = !0;
    return a
};
g.$ = function(a, b) {
    if (b || this.bc != a && Ed(this, a ? "show" : "hide")) {
        this.bc = a;
        var c = this.C();
        c && (Je(c, a), this.Vc && hg(pg(this), this.vc && this.bc), b || Ed(this, this.bc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return this.vc
};
g.Id = function(a) {
    this.vc != a && Ed(this, a ? "enable" : "disable") && (a ? (this.vc = !0, $e(this, function(a) {
        a.hh ? delete a.hh : a.Id(!0)
    })) : ($e(this, function(a) {
        a.isEnabled() ? a.Id(!1) : a.hh = !0
    }), this.ad = this.vc = !1), this.Vc && hg(pg(this), a && this.bc))
};

function xg(a, b) {
    b != a.Vc && a.Z && rg(a, b);
    a.Vc = b;
    a.vc && a.bc && hg(pg(a), b)
}
g.Wc = function(a) {
    (a = bf(this, a)) ? a.pb(!0): -1 < this.ya && bf(this, this.ya).pb(!1)
};

function tg(a) {
    yg(a, function(a, c) {
        return (a + 1) % c
    }, af(a) - 1)
}

function ug(a) {
    yg(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function wg(a) {
    yg(a, function(a, c) {
        return (a + 1) % c
    }, a.ya)
}

function vg(a) {
    yg(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.ya)
}

function yg(a, b, c) {
    c = 0 > c ? ef(a, a.Fa) : c;
    var d = af(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = bf(a, c);
        if (f && a.gg(f)) {
            a.Wc(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
}
g.gg = function(a) {
    return a.zb && a.isEnabled() && !!(a.Ba & 2)
};

function zg() {}
t(zg, tf);
ba(zg);
zg.prototype.ga = function() {
    return "goog-menuheader"
};

function Ag(a, b, c) {
    M.call(this, a, c || zg.Hb(), b);
    this.fb(1, !1);
    this.fb(2, !1);
    this.fb(4, !1);
    this.fb(32, !1);
    this.ea = 1
}
t(Ag, M);
mf("goog-menuheader", function() {
    return new Ag(null)
});

function Bg(a, b) {
    ng.call(this, og, b || mg.Hb(), a);
    xg(this, !1)
}
t(Bg, ng);
g = Bg.prototype;
g.Te = !0;
g.ga = function() {
    return this.ud.ga()
};

function Cg(a) {
    a.Te = !0;
    xg(a, !0)
}
g.$ = function(a, b, c) {
    (b = Bg.v.$.call(this, a, b)) && a && this.Z && this.Te && pg(this).focus();
    a && c && fa(c.clientX) ? this.h = new w(c.clientX, c.clientY) : this.h = null;
    return b
};
g.nf = function(a) {
    this.Te && pg(this).focus();
    return Bg.v.nf.call(this, a)
};
g.gg = function(a) {
    return a.isEnabled() && a.zb && !!(a.Ba & 2)
};
g.lf = function(a) {
    var b = Bg.v.lf.call(this, a);
    b || $e(this, function(c) {
        !b && c.ji && c.Tg == a.g && (this.isEnabled() && this.Wc(ef(this, c)), b = c.rb(a))
    }, this);
    return b
};
g.Wc = function(a) {
    Bg.v.Wc.call(this, a);
    if (a = bf(this, a)) {
        var b = a.C(),
            c = (a = this.C() || lc(document)) || lc(document),
            d = Ge(b),
            e = Ge(c),
            f;
        if (!u || 9 <= Number(Wb)) h = Ce(c, "borderLeftWidth"), f = Ce(c, "borderRightWidth"), l = Ce(c, "borderTopWidth"), m = Ce(c, "borderBottomWidth"), f = new ze(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(h));
        else {
            var h = Ne(c, "borderLeft");
            f = Ne(c, "borderRight");
            var l = Ne(c, "borderTop"),
                m = Ne(c, "borderBottom");
            f = new ze(l, f, m, h)
        }
        c == lc(document) ? (h = d.x - c.scrollLeft, d = d.y - c.scrollTop, !u || 10 <= Number(Wb) ||
            (h += f.left, d += f.top)) : (h = d.x - e.x - f.left, d = d.y - e.y - f.top);
        e = c.clientHeight - b.offsetHeight;
        f = c.scrollLeft;
        l = c.scrollTop;
        f += Math.min(h, Math.max(h - (c.clientWidth - b.offsetWidth), 0));
        l += Math.min(d, Math.max(d - e, 0));
        b = new w(f, l);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
var Eg = {
    ae: null,
    show: function(a, b, c) {
        Dg(Eg, c, null);
        if (b.length) {
            var d = new Bg;
            d.Uc(c);
            for (var e = 0, f; f = b[e]; e++) {
                var h = new fg(f.text);
                h.Uc(c);
                d.md(h, !0);
                h.Id(f.enabled);
                f.enabled && sd(h, "action", f.Ra)
            }
            sd(d, "action", Eg.Ub);
            b = kc();
            e = Ee();
            d.U(N);
            var l = d.C();
            Fg(l, "blocklyContextMenu");
            O(l, "contextmenu", null, Gg);
            f = He(l);
            var h = a.clientX + e.x,
                m = a.clientY + e.y;
            a.clientY + f.height >= b.height && (m -= f.height);
            c ? f.width >= a.clientX && (h += f.width) : a.clientX + f.width >= b.width && (h -= f.width);
            Hg(h, m, b, e, c);
            Cg(d);
            setTimeout(function() {
                    l.focus()
                },
                1);
            Eg.ae = null
        } else Eg.Ub()
    },
    Ub: function() {
        Ig(Eg);
        Eg.ae = null
    },
    jq: function(a, b) {
        return function() {
            I++;
            var c = he(b, a.w),
                d = a.oa();
            d.x = a.s ? d.x - ne : d.x + ne;
            d.y += 2 * ne;
            c.moveBy(d.x, d.y);
            I--;
            0 == I && !c.i && J(new Jg(c));
            c.select()
        }
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function Kg(a) {
    this.id = Lg();
    Mg[this.id] = this;
    this.options = a || {};
    this.s = !!this.options.s;
    this.dc = !!this.options.dc;
    this.aa = this.options.aa;
    this.j = [];
    this.F = [];
    this.u = [];
    this.H = [];
    this.Db = Object.create(null)
}
g = Kg.prototype;
g.O = !1;
g.B = function() {
    this.F.length = 0;
    this.clear();
    delete Mg[this.id]
};

function Ng(a, b) {
    for (var c = !1, d, e = 0; d = a.j[e]; e++)
        if (d == b) {
            a.j.splice(e, 1);
            c = !0;
            break
        }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
}

function Og(a, b) {
    var c = [].concat(a.j);
    if (b && 1 < c.length) {
        var d = Math.sin(3 * Math.PI / 180);
        a.s && (d *= -1);
        c.sort(function(a, b) {
            var c = a.oa(),
                l = b.oa();
            return c.y + d * c.x - (l.y + d * l.x)
        })
    }
    return c
}
g.Rb = function() {
    for (var a = Og(this, !1), b = 0; b < a.length; b++) a.push.apply(a, a[b].Zb());
    return a
};
g.clear = function() {
    var a = Sd;
    for (a || H(!0); this.j.length;) this.j[0].B();
    a || H(!1)
};
g.yb = function() {
    return 0
};
g.Vg = function(a, b) {
    return new Pg(this, a, b)
};

function Qg(a) {
    return isNaN(a.options.G) ? Infinity : a.options.G - a.Rb().length
}
g.Vf = function(a) {
    var b = a ? this.H : this.u,
        c = a ? this.u : this.H,
        d = b.pop();
    if (d) {
        for (var e = [d]; b.length && d.F && d.F == b[b.length - 1].F;) e.push(b.pop());
        for (b = 0; d = e[b]; b++) c.push(d);
        e = Rg(e, a);
        Rd = !1;
        for (b = 0; d = e[b]; b++) d.i(a);
        Rd = !0
    }
};
g.hg = function() {
    this.u.length = 0;
    for (var a = this.H.length = 0, b; b = Sg[a]; a++) b.Ef = !1
};
g.Pb = function(a) {
    this.F.push(a);
    return a
};
g.Fd = function(a) {
    a = this.F.indexOf(a); - 1 != a && this.F.splice(a, 1)
};
var Mg = Object.create(null);
Kg.prototype.clear = Kg.prototype.clear;
Kg.prototype.clearUndo = Kg.prototype.hg;
Kg.prototype.addChangeListener = Kg.prototype.Pb;
Kg.prototype.removeChangeListener = Kg.prototype.Fd;

function Tg(a) {
    var b = y("xml");
    a = Og(a, !0);
    for (var c = 0, d; d = a[c]; c++) b.appendChild(Ug(d));
    return b
}

function Ug(a) {
    var b;
    a.w.s && (b = a.w.yb());
    var c = Nd(a),
        d = a.oa();
    c.setAttribute("x", Math.round(a.w.s ? b - d.x : d.x));
    c.setAttribute("y", Math.round(d.y));
    return c
}

function Nd(a) {
    var b = y(a.i ? "shadow" : "block");
    b.setAttribute("type", a.type);
    b.setAttribute("id", a.id);
    if (a.bb) {
        var c = a.bb();
        c && (c.hasChildNodes() || c.hasAttributes()) && b.appendChild(c)
    }
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.za[e]; e++)
            if (f.name && f.Lc) {
                var h = y("field", null, f.Na());
                h.setAttribute("name", f.name);
                b.appendChild(h)
            }
    if (c = a.je()) c = y("comment", null, c), "object" == typeof a.ua && (c.setAttribute("pinned", !!a.ua.na), d = Vg(a.ua), c.setAttribute("h", d.height), c.setAttribute("w", d.width)), b.appendChild(c);
    a.data && (c = y("data", null, a.data), b.appendChild(c));
    for (c = 0; d = a.h[c]; c++) {
        var l;
        f = !0;
        5 != d.type && (h = G(d.I), 1 == d.type ? l = y("value") : 3 == d.type && (l = y("statement")), e = d.I.Jb, !e || h && h.i || l.appendChild(Wg(e)), h && (l.appendChild(Nd(h)), f = !1), l.setAttribute("name", d.name), f || b.appendChild(l))
    }
    a.Td != a.J && b.setAttribute("inline", a.J);
    a.j && b.setAttribute("collapsed", !0);
    a.disabled && b.setAttribute("disabled", !0);
    Xg(a) || a.i || b.setAttribute("deletable", !1);
    de(a) || a.i || b.setAttribute("movable", !1);
    Yg(a) || b.setAttribute("editable", !1);
    if (c = Pd(a)) l = y("next", null, Nd(c)), b.appendChild(l);
    e = a.g && a.g.Jb;
    !e || c && c.i || l.appendChild(Wg(e));
    return b
}

function Wg(a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && A(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && A(c))
        }
    return a
}

function Zg(a) {
    return (new XMLSerializer).serializeToString(a)
}

function $g(a) {
    return (new DOMParser).parseFromString(a, "text/xml").firstChild
}

function ah(a, b) {
    if (a instanceof Kg) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var d;
    b.s && (d = b.yb());
    bh();
    var c = a.childNodes.length,
        e = Sd;
    e || H(!0);
    for (var f = 0; f < c; f++) {
        var h = a.childNodes[f];
        if ("block" == h.nodeName.toLowerCase()) {
            var l = he(h, b),
                m = parseInt(h.getAttribute("x"), 10),
                h = parseInt(h.getAttribute("y"), 10);
            isNaN(m) || isNaN(h) || l.moveBy(b.s ? d - m : m, h)
        }
    }
    e || H(!1);
    ch()
}

function he(a, b) {
    if (a instanceof Kg) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    I++;
    var d = eh(a, b);
    if (b.O) {
        fh(d, !0);
        for (var c = d.Wa(), e = c.length - 1; 0 <= e; e--) c[e].xe();
        for (e = c.length - 1; 0 <= e; e--) c[e].U(!1);
        setTimeout(function() {
            d.w && fh(d, !1)
        }, 1);
        ye(d);
        gh(b)
    }
    I--;
    0 == I && J(new Jg(d));
    return d
}

function eh(a, b) {
    for (var c = null, d = a.getAttribute("type"), e = a.getAttribute("id"), c = b.Vg(d, e), f = null, e = 0, h; h = a.childNodes[e]; e++)
        if (3 != h.nodeType) {
            for (var l = f = null, m = 0, n; n = h.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? f = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !f && l && (f = l);
            m = h.getAttribute("name");
            switch (h.nodeName.toLowerCase()) {
                case "mutation":
                    c.Pa && (c.Pa(h), c.xe && c.xe());
                    break;
                case "comment":
                    c.Hd(h.textContent);
                    var p = h.getAttribute("pinned");
                    p && !c.A && setTimeout(function() {
                        c.ua &&
                            c.ua.$ && c.ua.$("true" == p)
                    }, 1);
                    f = parseInt(h.getAttribute("w"), 10);
                    h = parseInt(h.getAttribute("h"), 10);
                    !isNaN(f) && !isNaN(h) && c.ua && c.ua.$ && hh(c.ua, f, h);
                    break;
                case "data":
                    c.data = h.textContent;
                    break;
                case "title":
                case "field":
                    f = ih(c, m);
                    if (!f) {
                        console.warn("Ignoring non-existent field " + m + " in block " + d);
                        break
                    }
                    f.ra(h.textContent);
                    break;
                case "value":
                case "statement":
                    h = jh(c, m);
                    if (!h) {
                        console.warn("Ignoring non-existent input " + m + " in block " + d);
                        break
                    }
                    l && (h.I.Jb = l);
                    f && (f = eh(f, b), f.K ? h.I.connect(f.K) : f.N && h.I.connect(f.N));
                    break;
                case "next":
                    l && c.g && (c.g.Jb = l);
                    f && (f = eh(f, b), c.g.connect(f.N));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + h.nodeName)
            }
        }(d = a.getAttribute("inline")) && c.ed("true" == d);
    (d = a.getAttribute("disabled")) && c.dd("true" == d);
    if (d = a.getAttribute("deletable")) c.nc = "true" == d;
    (d = a.getAttribute("movable")) && c.Nf("true" == d);
    (d = a.getAttribute("editable")) && c.Mf("true" == d);
    (d = a.getAttribute("collapsed")) && c.Dc("true" == d);
    if ("shadow" == a.nodeName.toLowerCase()) {
        d = c.Zb();
        for (e = 0; d[e]; e++);
        c.Qf(!0)
    }
    c.Ud &&
        c.Ud();
    return c
}
k.Blockly || (k.Blockly = {});
k.Blockly.Xml || (k.Blockly.Xml = {});
k.Blockly.Xml.domToText = Zg;
k.Blockly.Xml.domToWorkspace = ah;
k.Blockly.Xml.textToDom = $g;
k.Blockly.Xml.workspaceToDom = Tg;

function kh(a, b, c, d, e, f) {
    this.o = a;
    this.u = b;
    this.A = c;
    c = lh;
    this.o.s && (c = -c);
    this.F = c * Math.PI / 180;
    a.i.appendChild(mh(this, b, !(!e || !f)));
    this.rc = d;
    this.Gd && nh(this);
    e && f || (b = this.u.getBBox(), e = b.width + 2 * oh, f = b.height + 2 * oh);
    ph(this, e, f);
    nh(this);
    qh(this);
    this.Gd = !0;
    a.options.i || (O(this.i, "mousedown", this, this.Uh), this.g && O(this.g, "mousedown", this, this.Oi))
}
var oh = 6,
    lh = 20,
    rh = null,
    sh = null;
g = kh.prototype;
g.If = null;

function th() {
    rh && (Q(rh), rh = null);
    sh && (Q(sh), sh = null)
}
g.Gd = !1;
g.rc = null;
g.Cc = 0;
g.Ed = 0;
g.V = 0;
g.kd = 0;
g.We = !0;

function mh(a, b, c) {
    a.h = L("g", {}, null);
    var d = {
        filter: "url(#" + a.o.options.W + ")"
    }; - 1 != nb.indexOf("JavaFX") && (d = {});
    d = L("g", d, a.h);
    a.j = L("path", {}, d);
    a.i = L("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: oh,
        ry: oh
    }, d);
    c ? (a.g = L("g", {
            "class": a.o.s ? "blocklyResizeSW" : "blocklyResizeSE"
        }, a.h), c = 2 * oh, L("polygon", {
            points: "0,x x,x x,0".replace(/x/g, c.toString())
        }, a.g), L("line", {
            "class": "blocklyResizeLine",
            x1: c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: c / 3
        }, a.g), L("line", {
            "class": "blocklyResizeLine",
            x1: 2 * c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: 2 * c / 3
        }, a.g)) :
        a.g = null;
    a.h.appendChild(b);
    return a.h
}
g.Uh = function(a) {
    uh(this);
    th();
    vh(a) ? a.stopPropagation() : wh(a) || (xh(yh), zh(this.o, a, new w(this.o.s ? -this.Cc : this.Cc, this.Ed)), rh = O(document, "mouseup", this, th), sh = O(document, "mousemove", this, this.Vh), Ah(), a.stopPropagation())
};
g.Vh = function(a) {
    this.We = !1;
    a = Bh(this.o, a);
    this.Cc = this.o.s ? -a.x : a.x;
    this.Ed = a.y;
    nh(this);
    qh(this)
};
g.Oi = function(a) {
    uh(this);
    th();
    vh(a) || (xh(yh), zh(this.o, a, new w(this.o.s ? -this.V : this.V, this.kd)), rh = O(document, "mouseup", this, th), sh = O(document, "mousemove", this, this.Pi), Ah());
    a.stopPropagation()
};
g.Pi = function(a) {
    this.We = !1;
    a = Bh(this.o, a);
    ph(this, this.o.s ? -a.x : a.x, a.y);
    this.o.s && nh(this)
};

function uh(a) {
    a.h.parentNode.appendChild(a.h)
}

function nh(a) {
    var b = a.rc.x,
        b = a.o.s ? b - (a.Cc + a.V) : b + a.Cc;
    a.h.setAttribute("transform", "translate(" + b + "," + (a.Ed + a.rc.y) + ")")
}

function Ch(a) {
    return {
        width: a.V,
        height: a.kd
    }
}

function ph(a, b, c) {
    var d = 2 * oh;
    b = Math.max(b, d + 45);
    c = Math.max(c, d + 20);
    a.V = b;
    a.kd = c;
    a.i.setAttribute("width", b);
    a.i.setAttribute("height", c);
    a.g && (a.o.s ? a.g.setAttribute("transform", "translate(" + 2 * oh + "," + (c - d) + ") scale(-1 1)") : a.g.setAttribute("transform", "translate(" + (b - d) + "," + (c - d) + ")"));
    if (a.Gd) {
        if (a.We) {
            b = -a.V / 4;
            c = -a.kd - 25;
            d = a.o.Ea();
            d.Y /= a.o.scale;
            d.Ca /= a.o.scale;
            var e = a.rc.x;
            a.o.s ? e - d.Ca - b - a.V < R ? b = e - d.Ca - a.V - R : e - d.Ca - b > d.Y && (b = e - d.Ca - d.Y) : e + b < d.Ca ? b = d.Ca - e : d.Ca + d.Y < e + b + a.V + 10 + R && (b = d.Ca + d.Y - e -
                a.V - R);
            a.rc.y + c < d.Kb && (c = a.A.getBBox().height);
            a.Cc = b;
            a.Ed = c
        }
        nh(a);
        qh(a)
    }
    a.If && a.If()
}

function qh(a) {
    var b = [],
        c = a.V / 2,
        d = a.kd / 2,
        e = -a.Cc,
        f = -a.Ed;
    if (c == e && d == f) b.push("M " + c + "," + d);
    else {
        f -= d;
        e -= c;
        a.o.s && (e *= -1);
        var h = Math.sqrt(f * f + e * e),
            l = Math.acos(e / h);
        0 > f && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            p = Math.cos(m),
            r = Ch(a),
            m = (r.width + r.height) / 10,
            m = Math.min(m, r.width, r.height) / 2,
            r = 1 - 8 / h,
            e = c + r * e,
            f = d + r * f,
            r = c + m * p,
            E = d + m * n,
            c = c - m * p,
            d = d - m * n,
            n = l + a.F;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * h / 4;
        h = Math.cos(n) * h / 4;
        b.push("M" + r + "," + E);
        b.push("C" + (r + h) + "," + (E + l) +
            " " + e + "," + f + " " + e + "," + f);
        b.push("C" + e + "," + f + " " + (c + h) + "," + (d + l) + " " + c + "," + d)
    }
    b.push("z");
    a.j.setAttribute("d", b.join(" "))
}
g.B = function() {
    th();
    A(this.h);
    this.A = this.u = this.o = this.g = this.i = this.j = this.h = null
};

function Dh(a) {
    this.o = a
}
g = Dh.prototype;
g.Oe = !1;
g.m = null;
g.Ie = null;
g.zf = 0;
g.gc = 0;
g.Lb = 0;
g.Md = 0;
g.P = function(a) {
    this.g = 20 + a;
    Eh(this, !1);
    return this.g + 60
};
g.B = function() {
    this.m && (A(this.m), this.m = null);
    this.o = this.Ie = null;
    k.clearTimeout(this.zf)
};
g.position = function() {
    var a = this.o.Ea();
    a && (this.o.s ? (this.Lb = 20 + R, 2 == a.aa && (this.Lb += a.ee, this.o.S && (this.Lb += a.Ia))) : (this.Lb = a.Y + a.Ia - 47 - 20 - R, 3 == a.aa && (this.Lb -= a.ee)), this.Md = a.wa + a.Ka - 60 - this.g, 1 == a.aa && (this.Md -= a.Gg), this.m.setAttribute("transform", "translate(" + this.Lb + "," + this.Md + ")"))
};
g.rd = function() {
    var a = this.m.getBoundingClientRect();
    return new Ae(a.left + 0 - 10, a.top + 32 - 10, 67, 80)
};

function Eh(a, b) {
    a.Oe != b && (k.clearTimeout(a.zf), a.Oe = b, a.Ve())
}
g.Ve = function() {
    this.gc += this.Oe ? .2 : -.2;
    this.gc = Math.min(Math.max(this.gc, 0), 1);
    var a = 45 * this.gc;
    this.Ie.setAttribute("transform", "rotate(" + (this.o.s ? -a : a) + "," + (this.o.s ? 4 : 43) + ",14)");
    this.m.style.opacity = .4 + .4 * this.gc;
    0 < this.gc && 1 > this.gc && (this.zf = Gd(this.Ve, 20, this))
};
g.close = function() {
    Eh(this, !1)
};
g.qh = function() {
    var a = this.o.Rf - this.o.scrollX,
        b = this.o.Sf - this.o.scrollY;
    Math.sqrt(a * a + b * b) > Fh || console.log("TODO: Inspect trash.")
};

function Gh(a) {
    this.o = a;
    this.h = new Hh(a, !0, !0);
    this.i = new Hh(a, !1, !0);
    this.j = L("rect", {
        height: R,
        width: R,
        "class": "blocklyScrollbarBackground"
    }, null);
    Ih(this.j, a.i)
}
Gh.prototype.g = null;
Gh.prototype.B = function() {
    A(this.j);
    this.g = this.o = this.j = null;
    this.h.B();
    this.h = null;
    this.i.B();
    this.i = null
};
Gh.prototype.resize = function() {
    var a = this.o.Ea();
    if (a) {
        var b = !1,
            c = !1;
        this.g && this.g.Y == a.Y && this.g.wa == a.wa && this.g.Ka == a.Ka && this.g.Ia == a.Ia ? (this.g && this.g.Ta == a.Ta && this.g.Ca == a.Ca && this.g.hb == a.hb || (b = !0), this.g && this.g.Sa == a.Sa && this.g.Kb == a.Kb && this.g.ib == a.ib || (c = !0)) : c = b = !0;
        b && this.h.resize(a);
        c && this.i.resize(a);
        this.g && this.g.Y == a.Y && this.g.Ia == a.Ia || this.j.setAttribute("x", this.i.H.x);
        this.g && this.g.wa == a.wa && this.g.Ka == a.Ka || this.j.setAttribute("y", this.h.H.y);
        this.g = a
    }
};
Gh.prototype.set = function(a, b) {
    var c = {},
        d = a * this.h.g,
        e = b * this.i.g,
        f = this.i.i;
    c.x = Jh(d, this.h.i);
    c.y = Jh(e, f);
    this.o.Ec(c);
    Kh(this.h, d);
    Kh(this.i, e)
};

function Jh(a, b) {
    var c = a / b;
    return isNaN(c) ? 0 : c
}

function Hh(a, b, c) {
    this.o = a;
    this.F = c || !1;
    this.A = b;
    this.L = null;
    this.m = L("g", {
        "class": "blocklyScrollbar" + (this.A ? "Horizontal" : "Vertical")
    }, null);
    this.h = L("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.m);
    a = Math.floor((R - 5) / 2);
    this.j = L("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.m);
    Ih(this.m, this.o.i);
    this.H = new w(0, 0);
    b ? (this.h.setAttribute("height", R), this.j.setAttribute("height", R - 5), this.j.setAttribute("y", 2.5), this.J = "width", this.Ha = "x") : (this.h.setAttribute("width", R), this.j.setAttribute("width",
        R - 5), this.j.setAttribute("x", 2.5), this.J = "height", this.Ha = "y");
    this.ba = O(this.h, "mousedown", this, this.Hi);
    this.sa = O(this.j, "mousedown", this, this.Ii)
}
var Lh, Mh;
Hh.prototype.i = 0;
Hh.prototype.u = 0;
Hh.prototype.G = 0;
Hh.prototype.W = !0;
var R = 15;
kd && (R = 25);
g = Hh.prototype;
g.B = function() {
    this.De();
    Q(this.ba);
    this.ba = null;
    Q(this.sa);
    this.sa = null;
    A(this.m);
    this.o = this.j = this.h = this.m = null
};

function Kh(a, b) {
    a.G = b;
    a.j.setAttribute(a.Ha, a.G)
}

function Nh(a, b, c) {
    a.H.x = b;
    a.H.y = c;
    a.m.setAttribute("transform", "translate(" + a.H.x + "," + a.H.y + ")")
}
g.resize = function(a) {
    if (!a && (a = this.o.Ea(), !a)) return;
    var b = this.L;
    if (!a || !b || a.Y != b.Y || a.wa != b.wa || a.Ca != b.Ca || a.Kb != b.Kb || a.Ka != b.Ka || a.Ia != b.Ia || a.Ta != b.Ta || a.Sa != b.Sa || a.hb != b.hb || a.ib != b.ib) {
        this.L = a;
        if (this.A) {
            b = a.Y - 1;
            this.F && (b -= R);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.J, this.i);
            b = a.Ia + .5;
            this.F && this.o.s && (b += R);
            Nh(this, b, a.Ka + a.wa - R - .5);
            this.F || this.$(this.i < a.Ta);
            this.g = this.i / a.Ta;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.u = Math.max(0, a.Y * this.g);
            this.j.setAttribute(this.J,
                this.u);
            Kh(this, Oh(this, (a.Ca - a.hb) * this.g))
        } else {
            b = a.wa - 1;
            this.F && (b -= R);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.J, this.i);
            b = a.Ia + .5;
            this.o.s || (b += a.Y - R - 1);
            Nh(this, b, a.Ka + .5);
            this.F || this.$(this.i < a.Sa);
            this.g = this.i / a.Sa;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.u = Math.max(0, a.wa * this.g);
            this.j.setAttribute(this.J, this.u);
            Kh(this, Oh(this, (a.Kb - a.ib) * this.g))
        }
        Ph(this)
    }
};
g.$ = function(a) {
    if (a != this.W) {
        if (this.F) throw "Unable to toggle visibility of paired scrollbars.";
        (this.W = a) ? this.m.setAttribute("display", "block"): (this.o.Ec({
            x: 0,
            y: 0
        }), this.m.setAttribute("display", "none"))
    }
};
g.Hi = function(a) {
    this.De();
    if (vh(a)) a.stopPropagation();
    else {
        var b = Qh(a, Rh(this.o)),
            b = this.A ? b.x : b.y,
            c = Sh(this.j, this.o),
            c = this.A ? c.x : c.y,
            d = this.G,
            e = .95 * this.u;
        b <= c ? d -= e : b >= c + this.u && (d += e);
        Kh(this, Oh(this, d));
        Ph(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
g.Ii = function(a) {
    this.De();
    vh(a) ? a.stopPropagation() : (this.Pa = this.G, this.bb = this.A ? a.clientX : a.clientY, Lh = O(document, "mouseup", this, this.De), Mh = O(document, "mousemove", this, this.Ki), a.stopPropagation(), a.preventDefault())
};
g.Ki = function(a) {
    Kh(this, Oh(this, this.Pa + ((this.A ? a.clientX : a.clientY) - this.bb)));
    Ph(this)
};
g.De = function() {
    Ah(!0);
    Lh && (Q(Lh), Lh = null);
    Mh && (Q(Mh), Mh = null)
};

function Oh(a, b) {
    return b = 0 >= b || isNaN(b) ? 0 : Math.min(b, a.i - a.u)
}

function Ph(a) {
    var b = a.G / a.i;
    isNaN(b) && (b = 0);
    var c = {};
    a.A ? c.x = b : c.y = b;
    a.o.Ec(c)
}
g.set = function(a) {
    Kh(this, Oh(this, a * this.g));
    Ph(this)
};

function Ih(a, b) {
    var c = b.nextSibling,
        d = b.parentNode;
    if (!d) throw "Reference node has no parent.";
    c ? d.insertBefore(a, c) : d.appendChild(a)
};

function Th() {}
Th.prototype = [];

function pe(a, b) {
    if (b.ec) throw "Connection already in database.";
    b.ma.A || (a.splice(Uh(a, b), 0, b), b.ec = !0)
}

function Vh(a, b) {
    if (!a.length) return -1;
    var c = Uh(a, b);
    if (c >= a.length) return -1;
    for (var d = b.qa, e = c; 0 <= e && a[e].qa == d;) {
        if (a[e] == b) return e;
        e--
    }
    for (; c < a.length && a[c].qa == d;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function Uh(a, b) {
    if (!a.length) return 0;
    for (var c = 0, d = a.length; c < d;) {
        var e = Math.floor((c + d) / 2);
        if (a[e].qa < b.qa) c = e + 1;
        else if (a[e].qa > b.qa) d = e;
        else {
            c = e;
            break
        }
    }
    return c
}

function Zd(a, b) {
    if (!b.ec) throw "Connection not in database.";
    var c = Vh(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.ec = !1;
    a.splice(c, 1)
}

function Wh(a, b) {
    var c = ne;

    function d(a) {
        var b = f - e[a].ab,
            d = h - e[a].qa;
        Math.sqrt(b * b + d * d) <= c && p.push(e[a]);
        return d < c
    }
    for (var e = a, f = b.ab, h = b.qa, l = 0, m = e.length - 2, n = m; l < n;) e[n].qa < h ? l = n : m = n, n = Math.floor((l + m) / 2);
    var p = [],
        m = l = n;
    if (e.length) {
        for (; 0 <= l && d(l);) l--;
        do m++; while (m < e.length && d(m))
    }
    return p
}

function Xh(a, b, c, d) {
    if (!a.length) return {
        I: null,
        Zg: c
    };
    var e = b.qa,
        f = b.ab;
    b.ab = f + d.x;
    b.qa = e + d.y;
    var h = Uh(a, b);
    d = null;
    for (var l = c, m, n = h - 1; 0 <= n && Math.abs(a[n].qa - b.qa) <= c;) m = a[n], b.ye(m, l) && (d = m, l = le(m, b)), n--;
    for (; h < a.length && Math.abs(a[h].qa - b.qa) <= c;) m = a[h], b.ye(m, l) && (d = m, l = le(m, b)), h++;
    b.ab = f;
    b.qa = e;
    return {
        I: d,
        Zg: l
    }
};
// Copyright 2015 Google Inc.  Apache License 2.0
function Yh(a) {
    this.o = a
}
g = Yh.prototype;
g.m = null;
g.Mb = 0;
g.Nd = 0;

function Zh(a) {
    var b = a.o;
    a.m = L("g", {
        "class": "blocklyZoom"
    }, null);
    var c = String(Math.random()).substring(2),
        d = L("clipPath", {
            id: "blocklyZoomoutClipPath" + c
        }, a.m);
    L("rect", {
        width: 32,
        height: 32,
        y: 77
    }, d);
    var e = L("image", {
        width: $h,
        height: ai,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + c + ")"
    }, a.m);
    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + bi);
    d = L("clipPath", {
        id: "blocklyZoominClipPath" + c
    }, a.m);
    L("rect", {
        width: 32,
        height: 32,
        y: 43
    }, d);
    var f = L("image", {
        width: $h,
        height: ai,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + c + ")"
    }, a.m);
    f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + bi);
    d = L("clipPath", {
        id: "blocklyZoomresetClipPath" + c
    }, a.m);
    L("rect", {
        width: 32,
        height: 32
    }, d);
    c = L("image", {
        width: $h,
        height: ai,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + c + ")"
    }, a.m);
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + bi);
    O(c, "mousedown", null, function(a) {
        ci(b, 1);
        if (b.Aa) {
            var c = b.Ea(),
                d = (c.Ta - c.Y) / 2;
            b.X && (d -= b.X.V / 2);
            b.Aa.set(d, (c.Sa - c.wa) / 2)
        }
        a.stopPropagation();
        a.preventDefault()
    });
    O(f, "mousedown", null, function(a) {
        di(b, 1);
        a.stopPropagation();
        a.preventDefault()
    });
    O(e, "mousedown", null, function(a) {
        di(b, -1);
        a.stopPropagation();
        a.preventDefault()
    });
    return a.m
}
g.P = function(a) {
    this.g = 20 + a;
    return this.g + 110
};
g.B = function() {
    this.m && (A(this.m), this.m = null);
    this.o = null
};
g.position = function() {
    var a = this.o.Ea();
    a && (this.o.s ? (this.Mb = 20 + R, 2 == a.aa && (this.Mb += a.ee, this.o.S && (this.Mb += a.Ia))) : (this.Mb = a.Y + a.Ia - 32 - 20 - R, 3 == a.aa && (this.Mb -= a.ee)), this.Nd = a.wa + a.Ka - 110 - this.g, 1 == a.aa && (this.Nd -= a.Gg), this.m.setAttribute("transform", "translate(" + this.Mb + "," + this.Nd + ")"))
};

function ei(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        d = !1,
        e = !1,
        f = !1,
        h = !1,
        l = !1,
        m = !1;
    else {
        var n = a.toolbox;
        n ? ("string" != typeof n && ("undefined" == typeof XSLTProcessor && n.outerHTML ? n = n.outerHTML : n instanceof Element || (n = null)), "string" == typeof n && (n = $g(n))) : n = null;
        c = n;
        d = !(!c || !c.getElementsByTagName("category").length);
        e = a.trashcan;
        void 0 === e && (e = d);
        f = a.collapse;
        void 0 === f && (f = d);
        h = a.comments;
        void 0 === h && (h = d);
        l = a.disable;
        void 0 === l && (l = d);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 ===
        p && (p = !1);
    var r = a.toolboxPosition,
        r = "end" === r ? !1 : !0,
        E = a.scrollbars;
    void 0 === E && (E = d);
    var z = a.css;
    void 0 === z && (z = !0);
    var x = "https://blockly-demo.appspot.com/static/media/";
    a.media ? x = a.media : a.path && (x = a.path + "media/");
    this.s = n;
    this.F = f;
    this.L = h;
    this.J = l;
    this.i = b;
    this.G = a.maxBlocks || Infinity;
    this.j = x;
    this.ba = d;
    this.H = E;
    this.Pa = e;
    this.Ha = m;
    this.sa = z;
    this.dc = p;
    this.A = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.kq = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.oq = 0 < c.spacing && !!b.snap;
    this.h = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.Xi = void 0 === a.wheel ? !1 : !!a.wheel;
    b.Ti = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Cd = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Dd = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Ri = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.g = b;
    this.aa = p ? r ? 0 : 1 : r == n ? 3 : 2
}
ei.prototype.Ib = null;
ei.prototype.Ec = function() {};
ei.prototype.Ea = function() {
    return null
};
// Copyright 2014 Google Inc.  Apache License 2.0
function fi(a) {
    fi.v.constructor.call(this, a);
    this.Ea = a.Ea;
    this.Ec = a.Ec;
    a = [];
    a[1] = new Th;
    a[2] = new Th;
    a[3] = new Th;
    a[4] = new Th;
    this.W = a;
    this.G = Object.create(null)
}
t(fi, Kg);
g = fi.prototype;
g.O = !0;
g.vf = !1;
g.wf = !1;
g.scrollX = 0;
g.scrollY = 0;
g.Rf = 0;
g.Sf = 0;
g.Dg = null;
g.scale = 1;
g.Ua = null;
g.Aa = null;
g.Sg = null;

function gi(a, b) {
    a.m = L("g", {
        "class": "blocklyWorkspace"
    }, null);
    b && (a.h = L("rect", {
        height: "100%",
        width: "100%",
        "class": b
    }, a.m), "blocklyMainBackground" == b && (a.h.style.fill = "url(#" + a.options.u.id + ")"));
    a.g = L("g", {
        "class": "blocklyBlockCanvas"
    }, a.m);
    a.i = L("g", {
        "class": "blocklyBubbleCanvas"
    }, a.m);
    var c = R;
    a.options.Pa && (c = hi(a, c));
    a.options.g && a.options.g.controls && (c = ii(a, c));
    O(a.m, "mousedown", a, a.jd);
    O(a.m, "touchstart", null, function(b) {
        ji(b, a)
    });
    a.options.g && a.options.g.Xi && O(a.m, "wheel", a, a.Li);
    a.options.ba ?
        a.S = new ki(a) : a.options.A && li(a);
    mi(a);
    return a.m
}
g.B = function() {
    this.O = !1;
    fi.v.B.call(this);
    this.m && (A(this.m), this.m = null);
    this.i = this.g = null;
    this.S && (this.S.B(), this.S = null);
    this.X && (this.X.B(), this.X = null);
    this.Ua && (this.Ua.B(), this.Ua = null);
    this.Aa && (this.Aa.B(), this.Aa = null);
    this.A && (this.A.B(), this.A = null);
    this.options.Ib || A(Rh(this))
};
g.Vg = function(a, b) {
    return new S(this, a, b)
};

function hi(a, b) {
    a.Ua = new Dh(a);
    var c = a.Ua;
    c.m = L("g", {
        "class": "blocklyTrash"
    }, null);
    var d = String(Math.random()).substring(2),
        e = L("clipPath", {
            id: "blocklyTrashBodyClipPath" + d
        }, c.m);
    L("rect", {
        width: 47,
        height: 44,
        y: 16
    }, e);
    L("image", {
        width: $h,
        x: -0,
        height: ai,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath" + d + ")"
    }, c.m).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.o.options.j + bi);
    e = L("clipPath", {
        id: "blocklyTrashLidClipPath" + d
    }, c.m);
    L("rect", {
        width: 47,
        height: 16
    }, e);
    c.Ie = L("image", {
        width: $h,
        x: -0,
        height: ai,
        y: -32,
        "clip-path": "url(#blocklyTrashLidClipPath" + d + ")"
    }, c.m);
    c.Ie.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.o.options.j + bi);
    O(c.m, "mouseup", c, c.qh);
    c.Ve();
    a.m.insertBefore(c.m, a.g);
    return a.Ua.P(b)
}

function ii(a, b) {
    a.A = new Yh(a);
    var c = Zh(a.A);
    a.m.appendChild(c);
    return a.A.P(b)
}

function li(a) {
    a.X = new ni({
        pd: a.options.pd,
        Ib: a,
        s: a.s,
        dc: a.dc,
        aa: a.options.aa
    });
    a.X.nd = !1;
    var b = oi(a.X);
    a.m.insertBefore(b, a.g)
}

function gh(a) {
    a.Aa && a.Aa.resize()
}
g.resize = function() {
    this.S && this.S.position();
    this.X && this.X.position();
    this.Ua && this.Ua.position();
    this.A && this.A.position();
    this.Aa && this.Aa.resize()
};

function Rh(a) {
    if (a.Ha) return a.Ha;
    for (var b = a.m; b;) {
        if ("svg" == b.tagName) return a.Ha = b;
        b = b.parentNode
    }
    return null
}
g.translate = function(a, b) {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.g.setAttribute("transform", c);
    this.i.setAttribute("transform", c)
};
g.yb = function() {
    var a = this.Ea();
    return a ? a.Y / this.scale : 0
};
g.$ = function(a) {
    Rh(this).style.display = a ? "block" : "none";
    this.S && (this.S.Nb.style.display = a ? "block" : "none");
    a ? (this.U(), this.S && this.S.position()) : Ah(!0)
};
g.U = function() {
    for (var a = this.Rb(), b = a.length - 1; 0 <= b; b--) a[b].U(!1)
};

function pi(a, b) {
    a.Uf = b;
    a.sa && (Q(a.sa), a.sa = null);
    b && (a.sa = O(a.g, "blocklySelectChange", a, function() {
        this.Uf = !1
    }))
}

function qi(a) {
    var b = T;
    b.Uf && 0 != K && pi(b, !1);
    if (b.Uf) {
        var c = null;
        if (a && (c = b.Db[a] || null, !c)) return;
        pi(b, !1);
        c ? c.select() : U && ri(U);
        setTimeout(function() {
            pi(b, !0)
        }, 1)
    }
}

function si(a) {
    var b = ti;
    if (a.O && !(b.getElementsByTagName("block").length >= Qg(a))) {
        ui();
        I++;
        var c = he(b, a),
            d = parseInt(b.getAttribute("x"), 10),
            b = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(d) && !isNaN(b)) {
            a.s && (d = -d);
            do {
                for (var e = !1, f = a.Rb(), h = 0, l; l = f[h]; h++)
                    if (l = l.oa(), 1 >= Math.abs(d - l.x) && 1 >= Math.abs(b - l.y)) {
                        e = !0;
                        break
                    }
                if (!e)
                    for (f = c.Gb(!1), h = 0; l = f[h]; h++)
                        if (Xh(l.od, l, ne, new w(d, b)).I) {
                            e = !0;
                            break
                        }
                e && (d = a.s ? d - ne : d + ne, b += 2 * ne)
            } while (e);
            c.moveBy(d, b)
        }
        I--;
        0 == I && !c.i && J(new Jg(c));
        c.select()
    }
}

function vi(a, b) {
    var c = new w(b.clientX, b.clientY);
    if (a.ba) {
        if (a.ba.contains(c)) return Eh(a.Ua, !0), xh(wi), !0;
        Eh(a.Ua, !1)
    }
    if (a.J && a.J.contains(c)) return xh(wi), !0;
    xh(yh);
    return !1
}
g.jd = function(a) {
    this.$c();
    wh(a) || (ui(), Ah(), a.target && a.target.nodeName && ("svg" == a.target.nodeName.toLowerCase() || a.target == this.h) && U && !this.options.i && ri(U), vh(a) ? xi(this, a) : this.Aa && (this.wf = !0, this.bb = a.clientX, this.Qa = a.clientY, this.Pa = this.Ea(), this.Rf = this.scrollX, this.Sf = this.scrollY, "mouseup" in yi && (zi = zi || [], zi = zi.concat(O(document, "mouseup", null, Ai))), Id = Id || [], Id = Id.concat(O(document, "mousemove", null, Bi))), a.stopPropagation(), a.preventDefault())
};

function zh(a, b, c) {
    b = Qh(b, Rh(a));
    b.x /= a.scale;
    b.y /= a.scale;
    a.Dg = dc(c, b)
}

function Bh(a, b) {
    var c = Qh(b, Rh(a));
    c.x /= a.scale;
    c.y /= a.scale;
    var d = a.Dg;
    return new w(d.x + c.x, d.y + c.y)
}
g.Li = function(a) {
    ui();
    var b = 0 < a.deltaY ? -1 : 1,
        c = Qh(a, Rh(this));
    Ci(this, c.x, c.y, b);
    a.preventDefault()
};
g.Xh = function() {
    H(!0);
    for (var a = Og(this, !0), b = 0, c = 0, d; d = a[c]; c++) {
        var e = d.oa();
        d.moveBy(-e.x, b - e.y);
        Di(d);
        b = d.oa().y + Ei(d).height + 25
    }
    H(!1);
    gh(this)
};

function xi(a, b) {
    function c(a) {
        if (Xg(a)) E = E.concat(a.Wa());
        else {
            a = a.Zb();
            for (var b = 0; b < a.length; b++) c(a[b])
        }
    }

    function d() {
        H(h);
        var a = E.shift();
        a && (a.w ? (a.B(!1, !0), setTimeout(d, 10)) : d());
        H(!1)
    }
    if (!a.options.i && !a.vf) {
        var e = [],
            f = Og(a, !0),
            h = Lg(),
            l = {};
        l.text = V.Rh;
        l.enabled = 0 < a.u.length;
        l.Ra = a.Vf.bind(a, !1);
        e.push(l);
        l = {};
        l.text = V.Oh;
        l.enabled = 0 < a.H.length;
        l.Ra = a.Vf.bind(a, !0);
        e.push(l);
        a.Aa && (l = {}, l.text = V.sh, l.enabled = 1 < f.length, l.Ra = a.Xh.bind(a), e.push(l));
        if (a.options.F) {
            for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p =
                        f[n]; p;) p.j ? l = !0 : m = !0, p = Pd(p);
            var r = function(a) {
                    for (var b = 0, c = 0; c < f.length; c++)
                        for (var d = f[c]; d;) setTimeout(d.Dc.bind(d, a), b), d = Pd(d), b += 10
                },
                m = {
                    enabled: m
                };
            m.text = V.uh;
            m.Ra = function() {
                r(!0)
            };
            e.push(m);
            l = {
                enabled: l
            };
            l.text = V.Dh;
            l.Ra = function() {
                r(!1)
            };
            e.push(l)
        }
        for (var E = [], n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == E.length ? V.Xf : V.Yf.replace("%1", String(E.length)),
            enabled: 0 < E.length,
            Ra: function() {
                (2 > E.length || window.confirm(V.zh.replace("%1", String(E.length)))) && d()
            }
        };
        e.push(l);
        Eg.show(b, e, a.s)
    }
}

function Fi(a, b, c) {
    if (b.length) {
        try {
            var d = new window.Audio
        } catch (m) {
            return
        }
        for (var e, f = 0; f < b.length; f++) {
            var h = b[f],
                l = h.match(/\.(\w+)$/);
            if (l && d.canPlayType("audio/" + l[1])) {
                e = new window.Audio(h);
                break
            }
        }
        e && e.play && (a.G[c] = e)
    }
}

function Gi(a, b, c) {
    var d = a.G[b];
    d ? (b = new Date, b - a.Sg < Hi || (a.Sg = b, a = Wb && 9 === Wb || Nb || Lb ? d : d.cloneNode(), a.volume = void 0 === c ? 1 : c, a.play())) : a.options.Ib && Gi(a.options.Ib, b, c)
}
g.$c = function() {
    this.options.Ib ? this.options.Ib.$c() : Ii = this
};

function Ci(a, b, c, d) {
    var e = a.options.g.Ri,
        f = a.Ea(),
        h = Rh(a).createSVGPoint();
    h.x = b;
    h.y = c;
    h = h.matrixTransform(a.g.getCTM().inverse());
    b = h.x;
    c = h.y;
    h = a.g;
    e = 1 == d ? e : 1 / e;
    d = a.scale * e;
    d > a.options.g.Cd ? e = a.options.g.Cd / a.scale : d < a.options.g.Dd && (e = a.options.g.Dd / a.scale);
    a.scale != d && (a.Aa && (b = h.getCTM().translate(b * (1 - e), c * (1 - e)).scale(e), a.scrollX = b.e - f.Ia, a.scrollY = b.f - f.Ka), ci(a, d))
}

function di(a, b) {
    var c = a.Ea();
    Ci(a, c.Y / 2, c.wa / 2, b)
}

function ci(a, b) {
    a.options.g.Cd && b > a.options.g.Cd ? b = a.options.g.Cd : a.options.g.Dd && b < a.options.g.Dd && (b = a.options.g.Dd);
    a.scale = b;
    mi(a);
    a.Aa ? a.Aa.resize() : a.translate(a.scrollX, a.scrollY);
    Ah(!1);
    a.X && a.X.Gf()
}

function mi(a) {
    if (a.options.u) {
        var b = a.options.h.spacing * a.scale || 100;
        a.options.u.setAttribute("width", b);
        a.options.u.setAttribute("height", b);
        var b = Math.floor(a.options.h.spacing / 2) + .5,
            c = b - a.options.h.length / 2,
            d = b + a.options.h.length / 2,
            e = a.options.u.firstChild,
            f = e && e.nextSibling,
            b = b * a.scale,
            c = c * a.scale,
            d = d * a.scale;
        e && (e.setAttribute("stroke-width", a.scale), e.setAttribute("x1", c), e.setAttribute("y1", b), e.setAttribute("x2", d), e.setAttribute("y2", b));
        f && (f.setAttribute("stroke-width", a.scale), f.setAttribute("x1",
            b), f.setAttribute("y1", c), f.setAttribute("x2", b), f.setAttribute("y2", d))
    }
}
fi.prototype.setVisible = fi.prototype.$;
// Copyright 2013 Google Inc.  Apache License 2.0
function Ji(a) {
    this.xa = a
}
g = Ji.prototype;
g.ig = !0;
g.na = null;
g.Zc = null;

function Ki(a) {
    a.g || (a.g = L("g", {
        "class": "blocklyIconGroup"
    }, null), a.Eg(a.g), a.xa.m.appendChild(a.g), O(a.g, "mouseup", a, a.Ai), a.Jc())
}
g.B = function() {
    A(this.g);
    this.g = null;
    this.$(!1);
    this.xa = null
};
g.Jc = function() {
    this.xa.A || !Yg(this.xa) ? Fg(this.g, "blocklyIconGroupReadonly") : Li(this.g, "blocklyIconGroupReadonly")
};
g.Ai = function(a) {
    2 != K && (this.xa.A || vh(a) || this.$(!this.na))
};
g.kc = function() {
    if (this.na) {
        var a = this.na,
            b = this.xa.Fb;
        a.i.setAttribute("fill", b);
        a.j.setAttribute("fill", b)
    }
};

function Mi(a) {
    var b = a.xa.oa(),
        c = te(a.g),
        b = new w(b.x + c.x + 8.5, b.y + c.y + 8.5);
    cc(a.Zc, b) || (a.Zc = b, a.na && (a = a.na, a.rc = b, a.Gd && nh(a)))
};
k.Blockly || (k.Blockly = {});
k.Blockly.Mutator || (k.Blockly.Mutator = {});
k.Blockly.Mutator.reconnect = function(a, b, c) {
    if (!a || !a.ma.w) return !1;
    c = jh(b, c).I;
    var d = G(a);
    return d && d != b || c.M == a ? !1 : (c.M && Md(c), c.connect(a), !0)
};
var Ni = {};

function Oi(a) {
    Oi.v.constructor.call(this, a);
    Ki(this)
}
t(Oi, Ji);
g = Oi.prototype;
g.ha = "";
g.V = 160;
g.Ke = 80;
g.Eg = function(a) {
    L("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    L("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.405 0.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25 -1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    L("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};

function Pi(a) {
    a.i = L("foreignObject", {
        x: oh,
        y: oh
    }, null);
    var b = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    b.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    b.className = "blocklyMinimalBody";
    var c = document.createElementNS("http://www.w3.org/1999/xhtml", "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", a.xa.s ? "RTL" : "LTR");
    b.appendChild(c);
    a.h = c;
    a.i.appendChild(b);
    O(c, "mouseup", a, a.Wi);
    O(c, "wheel", a, function(a) {
        a.stopPropagation()
    });
    O(c, "change", a, function() {
        this.ha !=
            c.value && (J(new Qi(this.xa, "comment", null, this.ha, c.value)), this.ha = c.value)
    });
    setTimeout(function() {
        c.focus()
    }, 0);
    return a.i
}
g.Jc = function() {
    this.na && (this.$(!1), this.$(!0));
    Ji.prototype.Jc.call(this)
};
g.lh = function() {
    if (this.na) {
        var a = Ch(this.na),
            b = 2 * oh;
        this.i.setAttribute("width", a.width - b);
        this.i.setAttribute("height", a.height - b);
        this.h.style.width = a.width - b - 4 + "px";
        this.h.style.height = a.height - b - 4 + "px"
    }
};
g.$ = function(a) {
    if (a != !!this.na)
        if (J(new Ri(this.xa, "commentOpen", 0, a)), !Yg(this.xa) && !this.h || u) Si.prototype.$.call(this, a);
        else {
            var b = this.h ? this.h.value : this.ha,
                c = Vg(this);
            a ? (this.na = new kh(this.xa.w, Pi(this), this.xa.G, this.Zc, this.V, this.Ke), this.na.If = this.lh.bind(this), this.kc()) : (this.na.B(), this.i = this.h = this.na = null);
            Ti(this, b);
            hh(this, c.width, c.height)
        }
};
g.Wi = function() {
    uh(this.na);
    this.h.focus()
};

function Vg(a) {
    return a.na ? Ch(a.na) : {
        width: a.V,
        height: a.Ke
    }
}

function hh(a, b, c) {
    a.h ? ph(a.na, b, c) : (a.V = b, a.Ke = c)
}

function Ti(a, b) {
    a.ha != b && (J(new Qi(a.xa, "comment", null, a.ha, b)), a.ha = b);
    a.h && (a.h.value = b)
}
g.B = function() {
    0 == I && Ti(this, "");
    this.xa.ua = null;
    Ji.prototype.B.call(this)
};
var Ui = !1,
    Vi = 0,
    Wi = 0,
    Xi = 0,
    Yi = 0,
    Zi = null,
    $i = null,
    aj = null;

function bj(a) {
    O(a, "mouseover", null, cj);
    O(a, "mouseout", null, dj);
    O(a, "mousemove", null, ej)
}

function cj(a) {
    for (a = a.target; !q(a.$a) && !ga(a.$a);) a = a.$a;
    Zi != a && (fj(), $i = null, Zi = a);
    clearTimeout(Vi)
}

function dj() {
    Vi = setTimeout(function() {
        $i = Zi = null;
        fj()
    }, 1);
    clearTimeout(Wi)
}

function ej(a) {
    if (Zi && Zi.$a && 0 == K && !gj)
        if (Ui) {
            var b = Xi - a.pageX;
            a = Yi - a.pageY;
            10 < Math.sqrt(b * b + a * a) && fj()
        } else $i != Zi && (clearTimeout(Wi), Xi = a.pageX, Yi = a.pageY, Wi = setTimeout(hj, 750))
}

function fj() {
    Ui && (Ui = !1, aj && (aj.style.display = "none"));
    clearTimeout(Wi)
}

function hj() {
    $i = Zi;
    if (aj) {
        pc(aj);
        for (var a = Zi.$a; ga(a);) a = a();
        var b = a,
            a = 50;
        if (b.length <= a) a = b;
        else {
            for (var c = b.trim().split(/\s+/), d = 0; d < c.length; d++) c[d].length > a && (a = c[d].length);
            var e, d = -Infinity,
                f, h = 1;
            do {
                e = d;
                f = b;
                for (var b = [], l = c.length / h, m = 1, d = 0; d < c.length - 1; d++) m < (d + 1.5) / l ? (m++, b[d] = !0) : b[d] = !1;
                for (var b = ij(c, b, a), d = jj(c, b, a), l = c, m = [], n = 0; n < l.length; n++) m.push(l[n]), void 0 !== b[n] && m.push(b[n] ? "\n" : " ");
                b = m.join("");
                h++
            } while (d > e);
            a = f
        }
        a = a.split("\n");
        for (c = 0; c < a.length; c++) e = document.createElement("div"),
            e.appendChild(document.createTextNode(a[c])), aj.appendChild(e);
        a = Zi.s;
        c = kc();
        aj.style.direction = a ? "rtl" : "ltr";
        aj.style.display = "block";
        Ui = !0;
        e = Xi;
        e = a ? e - (0 + aj.offsetWidth) : e + 0;
        f = Yi + 10;
        f + aj.offsetHeight > c.height + window.scrollY && (f -= aj.offsetHeight + 20);
        a ? e = Math.max(5 - window.scrollX, e) : e + aj.offsetWidth > c.width + window.scrollX - 10 && (e = c.width - aj.offsetWidth - 10);
        aj.style.top = f + "px";
        aj.style.left = e + "px"
    }
}

function jj(a, b, c) {
    for (var d = [0], e = [], f = 0; f < a.length; f++) d[d.length - 1] += a[f].length, !0 === b[f] ? (d.push(0), e.push(a[f].charAt(a[f].length - 1))) : !1 === b[f] && d[d.length - 1]++;
    a = Math.max.apply(Math, d);
    for (f = b = 0; f < d.length; f++) b -= 2 * Math.pow(Math.abs(c - d[f]), 1.5), b -= Math.pow(a - d[f], 1.5), -1 != ".?!".indexOf(e[f]) ? b += c / 3 : -1 != ",;)]}".indexOf(e[f]) && (b += c / 4);
    1 < d.length && d[d.length - 1] <= d[d.length - 2] && (b += .5);
    return b
}

function ij(a, b, c) {
    for (var d = jj(a, b, c), e, f = 0; f < b.length - 1; f++)
        if (b[f] != b[f + 1]) {
            var h = [].concat(b);
            h[f] = !h[f];
            h[f + 1] = !h[f + 1];
            var l = jj(a, h, c);
            l > d && (d = l, e = h)
        }
    return e ? ij(a, e, c) : b
};

function kj(a, b) {
    this.u = new Yb(0, 25);
    this.ra(a);
    this.Jd(b)
}
var lj = null,
    mj = 0;
g = kj.prototype;
g.name = void 0;
g.ha = "";
g.D = null;
g.Kc = !0;
g.Oa = null;
g.Lc = !0;
g.P = function() {
    this.g || (this.g = L("g", {}, null), this.Kc || (this.g.style.display = "none"), this.j = L("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.g), this.h = L("text", {
        "class": "blocklyText",
        y: this.u.height - 12.5
    }, this.g), this.Jc(), this.D.m.appendChild(this.g), this.G = O(this.g, "mouseup", this, this.mh), nj(this), 0 == I && J(new Qi(this.D, "field", this.name, "", this.Na())))
};
g.B = function() {
    this.G && (Q(this.G), this.G = null);
    this.D = null;
    A(this.g);
    this.Oa = this.j = this.h = this.g = null
};
g.Jc = function() {
    this.Lc && this.D && (Yg(this.D) ? (Fg(this.g, "blocklyEditableText"), Li(this.g, "blocklyNoNEditableText"), this.g.style.cursor = this.Pd) : (Fg(this.g, "blocklyNonEditableText"), Li(this.g, "blocklyEditableText"), this.g.style.cursor = ""))
};
g.$ = function(a) {
    if (this.Kc != a) {
        this.Kc = a;
        var b = this.Le();
        b && (b.style.display = a ? "block" : "none", this.Me())
    }
};
g.Jd = function(a) {
    this.Oa = a
};
g.Le = function() {
    return this.g
};
g.Me = function() {
    if (this.Kc && this.h) {
        var a = this.h.textContent + "\n" + this.h.className.baseVal;
        if (lj && lj[a]) var b = lj[a];
        else {
            try {
                b = this.h.getComputedTextLength()
            } catch (c) {
                b = 8 * this.h.textContent.length
            }
            lj && (lj[a] = b)
        }
        this.j && this.j.setAttribute("width", b + 10)
    } else b = 0;
    this.u.width = b
};

function bh() {
    mj++;
    lj || (lj = {})
}

function ch() {
    mj--;
    mj || (lj = null)
}

function oj(a) {
    var b = a.j.getBBox();
    return new Yb(b.width * a.D.w.scale, b.height * a.D.w.scale)
}
g.mc = function() {
    return this.ha
};
g.wb = function(a) {
    null !== a && (a = String(a), a !== this.ha && (this.ha = a, nj(this), this.D && this.D.O && (this.D.U(), ke(this.D))))
};

function nj(a) {
    if (a.h) {
        var b = a.ha;
        50 < b.length && (b = b.substring(0, 48) + "\u2026");
        pc(a.h);
        b = b.replace(/\s/g, "\u00a0");
        a.D.s && b && (b += "\u200f");
        b || (b = "\u00a0");
        a.h.appendChild(document.createTextNode(b));
        a.u.width = 0
    }
}
g.Na = function() {
    return this.mc()
};
g.ra = function(a) {
    if (null !== a) {
        var b = this.Na();
        b != a && (this.D && 0 == I && J(new Qi(this.D, "field", this.name, b, a)), this.wb(a))
    }
};
g.mh = function(a) {
    if (!Mb && !Nb || Ub("537.51.2") || 0 === a.layerX || 0 === a.layerY) vh(a) || 2 != K && Yg(this.D) && this.Gc()
};

function pj(a, b) {
    this.u = new Yb(0, 17.5);
    this.i = b;
    this.ra(a)
}
t(pj, kj);
pj.prototype.Lc = !1;
pj.prototype.P = function() {
    this.h || (this.h = L("text", {
        "class": "blocklyText",
        y: this.u.height - 5
    }, null), this.i && Fg(this.h, this.i), this.Kc || (this.h.style.display = "none"), this.D.m.appendChild(this.h), this.h.$a = this.D, bj(this.h), nj(this))
};
pj.prototype.B = function() {
    A(this.h);
    this.h = null
};
pj.prototype.Le = function() {
    return this.h
};

function qj(a, b, c, d) {
    this.type = a;
    this.name = b;
    this.g = c;
    this.I = d;
    this.za = []
}
g = qj.prototype;
g.align = -1;
g.Ne = !0;

function rj(a, b, c) {
    if (!b && !c) return a;
    q(b) && (b = new pj(b));
    b.D = a.g;
    a.g.O && b.P();
    b.name = c;
    b.J && rj(a, b.J);
    a.za.push(b);
    b.L && rj(a, b.L);
    a.g.O && (a.g.U(), ke(a.g));
    return a
}
g.$ = function(a) {
    var b = [];
    if (this.Ne == a) return b;
    for (var c = (this.Ne = a) ? "block" : "none", d = 0, e; e = this.za[d]; d++) e.$(a);
    if (this.I) {
        if (a) b = ve(this.I);
        else if (d = this.I, we(d, !0), d.M)
            for (d = G(d).Wa(), e = 0; e < d.length; e++) {
                for (var f = d[e], h = f.Gb(!0), l = 0; l < h.length; l++) we(h[l], !0);
                f = sj(f);
                for (h = 0; h < f.length; h++) f[h].$(!1)
            }
        if (d = G(this.I)) d.m.style.display = c, a || (d.O = !1)
    }
    return b
};
g.P = function() {
    if (this.g.w.O)
        for (var a = 0; a < this.za.length; a++) this.za[a].P()
};
g.B = function() {
    for (var a = 0, b; b = this.za[a]; a++) b.B();
    this.I && this.I.B();
    this.g = null
};

function Si(a) {
    Si.v.constructor.call(this, a);
    Ki(this);
    this.ha = {}
}
t(Si, Ji);
Si.prototype.ig = !1;
Si.prototype.Eg = function(a) {
    L("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    L("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    L("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
Si.prototype.$ = function(a) {
    if (a != !!this.na)
        if (J(new Ri(this.xa, "warningOpen", 0, a)), a) {
            var b = tj(this);
            a = L("text", {
                "class": "blocklyText blocklyBubbleText",
                y: oh
            }, null);
            for (var b = b.split("\n"), c = 0; c < b.length; c++) L("tspan", {
                dy: "1em",
                x: oh
            }, a).appendChild(document.createTextNode(b[c]));
            this.na = new kh(this.xa.w, a, this.xa.G, this.Zc, null, null);
            if (this.xa.s)
                for (var b = a.getBBox().width, c = 0, d; d = a.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", b + oh);
            this.kc();
            a = Ch(this.na);
            ph(this.na,
                a.width, a.height)
        } else this.na.B(), this.na = null
};

function uj(a, b, c) {
    a.ha[c] != b && (b ? a.ha[c] = b : delete a.ha[c], a.na && (a.$(!1), a.$(!0)))
}

function tj(a) {
    var b = [],
        c;
    for (c in a.ha) b.push(a.ha[c]);
    return b.join("\n")
}
Si.prototype.B = function() {
    this.xa.gb = null;
    Ji.prototype.B.call(this)
};

function Pg(a, b, c) {
    this.id = c && !a.Db[c] ? c : Lg();
    a.Db[this.id] = this;
    this.N = this.g = this.K = null;
    this.h = [];
    this.J = void 0;
    this.disabled = !1;
    this.$a = "";
    this.H = null;
    this.F = [];
    this.pc = this.qc = this.nc = !0;
    this.j = this.i = !1;
    this.ua = null;
    this.Mc = new w(0, 0);
    this.w = a;
    this.A = a.vf;
    this.s = a.s;
    if (b) {
        this.type = b;
        b = Ni[b];
        for (var d in b) this[d] = b[d]
    }
    a.j.push(this);
    ga(this.P) && this.P();
    this.Td = this.J;
    0 == I && J(new Jg(this));
    ga(this.onchange) && (this.Qa = this.onchange.bind(this), this.w.Pb(this.Qa))
}
g = Pg.prototype;
g.data = null;
g.Fb = "#000000";
g.B = function(a) {
    this.Qa && this.w.Fd(this.Qa);
    je(this, a);
    0 == I && J(new vj(this));
    I++;
    this.w && (Ng(this.w, this), delete this.w.Db[this.id], this.w = null);
    for (a = this.F.length - 1; 0 <= a; a--) this.F[a].B(!1);
    a = 0;
    for (var b; b = this.h[a]; a++) b.B();
    this.h.length = 0;
    b = this.Gb(!0);
    for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.M && Md(c);
        b[a].B()
    }
    I--
};

function je(a, b) {
    if (a.K) a.K.M && Md(a.K);
    else if (a.N) {
        var c = null;
        a.N.M && (c = a.N.M, Md(a.N));
        var d = Pd(a);
        b && d && (d = a.g.M, Md(d), c && Qd(c, d) && c.connect(d))
    }
}
g.Gb = function() {
    var a = [];
    this.K && a.push(this.K);
    this.N && a.push(this.N);
    this.g && a.push(this.g);
    for (var b = 0, c; c = this.h[b]; b++) c.I && a.push(c.I);
    return a
};

function ke(a) {
    if (a.w && 0 == K) {
        var b = me(a);
        if (!b.A) {
            a = a.Gb(!1);
            for (var c = 0, d; d = a[c]; c++) {
                d.M && be(d) && ke(G(d));
                var e;
                e = Wh(d.od, d);
                for (var f = 0, h; h = e[f]; f++) d.M && h.M || me(h.ma) != b && (be(d) ? Td(h, d) : Td(d, h))
            }
        }
    }
}
g.getParent = function() {
    return this.H
};

function wj(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (Pd(a) == b);
    return a
}

function Pd(a) {
    return a.g && G(a.g)
}

function me(a) {
    var b = a;
    do a = b, b = a.H; while (b);
    return a
}
g.Zb = function() {
    return this.F
};
g.Ld = function(a) {
    if (a != this.H) {
        if (this.H) {
            for (var b = this.H.F, c, d = 0; c = b[d]; d++)
                if (c == this) {
                    b.splice(d, 1);
                    break
                }
            if (this.N && this.N.M) throw "Still connected to previous block.";
            if (this.K && this.K.M) throw "Still connected to parent block.";
            this.H = null
        } else Ng(this.w, this);
        (this.H = a) ? a.F.push(this): this.w.j.push(this)
    }
};
g.Wa = function() {
    for (var a = [this], b, c = 0; b = this.F[c]; c++) a.push.apply(a, b.Wa());
    return a
};

function Xg(a) {
    return a.nc && !a.i && !(a.w && a.w.options.i)
}

function de(a) {
    return a.qc && !a.i && !(a.w && a.w.options.i)
}
g.Nf = function(a) {
    this.qc = a
};
g.Qf = function(a) {
    this.i = a
};

function Yg(a) {
    return a.pc && !(a.w && a.w.options.i)
}
g.Mf = function(a) {
    this.pc = a;
    a = 0;
    for (var b; b = this.h[a]; a++)
        for (var c = 0, d; d = b.za[c]; c++) d.Jc()
};

function fh(a, b) {
    if (!b && a.j) {
        if (a.K && we(a.K, b), a.N && we(a.N, b), a.g) {
            we(a.g, b);
            var c = G(a.g);
            c && fh(c, b)
        }
    } else
        for (var d = a.Gb(!0), e = 0; c = d[e]; e++) we(c, b), be(c) && (c = G(c)) && fh(c, b)
}
g.lc = function(a) {
    var b = parseFloat(a);
    if (isNaN(b))
        if (q(a) && a.match(/^#[0-9a-fA-F]{6}$/)) this.Fb = a;
        else throw "Invalid colour: " + a;
    else this.Fb = xj(yj(b))
};

function ih(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.za[e]; e++)
            if (f.name === b) return f;
    return null
}

function zj(a) {
    return (a = ih(a, "DIR")) ? a.Na() : null
}
g.Fc = function(a, b) {
    a ? (void 0 === b && (b = null), this.N || (this.N = this.Bd(4)), ie(this.N, b)) : this.N && (this.N.B(), this.N = null)
};
g.fd = function(a, b) {
    a ? (void 0 === b && (b = null), this.g || (this.g = this.Bd(3)), ie(this.g, b)) : this.g && (this.g.B(), this.g = null)
};
g.Of = function(a, b) {
    a ? (void 0 === b && (b = null), this.K || (this.K = this.Bd(2)), ie(this.K, b)) : this.K && (this.K.B(), this.K = null)
};
g.ed = function(a) {
    this.J != a && (J(new Qi(this, "inline", null, this.J, a)), this.J = a)
};

function Aj(a) {
    if (void 0 != a.J) return a.J;
    for (var b = 1; b < a.h.length; b++)
        if (5 == a.h[b - 1].type && 5 == a.h[b].type) return !1;
    for (b = 1; b < a.h.length; b++)
        if (1 == a.h[b - 1].type && 5 == a.h[b].type) return !0;
    return !1
}
g.dd = function(a) {
    this.disabled != a && (J(new Qi(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function Bj(a) {
    for (;;) {
        a = wj(a);
        if (!a) return !1;
        if (a.disabled) return !0
    }
}
g.Dc = function(a) {
    this.j != a && (J(new Qi(this, "collapsed", null, this.j, a)), this.j = a)
};
g.toString = function(a) {
    var b = [];
    if (this.j) b.push(jh(this, "_TEMP_COLLAPSED_INPUT").za[0].ha);
    else
        for (var c = 0, d; d = this.h[c]; c++) {
            for (var e = 0, f; f = d.za[e]; e++) b.push(f.mc());
            d.I && ((d = G(d.I)) ? b.push(d.toString()) : b.push("?"))
        }
    b = sa(b.join(" ")) || "???";
    a && b.length > a && (b = b.substring(0, a - 3) + "...");
    return b
};
g.Va = function(a, b) {
    var c = null;
    if (1 == a || 3 == a) c = this.Bd(a);
    c = new qj(a, b, this, c);
    this.h.push(c);
    return c
};
g.Hf = function(a) {
    for (var b = 0, c; c = this.h[b]; b++)
        if (c.name == a) {
            c.I && c.I.M && (c.I.Jb = null, a = G(c.I), a.i ? a.B() : je(a));
            c.B();
            this.h.splice(b, 1);
            break
        }
};

function jh(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        if (d.name == b) return d;
    return null
}
g.je = function() {
    return this.ua || ""
};
g.Hd = function(a) {
    this.ua != a && (J(new Qi(this, "comment", null, this.ua, a || "")), this.ua = a)
};
g.Za = function() {};
g.oa = function() {
    return this.Mc
};
g.moveBy = function(a, b) {
    var c = new Wd(this);
    this.Mc.translate(a, b);
    Yd(c);
    J(c)
};
g.Bd = function(a) {
    return new Kd(this, a)
};

function S(a, b, c) {
    this.m = L("g", {}, null);
    this.ba = L("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.m);
    this.G = L("path", {
        "class": "blocklyPath"
    }, this.m);
    this.W = L("path", {
        "class": "blocklyPathLight"
    }, this.m);
    this.G.$a = this;
    this.O = !1;
    bj(this.G);
    S.v.constructor.call(this, a, b, c)
}
t(S, Pg);
g = S.prototype;
g.height = 0;
g.width = 0;
g.qd = null;
g.xe = function() {
    for (var a = 0, b; b = this.h[a]; a++) b.P();
    b = sj(this);
    for (a = 0; a < b.length; a++) Ki(b[a]);
    this.kc();
    Cj(this);
    if (!this.w.options.i && !this.Rd) {
        O(this.m, "mousedown", this, this.jd);
        var c = this;
        O(this.m, "touchstart", null, function(a) {
            ji(a, c)
        })
    }
    this.Rd = !0;
    this.m.parentNode || this.w.g.appendChild(this.m)
};
g.select = function() {
    if (this.i && this.getParent()) this.getParent().select();
    else if (U != this) {
        U && (I++, ri(U), I--);
        var a = new Ri(null, "selected", 0, this.id);
        a.g = this.w.id;
        J(a);
        U = this;
        this.Se()
    }
};

function ri(a) {
    if (U == a) {
        var b = new Ri(null, "selected", 0, null);
        b.g = a.w.id;
        J(b);
        U = null;
        a.Ee()
    }
}
g.Ug = null;
g.ua = null;
g.gb = null;

function sj(a) {
    var b = [];
    a.ua && b.push(a.ua);
    a.gb && b.push(a.gb);
    return b
}
var Dj = null,
    Ej = null;

function Fj() {
    Gj();
    Dj && (Q(Dj), Dj = null);
    Ej && (Q(Ej), Ej = null);
    var a = U;
    if (2 == K && a) {
        var b = a.oa(),
            b = dc(b, a.qd),
            c = new Wd(a);
        c.G = a.qd;
        Yd(c);
        J(c);
        ue(a, b.x, b.y);
        delete a.sa;
        Hj(a, !1);
        a.U();
        var d = Sd;
        setTimeout(function() {
            H(d);
            Di(a);
            H(!1)
        }, Ud / 2);
        setTimeout(function() {
            H(d);
            ke(a);
            H(!1)
        }, Ud);
        gh(a.w)
    }
    K = 0;
    xh(Ij)
}
g = S.prototype;
g.Ld = function(a) {
    if (a != this.H) {
        var b = this.m;
        if (this.H && b) {
            var c = this.oa();
            this.w.g.appendChild(b);
            b.setAttribute("transform", "translate(" + c.x + "," + c.y + ")")
        }
        bh();
        S.v.Ld.call(this, a);
        ch();
        a && (c = this.oa(), a.m.appendChild(b), a = this.oa(), ue(this, a.x - c.x, a.y - c.y))
    }
};
g.oa = function() {
    var a = 0,
        b = 0,
        c = this.m;
    if (c) {
        do var d = te(c),
            a = a + d.x,
            b = b + d.y,
            c = c.parentNode; while (c && c != this.w.g)
    }
    return new w(a, b)
};
g.moveBy = function(a, b) {
    var c = new Wd(this),
        d = this.oa();
    this.m.setAttribute("transform", "translate(" + (d.x + a) + "," + (d.y + b) + ")");
    ue(this, a, b);
    Yd(c);
    J(c)
};

function Di(a) {
    if (a.w && 0 == K && !a.getParent() && !a.A && a.w.options.h && a.w.options.h.snap) {
        var b = a.w.options.h.spacing,
            c = b / 2,
            d = a.oa(),
            e = Math.round((d.x - c) / b) * b + c - d.x,
            b = Math.round((d.y - c) / b) * b + c - d.y,
            e = Math.round(e),
            b = Math.round(b);
        0 == e && 0 == b || a.moveBy(e, b)
    }
}

function Ei(a) {
    var b = a.height,
        c = a.width,
        d = Pd(a);
    d ? (a = Ei(d), b += a.height - 4, c = Math.max(c, a.width)) : a.g || a.K || (b += 2);
    return {
        height: b,
        width: c
    }
}

function Jj(a) {
    var b = a.oa(a),
        c = a.K ? 8 : 0,
        d = Ei(a);
    a.s ? (a = new w(b.x - (d.width - c), b.y), b = new w(b.x + c, b.y + d.height)) : (a = new w(b.x - c, b.y), b = new w(b.x + d.width - c, b.y + d.height));
    return {
        ub: a,
        Eb: b
    }
}
g.Dc = function(a) {
    if (this.j != a) {
        for (var b = [], c = 0, d; d = this.h[c]; c++) b.push.apply(b, d.$(!a));
        if (a) {
            d = sj(this);
            for (c = 0; c < d.length; c++) d[c].$(!1);
            c = this.toString(Kj);
            rj(this.Va(5, "_TEMP_COLLAPSED_INPUT"), c).P()
        } else this.Hf("_TEMP_COLLAPSED_INPUT"), this.Za(null);
        S.v.Dc.call(this, a);
        b.length || (b[0] = this);
        if (this.O)
            for (c = 0; a = b[c]; c++) a.U()
    }
};
g.tab = function(a, b) {
    for (var c = [], d = 0, e; e = this.h[d]; d++) {
        for (var f = 0, h; h = e.za[f]; f++) h instanceof Lj && c.push(h);
        e.I && (e = G(e.I)) && c.push(e)
    }
    d = c.indexOf(a); - 1 == d && (d = b ? -1 : c.length);
    (c = c[b ? d + 1 : d - 1]) ? c instanceof kj ? c.Gc() : c.tab(null, b): (c = this.getParent()) && c.tab(this, b)
};
g.jd = function(a) {
    if (!this.w.options.i)
        if (this.A) a.stopPropagation();
        else {
            this.w.$c();
            ui();
            this.select();
            Ah();
            var b = this.w;
            b.Ua ? b.ba = b.Ua.rd() : b.ba = null;
            b.X ? b.J = b.X.rd() : b.S ? b.J = b.S.rd() : b.J = null;
            if (vh(a)) Mj(this, a);
            else if (de(this)) {
                Sd || H(!0);
                xh(yh);
                this.qd = this.oa();
                zh(this.w, a, this.qd);
                K = 1;
                Dj = O(document, "mouseup", this, this.kh);
                Ej = O(document, "mousemove", this, this.jh);
                this.sa = [];
                for (var b = this.Wa(), c = 0, d; d = b[c]; c++) {
                    d = sj(d);
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e].Zc;
                        f.Th = d[e];
                        this.sa.push(f)
                    }
                }
            } else return;
            a.stopPropagation();
            a.preventDefault()
        }
};
g.kh = function(a) {
    2 == K || gj || J(new Ri(this, "click", 0, void 0));
    ui();
    if (U && $d) {
        ae.connect($d);
        if (this.O && (a = (be(ae) ? $d : ae).ma, Gi(a.w, "click"), !(1 > a.w.scale))) {
            var b = Sh(a.m, a.w);
            a.K ? (b.x += (a.s ? 3 : -3) * a.w.scale, b.y += 13 * a.w.scale) : a.N && (b.x += (a.s ? -23 : 23) * a.w.scale, b.y += 3 * a.w.scale);
            b = L("circle", {
                cx: b.x,
                cy: b.y,
                r: 0,
                fill: "none",
                stroke: "#888",
                "stroke-width": 10
            }, Rh(a.w));
            Nj(b, new Date, a.w.scale)
        }
        this.w.Ua && this.w.Ua.close()
    } else !this.getParent() && Xg(U) && vi(this.w, a) && ((a = this.w.Ua) && Gd(a.close, 100, a), a = U.w, U.B(!1, !0), gh(a));
    $d && (xe(), $d = null);
    xh(Ij);
    gj || H(!1)
};

function Mj(a, b) {
    if (!a.w.options.i) {
        var c = [];
        if (Xg(a) && de(a) && !a.A) {
            var d = {
                text: V.Bh,
                enabled: !0,
                Ra: function() {
                    var b = ti,
                        c = Oj;
                    Pj(a);
                    si(a.w);
                    ti = b;
                    Oj = c
                }
            };
            a.Wa().length > Qg(a.w) && (d.enabled = !1);
            c.push(d);
            Yg(a) && !a.j && a.w.options.L && (d = {
                enabled: !u
            }, a.ua ? (d.text = V.Ph, d.Ra = function() {
                a.Hd(null)
            }) : (d.text = V.ih, d.Ra = function() {
                a.Hd("")
            }), c.push(d));
            if (!a.j)
                for (d = 1; d < a.h.length; d++)
                    if (3 != a.h[d - 1].type && 3 != a.h[d].type) {
                        var d = {
                                enabled: !0
                            },
                            e = Aj(a);
                        d.text = e ? V.Fh : V.Hh;
                        d.Ra = function() {
                            a.ed(!e)
                        };
                        c.push(d);
                        break
                    }
            a.w.options.F &&
                (a.j ? (d = {
                    enabled: !0
                }, d.text = V.Eh, d.Ra = function() {
                    a.Dc(!1)
                }, c.push(d)) : (d = {
                    enabled: !0
                }, d.text = V.vh, d.Ra = function() {
                    a.Dc(!0)
                }, c.push(d)));
            a.w.options.J && (d = {
                text: a.disabled ? V.Ch : V.Ah,
                enabled: !Bj(a),
                Ra: function() {
                    a.dd(!a.disabled)
                }
            }, c.push(d));
            var d = a.Wa().length,
                f = Pd(a);
            f && (d -= f.Wa().length);
            d = {
                text: 1 == d ? V.Xf : V.Yf.replace("%1", String(d)),
                enabled: !0,
                Ra: function() {
                    H(!0);
                    a.B(!0, !0);
                    H(!1)
                }
            };
            c.push(d)
        }
        d = {
            enabled: !(ga(a.L) ? !a.L() : !a.L)
        };
        d.text = V.Gh;
        d.Ra = function() {
            var b = ga(a.L) ? a.L() : a.L;
            b && window.open(b)
        };
        c.push(d);
        a.ld && !a.A && a.ld(c);
        Eg.show(b, c, a.s);
        Eg.ae = a
    }
}

function ue(a, b, c) {
    if (a.O) {
        for (var d = a.Gb(!1), e = 0; e < d.length; e++) d[e].moveBy(b, c);
        d = sj(a);
        for (e = 0; e < d.length; e++) Mi(d[e]);
        for (e = 0; e < a.F.length; e++) ue(a.F[e], b, c)
    }
}

function Hj(a, b) {
    if (b) {
        var c = a.m;
        c.h = "";
        c.g = "";
        Fg(a.m, "blocklyDragging");
        ee = ee.concat(a.Gb(!0))
    } else Li(a.m, "blocklyDragging"), ee = [];
    for (c = 0; c < a.F.length; c++) Hj(a.F[c], b)
}
g.jh = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = this.oa(),
            c = Bh(this.w, a),
            d;
        if (d = 1 == K) {
            d = b.x - c.x;
            var e = b.y - c.y;
            d = Math.sqrt(d * d + e * e) * this.w.scale > Fh
        }
        d && (K = 2, Qj(), this.H && (je(this), d = this.m, d.h = "translate(" + c.x + "," + c.y + ")", Gi(this.w, "disconnect"), 1 > this.w.scale || (d = Math.atan(10 / Ei(this).height) / Math.PI * 180, this.s || (d *= -1), Rj(this.m, d, new Date))), Hj(this, !0));
        if (2 == K) {
            b = dc(b, this.qd);
            d = this.m;
            d.h = "translate(" + c.x + "," + c.y + ")";
            d.setAttribute("transform",
                d.h + d.g);
            for (c = 0; c < this.sa.length; c++) e = this.sa[c], d = e.Th, e = new w(e.x + b.x, e.y + b.y), d.Zc = e, d.na && (d = d.na, d.rc = e, d.Gd && nh(d));
            d = this.Gb(!1);
            a: {
                for (c = this.g; c;) {
                    e = G(c);
                    if (!e) break a;
                    c = e.g
                }
                c = null
            }
            c && c != this.g && d.push(c);
            for (var f = e = null, h = ne, c = 0; c < d.length; c++) {
                var l = d[c],
                    m;
                m = Xh(l.od, l, h, b);
                m.I && (e = m.I, f = l, h = m.Zg)
            }
            $d && $d != e && (xe(), ae = $d = null);
            e && e != $d && (e.ue(), $d = e, ae = f);
            Xg(this) && vi(this.w, a)
        }
        a.stopPropagation();
        a.preventDefault()
    }
};

function Cj(a) {
    de(a) ? Fg(a.m, "blocklyDraggable") : Li(a.m, "blocklyDraggable")
}
g.Nf = function(a) {
    S.v.Nf.call(this, a);
    Cj(this)
};
g.Mf = function(a) {
    S.v.Mf.call(this, a);
    if (this.O) {
        a = sj(this);
        for (var b = 0; b < a.length; b++) a[b].Jc()
    }
};
g.Qf = function(a) {
    S.v.Qf.call(this, a);
    this.kc()
};
g.B = function(a, b) {
    fj();
    bh();
    U == this && (ri(this), ui());
    Eg.ae == this && Eg.Ub();
    if (b && this.O) {
        je(this, a);
        Gi(this.w, "delete");
        var c = Sh(this.m, this.w),
            d = this.m.cloneNode(!0);
        d.A = c.x;
        d.F = c.y;
        d.setAttribute("transform", "translate(" + d.A + "," + d.F + ")");
        Rh(this.w).appendChild(d);
        d.i = d.getBBox();
        Sj(d, this.s, new Date, this.w.scale)
    }
    this.O = !1;
    I++;
    c = sj(this);
    for (d = 0; d < c.length; d++) c[d].B();
    I--;
    S.v.B.call(this, a);
    A(this.m);
    this.ba = this.W = this.G = this.m = null;
    ch()
};

function Sj(a, b, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? A(a) : (a.setAttribute("transform", "translate(" + (a.A + (b ? -1 : 1) * a.i.width * d / 2 * e) + "," + (a.F + a.i.height * d * e) + ") scale(" + (1 - e) * d + ")"), setTimeout(function() {
        Sj(a, b, c, d)
    }, 10))
}

function Nj(a, b, c) {
    var d = (new Date - b) / 150;
    1 < d ? A(a) : (a.setAttribute("r", 25 * d * c), a.style.opacity = 1 - d, setTimeout(function() {
        Nj(a, b, c)
    }, 10))
}

function Rj(a, b, c) {
    var d = (new Date - c) / 200;
    1 < d ? a.g = "" : (a.g = "skewX(" + Math.round(Math.sin(d * Math.PI * 3) * (1 - d) * b) + ")", Tj = a, Uj = setTimeout(function() {
        Rj(a, b, c)
    }, 10));
    a.setAttribute("transform", a.h + a.g)
}

function Gj() {
    if (Tj) {
        clearTimeout(Uj);
        var a = Tj;
        a.g = "";
        a.setAttribute("transform", a.h);
        Tj = null
    }
}
var Uj = 0,
    Tj = null;
g = S.prototype;
g.kc = function() {
    if (!this.disabled) {
        var a = this.Fb,
            b = Vj(a);
        if (this.i) b = Wj([255, 255, 255], b, .6), a = xj(b), this.W.style.display = "none", this.ba.setAttribute("fill", a);
        else {
            this.W.style.display = "";
            var c = xj(Wj([255, 255, 255], b, .3)),
                b = xj(Wj([0, 0, 0], b, .2));
            this.W.setAttribute("stroke", c);
            this.ba.setAttribute("fill", b)
        }
        this.G.setAttribute("fill", a);
        a = sj(this);
        for (c = 0; c < a.length; c++) a[c].kc();
        for (a = 0; c = this.h[a]; a++)
            for (var b = 0, d; d = c.za[b]; b++) d.wb(null)
    }
};

function ye(a) {
    var b;
    b = -1 != (" " + a.m.getAttribute("class") + " ").indexOf(" blocklyDisabled ");
    a.disabled || Bj(a) ? b || (Fg(a.m, "blocklyDisabled"), a.G.setAttribute("fill", "url(#" + a.w.options.pd + ")")) : b && (Li(a.m, "blocklyDisabled"), a.kc());
    a = a.Zb();
    b = 0;
    for (var c; c = a[b]; b++) ye(c)
}
g.je = function() {
    var a;
    this.ua ? (a = this.ua, a = (a.h ? a.h.value : a.ha).replace(/\s+$/, "").replace(/ +\n/g, "\n")) : a = "";
    return a
};
g.Hd = function(a) {
    var b = !1;
    q(a) ? (this.ua || (this.ua = new Oi(this), b = !0), Ti(this.ua, a)) : this.ua && (this.ua.B(), b = !0);
    b && this.O && (this.U(), ke(this))
};
g.Za = function(a, b) {
    this.Za.g || (this.Za.g = Object.create(null));
    var c = b || "";
    if (c) this.Za.g[c] && (clearTimeout(this.Za.g[c]), delete this.Za.g[c]);
    else
        for (var d in this.Za.g) clearTimeout(this.Za.g[d]), delete this.Za.g[d];
    if (2 == K) {
        var e = this;
        this.Za.g[c] = setTimeout(function() {
            e.w && (delete e.Za.g[c], e.Za(a, c))
        }, 100)
    } else {
        this.A && (a = null);
        d = wj(this);
        for (var f = null; d;) d.j && (f = d), d = wj(d);
        f && f.Za(a, "collapsed " + this.id + " " + c);
        d = !1;
        q(a) ? (this.gb || (this.gb = new Si(this), d = !0), uj(this.gb, a, c)) : this.gb && !c ? (this.gb.B(),
            d = !0) : this.gb && (d = tj(this.gb), uj(this.gb, "", c), (f = tj(this.gb)) || this.gb.B(), d = d == f);
        d && this.O && (this.U(), ke(this))
    }
};
g.dd = function(a) {
    this.disabled != a && (S.v.dd.call(this, a), this.O && ye(this))
};
g.Se = function() {
    Fg(this.m, "blocklySelected");
    this.m.parentNode.appendChild(this.m)
};
g.Ee = function() {
    Li(this.m, "blocklySelected")
};
g.lc = function(a) {
    S.v.lc.call(this, a);
    this.O && this.kc()
};
g.Fc = function(a, b) {
    S.v.Fc.call(this, a, b);
    this.O && (this.U(), ke(this))
};
g.fd = function(a, b) {
    S.v.fd.call(this, a, b);
    this.O && (this.U(), ke(this))
};
g.Of = function(a, b) {
    S.v.Of.call(this, a, b);
    this.O && (this.U(), ke(this))
};
g.ed = function(a) {
    S.v.ed.call(this, a);
    this.O && (this.U(), ke(this))
};
g.Hf = function(a, b) {
    S.v.Hf.call(this, a, b);
    this.O && (this.U(), ke(this))
};
g.Va = function(a, b) {
    var c = S.v.Va.call(this, a, b);
    this.O && (this.U(), ke(this));
    return c
};
g.Gb = function(a) {
    var b = [];
    if (a || this.O)
        if (this.K && b.push(this.K), this.N && b.push(this.N), this.g && b.push(this.g), a || !this.j) {
            a = 0;
            for (var c; c = this.h[a]; a++) c.I && b.push(c.I)
        }
    return b
};
g.Bd = function(a) {
    return new fe(this, a)
};
var Xj = 7.5 * (1 - Math.SQRT1_2) + .5,
    Yj = 8.5 * (1 - Math.SQRT1_2) - .5,
    Zj = "m " + Xj + "," + Xj,
    ak = "a 8,8 0 0,0 " + (-Yj - .5) + "," + (8 - Yj),
    bk = "a 8.5,8.5 0 0,0 " + (8 - Yj) + "," + (Yj + .5);
S.prototype.U = function(a) {
    bh();
    this.O = !0;
    var b = 10;
    this.s && (b = -b);
    for (var c = sj(this), d = 0; d < c.length; d++) {
        var e = c[d];
        e.ig && e.xa.j ? e.g.setAttribute("display", "none") : (e.g.setAttribute("display", "block"), e.xa.s && (b -= 17), e.g.setAttribute("transform", "translate(" + b + ",5)"), Mi(e), b = e.xa.s ? b - 10 : b + 27)
    }
    var f = b += this.s ? 10 : -10,
        h = this.h,
        c = [];
    c.g = f + 20;
    if (this.N || this.g) c.g = Math.max(c.g, 40);
    for (var e = d = 0, l = !1, m = !1, n = !1, p = void 0, r = Aj(this) && !this.j, E = 0, z; z = h[E]; E++)
        if (z.Ne) {
            var x;
            r && p && 3 != p && 3 != z.type ? x = c[c.length -
                1] : (p = z.type, x = [], x.type = r && 3 != z.type ? -1 : z.type, x.height = 0, c.push(x));
            x.push(z);
            z.ic = 25;
            z.Ja = r && 1 == z.type ? 20.5 : 0;
            if (z.I && z.I.M) {
                var Vd = Ei(G(z.I));
                z.ic = Math.max(z.ic, Vd.height);
                z.Ja = Math.max(z.Ja, Vd.width)
            }
            r || E != h.length - 1 ? !r && 1 == z.type && h[E + 1] && 3 == h[E + 1].type && z.ic-- : z.ic--;
            x.height = Math.max(x.height, z.ic);
            z.xb = 0;
            1 == c.length && (z.xb += this.s ? -f : f);
            for (var Vd = !1, dh = 0, Xb; Xb = z.za[dh]; dh++) {
                0 != dh && (z.xb += 10);
                var wc;
                wc = Xb;
                wc.u.width || wc.Me();
                wc = wc.u;
                Xb.Ja = wc.width;
                Xb.H = Vd && Xb.Lc ? 10 : 0;
                z.xb += Xb.Ja + Xb.H;
                x.height =
                    Math.max(x.height, wc.height);
                Vd = Xb.Lc
            } - 1 != x.type && (3 == x.type ? (m = !0, e = Math.max(e, z.xb)) : (1 == x.type ? l = !0 : 5 == x.type && (n = !0), d = Math.max(d, z.xb)))
        }
    for (f = 0; x = c[f]; f++)
        if (x.gh = !1, -1 == x.type)
            for (h = 0; z = x[h]; h++)
                if (1 == z.type) {
                    x.height += 10;
                    x.gh = !0;
                    break
                }
    c.h = 20 + e;
    m && (c.g = Math.max(c.g, c.h + 30));
    l ? c.g = Math.max(c.g, d + 28) : n && (c.g = Math.max(c.g, d + 20));
    c.i = l;
    c.u = m;
    c.j = n;
    e = b;
    this.Wb = !1;
    this.height = 0;
    this.K ? this.Vb = this.Ha = !0 : (this.Vb = this.Ha = !1, this.N && (b = G(this.N)) && Pd(b) == this && (this.Ha = !0), Pd(this) && (this.Vb = !0));
    l = [];
    m = [];
    b = [];
    d = [];
    n = c.g;
    this.Ha ? (l.push("m 0,0"), b.push("m 0.5,0.5"), this.Wb && (l.push("c 30,-15 70,-15 100,0"), b.push(this.s ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (l.push("m 0,8"), b.push(this.s ? Zj : "m 0.5,7.5"), l.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.N && (l.push("H", 15), b.push("H", 15), l.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"), re(this.N, this.s ? -30 : 30, 0));
    l.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    var n = 0,
        P;
    for (z = 0; x =
        c[z]; z++) {
        p = 10;
        0 == z && (p += this.s ? -e : e);
        b.push("M", c.g - .5 + "," + (n + .5));
        if (this.j) f = x[0], r = n, ck(this, f.za, p, r), l.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), f = x.height - 20, l.push("v", f), this.s && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", f - .7)), this.width += 15;
        else if (-1 == x.type) {
            for (h = 0; f = x[h]; h++) r = n, x.gh && (r += 5), p = ck(this, f.za, p, r), 5 != f.type && (p += f.Ja + 10), 1 == f.type && (m.push("M", p - 10 + "," + (n + 5)), m.push("h", 6 - f.Ja), m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), m.push("v", f.ic + 1 - 20),
                m.push("h", f.Ja + 2 - 8), m.push("z"), this.s ? (d.push("M", p - 10 - 2.5 + 8 - f.Ja + "," + (n + 5 + .5)), d.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), d.push("v", f.ic - 20 + 2.5), d.push("h", f.Ja - 8 + 2)) : (d.push("M", p - 10 + .5 + "," + (n + 5 + .5)), d.push("v", f.ic + 1), d.push("h", 6 - f.Ja), d.push("M", p - f.Ja - 10 + .9 + "," + (n + 5 + 20 - .7)), d.push("l", "3.68,-2.1")), this.s ? P = -p - 8 + 10 + f.Ja + 1 : P = p + 8 - 10 - f.Ja - 1, r = n + 5 + 1, re(f.I, P, r));
            p = Math.max(p, c.g);
            this.width = Math.max(this.width, p);
            l.push("H", p);
            b.push("H", p - .5);
            l.push("v", x.height);
            this.s &&
                b.push("v", x.height - 1)
        } else 1 == x.type ? (f = x[0], r = n, -1 != f.align && (h = c.g - f.xb - 8 - 20, 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), ck(this, f.za, p, r), l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), P = x.height - 20, l.push("v", P), this.s ? (b.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), b.push("v", P + .5)) : (b.push("M", c.g - 5 + "," + (n + 20 - .7)), b.push("l", "3.68,-2.1")), P = this.s ? -c.g - 1 : c.g + 1, re(f.I, P, n), f.I.M && (this.width = Math.max(this.width, c.g + Ei(G(f.I)).width - 8 + 1))) : 5 == x.type ? (f = x[0], r = n, -1 != f.align && (h = c.g -
            f.xb - 20, c.i && (h -= 8), 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), ck(this, f.za, p, r), l.push("v", x.height), this.s && b.push("v", x.height - 1)) : 3 == x.type && (f = x[0], 0 == z && (l.push("v", 10), this.s && b.push("v", 9), n += 10), r = n, -1 != f.align && (h = c.h - f.xb - 20, 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), ck(this, f.za, p, r), p = c.h + 30, l.push("H", p), l.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), l.push("v", x.height - 16), l.push("a 8,8 0 0,0 8,8"), l.push("H", c.g), this.s ? (b.push("M", p - 30 + Yj + "," + (n + Yj)), b.push(ak), b.push("v", x.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) :
            (b.push("M", p - 30 + Yj + "," + (n + x.height - Yj)), b.push(bk)), b.push("H", c.g - .5), P = this.s ? -p : p + 1, re(f.I, P, n + 1), f.I.M && (this.width = Math.max(this.width, c.h + Ei(G(f.I)).width)), z == c.length - 1 || 3 == c[z + 1].type) && (l.push("v", 10), this.s && b.push("v", 9), n += 10);
        n += x.height
    }
    c.length || (n = 25, l.push("V", n), this.s && b.push("V", n - 1));
    P = n;
    this.height += P + 1;
    this.g && (l.push("H", 30 + (this.s ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), re(this.g, this.s ? -30 : 30, P + 1), this.height += 4);
    this.Vb ? (l.push("H 0"), this.s || b.push("M", "0.5," + (P - .5))) : (l.push("H",
        8), l.push("a", "8,8 0 0,1 -8,-8"), this.s || (b.push("M", Xj + "," + (P - Xj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (P - 8))));
    this.K ? (re(this.K, 0, 0), l.push("V", 20), l.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"), this.s ? (b.push("M", "-2,8.4"), b.push("l", "-3.6,-2.1")) : (b.push("V", 18.5), b.push("m", "-7.36,-0.5 q -1.52,-5.5 0,-11"), b.push("m", "7.36,1 V 0.5 H 1")), this.width += 8) : this.s || (this.Ha ? b.push("V", .5) : b.push("V", 8));
    l.push("z");
    P = l.join(" ") + "\n" + m.join(" ");
    this.G.setAttribute("d", P);
    this.ba.setAttribute("d", P);
    P = b.join(" ") + "\n" + d.join(" ");
    this.W.setAttribute("d", P);
    this.s && (this.G.setAttribute("transform", "scale(-1 1)"), this.W.setAttribute("transform", "scale(-1 1)"), this.ba.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    P = this.oa();
    this.N && qe(this.N, P);
    this.K && qe(this.K, P);
    for (c = 0; c < this.h.length; c++)
        if (b = this.h[c].I) qe(b, P), b.M && se(b);
    this.g && (qe(this.g, P), this.g.M && se(this.g));
    !1 !== a && ((a = this.getParent()) ? a.U(!0) : gh(this.w));
    ch()
};

function ck(a, b, c, d) {
    d += 5;
    a.s && (c = -c);
    for (var e = 0, f; f = b[e]; e++) {
        var h = f.Le();
        h && (a.s ? (c -= f.H + f.Ja, h.setAttribute("transform", "translate(" + c + "," + d + ")"), f.Ja && (c -= 10)) : (h.setAttribute("transform", "translate(" + (c + f.H) + "," + d + ")"), f.Ja && (c += f.H + f.Ja + 10)))
    }
    return a.s ? -c : c
};
var V = {};

function Lj(a, b) {
    Lj.v.constructor.call(this, a, b)
}
var dk;
t(Lj, kj);
g = Lj.prototype;
g.Pd = "text";
g.dh = !0;
g.B = function() {
    Ig(this);
    Lj.v.B.call(this)
};
g.ra = function(a) {
    if (null !== a) {
        if (this.D && this.Oa) {
            var b = this.Oa(a);
            null !== b && void 0 !== b && (a = b)
        }
        kj.prototype.ra.call(this, a)
    }
};
g.Gc = function(a) {
    this.o = this.D.w;
    a = a || !1;
    if (!a && (Jb || Lb || Nb)) {
        a = window.prompt(V.rh, this.ha);
        if (this.D && this.Oa) {
            var b = this.Oa(a);
            void 0 !== b && (a = b)
        }
        this.ra(a)
    } else {
        Dg(this, this.D.s, ek(this));
        var b = N,
            c = y("input", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.dh);
        var d = 11 * this.o.scale + "pt";
        b.style.fontSize = d;
        c.style.fontSize = d;
        dk = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.ha;
        c.j = null;
        fk(this);
        this.Fe();
        a || (c.focus(), c.select());
        c.H = O(c, "keydown", this, this.Gi);
        c.J = O(c, "keyup", this, this.Xg);
        c.G = O(c, "keypress", this, this.Xg);
        c.u = this.Fe.bind(this);
        this.o.Pb(c.u)
    }
};
g.Gi = function(a) {
    var b = dk;
    13 == a.keyCode ? gk() : 27 == a.keyCode ? (b.value = b.defaultValue, gk()) : 9 == a.keyCode && (gk(), this.D.tab(this, !a.shiftKey), a.preventDefault())
};
g.Xg = function() {
    var a = dk,
        b = a.value;
    b !== a.j ? (a.j = b, this.ra(b), fk(this)) : v && this.D.U();
    this.Fe()
};

function fk(a) {
    var b = !0,
        c = dk;
    a.D && a.Oa && (b = a.Oa(c.value));
    null === b ? Fg(c, "blocklyInvalidInput") : Li(c, "blocklyInvalidInput")
}
g.Fe = function() {
    var a = N,
        b = this.g.getBBox();
    a.style.width = b.width * this.o.scale + "px";
    a.style.height = b.height * this.o.scale + "px";
    b = Ge(this.j);
    if (this.D.s) {
        var c = oj(this);
        b.x += c.width;
        b.x -= a.offsetWidth
    }
    b.y += 1;
    Ib && N.style.top && (--b.x, --b.y);
    v && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px"
};

function ek(a) {
    return function() {
        var b = dk,
            c = b.value;
        if (a.D && a.Oa) {
            var d = a.Oa(c);
            null === d ? c = b.defaultValue : void 0 !== d && (c = d)
        }
        a.ra(c);
        a.D.O && a.D.U();
        Q(b.H);
        Q(b.J);
        Q(b.G);
        a.o.Fd(b.u);
        dk = null;
        b = N.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = ""
    }
};

function hk(a, b) {
    this.F = a;
    ik(this);
    var c = jk(this)[0];
    hk.v.constructor.call(this, c[1], b)
}
t(hk, kj);
var kk = Lb ? "\u25bc" : "\u25be";
g = hk.prototype;
g.Pd = "default";
g.P = function() {
    if (!this.g) {
        this.A = L("tspan", {}, null);
        this.A.appendChild(document.createTextNode(this.D.s ? kk + " " : " " + kk));
        hk.v.P.call(this);
        var a = this.ha;
        this.ha = null;
        this.wb(a)
    }
};
g.Gc = function() {
    Dg(this, this.D.s, null);
    var a = this,
        b = new Bg;
    b.Uc(this.D.s);
    for (var c = jk(this), d = 0; d < c.length; d++) {
        var e = c[d][1],
            f = new fg(c[d][0]);
        f.Uc(this.D.s);
        f.Pa = e;
        f.fb(16, !0);
        b.md(f, !0);
        Uf(f, e == this.i)
    }
    sd(b, "action", function(b) {
        if (b = b.target) {
            b = b.Na();
            if (a.D && a.Oa) {
                var c = a.Oa(b);
                void 0 !== c && (b = c)
            }
            null !== b && a.ra(b)
        }
        Ig(a)
    });
    We(b).T(b.C(), "touchstart", function(a) {
        sg(this, a.target).Tb(a)
    });
    We(b).T(b.C(), "touchend", function(a) {
        sg(this, a.target).hc(a)
    });
    c = kc();
    d = Ee();
    e = Ge(this.j);
    f = oj(this);
    b.U(N);
    var h = b.C();
    Fg(h, "blocklyDropdownMenu");
    var l = He(h);
    l.height = h.scrollHeight;
    e.y = e.y + l.height + f.height >= c.height + d.y ? e.y - (l.height + 2) : e.y + f.height;
    this.D.s ? (e.x += f.width, e.x += 25, e.x < d.x + l.width && (e.x = d.x + l.width)) : (e.x -= 25, e.x > c.width + d.x - l.width && (e.x = c.width + d.x - l.width));
    Hg(e.x, e.y, c, d, this.D.s);
    Cg(b);
    h.focus()
};

function ik(a) {
    a.J = null;
    a.L = null;
    var b = a.F;
    if (da(b) && !(2 > b.length)) {
        var c = b.map(function(a) {
                return a[0]
            }),
            d = lk(c),
            e = mk(c, d),
            f = nk(c, d);
        if ((e || f) && !(d <= e + f)) {
            e && (a.J = c[0].substring(0, e - 1));
            f && (a.L = c[0].substr(1 - f));
            c = [];
            for (d = 0; d < b.length; d++) {
                var h = b[d][0],
                    l = b[d][1],
                    h = h.substring(e, h.length - f);
                c[d] = [h, l]
            }
            a.F = c
        }
    }
}

function jk(a) {
    return ga(a.F) ? a.F.call(a) : a.F
}
g.Na = function() {
    return this.i
};
g.ra = function(a) {
    if (null !== a && a !== this.i) {
        this.D && 0 == I && J(new Qi(this.D, "field", this.name, this.i, a));
        this.i = a;
        for (var b = jk(this), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                this.wb(b[c][0]);
                return
            }
        this.wb(a)
    }
};
g.wb = function(a) {
    this.D && this.A && (this.A.style.fill = this.D.Fb);
    null !== a && a !== this.ha && (this.ha = a, nj(this), this.h && (this.D.s ? this.h.insertBefore(this.A, this.h.firstChild) : this.h.appendChild(this.A)), this.D && this.D.O && (this.D.U(), ke(this.D)))
};
g.B = function() {
    Ig(this);
    hk.v.B.call(this)
};

function ok(a) {
    var b;
    if (a.Wa) b = a.Wa();
    else if (a.Rb) b = a.Rb();
    else throw "Not Block or Workspace: " + a;
    a = Object.create(null);
    for (var c = 0; c < b.length; c++) {
        var d;
        d = b[c];
        for (var e = [], f = 0, h; h = d.h[f]; f++)
            for (var l = 0, m; m = h.za[l]; l++) m instanceof pk && e.push(m.Na());
        d = e;
        for (e = 0; e < d.length; e++)(f = d[e]) && (a[f.toLowerCase()] = f)
    }
    b = [];
    for (var n in a) b.push(a[n]);
    return b
}

function qk(a, b, c) {
    H(!0);
    c = c.Rb();
    for (var d = 0; d < c.length; d++)
        for (var e = c[d], f = a, h = b, l = 0, m; m = e.h[l]; l++)
            for (var n = 0, p; p = m.za[n]; n++) {
                var r;
                if (r = p instanceof pk) r = p.Na(), r = f.toLowerCase() == r.toLowerCase();
                r && p.ra(h)
            }
    H(!1)
}

function rk(a) {
    a = ok(a);
    a.sort(ta);
    Wa(a, V.Nc);
    a.unshift(V.Nc);
    for (var b = [], c = 0; c < a.length; c++) {
        if (Ni.variables_set) {
            var d = y("block");
            d.setAttribute("type", "variables_set");
            Ni.variables_get && d.setAttribute("gap", 8);
            var e = y("field", null, a[c]);
            e.setAttribute("name", "VAR");
            d.appendChild(e);
            b.push(d)
        }
        Ni.variables_get && (d = y("block"), d.setAttribute("type", "variables_get"), Ni.variables_set && d.setAttribute("gap", 24), e = y("field", null, a[c]), e.setAttribute("name", "VAR"), d.appendChild(e), b.push(d))
    }
    return b
}

function sk(a) {
    a = ok(a);
    var b = "";
    if (a.length)
        for (var c = 1, d = 0, e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d); !b;) {
            for (var f = !1, h = 0; h < a.length; h++)
                if (a[h].toLowerCase() == e) {
                    f = !0;
                    break
                }
            f ? (d++, 25 == d && (d = 0, c++), e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d), 1 < c && (e += c)) : b = e
        } else b = "i";
    return b
};

function pk(a, b) {
    pk.v.constructor.call(this, tk, b);
    this.ra(a || "")
}
t(pk, hk);
pk.prototype.Jd = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = uk.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = uk;
    pk.v.Jd.call(this, b)
};
pk.prototype.P = function() {
    this.g || (pk.v.P.call(this), this.Na() || this.ra(sk(this.D.A ? this.D.w.L : this.D.w)))
};
pk.prototype.Na = function() {
    return this.mc()
};
pk.prototype.ra = function(a) {
    this.D && 0 == I && J(new Qi(this.D, "field", this.name, this.i, a));
    this.i = a;
    this.wb(a)
};

function tk() {
    var a = this.D && this.D.w ? ok(this.D.w) : [],
        b = this.mc();
    b && -1 == a.indexOf(b) && a.push(b);
    a.sort(ta);
    a.push(V.Re);
    a.push(V.Qe);
    for (var b = [], c = 0; c < a.length; c++) b[c] = [a[c], a[c]];
    return b
}

function uk(a) {
    function b(a, b) {
        Ah();
        var c = window.prompt(a, b);
        c && (c = c.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), c == V.Re || c == V.Qe) && (c = null);
        return c
    }
    var c = this.D.w;
    if (a == V.Re) {
        var d = this.mc();
        (a = b(V.Qh.replace("%1", d), d)) && qk(d, a, c);
        return null
    }
    if (a == V.Qe) return (a = b(V.Jh, "")) ? (qk(a, a, c), a) : null
};
var Ij = "handopen",
    yh = "handclosed",
    wi = "handdelete",
    vk = "",
    wk = null,
    xk = "";

function xh(a) {
    if (vk != a) {
        vk = a;
        var b = "url(" + xk + "/" + a + ".cur), auto",
            c = ".blocklyDraggable {\n  cursor: " + b + ";\n}\n";
        wk.deleteRule(0);
        wk.insertRule(c, 0);
        for (var c = document.getElementsByClassName("blocklyToolboxDiv"), d = 0, e; e = c[d]; d++) e.style.cursor = a == wi ? b : "";
        document.body.parentNode.style.cursor = a == Ij ? "" : b
    }
}
var yk = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 999;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: 0.9;", "padding: 2px;", "position: absolute;", "z-index: 1000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;",
    "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #888;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {",
    "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {",
    "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklySvg text {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;",
    "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyCommentTextarea {", "background-color: #ffc;", "border: 0;", "margin: 0;", "padding: 2px;", "resize: none;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;",
    "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;",
    "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;",
    "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;", "stroke-width: 2;", "stroke-linecap: round;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;",
    "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;",
    "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;",
    "}", ".blocklyTreeIconClosedRtl {", "background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;",
    "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;",
    "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;",
    "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;",
    "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {",
    "opacity: 0.3;", "-moz-opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;",
    "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;",
    "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];

function zk(a, b) {
    q(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!rc(document, a)) throw "Error: container is not in current document.";
    var c = new ei(b || {}),
        d = a;
    d.setAttribute("dir", "LTR");
    Te = c.s;
    var e = c.sa,
        f = c.j;
    console.log("CSS!!!");
    if (!wk) {
        var h = ".blocklyDraggable {}\n";
        e && (h += yk.join("\n"), Hd.Pe && (h += Hd.Pe.CSS.join("\n")));
        xk = f.replace(/[\\\/]$/, "");
        h = h.replace(/<<<PATH>>>/g, xk);
        e = document.createElement("style");
        document.head.appendChild(e);
        e.appendChild(document.createTextNode(h));
        wk = e.sheet;
        xh(Ij)
    }
    d = L("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, d);
    h = L("defs", {}, d);
    e = String(Math.random()).substring(2);
    f = L("filter", {
        id: "blocklyEmbossFilter" + e
    }, h);
    L("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var l = L("feSpecularLighting", {
            "in": "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        },
        f);
    L("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, l);
    L("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    L("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.W = f.id;
    f = L("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, h);
    L("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    L("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    c.pd = f.id;
    h = L("pattern", {
            id: "blocklyGridPattern" + e,
            patternUnits: "userSpaceOnUse"
        },
        h);
    0 < c.h.length && 0 < c.h.spacing && (L("line", {
        stroke: c.h.colour
    }, h), 1 < c.h.length && L("line", {
        stroke: c.h.colour
    }, h));
    c.u = h;
    c = Ak(d, c);
    Bk(c);
    c.$c();
    O(d, "focus", c, c.$c);
    Ck(c);
    return c
}

function Ak(a, b) {
    b.Ib = null;
    b.Ea = Dk;
    b.Ec = Ek;
    var c = new fi(b);
    c.scale = b.g.Ti;
    a.appendChild(gi(c, "blocklyMainBackground"));
    c.translate(0, 0);
    c.$c();
    b.i || b.H || c.Pb(function() {
        if (0 == K) {
            var a = c.Ea(),
                e = a.Ca + a.Ia,
                f = a.Kb + a.Ka;
            if (a.ib < f || a.ib + a.Sa > a.wa + f || a.hb < (b.s ? a.Ca : e) || a.hb + a.Ta > (b.s ? a.Y : a.Y + e))
                for (var h = Og(c, !1), l = 0, m; m = h[l]; l++) {
                    var n = m.oa(),
                        p = Ei(m),
                        r = f + 25 - p.height - n.y;
                    0 < r && m.moveBy(0, r);
                    r = f + a.wa - 25 - n.y;
                    0 > r && m.moveBy(0, r);
                    r = 25 + e - n.x - (b.s ? 0 : p.width);
                    0 < r && m.moveBy(r, 0);
                    n = e + a.Y - 25 - n.x + (b.s ? p.width : 0);
                    0 > n &&
                        m.moveBy(n, 0)
                }
        }
    });
    Ck(c);
    N || (N = y("div", "blocklyWidgetDiv"), document.body.appendChild(N));
    aj || (aj = y("div", "blocklyTooltipDiv"), document.body.appendChild(aj));
    return c
}

function Bk(a) {
    var b = a.options,
        c = Rh(a);
    O(c, "contextmenu", null, function(a) {
        wh(a) || a.preventDefault()
    });
    O(window, "resize", null, function() {
        Ah(!0);
        Ck(a)
    });
    Fk();
    b.A && (a.S ? a.S.P(a) : a.X && (a.X.P(a), a.X.show(b.A.childNodes), Gk(a.X), a.scrollX = a.X.V, 3 == b.aa && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.H && (a.Aa = new Gh(a), a.Aa.resize());
    b.Ha && Hk(b.j, a)
}

function Fk() {
    Jd || (O(document, "keydown", null, Ik), O(document, "touchend", null, Qj), O(document, "touchcancel", null, Qj), document.addEventListener("mouseup", Ai, !1), Nb && O(window, "orientationchange", document, function() {
        Ck(Ii)
    }));
    Jd = !0
}

function Hk(a, b) {
    function c() {
        for (; d.length;) Q(d.pop());
        for (var a in b.G) {
            var c = b.G[a];
            c.volume = .01;
            c.play();
            c.pause();
            if (Nb || Mb) break
        }
    }
    Fi(b, [a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    Fi(b, [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    Fi(b, [a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var d = [];
    d.push(O(document, "mousemove", null, c));
    d.push(O(document, "touchstart", null, c))
};

function Jk() {}

function Kk() {
    var a = W,
        b = T;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = Ii);
    var c = [];
    a.P(b);
    for (var b = Og(b, !0), d = 0, e; e = b[d]; d++) {
        var f = Lk(a, e);
        da(f) && (f = f[0]);
        f && (e.K && a.j && (f = a.j(f)), c.push(f))
    }
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n");
    return c = c.replace(/[ \t]+\n/g, "\n")
}

function Mk(a, b) {
    return b + a.replace(/\n(.)/g, "\n" + b + "$1")
}

function Lk(a, b) {
    if (!b) return "";
    if (b.disabled) return Lk(a, Pd(b));
    var c = a[b.type].call(b, b);
    if (da(c)) return [a.u(b, c[0]), c[1]];
    if (q(c)) return a.u(b, c);
    if (null === c) return ""
}

function Nk(a, b) {
    var c = jh(a, b);
    (c = Lk(W, c && c.I && G(c.I))) && (c = Mk(c, "  "));
    return c
}
Jk.prototype.i = "";

function Ok(a) {
    var b = W;
    b.i += a + ","
};
var Fh = 5,
    ne = 20,
    Ud = 250,
    Kj = 30,
    Hi = 100,
    $h = 96,
    ai = 124,
    bi = "sprites.png",
    Ld = [, 2, 1, 4, 3];

function Pk(a, b) {
    this.i = b || "";
    this.h = Object.create(null);
    if (a)
        for (var c = a.split(","), d = 0; d < c.length; d++) this.h[c[d]] = !0;
    this.reset()
}
Pk.prototype.reset = function() {
    this.jb = Object.create(null);
    this.g = Object.create(null)
};
Pk.prototype.getName = function(a, b) {
    var c = a.toLowerCase() + "_" + b,
        d = "VARIABLE" == b ? this.i : "";
    if (c in this.jb) return d + this.jb[c];
    var e;
    (e = a) ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(e[0]) && (e = "my_" + e)) : e = "unnamed";
    for (var f = ""; this.g[e + f] || e + f in this.h;) f = f ? f + 1 : 2;
    e += f;
    this.g[e] = !0;
    e = ("VARIABLE" == b ? this.i : "") + e;
    this.jb[c] = e.substr(d.length);
    return e
};

function Qk(a) {
    a = a.Rb();
    for (var b = [], c = [], d = 0; d < a.length; d++)
        if (a[d].Sd) {
            var e = a[d].Sd();
            e && (e[2] ? b.push(e) : c.push(e))
        }
    c.sort(Rk);
    b.sort(Rk);
    return [c, b]
}

function Rk(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
}

function Sk(a) {
    function b(a, b) {
        for (var d = 0; d < a.length; d++) {
            var l = a[d][0],
                m = a[d][1],
                n = y("block");
            n.setAttribute("type", b);
            n.setAttribute("gap", 16);
            var p = y("mutation");
            p.setAttribute("name", l);
            n.appendChild(p);
            for (l = 0; l < m.length; l++) {
                var r = y("arg");
                r.setAttribute("name", m[l]);
                p.appendChild(r)
            }
            c.push(n)
        }
    }
    var c = [];
    if (Ni.procedures_defnoreturn) {
        var d = y("block");
        d.setAttribute("type", "procedures_defnoreturn");
        d.setAttribute("gap", 16);
        c.push(d)
    }
    Ni.procedures_defreturn && (d = y("block"), d.setAttribute("type",
        "procedures_defreturn"), d.setAttribute("gap", 16), c.push(d));
    Ni.procedures_ifreturn && (d = y("block"), d.setAttribute("type", "procedures_ifreturn"), d.setAttribute("gap", 16), c.push(d));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = Qk(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};

function Fg(a, b) {
    var c = a.getAttribute("class") || ""; - 1 == (" " + c + " ").indexOf(" " + b + " ") && (c && (c += " "), a.setAttribute("class", c + b))
}

function Li(a, b) {
    var c = a.getAttribute("class");
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) {
        for (var c = c.split(/\s+/), d = 0; d < c.length; d++) c[d] && c[d] != b || (c.splice(d, 1), d--);
        c.length ? a.setAttribute("class", c.join(" ")) : a.removeAttribute("class")
    }
}

function O(a, b, c, d) {
    var e = c ? function(a) {
        d.call(c, a)
    } : d;
    a.addEventListener(b, e, !1);
    var f = [
        [a, b, e]
    ];
    if (b in yi)
        for (var e = function(a) {
                if (1 == a.changedTouches.length) {
                    var b = a.changedTouches[0];
                    a.clientX = b.clientX;
                    a.clientY = b.clientY
                }
                d.call(c, a);
                a.preventDefault()
            }, h = 0, l; l = yi[b][h]; h++) a.addEventListener(l, e, !1), f.push([a, l, e]);
    return f
}
var yi = {};
kd && (yi = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});

function Q(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
}

function Gg(a) {
    a.preventDefault();
    a.stopPropagation()
}

function wh(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
}

function te(a) {
    var b = new w(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (a = (a = a.getAttribute("transform")) && a.match(Tk)) b.x += parseFloat(a[1]), a[3] && (b.y += parseFloat(a[3]));
    return b
}
var Tk = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;

function Sh(a, b) {
    var c = 0,
        d = 0,
        e = 1;
    if (rc(b.g, a) || rc(b.i, a)) e = b.scale;
    do {
        var f = te(a);
        if (a == b.g || a == b.i) e = 1;
        c += f.x * e;
        d += f.y * e;
        a = a.parentNode
    } while (a && a != Rh(b));
    return new w(c, d)
}

function L(a, b, c) {
    a = document.createElementNS("http://www.w3.org/2000/svg", a);
    for (var d in b) a.setAttribute(d, b[d]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
}

function vh(a) {
    return a.ctrlKey && Kb ? !0 : 2 == a.button
}

function Qh(a, b) {
    var c = b.createSVGPoint();
    c.x = a.clientX;
    c.y = a.clientY;
    var d = b.getScreenCTM(),
        d = d.inverse();
    return c.matrixTransform(d)
}

function lk(a) {
    if (!a.length) return 0;
    for (var b = a[0].length, c = 1; c < a.length; c++) b = Math.min(b, a[c].length);
    return b
}

function mk(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || lk(a), e = 0; e < d; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c;
    return d
}

function nk(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || lk(a), e = 0; e < d; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
    return d
}

function Lg() {
    for (var a = Uk.length, b = [], c = 0; 20 > c; c++) b[c] = Uk.charAt(Math.random() * a);
    return b.join("")
}
var Uk = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var N = null,
    gj = null,
    Vk = null;

function Dg(a, b, c) {
    gk();
    gj = a;
    Vk = c;
    N.style.top = Ee().y + "px";
    N.style.direction = b ? "rtl" : "ltr";
    N.style.display = "block"
}

function gk() {
    gj && (gj = null, N.style.display = "none", N.style.left = "", N.style.top = "", N.style.height = "", Vk && Vk(), Vk = null, pc(N))
}

function Ig(a) {
    gj == a && gk()
}

function Hg(a, b, c, d, e) {
    b < d.y && (b = d.y);
    e ? a > c.width + d.x && (a = c.width + d.x) : a < d.x && (a = d.x);
    N.style.left = a + "px";
    N.style.top = b + "px";
    N.style.height = c.height - b + d.y + "px"
};

function Wk(a, b) {
    this.A = L("tspan", {}, null);
    this.A.appendChild(document.createTextNode("\u00b0"));
    Wk.v.constructor.call(this, a, b)
}
t(Wk, Lj);
Wk.prototype.Jd = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = Xk.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = Xk;
    Wk.v.Jd.call(this, b)
};
Wk.prototype.Gc = function() {
    Wk.v.Gc.call(this, Jb || Lb || Nb);
    var a = N;
    if (a.firstChild) {
        var a = L("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: "100px",
                width: "100px"
            }, a),
            b = L("circle", {
                cx: 50,
                cy: 50,
                r: 49,
                "class": "blocklyAngleCircle"
            }, a);
        this.i = L("path", {
            "class": "blocklyAngleGauge"
        }, a);
        this.F = L("line", {
            x1: 50,
            y1: 50,
            "class": "blocklyAngleLine"
        }, a);
        for (var c = 0; 360 > c; c += 15) L("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ?
                10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        O(a, "click", this, gk);
        O(b, "mousemove", this, this.W);
        O(this.i, "mousemove", this, this.W);
        Yk(this)
    }
};
Wk.prototype.W = function(a) {
    var b = this.i.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = Xk(b), dk.value = b, this.ra(b), fk(this), this.Fe())
};
Wk.prototype.wb = function(a) {
    Wk.v.wb.call(this, a);
    this.h && (Yk(this), this.D.s ? this.h.insertBefore(this.A, this.h.firstChild) : this.h.appendChild(this.A), this.u.width = 0)
};

function Yk(a) {
    if (a.i) {
        var b = (Number(a.mc()) + 0) * Math.PI / 180,
            c = ["M ", 50, ",", 50],
            d = 50,
            e = 50;
        if (!isNaN(b)) {
            var f = 0 * Math.PI / 180,
                h = 49 * Math.cos(f),
                l = -49 * Math.sin(f),
                d = d + 49 * Math.cos(b),
                e = e - 49 * Math.sin(b);
            c.push(" l ", h, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - f) / Math.PI) % 2), " ", Number(!1), " ", d, ",", e, " z")
        }
        a.i.setAttribute("d", c.join(""));
        a.F.setAttribute("x2", d);
        a.F.setAttribute("y2", e)
    }
}

function Xk(a) {
    null === a ? a = null : (a = String(a), a = a.replace(/O/ig, "0"), a = a.replace(/,/g, ""), a = parseFloat(a || 0), a = isNaN(a) ? null : String(a));
    null !== a && (a %= 360, 0 > a && (a += 360), 360 < a && (a -= 360), a = String(a));
    return a
};

function Zk(a, b, c) {
    Se.call(this, c);
    this.h = b || $k;
    a instanceof rb || (a = ub(a), b = tb(a).replace(/(\r\n|\r|\n)/g, "<br>"), a = vb(b, a.Rc()));
    this.ba = a;
    this.W = this.Qa = !1;
    this.Sd = Bb;
    this.be = -1
}
t(Zk, Se);
var al = {};
g = Zk.prototype;
g.va = function() {
    Zk.v.va.call(this);
    this.Ic && (bl(this.Ic.L, this), this.Ic = null);
    this.g = null
};
g.we = function() {
    var a = this.C();
    if (a) {
        var b = cl(this);
        b && !b.id && (b.id = Ve(this) + ".label");
        pf(a, "treeitem");
        qf(a, "selected", !1);
        qf(a, "expanded", !1);
        qf(a, "level", this.Qc());
        b && qf(a, "labelledby", b.id);
        (a = this.le()) && pf(a, "presentation");
        (a = this.ke()) && pf(a, "presentation");
        if (a = dl(this))
            if (pf(a, "group"), a.hasChildNodes())
                for (a = af(this), b = 1; b <= a; b++) {
                    var c = bf(this, b - 1).C();
                    qf(c, "setsize", a);
                    qf(c, "posinset", b)
                }
    }
};
g.Tc = function() {
    var a = this.Je(),
        b = this.i.g,
        c = b.createElement("DIV");
    u ? (Zb(c, Ab(Cb, a)), c.removeChild(c.firstChild)) : Zb(c, a);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        c = a
    }
    this.g = c
};
g.Da = function() {
    Zk.v.Da.call(this);
    al[Ve(this)] = this;
    this.we()
};
g.mb = function() {
    Zk.v.mb.call(this);
    delete al[Ve(this)]
};
g.Oc = function(a, b) {
    var c = bf(this, b - 1),
        d = bf(this, b);
    Zk.v.Oc.call(this, a, b);
    a.Bc = c;
    a.Ab = d;
    c ? c.Ab = a : this.Mc = a;
    d ? d.Bc = a : this.ld = a;
    var e = this.Xa();
    e && el(a, e);
    fl(a, this.Qc() + 1);
    if (this.C() && (this.hd(), this.Ma())) {
        e = dl(this);
        a.C() || a.Tc();
        var f = a.C(),
            h = d && d.C();
        e.insertBefore(f, h);
        this.Z && a.Da();
        d || (c ? c.hd() : (Je(e, !0), this.Bb(this.Ma())))
    }
};
g.add = function(a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.Oc(a, b ? ef(this, b) : af(this));
    return a
};
g.removeChild = function(a) {
    var b = this.Xa(),
        c = b ? b.u : null;
    if (c == a || a.contains(c)) b.Wb ? (this.select(), Gd(this.Mi, 10, this)) : this.select();
    Zk.v.removeChild.call(this, a);
    this.ld == a && (this.ld = a.Bc);
    this.Mc == a && (this.Mc = a.Ab);
    a.Bc && (a.Bc.Ab = a.Ab);
    a.Ab && (a.Ab.Bc = a.Bc);
    c = !a.Ab;
    a.Ic = null;
    a.be = -1;
    if (b && (bl(b.L, a), this.Z)) {
        b = dl(this);
        if (a.Z) {
            var d = a.C();
            b.removeChild(d);
            a.mb()
        }
        c && (c = bf(this, af(this) - 1)) && c.hd();
        df(this) || (b.style.display = "none", this.hd(), this.le().className = this.fe())
    }
    return a
};
g.Mi = function() {
    this.select()
};
g.Qc = function() {
    var a = this.be;
    0 > a && (a = (a = this.getParent()) ? a.Qc() + 1 : 0, fl(this, a));
    return a
};

function fl(a, b) {
    if (b != a.be) {
        a.be = b;
        var c = gl(a);
        if (c) {
            var d = hl(a) + "px";
            cf(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
        }
        $e(a, function(a) {
            fl(a, b + 1)
        })
    }
}
g.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
g.Zb = function() {
    var a = [];
    $e(this, function(b) {
        a.push(b)
    });
    return a
};
g.select = function() {
    var a = this.Xa();
    a && a.eb(this)
};

function il(a, b) {
    if (a.Qa != b) {
        a.Qa = b;
        jl(a);
        var c = a.C();
        c && (qf(c, "selected", b), b && (c = a.Xa().C(), qf(c, "activedescendant", Ve(a))))
    }
}
g.Ma = function() {
    return this.W
};
g.Bb = function(a) {
    var b = a != this.W;
    if (!b || Ed(this, a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.W = a;
        c = this.Xa();
        var d = this.C();
        if (df(this)) {
            if (!a && c && this.contains(c.u) && this.select(), d) {
                if (c = dl(this))
                    if (Je(c, a), a && this.Z && !c.hasChildNodes()) {
                        var e = [];
                        $e(this, function(a) {
                            e.push(a.Je())
                        });
                        Zb(c, Ab(e));
                        $e(this, function(a) {
                            a.Da()
                        })
                    }
                this.hd()
            }
        } else(c = dl(this)) && Je(c, !1);
        d && (this.le().className = this.fe(), qf(d, "expanded", a));
        b && Ed(this, a ? "expand" : "collapse")
    }
};
g.Kf = function() {
    var a = this.getParent();
    a && (a.Bb(!0), a.Kf())
};
g.Je = function() {
    var a = !this.Xa().sa || (this.getParent(), 0) ? this.h.ng : this.h.lg,
        b = this.Ma() && df(this),
        a = {
            "class": a,
            style: kl(this)
        },
        c = [];
    b && $e(this, function(a) {
        c.push(a.Je())
    });
    b = zb("div", a, c);
    return zb("div", {
        "class": this.h.vg,
        id: Ve(this)
    }, [ll(this), b])
};

function hl(a) {
    return Math.max(0, (a.Qc() - 1) * a.h.uf)
}

function ll(a) {
    var b = {};
    b["padding-" + (cf(a) ? "right" : "left")] = hl(a) + "px";
    var b = {
            "class": a.sd(),
            style: b
        },
        c = a.jf(),
        d = zb("span", {
            style: {
                display: "inline-block"
            },
            "class": a.fe()
        }),
        e = zb("span", {
            "class": a.h.wg,
            title: null
        }, a.ba);
    a = Ab(e, zb("span", {}, a.Sd));
    return zb("div", b, [c, d, a])
}
g.sd = function() {
    return this.h.bf + (this.Qa ? " " + this.h.yg : "")
};
g.jf = function() {
    return zb("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": ml(this)
    })
};

function ml(a) {
    var b = a.Xa(),
        c = !b.sa || b == a.getParent() && !1,
        d = a.h,
        e = new pa;
    e.Ya(d.uc, " ", d.Zh, " ");
    if (df(a)) {
        var f = 0;
        b.qc && (f = a.Ma() ? 2 : 1);
        c || (f = a.Ab ? f + 8 : f + 4);
        switch (f) {
            case 1:
                e.Ya(d.ci);
                break;
            case 2:
                e.Ya(d.bi);
                break;
            case 4:
                e.Ya(d.rg);
                break;
            case 5:
                e.Ya(d.ai);
                break;
            case 6:
                e.Ya(d.$h);
                break;
            case 8:
                e.Ya(d.sg);
                break;
            case 9:
                e.Ya(d.ei);
                break;
            case 10:
                e.Ya(d.di);
                break;
            default:
                e.Ya(d.qg)
        }
    } else c ? e.Ya(d.qg) : a.Ab ? e.Ya(d.sg) : e.Ya(d.rg);
    return e.toString()
}

function kl(a) {
    var b = a.Ma() && df(a);
    return fb({
        "background-position": nl(a),
        display: b ? null : "none"
    })
}

function nl(a) {
    return (a.Ab ? (a.Qc() - 1) * a.h.uf : "-100") + "px 0"
}
g.C = function() {
    var a = Zk.v.C.call(this);
    a || (this.g = a = this.i.C(Ve(this)));
    return a
};

function gl(a) {
    return (a = a.C()) ? a.firstChild : null
}
g.ke = function() {
    var a = gl(this);
    return a ? a.firstChild : null
};
g.le = function() {
    var a = gl(this);
    return a ? a.childNodes[1] : null
};

function cl(a) {
    return (a = gl(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function dl(a) {
    return (a = a.C()) ? a.lastChild : null
}

function jl(a) {
    var b = gl(a);
    b && (b.className = a.sd())
}
g.hd = function() {
    var a = this.ke();
    a && (a.className = ml(this));
    if (a = dl(this)) a.style.backgroundPosition = nl(this)
};
g.Cf = function(a) {
    "expand" == a.target.getAttribute("type") && df(this) ? this.Bb(!this.Ma()) : (this.select(), jl(this))
};
g.Wg = function(a) {
    "expand" == a.target.getAttribute("type") && df(this) || this.Bb(!this.Ma())
};

function ol(a) {
    return a.Ma() && df(a) ? ol(bf(a, af(a) - 1)) : a
}

function el(a, b) {
    a.Ic != b && (a.Ic = b, pl(b.L, a), $e(a, function(a) {
        el(a, b)
    }))
}
var $k = {
    uf: 19,
    xg: "goog-tree-root goog-tree-item",
    ug: "goog-tree-hide-root",
    vg: "goog-tree-item",
    lg: "goog-tree-children",
    ng: "goog-tree-children-nolines",
    bf: "goog-tree-row",
    wg: "goog-tree-item-label",
    uc: "goog-tree-icon",
    Zh: "goog-tree-expand-icon",
    ci: "goog-tree-expand-icon-plus",
    bi: "goog-tree-expand-icon-minus",
    ei: "goog-tree-expand-icon-tplus",
    di: "goog-tree-expand-icon-tminus",
    ai: "goog-tree-expand-icon-lplus",
    $h: "goog-tree-expand-icon-lminus",
    sg: "goog-tree-expand-icon-t",
    rg: "goog-tree-expand-icon-l",
    qg: "goog-tree-expand-icon-blank",
    Ze: "goog-tree-expanded-folder-icon",
    og: "goog-tree-collapsed-folder-icon",
    $e: "goog-tree-file-icon",
    tg: "goog-tree-expanded-folder-icon",
    pg: "goog-tree-collapsed-folder-icon",
    yg: "selected"
};

function ql(a, b, c) {
    Zk.call(this, a, b, c)
}
t(ql, Zk);
ql.prototype.Xa = function() {
    if (this.Ic) return this.Ic;
    var a = this.getParent();
    return a && (a = a.Xa()) ? (el(this, a), a) : null
};
ql.prototype.fe = function() {
    var a = this.Ma(),
        b = this.Td;
    if (a && b) return b;
    b = this.Zf;
    if (!a && b) return b;
    b = this.h;
    if (df(this)) {
        if (a && b.Ze) return b.uc + " " + b.Ze;
        if (!a && b.og) return b.uc + " " + b.og
    } else if (b.$e) return b.uc + " " + b.$e;
    return ""
};
var Sd = "",
    Rd = !0,
    I = 0,
    Sg = [];

function J(a) {
    0 == I && (Sg.length || setTimeout(rl, 0), Sg.push(a))
}

function rl() {
    for (var a = Rg(Sg, !0), b = Sg.length = 0, c; c = a[b]; b++) {
        var d = Mg[c.g] || null;
        if (d) {
            c.Ef && (d.u.push(c), d.H.length = 0, 1024 < d.u.length && d.u.unshift());
            for (var e = 0, f; f = d.F[e]; e++) f(c)
        }
    }
}

function Rg(a, b) {
    var c = Ya(a);
    b || c.reverse();
    for (var d = 0, e; e = c[d]; d++)
        for (var f = d + 1, h; h = c[f]; f++) e.type == h.type && e.h == h.h && e.g == h.g && ("move" == e.type ? (e.A = h.A, e.u = h.u, e.j = h.j, c.splice(f, 1), f--) : "change" == e.type && e.element == h.element && e.name == h.name ? (e.newValue = h.newValue, c.splice(f, 1), f--) : "ui" != e.type || "click" != h.element || "commentOpen" != e.element && "mutatorOpen" != e.element && "warningOpen" != e.element || (e.newValue = h.newValue, c.splice(f, 1), f--));
    for (d = c.length - 1; 0 <= d; d--) c[d].H() && c.splice(d, 1);
    b || c.reverse();
    for (d = 1; e = c[d]; d++) "change" == e.type && "mutation" == e.element && c.unshift(c.splice(d, 1)[0]);
    return c
}

function H(a) {
    Sd = "boolean" == typeof a ? a ? Lg() : "" : a
}

function sl(a) {
    var b = [];
    a = a.Wa();
    for (var c = 0, d; d = a[c]; c++) b[c] = d.id;
    return b
}

function tl(a) {
    a && (this.h = a.id, this.g = a.w.id);
    this.F = Sd;
    this.Ef = Rd
}
tl.prototype.H = function() {
    return !1
};
tl.prototype.i = function() {};

function Jg(a) {
    a && (Jg.v.constructor.call(this, a), this.J = Ug(a), this.G = sl(a))
}
t(Jg, tl);
Jg.prototype.type = "create";
Jg.prototype.i = function(a) {
    var b = Mg[this.g] || null;
    if (a) a = y("xml"), a.appendChild(this.J), ah(a, b);
    else {
        a = 0;
        for (var c; c = this.G[a]; a++) {
            var d = b.Db[c] || null;
            d ? d.B(!1, !1) : c == this.h && console.warn("Can't uncreate non-existant block: " + c)
        }
    }
};

function vj(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        vj.v.constructor.call(this, a);
        this.J = Ug(a);
        this.G = sl(a)
    }
}
t(vj, tl);
vj.prototype.type = "delete";
vj.prototype.i = function(a) {
    var b = Mg[this.g] || null;
    if (a) {
        a = 0;
        for (var c; c = this.G[a]; a++) {
            var d = b.Db[c] || null;
            d ? d.B(!1, !1) : c == this.h && console.warn("Can't delete non-existant block: " + c)
        }
    } else a = y("xml"), a.appendChild(this.J), ah(a, b)
};

function Qi(a, b, c, d, e) {
    a && (Qi.v.constructor.call(this, a), this.element = b, this.name = c, this.G = d, this.newValue = e)
}
t(Qi, tl);
Qi.prototype.type = "change";
Qi.prototype.H = function() {
    return this.G == this.newValue
};
Qi.prototype.i = function(a) {
    var b = (Mg[this.g] || null).Db[this.h] || null;
    if (b) switch (b.Ug && b.Ug.$(!1), a = a ? this.newValue : this.G, this.element) {
        case "field":
            (b = ih(b, this.name)) ? b.ra(a): console.warn("Can't set non-existant field: " + this.name);
            break;
        case "comment":
            b.Hd(a || null);
            break;
        case "collapsed":
            b.Dc(a);
            break;
        case "disabled":
            b.dd(a);
            break;
        case "inline":
            b.ed(a);
            break;
        case "mutation":
            var c = "";
            b.bb && (c = (c = b.bb()) && Zg(c));
            if (b.Pa) {
                a = a || "<mutation></mutation>";
                var d = $g("<xml>" + a + "</xml>");
                b.Pa(d.firstChild)
            }
            J(new Qi(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existant block: " + this.h)
};

function Wd(a) {
    a && (Wd.v.constructor.call(this, a), a = ul(this), this.L = a.Yg, this.J = a.Pg, this.G = a.kg)
}
t(Wd, tl);
Wd.prototype.type = "move";

function Yd(a) {
    var b = ul(a);
    a.A = b.Yg;
    a.u = b.Pg;
    a.j = b.kg
}

function ul(a) {
    var b = (Mg[a.g] || null).Db[a.h] || null;
    a = {};
    var c = b.getParent();
    if (c) {
        a.Yg = c.id;
        a: {
            for (var d = 0, e; e = c.h[d]; d++)
                if (e.I && G(e.I) == b) {
                    b = e;
                    break a
                }
            b = null
        }
        b && (a.Pg = b.name)
    } else a.kg = b.oa();
    return a
}
Wd.prototype.H = function() {
    return this.L == this.A && this.J == this.u && cc(this.G, this.j)
};
Wd.prototype.i = function(a) {
    var b = Mg[this.g] || null,
        c = b.Db[this.h] || null;
    if (c) {
        var d = a ? this.A : this.L,
            e = a ? this.u : this.J;
        a = a ? this.j : this.G;
        var f = null;
        if (d && (f = b.Db[d] || null, !f)) {
            console.warn("Can't connect to non-existant block: " + d);
            return
        }
        c.getParent() && je(c);
        if (a) e = c.oa(), c.moveBy(a.x - e.x, a.y - e.y);
        else {
            var c = c.K || c.N,
                h;
            if (e) {
                if (b = jh(f, e)) h = b.I
            } else 4 == c.type && (h = f.g);
            h ? c.connect(h) : console.warn("Can't connect to non-existant input: " + e)
        }
    } else console.warn("Can't move non-existant block: " + this.h)
};

function Ri(a, b, c, d) {
    Ri.v.constructor.call(this, a);
    this.element = b;
    this.newValue = d;
    this.Ef = !1
}
t(Ri, tl);
Ri.prototype.type = "ui";

function ni(a) {
    a.Ea = this.ne.bind(this);
    a.Ec = this.Si.bind(this);
    this.o = new fi(a);
    this.o.vf = !0;
    this.s = !!a.s;
    this.g = a.dc;
    this.i = a.aa;
    this.J = [];
    this.G = [];
    this.j = [];
    this.L = []
}
var vl, wl, xl, yl, zl, Al;
g = ni.prototype;
g.nd = !0;
g.R = 8;
g.Ob = ni.prototype.R;
g.V = 0;
g.Cb = 0;

function oi(a) {
    a.m = L("g", {
        "class": "blocklyFlyout"
    }, null);
    a.h = L("path", {
        "class": "blocklyFlyoutBackground"
    }, a.m);
    a.m.appendChild(gi(a.o));
    return a.m
}
g.P = function(a) {
    this.A = a;
    this.o.L = a;
    this.u = new Hh(this.o, this.g, !1);
    this.Ub();
    Array.prototype.push.apply(this.J, O(this.m, "wheel", this, this.Yi));
    this.nd || (this.F = this.hf.bind(this), this.A.Pb(this.F));
    Array.prototype.push.apply(this.J, O(this.m, "mousedown", this, this.nh))
};
g.B = function() {
    this.Ub();
    Q(this.J);
    this.F && (this.A.Fd(this.F), this.F = null);
    this.u && (this.u.B(), this.u = null);
    this.o && (this.o.L = null, this.o.B(), this.o = null);
    this.m && (A(this.m), this.m = null);
    this.A = this.h = null
};
g.yb = function() {
    return this.V
};
g.wc = function() {
    return this.Cb
};
g.ne = function() {
    if (!Bl(this)) return null;
    try {
        var a = this.o.g.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = 2,
        c = 2;
    if (this.g) {
        1 == this.i && (b = 0);
        var d = this.Cb;
        0 == this.i && (d += this.Ob - 2);
        var e = this.V - 4
    } else c = 0, d = this.Cb - 4, e = this.V, this.s || (e -= 2);
    return {
        wa: d,
        Y: e,
        Sa: (a.height + 2 * this.Ob) * this.o.scale,
        Ta: (a.width + 2 * this.Ob) * this.o.scale,
        Kb: -this.o.scrollY,
        Ca: -this.o.scrollX,
        ib: 0,
        hb: 0,
        Ka: b,
        Ia: c
    }
};
g.Si = function(a) {
    var b = this.ne();
    b && (!this.g && fa(a.y) ? this.o.scrollY = -b.Sa * a.y : this.g && fa(a.x) && (this.o.scrollX = -b.Ta * a.x), this.o.translate(this.o.scrollX + b.Ia, this.o.scrollY + b.Ka))
};
g.position = function() {
    if (Bl(this)) {
        var a = this.A.Ea();
        if (a) {
            var b = this.g ? a.Y : this.V,
                b = b - this.R;
            3 == this.i && (b *= -1);
            var c = this.g ? this.Cb : a.wa;
            if (this.g) {
                var d = 0 == this.i,
                    e = ["M 0," + (d ? 0 : this.R)];
                d ? (e.push("h", b + this.R), e.push("v", c), e.push("a", this.R, this.R, 0, 0, 1, -this.R, this.R), e.push("h", -1 * (b - this.R)), e.push("a", this.R, this.R, 0, 0, 1, -this.R, -this.R)) : (e.push("a", this.R, this.R, 0, 0, 1, this.R, -this.R), e.push("h", b - this.R), e.push("a", this.R, this.R, 0, 0, 1, this.R, this.R), e.push("v", c - this.R), e.push("h", -b - this.R))
            } else d =
                3 == this.i, e = ["M " + (d ? this.V : 0) + ",0"], e.push("h", b), e.push("a", this.R, this.R, 0, 0, d ? 0 : 1, d ? -this.R : this.R, this.R), e.push("v", Math.max(0, c - 2 * this.R)), e.push("a", this.R, this.R, 0, 0, d ? 0 : 1, d ? this.R : -this.R, this.R), e.push("h", -b);
            e.push("z");
            this.h.setAttribute("d", e.join(" "));
            b = a.Ia;
            3 == this.i && (b += a.Y, b -= this.V);
            c = a.Ka;
            1 == this.i && (c += a.wa, c -= this.Cb);
            this.m.setAttribute("transform", "translate(" + b + "," + c + ")");
            this.g ? this.V = a.Y : this.Cb = a.wa;
            this.u && this.u.resize()
        }
    }
};

function Gk(a) {
    a.u.set(a.g && a.s ? Infinity : 0)
}
g.Yi = function(a) {
    var b = this.g ? a.deltaX : a.deltaY;
    if (b) {
        Ib && (b *= 10);
        var c = this.ne(),
            b = this.g ? c.Ca + b : c.Kb + b,
            b = Math.min(b, this.g ? c.Ta - c.Y : c.Sa - c.wa),
            b = Math.max(b, 0);
        this.u.set(b)
    }
    a.preventDefault();
    a.stopPropagation()
};

function Bl(a) {
    return a.m && "block" == a.m.style.display
}
g.Ub = function() {
    if (Bl(this)) {
        this.m.style.display = "none";
        for (var a = 0, b; b = this.j[a]; a++) Q(b);
        this.j.length = 0;
        this.H && (this.o.Fd(this.H), this.H = null)
    }
};
g.show = function(a) {
    this.Ub();
    Cl(this);
    "VARIABLE" == a ? a = rk(this.o.L) : "PROCEDURE" == a && (a = Sk(this.o.L));
    this.m.style.display = "block";
    for (var b = [], c = [], d = this.L.length = 0, e; e = a[d]; d++)
        if (e.tagName && "BLOCK" == e.tagName.toUpperCase()) {
            var f = he(e, this.o);
            f.disabled && this.L.push(f);
            b.push(f);
            e = parseInt(e.getAttribute("gap"), 10);
            c.push(isNaN(e) ? 3 * this.Ob : e)
        }
    Dl(this, b, c);
    this.j.push(O(this.h, "mouseover", this, function() {
        for (var a = Og(this.o, !1), b = 0, c; c = a[b]; b++) c.Ee()
    }));
    this.g ? this.Cb = 0 : this.V = 0;
    this.Gf();
    El(this,
        Og(this.o, !1));
    this.hf();
    this.position();
    this.H = this.Gf.bind(this);
    this.o.Pb(this.H)
};

function Dl(a, b, c) {
    for (var d = a.Ob * a.o.scale, e = a.s ? d : d + 8, f = 0, h; h = b[f]; f++) {
        for (var l = h.Wa(), m = 0, n; n = l[m]; m++) n.A = !0;
        h.U();
        m = h.m;
        l = Ei(h);
        n = h.K ? 8 : 0;
        a.g && (e += n);
        h.moveBy(a.g && a.s ? -e : e, d);
        a.g ? e += l.width + c[f] - n : d += l.height + c[f];
        n = L("rect", {
            "fill-opacity": 0
        }, null);
        n.$a = h;
        bj(n);
        a.o.g.insertBefore(n, h.m);
        h.u = n;
        a.G[f] = n;
        l = a;
        l.nd ? (l.j.push(O(m, "mousedown", null, Fl(l, h))), l.j.push(O(n, "mousedown", null, Fl(l, h)))) : (l.j.push(O(m, "mousedown", null, Gl(l, h))), l.j.push(O(n, "mousedown", null, Gl(l, h))));
        l.j.push(O(m, "mouseover",
            h, h.Se));
        l.j.push(O(m, "mouseout", h, h.Ee));
        l.j.push(O(n, "mouseover", h, h.Se));
        l.j.push(O(n, "mouseout", h, h.Ee))
    }
}

function Cl(a) {
    for (var b = Og(a.o, !1), c = 0, d; d = b[c]; c++) d.w == a.o && d.B(!1, !1);
    for (b = 0; c = a.G[b]; b++) A(c);
    a.G.length = 0
}

function Gl(a, b) {
    return function(c) {
        ui();
        Ah();
        vh(c) ? Mj(b, c) : (xh(yh), vl = c, wl = b, xl = a, yl = O(document, "mouseup", this, a.ph), zl = O(document, "mousemove", this, a.Ji));
        c.stopPropagation()
    }
}
g.nh = function(a) {
    vh(a) || (Ah(!0), Hl(), this.ba = a.clientY, this.W = a.clientX, Al = O(document, "mousemove", this, this.oh), yl = O(document, "mouseup", this, Hl), a.preventDefault(), a.stopPropagation())
};
g.ph = function() {
    2 == K || gj || J(new Ri(wl, "click", 0, void 0));
    ui()
};
g.oh = function(a) {
    var b = this.ne();
    if (this.g) {
        if (!(0 > b.Ta - b.Y)) {
            var c = a.clientX - this.W;
            this.W = a.clientX;
            a = b.Ca - c;
            a = Math.min(Math.max(a, 0), b.Ta - b.Y);
            this.u.set(a)
        }
    } else 0 > b.Sa - b.wa || (c = a.clientY - this.ba, this.ba = a.clientY, a = b.Kb - c, a = Math.min(Math.max(a, 0), b.Sa - b.wa), this.u.set(a))
};
g.Ji = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = a.clientX - vl.clientX;
        a = a.clientY - vl.clientY;
        Math.sqrt(b * b + a * a) > Fh && Fl(xl, wl)(vl)
    }
};

function Fl(a, b) {
    return function(c) {
        if (!vh(c) && !b.disabled) {
            I++;
            var d = a.A,
                e = b.m;
            if (!e) throw "originBlock is not rendered.";
            var e = Sh(e, d),
                f = a.o.scrollX,
                h = a.o.scale;
            e.x += f / h - f;
            3 == a.i && (f = d.Ea().Y - a.V, h = d.scale, e.x += f / h - f);
            f = a.o.scrollY;
            h = a.o.scale;
            e.y += f / h - f;
            1 == a.i && (f = d.Ea().wa - a.Cb, h = d.scale, e.y += f / h - f);
            h = Nd(b);
            h = he(h, d);
            f = h.m;
            if (!f) throw "block is not rendered.";
            f = Sh(f, d);
            f.x += d.scrollX / d.scale - d.scrollX;
            f.y += d.scrollY / d.scale - d.scrollY;
            d.S && !d.Aa && (f.x += d.S.yb() / d.scale, f.y += d.S.wc() / d.scale);
            h.moveBy(e.x -
                f.x, e.y - f.y);
            I--;
            0 == I && (H(!0), J(new Jg(h)));
            a.nd ? a.Ub() : a.hf();
            h.jd(c);
            K = 2;
            Hj(h, !0)
        }
    }
}
g.hf = function() {
    for (var a = Qg(this.A), b = Og(this.o, !1), c = 0, d; d = b[c]; c++)
        if (-1 == this.L.indexOf(d)) {
            var e = d.Wa();
            d.dd(e.length > a)
        }
};
g.rd = function() {
    var a = this.m.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 0 == this.i ? new Ae(-1E9, c - 1E9, 2E9, 1E9 + a) : 1 == this.i ? new Ae(-1E9, c, 2E9, 1E9 + a) : 2 == this.i ? new Ae(b - 1E9, -1E9, 1E9 + d, 2E9) : new Ae(b, -1E9, 1E9 + d, 2E9)
};

function Hl() {
    yl && (Q(yl), yl = null);
    zl && (Q(zl), zl = null);
    Al && (Q(Al), Al = null);
    yl && (Q(yl), yl = null);
    xl = wl = vl = null
}
g.Gf = function() {
    var a = Og(this.o, !1);
    if (this.g) {
        this.o.scale = this.A.scale;
        for (var b = 0, c = 0, d; d = a[c]; c++) b = Math.max(b, Ei(d).height);
        b += 1.5 * this.Ob;
        b *= this.o.scale;
        b += R;
        if (this.Cb != b) {
            for (c = 0; d = a[c]; c++) {
                var e = Ei(d);
                if (d.u) {
                    d.u.setAttribute("width", e.width);
                    d.u.setAttribute("height", e.height);
                    var f = d.K ? 8 : 0,
                        h = d.oa();
                    d.u.setAttribute("y", h.y);
                    d.u.setAttribute("x", this.s ? h.x - e.width + f : h.x - f);
                    (e = d.Wb ? 15 : 0) && d.moveBy(0, e);
                    d.u.setAttribute("y", h.y)
                }
            }
            this.Cb = b;
            gh(this.o)
        }
    } else {
        this.o.scale = this.A.scale;
        for (c =
            b = 0; d = a[c]; c++) h = Ei(d).width, d.K && (h -= 8), b = Math.max(b, h);
        b += 1.5 * this.Ob + 8;
        b *= this.o.scale;
        b += R;
        if (this.V != b) {
            for (c = 0; d = a[c]; c++) h = Ei(d), this.s && (e = d.oa().x, f = b - this.Ob, f /= this.o.scale, f -= 8, d.moveBy(f - e, 0)), d.u && (d.u.setAttribute("width", h.width), d.u.setAttribute("height", h.height), f = d.K ? 8 : 0, e = d.oa(), d.u.setAttribute("x", this.s ? e.x - h.width + f : e.x - f), (h = d.Wb ? 15 : 0) && d.moveBy(0, h), d.u.setAttribute("y", e.y));
            this.V = b;
            gh(this.o)
        }
    }
};

function El(a, b) {
    if (a.g && a.s) {
        a.position();
        try {
            var c = a.o.g.getBBox()
        } catch (f) {
            c = {
                height: 0,
                y: 0,
                width: 0,
                x: 0
            }
        }
        for (var c = Math.max(-c.x + a.Ob, a.V / a.o.scale), d = 0, e; e = b[d]; d++) e.moveBy(c, 0), e.u && e.u.setAttribute("x", c + Number(e.u.getAttribute("x")))
    }
};

function Il(a) {
    if (a.td && "function" == typeof a.td) return a.td();
    if (q(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b
};

function Jl(a) {
    this.i = void 0;
    this.La = {};
    if (a) {
        var b;
        if (a.me && "function" == typeof a.me) b = a.me();
        else if (a.td && "function" == typeof a.td) b = void 0;
        else if (ea(a) || q(a)) {
            b = [];
            for (var c = a.length, d = 0; d < c; d++) b.push(d)
        } else
            for (d in b = [], c = 0, a) b[c++] = d;
        a = Il(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
g = Jl.prototype;
g.set = function(a, b) {
    Kl(this, a, b, !1)
};
g.add = function(a, b) {
    Kl(this, a, b, !0)
};

function Kl(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.La[f] || (a.La[f] = new Jl);
        a = a.La[f]
    }
    if (d && void 0 !== a.i) throw Error('The collection already contains the key "' + b + '"');
    a.i = c
}

function Ll(a, b) {
    var c;
    a: {
        c = a;
        for (var d = 0; d < b.length; d++)
            if (c = c.La[b.charAt(d)], !c) {
                c = void 0;
                break a
            }
    }
    return c ? c.i : void 0
}
g.td = function() {
    var a = [];
    Ml(this, a);
    return a
};

function Ml(a, b) {
    void 0 !== a.i && b.push(a.i);
    for (var c in a.La) Ml(a.La[c], b)
}
g.me = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!c.La[e]) return [];
            c = c.La[e]
        }
        Nl(c, a, b)
    } else Nl(this, "", b);
    return b
};

function Nl(a, b, c) {
    void 0 !== a.i && c.push(b);
    for (var d in a.La) Nl(a.La[d], b + d, c)
}
g.clear = function() {
    this.La = {};
    this.i = void 0
};
g.clone = function() {
    return new Jl(this)
};
g.Rg = function() {
    var a;
    if (a = void 0 === this.i) a: {
        a = this.La;
        for (var b in a) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function Ol() {
    this.h = new Jl;
    this.g = "";
    this.u = this.A = null;
    this.i = this.j = 0
}

function pl(a, b) {
    var c = Ca(tb(b.ba));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = Ll(a.h, c);
        d ? d.push(b) : a.h.set(c, [b])
    }
}

function bl(a, b) {
    var c = Ca(tb(b.ba));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = Ll(a.h, c);
        if (d) {
            for (var e = af(b), f = 0; f < e; f++) bl(a, bf(b, f));
            Wa(d, b);
            if (!d.length) {
                for (var e = c, f = a.h, c = [], h = 0; h < e.length; h++) {
                    d = e.charAt(h);
                    if (!f.La[d]) throw Error('The collection does not have the key "' + e + '"');
                    c.push([f, d]);
                    f = f.La[d]
                }
                for (delete f.i; 0 < c.length;)
                    if (d = c.pop(), e = d[0], d = d[1], e.La[d].Rg()) delete e.La[d];
                    else break
            }
        }
    }
}

function Pl(a, b) {
    var c = !1,
        d = a.h.me(b);
    d && d.length && (a.i = 0, a.j = 0, c = Ql(a, Ll(a.h, d[0]))) && (a.A = d);
    return c
}

function Ql(a, b) {
    var c;
    b && (a.i < b.length && (c = b[a.i], a.u = b), c && (c.Kf(), c.select()));
    return !!c
}
Ol.prototype.clear = function() {
    this.g = ""
};
var Rl = "StopIteration" in k ? k.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function Sl() {}
Sl.prototype.next = function() {
    throw Rl;
};
Sl.prototype.ag = function() {
    return this
};

function Tl(a) {
    if (a instanceof Sl) return a;
    if ("function" == typeof a.ag) return a.ag();
    if (ea(a)) {
        var b = 0,
            c = new Sl;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw Rl;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function Ul(a) {
    try {
        return Tl(a).next()
    } catch (b) {
        if (b != Rl) throw b;
        return null
    }
};

function Vl(a) {
    Dd.call(this);
    this.g = a;
    a = u ? "focusout" : "blur";
    this.h = sd(this.g, u ? "focusin" : "focus", this, !u);
    this.i = sd(this.g, a, this, !u)
}
t(Vl, Dd);
Vl.prototype.handleEvent = function(a) {
    var b = new md(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    Ed(this, b)
};
Vl.prototype.va = function() {
    Vl.v.va.call(this);
    zd(this.h);
    zd(this.i);
    delete this.g
};

function Wl(a, b, c) {
    Zk.call(this, a, b, c);
    this.W = !0;
    il(this, !0);
    this.u = this;
    this.L = new Ol;
    this.Vb = this.nc = null;
    this.Wb = !1;
    this.G = this.qc = this.sa = !0;
    if (u) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {}
}
t(Wl, Zk);
g = Wl.prototype;
g.Xa = function() {
    return this
};
g.Qc = function() {
    return 0
};
g.Kf = function() {};
g.ri = function() {
    this.Wb = !0;
    hf(this.C(), "focused");
    this.u && this.u.select()
};
g.mi = function() {
    this.Wb = !1;
    kf(this.C(), "focused")
};
g.Ma = function() {
    return !this.G || Wl.v.Ma.call(this)
};
g.Bb = function(a) {
    this.G ? Wl.v.Bb.call(this, a) : this.W = a
};
g.jf = function() {
    return Bb
};
g.le = function() {
    var a = gl(this);
    return a ? a.firstChild : null
};
g.ke = function() {
    return null
};
g.hd = function() {};
g.sd = function() {
    return Wl.v.sd.call(this) + (this.G ? "" : " " + this.h.ug)
};
g.fe = function() {
    var a = this.Ma(),
        b = this.Td;
    if (a && b) return b;
    b = this.Zf;
    if (!a && b) return b;
    b = this.h;
    return a && b.tg ? b.uc + " " + b.tg : !a && b.pg ? b.uc + " " + b.pg : ""
};
g.eb = function(a) {
    if (this.u != a) {
        var b = !1;
        this.u && (b = null == this.u, il(this.u, !1));
        if (this.u = a) il(a, !0), b && a.select();
        Ed(this, "change")
    }
};

function Xl(a) {
    0 != a.sa && (a.sa = !1, a.Z && Yl(a))
}

function Yl(a) {
    function b(a) {
        var e = dl(a);
        if (e) {
            var f = !c || (a.getParent(), 0) ? a.h.ng : a.h.lg;
            e.className = f;
            if (e = a.ke()) e.className = ml(a)
        }
        $e(a, b)
    }
    var c = a.sa;
    b(a)
}

function Zl(a) {
    0 != a.qc && (a.qc = !1, a.Z && Yl(a))
}

function $l(a) {
    if (0 != a.G) {
        a.G = !1;
        if (a.Z) {
            var b = gl(a);
            b && (b.className = a.sd())
        }
        a.u == a && bf(a, 0) && a.eb(bf(a, 0))
    }
}
g.we = function() {
    Wl.v.we.call(this);
    var a = this.C();
    pf(a, "tree");
    qf(a, "labelledby", cl(this).id)
};
g.Da = function() {
    Wl.v.Da.call(this);
    var a = this.C();
    a.className = this.h.xg;
    a.setAttribute("hideFocus", "true");
    a = this.C();
    a.tabIndex = 0;
    var b = this.nc = new Hf(a),
        c = this.Vb = new Vl(a);
    We(this).T(c, "focusout", this.mi).T(c, "focusin", this.ri).T(b, "key", this.rb).T(a, "mousedown", this.pf).T(a, "click", this.pf).T(a, "dblclick", this.pf);
    this.we()
};
g.mb = function() {
    Wl.v.mb.call(this);
    this.nc.B();
    this.nc = null;
    this.Vb.B();
    this.Vb = null
};
g.pf = function(a) {
    var b = am(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.Cf(a);
            break;
        case "click":
            a.preventDefault();
            break;
        case "dblclick":
            b.Wg(a)
    }
};
g.rb = function(a) {
    var b;
    b = this.L;
    var c = !1;
    switch (a.g) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                var c = 40 == a.g ? 1 : -1,
                    d = b.A;
                if (d) {
                    var e = null,
                        f = !1;
                    if (b.u) {
                        var h = b.i + c;
                        0 <= h && h < b.u.length ? (b.i = h, e = b.u) : f = !0
                    }
                    e || (h = b.j + c, 0 <= h && h < d.length && (b.j = h), d.length > b.j && (e = Ll(b.h, d[b.j])), e && e.length && f && (b.i = -1 == c ? e.length - 1 : 0));
                    Ql(b, e) && (b.A = d)
                }
                c = !0
            }
            break;
        case 8:
            d = b.g.length - 1;
            c = !0;
            0 < d ? (b.g = b.g.substring(0, d), Pl(b, b.g)) : 0 == d ? b.g = "" : c = !1;
            break;
        case 27:
            b.g = "", c = !0
    }
    if (!(b = c) && (b = this.u)) {
        b = this.u;
        c = !0;
        switch (a.g) {
            case 39:
                if (a.altKey) break;
                df(b) && (b.Ma() ? bf(b, 0).select() : b.Bb(!0));
                break;
            case 37:
                if (a.altKey) break;
                df(b) && b.Ma() ? b.Bb(!1) : (d = b.getParent(), e = b.Xa(), d && (e.G || d != e) && d.select());
                break;
            case 40:
                a: if (df(b) && b.Ma()) d = bf(b, 0);
                    else {
                        for (d = b; d != b.Xa();) {
                            e = d.Ab;
                            if (null != e) {
                                d = e;
                                break a
                            }
                            d = d.getParent()
                        }
                        d = null
                    }
                d && d.select();
                break;
            case 38:
                d = b.Bc;
                null != d ? d = ol(d) : (d = b.getParent(), e = b.Xa(), d = !e.G && d == e || b == e ? null : d);
                d && d.select();
                break;
            default:
                c = !1
        }
        c && (a.preventDefault(), (e = b.Xa()) && e.L.clear());
        b = c
    }
    b || (b = this.L, c = !1, a.ctrlKey || a.altKey ||
        (d = String.fromCharCode(a.A || a.g).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.g) && (b.g += d, c = Pl(b, b.g))), b = c);
    b && a.preventDefault();
    return b
};

function am(a, b) {
    for (var c, d = b.target; null != d;) {
        if (c = al[d.id]) return c;
        if (d == a.C()) break;
        d = d.parentNode
    }
    return null
}
g.createNode = function(a) {
    return new ql(a || Bb, this.h, this.i)
};

function ki(a) {
    this.o = a;
    this.s = a.options.s;
    this.h = a.options.dc;
    this.aa = a.options.aa;
    this.g = {
        uf: 19,
        xg: "blocklyTreeRoot",
        ug: "blocklyHidden",
        vg: "",
        bf: "blocklyTreeRow",
        wg: "blocklyTreeLabel",
        uc: "blocklyTreeIcon",
        Ze: "blocklyTreeIconOpen",
        $e: "blocklyTreeIconNone",
        yg: "blocklyTreeSelected"
    };
    this.i = {
        bf: "blocklyTreeSeparator"
    };
    this.h && (this.g.cssTreeRow += a.s ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.i.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.s ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.g.cssTreeIcon = "")
}
g = ki.prototype;
g.width = 0;
g.height = 0;
g.Ad = null;
g.P = function() {
    var a = this.o;
    this.Nb = y("div", "blocklyToolboxDiv");
    this.Nb.setAttribute("dir", a.s ? "RTL" : "LTR");
    document.body.appendChild(this.Nb);
    O(this.Nb, "mousedown", this, function(a) {
        vh(a) || a.target == this.Nb ? Ah(!1) : Ah(!0)
    });
    this.X = new ni({
        pd: a.options.pd,
        Ib: a,
        s: a.s,
        dc: a.dc,
        aa: a.options.aa
    });
    qc(oi(this.X), a.m);
    this.X.P(a);
    this.g.cleardotPath = a.options.j + "1x1.gif";
    this.g.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (a.s ? "Rtl" : "Ltr");
    var b = new bm(this, this.g);
    this.jc = b;
    $l(b);
    Xl(b);
    Zl(b);
    b.eb(null);
    cm(this, a.options.A);
    b.U(this.Nb);
    dm(this);
    this.position()
};
g.B = function() {
    this.X.B();
    this.jc.B();
    A(this.Nb);
    this.Ad = this.o = null
};
g.yb = function() {
    return this.width
};
g.wc = function() {
    return this.height
};
g.position = function() {
    var a = this.Nb;
    if (a) {
        var b = Rh(this.o),
            c = Ge(b),
            b = em(b);
        this.h ? (a.style.left = c.x + "px", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, a.style.top = 0 == this.aa ? c.y + "px" : c.y + b.height - a.offsetHeight + "px") : (a.style.left = 3 == this.aa ? c.x + b.width - a.offsetWidth + "px" : c.x + "px", a.style.height = b.height + "px", a.style.top = c.y + "px", this.width = a.offsetWidth, 2 == this.aa && --this.width);
        this.X.position()
    }
};

function cm(a, b) {
    function c(a, b, m) {
        for (var n = null, p = 0, r; r = a.childNodes[p]; p++)
            if (r.tagName) switch (r.tagName.toUpperCase()) {
                case "CATEGORY":
                    n = d.createNode(r.getAttribute("name"));
                    n.Xb = [];
                    b.add(n);
                    var E = r.getAttribute("custom");
                    E ? n.Xb = E : c(r, n, m);
                    E = r.getAttribute("colour");
                    q(E) ? (E.match(/^#[0-9a-fA-F]{6}$/) ? n.te = E : n.te = xj(yj(E)), f = !0) : n.te = "";
                    "true" == r.getAttribute("expanded") ? (n.Xb.length && d.eb(n), n.Bb(!0)) : n.Bb(!1);
                    n = r;
                    break;
                case "SEP":
                    n && ("CATEGORY" == n.tagName.toUpperCase() ? b.add(new fm(e.i)) : (r =
                        parseFloat(r.getAttribute("gap")), isNaN(r) || (E = parseFloat(n.getAttribute("gap")), n.setAttribute("gap", isNaN(E) ? r : E + r))));
                    break;
                case "BLOCK":
                case "SHADOW":
                    b.Xb.push(r), n = r
            }
    }
    var d = a.jc,
        e = a;
    d.$g();
    d.Xb = [];
    var f = !1;
    c(b, a.jc, a.o.options.j);
    a.j = f;
    if (d.Xb.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    gh(a.o)
}

function dm(a, b) {
    for (var c = (b || a.jc).Zb(), d = 0, e; e = c[d]; d++) {
        var f = gl(e);
        if (f) {
            var h = a.j ? "8px solid " + (e.te || "#ddd") : "none";
            a.o.s ? f.style.borderRight = h : f.style.borderLeft = h
        }
        dm(a, e)
    }
}
g.rd = function() {
    var a = this.Nb.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 2 == this.aa ? new Ae(-1E7, -1E7, 1E7 + b + d, 2E7) : 3 == this.aa ? new Ae(b, -1E7, 1E7 + d, 2E7) : 0 == this.aa ? new Ae(-1E7, -1E7, 2E7, 1E7 + c + a) : new Ae(0, c, 2E7, 1E7 + d)
};

function bm(a, b) {
    this.S = a;
    Wl.call(this, Bb, b)
}
t(bm, Wl);
bm.prototype.Da = function() {
    bm.v.Da.call(this);
    if (kd) {
        var a = this.C();
        O(a, "touchstart", this, this.Ud)
    }
};
bm.prototype.Ud = function(a) {
    a.preventDefault();
    var b = am(this, a);
    b && "touchstart" === a.type && setTimeout(function() {
        b.Cf(a)
    }, 1)
};
bm.prototype.createNode = function(a) {
    return new gm(this.S, a ? ub(a) : Bb, this.h, this.i)
};
bm.prototype.eb = function(a) {
    var b = this.S;
    if (a != this.u && a != b.jc) {
        b.Ad && (gl(b.Ad).style.backgroundColor = "");
        if (a) {
            var c = a.te || "#57e";
            gl(a).style.backgroundColor = c;
            dm(b, a)
        }
        c = this.u;
        Wl.prototype.eb.call(this, a);
        a && a.Xb && a.Xb.length ? (b.X.show(a.Xb), b.Ad != a && Gk(b.X)) : b.X.Ub();
        c != a && c != this && (c = new Ri(null, "category", c && tb(c.ba), a && tb(a.ba)), c.g = b.o.id, J(c));
        a && (b.Ad = a)
    }
};

function gm(a, b, c, d) {
    Zk.call(this, b, c, d);
    a && (b = function() {
        Ck(a.o)
    }, sd(a.jc, "expand", b), sd(a.jc, "collapse", b))
}
t(gm, ql);
gm.prototype.jf = function() {
    return zb("span")
};
gm.prototype.Cf = function() {
    df(this) ? (this.Bb(!this.Ma()), this.select()) : this.Qa ? this.Xa().eb(null) : this.select();
    jl(this)
};
gm.prototype.Wg = function() {};

function fm(a) {
    gm.call(this, null, "", a)
}
t(fm, gm);
var hm = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function im(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (jm.test(c)) return b.rf = km(c), b.type = "hex", b;
    a: {
        var d = a.match(lm);
        if (d) {
            var c = Number(d[1]),
                e = Number(d[2]),
                d = Number(d[3]);
            if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                c = [c, e, d];
                break a
            }
        }
        c = []
    }
    if (c.length) return b.rf = xj(c), b.type = "rgb", b;
    if (hm && (c = hm[a.toLowerCase()])) return b.rf = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}
var mm = /#(.)(.)(.)/;

function km(a) {
    if (!jm.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(mm, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function Vj(a) {
    a = km(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function xj(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = nm(b.toString(16));
    c = nm(c.toString(16));
    a = nm(a.toString(16));
    return "#" + b + c + a
}
var jm = /^#(?:[0-9a-f]{3}){1,2}$/i,
    lm = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function nm(a) {
    return 1 == a.length ? "0" + a : a
}

function yj(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = Math.floor(a / 60),
        f = a / 60 - e;
    a = 165.75 * .55;
    var h = 165.75 * (1 - .45 * f),
        f = 165.75 * (1 - .45 * (1 - f));
    switch (e) {
        case 1:
            b = h;
            c = 165.75;
            d = a;
            break;
        case 2:
            b = a;
            c = 165.75;
            d = f;
            break;
        case 3:
            b = a;
            c = h;
            d = 165.75;
            break;
        case 4:
            b = f;
            c = a;
            d = 165.75;
            break;
        case 5:
            b = 165.75;
            c = a;
            d = h;
            break;
        case 6:
        case 0:
            b = 165.75, c = f, d = a
    }
    return [Math.floor(b), Math.floor(c), Math.floor(d)]
}

function Wj(a, b, c) {
    c = Math.min(Math.max(c, 0), 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};

function om(a, b) {
    om.v.constructor.call(this, a, b)
}
t(om, Lj);

function pm(a, b, c, d) {
    this.D = null;
    this.A = Number(c);
    this.V = Number(b);
    this.u = new Yb(this.V, this.A + 10);
    this.ha = d || "";
    this.ra(a)
}
t(pm, kj);
g = pm.prototype;
g.Ff = null;
g.Lc = !1;
g.P = function() {
    if (!this.g) {
        this.g = L("g", {}, null);
        this.Kc || (this.g.style.display = "none");
        this.i = L("image", {
            height: this.A + "px",
            width: this.V + "px"
        }, this.g);
        this.ra(this.F);
        Ib && (this.Ff = L("rect", {
            height: this.A + "px",
            width: this.V + "px",
            "fill-opacity": 0
        }, this.g));
        this.D.m.appendChild(this.g);
        var a = this.Ff || this.i;
        a.$a = this.D;
        bj(a)
    }
};
g.B = function() {
    A(this.g);
    this.Ff = this.i = this.g = null
};
g.Na = function() {
    return this.F
};
g.ra = function(a) {
    null !== a && (this.F = a, this.i && this.i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", q(a) ? a : ""))
};
g.wb = function(a) {
    null !== a && (this.ha = a)
};
g.Me = function() {};

function qm(a, b) {
    qm.v.constructor.call(this, "", b);
    this.ra(a)
}
t(qm, kj);
g = qm.prototype;
g.Pd = "default";
g.P = function() {
    this.g || (qm.v.P.call(this), this.i = L("text", {
        "class": "blocklyText blocklyCheckbox",
        x: -3,
        y: 14
    }, this.g), this.i.appendChild(document.createTextNode("\u2713")), this.i.style.display = this.ea ? "block" : "none")
};
g.Na = function() {
    return String(this.ea).toUpperCase()
};
g.ra = function(a) {
    a = "TRUE" == a;
    this.ea !== a && (this.D && 0 == I && J(new Qi(this.D, "field", this.name, this.ea, a)), this.ea = a, this.i && (this.i.style.display = a ? "block" : "none"))
};
g.Gc = function() {
    var a = !this.ea;
    if (this.D && this.Oa) {
        var b = this.Oa(a);
        void 0 !== b && (a = b)
    }
    null !== a && this.ra(String(a).toUpperCase())
};

function rm(a) {
    Dd.call(this);
    this.g = [];
    sm(this, a)
}
t(rm, Dd);
g = rm.prototype;
g.cc = null;
g.Lf = null;

function sm(a, b) {
    b && (Ra(b, function(a) {
        tm(this, a, !1)
    }, a), Za(a.g, b))
}
g.eb = function(a) {
    a != this.cc && (tm(this, this.cc, !1), this.cc = a, tm(this, a, !0));
    Ed(this, "select")
};
g.clear = function() {
    var a = this.g;
    if (!da(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.cc = null
};
g.va = function() {
    rm.v.va.call(this);
    delete this.g;
    this.cc = null
};

function tm(a, b, c) {
    b && ("function" == typeof a.Lf ? a.Lf(b, c) : "function" == typeof b.Pf && b.Pf(c))
};

function um(a, b, c, d, e) {
    this.g = !!b;
    this.node = null;
    this.i = 0;
    this.u = !1;
    this.j = !c;
    a && vm(this, a, d);
    this.h = void 0 != e ? e : this.i || 0;
    this.g && (this.h *= -1)
}
t(um, Sl);

function vm(a, b, c) {
    if (a.node = b) a.i = fa(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
    fa(void 0) && (a.h = void 0)
}
um.prototype.clone = function() {
    return new um(this.node, this.g, !this.j, this.i, this.h)
};
um.prototype.next = function() {
    var a;
    if (this.u) {
        if (!this.node || this.j && 0 == this.h) throw Rl;
        a = this.node;
        var b = this.g ? -1 : 1;
        if (this.i == b) {
            var c = this.g ? a.lastChild : a.firstChild;
            c ? vm(this, c) : vm(this, a, -1 * b)
        } else(c = this.g ? a.previousSibling : a.nextSibling) ? vm(this, c) : vm(this, a.parentNode, -1 * b);
        this.h += this.i * (this.g ? -1 : 1)
    } else this.u = !0;
    a = this.node;
    if (!this.node) throw Rl;
    return a
};
um.prototype.splice = function(a) {
    var b = this.node,
        c = this.g ? 1 : -1;
    this.i == c && (this.i = -1 * c, this.h += this.i * (this.g ? -1 : 1));
    this.g = !this.g;
    um.prototype.next.call(this);
    this.g = !this.g;
    for (var c = ea(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) qc(c[d], b);
    A(b)
};

function wm(a, b, c, d) {
    um.call(this, a, b, c, null, d)
}
t(wm, um);
wm.prototype.next = function() {
    do wm.v.next.call(this); while (-1 == this.i);
    return this.node
};

function xm() {}
t(xm, tf);
ba(xm);
var ym = 0;
xm.prototype.re = function(a) {
    var b = wf(this, a);
    a = a.i.ob("DIV", b ? b.join(" ") : null, zm(this, a.cb, a.qb, a.i));
    pf(a, "grid");
    return a
};

function zm(a, b, c, d) {
    for (var e = [], f = 0, h = 0; f < c.height; f++) {
        for (var l = [], m = 0; m < c.width; m++) {
            var n = b && b[h++];
            l.push(Am(a, n, d))
        }
        e.push(Bm(a, l, d))
    }
    a = d.ob("TABLE", a.ga() + "-table", d.ob("TBODY", a.ga() + "-body", e));
    a.cellSpacing = 0;
    a.cellPadding = 0;
    return a
}

function Bm(a, b, c) {
    a = c.ob("TR", a.ga() + "-row", b);
    pf(a, "row");
    return a
}

function Am(a, b, c) {
    a = c.ob("TD", {
        "class": a.ga() + "-cell",
        id: a.ga() + "-cell-" + ym++
    }, b);
    pf(a, "gridcell");
    qf(a, "selected", !1);
    if (!yc(a) && !sf(a, "label")) {
        var d;
        b = new wm(a);
        for (c = ""; !c && (d = Ul(b));) 1 == d.nodeType && (c = sf(d, "label") || d.title);
        (d = c) && qf(a, "label", d)
    }
    return a
}
xm.prototype.vd = function(a, b) {
    if (a) {
        var c = hc(this.ga() + "-body", a)[0];
        if (c) {
            var d = 0;
            Ra(c.rows, function(a) {
                Ra(a.cells, function(a) {
                    pc(a);
                    if (b) {
                        var c = b[d++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (d < b.length) {
                for (var e = [], f = ec(a), h = c.rows[0].cells.length; d < b.length;) {
                    var l = b[d++];
                    e.push(Am(this, l, f));
                    e.length == h && (l = Bm(this, e, f), c.appendChild(l), e.length = 0)
                }
                if (0 < e.length) {
                    for (; e.length < h;) e.push(Am(this, "", f));
                    l = Bm(this, e, f);
                    c.appendChild(l)
                }
            }
        }
        Le(a, Ib)
    }
};

function Cm(a, b, c) {
    for (b = b.C(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && gf(c, a.ga() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return null
}
xm.prototype.ga = function() {
    return "goog-palette"
};

function Dm(a, b, c) {
    M.call(this, a, b || xm.Hb(), c);
    this.Xe &= -89;
    this.G = new Em;
    this.G.He(this);
    this.Qa = -1
}
t(Dm, M);
g = Dm.prototype;
g.qb = null;
g.Sb = -1;
g.Ga = null;
g.va = function() {
    Dm.v.va.call(this);
    this.Ga && (this.Ga.B(), this.Ga = null);
    this.qb = null;
    this.G.B()
};
g.Ge = function(a) {
    Dm.v.Ge.call(this, a);
    Fm(this);
    this.Ga ? (this.Ga.clear(), sm(this.Ga, a)) : (this.Ga = new rm(a), a = na(this.li, this), this.Ga.Lf = a, We(this).T(this.Ga, "select", this.yi));
    this.Sb = -1
};
g.ge = function() {
    return ""
};
g.zd = function(a) {
    Dm.v.zd.call(this, a);
    var b = Cm(this.h, this, a.target);
    b && a.u && rc(b, a.u) || b == Gm(this) || (a = this.cb, Hm(this, a && b ? Qa(a, b) : -1))
};
g.Tb = function(a) {
    Dm.v.Tb.call(this, a);
    if (this.ea & 4 && (a = Cm(this.h, this, a.target), a != Gm(this))) {
        var b = this.cb;
        Hm(this, b && a ? Qa(b, a) : -1)
    }
};
g.hc = function(a) {
    var b = Gm(this);
    return b ? (a && (this.Ga && this.Ga.cc ? "mouseup" != a.type || Cm(this.h, this, a.target) : 1) && this.eb(b), Dm.v.hc.call(this, a)) : !1
};
g.rb = function(a) {
    var b = this.cb,
        b = b ? b.length : 0,
        c = this.qb.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.g || 32 == a.g) return this.hc(a);
    if (36 == a.g) return Hm(this, 0), !0;
    if (35 == a.g) return Hm(this, b - 1), !0;
    var d;
    if (0 > this.Sb)
        if (this.Ga) {
            d = this.Ga;
            var e = d.cc;
            d = e ? Qa(d.g, e) : -1
        } else d = -1;
    else d = this.Sb;
    switch (a.g) {
        case 37:
            if (-1 == d || 0 == d) d = b;
            Hm(this, d - 1);
            a.preventDefault();
            return !0;
        case 39:
            return d == b - 1 && (d = -1), Hm(this, d + 1), a.preventDefault(), !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c) return Hm(this, d - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 == d && (d = -c), d < b - c) return Hm(this, d + c), a.preventDefault(), !0
    }
    return !1
};
g.yi = function() {};

function Im(a, b) {
    if (a.C()) throw Error("Component already rendered");
    a.qb = fa(b) ? new Yb(b, void 0) : b;
    Fm(a)
}

function Gm(a) {
    var b = a.cb;
    return b && b[a.Sb]
}

function Hm(a, b) {
    b != a.Sb && (Jm(a, a.Sb, !1), a.Qa = a.Sb, a.Sb = b, Jm(a, b, !0), Ed(a, "a"))
}

function Km(a, b) {
    if (a.Ga) {
        var c = a.Ga;
        c.eb(c.g[b] || null)
    }
}
g.eb = function(a) {
    this.Ga && this.Ga.eb(a)
};

function Jm(a, b, c) {
    if (a.C()) {
        var d = a.cb;
        if (d && 0 <= b && b < d.length) {
            var e;
            e = (e = Gm(a)) ? e.parentNode : null;
            a.G.C() != e && (a.G.g = e);
            e = a.G;
            e.pb(c);
            !!(e.ea & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null, d = a.h.ga() + "-cell-hover", c ? hf(b, d) : kf(b, d), c ? qf(a.g, "activedescendant", b.id) : b.id == sf(a.g, "activedescendant") && rf(a.g))
        }
    }
}
g.pb = function(a) {
    a && -1 == this.Sb ? Hm(this, -1 < this.Qa ? this.Qa : 0) : a || Hm(this, -1);
    Dm.v.pb.call(this, a)
};
g.li = function(a, b) {
    if (this.C() && a) {
        var c = a.parentNode,
            d = this.h.ga() + "-cell-selected";
        b ? hf(c, d) : kf(c, d);
        qf(c, "selected", b)
    }
};

function Fm(a) {
    var b = a.cb;
    if (b)
        if (a.qb && a.qb.width) {
            if (b = Math.ceil(b.length / a.qb.width), !fa(a.qb.height) || a.qb.height < b) a.qb.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.qb = new Yb(b, b);
    else a.qb = new Yb(0, 0)
}

function Em() {
    M.call(this, null);
    this.Hc |= 2
}
t(Em, M);

function Lm(a, b, c) {
    this.W = a || [];
    Dm.call(this, null, b || xm.Hb(), c);
    Mm(this, this.W)
}
t(Lm, Dm);
Lm.prototype.sa = null;
Lm.prototype.ba = null;

function Mm(a, b) {
    a.W = b;
    a.ba = null;
    a.sa = null;
    var c = Nm(a);
    a.h.vd(a.C(), c);
    a.Ge(c)
}
Lm.prototype.kf = function() {
    var a = this.Ga ? this.Ga.cc : null;
    if (a) {
        var b = a.style[Ha()];
        if ("undefined" !== typeof b) a = b;
        else {
            var b = a.style,
                c = Be["background-color"];
            if (!c) {
                var d = Ha(),
                    c = d;
                void 0 === a.style[d] && (d = (v ? "Webkit" : Ib ? "Moz" : u ? "ms" : Gb ? "O" : null) + Ia(d), void 0 !== a.style[d] && (c = d));
                Be["background-color"] = c
            }
            a = b[c] || ""
        }
        return Om(a)
    }
    return null
};

function Pm(a, b) {
    var c = Om(b);
    a.sa || (a.sa = Ta(a.W, function(a) {
        return Om(a)
    }));
    Km(a, c ? Qa(a.sa, c) : -1)
}

function Nm(a) {
    return Ta(a.W, function(a, c) {
        var d = this.i.ob("DIV", {
            "class": this.h.ga() + "-colorswatch",
            style: "background-color:" + a
        });
        d.title = this.ba && this.ba[c] ? this.ba[c] : "#" == a.charAt(0) ? "RGB (" + Vj(a).join(", ") + ")" : a;
        return d
    }, a)
}

function Om(a) {
    if (a) try {
        return im(a).rf
    } catch (b) {}
    return null
};

function Qm(a, b) {
    Se.call(this, a);
    this.h = b || null;
    We(this).T(this, "action", this.Fi)
}
t(Qm, Se);

function Rm(a) {
    var b = Sm;
    a.h ? Mm(a.h, b) : Tm(a, b)
}

function Um(a) {
    a.h || Tm(a, []);
    Im(a.h, 7)
}
g = Qm.prototype;
g.kf = function() {
    return this.h ? this.h.kf() : null
};

function Vm(a, b) {
    a.h && Pm(a.h, b)
}
g.Da = function() {
    Qm.v.Da.call(this);
    this.h && this.h.U(this.C());
    this.C().unselectable = "on"
};
g.va = function() {
    Qm.v.va.call(this);
    this.h && (this.h.B(), this.h = null)
};
g.focus = function() {
    this.h && this.h.C().focus()
};
g.Fi = function(a) {
    a.stopPropagation();
    Ed(this, "change")
};

function Tm(a, b) {
    var c = new Lm(b, null, a.i);
    Im(c, 5);
    c.fb(32, !0);
    a.md(c);
    a.h = c;
    a.Z && a.h.U(a.C())
}
var Sm = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function Wm(a, b) {
    Wm.v.constructor.call(this, a, b);
    this.wb("\u00a0\u00a0\u00a0")
}
var Xm;
t(Wm, kj);
g = Wm.prototype;
g.P = function() {
    Wm.v.P.call(this);
    this.j.style.fillOpacity = 1;
    this.ra(this.Na())
};
g.Pd = "default";
g.B = function() {
    Ig(this);
    Wm.v.B.call(this)
};
g.Na = function() {
    return this.Fb
};
g.ra = function(a) {
    this.D && 0 == I && this.Fb != a && J(new Qi(this.D, "field", this.name, this.Fb, a));
    this.Fb = a;
    this.j && (this.j.style.fill = a)
};
g.mc = function() {
    var a = this.Fb,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]);
    return a
};
g.Gc = function() {
    Dg(this, this.D.s, Ym);
    var a = new Qm;
    Um(a);
    Rm(a);
    var b = kc(),
        c = Ee(),
        d = Ge(this.j),
        e = oj(this);
    a.U(N);
    Vm(a, this.Na());
    var f = He(a.C());
    d.y = d.y + f.height + e.height >= b.height + c.y ? d.y - (f.height - 1) : d.y + (e.height - 1);
    this.D.s ? (d.x += e.width, d.x -= f.width, d.x < c.x && (d.x = c.x)) : d.x > b.width + c.x - f.width && (d.x = b.width + c.x - f.width);
    Hg(d.x, d.y, b, c, this.D.s);
    var h = this;
    Xm = sd(a, "change", function(a) {
        a = a.target.kf() || "#000000";
        gk();
        if (h.D && h.Oa) {
            var b = h.Oa(a);
            void 0 !== b && (a = b)
        }
        null !== a && h.ra(a)
    })
};

function Ym() {
    Xm && zd(Xm)
};
var Ii = null,
    U = null,
    $d = null,
    ae = null,
    ee = [],
    ti = null,
    Oj = null,
    K = 0,
    zi = null;

function em(a) {
    return {
        width: a.fg,
        height: a.eg
    }
}

function Ck(a) {
    for (; a.options.Ib;) a = a.options.Ib;
    var b = Rh(a),
        c = b.parentNode;
    if (c) {
        var d = c.offsetWidth,
            c = c.offsetHeight;
        b.fg != d && (b.setAttribute("width", d + "px"), b.fg = d);
        b.eg != c && (b.setAttribute("height", c + "px"), b.eg = c);
        a.resize()
    }
}

function Ai() {
    var a = Ii;
    xh(Ij);
    a.wf = !1;
    zi && (Q(zi), zi = null);
    Id && (Q(Id), Id = null)
}

function Bi(a) {
    if (!(a.touches && 2 <= a.touches.length)) {
        var b = Ii;
        if (b.wf) {
            var c = a.clientX - b.bb,
                d = a.clientY - b.Qa,
                e = b.Pa,
                f = b.Rf + c,
                h = b.Sf + d,
                f = Math.min(f, -e.hb),
                h = Math.min(h, -e.ib),
                f = Math.max(f, e.Y - e.hb - e.Ta),
                h = Math.max(h, e.wa - e.ib - e.Sa);
            b.Aa.set(-f - e.hb, -h - e.ib);
            Math.sqrt(c * c + d * d) > Fh && Qj();
            a.stopPropagation();
            a.preventDefault()
        }
    }
}

function Ik(a) {
    if (!Ii.options.i && !wh(a)) {
        var b = !1;
        if (27 == a.keyCode) Ah();
        else if (8 == a.keyCode || 46 == a.keyCode) a.preventDefault(), U && Xg(U) && (b = !0);
        else if (a.altKey || a.ctrlKey || a.metaKey) U && Xg(U) && de(U) && (67 == a.keyCode ? (Ah(), Pj(U)) : 88 == a.keyCode && (Pj(U), b = !0)), 86 == a.keyCode ? ti && si(Oj) : 90 == a.keyCode && (Ah(), Ii.Vf(a.shiftKey));
        b && (H(!0), Ah(), U.B(2 != K, !0), $d && (xe(), $d = null), H(!1))
    }
}

function ui() {
    Fj();
    Hl()
}
var Zm = 0;

function ji(a, b) {
    Qj();
    Zm = setTimeout(function() {
        a.button = 2;
        b.jd(a)
    }, 750)
}

function Qj() {
    Zm && (clearTimeout(Zm), Zm = 0)
}

function Pj(a) {
    var b = Nd(a);
    if (2 != K)
        for (var c = 0, d; d = b.childNodes[c]; c++)
            if ("next" == d.nodeName.toLowerCase()) {
                b.removeChild(d);
                break
            }
    c = a.oa();
    b.setAttribute("x", a.s ? -c.x : c.x);
    b.setAttribute("y", c.y);
    ti = b;
    Oj = a.w
}

function Ah(a) {
    fj();
    gk();
    a || (a = Ii, a.S && a.S.X && a.S.X.nd && a.S.jc.eb(null))
}

function Dk() {
    var a, b, c, d, e = em(Rh(this));
    if (this.S)
        if (0 == this.aa || 1 == this.aa) e.height -= this.S.wc();
        else if (2 == this.aa || 3 == this.aa) e.width -= this.S.yb();
    var f = ni.prototype.R - 1,
        h = e.width - f,
        f = e.height - f;
    a = Og(this);
    if (a.length) {
        d = Jj(a[0]);
        for (b = 1; b < a.length; b++) {
            var l = Jj(a[b]);
            l.ub.x < d.ub.x && (d.ub.x = l.ub.x);
            l.Eb.x > d.Eb.x && (d.Eb.x = l.Eb.x);
            l.ub.y < d.ub.y && (d.ub.y = l.ub.y);
            l.Eb.y > d.Eb.y && (d.Eb.y = l.Eb.y)
        }
        a = d.ub.x;
        b = d.ub.y;
        c = d.Eb.x - d.ub.x;
        d = d.Eb.y - d.ub.y
    } else d = c = b = a = 0;
    var m = c * this.scale,
        l = d * this.scale,
        n = a * this.scale,
        p = b * this.scale;
    this.Aa ? (a = Math.min(n - h / 2, n + m - h), h = Math.max(n + m + h / 2, n + h), b = Math.min(p - f / 2, p + l - f), f = Math.max(p + l + f / 2, p + f)) : (h = a + c, f = b + d);
    d = 0;
    this.S && 2 == this.aa && (d = this.S.yb());
    l = 0;
    this.S && 0 == this.aa && (l = this.S.wc());
    return {
        wa: e.height,
        Y: e.width,
        Sa: f - b,
        Ta: h - a,
        Kb: -this.scrollY,
        Ca: -this.scrollX,
        ib: b,
        hb: a,
        Ka: l,
        Ia: d,
        qq: this.S ? this.S.yb() : 0,
        pq: this.S ? this.S.wc() : 0,
        ee: this.X ? this.X.yb() : 0,
        Gg: this.X ? this.X.wc() : 0,
        aa: this.aa
    }
}

function Ek(a) {
    if (!this.Aa) throw "Attempt to set main workspace scroll without scrollbars.";
    var b = this.Ea();
    fa(a.x) && (this.scrollX = -b.Ta * a.x - b.hb);
    fa(a.y) && (this.scrollY = -b.Sa * a.y - b.ib);
    a = this.scrollX + b.Ia;
    b = this.scrollY + b.Ka;
    this.translate(a, b);
    this.options.u && (this.options.u.setAttribute("x", a), this.options.u.setAttribute("y", b), u && mi(this))
}
k.Blockly || (k.Blockly = {});
k.Blockly.getMainWorkspace = function() {
    return Ii
};
k.Blockly.addChangeListener = function(a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return Ii.Pb(a)
};
V.Ni = {};
V.Ni.iq = {};
V.ih = "Adicionar coment\u00e1rio";
V.$i = "Por favor autorize este aplicativo para permitir que o seu trabalho seja gravado e que ele seja compartilhado por voc\u00ea.";
V.rh = "Mudar valor:";
V.aj = "Converse com o seu colaborador digitando nesta caixa!";
V.sh = "Limpar blocos";
V.uh = "Recolher blocos";
V.vh = "Recolher bloco";
V.bj = "cor 1";
V.cj = "cor 2";
V.dj = "http://meyerweb.com/eric/tools/color-blend/";
V.ej = "propor\u00e7\u00e3o";
V.fj = "misturar";
V.gj = "Mistura duas cores em uma dada propor\u00e7\u00e3o (0,0 - 1,0).";
V.hj = "https://pt.wikipedia.org/wiki/Cor";
V.ij = "Escolher uma cor da palheta de cores.";
V.jj = "http://randomcolour.com";
V.kj = "cor aleat\u00f3ria";
V.lj = "Escolher cor de forma aleat\u00f3ria.";
V.mj = "azul";
V.nj = "verde";
V.oj = "http://www.december.com/html/spec/colorper.html";
V.pj = "vermelho";
V.qj = "colorir com";
V.rj = "Cria uma cor de acordo com a quantidade especificada de vermelho, verde e azul. Todos os valores devem estar entre 0 e 100.";
V.sj = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
V.tj = "encerra o la\u00e7o";
V.uj = "continua com a pr\u00f3xima itera\u00e7\u00e3o do la\u00e7o";
V.vj = "Encerra o la\u00e7o.";
V.wj = "Ignora o resto deste la\u00e7o, e continua com a pr\u00f3xima itera\u00e7\u00e3o.";
V.xj = "Aten\u00e7\u00e3o: Este bloco s\u00f3 pode ser usado dentro de um la\u00e7o.";
V.yj = "https://github.com/google/blockly/wiki/Loops#for-each";
V.Aj = "para cada item %1 na lista %2";
V.Bj = "Para cada item em uma lista, atribui o item \u00e0 vari\u00e1vel '%1' e ent\u00e3o realiza algumas instru\u00e7\u00f5es.";
V.Cj = "https://github.com/google/blockly/wiki/Loops#count-with";
V.Ej = "contar com %1 de %2 at\u00e9 %3 por %4";
V.Fj = "Faz com que a vari\u00e1vel '%1' assuma os valores do n\u00famero inicial ao n\u00famero final, contando de acordo com o intervalo especificado e executa os blocos especificados.";
V.Hj = "Acrescente uma condi\u00e7\u00e3o para o bloco se.";
V.Jj = "Acrescente uma condi\u00e7\u00e3o final para o bloco se.";
V.Kj = "https://github.com/google/blockly/wiki/IfElse";
V.Mj = "Acrescente, remova ou reordene se\u00e7\u00f5es para reconfigurar este bloco.";
V.wh = "sen\u00e3o";
V.xh = "sen\u00e3o se";
V.yh = "se";
V.Oj = "Se um valor for verdadeiro, ent\u00e3o realize algumas instru\u00e7\u00f5es.";
V.Pj = "Se um valor for verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es. Sen\u00e3o, realize o segundo bloco de instru\u00e7\u00f5es.";
V.Qj = "Se o primeiro valor \u00e9 verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es.  Sen\u00e3o, se o segundo valor \u00e9 verdadeiro, realize o segundo bloco de instru\u00e7\u00f5es.";
V.Rj = "Se o primeiro valor for verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es. Sen\u00e3o, se o segundo valor \u00e9 verdadeiro, realize o segundo bloco de instru\u00e7\u00f5es. Se nenhum dos blocos for verdadeiro, realize o \u00faltimo bloco de instru\u00e7\u00f5es.";
V.Sj = "https://pt.wikipedia.org/wiki/Estrutura_de_repeti%C3%A7%C3%A3o#Repeti.C3.A7.C3.A3o_com_vari.C3.A1vel_de_controle";
V.Od = "fa\u00e7a";
V.Tj = "repita %1 vezes";
V.Uj = "Fa\u00e7a algumas instru\u00e7\u00f5es v\u00e1rias vezes.";
V.Vj = "https://github.com/google/blockly/wiki/Loops#repeat";
V.Xj = "repita at\u00e9";
V.Yj = "repita enquanto";
V.Zj = "Enquanto um valor for falso, ent\u00e3o fa\u00e7a algumas instru\u00e7\u00f5es.";
V.$j = "Enquanto um valor for verdadeiro, ent\u00e3o fa\u00e7a algumas instru\u00e7\u00f5es.";
V.zh = "Apagar todos os %1 blocos?";
V.Xf = "Remover bloco";
V.Yf = "Remover %1 blocos";
V.Ah = "Desabilitar bloco";
V.Bh = "Duplicar";
V.Ch = "Habilitar bloco";
V.Dh = "Expandir blocos";
V.Eh = "Expandir bloco";
V.Fh = "Entradas externas";
V.Gh = "Ajuda";
V.Hh = "Entradas incorporadas";
V.bk = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
V.ck = "criar lista vazia";
V.dk = "Retorna uma lista, de tamanho 0, contendo nenhum registro";
V.ek = "lista";
V.fk = "Acrescenta, remove ou reordena se\u00e7\u00f5es para reconfigurar este bloco de lista.";
V.gk = "https://github.com/google/blockly/wiki/Lists#create-list-with";
V.hk = "criar lista com";
V.jk = "Acrescenta um item \u00e0 lista.";
V.kk = "Cria uma lista com a quantidade de itens informada.";
V.lk = "primeiro";
V.nk = "n\u00ba a partir do final";
V.pk = "n\u00ba";
V.qk = "obter";
V.rk = "obter e remover";
V.wk = "\u00faltimo";
V.xk = "aleat\u00f3rio";
V.yk = "remover";
V.zk = "";
V.Ak = "Retorna o primeiro item em uma lista.";
V.Bk = "Retorna o item da lista na posi\u00e7\u00e3o especificada.  #1 \u00e9 o \u00faltimo item.";
V.Ck = "Retorna o item da lista na posi\u00e7\u00e3o especificada.  #1 \u00e9 o primeiro item.";
V.Dk = "Retorna o \u00faltimo item em uma lista.";
V.Ek = "Retorna um item aleat\u00f3rio de uma lista.";
V.Fk = "Remove e retorna o primeiro item de uma lista.";
V.Gk = "Remove e retorna o item na posi\u00e7\u00e3o especificada em uma lista.  #1 \u00e9 o \u00faltimo item.";
V.Hk = "Remove e retorna o item na posi\u00e7\u00e3o especificada em uma lista.  #1 \u00e9 o primeiro item.";
V.Ik = "Remove e retorna o \u00faltimo item de uma lista.";
V.Jk = "Remove e retorna um item aleat\u00f3rio de uma lista.";
V.Kk = "Remove o primeiro item de uma lista.";
V.Lk = "Remove o item na posi\u00e7\u00e3o especificada em uma lista.  #1 \u00e9 o \u00faltimo item.";
V.Mk = "Remove o item na posi\u00e7\u00e3o especificada em uma lista.  #1 \u00e9 o primeiro item.";
V.Nk = "Remove o \u00faltimo item de uma lista.";
V.Ok = "Remove um item aleat\u00f3rio de uma lista.";
V.Pk = "at\u00e9 n\u00ba a partir do final";
V.Qk = "at\u00e9 n\u00ba";
V.Rk = "at\u00e9 \u00faltimo";
V.Sk = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
V.Uk = "obt\u00e9m sublista a partir do primeiro";
V.Vk = "obt\u00e9m sublista de n\u00ba a partir do final";
V.Wk = "obt\u00e9m sublista de n\u00ba";
V.Xk = "";
V.Yk = "Cria uma c\u00f3pia da por\u00e7\u00e3o especificada de uma lista.";
V.Zk = "encontre a primeira ocorr\u00eancia do item";
V.Ih = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
V.al = "encontre a \u00faltima ocorr\u00eancia do item";
V.bl = "Retorna o \u00edndice da primeira/\u00faltima ocorr\u00eancia do item na lista.  Retorna 0 se o item n\u00e3o for encontrado.";
V.Qd = "na lista";
V.cl = "https://github.com/google/blockly/wiki/Lists#is-empty";
V.dl = "%1 \u00e9 vazia";
V.fl = "Retorna ao verdadeiro se a lista estiver vazia.";
V.hl = "https://github.com/google/blockly/wiki/Lists#length-of";
V.il = "tamanho de %1";
V.jl = "Retorna o tamanho de uma lista.";
V.kl = "https://github.com/google/blockly/wiki/Lists#create-list-with";
V.ll = "criar lista com item %1 repetido %2 vezes";
V.ol = "Cria uma lista consistindo no valor informado repetido o n\u00famero de vezes especificado.";
V.ql = "https://github.com/google/blockly/wiki/Lists#in-list--set";
V.sl = "como";
V.ul = "inserir em";
V.vl = "definir";
V.wl = "Insere o item no in\u00edcio de uma lista.";
V.xl = "Insere o item na posi\u00e7\u00e3o especificada em uma lista.  #1 \u00e9 o \u00faltimo item.";
V.yl = "Insere o item na posi\u00e7\u00e3o especificada em uma lista.  #1 \u00e9 o primeiro item.";
V.zl = "Insere o item no final de uma lista.";
V.Al = "Insere o item em uma posi\u00e7\u00e3o qualquer de uma lista.";
V.Bl = "Define o primeiro item de uma lista.";
V.Cl = "Define o item da posi\u00e7\u00e3o especificada de uma lista.  #1 \u00e9 o \u00faltimo item.";
V.Dl = "Define o item da posi\u00e7\u00e3o especificada de uma lista.  #1 \u00e9 o primeiro item.";
V.El = "Define o \u00faltimo item de uma lista.";
V.Fl = "Define um item aleat\u00f3rio de uma lista.";
V.Gl = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
V.Hl = "ascendente";
V.Il = "descendente";
V.Jl = "ordenar %1 %2 %3";
V.Kl = "Ordenar uma c\u00f3pia de uma lista.";
V.Ll = "alfab\u00e9tico, ignorar mai\u00fascula/min\u00fascula";
V.Ml = "num\u00e9rico";
V.Nl = "alfab\u00e9tico";
V.Ol = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
V.Pl = "Fazer uma lista a partir do texto";
V.Ql = "fazer um texto a partir da lista";
V.Rl = "Juntar uma lista de textos em um \u00fanico texto, separado por um delimitador.";
V.Sl = "Dividir o texto em uma lista de textos, separando-o em cada delimitador.";
V.Tl = "com delimitador";
V.Ul = "falso";
V.Vl = "https://github.com/google/blockly/wiki/Logic#values";
V.Wl = "Retorna verdadeiro ou falso.";
V.Xl = "verdadeiro";
V.Yl = "https://pt.wikipedia.org/wiki/Inequa%C3%A7%C3%A3o";
V.Zl = "Retorna verdadeiro se ambas as entradas forem iguais.";
V.$l = "Retorna verdadeiro se a primeira entrada for maior que a segunda entrada.";
V.am = "Retorna verdadeiro se a primeira entrada for maior ou igual \u00e0 segunda entrada.";
V.bm = "Retorna verdadeiro se a primeira entrada for menor que a segunda entrada.";
V.cm = "Retorna verdadeiro se a primeira entrada for menor ou igual \u00e0 segunda entrada.";
V.dm = "Retorna verdadeiro se ambas as entradas forem diferentes.";
V.em = "https://github.com/google/blockly/wiki/Logic#not";
V.fm = "n\u00e3o %1";
V.gm = "Retorna verdadeiro se a entrada for falsa.  Retorna falsa se a entrada for verdadeira.";
V.hm = "nulo";
V.im = "https://en.wikipedia.org/wiki/Nullable_type";
V.jm = "Retorna nulo.";
V.lm = "e";
V.mm = "https://github.com/google/blockly/wiki/Logic#logical-operations";
V.nm = "ou";
V.om = "Retorna verdadeiro se ambas as entradas forem verdadeiras.";
V.pm = "Retorna verdadeiro se uma das estradas for verdadeira.";
V.qm = "teste";
V.rm = "https://en.wikipedia.org/wiki/%3F:";
V.sm = "se falso";
V.tm = "se verdadeiro";
V.um = 'Avalia a condi\u00e7\u00e3o em "teste". Se a condi\u00e7\u00e3o for verdadeira retorna o valor "se verdadeiro", sen\u00e3o retorna o valor "se falso".';
V.vm = "+";
V.wm = "https://pt.wikipedia.org/wiki/Aritm%C3%A9tica";
V.xm = "Retorna a soma dos dois n\u00fameros.";
V.ym = "Retorna o quociente da divis\u00e3o dos dois n\u00fameros.";
V.zm = "Retorna a diferen\u00e7a entre os dois n\u00fameros.";
V.Am = "Retorna o produto dos dois n\u00fameros.";
V.Bm = "Retorna o primeiro n\u00famero elevado \u00e0 pot\u00eancia do segundo n\u00famero.";
V.Cm = "https://pt.wikipedia.org/wiki/Adi%C3%A7%C3%A3o";
V.Dm = "alterar %1 por %2";
V.Fm = 'Soma um n\u00famero \u00e0 vari\u00e1vel "%1".';
V.Gm = "https://pt.wikipedia.org/wiki/Anexo:Lista_de_constantes_matem%C3%A1ticas";
V.Hm = "Retorna uma das constantes comuns: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), ou \u221e (infinito).";
V.Im = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
V.Jm = "restringe %1 inferior %2 superior %3";
V.Km = "Restringe um n\u00famero entre os limites especificados (inclusivo).";
V.Lm = "\u00f7";
V.Mm = "\u00e9 divis\u00edvel por";
V.Nm = "\u00e9 par";
V.Om = "\u00e9 negativo";
V.Pm = "\u00e9 \u00edmpar";
V.Qm = "\u00e9 positivo";
V.Rm = "\u00e9 primo";
V.Sm = "Verifica se um n\u00famero \u00e9 par, \u00edmpar, inteiro, positivo, negativo, ou se \u00e9 divis\u00edvel por outro n\u00famero.  Retorna verdadeiro ou falso.";
V.Tm = "\u00e9 inteiro";
V.Um = "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_m%C3%B3dulo";
V.Vm = "resto da divis\u00e3o de %1 \u00f7 %2";
V.Wm = "Retorna o resto da divis\u00e3o de dois n\u00fameros.";
V.Xm = "\u00d7";
V.Ym = "https://pt.wikipedia.org/wiki/N%C3%BAmero";
V.Zm = "Um n\u00famero.";
V.$m = "";
V.an = "m\u00e9dia da lista";
V.bn = "maior da lista";
V.cn = "mediana da lista";
V.dn = "menor da lista";
V.fn = "moda da lista";
V.gn = "item aleat\u00f3rio da lista";
V.hn = "desvio padr\u00e3o da lista";
V.jn = "soma de uma lista";
V.kn = "Retorna a m\u00e9dia aritm\u00e9tica dos n\u00fameros da lista.";
V.ln = "Retorna o maior n\u00famero da lista.";
V.mn = "Retorna a mediana dos n\u00fameros da lista.";
V.nn = "Retorna o menor n\u00famero da lista.";
V.on = "Retorna uma lista do(s) item(ns) mais comum(ns) da lista.";
V.pn = "Retorna um elemento aleat\u00f3rio da lista.";
V.qn = "Retorna o desvio padr\u00e3o dos n\u00fameros da lista.";
V.rn = "Retorna a soma de todos os n\u00fameros na lista.";
V.sn = "^";
V.tn = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
V.un = "fra\u00e7\u00e3o aleat\u00f3ria";
V.vn = "Retorna uma fra\u00e7\u00e3o aleat\u00f3ria entre 0.0 (inclusivo) e 1.0 (exclusivo).";
V.wn = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
V.xn = "inteiro aleat\u00f3rio entre %1 e %2";
V.yn = "Retorna um n\u00famero inteiro entre os dois limites informados, inclusivo.";
V.zn = "https://pt.wikipedia.org/wiki/Arredondamento";
V.An = "arredonda";
V.Bn = "arredonda para baixo";
V.Cn = "arredonda para cima";
V.Dn = "Arredonda um n\u00famero para cima ou para baixo.";
V.En = "https://pt.wikipedia.org/wiki/Raiz_quadrada";
V.Fn = "absoluto";
V.Gn = "raiz quadrada";
V.Hn = "Retorna o valor absoluto de um n\u00famero.";
V.In = "Retorna o n\u00famero e elevado \u00e0 pot\u00eancia de um n\u00famero.";
V.Jn = "Retorna o logaritmo natural de um n\u00famero.";
V.Kn = "Retorna o logaritmo em base 10 de um n\u00famero.";
V.Ln = "Retorna o oposto de um n\u00famero.";
V.Mn = "Retorna 10 elevado \u00e0 pot\u00eancia de um n\u00famero.";
V.Nn = "Retorna a raiz quadrada de um n\u00famero.";
V.On = "-";
V.Pn = "acos";
V.Qn = "asin";
V.Rn = "atan";
V.Sn = "cos";
V.Tn = "https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_trigonom%C3%A9trica";
V.Un = "sin";
V.Vn = "tan";
V.Wn = "Retorna o arco cosseno de um n\u00famero.";
V.Xn = "Retorna o arco seno de um n\u00famero.";
V.Yn = "Retorna o arco tangente de um n\u00famero.";
V.Zn = "Retorna o cosseno de um grau (n\u00e3o radiano).";
V.$n = "Retorna o seno de um grau (n\u00e3o radiano).";
V.ao = "Retorna a tangente de um grau (n\u00e3o radiano).";
V.bo = "Eu";
V.Qe = "Nova vari\u00e1vel...";
V.Jh = "Nome da nova vari\u00e1vel:";
V.co = "";
V.eo = "permitir declara\u00e7\u00f5es";
V.ho = "com:";
V.io = "https://pt.wikipedia.org/wiki/Sub-rotina";
V.jo = 'Executa a fun\u00e7\u00e3o definida pelo usu\u00e1rio "%1".';
V.lo = "https://pt.wikipedia.org/wiki/Sub-rotina";
V.mo = 'Executa a fun\u00e7\u00e3o definida pelo usu\u00e1rio "%1" e usa seu retorno.';
V.no = "com:";
V.oo = 'Criar "%1"';
V.Kh = "Descreva esta fun\u00e7\u00e3o...";
V.Lh = "";
V.po = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.Mh = "fa\u00e7a algo";
V.Nh = "para";
V.qo = "Cria uma fun\u00e7\u00e3o que n\u00e3o tem retorno.";
V.uo = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.wo = "retorna";
V.yo = "Cria uma fun\u00e7\u00e3o que possui um valor de retorno.";
V.zo = "Aten\u00e7\u00e3o: Esta fun\u00e7\u00e3o tem par\u00e2metros duplicados.";
V.Ao = "Destacar defini\u00e7\u00e3o da fun\u00e7\u00e3o";
V.Bo = "http://c2.com/cgi/wiki?GuardClause";
V.Co = "Se um valor \u00e9 verdadeiro, ent\u00e3o retorna um valor.";
V.Do = "Aten\u00e7\u00e3o: Este bloco s\u00f3 pode ser utilizado dentro da defini\u00e7\u00e3o de uma fun\u00e7\u00e3o.";
V.Eo = "nome da entrada:";
V.Fo = "Adiciona uma entrada para esta fun\u00e7\u00e3o";
V.Go = "entradas";
V.Ho = "Adiciona, remove, ou reordena as entradas para esta fun\u00e7\u00e3o.";
V.Oh = "Refazer";
V.Ph = "Remover coment\u00e1rio";
V.Re = "Renomear vari\u00e1vel...";
V.Qh = "Renomear todas as vari\u00e1veis '%1' para:";
V.Io = "acrescentar texto";
V.Jo = "https://github.com/google/blockly/wiki/Text#text-modification";
V.Ko = "para";
V.Lo = 'Acrescentar um peda\u00e7o de texto \u00e0 vari\u00e1vel "%1".';
V.No = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
V.Oo = "para min\u00fasculas";
V.Po = "para Nomes Pr\u00f3prios";
V.Qo = "para MAI\u00daSCULAS";
V.Ro = "Retorna uma c\u00f3pia do texto em um formato diferente.";
V.So = "obter primeira letra";
V.To = "obter letra # a partir do final";
V.Uo = "obter letra n\u00ba";
V.Vo = "https://github.com/google/blockly/wiki/Text#extracting-text";
V.Wo = "no texto";
V.Xo = "obter \u00faltima letra";
V.Yo = "obter letra aleat\u00f3ria";
V.Zo = "";
V.$o = "Retorna a letra na posi\u00e7\u00e3o especificada.";
V.bp = "Acrescentar um item ao texto.";
V.cp = "unir";
V.ep = "Acrescenta, remove ou reordena se\u00e7\u00f5es para reconfigurar este bloco de texto.";
V.fp = "at\u00e9 letra n\u00ba a partir do final";
V.gp = "at\u00e9 letra n\u00ba";
V.hp = "at\u00e9 \u00faltima letra";
V.ip = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
V.jp = "no texto";
V.kp = "obter trecho de primeira letra";
V.lp = "obter trecho de letra n\u00ba a partir do final";
V.mp = "obter trecho de letra n\u00ba";
V.np = "";
V.op = "Retorna o trecho de texto especificado.";
V.pp = "https://github.com/google/blockly/wiki/Text#finding-text";
V.qp = "no texto";
V.rp = "encontre a primeira ocorr\u00eancia do item";
V.sp = "encontre a \u00faltima ocorr\u00eancia do texto";
V.tp = "";
V.up = "Retorna a posi\u00e7\u00e3o da primeira/\u00faltima ocorr\u00eancia do primeiro texto no segundo texto.  Retorna 0 se o texto n\u00e3o for encontrado.";
V.vp = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
V.wp = "%1 \u00e9 vazio";
V.xp = "Retorna verdadeiro se o texto fornecido for vazio.";
V.yp = "https://github.com/google/blockly/wiki/Text#text-creation";
V.zp = "criar texto com";
V.Ap = "Criar um peda\u00e7o de texto juntando qualquer n\u00famero de itens.";
V.Bp = "https://github.com/google/blockly/wiki/Text#text-modification";
V.Cp = "tamanho de %1";
V.Dp = "Retorna o n\u00famero de letras (incluindo espa\u00e7os) no texto fornecido.";
V.Ep = "https://github.com/google/blockly/wiki/Text#printing-text";
V.Fp = "imprime %1";
V.Gp = "Imprime o texto, n\u00famero ou valor especificado.";
V.Hp = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
V.Ip = "Pede ao usu\u00e1rio um n\u00famero.";
V.Jp = "Pede ao usu\u00e1rio um texto.";
V.Kp = "Pede um n\u00famero com uma mensagem";
V.Lp = "Pede um texto com uma mensagem";
V.Mp = "https://pt.wikipedia.org/wiki/Cadeia_de_caracteres";
V.Np = "Uma letra, palavra ou linha de texto.";
V.Op = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
V.Pp = "remover espa\u00e7os de ambos os lados de";
V.Qp = "remover espa\u00e7os \u00e0 esquerda de";
V.Rp = "remover espa\u00e7os \u00e0 direita de";
V.Sp = "Retorna uma c\u00f3pia do texto com os espa\u00e7os removidos de uma ou ambas extremidades.";
V.Tp = "Hoje";
V.Rh = "Desfazer";
V.Nc = "item";
V.Vp = 'Criar "definir %1"';
V.Wp = "https://github.com/google/blockly/wiki/Variables#get";
V.Xp = "Retorna o valor desta vari\u00e1vel.";
V.Yp = "definir %1 para %2";
V.Zp = 'Criar "obter %1"';
V.$p = "https://github.com/google/blockly/wiki/Variables#set";
V.aq = "Define esta vari\u00e1vel para o valor da entrada.";
V.xo = V.Nh;
V.Lj = V.yh;
V.Wj = V.Od;
V.Nj = V.Od;
V.Ij = V.wh;
V.vo = V.Mh;
V.Tk = V.Qd;
V.vk = V.Qd;
V.Em = V.Nc;
V.to = V.Lh;
V.Gj = V.xh;
V.tk = V.Ih;
V.zj = V.Od;
V.rl = V.Qd;
V.Dj = V.Od;
V.ik = V.Nc;
V.Mo = V.Nc;
V.ap = V.Nc;
V.$k = V.Qd;
V.so = V.Kh;

function $m(a, b) {
    var c;
    c = a.className;
    for (var d = c = q(c) && c.match(/\S+/g) || [], e = ab(arguments, 1), f = 0; f < e.length; f++) Va(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
};
var an = {
        ace: "\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",
        af: "Afrikaans",
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        az: "Az\u0259rbaycanca",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        br: "Brezhoneg",
        ca: "Catal\u00e0",
        cdo: "\u95a9\u6771\u8a9e",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        frr: "Frasch",
        gl: "Galego",
        hak: "\u5ba2\u5bb6\u8a71",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hrx: "Hunsrik",
        hu: "Magyar",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
        km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        ko: "\ud55c\uad6d\uc5b4",
        ksh: "Ripoar\u0117sch",
        ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
        la: "Latine",
        lb: "L\u00ebtzebuergesch",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        mg: "Malagasy",
        ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
        mk: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
        mr: "\u092e\u0930\u093e\u0920\u0940",
        ms: "Bahasa Melayu",
        mzn: "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        oc: "Lenga d'\u00f2c",
        pa: "\u092a\u0902\u091c\u093e\u092c\u0940",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        ps: "\u067e\u069a\u062a\u0648",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sco: "Scots",
        si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
        sk: "Sloven\u010dina",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        sw: "Kishwahili",
        ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tl: "Tagalog",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7c21\u9ad4\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    bn = "ace ar fa he mzn ps".split(" "),
    Rc = window.BlocklyGamesLang,
    cn = window.BlocklyGamesLanguages,
    Tc = !!window.location.pathname.match(/\.html$/),
    T = null;

function dn(a, b, c) {
    var d = Number;
    a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)"))) ? decodeURIComponent(a[1].replace(/\+/g, "%20")) : "NaN";
    d = d(a);
    return isNaN(d) ? b : Math.min(Math.max(b, d), c)
}
var F = dn("level", 1, 10);

function en() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != bn.indexOf(Rc) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Rc);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < cn.length; c++) {
            var d = cn[c];
            b.push([an[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c],
                d = e[1],
                e = new Option(e[0], d);
            d == Rc && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!fn(c), a && b && $m(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(gn, 1)
}

function fn(a) {
    var b = hn,
        c;
    try {
        c = window.localStorage[b + a]
    } catch (d) {}
    return c
}

function X(a) {
    var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    return null === b ? "[Unknown message: " + a + "]" : b
}

function jn(a, b) {
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function gn() {
    if (!Tc) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function() {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
var Z = {
    Pc: null,
    P: function() {
        en();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = X("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = X("Games_linkAlert"), BlocklyStorage.HASH_ERROR = X("Games_hashError"), BlocklyStorage.XML_ERROR = X("Games_xmlError"), BlocklyStorage.alert = Y.Ui, a && jn(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Z.Wh, !0)
    },
    Ei: function(a, b) {
        if ("BlocklyStorage" in
            window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.g
            } catch (f) {}
            c && delete window.sessionStorage.g;
            var d = fn(F),
                e = b && fn(F - 1);
            (c = c || d || e || a) && Z.bh(c)
        }
    },
    bh: function(a) {
        Z.Pc ? Z.Pc.setValue(a, -1) : (a = $g(a), T.clear(), ah(a, T), T.hg())
    },
    Ig: function() {
        if (Z.Pc) var a = Z.Pc.getValue();
        else a = Tg(T), a = Zg(a);
        return a
    },
    Qi: function() {
        window.localStorage && (window.localStorage[hn + F] = Z.Ig())
    },
    ve: function() {
        window.location = (Tc ? "index.html" :
            "./") + "?lang=" + Rc
    },
    Wh: function() {
        if (window.sessionStorage) {
            if (Z.Pc) var a = Z.Pc.getValue();
            else a = Tg(T), a = Zg(a);
            window.sessionStorage.g = a
        }
        var a = document.getElementById("languageMenu"),
            a = encodeURIComponent(a.options[a.selectedIndex].value),
            b = window.location.search,
            b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    ue: function(a) {
        if (a) {
            var b =
                a.match(/^block_id_([^']+)$/);
            b && (a = b[1])
        }
        qi(a)
    },
    Di: function(a, b) {
        var c = document.getElementById(a);
        c.firstChild || (c = zk(c, {
            rtl: -1 != bn.indexOf(Rc),
            readOnly: !0
        }), "string" != typeof b && (b = b.join("")), ah($g(b), c))
    },
    Vi: function(a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    kb: function(a) {
        if ("click" == a.type && "touchend" == Z.kb.h && Z.kb.g + 2E3 > Date.now() || Z.kb.h == a.type && Z.kb.g + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        Z.kb.h = a.type;
        Z.kb.g = Date.now();
        return !1
    }
};
Z.kb.h = null;
Z.kb.g = 0;
Z.Bi = function() {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
Z.Ci = function() {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = Z;
Z.setCode = Z.bh;
Z.getCode = Z.Ig;
var Y = {
    Ac: !1,
    Ag: null,
    ce: null,
    Kd: function(a, b, c, d, e, f) {
        function h() {
            Y.Ac && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }
        Y.Ac && Y.sb(!1);
        Ah(!0);
        Y.Ac = !0;
        Y.Ag = b;
        Y.ce = f;
        var l = document.getElementById("dialog");
        f = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in e) l.style[n] = e[n];
        d && (f.style.visibility = "visible", f.style.opacity = .3, f.style.zIndex = 9, d = document.createElement("div"), d.id = "dialogHeader", l.appendChild(d), Y.cf = O(d, "mousedown",
            null, Y.gi));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (Y.Ce(b, !1, .2), Y.Ce(l, !0, .8), setTimeout(h, 175)) : h()
    },
    Bg: 0,
    Cg: 0,
    gi: function(a) {
        Y.ff();
        if (!vh(a)) {
            var b = document.getElementById("dialog");
            Y.Bg = b.offsetLeft - a.clientX;
            Y.Cg = b.offsetTop - a.clientY;
            Y.ef = O(document, "mouseup", null, Y.ff);
            Y.df = O(document, "mousemove", null, Y.ii);
            a.stopPropagation()
        }
    },
    ii: function(a) {
        var b = document.getElementById("dialog"),
            c = Y.Bg + a.clientX;
        a = Y.Cg + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight -
            b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    ff: function() {
        Y.ef && (Q(Y.ef), Y.ef = null);
        Y.df && (Q(Y.df), Y.df = null)
    },
    sb: function(a) {
        function b() {
            d.style.zIndex = -1;
            d.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (Y.Ac) {
            Y.ff();
            Y.cf && (Q(Y.cf), Y.cf = null);
            Y.Ac = !1;
            Y.ce && Y.ce();
            Y.ce = null;
            var c = !1 === a ? null : Y.Ag;
            a = document.getElementById("dialog");
            var d = document.getElementById("dialogShadow");
            d.style.opacity = 0;
            c ? (Y.Ce(a, !1, .8), Y.Ce(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    Ce: function(a, b, c) {
        function d() {
            e.style.width = f.width + "px";
            e.style.height = f.height + "px";
            e.style.left = f.x + "px";
            e.style.top = f.y + "px";
            e.style.opacity = c
        }
        if (a) {
            var e = document.getElementById("dialogBorder"),
                f = Y.Hg(a);
            b ? (e.className = "dialogAnimate", setTimeout(d, 1)) : (e.className = "", d());
            e.style.visibility = "visible"
        }
    },
    Hg: function(a) {
        var b = Ge(a);
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    Ui: function(a) {
        var b = document.getElementById("containerStorage");
        b.textContent = "";
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("p");
            d.appendChild(document.createTextNode(a[c]));
            b.appendChild(d)
        }
        b = document.getElementById("dialogStorage");
        a = document.getElementById("linkButton");
        Y.Kd(b, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, Y.fh);
        Y.eh()
    },
    dg: function() {
        if (!fn(F))
            if (Y.Ac || 0 != K) setTimeout(Y.dg, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", Y.sb, !0);
                b.addEventListener("touchend", Y.sb, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Z.ve, !0);
                b.addEventListener("touchend", Z.ve, !0);
                Y.Kd(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown",
                        Y.cg, !0)
                });
                document.body.addEventListener("keydown", Y.cg, !0)
            }
    },
    Yh: function() {
        var a = document.getElementById("dialogDone");
        if (T) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = Kk(),
                c = Z.Vi(c),
                d = c.split("\n").length,
                e = document.getElementById("containerCode");
            e.textContent = c;
            "function" == typeof prettyPrintOne && (c = e.innerHTML, c = prettyPrintOne(c, "js"), e.innerHTML = c);
            c = 1 == d ? X("Games_linesOfCode1") : X("Games_linesOfCode2").replace("%1", d);
            b.appendChild(document.createTextNode(c))
        }
        c =
            10 > F ? X("Games_nextLevel").replace("%1", F + 1) : X("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", Y.sb, !0);
        b.addEventListener("touchend", Y.sb, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Z.Bf, !0);
        b.addEventListener("touchend", Z.Bf, !0);
        Y.Kd(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", Y.jg, !0)
        });
        document.body.addEventListener("keydown", Y.jg, !0);
        document.getElementById("dialogDoneText").textContent =
            c
    },
    zg: function(a) {
        !Y.Ac || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (Y.sb(!0), a.stopPropagation(), a.preventDefault())
    },
    eh: function() {
        document.body.addEventListener("keydown", Y.zg, !0)
    },
    fh: function() {
        document.body.removeEventListener("keydown", Y.zg, !0)
    },
    jg: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.sb(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.Bf()
    },
    cg: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.sb(!0), a.stopPropagation(), a.preventDefault(), 27 !=
            a.keyCode && Z.ve()
    }
};
window.BlocklyDialogs = Y;
Y.hideDialog = Y.sb;
// Copyright 2012 Google Inc.  Apache License 2.0
var W = new Jk;
Ok("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
W.G = 0;
W.Td = 1;
W.$f = 1;
W.nc = 2;
W.qc = 3;
W.bb = 3;
W.Rd = 4;
W.L = 4;
W.gq = 4;
W.fq = 4;
W.Zi = 4;
W.lq = 4;
W.Qa = 4;
W.Zf = 5;
W.Vb = 5;
W.Ud = 5;
W.F = 6;
W.eq = 6;
W.ba = 7;
W.cq = 8;
W.pc = 8;
W.Mc = 8;
W.Wb = 9;
W.J = 10;
W.sa = 11;
W.W = 12;
W.ld = 13;
W.Sd = 14;
W.Pa = 15;
W.H = 16;
W.Ha = 17;
W.bq = 99;
W.P = function(a) {
    W.g = Object.create(null);
    W.A = Object.create(null);
    W.h ? W.h.reset() : W.h = new Pk(W.i);
    var b = [];
    a = ok(a);
    if (a.length) {
        for (var c = 0; c < a.length; c++) b[c] = W.h.getName(a[c], "VARIABLE");
        W.g.variables = "var " + b.join(", ") + ";"
    }
};
W.finish = function(a) {
    var b = [],
        c;
    for (c in W.g) b.push(W.g[c]);
    delete W.g;
    delete W.A;
    W.h.reset();
    return b.join("\n\n") + "\n\n\n" + a
};
W.j = function(a) {
    return a + ";\n"
};
W.nq = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
W.u = function(a, b) {
    var c = "";
    if (!a.K || !a.K.M) {
        var d = a.je();
        d && (c += Mk(d, "// ") + "\n");
        for (var e = 0; e < a.h.length; e++)
            if (1 == a.h[e].type) {
                var f = G(a.h[e].I);
                if (f) {
                    for (var d = [], f = f.Wa(), h = 0; h < f.length; h++) {
                        var l = f[h].je();
                        l && d.push(l)
                    }
                    d.length && d.push("");
                    (d = d.join("\n")) && (c += Mk(d, "// "))
                }
            }
    }
    e = Lk(W, a.g && G(a.g));
    return c + b + e
};
Ni.maze_moveForward = {
    P: function() {
        var a = {
            message0: X("Maze_moveForward"),
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: X("Maze_moveForwardTooltip")
        };
        void 0 !== a.colour && this.lc(a.colour);
        for (var b = 0; void 0 !== a["message" + b];) {
            var c = a["args" + b] || [],
                d = a["lastDummyAlign" + b],
                e = [],
                f = a["message" + b].split("");
            f.push("");
            for (var h = 0, l = [], m = null, n = 0; n < f.length; n++) {
                var p = f[n];
                0 == h ? "%" == p ? h = 1 : l.push(p) : 1 == h ? "%" == p ? (l.push(p), h = 0) : "0" <= p && "9" >= p ? (h = 2, m = p, (p = l.join("")) && e.push(p), l.length = 0) : (l.push("%",
                    p), h = 0) : 2 == h && ("0" <= p && "9" >= p ? m += p : (e.push(parseInt(m, 10)), n--, h = 0))
            }(p = l.join("")) && e.push(p);
            l = 0;
            f = [];
            for (h = 0; h < e.length; h++) m = e[h], "number" == typeof m ? (l++, f.push(c[m - 1])) : (m = m.trim()) && f.push(m);
            !f.length || "string" != typeof f[f.length - 1] && 0 != f[f.length - 1].type.indexOf("field_") || (h = {
                type: "input_dummy"
            }, d && (h.align = d), f.push(h));
            d = {
                LEFT: -1,
                RIGHT: 1,
                CENTRE: 0
            };
            c = [];
            for (h = 0; h < f.length; h++)
                if (l = f[h], "string" == typeof l) c.push([l, void 0]);
                else {
                    e = m = null;
                    do switch (n = !1, l.type) {
                        case "input_value":
                            e = this.Va(1,
                                l.name);
                            break;
                        case "input_statement":
                            e = this.Va(3, l.name);
                            break;
                        case "input_dummy":
                            e = this.Va(5, l.name || "");
                            break;
                        case "field_label":
                            m = new pj(l.text, l["class"]);
                            break;
                        case "field_input":
                            m = new Lj(l.text);
                            "boolean" == typeof l.spellcheck && (m.dh = l.spellcheck);
                            break;
                        case "field_angle":
                            m = new Wk(l.angle);
                            break;
                        case "field_checkbox":
                            m = new qm(l.checked ? "TRUE" : "FALSE");
                            break;
                        case "field_colour":
                            m = new Wm(l.colour);
                            break;
                        case "field_variable":
                            m = new pk(l.variable);
                            break;
                        case "field_dropdown":
                            m = new hk(l.options);
                            break;
                        case "field_image":
                            m = new pm(l.src, l.width, l.height, l.alt);
                            break;
                        case "field_number":
                            m = new om(l.text);
                            break;
                        case "field_date":
                            if (Hd.Pe) {
                                m = new Hd.Pe(l.date);
                                break
                            }
                        default:
                            l.alt && (l = l.alt, n = !0)
                    }
                    while (n);
                    if (m) c.push([m, l.name]);
                    else if (e) {
                        if (l.check) {
                            if (!e.I) throw "This input does not have a connection.";
                            ie(e.I, l.check)
                        }
                        l.align && (m = e, m.align = d[l.align], m.g.O && m.g.U());
                        for (l = 0; l < c.length; l++) rj(e, c[l][0], c[l][1]);
                        c.length = 0
                    }
                }
            b++
        }
        void 0 !== a.inputsInline && this.ed(a.inputsInline);
        void 0 !== a.output &&
            this.Of(!0, a.output);
        void 0 !== a.previousStatement && this.Fc(!0, a.previousStatement);
        void 0 !== a.nextStatement && this.fd(!0, a.nextStatement);
        void 0 !== a.tooltip && (this.$a = a.tooltip);
        void 0 !== a.helpUrl && (this.L = a.helpUrl)
    }
};
W.maze_moveForward = function(a) {
    return "moveForward('block_id_" + a.id + "');\n"
};
Ni.maze_turn = {
    P: function() {
        var a = [
            [X("Maze_turnLeft"), "turnLeft"],
            [X("Maze_turnRight"), "turnRight"]
        ];
        a[0][0] += " \u21ba";
        a[1][0] += " \u21bb";
        this.lc(290);
        rj(this.Va(5, ""), new hk(a), "DIR");
        this.Fc(!0);
        this.fd(!0);
        this.$a = X("Maze_turnTooltip")
    }
};
W.maze_turn = function(a) {
    return zj(a) + "('block_id_" + a.id + "');\n"
};
Ni.maze_if = {
    P: function() {
        var a = [
            [X("Maze_pathAhead"), "isPathForward"],
            [X("Maze_pathLeft"), "isPathLeft"],
            [X("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.lc(210);
        rj(this.Va(5, ""), new hk(a), "DIR");
        rj(this.Va(3, "DO"), X("Maze_doCode"));
        this.$a = X("Maze_ifTooltip");
        this.Fc(!0);
        this.fd(!0)
    }
};
W.maze_if = function(a) {
    var b = zj(a) + "('block_id_" + a.id + "')";
    a = Nk(a, "DO");
    return "if (" + b + ") {\n" + a + "}\n"
};
Ni.maze_ifElse = {
    P: function() {
        var a = [
            [X("Maze_pathAhead"), "isPathForward"],
            [X("Maze_pathLeft"), "isPathLeft"],
            [X("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.lc(210);
        rj(this.Va(5, ""), new hk(a), "DIR");
        rj(this.Va(3, "DO"), X("Maze_doCode"));
        rj(this.Va(3, "ELSE"), X("Maze_elseCode"));
        this.$a = X("Maze_ifelseTooltip");
        this.Fc(!0);
        this.fd(!0)
    }
};
W.maze_ifElse = function(a) {
    var b = zj(a) + "('block_id_" + a.id + "')",
        c = Nk(a, "DO");
    a = Nk(a, "ELSE");
    return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n"
};
Ni.maze_forever = {
    P: function() {
        this.lc(120);
        rj(rj(this.Va(5, ""), X("Maze_repeatUntil")), new pm(kn.Be, 12, 16));
        rj(this.Va(3, "DO"), X("Maze_doCode"));
        this.Fc(!0);
        this.$a = X("Maze_whileTooltip")
    }
};
W.maze_forever = function(a) {
    return "while (notDone()) {\n" + Nk(a, "DO") + "}\n"
};
var hn = "maze";
Z.Bf = function() {
    10 > F ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Rc + "&level=" + (F + 1) + "&skin=" + Sc : Z.ve()
};
var ln = [void 0, Infinity, Infinity, 2, 5, 5, 5, 5, 10, 7, 10][F],
    mn = [{
        gd: "maze/pegman.png",
        Tf: "maze/tiles_pegman.png",
        Be: "maze/marker.png",
        background: !1,
        wd: !1,
        Af: "#000",
        Wf: ["maze/win.mp3", "maze/win.ogg"],
        Ye: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
        $d: 1
    }, {
        gd: "maze/astro.png",
        Tf: "maze/tiles_astro.png",
        Be: "maze/marker.png",
        background: "maze/bg_astro.jpg",
        wd: !1,
        Af: "#fff",
        Wf: ["maze/win.mp3", "maze/win.ogg"],
        Ye: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
        $d: 2
    }, {
        gd: "maze/panda.png",
        Tf: "maze/tiles_panda.png",
        Be: "maze/marker.png",
        background: "maze/bg_panda.jpg",
        wd: !1,
        Af: "#000",
        Wf: ["maze/win.mp3", "maze/win.ogg"],
        Ye: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
        $d: 3
    }],
    Sc = dn("skin", 0, mn.length),
    kn = mn[Sc],
    nn = [void 0, [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 1, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 3, 0, 0, 0],
            [0, 0, 2, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 1, 1, 1, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 3, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 2, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 2, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0],
            [0, 1, 1, 3, 0, 1, 0, 0],
            [0, 0, 0, 0,
                0, 1, 0, 0
            ],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 3, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0],
            [0, 2, 1, 1, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [3, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 2, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 3, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0],
            [0, 2, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ][F],
    on = nn.length,
    pn = nn[0].length,
    qn = 50 * pn,
    rn = 50 * on,
    sn = 0,
    tn = [],
    un = {
        10010: [4, 0],
        10001: [3, 3],
        11E3: [0, 1],
        10100: [0, 2],
        11010: [4, 1],
        10101: [3, 2],
        10110: [0, 0],
        10011: [2, 0],
        11001: [4, 2],
        11100: [2, 3],
        11110: [1, 1],
        10111: [1, 0],
        11011: [2, 1],
        11101: [1, 2],
        11111: [2, 2],
        null0: [4, 3],
        null1: [3, 0],
        null2: [3, 1],
        null3: [0, 3],
        null4: [1, 3]
    };

function vn() {
    function a(a, b) {
        return 0 > a || a >= pn || 0 > b || b >= on ? "0" : 0 == nn[b][a] ? "0" : "1"
    }
    var b = document.getElementById("svgMaze"),
        c = 50 * Math.max(on, pn);
    b.setAttribute("viewBox", "0 0 " + c + " " + c);
    c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    c.setAttribute("width", qn);
    c.setAttribute("height", rn);
    c.setAttribute("fill", "#F1EEE7");
    c.setAttribute("stroke-width", 1);
    c.setAttribute("stroke", "#CCB");
    b.appendChild(c);
    if (kn.background) {
        var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
        d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", kn.background);
        d.setAttribute("height", rn);
        d.setAttribute("width", qn);
        d.setAttribute("x", 0);
        d.setAttribute("y", 0);
        b.appendChild(d)
    }
    if (kn.wd) {
        for (c = 0; c < on; c++) {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
            e.setAttribute("y1", 50 * c + 25.5);
            e.setAttribute("x2", qn);
            e.setAttribute("y2", 50 * c + 25.5);
            e.setAttribute("stroke", kn.wd);
            e.setAttribute("stroke-width", 1);
            b.appendChild(e)
        }
        for (c = 0; c < pn; c++) e = document.createElementNS("http://www.w3.org/2000/svg",
            "line"), e.setAttribute("x1", 50 * c + 25.5), e.setAttribute("x2", 50 * c + 25.5), e.setAttribute("y2", rn), e.setAttribute("stroke", kn.wd), e.setAttribute("stroke-width", 1), b.appendChild(e)
    }
    for (e = c = 0; e < on; e++)
        for (var f = 0; f < pn; f++) {
            d = a(f, e) + a(f, e - 1) + a(f + 1, e) + a(f, e + 1) + a(f - 1, e);
            un[d] || (d = "00000" == d && .3 < Math.random() ? "null0" : "null" + Math.floor(1 + 4 * Math.random()));
            var h = un[d][0],
                l = un[d][1],
                m = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            m.setAttribute("id", "tileClipPath" + c);
            d = document.createElementNS("http://www.w3.org/2000/svg",
                "rect");
            d.setAttribute("width", 50);
            d.setAttribute("height", 50);
            d.setAttribute("x", 50 * f);
            d.setAttribute("y", 50 * e);
            m.appendChild(d);
            b.appendChild(m);
            d = document.createElementNS("http://www.w3.org/2000/svg", "image");
            d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", kn.Tf);
            d.setAttribute("height", 200);
            d.setAttribute("width", 250);
            d.setAttribute("clip-path", "url(#tileClipPath" + c + ")");
            d.setAttribute("x", 50 * (f - h));
            d.setAttribute("y", 50 * (e - l));
            b.appendChild(d);
            c++
        }
    c = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    c.setAttribute("id", "finish");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", kn.Be);
    c.setAttribute("height", 34);
    c.setAttribute("width", 20);
    b.appendChild(c);
    c = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    c.setAttribute("id", "pegmanClipPath");
    d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    d.setAttribute("id", "clipRect");
    d.setAttribute("width", 49);
    d.setAttribute("height", 52);
    c.appendChild(d);
    b.appendChild(c);
    c = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    c.setAttribute("id", "pegman");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", kn.gd);
    c.setAttribute("height", 52);
    c.setAttribute("width", 1029);
    c.setAttribute("clip-path", "url(#pegmanClipPath)");
    b.appendChild(c)
}

function wn() {
    if (0 == K && 1 != sn && !fn(F)) {
        var a = -1 != bn.indexOf(Rc),
            b = Zg(Tg(T)),
            c = Og(T.X.o, !0),
            d = null,
            e = null,
            f = null;
        if (1 == F) 2 > T.Rb().length ? (d = document.getElementById("dialogHelpStack"), f = {
            width: "370px",
            top: "130px"
        }, f[a ? "right" : "left"] = "215px", e = c[0].m) : (c = Og(T, !0), 1 < c.length ? (Z.Di("sampleOneTopBlock", '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(";")), d = document.getElementById("dialogHelpOneTopBlock"), f = {
            width: "360px",
            top: "120px"
        }, f[a ? "right" : "left"] = "225px", e = c[0].m) : 0 == sn && (d = document.getElementById("dialogHelpRun"), f = {
            width: "360px",
            top: "410px"
        }, f[a ? "right" : "left"] = "400px", e = document.getElementById("runButton")));
        else if (2 == F) 0 != sn && "none" == document.getElementById("runButton").style.display && (d = document.getElementById("dialogHelpReset"), f = {
            width: "360px",
            top: "410px"
        }, f[a ? "right" : "left"] = "400px", e = document.getElementById("resetButton"));
        else if (3 == F) - 1 == b.indexOf("maze_forever") && (0 == Qg(T) ? (d = document.getElementById("dialogHelpCapacity"),
            f = {
                width: "430px",
                top: "310px"
            }, f[a ? "right" : "left"] = "50px", e = document.getElementById("capacityBubble")) : (d = document.getElementById("dialogHelpRepeat"), f = {
            width: "360px",
            top: "360px"
        }, f[a ? "right" : "left"] = "425px", e = c[3].m));
        else if (4 == F)
            if (0 == Qg(T) && (-1 == b.indexOf("maze_forever") || 1 < Og(T, !1).length)) d = document.getElementById("dialogHelpCapacity"), f = {
                width: "430px",
                top: "310px"
            }, f[a ? "right" : "left"] = "50px", e = document.getElementById("capacityBubble");
            else {
                for (var b = !0, h = T.Rb(), l = 0; l < h.length; l++) {
                    var m = h[l];
                    if ("maze_forever" == m.type) {
                        for (var n = 0; m;) m = m.Zb(), m = m.length ? m[0] : null, n++;
                        if (2 < n) {
                            b = !1;
                            break
                        }
                    }
                }
                b && (d = document.getElementById("dialogHelpRepeatMany"), f = {
                    width: "360px",
                    top: "360px"
                }, f[a ? "right" : "left"] = "425px", e = c[3].m)
            } else if (5 == F) 0 != Sc || xn.g || (d = document.getElementById("dialogHelpSkins"), f = {
            width: "360px",
            top: "60px"
        }, f[a ? "left" : "right"] = "20px", e = document.getElementById("pegmanButton"));
        else if (6 == F) - 1 == b.indexOf("maze_if") && (d = document.getElementById("dialogHelpIf"), f = {
                width: "360px",
                top: "430px"
            },
            f[a ? "right" : "left"] = "425px", e = c[4].m);
        else if (7 == F) {
            if (!yn) {
                h = document.createElement("span");
                h.className = "helpMenuFake";
                l = [X("Maze_pathAhead"), X("Maze_pathLeft"), X("Maze_pathRight")];
                n = mk(l);
                m = nk(l);
                h.textContent = (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + kk;
                n = document.getElementById("helpMenuText");
                l = n.textContent;
                n.textContent = "";
                m = l.split(/%\d/);
                for (l = 0; l < m.length; l++) n.appendChild(document.createTextNode(m[l])), l != m.length - 1 && n.appendChild(h.cloneNode(!0));
                yn = !0
            } - 1 == b.indexOf("isPathRight") &&
                (d = document.getElementById("dialogHelpMenu"), f = {
                    width: "360px",
                    top: "430px"
                }, f[a ? "right" : "left"] = "425px", e = c[4].m)
        } else 9 == F && -1 == b.indexOf("maze_ifElse") && (d = document.getElementById("dialogHelpIfElse"), f = {
            width: "360px",
            top: "305px"
        }, f[a ? "right" : "left"] = "425px", e = c[5].m);
        d ? d.parentNode != document.getElementById("dialog") && Y.Kd(d, e, !0, !1, f, null) : Y.sb(!1)
    }
}
var yn;

function xn(a) {
    var b = document.getElementById("pegmanMenu");
    "block" == b.style.display ? zn(a) : Z.kb(a) || (a = document.getElementById("pegmanButton"), Fg(a, "buttonHover"), b.style.top = a.offsetTop + a.offsetHeight + "px", b.style.left = a.offsetLeft + "px", b.style.display = "block", Lc.Df = O(document.body, "mousedown", null, zn), (b = document.getElementById("dialogHelpSkins")) && "dialogHiddenContent" != b.className && Y.sb(!1), xn.g = !0)
}

function zn(a) {
    Z.kb(a) || (document.getElementById("pegmanMenu").style.display = "none", Li(document.getElementById("pegmanButton"), "buttonHover"), Lc.Df && (Q(Lc.Df), delete Lc.Df))
}

function An(a) {
    for (var b = 0; b < tn.length; b++) window.clearTimeout(tn[b]);
    tn = [];
    B = Nc.x;
    C = Nc.y;
    a ? (D = 2, Bn(!1), tn.push(setTimeout(function() {
        Mc = 100;
        Cn([B, C, 4 * D - 4]);
        D++
    }, 5 * Mc))) : (D = 1, Dn(B, C, 4 * D));
    a = document.getElementById("finish");
    a.setAttribute("x", 50 * (Oc.x + .5) - a.getAttribute("width") / 2);
    a.setAttribute("y", 50 * (Oc.y + .6) - a.getAttribute("height"));
    a = document.getElementById("look");
    a.style.display = "none";
    a.parentNode.appendChild(a);
    a = a.getElementsByTagName("path");
    for (var b = 0, c; c = a[b]; b++) c.setAttribute("stroke",
        kn.Af)
}

function En(a) {
    if (!Z.kb(a))
        if (Y.sb(!1), 1 == F && 1 < Og(T).length && 1 != sn && !fn(F)) wn();
        else {
            a = document.getElementById("runButton");
            var b = document.getElementById("resetButton");
            b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
            a.style.display = "none";
            b.style.display = "inline";
            pi(T, !0);
            An(!1);
            Fn()
        }
}

function Gn(a) {
    Z.kb(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", pi(T, !1), An(!1), wn())
}

function Hn(a, b) {
    var c;
    c = function(a) {
        In(0, a.toString())
    };
    a.setProperty(b, "moveForward", a.createNativeFunction(c));
    c = function(a) {
        In(2, a.toString())
    };
    a.setProperty(b, "moveBackward", a.createNativeFunction(c));
    c = function(a) {
        Jn(0, a.toString())
    };
    a.setProperty(b, "turnLeft", a.createNativeFunction(c));
    c = function(a) {
        Jn(1, a.toString())
    };
    a.setProperty(b, "turnRight", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(0, b.toString()))
    };
    a.setProperty(b, "isPathForward", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(1, b.toString()))
    };
    a.setProperty(b, "isPathRight", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(2, b.toString()))
    };
    a.setProperty(b, "isPathBackward", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(3, b.toString()))
    };
    a.setProperty(b, "isPathLeft", a.createNativeFunction(c));
    a.setProperty(b, "notDone", a.createNativeFunction(function() {
        return a.createPrimitive(B != Oc.x || C != Oc.y)
    }))
}

function Fn() {
    if ("Interpreter" in window) {
        Pc = [];
        var a = Kk();
        sn = 0;
        a = new Interpreter(a, Hn);
        try {
            for (var b = 1E4; a.step();)
                if (0 == b--) throw Infinity;
            sn = B != Oc.x || C != Oc.y ? -1 : 1
        } catch (c) {
            Infinity === c ? sn = 2 : !1 === c ? sn = -2 : (sn = -2, alert(c))
        }
        1 == sn ? (Mc = 100, Pc.push(["finish", null])) : Mc = 150;
        An(!1);
        tn.push(setTimeout(Ln, 100))
    } else setTimeout(Fn, 250)
}

function Ln() {
    var a = Pc.shift();
    if (a) {
        Z.ue(a[1]);
        switch (a[0]) {
            case "north":
                Cn([B, C - 1, 4 * D]);
                C--;
                break;
            case "east":
                Cn([B + 1, C, 4 * D]);
                B++;
                break;
            case "south":
                Cn([B, C + 1, 4 * D]);
                C++;
                break;
            case "west":
                Cn([B - 1, C, 4 * D]);
                B--;
                break;
            case "look_north":
                Mn(0);
                break;
            case "look_east":
                Mn(1);
                break;
            case "look_south":
                Mn(2);
                break;
            case "look_west":
                Mn(3);
                break;
            case "fail_forward":
                Nn(!0);
                break;
            case "fail_backward":
                Nn(!1);
                break;
            case "left":
                Cn([B, C, 4 * D - 4]);
                D = On(D - 1);
                break;
            case "right":
                Cn([B, C, 4 * D + 4]);
                D = On(D + 1);
                break;
            case "finish":
                Bn(!0),
                    Z.Qi(), setTimeout(Y.Yh, 1E3)
        }
        tn.push(setTimeout(Ln, 5 * Mc))
    } else Z.ue(null), wn()
}

function Pn(a) {
    if ("dialogHiddenContent" != document.getElementById("dialogDone").className) {
        var b = document.getElementById("pegSpin"),
            c = Y.Hg(b),
            d = a.clientX - (c.x + c.width / 2 - window.pageXOffset);
        a = Math.atan((a.clientY - (c.y + c.height / 2 - window.pageYOffset)) / d);
        a = a / Math.PI * 180;
        d = Math.round((0 < d ? a + 90 : a + 270) / 360 * 16);
        16 == d && (d = 15);
        b.style.backgroundPosition = 49 * -d + "px 0px"
    }
}

function Cn(a) {
    var b = [B, C, 4 * D],
        c = [(a[0] - b[0]) / 4, (a[1] - b[1]) / 4, (a[2] - b[2]) / 4];
    Dn(b[0] + c[0], b[1] + c[1], Qn(b[2] + c[2]));
    tn.push(setTimeout(function() {
        Dn(b[0] + 2 * c[0], b[1] + 2 * c[1], Qn(b[2] + 2 * c[2]))
    }, Mc));
    tn.push(setTimeout(function() {
        Dn(b[0] + 3 * c[0], b[1] + 3 * c[1], Qn(b[2] + 3 * c[2]))
    }, 2 * Mc));
    tn.push(setTimeout(function() {
        Dn(a[0], a[1], Qn(a[2]))
    }, 3 * Mc))
}

function Nn(a) {
    var b = 0,
        c = 0;
    switch (D) {
        case 0:
            c = -1;
            break;
        case 1:
            b = 1;
            break;
        case 2:
            c = 1;
            break;
        case 3:
            b = -1
    }
    a || (b = -b, c = -c);
    if (1 == kn.$d) {
        var b = b / 4,
            c = c / 4,
            d = Qn(4 * D);
        Dn(B + b, C + c, d);
        Gi(T, "fail", .5);
        tn.push(setTimeout(function() {
            Dn(B, C, d)
        }, Mc));
        tn.push(setTimeout(function() {
            Dn(B + b, C + c, d);
            Gi(T, "fail", .5)
        }, 2 * Mc));
        tn.push(setTimeout(function() {
            Dn(B, C, d)
        }, 3 * Mc))
    } else {
        var e = 10 * (Math.random() - .5),
            f = (Math.random() - .5) / 2,
            b = b + (Math.random() - .5) / 4,
            c = c + (Math.random() - .5) / 4,
            b = b / 8,
            c = c / 8,
            h = 0;
        3 == kn.$d && (h = .01);
        tn.push(setTimeout(function() {
            Gi(T,
                "fail", .5)
        }, 2 * Mc));
        a = function(a) {
            return function() {
                Dn(B + b * a, C + c * a, Qn(4 * D + f * a), e * a);
                c += h
            }
        };
        for (var l = 1; 100 > l; l++) tn.push(setTimeout(a(l), Mc * l / 2))
    }
}

function Bn(a) {
    var b = Qn(4 * D);
    Dn(B, C, 16);
    a && Gi(T, "win", .5);
    Mc = 150;
    tn.push(setTimeout(function() {
        Dn(B, C, 18)
    }, Mc));
    tn.push(setTimeout(function() {
        Dn(B, C, 16)
    }, 2 * Mc));
    tn.push(setTimeout(function() {
        Dn(B, C, b)
    }, 3 * Mc))
}

function Dn(a, b, c, d) {
    var e = document.getElementById("pegman");
    e.setAttribute("x", 50 * a - 49 * c + 1);
    e.setAttribute("y", 50 * (b + .5) - 26 - 8);
    d ? e.setAttribute("transform", "rotate(" + d + ", " + (50 * a + 25) + ", " + (50 * b + 25) + ")") : e.setAttribute("transform", "rotate(0, 0, 0)");
    b = document.getElementById("clipRect");
    b.setAttribute("x", 50 * a + 1);
    b.setAttribute("y", e.getAttribute("y"))
}

function Mn(a) {
    var b = B,
        c = C;
    switch (a) {
        case 0:
            b += .5;
            break;
        case 1:
            b += 1;
            c += .5;
            break;
        case 2:
            b += .5;
            c += 1;
            break;
        case 3:
            c += .5
    }
    b *= 50;
    c *= 50;
    a = 90 * a - 45;
    var d = document.getElementById("look");
    d.setAttribute("transform", "translate(" + b + ", " + c + ") rotate(" + a + " 0 0) scale(.4)");
    a = d.getElementsByTagName("path");
    d.style.display = "inline";
    for (b = 0; d = a[b]; b++) Rn(d, Mc * b)
}

function Rn(a, b) {
    tn.push(setTimeout(function() {
        a.style.display = "inline";
        setTimeout(function() {
            a.style.display = "none"
        }, 2 * Mc)
    }, b))
}

function On(a) {
    a = Math.round(a) % 4;
    0 > a && (a += 4);
    return a
}

function Qn(a) {
    a = Math.round(a) % 16;
    0 > a && (a += 16);
    return a
}

function In(a, b) {
    if (!Kn(a, null)) throw Pc.push(["fail_" + (a ? "backward" : "forward"), b]), !1;
    var c;
    switch (On(D + a)) {
        case 0:
            C--;
            c = "north";
            break;
        case 1:
            B++;
            c = "east";
            break;
        case 2:
            C++;
            c = "south";
            break;
        case 3:
            B--, c = "west"
    }
    Pc.push([c, b])
}

function Jn(a, b) {
    a ? (D++, Pc.push(["right", b])) : (D--, Pc.push(["left", b]));
    D = On(D)
}

function Kn(a, b) {
    var c, d;
    switch (On(D + a)) {
        case 0:
            c = nn[C - 1] && nn[C - 1][B];
            d = "look_north";
            break;
        case 1:
            c = nn[C][B + 1];
            d = "look_east";
            break;
        case 2:
            c = nn[C + 1] && nn[C + 1][B];
            d = "look_south";
            break;
        case 3:
            c = nn[C][B - 1], d = "look_west"
    }
    b && Pc.push([d, b]);
    return 0 !== c && void 0 !== c
}
window.addEventListener("load", function() {
    function a() {
        l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
        l.style.left = h ? "10px" : "420px";
        l.style.width = window.innerWidth - 440 + "px"
    }

    function b(a) {
        return function() {
            if (window.sessionStorage) {
                var b = Tg(T),
                    b = Zg(b);
                window.sessionStorage.g = b
            }
            window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Rc + "&level=" + F + "&skin=" + a
        }
    }
    document.body.innerHTML = Qc();
    Z.P();
    document.querySelector("#pegmanButton>img").style.backgroundImage =
        "url(" + kn.gd + ")";
    for (var c = document.getElementById("pegmanMenu"), d = 0; d < mn.length; d++)
        if (d != Sc) {
            var e = document.createElement("div"),
                f = document.createElement("img");
            f.src = "common/1x1.gif";
            f.style.backgroundImage = "url(" + mn[d].gd + ")";
            e.appendChild(f);
            c.appendChild(e);
            O(e, "mousedown", null, b(d))
        }
    O(window, "resize", null, zn);
    c = document.getElementById("pegmanButton");
    O(c, "mousedown", null, xn);
    document.getElementById("pegmanButtonArrow").appendChild(document.createTextNode(kk));
    var h = -1 != bn.indexOf(Rc),
        l = document.getElementById("blockly"),
        m = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a();
        Hd.mq(window, "resize")
    });
    window.addEventListener("resize", a);
    a();
    c = document.getElementById("toolbox");
    T = zk("blockly", {
        media: "third-party/blockly/media/",
        maxBlocks: ln,
        rtl: h,
        toolbox: c,
        trashcan: !0,
        zoom: {
            startScale: 1 + (1 - F / 10) / 3
        }
    });
    Fi(T, kn.Wf, "win");
    Fi(T, kn.Ye, "fail");
    Ok("moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");
    vn();
    Z.Ei('<xml>  <block movable="' + (1 != F) + '" type="maze_moveForward" x="70" y="70"></block></xml>', !1);
    for (c = 0; c < on; c++)
        for (d = 0; d < pn; d++) 2 == nn[c][d] ? Nc = {
            x: d,
            y: c
        } : 3 == nn[c][d] && (Oc = {
            x: d,
            y: c
        });
    An(!0);
    T.Pb(function() {
        var a = Qg(T),
            b = document.getElementById("capacity");
        if (Infinity == a) b.style.display = "none";
        else {
            b.style.display = "inline";
            b.innerHTML = "";
            var a = Number(a),
                c = document.createElement("span");
            c.className = "capacityNumber";
            c.appendChild(document.createTextNode(a));
            for (var a = (0 == a ? X("Maze_capacity0") : 1 == a ? X("Maze_capacity1") : X("Maze_capacity2")).split(/%\d/), d = 0; d < a.length; d++) b.appendChild(document.createTextNode(a[d])),
                d != a.length - 1 && b.appendChild(c.cloneNode(!0))
        }
    });
    document.body.addEventListener("mousemove", Pn, !0);
    jn("runButton", En);
    jn("resetButton", Gn);
    1 == F && (ne *= 2);
    10 == F ? fn(F) || (c = document.getElementById("dialogHelpWallFollow"), Y.Kd(c, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, Y.fh), Y.eh(), setTimeout(Y.dg, 3E5)) : setTimeout(function() {
        T.Pb(function() {
            wn()
        });
        wn()
    }, 5E3);
    c = document.getElementById("dialogDoneButtons");
    d = document.createElement("img");
    d.id = "pegSpin";
    d.src = "common/1x1.gif";
    d.style.backgroundImage =
        "url(" + kn.gd + ")";
    c.parentNode.insertBefore(d, c);
    setTimeout(Z.Bi, 1);
    setTimeout(Z.Ci, 1)
});
