var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var n$1, l$1, u$1, i$1, r$1, o$1, e$2, f$1, c$1, s$1, a$1, p$1 = {}, v$1 = [], y$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d$1 = Array.isArray;
function w$1(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n$1.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$2(l2, e2, i2, r2, null);
}
function m$2(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2, __i: -1, __u: 0 };
  return null == o2 && null != l$1.vnode && l$1.vnode(e2), e2;
}
function k$1(n2) {
  return n2.children;
}
function x(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C$1(n2) {
  if (n2.__P && n2.__d) {
    var u2 = n2.__v, t2 = u2.__e, i2 = [], r2 = [], o2 = w$1({}, u2);
    o2.__v = u2.__v + 1, l$1.vnode && l$1.vnode(o2), z$1(n2.__P, o2, u2, n2.__n, n2.__P.namespaceURI, 32 & u2.__u ? [t2] : null, i2, null == t2 ? S(u2) : t2, !!(32 & u2.__u), r2), o2.__v = u2.__v, o2.__.__k[o2.__i] = o2, V(i2, o2, r2), u2.__e = u2.__ = null, o2.__e != t2 && M(o2);
  }
}
function M(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), M(n2);
}
function $(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !I.__r++ || r$1 != l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(I);
}
function I() {
  for (var n2, l2 = 1; i$1.length; ) i$1.length > l2 && i$1.sort(e$2), n2 = i$1.shift(), l2 = i$1.length, C$1(n2);
  I.__r = 0;
}
function P(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, d2, w2, g2, _2, m2 = t2 && t2.__k || v$1, b = l2.length;
  for (f2 = A$1(u2, l2, m2, f2, b), a2 = 0; a2 < b; a2++) null != (y2 = u2.__k[a2]) && (h2 = -1 != y2.__i && m2[y2.__i] || p$1, y2.__i = a2, g2 = z$1(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && D$1(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), (_2 = !!(4 & y2.__u)) || h2.__k === y2.__k ? f2 = H(y2, f2, n2, _2) : "function" == typeof y2.type && void 0 !== g2 ? f2 = g2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return u2.__e = w2, f2;
}
function A$1(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = m$2(null, o2, null, null, null) : d$1(o2) ? o2 = n2.__k[r2] = m$2(k$1, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = m$2(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f2 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = T$1(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), E(e2, e2));
  return t2;
}
function H(n2, l2, u2, t2) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = H(i2[r2], l2, u2, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = S(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function T$1(n2, l2, u2, t2) {
  var i2, r2, o2, e2 = n2.key, f2 = n2.type, c2 = l2[u2], s2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == e2 || s2 && e2 == c2.key && f2 == c2.type) return u2;
  if (t2 > (s2 ? 1 : 0)) {
    for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f2 == c2.type) return o2;
  }
  return -1;
}
function j$1(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$1.test(l2) ? u2 : u2 + "px";
}
function F(n2, l2, u2, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || j$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] == t2[l2] || j$1(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$1, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$1, n2.addEventListener(l2, r2 ? a$1 : s$1, r2)) : n2.removeEventListener(l2, r2 ? a$1 : s$1, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function O(n2) {
  return function(u2) {
    if (this.l) {
      var t2 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c$1++;
      else if (u2.t < t2.u) return;
      return t2(l$1.event ? l$1.event(u2) : u2);
    }
  };
}
function z$1(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, y2, _2, m2, b, S2, C2, M2, $2, I2, A2, H2, L, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l$1.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (S2 = u2.props, C2 = "prototype" in T2 && T2.prototype.render, M2 = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M2 ? M2.props.value : a2.__ : i2, t2.__c ? b = (h2 = u2.__c = t2.__c).__ = h2.__E : (C2 ? u2.__c = h2 = new T2(S2, $2) : (u2.__c = h2 = new x(S2, $2), h2.constructor = T2, h2.render = G), M2 && M2.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), C2 && null == h2.__s && (h2.__s = h2.state), C2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w$1({}, h2.__s)), w$1(h2.__s, T2.getDerivedStateFromProps(S2, h2.__s))), y2 = h2.props, _2 = h2.state, h2.__v = u2, p2) C2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), C2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (C2 && null == T2.getDerivedStateFromProps && S2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(S2, $2), u2.__v == t2.__v || !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(S2, h2.__s, $2)) {
        u2.__v != t2.__v && (h2.props = S2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), v$1.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(S2, h2.__s, $2), C2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(y2, _2, m2);
      });
    }
    if (h2.context = $2, h2.props = S2, h2.__P = n2, h2.__e = false, I2 = l$1.__r, A2 = 0, C2) h2.state = h2.__s, h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), v$1.push.apply(h2.__h, h2._sb), h2._sb = [];
    else do {
      h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = w$1(w$1({}, i2), h2.getChildContext())), C2 && !p2 && null != h2.getSnapshotBeforeUpdate && (m2 = h2.getSnapshotBeforeUpdate(y2, _2)), H2 = null != a2 && a2.type === k$1 && null == a2.key ? q$1(a2.props.children) : a2, f2 = P(n2, d$1(H2) ? H2 : [H2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), b && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else {
      for (L = o2.length; L--; ) g(o2[L]);
      N(u2);
    }
    else u2.__e = t2.__e, u2.__k = t2.__k, n3.then || N(u2);
    l$1.__e(n3, u2, t2);
  }
  else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = B$1(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l$1.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function N(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(N));
}
function V(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) D$1(t2[i2], t2[++i2], t2[++i2]);
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function q$1(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : d$1(n2) ? n2.map(q$1) : w$1({}, n2);
}
function B$1(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, w2, _2, m2, b = i2.props || p$1, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
      u2 = w2, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$1.__m && l$1.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n$1.call(u2.childNodes), !c2 && null != e2) for (b = {}, a2 = 0; a2 < u2.attributes.length; a2++) b[(w2 = u2.attributes[a2]).name] = w2.value;
    for (a2 in b) w2 = b[a2], "dangerouslySetInnerHTML" == a2 ? v2 = w2 : "children" == a2 || a2 in k2 || "value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2 || F(u2, a2, null, w2, o2);
    for (a2 in k2) w2 = k2[a2], "children" == a2 ? y2 = w2 : "dangerouslySetInnerHTML" == a2 ? h2 = w2 : "value" == a2 ? _2 = w2 : "checked" == a2 ? m2 = w2 : c2 && "function" != typeof w2 || b[a2] === w2 || F(u2, a2, w2, b[a2], o2);
    if (h2) c2 || v2 && (h2.__html == v2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), P("template" == t2.type ? u2.content : u2, d$1(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b[a2]) && F(u2, a2, _2, b[a2], o2), a2 = "checked", null != m2 && m2 != u2[a2] && F(u2, a2, m2, b[a2], o2));
  }
  return u2;
}
function D$1(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, t2);
  }
}
function E(n2, u2, t2) {
  var i2, r2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || D$1(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && E(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function G(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function J(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l$1.__ && l$1.__(u2, t2), o2 = (r2 = false) ? null : t2.__k, e2 = [], f2 = [], z$1(t2, u2 = t2.__k = _(k$1, null, [u2]), o2 || p$1, p$1, t2.namespaceURI, o2 ? null : t2.firstChild ? n$1.call(t2.childNodes) : null, e2, o2 ? o2.__e : t2.firstChild, r2, f2), V(e2, u2, f2);
}
n$1 = v$1.slice, l$1 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$1 = 0, x.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w$1({}, this.state), "function" == typeof n2 && (n2 = n2(w$1({}, u2), this.props)), n2 && w$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), $(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), $(this));
}, x.prototype.render = k$1, i$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$2 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, I.__r = 0, f$1 = /(PointerCapture)$|Capture$/i, c$1 = 0, s$1 = O(false), a$1 = O(true);
var n = function(t2, s2, r2, e2) {
  var u2;
  s2[0] = 0;
  for (var h2 = 1; h2 < s2.length; h2++) {
    var p2 = s2[h2++], a2 = s2[h2] ? (s2[0] |= p2 ? 1 : 2, r2[s2[h2++]]) : s2[++h2];
    3 === p2 ? e2[0] = a2 : 4 === p2 ? e2[1] = Object.assign(e2[1] || {}, a2) : 5 === p2 ? (e2[1] = e2[1] || {})[s2[++h2]] = a2 : 6 === p2 ? e2[1][s2[++h2]] += a2 + "" : p2 ? (u2 = t2.apply(a2, n(t2, a2, r2, ["", null])), e2.push(u2), a2[0] ? s2[0] |= 2 : (s2[h2 - 2] = 0, s2[h2] = u2)) : e2.push(a2);
  }
  return e2;
}, t$1 = /* @__PURE__ */ new Map();
function e$1(s2) {
  var r2 = t$1.get(this);
  return r2 || (r2 = /* @__PURE__ */ new Map(), t$1.set(this, r2)), (r2 = n(this, r2.get(s2) || (r2.set(s2, r2 = (function(n2) {
    for (var t2, s3, r3 = 1, e2 = "", u2 = "", h2 = [0], p2 = function(n3) {
      1 === r3 && (n3 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e2) : 3 === r3 && (n3 || e2) ? (h2.push(3, n3, e2), r3 = 2) : 2 === r3 && "..." === e2 && n3 ? h2.push(4, n3, 0) : 2 === r3 && e2 && !n3 ? h2.push(5, 0, true, e2) : r3 >= 5 && ((e2 || !n3 && 5 === r3) && (h2.push(r3, 0, e2, s3), r3 = 6), n3 && (h2.push(r3, n3, 0, s3), r3 = 6)), e2 = "";
    }, a2 = 0; a2 < n2.length; a2++) {
      a2 && (1 === r3 && p2(), p2(a2));
      for (var l2 = 0; l2 < n2[a2].length; l2++) t2 = n2[a2][l2], 1 === r3 ? "<" === t2 ? (p2(), h2 = [h2], r3 = 3) : e2 += t2 : 4 === r3 ? "--" === e2 && ">" === t2 ? (r3 = 1, e2 = "") : e2 = t2 + e2[0] : u2 ? t2 === u2 ? u2 = "" : e2 += t2 : '"' === t2 || "'" === t2 ? u2 = t2 : ">" === t2 ? (p2(), r3 = 1) : r3 && ("=" === t2 ? (r3 = 5, s3 = e2, e2 = "") : "/" === t2 && (r3 < 5 || ">" === n2[a2][l2 + 1]) ? (p2(), 3 === r3 && (h2 = h2[0]), r3 = h2, (h2 = h2[0]).push(2, 0, r3), r3 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p2(), r3 = 2) : e2 += t2), 3 === r3 && "!--" === e2 && (r3 = 4, h2 = h2[0]);
    }
    return p2(), h2;
  })(s2)), r2), arguments, [])).length > 1 ? r2 : r2[0];
}
var m$1 = e$1.bind(_);
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function d(n2) {
  return o = 1, h(D, n2);
}
function h(n2, u2, i2) {
  var o2 = p(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [D(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.__f)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = o2.__c.props !== n3;
      return u3.some(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n3, t2, r2) || i3;
    };
    r.__f = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = p(t++, 3);
  !c.__s && C(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r.__H.__h.push(i2));
}
function A(n2) {
  return o = 5, T(function() {
    return { current: n2 };
  }, []);
}
function T(n2, r2) {
  var u2 = p(t++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q(n2, t2) {
  return o = 8, T(function() {
    return n2;
  }, t2);
}
function j() {
  for (var n2; n2 = f.shift(); ) {
    var t2 = n2.__H;
    if (n2.__P && t2) try {
      t2.__h.some(z), t2.__h.some(B), t2.__h = [];
    } catch (r2) {
      t2.__h = [], c.__e(r2, n2.__v);
    }
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.some(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i2.__h.some(z), i2.__h.some(B), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t2.__H.__.some(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.some(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.some(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 35);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", { value, configurable: true });
function html(attrs, textContent) {
  const {
    type,
    autofocus,
    tabindex,
    disabled,
    classes,
    name,
    ariaLabel
  } = attrs;
  const _classes = new Set(classes);
  _classes.add("substrate-button btn");
  const arr = Array.from(_classes);
  const btnProps = [
    arr.length ? `class="${arr.filter(Boolean).join(" ")}"` : "",
    disabled ? "disabled" : "",
    autofocus ? "autofocus" : "",
    type ? `type="${type}"` : "",
    name ? `name=${name}` : "",
    tabindex ? `tabindex="${tabindex}"` : 'tabindex="0"',
    'role="button"',
    ariaLabel ? `aria-label="${ariaLabel}"` : "",
    'aria-live="polite"'
  ].filter(Boolean).join(" ");
  return typeof window === "undefined" ? `<substrate-button${disabled ? " disabled" : ""}>
            <button ${btnProps}><span class="btn-content">${textContent}</span></button>
        </substrate-button>` : `<button ${btnProps}>
            <span class="btn-content">${textContent}</span>
        </button>`;
}
__name$5(html, "html");
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", { value, configurable: true });
function toAttributes(attrs) {
  return Object.keys(attrs).reduce((acc, k2) => {
    const value = attrs[k2];
    if (!value) return acc;
    if (typeof value === "boolean") {
      if (value) return (acc + ` ${k2}`).trim();
      return acc;
    }
    if (Array.isArray(value)) {
      return acc + ` ${k2}="${value.join(" ")}"`;
    }
    return (acc + ` ${k2}="${value}"`).trim();
  }, "");
}
__name$4(toAttributes, "toAttributes");
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", { value, configurable: true });
function isRegistered$1(elName) {
  return document.createElement(elName).constructor !== window.HTMLElement;
}
__name$3(isRegistered$1, "isRegistered");
function define$1(name, element) {
  if (!window) return;
  if (!("customElements" in window)) return;
  if (!isRegistered$1(name)) {
    window.customElements.define(name, element);
  }
}
__name$3(define$1, "define");
document.querySelector.bind(document);
document.querySelectorAll.bind(document);
function match(el, s2) {
  if (!el.matches) el = el.parentElement;
  return el.matches(s2) ? el : el.closest(s2);
}
__name$3(match, "match");
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", { value, configurable: true });
const _WebComponent = class _WebComponent extends window.HTMLElement {
  TAG = "";
  static match(el) {
    return match(el, this.TAG);
  }
  /**
   * Store global wildcard listeners (listen to all events)
   * Triggered by ALL events dispatched through this element
   * @private
   */
  _globalWildcardListeners = /* @__PURE__ */ new Set();
  /**
   * Store namespaced wildcard listeners (listen to 'component-name:*')
   * Triggered by events from emit() that match this component's namespace
   * @private
   */
  _namespacedWildcardListeners = /* @__PURE__ */ new Set();
  static create(elementName) {
    var _a2;
    const CreatedClass = (_a2 = class extends _WebComponent {
      TAG = elementName;
      render() {
        throw new Error("`render` should be implemented by children");
      }
    }, __name$2(_a2, "CreatedClass"), __publicField(_a2, "TAG", elementName), _a2);
    CreatedClass.define = function() {
      return _WebComponent.define.call(this);
    };
    CreatedClass.event = function(evType) {
      return _WebComponent.event.call(this, evType);
    };
    return CreatedClass;
  }
  static define() {
    define(this.TAG, this);
  }
  /**
   * Runs when the value of an attribute is changed.
   *
   * Depends on `static observedAttributes`.
   *
   * Should name methods like `handleChange_disabled`.
   *
   * @param  {string} name     The attribute name
   * @param  {string} oldValue The old attribute value
   * @param  {string} newValue The new attribute value
   */
  async attributeChangedCallback(name, oldValue, newValue) {
    const handler = this[`handleChange_${name}`];
    if (handler) {
      await handler.call(this, oldValue, newValue);
    }
  }
  /**
   * Enhanced addEventListener that supports wildcards:
   * - Component.event('*') - Listen to all namespaced events for this
   *   component (e.g., 'my-component:*')
   * - '*' - Listen to ALL events (namespaced and non-namespaced, including
   *   normal DOM events)
   *
   * @param type - Event type, Component.event('*') for namespaced wildcard,
   *   or '*' for global wildcard
   * @param listener - Event listener function or object
   * @param options - Event listener options
   */
  addEventListener(type, listener, options) {
    if (type === _WebComponent.event.call(this, "*")) {
      this._namespacedWildcardListeners.add({ listener, options });
    } else if (type === "*") {
      if (listener) {
        this._globalWildcardListeners.add({ listener, options });
      }
    } else {
      super.addEventListener(type, listener, options);
    }
  }
  /**
   * Notify namespaced wildcard listeners of an event
   * Only fires for events that match this component's namespace
   *
   * @param event - The event to dispatch to namespaced wildcard listeners
   * @private
   */
  _notifyNamespacedWildcardListeners(event) {
    if (this._namespacedWildcardListeners.size === 0) {
      return;
    }
    const componentName = this.TAG;
    if (!componentName || !event.type.startsWith(`${componentName}:`)) {
      return;
    }
    this._namespacedWildcardListeners.forEach(({ listener }) => {
      try {
        if (typeof listener === "function") {
          listener.call(this, event);
        } else if (listener && typeof listener.handleEvent === "function") {
          listener.handleEvent(event);
        }
      } catch (error) {
        console.error(
          "Error in namespaced wildcard event listener:",
          error
        );
      }
    });
  }
  /**
   * Notify global wildcard listeners of an event
   * Fires for ALL events dispatched through this element
   *
   * @param event - The event to dispatch to global wildcard listeners
   * @private
   */
  _notifyGlobalWildcardListeners(event) {
    if (this._globalWildcardListeners.size === 0) {
      return;
    }
    this._globalWildcardListeners.forEach(({ listener }) => {
      try {
        if (typeof listener === "function") {
          listener.call(this, event);
        } else if (listener && typeof listener.handleEvent === "function") {
          listener.handleEvent(event);
        }
      } catch (error) {
        console.error("Error in global wildcard event listener:", error);
      }
    });
  }
  connectedCallback() {
    this.render();
  }
  qs(selector) {
    return this.querySelector(selector);
  }
  qsa(selector) {
    return this.querySelectorAll(selector);
  }
  /**
   * Take a non-namepsaced event name, return namespace event name.
   *
   * @param {string} evType The non-namespace event name
   * @returns {string} Namespaced event name, eg, `my-component:click`
   */
  static event(evType) {
    return eventName(this.TAG, evType);
  }
  /**
   * Emit a namespaced event.
   *
   * @param type (non-namespaced) event type string
   * @param opts `bubbles`, `detail`, and `cancelable`. Default is
   * `{ bubbles: true, cancelable: true }`
   * @returns {boolean}
   */
  emit(type, opts = {}) {
    if (type === "*") throw new Error('Do not emit the literal "*"');
    const { bubbles = true, cancelable = true, detail } = opts;
    const namespacedType = `${this.TAG}:${type}`;
    const event = new CustomEvent(namespacedType, {
      bubbles,
      cancelable,
      detail
    });
    const result = this.dispatchEvent(event);
    this._notifyNamespacedWildcardListeners(event);
    return result;
  }
  /**
   * Override dispatchEvent to notify global wildcard listeners
   * This ensures that '**' listeners catch ALL events
   *
   * @param event - The event to dispatch
   * @returns true if the event was not cancelled
   */
  dispatchEvent(event) {
    const result = super.dispatchEvent(event);
    this._notifyGlobalWildcardListeners(event);
    return result;
  }
  /**
   * Create and emit an event, no namespacing.
   */
  dispatch(type, opts = {}) {
    const event = new CustomEvent(type, {
      bubbles: opts.bubbles === void 0 ? true : opts.bubbles,
      cancelable: opts.cancelable === void 0 ? true : opts.cancelable,
      detail: opts.detail
    });
    return this.dispatchEvent(event);
  }
  on(evName, handler, options) {
    const fullEvName = _WebComponent.event.call(this, evName);
    this.addEventListener(fullEvName, handler, options);
  }
  /**
   * Enhanced removeEventListener that supports wildcards:
   * - Component.event('*') - Remove namespaced wildcard listener
   * - '*' - Remove global wildcard listener
   *
   * @param type - Event type, Component.event('*') for namespaced, or '*'
   *   for global
   * @param listener - Event listener function or object to remove
   * @param options - Event listener options
   */
  removeEventListener(type, listener, options) {
    if (type === _WebComponent.event.call(this, "*")) {
      if (listener && this._namespacedWildcardListeners) {
        for (const entry of this._namespacedWildcardListeners) {
          if (entry.listener === listener) {
            this._namespacedWildcardListeners.delete(entry);
            break;
          }
        }
      }
    } else if (type === "*") {
      if (listener && this._globalWildcardListeners) {
        for (const entry of this._globalWildcardListeners) {
          if (entry.listener === listener) {
            this._globalWildcardListeners.delete(entry);
            break;
          }
        }
      }
    } else {
      super.removeEventListener(type, listener, options);
    }
  }
};
__name$2(_WebComponent, "WebComponent");
__publicField(_WebComponent, "TAG", "");
let WebComponent = _WebComponent;
function eventName(namespace, evType) {
  return `${namespace}:${evType}`;
}
__name$2(eventName, "eventName");
function isRegistered(elName) {
  return document.createElement(elName).constructor !== window.HTMLElement;
}
__name$2(isRegistered, "isRegistered");
function define(name, element) {
  if (!window) return;
  if (!("customElements" in window)) return;
  if (!isRegistered(name)) {
    window.customElements.define(name, element);
  }
}
__name$2(define, "define");
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", { value, configurable: true });
let SubstrateButton$1 = (_a = class extends WebComponent.create("substrate-button") {
  _isSpinning;
  static define() {
    define(_a.TAG, _a);
  }
  constructor() {
    super();
    const disabled = this.getAttribute("disabled");
    if (disabled !== null) {
      setTimeout(() => {
        this.disabled = true;
      }, 0);
    }
    this.autofocus = this.getAttribute("autofocus") !== null;
    this._isSpinning = this.getAttribute("spinning") !== null;
  }
  get form() {
    return this.button?.form;
  }
  get disabled() {
    return !!this.button?.hasAttribute("disabled");
  }
  set disabled(disabledValue) {
    if (!disabledValue) {
      this._removeAttribute("disabled");
      this.button?.setAttribute("aria-disabled", "false");
    } else {
      this.button?.setAttribute("disabled", "");
      this.button?.setAttribute("aria-disabled", "true");
    }
  }
  get type() {
    return this.button?.getAttribute("type");
  }
  get tabindex() {
    const i2 = this.button?.getAttribute("tabindex");
    if (!i2) return 0;
    return parseInt(i2);
  }
  get spinning() {
    return this._isSpinning;
  }
  set spinning(value) {
    if (value) {
      this.classList.add("spinning");
      this.button?.classList.add("spinning");
      this.button?.setAttribute("disabled", "");
      this.setAttribute("spinning", "");
    } else {
      this.classList.remove("spinning");
      this.button?.classList.remove("spinning");
      this.button?.removeAttribute("disabled");
      this.removeAttribute("spinning");
    }
  }
  set type(value) {
    this._setAttribute("type", value);
  }
  get autofocus() {
    return !!this.button?.hasAttribute("autofocus");
  }
  set autofocus(value) {
    if (value) {
      this._setAttribute("autofocus", value);
    } else {
      this._removeAttribute("autofocus");
    }
  }
  /**
   * Set attributes on the internal button element.
   */
  _setAttribute(name, value) {
    if (value === false) {
      this._removeAttribute(name);
      this.button?.removeAttribute(name);
    } else {
      if (value === true) {
        return this.button?.setAttribute(name, "");
      }
      if (value === null) {
        return this._removeAttribute(name);
      }
      this.button?.setAttribute(name, value);
    }
  }
  /**
   * Remove from `this` and also button child.
   */
  _removeAttribute(name) {
    this.removeAttribute(name);
    this.button?.removeAttribute(name);
  }
  get button() {
    return this.querySelector("button");
  }
  /**
   * Handle 'autofocus' attribute changes
   * @see {@link https://gomakethings.com/how-to-detect-when-attributes-change-on-a-web-component/#organizing-your-code Go Make Things article}
   *
   * @param  {string} oldValue The old attribute value
   * @param  {string} newValue The new attribute value
   */
  handleChange_autofocus(_oldValue, newValue) {
    this._setAttribute("autofocus", newValue);
  }
  handleChange_disabled(_old, newValue) {
    this.disabled = newValue !== null;
    if (newValue === null) this.button?.removeAttribute("disabled");
    else this.button?.setAttribute("disabled", "" + newValue);
  }
  handleChange_spinning(_2, newValue) {
    if (newValue !== null) {
      this.classList.add("spinning");
      this.button?.classList.add("spinning");
      this.button?.setAttribute("disabled", "");
      this.button?.setAttribute("aria-busy", "true");
    } else {
      this.classList.remove("spinning");
      this.button?.classList.remove("spinning");
      this.button?.removeAttribute("disabled");
      this.button?.setAttribute("aria-busy", "false");
    }
  }
  connectedCallback() {
    this.render();
    this._setupKeyboardHandlers();
  }
  _setupKeyboardHandlers() {
    this.button?.addEventListener("keydown", (e2) => {
      if (e2.key === " " || e2.key === "Enter") {
        e2.preventDefault();
        this.button?.click();
      }
    });
  }
  render() {
  }
}, __name$1(_a, "SubstrateButton"), // for `attributeChangedCallback`
__publicField(_a, "observedAttributes", ["autofocus", "disabled", "spinning"]), __publicField(_a, "TAG", "substrate-button"), _a);
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
const _SubstrateButton = class _SubstrateButton extends SubstrateButton$1 {
  static define() {
    define(_SubstrateButton.TAG, _SubstrateButton);
  }
  connectedCallback() {
    this.render();
    this._setupKeyboardHandlers();
  }
  render() {
    const {
      type,
      autofocus,
      tabindex,
      disabled
    } = this;
    const name = this.getAttribute("name");
    const ariaLabel = this.getAttribute("aria-label");
    const spinning = this.getAttribute("spinning") !== null;
    const classes = [
      "substrate-button",
      this.getAttribute("class"),
      spinning ? "spinning" : null
    ];
    const text = this.innerHTML;
    const btnProps = {
      classes: classes.filter(Boolean),
      disabled,
      autofocus,
      tabindex,
      type,
      name,
      ariaLabel
    };
    this.innerHTML = html(btnProps, text);
  }
};
__name(_SubstrateButton, "SubstrateButton");
let SubstrateButton = _SubstrateButton;
define("substrate-button", SubstrateButton);
var browserLevel = {};
var abstractLevel$1 = {};
var abstractLevel = {};
var levelSupports = {};
var hasRequiredLevelSupports;
function requireLevelSupports() {
  if (hasRequiredLevelSupports) return levelSupports;
  hasRequiredLevelSupports = 1;
  levelSupports.supports = function supports(...manifests) {
    const manifest = manifests.reduce((acc, m2) => Object.assign(acc, m2), {});
    const implicitSnapshots = manifest.implicitSnapshots || manifest.snapshots || false;
    const explicitSnapshots = manifest.explicitSnapshots || false;
    return Object.assign(manifest, {
      implicitSnapshots,
      explicitSnapshots,
      snapshots: implicitSnapshots,
      has: manifest.has || false,
      permanence: manifest.permanence || false,
      seek: manifest.seek || false,
      createIfMissing: manifest.createIfMissing || false,
      errorIfExists: manifest.errorIfExists || false,
      deferredOpen: manifest.deferredOpen || false,
      streams: manifest.streams || false,
      encodings: Object.assign({}, manifest.encodings),
      events: Object.assign({}, manifest.events),
      additionalMethods: Object.assign({}, manifest.additionalMethods),
      signals: Object.assign({}, manifest.signals)
    });
  };
  return levelSupports;
}
var levelTranscoder = {};
var moduleError;
var hasRequiredModuleError;
function requireModuleError() {
  if (hasRequiredModuleError) return moduleError;
  hasRequiredModuleError = 1;
  moduleError = class ModuleError extends Error {
    /**
     * @param {string} message Error message
     * @param {{ code?: string, cause?: Error, expected?: boolean, transient?: boolean }} [options]
     */
    constructor(message, options) {
      super(message || "");
      if (typeof options === "object" && options !== null) {
        if (options.code) this.code = String(options.code);
        if (options.expected) this.expected = true;
        if (options.transient) this.transient = true;
        if (options.cause) this.cause = options.cause;
      }
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  };
  return moduleError;
}
var encodings = {};
var buffer = {};
var base64Js = {};
var hasRequiredBase64Js;
function requireBase64Js() {
  if (hasRequiredBase64Js) return base64Js;
  hasRequiredBase64Js = 1;
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i2 = 0, len = code.length; i2 < len; ++i2) {
    lookup[i2] = code[i2];
    revLookup[code.charCodeAt(i2)] = i2;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i3;
    for (i3 = 0; i3 < len2; i3 += 4) {
      tmp = revLookup[b64.charCodeAt(i3)] << 18 | revLookup[b64.charCodeAt(i3 + 1)] << 12 | revLookup[b64.charCodeAt(i3 + 2)] << 6 | revLookup[b64.charCodeAt(i3 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i3)] << 2 | revLookup[b64.charCodeAt(i3 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i3)] << 10 | revLookup[b64.charCodeAt(i3 + 1)] << 4 | revLookup[b64.charCodeAt(i3 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i3 = start; i3 < end; i3 += 3) {
      tmp = (uint8[i3] << 16 & 16711680) + (uint8[i3 + 1] << 8 & 65280) + (uint8[i3 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i3 = 0, len22 = len2 - extraBytes; i3 < len22; i3 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len22 ? len22 : i3 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
      );
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
      );
    }
    return parts.join("");
  }
  return base64Js;
}
var ieee754 = {};
var hasRequiredIeee754;
function requireIeee754() {
  if (hasRequiredIeee754) return ieee754;
  hasRequiredIeee754 = 1;
  ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e2, m2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i2 = isLE ? nBytes - 1 : 0;
    var d2 = isLE ? -1 : 1;
    var s2 = buffer2[offset + i2];
    i2 += d2;
    e2 = s2 & (1 << -nBits) - 1;
    s2 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e2 = e2 * 256 + buffer2[offset + i2], i2 += d2, nBits -= 8) {
    }
    m2 = e2 & (1 << -nBits) - 1;
    e2 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m2 = m2 * 256 + buffer2[offset + i2], i2 += d2, nBits -= 8) {
    }
    if (e2 === 0) {
      e2 = 1 - eBias;
    } else if (e2 === eMax) {
      return m2 ? NaN : (s2 ? -1 : 1) * Infinity;
    } else {
      m2 = m2 + Math.pow(2, mLen);
      e2 = e2 - eBias;
    }
    return (s2 ? -1 : 1) * m2 * Math.pow(2, e2 - mLen);
  };
  ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e2, m2, c2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i2 = isLE ? 0 : nBytes - 1;
    var d2 = isLE ? 1 : -1;
    var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m2 = isNaN(value) ? 1 : 0;
      e2 = eMax;
    } else {
      e2 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c2 = Math.pow(2, -e2)) < 1) {
        e2--;
        c2 *= 2;
      }
      if (e2 + eBias >= 1) {
        value += rt / c2;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c2 >= 2) {
        e2++;
        c2 /= 2;
      }
      if (e2 + eBias >= eMax) {
        m2 = 0;
        e2 = eMax;
      } else if (e2 + eBias >= 1) {
        m2 = (value * c2 - 1) * Math.pow(2, mLen);
        e2 = e2 + eBias;
      } else {
        m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e2 = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i2] = m2 & 255, i2 += d2, m2 /= 256, mLen -= 8) {
    }
    e2 = e2 << mLen | m2;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i2] = e2 & 255, i2 += d2, e2 /= 256, eLen -= 8) {
    }
    buffer2[offset + i2 - d2] |= s2 * 128;
  };
  return ieee754;
}
var hasRequiredBuffer;
function requireBuffer() {
  if (hasRequiredBuffer) return buffer;
  hasRequiredBuffer = 1;
  (function(exports$1) {
    const base64 = requireBase64Js();
    const ieee7542 = requireIeee754();
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports$1.Buffer = Buffer2;
    exports$1.SlowBuffer = SlowBuffer;
    exports$1.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports$1.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e2) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding2) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding2 === "string" ? createBuffer(size).fill(fill, encoding2) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding2) {
      return alloc(size, fill, encoding2);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding2) {
      if (typeof encoding2 !== "string" || encoding2 === "") {
        encoding2 = "utf8";
      }
      if (!Buffer2.isEncoding(encoding2)) {
        throw new TypeError("Unknown encoding: " + encoding2);
      }
      const length = byteLength(string, encoding2) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding2);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a2, b) {
      if (isInstance(a2, Uint8Array)) a2 = Buffer2.from(a2, a2.offset, a2.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a2) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a2 === b) return 0;
      let x2 = a2.length;
      let y2 = b.length;
      for (let i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
        if (a2[i2] !== b[i2]) {
          x2 = a2[i2];
          y2 = b[i2];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding2) {
      switch (String(encoding2).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      const buffer2 = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        let buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
            buf.copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer2,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength(string, encoding2) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding2) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding2 = ("" + encoding2).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding2, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding2) encoding2 = "utf8";
      while (true) {
        switch (encoding2) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding2);
            encoding2 = (encoding2 + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n2, m2) {
      const i2 = b[n2];
      b[n2] = b[m2];
      b[m2] = i2;
    }
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max = exports$1.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x2 = thisEnd - thisStart;
      let y2 = end - start;
      const len = Math.min(x2, y2);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i2 = 0; i2 < len; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x2 = thisCopy[i2];
          y2 = targetCopy[i2];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding2, dir) {
      if (buffer2.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding2 = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir) return -1;
        else byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding2);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding2, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding2, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding2, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding2 !== void 0) {
        encoding2 = String(encoding2).toLowerCase();
        if (encoding2 === "ucs2" || encoding2 === "ucs-2" || encoding2 === "utf16le" || encoding2 === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      let i2;
      if (dir) {
        let foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          let found = true;
          for (let j2 = 0; j2 < valLength; j2++) {
            if (read(arr, i2 + j2) !== read(val, j2)) {
              found = false;
              break;
            }
          }
          if (found) return i2;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding2) {
      return this.indexOf(val, byteOffset, encoding2) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding2) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding2, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding2) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding2, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        const parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding2) {
      if (offset === void 0) {
        encoding2 = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding2 = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding2 === void 0) encoding2 = "utf8";
        } else {
          encoding2 = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding2) encoding2 = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding2) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding2);
            encoding2 = ("" + encoding2).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i2 = start;
      while (i2 < end) {
        const firstByte = buf[i2];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i2 = 0;
      while (i2 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i2 = byteLength2;
      let mul = 1;
      let val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee7542.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee7542.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee7542.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee7542.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding2) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding2 = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding2 = end;
          end = this.length;
        }
        if (encoding2 !== void 0 && typeof encoding2 !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding2 === "string" && !Buffer2.isEncoding(encoding2)) {
          throw new TypeError("Unknown encoding: " + encoding2);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding2 === "utf8" && code < 128 || encoding2 === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding2);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len];
        }
      }
      return this;
    };
    const errors2 = {};
    function E2(sym, getMessage, Base) {
      errors2[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E2(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E2(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E2(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i2 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i2 >= start + 4; i2 -= 3) {
        res = `_${val.slice(i2 - 3, i2)}${res}`;
      }
      return `${val.slice(0, i2)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n2 = typeof min === "bigint" ? "n" : "";
        let range;
        {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
          } else {
            range = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
          }
        }
        throw new errors2.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors2.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors2.ERR_OUT_OF_RANGE("offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors2.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors2.ERR_OUT_OF_RANGE(
        "offset",
        `>= ${0} and <= ${length}`,
        value
      );
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c2, hi, lo;
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0) break;
        c2 = str.charCodeAt(i2);
        hi = c2 >> 8;
        lo = c2 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length) break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = (function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i2 = 0; i2 < 16; ++i2) {
        const i16 = i2 * 16;
        for (let j2 = 0; j2 < 16; ++j2) {
          table[i16 + j2] = alphabet[i2] + alphabet[j2];
        }
      }
      return table;
    })();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  })(buffer);
  return buffer;
}
var textEndec;
var hasRequiredTextEndec;
function requireTextEndec() {
  if (hasRequiredTextEndec) return textEndec;
  hasRequiredTextEndec = 1;
  let lazy = null;
  textEndec = function() {
    if (lazy === null) {
      lazy = {
        textEncoder: new TextEncoder(),
        textDecoder: new TextDecoder()
      };
    }
    return lazy;
  };
  return textEndec;
}
var formats = {};
var encoding = {};
var hasRequiredEncoding;
function requireEncoding() {
  if (hasRequiredEncoding) return encoding;
  hasRequiredEncoding = 1;
  const ModuleError = requireModuleError();
  const formats2 = /* @__PURE__ */ new Set(["buffer", "view", "utf8"]);
  class Encoding {
    /**
     * @param {IEncoding<TIn,TFormat,TOut>} options
     */
    constructor(options) {
      this.encode = options.encode || this.encode;
      this.decode = options.decode || this.decode;
      this.name = options.name || this.name;
      this.format = options.format || this.format;
      if (typeof this.encode !== "function") {
        throw new TypeError("The 'encode' property must be a function");
      }
      if (typeof this.decode !== "function") {
        throw new TypeError("The 'decode' property must be a function");
      }
      this.encode = this.encode.bind(this);
      this.decode = this.decode.bind(this);
      if (typeof this.name !== "string" || this.name === "") {
        throw new TypeError("The 'name' property must be a string");
      }
      if (typeof this.format !== "string" || !formats2.has(this.format)) {
        throw new TypeError("The 'format' property must be one of 'buffer', 'view', 'utf8'");
      }
      if (options.createViewTranscoder) {
        this.createViewTranscoder = options.createViewTranscoder;
      }
      if (options.createBufferTranscoder) {
        this.createBufferTranscoder = options.createBufferTranscoder;
      }
      if (options.createUTF8Transcoder) {
        this.createUTF8Transcoder = options.createUTF8Transcoder;
      }
    }
    get commonName() {
      return (
        /** @type {string} */
        this.name.split("+")[0]
      );
    }
    /** @return {BufferFormat<TIn,TOut>} */
    createBufferTranscoder() {
      throw new ModuleError(`Encoding '${this.name}' cannot be transcoded to 'buffer'`, {
        code: "LEVEL_ENCODING_NOT_SUPPORTED"
      });
    }
    /** @return {ViewFormat<TIn,TOut>} */
    createViewTranscoder() {
      throw new ModuleError(`Encoding '${this.name}' cannot be transcoded to 'view'`, {
        code: "LEVEL_ENCODING_NOT_SUPPORTED"
      });
    }
    /** @return {UTF8Format<TIn,TOut>} */
    createUTF8Transcoder() {
      throw new ModuleError(`Encoding '${this.name}' cannot be transcoded to 'utf8'`, {
        code: "LEVEL_ENCODING_NOT_SUPPORTED"
      });
    }
  }
  encoding.Encoding = Encoding;
  return encoding;
}
var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  const { Buffer: Buffer2 } = requireBuffer() || {};
  const { Encoding } = requireEncoding();
  const textEndec2 = requireTextEndec();
  class BufferFormat extends Encoding {
    /**
     * @param {Omit<IEncoding<TIn, Buffer, TOut>, 'format'>} options
     */
    constructor(options) {
      super({ ...options, format: "buffer" });
    }
    /** @override */
    createViewTranscoder() {
      return new ViewFormat({
        encode: this.encode,
        // Buffer is a view (UInt8Array)
        decode: (data) => this.decode(
          Buffer2.from(data.buffer, data.byteOffset, data.byteLength)
        ),
        name: `${this.name}+view`
      });
    }
    /** @override */
    createBufferTranscoder() {
      return this;
    }
  }
  class ViewFormat extends Encoding {
    /**
     * @param {Omit<IEncoding<TIn, Uint8Array, TOut>, 'format'>} options
     */
    constructor(options) {
      super({ ...options, format: "view" });
    }
    /** @override */
    createBufferTranscoder() {
      return new BufferFormat({
        encode: (data) => {
          const view = this.encode(data);
          return Buffer2.from(view.buffer, view.byteOffset, view.byteLength);
        },
        decode: this.decode,
        // Buffer is a view (UInt8Array)
        name: `${this.name}+buffer`
      });
    }
    /** @override */
    createViewTranscoder() {
      return this;
    }
  }
  class UTF8Format extends Encoding {
    /**
     * @param {Omit<IEncoding<TIn, string, TOut>, 'format'>} options
     */
    constructor(options) {
      super({ ...options, format: "utf8" });
    }
    /** @override */
    createBufferTranscoder() {
      return new BufferFormat({
        encode: (data) => Buffer2.from(this.encode(data), "utf8"),
        decode: (data) => this.decode(data.toString("utf8")),
        name: `${this.name}+buffer`
      });
    }
    /** @override */
    createViewTranscoder() {
      const { textEncoder, textDecoder } = textEndec2();
      return new ViewFormat({
        encode: (data) => textEncoder.encode(this.encode(data)),
        decode: (data) => this.decode(textDecoder.decode(data)),
        name: `${this.name}+view`
      });
    }
    /** @override */
    createUTF8Transcoder() {
      return this;
    }
  }
  formats.BufferFormat = BufferFormat;
  formats.ViewFormat = ViewFormat;
  formats.UTF8Format = UTF8Format;
  return formats;
}
var hasRequiredEncodings;
function requireEncodings() {
  if (hasRequiredEncodings) return encodings;
  hasRequiredEncodings = 1;
  const { Buffer: Buffer2 } = requireBuffer() || { Buffer: { isBuffer: () => false } };
  const { textEncoder, textDecoder } = requireTextEndec()();
  const { BufferFormat, ViewFormat, UTF8Format } = requireFormats();
  const identity = (v2) => v2;
  encodings.utf8 = new UTF8Format({
    encode: function(data) {
      return Buffer2.isBuffer(data) ? data.toString("utf8") : ArrayBuffer.isView(data) ? textDecoder.decode(data) : String(data);
    },
    decode: identity,
    name: "utf8",
    createViewTranscoder() {
      return new ViewFormat({
        encode: function(data) {
          return ArrayBuffer.isView(data) ? data : textEncoder.encode(data);
        },
        decode: function(data) {
          return textDecoder.decode(data);
        },
        name: `${this.name}+view`
      });
    },
    createBufferTranscoder() {
      return new BufferFormat({
        encode: function(data) {
          return Buffer2.isBuffer(data) ? data : ArrayBuffer.isView(data) ? Buffer2.from(data.buffer, data.byteOffset, data.byteLength) : Buffer2.from(String(data), "utf8");
        },
        decode: function(data) {
          return data.toString("utf8");
        },
        name: `${this.name}+buffer`
      });
    }
  });
  encodings.json = new UTF8Format({
    encode: JSON.stringify,
    decode: JSON.parse,
    name: "json"
  });
  encodings.buffer = new BufferFormat({
    encode: function(data) {
      return Buffer2.isBuffer(data) ? data : ArrayBuffer.isView(data) ? Buffer2.from(data.buffer, data.byteOffset, data.byteLength) : Buffer2.from(String(data), "utf8");
    },
    decode: identity,
    name: "buffer",
    createViewTranscoder() {
      return new ViewFormat({
        encode: function(data) {
          return ArrayBuffer.isView(data) ? data : Buffer2.from(String(data), "utf8");
        },
        decode: function(data) {
          return Buffer2.from(data.buffer, data.byteOffset, data.byteLength);
        },
        name: `${this.name}+view`
      });
    }
  });
  encodings.view = new ViewFormat({
    encode: function(data) {
      return ArrayBuffer.isView(data) ? data : textEncoder.encode(data);
    },
    decode: identity,
    name: "view",
    createBufferTranscoder() {
      return new BufferFormat({
        encode: function(data) {
          return Buffer2.isBuffer(data) ? data : ArrayBuffer.isView(data) ? Buffer2.from(data.buffer, data.byteOffset, data.byteLength) : Buffer2.from(String(data), "utf8");
        },
        decode: identity,
        name: `${this.name}+buffer`
      });
    }
  });
  encodings.hex = new BufferFormat({
    encode: function(data) {
      return Buffer2.isBuffer(data) ? data : Buffer2.from(String(data), "hex");
    },
    decode: function(buffer2) {
      return buffer2.toString("hex");
    },
    name: "hex"
  });
  encodings.base64 = new BufferFormat({
    encode: function(data) {
      return Buffer2.isBuffer(data) ? data : Buffer2.from(String(data), "base64");
    },
    decode: function(buffer2) {
      return buffer2.toString("base64");
    },
    name: "base64"
  });
  return encodings;
}
var hasRequiredLevelTranscoder;
function requireLevelTranscoder() {
  if (hasRequiredLevelTranscoder) return levelTranscoder;
  hasRequiredLevelTranscoder = 1;
  const ModuleError = requireModuleError();
  const encodings2 = requireEncodings();
  const { Encoding } = requireEncoding();
  const { BufferFormat, ViewFormat, UTF8Format } = requireFormats();
  const kFormats = /* @__PURE__ */ Symbol("formats");
  const kEncodings = /* @__PURE__ */ Symbol("encodings");
  const validFormats = /* @__PURE__ */ new Set(["buffer", "view", "utf8"]);
  class Transcoder {
    /**
     * @param {Array<'buffer'|'view'|'utf8'>} formats
     */
    constructor(formats2) {
      if (!Array.isArray(formats2)) {
        throw new TypeError("The first argument 'formats' must be an array");
      } else if (!formats2.every((f2) => validFormats.has(f2))) {
        throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'");
      }
      this[kEncodings] = /* @__PURE__ */ new Map();
      this[kFormats] = new Set(formats2);
      for (const k2 in encodings2) {
        try {
          this.encoding(k2);
        } catch (err) {
          if (err.code !== "LEVEL_ENCODING_NOT_SUPPORTED") throw err;
        }
      }
    }
    /**
     * @returns {Array<Encoding<any,T,any>>}
     */
    encodings() {
      return Array.from(new Set(this[kEncodings].values()));
    }
    /**
     * @param {string|MixedEncoding<any, any, any>} encoding
     * @returns {Encoding<any, T, any>}
     */
    encoding(encoding2) {
      let resolved = this[kEncodings].get(encoding2);
      if (resolved === void 0) {
        if (typeof encoding2 === "string" && encoding2 !== "") {
          resolved = lookup[encoding2];
          if (!resolved) {
            throw new ModuleError(`Encoding '${encoding2}' is not found`, {
              code: "LEVEL_ENCODING_NOT_FOUND"
            });
          }
        } else if (typeof encoding2 !== "object" || encoding2 === null) {
          throw new TypeError("First argument 'encoding' must be a string or object");
        } else {
          resolved = from(encoding2);
        }
        const { name, format } = resolved;
        if (!this[kFormats].has(format)) {
          if (this[kFormats].has("view")) {
            resolved = resolved.createViewTranscoder();
          } else if (this[kFormats].has("buffer")) {
            resolved = resolved.createBufferTranscoder();
          } else if (this[kFormats].has("utf8")) {
            resolved = resolved.createUTF8Transcoder();
          } else {
            throw new ModuleError(`Encoding '${name}' cannot be transcoded`, {
              code: "LEVEL_ENCODING_NOT_SUPPORTED"
            });
          }
        }
        for (const k2 of [encoding2, name, resolved.name, resolved.commonName]) {
          this[kEncodings].set(k2, resolved);
        }
      }
      return resolved;
    }
  }
  levelTranscoder.Transcoder = Transcoder;
  function from(options) {
    if (options instanceof Encoding) {
      return options;
    }
    const maybeType = "type" in options && typeof options.type === "string" ? options.type : void 0;
    const name = options.name || maybeType || `anonymous-${anonymousCount++}`;
    switch (detectFormat(options)) {
      case "view":
        return new ViewFormat({ ...options, name });
      case "utf8":
        return new UTF8Format({ ...options, name });
      case "buffer":
        return new BufferFormat({ ...options, name });
      default: {
        throw new TypeError("Format must be one of 'buffer', 'view', 'utf8'");
      }
    }
  }
  function detectFormat(options) {
    if ("format" in options && options.format !== void 0) {
      return options.format;
    } else if ("buffer" in options && typeof options.buffer === "boolean") {
      return options.buffer ? "buffer" : "utf8";
    } else if ("code" in options && Number.isInteger(options.code)) {
      return "view";
    } else {
      return "buffer";
    }
  }
  const aliases = {
    binary: encodings2.buffer,
    "utf-8": encodings2.utf8
  };
  const lookup = {
    ...encodings2,
    ...aliases
  };
  let anonymousCount = 0;
  return levelTranscoder;
}
var events = { exports: {} };
var hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents) return events.exports;
  hasRequiredEvents = 1;
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n2) {
    if (typeof n2 !== "number" || n2 < 0 || NumberIsNaN(n2)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n2 + ".");
    }
    this._maxListeners = n2;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i2 = 1; i2 < arguments.length; i2++) args.push(arguments[i2]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i2 = 0; i2 < len; ++i2)
        ReflectApply(listeners[i2], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m2;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m2 = _getMaxListeners(target);
      if (m2 > 0 && existing.length > m2 && !existing.warned) {
        existing.warned = true;
        var w2 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w2.name = "MaxListenersExceededWarning";
        w2.emitter = target;
        w2.type = type;
        w2.count = existing.length;
        ProcessEmitWarning(w2);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i2, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i2 = list.length - 1; i2 >= 0; i2--) {
        if (list[i2] === listener || list[i2].listener === listener) {
          originalListener = list[i2].listener;
          position = i2;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i2;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i2 = 0; i2 < keys.length; ++i2) {
        key = keys[i2];
        if (key === "removeListener") continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i2 = listeners.length - 1; i2 >= 0; i2--) {
        this.removeListener(type, listeners[i2]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n2) {
    var copy = new Array(n2);
    for (var i2 = 0; i2 < n2; ++i2)
      copy[i2] = arr[i2];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i2 = 0; i2 < ret.length; ++i2) {
      ret[i2] = arr[i2].listener || arr[i2];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  return events.exports;
}
var maybeCombineErrors;
var hasRequiredMaybeCombineErrors;
function requireMaybeCombineErrors() {
  if (hasRequiredMaybeCombineErrors) return maybeCombineErrors;
  hasRequiredMaybeCombineErrors = 1;
  const kErrors = /* @__PURE__ */ Symbol("kErrors");
  maybeCombineErrors = function(errors2) {
    errors2 = errors2.filter(defined);
    if (errors2.length === 0) return;
    if (errors2.length === 1) return errors2[0];
    return new CombinedError(errors2);
  };
  class CombinedError extends Error {
    constructor(errors2) {
      const unique = new Set(errors2.map(getMessage).filter(Boolean));
      const message = Array.from(unique).join("; ");
      super(message);
      value(this, "name", "CombinedError");
      value(this, kErrors, errors2);
      getter(this, "stack", () => errors2.map(getStack).join("\n\n"));
      getter(this, "transient", () => errors2.length > 0 && errors2.every(transient));
      getter(this, "expected", () => errors2.length > 0 && errors2.every(expected));
    }
    [Symbol.iterator]() {
      return this[kErrors][Symbol.iterator]();
    }
  }
  function value(obj, prop, value2) {
    Object.defineProperty(obj, prop, { value: value2 });
  }
  function getter(obj, prop, get) {
    Object.defineProperty(obj, prop, { get });
  }
  function defined(err) {
    return err != null;
  }
  function getMessage(err) {
    return err.message;
  }
  function getStack(err) {
    return err.stack;
  }
  function transient(err) {
    return err.transient === true;
  }
  function expected(err) {
    return err.expected === true;
  }
  return maybeCombineErrors;
}
var abstractIterator = {};
var common = {};
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  const ModuleError = requireModuleError();
  const deprecations = /* @__PURE__ */ new Set();
  common.getOptions = function(options, def) {
    if (typeof options === "object" && options !== null) {
      return options;
    }
    if (def !== void 0) {
      return def;
    }
    return {};
  };
  common.emptyOptions = Object.freeze({});
  common.noop = function() {
  };
  common.resolvedPromise = Promise.resolve();
  common.deprecate = function(message) {
    if (!deprecations.has(message)) {
      deprecations.add(message);
      const c2 = globalThis.console;
      if (typeof c2 !== "undefined" && typeof c2.warn === "function") {
        c2.warn(new ModuleError(message, { code: "LEVEL_LEGACY" }));
      }
    }
  };
  return common;
}
var errors = {};
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors;
  hasRequiredErrors = 1;
  const ModuleError = requireModuleError();
  class AbortError extends ModuleError {
    constructor(cause) {
      super("Operation has been aborted", {
        code: "LEVEL_ABORTED",
        cause
      });
    }
    // Set name to AbortError for web compatibility. See:
    // https://dom.spec.whatwg.org/#aborting-ongoing-activities
    // https://github.com/nodejs/node/pull/35911#discussion_r515779306
    get name() {
      return "AbortError";
    }
  }
  errors.AbortError = AbortError;
  return errors;
}
var hasRequiredAbstractIterator;
function requireAbstractIterator() {
  if (hasRequiredAbstractIterator) return abstractIterator;
  hasRequiredAbstractIterator = 1;
  const ModuleError = requireModuleError();
  const combineErrors = requireMaybeCombineErrors();
  const { getOptions, emptyOptions, noop } = requireCommon();
  const { AbortError } = requireErrors();
  const kWorking = /* @__PURE__ */ Symbol("working");
  const kDecodeOne = /* @__PURE__ */ Symbol("decodeOne");
  const kDecodeMany = /* @__PURE__ */ Symbol("decodeMany");
  const kSignal = /* @__PURE__ */ Symbol("signal");
  const kPendingClose = /* @__PURE__ */ Symbol("pendingClose");
  const kClosingPromise = /* @__PURE__ */ Symbol("closingPromise");
  const kKeyEncoding = /* @__PURE__ */ Symbol("keyEncoding");
  const kValueEncoding = /* @__PURE__ */ Symbol("valueEncoding");
  const kKeys = /* @__PURE__ */ Symbol("keys");
  const kValues = /* @__PURE__ */ Symbol("values");
  const kLimit = /* @__PURE__ */ Symbol("limit");
  const kCount = /* @__PURE__ */ Symbol("count");
  const kEnded = /* @__PURE__ */ Symbol("ended");
  class CommonIterator {
    constructor(db, options) {
      if (typeof db !== "object" || db === null) {
        const hint = db === null ? "null" : typeof db;
        throw new TypeError(`The first argument must be an abstract-level database, received ${hint}`);
      }
      if (typeof options !== "object" || options === null) {
        throw new TypeError("The second argument must be an options object");
      }
      this[kWorking] = false;
      this[kPendingClose] = null;
      this[kClosingPromise] = null;
      this[kKeyEncoding] = options[kKeyEncoding];
      this[kValueEncoding] = options[kValueEncoding];
      this[kLimit] = Number.isInteger(options.limit) && options.limit >= 0 ? options.limit : Infinity;
      this[kCount] = 0;
      this[kSignal] = options.signal != null ? options.signal : null;
      this[kEnded] = false;
      this.db = db;
      this.db.attachResource(this);
    }
    get count() {
      return this[kCount];
    }
    get limit() {
      return this[kLimit];
    }
    async next() {
      startWork(this);
      try {
        if (this[kEnded] || this[kCount] >= this[kLimit]) {
          this[kEnded] = true;
          return void 0;
        }
        let item = await this._next();
        if (item === void 0) {
          this[kEnded] = true;
          return void 0;
        }
        try {
          item = this[kDecodeOne](item);
        } catch (err) {
          throw new IteratorDecodeError(err);
        }
        this[kCount]++;
        return item;
      } finally {
        endWork(this);
      }
    }
    async _next() {
    }
    async nextv(size, options) {
      if (!Number.isInteger(size)) {
        throw new TypeError("The first argument 'size' must be an integer");
      }
      options = getOptions(options, emptyOptions);
      if (size < 1) size = 1;
      if (this[kLimit] < Infinity) size = Math.min(size, this[kLimit] - this[kCount]);
      startWork(this);
      try {
        if (this[kEnded] || size <= 0) {
          this[kEnded] = true;
          return [];
        }
        const items = await this._nextv(size, options);
        if (items.length === 0) {
          this[kEnded] = true;
          return items;
        }
        try {
          this[kDecodeMany](items);
        } catch (err) {
          throw new IteratorDecodeError(err);
        }
        this[kCount] += items.length;
        return items;
      } finally {
        endWork(this);
      }
    }
    async _nextv(size, options) {
      const acc = [];
      while (acc.length < size) {
        const item = await this._next(options);
        if (item !== void 0) {
          acc.push(item);
        } else {
          this[kEnded] = true;
          break;
        }
      }
      return acc;
    }
    async all(options) {
      options = getOptions(options, emptyOptions);
      startWork(this);
      try {
        if (this[kEnded] || this[kCount] >= this[kLimit]) {
          return [];
        }
        const items = await this._all(options);
        try {
          this[kDecodeMany](items);
        } catch (err) {
          throw new IteratorDecodeError(err);
        }
        this[kCount] += items.length;
        return items;
      } catch (err) {
        endWork(this);
        await destroy(this, err);
      } finally {
        this[kEnded] = true;
        if (this[kWorking]) {
          endWork(this);
          await this.close();
        }
      }
    }
    async _all(options) {
      let count = this[kCount];
      const acc = [];
      while (true) {
        const size = this[kLimit] < Infinity ? Math.min(1e3, this[kLimit] - count) : 1e3;
        if (size <= 0) {
          return acc;
        }
        const items = await this._nextv(size, options);
        if (items.length === 0) {
          return acc;
        }
        acc.push.apply(acc, items);
        count += items.length;
      }
    }
    seek(target, options) {
      options = getOptions(options, emptyOptions);
      if (this[kClosingPromise] !== null) ;
      else if (this[kWorking]) {
        throw new ModuleError("Iterator is busy: cannot call seek() until next() has completed", {
          code: "LEVEL_ITERATOR_BUSY"
        });
      } else {
        const keyEncoding = this.db.keyEncoding(options.keyEncoding || this[kKeyEncoding]);
        const keyFormat = keyEncoding.format;
        if (options.keyEncoding !== keyFormat) {
          options = { ...options, keyEncoding: keyFormat };
        }
        const mapped = this.db.prefixKey(keyEncoding.encode(target), keyFormat, false);
        this._seek(mapped, options);
        this[kEnded] = false;
      }
    }
    _seek(target, options) {
      throw new ModuleError("Iterator does not support seek()", {
        code: "LEVEL_NOT_SUPPORTED"
      });
    }
    async close() {
      if (this[kClosingPromise] !== null) {
        return this[kClosingPromise].catch(noop);
      }
      this[kClosingPromise] = new Promise((resolve, reject) => {
        this[kPendingClose] = () => {
          this[kPendingClose] = null;
          privateClose(this).then(resolve, reject);
        };
      });
      if (!this[kWorking]) {
        this[kPendingClose]();
      }
      return this[kClosingPromise];
    }
    async _close() {
    }
    async *[Symbol.asyncIterator]() {
      try {
        let item;
        while ((item = await this.next()) !== void 0) {
          yield item;
        }
      } catch (err) {
        await destroy(this, err);
      } finally {
        await this.close();
      }
    }
  }
  class AbstractIterator extends CommonIterator {
    constructor(db, options) {
      super(db, options);
      this[kKeys] = options.keys !== false;
      this[kValues] = options.values !== false;
    }
    [kDecodeOne](entry) {
      const key = entry[0];
      const value = entry[1];
      if (key !== void 0) {
        entry[0] = this[kKeys] ? this[kKeyEncoding].decode(key) : void 0;
      }
      if (value !== void 0) {
        entry[1] = this[kValues] ? this[kValueEncoding].decode(value) : void 0;
      }
      return entry;
    }
    [kDecodeMany](entries) {
      const keyEncoding = this[kKeyEncoding];
      const valueEncoding = this[kValueEncoding];
      for (const entry of entries) {
        const key = entry[0];
        const value = entry[1];
        if (key !== void 0) entry[0] = this[kKeys] ? keyEncoding.decode(key) : void 0;
        if (value !== void 0) entry[1] = this[kValues] ? valueEncoding.decode(value) : void 0;
      }
    }
  }
  class AbstractKeyIterator extends CommonIterator {
    [kDecodeOne](key) {
      return this[kKeyEncoding].decode(key);
    }
    [kDecodeMany](keys) {
      const keyEncoding = this[kKeyEncoding];
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (key !== void 0) keys[i2] = keyEncoding.decode(key);
      }
    }
  }
  class AbstractValueIterator extends CommonIterator {
    [kDecodeOne](value) {
      return this[kValueEncoding].decode(value);
    }
    [kDecodeMany](values) {
      const valueEncoding = this[kValueEncoding];
      for (let i2 = 0; i2 < values.length; i2++) {
        const value = values[i2];
        if (value !== void 0) values[i2] = valueEncoding.decode(value);
      }
    }
  }
  class IteratorDecodeError extends ModuleError {
    constructor(cause) {
      super("Iterator could not decode data", {
        code: "LEVEL_DECODE_ERROR",
        cause
      });
    }
  }
  const startWork = function(iterator2) {
    if (iterator2[kClosingPromise] !== null) {
      throw new ModuleError("Iterator is not open: cannot read after close()", {
        code: "LEVEL_ITERATOR_NOT_OPEN"
      });
    } else if (iterator2[kWorking]) {
      throw new ModuleError("Iterator is busy: cannot read until previous read has completed", {
        code: "LEVEL_ITERATOR_BUSY"
      });
    } else if (iterator2[kSignal] !== null && iterator2[kSignal].aborted) {
      throw new AbortError();
    }
    iterator2[kWorking] = true;
  };
  const endWork = function(iterator2) {
    iterator2[kWorking] = false;
    if (iterator2[kPendingClose] !== null) {
      iterator2[kPendingClose]();
    }
  };
  const privateClose = async function(iterator2) {
    await iterator2._close();
    iterator2.db.detachResource(iterator2);
  };
  const destroy = async function(iterator2, err) {
    try {
      await iterator2.close();
    } catch (closeErr) {
      throw combineErrors([err, closeErr]);
    }
    throw err;
  };
  AbstractIterator.keyEncoding = kKeyEncoding;
  AbstractIterator.valueEncoding = kValueEncoding;
  abstractIterator.AbstractIterator = AbstractIterator;
  abstractIterator.AbstractKeyIterator = AbstractKeyIterator;
  abstractIterator.AbstractValueIterator = AbstractValueIterator;
  return abstractIterator;
}
var defaultKvIterator = {};
var hasRequiredDefaultKvIterator;
function requireDefaultKvIterator() {
  if (hasRequiredDefaultKvIterator) return defaultKvIterator;
  hasRequiredDefaultKvIterator = 1;
  const { AbstractKeyIterator, AbstractValueIterator } = requireAbstractIterator();
  const kIterator = /* @__PURE__ */ Symbol("iterator");
  const kHandleOne = /* @__PURE__ */ Symbol("handleOne");
  const kHandleMany = /* @__PURE__ */ Symbol("handleMany");
  class DefaultKeyIterator extends AbstractKeyIterator {
    constructor(db, options) {
      super(db, options);
      this[kIterator] = db.iterator({ ...options, keys: true, values: false });
    }
    [kHandleOne](entry) {
      return entry[0];
    }
    [kHandleMany](entries) {
      for (let i2 = 0; i2 < entries.length; i2++) {
        entries[i2] = entries[i2][0];
      }
    }
  }
  class DefaultValueIterator extends AbstractValueIterator {
    constructor(db, options) {
      super(db, options);
      this[kIterator] = db.iterator({ ...options, keys: false, values: true });
    }
    [kHandleOne](entry) {
      return entry[1];
    }
    [kHandleMany](entries) {
      for (let i2 = 0; i2 < entries.length; i2++) {
        entries[i2] = entries[i2][1];
      }
    }
  }
  for (const Iterator of [DefaultKeyIterator, DefaultValueIterator]) {
    Iterator.prototype._next = async function() {
      const entry = await this[kIterator].next();
      return entry === void 0 ? entry : this[kHandleOne](entry);
    };
    Iterator.prototype._nextv = async function(size, options) {
      const entries = await this[kIterator].nextv(size, options);
      this[kHandleMany](entries);
      return entries;
    };
    Iterator.prototype._all = async function(options) {
      const entries = await this[kIterator].all(options);
      this[kHandleMany](entries);
      return entries;
    };
    Iterator.prototype._seek = function(target, options) {
      this[kIterator].seek(target, options);
    };
    Iterator.prototype._close = async function() {
      return this[kIterator].close();
    };
  }
  defaultKvIterator.DefaultKeyIterator = DefaultKeyIterator;
  defaultKvIterator.DefaultValueIterator = DefaultValueIterator;
  return defaultKvIterator;
}
var deferredIterator = {};
var hasRequiredDeferredIterator;
function requireDeferredIterator() {
  if (hasRequiredDeferredIterator) return deferredIterator;
  hasRequiredDeferredIterator = 1;
  const { AbstractIterator, AbstractKeyIterator, AbstractValueIterator } = requireAbstractIterator();
  const ModuleError = requireModuleError();
  const kNut = /* @__PURE__ */ Symbol("nut");
  const kUndefer = /* @__PURE__ */ Symbol("undefer");
  const kFactory = /* @__PURE__ */ Symbol("factory");
  const kSignalOptions = /* @__PURE__ */ Symbol("signalOptions");
  class DeferredIterator extends AbstractIterator {
    constructor(db, options) {
      super(db, options);
      this[kNut] = null;
      this[kFactory] = () => db.iterator(options);
      this[kSignalOptions] = { signal: options.signal };
      this.db.defer(() => this[kUndefer](), this[kSignalOptions]);
    }
  }
  class DeferredKeyIterator extends AbstractKeyIterator {
    constructor(db, options) {
      super(db, options);
      this[kNut] = null;
      this[kFactory] = () => db.keys(options);
      this[kSignalOptions] = { signal: options.signal };
      this.db.defer(() => this[kUndefer](), this[kSignalOptions]);
    }
  }
  class DeferredValueIterator extends AbstractValueIterator {
    constructor(db, options) {
      super(db, options);
      this[kNut] = null;
      this[kFactory] = () => db.values(options);
      this[kSignalOptions] = { signal: options.signal };
      this.db.defer(() => this[kUndefer](), this[kSignalOptions]);
    }
  }
  for (const Iterator of [DeferredIterator, DeferredKeyIterator, DeferredValueIterator]) {
    Iterator.prototype[kUndefer] = function() {
      if (this.db.status === "open") {
        this[kNut] = this[kFactory]();
      }
    };
    Iterator.prototype._next = async function() {
      if (this[kNut] !== null) {
        return this[kNut].next();
      } else if (this.db.status === "opening") {
        return this.db.deferAsync(() => this._next(), this[kSignalOptions]);
      } else {
        throw new ModuleError("Iterator is not open: cannot call next() after close()", {
          code: "LEVEL_ITERATOR_NOT_OPEN"
        });
      }
    };
    Iterator.prototype._nextv = async function(size, options) {
      if (this[kNut] !== null) {
        return this[kNut].nextv(size, options);
      } else if (this.db.status === "opening") {
        return this.db.deferAsync(() => this._nextv(size, options), this[kSignalOptions]);
      } else {
        throw new ModuleError("Iterator is not open: cannot call nextv() after close()", {
          code: "LEVEL_ITERATOR_NOT_OPEN"
        });
      }
    };
    Iterator.prototype._all = async function(options) {
      if (this[kNut] !== null) {
        return this[kNut].all();
      } else if (this.db.status === "opening") {
        return this.db.deferAsync(() => this._all(options), this[kSignalOptions]);
      } else {
        throw new ModuleError("Iterator is not open: cannot call all() after close()", {
          code: "LEVEL_ITERATOR_NOT_OPEN"
        });
      }
    };
    Iterator.prototype._seek = function(target, options) {
      if (this[kNut] !== null) {
        this[kNut]._seek(target, options);
      } else if (this.db.status === "opening") {
        this.db.defer(() => this._seek(target, options), this[kSignalOptions]);
      }
    };
    Iterator.prototype._close = async function() {
      if (this[kNut] !== null) {
        return this[kNut].close();
      } else if (this.db.status === "opening") {
        return this.db.deferAsync(() => this._close());
      }
    };
  }
  deferredIterator.DeferredIterator = DeferredIterator;
  deferredIterator.DeferredKeyIterator = DeferredKeyIterator;
  deferredIterator.DeferredValueIterator = DeferredValueIterator;
  return deferredIterator;
}
var defaultChainedBatch = {};
var abstractChainedBatch = {};
var prefixes = {};
var hasRequiredPrefixes;
function requirePrefixes() {
  if (hasRequiredPrefixes) return prefixes;
  hasRequiredPrefixes = 1;
  prefixes.prefixDescendantKey = function(key, keyFormat, descendant, ancestor) {
    while (descendant !== null && descendant !== ancestor) {
      key = descendant.prefixKey(key, keyFormat, true);
      descendant = descendant.parent;
    }
    return key;
  };
  prefixes.isDescendant = function(db, ancestor) {
    while (true) {
      if (db.parent == null) return false;
      if (db.parent === ancestor) return true;
      db = db.parent;
    }
  };
  return prefixes;
}
var prewriteBatch = {};
var hasRequiredPrewriteBatch;
function requirePrewriteBatch() {
  if (hasRequiredPrewriteBatch) return prewriteBatch;
  hasRequiredPrewriteBatch = 1;
  const { prefixDescendantKey, isDescendant } = requirePrefixes();
  const kDb = /* @__PURE__ */ Symbol("db");
  const kPrivateOperations = /* @__PURE__ */ Symbol("privateOperations");
  const kPublicOperations = /* @__PURE__ */ Symbol("publicOperations");
  class PrewriteBatch {
    constructor(db, privateOperations, publicOperations) {
      this[kDb] = db;
      this[kPrivateOperations] = privateOperations;
      this[kPublicOperations] = publicOperations;
    }
    add(op) {
      const isPut = op.type === "put";
      const delegated = op.sublevel != null;
      const db = delegated ? op.sublevel : this[kDb];
      const keyError = db._checkKey(op.key);
      if (keyError != null) throw keyError;
      op.keyEncoding = db.keyEncoding(op.keyEncoding);
      if (isPut) {
        const valueError = db._checkValue(op.value);
        if (valueError != null) throw valueError;
        op.valueEncoding = db.valueEncoding(op.valueEncoding);
      } else if (op.type !== "del") {
        throw new TypeError("A batch operation must have a type property that is 'put' or 'del'");
      }
      const keyEncoding = op.keyEncoding;
      const preencodedKey = keyEncoding.encode(op.key);
      const keyFormat = keyEncoding.format;
      const siblings = delegated && !isDescendant(op.sublevel, this[kDb]) && op.sublevel !== this[kDb];
      const encodedKey = delegated && !siblings ? prefixDescendantKey(preencodedKey, keyFormat, db, this[kDb]) : preencodedKey;
      if (delegated && !siblings) {
        op.sublevel = null;
      }
      let publicOperation = null;
      if (this[kPublicOperations] !== null && !siblings) {
        publicOperation = Object.assign({}, op);
        publicOperation.encodedKey = encodedKey;
        if (delegated) {
          publicOperation.key = encodedKey;
          publicOperation.keyEncoding = this[kDb].keyEncoding(keyFormat);
        }
        this[kPublicOperations].push(publicOperation);
      }
      op.key = siblings ? encodedKey : this[kDb].prefixKey(encodedKey, keyFormat, true);
      op.keyEncoding = keyFormat;
      if (isPut) {
        const valueEncoding = op.valueEncoding;
        const encodedValue = valueEncoding.encode(op.value);
        const valueFormat = valueEncoding.format;
        op.value = encodedValue;
        op.valueEncoding = valueFormat;
        if (publicOperation !== null) {
          publicOperation.encodedValue = encodedValue;
          if (delegated) {
            publicOperation.value = encodedValue;
            publicOperation.valueEncoding = this[kDb].valueEncoding(valueFormat);
          }
        }
      }
      this[kPrivateOperations].push(op);
      return this;
    }
  }
  prewriteBatch.PrewriteBatch = PrewriteBatch;
  return prewriteBatch;
}
var hasRequiredAbstractChainedBatch;
function requireAbstractChainedBatch() {
  if (hasRequiredAbstractChainedBatch) return abstractChainedBatch;
  hasRequiredAbstractChainedBatch = 1;
  const combineErrors = requireMaybeCombineErrors();
  const ModuleError = requireModuleError();
  const { getOptions, emptyOptions, noop } = requireCommon();
  const { prefixDescendantKey, isDescendant } = requirePrefixes();
  const { PrewriteBatch } = requirePrewriteBatch();
  const kStatus = /* @__PURE__ */ Symbol("status");
  const kPublicOperations = /* @__PURE__ */ Symbol("publicOperations");
  const kLegacyOperations = /* @__PURE__ */ Symbol("legacyOperations");
  const kPrivateOperations = /* @__PURE__ */ Symbol("privateOperations");
  const kClosePromise = /* @__PURE__ */ Symbol("closePromise");
  const kLength = /* @__PURE__ */ Symbol("length");
  const kPrewriteRun = /* @__PURE__ */ Symbol("prewriteRun");
  const kPrewriteBatch = /* @__PURE__ */ Symbol("prewriteBatch");
  const kPrewriteData = /* @__PURE__ */ Symbol("prewriteData");
  const kAddMode = /* @__PURE__ */ Symbol("addMode");
  class AbstractChainedBatch {
    constructor(db, options) {
      if (typeof db !== "object" || db === null) {
        const hint = db === null ? "null" : typeof db;
        throw new TypeError(`The first argument must be an abstract-level database, received ${hint}`);
      }
      const enableWriteEvent = db.listenerCount("write") > 0;
      const enablePrewriteHook = !db.hooks.prewrite.noop;
      this[kPublicOperations] = enableWriteEvent ? [] : null;
      this[kLegacyOperations] = enableWriteEvent || enablePrewriteHook ? null : [];
      this[kLength] = 0;
      this[kStatus] = "open";
      this[kClosePromise] = null;
      this[kAddMode] = getOptions(options, emptyOptions).add === true;
      if (enablePrewriteHook) {
        const data = new PrewriteData([], enableWriteEvent ? [] : null);
        this[kPrewriteData] = data;
        this[kPrewriteBatch] = new PrewriteBatch(db, data[kPrivateOperations], data[kPublicOperations]);
        this[kPrewriteRun] = db.hooks.prewrite.run;
      } else {
        this[kPrewriteData] = null;
        this[kPrewriteBatch] = null;
        this[kPrewriteRun] = null;
      }
      this.db = db;
      this.db.attachResource(this);
    }
    get length() {
      if (this[kPrewriteData] !== null) {
        return this[kLength] + this[kPrewriteData].length;
      } else {
        return this[kLength];
      }
    }
    put(key, value, options) {
      assertStatus(this);
      options = getOptions(options, emptyOptions);
      const delegated = options.sublevel != null;
      const db = delegated ? options.sublevel : this.db;
      const original = options;
      const keyError = db._checkKey(key);
      const valueError = db._checkValue(value);
      if (keyError != null) throw keyError;
      if (valueError != null) throw valueError;
      const op = Object.assign({}, options, {
        type: "put",
        key,
        value,
        keyEncoding: db.keyEncoding(options.keyEncoding),
        valueEncoding: db.valueEncoding(options.valueEncoding)
      });
      if (this[kPrewriteRun] !== null) {
        try {
          this[kPrewriteRun](op, this[kPrewriteBatch]);
          op.keyEncoding = db.keyEncoding(op.keyEncoding);
          op.valueEncoding = db.valueEncoding(op.valueEncoding);
        } catch (err) {
          throw new ModuleError("The prewrite hook failed on batch.put()", {
            code: "LEVEL_HOOK_ERROR",
            cause: err
          });
        }
      }
      const keyEncoding = op.keyEncoding;
      const preencodedKey = keyEncoding.encode(op.key);
      const keyFormat = keyEncoding.format;
      const siblings = delegated && !isDescendant(op.sublevel, this.db) && op.sublevel !== this.db;
      const encodedKey = delegated && !siblings ? prefixDescendantKey(preencodedKey, keyFormat, db, this.db) : preencodedKey;
      const valueEncoding = op.valueEncoding;
      const encodedValue = valueEncoding.encode(op.value);
      const valueFormat = valueEncoding.format;
      if (delegated && !siblings) {
        op.sublevel = null;
      }
      if (this[kPublicOperations] !== null && !siblings) {
        const publicOperation = Object.assign({}, op);
        publicOperation.encodedKey = encodedKey;
        publicOperation.encodedValue = encodedValue;
        if (delegated) {
          publicOperation.key = encodedKey;
          publicOperation.value = encodedValue;
          publicOperation.keyEncoding = this.db.keyEncoding(keyFormat);
          publicOperation.valueEncoding = this.db.valueEncoding(valueFormat);
        }
        this[kPublicOperations].push(publicOperation);
      } else if (this[kLegacyOperations] !== null && !siblings) {
        const legacyOperation = Object.assign({}, original);
        legacyOperation.type = "put";
        legacyOperation.key = key;
        legacyOperation.value = value;
        this[kLegacyOperations].push(legacyOperation);
      }
      op.key = siblings ? encodedKey : this.db.prefixKey(encodedKey, keyFormat, true);
      op.value = encodedValue;
      op.keyEncoding = keyFormat;
      op.valueEncoding = valueFormat;
      if (this[kAddMode]) {
        this._add(op);
      } else {
        this._put(op.key, encodedValue, op);
      }
      this[kLength]++;
      return this;
    }
    _put(key, value, options) {
    }
    del(key, options) {
      assertStatus(this);
      options = getOptions(options, emptyOptions);
      const delegated = options.sublevel != null;
      const db = delegated ? options.sublevel : this.db;
      const original = options;
      const keyError = db._checkKey(key);
      if (keyError != null) throw keyError;
      const op = Object.assign({}, options, {
        type: "del",
        key,
        keyEncoding: db.keyEncoding(options.keyEncoding)
      });
      if (this[kPrewriteRun] !== null) {
        try {
          this[kPrewriteRun](op, this[kPrewriteBatch]);
          op.keyEncoding = db.keyEncoding(op.keyEncoding);
        } catch (err) {
          throw new ModuleError("The prewrite hook failed on batch.del()", {
            code: "LEVEL_HOOK_ERROR",
            cause: err
          });
        }
      }
      const keyEncoding = op.keyEncoding;
      const preencodedKey = keyEncoding.encode(op.key);
      const keyFormat = keyEncoding.format;
      const encodedKey = delegated ? prefixDescendantKey(preencodedKey, keyFormat, db, this.db) : preencodedKey;
      if (delegated) op.sublevel = null;
      if (this[kPublicOperations] !== null) {
        const publicOperation = Object.assign({}, op);
        publicOperation.encodedKey = encodedKey;
        if (delegated) {
          publicOperation.key = encodedKey;
          publicOperation.keyEncoding = this.db.keyEncoding(keyFormat);
        }
        this[kPublicOperations].push(publicOperation);
      } else if (this[kLegacyOperations] !== null) {
        const legacyOperation = Object.assign({}, original);
        legacyOperation.type = "del";
        legacyOperation.key = key;
        this[kLegacyOperations].push(legacyOperation);
      }
      op.key = this.db.prefixKey(encodedKey, keyFormat, true);
      op.keyEncoding = keyFormat;
      if (this[kAddMode]) {
        this._add(op);
      } else {
        this._del(op.key, op);
      }
      this[kLength]++;
      return this;
    }
    _del(key, options) {
    }
    _add(op) {
    }
    clear() {
      assertStatus(this);
      this._clear();
      if (this[kPublicOperations] !== null) this[kPublicOperations] = [];
      if (this[kLegacyOperations] !== null) this[kLegacyOperations] = [];
      if (this[kPrewriteData] !== null) this[kPrewriteData].clear();
      this[kLength] = 0;
      return this;
    }
    _clear() {
    }
    async write(options) {
      assertStatus(this);
      options = getOptions(options);
      if (this[kLength] === 0) {
        return this.close();
      } else {
        this[kStatus] = "writing";
        const close = prepareClose(this);
        try {
          if (this[kPrewriteData] !== null) {
            const publicOperations = this[kPrewriteData][kPublicOperations];
            const privateOperations = this[kPrewriteData][kPrivateOperations];
            const length = this[kPrewriteData].length;
            for (let i2 = 0; i2 < length; i2++) {
              const op = privateOperations[i2];
              if (this[kAddMode]) {
                this._add(op);
              } else if (op.type === "put") {
                this._put(op.key, op.value, op);
              } else {
                this._del(op.key, op);
              }
            }
            if (publicOperations !== null && length !== 0) {
              this[kPublicOperations] = this[kPublicOperations].concat(publicOperations);
            }
          }
          await this._write(options);
        } catch (err) {
          close();
          try {
            await this[kClosePromise];
          } catch (closeErr) {
            err = combineErrors([err, closeErr]);
          }
          throw err;
        }
        close();
        if (this[kPublicOperations] !== null) {
          this.db.emit("write", this[kPublicOperations]);
        } else if (this[kLegacyOperations] !== null) {
          this.db.emit("batch", this[kLegacyOperations]);
        }
        return this[kClosePromise];
      }
    }
    async _write(options) {
    }
    async close() {
      if (this[kClosePromise] !== null) {
        return this[kClosePromise].catch(noop);
      } else {
        prepareClose(this)();
        return this[kClosePromise];
      }
    }
    async _close() {
    }
  }
  const prepareClose = function(batch) {
    let close;
    batch[kClosePromise] = new Promise((resolve, reject) => {
      close = () => {
        privateClose(batch).then(resolve, reject);
      };
    });
    return close;
  };
  const privateClose = async function(batch) {
    batch[kStatus] = "closing";
    await batch._close();
    batch.db.detachResource(batch);
  };
  class PrewriteData {
    constructor(privateOperations, publicOperations) {
      this[kPrivateOperations] = privateOperations;
      this[kPublicOperations] = publicOperations;
    }
    get length() {
      return this[kPrivateOperations].length;
    }
    clear() {
      for (const k2 of [kPublicOperations, kPrivateOperations]) {
        const ops = this[k2];
        if (ops !== null) {
          ops.splice(0, ops.length);
        }
      }
    }
  }
  const assertStatus = function(batch) {
    if (batch[kStatus] !== "open") {
      throw new ModuleError("Batch is not open: cannot change operations after write() or close()", {
        code: "LEVEL_BATCH_NOT_OPEN"
      });
    }
    if (batch.db.status !== "open") {
      throw new ModuleError("Database is not open", {
        code: "LEVEL_DATABASE_NOT_OPEN"
      });
    }
  };
  abstractChainedBatch.AbstractChainedBatch = AbstractChainedBatch;
  return abstractChainedBatch;
}
var hasRequiredDefaultChainedBatch;
function requireDefaultChainedBatch() {
  if (hasRequiredDefaultChainedBatch) return defaultChainedBatch;
  hasRequiredDefaultChainedBatch = 1;
  const { AbstractChainedBatch } = requireAbstractChainedBatch();
  const kEncoded = /* @__PURE__ */ Symbol("encoded");
  class DefaultChainedBatch extends AbstractChainedBatch {
    constructor(db) {
      super(db, { add: true });
      this[kEncoded] = [];
    }
    _add(op) {
      this[kEncoded].push(op);
    }
    _clear() {
      this[kEncoded] = [];
    }
    async _write(options) {
      return this.db._batch(this[kEncoded], options);
    }
  }
  defaultChainedBatch.DefaultChainedBatch = DefaultChainedBatch;
  return defaultChainedBatch;
}
var hooks = {};
var hasRequiredHooks;
function requireHooks() {
  if (hasRequiredHooks) return hooks;
  hasRequiredHooks = 1;
  const { noop } = requireCommon();
  const kFunctions = /* @__PURE__ */ Symbol("functions");
  const kAsync = /* @__PURE__ */ Symbol("async");
  class DatabaseHooks {
    constructor() {
      this.postopen = new Hook({ async: true });
      this.prewrite = new Hook({ async: false });
      this.newsub = new Hook({ async: false });
    }
  }
  class Hook {
    constructor(options) {
      this[kAsync] = options.async;
      this[kFunctions] = /* @__PURE__ */ new Set();
      this.noop = true;
      this.run = runner(this);
    }
    add(fn) {
      assertFunction(fn);
      this[kFunctions].add(fn);
      this.noop = false;
      this.run = runner(this);
    }
    delete(fn) {
      assertFunction(fn);
      this[kFunctions].delete(fn);
      this.noop = this[kFunctions].size === 0;
      this.run = runner(this);
    }
  }
  const assertFunction = function(fn) {
    if (typeof fn !== "function") {
      const hint = fn === null ? "null" : typeof fn;
      throw new TypeError(`The first argument must be a function, received ${hint}`);
    }
  };
  const runner = function(hook) {
    if (hook.noop) {
      return noop;
    } else if (hook[kFunctions].size === 1) {
      const [fn] = hook[kFunctions];
      return fn;
    } else if (hook[kAsync]) {
      const run = async function(functions, ...args) {
        for (const fn of functions) {
          await fn(...args);
        }
      };
      return run.bind(null, Array.from(hook[kFunctions]));
    } else {
      const run = function(functions, ...args) {
        for (const fn of functions) {
          fn(...args);
        }
      };
      return run.bind(null, Array.from(hook[kFunctions]));
    }
  };
  hooks.DatabaseHooks = DatabaseHooks;
  return hooks;
}
var eventMonitor = {};
var hasRequiredEventMonitor;
function requireEventMonitor() {
  if (hasRequiredEventMonitor) return eventMonitor;
  hasRequiredEventMonitor = 1;
  const { deprecate } = requireCommon();
  eventMonitor.EventMonitor = class EventMonitor {
    constructor(emitter, events2) {
      for (const event of events2) {
        this[event.name] = false;
        if (event.deprecated) {
          event.message = `The '${event.name}' event is deprecated in favor of '${event.alt}' and will be removed in a future version of abstract-level`;
        }
      }
      const map = new Map(events2.map((e2) => [e2.name, e2]));
      const monitor = this;
      emitter.on("newListener", beforeAdded);
      emitter.on("removeListener", afterRemoved);
      function beforeAdded(name) {
        const event = map.get(name);
        if (event !== void 0) {
          monitor[name] = true;
          if (event.deprecated) {
            deprecate(event.message);
          }
        }
      }
      function afterRemoved(name) {
        if (map.has(name)) {
          monitor[name] = this.listenerCount(name) > 0;
        }
      }
    }
  };
  return eventMonitor;
}
var deferredQueue = {};
var hasRequiredDeferredQueue;
function requireDeferredQueue() {
  if (hasRequiredDeferredQueue) return deferredQueue;
  hasRequiredDeferredQueue = 1;
  const { getOptions, emptyOptions } = requireCommon();
  const { AbortError } = requireErrors();
  const kOperations = /* @__PURE__ */ Symbol("operations");
  const kSignals = /* @__PURE__ */ Symbol("signals");
  const kHandleAbort = /* @__PURE__ */ Symbol("handleAbort");
  class DeferredOperation {
    constructor(fn, signal) {
      this.fn = fn;
      this.signal = signal;
    }
  }
  class DeferredQueue {
    constructor() {
      this[kOperations] = [];
      this[kSignals] = /* @__PURE__ */ new Set();
      this[kHandleAbort] = this[kHandleAbort].bind(this);
    }
    add(fn, options) {
      options = getOptions(options, emptyOptions);
      const signal = options.signal;
      if (signal == null) {
        this[kOperations].push(new DeferredOperation(fn, null));
        return;
      }
      if (signal.aborted) {
        fn(new AbortError());
        return;
      }
      if (!this[kSignals].has(signal)) {
        this[kSignals].add(signal);
        signal.addEventListener("abort", this[kHandleAbort], { once: true });
      }
      this[kOperations].push(new DeferredOperation(fn, signal));
    }
    drain() {
      const operations = this[kOperations];
      const signals = this[kSignals];
      this[kOperations] = [];
      this[kSignals] = /* @__PURE__ */ new Set();
      for (const signal of signals) {
        signal.removeEventListener("abort", this[kHandleAbort]);
      }
      for (const operation of operations) {
        operation.fn.call(null);
      }
    }
    [kHandleAbort](ev) {
      const signal = ev.target;
      const err = new AbortError();
      const aborted = [];
      this[kOperations] = this[kOperations].filter(function(operation) {
        if (operation.signal !== null && operation.signal === signal) {
          aborted.push(operation);
          return false;
        } else {
          return true;
        }
      });
      this[kSignals].delete(signal);
      for (const operation of aborted) {
        operation.fn.call(null, err);
      }
    }
  }
  deferredQueue.DeferredQueue = DeferredQueue;
  return deferredQueue;
}
var rangeOptions_1;
var hasRequiredRangeOptions;
function requireRangeOptions() {
  if (hasRequiredRangeOptions) return rangeOptions_1;
  hasRequiredRangeOptions = 1;
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const rangeOptions = /* @__PURE__ */ new Set(["lt", "lte", "gt", "gte"]);
  rangeOptions_1 = function(options, keyEncoding) {
    const result = {};
    for (const k2 in options) {
      if (!hasOwnProperty.call(options, k2)) continue;
      if (k2 === "keyEncoding" || k2 === "valueEncoding") continue;
      if (rangeOptions.has(k2)) {
        result[k2] = keyEncoding.encode(options[k2]);
      } else {
        result[k2] = options[k2];
      }
    }
    result.reverse = !!result.reverse;
    result.limit = Number.isInteger(result.limit) && result.limit >= 0 ? result.limit : -1;
    return result;
  };
  return rangeOptions_1;
}
var abstractSublevelIterator = {};
var hasRequiredAbstractSublevelIterator;
function requireAbstractSublevelIterator() {
  if (hasRequiredAbstractSublevelIterator) return abstractSublevelIterator;
  hasRequiredAbstractSublevelIterator = 1;
  const { AbstractIterator, AbstractKeyIterator, AbstractValueIterator } = requireAbstractIterator();
  const kUnfix = /* @__PURE__ */ Symbol("unfix");
  const kIterator = /* @__PURE__ */ Symbol("iterator");
  class AbstractSublevelIterator extends AbstractIterator {
    constructor(db, options, iterator2, unfix) {
      super(db, options);
      this[kIterator] = iterator2;
      this[kUnfix] = unfix;
    }
    async _next() {
      const entry = await this[kIterator].next();
      if (entry !== void 0) {
        const key = entry[0];
        if (key !== void 0) entry[0] = this[kUnfix](key);
      }
      return entry;
    }
    async _nextv(size, options) {
      const entries = await this[kIterator].nextv(size, options);
      const unfix = this[kUnfix];
      for (const entry of entries) {
        const key = entry[0];
        if (key !== void 0) entry[0] = unfix(key);
      }
      return entries;
    }
    async _all(options) {
      const entries = await this[kIterator].all(options);
      const unfix = this[kUnfix];
      for (const entry of entries) {
        const key = entry[0];
        if (key !== void 0) entry[0] = unfix(key);
      }
      return entries;
    }
  }
  class AbstractSublevelKeyIterator extends AbstractKeyIterator {
    constructor(db, options, iterator2, unfix) {
      super(db, options);
      this[kIterator] = iterator2;
      this[kUnfix] = unfix;
    }
    async _next() {
      const key = await this[kIterator].next();
      return key === void 0 ? key : this[kUnfix](key);
    }
    async _nextv(size, options) {
      const keys = await this[kIterator].nextv(size, options);
      const unfix = this[kUnfix];
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (key !== void 0) keys[i2] = unfix(key);
      }
      return keys;
    }
    async _all(options) {
      const keys = await this[kIterator].all(options);
      const unfix = this[kUnfix];
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (key !== void 0) keys[i2] = unfix(key);
      }
      return keys;
    }
  }
  class AbstractSublevelValueIterator extends AbstractValueIterator {
    constructor(db, options, iterator2) {
      super(db, options);
      this[kIterator] = iterator2;
    }
    async _next() {
      return this[kIterator].next();
    }
    async _nextv(size, options) {
      return this[kIterator].nextv(size, options);
    }
    async _all(options) {
      return this[kIterator].all(options);
    }
  }
  for (const Iterator of [AbstractSublevelIterator, AbstractSublevelKeyIterator, AbstractSublevelValueIterator]) {
    Iterator.prototype._seek = function(target, options) {
      this[kIterator].seek(target, options);
    };
    Iterator.prototype._close = async function() {
      return this[kIterator].close();
    };
  }
  abstractSublevelIterator.AbstractSublevelIterator = AbstractSublevelIterator;
  abstractSublevelIterator.AbstractSublevelKeyIterator = AbstractSublevelKeyIterator;
  abstractSublevelIterator.AbstractSublevelValueIterator = AbstractSublevelValueIterator;
  return abstractSublevelIterator;
}
var abstractSublevel;
var hasRequiredAbstractSublevel;
function requireAbstractSublevel() {
  if (hasRequiredAbstractSublevel) return abstractSublevel;
  hasRequiredAbstractSublevel = 1;
  const ModuleError = requireModuleError();
  const { Buffer: Buffer2 } = requireBuffer() || {};
  const {
    AbstractSublevelIterator,
    AbstractSublevelKeyIterator,
    AbstractSublevelValueIterator
  } = requireAbstractSublevelIterator();
  const kGlobalPrefix = /* @__PURE__ */ Symbol("prefix");
  const kLocalPrefix = /* @__PURE__ */ Symbol("localPrefix");
  const kLocalPath = /* @__PURE__ */ Symbol("localPath");
  const kGlobalPath = /* @__PURE__ */ Symbol("globalPath");
  const kGlobalUpperBound = /* @__PURE__ */ Symbol("upperBound");
  const kPrefixRange = /* @__PURE__ */ Symbol("prefixRange");
  const kRoot = /* @__PURE__ */ Symbol("root");
  const kParent = /* @__PURE__ */ Symbol("parent");
  const kUnfix = /* @__PURE__ */ Symbol("unfix");
  const textEncoder = new TextEncoder();
  const defaults = { separator: "!" };
  abstractSublevel = function({ AbstractLevel }) {
    class AbstractSublevel extends AbstractLevel {
      static defaults(options) {
        if (options == null) {
          return defaults;
        } else if (!options.separator) {
          return { ...options, separator: "!" };
        } else {
          return options;
        }
      }
      // TODO: add autoClose option, which if true, does parent.attachResource(this)
      constructor(db, name, options) {
        const { separator, manifest, ...forward } = AbstractSublevel.defaults(options);
        const names = [].concat(name).map((name2) => trim(name2, separator));
        const reserved = separator.charCodeAt(0) + 1;
        const root = db[kRoot] || db;
        if (!names.every((name2) => textEncoder.encode(name2).every((x2) => x2 > reserved && x2 < 127))) {
          throw new ModuleError(`Sublevel name must use bytes > ${reserved} < ${127}`, {
            code: "LEVEL_INVALID_PREFIX"
          });
        }
        super(mergeManifests(db, manifest), forward);
        const localPrefix = names.map((name2) => separator + name2 + separator).join("");
        const globalPrefix = (db.prefix || "") + localPrefix;
        const globalUpperBound = globalPrefix.slice(0, -1) + String.fromCharCode(reserved);
        this[kRoot] = root;
        this[kParent] = db;
        this[kLocalPath] = names;
        this[kGlobalPath] = db.prefix ? db.path().concat(names) : names;
        this[kGlobalPrefix] = new MultiFormat(globalPrefix);
        this[kGlobalUpperBound] = new MultiFormat(globalUpperBound);
        this[kLocalPrefix] = new MultiFormat(localPrefix);
        this[kUnfix] = new Unfixer();
      }
      prefixKey(key, keyFormat, local) {
        const prefix = local ? this[kLocalPrefix] : this[kGlobalPrefix];
        if (keyFormat === "utf8") {
          return prefix.utf8 + key;
        } else if (key.byteLength === 0) {
          return prefix[keyFormat];
        } else if (keyFormat === "view") {
          const view = prefix.view;
          const result = new Uint8Array(view.byteLength + key.byteLength);
          result.set(view, 0);
          result.set(key, view.byteLength);
          return result;
        } else {
          const buffer2 = prefix.buffer;
          return Buffer2.concat([buffer2, key], buffer2.byteLength + key.byteLength);
        }
      }
      // Not exposed for now.
      [kPrefixRange](range, keyFormat) {
        if (range.gte !== void 0) {
          range.gte = this.prefixKey(range.gte, keyFormat, false);
        } else if (range.gt !== void 0) {
          range.gt = this.prefixKey(range.gt, keyFormat, false);
        } else {
          range.gte = this[kGlobalPrefix][keyFormat];
        }
        if (range.lte !== void 0) {
          range.lte = this.prefixKey(range.lte, keyFormat, false);
        } else if (range.lt !== void 0) {
          range.lt = this.prefixKey(range.lt, keyFormat, false);
        } else {
          range.lte = this[kGlobalUpperBound][keyFormat];
        }
      }
      get prefix() {
        return this[kGlobalPrefix].utf8;
      }
      get db() {
        return this[kRoot];
      }
      get parent() {
        return this[kParent];
      }
      path(local = false) {
        return local ? this[kLocalPath] : this[kGlobalPath];
      }
      async _open(options) {
        return this[kParent].open({ passive: true });
      }
      async _put(key, value, options) {
        return this[kParent].put(key, value, options);
      }
      async _get(key, options) {
        return this[kParent].get(key, options);
      }
      async _getMany(keys, options) {
        return this[kParent].getMany(keys, options);
      }
      async _del(key, options) {
        return this[kParent].del(key, options);
      }
      async _batch(operations, options) {
        return this[kParent].batch(operations, options);
      }
      // TODO: call parent instead of root
      async _clear(options) {
        this[kPrefixRange](options, options.keyEncoding);
        return this[kRoot].clear(options);
      }
      // TODO: call parent instead of root
      _iterator(options) {
        this[kPrefixRange](options, options.keyEncoding);
        const iterator2 = this[kRoot].iterator(options);
        const unfix = this[kUnfix].get(this[kGlobalPrefix].utf8.length, options.keyEncoding);
        return new AbstractSublevelIterator(this, options, iterator2, unfix);
      }
      _keys(options) {
        this[kPrefixRange](options, options.keyEncoding);
        const iterator2 = this[kRoot].keys(options);
        const unfix = this[kUnfix].get(this[kGlobalPrefix].utf8.length, options.keyEncoding);
        return new AbstractSublevelKeyIterator(this, options, iterator2, unfix);
      }
      _values(options) {
        this[kPrefixRange](options, options.keyEncoding);
        const iterator2 = this[kRoot].values(options);
        return new AbstractSublevelValueIterator(this, options, iterator2);
      }
    }
    return { AbstractSublevel };
  };
  const mergeManifests = function(parent, manifest) {
    return {
      // Inherit manifest of parent db
      ...parent.supports,
      // Disable unsupported features
      createIfMissing: false,
      errorIfExists: false,
      // Unset additional events because we're not forwarding them
      events: {},
      // Unset additional methods (like approximateSize) which we can't support here unless
      // the AbstractSublevel class is overridden by an implementation of `abstract-level`.
      additionalMethods: {},
      // Inherit manifest of custom AbstractSublevel subclass. Such a class is not
      // allowed to override encodings.
      ...manifest,
      encodings: {
        utf8: supportsEncoding(parent, "utf8"),
        buffer: supportsEncoding(parent, "buffer"),
        view: supportsEncoding(parent, "view")
      }
    };
  };
  const supportsEncoding = function(parent, encoding2) {
    return parent.supports.encodings[encoding2] ? parent.keyEncoding(encoding2).name === encoding2 : false;
  };
  class MultiFormat {
    constructor(key) {
      this.utf8 = key;
      this.view = textEncoder.encode(key);
      this.buffer = Buffer2 ? Buffer2.from(this.view.buffer, 0, this.view.byteLength) : {};
    }
  }
  class Unfixer {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
    }
    get(prefixLength, keyFormat) {
      let unfix = this.cache.get(keyFormat);
      if (unfix === void 0) {
        if (keyFormat === "view") {
          unfix = (function(prefixLength2, key) {
            return key.subarray(prefixLength2);
          }).bind(null, prefixLength);
        } else {
          unfix = (function(prefixLength2, key) {
            return key.slice(prefixLength2);
          }).bind(null, prefixLength);
        }
        this.cache.set(keyFormat, unfix);
      }
      return unfix;
    }
  }
  const trim = function(str, char) {
    let start = 0;
    let end = str.length;
    while (start < end && str[start] === char) start++;
    while (end > start && str[end - 1] === char) end--;
    return str.slice(start, end);
  };
  return abstractSublevel;
}
var hasRequiredAbstractLevel$1;
function requireAbstractLevel$1() {
  if (hasRequiredAbstractLevel$1) return abstractLevel;
  hasRequiredAbstractLevel$1 = 1;
  const { supports } = requireLevelSupports();
  const { Transcoder } = requireLevelTranscoder();
  const { EventEmitter } = requireEvents();
  const ModuleError = requireModuleError();
  const combineErrors = requireMaybeCombineErrors();
  const { AbstractIterator } = requireAbstractIterator();
  const { DefaultKeyIterator, DefaultValueIterator } = requireDefaultKvIterator();
  const { DeferredIterator, DeferredKeyIterator, DeferredValueIterator } = requireDeferredIterator();
  const { DefaultChainedBatch } = requireDefaultChainedBatch();
  const { DatabaseHooks } = requireHooks();
  const { PrewriteBatch } = requirePrewriteBatch();
  const { EventMonitor } = requireEventMonitor();
  const { getOptions, noop, emptyOptions, resolvedPromise } = requireCommon();
  const { prefixDescendantKey, isDescendant } = requirePrefixes();
  const { DeferredQueue } = requireDeferredQueue();
  const rangeOptions = requireRangeOptions();
  const kResources = /* @__PURE__ */ Symbol("resources");
  const kCloseResources = /* @__PURE__ */ Symbol("closeResources");
  const kQueue = /* @__PURE__ */ Symbol("queue");
  const kDeferOpen = /* @__PURE__ */ Symbol("deferOpen");
  const kOptions = /* @__PURE__ */ Symbol("options");
  const kStatus = /* @__PURE__ */ Symbol("status");
  const kStatusChange = /* @__PURE__ */ Symbol("statusChange");
  const kStatusLocked = /* @__PURE__ */ Symbol("statusLocked");
  const kDefaultOptions = /* @__PURE__ */ Symbol("defaultOptions");
  const kTranscoder = /* @__PURE__ */ Symbol("transcoder");
  const kKeyEncoding = /* @__PURE__ */ Symbol("keyEncoding");
  const kValueEncoding = /* @__PURE__ */ Symbol("valueEncoding");
  const kEventMonitor = /* @__PURE__ */ Symbol("eventMonitor");
  const kArrayBatch = /* @__PURE__ */ Symbol("arrayBatch");
  class AbstractLevel extends EventEmitter {
    constructor(manifest, options) {
      super();
      if (typeof manifest !== "object" || manifest === null) {
        throw new TypeError("The first argument 'manifest' must be an object");
      }
      options = getOptions(options);
      const { keyEncoding, valueEncoding, passive, ...forward } = options;
      this[kResources] = /* @__PURE__ */ new Set();
      this[kQueue] = new DeferredQueue();
      this[kDeferOpen] = true;
      this[kOptions] = forward;
      this[kStatus] = "opening";
      this[kStatusChange] = null;
      this[kStatusLocked] = false;
      this.hooks = new DatabaseHooks();
      this.supports = supports(manifest, {
        deferredOpen: true,
        // TODO (next major): add seek
        snapshots: manifest.snapshots !== false,
        permanence: manifest.permanence !== false,
        encodings: manifest.encodings || {},
        events: Object.assign({}, manifest.events, {
          opening: true,
          open: true,
          closing: true,
          closed: true,
          write: true,
          put: true,
          del: true,
          batch: true,
          clear: true
        })
      });
      this[kEventMonitor] = new EventMonitor(this, [
        { name: "write" },
        { name: "put", deprecated: true, alt: "write" },
        { name: "del", deprecated: true, alt: "write" },
        { name: "batch", deprecated: true, alt: "write" }
      ]);
      this[kTranscoder] = new Transcoder(formats2(this));
      this[kKeyEncoding] = this[kTranscoder].encoding(keyEncoding || "utf8");
      this[kValueEncoding] = this[kTranscoder].encoding(valueEncoding || "utf8");
      for (const encoding2 of this[kTranscoder].encodings()) {
        if (!this.supports.encodings[encoding2.commonName]) {
          this.supports.encodings[encoding2.commonName] = true;
        }
      }
      this[kDefaultOptions] = {
        empty: emptyOptions,
        entry: Object.freeze({
          keyEncoding: this[kKeyEncoding].commonName,
          valueEncoding: this[kValueEncoding].commonName
        }),
        entryFormat: Object.freeze({
          keyEncoding: this[kKeyEncoding].format,
          valueEncoding: this[kValueEncoding].format
        }),
        key: Object.freeze({
          keyEncoding: this[kKeyEncoding].commonName
        }),
        keyFormat: Object.freeze({
          keyEncoding: this[kKeyEncoding].format
        })
      };
      queueMicrotask(() => {
        if (this[kDeferOpen]) {
          this.open({ passive: false }).catch(noop);
        }
      });
    }
    get status() {
      return this[kStatus];
    }
    get parent() {
      return null;
    }
    keyEncoding(encoding2) {
      return this[kTranscoder].encoding(encoding2 != null ? encoding2 : this[kKeyEncoding]);
    }
    valueEncoding(encoding2) {
      return this[kTranscoder].encoding(encoding2 != null ? encoding2 : this[kValueEncoding]);
    }
    async open(options) {
      options = { ...this[kOptions], ...getOptions(options) };
      options.createIfMissing = options.createIfMissing !== false;
      options.errorIfExists = !!options.errorIfExists;
      const postopen = this.hooks.postopen.noop ? null : this.hooks.postopen.run;
      const passive = options.passive;
      if (passive && this[kDeferOpen]) {
        await void 0;
      }
      assertUnlocked(this);
      while (this[kStatusChange] !== null) await this[kStatusChange].catch(noop);
      assertUnlocked(this);
      if (passive) {
        if (this[kStatus] !== "open") throw new NotOpenError();
      } else if (this[kStatus] === "closed" || this[kDeferOpen]) {
        this[kDeferOpen] = false;
        this[kStatusChange] = resolvedPromise;
        this[kStatusChange] = (async () => {
          this[kStatus] = "opening";
          try {
            this.emit("opening");
            await this._open(options);
          } catch (err) {
            this[kStatus] = "closed";
            this[kQueue].drain();
            try {
              await this[kCloseResources]();
            } catch (resourceErr) {
              err = combineErrors([err, resourceErr]);
            }
            throw new NotOpenError(err);
          }
          this[kStatus] = "open";
          if (postopen !== null) {
            let hookErr;
            try {
              this[kStatusLocked] = true;
              await postopen(options);
            } catch (err) {
              hookErr = convertRejection(err);
            } finally {
              this[kStatusLocked] = false;
            }
            if (hookErr) {
              this[kStatus] = "closing";
              this[kQueue].drain();
              try {
                await this[kCloseResources]();
                await this._close();
              } catch (closeErr) {
                this[kStatusLocked] = true;
                hookErr = combineErrors([hookErr, closeErr]);
              }
              this[kStatus] = "closed";
              throw new ModuleError("The postopen hook failed on open()", {
                code: "LEVEL_HOOK_ERROR",
                cause: hookErr
              });
            }
          }
          this[kQueue].drain();
          this.emit("open");
        })();
        try {
          await this[kStatusChange];
        } finally {
          this[kStatusChange] = null;
        }
      } else if (this[kStatus] !== "open") {
        throw new NotOpenError();
      }
    }
    async _open(options) {
    }
    async close() {
      assertUnlocked(this);
      while (this[kStatusChange] !== null) await this[kStatusChange].catch(noop);
      assertUnlocked(this);
      if (this[kStatus] === "open" || this[kDeferOpen]) {
        const fromInitial = this[kDeferOpen];
        this[kDeferOpen] = false;
        this[kStatusChange] = resolvedPromise;
        this[kStatusChange] = (async () => {
          this[kStatus] = "closing";
          this[kQueue].drain();
          try {
            this.emit("closing");
            await this[kCloseResources]();
            if (!fromInitial) await this._close();
          } catch (err) {
            this[kStatus] = "open";
            this[kQueue].drain();
            throw new NotClosedError(err);
          }
          this[kStatus] = "closed";
          this[kQueue].drain();
          this.emit("closed");
        })();
        try {
          await this[kStatusChange];
        } finally {
          this[kStatusChange] = null;
        }
      } else if (this[kStatus] !== "closed") {
        throw new NotClosedError();
      }
    }
    async [kCloseResources]() {
      if (this[kResources].size === 0) {
        return;
      }
      const resources = Array.from(this[kResources]);
      const promises = resources.map(closeResource);
      return Promise.allSettled(promises).then(async (results) => {
        const errors2 = [];
        for (let i2 = 0; i2 < results.length; i2++) {
          if (results[i2].status === "fulfilled") {
            this[kResources].delete(resources[i2]);
          } else {
            errors2.push(convertRejection(results[i2].reason));
          }
        }
        if (errors2.length > 0) {
          throw combineErrors(errors2);
        }
      });
    }
    async _close() {
    }
    async get(key, options) {
      options = getOptions(options, this[kDefaultOptions].entry);
      if (this[kStatus] === "opening") {
        return this.deferAsync(() => this.get(key, options));
      }
      assertOpen(this);
      const err = this._checkKey(key);
      if (err) throw err;
      const keyEncoding = this.keyEncoding(options.keyEncoding);
      const valueEncoding = this.valueEncoding(options.valueEncoding);
      const keyFormat = keyEncoding.format;
      const valueFormat = valueEncoding.format;
      if (options.keyEncoding !== keyFormat || options.valueEncoding !== valueFormat) {
        options = Object.assign({}, options, { keyEncoding: keyFormat, valueEncoding: valueFormat });
      }
      const encodedKey = keyEncoding.encode(key);
      const value = await this._get(this.prefixKey(encodedKey, keyFormat, true), options);
      try {
        return value === void 0 ? value : valueEncoding.decode(value);
      } catch (err2) {
        throw new ModuleError("Could not decode value", {
          code: "LEVEL_DECODE_ERROR",
          cause: err2
        });
      }
    }
    async _get(key, options) {
      return void 0;
    }
    async getMany(keys, options) {
      options = getOptions(options, this[kDefaultOptions].entry);
      if (this[kStatus] === "opening") {
        return this.deferAsync(() => this.getMany(keys, options));
      }
      assertOpen(this);
      if (!Array.isArray(keys)) {
        throw new TypeError("The first argument 'keys' must be an array");
      }
      if (keys.length === 0) {
        return [];
      }
      const keyEncoding = this.keyEncoding(options.keyEncoding);
      const valueEncoding = this.valueEncoding(options.valueEncoding);
      const keyFormat = keyEncoding.format;
      const valueFormat = valueEncoding.format;
      if (options.keyEncoding !== keyFormat || options.valueEncoding !== valueFormat) {
        options = Object.assign({}, options, { keyEncoding: keyFormat, valueEncoding: valueFormat });
      }
      const mappedKeys = new Array(keys.length);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        const err = this._checkKey(key);
        if (err) throw err;
        mappedKeys[i2] = this.prefixKey(keyEncoding.encode(key), keyFormat, true);
      }
      const values = await this._getMany(mappedKeys, options);
      try {
        for (let i2 = 0; i2 < values.length; i2++) {
          if (values[i2] !== void 0) {
            values[i2] = valueEncoding.decode(values[i2]);
          }
        }
      } catch (err) {
        throw new ModuleError(`Could not decode one or more of ${values.length} value(s)`, {
          code: "LEVEL_DECODE_ERROR",
          cause: err
        });
      }
      return values;
    }
    async _getMany(keys, options) {
      return new Array(keys.length).fill(void 0);
    }
    async put(key, value, options) {
      if (!this.hooks.prewrite.noop) {
        return this.batch([{ type: "put", key, value }], options);
      }
      options = getOptions(options, this[kDefaultOptions].entry);
      if (this[kStatus] === "opening") {
        return this.deferAsync(() => this.put(key, value, options));
      }
      assertOpen(this);
      const err = this._checkKey(key) || this._checkValue(value);
      if (err) throw err;
      const keyEncoding = this.keyEncoding(options.keyEncoding);
      const valueEncoding = this.valueEncoding(options.valueEncoding);
      const keyFormat = keyEncoding.format;
      const valueFormat = valueEncoding.format;
      const enableWriteEvent = this[kEventMonitor].write;
      const original = options;
      if (options === this[kDefaultOptions].entry) {
        options = this[kDefaultOptions].entryFormat;
      } else if (options.keyEncoding !== keyFormat || options.valueEncoding !== valueFormat) {
        options = Object.assign({}, options, { keyEncoding: keyFormat, valueEncoding: valueFormat });
      }
      const encodedKey = keyEncoding.encode(key);
      const prefixedKey = this.prefixKey(encodedKey, keyFormat, true);
      const encodedValue = valueEncoding.encode(value);
      await this._put(prefixedKey, encodedValue, options);
      if (enableWriteEvent) {
        const op = Object.assign({}, original, {
          type: "put",
          key,
          value,
          keyEncoding,
          valueEncoding,
          encodedKey,
          encodedValue
        });
        this.emit("write", [op]);
      } else {
        this.emit("put", key, value);
      }
    }
    async _put(key, value, options) {
    }
    async del(key, options) {
      if (!this.hooks.prewrite.noop) {
        return this.batch([{ type: "del", key }], options);
      }
      options = getOptions(options, this[kDefaultOptions].key);
      if (this[kStatus] === "opening") {
        return this.deferAsync(() => this.del(key, options));
      }
      assertOpen(this);
      const err = this._checkKey(key);
      if (err) throw err;
      const keyEncoding = this.keyEncoding(options.keyEncoding);
      const keyFormat = keyEncoding.format;
      const enableWriteEvent = this[kEventMonitor].write;
      const original = options;
      if (options === this[kDefaultOptions].key) {
        options = this[kDefaultOptions].keyFormat;
      } else if (options.keyEncoding !== keyFormat) {
        options = Object.assign({}, options, { keyEncoding: keyFormat });
      }
      const encodedKey = keyEncoding.encode(key);
      const prefixedKey = this.prefixKey(encodedKey, keyFormat, true);
      await this._del(prefixedKey, options);
      if (enableWriteEvent) {
        const op = Object.assign({}, original, {
          type: "del",
          key,
          keyEncoding,
          encodedKey
        });
        this.emit("write", [op]);
      } else {
        this.emit("del", key);
      }
    }
    async _del(key, options) {
    }
    // TODO (future): add way for implementations to declare which options are for the
    // whole batch rather than defaults for individual operations. E.g. the sync option
    // of classic-level, that should not be copied to individual operations.
    batch(operations, options) {
      if (!arguments.length) {
        assertOpen(this);
        return this._chainedBatch();
      }
      options = getOptions(options, this[kDefaultOptions].empty);
      return this[kArrayBatch](operations, options);
    }
    // Wrapped for async error handling
    async [kArrayBatch](operations, options) {
      if (this[kStatus] === "opening") {
        return this.deferAsync(() => this[kArrayBatch](operations, options));
      }
      assertOpen(this);
      if (!Array.isArray(operations)) {
        throw new TypeError("The first argument 'operations' must be an array");
      }
      if (operations.length === 0) {
        return;
      }
      const length = operations.length;
      const enablePrewriteHook = !this.hooks.prewrite.noop;
      const enableWriteEvent = this[kEventMonitor].write;
      const publicOperations = enableWriteEvent ? new Array(length) : null;
      const privateOperations = new Array(length);
      const prewriteBatch2 = enablePrewriteHook ? new PrewriteBatch(this, privateOperations, publicOperations) : null;
      for (let i2 = 0; i2 < length; i2++) {
        const op = Object.assign({}, options, operations[i2]);
        const isPut = op.type === "put";
        const delegated = op.sublevel != null;
        const db = delegated ? op.sublevel : this;
        const keyError = db._checkKey(op.key);
        if (keyError != null) throw keyError;
        op.keyEncoding = db.keyEncoding(op.keyEncoding);
        if (isPut) {
          const valueError = db._checkValue(op.value);
          if (valueError != null) throw valueError;
          op.valueEncoding = db.valueEncoding(op.valueEncoding);
        } else if (op.type !== "del") {
          throw new TypeError("A batch operation must have a type property that is 'put' or 'del'");
        }
        if (enablePrewriteHook) {
          try {
            this.hooks.prewrite.run(op, prewriteBatch2);
            op.keyEncoding = db.keyEncoding(op.keyEncoding);
            if (isPut) op.valueEncoding = db.valueEncoding(op.valueEncoding);
          } catch (err) {
            throw new ModuleError("The prewrite hook failed on batch()", {
              code: "LEVEL_HOOK_ERROR",
              cause: err
            });
          }
        }
        const keyEncoding = op.keyEncoding;
        const preencodedKey = keyEncoding.encode(op.key);
        const keyFormat = keyEncoding.format;
        const siblings = delegated && !isDescendant(op.sublevel, this) && op.sublevel !== this;
        const encodedKey = delegated && !siblings ? prefixDescendantKey(preencodedKey, keyFormat, db, this) : preencodedKey;
        if (delegated && !siblings) {
          op.sublevel = null;
        }
        let publicOperation = null;
        if (enableWriteEvent && !siblings) {
          publicOperation = Object.assign({}, op);
          publicOperation.encodedKey = encodedKey;
          if (delegated) {
            publicOperation.key = encodedKey;
            publicOperation.keyEncoding = this.keyEncoding(keyFormat);
          }
          publicOperations[i2] = publicOperation;
        }
        op.key = siblings ? encodedKey : this.prefixKey(encodedKey, keyFormat, true);
        op.keyEncoding = keyFormat;
        if (isPut) {
          const valueEncoding = op.valueEncoding;
          const encodedValue = valueEncoding.encode(op.value);
          const valueFormat = valueEncoding.format;
          op.value = encodedValue;
          op.valueEncoding = valueFormat;
          if (enableWriteEvent && !siblings) {
            publicOperation.encodedValue = encodedValue;
            if (delegated) {
              publicOperation.value = encodedValue;
              publicOperation.valueEncoding = this.valueEncoding(valueFormat);
            }
          }
        }
        privateOperations[i2] = op;
      }
      await this._batch(privateOperations, options);
      if (enableWriteEvent) {
        this.emit("write", publicOperations);
      } else if (!enablePrewriteHook) {
        this.emit("batch", operations);
      }
    }
    async _batch(operations, options) {
    }
    sublevel(name, options) {
      const xopts = AbstractSublevel.defaults(options);
      const sublevel = this._sublevel(name, xopts);
      if (!this.hooks.newsub.noop) {
        try {
          this.hooks.newsub.run(sublevel, xopts);
        } catch (err) {
          throw new ModuleError("The newsub hook failed on sublevel()", {
            code: "LEVEL_HOOK_ERROR",
            cause: err
          });
        }
      }
      return sublevel;
    }
    _sublevel(name, options) {
      return new AbstractSublevel(this, name, options);
    }
    prefixKey(key, keyFormat, local) {
      return key;
    }
    async clear(options) {
      options = getOptions(options, this[kDefaultOptions].empty);
      if (this[kStatus] === "opening") {
        return this.deferAsync(() => this.clear(options));
      }
      assertOpen(this);
      const original = options;
      const keyEncoding = this.keyEncoding(options.keyEncoding);
      options = rangeOptions(options, keyEncoding);
      options.keyEncoding = keyEncoding.format;
      if (options.limit !== 0) {
        await this._clear(options);
        this.emit("clear", original);
      }
    }
    async _clear(options) {
    }
    iterator(options) {
      const keyEncoding = this.keyEncoding(options && options.keyEncoding);
      const valueEncoding = this.valueEncoding(options && options.valueEncoding);
      options = rangeOptions(options, keyEncoding);
      options.keys = options.keys !== false;
      options.values = options.values !== false;
      options[AbstractIterator.keyEncoding] = keyEncoding;
      options[AbstractIterator.valueEncoding] = valueEncoding;
      options.keyEncoding = keyEncoding.format;
      options.valueEncoding = valueEncoding.format;
      if (this[kStatus] === "opening") {
        return new DeferredIterator(this, options);
      }
      assertOpen(this);
      return this._iterator(options);
    }
    _iterator(options) {
      return new AbstractIterator(this, options);
    }
    keys(options) {
      const keyEncoding = this.keyEncoding(options && options.keyEncoding);
      const valueEncoding = this.valueEncoding(options && options.valueEncoding);
      options = rangeOptions(options, keyEncoding);
      options[AbstractIterator.keyEncoding] = keyEncoding;
      options[AbstractIterator.valueEncoding] = valueEncoding;
      options.keyEncoding = keyEncoding.format;
      options.valueEncoding = valueEncoding.format;
      if (this[kStatus] === "opening") {
        return new DeferredKeyIterator(this, options);
      }
      assertOpen(this);
      return this._keys(options);
    }
    _keys(options) {
      return new DefaultKeyIterator(this, options);
    }
    values(options) {
      const keyEncoding = this.keyEncoding(options && options.keyEncoding);
      const valueEncoding = this.valueEncoding(options && options.valueEncoding);
      options = rangeOptions(options, keyEncoding);
      options[AbstractIterator.keyEncoding] = keyEncoding;
      options[AbstractIterator.valueEncoding] = valueEncoding;
      options.keyEncoding = keyEncoding.format;
      options.valueEncoding = valueEncoding.format;
      if (this[kStatus] === "opening") {
        return new DeferredValueIterator(this, options);
      }
      assertOpen(this);
      return this._values(options);
    }
    _values(options) {
      return new DefaultValueIterator(this, options);
    }
    defer(fn, options) {
      if (typeof fn !== "function") {
        throw new TypeError("The first argument must be a function");
      }
      this[kQueue].add(function(abortError) {
        if (!abortError) fn();
      }, options);
    }
    deferAsync(fn, options) {
      if (typeof fn !== "function") {
        throw new TypeError("The first argument must be a function");
      }
      return new Promise((resolve, reject) => {
        this[kQueue].add(function(abortError) {
          if (abortError) reject(abortError);
          else fn().then(resolve, reject);
        }, options);
      });
    }
    // TODO: docs and types
    attachResource(resource) {
      if (typeof resource !== "object" || resource === null || typeof resource.close !== "function") {
        throw new TypeError("The first argument must be a resource object");
      }
      this[kResources].add(resource);
    }
    // TODO: docs and types
    detachResource(resource) {
      this[kResources].delete(resource);
    }
    _chainedBatch() {
      return new DefaultChainedBatch(this);
    }
    _checkKey(key) {
      if (key === null || key === void 0) {
        return new ModuleError("Key cannot be null or undefined", {
          code: "LEVEL_INVALID_KEY"
        });
      }
    }
    _checkValue(value) {
      if (value === null || value === void 0) {
        return new ModuleError("Value cannot be null or undefined", {
          code: "LEVEL_INVALID_VALUE"
        });
      }
    }
  }
  const { AbstractSublevel } = requireAbstractSublevel()({ AbstractLevel });
  abstractLevel.AbstractLevel = AbstractLevel;
  abstractLevel.AbstractSublevel = AbstractSublevel;
  const assertOpen = function(db) {
    if (db[kStatus] !== "open") {
      throw new ModuleError("Database is not open", {
        code: "LEVEL_DATABASE_NOT_OPEN"
      });
    }
  };
  const assertUnlocked = function(db) {
    if (db[kStatusLocked]) {
      throw new ModuleError("Database status is locked", {
        code: "LEVEL_STATUS_LOCKED"
      });
    }
  };
  const formats2 = function(db) {
    return Object.keys(db.supports.encodings).filter((k2) => !!db.supports.encodings[k2]);
  };
  const closeResource = function(resource) {
    return resource.close();
  };
  const convertRejection = function(reason) {
    if (reason instanceof Error) {
      return reason;
    }
    if (Object.prototype.toString.call(reason) === "[object Error]") {
      return reason;
    }
    const hint = reason === null ? "null" : typeof reason;
    const msg = `Promise rejection reason must be an Error, received ${hint}`;
    return new TypeError(msg);
  };
  class NotOpenError extends ModuleError {
    constructor(cause) {
      super("Database failed to open", {
        code: "LEVEL_DATABASE_NOT_OPEN",
        cause
      });
    }
  }
  class NotClosedError extends ModuleError {
    constructor(cause) {
      super("Database failed to close", {
        code: "LEVEL_DATABASE_NOT_CLOSED",
        cause
      });
    }
  }
  return abstractLevel;
}
var hasRequiredAbstractLevel;
function requireAbstractLevel() {
  if (hasRequiredAbstractLevel) return abstractLevel$1;
  hasRequiredAbstractLevel = 1;
  abstractLevel$1.AbstractLevel = requireAbstractLevel$1().AbstractLevel;
  abstractLevel$1.AbstractSublevel = requireAbstractLevel$1().AbstractSublevel;
  abstractLevel$1.AbstractIterator = requireAbstractIterator().AbstractIterator;
  abstractLevel$1.AbstractKeyIterator = requireAbstractIterator().AbstractKeyIterator;
  abstractLevel$1.AbstractValueIterator = requireAbstractIterator().AbstractValueIterator;
  abstractLevel$1.AbstractChainedBatch = requireAbstractChainedBatch().AbstractChainedBatch;
  return abstractLevel$1;
}
var iterator = {};
var keyRange;
var hasRequiredKeyRange;
function requireKeyRange() {
  if (hasRequiredKeyRange) return keyRange;
  hasRequiredKeyRange = 1;
  keyRange = function createKeyRange(options) {
    const lower = options.gte !== void 0 ? options.gte : options.gt !== void 0 ? options.gt : void 0;
    const upper = options.lte !== void 0 ? options.lte : options.lt !== void 0 ? options.lt : void 0;
    const lowerExclusive = options.gte === void 0;
    const upperExclusive = options.lte === void 0;
    if (lower !== void 0 && upper !== void 0) {
      return IDBKeyRange.bound(lower, upper, lowerExclusive, upperExclusive);
    } else if (lower !== void 0) {
      return IDBKeyRange.lowerBound(lower, lowerExclusive);
    } else if (upper !== void 0) {
      return IDBKeyRange.upperBound(upper, upperExclusive);
    } else {
      return null;
    }
  };
  return keyRange;
}
var deserialize;
var hasRequiredDeserialize;
function requireDeserialize() {
  if (hasRequiredDeserialize) return deserialize;
  hasRequiredDeserialize = 1;
  const textEncoder = new TextEncoder();
  deserialize = function(data) {
    if (data === void 0) {
      return data;
    } else if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return textEncoder.encode(data);
    }
  };
  return deserialize;
}
var hasRequiredIterator;
function requireIterator() {
  if (hasRequiredIterator) return iterator;
  hasRequiredIterator = 1;
  const { AbstractIterator } = requireAbstractLevel();
  const createKeyRange = requireKeyRange();
  const deserialize2 = requireDeserialize();
  const kCache = /* @__PURE__ */ Symbol("cache");
  const kFinished = /* @__PURE__ */ Symbol("finished");
  const kOptions = /* @__PURE__ */ Symbol("options");
  const kCurrentOptions = /* @__PURE__ */ Symbol("currentOptions");
  const kPosition = /* @__PURE__ */ Symbol("position");
  const kLocation = /* @__PURE__ */ Symbol("location");
  const kFirst = /* @__PURE__ */ Symbol("first");
  const emptyOptions = {};
  class Iterator extends AbstractIterator {
    constructor(db, location, options) {
      super(db, options);
      this[kCache] = [];
      this[kFinished] = this.limit === 0;
      this[kOptions] = options;
      this[kCurrentOptions] = { ...options };
      this[kPosition] = void 0;
      this[kLocation] = location;
      this[kFirst] = true;
    }
    // Note: if called by _all() then size can be Infinity. This is an internal
    // detail; by design AbstractIterator.nextv() does not support Infinity.
    async _nextv(size, options) {
      this[kFirst] = false;
      if (this[kFinished]) {
        return [];
      }
      if (this[kCache].length > 0) {
        size = Math.min(size, this[kCache].length);
        return this[kCache].splice(0, size);
      }
      if (this[kPosition] !== void 0) {
        if (this[kOptions].reverse) {
          this[kCurrentOptions].lt = this[kPosition];
          this[kCurrentOptions].lte = void 0;
        } else {
          this[kCurrentOptions].gt = this[kPosition];
          this[kCurrentOptions].gte = void 0;
        }
      }
      let keyRange2;
      try {
        keyRange2 = createKeyRange(this[kCurrentOptions]);
      } catch (_2) {
        this[kFinished] = true;
        return [];
      }
      const transaction = this.db.db.transaction([this[kLocation]], "readonly");
      const store = transaction.objectStore(this[kLocation]);
      const entries = [];
      const promise = new Promise(function(resolve, reject) {
        transaction.onabort = () => {
          reject(transaction.error || new Error("aborted by user"));
        };
        transaction.oncomplete = () => {
          resolve(entries);
        };
      });
      if (!this[kOptions].reverse) {
        let keys;
        let values;
        const complete = () => {
          if (keys === void 0 || values === void 0) return;
          const length = Math.max(keys.length, values.length);
          if (length === 0 || size === Infinity) {
            this[kFinished] = true;
          } else {
            this[kPosition] = keys[length - 1];
          }
          entries.length = length;
          for (let i2 = 0; i2 < length; i2++) {
            const key = keys[i2];
            const value = values[i2];
            entries[i2] = [
              this[kOptions].keys ? deserialize2(key) : void 0,
              this[kOptions].values ? deserialize2(value) : void 0
            ];
          }
          maybeCommit(transaction);
        };
        if (this[kOptions].keys || size < Infinity) {
          store.getAllKeys(keyRange2, size < Infinity ? size : void 0).onsuccess = (ev) => {
            keys = ev.target.result;
            complete();
          };
        } else {
          keys = [];
          complete();
        }
        if (this[kOptions].values) {
          store.getAll(keyRange2, size < Infinity ? size : void 0).onsuccess = (ev) => {
            values = ev.target.result;
            complete();
          };
        } else {
          values = [];
          complete();
        }
      } else {
        const method = !this[kOptions].values && store.openKeyCursor ? "openKeyCursor" : "openCursor";
        store[method](keyRange2, "prev").onsuccess = (ev) => {
          const cursor = ev.target.result;
          if (cursor) {
            const { key, value } = cursor;
            this[kPosition] = key;
            entries.push([
              this[kOptions].keys && key !== void 0 ? deserialize2(key) : void 0,
              this[kOptions].values && value !== void 0 ? deserialize2(value) : void 0
            ]);
            if (entries.length < size) {
              cursor.continue();
            } else {
              maybeCommit(transaction);
            }
          } else {
            this[kFinished] = true;
          }
        };
      }
      return promise;
    }
    async _next() {
      if (this[kCache].length > 0) {
        return this[kCache].shift();
      }
      if (!this[kFinished]) {
        let size = Math.min(100, this.limit - this.count);
        if (this[kFirst]) {
          this[kFirst] = false;
          size = 1;
        }
        this[kCache] = await this._nextv(size, emptyOptions);
        return this[kCache].shift();
      }
    }
    async _all(options) {
      this[kFirst] = false;
      const cache = this[kCache].splice(0, this[kCache].length);
      const size = this.limit - this.count - cache.length;
      if (size <= 0) {
        return cache;
      }
      let entries = await this._nextv(size, emptyOptions);
      if (cache.length > 0) entries = cache.concat(entries);
      return entries;
    }
    _seek(target, options) {
      this[kFirst] = true;
      this[kCache] = [];
      this[kFinished] = false;
      this[kPosition] = void 0;
      this[kCurrentOptions] = { ...this[kOptions] };
      let keyRange2;
      try {
        keyRange2 = createKeyRange(this[kOptions]);
      } catch (_2) {
        this[kFinished] = true;
        return;
      }
      if (keyRange2 !== null && !keyRange2.includes(target)) {
        this[kFinished] = true;
      } else if (this[kOptions].reverse) {
        this[kCurrentOptions].lte = target;
      } else {
        this[kCurrentOptions].gte = target;
      }
    }
  }
  iterator.Iterator = Iterator;
  function maybeCommit(transaction) {
    if (typeof transaction.commit === "function") {
      transaction.commit();
    }
  }
  return iterator;
}
var clear;
var hasRequiredClear;
function requireClear() {
  if (hasRequiredClear) return clear;
  hasRequiredClear = 1;
  clear = async function clear2(db, location, keyRange2, options) {
    if (options.limit === 0) return;
    const transaction = db.db.transaction([location], "readwrite");
    const store = transaction.objectStore(location);
    let count = 0;
    const promise = new Promise(function(resolve, reject) {
      transaction.oncomplete = resolve;
      transaction.onabort = function() {
        reject(transaction.error || new Error("aborted by user"));
      };
    });
    const method = store.openKeyCursor ? "openKeyCursor" : "openCursor";
    const direction = options.reverse ? "prev" : "next";
    store[method](keyRange2, direction).onsuccess = function(ev) {
      const cursor = ev.target.result;
      if (cursor) {
        store.delete(cursor.key).onsuccess = function() {
          if (options.limit <= 0 || ++count < options.limit) {
            cursor.continue();
          }
        };
      }
    };
    return promise;
  };
  return clear;
}
var hasRequiredBrowserLevel;
function requireBrowserLevel() {
  if (hasRequiredBrowserLevel) return browserLevel;
  hasRequiredBrowserLevel = 1;
  const { AbstractLevel } = requireAbstractLevel();
  const { Iterator } = requireIterator();
  const deserialize2 = requireDeserialize();
  const clear2 = requireClear();
  const createKeyRange = requireKeyRange();
  const DEFAULT_PREFIX = "level-js-";
  const kIDB = /* @__PURE__ */ Symbol("idb");
  const kNamePrefix = /* @__PURE__ */ Symbol("namePrefix");
  const kLocation = /* @__PURE__ */ Symbol("location");
  const kVersion = /* @__PURE__ */ Symbol("version");
  const kStore = /* @__PURE__ */ Symbol("store");
  const kOnComplete = /* @__PURE__ */ Symbol("onComplete");
  class BrowserLevel extends AbstractLevel {
    constructor(location, options) {
      const { prefix, version, ...forward } = options || {};
      super({
        encodings: { view: true },
        snapshots: false,
        createIfMissing: false,
        errorIfExists: false,
        seek: true
      }, forward);
      if (typeof location !== "string" || location === "") {
        throw new TypeError("The first argument 'location' must be a non-empty string");
      }
      this[kLocation] = location;
      this[kNamePrefix] = prefix == null ? DEFAULT_PREFIX : prefix;
      this[kVersion] = parseInt(version || 1, 10);
      this[kIDB] = null;
    }
    get location() {
      return this[kLocation];
    }
    get namePrefix() {
      return this[kNamePrefix];
    }
    get version() {
      return this[kVersion];
    }
    // Exposed for backwards compat and unit tests
    get db() {
      return this[kIDB];
    }
    get type() {
      return "browser-level";
    }
    async _open(options) {
      const request = indexedDB.open(this[kNamePrefix] + this[kLocation], this[kVersion]);
      request.onupgradeneeded = (ev) => {
        const db = ev.target.result;
        if (!db.objectStoreNames.contains(this[kLocation])) {
          db.createObjectStore(this[kLocation]);
        }
      };
      return new Promise((resolve, reject) => {
        request.onerror = function() {
          reject(request.error || new Error("unknown error"));
        };
        request.onsuccess = () => {
          this[kIDB] = request.result;
          resolve();
        };
      });
    }
    [kStore](mode) {
      const transaction = this[kIDB].transaction([this[kLocation]], mode);
      return transaction.objectStore(this[kLocation]);
    }
    [kOnComplete](request) {
      const transaction = request.transaction;
      return new Promise(function(resolve, reject) {
        transaction.onabort = function() {
          reject(transaction.error || new Error("aborted by user"));
        };
        transaction.oncomplete = function() {
          resolve(request.result);
        };
      });
    }
    async _get(key, options) {
      const store = this[kStore]("readonly");
      const request = store.get(key);
      const value = await this[kOnComplete](request);
      return deserialize2(value);
    }
    async _getMany(keys, options) {
      const store = this[kStore]("readonly");
      const iterator2 = keys.values();
      const n2 = Math.min(16, keys.length);
      const bees = new Array(n2);
      const values = new Array(keys.length);
      let keyIndex = 0;
      let abort = false;
      const bee = async function() {
        try {
          for (const key of iterator2) {
            if (abort) break;
            const valueIndex = keyIndex++;
            const request = store.get(key);
            await new Promise(function(resolve, reject) {
              request.onsuccess = () => {
                values[valueIndex] = deserialize2(request.result);
                resolve();
              };
              request.onerror = (ev) => {
                ev.stopPropagation();
                reject(request.error);
              };
            });
          }
        } catch (err) {
          abort = true;
          throw err;
        }
      };
      for (let i2 = 0; i2 < n2; i2++) {
        bees[i2] = bee();
      }
      await Promise.allSettled(bees);
      return values;
    }
    async _del(key, options) {
      const store = this[kStore]("readwrite");
      const request = store.delete(key);
      return this[kOnComplete](request);
    }
    async _put(key, value, options) {
      const store = this[kStore]("readwrite");
      const request = store.put(value, key);
      return this[kOnComplete](request);
    }
    // TODO: implement key and value iterators
    _iterator(options) {
      return new Iterator(this, this[kLocation], options);
    }
    async _batch(operations, options) {
      const store = this[kStore]("readwrite");
      const transaction = store.transaction;
      let index = 0;
      let error;
      const promise = new Promise(function(resolve, reject) {
        transaction.onabort = function() {
          reject(error || transaction.error || new Error("aborted by user"));
        };
        transaction.oncomplete = resolve;
      });
      function loop() {
        const op = operations[index++];
        const key = op.key;
        let req;
        try {
          req = op.type === "del" ? store.delete(key) : store.put(op.value, key);
        } catch (err) {
          error = err;
          transaction.abort();
          return;
        }
        if (index < operations.length) {
          req.onsuccess = loop;
        } else if (typeof transaction.commit === "function") {
          transaction.commit();
        }
      }
      loop();
      return promise;
    }
    async _clear(options) {
      let keyRange2;
      try {
        keyRange2 = createKeyRange(options);
      } catch (e2) {
        return;
      }
      if (options.limit >= 0) {
        return clear2(this, this[kLocation], keyRange2, options);
      }
      const store = this[kStore]("readwrite");
      const request = keyRange2 ? store.delete(keyRange2) : store.clear();
      return this[kOnComplete](request);
    }
    async _close() {
      this[kIDB].close();
    }
  }
  BrowserLevel.destroy = async function(location, prefix) {
    if (prefix == null) {
      prefix = DEFAULT_PREFIX;
    }
    const request = indexedDB.deleteDatabase(prefix + location);
    return new Promise(function(resolve, reject) {
      request.onsuccess = resolve;
      request.onerror = reject;
    });
  };
  browserLevel.BrowserLevel = BrowserLevel;
  return browserLevel;
}
var browserLevelExports = requireBrowserLevel();
function contentHash(input) {
  let h2 = 2166136261;
  for (let i2 = 0; i2 < input.length; i2++) {
    h2 ^= input.charCodeAt(i2);
    h2 = Math.imul(h2, 16777619);
  }
  return (h2 >>> 0).toString(16).padStart(8, "0");
}
function getPrev(meta) {
  if (!meta.prev) return [];
  return meta.prev.filter(Boolean);
}
function hasPrefix(key, prefix) {
  if (!Array.isArray(key)) return false;
  if (key.length < prefix.length) return false;
  for (let i2 = 0; i2 < prefix.length; i2++) {
    if (key[i2] !== prefix[i2]) return false;
  }
  return true;
}
class BrowserForkDB {
  db;
  _id;
  _name;
  constructor(name = "forkdb") {
    this.db = new browserLevelExports.BrowserLevel(name, {
      keyEncoding: "json",
      valueEncoding: "json"
    });
    this._id = Math.random().toString(36).slice(2);
    this._name = name;
  }
  /** Open the underlying IndexedDB store. */
  async open() {
    await this.db.open();
  }
  /** Close the store. */
  async close() {
    await this.db.close();
  }
  // ---- write -------------------------------------------------------------
  /**
   * Append a new document.  Returns the content-addressed hash.
   */
  async put(meta, body = "") {
    const prev = getPrev(meta);
    const hashInput = JSON.stringify({ key: meta.key, prev, body });
    const hash = contentHash(hashInput);
    const ops = [];
    ops.push({ type: "put", key: ["key", meta.key], value: 0 });
    ops.push({ type: "put", key: ["hash", hash], value: 0 });
    ops.push({ type: "put", key: ["meta", hash], value: meta });
    ops.push({ type: "put", key: ["blob", hash], value: body });
    if (prev.length === 0) {
      ops.push({ type: "put", key: ["tail", meta.key, hash], value: 0 });
    }
    for (const phash of prev) {
      ops.push({ type: "del", key: ["head", meta.key, phash] });
      ops.push({
        type: "put",
        key: ["link", phash, hash],
        value: meta.key
      });
    }
    ops.push({ type: "put", key: ["head", meta.key, hash], value: 0 });
    await this.db.batch(ops);
    return hash;
  }
  // ---- read --------------------------------------------------------------
  /** Get the metadata for a hash. */
  async get(hash) {
    const meta = await this.db.get(["meta", hash]);
    if (meta === void 0) {
      throw Object.assign(
        new Error(`Not found: ${hash}`),
        { type: "NotFoundError" }
      );
    }
    return meta;
  }
  /** Get the body blob for a hash. */
  async getBody(hash) {
    return await this.db.get(["blob", hash]);
  }
  /** List every key in the store. */
  async keys() {
    const result = [];
    for await (const [key] of this.db.iterator()) {
      if (!hasPrefix(key, ["key"])) continue;
      const k2 = key[1];
      if (typeof k2 === "string") {
        result.push(k2);
      }
    }
    return result;
  }
  /** List all documents. */
  async list() {
    const result = [];
    for await (const [key, value] of this.db.iterator()) {
      if (!hasPrefix(key, ["meta"])) continue;
      const hash = key[1];
      if (typeof hash !== "string") continue;
      result.push({
        hash,
        meta: value
      });
    }
    return result;
  }
  /** Current heads (latest versions) for a key. */
  async heads(key) {
    const result = [];
    for await (const [k2] of this.db.iterator()) {
      if (!hasPrefix(k2, ["head", key])) continue;
      const hash = k2[2];
      if (typeof hash === "string") {
        result.push(hash);
      }
    }
    return result;
  }
  /** Forward links – what documents reference `hash` as a prev. */
  async links(hash) {
    const result = [];
    for await (const [k2, value] of this.db.iterator()) {
      if (!hasPrefix(k2, ["link", hash])) continue;
      const linkedHash = k2[2];
      if (typeof linkedHash !== "string") continue;
      result.push({
        hash: linkedHash,
        key: value
      });
    }
    return result;
  }
  /** Walk backward through history from a given hash. */
  async history(hash) {
    const result = [];
    const visited = /* @__PURE__ */ new Set();
    let current = hash;
    while (current && !visited.has(current)) {
      visited.add(current);
      const meta = await this.get(current);
      result.push({ hash: current, meta });
      const prev = getPrev(meta);
      current = prev[0];
    }
    return result;
  }
  /** Tails (root documents with no prev) for a key. */
  async tails(key) {
    const result = [];
    for await (const [k2] of this.db.iterator()) {
      if (!hasPrefix(k2, ["tail", key])) continue;
      const hash = k2[2];
      if (typeof hash === "string") {
        result.push(hash);
      }
    }
    return result;
  }
  /** Delete the IndexedDB database entirely (for demo reset). */
  async destroy() {
    await this.close();
    const req = indexedDB.deleteDatabase(this._name);
    await new Promise((resolve, reject) => {
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }
}
const forkdb = new BrowserForkDB("forkdb-example");
function NodeCard({ node, onSelect }) {
  const prev = node.meta.prev ?? [];
  return m$1`
        <article class="node-card">
            <header>
                <span class="node-key">${node.meta.key}</span>
                <code class="node-hash" title=${node.hash}>${node.hash}</code>
            </header>

            ${node.body ? m$1`<p class="node-body">${node.body}</p>` : null}

            ${prev.length > 0 && m$1`
                <div class="node-links">
                    <span class="link-label">prev</span>
                    ${prev.map((h2) => m$1`
                        <substrate-button
                            key=${h2}
                            class="hash-link"
                            onClick=${() => onSelect(h2)}
                        >
                            ${h2}
                        </substrate-button>
                    `)}
                </div>
            `}

            ${node.forwardLinks.length > 0 && m$1`
                <div class="node-links">
                    <span class="link-label">next</span>
                    ${node.forwardLinks.map((l2) => m$1`
                        <substrate-button
                            key=${l2.hash}
                            class="hash-link"
                            onClick=${() => onSelect(l2.hash)}
                        >
                            ${l2.hash}
                        </substrate-button>
                    `)}
                </div>
            `}
        </article>
    `;
}
function CreateForm({ onCreated }) {
  const [key, setKey] = d("my-doc");
  const [body, setBody] = d("");
  const [prevHash, setPrevHash] = d("");
  const submit = q(async (ev) => {
    ev.preventDefault();
    const meta = { key };
    if (prevHash.trim()) {
      meta.prev = prevHash.split(",").map((s2) => s2.trim()).filter(Boolean);
    }
    await forkdb.put(meta, body);
    setBody("");
    setPrevHash("");
    onCreated();
  }, [key, body, prevHash, onCreated]);
  return m$1`
        <form class="create-form" onSubmit=${submit}>
            <h2>Add a node</h2>

            <label>
                <span>Key</span>
                <input
                    type="text"
                    value=${key}
                    onInput=${(e2) => setKey(e2.target.value)}
                    required
                />
            </label>

            <label>
                <span>Body</span>
                <textarea
                    value=${body}
                    rows=${3}
                    onInput=${(e2) => setBody(e2.target.value)}
                />
            </label>

            <label>
                <span>Prev hash(es)</span>
                <input
                    type="text"
                    value=${prevHash}
                    placeholder="comma-separated hashes"
                    onInput=${(e2) => setPrevHash(e2.target.value)}
                />
            </label>

            <substrate-button class="create-submit" type="submit">
                Create
            </substrate-button>
        </form>
    `;
}
function HistoryPanel({ hash, onSelect }) {
  const [history, setHistory] = d([]);
  y(() => {
    let cancelled = false;
    forkdb.history(hash).then((h2) => {
      if (!cancelled) setHistory(h2);
    });
    return () => {
      cancelled = true;
    };
  }, [hash]);
  if (history.length === 0) return null;
  return m$1`
        <aside class="history-panel">
            <h3>History from ${hash}</h3>
            <ol>
                ${history.map((entry) => m$1`
                    <li key=${entry.hash}>
                        <substrate-button
                            class="hash-link"
                            onClick=${() => onSelect(entry.hash)}
                        >
                            ${entry.hash}
                        </substrate-button>
                        <span class="history-key">${entry.meta.key}</span>
                    </li>
                `)}
            </ol>
        </aside>
    `;
}
function buildDag(nodes) {
  const byHash = /* @__PURE__ */ new Map();
  nodes.forEach((node) => byHash.set(node.hash, node));
  const depthCache = /* @__PURE__ */ new Map();
  const getDepth = (hash, seen = /* @__PURE__ */ new Set()) => {
    if (depthCache.has(hash)) return depthCache.get(hash);
    if (seen.has(hash)) return 0;
    const node = byHash.get(hash);
    if (!node) return 0;
    seen.add(hash);
    const prev = node.meta.prev ?? [];
    if (prev.length === 0) {
      depthCache.set(hash, 0);
      seen.delete(hash);
      return 0;
    }
    let maxDepth2 = 0;
    for (const prevHash of prev) {
      maxDepth2 = Math.max(maxDepth2, getDepth(prevHash, seen) + 1);
    }
    depthCache.set(hash, maxDepth2);
    seen.delete(hash);
    return maxDepth2;
  };
  const sortedNodes = [...nodes].sort((a2, b) => {
    const depthDiff = getDepth(a2.hash) - getDepth(b.hash);
    if (depthDiff !== 0) return depthDiff;
    return a2.hash.localeCompare(b.hash);
  });
  const lanesByDepth = /* @__PURE__ */ new Map();
  const laneByHash = /* @__PURE__ */ new Map();
  const reserveLane = (depth, preferred) => {
    const used = lanesByDepth.get(depth) ?? /* @__PURE__ */ new Set();
    if (preferred !== void 0 && !used.has(preferred)) {
      used.add(preferred);
      lanesByDepth.set(depth, used);
      return preferred;
    }
    let lane = 0;
    while (used.has(lane)) lane++;
    used.add(lane);
    lanesByDepth.set(depth, used);
    return lane;
  };
  let maxLane = 0;
  let maxDepth = 0;
  for (const node of sortedNodes) {
    const depth = getDepth(node.hash);
    maxDepth = Math.max(maxDepth, depth);
    const prev = node.meta.prev ?? [];
    const preferred = prev.map((prevHash) => laneByHash.get(prevHash)).find((lane2) => lane2 !== void 0);
    const lane = reserveLane(depth, preferred);
    laneByHash.set(node.hash, lane);
    maxLane = Math.max(maxLane, lane);
  }
  const points = [];
  const xStep = 180;
  const yStep = 140;
  const xMargin = 90;
  const yMargin = 70;
  for (const node of sortedNodes) {
    const lane = laneByHash.get(node.hash) ?? 0;
    const depth = getDepth(node.hash);
    points.push({
      hash: node.hash,
      key: node.meta.key,
      x: xMargin + lane * xStep,
      y: yMargin + depth * yStep
    });
  }
  const edges = [];
  for (const node of nodes) {
    const prev = node.meta.prev ?? [];
    for (const prevHash of prev) {
      if (byHash.has(prevHash)) {
        edges.push({ from: prevHash, to: node.hash });
      }
    }
  }
  return {
    points,
    edges,
    width: maxLane * xStep + xMargin * 2,
    height: maxDepth * yStep + yMargin * 2
  };
}
function MerkleDag({ nodes, selectedHash, onSelect }) {
  const dag = buildDag(nodes);
  const scrollRef = A(null);
  y(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [dag.points.length]);
  const pointMap = /* @__PURE__ */ new Map();
  dag.points.forEach((point) => pointMap.set(point.hash, point));
  return m$1`
        <section class="dag-section">
            <h2>Merkle DAG</h2>

            ${dag.points.length === 0 ? m$1`<p class="empty-state">-</p>` : m$1`
                    <div class="dag-scroll" ref=${scrollRef}>
                        <svg
                            class="dag-canvas"
                            width=${dag.width}
                            height=${dag.height}
                            role="img"
                            aria-label="Merkle DAG visualization"
                        >
                            ${dag.edges.map((edge) => {
    const from = pointMap.get(edge.from);
    const to = pointMap.get(edge.to);
    if (!from || !to) return null;
    return m$1`
                                    <line
                                        key=${`${edge.from}->${edge.to}`}
                                        class="dag-edge"
                                        x1=${from.x}
                                        y1=${from.y}
                                        x2=${to.x}
                                        y2=${to.y}
                                    />
                                `;
  })}

                            ${dag.points.map((point) => m$1`
                                <g
                                    key=${point.hash}
                                    class="dag-node-group"
                                    onClick=${() => onSelect(point.hash)}
                                >
                                    <circle
                                        class=${selectedHash === point.hash ? "dag-node dag-node-selected" : "dag-node"}
                                        cx=${point.x}
                                        cy=${point.y}
                                        r=${36}
                                    />
                                    <text
                                        class="dag-node-label"
                                        x=${point.x}
                                        y=${point.y}
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                    >
                                        ${point.hash.slice(0, 4)}
                                    </text>
                                    <text
                                        class="dag-node-key"
                                        x=${point.x}
                                        y=${point.y + 56}
                                        text-anchor="middle"
                                    >
                                        ${point.key}
                                    </text>
                                </g>
                            `)}
                        </svg>
                    </div>
                `}

            ${selectedHash && m$1`
                <p class="dag-selected">
                    Selected node: <code>${selectedHash}</code>
                </p>
            `}
        </section>
    `;
}
function App() {
  const [nodes, setNodes] = d([]);
  const [selectedHash, setSelectedHash] = d(null);
  const [headMap, setHeadMap] = d({});
  const refresh = q(async () => {
    const allNodes = await forkdb.list();
    const detailed = await Promise.all(
      allNodes.map(async (n2) => {
        const [body, forwardLinks] = await Promise.all([
          forkdb.getBody(n2.hash).catch(() => ""),
          forkdb.links(n2.hash)
        ]);
        return { ...n2, body, forwardLinks };
      })
    );
    setNodes(detailed);
    const keys = await forkdb.keys();
    const hm = {};
    for (const k2 of keys) {
      hm[k2] = await forkdb.heads(k2);
    }
    setHeadMap(hm);
  }, []);
  y(() => {
    forkdb.open().then(refresh);
  }, [refresh]);
  const handleReset = q(async () => {
    await forkdb.destroy();
    window.location.reload();
  }, []);
  return m$1`
        <div class="app">
            <header class="app-header">
                <h1>ForkDB</h1>
                <p class="subtitle">
                    Content-addressed append-only store
                    backed by IndexedDB
                </p>
                <substrate-button class="reset-btn" onClick=${handleReset}>
                    Reset DB
                </substrate-button>
            </header>

            <div class="app-grid">
                <section class="left-column">
                    <${CreateForm} onCreated=${refresh} />

                    ${Object.keys(headMap).length > 0 && m$1`
                        <section class="heads-section">
                            <h2>Heads</h2>
                            ${Object.entries(headMap).map(([key, hashes]) => m$1`
                                <div class="heads-row" key=${key}>
                                    <span class="node-key">${key}</span>
                                    ${hashes.map((h2) => m$1`
                                        <substrate-button
                                            key=${h2}
                                            class="hash-link head-hash"
                                            onClick=${() => setSelectedHash(h2)}
                                        >
                                            ${h2}
                                        </substrate-button>
                                    `)}
                                </div>
                            `)}
                        </section>
                    `}

                    <section class="nodes-section">
                        <h2>All nodes</h2>
                        ${nodes.length === 0 && m$1`
                            <p class="empty-state">
                                No documents yet. Create one above.
                            </p>
                        `}
                        ${nodes.map((n2) => m$1`
                            <${NodeCard}
                                key=${n2.hash}
                                node=${n2}
                                onSelect=${setSelectedHash}
                            />
                        `)}
                    </section>

                    ${selectedHash && m$1`
                        <${HistoryPanel}
                            hash=${selectedHash}
                            onSelect=${setSelectedHash}
                        />
                    `}
                </section>

                <section class="right-column">
                    <${MerkleDag}
                        nodes=${nodes}
                        selectedHash=${selectedHash}
                        onSelect=${setSelectedHash}
                    />
                </section>
            </div>
        </div>
    `;
}
J(m$1`<${App} />`, document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtRHh1dDlKWFEuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bS9kaXN0L2h0bS5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtL3ByZWFjdC9pbmRleC5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbi9kaXN0L2h0bWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vd2ViLWNvbXBvbmVudC9kaXN0L2F0dHJpYnV0ZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vd2ViLWNvbXBvbmVudC9kaXN0L3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vd2ViLWNvbXBvbmVudC9kaXN0L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbi9kaXN0L2NsaWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS9idXR0b24vZGlzdC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sZXZlbC1zdXBwb3J0cy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9tb2R1bGUtZXJyb3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvbGliL3RleHQtZW5kZWMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtdHJhbnNjb2Rlci9saWIvZW5jb2RpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtdHJhbnNjb2Rlci9saWIvZm9ybWF0cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sZXZlbC10cmFuc2NvZGVyL2xpYi9lbmNvZGluZ3MuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtdHJhbnNjb2Rlci9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL21heWJlLWNvbWJpbmUtZXJyb3JzL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9jb21tb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2Vycm9ycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9hYnN0cmFjdC1pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZGVmYXVsdC1rdi1pdGVyYXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZGVmZXJyZWQtaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL3ByZWZpeGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9wcmV3cml0ZS1iYXRjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9kZWZhdWx0LWNoYWluZWQtYmF0Y2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2hvb2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9ldmVudC1tb25pdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9kZWZlcnJlZC1xdWV1ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvcmFuZ2Utb3B0aW9ucy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvYWJzdHJhY3Qtc3VibGV2ZWwtaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2Fic3RyYWN0LXN1YmxldmVsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2Fic3RyYWN0LWxldmVsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvdXRpbC9rZXktcmFuZ2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1sZXZlbC91dGlsL2Rlc2VyaWFsaXplLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1sZXZlbC91dGlsL2NsZWFyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvaW5kZXguanMiLCIuLi8uLi9leGFtcGxlL2Jyb3dzZXItZm9ya2RiLnRzIiwiLi4vLi4vZXhhbXBsZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsdCxpLHIsbyxlLGYsYyxzLGEsaCxwPXt9LHY9W10seT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pLGQ9QXJyYXkuaXNBcnJheTtmdW5jdGlvbiB3KG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGcobil7biYmbi5wYXJlbnROb2RlJiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gXyhsLHUsdCl7dmFyIGkscixvLGU9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP2k9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTplW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZS5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1lW29dJiYoZVtvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIG0obCxlLGkscixudWxsKX1mdW5jdGlvbiBtKG4sdCxpLHIsbyl7dmFyIGU9e3R5cGU6bixwcm9wczp0LGtleTppLHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvLF9faTotMSxfX3U6MH07cmV0dXJuIG51bGw9PW8mJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZSksZX1mdW5jdGlvbiBiKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gayhuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiB4KG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIFMobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP1Mobi5fXyxuLl9faSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP1Mobik6bnVsbH1mdW5jdGlvbiBDKG4pe2lmKG4uX19QJiZuLl9fZCl7dmFyIHU9bi5fX3YsdD11Ll9fZSxpPVtdLHI9W10sbz13KHt9LHUpO28uX192PXUuX192KzEsbC52bm9kZSYmbC52bm9kZShvKSx6KG4uX19QLG8sdSxuLl9fbixuLl9fUC5uYW1lc3BhY2VVUkksMzImdS5fX3U/W3RdOm51bGwsaSxudWxsPT10P1ModSk6dCwhISgzMiZ1Ll9fdSksciksby5fX3Y9dS5fX3Ysby5fXy5fX2tbby5fX2ldPW8sVihpLG8sciksdS5fX2U9dS5fXz1udWxsLG8uX19lIT10JiZNKG8pfX1mdW5jdGlvbiBNKG4pe2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYylyZXR1cm4gbi5fX2U9bi5fX2MuYmFzZT1udWxsLG4uX19rLnNvbWUoZnVuY3Rpb24obCl7aWYobnVsbCE9bCYmbnVsbCE9bC5fX2UpcmV0dXJuIG4uX19lPW4uX19jLmJhc2U9bC5fX2V9KSxNKG4pfWZ1bmN0aW9uICQobil7KCFuLl9fZCYmKG4uX19kPSEwKSYmaS5wdXNoKG4pJiYhSS5fX3IrK3x8ciE9bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoSSl9ZnVuY3Rpb24gSSgpe2Zvcih2YXIgbixsPTE7aS5sZW5ndGg7KWkubGVuZ3RoPmwmJmkuc29ydChlKSxuPWkuc2hpZnQoKSxsPWkubGVuZ3RoLEMobik7SS5fX3I9MH1mdW5jdGlvbiBQKG4sbCx1LHQsaSxyLG8sZSxmLGMscyl7dmFyIGEsaCx5LGQsdyxnLF8sbT10JiZ0Ll9fa3x8dixiPWwubGVuZ3RoO2ZvcihmPUEodSxsLG0sZixiKSxhPTA7YTxiO2ErKyludWxsIT0oeT11Ll9fa1thXSkmJihoPS0xIT15Ll9faSYmbVt5Ll9faV18fHAseS5fX2k9YSxnPXoobix5LGgsaSxyLG8sZSxmLGMscyksZD15Ll9fZSx5LnJlZiYmaC5yZWYhPXkucmVmJiYoaC5yZWYmJkQoaC5yZWYsbnVsbCx5KSxzLnB1c2goeS5yZWYseS5fX2N8fGQseSkpLG51bGw9PXcmJm51bGwhPWQmJih3PWQpLChfPSEhKDQmeS5fX3UpKXx8aC5fX2s9PT15Ll9faz9mPUgoeSxmLG4sXyk6XCJmdW5jdGlvblwiPT10eXBlb2YgeS50eXBlJiZ2b2lkIDAhPT1nP2Y9ZzpkJiYoZj1kLm5leHRTaWJsaW5nKSx5Ll9fdSY9LTcpO3JldHVybiB1Ll9fZT13LGZ9ZnVuY3Rpb24gQShuLGwsdSx0LGkpe3ZhciByLG8sZSxmLGMscz11Lmxlbmd0aCxhPXMsaD0wO2ZvcihuLl9faz1uZXcgQXJyYXkoaSkscj0wO3I8aTtyKyspbnVsbCE9KG89bFtyXSkmJlwiYm9vbGVhblwiIT10eXBlb2YgbyYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbz8oXCJzdHJpbmdcIj09dHlwZW9mIG98fFwibnVtYmVyXCI9PXR5cGVvZiBvfHxcImJpZ2ludFwiPT10eXBlb2Ygb3x8by5jb25zdHJ1Y3Rvcj09U3RyaW5nP289bi5fX2tbcl09bShudWxsLG8sbnVsbCxudWxsLG51bGwpOmQobyk/bz1uLl9fa1tyXT1tKGsse2NoaWxkcmVuOm99LG51bGwsbnVsbCxudWxsKTp2b2lkIDA9PT1vLmNvbnN0cnVjdG9yJiZvLl9fYj4wP289bi5fX2tbcl09bShvLnR5cGUsby5wcm9wcyxvLmtleSxvLnJlZj9vLnJlZjpudWxsLG8uX192KTpuLl9fa1tyXT1vLGY9citoLG8uX189bixvLl9fYj1uLl9fYisxLGU9bnVsbCwtMSE9KGM9by5fX2k9VChvLHUsZixhKSkmJihhLS0sKGU9dVtjXSkmJihlLl9fdXw9MikpLG51bGw9PWV8fG51bGw9PWUuX192PygtMT09YyYmKGk+cz9oLS06aTxzJiZoKyspLFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8udHlwZSYmKG8uX191fD00KSk6YyE9ZiYmKGM9PWYtMT9oLS06Yz09ZisxP2grKzooYz5mP2gtLTpoKyssby5fX3V8PTQpKSk6bi5fX2tbcl09bnVsbDtpZihhKWZvcihyPTA7cjxzO3IrKyludWxsIT0oZT11W3JdKSYmMD09KDImZS5fX3UpJiYoZS5fX2U9PXQmJih0PVMoZSkpLEUoZSxlKSk7cmV0dXJuIHR9ZnVuY3Rpb24gSChuLGwsdSx0KXt2YXIgaSxyO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZSl7Zm9yKGk9bi5fX2sscj0wO2kmJnI8aS5sZW5ndGg7cisrKWlbcl0mJihpW3JdLl9fPW4sbD1IKGlbcl0sbCx1LHQpKTtyZXR1cm4gbH1uLl9fZSE9bCYmKHQmJihsJiZuLnR5cGUmJiFsLnBhcmVudE5vZGUmJihsPVMobikpLHUuaW5zZXJ0QmVmb3JlKG4uX19lLGx8fG51bGwpKSxsPW4uX19lKTtkb3tsPWwmJmwubmV4dFNpYmxpbmd9d2hpbGUobnVsbCE9bCYmOD09bC5ub2RlVHlwZSk7cmV0dXJuIGx9ZnVuY3Rpb24gTChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KGQobik/bi5zb21lKGZ1bmN0aW9uKG4pe0wobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBUKG4sbCx1LHQpe3ZhciBpLHIsbyxlPW4ua2V5LGY9bi50eXBlLGM9bFt1XSxzPW51bGwhPWMmJjA9PSgyJmMuX191KTtpZihudWxsPT09YyYmbnVsbD09ZXx8cyYmZT09Yy5rZXkmJmY9PWMudHlwZSlyZXR1cm4gdTtpZih0PihzPzE6MCkpZm9yKGk9dS0xLHI9dSsxO2k+PTB8fHI8bC5sZW5ndGg7KWlmKG51bGwhPShjPWxbbz1pPj0wP2ktLTpyKytdKSYmMD09KDImYy5fX3UpJiZlPT1jLmtleSYmZj09Yy50eXBlKXJldHVybiBvO3JldHVybi0xfWZ1bmN0aW9uIGoobixsLHUpe1wiLVwiPT1sWzBdP24uc2V0UHJvcGVydHkobCxudWxsPT11P1wiXCI6dSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHkudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEYobixsLHUsdCxpKXt2YXIgcixvO246aWYoXCJzdHlsZVwiPT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuLnN0eWxlLmNzc1RleHQ9dD1cIlwiKSx0KWZvcihsIGluIHQpdSYmbCBpbiB1fHxqKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpdCYmdVtsXT09dFtsXXx8aihuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09bFswXSYmXCJuXCI9PWxbMV0pcj1sIT0obD1sLnJlcGxhY2UoZixcIiQxXCIpKSxvPWwudG9Mb3dlckNhc2UoKSxsPW8gaW4gbnx8XCJvbkZvY3VzT3V0XCI9PWx8fFwib25Gb2N1c0luXCI9PWw/by5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P3Q/dS51PXQudToodS51PWMsbi5hZGRFdmVudExpc3RlbmVyKGwscj9hOnMscikpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/YTpzLHIpO2Vsc2V7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT1pKWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJ3aWR0aFwiIT1sJiZcImhlaWdodFwiIT1sJiZcImhyZWZcIiE9bCYmXCJsaXN0XCIhPWwmJlwiZm9ybVwiIT1sJiZcInRhYkluZGV4XCIhPWwmJlwiZG93bmxvYWRcIiE9bCYmXCJyb3dTcGFuXCIhPWwmJlwiY29sU3BhblwiIT1sJiZcInJvbGVcIiE9bCYmXCJwb3BvdmVyXCIhPWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbD09dXx8ITE9PT11JiZcIi1cIiE9bFs0XT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLFwicG9wb3ZlclwiPT1sJiYxPT11P1wiXCI6dSkpfX1mdW5jdGlvbiBPKG4pe3JldHVybiBmdW5jdGlvbih1KXtpZih0aGlzLmwpe3ZhciB0PXRoaXMubFt1LnR5cGUrbl07aWYobnVsbD09dS50KXUudD1jKys7ZWxzZSBpZih1LnQ8dC51KXJldHVybjtyZXR1cm4gdChsLmV2ZW50P2wuZXZlbnQodSk6dSl9fX1mdW5jdGlvbiB6KG4sdSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgscCx5LF8sbSxiLFMsQyxNLCQsSSxBLEgsTCxUPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOzEyOCZ0Ll9fdSYmKGM9ISEoMzImdC5fX3UpLG89W2Y9dS5fX2U9dC5fX2VdKSwoYT1sLl9fYikmJmEodSk7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBUKXRyeXtpZihTPXUucHJvcHMsQz1cInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyLE09KGE9VC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLCQ9YT9NP00ucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP2I9KGg9dS5fX2M9dC5fX2MpLl9fPWguX19FOihDP3UuX19jPWg9bmV3IFQoUywkKToodS5fX2M9aD1uZXcgeChTLCQpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1HKSxNJiZNLnN1YihoKSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5fX249aSxwPWguX19kPSEwLGguX19oPVtdLGguX3NiPVtdKSxDJiZudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLEMmJm51bGwhPVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz13KHt9LGguX19zKSksdyhoLl9fcyxULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhTLGguX19zKSkpLHk9aC5wcm9wcyxfPWguc3RhdGUsaC5fX3Y9dSxwKUMmJm51bGw9PVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxDJiZudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYoQyYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJlMhPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhTLCQpLHUuX192PT10Ll9fdnx8IWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShTLGguX19zLCQpKXt1Ll9fdiE9dC5fX3YmJihoLnByb3BzPVMsaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSksdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssdS5fX2suc29tZShmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLHYucHVzaC5hcHBseShoLl9faCxoLl9zYiksaC5fc2I9W10saC5fX2gubGVuZ3RoJiZlLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShTLGguX19zLCQpLEMmJm51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxfLG0pfSl9aWYoaC5jb250ZXh0PSQsaC5wcm9wcz1TLGguX19QPW4saC5fX2U9ITEsST1sLl9fcixBPTAsQyloLnN0YXRlPWguX19zLGguX19kPSExLEkmJkkodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSx2LnB1c2guYXBwbHkoaC5fX2gsaC5fc2IpLGguX3NiPVtdO2Vsc2UgZG97aC5fX2Q9ITEsSSYmSSh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrQTwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9dyh3KHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSxDJiYhcCYmbnVsbCE9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKG09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LF8pKSxIPW51bGwhPWEmJmEudHlwZT09PWsmJm51bGw9PWEua2V5P3EoYS5wcm9wcy5jaGlsZHJlbik6YSxmPVAobixkKEgpP0g6W0hdLHUsdCxpLHIsbyxlLGYsYyxzKSxoLmJhc2U9dS5fX2UsdS5fX3UmPS0xNjEsaC5fX2gubGVuZ3RoJiZlLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCl9Y2F0Y2gobil7aWYodS5fX3Y9bnVsbCxjfHxudWxsIT1vKWlmKG4udGhlbil7Zm9yKHUuX191fD1jPzE2MDoxMjg7ZiYmOD09Zi5ub2RlVHlwZSYmZi5uZXh0U2libGluZzspZj1mLm5leHRTaWJsaW5nO29bby5pbmRleE9mKGYpXT1udWxsLHUuX19lPWZ9ZWxzZXtmb3IoTD1vLmxlbmd0aDtMLS07KWcob1tMXSk7Tih1KX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rLG4udGhlbnx8Tih1KTtsLl9fZShuLHUsdCl9ZWxzZSBudWxsPT1vJiZ1Ll9fdj09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTpmPXUuX19lPUIodC5fX2UsdSx0LGkscixvLGUsYyxzKTtyZXR1cm4oYT1sLmRpZmZlZCkmJmEodSksMTI4JnUuX191P3ZvaWQgMDpmfWZ1bmN0aW9uIE4obil7biYmKG4uX19jJiYobi5fX2MuX19lPSEwKSxuLl9fayYmbi5fX2suc29tZShOKSl9ZnVuY3Rpb24gVihuLHUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspRCh0W2ldLHRbKytpXSx0WysraV0pO2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gcShuKXtyZXR1cm5cIm9iamVjdFwiIT10eXBlb2Ygbnx8bnVsbD09bnx8bi5fX2I+MD9uOmQobik/bi5tYXAocSk6dyh7fSxuKX1mdW5jdGlvbiBCKHUsdCxpLHIsbyxlLGYsYyxzKXt2YXIgYSxoLHYseSx3LF8sbSxiPWkucHJvcHN8fHAsaz10LnByb3BzLHg9dC50eXBlO2lmKFwic3ZnXCI9PXg/bz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI6XCJtYXRoXCI9PXg/bz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjpvfHwobz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiksbnVsbCE9ZSlmb3IoYT0wO2E8ZS5sZW5ndGg7YSsrKWlmKCh3PWVbYV0pJiZcInNldEF0dHJpYnV0ZVwiaW4gdz09ISF4JiYoeD93LmxvY2FsTmFtZT09eDozPT13Lm5vZGVUeXBlKSl7dT13LGVbYV09bnVsbDticmVha31pZihudWxsPT11KXtpZihudWxsPT14KXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrKTt1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhvLHgsay5pcyYmayksYyYmKGwuX19tJiZsLl9fbSh0LGUpLGM9ITEpLGU9bnVsbH1pZihudWxsPT14KWI9PT1rfHxjJiZ1LmRhdGE9PWt8fCh1LmRhdGE9ayk7ZWxzZXtpZihlPWUmJm4uY2FsbCh1LmNoaWxkTm9kZXMpLCFjJiZudWxsIT1lKWZvcihiPXt9LGE9MDthPHUuYXR0cmlidXRlcy5sZW5ndGg7YSsrKWJbKHc9dS5hdHRyaWJ1dGVzW2FdKS5uYW1lXT13LnZhbHVlO2ZvcihhIGluIGIpdz1iW2FdLFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT92PXc6XCJjaGlsZHJlblwiPT1hfHxhIGluIGt8fFwidmFsdWVcIj09YSYmXCJkZWZhdWx0VmFsdWVcImluIGt8fFwiY2hlY2tlZFwiPT1hJiZcImRlZmF1bHRDaGVja2VkXCJpbiBrfHxGKHUsYSxudWxsLHcsbyk7Zm9yKGEgaW4gayl3PWtbYV0sXCJjaGlsZHJlblwiPT1hP3k9dzpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PWE/aD13OlwidmFsdWVcIj09YT9fPXc6XCJjaGVja2VkXCI9PWE/bT13OmMmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHd8fGJbYV09PT13fHxGKHUsYSx3LGJbYV0sbyk7aWYoaCljfHx2JiYoaC5fX2h0bWw9PXYuX19odG1sfHxoLl9faHRtbD09dS5pbm5lckhUTUwpfHwodS5pbm5lckhUTUw9aC5fX2h0bWwpLHQuX19rPVtdO2Vsc2UgaWYodiYmKHUuaW5uZXJIVE1MPVwiXCIpLFAoXCJ0ZW1wbGF0ZVwiPT10LnR5cGU/dS5jb250ZW50OnUsZCh5KT95Olt5XSx0LGkscixcImZvcmVpZ25PYmplY3RcIj09eD9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjpvLGUsZixlP2VbMF06aS5fX2smJlMoaSwwKSxjLHMpLG51bGwhPWUpZm9yKGE9ZS5sZW5ndGg7YS0tOylnKGVbYV0pO2N8fChhPVwidmFsdWVcIixcInByb2dyZXNzXCI9PXgmJm51bGw9PV8/dS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTpudWxsIT1fJiYoXyE9PXVbYV18fFwicHJvZ3Jlc3NcIj09eCYmIV98fFwib3B0aW9uXCI9PXgmJl8hPWJbYV0pJiZGKHUsYSxfLGJbYV0sbyksYT1cImNoZWNrZWRcIixudWxsIT1tJiZtIT11W2FdJiZGKHUsYSxtLGJbYV0sbykpfXJldHVybiB1fWZ1bmN0aW9uIEQobix1LHQpe3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fdTtpJiZuLl9fdSgpLGkmJm51bGw9PXV8fChuLl9fdT1uKHUpKX1lbHNlIG4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4sdCl9fWZ1bmN0aW9uIEUobix1LHQpe3ZhciBpLHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKGk9bi5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPW4uX19lfHxEKGksbnVsbCx1KSksbnVsbCE9KGk9bi5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPW4uX19rKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspaVtyXSYmRShpW3JdLHUsdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTt0fHxnKG4uX19lKSxuLl9fYz1uLl9fPW4uX19lPXZvaWQgMH1mdW5jdGlvbiBHKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEoodSx0LGkpe3ZhciByLG8sZSxmO3Q9PWRvY3VtZW50JiYodD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLGwuX18mJmwuX18odSx0KSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkpP251bGw6aSYmaS5fX2t8fHQuX19rLGU9W10sZj1bXSx6KHQsdT0oIXImJml8fHQpLl9faz1fKGssbnVsbCxbdV0pLG98fHAscCx0Lm5hbWVzcGFjZVVSSSwhciYmaT9baV06bz9udWxsOnQuZmlyc3RDaGlsZD9uLmNhbGwodC5jaGlsZE5vZGVzKTpudWxsLGUsIXImJmk/aTpvP28uX19lOnQuZmlyc3RDaGlsZCxyLGYpLFYoZSx1LGYpfWZ1bmN0aW9uIEsobixsKXtKKG4sbCxLKX1mdW5jdGlvbiBRKGwsdSx0KXt2YXIgaSxyLG8sZSxmPXcoe30sbC5wcm9wcyk7Zm9yKG8gaW4gbC50eXBlJiZsLnR5cGUuZGVmYXVsdFByb3BzJiYoZT1sLnR5cGUuZGVmYXVsdFByb3BzKSx1KVwia2V5XCI9PW8/aT11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dm9pZCAwPT09dVtvXSYmbnVsbCE9ZT9lW29dOnVbb107cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCksbShsLnR5cGUsZixpfHxsLmtleSxyfHxsLnJlZixudWxsKX1mdW5jdGlvbiBSKG4pe2Z1bmN0aW9uIGwobil7dmFyIHUsdDtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PW5ldyBTZXQsKHQ9e30pW2wuX19jXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHR9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1PW51bGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPW4udmFsdWUmJnUuZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fZT0hMCwkKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UuYWRkKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UmJnUuZGVsZXRlKG4pLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufXJldHVybiBsLl9fYz1cIl9fY0NcIitoKyssbC5fXz1uLGwuUHJvdmlkZXI9bC5fX2w9KGwuQ29uc3VtZXI9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0pLmNvbnRleHRUeXBlPWwsbH1uPXYuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCx1LHQpe2Zvcih2YXIgaSxyLG87bD1sLl9fOylpZigoaT1sLl9fYykmJiFpLl9fKXRyeXtpZigocj1pLmNvbnN0cnVjdG9yKSYmbnVsbCE9ci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJihpLnNldFN0YXRlKHIuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSxvPWkuX19kKSxudWxsIT1pLmNvbXBvbmVudERpZENhdGNoJiYoaS5jb21wb25lbnREaWRDYXRjaChuLHR8fHt9KSxvPWkuX19kKSxvKXJldHVybiBpLl9fRT1pfWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLHQ9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHgucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9dyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHcoe30sdSksdGhpcy5wcm9wcykpLG4mJncodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksJCh0aGlzKSl9LHgucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSwkKHRoaXMpKX0seC5wcm90b3R5cGUucmVuZGVyPWssaT1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGU9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0sSS5fX3I9MCxmPS8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLGM9MCxzPU8oITEpLGE9TyghMCksaD0wO2V4cG9ydHt4IGFzIENvbXBvbmVudCxrIGFzIEZyYWdtZW50LFEgYXMgY2xvbmVFbGVtZW50LFIgYXMgY3JlYXRlQ29udGV4dCxfIGFzIGNyZWF0ZUVsZW1lbnQsYiBhcyBjcmVhdGVSZWYsXyBhcyBoLEsgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxKIGFzIHJlbmRlcixMIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwidmFyIG49ZnVuY3Rpb24odCxzLHIsZSl7dmFyIHU7c1swXT0wO2Zvcih2YXIgaD0xO2g8cy5sZW5ndGg7aCsrKXt2YXIgcD1zW2grK10sYT1zW2hdPyhzWzBdfD1wPzE6MixyW3NbaCsrXV0pOnNbKytoXTszPT09cD9lWzBdPWE6ND09PXA/ZVsxXT1PYmplY3QuYXNzaWduKGVbMV18fHt9LGEpOjU9PT1wPyhlWzFdPWVbMV18fHt9KVtzWysraF1dPWE6Nj09PXA/ZVsxXVtzWysraF1dKz1hK1wiXCI6cD8odT10LmFwcGx5KGEsbih0LGEscixbXCJcIixudWxsXSkpLGUucHVzaCh1KSxhWzBdP3NbMF18PTI6KHNbaC0yXT0wLHNbaF09dSkpOmUucHVzaChhKX1yZXR1cm4gZX0sdD1uZXcgTWFwO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpe3ZhciByPXQuZ2V0KHRoaXMpO3JldHVybiByfHwocj1uZXcgTWFwLHQuc2V0KHRoaXMscikpLChyPW4odGhpcyxyLmdldChzKXx8KHIuc2V0KHMscj1mdW5jdGlvbihuKXtmb3IodmFyIHQscyxyPTEsZT1cIlwiLHU9XCJcIixoPVswXSxwPWZ1bmN0aW9uKG4pezE9PT1yJiYobnx8KGU9ZS5yZXBsYWNlKC9eXFxzKlxcblxccyp8XFxzKlxcblxccyokL2csXCJcIikpKT9oLnB1c2goMCxuLGUpOjM9PT1yJiYobnx8ZSk/KGgucHVzaCgzLG4sZSkscj0yKToyPT09ciYmXCIuLi5cIj09PWUmJm4/aC5wdXNoKDQsbiwwKToyPT09ciYmZSYmIW4/aC5wdXNoKDUsMCwhMCxlKTpyPj01JiYoKGV8fCFuJiY1PT09cikmJihoLnB1c2gociwwLGUscykscj02KSxuJiYoaC5wdXNoKHIsbiwwLHMpLHI9NikpLGU9XCJcIn0sYT0wO2E8bi5sZW5ndGg7YSsrKXthJiYoMT09PXImJnAoKSxwKGEpKTtmb3IodmFyIGw9MDtsPG5bYV0ubGVuZ3RoO2wrKyl0PW5bYV1bbF0sMT09PXI/XCI8XCI9PT10PyhwKCksaD1baF0scj0zKTplKz10OjQ9PT1yP1wiLS1cIj09PWUmJlwiPlwiPT09dD8ocj0xLGU9XCJcIik6ZT10K2VbMF06dT90PT09dT91PVwiXCI6ZSs9dDonXCInPT09dHx8XCInXCI9PT10P3U9dDpcIj5cIj09PXQ/KHAoKSxyPTEpOnImJihcIj1cIj09PXQ/KHI9NSxzPWUsZT1cIlwiKTpcIi9cIj09PXQmJihyPDV8fFwiPlwiPT09blthXVtsKzFdKT8ocCgpLDM9PT1yJiYoaD1oWzBdKSxyPWgsKGg9aFswXSkucHVzaCgyLDAscikscj0wKTpcIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcblwiPT09dHx8XCJcXHJcIj09PXQ/KHAoKSxyPTIpOmUrPXQpLDM9PT1yJiZcIiEtLVwiPT09ZSYmKHI9NCxoPWhbMF0pfXJldHVybiBwKCksaH0ocykpLHIpLGFyZ3VtZW50cyxbXSkpLmxlbmd0aD4xP3I6clswXX1cbiIsImltcG9ydHtoIGFzIHIsQ29tcG9uZW50IGFzIG8scmVuZGVyIGFzIHR9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2gscmVuZGVyLENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtpbXBvcnQgZSBmcm9tXCJodG1cIjt2YXIgbT1lLmJpbmQocik7ZXhwb3J0e20gYXMgaHRtbH07XG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9bixlPWMuX19iLGE9Yy5fX3Isdj1jLmRpZmZlZCxsPWMuX19jLG09Yy51bm1vdW50LHM9Yy5fXztmdW5jdGlvbiBwKG4sdCl7Yy5fX2gmJmMuX19oKHIsbixvfHx0KSxvPTA7dmFyIHU9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIG4+PXUuX18ubGVuZ3RoJiZ1Ll9fLnB1c2goe30pLHUuX19bbl19ZnVuY3Rpb24gZChuKXtyZXR1cm4gbz0xLGgoRCxuKX1mdW5jdGlvbiBoKG4sdSxpKXt2YXIgbz1wKHQrKywyKTtpZihvLnQ9biwhby5fX2MmJihvLl9fPVtpP2kodSk6RCh2b2lkIDAsdSksZnVuY3Rpb24obil7dmFyIHQ9by5fX04/by5fX05bMF06by5fX1swXSxyPW8udCh0LG4pO3QhPT1yJiYoby5fX049W3Isby5fX1sxXV0sby5fX2Muc2V0U3RhdGUoe30pKX1dLG8uX19jPXIsIXIuX19mKSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4gbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFjfHxjLmNhbGwodGhpcyxuLHQscik7dmFyIGk9by5fX2MucHJvcHMhPT1uO3JldHVybiB1LnNvbWUoZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSxjJiZjLmNhbGwodGhpcyxuLHQscil8fGl9O3IuX19mPSEwO3ZhciBjPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlLGU9ci5jb21wb25lbnRXaWxsVXBkYXRlO3IuY29tcG9uZW50V2lsbFVwZGF0ZT1mdW5jdGlvbihuLHQscil7aWYodGhpcy5fX2Upe3ZhciB1PWM7Yz12b2lkIDAsZihuLHQsciksYz11fWUmJmUuY2FsbCh0aGlzLG4sdCxyKX0sci5zaG91bGRDb21wb25lbnRVcGRhdGU9Zn1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24geShuLHUpe3ZhciBpPXAodCsrLDMpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLnU9dSxyLl9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gXyhuLHUpe3ZhciBpPXAodCsrLDQpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLnU9dSxyLl9faC5wdXNoKGkpKX1mdW5jdGlvbiBBKG4pe3JldHVybiBvPTUsVChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gRihuLHQscil7bz02LF8oZnVuY3Rpb24oKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgcj1uKHQoKSk7cmV0dXJuIGZ1bmN0aW9uKCl7bihudWxsKSxyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZyKCl9fWlmKG4pcmV0dXJuIG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9fSxudWxsPT1yP3I6ci5jb25jYXQobikpfWZ1bmN0aW9uIFQobixyKXt2YXIgdT1wKHQrKyw3KTtyZXR1cm4gQyh1Ll9fSCxyKSYmKHUuX189bigpLHUuX19IPXIsdS5fX2g9biksdS5fX31mdW5jdGlvbiBxKG4sdCl7cmV0dXJuIG89OCxUKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIHgobil7dmFyIHU9ci5jb250ZXh0W24uX19jXSxpPXAodCsrLDkpO3JldHVybiBpLmM9bix1PyhudWxsPT1pLl9fJiYoaS5fXz0hMCx1LnN1YihyKSksdS5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBQKG4sdCl7Yy51c2VEZWJ1Z1ZhbHVlJiZjLnVzZURlYnVnVmFsdWUodD90KG4pOm4pfWZ1bmN0aW9uIGIobil7dmFyIHU9cCh0KyssMTApLGk9ZCgpO3JldHVybiB1Ll9fPW4sci5jb21wb25lbnREaWRDYXRjaHx8KHIuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obix0KXt1Ll9fJiZ1Ll9fKG4sdCksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gZygpe3ZhciBuPXAodCsrLDExKTtpZighbi5fXyl7Zm9yKHZhciB1PXIuX192O251bGwhPT11JiYhdS5fX20mJm51bGwhPT11Ll9fOyl1PXUuX187dmFyIGk9dS5fX218fCh1Ll9fbT1bMCwwXSk7bi5fXz1cIlBcIitpWzBdK1wiLVwiK2lbMV0rK31yZXR1cm4gbi5fX31mdW5jdGlvbiBqKCl7Zm9yKHZhciBuO249Zi5zaGlmdCgpOyl7dmFyIHQ9bi5fX0g7aWYobi5fX1AmJnQpdHJ5e3QuX19oLnNvbWUoeiksdC5fX2guc29tZShCKSx0Ll9faD1bXX1jYXRjaChyKXt0Ll9faD1bXSxjLl9fZShyLG4uX192KX19fWMuX19iPWZ1bmN0aW9uKG4pe3I9bnVsbCxlJiZlKG4pfSxjLl9fPWZ1bmN0aW9uKG4sdCl7biYmdC5fX2smJnQuX19rLl9fbSYmKG4uX19tPXQuX19rLl9fbSkscyYmcyhuLHQpfSxjLl9fcj1mdW5jdGlvbihuKXthJiZhKG4pLHQ9MDt2YXIgaT0ocj1uLl9fYykuX19IO2kmJih1PT09cj8oaS5fX2g9W10sci5fX2g9W10saS5fXy5zb21lKGZ1bmN0aW9uKG4pe24uX19OJiYobi5fXz1uLl9fTiksbi51PW4uX19OPXZvaWQgMH0pKTooaS5fX2guc29tZSh6KSxpLl9faC5zb21lKEIpLGkuX19oPVtdLHQ9MCkpLHU9cn0sYy5kaWZmZWQ9ZnVuY3Rpb24obil7diYmdihuKTt2YXIgdD1uLl9fYzt0JiZ0Ll9fSCYmKHQuX19ILl9faC5sZW5ndGgmJigxIT09Zi5wdXNoKHQpJiZpPT09Yy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgoaT1jLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fHcpKGopKSx0Ll9fSC5fXy5zb21lKGZ1bmN0aW9uKG4pe24udSYmKG4uX19IPW4udSksbi51PXZvaWQgMH0pKSx1PXI9bnVsbH0sYy5fX2M9ZnVuY3Rpb24obix0KXt0LnNvbWUoZnVuY3Rpb24obil7dHJ5e24uX19oLnNvbWUoeiksbi5fX2g9bi5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHxCKG4pfSl9Y2F0Y2gocil7dC5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSksdD1bXSxjLl9fZShyLG4uX192KX19KSxsJiZsKG4sdCl9LGMudW5tb3VudD1mdW5jdGlvbihuKXttJiZtKG4pO3ZhciB0LHI9bi5fX2M7ciYmci5fX0gmJihyLl9fSC5fXy5zb21lKGZ1bmN0aW9uKG4pe3RyeXt6KG4pfWNhdGNoKG4pe3Q9bn19KSxyLl9fSD12b2lkIDAsdCYmYy5fX2UodCxyLl9fdikpfTt2YXIgaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gdyhuKXt2YXIgdCxyPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpLGsmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHU9c2V0VGltZW91dChyLDM1KTtrJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIHoobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gQihuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24gQyhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBEKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e3EgYXMgdXNlQ2FsbGJhY2sseCBhcyB1c2VDb250ZXh0LFAgYXMgdXNlRGVidWdWYWx1ZSx5IGFzIHVzZUVmZmVjdCxiIGFzIHVzZUVycm9yQm91bmRhcnksZyBhcyB1c2VJZCxGIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsXyBhcyB1c2VMYXlvdXRFZmZlY3QsVCBhcyB1c2VNZW1vLGggYXMgdXNlUmVkdWNlcixBIGFzIHVzZVJlZixkIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5mdW5jdGlvbiBodG1sKGF0dHJzLCB0ZXh0Q29udGVudCkge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBhdXRvZm9jdXMsXG4gICAgdGFiaW5kZXgsXG4gICAgZGlzYWJsZWQsXG4gICAgY2xhc3NlcyxcbiAgICBuYW1lLFxuICAgIGFyaWFMYWJlbFxuICB9ID0gYXR0cnM7XG4gIGNvbnN0IF9jbGFzc2VzID0gbmV3IFNldChjbGFzc2VzKTtcbiAgX2NsYXNzZXMuYWRkKFwic3Vic3RyYXRlLWJ1dHRvbiBidG5cIik7XG4gIGNvbnN0IGFyciA9IEFycmF5LmZyb20oX2NsYXNzZXMpO1xuICBjb25zdCBidG5Qcm9wcyA9IFtcbiAgICBhcnIubGVuZ3RoID8gYGNsYXNzPVwiJHthcnIuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfVwiYCA6IFwiXCIsXG4gICAgZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcIlwiLFxuICAgIGF1dG9mb2N1cyA/IFwiYXV0b2ZvY3VzXCIgOiBcIlwiLFxuICAgIHR5cGUgPyBgdHlwZT1cIiR7dHlwZX1cImAgOiBcIlwiLFxuICAgIG5hbWUgPyBgbmFtZT0ke25hbWV9YCA6IFwiXCIsXG4gICAgdGFiaW5kZXggPyBgdGFiaW5kZXg9XCIke3RhYmluZGV4fVwiYCA6ICd0YWJpbmRleD1cIjBcIicsXG4gICAgJ3JvbGU9XCJidXR0b25cIicsXG4gICAgYXJpYUxhYmVsID8gYGFyaWEtbGFiZWw9XCIke2FyaWFMYWJlbH1cImAgOiBcIlwiLFxuICAgICdhcmlhLWxpdmU9XCJwb2xpdGVcIidcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gYDxzdWJzdHJhdGUtYnV0dG9uJHtkaXNhYmxlZCA/IFwiIGRpc2FibGVkXCIgOiBcIlwifT5cbiAgICAgICAgICAgIDxidXR0b24gJHtidG5Qcm9wc30+PHNwYW4gY2xhc3M9XCJidG4tY29udGVudFwiPiR7dGV4dENvbnRlbnR9PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L3N1YnN0cmF0ZS1idXR0b24+YCA6IGA8YnV0dG9uICR7YnRuUHJvcHN9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tY29udGVudFwiPiR7dGV4dENvbnRlbnR9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5gO1xufVxuX19uYW1lKGh0bWwsIFwiaHRtbFwiKTtcbmV4cG9ydCB7XG4gIGh0bWxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLmpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRvQXR0cmlidXRlcyhhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhdHRyc1trXTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gYWNjO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBpZiAodmFsdWUpIHJldHVybiAoYWNjICsgYCAke2t9YCkudHJpbSgpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gYWNjICsgYCAke2t9PVwiJHt2YWx1ZS5qb2luKFwiIFwiKX1cImA7XG4gICAgfVxuICAgIHJldHVybiAoYWNjICsgYCAke2t9PVwiJHt2YWx1ZX1cImApLnRyaW0oKTtcbiAgfSwgXCJcIik7XG59XG5fX25hbWUodG9BdHRyaWJ1dGVzLCBcInRvQXR0cmlidXRlc1wiKTtcbmV4cG9ydCB7XG4gIHRvQXR0cmlidXRlc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF0dHJpYnV0ZXMuanMubWFwXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuaW1wb3J0IHsgdG9BdHRyaWJ1dGVzIH0gZnJvbSBcIi4vYXR0cmlidXRlcy5qc1wiO1xuZnVuY3Rpb24gaXNSZWdpc3RlcmVkKGVsTmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbE5hbWUpLmNvbnN0cnVjdG9yICE9PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG59XG5fX25hbWUoaXNSZWdpc3RlcmVkLCBcImlzUmVnaXN0ZXJlZFwiKTtcbmZ1bmN0aW9uIGRlZmluZShuYW1lLCBlbGVtZW50KSB7XG4gIGlmICghd2luZG93KSByZXR1cm47XG4gIGlmICghKFwiY3VzdG9tRWxlbWVudHNcIiBpbiB3aW5kb3cpKSByZXR1cm47XG4gIGlmICghaXNSZWdpc3RlcmVkKG5hbWUpKSB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbGVtZW50KTtcbiAgfVxufVxuX19uYW1lKGRlZmluZSwgXCJkZWZpbmVcIik7XG5jb25zdCBxcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5jb25zdCBxc2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuZnVuY3Rpb24gbWF0Y2goZWwsIHMpIHtcbiAgaWYgKCFlbC5tYXRjaGVzKSBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIHJldHVybiBlbC5tYXRjaGVzKHMpID8gZWwgOiBlbC5jbG9zZXN0KHMpO1xufVxuX19uYW1lKG1hdGNoLCBcIm1hdGNoXCIpO1xuZXhwb3J0IHtcbiAgZGVmaW5lLFxuICBpc1JlZ2lzdGVyZWQsXG4gIG1hdGNoLFxuICBxcyxcbiAgcXNhLFxuICB0b0F0dHJpYnV0ZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbmltcG9ydCB7IG1hdGNoIGFzIF9tYXRjaCB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmNsYXNzIFdlYkNvbXBvbmVudCBleHRlbmRzIHdpbmRvdy5IVE1MRWxlbWVudCB7XG4gIHN0YXRpYyB7XG4gICAgX19uYW1lKHRoaXMsIFwiV2ViQ29tcG9uZW50XCIpO1xuICB9XG4gIHN0YXRpYyBUQUcgPSBcIlwiO1xuICBUQUcgPSBcIlwiO1xuICBzdGF0aWMgbWF0Y2goZWwpIHtcbiAgICByZXR1cm4gX21hdGNoKGVsLCB0aGlzLlRBRyk7XG4gIH1cbiAgLyoqXG4gICAqIFN0b3JlIGdsb2JhbCB3aWxkY2FyZCBsaXN0ZW5lcnMgKGxpc3RlbiB0byBhbGwgZXZlbnRzKVxuICAgKiBUcmlnZ2VyZWQgYnkgQUxMIGV2ZW50cyBkaXNwYXRjaGVkIHRocm91Z2ggdGhpcyBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAvKipcbiAgICogU3RvcmUgbmFtZXNwYWNlZCB3aWxkY2FyZCBsaXN0ZW5lcnMgKGxpc3RlbiB0byAnY29tcG9uZW50LW5hbWU6KicpXG4gICAqIFRyaWdnZXJlZCBieSBldmVudHMgZnJvbSBlbWl0KCkgdGhhdCBtYXRjaCB0aGlzIGNvbXBvbmVudCdzIG5hbWVzcGFjZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zdCBDcmVhdGVkQ2xhc3MgPSBjbGFzcyBleHRlbmRzIFdlYkNvbXBvbmVudCB7XG4gICAgICBzdGF0aWMge1xuICAgICAgICBfX25hbWUodGhpcywgXCJDcmVhdGVkQ2xhc3NcIik7XG4gICAgICB9XG4gICAgICBzdGF0aWMgVEFHID0gZWxlbWVudE5hbWU7XG4gICAgICBUQUcgPSBlbGVtZW50TmFtZTtcbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYHJlbmRlcmAgc2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IGNoaWxkcmVuXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgQ3JlYXRlZENsYXNzLmRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFdlYkNvbXBvbmVudC5kZWZpbmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIENyZWF0ZWRDbGFzcy5ldmVudCA9IGZ1bmN0aW9uKGV2VHlwZSkge1xuICAgICAgcmV0dXJuIFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIGV2VHlwZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ3JlYXRlZENsYXNzO1xuICB9XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgZGVmaW5lKHRoaXMuVEFHLCB0aGlzKTtcbiAgfVxuICAvKipcbiAgICogUnVucyB3aGVuIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogRGVwZW5kcyBvbiBgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlc2AuXG4gICAqXG4gICAqIFNob3VsZCBuYW1lIG1ldGhvZHMgbGlrZSBgaGFuZGxlQ2hhbmdlX2Rpc2FibGVkYC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBuYW1lICAgICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBvbGRWYWx1ZSBUaGUgb2xkIGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5ld1ZhbHVlIFRoZSBuZXcgYXR0cmlidXRlIHZhbHVlXG4gICAqL1xuICBhc3luYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXNbYGhhbmRsZUNoYW5nZV8ke25hbWV9YF07XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGF3YWl0IGhhbmRsZXIuY2FsbCh0aGlzLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRW5oYW5jZWQgYWRkRXZlbnRMaXN0ZW5lciB0aGF0IHN1cHBvcnRzIHdpbGRjYXJkczpcbiAgICogLSBDb21wb25lbnQuZXZlbnQoJyonKSAtIExpc3RlbiB0byBhbGwgbmFtZXNwYWNlZCBldmVudHMgZm9yIHRoaXNcbiAgICogICBjb21wb25lbnQgKGUuZy4sICdteS1jb21wb25lbnQ6KicpXG4gICAqIC0gJyonIC0gTGlzdGVuIHRvIEFMTCBldmVudHMgKG5hbWVzcGFjZWQgYW5kIG5vbi1uYW1lc3BhY2VkLCBpbmNsdWRpbmdcbiAgICogICBub3JtYWwgRE9NIGV2ZW50cylcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgLSBFdmVudCB0eXBlLCBDb21wb25lbnQuZXZlbnQoJyonKSBmb3IgbmFtZXNwYWNlZCB3aWxkY2FyZCxcbiAgICogICBvciAnKicgZm9yIGdsb2JhbCB3aWxkY2FyZFxuICAgKiBAcGFyYW0gbGlzdGVuZXIgLSBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbiBvciBvYmplY3RcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBFdmVudCBsaXN0ZW5lciBvcHRpb25zXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09IFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIFwiKlwiKSkge1xuICAgICAgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzLmFkZCh7IGxpc3RlbmVyLCBvcHRpb25zIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCIqXCIpIHtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9nbG9iYWxXaWxkY2FyZExpc3RlbmVycy5hZGQoeyBsaXN0ZW5lciwgb3B0aW9ucyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBOb3RpZnkgbmFtZXNwYWNlZCB3aWxkY2FyZCBsaXN0ZW5lcnMgb2YgYW4gZXZlbnRcbiAgICogT25seSBmaXJlcyBmb3IgZXZlbnRzIHRoYXQgbWF0Y2ggdGhpcyBjb21wb25lbnQncyBuYW1lc3BhY2VcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIGRpc3BhdGNoIHRvIG5hbWVzcGFjZWQgd2lsZGNhcmQgbGlzdGVuZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbm90aWZ5TmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0aGlzLlRBRztcbiAgICBpZiAoIWNvbXBvbmVudE5hbWUgfHwgIWV2ZW50LnR5cGUuc3RhcnRzV2l0aChgJHtjb21wb25lbnROYW1lfTpgKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9uYW1lc3BhY2VkV2lsZGNhcmRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBsaXN0ZW5lciB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkVycm9yIGluIG5hbWVzcGFjZWQgd2lsZGNhcmQgZXZlbnQgbGlzdGVuZXI6XCIsXG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogTm90aWZ5IGdsb2JhbCB3aWxkY2FyZCBsaXN0ZW5lcnMgb2YgYW4gZXZlbnRcbiAgICogRmlyZXMgZm9yIEFMTCBldmVudHMgZGlzcGF0Y2hlZCB0aHJvdWdoIHRoaXMgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgLSBUaGUgZXZlbnQgdG8gZGlzcGF0Y2ggdG8gZ2xvYmFsIHdpbGRjYXJkIGxpc3RlbmVyc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25vdGlmeUdsb2JhbFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBsaXN0ZW5lciB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdsb2JhbCB3aWxkY2FyZCBldmVudCBsaXN0ZW5lcjpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgcXMoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuICBxc2Eoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfVxuICAvKipcbiAgICogVGFrZSBhIG5vbi1uYW1lcHNhY2VkIGV2ZW50IG5hbWUsIHJldHVybiBuYW1lc3BhY2UgZXZlbnQgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2VHlwZSBUaGUgbm9uLW5hbWVzcGFjZSBldmVudCBuYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IE5hbWVzcGFjZWQgZXZlbnQgbmFtZSwgZWcsIGBteS1jb21wb25lbnQ6Y2xpY2tgXG4gICAqL1xuICBzdGF0aWMgZXZlbnQoZXZUeXBlKSB7XG4gICAgcmV0dXJuIGV2ZW50TmFtZSh0aGlzLlRBRywgZXZUeXBlKTtcbiAgfVxuICAvKipcbiAgICogRW1pdCBhIG5hbWVzcGFjZWQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIChub24tbmFtZXNwYWNlZCkgZXZlbnQgdHlwZSBzdHJpbmdcbiAgICogQHBhcmFtIG9wdHMgYGJ1YmJsZXNgLCBgZGV0YWlsYCwgYW5kIGBjYW5jZWxhYmxlYC4gRGVmYXVsdCBpc1xuICAgKiBgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH1gXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZW1pdCh0eXBlLCBvcHRzID0ge30pIHtcbiAgICBpZiAodHlwZSA9PT0gXCIqXCIpIHRocm93IG5ldyBFcnJvcignRG8gbm90IGVtaXQgdGhlIGxpdGVyYWwgXCIqXCInKTtcbiAgICBjb25zdCB7IGJ1YmJsZXMgPSB0cnVlLCBjYW5jZWxhYmxlID0gdHJ1ZSwgZGV0YWlsIH0gPSBvcHRzO1xuICAgIGNvbnN0IG5hbWVzcGFjZWRUeXBlID0gYCR7dGhpcy5UQUd9OiR7dHlwZX1gO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWVzcGFjZWRUeXBlLCB7XG4gICAgICBidWJibGVzLFxuICAgICAgY2FuY2VsYWJsZSxcbiAgICAgIGRldGFpbFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5fbm90aWZ5TmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKiBPdmVycmlkZSBkaXNwYXRjaEV2ZW50IHRvIG5vdGlmeSBnbG9iYWwgd2lsZGNhcmQgbGlzdGVuZXJzXG4gICAqIFRoaXMgZW5zdXJlcyB0aGF0ICcqKicgbGlzdGVuZXJzIGNhdGNoIEFMTCBldmVudHNcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIGRpc3BhdGNoXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50IHdhcyBub3QgY2FuY2VsbGVkXG4gICAqL1xuICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5fbm90aWZ5R2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMoZXZlbnQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgZW1pdCBhbiBldmVudCwgbm8gbmFtZXNwYWNpbmcuXG4gICAqL1xuICBkaXNwYXRjaCh0eXBlLCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICBidWJibGVzOiBvcHRzLmJ1YmJsZXMgPT09IHZvaWQgMCA/IHRydWUgOiBvcHRzLmJ1YmJsZXMsXG4gICAgICBjYW5jZWxhYmxlOiBvcHRzLmNhbmNlbGFibGUgPT09IHZvaWQgMCA/IHRydWUgOiBvcHRzLmNhbmNlbGFibGUsXG4gICAgICBkZXRhaWw6IG9wdHMuZGV0YWlsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbiAgb24oZXZOYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZnVsbEV2TmFtZSA9IFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIGV2TmFtZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZ1bGxFdk5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBFbmhhbmNlZCByZW1vdmVFdmVudExpc3RlbmVyIHRoYXQgc3VwcG9ydHMgd2lsZGNhcmRzOlxuICAgKiAtIENvbXBvbmVudC5ldmVudCgnKicpIC0gUmVtb3ZlIG5hbWVzcGFjZWQgd2lsZGNhcmQgbGlzdGVuZXJcbiAgICogLSAnKicgLSBSZW1vdmUgZ2xvYmFsIHdpbGRjYXJkIGxpc3RlbmVyXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIC0gRXZlbnQgdHlwZSwgQ29tcG9uZW50LmV2ZW50KCcqJykgZm9yIG5hbWVzcGFjZWQsIG9yICcqJ1xuICAgKiAgIGZvciBnbG9iYWxcbiAgICogQHBhcmFtIGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gb3Igb2JqZWN0IHRvIHJlbW92ZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIEV2ZW50IGxpc3RlbmVyIG9wdGlvbnNcbiAgICovXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gV2ViQ29tcG9uZW50LmV2ZW50LmNhbGwodGhpcywgXCIqXCIpKSB7XG4gICAgICBpZiAobGlzdGVuZXIgJiYgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGVudHJ5Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzLmRlbGV0ZShlbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiKlwiKSB7XG4gICAgICBpZiAobGlzdGVuZXIgJiYgdGhpcy5fZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLl9nbG9iYWxXaWxkY2FyZExpc3RlbmVycykge1xuICAgICAgICAgIGlmIChlbnRyeS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzLmRlbGV0ZShlbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBldmVudE5hbWUobmFtZXNwYWNlLCBldlR5cGUpIHtcbiAgcmV0dXJuIGAke25hbWVzcGFjZX06JHtldlR5cGV9YDtcbn1cbl9fbmFtZShldmVudE5hbWUsIFwiZXZlbnROYW1lXCIpO1xuZnVuY3Rpb24gaXNSZWdpc3RlcmVkKGVsTmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbE5hbWUpLmNvbnN0cnVjdG9yICE9PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG59XG5fX25hbWUoaXNSZWdpc3RlcmVkLCBcImlzUmVnaXN0ZXJlZFwiKTtcbmZ1bmN0aW9uIGRlZmluZShuYW1lLCBlbGVtZW50KSB7XG4gIGlmICghd2luZG93KSByZXR1cm47XG4gIGlmICghKFwiY3VzdG9tRWxlbWVudHNcIiBpbiB3aW5kb3cpKSByZXR1cm47XG4gIGlmICghaXNSZWdpc3RlcmVkKG5hbWUpKSB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbGVtZW50KTtcbiAgfVxufVxuX19uYW1lKGRlZmluZSwgXCJkZWZpbmVcIik7XG5leHBvcnQge1xuICBXZWJDb21wb25lbnQsXG4gIGRlZmluZSxcbiAgaXNSZWdpc3RlcmVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuaW1wb3J0IHsgV2ViQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQHN1YnN0cmF0ZS1zeXN0ZW0vd2ViLWNvbXBvbmVudFwiO1xuY2xhc3MgU3Vic3RyYXRlQnV0dG9uIGV4dGVuZHMgV2ViQ29tcG9uZW50LmNyZWF0ZShcInN1YnN0cmF0ZS1idXR0b25cIikge1xuICBzdGF0aWMge1xuICAgIF9fbmFtZSh0aGlzLCBcIlN1YnN0cmF0ZUJ1dHRvblwiKTtcbiAgfVxuICAvLyBmb3IgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2BcbiAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcImF1dG9mb2N1c1wiLCBcImRpc2FibGVkXCIsIFwic3Bpbm5pbmdcIl07XG4gIHN0YXRpYyBUQUcgPSBcInN1YnN0cmF0ZS1idXR0b25cIjtcbiAgX2lzU3Bpbm5pbmc7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgZGVmaW5lKFN1YnN0cmF0ZUJ1dHRvbi5UQUcsIFN1YnN0cmF0ZUJ1dHRvbik7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgaWYgKGRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvZm9jdXMgPSB0aGlzLmdldEF0dHJpYnV0ZShcImF1dG9mb2N1c1wiKSAhPT0gbnVsbDtcbiAgICB0aGlzLl9pc1NwaW5uaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzcGlubmluZ1wiKSAhPT0gbnVsbDtcbiAgfVxuICBnZXQgZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24/LmZvcm07XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMuYnV0dG9uPy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWRWYWx1ZSkge1xuICAgIGlmICghZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgdGhpcy5fcmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgfVxuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbj8uZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgfVxuICBnZXQgdGFiaW5kZXgoKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuYnV0dG9uPy5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICBpZiAoIWkpIHJldHVybiAwO1xuICAgIHJldHVybiBwYXJzZUludChpKTtcbiAgfVxuICBnZXQgc3Bpbm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3Bpbm5pbmc7XG4gIH1cbiAgc2V0IHNwaW5uaW5nKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInNwaW5uaW5nXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5jbGFzc0xpc3QucmVtb3ZlKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInNwaW5uaW5nXCIpO1xuICAgIH1cbiAgfVxuICBzZXQgdHlwZSh2YWx1ZSkge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZShcInR5cGVcIiwgdmFsdWUpO1xuICB9XG4gIGdldCBhdXRvZm9jdXMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5idXR0b24/Lmhhc0F0dHJpYnV0ZShcImF1dG9mb2N1c1wiKTtcbiAgfVxuICBzZXQgYXV0b2ZvY3VzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIiwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW1vdmVBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgYXR0cmlidXRlcyBvbiB0aGUgaW50ZXJuYWwgYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBfc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fcmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKG5hbWUsIFwiXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBmcm9tIGB0aGlzYCBhbmQgYWxzbyBidXR0b24gY2hpbGQuXG4gICAqL1xuICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB0aGlzLmJ1dHRvbj8ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9XG4gIGdldCBidXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgfVxuICAvKipcbiAgICogSGFuZGxlICdhdXRvZm9jdXMnIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZGV0ZWN0LXdoZW4tYXR0cmlidXRlcy1jaGFuZ2Utb24tYS13ZWItY29tcG9uZW50LyNvcmdhbml6aW5nLXlvdXItY29kZSBHbyBNYWtlIFRoaW5ncyBhcnRpY2xlfVxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG9sZFZhbHVlIFRoZSBvbGQgYXR0cmlidXRlIHZhbHVlXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmV3VmFsdWUgVGhlIG5ldyBhdHRyaWJ1dGUgdmFsdWVcbiAgICovXG4gIGhhbmRsZUNoYW5nZV9hdXRvZm9jdXMoX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZShcImF1dG9mb2N1c1wiLCBuZXdWYWx1ZSk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlX2Rpc2FibGVkKF9vbGQsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IG5ld1ZhbHVlICE9PSBudWxsO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGVsc2UgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIgKyBuZXdWYWx1ZSk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlX3NwaW5uaW5nKF8sIG5ld1ZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIsIFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcInNwaW5uaW5nXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImFyaWEtYnVzeVwiLCBcImZhbHNlXCIpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX3NldHVwS2V5Ym9hcmRIYW5kbGVycygpO1xuICB9XG4gIF9zZXR1cEtleWJvYXJkSGFuZGxlcnMoKSB7XG4gICAgdGhpcy5idXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJ1dHRvbj8uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFN1YnN0cmF0ZUJ1dHRvblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBzdWJzdHJhdGUtc3lzdGVtL3dlYi1jb21wb25lbnRcIjtcbmltcG9ydCB7IFN1YnN0cmF0ZUJ1dHRvbiBhcyBTdWJzdHJhdGVCdXR0b25MaWdodCB9IGZyb20gXCIuL2NsaWVudC5qc1wiO1xuY2xhc3MgU3Vic3RyYXRlQnV0dG9uIGV4dGVuZHMgU3Vic3RyYXRlQnV0dG9uTGlnaHQge1xuICBzdGF0aWMge1xuICAgIF9fbmFtZSh0aGlzLCBcIlN1YnN0cmF0ZUJ1dHRvblwiKTtcbiAgfVxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIGRlZmluZShTdWJzdHJhdGVCdXR0b24uVEFHLCBTdWJzdHJhdGVCdXR0b24pO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5fc2V0dXBLZXlib2FyZEhhbmRsZXJzKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICBhdXRvZm9jdXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICBjb25zdCBhcmlhTGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik7XG4gICAgY29uc3Qgc3Bpbm5pbmcgPSB0aGlzLmdldEF0dHJpYnV0ZShcInNwaW5uaW5nXCIpICE9PSBudWxsO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICBcInN1YnN0cmF0ZS1idXR0b25cIixcbiAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIiksXG4gICAgICBzcGlubmluZyA/IFwic3Bpbm5pbmdcIiA6IG51bGxcbiAgICBdO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmlubmVySFRNTDtcbiAgICBjb25zdCBidG5Qcm9wcyA9IHtcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhdXRvZm9jdXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIHR5cGUsXG4gICAgICBuYW1lLFxuICAgICAgYXJpYUxhYmVsXG4gICAgfTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGh0bWwoYnRuUHJvcHMsIHRleHQpO1xuICB9XG59XG5kZWZpbmUoXCJzdWJzdHJhdGUtYnV0dG9uXCIsIFN1YnN0cmF0ZUJ1dHRvbik7XG5leHBvcnQge1xuICBTdWJzdHJhdGVCdXR0b25cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnN1cHBvcnRzID0gZnVuY3Rpb24gc3VwcG9ydHMgKC4uLm1hbmlmZXN0cykge1xuICBjb25zdCBtYW5pZmVzdCA9IG1hbmlmZXN0cy5yZWR1Y2UoKGFjYywgbSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIG0pLCB7fSlcblxuICAvLyBTbmFwc2hvdHMgaXMgYW4gYWxpYXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIGNvbnN0IGltcGxpY2l0U25hcHNob3RzID0gbWFuaWZlc3QuaW1wbGljaXRTbmFwc2hvdHMgfHwgbWFuaWZlc3Quc25hcHNob3RzIHx8IGZhbHNlXG4gIGNvbnN0IGV4cGxpY2l0U25hcHNob3RzID0gbWFuaWZlc3QuZXhwbGljaXRTbmFwc2hvdHMgfHwgZmFsc2VcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihtYW5pZmVzdCwge1xuICAgIGltcGxpY2l0U25hcHNob3RzLFxuICAgIGV4cGxpY2l0U25hcHNob3RzLFxuICAgIHNuYXBzaG90czogaW1wbGljaXRTbmFwc2hvdHMsXG4gICAgaGFzOiBtYW5pZmVzdC5oYXMgfHwgZmFsc2UsXG4gICAgcGVybWFuZW5jZTogbWFuaWZlc3QucGVybWFuZW5jZSB8fCBmYWxzZSxcbiAgICBzZWVrOiBtYW5pZmVzdC5zZWVrIHx8IGZhbHNlLFxuICAgIGNyZWF0ZUlmTWlzc2luZzogbWFuaWZlc3QuY3JlYXRlSWZNaXNzaW5nIHx8IGZhbHNlLFxuICAgIGVycm9ySWZFeGlzdHM6IG1hbmlmZXN0LmVycm9ySWZFeGlzdHMgfHwgZmFsc2UsXG4gICAgZGVmZXJyZWRPcGVuOiBtYW5pZmVzdC5kZWZlcnJlZE9wZW4gfHwgZmFsc2UsXG4gICAgc3RyZWFtczogbWFuaWZlc3Quc3RyZWFtcyB8fCBmYWxzZSxcbiAgICBlbmNvZGluZ3M6IE9iamVjdC5hc3NpZ24oe30sIG1hbmlmZXN0LmVuY29kaW5ncyksXG4gICAgZXZlbnRzOiBPYmplY3QuYXNzaWduKHt9LCBtYW5pZmVzdC5ldmVudHMpLFxuICAgIGFkZGl0aW9uYWxNZXRob2RzOiBPYmplY3QuYXNzaWduKHt9LCBtYW5pZmVzdC5hZGRpdGlvbmFsTWV0aG9kcyksXG4gICAgc2lnbmFsczogT2JqZWN0LmFzc2lnbih7fSwgbWFuaWZlc3Quc2lnbmFscylcbiAgfSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE1vZHVsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgRXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0ge3sgY29kZT86IHN0cmluZywgY2F1c2U/OiBFcnJvciwgZXhwZWN0ZWQ/OiBib29sZWFuLCB0cmFuc2llbnQ/OiBib29sZWFuIH19IFtvcHRpb25zXVxuICAgKi9cbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlIHx8ICcnKVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zICE9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5jb2RlKSB0aGlzLmNvZGUgPSBTdHJpbmcob3B0aW9ucy5jb2RlKVxuICAgICAgaWYgKG9wdGlvbnMuZXhwZWN0ZWQpIHRoaXMuZXhwZWN0ZWQgPSB0cnVlXG4gICAgICBpZiAob3B0aW9ucy50cmFuc2llbnQpIHRoaXMudHJhbnNpZW50ID0gdHJ1ZVxuICAgICAgaWYgKG9wdGlvbnMuY2F1c2UpIHRoaXMuY2F1c2UgPSBvcHRpb25zLmNhdXNlXG4gICAgfVxuXG4gICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbmNvbnN0IGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbmNvbnN0IGN1c3RvbUluc3BlY3RTeW1ib2wgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA/IFN5bWJvbFsnZm9yJ10oJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA6IG51bGxcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG5jb25zdCBLX01BWF9MRU5HVEggPSAweDdmZmZmZmZmXG5leHBvcnRzLmtNYXhMZW5ndGggPSBLX01BWF9MRU5HVEhcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgUHJpbnQgd2FybmluZyBhbmQgcmVjb21tZW5kIHVzaW5nIGBidWZmZXJgIHY0Lnggd2hpY2ggaGFzIGFuIE9iamVjdFxuICogICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogV2UgcmVwb3J0IHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0eXBlZCBhcnJheXMgaWYgdGhlIGFyZSBub3Qgc3ViY2xhc3NhYmxlXG4gKiB1c2luZyBfX3Byb3RvX18uIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgXG4gKiAoU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzgpLiBJRSAxMCBsYWNrcyBzdXBwb3J0XG4gKiBmb3IgX19wcm90b19fIGFuZCBoYXMgYSBidWdneSB0eXBlZCBhcnJheSBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGxhY2tzIHR5cGVkIGFycmF5IChVaW50OEFycmF5KSBzdXBwb3J0IHdoaWNoIGlzIHJlcXVpcmVkIGJ5ICcgK1xuICAgICdgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LidcbiAgKVxufVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGNvbnN0IHByb3RvID0geyBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH0gfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm90bywgVWludDhBcnJheS5wcm90b3R5cGUpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGFyciwgcHJvdG8pXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDJcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAncGFyZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ29mZnNldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5ieXRlT2Zmc2V0XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPiBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIGxlbmd0aCArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcbiAgcmV0dXJuIGJ1ZlxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKGFyZylcbiAgfVxuICByZXR1cm4gZnJvbShhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheVZpZXcodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gICAgKVxuICB9XG5cbiAgaWYgKGlzSW5zdGFuY2UodmFsdWUsIEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBBcnJheUJ1ZmZlcikpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIChpc0luc3RhbmNlKHZhbHVlLCBTaGFyZWRBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgU2hhcmVkQXJyYXlCdWZmZXIpKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdmFsdWVPZiA9IHZhbHVlLnZhbHVlT2YgJiYgdmFsdWUudmFsdWVPZigpXG4gIGlmICh2YWx1ZU9mICE9IG51bGwgJiYgdmFsdWVPZiAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVPZiwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgY29uc3QgYiA9IGZyb21PYmplY3QodmFsdWUpXG4gIGlmIChiKSByZXR1cm4gYlxuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9QcmltaXRpdmUgIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSgnc3RyaW5nJyksIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIE5vdGU6IENoYW5nZSBwcm90b3R5cGUgKmFmdGVyKiBCdWZmZXIuZnJvbSBpcyBkZWZpbmVkIHRvIHdvcmthcm91bmQgQ2hyb21lIGJ1Zzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvMTQ4XG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLnByb3RvdHlwZSwgVWludDhBcnJheS5wcm90b3R5cGUpXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLCBVaW50OEFycmF5KVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgc2l6ZSArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAoc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICBsZXQgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICBjb25zdCBhY3R1YWwgPSBidWYud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIGJ1ZiA9IGJ1Zi5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKGFycmF5KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVZpZXcgKGFycmF5Vmlldykge1xuICBpZiAoaXNJbnN0YW5jZShhcnJheVZpZXcsIFVpbnQ4QXJyYXkpKSB7XG4gICAgY29uc3QgY29weSA9IG5ldyBVaW50OEFycmF5KGFycmF5VmlldylcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKGNvcHkuYnVmZmVyLCBjb3B5LmJ5dGVPZmZzZXQsIGNvcHkuYnl0ZUxlbmd0aClcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5TGlrZShhcnJheVZpZXcpXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcImxlbmd0aFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBsZXQgYnVmXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAob2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIGNvbnN0IGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgY29uc3QgYnVmID0gY3JlYXRlQnVmZmVyKGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgbnVtYmVySXNOYU4ob2JqLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIoMClcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqKVxuICB9XG5cbiAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iai5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuIGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlciA9PT0gdHJ1ZSAmJlxuICAgIGIgIT09IEJ1ZmZlci5wcm90b3R5cGUgLy8gc28gQnVmZmVyLmlzQnVmZmVyKEJ1ZmZlci5wcm90b3R5cGUpIHdpbGwgYmUgZmFsc2Vcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmIChpc0luc3RhbmNlKGEsIFVpbnQ4QXJyYXkpKSBhID0gQnVmZmVyLmZyb20oYSwgYS5vZmZzZXQsIGEuYnl0ZUxlbmd0aClcbiAgaWYgKGlzSW5zdGFuY2UoYiwgVWludDhBcnJheSkpIGIgPSBCdWZmZXIuZnJvbShiLCBiLm9mZnNldCwgYi5ieXRlTGVuZ3RoKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5J1xuICAgIClcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIGxldCB4ID0gYS5sZW5ndGhcbiAgbGV0IHkgPSBiLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICBsZXQgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIGxldCBidWYgPSBsaXN0W2ldXG4gICAgaWYgKGlzSW5zdGFuY2UoYnVmLCBVaW50OEFycmF5KSkge1xuICAgICAgaWYgKHBvcyArIGJ1Zi5sZW5ndGggPiBidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9IEJ1ZmZlci5mcm9tKGJ1ZilcbiAgICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgYnVmLFxuICAgICAgICAgIHBvc1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIH1cbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgY29uc3QgbXVzdE1hdGNoID0gKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSA9PT0gdHJ1ZSlcbiAgaWYgKCFtdXN0TWF0Y2ggJiYgbGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB7XG4gICAgICAgICAgcmV0dXJuIG11c3RNYXRjaCA/IC0xIDogdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJjaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCAoYW5kIHRoZSBgaXMtYnVmZmVyYCBucG0gcGFja2FnZSlcbi8vIHRvIGRldGVjdCBhIEJ1ZmZlciBpbnN0YW5jZS4gSXQncyBub3QgcG9zc2libGUgdG8gdXNlIGBpbnN0YW5jZW9mIEJ1ZmZlcmBcbi8vIHJlbGlhYmx5IGluIGEgYnJvd3NlcmlmeSBjb250ZXh0IGJlY2F1c2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgZGlmZmVyZW50XG4vLyBjb3BpZXMgb2YgdGhlICdidWZmZXInIHBhY2thZ2UgaW4gdXNlLiBUaGlzIG1ldGhvZCB3b3JrcyBldmVuIGZvciBCdWZmZXJcbi8vIGluc3RhbmNlcyB0aGF0IHdlcmUgY3JlYXRlZCBmcm9tIGFub3RoZXIgY29weSBvZiB0aGUgYGJ1ZmZlcmAgcGFja2FnZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE1NFxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgY29uc3QgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBCdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nXG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgbGV0IHN0ciA9ICcnXG4gIGNvbnN0IG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5yZXBsYWNlKC8oLnsyfSkvZywgJyQxICcpLnRyaW0oKVxuICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5pZiAoY3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICBCdWZmZXIucHJvdG90eXBlW2N1c3RvbUluc3BlY3RTeW1ib2xdID0gQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmIChpc0luc3RhbmNlKHRhcmdldCwgVWludDhBcnJheSkpIHtcbiAgICB0YXJnZXQgPSBCdWZmZXIuZnJvbSh0YXJnZXQsIHRhcmdldC5vZmZzZXQsIHRhcmdldC5ieXRlTGVuZ3RoKVxuICB9XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInRhcmdldFwiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXkuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdGFyZ2V0KVxuICAgIClcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIGxldCB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICBsZXQgeSA9IGVuZCAtIHN0YXJ0XG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgY29uc3QgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgY29uc3QgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKG51bWJlcklzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgW3ZhbF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIGxldCBpbmRleFNpemUgPSAxXG4gIGxldCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIGxldCB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpXG4gIGlmIChkaXIpIHtcbiAgICBsZXQgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIGNvbnN0IHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBsZXQgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggPj4+IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgY29uc3QgcmVzID0gW11cblxuICBsZXQgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgY29uc3QgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgbGV0IGNvZGVQb2ludCA9IG51bGxcbiAgICBsZXQgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKVxuICAgICAgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKVxuICAgICAgICAgID8gM1xuICAgICAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpXG4gICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIGxldCBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbmNvbnN0IE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICBjb25zdCBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGxldCByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICBsZXQgb3V0ID0gJydcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gaGV4U2xpY2VMb29rdXBUYWJsZVtidWZbaV1dXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBjb25zdCBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICBsZXQgcmVzID0gJydcbiAgLy8gSWYgYnl0ZXMubGVuZ3RoIGlzIG9kZCwgdGhlIGxhc3QgOCBiaXRzIG11c3QgYmUgaWdub3JlZCAoc2FtZSBhcyBub2RlLmpzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgKGJ5dGVzW2kgKyAxXSAqIDI1NikpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICBjb25zdCBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihuZXdCdWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIGxldCBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ1VJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgbG8gPSBmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0XG5cbiAgY29uc3QgaGkgPSB0aGlzWysrb2Zmc2V0XSArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgbGFzdCAqIDIgKiogMjRcblxuICByZXR1cm4gQmlnSW50KGxvKSArIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0QkUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBoaSA9IGZpcnN0ICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF1cblxuICBjb25zdCBsbyA9IHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdFxuXG4gIHJldHVybiAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKSArIEJpZ0ludChsbylcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldF1cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgaSA9IGJ5dGVMZW5ndGhcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRMRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgNF0gK1xuICAgIHRoaXNbb2Zmc2V0ICsgNV0gKiAyICoqIDggK1xuICAgIHRoaXNbb2Zmc2V0ICsgNl0gKiAyICoqIDE2ICtcbiAgICAobGFzdCA8PCAyNCkgLy8gT3ZlcmZsb3dcblxuICByZXR1cm4gKEJpZ0ludCh2YWwpIDw8IEJpZ0ludCgzMikpICtcbiAgICBCaWdJbnQoZmlyc3QgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAyNClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ0ludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ0ludDY0QkUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCB2YWwgPSAoZmlyc3QgPDwgMjQpICsgLy8gT3ZlcmZsb3dcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludCh0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIGxhc3QpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgbGV0IG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIHdydEJpZ1VJbnQ2NExFIChidWYsIHZhbHVlLCBvZmZzZXQsIG1pbiwgbWF4KSB7XG4gIGNoZWNrSW50QkkodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgNylcblxuICBsZXQgbG8gPSBOdW1iZXIodmFsdWUgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIHJldHVybiBvZmZzZXRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0QkUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDddID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA2XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNV0gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDRdID0gbG9cbiAgbGV0IGhpID0gTnVtYmVyKHZhbHVlID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQgKyAzXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMl0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCArIDFdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXRdID0gaGlcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnVUludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBCaWdJbnQoMCksIEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgbGV0IGkgPSAwXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICBsZXQgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdJbnQ2NExFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0TEUodGhpcywgdmFsdWUsIG9mZnNldCwgLUJpZ0ludCgnMHg4MDAwMDAwMDAwMDAwMDAwJyksIEJpZ0ludCgnMHg3ZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0QkUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRCRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHNob3VsZCBiZSBhIEJ1ZmZlcicpXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICBjb25zdCBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVc2UgYnVpbHQtaW4gd2hlbiBhdmFpbGFibGUsIG1pc3NpbmcgZnJvbSBJRTExXG4gICAgdGhpcy5jb3B5V2l0aGluKHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKChlbmNvZGluZyA9PT0gJ3V0ZjgnICYmIGNvZGUgPCAxMjgpIHx8XG4gICAgICAgICAgZW5jb2RpbmcgPT09ICdsYXRpbjEnKSB7XG4gICAgICAgIC8vIEZhc3QgcGF0aDogSWYgYHZhbGAgZml0cyBpbnRvIGEgc2luZ2xlIGJ5dGUsIHVzZSB0aGF0IG51bWVyaWMgdmFsdWUuXG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIGxldCBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIENVU1RPTSBFUlJPUlNcbi8vID09PT09PT09PT09PT1cblxuLy8gU2ltcGxpZmllZCB2ZXJzaW9ucyBmcm9tIE5vZGUsIGNoYW5nZWQgZm9yIEJ1ZmZlci1vbmx5IHVzYWdlXG5jb25zdCBlcnJvcnMgPSB7fVxuZnVuY3Rpb24gRSAoc3ltLCBnZXRNZXNzYWdlLCBCYXNlKSB7XG4gIGVycm9yc1tzeW1dID0gY2xhc3MgTm9kZUVycm9yIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lc3NhZ2UnLCB7XG4gICAgICAgIHZhbHVlOiBnZXRNZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkZCB0aGUgZXJyb3IgY29kZSB0byB0aGUgbmFtZSB0byBpbmNsdWRlIGl0IGluIHRoZSBzdGFjayB0cmFjZS5cbiAgICAgIHRoaXMubmFtZSA9IGAke3RoaXMubmFtZX0gWyR7c3ltfV1gXG4gICAgICAvLyBBY2Nlc3MgdGhlIHN0YWNrIHRvIGdlbmVyYXRlIHRoZSBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZXJyb3IgY29kZVxuICAgICAgLy8gZnJvbSB0aGUgbmFtZS5cbiAgICAgIHRoaXMuc3RhY2sgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIC8vIFJlc2V0IHRoZSBuYW1lIHRvIHRoZSBhY3R1YWwgbmFtZS5cbiAgICAgIGRlbGV0ZSB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXQgY29kZSAoKSB7XG4gICAgICByZXR1cm4gc3ltXG4gICAgfVxuXG4gICAgc2V0IGNvZGUgKHZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvZGUnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRvU3RyaW5nICgpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9IFske3N5bX1dOiAke3RoaXMubWVzc2FnZX1gXG4gICAgfVxuICB9XG59XG5cbkUoJ0VSUl9CVUZGRVJfT1VUX09GX0JPVU5EUycsXG4gIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBgJHtuYW1lfSBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHNgXG4gICAgfVxuXG4gICAgcmV0dXJuICdBdHRlbXB0IHRvIGFjY2VzcyBtZW1vcnkgb3V0c2lkZSBidWZmZXIgYm91bmRzJ1xuICB9LCBSYW5nZUVycm9yKVxuRSgnRVJSX0lOVkFMSURfQVJHX1RZUEUnLFxuICBmdW5jdGlvbiAobmFtZSwgYWN0dWFsKSB7XG4gICAgcmV0dXJuIGBUaGUgXCIke25hbWV9XCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBhY3R1YWx9YFxuICB9LCBUeXBlRXJyb3IpXG5FKCdFUlJfT1VUX09GX1JBTkdFJyxcbiAgZnVuY3Rpb24gKHN0ciwgcmFuZ2UsIGlucHV0KSB7XG4gICAgbGV0IG1zZyA9IGBUaGUgdmFsdWUgb2YgXCIke3N0cn1cIiBpcyBvdXQgb2YgcmFuZ2UuYFxuICAgIGxldCByZWNlaXZlZCA9IGlucHV0XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoaW5wdXQpICYmIE1hdGguYWJzKGlucHV0KSA+IDIgKiogMzIpIHtcbiAgICAgIHJlY2VpdmVkID0gYWRkTnVtZXJpY2FsU2VwYXJhdG9yKFN0cmluZyhpbnB1dCkpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdiaWdpbnQnKSB7XG4gICAgICByZWNlaXZlZCA9IFN0cmluZyhpbnB1dClcbiAgICAgIGlmIChpbnB1dCA+IEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpIHx8IGlucHV0IDwgLShCaWdJbnQoMikgKiogQmlnSW50KDMyKSkpIHtcbiAgICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IocmVjZWl2ZWQpXG4gICAgICB9XG4gICAgICByZWNlaXZlZCArPSAnbidcbiAgICB9XG4gICAgbXNnICs9IGAgSXQgbXVzdCBiZSAke3JhbmdlfS4gUmVjZWl2ZWQgJHtyZWNlaXZlZH1gXG4gICAgcmV0dXJuIG1zZ1xuICB9LCBSYW5nZUVycm9yKVxuXG5mdW5jdGlvbiBhZGROdW1lcmljYWxTZXBhcmF0b3IgKHZhbCkge1xuICBsZXQgcmVzID0gJydcbiAgbGV0IGkgPSB2YWwubGVuZ3RoXG4gIGNvbnN0IHN0YXJ0ID0gdmFsWzBdID09PSAnLScgPyAxIDogMFxuICBmb3IgKDsgaSA+PSBzdGFydCArIDQ7IGkgLT0gMykge1xuICAgIHJlcyA9IGBfJHt2YWwuc2xpY2UoaSAtIDMsIGkpfSR7cmVzfWBcbiAgfVxuICByZXR1cm4gYCR7dmFsLnNsaWNlKDAsIGkpfSR7cmVzfWBcbn1cblxuLy8gQ0hFQ0sgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gY2hlY2tCb3VuZHMgKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGlmIChidWZbb2Zmc2V0XSA9PT0gdW5kZWZpbmVkIHx8IGJ1ZltvZmZzZXQgKyBieXRlTGVuZ3RoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCBidWYubGVuZ3RoIC0gKGJ5dGVMZW5ndGggKyAxKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ludEJJICh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikge1xuICAgIGNvbnN0IG4gPSB0eXBlb2YgbWluID09PSAnYmlnaW50JyA/ICduJyA6ICcnXG4gICAgbGV0IHJhbmdlXG4gICAgaWYgKGJ5dGVMZW5ndGggPiAzKSB7XG4gICAgICBpZiAobWluID09PSAwIHx8IG1pbiA9PT0gQmlnSW50KDApKSB7XG4gICAgICAgIHJhbmdlID0gYD49IDAke259IGFuZCA8IDIke259ICoqICR7KGJ5dGVMZW5ndGggKyAxKSAqIDh9JHtufWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlID0gYD49IC0oMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOCAtIDF9JHtufSkgYW5kIDwgMiAqKiBgICtcbiAgICAgICAgICAgICAgICBgJHsoYnl0ZUxlbmd0aCArIDEpICogOCAtIDF9JHtufWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2UgPSBgPj0gJHttaW59JHtufSBhbmQgPD0gJHttYXh9JHtufWBcbiAgICB9XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKCd2YWx1ZScsIHJhbmdlLCB2YWx1ZSlcbiAgfVxuICBjaGVja0JvdW5kcyhidWYsIG9mZnNldCwgYnl0ZUxlbmd0aClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIgKHZhbHVlLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfSU5WQUxJRF9BUkdfVFlQRShuYW1lLCAnbnVtYmVyJywgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRzRXJyb3IgKHZhbHVlLCBsZW5ndGgsIHR5cGUpIHtcbiAgaWYgKE1hdGguZmxvb3IodmFsdWUpICE9PSB2YWx1ZSkge1xuICAgIHZhbGlkYXRlTnVtYmVyKHZhbHVlLCB0eXBlKVxuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLCAnYW4gaW50ZWdlcicsIHZhbHVlKVxuICB9XG5cbiAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUygpXG4gIH1cblxuICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UodHlwZSB8fCAnb2Zmc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA+PSAke3R5cGUgPyAxIDogMH0gYW5kIDw9ICR7bGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSlcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5jb25zdCBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXisvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHRha2VzIGVxdWFsIHNpZ25zIGFzIGVuZCBvZiB0aGUgQmFzZTY0IGVuY29kaW5nXG4gIHN0ciA9IHN0ci5zcGxpdCgnPScpWzBdXG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgbGV0IGNvZGVQb2ludFxuICBjb25zdCBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIGxldCBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICBjb25zdCBieXRlcyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgbGV0IGMsIGhpLCBsb1xuICBjb25zdCBieXRlQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG4vLyBBcnJheUJ1ZmZlciBvciBVaW50OEFycmF5IG9iamVjdHMgZnJvbSBvdGhlciBjb250ZXh0cyAoaS5lLiBpZnJhbWVzKSBkbyBub3QgcGFzc1xuLy8gdGhlIGBpbnN0YW5jZW9mYCBjaGVjayBidXQgdGhleSBzaG91bGQgYmUgdHJlYXRlZCBhcyBvZiB0aGF0IHR5cGUuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNjZcbmZ1bmN0aW9uIGlzSW5zdGFuY2UgKG9iaiwgdHlwZSkge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgdHlwZSB8fFxuICAgIChvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPSBudWxsICYmXG4gICAgICBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gdHlwZS5uYW1lKVxufVxuZnVuY3Rpb24gbnVtYmVySXNOYU4gKG9iaikge1xuICAvLyBGb3IgSUUxMSBzdXBwb3J0XG4gIHJldHVybiBvYmogIT09IG9iaiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG4vLyBDcmVhdGUgbG9va3VwIHRhYmxlIGZvciBgdG9TdHJpbmcoJ2hleCcpYFxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMjE5XG5jb25zdCBoZXhTbGljZUxvb2t1cFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgY29uc3QgdGFibGUgPSBuZXcgQXJyYXkoMjU2KVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICBjb25zdCBpMTYgPSBpICogMTZcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIHRhYmxlW2kxNiArIGpdID0gYWxwaGFiZXRbaV0gKyBhbHBoYWJldFtqXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFibGVcbn0pKClcblxuLy8gUmV0dXJuIG5vdCBmdW5jdGlvbiB3aXRoIEVycm9yIGlmIEJpZ0ludCBub3Qgc3VwcG9ydGVkXG5mdW5jdGlvbiBkZWZpbmVCaWdJbnRNZXRob2QgKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgOiBmblxufVxuXG5mdW5jdGlvbiBCdWZmZXJCaWdJbnROb3REZWZpbmVkICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdCaWdJbnQgbm90IHN1cHBvcnRlZCcpXG59XG4iLCIndXNlIHN0cmljdCdcblxuLyoqIEB0eXBlIHt7IHRleHRFbmNvZGVyOiBUZXh0RW5jb2RlciwgdGV4dERlY29kZXI6IFRleHREZWNvZGVyIH18bnVsbH0gKi9cbmxldCBsYXp5ID0gbnVsbFxuXG4vKipcbiAqIEdldCBzZW1pLWdsb2JhbCBpbnN0YW5jZXMgb2YgVGV4dEVuY29kZXIgYW5kIFRleHREZWNvZGVyLlxuICogQHJldHVybnMge3sgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXIgfX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChsYXp5ID09PSBudWxsKSB7XG4gICAgbGF6eSA9IHtcbiAgICAgIHRleHRFbmNvZGVyOiBuZXcgVGV4dEVuY29kZXIoKSxcbiAgICAgIHRleHREZWNvZGVyOiBuZXcgVGV4dERlY29kZXIoKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYXp5XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgZm9ybWF0cyA9IG5ldyBTZXQoWydidWZmZXInLCAndmlldycsICd1dGY4J10pXG5cbi8qKlxuICogQHRlbXBsYXRlIFRJbiwgVEZvcm1hdCwgVE91dFxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIEVuY29kaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7SUVuY29kaW5nPFRJbixURm9ybWF0LFRPdXQ+fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIC8qKiBAdHlwZSB7KGRhdGE6IFRJbikgPT4gVEZvcm1hdH0gKi9cbiAgICB0aGlzLmVuY29kZSA9IG9wdGlvbnMuZW5jb2RlIHx8IHRoaXMuZW5jb2RlXG5cbiAgICAvKiogQHR5cGUgeyhkYXRhOiBURm9ybWF0KSA9PiBUT3V0fSAqL1xuICAgIHRoaXMuZGVjb2RlID0gb3B0aW9ucy5kZWNvZGUgfHwgdGhpcy5kZWNvZGVcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLm5hbWVcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgdGhpcy5mb3JtYXRcblxuICAgIGlmICh0eXBlb2YgdGhpcy5lbmNvZGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2VuY29kZScgcHJvcGVydHkgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmRlY29kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnZGVjb2RlJyBwcm9wZXJ0eSBtdXN0IGJlIGEgZnVuY3Rpb25cIilcbiAgICB9XG5cbiAgICB0aGlzLmVuY29kZSA9IHRoaXMuZW5jb2RlLmJpbmQodGhpcylcbiAgICB0aGlzLmRlY29kZSA9IHRoaXMuZGVjb2RlLmJpbmQodGhpcylcblxuICAgIGlmICh0eXBlb2YgdGhpcy5uYW1lICE9PSAnc3RyaW5nJyB8fCB0aGlzLm5hbWUgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICduYW1lJyBwcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nXCIpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZvcm1hdCAhPT0gJ3N0cmluZycgfHwgIWZvcm1hdHMuaGFzKHRoaXMuZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnZm9ybWF0JyBwcm9wZXJ0eSBtdXN0IGJlIG9uZSBvZiAnYnVmZmVyJywgJ3ZpZXcnLCAndXRmOCdcIilcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVWaWV3VHJhbnNjb2Rlcikge1xuICAgICAgdGhpcy5jcmVhdGVWaWV3VHJhbnNjb2RlciA9IG9wdGlvbnMuY3JlYXRlVmlld1RyYW5zY29kZXJcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVCdWZmZXJUcmFuc2NvZGVyKSB7XG4gICAgICB0aGlzLmNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgPSBvcHRpb25zLmNyZWF0ZUJ1ZmZlclRyYW5zY29kZXJcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVVVEY4VHJhbnNjb2Rlcikge1xuICAgICAgdGhpcy5jcmVhdGVVVEY4VHJhbnNjb2RlciA9IG9wdGlvbnMuY3JlYXRlVVRGOFRyYW5zY29kZXJcbiAgICB9XG4gIH1cblxuICBnZXQgY29tbW9uTmFtZSAoKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAodGhpcy5uYW1lLnNwbGl0KCcrJylbMF0pXG4gIH1cblxuICAvKiogQHJldHVybiB7QnVmZmVyRm9ybWF0PFRJbixUT3V0Pn0gKi9cbiAgY3JlYXRlQnVmZmVyVHJhbnNjb2RlciAoKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBFbmNvZGluZyAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgdHJhbnNjb2RlZCB0byAnYnVmZmVyJ2AsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9FTkNPRElOR19OT1RfU1VQUE9SVEVEJ1xuICAgIH0pXG4gIH1cblxuICAvKiogQHJldHVybiB7Vmlld0Zvcm1hdDxUSW4sVE91dD59ICovXG4gIGNyZWF0ZVZpZXdUcmFuc2NvZGVyICgpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYEVuY29kaW5nICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSB0cmFuc2NvZGVkIHRvICd2aWV3J2AsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9FTkNPRElOR19OT1RfU1VQUE9SVEVEJ1xuICAgIH0pXG4gIH1cblxuICAvKiogQHJldHVybiB7VVRGOEZvcm1hdDxUSW4sVE91dD59ICovXG4gIGNyZWF0ZVVURjhUcmFuc2NvZGVyICgpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYEVuY29kaW5nICcke3RoaXMubmFtZX0nIGNhbm5vdCBiZSB0cmFuc2NvZGVkIHRvICd1dGY4J2AsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9FTkNPRElOR19OT1RfU1VQUE9SVEVEJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0cy5FbmNvZGluZyA9IEVuY29kaW5nXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9lbmNvZGluZycpLklFbmNvZGluZzxUSW4sVEZvcm1hdCxUT3V0Pn0gSUVuY29kaW5nXG4gKiBAdGVtcGxhdGUgVEluLCBURm9ybWF0LCBUT3V0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Zvcm1hdHMnKS5CdWZmZXJGb3JtYXQ8VEluLFRPdXQ+fSBCdWZmZXJGb3JtYXRcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRPdXRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZm9ybWF0cycpLlZpZXdGb3JtYXQ8VEluLFRPdXQ+fSBWaWV3Rm9ybWF0XG4gKiBAdGVtcGxhdGUgVEluLCBUT3V0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Zvcm1hdHMnKS5VVEY4Rm9ybWF0PFRJbixUT3V0Pn0gVVRGOEZvcm1hdFxuICogQHRlbXBsYXRlIFRJbiwgVE91dFxuICovXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBCdWZmZXIgfSA9IHJlcXVpcmUoJ2J1ZmZlcicpIHx8IHt9XG5jb25zdCB7IEVuY29kaW5nIH0gPSByZXF1aXJlKCcuL2VuY29kaW5nJylcbmNvbnN0IHRleHRFbmRlYyA9IHJlcXVpcmUoJy4vdGV4dC1lbmRlYycpXG5cbi8qKlxuICogQHRlbXBsYXRlIFRJbiwgVE91dFxuICogQGV4dGVuZHMge0VuY29kaW5nPFRJbixCdWZmZXIsVE91dD59XG4gKi9cbmNsYXNzIEJ1ZmZlckZvcm1hdCBleHRlbmRzIEVuY29kaW5nIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T21pdDxJRW5jb2Rpbmc8VEluLCBCdWZmZXIsIFRPdXQ+LCAnZm9ybWF0Jz59IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoeyAuLi5vcHRpb25zLCBmb3JtYXQ6ICdidWZmZXInIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZVZpZXdUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IFZpZXdGb3JtYXQoe1xuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSwgLy8gQnVmZmVyIGlzIGEgdmlldyAoVUludDhBcnJheSlcbiAgICAgIGRlY29kZTogKGRhdGEpID0+IHRoaXMuZGVjb2RlKFxuICAgICAgICBCdWZmZXIuZnJvbShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpXG4gICAgICApLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfSt2aWV3YFxuICAgIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuLyoqXG4gKiBAZXh0ZW5kcyB7RW5jb2Rpbmc8VEluLFVpbnQ4QXJyYXksVE91dD59XG4gKiBAdGVtcGxhdGUgVEluLCBUT3V0XG4gKi9cbmNsYXNzIFZpZXdGb3JtYXQgZXh0ZW5kcyBFbmNvZGluZyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09taXQ8SUVuY29kaW5nPFRJbiwgVWludDhBcnJheSwgVE91dD4sICdmb3JtYXQnPn0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7IC4uLm9wdGlvbnMsIGZvcm1hdDogJ3ZpZXcnIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgICAgIGVuY29kZTogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZW5jb2RlKGRhdGEpXG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbSh2aWV3LmJ1ZmZlciwgdmlldy5ieXRlT2Zmc2V0LCB2aWV3LmJ5dGVMZW5ndGgpXG4gICAgICB9LFxuICAgICAgZGVjb2RlOiB0aGlzLmRlY29kZSwgLy8gQnVmZmVyIGlzIGEgdmlldyAoVUludDhBcnJheSlcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rYnVmZmVyYFxuICAgIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZVZpZXdUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbi8qKlxuICogQGV4dGVuZHMge0VuY29kaW5nPFRJbixzdHJpbmcsVE91dD59XG4gKiBAdGVtcGxhdGUgVEluLCBUT3V0XG4gKi9cbmNsYXNzIFVURjhGb3JtYXQgZXh0ZW5kcyBFbmNvZGluZyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09taXQ8SUVuY29kaW5nPFRJbiwgc3RyaW5nLCBUT3V0PiwgJ2Zvcm1hdCc+fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKHsgLi4ub3B0aW9ucywgZm9ybWF0OiAndXRmOCcgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlQnVmZmVyVHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXJGb3JtYXQoe1xuICAgICAgZW5jb2RlOiAoZGF0YSkgPT4gQnVmZmVyLmZyb20odGhpcy5lbmNvZGUoZGF0YSksICd1dGY4JyksXG4gICAgICBkZWNvZGU6IChkYXRhKSA9PiB0aGlzLmRlY29kZShkYXRhLnRvU3RyaW5nKCd1dGY4JykpLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfStidWZmZXJgXG4gICAgfSlcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgY3JlYXRlVmlld1RyYW5zY29kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dEVuY29kZXIsIHRleHREZWNvZGVyIH0gPSB0ZXh0RW5kZWMoKVxuXG4gICAgcmV0dXJuIG5ldyBWaWV3Rm9ybWF0KHtcbiAgICAgIGVuY29kZTogKGRhdGEpID0+IHRleHRFbmNvZGVyLmVuY29kZSh0aGlzLmVuY29kZShkYXRhKSksXG4gICAgICBkZWNvZGU6IChkYXRhKSA9PiB0aGlzLmRlY29kZSh0ZXh0RGVjb2Rlci5kZWNvZGUoZGF0YSkpLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfSt2aWV3YFxuICAgIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZVVURjhUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmV4cG9ydHMuQnVmZmVyRm9ybWF0ID0gQnVmZmVyRm9ybWF0XG5leHBvcnRzLlZpZXdGb3JtYXQgPSBWaWV3Rm9ybWF0XG5leHBvcnRzLlVURjhGb3JtYXQgPSBVVEY4Rm9ybWF0XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9lbmNvZGluZycpLklFbmNvZGluZzxUSW4sVEZvcm1hdCxUT3V0Pn0gSUVuY29kaW5nXG4gKiBAdGVtcGxhdGUgVEluLCBURm9ybWF0LCBUT3V0XG4gKi9cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEJ1ZmZlciB9ID0gcmVxdWlyZSgnYnVmZmVyJykgfHwgeyBCdWZmZXI6IHsgaXNCdWZmZXI6ICgpID0+IGZhbHNlIH0gfVxuY29uc3QgeyB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIgfSA9IHJlcXVpcmUoJy4vdGV4dC1lbmRlYycpKClcbmNvbnN0IHsgQnVmZmVyRm9ybWF0LCBWaWV3Rm9ybWF0LCBVVEY4Rm9ybWF0IH0gPSByZXF1aXJlKCcuL2Zvcm1hdHMnKVxuXG4vKiogQHR5cGUgezxUPih2OiBUKSA9PiB2fSAqL1xuY29uc3QgaWRlbnRpdHkgPSAodikgPT4gdlxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5ncycpLnV0Zjh9XG4gKi9cbmV4cG9ydHMudXRmOCA9IG5ldyBVVEY4Rm9ybWF0KHtcbiAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIE9uIG5vZGUgMTYuOS4xIGJ1ZmZlci50b1N0cmluZygpIGlzIDV4IGZhc3RlciB0aGFuIFRleHREZWNvZGVyXG4gICAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKVxuICAgICAgPyBkYXRhLnRvU3RyaW5nKCd1dGY4JylcbiAgICAgIDogQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpXG4gICAgICAgID8gdGV4dERlY29kZXIuZGVjb2RlKGRhdGEpXG4gICAgICAgIDogU3RyaW5nKGRhdGEpXG4gIH0sXG4gIGRlY29kZTogaWRlbnRpdHksXG4gIG5hbWU6ICd1dGY4JyxcbiAgY3JlYXRlVmlld1RyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgVmlld0Zvcm1hdCh7XG4gICAgICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBkYXRhIDogdGV4dEVuY29kZXIuZW5jb2RlKGRhdGEpXG4gICAgICB9LFxuICAgICAgZGVjb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGV4dERlY29kZXIuZGVjb2RlKGRhdGEpXG4gICAgICB9LFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfSt2aWV3YFxuICAgIH0pXG4gIH0sXG4gIGNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgICAgIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKVxuICAgICAgICAgID8gZGF0YVxuICAgICAgICAgIDogQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpXG4gICAgICAgICAgICA/IEJ1ZmZlci5mcm9tKGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aClcbiAgICAgICAgICAgIDogQnVmZmVyLmZyb20oU3RyaW5nKGRhdGEpLCAndXRmOCcpXG4gICAgICB9LFxuICAgICAgZGVjb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS50b1N0cmluZygndXRmOCcpXG4gICAgICB9LFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfStidWZmZXJgXG4gICAgfSlcbiAgfVxufSlcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9lbmNvZGluZ3MnKS5qc29ufVxuICovXG5leHBvcnRzLmpzb24gPSBuZXcgVVRGOEZvcm1hdCh7XG4gIGVuY29kZTogSlNPTi5zdHJpbmdpZnksXG4gIGRlY29kZTogSlNPTi5wYXJzZSxcbiAgbmFtZTogJ2pzb24nXG59KVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5ncycpLmJ1ZmZlcn1cbiAqL1xuZXhwb3J0cy5idWZmZXIgPSBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoZGF0YSlcbiAgICAgID8gZGF0YVxuICAgICAgOiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSlcbiAgICAgICAgPyBCdWZmZXIuZnJvbShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpXG4gICAgICAgIDogQnVmZmVyLmZyb20oU3RyaW5nKGRhdGEpLCAndXRmOCcpXG4gIH0sXG4gIGRlY29kZTogaWRlbnRpdHksXG4gIG5hbWU6ICdidWZmZXInLFxuICBjcmVhdGVWaWV3VHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBWaWV3Rm9ybWF0KHtcbiAgICAgIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IGRhdGEgOiBCdWZmZXIuZnJvbShTdHJpbmcoZGF0YSksICd1dGY4JylcbiAgICAgIH0sXG4gICAgICBkZWNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpXG4gICAgICB9LFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfSt2aWV3YFxuICAgIH0pXG4gIH1cbn0pXG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZW5jb2RpbmdzJykudmlld31cbiAqL1xuZXhwb3J0cy52aWV3ID0gbmV3IFZpZXdGb3JtYXQoe1xuICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IGRhdGEgOiB0ZXh0RW5jb2Rlci5lbmNvZGUoZGF0YSlcbiAgfSxcbiAgZGVjb2RlOiBpZGVudGl0eSxcbiAgbmFtZTogJ3ZpZXcnLFxuICBjcmVhdGVCdWZmZXJUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gICAgICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoZGF0YSlcbiAgICAgICAgICA/IGRhdGFcbiAgICAgICAgICA6IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKVxuICAgICAgICAgICAgPyBCdWZmZXIuZnJvbShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICA6IEJ1ZmZlci5mcm9tKFN0cmluZyhkYXRhKSwgJ3V0ZjgnKVxuICAgICAgfSxcbiAgICAgIGRlY29kZTogaWRlbnRpdHksXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K2J1ZmZlcmBcbiAgICB9KVxuICB9XG59KVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5ncycpLmhleH1cbiAqL1xuZXhwb3J0cy5oZXggPSBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoZGF0YSkgPyBkYXRhIDogQnVmZmVyLmZyb20oU3RyaW5nKGRhdGEpLCAnaGV4JylcbiAgfSxcbiAgZGVjb2RlOiBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnaGV4JylcbiAgfSxcbiAgbmFtZTogJ2hleCdcbn0pXG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZW5jb2RpbmdzJykuYmFzZTY0fVxuICovXG5leHBvcnRzLmJhc2U2NCA9IG5ldyBCdWZmZXJGb3JtYXQoe1xuICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSA/IGRhdGEgOiBCdWZmZXIuZnJvbShTdHJpbmcoZGF0YSksICdiYXNlNjQnKVxuICB9LFxuICBkZWNvZGU6IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKVxuICB9LFxuICBuYW1lOiAnYmFzZTY0J1xufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCBlbmNvZGluZ3MgPSByZXF1aXJlKCcuL2xpYi9lbmNvZGluZ3MnKVxuY29uc3QgeyBFbmNvZGluZyB9ID0gcmVxdWlyZSgnLi9saWIvZW5jb2RpbmcnKVxuY29uc3QgeyBCdWZmZXJGb3JtYXQsIFZpZXdGb3JtYXQsIFVURjhGb3JtYXQgfSA9IHJlcXVpcmUoJy4vbGliL2Zvcm1hdHMnKVxuXG5jb25zdCBrRm9ybWF0cyA9IFN5bWJvbCgnZm9ybWF0cycpXG5jb25zdCBrRW5jb2RpbmdzID0gU3ltYm9sKCdlbmNvZGluZ3MnKVxuY29uc3QgdmFsaWRGb3JtYXRzID0gbmV3IFNldChbJ2J1ZmZlcicsICd2aWV3JywgJ3V0ZjgnXSlcblxuLyoqIEB0ZW1wbGF0ZSBUICovXG5jbGFzcyBUcmFuc2NvZGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7QXJyYXk8J2J1ZmZlcid8J3ZpZXcnfCd1dGY4Jz59IGZvcm1hdHNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChmb3JtYXRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1hdHMpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50ICdmb3JtYXRzJyBtdXN0IGJlIGFuIGFycmF5XCIpXG4gICAgfSBlbHNlIGlmICghZm9ybWF0cy5ldmVyeShmID0+IHZhbGlkRm9ybWF0cy5oYXMoZikpKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBvbmx5IG9ubHkgc3VwcG9ydCBhbGlhc2VzIGluIGtleS0gYW5kIHZhbHVlRW5jb2Rpbmcgb3B0aW9ucyAod2hlcmUgd2UgYWxyZWFkeSBkaWQpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRm9ybWF0IG11c3QgYmUgb25lIG9mICdidWZmZXInLCAndmlldycsICd1dGY4J1wiKVxuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7TWFwPHN0cmluZ3xNaXhlZEVuY29kaW5nPGFueSwgYW55LCBhbnk+LCBFbmNvZGluZzxhbnksIGFueSwgYW55Pj59ICovXG4gICAgdGhpc1trRW5jb2RpbmdzXSA9IG5ldyBNYXAoKVxuICAgIHRoaXNba0Zvcm1hdHNdID0gbmV3IFNldChmb3JtYXRzKVxuXG4gICAgLy8gUmVnaXN0ZXIgZW5jb2RpbmdzIChkb25lIGVhcmx5IGluIG9yZGVyIHRvIHBvcHVsYXRlIGVuY29kaW5ncygpKVxuICAgIGZvciAoY29uc3QgayBpbiBlbmNvZGluZ3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZW5jb2RpbmcoaylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWY6IGFzc2VydGlvbiAqL1xuICAgICAgICBpZiAoZXJyLmNvZGUgIT09ICdMRVZFTF9FTkNPRElOR19OT1RfU1VQUE9SVEVEJykgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtBcnJheTxFbmNvZGluZzxhbnksVCxhbnk+Pn1cbiAgICovXG4gIGVuY29kaW5ncyAoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh0aGlzW2tFbmNvZGluZ3NdLnZhbHVlcygpKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xNaXhlZEVuY29kaW5nPGFueSwgYW55LCBhbnk+fSBlbmNvZGluZ1xuICAgKiBAcmV0dXJucyB7RW5jb2Rpbmc8YW55LCBULCBhbnk+fVxuICAgKi9cbiAgZW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gICAgbGV0IHJlc29sdmVkID0gdGhpc1trRW5jb2RpbmdzXS5nZXQoZW5jb2RpbmcpXG5cbiAgICBpZiAocmVzb2x2ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgZW5jb2RpbmcgIT09ICcnKSB7XG4gICAgICAgIHJlc29sdmVkID0gbG9va3VwW2VuY29kaW5nXVxuXG4gICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYEVuY29kaW5nICcke2VuY29kaW5nfScgaXMgbm90IGZvdW5kYCwge1xuICAgICAgICAgICAgY29kZTogJ0xFVkVMX0VOQ09ESU5HX05PVF9GT1VORCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ29iamVjdCcgfHwgZW5jb2RpbmcgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50ICdlbmNvZGluZycgbXVzdCBiZSBhIHN0cmluZyBvciBvYmplY3RcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmVkID0gZnJvbShlbmNvZGluZylcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBuYW1lLCBmb3JtYXQgfSA9IHJlc29sdmVkXG5cbiAgICAgIGlmICghdGhpc1trRm9ybWF0c10uaGFzKGZvcm1hdCkpIHtcbiAgICAgICAgaWYgKHRoaXNba0Zvcm1hdHNdLmhhcygndmlldycpKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZC5jcmVhdGVWaWV3VHJhbnNjb2RlcigpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpc1trRm9ybWF0c10uaGFzKCdidWZmZXInKSkge1xuICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWQuY3JlYXRlQnVmZmVyVHJhbnNjb2RlcigpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpc1trRm9ybWF0c10uaGFzKCd1dGY4JykpIHtcbiAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkLmNyZWF0ZVVURjhUcmFuc2NvZGVyKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYEVuY29kaW5nICcke25hbWV9JyBjYW5ub3QgYmUgdHJhbnNjb2RlZGAsIHtcbiAgICAgICAgICAgIGNvZGU6ICdMRVZFTF9FTkNPRElOR19OT1RfU1VQUE9SVEVEJ1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBrIG9mIFtlbmNvZGluZywgbmFtZSwgcmVzb2x2ZWQubmFtZSwgcmVzb2x2ZWQuY29tbW9uTmFtZV0pIHtcbiAgICAgICAgdGhpc1trRW5jb2RpbmdzXS5zZXQoaywgcmVzb2x2ZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVkXG4gIH1cbn1cblxuZXhwb3J0cy5UcmFuc2NvZGVyID0gVHJhbnNjb2RlclxuXG4vKipcbiAqIEBwYXJhbSB7TWl4ZWRFbmNvZGluZzxhbnksIGFueSwgYW55Pn0gb3B0aW9uc1xuICogQHJldHVybnMge0VuY29kaW5nPGFueSwgYW55LCBhbnk+fVxuICovXG5mdW5jdGlvbiBmcm9tIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRW5jb2RpbmcpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgLy8gTG9vc2VseSB0eXBlZCBmb3IgZWNvc3lzdGVtIGNvbXBhdGliaWxpdHlcbiAgY29uc3QgbWF5YmVUeXBlID0gJ3R5cGUnIGluIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMudHlwZSA9PT0gJ3N0cmluZycgPyBvcHRpb25zLnR5cGUgOiB1bmRlZmluZWRcbiAgY29uc3QgbmFtZSA9IG9wdGlvbnMubmFtZSB8fCBtYXliZVR5cGUgfHwgYGFub255bW91cy0ke2Fub255bW91c0NvdW50Kyt9YFxuXG4gIHN3aXRjaCAoZGV0ZWN0Rm9ybWF0KG9wdGlvbnMpKSB7XG4gICAgY2FzZSAndmlldyc6IHJldHVybiBuZXcgVmlld0Zvcm1hdCh7IC4uLm9wdGlvbnMsIG5hbWUgfSlcbiAgICBjYXNlICd1dGY4JzogcmV0dXJuIG5ldyBVVEY4Rm9ybWF0KHsgLi4ub3B0aW9ucywgbmFtZSB9KVxuICAgIGNhc2UgJ2J1ZmZlcic6IHJldHVybiBuZXcgQnVmZmVyRm9ybWF0KHsgLi4ub3B0aW9ucywgbmFtZSB9KVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGb3JtYXQgbXVzdCBiZSBvbmUgb2YgJ2J1ZmZlcicsICd2aWV3JywgJ3V0ZjgnXCIpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSWYgZm9ybWF0IGlzIG5vdCBwcm92aWRlZCwgZmFsbGJhY2sgdG8gZGV0ZWN0aW5nIGBsZXZlbC1jb2RlY2BcbiAqIG9yIGBtdWx0aWZvcm1hdHNgIGVuY29kaW5ncywgZWxzZSBhc3N1bWUgYSBmb3JtYXQgb2YgYnVmZmVyLlxuICogQHBhcmFtIHtNaXhlZEVuY29kaW5nPGFueSwgYW55LCBhbnk+fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBkZXRlY3RGb3JtYXQgKG9wdGlvbnMpIHtcbiAgaWYgKCdmb3JtYXQnIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBvcHRpb25zLmZvcm1hdFxuICB9IGVsc2UgaWYgKCdidWZmZXInIGluIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMuYnVmZmVyID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5idWZmZXIgPyAnYnVmZmVyJyA6ICd1dGY4JyAvLyBsZXZlbC1jb2RlY1xuICB9IGVsc2UgaWYgKCdjb2RlJyBpbiBvcHRpb25zICYmIE51bWJlci5pc0ludGVnZXIob3B0aW9ucy5jb2RlKSkge1xuICAgIHJldHVybiAndmlldycgLy8gbXVsdGlmb3JtYXRzXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdidWZmZXInXG4gIH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYi9lbmNvZGluZycpLk1peGVkRW5jb2Rpbmc8VEluLFRGb3JtYXQsVE91dD59IE1peGVkRW5jb2RpbmdcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRGb3JtYXQsIFRPdXRcbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgRW5jb2Rpbmc8YW55LCBhbnksIGFueT4+fVxuICovXG5jb25zdCBhbGlhc2VzID0ge1xuICBiaW5hcnk6IGVuY29kaW5ncy5idWZmZXIsXG4gICd1dGYtOCc6IGVuY29kaW5ncy51dGY4XG59XG5cbi8qKlxuICogQHR5cGUge09iamVjdC48c3RyaW5nLCBFbmNvZGluZzxhbnksIGFueSwgYW55Pj59XG4gKi9cbmNvbnN0IGxvb2t1cCA9IHtcbiAgLi4uZW5jb2RpbmdzLFxuICAuLi5hbGlhc2VzXG59XG5cbmxldCBhbm9ueW1vdXNDb3VudCA9IDBcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3Qga0Vycm9ycyA9IFN5bWJvbCgna0Vycm9ycycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVycm9ycykge1xuICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKGRlZmluZWQpXG5cbiAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHJldHVyblxuICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGVycm9yc1swXVxuXG4gIHJldHVybiBuZXcgQ29tYmluZWRFcnJvcihlcnJvcnMpXG59XG5cbmNsYXNzIENvbWJpbmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvcnMpIHtcbiAgICBjb25zdCB1bmlxdWUgPSBuZXcgU2V0KGVycm9ycy5tYXAoZ2V0TWVzc2FnZSkuZmlsdGVyKEJvb2xlYW4pKVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBBcnJheS5mcm9tKHVuaXF1ZSkuam9pbignOyAnKVxuXG4gICAgc3VwZXIobWVzc2FnZSlcblxuICAgIHZhbHVlKHRoaXMsICduYW1lJywgJ0NvbWJpbmVkRXJyb3InKVxuICAgIHZhbHVlKHRoaXMsIGtFcnJvcnMsIGVycm9ycylcblxuICAgIGdldHRlcih0aGlzLCAnc3RhY2snLCAoKSA9PiBlcnJvcnMubWFwKGdldFN0YWNrKS5qb2luKCdcXG5cXG4nKSlcbiAgICBnZXR0ZXIodGhpcywgJ3RyYW5zaWVudCcsICgpID0+IGVycm9ycy5sZW5ndGggPiAwICYmIGVycm9ycy5ldmVyeSh0cmFuc2llbnQpKVxuICAgIGdldHRlcih0aGlzLCAnZXhwZWN0ZWQnLCAoKSA9PiBlcnJvcnMubGVuZ3RoID4gMCAmJiBlcnJvcnMuZXZlcnkoZXhwZWN0ZWQpKVxuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0gKCkge1xuICAgIHJldHVybiB0aGlzW2tFcnJvcnNdW1N5bWJvbC5pdGVyYXRvcl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbHVlIChvYmosIHByb3AsIHZhbHVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHsgdmFsdWUgfSlcbn1cblxuZnVuY3Rpb24gZ2V0dGVyIChvYmosIHByb3AsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7IGdldCB9KVxufVxuXG5mdW5jdGlvbiBkZWZpbmVkIChlcnIpIHtcbiAgcmV0dXJuIGVyciAhPSBudWxsXG59XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2UgKGVycikge1xuICByZXR1cm4gZXJyLm1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0U3RhY2sgKGVycikge1xuICByZXR1cm4gZXJyLnN0YWNrXG59XG5cbmZ1bmN0aW9uIHRyYW5zaWVudCAoZXJyKSB7XG4gIHJldHVybiBlcnIudHJhbnNpZW50ID09PSB0cnVlXG59XG5cbmZ1bmN0aW9uIGV4cGVjdGVkIChlcnIpIHtcbiAgcmV0dXJuIGVyci5leHBlY3RlZCA9PT0gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IGRlcHJlY2F0aW9ucyA9IG5ldyBTZXQoKVxuXG5leHBvcnRzLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucywgZGVmKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucyAhPT0gbnVsbCkge1xuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICBpZiAoZGVmICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmXG4gIH1cblxuICByZXR1cm4ge31cbn1cblxuZXhwb3J0cy5lbXB0eU9wdGlvbnMgPSBPYmplY3QuZnJlZXplKHt9KVxuZXhwb3J0cy5ub29wID0gZnVuY3Rpb24gKCkge31cbmV4cG9ydHMucmVzb2x2ZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKClcblxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBpZiAoIWRlcHJlY2F0aW9ucy5oYXMobWVzc2FnZSkpIHtcbiAgICBkZXByZWNhdGlvbnMuYWRkKG1lc3NhZ2UpXG5cbiAgICAvLyBBdm9pZCBwb2x5ZmlsbHNcbiAgICBjb25zdCBjID0gZ2xvYmFsVGhpcy5jb25zb2xlXG5cbiAgICBpZiAodHlwZW9mIGMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjLndhcm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGMud2FybihuZXcgTW9kdWxlRXJyb3IobWVzc2FnZSwgeyBjb2RlOiAnTEVWRUxfTEVHQUNZJyB9KSlcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5cbmNsYXNzIEFib3J0RXJyb3IgZXh0ZW5kcyBNb2R1bGVFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChjYXVzZSkge1xuICAgIHN1cGVyKCdPcGVyYXRpb24gaGFzIGJlZW4gYWJvcnRlZCcsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9BQk9SVEVEJyxcbiAgICAgIGNhdXNlXG4gICAgfSlcbiAgfVxuXG4gIC8vIFNldCBuYW1lIHRvIEFib3J0RXJyb3IgZm9yIHdlYiBjb21wYXRpYmlsaXR5LiBTZWU6XG4gIC8vIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jYWJvcnRpbmctb25nb2luZy1hY3Rpdml0aWVzXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9wdWxsLzM1OTExI2Rpc2N1c3Npb25fcjUxNTc3OTMwNlxuICBnZXQgbmFtZSAoKSB7XG4gICAgcmV0dXJuICdBYm9ydEVycm9yJ1xuICB9XG59XG5cbmV4cG9ydHMuQWJvcnRFcnJvciA9IEFib3J0RXJyb3JcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCBjb21iaW5lRXJyb3JzID0gcmVxdWlyZSgnbWF5YmUtY29tYmluZS1lcnJvcnMnKVxuY29uc3QgeyBnZXRPcHRpb25zLCBlbXB0eU9wdGlvbnMsIG5vb3AgfSA9IHJlcXVpcmUoJy4vbGliL2NvbW1vbicpXG5jb25zdCB7IEFib3J0RXJyb3IgfSA9IHJlcXVpcmUoJy4vbGliL2Vycm9ycycpXG5cbmNvbnN0IGtXb3JraW5nID0gU3ltYm9sKCd3b3JraW5nJylcbmNvbnN0IGtEZWNvZGVPbmUgPSBTeW1ib2woJ2RlY29kZU9uZScpXG5jb25zdCBrRGVjb2RlTWFueSA9IFN5bWJvbCgnZGVjb2RlTWFueScpXG5jb25zdCBrU2lnbmFsID0gU3ltYm9sKCdzaWduYWwnKVxuY29uc3Qga1BlbmRpbmdDbG9zZSA9IFN5bWJvbCgncGVuZGluZ0Nsb3NlJylcbmNvbnN0IGtDbG9zaW5nUHJvbWlzZSA9IFN5bWJvbCgnY2xvc2luZ1Byb21pc2UnKVxuY29uc3Qga0tleUVuY29kaW5nID0gU3ltYm9sKCdrZXlFbmNvZGluZycpXG5jb25zdCBrVmFsdWVFbmNvZGluZyA9IFN5bWJvbCgndmFsdWVFbmNvZGluZycpXG5jb25zdCBrS2V5cyA9IFN5bWJvbCgna2V5cycpXG5jb25zdCBrVmFsdWVzID0gU3ltYm9sKCd2YWx1ZXMnKVxuY29uc3Qga0xpbWl0ID0gU3ltYm9sKCdsaW1pdCcpXG5jb25zdCBrQ291bnQgPSBTeW1ib2woJ2NvdW50JylcbmNvbnN0IGtFbmRlZCA9IFN5bWJvbCgnZW5kZWQnKVxuXG4vLyBUaGlzIGNsYXNzIGlzIGFuIGludGVybmFsIHV0aWxpdHkgZm9yIGNvbW1vbiBmdW5jdGlvbmFsaXR5IGJldHdlZW4gQWJzdHJhY3RJdGVyYXRvcixcbi8vIEFic3RyYWN0S2V5SXRlcmF0b3IgYW5kIEFic3RyYWN0VmFsdWVJdGVyYXRvci4gSXQncyBub3QgZXhwb3J0ZWQuXG5jbGFzcyBDb21tb25JdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZGIgIT09ICdvYmplY3QnIHx8IGRiID09PSBudWxsKSB7XG4gICAgICBjb25zdCBoaW50ID0gZGIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgZGJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGFic3RyYWN0LWxldmVsIGRhdGFiYXNlLCByZWNlaXZlZCAke2hpbnR9YClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvcHRpb25zIG9iamVjdCcpXG4gICAgfVxuXG4gICAgdGhpc1trV29ya2luZ10gPSBmYWxzZVxuICAgIHRoaXNba1BlbmRpbmdDbG9zZV0gPSBudWxsXG4gICAgdGhpc1trQ2xvc2luZ1Byb21pc2VdID0gbnVsbFxuICAgIHRoaXNba0tleUVuY29kaW5nXSA9IG9wdGlvbnNba0tleUVuY29kaW5nXVxuICAgIHRoaXNba1ZhbHVlRW5jb2RpbmddID0gb3B0aW9uc1trVmFsdWVFbmNvZGluZ11cbiAgICB0aGlzW2tMaW1pdF0gPSBOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMubGltaXQpICYmIG9wdGlvbnMubGltaXQgPj0gMCA/IG9wdGlvbnMubGltaXQgOiBJbmZpbml0eVxuICAgIHRoaXNba0NvdW50XSA9IDBcbiAgICB0aGlzW2tTaWduYWxdID0gb3B0aW9ucy5zaWduYWwgIT0gbnVsbCA/IG9wdGlvbnMuc2lnbmFsIDogbnVsbFxuXG4gICAgLy8gRW5kaW5nIG1lYW5zIHJlYWNoaW5nIHRoZSBuYXR1cmFsIGVuZCBvZiB0aGUgZGF0YSBhbmQgKHVubGlrZSBjbG9zaW5nKSB0aGF0IGNhblxuICAgIC8vIGJlIHJlc2V0IGJ5IHNlZWsoKSwgdW5sZXNzIHRoZSBsaW1pdCB3YXMgcmVhY2hlZC5cbiAgICB0aGlzW2tFbmRlZF0gPSBmYWxzZVxuXG4gICAgdGhpcy5kYiA9IGRiXG4gICAgdGhpcy5kYi5hdHRhY2hSZXNvdXJjZSh0aGlzKVxuICB9XG5cbiAgZ2V0IGNvdW50ICgpIHtcbiAgICByZXR1cm4gdGhpc1trQ291bnRdXG4gIH1cblxuICBnZXQgbGltaXQgKCkge1xuICAgIHJldHVybiB0aGlzW2tMaW1pdF1cbiAgfVxuXG4gIGFzeW5jIG5leHQgKCkge1xuICAgIHN0YXJ0V29yayh0aGlzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzW2tFbmRlZF0gfHwgdGhpc1trQ291bnRdID49IHRoaXNba0xpbWl0XSkge1xuICAgICAgICB0aGlzW2tFbmRlZF0gPSB0cnVlXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgbGV0IGl0ZW0gPSBhd2FpdCB0aGlzLl9uZXh0KClcblxuICAgICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzW2tFbmRlZF0gPSB0cnVlXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaXRlbSA9IHRoaXNba0RlY29kZU9uZV0oaXRlbSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgSXRlcmF0b3JEZWNvZGVFcnJvcihlcnIpXG4gICAgICB9XG5cbiAgICAgIHRoaXNba0NvdW50XSsrXG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRXb3JrKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX25leHQgKCkge31cblxuICBhc3luYyBuZXh0diAoc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihzaXplKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCAnc2l6ZScgbXVzdCBiZSBhbiBpbnRlZ2VyXCIpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKVxuXG4gICAgaWYgKHNpemUgPCAxKSBzaXplID0gMVxuICAgIGlmICh0aGlzW2tMaW1pdF0gPCBJbmZpbml0eSkgc2l6ZSA9IE1hdGgubWluKHNpemUsIHRoaXNba0xpbWl0XSAtIHRoaXNba0NvdW50XSlcblxuICAgIHN0YXJ0V29yayh0aGlzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzW2tFbmRlZF0gfHwgc2l6ZSA8PSAwKSB7XG4gICAgICAgIHRoaXNba0VuZGVkXSA9IHRydWVcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgdGhpcy5fbmV4dHYoc2l6ZSwgb3B0aW9ucylcblxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzW2tFbmRlZF0gPSB0cnVlXG4gICAgICAgIHJldHVybiBpdGVtc1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzW2tEZWNvZGVNYW55XShpdGVtcylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgSXRlcmF0b3JEZWNvZGVFcnJvcihlcnIpXG4gICAgICB9XG5cbiAgICAgIHRoaXNba0NvdW50XSArPSBpdGVtcy5sZW5ndGhcbiAgICAgIHJldHVybiBpdGVtc1xuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRXb3JrKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX25leHR2IChzaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYWNjID0gW11cblxuICAgIHdoaWxlIChhY2MubGVuZ3RoIDwgc2l6ZSkge1xuICAgICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuX25leHQob3B0aW9ucylcblxuICAgICAgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY2MucHVzaChpdGVtKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTXVzdCB0cmFjayB0aGlzIGhlcmUgYmVjYXVzZSB3ZSdyZSBkaXJlY3RseSBjYWxsaW5nIF9uZXh0KClcbiAgICAgICAgdGhpc1trRW5kZWRdID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfVxuXG4gIGFzeW5jIGFsbCAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucylcbiAgICBzdGFydFdvcmsodGhpcylcblxuICAgIHRyeSB7XG4gICAgICBpZiAodGhpc1trRW5kZWRdIHx8IHRoaXNba0NvdW50XSA+PSB0aGlzW2tMaW1pdF0pIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgdGhpcy5fYWxsKG9wdGlvbnMpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXNba0RlY29kZU1hbnldKGl0ZW1zKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBJdGVyYXRvckRlY29kZUVycm9yKGVycilcbiAgICAgIH1cblxuICAgICAgdGhpc1trQ291bnRdICs9IGl0ZW1zLmxlbmd0aFxuICAgICAgcmV0dXJuIGl0ZW1zXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBlbmRXb3JrKHRoaXMpXG4gICAgICBhd2FpdCBkZXN0cm95KHRoaXMsIGVycilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpc1trRW5kZWRdID0gdHJ1ZVxuXG4gICAgICBpZiAodGhpc1trV29ya2luZ10pIHtcbiAgICAgICAgZW5kV29yayh0aGlzKVxuICAgICAgICBhd2FpdCB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBfYWxsIChvcHRpb25zKSB7XG4gICAgLy8gTXVzdCBjb3VudCBoZXJlIGJlY2F1c2Ugd2UncmUgZGlyZWN0bHkgY2FsbGluZyBfbmV4dHYoKVxuICAgIGxldCBjb3VudCA9IHRoaXNba0NvdW50XVxuXG4gICAgY29uc3QgYWNjID0gW11cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAvLyBOb3QgY29uZmlndXJhYmxlLCBiZWNhdXNlIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3B0aW1pemUgX2FsbCgpLlxuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXNba0xpbWl0XSA8IEluZmluaXR5ID8gTWF0aC5taW4oMWUzLCB0aGlzW2tMaW1pdF0gLSBjb3VudCkgOiAxZTNcblxuICAgICAgaWYgKHNpemUgPD0gMCkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgdGhpcy5fbmV4dHYoc2l6ZSwgb3B0aW9ucylcblxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGFjYy5wdXNoLmFwcGx5KGFjYywgaXRlbXMpXG4gICAgICBjb3VudCArPSBpdGVtcy5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBzZWVrICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpXG5cbiAgICBpZiAodGhpc1trQ2xvc2luZ1Byb21pc2VdICE9PSBudWxsKSB7XG4gICAgICAvLyBEb24ndCB0aHJvdyBoZXJlLCB0byBiZSBraW5kIHRvIGltcGxlbWVudGF0aW9ucyB0aGF0IHdyYXBcbiAgICAgIC8vIGFub3RoZXIgZGIgYW5kIGRvbid0IG5lY2Vzc2FyaWx5IGNvbnRyb2wgd2hlbiB0aGUgZGIgaXMgY2xvc2VkXG4gICAgfSBlbHNlIGlmICh0aGlzW2tXb3JraW5nXSkge1xuICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBpcyBidXN5OiBjYW5ub3QgY2FsbCBzZWVrKCkgdW50aWwgbmV4dCgpIGhhcyBjb21wbGV0ZWQnLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9JVEVSQVRPUl9CVVNZJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmRiLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcgfHwgdGhpc1trS2V5RW5jb2RpbmddKVxuICAgICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG5cbiAgICAgIGlmIChvcHRpb25zLmtleUVuY29kaW5nICE9PSBrZXlGb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywga2V5RW5jb2Rpbmc6IGtleUZvcm1hdCB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcHBlZCA9IHRoaXMuZGIucHJlZml4S2V5KGtleUVuY29kaW5nLmVuY29kZSh0YXJnZXQpLCBrZXlGb3JtYXQsIGZhbHNlKVxuICAgICAgdGhpcy5fc2VlayhtYXBwZWQsIG9wdGlvbnMpXG5cbiAgICAgIC8vIElmIF9zZWVrKCkgd2FzIHN1Y2Nlc3NmdWxsLCBtb3JlIGRhdGEgbWF5IGJlIGF2YWlsYWJsZS5cbiAgICAgIHRoaXNba0VuZGVkXSA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgX3NlZWsgKHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgZG9lcyBub3Qgc3VwcG9ydCBzZWVrKCknLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfTk9UX1NVUFBPUlRFRCdcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgY2xvc2UgKCkge1xuICAgIGlmICh0aGlzW2tDbG9zaW5nUHJvbWlzZV0gIT09IG51bGwpIHtcbiAgICAgIC8vIEZpcnN0IGNhbGxlciBvZiBjbG9zZSgpIGlzIHJlc3BvbnNpYmxlIGZvciBlcnJvclxuICAgICAgcmV0dXJuIHRoaXNba0Nsb3NpbmdQcm9taXNlXS5jYXRjaChub29wKVxuICAgIH1cblxuICAgIC8vIFdyYXAgdG8gYXZvaWQgcmFjZSBpc3N1ZXMgb24gcmVjdXJzaXZlIGNhbGxzXG4gICAgdGhpc1trQ2xvc2luZ1Byb21pc2VdID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpc1trUGVuZGluZ0Nsb3NlXSA9ICgpID0+IHtcbiAgICAgICAgdGhpc1trUGVuZGluZ0Nsb3NlXSA9IG51bGxcbiAgICAgICAgcHJpdmF0ZUNsb3NlKHRoaXMpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBJZiB3b3JraW5nIHdlJ2xsIGRlbGF5IGNsb3NpbmcsIGJ1dCBzdGlsbCBoYW5kbGUgdGhlIGNsb3NlIGVycm9yIChpZiBhbnkpIGhlcmVcbiAgICBpZiAoIXRoaXNba1dvcmtpbmddKSB7XG4gICAgICB0aGlzW2tQZW5kaW5nQ2xvc2VdKClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1trQ2xvc2luZ1Byb21pc2VdXG4gIH1cblxuICBhc3luYyBfY2xvc2UgKCkge31cblxuICBhc3luYyAqIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgaXRlbVxuXG4gICAgICB3aGlsZSAoKGl0ZW0gPSAoYXdhaXQgdGhpcy5uZXh0KCkpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHlpZWxkIGl0ZW1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGF3YWl0IGRlc3Ryb3kodGhpcywgZXJyKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBhd2FpdCB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cblxuLy8gRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHRoaXMgY2xhc3MgaXMgbm90ICh5ZXQpIGNhbGxlZCBBYnN0cmFjdEVudHJ5SXRlcmF0b3IuXG5jbGFzcyBBYnN0cmFjdEl0ZXJhdG9yIGV4dGVuZHMgQ29tbW9uSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcbiAgICB0aGlzW2tLZXlzXSA9IG9wdGlvbnMua2V5cyAhPT0gZmFsc2VcbiAgICB0aGlzW2tWYWx1ZXNdID0gb3B0aW9ucy52YWx1ZXMgIT09IGZhbHNlXG4gIH1cblxuICBba0RlY29kZU9uZV0gKGVudHJ5KSB7XG4gICAgY29uc3Qga2V5ID0gZW50cnlbMF1cbiAgICBjb25zdCB2YWx1ZSA9IGVudHJ5WzFdXG5cbiAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVudHJ5WzBdID0gdGhpc1trS2V5c10gPyB0aGlzW2tLZXlFbmNvZGluZ10uZGVjb2RlKGtleSkgOiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZW50cnlbMV0gPSB0aGlzW2tWYWx1ZXNdID8gdGhpc1trVmFsdWVFbmNvZGluZ10uZGVjb2RlKHZhbHVlKSA6IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiBlbnRyeVxuICB9XG5cbiAgW2tEZWNvZGVNYW55XSAoZW50cmllcykge1xuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpc1trS2V5RW5jb2RpbmddXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXNba1ZhbHVlRW5jb2RpbmddXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdXG4gICAgICBjb25zdCB2YWx1ZSA9IGVudHJ5WzFdXG5cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkgZW50cnlbMF0gPSB0aGlzW2tLZXlzXSA/IGtleUVuY29kaW5nLmRlY29kZShrZXkpIDogdW5kZWZpbmVkXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkgZW50cnlbMV0gPSB0aGlzW2tWYWx1ZXNdID8gdmFsdWVFbmNvZGluZy5kZWNvZGUodmFsdWUpIDogdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEFic3RyYWN0S2V5SXRlcmF0b3IgZXh0ZW5kcyBDb21tb25JdGVyYXRvciB7XG4gIFtrRGVjb2RlT25lXSAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXNba0tleUVuY29kaW5nXS5kZWNvZGUoa2V5KVxuICB9XG5cbiAgW2tEZWNvZGVNYW55XSAoa2V5cykge1xuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpc1trS2V5RW5jb2RpbmddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkga2V5c1tpXSA9IGtleUVuY29kaW5nLmRlY29kZShrZXkpXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEFic3RyYWN0VmFsdWVJdGVyYXRvciBleHRlbmRzIENvbW1vbkl0ZXJhdG9yIHtcbiAgW2tEZWNvZGVPbmVdICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzW2tWYWx1ZUVuY29kaW5nXS5kZWNvZGUodmFsdWUpXG4gIH1cblxuICBba0RlY29kZU1hbnldICh2YWx1ZXMpIHtcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpc1trVmFsdWVFbmNvZGluZ11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXVxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHZhbHVlc1tpXSA9IHZhbHVlRW5jb2RpbmcuZGVjb2RlKHZhbHVlKVxuICAgIH1cbiAgfVxufVxuXG4vLyBJbnRlcm5hbCB1dGlsaXR5LCBub3QgdHlwZWQgb3IgZXhwb3J0ZWRcbmNsYXNzIEl0ZXJhdG9yRGVjb2RlRXJyb3IgZXh0ZW5kcyBNb2R1bGVFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChjYXVzZSkge1xuICAgIHN1cGVyKCdJdGVyYXRvciBjb3VsZCBub3QgZGVjb2RlIGRhdGEnLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfREVDT0RFX0VSUk9SJyxcbiAgICAgIGNhdXNlXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBzdGFydFdvcmsgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgaWYgKGl0ZXJhdG9yW2tDbG9zaW5nUHJvbWlzZV0gIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGlzIG5vdCBvcGVuOiBjYW5ub3QgcmVhZCBhZnRlciBjbG9zZSgpJywge1xuICAgICAgY29kZTogJ0xFVkVMX0lURVJBVE9SX05PVF9PUEVOJ1xuICAgIH0pXG4gIH0gZWxzZSBpZiAoaXRlcmF0b3Jba1dvcmtpbmddKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBpcyBidXN5OiBjYW5ub3QgcmVhZCB1bnRpbCBwcmV2aW91cyByZWFkIGhhcyBjb21wbGV0ZWQnLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfSVRFUkFUT1JfQlVTWSdcbiAgICB9KVxuICB9IGVsc2UgaWYgKGl0ZXJhdG9yW2tTaWduYWxdICE9PSBudWxsICYmIGl0ZXJhdG9yW2tTaWduYWxdLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQWJvcnRFcnJvcigpXG4gIH1cblxuICBpdGVyYXRvcltrV29ya2luZ10gPSB0cnVlXG59XG5cbmNvbnN0IGVuZFdvcmsgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgaXRlcmF0b3Jba1dvcmtpbmddID0gZmFsc2VcblxuICBpZiAoaXRlcmF0b3Jba1BlbmRpbmdDbG9zZV0gIT09IG51bGwpIHtcbiAgICBpdGVyYXRvcltrUGVuZGluZ0Nsb3NlXSgpXG4gIH1cbn1cblxuY29uc3QgcHJpdmF0ZUNsb3NlID0gYXN5bmMgZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gIGF3YWl0IGl0ZXJhdG9yLl9jbG9zZSgpXG4gIGl0ZXJhdG9yLmRiLmRldGFjaFJlc291cmNlKGl0ZXJhdG9yKVxufVxuXG5jb25zdCBkZXN0cm95ID0gYXN5bmMgZnVuY3Rpb24gKGl0ZXJhdG9yLCBlcnIpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBpdGVyYXRvci5jbG9zZSgpXG4gIH0gY2F0Y2ggKGNsb3NlRXJyKSB7XG4gICAgdGhyb3cgY29tYmluZUVycm9ycyhbZXJyLCBjbG9zZUVycl0pXG4gIH1cblxuICB0aHJvdyBlcnJcbn1cblxuLy8gRXhwb3NlZCBzbyB0aGF0IEFic3RyYWN0TGV2ZWwgY2FuIHNldCB0aGVzZSBvcHRpb25zXG5BYnN0cmFjdEl0ZXJhdG9yLmtleUVuY29kaW5nID0ga0tleUVuY29kaW5nXG5BYnN0cmFjdEl0ZXJhdG9yLnZhbHVlRW5jb2RpbmcgPSBrVmFsdWVFbmNvZGluZ1xuXG5leHBvcnRzLkFic3RyYWN0SXRlcmF0b3IgPSBBYnN0cmFjdEl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0S2V5SXRlcmF0b3IgPSBBYnN0cmFjdEtleUl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0VmFsdWVJdGVyYXRvciA9IEFic3RyYWN0VmFsdWVJdGVyYXRvclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQWJzdHJhY3RLZXlJdGVyYXRvciwgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuLi9hYnN0cmFjdC1pdGVyYXRvcicpXG5cbmNvbnN0IGtJdGVyYXRvciA9IFN5bWJvbCgnaXRlcmF0b3InKVxuY29uc3Qga0hhbmRsZU9uZSA9IFN5bWJvbCgnaGFuZGxlT25lJylcbmNvbnN0IGtIYW5kbGVNYW55ID0gU3ltYm9sKCdoYW5kbGVNYW55JylcblxuY2xhc3MgRGVmYXVsdEtleUl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RLZXlJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trSXRlcmF0b3JdID0gZGIuaXRlcmF0b3IoeyAuLi5vcHRpb25zLCBrZXlzOiB0cnVlLCB2YWx1ZXM6IGZhbHNlIH0pXG4gIH1cblxuICBba0hhbmRsZU9uZV0gKGVudHJ5KSB7XG4gICAgcmV0dXJuIGVudHJ5WzBdXG4gIH1cblxuICBba0hhbmRsZU1hbnldIChlbnRyaWVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbnRyaWVzW2ldID0gZW50cmllc1tpXVswXVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBEZWZhdWx0VmFsdWVJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0VmFsdWVJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trSXRlcmF0b3JdID0gZGIuaXRlcmF0b3IoeyAuLi5vcHRpb25zLCBrZXlzOiBmYWxzZSwgdmFsdWVzOiB0cnVlIH0pXG4gIH1cblxuICBba0hhbmRsZU9uZV0gKGVudHJ5KSB7XG4gICAgcmV0dXJuIGVudHJ5WzFdXG4gIH1cblxuICBba0hhbmRsZU1hbnldIChlbnRyaWVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlbnRyaWVzW2ldID0gZW50cmllc1tpXVsxXVxuICAgIH1cbiAgfVxufVxuXG5mb3IgKGNvbnN0IEl0ZXJhdG9yIG9mIFtEZWZhdWx0S2V5SXRlcmF0b3IsIERlZmF1bHRWYWx1ZUl0ZXJhdG9yXSkge1xuICBJdGVyYXRvci5wcm90b3R5cGUuX25leHQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0ubmV4dCgpXG4gICAgcmV0dXJuIGVudHJ5ID09PSB1bmRlZmluZWQgPyBlbnRyeSA6IHRoaXNba0hhbmRsZU9uZV0oZW50cnkpXG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX25leHR2ID0gYXN5bmMgZnVuY3Rpb24gKHNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLm5leHR2KHNpemUsIG9wdGlvbnMpXG4gICAgdGhpc1trSGFuZGxlTWFueV0oZW50cmllcylcbiAgICByZXR1cm4gZW50cmllc1xuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9hbGwgPSBhc3luYyBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0uYWxsKG9wdGlvbnMpXG4gICAgdGhpc1trSGFuZGxlTWFueV0oZW50cmllcylcbiAgICByZXR1cm4gZW50cmllc1xuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9zZWVrID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXNba0l0ZXJhdG9yXS5zZWVrKHRhcmdldCwgb3B0aW9ucylcbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fY2xvc2UgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0l0ZXJhdG9yXS5jbG9zZSgpXG4gIH1cbn1cblxuLy8gSW50ZXJuYWwgdXRpbGl0aWVzLCBzaG91bGQgYmUgdHlwZWQgYXMgQWJzdHJhY3RLZXlJdGVyYXRvciBhbmQgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yXG5leHBvcnRzLkRlZmF1bHRLZXlJdGVyYXRvciA9IERlZmF1bHRLZXlJdGVyYXRvclxuZXhwb3J0cy5EZWZhdWx0VmFsdWVJdGVyYXRvciA9IERlZmF1bHRWYWx1ZUl0ZXJhdG9yXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBBYnN0cmFjdEl0ZXJhdG9yLCBBYnN0cmFjdEtleUl0ZXJhdG9yLCBBYnN0cmFjdFZhbHVlSXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0LWl0ZXJhdG9yJylcbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcblxuY29uc3Qga051dCA9IFN5bWJvbCgnbnV0JylcbmNvbnN0IGtVbmRlZmVyID0gU3ltYm9sKCd1bmRlZmVyJylcbmNvbnN0IGtGYWN0b3J5ID0gU3ltYm9sKCdmYWN0b3J5JylcbmNvbnN0IGtTaWduYWxPcHRpb25zID0gU3ltYm9sKCdzaWduYWxPcHRpb25zJylcblxuY2xhc3MgRGVmZXJyZWRJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0SXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba051dF0gPSBudWxsXG4gICAgdGhpc1trRmFjdG9yeV0gPSAoKSA9PiBkYi5pdGVyYXRvcihvcHRpb25zKVxuICAgIHRoaXNba1NpZ25hbE9wdGlvbnNdID0geyBzaWduYWw6IG9wdGlvbnMuc2lnbmFsIH1cblxuICAgIHRoaXMuZGIuZGVmZXIoKCkgPT4gdGhpc1trVW5kZWZlcl0oKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gIH1cbn1cblxuY2xhc3MgRGVmZXJyZWRLZXlJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0S2V5SXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba051dF0gPSBudWxsXG4gICAgdGhpc1trRmFjdG9yeV0gPSAoKSA9PiBkYi5rZXlzKG9wdGlvbnMpXG4gICAgdGhpc1trU2lnbmFsT3B0aW9uc10gPSB7IHNpZ25hbDogb3B0aW9ucy5zaWduYWwgfVxuXG4gICAgdGhpcy5kYi5kZWZlcigoKSA9PiB0aGlzW2tVbmRlZmVyXSgpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgfVxufVxuXG5jbGFzcyBEZWZlcnJlZFZhbHVlSXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdFZhbHVlSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba051dF0gPSBudWxsXG4gICAgdGhpc1trRmFjdG9yeV0gPSAoKSA9PiBkYi52YWx1ZXMob3B0aW9ucylcbiAgICB0aGlzW2tTaWduYWxPcHRpb25zXSA9IHsgc2lnbmFsOiBvcHRpb25zLnNpZ25hbCB9XG5cbiAgICB0aGlzLmRiLmRlZmVyKCgpID0+IHRoaXNba1VuZGVmZXJdKCksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICB9XG59XG5cbmZvciAoY29uc3QgSXRlcmF0b3Igb2YgW0RlZmVycmVkSXRlcmF0b3IsIERlZmVycmVkS2V5SXRlcmF0b3IsIERlZmVycmVkVmFsdWVJdGVyYXRvcl0pIHtcbiAgSXRlcmF0b3IucHJvdG90eXBlW2tVbmRlZmVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYi5zdGF0dXMgPT09ICdvcGVuJykge1xuICAgICAgdGhpc1trTnV0XSA9IHRoaXNba0ZhY3RvcnldKClcbiAgICB9XG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX25leHQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXNba051dF0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW2tOdXRdLm5leHQoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYi5zdGF0dXMgPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGIuZGVmZXJBc3luYygoKSA9PiB0aGlzLl9uZXh0KCksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGlzIG5vdCBvcGVuOiBjYW5ub3QgY2FsbCBuZXh0KCkgYWZ0ZXIgY2xvc2UoKScsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0lURVJBVE9SX05PVF9PUEVOJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX25leHR2ID0gYXN5bmMgZnVuY3Rpb24gKHNpemUsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpc1trTnV0XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXNba051dF0ubmV4dHYoc2l6ZSwgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGIuc3RhdHVzID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRiLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5fbmV4dHYoc2l6ZSwgb3B0aW9ucyksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGlzIG5vdCBvcGVuOiBjYW5ub3QgY2FsbCBuZXh0digpIGFmdGVyIGNsb3NlKCknLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9JVEVSQVRPUl9OT1RfT1BFTidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9hbGwgPSBhc3luYyBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICh0aGlzW2tOdXRdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpc1trTnV0XS5hbGwoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYi5zdGF0dXMgPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGIuZGVmZXJBc3luYygoKSA9PiB0aGlzLl9hbGwob3B0aW9ucyksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGlzIG5vdCBvcGVuOiBjYW5ub3QgY2FsbCBhbGwoKSBhZnRlciBjbG9zZSgpJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfSVRFUkFUT1JfTk9UX09QRU4nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fc2VlayA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAodGhpc1trTnV0XSAhPT0gbnVsbCkge1xuICAgICAgLy8gVE9ETzogZXhwbGFpbiB3aHkgd2UgbmVlZCBfc2VlaygpIHJhdGhlciB0aGFuIHNlZWsoKSBoZXJlXG4gICAgICB0aGlzW2tOdXRdLl9zZWVrKHRhcmdldCwgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGIuc3RhdHVzID09PSAnb3BlbmluZycpIHtcbiAgICAgIHRoaXMuZGIuZGVmZXIoKCkgPT4gdGhpcy5fc2Vlayh0YXJnZXQsIG9wdGlvbnMpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgICB9XG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX2Nsb3NlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzW2tOdXRdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpc1trTnV0XS5jbG9zZSgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRiLnN0YXR1cyA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYi5kZWZlckFzeW5jKCgpID0+IHRoaXMuX2Nsb3NlKCkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRGVmZXJyZWRJdGVyYXRvciA9IERlZmVycmVkSXRlcmF0b3JcbmV4cG9ydHMuRGVmZXJyZWRLZXlJdGVyYXRvciA9IERlZmVycmVkS2V5SXRlcmF0b3JcbmV4cG9ydHMuRGVmZXJyZWRWYWx1ZUl0ZXJhdG9yID0gRGVmZXJyZWRWYWx1ZUl0ZXJhdG9yXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wcmVmaXhEZXNjZW5kYW50S2V5ID0gZnVuY3Rpb24gKGtleSwga2V5Rm9ybWF0LCBkZXNjZW5kYW50LCBhbmNlc3Rvcikge1xuICB3aGlsZSAoZGVzY2VuZGFudCAhPT0gbnVsbCAmJiBkZXNjZW5kYW50ICE9PSBhbmNlc3Rvcikge1xuICAgIGtleSA9IGRlc2NlbmRhbnQucHJlZml4S2V5KGtleSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgIGRlc2NlbmRhbnQgPSBkZXNjZW5kYW50LnBhcmVudFxuICB9XG5cbiAgcmV0dXJuIGtleVxufVxuXG4vLyBDaGVjayBpZiBkYiBpcyBhIGRlc2NlbmRhbnQgb2YgYW5jZXN0b3Jcbi8vIFRPRE86IG9wdGltaXplLCB3aGVuIHVzZWQgYWxvbmdzaWRlIHByZWZpeERlc2NlbmRhbnRLZXlcbi8vIHdoaWNoIG1lYW5zIHdlIHZpc2l0IHBhcmVudHMgdHdpY2UuXG5leHBvcnRzLmlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIChkYiwgYW5jZXN0b3IpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoZGIucGFyZW50ID09IG51bGwpIHJldHVybiBmYWxzZVxuICAgIGlmIChkYi5wYXJlbnQgPT09IGFuY2VzdG9yKSByZXR1cm4gdHJ1ZVxuICAgIGRiID0gZGIucGFyZW50XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IHByZWZpeERlc2NlbmRhbnRLZXksIGlzRGVzY2VuZGFudCB9ID0gcmVxdWlyZSgnLi9wcmVmaXhlcycpXG5cbmNvbnN0IGtEYiA9IFN5bWJvbCgnZGInKVxuY29uc3Qga1ByaXZhdGVPcGVyYXRpb25zID0gU3ltYm9sKCdwcml2YXRlT3BlcmF0aW9ucycpXG5jb25zdCBrUHVibGljT3BlcmF0aW9ucyA9IFN5bWJvbCgncHVibGljT3BlcmF0aW9ucycpXG5cbi8vIEFuIGludGVyZmFjZSBmb3IgcHJld3JpdGUgaG9vayBmdW5jdGlvbnMgdG8gYWRkIG9wZXJhdGlvbnNcbmNsYXNzIFByZXdyaXRlQmF0Y2gge1xuICBjb25zdHJ1Y3RvciAoZGIsIHByaXZhdGVPcGVyYXRpb25zLCBwdWJsaWNPcGVyYXRpb25zKSB7XG4gICAgdGhpc1trRGJdID0gZGJcblxuICAgIC8vIE5vdGU6IGlmIGZvciBkYi5iYXRjaChbXSksIHRoZXNlIGFycmF5cyBpbmNsdWRlIGlucHV0IG9wZXJhdGlvbnMgKG9yIGVtcHR5IHNsb3RzXG4gICAgLy8gZm9yIHRoZW0pIGJ1dCBpZiBmb3IgY2hhaW5lZCBiYXRjaCB0aGVuIGl0IGRvZXMgbm90LiBTbWFsbCBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuXG4gICAgdGhpc1trUHJpdmF0ZU9wZXJhdGlvbnNdID0gcHJpdmF0ZU9wZXJhdGlvbnNcbiAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSA9IHB1YmxpY09wZXJhdGlvbnNcbiAgfVxuXG4gIGFkZCAob3ApIHtcbiAgICBjb25zdCBpc1B1dCA9IG9wLnR5cGUgPT09ICdwdXQnXG4gICAgY29uc3QgZGVsZWdhdGVkID0gb3Auc3VibGV2ZWwgIT0gbnVsbFxuICAgIGNvbnN0IGRiID0gZGVsZWdhdGVkID8gb3Auc3VibGV2ZWwgOiB0aGlzW2tEYl1cblxuICAgIGNvbnN0IGtleUVycm9yID0gZGIuX2NoZWNrS2V5KG9wLmtleSlcbiAgICBpZiAoa2V5RXJyb3IgIT0gbnVsbCkgdGhyb3cga2V5RXJyb3JcblxuICAgIG9wLmtleUVuY29kaW5nID0gZGIua2V5RW5jb2Rpbmcob3Aua2V5RW5jb2RpbmcpXG5cbiAgICBpZiAoaXNQdXQpIHtcbiAgICAgIGNvbnN0IHZhbHVlRXJyb3IgPSBkYi5fY2hlY2tWYWx1ZShvcC52YWx1ZSlcbiAgICAgIGlmICh2YWx1ZUVycm9yICE9IG51bGwpIHRocm93IHZhbHVlRXJyb3JcblxuICAgICAgb3AudmFsdWVFbmNvZGluZyA9IGRiLnZhbHVlRW5jb2Rpbmcob3AudmFsdWVFbmNvZGluZylcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgIT09ICdkZWwnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBiYXRjaCBvcGVyYXRpb24gbXVzdCBoYXZlIGEgdHlwZSBwcm9wZXJ0eSB0aGF0IGlzICdwdXQnIG9yICdkZWwnXCIpXG4gICAgfVxuXG4gICAgLy8gRW5jb2RlIGRhdGEgZm9yIHByaXZhdGUgQVBJXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSBvcC5rZXlFbmNvZGluZ1xuICAgIGNvbnN0IHByZWVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUob3Aua2V5KVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuXG4gICAgLy8gSWYgdGhlIHN1YmxldmVsIGlzIG5vdCBhIGRlc2NlbmRhbnQgdGhlbiBmb3J3YXJkIHRoYXQgb3B0aW9uIHRvIHRoZSBwYXJlbnQgZGJcbiAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGVycm9uZW91c2x5IGFkZCBvdXIgb3duIHByZWZpeCB0byB0aGUga2V5IG9mIHRoZSBvcGVyYXRpb24uXG4gICAgY29uc3Qgc2libGluZ3MgPSBkZWxlZ2F0ZWQgJiYgIWlzRGVzY2VuZGFudChvcC5zdWJsZXZlbCwgdGhpc1trRGJdKSAmJiBvcC5zdWJsZXZlbCAhPT0gdGhpc1trRGJdXG4gICAgY29uc3QgZW5jb2RlZEtleSA9IGRlbGVnYXRlZCAmJiAhc2libGluZ3NcbiAgICAgID8gcHJlZml4RGVzY2VuZGFudEtleShwcmVlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIGRiLCB0aGlzW2tEYl0pXG4gICAgICA6IHByZWVuY29kZWRLZXlcblxuICAgIC8vIE9ubHkgcHJlZml4IG9uY2VcbiAgICBpZiAoZGVsZWdhdGVkICYmICFzaWJsaW5ncykge1xuICAgICAgb3Auc3VibGV2ZWwgPSBudWxsXG4gICAgfVxuXG4gICAgbGV0IHB1YmxpY09wZXJhdGlvbiA9IG51bGxcblxuICAgIC8vIElmIHRoZSBzdWJsZXZlbCBpcyBub3QgYSBkZXNjZW5kYW50IHRoZW4gd2Ugc2hvdWxkbid0IGVtaXQgZXZlbnRzXG4gICAgaWYgKHRoaXNba1B1YmxpY09wZXJhdGlvbnNdICE9PSBudWxsICYmICFzaWJsaW5ncykge1xuICAgICAgLy8gQ2xvbmUgb3AgYmVmb3JlIHdlIG11dGF0ZSBpdCBmb3IgdGhlIHByaXZhdGUgQVBJXG4gICAgICBwdWJsaWNPcGVyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcClcbiAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkS2V5ID0gZW5jb2RlZEtleVxuXG4gICAgICBpZiAoZGVsZWdhdGVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBlbWl0dGVkIGRhdGEgbWFrZXMgc2Vuc2UgaW4gdGhlIGNvbnRleHQgb2YgdGhpc1trRGJdXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXkgPSBlbmNvZGVkS2V5XG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXlFbmNvZGluZyA9IHRoaXNba0RiXS5rZXlFbmNvZGluZyhrZXlGb3JtYXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdLnB1c2gocHVibGljT3BlcmF0aW9uKVxuICAgIH1cblxuICAgIC8vIElmIHdlJ3JlIGZvcndhcmRpbmcgdGhlIHN1YmxldmVsIG9wdGlvbiB0aGVuIGRvbid0IHByZWZpeCB0aGUga2V5IHlldFxuICAgIG9wLmtleSA9IHNpYmxpbmdzID8gZW5jb2RlZEtleSA6IHRoaXNba0RiXS5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgIG9wLmtleUVuY29kaW5nID0ga2V5Rm9ybWF0XG5cbiAgICBpZiAoaXNQdXQpIHtcbiAgICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSBvcC52YWx1ZUVuY29kaW5nXG4gICAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSB2YWx1ZUVuY29kaW5nLmVuY29kZShvcC52YWx1ZSlcbiAgICAgIGNvbnN0IHZhbHVlRm9ybWF0ID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgICAgb3AudmFsdWUgPSBlbmNvZGVkVmFsdWVcbiAgICAgIG9wLnZhbHVlRW5jb2RpbmcgPSB2YWx1ZUZvcm1hdFxuXG4gICAgICBpZiAocHVibGljT3BlcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkVmFsdWUgPSBlbmNvZGVkVmFsdWVcblxuICAgICAgICBpZiAoZGVsZWdhdGVkKSB7XG4gICAgICAgICAgcHVibGljT3BlcmF0aW9uLnZhbHVlID0gZW5jb2RlZFZhbHVlXG4gICAgICAgICAgcHVibGljT3BlcmF0aW9uLnZhbHVlRW5jb2RpbmcgPSB0aGlzW2tEYl0udmFsdWVFbmNvZGluZyh2YWx1ZUZvcm1hdClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXNba1ByaXZhdGVPcGVyYXRpb25zXS5wdXNoKG9wKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuZXhwb3J0cy5QcmV3cml0ZUJhdGNoID0gUHJld3JpdGVCYXRjaFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvbWJpbmVFcnJvcnMgPSByZXF1aXJlKCdtYXliZS1jb21iaW5lLWVycm9ycycpXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCB7IGdldE9wdGlvbnMsIGVtcHR5T3B0aW9ucywgbm9vcCB9ID0gcmVxdWlyZSgnLi9saWIvY29tbW9uJylcbmNvbnN0IHsgcHJlZml4RGVzY2VuZGFudEtleSwgaXNEZXNjZW5kYW50IH0gPSByZXF1aXJlKCcuL2xpYi9wcmVmaXhlcycpXG5jb25zdCB7IFByZXdyaXRlQmF0Y2ggfSA9IHJlcXVpcmUoJy4vbGliL3ByZXdyaXRlLWJhdGNoJylcblxuY29uc3Qga1N0YXR1cyA9IFN5bWJvbCgnc3RhdHVzJylcbmNvbnN0IGtQdWJsaWNPcGVyYXRpb25zID0gU3ltYm9sKCdwdWJsaWNPcGVyYXRpb25zJylcbmNvbnN0IGtMZWdhY3lPcGVyYXRpb25zID0gU3ltYm9sKCdsZWdhY3lPcGVyYXRpb25zJylcbmNvbnN0IGtQcml2YXRlT3BlcmF0aW9ucyA9IFN5bWJvbCgncHJpdmF0ZU9wZXJhdGlvbnMnKVxuY29uc3Qga0Nsb3NlUHJvbWlzZSA9IFN5bWJvbCgnY2xvc2VQcm9taXNlJylcbmNvbnN0IGtMZW5ndGggPSBTeW1ib2woJ2xlbmd0aCcpXG5jb25zdCBrUHJld3JpdGVSdW4gPSBTeW1ib2woJ3ByZXdyaXRlUnVuJylcbmNvbnN0IGtQcmV3cml0ZUJhdGNoID0gU3ltYm9sKCdwcmV3cml0ZUJhdGNoJylcbmNvbnN0IGtQcmV3cml0ZURhdGEgPSBTeW1ib2woJ3ByZXdyaXRlRGF0YScpXG5jb25zdCBrQWRkTW9kZSA9IFN5bWJvbCgnYWRkTW9kZScpXG5cbmNsYXNzIEFic3RyYWN0Q2hhaW5lZEJhdGNoIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBkYiAhPT0gJ29iamVjdCcgfHwgZGIgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhpbnQgPSBkYiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBkYlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gYWJzdHJhY3QtbGV2ZWwgZGF0YWJhc2UsIHJlY2VpdmVkICR7aGludH1gKVxuICAgIH1cblxuICAgIGNvbnN0IGVuYWJsZVdyaXRlRXZlbnQgPSBkYi5saXN0ZW5lckNvdW50KCd3cml0ZScpID4gMFxuICAgIGNvbnN0IGVuYWJsZVByZXdyaXRlSG9vayA9ICFkYi5ob29rcy5wcmV3cml0ZS5ub29wXG5cbiAgICAvLyBPcGVyYXRpb25zIGZvciB3cml0ZSBldmVudC4gV2UgY2FuIHNraXAgcG9wdWxhdGluZyB0aGlzIGFycmF5IChhbmQgY2xvbmluZyBvZlxuICAgIC8vIG9wZXJhdGlvbnMsIHdoaWNoIGlzIHRoZSBleHBlbnNpdmUgcGFydCkgaWYgdGhlcmUgYXJlIDAgd3JpdGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdID0gZW5hYmxlV3JpdGVFdmVudCA/IFtdIDogbnVsbFxuXG4gICAgLy8gT3BlcmF0aW9ucyBmb3IgbGVnYWN5IGJhdGNoIGV2ZW50LiBJZiB1c2VyIG9wdGVkLWluIHRvIHdyaXRlIGV2ZW50IG9yIHByZXdyaXRlXG4gICAgLy8gaG9vaywgc2tpcCBsZWdhY3kgYmF0Y2ggZXZlbnQuIFdlIGNhbid0IHNraXAgdGhlIGJhdGNoIGV2ZW50IGJhc2VkIG9uIGxpc3RlbmVyXG4gICAgLy8gY291bnQsIGJlY2F1c2UgYSBsaXN0ZW5lciBtYXkgYmUgYWRkZWQgYmV0d2VlbiBwdXQoKSBvciBkZWwoKSBhbmQgd3JpdGUoKS5cbiAgICB0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSA9IGVuYWJsZVdyaXRlRXZlbnQgfHwgZW5hYmxlUHJld3JpdGVIb29rID8gbnVsbCA6IFtdXG5cbiAgICB0aGlzW2tMZW5ndGhdID0gMFxuICAgIHRoaXNba1N0YXR1c10gPSAnb3BlbidcbiAgICB0aGlzW2tDbG9zZVByb21pc2VdID0gbnVsbFxuICAgIHRoaXNba0FkZE1vZGVdID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpLmFkZCA9PT0gdHJ1ZVxuXG4gICAgaWYgKGVuYWJsZVByZXdyaXRlSG9vaykge1xuICAgICAgLy8gVXNlIHNlcGFyYXRlIGFycmF5cyB0byBjb2xsZWN0IG9wZXJhdGlvbnMgYWRkZWQgYnkgaG9vayBmdW5jdGlvbnMsIGJlY2F1c2VcbiAgICAgIC8vIHdlIHdhaXQgdG8gYXBwbHkgdGhvc2UgdW50aWwgd3JpdGUoKS4gU3RvcmUgdGhlc2UgYXJyYXlzIGluIFByZXdyaXRlRGF0YSB3aGljaFxuICAgICAgLy8gZXhpc3RzIHRvIHNlcGFyYXRlIGludGVybmFsIGRhdGEgZnJvbSB0aGUgcHVibGljIFByZXdyaXRlQmF0Y2ggaW50ZXJmYWNlLlxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBQcmV3cml0ZURhdGEoW10sIGVuYWJsZVdyaXRlRXZlbnQgPyBbXSA6IG51bGwpXG5cbiAgICAgIHRoaXNba1ByZXdyaXRlRGF0YV0gPSBkYXRhXG4gICAgICB0aGlzW2tQcmV3cml0ZUJhdGNoXSA9IG5ldyBQcmV3cml0ZUJhdGNoKGRiLCBkYXRhW2tQcml2YXRlT3BlcmF0aW9uc10sIGRhdGFba1B1YmxpY09wZXJhdGlvbnNdKVxuICAgICAgdGhpc1trUHJld3JpdGVSdW5dID0gZGIuaG9va3MucHJld3JpdGUucnVuIC8vIFRPRE86IGRvY3VtZW50IHdoeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2tQcmV3cml0ZURhdGFdID0gbnVsbFxuICAgICAgdGhpc1trUHJld3JpdGVCYXRjaF0gPSBudWxsXG4gICAgICB0aGlzW2tQcmV3cml0ZVJ1bl0gPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5kYiA9IGRiXG4gICAgdGhpcy5kYi5hdHRhY2hSZXNvdXJjZSh0aGlzKVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgaWYgKHRoaXNba1ByZXdyaXRlRGF0YV0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW2tMZW5ndGhdICsgdGhpc1trUHJld3JpdGVEYXRhXS5sZW5ndGhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXNba0xlbmd0aF1cbiAgICB9XG4gIH1cblxuICBwdXQgKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBhc3NlcnRTdGF0dXModGhpcylcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpXG5cbiAgICBjb25zdCBkZWxlZ2F0ZWQgPSBvcHRpb25zLnN1YmxldmVsICE9IG51bGxcbiAgICBjb25zdCBkYiA9IGRlbGVnYXRlZCA/IG9wdGlvbnMuc3VibGV2ZWwgOiB0aGlzLmRiXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBvcHRpb25zXG4gICAgY29uc3Qga2V5RXJyb3IgPSBkYi5fY2hlY2tLZXkoa2V5KVxuICAgIGNvbnN0IHZhbHVlRXJyb3IgPSBkYi5fY2hlY2tWYWx1ZSh2YWx1ZSlcblxuICAgIGlmIChrZXlFcnJvciAhPSBudWxsKSB0aHJvdyBrZXlFcnJvclxuICAgIGlmICh2YWx1ZUVycm9yICE9IG51bGwpIHRocm93IHZhbHVlRXJyb3JcblxuICAgIC8vIEF2b2lkIHNwcmVhZCBvcGVyYXRvciBiZWNhdXNlIG9mIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDQ1NDBcbiAgICBjb25zdCBvcCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgIHR5cGU6ICdwdXQnLFxuICAgICAga2V5LFxuICAgICAgdmFsdWUsXG4gICAgICBrZXlFbmNvZGluZzogZGIua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZyksXG4gICAgICB2YWx1ZUVuY29kaW5nOiBkYi52YWx1ZUVuY29kaW5nKG9wdGlvbnMudmFsdWVFbmNvZGluZylcbiAgICB9KVxuXG4gICAgaWYgKHRoaXNba1ByZXdyaXRlUnVuXSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gTm90ZTogd2UgY291bGQgaGF2ZSBjaG9zZW4gdG8gcmVjdXJzZSBoZXJlIHNvIHRoYXQgcHJld3JpdGVCYXRjaC5wdXQoKSB3b3VsZFxuICAgICAgICAvLyBjYWxsIHRoaXMucHV0KCkuIEJ1dCB0aGVuIG9wZXJhdGlvbnMgYWRkZWQgYnkgaG9vayBmdW5jdGlvbnMgd291bGQgYmUgaW5zZXJ0ZWRcbiAgICAgICAgLy8gYmVmb3JlIHJhdGhlciB0aGFuIGFmdGVyIHVzZXIgb3BlcmF0aW9ucy4gSW5zdGVhZCB3ZSBwcm9jZXNzIHRob3NlIG9wZXJhdGlvbnNcbiAgICAgICAgLy8gbGF6aWx5IGluIHdyaXRlKCkuIFRoaXMgZG9lcyBodXJ0IHRoZSBvbmx5IHBlcmZvcm1hbmNlIGJlbmVmaXQgYmVuZWZpdCBvZiBhXG4gICAgICAgIC8vIGNoYWluZWQgYmF0Y2ggdGhvdWdoLCB3aGljaCBpcyB0aGF0IGl0IGF2b2lkcyBibG9ja2luZyB0aGUgZXZlbnQgbG9vcCB3aXRoXG4gICAgICAgIC8vIG1vcmUgdGhhbiBvbmUgb3BlcmF0aW9uIGF0IGEgdGltZS4gT24gdGhlIG90aGVyIGhhbmQsIGlmIG9wZXJhdGlvbnMgYWRkZWQgYnlcbiAgICAgICAgLy8gaG9vayBmdW5jdGlvbnMgYXJlIGFkamFjZW50IChpLmUuIHNvcnRlZCkgY29tbWl0dGluZyB0aGVtIHNob3VsZCBiZSBmYXN0ZXIuXG4gICAgICAgIHRoaXNba1ByZXdyaXRlUnVuXShvcCwgdGhpc1trUHJld3JpdGVCYXRjaF0pXG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGVuY29kaW5ncyBhZ2FpbiBpbiBjYXNlIHRoZXkgd2VyZSBtb2RpZmllZFxuICAgICAgICBvcC5rZXlFbmNvZGluZyA9IGRiLmtleUVuY29kaW5nKG9wLmtleUVuY29kaW5nKVxuICAgICAgICBvcC52YWx1ZUVuY29kaW5nID0gZGIudmFsdWVFbmNvZGluZyhvcC52YWx1ZUVuY29kaW5nKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignVGhlIHByZXdyaXRlIGhvb2sgZmFpbGVkIG9uIGJhdGNoLnB1dCgpJywge1xuICAgICAgICAgIGNvZGU6ICdMRVZFTF9IT09LX0VSUk9SJyxcbiAgICAgICAgICBjYXVzZTogZXJyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW5jb2RlIGRhdGEgZm9yIHByaXZhdGUgQVBJXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSBvcC5rZXlFbmNvZGluZ1xuICAgIGNvbnN0IHByZWVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUob3Aua2V5KVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuXG4gICAgLy8gSWYgdGhlIHN1YmxldmVsIGlzIG5vdCBhIGRlc2NlbmRhbnQgdGhlbiBmb3J3YXJkIHRoYXQgb3B0aW9uIHRvIHRoZSBwYXJlbnQgZGJcbiAgICAvLyBzbyB0aGF0IHdlIGRvbid0IGVycm9uZW91c2x5IGFkZCBvdXIgb3duIHByZWZpeCB0byB0aGUga2V5IG9mIHRoZSBvcGVyYXRpb24uXG4gICAgY29uc3Qgc2libGluZ3MgPSBkZWxlZ2F0ZWQgJiYgIWlzRGVzY2VuZGFudChvcC5zdWJsZXZlbCwgdGhpcy5kYikgJiYgb3Auc3VibGV2ZWwgIT09IHRoaXMuZGJcbiAgICBjb25zdCBlbmNvZGVkS2V5ID0gZGVsZWdhdGVkICYmICFzaWJsaW5nc1xuICAgICAgPyBwcmVmaXhEZXNjZW5kYW50S2V5KHByZWVuY29kZWRLZXksIGtleUZvcm1hdCwgZGIsIHRoaXMuZGIpXG4gICAgICA6IHByZWVuY29kZWRLZXlcblxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSBvcC52YWx1ZUVuY29kaW5nXG4gICAgY29uc3QgZW5jb2RlZFZhbHVlID0gdmFsdWVFbmNvZGluZy5lbmNvZGUob3AudmFsdWUpXG4gICAgY29uc3QgdmFsdWVGb3JtYXQgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgLy8gT25seSBwcmVmaXggb25jZVxuICAgIGlmIChkZWxlZ2F0ZWQgJiYgIXNpYmxpbmdzKSB7XG4gICAgICBvcC5zdWJsZXZlbCA9IG51bGxcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgc3VibGV2ZWwgaXMgbm90IGEgZGVzY2VuZGFudCB0aGVuIHdlIHNob3VsZG4ndCBlbWl0IGV2ZW50c1xuICAgIGlmICh0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSAhPT0gbnVsbCAmJiAhc2libGluZ3MpIHtcbiAgICAgIC8vIENsb25lIG9wIGJlZm9yZSB3ZSBtdXRhdGUgaXQgZm9yIHRoZSBwcml2YXRlIEFQSVxuICAgICAgY29uc3QgcHVibGljT3BlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3ApXG4gICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZEtleSA9IGVuY29kZWRLZXlcbiAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkVmFsdWUgPSBlbmNvZGVkVmFsdWVcblxuICAgICAgaWYgKGRlbGVnYXRlZCkge1xuICAgICAgICAvLyBFbnN1cmUgZW1pdHRlZCBkYXRhIG1ha2VzIHNlbnNlIGluIHRoZSBjb250ZXh0IG9mIHRoaXMgZGJcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleSA9IGVuY29kZWRLZXlcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLnZhbHVlID0gZW5jb2RlZFZhbHVlXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXlFbmNvZGluZyA9IHRoaXMuZGIua2V5RW5jb2Rpbmcoa2V5Rm9ybWF0KVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24udmFsdWVFbmNvZGluZyA9IHRoaXMuZGIudmFsdWVFbmNvZGluZyh2YWx1ZUZvcm1hdClcbiAgICAgIH1cblxuICAgICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10ucHVzaChwdWJsaWNPcGVyYXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSAhPT0gbnVsbCAmJiAhc2libGluZ3MpIHtcbiAgICAgIGNvbnN0IGxlZ2FjeU9wZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsKVxuXG4gICAgICBsZWdhY3lPcGVyYXRpb24udHlwZSA9ICdwdXQnXG4gICAgICBsZWdhY3lPcGVyYXRpb24ua2V5ID0ga2V5XG4gICAgICBsZWdhY3lPcGVyYXRpb24udmFsdWUgPSB2YWx1ZVxuXG4gICAgICB0aGlzW2tMZWdhY3lPcGVyYXRpb25zXS5wdXNoKGxlZ2FjeU9wZXJhdGlvbilcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSdyZSBmb3J3YXJkaW5nIHRoZSBzdWJsZXZlbCBvcHRpb24gdGhlbiBkb24ndCBwcmVmaXggdGhlIGtleSB5ZXRcbiAgICBvcC5rZXkgPSBzaWJsaW5ncyA/IGVuY29kZWRLZXkgOiB0aGlzLmRiLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpXG4gICAgb3AudmFsdWUgPSBlbmNvZGVkVmFsdWVcbiAgICBvcC5rZXlFbmNvZGluZyA9IGtleUZvcm1hdFxuICAgIG9wLnZhbHVlRW5jb2RpbmcgPSB2YWx1ZUZvcm1hdFxuXG4gICAgaWYgKHRoaXNba0FkZE1vZGVdKSB7XG4gICAgICB0aGlzLl9hZGQob3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgXCJvcGVyYXRpb24gYXMgb3B0aW9uc1wiIHRyaWNrIGF2b2lkcyBmdXJ0aGVyIGNsb25pbmdcbiAgICAgIHRoaXMuX3B1dChvcC5rZXksIGVuY29kZWRWYWx1ZSwgb3ApXG4gICAgfVxuXG4gICAgLy8gSW5jcmVtZW50IG9ubHkgb24gc3VjY2Vzc1xuICAgIHRoaXNba0xlbmd0aF0rK1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBfcHV0IChrZXksIHZhbHVlLCBvcHRpb25zKSB7fVxuXG4gIGRlbCAoa2V5LCBvcHRpb25zKSB7XG4gICAgYXNzZXJ0U3RhdHVzKHRoaXMpXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKVxuXG4gICAgY29uc3QgZGVsZWdhdGVkID0gb3B0aW9ucy5zdWJsZXZlbCAhPSBudWxsXG4gICAgY29uc3QgZGIgPSBkZWxlZ2F0ZWQgPyBvcHRpb25zLnN1YmxldmVsIDogdGhpcy5kYlxuICAgIGNvbnN0IG9yaWdpbmFsID0gb3B0aW9uc1xuICAgIGNvbnN0IGtleUVycm9yID0gZGIuX2NoZWNrS2V5KGtleSlcblxuICAgIGlmIChrZXlFcnJvciAhPSBudWxsKSB0aHJvdyBrZXlFcnJvclxuXG4gICAgLy8gQXZvaWQgc3ByZWFkIG9wZXJhdG9yIGJlY2F1c2Ugb2YgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwNDU0MFxuICAgIGNvbnN0IG9wID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgdHlwZTogJ2RlbCcsXG4gICAgICBrZXksXG4gICAgICBrZXlFbmNvZGluZzogZGIua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICB9KVxuXG4gICAgaWYgKHRoaXNba1ByZXdyaXRlUnVuXSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpc1trUHJld3JpdGVSdW5dKG9wLCB0aGlzW2tQcmV3cml0ZUJhdGNoXSlcblxuICAgICAgICAvLyBOb3JtYWxpemUgZW5jb2RpbmcgYWdhaW4gaW4gY2FzZSBpdCB3YXMgbW9kaWZpZWRcbiAgICAgICAgb3Aua2V5RW5jb2RpbmcgPSBkYi5rZXlFbmNvZGluZyhvcC5rZXlFbmNvZGluZylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ1RoZSBwcmV3cml0ZSBob29rIGZhaWxlZCBvbiBiYXRjaC5kZWwoKScsIHtcbiAgICAgICAgICBjb2RlOiAnTEVWRUxfSE9PS19FUlJPUicsXG4gICAgICAgICAgY2F1c2U6IGVyclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuY29kZSBkYXRhIGZvciBwcml2YXRlIEFQSVxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gb3Aua2V5RW5jb2RpbmdcbiAgICBjb25zdCBwcmVlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKG9wLmtleSlcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBjb25zdCBlbmNvZGVkS2V5ID0gZGVsZWdhdGVkID8gcHJlZml4RGVzY2VuZGFudEtleShwcmVlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIGRiLCB0aGlzLmRiKSA6IHByZWVuY29kZWRLZXlcblxuICAgIC8vIFByZXZlbnQgZG91YmxlIHByZWZpeGluZ1xuICAgIGlmIChkZWxlZ2F0ZWQpIG9wLnN1YmxldmVsID0gbnVsbFxuXG4gICAgaWYgKHRoaXNba1B1YmxpY09wZXJhdGlvbnNdICE9PSBudWxsKSB7XG4gICAgICAvLyBDbG9uZSBvcCBiZWZvcmUgd2UgbXV0YXRlIGl0IGZvciB0aGUgcHJpdmF0ZSBBUElcbiAgICAgIGNvbnN0IHB1YmxpY09wZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9wKVxuICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRLZXkgPSBlbmNvZGVkS2V5XG5cbiAgICAgIGlmIChkZWxlZ2F0ZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIGVtaXR0ZWQgZGF0YSBtYWtlcyBzZW5zZSBpbiB0aGUgY29udGV4dCBvZiB0aGlzIGRiXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXkgPSBlbmNvZGVkS2V5XG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXlFbmNvZGluZyA9IHRoaXMuZGIua2V5RW5jb2Rpbmcoa2V5Rm9ybWF0KVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXS5wdXNoKHB1YmxpY09wZXJhdGlvbilcbiAgICB9IGVsc2UgaWYgKHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZWdhY3lPcGVyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbClcblxuICAgICAgbGVnYWN5T3BlcmF0aW9uLnR5cGUgPSAnZGVsJ1xuICAgICAgbGVnYWN5T3BlcmF0aW9uLmtleSA9IGtleVxuXG4gICAgICB0aGlzW2tMZWdhY3lPcGVyYXRpb25zXS5wdXNoKGxlZ2FjeU9wZXJhdGlvbilcbiAgICB9XG5cbiAgICBvcC5rZXkgPSB0aGlzLmRiLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpXG4gICAgb3Aua2V5RW5jb2RpbmcgPSBrZXlGb3JtYXRcblxuICAgIGlmICh0aGlzW2tBZGRNb2RlXSkge1xuICAgICAgdGhpcy5fYWRkKG9wKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIFwib3BlcmF0aW9uIGFzIG9wdGlvbnNcIiB0cmljayBhdm9pZHMgZnVydGhlciBjbG9uaW5nXG4gICAgICB0aGlzLl9kZWwob3Aua2V5LCBvcClcbiAgICB9XG5cbiAgICAvLyBJbmNyZW1lbnQgb25seSBvbiBzdWNjZXNzXG4gICAgdGhpc1trTGVuZ3RoXSsrXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIF9kZWwgKGtleSwgb3B0aW9ucykge31cblxuICBfYWRkIChvcCkge31cblxuICBjbGVhciAoKSB7XG4gICAgYXNzZXJ0U3RhdHVzKHRoaXMpXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgaWYgKHRoaXNba1B1YmxpY09wZXJhdGlvbnNdICE9PSBudWxsKSB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSA9IFtdXG4gICAgaWYgKHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdICE9PSBudWxsKSB0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSA9IFtdXG4gICAgaWYgKHRoaXNba1ByZXdyaXRlRGF0YV0gIT09IG51bGwpIHRoaXNba1ByZXdyaXRlRGF0YV0uY2xlYXIoKVxuXG4gICAgdGhpc1trTGVuZ3RoXSA9IDBcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgX2NsZWFyICgpIHt9XG5cbiAgYXN5bmMgd3JpdGUgKG9wdGlvbnMpIHtcbiAgICBhc3NlcnRTdGF0dXModGhpcylcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHRoaXNba0xlbmd0aF0gPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmNsb3NlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1trU3RhdHVzXSA9ICd3cml0aW5nJ1xuXG4gICAgICAvLyBQcmVwYXJlIHByb21pc2UgaW4gY2FzZSBjbG9zZSgpIGlzIGNhbGxlZCBpbiB0aGUgbWVhbiB0aW1lXG4gICAgICBjb25zdCBjbG9zZSA9IHByZXBhcmVDbG9zZSh0aGlzKVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBQcm9jZXNzIG9wZXJhdGlvbnMgYWRkZWQgYnkgcHJld3JpdGUgaG9vayBmdW5jdGlvbnNcbiAgICAgICAgaWYgKHRoaXNba1ByZXdyaXRlRGF0YV0gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwdWJsaWNPcGVyYXRpb25zID0gdGhpc1trUHJld3JpdGVEYXRhXVtrUHVibGljT3BlcmF0aW9uc11cbiAgICAgICAgICBjb25zdCBwcml2YXRlT3BlcmF0aW9ucyA9IHRoaXNba1ByZXdyaXRlRGF0YV1ba1ByaXZhdGVPcGVyYXRpb25zXVxuICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXNba1ByZXdyaXRlRGF0YV0ubGVuZ3RoXG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcCA9IHByaXZhdGVPcGVyYXRpb25zW2ldXG5cbiAgICAgICAgICAgIC8vIFdlIGNhbiBfYWRkKCksIF9wdXQoKSBvciBfZGVsKCkgZXZlbiB0aG91Z2ggc3RhdHVzIGlzIG5vdyAnd3JpdGluZycgYmVjYXVzZVxuICAgICAgICAgICAgLy8gc3RhdHVzIGlzbid0IGV4cG9zZWQgdG8gdGhlIHByaXZhdGUgQVBJLCBzbyB0aGVyZSdzIG5vIGRpZmZlcmVuY2UgaW4gc3RhdGVcbiAgICAgICAgICAgIC8vIGZyb20gdGhhdCBwZXJzcGVjdGl2ZSwgdW5sZXNzIGFuIGltcGxlbWVudGF0aW9uIG92ZXJyaWRlcyB0aGUgcHVibGljIHdyaXRlKClcbiAgICAgICAgICAgIC8vIG1ldGhvZCBhdCBpdHMgb3duIHJpc2suXG4gICAgICAgICAgICBpZiAodGhpc1trQWRkTW9kZV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5fYWRkKG9wKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAncHV0Jykge1xuICAgICAgICAgICAgICB0aGlzLl9wdXQob3Aua2V5LCBvcC52YWx1ZSwgb3ApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9kZWwob3Aua2V5LCBvcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHVibGljT3BlcmF0aW9ucyAhPT0gbnVsbCAmJiBsZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdID0gdGhpc1trUHVibGljT3BlcmF0aW9uc10uY29uY2F0KHB1YmxpY09wZXJhdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5fd3JpdGUob3B0aW9ucylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjbG9zZSgpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzW2tDbG9zZVByb21pc2VdXG4gICAgICAgIH0gY2F0Y2ggKGNsb3NlRXJyKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4LWFzc2lnblxuICAgICAgICAgIGVyciA9IGNvbWJpbmVFcnJvcnMoW2VyciwgY2xvc2VFcnJdKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIGNsb3NlKClcblxuICAgICAgLy8gRW1pdCBhZnRlciBpbml0aWF0aW5nIHRoZSBjbG9zaW5nLCBiZWNhdXNlIGV2ZW50IG1heSB0cmlnZ2VyIGFcbiAgICAgIC8vIGRiIGNsb3NlIHdoaWNoIGluIHR1cm4gdHJpZ2dlcnMgKGlkZW1wb3RlbnRseSkgY2xvc2luZyB0aGlzIGJhdGNoLlxuICAgICAgaWYgKHRoaXNba1B1YmxpY09wZXJhdGlvbnNdICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGIuZW1pdCgnd3JpdGUnLCB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSlcbiAgICAgIH0gZWxzZSBpZiAodGhpc1trTGVnYWN5T3BlcmF0aW9uc10gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kYi5lbWl0KCdiYXRjaCcsIHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpc1trQ2xvc2VQcm9taXNlXVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF93cml0ZSAob3B0aW9ucykge31cblxuICBhc3luYyBjbG9zZSAoKSB7XG4gICAgaWYgKHRoaXNba0Nsb3NlUHJvbWlzZV0gIT09IG51bGwpIHtcbiAgICAgIC8vIEZpcnN0IGNhbGxlciBvZiBjbG9zZSgpIG9yIHdyaXRlKCkgaXMgcmVzcG9uc2libGUgZm9yIGVycm9yXG4gICAgICByZXR1cm4gdGhpc1trQ2xvc2VQcm9taXNlXS5jYXRjaChub29wKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBXcmFwIHByb21pc2UgdG8gYXZvaWQgcmFjZSBpc3N1ZXMgb24gcmVjdXJzaXZlIGNhbGxzXG4gICAgICBwcmVwYXJlQ2xvc2UodGhpcykoKVxuICAgICAgcmV0dXJuIHRoaXNba0Nsb3NlUHJvbWlzZV1cbiAgICB9XG4gIH1cblxuICBhc3luYyBfY2xvc2UgKCkge31cbn1cblxuY29uc3QgcHJlcGFyZUNsb3NlID0gZnVuY3Rpb24gKGJhdGNoKSB7XG4gIGxldCBjbG9zZVxuXG4gIGJhdGNoW2tDbG9zZVByb21pc2VdID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNsb3NlID0gKCkgPT4ge1xuICAgICAgcHJpdmF0ZUNsb3NlKGJhdGNoKS50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGNsb3NlXG59XG5cbmNvbnN0IHByaXZhdGVDbG9zZSA9IGFzeW5jIGZ1bmN0aW9uIChiYXRjaCkge1xuICBiYXRjaFtrU3RhdHVzXSA9ICdjbG9zaW5nJ1xuICBhd2FpdCBiYXRjaC5fY2xvc2UoKVxuICBiYXRjaC5kYi5kZXRhY2hSZXNvdXJjZShiYXRjaClcbn1cblxuY2xhc3MgUHJld3JpdGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKHByaXZhdGVPcGVyYXRpb25zLCBwdWJsaWNPcGVyYXRpb25zKSB7XG4gICAgdGhpc1trUHJpdmF0ZU9wZXJhdGlvbnNdID0gcHJpdmF0ZU9wZXJhdGlvbnNcbiAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSA9IHB1YmxpY09wZXJhdGlvbnNcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzW2tQcml2YXRlT3BlcmF0aW9uc10ubGVuZ3RoXG4gIH1cblxuICBjbGVhciAoKSB7XG4gICAgLy8gQ2xlYXIgb3BlcmF0aW9uIGFycmF5cyBpZiBwcmVzZW50LlxuICAgIGZvciAoY29uc3QgayBvZiBba1B1YmxpY09wZXJhdGlvbnMsIGtQcml2YXRlT3BlcmF0aW9uc10pIHtcbiAgICAgIGNvbnN0IG9wcyA9IHRoaXNba11cblxuICAgICAgaWYgKG9wcyAhPT0gbnVsbCkge1xuICAgICAgICAvLyBLZWVwIGFycmF5IGFsaXZlIGJlY2F1c2UgUHJld3JpdGVCYXRjaCBoYXMgYSByZWZlcmVuY2UgdG8gaXRcbiAgICAgICAgb3BzLnNwbGljZSgwLCBvcHMubGVuZ3RoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBhc3NlcnRTdGF0dXMgPSBmdW5jdGlvbiAoYmF0Y2gpIHtcbiAgaWYgKGJhdGNoW2tTdGF0dXNdICE9PSAnb3BlbicpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0JhdGNoIGlzIG5vdCBvcGVuOiBjYW5ub3QgY2hhbmdlIG9wZXJhdGlvbnMgYWZ0ZXIgd3JpdGUoKSBvciBjbG9zZSgpJywge1xuICAgICAgY29kZTogJ0xFVkVMX0JBVENIX05PVF9PUEVOJ1xuICAgIH0pXG4gIH1cblxuICAvLyBDYW4gdGVjaG5pY2FsbHkgYmUgcmVtb3ZlZCwgYmVjYXVzZSBpdCdzIG5vIGxvbmdlciBwb3NzaWJsZSB0byBjYWxsIGRiLmJhdGNoKCkgd2hlblxuICAvLyBzdGF0dXMgaXMgbm90ICdvcGVuJywgYW5kIGRiLmNsb3NlKCkgY2xvc2VzIHRoZSBiYXRjaC4gS2VlcCBmb3Igbm93LCBpbiBjYXNlIG9mXG4gIC8vIHVuZm9yc2VlbiB1c2VybGFuZCBiZWhhdmlvcnMuXG4gIGlmIChiYXRjaC5kYi5zdGF0dXMgIT09ICdvcGVuJykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdEYXRhYmFzZSBpcyBub3Qgb3BlbicsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9EQVRBQkFTRV9OT1RfT1BFTidcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydHMuQWJzdHJhY3RDaGFpbmVkQmF0Y2ggPSBBYnN0cmFjdENoYWluZWRCYXRjaFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQWJzdHJhY3RDaGFpbmVkQmF0Y2ggfSA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2gnKVxuY29uc3Qga0VuY29kZWQgPSBTeW1ib2woJ2VuY29kZWQnKVxuXG4vLyBGdW5jdGlvbmFsIGRlZmF1bHQgZm9yIGNoYWluZWQgYmF0Y2hcbmNsYXNzIERlZmF1bHRDaGFpbmVkQmF0Y2ggZXh0ZW5kcyBBYnN0cmFjdENoYWluZWRCYXRjaCB7XG4gIGNvbnN0cnVjdG9yIChkYikge1xuICAgIC8vIE9wdC1pbiB0byBfYWRkKCkgaW5zdGVhZCBvZiBfcHV0KCkgYW5kIF9kZWwoKVxuICAgIHN1cGVyKGRiLCB7IGFkZDogdHJ1ZSB9KVxuICAgIHRoaXNba0VuY29kZWRdID0gW11cbiAgfVxuXG4gIF9hZGQgKG9wKSB7XG4gICAgdGhpc1trRW5jb2RlZF0ucHVzaChvcClcbiAgfVxuXG4gIF9jbGVhciAoKSB7XG4gICAgdGhpc1trRW5jb2RlZF0gPSBbXVxuICB9XG5cbiAgYXN5bmMgX3dyaXRlIChvcHRpb25zKSB7XG4gICAgLy8gTmVlZCB0byBjYWxsIHRoZSBwcml2YXRlIHJhdGhlciB0aGFuIHB1YmxpYyBtZXRob2QsIHRvIHByZXZlbnRcbiAgICAvLyByZWN1cnNpb24sIGRvdWJsZSBwcmVmaXhpbmcsIGRvdWJsZSBlbmNvZGluZyBhbmQgZG91YmxlIGhvb2tzLlxuICAgIHJldHVybiB0aGlzLmRiLl9iYXRjaCh0aGlzW2tFbmNvZGVkXSwgb3B0aW9ucylcbiAgfVxufVxuXG5leHBvcnRzLkRlZmF1bHRDaGFpbmVkQmF0Y2ggPSBEZWZhdWx0Q2hhaW5lZEJhdGNoXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBub29wIH0gPSByZXF1aXJlKCcuL2NvbW1vbicpXG5cbmNvbnN0IGtGdW5jdGlvbnMgPSBTeW1ib2woJ2Z1bmN0aW9ucycpXG5jb25zdCBrQXN5bmMgPSBTeW1ib2woJ2FzeW5jJylcblxuY2xhc3MgRGF0YWJhc2VIb29rcyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnBvc3RvcGVuID0gbmV3IEhvb2soeyBhc3luYzogdHJ1ZSB9KVxuICAgIHRoaXMucHJld3JpdGUgPSBuZXcgSG9vayh7IGFzeW5jOiBmYWxzZSB9KVxuICAgIHRoaXMubmV3c3ViID0gbmV3IEhvb2soeyBhc3luYzogZmFsc2UgfSlcbiAgfVxufVxuXG5jbGFzcyBIb29rIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzW2tBc3luY10gPSBvcHRpb25zLmFzeW5jXG4gICAgdGhpc1trRnVuY3Rpb25zXSA9IG5ldyBTZXQoKVxuXG4gICAgLy8gT2ZmZXIgYSBmYXN0IHdheSB0byBjaGVjayBpZiBob29rIGZ1bmN0aW9ucyBhcmUgcHJlc2VudC4gV2UgY291bGQgYWxzbyBleHBvc2UgYVxuICAgIC8vIHNpemUgZ2V0dGVyLCB3aGljaCB3b3VsZCBiZSBzbG93ZXIsIG9yIGNoZWNrIGl0IGJ5IGhvb2sucnVuICE9PSBub29wLCB3aGljaCB3b3VsZFxuICAgIC8vIG5vdCBhbGxvdyB1c2VybGFuZCB0byBkbyB0aGUgc2FtZSBjaGVjay5cbiAgICB0aGlzLm5vb3AgPSB0cnVlXG4gICAgdGhpcy5ydW4gPSBydW5uZXIodGhpcylcbiAgfVxuXG4gIGFkZCAoZm4pIHtcbiAgICAvLyBWYWxpZGF0ZSBub3cgcmF0aGVyIHRoYW4gaW4gYXN5bmNocm9ub3VzIGNvZGUgcGF0aHNcbiAgICBhc3NlcnRGdW5jdGlvbihmbilcbiAgICB0aGlzW2tGdW5jdGlvbnNdLmFkZChmbilcbiAgICB0aGlzLm5vb3AgPSBmYWxzZVxuICAgIHRoaXMucnVuID0gcnVubmVyKHRoaXMpXG4gIH1cblxuICBkZWxldGUgKGZuKSB7XG4gICAgYXNzZXJ0RnVuY3Rpb24oZm4pXG4gICAgdGhpc1trRnVuY3Rpb25zXS5kZWxldGUoZm4pXG4gICAgdGhpcy5ub29wID0gdGhpc1trRnVuY3Rpb25zXS5zaXplID09PSAwXG4gICAgdGhpcy5ydW4gPSBydW5uZXIodGhpcylcbiAgfVxufVxuXG5jb25zdCBhc3NlcnRGdW5jdGlvbiA9IGZ1bmN0aW9uIChmbikge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgaGludCA9IGZuID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGZuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbiwgcmVjZWl2ZWQgJHtoaW50fWApXG4gIH1cbn1cblxuY29uc3QgcnVubmVyID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgaWYgKGhvb2subm9vcCkge1xuICAgIHJldHVybiBub29wXG4gIH0gZWxzZSBpZiAoaG9va1trRnVuY3Rpb25zXS5zaXplID09PSAxKSB7XG4gICAgY29uc3QgW2ZuXSA9IGhvb2tba0Z1bmN0aW9uc11cbiAgICByZXR1cm4gZm5cbiAgfSBlbHNlIGlmIChob29rW2tBc3luY10pIHtcbiAgICAvLyBUaGUgcnVuIGZ1bmN0aW9uIHNob3VsZCBub3QgcmVmZXJlbmNlIGhvb2ssIHNvIHRoYXQgY29uc3VtZXJzIGxpa2UgY2hhaW5lZCBiYXRjaFxuICAgIC8vIGFuZCBkYi5vcGVuKCkgY2FuIHNhdmUgYSByZWZlcmVuY2UgdG8gaG9vay5ydW4gYW5kIHNhZmVseSBhc3N1bWUgaXQgd29uJ3QgY2hhbmdlXG4gICAgLy8gZHVyaW5nIHRoZWlyIGxpZmV0aW1lIG9yIGFzeW5jIHdvcmsuXG4gICAgY29uc3QgcnVuID0gYXN5bmMgZnVuY3Rpb24gKGZ1bmN0aW9ucywgLi4uYXJncykge1xuICAgICAgZm9yIChjb25zdCBmbiBvZiBmdW5jdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgZm4oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVuLmJpbmQobnVsbCwgQXJyYXkuZnJvbShob29rW2tGdW5jdGlvbnNdKSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBydW4gPSBmdW5jdGlvbiAoZnVuY3Rpb25zLCAuLi5hcmdzKSB7XG4gICAgICBmb3IgKGNvbnN0IGZuIG9mIGZ1bmN0aW9ucykge1xuICAgICAgICBmbiguLi5hcmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydW4uYmluZChudWxsLCBBcnJheS5mcm9tKGhvb2tba0Z1bmN0aW9uc10pKVxuICB9XG59XG5cbmV4cG9ydHMuRGF0YWJhc2VIb29rcyA9IERhdGFiYXNlSG9va3NcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGRlcHJlY2F0ZSB9ID0gcmVxdWlyZSgnLi9jb21tb24nKVxuXG5leHBvcnRzLkV2ZW50TW9uaXRvciA9IGNsYXNzIEV2ZW50TW9uaXRvciB7XG4gIGNvbnN0cnVjdG9yIChlbWl0dGVyLCBldmVudHMpIHtcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgLy8gVHJhY2sgd2hldGhlciBsaXN0ZW5lcnMgYXJlIHByZXNlbnRcbiAgICAgIHRoaXNbZXZlbnQubmFtZV0gPSBmYWxzZVxuXG4gICAgICAvLyBQcmVwYXJlIGRlcHJlY2F0aW9uIG1lc3NhZ2VcbiAgICAgIGlmIChldmVudC5kZXByZWNhdGVkKSB7XG4gICAgICAgIGV2ZW50Lm1lc3NhZ2UgPSBgVGhlICcke2V2ZW50Lm5hbWV9JyBldmVudCBpcyBkZXByZWNhdGVkIGluIGZhdm9yIG9mICcke2V2ZW50LmFsdH0nIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbiBvZiBhYnN0cmFjdC1sZXZlbGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKGV2ZW50cy5tYXAoZSA9PiBbZS5uYW1lLCBlXSkpXG4gICAgY29uc3QgbW9uaXRvciA9IHRoaXNcblxuICAgIGVtaXR0ZXIub24oJ25ld0xpc3RlbmVyJywgYmVmb3JlQWRkZWQpXG4gICAgZW1pdHRlci5vbigncmVtb3ZlTGlzdGVuZXInLCBhZnRlclJlbW92ZWQpXG5cbiAgICBmdW5jdGlvbiBiZWZvcmVBZGRlZCAobmFtZSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBtYXAuZ2V0KG5hbWUpXG5cbiAgICAgIGlmIChldmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1vbml0b3JbbmFtZV0gPSB0cnVlXG5cbiAgICAgICAgaWYgKGV2ZW50LmRlcHJlY2F0ZWQpIHtcbiAgICAgICAgICBkZXByZWNhdGUoZXZlbnQubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFmdGVyUmVtb3ZlZCAobmFtZSkge1xuICAgICAgaWYgKG1hcC5oYXMobmFtZSkpIHtcbiAgICAgICAgbW9uaXRvcltuYW1lXSA9IHRoaXMubGlzdGVuZXJDb3VudChuYW1lKSA+IDBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGdldE9wdGlvbnMsIGVtcHR5T3B0aW9ucyB9ID0gcmVxdWlyZSgnLi9jb21tb24nKVxuY29uc3QgeyBBYm9ydEVycm9yIH0gPSByZXF1aXJlKCcuL2Vycm9ycycpXG5cbmNvbnN0IGtPcGVyYXRpb25zID0gU3ltYm9sKCdvcGVyYXRpb25zJylcbmNvbnN0IGtTaWduYWxzID0gU3ltYm9sKCdzaWduYWxzJylcbmNvbnN0IGtIYW5kbGVBYm9ydCA9IFN5bWJvbCgnaGFuZGxlQWJvcnQnKVxuXG5jbGFzcyBEZWZlcnJlZE9wZXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChmbiwgc2lnbmFsKSB7XG4gICAgdGhpcy5mbiA9IGZuXG4gICAgdGhpcy5zaWduYWwgPSBzaWduYWxcbiAgfVxufVxuXG5jbGFzcyBEZWZlcnJlZFF1ZXVlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXNba09wZXJhdGlvbnNdID0gW11cbiAgICB0aGlzW2tTaWduYWxzXSA9IG5ldyBTZXQoKVxuICAgIHRoaXNba0hhbmRsZUFib3J0XSA9IHRoaXNba0hhbmRsZUFib3J0XS5iaW5kKHRoaXMpXG4gIH1cblxuICBhZGQgKGZuLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKVxuICAgIGNvbnN0IHNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsXG5cbiAgICBpZiAoc2lnbmFsID09IG51bGwpIHtcbiAgICAgIHRoaXNba09wZXJhdGlvbnNdLnB1c2gobmV3IERlZmVycmVkT3BlcmF0aW9uKGZuLCBudWxsKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgY2FsbGVkIGluIHRoZSBzYW1lIHRpY2tcbiAgICAgIGZuKG5ldyBBYm9ydEVycm9yKCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXNba1NpZ25hbHNdLmhhcyhzaWduYWwpKSB7XG4gICAgICB0aGlzW2tTaWduYWxzXS5hZGQoc2lnbmFsKVxuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdGhpc1trSGFuZGxlQWJvcnRdLCB7IG9uY2U6IHRydWUgfSlcbiAgICB9XG5cbiAgICB0aGlzW2tPcGVyYXRpb25zXS5wdXNoKG5ldyBEZWZlcnJlZE9wZXJhdGlvbihmbiwgc2lnbmFsKSlcbiAgfVxuXG4gIGRyYWluICgpIHtcbiAgICBjb25zdCBvcGVyYXRpb25zID0gdGhpc1trT3BlcmF0aW9uc11cbiAgICBjb25zdCBzaWduYWxzID0gdGhpc1trU2lnbmFsc11cblxuICAgIHRoaXNba09wZXJhdGlvbnNdID0gW11cbiAgICB0aGlzW2tTaWduYWxzXSA9IG5ldyBTZXQoKVxuXG4gICAgZm9yIChjb25zdCBzaWduYWwgb2Ygc2lnbmFscykge1xuICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdGhpc1trSGFuZGxlQWJvcnRdKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgb3BlcmF0aW9uIG9mIG9wZXJhdGlvbnMpIHtcbiAgICAgIG9wZXJhdGlvbi5mbi5jYWxsKG51bGwpXG4gICAgfVxuICB9XG5cbiAgW2tIYW5kbGVBYm9ydF0gKGV2KSB7XG4gICAgY29uc3Qgc2lnbmFsID0gZXYudGFyZ2V0XG4gICAgY29uc3QgZXJyID0gbmV3IEFib3J0RXJyb3IoKVxuICAgIGNvbnN0IGFib3J0ZWQgPSBbXVxuXG4gICAgLy8gVE9ETzogb3B0aW1pemVcbiAgICB0aGlzW2tPcGVyYXRpb25zXSA9IHRoaXNba09wZXJhdGlvbnNdLmZpbHRlcihmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICBpZiAob3BlcmF0aW9uLnNpZ25hbCAhPT0gbnVsbCAmJiBvcGVyYXRpb24uc2lnbmFsID09PSBzaWduYWwpIHtcbiAgICAgICAgYWJvcnRlZC5wdXNoKG9wZXJhdGlvbilcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzW2tTaWduYWxzXS5kZWxldGUoc2lnbmFsKVxuXG4gICAgZm9yIChjb25zdCBvcGVyYXRpb24gb2YgYWJvcnRlZCkge1xuICAgICAgb3BlcmF0aW9uLmZuLmNhbGwobnVsbCwgZXJyKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkRlZmVycmVkUXVldWUgPSBEZWZlcnJlZFF1ZXVlXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5jb25zdCByYW5nZU9wdGlvbnMgPSBuZXcgU2V0KFsnbHQnLCAnbHRlJywgJ2d0JywgJ2d0ZSddKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBrZXlFbmNvZGluZykge1xuICBjb25zdCByZXN1bHQgPSB7fVxuXG4gIGZvciAoY29uc3QgayBpbiBvcHRpb25zKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIGspKSBjb250aW51ZVxuICAgIGlmIChrID09PSAna2V5RW5jb2RpbmcnIHx8IGsgPT09ICd2YWx1ZUVuY29kaW5nJykgY29udGludWVcblxuICAgIGlmIChyYW5nZU9wdGlvbnMuaGFzKGspKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgd2UgZG9uJ3QgcmVqZWN0IG51bGxpc2ggYW5kIGVtcHR5IG9wdGlvbnMgaGVyZS4gV2hpbGVcbiAgICAgIC8vIHRob3NlIHR5cGVzIGFyZSBpbnZhbGlkIGFzIGtleXMsIHRoZXkgYXJlIHZhbGlkIGFzIHJhbmdlIG9wdGlvbnMuXG4gICAgICByZXN1bHRba10gPSBrZXlFbmNvZGluZy5lbmNvZGUob3B0aW9uc1trXSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tdID0gb3B0aW9uc1trXVxuICAgIH1cbiAgfVxuXG4gIHJlc3VsdC5yZXZlcnNlID0gISFyZXN1bHQucmV2ZXJzZVxuICByZXN1bHQubGltaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHJlc3VsdC5saW1pdCkgJiYgcmVzdWx0LmxpbWl0ID49IDAgPyByZXN1bHQubGltaXQgOiAtMVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEFic3RyYWN0SXRlcmF0b3IsIEFic3RyYWN0S2V5SXRlcmF0b3IsIEFic3RyYWN0VmFsdWVJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi4vYWJzdHJhY3QtaXRlcmF0b3InKVxuXG5jb25zdCBrVW5maXggPSBTeW1ib2woJ3VuZml4JylcbmNvbnN0IGtJdGVyYXRvciA9IFN5bWJvbCgnaXRlcmF0b3InKVxuXG4vLyBUT0RPOiB1bmZpeCBuYXRpdmVseSBpZiBkYiBzdXBwb3J0cyBpdFxuY2xhc3MgQWJzdHJhY3RTdWJsZXZlbEl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucywgaXRlcmF0b3IsIHVuZml4KSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tJdGVyYXRvcl0gPSBpdGVyYXRvclxuICAgIHRoaXNba1VuZml4XSA9IHVuZml4XG4gIH1cblxuICBhc3luYyBfbmV4dCAoKSB7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0ubmV4dCgpXG5cbiAgICBpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF1cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkgZW50cnlbMF0gPSB0aGlzW2tVbmZpeF0oa2V5KVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyeVxuICB9XG5cbiAgYXN5bmMgX25leHR2IChzaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5uZXh0dihzaXplLCBvcHRpb25zKVxuICAgIGNvbnN0IHVuZml4ID0gdGhpc1trVW5maXhdXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGVudHJ5WzBdID0gdW5maXgoa2V5KVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzXG4gIH1cblxuICBhc3luYyBfYWxsIChvcHRpb25zKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5hbGwob3B0aW9ucylcbiAgICBjb25zdCB1bmZpeCA9IHRoaXNba1VuZml4XVxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeVswXVxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBlbnRyeVswXSA9IHVuZml4KGtleSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cmllc1xuICB9XG59XG5cbmNsYXNzIEFic3RyYWN0U3VibGV2ZWxLZXlJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0S2V5SXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMsIGl0ZXJhdG9yLCB1bmZpeCkge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trSXRlcmF0b3JdID0gaXRlcmF0b3JcbiAgICB0aGlzW2tVbmZpeF0gPSB1bmZpeFxuICB9XG5cbiAgYXN5bmMgX25leHQgKCkge1xuICAgIGNvbnN0IGtleSA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5uZXh0KClcbiAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgPyBrZXkgOiB0aGlzW2tVbmZpeF0oa2V5KVxuICB9XG5cbiAgYXN5bmMgX25leHR2IChzaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qga2V5cyA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5uZXh0dihzaXplLCBvcHRpb25zKVxuICAgIGNvbnN0IHVuZml4ID0gdGhpc1trVW5maXhdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkga2V5c1tpXSA9IHVuZml4KGtleSlcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5c1xuICB9XG5cbiAgYXN5bmMgX2FsbCAob3B0aW9ucykge1xuICAgIGNvbnN0IGtleXMgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0uYWxsKG9wdGlvbnMpXG4gICAgY29uc3QgdW5maXggPSB0aGlzW2tVbmZpeF1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBrZXlzW2ldID0gdW5maXgoa2V5KVxuICAgIH1cblxuICAgIHJldHVybiBrZXlzXG4gIH1cbn1cblxuY2xhc3MgQWJzdHJhY3RTdWJsZXZlbFZhbHVlSXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdFZhbHVlSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMsIGl0ZXJhdG9yKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG4gICAgdGhpc1trSXRlcmF0b3JdID0gaXRlcmF0b3JcbiAgfVxuXG4gIGFzeW5jIF9uZXh0ICgpIHtcbiAgICByZXR1cm4gdGhpc1trSXRlcmF0b3JdLm5leHQoKVxuICB9XG5cbiAgYXN5bmMgX25leHR2IChzaXplLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXNba0l0ZXJhdG9yXS5uZXh0dihzaXplLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgX2FsbCAob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzW2tJdGVyYXRvcl0uYWxsKG9wdGlvbnMpXG4gIH1cbn1cblxuZm9yIChjb25zdCBJdGVyYXRvciBvZiBbQWJzdHJhY3RTdWJsZXZlbEl0ZXJhdG9yLCBBYnN0cmFjdFN1YmxldmVsS2V5SXRlcmF0b3IsIEFic3RyYWN0U3VibGV2ZWxWYWx1ZUl0ZXJhdG9yXSkge1xuICBJdGVyYXRvci5wcm90b3R5cGUuX3NlZWsgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhpc1trSXRlcmF0b3JdLnNlZWsodGFyZ2V0LCBvcHRpb25zKVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9jbG9zZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1trSXRlcmF0b3JdLmNsb3NlKClcbiAgfVxufVxuXG5leHBvcnRzLkFic3RyYWN0U3VibGV2ZWxJdGVyYXRvciA9IEFic3RyYWN0U3VibGV2ZWxJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdFN1YmxldmVsS2V5SXRlcmF0b3IgPSBBYnN0cmFjdFN1YmxldmVsS2V5SXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RTdWJsZXZlbFZhbHVlSXRlcmF0b3IgPSBBYnN0cmFjdFN1YmxldmVsVmFsdWVJdGVyYXRvclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IHsgQnVmZmVyIH0gPSByZXF1aXJlKCdidWZmZXInKSB8fCB7fVxuY29uc3Qge1xuICBBYnN0cmFjdFN1YmxldmVsSXRlcmF0b3IsXG4gIEFic3RyYWN0U3VibGV2ZWxLZXlJdGVyYXRvcixcbiAgQWJzdHJhY3RTdWJsZXZlbFZhbHVlSXRlcmF0b3Jcbn0gPSByZXF1aXJlKCcuL2Fic3RyYWN0LXN1YmxldmVsLWl0ZXJhdG9yJylcblxuY29uc3Qga0dsb2JhbFByZWZpeCA9IFN5bWJvbCgncHJlZml4JylcbmNvbnN0IGtMb2NhbFByZWZpeCA9IFN5bWJvbCgnbG9jYWxQcmVmaXgnKVxuY29uc3Qga0xvY2FsUGF0aCA9IFN5bWJvbCgnbG9jYWxQYXRoJylcbmNvbnN0IGtHbG9iYWxQYXRoID0gU3ltYm9sKCdnbG9iYWxQYXRoJylcbmNvbnN0IGtHbG9iYWxVcHBlckJvdW5kID0gU3ltYm9sKCd1cHBlckJvdW5kJylcbmNvbnN0IGtQcmVmaXhSYW5nZSA9IFN5bWJvbCgncHJlZml4UmFuZ2UnKVxuY29uc3Qga1Jvb3QgPSBTeW1ib2woJ3Jvb3QnKVxuY29uc3Qga1BhcmVudCA9IFN5bWJvbCgncGFyZW50JylcbmNvbnN0IGtVbmZpeCA9IFN5bWJvbCgndW5maXgnKVxuXG5jb25zdCB0ZXh0RW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG5jb25zdCBkZWZhdWx0cyA9IHsgc2VwYXJhdG9yOiAnIScgfVxuXG4vLyBXcmFwcGVkIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3lcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHsgQWJzdHJhY3RMZXZlbCB9KSB7XG4gIGNsYXNzIEFic3RyYWN0U3VibGV2ZWwgZXh0ZW5kcyBBYnN0cmFjdExldmVsIHtcbiAgICBzdGF0aWMgZGVmYXVsdHMgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzXG4gICAgICB9IGVsc2UgaWYgKCFvcHRpb25zLnNlcGFyYXRvcikge1xuICAgICAgICByZXR1cm4geyAuLi5vcHRpb25zLCBzZXBhcmF0b3I6ICchJyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBhdXRvQ2xvc2Ugb3B0aW9uLCB3aGljaCBpZiB0cnVlLCBkb2VzIHBhcmVudC5hdHRhY2hSZXNvdXJjZSh0aGlzKVxuICAgIGNvbnN0cnVjdG9yIChkYiwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgLy8gRG9uJ3QgZm9yd2FyZCBBYnN0cmFjdFN1YmxldmVsIG9wdGlvbnMgdG8gQWJzdHJhY3RMZXZlbFxuICAgICAgY29uc3QgeyBzZXBhcmF0b3IsIG1hbmlmZXN0LCAuLi5mb3J3YXJkIH0gPSBBYnN0cmFjdFN1YmxldmVsLmRlZmF1bHRzKG9wdGlvbnMpXG4gICAgICBjb25zdCBuYW1lcyA9IFtdLmNvbmNhdChuYW1lKS5tYXAobmFtZSA9PiB0cmltKG5hbWUsIHNlcGFyYXRvcikpXG5cbiAgICAgIC8vIFJlc2VydmUgb25lIGNoYXJhY3RlciBiZXR3ZWVuIHNlcGFyYXRvciBhbmQgbmFtZSB0byBnaXZlIHVzIGFuIHVwcGVyIGJvdW5kXG4gICAgICBjb25zdCByZXNlcnZlZCA9IHNlcGFyYXRvci5jaGFyQ29kZUF0KDApICsgMVxuICAgICAgY29uc3Qgcm9vdCA9IGRiW2tSb290XSB8fCBkYlxuXG4gICAgICAvLyBLZXlzIHNob3VsZCBzb3J0IGxpa2UgWychYSEnLCAnIWEhIWEhJywgJyFhXCInLCAnIWFhIScsICchYiEnXS5cbiAgICAgIC8vIFVzZSBBU0NJSSBmb3IgY29uc2lzdGVudCBsZW5ndGggYmV0d2VlbiBzdHJpbmcsIEJ1ZmZlciBhbmQgVWludDhBcnJheVxuICAgICAgaWYgKCFuYW1lcy5ldmVyeShuYW1lID0+IHRleHRFbmNvZGVyLmVuY29kZShuYW1lKS5ldmVyeSh4ID0+IHggPiByZXNlcnZlZCAmJiB4IDwgMTI3KSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBTdWJsZXZlbCBuYW1lIG11c3QgdXNlIGJ5dGVzID4gJHtyZXNlcnZlZH0gPCAkezEyN31gLCB7XG4gICAgICAgICAgY29kZTogJ0xFVkVMX0lOVkFMSURfUFJFRklYJ1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBzdXBlcihtZXJnZU1hbmlmZXN0cyhkYiwgbWFuaWZlc3QpLCBmb3J3YXJkKVxuXG4gICAgICBjb25zdCBsb2NhbFByZWZpeCA9IG5hbWVzLm1hcChuYW1lID0+IHNlcGFyYXRvciArIG5hbWUgKyBzZXBhcmF0b3IpLmpvaW4oJycpXG4gICAgICBjb25zdCBnbG9iYWxQcmVmaXggPSAoZGIucHJlZml4IHx8ICcnKSArIGxvY2FsUHJlZml4XG4gICAgICBjb25zdCBnbG9iYWxVcHBlckJvdW5kID0gZ2xvYmFsUHJlZml4LnNsaWNlKDAsIC0xKSArIFN0cmluZy5mcm9tQ2hhckNvZGUocmVzZXJ2ZWQpXG5cbiAgICAgIC8vIE1vc3Qgb3BlcmF0aW9ucyBhcmUgZm9yd2FyZGVkIHRvIHRoZSBwYXJlbnQgZGF0YWJhc2UsIGJ1dCBjbGVhcigpIGFuZCBpdGVyYXRvcnNcbiAgICAgIC8vIHN0aWxsIGZvcndhcmQgdG8gdGhlIHJvb3QgZGF0YWJhc2UgLSB3aGljaCBpcyBvbGRlciBsb2dpYyBhbmQgZG9lcyBub3QgeWV0IG5lZWRcbiAgICAgIC8vIHRvIGNoYW5nZSwgdW50aWwgd2UgYWRkIHNvbWUgZm9ybSBvZiBwcmVyZWFkIG9yIHBvc3RyZWFkIGhvb2tzLlxuICAgICAgdGhpc1trUm9vdF0gPSByb290XG4gICAgICB0aGlzW2tQYXJlbnRdID0gZGJcbiAgICAgIHRoaXNba0xvY2FsUGF0aF0gPSBuYW1lc1xuICAgICAgdGhpc1trR2xvYmFsUGF0aF0gPSBkYi5wcmVmaXggPyBkYi5wYXRoKCkuY29uY2F0KG5hbWVzKSA6IG5hbWVzXG4gICAgICB0aGlzW2tHbG9iYWxQcmVmaXhdID0gbmV3IE11bHRpRm9ybWF0KGdsb2JhbFByZWZpeClcbiAgICAgIHRoaXNba0dsb2JhbFVwcGVyQm91bmRdID0gbmV3IE11bHRpRm9ybWF0KGdsb2JhbFVwcGVyQm91bmQpXG4gICAgICB0aGlzW2tMb2NhbFByZWZpeF0gPSBuZXcgTXVsdGlGb3JtYXQobG9jYWxQcmVmaXgpXG4gICAgICB0aGlzW2tVbmZpeF0gPSBuZXcgVW5maXhlcigpXG4gICAgfVxuXG4gICAgcHJlZml4S2V5IChrZXksIGtleUZvcm1hdCwgbG9jYWwpIHtcbiAgICAgIGNvbnN0IHByZWZpeCA9IGxvY2FsID8gdGhpc1trTG9jYWxQcmVmaXhdIDogdGhpc1trR2xvYmFsUHJlZml4XVxuXG4gICAgICBpZiAoa2V5Rm9ybWF0ID09PSAndXRmOCcpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeC51dGY4ICsga2V5XG4gICAgICB9IGVsc2UgaWYgKGtleS5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEZhc3QgcGF0aCBmb3IgZW1wdHkga2V5IChubyBjb3B5KVxuICAgICAgICByZXR1cm4gcHJlZml4W2tleUZvcm1hdF1cbiAgICAgIH0gZWxzZSBpZiAoa2V5Rm9ybWF0ID09PSAndmlldycpIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHByZWZpeC52aWV3XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHZpZXcuYnl0ZUxlbmd0aCArIGtleS5ieXRlTGVuZ3RoKVxuXG4gICAgICAgIHJlc3VsdC5zZXQodmlldywgMClcbiAgICAgICAgcmVzdWx0LnNldChrZXksIHZpZXcuYnl0ZUxlbmd0aClcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBwcmVmaXguYnVmZmVyXG4gICAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtidWZmZXIsIGtleV0sIGJ1ZmZlci5ieXRlTGVuZ3RoICsga2V5LmJ5dGVMZW5ndGgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90IGV4cG9zZWQgZm9yIG5vdy5cbiAgICBba1ByZWZpeFJhbmdlXSAocmFuZ2UsIGtleUZvcm1hdCkge1xuICAgICAgaWYgKHJhbmdlLmd0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJhbmdlLmd0ZSA9IHRoaXMucHJlZml4S2V5KHJhbmdlLmd0ZSwga2V5Rm9ybWF0LCBmYWxzZSlcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2UuZ3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYW5nZS5ndCA9IHRoaXMucHJlZml4S2V5KHJhbmdlLmd0LCBrZXlGb3JtYXQsIGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2UuZ3RlID0gdGhpc1trR2xvYmFsUHJlZml4XVtrZXlGb3JtYXRdXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZS5sdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYW5nZS5sdGUgPSB0aGlzLnByZWZpeEtleShyYW5nZS5sdGUsIGtleUZvcm1hdCwgZmFsc2UpXG4gICAgICB9IGVsc2UgaWYgKHJhbmdlLmx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmFuZ2UubHQgPSB0aGlzLnByZWZpeEtleShyYW5nZS5sdCwga2V5Rm9ybWF0LCBmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlLmx0ZSA9IHRoaXNba0dsb2JhbFVwcGVyQm91bmRdW2tleUZvcm1hdF1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcHJlZml4ICgpIHtcbiAgICAgIHJldHVybiB0aGlzW2tHbG9iYWxQcmVmaXhdLnV0ZjhcbiAgICB9XG5cbiAgICBnZXQgZGIgKCkge1xuICAgICAgcmV0dXJuIHRoaXNba1Jvb3RdXG4gICAgfVxuXG4gICAgZ2V0IHBhcmVudCAoKSB7XG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XVxuICAgIH1cblxuICAgIHBhdGggKGxvY2FsID0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBsb2NhbCA/IHRoaXNba0xvY2FsUGF0aF0gOiB0aGlzW2tHbG9iYWxQYXRoXVxuICAgIH1cblxuICAgIGFzeW5jIF9vcGVuIChvcHRpb25zKSB7XG4gICAgICAvLyBUaGUgcGFyZW50IGRiIG11c3Qgb3BlbiBpdHNlbGYgb3IgYmUgKHJlKW9wZW5lZCBieSB0aGUgdXNlciBiZWNhdXNlXG4gICAgICAvLyBhIHN1YmxldmVsIHNob3VsZCBub3QgaW5pdGlhdGUgc3RhdGUgY2hhbmdlcyBvbiB0aGUgcmVzdCBvZiB0aGUgZGIuXG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XS5vcGVuKHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGFzeW5jIF9wdXQgKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdLnB1dChrZXksIHZhbHVlLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzeW5jIF9nZXQgKGtleSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF0uZ2V0KGtleSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3luYyBfZ2V0TWFueSAoa2V5cywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF0uZ2V0TWFueShrZXlzLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzeW5jIF9kZWwgKGtleSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF0uZGVsKGtleSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3luYyBfYmF0Y2ggKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdLmJhdGNoKG9wZXJhdGlvbnMsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gVE9ETzogY2FsbCBwYXJlbnQgaW5zdGVhZCBvZiByb290XG4gICAgYXN5bmMgX2NsZWFyIChvcHRpb25zKSB7XG4gICAgICAvLyBUT0RPIChyZWZhY3Rvcik6IG1vdmUgdG8gQWJzdHJhY3RMZXZlbFxuICAgICAgdGhpc1trUHJlZml4UmFuZ2VdKG9wdGlvbnMsIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgICByZXR1cm4gdGhpc1trUm9vdF0uY2xlYXIob3B0aW9ucylcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBjYWxsIHBhcmVudCBpbnN0ZWFkIG9mIHJvb3RcbiAgICBfaXRlcmF0b3IgKG9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE8gKHJlZmFjdG9yKTogbW92ZSB0byBBYnN0cmFjdExldmVsXG4gICAgICB0aGlzW2tQcmVmaXhSYW5nZV0ob3B0aW9ucywgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpc1trUm9vdF0uaXRlcmF0b3Iob3B0aW9ucylcbiAgICAgIGNvbnN0IHVuZml4ID0gdGhpc1trVW5maXhdLmdldCh0aGlzW2tHbG9iYWxQcmVmaXhdLnV0ZjgubGVuZ3RoLCBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgICAgcmV0dXJuIG5ldyBBYnN0cmFjdFN1YmxldmVsSXRlcmF0b3IodGhpcywgb3B0aW9ucywgaXRlcmF0b3IsIHVuZml4KVxuICAgIH1cblxuICAgIF9rZXlzIChvcHRpb25zKSB7XG4gICAgICB0aGlzW2tQcmVmaXhSYW5nZV0ob3B0aW9ucywgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICAgIGNvbnN0IGl0ZXJhdG9yID0gdGhpc1trUm9vdF0ua2V5cyhvcHRpb25zKVxuICAgICAgY29uc3QgdW5maXggPSB0aGlzW2tVbmZpeF0uZ2V0KHRoaXNba0dsb2JhbFByZWZpeF0udXRmOC5sZW5ndGgsIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgICByZXR1cm4gbmV3IEFic3RyYWN0U3VibGV2ZWxLZXlJdGVyYXRvcih0aGlzLCBvcHRpb25zLCBpdGVyYXRvciwgdW5maXgpXG4gICAgfVxuXG4gICAgX3ZhbHVlcyAob3B0aW9ucykge1xuICAgICAgdGhpc1trUHJlZml4UmFuZ2VdKG9wdGlvbnMsIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXNba1Jvb3RdLnZhbHVlcyhvcHRpb25zKVxuICAgICAgcmV0dXJuIG5ldyBBYnN0cmFjdFN1YmxldmVsVmFsdWVJdGVyYXRvcih0aGlzLCBvcHRpb25zLCBpdGVyYXRvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBBYnN0cmFjdFN1YmxldmVsIH1cbn1cblxuY29uc3QgbWVyZ2VNYW5pZmVzdHMgPSBmdW5jdGlvbiAocGFyZW50LCBtYW5pZmVzdCkge1xuICByZXR1cm4ge1xuICAgIC8vIEluaGVyaXQgbWFuaWZlc3Qgb2YgcGFyZW50IGRiXG4gICAgLi4ucGFyZW50LnN1cHBvcnRzLFxuXG4gICAgLy8gRGlzYWJsZSB1bnN1cHBvcnRlZCBmZWF0dXJlc1xuICAgIGNyZWF0ZUlmTWlzc2luZzogZmFsc2UsXG4gICAgZXJyb3JJZkV4aXN0czogZmFsc2UsXG5cbiAgICAvLyBVbnNldCBhZGRpdGlvbmFsIGV2ZW50cyBiZWNhdXNlIHdlJ3JlIG5vdCBmb3J3YXJkaW5nIHRoZW1cbiAgICBldmVudHM6IHt9LFxuXG4gICAgLy8gVW5zZXQgYWRkaXRpb25hbCBtZXRob2RzIChsaWtlIGFwcHJveGltYXRlU2l6ZSkgd2hpY2ggd2UgY2FuJ3Qgc3VwcG9ydCBoZXJlIHVubGVzc1xuICAgIC8vIHRoZSBBYnN0cmFjdFN1YmxldmVsIGNsYXNzIGlzIG92ZXJyaWRkZW4gYnkgYW4gaW1wbGVtZW50YXRpb24gb2YgYGFic3RyYWN0LWxldmVsYC5cbiAgICBhZGRpdGlvbmFsTWV0aG9kczoge30sXG5cbiAgICAvLyBJbmhlcml0IG1hbmlmZXN0IG9mIGN1c3RvbSBBYnN0cmFjdFN1YmxldmVsIHN1YmNsYXNzLiBTdWNoIGEgY2xhc3MgaXMgbm90XG4gICAgLy8gYWxsb3dlZCB0byBvdmVycmlkZSBlbmNvZGluZ3MuXG4gICAgLi4ubWFuaWZlc3QsXG5cbiAgICBlbmNvZGluZ3M6IHtcbiAgICAgIHV0Zjg6IHN1cHBvcnRzRW5jb2RpbmcocGFyZW50LCAndXRmOCcpLFxuICAgICAgYnVmZmVyOiBzdXBwb3J0c0VuY29kaW5nKHBhcmVudCwgJ2J1ZmZlcicpLFxuICAgICAgdmlldzogc3VwcG9ydHNFbmNvZGluZyhwYXJlbnQsICd2aWV3JylcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc3VwcG9ydHNFbmNvZGluZyA9IGZ1bmN0aW9uIChwYXJlbnQsIGVuY29kaW5nKSB7XG4gIC8vIFByZWZlciBhIG5vbi10cmFuc2NvZGVkIGVuY29kaW5nIGZvciBvcHRpbWFsIHBlcmZvcm1hbmNlXG4gIHJldHVybiBwYXJlbnQuc3VwcG9ydHMuZW5jb2RpbmdzW2VuY29kaW5nXVxuICAgID8gcGFyZW50LmtleUVuY29kaW5nKGVuY29kaW5nKS5uYW1lID09PSBlbmNvZGluZ1xuICAgIDogZmFsc2Vcbn1cblxuY2xhc3MgTXVsdGlGb3JtYXQge1xuICBjb25zdHJ1Y3RvciAoa2V5KSB7XG4gICAgdGhpcy51dGY4ID0ga2V5XG4gICAgdGhpcy52aWV3ID0gdGV4dEVuY29kZXIuZW5jb2RlKGtleSlcbiAgICB0aGlzLmJ1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5mcm9tKHRoaXMudmlldy5idWZmZXIsIDAsIHRoaXMudmlldy5ieXRlTGVuZ3RoKSA6IHt9XG4gIH1cbn1cblxuY2xhc3MgVW5maXhlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNhY2hlID0gbmV3IE1hcCgpXG4gIH1cblxuICBnZXQgKHByZWZpeExlbmd0aCwga2V5Rm9ybWF0KSB7XG4gICAgbGV0IHVuZml4ID0gdGhpcy5jYWNoZS5nZXQoa2V5Rm9ybWF0KVxuXG4gICAgaWYgKHVuZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChrZXlGb3JtYXQgPT09ICd2aWV3Jykge1xuICAgICAgICB1bmZpeCA9IGZ1bmN0aW9uIChwcmVmaXhMZW5ndGgsIGtleSkge1xuICAgICAgICAgIC8vIEF2b2lkIFVpbnQ4QXJyYXkjc2xpY2UoKSBiZWNhdXNlIGl0IGNvcGllc1xuICAgICAgICAgIHJldHVybiBrZXkuc3ViYXJyYXkocHJlZml4TGVuZ3RoKVxuICAgICAgICB9LmJpbmQobnVsbCwgcHJlZml4TGVuZ3RoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5maXggPSBmdW5jdGlvbiAocHJlZml4TGVuZ3RoLCBrZXkpIHtcbiAgICAgICAgICAvLyBBdm9pZCBCdWZmZXIjc3ViYXJyYXkoKSBiZWNhdXNlIGl0J3Mgc2xvd1xuICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UocHJlZml4TGVuZ3RoKVxuICAgICAgICB9LmJpbmQobnVsbCwgcHJlZml4TGVuZ3RoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhY2hlLnNldChrZXlGb3JtYXQsIHVuZml4KVxuICAgIH1cblxuICAgIHJldHVybiB1bmZpeFxuICB9XG59XG5cbmNvbnN0IHRyaW0gPSBmdW5jdGlvbiAoc3RyLCBjaGFyKSB7XG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGVuZCA9IHN0ci5sZW5ndGhcblxuICB3aGlsZSAoc3RhcnQgPCBlbmQgJiYgc3RyW3N0YXJ0XSA9PT0gY2hhcikgc3RhcnQrK1xuICB3aGlsZSAoZW5kID4gc3RhcnQgJiYgc3RyW2VuZCAtIDFdID09PSBjaGFyKSBlbmQtLVxuXG4gIHJldHVybiBzdHIuc2xpY2Uoc3RhcnQsIGVuZClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IHN1cHBvcnRzIH0gPSByZXF1aXJlKCdsZXZlbC1zdXBwb3J0cycpXG5jb25zdCB7IFRyYW5zY29kZXIgfSA9IHJlcXVpcmUoJ2xldmVsLXRyYW5zY29kZXInKVxuY29uc3QgeyBFdmVudEVtaXR0ZXIgfSA9IHJlcXVpcmUoJ2V2ZW50cycpXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCBjb21iaW5lRXJyb3JzID0gcmVxdWlyZSgnbWF5YmUtY29tYmluZS1lcnJvcnMnKVxuY29uc3QgeyBBYnN0cmFjdEl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuL2Fic3RyYWN0LWl0ZXJhdG9yJylcbmNvbnN0IHsgRGVmYXVsdEtleUl0ZXJhdG9yLCBEZWZhdWx0VmFsdWVJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi9saWIvZGVmYXVsdC1rdi1pdGVyYXRvcicpXG5jb25zdCB7IERlZmVycmVkSXRlcmF0b3IsIERlZmVycmVkS2V5SXRlcmF0b3IsIERlZmVycmVkVmFsdWVJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi9saWIvZGVmZXJyZWQtaXRlcmF0b3InKVxuY29uc3QgeyBEZWZhdWx0Q2hhaW5lZEJhdGNoIH0gPSByZXF1aXJlKCcuL2xpYi9kZWZhdWx0LWNoYWluZWQtYmF0Y2gnKVxuY29uc3QgeyBEYXRhYmFzZUhvb2tzIH0gPSByZXF1aXJlKCcuL2xpYi9ob29rcycpXG5jb25zdCB7IFByZXdyaXRlQmF0Y2ggfSA9IHJlcXVpcmUoJy4vbGliL3ByZXdyaXRlLWJhdGNoJylcbmNvbnN0IHsgRXZlbnRNb25pdG9yIH0gPSByZXF1aXJlKCcuL2xpYi9ldmVudC1tb25pdG9yJylcbmNvbnN0IHsgZ2V0T3B0aW9ucywgbm9vcCwgZW1wdHlPcHRpb25zLCByZXNvbHZlZFByb21pc2UgfSA9IHJlcXVpcmUoJy4vbGliL2NvbW1vbicpXG5jb25zdCB7IHByZWZpeERlc2NlbmRhbnRLZXksIGlzRGVzY2VuZGFudCB9ID0gcmVxdWlyZSgnLi9saWIvcHJlZml4ZXMnKVxuY29uc3QgeyBEZWZlcnJlZFF1ZXVlIH0gPSByZXF1aXJlKCcuL2xpYi9kZWZlcnJlZC1xdWV1ZScpXG5jb25zdCByYW5nZU9wdGlvbnMgPSByZXF1aXJlKCcuL2xpYi9yYW5nZS1vcHRpb25zJylcblxuY29uc3Qga1Jlc291cmNlcyA9IFN5bWJvbCgncmVzb3VyY2VzJylcbmNvbnN0IGtDbG9zZVJlc291cmNlcyA9IFN5bWJvbCgnY2xvc2VSZXNvdXJjZXMnKVxuY29uc3Qga1F1ZXVlID0gU3ltYm9sKCdxdWV1ZScpXG5jb25zdCBrRGVmZXJPcGVuID0gU3ltYm9sKCdkZWZlck9wZW4nKVxuY29uc3Qga09wdGlvbnMgPSBTeW1ib2woJ29wdGlvbnMnKVxuY29uc3Qga1N0YXR1cyA9IFN5bWJvbCgnc3RhdHVzJylcbmNvbnN0IGtTdGF0dXNDaGFuZ2UgPSBTeW1ib2woJ3N0YXR1c0NoYW5nZScpXG5jb25zdCBrU3RhdHVzTG9ja2VkID0gU3ltYm9sKCdzdGF0dXNMb2NrZWQnKVxuY29uc3Qga0RlZmF1bHRPcHRpb25zID0gU3ltYm9sKCdkZWZhdWx0T3B0aW9ucycpXG5jb25zdCBrVHJhbnNjb2RlciA9IFN5bWJvbCgndHJhbnNjb2RlcicpXG5jb25zdCBrS2V5RW5jb2RpbmcgPSBTeW1ib2woJ2tleUVuY29kaW5nJylcbmNvbnN0IGtWYWx1ZUVuY29kaW5nID0gU3ltYm9sKCd2YWx1ZUVuY29kaW5nJylcbmNvbnN0IGtFdmVudE1vbml0b3IgPSBTeW1ib2woJ2V2ZW50TW9uaXRvcicpXG5jb25zdCBrQXJyYXlCYXRjaCA9IFN5bWJvbCgnYXJyYXlCYXRjaCcpXG5cbmNsYXNzIEFic3RyYWN0TGV2ZWwgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAobWFuaWZlc3QsIG9wdGlvbnMpIHtcbiAgICBzdXBlcigpXG5cbiAgICBpZiAodHlwZW9mIG1hbmlmZXN0ICE9PSAnb2JqZWN0JyB8fCBtYW5pZmVzdCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCAnbWFuaWZlc3QnIG11c3QgYmUgYW4gb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcbiAgICBjb25zdCB7IGtleUVuY29kaW5nLCB2YWx1ZUVuY29kaW5nLCBwYXNzaXZlLCAuLi5mb3J3YXJkIH0gPSBvcHRpb25zXG5cbiAgICB0aGlzW2tSZXNvdXJjZXNdID0gbmV3IFNldCgpXG4gICAgdGhpc1trUXVldWVdID0gbmV3IERlZmVycmVkUXVldWUoKVxuICAgIHRoaXNba0RlZmVyT3Blbl0gPSB0cnVlXG4gICAgdGhpc1trT3B0aW9uc10gPSBmb3J3YXJkXG4gICAgdGhpc1trU3RhdHVzXSA9ICdvcGVuaW5nJ1xuICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSBudWxsXG4gICAgdGhpc1trU3RhdHVzTG9ja2VkXSA9IGZhbHNlXG5cbiAgICB0aGlzLmhvb2tzID0gbmV3IERhdGFiYXNlSG9va3MoKVxuICAgIHRoaXMuc3VwcG9ydHMgPSBzdXBwb3J0cyhtYW5pZmVzdCwge1xuICAgICAgZGVmZXJyZWRPcGVuOiB0cnVlLFxuXG4gICAgICAvLyBUT0RPIChuZXh0IG1ham9yKTogYWRkIHNlZWtcbiAgICAgIHNuYXBzaG90czogbWFuaWZlc3Quc25hcHNob3RzICE9PSBmYWxzZSxcbiAgICAgIHBlcm1hbmVuY2U6IG1hbmlmZXN0LnBlcm1hbmVuY2UgIT09IGZhbHNlLFxuXG4gICAgICBlbmNvZGluZ3M6IG1hbmlmZXN0LmVuY29kaW5ncyB8fCB7fSxcbiAgICAgIGV2ZW50czogT2JqZWN0LmFzc2lnbih7fSwgbWFuaWZlc3QuZXZlbnRzLCB7XG4gICAgICAgIG9wZW5pbmc6IHRydWUsXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIGNsb3Npbmc6IHRydWUsXG4gICAgICAgIGNsb3NlZDogdHJ1ZSxcbiAgICAgICAgd3JpdGU6IHRydWUsXG4gICAgICAgIHB1dDogdHJ1ZSxcbiAgICAgICAgZGVsOiB0cnVlLFxuICAgICAgICBiYXRjaDogdHJ1ZSxcbiAgICAgICAgY2xlYXI6IHRydWVcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIE1vbml0b3IgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpc1trRXZlbnRNb25pdG9yXSA9IG5ldyBFdmVudE1vbml0b3IodGhpcywgW1xuICAgICAgeyBuYW1lOiAnd3JpdGUnIH0sXG4gICAgICB7IG5hbWU6ICdwdXQnLCBkZXByZWNhdGVkOiB0cnVlLCBhbHQ6ICd3cml0ZScgfSxcbiAgICAgIHsgbmFtZTogJ2RlbCcsIGRlcHJlY2F0ZWQ6IHRydWUsIGFsdDogJ3dyaXRlJyB9LFxuICAgICAgeyBuYW1lOiAnYmF0Y2gnLCBkZXByZWNhdGVkOiB0cnVlLCBhbHQ6ICd3cml0ZScgfVxuICAgIF0pXG5cbiAgICB0aGlzW2tUcmFuc2NvZGVyXSA9IG5ldyBUcmFuc2NvZGVyKGZvcm1hdHModGhpcykpXG4gICAgdGhpc1trS2V5RW5jb2RpbmddID0gdGhpc1trVHJhbnNjb2Rlcl0uZW5jb2Rpbmcoa2V5RW5jb2RpbmcgfHwgJ3V0ZjgnKVxuICAgIHRoaXNba1ZhbHVlRW5jb2RpbmddID0gdGhpc1trVHJhbnNjb2Rlcl0uZW5jb2RpbmcodmFsdWVFbmNvZGluZyB8fCAndXRmOCcpXG5cbiAgICAvLyBBZGQgY3VzdG9tIGFuZCB0cmFuc2NvZGVyIGVuY29kaW5ncyB0byBtYW5pZmVzdFxuICAgIGZvciAoY29uc3QgZW5jb2Rpbmcgb2YgdGhpc1trVHJhbnNjb2Rlcl0uZW5jb2RpbmdzKCkpIHtcbiAgICAgIGlmICghdGhpcy5zdXBwb3J0cy5lbmNvZGluZ3NbZW5jb2RpbmcuY29tbW9uTmFtZV0pIHtcbiAgICAgICAgdGhpcy5zdXBwb3J0cy5lbmNvZGluZ3NbZW5jb2RpbmcuY29tbW9uTmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpc1trRGVmYXVsdE9wdGlvbnNdID0ge1xuICAgICAgZW1wdHk6IGVtcHR5T3B0aW9ucyxcbiAgICAgIGVudHJ5OiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAga2V5RW5jb2Rpbmc6IHRoaXNba0tleUVuY29kaW5nXS5jb21tb25OYW1lLFxuICAgICAgICB2YWx1ZUVuY29kaW5nOiB0aGlzW2tWYWx1ZUVuY29kaW5nXS5jb21tb25OYW1lXG4gICAgICB9KSxcbiAgICAgIGVudHJ5Rm9ybWF0OiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAga2V5RW5jb2Rpbmc6IHRoaXNba0tleUVuY29kaW5nXS5mb3JtYXQsXG4gICAgICAgIHZhbHVlRW5jb2Rpbmc6IHRoaXNba1ZhbHVlRW5jb2RpbmddLmZvcm1hdFxuICAgICAgfSksXG4gICAgICBrZXk6IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBrZXlFbmNvZGluZzogdGhpc1trS2V5RW5jb2RpbmddLmNvbW1vbk5hbWVcbiAgICAgIH0pLFxuICAgICAga2V5Rm9ybWF0OiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAga2V5RW5jb2Rpbmc6IHRoaXNba0tleUVuY29kaW5nXS5mb3JtYXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gQmVmb3JlIHdlIHN0YXJ0IG9wZW5pbmcsIGxldCBzdWJjbGFzcyBmaW5pc2ggaXRzIGNvbnN0cnVjdG9yXG4gICAgLy8gYW5kIGFsbG93IGV2ZW50cyBhbmQgcG9zdG9wZW4gaG9vayBmdW5jdGlvbnMgdG8gYmUgYWRkZWQuXG4gICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgaWYgKHRoaXNba0RlZmVyT3Blbl0pIHtcbiAgICAgICAgdGhpcy5vcGVuKHsgcGFzc2l2ZTogZmFsc2UgfSkuY2F0Y2gobm9vcClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0IHN0YXR1cyAoKSB7XG4gICAgcmV0dXJuIHRoaXNba1N0YXR1c11cbiAgfVxuXG4gIGdldCBwYXJlbnQgKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBrZXlFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgICByZXR1cm4gdGhpc1trVHJhbnNjb2Rlcl0uZW5jb2RpbmcoZW5jb2RpbmcgIT0gbnVsbCA/IGVuY29kaW5nIDogdGhpc1trS2V5RW5jb2RpbmddKVxuICB9XG5cbiAgdmFsdWVFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgICByZXR1cm4gdGhpc1trVHJhbnNjb2Rlcl0uZW5jb2RpbmcoZW5jb2RpbmcgIT0gbnVsbCA/IGVuY29kaW5nIDogdGhpc1trVmFsdWVFbmNvZGluZ10pXG4gIH1cblxuICBhc3luYyBvcGVuIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHsgLi4udGhpc1trT3B0aW9uc10sIC4uLmdldE9wdGlvbnMob3B0aW9ucykgfVxuXG4gICAgb3B0aW9ucy5jcmVhdGVJZk1pc3NpbmcgPSBvcHRpb25zLmNyZWF0ZUlmTWlzc2luZyAhPT0gZmFsc2VcbiAgICBvcHRpb25zLmVycm9ySWZFeGlzdHMgPSAhIW9wdGlvbnMuZXJyb3JJZkV4aXN0c1xuXG4gICAgLy8gVE9ETzogZG9jdW1lbnQgd2h5IHdlIGRvIHRoaXNcbiAgICBjb25zdCBwb3N0b3BlbiA9IHRoaXMuaG9va3MucG9zdG9wZW4ubm9vcCA/IG51bGwgOiB0aGlzLmhvb2tzLnBvc3RvcGVuLnJ1blxuICAgIGNvbnN0IHBhc3NpdmUgPSBvcHRpb25zLnBhc3NpdmVcblxuICAgIGlmIChwYXNzaXZlICYmIHRoaXNba0RlZmVyT3Blbl0pIHtcbiAgICAgIC8vIFdhaXQgYSB0aWNrIHVudGlsIGNvbnN0cnVjdG9yIGNhbGxzIG9wZW4oKSBub24tcGFzc2l2ZWx5XG4gICAgICBhd2FpdCB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciBwZW5kaW5nIGNoYW5nZXMgYW5kIGNoZWNrIHRoYXQgb3BlbmluZyBpcyBhbGxvd2VkXG4gICAgYXNzZXJ0VW5sb2NrZWQodGhpcylcbiAgICB3aGlsZSAodGhpc1trU3RhdHVzQ2hhbmdlXSAhPT0gbnVsbCkgYXdhaXQgdGhpc1trU3RhdHVzQ2hhbmdlXS5jYXRjaChub29wKVxuICAgIGFzc2VydFVubG9ja2VkKHRoaXMpXG5cbiAgICBpZiAocGFzc2l2ZSkge1xuICAgICAgaWYgKHRoaXNba1N0YXR1c10gIT09ICdvcGVuJykgdGhyb3cgbmV3IE5vdE9wZW5FcnJvcigpXG4gICAgfSBlbHNlIGlmICh0aGlzW2tTdGF0dXNdID09PSAnY2xvc2VkJyB8fCB0aGlzW2tEZWZlck9wZW5dKSB7XG4gICAgICB0aGlzW2tEZWZlck9wZW5dID0gZmFsc2VcbiAgICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSByZXNvbHZlZFByb21pc2UgLy8gVE9ETzogcmVmYWN0b3JcbiAgICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ29wZW5pbmcnXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ29wZW5pbmcnKVxuICAgICAgICAgIGF3YWl0IHRoaXMuX29wZW4ob3B0aW9ucylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdjbG9zZWQnXG5cbiAgICAgICAgICAvLyBNdXN0IGhhcHBlbiBiZWZvcmUgd2UgY2xvc2UgcmVzb3VyY2VzLCBpbiBjYXNlIHRoZWlyIGNsb3NlKCkgaXMgd2FpdGluZ1xuICAgICAgICAgIC8vIG9uIGEgZGVmZXJyZWQgb3BlcmF0aW9uIHdoaWNoIGluIHR1cm4gaXMgd2FpdGluZyBvbiBkYi5vcGVuKCkuXG4gICAgICAgICAgdGhpc1trUXVldWVdLmRyYWluKClcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzW2tDbG9zZVJlc291cmNlc10oKVxuICAgICAgICAgIH0gY2F0Y2ggKHJlc291cmNlRXJyKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXgtYXNzaWduXG4gICAgICAgICAgICBlcnIgPSBjb21iaW5lRXJyb3JzKFtlcnIsIHJlc291cmNlRXJyXSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgTm90T3BlbkVycm9yKGVycilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNba1N0YXR1c10gPSAnb3BlbidcblxuICAgICAgICBpZiAocG9zdG9wZW4gIT09IG51bGwpIHtcbiAgICAgICAgICBsZXQgaG9va0VyclxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVhZGxvY2tcbiAgICAgICAgICAgIHRoaXNba1N0YXR1c0xvY2tlZF0gPSB0cnVlXG4gICAgICAgICAgICBhd2FpdCBwb3N0b3BlbihvcHRpb25zKVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaG9va0VyciA9IGNvbnZlcnRSZWplY3Rpb24oZXJyKVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzW2tTdGF0dXNMb2NrZWRdID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZXZlcnRcbiAgICAgICAgICBpZiAoaG9va0Vycikge1xuICAgICAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdjbG9zaW5nJ1xuICAgICAgICAgICAgdGhpc1trUXVldWVdLmRyYWluKClcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpc1trQ2xvc2VSZXNvdXJjZXNdKClcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fY2xvc2UoKVxuICAgICAgICAgICAgfSBjYXRjaCAoY2xvc2VFcnIpIHtcbiAgICAgICAgICAgICAgLy8gVGhlcmUncyBubyBzYWZlIHN0YXRlIHRvIHJldHVybiB0by4gQ2FuJ3QgcmV0dXJuIHRvICdvcGVuJyBiZWNhdXNlXG4gICAgICAgICAgICAgIC8vIHBvc3RvcGVuIGhvb2sgZmFpbGVkLiBDYW4ndCByZXR1cm4gdG8gJ2Nsb3NlZCcgKHdpdGggdGhlIGFiaWxpdHkgdG9cbiAgICAgICAgICAgICAgLy8gcmVvcGVuKSBiZWNhdXNlIHRoZSB1bmRlcmx5aW5nIGRhdGFiYXNlIGlzIHBvdGVudGlhbGx5IHN0aWxsIG9wZW4uXG4gICAgICAgICAgICAgIHRoaXNba1N0YXR1c0xvY2tlZF0gPSB0cnVlXG4gICAgICAgICAgICAgIGhvb2tFcnIgPSBjb21iaW5lRXJyb3JzKFtob29rRXJyLCBjbG9zZUVycl0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXNba1N0YXR1c10gPSAnY2xvc2VkJ1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ1RoZSBwb3N0b3BlbiBob29rIGZhaWxlZCBvbiBvcGVuKCknLCB7XG4gICAgICAgICAgICAgIGNvZGU6ICdMRVZFTF9IT09LX0VSUk9SJyxcbiAgICAgICAgICAgICAgY2F1c2U6IGhvb2tFcnJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1trUXVldWVdLmRyYWluKClcbiAgICAgICAgdGhpcy5lbWl0KCdvcGVuJylcbiAgICAgIH0pKClcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpc1trU3RhdHVzQ2hhbmdlXVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IG51bGxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXNba1N0YXR1c10gIT09ICdvcGVuJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNob3VsZCBub3QgaGFwcGVuICovXG4gICAgICB0aHJvdyBuZXcgTm90T3BlbkVycm9yKClcbiAgICB9XG4gIH1cblxuICBhc3luYyBfb3BlbiAob3B0aW9ucykge31cblxuICBhc3luYyBjbG9zZSAoKSB7XG4gICAgLy8gV2FpdCBmb3IgcGVuZGluZyBjaGFuZ2VzIGFuZCBjaGVjayB0aGF0IGNsb3NpbmcgaXMgYWxsb3dlZFxuICAgIGFzc2VydFVubG9ja2VkKHRoaXMpXG4gICAgd2hpbGUgKHRoaXNba1N0YXR1c0NoYW5nZV0gIT09IG51bGwpIGF3YWl0IHRoaXNba1N0YXR1c0NoYW5nZV0uY2F0Y2gobm9vcClcbiAgICBhc3NlcnRVbmxvY2tlZCh0aGlzKVxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuJyB8fCB0aGlzW2tEZWZlck9wZW5dKSB7XG4gICAgICAvLyBJZiBjbG9zZSgpIHdhcyBjYWxsZWQgYWZ0ZXIgY29uc3RydWN0b3IsIHdlIGRpZG4ndCBvcGVuIHlldFxuICAgICAgY29uc3QgZnJvbUluaXRpYWwgPSB0aGlzW2tEZWZlck9wZW5dXG5cbiAgICAgIHRoaXNba0RlZmVyT3Blbl0gPSBmYWxzZVxuICAgICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IHJlc29sdmVkUHJvbWlzZVxuICAgICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXNba1N0YXR1c10gPSAnY2xvc2luZydcbiAgICAgICAgdGhpc1trUXVldWVdLmRyYWluKClcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnY2xvc2luZycpXG4gICAgICAgICAgYXdhaXQgdGhpc1trQ2xvc2VSZXNvdXJjZXNdKClcbiAgICAgICAgICBpZiAoIWZyb21Jbml0aWFsKSBhd2FpdCB0aGlzLl9jbG9zZSgpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRoaXNba1N0YXR1c10gPSAnb3BlbidcbiAgICAgICAgICB0aGlzW2tRdWV1ZV0uZHJhaW4oKVxuICAgICAgICAgIHRocm93IG5ldyBOb3RDbG9zZWRFcnJvcihlcnIpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ2Nsb3NlZCdcbiAgICAgICAgdGhpc1trUXVldWVdLmRyYWluKClcbiAgICAgICAgdGhpcy5lbWl0KCdjbG9zZWQnKVxuICAgICAgfSkoKVxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzW2tTdGF0dXNDaGFuZ2VdXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpc1trU3RhdHVzXSAhPT0gJ2Nsb3NlZCcpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzaG91bGQgbm90IGhhcHBlbiAqL1xuICAgICAgdGhyb3cgbmV3IE5vdENsb3NlZEVycm9yKClcbiAgICB9XG4gIH1cblxuICBhc3luYyBba0Nsb3NlUmVzb3VyY2VzXSAoKSB7XG4gICAgaWYgKHRoaXNba1Jlc291cmNlc10uc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSW4gcGFyYWxsZWwgc28gdGhhdCBhbGwgcmVzb3VyY2VzIGtub3cgdGhleSBhcmUgY2xvc2VkXG4gICAgY29uc3QgcmVzb3VyY2VzID0gQXJyYXkuZnJvbSh0aGlzW2tSZXNvdXJjZXNdKVxuICAgIGNvbnN0IHByb21pc2VzID0gcmVzb3VyY2VzLm1hcChjbG9zZVJlc291cmNlKVxuXG4gICAgLy8gVE9ETzogYXN5bmMvYXdhaXRcbiAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKS50aGVuKGFzeW5jIChyZXN1bHRzKSA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSBbXVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlc3VsdHNbaV0uc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgICAgIHRoaXNba1Jlc291cmNlc10uZGVsZXRlKHJlc291cmNlc1tpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChjb252ZXJ0UmVqZWN0aW9uKHJlc3VsdHNbaV0ucmVhc29uKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgY29tYmluZUVycm9ycyhlcnJvcnMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIF9jbG9zZSAoKSB7fVxuXG4gIGFzeW5jIGdldCAoa2V5LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVudHJ5KVxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmZXJBc3luYygoKSA9PiB0aGlzLmdldChrZXksIG9wdGlvbnMpKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcblxuICAgIGNvbnN0IGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSlcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnJcblxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2Rpbmcob3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIGNvbnN0IHZhbHVlRm9ybWF0ID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgIC8vIEZvcndhcmQgZW5jb2Rpbmcgb3B0aW9ucyB0byB0aGUgdW5kZXJseWluZyBzdG9yZVxuICAgIGlmIChvcHRpb25zLmtleUVuY29kaW5nICE9PSBrZXlGb3JtYXQgfHwgb3B0aW9ucy52YWx1ZUVuY29kaW5nICE9PSB2YWx1ZUZvcm1hdCkge1xuICAgICAgLy8gQXZvaWQgc3ByZWFkIG9wZXJhdG9yIGJlY2F1c2Ugb2YgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwNDU0MFxuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsga2V5RW5jb2Rpbmc6IGtleUZvcm1hdCwgdmFsdWVFbmNvZGluZzogdmFsdWVGb3JtYXQgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKGtleSlcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXMuX2dldCh0aGlzLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpLCBvcHRpb25zKVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiB2YWx1ZUVuY29kaW5nLmRlY29kZSh2YWx1ZSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignQ291bGQgbm90IGRlY29kZSB2YWx1ZScsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0RFQ09ERV9FUlJPUicsXG4gICAgICAgIGNhdXNlOiBlcnJcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2dldCAoa2V5LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgYXN5bmMgZ2V0TWFueSAoa2V5cywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbnRyeSlcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5nZXRNYW55KGtleXMsIG9wdGlvbnMpKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCAna2V5cycgbXVzdCBiZSBhbiBhcnJheVwiKVxuICAgIH1cblxuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyhvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgY29uc3QgdmFsdWVGb3JtYXQgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgLy8gRm9yd2FyZCBlbmNvZGluZyBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMua2V5RW5jb2RpbmcgIT09IGtleUZvcm1hdCB8fCBvcHRpb25zLnZhbHVlRW5jb2RpbmcgIT09IHZhbHVlRm9ybWF0KSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBrZXlFbmNvZGluZzoga2V5Rm9ybWF0LCB2YWx1ZUVuY29kaW5nOiB2YWx1ZUZvcm1hdCB9KVxuICAgIH1cblxuICAgIGNvbnN0IG1hcHBlZEtleXMgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICAgIGNvbnN0IGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSlcbiAgICAgIGlmIChlcnIpIHRocm93IGVyclxuXG4gICAgICBtYXBwZWRLZXlzW2ldID0gdGhpcy5wcmVmaXhLZXkoa2V5RW5jb2RpbmcuZW5jb2RlKGtleSksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCB0aGlzLl9nZXRNYW55KG1hcHBlZEtleXMsIG9wdGlvbnMpXG5cbiAgICB0cnkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWVFbmNvZGluZy5kZWNvZGUodmFsdWVzW2ldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoYENvdWxkIG5vdCBkZWNvZGUgb25lIG9yIG1vcmUgb2YgJHt2YWx1ZXMubGVuZ3RofSB2YWx1ZShzKWAsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0RFQ09ERV9FUlJPUicsXG4gICAgICAgIGNhdXNlOiBlcnJcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1xuICB9XG5cbiAgYXN5bmMgX2dldE1hbnkgKGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5KGtleXMubGVuZ3RoKS5maWxsKHVuZGVmaW5lZClcbiAgfVxuXG4gIGFzeW5jIHB1dCAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGlmICghdGhpcy5ob29rcy5wcmV3cml0ZS5ub29wKSB7XG4gICAgICAvLyBGb3J3YXJkIHRvIGJhdGNoKCkgd2hpY2ggd2lsbCBydW4gdGhlIGhvb2tcbiAgICAgIC8vIE5vdGU6IHRlY2huaWNhbGx5IG1lYW5zIHRoYXQgcHV0KCkgc3VwcG9ydHMgdGhlIHN1YmxldmVsIG9wdGlvbiBpbiB0aGlzIGNhc2UsXG4gICAgICAvLyBidXQgaXQgZ2VuZXJhbGx5IGRvZXNuJ3QgcGVyIGRvY3VtZW50YXRpb24gKHdoaWNoIG1ha2VzIHNlbnNlKS4gU2FtZSBmb3IgZGVsKCkuXG4gICAgICByZXR1cm4gdGhpcy5iYXRjaChbeyB0eXBlOiAncHV0Jywga2V5LCB2YWx1ZSB9XSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW50cnkpXG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZlckFzeW5jKCgpID0+IHRoaXMucHV0KGtleSwgdmFsdWUsIG9wdGlvbnMpKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcblxuICAgIGNvbnN0IGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSkgfHwgdGhpcy5fY2hlY2tWYWx1ZSh2YWx1ZSlcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnJcblxuICAgIC8vIEVuY29kZSBkYXRhIGZvciBwcml2YXRlIEFQSVxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2Rpbmcob3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIGNvbnN0IHZhbHVlRm9ybWF0ID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcbiAgICBjb25zdCBlbmFibGVXcml0ZUV2ZW50ID0gdGhpc1trRXZlbnRNb25pdG9yXS53cml0ZVxuICAgIGNvbnN0IG9yaWdpbmFsID0gb3B0aW9uc1xuXG4gICAgLy8gQXZvaWQgT2JqZWN0LmFzc2lnbigpIGZvciBkZWZhdWx0IG9wdGlvbnNcbiAgICAvLyBUT0RPOiBhbHNvIGFwcGx5IHRoaXMgdHdlYWsgdG8gZ2V0KCkgYW5kIGdldE1hbnkoKVxuICAgIGlmIChvcHRpb25zID09PSB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW50cnkpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW50cnlGb3JtYXRcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMua2V5RW5jb2RpbmcgIT09IGtleUZvcm1hdCB8fCBvcHRpb25zLnZhbHVlRW5jb2RpbmcgIT09IHZhbHVlRm9ybWF0KSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBrZXlFbmNvZGluZzoga2V5Rm9ybWF0LCB2YWx1ZUVuY29kaW5nOiB2YWx1ZUZvcm1hdCB9KVxuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRLZXkgPSBrZXlFbmNvZGluZy5lbmNvZGUoa2V5KVxuICAgIGNvbnN0IHByZWZpeGVkS2V5ID0gdGhpcy5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IHZhbHVlRW5jb2RpbmcuZW5jb2RlKHZhbHVlKVxuXG4gICAgYXdhaXQgdGhpcy5fcHV0KHByZWZpeGVkS2V5LCBlbmNvZGVkVmFsdWUsIG9wdGlvbnMpXG5cbiAgICBpZiAoZW5hYmxlV3JpdGVFdmVudCkge1xuICAgICAgY29uc3Qgb3AgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwge1xuICAgICAgICB0eXBlOiAncHV0JyxcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAga2V5RW5jb2RpbmcsXG4gICAgICAgIHZhbHVlRW5jb2RpbmcsXG4gICAgICAgIGVuY29kZWRLZXksXG4gICAgICAgIGVuY29kZWRWYWx1ZVxuICAgICAgfSlcblxuICAgICAgdGhpcy5lbWl0KCd3cml0ZScsIFtvcF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8gKHNlbXZlci1tYWpvcik6IHJlbW92ZVxuICAgICAgdGhpcy5lbWl0KCdwdXQnLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9wdXQgKGtleSwgdmFsdWUsIG9wdGlvbnMpIHt9XG5cbiAgYXN5bmMgZGVsIChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuaG9va3MucHJld3JpdGUubm9vcCkge1xuICAgICAgLy8gRm9yd2FyZCB0byBiYXRjaCgpIHdoaWNoIHdpbGwgcnVuIHRoZSBob29rXG4gICAgICByZXR1cm4gdGhpcy5iYXRjaChbeyB0eXBlOiAnZGVsJywga2V5IH1dLCBvcHRpb25zKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIHRoaXNba0RlZmF1bHRPcHRpb25zXS5rZXkpXG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZlckFzeW5jKCgpID0+IHRoaXMuZGVsKGtleSwgb3B0aW9ucykpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuXG4gICAgY29uc3QgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5KVxuICAgIGlmIChlcnIpIHRocm93IGVyclxuXG4gICAgLy8gRW5jb2RlIGRhdGEgZm9yIHByaXZhdGUgQVBJXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgY29uc3QgZW5hYmxlV3JpdGVFdmVudCA9IHRoaXNba0V2ZW50TW9uaXRvcl0ud3JpdGVcbiAgICBjb25zdCBvcmlnaW5hbCA9IG9wdGlvbnNcblxuICAgIC8vIEF2b2lkIE9iamVjdC5hc3NpZ24oKSBmb3IgZGVmYXVsdCBvcHRpb25zXG4gICAgaWYgKG9wdGlvbnMgPT09IHRoaXNba0RlZmF1bHRPcHRpb25zXS5rZXkpIHtcbiAgICAgIG9wdGlvbnMgPSB0aGlzW2tEZWZhdWx0T3B0aW9uc10ua2V5Rm9ybWF0XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmtleUVuY29kaW5nICE9PSBrZXlGb3JtYXQpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGtleUVuY29kaW5nOiBrZXlGb3JtYXQgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKGtleSlcbiAgICBjb25zdCBwcmVmaXhlZEtleSA9IHRoaXMucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSlcblxuICAgIGF3YWl0IHRoaXMuX2RlbChwcmVmaXhlZEtleSwgb3B0aW9ucylcblxuICAgIGlmIChlbmFibGVXcml0ZUV2ZW50KSB7XG4gICAgICBjb25zdCBvcCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsLCB7XG4gICAgICAgIHR5cGU6ICdkZWwnLFxuICAgICAgICBrZXksXG4gICAgICAgIGtleUVuY29kaW5nLFxuICAgICAgICBlbmNvZGVkS2V5XG4gICAgICB9KVxuXG4gICAgICB0aGlzLmVtaXQoJ3dyaXRlJywgW29wXSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETyAoc2VtdmVyLW1ham9yKTogcmVtb3ZlXG4gICAgICB0aGlzLmVtaXQoJ2RlbCcsIGtleSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBfZGVsIChrZXksIG9wdGlvbnMpIHt9XG5cbiAgLy8gVE9ETyAoZnV0dXJlKTogYWRkIHdheSBmb3IgaW1wbGVtZW50YXRpb25zIHRvIGRlY2xhcmUgd2hpY2ggb3B0aW9ucyBhcmUgZm9yIHRoZVxuICAvLyB3aG9sZSBiYXRjaCByYXRoZXIgdGhhbiBkZWZhdWx0cyBmb3IgaW5kaXZpZHVhbCBvcGVyYXRpb25zLiBFLmcuIHRoZSBzeW5jIG9wdGlvblxuICAvLyBvZiBjbGFzc2ljLWxldmVsLCB0aGF0IHNob3VsZCBub3QgYmUgY29waWVkIHRvIGluZGl2aWR1YWwgb3BlcmF0aW9ucy5cbiAgYmF0Y2ggKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGFzc2VydE9wZW4odGhpcylcbiAgICAgIHJldHVybiB0aGlzLl9jaGFpbmVkQmF0Y2goKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbXB0eSlcbiAgICByZXR1cm4gdGhpc1trQXJyYXlCYXRjaF0ob3BlcmF0aW9ucywgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFdyYXBwZWQgZm9yIGFzeW5jIGVycm9yIGhhbmRsaW5nXG4gIGFzeW5jIFtrQXJyYXlCYXRjaF0gKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAvLyBUT0RPIChub3QgdXJnZW50KTogZnJlZXplIHByZXdyaXRlIGhvb2sgYW5kIHdyaXRlIGV2ZW50XG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmZXJBc3luYygoKSA9PiB0aGlzW2tBcnJheUJhdGNoXShvcGVyYXRpb25zLCBvcHRpb25zKSlcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkob3BlcmF0aW9ucykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgJ29wZXJhdGlvbnMnIG11c3QgYmUgYW4gYXJyYXlcIilcbiAgICB9XG5cbiAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoXG4gICAgY29uc3QgZW5hYmxlUHJld3JpdGVIb29rID0gIXRoaXMuaG9va3MucHJld3JpdGUubm9vcFxuICAgIGNvbnN0IGVuYWJsZVdyaXRlRXZlbnQgPSB0aGlzW2tFdmVudE1vbml0b3JdLndyaXRlXG4gICAgY29uc3QgcHVibGljT3BlcmF0aW9ucyA9IGVuYWJsZVdyaXRlRXZlbnQgPyBuZXcgQXJyYXkobGVuZ3RoKSA6IG51bGxcbiAgICBjb25zdCBwcml2YXRlT3BlcmF0aW9ucyA9IG5ldyBBcnJheShsZW5ndGgpXG4gICAgY29uc3QgcHJld3JpdGVCYXRjaCA9IGVuYWJsZVByZXdyaXRlSG9va1xuICAgICAgPyBuZXcgUHJld3JpdGVCYXRjaCh0aGlzLCBwcml2YXRlT3BlcmF0aW9ucywgcHVibGljT3BlcmF0aW9ucylcbiAgICAgIDogbnVsbFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ2xvbmUgdGhlIG9wIHNvIHRoYXQgd2UgY2FuIGZyZWVseSBtdXRhdGUgaXQuIFdlIGNhbid0IHVzZSBhIGNsYXNzIGJlY2F1c2UgdGhlXG4gICAgICAvLyBvcCBjYW4gaGF2ZSB1c2VybGFuZCBwcm9wZXJ0aWVzIHRoYXQgd2UnZCBoYXZlIHRvIGNvcHksIG5lZ2F0aW5nIHRoZSBwZXJmb3JtYW5jZVxuICAgICAgLy8gYmVuZWZpdHMgb2YgYSBjbGFzcy4gU28gdXNlIGEgcGxhaW4gb2JqZWN0LlxuICAgICAgY29uc3Qgb3AgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBvcGVyYXRpb25zW2ldKVxuXG4gICAgICAvLyBIb29rIGZ1bmN0aW9ucyBjYW4gbW9kaWZ5IG9wIGJ1dCBub3QgaXRzIHR5cGUgb3Igc3VibGV2ZWwsIHNvIGNhY2hlIHRob3NlXG4gICAgICBjb25zdCBpc1B1dCA9IG9wLnR5cGUgPT09ICdwdXQnXG4gICAgICBjb25zdCBkZWxlZ2F0ZWQgPSBvcC5zdWJsZXZlbCAhPSBudWxsXG4gICAgICBjb25zdCBkYiA9IGRlbGVnYXRlZCA/IG9wLnN1YmxldmVsIDogdGhpc1xuXG4gICAgICBjb25zdCBrZXlFcnJvciA9IGRiLl9jaGVja0tleShvcC5rZXkpXG4gICAgICBpZiAoa2V5RXJyb3IgIT0gbnVsbCkgdGhyb3cga2V5RXJyb3JcblxuICAgICAgb3Aua2V5RW5jb2RpbmcgPSBkYi5rZXlFbmNvZGluZyhvcC5rZXlFbmNvZGluZylcblxuICAgICAgaWYgKGlzUHV0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlRXJyb3IgPSBkYi5fY2hlY2tWYWx1ZShvcC52YWx1ZSlcbiAgICAgICAgaWYgKHZhbHVlRXJyb3IgIT0gbnVsbCkgdGhyb3cgdmFsdWVFcnJvclxuXG4gICAgICAgIG9wLnZhbHVlRW5jb2RpbmcgPSBkYi52YWx1ZUVuY29kaW5nKG9wLnZhbHVlRW5jb2RpbmcpXG4gICAgICB9IGVsc2UgaWYgKG9wLnR5cGUgIT09ICdkZWwnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBIGJhdGNoIG9wZXJhdGlvbiBtdXN0IGhhdmUgYSB0eXBlIHByb3BlcnR5IHRoYXQgaXMgJ3B1dCcgb3IgJ2RlbCdcIilcbiAgICAgIH1cblxuICAgICAgaWYgKGVuYWJsZVByZXdyaXRlSG9vaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuaG9va3MucHJld3JpdGUucnVuKG9wLCBwcmV3cml0ZUJhdGNoKVxuXG4gICAgICAgICAgLy8gTm9ybWFsaXplIGVuY29kaW5ncyBhZ2FpbiBpbiBjYXNlIHRoZXkgd2VyZSBtb2RpZmllZFxuICAgICAgICAgIG9wLmtleUVuY29kaW5nID0gZGIua2V5RW5jb2Rpbmcob3Aua2V5RW5jb2RpbmcpXG4gICAgICAgICAgaWYgKGlzUHV0KSBvcC52YWx1ZUVuY29kaW5nID0gZGIudmFsdWVFbmNvZGluZyhvcC52YWx1ZUVuY29kaW5nKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ1RoZSBwcmV3cml0ZSBob29rIGZhaWxlZCBvbiBiYXRjaCgpJywge1xuICAgICAgICAgICAgY29kZTogJ0xFVkVMX0hPT0tfRVJST1InLFxuICAgICAgICAgICAgY2F1c2U6IGVyclxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRW5jb2RlIGRhdGEgZm9yIHByaXZhdGUgQVBJXG4gICAgICBjb25zdCBrZXlFbmNvZGluZyA9IG9wLmtleUVuY29kaW5nXG4gICAgICBjb25zdCBwcmVlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKG9wLmtleSlcbiAgICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuXG4gICAgICAvLyBJZiB0aGUgc3VibGV2ZWwgaXMgbm90IGEgZGVzY2VuZGFudCB0aGVuIGZvcndhcmQgdGhhdCBvcHRpb24gdG8gdGhlIHBhcmVudCBkYlxuICAgICAgLy8gc28gdGhhdCB3ZSBkb24ndCBlcnJvbmVvdXNseSBhZGQgb3VyIG93biBwcmVmaXggdG8gdGhlIGtleSBvZiB0aGUgb3BlcmF0aW9uLlxuICAgICAgY29uc3Qgc2libGluZ3MgPSBkZWxlZ2F0ZWQgJiYgIWlzRGVzY2VuZGFudChvcC5zdWJsZXZlbCwgdGhpcykgJiYgb3Auc3VibGV2ZWwgIT09IHRoaXNcbiAgICAgIGNvbnN0IGVuY29kZWRLZXkgPSBkZWxlZ2F0ZWQgJiYgIXNpYmxpbmdzXG4gICAgICAgID8gcHJlZml4RGVzY2VuZGFudEtleShwcmVlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIGRiLCB0aGlzKVxuICAgICAgICA6IHByZWVuY29kZWRLZXlcblxuICAgICAgLy8gT25seSBwcmVmaXggb25jZVxuICAgICAgaWYgKGRlbGVnYXRlZCAmJiAhc2libGluZ3MpIHtcbiAgICAgICAgb3Auc3VibGV2ZWwgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGxldCBwdWJsaWNPcGVyYXRpb24gPSBudWxsXG5cbiAgICAgIC8vIElmIHRoZSBzdWJsZXZlbCBpcyBub3QgYSBkZXNjZW5kYW50IHRoZW4gd2Ugc2hvdWxkbid0IGVtaXQgZXZlbnRzXG4gICAgICBpZiAoZW5hYmxlV3JpdGVFdmVudCAmJiAhc2libGluZ3MpIHtcbiAgICAgICAgLy8gQ2xvbmUgb3AgYmVmb3JlIHdlIG11dGF0ZSBpdCBmb3IgdGhlIHByaXZhdGUgQVBJXG4gICAgICAgIC8vIFRPRE8gKGZ1dHVyZSBzZW12ZXItbWFqb3IpOiBjb25zaWRlciBzZW5kaW5nIHRoaXMgc2hhcGUgdG8gcHJpdmF0ZSBBUEkgdG9vXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9wKVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZEtleSA9IGVuY29kZWRLZXlcblxuICAgICAgICBpZiAoZGVsZWdhdGVkKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIGVtaXR0ZWQgZGF0YSBtYWtlcyBzZW5zZSBpbiB0aGUgY29udGV4dCBvZiB0aGlzIGRiXG4gICAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleSA9IGVuY29kZWRLZXlcbiAgICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKGtleUZvcm1hdClcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbnNbaV0gPSBwdWJsaWNPcGVyYXRpb25cbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgZm9yd2FyZGluZyB0aGUgc3VibGV2ZWwgb3B0aW9uIHRoZW4gZG9uJ3QgcHJlZml4IHRoZSBrZXkgeWV0XG4gICAgICBvcC5rZXkgPSBzaWJsaW5ncyA/IGVuY29kZWRLZXkgOiB0aGlzLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpXG4gICAgICBvcC5rZXlFbmNvZGluZyA9IGtleUZvcm1hdFxuXG4gICAgICBpZiAoaXNQdXQpIHtcbiAgICAgICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IG9wLnZhbHVlRW5jb2RpbmdcbiAgICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gdmFsdWVFbmNvZGluZy5lbmNvZGUob3AudmFsdWUpXG4gICAgICAgIGNvbnN0IHZhbHVlRm9ybWF0ID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgICAgICBvcC52YWx1ZSA9IGVuY29kZWRWYWx1ZVxuICAgICAgICBvcC52YWx1ZUVuY29kaW5nID0gdmFsdWVGb3JtYXRcblxuICAgICAgICBpZiAoZW5hYmxlV3JpdGVFdmVudCAmJiAhc2libGluZ3MpIHtcbiAgICAgICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZFZhbHVlID0gZW5jb2RlZFZhbHVlXG5cbiAgICAgICAgICBpZiAoZGVsZWdhdGVkKSB7XG4gICAgICAgICAgICBwdWJsaWNPcGVyYXRpb24udmFsdWUgPSBlbmNvZGVkVmFsdWVcbiAgICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi52YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKHZhbHVlRm9ybWF0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcml2YXRlT3BlcmF0aW9uc1tpXSA9IG9wXG4gICAgfVxuXG4gICAgLy8gVE9ETyAoZnV0dXJlKTogbWF5YmUgYWRkIHNlcGFyYXRlIGhvb2sgdG8gcnVuIG9uIHByaXZhdGUgZGF0YS4gQ3VycmVudGx5IGNhbid0IHdvcmtcbiAgICAvLyBiZWNhdXNlIHByZWZpeGluZyBoYXBwZW5zIHRvbyBzb29uOyB3ZSBuZWVkIHRvIG1vdmUgdGhhdCBsb2dpYyB0byB0aGUgcHJpdmF0ZVxuICAgIC8vIEFQSSBvZiBBYnN0cmFjdFN1YmxldmVsIChvciByZWltcGxlbWVudCB3aXRoIGhvb2tzKS4gVEJEIGhvdyBpdCdkIHdvcmsgaW4gY2hhaW5lZFxuICAgIC8vIGJhdGNoLiBIb29rIHdvdWxkIGxvb2sgc29tZXRoaW5nIGxpa2UgaG9va3MubWlkd3JpdGUucnVuKHByaXZhdGVPcGVyYXRpb25zLCAuLi4pLlxuXG4gICAgYXdhaXQgdGhpcy5fYmF0Y2gocHJpdmF0ZU9wZXJhdGlvbnMsIG9wdGlvbnMpXG5cbiAgICBpZiAoZW5hYmxlV3JpdGVFdmVudCkge1xuICAgICAgdGhpcy5lbWl0KCd3cml0ZScsIHB1YmxpY09wZXJhdGlvbnMpXG4gICAgfSBlbHNlIGlmICghZW5hYmxlUHJld3JpdGVIb29rKSB7XG4gICAgICAvLyBUT0RPIChzZW12ZXItbWFqb3IpOiByZW1vdmVcbiAgICAgIHRoaXMuZW1pdCgnYmF0Y2gnLCBvcGVyYXRpb25zKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9iYXRjaCAob3BlcmF0aW9ucywgb3B0aW9ucykge31cblxuICBzdWJsZXZlbCAobmFtZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHhvcHRzID0gQWJzdHJhY3RTdWJsZXZlbC5kZWZhdWx0cyhvcHRpb25zKVxuICAgIGNvbnN0IHN1YmxldmVsID0gdGhpcy5fc3VibGV2ZWwobmFtZSwgeG9wdHMpXG5cbiAgICBpZiAoIXRoaXMuaG9va3MubmV3c3ViLm5vb3ApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuaG9va3MubmV3c3ViLnJ1bihzdWJsZXZlbCwgeG9wdHMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdUaGUgbmV3c3ViIGhvb2sgZmFpbGVkIG9uIHN1YmxldmVsKCknLCB7XG4gICAgICAgICAgY29kZTogJ0xFVkVMX0hPT0tfRVJST1InLFxuICAgICAgICAgIGNhdXNlOiBlcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VibGV2ZWxcbiAgfVxuXG4gIF9zdWJsZXZlbCAobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgQWJzdHJhY3RTdWJsZXZlbCh0aGlzLCBuYW1lLCBvcHRpb25zKVxuICB9XG5cbiAgcHJlZml4S2V5IChrZXksIGtleUZvcm1hdCwgbG9jYWwpIHtcbiAgICByZXR1cm4ga2V5XG4gIH1cblxuICBhc3luYyBjbGVhciAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbXB0eSlcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5jbGVhcihvcHRpb25zKSlcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG5cbiAgICBjb25zdCBvcmlnaW5hbCA9IG9wdGlvbnNcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZylcblxuICAgIG9wdGlvbnMgPSByYW5nZU9wdGlvbnMob3B0aW9ucywga2V5RW5jb2RpbmcpXG4gICAgb3B0aW9ucy5rZXlFbmNvZGluZyA9IGtleUVuY29kaW5nLmZvcm1hdFxuXG4gICAgaWYgKG9wdGlvbnMubGltaXQgIT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX2NsZWFyKG9wdGlvbnMpXG4gICAgICB0aGlzLmVtaXQoJ2NsZWFyJywgb3JpZ2luYWwpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2NsZWFyIChvcHRpb25zKSB7fVxuXG4gIGl0ZXJhdG9yIChvcHRpb25zKSB7XG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuXG4gICAgb3B0aW9ucyA9IHJhbmdlT3B0aW9ucyhvcHRpb25zLCBrZXlFbmNvZGluZylcbiAgICBvcHRpb25zLmtleXMgPSBvcHRpb25zLmtleXMgIT09IGZhbHNlXG4gICAgb3B0aW9ucy52YWx1ZXMgPSBvcHRpb25zLnZhbHVlcyAhPT0gZmFsc2VcblxuICAgIC8vIFdlIG5lZWQgdGhlIG9yaWdpbmFsIGVuY29kaW5nIG9wdGlvbnMgaW4gQWJzdHJhY3RJdGVyYXRvciBpbiBvcmRlciB0byBkZWNvZGUgZGF0YVxuICAgIG9wdGlvbnNbQWJzdHJhY3RJdGVyYXRvci5rZXlFbmNvZGluZ10gPSBrZXlFbmNvZGluZ1xuICAgIG9wdGlvbnNbQWJzdHJhY3RJdGVyYXRvci52YWx1ZUVuY29kaW5nXSA9IHZhbHVlRW5jb2RpbmdcblxuICAgIC8vIEZvcndhcmQgZW5jb2Rpbmcgb3B0aW9ucyB0byBwcml2YXRlIEFQSVxuICAgIG9wdGlvbnMua2V5RW5jb2RpbmcgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBvcHRpb25zLnZhbHVlRW5jb2RpbmcgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBEZWZlcnJlZEl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuICAgIHJldHVybiB0aGlzLl9pdGVyYXRvcihvcHRpb25zKVxuICB9XG5cbiAgX2l0ZXJhdG9yIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBBYnN0cmFjdEl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG4gIH1cblxuICBrZXlzIChvcHRpb25zKSB7XG4gICAgLy8gQWxzbyBpbmNsdWRlIHZhbHVlRW5jb2RpbmcgKHRob3VnaCB1bnVzZWQpIGJlY2F1c2Ugd2UgbWF5IGZhbGxiYWNrIHRvIF9pdGVyYXRvcigpXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuXG4gICAgb3B0aW9ucyA9IHJhbmdlT3B0aW9ucyhvcHRpb25zLCBrZXlFbmNvZGluZylcblxuICAgIC8vIFdlIG5lZWQgdGhlIG9yaWdpbmFsIGVuY29kaW5nIG9wdGlvbnMgaW4gQWJzdHJhY3RLZXlJdGVyYXRvciBpbiBvcmRlciB0byBkZWNvZGUgZGF0YVxuICAgIG9wdGlvbnNbQWJzdHJhY3RJdGVyYXRvci5rZXlFbmNvZGluZ10gPSBrZXlFbmNvZGluZ1xuICAgIG9wdGlvbnNbQWJzdHJhY3RJdGVyYXRvci52YWx1ZUVuY29kaW5nXSA9IHZhbHVlRW5jb2RpbmdcblxuICAgIC8vIEZvcndhcmQgZW5jb2Rpbmcgb3B0aW9ucyB0byBwcml2YXRlIEFQSVxuICAgIG9wdGlvbnMua2V5RW5jb2RpbmcgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBvcHRpb25zLnZhbHVlRW5jb2RpbmcgPSB2YWx1ZUVuY29kaW5nLmZvcm1hdFxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBEZWZlcnJlZEtleUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuICAgIHJldHVybiB0aGlzLl9rZXlzKG9wdGlvbnMpXG4gIH1cblxuICBfa2V5cyAob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdEtleUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG4gIH1cblxuICB2YWx1ZXMgKG9wdGlvbnMpIHtcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucyAmJiBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2Rpbmcob3B0aW9ucyAmJiBvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG5cbiAgICBvcHRpb25zID0gcmFuZ2VPcHRpb25zKG9wdGlvbnMsIGtleUVuY29kaW5nKVxuXG4gICAgLy8gV2UgbmVlZCB0aGUgb3JpZ2luYWwgZW5jb2Rpbmcgb3B0aW9ucyBpbiBBYnN0cmFjdFZhbHVlSXRlcmF0b3IgaW4gb3JkZXIgdG8gZGVjb2RlIGRhdGFcbiAgICBvcHRpb25zW0Fic3RyYWN0SXRlcmF0b3Iua2V5RW5jb2RpbmddID0ga2V5RW5jb2RpbmdcbiAgICBvcHRpb25zW0Fic3RyYWN0SXRlcmF0b3IudmFsdWVFbmNvZGluZ10gPSB2YWx1ZUVuY29kaW5nXG5cbiAgICAvLyBGb3J3YXJkIGVuY29kaW5nIG9wdGlvbnMgdG8gcHJpdmF0ZSBBUElcbiAgICBvcHRpb25zLmtleUVuY29kaW5nID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgb3B0aW9ucy52YWx1ZUVuY29kaW5nID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgRGVmZXJyZWRWYWx1ZUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuICAgIHJldHVybiB0aGlzLl92YWx1ZXMob3B0aW9ucylcbiAgfVxuXG4gIF92YWx1ZXMgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IERlZmF1bHRWYWx1ZUl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMpXG4gIH1cblxuICBkZWZlciAoZm4sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICB0aGlzW2tRdWV1ZV0uYWRkKGZ1bmN0aW9uIChhYm9ydEVycm9yKSB7XG4gICAgICBpZiAoIWFib3J0RXJyb3IpIGZuKClcbiAgICB9LCBvcHRpb25zKVxuICB9XG5cbiAgZGVmZXJBc3luYyAoZm4sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpc1trUXVldWVdLmFkZChmdW5jdGlvbiAoYWJvcnRFcnJvcikge1xuICAgICAgICBpZiAoYWJvcnRFcnJvcikgcmVqZWN0KGFib3J0RXJyb3IpXG4gICAgICAgIGVsc2UgZm4oKS50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgIH0sIG9wdGlvbnMpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFRPRE86IGRvY3MgYW5kIHR5cGVzXG4gIGF0dGFjaFJlc291cmNlIChyZXNvdXJjZSkge1xuICAgIGlmICh0eXBlb2YgcmVzb3VyY2UgIT09ICdvYmplY3QnIHx8IHJlc291cmNlID09PSBudWxsIHx8XG4gICAgICB0eXBlb2YgcmVzb3VyY2UuY2xvc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgcmVzb3VyY2Ugb2JqZWN0JylcbiAgICB9XG5cbiAgICB0aGlzW2tSZXNvdXJjZXNdLmFkZChyZXNvdXJjZSlcbiAgfVxuXG4gIC8vIFRPRE86IGRvY3MgYW5kIHR5cGVzXG4gIGRldGFjaFJlc291cmNlIChyZXNvdXJjZSkge1xuICAgIHRoaXNba1Jlc291cmNlc10uZGVsZXRlKHJlc291cmNlKVxuICB9XG5cbiAgX2NoYWluZWRCYXRjaCAoKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0Q2hhaW5lZEJhdGNoKHRoaXMpXG4gIH1cblxuICBfY2hlY2tLZXkgKGtleSkge1xuICAgIGlmIChrZXkgPT09IG51bGwgfHwga2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgTW9kdWxlRXJyb3IoJ0tleSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9JTlZBTElEX0tFWSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX2NoZWNrVmFsdWUgKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgTW9kdWxlRXJyb3IoJ1ZhbHVlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0lOVkFMSURfVkFMVUUnXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB7IEFic3RyYWN0U3VibGV2ZWwgfSA9IHJlcXVpcmUoJy4vbGliL2Fic3RyYWN0LXN1YmxldmVsJykoeyBBYnN0cmFjdExldmVsIH0pXG5cbmV4cG9ydHMuQWJzdHJhY3RMZXZlbCA9IEFic3RyYWN0TGV2ZWxcbmV4cG9ydHMuQWJzdHJhY3RTdWJsZXZlbCA9IEFic3RyYWN0U3VibGV2ZWxcblxuY29uc3QgYXNzZXJ0T3BlbiA9IGZ1bmN0aW9uIChkYikge1xuICBpZiAoZGJba1N0YXR1c10gIT09ICdvcGVuJykge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignRGF0YWJhc2UgaXMgbm90IG9wZW4nLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfREFUQUJBU0VfTk9UX09QRU4nXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBhc3NlcnRVbmxvY2tlZCA9IGZ1bmN0aW9uIChkYikge1xuICBpZiAoZGJba1N0YXR1c0xvY2tlZF0pIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0RhdGFiYXNlIHN0YXR1cyBpcyBsb2NrZWQnLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfU1RBVFVTX0xPQ0tFRCdcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGZvcm1hdHMgPSBmdW5jdGlvbiAoZGIpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRiLnN1cHBvcnRzLmVuY29kaW5ncylcbiAgICAuZmlsdGVyKGsgPT4gISFkYi5zdXBwb3J0cy5lbmNvZGluZ3Nba10pXG59XG5cbmNvbnN0IGNsb3NlUmVzb3VyY2UgPSBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgcmV0dXJuIHJlc291cmNlLmNsb3NlKClcbn1cblxuLy8gRW5zdXJlIHRoYXQgd2UgZG9uJ3Qgd29yayB3aXRoIGZhbHN5IGVyciB2YWx1ZXMsIGJlY2F1c2UgSmF2YVNjcmlwdCB1bmZvcnR1bmF0ZWx5XG4vLyBhbGxvd3MgUHJvbWlzZS5yZWplY3QobnVsbCkgYW5kIHNpbWlsYXIgcGF0dGVybnMuIFdoaWNoJ2QgYnJlYWsgYGlmIChlcnIpYCBsb2dpYy5cbmNvbnN0IGNvbnZlcnRSZWplY3Rpb24gPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGlmIChyZWFzb24gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiByZWFzb25cbiAgfVxuXG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocmVhc29uKSA9PT0gJ1tvYmplY3QgRXJyb3JdJykge1xuICAgIHJldHVybiByZWFzb25cbiAgfVxuXG4gIGNvbnN0IGhpbnQgPSByZWFzb24gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVhc29uXG4gIGNvbnN0IG1zZyA9IGBQcm9taXNlIHJlamVjdGlvbiByZWFzb24gbXVzdCBiZSBhbiBFcnJvciwgcmVjZWl2ZWQgJHtoaW50fWBcblxuICByZXR1cm4gbmV3IFR5cGVFcnJvcihtc2cpXG59XG5cbi8vIEludGVybmFsIHV0aWxpdGllcywgbm90IHR5cGVkIG9yIGV4cG9ydGVkXG5jbGFzcyBOb3RPcGVuRXJyb3IgZXh0ZW5kcyBNb2R1bGVFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChjYXVzZSkge1xuICAgIHN1cGVyKCdEYXRhYmFzZSBmYWlsZWQgdG8gb3BlbicsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9EQVRBQkFTRV9OT1RfT1BFTicsXG4gICAgICBjYXVzZVxuICAgIH0pXG4gIH1cbn1cblxuY2xhc3MgTm90Q2xvc2VkRXJyb3IgZXh0ZW5kcyBNb2R1bGVFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChjYXVzZSkge1xuICAgIHN1cGVyKCdEYXRhYmFzZSBmYWlsZWQgdG8gY2xvc2UnLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfREFUQUJBU0VfTk9UX0NMT1NFRCcsXG4gICAgICBjYXVzZVxuICAgIH0pXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLkFic3RyYWN0TGV2ZWwgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWxldmVsJykuQWJzdHJhY3RMZXZlbFxuZXhwb3J0cy5BYnN0cmFjdFN1YmxldmVsID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1sZXZlbCcpLkFic3RyYWN0U3VibGV2ZWxcbmV4cG9ydHMuQWJzdHJhY3RJdGVyYXRvciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtaXRlcmF0b3InKS5BYnN0cmFjdEl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0S2V5SXRlcmF0b3IgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWl0ZXJhdG9yJykuQWJzdHJhY3RLZXlJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdFZhbHVlSXRlcmF0b3IgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWl0ZXJhdG9yJykuQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0Q2hhaW5lZEJhdGNoID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoJykuQWJzdHJhY3RDaGFpbmVkQmF0Y2hcbiIsIi8qIGdsb2JhbCBJREJLZXlSYW5nZSAqL1xuXG4ndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVLZXlSYW5nZSAob3B0aW9ucykge1xuICBjb25zdCBsb3dlciA9IG9wdGlvbnMuZ3RlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmd0ZSA6IG9wdGlvbnMuZ3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZ3QgOiB1bmRlZmluZWRcbiAgY29uc3QgdXBwZXIgPSBvcHRpb25zLmx0ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5sdGUgOiBvcHRpb25zLmx0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmx0IDogdW5kZWZpbmVkXG4gIGNvbnN0IGxvd2VyRXhjbHVzaXZlID0gb3B0aW9ucy5ndGUgPT09IHVuZGVmaW5lZFxuICBjb25zdCB1cHBlckV4Y2x1c2l2ZSA9IG9wdGlvbnMubHRlID09PSB1bmRlZmluZWRcblxuICBpZiAobG93ZXIgIT09IHVuZGVmaW5lZCAmJiB1cHBlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIElEQktleVJhbmdlLmJvdW5kKGxvd2VyLCB1cHBlciwgbG93ZXJFeGNsdXNpdmUsIHVwcGVyRXhjbHVzaXZlKVxuICB9IGVsc2UgaWYgKGxvd2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gSURCS2V5UmFuZ2UubG93ZXJCb3VuZChsb3dlciwgbG93ZXJFeGNsdXNpdmUpXG4gIH0gZWxzZSBpZiAodXBwZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBJREJLZXlSYW5nZS51cHBlckJvdW5kKHVwcGVyLCB1cHBlckV4Y2x1c2l2ZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBVbmRlZmluZWQgbWVhbnMgbm90IGZvdW5kIGluIGJvdGggSW5kZXhlZERCIGFuZCBBYnN0cmFjdExldmVsXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgIHJldHVybiBkYXRhXG4gIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpXG4gIH0gZWxzZSB7XG4gICAgLy8gTm9uLWJpbmFyeSBkYXRhIHN0b3JlZCB3aXRoIGFuIG9sZCB2ZXJzaW9uIChsZXZlbC1qcyA8IDUuMC4wKVxuICAgIHJldHVybiB0ZXh0RW5jb2Rlci5lbmNvZGUoZGF0YSlcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQWJzdHJhY3RJdGVyYXRvciB9ID0gcmVxdWlyZSgnYWJzdHJhY3QtbGV2ZWwnKVxuY29uc3QgY3JlYXRlS2V5UmFuZ2UgPSByZXF1aXJlKCcuL3V0aWwva2V5LXJhbmdlJylcbmNvbnN0IGRlc2VyaWFsaXplID0gcmVxdWlyZSgnLi91dGlsL2Rlc2VyaWFsaXplJylcblxuY29uc3Qga0NhY2hlID0gU3ltYm9sKCdjYWNoZScpXG5jb25zdCBrRmluaXNoZWQgPSBTeW1ib2woJ2ZpbmlzaGVkJylcbmNvbnN0IGtPcHRpb25zID0gU3ltYm9sKCdvcHRpb25zJylcbmNvbnN0IGtDdXJyZW50T3B0aW9ucyA9IFN5bWJvbCgnY3VycmVudE9wdGlvbnMnKVxuY29uc3Qga1Bvc2l0aW9uID0gU3ltYm9sKCdwb3NpdGlvbicpXG5jb25zdCBrTG9jYXRpb24gPSBTeW1ib2woJ2xvY2F0aW9uJylcbmNvbnN0IGtGaXJzdCA9IFN5bWJvbCgnZmlyc3QnKVxuY29uc3QgZW1wdHlPcHRpb25zID0ge31cblxuY2xhc3MgSXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdEl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBsb2NhdGlvbiwgb3B0aW9ucykge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trQ2FjaGVdID0gW11cbiAgICB0aGlzW2tGaW5pc2hlZF0gPSB0aGlzLmxpbWl0ID09PSAwXG4gICAgdGhpc1trT3B0aW9uc10gPSBvcHRpb25zXG4gICAgdGhpc1trQ3VycmVudE9wdGlvbnNdID0geyAuLi5vcHRpb25zIH1cbiAgICB0aGlzW2tQb3NpdGlvbl0gPSB1bmRlZmluZWRcbiAgICB0aGlzW2tMb2NhdGlvbl0gPSBsb2NhdGlvblxuICAgIHRoaXNba0ZpcnN0XSA9IHRydWVcbiAgfVxuXG4gIC8vIE5vdGU6IGlmIGNhbGxlZCBieSBfYWxsKCkgdGhlbiBzaXplIGNhbiBiZSBJbmZpbml0eS4gVGhpcyBpcyBhbiBpbnRlcm5hbFxuICAvLyBkZXRhaWw7IGJ5IGRlc2lnbiBBYnN0cmFjdEl0ZXJhdG9yLm5leHR2KCkgZG9lcyBub3Qgc3VwcG9ydCBJbmZpbml0eS5cbiAgYXN5bmMgX25leHR2IChzaXplLCBvcHRpb25zKSB7XG4gICAgdGhpc1trRmlyc3RdID0gZmFsc2VcblxuICAgIGlmICh0aGlzW2tGaW5pc2hlZF0pIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGlmICh0aGlzW2tDYWNoZV0ubGVuZ3RoID4gMCkge1xuICAgICAgLy8gVE9ETzogbWl4aW5nIG5leHQgYW5kIG5leHR2IGlzIG5vdCBjb3ZlcmVkIGJ5IHRlc3Qgc3VpdGVcbiAgICAgIHNpemUgPSBNYXRoLm1pbihzaXplLCB0aGlzW2tDYWNoZV0ubGVuZ3RoKVxuICAgICAgcmV0dXJuIHRoaXNba0NhY2hlXS5zcGxpY2UoMCwgc2l6ZSlcbiAgICB9XG5cbiAgICAvLyBBZGp1c3QgcmFuZ2UgYnkgd2hhdCB3ZSBhbHJlYWR5IHZpc2l0ZWRcbiAgICBpZiAodGhpc1trUG9zaXRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzW2tPcHRpb25zXS5yZXZlcnNlKSB7XG4gICAgICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXS5sdCA9IHRoaXNba1Bvc2l0aW9uXVxuICAgICAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10ubHRlID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10uZ3QgPSB0aGlzW2tQb3NpdGlvbl1cbiAgICAgICAgdGhpc1trQ3VycmVudE9wdGlvbnNdLmd0ZSA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBrZXlSYW5nZVxuXG4gICAgdHJ5IHtcbiAgICAgIGtleVJhbmdlID0gY3JlYXRlS2V5UmFuZ2UodGhpc1trQ3VycmVudE9wdGlvbnNdKVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIC8vIFRoZSBsb3dlciBrZXkgaXMgZ3JlYXRlciB0aGFuIHRoZSB1cHBlciBrZXkuXG4gICAgICAvLyBJbmRleGVkREIgdGhyb3dzIGFuIGVycm9yLCBidXQgd2UnbGwganVzdCByZXR1cm4gMCByZXN1bHRzLlxuICAgICAgdGhpc1trRmluaXNoZWRdID0gdHJ1ZVxuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLmRiLnRyYW5zYWN0aW9uKFt0aGlzW2tMb2NhdGlvbl1dLCAncmVhZG9ubHknKVxuICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpc1trTG9jYXRpb25dKVxuICAgIGNvbnN0IGVudHJpZXMgPSBbXVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIElmIGFuIGVycm9yIG9jY3VycyAob24gdGhlIHJlcXVlc3QpLCB0aGUgdHJhbnNhY3Rpb24gd2lsbCBhYm9ydC5cbiAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvciB8fCBuZXcgRXJyb3IoJ2Fib3J0ZWQgYnkgdXNlcicpKVxuICAgICAgfVxuXG4gICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGVudHJpZXMpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICghdGhpc1trT3B0aW9uc10ucmV2ZXJzZSkge1xuICAgICAgbGV0IGtleXNcbiAgICAgIGxldCB2YWx1ZXNcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIC8vIFdhaXQgZm9yIGJvdGggcmVxdWVzdHMgdG8gY29tcGxldGVcbiAgICAgICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZXMgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gTWF0aC5tYXgoa2V5cy5sZW5ndGgsIHZhbHVlcy5sZW5ndGgpXG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBzaXplID09PSBJbmZpbml0eSkge1xuICAgICAgICAgIHRoaXNba0ZpbmlzaGVkXSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW2tQb3NpdGlvbl0gPSBrZXlzW2xlbmd0aCAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNpemVcbiAgICAgICAgZW50cmllcy5sZW5ndGggPSBsZW5ndGhcblxuICAgICAgICAvLyBNZXJnZSBrZXlzIGFuZCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXVxuXG4gICAgICAgICAgZW50cmllc1tpXSA9IFtcbiAgICAgICAgICAgIHRoaXNba09wdGlvbnNdLmtleXMgPyBkZXNlcmlhbGl6ZShrZXkpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGhpc1trT3B0aW9uc10udmFsdWVzID8gZGVzZXJpYWxpemUodmFsdWUpIDogdW5kZWZpbmVkXG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgbWF5YmVDb21taXQodHJhbnNhY3Rpb24pXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGtleXMgd2VyZSBub3QgcmVxdWVzdGVkIGFuZCBzaXplIGlzIEluZmluaXR5LCB3ZSBkb24ndCBoYXZlIHRvIGtlZXBcbiAgICAgIC8vIHRyYWNrIG9mIHBvc2l0aW9uIGFuZCBjYW4gdGh1cyBza2lwIGdldHRpbmcga2V5cy5cbiAgICAgIGlmICh0aGlzW2tPcHRpb25zXS5rZXlzIHx8IHNpemUgPCBJbmZpbml0eSkge1xuICAgICAgICBzdG9yZS5nZXRBbGxLZXlzKGtleVJhbmdlLCBzaXplIDwgSW5maW5pdHkgPyBzaXplIDogdW5kZWZpbmVkKS5vbnN1Y2Nlc3MgPSAoZXYpID0+IHtcbiAgICAgICAgICBrZXlzID0gZXYudGFyZ2V0LnJlc3VsdFxuICAgICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IFtdXG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNba09wdGlvbnNdLnZhbHVlcykge1xuICAgICAgICBzdG9yZS5nZXRBbGwoa2V5UmFuZ2UsIHNpemUgPCBJbmZpbml0eSA/IHNpemUgOiB1bmRlZmluZWQpLm9uc3VjY2VzcyA9IChldikgPT4ge1xuICAgICAgICAgIHZhbHVlcyA9IGV2LnRhcmdldC5yZXN1bHRcbiAgICAgICAgICBjb21wbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlcyA9IFtdXG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FuJ3QgdXNlIGdldEFsbCgpIGluIHJldmVyc2UsIHNvIHVzZSBhIHNsb3dlciBjdXJzb3IgdGhhdCB5aWVsZHMgb25lIGl0ZW0gYXQgYSB0aW1lXG4gICAgICAvLyBUT0RPOiB0ZXN0IGlmIGFsbCB0YXJnZXQgYnJvd3NlcnMgc3VwcG9ydCBvcGVuS2V5Q3Vyc29yXG4gICAgICBjb25zdCBtZXRob2QgPSAhdGhpc1trT3B0aW9uc10udmFsdWVzICYmIHN0b3JlLm9wZW5LZXlDdXJzb3IgPyAnb3BlbktleUN1cnNvcicgOiAnb3BlbkN1cnNvcidcblxuICAgICAgc3RvcmVbbWV0aG9kXShrZXlSYW5nZSwgJ3ByZXYnKS5vbnN1Y2Nlc3MgPSAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gZXYudGFyZ2V0LnJlc3VsdFxuXG4gICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IGN1cnNvclxuICAgICAgICAgIHRoaXNba1Bvc2l0aW9uXSA9IGtleVxuXG4gICAgICAgICAgZW50cmllcy5wdXNoKFtcbiAgICAgICAgICAgIHRoaXNba09wdGlvbnNdLmtleXMgJiYga2V5ICE9PSB1bmRlZmluZWQgPyBkZXNlcmlhbGl6ZShrZXkpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGhpc1trT3B0aW9uc10udmFsdWVzICYmIHZhbHVlICE9PSB1bmRlZmluZWQgPyBkZXNlcmlhbGl6ZSh2YWx1ZSkgOiB1bmRlZmluZWRcbiAgICAgICAgICBdKVxuXG4gICAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoIDwgc2l6ZSkge1xuICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF5YmVDb21taXQodHJhbnNhY3Rpb24pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNba0ZpbmlzaGVkXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBhc3luYyBfbmV4dCAoKSB7XG4gICAgaWYgKHRoaXNba0NhY2hlXS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpc1trQ2FjaGVdLnNoaWZ0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXNba0ZpbmlzaGVkXSkge1xuICAgICAgbGV0IHNpemUgPSBNYXRoLm1pbigxMDAsIHRoaXMubGltaXQgLSB0aGlzLmNvdW50KVxuXG4gICAgICBpZiAodGhpc1trRmlyc3RdKSB7XG4gICAgICAgIC8vIEl0J3MgY29tbW9uIHRvIG9ubHkgd2FudCBvbmUgZW50cnkgaW5pdGlhbGx5IG9yIGFmdGVyIGEgc2VlaygpXG4gICAgICAgIHRoaXNba0ZpcnN0XSA9IGZhbHNlXG4gICAgICAgIHNpemUgPSAxXG4gICAgICB9XG5cbiAgICAgIHRoaXNba0NhY2hlXSA9IGF3YWl0IHRoaXMuX25leHR2KHNpemUsIGVtcHR5T3B0aW9ucylcblxuICAgICAgLy8gU2hpZnQgcmV0dXJucyB1bmRlZmluZWQgaWYgZW1wdHksIHdoaWNoIGlzIHdoYXQgd2Ugd2FudFxuICAgICAgcmV0dXJuIHRoaXNba0NhY2hlXS5zaGlmdCgpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2FsbCAob3B0aW9ucykge1xuICAgIHRoaXNba0ZpcnN0XSA9IGZhbHNlXG5cbiAgICAvLyBUT0RPOiBtaXhpbmcgbmV4dCBhbmQgYWxsIGlzIG5vdCBjb3ZlcmVkIGJ5IHRlc3Qgc3VpdGVcbiAgICBjb25zdCBjYWNoZSA9IHRoaXNba0NhY2hlXS5zcGxpY2UoMCwgdGhpc1trQ2FjaGVdLmxlbmd0aClcbiAgICBjb25zdCBzaXplID0gdGhpcy5saW1pdCAtIHRoaXMuY291bnQgLSBjYWNoZS5sZW5ndGhcblxuICAgIGlmIChzaXplIDw9IDApIHtcbiAgICAgIHJldHVybiBjYWNoZVxuICAgIH1cblxuICAgIGxldCBlbnRyaWVzID0gYXdhaXQgdGhpcy5fbmV4dHYoc2l6ZSwgZW1wdHlPcHRpb25zKVxuICAgIGlmIChjYWNoZS5sZW5ndGggPiAwKSBlbnRyaWVzID0gY2FjaGUuY29uY2F0KGVudHJpZXMpXG5cbiAgICByZXR1cm4gZW50cmllc1xuICB9XG5cbiAgX3NlZWsgKHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXNba0ZpcnN0XSA9IHRydWVcbiAgICB0aGlzW2tDYWNoZV0gPSBbXVxuICAgIHRoaXNba0ZpbmlzaGVkXSA9IGZhbHNlXG4gICAgdGhpc1trUG9zaXRpb25dID0gdW5kZWZpbmVkXG5cbiAgICAvLyBUT0RPOiBub3QgY292ZXJlZCBieSB0ZXN0IHN1aXRlXG4gICAgdGhpc1trQ3VycmVudE9wdGlvbnNdID0geyAuLi50aGlzW2tPcHRpb25zXSB9XG5cbiAgICBsZXQga2V5UmFuZ2VcblxuICAgIHRyeSB7XG4gICAgICBrZXlSYW5nZSA9IGNyZWF0ZUtleVJhbmdlKHRoaXNba09wdGlvbnNdKVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHRoaXNba0ZpbmlzaGVkXSA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChrZXlSYW5nZSAhPT0gbnVsbCAmJiAha2V5UmFuZ2UuaW5jbHVkZXModGFyZ2V0KSkge1xuICAgICAgdGhpc1trRmluaXNoZWRdID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAodGhpc1trT3B0aW9uc10ucmV2ZXJzZSkge1xuICAgICAgdGhpc1trQ3VycmVudE9wdGlvbnNdLmx0ZSA9IHRhcmdldFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10uZ3RlID0gdGFyZ2V0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuSXRlcmF0b3IgPSBJdGVyYXRvclxuXG5mdW5jdGlvbiBtYXliZUNvbW1pdCAodHJhbnNhY3Rpb24pIHtcbiAgLy8gQ29tbWl0IChtZWFuaW5nIGNsb3NlKSBub3cgaW5zdGVhZCBvZiB3YWl0aW5nIGZvciBhdXRvLWNvbW1pdFxuICBpZiAodHlwZW9mIHRyYW5zYWN0aW9uLmNvbW1pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyYW5zYWN0aW9uLmNvbW1pdCgpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jIGZ1bmN0aW9uIGNsZWFyIChkYiwgbG9jYXRpb24sIGtleVJhbmdlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmxpbWl0ID09PSAwKSByZXR1cm5cblxuICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLmRiLnRyYW5zYWN0aW9uKFtsb2NhdGlvbl0sICdyZWFkd3JpdGUnKVxuICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGxvY2F0aW9uKVxuXG4gIGxldCBjb3VudCA9IDBcblxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSByZXNvbHZlXG5cbiAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yIHx8IG5ldyBFcnJvcignYWJvcnRlZCBieSB1c2VyJykpXG4gICAgfVxuICB9KVxuXG4gIC8vIEEga2V5IGN1cnNvciBpcyBmYXN0ZXIgKHNraXBzIHJlYWRpbmcgdmFsdWVzKSBidXQgbm90IHN1cHBvcnRlZCBieSBJRVxuICAvLyBUT0RPOiB3ZSBubyBsb25nZXIgc3VwcG9ydCBJRS4gVGVzdCBvdGhlcnNcbiAgY29uc3QgbWV0aG9kID0gc3RvcmUub3BlbktleUN1cnNvciA/ICdvcGVuS2V5Q3Vyc29yJyA6ICdvcGVuQ3Vyc29yJ1xuICBjb25zdCBkaXJlY3Rpb24gPSBvcHRpb25zLnJldmVyc2UgPyAncHJldicgOiAnbmV4dCdcblxuICBzdG9yZVttZXRob2RdKGtleVJhbmdlLCBkaXJlY3Rpb24pLm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnN0IGN1cnNvciA9IGV2LnRhcmdldC5yZXN1bHRcblxuICAgIGlmIChjdXJzb3IpIHtcbiAgICAgIC8vIFdhaXQgZm9yIGEgcmVxdWVzdCB0byBjb21wbGV0ZSBiZWZvcmUgY29udGludWluZywgc2F2aW5nIENQVS5cbiAgICAgIHN0b3JlLmRlbGV0ZShjdXJzb3Iua2V5KS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmxpbWl0IDw9IDAgfHwgKytjb3VudCA8IG9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICBjdXJzb3IuY29udGludWUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb21pc2Vcbn1cbiIsIi8qIGdsb2JhbCBpbmRleGVkREIgKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQWJzdHJhY3RMZXZlbCB9ID0gcmVxdWlyZSgnYWJzdHJhY3QtbGV2ZWwnKVxuY29uc3QgeyBJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi9pdGVyYXRvcicpXG5jb25zdCBkZXNlcmlhbGl6ZSA9IHJlcXVpcmUoJy4vdXRpbC9kZXNlcmlhbGl6ZScpXG5jb25zdCBjbGVhciA9IHJlcXVpcmUoJy4vdXRpbC9jbGVhcicpXG5jb25zdCBjcmVhdGVLZXlSYW5nZSA9IHJlcXVpcmUoJy4vdXRpbC9rZXktcmFuZ2UnKVxuXG4vLyBLZWVwIGFzLWlzIGZvciBjb21wYXRpYmlsaXR5IHdpdGggZXhpc3RpbmcgbGV2ZWwtanMgZGF0YWJhc2VzXG5jb25zdCBERUZBVUxUX1BSRUZJWCA9ICdsZXZlbC1qcy0nXG5cbmNvbnN0IGtJREIgPSBTeW1ib2woJ2lkYicpXG5jb25zdCBrTmFtZVByZWZpeCA9IFN5bWJvbCgnbmFtZVByZWZpeCcpXG5jb25zdCBrTG9jYXRpb24gPSBTeW1ib2woJ2xvY2F0aW9uJylcbmNvbnN0IGtWZXJzaW9uID0gU3ltYm9sKCd2ZXJzaW9uJylcbmNvbnN0IGtTdG9yZSA9IFN5bWJvbCgnc3RvcmUnKVxuY29uc3Qga09uQ29tcGxldGUgPSBTeW1ib2woJ29uQ29tcGxldGUnKVxuXG5jbGFzcyBCcm93c2VyTGV2ZWwgZXh0ZW5kcyBBYnN0cmFjdExldmVsIHtcbiAgY29uc3RydWN0b3IgKGxvY2F0aW9uLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBwcmVmaXgsIHZlcnNpb24sIC4uLmZvcndhcmQgfSA9IG9wdGlvbnMgfHwge31cblxuICAgIHN1cGVyKHtcbiAgICAgIGVuY29kaW5nczogeyB2aWV3OiB0cnVlIH0sXG4gICAgICBzbmFwc2hvdHM6IGZhbHNlLFxuICAgICAgY3JlYXRlSWZNaXNzaW5nOiBmYWxzZSxcbiAgICAgIGVycm9ySWZFeGlzdHM6IGZhbHNlLFxuICAgICAgc2VlazogdHJ1ZVxuICAgIH0sIGZvcndhcmQpXG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAnc3RyaW5nJyB8fCBsb2NhdGlvbiA9PT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgJ2xvY2F0aW9uJyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKVxuICAgIH1cblxuICAgIC8vIFRPRE8gKG5leHQgbWFqb3IpOiByZW1vdmUgZGVmYXVsdCBwcmVmaXhcbiAgICB0aGlzW2tMb2NhdGlvbl0gPSBsb2NhdGlvblxuICAgIHRoaXNba05hbWVQcmVmaXhdID0gcHJlZml4ID09IG51bGwgPyBERUZBVUxUX1BSRUZJWCA6IHByZWZpeFxuICAgIHRoaXNba1ZlcnNpb25dID0gcGFyc2VJbnQodmVyc2lvbiB8fCAxLCAxMClcbiAgICB0aGlzW2tJREJdID0gbnVsbFxuICB9XG5cbiAgZ2V0IGxvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1trTG9jYXRpb25dXG4gIH1cblxuICBnZXQgbmFtZVByZWZpeCAoKSB7XG4gICAgcmV0dXJuIHRoaXNba05hbWVQcmVmaXhdXG4gIH1cblxuICBnZXQgdmVyc2lvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNba1ZlcnNpb25dXG4gIH1cblxuICAvLyBFeHBvc2VkIGZvciBiYWNrd2FyZHMgY29tcGF0IGFuZCB1bml0IHRlc3RzXG4gIGdldCBkYiAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0lEQl1cbiAgfVxuXG4gIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ2Jyb3dzZXItbGV2ZWwnXG4gIH1cblxuICBhc3luYyBfb3BlbiAob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3Blbih0aGlzW2tOYW1lUHJlZml4XSArIHRoaXNba0xvY2F0aW9uXSwgdGhpc1trVmVyc2lvbl0pXG5cbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldikgPT4ge1xuICAgICAgY29uc3QgZGIgPSBldi50YXJnZXQucmVzdWx0XG5cbiAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyh0aGlzW2tMb2NhdGlvbl0pKSB7XG4gICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXNba0xvY2F0aW9uXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvciB8fCBuZXcgRXJyb3IoJ3Vua25vd24gZXJyb3InKSlcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIHRoaXNba0lEQl0gPSByZXF1ZXN0LnJlc3VsdFxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgW2tTdG9yZV0gKG1vZGUpIHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXNba0lEQl0udHJhbnNhY3Rpb24oW3RoaXNba0xvY2F0aW9uXV0sIG1vZGUpXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXNba0xvY2F0aW9uXSlcbiAgfVxuXG4gIFtrT25Db21wbGV0ZV0gKHJlcXVlc3QpIHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHJlcXVlc3QudHJhbnNhY3Rpb25cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBUYWtlIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IGEgbm9uLWNhbmNlbGVkIHJlcXVlc3QgZXJyb3IgYWJvcnRzXG4gICAgICAvLyB0aGUgdHJhbnNhY3Rpb24uIEkuZS4gbm8gbmVlZCB0byBsaXN0ZW4gZm9yIFwicmVxdWVzdC5vbmVycm9yXCIuXG4gICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QodHJhbnNhY3Rpb24uZXJyb3IgfHwgbmV3IEVycm9yKCdhYm9ydGVkIGJ5IHVzZXInKSlcbiAgICAgIH1cblxuICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgX2dldCAoa2V5LCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzW2tTdG9yZV0oJ3JlYWRvbmx5JylcbiAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUuZ2V0KGtleSlcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXNba09uQ29tcGxldGVdKHJlcXVlc3QpXG5cbiAgICByZXR1cm4gZGVzZXJpYWxpemUodmFsdWUpXG4gIH1cblxuICBhc3luYyBfZ2V0TWFueSAoa2V5cywgb3B0aW9ucykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpc1trU3RvcmVdKCdyZWFkb25seScpXG4gICAgY29uc3QgaXRlcmF0b3IgPSBrZXlzLnZhbHVlcygpXG5cbiAgICAvLyBDb25zdW1lIHRoZSBpdGVyYXRvciB3aXRoIE4gcGFyYWxsZWwgd29ya2VyIGJlZXNcbiAgICBjb25zdCBuID0gTWF0aC5taW4oMTYsIGtleXMubGVuZ3RoKVxuICAgIGNvbnN0IGJlZXMgPSBuZXcgQXJyYXkobilcbiAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpXG5cbiAgICBsZXQga2V5SW5kZXggPSAwXG4gICAgbGV0IGFib3J0ID0gZmFsc2VcblxuICAgIGNvbnN0IGJlZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGl0ZXJhdG9yKSB7XG4gICAgICAgICAgaWYgKGFib3J0KSBicmVha1xuXG4gICAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IGtleUluZGV4KytcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUuZ2V0KGtleSlcblxuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICB2YWx1ZXNbdmFsdWVJbmRleF0gPSBkZXNlcmlhbGl6ZShyZXF1ZXN0LnJlc3VsdClcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldikgPT4ge1xuICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgYWJvcnQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBiZWVzW2ldID0gYmVlKClcbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoYmVlcylcbiAgICByZXR1cm4gdmFsdWVzXG4gIH1cblxuICBhc3luYyBfZGVsIChrZXksIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXNba1N0b3JlXSgncmVhZHdyaXRlJylcbiAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUuZGVsZXRlKGtleSlcblxuICAgIHJldHVybiB0aGlzW2tPbkNvbXBsZXRlXShyZXF1ZXN0KVxuICB9XG5cbiAgYXN5bmMgX3B1dCAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpc1trU3RvcmVdKCdyZWFkd3JpdGUnKVxuXG4gICAgLy8gV2lsbCB0aHJvdyBhIERhdGFFcnJvciBvciBEYXRhQ2xvbmVFcnJvciBpZiB0aGUgZW52aXJvbm1lbnRcbiAgICAvLyBkb2VzIG5vdCBzdXBwb3J0IHNlcmlhbGl6aW5nIHRoZSBrZXkgb3IgdmFsdWUgcmVzcGVjdGl2ZWx5LlxuICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5wdXQodmFsdWUsIGtleSlcblxuICAgIHJldHVybiB0aGlzW2tPbkNvbXBsZXRlXShyZXF1ZXN0KVxuICB9XG5cbiAgLy8gVE9ETzogaW1wbGVtZW50IGtleSBhbmQgdmFsdWUgaXRlcmF0b3JzXG4gIF9pdGVyYXRvciAob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgSXRlcmF0b3IodGhpcywgdGhpc1trTG9jYXRpb25dLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgX2JhdGNoIChvcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzW2tTdG9yZV0oJ3JlYWR3cml0ZScpXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBzdG9yZS50cmFuc2FjdGlvblxuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgZXJyb3JcblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QoZXJyb3IgfHwgdHJhbnNhY3Rpb24uZXJyb3IgfHwgbmV3IEVycm9yKCdhYm9ydGVkIGJ5IHVzZXInKSlcbiAgICAgIH1cblxuICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IHJlc29sdmVcbiAgICB9KVxuXG4gICAgLy8gV2FpdCBmb3IgYSByZXF1ZXN0IHRvIGNvbXBsZXRlIGJlZm9yZSBtYWtpbmcgdGhlIG5leHQsIHNhdmluZyBDUFUuXG4gICAgZnVuY3Rpb24gbG9vcCAoKSB7XG4gICAgICBjb25zdCBvcCA9IG9wZXJhdGlvbnNbaW5kZXgrK11cbiAgICAgIGNvbnN0IGtleSA9IG9wLmtleVxuXG4gICAgICBsZXQgcmVxXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcSA9IG9wLnR5cGUgPT09ICdkZWwnID8gc3RvcmUuZGVsZXRlKGtleSkgOiBzdG9yZS5wdXQob3AudmFsdWUsIGtleSlcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvciA9IGVyclxuICAgICAgICB0cmFuc2FjdGlvbi5hYm9ydCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPCBvcGVyYXRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXEub25zdWNjZXNzID0gbG9vcFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdHJhbnNhY3Rpb24uY29tbWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIENvbW1pdCBub3cgaW5zdGVhZCBvZiB3YWl0aW5nIGZvciBhdXRvLWNvbW1pdFxuICAgICAgICB0cmFuc2FjdGlvbi5jb21taXQoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvb3AoKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBhc3luYyBfY2xlYXIgKG9wdGlvbnMpIHtcbiAgICBsZXQga2V5UmFuZ2VcblxuICAgIHRyeSB7XG4gICAgICBrZXlSYW5nZSA9IGNyZWF0ZUtleVJhbmdlKG9wdGlvbnMpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVGhlIGxvd2VyIGtleSBpcyBncmVhdGVyIHRoYW4gdGhlIHVwcGVyIGtleS5cbiAgICAgIC8vIEluZGV4ZWREQiB0aHJvd3MgYW4gZXJyb3IsIGJ1dCB3ZSdsbCBqdXN0IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5saW1pdCA+PSAwKSB7XG4gICAgICAvLyBJREJPYmplY3RTdG9yZSNkZWxldGUocmFuZ2UpIGRvZXNuJ3QgaGF2ZSBzdWNoIGFuIG9wdGlvbi5cbiAgICAgIC8vIEZhbGwgYmFjayB0byBjdXJzb3ItYmFzZWQgaW1wbGVtZW50YXRpb24uXG4gICAgICByZXR1cm4gY2xlYXIodGhpcywgdGhpc1trTG9jYXRpb25dLCBrZXlSYW5nZSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZSA9IHRoaXNba1N0b3JlXSgncmVhZHdyaXRlJylcbiAgICBjb25zdCByZXF1ZXN0ID0ga2V5UmFuZ2UgPyBzdG9yZS5kZWxldGUoa2V5UmFuZ2UpIDogc3RvcmUuY2xlYXIoKVxuXG4gICAgcmV0dXJuIHRoaXNba09uQ29tcGxldGVdKHJlcXVlc3QpXG4gIH1cblxuICBhc3luYyBfY2xvc2UgKCkge1xuICAgIHRoaXNba0lEQl0uY2xvc2UoKVxuICB9XG59XG5cbkJyb3dzZXJMZXZlbC5kZXN0cm95ID0gYXN5bmMgZnVuY3Rpb24gKGxvY2F0aW9uLCBwcmVmaXgpIHtcbiAgaWYgKHByZWZpeCA9PSBudWxsKSB7XG4gICAgcHJlZml4ID0gREVGQVVMVF9QUkVGSVhcbiAgfVxuXG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UocHJlZml4ICsgbG9jYXRpb24pXG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IHJlc29sdmVcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSByZWplY3RcbiAgfSlcbn1cblxuZXhwb3J0cy5Ccm93c2VyTGV2ZWwgPSBCcm93c2VyTGV2ZWxcbiIsIi8qKlxuICogQnJvd3Nlci1uYXRpdmUgRm9ya0RCIGFkYXB0ZXIuXG4gKlxuICogSW1wbGVtZW50cyB0aGUgZm9ya2RiIGRhdGEgbW9kZWwg4oCUIGNvbnRlbnQtYWRkcmVzc2VkLCBhcHBlbmQtb25seSBub2Rlc1xuICogd2l0aCBiYWNrd2FyZCBgcHJldmAgbGlua3MgYW5kIGhlYWQgdHJhY2tpbmcg4oCUIG9uIHRvcCBvZiBgYnJvd3Nlci1sZXZlbGBcbiAqIChJbmRleGVkREIpLiAgTm8gTm9kZS5qcyBzdHJlYW1zIG9yIEJ1ZmZlciBwb2x5ZmlsbHMgcmVxdWlyZWQuXG4gKi9cbmltcG9ydCB7IEJyb3dzZXJMZXZlbCB9IGZyb20gJ2Jyb3dzZXItbGV2ZWwnXG5cbi8vIC0tLS0gdHlwZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGEge1xuICAgIGtleTpzdHJpbmdcbiAgICBwcmV2PzpzdHJpbmdbXVxuICAgIFtrOnN0cmluZ106dW5rbm93blxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcmtEQkRvY3VtZW50IHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIGtleTpzdHJpbmdcbiAgICBwcmV2OnN0cmluZ1tdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUVudHJ5IHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIG1ldGE6TWV0YVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtzRW50cnkge1xuICAgIGtleTpzdHJpbmdcbiAgICBoYXNoOnN0cmluZ1xufVxuXG4vLyAtLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2ltcGxlIGNvbnRlbnQgaGFzaCAobm90IGNyeXB0b2dyYXBoaWMg4oCTIGZpbmUgZm9yIGEgZGVtbykuXG4gKi9cbmZ1bmN0aW9uIGNvbnRlbnRIYXNoIChpbnB1dDpzdHJpbmcpOnN0cmluZyB7XG4gICAgbGV0IGggPSAweDgxMWM5ZGM1ICAgLy8gRk5WIG9mZnNldCBiYXNpc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaCBePSBpbnB1dC5jaGFyQ29kZUF0KGkpXG4gICAgICAgIGggPSBNYXRoLmltdWwoaCwgMHgwMTAwMDE5MykgIC8vIEZOViBwcmltZVxuICAgIH1cbiAgICByZXR1cm4gKGggPj4+IDApLnRvU3RyaW5nKDE2KS5wYWRTdGFydCg4LCAnMCcpXG59XG5cbmZ1bmN0aW9uIGdldFByZXYgKG1ldGE6TWV0YSk6c3RyaW5nW10ge1xuICAgIGlmICghbWV0YS5wcmV2KSByZXR1cm4gW11cbiAgICByZXR1cm4gbWV0YS5wcmV2LmZpbHRlcihCb29sZWFuKVxufVxuXG5mdW5jdGlvbiBoYXNQcmVmaXggKGtleTp1bmtub3duLCBwcmVmaXg6c3RyaW5nW10pOmtleSBpcyBzdHJpbmdbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleSkpIHJldHVybiBmYWxzZVxuICAgIGlmIChrZXkubGVuZ3RoIDwgcHJlZml4Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleVtpXSAhPT0gcHJlZml4W2ldKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuLy8gLS0tLSBCcm93c2VyRm9ya0RCIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgQnJvd3NlckZvcmtEQiB7XG4gICAgcHJpdmF0ZSBkYjpCcm93c2VyTGV2ZWw8dW5rbm93biwgdW5rbm93bj5cbiAgICBwcml2YXRlIF9pZDpzdHJpbmdcbiAgICBwcml2YXRlIF9uYW1lOnN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IgKG5hbWUgPSAnZm9ya2RiJykge1xuICAgICAgICB0aGlzLmRiID0gbmV3IEJyb3dzZXJMZXZlbChuYW1lLCB7XG4gICAgICAgICAgICBrZXlFbmNvZGluZzogJ2pzb24nLFxuICAgICAgICAgICAgdmFsdWVFbmNvZGluZzogJ2pzb24nLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lXG4gICAgfVxuXG4gICAgLyoqIE9wZW4gdGhlIHVuZGVybHlpbmcgSW5kZXhlZERCIHN0b3JlLiAqL1xuICAgIGFzeW5jIG9wZW4gKCk6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGIub3BlbigpXG4gICAgfVxuXG4gICAgLyoqIENsb3NlIHRoZSBzdG9yZS4gKi9cbiAgICBhc3luYyBjbG9zZSAoKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5jbG9zZSgpXG4gICAgfVxuXG4gICAgLy8gLS0tLSB3cml0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYSBuZXcgZG9jdW1lbnQuICBSZXR1cm5zIHRoZSBjb250ZW50LWFkZHJlc3NlZCBoYXNoLlxuICAgICAqL1xuICAgIGFzeW5jIHB1dCAobWV0YTpNZXRhLCBib2R5ID0gJycpOlByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBnZXRQcmV2KG1ldGEpXG4gICAgICAgIGNvbnN0IGhhc2hJbnB1dCA9IEpTT04uc3RyaW5naWZ5KHsga2V5OiBtZXRhLmtleSwgcHJldiwgYm9keSB9KVxuICAgICAgICBjb25zdCBoYXNoID0gY29udGVudEhhc2goaGFzaElucHV0KVxuXG4gICAgICAgIGNvbnN0IG9wczpBcnJheTx7IHR5cGU6J3B1dCd8J2RlbCcsIGtleTpzdHJpbmdbXSwgdmFsdWU/OnVua25vd24gfT4gPSBbXVxuXG4gICAgICAgIC8vIE1hcmsga2V5IGFuZCBoYXNoXG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydrZXknLCBtZXRhLmtleV0sIHZhbHVlOiAwIH0pXG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydoYXNoJywgaGFzaF0sIHZhbHVlOiAwIH0pXG5cbiAgICAgICAgLy8gU3RvcmUgbWV0YVxuICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsnbWV0YScsIGhhc2hdLCB2YWx1ZTogbWV0YSB9KVxuXG4gICAgICAgIC8vIFN0b3JlIGJvZHkgYmxvYlxuICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsnYmxvYicsIGhhc2hdLCB2YWx1ZTogYm9keSB9KVxuXG4gICAgICAgIC8vIFRhaWwgKGlmIG5vIHByZXYpXG4gICAgICAgIGlmIChwcmV2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgb3BzLnB1c2goeyB0eXBlOiAncHV0Jywga2V5OiBbJ3RhaWwnLCBtZXRhLmtleSwgaGFzaF0sIHZhbHVlOiAwIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWFkIG1hbmFnZW1lbnQg4oCTIHJlbW92ZSBvbGQgaGVhZHMgdGhhdCB0aGlzIGNvbW1pdCBzdXBlcnNlZGVzXG4gICAgICAgIGZvciAoY29uc3QgcGhhc2ggb2YgcHJldikge1xuICAgICAgICAgICAgb3BzLnB1c2goeyB0eXBlOiAnZGVsJywga2V5OiBbJ2hlYWQnLCBtZXRhLmtleSwgcGhhc2hdIH0pXG4gICAgICAgICAgICBvcHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3B1dCcsXG4gICAgICAgICAgICAgICAga2V5OiBbJ2xpbmsnLCBwaGFzaCwgaGFzaF0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1ldGEua2V5LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsnaGVhZCcsIG1ldGEua2V5LCBoYXNoXSwgdmFsdWU6IDAgfSlcblxuICAgICAgICBhd2FpdCB0aGlzLmRiLmJhdGNoKG9wcyBhcyBhbnkpXG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgfVxuXG4gICAgLy8gLS0tLSByZWFkIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvKiogR2V0IHRoZSBtZXRhZGF0YSBmb3IgYSBoYXNoLiAqL1xuICAgIGFzeW5jIGdldCAoaGFzaDpzdHJpbmcpOlByb21pc2U8TWV0YT4ge1xuICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgdGhpcy5kYi5nZXQoWydtZXRhJywgaGFzaF0gYXMgYW55KSBhcyBNZXRhXG4gICAgICAgIGlmIChtZXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBOb3QgZm91bmQ6ICR7aGFzaH1gKSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdOb3RGb3VuZEVycm9yJyB9LFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXRhXG4gICAgfVxuXG4gICAgLyoqIEdldCB0aGUgYm9keSBibG9iIGZvciBhIGhhc2guICovXG4gICAgYXN5bmMgZ2V0Qm9keSAoaGFzaDpzdHJpbmcpOlByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5kYi5nZXQoWydibG9iJywgaGFzaF0gYXMgYW55KSkgYXMgc3RyaW5nXG4gICAgfVxuXG4gICAgLyoqIExpc3QgZXZlcnkga2V5IGluIHRoZSBzdG9yZS4gKi9cbiAgICBhc3luYyBrZXlzICgpOlByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OnN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba2V5XSBvZiB0aGlzLmRiLml0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJlZml4KGtleSwgWydrZXknXSkpIGNvbnRpbnVlXG4gICAgICAgICAgICBjb25zdCBrID0ga2V5WzFdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGsgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIExpc3QgYWxsIGRvY3VtZW50cy4gKi9cbiAgICBhc3luYyBsaXN0ICgpOlByb21pc2U8Tm9kZUVudHJ5W10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0Ok5vZGVFbnRyeVtdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrZXksIFsnbWV0YSddKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBrZXlbMV1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaCAhPT0gJ3N0cmluZycpIGNvbnRpbnVlXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgaGFzaCxcbiAgICAgICAgICAgICAgICBtZXRhOiB2YWx1ZSBhcyBNZXRhLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIEN1cnJlbnQgaGVhZHMgKGxhdGVzdCB2ZXJzaW9ucykgZm9yIGEga2V5LiAqL1xuICAgIGFzeW5jIGhlYWRzIChrZXk6c3RyaW5nKTpQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDpzdHJpbmdbXSA9IFtdXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgW2tdIG9mIHRoaXMuZGIuaXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcmVmaXgoaywgWydoZWFkJywga2V5XSkpIGNvbnRpbnVlXG4gICAgICAgICAgICBjb25zdCBoYXNoID0ga1syXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGhhc2gpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8qKiBGb3J3YXJkIGxpbmtzIOKAkyB3aGF0IGRvY3VtZW50cyByZWZlcmVuY2UgYGhhc2hgIGFzIGEgcHJldi4gKi9cbiAgICBhc3luYyBsaW5rcyAoaGFzaDpzdHJpbmcpOlByb21pc2U8TGlua3NFbnRyeVtdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDpMaW5rc0VudHJ5W10gPSBbXVxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IFtrLCB2YWx1ZV0gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrLCBbJ2xpbmsnLCBoYXNoXSkpIGNvbnRpbnVlXG4gICAgICAgICAgICBjb25zdCBsaW5rZWRIYXNoID0ga1syXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaW5rZWRIYXNoICE9PSAnc3RyaW5nJykgY29udGludWVcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBoYXNoOiBsaW5rZWRIYXNoLFxuICAgICAgICAgICAgICAgIGtleTogdmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIFdhbGsgYmFja3dhcmQgdGhyb3VnaCBoaXN0b3J5IGZyb20gYSBnaXZlbiBoYXNoLiAqL1xuICAgIGFzeW5jIGhpc3RvcnkgKGhhc2g6c3RyaW5nKTpQcm9taXNlPE5vZGVFbnRyeVtdPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDpOb2RlRW50cnlbXSA9IFtdXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgICAgICBsZXQgY3VycmVudDpzdHJpbmd8dW5kZWZpbmVkID0gaGFzaFxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50ICYmICF2aXNpdGVkLmhhcyhjdXJyZW50KSkge1xuICAgICAgICAgICAgdmlzaXRlZC5hZGQoY3VycmVudClcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLmdldChjdXJyZW50KVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBoYXNoOiBjdXJyZW50LCBtZXRhIH0pXG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gZ2V0UHJldihtZXRhKVxuICAgICAgICAgICAgLy8gRm9sbG93IGZpcnN0IHByZXYgbGluayAobGluZWFyIGhpc3RvcnkpXG4gICAgICAgICAgICBjdXJyZW50ID0gcHJldlswXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8qKiBUYWlscyAocm9vdCBkb2N1bWVudHMgd2l0aCBubyBwcmV2KSBmb3IgYSBrZXkuICovXG4gICAgYXN5bmMgdGFpbHMgKGtleTpzdHJpbmcpOlByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OnN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba10gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrLCBbJ3RhaWwnLCBrZXldKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBrWzJdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhc2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaGFzaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIERlbGV0ZSB0aGUgSW5kZXhlZERCIGRhdGFiYXNlIGVudGlyZWx5IChmb3IgZGVtbyByZXNldCkuICovXG4gICAgYXN5bmMgZGVzdHJveSAoKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpXG4gICAgICAgIC8vIGJyb3dzZXItbGV2ZWwgc3RvcmVzIGRhdGEgaW4gYW4gSW5kZXhlZERCIGRhdGFiYXNlIG5hbWVkIGFmdGVyXG4gICAgICAgIC8vIHRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAgICAgICAgY29uc3QgcmVxID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKHRoaXMuX25hbWUpXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKClcbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdwcmVhY3QvaG9va3MnXG5pbXBvcnQgJ0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbidcbmltcG9ydCB7IEJyb3dzZXJGb3JrREIgfSBmcm9tICcuL2Jyb3dzZXItZm9ya2RiLmpzJ1xuaW1wb3J0IHR5cGUgeyBNZXRhLCBOb2RlRW50cnksIExpbmtzRW50cnkgfSBmcm9tICcuL2Jyb3dzZXItZm9ya2RiLmpzJ1xuXG4vLyAtLS0tIHN0YXRlIHR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmludGVyZmFjZSBOb2RlRGV0YWlsIHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIG1ldGE6TWV0YVxuICAgIGJvZHk6c3RyaW5nXG4gICAgZm9yd2FyZExpbmtzOkxpbmtzRW50cnlbXVxufVxuXG4vLyAtLS0tIHRoZSBEQiBpbnN0YW5jZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGZvcmtkYiA9IG5ldyBCcm93c2VyRm9ya0RCKCdmb3JrZGItZXhhbXBsZScpXG5cbi8vIC0tLS0gY29tcG9uZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gTm9kZUNhcmQgKHsgbm9kZSwgb25TZWxlY3QgfTp7XG4gICAgbm9kZTpOb2RlRGV0YWlsLFxuICAgIG9uU2VsZWN0OihoYXNoOnN0cmluZykgPT4gdm9pZCxcbn0pIHtcbiAgICBjb25zdCBwcmV2ID0gbm9kZS5tZXRhLnByZXYgPz8gW11cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIm5vZGUtY2FyZFwiPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vZGUta2V5XCI+JHtub2RlLm1ldGEua2V5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cIm5vZGUtaGFzaFwiIHRpdGxlPSR7bm9kZS5oYXNofT4ke25vZGUuaGFzaH08L2NvZGU+XG4gICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgJHtub2RlLmJvZHlcbiAgICAgICAgICAgICAgICA/IGh0bWxgPHAgY2xhc3M9XCJub2RlLWJvZHlcIj4ke25vZGUuYm9keX08L3A+YFxuICAgICAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgICAgJHtwcmV2Lmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmstbGFiZWxcIj5wcmV2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3ByZXYubWFwKChoOnN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IG9uU2VsZWN0KGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAke25vZGUuZm9yd2FyZExpbmtzLmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmstbGFiZWxcIj5uZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke25vZGUuZm9yd2FyZExpbmtzLm1hcCgobDpMaW5rc0VudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1YnN0cmF0ZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9JHtsLmhhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoYXNoLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBvblNlbGVjdChsLmhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bC5oYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdWJzdHJhdGUtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgXG59XG5cbmZ1bmN0aW9uIENyZWF0ZUZvcm0gKHsgb25DcmVhdGVkIH06eyBvbkNyZWF0ZWQ6KCkgPT4gdm9pZCB9KSB7XG4gICAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCdteS1kb2MnKVxuICAgIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtwcmV2SGFzaCwgc2V0UHJldkhhc2hdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBzdWJtaXQgPSB1c2VDYWxsYmFjayhhc3luYyAoZXY6RXZlbnQpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBtZXRhOk1ldGEgPSB7IGtleSB9XG4gICAgICAgIGlmIChwcmV2SGFzaC50cmltKCkpIHtcbiAgICAgICAgICAgIG1ldGEucHJldiA9IHByZXZIYXNoLnNwbGl0KCcsJykubWFwKHMgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGZvcmtkYi5wdXQobWV0YSwgYm9keSlcbiAgICAgICAgc2V0Qm9keSgnJylcbiAgICAgICAgc2V0UHJldkhhc2goJycpXG4gICAgICAgIG9uQ3JlYXRlZCgpXG4gICAgfSwgW2tleSwgYm9keSwgcHJldkhhc2gsIG9uQ3JlYXRlZF0pXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjcmVhdGUtZm9ybVwiIG9uU3VibWl0PSR7c3VibWl0fT5cbiAgICAgICAgICAgIDxoMj5BZGQgYSBub2RlPC9oMj5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxzcGFuPktleTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0ke2tleX1cbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD0keyhlOkV2ZW50KSA9PiBzZXRLZXkoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxzcGFuPkJvZHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSR7Ym9keX1cbiAgICAgICAgICAgICAgICAgICAgcm93cz0kezN9XG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9JHsoZTpFdmVudCkgPT4gc2V0Qm9keSgoZS50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPHNwYW4+UHJldiBoYXNoKGVzKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0ke3ByZXZIYXNofVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNvbW1hLXNlcGFyYXRlZCBoYXNoZXNcIlxuICAgICAgICAgICAgICAgICAgICBvbklucHV0PSR7KGU6RXZlbnQpID0+IHNldFByZXZIYXNoKChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uIGNsYXNzPVwiY3JlYXRlLXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIGBcbn1cblxuZnVuY3Rpb24gSGlzdG9yeVBhbmVsICh7IGhhc2gsIG9uU2VsZWN0IH06e1xuICAgIGhhc2g6c3RyaW5nLFxuICAgIG9uU2VsZWN0OihoOnN0cmluZykgPT4gdm9pZCxcbn0pIHtcbiAgICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZTxOb2RlRW50cnlbXT4oW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICAgICAgZm9ya2RiLmhpc3RvcnkoaGFzaCkudGhlbihoID0+IHtcbiAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSBzZXRIaXN0b3J5KGgpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNhbmNlbGxlZCA9IHRydWUgfVxuICAgIH0sIFtoYXNoXSlcblxuICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgICA8YXNpZGUgY2xhc3M9XCJoaXN0b3J5LXBhbmVsXCI+XG4gICAgICAgICAgICA8aDM+SGlzdG9yeSBmcm9tICR7aGFzaH08L2gzPlxuICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgICR7aGlzdG9yeS5tYXAoZW50cnkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT0ke2VudHJ5Lmhhc2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1YnN0cmF0ZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IG9uU2VsZWN0KGVudHJ5Lmhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZW50cnkuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlzdG9yeS1rZXlcIj4ke2VudHJ5Lm1ldGEua2V5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgYFxufVxuXG5pbnRlcmZhY2UgRGFnUG9pbnQge1xuICAgIGhhc2g6c3RyaW5nXG4gICAga2V5OnN0cmluZ1xuICAgIHg6bnVtYmVyXG4gICAgeTpudW1iZXJcbn1cblxuaW50ZXJmYWNlIERhZ0VkZ2Uge1xuICAgIGZyb206c3RyaW5nXG4gICAgdG86c3RyaW5nXG59XG5cbmZ1bmN0aW9uIGJ1aWxkRGFnIChub2RlczpOb2RlRGV0YWlsW10pOntcbiAgICBwb2ludHM6RGFnUG9pbnRbXVxuICAgIGVkZ2VzOkRhZ0VkZ2VbXVxuICAgIHdpZHRoOm51bWJlclxuICAgIGhlaWdodDpudW1iZXJcbn0ge1xuICAgIGNvbnN0IGJ5SGFzaCA9IG5ldyBNYXA8c3RyaW5nLCBOb2RlRGV0YWlsPigpXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4gYnlIYXNoLnNldChub2RlLmhhc2gsIG5vZGUpKVxuXG4gICAgY29uc3QgZGVwdGhDYWNoZSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcbiAgICBjb25zdCBnZXREZXB0aCA9IChoYXNoOnN0cmluZywgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpKTpudW1iZXIgPT4ge1xuICAgICAgICBpZiAoZGVwdGhDYWNoZS5oYXMoaGFzaCkpIHJldHVybiBkZXB0aENhY2hlLmdldChoYXNoKSFcbiAgICAgICAgaWYgKHNlZW4uaGFzKGhhc2gpKSByZXR1cm4gMFxuXG4gICAgICAgIGNvbnN0IG5vZGUgPSBieUhhc2guZ2V0KGhhc2gpXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIDBcblxuICAgICAgICBzZWVuLmFkZChoYXNoKVxuICAgICAgICBjb25zdCBwcmV2ID0gbm9kZS5tZXRhLnByZXYgPz8gW11cbiAgICAgICAgaWYgKHByZXYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZXB0aENhY2hlLnNldChoYXNoLCAwKVxuICAgICAgICAgICAgc2Vlbi5kZWxldGUoaGFzaClcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF4RGVwdGggPSAwXG4gICAgICAgIGZvciAoY29uc3QgcHJldkhhc2ggb2YgcHJldikge1xuICAgICAgICAgICAgbWF4RGVwdGggPSBNYXRoLm1heChtYXhEZXB0aCwgZ2V0RGVwdGgocHJldkhhc2gsIHNlZW4pICsgMSlcbiAgICAgICAgfVxuICAgICAgICBkZXB0aENhY2hlLnNldChoYXNoLCBtYXhEZXB0aClcbiAgICAgICAgc2Vlbi5kZWxldGUoaGFzaClcbiAgICAgICAgcmV0dXJuIG1heERlcHRoXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydGVkTm9kZXMgPSBbLi4ubm9kZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZGVwdGhEaWZmID0gZ2V0RGVwdGgoYS5oYXNoKSAtIGdldERlcHRoKGIuaGFzaClcbiAgICAgICAgaWYgKGRlcHRoRGlmZiAhPT0gMCkgcmV0dXJuIGRlcHRoRGlmZlxuICAgICAgICByZXR1cm4gYS5oYXNoLmxvY2FsZUNvbXBhcmUoYi5oYXNoKVxuICAgIH0pXG5cbiAgICBjb25zdCBsYW5lc0J5RGVwdGggPSBuZXcgTWFwPG51bWJlciwgU2V0PG51bWJlcj4+KClcbiAgICBjb25zdCBsYW5lQnlIYXNoID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuXG4gICAgY29uc3QgcmVzZXJ2ZUxhbmUgPSAoZGVwdGg6bnVtYmVyLCBwcmVmZXJyZWQ6bnVtYmVyfHVuZGVmaW5lZCk6bnVtYmVyID0+IHtcbiAgICAgICAgY29uc3QgdXNlZCA9IGxhbmVzQnlEZXB0aC5nZXQoZGVwdGgpID8/IG5ldyBTZXQ8bnVtYmVyPigpXG4gICAgICAgIGlmIChwcmVmZXJyZWQgIT09IHVuZGVmaW5lZCAmJiAhdXNlZC5oYXMocHJlZmVycmVkKSkge1xuICAgICAgICAgICAgdXNlZC5hZGQocHJlZmVycmVkKVxuICAgICAgICAgICAgbGFuZXNCeURlcHRoLnNldChkZXB0aCwgdXNlZClcbiAgICAgICAgICAgIHJldHVybiBwcmVmZXJyZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYW5lID0gMFxuICAgICAgICB3aGlsZSAodXNlZC5oYXMobGFuZSkpIGxhbmUrK1xuICAgICAgICB1c2VkLmFkZChsYW5lKVxuICAgICAgICBsYW5lc0J5RGVwdGguc2V0KGRlcHRoLCB1c2VkKVxuICAgICAgICByZXR1cm4gbGFuZVxuICAgIH1cblxuICAgIGxldCBtYXhMYW5lID0gMFxuICAgIGxldCBtYXhEZXB0aCA9IDBcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygc29ydGVkTm9kZXMpIHtcbiAgICAgICAgY29uc3QgZGVwdGggPSBnZXREZXB0aChub2RlLmhhc2gpXG4gICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGRlcHRoKVxuICAgICAgICBjb25zdCBwcmV2ID0gbm9kZS5tZXRhLnByZXYgPz8gW11cbiAgICAgICAgY29uc3QgcHJlZmVycmVkID0gcHJldlxuICAgICAgICAgICAgLm1hcCgocHJldkhhc2gpID0+IGxhbmVCeUhhc2guZ2V0KHByZXZIYXNoKSlcbiAgICAgICAgICAgIC5maW5kKChsYW5lKTpsYW5lIGlzIG51bWJlciA9PiBsYW5lICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGNvbnN0IGxhbmUgPSByZXNlcnZlTGFuZShkZXB0aCwgcHJlZmVycmVkKVxuICAgICAgICBsYW5lQnlIYXNoLnNldChub2RlLmhhc2gsIGxhbmUpXG4gICAgICAgIG1heExhbmUgPSBNYXRoLm1heChtYXhMYW5lLCBsYW5lKVxuICAgIH1cblxuICAgIGNvbnN0IHBvaW50czpEYWdQb2ludFtdID0gW11cbiAgICBjb25zdCB4U3RlcCA9IDE4MFxuICAgIGNvbnN0IHlTdGVwID0gMTQwXG4gICAgY29uc3QgeE1hcmdpbiA9IDkwXG4gICAgY29uc3QgeU1hcmdpbiA9IDcwXG5cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygc29ydGVkTm9kZXMpIHtcbiAgICAgICAgY29uc3QgbGFuZSA9IGxhbmVCeUhhc2guZ2V0KG5vZGUuaGFzaCkgPz8gMFxuICAgICAgICBjb25zdCBkZXB0aCA9IGdldERlcHRoKG5vZGUuaGFzaClcbiAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgaGFzaDogbm9kZS5oYXNoLFxuICAgICAgICAgICAga2V5OiBub2RlLm1ldGEua2V5LFxuICAgICAgICAgICAgeDogeE1hcmdpbiArIChsYW5lICogeFN0ZXApLFxuICAgICAgICAgICAgeTogeU1hcmdpbiArIChkZXB0aCAqIHlTdGVwKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGVkZ2VzOkRhZ0VkZ2VbXSA9IFtdXG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBub2RlLm1ldGEucHJldiA/PyBbXVxuICAgICAgICBmb3IgKGNvbnN0IHByZXZIYXNoIG9mIHByZXYpIHtcbiAgICAgICAgICAgIGlmIChieUhhc2guaGFzKHByZXZIYXNoKSkge1xuICAgICAgICAgICAgICAgIGVkZ2VzLnB1c2goeyBmcm9tOiBwcmV2SGFzaCwgdG86IG5vZGUuaGFzaCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9pbnRzLFxuICAgICAgICBlZGdlcyxcbiAgICAgICAgd2lkdGg6IChtYXhMYW5lICogeFN0ZXApICsgKHhNYXJnaW4gKiAyKSxcbiAgICAgICAgaGVpZ2h0OiAobWF4RGVwdGggKiB5U3RlcCkgKyAoeU1hcmdpbiAqIDIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBNZXJrbGVEYWcgKHsgbm9kZXMsIHNlbGVjdGVkSGFzaCwgb25TZWxlY3QgfTp7XG4gICAgbm9kZXM6Tm9kZURldGFpbFtdXG4gICAgc2VsZWN0ZWRIYXNoOnN0cmluZ3xudWxsXG4gICAgb25TZWxlY3Q6KGhhc2g6c3RyaW5nKSA9PiB2b2lkXG59KSB7XG4gICAgY29uc3QgZGFnID0gYnVpbGREYWcobm9kZXMpXG4gICAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50fG51bGw+KG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgICAgIGlmICghZWwpIHJldHVyblxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHRcbiAgICB9LCBbZGFnLnBvaW50cy5sZW5ndGhdKVxuXG4gICAgY29uc3QgcG9pbnRNYXAgPSBuZXcgTWFwPHN0cmluZywgRGFnUG9pbnQ+KClcbiAgICBkYWcucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiBwb2ludE1hcC5zZXQocG9pbnQuaGFzaCwgcG9pbnQpKVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGFnLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMj5NZXJrbGUgREFHPC9oMj5cblxuICAgICAgICAgICAgJHtkYWcucG9pbnRzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICAgICAgaHRtbGA8cCBjbGFzcz1cImVtcHR5LXN0YXRlXCI+LTwvcD5gIDpcbiAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFnLXNjcm9sbFwiIHJlZj0ke3Njcm9sbFJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkYWctY2FudmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0ke2RhZy53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JHtkYWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZXJrbGUgREFHIHZpc3VhbGl6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGFnLmVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gcG9pbnRNYXAuZ2V0KGVkZ2UuZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG8gPSBwb2ludE1hcC5nZXQoZWRnZS50bylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tIHx8ICF0bykgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke2Ake2VkZ2UuZnJvbX0tPiR7ZWRnZS50b31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGFnLWVkZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxPSR7ZnJvbS54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPSR7ZnJvbS55fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPSR7dG8ueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Mj0ke3RvLnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhZy5wb2ludHMubWFwKChwb2ludCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke3BvaW50Lmhhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhZy1ub2RlLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBvblNlbGVjdChwb2ludC5oYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSR7c2VsZWN0ZWRIYXNoID09PSBwb2ludC5oYXNoID8gJ2RhZy1ub2RlIGRhZy1ub2RlLXNlbGVjdGVkJyA6ICdkYWctbm9kZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3g9JHtwb2ludC54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5PSR7cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByPSR7MzZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhZy1ub2RlLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PSR7cG9pbnQueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PSR7cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9taW5hbnQtYmFzZWxpbmU9XCJjZW50cmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BvaW50Lmhhc2guc2xpY2UoMCwgNCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGFnLW5vZGUta2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PSR7cG9pbnQueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PSR7cG9pbnQueSArIDU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3BvaW50LmtleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICR7c2VsZWN0ZWRIYXNoICYmIGh0bWxgXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYWctc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQgbm9kZTogPGNvZGU+JHtzZWxlY3RlZEhhc2h9PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59XG5cbmZ1bmN0aW9uIEFwcCAoKSB7XG4gICAgY29uc3QgW25vZGVzLCBzZXROb2Rlc10gPSB1c2VTdGF0ZTxOb2RlRGV0YWlsW10+KFtdKVxuICAgIGNvbnN0IFtzZWxlY3RlZEhhc2gsIHNldFNlbGVjdGVkSGFzaF0gPSB1c2VTdGF0ZTxzdHJpbmd8bnVsbD4obnVsbClcbiAgICBjb25zdCBbaGVhZE1hcCwgc2V0SGVhZE1hcF0gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4+KHt9KVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsTm9kZXMgPSBhd2FpdCBmb3JrZGIubGlzdCgpXG5cbiAgICAgICAgLy8gRW5yaWNoIHdpdGggYm9keSArIGZvcndhcmQgbGlua3NcbiAgICAgICAgY29uc3QgZGV0YWlsZWQ6Tm9kZURldGFpbFtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBhbGxOb2Rlcy5tYXAoYXN5bmMgKG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbYm9keSwgZm9yd2FyZExpbmtzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgZm9ya2RiLmdldEJvZHkobi5oYXNoKS5jYXRjaCgoKSA9PiAnJyksXG4gICAgICAgICAgICAgICAgICAgIGZvcmtkYi5saW5rcyhuLmhhc2gpLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ubiwgYm9keSwgZm9yd2FyZExpbmtzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcblxuICAgICAgICBzZXROb2RlcyhkZXRhaWxlZClcblxuICAgICAgICAvLyBCdWlsZCBoZWFkIG1hcFxuICAgICAgICBjb25zdCBrZXlzID0gYXdhaXQgZm9ya2RiLmtleXMoKVxuICAgICAgICBjb25zdCBobTpSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IGsgb2Yga2V5cykge1xuICAgICAgICAgICAgaG1ba10gPSBhd2FpdCBmb3JrZGIuaGVhZHMoaylcbiAgICAgICAgfVxuICAgICAgICBzZXRIZWFkTWFwKGhtKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZm9ya2RiLm9wZW4oKS50aGVuKHJlZnJlc2gpXG4gICAgfSwgW3JlZnJlc2hdKVxuXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZvcmtkYi5kZXN0cm95KClcbiAgICAgICAgLy8gUmUtb3BlbiBhIGZyZXNoIGluc3RhbmNlIOKAlCBCcm93c2VyRm9ya0RCIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYSBuZXdcbiAgICAgICAgLy8gQnJvd3NlckxldmVsLCBidXQgYWZ0ZXIgZGVzdHJveSB0aGUgb2xkIGhhbmRsZSBpcyBjbG9zZWQsIHNvIHdlXG4gICAgICAgIC8vIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlIGZvciBhIGNsZWFuIHNsYXRlLlxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiYXBwLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMT5Gb3JrREI8L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29udGVudC1hZGRyZXNzZWQgYXBwZW5kLW9ubHkgc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgYmFja2VkIGJ5IEluZGV4ZWREQlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8c3Vic3RyYXRlLWJ1dHRvbiBjbGFzcz1cInJlc2V0LWJ0blwiIG9uQ2xpY2s9JHtoYW5kbGVSZXNldH0+XG4gICAgICAgICAgICAgICAgICAgIFJlc2V0IERCXG4gICAgICAgICAgICAgICAgPC9zdWJzdHJhdGUtYnV0dG9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibGVmdC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPCR7Q3JlYXRlRm9ybX0gb25DcmVhdGVkPSR7cmVmcmVzaH0gLz5cblxuICAgICAgICAgICAgICAgICAgICAke09iamVjdC5rZXlzKGhlYWRNYXApLmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVhZHMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IZWFkczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtPYmplY3QuZW50cmllcyhoZWFkTWFwKS5tYXAoKFtrZXksIGhhc2hlc10pID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkcy1yb3dcIiBrZXk9JHtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub2RlLWtleVwiPiR7a2V5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KGhhc2hlcyBhcyBzdHJpbmdbXSkubWFwKChoOnN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Vic3RyYXRlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9JHtofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGluayBoZWFkLWhhc2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSR7KCkgPT4gc2V0U2VsZWN0ZWRIYXNoKGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm5vZGVzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BbGwgbm9kZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtub2Rlcy5sZW5ndGggPT09IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIGRvY3VtZW50cyB5ZXQuIENyZWF0ZSBvbmUgYWJvdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7bm9kZXMubWFwKG4gPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8JHtOb2RlQ2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7bi5oYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlPSR7bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9JHtzZXRTZWxlY3RlZEhhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEhhc2ggJiYgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwke0hpc3RvcnlQYW5lbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoPSR7c2VsZWN0ZWRIYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PSR7c2V0U2VsZWN0ZWRIYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInJpZ2h0LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8JHtNZXJrbGVEYWd9XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlcz0ke25vZGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRIYXNoPSR7c2VsZWN0ZWRIYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9JHtzZXRTZWxlY3RlZEhhc2h9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn1cblxuLy8gLS0tLSBtb3VudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5yZW5kZXIoaHRtbGA8JHtBcHB9IC8+YCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpXG4iXSwibmFtZXMiOlsibiIsImwiLCJ1IiwiaSIsInIiLCJvIiwiZSIsImYiLCJjIiwicyIsImEiLCJwIiwidiIsInkiLCJkIiwidyIsInQiLCJtIiwiayIsIkMiLCJ6IiwiaCIsImciLCJfIiwiQSIsIkQiLCJUIiwiaiIsIlMiLCJNIiwiJCIsIkkiLCJIIiwicSIsIkIiLCJ4IiwiX19kZWZQcm9wIiwiX19uYW1lIiwiaXNSZWdpc3RlcmVkIiwiZGVmaW5lIiwiX21hdGNoIiwiX2EiLCJTdWJzdHJhdGVCdXR0b25MaWdodCIsImxlbiIsImxlbjIiLCJidWZmZXIiLCJyZXF1aXJlJCQwIiwiaWVlZTc1NCIsInJlcXVpcmUkJDEiLCJleHBvcnRzIiwiQnVmZmVyIiwiZW5jb2RpbmciLCJieXRlTGVuZ3RoIiwiZXJyb3JzIiwiRSIsImZvcm1hdHMiLCJ0ZXh0RW5kZWMiLCJyZXF1aXJlJCQyIiwiZW5jb2RpbmdzIiwicmVxdWlyZSQkMyIsIlJlZmxlY3RBcHBseSIsIlJlZmxlY3RPd25LZXlzIiwiTnVtYmVySXNOYU4iLCJldmVudHNNb2R1bGUiLCJldmVudHMiLCJvbmNlIiwidmFsdWUiLCJpdGVyYXRvciIsInJlcXVpcmUkJDQiLCJuYW1lIiwicHJlZml4TGVuZ3RoIiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJyZXF1aXJlJCQ3IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDkiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDExIiwicmVxdWlyZSQkMTIiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDE0IiwicmVxdWlyZSQkMTUiLCJlcnIiLCJwcmV3cml0ZUJhdGNoIiwicmVxdWlyZSQkMTYiLCJhYnN0cmFjdExldmVsIiwiZGVzZXJpYWxpemUiLCJrZXlSYW5nZSIsImNsZWFyIiwiQnJvd3NlckxldmVsIiwiaHRtbCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJtYXhEZXB0aCIsImxhbmUiLCJ1c2VSZWYiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFHLElBQUNBLEtBQUVDLEtBQUVDLEtBQUlDLEtBQUVDLEtBQUVDLEtBQUVDLEtBQUVDLEtBQUVDLEtBQUVDLEtBQUVDLEtBQUlDLE1BQUUsQ0FBQSxHQUFHQyxNQUFFLENBQUEsR0FBR0MsTUFBRSxxRUFBb0VDLE1BQUUsTUFBTTtBQUFRLFNBQVNDLElBQUVmLElBQUVDLElBQUU7QUFBQyxXQUFRQyxNQUFLRCxHQUFFLENBQUFELEdBQUVFLEVBQUMsSUFBRUQsR0FBRUMsRUFBQztBQUFFLFNBQU9GO0FBQUM7QUFBQyxTQUFTLEVBQUVBLElBQUU7QUFBQyxFQUFBQSxNQUFHQSxHQUFFLGNBQVlBLEdBQUUsV0FBVyxZQUFZQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVDLElBQUVDLElBQUVjLElBQUU7QUFBQyxNQUFJYixJQUFFQyxJQUFFQyxJQUFFQyxLQUFFLENBQUE7QUFBRyxPQUFJRCxNQUFLSCxHQUFFLFVBQU9HLEtBQUVGLEtBQUVELEdBQUVHLEVBQUMsSUFBRSxTQUFPQSxLQUFFRCxLQUFFRixHQUFFRyxFQUFDLElBQUVDLEdBQUVELEVBQUMsSUFBRUgsR0FBRUcsRUFBQztBQUFFLE1BQUcsVUFBVSxTQUFPLE1BQUlDLEdBQUUsV0FBUyxVQUFVLFNBQU8sSUFBRU4sSUFBRSxLQUFLLFdBQVUsQ0FBQyxJQUFFZ0IsS0FBRyxjQUFZLE9BQU9mLE1BQUcsUUFBTUEsR0FBRSxhQUFhLE1BQUlJLE1BQUtKLEdBQUUsYUFBYSxZQUFTSyxH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QSw4QkFHM0IsT0FBTyxRQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLE1BQU0sTUFBTUE7QUFBQUEsNkRBQ2hCLEdBQUc7QUFBQSw2REFDSCxHQUFHO0FBQUEsc0NBQ3pCLE9BQW9CLElBQUksQ0FBQ3JFLE9BQWFxRTtBQUFBQTtBQUFBQSxrREFFM0JyRSxFQUFDO0FBQUE7QUFBQSxzREFFRyxNQUFNLGdCQUFnQkEsRUFBQyxDQUFDO0FBQUE7QUFBQSw4Q0FFaENBLEVBQUM7QUFBQTtBQUFBLHFDQUVWLENBQUM7QUFBQTtBQUFBLDZCQUVULENBQUM7QUFBQTtBQUFBLHFCQUVUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSUssTUFBTSxXQUFXLEtBQUtxRTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSx5QkFJdkI7QUFBQSwwQkFDQyxNQUFNLElBQUksQ0FBQTFGLE9BQUswRjtBQUFBQSwrQkFDVixRQUFRO0FBQUEsc0NBQ0QxRixHQUFFLElBQUk7QUFBQSx1Q0FDTEEsRUFBQztBQUFBLDJDQUNHLGVBQWU7QUFBQTtBQUFBLHlCQUVqQyxDQUFDO0FBQUE7QUFBQTtBQUFBLHNCQUdKLGdCQUFnQjBGO0FBQUFBLDJCQUNYLFlBQVk7QUFBQSxtQ0FDSixZQUFZO0FBQUEsdUNBQ1IsZUFBZTtBQUFBO0FBQUEscUJBRWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSUUsU0FBUztBQUFBLGdDQUNBLEtBQUs7QUFBQSx1Q0FDRSxZQUFZO0FBQUEsbUNBQ2hCLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWxEO0FBSUFPLEVBQU9QLE9BQVEsR0FBRyxPQUFPLFNBQVMsZUFBZSxNQUFNLENBQUU7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDNdfQ==
