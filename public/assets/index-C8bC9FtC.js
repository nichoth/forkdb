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
var n$2, l$3, u$2, t$3, i$2, r$2, o$2, e$3, f$1, c$2, s$2, a$2, p$3 = {}, v$2 = [], y$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d$1 = Array.isArray;
function w$3(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function g$2(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _$2(l2, u2, t2) {
  var i2, r2, o2, e2 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n$2.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$3(l2, e2, i2, r2, null);
}
function m$3(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u$2 : o2, __i: -1, __u: 0 };
  return null == o2 && null != l$3.vnode && l$3.vnode(e2), e2;
}
function k$1(n2) {
  return n2.children;
}
function x$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function S$1(n2, l2) {
  if (null == l2) return n2.__ ? S$1(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? S$1(n2) : null;
}
function C$1(n2) {
  if (n2.__P && n2.__d) {
    var u2 = n2.__v, t2 = u2.__e, i2 = [], r2 = [], o2 = w$3({}, u2);
    o2.__v = u2.__v + 1, l$3.vnode && l$3.vnode(o2), z$1(n2.__P, o2, u2, n2.__n, n2.__P.namespaceURI, 32 & u2.__u ? [t2] : null, i2, null == t2 ? S$1(u2) : t2, !!(32 & u2.__u), r2), o2.__v = u2.__v, o2.__.__k[o2.__i] = o2, V(i2, o2, r2), u2.__e = u2.__ = null, o2.__e != t2 && M(o2);
  }
}
function M(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), M(n2);
}
function $(n2) {
  (!n2.__d && (n2.__d = true) && i$2.push(n2) && !I.__r++ || r$2 != l$3.debounceRendering) && ((r$2 = l$3.debounceRendering) || o$2)(I);
}
function I() {
  for (var n2, l2 = 1; i$2.length; ) i$2.length > l2 && i$2.sort(e$3), n2 = i$2.shift(), l2 = i$2.length, C$1(n2);
  I.__r = 0;
}
function P(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, d2, w2, g2, _2, m2 = t2 && t2.__k || v$2, b2 = l2.length;
  for (f2 = A$1(u2, l2, m2, f2, b2), a2 = 0; a2 < b2; a2++) null != (y2 = u2.__k[a2]) && (h2 = -1 != y2.__i && m2[y2.__i] || p$3, y2.__i = a2, g2 = z$1(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && D(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), (_2 = !!(4 & y2.__u)) || h2.__k === y2.__k ? f2 = H(y2, f2, n2, _2) : "function" == typeof y2.type && void 0 !== g2 ? f2 = g2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return u2.__e = w2, f2;
}
function A$1(n2, l2, u2, t2, i2) {
  var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = m$3(null, o2, null, null, null) : d$1(o2) ? o2 = n2.__k[r2] = m$3(k$1, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = m$3(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f2 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = T$1(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S$1(e2)), E(e2, e2));
  return t2;
}
function H(n2, l2, u2, t2) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = H(i2[r2], l2, u2, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = S$1(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
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
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y$3.test(l2) ? u2 : u2 + "px";
}
function F$1(n2, l2, u2, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || j$1(n2.style, l2, "");
    if (u2) for (l2 in u2) t2 && u2[l2] == t2[l2] || j$1(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$1, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$2, n2.addEventListener(l2, r2 ? a$2 : s$2, r2)) : n2.removeEventListener(l2, r2 ? a$2 : s$2, r2);
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
      if (null == u2.t) u2.t = c$2++;
      else if (u2.t < t2.u) return;
      return t2(l$3.event ? l$3.event(u2) : u2);
    }
  };
}
function z$1(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, y2, _2, m2, b2, S2, C2, M2, $2, I2, A2, H2, L, T2 = u2.type;
  if (void 0 !== u2.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l$3.__b) && a2(u2);
  n: if ("function" == typeof T2) try {
    if (S2 = u2.props, C2 = "prototype" in T2 && T2.prototype.render, M2 = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M2 ? M2.props.value : a2.__ : i2, t2.__c ? b2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (C2 ? u2.__c = h2 = new T2(S2, $2) : (u2.__c = h2 = new x$1(S2, $2), h2.constructor = T2, h2.render = G), M2 && M2.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), C2 && null == h2.__s && (h2.__s = h2.state), C2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w$3({}, h2.__s)), w$3(h2.__s, T2.getDerivedStateFromProps(S2, h2.__s))), y2 = h2.props, _2 = h2.state, h2.__v = u2, p2) C2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), C2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (C2 && null == T2.getDerivedStateFromProps && S2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(S2, $2), u2.__v == t2.__v || !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(S2, h2.__s, $2)) {
        u2.__v != t2.__v && (h2.props = S2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), v$2.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(S2, h2.__s, $2), C2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(y2, _2, m2);
      });
    }
    if (h2.context = $2, h2.props = S2, h2.__P = n2, h2.__e = false, I2 = l$3.__r, A2 = 0, C2) h2.state = h2.__s, h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), v$2.push.apply(h2.__h, h2._sb), h2._sb = [];
    else do {
      h2.__d = false, I2 && I2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = w$3(w$3({}, i2), h2.getChildContext())), C2 && !p2 && null != h2.getSnapshotBeforeUpdate && (m2 = h2.getSnapshotBeforeUpdate(y2, _2)), H2 = null != a2 && a2.type === k$1 && null == a2.key ? q$2(a2.props.children) : a2, f2 = P(n2, d$1(H2) ? H2 : [H2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), b2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c2 || null != o2) if (n3.then) {
      for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else {
      for (L = o2.length; L--; ) g$2(o2[L]);
      N(u2);
    }
    else u2.__e = t2.__e, u2.__k = t2.__k, n3.then || N(u2);
    l$3.__e(n3, u2, t2);
  }
  else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = B$1(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l$3.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
}
function N(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(N));
}
function V(n2, u2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) D(t2[i2], t2[++i2], t2[++i2]);
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
function q$2(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : d$1(n2) ? n2.map(q$2) : w$3({}, n2);
}
function B$1(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, w2, _2, m2, b2 = i2.props || p$3, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
      u2 = w2, e2[a2] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x2) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$3.__m && l$3.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
  else {
    if (e2 = e2 && n$2.call(u2.childNodes), !c2 && null != e2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(w2 = u2.attributes[a2]).name] = w2.value;
    for (a2 in b2) w2 = b2[a2], "dangerouslySetInnerHTML" == a2 ? v2 = w2 : "children" == a2 || a2 in k2 || "value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2 || F$1(u2, a2, null, w2, o2);
    for (a2 in k2) w2 = k2[a2], "children" == a2 ? y2 = w2 : "dangerouslySetInnerHTML" == a2 ? h2 = w2 : "value" == a2 ? _2 = w2 : "checked" == a2 ? m2 = w2 : c2 && "function" != typeof w2 || b2[a2] === w2 || F$1(u2, a2, w2, b2[a2], o2);
    if (h2) c2 || v2 && (h2.__html == v2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u2.innerHTML = ""), P("template" == t2.type ? u2.content : u2, d$1(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S$1(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g$2(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b2[a2]) && F$1(u2, a2, _2, b2[a2], o2), a2 = "checked", null != m2 && m2 != u2[a2] && F$1(u2, a2, m2, b2[a2], o2));
  }
  return u2;
}
function D(n2, u2, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, t2);
  }
}
function E(n2, u2, t2) {
  var i2, r2;
  if (l$3.unmount && l$3.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || D(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$3.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && E(i2[r2], u2, t2 || "function" != typeof n2.type);
  t2 || g$2(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function G(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function J(u2, t2, i2) {
  var r2, o2, e2, f2;
  t2 == document && (t2 = document.documentElement), l$3.__ && l$3.__(u2, t2), o2 = (r2 = false) ? null : t2.__k, e2 = [], f2 = [], z$1(t2, u2 = t2.__k = _$2(k$1, null, [u2]), o2 || p$3, p$3, t2.namespaceURI, o2 ? null : t2.firstChild ? n$2.call(t2.childNodes) : null, e2, o2 ? o2.__e : t2.firstChild, r2, f2), V(e2, u2, f2);
}
n$2 = v$2.slice, l$3 = { __e: function(n2, l2, u2, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u$2 = 0, t$3 = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, x$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w$3({}, this.state), "function" == typeof n2 && (n2 = n2(w$3({}, u2), this.props)), n2 && w$3(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), $(this));
}, x$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), $(this));
}, x$1.prototype.render = k$1, i$2 = [], o$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$3 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, I.__r = 0, f$1 = /(PointerCapture)$|Capture$/i, c$2 = 0, s$2 = O(false), a$2 = O(true);
var n$1 = function(t2, s2, r2, e2) {
  var u2;
  s2[0] = 0;
  for (var h2 = 1; h2 < s2.length; h2++) {
    var p2 = s2[h2++], a2 = s2[h2] ? (s2[0] |= p2 ? 1 : 2, r2[s2[h2++]]) : s2[++h2];
    3 === p2 ? e2[0] = a2 : 4 === p2 ? e2[1] = Object.assign(e2[1] || {}, a2) : 5 === p2 ? (e2[1] = e2[1] || {})[s2[++h2]] = a2 : 6 === p2 ? e2[1][s2[++h2]] += a2 + "" : p2 ? (u2 = t2.apply(a2, n$1(t2, a2, r2, ["", null])), e2.push(u2), a2[0] ? s2[0] |= 2 : (s2[h2 - 2] = 0, s2[h2] = u2)) : e2.push(a2);
  }
  return e2;
}, t$2 = /* @__PURE__ */ new Map();
function e$2(s2) {
  var r2 = t$2.get(this);
  return r2 || (r2 = /* @__PURE__ */ new Map(), t$2.set(this, r2)), (r2 = n$1(this, r2.get(s2) || (r2.set(s2, r2 = (function(n2) {
    for (var t2, s3, r3 = 1, e2 = "", u2 = "", h2 = [0], p2 = function(n3) {
      1 === r3 && (n3 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e2) : 3 === r3 && (n3 || e2) ? (h2.push(3, n3, e2), r3 = 2) : 2 === r3 && "..." === e2 && n3 ? h2.push(4, n3, 0) : 2 === r3 && e2 && !n3 ? h2.push(5, 0, true, e2) : r3 >= 5 && ((e2 || !n3 && 5 === r3) && (h2.push(r3, 0, e2, s3), r3 = 6), n3 && (h2.push(r3, n3, 0, s3), r3 = 6)), e2 = "";
    }, a2 = 0; a2 < n2.length; a2++) {
      a2 && (1 === r3 && p2(), p2(a2));
      for (var l2 = 0; l2 < n2[a2].length; l2++) t2 = n2[a2][l2], 1 === r3 ? "<" === t2 ? (p2(), h2 = [h2], r3 = 3) : e2 += t2 : 4 === r3 ? "--" === e2 && ">" === t2 ? (r3 = 1, e2 = "") : e2 = t2 + e2[0] : u2 ? t2 === u2 ? u2 = "" : e2 += t2 : '"' === t2 || "'" === t2 ? u2 = t2 : ">" === t2 ? (p2(), r3 = 1) : r3 && ("=" === t2 ? (r3 = 5, s3 = e2, e2 = "") : "/" === t2 && (r3 < 5 || ">" === n2[a2][l2 + 1]) ? (p2(), 3 === r3 && (h2 = h2[0]), r3 = h2, (h2 = h2[0]).push(2, 0, r3), r3 = 0) : " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2 ? (p2(), r3 = 2) : e2 += t2), 3 === r3 && "!--" === e2 && (r3 = 4, h2 = h2[0]);
    }
    return p2(), h2;
  })(s2)), r2), arguments, [])).length > 1 ? r2 : r2[0];
}
var m$2 = e$2.bind(_$2);
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
var t$1, r$1, u$1, i$1, o$1 = 0, f = [], c$1 = l$3, e$1 = c$1.__b, a$1 = c$1.__r, v$1 = c$1.diffed, l$2 = c$1.__c, m$1 = c$1.unmount, s$1 = c$1.__;
function p$2(n2, t2) {
  c$1.__h && c$1.__h(r$1, n2, o$1 || t2), o$1 = 0;
  var u2 = r$1.__H || (r$1.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function y$2(n2, u2) {
  var i2 = p$2(t$1++, 3);
  !c$1.__s && C(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r$1.__H.__h.push(i2));
}
function A(n2) {
  return o$1 = 5, T(function() {
    return { current: n2 };
  }, []);
}
function T(n2, r2) {
  var u2 = p$2(t$1++, 7);
  return C(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q$1(n2, t2) {
  return o$1 = 8, T(function() {
    return n2;
  }, t2);
}
function j() {
  for (var n2; n2 = f.shift(); ) {
    var t2 = n2.__H;
    if (n2.__P && t2) try {
      t2.__h.some(z), t2.__h.some(B), t2.__h = [];
    } catch (r2) {
      t2.__h = [], c$1.__e(r2, n2.__v);
    }
  }
}
c$1.__b = function(n2) {
  r$1 = null, e$1 && e$1(n2);
}, c$1.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s$1 && s$1(n2, t2);
}, c$1.__r = function(n2) {
  a$1 && a$1(n2), t$1 = 0;
  var i2 = (r$1 = n2.__c).__H;
  i2 && (u$1 === r$1 ? (i2.__h = [], r$1.__h = [], i2.__.some(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i2.__h.some(z), i2.__h.some(B), i2.__h = [], t$1 = 0)), u$1 = r$1;
}, c$1.diffed = function(n2) {
  v$1 && v$1(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i$1 === c$1.requestAnimationFrame || ((i$1 = c$1.requestAnimationFrame) || w$2)(j)), t2.__H.__.some(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u$1 = r$1 = null;
}, c$1.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.some(z), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c$1.__e(r2, n3.__v);
    }
  }), l$2 && l$2(n2, t2);
}, c$1.unmount = function(n2) {
  m$1 && m$1(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.some(function(n3) {
    try {
      z(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c$1.__e(t2, r2.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w$2(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 35);
  k && (t2 = requestAnimationFrame(r2));
}
function z(n2) {
  var t2 = r$1, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r$1 = t2;
}
function B(n2) {
  var t2 = r$1;
  n2.__c = n2.__(), r$1 = t2;
}
function C(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
var i = /* @__PURE__ */ Symbol.for("preact-signals");
function t() {
  if (!(s > 1)) {
    var i2, t2 = false;
    while (void 0 !== h$1) {
      var n2 = h$1;
      h$1 = void 0;
      v++;
      while (void 0 !== n2) {
        var r2 = n2.o;
        n2.o = void 0;
        n2.f &= -3;
        if (!(8 & n2.f) && a(n2)) try {
          n2.c();
        } catch (n3) {
          if (!t2) {
            i2 = n3;
            t2 = true;
          }
        }
        n2 = r2;
      }
    }
    v = 0;
    s--;
    if (t2) throw i2;
  } else s--;
}
function n(i2) {
  if (s > 0) return i2();
  s++;
  try {
    return i2();
  } finally {
    t();
  }
}
var r = void 0;
function o(i2) {
  var t2 = r;
  r = void 0;
  try {
    return i2();
  } finally {
    r = t2;
  }
}
var h$1 = void 0, s = 0, v = 0, u = 0;
function e(i2) {
  if (void 0 !== r) {
    var t2 = i2.n;
    if (void 0 === t2 || t2.t !== r) {
      t2 = { i: 0, S: i2, p: r.s, n: void 0, t: r, e: void 0, x: void 0, r: t2 };
      if (void 0 !== r.s) r.s.n = t2;
      r.s = t2;
      i2.n = t2;
      if (32 & r.f) i2.S(t2);
      return t2;
    } else if (-1 === t2.i) {
      t2.i = 0;
      if (void 0 !== t2.n) {
        t2.n.p = t2.p;
        if (void 0 !== t2.p) t2.p.n = t2.n;
        t2.p = r.s;
        t2.n = void 0;
        r.s.n = t2;
        r.s = t2;
      }
      return t2;
    }
  }
}
function d(i2, t2) {
  this.v = i2;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.W = null == t2 ? void 0 : t2.watched;
  this.Z = null == t2 ? void 0 : t2.unwatched;
  this.name = null == t2 ? void 0 : t2.name;
}
d.prototype.brand = i;
d.prototype.h = function() {
  return true;
};
d.prototype.S = function(i2) {
  var t2 = this, n2 = this.t;
  if (n2 !== i2 && void 0 === i2.e) {
    i2.x = n2;
    this.t = i2;
    if (void 0 !== n2) n2.e = i2;
    else o(function() {
      var i3;
      null == (i3 = t2.W) || i3.call(t2);
    });
  }
};
d.prototype.U = function(i2) {
  var t2 = this;
  if (void 0 !== this.t) {
    var n2 = i2.e, r2 = i2.x;
    if (void 0 !== n2) {
      n2.x = r2;
      i2.e = void 0;
    }
    if (void 0 !== r2) {
      r2.e = n2;
      i2.x = void 0;
    }
    if (i2 === this.t) {
      this.t = r2;
      if (void 0 === r2) o(function() {
        var i3;
        null == (i3 = t2.Z) || i3.call(t2);
      });
    }
  }
};
d.prototype.subscribe = function(i2) {
  var t2 = this;
  return m(function() {
    var n2 = t2.value, o2 = r;
    r = void 0;
    try {
      i2(n2);
    } finally {
      r = o2;
    }
  }, { name: "sub" });
};
d.prototype.valueOf = function() {
  return this.value;
};
d.prototype.toString = function() {
  return this.value + "";
};
d.prototype.toJSON = function() {
  return this.value;
};
d.prototype.peek = function() {
  var i2 = r;
  r = void 0;
  try {
    return this.value;
  } finally {
    r = i2;
  }
};
Object.defineProperty(d.prototype, "value", { get: function() {
  var i2 = e(this);
  if (void 0 !== i2) i2.i = this.i;
  return this.v;
}, set: function(i2) {
  if (i2 !== this.v) {
    if (v > 100) throw new Error("Cycle detected");
    this.v = i2;
    this.i++;
    u++;
    s++;
    try {
      for (var n2 = this.t; void 0 !== n2; n2 = n2.x) n2.t.N();
    } finally {
      t();
    }
  }
} });
function c(i2, t2) {
  return new d(i2, t2);
}
function a(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n) if (t2.S.i !== t2.i || !t2.S.h() || t2.S.i !== t2.i) return true;
  return false;
}
function l$1(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n) {
    var n2 = t2.S.n;
    if (void 0 !== n2) t2.r = n2;
    t2.S.n = t2;
    t2.i = -1;
    if (void 0 === t2.n) {
      i2.s = t2;
      break;
    }
  }
}
function y$1(i2) {
  var t2 = i2.s, n2 = void 0;
  while (void 0 !== t2) {
    var r2 = t2.p;
    if (-1 === t2.i) {
      t2.S.U(t2);
      if (void 0 !== r2) r2.n = t2.n;
      if (void 0 !== t2.n) t2.n.p = r2;
    } else n2 = t2;
    t2.S.n = t2.r;
    if (void 0 !== t2.r) t2.r = void 0;
    t2 = r2;
  }
  i2.s = n2;
}
function w$1(i2, t2) {
  d.call(this, void 0);
  this.x = i2;
  this.s = void 0;
  this.g = u - 1;
  this.f = 4;
  this.W = null == t2 ? void 0 : t2.watched;
  this.Z = null == t2 ? void 0 : t2.unwatched;
  this.name = null == t2 ? void 0 : t2.name;
}
w$1.prototype = new d();
w$1.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === u) return true;
  this.g = u;
  this.f |= 1;
  if (this.i > 0 && !a(this)) {
    this.f &= -2;
    return true;
  }
  var i2 = r;
  try {
    l$1(this);
    r = this;
    var t2 = this.x();
    if (16 & this.f || this.v !== t2 || 0 === this.i) {
      this.v = t2;
      this.f &= -17;
      this.i++;
    }
  } catch (i3) {
    this.v = i3;
    this.f |= 16;
    this.i++;
  }
  r = i2;
  y$1(this);
  this.f &= -2;
  return true;
};
w$1.prototype.S = function(i2) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t2 = this.s; void 0 !== t2; t2 = t2.n) t2.S.S(t2);
  }
  d.prototype.S.call(this, i2);
};
w$1.prototype.U = function(i2) {
  if (void 0 !== this.t) {
    d.prototype.U.call(this, i2);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t2 = this.s; void 0 !== t2; t2 = t2.n) t2.S.U(t2);
    }
  }
};
w$1.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i2 = this.t; void 0 !== i2; i2 = i2.x) i2.t.N();
  }
};
Object.defineProperty(w$1.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var i2 = e(this);
  this.h();
  if (void 0 !== i2) i2.i = this.i;
  if (16 & this.f) throw this.v;
  return this.v;
} });
function b$1(i2, t2) {
  return new w$1(i2, t2);
}
function _$1(i2) {
  var n2 = i2.u;
  i2.u = void 0;
  if ("function" == typeof n2) {
    s++;
    var o2 = r;
    r = void 0;
    try {
      n2();
    } catch (t2) {
      i2.f &= -2;
      i2.f |= 8;
      p$1(i2);
      throw t2;
    } finally {
      r = o2;
      t();
    }
  }
}
function p$1(i2) {
  for (var t2 = i2.s; void 0 !== t2; t2 = t2.n) t2.S.U(t2);
  i2.x = void 0;
  i2.s = void 0;
  _$1(i2);
}
function g$1(i2) {
  if (r !== this) throw new Error("Out-of-order effect");
  y$1(this);
  r = i2;
  this.f &= -2;
  if (8 & this.f) p$1(this);
  t();
}
function S(i2, t2) {
  this.x = i2;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
  this.name = null == t2 ? void 0 : t2.name;
}
S.prototype.c = function() {
  var i2 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t2 = this.x();
    if ("function" == typeof t2) this.u = t2;
  } finally {
    i2();
  }
};
S.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _$1(this);
  l$1(this);
  s++;
  var i2 = r;
  r = this;
  return g$1.bind(this, i2);
};
S.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h$1;
    h$1 = this;
  }
};
S.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) p$1(this);
};
S.prototype.dispose = function() {
  this.d();
};
function m(i2, t2) {
  var n2 = new S(i2, t2);
  try {
    n2.c();
  } catch (i3) {
    n2.d();
    throw i3;
  }
  var r2 = n2.d.bind(n2);
  r2[Symbol.dispose] = r2;
  return r2;
}
var l, h, p = "undefined" != typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__, _ = [];
m(function() {
  l = this.N;
})();
function g(i2, r2) {
  l$3[i2] = r2.bind(null, l$3[i2] || function() {
  });
}
function b(i2) {
  if (h) {
    var n2 = h;
    h = void 0;
    n2();
  }
  h = i2 && i2.S();
}
function y(i2) {
  var n2 = this, t2 = i2.data, f2 = useSignal(t2);
  f2.value = t2;
  var e2 = T(function() {
    var i3 = n2, t3 = n2.__v;
    while (t3 = t3.__) if (t3.__c) {
      t3.__c.__$f |= 4;
      break;
    }
    var o2 = b$1(function() {
      var i4 = f2.value.value;
      return 0 === i4 ? 0 : true === i4 ? "" : i4 || "";
    }), e3 = b$1(function() {
      return !Array.isArray(o2.value) && !t$3(o2.value);
    }), a3 = m(function() {
      this.N = F;
      if (e3.value) {
        var n3 = o2.value;
        if (i3.__v && i3.__v.__e && 3 === i3.__v.__e.nodeType) i3.__v.__e.data = n3;
      }
    }), v3 = n2.__$u.d;
    n2.__$u.d = function() {
      a3();
      v3.call(this);
    };
    return [e3, o2];
  }, []), a2 = e2[0], v2 = e2[1];
  return a2.value ? v2.peek() : v2.value;
}
y.displayName = "ReactiveTextNode";
Object.defineProperties(d.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: y }, props: { configurable: true, get: function() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
g("__b", function(i2, n2) {
  if ("string" == typeof n2.type) {
    var r2, t2 = n2.props;
    for (var o2 in t2) if ("children" !== o2) {
      var f2 = t2[o2];
      if (f2 instanceof d) {
        if (!r2) n2.__np = r2 = {};
        r2[o2] = f2;
        t2[o2] = f2.peek();
      }
    }
  }
  i2(n2);
});
g("__r", function(i2, n2) {
  i2(n2);
  if (n2.type !== k$1) {
    b();
    var r2, o2 = n2.__c;
    if (o2) {
      o2.__$f &= -2;
      if (void 0 === (r2 = o2.__$u)) o2.__$u = r2 = (function(i3, n3) {
        var r3;
        m(function() {
          r3 = this;
        }, { name: n3 });
        r3.c = i3;
        return r3;
      })(function() {
        var i3;
        if (p) null == (i3 = r2.y) || i3.call(r2);
        o2.__$f |= 1;
        o2.setState({});
      }, "function" == typeof n2.type ? n2.type.displayName || n2.type.name : "");
    }
    b(r2);
  }
});
g("__e", function(i2, n2, r2, t2) {
  b();
  i2(n2, r2, t2);
});
g("diffed", function(i2, n2) {
  b();
  var r2;
  if ("string" == typeof n2.type && (r2 = n2.__e)) {
    var t2 = n2.__np, o2 = n2.props;
    if (t2) {
      var f2 = r2.U;
      if (f2) for (var e2 in f2) {
        var u2 = f2[e2];
        if (void 0 !== u2 && !(e2 in t2)) {
          u2.d();
          f2[e2] = void 0;
        }
      }
      else {
        f2 = {};
        r2.U = f2;
      }
      for (var a2 in t2) {
        var c2 = f2[a2], v2 = t2[a2];
        if (void 0 === c2) {
          c2 = w(r2, a2, v2);
          f2[a2] = c2;
        } else c2.o(v2, o2);
      }
      for (var s2 in t2) o2[s2] = t2[s2];
    }
  }
  i2(n2);
});
function w(i2, n2, r2, t2) {
  var o2 = n2 in i2 && void 0 === i2.ownerSVGElement, f2 = c(r2), e2 = r2.peek();
  return { o: function(i3, n3) {
    f2.value = i3;
    e2 = i3.peek();
  }, d: m(function() {
    this.N = F;
    var r3 = f2.value.value;
    if (e2 !== r3) {
      e2 = void 0;
      if (o2) i2[n2] = r3;
      else if (null != r3 && (false !== r3 || "-" === n2[4])) i2.setAttribute(n2, r3);
      else i2.removeAttribute(n2);
    } else e2 = void 0;
  }) };
}
g("unmount", function(i2, n2) {
  if ("string" == typeof n2.type) {
    var r2 = n2.__e;
    if (r2) {
      var t2 = r2.U;
      if (t2) {
        r2.U = void 0;
        for (var o2 in t2) {
          var f2 = t2[o2];
          if (f2) f2.d();
        }
      }
    }
    n2.__np = void 0;
  } else {
    var e2 = n2.__c;
    if (e2) {
      var u2 = e2.__$u;
      if (u2) {
        e2.__$u = void 0;
        u2.d();
      }
    }
  }
  i2(n2);
});
g("__h", function(i2, n2, r2, t2) {
  if (t2 < 3 || 9 === t2) n2.__$f |= 2;
  i2(n2, r2, t2);
});
x$1.prototype.shouldComponentUpdate = function(i2, n2) {
  if (this.__R) return true;
  var r2 = this.__$u, t2 = r2 && void 0 !== r2.s;
  for (var o2 in n2) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    var f2 = 2 & this.__$f;
    if (!(t2 || f2 || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(t2 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var e2 in i2) if ("__source" !== e2 && i2[e2] !== this.props[e2]) return true;
  for (var u2 in this.props) if (!(u2 in i2)) return true;
  return false;
};
function useSignal(i2, n2) {
  return T(function() {
    return c(i2, n2);
  }, []);
}
var q = function(i2) {
  queueMicrotask(function() {
    queueMicrotask(i2);
  });
};
function x() {
  n(function() {
    var i2;
    while (i2 = _.shift()) l.call(i2);
  });
}
function F() {
  if (1 === _.push(this)) (l$3.requestAnimationFrame || q)(x);
}
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
      const b2 = fromObject(value);
      if (b2) return b2;
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
    Buffer2.isBuffer = function isBuffer(b2) {
      return b2 != null && b2._isBuffer === true && b2 !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a2, b2) {
      if (isInstance(a2, Uint8Array)) a2 = Buffer2.from(a2, a2.offset, a2.byteLength);
      if (isInstance(b2, Uint8Array)) b2 = Buffer2.from(b2, b2.offset, b2.byteLength);
      if (!Buffer2.isBuffer(a2) || !Buffer2.isBuffer(b2)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a2 === b2) return 0;
      let x2 = a2.length;
      let y2 = b2.length;
      for (let i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
        if (a2[i2] !== b2[i2]) {
          x2 = a2[i2];
          y2 = b2[i2];
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
    function swap(b2, n2, m2) {
      const i2 = b2[n2];
      b2[n2] = b2[m2];
      b2[m2] = i2;
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
    Buffer2.prototype.equals = function equals(b2) {
      if (!Buffer2.isBuffer(b2)) throw new TypeError("Argument must be a Buffer");
      if (this === b2) return true;
      return Buffer2.compare(this, b2) === 0;
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
  _name;
  _id;
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
const CreateForm = function CreateForm2({ onCreated }) {
  const key = useSignal("my-doc");
  const body = useSignal("");
  const prevHash = useSignal("");
  const submit = q$1(async (ev) => {
    ev.preventDefault();
    const meta = { key: key.value };
    if (prevHash.value.trim()) {
      meta.prev = prevHash.value.split(",").map((s2) => s2.trim()).filter(Boolean);
    }
    await forkdb.put(meta, body.value);
    body.value = "";
    prevHash.value = "";
    await onCreated();
  }, [onCreated]);
  return m$2`
        <form class="create-form" onSubmit=${submit}>
            <h2>Add a node</h2>

            <label>
                <span>Key</span>
                <input
                    type="text"
                    name="key"
                    value=${key.value}
                    onInput=${(e2) => {
    key.value = e2.target.value;
  }}
                    required
                />
            </label>

            <label>
                <span>Body</span>
                <textarea
                    value=${body.value}
                    rows=${3}
                    onInput=${(e2) => {
    body.value = e2.target.value;
  }}
                />
            </label>

            <label>
                <span>Prev hash(es)</span>
                <input
                    type="text"
                    value=${prevHash.value}
                    placeholder="comma-separated hashes"
                    onInput=${(e2) => {
    prevHash.value = e2.target.value;
  }}
                />
            </label>

            <substrate-button class="create-submit" type="submit">
                Create
            </substrate-button>
        </form>
    `;
};
const NodeCard = function NodeCard2(props) {
  const { node, onSelect } = props;
  const prev = node.meta.prev ?? [];
  return m$2`
        <article class="node-card">
            <header>
                <span class="node-key">${node.meta.key}</span>
                <code class="node-hash" title=${node.hash}>${node.hash}</code>
            </header>

            ${node.body ? m$2`<p class="node-body">${node.body}</p>` : null}

            ${prev.length > 0 && m$2`
                <div class="node-links">
                    <span class="link-label">prev</span>
                    ${prev.map((h2) => m$2`
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

            ${node.forwardLinks.length > 0 && m$2`
                <div class="node-links">
                    <span class="link-label">next</span>
                    ${node.forwardLinks.map((l2) => m$2`
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
};
const HistoryPanel = function HistoryPanel2({ hash, onSelect }) {
  const history = useSignal([]);
  y$2(() => {
    let cancelled = false;
    forkdb.history(hash).then((entries) => {
      if (cancelled) return;
      history.value = entries;
    }).catch(() => {
      if (cancelled) return;
      history.value = [];
    });
    return () => {
      cancelled = true;
    };
  }, [hash]);
  if (history.value.length === 0) return null;
  return m$2`
        <aside class="history-panel">
            <h3>History from ${hash}</h3>
            <ol>
                ${history.value.map((entry) => m$2`
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
};
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
  const sortedNodes = [...nodes].sort((a2, b2) => {
    const depthDiff = getDepth(a2.hash) - getDepth(b2.hash);
    if (depthDiff !== 0) return depthDiff;
    return a2.hash.localeCompare(b2.hash);
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
const MerkleDag = function MerkleDag2({ nodes, selectedHash, onSelect }) {
  const dag = buildDag(nodes);
  const scrollRef = A(null);
  y$2(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [dag.points.length]);
  const pointMap = /* @__PURE__ */ new Map();
  dag.points.forEach((point) => pointMap.set(point.hash, point));
  return m$2`
        <section class="dag-section">
            <h2>Merkle DAG</h2>

            ${dag.points.length === 0 ? m$2`<p class="empty-state">-</p>` : m$2`
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
    return m$2`
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

                            ${dag.points.map((point) => {
    const label = point.hash.slice(0, 4);
    const key = point.key;
    const keyBgWidth = Math.max(48, key.length * 12);
    return m$2`
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
                                            ${label}
                                        </text>
                                        <rect
                                            class="dag-node-key-bg"
                                            x=${point.x - keyBgWidth / 2}
                                            y=${point.y + 40}
                                            width=${keyBgWidth}
                                            height=${24}
                                        />
                                        <text
                                            class="dag-node-key"
                                            x=${point.x}
                                            y=${point.y + 56}
                                            dominant-baseline="middle"
                                            text-anchor="middle"
                                        >
                                            ${key}
                                        </text>
                                    </g>
                                `;
  })}
                        </svg>
                    </div>
                `}

            ${selectedHash && m$2`
                <p class="dag-selected">
                    Selected node: <code>${selectedHash}</code>
                </p>
            `}
        </section>
    `;
};
const App = function App2() {
  const nodes = useSignal([]);
  const selectedHash = useSignal(null);
  const headMap = useSignal({});
  const selectHash = q$1((hash) => {
    selectedHash.value = hash;
  }, []);
  const refresh = q$1(async () => {
    const allNodes = await forkdb.list();
    const detailed = await Promise.all(
      allNodes.map(async (node) => {
        const [body, forwardLinks] = await Promise.all([
          forkdb.getBody(node.hash).catch(() => ""),
          forkdb.links(node.hash)
        ]);
        return { ...node, body, forwardLinks };
      })
    );
    nodes.value = detailed;
    const keys = await forkdb.keys();
    const hm = {};
    for (const key of keys) {
      hm[key] = await forkdb.heads(key);
    }
    headMap.value = hm;
  }, []);
  y$2(() => {
    forkdb.open().then(refresh).catch(() => void 0);
  }, [refresh]);
  const handleReset = q$1(async () => {
    await forkdb.destroy();
    window.location.reload();
  }, []);
  return m$2`
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
                <${CreateForm} onCreated=${refresh} />

                <${MerkleDag}
                    nodes=${nodes.value}
                    selectedHash=${selectedHash.value}
                    onSelect=${selectHash}
                />

                <section class="heads-panel">
                    <section class="heads-section">
                        <h2>Heads</h2>
                        ${Object.keys(headMap.value).length === 0 && m$2`
                            <p class="empty-state">No heads yet.</p>
                        `}
                        ${Object.entries(headMap.value).map(([key, hashes]) => m$2`
                            <div class="heads-row" key=${key}>
                                <span class="node-key">${key}</span>
                                ${hashes.map((hash) => m$2`
                                    <${SubstrateButton.TAG}
                                        key=${hash}
                                        class="hash-link head-hash"
                                        onClick=${() => selectHash(hash)}
                                    >
                                        ${hash}
                                    <//>
                                `)}
                            </div>
                        `)}
                    </section>
                </section>

                <section class="nodes-panel">
                    <section class="nodes-section">
                        <h2>All nodes</h2>
                        ${nodes.value.length === 0 && m$2`
                            <p class="empty-state">
                                No documents yet. Create one above.
                            </p>
                        `}
                        ${nodes.value.map((node) => m$2`
                            <${NodeCard}
                                key=${node.hash}
                                node=${node}
                                onSelect=${selectHash}
                            />
                        `)}
                    </section>

                    ${selectedHash.value && m$2`
                        <${HistoryPanel}
                            hash=${selectedHash.value}
                            onSelect=${selectHash}
                        />
                    `}
                </section>
            </div>
        </div>
    `;
};
J(m$2`<${App} />`, document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtQzhiQzlGdEMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2h0bS9kaXN0L2h0bS5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaHRtL3ByZWFjdC9pbmRleC5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vYnV0dG9uL2Rpc3QvaHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50L2Rpc3QvYXR0cmlidXRlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50L2Rpc3QvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Vic3RyYXRlLXN5c3RlbS93ZWItY29tcG9uZW50L2Rpc3QvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHN1YnN0cmF0ZS1zeXN0ZW0vYnV0dG9uL2Rpc3QvY2xpZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbi9kaXN0L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AcHJlYWN0L3NpZ25hbHMtY29yZS9kaXN0L3NpZ25hbHMtY29yZS5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQHByZWFjdC9zaWduYWxzL2Rpc3Qvc2lnbmFscy5tb2R1bGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtc3VwcG9ydHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbW9kdWxlLWVycm9yL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sZXZlbC10cmFuc2NvZGVyL2xpYi90ZXh0LWVuZGVjLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvbGliL2VuY29kaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvbGliL2Zvcm1hdHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbGV2ZWwtdHJhbnNjb2Rlci9saWIvZW5jb2RpbmdzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xldmVsLXRyYW5zY29kZXIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9tYXliZS1jb21iaW5lLWVycm9ycy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvY29tbW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9lcnJvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvYWJzdHJhY3QtaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2RlZmF1bHQta3YtaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2RlZmVycmVkLWl0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9wcmVmaXhlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvcHJld3JpdGUtYmF0Y2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvYWJzdHJhY3QtY2hhaW5lZC1iYXRjaC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZGVmYXVsdC1jaGFpbmVkLWJhdGNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9ob29rcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZXZlbnQtbW9uaXRvci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9saWIvZGVmZXJyZWQtcXVldWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL3JhbmdlLW9wdGlvbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWwvbGliL2Fic3RyYWN0LXN1YmxldmVsLWl0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsL2xpYi9hYnN0cmFjdC1zdWJsZXZlbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9hYnN0cmFjdC1sZXZlbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbC9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLWxldmVsL3V0aWwva2V5LXJhbmdlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvdXRpbC9kZXNlcmlhbGl6ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLWxldmVsL2l0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbGV2ZWwvdXRpbC9jbGVhci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLWxldmVsL2luZGV4LmpzIiwiLi4vLi4vc3JjL2Jyb3dzZXIudHMiLCIuLi8uLi9leGFtcGxlL2RiLnRzIiwiLi4vLi4vZXhhbXBsZS9jb21wb25lbnRzL2NyZWF0ZS1mb3JtLnRzIiwiLi4vLi4vZXhhbXBsZS9jb21wb25lbnRzL25vZGUtY2FyZC50cyIsIi4uLy4uL2V4YW1wbGUvY29tcG9uZW50cy9oaXN0b3J5LXBhbmVsLnRzIiwiLi4vLi4vZXhhbXBsZS9jb21wb25lbnRzL21lcmtsZS1kYWcudHMiLCIuLi8uLi9leGFtcGxlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSx0LGkscixvLGUsZixjLHMsYSxoLHA9e30sdj1bXSx5PS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2ksZD1BcnJheS5pc0FycmF5O2Z1bmN0aW9uIHcobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gZyhuKXtuJiZuLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBfKGwsdSx0KXt2YXIgaSxyLG8sZT17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/aT11W29dOlwicmVmXCI9PW8/cj11W29dOmVbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWVbb10mJihlW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4gbShsLGUsaSxyLG51bGwpfWZ1bmN0aW9uIG0obix0LGkscixvKXt2YXIgZT17dHlwZTpuLHByb3BzOnQsa2V5OmkscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om8sX19pOi0xLF9fdTowfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShlKSxlfWZ1bmN0aW9uIGIoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBrKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHgobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gUyhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/UyhuLl9fLG4uX19pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/UyhuKTpudWxsfWZ1bmN0aW9uIEMobil7aWYobi5fX1AmJm4uX19kKXt2YXIgdT1uLl9fdix0PXUuX19lLGk9W10scj1bXSxvPXcoe30sdSk7by5fX3Y9dS5fX3YrMSxsLnZub2RlJiZsLnZub2RlKG8pLHoobi5fX1Asbyx1LG4uX19uLG4uX19QLm5hbWVzcGFjZVVSSSwzMiZ1Ll9fdT9bdF06bnVsbCxpLG51bGw9PXQ/Uyh1KTp0LCEhKDMyJnUuX191KSxyKSxvLl9fdj11Ll9fdixvLl9fLl9fa1tvLl9faV09byxWKGksbyxyKSx1Ll9fZT11Ll9fPW51bGwsby5fX2UhPXQmJk0obyl9fWZ1bmN0aW9uIE0obil7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXJldHVybiBuLl9fZT1uLl9fYy5iYXNlPW51bGwsbi5fX2suc29tZShmdW5jdGlvbihsKXtpZihudWxsIT1sJiZudWxsIT1sLl9fZSlyZXR1cm4gbi5fX2U9bi5fX2MuYmFzZT1sLl9fZX0pLE0obil9ZnVuY3Rpb24gJChuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZpLnB1c2gobikmJiFJLl9fcisrfHxyIT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShJKX1mdW5jdGlvbiBJKCl7Zm9yKHZhciBuLGw9MTtpLmxlbmd0aDspaS5sZW5ndGg+bCYmaS5zb3J0KGUpLG49aS5zaGlmdCgpLGw9aS5sZW5ndGgsQyhuKTtJLl9fcj0wfWZ1bmN0aW9uIFAobixsLHUsdCxpLHIsbyxlLGYsYyxzKXt2YXIgYSxoLHksZCx3LGcsXyxtPXQmJnQuX19rfHx2LGI9bC5sZW5ndGg7Zm9yKGY9QSh1LGwsbSxmLGIpLGE9MDthPGI7YSsrKW51bGwhPSh5PXUuX19rW2FdKSYmKGg9LTEhPXkuX19pJiZtW3kuX19pXXx8cCx5Ll9faT1hLGc9eihuLHksaCxpLHIsbyxlLGYsYyxzKSxkPXkuX19lLHkucmVmJiZoLnJlZiE9eS5yZWYmJihoLnJlZiYmRChoLnJlZixudWxsLHkpLHMucHVzaCh5LnJlZix5Ll9fY3x8ZCx5KSksbnVsbD09dyYmbnVsbCE9ZCYmKHc9ZCksKF89ISEoNCZ5Ll9fdSkpfHxoLl9faz09PXkuX19rP2Y9SCh5LGYsbixfKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB5LnR5cGUmJnZvaWQgMCE9PWc/Zj1nOmQmJihmPWQubmV4dFNpYmxpbmcpLHkuX191Jj0tNyk7cmV0dXJuIHUuX19lPXcsZn1mdW5jdGlvbiBBKG4sbCx1LHQsaSl7dmFyIHIsbyxlLGYsYyxzPXUubGVuZ3RoLGE9cyxoPTA7Zm9yKG4uX19rPW5ldyBBcnJheShpKSxyPTA7cjxpO3IrKyludWxsIT0obz1sW3JdKSYmXCJib29sZWFuXCIhPXR5cGVvZiBvJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvPyhcInN0cmluZ1wiPT10eXBlb2Ygb3x8XCJudW1iZXJcIj09dHlwZW9mIG98fFwiYmlnaW50XCI9PXR5cGVvZiBvfHxvLmNvbnN0cnVjdG9yPT1TdHJpbmc/bz1uLl9fa1tyXT1tKG51bGwsbyxudWxsLG51bGwsbnVsbCk6ZChvKT9vPW4uX19rW3JdPW0oayx7Y2hpbGRyZW46b30sbnVsbCxudWxsLG51bGwpOnZvaWQgMD09PW8uY29uc3RydWN0b3ImJm8uX19iPjA/bz1uLl9fa1tyXT1tKG8udHlwZSxvLnByb3BzLG8ua2V5LG8ucmVmP28ucmVmOm51bGwsby5fX3YpOm4uX19rW3JdPW8sZj1yK2gsby5fXz1uLG8uX19iPW4uX19iKzEsZT1udWxsLC0xIT0oYz1vLl9faT1UKG8sdSxmLGEpKSYmKGEtLSwoZT11W2NdKSYmKGUuX191fD0yKSksbnVsbD09ZXx8bnVsbD09ZS5fX3Y/KC0xPT1jJiYoaT5zP2gtLTppPHMmJmgrKyksXCJmdW5jdGlvblwiIT10eXBlb2Ygby50eXBlJiYoby5fX3V8PTQpKTpjIT1mJiYoYz09Zi0xP2gtLTpjPT1mKzE/aCsrOihjPmY/aC0tOmgrKyxvLl9fdXw9NCkpKTpuLl9fa1tyXT1udWxsO2lmKGEpZm9yKHI9MDtyPHM7cisrKW51bGwhPShlPXVbcl0pJiYwPT0oMiZlLl9fdSkmJihlLl9fZT09dCYmKHQ9UyhlKSksRShlLGUpKTtyZXR1cm4gdH1mdW5jdGlvbiBIKG4sbCx1LHQpe3ZhciBpLHI7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlKXtmb3IoaT1uLl9fayxyPTA7aSYmcjxpLmxlbmd0aDtyKyspaVtyXSYmKGlbcl0uX189bixsPUgoaVtyXSxsLHUsdCkpO3JldHVybiBsfW4uX19lIT1sJiYodCYmKGwmJm4udHlwZSYmIWwucGFyZW50Tm9kZSYmKGw9UyhuKSksdS5pbnNlcnRCZWZvcmUobi5fX2UsbHx8bnVsbCkpLGw9bi5fX2UpO2Rve2w9bCYmbC5uZXh0U2libGluZ313aGlsZShudWxsIT1sJiY4PT1sLm5vZGVUeXBlKTtyZXR1cm4gbH1mdW5jdGlvbiBMKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoZChuKT9uLnNvbWUoZnVuY3Rpb24obil7TChuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFQobixsLHUsdCl7dmFyIGkscixvLGU9bi5rZXksZj1uLnR5cGUsYz1sW3VdLHM9bnVsbCE9YyYmMD09KDImYy5fX3UpO2lmKG51bGw9PT1jJiZudWxsPT1lfHxzJiZlPT1jLmtleSYmZj09Yy50eXBlKXJldHVybiB1O2lmKHQ+KHM/MTowKSlmb3IoaT11LTEscj11KzE7aT49MHx8cjxsLmxlbmd0aDspaWYobnVsbCE9KGM9bFtvPWk+PTA/aS0tOnIrK10pJiYwPT0oMiZjLl9fdSkmJmU9PWMua2V5JiZmPT1jLnR5cGUpcmV0dXJuIG87cmV0dXJuLTF9ZnVuY3Rpb24gaihuLGwsdSl7XCItXCI9PWxbMF0/bi5zZXRQcm9wZXJ0eShsLG51bGw9PXU/XCJcIjp1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8eS50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gRihuLGwsdSx0LGkpe3ZhciByLG87bjppZihcInN0eWxlXCI9PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG4uc3R5bGUuY3NzVGV4dD10PVwiXCIpLHQpZm9yKGwgaW4gdCl1JiZsIGluIHV8fGoobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSl0JiZ1W2xdPT10W2xdfHxqKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT1sWzBdJiZcIm5cIj09bFsxXSlyPWwhPShsPWwucmVwbGFjZShmLFwiJDFcIikpLG89bC50b0xvd2VyQ2FzZSgpLGw9byBpbiBufHxcIm9uRm9jdXNPdXRcIj09bHx8XCJvbkZvY3VzSW5cIj09bD9vLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/dD91LnU9dC51Oih1LnU9YyxuLmFkZEV2ZW50TGlzdGVuZXIobCxyP2E6cyxyKSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj9hOnMscik7ZWxzZXtpZihcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PWkpbD1sLnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcIndpZHRoXCIhPWwmJlwiaGVpZ2h0XCIhPWwmJlwiaHJlZlwiIT1sJiZcImxpc3RcIiE9bCYmXCJmb3JtXCIhPWwmJlwidGFiSW5kZXhcIiE9bCYmXCJkb3dubG9hZFwiIT1sJiZcInJvd1NwYW5cIiE9bCYmXCJjb2xTcGFuXCIhPWwmJlwicm9sZVwiIT1sJiZcInBvcG92ZXJcIiE9bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJlwiLVwiIT1sWzRdP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsXCJwb3BvdmVyXCI9PWwmJjE9PXU/XCJcIjp1KSl9fWZ1bmN0aW9uIE8obil7cmV0dXJuIGZ1bmN0aW9uKHUpe2lmKHRoaXMubCl7dmFyIHQ9dGhpcy5sW3UudHlwZStuXTtpZihudWxsPT11LnQpdS50PWMrKztlbHNlIGlmKHUudDx0LnUpcmV0dXJuO3JldHVybiB0KGwuZXZlbnQ/bC5ldmVudCh1KTp1KX19fWZ1bmN0aW9uIHoobix1LHQsaSxyLG8sZSxmLGMscyl7dmFyIGEsaCxwLHksXyxtLGIsUyxDLE0sJCxJLEEsSCxMLFQ9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7MTI4JnQuX191JiYoYz0hISgzMiZ0Ll9fdSksbz1bZj11Ll9fZT10Ll9fZV0pLChhPWwuX19iKSYmYSh1KTtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFQpdHJ5e2lmKFM9dS5wcm9wcyxDPVwicHJvdG90eXBlXCJpbiBUJiZULnByb3RvdHlwZS5yZW5kZXIsTT0oYT1ULmNvbnRleHRUeXBlKSYmaVthLl9fY10sJD1hP00/TS5wcm9wcy52YWx1ZTphLl9fOmksdC5fX2M/Yj0oaD11Ll9fYz10Ll9fYykuX189aC5fX0U6KEM/dS5fX2M9aD1uZXcgVChTLCQpOih1Ll9fYz1oPW5ldyB4KFMsJCksaC5jb25zdHJ1Y3Rvcj1ULGgucmVuZGVyPUcpLE0mJk0uc3ViKGgpLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLl9fbj1pLHA9aC5fX2Q9ITAsaC5fX2g9W10saC5fc2I9W10pLEMmJm51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksQyYmbnVsbCE9VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPXcoe30saC5fX3MpKSx3KGguX19zLFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKFMsaC5fX3MpKSkseT1oLnByb3BzLF89aC5zdGF0ZSxoLl9fdj11LHApQyYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLEMmJm51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihDJiZudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmUyE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKFMsJCksdS5fX3Y9PXQuX192fHwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKFMsaC5fX3MsJCkpe3UuX192IT10Ll9fdiYmKGgucHJvcHM9UyxoLnN0YXRlPWguX19zLGguX19kPSExKSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayx1Ll9fay5zb21lKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksdi5wdXNoLmFwcGx5KGguX19oLGguX3NiKSxoLl9zYj1bXSxoLl9faC5sZW5ndGgmJmUucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKFMsaC5fX3MsJCksQyYmbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LF8sbSl9KX1pZihoLmNvbnRleHQ9JCxoLnByb3BzPVMsaC5fX1A9bixoLl9fZT0hMSxJPWwuX19yLEE9MCxDKWguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsSSYmSSh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLHYucHVzaC5hcHBseShoLl9faCxoLl9zYiksaC5fc2I9W107ZWxzZSBkb3toLl9fZD0hMSxJJiZJKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKytBPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYoaT13KHcoe30saSksaC5nZXRDaGlsZENvbnRleHQoKSkpLEMmJiFwJiZudWxsIT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYobT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHksXykpLEg9bnVsbCE9YSYmYS50eXBlPT09ayYmbnVsbD09YS5rZXk/cShhLnByb3BzLmNoaWxkcmVuKTphLGY9UChuLGQoSCk/SDpbSF0sdSx0LGkscixvLGUsZixjLHMpLGguYmFzZT11Ll9fZSx1Ll9fdSY9LTE2MSxoLl9faC5sZW5ndGgmJmUucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKX1jYXRjaChuKXtpZih1Ll9fdj1udWxsLGN8fG51bGwhPW8paWYobi50aGVuKXtmb3IodS5fX3V8PWM/MTYwOjEyODtmJiY4PT1mLm5vZGVUeXBlJiZmLm5leHRTaWJsaW5nOylmPWYubmV4dFNpYmxpbmc7b1tvLmluZGV4T2YoZildPW51bGwsdS5fX2U9Zn1lbHNle2ZvcihMPW8ubGVuZ3RoO0wtLTspZyhvW0xdKTtOKHUpfWVsc2UgdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssbi50aGVufHxOKHUpO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PW8mJnUuX192PT10Ll9fdj8odS5fX2s9dC5fX2ssdS5fX2U9dC5fX2UpOmY9dS5fX2U9Qih0Ll9fZSx1LHQsaSxyLG8sZSxjLHMpO3JldHVybihhPWwuZGlmZmVkKSYmYSh1KSwxMjgmdS5fX3U/dm9pZCAwOmZ9ZnVuY3Rpb24gTihuKXtuJiYobi5fX2MmJihuLl9fYy5fX2U9ITApLG4uX19rJiZuLl9fay5zb21lKE4pKX1mdW5jdGlvbiBWKG4sdSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylEKHRbaV0sdFsrK2ldLHRbKytpXSk7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBxKG4pe3JldHVyblwib2JqZWN0XCIhPXR5cGVvZiBufHxudWxsPT1ufHxuLl9fYj4wP246ZChuKT9uLm1hcChxKTp3KHt9LG4pfWZ1bmN0aW9uIEIodSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgsdix5LHcsXyxtLGI9aS5wcm9wc3x8cCxrPXQucHJvcHMseD10LnR5cGU7aWYoXCJzdmdcIj09eD9vPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjpcIm1hdGhcIj09eD9vPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOm98fChvPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSxudWxsIT1lKWZvcihhPTA7YTxlLmxlbmd0aDthKyspaWYoKHc9ZVthXSkmJlwic2V0QXR0cmlidXRlXCJpbiB3PT0hIXgmJih4P3cubG9jYWxOYW1lPT14OjM9PXcubm9kZVR5cGUpKXt1PXcsZVthXT1udWxsO2JyZWFrfWlmKG51bGw9PXUpe2lmKG51bGw9PXgpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspO3U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG8seCxrLmlzJiZrKSxjJiYobC5fX20mJmwuX19tKHQsZSksYz0hMSksZT1udWxsfWlmKG51bGw9PXgpYj09PWt8fGMmJnUuZGF0YT09a3x8KHUuZGF0YT1rKTtlbHNle2lmKGU9ZSYmbi5jYWxsKHUuY2hpbGROb2RlcyksIWMmJm51bGwhPWUpZm9yKGI9e30sYT0wO2E8dS5hdHRyaWJ1dGVzLmxlbmd0aDthKyspYlsodz11LmF0dHJpYnV0ZXNbYV0pLm5hbWVdPXcudmFsdWU7Zm9yKGEgaW4gYil3PWJbYV0sXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1hP3Y9dzpcImNoaWxkcmVuXCI9PWF8fGEgaW4ga3x8XCJ2YWx1ZVwiPT1hJiZcImRlZmF1bHRWYWx1ZVwiaW4ga3x8XCJjaGVja2VkXCI9PWEmJlwiZGVmYXVsdENoZWNrZWRcImluIGt8fEYodSxhLG51bGwsdyxvKTtmb3IoYSBpbiBrKXc9a1thXSxcImNoaWxkcmVuXCI9PWE/eT13OlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT9oPXc6XCJ2YWx1ZVwiPT1hP189dzpcImNoZWNrZWRcIj09YT9tPXc6YyYmXCJmdW5jdGlvblwiIT10eXBlb2Ygd3x8YlthXT09PXd8fEYodSxhLHcsYlthXSxvKTtpZihoKWN8fHYmJihoLl9faHRtbD09di5fX2h0bWx8fGguX19odG1sPT11LmlubmVySFRNTCl8fCh1LmlubmVySFRNTD1oLl9faHRtbCksdC5fX2s9W107ZWxzZSBpZih2JiYodS5pbm5lckhUTUw9XCJcIiksUChcInRlbXBsYXRlXCI9PXQudHlwZT91LmNvbnRlbnQ6dSxkKHkpP3k6W3ldLHQsaSxyLFwiZm9yZWlnbk9iamVjdFwiPT14P1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOm8sZSxmLGU/ZVswXTppLl9fayYmUyhpLDApLGMscyksbnVsbCE9ZSlmb3IoYT1lLmxlbmd0aDthLS07KWcoZVthXSk7Y3x8KGE9XCJ2YWx1ZVwiLFwicHJvZ3Jlc3NcIj09eCYmbnVsbD09Xz91LnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpOm51bGwhPV8mJihfIT09dVthXXx8XCJwcm9ncmVzc1wiPT14JiYhX3x8XCJvcHRpb25cIj09eCYmXyE9YlthXSkmJkYodSxhLF8sYlthXSxvKSxhPVwiY2hlY2tlZFwiLG51bGwhPW0mJm0hPXVbYV0mJkYodSxhLG0sYlthXSxvKSl9cmV0dXJuIHV9ZnVuY3Rpb24gRChuLHUsdCl7dHJ5e2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pe3ZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4uX191O2kmJm4uX191KCksaSYmbnVsbD09dXx8KG4uX191PW4odSkpfWVsc2Ugbi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2Uobix0KX19ZnVuY3Rpb24gRShuLHUsdCl7dmFyIGkscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwoaT1uLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9bi5fX2V8fEQoaSxudWxsLHUpKSxudWxsIT0oaT1uLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfWkuYmFzZT1pLl9fUD1udWxsfWlmKGk9bi5fX2spZm9yKHI9MDtyPGkubGVuZ3RoO3IrKylpW3JdJiZFKGlbcl0sdSx0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO3R8fGcobi5fX2UpLG4uX19jPW4uX189bi5fX2U9dm9pZCAwfWZ1bmN0aW9uIEcobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gSih1LHQsaSl7dmFyIHIsbyxlLGY7dD09ZG9jdW1lbnQmJih0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksbC5fXyYmbC5fXyh1LHQpLG89KHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaSk/bnVsbDppJiZpLl9fa3x8dC5fX2ssZT1bXSxmPVtdLHoodCx1PSghciYmaXx8dCkuX19rPV8oayxudWxsLFt1XSksb3x8cCxwLHQubmFtZXNwYWNlVVJJLCFyJiZpP1tpXTpvP251bGw6dC5maXJzdENoaWxkP24uY2FsbCh0LmNoaWxkTm9kZXMpOm51bGwsZSwhciYmaT9pOm8/by5fX2U6dC5maXJzdENoaWxkLHIsZiksVihlLHUsZil9ZnVuY3Rpb24gSyhuLGwpe0oobixsLEspfWZ1bmN0aW9uIFEobCx1LHQpe3ZhciBpLHIsbyxlLGY9dyh7fSxsLnByb3BzKTtmb3IobyBpbiBsLnR5cGUmJmwudHlwZS5kZWZhdWx0UHJvcHMmJihlPWwudHlwZS5kZWZhdWx0UHJvcHMpLHUpXCJrZXlcIj09bz9pPXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT12b2lkIDA9PT11W29dJiZudWxsIT1lP2Vbb106dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSxtKGwudHlwZSxmLGl8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIFIobil7ZnVuY3Rpb24gbChuKXt2YXIgdSx0O3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9bmV3IFNldCwodD17fSlbbC5fX2NdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3U9bnVsbH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9bi52YWx1ZSYmdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uX19lPSEwLCQobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5hZGQobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dSYmdS5kZWxldGUobiksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59cmV0dXJuIGwuX19jPVwiX19jQ1wiK2grKyxsLl9fPW4sbC5Qcm92aWRlcj1sLl9fbD0obC5Db25zdW1lcj1mdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSkuY29udGV4dFR5cGU9bCxsfW49di5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsdCl7Zm9yKHZhciBpLHIsbztsPWwuX187KWlmKChpPWwuX19jKSYmIWkuX18pdHJ5e2lmKChyPWkuY29uc3RydWN0b3IpJiZudWxsIT1yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKGkuc2V0U3RhdGUoci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLG89aS5fX2QpLG51bGwhPWkuY29tcG9uZW50RGlkQ2F0Y2gmJihpLmNvbXBvbmVudERpZENhdGNoKG4sdHx8e30pLG89aS5fX2QpLG8pcmV0dXJuIGkuX19FPWl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsdD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0seC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz13KHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4odyh7fSx1KSx0aGlzLnByb3BzKSksbiYmdyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSwkKHRoaXMpKX0seC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLCQodGhpcykpfSx4LnByb3RvdHlwZS5yZW5kZXI9ayxpPVtdLG89XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZT1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSxJLl9fcj0wLGY9LyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2ksYz0wLHM9TyghMSksYT1PKCEwKSxoPTA7ZXhwb3J0e3ggYXMgQ29tcG9uZW50LGsgYXMgRnJhZ21lbnQsUSBhcyBjbG9uZUVsZW1lbnQsUiBhcyBjcmVhdGVDb250ZXh0LF8gYXMgY3JlYXRlRWxlbWVudCxiIGFzIGNyZWF0ZVJlZixfIGFzIGgsSyBhcyBoeWRyYXRlLHQgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLEogYXMgcmVuZGVyLEwgYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbj1mdW5jdGlvbih0LHMscixlKXt2YXIgdTtzWzBdPTA7Zm9yKHZhciBoPTE7aDxzLmxlbmd0aDtoKyspe3ZhciBwPXNbaCsrXSxhPXNbaF0/KHNbMF18PXA/MToyLHJbc1toKytdXSk6c1srK2hdOzM9PT1wP2VbMF09YTo0PT09cD9lWzFdPU9iamVjdC5hc3NpZ24oZVsxXXx8e30sYSk6NT09PXA/KGVbMV09ZVsxXXx8e30pW3NbKytoXV09YTo2PT09cD9lWzFdW3NbKytoXV0rPWErXCJcIjpwPyh1PXQuYXBwbHkoYSxuKHQsYSxyLFtcIlwiLG51bGxdKSksZS5wdXNoKHUpLGFbMF0/c1swXXw9Mjooc1toLTJdPTAsc1toXT11KSk6ZS5wdXNoKGEpfXJldHVybiBlfSx0PW5ldyBNYXA7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocyl7dmFyIHI9dC5nZXQodGhpcyk7cmV0dXJuIHJ8fChyPW5ldyBNYXAsdC5zZXQodGhpcyxyKSksKHI9bih0aGlzLHIuZ2V0KHMpfHwoci5zZXQocyxyPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxzLHI9MSxlPVwiXCIsdT1cIlwiLGg9WzBdLHA9ZnVuY3Rpb24obil7MT09PXImJihufHwoZT1lLnJlcGxhY2UoL15cXHMqXFxuXFxzKnxcXHMqXFxuXFxzKiQvZyxcIlwiKSkpP2gucHVzaCgwLG4sZSk6Mz09PXImJihufHxlKT8oaC5wdXNoKDMsbixlKSxyPTIpOjI9PT1yJiZcIi4uLlwiPT09ZSYmbj9oLnB1c2goNCxuLDApOjI9PT1yJiZlJiYhbj9oLnB1c2goNSwwLCEwLGUpOnI+PTUmJigoZXx8IW4mJjU9PT1yKSYmKGgucHVzaChyLDAsZSxzKSxyPTYpLG4mJihoLnB1c2gocixuLDAscykscj02KSksZT1cIlwifSxhPTA7YTxuLmxlbmd0aDthKyspe2EmJigxPT09ciYmcCgpLHAoYSkpO2Zvcih2YXIgbD0wO2w8blthXS5sZW5ndGg7bCsrKXQ9blthXVtsXSwxPT09cj9cIjxcIj09PXQ/KHAoKSxoPVtoXSxyPTMpOmUrPXQ6ND09PXI/XCItLVwiPT09ZSYmXCI+XCI9PT10PyhyPTEsZT1cIlwiKTplPXQrZVswXTp1P3Q9PT11P3U9XCJcIjplKz10OidcIic9PT10fHxcIidcIj09PXQ/dT10OlwiPlwiPT09dD8ocCgpLHI9MSk6ciYmKFwiPVwiPT09dD8ocj01LHM9ZSxlPVwiXCIpOlwiL1wiPT09dCYmKHI8NXx8XCI+XCI9PT1uW2FdW2wrMV0pPyhwKCksMz09PXImJihoPWhbMF0pLHI9aCwoaD1oWzBdKS5wdXNoKDIsMCxyKSxyPTApOlwiIFwiPT09dHx8XCJcXHRcIj09PXR8fFwiXFxuXCI9PT10fHxcIlxcclwiPT09dD8ocCgpLHI9Mik6ZSs9dCksMz09PXImJlwiIS0tXCI9PT1lJiYocj00LGg9aFswXSl9cmV0dXJuIHAoKSxofShzKSksciksYXJndW1lbnRzLFtdKSkubGVuZ3RoPjE/cjpyWzBdfVxuIiwiaW1wb3J0e2ggYXMgcixDb21wb25lbnQgYXMgbyxyZW5kZXIgYXMgdH1mcm9tXCJwcmVhY3RcIjtleHBvcnR7aCxyZW5kZXIsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2ltcG9ydCBlIGZyb21cImh0bVwiO3ZhciBtPWUuYmluZChyKTtleHBvcnR7bSBhcyBodG1sfTtcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5mdW5jdGlvbiBodG1sKGF0dHJzLCB0ZXh0Q29udGVudCkge1xuICBjb25zdCB7XG4gICAgdHlwZSxcbiAgICBhdXRvZm9jdXMsXG4gICAgdGFiaW5kZXgsXG4gICAgZGlzYWJsZWQsXG4gICAgY2xhc3NlcyxcbiAgICBuYW1lLFxuICAgIGFyaWFMYWJlbFxuICB9ID0gYXR0cnM7XG4gIGNvbnN0IF9jbGFzc2VzID0gbmV3IFNldChjbGFzc2VzKTtcbiAgX2NsYXNzZXMuYWRkKFwic3Vic3RyYXRlLWJ1dHRvbiBidG5cIik7XG4gIGNvbnN0IGFyciA9IEFycmF5LmZyb20oX2NsYXNzZXMpO1xuICBjb25zdCBidG5Qcm9wcyA9IFtcbiAgICBhcnIubGVuZ3RoID8gYGNsYXNzPVwiJHthcnIuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpfVwiYCA6IFwiXCIsXG4gICAgZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcIlwiLFxuICAgIGF1dG9mb2N1cyA/IFwiYXV0b2ZvY3VzXCIgOiBcIlwiLFxuICAgIHR5cGUgPyBgdHlwZT1cIiR7dHlwZX1cImAgOiBcIlwiLFxuICAgIG5hbWUgPyBgbmFtZT0ke25hbWV9YCA6IFwiXCIsXG4gICAgdGFiaW5kZXggPyBgdGFiaW5kZXg9XCIke3RhYmluZGV4fVwiYCA6ICd0YWJpbmRleD1cIjBcIicsXG4gICAgJ3JvbGU9XCJidXR0b25cIicsXG4gICAgYXJpYUxhYmVsID8gYGFyaWEtbGFiZWw9XCIke2FyaWFMYWJlbH1cImAgOiBcIlwiLFxuICAgICdhcmlhLWxpdmU9XCJwb2xpdGVcIidcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gYDxzdWJzdHJhdGUtYnV0dG9uJHtkaXNhYmxlZCA/IFwiIGRpc2FibGVkXCIgOiBcIlwifT5cbiAgICAgICAgICAgIDxidXR0b24gJHtidG5Qcm9wc30+PHNwYW4gY2xhc3M9XCJidG4tY29udGVudFwiPiR7dGV4dENvbnRlbnR9PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L3N1YnN0cmF0ZS1idXR0b24+YCA6IGA8YnV0dG9uICR7YnRuUHJvcHN9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tY29udGVudFwiPiR7dGV4dENvbnRlbnR9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5gO1xufVxuX19uYW1lKGh0bWwsIFwiaHRtbFwiKTtcbmV4cG9ydCB7XG4gIGh0bWxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLmpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRvQXR0cmlidXRlcyhhdHRycykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cnMpLnJlZHVjZSgoYWNjLCBrKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBhdHRyc1trXTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gYWNjO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBpZiAodmFsdWUpIHJldHVybiAoYWNjICsgYCAke2t9YCkudHJpbSgpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gYWNjICsgYCAke2t9PVwiJHt2YWx1ZS5qb2luKFwiIFwiKX1cImA7XG4gICAgfVxuICAgIHJldHVybiAoYWNjICsgYCAke2t9PVwiJHt2YWx1ZX1cImApLnRyaW0oKTtcbiAgfSwgXCJcIik7XG59XG5fX25hbWUodG9BdHRyaWJ1dGVzLCBcInRvQXR0cmlidXRlc1wiKTtcbmV4cG9ydCB7XG4gIHRvQXR0cmlidXRlc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF0dHJpYnV0ZXMuanMubWFwXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuaW1wb3J0IHsgdG9BdHRyaWJ1dGVzIH0gZnJvbSBcIi4vYXR0cmlidXRlcy5qc1wiO1xuZnVuY3Rpb24gaXNSZWdpc3RlcmVkKGVsTmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbE5hbWUpLmNvbnN0cnVjdG9yICE9PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG59XG5fX25hbWUoaXNSZWdpc3RlcmVkLCBcImlzUmVnaXN0ZXJlZFwiKTtcbmZ1bmN0aW9uIGRlZmluZShuYW1lLCBlbGVtZW50KSB7XG4gIGlmICghd2luZG93KSByZXR1cm47XG4gIGlmICghKFwiY3VzdG9tRWxlbWVudHNcIiBpbiB3aW5kb3cpKSByZXR1cm47XG4gIGlmICghaXNSZWdpc3RlcmVkKG5hbWUpKSB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbGVtZW50KTtcbiAgfVxufVxuX19uYW1lKGRlZmluZSwgXCJkZWZpbmVcIik7XG5jb25zdCBxcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IuYmluZChkb2N1bWVudCk7XG5jb25zdCBxc2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuZnVuY3Rpb24gbWF0Y2goZWwsIHMpIHtcbiAgaWYgKCFlbC5tYXRjaGVzKSBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIHJldHVybiBlbC5tYXRjaGVzKHMpID8gZWwgOiBlbC5jbG9zZXN0KHMpO1xufVxuX19uYW1lKG1hdGNoLCBcIm1hdGNoXCIpO1xuZXhwb3J0IHtcbiAgZGVmaW5lLFxuICBpc1JlZ2lzdGVyZWQsXG4gIG1hdGNoLFxuICBxcyxcbiAgcXNhLFxuICB0b0F0dHJpYnV0ZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX25hbWUgPSAodGFyZ2V0LCB2YWx1ZSkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJuYW1lXCIsIHsgdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbmltcG9ydCB7IG1hdGNoIGFzIF9tYXRjaCB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmNsYXNzIFdlYkNvbXBvbmVudCBleHRlbmRzIHdpbmRvdy5IVE1MRWxlbWVudCB7XG4gIHN0YXRpYyB7XG4gICAgX19uYW1lKHRoaXMsIFwiV2ViQ29tcG9uZW50XCIpO1xuICB9XG4gIHN0YXRpYyBUQUcgPSBcIlwiO1xuICBUQUcgPSBcIlwiO1xuICBzdGF0aWMgbWF0Y2goZWwpIHtcbiAgICByZXR1cm4gX21hdGNoKGVsLCB0aGlzLlRBRyk7XG4gIH1cbiAgLyoqXG4gICAqIFN0b3JlIGdsb2JhbCB3aWxkY2FyZCBsaXN0ZW5lcnMgKGxpc3RlbiB0byBhbGwgZXZlbnRzKVxuICAgKiBUcmlnZ2VyZWQgYnkgQUxMIGV2ZW50cyBkaXNwYXRjaGVkIHRocm91Z2ggdGhpcyBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAvKipcbiAgICogU3RvcmUgbmFtZXNwYWNlZCB3aWxkY2FyZCBsaXN0ZW5lcnMgKGxpc3RlbiB0byAnY29tcG9uZW50LW5hbWU6KicpXG4gICAqIFRyaWdnZXJlZCBieSBldmVudHMgZnJvbSBlbWl0KCkgdGhhdCBtYXRjaCB0aGlzIGNvbXBvbmVudCdzIG5hbWVzcGFjZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zdCBDcmVhdGVkQ2xhc3MgPSBjbGFzcyBleHRlbmRzIFdlYkNvbXBvbmVudCB7XG4gICAgICBzdGF0aWMge1xuICAgICAgICBfX25hbWUodGhpcywgXCJDcmVhdGVkQ2xhc3NcIik7XG4gICAgICB9XG4gICAgICBzdGF0aWMgVEFHID0gZWxlbWVudE5hbWU7XG4gICAgICBUQUcgPSBlbGVtZW50TmFtZTtcbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYHJlbmRlcmAgc2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IGNoaWxkcmVuXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgQ3JlYXRlZENsYXNzLmRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFdlYkNvbXBvbmVudC5kZWZpbmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIENyZWF0ZWRDbGFzcy5ldmVudCA9IGZ1bmN0aW9uKGV2VHlwZSkge1xuICAgICAgcmV0dXJuIFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIGV2VHlwZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ3JlYXRlZENsYXNzO1xuICB9XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgZGVmaW5lKHRoaXMuVEFHLCB0aGlzKTtcbiAgfVxuICAvKipcbiAgICogUnVucyB3aGVuIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogRGVwZW5kcyBvbiBgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlc2AuXG4gICAqXG4gICAqIFNob3VsZCBuYW1lIG1ldGhvZHMgbGlrZSBgaGFuZGxlQ2hhbmdlX2Rpc2FibGVkYC5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBuYW1lICAgICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBvbGRWYWx1ZSBUaGUgb2xkIGF0dHJpYnV0ZSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5ld1ZhbHVlIFRoZSBuZXcgYXR0cmlidXRlIHZhbHVlXG4gICAqL1xuICBhc3luYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXNbYGhhbmRsZUNoYW5nZV8ke25hbWV9YF07XG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGF3YWl0IGhhbmRsZXIuY2FsbCh0aGlzLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRW5oYW5jZWQgYWRkRXZlbnRMaXN0ZW5lciB0aGF0IHN1cHBvcnRzIHdpbGRjYXJkczpcbiAgICogLSBDb21wb25lbnQuZXZlbnQoJyonKSAtIExpc3RlbiB0byBhbGwgbmFtZXNwYWNlZCBldmVudHMgZm9yIHRoaXNcbiAgICogICBjb21wb25lbnQgKGUuZy4sICdteS1jb21wb25lbnQ6KicpXG4gICAqIC0gJyonIC0gTGlzdGVuIHRvIEFMTCBldmVudHMgKG5hbWVzcGFjZWQgYW5kIG5vbi1uYW1lc3BhY2VkLCBpbmNsdWRpbmdcbiAgICogICBub3JtYWwgRE9NIGV2ZW50cylcbiAgICpcbiAgICogQHBhcmFtIHR5cGUgLSBFdmVudCB0eXBlLCBDb21wb25lbnQuZXZlbnQoJyonKSBmb3IgbmFtZXNwYWNlZCB3aWxkY2FyZCxcbiAgICogICBvciAnKicgZm9yIGdsb2JhbCB3aWxkY2FyZFxuICAgKiBAcGFyYW0gbGlzdGVuZXIgLSBFdmVudCBsaXN0ZW5lciBmdW5jdGlvbiBvciBvYmplY3RcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBFdmVudCBsaXN0ZW5lciBvcHRpb25zXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09IFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIFwiKlwiKSkge1xuICAgICAgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzLmFkZCh7IGxpc3RlbmVyLCBvcHRpb25zIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCIqXCIpIHtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9nbG9iYWxXaWxkY2FyZExpc3RlbmVycy5hZGQoeyBsaXN0ZW5lciwgb3B0aW9ucyB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBOb3RpZnkgbmFtZXNwYWNlZCB3aWxkY2FyZCBsaXN0ZW5lcnMgb2YgYW4gZXZlbnRcbiAgICogT25seSBmaXJlcyBmb3IgZXZlbnRzIHRoYXQgbWF0Y2ggdGhpcyBjb21wb25lbnQncyBuYW1lc3BhY2VcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIGRpc3BhdGNoIHRvIG5hbWVzcGFjZWQgd2lsZGNhcmQgbGlzdGVuZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbm90aWZ5TmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX25hbWVzcGFjZWRXaWxkY2FyZExpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0aGlzLlRBRztcbiAgICBpZiAoIWNvbXBvbmVudE5hbWUgfHwgIWV2ZW50LnR5cGUuc3RhcnRzV2l0aChgJHtjb21wb25lbnROYW1lfTpgKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9uYW1lc3BhY2VkV2lsZGNhcmRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBsaXN0ZW5lciB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkVycm9yIGluIG5hbWVzcGFjZWQgd2lsZGNhcmQgZXZlbnQgbGlzdGVuZXI6XCIsXG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogTm90aWZ5IGdsb2JhbCB3aWxkY2FyZCBsaXN0ZW5lcnMgb2YgYW4gZXZlbnRcbiAgICogRmlyZXMgZm9yIEFMTCBldmVudHMgZGlzcGF0Y2hlZCB0aHJvdWdoIHRoaXMgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgLSBUaGUgZXZlbnQgdG8gZGlzcGF0Y2ggdG8gZ2xvYmFsIHdpbGRjYXJkIGxpc3RlbmVyc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25vdGlmeUdsb2JhbFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBsaXN0ZW5lciB9KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdsb2JhbCB3aWxkY2FyZCBldmVudCBsaXN0ZW5lcjpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgcXMoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuICBxc2Eoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgfVxuICAvKipcbiAgICogVGFrZSBhIG5vbi1uYW1lcHNhY2VkIGV2ZW50IG5hbWUsIHJldHVybiBuYW1lc3BhY2UgZXZlbnQgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2VHlwZSBUaGUgbm9uLW5hbWVzcGFjZSBldmVudCBuYW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IE5hbWVzcGFjZWQgZXZlbnQgbmFtZSwgZWcsIGBteS1jb21wb25lbnQ6Y2xpY2tgXG4gICAqL1xuICBzdGF0aWMgZXZlbnQoZXZUeXBlKSB7XG4gICAgcmV0dXJuIGV2ZW50TmFtZSh0aGlzLlRBRywgZXZUeXBlKTtcbiAgfVxuICAvKipcbiAgICogRW1pdCBhIG5hbWVzcGFjZWQgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIChub24tbmFtZXNwYWNlZCkgZXZlbnQgdHlwZSBzdHJpbmdcbiAgICogQHBhcmFtIG9wdHMgYGJ1YmJsZXNgLCBgZGV0YWlsYCwgYW5kIGBjYW5jZWxhYmxlYC4gRGVmYXVsdCBpc1xuICAgKiBgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlIH1gXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZW1pdCh0eXBlLCBvcHRzID0ge30pIHtcbiAgICBpZiAodHlwZSA9PT0gXCIqXCIpIHRocm93IG5ldyBFcnJvcignRG8gbm90IGVtaXQgdGhlIGxpdGVyYWwgXCIqXCInKTtcbiAgICBjb25zdCB7IGJ1YmJsZXMgPSB0cnVlLCBjYW5jZWxhYmxlID0gdHJ1ZSwgZGV0YWlsIH0gPSBvcHRzO1xuICAgIGNvbnN0IG5hbWVzcGFjZWRUeXBlID0gYCR7dGhpcy5UQUd9OiR7dHlwZX1gO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWVzcGFjZWRUeXBlLCB7XG4gICAgICBidWJibGVzLFxuICAgICAgY2FuY2VsYWJsZSxcbiAgICAgIGRldGFpbFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5fbm90aWZ5TmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKGV2ZW50KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKiBPdmVycmlkZSBkaXNwYXRjaEV2ZW50IHRvIG5vdGlmeSBnbG9iYWwgd2lsZGNhcmQgbGlzdGVuZXJzXG4gICAqIFRoaXMgZW5zdXJlcyB0aGF0ICcqKicgbGlzdGVuZXJzIGNhdGNoIEFMTCBldmVudHNcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IC0gVGhlIGV2ZW50IHRvIGRpc3BhdGNoXG4gICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50IHdhcyBub3QgY2FuY2VsbGVkXG4gICAqL1xuICBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5fbm90aWZ5R2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMoZXZlbnQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgZW1pdCBhbiBldmVudCwgbm8gbmFtZXNwYWNpbmcuXG4gICAqL1xuICBkaXNwYXRjaCh0eXBlLCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICBidWJibGVzOiBvcHRzLmJ1YmJsZXMgPT09IHZvaWQgMCA/IHRydWUgOiBvcHRzLmJ1YmJsZXMsXG4gICAgICBjYW5jZWxhYmxlOiBvcHRzLmNhbmNlbGFibGUgPT09IHZvaWQgMCA/IHRydWUgOiBvcHRzLmNhbmNlbGFibGUsXG4gICAgICBkZXRhaWw6IG9wdHMuZGV0YWlsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbiAgb24oZXZOYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZnVsbEV2TmFtZSA9IFdlYkNvbXBvbmVudC5ldmVudC5jYWxsKHRoaXMsIGV2TmFtZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGZ1bGxFdk5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBFbmhhbmNlZCByZW1vdmVFdmVudExpc3RlbmVyIHRoYXQgc3VwcG9ydHMgd2lsZGNhcmRzOlxuICAgKiAtIENvbXBvbmVudC5ldmVudCgnKicpIC0gUmVtb3ZlIG5hbWVzcGFjZWQgd2lsZGNhcmQgbGlzdGVuZXJcbiAgICogLSAnKicgLSBSZW1vdmUgZ2xvYmFsIHdpbGRjYXJkIGxpc3RlbmVyXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIC0gRXZlbnQgdHlwZSwgQ29tcG9uZW50LmV2ZW50KCcqJykgZm9yIG5hbWVzcGFjZWQsIG9yICcqJ1xuICAgKiAgIGZvciBnbG9iYWxcbiAgICogQHBhcmFtIGxpc3RlbmVyIC0gRXZlbnQgbGlzdGVuZXIgZnVuY3Rpb24gb3Igb2JqZWN0IHRvIHJlbW92ZVxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIEV2ZW50IGxpc3RlbmVyIG9wdGlvbnNcbiAgICovXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gV2ViQ29tcG9uZW50LmV2ZW50LmNhbGwodGhpcywgXCIqXCIpKSB7XG4gICAgICBpZiAobGlzdGVuZXIgJiYgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGVudHJ5Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fbmFtZXNwYWNlZFdpbGRjYXJkTGlzdGVuZXJzLmRlbGV0ZShlbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiKlwiKSB7XG4gICAgICBpZiAobGlzdGVuZXIgJiYgdGhpcy5fZ2xvYmFsV2lsZGNhcmRMaXN0ZW5lcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLl9nbG9iYWxXaWxkY2FyZExpc3RlbmVycykge1xuICAgICAgICAgIGlmIChlbnRyeS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dsb2JhbFdpbGRjYXJkTGlzdGVuZXJzLmRlbGV0ZShlbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBldmVudE5hbWUobmFtZXNwYWNlLCBldlR5cGUpIHtcbiAgcmV0dXJuIGAke25hbWVzcGFjZX06JHtldlR5cGV9YDtcbn1cbl9fbmFtZShldmVudE5hbWUsIFwiZXZlbnROYW1lXCIpO1xuZnVuY3Rpb24gaXNSZWdpc3RlcmVkKGVsTmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbE5hbWUpLmNvbnN0cnVjdG9yICE9PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG59XG5fX25hbWUoaXNSZWdpc3RlcmVkLCBcImlzUmVnaXN0ZXJlZFwiKTtcbmZ1bmN0aW9uIGRlZmluZShuYW1lLCBlbGVtZW50KSB7XG4gIGlmICghd2luZG93KSByZXR1cm47XG4gIGlmICghKFwiY3VzdG9tRWxlbWVudHNcIiBpbiB3aW5kb3cpKSByZXR1cm47XG4gIGlmICghaXNSZWdpc3RlcmVkKG5hbWUpKSB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbGVtZW50KTtcbiAgfVxufVxuX19uYW1lKGRlZmluZSwgXCJkZWZpbmVcIik7XG5leHBvcnQge1xuICBXZWJDb21wb25lbnQsXG4gIGRlZmluZSxcbiAgaXNSZWdpc3RlcmVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fbmFtZSA9ICh0YXJnZXQsIHZhbHVlKSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIm5hbWVcIiwgeyB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuaW1wb3J0IHsgV2ViQ29tcG9uZW50LCBkZWZpbmUgfSBmcm9tIFwiQHN1YnN0cmF0ZS1zeXN0ZW0vd2ViLWNvbXBvbmVudFwiO1xuY2xhc3MgU3Vic3RyYXRlQnV0dG9uIGV4dGVuZHMgV2ViQ29tcG9uZW50LmNyZWF0ZShcInN1YnN0cmF0ZS1idXR0b25cIikge1xuICBzdGF0aWMge1xuICAgIF9fbmFtZSh0aGlzLCBcIlN1YnN0cmF0ZUJ1dHRvblwiKTtcbiAgfVxuICAvLyBmb3IgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2BcbiAgc3RhdGljIG9ic2VydmVkQXR0cmlidXRlcyA9IFtcImF1dG9mb2N1c1wiLCBcImRpc2FibGVkXCIsIFwic3Bpbm5pbmdcIl07XG4gIHN0YXRpYyBUQUcgPSBcInN1YnN0cmF0ZS1idXR0b25cIjtcbiAgX2lzU3Bpbm5pbmc7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgZGVmaW5lKFN1YnN0cmF0ZUJ1dHRvbi5UQUcsIFN1YnN0cmF0ZUJ1dHRvbik7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgaWYgKGRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvZm9jdXMgPSB0aGlzLmdldEF0dHJpYnV0ZShcImF1dG9mb2N1c1wiKSAhPT0gbnVsbDtcbiAgICB0aGlzLl9pc1NwaW5uaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzcGlubmluZ1wiKSAhPT0gbnVsbDtcbiAgfVxuICBnZXQgZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5idXR0b24/LmZvcm07XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMuYnV0dG9uPy5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWRWYWx1ZSkge1xuICAgIGlmICghZGlzYWJsZWRWYWx1ZSkge1xuICAgICAgdGhpcy5fcmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgfVxuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLmJ1dHRvbj8uZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgfVxuICBnZXQgdGFiaW5kZXgoKSB7XG4gICAgY29uc3QgaSA9IHRoaXMuYnV0dG9uPy5nZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgICBpZiAoIWkpIHJldHVybiAwO1xuICAgIHJldHVybiBwYXJzZUludChpKTtcbiAgfVxuICBnZXQgc3Bpbm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3Bpbm5pbmc7XG4gIH1cbiAgc2V0IHNwaW5uaW5nKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInNwaW5uaW5nXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5jbGFzc0xpc3QucmVtb3ZlKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcInNwaW5uaW5nXCIpO1xuICAgIH1cbiAgfVxuICBzZXQgdHlwZSh2YWx1ZSkge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZShcInR5cGVcIiwgdmFsdWUpO1xuICB9XG4gIGdldCBhdXRvZm9jdXMoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5idXR0b24/Lmhhc0F0dHJpYnV0ZShcImF1dG9mb2N1c1wiKTtcbiAgfVxuICBzZXQgYXV0b2ZvY3VzKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIiwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW1vdmVBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXQgYXR0cmlidXRlcyBvbiB0aGUgaW50ZXJuYWwgYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBfc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fcmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKG5hbWUsIFwiXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBmcm9tIGB0aGlzYCBhbmQgYWxzbyBidXR0b24gY2hpbGQuXG4gICAqL1xuICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB0aGlzLmJ1dHRvbj8ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9XG4gIGdldCBidXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgfVxuICAvKipcbiAgICogSGFuZGxlICdhdXRvZm9jdXMnIGF0dHJpYnV0ZSBjaGFuZ2VzXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZGV0ZWN0LXdoZW4tYXR0cmlidXRlcy1jaGFuZ2Utb24tYS13ZWItY29tcG9uZW50LyNvcmdhbml6aW5nLXlvdXItY29kZSBHbyBNYWtlIFRoaW5ncyBhcnRpY2xlfVxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG9sZFZhbHVlIFRoZSBvbGQgYXR0cmlidXRlIHZhbHVlXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmV3VmFsdWUgVGhlIG5ldyBhdHRyaWJ1dGUgdmFsdWVcbiAgICovXG4gIGhhbmRsZUNoYW5nZV9hdXRvZm9jdXMoX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZShcImF1dG9mb2N1c1wiLCBuZXdWYWx1ZSk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlX2Rpc2FibGVkKF9vbGQsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IG5ld1ZhbHVlICE9PSBudWxsO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIGVsc2UgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIgKyBuZXdWYWx1ZSk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlX3NwaW5uaW5nKF8sIG5ld1ZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzcGlubmluZ1wiKTtcbiAgICAgIHRoaXMuYnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uc2V0QXR0cmlidXRlKFwiYXJpYS1idXN5XCIsIFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwic3Bpbm5pbmdcIik7XG4gICAgICB0aGlzLmJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcInNwaW5uaW5nXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgdGhpcy5idXR0b24/LnNldEF0dHJpYnV0ZShcImFyaWEtYnVzeVwiLCBcImZhbHNlXCIpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX3NldHVwS2V5Ym9hcmRIYW5kbGVycygpO1xuICB9XG4gIF9zZXR1cEtleWJvYXJkSGFuZGxlcnMoKSB7XG4gICAgdGhpcy5idXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJ1dHRvbj8uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFN1YnN0cmF0ZUJ1dHRvblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaWVudC5qcy5tYXBcbiIsInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19uYW1lID0gKHRhcmdldCwgdmFsdWUpID0+IF9fZGVmUHJvcCh0YXJnZXQsIFwibmFtZVwiLCB7IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIkBzdWJzdHJhdGUtc3lzdGVtL3dlYi1jb21wb25lbnRcIjtcbmltcG9ydCB7IFN1YnN0cmF0ZUJ1dHRvbiBhcyBTdWJzdHJhdGVCdXR0b25MaWdodCB9IGZyb20gXCIuL2NsaWVudC5qc1wiO1xuY2xhc3MgU3Vic3RyYXRlQnV0dG9uIGV4dGVuZHMgU3Vic3RyYXRlQnV0dG9uTGlnaHQge1xuICBzdGF0aWMge1xuICAgIF9fbmFtZSh0aGlzLCBcIlN1YnN0cmF0ZUJ1dHRvblwiKTtcbiAgfVxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIGRlZmluZShTdWJzdHJhdGVCdXR0b24uVEFHLCBTdWJzdHJhdGVCdXR0b24pO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5fc2V0dXBLZXlib2FyZEhhbmRsZXJzKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICBhdXRvZm9jdXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICBjb25zdCBhcmlhTGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIik7XG4gICAgY29uc3Qgc3Bpbm5pbmcgPSB0aGlzLmdldEF0dHJpYnV0ZShcInNwaW5uaW5nXCIpICE9PSBudWxsO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICBcInN1YnN0cmF0ZS1idXR0b25cIixcbiAgICAgIHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIiksXG4gICAgICBzcGlubmluZyA/IFwic3Bpbm5pbmdcIiA6IG51bGxcbiAgICBdO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLmlubmVySFRNTDtcbiAgICBjb25zdCBidG5Qcm9wcyA9IHtcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhdXRvZm9jdXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIHR5cGUsXG4gICAgICBuYW1lLFxuICAgICAgYXJpYUxhYmVsXG4gICAgfTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGh0bWwoYnRuUHJvcHMsIHRleHQpO1xuICB9XG59XG5kZWZpbmUoXCJzdWJzdHJhdGUtYnV0dG9uXCIsIFN1YnN0cmF0ZUJ1dHRvbik7XG5leHBvcnQge1xuICBTdWJzdHJhdGVCdXR0b25cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQscix1LGksbz0wLGY9W10sYz1uLGU9Yy5fX2IsYT1jLl9fcix2PWMuZGlmZmVkLGw9Yy5fX2MsbT1jLnVubW91bnQscz1jLl9fO2Z1bmN0aW9uIHAobix0KXtjLl9faCYmYy5fX2gocixuLG98fHQpLG89MDt2YXIgdT1yLl9fSHx8KHIuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gbj49dS5fXy5sZW5ndGgmJnUuX18ucHVzaCh7fSksdS5fX1tuXX1mdW5jdGlvbiBkKG4pe3JldHVybiBvPTEsaChELG4pfWZ1bmN0aW9uIGgobix1LGkpe3ZhciBvPXAodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpEKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci5fX2YpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7aWYoIW8uX19jLl9fSClyZXR1cm4hMDt2YXIgdT1vLl9fYy5fX0guX18uZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiBuLl9fY30pO2lmKHUuZXZlcnkoZnVuY3Rpb24obil7cmV0dXJuIW4uX19OfSkpcmV0dXJuIWN8fGMuY2FsbCh0aGlzLG4sdCxyKTt2YXIgaT1vLl9fYy5wcm9wcyE9PW47cmV0dXJuIHUuc29tZShmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLGMmJmMuY2FsbCh0aGlzLG4sdCxyKXx8aX07ci5fX2Y9ITA7dmFyIGM9ci5zaG91bGRDb21wb25lbnRVcGRhdGUsZT1yLmNvbXBvbmVudFdpbGxVcGRhdGU7ci5jb21wb25lbnRXaWxsVXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZih0aGlzLl9fZSl7dmFyIHU9YztjPXZvaWQgMCxmKG4sdCxyKSxjPXV9ZSYmZS5jYWxsKHRoaXMsbix0LHIpfSxyLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mfXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiB5KG4sdSl7dmFyIGk9cCh0KyssMyk7IWMuX19zJiZDKGkuX19ILHUpJiYoaS5fXz1uLGkudT11LHIuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBfKG4sdSl7dmFyIGk9cCh0KyssNCk7IWMuX19zJiZDKGkuX19ILHUpJiYoaS5fXz1uLGkudT11LHIuX19oLnB1c2goaSkpfWZ1bmN0aW9uIEEobil7cmV0dXJuIG89NSxUKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBGKG4sdCxyKXtvPTYsXyhmdW5jdGlvbigpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pe3ZhciByPW4odCgpKTtyZXR1cm4gZnVuY3Rpb24oKXtuKG51bGwpLHImJlwiZnVuY3Rpb25cIj09dHlwZW9mIHImJnIoKX19aWYobilyZXR1cm4gbi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH19LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9ZnVuY3Rpb24gVChuLHIpe3ZhciB1PXAodCsrLDcpO3JldHVybiBDKHUuX19ILHIpJiYodS5fXz1uKCksdS5fX0g9cix1Ll9faD1uKSx1Ll9ffWZ1bmN0aW9uIHEobix0KXtyZXR1cm4gbz04LFQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24geChuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9cCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFAobix0KXtjLnVzZURlYnVnVmFsdWUmJmMudXNlRGVidWdWYWx1ZSh0P3Qobik6bil9ZnVuY3Rpb24gYihuKXt2YXIgdT1wKHQrKywxMCksaT1kKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBnKCl7dmFyIG49cCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGooKXtmb3IodmFyIG47bj1mLnNoaWZ0KCk7KXt2YXIgdD1uLl9fSDtpZihuLl9fUCYmdCl0cnl7dC5fX2guc29tZSh6KSx0Ll9faC5zb21lKEIpLHQuX19oPVtdfWNhdGNoKHIpe3QuX19oPVtdLGMuX19lKHIsbi5fX3YpfX19Yy5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LGMuX189ZnVuY3Rpb24obix0KXtuJiZ0Ll9fayYmdC5fX2suX19tJiYobi5fX209dC5fX2suX19tKSxzJiZzKG4sdCl9LGMuX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLnNvbWUoZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLnU9bi5fX049dm9pZCAwfSkpOihpLl9faC5zb21lKHopLGkuX19oLnNvbWUoQiksaS5fX2g9W10sdD0wKSksdT1yfSxjLmRpZmZlZD1mdW5jdGlvbihuKXt2JiZ2KG4pO3ZhciB0PW4uX19jO3QmJnQuX19IJiYodC5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2godCkmJmk9PT1jLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8dykoaikpLHQuX19ILl9fLnNvbWUoZnVuY3Rpb24obil7bi51JiYobi5fX0g9bi51KSxuLnU9dm9pZCAwfSkpLHU9cj1udWxsfSxjLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXt0cnl7bi5fX2guc29tZSh6KSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fEIobil9KX1jYXRjaChyKXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx0PVtdLGMuX19lKHIsbi5fX3YpfX0pLGwmJmwobix0KX0sYy51bm1vdW50PWZ1bmN0aW9uKG4pe20mJm0obik7dmFyIHQscj1uLl9fYztyJiZyLl9fSCYmKHIuX19ILl9fLnNvbWUoZnVuY3Rpb24obil7dHJ5e3oobil9Y2F0Y2gobil7dD1ufX0pLHIuX19IPXZvaWQgMCx0JiZjLl9fZSh0LHIuX192KSl9O3ZhciBrPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiB3KG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksayYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMzUpO2smJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24geihuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiBCKG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiBDKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEQobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7cSBhcyB1c2VDYWxsYmFjayx4IGFzIHVzZUNvbnRleHQsUCBhcyB1c2VEZWJ1Z1ZhbHVlLHkgYXMgdXNlRWZmZWN0LGIgYXMgdXNlRXJyb3JCb3VuZGFyeSxnIGFzIHVzZUlkLEYgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxfIGFzIHVzZUxheW91dEVmZmVjdCxUIGFzIHVzZU1lbW8saCBhcyB1c2VSZWR1Y2VyLEEgYXMgdXNlUmVmLGQgYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwidmFyIGk9U3ltYm9sLmZvcihcInByZWFjdC1zaWduYWxzXCIpO2Z1bmN0aW9uIHQoKXtpZighKHM+MSkpe3ZhciBpLHQ9ITE7d2hpbGUodm9pZCAwIT09aCl7dmFyIG49aDtoPXZvaWQgMDt2Kys7d2hpbGUodm9pZCAwIT09bil7dmFyIHI9bi5vO24ubz12b2lkIDA7bi5mJj0tMztpZighKDgmbi5mKSYmYShuKSl0cnl7bi5jKCl9Y2F0Y2gobil7aWYoIXQpe2k9bjt0PSEwfX1uPXJ9fXY9MDtzLS07aWYodCl0aHJvdyBpfWVsc2Ugcy0tfWZ1bmN0aW9uIG4oaSl7aWYocz4wKXJldHVybiBpKCk7cysrO3RyeXtyZXR1cm4gaSgpfWZpbmFsbHl7dCgpfX12YXIgcj12b2lkIDA7ZnVuY3Rpb24gbyhpKXt2YXIgdD1yO3I9dm9pZCAwO3RyeXtyZXR1cm4gaSgpfWZpbmFsbHl7cj10fX12YXIgZixoPXZvaWQgMCxzPTAsdj0wLHU9MDtmdW5jdGlvbiBlKGkpe2lmKHZvaWQgMCE9PXIpe3ZhciB0PWkubjtpZih2b2lkIDA9PT10fHx0LnQhPT1yKXt0PXtpOjAsUzppLHA6ci5zLG46dm9pZCAwLHQ6cixlOnZvaWQgMCx4OnZvaWQgMCxyOnR9O2lmKHZvaWQgMCE9PXIucylyLnMubj10O3Iucz10O2kubj10O2lmKDMyJnIuZilpLlModCk7cmV0dXJuIHR9ZWxzZSBpZigtMT09PXQuaSl7dC5pPTA7aWYodm9pZCAwIT09dC5uKXt0Lm4ucD10LnA7aWYodm9pZCAwIT09dC5wKXQucC5uPXQubjt0LnA9ci5zO3Qubj12b2lkIDA7ci5zLm49dDtyLnM9dH1yZXR1cm4gdH19fWZ1bmN0aW9uIGQoaSx0KXt0aGlzLnY9aTt0aGlzLmk9MDt0aGlzLm49dm9pZCAwO3RoaXMudD12b2lkIDA7dGhpcy5XPW51bGw9PXQ/dm9pZCAwOnQud2F0Y2hlZDt0aGlzLlo9bnVsbD09dD92b2lkIDA6dC51bndhdGNoZWQ7dGhpcy5uYW1lPW51bGw9PXQ/dm9pZCAwOnQubmFtZX1kLnByb3RvdHlwZS5icmFuZD1pO2QucHJvdG90eXBlLmg9ZnVuY3Rpb24oKXtyZXR1cm4hMH07ZC5wcm90b3R5cGUuUz1mdW5jdGlvbihpKXt2YXIgdD10aGlzLG49dGhpcy50O2lmKG4hPT1pJiZ2b2lkIDA9PT1pLmUpe2kueD1uO3RoaXMudD1pO2lmKHZvaWQgMCE9PW4pbi5lPWk7ZWxzZSBvKGZ1bmN0aW9uKCl7dmFyIGk7bnVsbD09KGk9dC5XKXx8aS5jYWxsKHQpfSl9fTtkLnByb3RvdHlwZS5VPWZ1bmN0aW9uKGkpe3ZhciB0PXRoaXM7aWYodm9pZCAwIT09dGhpcy50KXt2YXIgbj1pLmUscj1pLng7aWYodm9pZCAwIT09bil7bi54PXI7aS5lPXZvaWQgMH1pZih2b2lkIDAhPT1yKXtyLmU9bjtpLng9dm9pZCAwfWlmKGk9PT10aGlzLnQpe3RoaXMudD1yO2lmKHZvaWQgMD09PXIpbyhmdW5jdGlvbigpe3ZhciBpO251bGw9PShpPXQuWil8fGkuY2FsbCh0KX0pfX19O2QucHJvdG90eXBlLnN1YnNjcmliZT1mdW5jdGlvbihpKXt2YXIgdD10aGlzO3JldHVybiBtKGZ1bmN0aW9uKCl7dmFyIG49dC52YWx1ZSxvPXI7cj12b2lkIDA7dHJ5e2kobil9ZmluYWxseXtyPW99fSx7bmFtZTpcInN1YlwifSl9O2QucHJvdG90eXBlLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX07ZC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZStcIlwifTtkLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX07ZC5wcm90b3R5cGUucGVlaz1mdW5jdGlvbigpe3ZhciBpPXI7cj12b2lkIDA7dHJ5e3JldHVybiB0aGlzLnZhbHVlfWZpbmFsbHl7cj1pfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGQucHJvdG90eXBlLFwidmFsdWVcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGk9ZSh0aGlzKTtpZih2b2lkIDAhPT1pKWkuaT10aGlzLmk7cmV0dXJuIHRoaXMudn0sc2V0OmZ1bmN0aW9uKGkpe2lmKGkhPT10aGlzLnYpe2lmKHY+MTAwKXRocm93IG5ldyBFcnJvcihcIkN5Y2xlIGRldGVjdGVkXCIpO3RoaXMudj1pO3RoaXMuaSsrO3UrKztzKys7dHJ5e2Zvcih2YXIgbj10aGlzLnQ7dm9pZCAwIT09bjtuPW4ueCluLnQuTigpfWZpbmFsbHl7dCgpfX19fSk7ZnVuY3Rpb24gYyhpLHQpe3JldHVybiBuZXcgZChpLHQpfWZ1bmN0aW9uIGEoaSl7Zm9yKHZhciB0PWkuczt2b2lkIDAhPT10O3Q9dC5uKWlmKHQuUy5pIT09dC5pfHwhdC5TLmgoKXx8dC5TLmkhPT10LmkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbChpKXtmb3IodmFyIHQ9aS5zO3ZvaWQgMCE9PXQ7dD10Lm4pe3ZhciBuPXQuUy5uO2lmKHZvaWQgMCE9PW4pdC5yPW47dC5TLm49dDt0Lmk9LTE7aWYodm9pZCAwPT09dC5uKXtpLnM9dDticmVha319fWZ1bmN0aW9uIHkoaSl7dmFyIHQ9aS5zLG49dm9pZCAwO3doaWxlKHZvaWQgMCE9PXQpe3ZhciByPXQucDtpZigtMT09PXQuaSl7dC5TLlUodCk7aWYodm9pZCAwIT09cilyLm49dC5uO2lmKHZvaWQgMCE9PXQubil0Lm4ucD1yfWVsc2Ugbj10O3QuUy5uPXQucjtpZih2b2lkIDAhPT10LnIpdC5yPXZvaWQgMDt0PXJ9aS5zPW59ZnVuY3Rpb24gdyhpLHQpe2QuY2FsbCh0aGlzLHZvaWQgMCk7dGhpcy54PWk7dGhpcy5zPXZvaWQgMDt0aGlzLmc9dS0xO3RoaXMuZj00O3RoaXMuVz1udWxsPT10P3ZvaWQgMDp0LndhdGNoZWQ7dGhpcy5aPW51bGw9PXQ/dm9pZCAwOnQudW53YXRjaGVkO3RoaXMubmFtZT1udWxsPT10P3ZvaWQgMDp0Lm5hbWV9dy5wcm90b3R5cGU9bmV3IGQ7dy5wcm90b3R5cGUuaD1mdW5jdGlvbigpe3RoaXMuZiY9LTM7aWYoMSZ0aGlzLmYpcmV0dXJuITE7aWYoMzI9PSgzNiZ0aGlzLmYpKXJldHVybiEwO3RoaXMuZiY9LTU7aWYodGhpcy5nPT09dSlyZXR1cm4hMDt0aGlzLmc9dTt0aGlzLmZ8PTE7aWYodGhpcy5pPjAmJiFhKHRoaXMpKXt0aGlzLmYmPS0yO3JldHVybiEwfXZhciBpPXI7dHJ5e2wodGhpcyk7cj10aGlzO3ZhciB0PXRoaXMueCgpO2lmKDE2JnRoaXMuZnx8dGhpcy52IT09dHx8MD09PXRoaXMuaSl7dGhpcy52PXQ7dGhpcy5mJj0tMTc7dGhpcy5pKyt9fWNhdGNoKGkpe3RoaXMudj1pO3RoaXMuZnw9MTY7dGhpcy5pKyt9cj1pO3kodGhpcyk7dGhpcy5mJj0tMjtyZXR1cm4hMH07dy5wcm90b3R5cGUuUz1mdW5jdGlvbihpKXtpZih2b2lkIDA9PT10aGlzLnQpe3RoaXMuZnw9MzY7Zm9yKHZhciB0PXRoaXMuczt2b2lkIDAhPT10O3Q9dC5uKXQuUy5TKHQpfWQucHJvdG90eXBlLlMuY2FsbCh0aGlzLGkpfTt3LnByb3RvdHlwZS5VPWZ1bmN0aW9uKGkpe2lmKHZvaWQgMCE9PXRoaXMudCl7ZC5wcm90b3R5cGUuVS5jYWxsKHRoaXMsaSk7aWYodm9pZCAwPT09dGhpcy50KXt0aGlzLmYmPS0zMztmb3IodmFyIHQ9dGhpcy5zO3ZvaWQgMCE9PXQ7dD10Lm4pdC5TLlUodCl9fX07dy5wcm90b3R5cGUuTj1mdW5jdGlvbigpe2lmKCEoMiZ0aGlzLmYpKXt0aGlzLmZ8PTY7Zm9yKHZhciBpPXRoaXMudDt2b2lkIDAhPT1pO2k9aS54KWkudC5OKCl9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkody5wcm90b3R5cGUsXCJ2YWx1ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtpZigxJnRoaXMuZil0aHJvdyBuZXcgRXJyb3IoXCJDeWNsZSBkZXRlY3RlZFwiKTt2YXIgaT1lKHRoaXMpO3RoaXMuaCgpO2lmKHZvaWQgMCE9PWkpaS5pPXRoaXMuaTtpZigxNiZ0aGlzLmYpdGhyb3cgdGhpcy52O3JldHVybiB0aGlzLnZ9fSk7ZnVuY3Rpb24gYihpLHQpe3JldHVybiBuZXcgdyhpLHQpfWZ1bmN0aW9uIF8oaSl7dmFyIG49aS51O2kudT12b2lkIDA7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbil7cysrO3ZhciBvPXI7cj12b2lkIDA7dHJ5e24oKX1jYXRjaCh0KXtpLmYmPS0yO2kuZnw9ODtwKGkpO3Rocm93IHR9ZmluYWxseXtyPW87dCgpfX19ZnVuY3Rpb24gcChpKXtmb3IodmFyIHQ9aS5zO3ZvaWQgMCE9PXQ7dD10Lm4pdC5TLlUodCk7aS54PXZvaWQgMDtpLnM9dm9pZCAwO18oaSl9ZnVuY3Rpb24gZyhpKXtpZihyIT09dGhpcyl0aHJvdyBuZXcgRXJyb3IoXCJPdXQtb2Ytb3JkZXIgZWZmZWN0XCIpO3kodGhpcyk7cj1pO3RoaXMuZiY9LTI7aWYoOCZ0aGlzLmYpcCh0aGlzKTt0KCl9ZnVuY3Rpb24gUyhpLHQpe3RoaXMueD1pO3RoaXMudT12b2lkIDA7dGhpcy5zPXZvaWQgMDt0aGlzLm89dm9pZCAwO3RoaXMuZj0zMjt0aGlzLm5hbWU9bnVsbD09dD92b2lkIDA6dC5uYW1lO2lmKGYpZi5wdXNoKHRoaXMpfVMucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLlMoKTt0cnl7aWYoOCZ0aGlzLmYpcmV0dXJuO2lmKHZvaWQgMD09PXRoaXMueClyZXR1cm47dmFyIHQ9dGhpcy54KCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCl0aGlzLnU9dH1maW5hbGx5e2koKX19O1MucHJvdG90eXBlLlM9ZnVuY3Rpb24oKXtpZigxJnRoaXMuZil0aHJvdyBuZXcgRXJyb3IoXCJDeWNsZSBkZXRlY3RlZFwiKTt0aGlzLmZ8PTE7dGhpcy5mJj0tOTtfKHRoaXMpO2wodGhpcyk7cysrO3ZhciBpPXI7cj10aGlzO3JldHVybiBnLmJpbmQodGhpcyxpKX07Uy5wcm90b3R5cGUuTj1mdW5jdGlvbigpe2lmKCEoMiZ0aGlzLmYpKXt0aGlzLmZ8PTI7dGhpcy5vPWg7aD10aGlzfX07Uy5wcm90b3R5cGUuZD1mdW5jdGlvbigpe3RoaXMuZnw9ODtpZighKDEmdGhpcy5mKSlwKHRoaXMpfTtTLnByb3RvdHlwZS5kaXNwb3NlPWZ1bmN0aW9uKCl7dGhpcy5kKCl9O2Z1bmN0aW9uIG0oaSx0KXt2YXIgbj1uZXcgUyhpLHQpO3RyeXtuLmMoKX1jYXRjaChpKXtuLmQoKTt0aHJvdyBpfXZhciByPW4uZC5iaW5kKG4pO3JbU3ltYm9sLmRpc3Bvc2VdPXI7cmV0dXJuIHJ9ZnVuY3Rpb24gRShpKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMscj10aGlzO3JldHVybiBuKGZ1bmN0aW9uKCl7cmV0dXJuIG8oZnVuY3Rpb24oKXtyZXR1cm4gaS5hcHBseShyLFtdLnNsaWNlLmNhbGwodCkpfSl9KX19ZnVuY3Rpb24geCgpe3ZhciBpPWY7Zj1bXTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1mO2lmKGYmJmkpaT1pLmNvbmNhdChmKTtmPWk7cmV0dXJuIHR9fWZ1bmN0aW9uIEMoaSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHQsbixyPXgoKTt0cnl7bj1pLmFwcGx5KHZvaWQgMCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfWNhdGNoKGkpe2Y9dm9pZCAwO3Rocm93IGl9ZmluYWxseXt0PXIoKX1mb3IodmFyIG8gaW4gbilpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuW29dKW5bb109RShuW29dKTtuW1N5bWJvbC5kaXNwb3NlXT1FKGZ1bmN0aW9uKCl7aWYodClmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKyl0W2ldLmRpc3Bvc2UoKTt0PXZvaWQgMH0pO3JldHVybiBufX1leHBvcnR7dyBhcyBDb21wdXRlZCxTIGFzIEVmZmVjdCxkIGFzIFNpZ25hbCxFIGFzIGFjdGlvbixuIGFzIGJhdGNoLGIgYXMgY29tcHV0ZWQsQyBhcyBjcmVhdGVNb2RlbCxtIGFzIGVmZmVjdCxjIGFzIHNpZ25hbCxvIGFzIHVudHJhY2tlZH07Ly8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFscy1jb3JlLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtDb21wb25lbnQgYXMgaSxvcHRpb25zIGFzIG4saXNWYWxpZEVsZW1lbnQgYXMgcixGcmFnbWVudCBhcyB0fWZyb21cInByZWFjdFwiO2ltcG9ydHt1c2VNZW1vIGFzIG8sdXNlUmVmIGFzIGYsdXNlRWZmZWN0IGFzIGV9ZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e2VmZmVjdCBhcyB1LFNpZ25hbCBhcyBhLGNvbXB1dGVkIGFzIGMsc2lnbmFsIGFzIHYsYmF0Y2ggYXMgc31mcm9tXCJAcHJlYWN0L3NpZ25hbHMtY29yZVwiO2V4cG9ydHtTaWduYWwsYWN0aW9uLGJhdGNoLGNvbXB1dGVkLGNyZWF0ZU1vZGVsLGVmZmVjdCxzaWduYWwsdW50cmFja2VkfWZyb21cIkBwcmVhY3Qvc2lnbmFscy1jb3JlXCI7dmFyIGwsZCxoLHA9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmISF3aW5kb3cuX19QUkVBQ1RfU0lHTkFMU19ERVZUT09MU19fLG09W10sXz1bXTt1KGZ1bmN0aW9uKCl7bD10aGlzLk59KSgpO2Z1bmN0aW9uIGcoaSxyKXtuW2ldPXIuYmluZChudWxsLG5baV18fGZ1bmN0aW9uKCl7fSl9ZnVuY3Rpb24gYihpKXtpZihoKXt2YXIgbj1oO2g9dm9pZCAwO24oKX1oPWkmJmkuUygpfWZ1bmN0aW9uIHkoaSl7dmFyIG49dGhpcyx0PWkuZGF0YSxmPXVzZVNpZ25hbCh0KTtmLnZhbHVlPXQ7dmFyIGU9byhmdW5jdGlvbigpe3ZhciBpPW4sdD1uLl9fdjt3aGlsZSh0PXQuX18paWYodC5fX2Mpe3QuX19jLl9fJGZ8PTQ7YnJlYWt9dmFyIG89YyhmdW5jdGlvbigpe3ZhciBpPWYudmFsdWUudmFsdWU7cmV0dXJuIDA9PT1pPzA6ITA9PT1pP1wiXCI6aXx8XCJcIn0pLGU9YyhmdW5jdGlvbigpe3JldHVybiFBcnJheS5pc0FycmF5KG8udmFsdWUpJiYhcihvLnZhbHVlKX0pLGE9dShmdW5jdGlvbigpe3RoaXMuTj1GO2lmKGUudmFsdWUpe3ZhciBuPW8udmFsdWU7aWYoaS5fX3YmJmkuX192Ll9fZSYmMz09PWkuX192Ll9fZS5ub2RlVHlwZSlpLl9fdi5fX2UuZGF0YT1ufX0pLHY9bi5fXyR1LmQ7bi5fXyR1LmQ9ZnVuY3Rpb24oKXthKCk7di5jYWxsKHRoaXMpfTtyZXR1cm5bZSxvXX0sW10pLGE9ZVswXSx2PWVbMV07cmV0dXJuIGEudmFsdWU/di5wZWVrKCk6di52YWx1ZX15LmRpc3BsYXlOYW1lPVwiUmVhY3RpdmVUZXh0Tm9kZVwiO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7Y29uZmlndXJhYmxlOiEwLHZhbHVlOnZvaWQgMH0sdHlwZTp7Y29uZmlndXJhYmxlOiEwLHZhbHVlOnl9LHByb3BzOntjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJue2RhdGE6dGhpc319fSxfX2I6e2NvbmZpZ3VyYWJsZTohMCx2YWx1ZToxfX0pO2coXCJfX2JcIixmdW5jdGlvbihpLG4pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuLnR5cGUpe3ZhciByLHQ9bi5wcm9wcztmb3IodmFyIG8gaW4gdClpZihcImNoaWxkcmVuXCIhPT1vKXt2YXIgZj10W29dO2lmKGYgaW5zdGFuY2VvZiBhKXtpZighciluLl9fbnA9cj17fTtyW29dPWY7dFtvXT1mLnBlZWsoKX19fWkobil9KTtnKFwiX19yXCIsZnVuY3Rpb24oaSxuKXtpKG4pO2lmKG4udHlwZSE9PXQpe2IoKTt2YXIgcixvPW4uX19jO2lmKG8pe28uX18kZiY9LTI7aWYodm9pZCAwPT09KHI9by5fXyR1KSlvLl9fJHU9cj1mdW5jdGlvbihpLG4pe3ZhciByO3UoZnVuY3Rpb24oKXtyPXRoaXN9LHtuYW1lOm59KTtyLmM9aTtyZXR1cm4gcn0oZnVuY3Rpb24oKXt2YXIgaTtpZihwKW51bGw9PShpPXIueSl8fGkuY2FsbChyKTtvLl9fJGZ8PTE7by5zZXRTdGF0ZSh7fSl9LFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9uLnR5cGUuZGlzcGxheU5hbWV8fG4udHlwZS5uYW1lOlwiXCIpfWQ9bztiKHIpfX0pO2coXCJfX2VcIixmdW5jdGlvbihpLG4scix0KXtiKCk7ZD12b2lkIDA7aShuLHIsdCl9KTtnKFwiZGlmZmVkXCIsZnVuY3Rpb24oaSxuKXtiKCk7ZD12b2lkIDA7dmFyIHI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSYmKHI9bi5fX2UpKXt2YXIgdD1uLl9fbnAsbz1uLnByb3BzO2lmKHQpe3ZhciBmPXIuVTtpZihmKWZvcih2YXIgZSBpbiBmKXt2YXIgdT1mW2VdO2lmKHZvaWQgMCE9PXUmJiEoZSBpbiB0KSl7dS5kKCk7ZltlXT12b2lkIDB9fWVsc2V7Zj17fTtyLlU9Zn1mb3IodmFyIGEgaW4gdCl7dmFyIGM9ZlthXSx2PXRbYV07aWYodm9pZCAwPT09Yyl7Yz13KHIsYSx2KTtmW2FdPWN9ZWxzZSBjLm8odixvKX1mb3IodmFyIHMgaW4gdClvW3NdPXRbc119fWkobil9KTtmdW5jdGlvbiB3KGksbixyLHQpe3ZhciBvPW4gaW4gaSYmdm9pZCAwPT09aS5vd25lclNWR0VsZW1lbnQsZj12KHIpLGU9ci5wZWVrKCk7cmV0dXJue286ZnVuY3Rpb24oaSxuKXtmLnZhbHVlPWk7ZT1pLnBlZWsoKX0sZDp1KGZ1bmN0aW9uKCl7dGhpcy5OPUY7dmFyIHI9Zi52YWx1ZS52YWx1ZTtpZihlIT09cil7ZT12b2lkIDA7aWYobylpW25dPXI7ZWxzZSBpZihudWxsIT1yJiYoITEhPT1yfHxcIi1cIj09PW5bNF0pKWkuc2V0QXR0cmlidXRlKG4scik7ZWxzZSBpLnJlbW92ZUF0dHJpYnV0ZShuKX1lbHNlIGU9dm9pZCAwfSl9fWcoXCJ1bm1vdW50XCIsZnVuY3Rpb24oaSxuKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbi50eXBlKXt2YXIgcj1uLl9fZTtpZihyKXt2YXIgdD1yLlU7aWYodCl7ci5VPXZvaWQgMDtmb3IodmFyIG8gaW4gdCl7dmFyIGY9dFtvXTtpZihmKWYuZCgpfX19bi5fX25wPXZvaWQgMH1lbHNle3ZhciBlPW4uX19jO2lmKGUpe3ZhciB1PWUuX18kdTtpZih1KXtlLl9fJHU9dm9pZCAwO3UuZCgpfX19aShuKX0pO2coXCJfX2hcIixmdW5jdGlvbihpLG4scix0KXtpZih0PDN8fDk9PT10KW4uX18kZnw9MjtpKG4scix0KX0pO2kucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihpLG4pe2lmKHRoaXMuX19SKXJldHVybiEwO3ZhciByPXRoaXMuX18kdSx0PXImJnZvaWQgMCE9PXIucztmb3IodmFyIG8gaW4gbilyZXR1cm4hMDtpZih0aGlzLl9fZnx8XCJib29sZWFuXCI9PXR5cGVvZiB0aGlzLnUmJiEwPT09dGhpcy51KXt2YXIgZj0yJnRoaXMuX18kZjtpZighKHR8fGZ8fDQmdGhpcy5fXyRmKSlyZXR1cm4hMDtpZigxJnRoaXMuX18kZilyZXR1cm4hMH1lbHNle2lmKCEodHx8NCZ0aGlzLl9fJGYpKXJldHVybiEwO2lmKDMmdGhpcy5fXyRmKXJldHVybiEwfWZvcih2YXIgZSBpbiBpKWlmKFwiX19zb3VyY2VcIiE9PWUmJmlbZV0hPT10aGlzLnByb3BzW2VdKXJldHVybiEwO2Zvcih2YXIgdSBpbiB0aGlzLnByb3BzKWlmKCEodSBpbiBpKSlyZXR1cm4hMDtyZXR1cm4hMX07ZnVuY3Rpb24gdXNlU2lnbmFsKGksbil7cmV0dXJuIG8oZnVuY3Rpb24oKXtyZXR1cm4gdihpLG4pfSxbXSl9ZnVuY3Rpb24gdXNlQ29tcHV0ZWQoaSxuKXt2YXIgcj1mKGkpO3IuY3VycmVudD1pO2QuX18kZnw9NDtyZXR1cm4gbyhmdW5jdGlvbigpe3JldHVybiBjKGZ1bmN0aW9uKCl7cmV0dXJuIHIuY3VycmVudCgpfSxuKX0sW10pfXZhciBrPVwidW5kZWZpbmVkXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU/c2V0VGltZW91dDpmdW5jdGlvbihpKXt2YXIgbj1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKTtjYW5jZWxBbmltYXRpb25GcmFtZSh0KTtpKCl9LHI9c2V0VGltZW91dChuLDM1KSx0PXJlcXVlc3RBbmltYXRpb25GcmFtZShuKX0scT1mdW5jdGlvbihpKXtxdWV1ZU1pY3JvdGFzayhmdW5jdGlvbigpe3F1ZXVlTWljcm90YXNrKGkpfSl9O2Z1bmN0aW9uIEEoKXtzKGZ1bmN0aW9uKCl7dmFyIGk7d2hpbGUoaT1tLnNoaWZ0KCkpbC5jYWxsKGkpfSl9ZnVuY3Rpb24gVCgpe2lmKDE9PT1tLnB1c2godGhpcykpKG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxrKShBKX1mdW5jdGlvbiB4KCl7cyhmdW5jdGlvbigpe3ZhciBpO3doaWxlKGk9Xy5zaGlmdCgpKWwuY2FsbChpKX0pfWZ1bmN0aW9uIEYoKXtpZigxPT09Xy5wdXNoKHRoaXMpKShuLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8cSkoeCl9ZnVuY3Rpb24gdXNlU2lnbmFsRWZmZWN0KGksbil7dmFyIHI9ZihpKTtyLmN1cnJlbnQ9aTtlKGZ1bmN0aW9uKCl7cmV0dXJuIHUoZnVuY3Rpb24oKXt0aGlzLk49VDtyZXR1cm4gci5jdXJyZW50KCl9LG4pfSxbXSl9ZnVuY3Rpb24gTShpKXt2YXIgbj1vKGZ1bmN0aW9uKCl7cmV0dXJuIGkoKX0sW10pO2UoZnVuY3Rpb24oKXtyZXR1cm4gbltTeW1ib2wuZGlzcG9zZV19LFtuXSk7cmV0dXJuIG59ZXhwb3J0e3VzZUNvbXB1dGVkLE0gYXMgdXNlTW9kZWwsdXNlU2lnbmFsLHVzZVNpZ25hbEVmZmVjdH07Ly8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmFscy5tb2R1bGUuanMubWFwXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5zdXBwb3J0cyA9IGZ1bmN0aW9uIHN1cHBvcnRzICguLi5tYW5pZmVzdHMpIHtcbiAgY29uc3QgbWFuaWZlc3QgPSBtYW5pZmVzdHMucmVkdWNlKChhY2MsIG0pID0+IE9iamVjdC5hc3NpZ24oYWNjLCBtKSwge30pXG5cbiAgLy8gU25hcHNob3RzIGlzIGFuIGFsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICBjb25zdCBpbXBsaWNpdFNuYXBzaG90cyA9IG1hbmlmZXN0LmltcGxpY2l0U25hcHNob3RzIHx8IG1hbmlmZXN0LnNuYXBzaG90cyB8fCBmYWxzZVxuICBjb25zdCBleHBsaWNpdFNuYXBzaG90cyA9IG1hbmlmZXN0LmV4cGxpY2l0U25hcHNob3RzIHx8IGZhbHNlXG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWFuaWZlc3QsIHtcbiAgICBpbXBsaWNpdFNuYXBzaG90cyxcbiAgICBleHBsaWNpdFNuYXBzaG90cyxcbiAgICBzbmFwc2hvdHM6IGltcGxpY2l0U25hcHNob3RzLFxuICAgIGhhczogbWFuaWZlc3QuaGFzIHx8IGZhbHNlLFxuICAgIHBlcm1hbmVuY2U6IG1hbmlmZXN0LnBlcm1hbmVuY2UgfHwgZmFsc2UsXG4gICAgc2VlazogbWFuaWZlc3Quc2VlayB8fCBmYWxzZSxcbiAgICBjcmVhdGVJZk1pc3Npbmc6IG1hbmlmZXN0LmNyZWF0ZUlmTWlzc2luZyB8fCBmYWxzZSxcbiAgICBlcnJvcklmRXhpc3RzOiBtYW5pZmVzdC5lcnJvcklmRXhpc3RzIHx8IGZhbHNlLFxuICAgIGRlZmVycmVkT3BlbjogbWFuaWZlc3QuZGVmZXJyZWRPcGVuIHx8IGZhbHNlLFxuICAgIHN0cmVhbXM6IG1hbmlmZXN0LnN0cmVhbXMgfHwgZmFsc2UsXG4gICAgZW5jb2RpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBtYW5pZmVzdC5lbmNvZGluZ3MpLFxuICAgIGV2ZW50czogT2JqZWN0LmFzc2lnbih7fSwgbWFuaWZlc3QuZXZlbnRzKSxcbiAgICBhZGRpdGlvbmFsTWV0aG9kczogT2JqZWN0LmFzc2lnbih7fSwgbWFuaWZlc3QuYWRkaXRpb25hbE1ldGhvZHMpLFxuICAgIHNpZ25hbHM6IE9iamVjdC5hc3NpZ24oe30sIG1hbmlmZXN0LnNpZ25hbHMpXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNb2R1bGVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIEVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIHt7IGNvZGU/OiBzdHJpbmcsIGNhdXNlPzogRXJyb3IsIGV4cGVjdGVkPzogYm9vbGVhbiwgdHJhbnNpZW50PzogYm9vbGVhbiB9fSBbb3B0aW9uc11cbiAgICovXG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgc3VwZXIobWVzc2FnZSB8fCAnJylcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuY29kZSkgdGhpcy5jb2RlID0gU3RyaW5nKG9wdGlvbnMuY29kZSlcbiAgICAgIGlmIChvcHRpb25zLmV4cGVjdGVkKSB0aGlzLmV4cGVjdGVkID0gdHJ1ZVxuICAgICAgaWYgKG9wdGlvbnMudHJhbnNpZW50KSB0aGlzLnRyYW5zaWVudCA9IHRydWVcbiAgICAgIGlmIChvcHRpb25zLmNhdXNlKSB0aGlzLmNhdXNlID0gb3B0aW9ucy5jYXVzZVxuICAgIH1cblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3RvcilcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohIGllZWU3NTQuIEJTRC0zLUNsYXVzZSBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG5jb25zdCBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5jb25zdCBjdXN0b21JbnNwZWN0U3ltYm9sID1cbiAgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbFsnZm9yJ10gPT09ICdmdW5jdGlvbicpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgPyBTeW1ib2xbJ2ZvciddKCdub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgOiBudWxsXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuY29uc3QgS19NQVhfTEVOR1RIID0gMHg3ZmZmZmZmZlxuZXhwb3J0cy5rTWF4TGVuZ3RoID0gS19NQVhfTEVOR1RIXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFByaW50IHdhcm5pbmcgYW5kIHJlY29tbWVuZCB1c2luZyBgYnVmZmVyYCB2NC54IHdoaWNoIGhhcyBhbiBPYmplY3RcbiAqICAgICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIFdlIHJlcG9ydCB0aGF0IHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGlmIHRoZSBhcmUgbm90IHN1YmNsYXNzYWJsZVxuICogdXNpbmcgX19wcm90b19fLiBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YFxuICogKFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4KS4gSUUgMTAgbGFja3Mgc3VwcG9ydFxuICogZm9yIF9fcHJvdG9fXyBhbmQgaGFzIGEgYnVnZ3kgdHlwZWQgYXJyYXkgaW1wbGVtZW50YXRpb24uXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gdHlwZWRBcnJheVN1cHBvcnQoKVxuXG5pZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgJ1RoaXMgYnJvd3NlciBsYWNrcyB0eXBlZCBhcnJheSAoVWludDhBcnJheSkgc3VwcG9ydCB3aGljaCBpcyByZXF1aXJlZCBieSAnICtcbiAgICAnYGJ1ZmZlcmAgdjUueC4gVXNlIGBidWZmZXJgIHY0LnggaWYgeW91IHJlcXVpcmUgb2xkIGJyb3dzZXIgc3VwcG9ydC4nXG4gIClcbn1cblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICAvLyBDYW4gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWQ/XG4gIHRyeSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBjb25zdCBwcm90byA9IHsgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9IH1cbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvdG8sIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihhcnIsIHByb3RvKVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ3BhcmVudCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5idWZmZXJcbiAgfVxufSlcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdvZmZzZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnl0ZU9mZnNldFxuICB9XG59KVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAobGVuZ3RoID4gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBsZW5ndGggKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBjb25zdCBidWYgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG4gIHJldHVybiBidWZcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZShhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20oYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG5mdW5jdGlvbiBmcm9tICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHZhbHVlKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlWaWV3KHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICAgIClcbiAgfVxuXG4gIGlmIChpc0luc3RhbmNlKHZhbHVlLCBBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgQXJyYXlCdWZmZXIpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAoaXNJbnN0YW5jZSh2YWx1ZSwgU2hhcmVkQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIFNoYXJlZEFycmF5QnVmZmVyKSkpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHZhbHVlT2YgPSB2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKVxuICBpZiAodmFsdWVPZiAhPSBudWxsICYmIHZhbHVlT2YgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlT2YsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGNvbnN0IGIgPSBmcm9tT2JqZWN0KHZhbHVlKVxuICBpZiAoYikgcmV0dXJuIGJcblxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvUHJpbWl0aXZlICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0oJ3N0cmluZycpLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gIClcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG4vLyBOb3RlOiBDaGFuZ2UgcHJvdG90eXBlICphZnRlciogQnVmZmVyLmZyb20gaXMgZGVmaW5lZCB0byB3b3JrYXJvdW5kIENocm9tZSBidWc6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzE0OFxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlci5wcm90b3R5cGUsIFVpbnQ4QXJyYXkucHJvdG90eXBlKVxuT2JqZWN0LnNldFByb3RvdHlwZU9mKEJ1ZmZlciwgVWludDhBcnJheSlcblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIHNpemUgKyAnXCIgaXMgaW52YWxpZCBmb3Igb3B0aW9uIFwic2l6ZVwiJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgbGV0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG5cbiAgY29uc3QgYWN0dWFsID0gYnVmLndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICBidWYgPSBidWYuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlIChhcnJheSkge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgY29uc3QgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZltpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlWaWV3IChhcnJheVZpZXcpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYXJyYXlWaWV3LCBVaW50OEFycmF5KSkge1xuICAgIGNvbnN0IGNvcHkgPSBuZXcgVWludDhBcnJheShhcnJheVZpZXcpXG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcihjb3B5LmJ1ZmZlciwgY29weS5ieXRlT2Zmc2V0LCBjb3B5LmJ5dGVMZW5ndGgpXG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheUxpa2UoYXJyYXlWaWV3KVxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wib2Zmc2V0XCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJsZW5ndGhcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgbGV0IGJ1ZlxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICBjb25zdCBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW4pXG5cbiAgICBpZiAoYnVmLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJ1ZlxuICAgIH1cblxuICAgIG9iai5jb3B5KGJ1ZiwgMCwgMCwgbGVuKVxuICAgIHJldHVybiBidWZcbiAgfVxuXG4gIGlmIChvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IG51bWJlcklzTmFOKG9iai5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKDApXG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iailcbiAgfVxuXG4gIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmouZGF0YSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwgS19NQVhfTEVOR1RIYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBLX01BWF9MRU5HVEgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiBiICE9IG51bGwgJiYgYi5faXNCdWZmZXIgPT09IHRydWUgJiZcbiAgICBiICE9PSBCdWZmZXIucHJvdG90eXBlIC8vIHNvIEJ1ZmZlci5pc0J1ZmZlcihCdWZmZXIucHJvdG90eXBlKSB3aWxsIGJlIGZhbHNlXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoaXNJbnN0YW5jZShhLCBVaW50OEFycmF5KSkgYSA9IEJ1ZmZlci5mcm9tKGEsIGEub2Zmc2V0LCBhLmJ5dGVMZW5ndGgpXG4gIGlmIChpc0luc3RhbmNlKGIsIFVpbnQ4QXJyYXkpKSBiID0gQnVmZmVyLmZyb20oYiwgYi5vZmZzZXQsIGIuYnl0ZUxlbmd0aClcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwiYnVmMVwiLCBcImJ1ZjJcIiBhcmd1bWVudHMgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheSdcbiAgICApXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICBsZXQgeCA9IGEubGVuZ3RoXG4gIGxldCB5ID0gYi5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIGxldCBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgbGV0IHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgYnVmID0gbGlzdFtpXVxuICAgIGlmIChpc0luc3RhbmNlKGJ1ZiwgVWludDhBcnJheSkpIHtcbiAgICAgIGlmIChwb3MgKyBidWYubGVuZ3RoID4gYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSBCdWZmZXIuZnJvbShidWYpXG4gICAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIGJ1ZixcbiAgICAgICAgICBwb3NcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICB9XG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgaXNJbnN0YW5jZShzdHJpbmcsIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwic3RyaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgb3IgQXJyYXlCdWZmZXIuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBzdHJpbmdcbiAgICApXG4gIH1cblxuICBjb25zdCBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGNvbnN0IG11c3RNYXRjaCA9IChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gPT09IHRydWUpXG4gIGlmICghbXVzdE1hdGNoICYmIGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkge1xuICAgICAgICAgIHJldHVybiBtdXN0TWF0Y2ggPyAtMSA6IHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2VyY2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgKGFuZCB0aGUgYGlzLWJ1ZmZlcmAgbnBtIHBhY2thZ2UpXG4vLyB0byBkZXRlY3QgYSBCdWZmZXIgaW5zdGFuY2UuIEl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBgaW5zdGFuY2VvZiBCdWZmZXJgXG4vLyByZWxpYWJseSBpbiBhIGJyb3dzZXJpZnkgY29udGV4dCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIGRpZmZlcmVudFxuLy8gY29waWVzIG9mIHRoZSAnYnVmZmVyJyBwYWNrYWdlIGluIHVzZS4gVGhpcyBtZXRob2Qgd29ya3MgZXZlbiBmb3IgQnVmZmVyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgZnJvbSBhbm90aGVyIGNvcHkgb2YgdGhlIGBidWZmZXJgIHBhY2thZ2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNTRcbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIGNvbnN0IGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvTG9jYWxlU3RyaW5nID0gQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZ1xuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIGxldCBzdHIgPSAnJ1xuICBjb25zdCBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkucmVwbGFjZSgvKC57Mn0pL2csICckMSAnKS50cmltKClcbiAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuaWYgKGN1c3RvbUluc3BlY3RTeW1ib2wpIHtcbiAgQnVmZmVyLnByb3RvdHlwZVtjdXN0b21JbnNwZWN0U3ltYm9sXSA9IEJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoaXNJbnN0YW5jZSh0YXJnZXQsIFVpbnQ4QXJyYXkpKSB7XG4gICAgdGFyZ2V0ID0gQnVmZmVyLmZyb20odGFyZ2V0LCB0YXJnZXQub2Zmc2V0LCB0YXJnZXQuYnl0ZUxlbmd0aClcbiAgfVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ0YXJnZXRcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5LiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHRhcmdldClcbiAgICApXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICBsZXQgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgbGV0IHkgPSBlbmQgLSBzdGFydFxuICBjb25zdCBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIGNvbnN0IHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIGNvbnN0IHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0IC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChudW1iZXJJc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFt2YWxdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICBsZXQgaW5kZXhTaXplID0gMVxuICBsZXQgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICBsZXQgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICBsZXQgaVxuICBpZiAoZGlyKSB7XG4gICAgbGV0IGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICBjb25zdCByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChudW1iZXJJc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoID4+PiAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIGNvbnN0IHJlcyA9IFtdXG5cbiAgbGV0IGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIGxldCBjb2RlUG9pbnQgPSBudWxsXG4gICAgbGV0IGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRilcbiAgICAgID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERilcbiAgICAgICAgICA/IDNcbiAgICAgICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKVxuICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICBsZXQgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG5jb25zdCBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgY29uc3QgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICBsZXQgcmVzID0gJydcbiAgbGV0IGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGxldCByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgbGV0IG91dCA9ICcnXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IGhleFNsaWNlTG9va3VwVGFibGVbYnVmW2ldXVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgbGV0IHJlcyA9ICcnXG4gIC8vIElmIGJ5dGVzLmxlbmd0aCBpcyBvZGQsIHRoZSBsYXN0IDggYml0cyBtdXN0IGJlIGlnbm9yZWQgKHNhbWUgYXMgbm9kZS5qcylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIChieXRlc1tpICsgMV0gKiAyNTYpKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgY29uc3QgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YobmV3QnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldF1cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICBsZXQgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRMRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGxvID0gZmlyc3QgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAyNFxuXG4gIGNvbnN0IGhpID0gdGhpc1srK29mZnNldF0gK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIGxhc3QgKiAyICoqIDI0XG5cbiAgcmV0dXJuIEJpZ0ludChsbykgKyAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnVUludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ1VJbnQ2NEJFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgaGkgPSBmaXJzdCAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgY29uc3QgbG8gPSB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIGxhc3RcblxuICByZXR1cm4gKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSkgKyBCaWdJbnQobG8pXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoXG4gIGxldCBtdWwgPSAxXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ0ludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ0ludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldCArIDRdICtcbiAgICB0aGlzW29mZnNldCArIDVdICogMiAqKiA4ICtcbiAgICB0aGlzW29mZnNldCArIDZdICogMiAqKiAxNiArXG4gICAgKGxhc3QgPDwgMjQpIC8vIE92ZXJmbG93XG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NEJFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gKGZpcnN0IDw8IDI0KSArIC8vIE92ZXJmbG93XG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF1cblxuICByZXR1cm4gKEJpZ0ludCh2YWwpIDw8IEJpZ0ludCgzMikpICtcbiAgICBCaWdJbnQodGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRMRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbGV0IGhpID0gTnVtYmVyKHZhbHVlID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICByZXR1cm4gb2Zmc2V0XG59XG5cbmZ1bmN0aW9uIHdydEJpZ1VJbnQ2NEJFIChidWYsIHZhbHVlLCBvZmZzZXQsIG1pbiwgbWF4KSB7XG4gIGNoZWNrSW50QkkodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgNylcblxuICBsZXQgbG8gPSBOdW1iZXIodmFsdWUgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQgKyA3XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNl0gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDVdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA0XSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgM10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCArIDJdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAxXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0XSA9IGhpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NExFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0TEUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnVUludDY0QkUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRCRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBCaWdJbnQoMCksIEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIGxldCBpID0gMFxuICBsZXQgbXVsID0gMVxuICBsZXQgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IGxpbWl0ID0gTWF0aC5wb3coMiwgKDggKiBieXRlTGVuZ3RoKSAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgLUJpZ0ludCgnMHg4MDAwMDAwMDAwMDAwMDAwJyksIEJpZ0ludCgnMHg3ZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzaG91bGQgYmUgYSBCdWZmZXInKVxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgY29uc3QgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVXNlIGJ1aWx0LWluIHdoZW4gYXZhaWxhYmxlLCBtaXNzaW5nIGZyb20gSUUxMVxuICAgIHRoaXMuY29weVdpdGhpbih0YXJnZXRTdGFydCwgc3RhcnQsIGVuZClcbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmICgoZW5jb2RpbmcgPT09ICd1dGY4JyAmJiBjb2RlIDwgMTI4KSB8fFxuICAgICAgICAgIGVuY29kaW5nID09PSAnbGF0aW4xJykge1xuICAgICAgICAvLyBGYXN0IHBhdGg6IElmIGB2YWxgIGZpdHMgaW50byBhIHNpbmdsZSBieXRlLCB1c2UgdGhhdCBudW1lcmljIHZhbHVlLlxuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbClcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICBsZXQgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gICAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHZhbHVlIFwiJyArIHZhbCArXG4gICAgICAgICdcIiBpcyBpbnZhbGlkIGZvciBhcmd1bWVudCBcInZhbHVlXCInKVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBDVVNUT00gRVJST1JTXG4vLyA9PT09PT09PT09PT09XG5cbi8vIFNpbXBsaWZpZWQgdmVyc2lvbnMgZnJvbSBOb2RlLCBjaGFuZ2VkIGZvciBCdWZmZXItb25seSB1c2FnZVxuY29uc3QgZXJyb3JzID0ge31cbmZ1bmN0aW9uIEUgKHN5bSwgZ2V0TWVzc2FnZSwgQmFzZSkge1xuICBlcnJvcnNbc3ltXSA9IGNsYXNzIE5vZGVFcnJvciBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKClcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdtZXNzYWdlJywge1xuICAgICAgICB2YWx1ZTogZ2V0TWVzc2FnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGQgdGhlIGVycm9yIGNvZGUgdG8gdGhlIG5hbWUgdG8gaW5jbHVkZSBpdCBpbiB0aGUgc3RhY2sgdHJhY2UuXG4gICAgICB0aGlzLm5hbWUgPSBgJHt0aGlzLm5hbWV9IFske3N5bX1dYFxuICAgICAgLy8gQWNjZXNzIHRoZSBzdGFjayB0byBnZW5lcmF0ZSB0aGUgZXJyb3IgbWVzc2FnZSBpbmNsdWRpbmcgdGhlIGVycm9yIGNvZGVcbiAgICAgIC8vIGZyb20gdGhlIG5hbWUuXG4gICAgICB0aGlzLnN0YWNrIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAvLyBSZXNldCB0aGUgbmFtZSB0byB0aGUgYWN0dWFsIG5hbWUuXG4gICAgICBkZWxldGUgdGhpcy5uYW1lXG4gICAgfVxuXG4gICAgZ2V0IGNvZGUgKCkge1xuICAgICAgcmV0dXJuIHN5bVxuICAgIH1cblxuICAgIHNldCBjb2RlICh2YWx1ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2RlJywge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b1N0cmluZyAoKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSBbJHtzeW19XTogJHt0aGlzLm1lc3NhZ2V9YFxuICAgIH1cbiAgfVxufVxuXG5FKCdFUlJfQlVGRkVSX09VVF9PRl9CT1VORFMnLFxuICBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gYCR7bmFtZX0gaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzYFxuICAgIH1cblxuICAgIHJldHVybiAnQXR0ZW1wdCB0byBhY2Nlc3MgbWVtb3J5IG91dHNpZGUgYnVmZmVyIGJvdW5kcydcbiAgfSwgUmFuZ2VFcnJvcilcbkUoJ0VSUl9JTlZBTElEX0FSR19UWVBFJyxcbiAgZnVuY3Rpb24gKG5hbWUsIGFjdHVhbCkge1xuICAgIHJldHVybiBgVGhlIFwiJHtuYW1lfVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgYWN0dWFsfWBcbiAgfSwgVHlwZUVycm9yKVxuRSgnRVJSX09VVF9PRl9SQU5HRScsXG4gIGZ1bmN0aW9uIChzdHIsIHJhbmdlLCBpbnB1dCkge1xuICAgIGxldCBtc2cgPSBgVGhlIHZhbHVlIG9mIFwiJHtzdHJ9XCIgaXMgb3V0IG9mIHJhbmdlLmBcbiAgICBsZXQgcmVjZWl2ZWQgPSBpbnB1dFxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGlucHV0KSAmJiBNYXRoLmFicyhpbnB1dCkgPiAyICoqIDMyKSB7XG4gICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihTdHJpbmcoaW5wdXQpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnYmlnaW50Jykge1xuICAgICAgcmVjZWl2ZWQgPSBTdHJpbmcoaW5wdXQpXG4gICAgICBpZiAoaW5wdXQgPiBCaWdJbnQoMikgKiogQmlnSW50KDMyKSB8fCBpbnB1dCA8IC0oQmlnSW50KDIpICoqIEJpZ0ludCgzMikpKSB7XG4gICAgICAgIHJlY2VpdmVkID0gYWRkTnVtZXJpY2FsU2VwYXJhdG9yKHJlY2VpdmVkKVxuICAgICAgfVxuICAgICAgcmVjZWl2ZWQgKz0gJ24nXG4gICAgfVxuICAgIG1zZyArPSBgIEl0IG11c3QgYmUgJHtyYW5nZX0uIFJlY2VpdmVkICR7cmVjZWl2ZWR9YFxuICAgIHJldHVybiBtc2dcbiAgfSwgUmFuZ2VFcnJvcilcblxuZnVuY3Rpb24gYWRkTnVtZXJpY2FsU2VwYXJhdG9yICh2YWwpIHtcbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gdmFsLmxlbmd0aFxuICBjb25zdCBzdGFydCA9IHZhbFswXSA9PT0gJy0nID8gMSA6IDBcbiAgZm9yICg7IGkgPj0gc3RhcnQgKyA0OyBpIC09IDMpIHtcbiAgICByZXMgPSBgXyR7dmFsLnNsaWNlKGkgLSAzLCBpKX0ke3Jlc31gXG4gIH1cbiAgcmV0dXJuIGAke3ZhbC5zbGljZSgwLCBpKX0ke3Jlc31gXG59XG5cbi8vIENIRUNLIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNoZWNrQm91bmRzIChidWYsIG9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBpZiAoYnVmW29mZnNldF0gPT09IHVuZGVmaW5lZCB8fCBidWZbb2Zmc2V0ICsgYnl0ZUxlbmd0aF0gPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgYnVmLmxlbmd0aCAtIChieXRlTGVuZ3RoICsgMSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tJbnRCSSAodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgYnl0ZUxlbmd0aCkge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHtcbiAgICBjb25zdCBuID0gdHlwZW9mIG1pbiA9PT0gJ2JpZ2ludCcgPyAnbicgOiAnJ1xuICAgIGxldCByYW5nZVxuICAgIGlmIChieXRlTGVuZ3RoID4gMykge1xuICAgICAgaWYgKG1pbiA9PT0gMCB8fCBtaW4gPT09IEJpZ0ludCgwKSkge1xuICAgICAgICByYW5nZSA9IGA+PSAwJHtufSBhbmQgPCAyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4fSR7bn1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZSA9IGA+PSAtKDIke259ICoqICR7KGJ5dGVMZW5ndGggKyAxKSAqIDggLSAxfSR7bn0pIGFuZCA8IDIgKiogYCArXG4gICAgICAgICAgICAgICAgYCR7KGJ5dGVMZW5ndGggKyAxKSAqIDggLSAxfSR7bn1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlID0gYD49ICR7bWlufSR7bn0gYW5kIDw9ICR7bWF4fSR7bn1gXG4gICAgfVxuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSgndmFsdWUnLCByYW5nZSwgdmFsdWUpXG4gIH1cbiAgY2hlY2tCb3VuZHMoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyICh2YWx1ZSwgbmFtZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0lOVkFMSURfQVJHX1RZUEUobmFtZSwgJ251bWJlcicsIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvdW5kc0Vycm9yICh2YWx1ZSwgbGVuZ3RoLCB0eXBlKSB7XG4gIGlmIChNYXRoLmZsb29yKHZhbHVlKSAhPT0gdmFsdWUpIHtcbiAgICB2YWxpZGF0ZU51bWJlcih2YWx1ZSwgdHlwZSlcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UodHlwZSB8fCAnb2Zmc2V0JywgJ2FuIGludGVnZXInLCB2YWx1ZSlcbiAgfVxuXG4gIGlmIChsZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfQlVGRkVSX09VVF9PRl9CT1VORFMoKVxuICB9XG5cbiAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPj0gJHt0eXBlID8gMSA6IDB9IGFuZCA8PSAke2xlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUpXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuY29uc3QgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSB0YWtlcyBlcXVhbCBzaWducyBhcyBlbmQgb2YgdGhlIEJhc2U2NCBlbmNvZGluZ1xuICBzdHIgPSBzdHIuc3BsaXQoJz0nKVswXVxuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyLnRyaW0oKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIGxldCBjb2RlUG9pbnRcbiAgY29uc3QgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICBsZXQgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgY29uc3QgYnl0ZXMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICBjb25zdCBieXRlQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIGxldCBjLCBoaSwgbG9cbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBsZXQgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuLy8gQXJyYXlCdWZmZXIgb3IgVWludDhBcnJheSBvYmplY3RzIGZyb20gb3RoZXIgY29udGV4dHMgKGkuZS4gaWZyYW1lcykgZG8gbm90IHBhc3Ncbi8vIHRoZSBgaW5zdGFuY2VvZmAgY2hlY2sgYnV0IHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgb2YgdGhhdCB0eXBlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTY2XG5mdW5jdGlvbiBpc0luc3RhbmNlIChvYmosIHR5cGUpIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHR5cGUgfHxcbiAgICAob2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT0gbnVsbCAmJlxuICAgICAgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09IHR5cGUubmFtZSlcbn1cbmZ1bmN0aW9uIG51bWJlcklzTmFOIChvYmopIHtcbiAgLy8gRm9yIElFMTEgc3VwcG9ydFxuICByZXR1cm4gb2JqICE9PSBvYmogLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cblxuLy8gQ3JlYXRlIGxvb2t1cCB0YWJsZSBmb3IgYHRvU3RyaW5nKCdoZXgnKWBcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzIxOVxuY29uc3QgaGV4U2xpY2VMb29rdXBUYWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFscGhhYmV0ID0gJzAxMjM0NTY3ODlhYmNkZWYnXG4gIGNvbnN0IHRhYmxlID0gbmV3IEFycmF5KDI1NilcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgY29uc3QgaTE2ID0gaSAqIDE2XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICB0YWJsZVtpMTYgKyBqXSA9IGFscGhhYmV0W2ldICsgYWxwaGFiZXRbal1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhYmxlXG59KSgpXG5cbi8vIFJldHVybiBub3QgZnVuY3Rpb24gd2l0aCBFcnJvciBpZiBCaWdJbnQgbm90IHN1cHBvcnRlZFxuZnVuY3Rpb24gZGVmaW5lQmlnSW50TWV0aG9kIChmbikge1xuICByZXR1cm4gdHlwZW9mIEJpZ0ludCA9PT0gJ3VuZGVmaW5lZCcgPyBCdWZmZXJCaWdJbnROb3REZWZpbmVkIDogZm5cbn1cblxuZnVuY3Rpb24gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCAoKSB7XG4gIHRocm93IG5ldyBFcnJvcignQmlnSW50IG5vdCBzdXBwb3J0ZWQnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKiBAdHlwZSB7eyB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiBUZXh0RGVjb2RlciB9fG51bGx9ICovXG5sZXQgbGF6eSA9IG51bGxcblxuLyoqXG4gKiBHZXQgc2VtaS1nbG9iYWwgaW5zdGFuY2VzIG9mIFRleHRFbmNvZGVyIGFuZCBUZXh0RGVjb2Rlci5cbiAqIEByZXR1cm5zIHt7IHRleHRFbmNvZGVyOiBUZXh0RW5jb2RlciwgdGV4dERlY29kZXI6IFRleHREZWNvZGVyIH19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAobGF6eSA9PT0gbnVsbCkge1xuICAgIGxhenkgPSB7XG4gICAgICB0ZXh0RW5jb2RlcjogbmV3IFRleHRFbmNvZGVyKCksXG4gICAgICB0ZXh0RGVjb2RlcjogbmV3IFRleHREZWNvZGVyKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGF6eVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IE1vZHVsZUVycm9yID0gcmVxdWlyZSgnbW9kdWxlLWVycm9yJylcbmNvbnN0IGZvcm1hdHMgPSBuZXcgU2V0KFsnYnVmZmVyJywgJ3ZpZXcnLCAndXRmOCddKVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRGb3JtYXQsIFRPdXRcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBFbmNvZGluZyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0lFbmNvZGluZzxUSW4sVEZvcm1hdCxUT3V0Pn0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICAvKiogQHR5cGUgeyhkYXRhOiBUSW4pID0+IFRGb3JtYXR9ICovXG4gICAgdGhpcy5lbmNvZGUgPSBvcHRpb25zLmVuY29kZSB8fCB0aGlzLmVuY29kZVxuXG4gICAgLyoqIEB0eXBlIHsoZGF0YTogVEZvcm1hdCkgPT4gVE91dH0gKi9cbiAgICB0aGlzLmRlY29kZSA9IG9wdGlvbnMuZGVjb2RlIHx8IHRoaXMuZGVjb2RlXG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5uYW1lXG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLmZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IHRoaXMuZm9ybWF0XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuZW5jb2RlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlICdlbmNvZGUnIHByb3BlcnR5IG11c3QgYmUgYSBmdW5jdGlvblwiKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5kZWNvZGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2RlY29kZScgcHJvcGVydHkgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpXG4gICAgfVxuXG4gICAgdGhpcy5lbmNvZGUgPSB0aGlzLmVuY29kZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWNvZGUgPSB0aGlzLmRlY29kZS5iaW5kKHRoaXMpXG5cbiAgICBpZiAodHlwZW9mIHRoaXMubmFtZSAhPT0gJ3N0cmluZycgfHwgdGhpcy5uYW1lID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSAnbmFtZScgcHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZ1wiKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5mb3JtYXQgIT09ICdzdHJpbmcnIHx8ICFmb3JtYXRzLmhhcyh0aGlzLmZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgJ2Zvcm1hdCcgcHJvcGVydHkgbXVzdCBiZSBvbmUgb2YgJ2J1ZmZlcicsICd2aWV3JywgJ3V0ZjgnXCIpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlVmlld1RyYW5zY29kZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlVmlld1RyYW5zY29kZXIgPSBvcHRpb25zLmNyZWF0ZVZpZXdUcmFuc2NvZGVyXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlQnVmZmVyVHJhbnNjb2Rlcikge1xuICAgICAgdGhpcy5jcmVhdGVCdWZmZXJUcmFuc2NvZGVyID0gb3B0aW9ucy5jcmVhdGVCdWZmZXJUcmFuc2NvZGVyXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlVVRGOFRyYW5zY29kZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlVVRGOFRyYW5zY29kZXIgPSBvcHRpb25zLmNyZWF0ZVVURjhUcmFuc2NvZGVyXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbW1vbk5hbWUgKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKHRoaXMubmFtZS5zcGxpdCgnKycpWzBdKVxuICB9XG5cbiAgLyoqIEByZXR1cm4ge0J1ZmZlckZvcm1hdDxUSW4sVE91dD59ICovXG4gIGNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgKCkge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgRW5jb2RpbmcgJyR7dGhpcy5uYW1lfScgY2Fubm90IGJlIHRyYW5zY29kZWQgdG8gJ2J1ZmZlcidgLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfRU5DT0RJTkdfTk9UX1NVUFBPUlRFRCdcbiAgICB9KVxuICB9XG5cbiAgLyoqIEByZXR1cm4ge1ZpZXdGb3JtYXQ8VEluLFRPdXQ+fSAqL1xuICBjcmVhdGVWaWV3VHJhbnNjb2RlciAoKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBFbmNvZGluZyAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgdHJhbnNjb2RlZCB0byAndmlldydgLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfRU5DT0RJTkdfTk9UX1NVUFBPUlRFRCdcbiAgICB9KVxuICB9XG5cbiAgLyoqIEByZXR1cm4ge1VURjhGb3JtYXQ8VEluLFRPdXQ+fSAqL1xuICBjcmVhdGVVVEY4VHJhbnNjb2RlciAoKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBFbmNvZGluZyAnJHt0aGlzLm5hbWV9JyBjYW5ub3QgYmUgdHJhbnNjb2RlZCB0byAndXRmOCdgLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfRU5DT0RJTkdfTk9UX1NVUFBPUlRFRCdcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydHMuRW5jb2RpbmcgPSBFbmNvZGluZ1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZW5jb2RpbmcnKS5JRW5jb2Rpbmc8VEluLFRGb3JtYXQsVE91dD59IElFbmNvZGluZ1xuICogQHRlbXBsYXRlIFRJbiwgVEZvcm1hdCwgVE91dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mb3JtYXRzJykuQnVmZmVyRm9ybWF0PFRJbixUT3V0Pn0gQnVmZmVyRm9ybWF0XG4gKiBAdGVtcGxhdGUgVEluLCBUT3V0XG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Zvcm1hdHMnKS5WaWV3Rm9ybWF0PFRJbixUT3V0Pn0gVmlld0Zvcm1hdFxuICogQHRlbXBsYXRlIFRJbiwgVE91dFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9mb3JtYXRzJykuVVRGOEZvcm1hdDxUSW4sVE91dD59IFVURjhGb3JtYXRcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRPdXRcbiAqL1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQnVmZmVyIH0gPSByZXF1aXJlKCdidWZmZXInKSB8fCB7fVxuY29uc3QgeyBFbmNvZGluZyB9ID0gcmVxdWlyZSgnLi9lbmNvZGluZycpXG5jb25zdCB0ZXh0RW5kZWMgPSByZXF1aXJlKCcuL3RleHQtZW5kZWMnKVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUSW4sIFRPdXRcbiAqIEBleHRlbmRzIHtFbmNvZGluZzxUSW4sQnVmZmVyLFRPdXQ+fVxuICovXG5jbGFzcyBCdWZmZXJGb3JtYXQgZXh0ZW5kcyBFbmNvZGluZyB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09taXQ8SUVuY29kaW5nPFRJbiwgQnVmZmVyLCBUT3V0PiwgJ2Zvcm1hdCc+fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHN1cGVyKHsgLi4ub3B0aW9ucywgZm9ybWF0OiAnYnVmZmVyJyB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVWaWV3VHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBWaWV3Rm9ybWF0KHtcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsIC8vIEJ1ZmZlciBpcyBhIHZpZXcgKFVJbnQ4QXJyYXkpXG4gICAgICBkZWNvZGU6IChkYXRhKSA9PiB0aGlzLmRlY29kZShcbiAgICAgICAgQnVmZmVyLmZyb20oZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKVxuICAgICAgKSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rdmlld2BcbiAgICB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVCdWZmZXJUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbi8qKlxuICogQGV4dGVuZHMge0VuY29kaW5nPFRJbixVaW50OEFycmF5LFRPdXQ+fVxuICogQHRlbXBsYXRlIFRJbiwgVE91dFxuICovXG5jbGFzcyBWaWV3Rm9ybWF0IGV4dGVuZHMgRW5jb2Rpbmcge1xuICAvKipcbiAgICogQHBhcmFtIHtPbWl0PElFbmNvZGluZzxUSW4sIFVpbnQ4QXJyYXksIFRPdXQ+LCAnZm9ybWF0Jz59IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIoeyAuLi5vcHRpb25zLCBmb3JtYXQ6ICd2aWV3JyB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVCdWZmZXJUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gICAgICBlbmNvZGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmVuY29kZShkYXRhKVxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20odmlldy5idWZmZXIsIHZpZXcuYnl0ZU9mZnNldCwgdmlldy5ieXRlTGVuZ3RoKVxuICAgICAgfSxcbiAgICAgIGRlY29kZTogdGhpcy5kZWNvZGUsIC8vIEJ1ZmZlciBpcyBhIHZpZXcgKFVJbnQ4QXJyYXkpXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9K2J1ZmZlcmBcbiAgICB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVWaWV3VHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG4vKipcbiAqIEBleHRlbmRzIHtFbmNvZGluZzxUSW4sc3RyaW5nLFRPdXQ+fVxuICogQHRlbXBsYXRlIFRJbiwgVE91dFxuICovXG5jbGFzcyBVVEY4Rm9ybWF0IGV4dGVuZHMgRW5jb2Rpbmcge1xuICAvKipcbiAgICogQHBhcmFtIHtPbWl0PElFbmNvZGluZzxUSW4sIHN0cmluZywgVE91dD4sICdmb3JtYXQnPn0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7IC4uLm9wdGlvbnMsIGZvcm1hdDogJ3V0ZjgnIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgICAgIGVuY29kZTogKGRhdGEpID0+IEJ1ZmZlci5mcm9tKHRoaXMuZW5jb2RlKGRhdGEpLCAndXRmOCcpLFxuICAgICAgZGVjb2RlOiAoZGF0YSkgPT4gdGhpcy5kZWNvZGUoZGF0YS50b1N0cmluZygndXRmOCcpKSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rYnVmZmVyYFxuICAgIH0pXG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGNyZWF0ZVZpZXdUcmFuc2NvZGVyICgpIHtcbiAgICBjb25zdCB7IHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciB9ID0gdGV4dEVuZGVjKClcblxuICAgIHJldHVybiBuZXcgVmlld0Zvcm1hdCh7XG4gICAgICBlbmNvZGU6IChkYXRhKSA9PiB0ZXh0RW5jb2Rlci5lbmNvZGUodGhpcy5lbmNvZGUoZGF0YSkpLFxuICAgICAgZGVjb2RlOiAoZGF0YSkgPT4gdGhpcy5kZWNvZGUodGV4dERlY29kZXIuZGVjb2RlKGRhdGEpKSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rdmlld2BcbiAgICB9KVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqL1xuICBjcmVhdGVVVEY4VHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnRzLkJ1ZmZlckZvcm1hdCA9IEJ1ZmZlckZvcm1hdFxuZXhwb3J0cy5WaWV3Rm9ybWF0ID0gVmlld0Zvcm1hdFxuZXhwb3J0cy5VVEY4Rm9ybWF0ID0gVVRGOEZvcm1hdFxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZW5jb2RpbmcnKS5JRW5jb2Rpbmc8VEluLFRGb3JtYXQsVE91dD59IElFbmNvZGluZ1xuICogQHRlbXBsYXRlIFRJbiwgVEZvcm1hdCwgVE91dFxuICovXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBCdWZmZXIgfSA9IHJlcXVpcmUoJ2J1ZmZlcicpIHx8IHsgQnVmZmVyOiB7IGlzQnVmZmVyOiAoKSA9PiBmYWxzZSB9IH1cbmNvbnN0IHsgdGV4dEVuY29kZXIsIHRleHREZWNvZGVyIH0gPSByZXF1aXJlKCcuL3RleHQtZW5kZWMnKSgpXG5jb25zdCB7IEJ1ZmZlckZvcm1hdCwgVmlld0Zvcm1hdCwgVVRGOEZvcm1hdCB9ID0gcmVxdWlyZSgnLi9mb3JtYXRzJylcblxuLyoqIEB0eXBlIHs8VD4odjogVCkgPT4gdn0gKi9cbmNvbnN0IGlkZW50aXR5ID0gKHYpID0+IHZcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9lbmNvZGluZ3MnKS51dGY4fVxuICovXG5leHBvcnRzLnV0ZjggPSBuZXcgVVRGOEZvcm1hdCh7XG4gIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBPbiBub2RlIDE2LjkuMSBidWZmZXIudG9TdHJpbmcoKSBpcyA1eCBmYXN0ZXIgdGhhbiBUZXh0RGVjb2RlclxuICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoZGF0YSlcbiAgICAgID8gZGF0YS50b1N0cmluZygndXRmOCcpXG4gICAgICA6IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKVxuICAgICAgICA/IHRleHREZWNvZGVyLmRlY29kZShkYXRhKVxuICAgICAgICA6IFN0cmluZyhkYXRhKVxuICB9LFxuICBkZWNvZGU6IGlkZW50aXR5LFxuICBuYW1lOiAndXRmOCcsXG4gIGNyZWF0ZVZpZXdUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IFZpZXdGb3JtYXQoe1xuICAgICAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpID8gZGF0YSA6IHRleHRFbmNvZGVyLmVuY29kZShkYXRhKVxuICAgICAgfSxcbiAgICAgIGRlY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRleHREZWNvZGVyLmRlY29kZShkYXRhKVxuICAgICAgfSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rdmlld2BcbiAgICB9KVxuICB9LFxuICBjcmVhdGVCdWZmZXJUcmFuc2NvZGVyICgpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gICAgICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoZGF0YSlcbiAgICAgICAgICA/IGRhdGFcbiAgICAgICAgICA6IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKVxuICAgICAgICAgICAgPyBCdWZmZXIuZnJvbShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGgpXG4gICAgICAgICAgICA6IEJ1ZmZlci5mcm9tKFN0cmluZyhkYXRhKSwgJ3V0ZjgnKVxuICAgICAgfSxcbiAgICAgIGRlY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoJ3V0ZjgnKVxuICAgICAgfSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rYnVmZmVyYFxuICAgIH0pXG4gIH1cbn0pXG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZW5jb2RpbmdzJykuanNvbn1cbiAqL1xuZXhwb3J0cy5qc29uID0gbmV3IFVURjhGb3JtYXQoe1xuICBlbmNvZGU6IEpTT04uc3RyaW5naWZ5LFxuICBkZWNvZGU6IEpTT04ucGFyc2UsXG4gIG5hbWU6ICdqc29uJ1xufSlcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9lbmNvZGluZ3MnKS5idWZmZXJ9XG4gKi9cbmV4cG9ydHMuYnVmZmVyID0gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGRhdGEpXG4gICAgICA/IGRhdGFcbiAgICAgIDogQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpXG4gICAgICAgID8gQnVmZmVyLmZyb20oZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKVxuICAgICAgICA6IEJ1ZmZlci5mcm9tKFN0cmluZyhkYXRhKSwgJ3V0ZjgnKVxuICB9LFxuICBkZWNvZGU6IGlkZW50aXR5LFxuICBuYW1lOiAnYnVmZmVyJyxcbiAgY3JlYXRlVmlld1RyYW5zY29kZXIgKCkge1xuICAgIHJldHVybiBuZXcgVmlld0Zvcm1hdCh7XG4gICAgICBlbmNvZGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBkYXRhIDogQnVmZmVyLmZyb20oU3RyaW5nKGRhdGEpLCAndXRmOCcpXG4gICAgICB9LFxuICAgICAgZGVjb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKVxuICAgICAgfSxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0rdmlld2BcbiAgICB9KVxuICB9XG59KVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5ncycpLnZpZXd9XG4gKi9cbmV4cG9ydHMudmlldyA9IG5ldyBWaWV3Rm9ybWF0KHtcbiAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkgPyBkYXRhIDogdGV4dEVuY29kZXIuZW5jb2RlKGRhdGEpXG4gIH0sXG4gIGRlY29kZTogaWRlbnRpdHksXG4gIG5hbWU6ICd2aWV3JyxcbiAgY3JlYXRlQnVmZmVyVHJhbnNjb2RlciAoKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXJGb3JtYXQoe1xuICAgICAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGRhdGEpXG4gICAgICAgICAgPyBkYXRhXG4gICAgICAgICAgOiBBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSlcbiAgICAgICAgICAgID8gQnVmZmVyLmZyb20oZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKVxuICAgICAgICAgICAgOiBCdWZmZXIuZnJvbShTdHJpbmcoZGF0YSksICd1dGY4JylcbiAgICAgIH0sXG4gICAgICBkZWNvZGU6IGlkZW50aXR5LFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfStidWZmZXJgXG4gICAgfSlcbiAgfVxufSlcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9lbmNvZGluZ3MnKS5oZXh9XG4gKi9cbmV4cG9ydHMuaGV4ID0gbmV3IEJ1ZmZlckZvcm1hdCh7XG4gIGVuY29kZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGRhdGEpID8gZGF0YSA6IEJ1ZmZlci5mcm9tKFN0cmluZyhkYXRhKSwgJ2hleCcpXG4gIH0sXG4gIGRlY29kZTogZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoJ2hleCcpXG4gIH0sXG4gIG5hbWU6ICdoZXgnXG59KVxuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2VuY29kaW5ncycpLmJhc2U2NH1cbiAqL1xuZXhwb3J0cy5iYXNlNjQgPSBuZXcgQnVmZmVyRm9ybWF0KHtcbiAgZW5jb2RlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoZGF0YSkgPyBkYXRhIDogQnVmZmVyLmZyb20oU3RyaW5nKGRhdGEpLCAnYmFzZTY0JylcbiAgfSxcbiAgZGVjb2RlOiBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0JylcbiAgfSxcbiAgbmFtZTogJ2Jhc2U2NCdcbn0pXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgZW5jb2RpbmdzID0gcmVxdWlyZSgnLi9saWIvZW5jb2RpbmdzJylcbmNvbnN0IHsgRW5jb2RpbmcgfSA9IHJlcXVpcmUoJy4vbGliL2VuY29kaW5nJylcbmNvbnN0IHsgQnVmZmVyRm9ybWF0LCBWaWV3Rm9ybWF0LCBVVEY4Rm9ybWF0IH0gPSByZXF1aXJlKCcuL2xpYi9mb3JtYXRzJylcblxuY29uc3Qga0Zvcm1hdHMgPSBTeW1ib2woJ2Zvcm1hdHMnKVxuY29uc3Qga0VuY29kaW5ncyA9IFN5bWJvbCgnZW5jb2RpbmdzJylcbmNvbnN0IHZhbGlkRm9ybWF0cyA9IG5ldyBTZXQoWydidWZmZXInLCAndmlldycsICd1dGY4J10pXG5cbi8qKiBAdGVtcGxhdGUgVCAqL1xuY2xhc3MgVHJhbnNjb2RlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0FycmF5PCdidWZmZXInfCd2aWV3J3wndXRmOCc+fSBmb3JtYXRzXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoZm9ybWF0cykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtYXRzKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCAnZm9ybWF0cycgbXVzdCBiZSBhbiBhcnJheVwiKVxuICAgIH0gZWxzZSBpZiAoIWZvcm1hdHMuZXZlcnkoZiA9PiB2YWxpZEZvcm1hdHMuaGFzKGYpKSkge1xuICAgICAgLy8gTm90ZTogd2Ugb25seSBvbmx5IHN1cHBvcnQgYWxpYXNlcyBpbiBrZXktIGFuZCB2YWx1ZUVuY29kaW5nIG9wdGlvbnMgKHdoZXJlIHdlIGFscmVhZHkgZGlkKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZvcm1hdCBtdXN0IGJlIG9uZSBvZiAnYnVmZmVyJywgJ3ZpZXcnLCAndXRmOCdcIilcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge01hcDxzdHJpbmd8TWl4ZWRFbmNvZGluZzxhbnksIGFueSwgYW55PiwgRW5jb2Rpbmc8YW55LCBhbnksIGFueT4+fSAqL1xuICAgIHRoaXNba0VuY29kaW5nc10gPSBuZXcgTWFwKClcbiAgICB0aGlzW2tGb3JtYXRzXSA9IG5ldyBTZXQoZm9ybWF0cylcblxuICAgIC8vIFJlZ2lzdGVyIGVuY29kaW5ncyAoZG9uZSBlYXJseSBpbiBvcmRlciB0byBwb3B1bGF0ZSBlbmNvZGluZ3MoKSlcbiAgICBmb3IgKGNvbnN0IGsgaW4gZW5jb2RpbmdzKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmVuY29kaW5nKGspXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmOiBhc3NlcnRpb24gKi9cbiAgICAgICAgaWYgKGVyci5jb2RlICE9PSAnTEVWRUxfRU5DT0RJTkdfTk9UX1NVUFBPUlRFRCcpIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7QXJyYXk8RW5jb2Rpbmc8YW55LFQsYW55Pj59XG4gICAqL1xuICBlbmNvZGluZ3MgKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQodGhpc1trRW5jb2RpbmdzXS52YWx1ZXMoKSkpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd8TWl4ZWRFbmNvZGluZzxhbnksIGFueSwgYW55Pn0gZW5jb2RpbmdcbiAgICogQHJldHVybnMge0VuY29kaW5nPGFueSwgVCwgYW55Pn1cbiAgICovXG4gIGVuY29kaW5nIChlbmNvZGluZykge1xuICAgIGxldCByZXNvbHZlZCA9IHRoaXNba0VuY29kaW5nc10uZ2V0KGVuY29kaW5nKVxuXG4gICAgaWYgKHJlc29sdmVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmIGVuY29kaW5nICE9PSAnJykge1xuICAgICAgICByZXNvbHZlZCA9IGxvb2t1cFtlbmNvZGluZ11cblxuICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBFbmNvZGluZyAnJHtlbmNvZGluZ30nIGlzIG5vdCBmb3VuZGAsIHtcbiAgICAgICAgICAgIGNvZGU6ICdMRVZFTF9FTkNPRElOR19OT1RfRk9VTkQnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdvYmplY3QnIHx8IGVuY29kaW5nID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBhcmd1bWVudCAnZW5jb2RpbmcnIG11c3QgYmUgYSBzdHJpbmcgb3Igb2JqZWN0XCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlZCA9IGZyb20oZW5jb2RpbmcpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgbmFtZSwgZm9ybWF0IH0gPSByZXNvbHZlZFxuXG4gICAgICBpZiAoIXRoaXNba0Zvcm1hdHNdLmhhcyhmb3JtYXQpKSB7XG4gICAgICAgIGlmICh0aGlzW2tGb3JtYXRzXS5oYXMoJ3ZpZXcnKSkge1xuICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWQuY3JlYXRlVmlld1RyYW5zY29kZXIoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXNba0Zvcm1hdHNdLmhhcygnYnVmZmVyJykpIHtcbiAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkLmNyZWF0ZUJ1ZmZlclRyYW5zY29kZXIoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXNba0Zvcm1hdHNdLmhhcygndXRmOCcpKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZC5jcmVhdGVVVEY4VHJhbnNjb2RlcigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBFbmNvZGluZyAnJHtuYW1lfScgY2Fubm90IGJlIHRyYW5zY29kZWRgLCB7XG4gICAgICAgICAgICBjb2RlOiAnTEVWRUxfRU5DT0RJTkdfTk9UX1NVUFBPUlRFRCdcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgayBvZiBbZW5jb2RpbmcsIG5hbWUsIHJlc29sdmVkLm5hbWUsIHJlc29sdmVkLmNvbW1vbk5hbWVdKSB7XG4gICAgICAgIHRoaXNba0VuY29kaW5nc10uc2V0KGssIHJlc29sdmVkKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlZFxuICB9XG59XG5cbmV4cG9ydHMuVHJhbnNjb2RlciA9IFRyYW5zY29kZXJcblxuLyoqXG4gKiBAcGFyYW0ge01peGVkRW5jb2Rpbmc8YW55LCBhbnksIGFueT59IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtFbmNvZGluZzxhbnksIGFueSwgYW55Pn1cbiAqL1xuZnVuY3Rpb24gZnJvbSAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEVuY29kaW5nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIC8vIExvb3NlbHkgdHlwZWQgZm9yIGVjb3N5c3RlbSBjb21wYXRpYmlsaXR5XG4gIGNvbnN0IG1heWJlVHlwZSA9ICd0eXBlJyBpbiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLnR5cGUgPT09ICdzdHJpbmcnID8gb3B0aW9ucy50eXBlIDogdW5kZWZpbmVkXG4gIGNvbnN0IG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgbWF5YmVUeXBlIHx8IGBhbm9ueW1vdXMtJHthbm9ueW1vdXNDb3VudCsrfWBcblxuICBzd2l0Y2ggKGRldGVjdEZvcm1hdChvcHRpb25zKSkge1xuICAgIGNhc2UgJ3ZpZXcnOiByZXR1cm4gbmV3IFZpZXdGb3JtYXQoeyAuLi5vcHRpb25zLCBuYW1lIH0pXG4gICAgY2FzZSAndXRmOCc6IHJldHVybiBuZXcgVVRGOEZvcm1hdCh7IC4uLm9wdGlvbnMsIG5hbWUgfSlcbiAgICBjYXNlICdidWZmZXInOiByZXR1cm4gbmV3IEJ1ZmZlckZvcm1hdCh7IC4uLm9wdGlvbnMsIG5hbWUgfSlcbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRm9ybWF0IG11c3QgYmUgb25lIG9mICdidWZmZXInLCAndmlldycsICd1dGY4J1wiKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIElmIGZvcm1hdCBpcyBub3QgcHJvdmlkZWQsIGZhbGxiYWNrIHRvIGRldGVjdGluZyBgbGV2ZWwtY29kZWNgXG4gKiBvciBgbXVsdGlmb3JtYXRzYCBlbmNvZGluZ3MsIGVsc2UgYXNzdW1lIGEgZm9ybWF0IG9mIGJ1ZmZlci5cbiAqIEBwYXJhbSB7TWl4ZWRFbmNvZGluZzxhbnksIGFueSwgYW55Pn0gb3B0aW9uc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0Rm9ybWF0IChvcHRpb25zKSB7XG4gIGlmICgnZm9ybWF0JyBpbiBvcHRpb25zICYmIG9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5mb3JtYXRcbiAgfSBlbHNlIGlmICgnYnVmZmVyJyBpbiBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmJ1ZmZlciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYnVmZmVyID8gJ2J1ZmZlcicgOiAndXRmOCcgLy8gbGV2ZWwtY29kZWNcbiAgfSBlbHNlIGlmICgnY29kZScgaW4gb3B0aW9ucyAmJiBOdW1iZXIuaXNJbnRlZ2VyKG9wdGlvbnMuY29kZSkpIHtcbiAgICByZXR1cm4gJ3ZpZXcnIC8vIG11bHRpZm9ybWF0c1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnYnVmZmVyJ1xuICB9XG59XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWIvZW5jb2RpbmcnKS5NaXhlZEVuY29kaW5nPFRJbixURm9ybWF0LFRPdXQ+fSBNaXhlZEVuY29kaW5nXG4gKiBAdGVtcGxhdGUgVEluLCBURm9ybWF0LCBUT3V0XG4gKi9cblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIEVuY29kaW5nPGFueSwgYW55LCBhbnk+Pn1cbiAqL1xuY29uc3QgYWxpYXNlcyA9IHtcbiAgYmluYXJ5OiBlbmNvZGluZ3MuYnVmZmVyLFxuICAndXRmLTgnOiBlbmNvZGluZ3MudXRmOFxufVxuXG4vKipcbiAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgRW5jb2Rpbmc8YW55LCBhbnksIGFueT4+fVxuICovXG5jb25zdCBsb29rdXAgPSB7XG4gIC4uLmVuY29kaW5ncyxcbiAgLi4uYWxpYXNlc1xufVxuXG5sZXQgYW5vbnltb3VzQ291bnQgPSAwXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGtFcnJvcnMgPSBTeW1ib2woJ2tFcnJvcnMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcihkZWZpbmVkKVxuXG4gIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgaWYgKGVycm9ycy5sZW5ndGggPT09IDEpIHJldHVybiBlcnJvcnNbMF1cblxuICByZXR1cm4gbmV3IENvbWJpbmVkRXJyb3IoZXJyb3JzKVxufVxuXG5jbGFzcyBDb21iaW5lZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoZXJyb3JzKSB7XG4gICAgY29uc3QgdW5pcXVlID0gbmV3IFNldChlcnJvcnMubWFwKGdldE1lc3NhZ2UpLmZpbHRlcihCb29sZWFuKSlcbiAgICBjb25zdCBtZXNzYWdlID0gQXJyYXkuZnJvbSh1bmlxdWUpLmpvaW4oJzsgJylcblxuICAgIHN1cGVyKG1lc3NhZ2UpXG5cbiAgICB2YWx1ZSh0aGlzLCAnbmFtZScsICdDb21iaW5lZEVycm9yJylcbiAgICB2YWx1ZSh0aGlzLCBrRXJyb3JzLCBlcnJvcnMpXG5cbiAgICBnZXR0ZXIodGhpcywgJ3N0YWNrJywgKCkgPT4gZXJyb3JzLm1hcChnZXRTdGFjaykuam9pbignXFxuXFxuJykpXG4gICAgZ2V0dGVyKHRoaXMsICd0cmFuc2llbnQnLCAoKSA9PiBlcnJvcnMubGVuZ3RoID4gMCAmJiBlcnJvcnMuZXZlcnkodHJhbnNpZW50KSlcbiAgICBnZXR0ZXIodGhpcywgJ2V4cGVjdGVkJywgKCkgPT4gZXJyb3JzLmxlbmd0aCA+IDAgJiYgZXJyb3JzLmV2ZXJ5KGV4cGVjdGVkKSlcbiAgfVxuXG4gIFtTeW1ib2wuaXRlcmF0b3JdICgpIHtcbiAgICByZXR1cm4gdGhpc1trRXJyb3JzXVtTeW1ib2wuaXRlcmF0b3JdKClcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWx1ZSAob2JqLCBwcm9wLCB2YWx1ZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7IHZhbHVlIH0pXG59XG5cbmZ1bmN0aW9uIGdldHRlciAob2JqLCBwcm9wLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgeyBnZXQgfSlcbn1cblxuZnVuY3Rpb24gZGVmaW5lZCAoZXJyKSB7XG4gIHJldHVybiBlcnIgIT0gbnVsbFxufVxuXG5mdW5jdGlvbiBnZXRNZXNzYWdlIChlcnIpIHtcbiAgcmV0dXJuIGVyci5tZXNzYWdlXG59XG5cbmZ1bmN0aW9uIGdldFN0YWNrIChlcnIpIHtcbiAgcmV0dXJuIGVyci5zdGFja1xufVxuXG5mdW5jdGlvbiB0cmFuc2llbnQgKGVycikge1xuICByZXR1cm4gZXJyLnRyYW5zaWVudCA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBleHBlY3RlZCAoZXJyKSB7XG4gIHJldHVybiBlcnIuZXhwZWN0ZWQgPT09IHRydWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCBkZXByZWNhdGlvbnMgPSBuZXcgU2V0KClcblxuZXhwb3J0cy5nZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMsIGRlZikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgaWYgKGRlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZlxuICB9XG5cbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydHMuZW1wdHlPcHRpb25zID0gT2JqZWN0LmZyZWV6ZSh7fSlcbmV4cG9ydHMubm9vcCA9IGZ1bmN0aW9uICgpIHt9XG5leHBvcnRzLnJlc29sdmVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpXG5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgaWYgKCFkZXByZWNhdGlvbnMuaGFzKG1lc3NhZ2UpKSB7XG4gICAgZGVwcmVjYXRpb25zLmFkZChtZXNzYWdlKVxuXG4gICAgLy8gQXZvaWQgcG9seWZpbGxzXG4gICAgY29uc3QgYyA9IGdsb2JhbFRoaXMuY29uc29sZVxuXG4gICAgaWYgKHR5cGVvZiBjICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgYy53YXJuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjLndhcm4obmV3IE1vZHVsZUVycm9yKG1lc3NhZ2UsIHsgY29kZTogJ0xFVkVMX0xFR0FDWScgfSkpXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuXG5jbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgTW9kdWxlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoY2F1c2UpIHtcbiAgICBzdXBlcignT3BlcmF0aW9uIGhhcyBiZWVuIGFib3J0ZWQnLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfQUJPUlRFRCcsXG4gICAgICBjYXVzZVxuICAgIH0pXG4gIH1cblxuICAvLyBTZXQgbmFtZSB0byBBYm9ydEVycm9yIGZvciB3ZWIgY29tcGF0aWJpbGl0eS4gU2VlOlxuICAvLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2Fib3J0aW5nLW9uZ29pbmctYWN0aXZpdGllc1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvcHVsbC8zNTkxMSNkaXNjdXNzaW9uX3I1MTU3NzkzMDZcbiAgZ2V0IG5hbWUgKCkge1xuICAgIHJldHVybiAnQWJvcnRFcnJvcidcbiAgfVxufVxuXG5leHBvcnRzLkFib3J0RXJyb3IgPSBBYm9ydEVycm9yXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgY29tYmluZUVycm9ycyA9IHJlcXVpcmUoJ21heWJlLWNvbWJpbmUtZXJyb3JzJylcbmNvbnN0IHsgZ2V0T3B0aW9ucywgZW1wdHlPcHRpb25zLCBub29wIH0gPSByZXF1aXJlKCcuL2xpYi9jb21tb24nKVxuY29uc3QgeyBBYm9ydEVycm9yIH0gPSByZXF1aXJlKCcuL2xpYi9lcnJvcnMnKVxuXG5jb25zdCBrV29ya2luZyA9IFN5bWJvbCgnd29ya2luZycpXG5jb25zdCBrRGVjb2RlT25lID0gU3ltYm9sKCdkZWNvZGVPbmUnKVxuY29uc3Qga0RlY29kZU1hbnkgPSBTeW1ib2woJ2RlY29kZU1hbnknKVxuY29uc3Qga1NpZ25hbCA9IFN5bWJvbCgnc2lnbmFsJylcbmNvbnN0IGtQZW5kaW5nQ2xvc2UgPSBTeW1ib2woJ3BlbmRpbmdDbG9zZScpXG5jb25zdCBrQ2xvc2luZ1Byb21pc2UgPSBTeW1ib2woJ2Nsb3NpbmdQcm9taXNlJylcbmNvbnN0IGtLZXlFbmNvZGluZyA9IFN5bWJvbCgna2V5RW5jb2RpbmcnKVxuY29uc3Qga1ZhbHVlRW5jb2RpbmcgPSBTeW1ib2woJ3ZhbHVlRW5jb2RpbmcnKVxuY29uc3Qga0tleXMgPSBTeW1ib2woJ2tleXMnKVxuY29uc3Qga1ZhbHVlcyA9IFN5bWJvbCgndmFsdWVzJylcbmNvbnN0IGtMaW1pdCA9IFN5bWJvbCgnbGltaXQnKVxuY29uc3Qga0NvdW50ID0gU3ltYm9sKCdjb3VudCcpXG5jb25zdCBrRW5kZWQgPSBTeW1ib2woJ2VuZGVkJylcblxuLy8gVGhpcyBjbGFzcyBpcyBhbiBpbnRlcm5hbCB1dGlsaXR5IGZvciBjb21tb24gZnVuY3Rpb25hbGl0eSBiZXR3ZWVuIEFic3RyYWN0SXRlcmF0b3IsXG4vLyBBYnN0cmFjdEtleUl0ZXJhdG9yIGFuZCBBYnN0cmFjdFZhbHVlSXRlcmF0b3IuIEl0J3Mgbm90IGV4cG9ydGVkLlxuY2xhc3MgQ29tbW9uSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGRiICE9PSAnb2JqZWN0JyB8fCBkYiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaGludCA9IGRiID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGRiXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBhYnN0cmFjdC1sZXZlbCBkYXRhYmFzZSwgcmVjZWl2ZWQgJHtoaW50fWApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gb3B0aW9ucyBvYmplY3QnKVxuICAgIH1cblxuICAgIHRoaXNba1dvcmtpbmddID0gZmFsc2VcbiAgICB0aGlzW2tQZW5kaW5nQ2xvc2VdID0gbnVsbFxuICAgIHRoaXNba0Nsb3NpbmdQcm9taXNlXSA9IG51bGxcbiAgICB0aGlzW2tLZXlFbmNvZGluZ10gPSBvcHRpb25zW2tLZXlFbmNvZGluZ11cbiAgICB0aGlzW2tWYWx1ZUVuY29kaW5nXSA9IG9wdGlvbnNba1ZhbHVlRW5jb2RpbmddXG4gICAgdGhpc1trTGltaXRdID0gTnVtYmVyLmlzSW50ZWdlcihvcHRpb25zLmxpbWl0KSAmJiBvcHRpb25zLmxpbWl0ID49IDAgPyBvcHRpb25zLmxpbWl0IDogSW5maW5pdHlcbiAgICB0aGlzW2tDb3VudF0gPSAwXG4gICAgdGhpc1trU2lnbmFsXSA9IG9wdGlvbnMuc2lnbmFsICE9IG51bGwgPyBvcHRpb25zLnNpZ25hbCA6IG51bGxcblxuICAgIC8vIEVuZGluZyBtZWFucyByZWFjaGluZyB0aGUgbmF0dXJhbCBlbmQgb2YgdGhlIGRhdGEgYW5kICh1bmxpa2UgY2xvc2luZykgdGhhdCBjYW5cbiAgICAvLyBiZSByZXNldCBieSBzZWVrKCksIHVubGVzcyB0aGUgbGltaXQgd2FzIHJlYWNoZWQuXG4gICAgdGhpc1trRW5kZWRdID0gZmFsc2VcblxuICAgIHRoaXMuZGIgPSBkYlxuICAgIHRoaXMuZGIuYXR0YWNoUmVzb3VyY2UodGhpcylcbiAgfVxuXG4gIGdldCBjb3VudCAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0NvdW50XVxuICB9XG5cbiAgZ2V0IGxpbWl0ICgpIHtcbiAgICByZXR1cm4gdGhpc1trTGltaXRdXG4gIH1cblxuICBhc3luYyBuZXh0ICgpIHtcbiAgICBzdGFydFdvcmsodGhpcylcblxuICAgIHRyeSB7XG4gICAgICBpZiAodGhpc1trRW5kZWRdIHx8IHRoaXNba0NvdW50XSA+PSB0aGlzW2tMaW1pdF0pIHtcbiAgICAgICAgdGhpc1trRW5kZWRdID0gdHJ1ZVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGxldCBpdGVtID0gYXdhaXQgdGhpcy5fbmV4dCgpXG5cbiAgICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpc1trRW5kZWRdID0gdHJ1ZVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGl0ZW0gPSB0aGlzW2tEZWNvZGVPbmVdKGl0ZW0pXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEl0ZXJhdG9yRGVjb2RlRXJyb3IoZXJyKVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tDb3VudF0rK1xuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgZW5kV29yayh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9uZXh0ICgpIHt9XG5cbiAgYXN5bmMgbmV4dHYgKHNpemUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoc2l6ZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgJ3NpemUnIG11c3QgYmUgYW4gaW50ZWdlclwiKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucylcblxuICAgIGlmIChzaXplIDwgMSkgc2l6ZSA9IDFcbiAgICBpZiAodGhpc1trTGltaXRdIDwgSW5maW5pdHkpIHNpemUgPSBNYXRoLm1pbihzaXplLCB0aGlzW2tMaW1pdF0gLSB0aGlzW2tDb3VudF0pXG5cbiAgICBzdGFydFdvcmsodGhpcylcblxuICAgIHRyeSB7XG4gICAgICBpZiAodGhpc1trRW5kZWRdIHx8IHNpemUgPD0gMCkge1xuICAgICAgICB0aGlzW2tFbmRlZF0gPSB0cnVlXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHRoaXMuX25leHR2KHNpemUsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpc1trRW5kZWRdID0gdHJ1ZVxuICAgICAgICByZXR1cm4gaXRlbXNcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpc1trRGVjb2RlTWFueV0oaXRlbXMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEl0ZXJhdG9yRGVjb2RlRXJyb3IoZXJyKVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tDb3VudF0gKz0gaXRlbXMubGVuZ3RoXG4gICAgICByZXR1cm4gaXRlbXNcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZW5kV29yayh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9uZXh0diAoc2l6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGFjYyA9IFtdXG5cbiAgICB3aGlsZSAoYWNjLmxlbmd0aCA8IHNpemUpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLl9uZXh0KG9wdGlvbnMpXG5cbiAgICAgIGlmIChpdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWNjLnB1c2goaXRlbSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE11c3QgdHJhY2sgdGhpcyBoZXJlIGJlY2F1c2Ugd2UncmUgZGlyZWN0bHkgY2FsbGluZyBfbmV4dCgpXG4gICAgICAgIHRoaXNba0VuZGVkXSA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH1cblxuICBhc3luYyBhbGwgKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCBlbXB0eU9wdGlvbnMpXG4gICAgc3RhcnRXb3JrKHRoaXMpXG5cbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXNba0VuZGVkXSB8fCB0aGlzW2tDb3VudF0gPj0gdGhpc1trTGltaXRdKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHRoaXMuX2FsbChvcHRpb25zKVxuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzW2tEZWNvZGVNYW55XShpdGVtcylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgSXRlcmF0b3JEZWNvZGVFcnJvcihlcnIpXG4gICAgICB9XG5cbiAgICAgIHRoaXNba0NvdW50XSArPSBpdGVtcy5sZW5ndGhcbiAgICAgIHJldHVybiBpdGVtc1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZW5kV29yayh0aGlzKVxuICAgICAgYXdhaXQgZGVzdHJveSh0aGlzLCBlcnIpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXNba0VuZGVkXSA9IHRydWVcblxuICAgICAgaWYgKHRoaXNba1dvcmtpbmddKSB7XG4gICAgICAgIGVuZFdvcmsodGhpcylcbiAgICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2FsbCAob3B0aW9ucykge1xuICAgIC8vIE11c3QgY291bnQgaGVyZSBiZWNhdXNlIHdlJ3JlIGRpcmVjdGx5IGNhbGxpbmcgX25leHR2KClcbiAgICBsZXQgY291bnQgPSB0aGlzW2tDb3VudF1cblxuICAgIGNvbnN0IGFjYyA9IFtdXG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgLy8gTm90IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG9wdGltaXplIF9hbGwoKS5cbiAgICAgIGNvbnN0IHNpemUgPSB0aGlzW2tMaW1pdF0gPCBJbmZpbml0eSA/IE1hdGgubWluKDFlMywgdGhpc1trTGltaXRdIC0gY291bnQpIDogMWUzXG5cbiAgICAgIGlmIChzaXplIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHRoaXMuX25leHR2KHNpemUsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgfVxuXG4gICAgICBhY2MucHVzaC5hcHBseShhY2MsIGl0ZW1zKVxuICAgICAgY291bnQgKz0gaXRlbXMubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgc2VlayAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKVxuXG4gICAgaWYgKHRoaXNba0Nsb3NpbmdQcm9taXNlXSAhPT0gbnVsbCkge1xuICAgICAgLy8gRG9uJ3QgdGhyb3cgaGVyZSwgdG8gYmUga2luZCB0byBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3cmFwXG4gICAgICAvLyBhbm90aGVyIGRiIGFuZCBkb24ndCBuZWNlc3NhcmlseSBjb250cm9sIHdoZW4gdGhlIGRiIGlzIGNsb3NlZFxuICAgIH0gZWxzZSBpZiAodGhpc1trV29ya2luZ10pIHtcbiAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgaXMgYnVzeTogY2Fubm90IGNhbGwgc2VlaygpIHVudGlsIG5leHQoKSBoYXMgY29tcGxldGVkJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfSVRFUkFUT1JfQlVTWSdcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5kYi5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nIHx8IHRoaXNba0tleUVuY29kaW5nXSlcbiAgICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuXG4gICAgICBpZiAob3B0aW9ucy5rZXlFbmNvZGluZyAhPT0ga2V5Rm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIGtleUVuY29kaW5nOiBrZXlGb3JtYXQgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBwZWQgPSB0aGlzLmRiLnByZWZpeEtleShrZXlFbmNvZGluZy5lbmNvZGUodGFyZ2V0KSwga2V5Rm9ybWF0LCBmYWxzZSlcbiAgICAgIHRoaXMuX3NlZWsobWFwcGVkLCBvcHRpb25zKVxuXG4gICAgICAvLyBJZiBfc2VlaygpIHdhcyBzdWNjZXNzZnVsbCwgbW9yZSBkYXRhIG1heSBiZSBhdmFpbGFibGUuXG4gICAgICB0aGlzW2tFbmRlZF0gPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIF9zZWVrICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0l0ZXJhdG9yIGRvZXMgbm90IHN1cHBvcnQgc2VlaygpJywge1xuICAgICAgY29kZTogJ0xFVkVMX05PVF9TVVBQT1JURUQnXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGNsb3NlICgpIHtcbiAgICBpZiAodGhpc1trQ2xvc2luZ1Byb21pc2VdICE9PSBudWxsKSB7XG4gICAgICAvLyBGaXJzdCBjYWxsZXIgb2YgY2xvc2UoKSBpcyByZXNwb25zaWJsZSBmb3IgZXJyb3JcbiAgICAgIHJldHVybiB0aGlzW2tDbG9zaW5nUHJvbWlzZV0uY2F0Y2gobm9vcClcbiAgICB9XG5cbiAgICAvLyBXcmFwIHRvIGF2b2lkIHJhY2UgaXNzdWVzIG9uIHJlY3Vyc2l2ZSBjYWxsc1xuICAgIHRoaXNba0Nsb3NpbmdQcm9taXNlXSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXNba1BlbmRpbmdDbG9zZV0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXNba1BlbmRpbmdDbG9zZV0gPSBudWxsXG4gICAgICAgIHByaXZhdGVDbG9zZSh0aGlzKS50aGVuKHJlc29sdmUsIHJlamVjdClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgd29ya2luZyB3ZSdsbCBkZWxheSBjbG9zaW5nLCBidXQgc3RpbGwgaGFuZGxlIHRoZSBjbG9zZSBlcnJvciAoaWYgYW55KSBoZXJlXG4gICAgaWYgKCF0aGlzW2tXb3JraW5nXSkge1xuICAgICAgdGhpc1trUGVuZGluZ0Nsb3NlXSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNba0Nsb3NpbmdQcm9taXNlXVxuICB9XG5cbiAgYXN5bmMgX2Nsb3NlICgpIHt9XG5cbiAgYXN5bmMgKiBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGl0ZW1cblxuICAgICAgd2hpbGUgKChpdGVtID0gKGF3YWl0IHRoaXMubmV4dCgpKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB5aWVsZCBpdGVtXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhd2FpdCBkZXN0cm95KHRoaXMsIGVycilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9XG59XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB0aGlzIGNsYXNzIGlzIG5vdCAoeWV0KSBjYWxsZWQgQWJzdHJhY3RFbnRyeUl0ZXJhdG9yLlxuY2xhc3MgQWJzdHJhY3RJdGVyYXRvciBleHRlbmRzIENvbW1vbkl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG4gICAgdGhpc1trS2V5c10gPSBvcHRpb25zLmtleXMgIT09IGZhbHNlXG4gICAgdGhpc1trVmFsdWVzXSA9IG9wdGlvbnMudmFsdWVzICE9PSBmYWxzZVxuICB9XG5cbiAgW2tEZWNvZGVPbmVdIChlbnRyeSkge1xuICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdXG4gICAgY29uc3QgdmFsdWUgPSBlbnRyeVsxXVxuXG4gICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbnRyeVswXSA9IHRoaXNba0tleXNdID8gdGhpc1trS2V5RW5jb2RpbmddLmRlY29kZShrZXkpIDogdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVudHJ5WzFdID0gdGhpc1trVmFsdWVzXSA/IHRoaXNba1ZhbHVlRW5jb2RpbmddLmRlY29kZSh2YWx1ZSkgOiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cnlcbiAgfVxuXG4gIFtrRGVjb2RlTWFueV0gKGVudHJpZXMpIHtcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXNba0tleUVuY29kaW5nXVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzW2tWYWx1ZUVuY29kaW5nXVxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeVswXVxuICAgICAgY29uc3QgdmFsdWUgPSBlbnRyeVsxXVxuXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGVudHJ5WzBdID0gdGhpc1trS2V5c10gPyBrZXlFbmNvZGluZy5kZWNvZGUoa2V5KSA6IHVuZGVmaW5lZFxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIGVudHJ5WzFdID0gdGhpc1trVmFsdWVzXSA/IHZhbHVlRW5jb2RpbmcuZGVjb2RlKHZhbHVlKSA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBBYnN0cmFjdEtleUl0ZXJhdG9yIGV4dGVuZHMgQ29tbW9uSXRlcmF0b3Ige1xuICBba0RlY29kZU9uZV0gKGtleSkge1xuICAgIHJldHVybiB0aGlzW2tLZXlFbmNvZGluZ10uZGVjb2RlKGtleSlcbiAgfVxuXG4gIFtrRGVjb2RlTWFueV0gKGtleXMpIHtcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXNba0tleUVuY29kaW5nXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGtleXNbaV0gPSBrZXlFbmNvZGluZy5kZWNvZGUoa2V5KVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBBYnN0cmFjdFZhbHVlSXRlcmF0b3IgZXh0ZW5kcyBDb21tb25JdGVyYXRvciB7XG4gIFtrRGVjb2RlT25lXSAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpc1trVmFsdWVFbmNvZGluZ10uZGVjb2RlKHZhbHVlKVxuICB9XG5cbiAgW2tEZWNvZGVNYW55XSAodmFsdWVzKSB7XG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXNba1ZhbHVlRW5jb2RpbmddXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaV1cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB2YWx1ZXNbaV0gPSB2YWx1ZUVuY29kaW5nLmRlY29kZSh2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuLy8gSW50ZXJuYWwgdXRpbGl0eSwgbm90IHR5cGVkIG9yIGV4cG9ydGVkXG5jbGFzcyBJdGVyYXRvckRlY29kZUVycm9yIGV4dGVuZHMgTW9kdWxlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoY2F1c2UpIHtcbiAgICBzdXBlcignSXRlcmF0b3IgY291bGQgbm90IGRlY29kZSBkYXRhJywge1xuICAgICAgY29kZTogJ0xFVkVMX0RFQ09ERV9FUlJPUicsXG4gICAgICBjYXVzZVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3Qgc3RhcnRXb3JrID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gIGlmIChpdGVyYXRvcltrQ2xvc2luZ1Byb21pc2VdICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBpcyBub3Qgb3BlbjogY2Fubm90IHJlYWQgYWZ0ZXIgY2xvc2UoKScsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9JVEVSQVRPUl9OT1RfT1BFTidcbiAgICB9KVxuICB9IGVsc2UgaWYgKGl0ZXJhdG9yW2tXb3JraW5nXSkge1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignSXRlcmF0b3IgaXMgYnVzeTogY2Fubm90IHJlYWQgdW50aWwgcHJldmlvdXMgcmVhZCBoYXMgY29tcGxldGVkJywge1xuICAgICAgY29kZTogJ0xFVkVMX0lURVJBVE9SX0JVU1knXG4gICAgfSlcbiAgfSBlbHNlIGlmIChpdGVyYXRvcltrU2lnbmFsXSAhPT0gbnVsbCAmJiBpdGVyYXRvcltrU2lnbmFsXS5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IEFib3J0RXJyb3IoKVxuICB9XG5cbiAgaXRlcmF0b3Jba1dvcmtpbmddID0gdHJ1ZVxufVxuXG5jb25zdCBlbmRXb3JrID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gIGl0ZXJhdG9yW2tXb3JraW5nXSA9IGZhbHNlXG5cbiAgaWYgKGl0ZXJhdG9yW2tQZW5kaW5nQ2xvc2VdICE9PSBudWxsKSB7XG4gICAgaXRlcmF0b3Jba1BlbmRpbmdDbG9zZV0oKVxuICB9XG59XG5cbmNvbnN0IHByaXZhdGVDbG9zZSA9IGFzeW5jIGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICBhd2FpdCBpdGVyYXRvci5fY2xvc2UoKVxuICBpdGVyYXRvci5kYi5kZXRhY2hSZXNvdXJjZShpdGVyYXRvcilcbn1cblxuY29uc3QgZGVzdHJveSA9IGFzeW5jIGZ1bmN0aW9uIChpdGVyYXRvciwgZXJyKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgaXRlcmF0b3IuY2xvc2UoKVxuICB9IGNhdGNoIChjbG9zZUVycikge1xuICAgIHRocm93IGNvbWJpbmVFcnJvcnMoW2VyciwgY2xvc2VFcnJdKVxuICB9XG5cbiAgdGhyb3cgZXJyXG59XG5cbi8vIEV4cG9zZWQgc28gdGhhdCBBYnN0cmFjdExldmVsIGNhbiBzZXQgdGhlc2Ugb3B0aW9uc1xuQWJzdHJhY3RJdGVyYXRvci5rZXlFbmNvZGluZyA9IGtLZXlFbmNvZGluZ1xuQWJzdHJhY3RJdGVyYXRvci52YWx1ZUVuY29kaW5nID0ga1ZhbHVlRW5jb2RpbmdcblxuZXhwb3J0cy5BYnN0cmFjdEl0ZXJhdG9yID0gQWJzdHJhY3RJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdEtleUl0ZXJhdG9yID0gQWJzdHJhY3RLZXlJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdFZhbHVlSXRlcmF0b3IgPSBBYnN0cmFjdFZhbHVlSXRlcmF0b3JcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEFic3RyYWN0S2V5SXRlcmF0b3IsIEFic3RyYWN0VmFsdWVJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi4vYWJzdHJhY3QtaXRlcmF0b3InKVxuXG5jb25zdCBrSXRlcmF0b3IgPSBTeW1ib2woJ2l0ZXJhdG9yJylcbmNvbnN0IGtIYW5kbGVPbmUgPSBTeW1ib2woJ2hhbmRsZU9uZScpXG5jb25zdCBrSGFuZGxlTWFueSA9IFN5bWJvbCgnaGFuZGxlTWFueScpXG5cbmNsYXNzIERlZmF1bHRLZXlJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0S2V5SXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba0l0ZXJhdG9yXSA9IGRiLml0ZXJhdG9yKHsgLi4ub3B0aW9ucywga2V5czogdHJ1ZSwgdmFsdWVzOiBmYWxzZSB9KVxuICB9XG5cbiAgW2tIYW5kbGVPbmVdIChlbnRyeSkge1xuICAgIHJldHVybiBlbnRyeVswXVxuICB9XG5cbiAgW2tIYW5kbGVNYW55XSAoZW50cmllcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZW50cmllc1tpXSA9IGVudHJpZXNbaV1bMF1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRGVmYXVsdFZhbHVlSXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdFZhbHVlSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba0l0ZXJhdG9yXSA9IGRiLml0ZXJhdG9yKHsgLi4ub3B0aW9ucywga2V5czogZmFsc2UsIHZhbHVlczogdHJ1ZSB9KVxuICB9XG5cbiAgW2tIYW5kbGVPbmVdIChlbnRyeSkge1xuICAgIHJldHVybiBlbnRyeVsxXVxuICB9XG5cbiAgW2tIYW5kbGVNYW55XSAoZW50cmllcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZW50cmllc1tpXSA9IGVudHJpZXNbaV1bMV1cbiAgICB9XG4gIH1cbn1cblxuZm9yIChjb25zdCBJdGVyYXRvciBvZiBbRGVmYXVsdEtleUl0ZXJhdG9yLCBEZWZhdWx0VmFsdWVJdGVyYXRvcl0pIHtcbiAgSXRlcmF0b3IucHJvdG90eXBlLl9uZXh0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLm5leHQoKVxuICAgIHJldHVybiBlbnRyeSA9PT0gdW5kZWZpbmVkID8gZW50cnkgOiB0aGlzW2tIYW5kbGVPbmVdKGVudHJ5KVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9uZXh0diA9IGFzeW5jIGZ1bmN0aW9uIChzaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXNba0l0ZXJhdG9yXS5uZXh0dihzaXplLCBvcHRpb25zKVxuICAgIHRoaXNba0hhbmRsZU1hbnldKGVudHJpZXMpXG4gICAgcmV0dXJuIGVudHJpZXNcbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fYWxsID0gYXN5bmMgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLmFsbChvcHRpb25zKVxuICAgIHRoaXNba0hhbmRsZU1hbnldKGVudHJpZXMpXG4gICAgcmV0dXJuIGVudHJpZXNcbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fc2VlayA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzW2tJdGVyYXRvcl0uc2Vlayh0YXJnZXQsIG9wdGlvbnMpXG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX2Nsb3NlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzW2tJdGVyYXRvcl0uY2xvc2UoKVxuICB9XG59XG5cbi8vIEludGVybmFsIHV0aWxpdGllcywgc2hvdWxkIGJlIHR5cGVkIGFzIEFic3RyYWN0S2V5SXRlcmF0b3IgYW5kIEFic3RyYWN0VmFsdWVJdGVyYXRvclxuZXhwb3J0cy5EZWZhdWx0S2V5SXRlcmF0b3IgPSBEZWZhdWx0S2V5SXRlcmF0b3JcbmV4cG9ydHMuRGVmYXVsdFZhbHVlSXRlcmF0b3IgPSBEZWZhdWx0VmFsdWVJdGVyYXRvclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQWJzdHJhY3RJdGVyYXRvciwgQWJzdHJhY3RLZXlJdGVyYXRvciwgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIH0gPSByZXF1aXJlKCcuLi9hYnN0cmFjdC1pdGVyYXRvcicpXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5cbmNvbnN0IGtOdXQgPSBTeW1ib2woJ251dCcpXG5jb25zdCBrVW5kZWZlciA9IFN5bWJvbCgndW5kZWZlcicpXG5jb25zdCBrRmFjdG9yeSA9IFN5bWJvbCgnZmFjdG9yeScpXG5jb25zdCBrU2lnbmFsT3B0aW9ucyA9IFN5bWJvbCgnc2lnbmFsT3B0aW9ucycpXG5cbmNsYXNzIERlZmVycmVkSXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdEl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tOdXRdID0gbnVsbFxuICAgIHRoaXNba0ZhY3RvcnldID0gKCkgPT4gZGIuaXRlcmF0b3Iob3B0aW9ucylcbiAgICB0aGlzW2tTaWduYWxPcHRpb25zXSA9IHsgc2lnbmFsOiBvcHRpb25zLnNpZ25hbCB9XG5cbiAgICB0aGlzLmRiLmRlZmVyKCgpID0+IHRoaXNba1VuZGVmZXJdKCksIHRoaXNba1NpZ25hbE9wdGlvbnNdKVxuICB9XG59XG5cbmNsYXNzIERlZmVycmVkS2V5SXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdEtleUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tOdXRdID0gbnVsbFxuICAgIHRoaXNba0ZhY3RvcnldID0gKCkgPT4gZGIua2V5cyhvcHRpb25zKVxuICAgIHRoaXNba1NpZ25hbE9wdGlvbnNdID0geyBzaWduYWw6IG9wdGlvbnMuc2lnbmFsIH1cblxuICAgIHRoaXMuZGIuZGVmZXIoKCkgPT4gdGhpc1trVW5kZWZlcl0oKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gIH1cbn1cblxuY2xhc3MgRGVmZXJyZWRWYWx1ZUl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoZGIsIG9wdGlvbnMpXG5cbiAgICB0aGlzW2tOdXRdID0gbnVsbFxuICAgIHRoaXNba0ZhY3RvcnldID0gKCkgPT4gZGIudmFsdWVzKG9wdGlvbnMpXG4gICAgdGhpc1trU2lnbmFsT3B0aW9uc10gPSB7IHNpZ25hbDogb3B0aW9ucy5zaWduYWwgfVxuXG4gICAgdGhpcy5kYi5kZWZlcigoKSA9PiB0aGlzW2tVbmRlZmVyXSgpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgfVxufVxuXG5mb3IgKGNvbnN0IEl0ZXJhdG9yIG9mIFtEZWZlcnJlZEl0ZXJhdG9yLCBEZWZlcnJlZEtleUl0ZXJhdG9yLCBEZWZlcnJlZFZhbHVlSXRlcmF0b3JdKSB7XG4gIEl0ZXJhdG9yLnByb3RvdHlwZVtrVW5kZWZlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGIuc3RhdHVzID09PSAnb3BlbicpIHtcbiAgICAgIHRoaXNba051dF0gPSB0aGlzW2tGYWN0b3J5XSgpXG4gICAgfVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9uZXh0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzW2tOdXRdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpc1trTnV0XS5uZXh0KClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGIuc3RhdHVzID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRiLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5fbmV4dCgpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBpcyBub3Qgb3BlbjogY2Fubm90IGNhbGwgbmV4dCgpIGFmdGVyIGNsb3NlKCknLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9JVEVSQVRPUl9OT1RfT1BFTidcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9uZXh0diA9IGFzeW5jIGZ1bmN0aW9uIChzaXplLCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXNba051dF0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW2tOdXRdLm5leHR2KHNpemUsIG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRiLnN0YXR1cyA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYi5kZWZlckFzeW5jKCgpID0+IHRoaXMuX25leHR2KHNpemUsIG9wdGlvbnMpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBpcyBub3Qgb3BlbjogY2Fubm90IGNhbGwgbmV4dHYoKSBhZnRlciBjbG9zZSgpJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfSVRFUkFUT1JfTk9UX09QRU4nXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fYWxsID0gYXN5bmMgZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAodGhpc1trTnV0XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXNba051dF0uYWxsKClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGIuc3RhdHVzID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRiLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5fYWxsKG9wdGlvbnMpLCB0aGlzW2tTaWduYWxPcHRpb25zXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdJdGVyYXRvciBpcyBub3Qgb3BlbjogY2Fubm90IGNhbGwgYWxsKCkgYWZ0ZXIgY2xvc2UoKScsIHtcbiAgICAgICAgY29kZTogJ0xFVkVMX0lURVJBVE9SX05PVF9PUEVOJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBJdGVyYXRvci5wcm90b3R5cGUuX3NlZWsgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKHRoaXNba051dF0gIT09IG51bGwpIHtcbiAgICAgIC8vIFRPRE86IGV4cGxhaW4gd2h5IHdlIG5lZWQgX3NlZWsoKSByYXRoZXIgdGhhbiBzZWVrKCkgaGVyZVxuICAgICAgdGhpc1trTnV0XS5fc2Vlayh0YXJnZXQsIG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRiLnN0YXR1cyA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICB0aGlzLmRiLmRlZmVyKCgpID0+IHRoaXMuX3NlZWsodGFyZ2V0LCBvcHRpb25zKSwgdGhpc1trU2lnbmFsT3B0aW9uc10pXG4gICAgfVxuICB9XG5cbiAgSXRlcmF0b3IucHJvdG90eXBlLl9jbG9zZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpc1trTnV0XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXNba051dF0uY2xvc2UoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYi5zdGF0dXMgPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGIuZGVmZXJBc3luYygoKSA9PiB0aGlzLl9jbG9zZSgpKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkRlZmVycmVkSXRlcmF0b3IgPSBEZWZlcnJlZEl0ZXJhdG9yXG5leHBvcnRzLkRlZmVycmVkS2V5SXRlcmF0b3IgPSBEZWZlcnJlZEtleUl0ZXJhdG9yXG5leHBvcnRzLkRlZmVycmVkVmFsdWVJdGVyYXRvciA9IERlZmVycmVkVmFsdWVJdGVyYXRvclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMucHJlZml4RGVzY2VuZGFudEtleSA9IGZ1bmN0aW9uIChrZXksIGtleUZvcm1hdCwgZGVzY2VuZGFudCwgYW5jZXN0b3IpIHtcbiAgd2hpbGUgKGRlc2NlbmRhbnQgIT09IG51bGwgJiYgZGVzY2VuZGFudCAhPT0gYW5jZXN0b3IpIHtcbiAgICBrZXkgPSBkZXNjZW5kYW50LnByZWZpeEtleShrZXksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICBkZXNjZW5kYW50ID0gZGVzY2VuZGFudC5wYXJlbnRcbiAgfVxuXG4gIHJldHVybiBrZXlcbn1cblxuLy8gQ2hlY2sgaWYgZGIgaXMgYSBkZXNjZW5kYW50IG9mIGFuY2VzdG9yXG4vLyBUT0RPOiBvcHRpbWl6ZSwgd2hlbiB1c2VkIGFsb25nc2lkZSBwcmVmaXhEZXNjZW5kYW50S2V5XG4vLyB3aGljaCBtZWFucyB3ZSB2aXNpdCBwYXJlbnRzIHR3aWNlLlxuZXhwb3J0cy5pc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiAoZGIsIGFuY2VzdG9yKSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGRiLnBhcmVudCA9PSBudWxsKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoZGIucGFyZW50ID09PSBhbmNlc3RvcikgcmV0dXJuIHRydWVcbiAgICBkYiA9IGRiLnBhcmVudFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBwcmVmaXhEZXNjZW5kYW50S2V5LCBpc0Rlc2NlbmRhbnQgfSA9IHJlcXVpcmUoJy4vcHJlZml4ZXMnKVxuXG5jb25zdCBrRGIgPSBTeW1ib2woJ2RiJylcbmNvbnN0IGtQcml2YXRlT3BlcmF0aW9ucyA9IFN5bWJvbCgncHJpdmF0ZU9wZXJhdGlvbnMnKVxuY29uc3Qga1B1YmxpY09wZXJhdGlvbnMgPSBTeW1ib2woJ3B1YmxpY09wZXJhdGlvbnMnKVxuXG4vLyBBbiBpbnRlcmZhY2UgZm9yIHByZXdyaXRlIGhvb2sgZnVuY3Rpb25zIHRvIGFkZCBvcGVyYXRpb25zXG5jbGFzcyBQcmV3cml0ZUJhdGNoIHtcbiAgY29uc3RydWN0b3IgKGRiLCBwcml2YXRlT3BlcmF0aW9ucywgcHVibGljT3BlcmF0aW9ucykge1xuICAgIHRoaXNba0RiXSA9IGRiXG5cbiAgICAvLyBOb3RlOiBpZiBmb3IgZGIuYmF0Y2goW10pLCB0aGVzZSBhcnJheXMgaW5jbHVkZSBpbnB1dCBvcGVyYXRpb25zIChvciBlbXB0eSBzbG90c1xuICAgIC8vIGZvciB0aGVtKSBidXQgaWYgZm9yIGNoYWluZWQgYmF0Y2ggdGhlbiBpdCBkb2VzIG5vdC4gU21hbGwgaW1wbGVtZW50YXRpb24gZGV0YWlsLlxuICAgIHRoaXNba1ByaXZhdGVPcGVyYXRpb25zXSA9IHByaXZhdGVPcGVyYXRpb25zXG4gICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10gPSBwdWJsaWNPcGVyYXRpb25zXG4gIH1cblxuICBhZGQgKG9wKSB7XG4gICAgY29uc3QgaXNQdXQgPSBvcC50eXBlID09PSAncHV0J1xuICAgIGNvbnN0IGRlbGVnYXRlZCA9IG9wLnN1YmxldmVsICE9IG51bGxcbiAgICBjb25zdCBkYiA9IGRlbGVnYXRlZCA/IG9wLnN1YmxldmVsIDogdGhpc1trRGJdXG5cbiAgICBjb25zdCBrZXlFcnJvciA9IGRiLl9jaGVja0tleShvcC5rZXkpXG4gICAgaWYgKGtleUVycm9yICE9IG51bGwpIHRocm93IGtleUVycm9yXG5cbiAgICBvcC5rZXlFbmNvZGluZyA9IGRiLmtleUVuY29kaW5nKG9wLmtleUVuY29kaW5nKVxuXG4gICAgaWYgKGlzUHV0KSB7XG4gICAgICBjb25zdCB2YWx1ZUVycm9yID0gZGIuX2NoZWNrVmFsdWUob3AudmFsdWUpXG4gICAgICBpZiAodmFsdWVFcnJvciAhPSBudWxsKSB0aHJvdyB2YWx1ZUVycm9yXG5cbiAgICAgIG9wLnZhbHVlRW5jb2RpbmcgPSBkYi52YWx1ZUVuY29kaW5nKG9wLnZhbHVlRW5jb2RpbmcpXG4gICAgfSBlbHNlIGlmIChvcC50eXBlICE9PSAnZGVsJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgYmF0Y2ggb3BlcmF0aW9uIG11c3QgaGF2ZSBhIHR5cGUgcHJvcGVydHkgdGhhdCBpcyAncHV0JyBvciAnZGVsJ1wiKVxuICAgIH1cblxuICAgIC8vIEVuY29kZSBkYXRhIGZvciBwcml2YXRlIEFQSVxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gb3Aua2V5RW5jb2RpbmdcbiAgICBjb25zdCBwcmVlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKG9wLmtleSlcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcblxuICAgIC8vIElmIHRoZSBzdWJsZXZlbCBpcyBub3QgYSBkZXNjZW5kYW50IHRoZW4gZm9yd2FyZCB0aGF0IG9wdGlvbiB0byB0aGUgcGFyZW50IGRiXG4gICAgLy8gc28gdGhhdCB3ZSBkb24ndCBlcnJvbmVvdXNseSBhZGQgb3VyIG93biBwcmVmaXggdG8gdGhlIGtleSBvZiB0aGUgb3BlcmF0aW9uLlxuICAgIGNvbnN0IHNpYmxpbmdzID0gZGVsZWdhdGVkICYmICFpc0Rlc2NlbmRhbnQob3Auc3VibGV2ZWwsIHRoaXNba0RiXSkgJiYgb3Auc3VibGV2ZWwgIT09IHRoaXNba0RiXVxuICAgIGNvbnN0IGVuY29kZWRLZXkgPSBkZWxlZ2F0ZWQgJiYgIXNpYmxpbmdzXG4gICAgICA/IHByZWZpeERlc2NlbmRhbnRLZXkocHJlZW5jb2RlZEtleSwga2V5Rm9ybWF0LCBkYiwgdGhpc1trRGJdKVxuICAgICAgOiBwcmVlbmNvZGVkS2V5XG5cbiAgICAvLyBPbmx5IHByZWZpeCBvbmNlXG4gICAgaWYgKGRlbGVnYXRlZCAmJiAhc2libGluZ3MpIHtcbiAgICAgIG9wLnN1YmxldmVsID0gbnVsbFxuICAgIH1cblxuICAgIGxldCBwdWJsaWNPcGVyYXRpb24gPSBudWxsXG5cbiAgICAvLyBJZiB0aGUgc3VibGV2ZWwgaXMgbm90IGEgZGVzY2VuZGFudCB0aGVuIHdlIHNob3VsZG4ndCBlbWl0IGV2ZW50c1xuICAgIGlmICh0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSAhPT0gbnVsbCAmJiAhc2libGluZ3MpIHtcbiAgICAgIC8vIENsb25lIG9wIGJlZm9yZSB3ZSBtdXRhdGUgaXQgZm9yIHRoZSBwcml2YXRlIEFQSVxuICAgICAgcHVibGljT3BlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3ApXG4gICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZEtleSA9IGVuY29kZWRLZXlcblxuICAgICAgaWYgKGRlbGVnYXRlZCkge1xuICAgICAgICAvLyBFbnN1cmUgZW1pdHRlZCBkYXRhIG1ha2VzIHNlbnNlIGluIHRoZSBjb250ZXh0IG9mIHRoaXNba0RiXVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5ID0gZW5jb2RlZEtleVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5RW5jb2RpbmcgPSB0aGlzW2tEYl0ua2V5RW5jb2Rpbmcoa2V5Rm9ybWF0KVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXS5wdXNoKHB1YmxpY09wZXJhdGlvbilcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSdyZSBmb3J3YXJkaW5nIHRoZSBzdWJsZXZlbCBvcHRpb24gdGhlbiBkb24ndCBwcmVmaXggdGhlIGtleSB5ZXRcbiAgICBvcC5rZXkgPSBzaWJsaW5ncyA/IGVuY29kZWRLZXkgOiB0aGlzW2tEYl0ucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICBvcC5rZXlFbmNvZGluZyA9IGtleUZvcm1hdFxuXG4gICAgaWYgKGlzUHV0KSB7XG4gICAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gb3AudmFsdWVFbmNvZGluZ1xuICAgICAgY29uc3QgZW5jb2RlZFZhbHVlID0gdmFsdWVFbmNvZGluZy5lbmNvZGUob3AudmFsdWUpXG4gICAgICBjb25zdCB2YWx1ZUZvcm1hdCA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICAgIG9wLnZhbHVlID0gZW5jb2RlZFZhbHVlXG4gICAgICBvcC52YWx1ZUVuY29kaW5nID0gdmFsdWVGb3JtYXRcblxuICAgICAgaWYgKHB1YmxpY09wZXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZFZhbHVlID0gZW5jb2RlZFZhbHVlXG5cbiAgICAgICAgaWYgKGRlbGVnYXRlZCkge1xuICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi52YWx1ZSA9IGVuY29kZWRWYWx1ZVxuICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi52YWx1ZUVuY29kaW5nID0gdGhpc1trRGJdLnZhbHVlRW5jb2RpbmcodmFsdWVGb3JtYXQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzW2tQcml2YXRlT3BlcmF0aW9uc10ucHVzaChvcClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmV4cG9ydHMuUHJld3JpdGVCYXRjaCA9IFByZXdyaXRlQmF0Y2hcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjb21iaW5lRXJyb3JzID0gcmVxdWlyZSgnbWF5YmUtY29tYmluZS1lcnJvcnMnKVxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgeyBnZXRPcHRpb25zLCBlbXB0eU9wdGlvbnMsIG5vb3AgfSA9IHJlcXVpcmUoJy4vbGliL2NvbW1vbicpXG5jb25zdCB7IHByZWZpeERlc2NlbmRhbnRLZXksIGlzRGVzY2VuZGFudCB9ID0gcmVxdWlyZSgnLi9saWIvcHJlZml4ZXMnKVxuY29uc3QgeyBQcmV3cml0ZUJhdGNoIH0gPSByZXF1aXJlKCcuL2xpYi9wcmV3cml0ZS1iYXRjaCcpXG5cbmNvbnN0IGtTdGF0dXMgPSBTeW1ib2woJ3N0YXR1cycpXG5jb25zdCBrUHVibGljT3BlcmF0aW9ucyA9IFN5bWJvbCgncHVibGljT3BlcmF0aW9ucycpXG5jb25zdCBrTGVnYWN5T3BlcmF0aW9ucyA9IFN5bWJvbCgnbGVnYWN5T3BlcmF0aW9ucycpXG5jb25zdCBrUHJpdmF0ZU9wZXJhdGlvbnMgPSBTeW1ib2woJ3ByaXZhdGVPcGVyYXRpb25zJylcbmNvbnN0IGtDbG9zZVByb21pc2UgPSBTeW1ib2woJ2Nsb3NlUHJvbWlzZScpXG5jb25zdCBrTGVuZ3RoID0gU3ltYm9sKCdsZW5ndGgnKVxuY29uc3Qga1ByZXdyaXRlUnVuID0gU3ltYm9sKCdwcmV3cml0ZVJ1bicpXG5jb25zdCBrUHJld3JpdGVCYXRjaCA9IFN5bWJvbCgncHJld3JpdGVCYXRjaCcpXG5jb25zdCBrUHJld3JpdGVEYXRhID0gU3ltYm9sKCdwcmV3cml0ZURhdGEnKVxuY29uc3Qga0FkZE1vZGUgPSBTeW1ib2woJ2FkZE1vZGUnKVxuXG5jbGFzcyBBYnN0cmFjdENoYWluZWRCYXRjaCB7XG4gIGNvbnN0cnVjdG9yIChkYiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZGIgIT09ICdvYmplY3QnIHx8IGRiID09PSBudWxsKSB7XG4gICAgICBjb25zdCBoaW50ID0gZGIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgZGJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGFuIGFic3RyYWN0LWxldmVsIGRhdGFiYXNlLCByZWNlaXZlZCAke2hpbnR9YClcbiAgICB9XG5cbiAgICBjb25zdCBlbmFibGVXcml0ZUV2ZW50ID0gZGIubGlzdGVuZXJDb3VudCgnd3JpdGUnKSA+IDBcbiAgICBjb25zdCBlbmFibGVQcmV3cml0ZUhvb2sgPSAhZGIuaG9va3MucHJld3JpdGUubm9vcFxuXG4gICAgLy8gT3BlcmF0aW9ucyBmb3Igd3JpdGUgZXZlbnQuIFdlIGNhbiBza2lwIHBvcHVsYXRpbmcgdGhpcyBhcnJheSAoYW5kIGNsb25pbmcgb2ZcbiAgICAvLyBvcGVyYXRpb25zLCB3aGljaCBpcyB0aGUgZXhwZW5zaXZlIHBhcnQpIGlmIHRoZXJlIGFyZSAwIHdyaXRlIGV2ZW50IGxpc3RlbmVycy5cbiAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSA9IGVuYWJsZVdyaXRlRXZlbnQgPyBbXSA6IG51bGxcblxuICAgIC8vIE9wZXJhdGlvbnMgZm9yIGxlZ2FjeSBiYXRjaCBldmVudC4gSWYgdXNlciBvcHRlZC1pbiB0byB3cml0ZSBldmVudCBvciBwcmV3cml0ZVxuICAgIC8vIGhvb2ssIHNraXAgbGVnYWN5IGJhdGNoIGV2ZW50LiBXZSBjYW4ndCBza2lwIHRoZSBiYXRjaCBldmVudCBiYXNlZCBvbiBsaXN0ZW5lclxuICAgIC8vIGNvdW50LCBiZWNhdXNlIGEgbGlzdGVuZXIgbWF5IGJlIGFkZGVkIGJldHdlZW4gcHV0KCkgb3IgZGVsKCkgYW5kIHdyaXRlKCkuXG4gICAgdGhpc1trTGVnYWN5T3BlcmF0aW9uc10gPSBlbmFibGVXcml0ZUV2ZW50IHx8IGVuYWJsZVByZXdyaXRlSG9vayA/IG51bGwgOiBbXVxuXG4gICAgdGhpc1trTGVuZ3RoXSA9IDBcbiAgICB0aGlzW2tTdGF0dXNdID0gJ29wZW4nXG4gICAgdGhpc1trQ2xvc2VQcm9taXNlXSA9IG51bGxcbiAgICB0aGlzW2tBZGRNb2RlXSA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKS5hZGQgPT09IHRydWVcblxuICAgIGlmIChlbmFibGVQcmV3cml0ZUhvb2spIHtcbiAgICAgIC8vIFVzZSBzZXBhcmF0ZSBhcnJheXMgdG8gY29sbGVjdCBvcGVyYXRpb25zIGFkZGVkIGJ5IGhvb2sgZnVuY3Rpb25zLCBiZWNhdXNlXG4gICAgICAvLyB3ZSB3YWl0IHRvIGFwcGx5IHRob3NlIHVudGlsIHdyaXRlKCkuIFN0b3JlIHRoZXNlIGFycmF5cyBpbiBQcmV3cml0ZURhdGEgd2hpY2hcbiAgICAgIC8vIGV4aXN0cyB0byBzZXBhcmF0ZSBpbnRlcm5hbCBkYXRhIGZyb20gdGhlIHB1YmxpYyBQcmV3cml0ZUJhdGNoIGludGVyZmFjZS5cbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgUHJld3JpdGVEYXRhKFtdLCBlbmFibGVXcml0ZUV2ZW50ID8gW10gOiBudWxsKVxuXG4gICAgICB0aGlzW2tQcmV3cml0ZURhdGFdID0gZGF0YVxuICAgICAgdGhpc1trUHJld3JpdGVCYXRjaF0gPSBuZXcgUHJld3JpdGVCYXRjaChkYiwgZGF0YVtrUHJpdmF0ZU9wZXJhdGlvbnNdLCBkYXRhW2tQdWJsaWNPcGVyYXRpb25zXSlcbiAgICAgIHRoaXNba1ByZXdyaXRlUnVuXSA9IGRiLmhvb2tzLnByZXdyaXRlLnJ1biAvLyBUT0RPOiBkb2N1bWVudCB3aHlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1trUHJld3JpdGVEYXRhXSA9IG51bGxcbiAgICAgIHRoaXNba1ByZXdyaXRlQmF0Y2hdID0gbnVsbFxuICAgICAgdGhpc1trUHJld3JpdGVSdW5dID0gbnVsbFxuICAgIH1cblxuICAgIHRoaXMuZGIgPSBkYlxuICAgIHRoaXMuZGIuYXR0YWNoUmVzb3VyY2UodGhpcylcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkge1xuICAgIGlmICh0aGlzW2tQcmV3cml0ZURhdGFdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpc1trTGVuZ3RoXSArIHRoaXNba1ByZXdyaXRlRGF0YV0ubGVuZ3RoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzW2tMZW5ndGhdXG4gICAgfVxuICB9XG5cbiAgcHV0IChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgYXNzZXJ0U3RhdHVzKHRoaXMpXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgZW1wdHlPcHRpb25zKVxuXG4gICAgY29uc3QgZGVsZWdhdGVkID0gb3B0aW9ucy5zdWJsZXZlbCAhPSBudWxsXG4gICAgY29uc3QgZGIgPSBkZWxlZ2F0ZWQgPyBvcHRpb25zLnN1YmxldmVsIDogdGhpcy5kYlxuICAgIGNvbnN0IG9yaWdpbmFsID0gb3B0aW9uc1xuICAgIGNvbnN0IGtleUVycm9yID0gZGIuX2NoZWNrS2V5KGtleSlcbiAgICBjb25zdCB2YWx1ZUVycm9yID0gZGIuX2NoZWNrVmFsdWUodmFsdWUpXG5cbiAgICBpZiAoa2V5RXJyb3IgIT0gbnVsbCkgdGhyb3cga2V5RXJyb3JcbiAgICBpZiAodmFsdWVFcnJvciAhPSBudWxsKSB0aHJvdyB2YWx1ZUVycm9yXG5cbiAgICAvLyBBdm9pZCBzcHJlYWQgb3BlcmF0b3IgYmVjYXVzZSBvZiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjA0NTQwXG4gICAgY29uc3Qgb3AgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICB0eXBlOiAncHV0JyxcbiAgICAgIGtleSxcbiAgICAgIHZhbHVlLFxuICAgICAga2V5RW5jb2Rpbmc6IGRiLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpLFxuICAgICAgdmFsdWVFbmNvZGluZzogZGIudmFsdWVFbmNvZGluZyhvcHRpb25zLnZhbHVlRW5jb2RpbmcpXG4gICAgfSlcblxuICAgIGlmICh0aGlzW2tQcmV3cml0ZVJ1bl0gIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIE5vdGU6IHdlIGNvdWxkIGhhdmUgY2hvc2VuIHRvIHJlY3Vyc2UgaGVyZSBzbyB0aGF0IHByZXdyaXRlQmF0Y2gucHV0KCkgd291bGRcbiAgICAgICAgLy8gY2FsbCB0aGlzLnB1dCgpLiBCdXQgdGhlbiBvcGVyYXRpb25zIGFkZGVkIGJ5IGhvb2sgZnVuY3Rpb25zIHdvdWxkIGJlIGluc2VydGVkXG4gICAgICAgIC8vIGJlZm9yZSByYXRoZXIgdGhhbiBhZnRlciB1c2VyIG9wZXJhdGlvbnMuIEluc3RlYWQgd2UgcHJvY2VzcyB0aG9zZSBvcGVyYXRpb25zXG4gICAgICAgIC8vIGxhemlseSBpbiB3cml0ZSgpLiBUaGlzIGRvZXMgaHVydCB0aGUgb25seSBwZXJmb3JtYW5jZSBiZW5lZml0IGJlbmVmaXQgb2YgYVxuICAgICAgICAvLyBjaGFpbmVkIGJhdGNoIHRob3VnaCwgd2hpY2ggaXMgdGhhdCBpdCBhdm9pZHMgYmxvY2tpbmcgdGhlIGV2ZW50IGxvb3Agd2l0aFxuICAgICAgICAvLyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiBhdCBhIHRpbWUuIE9uIHRoZSBvdGhlciBoYW5kLCBpZiBvcGVyYXRpb25zIGFkZGVkIGJ5XG4gICAgICAgIC8vIGhvb2sgZnVuY3Rpb25zIGFyZSBhZGphY2VudCAoaS5lLiBzb3J0ZWQpIGNvbW1pdHRpbmcgdGhlbSBzaG91bGQgYmUgZmFzdGVyLlxuICAgICAgICB0aGlzW2tQcmV3cml0ZVJ1bl0ob3AsIHRoaXNba1ByZXdyaXRlQmF0Y2hdKVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBlbmNvZGluZ3MgYWdhaW4gaW4gY2FzZSB0aGV5IHdlcmUgbW9kaWZpZWRcbiAgICAgICAgb3Aua2V5RW5jb2RpbmcgPSBkYi5rZXlFbmNvZGluZyhvcC5rZXlFbmNvZGluZylcbiAgICAgICAgb3AudmFsdWVFbmNvZGluZyA9IGRiLnZhbHVlRW5jb2Rpbmcob3AudmFsdWVFbmNvZGluZylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ1RoZSBwcmV3cml0ZSBob29rIGZhaWxlZCBvbiBiYXRjaC5wdXQoKScsIHtcbiAgICAgICAgICBjb2RlOiAnTEVWRUxfSE9PS19FUlJPUicsXG4gICAgICAgICAgY2F1c2U6IGVyclxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVuY29kZSBkYXRhIGZvciBwcml2YXRlIEFQSVxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gb3Aua2V5RW5jb2RpbmdcbiAgICBjb25zdCBwcmVlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKG9wLmtleSlcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcblxuICAgIC8vIElmIHRoZSBzdWJsZXZlbCBpcyBub3QgYSBkZXNjZW5kYW50IHRoZW4gZm9yd2FyZCB0aGF0IG9wdGlvbiB0byB0aGUgcGFyZW50IGRiXG4gICAgLy8gc28gdGhhdCB3ZSBkb24ndCBlcnJvbmVvdXNseSBhZGQgb3VyIG93biBwcmVmaXggdG8gdGhlIGtleSBvZiB0aGUgb3BlcmF0aW9uLlxuICAgIGNvbnN0IHNpYmxpbmdzID0gZGVsZWdhdGVkICYmICFpc0Rlc2NlbmRhbnQob3Auc3VibGV2ZWwsIHRoaXMuZGIpICYmIG9wLnN1YmxldmVsICE9PSB0aGlzLmRiXG4gICAgY29uc3QgZW5jb2RlZEtleSA9IGRlbGVnYXRlZCAmJiAhc2libGluZ3NcbiAgICAgID8gcHJlZml4RGVzY2VuZGFudEtleShwcmVlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIGRiLCB0aGlzLmRiKVxuICAgICAgOiBwcmVlbmNvZGVkS2V5XG5cbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gb3AudmFsdWVFbmNvZGluZ1xuICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IHZhbHVlRW5jb2RpbmcuZW5jb2RlKG9wLnZhbHVlKVxuICAgIGNvbnN0IHZhbHVlRm9ybWF0ID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgIC8vIE9ubHkgcHJlZml4IG9uY2VcbiAgICBpZiAoZGVsZWdhdGVkICYmICFzaWJsaW5ncykge1xuICAgICAgb3Auc3VibGV2ZWwgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHN1YmxldmVsIGlzIG5vdCBhIGRlc2NlbmRhbnQgdGhlbiB3ZSBzaG91bGRuJ3QgZW1pdCBldmVudHNcbiAgICBpZiAodGhpc1trUHVibGljT3BlcmF0aW9uc10gIT09IG51bGwgJiYgIXNpYmxpbmdzKSB7XG4gICAgICAvLyBDbG9uZSBvcCBiZWZvcmUgd2UgbXV0YXRlIGl0IGZvciB0aGUgcHJpdmF0ZSBBUElcbiAgICAgIGNvbnN0IHB1YmxpY09wZXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIG9wKVxuICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRLZXkgPSBlbmNvZGVkS2V5XG4gICAgICBwdWJsaWNPcGVyYXRpb24uZW5jb2RlZFZhbHVlID0gZW5jb2RlZFZhbHVlXG5cbiAgICAgIGlmIChkZWxlZ2F0ZWQpIHtcbiAgICAgICAgLy8gRW5zdXJlIGVtaXR0ZWQgZGF0YSBtYWtlcyBzZW5zZSBpbiB0aGUgY29udGV4dCBvZiB0aGlzIGRiXG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXkgPSBlbmNvZGVkS2V5XG4gICAgICAgIHB1YmxpY09wZXJhdGlvbi52YWx1ZSA9IGVuY29kZWRWYWx1ZVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5RW5jb2RpbmcgPSB0aGlzLmRiLmtleUVuY29kaW5nKGtleUZvcm1hdClcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLnZhbHVlRW5jb2RpbmcgPSB0aGlzLmRiLnZhbHVlRW5jb2RpbmcodmFsdWVGb3JtYXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXNba1B1YmxpY09wZXJhdGlvbnNdLnB1c2gocHVibGljT3BlcmF0aW9uKVxuICAgIH0gZWxzZSBpZiAodGhpc1trTGVnYWN5T3BlcmF0aW9uc10gIT09IG51bGwgJiYgIXNpYmxpbmdzKSB7XG4gICAgICBjb25zdCBsZWdhY3lPcGVyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbClcblxuICAgICAgbGVnYWN5T3BlcmF0aW9uLnR5cGUgPSAncHV0J1xuICAgICAgbGVnYWN5T3BlcmF0aW9uLmtleSA9IGtleVxuICAgICAgbGVnYWN5T3BlcmF0aW9uLnZhbHVlID0gdmFsdWVcblxuICAgICAgdGhpc1trTGVnYWN5T3BlcmF0aW9uc10ucHVzaChsZWdhY3lPcGVyYXRpb24pXG4gICAgfVxuXG4gICAgLy8gSWYgd2UncmUgZm9yd2FyZGluZyB0aGUgc3VibGV2ZWwgb3B0aW9uIHRoZW4gZG9uJ3QgcHJlZml4IHRoZSBrZXkgeWV0XG4gICAgb3Aua2V5ID0gc2libGluZ3MgPyBlbmNvZGVkS2V5IDogdGhpcy5kYi5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgIG9wLnZhbHVlID0gZW5jb2RlZFZhbHVlXG4gICAgb3Aua2V5RW5jb2RpbmcgPSBrZXlGb3JtYXRcbiAgICBvcC52YWx1ZUVuY29kaW5nID0gdmFsdWVGb3JtYXRcblxuICAgIGlmICh0aGlzW2tBZGRNb2RlXSkge1xuICAgICAgdGhpcy5fYWRkKG9wKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIFwib3BlcmF0aW9uIGFzIG9wdGlvbnNcIiB0cmljayBhdm9pZHMgZnVydGhlciBjbG9uaW5nXG4gICAgICB0aGlzLl9wdXQob3Aua2V5LCBlbmNvZGVkVmFsdWUsIG9wKVxuICAgIH1cblxuICAgIC8vIEluY3JlbWVudCBvbmx5IG9uIHN1Y2Nlc3NcbiAgICB0aGlzW2tMZW5ndGhdKytcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgX3B1dCAoa2V5LCB2YWx1ZSwgb3B0aW9ucykge31cblxuICBkZWwgKGtleSwgb3B0aW9ucykge1xuICAgIGFzc2VydFN0YXR1cyh0aGlzKVxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucylcblxuICAgIGNvbnN0IGRlbGVnYXRlZCA9IG9wdGlvbnMuc3VibGV2ZWwgIT0gbnVsbFxuICAgIGNvbnN0IGRiID0gZGVsZWdhdGVkID8gb3B0aW9ucy5zdWJsZXZlbCA6IHRoaXMuZGJcbiAgICBjb25zdCBvcmlnaW5hbCA9IG9wdGlvbnNcbiAgICBjb25zdCBrZXlFcnJvciA9IGRiLl9jaGVja0tleShrZXkpXG5cbiAgICBpZiAoa2V5RXJyb3IgIT0gbnVsbCkgdGhyb3cga2V5RXJyb3JcblxuICAgIC8vIEF2b2lkIHNwcmVhZCBvcGVyYXRvciBiZWNhdXNlIG9mIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDQ1NDBcbiAgICBjb25zdCBvcCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgIHR5cGU6ICdkZWwnLFxuICAgICAga2V5LFxuICAgICAga2V5RW5jb2Rpbmc6IGRiLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgfSlcblxuICAgIGlmICh0aGlzW2tQcmV3cml0ZVJ1bl0gIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXNba1ByZXdyaXRlUnVuXShvcCwgdGhpc1trUHJld3JpdGVCYXRjaF0pXG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGVuY29kaW5nIGFnYWluIGluIGNhc2UgaXQgd2FzIG1vZGlmaWVkXG4gICAgICAgIG9wLmtleUVuY29kaW5nID0gZGIua2V5RW5jb2Rpbmcob3Aua2V5RW5jb2RpbmcpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdUaGUgcHJld3JpdGUgaG9vayBmYWlsZWQgb24gYmF0Y2guZGVsKCknLCB7XG4gICAgICAgICAgY29kZTogJ0xFVkVMX0hPT0tfRVJST1InLFxuICAgICAgICAgIGNhdXNlOiBlcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbmNvZGUgZGF0YSBmb3IgcHJpdmF0ZSBBUElcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IG9wLmtleUVuY29kaW5nXG4gICAgY29uc3QgcHJlZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShvcC5rZXkpXG4gICAgY29uc3Qga2V5Rm9ybWF0ID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgY29uc3QgZW5jb2RlZEtleSA9IGRlbGVnYXRlZCA/IHByZWZpeERlc2NlbmRhbnRLZXkocHJlZW5jb2RlZEtleSwga2V5Rm9ybWF0LCBkYiwgdGhpcy5kYikgOiBwcmVlbmNvZGVkS2V5XG5cbiAgICAvLyBQcmV2ZW50IGRvdWJsZSBwcmVmaXhpbmdcbiAgICBpZiAoZGVsZWdhdGVkKSBvcC5zdWJsZXZlbCA9IG51bGxcblxuICAgIGlmICh0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSAhPT0gbnVsbCkge1xuICAgICAgLy8gQ2xvbmUgb3AgYmVmb3JlIHdlIG11dGF0ZSBpdCBmb3IgdGhlIHByaXZhdGUgQVBJXG4gICAgICBjb25zdCBwdWJsaWNPcGVyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcClcbiAgICAgIHB1YmxpY09wZXJhdGlvbi5lbmNvZGVkS2V5ID0gZW5jb2RlZEtleVxuXG4gICAgICBpZiAoZGVsZWdhdGVkKSB7XG4gICAgICAgIC8vIEVuc3VyZSBlbWl0dGVkIGRhdGEgbWFrZXMgc2Vuc2UgaW4gdGhlIGNvbnRleHQgb2YgdGhpcyBkYlxuICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5ID0gZW5jb2RlZEtleVxuICAgICAgICBwdWJsaWNPcGVyYXRpb24ua2V5RW5jb2RpbmcgPSB0aGlzLmRiLmtleUVuY29kaW5nKGtleUZvcm1hdClcbiAgICAgIH1cblxuICAgICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10ucHVzaChwdWJsaWNPcGVyYXRpb24pXG4gICAgfSBlbHNlIGlmICh0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGVnYWN5T3BlcmF0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwpXG5cbiAgICAgIGxlZ2FjeU9wZXJhdGlvbi50eXBlID0gJ2RlbCdcbiAgICAgIGxlZ2FjeU9wZXJhdGlvbi5rZXkgPSBrZXlcblxuICAgICAgdGhpc1trTGVnYWN5T3BlcmF0aW9uc10ucHVzaChsZWdhY3lPcGVyYXRpb24pXG4gICAgfVxuXG4gICAgb3Aua2V5ID0gdGhpcy5kYi5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgIG9wLmtleUVuY29kaW5nID0ga2V5Rm9ybWF0XG5cbiAgICBpZiAodGhpc1trQWRkTW9kZV0pIHtcbiAgICAgIHRoaXMuX2FkZChvcClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBcIm9wZXJhdGlvbiBhcyBvcHRpb25zXCIgdHJpY2sgYXZvaWRzIGZ1cnRoZXIgY2xvbmluZ1xuICAgICAgdGhpcy5fZGVsKG9wLmtleSwgb3ApXG4gICAgfVxuXG4gICAgLy8gSW5jcmVtZW50IG9ubHkgb24gc3VjY2Vzc1xuICAgIHRoaXNba0xlbmd0aF0rK1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBfZGVsIChrZXksIG9wdGlvbnMpIHt9XG5cbiAgX2FkZCAob3ApIHt9XG5cbiAgY2xlYXIgKCkge1xuICAgIGFzc2VydFN0YXR1cyh0aGlzKVxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGlmICh0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSAhPT0gbnVsbCkgdGhpc1trUHVibGljT3BlcmF0aW9uc10gPSBbXVxuICAgIGlmICh0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSAhPT0gbnVsbCkgdGhpc1trTGVnYWN5T3BlcmF0aW9uc10gPSBbXVxuICAgIGlmICh0aGlzW2tQcmV3cml0ZURhdGFdICE9PSBudWxsKSB0aGlzW2tQcmV3cml0ZURhdGFdLmNsZWFyKClcblxuICAgIHRoaXNba0xlbmd0aF0gPSAwXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIF9jbGVhciAoKSB7fVxuXG4gIGFzeW5jIHdyaXRlIChvcHRpb25zKSB7XG4gICAgYXNzZXJ0U3RhdHVzKHRoaXMpXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucylcblxuICAgIGlmICh0aGlzW2tMZW5ndGhdID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNba1N0YXR1c10gPSAnd3JpdGluZydcblxuICAgICAgLy8gUHJlcGFyZSBwcm9taXNlIGluIGNhc2UgY2xvc2UoKSBpcyBjYWxsZWQgaW4gdGhlIG1lYW4gdGltZVxuICAgICAgY29uc3QgY2xvc2UgPSBwcmVwYXJlQ2xvc2UodGhpcylcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gUHJvY2VzcyBvcGVyYXRpb25zIGFkZGVkIGJ5IHByZXdyaXRlIGhvb2sgZnVuY3Rpb25zXG4gICAgICAgIGlmICh0aGlzW2tQcmV3cml0ZURhdGFdICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHVibGljT3BlcmF0aW9ucyA9IHRoaXNba1ByZXdyaXRlRGF0YV1ba1B1YmxpY09wZXJhdGlvbnNdXG4gICAgICAgICAgY29uc3QgcHJpdmF0ZU9wZXJhdGlvbnMgPSB0aGlzW2tQcmV3cml0ZURhdGFdW2tQcml2YXRlT3BlcmF0aW9uc11cbiAgICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzW2tQcmV3cml0ZURhdGFdLmxlbmd0aFxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3AgPSBwcml2YXRlT3BlcmF0aW9uc1tpXVxuXG4gICAgICAgICAgICAvLyBXZSBjYW4gX2FkZCgpLCBfcHV0KCkgb3IgX2RlbCgpIGV2ZW4gdGhvdWdoIHN0YXR1cyBpcyBub3cgJ3dyaXRpbmcnIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHN0YXR1cyBpc24ndCBleHBvc2VkIHRvIHRoZSBwcml2YXRlIEFQSSwgc28gdGhlcmUncyBubyBkaWZmZXJlbmNlIGluIHN0YXRlXG4gICAgICAgICAgICAvLyBmcm9tIHRoYXQgcGVyc3BlY3RpdmUsIHVubGVzcyBhbiBpbXBsZW1lbnRhdGlvbiBvdmVycmlkZXMgdGhlIHB1YmxpYyB3cml0ZSgpXG4gICAgICAgICAgICAvLyBtZXRob2QgYXQgaXRzIG93biByaXNrLlxuICAgICAgICAgICAgaWYgKHRoaXNba0FkZE1vZGVdKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZChvcClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3B1dCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcHV0KG9wLmtleSwgb3AudmFsdWUsIG9wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fZGVsKG9wLmtleSwgb3ApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHB1YmxpY09wZXJhdGlvbnMgIT09IG51bGwgJiYgbGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSA9IHRoaXNba1B1YmxpY09wZXJhdGlvbnNdLmNvbmNhdChwdWJsaWNPcGVyYXRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMuX3dyaXRlKG9wdGlvbnMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY2xvc2UoKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpc1trQ2xvc2VQcm9taXNlXVxuICAgICAgICB9IGNhdGNoIChjbG9zZUVycikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leC1hc3NpZ25cbiAgICAgICAgICBlcnIgPSBjb21iaW5lRXJyb3JzKFtlcnIsIGNsb3NlRXJyXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICBjbG9zZSgpXG5cbiAgICAgIC8vIEVtaXQgYWZ0ZXIgaW5pdGlhdGluZyB0aGUgY2xvc2luZywgYmVjYXVzZSBldmVudCBtYXkgdHJpZ2dlciBhXG4gICAgICAvLyBkYiBjbG9zZSB3aGljaCBpbiB0dXJuIHRyaWdnZXJzIChpZGVtcG90ZW50bHkpIGNsb3NpbmcgdGhpcyBiYXRjaC5cbiAgICAgIGlmICh0aGlzW2tQdWJsaWNPcGVyYXRpb25zXSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRiLmVtaXQoJ3dyaXRlJywgdGhpc1trUHVibGljT3BlcmF0aW9uc10pXG4gICAgICB9IGVsc2UgaWYgKHRoaXNba0xlZ2FjeU9wZXJhdGlvbnNdICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGIuZW1pdCgnYmF0Y2gnLCB0aGlzW2tMZWdhY3lPcGVyYXRpb25zXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXNba0Nsb3NlUHJvbWlzZV1cbiAgICB9XG4gIH1cblxuICBhc3luYyBfd3JpdGUgKG9wdGlvbnMpIHt9XG5cbiAgYXN5bmMgY2xvc2UgKCkge1xuICAgIGlmICh0aGlzW2tDbG9zZVByb21pc2VdICE9PSBudWxsKSB7XG4gICAgICAvLyBGaXJzdCBjYWxsZXIgb2YgY2xvc2UoKSBvciB3cml0ZSgpIGlzIHJlc3BvbnNpYmxlIGZvciBlcnJvclxuICAgICAgcmV0dXJuIHRoaXNba0Nsb3NlUHJvbWlzZV0uY2F0Y2gobm9vcClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV3JhcCBwcm9taXNlIHRvIGF2b2lkIHJhY2UgaXNzdWVzIG9uIHJlY3Vyc2l2ZSBjYWxsc1xuICAgICAgcHJlcGFyZUNsb3NlKHRoaXMpKClcbiAgICAgIHJldHVybiB0aGlzW2tDbG9zZVByb21pc2VdXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2Nsb3NlICgpIHt9XG59XG5cbmNvbnN0IHByZXBhcmVDbG9zZSA9IGZ1bmN0aW9uIChiYXRjaCkge1xuICBsZXQgY2xvc2VcblxuICBiYXRjaFtrQ2xvc2VQcm9taXNlXSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjbG9zZSA9ICgpID0+IHtcbiAgICAgIHByaXZhdGVDbG9zZShiYXRjaCkudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBjbG9zZVxufVxuXG5jb25zdCBwcml2YXRlQ2xvc2UgPSBhc3luYyBmdW5jdGlvbiAoYmF0Y2gpIHtcbiAgYmF0Y2hba1N0YXR1c10gPSAnY2xvc2luZydcbiAgYXdhaXQgYmF0Y2guX2Nsb3NlKClcbiAgYmF0Y2guZGIuZGV0YWNoUmVzb3VyY2UoYmF0Y2gpXG59XG5cbmNsYXNzIFByZXdyaXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlT3BlcmF0aW9ucywgcHVibGljT3BlcmF0aW9ucykge1xuICAgIHRoaXNba1ByaXZhdGVPcGVyYXRpb25zXSA9IHByaXZhdGVPcGVyYXRpb25zXG4gICAgdGhpc1trUHVibGljT3BlcmF0aW9uc10gPSBwdWJsaWNPcGVyYXRpb25zXG4gIH1cblxuICBnZXQgbGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpc1trUHJpdmF0ZU9wZXJhdGlvbnNdLmxlbmd0aFxuICB9XG5cbiAgY2xlYXIgKCkge1xuICAgIC8vIENsZWFyIG9wZXJhdGlvbiBhcnJheXMgaWYgcHJlc2VudC5cbiAgICBmb3IgKGNvbnN0IGsgb2YgW2tQdWJsaWNPcGVyYXRpb25zLCBrUHJpdmF0ZU9wZXJhdGlvbnNdKSB7XG4gICAgICBjb25zdCBvcHMgPSB0aGlzW2tdXG5cbiAgICAgIGlmIChvcHMgIT09IG51bGwpIHtcbiAgICAgICAgLy8gS2VlcCBhcnJheSBhbGl2ZSBiZWNhdXNlIFByZXdyaXRlQmF0Y2ggaGFzIGEgcmVmZXJlbmNlIHRvIGl0XG4gICAgICAgIG9wcy5zcGxpY2UoMCwgb3BzLmxlbmd0aClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYXNzZXJ0U3RhdHVzID0gZnVuY3Rpb24gKGJhdGNoKSB7XG4gIGlmIChiYXRjaFtrU3RhdHVzXSAhPT0gJ29wZW4nKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdCYXRjaCBpcyBub3Qgb3BlbjogY2Fubm90IGNoYW5nZSBvcGVyYXRpb25zIGFmdGVyIHdyaXRlKCkgb3IgY2xvc2UoKScsIHtcbiAgICAgIGNvZGU6ICdMRVZFTF9CQVRDSF9OT1RfT1BFTidcbiAgICB9KVxuICB9XG5cbiAgLy8gQ2FuIHRlY2huaWNhbGx5IGJlIHJlbW92ZWQsIGJlY2F1c2UgaXQncyBubyBsb25nZXIgcG9zc2libGUgdG8gY2FsbCBkYi5iYXRjaCgpIHdoZW5cbiAgLy8gc3RhdHVzIGlzIG5vdCAnb3BlbicsIGFuZCBkYi5jbG9zZSgpIGNsb3NlcyB0aGUgYmF0Y2guIEtlZXAgZm9yIG5vdywgaW4gY2FzZSBvZlxuICAvLyB1bmZvcnNlZW4gdXNlcmxhbmQgYmVoYXZpb3JzLlxuICBpZiAoYmF0Y2guZGIuc3RhdHVzICE9PSAnb3BlbicpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignRGF0YWJhc2UgaXMgbm90IG9wZW4nLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfREFUQUJBU0VfTk9UX09QRU4nXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnRzLkFic3RyYWN0Q2hhaW5lZEJhdGNoID0gQWJzdHJhY3RDaGFpbmVkQmF0Y2hcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEFic3RyYWN0Q2hhaW5lZEJhdGNoIH0gPSByZXF1aXJlKCcuLi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoJylcbmNvbnN0IGtFbmNvZGVkID0gU3ltYm9sKCdlbmNvZGVkJylcblxuLy8gRnVuY3Rpb25hbCBkZWZhdWx0IGZvciBjaGFpbmVkIGJhdGNoXG5jbGFzcyBEZWZhdWx0Q2hhaW5lZEJhdGNoIGV4dGVuZHMgQWJzdHJhY3RDaGFpbmVkQmF0Y2gge1xuICBjb25zdHJ1Y3RvciAoZGIpIHtcbiAgICAvLyBPcHQtaW4gdG8gX2FkZCgpIGluc3RlYWQgb2YgX3B1dCgpIGFuZCBfZGVsKClcbiAgICBzdXBlcihkYiwgeyBhZGQ6IHRydWUgfSlcbiAgICB0aGlzW2tFbmNvZGVkXSA9IFtdXG4gIH1cblxuICBfYWRkIChvcCkge1xuICAgIHRoaXNba0VuY29kZWRdLnB1c2gob3ApXG4gIH1cblxuICBfY2xlYXIgKCkge1xuICAgIHRoaXNba0VuY29kZWRdID0gW11cbiAgfVxuXG4gIGFzeW5jIF93cml0ZSAob3B0aW9ucykge1xuICAgIC8vIE5lZWQgdG8gY2FsbCB0aGUgcHJpdmF0ZSByYXRoZXIgdGhhbiBwdWJsaWMgbWV0aG9kLCB0byBwcmV2ZW50XG4gICAgLy8gcmVjdXJzaW9uLCBkb3VibGUgcHJlZml4aW5nLCBkb3VibGUgZW5jb2RpbmcgYW5kIGRvdWJsZSBob29rcy5cbiAgICByZXR1cm4gdGhpcy5kYi5fYmF0Y2godGhpc1trRW5jb2RlZF0sIG9wdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0cy5EZWZhdWx0Q2hhaW5lZEJhdGNoID0gRGVmYXVsdENoYWluZWRCYXRjaFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgbm9vcCB9ID0gcmVxdWlyZSgnLi9jb21tb24nKVxuXG5jb25zdCBrRnVuY3Rpb25zID0gU3ltYm9sKCdmdW5jdGlvbnMnKVxuY29uc3Qga0FzeW5jID0gU3ltYm9sKCdhc3luYycpXG5cbmNsYXNzIERhdGFiYXNlSG9va3Mge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5wb3N0b3BlbiA9IG5ldyBIb29rKHsgYXN5bmM6IHRydWUgfSlcbiAgICB0aGlzLnByZXdyaXRlID0gbmV3IEhvb2soeyBhc3luYzogZmFsc2UgfSlcbiAgICB0aGlzLm5ld3N1YiA9IG5ldyBIb29rKHsgYXN5bmM6IGZhbHNlIH0pXG4gIH1cbn1cblxuY2xhc3MgSG9vayB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgdGhpc1trQXN5bmNdID0gb3B0aW9ucy5hc3luY1xuICAgIHRoaXNba0Z1bmN0aW9uc10gPSBuZXcgU2V0KClcblxuICAgIC8vIE9mZmVyIGEgZmFzdCB3YXkgdG8gY2hlY2sgaWYgaG9vayBmdW5jdGlvbnMgYXJlIHByZXNlbnQuIFdlIGNvdWxkIGFsc28gZXhwb3NlIGFcbiAgICAvLyBzaXplIGdldHRlciwgd2hpY2ggd291bGQgYmUgc2xvd2VyLCBvciBjaGVjayBpdCBieSBob29rLnJ1biAhPT0gbm9vcCwgd2hpY2ggd291bGRcbiAgICAvLyBub3QgYWxsb3cgdXNlcmxhbmQgdG8gZG8gdGhlIHNhbWUgY2hlY2suXG4gICAgdGhpcy5ub29wID0gdHJ1ZVxuICAgIHRoaXMucnVuID0gcnVubmVyKHRoaXMpXG4gIH1cblxuICBhZGQgKGZuKSB7XG4gICAgLy8gVmFsaWRhdGUgbm93IHJhdGhlciB0aGFuIGluIGFzeW5jaHJvbm91cyBjb2RlIHBhdGhzXG4gICAgYXNzZXJ0RnVuY3Rpb24oZm4pXG4gICAgdGhpc1trRnVuY3Rpb25zXS5hZGQoZm4pXG4gICAgdGhpcy5ub29wID0gZmFsc2VcbiAgICB0aGlzLnJ1biA9IHJ1bm5lcih0aGlzKVxuICB9XG5cbiAgZGVsZXRlIChmbikge1xuICAgIGFzc2VydEZ1bmN0aW9uKGZuKVxuICAgIHRoaXNba0Z1bmN0aW9uc10uZGVsZXRlKGZuKVxuICAgIHRoaXMubm9vcCA9IHRoaXNba0Z1bmN0aW9uc10uc2l6ZSA9PT0gMFxuICAgIHRoaXMucnVuID0gcnVubmVyKHRoaXMpXG4gIH1cbn1cblxuY29uc3QgYXNzZXJ0RnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhpbnQgPSBmbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBmblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24sIHJlY2VpdmVkICR7aGludH1gKVxuICB9XG59XG5cbmNvbnN0IHJ1bm5lciA9IGZ1bmN0aW9uIChob29rKSB7XG4gIGlmIChob29rLm5vb3ApIHtcbiAgICByZXR1cm4gbm9vcFxuICB9IGVsc2UgaWYgKGhvb2tba0Z1bmN0aW9uc10uc2l6ZSA9PT0gMSkge1xuICAgIGNvbnN0IFtmbl0gPSBob29rW2tGdW5jdGlvbnNdXG4gICAgcmV0dXJuIGZuXG4gIH0gZWxzZSBpZiAoaG9va1trQXN5bmNdKSB7XG4gICAgLy8gVGhlIHJ1biBmdW5jdGlvbiBzaG91bGQgbm90IHJlZmVyZW5jZSBob29rLCBzbyB0aGF0IGNvbnN1bWVycyBsaWtlIGNoYWluZWQgYmF0Y2hcbiAgICAvLyBhbmQgZGIub3BlbigpIGNhbiBzYXZlIGEgcmVmZXJlbmNlIHRvIGhvb2sucnVuIGFuZCBzYWZlbHkgYXNzdW1lIGl0IHdvbid0IGNoYW5nZVxuICAgIC8vIGR1cmluZyB0aGVpciBsaWZldGltZSBvciBhc3luYyB3b3JrLlxuICAgIGNvbnN0IHJ1biA9IGFzeW5jIGZ1bmN0aW9uIChmdW5jdGlvbnMsIC4uLmFyZ3MpIHtcbiAgICAgIGZvciAoY29uc3QgZm4gb2YgZnVuY3Rpb25zKSB7XG4gICAgICAgIGF3YWl0IGZuKC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bi5iaW5kKG51bGwsIEFycmF5LmZyb20oaG9va1trRnVuY3Rpb25zXSkpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcnVuID0gZnVuY3Rpb24gKGZ1bmN0aW9ucywgLi4uYXJncykge1xuICAgICAgZm9yIChjb25zdCBmbiBvZiBmdW5jdGlvbnMpIHtcbiAgICAgICAgZm4oLi4uYXJncylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVuLmJpbmQobnVsbCwgQXJyYXkuZnJvbShob29rW2tGdW5jdGlvbnNdKSlcbiAgfVxufVxuXG5leHBvcnRzLkRhdGFiYXNlSG9va3MgPSBEYXRhYmFzZUhvb2tzXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBkZXByZWNhdGUgfSA9IHJlcXVpcmUoJy4vY29tbW9uJylcblxuZXhwb3J0cy5FdmVudE1vbml0b3IgPSBjbGFzcyBFdmVudE1vbml0b3Ige1xuICBjb25zdHJ1Y3RvciAoZW1pdHRlciwgZXZlbnRzKSB7XG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIC8vIFRyYWNrIHdoZXRoZXIgbGlzdGVuZXJzIGFyZSBwcmVzZW50XG4gICAgICB0aGlzW2V2ZW50Lm5hbWVdID0gZmFsc2VcblxuICAgICAgLy8gUHJlcGFyZSBkZXByZWNhdGlvbiBtZXNzYWdlXG4gICAgICBpZiAoZXZlbnQuZGVwcmVjYXRlZCkge1xuICAgICAgICBldmVudC5tZXNzYWdlID0gYFRoZSAnJHtldmVudC5uYW1lfScgZXZlbnQgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAnJHtldmVudC5hbHR9JyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgYWJzdHJhY3QtbGV2ZWxgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWFwID0gbmV3IE1hcChldmVudHMubWFwKGUgPT4gW2UubmFtZSwgZV0pKVxuICAgIGNvbnN0IG1vbml0b3IgPSB0aGlzXG5cbiAgICBlbWl0dGVyLm9uKCduZXdMaXN0ZW5lcicsIGJlZm9yZUFkZGVkKVxuICAgIGVtaXR0ZXIub24oJ3JlbW92ZUxpc3RlbmVyJywgYWZ0ZXJSZW1vdmVkKVxuXG4gICAgZnVuY3Rpb24gYmVmb3JlQWRkZWQgKG5hbWUpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbWFwLmdldChuYW1lKVxuXG4gICAgICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtb25pdG9yW25hbWVdID0gdHJ1ZVxuXG4gICAgICAgIGlmIChldmVudC5kZXByZWNhdGVkKSB7XG4gICAgICAgICAgZGVwcmVjYXRlKGV2ZW50Lm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZnRlclJlbW92ZWQgKG5hbWUpIHtcbiAgICAgIGlmIChtYXAuaGFzKG5hbWUpKSB7XG4gICAgICAgIG1vbml0b3JbbmFtZV0gPSB0aGlzLmxpc3RlbmVyQ291bnQobmFtZSkgPiAwXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBnZXRPcHRpb25zLCBlbXB0eU9wdGlvbnMgfSA9IHJlcXVpcmUoJy4vY29tbW9uJylcbmNvbnN0IHsgQWJvcnRFcnJvciB9ID0gcmVxdWlyZSgnLi9lcnJvcnMnKVxuXG5jb25zdCBrT3BlcmF0aW9ucyA9IFN5bWJvbCgnb3BlcmF0aW9ucycpXG5jb25zdCBrU2lnbmFscyA9IFN5bWJvbCgnc2lnbmFscycpXG5jb25zdCBrSGFuZGxlQWJvcnQgPSBTeW1ib2woJ2hhbmRsZUFib3J0JylcblxuY2xhc3MgRGVmZXJyZWRPcGVyYXRpb24ge1xuICBjb25zdHJ1Y3RvciAoZm4sIHNpZ25hbCkge1xuICAgIHRoaXMuZm4gPSBmblxuICAgIHRoaXMuc2lnbmFsID0gc2lnbmFsXG4gIH1cbn1cblxuY2xhc3MgRGVmZXJyZWRRdWV1ZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzW2tPcGVyYXRpb25zXSA9IFtdXG4gICAgdGhpc1trU2lnbmFsc10gPSBuZXcgU2V0KClcbiAgICB0aGlzW2tIYW5kbGVBYm9ydF0gPSB0aGlzW2tIYW5kbGVBYm9ydF0uYmluZCh0aGlzKVxuICB9XG5cbiAgYWRkIChmbiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIGVtcHR5T3B0aW9ucylcbiAgICBjb25zdCBzaWduYWwgPSBvcHRpb25zLnNpZ25hbFxuXG4gICAgaWYgKHNpZ25hbCA9PSBudWxsKSB7XG4gICAgICB0aGlzW2tPcGVyYXRpb25zXS5wdXNoKG5ldyBEZWZlcnJlZE9wZXJhdGlvbihmbiwgbnVsbCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIGNhbGxlZCBpbiB0aGUgc2FtZSB0aWNrXG4gICAgICBmbihuZXcgQWJvcnRFcnJvcigpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzW2tTaWduYWxzXS5oYXMoc2lnbmFsKSkge1xuICAgICAgdGhpc1trU2lnbmFsc10uYWRkKHNpZ25hbClcbiAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRoaXNba0hhbmRsZUFib3J0XSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgdGhpc1trT3BlcmF0aW9uc10ucHVzaChuZXcgRGVmZXJyZWRPcGVyYXRpb24oZm4sIHNpZ25hbCkpXG4gIH1cblxuICBkcmFpbiAoKSB7XG4gICAgY29uc3Qgb3BlcmF0aW9ucyA9IHRoaXNba09wZXJhdGlvbnNdXG4gICAgY29uc3Qgc2lnbmFscyA9IHRoaXNba1NpZ25hbHNdXG5cbiAgICB0aGlzW2tPcGVyYXRpb25zXSA9IFtdXG4gICAgdGhpc1trU2lnbmFsc10gPSBuZXcgU2V0KClcblxuICAgIGZvciAoY29uc3Qgc2lnbmFsIG9mIHNpZ25hbHMpIHtcbiAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRoaXNba0hhbmRsZUFib3J0XSlcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG9wZXJhdGlvbiBvZiBvcGVyYXRpb25zKSB7XG4gICAgICBvcGVyYXRpb24uZm4uY2FsbChudWxsKVxuICAgIH1cbiAgfVxuXG4gIFtrSGFuZGxlQWJvcnRdIChldikge1xuICAgIGNvbnN0IHNpZ25hbCA9IGV2LnRhcmdldFxuICAgIGNvbnN0IGVyciA9IG5ldyBBYm9ydEVycm9yKClcbiAgICBjb25zdCBhYm9ydGVkID0gW11cblxuICAgIC8vIFRPRE86IG9wdGltaXplXG4gICAgdGhpc1trT3BlcmF0aW9uc10gPSB0aGlzW2tPcGVyYXRpb25zXS5maWx0ZXIoZnVuY3Rpb24gKG9wZXJhdGlvbikge1xuICAgICAgaWYgKG9wZXJhdGlvbi5zaWduYWwgIT09IG51bGwgJiYgb3BlcmF0aW9uLnNpZ25hbCA9PT0gc2lnbmFsKSB7XG4gICAgICAgIGFib3J0ZWQucHVzaChvcGVyYXRpb24pXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpc1trU2lnbmFsc10uZGVsZXRlKHNpZ25hbClcblxuICAgIGZvciAoY29uc3Qgb3BlcmF0aW9uIG9mIGFib3J0ZWQpIHtcbiAgICAgIG9wZXJhdGlvbi5mbi5jYWxsKG51bGwsIGVycilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5EZWZlcnJlZFF1ZXVlID0gRGVmZXJyZWRRdWV1ZVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuY29uc3QgcmFuZ2VPcHRpb25zID0gbmV3IFNldChbJ2x0JywgJ2x0ZScsICdndCcsICdndGUnXSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywga2V5RW5jb2RpbmcpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cblxuICBmb3IgKGNvbnN0IGsgaW4gb3B0aW9ucykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBrKSkgY29udGludWVcbiAgICBpZiAoayA9PT0gJ2tleUVuY29kaW5nJyB8fCBrID09PSAndmFsdWVFbmNvZGluZycpIGNvbnRpbnVlXG5cbiAgICBpZiAocmFuZ2VPcHRpb25zLmhhcyhrKSkge1xuICAgICAgLy8gTm90ZSB0aGF0IHdlIGRvbid0IHJlamVjdCBudWxsaXNoIGFuZCBlbXB0eSBvcHRpb25zIGhlcmUuIFdoaWxlXG4gICAgICAvLyB0aG9zZSB0eXBlcyBhcmUgaW52YWxpZCBhcyBrZXlzLCB0aGV5IGFyZSB2YWxpZCBhcyByYW5nZSBvcHRpb25zLlxuICAgICAgcmVzdWx0W2tdID0ga2V5RW5jb2RpbmcuZW5jb2RlKG9wdGlvbnNba10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrXSA9IG9wdGlvbnNba11cbiAgICB9XG4gIH1cblxuICByZXN1bHQucmV2ZXJzZSA9ICEhcmVzdWx0LnJldmVyc2VcbiAgcmVzdWx0LmxpbWl0ID0gTnVtYmVyLmlzSW50ZWdlcihyZXN1bHQubGltaXQpICYmIHJlc3VsdC5saW1pdCA+PSAwID8gcmVzdWx0LmxpbWl0IDogLTFcblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBBYnN0cmFjdEl0ZXJhdG9yLCBBYnN0cmFjdEtleUl0ZXJhdG9yLCBBYnN0cmFjdFZhbHVlSXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0LWl0ZXJhdG9yJylcblxuY29uc3Qga1VuZml4ID0gU3ltYm9sKCd1bmZpeCcpXG5jb25zdCBrSXRlcmF0b3IgPSBTeW1ib2woJ2l0ZXJhdG9yJylcblxuLy8gVE9ETzogdW5maXggbmF0aXZlbHkgaWYgZGIgc3VwcG9ydHMgaXRcbmNsYXNzIEFic3RyYWN0U3VibGV2ZWxJdGVyYXRvciBleHRlbmRzIEFic3RyYWN0SXRlcmF0b3Ige1xuICBjb25zdHJ1Y3RvciAoZGIsIG9wdGlvbnMsIGl0ZXJhdG9yLCB1bmZpeCkge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuXG4gICAgdGhpc1trSXRlcmF0b3JdID0gaXRlcmF0b3JcbiAgICB0aGlzW2tVbmZpeF0gPSB1bmZpeFxuICB9XG5cbiAgYXN5bmMgX25leHQgKCkge1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLm5leHQoKVxuXG4gICAgaWYgKGVudHJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGtleSA9IGVudHJ5WzBdXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGVudHJ5WzBdID0gdGhpc1trVW5maXhdKGtleSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cnlcbiAgfVxuXG4gIGFzeW5jIF9uZXh0diAoc2l6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0ubmV4dHYoc2l6ZSwgb3B0aW9ucylcbiAgICBjb25zdCB1bmZpeCA9IHRoaXNba1VuZml4XVxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyeVswXVxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSBlbnRyeVswXSA9IHVuZml4KGtleSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cmllc1xuICB9XG5cbiAgYXN5bmMgX2FsbCAob3B0aW9ucykge1xuICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0uYWxsKG9wdGlvbnMpXG4gICAgY29uc3QgdW5maXggPSB0aGlzW2tVbmZpeF1cblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgY29uc3Qga2V5ID0gZW50cnlbMF1cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkgZW50cnlbMF0gPSB1bmZpeChrZXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJpZXNcbiAgfVxufVxuXG5jbGFzcyBBYnN0cmFjdFN1YmxldmVsS2V5SXRlcmF0b3IgZXh0ZW5kcyBBYnN0cmFjdEtleUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zLCBpdGVyYXRvciwgdW5maXgpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba0l0ZXJhdG9yXSA9IGl0ZXJhdG9yXG4gICAgdGhpc1trVW5maXhdID0gdW5maXhcbiAgfVxuXG4gIGFzeW5jIF9uZXh0ICgpIHtcbiAgICBjb25zdCBrZXkgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0ubmV4dCgpXG4gICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8ga2V5IDogdGhpc1trVW5maXhdKGtleSlcbiAgfVxuXG4gIGFzeW5jIF9uZXh0diAoc2l6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGtleXMgPSBhd2FpdCB0aGlzW2tJdGVyYXRvcl0ubmV4dHYoc2l6ZSwgb3B0aW9ucylcbiAgICBjb25zdCB1bmZpeCA9IHRoaXNba1VuZml4XVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIGtleXNbaV0gPSB1bmZpeChrZXkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXNcbiAgfVxuXG4gIGFzeW5jIF9hbGwgKG9wdGlvbnMpIHtcbiAgICBjb25zdCBrZXlzID0gYXdhaXQgdGhpc1trSXRlcmF0b3JdLmFsbChvcHRpb25zKVxuICAgIGNvbnN0IHVuZml4ID0gdGhpc1trVW5maXhdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkga2V5c1tpXSA9IHVuZml4KGtleSlcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5c1xuICB9XG59XG5cbmNsYXNzIEFic3RyYWN0U3VibGV2ZWxWYWx1ZUl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKGRiLCBvcHRpb25zLCBpdGVyYXRvcikge1xuICAgIHN1cGVyKGRiLCBvcHRpb25zKVxuICAgIHRoaXNba0l0ZXJhdG9yXSA9IGl0ZXJhdG9yXG4gIH1cblxuICBhc3luYyBfbmV4dCAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0l0ZXJhdG9yXS5uZXh0KClcbiAgfVxuXG4gIGFzeW5jIF9uZXh0diAoc2l6ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzW2tJdGVyYXRvcl0ubmV4dHYoc2l6ZSwgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIF9hbGwgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpc1trSXRlcmF0b3JdLmFsbChvcHRpb25zKVxuICB9XG59XG5cbmZvciAoY29uc3QgSXRlcmF0b3Igb2YgW0Fic3RyYWN0U3VibGV2ZWxJdGVyYXRvciwgQWJzdHJhY3RTdWJsZXZlbEtleUl0ZXJhdG9yLCBBYnN0cmFjdFN1YmxldmVsVmFsdWVJdGVyYXRvcl0pIHtcbiAgSXRlcmF0b3IucHJvdG90eXBlLl9zZWVrID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXNba0l0ZXJhdG9yXS5zZWVrKHRhcmdldCwgb3B0aW9ucylcbiAgfVxuXG4gIEl0ZXJhdG9yLnByb3RvdHlwZS5fY2xvc2UgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0l0ZXJhdG9yXS5jbG9zZSgpXG4gIH1cbn1cblxuZXhwb3J0cy5BYnN0cmFjdFN1YmxldmVsSXRlcmF0b3IgPSBBYnN0cmFjdFN1YmxldmVsSXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RTdWJsZXZlbEtleUl0ZXJhdG9yID0gQWJzdHJhY3RTdWJsZXZlbEtleUl0ZXJhdG9yXG5leHBvcnRzLkFic3RyYWN0U3VibGV2ZWxWYWx1ZUl0ZXJhdG9yID0gQWJzdHJhY3RTdWJsZXZlbFZhbHVlSXRlcmF0b3JcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBNb2R1bGVFcnJvciA9IHJlcXVpcmUoJ21vZHVsZS1lcnJvcicpXG5jb25zdCB7IEJ1ZmZlciB9ID0gcmVxdWlyZSgnYnVmZmVyJykgfHwge31cbmNvbnN0IHtcbiAgQWJzdHJhY3RTdWJsZXZlbEl0ZXJhdG9yLFxuICBBYnN0cmFjdFN1YmxldmVsS2V5SXRlcmF0b3IsXG4gIEFic3RyYWN0U3VibGV2ZWxWYWx1ZUl0ZXJhdG9yXG59ID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1zdWJsZXZlbC1pdGVyYXRvcicpXG5cbmNvbnN0IGtHbG9iYWxQcmVmaXggPSBTeW1ib2woJ3ByZWZpeCcpXG5jb25zdCBrTG9jYWxQcmVmaXggPSBTeW1ib2woJ2xvY2FsUHJlZml4JylcbmNvbnN0IGtMb2NhbFBhdGggPSBTeW1ib2woJ2xvY2FsUGF0aCcpXG5jb25zdCBrR2xvYmFsUGF0aCA9IFN5bWJvbCgnZ2xvYmFsUGF0aCcpXG5jb25zdCBrR2xvYmFsVXBwZXJCb3VuZCA9IFN5bWJvbCgndXBwZXJCb3VuZCcpXG5jb25zdCBrUHJlZml4UmFuZ2UgPSBTeW1ib2woJ3ByZWZpeFJhbmdlJylcbmNvbnN0IGtSb290ID0gU3ltYm9sKCdyb290JylcbmNvbnN0IGtQYXJlbnQgPSBTeW1ib2woJ3BhcmVudCcpXG5jb25zdCBrVW5maXggPSBTeW1ib2woJ3VuZml4JylcblxuY29uc3QgdGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuY29uc3QgZGVmYXVsdHMgPSB7IHNlcGFyYXRvcjogJyEnIH1cblxuLy8gV3JhcHBlZCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmN5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh7IEFic3RyYWN0TGV2ZWwgfSkge1xuICBjbGFzcyBBYnN0cmFjdFN1YmxldmVsIGV4dGVuZHMgQWJzdHJhY3RMZXZlbCB7XG4gICAgc3RhdGljIGRlZmF1bHRzIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0c1xuICAgICAgfSBlbHNlIGlmICghb3B0aW9ucy5zZXBhcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4ub3B0aW9ucywgc2VwYXJhdG9yOiAnIScgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgYXV0b0Nsb3NlIG9wdGlvbiwgd2hpY2ggaWYgdHJ1ZSwgZG9lcyBwYXJlbnQuYXR0YWNoUmVzb3VyY2UodGhpcylcbiAgICBjb25zdHJ1Y3RvciAoZGIsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgIC8vIERvbid0IGZvcndhcmQgQWJzdHJhY3RTdWJsZXZlbCBvcHRpb25zIHRvIEFic3RyYWN0TGV2ZWxcbiAgICAgIGNvbnN0IHsgc2VwYXJhdG9yLCBtYW5pZmVzdCwgLi4uZm9yd2FyZCB9ID0gQWJzdHJhY3RTdWJsZXZlbC5kZWZhdWx0cyhvcHRpb25zKVxuICAgICAgY29uc3QgbmFtZXMgPSBbXS5jb25jYXQobmFtZSkubWFwKG5hbWUgPT4gdHJpbShuYW1lLCBzZXBhcmF0b3IpKVxuXG4gICAgICAvLyBSZXNlcnZlIG9uZSBjaGFyYWN0ZXIgYmV0d2VlbiBzZXBhcmF0b3IgYW5kIG5hbWUgdG8gZ2l2ZSB1cyBhbiB1cHBlciBib3VuZFxuICAgICAgY29uc3QgcmVzZXJ2ZWQgPSBzZXBhcmF0b3IuY2hhckNvZGVBdCgwKSArIDFcbiAgICAgIGNvbnN0IHJvb3QgPSBkYltrUm9vdF0gfHwgZGJcblxuICAgICAgLy8gS2V5cyBzaG91bGQgc29ydCBsaWtlIFsnIWEhJywgJyFhISFhIScsICchYVwiJywgJyFhYSEnLCAnIWIhJ10uXG4gICAgICAvLyBVc2UgQVNDSUkgZm9yIGNvbnNpc3RlbnQgbGVuZ3RoIGJldHdlZW4gc3RyaW5nLCBCdWZmZXIgYW5kIFVpbnQ4QXJyYXlcbiAgICAgIGlmICghbmFtZXMuZXZlcnkobmFtZSA9PiB0ZXh0RW5jb2Rlci5lbmNvZGUobmFtZSkuZXZlcnkoeCA9PiB4ID4gcmVzZXJ2ZWQgJiYgeCA8IDEyNykpKSB7XG4gICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcihgU3VibGV2ZWwgbmFtZSBtdXN0IHVzZSBieXRlcyA+ICR7cmVzZXJ2ZWR9IDwgJHsxMjd9YCwge1xuICAgICAgICAgIGNvZGU6ICdMRVZFTF9JTlZBTElEX1BSRUZJWCdcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgc3VwZXIobWVyZ2VNYW5pZmVzdHMoZGIsIG1hbmlmZXN0KSwgZm9yd2FyZClcblxuICAgICAgY29uc3QgbG9jYWxQcmVmaXggPSBuYW1lcy5tYXAobmFtZSA9PiBzZXBhcmF0b3IgKyBuYW1lICsgc2VwYXJhdG9yKS5qb2luKCcnKVxuICAgICAgY29uc3QgZ2xvYmFsUHJlZml4ID0gKGRiLnByZWZpeCB8fCAnJykgKyBsb2NhbFByZWZpeFxuICAgICAgY29uc3QgZ2xvYmFsVXBwZXJCb3VuZCA9IGdsb2JhbFByZWZpeC5zbGljZSgwLCAtMSkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc2VydmVkKVxuXG4gICAgICAvLyBNb3N0IG9wZXJhdGlvbnMgYXJlIGZvcndhcmRlZCB0byB0aGUgcGFyZW50IGRhdGFiYXNlLCBidXQgY2xlYXIoKSBhbmQgaXRlcmF0b3JzXG4gICAgICAvLyBzdGlsbCBmb3J3YXJkIHRvIHRoZSByb290IGRhdGFiYXNlIC0gd2hpY2ggaXMgb2xkZXIgbG9naWMgYW5kIGRvZXMgbm90IHlldCBuZWVkXG4gICAgICAvLyB0byBjaGFuZ2UsIHVudGlsIHdlIGFkZCBzb21lIGZvcm0gb2YgcHJlcmVhZCBvciBwb3N0cmVhZCBob29rcy5cbiAgICAgIHRoaXNba1Jvb3RdID0gcm9vdFxuICAgICAgdGhpc1trUGFyZW50XSA9IGRiXG4gICAgICB0aGlzW2tMb2NhbFBhdGhdID0gbmFtZXNcbiAgICAgIHRoaXNba0dsb2JhbFBhdGhdID0gZGIucHJlZml4ID8gZGIucGF0aCgpLmNvbmNhdChuYW1lcykgOiBuYW1lc1xuICAgICAgdGhpc1trR2xvYmFsUHJlZml4XSA9IG5ldyBNdWx0aUZvcm1hdChnbG9iYWxQcmVmaXgpXG4gICAgICB0aGlzW2tHbG9iYWxVcHBlckJvdW5kXSA9IG5ldyBNdWx0aUZvcm1hdChnbG9iYWxVcHBlckJvdW5kKVxuICAgICAgdGhpc1trTG9jYWxQcmVmaXhdID0gbmV3IE11bHRpRm9ybWF0KGxvY2FsUHJlZml4KVxuICAgICAgdGhpc1trVW5maXhdID0gbmV3IFVuZml4ZXIoKVxuICAgIH1cblxuICAgIHByZWZpeEtleSAoa2V5LCBrZXlGb3JtYXQsIGxvY2FsKSB7XG4gICAgICBjb25zdCBwcmVmaXggPSBsb2NhbCA/IHRoaXNba0xvY2FsUHJlZml4XSA6IHRoaXNba0dsb2JhbFByZWZpeF1cblxuICAgICAgaWYgKGtleUZvcm1hdCA9PT0gJ3V0ZjgnKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXgudXRmOCArIGtleVxuICAgICAgfSBlbHNlIGlmIChrZXkuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBGYXN0IHBhdGggZm9yIGVtcHR5IGtleSAobm8gY29weSlcbiAgICAgICAgcmV0dXJuIHByZWZpeFtrZXlGb3JtYXRdXG4gICAgICB9IGVsc2UgaWYgKGtleUZvcm1hdCA9PT0gJ3ZpZXcnKSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBwcmVmaXgudmlld1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheSh2aWV3LmJ5dGVMZW5ndGggKyBrZXkuYnl0ZUxlbmd0aClcblxuICAgICAgICByZXN1bHQuc2V0KHZpZXcsIDApXG4gICAgICAgIHJlc3VsdC5zZXQoa2V5LCB2aWV3LmJ5dGVMZW5ndGgpXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gcHJlZml4LmJ1ZmZlclxuICAgICAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbYnVmZmVyLCBrZXldLCBidWZmZXIuYnl0ZUxlbmd0aCArIGtleS5ieXRlTGVuZ3RoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdCBleHBvc2VkIGZvciBub3cuXG4gICAgW2tQcmVmaXhSYW5nZV0gKHJhbmdlLCBrZXlGb3JtYXQpIHtcbiAgICAgIGlmIChyYW5nZS5ndGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYW5nZS5ndGUgPSB0aGlzLnByZWZpeEtleShyYW5nZS5ndGUsIGtleUZvcm1hdCwgZmFsc2UpXG4gICAgICB9IGVsc2UgaWYgKHJhbmdlLmd0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmFuZ2UuZ3QgPSB0aGlzLnByZWZpeEtleShyYW5nZS5ndCwga2V5Rm9ybWF0LCBmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlLmd0ZSA9IHRoaXNba0dsb2JhbFByZWZpeF1ba2V5Rm9ybWF0XVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2UubHRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmFuZ2UubHRlID0gdGhpcy5wcmVmaXhLZXkocmFuZ2UubHRlLCBrZXlGb3JtYXQsIGZhbHNlKVxuICAgICAgfSBlbHNlIGlmIChyYW5nZS5sdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJhbmdlLmx0ID0gdGhpcy5wcmVmaXhLZXkocmFuZ2UubHQsIGtleUZvcm1hdCwgZmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZS5sdGUgPSB0aGlzW2tHbG9iYWxVcHBlckJvdW5kXVtrZXlGb3JtYXRdXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHByZWZpeCAoKSB7XG4gICAgICByZXR1cm4gdGhpc1trR2xvYmFsUHJlZml4XS51dGY4XG4gICAgfVxuXG4gICAgZ2V0IGRiICgpIHtcbiAgICAgIHJldHVybiB0aGlzW2tSb290XVxuICAgIH1cblxuICAgIGdldCBwYXJlbnQgKCkge1xuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF1cbiAgICB9XG5cbiAgICBwYXRoIChsb2NhbCA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbG9jYWwgPyB0aGlzW2tMb2NhbFBhdGhdIDogdGhpc1trR2xvYmFsUGF0aF1cbiAgICB9XG5cbiAgICBhc3luYyBfb3BlbiAob3B0aW9ucykge1xuICAgICAgLy8gVGhlIHBhcmVudCBkYiBtdXN0IG9wZW4gaXRzZWxmIG9yIGJlIChyZSlvcGVuZWQgYnkgdGhlIHVzZXIgYmVjYXVzZVxuICAgICAgLy8gYSBzdWJsZXZlbCBzaG91bGQgbm90IGluaXRpYXRlIHN0YXRlIGNoYW5nZXMgb24gdGhlIHJlc3Qgb2YgdGhlIGRiLlxuICAgICAgcmV0dXJuIHRoaXNba1BhcmVudF0ub3Blbih7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9XG5cbiAgICBhc3luYyBfcHV0IChrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XS5wdXQoa2V5LCB2YWx1ZSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3luYyBfZ2V0IChrZXksIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdLmdldChrZXksIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXN5bmMgX2dldE1hbnkgKGtleXMsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdLmdldE1hbnkoa2V5cywgb3B0aW9ucylcbiAgICB9XG5cbiAgICBhc3luYyBfZGVsIChrZXksIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzW2tQYXJlbnRdLmRlbChrZXksIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgYXN5bmMgX2JhdGNoIChvcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpc1trUGFyZW50XS5iYXRjaChvcGVyYXRpb25zLCBvcHRpb25zKVxuICAgIH1cblxuICAgIC8vIFRPRE86IGNhbGwgcGFyZW50IGluc3RlYWQgb2Ygcm9vdFxuICAgIGFzeW5jIF9jbGVhciAob3B0aW9ucykge1xuICAgICAgLy8gVE9ETyAocmVmYWN0b3IpOiBtb3ZlIHRvIEFic3RyYWN0TGV2ZWxcbiAgICAgIHRoaXNba1ByZWZpeFJhbmdlXShvcHRpb25zLCBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgICAgcmV0dXJuIHRoaXNba1Jvb3RdLmNsZWFyKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgLy8gVE9ETzogY2FsbCBwYXJlbnQgaW5zdGVhZCBvZiByb290XG4gICAgX2l0ZXJhdG9yIChvcHRpb25zKSB7XG4gICAgICAvLyBUT0RPIChyZWZhY3Rvcik6IG1vdmUgdG8gQWJzdHJhY3RMZXZlbFxuICAgICAgdGhpc1trUHJlZml4UmFuZ2VdKG9wdGlvbnMsIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXNba1Jvb3RdLml0ZXJhdG9yKG9wdGlvbnMpXG4gICAgICBjb25zdCB1bmZpeCA9IHRoaXNba1VuZml4XS5nZXQodGhpc1trR2xvYmFsUHJlZml4XS51dGY4Lmxlbmd0aCwgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICAgIHJldHVybiBuZXcgQWJzdHJhY3RTdWJsZXZlbEl0ZXJhdG9yKHRoaXMsIG9wdGlvbnMsIGl0ZXJhdG9yLCB1bmZpeClcbiAgICB9XG5cbiAgICBfa2V5cyAob3B0aW9ucykge1xuICAgICAgdGhpc1trUHJlZml4UmFuZ2VdKG9wdGlvbnMsIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgICBjb25zdCBpdGVyYXRvciA9IHRoaXNba1Jvb3RdLmtleXMob3B0aW9ucylcbiAgICAgIGNvbnN0IHVuZml4ID0gdGhpc1trVW5maXhdLmdldCh0aGlzW2tHbG9iYWxQcmVmaXhdLnV0ZjgubGVuZ3RoLCBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgICAgcmV0dXJuIG5ldyBBYnN0cmFjdFN1YmxldmVsS2V5SXRlcmF0b3IodGhpcywgb3B0aW9ucywgaXRlcmF0b3IsIHVuZml4KVxuICAgIH1cblxuICAgIF92YWx1ZXMgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXNba1ByZWZpeFJhbmdlXShvcHRpb25zLCBvcHRpb25zLmtleUVuY29kaW5nKVxuICAgICAgY29uc3QgaXRlcmF0b3IgPSB0aGlzW2tSb290XS52YWx1ZXMob3B0aW9ucylcbiAgICAgIHJldHVybiBuZXcgQWJzdHJhY3RTdWJsZXZlbFZhbHVlSXRlcmF0b3IodGhpcywgb3B0aW9ucywgaXRlcmF0b3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgQWJzdHJhY3RTdWJsZXZlbCB9XG59XG5cbmNvbnN0IG1lcmdlTWFuaWZlc3RzID0gZnVuY3Rpb24gKHBhcmVudCwgbWFuaWZlc3QpIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBJbmhlcml0IG1hbmlmZXN0IG9mIHBhcmVudCBkYlxuICAgIC4uLnBhcmVudC5zdXBwb3J0cyxcblxuICAgIC8vIERpc2FibGUgdW5zdXBwb3J0ZWQgZmVhdHVyZXNcbiAgICBjcmVhdGVJZk1pc3Npbmc6IGZhbHNlLFxuICAgIGVycm9ySWZFeGlzdHM6IGZhbHNlLFxuXG4gICAgLy8gVW5zZXQgYWRkaXRpb25hbCBldmVudHMgYmVjYXVzZSB3ZSdyZSBub3QgZm9yd2FyZGluZyB0aGVtXG4gICAgZXZlbnRzOiB7fSxcblxuICAgIC8vIFVuc2V0IGFkZGl0aW9uYWwgbWV0aG9kcyAobGlrZSBhcHByb3hpbWF0ZVNpemUpIHdoaWNoIHdlIGNhbid0IHN1cHBvcnQgaGVyZSB1bmxlc3NcbiAgICAvLyB0aGUgQWJzdHJhY3RTdWJsZXZlbCBjbGFzcyBpcyBvdmVycmlkZGVuIGJ5IGFuIGltcGxlbWVudGF0aW9uIG9mIGBhYnN0cmFjdC1sZXZlbGAuXG4gICAgYWRkaXRpb25hbE1ldGhvZHM6IHt9LFxuXG4gICAgLy8gSW5oZXJpdCBtYW5pZmVzdCBvZiBjdXN0b20gQWJzdHJhY3RTdWJsZXZlbCBzdWJjbGFzcy4gU3VjaCBhIGNsYXNzIGlzIG5vdFxuICAgIC8vIGFsbG93ZWQgdG8gb3ZlcnJpZGUgZW5jb2RpbmdzLlxuICAgIC4uLm1hbmlmZXN0LFxuXG4gICAgZW5jb2RpbmdzOiB7XG4gICAgICB1dGY4OiBzdXBwb3J0c0VuY29kaW5nKHBhcmVudCwgJ3V0ZjgnKSxcbiAgICAgIGJ1ZmZlcjogc3VwcG9ydHNFbmNvZGluZyhwYXJlbnQsICdidWZmZXInKSxcbiAgICAgIHZpZXc6IHN1cHBvcnRzRW5jb2RpbmcocGFyZW50LCAndmlldycpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHN1cHBvcnRzRW5jb2RpbmcgPSBmdW5jdGlvbiAocGFyZW50LCBlbmNvZGluZykge1xuICAvLyBQcmVmZXIgYSBub24tdHJhbnNjb2RlZCBlbmNvZGluZyBmb3Igb3B0aW1hbCBwZXJmb3JtYW5jZVxuICByZXR1cm4gcGFyZW50LnN1cHBvcnRzLmVuY29kaW5nc1tlbmNvZGluZ11cbiAgICA/IHBhcmVudC5rZXlFbmNvZGluZyhlbmNvZGluZykubmFtZSA9PT0gZW5jb2RpbmdcbiAgICA6IGZhbHNlXG59XG5cbmNsYXNzIE11bHRpRm9ybWF0IHtcbiAgY29uc3RydWN0b3IgKGtleSkge1xuICAgIHRoaXMudXRmOCA9IGtleVxuICAgIHRoaXMudmlldyA9IHRleHRFbmNvZGVyLmVuY29kZShrZXkpXG4gICAgdGhpcy5idWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuZnJvbSh0aGlzLnZpZXcuYnVmZmVyLCAwLCB0aGlzLnZpZXcuYnl0ZUxlbmd0aCkgOiB7fVxuICB9XG59XG5cbmNsYXNzIFVuZml4ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IG5ldyBNYXAoKVxuICB9XG5cbiAgZ2V0IChwcmVmaXhMZW5ndGgsIGtleUZvcm1hdCkge1xuICAgIGxldCB1bmZpeCA9IHRoaXMuY2FjaGUuZ2V0KGtleUZvcm1hdClcblxuICAgIGlmICh1bmZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoa2V5Rm9ybWF0ID09PSAndmlldycpIHtcbiAgICAgICAgdW5maXggPSBmdW5jdGlvbiAocHJlZml4TGVuZ3RoLCBrZXkpIHtcbiAgICAgICAgICAvLyBBdm9pZCBVaW50OEFycmF5I3NsaWNlKCkgYmVjYXVzZSBpdCBjb3BpZXNcbiAgICAgICAgICByZXR1cm4ga2V5LnN1YmFycmF5KHByZWZpeExlbmd0aClcbiAgICAgICAgfS5iaW5kKG51bGwsIHByZWZpeExlbmd0aClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuZml4ID0gZnVuY3Rpb24gKHByZWZpeExlbmd0aCwga2V5KSB7XG4gICAgICAgICAgLy8gQXZvaWQgQnVmZmVyI3N1YmFycmF5KCkgYmVjYXVzZSBpdCdzIHNsb3dcbiAgICAgICAgICByZXR1cm4ga2V5LnNsaWNlKHByZWZpeExlbmd0aClcbiAgICAgICAgfS5iaW5kKG51bGwsIHByZWZpeExlbmd0aClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWNoZS5zZXQoa2V5Rm9ybWF0LCB1bmZpeClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5maXhcbiAgfVxufVxuXG5jb25zdCB0cmltID0gZnVuY3Rpb24gKHN0ciwgY2hhcikge1xuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBlbmQgPSBzdHIubGVuZ3RoXG5cbiAgd2hpbGUgKHN0YXJ0IDwgZW5kICYmIHN0cltzdGFydF0gPT09IGNoYXIpIHN0YXJ0KytcbiAgd2hpbGUgKGVuZCA+IHN0YXJ0ICYmIHN0cltlbmQgLSAxXSA9PT0gY2hhcikgZW5kLS1cblxuICByZXR1cm4gc3RyLnNsaWNlKHN0YXJ0LCBlbmQpXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgeyBzdXBwb3J0cyB9ID0gcmVxdWlyZSgnbGV2ZWwtc3VwcG9ydHMnKVxuY29uc3QgeyBUcmFuc2NvZGVyIH0gPSByZXF1aXJlKCdsZXZlbC10cmFuc2NvZGVyJylcbmNvbnN0IHsgRXZlbnRFbWl0dGVyIH0gPSByZXF1aXJlKCdldmVudHMnKVxuY29uc3QgTW9kdWxlRXJyb3IgPSByZXF1aXJlKCdtb2R1bGUtZXJyb3InKVxuY29uc3QgY29tYmluZUVycm9ycyA9IHJlcXVpcmUoJ21heWJlLWNvbWJpbmUtZXJyb3JzJylcbmNvbnN0IHsgQWJzdHJhY3RJdGVyYXRvciB9ID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1pdGVyYXRvcicpXG5jb25zdCB7IERlZmF1bHRLZXlJdGVyYXRvciwgRGVmYXVsdFZhbHVlSXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4vbGliL2RlZmF1bHQta3YtaXRlcmF0b3InKVxuY29uc3QgeyBEZWZlcnJlZEl0ZXJhdG9yLCBEZWZlcnJlZEtleUl0ZXJhdG9yLCBEZWZlcnJlZFZhbHVlSXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4vbGliL2RlZmVycmVkLWl0ZXJhdG9yJylcbmNvbnN0IHsgRGVmYXVsdENoYWluZWRCYXRjaCB9ID0gcmVxdWlyZSgnLi9saWIvZGVmYXVsdC1jaGFpbmVkLWJhdGNoJylcbmNvbnN0IHsgRGF0YWJhc2VIb29rcyB9ID0gcmVxdWlyZSgnLi9saWIvaG9va3MnKVxuY29uc3QgeyBQcmV3cml0ZUJhdGNoIH0gPSByZXF1aXJlKCcuL2xpYi9wcmV3cml0ZS1iYXRjaCcpXG5jb25zdCB7IEV2ZW50TW9uaXRvciB9ID0gcmVxdWlyZSgnLi9saWIvZXZlbnQtbW9uaXRvcicpXG5jb25zdCB7IGdldE9wdGlvbnMsIG5vb3AsIGVtcHR5T3B0aW9ucywgcmVzb2x2ZWRQcm9taXNlIH0gPSByZXF1aXJlKCcuL2xpYi9jb21tb24nKVxuY29uc3QgeyBwcmVmaXhEZXNjZW5kYW50S2V5LCBpc0Rlc2NlbmRhbnQgfSA9IHJlcXVpcmUoJy4vbGliL3ByZWZpeGVzJylcbmNvbnN0IHsgRGVmZXJyZWRRdWV1ZSB9ID0gcmVxdWlyZSgnLi9saWIvZGVmZXJyZWQtcXVldWUnKVxuY29uc3QgcmFuZ2VPcHRpb25zID0gcmVxdWlyZSgnLi9saWIvcmFuZ2Utb3B0aW9ucycpXG5cbmNvbnN0IGtSZXNvdXJjZXMgPSBTeW1ib2woJ3Jlc291cmNlcycpXG5jb25zdCBrQ2xvc2VSZXNvdXJjZXMgPSBTeW1ib2woJ2Nsb3NlUmVzb3VyY2VzJylcbmNvbnN0IGtRdWV1ZSA9IFN5bWJvbCgncXVldWUnKVxuY29uc3Qga0RlZmVyT3BlbiA9IFN5bWJvbCgnZGVmZXJPcGVuJylcbmNvbnN0IGtPcHRpb25zID0gU3ltYm9sKCdvcHRpb25zJylcbmNvbnN0IGtTdGF0dXMgPSBTeW1ib2woJ3N0YXR1cycpXG5jb25zdCBrU3RhdHVzQ2hhbmdlID0gU3ltYm9sKCdzdGF0dXNDaGFuZ2UnKVxuY29uc3Qga1N0YXR1c0xvY2tlZCA9IFN5bWJvbCgnc3RhdHVzTG9ja2VkJylcbmNvbnN0IGtEZWZhdWx0T3B0aW9ucyA9IFN5bWJvbCgnZGVmYXVsdE9wdGlvbnMnKVxuY29uc3Qga1RyYW5zY29kZXIgPSBTeW1ib2woJ3RyYW5zY29kZXInKVxuY29uc3Qga0tleUVuY29kaW5nID0gU3ltYm9sKCdrZXlFbmNvZGluZycpXG5jb25zdCBrVmFsdWVFbmNvZGluZyA9IFN5bWJvbCgndmFsdWVFbmNvZGluZycpXG5jb25zdCBrRXZlbnRNb25pdG9yID0gU3ltYm9sKCdldmVudE1vbml0b3InKVxuY29uc3Qga0FycmF5QmF0Y2ggPSBTeW1ib2woJ2FycmF5QmF0Y2gnKVxuXG5jbGFzcyBBYnN0cmFjdExldmVsIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG1hbmlmZXN0LCBvcHRpb25zKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgaWYgKHR5cGVvZiBtYW5pZmVzdCAhPT0gJ29iamVjdCcgfHwgbWFuaWZlc3QgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgJ21hbmlmZXN0JyBtdXN0IGJlIGFuIG9iamVjdFwiKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgY29uc3QgeyBrZXlFbmNvZGluZywgdmFsdWVFbmNvZGluZywgcGFzc2l2ZSwgLi4uZm9yd2FyZCB9ID0gb3B0aW9uc1xuXG4gICAgdGhpc1trUmVzb3VyY2VzXSA9IG5ldyBTZXQoKVxuICAgIHRoaXNba1F1ZXVlXSA9IG5ldyBEZWZlcnJlZFF1ZXVlKClcbiAgICB0aGlzW2tEZWZlck9wZW5dID0gdHJ1ZVxuICAgIHRoaXNba09wdGlvbnNdID0gZm9yd2FyZFxuICAgIHRoaXNba1N0YXR1c10gPSAnb3BlbmluZydcbiAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gbnVsbFxuICAgIHRoaXNba1N0YXR1c0xvY2tlZF0gPSBmYWxzZVxuXG4gICAgdGhpcy5ob29rcyA9IG5ldyBEYXRhYmFzZUhvb2tzKClcbiAgICB0aGlzLnN1cHBvcnRzID0gc3VwcG9ydHMobWFuaWZlc3QsIHtcbiAgICAgIGRlZmVycmVkT3BlbjogdHJ1ZSxcblxuICAgICAgLy8gVE9ETyAobmV4dCBtYWpvcik6IGFkZCBzZWVrXG4gICAgICBzbmFwc2hvdHM6IG1hbmlmZXN0LnNuYXBzaG90cyAhPT0gZmFsc2UsXG4gICAgICBwZXJtYW5lbmNlOiBtYW5pZmVzdC5wZXJtYW5lbmNlICE9PSBmYWxzZSxcblxuICAgICAgZW5jb2RpbmdzOiBtYW5pZmVzdC5lbmNvZGluZ3MgfHwge30sXG4gICAgICBldmVudHM6IE9iamVjdC5hc3NpZ24oe30sIG1hbmlmZXN0LmV2ZW50cywge1xuICAgICAgICBvcGVuaW5nOiB0cnVlLFxuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBjbG9zaW5nOiB0cnVlLFxuICAgICAgICBjbG9zZWQ6IHRydWUsXG4gICAgICAgIHdyaXRlOiB0cnVlLFxuICAgICAgICBwdXQ6IHRydWUsXG4gICAgICAgIGRlbDogdHJ1ZSxcbiAgICAgICAgYmF0Y2g6IHRydWUsXG4gICAgICAgIGNsZWFyOiB0cnVlXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBNb25pdG9yIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXNba0V2ZW50TW9uaXRvcl0gPSBuZXcgRXZlbnRNb25pdG9yKHRoaXMsIFtcbiAgICAgIHsgbmFtZTogJ3dyaXRlJyB9LFxuICAgICAgeyBuYW1lOiAncHV0JywgZGVwcmVjYXRlZDogdHJ1ZSwgYWx0OiAnd3JpdGUnIH0sXG4gICAgICB7IG5hbWU6ICdkZWwnLCBkZXByZWNhdGVkOiB0cnVlLCBhbHQ6ICd3cml0ZScgfSxcbiAgICAgIHsgbmFtZTogJ2JhdGNoJywgZGVwcmVjYXRlZDogdHJ1ZSwgYWx0OiAnd3JpdGUnIH1cbiAgICBdKVxuXG4gICAgdGhpc1trVHJhbnNjb2Rlcl0gPSBuZXcgVHJhbnNjb2Rlcihmb3JtYXRzKHRoaXMpKVxuICAgIHRoaXNba0tleUVuY29kaW5nXSA9IHRoaXNba1RyYW5zY29kZXJdLmVuY29kaW5nKGtleUVuY29kaW5nIHx8ICd1dGY4JylcbiAgICB0aGlzW2tWYWx1ZUVuY29kaW5nXSA9IHRoaXNba1RyYW5zY29kZXJdLmVuY29kaW5nKHZhbHVlRW5jb2RpbmcgfHwgJ3V0ZjgnKVxuXG4gICAgLy8gQWRkIGN1c3RvbSBhbmQgdHJhbnNjb2RlciBlbmNvZGluZ3MgdG8gbWFuaWZlc3RcbiAgICBmb3IgKGNvbnN0IGVuY29kaW5nIG9mIHRoaXNba1RyYW5zY29kZXJdLmVuY29kaW5ncygpKSB7XG4gICAgICBpZiAoIXRoaXMuc3VwcG9ydHMuZW5jb2RpbmdzW2VuY29kaW5nLmNvbW1vbk5hbWVdKSB7XG4gICAgICAgIHRoaXMuc3VwcG9ydHMuZW5jb2RpbmdzW2VuY29kaW5nLmNvbW1vbk5hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXNba0RlZmF1bHRPcHRpb25zXSA9IHtcbiAgICAgIGVtcHR5OiBlbXB0eU9wdGlvbnMsXG4gICAgICBlbnRyeTogT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGtleUVuY29kaW5nOiB0aGlzW2tLZXlFbmNvZGluZ10uY29tbW9uTmFtZSxcbiAgICAgICAgdmFsdWVFbmNvZGluZzogdGhpc1trVmFsdWVFbmNvZGluZ10uY29tbW9uTmFtZVxuICAgICAgfSksXG4gICAgICBlbnRyeUZvcm1hdDogT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGtleUVuY29kaW5nOiB0aGlzW2tLZXlFbmNvZGluZ10uZm9ybWF0LFxuICAgICAgICB2YWx1ZUVuY29kaW5nOiB0aGlzW2tWYWx1ZUVuY29kaW5nXS5mb3JtYXRcbiAgICAgIH0pLFxuICAgICAga2V5OiBPYmplY3QuZnJlZXplKHtcbiAgICAgICAga2V5RW5jb2Rpbmc6IHRoaXNba0tleUVuY29kaW5nXS5jb21tb25OYW1lXG4gICAgICB9KSxcbiAgICAgIGtleUZvcm1hdDogT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGtleUVuY29kaW5nOiB0aGlzW2tLZXlFbmNvZGluZ10uZm9ybWF0XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEJlZm9yZSB3ZSBzdGFydCBvcGVuaW5nLCBsZXQgc3ViY2xhc3MgZmluaXNoIGl0cyBjb25zdHJ1Y3RvclxuICAgIC8vIGFuZCBhbGxvdyBldmVudHMgYW5kIHBvc3RvcGVuIGhvb2sgZnVuY3Rpb25zIHRvIGJlIGFkZGVkLlxuICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgIGlmICh0aGlzW2tEZWZlck9wZW5dKSB7XG4gICAgICAgIHRoaXMub3Blbih7IHBhc3NpdmU6IGZhbHNlIH0pLmNhdGNoKG5vb3ApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldCBzdGF0dXMgKCkge1xuICAgIHJldHVybiB0aGlzW2tTdGF0dXNdXG4gIH1cblxuICBnZXQgcGFyZW50ICgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAga2V5RW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gICAgcmV0dXJuIHRoaXNba1RyYW5zY29kZXJdLmVuY29kaW5nKGVuY29kaW5nICE9IG51bGwgPyBlbmNvZGluZyA6IHRoaXNba0tleUVuY29kaW5nXSlcbiAgfVxuXG4gIHZhbHVlRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gICAgcmV0dXJuIHRoaXNba1RyYW5zY29kZXJdLmVuY29kaW5nKGVuY29kaW5nICE9IG51bGwgPyBlbmNvZGluZyA6IHRoaXNba1ZhbHVlRW5jb2RpbmddKVxuICB9XG5cbiAgYXN5bmMgb3BlbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7IC4uLnRoaXNba09wdGlvbnNdLCAuLi5nZXRPcHRpb25zKG9wdGlvbnMpIH1cblxuICAgIG9wdGlvbnMuY3JlYXRlSWZNaXNzaW5nID0gb3B0aW9ucy5jcmVhdGVJZk1pc3NpbmcgIT09IGZhbHNlXG4gICAgb3B0aW9ucy5lcnJvcklmRXhpc3RzID0gISFvcHRpb25zLmVycm9ySWZFeGlzdHNcblxuICAgIC8vIFRPRE86IGRvY3VtZW50IHdoeSB3ZSBkbyB0aGlzXG4gICAgY29uc3QgcG9zdG9wZW4gPSB0aGlzLmhvb2tzLnBvc3RvcGVuLm5vb3AgPyBudWxsIDogdGhpcy5ob29rcy5wb3N0b3Blbi5ydW5cbiAgICBjb25zdCBwYXNzaXZlID0gb3B0aW9ucy5wYXNzaXZlXG5cbiAgICBpZiAocGFzc2l2ZSAmJiB0aGlzW2tEZWZlck9wZW5dKSB7XG4gICAgICAvLyBXYWl0IGEgdGljayB1bnRpbCBjb25zdHJ1Y3RvciBjYWxscyBvcGVuKCkgbm9uLXBhc3NpdmVseVxuICAgICAgYXdhaXQgdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLy8gV2FpdCBmb3IgcGVuZGluZyBjaGFuZ2VzIGFuZCBjaGVjayB0aGF0IG9wZW5pbmcgaXMgYWxsb3dlZFxuICAgIGFzc2VydFVubG9ja2VkKHRoaXMpXG4gICAgd2hpbGUgKHRoaXNba1N0YXR1c0NoYW5nZV0gIT09IG51bGwpIGF3YWl0IHRoaXNba1N0YXR1c0NoYW5nZV0uY2F0Y2gobm9vcClcbiAgICBhc3NlcnRVbmxvY2tlZCh0aGlzKVxuXG4gICAgaWYgKHBhc3NpdmUpIHtcbiAgICAgIGlmICh0aGlzW2tTdGF0dXNdICE9PSAnb3BlbicpIHRocm93IG5ldyBOb3RPcGVuRXJyb3IoKVxuICAgIH0gZWxzZSBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ2Nsb3NlZCcgfHwgdGhpc1trRGVmZXJPcGVuXSkge1xuICAgICAgdGhpc1trRGVmZXJPcGVuXSA9IGZhbHNlXG4gICAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gcmVzb2x2ZWRQcm9taXNlIC8vIFRPRE86IHJlZmFjdG9yXG4gICAgICB0aGlzW2tTdGF0dXNDaGFuZ2VdID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdvcGVuaW5nJ1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdvcGVuaW5nJylcbiAgICAgICAgICBhd2FpdCB0aGlzLl9vcGVuKG9wdGlvbnMpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRoaXNba1N0YXR1c10gPSAnY2xvc2VkJ1xuXG4gICAgICAgICAgLy8gTXVzdCBoYXBwZW4gYmVmb3JlIHdlIGNsb3NlIHJlc291cmNlcywgaW4gY2FzZSB0aGVpciBjbG9zZSgpIGlzIHdhaXRpbmdcbiAgICAgICAgICAvLyBvbiBhIGRlZmVycmVkIG9wZXJhdGlvbiB3aGljaCBpbiB0dXJuIGlzIHdhaXRpbmcgb24gZGIub3BlbigpLlxuICAgICAgICAgIHRoaXNba1F1ZXVlXS5kcmFpbigpXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpc1trQ2xvc2VSZXNvdXJjZXNdKClcbiAgICAgICAgICB9IGNhdGNoIChyZXNvdXJjZUVycikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4LWFzc2lnblxuICAgICAgICAgICAgZXJyID0gY29tYmluZUVycm9ycyhbZXJyLCByZXNvdXJjZUVycl0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IE5vdE9wZW5FcnJvcihlcnIpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ29wZW4nXG5cbiAgICAgICAgaWYgKHBvc3RvcGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgbGV0IGhvb2tFcnJcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlYWRsb2NrXG4gICAgICAgICAgICB0aGlzW2tTdGF0dXNMb2NrZWRdID0gdHJ1ZVxuICAgICAgICAgICAgYXdhaXQgcG9zdG9wZW4ob3B0aW9ucylcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGhvb2tFcnIgPSBjb252ZXJ0UmVqZWN0aW9uKGVycilcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpc1trU3RhdHVzTG9ja2VkXSA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmV2ZXJ0XG4gICAgICAgICAgaWYgKGhvb2tFcnIpIHtcbiAgICAgICAgICAgIHRoaXNba1N0YXR1c10gPSAnY2xvc2luZydcbiAgICAgICAgICAgIHRoaXNba1F1ZXVlXS5kcmFpbigpXG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXNba0Nsb3NlUmVzb3VyY2VzXSgpXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2Nsb3NlKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNsb3NlRXJyKSB7XG4gICAgICAgICAgICAgIC8vIFRoZXJlJ3Mgbm8gc2FmZSBzdGF0ZSB0byByZXR1cm4gdG8uIENhbid0IHJldHVybiB0byAnb3BlbicgYmVjYXVzZVxuICAgICAgICAgICAgICAvLyBwb3N0b3BlbiBob29rIGZhaWxlZC4gQ2FuJ3QgcmV0dXJuIHRvICdjbG9zZWQnICh3aXRoIHRoZSBhYmlsaXR5IHRvXG4gICAgICAgICAgICAgIC8vIHJlb3BlbikgYmVjYXVzZSB0aGUgdW5kZXJseWluZyBkYXRhYmFzZSBpcyBwb3RlbnRpYWxseSBzdGlsbCBvcGVuLlxuICAgICAgICAgICAgICB0aGlzW2tTdGF0dXNMb2NrZWRdID0gdHJ1ZVxuICAgICAgICAgICAgICBob29rRXJyID0gY29tYmluZUVycm9ycyhbaG9va0VyciwgY2xvc2VFcnJdKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ2Nsb3NlZCdcblxuICAgICAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdUaGUgcG9zdG9wZW4gaG9vayBmYWlsZWQgb24gb3BlbigpJywge1xuICAgICAgICAgICAgICBjb2RlOiAnTEVWRUxfSE9PS19FUlJPUicsXG4gICAgICAgICAgICAgIGNhdXNlOiBob29rRXJyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNba1F1ZXVlXS5kcmFpbigpXG4gICAgICAgIHRoaXMuZW1pdCgnb3BlbicpXG4gICAgICB9KSgpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXNba1N0YXR1c0NoYW5nZV1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSBudWxsXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzW2tTdGF0dXNdICE9PSAnb3BlbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzaG91bGQgbm90IGhhcHBlbiAqL1xuICAgICAgdGhyb3cgbmV3IE5vdE9wZW5FcnJvcigpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX29wZW4gKG9wdGlvbnMpIHt9XG5cbiAgYXN5bmMgY2xvc2UgKCkge1xuICAgIC8vIFdhaXQgZm9yIHBlbmRpbmcgY2hhbmdlcyBhbmQgY2hlY2sgdGhhdCBjbG9zaW5nIGlzIGFsbG93ZWRcbiAgICBhc3NlcnRVbmxvY2tlZCh0aGlzKVxuICAgIHdoaWxlICh0aGlzW2tTdGF0dXNDaGFuZ2VdICE9PSBudWxsKSBhd2FpdCB0aGlzW2tTdGF0dXNDaGFuZ2VdLmNhdGNoKG5vb3ApXG4gICAgYXNzZXJ0VW5sb2NrZWQodGhpcylcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbicgfHwgdGhpc1trRGVmZXJPcGVuXSkge1xuICAgICAgLy8gSWYgY2xvc2UoKSB3YXMgY2FsbGVkIGFmdGVyIGNvbnN0cnVjdG9yLCB3ZSBkaWRuJ3Qgb3BlbiB5ZXRcbiAgICAgIGNvbnN0IGZyb21Jbml0aWFsID0gdGhpc1trRGVmZXJPcGVuXVxuXG4gICAgICB0aGlzW2tEZWZlck9wZW5dID0gZmFsc2VcbiAgICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSByZXNvbHZlZFByb21pc2VcbiAgICAgIHRoaXNba1N0YXR1c0NoYW5nZV0gPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ2Nsb3NpbmcnXG4gICAgICAgIHRoaXNba1F1ZXVlXS5kcmFpbigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2Nsb3NpbmcnKVxuICAgICAgICAgIGF3YWl0IHRoaXNba0Nsb3NlUmVzb3VyY2VzXSgpXG4gICAgICAgICAgaWYgKCFmcm9tSW5pdGlhbCkgYXdhaXQgdGhpcy5fY2xvc2UoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aGlzW2tTdGF0dXNdID0gJ29wZW4nXG4gICAgICAgICAgdGhpc1trUXVldWVdLmRyYWluKClcbiAgICAgICAgICB0aHJvdyBuZXcgTm90Q2xvc2VkRXJyb3IoZXJyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1trU3RhdHVzXSA9ICdjbG9zZWQnXG4gICAgICAgIHRoaXNba1F1ZXVlXS5kcmFpbigpXG4gICAgICAgIHRoaXMuZW1pdCgnY2xvc2VkJylcbiAgICAgIH0pKClcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpc1trU3RhdHVzQ2hhbmdlXVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpc1trU3RhdHVzQ2hhbmdlXSA9IG51bGxcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXNba1N0YXR1c10gIT09ICdjbG9zZWQnKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2hvdWxkIG5vdCBoYXBwZW4gKi9cbiAgICAgIHRocm93IG5ldyBOb3RDbG9zZWRFcnJvcigpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgW2tDbG9zZVJlc291cmNlc10gKCkge1xuICAgIGlmICh0aGlzW2tSZXNvdXJjZXNdLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEluIHBhcmFsbGVsIHNvIHRoYXQgYWxsIHJlc291cmNlcyBrbm93IHRoZXkgYXJlIGNsb3NlZFxuICAgIGNvbnN0IHJlc291cmNlcyA9IEFycmF5LmZyb20odGhpc1trUmVzb3VyY2VzXSlcbiAgICBjb25zdCBwcm9taXNlcyA9IHJlc291cmNlcy5tYXAoY2xvc2VSZXNvdXJjZSlcblxuICAgIC8vIFRPRE86IGFzeW5jL2F3YWl0XG4gICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcykudGhlbihhc3luYyAocmVzdWx0cykgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gW11cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyZXN1bHRzW2ldLnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgICB0aGlzW2tSZXNvdXJjZXNdLmRlbGV0ZShyZXNvdXJjZXNbaV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goY29udmVydFJlamVjdGlvbihyZXN1bHRzW2ldLnJlYXNvbikpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRocm93IGNvbWJpbmVFcnJvcnMoZXJyb3JzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBfY2xvc2UgKCkge31cblxuICBhc3luYyBnZXQgKGtleSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKG9wdGlvbnMsIHRoaXNba0RlZmF1bHRPcHRpb25zXS5lbnRyeSlcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmVyQXN5bmMoKCkgPT4gdGhpcy5nZXQoa2V5LCBvcHRpb25zKSlcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG5cbiAgICBjb25zdCBlcnIgPSB0aGlzLl9jaGVja0tleShrZXkpXG4gICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKG9wdGlvbnMudmFsdWVFbmNvZGluZylcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBjb25zdCB2YWx1ZUZvcm1hdCA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICAvLyBGb3J3YXJkIGVuY29kaW5nIG9wdGlvbnMgdG8gdGhlIHVuZGVybHlpbmcgc3RvcmVcbiAgICBpZiAob3B0aW9ucy5rZXlFbmNvZGluZyAhPT0ga2V5Rm9ybWF0IHx8IG9wdGlvbnMudmFsdWVFbmNvZGluZyAhPT0gdmFsdWVGb3JtYXQpIHtcbiAgICAgIC8vIEF2b2lkIHNwcmVhZCBvcGVyYXRvciBiZWNhdXNlIG9mIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDQ1NDBcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGtleUVuY29kaW5nOiBrZXlGb3JtYXQsIHZhbHVlRW5jb2Rpbmc6IHZhbHVlRm9ybWF0IH0pXG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShrZXkpXG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0aGlzLl9nZXQodGhpcy5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKSwgb3B0aW9ucylcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdmFsdWVFbmNvZGluZy5kZWNvZGUodmFsdWUpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0NvdWxkIG5vdCBkZWNvZGUgdmFsdWUnLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9ERUNPREVfRVJST1InLFxuICAgICAgICBjYXVzZTogZXJyXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9nZXQgKGtleSwgb3B0aW9ucykge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIGFzeW5jIGdldE1hbnkgKGtleXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW50cnkpXG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZlckFzeW5jKCgpID0+IHRoaXMuZ2V0TWFueShrZXlzLCBvcHRpb25zKSlcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgZmlyc3QgYXJndW1lbnQgJ2tleXMnIG11c3QgYmUgYW4gYXJyYXlcIilcbiAgICB9XG5cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSB0aGlzLnZhbHVlRW5jb2Rpbmcob3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIGNvbnN0IHZhbHVlRm9ybWF0ID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgIC8vIEZvcndhcmQgZW5jb2Rpbmcgb3B0aW9uc1xuICAgIGlmIChvcHRpb25zLmtleUVuY29kaW5nICE9PSBrZXlGb3JtYXQgfHwgb3B0aW9ucy52YWx1ZUVuY29kaW5nICE9PSB2YWx1ZUZvcm1hdCkge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsga2V5RW5jb2Rpbmc6IGtleUZvcm1hdCwgdmFsdWVFbmNvZGluZzogdmFsdWVGb3JtYXQgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtYXBwZWRLZXlzID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgICBjb25zdCBlcnIgPSB0aGlzLl9jaGVja0tleShrZXkpXG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnJcblxuICAgICAgbWFwcGVkS2V5c1tpXSA9IHRoaXMucHJlZml4S2V5KGtleUVuY29kaW5nLmVuY29kZShrZXkpLCBrZXlGb3JtYXQsIHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gYXdhaXQgdGhpcy5fZ2V0TWFueShtYXBwZWRLZXlzLCBvcHRpb25zKVxuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlRW5jb2RpbmcuZGVjb2RlKHZhbHVlc1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKGBDb3VsZCBub3QgZGVjb2RlIG9uZSBvciBtb3JlIG9mICR7dmFsdWVzLmxlbmd0aH0gdmFsdWUocylgLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9ERUNPREVfRVJST1InLFxuICAgICAgICBjYXVzZTogZXJyXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNcbiAgfVxuXG4gIGFzeW5jIF9nZXRNYW55IChrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShrZXlzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpXG4gIH1cblxuICBhc3luYyBwdXQgKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuaG9va3MucHJld3JpdGUubm9vcCkge1xuICAgICAgLy8gRm9yd2FyZCB0byBiYXRjaCgpIHdoaWNoIHdpbGwgcnVuIHRoZSBob29rXG4gICAgICAvLyBOb3RlOiB0ZWNobmljYWxseSBtZWFucyB0aGF0IHB1dCgpIHN1cHBvcnRzIHRoZSBzdWJsZXZlbCBvcHRpb24gaW4gdGhpcyBjYXNlLFxuICAgICAgLy8gYnV0IGl0IGdlbmVyYWxseSBkb2Vzbid0IHBlciBkb2N1bWVudGF0aW9uICh3aGljaCBtYWtlcyBzZW5zZSkuIFNhbWUgZm9yIGRlbCgpLlxuICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goW3sgdHlwZTogJ3B1dCcsIGtleSwgdmFsdWUgfV0sIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IGdldE9wdGlvbnMob3B0aW9ucywgdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVudHJ5KVxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmZXJBc3luYygoKSA9PiB0aGlzLnB1dChrZXksIHZhbHVlLCBvcHRpb25zKSlcbiAgICB9XG5cbiAgICBhc3NlcnRPcGVuKHRoaXMpXG5cbiAgICBjb25zdCBlcnIgPSB0aGlzLl9jaGVja0tleShrZXkpIHx8IHRoaXMuX2NoZWNrVmFsdWUodmFsdWUpXG4gICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICAvLyBFbmNvZGUgZGF0YSBmb3IgcHJpdmF0ZSBBUElcbiAgICBjb25zdCBrZXlFbmNvZGluZyA9IHRoaXMua2V5RW5jb2Rpbmcob3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKG9wdGlvbnMudmFsdWVFbmNvZGluZylcbiAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcbiAgICBjb25zdCB2YWx1ZUZvcm1hdCA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG4gICAgY29uc3QgZW5hYmxlV3JpdGVFdmVudCA9IHRoaXNba0V2ZW50TW9uaXRvcl0ud3JpdGVcbiAgICBjb25zdCBvcmlnaW5hbCA9IG9wdGlvbnNcblxuICAgIC8vIEF2b2lkIE9iamVjdC5hc3NpZ24oKSBmb3IgZGVmYXVsdCBvcHRpb25zXG4gICAgLy8gVE9ETzogYWxzbyBhcHBseSB0aGlzIHR3ZWFrIHRvIGdldCgpIGFuZCBnZXRNYW55KClcbiAgICBpZiAob3B0aW9ucyA9PT0gdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVudHJ5KSB7XG4gICAgICBvcHRpb25zID0gdGhpc1trRGVmYXVsdE9wdGlvbnNdLmVudHJ5Rm9ybWF0XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmtleUVuY29kaW5nICE9PSBrZXlGb3JtYXQgfHwgb3B0aW9ucy52YWx1ZUVuY29kaW5nICE9PSB2YWx1ZUZvcm1hdCkge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsga2V5RW5jb2Rpbmc6IGtleUZvcm1hdCwgdmFsdWVFbmNvZGluZzogdmFsdWVGb3JtYXQgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkS2V5ID0ga2V5RW5jb2RpbmcuZW5jb2RlKGtleSlcbiAgICBjb25zdCBwcmVmaXhlZEtleSA9IHRoaXMucHJlZml4S2V5KGVuY29kZWRLZXksIGtleUZvcm1hdCwgdHJ1ZSlcbiAgICBjb25zdCBlbmNvZGVkVmFsdWUgPSB2YWx1ZUVuY29kaW5nLmVuY29kZSh2YWx1ZSlcblxuICAgIGF3YWl0IHRoaXMuX3B1dChwcmVmaXhlZEtleSwgZW5jb2RlZFZhbHVlLCBvcHRpb25zKVxuXG4gICAgaWYgKGVuYWJsZVdyaXRlRXZlbnQpIHtcbiAgICAgIGNvbnN0IG9wID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwsIHtcbiAgICAgICAgdHlwZTogJ3B1dCcsXG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGtleUVuY29kaW5nLFxuICAgICAgICB2YWx1ZUVuY29kaW5nLFxuICAgICAgICBlbmNvZGVkS2V5LFxuICAgICAgICBlbmNvZGVkVmFsdWVcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZW1pdCgnd3JpdGUnLCBbb3BdKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPIChzZW12ZXItbWFqb3IpOiByZW1vdmVcbiAgICAgIHRoaXMuZW1pdCgncHV0Jywga2V5LCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBfcHV0IChrZXksIHZhbHVlLCBvcHRpb25zKSB7fVxuXG4gIGFzeW5jIGRlbCAoa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmhvb2tzLnByZXdyaXRlLm5vb3ApIHtcbiAgICAgIC8vIEZvcndhcmQgdG8gYmF0Y2goKSB3aGljaCB3aWxsIHJ1biB0aGUgaG9va1xuICAgICAgcmV0dXJuIHRoaXMuYmF0Y2goW3sgdHlwZTogJ2RlbCcsIGtleSB9XSwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCB0aGlzW2tEZWZhdWx0T3B0aW9uc10ua2V5KVxuXG4gICAgaWYgKHRoaXNba1N0YXR1c10gPT09ICdvcGVuaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmZXJBc3luYygoKSA9PiB0aGlzLmRlbChrZXksIG9wdGlvbnMpKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcblxuICAgIGNvbnN0IGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSlcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnJcblxuICAgIC8vIEVuY29kZSBkYXRhIGZvciBwcml2YXRlIEFQSVxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zLmtleUVuY29kaW5nKVxuICAgIGNvbnN0IGtleUZvcm1hdCA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIGNvbnN0IGVuYWJsZVdyaXRlRXZlbnQgPSB0aGlzW2tFdmVudE1vbml0b3JdLndyaXRlXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBvcHRpb25zXG5cbiAgICAvLyBBdm9pZCBPYmplY3QuYXNzaWduKCkgZm9yIGRlZmF1bHQgb3B0aW9uc1xuICAgIGlmIChvcHRpb25zID09PSB0aGlzW2tEZWZhdWx0T3B0aW9uc10ua2V5KSB7XG4gICAgICBvcHRpb25zID0gdGhpc1trRGVmYXVsdE9wdGlvbnNdLmtleUZvcm1hdFxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5rZXlFbmNvZGluZyAhPT0ga2V5Rm9ybWF0KSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBrZXlFbmNvZGluZzoga2V5Rm9ybWF0IH0pXG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShrZXkpXG4gICAgY29uc3QgcHJlZml4ZWRLZXkgPSB0aGlzLnByZWZpeEtleShlbmNvZGVkS2V5LCBrZXlGb3JtYXQsIHRydWUpXG5cbiAgICBhd2FpdCB0aGlzLl9kZWwocHJlZml4ZWRLZXksIG9wdGlvbnMpXG5cbiAgICBpZiAoZW5hYmxlV3JpdGVFdmVudCkge1xuICAgICAgY29uc3Qgb3AgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbCwge1xuICAgICAgICB0eXBlOiAnZGVsJyxcbiAgICAgICAga2V5LFxuICAgICAgICBrZXlFbmNvZGluZyxcbiAgICAgICAgZW5jb2RlZEtleVxuICAgICAgfSlcblxuICAgICAgdGhpcy5lbWl0KCd3cml0ZScsIFtvcF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8gKHNlbXZlci1tYWpvcik6IHJlbW92ZVxuICAgICAgdGhpcy5lbWl0KCdkZWwnLCBrZXkpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX2RlbCAoa2V5LCBvcHRpb25zKSB7fVxuXG4gIC8vIFRPRE8gKGZ1dHVyZSk6IGFkZCB3YXkgZm9yIGltcGxlbWVudGF0aW9ucyB0byBkZWNsYXJlIHdoaWNoIG9wdGlvbnMgYXJlIGZvciB0aGVcbiAgLy8gd2hvbGUgYmF0Y2ggcmF0aGVyIHRoYW4gZGVmYXVsdHMgZm9yIGluZGl2aWR1YWwgb3BlcmF0aW9ucy4gRS5nLiB0aGUgc3luYyBvcHRpb25cbiAgLy8gb2YgY2xhc3NpYy1sZXZlbCwgdGhhdCBzaG91bGQgbm90IGJlIGNvcGllZCB0byBpbmRpdmlkdWFsIG9wZXJhdGlvbnMuXG4gIGJhdGNoIChvcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBhc3NlcnRPcGVuKHRoaXMpXG4gICAgICByZXR1cm4gdGhpcy5fY2hhaW5lZEJhdGNoKClcbiAgICB9XG5cbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW1wdHkpXG4gICAgcmV0dXJuIHRoaXNba0FycmF5QmF0Y2hdKG9wZXJhdGlvbnMsIG9wdGlvbnMpXG4gIH1cblxuICAvLyBXcmFwcGVkIGZvciBhc3luYyBlcnJvciBoYW5kbGluZ1xuICBhc3luYyBba0FycmF5QmF0Y2hdIChvcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gICAgLy8gVE9ETyAobm90IHVyZ2VudCk6IGZyZWV6ZSBwcmV3cml0ZSBob29rIGFuZCB3cml0ZSBldmVudFxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmVyQXN5bmMoKCkgPT4gdGhpc1trQXJyYXlCYXRjaF0ob3BlcmF0aW9ucywgb3B0aW9ucykpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG9wZXJhdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50ICdvcGVyYXRpb25zJyBtdXN0IGJlIGFuIGFycmF5XCIpXG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aFxuICAgIGNvbnN0IGVuYWJsZVByZXdyaXRlSG9vayA9ICF0aGlzLmhvb2tzLnByZXdyaXRlLm5vb3BcbiAgICBjb25zdCBlbmFibGVXcml0ZUV2ZW50ID0gdGhpc1trRXZlbnRNb25pdG9yXS53cml0ZVxuICAgIGNvbnN0IHB1YmxpY09wZXJhdGlvbnMgPSBlbmFibGVXcml0ZUV2ZW50ID8gbmV3IEFycmF5KGxlbmd0aCkgOiBudWxsXG4gICAgY29uc3QgcHJpdmF0ZU9wZXJhdGlvbnMgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICAgIGNvbnN0IHByZXdyaXRlQmF0Y2ggPSBlbmFibGVQcmV3cml0ZUhvb2tcbiAgICAgID8gbmV3IFByZXdyaXRlQmF0Y2godGhpcywgcHJpdmF0ZU9wZXJhdGlvbnMsIHB1YmxpY09wZXJhdGlvbnMpXG4gICAgICA6IG51bGxcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIENsb25lIHRoZSBvcCBzbyB0aGF0IHdlIGNhbiBmcmVlbHkgbXV0YXRlIGl0LiBXZSBjYW4ndCB1c2UgYSBjbGFzcyBiZWNhdXNlIHRoZVxuICAgICAgLy8gb3AgY2FuIGhhdmUgdXNlcmxhbmQgcHJvcGVydGllcyB0aGF0IHdlJ2QgaGF2ZSB0byBjb3B5LCBuZWdhdGluZyB0aGUgcGVyZm9ybWFuY2VcbiAgICAgIC8vIGJlbmVmaXRzIG9mIGEgY2xhc3MuIFNvIHVzZSBhIHBsYWluIG9iamVjdC5cbiAgICAgIGNvbnN0IG9wID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgb3BlcmF0aW9uc1tpXSlcblxuICAgICAgLy8gSG9vayBmdW5jdGlvbnMgY2FuIG1vZGlmeSBvcCBidXQgbm90IGl0cyB0eXBlIG9yIHN1YmxldmVsLCBzbyBjYWNoZSB0aG9zZVxuICAgICAgY29uc3QgaXNQdXQgPSBvcC50eXBlID09PSAncHV0J1xuICAgICAgY29uc3QgZGVsZWdhdGVkID0gb3Auc3VibGV2ZWwgIT0gbnVsbFxuICAgICAgY29uc3QgZGIgPSBkZWxlZ2F0ZWQgPyBvcC5zdWJsZXZlbCA6IHRoaXNcblxuICAgICAgY29uc3Qga2V5RXJyb3IgPSBkYi5fY2hlY2tLZXkob3Aua2V5KVxuICAgICAgaWYgKGtleUVycm9yICE9IG51bGwpIHRocm93IGtleUVycm9yXG5cbiAgICAgIG9wLmtleUVuY29kaW5nID0gZGIua2V5RW5jb2Rpbmcob3Aua2V5RW5jb2RpbmcpXG5cbiAgICAgIGlmIChpc1B1dCkge1xuICAgICAgICBjb25zdCB2YWx1ZUVycm9yID0gZGIuX2NoZWNrVmFsdWUob3AudmFsdWUpXG4gICAgICAgIGlmICh2YWx1ZUVycm9yICE9IG51bGwpIHRocm93IHZhbHVlRXJyb3JcblxuICAgICAgICBvcC52YWx1ZUVuY29kaW5nID0gZGIudmFsdWVFbmNvZGluZyhvcC52YWx1ZUVuY29kaW5nKVxuICAgICAgfSBlbHNlIGlmIChvcC50eXBlICE9PSAnZGVsJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBiYXRjaCBvcGVyYXRpb24gbXVzdCBoYXZlIGEgdHlwZSBwcm9wZXJ0eSB0aGF0IGlzICdwdXQnIG9yICdkZWwnXCIpXG4gICAgICB9XG5cbiAgICAgIGlmIChlbmFibGVQcmV3cml0ZUhvb2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmhvb2tzLnByZXdyaXRlLnJ1bihvcCwgcHJld3JpdGVCYXRjaClcblxuICAgICAgICAgIC8vIE5vcm1hbGl6ZSBlbmNvZGluZ3MgYWdhaW4gaW4gY2FzZSB0aGV5IHdlcmUgbW9kaWZpZWRcbiAgICAgICAgICBvcC5rZXlFbmNvZGluZyA9IGRiLmtleUVuY29kaW5nKG9wLmtleUVuY29kaW5nKVxuICAgICAgICAgIGlmIChpc1B1dCkgb3AudmFsdWVFbmNvZGluZyA9IGRiLnZhbHVlRW5jb2Rpbmcob3AudmFsdWVFbmNvZGluZylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdUaGUgcHJld3JpdGUgaG9vayBmYWlsZWQgb24gYmF0Y2goKScsIHtcbiAgICAgICAgICAgIGNvZGU6ICdMRVZFTF9IT09LX0VSUk9SJyxcbiAgICAgICAgICAgIGNhdXNlOiBlcnJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuY29kZSBkYXRhIGZvciBwcml2YXRlIEFQSVxuICAgICAgY29uc3Qga2V5RW5jb2RpbmcgPSBvcC5rZXlFbmNvZGluZ1xuICAgICAgY29uc3QgcHJlZW5jb2RlZEtleSA9IGtleUVuY29kaW5nLmVuY29kZShvcC5rZXkpXG4gICAgICBjb25zdCBrZXlGb3JtYXQgPSBrZXlFbmNvZGluZy5mb3JtYXRcblxuICAgICAgLy8gSWYgdGhlIHN1YmxldmVsIGlzIG5vdCBhIGRlc2NlbmRhbnQgdGhlbiBmb3J3YXJkIHRoYXQgb3B0aW9uIHRvIHRoZSBwYXJlbnQgZGJcbiAgICAgIC8vIHNvIHRoYXQgd2UgZG9uJ3QgZXJyb25lb3VzbHkgYWRkIG91ciBvd24gcHJlZml4IHRvIHRoZSBrZXkgb2YgdGhlIG9wZXJhdGlvbi5cbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gZGVsZWdhdGVkICYmICFpc0Rlc2NlbmRhbnQob3Auc3VibGV2ZWwsIHRoaXMpICYmIG9wLnN1YmxldmVsICE9PSB0aGlzXG4gICAgICBjb25zdCBlbmNvZGVkS2V5ID0gZGVsZWdhdGVkICYmICFzaWJsaW5nc1xuICAgICAgICA/IHByZWZpeERlc2NlbmRhbnRLZXkocHJlZW5jb2RlZEtleSwga2V5Rm9ybWF0LCBkYiwgdGhpcylcbiAgICAgICAgOiBwcmVlbmNvZGVkS2V5XG5cbiAgICAgIC8vIE9ubHkgcHJlZml4IG9uY2VcbiAgICAgIGlmIChkZWxlZ2F0ZWQgJiYgIXNpYmxpbmdzKSB7XG4gICAgICAgIG9wLnN1YmxldmVsID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBsZXQgcHVibGljT3BlcmF0aW9uID0gbnVsbFxuXG4gICAgICAvLyBJZiB0aGUgc3VibGV2ZWwgaXMgbm90IGEgZGVzY2VuZGFudCB0aGVuIHdlIHNob3VsZG4ndCBlbWl0IGV2ZW50c1xuICAgICAgaWYgKGVuYWJsZVdyaXRlRXZlbnQgJiYgIXNpYmxpbmdzKSB7XG4gICAgICAgIC8vIENsb25lIG9wIGJlZm9yZSB3ZSBtdXRhdGUgaXQgZm9yIHRoZSBwcml2YXRlIEFQSVxuICAgICAgICAvLyBUT0RPIChmdXR1cmUgc2VtdmVyLW1ham9yKTogY29uc2lkZXIgc2VuZGluZyB0aGlzIHNoYXBlIHRvIHByaXZhdGUgQVBJIHRvb1xuICAgICAgICBwdWJsaWNPcGVyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBvcClcbiAgICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRLZXkgPSBlbmNvZGVkS2V5XG5cbiAgICAgICAgaWYgKGRlbGVnYXRlZCkge1xuICAgICAgICAgIC8vIEVuc3VyZSBlbWl0dGVkIGRhdGEgbWFrZXMgc2Vuc2UgaW4gdGhlIGNvbnRleHQgb2YgdGhpcyBkYlxuICAgICAgICAgIHB1YmxpY09wZXJhdGlvbi5rZXkgPSBlbmNvZGVkS2V5XG4gICAgICAgICAgcHVibGljT3BlcmF0aW9uLmtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhrZXlGb3JtYXQpXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWNPcGVyYXRpb25zW2ldID0gcHVibGljT3BlcmF0aW9uXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGZvcndhcmRpbmcgdGhlIHN1YmxldmVsIG9wdGlvbiB0aGVuIGRvbid0IHByZWZpeCB0aGUga2V5IHlldFxuICAgICAgb3Aua2V5ID0gc2libGluZ3MgPyBlbmNvZGVkS2V5IDogdGhpcy5wcmVmaXhLZXkoZW5jb2RlZEtleSwga2V5Rm9ybWF0LCB0cnVlKVxuICAgICAgb3Aua2V5RW5jb2RpbmcgPSBrZXlGb3JtYXRcblxuICAgICAgaWYgKGlzUHV0KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlRW5jb2RpbmcgPSBvcC52YWx1ZUVuY29kaW5nXG4gICAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IHZhbHVlRW5jb2RpbmcuZW5jb2RlKG9wLnZhbHVlKVxuICAgICAgICBjb25zdCB2YWx1ZUZvcm1hdCA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICAgICAgb3AudmFsdWUgPSBlbmNvZGVkVmFsdWVcbiAgICAgICAgb3AudmFsdWVFbmNvZGluZyA9IHZhbHVlRm9ybWF0XG5cbiAgICAgICAgaWYgKGVuYWJsZVdyaXRlRXZlbnQgJiYgIXNpYmxpbmdzKSB7XG4gICAgICAgICAgcHVibGljT3BlcmF0aW9uLmVuY29kZWRWYWx1ZSA9IGVuY29kZWRWYWx1ZVxuXG4gICAgICAgICAgaWYgKGRlbGVnYXRlZCkge1xuICAgICAgICAgICAgcHVibGljT3BlcmF0aW9uLnZhbHVlID0gZW5jb2RlZFZhbHVlXG4gICAgICAgICAgICBwdWJsaWNPcGVyYXRpb24udmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyh2YWx1ZUZvcm1hdClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJpdmF0ZU9wZXJhdGlvbnNbaV0gPSBvcFxuICAgIH1cblxuICAgIC8vIFRPRE8gKGZ1dHVyZSk6IG1heWJlIGFkZCBzZXBhcmF0ZSBob29rIHRvIHJ1biBvbiBwcml2YXRlIGRhdGEuIEN1cnJlbnRseSBjYW4ndCB3b3JrXG4gICAgLy8gYmVjYXVzZSBwcmVmaXhpbmcgaGFwcGVucyB0b28gc29vbjsgd2UgbmVlZCB0byBtb3ZlIHRoYXQgbG9naWMgdG8gdGhlIHByaXZhdGVcbiAgICAvLyBBUEkgb2YgQWJzdHJhY3RTdWJsZXZlbCAob3IgcmVpbXBsZW1lbnQgd2l0aCBob29rcykuIFRCRCBob3cgaXQnZCB3b3JrIGluIGNoYWluZWRcbiAgICAvLyBiYXRjaC4gSG9vayB3b3VsZCBsb29rIHNvbWV0aGluZyBsaWtlIGhvb2tzLm1pZHdyaXRlLnJ1bihwcml2YXRlT3BlcmF0aW9ucywgLi4uKS5cblxuICAgIGF3YWl0IHRoaXMuX2JhdGNoKHByaXZhdGVPcGVyYXRpb25zLCBvcHRpb25zKVxuXG4gICAgaWYgKGVuYWJsZVdyaXRlRXZlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnd3JpdGUnLCBwdWJsaWNPcGVyYXRpb25zKVxuICAgIH0gZWxzZSBpZiAoIWVuYWJsZVByZXdyaXRlSG9vaykge1xuICAgICAgLy8gVE9ETyAoc2VtdmVyLW1ham9yKTogcmVtb3ZlXG4gICAgICB0aGlzLmVtaXQoJ2JhdGNoJywgb3BlcmF0aW9ucylcbiAgICB9XG4gIH1cblxuICBhc3luYyBfYmF0Y2ggKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHt9XG5cbiAgc3VibGV2ZWwgKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB4b3B0cyA9IEFic3RyYWN0U3VibGV2ZWwuZGVmYXVsdHMob3B0aW9ucylcbiAgICBjb25zdCBzdWJsZXZlbCA9IHRoaXMuX3N1YmxldmVsKG5hbWUsIHhvcHRzKVxuXG4gICAgaWYgKCF0aGlzLmhvb2tzLm5ld3N1Yi5ub29wKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmhvb2tzLm5ld3N1Yi5ydW4oc3VibGV2ZWwsIHhvcHRzKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBNb2R1bGVFcnJvcignVGhlIG5ld3N1YiBob29rIGZhaWxlZCBvbiBzdWJsZXZlbCgpJywge1xuICAgICAgICAgIGNvZGU6ICdMRVZFTF9IT09LX0VSUk9SJyxcbiAgICAgICAgICBjYXVzZTogZXJyXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YmxldmVsXG4gIH1cblxuICBfc3VibGV2ZWwgKG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEFic3RyYWN0U3VibGV2ZWwodGhpcywgbmFtZSwgb3B0aW9ucylcbiAgfVxuXG4gIHByZWZpeEtleSAoa2V5LCBrZXlGb3JtYXQsIGxvY2FsKSB7XG4gICAgcmV0dXJuIGtleVxuICB9XG5cbiAgYXN5bmMgY2xlYXIgKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhvcHRpb25zLCB0aGlzW2tEZWZhdWx0T3B0aW9uc10uZW1wdHkpXG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZlckFzeW5jKCgpID0+IHRoaXMuY2xlYXIob3B0aW9ucykpXG4gICAgfVxuXG4gICAgYXNzZXJ0T3Blbih0aGlzKVxuXG4gICAgY29uc3Qgb3JpZ2luYWwgPSBvcHRpb25zXG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMua2V5RW5jb2RpbmcpXG5cbiAgICBvcHRpb25zID0gcmFuZ2VPcHRpb25zKG9wdGlvbnMsIGtleUVuY29kaW5nKVxuICAgIG9wdGlvbnMua2V5RW5jb2RpbmcgPSBrZXlFbmNvZGluZy5mb3JtYXRcblxuICAgIGlmIChvcHRpb25zLmxpbWl0ICE9PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9jbGVhcihvcHRpb25zKVxuICAgICAgdGhpcy5lbWl0KCdjbGVhcicsIG9yaWdpbmFsKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9jbGVhciAob3B0aW9ucykge31cblxuICBpdGVyYXRvciAob3B0aW9ucykge1xuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zICYmIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyhvcHRpb25zICYmIG9wdGlvbnMudmFsdWVFbmNvZGluZylcblxuICAgIG9wdGlvbnMgPSByYW5nZU9wdGlvbnMob3B0aW9ucywga2V5RW5jb2RpbmcpXG4gICAgb3B0aW9ucy5rZXlzID0gb3B0aW9ucy5rZXlzICE9PSBmYWxzZVxuICAgIG9wdGlvbnMudmFsdWVzID0gb3B0aW9ucy52YWx1ZXMgIT09IGZhbHNlXG5cbiAgICAvLyBXZSBuZWVkIHRoZSBvcmlnaW5hbCBlbmNvZGluZyBvcHRpb25zIGluIEFic3RyYWN0SXRlcmF0b3IgaW4gb3JkZXIgdG8gZGVjb2RlIGRhdGFcbiAgICBvcHRpb25zW0Fic3RyYWN0SXRlcmF0b3Iua2V5RW5jb2RpbmddID0ga2V5RW5jb2RpbmdcbiAgICBvcHRpb25zW0Fic3RyYWN0SXRlcmF0b3IudmFsdWVFbmNvZGluZ10gPSB2YWx1ZUVuY29kaW5nXG5cbiAgICAvLyBGb3J3YXJkIGVuY29kaW5nIG9wdGlvbnMgdG8gcHJpdmF0ZSBBUElcbiAgICBvcHRpb25zLmtleUVuY29kaW5nID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgb3B0aW9ucy52YWx1ZUVuY29kaW5nID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgRGVmZXJyZWRJdGVyYXRvcih0aGlzLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcbiAgICByZXR1cm4gdGhpcy5faXRlcmF0b3Iob3B0aW9ucylcbiAgfVxuXG4gIF9pdGVyYXRvciAob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgQWJzdHJhY3RJdGVyYXRvcih0aGlzLCBvcHRpb25zKVxuICB9XG5cbiAga2V5cyAob3B0aW9ucykge1xuICAgIC8vIEFsc28gaW5jbHVkZSB2YWx1ZUVuY29kaW5nICh0aG91Z2ggdW51c2VkKSBiZWNhdXNlIHdlIG1heSBmYWxsYmFjayB0byBfaXRlcmF0b3IoKVxuICAgIGNvbnN0IGtleUVuY29kaW5nID0gdGhpcy5rZXlFbmNvZGluZyhvcHRpb25zICYmIG9wdGlvbnMua2V5RW5jb2RpbmcpXG4gICAgY29uc3QgdmFsdWVFbmNvZGluZyA9IHRoaXMudmFsdWVFbmNvZGluZyhvcHRpb25zICYmIG9wdGlvbnMudmFsdWVFbmNvZGluZylcblxuICAgIG9wdGlvbnMgPSByYW5nZU9wdGlvbnMob3B0aW9ucywga2V5RW5jb2RpbmcpXG5cbiAgICAvLyBXZSBuZWVkIHRoZSBvcmlnaW5hbCBlbmNvZGluZyBvcHRpb25zIGluIEFic3RyYWN0S2V5SXRlcmF0b3IgaW4gb3JkZXIgdG8gZGVjb2RlIGRhdGFcbiAgICBvcHRpb25zW0Fic3RyYWN0SXRlcmF0b3Iua2V5RW5jb2RpbmddID0ga2V5RW5jb2RpbmdcbiAgICBvcHRpb25zW0Fic3RyYWN0SXRlcmF0b3IudmFsdWVFbmNvZGluZ10gPSB2YWx1ZUVuY29kaW5nXG5cbiAgICAvLyBGb3J3YXJkIGVuY29kaW5nIG9wdGlvbnMgdG8gcHJpdmF0ZSBBUElcbiAgICBvcHRpb25zLmtleUVuY29kaW5nID0ga2V5RW5jb2RpbmcuZm9ybWF0XG4gICAgb3B0aW9ucy52YWx1ZUVuY29kaW5nID0gdmFsdWVFbmNvZGluZy5mb3JtYXRcblxuICAgIGlmICh0aGlzW2tTdGF0dXNdID09PSAnb3BlbmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgRGVmZXJyZWRLZXlJdGVyYXRvcih0aGlzLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcbiAgICByZXR1cm4gdGhpcy5fa2V5cyhvcHRpb25zKVxuICB9XG5cbiAgX2tleXMgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IERlZmF1bHRLZXlJdGVyYXRvcih0aGlzLCBvcHRpb25zKVxuICB9XG5cbiAgdmFsdWVzIChvcHRpb25zKSB7XG4gICAgY29uc3Qga2V5RW5jb2RpbmcgPSB0aGlzLmtleUVuY29kaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy5rZXlFbmNvZGluZylcbiAgICBjb25zdCB2YWx1ZUVuY29kaW5nID0gdGhpcy52YWx1ZUVuY29kaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy52YWx1ZUVuY29kaW5nKVxuXG4gICAgb3B0aW9ucyA9IHJhbmdlT3B0aW9ucyhvcHRpb25zLCBrZXlFbmNvZGluZylcblxuICAgIC8vIFdlIG5lZWQgdGhlIG9yaWdpbmFsIGVuY29kaW5nIG9wdGlvbnMgaW4gQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yIGluIG9yZGVyIHRvIGRlY29kZSBkYXRhXG4gICAgb3B0aW9uc1tBYnN0cmFjdEl0ZXJhdG9yLmtleUVuY29kaW5nXSA9IGtleUVuY29kaW5nXG4gICAgb3B0aW9uc1tBYnN0cmFjdEl0ZXJhdG9yLnZhbHVlRW5jb2RpbmddID0gdmFsdWVFbmNvZGluZ1xuXG4gICAgLy8gRm9yd2FyZCBlbmNvZGluZyBvcHRpb25zIHRvIHByaXZhdGUgQVBJXG4gICAgb3B0aW9ucy5rZXlFbmNvZGluZyA9IGtleUVuY29kaW5nLmZvcm1hdFxuICAgIG9wdGlvbnMudmFsdWVFbmNvZGluZyA9IHZhbHVlRW5jb2RpbmcuZm9ybWF0XG5cbiAgICBpZiAodGhpc1trU3RhdHVzXSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICByZXR1cm4gbmV3IERlZmVycmVkVmFsdWVJdGVyYXRvcih0aGlzLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGFzc2VydE9wZW4odGhpcylcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzKG9wdGlvbnMpXG4gIH1cblxuICBfdmFsdWVzIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0VmFsdWVJdGVyYXRvcih0aGlzLCBvcHRpb25zKVxuICB9XG5cbiAgZGVmZXIgKGZuLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgdGhpc1trUXVldWVdLmFkZChmdW5jdGlvbiAoYWJvcnRFcnJvcikge1xuICAgICAgaWYgKCFhYm9ydEVycm9yKSBmbigpXG4gICAgfSwgb3B0aW9ucylcbiAgfVxuXG4gIGRlZmVyQXN5bmMgKGZuLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXNba1F1ZXVlXS5hZGQoZnVuY3Rpb24gKGFib3J0RXJyb3IpIHtcbiAgICAgICAgaWYgKGFib3J0RXJyb3IpIHJlamVjdChhYm9ydEVycm9yKVxuICAgICAgICBlbHNlIGZuKCkudGhlbihyZXNvbHZlLCByZWplY3QpXG4gICAgICB9LCBvcHRpb25zKVxuICAgIH0pXG4gIH1cblxuICAvLyBUT0RPOiBkb2NzIGFuZCB0eXBlc1xuICBhdHRhY2hSZXNvdXJjZSAocmVzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHJlc291cmNlICE9PSAnb2JqZWN0JyB8fCByZXNvdXJjZSA9PT0gbnVsbCB8fFxuICAgICAgdHlwZW9mIHJlc291cmNlLmNsb3NlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHJlc291cmNlIG9iamVjdCcpXG4gICAgfVxuXG4gICAgdGhpc1trUmVzb3VyY2VzXS5hZGQocmVzb3VyY2UpXG4gIH1cblxuICAvLyBUT0RPOiBkb2NzIGFuZCB0eXBlc1xuICBkZXRhY2hSZXNvdXJjZSAocmVzb3VyY2UpIHtcbiAgICB0aGlzW2tSZXNvdXJjZXNdLmRlbGV0ZShyZXNvdXJjZSlcbiAgfVxuXG4gIF9jaGFpbmVkQmF0Y2ggKCkge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdENoYWluZWRCYXRjaCh0aGlzKVxuICB9XG5cbiAgX2NoZWNrS2V5IChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IE1vZHVsZUVycm9yKCdLZXkgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJywge1xuICAgICAgICBjb2RlOiAnTEVWRUxfSU5WQUxJRF9LRVknXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF9jaGVja1ZhbHVlICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IE1vZHVsZUVycm9yKCdWYWx1ZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnLCB7XG4gICAgICAgIGNvZGU6ICdMRVZFTF9JTlZBTElEX1ZBTFVFJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgeyBBYnN0cmFjdFN1YmxldmVsIH0gPSByZXF1aXJlKCcuL2xpYi9hYnN0cmFjdC1zdWJsZXZlbCcpKHsgQWJzdHJhY3RMZXZlbCB9KVxuXG5leHBvcnRzLkFic3RyYWN0TGV2ZWwgPSBBYnN0cmFjdExldmVsXG5leHBvcnRzLkFic3RyYWN0U3VibGV2ZWwgPSBBYnN0cmFjdFN1YmxldmVsXG5cbmNvbnN0IGFzc2VydE9wZW4gPSBmdW5jdGlvbiAoZGIpIHtcbiAgaWYgKGRiW2tTdGF0dXNdICE9PSAnb3BlbicpIHtcbiAgICB0aHJvdyBuZXcgTW9kdWxlRXJyb3IoJ0RhdGFiYXNlIGlzIG5vdCBvcGVuJywge1xuICAgICAgY29kZTogJ0xFVkVMX0RBVEFCQVNFX05PVF9PUEVOJ1xuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgYXNzZXJ0VW5sb2NrZWQgPSBmdW5jdGlvbiAoZGIpIHtcbiAgaWYgKGRiW2tTdGF0dXNMb2NrZWRdKSB7XG4gICAgdGhyb3cgbmV3IE1vZHVsZUVycm9yKCdEYXRhYmFzZSBzdGF0dXMgaXMgbG9ja2VkJywge1xuICAgICAgY29kZTogJ0xFVkVMX1NUQVRVU19MT0NLRUQnXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBmb3JtYXRzID0gZnVuY3Rpb24gKGRiKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYi5zdXBwb3J0cy5lbmNvZGluZ3MpXG4gICAgLmZpbHRlcihrID0+ICEhZGIuc3VwcG9ydHMuZW5jb2RpbmdzW2tdKVxufVxuXG5jb25zdCBjbG9zZVJlc291cmNlID0gZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gIHJldHVybiByZXNvdXJjZS5jbG9zZSgpXG59XG5cbi8vIEVuc3VyZSB0aGF0IHdlIGRvbid0IHdvcmsgd2l0aCBmYWxzeSBlcnIgdmFsdWVzLCBiZWNhdXNlIEphdmFTY3JpcHQgdW5mb3J0dW5hdGVseVxuLy8gYWxsb3dzIFByb21pc2UucmVqZWN0KG51bGwpIGFuZCBzaW1pbGFyIHBhdHRlcm5zLiBXaGljaCdkIGJyZWFrIGBpZiAoZXJyKWAgbG9naWMuXG5jb25zdCBjb252ZXJ0UmVqZWN0aW9uID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBpZiAocmVhc29uIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4gcmVhc29uXG4gIH1cblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJlYXNvbikgPT09ICdbb2JqZWN0IEVycm9yXScpIHtcbiAgICByZXR1cm4gcmVhc29uXG4gIH1cblxuICBjb25zdCBoaW50ID0gcmVhc29uID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlYXNvblxuICBjb25zdCBtc2cgPSBgUHJvbWlzZSByZWplY3Rpb24gcmVhc29uIG11c3QgYmUgYW4gRXJyb3IsIHJlY2VpdmVkICR7aGludH1gXG5cbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IobXNnKVxufVxuXG4vLyBJbnRlcm5hbCB1dGlsaXRpZXMsIG5vdCB0eXBlZCBvciBleHBvcnRlZFxuY2xhc3MgTm90T3BlbkVycm9yIGV4dGVuZHMgTW9kdWxlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoY2F1c2UpIHtcbiAgICBzdXBlcignRGF0YWJhc2UgZmFpbGVkIHRvIG9wZW4nLCB7XG4gICAgICBjb2RlOiAnTEVWRUxfREFUQUJBU0VfTk9UX09QRU4nLFxuICAgICAgY2F1c2VcbiAgICB9KVxuICB9XG59XG5cbmNsYXNzIE5vdENsb3NlZEVycm9yIGV4dGVuZHMgTW9kdWxlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoY2F1c2UpIHtcbiAgICBzdXBlcignRGF0YWJhc2UgZmFpbGVkIHRvIGNsb3NlJywge1xuICAgICAgY29kZTogJ0xFVkVMX0RBVEFCQVNFX05PVF9DTE9TRUQnLFxuICAgICAgY2F1c2VcbiAgICB9KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5BYnN0cmFjdExldmVsID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1sZXZlbCcpLkFic3RyYWN0TGV2ZWxcbmV4cG9ydHMuQWJzdHJhY3RTdWJsZXZlbCA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtbGV2ZWwnKS5BYnN0cmFjdFN1YmxldmVsXG5leHBvcnRzLkFic3RyYWN0SXRlcmF0b3IgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWl0ZXJhdG9yJykuQWJzdHJhY3RJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdEtleUl0ZXJhdG9yID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1pdGVyYXRvcicpLkFic3RyYWN0S2V5SXRlcmF0b3JcbmV4cG9ydHMuQWJzdHJhY3RWYWx1ZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1pdGVyYXRvcicpLkFic3RyYWN0VmFsdWVJdGVyYXRvclxuZXhwb3J0cy5BYnN0cmFjdENoYWluZWRCYXRjaCA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaCcpLkFic3RyYWN0Q2hhaW5lZEJhdGNoXG4iLCIvKiBnbG9iYWwgSURCS2V5UmFuZ2UgKi9cblxuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlS2V5UmFuZ2UgKG9wdGlvbnMpIHtcbiAgY29uc3QgbG93ZXIgPSBvcHRpb25zLmd0ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5ndGUgOiBvcHRpb25zLmd0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmd0IDogdW5kZWZpbmVkXG4gIGNvbnN0IHVwcGVyID0gb3B0aW9ucy5sdGUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubHRlIDogb3B0aW9ucy5sdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5sdCA6IHVuZGVmaW5lZFxuICBjb25zdCBsb3dlckV4Y2x1c2l2ZSA9IG9wdGlvbnMuZ3RlID09PSB1bmRlZmluZWRcbiAgY29uc3QgdXBwZXJFeGNsdXNpdmUgPSBvcHRpb25zLmx0ZSA9PT0gdW5kZWZpbmVkXG5cbiAgaWYgKGxvd2VyICE9PSB1bmRlZmluZWQgJiYgdXBwZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBJREJLZXlSYW5nZS5ib3VuZChsb3dlciwgdXBwZXIsIGxvd2VyRXhjbHVzaXZlLCB1cHBlckV4Y2x1c2l2ZSlcbiAgfSBlbHNlIGlmIChsb3dlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIElEQktleVJhbmdlLmxvd2VyQm91bmQobG93ZXIsIGxvd2VyRXhjbHVzaXZlKVxuICB9IGVsc2UgaWYgKHVwcGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gSURCS2V5UmFuZ2UudXBwZXJCb3VuZCh1cHBlciwgdXBwZXJFeGNsdXNpdmUpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gVW5kZWZpbmVkIG1lYW5zIG5vdCBmb3VuZCBpbiBib3RoIEluZGV4ZWREQiBhbmQgQWJzdHJhY3RMZXZlbFxuICAgIHJldHVybiBkYXRhXG4gIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gZGF0YVxuICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKVxuICB9IGVsc2Uge1xuICAgIC8vIE5vbi1iaW5hcnkgZGF0YSBzdG9yZWQgd2l0aCBhbiBvbGQgdmVyc2lvbiAobGV2ZWwtanMgPCA1LjAuMClcbiAgICByZXR1cm4gdGV4dEVuY29kZXIuZW5jb2RlKGRhdGEpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEFic3RyYWN0SXRlcmF0b3IgfSA9IHJlcXVpcmUoJ2Fic3RyYWN0LWxldmVsJylcbmNvbnN0IGNyZWF0ZUtleVJhbmdlID0gcmVxdWlyZSgnLi91dGlsL2tleS1yYW5nZScpXG5jb25zdCBkZXNlcmlhbGl6ZSA9IHJlcXVpcmUoJy4vdXRpbC9kZXNlcmlhbGl6ZScpXG5cbmNvbnN0IGtDYWNoZSA9IFN5bWJvbCgnY2FjaGUnKVxuY29uc3Qga0ZpbmlzaGVkID0gU3ltYm9sKCdmaW5pc2hlZCcpXG5jb25zdCBrT3B0aW9ucyA9IFN5bWJvbCgnb3B0aW9ucycpXG5jb25zdCBrQ3VycmVudE9wdGlvbnMgPSBTeW1ib2woJ2N1cnJlbnRPcHRpb25zJylcbmNvbnN0IGtQb3NpdGlvbiA9IFN5bWJvbCgncG9zaXRpb24nKVxuY29uc3Qga0xvY2F0aW9uID0gU3ltYm9sKCdsb2NhdGlvbicpXG5jb25zdCBrRmlyc3QgPSBTeW1ib2woJ2ZpcnN0JylcbmNvbnN0IGVtcHR5T3B0aW9ucyA9IHt9XG5cbmNsYXNzIEl0ZXJhdG9yIGV4dGVuZHMgQWJzdHJhY3RJdGVyYXRvciB7XG4gIGNvbnN0cnVjdG9yIChkYiwgbG9jYXRpb24sIG9wdGlvbnMpIHtcbiAgICBzdXBlcihkYiwgb3B0aW9ucylcblxuICAgIHRoaXNba0NhY2hlXSA9IFtdXG4gICAgdGhpc1trRmluaXNoZWRdID0gdGhpcy5saW1pdCA9PT0gMFxuICAgIHRoaXNba09wdGlvbnNdID0gb3B0aW9uc1xuICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXSA9IHsgLi4ub3B0aW9ucyB9XG4gICAgdGhpc1trUG9zaXRpb25dID0gdW5kZWZpbmVkXG4gICAgdGhpc1trTG9jYXRpb25dID0gbG9jYXRpb25cbiAgICB0aGlzW2tGaXJzdF0gPSB0cnVlXG4gIH1cblxuICAvLyBOb3RlOiBpZiBjYWxsZWQgYnkgX2FsbCgpIHRoZW4gc2l6ZSBjYW4gYmUgSW5maW5pdHkuIFRoaXMgaXMgYW4gaW50ZXJuYWxcbiAgLy8gZGV0YWlsOyBieSBkZXNpZ24gQWJzdHJhY3RJdGVyYXRvci5uZXh0digpIGRvZXMgbm90IHN1cHBvcnQgSW5maW5pdHkuXG4gIGFzeW5jIF9uZXh0diAoc2l6ZSwgb3B0aW9ucykge1xuICAgIHRoaXNba0ZpcnN0XSA9IGZhbHNlXG5cbiAgICBpZiAodGhpc1trRmluaXNoZWRdKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBpZiAodGhpc1trQ2FjaGVdLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFRPRE86IG1peGluZyBuZXh0IGFuZCBuZXh0diBpcyBub3QgY292ZXJlZCBieSB0ZXN0IHN1aXRlXG4gICAgICBzaXplID0gTWF0aC5taW4oc2l6ZSwgdGhpc1trQ2FjaGVdLmxlbmd0aClcbiAgICAgIHJldHVybiB0aGlzW2tDYWNoZV0uc3BsaWNlKDAsIHNpemUpXG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IHJhbmdlIGJ5IHdoYXQgd2UgYWxyZWFkeSB2aXNpdGVkXG4gICAgaWYgKHRoaXNba1Bvc2l0aW9uXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpc1trT3B0aW9uc10ucmV2ZXJzZSkge1xuICAgICAgICB0aGlzW2tDdXJyZW50T3B0aW9uc10ubHQgPSB0aGlzW2tQb3NpdGlvbl1cbiAgICAgICAgdGhpc1trQ3VycmVudE9wdGlvbnNdLmx0ZSA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1trQ3VycmVudE9wdGlvbnNdLmd0ID0gdGhpc1trUG9zaXRpb25dXG4gICAgICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXS5ndGUgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5UmFuZ2VcblxuICAgIHRyeSB7XG4gICAgICBrZXlSYW5nZSA9IGNyZWF0ZUtleVJhbmdlKHRoaXNba0N1cnJlbnRPcHRpb25zXSlcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAvLyBUaGUgbG93ZXIga2V5IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdXBwZXIga2V5LlxuICAgICAgLy8gSW5kZXhlZERCIHRocm93cyBhbiBlcnJvciwgYnV0IHdlJ2xsIGp1c3QgcmV0dXJuIDAgcmVzdWx0cy5cbiAgICAgIHRoaXNba0ZpbmlzaGVkXSA9IHRydWVcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5kYi5kYi50cmFuc2FjdGlvbihbdGhpc1trTG9jYXRpb25dXSwgJ3JlYWRvbmx5JylcbiAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHRoaXNba0xvY2F0aW9uXSlcbiAgICBjb25zdCBlbnRyaWVzID0gW11cblxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBJZiBhbiBlcnJvciBvY2N1cnMgKG9uIHRoZSByZXF1ZXN0KSwgdGhlIHRyYW5zYWN0aW9uIHdpbGwgYWJvcnQuXG4gICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QodHJhbnNhY3Rpb24uZXJyb3IgfHwgbmV3IEVycm9yKCdhYm9ydGVkIGJ5IHVzZXInKSlcbiAgICAgIH1cblxuICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShlbnRyaWVzKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXNba09wdGlvbnNdLnJldmVyc2UpIHtcbiAgICAgIGxldCBrZXlzXG4gICAgICBsZXQgdmFsdWVzXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAvLyBXYWl0IGZvciBib3RoIHJlcXVlc3RzIHRvIGNvbXBsZXRlXG4gICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQgfHwgdmFsdWVzID09PSB1bmRlZmluZWQpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE1hdGgubWF4KGtleXMubGVuZ3RoLCB2YWx1ZXMubGVuZ3RoKVxuXG4gICAgICAgIGlmIChsZW5ndGggPT09IDAgfHwgc2l6ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICB0aGlzW2tGaW5pc2hlZF0gPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1trUG9zaXRpb25dID0ga2V5c1tsZW5ndGggLSAxXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzaXplXG4gICAgICAgIGVudHJpZXMubGVuZ3RoID0gbGVuZ3RoXG5cbiAgICAgICAgLy8gTWVyZ2Uga2V5cyBhbmQgdmFsdWVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaV1cblxuICAgICAgICAgIGVudHJpZXNbaV0gPSBbXG4gICAgICAgICAgICB0aGlzW2tPcHRpb25zXS5rZXlzID8gZGVzZXJpYWxpemUoa2V5KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoaXNba09wdGlvbnNdLnZhbHVlcyA/IGRlc2VyaWFsaXplKHZhbHVlKSA6IHVuZGVmaW5lZFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIG1heWJlQ29tbWl0KHRyYW5zYWN0aW9uKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBrZXlzIHdlcmUgbm90IHJlcXVlc3RlZCBhbmQgc2l6ZSBpcyBJbmZpbml0eSwgd2UgZG9uJ3QgaGF2ZSB0byBrZWVwXG4gICAgICAvLyB0cmFjayBvZiBwb3NpdGlvbiBhbmQgY2FuIHRodXMgc2tpcCBnZXR0aW5nIGtleXMuXG4gICAgICBpZiAodGhpc1trT3B0aW9uc10ua2V5cyB8fCBzaXplIDwgSW5maW5pdHkpIHtcbiAgICAgICAgc3RvcmUuZ2V0QWxsS2V5cyhrZXlSYW5nZSwgc2l6ZSA8IEluZmluaXR5ID8gc2l6ZSA6IHVuZGVmaW5lZCkub25zdWNjZXNzID0gKGV2KSA9PiB7XG4gICAgICAgICAga2V5cyA9IGV2LnRhcmdldC5yZXN1bHRcbiAgICAgICAgICBjb21wbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBbXVxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzW2tPcHRpb25zXS52YWx1ZXMpIHtcbiAgICAgICAgc3RvcmUuZ2V0QWxsKGtleVJhbmdlLCBzaXplIDwgSW5maW5pdHkgPyBzaXplIDogdW5kZWZpbmVkKS5vbnN1Y2Nlc3MgPSAoZXYpID0+IHtcbiAgICAgICAgICB2YWx1ZXMgPSBldi50YXJnZXQucmVzdWx0XG4gICAgICAgICAgY29tcGxldGUoKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZXMgPSBbXVxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhbid0IHVzZSBnZXRBbGwoKSBpbiByZXZlcnNlLCBzbyB1c2UgYSBzbG93ZXIgY3Vyc29yIHRoYXQgeWllbGRzIG9uZSBpdGVtIGF0IGEgdGltZVxuICAgICAgLy8gVE9ETzogdGVzdCBpZiBhbGwgdGFyZ2V0IGJyb3dzZXJzIHN1cHBvcnQgb3BlbktleUN1cnNvclxuICAgICAgY29uc3QgbWV0aG9kID0gIXRoaXNba09wdGlvbnNdLnZhbHVlcyAmJiBzdG9yZS5vcGVuS2V5Q3Vyc29yID8gJ29wZW5LZXlDdXJzb3InIDogJ29wZW5DdXJzb3InXG5cbiAgICAgIHN0b3JlW21ldGhvZF0oa2V5UmFuZ2UsICdwcmV2Jykub25zdWNjZXNzID0gKGV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IGV2LnRhcmdldC5yZXN1bHRcblxuICAgICAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIHZhbHVlIH0gPSBjdXJzb3JcbiAgICAgICAgICB0aGlzW2tQb3NpdGlvbl0gPSBrZXlcblxuICAgICAgICAgIGVudHJpZXMucHVzaChbXG4gICAgICAgICAgICB0aGlzW2tPcHRpb25zXS5rZXlzICYmIGtleSAhPT0gdW5kZWZpbmVkID8gZGVzZXJpYWxpemUoa2V5KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoaXNba09wdGlvbnNdLnZhbHVlcyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVzZXJpYWxpemUodmFsdWUpIDogdW5kZWZpbmVkXG4gICAgICAgICAgXSlcblxuICAgICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA8IHNpemUpIHtcbiAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1heWJlQ29tbWl0KHRyYW5zYWN0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW2tGaW5pc2hlZF0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgYXN5bmMgX25leHQgKCkge1xuICAgIGlmICh0aGlzW2tDYWNoZV0ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXNba0NhY2hlXS5zaGlmdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzW2tGaW5pc2hlZF0pIHtcbiAgICAgIGxldCBzaXplID0gTWF0aC5taW4oMTAwLCB0aGlzLmxpbWl0IC0gdGhpcy5jb3VudClcblxuICAgICAgaWYgKHRoaXNba0ZpcnN0XSkge1xuICAgICAgICAvLyBJdCdzIGNvbW1vbiB0byBvbmx5IHdhbnQgb25lIGVudHJ5IGluaXRpYWxseSBvciBhZnRlciBhIHNlZWsoKVxuICAgICAgICB0aGlzW2tGaXJzdF0gPSBmYWxzZVxuICAgICAgICBzaXplID0gMVxuICAgICAgfVxuXG4gICAgICB0aGlzW2tDYWNoZV0gPSBhd2FpdCB0aGlzLl9uZXh0dihzaXplLCBlbXB0eU9wdGlvbnMpXG5cbiAgICAgIC8vIFNoaWZ0IHJldHVybnMgdW5kZWZpbmVkIGlmIGVtcHR5LCB3aGljaCBpcyB3aGF0IHdlIHdhbnRcbiAgICAgIHJldHVybiB0aGlzW2tDYWNoZV0uc2hpZnQoKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIF9hbGwgKG9wdGlvbnMpIHtcbiAgICB0aGlzW2tGaXJzdF0gPSBmYWxzZVxuXG4gICAgLy8gVE9ETzogbWl4aW5nIG5leHQgYW5kIGFsbCBpcyBub3QgY292ZXJlZCBieSB0ZXN0IHN1aXRlXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzW2tDYWNoZV0uc3BsaWNlKDAsIHRoaXNba0NhY2hlXS5sZW5ndGgpXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMubGltaXQgLSB0aGlzLmNvdW50IC0gY2FjaGUubGVuZ3RoXG5cbiAgICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgICByZXR1cm4gY2FjaGVcbiAgICB9XG5cbiAgICBsZXQgZW50cmllcyA9IGF3YWl0IHRoaXMuX25leHR2KHNpemUsIGVtcHR5T3B0aW9ucylcbiAgICBpZiAoY2FjaGUubGVuZ3RoID4gMCkgZW50cmllcyA9IGNhY2hlLmNvbmNhdChlbnRyaWVzKVxuXG4gICAgcmV0dXJuIGVudHJpZXNcbiAgfVxuXG4gIF9zZWVrICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzW2tGaXJzdF0gPSB0cnVlXG4gICAgdGhpc1trQ2FjaGVdID0gW11cbiAgICB0aGlzW2tGaW5pc2hlZF0gPSBmYWxzZVxuICAgIHRoaXNba1Bvc2l0aW9uXSA9IHVuZGVmaW5lZFxuXG4gICAgLy8gVE9ETzogbm90IGNvdmVyZWQgYnkgdGVzdCBzdWl0ZVxuICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXSA9IHsgLi4udGhpc1trT3B0aW9uc10gfVxuXG4gICAgbGV0IGtleVJhbmdlXG5cbiAgICB0cnkge1xuICAgICAga2V5UmFuZ2UgPSBjcmVhdGVLZXlSYW5nZSh0aGlzW2tPcHRpb25zXSlcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICB0aGlzW2tGaW5pc2hlZF0gPSB0cnVlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoa2V5UmFuZ2UgIT09IG51bGwgJiYgIWtleVJhbmdlLmluY2x1ZGVzKHRhcmdldCkpIHtcbiAgICAgIHRoaXNba0ZpbmlzaGVkXSA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHRoaXNba09wdGlvbnNdLnJldmVyc2UpIHtcbiAgICAgIHRoaXNba0N1cnJlbnRPcHRpb25zXS5sdGUgPSB0YXJnZXRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1trQ3VycmVudE9wdGlvbnNdLmd0ZSA9IHRhcmdldFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkl0ZXJhdG9yID0gSXRlcmF0b3JcblxuZnVuY3Rpb24gbWF5YmVDb21taXQgKHRyYW5zYWN0aW9uKSB7XG4gIC8vIENvbW1pdCAobWVhbmluZyBjbG9zZSkgbm93IGluc3RlYWQgb2Ygd2FpdGluZyBmb3IgYXV0by1jb21taXRcbiAgaWYgKHR5cGVvZiB0cmFuc2FjdGlvbi5jb21taXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0cmFuc2FjdGlvbi5jb21taXQoKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYyBmdW5jdGlvbiBjbGVhciAoZGIsIGxvY2F0aW9uLCBrZXlSYW5nZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5saW1pdCA9PT0gMCkgcmV0dXJuXG5cbiAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi5kYi50cmFuc2FjdGlvbihbbG9jYXRpb25dLCAncmVhZHdyaXRlJylcbiAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShsb2NhdGlvbilcblxuICBsZXQgY291bnQgPSAwXG5cbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gcmVzb2x2ZVxuXG4gICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlamVjdCh0cmFuc2FjdGlvbi5lcnJvciB8fCBuZXcgRXJyb3IoJ2Fib3J0ZWQgYnkgdXNlcicpKVxuICAgIH1cbiAgfSlcblxuICAvLyBBIGtleSBjdXJzb3IgaXMgZmFzdGVyIChza2lwcyByZWFkaW5nIHZhbHVlcykgYnV0IG5vdCBzdXBwb3J0ZWQgYnkgSUVcbiAgLy8gVE9ETzogd2Ugbm8gbG9uZ2VyIHN1cHBvcnQgSUUuIFRlc3Qgb3RoZXJzXG4gIGNvbnN0IG1ldGhvZCA9IHN0b3JlLm9wZW5LZXlDdXJzb3IgPyAnb3BlbktleUN1cnNvcicgOiAnb3BlbkN1cnNvcidcbiAgY29uc3QgZGlyZWN0aW9uID0gb3B0aW9ucy5yZXZlcnNlID8gJ3ByZXYnIDogJ25leHQnXG5cbiAgc3RvcmVbbWV0aG9kXShrZXlSYW5nZSwgZGlyZWN0aW9uKS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zdCBjdXJzb3IgPSBldi50YXJnZXQucmVzdWx0XG5cbiAgICBpZiAoY3Vyc29yKSB7XG4gICAgICAvLyBXYWl0IGZvciBhIHJlcXVlc3QgdG8gY29tcGxldGUgYmVmb3JlIGNvbnRpbnVpbmcsIHNhdmluZyBDUFUuXG4gICAgICBzdG9yZS5kZWxldGUoY3Vyc29yLmtleSkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5saW1pdCA8PSAwIHx8ICsrY291bnQgPCBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9taXNlXG59XG4iLCIvKiBnbG9iYWwgaW5kZXhlZERCICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IEFic3RyYWN0TGV2ZWwgfSA9IHJlcXVpcmUoJ2Fic3RyYWN0LWxldmVsJylcbmNvbnN0IHsgSXRlcmF0b3IgfSA9IHJlcXVpcmUoJy4vaXRlcmF0b3InKVxuY29uc3QgZGVzZXJpYWxpemUgPSByZXF1aXJlKCcuL3V0aWwvZGVzZXJpYWxpemUnKVxuY29uc3QgY2xlYXIgPSByZXF1aXJlKCcuL3V0aWwvY2xlYXInKVxuY29uc3QgY3JlYXRlS2V5UmFuZ2UgPSByZXF1aXJlKCcuL3V0aWwva2V5LXJhbmdlJylcblxuLy8gS2VlcCBhcy1pcyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIGV4aXN0aW5nIGxldmVsLWpzIGRhdGFiYXNlc1xuY29uc3QgREVGQVVMVF9QUkVGSVggPSAnbGV2ZWwtanMtJ1xuXG5jb25zdCBrSURCID0gU3ltYm9sKCdpZGInKVxuY29uc3Qga05hbWVQcmVmaXggPSBTeW1ib2woJ25hbWVQcmVmaXgnKVxuY29uc3Qga0xvY2F0aW9uID0gU3ltYm9sKCdsb2NhdGlvbicpXG5jb25zdCBrVmVyc2lvbiA9IFN5bWJvbCgndmVyc2lvbicpXG5jb25zdCBrU3RvcmUgPSBTeW1ib2woJ3N0b3JlJylcbmNvbnN0IGtPbkNvbXBsZXRlID0gU3ltYm9sKCdvbkNvbXBsZXRlJylcblxuY2xhc3MgQnJvd3NlckxldmVsIGV4dGVuZHMgQWJzdHJhY3RMZXZlbCB7XG4gIGNvbnN0cnVjdG9yIChsb2NhdGlvbiwgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgcHJlZml4LCB2ZXJzaW9uLCAuLi5mb3J3YXJkIH0gPSBvcHRpb25zIHx8IHt9XG5cbiAgICBzdXBlcih7XG4gICAgICBlbmNvZGluZ3M6IHsgdmlldzogdHJ1ZSB9LFxuICAgICAgc25hcHNob3RzOiBmYWxzZSxcbiAgICAgIGNyZWF0ZUlmTWlzc2luZzogZmFsc2UsXG4gICAgICBlcnJvcklmRXhpc3RzOiBmYWxzZSxcbiAgICAgIHNlZWs6IHRydWVcbiAgICB9LCBmb3J3YXJkKVxuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3N0cmluZycgfHwgbG9jYXRpb24gPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGZpcnN0IGFyZ3VtZW50ICdsb2NhdGlvbicgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIilcbiAgICB9XG5cbiAgICAvLyBUT0RPIChuZXh0IG1ham9yKTogcmVtb3ZlIGRlZmF1bHQgcHJlZml4XG4gICAgdGhpc1trTG9jYXRpb25dID0gbG9jYXRpb25cbiAgICB0aGlzW2tOYW1lUHJlZml4XSA9IHByZWZpeCA9PSBudWxsID8gREVGQVVMVF9QUkVGSVggOiBwcmVmaXhcbiAgICB0aGlzW2tWZXJzaW9uXSA9IHBhcnNlSW50KHZlcnNpb24gfHwgMSwgMTApXG4gICAgdGhpc1trSURCXSA9IG51bGxcbiAgfVxuXG4gIGdldCBsb2NhdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXNba0xvY2F0aW9uXVxuICB9XG5cbiAgZ2V0IG5hbWVQcmVmaXggKCkge1xuICAgIHJldHVybiB0aGlzW2tOYW1lUHJlZml4XVxuICB9XG5cbiAgZ2V0IHZlcnNpb24gKCkge1xuICAgIHJldHVybiB0aGlzW2tWZXJzaW9uXVxuICB9XG5cbiAgLy8gRXhwb3NlZCBmb3IgYmFja3dhcmRzIGNvbXBhdCBhbmQgdW5pdCB0ZXN0c1xuICBnZXQgZGIgKCkge1xuICAgIHJldHVybiB0aGlzW2tJREJdXG4gIH1cblxuICBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdicm93c2VyLWxldmVsJ1xuICB9XG5cbiAgYXN5bmMgX29wZW4gKG9wdGlvbnMpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4odGhpc1trTmFtZVByZWZpeF0gKyB0aGlzW2tMb2NhdGlvbl0sIHRoaXNba1ZlcnNpb25dKVxuXG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXYpID0+IHtcbiAgICAgIGNvbnN0IGRiID0gZXYudGFyZ2V0LnJlc3VsdFxuXG4gICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnModGhpc1trTG9jYXRpb25dKSkge1xuICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZSh0aGlzW2tMb2NhdGlvbl0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IgfHwgbmV3IEVycm9yKCd1bmtub3duIGVycm9yJykpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICB0aGlzW2tJREJdID0gcmVxdWVzdC5yZXN1bHRcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIFtrU3RvcmVdIChtb2RlKSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzW2tJREJdLnRyYW5zYWN0aW9uKFt0aGlzW2tMb2NhdGlvbl1dLCBtb2RlKVxuICAgIHJldHVybiB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0aGlzW2tMb2NhdGlvbl0pXG4gIH1cblxuICBba09uQ29tcGxldGVdIChyZXF1ZXN0KSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSByZXF1ZXN0LnRyYW5zYWN0aW9uXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gVGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCBhIG5vbi1jYW5jZWxlZCByZXF1ZXN0IGVycm9yIGFib3J0c1xuICAgICAgLy8gdGhlIHRyYW5zYWN0aW9uLiBJLmUuIG5vIG5lZWQgdG8gbGlzdGVuIGZvciBcInJlcXVlc3Qub25lcnJvclwiLlxuICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yIHx8IG5ldyBFcnJvcignYWJvcnRlZCBieSB1c2VyJykpXG4gICAgICB9XG5cbiAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIF9nZXQgKGtleSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpc1trU3RvcmVdKCdyZWFkb25seScpXG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmdldChrZXkpXG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0aGlzW2tPbkNvbXBsZXRlXShyZXF1ZXN0KVxuXG4gICAgcmV0dXJuIGRlc2VyaWFsaXplKHZhbHVlKVxuICB9XG5cbiAgYXN5bmMgX2dldE1hbnkgKGtleXMsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXNba1N0b3JlXSgncmVhZG9ubHknKVxuICAgIGNvbnN0IGl0ZXJhdG9yID0ga2V5cy52YWx1ZXMoKVxuXG4gICAgLy8gQ29uc3VtZSB0aGUgaXRlcmF0b3Igd2l0aCBOIHBhcmFsbGVsIHdvcmtlciBiZWVzXG4gICAgY29uc3QgbiA9IE1hdGgubWluKDE2LCBrZXlzLmxlbmd0aClcbiAgICBjb25zdCBiZWVzID0gbmV3IEFycmF5KG4pXG4gICAgY29uc3QgdmFsdWVzID0gbmV3IEFycmF5KGtleXMubGVuZ3RoKVxuXG4gICAgbGV0IGtleUluZGV4ID0gMFxuICAgIGxldCBhYm9ydCA9IGZhbHNlXG5cbiAgICBjb25zdCBiZWUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBpdGVyYXRvcikge1xuICAgICAgICAgIGlmIChhYm9ydCkgYnJlYWtcblxuICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSBrZXlJbmRleCsrXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmdldChrZXkpXG5cbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgdmFsdWVzW3ZhbHVlSW5kZXhdID0gZGVzZXJpYWxpemUocmVxdWVzdC5yZXN1bHQpXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGFib3J0ID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgYmVlc1tpXSA9IGJlZSgpXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKGJlZXMpXG4gICAgcmV0dXJuIHZhbHVlc1xuICB9XG5cbiAgYXN5bmMgX2RlbCAoa2V5LCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzW2tTdG9yZV0oJ3JlYWR3cml0ZScpXG4gICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmRlbGV0ZShrZXkpXG5cbiAgICByZXR1cm4gdGhpc1trT25Db21wbGV0ZV0ocmVxdWVzdClcbiAgfVxuXG4gIGFzeW5jIF9wdXQgKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXNba1N0b3JlXSgncmVhZHdyaXRlJylcblxuICAgIC8vIFdpbGwgdGhyb3cgYSBEYXRhRXJyb3Igb3IgRGF0YUNsb25lRXJyb3IgaWYgdGhlIGVudmlyb25tZW50XG4gICAgLy8gZG9lcyBub3Qgc3VwcG9ydCBzZXJpYWxpemluZyB0aGUga2V5IG9yIHZhbHVlIHJlc3BlY3RpdmVseS5cbiAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUucHV0KHZhbHVlLCBrZXkpXG5cbiAgICByZXR1cm4gdGhpc1trT25Db21wbGV0ZV0ocmVxdWVzdClcbiAgfVxuXG4gIC8vIFRPRE86IGltcGxlbWVudCBrZXkgYW5kIHZhbHVlIGl0ZXJhdG9yc1xuICBfaXRlcmF0b3IgKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKHRoaXMsIHRoaXNba0xvY2F0aW9uXSwgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIF9iYXRjaCAob3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpc1trU3RvcmVdKCdyZWFkd3JpdGUnKVxuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gc3RvcmUudHJhbnNhY3Rpb25cbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGVycm9yXG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJhbnNhY3Rpb24ub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yIHx8IHRyYW5zYWN0aW9uLmVycm9yIHx8IG5ldyBFcnJvcignYWJvcnRlZCBieSB1c2VyJykpXG4gICAgICB9XG5cbiAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSByZXNvbHZlXG4gICAgfSlcblxuICAgIC8vIFdhaXQgZm9yIGEgcmVxdWVzdCB0byBjb21wbGV0ZSBiZWZvcmUgbWFraW5nIHRoZSBuZXh0LCBzYXZpbmcgQ1BVLlxuICAgIGZ1bmN0aW9uIGxvb3AgKCkge1xuICAgICAgY29uc3Qgb3AgPSBvcGVyYXRpb25zW2luZGV4KytdXG4gICAgICBjb25zdCBrZXkgPSBvcC5rZXlcblxuICAgICAgbGV0IHJlcVxuXG4gICAgICB0cnkge1xuICAgICAgICByZXEgPSBvcC50eXBlID09PSAnZGVsJyA/IHN0b3JlLmRlbGV0ZShrZXkpIDogc3RvcmUucHV0KG9wLnZhbHVlLCBrZXkpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IgPSBlcnJcbiAgICAgICAgdHJhbnNhY3Rpb24uYWJvcnQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4IDwgb3BlcmF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGxvb3BcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyYW5zYWN0aW9uLmNvbW1pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBDb21taXQgbm93IGluc3RlYWQgb2Ygd2FpdGluZyBmb3IgYXV0by1jb21taXRcbiAgICAgICAgdHJhbnNhY3Rpb24uY29tbWl0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb29wKClcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgYXN5bmMgX2NsZWFyIChvcHRpb25zKSB7XG4gICAgbGV0IGtleVJhbmdlXG5cbiAgICB0cnkge1xuICAgICAga2V5UmFuZ2UgPSBjcmVhdGVLZXlSYW5nZShvcHRpb25zKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRoZSBsb3dlciBrZXkgaXMgZ3JlYXRlciB0aGFuIHRoZSB1cHBlciBrZXkuXG4gICAgICAvLyBJbmRleGVkREIgdGhyb3dzIGFuIGVycm9yLCBidXQgd2UnbGwganVzdCBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubGltaXQgPj0gMCkge1xuICAgICAgLy8gSURCT2JqZWN0U3RvcmUjZGVsZXRlKHJhbmdlKSBkb2Vzbid0IGhhdmUgc3VjaCBhbiBvcHRpb24uXG4gICAgICAvLyBGYWxsIGJhY2sgdG8gY3Vyc29yLWJhc2VkIGltcGxlbWVudGF0aW9uLlxuICAgICAgcmV0dXJuIGNsZWFyKHRoaXMsIHRoaXNba0xvY2F0aW9uXSwga2V5UmFuZ2UsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzW2tTdG9yZV0oJ3JlYWR3cml0ZScpXG4gICAgY29uc3QgcmVxdWVzdCA9IGtleVJhbmdlID8gc3RvcmUuZGVsZXRlKGtleVJhbmdlKSA6IHN0b3JlLmNsZWFyKClcblxuICAgIHJldHVybiB0aGlzW2tPbkNvbXBsZXRlXShyZXF1ZXN0KVxuICB9XG5cbiAgYXN5bmMgX2Nsb3NlICgpIHtcbiAgICB0aGlzW2tJREJdLmNsb3NlKClcbiAgfVxufVxuXG5Ccm93c2VyTGV2ZWwuZGVzdHJveSA9IGFzeW5jIGZ1bmN0aW9uIChsb2NhdGlvbiwgcHJlZml4KSB7XG4gIGlmIChwcmVmaXggPT0gbnVsbCkge1xuICAgIHByZWZpeCA9IERFRkFVTFRfUFJFRklYXG4gIH1cblxuICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKHByZWZpeCArIGxvY2F0aW9uKVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSByZXNvbHZlXG4gICAgcmVxdWVzdC5vbmVycm9yID0gcmVqZWN0XG4gIH0pXG59XG5cbmV4cG9ydHMuQnJvd3NlckxldmVsID0gQnJvd3NlckxldmVsXG4iLCIvKipcbiAqIEJyb3dzZXItbmF0aXZlIEZvcmtEQiBhZGFwdGVyLlxuICpcbiAqIEltcGxlbWVudHMgdGhlIGZvcmtkYiBkYXRhIG1vZGVsIOKAlCBjb250ZW50LWFkZHJlc3NlZCwgYXBwZW5kLW9ubHkgbm9kZXNcbiAqIHdpdGggYmFja3dhcmQgYHByZXZgIGxpbmtzIGFuZCBoZWFkIHRyYWNraW5nIOKAlCBvbiB0b3Agb2YgYGJyb3dzZXItbGV2ZWxgXG4gKiAoSW5kZXhlZERCKS4gIE5vIE5vZGUuanMgc3RyZWFtcyBvciBCdWZmZXIgcG9seWZpbGxzIHJlcXVpcmVkLlxuICovXG5pbXBvcnQgeyBCcm93c2VyTGV2ZWwgfSBmcm9tICdicm93c2VyLWxldmVsJ1xuXG4vLyAtLS0tIHR5cGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhIHtcbiAgICBrZXk6c3RyaW5nXG4gICAgcHJldj86c3RyaW5nW11cbiAgICBbazpzdHJpbmddOnVua25vd25cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JrREJEb2N1bWVudCB7XG4gICAgaGFzaDpzdHJpbmdcbiAgICBrZXk6c3RyaW5nXG4gICAgcHJldjpzdHJpbmdbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVFbnRyeSB7XG4gICAgaGFzaDpzdHJpbmdcbiAgICBtZXRhOk1ldGFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5rc0VudHJ5IHtcbiAgICBrZXk6c3RyaW5nXG4gICAgaGFzaDpzdHJpbmdcbn1cblxuLy8gLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFNpbXBsZSBjb250ZW50IGhhc2ggKG5vdCBjcnlwdG9ncmFwaGljIOKAkyBmaW5lIGZvciBhIGRlbW8pLlxuICovXG5mdW5jdGlvbiBjb250ZW50SGFzaCAoaW5wdXQ6c3RyaW5nKTpzdHJpbmcge1xuICAgIGxldCBoID0gMHg4MTFjOWRjNSAgIC8vIEZOViBvZmZzZXQgYmFzaXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGggXj0gaW5wdXQuY2hhckNvZGVBdChpKVxuICAgICAgICBoID0gTWF0aC5pbXVsKGgsIDB4MDEwMDAxOTMpICAvLyBGTlYgcHJpbWVcbiAgICB9XG4gICAgcmV0dXJuIChoID4+PiAwKS50b1N0cmluZygxNikucGFkU3RhcnQoOCwgJzAnKVxufVxuXG5mdW5jdGlvbiBnZXRQcmV2IChtZXRhOk1ldGEpOnN0cmluZ1tdIHtcbiAgICBpZiAoIW1ldGEucHJldikgcmV0dXJuIFtdXG4gICAgcmV0dXJuIG1ldGEucHJldi5maWx0ZXIoQm9vbGVhbilcbn1cblxuZnVuY3Rpb24gaGFzUHJlZml4IChrZXk6dW5rbm93biwgcHJlZml4OnN0cmluZ1tdKTprZXkgaXMgc3RyaW5nW10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoa2V5Lmxlbmd0aCA8IHByZWZpeC5sZW5ndGgpIHJldHVybiBmYWxzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrZXlbaV0gIT09IHByZWZpeFtpXSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbi8vIC0tLS0gQnJvd3NlckZvcmtEQiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJGb3JrREIge1xuICAgIHByaXZhdGUgZGI6QnJvd3NlckxldmVsPHVua25vd24sIHVua25vd24+XG4gICAgcHJpdmF0ZSBfbmFtZTpzdHJpbmdcbiAgICBfaWQ6c3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvciAobmFtZSA9ICdmb3JrZGInKSB7XG4gICAgICAgIHRoaXMuZGIgPSBuZXcgQnJvd3NlckxldmVsKG5hbWUsIHtcbiAgICAgICAgICAgIGtleUVuY29kaW5nOiAnanNvbicsXG4gICAgICAgICAgICB2YWx1ZUVuY29kaW5nOiAnanNvbicsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMilcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcbiAgICB9XG5cbiAgICAvKiogT3BlbiB0aGUgdW5kZXJseWluZyBJbmRleGVkREIgc3RvcmUuICovXG4gICAgYXN5bmMgb3BlbiAoKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kYi5vcGVuKClcbiAgICB9XG5cbiAgICAvKiogQ2xvc2UgdGhlIHN0b3JlLiAqL1xuICAgIGFzeW5jIGNsb3NlICgpOlByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmRiLmNsb3NlKClcbiAgICB9XG5cbiAgICAvLyAtLS0tIHdyaXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBhIG5ldyBkb2N1bWVudC4gIFJldHVybnMgdGhlIGNvbnRlbnQtYWRkcmVzc2VkIGhhc2guXG4gICAgICovXG4gICAgYXN5bmMgcHV0IChtZXRhOk1ldGEsIGJvZHkgPSAnJyk6UHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcHJldiA9IGdldFByZXYobWV0YSlcbiAgICAgICAgY29uc3QgaGFzaElucHV0ID0gSlNPTi5zdHJpbmdpZnkoeyBrZXk6IG1ldGEua2V5LCBwcmV2LCBib2R5IH0pXG4gICAgICAgIGNvbnN0IGhhc2ggPSBjb250ZW50SGFzaChoYXNoSW5wdXQpXG5cbiAgICAgICAgY29uc3Qgb3BzOkFycmF5PHsgdHlwZToncHV0J3wnZGVsJywga2V5OnN0cmluZ1tdLCB2YWx1ZT86dW5rbm93biB9PiA9IFtdXG5cbiAgICAgICAgLy8gTWFyayBrZXkgYW5kIGhhc2hcbiAgICAgICAgb3BzLnB1c2goeyB0eXBlOiAncHV0Jywga2V5OiBbJ2tleScsIG1ldGEua2V5XSwgdmFsdWU6IDAgfSlcbiAgICAgICAgb3BzLnB1c2goeyB0eXBlOiAncHV0Jywga2V5OiBbJ2hhc2gnLCBoYXNoXSwgdmFsdWU6IDAgfSlcblxuICAgICAgICAvLyBTdG9yZSBtZXRhXG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydtZXRhJywgaGFzaF0sIHZhbHVlOiBtZXRhIH0pXG5cbiAgICAgICAgLy8gU3RvcmUgYm9keSBibG9iXG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydibG9iJywgaGFzaF0sIHZhbHVlOiBib2R5IH0pXG5cbiAgICAgICAgLy8gVGFpbCAoaWYgbm8gcHJldilcbiAgICAgICAgaWYgKHByZXYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdwdXQnLCBrZXk6IFsndGFpbCcsIG1ldGEua2V5LCBoYXNoXSwgdmFsdWU6IDAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhlYWQgbWFuYWdlbWVudCDigJMgcmVtb3ZlIG9sZCBoZWFkcyB0aGF0IHRoaXMgY29tbWl0IHN1cGVyc2VkZXNcbiAgICAgICAgZm9yIChjb25zdCBwaGFzaCBvZiBwcmV2KSB7XG4gICAgICAgICAgICBvcHMucHVzaCh7IHR5cGU6ICdkZWwnLCBrZXk6IFsnaGVhZCcsIG1ldGEua2V5LCBwaGFzaF0gfSlcbiAgICAgICAgICAgIG9wcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncHV0JyxcbiAgICAgICAgICAgICAgICBrZXk6IFsnbGluaycsIHBoYXNoLCBoYXNoXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWV0YS5rZXksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9wcy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleTogWydoZWFkJywgbWV0YS5rZXksIGhhc2hdLCB2YWx1ZTogMCB9KVxuXG4gICAgICAgIGF3YWl0IHRoaXMuZGIuYmF0Y2gob3BzIGFzIGFueSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICB9XG5cbiAgICAvLyAtLS0tIHJlYWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKiBHZXQgdGhlIG1ldGFkYXRhIGZvciBhIGhhc2guICovXG4gICAgYXN5bmMgZ2V0IChoYXNoOnN0cmluZyk6UHJvbWlzZTxNZXRhPiB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLmRiLmdldChbJ21ldGEnLCBoYXNoXSBhcyBhbnkpIGFzIE1ldGFcbiAgICAgICAgaWYgKG1ldGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYE5vdCBmb3VuZDogJHtoYXNofWApLFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ05vdEZvdW5kRXJyb3InIH0sXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1ldGFcbiAgICB9XG5cbiAgICAvKiogR2V0IHRoZSBib2R5IGJsb2IgZm9yIGEgaGFzaC4gKi9cbiAgICBhc3luYyBnZXRCb2R5IChoYXNoOnN0cmluZyk6UHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLmRiLmdldChbJ2Jsb2InLCBoYXNoXSBhcyBhbnkpKSBhcyBzdHJpbmdcbiAgICB9XG5cbiAgICAvKiogTGlzdCBldmVyeSBrZXkgaW4gdGhlIHN0b3JlLiAqL1xuICAgIGFzeW5jIGtleXMgKCk6UHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6c3RyaW5nW10gPSBbXVxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IFtrZXldIG9mIHRoaXMuZGIuaXRlcmF0b3IoKSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcmVmaXgoa2V5LCBbJ2tleSddKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGsgPSBrZXlbMV1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKiogTGlzdCBhbGwgZG9jdW1lbnRzLiAqL1xuICAgIGFzeW5jIGxpc3QgKCk6UHJvbWlzZTxOb2RlRW50cnlbXT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6Tm9kZUVudHJ5W10gPSBbXVxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiB0aGlzLmRiLml0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJlZml4KGtleSwgWydtZXRhJ10pKSBjb250aW51ZVxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGtleVsxXVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYXNoICE9PSAnc3RyaW5nJykgY29udGludWVcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBoYXNoLFxuICAgICAgICAgICAgICAgIG1ldGE6IHZhbHVlIGFzIE1ldGEsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKiogQ3VycmVudCBoZWFkcyAobGF0ZXN0IHZlcnNpb25zKSBmb3IgYSBrZXkuICovXG4gICAgYXN5bmMgaGVhZHMgKGtleTpzdHJpbmcpOlByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OnN0cmluZ1tdID0gW11cbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBba10gb2YgdGhpcy5kYi5pdGVyYXRvcigpKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1ByZWZpeChrLCBbJ2hlYWQnLCBrZXldKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBrWzJdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhc2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaGFzaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIEZvcndhcmQgbGlua3Mg4oCTIHdoYXQgZG9jdW1lbnRzIHJlZmVyZW5jZSBgaGFzaGAgYXMgYSBwcmV2LiAqL1xuICAgIGFzeW5jIGxpbmtzIChoYXNoOnN0cmluZyk6UHJvbWlzZTxMaW5rc0VudHJ5W10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OkxpbmtzRW50cnlbXSA9IFtdXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgW2ssIHZhbHVlXSBvZiB0aGlzLmRiLml0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJlZml4KGssIFsnbGluaycsIGhhc2hdKSkgY29udGludWVcbiAgICAgICAgICAgIGNvbnN0IGxpbmtlZEhhc2ggPSBrWzJdXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpbmtlZEhhc2ggIT09ICdzdHJpbmcnKSBjb250aW51ZVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIGhhc2g6IGxpbmtlZEhhc2gsXG4gICAgICAgICAgICAgICAga2V5OiB2YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKiogV2FsayBiYWNrd2FyZCB0aHJvdWdoIGhpc3RvcnkgZnJvbSBhIGdpdmVuIGhhc2guICovXG4gICAgYXN5bmMgaGlzdG9yeSAoaGFzaDpzdHJpbmcpOlByb21pc2U8Tm9kZUVudHJ5W10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0Ok5vZGVFbnRyeVtdID0gW11cbiAgICAgICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gICAgICAgIGxldCBjdXJyZW50OnN0cmluZ3x1bmRlZmluZWQgPSBoYXNoXG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgIXZpc2l0ZWQuaGFzKGN1cnJlbnQpKSB7XG4gICAgICAgICAgICB2aXNpdGVkLmFkZChjdXJyZW50KVxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IHRoaXMuZ2V0KGN1cnJlbnQpXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGhhc2g6IGN1cnJlbnQsIG1ldGEgfSlcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBnZXRQcmV2KG1ldGEpXG4gICAgICAgICAgICAvLyBGb2xsb3cgZmlyc3QgcHJldiBsaW5rIChsaW5lYXIgaGlzdG9yeSlcbiAgICAgICAgICAgIGN1cnJlbnQgPSBwcmV2WzBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqIFRhaWxzIChyb290IGRvY3VtZW50cyB3aXRoIG5vIHByZXYpIGZvciBhIGtleS4gKi9cbiAgICBhc3luYyB0YWlscyAoa2V5OnN0cmluZyk6UHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6c3RyaW5nW10gPSBbXVxuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IFtrXSBvZiB0aGlzLmRiLml0ZXJhdG9yKCkpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJlZml4KGssIFsndGFpbCcsIGtleV0pKSBjb250aW51ZVxuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGtbMl1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFzaCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChoYXNoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKiogRGVsZXRlIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgZW50aXJlbHkgKGZvciBkZW1vIHJlc2V0KS4gKi9cbiAgICBhc3luYyBkZXN0cm95ICgpOlByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmNsb3NlKClcbiAgICAgICAgLy8gYnJvd3Nlci1sZXZlbCBzdG9yZXMgZGF0YSBpbiBhbiBJbmRleGVkREIgZGF0YWJhc2UgbmFtZWQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICAgICAgICBjb25zdCByZXEgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UodGhpcy5fbmFtZSlcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUoKVxuICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJyb3dzZXJGb3JrREIgfSBmcm9tICcuLi9zcmMvYnJvd3Nlci5qcydcblxuZXhwb3J0IGNvbnN0IGZvcmtkYiA9IG5ldyBCcm93c2VyRm9ya0RCKCdmb3JrZGItZXhhbXBsZScpXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCdcbmltcG9ydCB7IHR5cGUgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyB1c2VTaWduYWwgfSBmcm9tICdAcHJlYWN0L3NpZ25hbHMnXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3ByZWFjdC9ob29rcydcbmltcG9ydCB7IHR5cGUgTWV0YSB9IGZyb20gJy4uLy4uL3NyYy9icm93c2VyLmpzJ1xuaW1wb3J0IHsgZm9ya2RiIH0gZnJvbSAnLi4vZGIuanMnXG5cbmV4cG9ydCBjb25zdCBDcmVhdGVGb3JtOkZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgICBvbkNyZWF0ZWQ6KCk9PnZvaWR8UHJvbWlzZTx2b2lkPlxufT4gPSBmdW5jdGlvbiBDcmVhdGVGb3JtICh7IG9uQ3JlYXRlZCB9KSB7XG4gICAgY29uc3Qga2V5ID0gdXNlU2lnbmFsKCdteS1kb2MnKVxuICAgIGNvbnN0IGJvZHkgPSB1c2VTaWduYWwoJycpXG4gICAgY29uc3QgcHJldkhhc2ggPSB1c2VTaWduYWwoJycpXG5cbiAgICBjb25zdCBzdWJtaXQgPSB1c2VDYWxsYmFjayhhc3luYyAoZXY6RXZlbnQpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBtZXRhOk1ldGEgPSB7IGtleToga2V5LnZhbHVlIH1cbiAgICAgICAgaWYgKHByZXZIYXNoLnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgbWV0YS5wcmV2ID0gcHJldkhhc2gudmFsdWVcbiAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBmb3JrZGIucHV0KG1ldGEsIGJvZHkudmFsdWUpXG4gICAgICAgIGJvZHkudmFsdWUgPSAnJ1xuICAgICAgICBwcmV2SGFzaC52YWx1ZSA9ICcnXG4gICAgICAgIGF3YWl0IG9uQ3JlYXRlZCgpXG4gICAgfSwgW29uQ3JlYXRlZF0pXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjcmVhdGUtZm9ybVwiIG9uU3VibWl0PSR7c3VibWl0fT5cbiAgICAgICAgICAgIDxoMj5BZGQgYSBub2RlPC9oMj5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxzcGFuPktleTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9JHtrZXkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9JHsoZTpFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnZhbHVlID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Cb2R5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0ke2JvZHkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9JHszfVxuICAgICAgICAgICAgICAgICAgICBvbklucHV0PSR7KGU6RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkudmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxzcGFuPlByZXYgaGFzaChlcyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9JHtwcmV2SGFzaC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb21tYS1zZXBhcmF0ZWQgaGFzaGVzXCJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD0keyhlOkV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2SGFzaC52YWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8c3Vic3RyYXRlLWJ1dHRvbiBjbGFzcz1cImNyZWF0ZS1zdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICA8L3N1YnN0cmF0ZS1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICBgXG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCdcbmltcG9ydCB7IHR5cGUgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyB0eXBlIE5vZGVEZXRhaWwgfSBmcm9tICcuLi9zdGF0ZS5qcydcblxuZXhwb3J0IGNvbnN0IE5vZGVDYXJkOkZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgICBub2RlOk5vZGVEZXRhaWwsXG4gICAgb25TZWxlY3Q6KGhhc2g6c3RyaW5nKSA9PiB2b2lkXG59PiA9IGZ1bmN0aW9uIE5vZGVDYXJkIChwcm9wcykge1xuICAgIGNvbnN0IHsgbm9kZSwgb25TZWxlY3QgfSA9IHByb3BzXG4gICAgY29uc3QgcHJldiA9IG5vZGUubWV0YS5wcmV2ID8/IFtdXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJub2RlLWNhcmRcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub2RlLWtleVwiPiR7bm9kZS5tZXRhLmtleX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGNvZGUgY2xhc3M9XCJub2RlLWhhc2hcIiB0aXRsZT0ke25vZGUuaGFzaH0+JHtub2RlLmhhc2h9PC9jb2RlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICR7bm9kZS5ib2R5ID8gaHRtbGA8cCBjbGFzcz1cIm5vZGUtYm9keVwiPiR7bm9kZS5ib2R5fTwvcD5gIDogbnVsbH1cblxuICAgICAgICAgICAgJHtwcmV2Lmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmstbGFiZWxcIj5wcmV2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke3ByZXYubWFwKChoOnN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IG9uU2VsZWN0KGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAke25vZGUuZm9yd2FyZExpbmtzLmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmstbGFiZWxcIj5uZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAke25vZGUuZm9yd2FyZExpbmtzLm1hcCgobCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdWJzdHJhdGUtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7bC5oYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGFzaC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSR7KCkgPT4gb25TZWxlY3QobC5oYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2wuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L2FydGljbGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2h0bS9wcmVhY3QnXG5pbXBvcnQgeyB0eXBlIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncHJlYWN0L2hvb2tzJ1xuaW1wb3J0IHsgdXNlU2lnbmFsIH0gZnJvbSAnQHByZWFjdC9zaWduYWxzJ1xuaW1wb3J0IHsgdHlwZSBOb2RlRW50cnkgfSBmcm9tICcuLi8uLi9zcmMvYnJvd3Nlci5qcydcbmltcG9ydCB7IGZvcmtkYiB9IGZyb20gJy4uL2RiLmpzJ1xuXG5leHBvcnQgY29uc3QgSGlzdG9yeVBhbmVsOkZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIG9uU2VsZWN0OihoYXNoOnN0cmluZykgPT4gdm9pZFxufT4gPSBmdW5jdGlvbiBIaXN0b3J5UGFuZWwgKHsgaGFzaCwgb25TZWxlY3QgfSkge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VTaWduYWw8QXJyYXk8Tm9kZUVudHJ5Pj4oW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICAgICAgZm9ya2RiLmhpc3RvcnkoaGFzaCkudGhlbigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkgcmV0dXJuXG4gICAgICAgICAgICBoaXN0b3J5LnZhbHVlID0gZW50cmllc1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm5cbiAgICAgICAgICAgIGhpc3RvcnkudmFsdWUgPSBbXVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKCkgPT4geyBjYW5jZWxsZWQgPSB0cnVlIH1cbiAgICB9LCBbaGFzaF0pXG5cbiAgICBpZiAoaGlzdG9yeS52YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGFzaWRlIGNsYXNzPVwiaGlzdG9yeS1wYW5lbFwiPlxuICAgICAgICAgICAgPGgzPkhpc3RvcnkgZnJvbSAke2hhc2h9PC9oMz5cbiAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICAke2hpc3RvcnkudmFsdWUubWFwKChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT0ke2VudHJ5Lmhhc2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN1YnN0cmF0ZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhhc2gtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IG9uU2VsZWN0KGVudHJ5Lmhhc2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZW50cnkuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlzdG9yeS1rZXlcIj4ke2VudHJ5Lm1ldGEua2V5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2h0bS9wcmVhY3QnXG5pbXBvcnQgeyB0eXBlIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdwcmVhY3QvaG9va3MnXG5pbXBvcnQgeyB0eXBlIE5vZGVEZXRhaWwgfSBmcm9tICcuLi9zdGF0ZS5qcydcblxuaW50ZXJmYWNlIERhZ1BvaW50IHtcbiAgICBoYXNoOnN0cmluZ1xuICAgIGtleTpzdHJpbmdcbiAgICB4Om51bWJlclxuICAgIHk6bnVtYmVyXG59XG5cbmludGVyZmFjZSBEYWdFZGdlIHtcbiAgICBmcm9tOnN0cmluZ1xuICAgIHRvOnN0cmluZ1xufVxuXG5mdW5jdGlvbiBidWlsZERhZyAobm9kZXM6Tm9kZURldGFpbFtdKTp7XG4gICAgcG9pbnRzOkRhZ1BvaW50W11cbiAgICBlZGdlczpEYWdFZGdlW11cbiAgICB3aWR0aDpudW1iZXJcbiAgICBoZWlnaHQ6bnVtYmVyXG59IHtcbiAgICBjb25zdCBieUhhc2ggPSBuZXcgTWFwPHN0cmluZywgTm9kZURldGFpbD4oKVxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IGJ5SGFzaC5zZXQobm9kZS5oYXNoLCBub2RlKSlcblxuICAgIGNvbnN0IGRlcHRoQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgY29uc3QgZ2V0RGVwdGggPSAoaGFzaDpzdHJpbmcsIHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKSk6bnVtYmVyID0+IHtcbiAgICAgICAgaWYgKGRlcHRoQ2FjaGUuaGFzKGhhc2gpKSByZXR1cm4gZGVwdGhDYWNoZS5nZXQoaGFzaCkhXG4gICAgICAgIGlmIChzZWVuLmhhcyhoYXNoKSkgcmV0dXJuIDBcblxuICAgICAgICBjb25zdCBub2RlID0gYnlIYXNoLmdldChoYXNoKVxuICAgICAgICBpZiAoIW5vZGUpIHJldHVybiAwXG5cbiAgICAgICAgc2Vlbi5hZGQoaGFzaClcbiAgICAgICAgY29uc3QgcHJldiA9IG5vZGUubWV0YS5wcmV2ID8/IFtdXG4gICAgICAgIGlmIChwcmV2Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZGVwdGhDYWNoZS5zZXQoaGFzaCwgMClcbiAgICAgICAgICAgIHNlZW4uZGVsZXRlKGhhc2gpXG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heERlcHRoID0gMFxuICAgICAgICBmb3IgKGNvbnN0IHByZXZIYXNoIG9mIHByZXYpIHtcbiAgICAgICAgICAgIG1heERlcHRoID0gTWF0aC5tYXgobWF4RGVwdGgsIGdldERlcHRoKHByZXZIYXNoLCBzZWVuKSArIDEpXG4gICAgICAgIH1cbiAgICAgICAgZGVwdGhDYWNoZS5zZXQoaGFzaCwgbWF4RGVwdGgpXG4gICAgICAgIHNlZW4uZGVsZXRlKGhhc2gpXG4gICAgICAgIHJldHVybiBtYXhEZXB0aFxuICAgIH1cblxuICAgIGNvbnN0IHNvcnRlZE5vZGVzID0gWy4uLm5vZGVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlcHRoRGlmZiA9IGdldERlcHRoKGEuaGFzaCkgLSBnZXREZXB0aChiLmhhc2gpXG4gICAgICAgIGlmIChkZXB0aERpZmYgIT09IDApIHJldHVybiBkZXB0aERpZmZcbiAgICAgICAgcmV0dXJuIGEuaGFzaC5sb2NhbGVDb21wYXJlKGIuaGFzaClcbiAgICB9KVxuXG4gICAgY29uc3QgbGFuZXNCeURlcHRoID0gbmV3IE1hcDxudW1iZXIsIFNldDxudW1iZXI+PigpXG4gICAgY29uc3QgbGFuZUJ5SGFzaCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcblxuICAgIGNvbnN0IHJlc2VydmVMYW5lID0gKGRlcHRoOm51bWJlciwgcHJlZmVycmVkOm51bWJlcnx1bmRlZmluZWQpOm51bWJlciA9PiB7XG4gICAgICAgIGNvbnN0IHVzZWQgPSBsYW5lc0J5RGVwdGguZ2V0KGRlcHRoKSA/PyBuZXcgU2V0PG51bWJlcj4oKVxuICAgICAgICBpZiAocHJlZmVycmVkICE9PSB1bmRlZmluZWQgJiYgIXVzZWQuaGFzKHByZWZlcnJlZCkpIHtcbiAgICAgICAgICAgIHVzZWQuYWRkKHByZWZlcnJlZClcbiAgICAgICAgICAgIGxhbmVzQnlEZXB0aC5zZXQoZGVwdGgsIHVzZWQpXG4gICAgICAgICAgICByZXR1cm4gcHJlZmVycmVkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFuZSA9IDBcbiAgICAgICAgd2hpbGUgKHVzZWQuaGFzKGxhbmUpKSBsYW5lKytcbiAgICAgICAgdXNlZC5hZGQobGFuZSlcbiAgICAgICAgbGFuZXNCeURlcHRoLnNldChkZXB0aCwgdXNlZClcbiAgICAgICAgcmV0dXJuIGxhbmVcbiAgICB9XG5cbiAgICBsZXQgbWF4TGFuZSA9IDBcbiAgICBsZXQgbWF4RGVwdGggPSAwXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHNvcnRlZE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IGRlcHRoID0gZ2V0RGVwdGgobm9kZS5oYXNoKVxuICAgICAgICBtYXhEZXB0aCA9IE1hdGgubWF4KG1heERlcHRoLCBkZXB0aClcbiAgICAgICAgY29uc3QgcHJldiA9IG5vZGUubWV0YS5wcmV2ID8/IFtdXG4gICAgICAgIGNvbnN0IHByZWZlcnJlZCA9IHByZXZcbiAgICAgICAgICAgIC5tYXAoKHByZXZIYXNoKSA9PiBsYW5lQnlIYXNoLmdldChwcmV2SGFzaCkpXG4gICAgICAgICAgICAuZmluZCgobGFuZSk6bGFuZSBpcyBudW1iZXIgPT4gbGFuZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBsYW5lID0gcmVzZXJ2ZUxhbmUoZGVwdGgsIHByZWZlcnJlZClcbiAgICAgICAgbGFuZUJ5SGFzaC5zZXQobm9kZS5oYXNoLCBsYW5lKVxuICAgICAgICBtYXhMYW5lID0gTWF0aC5tYXgobWF4TGFuZSwgbGFuZSlcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHM6RGFnUG9pbnRbXSA9IFtdXG4gICAgY29uc3QgeFN0ZXAgPSAxODBcbiAgICBjb25zdCB5U3RlcCA9IDE0MFxuICAgIGNvbnN0IHhNYXJnaW4gPSA5MFxuICAgIGNvbnN0IHlNYXJnaW4gPSA3MFxuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHNvcnRlZE5vZGVzKSB7XG4gICAgICAgIGNvbnN0IGxhbmUgPSBsYW5lQnlIYXNoLmdldChub2RlLmhhc2gpID8/IDBcbiAgICAgICAgY29uc3QgZGVwdGggPSBnZXREZXB0aChub2RlLmhhc2gpXG4gICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgIGhhc2g6IG5vZGUuaGFzaCxcbiAgICAgICAgICAgIGtleTogbm9kZS5tZXRhLmtleSxcbiAgICAgICAgICAgIHg6IHhNYXJnaW4gKyAobGFuZSAqIHhTdGVwKSxcbiAgICAgICAgICAgIHk6IHlNYXJnaW4gKyAoZGVwdGggKiB5U3RlcClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBlZGdlczpEYWdFZGdlW10gPSBbXVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBjb25zdCBwcmV2ID0gbm9kZS5tZXRhLnByZXYgPz8gW11cbiAgICAgICAgZm9yIChjb25zdCBwcmV2SGFzaCBvZiBwcmV2KSB7XG4gICAgICAgICAgICBpZiAoYnlIYXNoLmhhcyhwcmV2SGFzaCkpIHtcbiAgICAgICAgICAgICAgICBlZGdlcy5wdXNoKHsgZnJvbTogcHJldkhhc2gsIHRvOiBub2RlLmhhc2ggfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50cyxcbiAgICAgICAgZWRnZXMsXG4gICAgICAgIHdpZHRoOiAobWF4TGFuZSAqIHhTdGVwKSArICh4TWFyZ2luICogMiksXG4gICAgICAgIGhlaWdodDogKG1heERlcHRoICogeVN0ZXApICsgKHlNYXJnaW4gKiAyKVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1lcmtsZURhZzpGdW5jdGlvbkNvbXBvbmVudDx7XG4gICAgbm9kZXM6Tm9kZURldGFpbFtdXG4gICAgc2VsZWN0ZWRIYXNoOnN0cmluZ3xudWxsXG4gICAgb25TZWxlY3Q6KGhhc2g6c3RyaW5nKSA9PiB2b2lkXG59PiA9IGZ1bmN0aW9uIE1lcmtsZURhZyAoeyBub2Rlcywgc2VsZWN0ZWRIYXNoLCBvblNlbGVjdCB9KSB7XG4gICAgY29uc3QgZGFnID0gYnVpbGREYWcobm9kZXMpXG4gICAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50fG51bGw+KG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHNjcm9sbFJlZi5jdXJyZW50XG4gICAgICAgIGlmICghZWwpIHJldHVyblxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHRcbiAgICB9LCBbZGFnLnBvaW50cy5sZW5ndGhdKVxuXG4gICAgY29uc3QgcG9pbnRNYXAgPSBuZXcgTWFwPHN0cmluZywgRGFnUG9pbnQ+KClcbiAgICBkYWcucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiBwb2ludE1hcC5zZXQocG9pbnQuaGFzaCwgcG9pbnQpKVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGFnLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxoMj5NZXJrbGUgREFHPC9oMj5cblxuICAgICAgICAgICAgJHtkYWcucG9pbnRzLmxlbmd0aCA9PT0gMCA/XG4gICAgICAgICAgICAgICAgaHRtbGA8cCBjbGFzcz1cImVtcHR5LXN0YXRlXCI+LTwvcD5gIDpcbiAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFnLXNjcm9sbFwiIHJlZj0ke3Njcm9sbFJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkYWctY2FudmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0ke2RhZy53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JHtkYWcuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZXJrbGUgREFHIHZpc3VhbGl6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGFnLmVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tID0gcG9pbnRNYXAuZ2V0KGVkZ2UuZnJvbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG8gPSBwb2ludE1hcC5nZXQoZWRnZS50bylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmcm9tIHx8ICF0bykgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke2Ake2VkZ2UuZnJvbX0tPiR7ZWRnZS50b31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZGFnLWVkZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgxPSR7ZnJvbS54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkxPSR7ZnJvbS55fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyPSR7dG8ueH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Mj0ke3RvLnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2RhZy5wb2ludHMubWFwKChwb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IHBvaW50Lmhhc2guc2xpY2UoMCwgNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcG9pbnQua2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleUJnV2lkdGggPSBNYXRoLm1heCg0OCwga2V5Lmxlbmd0aCAqIDEyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PSR7cG9pbnQuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhZy1ub2RlLWdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSR7KCkgPT4gb25TZWxlY3QocG9pbnQuaGFzaCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz0ke3NlbGVjdGVkSGFzaCA9PT0gcG9pbnQuaGFzaCA/ICdkYWctbm9kZSBkYWctbm9kZS1zZWxlY3RlZCcgOiAnZGFnLW5vZGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD0ke3BvaW50Lnh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN5PSR7cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcj0kezM2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkYWctbm9kZS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9JHtwb2ludC54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PSR7cG9pbnQueX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21pbmFudC1iYXNlbGluZT1cImNlbnRyYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkYWctbm9kZS1rZXktYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4PSR7cG9pbnQueCAtIChrZXlCZ1dpZHRoIC8gMil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9JHtwb2ludC55ICsgNDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSR7a2V5QmdXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSR7MjR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRhZy1ub2RlLWtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg9JHtwb2ludC54fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5PSR7cG9pbnQueSArIDU2fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21pbmFudC1iYXNlbGluZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICR7c2VsZWN0ZWRIYXNoICYmIGh0bWxgXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYWctc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0ZWQgbm9kZTogPGNvZGU+JHtzZWxlY3RlZEhhc2h9PC9jb2RlPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59XG4iLCJpbXBvcnQgeyB0eXBlIEZ1bmN0aW9uQ29tcG9uZW50LCByZW5kZXIgfSBmcm9tICdwcmVhY3QnXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCdcbmltcG9ydCB7IFN1YnN0cmF0ZUJ1dHRvbiB9IGZyb20gJ0BzdWJzdHJhdGUtc3lzdGVtL2J1dHRvbidcbmltcG9ydCB7IHVzZVNpZ25hbCB9IGZyb20gJ0BwcmVhY3Qvc2lnbmFscydcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdwcmVhY3QvaG9va3MnXG5pbXBvcnQgeyBDcmVhdGVGb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZS1mb3JtLmpzJ1xuaW1wb3J0IHsgTm9kZUNhcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm9kZS1jYXJkLmpzJ1xuaW1wb3J0IHsgSGlzdG9yeVBhbmVsIH0gZnJvbSAnLi9jb21wb25lbnRzL2hpc3RvcnktcGFuZWwuanMnXG5pbXBvcnQgeyBNZXJrbGVEYWcgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVya2xlLWRhZy5qcydcbmltcG9ydCB7IGZvcmtkYiB9IGZyb20gJy4vZGIuanMnXG5pbXBvcnQgeyB0eXBlIE5vZGVEZXRhaWwgfSBmcm9tICcuL3N0YXRlLmpzJ1xuXG5leHBvcnQgY29uc3QgQXBwOkZ1bmN0aW9uQ29tcG9uZW50ID0gZnVuY3Rpb24gQXBwICgpIHtcbiAgICBjb25zdCBub2RlcyA9IHVzZVNpZ25hbDxBcnJheTxOb2RlRGV0YWlsPj4oW10pXG4gICAgY29uc3Qgc2VsZWN0ZWRIYXNoID0gdXNlU2lnbmFsPHN0cmluZ3xudWxsPihudWxsKVxuICAgIGNvbnN0IGhlYWRNYXAgPSB1c2VTaWduYWw8UmVjb3JkPHN0cmluZywgc3RyaW5nW10+Pih7fSlcblxuICAgIGNvbnN0IHNlbGVjdEhhc2ggPSB1c2VDYWxsYmFjaygoaGFzaDpzdHJpbmcpID0+IHtcbiAgICAgICAgc2VsZWN0ZWRIYXNoLnZhbHVlID0gaGFzaFxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsTm9kZXMgPSBhd2FpdCBmb3JrZGIubGlzdCgpXG5cbiAgICAgICAgY29uc3QgZGV0YWlsZWQ6QXJyYXk8Tm9kZURldGFpbD4gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGFsbE5vZGVzLm1hcChhc3luYyAobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtib2R5LCBmb3J3YXJkTGlua3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBmb3JrZGIuZ2V0Qm9keShub2RlLmhhc2gpLmNhdGNoKCgpID0+ICcnKSxcbiAgICAgICAgICAgICAgICAgICAgZm9ya2RiLmxpbmtzKG5vZGUuaGFzaCksXG4gICAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLm5vZGUsIGJvZHksIGZvcndhcmRMaW5rcyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIG5vZGVzLnZhbHVlID0gZGV0YWlsZWRcblxuICAgICAgICBjb25zdCBrZXlzID0gYXdhaXQgZm9ya2RiLmtleXMoKVxuICAgICAgICBjb25zdCBobTpSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICBobVtrZXldID0gYXdhaXQgZm9ya2RiLmhlYWRzKGtleSlcbiAgICAgICAgfVxuICAgICAgICBoZWFkTWFwLnZhbHVlID0gaG1cbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZvcmtkYi5vcGVuKCkudGhlbihyZWZyZXNoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpXG4gICAgfSwgW3JlZnJlc2hdKVxuXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGZvcmtkYi5kZXN0cm95KClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFwcFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+Rm9ya0RCPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbnRlbnQtYWRkcmVzc2VkIGFwcGVuZC1vbmx5IHN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlZCBieSBJbmRleGVkREJcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHN1YnN0cmF0ZS1idXR0b24gY2xhc3M9XCJyZXNldC1idG5cIiBvbkNsaWNrPSR7aGFuZGxlUmVzZXR9PlxuICAgICAgICAgICAgICAgICAgICBSZXNldCBEQlxuICAgICAgICAgICAgICAgIDwvc3Vic3RyYXRlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLWdyaWRcIj5cbiAgICAgICAgICAgICAgICA8JHtDcmVhdGVGb3JtfSBvbkNyZWF0ZWQ9JHtyZWZyZXNofSAvPlxuXG4gICAgICAgICAgICAgICAgPCR7TWVya2xlRGFnfVxuICAgICAgICAgICAgICAgICAgICBub2Rlcz0ke25vZGVzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEhhc2g9JHtzZWxlY3RlZEhhc2gudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PSR7c2VsZWN0SGFzaH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJoZWFkcy1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImhlYWRzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5IZWFkczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke09iamVjdC5rZXlzKGhlYWRNYXAudmFsdWUpLmxlbmd0aCA9PT0gMCAmJiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5ObyBoZWFkcyB5ZXQuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7T2JqZWN0LmVudHJpZXMoaGVhZE1hcC52YWx1ZSkubWFwKChba2V5LCBoYXNoZXNdKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkcy1yb3dcIiBrZXk9JHtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vZGUta2V5XCI+JHtrZXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2hhc2hlcy5tYXAoKGhhc2gpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8JHtTdWJzdHJhdGVCdXR0b24uVEFHfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoYXNoLWxpbmsgaGVhZC1oYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSR7KCkgPT4gc2VsZWN0SGFzaChoYXNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2hhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Ly8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm5vZGVzLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibm9kZXMtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFsbCBub2RlczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke25vZGVzLnZhbHVlLmxlbmd0aCA9PT0gMCAmJiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gZG9jdW1lbnRzIHlldC4gQ3JlYXRlIG9uZSBhYm92ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtub2Rlcy52YWx1ZS5tYXAoKG5vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCR7Tm9kZUNhcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT0ke25vZGUuaGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZT0ke25vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PSR7c2VsZWN0SGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkSGFzaC52YWx1ZSAmJiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPCR7SGlzdG9yeVBhbmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g9JHtzZWxlY3RlZEhhc2gudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9JHtzZWxlY3RIYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufVxuXG5yZW5kZXIoaHRtbGA8JHtBcHB9IC8+YCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpXG4iXSwibmFtZXMiOlsibiIsImwiLCJ1IiwidCIsImkiLCJyIiwibyIsImUiLCJmIiwiYyIsInMiLCJhIiwicCIsInYiLCJ5IiwiZCIsInciLCJnIiwiXyIsIm0iLCJrIiwieCIsIlMiLCJDIiwieiIsImgiLCJiIiwiQSIsIlQiLCJqIiwiRiIsIk0iLCIkIiwiSSIsIkgiLCJxIiwiQiIsIl9fZGVmUHJvcCIsIl9fbmFtZSIsImlzUmVnaXN0ZXJlZCIsImRlZmluZSIsIl9tYXRjaCIsIl9hIiwiU3Vic3RyYXRlQnV0dG9uTGlnaHQiLCJsZW4iLCJsZW4yIiwiYnVmZmVyIiwicmVxdWlyZSQkMCIsImllZWU3NTQiLCJyZXF1aXJlJCQxIiwiZXhwb3J0cyIsIkJ1ZmZlciIsImVuY29kaW5nIiwiYnl0ZUxlbmd0aCIsImVycm9ycyIsIkUiLCJmb3JtYXRzIiwidGV4dEVuZGVjIiwicmVxdWlyZSQkMiIsImVuY29kaW5ncyIsInJlcXVpcmUkJDMiLCJSZWZsZWN0QXBwbHkiLCJSZWZsZWN0T3duS2V5cyIsIk51bWJlcklzTmFOIiwiZXZlbnRzTW9kdWxlIiwiZXZlbnRzIiwib25jZSIsInZhbHVlIiwiaXRlcmF0b3IiLCJyZXF1aXJlJCQ0IiwibmFtZSIsInByZWZpeExlbmd0aCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwicmVxdWlyZSQkNyIsInJlcXVpcmUkJDgiLCJyZXF1aXJlJCQ5IiwicmVxdWlyZSQkMTAiLCJyZXF1aXJlJCQxMSIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTMiLCJyZXF1aXJlJCQxNCIsInJlcXVpcmUkJDE1IiwiZXJyIiwicHJld3JpdGVCYXRjaCIsInJlcXVpcmUkJDE2IiwiYWJzdHJhY3RMZXZlbCIsImRlc2VyaWFsaXplIiwia2V5UmFuZ2UiLCJjbGVhciIsIkJyb3dzZXJMZXZlbCIsIkNyZWF0ZUZvcm0iLCJ1c2VDYWxsYmFjayIsImh0bWwiLCJOb2RlQ2FyZCIsIkhpc3RvcnlQYW5lbCIsInVzZUVmZmVjdCIsIm1heERlcHRoIiwibGFuZSIsIk1lcmtsZURhZyIsInVzZVJlZiIsIkFwcCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUcsSUFBQ0EsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBRUMsS0FBSUMsTUFBRSxDQUFBLEdBQUdDLE1BQUUsSUFBR0MsTUFBRSxxRUFBb0VDLE1BQUUsTUFBTTtBQUFRLFNBQVNDLElBQUVoQixJQUFFQyxJQUFFO0FBQUMsV0FBUUMsTUFBS0QsR0FBRSxDQUFBRCxHQUFFRSxFQUFDLElBQUVELEdBQUVDLEVBQUM7QUFBRSxTQUFPRjtBQUFDO0FBQUMsU0FBU2lCLElBQUVqQixJQUFFO0FBQUMsRUFBQUEsTUFBR0EsR0FBRSxjQUFZQSxHQUFFLFdBQVcsWUFBWUEsRUFBQztBQUFDO0FBQUMsU0FBU2tCLElBQUVqQixJQUFFQyxJQUFFQyxJQUFFO0FBQUMsTUFBSUMsSUFBRUMs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LEdBQUVBLEdBQUUsTUFBSSxDQUFBLEdBQUdELE1BQUUsS0FBSUQsTUFBRUc7QUFBQyxHQUFFSSxJQUFFLFNBQU8sU0FBU1QsSUFBRTtBQUFDYSxTQUFHQSxJQUFFYixFQUFDO0FBQUUsTUFBSUcsS0FBRUgsR0FBRTtBQUFJLEVBQUFHLE1BQUdBLEdBQUUsUUFBTUEsR0FBRSxJQUFJLElBQUksV0FBUyxNQUFJLEVBQUUsS0FBS0EsRUFBQyxLQUFHQyxRQUFJSyxJQUFFLDJCQUF5QkwsTUFBRUssSUFBRSwwQkFBd0JPLEtBQUcsQ0FBQyxJQUFHYixHQUFFLElBQUksR0FBRyxLQUFLLFNBQVNILElBQUU7QUFBQyxJQUFBQSxHQUFFLE1BQUlBLEdBQUUsTUFBSUEsR0FBRSxJQUFHQSxHQUFFLElBQUU7QUFBQSxFQUFNLENBQUMsSUFBR0UsTUFBRUcsTUFBRTtBQUFJLEdBQUVJLElBQUUsTUFBSSxTQUFTVCxJQUFFRyxJQUFFO0FBQUMsRUFBQUEsR0FBRSxLQUFLLFNBQVNILElBQUU7QUFBQyxRQUFHO0FBQUMsTUFBQUEsR0FBRSxJQUFJLEtBQUssQ0FBQyxHQUFFQSxHQUFFLE1BQUlBLEdBQUUsSUFBSSxPQUFPLFNBQVNBLElBQUU7QUFBQyxlQUFNLENBQUNBLEdBQUUsTUFBSSxFQUFFQSxFQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQyxTQUFPSyxJQUFFO0FBQUMsTUFBQUYsR0FBRSxLQUFLLFNBQVNILElBQUU7QUFBQyxRQUFBQSxHQUFFLFFBQU1BLEdBQUUsTUFBSSxDQUFBO0FBQUEsTUFBRyxDQUFDLEdBQUVHLEtBQUUsQ0FBQSxHQUFHTSxJQUFFLElBQUlKLElBQUVMLEdBQUUsR0FBRztBQUFBLElBQUM7QUFBQSxFQUFDLENBQUMsR0FBRUMsT0FBR0EsSUFBRUQsSUFBRUcsRUFBQztBQUFDLEdBQUVNLElBQUUsVUFBUSxTQUFTVCxJQUFFO0FBQUNtQixTQUFHQSxJQUFFbkIsRUFBQztBQUFFLE1BQUlHLElBQUVFLEtBQUVMLEdBQUU7QUFBSSxFQUFBSyxNQUFHQSxHQUFFLFFBQU1BLEdBQUUs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QUFBQyxHQUFFLElBQUVEO0FBQUUsVUFBRyxLQUFHLEVBQUUsRUFBRSxDQUFBQyxHQUFFLEVBQUVELEVBQUM7QUFBRSxhQUFPQTtBQUFBLElBQUMsV0FBUyxPQUFLQSxHQUFFLEdBQUU7QUFBQyxNQUFBQSxHQUFFLElBQUU7QUFBRSxVQUFHLFdBQVNBLEdBQUUsR0FBRTtBQUFDLFFBQUFBLEdBQUUsRUFBRSxJQUFFQSxHQUFFO0FBQUUsWUFBRyxXQUFTQSxHQUFFLEVBQUUsQ0FBQUEsR0FBRSxFQUFFLElBQUVBLEdBQUU7QUFBRSxRQUFBQSxHQUFFLElBQUUsRUFBRTtBQUFFLFFBQUFBLEdBQUUsSUFBRTtBQUFPLFVBQUUsRUFBRSxJQUFFQTtBQUFFLFVBQUUsSUFBRUE7QUFBQSxNQUFDO0FBQUMsYUFBT0E7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBUyxFQUFFQyxJQUFFRCxJQUFFO0FBQUMsT0FBSyxJQUFFQztBQUFFLE9BQUssSUFBRTtBQUFFLE9BQUssSUFBRTtBQUFPLE9BQUssSUFBRTtBQUFPLE9BQUssSUFBRSxRQUFNRCxLQUFFLFNBQU9BLEdBQUU7QUFBUSxPQUFLLElBQUUsUUFBTUEsS0FBRSxTQUFPQSxHQUFFO0FBQVUsT0FBSyxPQUFLLFFBQU1BLEtBQUUsU0FBT0EsR0FBRTtBQUFJO0FBQUMsRUFBRSxVQUFVLFFBQU07QUFBRSxFQUFFLFVBQVUsSUFBRSxXQUFVO0FBQUMsU0FBTTtBQUFFO0FBQUUsRUFBRSxVQUFVLElBQUUsU0FBU0MsSUFBRTtBQUFDLE1BQUlELEtBQUUsTUFBS0gsS0FBRSxLQUFLO0FBQUUsTUFBR0EsT0FBSUksTUFBRyxXQUFTQSxHQUFFLEdBQUU7QUFBQyxJQUFBQSxHQUFFLElBQUVKO0FBQUUsU0FBSyxJQUFFSTtBQUFFLFFBQUcsV0FBU0osR0FBRSxDQUFBQSxHQUFFLElBQUVJO0FBQUEsUUFBTyxHQUFFLFdBQVU7QUFBQyxVQUFJQTtBQUFFLGVBQU9BLEtBQUVELEdBQUUsTUFBSUMsR0FBRSxLQUFLRCxFQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFDO0FBQUUsRUFBRSxVQUFVLElBQUUsU0FBU0MsSUFBRTtBQUFDLE1BQUlELEtBQUU7QUFBSyxNQUFHLFdBQVMsS0FBSyxHQUFFO0FBQUMsUUFBSUgsS0FBRUksR0FBRSxHQUFFQyxLQUFFRCxHQUFFO0FBQUUsUUFBRyxXQUFTSixJQUFFO0FBQUMsTUFBQUEsR0FBRSxJQUFFSztBQUFFLE1BQUFELEdBQUUsSUFBRTtBQUFBLElBQU07QUFBQyxRQUFHLFdBQVNDLElBQUU7QUFBQyxNQUFBQSxHQUFFLElBQUVMO0FBQUUsTUFBQUksR0FBRSxJQUFFO0FBQUEsSUFBTTtBQUFDLFFBQUdBLE9BQUksS0FBSyxHQUFFO0FBQUMsV0FBSyxJQUFFQztBQUFFLFVBQUcsV0FBU0EsR0FBRSxHQUFFLFdBQVU7QUFBQyxZQUFJRDtBQUFFLGlCQUFPQSxLQUFFRCxHQUFFLE1BQUlDLEdBQUUsS0FBS0QsRUFBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUM7QUFBRSxFQUFFLFVBQVUsWUFBVSxTQUFTQyxJQUFFO0FBQUMsTUFBSUQsS0FBRTtBQUFLLFNBQU8sRUFBRSxXQUFVO0FBQUMsUUFBSUgsS0FBRUcsR0FBRSxPQUFNRyxLQUFFO0FBQUUsUUFBRTtBQUFPLFFBQUc7QUFBQyxNQUFBRixHQUFFSixFQUFDO0FBQUEsSUFBQyxVQUFDO0FBQVEsVUFBRU07QUFBQSxJQUFDO0FBQUEsRUFBQyxHQUFFLEVBQUMsTUFBSyxNQUFLLENBQUM7QUFBQztBQUFFLEVBQUUsVUFBVSxVQUFRLFdBQVU7QUFBQyxTQUFPLEtBQUs7QUFBSztBQUFFLEVBQUUsVUFBVSxXQUFTLFdBQVU7QUFBQyxTQUFPLEtBQUssUUFBTTtBQUFFO0FBQUUsRUFBRSxVQUFVLFNBQU8sV0FBVTtBQUFDLFNBQU8sS0FBSztBQUFLO0FBQUUsRUFBRSxVQUFVLE9BQUssV0FBVTtBQUFDLE1BQUlGLEtBQUU7QUFBRSxNQUFFO0FBQU8sTUFBRztBQUFDLFdBQU8sS0FBSztBQUFBLEVBQUssVUFBQztBQUFRLFFBQUVBO0FBQUEsRUFBQztBQUFDO0FBQUUsT0FBTyxlQUFlLEVBQUUsV0FBVSxTQUFRLEVBQUMsS0FBSSxXQUFVO0FBQUMsTUFBSUEsS0FBRSxFQUFFLElBQUk7QUFBRSxNQUFHLFdBQVNBLEdBQUUsQ0FBQUEsR0FBRSxJQUFFLEtBQUs7QUFBRSxTQUFPLEtBQUs7QUFBQyxHQUFFLEtBQUksU0FBU0EsSUFBRTtBQUFDLE1BQUdBLE9BQUksS0FBSyxHQUFFO0FBQUMsUUFBRyxJQUFFLElBQUksT0FBTSxJQUFJLE1BQU0sZ0JBQWdCO0FBQUUsU0FBSyxJQUFFQTtBQUFFLFNBQUs7QUFBSTtBQUFJO0FBQUksUUFBRztBQUFDLGVBQVFKLEtBQUUsS0FBSyxHQUFFLFdBQVNBLElBQUVBLEtBQUVBLEdBQUUsRUFBRSxDQUFBQSxHQUFFLEVBQUUsRUFBQztBQUFBLElBQUUsVUFBQztBQUFRLFFBQUM7QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFDLEVBQUMsQ0FBQztBQUFFLFNBQVMsRUFBRUksSUFBRUQsSUFBRTtBQUFDLFNBQU8sSUFBSSxFQUFFQyxJQUFFRCxFQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVDLElBQUU7QUFBQyxXQUFRRCxLQUFFQyxHQUFFLEdBQUUsV0FBU0QsSUFBRUEsS0FBRUEsR0FBRSxFQUFFLEtBQUdBLEdBQUUsRUFBRSxNQUFJQSxHQUFFLEtBQUcsQ0FBQ0EsR0FBRSxFQUFFLEVBQUMsS0FBSUEsR0FBRSxFQUFFLE1BQUlBLEdBQUUsRUFBRSxRQUFNO0FBQUcsU0FBTTtBQUFFO0FBQUMsU0FBU0YsSUFBRUcsSUFBRTtBQUFDLFdBQVFELEtBQUVDLEdBQUUsR0FBRSxXQUFTRCxJQUFFQSxLQUFFQSxHQUFFLEdBQUU7QUFBQyxRQUFJSCxLQUFFRyxHQUFFLEVBQUU7QUFBRSxRQUFHLFdBQVNILEdBQUUsQ0FBQUcsR0FBRSxJQUFFSDtBQUFFLElBQUFHLEdBQUUsRUFBRSxJQUFFQTtBQUFFLElBQUFBLEdBQUUsSUFBRTtBQUFHLFFBQUcsV0FBU0EsR0FBRSxHQUFFO0FBQUMsTUFBQUMsR0FBRSxJQUFFRDtBQUFFO0FBQUEsSUFBSztBQUFBLEVBQUM7QUFBQztBQUFDLFNBQVNXLElBQUVWLElBQUU7QUFBQyxNQUFJRCxLQUFFQyxHQUFFLEdBQUVKLEtBQUU7QUFBTyxTQUFNLFdBQVNHLElBQUU7QUFBQyxRQUFJRSxLQUFFRixHQUFFO0FBQUUsUUFBRyxPQUFLQSxHQUFFLEdBQUU7QUFBQyxNQUFBQSxHQUFFLEVBQUUsRUFBRUEsRUFBQztBQUFFLFVBQUcsV0FBU0UsR0FBRSxDQUFBQSxHQUFFLElBQUVGLEdBQUU7QUFBRSxVQUFHLFdBQVNBLEdBQUUsRUFBRSxDQUFBQSxHQUFFLEVBQUUsSUFBRUU7QUFBQSxJQUFDLE1BQU0sQ0FBQUwsS0FBRUc7QUFBRSxJQUFBQSxHQUFFLEVBQUUsSUFBRUEsR0FBRTtBQUFFLFFBQUcsV0FBU0EsR0FBRSxFQUFFLENBQUFBLEdBQUUsSUFBRTtBQUFPLElBQUFBLEtBQUVFO0FBQUEsRUFBQztBQUFDLEVBQUFELEdBQUUsSUFBRUo7QUFBQztBQUFDLFNBQVNnQixJQUFFWixJQUFFRCxJQUFFO0FBQUMsSUFBRSxLQUFLLE1BQUssTUFBTTtBQUFFLE9BQUssSUFBRUM7QUFBRSxPQUFLLElBQUU7QUFBTyxPQUFLLElBQUUsSUFBRTtBQUFFLE9BQUssSUFBRTtBQUFFLE9BQUssSUFBRSxRQUFNRCxLQUFFLFNBQU9BLEdBQUU7QUFBUSxPQUFLLElBQUUsUUFBTUEsS0FBRSxTQUFPQSxHQUFFO0FBQVUsT0FBSyxPQUFLLFFBQU1BLEtBQUUsU0FBT0EsR0FBRTtBQUFJO0FBQUNhLElBQUUsWUFBVSxJQUFJO0FBQUVBLElBQUUsVUFBVSxJQUFFLFdBQVU7QUFBQyxPQUFLLEtBQUc7QUFBRyxNQUFHLElBQUUsS0FBSyxFQUFFLFFBQU07QUFBRyxNQUFHLE9BQUssS0FBRyxLQUFLLEdBQUcsUUFBTTtBQUFHLE9BQUssS0FBRztBQUFHLE1BQUcsS0FBSyxNQUFJLEVBQUUsUUFBTTtBQUFHLE9BQUssSUFBRTtBQUFFLE9BQUssS0FBRztBQUFFLE1BQUcsS0FBSyxJQUFFLEtBQUcsQ0FBQyxFQUFFLElBQUksR0FBRTtBQUFDLFNBQUssS0FBRztBQUFHLFdBQU07QUFBQSxFQUFFO0FBQUMsTUFBSVosS0FBRTtBQUFFLE1BQUc7QUFBQ0gsUUFBRSxJQUFJO0FBQUUsUUFBRTtBQUFLLFFBQUlFLEtBQUUsS0FBSyxFQUFDO0FBQUcsUUFBRyxLQUFHLEtBQUssS0FBRyxLQUFLLE1BQUlBLE1BQUcsTUFBSSxLQUFLLEdBQUU7QUFBQyxXQUFLLElBQUVBO0FBQUUsV0FBSyxLQUFHO0FBQUksV0FBSztBQUFBLElBQUc7QUFBQSxFQUFDLFNBQU9DLElBQUU7QUFBQyxTQUFLLElBQUVBO0FBQUUsU0FBSyxLQUFHO0FBQUcsU0FBSztBQUFBLEVBQUc7QUFBQyxNQUFFQTtBQUFFVSxNQUFFLElBQUk7QUFBRSxPQUFLLEtBQUc7QUFBRyxTQUFNO0FBQUU7QUFBRUUsSUFBRSxVQUFVLElBQUUsU0FBU1osSUFBRTtBQUFDLE1BQUcsV0FBUyxLQUFLLEdBQUU7QUFBQyxTQUFLLEtBQUc7QUFBRyxhQUFRRCxLQUFFLEtBQUssR0FBRSxXQUFTQSxJQUFFQSxLQUFFQSxHQUFFLEVBQUUsQ0FBQUEsR0FBRSxFQUFFLEVBQUVBLEVBQUM7QUFBQSxFQUFDO0FBQUMsSUFBRSxVQUFVLEVBQUUsS0FBSyxNQUFLQyxFQUFDO0FBQUM7QUFBRVksSUFBRSxVQUFVLElBQUUsU0FBU1osSUFBRTtBQUFDLE1BQUcsV0FBUyxLQUFLLEdBQUU7QUFBQyxNQUFFLFVBQVUsRUFBRSxLQUFLLE1BQUtBLEVBQUM7QUFBRSxRQUFHLFdBQVMsS0FBSyxHQUFFO0FBQUMsV0FBSyxLQUFHO0FBQUksZUFBUUQsS0FBRSxLQUFLLEdBQUUsV0FBU0EsSUFBRUEsS0FBRUEsR0FBRSxFQUFFLENBQUFBLEdBQUUsRUFBRSxFQUFFQSxFQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQztBQUFFYSxJQUFFLFVBQVUsSUFBRSxXQUFVO0FBQUMsTUFBRyxFQUFFLElBQUUsS0FBSyxJQUFHO0FBQUMsU0FBSyxLQUFHO0FBQUUsYUFBUVosS0FBRSxLQUFL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QzFCLE9BQU8sSUFBSSxDQUFDLFNBQVNBO0FBQUFBLHVDQUNoQixnQkFBZ0IsR0FBRztBQUFBLDhDQUNaLElBQUk7QUFBQTtBQUFBLGtEQUVBLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFBQTtBQUFBLDBDQUU5QixJQUFJO0FBQUE7QUFBQSxpQ0FFYixDQUFDO0FBQUE7QUFBQSx5QkFFVCxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBT0EsTUFBTSxNQUFNLFdBQVcsS0FBS0E7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEseUJBSTdCO0FBQUEsMEJBQ0MsTUFBTSxNQUFNLElBQUksQ0FBQyxTQUFTQTtBQUFBQSwrQkFDckIsUUFBUTtBQUFBLHNDQUNELEtBQUssSUFBSTtBQUFBLHVDQUNSLElBQUk7QUFBQSwyQ0FDQSxVQUFVO0FBQUE7QUFBQSx5QkFFNUIsQ0FBQztBQUFBO0FBQUE7QUFBQSxzQkFHSixhQUFhLFNBQVNBO0FBQUFBLDJCQUNqQixZQUFZO0FBQUEsbUNBQ0osYUFBYSxLQUFLO0FBQUEsdUNBQ2QsVUFBVTtBQUFBO0FBQUEscUJBRTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLckI7QUFFQVMsRUFBT1QsT0FBUSxHQUFHLE9BQU8sU0FBUyxlQUFlLE1BQU0sQ0FBRTsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NV19
